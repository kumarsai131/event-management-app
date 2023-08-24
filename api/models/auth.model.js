const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userModelSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

const usersModel = mongoose.model("usersModel", userModelSchema);
module.exports = usersModel;
