// author.entity.ts
import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn, type Relation } from 'typeorm';
import { BookEntity } from './book-entitiy.js';

@Entity('authors')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', length: 150 }) name: string;
  @ManyToMany(() => BookEntity, (b) => b.authors) books: Relation<BookEntity[]>;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
}