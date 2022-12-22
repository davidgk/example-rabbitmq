import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  obtainValue(key: string): Promise<any> {
    return this.cacheManager.get(key);
  }

  save(key: string, value: any, ttl = 300) {
    this.cacheManager.set(key, value, ttl);
  }

  del(key: string) {
    this.cacheManager.del(key);
  }

  resetWholeCache() {
    this.cacheManager.reset;
  }
}
