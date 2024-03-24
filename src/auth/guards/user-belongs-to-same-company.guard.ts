import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class UserBelongsToSameCompanyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const params = request.params;

    if (user.role_id === 1) {
      return true;
    }

    return user.company_id === +params.id;
  }
}
