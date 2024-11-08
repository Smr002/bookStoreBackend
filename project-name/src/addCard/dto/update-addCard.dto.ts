// src/addCard/dto/update-addCard.dto.ts
import { IsOptional, IsString, IsNumber, IsUrl } from 'class-validator';

export class UpdateAddCardDto {
    @IsString()
 
    bookId: string;
  
    @IsString()
 
    name: string;
  
   
  
    @IsNumber()
  
    price: number;
  
    @IsString()
    image?: string;
  
    @IsNumber()
    quantity: number;
}
