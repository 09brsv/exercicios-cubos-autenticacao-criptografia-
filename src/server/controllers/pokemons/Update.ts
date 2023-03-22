import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pool } from "../../shared/services";
import { ApiError } from "../../shared/utils/ApiErrors";
import { validation } from "../../shared/utils/FieldsValidation";

export const updateName = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { apelido } = req.body;

  const hasIncorrectField = validation({ apelido });

  if (hasIncorrectField) {
    const message = `Campo(s) que você precisa preencher: ${hasIncorrectField.join(
      ", "
    )}`;
    throw new ApiError(message, StatusCodes.BAD_REQUEST);
  }

  const { rows } = await pool.query(
    `update pokemons set apelido = $1 where id = $2 returning *`,
    [apelido, id]
  );

  if (!rows[0])
    throw new ApiError(
      "Não foi possível encontrar o pokemon",
      StatusCodes.BAD_REQUEST
    );

  res.status(StatusCodes.NO_CONTENT).json();
};
