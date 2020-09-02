const file = require('../incidents.json');
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('data')
    .truncate()
    .then(function () {
      // Inserts seed entries
      file.data.forEach((item) => {
        let count = 0;
        return knex('data').insert([
          {
            id: (count += 1),
            eventId: item.id,
            event: item,
          },
        ]);
      });
    });
};
// console.log(file.data);
