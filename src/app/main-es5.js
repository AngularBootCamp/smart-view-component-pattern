function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _individual_comparator_individual_comparator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./individual-comparator/individual-comparator.component */
    "./src/app/individual-comparator/individual-comparator.component.ts");
    /* harmony import */


    var _store_comparator_store_comparator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./store-comparator/store-comparator.component */
    "./src/app/store-comparator/store-comparator.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'store-comparator',
      pathMatch: 'full'
    }, {
      path: 'store-comparator',
      component: _store_comparator_store_comparator_component__WEBPACK_IMPORTED_MODULE_3__["StoreComparatorComponent"]
    }, {
      path: 'individual-comparator',
      component: _individual_comparator_individual_comparator_component__WEBPACK_IMPORTED_MODULE_2__["IndividualComparatorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true,
          scrollPositionRestoration: 'enabled'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 0,
      consts: [[1, "nav-wrapper"], ["routerLinkActive", "green-background"], ["routerLink", "/store-comparator"], ["routerLink", "/individual-comparator"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Store Employee Comparator ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Individual Employee Comparator ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".flex[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\nemployee-explorer[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuZW1wbG95ZWUtZXhwbG9yZXIge1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _employee_comparison_employee_comparison_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./employee-comparison/employee-comparison.component */
    "./src/app/employee-comparison/employee-comparison.component.ts");
    /* harmony import */


    var _employee_display_employee_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./employee-display/employee-display.component */
    "./src/app/employee-display/employee-display.component.ts");
    /* harmony import */


    var _employee_explorer_employee_explorer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./employee-explorer/employee-explorer.component */
    "./src/app/employee-explorer/employee-explorer.component.ts");
    /* harmony import */


    var _individual_comparator_individual_comparator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./individual-comparator/individual-comparator.component */
    "./src/app/individual-comparator/individual-comparator.component.ts");
    /* harmony import */


    var _store_comparator_store_comparator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./store-comparator/store-comparator.component */
    "./src/app/store-comparator/store-comparator.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _employee_comparison_employee_comparison_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComparisonComponent"], _employee_display_employee_display_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeDisplayComponent"], _employee_explorer_employee_explorer_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeExplorerComponent"], _store_comparator_store_comparator_component__WEBPACK_IMPORTED_MODULE_10__["StoreComparatorComponent"], _individual_comparator_individual_comparator_component__WEBPACK_IMPORTED_MODULE_9__["IndividualComparatorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
    });
    /*@__PURE__*/


    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _employee_comparison_employee_comparison_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComparisonComponent"], _employee_display_employee_display_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeDisplayComponent"], _employee_explorer_employee_explorer_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeExplorerComponent"], _store_comparator_store_comparator_component__WEBPACK_IMPORTED_MODULE_10__["StoreComparatorComponent"], _individual_comparator_individual_comparator_component__WEBPACK_IMPORTED_MODULE_9__["IndividualComparatorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      }]
    }], null, null);
    /***/

  },

  /***/
  "./src/app/employee-comparison/employee-comparison.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/employee-comparison/employee-comparison.component.ts ***!
    \**********************************************************************/

  /*! exports provided: EmployeeComparisonComponent */

  /***/
  function srcAppEmployeeComparisonEmployeeComparisonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeComparisonComponent", function () {
      return EmployeeComparisonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _employee_display_employee_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../employee-display/employee-display.component */
    "./src/app/employee-display/employee-display.component.ts");

    var EmployeeComparisonComponent = function EmployeeComparisonComponent() {
      _classCallCheck(this, EmployeeComparisonComponent);

      this.reverse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    EmployeeComparisonComponent.ɵfac = function EmployeeComparisonComponent_Factory(t) {
      return new (t || EmployeeComparisonComponent)();
    };

    EmployeeComparisonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeComparisonComponent,
      selectors: [["employee-comparison"]],
      inputs: {
        theFirstEmployee: "theFirstEmployee",
        theSecondEmployee: "theSecondEmployee"
      },
      outputs: {
        reverse: "reverse"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "flex"], [3, "employee"], [1, "vs", 3, "click"]],
      template: function EmployeeComparisonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "employee-display", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeComparisonComponent_Template_span_click_2_listener($event) {
            return ctx.reverse.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "employee-display", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employee", ctx.theFirstEmployee);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employee", ctx.theSecondEmployee);
        }
      },
      directives: [_employee_display_employee_display_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeDisplayComponent"]],
      styles: ["employee-display[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.vs[_ngcontent-%COMP%] {\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtY29tcGFyaXNvbi9lbXBsb3llZS1jb21wYXJpc29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1jb21wYXJpc29uL2VtcGxveWVlLWNvbXBhcmlzb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImVtcGxveWVlLWRpc3BsYXkge1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi52cyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeComparisonComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'employee-comparison',
        templateUrl: './employee-comparison.component.html',
        styleUrls: ['./employee-comparison.component.css']
      }]
    }], null, {
      theFirstEmployee: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      theSecondEmployee: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      reverse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/employee-display/employee-display.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/employee-display/employee-display.component.ts ***!
    \****************************************************************/

  /*! exports provided: EmployeeDisplayComponent */

  /***/
  function srcAppEmployeeDisplayEmployeeDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeDisplayComponent", function () {
      return EmployeeDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmployeeDisplayComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Email: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Hours Worked: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Hourly Wage: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Name: ", ctx_r0.employee.first_name, " ", ctx_r0.employee.last_name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employee.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employee.hours_worked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employee.hourly_wage);
      }
    }

    var EmployeeDisplayComponent = function EmployeeDisplayComponent() {
      _classCallCheck(this, EmployeeDisplayComponent);
    };

    EmployeeDisplayComponent.ɵfac = function EmployeeDisplayComponent_Factory(t) {
      return new (t || EmployeeDisplayComponent)();
    };

    EmployeeDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeDisplayComponent,
      selectors: [["employee-display"]],
      inputs: {
        employee: "employee"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "card"], ["class", "card-content", 4, "ngIf"], [1, "card-content"], [1, "card-title"]],
      template: function EmployeeDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeDisplayComponent_div_1_Template, 15, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDisplayComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'employee-display',
        templateUrl: './employee-display.component.html'
      }]
    }], null, {
      employee: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/employee-explorer/employee-explorer.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/employee-explorer/employee-explorer.component.ts ***!
    \******************************************************************/

  /*! exports provided: EmployeeExplorerComponent */

  /***/
  function srcAppEmployeeExplorerEmployeeExplorerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeExplorerComponent", function () {
      return EmployeeExplorerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _employee_display_employee_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../employee-display/employee-display.component */
    "./src/app/employee-display/employee-display.component.ts");

    function EmployeeExplorerComponent_employee_display_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "employee-display", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeExplorerComponent_employee_display_2_Template_employee_display_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var emp_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.employeeClicked.emit(emp_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var emp_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r1.employeeIsSelected(emp_r2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employee", emp_r2);
      }
    }

    var EmployeeExplorerComponent =
    /*#__PURE__*/
    function () {
      function EmployeeExplorerComponent() {
        _classCallCheck(this, EmployeeExplorerComponent);

        this.title = 'Employees'; // Provide a default value if the user of this component doesn't

        this.employees = [];
        this.selectedEmployees = [];
        this.employeeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      } // Implementing a new feature in this view component improves everywhere that it is used
      // In this case, all three lists of employees are made searchable by adding this feature
      // Make sure to update the employee-explorer.component.html as well to see it in action
      // filter = new FormControl('');


      _createClass(EmployeeExplorerComponent, [{
        key: "employeeIsSelected",
        value: function employeeIsSelected(emp) {
          return this.selectedEmployees.find(function (e) {
            return e.id === emp.id;
          });
        }
      }]);

      return EmployeeExplorerComponent;
    }();

    EmployeeExplorerComponent.ɵfac = function EmployeeExplorerComponent_Factory(t) {
      return new (t || EmployeeExplorerComponent)();
    };

    EmployeeExplorerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeExplorerComponent,
      selectors: [["employee-explorer"]],
      inputs: {
        title: "title",
        employees: "employees",
        selectedEmployees: "selectedEmployees"
      },
      outputs: {
        employeeClicked: "employeeClicked"
      },
      decls: 3,
      vars: 2,
      consts: [[3, "employee", "selected", "click", 4, "ngFor", "ngForOf"], [3, "employee", "click"]],
      template: function EmployeeExplorerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeExplorerComponent_employee_display_2_Template, 1, 2, "employee-display", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _employee_display_employee_display_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeDisplayComponent"]],
      styles: [".selected[_ngcontent-%COMP%] {\n  color: #26a69a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtZXhwbG9yZXIvZW1wbG95ZWUtZXhwbG9yZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1leHBsb3Jlci9lbXBsb3llZS1leHBsb3Jlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcbiAgY29sb3I6ICMyNmE2OWE7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeExplorerComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'employee-explorer',
        templateUrl: './employee-explorer.component.html',
        styleUrls: ['./employee-explorer.component.css']
      }]
    }], null, {
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      employees: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectedEmployees: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      employeeClicked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    });
    /***/

  },

  /***/
  "./src/app/employee-loader.service.ts":
  /*!********************************************!*\
    !*** ./src/app/employee-loader.service.ts ***!
    \********************************************/

  /*! exports provided: EmployeeLoader */

  /***/
  function srcAppEmployeeLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeLoader", function () {
      return EmployeeLoader;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var apiUrl = '/api';

    var EmployeeLoader =
    /*#__PURE__*/
    function () {
      function EmployeeLoader(http) {
        _classCallCheck(this, EmployeeLoader);

        this.http = http;
      }

      _createClass(EmployeeLoader, [{
        key: "getEasternStoreEmployees",
        value: function getEasternStoreEmployees() {
          return this.http.get(apiUrl + '/employees').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (longList) {
            return longList.slice(0, 9);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
        }
      }, {
        key: "getWesternStoreEmployees",
        value: function getWesternStoreEmployees() {
          return this.http.get(apiUrl + '/employees').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (longList) {
            return longList.slice(9, 18);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
        }
      }, {
        key: "getAllEmployees",
        value: function getAllEmployees() {
          return this.http.get(apiUrl + '/employees').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (longList) {
            return longList.slice(1, 18);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
        }
      }, {
        key: "getDetails",
        value: function getDetails(employeeId) {
          return this.http.get("".concat(apiUrl, "/employees/").concat(employeeId));
        }
      }]);

      return EmployeeLoader;
    }();

    EmployeeLoader.ɵfac = function EmployeeLoader_Factory(t) {
      return new (t || EmployeeLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    EmployeeLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmployeeLoader,
      factory: function factory(t) {
        return EmployeeLoader.ɵfac(t);
      },
      providedIn: 'root'
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeLoader, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }], function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/app/individual-comparator/individual-comparator.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/individual-comparator/individual-comparator.component.ts ***!
    \**************************************************************************/

  /*! exports provided: IndividualComparatorComponent */

  /***/
  function srcAppIndividualComparatorIndividualComparatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndividualComparatorComponent", function () {
      return IndividualComparatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _employee_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../employee-loader.service */
    "./src/app/employee-loader.service.ts");
    /* harmony import */


    var _employee_comparison_employee_comparison_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../employee-comparison/employee-comparison.component */
    "./src/app/employee-comparison/employee-comparison.component.ts");
    /* harmony import */


    var _employee_explorer_employee_explorer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../employee-explorer/employee-explorer.component */
    "./src/app/employee-explorer/employee-explorer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var IndividualComparatorComponent =
    /*#__PURE__*/
    function () {
      function IndividualComparatorComponent(el) {
        var _this = this;

        _classCallCheck(this, IndividualComparatorComponent);

        this.el = el;
        this.employeeList = this.el.getAllEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (list) {
          _this.comparedEmployees = [list[0], list[1]];
        }));
        this.comparedEmployees = [];
      }

      _createClass(IndividualComparatorComponent, [{
        key: "updateComparison",
        value: function updateComparison(emp) {
          this.comparedEmployees = [this.comparedEmployees[0], emp];
        }
      }, {
        key: "reverseComparison",
        value: function reverseComparison() {
          this.comparedEmployees = [this.comparedEmployees[1], this.comparedEmployees[0]];
        }
      }]);

      return IndividualComparatorComponent;
    }();

    IndividualComparatorComponent.ɵfac = function IndividualComparatorComponent_Factory(t) {
      return new (t || IndividualComparatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_loader_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeLoader"]));
    };

    IndividualComparatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndividualComparatorComponent,
      selectors: [["individual-comparator"]],
      decls: 5,
      vars: 6,
      consts: [[3, "theFirstEmployee", "theSecondEmployee", "reverse"], [3, "employees", "selectedEmployees", "employeeClicked"]],
      template: function IndividualComparatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Individual Employee Comparator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "employee-comparison", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reverse", function IndividualComparatorComponent_Template_employee_comparison_reverse_2_listener($event) {
            return ctx.reverseComparison();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "employee-explorer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("employeeClicked", function IndividualComparatorComponent_Template_employee_explorer_employeeClicked_3_listener($event) {
            return ctx.updateComparison($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theFirstEmployee", ctx.comparedEmployees[0])("theSecondEmployee", ctx.comparedEmployees[1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employees", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.employeeList))("selectedEmployees", ctx.comparedEmployees);
        }
      },
      directives: [_employee_comparison_employee_comparison_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComparisonComponent"], _employee_explorer_employee_explorer_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeExplorerComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndividualComparatorComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'individual-comparator',
        templateUrl: './individual-comparator.component.html'
      }]
    }], function () {
      return [{
        type: _employee_loader_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeLoader"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/app/store-comparator/store-comparator.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/store-comparator/store-comparator.component.ts ***!
    \****************************************************************/

  /*! exports provided: StoreComparatorComponent */

  /***/
  function srcAppStoreComparatorStoreComparatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreComparatorComponent", function () {
      return StoreComparatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _employee_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../employee-loader.service */
    "./src/app/employee-loader.service.ts");
    /* harmony import */


    var _employee_comparison_employee_comparison_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../employee-comparison/employee-comparison.component */
    "./src/app/employee-comparison/employee-comparison.component.ts");
    /* harmony import */


    var _employee_explorer_employee_explorer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../employee-explorer/employee-explorer.component */
    "./src/app/employee-explorer/employee-explorer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    var StoreComparatorComponent =
    /*#__PURE__*/
    function () {
      function StoreComparatorComponent(el) {
        var _this2 = this;

        _classCallCheck(this, StoreComparatorComponent);

        this.el = el;
        this.easternEmployeeList = this.el.getEasternStoreEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (list) {
          _this2.easternEmployee = list[0];
        }));
        this.westernEmployeeList = this.el.getWesternStoreEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (list) {
          _this2.westernEmployee = list[0];
        }));
      }

      _createClass(StoreComparatorComponent, [{
        key: "setLeftEmployee",
        value: function setLeftEmployee(emp) {
          this.easternEmployee = emp;
        }
      }, {
        key: "setRightEmployee",
        value: function setRightEmployee(emp) {
          this.westernEmployee = emp;
        }
      }]);

      return StoreComparatorComponent;
    }();

    StoreComparatorComponent.ɵfac = function StoreComparatorComponent_Factory(t) {
      return new (t || StoreComparatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_loader_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeLoader"]));
    };

    StoreComparatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoreComparatorComponent,
      selectors: [["store-comparator"]],
      decls: 9,
      vars: 14,
      consts: [[3, "theFirstEmployee", "theSecondEmployee"], [1, "two-across"], ["title", "Eastern Store", 3, "employees", "selectedEmployees", "employeeClicked"], ["title", "Western Store", 3, "employees", "selectedEmployees", "employeeClicked"]],
      template: function StoreComparatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Store Employee Comparator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "employee-comparison", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "employee-explorer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("employeeClicked", function StoreComparatorComponent_Template_employee_explorer_employeeClicked_5_listener($event) {
            return ctx.setLeftEmployee($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "employee-explorer", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("employeeClicked", function StoreComparatorComponent_Template_employee_explorer_employeeClicked_7_listener($event) {
            return ctx.setRightEmployee($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theFirstEmployee", ctx.easternEmployee)("theSecondEmployee", ctx.westernEmployee);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employees", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.easternEmployeeList))("selectedEmployees", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.easternEmployee));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("employees", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.westernEmployeeList))("selectedEmployees", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.westernEmployee));
        }
      },
      directives: [_employee_comparison_employee_comparison_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComparisonComponent"], _employee_explorer_employee_explorer_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeExplorerComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["employee-explorer[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUtY29tcGFyYXRvci9zdG9yZS1jb21wYXJhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUtY29tcGFyYXRvci9zdG9yZS1jb21wYXJhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJlbXBsb3llZS1leHBsb3JlciB7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComparatorComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'store-comparator',
        templateUrl: './store-comparator.component.html',
        styleUrls: ['./store-comparator.component.css']
      }]
    }], function () {
      return [{
        type: _employee_loader_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeLoader"]
      }];
    }, null);
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kcordes/projects/Ang/angular-class-material/abc/AOT-SKIP-cli/sandbox/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map