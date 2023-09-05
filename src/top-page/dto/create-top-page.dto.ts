import { Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
  IsArray,
  IsEnum,
} from 'class-validator';
import { TopLevelCategory } from '../top-page.schema';

export class HhDataDto {
  @IsNumber()
  count: number;

  @IsNumber()
  juniorSalary: number;

  @IsNumber()
  middleSalary: number;

  @IsNumber()
  seniorSalary: number;
}

export class TopPageAdvantageDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class CreateTopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;

  @IsString()
  secondCategory: string;

  @IsString()
  alias: string;

  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => HhDataDto)
  hh?: HhDataDto;

  @IsArray()
  @ValidateNested()
  @Type(() => TopPageAdvantageDto)
  advantages: TopPageAdvantageDto[];

  @IsString()
  seoText: string;

  @IsString()
  tagsTitle: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}

// const mockDto = {
//   title: 'string',
//   description: 'string',
//   firstCategory: 1,
//   secondCategory: 'string',
//   alias: 'string',
//   category: 'string',
//   hh: {
//     count: 1,
//     juniorSalary: 1,
//     middleSalary: 1,
//     seniorSalary: 1,
//   },
//   advantages: [
//     {
//       title: 'string',
//       description: 'string',
//     },
//   ],
//   seoText: 'string',
//   tagsTitle: 'string',
// };
