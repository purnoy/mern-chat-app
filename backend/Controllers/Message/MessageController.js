import catchAsync from "../../utils/catchAsync.js";

const sendMessage = catchAsync(async (req, res) => {
    try {
        res.send("message sent");
        console.log("Message sent", req.params.id);
    } catch (error) {
        console.log("Message can not be sent", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

export const MessageController = {
    sendMessage,
};
