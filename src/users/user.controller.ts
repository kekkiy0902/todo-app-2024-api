import { Controller, Get, Param, Query } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

type GetUserWithCompanyNameResponse = {
  user_id: number;
  company_name: string;
};

@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

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

  @Get('/:id')
  getUser(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(+id);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
