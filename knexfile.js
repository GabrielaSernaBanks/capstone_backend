// // Update with your config settings.

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {

//     client: 'mysql',
//     connection: {
//       host: '127.0.0.1',
//       user: 'root',
//       password: "Srotag11!!",
//       database: 'therapists',
//       charset: "utf8"
//   },
// };


require('dotenv').config();

module.exports = {
  client: "mysql",
  connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      database: process.env.DB_LOCAL_DBNAME,
      charset: "utf8"
  }
};
