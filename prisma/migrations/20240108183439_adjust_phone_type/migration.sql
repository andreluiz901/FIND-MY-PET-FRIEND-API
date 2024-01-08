/*
  Warnings:

  - The `phone` column on the `orgs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "phone",
ADD COLUMN     "phone" INTEGER;
