import {
  asNexusMethod,
  extendType,
  nonNull,
  objectType,
  stringArg,
} from 'nexus';
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
      async resolve(_parent, _args, context) {
        return await context.prisma.user.findMany();
      },
    });

    t.field('getUserByEmail', {
      type: 'User',
      args: {
        email: nonNull(stringArg()),
      },
      async resolve(_parent, args, context) {
        return await context.prisma.user.findUnique({
          where: {
            email: args.email,
          },
        });
      },
    });
  },
});

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUser', {
      type: 'User',
      args: {
        id: stringArg(),
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        image: stringArg(),
      },
      resolve(_parent, args, context) {
        return context.prisma.user.create({
          data: {
            id: args.id as any,
            name: args.name as any,
            email: args.email as any,
            image: args.image as any,
          },
        });
      },
    });
  },
});
