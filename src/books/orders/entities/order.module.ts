import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from '../../customers/entities/customer.entity.js';
import { CustomerAddressEntity } from '../../customers/entities/customer-address.entity.js';
import { OrderEntity } from './../entities/order.entity.js';
import { OrderItemEntity } from './../entities/order-item.entity.js';
import { PaymentEntity } from './../entities/payment.entity.js';
import { ShipmentEntity } from './../entities/shipment.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerEntity,
      CustomerAddressEntity,
      OrderEntity,
      OrderItemEntity,
      PaymentEntity,
      ShipmentEntity,
    ]),
  ],
})
export class OrdersModule {}