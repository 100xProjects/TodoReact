import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    todos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo' // References the Todo model
    }]
  });

  const User = mongoose.model('User', userSchema);

  export {User}