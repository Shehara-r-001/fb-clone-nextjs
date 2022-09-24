import {
  asNexusMethod,
  extendType,
  nonNull,
  objectType,
  stringArg,
} from 'nexus';
import { User } from './User';
// import { DateTimeResolver } from 'graphql-scalars';

// export const GQLDate = asNexusMethod(DateTimeResolver, 'date');

export const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.string('id');
    t.string('desc');
    t.string('createdAt');
    t.field('author', {
      type: User,
      async resolve(parent, _args, context) {
        return await context.prisma.comment
          .findUnique({
            where: {
              id: parent.id as any,
            },
          })
          .author();
      },
    });
  },
});

export const CommentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('getCommentsByPostId', {
      type: 'Comment',
      args: {
        postId: nonNull(stringArg()),
      },
      async resolve(_parent, args, context) {
        return await context.prisma.comment.findMany({
          where: {
            postId: args.postId,
          },
        });
      },
    });
  },
});

export const CommentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createComment', {
      type: 'Comment',
      args: {
        postId: nonNull(stringArg()),
        desc: nonNull(stringArg()),
        userId: nonNull(stringArg()),
      },
      resolve(_parent, args, context) {
        return context.prisma.comment.create({
          data: {
            desc: args.desc as any,
            postId: args.postId as any,
            userId: args.userId as any,
          },
        });
      },
    });
  },
});
