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
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/work/work.component */ "./src/app/pages/work/work.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_specific_project_specific_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/specific-project/specific-project.component */ "./src/app/pages/specific-project/specific-project.component.ts");








var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'work', component: _pages_work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'project/:id', component: _pages_specific_project_specific_project_component__WEBPACK_IMPORTED_MODULE_7__["SpecificProjectComponent"] }
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

module.exports = "<router-outlet></router-outlet>\r\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/work/work.component */ "./src/app/pages/work/work.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/components/project/project.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _services_project_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/project/project.service */ "./src/app/services/project/project.service.ts");
/* harmony import */ var _pages_specific_project_specific_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/specific-project/specific-project.component */ "./src/app/pages/specific-project/specific-project.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _pages_work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _pages_specific_project_specific_project_component__WEBPACK_IMPORTED_MODULE_12__["SpecificProjectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_services_project_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n  <a routerLink=\"/work\" routerLinkActive=\"active\">Work</a>\r\n  <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\r\n  <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  position: fixed;\n  bottom: 0;\n  background-color: rgba(19, 16, 22, 0.9);\n  width: 100%;\n  text-align: center;\n  z-index: 999;\n  font-weight: bold; }\n  nav a {\n    text-decoration: none;\n    display: inline-block;\n    color: #b1b0b0;\n    padding: 15px 25px; }\n  nav a:hover {\n      color: white; }\n  nav a.active {\n      color: white; }\n  @media only screen and (max-width: 500px) {\n  nav a {\n    padding: 15px 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvQzpcXFVzZXJzXFxNYXJ0aW5cXERvY3VtZW50c1xcRnJvbnRlbmRcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsdUNBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0VBUHJCO0lBVVEscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUF5QjtJQUN6QixrQkFBa0IsRUFBQTtFQWIxQjtNQWdCWSxZQUFZLEVBQUE7RUFoQnhCO01Bb0JZLFlBQVksRUFBQTtFQUt4QjtFQUNJO0lBRVEsa0JBQWtCLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOSwgMTYsIDIyLCAwLjkpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAmIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY29sb3I6IHJnYigxNzcsIDE3NiwgMTc2KTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgbmF2IHtcclxuICAgICAgICAmIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project\">\r\n  <h1>{{project.title}}</h1>\r\n  <div routerLink=\"/project/{{project.id}}\" class=\"project-img\" [ngStyle]=\"{'background-image' : backgroundStart + project.name + backgroundEnd}\">\r\n    <br>\r\n    <p *ngFor=\"let tool of project.tools\">\r\n      {{tool}}\r\n    </p>\r\n    <br>\r\n  </div>\r\n  <a href=\"{{project.github}}\">Github</a>\r\n  <span></span>\r\n  <a href=\"{{project.host}}\">Website</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project/project.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/project/project.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project {\n  display: inline-block;\n  width: 470px;\n  padding-bottom: 50px;\n  vertical-align: top;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .project-img {\n    width: 100%;\n    height: 250px;\n    margin-bottom: 5px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: white;\n    background-size: cover;\n    cursor: pointer; }\n  .project-img p {\n      color: rgba(0, 0, 0, 0); }\n  .project-img span {\n      color: rgba(0, 0, 0, 0); }\n  .project-img:hover {\n      background-image: none !important;\n      opacity: 0.5;\n      transition: opacity 0.7s; }\n  .project-img:hover p {\n        color: black;\n        transition: color 0.7s;\n        text-align: center;\n        background-color: #bac6fd;\n        display: inline-block;\n        width: 100px;\n        margin: 0 auto;\n        padding: 5px;\n        margin-bottom: 10px;\n        margin-left: 10px;\n        margin-right: 10px; }\n  .project h1 {\n    color: #bac6fd;\n    padding-bottom: 20px;\n    font-size: 24px; }\n  .project a {\n    text-decoration: none;\n    display: inline-block;\n    width: 230px;\n    box-sizing: border-box;\n    border: solid 2px white;\n    color: white;\n    text-align: center; }\n  .project a:hover {\n      border-color: #bac6fd;\n      color: #bac6fd; }\n  .project span {\n    width: 10px;\n    display: inline-block; }\n  @media only screen and (max-width: 1000px) {\n  .project {\n    display: block;\n    margin: 0 auto; } }\n  @media only screen and (max-width: 530px) {\n  .project {\n    width: 96%;\n    padding-left: 2%;\n    padding-right: 2%; }\n    .project a {\n      width: 49%; }\n    .project span {\n      width: 2%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L0M6XFxVc2Vyc1xcTWFydGluXFxEb2N1bWVudHNcXEZyb250ZW5kXFxwb3J0Zm9saW9cXHBvcnRmb2xpby9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvamVjdFxccHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFFbkI7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZSxFQUFBO0VBUmxCO01BV08sdUJBQXVCLEVBQUE7RUFYOUI7TUFlTyx1QkFBdUIsRUFBQTtFQWY5QjtNQW1CTyxpQ0FBaUM7TUFDakMsWUFBWTtNQUNaLHdCQUF3QixFQUFBO0VBckIvQjtRQXlCVyxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQix5QkFBb0M7UUFDcEMscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixjQUFjO1FBQ2QsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7RUEzQ2xDO0lBaURRLGNBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixlQUFlLEVBQUE7RUFuRHZCO0lBdURRLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0VBN0QxQjtNQWdFWSxxQkFBK0I7TUFDL0IsY0FBeUIsRUFBQTtFQWpFckM7SUFzRVEsV0FBVztJQUNYLHFCQUFxQixFQUFBO0VBSTdCO0VBQ0k7SUFDSSxjQUFjO0lBQ2QsY0FBYyxFQUFBLEVBQ2pCO0VBR0w7RUFDSTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7SUFIckI7TUFNUSxVQUFVLEVBQUE7SUFObEI7TUFVUSxTQUFTLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ3MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuXHJcbiAgICAmLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICYgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC43cztcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAmIHAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC43cztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE5OCwgMjUzKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgaDEge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTg2LCAxOTgsIDI1Myk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOnJnYigxODYsIDE5OCwgMjUzKTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxODYsIDE5OCwgMjUzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiBzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAucHJvamVjdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcclxuICAgIC5wcm9qZWN0IHtcclxuICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMiU7XHJcblxyXG4gICAgICAgICYgYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIHNwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMiU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/project/project.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/project/project.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        this.backgroundStart = "url('./../../../assets/";
        this.backgroundEnd = ".jpg')";
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectComponent.prototype, "project", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/components/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\r\n  <div class=\"about-row\">\r\n      <h1 class=\"about-title\">About</h1>\r\n  </div>\r\n  <div class=\"about-row\">\r\n    <div class=\"about-col\">\r\n      <h2 class=\"about-undertitle\">Who am I?</h2><br>\r\n      <img src=\"./../../../assets/martin.png\" class=\"about-img\" alt=\"Martin\">\r\n      <p>\r\n        I am a front-end developer fresh out of school from Oslo, Norway.\r\n        <br><br>\r\n        I enjoy creating dynamic and intuitive websites and my weapon of choice is Node and Angular.\r\n      </p>\r\n    </div>\r\n    <div class=\"about-space\"></div>\r\n    <div class=\"about-col\">\r\n      <h2 class=\"about-undertitle\">Timeline</h2><br>\r\n      <div class=\"about-timeline\">\r\n          <p class=\"about-timeline-text\">\r\n            <span class=\"about-timeline-date\">December 1992:</span><br>\r\n            Born\r\n          </p>\r\n          <p class=\"about-timeline-text\">\r\n            <span class=\"about-timeline-date\">August 2012:</span><br>\r\n            Computer Science Bachelor, HiST(NTNU), Trondheim.<br>Exit after first year.\r\n          </p>\r\n          <p class=\"about-timeline-text\">\r\n            <span class=\"about-timeline-date\">Oktober 2013:</span><br>\r\n            Tech support at GoExcellent\r\n          </p>\r\n          <p class=\"about-timeline-text\">\r\n            <span class=\"about-timeline-date\">August 2015:</span><br>\r\n            Pedagogikk, NTNU, Trondheim\r\n          </p>\r\n\r\n          <p class=\"about-timeline-text\">\r\n            <span class=\"about-timeline-date\">August 2017:</span><br>\r\n            Frontend, Noroff, Oslo\r\n          </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-nav></app-nav>"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\n  background-color: #23212c;\n  color: white;\n  min-height: 90vh;\n  padding-bottom: 10vh; }\n  .about-row {\n    margin: 0 auto;\n    width: 1000px;\n    max-width: 100%;\n    padding-top: 50px; }\n  .about-space {\n    width: 4%;\n    display: inline-block; }\n  .about-col {\n    width: 46%;\n    display: inline-block;\n    vertical-align: top;\n    padding-left: 2%; }\n  .about-timeline {\n    border-left: 5px solid white;\n    border-radius: 5px; }\n  .about-timeline-text {\n      padding-left: 30px;\n      padding-bottom: 40px; }\n  .about-timeline-date {\n      color: #bac6fd; }\n  .about-title {\n    text-align: center; }\n  .about-undertitle {\n    color: #bac6fd;\n    font-size: 28px; }\n  .about-img {\n    width: 300px;\n    max-width: 100%;\n    margin-bottom: 30px;\n    border: 5px solid white;\n    box-sizing: border-box; }\n  @media only screen and (max-width: 700px) {\n  .about-col {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvQzpcXFVzZXJzXFxNYXJ0aW5cXERvY3VtZW50c1xcRnJvbnRlbmRcXHBvcnRmb2xpb1xccG9ydGZvbGlvL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7RUFFcEI7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUdyQjtJQUNJLFNBQVM7SUFDVCxxQkFBcUIsRUFBQTtFQUd6QjtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBO0VBR3BCO0lBQ0ksNEJBQTRCO0lBQzVCLGtCQUFrQixFQUFBO0VBRWxCO01BQ0ksa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBO0VBR3hCO01BQ0ksY0FBeUIsRUFBQTtFQUlqQztJQUNJLGtCQUFrQixFQUFBO0VBR3RCO0lBQ0ksY0FBeUI7SUFDekIsZUFBZSxFQUFBO0VBR25CO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQixFQUFBO0VBSTlCO0VBRVE7SUFDSSxXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIxMmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwdmg7XHJcblxyXG4gICAgJi1yb3cge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtc3BhY2Uge1xyXG4gICAgICAgIHdpZHRoOiA0JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb2wge1xyXG4gICAgICAgIHdpZHRoOiA0NiU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIH1cclxuXHJcbiAgICAmLXRpbWVsaW5lIHtcclxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtZGF0ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTg2LCAxOTgsIDI1Myk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLXVuZGVydGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTg2LCAxOTgsIDI1Myk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtaW1nIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLmFib3V0IHtcclxuICAgICAgICAmLWNvbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n    <div class=\"contact-row\">\n      <h1 class=\"contact-title\">Contact</h1>\n    </div>\n    <div class=\"contact-row\">\n      <p class=\"contact-center\">\n        <span class=\"contact-lightblue\">Email:</span>\n        <br>\n        eidemartin_303@hotmail.com\n      </p>\n      <br>\n      <p class=\"contact-center\">\n        <span class=\"contact-lightblue\">Phone:</span>\n        <br>\n        +47 97 54 06 38\n      </p>\n    </div>\n  </div>\n<app-nav></app-nav>"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  background-color: #23212c;\n  color: white;\n  min-height: 90vh;\n  padding-bottom: 10vh; }\n  .contact-title {\n    text-align: center; }\n  .contact-row {\n    margin: 0 auto;\n    width: 1000px;\n    max-width: 100%;\n    padding-top: 50px; }\n  .contact-space {\n    width: 4%;\n    display: inline-block; }\n  .contact-col {\n    width: 46%;\n    display: inline-block;\n    vertical-align: top;\n    padding-left: 2%; }\n  .contact-center {\n    text-align: center; }\n  .contact-lightblue {\n    color: #bac6fd;\n    font-weight: bold;\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9DOlxcVXNlcnNcXE1hcnRpblxcRG9jdW1lbnRzXFxGcm9udGVuZFxccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHBhZ2VzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7RUFFcEI7SUFDSSxrQkFBa0IsRUFBQTtFQUd0QjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0ksU0FBUztJQUNULHFCQUFxQixFQUFBO0VBR3pCO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7RUFHcEI7SUFDSSxrQkFBa0IsRUFBQTtFQUd0QjtJQUNJLGNBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMTJjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLXJvdyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1zcGFjZSB7XHJcbiAgICAgICAgd2lkdGg6IDQlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAmLWNvbCB7XHJcbiAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYtbGlnaHRibHVlIHtcclxuICAgICAgICBjb2xvcjogcmdiKDE4NiwgMTk4LCAyNTMpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <div class=\"home-text\">\r\n    <p class=\"home-text-outer\">\r\n      Martin Eide {{'{'}}\r\n      <br>\r\n      <span class=\"home-text-inner\">\r\n        I enjoy creating dynamic applications in Node.\r\n      </span>\r\n      {{'}'}}\r\n      <a routerLink=\"/work\" class=\"home-text-button\">My Work</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n<app-nav></app-nav>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  background-color: #23212c;\n  height: 60vh;\n  padding-top: 30vh;\n  padding-bottom: 10vh; }\n  .home-text {\n    margin: 0 auto;\n    width: 400px;\n    max-width: 100%; }\n  .home-text-outer {\n      color: #bac6fd;\n      font-size: 25px;\n      padding: 0 30px; }\n  .home-text-inner {\n      display: block;\n      color: white;\n      padding: 10px 0 10px 50px;\n      font-size: 20px; }\n  .home-text-button {\n      display: block;\n      text-decoration: none;\n      border: 2px solid white;\n      color: white;\n      text-align: center;\n      margin-top: 20px; }\n  .home-text-button:hover {\n        border-color: #bac6fd;\n        color: #bac6fd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXE1hcnRpblxcRG9jdW1lbnRzXFxGcm9udGVuZFxccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7RUFFcEI7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWUsRUFBQTtFQUVmO01BQ0ksY0FBeUI7TUFDekIsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQUduQjtNQUNJLGNBQWM7TUFDZCxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLGVBQWUsRUFBQTtFQUduQjtNQUNJLGNBQWM7TUFDZCxxQkFBcUI7TUFDckIsdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZ0JBQWdCLEVBQUE7RUFObkI7UUFTTyxxQkFBK0I7UUFDL0IsY0FBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIxMmM7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xyXG5cclxuICAgICYtdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgJi1vdXRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTg2LCAxOTgsIDI1Myk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1pbm5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDUwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6cmdiKDE4NiwgMTk4LCAyNTMpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigxODYsIDE5OCwgMjUzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/specific-project/specific-project.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/specific-project/specific-project.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\r\n    <div class=\"contact-row\">\r\n      <h1 class=\"contact-title\">{{project.title}}</h1>\r\n    </div>\r\n    <div class=\"contact-row\">\r\n      <img [src]=\"project.img\" alt=\"{{project.name}}\">\r\n      <p>Tools: <b>{{project.tools.join(\", \")}}</b></p>\r\n      <br>\r\n      <div [innerHTML]=\"project.text\"></div>\r\n\r\n      <a href=\"{{project.github}}\">Github</a>\r\n      <a href=\"{{project.host}}\">Website</a>\r\n    </div>\r\n  </div>\r\n<app-nav></app-nav>"

/***/ }),

