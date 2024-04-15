/*

every .then of promise return another promise which create a chain of promise the must follow a sequecne to 
complete a task
1.  promise chain follow linear chain 
*/

// created new promise
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});
// this return a promise
// now come to promise chain

newPromise
  .then((result) => {
    console.log(`1 st chain has value ${result}`);
    return result * 2;
  })
  .then((result) => {
    console.log(`2nd chain ${result}`);
    return result * 2;
  })
  .then((result) => {
    console.log(`3rd chain has value ${result}`);
    return result * 2;
  })
  .catch((err) => {
    console.log(err);
  });
