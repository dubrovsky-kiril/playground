const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// Creating a schema
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: "min_length_is_3"
    },
    required: [true, "is_required"]
  },
  postCount: Number
});

// Creating a model
const UserModel = model("user", UserSchema);

module.exports = UserModel;
