import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { BILLING_SERVICE } from '@config/constants';
import { Cache } from 'cache-manager';

@Injectable()
export class OrderService {
  private readonly logger = new Logger(OrderService.name);
  constructor(
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    try {
      await this.cacheManager.set('now', 'en orders ahora es mejor');
      const toDispatch = createOrderDto;
      await lastValueFrom(this.billingClient.emit('order_created', toDispatch));
      this.logger.log('Dispatch:' + toDispatch);
      return 'dispatch';
    } catch (e) {
      Logger.log('fail: ' + e.message);
    }
  }

  findAll() {
    return `This action returns all order`;
  }
}
