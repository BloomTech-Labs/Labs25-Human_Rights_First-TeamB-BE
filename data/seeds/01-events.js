exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('events')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          title: 'First Event',
          details: 'This is the first event',
          event_date: '08/13/2020',
        },
        {
          id: 2,
          title: 'Second Event',
          details: 'This is the second event',
          event_date: '08/13/2020',
        },
        {
          id: 3,
          title: 'Third Event',
          details: 'This is the third event',
          event_date: '08/13/2020',
        },
      ]);
    });
};
