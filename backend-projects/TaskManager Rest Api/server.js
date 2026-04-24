const express=require('express')
const{default:mongoose}=require('mongoose')
const app=express()
const path = require('path');
const taskRoutes = require('./routes/taskRoutes');
// Point to the config folder
require('dotenv').config({ path: path.resolve(__dirname, './config/.env') });
db_link=process.env.db_link
console.log(db_link)
app.use(express.json())
app.use('/tasks', taskRoutes);


// app.use(express.json());
// app.use('/',(req,res)=>{
//   res.send("Hello server is running")
// })
// URL: http://localhost:3000/users/123
// app.get('/users/:userId', (req, res) => {
//   const id = req.params.userId; // Returns "123"
//   res.send(`User ID: ${id}`);
// });

// app.get('/taimour/:userId',(req,res)=>{
//   const id=req.params.userId;
//   res.send(`User id is ${id}`)
// })


// app.get('/taimour',(req,res)=>{
//   const{term,page}=req.query
//   res.send(`term and page ${term} and ${page}`)
// })

const PORT=3000

mongoose.connect(db_link).then(()=>{
  console.log("Database connected successfully")
  app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`)
})
}).catch((err)=>{
  console.log(`error while connected to database`,err.message)
})




