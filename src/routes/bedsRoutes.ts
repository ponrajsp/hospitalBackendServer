import { Router } from 'express';
import { registerUser } from '../controllers/userController';
import { loginUser } from '../controllers/loginController';
import { createBed, getAllBeds, updateBed } from '../controllers/bedsController';

const bedsRoutes = Router();

// Register user route
bedsRoutes.post('/', async (req, res) => {
  try {
    await createBed(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Login route
bedsRoutes.get('/', async (req, res) => {
  try {
    await getAllBeds(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

bedsRoutes.put('/:id', async (req, res) => {
    try {
      await updateBed(req, res);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Something went wrong' });
    }
});

bedsRoutes.get('/beds/:id', async (req, res) => {
try {
    await updateBed(req, res);
} catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
}
});

export default bedsRoutes;
