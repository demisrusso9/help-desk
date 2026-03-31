-- CreateEnum
CREATE TYPE "WeekDay" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateTable
CREATE TABLE "technician_availabilities" (
    "id" TEXT NOT NULL,
    "technicianId" TEXT NOT NULL,
    "weekDay" "WeekDay" NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,

    CONSTRAINT "technician_availabilities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "technician_availabilities_technicianId_idx" ON "technician_availabilities"("technicianId");

-- AddForeignKey
ALTER TABLE "technician_availabilities" ADD CONSTRAINT "technician_availabilities_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
