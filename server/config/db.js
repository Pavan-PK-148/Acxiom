import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/acxiom_crm');
    console.log(`MongoDB Connected successfully`);
  } catch (error) {
    console.error(`MongoDB connection error`);
    process.exit(1);
  }
};

export default connectDB;