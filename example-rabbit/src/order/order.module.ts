import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { BILLING_SERVICE } from '@config/constants';
import { RmqModule } from '@commons/rmq/rmq.module';

@Module({
  imports: [
    RmqModule.register({
      name: BILLING_SERVICE,
    }),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
