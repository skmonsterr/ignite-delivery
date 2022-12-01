import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/AuthenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router();

const createClienteController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post("/client/", createClienteController.handle);
routes.post("/authenticate", authenticateClientController.handle);

export { routes };