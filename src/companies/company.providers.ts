import { Company } from './company.entity';

export const companyProviders = [
  {
    provide: 'COMPANY_REPOSITORY',
    useValue: Company,
  },
];
