import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, type Relation } from 'typeorm';
import { CustomerAddressEntity } from './customer-address.entity.js';
import { OrderEntity } from '../../orders/entities/order.entity.js';

@Entity('customers')
export class CustomerEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ type: 'varchar', length: 150 }) name: string;
  @Column({ type: 'varchar', length: 150, unique: true }) email: string;
  @Column({ type: 'varchar', length: 20 }) phone: string;
  @OneToMany(() => CustomerAddressEntity, (a) => a.customer) addresses: Relation<CustomerAddressEntity[]>;
  @OneToMany(() => OrderEntity, (o) => o.customer) orders: Relation<OrderEntity[]>;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date | null;
}