/*
  Warnings:

  - Added the required column `name` to the `artist` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_artist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_artist" ("id") SELECT "id" FROM "artist";
DROP TABLE "artist";
ALTER TABLE "new_artist" RENAME TO "artist";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
