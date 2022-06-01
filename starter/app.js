require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//app.get('/api/V1/tasks') - get all tasks
//app.post('/api/V1/tasks') - create a new task
//app.get('./api/V1/tasks/:id') - get single task
//app.patch('/api/V1/tasks/:id') - update task
//app.delete('/api/V1/tasks/:id') - delete task

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/V1/tasks", tasks);

const port = 3000;

//to check any error when connectiong to the db
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
