import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminRoleGuard } from '@/auth/guards/admin-role.guard';
import { UserDecorator } from '@/users/user.decorator';
import { User } from './user.entity';
import { UserService } from './user.service';

type GetUserWithCompanyNameResponse = {
  user_id: number;
  company_name: string;
};

@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/profile')
  getProfile(@UserDecorator() user: any): Promise<User | null> {
    return this.userService.findOne(user.user_id);
  }

  @Get('/company/search')
  findByCompanyName(@Query('name') name: string): Promise<User[]> {
    return this.userService.findByCompanyName(name);
  }

  @Get('/:id/company/name')
  async getUserWithCompanyName(
    @Param('id') id: string,
  ): Promise<GetUserWithCompanyNameResponse | null> {
    const result = await this.userService.findOneWithCompanyName(+id);

    return {
      user_id: result.id,
      company_name: result.company.name,
    };
  }

  @Get('/:user_id')
  getUser(@Param('user_id') user_id: string): Promise<User | null> {
    return this.userService.findOne(user_id);
  }

  @Get()
  @UseGuards(AdminRoleGuard) // システム管理者のみアクセス可能
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
