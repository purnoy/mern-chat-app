import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Type.ObjectId,
            ref: "UserMainModel",
            require: true,
        },
        receiverId: {
            type: mongoose.Schema.Type.ObjectId,
            ref: "UserMainModel",
            require: true,
        },
        message: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

const MessageMainModel = mongoose.model.("Message", messageSchema);
export default MessageMainModel;