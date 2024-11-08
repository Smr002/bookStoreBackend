// src/addCard/addCard.controller.ts
import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { AddCardService } from './addCard.service';
import { CreateAddCardDto } from './dto/create-addCard.dto';
import { UpdateAddCardDto } from './dto/update-addCard.dto';

@Controller('addCard')
export class AddCardController {
  constructor(private readonly addCardService: AddCardService) {}

  @Post()
  async create(@Body() createAddCardDto: CreateAddCardDto) {
    console.log('Received Post /Card request');
    return this.addCardService.create(createAddCardDto);
  }


  @Get()
  async findAll() {
    return this.addCardService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.addCardService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAddCardDto: UpdateAddCardDto) {
    return this.addCardService.update(id, updateAddCardDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.addCardService.delete(id);
  }
}
