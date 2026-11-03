import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { OrderEntity } from './order.entity.js';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @OneToOne(() => OrderEntity, (o) => o.payment)
  @JoinColumn({ name: 'order_id' }) order: Relation<OrderEntity>;
  @Column({ name: 'payment_method', type: 'varchar', length: 50 }) paymentMethod: string;
  @Column({ type: 'decimal', precision: 12, scale: 2 }) amount: number;
  @Column({ type: 'varchar', length: 30 }) status: string;
  @Column({ name: 'paid_at', type: 'timestamp', nullable: true }) paidAt: Date | null;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
}