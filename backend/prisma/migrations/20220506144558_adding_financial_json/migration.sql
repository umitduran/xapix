-- CreateTable
CREATE TABLE "FinancialGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "groupStart" DATETIME NOT NULL,
    "groupEnd" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Financial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "groupId" TEXT NOT NULL,
    "postedDate" DATETIME NOT NULL,
    "orderId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "subType" TEXT NOT NULL,
    "currencyAmount" REAL NOT NULL,
    "currencyCode" TEXT NOT NULL
);
INSERT INTO "new_Financial" ("currencyAmount", "currencyCode", "groupId", "orderId", "postedDate", "subType", "type") SELECT "currencyAmount", "currencyCode", "groupId", "orderId", "postedDate", "subType", "type" FROM "Financial";
DROP TABLE "Financial";
ALTER TABLE "new_Financial" RENAME TO "Financial";
CREATE UNIQUE INDEX "Financial_id_key" ON "Financial"("id");
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL,
    "lastUpdated" DATETIME NOT NULL,
    "totalAmount" REAL NOT NULL,
    "totalCurrency" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "purchaseDate" DATETIME NOT NULL,
    "sellerId" TEXT NOT NULL
);
INSERT INTO "new_Order" ("id", "lastUpdated", "paymentMethod", "purchaseDate", "sellerId", "status", "totalAmount", "totalCurrency") SELECT "id", "lastUpdated", "paymentMethod", "purchaseDate", "sellerId", "status", "totalAmount", "totalCurrency" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "FinancialGroup_id_key" ON "FinancialGroup"("id");
