import { User } from "../../entities/User";

export interface IUser{
    name: string;
    email: string;
    password: string;
}

export interface IUserRepository {
    save(user: IUser): void;
    findByEmail(email: string): Promise<User>;
}