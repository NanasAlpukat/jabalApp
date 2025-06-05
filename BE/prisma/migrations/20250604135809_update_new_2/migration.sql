/*
  Warnings:

  - Made the column `upsensi` on table `Nilai` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Nilai" ALTER COLUMN "upsensi" SET NOT NULL;
