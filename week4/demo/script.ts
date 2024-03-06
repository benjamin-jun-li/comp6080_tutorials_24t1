// // Promise pending rejected fulfilled
// document.title = "promise";
// const p = new Promise((resolve, reject) => {
//   let a = Math.max(...[1, 2, 3, 4]);
//   if (a === 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((msg) => console.log(msg)).catch((err) => console.log(err));

// /**
//  * Example from callback to promise
//  */
// const stuLeft = false;
// const stuPlayingLOL = false;

// const watchTutCallback = (callback, errCallback) => {
//   if (stuLeft) {
//     errCallback({
//       name: "Student left",
//       message: ":(",
//     });
//   } else if (stuPlayingLOL) {
//     errCallback({
//       name: "Student taking a shower",
//       message: "Benjamin < LOL",
//     });
//   } else {
//     callback("Thanks for joining");
//   }
// };

// // watchTutCallback(
// //   (msg) => console.log(`success: ${msg}`),
// //   (err) => console.log(`failed: ${err}`)
// // );

// const watchTutPromise = () => {
//   return new Promise((resolve, reject) => {
//     if (stuLeft) {
//       reject({
//         name: "Student left",
//         message: ":(",
//       });
//     } else if (stuPlayingLOL) {
//       reject({
//         name: "Student taking a shower",
//         message: "Benjamin < LOL",
//       });
//     } else {
//       resolve("Thanks for joining");
//     }
//   });
// };

// watchTutPromise()
//   .then((msg) => console.log(msg))
//   .catch(err => console.log(err));

// const doneAss2 = new Promise((resolve, reject) => {
//     resolve("finished ass2");
// })

// const doneAss3 = new Promise((resolve, reject) => {
//     resolve("finished ass3");
// })

// const doneAss4 = new Promise((resolve, reject) => {
//     resolve("finished ass4");
// })

// console.log(doneAss2);

// Promise.race([doneAss2, doneAss3, doneAss4]).then(msgArr => {
//     console.log(msgArr);
// });
const BASE_URL = "https://reqres.in/api";

const getUserInfo = (id, all) => {
  if (all) return fetch(`${BASE_URL}/users`);
  else return fetch(`${BASE_URL}/user/${id}`);
};

// console.log(fetch(`${BASE_URL}/users`));
// http requests status 200 ok; 404 not found; 403 unauthorized; 401 manually handles error in backend
// fetch(BASE_URL)
//   .then((res) => {
//     if (res.ok) {
//       console.log(res.status, "all good");
//     } else {
//       console.error(res.status, "failed");
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data.data))
//   .catch((err) => console.log(err));
//CRUD POST GET PUT DELETE
interface User {
  name: string,
  gender: "M" | "F",
  age: number,
  bio: string[]
}

type HttpMethod = "GET" | "POST" | "DELETE" | "PUT";

const apiCall = (data: User | {}, option, method: HttpMethod) => {
  return fetch(`BASE_URL/${option}`, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

const createUser = (user: User) => {
  return apiCall({}, "/users", "POST");      
}
