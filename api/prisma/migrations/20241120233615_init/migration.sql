/*
  Warnings:

  - The primary key for the `follows` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `artistId` on the `follows` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `follows` table. All the data in the column will be lost.
  - You are about to alter the column `duration` on the `song` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - A unique constraint covering the columns `[artistId,albumId]` on the table `artistalbum` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,songId]` on the table `likes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,playlistId]` on the table `playlistlike` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[playlistId,songId]` on the table `playlistsong` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[songId,genreId]` on the table `songgenre` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `followedId` to the `follows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followedType` to the `follows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followerId` to the `follows` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `follows` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "album" ADD COLUMN "deletedAt" DATETIME;

-- AlterTable
ALTER TABLE "genre" ADD COLUMN "description" TEXT;

-- AlterTable
ALTER TABLE "playlist" ADD COLUMN "deletedAt" DATETIME;
ALTER TABLE "playlist" ADD COLUMN "description" TEXT;

-- CreateTable
CREATE TABLE "playback_history" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "currentTime" INTEGER NOT NULL,
    "playedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "playback_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playback_history_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_artist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL DEFAULT '',
    "deletedAt" DATETIME
);
INSERT INTO "new_artist" ("id", "name") SELECT "id", "name" FROM "artist";
DROP TABLE "artist";
ALTER TABLE "new_artist" RENAME TO "artist";
CREATE UNIQUE INDEX "artist_slug_key" ON "artist"("slug");
CREATE TABLE "new_follows" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "followerId" TEXT NOT NULL,
    "followedId" TEXT NOT NULL,
    "followedType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "follows_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "follows_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "follows_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "follows";
ALTER TABLE "new_follows" RENAME TO "follows";
CREATE UNIQUE INDEX "follows_followerId_followedId_followedType_key" ON "follows"("followerId", "followedId", "followedType");
CREATE TABLE "new_song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isrc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "composition" TEXT NOT NULL,
    "production" TEXT,
    "source" TEXT,
    "albumId" TEXT,
    "pathSong" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "features" TEXT NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "album" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_song" ("albumId", "composition", "country", "description", "duration", "features", "id", "isrc", "name", "pathSong", "production", "releaseDate", "source") SELECT "albumId", "composition", "country", "description", "duration", "features", "id", "isrc", "name", "pathSong", "production", "releaseDate", "source" FROM "song";
DROP TABLE "song";
ALTER TABLE "new_song" RENAME TO "song";
CREATE UNIQUE INDEX "song_isrc_key" ON "song"("isrc");
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "cpf" TEXT,
    "birthDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "genre" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "phoneNumber" TEXT,
    "downloads" TEXT
);
INSERT INTO "new_user" ("birthDate", "country", "cpf", "createdAt", "downloads", "email", "genre", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt") SELECT coalesce("birthDate", CURRENT_TIMESTAMP) AS "birthDate", "country", "cpf", "createdAt", "downloads", "email", "genre", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_slug_key" ON "user"("slug");
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");
CREATE UNIQUE INDEX "user_phoneNumber_key" ON "user"("phoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "artistalbum_artistId_albumId_key" ON "artistalbum"("artistId", "albumId");

-- CreateIndex
CREATE UNIQUE INDEX "likes_userId_songId_key" ON "likes"("userId", "songId");

-- CreateIndex
CREATE UNIQUE INDEX "playlistlike_userId_playlistId_key" ON "playlistlike"("userId", "playlistId");

-- CreateIndex
CREATE UNIQUE INDEX "playlistsong_playlistId_songId_key" ON "playlistsong"("playlistId", "songId");

-- CreateIndex
CREATE UNIQUE INDEX "songgenre_songId_genreId_key" ON "songgenre"("songId", "genreId");
