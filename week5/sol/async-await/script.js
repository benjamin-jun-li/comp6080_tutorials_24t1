document.title = "async-await";

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
    // some behaviour
    console.log(data, typeof data);
  });

// This is not valid
// const result = await makeRequest(88);
// console.log(result);

// This is valid
const getResult = async () => {
  const res = await makeRequest(98);
  console.log(res);
};

getResult();

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

const doStuff = async () => {
  const walkDogRes = await walkDog();
  const doLaundryRes = await doLaundry();
  const cleanYardRes = await cleanYard();
  const [res1, res2, res3] = await Promise.all([
    walkDog(),
    doLaundry(),
    cleanYard(),
  ]);
  console.log(walkDogRes, doLaundryRes, cleanYardRes);
  console.log(res1, res2, res3);
};

doStuff();
