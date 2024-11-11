/*
  Warnings:

  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlaylistLike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlaylistSong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SongGenre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `tracks` on the `album` table. All the data in the column will be lost.
  - Added the required column `composition` to the `song` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Playlist";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PlaylistLike";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PlaylistSong";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SongGenre";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "songgenre" (
    "songId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    PRIMARY KEY ("songId", "genreId"),
    CONSTRAINT "songgenre_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "songgenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "playlist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "playlistsong" (
    "playlistId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "addedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("playlistId", "songId"),
    CONSTRAINT "playlistsong_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playlistsong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "playlistlike" (
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "likedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "playlistId"),
    CONSTRAINT "playlistlike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playlistlike_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_album" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "pathCover" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_album" ("country", "id", "name", "pathCover", "releaseDate") SELECT "country", "id", "name", "pathCover", "releaseDate" FROM "album";
DROP TABLE "album";
ALTER TABLE "new_album" RENAME TO "album";
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
    "duration" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    CONSTRAINT "song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "album" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_song" ("albumId", "country", "duration", "features", "id", "isrc", "name", "pathSong", "releaseDate") SELECT "albumId", "country", "duration", "features", "id", "isrc", "name", "pathSong", "releaseDate" FROM "song";
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
    "genre" BOOLEAN NOT NULL,
    "country" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "phoneNumber" TEXT,
    "downloads" TEXT
);
INSERT INTO "new_user" ("country", "cpf", "createdAt", "downloads", "email", "genre", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt") SELECT "country", "cpf", "createdAt", "downloads", "email", "genre", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_slug_key" ON "user"("slug");
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");
CREATE UNIQUE INDEX "user_phoneNumber_key" ON "user"("phoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
