/*
  Warnings:

  - A unique constraint covering the columns `[studentId,kriteria]` on the table `Penilaian` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Penilaian_studentId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Penilaian_studentId_kriteria_key" ON "Penilaian"("studentId", "kriteria");
