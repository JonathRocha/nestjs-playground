import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import StoreService from './StoreService';
import { getProductsParams } from './StoreValidators';

@Controller()
export default class StoreController {
    constructor(private readonly storeService: StoreService) {}

    // http://localhost:3001/store/products?id=12345
    @Get('products')
    getProducts(@Query() params: getProductsParams) {
        return this.storeService.getProducts();
    }

    @Post('products')
    getProductsPost(@Body() params: getProductsParams) {
        return this.storeService.getProducts();
    }
}
