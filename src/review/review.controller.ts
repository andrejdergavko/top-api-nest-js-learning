import { Body, Controller, Post, Delete, Param, Get } from '@nestjs/common';
import { ReviewDocument } from './review.schema';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewDocument, '_id'>) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {}
}
