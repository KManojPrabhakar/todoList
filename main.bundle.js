webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_module__ = __webpack_require__("./src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__ = __webpack_require__("./src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_module__ = __webpack_require__("./src/app/todo-list/todo-list.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_10__todo_list_todo_list_module__["a" /* TodoListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__["a" /* LoginComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__user_login_login_component__["a" /* LoginComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        // private url =  'http://localhost:3000';
        this.url = 'http://todolist-backend.testmanoj.com';
        this.allCountryNames = 'https://restcountries.eu/rest/v2/all';
        this.countryNameUrl = 'http://country.io/names.json';
        this.countryPhoneUrl = 'http://country.io/phone.json';
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        this.getCountryNames = function () {
            var response = _this.http.get(_this.allCountryNames);
            return response;
        };
    } // end constructor  
    AppService.prototype.signupFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpParams */]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobile)
            .set('email', data.email)
            .set('password', data.password)
            .set('countryCode', data.countryCode);
        return this.http.post(this.url + "/api/v1/todolist/signup", params);
    }; // end of signupFunction function.
    AppService.prototype.signinFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpParams */]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/todolist/login", params);
    }; // end of signinFunction function.
    AppService.prototype.resetFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpParams */]()
            .set('resetPassword', data.resetPassword)
            .set('resetPasswordToken', data.resetPasswordToken);
        return this.http.post(this.url + "/api/v1/todolist/reset", params);
    }; // end of resetFunction .
    AppService.prototype.forgotFunction = function (data) {
        debugger;
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpParams */]()
            .set('forgotEmail', data.forgotEmail);
        return this.http.post(this.url + "/api/v1/todolist/forgot", params);
    }; // end of forgotFunction .
    AppService.prototype.logout = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpParams */]()
            .set('authToken', __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/todolist/logout", params);
    }; // end logout function
    AppService.prototype.getCountryCodes = function () {
        return this.http.get(this.countryPhoneUrl);
    };
    AppService.prototype.createListFunction = function (data) {
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpParams */]()
            .set('listName', data.listName)
            .set('userId', data.userId);
        return this.http.post(this.url + "/api/v1/todolist/createList", params);
    };
    AppService.prototype.getAllLists = function (userId) {
        return this.http.get(this.url + "/api/v1/todolist/getAllLists/" + userId);
    };
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errorMessage);
    }; // END handleError
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/todo-list/list-view/list-view.component.css":
/***/ (function(module, exports) {

module.exports = ".online{\r\n\r\n  height: 10px;\r\n  width: 10px;\r\n  background-color:green;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.offline{\r\n\r\n  height: 10px;\r\n  width: 10px;\r\n  background-color:red;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.rightSideClass {\r\n    float: right;\r\n    background: #ddd;\r\n    border-radius: 0.5em;\r\n  }\r\n\r\n.leftSideClass {\r\n    float: left;\r\n    background: #55C1E7;\r\n    border-radius: 0.5em;\r\n  }\r\n\r\n.circle-green:before {\r\n    content: ' \\25CF';\r\n    font-size: 1em;\r\n    color: green;\r\n  }\r\n\r\n.circle-red:before {\r\n    content: ' \\25CF';\r\n    font-size: 1em;\r\n    color: red;\r\n  }\r\n\r\n.cursorPointer {\r\n    cursor: pointer;\r\n  }\r\n\r\n.textCenter {\r\n    text-align: center;\r\n  }\r\n\r\n.floatLeft {\r\n    float: left;\r\n  }\r\n\r\n*,\r\n  *:before,\r\n  *:after {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n  }\r\n\r\nbody {\r\n    padding: 2.5em 0;\r\n    color: white;\r\n  }\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    background: #444753;\r\n    border-radius: 0.3em;\r\n  }\r\n\r\n.people-list {\r\n    float: left;\r\n  }\r\n\r\n.people-list input {\r\n    border-radius: 0.2em;\r\n    border: none;\r\n    padding: 1em;\r\n    color: white;\r\n    background: #6A6C75;\r\n    width: 90%;\r\n    font-size: 1em;\r\n  }\r\n\r\n.people-list .fa-search {\r\n    position: relative;\r\n    left: -1.8em;\r\n  }\r\n\r\n.people-list ul {\r\n    padding: 0;\r\n  }\r\n\r\n.people-list ul li .userPresence {\r\n    float: left;\r\n    padding: 0.7em 0.2em;\r\n    color: white;\r\n    text-transform: capitalize;\r\n  }\r\n\r\n.textCapitalize {\r\n    text-transform: capitalize;\r\n    font-size: 1.2em;\r\n  }\r\n\r\n.people-list img {\r\n    float: left;\r\n  }\r\n\r\n.people-list .about {\r\n    float: left;\r\n  }\r\n\r\n.people-list .about {\r\n    padding-left: 0.4em;\r\n  }\r\n\r\n.people-list .status {\r\n    color: #92959E;\r\n  }\r\n\r\n.chat {\r\n    height: 100vh;\r\n    float: left;\r\n    background: #F2F5F8;\r\n    border-top-right-radius: 0.3em;\r\n    border-bottom-right-radius: 0.3em;\r\n    color: #434651;\r\n  }\r\n\r\n.chat .chat-header {\r\n    padding: 0.2em;\r\n    border-bottom: 0.15em solid white;\r\n  }\r\n\r\n.chat .chat-header img {\r\n    float: left;\r\n  }\r\n\r\n.chat .chat-header .chat-about {\r\n    float: left;\r\n    padding-left: 0.8em;\r\n    margin-top: 0.4em;\r\n  }\r\n\r\n.chat .chat-header .chat-with {\r\n    font-weight: bold;\r\n    font-size: 1.1em;\r\n  }\r\n\r\n.chat .chat-header .chat-num-messages {\r\n    color: #92959E;\r\n  }\r\n\r\n.chat .chat-header .fa-star {\r\n    float: right;\r\n    color: #D8DADF;\r\n    font-size: 1.42em;\r\n    margin-top: 0.85em;\r\n  }\r\n\r\n.chat .chat-history {\r\n    padding: 2em 2em 1.42em;\r\n    border-bottom: 0.15em solid white;\r\n    overflow-y: scroll;\r\n    height: 80vh;\r\n  }\r\n\r\n.chat .chat-history .message-data {\r\n    margin-bottom: 1em;\r\n  }\r\n\r\n.chat .chat-history .message-data-time {\r\n    color: #a8aab1;\r\n    padding-left: 0.4em;\r\n  }\r\n\r\n.chat .chat-history .message {\r\n    color: white;\r\n    padding: 0.5em 1.42em;\r\n    line-height: 1.9em;\r\n    font-size: 1.1em;\r\n    border-radius: 7px;\r\n    margin-bottom: 2em;\r\n    width: 90%;\r\n    position: relative;\r\n  }\r\n\r\n.chat .chat-history .message:after {\r\n    bottom: 100%;\r\n    left: 7%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-bottom-color: #86BB71;\r\n    border-width: 0.8em;\r\n    margin-left: -0.8em;\r\n  }\r\n\r\n.chat .chat-history .my-message {\r\n    background: #86BB71;\r\n  }\r\n\r\n.chat .chat-history .other-message {\r\n    background: #94C2ED;\r\n  }\r\n\r\n.chat .chat-history .other-message:after {\r\n    border-bottom-color: #94C2ED;\r\n    left: 90%;\r\n  }\r\n\r\n.chat .chat-message textarea {\r\n    width: 100%;\r\n    border: none;\r\n    padding: 0.8em 1.42em;\r\n    margin-bottom: 0.8em;\r\n    border-radius: 5px;\r\n    resize: none;\r\n  }\r\n\r\n.chat .chat-message .fa-file-o,\r\n  .chat .chat-message .fa-file-image-o {\r\n    font-size: 1.1em;\r\n    color: gray;\r\n    cursor: pointer;\r\n  }\r\n\r\n.chat .chat-message button {\r\n    float: right;\r\n    color: #94C2ED;\r\n    font-size: 1.1em;\r\n    text-transform: uppercase;\r\n    border: none;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    background: #F2F5F8;\r\n  }\r\n\r\n.chat .chat-message button:hover {\r\n    color: #75b1e8;\r\n  }\r\n\r\n.online,\r\n  .offline,\r\n  .me,\r\n  .warning {\r\n    margin-right: 3px;\r\n    font-size: 0.8em;\r\n  }\r\n\r\n.online {\r\n    color: #86BB71;\r\n  }\r\n\r\n.offline {\r\n    color: #E38968;\r\n  }\r\n\r\n.me {\r\n    color: #94C2ED;\r\n  }\r\n\r\n.warning {\r\n    color: #e78930;\r\n  }\r\n\r\n.align-left {\r\n    text-align: left;\r\n  }\r\n\r\n.align-right {\r\n    text-align: right;\r\n  }\r\n\r\n.float-right {\r\n    float: right;\r\n  }\r\n\r\n.clearfix:after {\r\n    visibility: hidden;\r\n    display: block;\r\n    font-size: 0;\r\n    content: \" \";\r\n    clear: both;\r\n    height: 0;\r\n  }\r\n\r\n.customButton {\r\n    width: 100%;\r\n  }\r\n\r\n.activeChat {\r\n    background: #393a41;\r\n  }\r\n\r\n.typeOfChats {\r\n    background: #393a41;\r\n    color: white;\r\n    margin-top: 0.2em;\r\n    margin-bottom: 0.2em;\r\n  }\r\n\r\n.blankContent{\r\n    height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    font-size: 1rem;\r\n    color: #999;\r\n  }\r\n\r\n@media only screen and (max-width:575px) {\r\n    .chat .chat-history {\r\n      height:50vh;\r\n    }\r\n  }\r\n\r\n@media only screen and (min-width:576px) and (max-width:768px) {\r\n    .chat .chat-history {\r\n      height:50vh;\r\n    }\r\n  }\r\n\r\n@media only screen and (min-width:769px) and (max-width:992px) {\r\n    .chat .chat-history {\r\n      height:65vh;\r\n    }\r\n  }\r\n\r\n@media only screen and (min-width:993px) and (max-width:1200  px) {\r\n    .chat .chat-history {\r\n      height:50vh;\r\n    }\r\n  }\r\n\r\n/* user list items */\r\n\r\n.crop {\r\n  border-radius: 100%;\r\n  line-height: 1em;\r\n  padding: 1em;\r\n  text-align: center;\r\n  margin: 0em;\r\n  width: 3em;\r\n  height: 3em;\r\n  float: left;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.about {\r\n  float: left;\r\n  padding-left: 0.4em;\r\n}\r\n\r\n.online,\r\n.offline,\r\n.me,\r\n.warning {\r\n  margin-right: 3px;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.online {\r\n  color: #86BB71;\r\n}\r\n\r\n.offline {\r\n  color: #E38968;\r\n}\r\n\r\n.me {\r\n  color: #94C2ED;\r\n}\r\n\r\n.warning {\r\n  color: #00c8e7;\r\n}\r\n\r\n.status {\r\n  color: #92959E;\r\n}\r\n\r\n.name {\r\n  float: left;\r\n}"

/***/ }),

