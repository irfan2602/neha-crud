import { CreateUserDto } from 'src/dto/create-user.dto';
import { IUser } from 'src/interface/user.interface';
import { Model } from 'mongoose';
import { UpdateUserDto } from 'src/dto/update-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<IUser>);
    createUser(createUserDto: CreateUserDto): Promise<IUser>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<IUser>;
    getAllUser(): Promise<IUser[]>;
    getUser(UserId: string): Promise<IUser>;
    deleteUser(UserId: string): Promise<IUser>;
}
