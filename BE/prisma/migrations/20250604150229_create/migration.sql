/*
  Warnings:

  - You are about to drop the column `kriteriaId` on the `Penilaian` table. All the data in the column will be lost.
  - You are about to drop the `Kriteria` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `Penilaian` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kriteria` to the `Penilaian` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Penilaian" DROP CONSTRAINT "Penilaian_kriteriaId_fkey";

-- DropIndex
DROP INDEX "Penilaian_studentId_kriteriaId_key";

-- AlterTable
ALTER TABLE "Penilaian" DROP COLUMN "kriteriaId",
ADD COLUMN     "kriteria" TEXT NOT NULL;

-- DropTable
DROP TABLE "Kriteria";

-- DropEnum
DROP TYPE "TipeKriteria";

-- CreateIndex
CREATE UNIQUE INDEX "Penilaian_studentId_key" ON "Penilaian"("studentId");
