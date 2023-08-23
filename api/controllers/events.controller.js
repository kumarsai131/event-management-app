const expressAsyncHandler = require("express-async-handler");
const eventsModel = require("../models/events.model");

const getEventsController = expressAsyncHandler(async (req, res, next) => {
  try {
    const events = await eventsModel.find();
    res.json({
      success: true,
      events: events,
    });
  } catch (err) {}
});

const addEventController = expressAsyncHandler(async (req, res, next) => {
  const { name, createdAt } = req.body;

  try {
    await eventsModel.create({ name, createdAt });
    res.json({
      success: true,
    });
  } catch (err) {}
});

const editEventController = expressAsyncHandler(async (req, res, next) => {});

const deleteEventController = expressAsyncHandler(async (req, res, next) => {});

module.exports = {
  addEventController,
  editEventController,
  getEventsController,
  deleteEventController,
};
