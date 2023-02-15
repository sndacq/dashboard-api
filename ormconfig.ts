import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import Account from './src/entities/account.entity';
import Category from './src/entities/category.entity';
import Entry from './src/entities/entry.entity';
import { dashboard1676151451390 } from './migrations/1676151451390-dashboard';

config();

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE } =
  process.env;

 
export default new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: +POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  entities: [Account, Category, Entry],
  migrations: [dashboard1676151451390],
} as DataSourceOptions);

 