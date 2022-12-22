import { CacheModule, Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { ConfigModule } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';
import { BillingModule } from './billing/billing.module';
import * as redisStore from 'cache-manager-redis-store';

export const MyCacheModule = CacheModule.register({
  store: redisStore,
  socket: {
    host: 'localhost',
    port: 6379,
    no_ready_check: true,
  },
});

@Module({
  imports: [ConfigModule.forRoot(envConfigParam), MyCacheModule, BillingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
