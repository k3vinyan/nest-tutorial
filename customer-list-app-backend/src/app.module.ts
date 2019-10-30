import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://k3vinyan:Coolio04@cluster0-6d3as.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }),
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
