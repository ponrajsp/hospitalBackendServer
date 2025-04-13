import { Request, Response } from 'express';
import BedModel from '../models/Beds';

// POST - Create a new bed
export const createBed = async (req: Request, res: Response): Promise<Response> => {
  const { name, status, type, createdBy, updatedBy } = req.body;

  try {
    const newBed = new BedModel({
      name,
      status,
      type,
      createdBy,
      updatedBy,
    });

    await newBed.save();
    return res.status(201).json({ message: 'Bed created successfully', bed: newBed });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

// GET - Get all beds
export const getAllBeds = async (req: Request, res: Response): Promise<Response> => {
  try {
    const beds = await BedModel.find();
    return res.status(200).json(beds);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const updateBed = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { name, status, type, updatedBy } = req.body;

  try {
    const bed = await BedModel.findById(id);

    if (!bed) {
      return res.status(404).json({ message: 'Bed not found' });
    }

    bed.name = name || bed.name;
    bed.status = status || bed.status;
    bed.type = type || bed.type;
    bed.updatedBy = updatedBy || bed.updatedBy;
    bed.updatedDate = new Date();

    await bed.save();
    return res.status(200).json({ message: 'Bed updated successfully', bed });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};
