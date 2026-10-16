import { IsNotEmpty } from "class-validator";

export class registerdto {
    @IsNotEmpty({ message: "nama harus diisi" })
    readonly nama: string;
    @IsNotEmpty({ message: "email harus diisi" })
    readonly email: string;
    @IsNotEmpty({ message: "password harus diisi" })
    readonly password: string;
    @IsNotEmpty({ message: "konfirmasi password harus diisi" })
    readonly confirmPassword: string;
}