exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tags')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        { id: 1, tag: 'Something bad 1' },
        { id: 2, tag: 'Something bad 2' },
        { id: 3, tag: 'Something bad 3' },
      ]);
    });
};
