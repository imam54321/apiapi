import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../books/entities/category.entity.js';
import { CreateCategoryDto } from '../books/dto/create-category.dto.js';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  findAll() {
    return this.categoryRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findOneBy({ id });

    if (!category) {
      throw new NotFoundException(`Kategori dengan ID ${id} tidak ditemukan`);
    }

    return category;
  }

  create(dto: CreateCategoryDto) {
    const category = this.categoryRepository.create(dto);
    return this.categoryRepository.save(category);
  }

  async update(id: string, dto: CreateCategoryDto) {
    const category = await this.findOne(id);
    Object.assign(category, dto);
    return this.categoryRepository.save(category);
  }

  async delete(id: string) {
    const category = await this.findOne(id);
    await this.categoryRepository.softDelete(id);

    return {
      message: `Kategori ${category.name} berhasil dihapus`,
      deletedId: id,
    };
  }
}