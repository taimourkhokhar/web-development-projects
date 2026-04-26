
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

// for get all task and pagination here
const getTask = async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;

    let skip = (page - 1) * limit;

    const tasks = await Task.find()
      .skip(skip)
      .limit(limit);

    const total = await Task.countDocuments();

    res.status(200).json({
      page,
      limit,
      total,
      tasks
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};



// for get One task
const getOneTask = async (req, res) => {
  try {
    const {id}=req.params
    const task = await Task.findById(id);
     
    if (!id) {
      return res.status(404).json({
        message: "No task found"
      });
    }

    res.status(200).json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


const deleteTask=async(req,res)=>{
try{
const {id}=req.params

const task=await Task.findByIdAndDelete(id)

if(!id){
     return res.status(404).json({
        message: "No task found"
      });
          res.status(200).json(task);

} 
}catch(err){
 res.status(500).json({
      message: err.message
    });
}

}


const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({
        message: "No task found"
      });
    }

    res.status(200).json(task);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};
module.exports = {
  createTask,getTask,getOneTask,deleteTask,updateTask
};