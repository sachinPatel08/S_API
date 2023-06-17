import * as Promise from 'bluebird';
import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './src/config/database.config';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from './src/core/constants';
import { SequelizeStorage } from 'umzug';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Umzug } = require('umzug');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

let config;
switch (process.env.NODE_ENV as any) {
  case DEVELOPMENT:
    config = databaseConfig.development;
    break;
  case TEST:
    config = databaseConfig.test;
    break;
  case PRODUCTION:
    config = databaseConfig.production;
    break;
  default:
    config = databaseConfig.development;
}
const sequelize = new Sequelize(config);
const path1 = `${__dirname}+/src/migrations/*.ts`;
const umzug = new Umzug({
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  migrations: {
    glob: `/Users/sachin/Documents/APP/api/src/migrations/20230605120023-Users_table_change.ts`,
  },
  logger: console,
});
const cmdMigrate = async () => {
  console.log(' hii ');
  return await umzug.up();
};

function cmdStatus() {
  const result: any = {};

  return umzug
    .executed()
    .then((executed) => {
      result.executed = executed;
      return umzug.pending();
    })
    .then((pending) => {
      result.pending = pending;
      return result;
    })
    .then(({ executed, pending }) => {
      executed = executed.map((m) => {
        m.name = path.basename(m.file, '.ts');
        return m;
      });
      pending = pending.map((m) => {
        m.name = path.basename(m.file, '.ts');
        return m;
      });

      const current =
        executed.length > 0 ? executed[0].file : '<NO_MIGRATIONS>';
      const status = {
        current: current,
        executed: executed.map((m) => m.file),
        pending: pending.map((m) => m.file),
      };

      console.log(JSON.stringify(status, null, 2));

      return { executed, pending };
    });
}
const cmd = process.argv[2].trim();

let executedCmd;

switch (cmd) {
  case 'up':
  case 'migrate':
    executedCmd = cmdMigrate();
    break;

  default:
    console.log(`invalid cmd: ${cmd}`);
    process.exit(1);
}

executedCmd
  .then((result) => {
    const doneStr = `${cmd.toUpperCase()} DONE`;
    console.log(doneStr);
    console.log(
      '==============================================================================',
    );
  })
  .catch((err) => {
    const errorStr = `${cmd.toUpperCase()} ERROR`;
    console.log(errorStr);
    console.log(
      '==============================================================================',
    );
    console.log(err);
    console.log(
      '==============================================================================',
    );
    throw new Error('Migration failed.');
  })
  .then(() => {
    if (cmd === 'up') {
      return cmdStatus();
    }
    return Promise.resolve();
  })
  .then(() => process.exit(0));
