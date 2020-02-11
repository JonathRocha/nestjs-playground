import { Controller, Get } from '@nestjs/common';
import { AppService } from './AppService';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello() {
        return this.appService.getHello();
    }

    @Get('empresas')
    async getEmpresas() {
        const empresas = await this.appService.getEmpresas();
        return { empresas };
    }
}
