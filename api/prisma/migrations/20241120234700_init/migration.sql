/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `artist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `playlist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `album` table without a default value. This is not possible if the table is not empty.
  - Made the column `albumId` on table `song` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_album" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "pathCover" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "country" TEXT NOT NULL,
    "deletedAt" DATETIME
);
INSERT INTO "new_album" ("country", "deletedAt", "id", "name", "pathCover", "releaseDate") SELECT "country", "deletedAt", "id", "name", "pathCover", "releaseDate" FROM "album";
DROP TABLE "album";
ALTER TABLE "new_album" RENAME TO "album";
CREATE TABLE "new_artist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_artist" ("id", "name", "slug") SELECT "id", "name", "slug" FROM "artist";
DROP TABLE "artist";
ALTER TABLE "new_artist" RENAME TO "artist";
CREATE UNIQUE INDEX "artist_slug_key" ON "artist"("slug");
CREATE TABLE "new_song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isrc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "composition" TEXT NOT NULL,
    "production" TEXT,
    "source" TEXT,
    "albumId" TEXT NOT NULL,
    "pathSong" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "features" TEXT NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_song" ("albumId", "composition", "country", "deletedAt", "description", "duration", "features", "id", "isrc", "name", "pathSong", "production", "releaseDate", "source") SELECT "albumId", "composition", "country", "deletedAt", "description", "duration", "features", "id", "isrc", "name", "pathSong", "production", "releaseDate", "source" FROM "song";
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
    "birthDate" DATETIME NOT NULL,
    "genre" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "phoneNumber" TEXT,
    "downloads" TEXT
);
INSERT INTO "new_user" ("birthDate", "country", "cpf", "createdAt", "deletedAt", "downloads", "email", "genre", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt") SELECT "birthDate", "country", "cpf", "createdAt", "deletedAt", "downloads", "email", "genre", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_slug_key" ON "user"("slug");
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");
CREATE UNIQUE INDEX "user_phoneNumber_key" ON "user"("phoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "playlist_userId_key" ON "playlist"("userId");
