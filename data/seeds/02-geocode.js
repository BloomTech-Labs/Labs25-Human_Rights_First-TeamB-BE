
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geocode').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('geocode').insert([
        {id: 1, city_id: 1, event_id: 1, lat: 45.523064, long: -122.676483},
        {id: 2, city_id: 2, event_id: 2, lat: 47.608013, long: -122.335167},
        {id: 3, city_id: 3, event_id: 3, lat: 37.804363, long: -122.271111}
      ]);
    });
};
