import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel, { User } from '../models/userModel';

const secret = process.env.JWT_SECRET as string;

export const register = async (userData: User): Promise<User> => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await userModel.create({ ...userData, password: hashedPassword });
  
  // Cast the user to User type
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
