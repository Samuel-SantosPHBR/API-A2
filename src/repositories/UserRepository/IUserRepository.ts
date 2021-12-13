import { User } from "../../entities/User";

export interface IUserRepository {
    save(user: User): void;
    findByEmail(email: string): Promise<User>;
}