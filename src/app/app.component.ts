/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from './app.service';
import { AuthService } from './loggedin';
import { HomeComponent } from './home';
require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  
    <nav>
    <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link disabled"  style="cursor: default;" href="#">Account</a>
    </li>
    <li class="nav-item" *ngIf="!isLoggedIn" (click)="showLoginModal()"  >
      <a class="nav-link" href="javascript:void(0)" id="btsignin" >sign in</a>
    </li>
    <li class="nav-item" *ngIf="isLoggedIn" >
      <a class="nav-link" href="javascript:void(0)" id="btlogout" (click)="logout()" >logout</a>
    </li>
  </ul>
    </nav>

  <main>
    <router-outlet></router-outlet>
  </main>

  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState,
    private auth: AuthService,
    private router: Router
  ) { }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
    console.log('E2E', E2E)
    console.log('E2E', typeof E2E)
  }

  get isLoggedIn() {
    if (this.auth.isLoggedIn()) {
      HomeComponent.hideModal();
    }
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
  }

  showLoginModal() {
    HomeComponent.showModal();
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
