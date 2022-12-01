import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {

  async execute({ username, password }: IAuthenticateDeliveryman) {

    // Verify if user has already registered
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    });

    if (!deliveryman) {
      throw new Error("Username or password invalid!");
    }

    // Verify if password matches username
    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    // Generate token
    const token = sign({ username }, "4d5f5ffc6d5b80bcaffe81231a7199d271bb4c92", {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return token

  }
}