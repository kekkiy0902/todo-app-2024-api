import { Injectable, Inject } from '@nestjs/common';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private readonly COMPANY_REPOSITORY: typeof Company,
  ) {}

  async findOne(id: number): Promise<Company> {
    return await this.COMPANY_REPOSITORY.findByPk<Company>(id);
  }

  async findAll(): Promise<Company[]> {
    return await this.COMPANY_REPOSITORY.findAll<Company>();
  }
}
