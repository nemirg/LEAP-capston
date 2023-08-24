import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
import { LoginService } from 'src/app/login.service';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrls: ['./my-accounts.component.css']
})
export class MyAccountsComponent {
  subscription?: Subscription;
  customers: Customer[] = [];
  user: string = "";

  constructor(private customerSrv: CustomerService, public loginSrv: LoginService) {
  }

  ngOnInit() {
    this.user = this.loginSrv.user;
    this.subscription = this.customerSrv.getCustomers().subscribe({
      next: (data: any) => { this.customers = data }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe;
  }


}
