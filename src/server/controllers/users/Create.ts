import { Request, Response } from "express";
import { hash } from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { pool } from "../../shared/services";
import { validation } from "../../shared/utils/FieldsValidation";
import { ApiError } from "../../shared/utils/ApiErrors";

export const create = async (
  req: Request<unknown, unknown, IUserBody>,
  res: Response
) => {
  const { nome, email, senha } = req.body;

  const hasIncorrectField = validation({ nome, email, senha });

  if (hasIncorrectField) {
    const message = `Campo(s) que você precisa preencher: ${hasIncorrectField.join(
      ", "
    )}`;
    throw new ApiError(message, StatusCodes.BAD_REQUEST);
  }

  const passwordEncoded = await hash(senha.toString(), 10);

  const { rows } = await pool.query(
    `insert into usuarios(nome,email,senha) values($1, $2, $3) returning *`,
    [nome, email, passwordEncoded]
  );

  const { senha: _, ...usuarioRetorno } = rows[0];

  return res.status(StatusCodes.CREATED).json(usuarioRetorno);
};
