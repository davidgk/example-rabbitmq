import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { RmqModule } from '@commons/rmq/rmq.module';
import { RmqService } from '@commons/rmq/rmq.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';
import { MyCacheModule } from '../app.module';

@Module({
  imports: [RmqModule, ConfigModule.forRoot(envConfigParam), MyCacheModule],
  controllers: [BillingController],
  providers: [BillingService, RmqService, ConfigService],
})
export class BillingModule {}
