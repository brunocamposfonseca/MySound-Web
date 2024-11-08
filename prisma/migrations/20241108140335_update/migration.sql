/*
  Warnings:

  - You are about to drop the column `follows` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `User` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Follows" (
    "userId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "artistId"),
    CONSTRAINT "Follows_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Follows_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LikeSong" (
    "userId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "songId"),
    CONSTRAINT "LikeSong_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LikeSong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "cpf" TEXT,
    "status" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "phoneNumber" TEXT,
    "downloads" TEXT NOT NULL
);
INSERT INTO "new_User" ("cpf", "createdAt", "downloads", "email", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt") SELECT "cpf", "createdAt", "downloads", "email", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_slug_key" ON "User"("slug");
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
