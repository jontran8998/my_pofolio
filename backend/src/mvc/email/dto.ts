import { IsString, IsEmail } from 'class-validator';


export namespace Dto {
  export class Email {
    @IsString()
    public name: string;

    @IsEmail()
    public email: string;

    @IsString()
    public message: string;

    @IsString()
    public recaptcha: string;
  }
}