/***/ "./src/app/pages/specific-project/specific-project.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/specific-project/specific-project.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\n  background-color: #23212c;\n  color: white;\n  min-height: 90vh;\n  padding-bottom: 10vh; }\n  .contact-title {\n    text-align: center; }\n  .contact-row {\n    margin: 0 auto;\n    width: 1000px;\n    max-width: 96%;\n    padding-top: 50px;\n    padding-left: 2%;\n    padding-right: 2%; }\n  .contact img {\n    max-width: 100%;\n    padding-bottom: 20px; }\n  .contact a {\n    text-decoration: none;\n    display: inline-block;\n    margin-top: 20px;\n    width: 100%;\n    padding: 5px;\n    box-sizing: border-box;\n    border: solid 2px white;\n    color: white;\n    text-align: center; }\n  .contact a:hover {\n      border-color: #bac6fd;\n      color: #bac6fd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BlY2lmaWMtcHJvamVjdC9DOlxcVXNlcnNcXE1hcnRpblxcRG9jdW1lbnRzXFxGcm9udGVuZFxccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHBhZ2VzXFxzcGVjaWZpYy1wcm9qZWN0XFxzcGVjaWZpYy1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7RUFFcEI7SUFDSSxrQkFBa0IsRUFBQTtFQUd0QjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFoQnpCO0lBb0JRLGVBQWU7SUFDZixvQkFBb0IsRUFBQTtFQXJCNUI7SUF5QlEscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQWpDMUI7TUFxQ1kscUJBQStCO01BQy9CLGNBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcGVjaWZpYy1wcm9qZWN0L3NwZWNpZmljLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMTJjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLXJvdyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDk2JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgfVxyXG5cclxuICAgICYgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6cmdiKDE4NiwgMTk4LCAyNTMpO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE4NiwgMTk4LCAyNTMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/specific-project/specific-project.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/specific-project/specific-project.component.ts ***!
  \**********************************************************************/
