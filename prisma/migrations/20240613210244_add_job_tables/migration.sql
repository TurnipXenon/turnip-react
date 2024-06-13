-- CreateTable
CREATE TABLE "JobEvents" (
    "id" TEXT NOT NULL,
    "anonymizedNotes" TEXT NOT NULL,
    "publicNotes" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jobPostingId" TEXT NOT NULL,

    CONSTRAINT "JobEvents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobPosting" (
    "id" TEXT NOT NULL,
    "alias" TEXT,
    "company" TEXT,
    "jobTitle" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "jobLink" TEXT,
    "resumeLink" TEXT,
    "sessionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "JobPosting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "isPublic" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "JobSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobSession_id_userId_key" ON "JobSession"("id", "userId");

-- AddForeignKey
ALTER TABLE "JobEvents" ADD CONSTRAINT "JobEvents_jobPostingId_fkey" FOREIGN KEY ("jobPostingId") REFERENCES "JobPosting"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobPosting" ADD CONSTRAINT "JobPosting_sessionId_userId_fkey" FOREIGN KEY ("sessionId", "userId") REFERENCES "JobSession"("id", "userId") ON DELETE CASCADE ON UPDATE CASCADE;
