const assert = require("assert");
const request = require("supertest");
const app = require("../src/app");

describe("The express app", () => {
  it("Handles a GET request", async () => {
    request(app)
      .get("/api")
      .end((err, res) => {
        if (err) {
          console.warn(err);
        } else {
          assert(res.body.hi === "there");
        }
      });
  });
});
