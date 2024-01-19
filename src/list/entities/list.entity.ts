import {Entity, Column,PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    topic: string;

    @Column()
    message: string;
}
