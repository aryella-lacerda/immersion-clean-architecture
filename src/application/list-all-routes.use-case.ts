import { Coordinates } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class ListAllRoutesUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(): Promise<ListAllRoutesOutput> {
    const allRoutes = await this.routeRepo.findAll();
    const allJSON = allRoutes.map((route) => route.toJSON());
    return allJSON;
  }
}

type ListAllRoutesOutput = Array<{
  id: string;
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points?: Coordinates[];
}>;
