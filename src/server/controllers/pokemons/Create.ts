import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pool } from "../../shared/services";
import { ApiError } from "../../shared/utils/ApiErrors";
import { validation } from "../../shared/utils/FieldsValidation";

export const create = async (req: Request, res: Response) => {
  const { nome, habilidades, imagem, apelido } = req.body as IPokemonBody;
  const { id } = req.user;

  const hasIncorrectField = validation({ nome, habilidades, imagem, apelido });

  if (hasIncorrectField) {
    const message = `Campo(s) que você precisa preencher: ${hasIncorrectField.join(
      ", "
    )}`;
    throw new ApiError(message, StatusCodes.BAD_REQUEST);
  }

  await pool.query(
    `insert into pokemons (usuario_id, nome, habilidades, imagem, apelido) values($1, $2, $3, $4, $5)`,
    [id, nome, habilidades, imagem, apelido]
  );

  res.status(StatusCodes.CREATED).json("Pokemon criado");
};
