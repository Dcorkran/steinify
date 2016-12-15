
exports.seed = function(knex, Promise) {
  return knex.raw("DELETE FROM \"user\"; ALTER SEQUENCE user_id_seq RESTART WITH 1").then(function (){
    const users = [{
      email: 'kevin.erick01@gmail.com',
      password: 'ugly_duckling'
    },
    {
      email: 'dillon@gmail.com',
      password: 'steinman'
    }]
    return knex('user').insert(users)
  })
};
