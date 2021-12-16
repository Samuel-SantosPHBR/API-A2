import { IUserLogin } from "../../interfaces/UserInterfaces/IUserInterfaces";
import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import md5 from 'md5';
export class LoginUserUseCase {

    async execute(user: IUserLogin) {
        const repo = getRepository(User);

        const checkUser = await repo.findOne({
            email: user.email,
            password: md5(user.password)
        });

        if(!checkUser){
            return new Error('Not User Find!');
        }
        
       return checkUser;
    }
}