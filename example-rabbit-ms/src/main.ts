import { NestFactory } from '@nestjs/core';
import { RmqService } from '@commons/rmq/rmq.service';
import { BILLING_SERVICE } from '@config/constants';
import { BillingModule } from './billing/billing.module';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions(BILLING_SERVICE));
  await app.startAllMicroservices();
}
bootstrap();
