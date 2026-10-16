import { IsInt, IsNotEmpty } from "class-validator";

export class CreatebookDto {
    @IsNotEmpty({ message: "title harus diisi" })
    readonly title: string;

    @IsNotEmpty({ message: "author harus diisi" })
    readonly author: string;

    @IsNotEmpty({ message: "isbn harus diisi" })
    readonly isbn: string;

    @IsNotEmpty({ message: "publishedyear harus diisi" })
    @IsInt({ message: "publishedyear harus diisi berupa angka" })
    readonly publishedyear: number;
}