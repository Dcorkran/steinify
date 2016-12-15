
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer_stein', (table)=>{
    table.increments();
    table.text('origin_country').notNullable();
    table.text('material');
    table.text('image_url').notNullable();
    table.text('size');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beer_stein');
};
