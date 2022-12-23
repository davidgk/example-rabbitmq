import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfigParam } from '@config/env-config-params';

@Global()
@Module({
  providers: [ConfigService],
})
export class CoreConfigurationModule {
  static forRoot() {
    return ConfigModule.forRoot(envConfigParam);
  }
}
