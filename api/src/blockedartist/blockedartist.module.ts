import { Module } from '@nestjs/common';
import { BlockedartistController } from './blockedartist.controller';
import { BlockedartistService } from './blockedartist.service';

@Module({
  controllers: [BlockedartistController],
  providers: [BlockedartistService]
})
export class BlockedartistModule {}
