import express from "express";
import dotenv from "dotenv";
import AuthRoutes from "./Routes/Auth/AuthRoutes.js";
import connectToMongoDB from "./db/connecttoMongoDB.js";

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/auth", AuthRoutes);
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on ${PORT}`);
});
