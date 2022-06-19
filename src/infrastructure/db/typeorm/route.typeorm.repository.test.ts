import { RouteRepositoryInterface } from "@infrastructure/api/dist/domain";
import { DataSource } from "typeorm";
import { Route } from "../../../domain/route.entity";
import { RouteSchema } from "./route.schema";
import { RouteTypeORMRepository } from "./route.typeorm.repository";

describe("RouteTypeORMRepository tests", () => {
  // @ts-ignore
  let repo: RouteRepositoryInterface = {};

  beforeEach(async () => {
    const dataSource = new DataSource({
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [RouteSchema],
    });

    await dataSource.initialize();
    const ormRepo = dataSource.getRepository(Route);
    repo = new RouteTypeORMRepository(ormRepo);
  });

  it("should contain no routes when instantiated", async () => {
    // Act
    const allRoutes = await repo.findAll();

    // Assert
    expect(allRoutes).toStrictEqual([]);
  });

  it("should insert a new route when `insert` method is called", async () => {
    const route = Route.create({
      title: "Title",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: [{ lat: 5, lng: 6 }],
    });

    // Act
    await repo.insert(route);
    const allRoutes = await repo.findAll();

    // Assert
    expect(allRoutes).toStrictEqual([route]);
  });

  it("should list all routes when `findAll` method is called", async () => {
    const params = {
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: [{ lat: 5, lng: 6 }],
    };

    const route1 = Route.create({ title: "Route 1", ...params });
    const route2 = Route.create({ title: "Route 2", ...params });

    // Act
    await repo.insert(route1);
    await repo.insert(route2);
    const allRoutes = await repo.findAll();

    // Assert
    expect(allRoutes).toStrictEqual([route1, route2]);
  });
});
