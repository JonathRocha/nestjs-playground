import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/contants';
import { AuthService } from './AuthService';
import { JwtStrategy } from './JwtStrategy';

@Module({
    imports: [
        JwtModule.register({
            secret: JWT_SECRET,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
