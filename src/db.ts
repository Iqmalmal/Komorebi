import mongoose from "mongoose";

const conntecToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log("Connection established");
    
    
  } catch (error) {
        console.error('error in conntecToDatabase', error);
        throw error;
  }
}

export default conntecToDatabase;