exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cities')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        { id: 1, state: 'Oregon', city: 'Portland' },
        { id: 2, state: 'Washington', city: 'Seattle' },
        { id: 3, state: 'California', city: 'Oakland' },
      ]);
    });
};
