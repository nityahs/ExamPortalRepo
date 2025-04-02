import {
  Directive,
  NgModule,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵstyleProp
} from "./chunk-56PQKP7J.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-trans-button.mjs
var NzTransButtonDirective = class _NzTransButtonDirective {
  static {
    this.ɵfac = function NzTransButtonDirective_Factory(t) {
      return new (t || _NzTransButtonDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTransButtonDirective,
      selectors: [["button", "nz-trans-button", ""]],
      hostVars: 8,
      hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("border", "0")("background", "transparent")("padding", "0")("line-height", "inherit");
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonDirective, [{
    type: Directive,
    args: [{
      selector: "button[nz-trans-button]",
      host: {
        "[style.border]": '"0"',
        "[style.background]": '"transparent"',
        "[style.padding]": '"0"',
        "[style.line-height]": '"inherit"'
      },
      standalone: true
    }]
  }], null, null);
})();
var NzTransButtonModule = class _NzTransButtonModule {
  static {
    this.ɵfac = function NzTransButtonModule_Factory(t) {
      return new (t || _NzTransButtonModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzTransButtonModule,
      imports: [NzTransButtonDirective],
      exports: [NzTransButtonDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransButtonDirective],
      exports: [NzTransButtonDirective]
    }]
  }], null, null);
})();

export {
  NzTransButtonDirective,
  NzTransButtonModule
};
//# sourceMappingURL=chunk-37JZ3NWZ.js.map
