// src/book/schemas/book.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {


  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ required: true, type: Number })
  stock: number;

  @Prop({ required: true, type: Number })
  noOfSell: number;

  @Prop({ required: true })
  archive: boolean;
  @Prop()
  subject: string;
  @Prop()
  image?: string; // Optional field for book image URL
}

export const BookSchema = SchemaFactory.createForClass(Book);
