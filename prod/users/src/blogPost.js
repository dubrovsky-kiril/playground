const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }]
});

const BlogPostModel = mongoose.model("blogPost", BlogPostSchema);

module.exports = BlogPostModel;
