var x1= 10;
function foo1() {
  console.log(x1);
}
foo1();
//output is 10


// 1. What is the output of:

var x2 = 10;
function foo2() {
  var x2 = 20;
  console.log(x2);
}
foo2();

// Output: 20

var x3 = 10;
function foo3() {
  console.log(x3);
}
var x3 = 20;
foo3();
// output is 20


function foo4() {
    console.log(x4);
  }
  var x4 = 10;
  foo4();
  // output is 10


  function foo5() {
    console.log(x5);
  }
  foo5();
  var x5 = 10;
    // output x5 is undefined




  
  





