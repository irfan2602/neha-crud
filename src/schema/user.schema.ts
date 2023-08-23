import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class User {
  @Prop()
  firstName: string;
  @Prop()
  lastName: number;
  @Prop({ unique: true })
  email: string;
  @Prop()
  age: number;
}
export const UserSchema = SchemaFactory.createForClass(User);
