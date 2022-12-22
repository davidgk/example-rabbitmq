import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { BILLING_SERVICE } from '@config/constants';

@Injectable()
export class OrderService {
  constructor(@Inject(BILLING_SERVICE) private billingClient: ClientProxy) {}
  async create(createOrderDto: CreateOrderDto) {
    try {
      await lastValueFrom(
        this.billingClient.emit('order_created', {
          request: createOrderDto,
        }),
      );
      return 'OK!';
    } catch (e) {
      Logger.log('fail: ' + e.message);
    }
  }

  findAll() {
    return `This action returns all order`;
  }
}
