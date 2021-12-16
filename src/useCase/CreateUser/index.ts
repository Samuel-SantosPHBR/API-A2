import { CreateUserController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"
const createUserController = new CreateUserController(new CreateUserUseCase())


export { createUserController }