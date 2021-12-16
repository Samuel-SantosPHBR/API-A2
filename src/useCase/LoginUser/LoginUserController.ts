import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/UserInterfaces/IUserInterfaces";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {
    constructor(
        private useCase: LoginUserUseCase
    ){}

    async handle(request: Request, response: Response) {
        const user: IUserLogin = request.body;

        const loginUser = await this.useCase.execute(user);

        if(loginUser instanceof Error){
            return response.status(401).json({message: 'Not Autorized'});
        }

        return response.status(200).json(loginUser);
    }
}