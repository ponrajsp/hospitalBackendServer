import { Schema, model, Document } from 'mongoose';

interface Bed extends Document {
  name: string;
  status: string;
  type: string;
  createdDate: Date;
  updatedDate: Date;
  createdBy: string;
  updatedBy: string;
}

const bedSchema = new Schema<Bed>({
  name: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['available', 'reserved', 'occupied'], // limited options for status
  },
  type: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  createdBy: { type: String },
  updatedBy: { type: String },
});

const BedModel = model<Bed>('Bed', bedSchema);

export default BedModel;