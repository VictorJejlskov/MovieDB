/*
  Warnings:

  - The primary key for the `FavoriteMovie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `FavoriteMovie` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "FavoriteMovie" DROP CONSTRAINT "FavoriteMovie_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "FavoriteMovie_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "FavoriteMovie" ADD CONSTRAINT "FavoriteMovie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
