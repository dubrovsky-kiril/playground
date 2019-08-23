const assert = require("assert");
const User = require("../src/user.js");

describe("Creating records", () => {
  it.only("saves a user", done => {
    const joe = new User({ name: "Joe" });

    joe.save().then(() => {
      assert(!joe.isNew);
      done();
    });
  });
});
