import UserMainModel from "../Models/user.model.js";
import catchAsync from "../utils/catchAsync.js";

const getUserForTheSideBar = catchAsync(async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filterUsers = await UserMainModel.find({
            _id: { $ne: loggedInUserId },
        });
        res.status(200).json(filterUsers);
    } catch (error) {
        console.log("Error in get user in the sidebar ", error.message);
        res.status(500).json({ error: "Internal server error with catch" });
    }
});
export const UserController = {
    getUserForTheSideBar,
};
