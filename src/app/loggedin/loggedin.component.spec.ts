import { ActivatedRoute, Data } from '@angular/router';
import { Component, Provider } from '@angular/core';
import { inject, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

// Load the implementations that should be tested
import { LoggedinComponent } from './loggedin.component';
import { AuthService } from './auth.service';
import { ROUTES } from '../app.routes';
import { AppModule } from '../app.module';

class AuthServiceMock {
  public isLoggedIn: boolean = false;
}

describe('Loggedin', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpModule],
    providers: [
      // provide a better mock      
      RouterTestingModule.withRoutes(ROUTES),
      { provide: AuthService, useClass: AuthServiceMock }
    ]
  }));

  // it('should be logged in with correct data', async(inject([AuthService],
  //   (auth: AuthService) => {
  //     expect(auth.isLoggedIn()).toBeFalsy();
  //     auth.trylogin({ companyName: '111', username: '222', password: '333', rememberMe: true });

  //     setTimeout(() => {
  //       expect(auth.isLoggedIn()).toBeTruthy();
  //     })

  //   })));

});
