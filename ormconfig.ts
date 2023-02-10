const { DataSource } = require("typeorm");

require('dotenv').config();
for (const envName of Object.keys(process.env)) {
  process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
}

const connectionSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "dashboard",
  entities: ['./src/models/**/*.entity{.js,.ts}'],
  migrations: ['./src/migrations/*.js'],
});

module.exports = {
  connectionSource,
}