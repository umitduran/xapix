-- CreateTable
CREATE TABLE "Financial" (
    "groupId" TEXT NOT NULL,
    "postedDate" DATETIME NOT NULL,
    "orderId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "subType" TEXT NOT NULL,
    "currencyAmount" REAL NOT NULL,
    "currencyCode" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Financial_groupId_key" ON "Financial"("groupId");
