
// let x=10;
// x+=5;
// console.log(x); // 15

// x-=5; //x=x-5 (x=15)
// console.log(x) // 

// x*=5; //x=x*5 (x=50)
// console.log(x) //

// //Post increment - value++ =>value+1

// console.log(x++);// x=50
// console.log(x);//x=51

// //Pre increment - value

// console.log(++x);// x=52
// console.log(x);//x=52

// //Post decrement - value-- =>value-1

// console.log(x--);// x=50
// console.log(x);//x=49

// //Pre decrement - value

// console.log(--x);// x=48
// console.log(x);//x=48

/* Strict equality "==="
1.Compare datatype and
2. Compare the value  */

/* Non Strict equality (loose equality)"=="
 Compare the value and not the datatype */


console.log(1===1);//true
console.log(1==="1");//false
console.log(1=="1");//true becuse in js loose equality your datatype gets converted -> type coercion
console.log(1==false);//true becuse in js loose equality your datatype gets converted -> type coercion

  console.log(1===true);//false becuse in js loose equality your datatype gets converted -> type coercion