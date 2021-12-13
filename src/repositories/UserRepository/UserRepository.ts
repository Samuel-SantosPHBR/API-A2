import { User } from "../../entities/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository{
    
    save(user: User): void {
        throw new Error("Method not implemented.");
    }

    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

}