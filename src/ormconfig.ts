import { ConnectionOptions } from 'typeorm';

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'birthdayboy',
  password: '12345!!!',
  database: 'birthdayapp',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts, .js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default ormconfig;
