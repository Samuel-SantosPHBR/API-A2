import { User } from "../../entities/User";

export interface IUser{
    name:           string;
    email:          string;
    password:       string;
    anniversary:    Date;
    phone:          string;
}

export interface IUserLogin {
    email:          string;
    password:       string;
}

export interface IUserRepository {
    save(user: IUser);
    findByEmail(user: IUserLogin): Promise<User>;
}