/***/ "./src/app/todo-list/list-view/list-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\">To Do List</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link cursorPointer\" (click)=\"goToLogout()\">Log Out</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>-->\n\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"displayBlockMobile\" style=\"position:fixed;width:100%;z-index:1;\">\n\n      <div class=\"col-sm-12 p-0\">\n\n        <nav class=\"navbar navbar-expand-md navbar-fixed navbar-dark bg-dark\">\n\n          <a class=\"navbar-brand text-white\">\n            {{userName}}\n              <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n              <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n            </a>\n\n\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  \n              <span class=\"navbar-toggler-icon\"></span>\n  \n            </button>\n\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n            <ul class=\"navbar-nav\">\n\n              <li class=\"nav-item\">\n\n                <a class=\"nav-link cursorPointer\" (click)=\"goToLogout()\">Log Out</a>\n\n              </li>\n\n            </ul>\n\n          </div>\n\n          <!--<div class=\"collapse people-list navbar-collapse\" id=\"navbarSupportedContent\">\n  \n              <ul class=\"list\">\n                <li class=\"p-2 typeOfChats\">\n                  Online Users:\n                </li>\n                <li class=\"clearfix cursorPointer\" [ngClass]=\"{'activeChat': user.chatting == true}\" (click)=\"userSelectedToChat(user.userId, user.name)\"\n                  *ngFor=\"let user of userList\">\n                  <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\">\n                    <user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\"></user-details>\n                  </div>\n                </li>\n                \n              </ul>\n  \n            </div>\n  -->\n        </nav>\n\n      </div>\n\n    </div>\n\n    <div class=\"col-12 displayNoneMobile col-sm-4 col-md-4 people-list p-0\" id=\"people-list\">\n\n      <div class=\"p-3 text-white textCapitalize textCenter\">\n        {{userName}}\n        <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n        <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n        <br>\n        <br>\n        <button (click)=\"goToLogout()\" class=\"btn btn-info customButton\">Logout</button>\n      </div>\n\n      <ul class=\"list\">\n        <li class=\"p-2 typeOfChats\">\n          Online Users:\n        </li>\n        <!--<li class=\"clearfix cursorPointer\" [ngClass]=\"{'activeChat': user.chatting == true}\"\n            *ngFor=\"let user of userList\" (click)=\"userSelectedToChat(user.userId, user.name)\">\n            <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\"  >\n              <user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\"></user-details>\n            </div>\n          </li>-->\n\n      </ul>\n\n\n    </div>\n    <div class=\"col-12 col-sm-8 col-md-8 chat overflow-auto\">\n\n      <div>\n        <button (click)=\"showListInputFunction(true)\" type=\"button\" class=\"btn btn-info margin-top-20\">Create New List</button>\n      </div>\n      <div *ngIf=\"showListInputText\">\n        <input class=\"margin-top-20\" type=\"text\" required [(ngModel)]=\"listName\"/>\n        <div  class=\"margin-top-20\">\n          <button type=\"button\" class=\"btn btn-primary btn-sm\"  (click)=\"createListFunction()\" >Add List</button>\n          <button (click)=\"showListInputFunction(false)\" type=\"button\" class=\"btn btn-secondary btn-sm\">Cancel</button> \n        </div>\n      </div>\n      <div >\n              <p>All Lists</p>\n\n          <p  *ngFor=\"let listData of listValues\">{{listData.listName}}</p>\n      </div>\n      \n    </div>\n\n    <!--  \n      <div class=\"col-12 col-sm-8 col-md-8 chat\">\n        <div class=\"chat-header clearfix mobileMenu\" *ngIf=\"receiverName\">\n          <first-char [name]=\"receiverName\" [userBg]=\"'blue'\" [userColor]=\"'white'\" (notify)=\"showUserName($event)\"></first-char>\n  \n          <div class=\"chat-about\">\n            <div class=\"chat-with\">Chat with {{receiverName}}</div>\n          </div>\n        </div>\n  \n        <div #scrollMe [scrollTop]=\"(scrollToChatTop)?0:scrollMe.scrollHeight\" class=\"chat-history\" *ngIf=\"receiverName\">\n  \n          <ul>\n            <li class=\"textCenter\" *ngIf=\"receiverName\">\n  \n              <span  class=\"cursorPointer\" (click)=\"loadEarlierPageOfChat()\">Load Previous Chat</span>\n  \n              <br>\n  \n              <span *ngIf=\"loadingPreviousChat == true\">Loading...</span>\n  \n            </li>\n            <li class=\"clearfix\" *ngFor=\"let message of messageList\">\n              <div class=\"message-data\" [ngClass]=\"{'align-right': message.senderId == userInfo.userId}\">\n                <span class=\"message-data-time\">{{message?.createdOn | date: 'medium' }}</span> &nbsp; &nbsp;\n                <span class=\"message-data-name floatLeft\" *ngIf=\"message.senderId != userInfo.userId\">\n                  <i class=\"fa fa-circle online\"></i> {{ message?.senderName }}</span>\n                <span class=\"message-data-name\" *ngIf=\"message.senderId == userInfo.userId\">{{ message?.senderName }}</span>\n                <i class=\"fa fa-circle me\" *ngIf=\"message.senderId == userInfo.userId\"></i>\n  \n              </div>\n              <div class=\"message\" [ngClass]=\"{'float-right other-message': message.senderId == userInfo.userId, 'my-message': message.senderId != userInfo.userId}\">\n                {{message?.message | removeSpecialCharPipe: '#' | removeSpecialCharPipe: '$'}}\n              </div>\n            </li>\n  \n          </ul>\n  \n        </div>\n        <div *ngIf=\"!receiverName\" class=\"col-sm blankContent\">\n          Click on user for start a chat!!!\n        </div>\n  \n        <div class=\"chat-message clearfix p-2\" *ngIf=\"receiverName\">\n          <textarea name=\"message-to-send\" id=\"message-to-send\" (keydown)=\"sendMessageUsingKeypress($event)\" [(ngModel)]=\"messageText\"\n            placeholder=\"Type your message\" rows=\"3\"></textarea>\n  \n          <button (click)=\"sendMessage()\">Send</button>\n  \n        </div>\n  \n      </div>-->\n\n  </div>\n  <!-- end chat -->\n\n</div>\n<!-- end container -->"

