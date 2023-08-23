const express = require("express");
const {
  addEventController,
  getEventsController,
  editEventController,
  deleteEventController,
} = require("../controllers/events.controller");
const router = express.Router();

router.get("/getEvents", getEventsController);
router.post("/addEvent", addEventController);
router.put("/editEvent", editEventController);
router.delete("/deleteEvent", deleteEventController);

module.exports = router;
