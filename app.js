// Requiring necessary modules
const cookieParser = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Setting up mongoose
const userModel = require('./models/user');

// Setting up express
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// Rending the index page
app.get("/", (req, res) => {
    res.render("index");
});

// Creating a new user with hashed / encrypted password
app.post("/create", (req, res) => {
    let { username, password, email, age } = req.body;

    bcrypt.genSalt(10, async(err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let newUser = await userModel.create({
                username,
                password: hash,
                email,
                age,
            });
            let token = jwt.sign({ email }, "secretkey");
            res.cookie("token", token);
            res.send(newUser);
        })
    })
});

// Logging in the user
app.get("/login", async (req, res) => {
    res.render("login");
})

app.post("/login", async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if(!user) return res.send("Something went wrong");
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if( result ) {
            let token = jwt.sign({ email: user.email }, "secretkey");
            res.cookie("token", token);
            res.send("Logged in");
        }
        else { res.send("Something went wrong"); }
    })
})

// Logging out the user
app.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
})

app.listen(3000) ;