const mongoose = require("mongoose");

// User Model
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("User", userSchema);
