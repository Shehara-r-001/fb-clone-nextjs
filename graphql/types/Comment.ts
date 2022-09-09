import { asNexusMethod, objectType } from 'nexus';
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
