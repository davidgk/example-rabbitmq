import { CACHE_MANAGER, Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';
@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async bill(data: any) {
    const now = await this.cacheManager.get('now');
    const received = { ...data, now };
    this.logger.log('Billing...', received);
  }
}

