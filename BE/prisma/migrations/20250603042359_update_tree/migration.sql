/*
  Warnings:

  - You are about to drop the column `biodataId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `biodataId` on the `Teacher` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_biodataId_fkey";

-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_biodataId_fkey";

-- DropIndex
DROP INDEX "Student_biodataId_key";

-- DropIndex
DROP INDEX "Teacher_biodataId_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "biodataId";

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "biodataId";
