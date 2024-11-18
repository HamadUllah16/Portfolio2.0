/*
  Warnings:

  - Added the required column `companyLogo` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "companyLogo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Work" ADD COLUMN     "image" TEXT NOT NULL;
