/*
  Warnings:

  - Changed the type of `zip_code` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "zip_code",
ADD COLUMN     "zip_code" INTEGER NOT NULL;
