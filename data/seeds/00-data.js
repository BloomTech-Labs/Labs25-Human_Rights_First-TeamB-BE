exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
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
