import { Router } from 'express';
import { registerUser } from '../controllers/userController';
import { loginUser } from '../controllers/loginController';

const router = Router();

// Register user route
router.post('/userRegister', async (req, res) => {
  try {
    await registerUser(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Login route
router.post('/userLogin', async (req, res) => {
  try {
    await loginUser(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;
