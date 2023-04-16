/*
  Warnings:

  - You are about to drop the `FavoriteMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavoriteMovie" DROP CONSTRAINT "FavoriteMovie_userId_fkey";

-- DropTable
DROP TABLE "FavoriteMovie";

-- CreateTable
CREATE TABLE "FavouriteMovie" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "FavouriteMovie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavouriteMovie" ADD CONSTRAINT "FavouriteMovie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
