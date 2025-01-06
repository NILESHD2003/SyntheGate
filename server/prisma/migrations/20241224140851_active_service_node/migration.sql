/*
  Warnings:

  - The `load_balancing_type` column on the `clusterConfig` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "loadBalancingType" AS ENUM ('round_robin', 'least_connections', 'weighted_round_robin', 'random', 'ip_hash', 'least_response_time', 'none');

-- DropIndex
DROP INDEX "cluster_cluster_slug_key";

-- AlterTable
ALTER TABLE "clusterConfig" DROP COLUMN "load_balancing_type",
ADD COLUMN     "load_balancing_type" "loadBalancingType" NOT NULL DEFAULT 'none';

-- AlterTable
ALTER TABLE "serviceNode" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "weight" SET DEFAULT 1;
