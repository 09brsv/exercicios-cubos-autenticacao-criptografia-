import { Router } from "express";
import { usersController } from "../controllers";
import { pokemonControllers } from "../controllers/pokemons";
import { authMiddleware } from "../shared/middlewares";

const router = Router();


router.post('/usuarios', usersController.create);
router.post('/login', usersController.login);

router.use(authMiddleware.auth);


router.get('/pokemons', pokemonControllers.getAll);
router.get('/pokemons/:id', pokemonControllers.getById);
router.post('/pokemons', pokemonControllers.create);
router.patch('/pokemons/:id', pokemonControllers.updateName);
router.delete('/pokemons/:id', pokemonControllers.deleteById);




export { router };