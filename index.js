const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 5000;

const users = [
  { id: 0, name: "sabana", email: "sabana@gmail.com" },
  { id: 1, name: "jabana", email: "jabana@gmail.com" },
  { id: 2, name: "kabana", email: "kabana@gmail.com" },
  { id: 3, name: "bolona", email: "bolona@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

// receiving the data form UI

app.post("/users", (req, res) => {
  const newUsers = req.body;
  newUsers.id = users.length;
  users.push(newUsers);
  res.json(newUsers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/users", (req, res) => {
  const result = req.query.search;
  if (result) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(result)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const request = req.params.id;
  const user = users[request];
  res.send(user);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
