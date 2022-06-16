import crypto from "crypto";

export type Coordinates = { lat: number; lng: number };

type RouteProps = {
  id?: string;
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points?: Coordinates[];
};

export class Route {
  id: string;
  title: string;
  startPosition: Coordinates;
  endPosition: Coordinates;
  points: Coordinates[];

  constructor(params: RouteProps) {
    // Required
    this.title = params.title;
    this.endPosition = params.endPosition;
    this.startPosition = params.startPosition;

    // Optional, set defaults
    this.id = params.id || crypto.randomUUID();
    this.points = params.points || [];
  }

  public updateTitle(title: string) {
    this.title = title.toUpperCase();
  }

  public toJSON() {
    return {
      id: this.id,
      title: this.title,
      endPosition: this.endPosition,
      startPosition: this.startPosition,
      points: this.points,
    };
  }
}
