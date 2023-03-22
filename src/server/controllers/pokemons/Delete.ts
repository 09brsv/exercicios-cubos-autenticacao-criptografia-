import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pool } from "../../shared/services";
import { ApiError } from "../../shared/utils/ApiErrors";

export const deleteById = async (req: Request<IUserParams>, res: Response) => {
  const { id } = req.params;

  const { rows } = await pool.query(
    `delete from pokemons where id = $1 returning *`,
    [id]
  );

  if (!rows[0])
    throw new ApiError(
      "Não foi possível encontrar o pokemon",
      StatusCodes.BAD_REQUEST
    );

  res.status(StatusCodes.NO_CONTENT).json("Pokemon excluído");
};
