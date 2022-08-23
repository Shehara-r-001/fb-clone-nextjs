export const resolvers = {
  Query: {
    posts: async (
      _parent: any,
      _args: any,
      context: { prisma: { post: { findMany: () => any } } }
    ) => await context.prisma.post.findMany(),
  },
};
