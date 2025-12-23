import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('❌ MONGO_URI is missing from environment variables. Check your.env file.');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
  // 1. If we have a cached connection, return it immediately
  if (cached.conn) {
    return cached.conn;
  }

  // 2. If no connection is in progress, start one
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI!, opts).then((mongooseInstance) => {
      console.log('✅ MongoDB connected successfully');
      return mongooseInstance;
    });
  }

  // 3. Await the promise and cache the resolved connection
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    // If connection fails, clear the promise so the next attempt can try again
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
