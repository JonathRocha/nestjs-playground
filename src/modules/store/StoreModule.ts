import { Module } from '@nestjs/common';
import StoreService from './StoreService';
import StoreController from './StoreController';

@Module({
    controllers: [StoreController],
    providers: [StoreService],
})
export default class StoreModule {}
