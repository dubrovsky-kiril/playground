const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;
