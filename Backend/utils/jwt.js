import dotenv from 'dotenv';
import { SignJWT, jwtVerify } from 'jose';
import jwt from 'jsonwebtoken';
import Sessions from '../models/Sessions.js';

//token and session management
dotenv.config();

const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error('JWT_SECRET environment variable is not defined');
}

const encoder = new TextEncoder();
const JWT_SECRET = encoder.encode(process.env.JWT_SECRET);
const JWT_EXPIRES_IN = 7 * 24 * 60 * 60; 

const generateToken = async (payload) => {
  const tokenPayload = {
    ...payload,
    sessionId: Date.now().toString(36) + Math.random().toString(36).substr(2),
    issuedAt: payload.issuedAt || Date.now()
  };

  return await new SignJWT(tokenPayload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(`${JWT_EXPIRES_IN}s`)
    .sign(JWT_SECRET);
};

const verifyToken = async (token) => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (err) {
    return null;
  }
};

const getTokenExpiry = (token) => {
  try {
    const decoded = jwt.decode(token);
    return decoded.exp * 1000;
  } catch (error) {
    return null;
  }
};

const registerSession = async (userId, sessionId) => {
  
  await Sessions.findOneAndUpdate(
    { userId },
    {
      sessionId,
      lastSeen: new Date(),
      createdAt: new Date()
    },
    { upsert: true }
  );
};

const isSessionActive = async (userId, sessionId) => {
  await connectDB();

  const session = await Sessions.findOne({ userId });
  if (!session || session.sessionId !== sessionId) {
    return false;
  }
  
  await Sessions.updateOne(
    { userId },
    { lastSeen: new Date() }
  );
  
  return true;
};

const removeSession = async (userId) => {
  await connectDB();
  await Sessions.deleteOne({ userId });
};

export default {
  generateToken,
  verifyToken,
  getTokenExpiry,
  registerSession,
  isSessionActive,
  removeSession
};
