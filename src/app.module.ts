import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from '../sequelize.config';

@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig)],
})
export class AppModule {}
