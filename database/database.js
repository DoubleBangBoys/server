const pg = require('pg');
// const fake = require('faker')

const config = {
  user: 'mrmac', // env var: PGUSER
  database: 'shamazon_main_description', // env var: PGDATABASE
  password: null, // env var: PGPASSWORD
  port: 5000, // env var: PGPORT
};

/*
taken from postgres docs to query with async/await
*/


// const pool = new pg.Pool(config);

// async function query (q) {
//   const client = await pool.connect();
//   let res;
//   try {
//     await client.query('BEGIN');
//     try {
//       res = await client.query(q);
//       await client.query('COMMIT');
//     } catch (err) {
//       await client.query('ROLLBACK');
//       throw err;
//     }
//   } finally {
//     client.release();
//   }
//   return res;
// }

// async function main() {
//   try {
//     const { rows } = await query('SELECT * from Description_Electronicstest31');
//     // console.log(JSON.stringify(rows));
//   } catch (err) {
//     throw err;
//   }
// }

// main();
