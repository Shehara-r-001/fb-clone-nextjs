import { asNexusMethod, nonNull, objectType, stringArg } from 'nexus';
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
