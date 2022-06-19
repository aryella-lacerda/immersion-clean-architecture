import { Coordinates, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class CreateRouteUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = Route.create(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}

type CreateRouteInput = {
  id: string;
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points?: Coordinates[];
};

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points?: Coordinates[];
};
