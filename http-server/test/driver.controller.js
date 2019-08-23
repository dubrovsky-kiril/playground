const mongoose = require("mongoose");
const assert = require("assert");
const request = require("supertest");
const app = require("../src/app");
const DriverModel = require("../src/models/driver.model");

// const DriverModel = mongoose.model("driver");

describe("Driver controller", () => {
  it("Post to /api/drivers creates a new drive", async () => {
    const email = "test@test.com";

    await request(app)
      .post("/api/drivers")
      .send({ email });

    const createdDriver = await DriverModel.findOne({ email });

    assert(createdDriver.email === email);
  });

  it("PUT to /api/drivers edits an existing driver", async () => {
    const driver = new DriverModel({ email: "t@t.com", driving: false });

    await driver.save();

    await request(app)
      .put(`/api/drivers/${driver._id}`)
      .send({ driving: true });

    const updatedDriver = await DriverModel.findOne({ email: "t@t.com" });

    console.log(updatedDriver);

    assert(updatedDriver.driving === true);
  });
});
