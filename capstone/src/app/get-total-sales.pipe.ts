import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer'

@Pipe({
    name: 'getTotalSales'
})
export class GetTotalSalesPipe implements PipeTransform {

    transform(customers: Customer[]): number {
        const totalSales = customers.reduce((sum, current) => sum + current.purchase_total, 0);
        return totalSales;
    }

}