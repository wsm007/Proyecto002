import dotenv from 'dotenv';
dotenv.config();

const varEntorno = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  apikey: process.env.API_KEY,
}

export default varEntorno;