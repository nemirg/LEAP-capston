import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer'

@Pipe({
  name: 'filterBySalesperson'
})
export class FilterBySalespersonPipe implements PipeTransform {

  transform(customers: Customer[], salesperson: string): Customer[] {
    //   if (customers && customers.length > 0) {
    //     let newCustomers = customers.filter(
    //       (customer) => customer.salesperson === salesperson
    //     )
    //     return newCustomers;
    //   } else {
    //     return customers;
    //   }
    if (salesperson) {
      const filteredCustomers = customers.filter(
        customer => customer.salesperson === salesperson
      )
      return filteredCustomers;

    }
    else {
      return customers;
    }
  }

}
