var ac_main =
webpackJsonpac__name_([1],{

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loggedin_component__ = __webpack_require__(576);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "LoggedinComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__loggedin_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_data__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__auth_data__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__auth_data__, "AuthService")) __webpack_require__.d(exports, "AuthService", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_data__["AuthService"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(367);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "AuthService", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_service__["a"]; });





/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppState; });

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppState);
    return AppState;
}());


/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(570);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ENV_PROVIDERS; });


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* enableDebugTools */])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });




var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.loginOk = false;
        this.isError = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.loginOk;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.loginOk = false;
        setTimeout(function () {
            _this.router.navigateByUrl('/');
        });
    };
    AuthService.prototype.areBadCredentials = function () {
        return this.isError;
    };
    AuthService.prototype.loginSuccess = function () {
        var _this = this;
        this.loginOk = true;
        setTimeout(function () {
            _this.router.navigateByUrl('/loggedin');
        });
    };
    AuthService.prototype.loginFail = function () {
        var _this = this;
        console.log('login fail');
        this.loginOk = false;
        this.isError = true;
        setTimeout(function () {
            _this.isError = false;
        }, 2000);
    };
    AuthService.prototype.trylogin = function (data) {
        var _this = this;
        console.log('data', data);
        if (true) {
            (new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observer) {
                if (data.companyName === '111'
                    && data.username === '222'
                    && data.password === '333') {
                    observer.next();
                }
                else
                    observer.error();
            })).subscribe(function () { return _this.loginSuccess(); }, function (err) { return _this.loginFail(); });
        }
        else {
            return this.http.post('api/authenticate', JSON.stringify(data), { headers: this.headers }).subscribe(function () { return _this.loginSuccess(); }, function (err) { return _this.loginFail(); });
        }
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AuthService);
    return AuthService;
}());


/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__(577);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });



/***/ },

/***/ 434:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 434;


/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(567);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loggedin__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home__ = __webpack_require__(246);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });





__webpack_require__(993);
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState, auth, router) {
        this.appState = appState;
        this.auth = auth;
        this.router = router;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
        console.log('E2E', true);
        console.log('E2E', "boolean");
    };
    Object.defineProperty(AppComponent.prototype, "isLoggedIn", {
        get: function () {
            if (this.auth.isLoggedIn()) {
                __WEBPACK_IMPORTED_MODULE_4__home__["a" /* HomeComponent */].hideModal();
            }
            return this.auth.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AppComponent.prototype.showLoginModal = function () {
        __WEBPACK_IMPORTED_MODULE_4__home__["a" /* HomeComponent */].showModal();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [
                __webpack_require__(994)
            ],
            template: "\n  \n    <nav>\n    <ul class=\"nav nav-pills\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link disabled\"  style=\"cursor: default;\" href=\"#\">Account</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"!isLoggedIn\" (click)=\"showLoginModal()\"  >\n      <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"btsignin\" >sign in</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"isLoggedIn\" >\n      <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"btlogout\" (click)=\"logout()\" >logout</a>\n    </li>\n  </ul>\n    </nav>\n\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n  "
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_3__loggedin__["AuthService"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AppComponent);
    return AppComponent;
}());
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environment__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_resolver__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loggedin__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__no_content__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_x_large__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_modal__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_modal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
















// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_9__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */],
    __WEBPACK_IMPORTED_MODULE_12__loggedin__["AuthService"]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__loggedin__["LoggedinComponent"],
                __WEBPACK_IMPORTED_MODULE_11__home__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__no_content__["a" /* NoContentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_x_large__["a" /* XLargeDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_5__angular_router__["PreloadAllModules"] })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__environment__["b" /* ENV_PROVIDERS */],
                APP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppState */]])
    ], AppModule);
    return AppModule;
}());


/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return APP_RESOLVER_PROVIDERS; });



var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    DataResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], DataResolver);
    return DataResolver;
}());
// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loggedin__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_content__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ROUTES; });



var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'loggedin', component: __WEBPACK_IMPORTED_MODULE_1__loggedin__["LoggedinComponent"] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__no_content__["a" /* NoContentComponent */] },
];


/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__title__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loggedin__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });





