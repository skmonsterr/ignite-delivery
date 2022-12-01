import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/AuthenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDelivarymanController } from "./modules/deliveryman/useCases/createDelivaryman/CreateDelivarymanController";

const routes = Router();

const createClienteController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryController = new CreateDelivarymanController();

routes.post("/client/", createClienteController.handle);
routes.post("/deliveryman/", createDeliveryController.handle);
routes.post("/authenticate", authenticateClientController.handle);

export { routes };