/*
  Warnings:

  - The primary key for the `blockedartist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `blockedartist` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_blockedartist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    "blockedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "blockedartist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "blockedartist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_blockedartist" ("artistId", "blockedAt", "userId") SELECT "artistId", "blockedAt", "userId" FROM "blockedartist";
DROP TABLE "blockedartist";
ALTER TABLE "new_blockedartist" RENAME TO "blockedartist";
CREATE UNIQUE INDEX "blockedartist_userId_artistId_key" ON "blockedartist"("userId", "artistId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
