import catchAsync from "../../utils/catchAsync.js";

const signUp = catchAsync(async (req, res) => {
    res.send("Signup User");
    console.log("Sign Up");
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
