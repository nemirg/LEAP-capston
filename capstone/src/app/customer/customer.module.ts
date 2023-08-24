import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';
import { FilterBySalespersonPipe } from '../filter-by-salesperson.pipe';
import { FormsModule } from '@angular/forms';
import { SortByTotalPipe } from '../sort-by-total.pipe';
import { GetTotalSalesPipe } from '../get-total-sales.pipe';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    MyAccountsComponent,
    FilterBySalespersonPipe,
    SortByTotalPipe,
    GetTotalSalesPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
