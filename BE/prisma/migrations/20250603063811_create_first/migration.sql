/*
  Warnings:

  - You are about to drop the `Grade` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `kelasId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahunMasuk` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "KodeKelas" AS ENUM ('K10', 'K11', 'K12');

-- DropForeignKey
ALTER TABLE "Grade" DROP CONSTRAINT "Grade_studentId_fkey";

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "kelasId" TEXT NOT NULL,
ADD COLUMN     "tahunMasuk" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "kodeMapel" TEXT;

-- DropTable
DROP TABLE "Grade";

-- CreateTable
CREATE TABLE "Kelas" (
    "id" TEXT NOT NULL,
    "kode" "KodeKelas" NOT NULL,

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mapel" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kode" TEXT NOT NULL,

    CONSTRAINT "Mapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nilai" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "mapelId" TEXT NOT NULL,
    "nilai" INTEGER NOT NULL,

    CONSTRAINT "Nilai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_StudentMapel" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_StudentMapel_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kelas_kode_key" ON "Kelas"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "Mapel_kode_key" ON "Mapel"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "Nilai_studentId_mapelId_key" ON "Nilai"("studentId", "mapelId");

-- CreateIndex
CREATE INDEX "_StudentMapel_B_index" ON "_StudentMapel"("B");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_kodeMapel_fkey" FOREIGN KEY ("kodeMapel") REFERENCES "Mapel"("kode") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentMapel" ADD CONSTRAINT "_StudentMapel_A_fkey" FOREIGN KEY ("A") REFERENCES "Mapel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentMapel" ADD CONSTRAINT "_StudentMapel_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
