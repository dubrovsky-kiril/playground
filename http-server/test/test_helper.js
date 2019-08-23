const mongoose = require("mongoose");

before(done => {
  mongoose.connect(process.env.NODE_DB_ADDRESS, { useNewUrlParser: true });

  mongoose.connection
    .once("open", () => done())
    .on("error", err => console.warn("Warn"));
});

beforeEach(done => {
  const { drivers } = mongoose.connection.collections;

  drivers
    .drop()
    .then(() => done())
    .catch(() => done());
});
