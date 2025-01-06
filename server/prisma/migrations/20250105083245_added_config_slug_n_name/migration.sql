/*
  Warnings:

  - Added the required column `config_slug` to the `clusterConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `clusterConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clusterConfig" ADD COLUMN     "config_slug" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
