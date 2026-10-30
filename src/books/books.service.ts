import { Injectable } from '@nestjs/common';
import { Book } from './entity/book-entity.js';
import { CreatebookDto } from './dto/create-book.dto.js';
import { error } from 'console';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ) { }

    async findall(): Promise<Book[]> {
        //select *from book
        return await this.bookRepository.find({
            order: { CreatedAt: 'DESC' }
        })
    }
    //simpan data
    async simpandata(createbookdto: CreatebookDto): Promise<Book> {
        const newbook = this.bookRepository.create(createbookdto);
        return await this.bookRepository.save(newbook);

        //     updatedata(id: number, updatebookdto: CreatebookDto): Book{
        //         const bookIndex = this.books.findIndex(Book => Book.id === id);
        //         if(bookIndex === -1) {
        //             throw new Error(`buku dengan id ${id} tidak ditemukan`);
        //         }

        //         const updatedbook: Book = {
        //             ...this.books[bookIndex],
        //             title: updatebookdto.title,
        //             author: updatebookdto.author,
        //             isbn: updatebookdto.isbn,
        //             publishedyear: updatebookdto.publishedyear
        //         };
        //         this.books[bookIndex] = updatedbook;
        //         return updatedbook;
        //     }

        //     hapusdata(id: number): string {
        //         const bookIndex = this.books.findIndex(Book => Book.id === id);
        //         if (bookIndex === -1) {
        //             throw new Error(`buku dengan id ${id} tidak ditemukan`);
        //         }
        //         this.books.splice(bookIndex, 1);
        //         return `Buku dengan id ${id} berhasil dihapus`;
        //     }

    }
}