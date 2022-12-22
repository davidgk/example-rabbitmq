import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { BillingService } from './billing.service';
import { RmqService } from '@commons/rmq/rmq.service';

@Controller()
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('order_created')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    await this.billingService.bill(data);
    this.rmqService.ack(context);
  }
}
