import {
  NzResizeObserver
} from "./chunk-IYZFA2L5.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-YWASLI3P.js";
import "./chunk-5BZR2V47.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-MXSTGZWO.js";
import "./chunk-I44STHJS.js";
import {
  Directionality
} from "./chunk-QEK6LCLK.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-AEVDEY7X.js";
import {
  PREFIX
} from "./chunk-K7CGAEXM.js";
import "./chunk-2TCXTTBJ.js";
import "./chunk-C47TUKU2.js";
import {
  Location
} from "./chunk-PKEBHKHE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Optional,
  Output,
  Subject,
  ViewEncapsulation$1,
  __decorate,
  map,
  setClassMetadata,
  takeUntil,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-56PQKP7J.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-page-header.mjs
var _c0 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
var _c1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
function NzPageHeaderComponent_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const backIcon_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzType", backIcon_r3 || ctx_r1.getBackIcon());
  }
}
function NzPageHeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("click", function NzPageHeaderComponent_Conditional_3_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onBack());
    });
    ɵɵelementStart(1, "div", 6);
    ɵɵtemplate(2, NzPageHeaderComponent_Conditional_3_ng_container_2_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzBackIcon);
  }
}
function NzPageHeaderComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzTitle);
  }
}
function NzPageHeaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, NzPageHeaderComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle);
  }
}
function NzPageHeaderComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 6);
  }
}
function NzPageHeaderComponent_Conditional_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzSubtitle);
  }
}
function NzPageHeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, NzPageHeaderComponent_Conditional_7_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzSubtitle);
  }
}
function NzPageHeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 7);
  }
}
var NzPageHeaderTitleDirective = class _NzPageHeaderTitleDirective {
  static {
    this.ɵfac = function NzPageHeaderTitleDirective_Factory(t) {
      return new (t || _NzPageHeaderTitleDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzPageHeaderTitleDirective,
      selectors: [["nz-page-header-title"], ["", "nz-page-header-title", ""]],
      hostAttrs: [1, "ant-page-header-heading-title"],
      exportAs: ["nzPageHeaderTitle"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderTitleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-title, [nz-page-header-title]",
      exportAs: "nzPageHeaderTitle",
      host: {
        class: "ant-page-header-heading-title"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzPageHeaderSubtitleDirective = class _NzPageHeaderSubtitleDirective {
  static {
    this.ɵfac = function NzPageHeaderSubtitleDirective_Factory(t) {
      return new (t || _NzPageHeaderSubtitleDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzPageHeaderSubtitleDirective,
      selectors: [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]],
      hostAttrs: [1, "ant-page-header-heading-sub-title"],
      exportAs: ["nzPageHeaderSubtitle"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-subtitle, [nz-page-header-subtitle]",
      exportAs: "nzPageHeaderSubtitle",
      host: {
        class: "ant-page-header-heading-sub-title"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzPageHeaderContentDirective = class _NzPageHeaderContentDirective {
  static {
    this.ɵfac = function NzPageHeaderContentDirective_Factory(t) {
      return new (t || _NzPageHeaderContentDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzPageHeaderContentDirective,
      selectors: [["nz-page-header-content"], ["", "nz-page-header-content", ""]],
      hostAttrs: [1, "ant-page-header-content"],
      exportAs: ["nzPageHeaderContent"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderContentDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-content, [nz-page-header-content]",
      exportAs: "nzPageHeaderContent",
      host: {
        class: "ant-page-header-content"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzPageHeaderTagDirective = class _NzPageHeaderTagDirective {
  static {
    this.ɵfac = function NzPageHeaderTagDirective_Factory(t) {
      return new (t || _NzPageHeaderTagDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzPageHeaderTagDirective,
      selectors: [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]],
      hostAttrs: [1, "ant-page-header-heading-tags"],
      exportAs: ["nzPageHeaderTags"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderTagDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-tags, [nz-page-header-tags]",
      exportAs: "nzPageHeaderTags",
      host: {
        class: "ant-page-header-heading-tags"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzPageHeaderExtraDirective = class _NzPageHeaderExtraDirective {
  static {
    this.ɵfac = function NzPageHeaderExtraDirective_Factory(t) {
      return new (t || _NzPageHeaderExtraDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzPageHeaderExtraDirective,
      selectors: [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]],
      hostAttrs: [1, "ant-page-header-heading-extra"],
      exportAs: ["nzPageHeaderExtra"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderExtraDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-extra, [nz-page-header-extra]",
      exportAs: "nzPageHeaderExtra",
      host: {
        class: "ant-page-header-heading-extra"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzPageHeaderFooterDirective = class _NzPageHeaderFooterDirective {
  static {
    this.ɵfac = function NzPageHeaderFooterDirective_Factory(t) {
      return new (t || _NzPageHeaderFooterDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzPageHeaderFooterDirective,
      selectors: [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]],
      hostAttrs: [1, "ant-page-header-footer"],
      exportAs: ["nzPageHeaderFooter"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderFooterDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-footer, [nz-page-header-footer]",
      exportAs: "nzPageHeaderFooter",
      host: {
        class: "ant-page-header-footer"
      },
      standalone: true
    }]
  }], null, null);
})();
var NzPageHeaderBreadcrumbDirective = class _NzPageHeaderBreadcrumbDirective {
  static {
    this.ɵfac = function NzPageHeaderBreadcrumbDirective_Factory(t) {
      return new (t || _NzPageHeaderBreadcrumbDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzPageHeaderBreadcrumbDirective,
      selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
      exportAs: ["nzPageHeaderBreadcrumb"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderBreadcrumbDirective, [{
    type: Directive,
    args: [{
      selector: "nz-breadcrumb[nz-page-header-breadcrumb]",
      exportAs: "nzPageHeaderBreadcrumb",
      standalone: true
    }]
  }], null, null);
})();
var NzPageHeaderAvatarDirective = class _NzPageHeaderAvatarDirective {
  static {
    this.ɵfac = function NzPageHeaderAvatarDirective_Factory(t) {
      return new (t || _NzPageHeaderAvatarDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzPageHeaderAvatarDirective,
      selectors: [["nz-avatar", "nz-page-header-avatar", ""]],
      exportAs: ["nzPageHeaderAvatar"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderAvatarDirective, [{
    type: Directive,
    args: [{
      selector: "nz-avatar[nz-page-header-avatar]",
      exportAs: "nzPageHeaderAvatar",
      standalone: true
    }]
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "pageHeader";
var NzPageHeaderComponent = class _NzPageHeaderComponent {
  constructor(location, nzConfigService, elementRef, nzResizeObserver, cdr, directionality) {
    this.location = location;
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.nzResizeObserver = nzResizeObserver;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBackIcon = null;
    this.nzGhost = true;
    this.nzBack = new EventEmitter();
    this.compact = false;
    this.destroy$ = new Subject();
    this.dir = "ltr";
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterViewInit() {
    this.nzResizeObserver.observe(this.elementRef).pipe(map(([entry]) => entry.contentRect.width), takeUntil(this.destroy$)).subscribe((width) => {
      this.compact = width < 768;
      this.cdr.markForCheck();
    });
  }
  onBack() {
    if (this.nzBack.observers.length) {
      this.nzBack.emit();
    } else {
      if (!this.location) {
        throw new Error(`${PREFIX} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);
      }
      this.location.back();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getBackIcon() {
    if (this.dir === "rtl") {
      return "arrow-right";
    }
    return "arrow-left";
  }
  static {
    this.ɵfac = function NzPageHeaderComponent_Factory(t) {
      return new (t || _NzPageHeaderComponent)(ɵɵdirectiveInject(Location, 8), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzPageHeaderComponent,
      selectors: [["nz-page-header"]],
      contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzPageHeaderFooterDirective, 5);
          ɵɵcontentQuery(dirIndex, NzPageHeaderBreadcrumbDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzPageHeaderFooter = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
        }
      },
      hostAttrs: [1, "ant-page-header"],
      hostVars: 10,
      hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb)("ant-page-header-compact", ctx.compact)("ant-page-header-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzBackIcon: "nzBackIcon",
        nzTitle: "nzTitle",
        nzSubtitle: "nzSubtitle",
        nzGhost: "nzGhost"
      },
      outputs: {
        nzBack: "nzBack"
      },
      exportAs: ["nzPageHeader"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 13,
      vars: 3,
      consts: [[1, "ant-page-header-heading"], [1, "ant-page-header-heading-left"], [1, "ant-page-header-back"], [1, "ant-page-header-heading-title"], [1, "ant-page-header-heading-sub-title"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
      template: function NzPageHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c0);
          ɵɵprojection(0);
          ɵɵelementStart(1, "div", 0)(2, "div", 1);
          ɵɵtemplate(3, NzPageHeaderComponent_Conditional_3_Template, 3, 1, "div", 2);
          ɵɵprojection(4, 1);
          ɵɵtemplate(5, NzPageHeaderComponent_Conditional_5_Template, 2, 1, "span", 3)(6, NzPageHeaderComponent_Conditional_6_Template, 1, 0)(7, NzPageHeaderComponent_Conditional_7_Template, 2, 1, "span", 4)(8, NzPageHeaderComponent_Conditional_8_Template, 1, 0);
          ɵɵprojection(9, 2);
          ɵɵelementEnd();
          ɵɵprojection(10, 3);
          ɵɵelementEnd();
          ɵɵprojection(11, 4);
          ɵɵprojection(12, 5);
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵconditional(3, ctx.nzBackIcon !== null ? 3 : -1);
          ɵɵadvance(2);
          ɵɵconditional(5, ctx.nzTitle ? 5 : 6);
          ɵɵadvance(2);
          ɵɵconditional(7, ctx.nzSubtitle ? 7 : 8);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([WithConfig()], NzPageHeaderComponent.prototype, "nzGhost", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-page-header",
      exportAs: "nzPageHeader",
      template: `
    <ng-content select="nz-breadcrumb[nz-page-header-breadcrumb]" />

    <div class="ant-page-header-heading">
      <div class="ant-page-header-heading-left">
        <!--back-->
        @if (nzBackIcon !== null) {
          <div (click)="onBack()" class="ant-page-header-back">
            <div role="button" tabindex="0" class="ant-page-header-back-button">
              <ng-container *nzStringTemplateOutlet="nzBackIcon; let backIcon">
                <span nz-icon [nzType]="backIcon || getBackIcon()" nzTheme="outline"></span>
              </ng-container>
            </div>
          </div>
        }

        <!--avatar-->
        <ng-content select="nz-avatar[nz-page-header-avatar]" />
        <!--title-->
        @if (nzTitle) {
          <span class="ant-page-header-heading-title">
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </span>
        } @else {
          <ng-content select="nz-page-header-title, [nz-page-header-title]" />
        }

        <!--subtitle-->
        @if (nzSubtitle) {
          <span class="ant-page-header-heading-sub-title">
            <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
          </span>
        } @else {
          <ng-content select="nz-page-header-subtitle, [nz-page-header-subtitle]" />
        }
        <ng-content select="nz-page-header-tags, [nz-page-header-tags]" />
      </div>

      <ng-content select="nz-page-header-extra, [nz-page-header-extra]" />
    </div>

    <ng-content select="nz-page-header-content, [nz-page-header-content]" />
    <ng-content select="nz-page-header-footer, [nz-page-header-footer]" />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-page-header",
        "[class.has-footer]": "nzPageHeaderFooter",
        "[class.ant-page-header-ghost]": "nzGhost",
        "[class.has-breadcrumb]": "nzPageHeaderBreadcrumb",
        "[class.ant-page-header-compact]": "compact",
        "[class.ant-page-header-rtl]": `dir === 'rtl'`
      },
      imports: [NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: Location,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: NzResizeObserver
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzBackIcon: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzSubtitle: [{
      type: Input
    }],
    nzGhost: [{
      type: Input
    }],
    nzBack: [{
      type: Output
    }],
    nzPageHeaderFooter: [{
      type: ContentChild,
      args: [NzPageHeaderFooterDirective, {
        static: false
      }]
    }],
    nzPageHeaderBreadcrumb: [{
      type: ContentChild,
      args: [NzPageHeaderBreadcrumbDirective, {
        static: false
      }]
    }]
  });
})();
var NzPageHeaderCells = [NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective];
var NzPageHeaderModule = class _NzPageHeaderModule {
  static {
    this.ɵfac = function NzPageHeaderModule_Factory(t) {
      return new (t || _NzPageHeaderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzPageHeaderModule,
      imports: [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective],
      exports: [NzPageHeaderComponent, NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzPageHeaderComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderModule, [{
    type: NgModule,
    args: [{
      imports: [NzPageHeaderComponent, NzPageHeaderCells],
      exports: [NzPageHeaderComponent, NzPageHeaderCells]
    }]
  }], null, null);
})();
export {
  NzPageHeaderAvatarDirective,
  NzPageHeaderBreadcrumbDirective,
  NzPageHeaderComponent,
  NzPageHeaderContentDirective,
  NzPageHeaderExtraDirective,
  NzPageHeaderFooterDirective,
  NzPageHeaderModule,
  NzPageHeaderSubtitleDirective,
  NzPageHeaderTagDirective,
  NzPageHeaderTitleDirective
};
//# sourceMappingURL=ng-zorro-antd_page-header.js.map
