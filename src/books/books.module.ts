import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './controller.js';
import { BooksService } from './books.service.js';
import { BookEntity } from './entities/book-entitiy.js';
import { CategoryEntity } from './entities/category.entity.js';
import { PublisherEntity } from './entities/publisher.entity.js';
import { AuthorEntity } from './entities/author.entity.js';
import { CategoryController } from '../auth/category-controllers.js';
import { CategoryService } from '../auth/category-service.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookEntity,
      CategoryEntity,
      PublisherEntity,
      AuthorEntity,
    
    ]),
  ],
  controllers: [BooksController, CategoryController],
  providers: [BooksService, CategoryService],
})
export class BooksModule {}
