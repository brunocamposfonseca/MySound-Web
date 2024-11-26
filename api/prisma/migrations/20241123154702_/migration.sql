/*
  Warnings:

  - You are about to drop the `playback_history` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "playback_history";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "blockeduser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "blockerId" TEXT NOT NULL,
    "blockedId" TEXT NOT NULL,
    CONSTRAINT "blockeduser_blockerId_fkey" FOREIGN KEY ("blockerId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "blockeduser_blockedId_fkey" FOREIGN KEY ("blockedId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "playbackhistory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "currentTime" INTEGER NOT NULL,
    "playedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "playbackhistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playbackhistory_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "blockeduser_blockerId_blockedId_key" ON "blockeduser"("blockerId", "blockedId");

-- CreateIndex
CREATE UNIQUE INDEX "playbackhistory_userId_key" ON "playbackhistory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "playbackhistory_userId_songId_key" ON "playbackhistory"("userId", "songId");
