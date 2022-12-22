import { CacheModule, DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisService } from '@commons/redis/redis.service';

@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class MyCacheModule {
  static register(): DynamicModule {
    return;
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ttl: configService.get('CACHE_TTL'),
        host: configService.get('CACHE_HOST'),
        port: configService.get('CACHE_PORT'),
      }),
      inject: [ConfigService],
    });
  }
}
