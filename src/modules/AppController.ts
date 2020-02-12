import { Controller, Get, Post, Request, Body, Logger } from '@nestjs/common';
import { AuthService } from './auth/AuthService';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @Post('auth/login')
    async login(@Body() req) {
        Logger.log('req', req);
        return this.authService.login(req);
    }
}
