/*
  Warnings:

  - You are about to drop the column `profile` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `profilePicture` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Profile_profile_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "profile",
ADD COLUMN     "profilePicture" TEXT NOT NULL;
