import { Schema, model, Document } from 'mongoose';

// Define the user schema
interface User extends Document {
  firstName: string,
  lastName: string,
  emailId: string;
  password: string;
  type: string
}

const userSchema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailId: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
});

const UserModel = model<User>('User', userSchema);

export { UserModel };
