import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { MyAccountsComponent } from './customer/my-accounts/my-accounts.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "account", component: AccountComponent },
  {
    path: "customer", component: CustomerComponent, children: [
      { path: "customer-list", component: CustomerListComponent },
      { path: "my-accounts", component: MyAccountsComponent },
    ]
  },
  { path: "**", component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
