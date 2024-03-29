import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { Company } from '@/companies/company.entity';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly USER_REPOSITORY: typeof User,
  ) {}

  async findByCompanyName(name: string): Promise<User[] | null> {
    return await this.USER_REPOSITORY.findAll<User>({
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Company,
          attributes: ['name'],
          where: {
            name: {
              [Op.like]: `%${name}%`,
            },
          },
        },
      ],
    });
  }

  async findOneWithCompanyName(id: number): Promise<User | null> {
    return await this.USER_REPOSITORY.findByPk<User>(id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Company,
          attributes: ['name'], // Companyからname属性のみを取得
        },
      ],
    });
  }

  async findOne(user_id: string): Promise<User | null> {
    return await this.USER_REPOSITORY.findOne<User>({
      where: { user_id },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.USER_REPOSITORY.findAll<User>({
      attributes: { exclude: ['password'] },
      include: [Company], // Companyテーブルの全ての情報と紐づけられる
    });
  }
}
