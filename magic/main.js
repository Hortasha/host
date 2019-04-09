(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account.mock.ts":
/*!*********************************!*\
  !*** ./src/app/account.mock.ts ***!
  \*********************************/
/*! exports provided: MOCK_ACCOUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_ACCOUNT", function() { return MOCK_ACCOUNT; });
var account = {
    username: "abc",
    password: "123"
};
var MOCK_ACCOUNT = account;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cards-page/cards-page.component */ "./src/app/pages/cards-page/cards-page.component.ts");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "./src/app/pages/contact-page/contact-page.component.ts");
/* harmony import */ var _pages_card_specific_page_card_specific_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/card-specific-page/card-specific-page.component */ "./src/app/pages/card-specific-page/card-specific-page.component.ts");

//Modules


//Components





var routes = [
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
    { path: 'about', component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"] },
    { path: 'cards', component: _pages_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_5__["CardsPageComponent"] },
    { path: 'contact', component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"] },
    { path: 'card/:id', component: _pages_card_specific_page_card_specific_page_component__WEBPACK_IMPORTED_MODULE_7__["CardSpecificPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login/login.service */ "./src/app/services/login/login.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.loginService.isAuthorized()) {
            this.router.navigate(['cards']);
        }
        else {
            this.router.navigate(['login']);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_magic_magic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/magic/magic.service */ "./src/app/services/magic/magic.service.ts");
/* harmony import */ var _services_login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/login/login.service */ "./src/app/services/login/login.service.ts");
/* harmony import */ var _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/contact/contact.service */ "./src/app/services/contact/contact.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/cards-page/cards-page.component */ "./src/app/pages/cards-page/cards-page.component.ts");
/* harmony import */ var _pages_card_specific_page_card_specific_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/card-specific-page/card-specific-page.component */ "./src/app/pages/card-specific-page/card-specific-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "./src/app/pages/contact-page/contact-page.component.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_selected_card_selected_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/selected-card/selected-card.component */ "./src/app/components/selected-card/selected-card.component.ts");
/* harmony import */ var _components_text_toggle_text_toggle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/text-toggle/text-toggle.component */ "./src/app/components/text-toggle/text-toggle.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ "./src/app/components/contact-form/contact-form.component.ts");

//Modules





//Services



//Components













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"],
                _pages_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_11__["CardsPageComponent"],
                _pages_card_specific_page_card_specific_page_component__WEBPACK_IMPORTED_MODULE_12__["CardSpecificPageComponent"],
                _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_13__["AboutPageComponent"],
                _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_14__["ContactPageComponent"],
                _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_15__["LoginFormComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__["NavigationComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"],
                _components_selected_card_selected_card_component__WEBPACK_IMPORTED_MODULE_19__["SelectedCardComponent"],
                _components_text_toggle_text_toggle_component__WEBPACK_IMPORTED_MODULE_20__["TextToggleComponent"],
                _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_21__["ContactFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_services_magic_magic_service__WEBPACK_IMPORTED_MODULE_6__["MagicService"], _services_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _services_contact_contact_service__WEBPACK_IMPORTED_MODULE_8__["ContactService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\r\n    <div class=\"card\" (click)=\"viewCard()\">\r\n        <h4>{{card.name}}</h4>\r\n        <img [src]=\"card.imageUrl\" alt=\"{{card.name}}\">\r\n        <p><b>Rarity:</b> {{card.rarity}}</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n  display: inline-block;\n  width: 25%;\n  margin-bottom: 50px; }\n\n.card {\n  width: 240px;\n  background-color: white;\n  margin: 0 auto;\n  border: solid gray 1px;\n  border-top: #F96167 15px solid;\n  font-family: 'Raleway', sans-serif;\n  padding-bottom: 5px;\n  cursor: pointer;\n  text-align: center; }\n\n.card p {\n    text-align: left;\n    padding-left: 15px; }\n\n.card:hover {\n    box-shadow: 5px 5px 10px rgba(20, 20, 20, 0.5); }\n\n.card img {\n    margin-top: 5px; }\n\n@media only screen and (max-width: 1100px) {\n  .card-container {\n    display: inline-block;\n    width: 33.333%; } }\n\n@media only screen and (max-width: 800px) {\n  .card-container {\n    display: inline-block;\n    width: 50%; } }\n\n@media only screen and (max-width: 550px) {\n  .card-container {\n    display: inline-block;\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL0M6XFxVc2Vyc1xcTWFydGluXFxEb2N1bWVudHNcXEZyb250ZW5kXFxqc2ZyYW1ld29ya3NcXGFuZ3VsYXJcXE5vcm9mZi1GaW5hbENBL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQVR0QjtJQVlRLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTs7QUFiMUI7SUFpQlEsOENBQThDLEVBQUE7O0FBakJ0RDtJQXFCUSxlQUFlLEVBQUE7O0FBSXZCO0VBQ0k7SUFDSSxxQkFBcUI7SUFDckIsY0FBYyxFQUFBLEVBQ2pCOztBQUdMO0VBQ0k7SUFDSSxxQkFBcUI7SUFDckIsVUFBVSxFQUFBLEVBQ2I7O0FBR0w7RUFDSTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBncmF5IDFweDtcclxuICAgIGJvcmRlci10b3A6ICNGOTYxNjcgMTVweCBzb2xpZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICYgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMjAsIDIwLCAyMCwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICAmIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_magic_magic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/magic/magic.service */ "./src/app/services/magic/magic.service.ts");




var CardComponent = /** @class */ (function () {
    function CardComponent(router, magicService) {
        this.router = router;
        this.magicService = magicService;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.viewCard = function () {
        this.magicService.setCard(this.card);
        this.router.navigate(["card/" + this.card.multiverseid]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_magic_magic_service__WEBPACK_IMPORTED_MODULE_3__["MagicService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-form/contact-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSend(form.value)\">\r\n  \r\n  <div class=\"form-section\">\r\n    <label for=\"fName\">First Name:</label><br>\r\n    <input type=\"text\" formControlName=\"fName\" id=\"fName\"><br>\r\n    <span *ngIf=\"!formValid[0]\">\r\n      - Minimum 2 letters<br>\r\n      - Just letters from a-z<br>\r\n      - Can not contain numbers\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-section\">\r\n    <label for=\"lName\">Last Name:</label><br>\r\n    <input type=\"text\" formControlName=\"lName\" id=\"lName\"><br>\r\n    <span *ngIf=\"!formValid[1]\">\r\n      - Minimum 2 letters<br>\r\n      - Just letters from a-z<br>\r\n      - Can not contain numbers\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-section\">\r\n    <label for=\"phone\">Telephone:</label><br>\r\n    <input type=\"text\" formControlName=\"phone\" id=\"phone\"><br>\r\n    <span *ngIf=\"!formValid[2]\">\r\n      - Countrycode is optional<br>\r\n      - Can not contain letters<br>\r\n      - Can contain spaces, dashes or periods in number.\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-section\">\r\n    <label for=\"mail\">Email:</label><br>\r\n    <input type=\"text\" formControlName=\"mail\" id=\"mail\"><br>\r\n    <span *ngIf=\"!formValid[3]\">\r\n      - Must be written in the form of a mail address.<br>\r\n      - example: name@domain.com\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-section\">\r\n    <button type=\"submit\">Send</button>\r\n    <h2>{{message}}</h2>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/contact-form/contact-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-section {\n  margin: 0 auto;\n  margin-bottom: 20px;\n  width: 50%; }\n  .form-section label {\n    font-size: 20px; }\n  .form-section input {\n    margin-top: 5px;\n    width: 100%;\n    font-size: 20px;\n    padding: 5px;\n    box-sizing: border-box; }\n  .form-section input:focus {\n      outline: none; }\n  .form-section span {\n    background-color: lightcoral;\n    display: block;\n    width: 100%;\n    padding: 5px;\n    box-sizing: border-box; }\n  .form-section button {\n    margin-top: 20px;\n    border: none;\n    padding: 10px 20px;\n    background-color: #F96167;\n    font-size: 15px;\n    color: white; }\n  .form-section button:hover {\n      cursor: pointer;\n      background-color: #fcabae; }\n  .form-section button:focus {\n      outline: none; }\n  @media only screen and (max-width: 800px) {\n  .form-section {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWZvcm0vQzpcXFVzZXJzXFxNYXJ0aW5cXERvY3VtZW50c1xcRnJvbnRlbmRcXGpzZnJhbWV3b3Jrc1xcYW5ndWxhclxcTm9yb2ZmLUZpbmFsQ0Evc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnRhY3QtZm9ybVxcY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7RUFIYjtJQU1PLGVBQWUsRUFBQTtFQU50QjtJQVVPLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBc0IsRUFBQTtFQWQ3QjtNQWlCVyxhQUFhLEVBQUE7RUFqQnhCO0lBc0JPLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0IsRUFBQTtFQTFCN0I7SUE4Qk8sZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZLEVBQUE7RUFuQ25CO01Bc0NXLGVBQWU7TUFDZix5QkFBdUMsRUFBQTtFQXZDbEQ7TUEwQ1csYUFBYSxFQUFBO0VBTTdCO0VBR1E7SUFDSSxXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuXHJcbiAgICAmLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgJiBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiBzcGFuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk2MTY3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oI0Y5NjE2NywgMTUlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5mb3JtIHtcclxuXHJcbiAgICAgICAgJi1zZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/contact-form/contact-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact/contact.service */ "./src/app/services/contact/contact.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(contactService) {
        this.contactService = contactService;
        this.formValid = [true, true, true, true];
        this.sendContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            lName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    ContactFormComponent.prototype.onSend = function (formValues) {
        this.formValid = this.contactService.validation(formValues);
        if (this.formValid[4]) {
            this.sendContact.emit(false);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ContactFormComponent.prototype, "sendContact", void 0);
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/components/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/components/contact-form/contact-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/components/login-form/login-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onLogin(form.value)\" class=\"form\">\r\n  <div class=\"form-section\">\r\n    <label for=\"username\">Username:</label><br>\r\n    <input type=\"text\" formControlName=\"username\" id=\"username\">\r\n  </div>\r\n  <div class=\"form-section\">\r\n    <label for=\"password\">Password:</label><br>\r\n    <input type=\"password\" formControlName=\"password\" id=\"password\">\r\n\r\n    <span *ngIf=\"showError\" class=\"form-error\">\r\n      - Wrong username or password\r\n    </span>\r\n  </div>\r\n  <div class=\"form-section\">\r\n    <button type=\"submit\">Login</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-section {\n  margin: 0 auto;\n  margin-bottom: 20px;\n  width: 50%; }\n  .form-section label {\n    font-size: 20px; }\n  .form-section input {\n    margin-top: 5px;\n    width: 100%;\n    font-size: 20px;\n    padding: 5px;\n    box-sizing: border-box; }\n  .form-section input:focus {\n      outline: none; }\n  .form-section span {\n    margin-top: 20px;\n    background-color: lightcoral;\n    display: block;\n    width: 100%;\n    padding: 5px;\n    box-sizing: border-box; }\n  .form-section button {\n    margin-top: 20px;\n    border: none;\n    padding: 10px 20px;\n    background-color: #F96167;\n    font-size: 15px;\n    color: white; }\n  .form-section button:hover {\n      cursor: pointer;\n      background-color: #fcabae; }\n  .form-section button:focus {\n      outline: none; }\n  @media only screen and (max-width: 800px) {\n  .form-section {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL0M6XFxVc2Vyc1xcTWFydGluXFxEb2N1bWVudHNcXEZyb250ZW5kXFxqc2ZyYW1ld29ya3NcXGFuZ3VsYXJcXE5vcm9mZi1GaW5hbENBL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpbi1mb3JtXFxsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7RUFIYjtJQU1PLGVBQWUsRUFBQTtFQU50QjtJQVVPLGVBQWU7SUFDZixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBc0IsRUFBQTtFQWQ3QjtNQWlCVyxhQUFhLEVBQUE7RUFqQnhCO0lBc0JPLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCLEVBQUE7RUEzQjdCO0lBK0JPLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWSxFQUFBO0VBcENuQjtNQXVDVyxlQUFlO01BQ2YseUJBQXVDLEVBQUE7RUF4Q2xEO01BMkNXLGFBQWEsRUFBQTtFQU03QjtFQUVRO0lBQ0ksV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcclxuXHJcbiAgICAmLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgJiBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk2MTY3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oI0Y5NjE2NywgMTUlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5mb3JtIHtcclxuICAgICAgICAmLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login/login.service */ "./src/app/services/login/login.service.ts");




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(loginService) {
        this.loginService = loginService;
        this.showError = false;
        this.onLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    LoginFormComponent.prototype.onLogin = function (formValues) {
        if (this.loginService.login(formValues.username, formValues.password)) {
            this.loginService.startSession();
            this.onLoginUser.emit(true);
        }
        else {
            this.showError = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginFormComponent.prototype, "onLoginUser", void 0);
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/components/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\r\n    <div class=\"navigation-title\">\r\n        <h1 (click)=\"goCards()\"><i class=\"fas fa-gamepad\"></i> Magic: Card Game</h1>\r\n    </div>\r\n\r\n    <div class=\"navigation-burger\">\r\n        <i class=\"fas fa-bars\" (click)=\"navToggle()\"></i>\r\n    </div>\r\n\r\n    <div class=\"navigation-links\" [ngClass]=\"{'navigation-show': !hidden }\">\r\n        <button (click)=\"goCards()\" [ngClass]=\"{'navigation-links-active': (router.url == '/cards')}\">Cards</button>\r\n        <button (click)=\"goAbout()\" [ngClass]=\"{'navigation-links-active': (router.url == '/about')}\">About</button>\r\n        <button (click)=\"goContact()\" [ngClass]=\"{'navigation-links-active': (router.url == '/contact')}\">Contact</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\n  background-color: #F96167;\n  font-family: 'Raleway', sans-serif; }\n  .navigation-title {\n    display: inline-block;\n    width: 48%;\n    color: white;\n    padding-top: 20px;\n    padding-left: 2%; }\n  .navigation-title h1 {\n      cursor: pointer;\n      font-size: 30px; }\n  .navigation-title i {\n      color: #FCE77D; }\n  .navigation-links {\n    display: inline-block;\n    text-align: right;\n    width: 48%;\n    padding-right: 2%; }\n  .navigation-links button {\n      border: none;\n      background-color: #F96167;\n      cursor: pointer;\n      color: #FCE77D;\n      font-size: 20px;\n      padding: 10px 20px; }\n  .navigation-links button:focus {\n        outline: none; }\n  .navigation-links button:hover {\n        border-bottom: 3px #FCE77D solid;\n        color: black; }\n  .navigation-links-active {\n      padding-right: 20px;\n      border-bottom: 3px #FCE77D solid !important; }\n  .navigation-burger {\n    cursor: pointer;\n    font-size: 30px;\n    color: #FCE77D;\n    display: hidden;\n    text-align: right;\n    display: none; }\n  @media only screen and (max-width: 800px) {\n  .navigation-title {\n    width: 88%; }\n  .navigation-burger {\n    width: 8%;\n    display: inline-block; }\n  .navigation-links {\n    display: none;\n    width: 100%; }\n    .navigation-links button {\n      width: 100%;\n      background-color: #FCE77D;\n      color: #F96167; }\n      .navigation-links button:hover {\n        border: none; }\n  .navigation-show {\n    display: inline-block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcTWFydGluXFxEb2N1bWVudHNcXEZyb250ZW5kXFxqc2ZyYW1ld29ya3NcXGFuZ3VsYXJcXE5vcm9mZi1GaW5hbENBL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGtDQUFrQyxFQUFBO0VBRWxDO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBTG5CO01BUU8sZUFBZTtNQUNmLGVBQWUsRUFBQTtFQVR0QjtNQWFPLGNBQWMsRUFBQTtFQUl0QjtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGlCQUFpQixFQUFBO0VBSnBCO01BT08sWUFBWTtNQUNaLHlCQUF3QjtNQUN4QixlQUFlO01BQ2YsY0FBYztNQUNkLGVBQWU7TUFDZixrQkFBa0IsRUFBQTtFQVp6QjtRQWVXLGFBQWEsRUFBQTtFQWZ4QjtRQW1CVyxnQ0FBZ0M7UUFDaEMsWUFBWSxFQUFBO0VBSXBCO01BQ0ksbUJBQW1CO01BQ25CLDJDQUEyQyxFQUFBO0VBSW5EO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhLEVBQUE7RUFJckI7RUFFUTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0ksU0FBUztJQUNULHFCQUFxQixFQUFBO0VBR3pCO0lBRUksYUFBYTtJQUNiLFdBQVcsRUFBQTtJQUhkO01BTU8sV0FBVztNQUNYLHlCQUF3QjtNQUN4QixjQUFjLEVBQUE7TUFSckI7UUFXVyxZQUFZLEVBQUE7RUFLeEI7SUFDSSxxQkFBcUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NjE2NztcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZDRTc3RDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYtbGlua3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG5cclxuICAgICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRjk2MTY3O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkNFNzdEO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggI0ZDRTc3RCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1hY3RpdmUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggI0ZDRTc3RCBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWJ1cmdlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBjb2xvcjogI0ZDRTc3RDtcclxuICAgICAgICBkaXNwbGF5OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICB3aWR0aDogODglO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ1cmdlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1saW5rcyB7XHJcbiAgICAgICAgICAgIC8vZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0ZDRTc3RDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjk2MTY3O1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLXNob3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
        this.hidden = true;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.goAbout = function () {
        this.router.navigate(['about']);
    };
    NavigationComponent.prototype.goContact = function () {
        this.router.navigate(['contact']);
    };
    NavigationComponent.prototype.goCards = function () {
        this.router.navigate(['cards']);
    };
    NavigationComponent.prototype.navToggle = function () {
        this.hidden = !this.hidden;
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n  <input class=\"form-text\" (keyup)=\"onKey($event)\" type=\"text\" placeholder=\"Search by card name\"><br>\r\n  <input\r\n    [checked]=\"searchParameters.rarity[0]\"\r\n    (change)=\"(searchParameters.rarity[0] === '') ? searchParameters.rarity[0] = 'common' : searchParameters.rarity[0] = ''\"\r\n    type=\"checkbox\"\r\n    id=\"common\"\r\n    checked>\r\n  <Label class=\"form-checkbox\" for=\"common\">Common</Label>\r\n\r\n  <input \r\n    [checked]=\"searchParameters.rarity[1]\"\r\n    (change)=\"(searchParameters.rarity[1] === '') ? searchParameters.rarity[1] = 'uncommon' : searchParameters.rarity[1] = ''\"\r\n    type=\"checkbox\"\r\n    id=\"uncommon\"\r\n    checked>\r\n  <Label class=\"form-checkbox\" for=\"uncommon\">Uncommon</Label>\r\n\r\n  <input\r\n    [checked]=\"searchParameters.rarity[2]\"\r\n    (change)=\"(searchParameters.rarity[2] === '') ? searchParameters.rarity[2] = 'rare' : searchParameters.rarity[2] = ''\"\r\n    type=\"checkbox\"\r\n    id=\"rare\"\r\n    checked>\r\n  <Label class=\"form-checkbox\" for=\"rare\">Rare</Label>\r\n\r\n  <input\r\n    [checked]=\"searchParameters.rarity[3]\"\r\n    (change)=\"(searchParameters.rarity[3] === '') ? searchParameters.rarity[3] = 'mythic' : searchParameters.rarity[3] = ''\"\r\n    type=\"checkbox\"\r\n    id=\"mythic\"\r\n    checked>\r\n  <Label class=\"form-checkbox\" for=\"mythic\">Mythic</Label>\r\n\r\n  <br>\r\n  <button (click)=\"onSubmit()\" type=\"submit\">\r\n    Search\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  font-family: 'Raleway', sans-serif;\n  margin-bottom: 50px; }\n  .form-text {\n    font-size: 20px;\n    width: 100%;\n    margin-bottom: 10px;\n    padding: 5px; }\n  .form-text:focus {\n      outline: none; }\n  .form-checkbox {\n    padding-right: 30px; }\n  .form button {\n    margin-top: 20px;\n    border: none;\n    padding: 10px 20px;\n    background-color: #F96167;\n    font-size: 15px;\n    color: white; }\n  .form button:hover {\n      cursor: pointer;\n      background-color: #fcabae; }\n  .form button:focus {\n      outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvQzpcXFVzZXJzXFxNYXJ0aW5cXERvY3VtZW50c1xcRnJvbnRlbmRcXGpzZnJhbWV3b3Jrc1xcYW5ndWxhclxcTm9yb2ZmLUZpbmFsQ0Evc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQWtDO0VBQ2xDLG1CQUFtQixFQUFBO0VBRW5CO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0VBSmY7TUFPTyxhQUFhLEVBQUE7RUFJckI7SUFDSSxtQkFBbUIsRUFBQTtFQWhCM0I7SUFvQlEsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZLEVBQUE7RUF6QnBCO01BNEJZLGVBQWU7TUFDZix5QkFBdUMsRUFBQTtFQTdCbkQ7TUFnQ1ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gICAgJi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWNoZWNrYm94IHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NjE2NztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCNGOTYxNjcsIDE1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.searchParameters = {
            searchValue: '',
            rarity: ['common', 'uncommon', 'rare', 'mythic']
        };
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onKey = function (event) {
        this.searchParameters.searchValue = event.target.value;
    };
    SearchComponent.prototype.onSubmit = function () {
        this.onSearch.emit(this.searchParameters);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "onSearch", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/selected-card/selected-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/selected-card/selected-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-img\">\r\n        <img [src]=\"card.imageUrl\" alt=\"Card\">\r\n    </div>\r\n    <div class=\"card-info\">\r\n        <h2>{{card.name}}</h2>\r\n        <p><b>Info: </b> {{card.originalText}}</p>\r\n        <p><b>Rarity:</b> {{card.rarity}}</p>\r\n        <p><b>Colors: </b> {{card.colors.join(\", \")}}</p>\r\n        <p *ngIf=\"card.subtypes.length !== 0\"><b>Subtypes:</b> {{card.subtypes.join(\", \")}}</p>\r\n        <p *ngIf=\"card.types.length !== 0\"><b>Types:</b> {{card.types.join(\", \")}}</p>\r\n        <p *ngIf=\"card.manaCost\"><b>Mana:</b> {{mana}}</p>\r\n    </div>\r\n    <div class=\"card-help\">\r\n        <p><b>Mana Help</b></p>\r\n        <ul>\r\n            <li>W: White</li>\r\n            <li>U: Blue</li>\r\n            <li>B: Black</li>\r\n            <li>R: Red</li>\r\n            <li>G: Green</li>\r\n            <li>C: None</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/selected-card/selected-card.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/selected-card/selected-card.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 0 auto;\n  width: 100%;\n  margin-bottom: 100px; }\n  .card-img {\n    display: inline-block;\n    text-align: right;\n    width: 50%;\n    margin-bottom: 50px; }\n  .card-img img {\n      width: 300px;\n      max-width: 100%; }\n  .card-info {\n    display: inline-block;\n    vertical-align: top;\n    text-align: left;\n    width: 30%;\n    padding-left: 2%;\n    margin-bottom: 50px; }\n  .card-help {\n    display: block; }\n  .card-help p {\n      text-align: center; }\n  .card-help ul {\n      display: block;\n      margin: 0 auto;\n      text-align: center;\n      padding: 0;\n      list-style: none; }\n  @media only screen and (max-width: 800px) {\n  .card {\n    width: 100%; }\n    .card-img {\n      width: 100%;\n      text-align: left;\n      text-align: center; }\n    .card-info {\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3RlZC1jYXJkL0M6XFxVc2Vyc1xcTWFydGluXFxEb2N1bWVudHNcXEZyb250ZW5kXFxqc2ZyYW1ld29ya3NcXGFuZ3VsYXJcXE5vcm9mZi1GaW5hbENBL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWxlY3RlZC1jYXJkXFxzZWxlY3RlZC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0IsRUFBQTtFQUVwQjtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLG1CQUFtQixFQUFBO0VBSnRCO01BT08sWUFBWTtNQUNaLGVBQWUsRUFBQTtFQUl2QjtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFHdkI7SUFDSSxjQUFjLEVBQUE7RUFEakI7TUFHTyxrQkFBa0IsRUFBQTtFQUh6QjtNQU1PLGNBQWM7TUFDZCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixnQkFBZ0IsRUFBQTtFQUs1QjtFQUNJO0lBQ0ksV0FBVyxFQUFBO0lBRVg7TUFDSSxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0lBR3RCO01BQ0ksV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdGVkLWNhcmQvc2VsZWN0ZWQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuXHJcbiAgICAmLWltZyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICAgICAgJiBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtaGVscCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgJiBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICYtaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/selected-card/selected-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/selected-card/selected-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: SelectedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedCardComponent", function() { return SelectedCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_magic_magic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/magic/magic.service */ "./src/app/services/magic/magic.service.ts");



var SelectedCardComponent = /** @class */ (function () {
    function SelectedCardComponent(magicService) {
        this.magicService = magicService;
        this.mana = '';
    }
    SelectedCardComponent.prototype.ngOnInit = function () {
        this.card = this.magicService.getCard();
        if (this.card.manaCost) {
            this.getMana(this.card.manaCost);
        }
    };
    SelectedCardComponent.prototype.getMana = function (mana) {
        var manaRegex = /[{}]/;
        var manaList = mana.split(manaRegex).filter(function (item) { return item !== ""; });
        if (parseInt(manaList[0])) {
            var manaNum = parseInt(manaList[0]);
            manaNum += manaList.length - 1;
            manaList.shift();
            this.mana += manaNum + " mana. Including: ";
        }
        this.mana += manaList.join(', ');
    };
    SelectedCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selected-card',
            template: __webpack_require__(/*! ./selected-card.component.html */ "./src/app/components/selected-card/selected-card.component.html"),
            styles: [__webpack_require__(/*! ./selected-card.component.scss */ "./src/app/components/selected-card/selected-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_magic_magic_service__WEBPACK_IMPORTED_MODULE_2__["MagicService"]])
    ], SelectedCardComponent);
    return SelectedCardComponent;
}());



/***/ }),

/***/ "./src/app/components/text-toggle/text-toggle.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/text-toggle/text-toggle.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\r\n  <div (click)=\"display=!display\" class=\"dropdown-head\">DEFEAT YOUR OPPONENT</div>\r\n  <div [ngClass]=\"display ? 'text-display' : 'text-hide'\" class=\"dropdown-body\">\r\n    Each player starts the game with 20 life. Knock your opponent down to 0 life, and you win. The most common way to do this is to summon creatures and attack with them. \r\n    <br><br>\r\n    Creature cards are the most important part of many Magic decks. They’re really easy to spot—just look at the lower right of a card. If you see a pair of numbers separated by a slash, you’ve got a creature card. Once it’s on the battlefield, a creature continues to attack and defend for you until your opponent can find a way to take it out. \r\n    <br><br>  \r\n    Most games become a race to see who can deal the most damage first. Summoning the best creatures will help you win that race every time. Check out the section on casting creature spells.\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/text-toggle/text-toggle.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/text-toggle/text-toggle.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-display {\n  display: block; }\n\n.text-hide {\n  display: none; }\n\n.dropdown {\n  border: gray 1px solid;\n  margin-bottom: 50px; }\n\n.dropdown-head {\n    width: 100%;\n    background-color: #F96167;\n    color: white;\n    font-size: 20px;\n    padding: 20px 0;\n    text-align: center; }\n\n.dropdown-head:hover {\n      cursor: pointer; }\n\n.dropdown-body {\n    padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXh0LXRvZ2dsZS9DOlxcVXNlcnNcXE1hcnRpblxcRG9jdW1lbnRzXFxGcm9udGVuZFxcanNmcmFtZXdvcmtzXFxhbmd1bGFyXFxOb3JvZmYtRmluYWxDQS9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGV4dC10b2dnbGVcXHRleHQtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWEsRUFBQTs7QUFJckI7RUFDSSxzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBRW5CO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0IsRUFBQTs7QUFOckI7TUFTTyxlQUFlLEVBQUE7O0FBSXZCO0lBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZXh0LXRvZ2dsZS90ZXh0LXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcclxuICAgICYtZGlzcGxheSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJi1oaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gICAgYm9yZGVyOiBncmF5IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBcclxuICAgICYtaGVhZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NjE2NztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/text-toggle/text-toggle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/text-toggle/text-toggle.component.ts ***!
  \*****************************************************************/
/*! exports provided: TextToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextToggleComponent", function() { return TextToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextToggleComponent = /** @class */ (function () {
    function TextToggleComponent() {
        this.display = false;
    }
    TextToggleComponent.prototype.ngOnInit = function () {
    };
    TextToggleComponent.prototype.toggle = function () {
        this.display = !this.display;
    };
    TextToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-toggle',
            template: __webpack_require__(/*! ./text-toggle.component.html */ "./src/app/components/text-toggle/text-toggle.component.html"),
            styles: [__webpack_require__(/*! ./text-toggle.component.scss */ "./src/app/components/text-toggle/text-toggle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextToggleComponent);
    return TextToggleComponent;
}());



/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container about\">\r\n    <h1 class=\"title\">About</h1>\r\n    <div>\r\n        First published in 1993 by Wizards of the Coast, Magic was the first trading card game produced and it continues to thrive, with approximately twenty million players as of 2015. Magic can be played by two or more players in various formats, which fall into one of two categories: constructed or limited. Limited formats involve players building a deck spontaneously out of a pool of random cards with a minimum deck size of 40 cards. The other major category of formats is constructed. In constructed, players created decks from cards they own, usually 60 cards with no more than 4 of any given card. Magic is played in person with printed cards, or using a deck of virtual cards through the Internet-based Magic: The Gathering Online, or on a smartphone or tablet, or through other programs. \r\n        <br><br>\r\n        Each game represents a battle between wizards known as \"planeswalkers\", who employ spells, artifacts, and creatures depicted on individual Magic cards to defeat their opponents. Although the original concept of the game drew heavily from the motifs of traditional fantasy role-playing games such as Dungeons Dragons, the gameplay of Magic bears little similarity to pencil-and-paper adventure games, while having substantially more cards and more complex rules than many other card games. \r\n        <br><br>\r\n        New cards are released on a regular basis through expansion sets. An organized tournament system played at an international level and a worldwide community of professional Magic players has developed, as well as a substantial secondary market for Magic cards. Certain Magic cards can be valuable due to their rarity and utility in game play, with prices ranging from a few cents to thousands of dollars.\r\n    </div>\r\n    <br>\r\n    <app-text-toggle></app-text-toggle>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\n  font-family: 'Raleway', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtcGFnZS9DOlxcVXNlcnNcXE1hcnRpblxcRG9jdW1lbnRzXFxGcm9udGVuZFxcanNmcmFtZXdvcmtzXFxhbmd1bGFyXFxOb3JvZmYtRmluYWxDQS9zcmNcXGFwcFxccGFnZXNcXGFib3V0LXBhZ2VcXGFib3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.scss */ "./src/app/pages/about-page/about-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/card-specific-page/card-specific-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/card-specific-page/card-specific-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container\">\r\n    <h1 class=\"title\">Selected Card</h1>\r\n    <app-selected-card></app-selected-card>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/card-specific-page/card-specific-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/card-specific-page/card-specific-page.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmQtc3BlY2lmaWMtcGFnZS9jYXJkLXNwZWNpZmljLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/card-specific-page/card-specific-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/card-specific-page/card-specific-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: CardSpecificPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSpecificPageComponent", function() { return CardSpecificPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardSpecificPageComponent = /** @class */ (function () {
    function CardSpecificPageComponent() {
    }
    CardSpecificPageComponent.prototype.ngOnInit = function () {
    };
    CardSpecificPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-specific-page',
            template: __webpack_require__(/*! ./card-specific-page.component.html */ "./src/app/pages/card-specific-page/card-specific-page.component.html"),
            styles: [__webpack_require__(/*! ./card-specific-page.component.scss */ "./src/app/pages/card-specific-page/card-specific-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardSpecificPageComponent);
    return CardSpecificPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/cards-page/cards-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/cards-page/cards-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container\">\r\n  <h1 class=\"title\">Cards</h1>\r\n\r\n  <br>\r\n  <br>\r\n  \r\n  <app-search (onSearch)=\"search($event)\"></app-search>\r\n  \r\n  <br>\r\n  <br>\r\n  \r\n  <div class=\"loader\" *ngIf=\"loading\"></div>\r\n  \r\n  <div *ngIf=\"allCards.length > 0\">\r\n    <app-card \r\n      *ngFor=\"let card of allCards\"\r\n      [card]=\"card\">\r\n    </app-card>\r\n  </div>\r\n  <div *ngIf=\"allCards.length === 0 && !loading\">\r\n    <p>No cards found</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/cards-page/cards-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/cards-page/cards-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\n  border: 16px solid #f3f3f3;\n  border-top: 16px solid #F96167;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n  margin: 0 auto; }\n\np {\n  color: red;\n  text-align: center;\n  font-size: 20px; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZHMtcGFnZS9DOlxcVXNlcnNcXE1hcnRpblxcRG9jdW1lbnRzXFxGcm9udGVuZFxcanNmcmFtZXdvcmtzXFxhbmd1bGFyXFxOb3JvZmYtRmluYWxDQS9zcmNcXGFwcFxccGFnZXNcXGNhcmRzLXBhZ2VcXGNhcmRzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJO0lBQUssK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBQzVCO0lBQU8saUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBRnBDO0VBQ0k7SUFBSywrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFDNUI7SUFBTyxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcmRzLXBhZ2UvY2FyZHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkICNGOTYxNjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cards-page/cards-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/cards-page/cards-page.component.ts ***!
  \**********************************************************/
/*! exports provided: CardsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageComponent", function() { return CardsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_magic_magic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/magic/magic.service */ "./src/app/services/magic/magic.service.ts");



var CardsPageComponent = /** @class */ (function () {
    function CardsPageComponent(magicService) {
        this.magicService = magicService;
        this.allCards = [];
    }
    CardsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.magicService.getMagic().subscribe(function (response) {
            _this.allCards = response.cards.filter(function (card) { return card.imageUrl; });
            _this.loading = false;
        }, function (error) {
            console.error(error);
        });
    };
    CardsPageComponent.prototype.search = function (para) {
        var _this = this;
        this.loading = true;
        this.allCards = [];
        this.magicService.getSearch(para).subscribe(function (response) {
            _this.allCards = response.cards.filter(function (card) { return card.imageUrl; });
            _this.loading = false;
        }, function (error) {
            console.error(error);
        });
    };
    CardsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards-page',
            template: __webpack_require__(/*! ./cards-page.component.html */ "./src/app/pages/cards-page/cards-page.component.html"),
            styles: [__webpack_require__(/*! ./cards-page.component.scss */ "./src/app/pages/cards-page/cards-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_magic_magic_service__WEBPACK_IMPORTED_MODULE_2__["MagicService"]])
    ], CardsPageComponent);
    return CardsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<div class=\"container\">\r\n\r\n    <h1 class=\"title\">Contact</h1>\r\n    \r\n    <h2 *ngIf=\"!displayForm\">Message Sent</h2>\r\n    <app-contact-form *ngIf=\"displayForm\" (sendContact)=\"sendt($emit)\"></app-contact-form>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 100px;\n  text-align: center;\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL0M6XFxVc2Vyc1xcTWFydGluXFxEb2N1bWVudHNcXEZyb250ZW5kXFxqc2ZyYW1ld29ya3NcXGFuZ3VsYXJcXE5vcm9mZi1GaW5hbENBL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdC1wYWdlXFxjb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
        this.displayForm = true;
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent.prototype.sendt = function (event) {
        this.displayForm = event;
    };
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/pages/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/pages/contact-page/contact-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <h1 class=\"title\">Login</h1>\r\n    \r\n    <app-login-form (onLoginUser)=\"login($event)\"></app-login-form>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router) {
        this.router = router;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.login = function (loginSuccess) {
        if (!loginSuccess) {
        }
        else {
            this.router.navigate(['cards']);
        }
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/services/contact/contact.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/contact/contact.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactService = /** @class */ (function () {
    function ContactService() {
    }
    ContactService.prototype.validation = function (formValues) {
        var valid = [true, true, true, true, true];
        if ((/^[a-z]{2,}$/i).test(formValues.fName) === false || formValues.fName === null) {
            valid[0] = false;
            valid[4] = false;
        }
        if ((/^[a-z]{2,}$/i).test(formValues.lName) === false || formValues.lName === null) {
            valid[1] = false;
            valid[4] = false;
        }
        if ((/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{4,25}$/).test(formValues.phone) === false) {
            valid[2] = false;
            valid[4] = false;
        }
        if ((/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/).test(formValues.mail) === false) {
            valid[3] = false;
            valid[4] = false;
        }
        return valid;
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_account_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/account.mock */ "./src/app/account.mock.ts");



var LoginService = /** @class */ (function () {
    function LoginService() {
        this.account = src_app_account_mock__WEBPACK_IMPORTED_MODULE_2__["MOCK_ACCOUNT"];
    }
    LoginService.prototype.isAuthorized = function () {
        return window.localStorage.getItem('token');
    };
    LoginService.prototype.login = function (username, password) {
        return username === this.account.username && password === this.account.password;
    };
    LoginService.prototype.startSession = function () {
        window.localStorage.setItem('token', 'Sl9123jL#!lkajds)8');
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/magic/magic.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/magic/magic.service.ts ***!
  \*************************************************/
/*! exports provided: MagicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicService", function() { return MagicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MagicService = /** @class */ (function () {
    function MagicService(http) {
        this.http = http;
    }
    MagicService.prototype.getMagic = function () {
        return this.http.get('https://api.magicthegathering.io/v1/cards');
    };
    MagicService.prototype.getSearch = function (parameters) {
        var filteredRarity = parameters.rarity.filter(function (item) { return (item.length > 0); });
        var rarity = filteredRarity.join('|');
        var name = parameters.searchValue.trim().split(" ").join("+");
        return this.http.get("https://api.magicthegathering.io/v1/cards?name=" + name + "&rarity=" + rarity);
    };
    MagicService.prototype.setCard = function (card) {
        this.selectedCard = card;
    };
    MagicService.prototype.getCard = function () {
        return this.selectedCard;
    };
    MagicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MagicService);
    return MagicService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Martin\Documents\Frontend\jsframeworks\angular\Noroff-FinalCA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map