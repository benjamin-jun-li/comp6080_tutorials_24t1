// what is a promise

const p = new Promise((resolve, reject) => {
  let a = Math.max(...[1, 2, 3, 4]);
  if (a === 2) {
    // a === 4
    resolve("success");
  } else {
    reject("Failed");
  }
});

p.then((msg) => {
  console.log(`This is the status: ${msg}`);
}).catch((err) => {
  console.log(`This is in catch: ${err}`);
});

/**
 * Example from callback to promise
 */
const stuLeft = false;
const stuPlayingLOL = false;

const watchTutCallback = (callback, errCallback) => {
  if (stuLeft) {
    errCallback({
      name: "Student left",
      message: ":(",
    });
  } else if (stuPlayingLOL) {
    errCallback({
      name: "Student taking a shower",
      message: "Benjamin < LOL",
    });
  } else {
    callback("Thanks for joining");
  }
};

watchTutCallback(
  (msg) => {
    console.log(`Success: ${msg}`);
  },
  (err) => {
    console.log(`${err.name} ${err.msg}`);
  }
);

const watchTutPromise = () => {
  return new Promise((resolve, reject) => {
    if (stuLeft) {
      reject({
        name: "Student left",
        message: ":(",
      });
    } else if (stuPlayingLOL) {
      reject({
        name: "Student taking a shower",
        message: "Benjamin < LOL",
      });
    } else {
      resolve("Thanks for joining");
    }
  });
};

watchTutPromise()
  .then((msg) => msg.trim())
  .then((msg) => Array.from(msg))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const doneAss2 = new Promise((resolve, reject) => {
  resolve("finished ass2");
});

const doneAss3 = new Promise((resolve, reject) => {
  resolve("finished ass3");
});

const doneAss4 = new Promise((resolve, reject) => {
  resolve("finished ass4");
});

// diff in all and race

Promise.all([doneAss2, doneAss3, doneAss4]).then((msgArr) => {
  console.log(msgArr);
});
