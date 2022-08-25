import { objectType } from 'nexus';

export const Like = objectType({
  name: 'Like',
  definition(t) {
    t.string('id');
  },
});
