import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { User } from './User';
import { Post } from './Post';

export const Like = objectType({
  name: 'Like',
  definition(t) {
    t.string('id');
    t.string('createdAt');
    t.field('author', {
      type: User,
      async resolve(parent, _args, context) {
        return await context.prisma.like
          .findUnique({
            where: {
              id: parent.id as any,
            },
          })
          .author();
      },
    });
    t.field('post', {
      type: Post,
      async resolve(parent, _args, context) {
        return await context.prisma.like
          .findUnique({
            where: {
              id: parent.id as any,
            },
          })
          .post();
      },
    });
  },
});

export const LikeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('getLikesbyPost', {
      type: 'Like',
      args: {
        postId: nonNull(stringArg()),
      },
      resolve(_parent, args, context) {
        return context.prisma.like.findMany({
          where: {
            postId: args.postId as any,
          },
        });
      },
    });
  },
});

export const CreateALike = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createALike', {
      type: 'Like',
      args: {
        userId: nonNull(stringArg()),
        postId: nonNull(stringArg()),
      },
      resolve(_parent, args, context) {
        return context.prisma.like.create({
          data: {
            userId: args.userId as any,
            postId: args.postId as any,
          },
        });
      },
    });
  },
});
