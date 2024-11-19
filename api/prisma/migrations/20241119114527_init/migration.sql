-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "cpf" TEXT,
    "genre" BOOLEAN NOT NULL,
    "country" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "phoneNumber" TEXT,
    "downloads" TEXT
);

-- CreateTable
CREATE TABLE "artist" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "follows" (
    "userId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "artistId"),
    CONSTRAINT "follows_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "follows_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "album" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "pathCover" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "artistalbum" (
    "artistId" TEXT NOT NULL,
    "albumId" TEXT NOT NULL,

    PRIMARY KEY ("artistId", "albumId"),
    CONSTRAINT "artistalbum_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "artistalbum_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "song" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isrc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "composition" TEXT NOT NULL,
    "production" TEXT,
    "source" TEXT,
    "albumId" TEXT,
    "pathSong" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "country" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    CONSTRAINT "song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "album" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "likes" (
    "userId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,

    PRIMARY KEY ("userId", "songId"),
    CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "likes_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "genre" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "songgenre" (
    "songId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    PRIMARY KEY ("songId", "genreId"),
    CONSTRAINT "songgenre_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "songgenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "playlist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "playlistsong" (
    "playlistId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,
    "addedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("playlistId", "songId"),
    CONSTRAINT "playlistsong_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playlistsong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "playlistlike" (
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "likedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "playlistId"),
    CONSTRAINT "playlistlike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playlistlike_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_slug_key" ON "user"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_phoneNumber_key" ON "user"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "song_isrc_key" ON "song"("isrc");

-- CreateIndex
CREATE UNIQUE INDEX "genre_name_key" ON "genre"("name");
