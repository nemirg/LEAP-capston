import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor(private route: ActivatedRoute, private router: Router, public loginSrv: LoginService) { }

  ngOnInit() {
    this.router.navigate(['customer-list'], { relativeTo: this.route });
  }
}
