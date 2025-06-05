-- CreateEnum
CREATE TYPE "TipeKriteria" AS ENUM ('benefit', 'cost');

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "rankBeasiswa" INTEGER,
ADD COLUMN     "skorSAW" DOUBLE PRECISION,
ADD COLUMN     "statusBeasiswa" BOOLEAN DEFAULT false;

-- CreateTable
CREATE TABLE "Kriteria" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "bobot" DOUBLE PRECISION NOT NULL,
    "tipe" "TipeKriteria" NOT NULL,

    CONSTRAINT "Kriteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penilaian" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "kriteriaId" TEXT NOT NULL,
    "nilai" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Penilaian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HasilSAW" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "skor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "HasilSAW_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Penilaian_studentId_kriteriaId_key" ON "Penilaian"("studentId", "kriteriaId");

-- CreateIndex
CREATE UNIQUE INDEX "HasilSAW_studentId_key" ON "HasilSAW"("studentId");

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_kriteriaId_fkey" FOREIGN KEY ("kriteriaId") REFERENCES "Kriteria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HasilSAW" ADD CONSTRAINT "HasilSAW_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
