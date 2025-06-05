/*
  Warnings:

  - You are about to drop the column `kodeJurusan` on the `Student` table. All the data in the column will be lost.
  - Added the required column `jurusanId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_kodeJurusan_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "kodeJurusan",
ADD COLUMN     "jurusanId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_jurusanId_fkey" FOREIGN KEY ("jurusanId") REFERENCES "Jurusan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
