import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { ServiceController } from './service/service.controller';
import { SongModule } from './song/song.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule, ArtistModule, SongModule],
  controllers: [AppController, ServiceController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
