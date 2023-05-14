const { Console } = require('console');
const express = require('express');
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

const jsonSecretKey = "f91e4494-04b3-4d49-8c27-57faed9e5785";

app.use((req, res, next) => {
  // Signup and login are public URLs that don't require a token
  if (req.url === "/signup" || req.url === "/login" || req.url === '/') {
    next();
  } else {
    // Format of request is BEARER <token>. Splitting on ' ' will create an
    // array where the token is at index 1
    const token = req.headers.authorization;

    if (token) {
      console.log('Auth Token:', token);
      if (jwt.verify(token, jsonSecretKey)) {
        // Decode the token to pass along to end-points that may need
        // access to data stored in the token.
        req.decode = jwt.decode(token);
        next();
      } else {
        res.status(403).json({ error: "Not Authorized." });
      }
    } else {
      res.status(403).json({ error: "No token. Unauthorized." });
    }
  }
});

// function getToken(req) {
//   return req.headers.authorization.split(" ")[1];
// }

let users = [];

app.post("/signup", (req, res) => {
  const { username, name, password } = req.body;
  const user = {
    username,
    name,
    password, // NOTE: Passwords should NEVER be stored in the clear like this. Use a              // library like bcrypt to Hash the password. For demo purposes only.
  };
  if (!username || !name || !password) {
    console.log('Error:');
    res.status(403).json({
      token: "",
      error: {
        message: "Error logging in. Invalid username/password combination.",
      },
    });
  } else {
    users.push(user);
    console.log('Users Object:', username, name, password);
    res.json({ success: "true" });
  }

});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    console.log('Found user:', user);
    res.json({ token: jwt.sign({ name: user.name }, jsonSecretKey) });
  } else {
    res.status(403).json({
      token: "",
      error: {
        message: "Error logging in. Invalid username/password combination.",
      },
    });
  }
});

app.get("/profile", (req, res) => {
  res.json(req.decode);
});

app.get("/", (req, res) => {
  res.json('testing');
    console.log('Users Object:', users);

});




