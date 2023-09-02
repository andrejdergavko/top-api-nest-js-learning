import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common';

import { ProductDocument } from './product.schema';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductDocument, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductDocument) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {}
}
