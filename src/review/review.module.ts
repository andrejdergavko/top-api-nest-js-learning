import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReviewController } from './review.controller';
import { Review, ReviewSchema } from './review.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
  ],
  controllers: [ReviewController],
})
export class ReviewModule {}
