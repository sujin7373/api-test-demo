import mysql from 'mysql2/promise';

export const db = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sujin0703!',
  port: 3306,
  database: 'elice', // DBeaver에 있는 실제 DB명
  waitForConnections: true,
  connectionLimit: 10,
});
