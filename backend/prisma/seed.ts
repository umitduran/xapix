import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const orderData: Prisma.OrderCreateInput[] = require('./seedMockData/orders.json')
const financialData: Prisma.FinancialCreateInput[] = require('./seedMockData/financials.json')
const financialGroupData: Prisma.FinancialGroupCreateInput[] = require('./seedMockData/financialGroups.json')

async function main() {
  console.log(`Start seeding ...`)
  for (const u of financialData) {
    const financial = await prisma.financial.create({
      data: u,
    })
    console.log(`Created financial with id: ${financial.id}`)
  }
  for (const u of financialGroupData) {
    const financialGroup = await prisma.financialGroup.create({
      data: u,
    })
    console.log(`Created financial with id: ${financialGroup.id}`)
  }
  for (const u of orderData) {
    const order = await prisma.order.create({
      data: u,
    })
    console.log(`Created order with id: ${order.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
