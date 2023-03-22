/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";
import { pool } from "../../services";
import { ApiError } from "../../utils/ApiErrors";


const { PASSWORD } = process.env;

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new ApiError("Não autorizado", StatusCodes.UNAUTHORIZED);
  }
  
  const token = authorization.split(" ")[1];

  try {
    const { id } = verify(<string>token, <string>PASSWORD) as Partial<IUserParams>;
    const { rows } = await pool.query(`select * from usuarios where id = $1`, [
      id,
    ]);
  
    if (!rows[0])
      throw new ApiError(
        "Não foi possível encontrar o usuário",
        StatusCodes.BAD_REQUEST
      );
  
    req.user = {
      id: rows[0].id,
      nome: rows[0].nome,
    };
  
    next();
    
  } catch (error) {
    throw new ApiError("O token usado é inválido", StatusCodes.BAD_REQUEST);
  }
};
