import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {

  async execute({ username, password }: IAuthenticateClient) {

    // Verify if user has already registered
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if (!client) {
      throw new Error("Username or password invalid!");
    }

    // Verify if password matches username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    // Generate token
    const token = sign({ username }, "4d5f5ffc6d5b80bcaffe837b1a7199d271bb4c92", {
      subject: client.id,
      expiresIn: "1d"
    })

    return token

  }
}