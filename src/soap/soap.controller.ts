import { Controller, Get, Query } from '@nestjs/common';
import { SoapService } from './soap.service';

@Controller('soap')
export class SoapController {
  constructor(private readonly soapService: SoapService) {}

  @Get('add')
  async add(@Query('a') a: number, @Query('b') b: number) {
    const wsdlUrl = 'http://www.dneonline.com/calculator.asmx?WSDL';
    const methodName = 'Add';
    const args = { intA: a, intB: b };

    await this.soapService.createClient(wsdlUrl);
    const result = await this.soapService.callMethod(methodName, args);
    return { result: result.AddResult };
  }
}

