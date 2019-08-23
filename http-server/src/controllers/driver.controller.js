const DriveModel = require("../models/driver.model");

module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },
  async create(req, res, next) {
    const { email } = req.body;

    try {
      const driver = await DriveModel.create({ email });

      await driver.save();

      res.send(driver);
    } catch (e) {
      next(e);
    }
  },
  async edit(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;

    try {
      await DriveModel.findByIdAndUpdate({ _id: driverId }, driverProps);

      const updatedDriver = await DriveModel.findById({ _id: driverId });

      res.send(updatedDriver);
    } catch (e) {
      next(e);
    }
  }
};
