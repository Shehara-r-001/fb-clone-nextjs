import {
  asNexusMethod,
  extendType,
  nonNull,
  objectType,
  stringArg,
} from 'nexus';
import { Comment } from './Comment';
import { User } from './User';
import { Like } from './Like';
// import { DateTimeResolver } from 'graphql-scalars';

// export const GQLDate = asNexusMethod(DateTimeResolver, 'date');

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
      async resolve(_parent, _args, context) {
        return await context.prisma.post.findMany();
      },
    });

    t.field('getPostById', {
      type: 'Post',
      args: {
        userId: nonNull(stringArg()),
      },
      async resolve(_parent, args, context) {
        return await context.prisma.post.findMany({
          where: {
            userId: args.userId,
          },
        });
      },
    });
  },
});
