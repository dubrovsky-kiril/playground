const mongoose = require("mongoose");
const PostSchema = require("./post");
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
  posts: [PostSchema],
  likes: Number,
  blogPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "blogPost"
    }
  ]
});

UserSchema.virtual("postCount").get(function() {
  return this.posts.length;
});

// Creating a model
const UserModel = model("user", UserSchema);

module.exports = UserModel;
