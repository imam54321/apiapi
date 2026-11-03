import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // Menampilkan data atau mengambil data
  @Get()
  getBooks() {
    // logic untuk mengambil data dari service
    return this.booksService.findAll();
  }

  // Mengambil data buku untuk id
  @Get(':id')
  getBookById(@Param('id') id: string) {
    // logic untuk mengambil data buku berdasarkan id
    return this.booksService.findOne(id);
  }

  // Menyimpan data buku baru ke database
  @Post()
  createBook(@Body() book: CreateBookDto) {
    // Logic untuk menyoimpan data buku baru ke database
    return this.booksService.create(book);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() book: CreateBookDto) {
    return this.booksService.update(id, book);
  }

  // Menghapus data buku berdasarkan id
  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    // logic untuk menghapus data buku berdasarkan id
    return this.booksService.delete(id);
  }
}
