import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, type Relation } from 'typeorm';
import { BookEntity } from './book-entitiy.js';

@Entity('publishers')
export class PublisherEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', length: 150 }) name: string;
  @OneToMany(() => BookEntity, (b) => b.publisher) books: Relation<BookEntity[]>;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
}