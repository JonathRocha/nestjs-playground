import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { toNumber } from '@codeinplace/js-utils';

export class GetProductsDTO {
    @IsNumber()
    @Transform(toNumber)
    id: number;
}
