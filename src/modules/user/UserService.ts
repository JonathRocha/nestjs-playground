import { Injectable } from '@nestjs/common';

type User = {
    name: string;
    email: string;
};

@Injectable()
export class UserService {
    private readonly users: Array<User>;

    constructor() {
        this.users = [
            {
                name: 'Jonathan Rocha',
                email: 'johnferreirar@gmail.com',
            },
        ];
    }

    async getUsers(): Promise<Array<User>> {
        return this.users;
    }
}
