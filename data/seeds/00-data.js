exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('data')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('data').insert([
        {
          id: 1,
          eventId: 'rowValue1',
          event: 'json here',
        },
        {
          id: 2,
          eventId: 'rowValue2',
          event: 'json here',
        },
        {
          id: 3,
          eventId: 'rowValue3',
          event: 'json here',
        },
      ]);
    });
};
