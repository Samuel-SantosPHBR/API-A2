import { IUser } from "../../interfaces/UserInterfaces/IUserInterfaces";
import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import md5 from 'md5';
export class CreateUserUseCase {

    async execute(user: IUser) {
        const repo = getRepository(User);

        const checkUser = await repo.findOne({email:user.email});

        if(checkUser){
            return new Error('User already Exists!');
        }
        
        const newUserT = repo.create({...user,password:md5(user.password)});

        await repo.save(newUserT);

        return true;
    }
}