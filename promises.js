// In order to  prevent from callback hell  we go for PROMISES
/* 
Promises is an object that either return resolve or reject , if promise sucessfully  worked the it return as resolve
else it return as reject
1. promise  has 3 state  pending fulfill reject
2. promise reject must try to return in an form of error object
3. In order to acess promise object we must use , .then, .catch , .fulfil
4. promise let you  rely on a concept that the webapi must return something that must be either fulfilled of reject
 
*/

//Create a new promise

const newPromise = new Promise((resolve, reject) => {
  let valid = false;
  //Promise must return either reject or resolve
  if (valid) {
    resolve("validate sucessfully");
  } else {
    const err = new Error("error in fetching data");
    reject(err);
  }
});

/// How can i use promise
// proimise must resolve with .then and .catch

newPromise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
