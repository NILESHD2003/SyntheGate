/*
  Warnings:

  - You are about to drop the column `primary_standby` on the `clusterConfig` table. All the data in the column will be lost.
  - Added the required column `project_id` to the `clusterConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clusterConfig" DROP COLUMN "primary_standby",
ADD COLUMN     "project_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "clusterConfig" ADD CONSTRAINT "clusterConfig_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
