//Que:01
function hello () {
    console.log("Hello!");
}
hello();

//Que:02
function Addition(a,b){
   console.log("Sum of "+a+" and "+b+" is "+(a+b));
}
Addition(3,4);

//Que:03
asi = () => {
   console.log ("Hello asi!");
}
asi();

//Que:04
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//Que:05
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//Que:06
var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

//Que:07
function factorial(n){
    let product=1
    for(i=1;i<=n;i++){
      product=product*i;
    }
    console.log(product);
  }
  factorial(10);

//Que:08
  function FindSum(a, b){
      return a + b;
  }
  
  function DisplayData(data, batch){
      console.log(`i am from ${data} and My batch is EA${batch}`)
  }
  
  DisplayData("PrepBytes", FindSum(10, 9));
 
//Que:09
Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}

//Que:10
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

//Que:11
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")