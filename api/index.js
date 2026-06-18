const app = require('../src/app');
const prisma = require('../src/prismaClient');
const { initOrderCounter } = require('../src/services/db');

async function initialize() {
  await prisma.$connect();
  await initOrderCounter();
}

initialize().catch((err) => {
  console.error('Failed to initialize:', err);
});

module.exports = app;
