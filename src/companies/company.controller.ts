import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserBelongsToSameCompanyGuard } from '@/auth/guards/user-belongs-to-same-company.guard';
import { Company } from './company.entity';
import { CompanyService } from './company.service';

@UseGuards(AuthGuard('jwt'))
@Controller({
  path: 'company',
})
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('/list')
  getCompanies(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Get('/:id')
  @UseGuards(UserBelongsToSameCompanyGuard) // 同じ会社に所属しているユーザー情報のみアクセス可能
  getCompany(@Param('id') id: string): Promise<Company> {
    return this.companyService.findOne(+id);
  }
}
