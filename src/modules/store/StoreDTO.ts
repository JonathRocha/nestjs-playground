import { IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

function toNumber(value) {
    return Number(value);
}

export class GetProductsDTO {
    @IsNumber()
    @Transform(toNumber)
    id: number;
}
