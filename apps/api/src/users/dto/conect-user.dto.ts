import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  NotContains,
} from 'class-validator';

export class ConectUser {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(10)
  @NotContains('`')
  @NotContains('<')
  @NotContains(';')
  @NotContains('*')
  readonly password: string;
}
