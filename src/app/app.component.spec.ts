import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { AuthService } from './loggedin';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home';
import { LoggedinComponent } from './loggedin';
import { NoContentComponent } from './no-content';

describe(`App`, () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,
        RouterTestingModule.withRoutes(ROUTES)
      ],
      declarations: [AppComponent, HomeComponent, LoggedinComponent, NoContentComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AppState, AuthService]
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  it(`should be @AngularClass`, () => {
    expect(comp.url).toEqual('https://twitter.com/AngularClass');
    expect(comp.angularclassLogo).toEqual('assets/img/angularclass-avatar.png');
    expect(comp.name).toEqual('Angular 2 Webpack Starter');
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

   it('should be logged in with correct data', async(inject([AuthService],
    (auth: AuthService) => {
      expect(auth.isLoggedIn()).toBeFalsy();
      auth.trylogin({ companyName: '111', username: '222', password: '333', rememberMe: true });

      setTimeout(() => {
        expect(auth.isLoggedIn()).toBeTruthy();
      })

    })));

});
