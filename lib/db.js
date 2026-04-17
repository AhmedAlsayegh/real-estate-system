import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;

    console.log("URI:", uri); // 👈 مهم للتشخيص

    await mongoose.connect(uri, {
      dbName: "test", // 👈 مهم جدًا
    });

    console.log("✅ DB Connected");
  } catch (error) {
    console.log("❌ DB ERROR:", error);
  }
};