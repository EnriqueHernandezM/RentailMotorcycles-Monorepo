import {
  IsAlpha,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { OptionsStatus } from 'src/schemas/enties/bikes-avibles.entity';

export class UpdateBikeAvailable {
  @IsString()
  @IsOptional()
  @IsAlpha()
  @MinLength(3)
  @MaxLength(20)
  brand?: string;
  @IsString()
  @IsOptional()
  @IsAlpha()
  @MinLength(3)
  @MaxLength(20)
  model?: string;
  @IsNumber()
  @IsOptional()
  @Min(25)
  @Max(2000)
  cc?: number;
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(3)
  occupants?: number;
  @IsNumber()
  @IsOptional()
  @Min(5)
  @Max(999)
  autonomy?: number;
  @IsNumber()
  @IsOptional()
  @Min(5)
  @Max(500)
  speed?: number;
  @IsNumber()
  @IsOptional()
  @Min(5)
  @Max(999)
  weigth?: number;
  @IsString()
  @IsNotEmpty()
  @IsIn([OptionsStatus.available, OptionsStatus.onRoute])
  status?: OptionsStatus;
}
