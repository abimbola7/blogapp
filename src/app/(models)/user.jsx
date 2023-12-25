import mongoose, { Schema, model, models } from "mongoose";

console.log(process.env.MONGODB_USER_URI)
mongoose.connect(process.env.MONGODB_USER_URI);
mongoose.Promise = global.Promise


const userSchema = new Schema(
  {
    firstName : String,
    lastName : String,
    email : String,
    password : String
  },
  {
    timestamps : true
  }
)

const User = models.User || model("User", userSchema);
// console.log(Ticket, "dcsjvbdknbdjbn")
export default User;