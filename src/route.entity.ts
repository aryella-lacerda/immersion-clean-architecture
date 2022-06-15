type Coordinates = { lat: number; lng: number };

type RouteProps {
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points?: Coordinates[];
}

class Route {
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points: Coordinates[];

  constructor(public params: RouteProps) {
    this.title = params.title;
    this.endPosition = params.endPosition;
    this.startPosition = params.startPosition;
    this.points = params.points || [];
  }
}

const route = new Route({
  title: "Test",
  startPosition: { lat: 12, lng: 34 },
  endPosition: { lat: 12, lng: 34 },
});

route.title = ''