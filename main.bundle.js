webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aboutme/aboutme.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{  \r\n    border-radius: 50%;\r\n    height: 150px;\r\n    width: 150px;\r\n    -webkit-transform: rotate(91deg);\r\n    transform: rotate(91deg);\r\n    -webkit-box-shadow: 1px -1px 20px 9px #561010;\r\n    box-shadow: 1px -1px 20px 9px #561010;\r\n    float: left;\r\n    margin-left: 15%;\r\n  }\r\n\r\n  .summary {\r\n    max-width: 600px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n  p.bk-primary-color{\r\n    background-color: blue;\r\n}\r\n\r\n  .header h1 {\r\n    font-family: 'Arial, Helvetica, sans-serif';\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    padding-right: 10%;\r\n    padding-left: 10%;\r\n    \r\n  }\r\n\r\n  .header p {\r\n    line-height: 30px;\r\n    opacity: 0.95;\r\n  }\r\n\r\n  .content{\r\n    padding-top: 2ex;\r\n    margin-left: 20%;\r\n    margin-right: 10%;\r\n}\r\n\r\n  .header {\r\n    background-color: #57358647;\r\n    color: #010d10;\r\n    padding: 35px;\r\n  \r\n    /* margin-top: 5%; */\r\n    margin-bottom: 0px;\r\n    margin-left: 0px;\r\n    text-align: center;\r\n    text-shadow: 0 0 0px 0px black;\r\n    text-shadow: 0 0 11px #5640a9;\r\n  }\r\n\r\n  h1{\r\n    margin-bottom: 0.5rem;\r\n    margin-top: 1.5rem;\r\n    \r\n  }\r\n\r\n  header, footer {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n    background-color: rgb(87, 187, 157);\r\n   \r\n   \r\n    padding: 1em;\r\n    color: white;\r\n    \r\n    clear: left;\r\n    text-align: center;\r\n}\r\n\r\n  article {\r\n    margin-left: 170px;\r\n    border-left: 1px solid gray;\r\n    padding: 1em;\r\n    overflow: hidden;\r\n}\r\n\r\n  .container{\r\n    margin-bottom: 0px;\r\n    margin-left: 0px;\r\n    padding-bottom: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aboutme/aboutme.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"header\">\n <div>\n    <img src=\"/assets/images/mine.jpg\" alt=\"Sree\" class=\"img\"/>\n  </div>\n    <div class=\"content\">\n    <h1>\n      {{name}}\n    </h1>\n    <p class=\"summary\">\n      {{summary}}\n    </p>\n    </div>\n  </article>"

/***/ }),

