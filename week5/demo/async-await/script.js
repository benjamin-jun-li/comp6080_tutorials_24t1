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

const getResult = async () => {
  const res = await makeRequest(89);
  console.log(res);
}

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

const doStuff = async () => {
  const walkDogRes = await walkDog();
  const doLaundryRes = await doLaundry();
  const cleanYardRes = await cleanYard();
  const resList = await Promise.all([walkDog(), doLaundry(), cleanYard()]);
  console.log(resList);
}

doStuff();