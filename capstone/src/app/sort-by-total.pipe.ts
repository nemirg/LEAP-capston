import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer';

@Pipe({
  name: 'sortByTotal'
})
export class SortByTotalPipe implements PipeTransform {

  transform(input: Customer[]): Customer[] {
    let output: Customer[] = input.sort(
      (a: Customer, b: Customer) => {
        return b.purchase_total - a.purchase_total
      }
    )
    return output;
  }

}
