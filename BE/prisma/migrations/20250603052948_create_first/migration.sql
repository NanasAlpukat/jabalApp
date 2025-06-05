/*
  Warnings:

  - A unique constraint covering the columns `[nis]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nik]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jurusanId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nis` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nik` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "jurusanId" TEXT NOT NULL,
ADD COLUMN     "nis" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "nik" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Jurusan" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kode" TEXT NOT NULL,

    CONSTRAINT "Jurusan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jurusan_kode_key" ON "Jurusan"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "Student_nis_key" ON "Student"("nis");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_nik_key" ON "Teacher"("nik");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_jurusanId_fkey" FOREIGN KEY ("jurusanId") REFERENCES "Jurusan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
