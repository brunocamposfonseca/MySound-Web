-- CreateTable
CREATE TABLE "artistsong" (
    "artistId" TEXT NOT NULL,
    "songId" TEXT NOT NULL,

    PRIMARY KEY ("artistId", "songId"),
    CONSTRAINT "artistsong_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "artistsong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "artistsong_artistId_songId_key" ON "artistsong"("artistId", "songId");
