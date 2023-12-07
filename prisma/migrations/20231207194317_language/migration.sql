/*
  Warnings:

  - Added the required column `code` to the `Snippet` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `lanaguage` on the `Snippet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Snippet" ADD COLUMN     "code" TEXT NOT NULL,
DROP COLUMN "lanaguage",
ADD COLUMN     "lanaguage" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Lanaguage";
