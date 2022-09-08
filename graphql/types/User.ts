import { asNexusMethod, extendType, objectType } from 'nexus';
import { Post } from './Post';
// import { DateTimeResolver } from 'graphql-scalars';

// export const GQLDate = asNexusMethod(DateTimeResolver, 'date');

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('name');
    t.nullable.string('image');
    t.string('email');
    t.nullable.list.field('posts', {
      type: Post,
      async resolve(parent, _args, context) {
        return await context.prisma.user
          .findUnique({
            where: {
              id: parent.id as any,
            },
          })
          .posts();
      },
    });
  },
});

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('getAllUsers', {
      type: 'User',
      resolve(_parent, _args, context) {
        return context.prisma.user.findMany();
      },
    });
  },
});
