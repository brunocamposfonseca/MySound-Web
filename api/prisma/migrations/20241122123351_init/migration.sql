/*
  Warnings:

  - The primary key for the `artistalbum` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `artistcategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `artistsong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `likes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `playlistlike` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `playlistsong` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `songcategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `songgenre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `artistalbum` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `artistcategory` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `artistsong` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `likes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `playlistlike` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `playlistsong` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `songcategory` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `songgenre` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_artistalbum" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "artistId" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,
    CONSTRAINT "artistalbum_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "artistalbum_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_artistalbum" ("albumId", "artistId") SELECT "albumId", "artistId" FROM "artistalbum";
DROP TABLE "artistalbum";
ALTER TABLE "new_artistalbum" RENAME TO "artistalbum";
CREATE UNIQUE INDEX "artistalbum_artistId_albumId_key" ON "artistalbum"("artistId", "albumId");
CREATE TABLE "new_artistcategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "artistId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "artistcategory_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "artistcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_artistcategory" ("artistId", "categoryId") SELECT "artistId", "categoryId" FROM "artistcategory";
DROP TABLE "artistcategory";
ALTER TABLE "new_artistcategory" RENAME TO "artistcategory";
CREATE UNIQUE INDEX "artistcategory_artistId_categoryId_key" ON "artistcategory"("artistId", "categoryId");
CREATE TABLE "new_artistsong" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "artistId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    CONSTRAINT "artistsong_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "artistsong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_artistsong" ("artistId", "songId") SELECT "artistId", "songId" FROM "artistsong";
DROP TABLE "artistsong";
ALTER TABLE "new_artistsong" RENAME TO "artistsong";
CREATE UNIQUE INDEX "artistsong_artistId_songId_key" ON "artistsong"("artistId", "songId");
CREATE TABLE "new_likes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "likes_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_likes" ("songId", "userId") SELECT "songId", "userId" FROM "likes";
DROP TABLE "likes";
ALTER TABLE "new_likes" RENAME TO "likes";
CREATE UNIQUE INDEX "likes_userId_songId_key" ON "likes"("userId", "songId");
CREATE TABLE "new_playlistlike" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "likedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "playlistlike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playlistlike_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_playlistlike" ("likedAt", "playlistId", "userId") SELECT "likedAt", "playlistId", "userId" FROM "playlistlike";
DROP TABLE "playlistlike";
ALTER TABLE "new_playlistlike" RENAME TO "playlistlike";
CREATE UNIQUE INDEX "playlistlike_userId_playlistId_key" ON "playlistlike"("userId", "playlistId");
CREATE TABLE "new_playlistsong" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playlistId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "addedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "playlistsong_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playlistsong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_playlistsong" ("addedAt", "playlistId", "songId") SELECT "addedAt", "playlistId", "songId" FROM "playlistsong";
DROP TABLE "playlistsong";
ALTER TABLE "new_playlistsong" RENAME TO "playlistsong";
CREATE UNIQUE INDEX "playlistsong_playlistId_songId_key" ON "playlistsong"("playlistId", "songId");
CREATE TABLE "new_songcategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "songId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "songcategory_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "songcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_songcategory" ("categoryId", "songId") SELECT "categoryId", "songId" FROM "songcategory";
DROP TABLE "songcategory";
ALTER TABLE "new_songcategory" RENAME TO "songcategory";
CREATE UNIQUE INDEX "songcategory_songId_categoryId_key" ON "songcategory"("songId", "categoryId");
CREATE TABLE "new_songgenre" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "songId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,
    CONSTRAINT "songgenre_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "songgenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_songgenre" ("genreId", "songId") SELECT "genreId", "songId" FROM "songgenre";
DROP TABLE "songgenre";
ALTER TABLE "new_songgenre" RENAME TO "songgenre";
CREATE UNIQUE INDEX "songgenre_songId_genreId_key" ON "songgenre"("songId", "genreId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
