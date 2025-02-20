const mongoose = require('mongoose');
mongoose.connect(`mongodb://Localhost:27017/authentication`);

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
});

module.exports = mongoose.model("User", userSchema);