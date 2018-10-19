webpackJsonp([1,5],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/validate.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getcoins = function () {
        return this.myuser;
    };
    AuthService.prototype.setcoins = function (scope) {
        this.myuser = scope;
    };
    AuthService.prototype.setpicture = function (picturer) {
        this.picture = picturer;
    };
    AuthService.prototype.getpicture = function () {
        return this.picture;
    };
    AuthService.prototype.sendcoinstoserver = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/updatereward', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('mytoken');
        this.authtoken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('mytoken', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authtoken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.isloggedin = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('mytoken');
    };
    AuthService.prototype.sendemail = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log("senemail me ayaa");
        this.http.post('users/sendmail', user, { headers: headers });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/auth.service.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 401;


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(525);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/main.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(713),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/app.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_uploader__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sketch_sketch_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng_scrollreveal__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_reward_reward_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_offlinesketch_offlinesketch_component__ = __webpack_require__(530);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'sketch', component: __WEBPACK_IMPORTED_MODULE_17__components_sketch_sketch_component__["a" /* SketchComponent */] },
    { path: 'offlinesketch', component: __WEBPACK_IMPORTED_MODULE_20__components_offlinesketch_offlinesketch_component__["a" /* OfflinesketchComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'reward', component: __WEBPACK_IMPORTED_MODULE_19__components_reward_reward_component__["a" /* RewardComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_sketch_sketch_component__["a" /* SketchComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_reward_reward_component__["a" /* RewardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_offlinesketch_offlinesketch_component__["a" /* OfflinesketchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_ng2_uploader__["Ng2UploaderModule"],
                __WEBPACK_IMPORTED_MODULE_18_ng_scrollreveal__["a" /* NgsRevealModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_18_ng_scrollreveal__["a" /* NgsRevealModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/app.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(714),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/dashboard.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(715),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/home.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onloginsubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You Are logged In successfully", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['profile']);
                _this.authService.storeUserData(data.token, data.user);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(716),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/login.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(717),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/navbar.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflinesketchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OfflinesketchComponent = (function () {
    function OfflinesketchComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    OfflinesketchComponent.prototype.ngOnInit = function () {
        var aww = new AwwBoard('#aww-wrapper', {
            menuItems: {
                mySubMenu: {
                    style: { padding: '18px', background: 'red' },
                    submenu: [{
                            style: { padding: '18px', color: 'white' },
                            onclick: function () { aww.downloadBoardPicture(); },
                            content: '1'
                        }, {
                            style: { padding: '18px', color: 'white' },
                            onclick: function () { alert('Second'); },
                            content: '2'
                        }, {
                            style: { padding: '18px', color: 'white' },
                            onclick: function () { alert('Third'); },
                            content: '3'
                        }]
                }
            },
            menuOrder: ['colors', 'sizes', 'tools', 'admins', 'utils']
        });
    };
    OfflinesketchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-offlinesketch',
            template: __webpack_require__(718),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], OfflinesketchComponent);
    return OfflinesketchComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/offlinesketch.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.hasBaseDropZoneOver = false;
    }
    ProfileComponent.prototype.myfunchide = function () {
        display2();
    };
    ProfileComponent.prototype.myfunc = function () {
        display();
    };
    ProfileComponent.prototype.handleUpload = function (data) {
        console.log("handle me ayaa");
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data.imagepath;
            location.reload();
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (profile) {
            console.log(profile.pathtofrontend);
            if (profile.pathtofrontend != undefined) {
                _this.uploadFile = profile.pathtofrontend;
            }
            _this.user = profile.user;
            _this.authservice.setcoins(profile.user);
            _this.authservice.setpicture(_this.uploadFile);
            _this.options = {
                url: 'http://localhost:4001/users/picture',
                data: {
                    username: profile.user.username
                }
            };
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(719),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/profile.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authservice, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authservice = authservice;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onregistersubmit = function () {
        var _this = this;
        console.log("FUCKKKK");
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            reward: "100"
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill in all the fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authservice.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show("You are registered, and can Login", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Something wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(720),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/register.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RewardComponent = (function () {
    function RewardComponent(authservice) {
        this.authservice = authservice;
    }
    RewardComponent.prototype.ngOnInit = function () {
        this.picture = this.authservice.getpicture();
        this.myuser = this.authservice.getcoins();
    };
    RewardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reward',
            template: __webpack_require__(721),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], RewardComponent);
    return RewardComponent;
    var _a;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/reward.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SketchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SketchComponent = (function () {
    function SketchComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    SketchComponent.prototype.okboss = function () {
        ok();
    };
    SketchComponent.prototype.givereward = function () {
        givecoins();
        this.user.reward = String(parseInt(this.user.reward) + 500);
        this.authservice.setcoins(this.user);
        this.authservice.sendcoinstoserver(this.user).subscribe(function (data) {
            console.log(data.success);
        });
        //this.router.navigate(['/reward'])
    };
    SketchComponent.prototype.ngAfterViewInit = function () {
        this.user = this.authservice.getcoins();
        this.path = this.authservice.getpicture();
        var aww = new AwwBoard('#aww-wrapper', {
            menuItems: {
                mySubMenu: {
                    style: { padding: '18px', background: 'red' },
                    content: this.makeButton('http://www.entypo.com/images/folder.svg'),
                    submenu: [{
                            style: { padding: '18px', color: 'white' },
                            onclick: function () { aww.downloadBoardPicture(); },
                            content: '1'
                        }, {
                            style: { padding: '18px', color: 'white' },
                            onclick: function () { alert('Second'); },
                            content: '2'
                        }, {
                            style: { padding: '18px', color: 'white' },
                            onclick: function () { alert('Third'); },
                            content: '3'
                        }]
                }
            },
            menuOrder: ['colors', 'sizes', 'tools', 'admins', 'utils']
        });
    };
    SketchComponent.prototype.myHandler = function () {
        alert("hello world");
    };
    SketchComponent.prototype.makeButton = function (src) {
        var btnImg = document.createElement('img');
        btnImg.setAttribute('src', src);
        btnImg.setAttribute('width', '24px');
        btnImg.setAttribute('height', '24px');
        return btnImg;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], SketchComponent.prototype, "canvas", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paint'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object)
    ], SketchComponent.prototype, "paint", void 0);
    SketchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sketch',
            template: __webpack_require__(722),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SketchComponent);
    return SketchComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/sketch.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isloggedin()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/auth.guard.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/zia/Desktop/MyProjects/Group 3 Evaluation_phase/code/code/frontend-angular/src/environment.js.map

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "body{\n  margin-top:70px;\n  font-size:16px;\n}\n\nh1,h2,h3,h4,h5,h6{\n  font-family:Poppins;\n}\n\np{\n  font-family:Roboto;\n}\n\n.navbar-default{\n  background:#fff;\n  border:0;\n  font-family:Poppins;\n}\n\n.navbar-brand{\n  font-size:20px;\n  color:#000 !important;\n  font-weight:bold;\n}\n\n#showcase h1{\n  font-size:50px;\n  margin-bottom:20px;\n}\n\n#showcase img{\n  width:90%;\n  margin-left:60px;\n}\n\n#showcase .showcase-right{\n  margin-top:90px;\n}\n\n#testimonial{\n  background:#f1f1f1;\n  padding: 50px 0 30px 0;\n  text-align:center;\n  margin-top:40px;\n}\n\n#testimonial p{\n  font-size:32px;\n  font-family: 'Josefin Sans';\n  color:#000;\n}\n\n#testimonial p.customer{\n  font-size:20px;\n  color:#666;\n}\n\n#info1 .info-right{\n  margin-top:90px;\n}\n\n#info2{\n  margin:20px 0 60px 0;\n}\n\n#contact{\n  background:url(assets/image3.png);\n  padding:40px;\n  color:#fff;\n  border-top:#333 7px solid;\n  border-bottom:#333 7px solid;\n}\n\nfooter{\n  padding:30px;\n}\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ".card-container.card {\n    max-width: 350px;\n    padding: 35px 35px;\n}\n\n.btn {\n    font-weight: 700;\n    height: 36px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    cursor: default;\n}\n\n/*\n * Card component\n */\n.card {\n    background-color: #F7F7F7;\n    /* just in case there no content*/\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n    width: 100px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0 0;\n    min-height: 1em;\n}\n\n.reauth-email {\n    display: block;\n    color: #404040;\n    line-height: 2;\n    margin-bottom: 10px;\n    font-size: 14px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n    direction: ltr;\n    height: 50px;\n    font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    z-index: 1;\n    position: relative;\n    box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n    border-color: rgb(104, 145, 162);\n    outline: 1;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n    /*background-color: #4d90fe; */\n    background-color: rgb(104, 145, 162);\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n    background-color: rgb(12, 97, 33);\n\n}\n\n.forgot-password {\n    color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n    color: rgb(12, 97, 33);\n\n}"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "#mun:hover{\n\tcursor: pointer;\n\tcolor: black;\n}"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "/*#image{\n\tbackground-image: url(\"/assets/profile.jpg\"); \n\tbackground-size: cover;\n\tmin-width: 100%;\n\theight: 1000px;\n\n}\n#file{\n\tbackground-color: lightblue;\n}\n\n#prof{\n\tmargin-left: 100px;\n\tcolor: black;\n}\n\nimg.done{\n\n    \t\twidth: 100%;\n    \t\theight: auto;\n    \t}\n\nimg.done:hover{\n          \n           -webkit-transition: width 2s;\n       }\n\n.img{\n          \n          width:300px;\n          height:300px;\n      }*/"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ".card-container.card {\n    max-width: 350px;\n    padding: 35px 35px;\n}\n\n.btn {\n    font-weight: 700;\n    height: 36px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    cursor: default;\n}\n\n/*\n * Card component\n */\n.card {\n    background-color: #F7F7F7;\n    /* just in case there no content*/\n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n    width: 100px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n.profile-name-card {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0 0;\n    min-height: 1em;\n}\n\n.reauth-email {\n    display: block;\n    color: #404040;\n    line-height: 2;\n    margin-bottom: 10px;\n    font-size: 14px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n    direction: ltr;\n    height: 50px;\n    font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    z-index: 1;\n    position: relative;\n    box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n    border-color: rgb(104, 145, 162);\n    outline: 1;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin {\n    /*background-color: #4d90fe; */\n    background-color: rgb(104, 145, 162);\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n    background-color: rgb(12, 97, 33);\n\n}\n\n.forgot-password {\n    color: rgb(104, 145, 162);\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus{\n    color: rgb(12, 97, 33);\n\n}"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "h2 {\n  font: 400 100px/1.3 'Oleo Script', Helvetica, sans-serif;\n  color: red;\n  text-shadow: 4px 4px 0px rgba(0,0,0,0.1);\n  text-align: center;\n}\n\n.container{\n    background-color: black\n}*/\n/*css-anim-congratz*/\ndiv{margin:25px auto; width:700px;}\nspan{ margin-left:55px; width:53px; height:10px;display:block;border-radius:7px;\nfloat:left;}\n\nspan:nth-child(2n-1){background:red; -webkit-animation:bar1 0.8s infinite ease; animation:bar1 0.8s infinite ease;}\n\nspan:nth-child(2n){background:yellow;-webkit-animation:bar2 0.8s infinite ease;animation:bar2 0.8s infinite ease;}\n\n@-webkit-keyframes bar1{\n0%{background:red}100%{background:yellow}\n}\n\n@keyframes bar1{\n0%{background:red}100%{background:yellow}\n}\n\n@-webkit-keyframes bar2{\n0%{background:yellow}100%{background:red}\n}\n\n@keyframes bar2{\n0%{background:yellow}100%{background:red}\n}\n\n/*h2{clear:both;padding-top:15px; padding-left:15px;font-family:verdana;\n\nfont-size:1.25em;}*/"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ".card {\n  border-radius: 2px;\n  display: inline-block;\n  height: 300px;\n  margin: 1rem;\n  position: relative;\n  width: 300px;\n}\n\n\n#image{\n\tmargin-left: 80px;\n\tmargin-top: 10px;*/\n\theight: 40px;\n\twidth: 120px;\n}\n#coin{\n\tmargin-left: 900px;\n}\n#jum{\n\n\t\n\theight: 200px;\n}\n\n\n@import url(https://fonts.googleapis.com/css?family=Oswald:400,300);\n@import url(https://fonts.googleapis.com/css?family=Open+Sans);\nbody\n{\n    font-family: 'Open Sans', sans-serif;\n    }\n.popup-box {\n   background-color:#F7F7F7;\n    border: 1px solid #b0b0b0;\n    bottom: 0;\n    display: none;\n    height: 415px;\n    position: fixed;\n    right: 70px;\n    width: 300px;\n    font-family: 'Open Sans', sans-serif;\n}\n.round.hollow {\n    margin: 40px 0 0;\n}\n.round.hollow a {\n    border: 2px solid #ff6701;\n    border-radius: 35px;\n    color: red;\n    color: #ff6701;\n    font-size: 23px;\n    padding: 10px 21px;\n    text-decoration: none;\n    font-family: 'Open Sans', sans-serif;\n}\n.round.hollow a:hover {\n    border: 2px solid #000;\n    border-radius: 35px;\n    color: red;\n    color: #000;\n    font-size: 23px;\n    padding: 10px 21px;\n    text-decoration: none;\n}\n.popup-box-on {\n    display: block !important;\n}\n.popup-box .popup-head {\n    background-color: #F7F7F7;\n    clear: both;\n    color: #7b7b7b;\n    display: inline-table;\n    font-size: 21px;\n    padding: 7px 10px;\n    width: 100%;\n     font-family: Oswald;\n}\n.bg_none i {\n    border: 1px solid #ff6701;\n    border-radius: 25px;\n    color: #ff6701;\n    font-size: 17px;\n    height: 33px;\n    line-height: 30px;\n    width: 33px;\n}\n.bg_none:hover i {\n    border: 1px solid #000;\n    border-radius: 25px;\n    color: #000;\n    font-size: 17px;\n    height: 33px;\n    line-height: 30px;\n    width: 33px;\n}\n.bg_none {\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n    border: medium none;\n}\n.popup-box .popup-head .popup-head-right {\n    margin: 11px 7px 0;\n}\n.popup-box .popup-messages {\n}\n.popup-head-left img {\n    border: 1px solid #7b7b7b;\n    border-radius: 50%;\n    width: 44px;\n}\n.popup-messages-footer > textarea {\n    border-bottom: 1px solid #b2b2b2 !important;\n    height: 34px !important;\n    margin: 7px;\n    padding: 5px !important;\n     border: medium none;\n    width: 95% !important;\n}\n.popup-messages-footer {\n    background: #fff none repeat scroll 0 0;\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n}\n.popup-messages-footer .btn-footer {\n    overflow: hidden;\n    padding: 2px 5px 10px 6px;\n    width: 100%;\n}\n.simple_round {\n    background: #d1d1d1 none repeat scroll 0 0;\n    border-radius: 50%;\n    color: #4b4b4b !important;\n    height: 21px;\n    padding: 0 0 0 1px;\n    width: 21px;\n}\n\n\n\n\n\n.popup-box .popup-messages {\n    background:#F7F7F7 none repeat scroll 0 0;\n    height: 275px;\n    overflow: auto;\n}\n.direct-chat-messages {\n    overflow: auto;\n    padding: 10px;\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px);\n    \n}\n.popup-messages .chat-box-single-line {\n    border-bottom: 1px solid #a4c6b5;\n    height: 12px;\n    margin: 7px 0 20px;\n    position: relative;\n    text-align: center;\n}\n.popup-messages abbr.timestamp {\n    background: #3f9684 none repeat scroll 0 0;\n    color: #fff;\n    padding: 0 11px;\n}\n\n.popup-head-right .btn-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n\tmargin: 0 8px 0 0;\n\tvertical-align: top !important;\n}\n.chat-header-button {\n    background: transparent none repeat scroll 0 0;\n    border: 1px solid #636364;\n    border-radius: 50%;\n    font-size: 14px;\n    height: 30px;\n    width: 30px;\n}\n.popup-head-right .btn-group .dropdown-menu {\n    border: medium none;\n    min-width: 122px;\n\tpadding: 0;\n}\n.popup-head-right .btn-group .dropdown-menu li a {\n    font-size: 12px;\n    padding: 3px 10px;\n\tcolor: #303030;\n}\n\n.popup-messages abbr.timestamp {\n    background: #3f9684  none repeat scroll 0 0;\n    color: #fff;\n    padding: 0 11px;\n}\n.popup-messages .chat-box-single-line {\n    border-bottom: 1px solid #a4c6b5;\n    height: 12px;\n    margin: 7px 0 20px;\n    position: relative;\n    text-align: center;\n}\n.popup-messages .direct-chat-messages {\n    height: auto;\n}\n.popup-messages .direct-chat-text {\n    background: #dfece7 none repeat scroll 0 0;\n    border: 1px solid #dfece7;\n    border-radius: 2px;\n    color: #1f2121;\n}\n\n.popup-messages .direct-chat-timestamp {\n    color: #fff;\n    opacity: 0.6;\n}\n\n.popup-messages .direct-chat-name {\n\tfont-size: 15px;\n\tfont-weight: 600;\n\tmargin: 0 0 0 49px !important;\n\tcolor: #fff;\n\topacity: 0.9;\n}\n.popup-messages .direct-chat-info {\n    display: block;\n    font-size: 12px;\n    margin-bottom: 0;\n}\n.popup-messages  .big-round {\n    margin: -9px 0 0 !important;\n}\n.popup-messages  .direct-chat-img {\n    border: 1px solid #fff;\n\tbackground: #3f9684  none repeat scroll 0 0;\n    border-radius: 50%;\n    float: left;\n    height: 40px;\n    margin: -21px 0 0;\n    width: 40px;\n}\n.direct-chat-reply-name {\n    color: #fff;\n    font-size: 15px;\n    margin: 0 0 0 10px;\n    opacity: 0.9;\n}\n\n.direct-chat-img-reply-small\n{\n    border: 1px solid #fff;\n    border-radius: 50%;\n    float: left;\n    height: 20px;\n    margin: 0 8px;\n    width: 20px;\n\tbackground:#3f9684;\n}\n\n.popup-messages .direct-chat-msg {\n    margin-bottom: 10px;\n    position: relative;\n}\n\n.popup-messages .doted-border::after {\n\tbackground: transparent none repeat scroll 0 0 !important;\n    border-right: 2px dotted #fff !important;\n\tbottom: 0;\n    content: \"\";\n    left: 17px;\n    margin: 0;\n    position: absolute;\n    top: 0;\n    width: 2px;\n\t display: inline;\n\t  z-index: -2;\n}\n\n.popup-messages .direct-chat-msg::after {\n    background: #fff none repeat scroll 0 0;\n    border-right: medium none;\n    bottom: 0;\n    content: \"\";\n    left: 17px;\n    margin: 0;\n    position: absolute;\n    top: 0;\n    width: 2px;\n\t display: inline;\n\t  z-index: -2;\n}\n.direct-chat-text::after, .direct-chat-text::before {\n   \n    border-color: transparent #dfece7 transparent transparent;\n    \n}\n.direct-chat-text::after, .direct-chat-text::before {\n    -moz-border-bottom-colors: none;\n    -moz-border-left-colors: none;\n    -moz-border-right-colors: none;\n    -moz-border-top-colors: none;\n    border-color: transparent #d2d6de transparent transparent;\n    -o-border-image: none;\n       border-image: none;\n    border-style: solid;\n    border-width: medium;\n    content: \" \";\n    height: 0;\n    pointer-events: none;\n    position: absolute;\n    right: 100%;\n    top: 15px;\n    width: 0;\n}\n.direct-chat-text::after {\n    border-width: 5px;\n    margin-top: -5px;\n}\n.popup-messages .direct-chat-text {\n    background: #dfece7 none repeat scroll 0 0;\n    border: 1px solid #dfece7;\n    border-radius: 2px;\n    color: #1f2121;\n}\n.direct-chat-text {\n    background: #d2d6de none repeat scroll 0 0;\n    border: 1px solid #d2d6de;\n    border-radius: 5px;\n    color: #444;\n    margin: 5px 0 0 50px;\n    padding: 5px 10px;\n    position: relative;\n}\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar> </app-navbar>  -->\n<flash-messages> </flash-messages>\n<router-outlet>  </router-outlet>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<!-- <!DOCTYPE html>\n<html>\n \n   \n    \n    \n   \n \n  <body>\n   \n\n    <section id=\"showcase\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"showcase-left\" [ngsReveal]=\"{  duration: 2000,\n          origin:'right',\n          distance:'300px'}\">\n              <img src=\"assets/image1.jpg\">\n            </div>\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"showcase-right\">\n              <h1>Hands-free help from the Google Assistant</h1>\n              <p>Google Home voice-activated speaker.consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>\n            </div>\n            <br>\n            <a class=\"btn btn-primary\">Read More</a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"testimonial\">\n      <div class=\"container\">\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\"</p>\n        <p id =\"Monu\" class=\"customer\">- John Doe</p>\n      </div>\n    </section>\n\n    <section id=\"info1\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"info-left\">\n              <img src=\"assets/image2.png\">\n            </div>\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"info-right\">\n              <h2>Get To Know Google Home</h2>\n              <p>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>\n              <br>\n              <a class=\"btn btn-default btn-lg\">Read More</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <hr>\n    <section id=\"info2\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"info-left\">\n              <h2>Info Block One</h2>\n              <p>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n            <div class=\"info-right\">\n              <h2>Info Block Two</h2>\n              <p>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"contact\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-5 col-sm-5\">\n            <form>\n              <div class=\"form-group\">\n                <label>Name: </label>\n                <input class=\"form-control\" type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Name\">\n              </div>\n              <div class=\"form-group\">\n                <label>Email: </label>\n                <input class=\"form-control\" type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Email\">\n              </div>\n              <div class=\"form-group\">\n                <label>Message: </label>\n                <textarea class=\"form-control\" name=\"\" value=\"\" placeholder=\"Enter Message\"></textarea>\n              </div>\n              <button class=\"btn btn-default\">Submit</button>\n            </form>\n          </div>\n          <div class=\"col-md-7 col-sm-7\">\n\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <footer>\n      <p class=\"text-center\">TechScroll Copyright &copy; 2017</p>\n    </footer>\n\n   \n    \n\n    <script>\n  \n        window.sr = ScrollReveal();\n        sr.reveal('.navbar', {\n          duration: 2000,\n          origin:'bottom'\n        });\n        sr.reveal('.showcase-left', {\n          duration: 2000,\n          origin:'top',\n          distance:'300px'\n        });\n        sr.reveal('.showcase-right', {\n          duration: 2000,\n          origin:'right',\n          distance:'300px'\n        });\n        sr.reveal('.showcase-btn', {\n          duration: 2000,\n          delay: 2000,\n          origin:'bottom'\n        });\n        sr.reveal('#testimonial div', {\n          duration: 2000,\n          origin:'bottom'\n        });\n        sr.reveal('.info-left', {\n          duration: 2000,\n          origin:'left',\n          distance:'300px',\n          viewFactor: 0.2\n        });\n        sr.reveal('.info-right', {\n          duration: 2000,\n          origin:'right',\n          distance:'300px',\n          viewFactor: 0.2\n        });\n    </script>\n\n    <script>\n    $(function() {\n      // Smooth Scrolling\n      $('a[href*=\"#\"]:not([href=\"#\"])').click(function() {\n        if (location.pathname.replace(/^\\//,'') == this.pathname.replace(/^\\//,'') && location.hostname == this.hostname) {\n          var target = $(this.hash);\n          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');\n          if (target.length) {\n            $('html, body').animate({\n              scrollTop: target.offset().top\n            }, 1000);\n            return false;\n          }\n        }\n      });\n    });\n    </script>\n  </body>\n</html>\n -->\n\n <div class = \"jumbotron\" id = \"jum\">\n <div class = \"row\">\n<div class= \"col-md-4\">\n <img src=\"/assets/coins.png\"> <strong> = 1000</strong>\n</div>\n<div class = \"col-md-4\">\n\n<h1> Your Projects <i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i> </h1>\n</div>\n</div>\n</div>\n\n<div class = \"row\">\n<div class = \"col-md-4\">\n\n<div class=\"card\" style=\"width: 20rem;\" [ngsReveal]=\"{ duration: 2000,\n          origin:'left',\n          distance:'300px',\n          viewFactor: 0.2}\">\n  <a href=\"https://www.google.com.pk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjSkrW2z-zWAhXCfxoKHYyZB1sQFgglMAA&url=https%3A%2F%2Fnodejs.org%2F&usg=AOvVaw1tY2p-vJFWJmxWlq4sTxCn\"><img class=\"card-img-top\" src=\"/assets/flag.jpg\" alt=\"Card image cap\"> </a>\n  <div class=\"card-body\">\n  <h4 class=\"card-title\">Flag</h4>\n    <p class=\"card-text\"> Project Number 1, <button class = \"btn btn-primary\"> Open </button></p>\n  </div>\n</div>\n</div>\n\n<div class = \"col-md-4\">\n<div class=\"card\" style=\"width: 20rem;\" [ngsReveal]=\"{duration: 2000,\n          origin:'bottom'}\">\n   <a href = \"https://www.google.com.pk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi3tNO4z-zWAhUCVhoKHeRDDXgQFgglMAA&url=https%3A%2F%2Fcli.angular.io%2F&usg=AOvVaw1oiYSKPEynJi7TY-r5UqLC\"><img style=\"height:220px;\" class=\"card-img-top\" src=\"/assets/tennisball.jpg\" alt=\"Card image cap\"> </a>\n  <div class=\"card-body\">\n  <h4 class=\"card-title\">Ball</h4>\n    <p class=\"card-text\"> Project Number 2, <button class = \"btn btn-primary\"> Open </button> </p>\n  </div>\n</div>\n\n</div>\n\n<div class = \"col-md-4\">\n<div class=\"card\" style=\"width: 20rem;\" [ngsReveal]=\"{duration: 2000,\n          origin:'bottom'}\">\n  <div class=\"card-body\">\n    <p class=\"card-text\"><button class = \"btn btn-primary\"> Add More Projects </button> </p>\n  </div>\n</div>\n\n</div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "\n\n\n<!--  SOHAIB -->\n\n\n<div id=\"wrapper\" class=\"homepage\">\n    <div class=\"wrapper-holder\">\n     <!--  <header id=\"header\">\n        <div class=\"left-part\"></div>\n        <a id=\"logo\" [routerLink] = \"['/']\">Sparkle Crowd</a>\n        <div class=\"bar-holder\">\n          <a class=\"menu_trigger\" href=\"#\">menu</a>\n          <nav id=\"nav\">\n            <ul>\n              \n              <li ><a [routerLink] = \"['/login']\" >Log In</a></li>\n              <li ><a [routerLink] = \"['/register']\" >Register</a></li>\n              <li><a [routerLink] = \"['/']\">About Us</a></li>\n              <li ><a [routerLink] = \"['/offlinesketch']\" >Offline Sketch</a></li>\n            </ul>\n          </nav>\n        </div>\n      </header> -->\n      <app-navbar></app-navbar>\n      <section class=\"promo\">\n        <div class=\"slider-wrap\">\n          <ul class=\"slider\">\n          <img class=\"slide\" src=\"assets/images/img-slide01.jpg\" alt=\"\" style=\"width: 100%\">\n            <!-- <li>\n              \n              <img class=\"slide-mask\" src=\"images/bg_slider-mask.png\" alt=\"\">\n              <div class=\"slide-info\">\n                <h1><a href=\"#\">Crowd-Sourcing for Kids</a></h1>\n                <p style=\"color:black;\"><strong>A place where you can be in control of your imaginations and dreams</strong></p>\n              </div>\n            </li> -->\n          </ul>\n        </div>\n      </section>\n      <section id=\"main\">\n        <div class=\"widget-boxes\">\n          <div class=\"box\" [ngsReveal]=\"{ duration:2000,\n          origin:'left',\n          distance:'300px'}\">\n            <a href=\"#\">\n              <div class=\"box-info about\">\n                <h2>About the Website</h2>\n                <p>Crowd-sourcing Platform for superheroes of the Future.</p>\n              </div>\n            </a>\n          </div>\n          <div class=\"box\" [ngsReveal]=\"{ duration: 2000,\n          origin:'top',\n          distance:'300px'}\">\n            <a href=\"#\">\n              <div class=\"box-info experience\">\n                <h2>Our experience</h2>\n                <p>Have helped create a lot of projects and helped a lot of children with their design process</p>\n              </div>\n            </a>\n          </div>\n          <div class=\"box\" [ngsReveal]=\"{ duration: 2000,\n          origin:'right',\n          distance:'300px'}\">\n            <a href=\"#\">\n              <div class=\"box-info fun\">\n                <h2>Rewards for kids!</h2>\n                <p>Earn coins and badges. Leveling up children's rank and helping them interact more.</p>\n              </div>\n            </a>\n          </div>\n        </div>\n        <div class=\"top-pink-border\"></div>\n        <div class=\"event-wrap\">\n          <div class=\"block-event\">\n            <div class=\"upcoming-event\">\n              <h2>Monthly Project Submissions</h2>\n              <div class=\"event-description\">\n                <h3>Recently Submitted</h3>\n                <div class=\"metadata\">\n                  <time datetime=\"2017-12-17T09:00\">17.12.17 \n                  <span>09:00 PM</span></time>\n                  <span>Lahore</span>\n                </div>\n                <p>Mr. Usman submitted his project yesterday. You can add your coloring and drawing superpowers to his project as well. You just need to click below </p>\n                <a class=\"btn yellow\" href=\"#\">See Project</a>\n              </div>\n            </div>\n            <div class=\"widget-calendar\">\n              <table class=\"event-calendar\">\n                <!-- <col><col><col><col><col><col><col> -->\n                <thead>\n                <tr>\n                  <th scope=\"col\" class=\"controls\"><span class=\"prev-mn\"><a href=\"#\">-</a></span></th>\n                  <th scope=\"col\" colspan=\"5\" class=\"month\">December 2017</th>\n                  <th scope=\"col\" class=\"controls\"><span class=\"next-mn\"><a href=\"#\">-</a></span></th>\n                </tr>\n                <tr>\n                  <th scope=\"col\" title=\"Monday\">Mon</th>\n                  <th scope=\"col\" title=\"Tuesday\">Tue</th>\n                  <th scope=\"col\" title=\"Wednesday\">Wed</th>\n                  <th scope=\"col\" title=\"Thursday\">Thu</th>\n                  <th scope=\"col\" title=\"Friday\">Fri</th>\n                  <th scope=\"col\" title=\"Saturday\">Sat</th>\n                  <th scope=\"col\" title=\"Sunday\">Sun</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td><div class=\"cell-wrap another-day\">31</div></td><td><div class=\"cell-wrap\">1</div></td><td><div class=\"cell-wrap\">2</div></td><td><div class=\"cell-wrap\">3</div></td><td><div class=\"cell-wrap\">4</div></td><td><div class=\"cell-wrap\">5</div></td>\n                  <td><div class=\"cell-wrap archival sun\">\n                      <a href=\"#\">6</a>\n                      <div class=\"tooltip\">\n                        <div class=\"event-tooltip\">\n                          <h4>Pakistani Flag</h4>\n                          <div class=\"metadata\">\n                            <time datetime=\"2017-12-06T03:30\">06.12.17 \n                            <span>03:30 PM</span></time>\n                            <span class=\"place\">Islamabad</span>\n                          </div>\n                          <p>Muneeb submitted an amazing masterpiece of Pakistani Flag with vibrant colors and great artwork</p>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><div class=\"cell-wrap\">7</div></td><td><div class=\"cell-wrap\">8</div></td>\n                  <td><div class=\"cell-wrap archival wed\">\n                      <a href=\"#\">9</a>\n                      <div class=\"tooltip\">\n                        <div class=\"event-tooltip\">\n                          <h4>Dinosaur Drama</h4>\n                          <div class=\"metadata\">\n                            <time datetime=\"2017-12-09T06:30\">09.12.17 \n                            <span>06:30 PM</span></time>\n                            <span class=\"place\">Sahiwal</span>\n                          </div>\n                          <p>Wanna see cool ass Dinosaurs?? Shoaib made an amazing drawing of a herbivore (Dinosaurs that eat green vegetables)</p>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                  <td><div class=\"cell-wrap\">10</div></td><td><div class=\"cell-wrap\">11</div></td>\n                  <td><div class=\"cell-wrap archival sat\">\n                      <a href=\"#\">12</a>\n                      <div class=\"tooltip\">\n                        <div class=\"event-tooltip\">\n                          <h4>Wooden house</h4>\n                          <div class=\"metadata\">\n                            <time datetime=\"2017-12-12T09:00\">12.12.17 \n                            <span>09:00 AM</span></time>\n                            <span class=\"place\">Abbottabad</span>\n                          </div>\n                          <p>An amazing wooden house built by awais is cool. It is entirely made out of popsicle sticks. Check it out!!!</p>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                  <td><div class=\"cell-wrap\">13</div></td>\n                </tr>\n                <tr>\n                  <td><div class=\"cell-wrap\">14</div></td><td><div class=\"cell-wrap\">15</div></td><td><div class=\"cell-wrap\">16</div></td>\n                  <td><div class=\"cell-wrap upcoming thu\">\n                      <a href=\"#\">17</a>\n                      <div class=\"tooltip\">\n                        <div class=\"event-tooltip\">\n                          <h4>Teacher Student Awesomeness</h4>\n                          <div class=\"metadata\">\n                            <time datetime=\"2017-12-17T10:25\">17.12.17 \n                            <span>10:25 AM</span></time>\n                            <span class=\"place\">Lahore</span>\n                          </div>\n                          <p>Beconhouse Liberty Lahore's student teacher team came up with the cooles project ever. Check out for further deatils friend!!!</p>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                  <td><div class=\"cell-wrap\">18</div></td><td><div class=\"cell-wrap\">19</div></td><td><div class=\"cell-wrap\">20</div></td>\n                </tr>\n                <tr>\n                  <td><div class=\"cell-wrap\">21</div></td>\n                  <td><div class=\"cell-wrap upcoming tue\">\n                      <a href=\"#\">22</a>\n                      <div class=\"tooltip\">\n                        <div class=\"event-tooltip\">\n                          <h4>Play Dough Human</h4>\n                          <div class=\"metadata\">\n                            <time datetime=\"2017-12-22T09:00\">22.12.17 \n                            <span>09:00 PM</span></time>\n                            <span class=\"place\">Faisalabad</span>\n                          </div>\n                          <p>A human figure made out of play dough</p>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                  <td><div class=\"cell-wrap\">23</div></td><td><div class=\"cell-wrap\">24</div></td>\n                  <td><div class=\"cell-wrap upcoming fri\">\n                      <a href=\"#\">25</a>\n                      <div class=\"tooltip\">\n                        <div class=\"event-tooltip\">\n                          <h4>Debate Competition Speech</h4>\n                          <div class=\"metadata\">\n                            <time datetime=\"2017-12-25T09:00\">25.12.17 \n                            <span>7:30 PM</span></time>\n                            <span class=\"place\">Lahore</span>\n                          </div>\n                          <p>Help Uzma with her debate competition speech and be her superhero.</p>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                  <td><div class=\"cell-wrap\">26</div></td><td><div class=\"cell-wrap\">27</div></td>\n                </tr>\n                <tr><td><div class=\"cell-wrap\">28</div></td>\n                  <td><div class=\"cell-wrap\">29</div></td><td><div class=\"cell-wrap\">30</div></td><td><div class=\"cell-wrap another-day\">1</div></td><td><div class=\"cell-wrap another-day\">2</div></td><td><div class=\"cell-wrap another-day\">3</div></td><td><div class=\"cell-wrap another-day\">4</div></td>\n                </tr>\n                </tbody>\n              </table>\n              <div class=\"legend\"><span class=\"upcoming\">Recently Edited</span><span class=\"archival\">Final Submissions</span> </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bottom-pink-border\"></div>\n          <div class=\"widget-boxes news\">\n            <h2>Latest news</h2>\n            <div class=\"box\" [ngsReveal]=\"{ duration: 2000,\n          origin:'right',\n          distance:'300px'}\">\n              <a class=\"news-img\" href=\"#\">\n                <img src=\"assets/images/image1.jpg\" alt=\"\" />\n                <div class=\"mask\"></div>\n              </a>\n              <div class=\"box-info\">\n                <h3><a href=\"#\">Student Teacher Project</a></h3>\n                <div class=\"metadata\">\n                  <time datetime=\"2017-12-17\">17.12.17</time>\n                  <span>Ms. Kalsoom and Umar Farooq</span>\n                </div>\n                <p>Student and teachers of beaconhouse Liberty Lahore start an amazing project. For further details click on the picture</p>\n              </div>\n            </div>\n            <div class=\"box\" [ngsReveal]=\"{ duration: 2000,\n          origin:'top',\n          distance:'300px'}\">\n              <a class=\"news-img\" href=\"#\">\n                <img src=\"assets/images/image2.jpg\" alt=\"\" />\n                <div class=\"mask\"></div>\n              </a>\n              <div class=\"box-info\">\n                <h3><a href=\"#\">Superhero Conference</a></h3>\n                <div class=\"metadata\">\n                  <time datetime=\"2017-12-16\">16.12.17</time>\n                  <span>Suleman Shahid</span>\n                </div>\n                <p>A conference where children interacted with other children and discussed their ideas for future. Click for more details </p>\n              </div>\n            </div>\n            <div class=\"box\" [ngsReveal]=\"{ duration: 2000,\n          origin:'right',\n          distance:'300px'}\">\n              <a class=\"news-img\" href=\"#\">\n                <img src=\"assets/images/image3.jpg\" alt=\"\" />\n                <div class=\"mask\"></div>\n              </a>\n              <div class=\"box-info\">\n                <h3><a href=\"#\">Coin Combo</a></h3>\n                <div class=\"metadata\">\n                  <time datetime=\"2017-12-13\">13.12.17</time>\n                  <span>CodeSol</span>\n                </div>\n                <p>Coin Combo!!!!!!. The coin combo contains 1500 coins and one badge for completion of one project. Complete your project before combo ends</p>\n              </div>\n            </div>\n          </div>\n      </section>\n    </div>\n    <div class=\"top-blue-border\"></div>\n    <footer id=\"footer\">\n      <div class=\"footer-holder\">\n        <div class=\"footer-frame\">\n          <div class=\"footer-content\">\n            <div class=\"col-holder\">\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Our address</h3>\n                  <address class=\"map\">Street No.6 Phase 5 DHA,LUMS,Lahore</address>\n                  <address class=\"mail\"><a href=\"mailto:contact@kidschool.com\">Sparklecrowd@gmail.com</a></address>\n                  <address class=\"phone\">(92) 322 9914855</address>\n                </div>\n              </div>\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Follow us</h3>\n                  <ul class=\"social\">\n                    <li><a class=\"facebook\" href=\"#\">Facebook</a></li>\n                    <li><a class=\"google\" href=\"#\">Google+</a></li>\n                    <li><a class=\"twitter\" href=\"#\">Twitter</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-bottom\">\n            <div class=\"holder\">\n              <p>Copyright 2017 CodeSol. All rights reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer> \n  </div>\n\n\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "\n<!-- <section class=\"hero\" >\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12\" [ngsReveal]=\"{ duration: 2000,\n          origin:'right',\n          distance:'300px'}\">\n                        <div class=\"card border-none\">\n                            <div class=\"card-block\">\n                                <div class=\"mt-2 text-center\">\n                                    \n                                </div>\n                                <p class=\"mt-4 text-white lead text-center\">\n                                    LogIn-Form\n                                </p>\n                                <div class=\"mt-4\">\n                                    <form (submit) = \"onloginsubmit()\">\n                                        <div class=\"form-group\">\n                                           <input type=\"text\" [(ngModel)] = \"username\" name=\"username\" class=\"form-control\" id=\"username\"\n                               placeholder=\"Username\" autofocus>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input type=\"password\" [(ngModel)] = \"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                               placeholder=\"Password\" >\n                                        </div>\n                                        \n                                        <button type=\"submit\" class=\"btn btn-primary btn-block\">Login </button>\n                                        </form>\n                                    <div class=\"clearfix\"></div>\n                                    <p class=\"content-divider center mt-4\"><span>or</span></p>\n                                </div>\n                                <p class=\"mt-4 social-login text-center\">\n                                    \n                                   <a href=\"facebook.com\" class=\"btn btn-lg btn-social btn-facebook\">\n                                    <i class=\"fa fa-facebook fa-fw\"></i></a>\n\n                                    <a href=\"twitter.com\" class=\"btn btn-lg btn-social btn-twitter\">\n                                    <i class=\"fa fa-twitter fa-fw\"></i></a>\n\n                                    <a href=\"google.com\" class=\"btn btn-lg btn-social btn-google\">\n                                    <i class=\"fa fa-google fa-fw\"></i></a>\n\n                                    <a href=\"github.com\" class=\"btn btn-lg btn-social btn-github\">\n\n                                    <i class=\"fa fa-github fa-fw\"></i></a>\n                                    \n                                </p>\n                               \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    \n                </div>\n            </div>\n        </section> -->\n\n        <!-- <div class = \"container\">\n<form (submit)=\"onloginsubmit()\" name=\"login-form\" class=\"login-form\" action=\"\" method=\"post\"[ngsReveal]=\"{ duration: 1700,\n          origin:'right',\n          distance:'300px'}\">\n    <div class=\"header\">\n    <h1>LOG IN</h1>\n    <span style=\"color:white; font-size:15px;\">Enter username and password</span>\n    </div>\n  \n    <div class=\"content\">\n    <input [(ngModel)] = \"username\" name=\"username\" type=\"text\" class=\"input username\" placeholder=\"Username\"  required />\n    <div class=\"user-icon\"></div>\n    <input [(ngModel)] = \"password\" name=\"password\" type=\"password\" class=\"input password\" placeholder=\"Password\" required />\n    <div class=\"pass-icon\"></div>   \n    </div>\n\n    <div class=\"footer\">\n    <div (click) = \"onloginsubmit()\" type =\"submit\" class=\"blue button\">Login</div>\n    </div>\n  \n  </form>\n  </div> -->\n\n  <div id=\"wrapper\" class=\"homepage\">\n    <div class=\"wrapper-holder\">\n      <!-- <header id=\"header\">\n        <div class=\"left-part\"></div>\n        <a id=\"logo\" [routerLink] = \"['/']\">Sparkle Crowd</a>\n        <div class=\"bar-holder\">\n          <a class=\"menu_trigger\" href=\"#\">menu</a>\n          <nav id=\"nav\">\n            <ul>\n              \n              <li [routerLinkActive]=\"['active']\"><a [routerLink] = \"['/login']\" >Log In</a></li>\n              <li [routerLinkActive]=\"['active']\"><a [routerLink] = \"['/register']\" >Register</a></li>\n             <li><a [routerLink] = \"['/register']\">About Us</a></li>\n              <li [routerLinkActive]=\"['active']\"><a [routerLink] = \"['/offlinesketch']\" >Offline Sketch</a></li>\n            </ul>\n          </nav>\n        </div>\n      </header> -->\n       <app-navbar></app-navbar>\n      <!-- <section class=\"promo\">\n        <div class=\"slider-wrap\">\n          <ul class=\"slider\">\n          <img class=\"slide\" src=\"assets/images/img-slide01.jpg\" alt=\"\" style=\"width: 100%\"> -->\n\n\n<div class=\"container\" [ngsReveal]=\"{ duration: 1700,\n          origin:'right',\n          distance:'300px'}\">\n        <div class=\"card card-container\">\n            <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n            <!-- <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/face.png\" /> -->\n            <p id=\"profile-name\" class=\"profile-name-card\"> Login</p>\n            <form class=\"form-signin\">\n                <span id=\"reauth-email\" class=\"reauth-email\"></span>\n                <input [(ngModel)] = \"username\" name=\"username\" type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\" UserName\" required autofocus>\n                <input [(ngModel)] = \"password\" name=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\" Password\" required>\n                <!-- <div id=\"remember\" class=\"checkbox\">\n                </div> -->\n               <!--  <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button> -->\n                <div (click) = \"onloginsubmit()\" type =\"submit\" class=\"blue button\">Login</div>\n            </form><!-- /form -->\n        </div><!-- /card-container -->\n</div>\n</div>\n    <div class=\"top-blue-border\"></div>\n    <footer id=\"footer\">\n      <div class=\"footer-holder\">\n        <div class=\"footer-frame\">\n          <div class=\"footer-content\">\n            <div class=\"col-holder\">\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Our address</h3>\n                  <address class=\"map\">Street No.6 Phase 5 DHA,LUMS,Lahore</address>\n                  <address class=\"mail\"><a href=\"mailto:contact@kidschool.com\">Sparklecrowd@gmail.com</a></address>\n                  <address class=\"phone\">(92) 322 9914855</address>\n                </div>\n              </div>\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Follow us</h3>\n                  <ul class=\"social\">\n                    <li><a class=\"facebook\" href=\"#\">Facebook</a></li>\n                    <li><a class=\"google\" href=\"#\">Google+</a></li>\n                    <li><a class=\"twitter\" href=\"#\">Twitter</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-bottom\">\n            <div class=\"holder\">\n              <p>Copyright 2017 CodeSol. All rights reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer> \n  </div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" [ngsReveal]=\"{ duration: 2000,\n          origin:'bottom'}\">\n  <a class=\"navbar-brand\"[routerLink] = \"['/']\">SparkleCrowd</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto navbar-left\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a class=\"nav-link\"  [routerLink] = \"['/']\">Home </a>\n      </li>\n      \n    </ul>\n\t<form class=\"form-inline my-2 my-lg-0\" style=\"margin-right: 300px\">\n      <input  class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>    \n    \n    <ul class = \"navbar-nav navbar-right\">\n    <li *ngIf=\"authService.isloggedin()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" >\n        <a class=\"nav-link\" [routerLink] = \"['/login']\">Login</a>\n     </li>\n     <li *ngIf=\"authService.isloggedin()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" >\n        <a class=\"nav-link\" [routerLink] = \"['/register']\">Register</a>\n     </li>\n     <li *ngIf=\"!authService.isloggedin()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" >\n        <a class=\"nav-link\" [routerLink] = \"['/profile']\">Profile</a>\n     </li>\n     <li *ngIf=\"!authService.isloggedin()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink] = \"['/dashboard']\">My Projects</a>\n     </li>\n\n      <li *ngIf=\"!authService.isloggedin()\" class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink] = \"['/sketch']\">Sketch</a>\n     </li>\n\n     <li *ngIf=\"!authService.isloggedin()\" class=\"nav-item\" >\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n     </li>\n\n    </ul>\n    \n  </div>\n</nav> -->\n<!-- \n<nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Project name</a>\n          </div>\n          <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"active\"><a href=\"#\">Home</a></li>\n              <li><a href=\"#\">About</a></li>\n              <li><a href=\"#\">Contact</a></li>\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li role=\"separator\" class=\"divider\"></li>\n                  <li class=\"dropdown-header\">Nav header</li>\n                  <li><a href=\"#\">Separated link</a></li>\n                  <li><a href=\"#\">One more separated link</a></li>\n                </ul>\n              </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"active\"><a href=\"./\">Default <span class=\"sr-only\">(current)</span></a></li>\n              <li><a href=\"../navbar-static-top/\">Static top</a></li>\n              <li><a href=\"../navbar-fixed-top/\">Fixed top</a></li>\n            </ul>\n          </div>\n                  </div>\n      </nav> -->\n\n    <!--   <div class=\"container-fluid\">\n    <div class=\"row\">\n        \n      <div class=\"header-nav-wrapper\"> -->\n          \n        <!-- LOGO NEEDS TO BE FOUND WITH COLLABORATION -->\n\n      <!--   <div class=\"logo\"> -->\n\n         <!-- <img width=\"225\" height=\"35\" src=\"assets/tennisball.jpg\" alt=\"Synthetica Freebie\"> -->\n         \n     <!--     <div id=\"mun\" style=\"font-size: 35px;color:white;\" [routerLink] = \"['/']\"> Sparkle Crowd </div>\n        </div>\n        <div class=\"primary-nav-wrapper\">\n      \n          <nav>\n            <ul class=\"primary-nav\">\n              <li *ngIf=\"!authService.isloggedin()\" class = \"animated bounce\"> <a id=\"mun\">About Us </a></li>\n              <li *ngIf=\"!authService.isloggedin()\" class = \"animated bounce\"><a target=\"_blank\" id=\"mun\" href=\"https://en.wikipedia.org/wiki/Crowdsourcing\">Crowd-sourcing</a></li>\n            \n              \n\n              <li *ngIf=\"authService.isloggedin()\" [routerLink] = \"['/profile']\"  class = \"animated bounce\"> <a id=\"mun\">Profile </a></li>\n              <li *ngIf=\"authService.isloggedin()\" [routerLink] = \"['/dashboard']\" class = \"animated bounce\"><a id=\"mun\">Projects</a></li>\n            \n              <li *ngIf=\"authService.isloggedin()\" [routerLink] = \"['/sketch']\" class = \"animated bounce\"><a id=\"mun\">Sketch</a></li>\n              <li *ngIf=\"authService.isloggedin()\" [routerLink] = \"['/sketch']\" class = \"animated bounce\"><a id=\"mun\">Chat</a></li>\n            </ul>\n          </nav>\n          <div class=\"secondary-nav-wrapper\">\n            <ul class=\"secondary-nav\">\n            <li *ngIf=\"!authService.isloggedin()\" class=\"subscribe\"><a href=\"\"><i class=\"fa fa-home fa-3x\" aria-hidden=\"true\"></i></a></li>\n             <li *ngIf=\"authService.isloggedin()\" class=\"subscribe\"><a style=\"color:white; font-size:16px;\" (click)=\"onLogoutClick()\" href=\"\">LogOut</a></li>\n              \n              \n            </ul>\n          </div>\n          <div class=\"search-wrapper\">\n            <ul class=\"search\">\n              <li>\n                <input type=\"text\" id=\"search-input\" placeholder=\"Start typing then hit enter to search\">\n              </li>\n              <li>\n                <a href=\"#\" class=\"hide-search\"><i class=\"fa fa-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"navicon\">\n          <a class=\"nav-toggle\" href=\"#\"><span></span></a>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <header id=\"header\">\n        <div class=\"left-part\"></div>\n        <a id=\"logo\" [routerLink] = \"['/']\">Sparkle Crowd</a>\n        <div class=\"bar-holder\">\n          <a class=\"menu_trigger\" href=\"#\">menu</a>\n          <nav id=\"nav\">\n            <ul>\n              \n              <li *ngIf=\"!authService.isloggedin()\"><a [routerLink] = \"['/login']\" >Log In</a></li>\n              <li *ngIf=\"!authService.isloggedin()\" ><a [routerLink] = \"['/register']\" >Register</a></li>\n              <li *ngIf=\"!authService.isloggedin()\"><a [routerLink] = \"['/']\">About Us</a></li>\n              <li *ngIf=\"!authService.isloggedin()\" ><a [routerLink] = \"['/offlinesketch']\" >Offline Sketch</a></li>\n              <li *ngIf=\"authService.isloggedin()\"><a [routerLink] = \"['/profile']\">Profile</a></li>\n              <li *ngIf=\"authService.isloggedin()\"><a [routerLink] = \"['/profile']\">Projects</a></li>\n              <li *ngIf=\"authService.isloggedin()\"><a [routerLink] = \"['/sketch']\">Sketch</a></li>\n              <li *ngIf=\"authService.isloggedin()\" (click)=\"onLogoutClick()\"><a href=\"\">Logout</a></li>\n            </ul>\n          </nav>\n        </div>\n      </header>"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<!-- div class=\"container\">\n<div class = \"jumbotron\" id = \"jum\">\n <div class = \"row\">\n<div class= \"col-md-12\">\n <h2 style=\"font-size: 80px;\"> Offline Sketching</h2>\n\n</div>\n\n\n\n</div>\n</div>\n</div>\n<br>\n<br><br>\n\n\n\n\n <br>\n -->\n\n<div id=\"wrapper\" class=\"homepage\">\n    <div class=\"wrapper-holder\">\n      <!-- <header id=\"header\">\n        <div class=\"left-part\"></div>\n        <a id=\"logo\" [routerLink] = \"['/']\">Sparkle Crowd</a>\n        <div class=\"bar-holder\">\n          <a class=\"menu_trigger\" href=\"#\">menu</a>\n          <nav id=\"nav\">\n            <ul>\n               \n              <li ><a [routerLink] = \"['/login']\" >Log In</a></li>\n              <li ><a [routerLink] = \"['/register']\" >Register</a></li>\n              <li> <a [routerLink] = \"['/']\">About Us</a></li>\n              <li ><a [routerLink] = \"['/offlinesketch']\" >Offline Sketch</a></li>\n            </ul>\n          </nav>\n        </div>\n      </header> -->\n       <app-navbar></app-navbar>\n      <!-- <section class=\"promo\">\n        <div class=\"slider-wrap\">\n          <ul class=\"slider\">\n          <img class=\"slide\" src=\"assets/images/img-slide01.jpg\" alt=\"\" style=\"width: 100%\"> -->\n\n\n\n\n</div>\n\n <div style=\"border:1px solid #000000;width: 1000px; height: 460px;\" id=\"aww-wrapper\">\n\n </div>\n\n\n <br>\n <br>\n    <div class=\"top-blue-border\"></div>\n    <footer id=\"footer\">\n      <div class=\"footer-holder\">\n        <div class=\"footer-frame\">\n          <div class=\"footer-content\">\n            <div class=\"col-holder\">\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Our address</h3>\n                  <address class=\"map\">Street No.6 Phase 5 DHA,LUMS,Lahore</address>\n                  <address class=\"mail\"><a href=\"mailto:contact@kidschool.com\">Sparklecrowd@gmail.com</a></address>\n                  <address class=\"phone\">(92) 322 9914855</address>\n                </div>\n              </div>\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Follow us</h3>\n                  <ul class=\"social\">\n                    <li><a class=\"facebook\" href=\"#\">Facebook</a></li>\n                    <li><a class=\"google\" href=\"#\">Google+</a></li>\n                    <li><a class=\"twitter\" href=\"#\">Twitter</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-bottom\">\n            <div class=\"holder\">\n              <p>Copyright 2017 CodeSol. All rights reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer> \n  </div>\n"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<!-- <div id =\"image\" class=\"container\">\n    <div class=\"row my-2\">\n        <div class=\"col-lg-8 order-lg-2\">\n            \n            <div class=\"tab-content py-4\">\n                <div class=\"tab-pane active\" id=\"profile\">\n                    <h3 class=\"mb-3\" id = \"prof\">Your Profile</h3>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <h4>Name</h4>\n                            <h3 *ngIf = \"user\"> {{user.username}} </h3>\n                            <hr>\n                            <h4>Age</h4>\n                            <hr>\n                            <h4>Nickname</h4>\n                            <hr>\n                            <h4>Hobbies</h4>\n                            <p class = \"jumbotron\" id = \"file\">\n                               Playing online Games, Sketching, Reading Books, and playing Soccer. \n                            </p>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <h4 class=\"mt-2\"><span class=\"fa fa-clock-o ion-clock float-right\"></span> On-Going Projects</h4>\n                            <table class=\"table table-sm table-striped\">\n                                <tbody>                                    \n                                    <tr>\n                                        <td>\n                                            <strong>Flag :</strong> Flag of Pakistan Drawn.\n                                            <hr>\n                                            <strong>Tennis Ball :</strong> A Greenish Colored Tennis ball drawn\n                                        </td>\n                                    </tr>\n                                    \n                                    \n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    \n                </div>\n               \n                </div> \n            </div>\n        </div> -->\n\n        <div id=\"wrapper\" class=\"gallery\">\n        <div class=\"wrapper-holder\">\n            <app-navbar> </app-navbar>\n\n            <div class=\"dvdr\"></div>\n            <div class=\"container\">\n                <section id=\"main\">\n                    \n                <!-- profile -->\n                    \n                            <ul class=\"slider sortable-grid\" >\n                        <li>\n                            <ul>\n\n                                 <div class=\"row\">\n                             <div class=\"col-md-6\">\n                             <div style=\"color:black;\">\n                              <div class=\"animated bounce\" style=\"margin-right:400px;\">\n                          <img src=\"assets/coins.png\" style=\"padding-left:450px;\"> \n                            <h2 *ngIf=\"user\" style=\"padding-left:450px;\"> {{user.reward}} </h2>\n                          </div>\n                          \n                          \n                          \n                            \n                            \n\n                          </div>\n                          </div>\n                         \n\n                         \n                              \n                         \n                          \n\n                          </div>\n\n                            <li class=\"grid-item meeting\">\n                                <a href=\"#\"><img src=\"assets/kid1.jpg\" alt=\"\" style=\"height:270px;\" />\n                                <div class=\"mask\"></div></a>\n\n                                </li>\n                                <h2 *ngIf=\"user\" style=\"font-size:40px; margin-right:30px;\" > <strong>Username:</strong> {{user.username}} </h2>\n                                <h2 *ngIf=\"user\" style=\"font-size: 40px; margin-right:30px;\"><strong>Full Name:</strong> {{user.name}}</h2> \n                          <h2  *ngIf=\"user\" style=\"font-size: 40px;  margin-right:30px;\"><strong> Email: </strong>{{user.email}}</h2> \n                           \n                             <h2 *ngIf=\"user\"  style=\"font-size: 40px;  margin-right:30px;\"> <strong>Phone Number :</strong> 03234868883</h2> \n                                </ul>\n                                </li>\n                                </ul>\n                           \n                            \n                    \n                    \n                    <div class=\"dvdr\"></div>\n                    <div class=\"dvdr\"></div>\n\n                    <div class=\"tabs\">\n                        <ul class=\"filter-controls\">\n                           <li> <button class=\"blue button\" (click)=\"myfunc()\"> View Friends</button> </li>\n                            </ul>\n                    </div>\n                    \n                    \n                      <ul id= \"mun\" class=\"slider sortable-grid\" style=\"display:none\">\n                        <li>\n                            <ul>\n                            <li class=\"grid-item parties\">\n                                <a href=\"#\"><img src=\"assets/images/kid2.jpg\" alt=\"\" style=\"height:270px;\" />\n                                <div class=\"mask\"></div></a>\n                                </li>\n                            <li class=\"grid-item kids\">\n                                <a href=\"#\"><img src=\"assets/images/kid1.jpg\" alt=\"\" style=\"height:270px;\"/>\n                                <div class=\"mask\"></div></a>\n                                </li>\n                            <li class=\"grid-item kids\">\n                                <a href=\"#\"><img src=\"assets/images/kid3.png\" alt=\"\"  style=\"height:270px;\" />\n                                <div class=\"mask\"></div></a>\n                                </li>\n                            <li class=\"grid-item parties\">\n                                <a href=\"#\"><img src=\"assets/images/kid4.jpg\" alt=\"\" style=\"height:270px;\" />\n                                <div class=\"mask\"></div></a>\n                                </li>\n                            <li class=\"grid-item kids\">\n                                <a href=\"#\"><img src=\"assets/images/kid5.png\" alt=\"\" style=\"height:270px;\" />\n                                <div class=\"mask\"></div></a>\n                                </li>\n                        </ul>\n                    </li>\n                    </ul>\n\n                    <br>\n                   \n                </section>\n            </div>\n         <ul id=\"munii\" class=\"filter-controls\" style=\"display:none\">\n                           \n                           <li> <button class=\"blue button\" (click)=\"myfunchide()\"> Hide Friends</button> </li>\n                            </ul>\n                            <br> <br>\n        </div>\n        \n      <div class=\"top-blue-border\"></div>\n    <footer id=\"footer\">\n      <div class=\"footer-holder\">\n        <div class=\"footer-frame\">\n          <div class=\"footer-content\">\n            <div class=\"col-holder\">\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Our address</h3>\n                  <address class=\"map\">Street No.6 Phase 5 DHA,LUMS,Lahore</address>\n                  <address class=\"mail\"><a href=\"mailto:contact@kidschool.com\">Sparklecrowd@gmail.com</a></address>\n                  <address class=\"phone\">(92) 322 9914855</address>\n                </div>\n              </div>\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Follow us</h3>\n                  <ul class=\"social\">\n                    <li><a class=\"facebook\" href=\"#\">Facebook</a></li>\n                    <li><a class=\"google\" href=\"#\">Google+</a></li>\n                    <li><a class=\"twitter\" href=\"#\">Twitter</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-bottom\">\n            <div class=\"holder\">\n              <p>Copyright 2017 CodeSol. All rights reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer>    \n</div>\n\n\n\n\n\n\n\n\n\n\n\n<!-- file wala part -->\n\n<!-- <div class=\"col-md-4\">\n<input type=\"file\"\n       ngFileSelect\n       [options]=\"options\"\n       (onUpload)=\"handleUpload($event)\">\n\n   <div *ngIf = \"uploadFile\"> <img id=\"munn\" height=\"200\" width=\"200\"  src={{uploadFile}} alt=\"No Picture\"> </div>\n</div>\n     </div>\n</div> -->\n\n\n\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col col-md-5\">\n        <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                    <h4 class=\"modal-title\">\n                        Create an account\n                    </h4>\n                </div>\n                <div class=\"modal-body\">\n                    <form novalidate=\"novalidate\" id=\"formSignUp\">\n                        <div id=\"errorSignUp\">\n                        \n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"email\">Email</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-user\"></span></span>\n                                <input class=\"form-control\" placeholder=\"email@example.com\" name=\"emailSignUp\" id=\"emailSignUp\" type=\"email\">\n                            </div>\n                        </div>\n                            \n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"password\">Password</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n                                <input class=\"form-control\" placeholder=\"password\" name=\"passwordSignUp\" id=\"passwordSignUp\" type=\"password\">\n                            </div>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"password\">Confirm password</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n                                <input class=\"form-control\" placeholder=\"confirm password\" name=\"passwordConfirmSignUp\" id=\"passwordConfirmSignUp\" type=\"password\">\n                            </div>\n                        </div>\n                        \n                        <div class=\"checkbox\">\n                            <label>\n                                <input id=\"term\" type=\"checkbox\">\n                                I have read and accepted  <a target=\"_blank\" href=\"#\">the terms and conditions of use.</a>\n                            </label>\n                        </div>\n                        \n                        <button type=\"submit\" id=\"btnSignUp\" class=\"btn btn-primary\">Create an account</button>\n                    </form>\n                    \n                </div>\n                <div class=\"modal-footer\">\n                    <small>Already a member? <a class=\"alreadySignUp\" href=\"#\">Login here</a></small>\n                </div>\n            </div>\n            </div>\n    </div>\n</div> -->\n\n<!-- <div class=\"container\" style=\" margin-top:50px; width:500%; height: 700px; color :#ffffff\">\n    <form (submit) = \"onregistersubmit()\">\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n            <br>\n                <h2>Register New User</h2>\n                <hr>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"name\"></label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                        <input type=\"text\" [(ngModel)] = \"name\" name=\"name\" class=\"form-control\" id=\"name\"\n                               placeholder=\"FullName\" autofocus>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-control-feedback\">\n                        <span class=\"text-danger align-middle\">\n                           \n                        </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"name\"></label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user-circle\"></i></div>\n                        <input type=\"text\" [(ngModel)] = \"username\" name=\"usernamename\" class=\"form-control\" id=\"usernamename\"\n                               placeholder=\"Username\" autofocus>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-control-feedback\">\n                        <span class=\"text-danger align-middle\">\n                            \n                        </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"email\"></label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                        <input type=\"text\" [(ngModel)] = \"email\" name=\"email\" class=\"form-control\" id=\"email\"\n                               placeholder=\"you@example.com\" autofocus>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-control-feedback\">\n                        <span class=\"text-danger align-middle\">\n                      \n                        </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"password\"></label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group has-danger\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                        <input type=\"password\" [(ngModel)] = \"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                               placeholder=\"Password\" >\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <button type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-user-plus\"></i> Register</button>\n            </div>\n        </div>\n    </form>\n</div> -->\n\n\n  <!-- <div class = \"container\">\n<form (submit)= \"onregistersubmit()\" name=\"login-form\" class=\"login-form\" action=\"\" method=\"post\"[ngsReveal]=\"{ duration: 1700,\n          origin:'right',\n          distance:'300px'}\"  >\n    <div class=\"header\">\n    <h1>REGISTER</h1>\n    </div>\n  \n    <div class=\"content\">\n    \n    <input [(ngModel)] = \"name\" name=\"fullname\" type=\"text\" class=\"input fullname\" placeholder=\"Full Name\" />\n\n    <input [(ngModel)] = \"username\" name=\"username\" type=\"text\" class=\"input username\" placeholder=\"Username\" />\n    \n    <input [(ngModel)] = \"email\" name=\"email\" type=\"email\" class=\"input email\" placeholder=\"Email\" />\n\n    <input [(ngModel)] = \"password\" name=\"password\" type=\"password\" class=\"input password\" placeholder=\"Password\" />\n\n    \n    \n    </div>\n\n    <div class=\"footer\">\n        <a href=\"https://www.facebook.com\" class=\"btn btn-lg btn-social btn-facebook\">\n                                    <i class=\"fa fa-facebook fa-2x\" ></i></a>\n\n    <a href=\"https://www.gmail.com\" class=\"btn btn-lg btn-social btn-google\">\n    <i class=\"fa fa-google fa-2x\" style=\"color: red\"></i></a>\n    <div (click)= \"onregistersubmit()\" type=\"submit\" class=\"green button\">Register</div>\n    </div>\n  \n  </form>\n  <br>\n  <br>\n\n  </div> -->\n\n  <div id=\"wrapper\" class=\"homepage\">\n    <div class=\"wrapper-holder\">\n      <!-- <header id=\"header\">\n        <div class=\"left-part\"></div>\n        <a id=\"logo\" [routerLink] = \"['/']\">Sparkle Crowd</a>\n        <div class=\"bar-holder\">\n          <a class=\"menu_trigger\" href=\"#\">menu</a>\n          <nav id=\"nav\">\n            <ul>\n              \n              <li [routerLinkActive]=\"['active']\"><a [routerLink] = \"['/login']\" >Log In</a></li>\n              <li [routerLinkActive]=\"['active']\"><a [routerLink] = \"['/register']\" >Register</a></li>\n              <li><a [routerLink] = \"['/register']\">About Us</a></li>\n               <li [routerLinkActive]=\"['active']\"><a [routerLink] = \"['/offlinesketch']\" >Offline Sketch</a></li>\n            </ul>\n          </nav>\n        </div>\n      </header> -->\n       <app-navbar></app-navbar>\n      <!-- <section class=\"promo\">\n        <div class=\"slider-wrap\">\n          <ul class=\"slider\">\n          <img class=\"slide\" src=\"assets/images/img-slide01.jpg\" alt=\"\" style=\"width: 100%\"> -->\n\n\n<div class=\"container\" [ngsReveal]=\"{ duration: 1700,\n          origin:'right',\n          distance:'300px'}\">\n        <div class=\"card card-container\">\n            <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n            <!-- <img id=\"profile-img\" class=\"profile-img-card\" src=\"assets/face.png\" /> -->\n            <p id=\"profile-name\" class=\"profile-name-card\"> Register </p>\n            <form class=\"form-signin\">\n                <span id=\"reauth-email\" class=\"reauth-email\"></span>\n                <!-- <input [(ngModel)] = \"username\" name=\"username\" type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\" UserName\" required autofocus>\n                <input [(ngModel)] = \"password\" name=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\" Password\" required> -->\n                <input [(ngModel)] = \"name\" name=\"fullname\" type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Full Name\" />\n\n    <input [(ngModel)] = \"username\" name=\"username\" type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Username\" />\n    \n    <input [(ngModel)] = \"email\" name=\"email\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email\" />\n\n    <input [(ngModel)] = \"password\" name=\"password\" type=\"password\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Password\" />\n                <!-- <div id=\"remember\" class=\"checkbox\">\n                </div> -->\n               <!--  <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button> -->\n                 <div (click)= \"onregistersubmit()\" type=\"submit\" class=\"blue button\">Register</div>\n            </form><!-- /form -->\n        </div><!-- /card-container -->\n</div>\n</div>\n    <div class=\"top-blue-border\"></div>\n    <footer id=\"footer\">\n      <div class=\"footer-holder\">\n        <div class=\"footer-frame\">\n          <div class=\"footer-content\">\n            <div class=\"col-holder\">\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Our address</h3>\n                  <address class=\"map\">Street No.6 Phase 5 DHA,LUMS,Lahore</address>\n                  <address class=\"mail\"><a href=\"mailto:contact@kidschool.com\">Sparklecrowd@gmail.com</a></address>\n                  <address class=\"phone\">(92) 322 9914855</address>\n                </div>\n              </div>\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Follow us</h3>\n                  <ul class=\"social\">\n                    <li><a class=\"facebook\" href=\"#\">Facebook</a></li>\n                    <li><a class=\"google\" href=\"#\">Google+</a></li>\n                    <li><a class=\"twitter\" href=\"#\">Twitter</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-bottom\">\n            <div class=\"holder\">\n              <p>Copyright 2017 CodeSol. All rights reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer> \n  </div>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<!-- <br>\n<div class=\"container\">\n\t\n<div class=\"row\" [ngsReveal]=\"{ duration:1000,\n          origin:'left',\n          distance:'322px'}\">\n\t\n\t\n<div class=\"animated infinite bounce\">\n<h2 style=\"text-align:center;color:red;\"> CONGRATULATIONS <br> TALAL!</h2>\n</div>\n\n</div>\n\n\n\n</div>\n\n\n -->\n\n\n<br>\n\n <div>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<div class=\"row\" [ngsReveal]=\"{ duration:1000,\n          origin:'left',\n          distance:'322px'}\">\n\t\n\t\n<div class=\"animated infinite bounce\">\n<h2 *ngIf=\"myuser\" style=\"text-align:center;color:red;\"> CONGRATULATIONS <br> {{myuser.username | uppercase}}</h2>\n</div>\n</div>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n<span></span>\n\n</div>\n\n<br>\n<br>\n<div class=\"w3-container\" style=\"margin-left:450px;\">\n  \n  <div class=\"w3-card-4\" style=\"width:50%;height:240px;\">\n    <header class=\"w3-container w3-red\">\n      <h1 *ngIf=\"myuser\"> {{myuser.username | uppercase}}</h1>\n    </header>\n\n    <div class=\"w3-container\">\n      <h3 style=\"color:black\">You are rewarded with 500 more coins</h3>\n      <button [routerLink] = \"['/profile']\"class=\"red button\" style=\"height:50px;\"> Visit Profile</button>\n    </div>\n\n    \n  </div>\n</div>\n<br>\n<br>\n\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<!-- <div class = \"jumbotron\" id = \"jum\">\n <div class = \"row\">\n<div class= \"col-md-4\">\n <img class=\"animated infinite bounce\" src=\"/assets/coins.png\"> <strong  *ngIf=\"user\" style=\"font-size: 30px;\"> = {{user.reward}}</strong>\n\n</div> -->\n\n<!-- <div id=\"image\" class=\"col-md\"> <img src=\"/assets/save.png\" id =\"image\"> \n</div> -->\n\n\n<!-- </div>\n</div>\n\n\n<div style=\"border:1px solid #000000; width: 950px; height: 460px;\" id=\"aww-wrapper\">\n\n </div>\n <br>\n <div (click)=\"onclick()\" class=\"blue button criss-cross\"> Save Your Work</div>\n \n<div id=\"paint\" #paint>\n<canvas id=\"canvas\" width=\"200\" height=\"100\" style=\"border:0px solid #000000;\" #canvas>\n</canvas>\n</div> -->\n\n\n\n<!-- <div class=\"container text-center\">\n\t<div class=\"row\">\n\t\t<h2>Open in chat (popup-box chat-popup)</h2>\n        <h4>Click Here</h4>\n        <div class=\"round hollow text-center\">\n        <a href=\"#\" id=\"addClass\"><span class=\"glyphicon glyphicon-comment\"></span> Open in chat </a>\n        </div>\n        \n        <hr>\n        \n        MORE :\n        <a target=\"_blank\" href=\"http://bootsnipp.com/snippets/33ejn\">Whatsapp Chat Box POPUP</a>,\n         <a target=\"_blank\" href=\"http://bootsnipp.com/snippets/z4P39\"> Creative User Profile  </a>\n         \n\t</div>\n</div>\n -->\n\n\n<!-- div class=\"container\">\n<div class = \"jumbotron\" id = \"jum\">\n <div class = \"row\">\n<div class= \"col-md-12\">\n <h2 style=\"font-size: 80px;\"> Offline Sketching</h2>\n\n</div>\n\n\n\n</div>\n</div>\n</div>\n<br>\n<br><br>\n\n\n\n\n <br>\n -->\n\n<div id=\"wrapper\" class=\"homepage\">\n    <div class=\"wrapper-holder\">\n      <!-- <header id=\"header\">\n        <div class=\"left-part\"></div>\n        <a id=\"logo\" [routerLink] = \"['/']\">Sparkle Crowd</a>\n        <div class=\"bar-holder\">\n          <a class=\"menu_trigger\" href=\"#\">menu</a>\n          <nav id=\"nav\">\n            <ul>\n               \n              <li ><a [routerLink] = \"['/login']\" >Log In</a></li>\n              <li ><a [routerLink] = \"['/register']\" >Register</a></li>\n              <li> <a [routerLink] = \"['/']\">About Us</a></li>\n              <li ><a [routerLink] = \"['/offlinesketch']\" >Offline Sketch</a></li>\n            </ul>\n          </nav>\n        </div>\n      </header> -->\n       <app-navbar></app-navbar>\n      <!-- <section class=\"promo\">\n        <div class=\"slider-wrap\">\n          <ul class=\"slider\">\n          <img class=\"slide\" src=\"assets/images/img-slide01.jpg\" alt=\"\" style=\"width: 100%\"> -->\n\n\n\n\n</div>\n\n <div style=\"border:1px solid #000000;width: 900px; height: 460px;\" id=\"aww-wrapper\">\n\n </div>\n\n<br>\n\n<div id=\"msg\" style=\"display:none;\" class=\"card card-1 animated fadeInLeft\"> <h2> CONGRATULATIONS! </h2><h3 style=\"font-color: white\"> Coins added in your account : <strong> +50 </strong></h3>\n<button class=\"blue button\" (click)=\"okboss()\"> OK </button>\n</div>\n\n<button id= \"but\" class=\"blue button\" (click) = \"givereward()\"> Save </button>\n<br> \n <br>\n <br>\n <br>\n    <div class=\"top-blue-border\"></div>\n    <footer id=\"footer\">\n      <div class=\"footer-holder\">\n        <div class=\"footer-frame\">\n          <div class=\"footer-content\">\n            <div class=\"col-holder\">\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Our address</h3>\n                  <address class=\"map\">Street No.6 Phase 5 DHA,LUMS,Lahore</address>\n                  <address class=\"mail\"><a href=\"mailto:contact@kidschool.com\">Sparklecrowd@gmail.com</a></address>\n                  <address class=\"phone\">(92) 322 9914855</address>\n                </div>\n              </div>\n              <div class=\"col_wrap\">\n                <div class=\"col\">\n                  <h3>Follow us</h3>\n                  <ul class=\"social\">\n                    <li><a class=\"facebook\" href=\"#\">Facebook</a></li>\n                    <li><a class=\"google\" href=\"#\">Google+</a></li>\n                    <li><a class=\"twitter\" href=\"#\">Twitter</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-bottom\">\n            <div class=\"holder\">\n              <p>Copyright 2017 CodeSol. All rights reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer> \n  </div>\n\n\n\n<div class=\"popup-box chat-popup popup-box-on\" id=\"qnimate\">\n    \t\t  <div class=\"popup-head\">\n\t\t\t\t<div class=\"popup-head-left pull-left\"><img src={{path}}> Chat Box</div>\n\t\t\t\t\t  <div class=\"popup-head-right pull-right\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n    \t\t\t\t\t\t\t\t  <button class=\"chat-header-button\" data-toggle=\"dropdown\" type=\"button\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t   <i class=\"glyphicon glyphicon-cog\"></i> </button>\n\t\t\t\t\t\t\t\t\t  <ul role=\"menu\" class=\"dropdown-menu pull-right\">\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Media</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Block</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Clear Chat</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Email Chat</a></li>\n\t\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<button data-widget=\"remove\" id=\"removeClass\" class=\"chat-header-button pull-right\" type=\"button\"><i class=\"glyphicon glyphicon-off\"></i></button>\n                      </div>\n\t\t\t  </div>\n\t\t\t<div class=\"popup-messages\">\n    \t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"direct-chat-messages\">\n                    \n\t\t\t\t\t\n\t\t\t\t\t<div class=\"chat-box-single-line\">\n\t\t\t\t\t\t\t\t<abbr class=\"timestamp\">October 8th, 2015</abbr>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<!-- Message. Default to the left -->\n                    <div class=\"direct-chat-msg doted-border\">\n                      <div class=\"direct-chat-info clearfix\">\n                        <span *ngIf=\"path\" class=\"direct-chat-name pull-left\">{{user.username}}</span>\n                      </div>\n                      <!-- /.direct-chat-info -->\n                      <img *ngIf=\"path\" alt=\"message user image\" src={{path}} class=\"direct-chat-img\"><!-- /.direct-chat-img -->\n                      <div class=\"direct-chat-text\">\n                        Hey bro, how’s everything going ?\n                      </div>\n\t\t\t\t\t  <div class=\"direct-chat-info clearfix\">\n                        <span class=\"direct-chat-timestamp pull-right\">3.36 PM</span>\n                      </div>\n\t\t\t\t\t\t<div class=\"direct-chat-info clearfix\">\n\t\t\t\t\t\t<span class=\"direct-chat-img-reply-small pull-left\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"direct-chat-reply-name\">Sohaib</span>\n\t\t\t\t\t\t</div>\n                      <!-- /.direct-chat-text -->\n                    </div>\n                    <!-- /.direct-chat-msg -->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"chat-box-single-line\">\n\t\t\t\t\t\t<abbr class=\"timestamp\">October 9th, 2015</abbr>\n\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<!-- Message. Default to the left -->\n                    <div class=\"direct-chat-msg doted-border\">\n                      <div class=\"direct-chat-info clearfix\">\n                        <span *ngIf=\"user\" class=\"direct-chat-name pull-left\">{{user.username}}</span>\n                      </div>\n                      <!-- /.direct-chat-info -->\n                      <img *ngIf=\"path\" alt=\"iamgurdeeposahan\" src={{path}} class=\"direct-chat-img\"><!-- /.direct-chat-img -->\n                      <div class=\"direct-chat-text\">\n                        Hey bro, how’s everything going ?\n                      </div>\n\t\t\t\t\t  <div class=\"direct-chat-info clearfix\">\n                        <span class=\"direct-chat-timestamp pull-right\">3.36 PM</span>\n                      </div>\n\t\t\t\t\t\t<div class=\"direct-chat-info clearfix\">\n\t\t\t\t\t\t  <img alt=\"iamgurdeeposahan\" src=\"assets/picx2.jpg\" class=\"direct-chat-img big-round\">\n\t\t\t\t\t\t<span class=\"direct-chat-reply-name\">Sohaib</span>\n\t\t\t\t\t\t</div>\n                      <!-- /.direct-chat-text -->\n                    </div>\n                    <!-- /.direct-chat-msg -->\n\t\t\t\t\t\n\t\t\t\t\t\n                    \n\n                    \n\n                  </div>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"popup-messages-footer\">\n\t\t\t<textarea id=\"status_message\" placeholder=\"Type a message...\" rows=\"10\" cols=\"40\" name=\"message\"></textarea>\n\t\t\t<div class=\"btn-footer\">\n\t\t\t<button class=\"bg_none\"><i class=\"glyphicon glyphicon-film\"></i> </button>\n\t\t\t<button class=\"bg_none\"><i class=\"glyphicon glyphicon-camera\"></i> </button>\n            <button class=\"bg_none\"><i class=\"glyphicon glyphicon-paperclip\"></i> </button>\n\t\t\t<button class=\"bg_none pull-right\"><i class=\"glyphicon glyphicon-thumbs-up\"></i> </button>\n\t\t\t</div>\n\t\t\t</div>\n\t  </div>\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(402);


/***/ })

},[746]);
//# sourceMappingURL=main.bundle.map