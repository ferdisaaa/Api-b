import { IsNotEmpty } from "class-validator";

export class logindto {
    @IsNotEmpty({ message: "email harus diisi" })
    readonly email: string;
    @IsNotEmpty({ message: "password harus diisi" })
    readonly password: string;
}