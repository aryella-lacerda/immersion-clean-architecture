import { RouteInMemoryRepository } from "../infrastructure/db/in-memory";
import { CreateRouteUseCase } from "./create-route.use-case";

describe("CreateRouteUseCase tests", () => {
  it("should return a JSON route object", async () => {
    // Arrange
    const routeRepo = new RouteInMemoryRepository();
    const createRoute = new CreateRouteUseCase(routeRepo);
    const routeParams = {
      id: "testid",
      title: "Title",
      endPosition: { lat: 3, lng: 4 },
      startPosition: { lat: 1, lng: 2 },
    };

    // Act
    const route = await createRoute.execute(routeParams);

    // Assert
    expect(route).toStrictEqual({
      ...routeParams,
      points: [],
      id: expect.any(String),
    });
  });

  it("should save the new route", async () => {
    // Arrange
    const routeRepo = new RouteInMemoryRepository();
    const createRoute = new CreateRouteUseCase(routeRepo);
    const routeParams = {
      id: "testid",
      title: "Title",
      endPosition: { lat: 3, lng: 4 },
      startPosition: { lat: 1, lng: 2 },
    };

    // Act
    await createRoute.execute(routeParams);

    // Assert
    expect(routeRepo.items).toHaveLength(1);
  });
});
