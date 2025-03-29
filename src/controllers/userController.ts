import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/User';
import jwt from 'jsonwebtoken';
export const registerUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { firstName, lastName, emailId, password, type } = req.body;
    
    // Check if the username already exists in the database
    const existingUser = await UserModel.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user and save it to the database
    const newUser = new UserModel({
      firstName,
      lastName,
      emailId,
      type,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token if the credentials are correct
    const payload = {
      user: {
        id: user._id,
        username: user.emailId
      }
    };

    const jwtSecret = process.env.JWT_SECRET || 'your-jwt-secret'; // You should use a more secure value for JWT_SECRET
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' }); // Set token expiry time

    // Send the token to the client
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};