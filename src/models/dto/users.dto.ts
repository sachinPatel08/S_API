import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  isInt,
  IsStrongPassword,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly firstName: string;

  @IsNotEmpty()
  @MinLength(4)
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  readonly passsword: string;

  @IsNotEmpty()
  readonly gender: string;

  @IsNotEmpty()
  readonly age: number;
}
