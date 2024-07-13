import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { User } from '../types/userTypes';

// Asegúrate de que JWT_SECRET esté definido en el archivo .env
const secret = process.env.JWT_SECRET as string;

export const register = async (userData: User): Promise<User> => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await userModel.create({ ...userData, password: hashedPassword });
  return user.toObject() as User;
};

export const login = async (loginData: { email: string; password: string }): Promise<string> => {
  const user = await userModel.findOne({ email: loginData.email });
  if (!user || !(await bcrypt.compare(loginData.password, user.password))) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
  return token;
};
