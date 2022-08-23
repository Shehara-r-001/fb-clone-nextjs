import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.create({
  //     data: {
  //       name: 'test user02',
  //       email: 'test02@gmail.com',
  //     },
  //   });

  await prisma.post.create({
    data: {
      caption: 'a test caption 02..',
      image:
        'https://i.pinimg.com/736x/2c/08/ff/2c08fff470cd62b65b090b5d38fe693d.jpg',
      userId: '4e36050f-cac0-407c-bbc6-94c3f9d48c00',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
