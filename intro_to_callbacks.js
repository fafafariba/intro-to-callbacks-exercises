//clock
class Clock {
  constructor() {
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    this.printTime();
  }
}

const clock = new Clock();

// setInterval( () => {
//   clock._tick();
// }, 1000);


//addNumbers
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft > 0) {
    numsLeft--;
    reader.question('Enter number: ', (input) => {
      sum += parseInt(input);
      console.log(`Current Sum: ${sum}`);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
};

addNumbers(0, 3, sum => {
  console.log(`Total Sum: ${sum}`);
  reader.close();
});


//absurdBubbleSort
const readline2 = require('readline');

const reader2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askIfGreaterThan = (el1, el2, callback) => {
   reader2.question(`Is ${el1} greater than ${el2} ? `, (input) => {
    if (input.toLowerCase() === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
};

// askIfGreaterThan(1, 2, (value) => console.log(value));

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
    //return?
  } else {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan)=>{
      if (isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        console.log(arr);
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, (i+1), madeAnySwaps, outerBubbleSortLoop);
    });
  }
};

const absurdBubbleSort = (arr, sortCompletionCallback) => {
  const outerBubbleSortLoop = (swaps) => {
    if (swaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };
  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader2.close();
});

//myBind
Function.prototype.myBind = function (context) {
  return () => this.apply(context);
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
