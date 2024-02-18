import ConversationMainModel from "../Models/conversation.model.js";
import MessageMainModel from "../Models/message.model.js";
import UserMainModel from "../Models/user.model.js";
import catchAsync from "../utils/catchAsync.js";

const sendMessage = catchAsync(async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // const sender = await UserMainModel.findById(senderId);
        // const receiver = await UserMainModel.findOne({ username: receiverId });

        // if (!sender || !receiver) {
        //     return res
        //         .status(400)
        //         .json({ error: "Invalid sender or receiver" });
        // }

        let conversation = await ConversationMainModel.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await ConversationMainModel.create({
                participants: [senderId, receiverId],
            });
        }
        const newMessage = new MessageMainModel({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        await Promise.all(conversation.save(), newMessage.save());
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Message can not be sent", error.message);
        res.status(500).json({ error: "Internal server error with catch" });
    }
});

const getMessage = catchAsync(async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;
        let conversation = await ConversationMainModel.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("Error in getmessage controller ", error.message);
        res.status(500).json({ error: "Internal server error with catch" });
    }
});

export const MessageController = {
    sendMessage,
    getMessage,
};
