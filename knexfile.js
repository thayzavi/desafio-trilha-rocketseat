module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './src/database/dailyDiet.db',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './src/database/migrations',
      },
    },
  };
  