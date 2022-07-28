// Write one example explaining how you can write a callback function ?

function callBack() {
  console.log("this is a callback function");
}

setTimeout(callBack, 3000);

// QUESTION 2.
// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

function printNumbers() {
  setTimeout(() => {
    console.log("Printing After one second 1");
  }, 1000);
  setTimeout(() => {
    console.log("Printing After two seconds 2");
  }, 2000);
  setTimeout(() => {
    console.log("Printing After three second 3");
  }, 3000);
  setTimeout(() => {
    console.log("Printing After four second 4");
  }, 4000);
  setTimeout(() => {
    console.log("Printing After five second 5");
  }, 5000);
  setTimeout(() => {
    console.log("Printing After six second 6");
  }, 6000);
  setTimeout(() => {
    console.log("Printing After seven second 7");
  }, 7000);
}
printNumbers();

// QUESTION 3.
// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

let promise = new Promise((resolve, reject) => {
  resolve();
});

promise
  .then(() => {
    setTimeout(() => {
      console.log("promise Printing After one second 1");
    }, 1000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("promise Printing After two second 2");
    }, 2000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("promise Printing After three second 3");
    }, 3000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("promise Printing After four second 4");
    }, 4000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("promise Printing After five second 5");
    }, 5000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("promise Printing After six second 6");
    }, 6000);
  })
  .then(() => {
    setTimeout(() => {
      console.log("promise Printing After seven second 7");
    }, 7000);
  });

//OUESTION 4.
//  Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state
// and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print
// Promise Rejected

const promise1 = new Promise((resolve, reject) => {
  resolve("Promise resolved");
  reject("promise rejected");
});
promise1
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Question5

//Create examples to explain callback function

const sayingHello = function () {
  console.log("This is an  callback function");
};

setTimeout(sayingHello, 3000);

//Question6
//Create examples to explain callback hell function

const myName = () => {
  setTimeout(() => {
    console.log("Fetching the details");
    let id = [1, 2, 3, 4, 5];
    console.log(id);

    setTimeout(() => {
      let myName = {
        fName: "sachin",
        lName: "tewatia",
        age: 21,
      };
      console.log(
        `The name of the employee is ${myName.fName} ${myName.lName} and the age id ${myName.age}`
      );

      setTimeout(() => {
        myName.gender = "female";
        console.log(
          `The name of the employee is ${myName.fName} ${myName.lName} and the age id ${myName.age} and the gender is ${myName.gender}`
        );
      }, 3000);
    }, 4000);
  }, 5000);
};
myName();

//Question7
//Create examples to explain promises function

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let Name = "ajay";
    resolve(Name);
  }, 3000);
});

myPromise
  .then((data) => {
    console.log(`this will print the name : ${data}`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("successfully done");
  });

//Question8
//Create examples to explain async await function

let myPromise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 1000);
});

async function asyncFunc() {
  let result = await myPromise1;

  console.log(result);
  console.log("this is async/await");
}
asyncFunc();

//Question9
//Create examples to explain promise.all function

const promise11 = Promise.resolve(3);
const promise12 = 23;
const Promise13 = new Promise((resolve, reject) => {
  setTimeout(resolve, 17, "hey");
});

Promise.all([promise11, promise12, Promise13]).then((values) => {
  console.log(values);
});
