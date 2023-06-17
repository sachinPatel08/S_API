import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../core/constants';
import { databaseConfig } from './database.config';
import { Post } from '../models/Post/post.entity';
import { Users } from '../models/Users/users.entity';
import { Umzug } from 'umzug';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      //mostly use in all connection
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
      console.log(config);
      const sequelize = new Sequelize(config);
      sequelize.addModels([Post, Users]);
      console.log(sequelize, 'no');
      // await sequelize.sync();
      // if it is commited then table not insert by default
      return sequelize;
    },
  },
];
