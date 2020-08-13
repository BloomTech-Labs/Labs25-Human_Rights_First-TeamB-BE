
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {id: 1, event_id: 1, url: 'somewhere@somewhere.net'},
        {id: 2, event_id: 2, url: 'somewhere2@somewhere.net'},
        {id: 3, event_id: 3, url: 'somewhere3@somewhere.net'}
      ]);
    });
};
