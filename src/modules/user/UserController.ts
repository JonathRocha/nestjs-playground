import {
    Controller,
    Get,
    Post,
    UseInterceptors,
    UploadedFile,
    Logger,
    BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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
}
