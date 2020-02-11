import { IsNumberString } from 'class-validator';

export class getProductsParams {
    @IsNumberString()
    id: number;
}