/*! exports provided: SpecificProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificProjectComponent", function() { return SpecificProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project/project.service */ "./src/app/services/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SpecificProjectComponent = /** @class */ (function () {
    function SpecificProjectComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
    }
    SpecificProjectComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.project = this.projectService.getProject(id);
    };
    SpecificProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specific-project',
            template: __webpack_require__(/*! ./specific-project.component.html */ "./src/app/pages/specific-project/specific-project.component.html"),
            styles: [__webpack_require__(/*! ./specific-project.component.scss */ "./src/app/pages/specific-project/specific-project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SpecificProjectComponent);
    return SpecificProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/work/work.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/work/work.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"work\">\n  <div class=\"work-row\">\n    <h1 class=\"work-title\">Work</h1>\n  </div>\n  <div class=\"work-row\">\n    <app-project\n      *ngFor=\"let project of projects\"\n      [project]=\"project\">\n    </app-project>\n  </div>\n</div>\n<app-nav></app-nav>"

/***/ }),

/***/ "./src/app/pages/work/work.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/work/work.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".work {\n  background-color: #23212c;\n  color: white;\n  min-height: 98vh;\n  padding-bottom: 2vh; }\n  .work-title {\n    text-align: center; }\n  .work-row {\n    margin: 0 auto;\n    width: 1000px;\n    max-width: 100%;\n    padding-top: 50px; }\n  .work-space {\n    width: 4%;\n    display: inline-block; }\n  .work-col {\n    width: 46%;\n    display: inline-block;\n    vertical-align: top;\n    padding-left: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29yay9DOlxcVXNlcnNcXE1hcnRpblxcRG9jdW1lbnRzXFxGcm9udGVuZFxccG9ydGZvbGlvXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHBhZ2VzXFx3b3JrXFx3b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7RUFFbkI7SUFDSSxrQkFBa0IsRUFBQTtFQUd0QjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR3JCO0lBQ0ksU0FBUztJQUNULHFCQUFxQixFQUFBO0VBR3pCO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMTJjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWluLWhlaWdodDogOTh2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYtcm93IHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLXNwYWNlIHtcclxuICAgICAgICB3aWR0aDogNCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgICYtY29sIHtcclxuICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/work/work.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/work/work.component.ts ***!
  \**********************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project/project.service */ "./src/app/services/project/project.service.ts");



