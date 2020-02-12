import { Controller, Get, Query, Post, Body, Logger } from '@nestjs/common';
import StoreService from './StoreService';
import { GetProductsDTO } from './StoreDTO';

@Controller()
export default class StoreController {
    constructor(private readonly storeService: StoreService) {}

    // http://localhost:3001/store/products?id=12345
    @Get('products')
    getProducts(@Query() params: GetProductsDTO) {
        Logger.log(params);
        return this.storeService.getProducts();
    }

    @Post('products')
    getProductsPost(@Body() params: GetProductsDTO) {
        Logger.log(params);
        return this.storeService.getProducts();
    }
}
