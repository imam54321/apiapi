import {
  Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable,
  ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,
  type Relation,
} from 'typeorm';
import { CategoryEntity } from './category.entity.js';
import { PublisherEntity } from './publisher.entity.js';
import { AuthorEntity } from './author.entity.js';
import { OrderItemEntity } from '../orders/entities/order-item.entity.js';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 45, unique: true })
  isbn: string;

  @Column({ type: 'int', default: 0 })
  publishedYear: number;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  price: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @ManyToOne(() => CategoryEntity, (c) => c.books, { nullable: true })
  @JoinColumn({ name: 'category_id' })
  category: Relation<CategoryEntity>;

  @ManyToOne(() => PublisherEntity, (p) => p.books, { nullable: true })
  @JoinColumn({ name: 'publisher_id' })
  publisher: Relation<PublisherEntity>;

  @ManyToMany(() => AuthorEntity, (a) => a.books)
  @JoinTable({
    name: 'book_authors',
    joinColumn: { name: 'book_id' },
    inverseJoinColumn: { name: 'author_id' },
  })
  authors: Relation<AuthorEntity[]>;

  @OneToMany(() => OrderItemEntity, (i) => i.book)
  orderItems: Relation<OrderItemEntity[]>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}