export class CreateRouteDto {
  id: string;
  title: string;
  startPosition: { lat: number; lng: number };
  endPosition: { lat: number; lng: number };
}
