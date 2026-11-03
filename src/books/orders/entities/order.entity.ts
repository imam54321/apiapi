import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, type Relation } from 'typeorm';
import { CustomerEntity } from '../../customers/entities/customer.entity.js';
import { OrderItemEntity } from './order-item.entity.js';
import { PaymentEntity } from './payment.entity.js';
import { ShipmentEntity } from './shipment.entity.js';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @ManyToOne(() => CustomerEntity, (c) => c.orders)
  @JoinColumn({ name: 'customer_id' }) customer: Relation<CustomerEntity>;
  @Column({ name: 'order_number', type: 'varchar', length: 50, unique: true }) orderNumber: string;
  @Column({ type: 'varchar', length: 30, default: 'pending' }) status: string;
  @Column({ name: 'total_amount', type: 'decimal', precision: 12, scale: 2, default: 0 }) totalAmount: number;
  @OneToMany(() => OrderItemEntity, (i) => i.order) items: Relation<OrderItemEntity[]>;
  @OneToOne(() => PaymentEntity, (p) => p.order) payment: Relation<PaymentEntity>;
  @OneToOne(() => ShipmentEntity, (s) => s.order) shipment: Relation<ShipmentEntity>;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
}