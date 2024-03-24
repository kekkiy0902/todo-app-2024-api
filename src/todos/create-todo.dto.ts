import { IsNotEmpty, MaxLength } from 'class-validator';

// Dto内でバリデーションの定義をするが、特定のステータスコードに変更したりする場合はControllerで行う
export class CreateTodoDto {
  @IsNotEmpty({ message: 'タイトルは必須です。' })
  @MaxLength(20, { message: 'タイトルは最大20文字までです。' })
  title: string;

  @IsNotEmpty({ message: 'ディスクリプションは必須です。' })
  description: string;

  @IsNotEmpty({ message: 'カテゴリは必須です。' })
  category_ids: number[];
}
