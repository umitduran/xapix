import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/orders', async (req, res) => {
  const orders = await prisma.order.findMany({
    orderBy: { id: 'asc' },
  })
  res.json(orders)
})

app.get('/financials', async (req, res) => {
  const financials = await prisma.financial.findMany({
    orderBy: { id: 'asc' },
  })
  res.json(financials)
})

app.get('/financialGroups', async (req, res) => {
  const financialGroups = await prisma.financialGroup.findMany({
    orderBy: { id: 'asc' },
  })
  res.json(financialGroups)
})

const server = app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)
