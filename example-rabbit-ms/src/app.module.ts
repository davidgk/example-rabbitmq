import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';
import { BillingModule } from './billing/billing.module';

@Module({
  imports: [ConfigModule.forRoot(envConfigParam), BillingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
