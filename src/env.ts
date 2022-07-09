import { config } from 'dotenv';
import * as path from 'path';

config({
  path: path.join(process.cwd(), `${'dev'}.env`),
});

export const ENV: any = {
  postgreDB: {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: +process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,

    synchronize: process.env.TYPEORM_SYNCHRONIZE,
    logging: process.env.TYPEORM_LOGGING,
    autoLoadEntities: process.env.TYPEROM_AUTOLOAD_ENTITIES,
  },
};

export const ormConfig: any = {
  type: ENV.postgreDB.type,
  host: ENV.postgreDB.host,
  port: ENV.postgreDB.port,
  username: ENV.postgreDB.username,
  password: ENV.postgreDB.password,
  database: ENV.postgreDB.database,

  synchronize: toBool(ENV.postgreDB.synchronize),
  logging: toBool(ENV.postgreDB.logging),
  autoLoadEntities: toBool(ENV.postgreDB.autoLoadEntities),
  entities: process.env.TYPEORM_ENTITIES,

  migrations: process.env.TYPEORM_MIGRATIONS,
  migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
};

export function toBool(value: string): boolean {
  return value === 'true';
}
