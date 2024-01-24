import prismaClient from "../prisma";

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },

      include: {
        user: true,
      },
    });

    return message;
  }
}

export { CreateMessageService };
