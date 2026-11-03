import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { OrderEntity } from './order.entity.js';

@Entity('shipments')
export class ShipmentEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @OneToOne(() => OrderEntity, (o) => o.shipment)
  @JoinColumn({ name: 'order_id' }) order: Relation<OrderEntity>;
  @Column({ type: 'varchar', length: 100 }) courier: string;
  @Column({ name: 'tracking_number', type: 'varchar', length: 100, nullable: true }) trackingNumber: string | null;
  @Column({ type: 'varchar', length: 30 }) status: string;
  @Column({ name: 'shipped_at', type: 'timestamp', nullable: true }) shippedAt: Date | null;
  @Column({ name: 'delivered_at', type: 'timestamp', nullable: true }) deliveredAt: Date | null;
}