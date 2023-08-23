import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { IUser } from 'src/interface/user.interface';
import { Model } from 'mongoose';
import { UpdateUserDto } from 'src/dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
 
  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const newUser = await new this.userModel(createUserDto);
    return newUser.save();
  }
  
  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    const existingUser= await this.userModel.findByIdAndUpdate(
      userId,
      updateUserDto,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return existingUser;
  }
  
  async getAllUser(): Promise<IUser[]> {
    const userData = await this.userModel.find();
    if (!userData || userData.length == 0) {
      throw new NotFoundException('User data not found!');
    }
    return userData;
  }
 
  async getUser(UserId: string): Promise<IUser> {
    const existingUser = await this.userModel.findById(UserId).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${UserId} not found`);
    }
    return existingUser;
  }
  
  async deleteUser(UserId: string): Promise<IUser> {
    const deletedUser = await this.userModel.findByIdAndDelete(UserId);
    if (!deletedUser) {
      throw new NotFoundException(`User #${UserId} not found`);
    }
    return deletedUser;
  }
}
