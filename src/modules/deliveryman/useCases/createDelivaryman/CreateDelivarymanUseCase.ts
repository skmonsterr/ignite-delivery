import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDelivaryman {
  username: string;
  password: string;
}

export class CreateDelivarymanUseCase {

  async execute({ username, password }: ICreateDelivaryman) {
    // Validate existing deliveryman
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    });

    if (deliverymanExist) {
      throw new Error("Deliveryman already exists");
    }

    // Crypt password
    const hashPassword = await hash(password, 10);

    // Save deliveryman
    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      }
    });

    return deliveryman;
  }
}