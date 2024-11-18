-- AlterTable
ALTER TABLE "Work" ADD COLUMN     "github" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "preview" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "description" SET DEFAULT '';
