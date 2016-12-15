const knex = require('./connection');
module.exports = {
  oneUser: function(id){
    return knex('user')
    .where('user.id',id)
    .first();
  }
};
