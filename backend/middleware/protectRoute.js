import jwt from "jsonwebtoken";
import UserMainModel from "../Models/user.model.js";
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.send(401).json({ error: "No User found" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.send(401).json({ error: "No User found" });
        }

        const user = await UserMainModel.findOne({
            _id: decoded.userId,
        }).select("-password");
        if (!user) {
            return res.send(401).json({ error: "No User found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in User Authorization", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
export default protectRoute;
