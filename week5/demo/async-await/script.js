/**
 * Async/Await
 * async = makes a function return a promise
 * await = make an async function wait for a promise to be resolved
 * write asynchronus code in a synchronous way
 * everything put after await is within the event queue to be processed
 *
 */
document.title = "async";

const makeRequest = (num) => {
  return new Promise((resolve, reject) => {
    resolve(num);
  });
};

makeRequest(100)
  .then((res) => {
    console.log(res);
    return res.toString();
  })
  .then((data) => {
    console.log(data, typeof data);
  });

const getResult = async () => {
  const res = await makeRequest(98);
  console.log(res);
  return res;
};

// more examples
const walkDog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dog walked 🐕");
    }, 1500);
  });
};

const doLaundry = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("laundry done 🧺");
    }, 1000);
  });
};

const cleanYard = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("yard cleaned 🧑‍🌾");
    }, 2000);
  });
};

// user/info
// user/threads


const doSomething = async () => {
    const [walkDogRes, doLaundryRes, cleanYardRes] = Promise.all([walkDog(), doLaundry(), cleanYard()]).then(resList => {
        
    });
    console.log(walkDogRes, doLaundryRes, cleanYardRes);
};

doSomething();
