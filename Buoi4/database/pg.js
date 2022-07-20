const { Pool, Client } = require('pg');
// const connectionString = `
// postgresql://username:password@
// 192.168.11.68:5432/default_database`
const connectionString=`postgres://postgres:postgrespw@localhost:49153`;
const client = new Client({
  connectionString,
})
client.connect();
module.exports = client
