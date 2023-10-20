/* eslint-disable prettier/prettier */
export class CreateBikeAvailable {
  readonly brand: string;
  readonly model: string;
  readonly cc: number;
  readonly occupants: number;
  readonly autonomy: string;
}

export class UpdateBikeAvailable {
  brand?: string;
  model?: string;
  cc?: number;
  occupants?: number;
  autonomy?: string;
}