import { Router } from 'express';
import { registerUser } from '../controllers/userController';
import { loginUser } from '../controllers/loginController';

const userRoutes = Router();

// Register user route
userRoutes.post('/userRegister', async (req, res) => {
  try {
    await registerUser(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Login route
userRoutes.post('/userLogin', async (req, res) => {
  try {
    await loginUser(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default userRoutes;
