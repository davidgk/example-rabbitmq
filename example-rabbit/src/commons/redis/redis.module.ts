import { CacheModule, DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MyCacheService } from '@commons/redis/redis.service';

@Module({
  providers: [MyCacheService],
  exports: [MyCacheService],
})
export class MyCacheModule {
  static register(): DynamicModule {
    return CacheModule.registerAsync({
      isGlobal: true,
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
