const assert = require("assert");
const User = require("../src/user.js");

describe("validating records", () => {
  it("requires a user name", done => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === "is_required");

    done();
  });

  it("requires a users name longer than 2 characters", done => {
    const user = new User({ name: "Al" });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.name;

    assert(message === "min_length_is_3");

    done();
  });

  it("disallow inavlid records from being saved", done => {
    const user = new User({ name: "Al" });

    user.save().catch(validationResult => {
      const { message } = validationResult.errors.name;

      assert(message === "min_length_is_3");
      done();
    });
  });
});
