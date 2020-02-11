import { Routes } from 'nest-router';
import { UserModule } from './modules/user/UserModule';
import StoreModule from './modules/store/StoreModule';

export const routes: Routes = [
    {
        path: '/users',
        module: UserModule,
    },
    {
        path: '/store',
        module: StoreModule,
    },
];
