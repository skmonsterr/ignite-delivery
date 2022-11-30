import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router();

const createClienteController = new CreateClientController();

routes.post("/client/", createClienteController.handle)

export { routes };