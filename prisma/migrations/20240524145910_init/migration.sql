-- CreateEnum
CREATE TYPE "Progress" AS ENUM ('NOT_YET_STARTED', 'ON_THE_WAY', 'GETTING_THERE', 'REACHING_SOON', 'COMPLETED');

-- CreateTable
CREATE TABLE "Objective" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Objective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeyResult" (
    "id" SERIAL NOT NULL,
    "objectiveId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "targetEndDate" TIMESTAMP(3) NOT NULL,
    "progress" "Progress" NOT NULL,

    CONSTRAINT "KeyResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cheer" (
    "id" SERIAL NOT NULL,
    "keyResultId" INTEGER NOT NULL,
    "message" VARCHAR(250) NOT NULL,

    CONSTRAINT "Cheer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KeyResult" ADD CONSTRAINT "KeyResult_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "Objective"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cheer" ADD CONSTRAINT "Cheer_keyResultId_fkey" FOREIGN KEY ("keyResultId") REFERENCES "KeyResult"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
