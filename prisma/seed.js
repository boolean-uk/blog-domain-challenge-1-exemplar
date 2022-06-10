const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.create({
    data: {
      username: 'alicemarti',
      email: 'alice@marti.com',
      profile: {
        create: {
          profilePicture: 'https://avatars2.githubusercontent.com/u/527058?s=460&v=4',
          biography: 'I am a software engineer',
        },
      },
    },
  });

  console.log(`${createdUsers.count} users created`, createdUsers);

  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
