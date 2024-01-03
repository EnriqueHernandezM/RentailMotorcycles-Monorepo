import { UsersEntities } from 'src/schemas/enties/users.entity';
import { UsersBikesEntities } from 'src/schemas/enties/usersBikes.entity';

export const UsersEntitiesProviders = [
  {
    provide: 'tableUsers',
    useValue: UsersEntities,
  },
];

/* export const UsersBikesEntitiesProviders = [
  {
    provide: 'tableUsersBikesAvailables',
    useValue: UsersBikesEntities,
  },
]; */
