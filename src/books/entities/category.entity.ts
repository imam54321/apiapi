// category.entity.ts
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, type Relation } from 'typeorm';
import { BookEntity } from './book-entitiy.js';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', length: 100, unique: true }) name: string;
  @OneToMany(() => BookEntity, (b) => b.category) books: Relation<BookEntity[]>;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
}