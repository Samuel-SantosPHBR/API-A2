import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
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

}