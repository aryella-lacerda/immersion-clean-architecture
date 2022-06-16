import { Route } from "./route.entity";

describe("Route tests", () => {
  describe("the constructor", () => {
    it("should accept a Route object with all possible parameters in constructor", () => {
      // Arrange
      const params = {
        id: "testid",
        title: "Title",
        startPosition: { lat: 1, lng: 2 },
        endPosition: { lat: 3, lng: 4 },
        points: [{ lat: 5, lng: 6 }],
      };

      // Act
      const route = new Route(params);

      // Assert
      expect(route.id).toBe(params.id);
      expect(route.title).toBe(params.title);
      expect(route.endPosition).toStrictEqual(params.endPosition);
      expect(route.startPosition).toStrictEqual(params.startPosition);
      expect(route.points).toStrictEqual(params.points);
    });

    it("should accept a Route object without optional `points` parameter in constructor", () => {
      // Act
      const route = new Route({
        id: "testid",
        title: "Title",
        startPosition: { lat: 1, lng: 2 },
        endPosition: { lat: 3, lng: 3 },
      });

      // Assert
      expect(route.points).toStrictEqual([]);
    });

    it("should accept a Route object without optional `id` parameter in constructor", () => {
      // Act
      const route = new Route({
        title: "Title",
        startPosition: { lat: 1, lng: 2 },
        endPosition: { lat: 3, lng: 3 },
        points: [{ lat: 4, lng: 4 }],
      });

      // Assert
      expect(route.id).toBeDefined();
    });
  });

  describe("the toJSON method", () => {
    it("should return a complete JSON representation of the Route object", () => {
      // Arrange
      const route = new Route({
        title: "Title",
        startPosition: { lat: 1, lng: 2 },
        endPosition: { lat: 3, lng: 4 },
      });

      // Act
      const json = route.toJSON();

      // Assert
      expect(json.id).toBeDefined();
      expect(json.title).toBeDefined();
      expect(json.endPosition).toBeDefined();
      expect(json.startPosition).toBeDefined();
      expect(json.points).toBeDefined();
    });
  });

  describe("the updateTitle method", () => {
    it("should transform new title to uppercase before updating title", () => {
      // Arrange
      const route = new Route({
        title: "Old Title",
        startPosition: { lat: 1, lng: 2 },
        endPosition: { lat: 3, lng: 4 },
      });
      const newTitle = "New Title";

      // Act
      route.updateTitle(newTitle);

      // Assert
      expect(route.title).toStrictEqual(newTitle.toUpperCase());
    });
  });
});
