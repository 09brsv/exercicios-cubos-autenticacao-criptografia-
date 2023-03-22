import * as create from './Create';
import * as login from './Login';

export const usersController = {
  ...create,
  ...login,
}