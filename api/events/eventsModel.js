const db = require('../db-config');

module.exports = {
  get,
  getByID,
  insert,
  update,
};

function get() {
  return db('tasks');
}

function getByID(id) {
  return db('projects').where({ id }).first;
}

function insert(task) {
  return db('tasks')
    .insert(task)
    .then((newTask) => {
      return getByID(newTask[0]);
    });
}
function update(changes, id) {
  return db('student as s')
    .select('s.forename as FirstName', 's.surname as LastName')
    .where('s.id', id)
    .update(changes);
}
