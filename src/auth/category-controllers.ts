import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category-service.js';
import { CreateCategoryDto } from '../books/dto/create-category.dto.js';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateCategoryDto) {
    return this.categoryService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}