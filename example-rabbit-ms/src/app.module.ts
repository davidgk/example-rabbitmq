import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { BillingModule } from './billing/billing.module';
import { RmqModule } from '@commons/rmq/rmq.module';
import { MyCacheModule } from '@commons/cache/cache';
import { CoreConfigurationModule } from '@commons/configuration/core-configuration.module';


@Module({
  imports: [
    CoreConfigurationModule.forRoot(),
    RmqModule,
    MyCacheModule,
    BillingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
