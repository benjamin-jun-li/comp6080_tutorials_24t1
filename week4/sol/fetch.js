// console.log(fetch("https://reqres.in/api/users"));

fetch("https://reqres.in/api/user/200")
  .then((res) => {
    if (res.status === 200) console.log("success");
    else console.log("failed");
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// POST DELETE
fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "user 1",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
