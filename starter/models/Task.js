const mongoose = require("mongoose");

//mongoose.Schema eken wenne api inster karana document eka data thiyenna puluwan widiha defined karnawa

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//mongoose.model kiyanne unterface ekak database ekata
//mongoose.model eka use karala apiata pluwan crud operation tika karanna
module.exports = mongoose.model("Task", TaskSchema);
