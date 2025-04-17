//for loop
// for(let i=0;i<10;i++){
//   const element=i
//   console.log(element)
// }

// for(let i=0;i<=10;i++){
//   if(i%2==0){
//     console.log(`${i} this is even number`)
//   }
//   console.log(i)
// }

// for(let i=0;i<10;i++){
//   console.log(`outer loop ${i}`)
//   for(let j=0;j<10;j++){
//     console.log(`inner loop value ${j} inner loop ${i}`)
//   }
// }

//table
for(let i=1;i<=10;i++){
  // console.log(`table of ${i}`)
  for(let j=1;j<=10;j++){
    // console.log(`${i}*${j} = ${i*j}`)
  }
}
const myArray=["Python","Java","Javascript","html/css"]
for(let i=0;i<myArray.length;i++){
  const el=myArray[i]
 // console.log(el)
}

//break and continue

for(let i=0;i<=10;i++){
  if(i==5){
    console.log("5 a gaya babu")
    break
  }
  console.log(i)
}

for(let i=0;i<=10;i++){
  if(i==5){
    console.log("tata 5")
    continue
  }
  console.log(i)
}
