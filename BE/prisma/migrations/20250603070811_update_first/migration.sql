/*
  Warnings:

  - You are about to drop the column `jurusanId` on the `Student` table. All the data in the column will be lost.
  - Added the required column `kode` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_jurusanId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "jurusanId",
ADD COLUMN     "kode" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_kode_fkey" FOREIGN KEY ("kode") REFERENCES "Jurusan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
