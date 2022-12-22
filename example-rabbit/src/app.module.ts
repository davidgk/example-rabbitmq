import { CacheModule, Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';
import { RmqModule } from '@commons/rmq/rmq.module';
import { OrderModule } from './order/order.module';
import * as redisStore from 'cache-manager-redis-store';

export const MyCacheModule = CacheModule.register({
  isGlobal: true,
  store: redisStore,
  socket: {
    host: process.env.CACHE_HOST,
    port: Number(process.env.CACHE_PORT),
    no_ready_check: true,
  },
});

const configModule = ConfigModule.forRoot(envConfigParam);

@Module({
  imports: [configModule, RmqModule, MyCacheModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
