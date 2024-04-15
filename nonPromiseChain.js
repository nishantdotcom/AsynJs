// nonpromise chain occur when same promise uses in more than one place

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

const abc = newPromise.then((result) => {
  console.log(result);
  return result * 2;
});

const pqr = newPromise.then((result) => {
  console.log(result);
  return result * 3;
});

const sjd = newPromise.then((result) => {
  console.log(result);
  return result * 4;
});

// as we know all the value  return same value 3 because the get from same promise
