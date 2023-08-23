const mongoose = require("mongoose");
const schema = mongoose.Schema;

const eventsModelSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
});

const eventsModel = mongoose.model("eventsModel", eventsModelSchema);

module.exports = eventsModel;
