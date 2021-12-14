import { AbstractRepository, EntityRepository } from "typeorm";
import { User } from "../../entities/User";
import { IUser, IUserLogin, IUserRepository } from "./IUserRepository";

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> implements IUserRepository{

    save(user: IUser) {
        const neUser = new User(user);
        return this.manager.save(neUser)
    }

    findByEmail(user: IUserLogin): Promise<User> {
        return this.repository.findOne(user);
    }

}