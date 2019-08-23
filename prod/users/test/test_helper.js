const mongoose = require("mongoose");

before(done => {
  console.log("fsdfsdf");
  mongoose.connect("mongodb://localhost/users_test", {
    useNewUrlParser: true,
    useFindAndModify: false
  });

  mongoose.connection
    .once("open", () => done())
    .on("error", error => console.warn("Warning", error));
});

beforeEach(done => {
  const { users, comments, blogposts } = mongoose.connection.collections;

  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});
