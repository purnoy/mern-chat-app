import UserMainModel from "../../Models/user.model.js";
import catchAsync from "../../utils/catchAsync.js";

const signUp = catchAsync(async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } =
            req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password doesn't match" });
        }
        const user = await UserMainModel.findOne({ username });
        if (user) {
            return res
                .status(400)
                .json({ error: "Username is already taked!!" });
        }
        //Hash Password Here
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = new UserMainModel({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.userame,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.log("Error in sign up controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

const login = catchAsync(async (req, res) => {
    res.send("Login User");
    console.log("Login User");
});
const logOut = catchAsync(async (req, res) => {
    res.send("Logout User");
    console.log("Log Out");
});

export const AuthControllers = {
    signUp,
    login,
    logOut,
};
