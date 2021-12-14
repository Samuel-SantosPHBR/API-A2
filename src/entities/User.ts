import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../repositories/UserRepository/IUserRepository";

@Entity('user')
export class User{

    @PrimaryGeneratedColumn('increment')
    id:             number;

    @Column()
    name:           string;

    @Column()
    email:           string;

    @Column()
    password:    string;

    @Column()
    anniversary:    Date;

    @Column()
    phone:    string;

    @CreateDateColumn()
    created_at:     Date;

    constructor({name, email, password, anniversary, phone}: IUser){
        this.name           = name
        this.email          = email
        this.password       = password
        this.anniversary    = anniversary
        this.phone          = phone
    }
}