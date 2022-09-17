import { DataSource } from 'typeorm';
import dotenv from 'dotenv'

dotenv.config()

const db = new DataSource({
  type: 'postgres',
  url: process.env.PG_URL,
  synchronize: true,
  logging: false,
  entities: [
    'dist/entities/**/*'
  ]
})

db.initialize()

export default db