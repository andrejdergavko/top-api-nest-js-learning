import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema({ _id: true, timestamps: true })
export class Auth {
  @Prop({ unique: true })
  email: string;

  @Prop()
  passwordHash: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
