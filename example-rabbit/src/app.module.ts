import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';
import { RmqModule } from '@commons/rmq/rmq.module';
import { OrderModule } from './order/order.module';
import { BILLING_SERVICE } from '@config/constants';
import { MyCacheModule } from '@commons/cache/cache';
import { CoreConfigurationModule } from '@commons/configuration/core-configuration.module';

@Module({
  imports: [
    CoreConfigurationModule.forRoot(),
    RmqModule.register({
      name: BILLING_SERVICE,
    }),
    MyCacheModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
