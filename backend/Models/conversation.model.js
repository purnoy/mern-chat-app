import mongoose from "mongoose";
const conversationSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "UsermainModel",
            },
        ],
        message: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "MessageMainModel",
                default: [],
            },
        ],
    },
    { timestamps: true }
);

export default conversationSchema;
