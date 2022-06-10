const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  const createdUser = await prisma.user.create({
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

  console.log(`${createdUser} users created`, createdUser);

  const createdPost = await prisma.post.create({
    data: {
      title: 'why does it rain',
      content: 'it rains because its wet',
      published: true,
      picture:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      user: {
        connect: {
          id: createdUser.id,
        },
      },
    },
  });

  console.log(`${createdPost} post created`, createdPost);

  const createdComment = await prisma.comment.create({
    data: {
      content: 'that is terribly interesting',
      user: {
        connect: {
          id: createdUser.id,
        },
      },
    },
  });

  console.log(`${createdComment} post created`, createdComment);

  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
