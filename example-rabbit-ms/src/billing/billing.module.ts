import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { RmqService } from '@commons/rmq/rmq.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';
import { MyCacheModule } from '@commons/cache/cache';

@Module({
  imports: [ConfigModule.forRoot(envConfigParam), MyCacheModule],
  controllers: [BillingController],
  providers: [BillingService, RmqService, ConfigService],
})
export class BillingModule {}
