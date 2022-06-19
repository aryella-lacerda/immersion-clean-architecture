import { RouteRepositoryInterface } from "@domain";
import { Route } from "@domain/route.entity";
import { Repository } from "typeorm";

export class RouteTypeORMRepository implements RouteRepositoryInterface {
  constructor(private ormRepo: Repository<Route>) {}

  async insert(route: Route): Promise<void> {
    await this.ormRepo.save(route);
  }

  findAll(): Promise<Route[]> {
    return this.ormRepo.find();
  }
}
