import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'varchar', length: '36', unique: true })
    username: string;

    @Column({ type: 'varchar', length: 256, unique: true })
    email: string;

    @Column({ type: 'int' })
    age: number;

    @Column({ type: 'varchar', length: 36 })
    password: string;
}