import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define an interface for the decoded JWT payload
interface JwtPayload {
  user: {
    id: string;
    // Other fields that are stored in the payload
  };
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('x-auth-token');

  // If there's no token, return a 401 response and stop execution
  if (!token) {
    //return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token and decode the payload
    //const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as JwtPayload;

    // Attach the user info to the request object
    //req.user = decoded.user;

    // Pass control to the next middleware or route handler
    next();
  } catch (err) {
    console.error(err);

    // If the token is invalid, return a 401 response and stop execution
    //return res.status(401).json({ message: 'Token is not valid' });
  }
};
