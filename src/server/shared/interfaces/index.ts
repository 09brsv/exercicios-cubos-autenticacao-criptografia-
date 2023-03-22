/* eslint-disable @typescript-eslint/no-unused-vars */
interface IUserBody {
  nome: string;
  email: string;
  senha: string;
}

interface IUserParams {
  id: number;
}

interface IPokemonBody {
  nome : string;
  habilidades : string;
  imagem : string;
  apelido : string;
}