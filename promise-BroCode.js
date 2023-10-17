// Promise = object that encapsulate the result of an asynchronous operation
//           let asynchronous methods return values like synchronous methodes
//           "Im promise to return something in the future"

//           the STATE is 'pending' then: 'resolve' or 'rejected'
//           the RESULT is what can be returned
//           containing 2 part 'PRODUCING' and 'CONSUMING'

//------Example1--------//
// Creating a Promise
const dataLoader =  new Promise((resolve, reject) => {

  let dataReceive = true; // Stimulating server request

  if(dataReceive){
    let data = { name: 'Ali', age: 50}; // Stimulating data
    resolve(data); // If the data is received promise is resolved with the data
  }
  else{
    let error = new Error("There is data leak!")
    reject(error); // If data is not received, the promise is rejected with and error
  }
})

// Consuming the Promise
dataLoader
  .then((value) => {console.log("The person is", value)})
  .catch(wrong => {console.log("Warning:", wrong.message)})



//-------Example2--------//
// resolve only with setTimeout method

// Producing
const wait = new Promise(resolve => {
  setTimeout(resolve, 2000)
});

// Consuming
wait.then(() => console.log("Thanks for waiting."));

