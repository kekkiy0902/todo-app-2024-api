import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { Company } from '../companies/company.entity';
import Sequelize from 'sequelize';

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
              [Sequelize.Op.like]: `%${name}%`,
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

  async findOne(id: number): Promise<User | null> {
    return await this.USER_REPOSITORY.findByPk<User>(id, {
      attributes: { exclude: ['password'] },
      include: [Company],
    });
  }

  async findAll(): Promise<User[]> {
    return await this.USER_REPOSITORY.findAll<User>({
      attributes: { exclude: ['password'] },
      include: [Company], // Companyテーブルの全ての情報と紐づけられる
    });
  }
}
