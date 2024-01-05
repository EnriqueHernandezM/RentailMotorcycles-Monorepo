import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsIn,
  IsAlpha,
  MinLength,
  MaxLength,
  Max,
  Min,
  IsUrl,
  IsEmail,
} from 'class-validator';

export class ConectUser {
  @IsNumber()
  @IsNotEmpty()
  readonly roles: number;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(40)
  readonly password: string;
}
