import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { Comment } from './Comment';
import { User } from './User';
import { Like } from './Like';

export const Post = objectType({
  name: 'Post',

  definition(t) {
    t.string('id');
    t.string('caption');
    t.string('createdAt');
    t.nullable.string('image');
    t.field('author', {
      type: User,
      async resolve(parent, _args, context) {
        return await context.prisma.post
          .findUnique({
            where: {
              id: parent.id as any,
            },
          })
          .author();
      },
    });
    t.nullable.list.field('comments', {
      type: Comment,
      async resolve(parent, _args, context) {
        return await context.prisma.post
          .findUnique({
            where: {
              id: parent.id as any,
            },
          })
          .comments();
      },
    });
    t.nullable.list.field('likes', {
      type: Like,
      async resolve(parent, _args, context) {
        return await context.prisma.post
          .findUnique({
            where: {
              id: parent.id as any,
            },
          })
          .likes();
      },
    });
  },
});

export const PostsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('getAllPosts', {
      type: 'Post',
      resolve(_parent, _args, context) {
        return context.prisma.post.findMany();
      },
    });

    t.list.field('getPostByID', {
      type: 'Post',
      args: {
        userId: nonNull(stringArg()),
      },
      resolve(_parent, args, context) {
        return context.prisma.post.findMany({
          where: {
            userId: args.userId,
          },
        });
      },
    });
  },
});

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createPost', {
      type: 'Post',
      args: {
        caption: stringArg(),
        image: stringArg(),
        userId: nonNull(stringArg()),
        id: stringArg(),
      },
      resolve(_parent, args, context) {
        return context.prisma.post.create({
          data: {
            caption: args.caption as any,
            image: args.image as any,
            userId: args.userId as any,
            id: args.id as any,
          },
        });
      },
    });
  },
});
