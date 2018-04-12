
/**
 * @param the best database known to mankind
 */
const pg = require('pg')
const fake = require('faker')




var config = {
  user: 'mrmac', // env var: PGUSER
  database: 'shamazon_main_description', // env var: PGDATABASE
  password: null, // env var: PGPASSWORD
  port: 5000, // env var: PGPORT
}

const pool = new pg.Pool(config)

/*
taken from postgres docs to query with async/await
*/
async function query (q) {
  const client = await pool.connect()
  let res
  try {
    await client.query('BEGIN')
    try {
      res = await client.query(q)
      await client.query('COMMIT')
    } catch (err) {
      await client.query('ROLLBACK')
      throw err
    }
  } finally {
    client.release()
  }
  return res
}

async function main () {
  try {
    const { rows } = await query('SELECT * from Description_Electronicstest31')
    console.log(JSON.stringify(rows))
  } catch (err) {
    console.log('Database ' + err)
  }
}

main()


// create 150 objects
// each object has

// 1) Title
// 2) Brand Name
// 3) a shipping price that is either 0, 0, 0, or a random number from $399 - 999 
// 4) IsCustomerPrimeMember = random bool
// 5) Inventory Amount random integer from 0-250
// 6) Random number of descriptions starting at 0-5
// 7) 
// Random number of 5*
// Random number of 4*
// Random number of 3*
// Random number of 2*
// Random number of 1*


// Total Review Stars, Review Total put later