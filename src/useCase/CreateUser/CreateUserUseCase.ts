import { IUser, IUserRepository } from "../../repositories/UserRepository/IUserRepository";

export class CreateUseUseCase {

    constructor(
        private repository: IUserRepository
    ){}

    async execute(user: IUser) {
        const checkUser = await this.repository.findByEmail({email: user.email,password:user.password});

        if(checkUser){
            return new Error('User already Exists!');
        }

        const newUser = await this.repository.save(user);

        return newUser;
    }
}