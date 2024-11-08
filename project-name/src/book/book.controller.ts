// src/book/book.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }
  @Get('subject/:subject')
  async findBySubject(@Param('subject') subject: string): Promise<Book[]> {
    console.log(`Received subject for findBySubject: ${subject}`);
    const books = await this.bookService.findBySubject(subject);
    console.log(`The books by subject are found ${books}`);
    if (books.length === 0) {
      throw new NotFoundException(`No books found with subject "${subject}"`);
    }
    return books;
  }

  @Get()
  async findAll(): Promise<Book[]> {
    console.log('Received GET /Book request');
    return this.bookService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    console.log(`Received ID for findById: ${id}`);
    const book = await this.bookService.findById(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book> {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Book> {
    return this.bookService.delete(id);
  }

 

  @Get('subject')
  async getUniqueSubjects(): Promise<string[]> {
    console.log('Received request for unique subjects');
    return this.bookService.getUniqueSubjects();
  }
}
