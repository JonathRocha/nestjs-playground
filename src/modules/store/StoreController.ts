import { Controller, Get, Param } from '@nestjs/common';
import StoreService from './StoreService';
import { getProductsParams } from './StoreValidators';

@Controller()
export default class StoreController {
    constructor(private readonly storeService: StoreService) {}

    @Get('products')
    getProducts(@Param() params: getProductsParams) {
        return this.storeService.getProducts();
    }
}
