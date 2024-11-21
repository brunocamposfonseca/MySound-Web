import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { ServiceController } from './service/service.controller';
import { SongModule } from './song/song.module';
import { PrismaService } from './prisma/prisma.service';
import { AlbumModule } from './album/album.module';
import { GenreModule } from './genre/genre.module';
import { PlaylistModule } from './playlist/playlist.module';
import { FollowsModule } from './follows/follows.module';
import { ArtistalbumModule } from './artistalbum/artistalbum.module';
import { LikesModule } from './likes/likes.module';
import { SonggenreModule } from './songgenre/songgenre.module';
import { PlaylistsongModule } from './playlistsong/playlistsong.module';
import { PlaylistlikeModule } from './playlistlike/playlistlike.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'

@Module({
  imports: [UserModule, ArtistModule, SongModule, AlbumModule, GenreModule, PlaylistModule, FollowsModule, ArtistalbumModule, LikesModule, SonggenreModule, PlaylistsongModule, PlaylistlikeModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public')
  })],
  controllers: [AppController, ServiceController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
