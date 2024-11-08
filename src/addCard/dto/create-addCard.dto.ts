// src/addCard/dto/create-addCard.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsUrl } from 'class-validator';

export class CreateAddCardDto {
    @IsString()
    @IsNotEmpty()
    bookId: string;
  
    @IsString()
    @IsNotEmpty()
    name: string;
  
  
    @IsNumber()
    @IsNotEmpty()
    price: number;
  
    @IsString()
    image?: string;
  
    @IsNumber()
    quantity: number;
}
