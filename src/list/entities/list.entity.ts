import {Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    topic: string;

    @Column()
    message: string;

    @Column({ type: "enum", enum: ["high", "medium", "low"] })
    priority: string;

    @Column({ type: "enum", enum: ["todo", "in_progress", "done"],  default: "todo"})
    status: string;
    
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updated_at: Date;
}
