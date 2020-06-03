import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  columnDate: [],
});

const Users = mongoose.model("Users", UserSchema);

export default Users;
