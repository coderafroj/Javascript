//immediately invoked function expression(IIFE)
(function coder(){
  //named iife
  console.log("Db Connected")
})() ; 
//()()--first parenthessis--function defination,second parenthessis--functio exicute
//2 iife ek sath
(function one(){
  console.log("db connected 1")
})();
//arrow functionbhi de skte hai
(()=>{
  console.log("db connected 2")
})();

//koi variable use kar ho to 
((name)=>{
  console.log(`db connected ${name}`)
})("coderafroj");

