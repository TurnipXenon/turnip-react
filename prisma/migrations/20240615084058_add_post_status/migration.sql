/*
  Warnings:

  - Added the required column `status` to the `JobPosting` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('Queued', 'Archived', 'Waiting', 'Active', 'Rejected');

-- AlterTable
ALTER TABLE "JobPosting" ADD COLUMN     "status" "PostStatus" NOT NULL;