/***/ }),

/***/ "./src/app/todo-list/list-view/list-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(appService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.getAllLists = function () {
            _this.appService.getAllLists(_this.userId)
                .subscribe(function (apiResponse) {
                debugger;
                if (apiResponse.status === 200) {
                    _this.listValues = apiResponse.data;
                    _this.toastr.success("List get Successfully");
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error("some error occured");
            });
        };
        this.goToLogout = function () {
            _this.router.navigate(['/']);
        };
        this.showListInputFunction = function (value) {
            _this.showListInputText = value;
            if (value == false) {
                _this.listName = "";
            }
        };
        this.createListFunction = function () {
            debugger;
            if (!_this.listName) {
                _this.toastr.warning('please enter the list name');
                //  this.toastr.error("please enter the list name")
            }
            else {
                //  alert("userId"+this.userId);
                var data = {
                    listName: _this.listName,
                    userId: _this.userId
                };
                _this.showListInputFunction(false);
                _this.appService.createListFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.toastr.success("your List Created Successfully");
                        _this.getAllLists(_this.userId);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error("some error occured");
                });
            }
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    ListViewComponent.prototype.ngOnInit = function () {
        this.userId = __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('receiverId');
        this.userName = __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].get('receiverName');
        this.getAllLists();
    };
    ListViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-view',
            template: __webpack_require__("./src/app/todo-list/list-view/list-view.component.html"),
            styles: [__webpack_require__("./src/app/todo-list/list-view/list-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_view_list_view_component__ = __webpack_require__("./src/app/todo-list/list-view/list-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TodoListModule = /** @class */ (function () {
    function TodoListModule() {
    }
    TodoListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild([
                    { path: 'list-view', component: __WEBPACK_IMPORTED_MODULE_2__list_view_list_view_component__["a" /* ListViewComponent */] },
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__list_view_list_view_component__["a" /* ListViewComponent */]]
        })
    ], TodoListModule);
    return TodoListModule;
}());



