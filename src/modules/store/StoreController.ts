import { Controller, Get, Query, Post, Body, Logger } from '@nestjs/common';
import StoreService from './StoreService';
import { GetProductsDTO } from './StoreDTO';

@Controller()
export default class StoreController {
    constructor(private readonly storeService: StoreService) {}

    @Get('products')
    getProducts(@Query() params: GetProductsDTO) {
        return this.storeService.getProducts();
    }

    @Post('products')
    getProductsPost(@Body() params: GetProductsDTO) {
        return this.storeService.getProducts();
    }
}
