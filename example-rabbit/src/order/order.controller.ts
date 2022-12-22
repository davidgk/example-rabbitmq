import { Body, CACHE_MANAGER, Controller, Get, Inject, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Cache } from 'cache-manager';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
}
