import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { OrderEntity } from './order.entity.js';
import { BookEntity } from '../../entities/book-entitiy.js';

@Entity('order_items')
export class OrderItemEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @ManyToOne(() => OrderEntity, (o) => o.items)
  @JoinColumn({ name: 'order_id' }) order: Relation<OrderEntity>;
  @ManyToOne(() => BookEntity, (b) => b.orderItems)
  @JoinColumn({ name: 'book_id' }) book: Relation<BookEntity>;
  @Column({ type: 'int' }) quantity: number;
  @Column({ type: 'decimal', precision: 12, scale: 2 }) price: number;
  @Column({ type: 'decimal', precision: 12, scale: 2 }) subtotal: number;
}