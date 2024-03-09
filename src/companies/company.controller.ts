import { Controller, Get } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Controller({
  path: 'company',
})
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  getCompanies(): Promise<Company[]> {
    return this.companyService.findAll();
  }
}
