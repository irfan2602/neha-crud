import { Document } from 'mongoose';
export interface IUser extends Document {
  readonly firstName: string;
  readonly lastName: number;
  readonly email: string;
  readonly age: number;
}
