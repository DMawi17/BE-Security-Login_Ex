import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = Schema({
    username: {
        type: String,
        required: "Username is required",
        unique: "The Username is not available",
    },
    password: { type: String, required: "Password id required" },
});

export default model("Users", userSchema);
