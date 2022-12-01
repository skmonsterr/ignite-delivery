import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/AuthenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDelivarymanController } from "./modules/deliveryman/useCases/createDelivaryman/CreateDelivarymanController";

const routes = Router();

const createClienteController = new CreateClientController();
const createDeliveryController = new CreateDelivarymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client/", createClienteController.handle);
routes.post("/deliveryman/", createDeliveryController.handle);

export { routes };