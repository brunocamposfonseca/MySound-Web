/*
  Warnings:

  - You are about to drop the column `pathCover` on the `Song` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isrc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "albumId" TEXT,
    "pathSong" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Song" ("albumId", "country", "duration", "features", "id", "isrc", "name", "pathSong", "releaseDate") SELECT "albumId", "country", "duration", "features", "id", "isrc", "name", "pathSong", "releaseDate" FROM "Song";
DROP TABLE "Song";
ALTER TABLE "new_Song" RENAME TO "Song";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