var WorkComponent = /** @class */ (function () {
    function WorkComponent(projectService) {
        this.projectService = projectService;
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.projects = this.projectService.getProjects();
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/pages/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/pages/work/work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/services/project/project.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/project/project.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectService = /** @class */ (function () {
    function ProjectService() {
        this.projects = [
            {
                id: 0,
                name: "magic",
                title: "Magic Project",
                tools: ['Angular'],
                img: './../../../assets/magic.jpg',
                text: "\n      <br>\n      <p>This is a week long assignment that had the following requirements:</p>\n      <ul>\n        <br>\n        <li><b>Login Page</b></li>\n        <ul>\n          <li>Error for wrong input</li>\n          <li>Save authentication token in local storage</li>\n        </ul>\n        <br>\n        <li><b>Home page</b></li>\n        <ul>\n          <li>Display cards from: https://api.magicthegathering.io/v1/cards</li>\n          <li>Search function</li>\n        </ul>\n        <br>\n        <li><b>Card Specific Page</b></li>\n        <ul>\n          <li>Open this page when selecting specific card</li>\n          <li>More information about card</li>\n        </ul>\n        <br>\n        <li><b>About Page</b></li>\n        <ul>\n          <li>Create a dropdown</li>\n        </ul>\n        <br>\n        <li><b>Contact Page</b></li>\n        <ul>\n          <li>Input validation for contact form</li>\n        </ul>\n      </ul>\n      <br>\n      <p>We were free to use whatever framework we prefered. And i did choose to do this assignment with angular.</p>\n      ",
                github: 'https://github.com/Hortasha/Noroff-FinalCA',
                host: '//magic.eidesite.com'
            },
            {
                id: 1,
                name: "course",
                title: "Course Project",
                tools: ['React', 'Strapi'],
                img: './../../../assets/course.jpg',
                text: "\n      <br>\n      <p>\n        This was a group project together with classmates where we had a real life client.\n        <br><br>\n        The goal was to give the client some input on how they could make the user interface more intuitive on their own website.\n        <br><br>\n        We did choose to limit the work to the course section of their website, and came with a suggestion on how they could improve.\n        <br><br>\n        Our main focus for this project was:\n      </p>\n      <br>\n      <ul>\n        <li>Learning the react framework</li>\n        <li>Limiting the amount of information for the user</li>\n        <li>Creating a admin point of view</li>\n        <li>Intuitive user interface so the user understand how to navigate</li>\n      </ul>\n      ",
                github: 'https://github.com/Hortasha/react-course',
                host: '//course.eidesite.com'
            },
            {
                id: 2,
                name: "thrones",
                title: "Thrones Project",
                tools: ['Socket.io', 'Vanilla JS'],
                img: './../../../assets/thrones.jpg',
                text: "\n      <br>\n      <p>\n        This was a semester project over a month where we were to create a board game based on Game of Thrones.\n        <br><br>\n        Using socket.io was optinal for this assignment, and this was before learning node or any frameworks.\n        <br><br>\n        I did choose to create a server - client communication with socket.io supporting up to ten clients at one time. For this project i only wrote vanilla javascript, html and sass using the socket.io framework.\n        <br><br>\n        This is also the first project i did where i try to get familiar with node, and there are quite a few bad practices on this assignment, but that said it was a project i learned a lot from.\n      </p>\n      ",
                github: 'https://github.com/Hortasha/SemesterOppgaveHost2018',
                host: '//thrones.eidesite.com'
            }
        ];
    }
    ProjectService.prototype.getProject = function (id) {
        return this.projects[id];
    };
    ProjectService.prototype.getProjects = function () {
        return this.projects;
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectService);
    return ProjectService;
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

module.exports = __webpack_require__(/*! C:\Users\Martin\Documents\Frontend\portfolio\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map