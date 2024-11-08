// src/addCard/addCard.module.ts
import { Module } from '@nestjs/common';
import { AddCardController } from './addCard.controller';
import { AddCardService } from './addCard.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AddCard, AddCardSchema } from './schema/addCard.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: AddCard.name, schema: AddCardSchema }])],
  controllers: [AddCardController],
  providers: [AddCardService],
})
export class AddCardModule {}

