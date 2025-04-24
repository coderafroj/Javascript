function setUserName(username){
  this.username=username
}
function user(username,email,password){
  setUserName.call(this,username)
  this.email=email
  this.password=password
}
const chai=new user("afroj","afu@techgmail.com",1234)
console.log(chai)
