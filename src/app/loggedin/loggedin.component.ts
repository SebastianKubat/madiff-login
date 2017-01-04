import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'loggedin',
  styles: [`
  `],
  template: `
    <h1 id="msgloggedin" >You are logged in</h1>
  `
})
export class LoggedinComponent implements OnInit {

  
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public auth: AuthService
  ) {}

  public ngOnInit() {
    console.log('u r loggedi in')
    if (!this.auth.isLoggedIn()) this.router.navigateByUrl('/');
  }

}
