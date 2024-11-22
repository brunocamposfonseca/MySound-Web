/*
  Warnings:

  - You are about to drop the column `genre` on the `user` table. All the data in the column will be lost.

*/
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
    "gender" TEXT NOT NULL DEFAULT 'male',
    "country" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    "phoneNumber" TEXT,
    "downloads" TEXT
);
INSERT INTO "new_user" ("birthDate", "country", "cpf", "createdAt", "deletedAt", "downloads", "email", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt") SELECT "birthDate", "country", "cpf", "createdAt", "deletedAt", "downloads", "email", "id", "name", "password", "phoneNumber", "slug", "status", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_slug_key" ON "user"("slug");
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");
CREATE UNIQUE INDEX "user_phoneNumber_key" ON "user"("phoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
