"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var CreateClientController_1 = require("./modules/clients/useCases/createClient/CreateClientController");
var routes = (0, express_1.Router)();
exports.routes = routes;
var createClienteController = new CreateClientController_1.CreateClientController();
routes.post("/client/", createClienteController.handle);
//# sourceMappingURL=routes.js.map