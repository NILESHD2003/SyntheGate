/*
  Warnings:

  - You are about to drop the `service` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "clusterMode" AS ENUM ('primary_standby', 'partial_primary_standby');

-- DropForeignKey
ALTER TABLE "service" DROP CONSTRAINT "service_project_id_fkey";

-- AlterTable
ALTER TABLE "project" ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "service";

-- CreateTable
CREATE TABLE "clusterConfig" (
    "id" UUID NOT NULL,
    "clusterMode" "clusterMode" NOT NULL DEFAULT 'primary_standby',
    "load_balancing_type" TEXT NOT NULL DEFAULT 'round-robin',
    "primary_standby" BOOLEAN NOT NULL DEFAULT true,
    "health_check_interval" INTEGER NOT NULL DEFAULT 30,
    "failover_enabled" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "cluster" (
    "id" UUID NOT NULL,
    "project_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "cluster_slug" TEXT NOT NULL,
    "cluster_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "config_id" UUID
);

-- CreateTable
CREATE TABLE "serviceNode" (
    "id" UUID NOT NULL,
    "proxy_url" TEXT NOT NULL,
    "description" TEXT,
    "cluster_id" UUID NOT NULL,
    "is_healthy" BOOLEAN NOT NULL DEFAULT true,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "weight" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "clusterConfig_id_key" ON "clusterConfig"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cluster_id_key" ON "cluster"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cluster_cluster_slug_key" ON "cluster"("cluster_slug");

-- CreateIndex
CREATE UNIQUE INDEX "cluster_cluster_url_key" ON "cluster"("cluster_url");

-- CreateIndex
CREATE UNIQUE INDEX "serviceNode_id_key" ON "serviceNode"("id");

-- AddForeignKey
ALTER TABLE "cluster" ADD CONSTRAINT "cluster_config_id_fkey" FOREIGN KEY ("config_id") REFERENCES "clusterConfig"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cluster" ADD CONSTRAINT "cluster_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceNode" ADD CONSTRAINT "serviceNode_cluster_id_fkey" FOREIGN KEY ("cluster_id") REFERENCES "cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
