
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Request body is missing" });
    }

    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "fullname, email, and password are required" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({ fullname, email, password: hashedPassword });
    await createdUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Signup error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  try {
    console.log("🔥 BODY:", req.body);

    const { email, password } = req.body || {};

    console.log("🔥 EMAIL:", email);
    console.log("🔥 PASSWORD:", password);

    if (!email || !password) {
      return res.status(400).json({ message: "Email & Password required" });
    }

    const user = await User.findOne({ email });

    console.log("🔥 USER:", user);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!user.password) {
      return res.status(500).json({ message: "Password missing in DB" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    console.log("🔥 MATCH:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successful",
      user,
    });

  } catch (error) {
    console.log("💥 FULL ERROR:", error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error.message, // 👈 THIS IS KEY
    });
  }
};