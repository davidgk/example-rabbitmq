import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';
import { RmqModule } from '@commons/rmq/rmq.module';
import { OrderModule } from './order/order.module';
import { MyCacheModule } from '@commons/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot(envConfigParam),
    RmqModule,
    MyCacheModule.register(),
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
