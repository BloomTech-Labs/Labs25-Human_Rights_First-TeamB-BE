const file = require('../incidents.json')
exports.seed = function (knex) {
  // Deletes ALL existing entries
  let count = 0;
  return knex('table_name')
    .truncate()
    .then(function () {
      // Inserts seed entries
      file.data.forEach(item => {
      return knex('table_name').insert([
        {
          id: count += 1,
          eventId: item.id,
          event: item
        }
        ])
      });
    });
};
console.log(file)