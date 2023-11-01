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
} from 'class-validator';

import { OptionsStatus } from 'src/schemas/enties/bikes-avibles.entity';

export class CreateBikeAvailable {
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  @MinLength(3)
  @MaxLength(20)
  readonly brand: string;
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  @MinLength(3)
  @MaxLength(20)
  readonly model: string;
  @IsNumber()
  @IsNotEmpty()
  @Min(25)
  @Max(2000)
  readonly cc: number;
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(3)
  readonly occupants: number;
  @IsNumber()
  @IsNotEmpty()
  @Min(5)
  @Max(999)
  readonly autonomy: number;
  @IsNumber()
  @IsNotEmpty()
  @Min(5)
  @Max(500)
  readonly speed: number;
  @IsNumber()
  @IsNotEmpty()
  @Min(5)
  @Max(999)
  readonly weigth: number;
  @IsString()
  @IsNotEmpty()
  @IsIn([OptionsStatus.available, OptionsStatus.onRoute])
  readonly status: OptionsStatus;
}