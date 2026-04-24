
const Task = require('../model/Task.js');

const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: 'Title is required'
      });
    }

    const newTask = await Task.create({
      title
    });

    res.status(201).json(newTask);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createTask
};