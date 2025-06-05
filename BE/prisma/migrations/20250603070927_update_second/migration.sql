/*
  Warnings:

  - You are about to drop the column `kode` on the `Student` table. All the data in the column will be lost.
  - Added the required column `kodeJurusan` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_kode_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "kode",
ADD COLUMN     "kodeJurusan" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_kodeJurusan_fkey" FOREIGN KEY ("kodeJurusan") REFERENCES "Jurusan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
