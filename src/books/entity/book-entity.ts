import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'books' })
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 65 })
    title: string;

    @Column({ type: "varchar", length: 65 })
    author: string;

    @Column({ type: 'varchar' })
    isbn: string;

    @Column({ type: 'boolean', default: 0 })
    publishedyear: number;

    @Column({ type: 'boolean', default: true })
    isavailable: boolean;

    @CreateDateColumn({ name: 'created_at' })
    CreatedAt: Date

    @UpdateDateColumn({ name: 'update_at' })
    UpdateAt: Date

    @DeleteDateColumn({ name: "deleted_at", nullable: true })
    deletedAd: Date
}