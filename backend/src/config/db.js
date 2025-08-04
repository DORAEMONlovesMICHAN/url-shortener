import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Establish MongoDB connection - await resolves on success, throws on failure
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;