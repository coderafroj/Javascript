class User{
  constructor(username,email,password){
    this.username=username
    this.email=email
    this.password=password
    
  }
  encryptPassword(){
    return `${this.password}askksj`
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}
const user1=new User("afroj","afroj@gmail.com",1729)
console.log(user1)
console.log(user1.encryptPassword())
console.log(user1.changeUsername())
