import axios from "axios";
import prismaClient from "../prisma";
import { sign } from "jsonwebtoken";
import "dotenv/config";

interface AccessTokenResponse {
  access_token: string;
}

interface UserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const { data: accessTokenResponse } = await axios.post<AccessTokenResponse>(
      url,
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: "application/json",
        },
      }
    );

    const response = await axios.get<UserResponse>(
      "https://api.github.com/user",
      {
        headers: {
          Authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      }
    );

    const { login, id, avatar_url, name } = response.data;

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id,
      },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_id: id,
          login,
          avatar_url,
          name,
        },
      });
    }
    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url, // Corrigindo a propriedade aqui
          id: user.id,
        },
      },
      process.env.JWT_SECRET || "", // Adicionando uma verificação para a existência da variável de ambiente
      {
        subject: user.id.toString(), // Certificando-se de que o ID seja uma string
        expiresIn: "1d",
      }
    );
    return { token, user };
  }
}

export { AuthenticateUserService };
