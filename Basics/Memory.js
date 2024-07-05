/* 
  * Primitive Data Type -> Stack Memory
    -> In This memory we get the copy 

    

  * Non Primitive Data Type -> Heap Memory
     -> In this We get the reference (changes are done to the original variable)

*/

// * Here Copy is Made (Primitive Data type (stack))
let x = "Amit";

let y = x;
y = "Raj";

console.table([x, y]);

// * Here Reference is gotten (Non Primitive Data type (Heap))
// * Actuall changes are reflected back to the original One.

let userOne = {
  Name: "Mohit Babu",
  upi: "user1@ybl",
};

let userTwo = userOne;

userOne.Name = "Mohit Gangwar";

console.table([userOne]);
