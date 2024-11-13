// Immediately Invoked Function Expression (IIFE)
// jo function ke andar call krke bhi koi bhi function execute krna chahie toh use krte hain IIFE
// global scope ke pollution se problem hoti hai kai bar.. to global scope ke variable ko hatane ke liye IIFE use krte hain


(function chai() {
  console.log(`DB CONNECTED`);
  
})(); 

  ( (name) => {
    console.log(`DB CONNECTED two ${name}`);
  })('brij');