/***/ }),

/***/ "./src/app/user/forgot/forgot.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">To Do List</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <!--<li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>-->\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n   \n   <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"forgotEmailValue\" placeholder=\"Enter Email\" required autofocus>\n\n    <br>\n\n\n\n   \n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"forgotEmail()\">Submit</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(appService, router, toastr, _route, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.forgotEmail = function () {
            if (!_this.forgotEmailValue) {
                _this.toastr.warning('enter Email');
            }
            else {
                debugger;
                var data = {
                    forgotEmail: _this.forgotEmailValue
                };
                _this.appService.forgotFunction(data)
                    .subscribe(function (apiResponse) {
                    debugger;
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        _this.toastr.success('Link Sent to your email Successfull');
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            }
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("./src/app/user/forgot/forgot.component.html"),
            styles: [__webpack_require__("./src/app/user/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"javascript:void(0)\">To Do List</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link cursorPointer\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <p class=\"forgot\" (click)=\"forgotFunction()\">Forgot Password</p>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__ = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignUp = function () {
            _this.router.navigate(['/sign-up']);
        }; // end goToSignUp
        this.forgotFunction = function () {
            _this.router.navigate(['/forgot']);
        }; // end goToSignUp
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        var that_1 = _this;
                        console.log(apiResponse);
                        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        __WEBPACK_IMPORTED_MODULE_2_ng2_cookies_ng2_cookies__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.toastr.success('You successfully logged in');
                        setTimeout(function () {
                            that_1.router.navigate(['/list-view']);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    if (err && err.error && err.error.message) {
                        _this.toastr.error(err.error.message);
                    }
                    else {
                        _this.toastr.error('some error occured');
                    }
                });
            } // end condition
        }; // end signinFunction
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset/reset.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n\r\n  <a class=\"navbar-brand\" href=\"/\">To Do List</a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <!--<li class=\"nav-item\">\r\n\r\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\r\n\r\n      </li>-->\r\n\r\n    </ul>\r\n\r\n  </div>\r\n\r\n</nav>\r\n\r\n<div class=\"row p-0 m-0\">\r\n\r\n  <div class=\"col-sm\"></div>\r\n\r\n  <div class=\"col-sm p-5\">\r\n\r\n   \r\n\r\n    <label for=\"inputPassword\" class=\"sr-only\">Enter Password</label>\r\n\r\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"newPassword\" placeholder=\" Enter Password\" required>\r\n\r\n\r\n    <br>\r\n\r\n    <label for=\"inputPassword\" class=\"sr-only\">Confirm Password</label>\r\n\r\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confrim Password\" required>\r\n\r\n\r\n    <br>\r\n\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"updatePasswordFunction()\">Update Password</button>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-sm\"></div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetComponent = /** @class */ (function () {
    function ResetComponent(appService, router, toastr, _route, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this._route = _route;
        this.updatePasswordFunction = function () {
            if (!_this.newPassword) {
                _this.toastr.warning('enter Password');
            }
            else if (_this.newPassword != _this.confirmPassword) {
                _this.toastr.warning('Your Password is mismatch');
            }
            else {
                var resetPasswordToken = _this._route.snapshot.paramMap.get('token');
                var data = {
                    resetPassword: _this.confirmPassword,
                    resetPasswordToken: resetPasswordToken
                };
                _this.appService.resetFunction(data)
                    .subscribe(function (apiResponse) {
                    var that = _this;
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        _this.toastr.success('Your Password Updated Successfully');
                        setTimeout(function () {
                            that.router.navigate(['/list-view']);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; //
        this.toastr.setRootViewContainerRef(vcr);
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__("./src/app/user/reset/reset.component.html"),
            styles: [__webpack_require__("./src/app/user/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\"href=\"javascript:void(0)\">To Do List</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link cursorPointer\" (click)=\"goToSignIn()\">Sign-In</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Sign Up To Start Create Your Lists</h2>\n\n    <br>\n\n    <span>FirstName: </span>\n\n    <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n    <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n\n    <br>\n\n    <span>LastName: </span>\n\n    <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n    <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n\n    <br>\n    <span>Select Country: </span>\n\n      <select class=\"form-control\" (change)=\"countryCode()\" [(ngModel)]=\"userProfile\" >\n        <option value=\"\">Country</option>\n      <option  *ngFor=\"let country of allCountryNames\" value={{country.callingCodes[0]}} >{{country.name}}</option>\n      </select>\n\n    <br>\n\n    <span *ngIf=\"countryCodeValue\">Mobile Code: +{{countryCodeValue}}</span>\n\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n    \n    <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n\n    <br>\n\n    <span>Email: </span>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n\n    <br>\n\n    <span>Password: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n\n    <!--<span>API Key: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">AuthKey</label>\n\n    <textarea type=\"password\" id=\"AuthKey\" class=\"form-control\" [(ngModel)]=\"apiKey\" placeholder=\"API Key\" required></textarea>\n\n    <br>-->\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr, vcr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.getCountryName = function () {
            debugger;
            _this.appService.getCountryNames()
                .subscribe(function (apiResponse) {
                console.log(apiResponse);
                alert(apiResponse);
                // if (apiResponse.status === 200) {
                //   this.toastr.success('Countr Names get Successfully');
                // } else {
                //   this.toastr.error(apiResponse.message);
                // }
            }, function (err) {
                alert("countr name error" + JSON.stringify(err));
                _this.toastr.error('some error occured');
            });
        }; // end getCountryName
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning('enter first name');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('enter last name');
            }
            else if (!_this.mobile) {
                _this.toastr.warning('enter mobile');
            }
            else if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else if (!_this.countryCodeValue) {
                _this.toastr.warning('select country name');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobile: _this.mobile,
                    email: _this.email,
                    password: _this.password,
                    countryCode: _this.countryCodeValue
                };
                console.log(data);
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Signup successful');
                        setTimeout(function () {
                            _this.goToSignIn();
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signupFunction
        this.countryCode = function () {
            debugger;
            _this.countryCodeValue = _this.userProfile;
        };
        this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getCountryNames().subscribe(function (data) {
            // alert("Books Response" + JSON.stringify(data));
            // this.getBooksSortedData(data);
            // this.allBooks = data;
            debugger;
            _this.allCountryNames = data;
        }, function (error) {
            alert("error" + error);
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        // this.getCountryName();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("./src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot_component__ = __webpack_require__("./src/app/user/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reset_reset_component__ = __webpack_require__("./src/app/user/reset/reset.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild([
                    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_10__reset_reset_component__["a" /* ResetComponent */] },
                    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_9__forgot_forgot_component__["a" /* ForgotComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_9__forgot_forgot_component__["a" /* ForgotComponent */], __WEBPACK_IMPORTED_MODULE_10__reset_reset_component__["a" /* ResetComponent */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map