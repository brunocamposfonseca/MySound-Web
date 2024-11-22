-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "deletedAt" DATETIME
);

-- CreateTable
CREATE TABLE "artistcategory" (
    "artistId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("artistId", "categoryId"),
    CONSTRAINT "artistcategory_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "artistcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "songcategory" (
    "songId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    PRIMARY KEY ("songId", "categoryId"),
    CONSTRAINT "songcategory_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "songcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "cpf" TEXT,
    "birthDate" DATETIME NOT NULL,
    "genre" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "phoneNumber" TEXT,
    "downloads" TEXT
);
INSERT INTO "new_user" ("birthDate", "country", "cpf", "createdAt", "deletedAt", "downloads", "email", "genre", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt") SELECT "birthDate", "country", "cpf", "createdAt", "deletedAt", "downloads", "email", "genre", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_slug_key" ON "user"("slug");
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");
CREATE UNIQUE INDEX "user_phoneNumber_key" ON "user"("phoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "artistcategory_artistId_categoryId_key" ON "artistcategory"("artistId", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "songcategory_songId_categoryId_key" ON "songcategory"("songId", "categoryId");
