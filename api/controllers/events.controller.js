const expressAsyncHandler = require("express-async-handler");
const eventsModel = require("../models/events.model");

const getEventsController = expressAsyncHandler(async (req, res, next) => {
  try {
    const events = await eventsModel.find();
    res.json({
      success: true,
      events: events,
    });
  } catch (err) {
    res.status(400);
    next(err, req, res);
  }
});

const addEventController = expressAsyncHandler(async (req, res, next) => {
  const { name, createdAt } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Event name is missing");
  }

  try {
    await eventsModel.create({ name, createdAt });
    res.json({
      success: true,
    });
  } catch (err) {
    res.status(400);
    next(err, req, res);
  }
});

const editEventController = expressAsyncHandler(async (req, res, next) => {
  const { id, name } = req.body;

  if (!name || !id) {
    throw new Error("Name or Id is missing");
  }

  try {
    await eventsModel.findByIdAndUpdate(id, {
      name: name,
      updatedAt: new Date(),
    });
    res.json({
      success: true,
    });
  } catch (err) {
    res.status(400);
    next(err, req, res);
  }
});

const deleteEventController = expressAsyncHandler(async (req, res, next) => {
  const { id } = req.query;

  if (!id) {
    throw new Error("Event id is missing");
  }

  try {
    await eventsModel.findByIdAndDelete(id);
    res.json({
      success: true,
    });
  } catch (err) {
    res.status(400);
    next(err, req, res);
  }
});

module.exports = {
  addEventController,
  editEventController,
  getEventsController,
  deleteEventController,
};
