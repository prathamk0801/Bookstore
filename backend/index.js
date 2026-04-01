// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import bookRoute from './route/book.route.js';
// import cors from 'cors'
// import userRoute from "./route/user.route.js"

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 4000;  
// const URI = process.env.MONGO_URI 


// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected ✅");
//   } catch (error) {
//     console.log("Error:", error);
//     process.exit(1);
//   }
// };

// connectDB();

// // define routes

// app.use("/book", bookRoute);
// app.use("/user",userRoute)

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

dotenv.config();
const app = express();

// ✅ 1. CORS middleware
// Place this **before all routes**
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-frontend-live-url.com'], // frontend URLs
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

// ✅ 2. JSON parser
app.use(express.json());

// MongoDB
const PORT = process.env.PORT || 4001;
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

// Routes (after CORS!)
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});