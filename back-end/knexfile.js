/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://xloucfnj:zq9mjCiNvQpz6Ukfuyft--ps6R6tIYc8@bubble.db.elephantsql.com/xloucfnj",
  DATABASE_URL_DEVELOPMENT = "postgres://botgcbbs:8LBVrYGQ-nTTivwcFU8F7q7ipDvyAui-@bubble.db.elephantsql.com/botgcbbs",
  DATABASE_URL_TEST = "postgres://mlfbqkdd:NnSiDeYqsA0239nDBG-9iuEzLl0H9RL3@bubble.db.elephantsql.com/mlfbqkdd",
  DATABASE_URL_PREVIEW = "postgres://hfizpzsw:rl7SdBbMZjM2UxM4TLfqRHjL2H8IP3In@bubble.db.elephantsql.com/hfizpzsw",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
