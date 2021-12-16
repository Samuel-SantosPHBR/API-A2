import { LoginUserController } from "./LoginUserController"
import { LoginUserUseCase } from "./LoginUserUseCase"
const loginUserController = new LoginUserController(new LoginUserUseCase())


export { loginUserController }