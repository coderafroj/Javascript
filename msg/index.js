// wa-bulk / index.js
// Baileys se WhatsApp par customers ko message bhejne ka basic script
// Chalane se pehle: npm install @whiskeysockets/baileys qrcode-terminal

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const qrcode = require("qrcode-terminal");
const fs = require("fs");

// ---------- SETTINGS (inhe apne hisab se badlein) ----------
const NUMBERS_FILE = "./numbers.csv";   // ek column, sirf 10-digit numbers
const COUNTRY_CODE = "91";              // India

// Message.txt file me apna message likhein (bina code chhue badal sakte hain)
const MESSAGE_FILE = "./message.txt";

// Agar image bhi bhejni ho to yahan uska path daalein, warna "" khali rehne dein
const IMAGE_PATH = "./img.jpg";       // example: "./offer.jpg"
const SEND_IMAGE = true;               // true karein agar image bhejni hai

const MIN_DELAY_SEC = 0.5;
const MAX_DELAY_SEC = 1;
const DAILY_LIMIT = 150;                // ek run me itne hi bhejein
const LOG_FILE = "./sent_log.csv";
// -------------------------------------------------------------

function loadMessage() {
  if (!fs.existsSync(MESSAGE_FILE)) {
    console.log(`${MESSAGE_FILE} nahi mili, default message use ho raha hai.`);
    return "Namaste! Hamare naye offers dekhne ke liye visit karein: https://example.com";
  }
  return fs.readFileSync(MESSAGE_FILE, "utf-8").trim();
}

function loadNumbers() {
  const raw = fs.readFileSync(NUMBERS_FILE, "utf-8");
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((num) => num.replace(/\D/g, "")) // sirf digits rakho
    .filter((num) => num.length === 10)
    .map((num) => COUNTRY_CODE + num);
}

function loadAlreadySent() {
  if (!fs.existsSync(LOG_FILE)) return new Set();
  const raw = fs.readFileSync(LOG_FILE, "utf-8");
  return new Set(
    raw
      .split("\n")
      .map((l) => l.split(",")[0])
      .filter(Boolean)
  );
}

function logResult(number, status) {
  const line = `${number},${status},${new Date().toISOString()}\n`;
  fs.appendFileSync(LOG_FILE, line);
}

function randomDelayMs() {
  const sec =
    MIN_DELAY_SEC + Math.random() * (MAX_DELAY_SEC - MIN_DELAY_SEC);
  return Math.floor(sec * 1000);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./auth_info");

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log("\nApne phone se ye QR scan karein (WhatsApp > Linked Devices):\n");
      qrcode.generate(qr, { small: true });
    }

    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log("Connection band ho gaya, reconnect:", shouldReconnect);
      if (shouldReconnect) startBot();
    } else if (connection === "open") {
      console.log("Connected! Ab messages bhejna shuru karenge...\n");
      await sendBulkMessages(sock);
    }
  });
}

async function sendBulkMessages(sock) {
  const allNumbers = loadNumbers();
  const alreadySent = loadAlreadySent();
  const messageText = loadMessage();

  const pending = allNumbers.filter((n) => !alreadySent.has(n));
  const batch = pending.slice(0, DAILY_LIMIT);

  console.log(`Total numbers: ${allNumbers.length}`);
  console.log(`Pehle se bheje ja chuke: ${alreadySent.size}`);
  console.log(`Is run me bhejenge: ${batch.length}`);
  console.log(`Image bhejna: ${SEND_IMAGE ? "haan" : "nahi"}\n`);

  if (SEND_IMAGE && !fs.existsSync(IMAGE_PATH)) {
    console.log(`Warning: ${IMAGE_PATH} nahi mili. Sirf text jayega.`);
  }

  for (let i = 0; i < batch.length; i++) {
    const number = batch[i];
    const jid = `${number}@s.whatsapp.net`;

    try {
      const [result] = await sock.onWhatsApp(jid);
      if (!result?.exists) {
        console.log(`[${i + 1}/${batch.length}] ${number} — WhatsApp par nahi mila, skip`);
        logResult(number, "not_on_whatsapp");
        continue;
      }

      if (SEND_IMAGE && fs.existsSync(IMAGE_PATH)) {
        await sock.sendMessage(jid, {
          image: fs.readFileSync(IMAGE_PATH),
          caption: messageText,
        });
      } else {
        await sock.sendMessage(jid, { text: messageText });
      }

      console.log(`[${i + 1}/${batch.length}] ${number} — bheja gaya ✓`);
      logResult(number, "sent");
    } catch (err) {
      console.log(`[${i + 1}/${batch.length}] ${number} — fail: ${err.message}`);
      logResult(number, "failed");
    }

    if (i < batch.length - 1) {
      const delay = randomDelayMs();
      console.log(`  ...${Math.round(delay / 1000)} second wait...\n`);
      await sleep(delay);
    }
  }

  console.log("\nIs batch ka kaam pura hua. Baaki numbers agle din chalayein.");
  process.exit(0);
}

startBot();