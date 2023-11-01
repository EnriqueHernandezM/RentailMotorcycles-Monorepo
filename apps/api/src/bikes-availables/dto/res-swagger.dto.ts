class CreateBikeAvailableRes {
  readonly message: string;
  readonly ItemSaves: {
    readonly brand: string;
    readonly model: string;
    readonly cc: number;
    readonly occupants: number;
    readonly autonomy: number;
    readonly speed: number;
    readonly weigth: number;
    readonly status: string;
  };
}
class DeleteElementRes {
  readonly message: string;
  readonly id_Element: number;
  readonly elements_Deleted: number;
}

class UpdateItemRes {
  readonly message: 'update';
  readonly modifiedOneItem: number[];
}
export { CreateBikeAvailableRes, DeleteElementRes, UpdateItemRes };
