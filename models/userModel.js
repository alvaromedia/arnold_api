const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxLength: 24,
      minLength: 3,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      lowercase: true,
      trim: true,
      maxLength: 30,
      minLength: 6,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      maxLength: 512,
      minLength: 6,
    },
    birthday: {
      type: Date,
    },
    favoriteMovies: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movies" }],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
