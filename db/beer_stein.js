const knex = require('./connection');
module.exports = {
  getSteinById: function(id){
    return knex('beer_stein').where('user_id', id)
  }
};
