/*
  Warnings:

  - You are about to drop the `BlockedArtist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BlockedArtist";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "blockedartist" (
    "userId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    "blockedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "artistId"),
    CONSTRAINT "blockedartist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "blockedartist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "blockedartist_userId_artistId_key" ON "blockedartist"("userId", "artistId");
