// src/book/dto/create-book.dto.ts
import { IsString, IsInt, IsBoolean, IsOptional, Min, IsUrl } from 'class-validator';

export class CreateBookDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  price: number;

  @IsInt()
  @Min(0)
  stock: number;

  @IsInt()
  @Min(0)
  noOfSell: number;

  @IsBoolean()
  archive: boolean;

  @IsString()
  author: string;

  
  @IsString()
  subject: string;

  @IsUrl()
  @IsOptional()
  image?: string; 
}
