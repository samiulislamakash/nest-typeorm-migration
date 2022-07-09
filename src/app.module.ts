import { User } from './entity/user.entity';
import { Food } from './entity/food.entity';
import { ormConfig } from './env';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: ormConfig.type,
      host: ormConfig.host,
      port: ormConfig.port,
      username: ormConfig.username,
      password: ormConfig.password,
      database: ormConfig.database,
      autoLoadEntities: ormConfig.autoLoadEntities,
      synchronize: ormConfig.synchronize,
      logging: ormConfig.logging,
    }),
    // TypeOrmModule.forFeature([Food, User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
