//examples of block scope

// {
//     var a1=20;
//     let a2=30;
//     const a3=50;
//     console.log(a1+a2+a3);    
// }


// {
//  var a="ambika";
//  let a1=50;
//  const a2="swathi";
//  console.log(a+a1+a2);
// }

//  {
//     let a="java";
//     const a1="script";
//     console.log(a+a1);
    
// }




//FUNCTION SCOPE EXAMPLES

// function a2(){
//     let a1="ambika";
//     const a22="swathi"
//     console.log(a1+a22);
    
// }
// a2()


// function my(){
//     let a1=500;
//     const a2=200;
//     var a3=300;
//     console.log(a1+a2+a3);
    
// }
// my()



// GLOBAL SCOPE EXAMPLES


// var a1=20;
// function a(){
//     console.log(a1);
    
// }
// a();
// console.log(a1);


var a1=50;
function hello() {
    let a2=40;
    console.log(a2);
    
}
hello()
console.log(a1);
