import mongoose from "mongoose";
const conversationSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "UsermainModel",
            },
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "MessageMainModel",
                default: [],
            },
        ],
    },
    { timestamps: true }
);
const ConversationMainModel = mongoose.model(
    "conversation",
    conversationSchema
);
export default ConversationMainModel;
