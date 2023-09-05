import { Type } from 'class-transformer';
import {
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
  IsArray,
} from 'class-validator';

class ProductCharacteristicDto {
  @IsString()
  name: string;

  @IsString()
  value: string;
}

export class CreateProductDto {
  @IsString()
  image: string;

  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  oldPrice?: number;

  @IsNumber()
  credit: number;

  @IsString()
  description: string;

  @IsString()
  advantages: string;

  @IsString()
  disAdvantages: string;

  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ValidateNested()
  @Type(() => ProductCharacteristicDto)
  characteristics: ProductCharacteristicDto[];
}

// const mockedProduct = {
//   "image": "string",
//   "title": "string",
//   "price": 0,
//   "oldPrice": 0,
//   "credit": 0,
//   "description": "string",
//   "advantages": "string",
//   "disadvantages": "string",
//   "categories": ["string"],
//   "tags": ["string"],
//   "characteristics": [
//     {
//       "name": "string",
//       "value": "string",
//     },
//   ],
// };
