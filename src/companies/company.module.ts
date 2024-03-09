import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/database/database.module';
import { CompanyController } from './company.controller';
import { companyProviders } from './company.providers';
import { CompanyService } from './company.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [CompanyService, ...companyProviders],
})
export class CompanyModule {}