/***/ "../../../../../src/app/aboutme/aboutme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutmeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent() {
        this.name = "Sree Kodem";
        this.summary = "I am Web Developer with good analytical thinking, problem-solving skills, and a quick learner. I am passionate about designing and learning new technologies.";
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    AboutmeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aboutme',
            template: __webpack_require__("../../../../../src/app/aboutme/aboutme.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aboutme/aboutme.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutmeComponent);
    return AboutmeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutme_aboutme_component__ = __webpack_require__("../../../../../src/app/aboutme/aboutme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__education_education_component__ = __webpack_require__("../../../../../src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__work_work_component__ = __webpack_require__("../../../../../src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'Aboutme', component: __WEBPACK_IMPORTED_MODULE_2__aboutme_aboutme_component__["a" /* AboutmeComponent */] },
    { path: 'header', component: __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_4__skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'education', component: __WEBPACK_IMPORTED_MODULE_5__education_education_component__["a" /* EducationComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_7__work_work_component__["a" /* WorkComponent */] },
    { path: 'footer', component: __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__aboutme_aboutme_component__["a" /* AboutmeComponent */], __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_4__skills_skills_component__["a" /* SkillsComponent */], __WEBPACK_IMPORTED_MODULE_5__education_education_component__["a" /* EducationComponent */], __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__work_work_component__["a" /* WorkComponent */], __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */]];


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header> \n<app-aboutme></app-aboutme>\n<app-education></app-education> \n<app-skills></app-skills>\n<app-projects></app-projects>\n<app-footer></app-footer>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skills_service__ = __webpack_require__("../../../../../src/app/skills.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["b" /* routingComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__skills_service__["a" /* SkillsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/education/education.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\r\n    padding-left: 10px;\r\n    padding-top: 15px;\r\n    border-radius: 20%;\r\n    height: 200px;\r\n    width: 300px;\r\n    float: left;\r\n}\r\nh4{\r\nfont-size: 18px;\r\nfloat: right;\r\npadding-top: 50px;\r\npadding-left: 0px;\r\npadding-right: 350px;\r\n}\r\n.content{\r\npadding-right: 20px;\r\nfloat: right;\r\n}\r\n.thumbnail{\r\n    \r\n    display: block;\r\n    padding: 4px;\r\n    margin-bottom: 10%;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    -webkit-transition: border .2s ease-in-out;\r\n    transition: border .2s ease-in-out;\r\n    /* background-color: #986161; */\r\n    /* color: #1f0b0b; */\r\n    -webkit-box-shadow: 11px -12px 20px black;\r\n            box-shadow: 11px -12px 20px black;\r\n    text-shadow: 5px 1px 7px black;    \r\n}\r\n.row{\r\nbackground: #91ccc4;\r\n}\r\n.position{\r\n    margin-top: 3%;\r\n   \r\n    margin-left: 30%;\r\n    margin-right: 70%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"row\">\n      <div class=\"col-sm-6 col-md-4 position\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/images/uncc.jpg\" alt=\"UNCC\">\n          <div class=\"caption\">\n            <h3>UNC Charlotte</h3>\n            <p>Masters in computer science</p>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-education',
            template: __webpack_require__("../../../../../src/app/education/education.component.html"),
            styles: [__webpack_require__("../../../../../src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    padding: 60px 20px 60px 20px;\r\n    text-align: center;\r\n    background-color: rgb(132, 190, 218);\r\n    color: rgb(7, 1, 1);\r\n  }\r\n  \r\n  .footer a {\r\n    color: rgb(12, 1, 1);\r\n    text-decoration: none;\r\n    border-bottom: 1px solid rgba(255, 255, 255, .7);;\r\n  }\r\n  \r\n  .footer a:hover {\r\n    border-bottom: 1px solid rgba(255, 255, 255, 1);;\r\n  }\r\n  \r\n  .footer p {\r\n    opacity: 0.75;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .footerCopyRight {\r\n    margin-top: 40px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"footer\">\r\n    <p>\r\n       Built with Angular 5\r\n    </p>\r\n    <p>\r\n      To view source code visit <a target=\"_blank\" href=\"https://github.com/skodem94/skodem94.github.io\">GitHub</a>\r\n    </p>\r\n    <p class=\"footerCopyRight\">© 2018 Sree Kodem </p>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');\r\n@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');\r\n.navbar {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n    padding-top: 0px;\r\n    background-color: #3a3d7b;\r\n    \r\n  }\r\n.nav{\r\n    padding-left: 0;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n    background-color: #3a3d7b;\r\n    float: left;\r\n  }\r\nnav {\r\n    \r\n    max-width: 160px;\r\n    margin: 0;\r\n    padding: 1em;\r\n}\r\nnav ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\nnav ul a {\r\n    text-decoration: none;\r\n}\r\na{\r\n  color: #fdfdfd;\r\n  text-shadow: 0 0 20px #f3eded;\r\n}\r\n.nav>li>a:focus, .nav>li>a:hover {\r\n  text-decoration: none;\r\n  background-color: #79b794;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar\">\n <ul class=\"nav nav-pills fixed-top\">\n    <li role=\"presentation\" class=\"active\"><a routerLink = \"/Aboutme\">About Me</a></li>\n    <li ><a routerLink = \"/education\">Education</a></li>\n    <li ><a routerLink = \"/skills\">Skills</a></li>\n    \n    <li ><a routerLink = \"/projects\">Projects</a></li>\n    \n  </ul>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isCollapsed = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#proHeading{\r\n    background-color: dimgray;\r\n    font-style: italic;\r\n    color: black;\r\n\r\n    border-style: inset;\r\n    background-color: #a1708d;\r\n    color: #130303;\r\n    -webkit-box-shadow: -5px -1px 7px 2px black;\r\n            box-shadow: -5px -1px 7px 2px black;   \r\n    float: left;\r\n    padding: 10px;\r\n}\r\n.header{\r\n    text-align: center;\r\n    font-family: -webkit-pictograph;\r\n    /* font-style: oblique; */\r\n    font-size: 30px;\r\n    /* padding: 10px; */\r\n    margin-bottom: 20px;\r\n    padding-bottom: 20px;\r\n}\r\nnav{\r\n    background-color: #512b63;\r\n    /* text-decoration-style: double; */\r\n    text-shadow: blue;\r\n    color: white;\r\n    /* text-decoration-style: dashed; */\r\n    -webkit-box-shadow: 2px -3px 10px 3px black;\r\n            box-shadow: 2px -3px 10px 3px black;\r\n    padding-top: 0.1px;\r\n    padding-top: 0.px;\r\n    margin: 20px;\r\n}\r\n#proContent{\r\n    float: right;\r\n    -webkit-box-shadow: 7px 8px 16px 0px #a1708d;\r\n            box-shadow: 7px 8px 16px 0px #a1708d;\r\n    padding: 10px;\r\n    padding-bottom: 1px;\r\n    margin-left: 10%;\r\n}\r\n.container{\r\n    max-width: 100%;\r\n    background-color: #c4c5daea;\r\n    border-radius: 40px;\r\n}\r\n.well{\r\n    min-height: 20px;\r\n    padding: 19px;\r\n    margin-bottom: 20px;\r\n    background-color: #f5f5f5;\r\n    border: 1px solid #e3e3e3;\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n}\r\n.card{\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n.section{\r\n    display: inline-block;\r\n}\r\n.jumbotron{\r\n    margin-bottom: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<div class=\"container\">\n   <nav><h2 class=\"header\">ACADEMIC PROJECTS</h2></nav> \n<div class=\"well well-sm\" id=\"proHeading\">\n    BAGGAGE MATE FINDER \n</div>\n\n<div class=\"well well-lg\" id=\"proContent\">\n    <ul>\n      <li>Designed and developed a prototype of a website, which allows users (airline passengers) to post, check baggage space availability and communicate with respective co- passenger.</li>\n      <li>Designed the front-end interface for the application, main  tained database and handled database-server connectivity.    </li>\n     \n    </ul>\n</div>\n\n<div class=\"well well-sm\" id=\"proHeading\">\n        THE CATAWBA DATABASE \n    </div>\n   \n    <div class=\"well well-lg\" id=\"proContent\">\n        <ul>\n          <li>Designed and developed a prototype of an e-commerce website, which allows user to donate and buy items, can add items to cart and checkout.</li>\n          <li>Website lists all the items with pictures and the users are differentiated with their respective roles – guests, donors, users and admin (given authorization to edit the items being posted on the website).</li>\n          <li>This site sells a donated clothes and accessories and provided a mechanism to check in the items which are being donated into the inventory.</li>\n        </ul>\n        <a href=\"https://github.com/skodem94/CatawbaDatabase\" class=\"btn btn-primary\">Visit Project</a>\n        \n    </div>\n   \n    <div class=\"well well-sm\" id=\"proHeading\">\n            A SYSTEM TO FILTER UNWANTED MESSAGES FROM SOCIAL NETWORKING SITE \n        </div>\n   \n        <div class=\"well well-lg\" id=\"proContent\">\n        <ul>\n            <li>Designed and developed a prototype website system allowing Social Networking Site users to have a direct control on the messages posted on their walls using.</li>\n            <li>Involved in designing the front-end interface, maintained database and handled database connectivity.</li>\n        </ul>\n        </div> \n        <div class=\"well well-sm\" id=\"proHeading\">\n            JavaScript File Parser  \n        </div>\n       \n        <div class=\"well well-lg\" id=\"proContent\">\n            <ul>\n              <li>Developed a command line program that accepts a command line argument, a name of the JavaScript file and is used for parsing the code to find and locate un-used declared variables, one line if/else statements that don’t have curly brackets, function calls that have not been declared, any missing/extra curly brackets.</li>\n              \n            </ul>\n            <a href=\"https://github.com/skodem94/JavaScript-File-Parser\" class=\"btn btn-primary\">Visit DashBoard</a>\n        </div> \n        <div class=\"well well-sm\" id=\"proHeading\">\n                DAIMLER TRUCKS VISUALIZATION  \n            </div>\n           \n            <div class=\"well well-lg\" id=\"proContent\">\n                <ul>\n                  <li>Created a prototype of visualization for Daimler Trucks company and analyzed truck data and converted business requirements to technical requirements and integrated data using cross database in TABLEAU</li>\n                  <li>Designed and created effective visualizations using TABLEAU which shows the working of the plant and displays the details of the trucks being manufactured in the company</li>\n                </ul>\n                  <a href=\"https://github.com/skodem94/daimler-trucks-visualization-project\" class=\"btn btn-primary\">Visit DashBoard</a>\n               \n            </div> \n            \n            \n            \n</div>            \n\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <nav><h2 class=\"header\">Tableau projects</h2></nav>\n        <ul class=\"list-group col-md-3\" *ngFor = \"let image of image; index as k\">\n                <li class=\"list-group-item heading2\"> <img class=\"card-img-top\" src=\"{{image}}\" alt=\"Card image\" style=\"width:100%\"></li>\n            <span *ngFor = \"let url of url; index as i\">\t\n          <li class=\"list-group-item\" *ngIf = \"k == i\" > <a href=\"{{url}}\" class=\"btn btn-primary\">Visit DashBoard</a></li>\n        </span>\n        </ul>\n      \n      </div>\n    </div>\n                               \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.name = ["DAIMLER TRUCK DATA VISUALIZATION", "ANALYSIS OF GLOBAL TERRORISM DATABASE", "VIDEO GAME SALES ANALYSIS", "ROAD ACCIDENTS ANALYSIS", "FLIGHT DATA VISUALISATION"];
        this.url = ["https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/DaimlerTruckVisualization/Dashboard1", "https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/GlobalTerrorismDatabase_3/Dashboard1", "https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/VideoGameSalesAnalysis_1/Videogameanalysis", "https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/RoadAccidents_6/Dashboard1", "https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/FlightDelayVisualization_1/Dashboard1"];
        this.image = ["/assets/images/daimler.PNG", "/assets/images/global.PNG", "/assets/images/videogame.PNG", "/assets/images/roadaccidents.PNG", "/assets/images/flightdelay.PNG"];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SkillsService = /** @class */ (function () {
    function SkillsService(http) {
        this.http = http;
        this._url = "assets/skills.json";
    }
    SkillsService.prototype.getSkills = function () {
        return this.http.get(this._url)
            .catch(this.errorHandler);
    };
    SkillsService.prototype.getSkill = function () {
        return this.http.get(this._url)
            .catch(this.errorHandler);
    };
    SkillsService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.message || "Server Error");
    };
    SkillsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SkillsService);
    return SkillsService;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " /*\r\n[\r\n    {\"id\": 1, \"name\": \"agasthya\", \"age\":30},\r\n    {\"id\": 2, \"name\": \"varshini\", \"age\":29},\r\n    {\"id\": 3, \"name\": \"kitty\", \"age\":1},\r\n    {\"id\": 4, \"name\": \"pappu\", \"age\":3}\r\n  ] \r\n\r\n\r\n  {\r\n      \"languages\" : [\"Java/J2EE\", \"JavaScript\", \"SQL\", \"D3.js\", \"Angular 2\", \"Angular 4\", \"Angular 5\"],\r\n      \"frontend\" : [\"Java/J2EE\", \"JavaScript\", \"SQL\", \"D3.js\", \"Angular 2\", \"Angular 4\", \"Angular 5\"]   \r\n  }\r\n\r\n <div class=\"panel panel-default\">\r\n    <!-- Default panel contents -->\r\n    <div class=\"panel-heading\">Skills</div>\r\n    <div class=\"panel-body\" *ngFor = \"let skill of skills\">\r\n      <p>{{skill.skill}}</p>\r\n    </div>\r\n  \r\n    <!-- List group -->\r\n    <ul class=\"list-group\" *ngFor = \"let skill of skills\">\r\n      <li class=\"list-group-item\">{{skill.desc}}</li>\r\n      \r\n    </ul>\r\n  </div>\r\n\r\n\r\n  <div class=\"jumbotron\">\r\n <div class=\"container\">\r\n    <!-- Default panel contents -->\r\n    <h3 class=\"panel-heading\">Skills</h3>\r\n      <div class=\"panel-body\" *ngFor = \"let skill of skills; index as i\">\r\n        <p class=\"heading\">{{skill.skill}}</p>\r\n          <ul class=\"list-group\" *ngFor = \"let skill of skills; index as j\">\r\n            <li class=\"content\" *ngIf = \"i == j\" >{{skill.desc}}</li>\r\n          </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n  */\r\n\r\n\r\n\r\n\r\n\r\n    /* \r\n  {\r\n  \"skills\": [\r\n    {\r\n      \"skill\":\"Programming Languages\", \r\n      \"desc\": [\r\n        {\"name\":\"Java/J2EE\"},\r\n        {\"name\": \"JavaScript\"},\r\n        {\"name\": \"SQL\"},\r\n        {\"name\": \"D3.js\"},\r\n        {\"name\": \"Angular 2\"},\r\n        {\"name\": \"Angular 4\"},\r\n        {\"name\": \"Angular 5\"}\r\n      ]\r\n    },\r\n\r\n    {\r\n      \"skill\":\"Front End\", \r\n      \"desc\": [\r\n        {\"name\":\"HTML5\"}, \r\n        {\"name\":\"CSS3\"},\r\n        {\"name\": \"AJAX\"},\r\n        {\"name\": \"JSP\"},\r\n        {\"name\": \"jQuery\"},\r\n        {\"name\": \"Bootstrap 3\"}\r\n      ]\r\n    },\r\n    {\r\n      \"skill\":\"Web Service\", \r\n      \"desc\": [\r\n        {\"name\":\"RESTful\"},\r\n        {\"name\": \"JSON\"},\r\n        {\"name\": \"XML\"}\r\n      ]\r\n    },\r\n    {\r\n      \"skill\":\"Database\", \r\n      \"desc\": [\r\n        {\"name\":\"MySQL\"}, \r\n        {\"name\":\"Microsoft SQL\"}, \r\n       {\"name\":\"JDBC\"}\r\n      ]\r\n    },\r\n    {\r\n      \"skill\":\"Frame Works\",\r\n       \"desc\": [\r\n         {\"name\":\"Spring\"}\r\n        ]\r\n    },\r\n    {\r\n      \"skill\":\"Tools & Technologies\", \r\n      \"desc\": [\r\n        {\"name\":\"GIT\"}, \r\n          {\"name\":\"Agile\"},\r\n            {\"name\": \"Eclipse\"}, \r\n              {\"name\":\"NPM Package\"}, \r\n                {\"name\":\"TABLEAU\"}\r\n      ]\r\n    }\r\n  ]\r\n}\r\n  \r\n  */\r\n\r\n\r\n\r\n\r\n\r\n    .list-group {\r\n    padding-left: 0;\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n    float: left;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n    .jumbotron{\r\n    margin-bottom: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n    .heading2{\r\n  background-color: dimgray;\r\n  font-style: italic;\r\n  color: black;\r\n  border-style: inset;\r\n  background-color: #8a438ac4;\r\n  color: #130303;\r\n  -webkit-box-shadow: -5px -1px 7px 2px black;\r\n          box-shadow: -5px -1px 7px 2px black;   \r\n \r\n  padding: 10px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n    .header{\r\n  text-align: center;\r\n  font-family: -webkit-pictograph;\r\n  /* font-style: oblique; */\r\n  font-size: 30px;\r\n  /* padding: 10px; */\r\n  margin-bottom: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n    nav{\r\n  background-color: #090a33d3;\r\n  /* text-decoration-style: double; */\r\n \r\n  color: white;\r\n  /* text-decoration-style: dashed; */\r\n  -webkit-box-shadow: 2px -3px 10px 3px black;\r\n          box-shadow: 2px -3px 10px 3px black;\r\n  padding-top: 0.1px;\r\n  padding-top: 0.px;\r\n  margin: 20px;\r\n  margin-left: 20%;\r\n  margin-right: 20%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n    .container{\r\n  max-width: 100%;\r\n  background-color: #899cd1b9;\r\n  border-radius: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron\">\n<div class=\"container\">\n    <nav><h2 class=\"header\">SKILLS</h2></nav>\n    <ul class=\"list-group col-md-3\" *ngFor = \"let skill of skills; index as i\">\n\t\t\t<li class=\"list-group-item heading2\">{{skill.skill}}</li>\n\t\t<span *ngFor = \"let skill of skills; index as j\">\t\n      <li class=\"list-group-item\" *ngIf = \"i == j\" >{{skill.desc}}</li>\n    </span>\n    </ul>\n  \n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skills_service__ = __webpack_require__("../../../../../src/app/skills.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(_skillService) {
        this._skillService = _skillService;
        this.skills = [];
        this.skill = [];
        this.desc = [];
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._skillService.getSkills()
            .subscribe(function (data) { return _this.skills = data.skills; }, function (error) { return _this.errorMsg = error; });
        this._skillService.getSkill()
            .subscribe(function (data) { return _this.skill = data.skills.skill; }, function (data) { return _this.desc = data.skills.desc; });
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__skills_service__["a" /* SkillsService */]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/work/work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    text-align: center;\r\n}\r\n\r\n.flex-container > * {\r\n    padding: 15px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 100%;\r\n            flex: 1 100%;\r\n}\r\n\r\n.article {\r\n    text-align: left;\r\n}\r\n\r\nheader {background: black;color:white;}\r\n\r\nfooter {background: #aaa;color:white;}\r\n\r\n.nav {\r\n    background:#eee;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    -ms-flex-negative: 1;\r\n        flex-shrink: 1;\r\n    -ms-flex-preferred-size: auto;\r\n        flex-basis: auto;}\r\n\r\n.nav ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.nav ul a {\r\n    text-decoration: none;\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .nav {text-align:left;-webkit-box-flex:1;-ms-flex:1 auto;flex:1 auto;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;}\r\n    .article {-webkit-box-flex:5;-ms-flex:5 0px;flex:5 0px;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;}\r\n    footer {-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"flex-container\">\n    <h1>City Gallery</h1>\n </header>\n   \n <nav class=\"nav\">\n   <ul>\n     <li><a href=\"#\">London</a></li>\n     <li><a href=\"#\">Paris</a></li>\n     <li><a href=\"#\">Tokyo</a></li>\n   </ul>\n </nav>\n \n <article class=\"article\">\n   <h1>London</h1>\n   <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>\n   <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>\n </article>\n "

/***/ }),

/***/ "../../../../../src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__("../../../../../src/app/work/work.component.html"),
            styles: [__webpack_require__("../../../../../src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map