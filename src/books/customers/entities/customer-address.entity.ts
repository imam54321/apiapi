import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, type Relation } from 'typeorm';
import { CustomerEntity } from './customer.entity.js';

@Entity('customer_addresses')
export class CustomerAddressEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @ManyToOne(() => CustomerEntity, (c) => c.addresses)

  @JoinColumn({ name: 'customer_id' }) customer: Relation<CustomerEntity>;

  @Column({ name: 'recipient_name', type: 'varchar', length: 150 }) recipientName: string;

  @Column({ type: 'varchar', length: 20 }) phone: string;

  @Column({ type: 'text' }) address: string;
  
  @Column({ type: 'varchar', length: 100 }) city: string;
  
  @Column({ name: 'postal_code', type: 'varchar', length: 10 }) postalCode: string;
  
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
}