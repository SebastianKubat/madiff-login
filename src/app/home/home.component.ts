import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { AuthService, AuthData } from '../loggedin';
import { Router } from '@angular/router';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./home.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./modal.html') + require('./home.component.html')
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('myModal') modal: any;

  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    private vcRef: ViewContainerRef,
    private auth: AuthService,
    private router: Router
  ) {

  }

  

  ngAfterViewInit() {
    this.modal['isError'] = () => this.auth.areBadCredentials();

    this.modal['signIn'] = () => {
      console.log('asdasd');
      this.auth.trylogin({
        companyName: <string>this.modal['companyName'],
        username: <string>this.modal['username'],
        password: <string>this.modal['password'],
        rememberMe: true
      })
    }

  }

  e2eMode: boolean = E2E;

  public ngOnInit() {
    if (this.auth.isLoggedIn()) this.router.navigateByUrl('/loggedin');
    else {
      console.log('hello `Home` component');
      HomeComponent.instance = this;
    }

    // this.title.getData().subscribe(data => this.data = data);
  }

  private static instance;
  public static showModal() {
    HomeComponent.instance['modal'].open();
  }
  public static hideModal() {
    HomeComponent.instance['modal'].close();
  }


  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
