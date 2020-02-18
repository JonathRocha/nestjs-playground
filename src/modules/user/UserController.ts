import {
    Controller,
    Get,
    Post,
    UseInterceptors,
    UploadedFile,
    Logger,
    BadRequestException,
    Request,
    UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './UserService';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUsers() {
        return { users: await this.userService.getUsers() };
    }

    @Get('/error')
    testError() {
        throw new BadRequestException('Soo bad!');
    }

    @Post('files')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {
        Logger.log(file);
        return { message: 'Uploaded!' };
    }

    @Get('pessoas')
    async getPessoas() {
        return { pessoas: await this.userService.getPessoas() };
    }

    @Get('notas')
    async getNotas() {
        const notas = await this.userService.getNotas();
        return { notas };
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
