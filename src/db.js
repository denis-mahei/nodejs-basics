import 'dotenv/config';
import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI;

const initDatabaseConnection = async () => {
  await mongoose.connect(DB_URI);
};

export { initDatabaseConnection };
