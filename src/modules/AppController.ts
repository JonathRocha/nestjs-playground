import { Controller, Get, Post, Request, Body } from '@nestjs/common';
import { AuthService } from './auth/AuthService';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @Post('auth/login')
    async login(@Body() req) {
        console.log('req', req);
        return this.authService.login(req);
    }
}
