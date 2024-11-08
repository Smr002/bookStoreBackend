// src/addCard/schemas/addCard.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AddCard extends Document {
  @Prop({ required: true })
  bookId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  quantity: number;

  @Prop()
  image?: string;
}

export const AddCardSchema = SchemaFactory.createForClass(AddCard);
