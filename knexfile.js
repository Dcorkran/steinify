
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgress://localhost/steinify'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
