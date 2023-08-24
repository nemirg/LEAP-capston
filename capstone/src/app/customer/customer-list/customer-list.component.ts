import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from 'src/app/customer';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  subscription?: Subscription
  customers: Customer[] = []
  //customers$?: Observable<Customer[]> | null = this.customerSrv.getCustomers();
  salesperson: string = '';

  constructor(private customerSrv: CustomerService) { }


  ngOnInit() {
    this.subscription = this.customerSrv.getCustomers().subscribe({
      next: (data: any) => { this.customers = data }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe;
  }

}


