/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `playback_history` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,songId]` on the table `playback_history` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "playback_history_userId_key" ON "playback_history"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "playback_history_userId_songId_key" ON "playback_history"("userId", "songId");
