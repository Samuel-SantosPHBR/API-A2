import { User } from "../../entities/User";
import { IUser, IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository{

    save(user: IUser): User {
        throw new Error("Method not implemented.");
    }

    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

}