import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoapService } from './soap/soap.service';
import { SoapController } from './soap/soap.controller';

@Module({
  imports: [],
  controllers: [AppController, SoapController],
  providers: [AppService, SoapService],
})
export class AppModule {}
