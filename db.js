import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'shortline.proxy.rlwy.net',
  port: 51874,
  user: 'root',
  password: 'aayGMJbzdXDlNDzawoNhbRutKdJFZWwK',
  database: 'railway',
});

export default pool;
