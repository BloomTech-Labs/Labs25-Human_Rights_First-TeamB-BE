
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('event_tags').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('event_tags').insert([
        {event_id: 1, tag_id: 1},
        {event_id: 1, tag_id: 2},
        {event_id: 2, tag_id: 1},
        {event_id: 2, tag_id: 3},
        {event_id: 3, tag_id: 1},
        {event_id: 3, tag_id: 2},
        {event_id: 3, tag_id: 3},
      ]);
    });
};
