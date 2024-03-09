import { Controller, Get } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyService } from './company.service';

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
