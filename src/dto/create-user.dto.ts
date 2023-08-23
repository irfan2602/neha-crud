import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;
  @IsNumber()
  @IsNotEmpty()
  readonly lastName: number;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly email: string;
  @IsNumber()
  @IsNotEmpty()
  readonly age: number;
}

