
exports.seed = function(knex, Promise) {
  return knex.raw("DELETE FROM beer_stein; ALTER SEQUENCE beer_stein_id_seq RESTART WITH 1").then(function() {
  const steins = [{
      origin_country: 'Germany',
      material: 'Silver',
      image_url: 'http://www.engravingshop.com/files/983289/uploaded/16-oz-stainless-steel-tankard.jpg',
      size: 'M',
      user_id: 1
    },
    {
      origin_country: 'Finland',
      material: 'Wood',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MaryRose-wooden_tankard1.JPG',
      size: 'M',
      user_id: 1
    },
    {
      origin_country: 'United States',
      material: 'Whale Bone',
      image_url: 'https://p2.liveauctioneers.com/686/16222/5397036_1_l.jpg',
      size: 'L',
      user_id: 2
    },
    {
      origin_country: 'Mongolia',
      material: 'Jade',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2009-0528-MN-IA31-GiantBeerStein.jpg/175px-2009-0528-MN-IA31-GiantBeerStein.jpg',
      size: 'XL',
      user_id: 2
    }]
   return knex('beer_stein').insert(steins)
 })
};
