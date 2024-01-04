import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/config/roles.decorator';
import { Role } from 'src/schemas/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }
    console.log(11);

    const { user } = context.switchToHttp().getRequest();
    console.log(user);
    const po = requiredRoles.some((role) => user.roles?.includes(role));
    console.log(po);

    return po;
  }
}