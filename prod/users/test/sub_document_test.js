const assert = require("assert");
const User = require("../src/user.js");

describe("Subdocuments", () => {
  it("can create a subdocument", done => {
    const joe = new User({ name: "Joe", posts: [{ title: "Post title" }] });

    joe
      .save()
      .then(() => User.findOne({ name: "Joe" }))
      .then(user => {
        assert(user.posts[0].title === "Post title");

        done();
      });
  });

  it("can add subdocuments to an existing record", done => {
    const joe = new User({ name: "Joe", posts: [] });

    joe
      .save()
      .then(() => User.findOne({ name: "Joe" }))
      .then(user => {
        user.posts.push({ title: "blah" });
        return user.save();
      })
      .then(() => User.findOne({ name: "Joe" }))
      .then(user => {
        assert((user.posts[0].title = "blah"));

        done();
      });
  });

  it("can remove an existing subdocument", done => {
    const joe = new User({ name: "Joe", posts: [{ title: "New title" }] });

    joe
      .save()
      .then(() => User.findOne({ name: "Joe" }))
      .then(user => {
        user.posts[0].remove();
        return user.save();
      })
      .then(() => User.findOne({ name: "Joe" }))
      .then(user => {
        assert(user.posts.length === 0);

        done();
      });
  });
});
