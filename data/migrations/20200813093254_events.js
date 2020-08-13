exports.up = function (knex) {
  return knex.schema
    .createTable('cities', (table) => {
      table.increments('id');
      table.string('state').notNullable();
      table.string('city').notNullable();
    })
    .createTable('events', (table) => {
      table.increments('id');
      table.string('title').notNullable().unique();
      table.text('details');
      table.date('event_date');
    })
    .createTable('geocode', (table) => {
      table.increments('id');
      table
        .integer('city_id')
        .notNullable()
        .references('id')
        .inTable('cities')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('event_id')
        .notNullable()
        .references('id')
        .inTable('events')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.decimal('lat', 10, 7).notNullable();
      table.decimal('long', 10, 7).notNullable();
    })
    .createTable('links', (table) => {
      table.increments('id');
      table
        .integer('event_id')
        .references('id')
        .inTable('events')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.string('url').notNullable().unique();
    })
    .createTable('tags', (table) => {
      table.increments('id');
      table.string('tag').notNullable();
    })
    .createTable('event_tags', (table) => {
      table
        .integer('event_id')
        .notNullable()
        .references('id')
        .inTable('events')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('tag_id')
        .notNullable()
        .references('id')
        .inTable('tags')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.primary(['event_id', 'tag_id']);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tags')
    .dropTableIfExists('event_tags')
    .dropTableIfExists('links')
    .dropTableIfExists('geocode')
    .dropTableIfExists('events')
    .dropTableIfExists('cities');
};
