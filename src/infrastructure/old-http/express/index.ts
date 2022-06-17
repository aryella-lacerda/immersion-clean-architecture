import express, { Express, Request, Response } from "express";
import { CreateRouteUseCase } from "../../../application/create-route.use-case";
import { ListAllRoutesUseCase } from "../../../application/list-all-routes.use-case";
import { RouteInMemoryRepository } from "../../db/route.in-memory.repository";

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const routeRepo = new RouteInMemoryRepository();

app.get("/routes", async (_, res: Response) => {
  const listRoutes = new ListAllRoutesUseCase(routeRepo);
  const routes = await listRoutes.execute();
  res.status(200).json(routes);
});

app.post("/routes", async (req: Request, res: Response) => {
  const createRoute = new CreateRouteUseCase(routeRepo);
  const route = await createRoute.execute(req.body);
  res.status(201).json(route);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
