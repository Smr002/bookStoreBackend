// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module'; // Ensure this path is correct
import { AddCardModule } from './addCard/addCard.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.ynsro.mongodb.net/myapp2'),
    UserModule,
    BookModule,
    AuthModule, 
   AddCardModule,
  ],
})
export class AppModule {}
