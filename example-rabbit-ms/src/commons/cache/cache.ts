import { CacheModule } from '@nestjs/common';
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
