import { Request, Response } from "express";
import { IUser } from "../../interfaces/UserInterfaces/IUserInterfaces";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private useCase: CreateUserUseCase
    ){}

    async handle(request: Request, response: Response) {
        const user: IUser = request.body;

        const newUser = await this.useCase.execute(user);

        if(newUser instanceof Error){
            return response.status(400).json({message: 'User already Exist'});
        }

        return response.status(200).json({created: newUser});
    }
}