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
  IsBoolean,
} from 'class-validator';
import { Role } from 'src/schemas/enums/role.enum';

export class CreateUser {
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  @MinLength(3)
  @MaxLength(20)
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  @MinLength(3)
  @MaxLength(20)
  readonly lastName: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(40)
  password: string;
  @IsString()
  @IsNotEmpty()
  readonly birthDate: string;
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  readonly city: string;
  @IsBoolean()
  @IsNotEmpty()
  readonly motorcycleAsigned: boolean;
  @IsNumber()
  @IsNotEmpty()
  readonly idMotorcycleAsigned: number;
  /*  @IsString()
  @IsNotEmpty()
  @IsIn([Role.Admin, Role.User])
  readonly roles: Role; */
}
