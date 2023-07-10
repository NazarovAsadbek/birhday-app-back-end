import { ConnectionOptions } from 'typeorm';

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'birthdayboy',
  password: '12345!!!',
  database: 'birthdayapp',
};

export default ormconfig;
