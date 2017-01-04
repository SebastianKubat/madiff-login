import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { AuthData } from './auth-data';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {
    private headers: Headers;
    private loginOk: boolean = false;
    private isError: boolean = false;

    constructor(private http: Http, private router: Router) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }

    isLoggedIn() {
        return this.loginOk;
    }

    logout() {
        this.loginOk = false;
        setTimeout(() => {
            this.router.navigateByUrl('/');
        });
    }

    areBadCredentials() {
        return this.isError;
    }

    private loginSuccess() {
        this.loginOk = true;
        setTimeout(() => {
            this.router.navigateByUrl('/loggedin');
        });
    }

    private loginFail() {
        console.log('login fail');
        this.loginOk = false;
        this.isError = true;
        setTimeout(() => {
            this.isError = false;
        }, 2000);
    }

    trylogin(data: AuthData) {
        console.log('data', data);
        if (E2E) {
            (new Observable<AuthData>((observer) => {
                if (data.companyName === '111'
                    && data.username === '222'
                    && data.password === '333') {
                    observer.next()
                }
                else observer.error()
            })).subscribe(() => this.loginSuccess(),
                (err) => this.loginFail())
        } else {
            return this.http.post('api/authenticate',
                JSON.stringify(data),
                { headers: this.headers }).subscribe(
                () => this.loginSuccess(),
                (err) => this.loginFail())
        }

    }

}