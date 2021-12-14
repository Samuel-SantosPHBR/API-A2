import { Request, Response } from "express";
import { IUser } from "../../repositories/UserRepository/IUserRepository";
import { CreateUseUseCase } from "./CreateUserUseCase";

export class CreateUserController {

    constructor(
        private useCase: CreateUseUseCase
    ){}

    async handle(request: Request, response: Response) {
        const user: IUser = request.body;

        this.useCase.execute(user);

        response.status(200).json({created: true});
    }
}