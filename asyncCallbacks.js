/* Asyn callbacks are the callbacks that  start execting now but it finish later.

1.Js is a single threaded  so it dont wait for webapis the completes its exection , if they do then
 whole UI freezes .
 
 2.Asyn callbacks are send into a microtasks sections or callbackqueue 

 3. if it execute sucessfully then we  will  run callback task that  excute the data that fetches

 4. Ex: setTimeout( function abc()=>{

 },1000)

 function abc is callback function because it will execute only when 1000ms complete , it means this 
 peice of code or fucntion abc will have to wait , but JS thread dont wait so it move to next line and  
 when js thread is idle then it execute callbacks 




*/

function fetchApi(url, handleData) {
  setTimeout(() => {
    const data = { name: "nishant", id: 1 };

    handleData(data);
  }, 3000);
}
function handleData(data) {
  console.log(data);
}

// this is a demo of fetch api how it work internally and
fetchApi("https://apple.com", handleData);
