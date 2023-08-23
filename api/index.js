const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const eventRoutes = require("./routes/events.routes");
const mongodbConnection = require("./config/mongodb.config");

mongodbConnection();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);
app.use("/", eventRoutes);

app.listen(process.env.PORT);
