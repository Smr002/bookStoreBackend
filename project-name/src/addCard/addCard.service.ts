// src/addCard/addCard.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddCard } from './schema/addCard.schema';
import { CreateAddCardDto } from './dto/create-addCard.dto';
import { UpdateAddCardDto } from './dto/update-addCard.dto';

@Injectable()
export class AddCardService {
  constructor(@InjectModel(AddCard.name) private addCardModel: Model<AddCard>) {}

  async create(createAddCardDto: CreateAddCardDto): Promise<AddCard> {
    try{
        const newCard = new this.addCardModel(createAddCardDto);
    return newCard.save();
    }catch(error){
        console.error('Error saving book to the database:', error);
      throw error;
    }
    
  }

  async findAll(): Promise<AddCard[]> {
    return this.addCardModel.find().exec();
  }

  async findById(id: string): Promise<AddCard> {
    return this.addCardModel.findById(id).exec();
  }

  async update(id: string, updateAddCardDto: UpdateAddCardDto): Promise<AddCard> {
    return this.addCardModel.findByIdAndUpdate(id, updateAddCardDto, { new: true }).exec();
  }

  async delete(id: string): Promise<AddCard> {
    return this.addCardModel.findByIdAndDelete(id).exec();
  }
}