var HomeComponent = (function () {
    // TypeScript public modifiers
    function HomeComponent(appState, title, vcRef, auth, router) {
        this.appState = appState;
        this.title = title;
        this.vcRef = vcRef;
        this.auth = auth;
        this.router = router;
        // Set our default values
        this.localState = { value: '' };
        this.e2eMode = true;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.modal['isError'] = function () { return _this.auth.areBadCredentials(); };
        this.modal['signIn'] = function () {
            console.log('asdasd');
            _this.auth.trylogin({
                companyName: _this.modal['companyName'],
                username: _this.modal['username'],
                password: _this.modal['password'],
                rememberMe: true
            });
        };
    };
    HomeComponent.prototype.ngOnInit = function () {
        if (this.auth.isLoggedIn())
            this.router.navigateByUrl('/loggedin');
        else {
            console.log('hello `Home` component');
            HomeComponent.instance = this;
        }
        // this.title.getData().subscribe(data => this.data = data);
    };
    HomeComponent.showModal = function () {
        HomeComponent.instance['modal'].open();
    };
    HomeComponent.hideModal = function () {
        HomeComponent.instance['modal'].close();
    };
    HomeComponent.prototype.submitState = function (value) {
        console.log('submitState', value);
        this.appState.set('value', value);
        this.localState.value = '';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal'), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "modal", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // The selector is what angular internally uses
            // for `document.querySelectorAll(selector)` in our index.html
            // where, in this case, selector is the string 'home'
            selector: 'home',
            // We need to tell Angular's Dependency Injection which providers are in our app.
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__title__["a" /* Title */]
            ],
            // Our list of styles in our component. We may add more to compose many styles together
            styles: [__webpack_require__(995)],
            // Every Angular template is first compiled by the browser before Angular runs it's compiler
            template: __webpack_require__(727) + __webpack_require__(726)
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_2__title__["a" /* Title */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_3__loggedin__["AuthService"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());


/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title_service__ = __webpack_require__(572);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__title_service__["a"]; });



/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Title; });


var Title = (function () {
    function Title(http) {
        this.http = http;
        this.value = 'Angular 2';
    }
    Title.prototype.getData = function () {
        console.log('Title#getData(): Get Data');
        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: 'AngularClass'
        };
    };
    Title = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], Title);
    return Title;
}());


/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__x_large_directive__ = __webpack_require__(574);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__x_large_directive__["a"]; });



/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return XLargeDirective; });

/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
var XLargeDirective = (function () {
    function XLargeDirective(element, renderer) {
        // simple DOM manipulation to set font size to x-large
        // `nativeElement` is the direct reference to the DOM element
        // element.nativeElement.style.fontSize = 'x-large';
        this.element = element;
        this.renderer = renderer;
        // for server/webworker support use the renderer
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
    XLargeDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[x-large]' // using [ ] means selecting attributes
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], XLargeDirective);
    return XLargeDirective;
}());


/***/ },

/***/ 575:
/***/ function(module, exports) {

;


/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(367);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoggedinComponent; });



var LoggedinComponent = (function () {
    function LoggedinComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    LoggedinComponent.prototype.ngOnInit = function () {
        console.log('u r loggedi in');
        if (!this.auth.isLoggedIn())
            this.router.navigateByUrl('/');
    };
    LoggedinComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loggedin',
            styles: ["\n  "],
            template: "\n    <h1 id=\"msgloggedin\" >You are logged in</h1>\n  "
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], LoggedinComponent);
    return LoggedinComponent;
}());


/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NoContentComponent; });

var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'no-content',
            template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NoContentComponent);
    return NoContentComponent;
}());


/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)();
// imports


// module
exports.push([module.i, "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\nspan.active {\n  background-color: gray;\n}\n", ""]);

// exports


/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(268)();
// imports


// module
exports.push([module.i, "/*styles for home content only*/\n\n#alertError.active {\n    opacity: 1.0;\n}\n\n#alertError {\n    position: absolute;\n    z-index: 9999;\n    display: block;\n    pointer-events: none;\n    width: 100%;\n    top: 0px;\n    right: 0px;\n    opacity: 0;\n\n    -webkit-transition: all 1s ease-in;\n    -moz-transition: all 1s ease-in;\n    -ms-transition: all 1s ease-in;\n    -o-transition: all 1s ease-in;\n    transition: all 1s ease-in;\n    max-height: 200px;\n}", ""]);

// exports


/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "e2e mode: {{e2eMode}}\n"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "<modal  #myModal cancelButtonLabel=\"cancel\"  id=\"modalpopup\"\nsubmitButtonLabel=\"submit\" modalClass=\"modal-lg modal-sm any-other-css-class\"\n\n    [hideCloseButton]=\"true\" [closeOnEscape]=\"true\" \n    [closeOnOutsideClick]=\"true\" \n     submitButtonLabel=\"sign in\"\n     (onSubmit)=\"myModal.signIn()\"\n     >\n\n    <modal-header></modal-header>\n    \n    <modal-content>\n        \n        <div class=\"alert alert-danger\" id=\"alertError\"\n            [ngClass]=\"{'active': myModal.isError && myModal.isError()}\"\n         role=\"alert\" >\n            Failed to sign in! Please check your credentials and try again.            \n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Company Name</label>\n            <input type=\"email\" [(ngModel)]=\"myModal.companyName\" class=\"form-control\" \n            id=\"companyName\" aria-describedby=\"emailHelp\" placeholder=\"Enter company name\">\n            <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Username</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"myModal.username\"\n            id=\"username\" aria-describedby=\"emailHelp\" placeholder=\"Enter username\">\n            <!--<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>-->\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"myModal.password\"\n             id=\"password\" placeholder=\"Enter password\">\n        </div>\n        \n    </modal-content>\n\n    \n\n</modal>\n"

/***/ },

/***/ 994:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(722);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 995:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(723);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 996:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(436);
/* harmony export (immutable) */ exports["main"] = main;




/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }

},[996]);
//# sourceMappingURL=main.map