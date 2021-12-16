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