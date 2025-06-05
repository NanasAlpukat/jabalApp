/*
  Warnings:

  - You are about to alter the column `upsensi` on the `Nilai` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Nilai" ALTER COLUMN "upsensi" SET DATA TYPE INTEGER;
