import { Injectable } from '@nestjs/common';
import * as soap from 'soap';

@Injectable()
export class SoapService {
  private soapClient: soap.Client;

  constructor() {}

  async createClient(wsdlUrl: string): Promise<void> {
    try {
      this.soapClient = await soap.createClientAsync(wsdlUrl);
    } catch (error) {
      throw new Error(`Error creating SOAP client: ${error.message}`);
    }
  }

  async callMethod(methodName: string, args: any): Promise<any> {
    try {
      if (!this.soapClient) {
        throw new Error('SOAP client is not initialized.');
      }

      const result = await this.soapClient[`${methodName}Async`](args);
      return result[0]; // El resultado puede ser un array, obtenemos el primer elemento
    } catch (error) {
      throw new Error(`Error calling SOAP method: ${error.message}`);
    }
  }
}

