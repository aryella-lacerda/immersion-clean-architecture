import { Route } from "@domain/route.entity";
import { DataSource } from "typeorm";
import { RouteSchema } from "./route.schema";

describe("Route schema tests", () => {
  it("should create route schema", async () => {
    const dataSource = new DataSource({
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [RouteSchema],
    });

    await dataSource.initialize();

    const route = Route.create({
      title: "test",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: [{ lat: 5, lng: 6 }],
    });

    const routeRepo = dataSource.getRepository(Route);
    await routeRepo.save(route);

    const routeFound = await routeRepo.findOneBy({
      id: route.id,
    });

    expect(routeFound?.toJSON()).toStrictEqual(route.toJSON());
  });
});
