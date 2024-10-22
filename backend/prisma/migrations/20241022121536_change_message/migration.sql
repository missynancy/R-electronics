/*
  Warnings:

  - You are about to drop the column `mesage` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `message` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL
);
INSERT INTO "new_Contact" ("contactInfo", "customerName", "id") SELECT "contactInfo", "customerName", "id" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
