import { Route } from "../../../domain/route.entity";
import { RouteInMemoryRepository } from "./route.in-memory.repository";

describe("RouteInMemoryRepository tests", () => {
  it("should contain no routes when instantiated", () => {
    // Act
    const repo = new RouteInMemoryRepository();

    // Assert
    expect(repo.items).toStrictEqual([]);
  });

  it("should insert a new route when `insert` method is called", async () => {
    // Arrange
    const repo = new RouteInMemoryRepository();
    const route = Route.create({
      title: "Title",
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: [{ lat: 5, lng: 6 }],
    });

    // Act
    await repo.insert(route);

    // Assert
    expect(repo.items).toStrictEqual([route]);
  });

  it("should list all routes when `findAll` method is called", async () => {
    // Arrange
    const repo = new RouteInMemoryRepository();
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

    // Assert
    expect(repo.items).toStrictEqual([route1, route2]);
  });
});
