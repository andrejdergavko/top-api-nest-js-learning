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

import { TopPageDocument } from './top-page.schema';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageDocument, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageDocument) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {}
}
