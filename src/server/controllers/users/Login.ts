/* eslint-disable @typescript-eslint/no-unused-vars */
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pool } from "../../shared/services";
import { ApiError } from "../../shared/utils/ApiErrors";
import { validation } from "../../shared/utils/FieldsValidation";

const { PASSWORD } = process.env;

export const login = async (
  req: Request<unknown, unknown, IUserBody>,
  res: Response
) => {
  const { email, senha } = req.body;

  const hasIncorrectField = validation({ email, senha });

  if (hasIncorrectField) {
    const message = `Campo(s) que você precisa preencher: ${hasIncorrectField.join(
      ", "
    )}`;
    throw new ApiError(message, StatusCodes.BAD_REQUEST);
  }

  const { rows } = await pool.query("select * from usuarios where email = $1", [
    email,
  ]);

  if (!rows[0])
    throw new ApiError(
      "O email ou a senha está incorreta",
      StatusCodes.UNAUTHORIZED
    );

  const isCorrectPassword = await compare(senha.toString(), rows[0].senha);

  if (isCorrectPassword) {
    const token = sign(
      { id: rows[0].id, nome: rows[0].nome },
      <string>PASSWORD,
      {
        expiresIn: "8h",
      }
    );
    const { senha: _, ...usuario } = rows[0];

    return res.json({ usuario, token });
  }

  throw new ApiError(
    "O email ou a senha está incorreta",
    StatusCodes.UNAUTHORIZED
  );
};
