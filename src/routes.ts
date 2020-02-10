import { Routes } from 'nest-router';
import { UserModule } from './modules/user/UserModule';

export const routes: Routes = [
    {
        path: '/users',
        module: UserModule,
    },
];
