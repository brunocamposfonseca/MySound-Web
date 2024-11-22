-- CreateTable
CREATE TABLE "BlockedArtist" (
    "userId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,
    "blockedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "artistId"),
    CONSTRAINT "BlockedArtist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BlockedArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME
);
INSERT INTO "new_Category" ("country", "deletedAt", "description", "id", "name", "type") SELECT "country", "deletedAt", "description", "id", "name", "type" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE TABLE "new_likes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "AddedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "likes_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_likes" ("id", "songId", "userId") SELECT "id", "songId", "userId" FROM "likes";
DROP TABLE "likes";
ALTER TABLE "new_likes" RENAME TO "likes";
CREATE UNIQUE INDEX "likes_userId_songId_key" ON "likes"("userId", "songId");
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "cpf" TEXT,
    "birthDate" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "phoneNumber" TEXT,
    "downloads" TEXT
);
INSERT INTO "new_user" ("birthDate", "country", "cpf", "createdAt", "deletedAt", "downloads", "email", "gender", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt") SELECT "birthDate", "country", "cpf", "createdAt", "deletedAt", "downloads", "email", "gender", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_slug_key" ON "user"("slug");
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");
CREATE UNIQUE INDEX "user_phoneNumber_key" ON "user"("phoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "BlockedArtist_userId_artistId_key" ON "BlockedArtist"("userId", "artistId");
