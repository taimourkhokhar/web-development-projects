const express=require('express')

const router=express.Router()
const {createTask,getTask,getOneTask,deleteTask,updateTask}=require('../controllers/taskController.js')
router.get('/',getTask)

router.get('/:id',getOneTask)
router.post('/',createTask)

router.delete('/:id',deleteTask)

router.patch('/:id',updateTask)


module.exports=router

