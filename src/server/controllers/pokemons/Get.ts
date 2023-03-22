import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { pool } from "../../shared/services";
import { ApiError } from "../../shared/utils/ApiErrors";

const responseDataPokemon = (rows: any[], nome: string | undefined) => {
  return rows.map((pokemon: Record<string, string>) => {
    return {
      id: pokemon.id,
      usuario: nome,
      apelido: pokemon.apelido,
      habilidade: pokemon.habilidades.split(", "),
      imagem: pokemon.imagem,
    };
  });
};

export const getAll = async (req: Request, res: Response) => {
  
  const { rows } = await pool.query(`select * from pokemons`);

  if (!rows[0]) return res.json(rows);

  const response = responseDataPokemon(rows, req.user.nome);

  res.json(response);
};


export const getById = async (req: Request<IUserParams>, res: Response) => {
  const { id } = req.params;

  const { rows } = await pool.query(`select * from pokemons where id = $1`,[id]);

  if (!rows[0])
    throw new ApiError(
      "Não foi possível encontrar o pokemon",
      StatusCodes.BAD_REQUEST
    );

  const response = responseDataPokemon(rows, req.user.nome);

  res.json(response[0]);
};
