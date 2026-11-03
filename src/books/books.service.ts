import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './entities/book-entitiy.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  findAll(): Promise<BookEntity[]> {
    return this.bookRepository.find({
      relations: { category: true, publisher: true, authors: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<BookEntity> {
    const book = await this.bookRepository.findOne({
      where: { id },
      relations: { category: true, publisher: true, authors: true },
    });
    if (!book) throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan`);
    return book;
  }

  private toEntityData(dto: CreateBookDto) {
    const { publisherId, categoryId, authorIds, ...rest } = dto;
    return {
      ...rest,
      publisher: { id: publisherId },
      category: { id: categoryId },
      authors: authorIds.map((id) => ({ id })),
    };
  }

  create(dto: CreateBookDto): Promise<BookEntity> {
    const book = this.bookRepository.create(this.toEntityData(dto));
    return this.bookRepository.save(book);
  }

  async update(id: string, dto: CreateBookDto): Promise<BookEntity> {
    const existing = await this.findOne(id);
    Object.assign(existing, this.toEntityData(dto));
    return this.bookRepository.save(existing);
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.bookRepository.softDelete(id);
    return { message: `Buku dengan ID ${id} berhasil dihapus`, deletedId: id };
  }
}