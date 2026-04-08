const express=require('express')

const app=express()
app.use('/',(req,res)=>{
  res.send("Hello server is running")
})

const PORT=3000

app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`)
})