import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { RouteInMemoryRepository } from '@infrastructure/db/in-memory';
import { CreateRouteUseCase, ListAllRoutesUseCase } from '@application';
import { RouteRepositoryInterface } from '@domain';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import {
  RouteSchema,
  RouteTypeORMRepository,
} from '@infrastructure/db/typeorm';
import { DataSource } from 'typeorm';
import { Route } from '@domain/route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RouteSchema])],
  controllers: [RoutesController],
  providers: [
    RoutesService,
    {
      provide: RouteInMemoryRepository,
      useClass: RouteInMemoryRepository,
    },
    {
      provide: RouteTypeORMRepository,
      useFactory: (datasource: DataSource) => {
        return new RouteTypeORMRepository(datasource.getRepository(Route));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateRouteUseCase,
      useFactory: (routeRepo: RouteRepositoryInterface) => {
        return new CreateRouteUseCase(routeRepo);
      },
      inject: [RouteTypeORMRepository],
    },
    {
      provide: ListAllRoutesUseCase,
      useFactory: (routeRepo: RouteRepositoryInterface) => {
        return new ListAllRoutesUseCase(routeRepo);
      },
      inject: [RouteTypeORMRepository],
    },
  ],
})
export class RoutesModule {}
