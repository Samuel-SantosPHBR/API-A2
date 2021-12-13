import { IUserRepository } from "../../repositories/UserRepository/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository;
    ){}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadExists = await this.userRepository.findByEmail(data.email);

        if(userAlreadExists) {
            return new Error('User Exists');
        }
    }
}