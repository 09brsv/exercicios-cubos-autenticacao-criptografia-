declare namespace Express {
    export interface Request {
      user: IUserParams & Partial<IUserBody>
    }
  }
