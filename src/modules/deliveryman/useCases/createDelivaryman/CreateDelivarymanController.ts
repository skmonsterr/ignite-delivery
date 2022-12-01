import { Request, Response } from "express";
import { CreateDelivarymanUseCase } from "./CreateDelivarymanUseCase";

export class CreateDelivarymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDelivarymanUseCase = new CreateDelivarymanUseCase();
    const result = await createDelivarymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}