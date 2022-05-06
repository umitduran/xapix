-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "lastUpdated" DATETIME NOT NULL,
    "totalAmount" REAL NOT NULL,
    "totalCurrency" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "purchaseDate" DATETIME NOT NULL,
    "sellerId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");
