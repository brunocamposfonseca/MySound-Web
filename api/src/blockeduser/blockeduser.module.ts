import { Module } from '@nestjs/common';
import { BlockeduserController } from './blockeduser.controller';
import { BlockeduserService } from './blockeduser.service';

@Module({
  controllers: [BlockeduserController],
  providers: [BlockeduserService]
})
export class BlockeduserModule {}
