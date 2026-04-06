import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import cors from 'cors'
import userRoute from "./route/user.route.js"

dotenv.config();

const app = express();
app.use(cors({
  origin: ["https://bookstore-frontend.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;  
const URI = process.env.MONGO_URI 


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
};

connectDB();

// define routes

app.use("/book", bookRoute);
app.use("/user",userRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



