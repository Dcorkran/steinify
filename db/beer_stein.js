const knex = require('./connection');
module.exports = {
  getSteinById: function(id){
    return knex('beer_stein').where('user_id', id)
  },
  postStein: function(body, id) {
    return knex('beer_stein').insert({
      origin_country: body.origin_country,
      material: body.material,
      image_url: body.image_url,
      size: body.size,
      user_id: id
    })
  }
};
