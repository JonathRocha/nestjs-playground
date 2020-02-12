import {
    Injectable,
    HttpService,
    BadRequestException,
    UnauthorizedException,
    InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly httpService: HttpService,
    ) {}

    async login(user: any) {
        const { username, password } = user;
        const company = user.central ? '99' : user.company;

        return this.httpService
            .post('https://docker.rdpnet.com.br/auth/validate-credentials', {
                username,
                password,
                company,
            })
            .toPromise()
            .then(({ data }) => {
                const payload = { username, ...data };
                return {
                    access_token: this.jwtService.sign(payload),
                };
            })
            .catch((e) => {
                switch (e.response.status) {
                    case 400:
                        throw new BadRequestException();
                    case 401:
                        throw new UnauthorizedException();
                    default:
                        throw new InternalServerErrorException();
                }
            });
    }
}
