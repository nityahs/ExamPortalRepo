import {
  NzDropDownDirective,
  NzDropDownModule
} from "./chunk-XIUDMLPS.js";
import "./chunk-6N7PDCLS.js";
import "./chunk-EMCZTS3H.js";
import "./chunk-VTIBGTZH.js";
import "./chunk-2WCDH2JP.js";
import "./chunk-27BDGVS6.js";
import "./chunk-LDYPNK6O.js";
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router
} from "./chunk-E3YKC3BL.js";
import "./chunk-BJW7QPAN.js";
import "./chunk-WK2YRPDU.js";
import "./chunk-STN72EMM.js";
import "./chunk-INCI4HT4.js";
import "./chunk-6PKCV7ZQ.js";
import "./chunk-K6OXKTPC.js";
import "./chunk-AT5YIVOW.js";
import "./chunk-KDR77T7S.js";
import "./chunk-F3JPORSX.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-YWASLI3P.js";
import "./chunk-5BZR2V47.js";
import "./chunk-FVHK2MSU.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-MXSTGZWO.js";
import "./chunk-I44STHJS.js";
import {
  Directionality
} from "./chunk-QEK6LCLK.js";
import "./chunk-AEVDEY7X.js";
import {
  InputBoolean,
  PREFIX
} from "./chunk-K7CGAEXM.js";
import "./chunk-2TCXTTBJ.js";
import "./chunk-C47TUKU2.js";
import {
  NgTemplateOutlet
} from "./chunk-PKEBHKHE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injector,
  Input,
  NgModule,
  Optional,
  Renderer2,
  Subject,
  ViewEncapsulation$1,
  __decorate,
  filter,
  setClassMetadata,
  startWith,
  takeUntil,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
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
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-56PQKP7J.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-breadcrumb.mjs
var _c0 = ["*"];
function NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtemplate(1, NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelement(2, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const noMenuTpl_r2 = ɵɵreference(4);
    ɵɵproperty("nzDropdownMenu", ctx_r0.nzOverlay);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", noMenuTpl_r2);
  }
}
function NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const noMenuTpl_r2 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", noMenuTpl_r2);
  }
}
function NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.nzBreadCrumbComponent.nzSeparator, " ");
  }
}
function NzBreadCrumbItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-breadcrumb-separator");
    ɵɵtemplate(1, NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzBreadCrumbComponent.nzSeparator);
  }
}
function NzBreadCrumbItemComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
var _forTrack0 = ($index, $item) => $item.url;
function NzBreadCrumbComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-breadcrumb-item")(1, "a", 0);
    ɵɵlistener("click", function NzBreadCrumbComponent_Conditional_1_For_1_Template_a_click_1_listener($event) {
      const breadcrumb_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.navigate(breadcrumb_r2.url, $event));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵattribute("href", breadcrumb_r2.url, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate(breadcrumb_r2.label);
  }
}
function NzBreadCrumbComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzBreadCrumbComponent_Conditional_1_For_1_Template, 3, 2, "nz-breadcrumb-item", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵrepeater(ctx_r2.breadcrumbs);
  }
}
var NzBreadCrumbSeparatorComponent = class _NzBreadCrumbSeparatorComponent {
  static {
    this.ɵfac = function NzBreadCrumbSeparatorComponent_Factory(t) {
      return new (t || _NzBreadCrumbSeparatorComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzBreadCrumbSeparatorComponent,
      selectors: [["nz-breadcrumb-separator"]],
      hostAttrs: [1, "ant-breadcrumb-separator"],
      exportAs: ["nzBreadcrumbSeparator"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzBreadCrumbSeparatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbSeparatorComponent, [{
    type: Component,
    args: [{
      selector: "nz-breadcrumb-separator",
      exportAs: "nzBreadcrumbSeparator",
      standalone: true,
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-breadcrumb-separator"
      }
    }]
  }], null, null);
})();
var NzBreadcrumb = class {
};
var NzBreadCrumbItemComponent = class _NzBreadCrumbItemComponent {
  constructor(nzBreadCrumbComponent) {
    this.nzBreadCrumbComponent = nzBreadCrumbComponent;
  }
  static {
    this.ɵfac = function NzBreadCrumbItemComponent_Factory(t) {
      return new (t || _NzBreadCrumbItemComponent)(ɵɵdirectiveInject(NzBreadcrumb));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzBreadCrumbItemComponent,
      selectors: [["nz-breadcrumb-item"]],
      inputs: {
        nzOverlay: "nzOverlay"
      },
      exportAs: ["nzBreadcrumbItem"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 2,
      consts: [["noMenuTpl", ""], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down"], [4, "nzStringTemplateOutlet"], [1, "ant-breadcrumb-link"]],
      template: function NzBreadCrumbItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzBreadCrumbItemComponent_Conditional_0_Template, 3, 2, "span", 1)(1, NzBreadCrumbItemComponent_Conditional_1_Template, 1, 1)(2, NzBreadCrumbItemComponent_Conditional_2_Template, 2, 1, "nz-breadcrumb-separator")(3, NzBreadCrumbItemComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(0, !!ctx.nzOverlay ? 0 : 1);
          ɵɵadvance(2);
          ɵɵconditional(2, ctx.nzBreadCrumbComponent.nzSeparator ? 2 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropDownModule, NzDropDownDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-breadcrumb-item",
      exportAs: "nzBreadcrumbItem",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropDownModule, NzIconModule, NzOutletModule],
      template: `
    @if (!!nzOverlay) {
      <span class="ant-breadcrumb-overlay-link" nz-dropdown [nzDropdownMenu]="nzOverlay">
        <ng-template [ngTemplateOutlet]="noMenuTpl"></ng-template>
        <span nz-icon nzType="down"></span>
      </span>
    } @else {
      <ng-template [ngTemplateOutlet]="noMenuTpl" />
    }

    @if (nzBreadCrumbComponent.nzSeparator) {
      <nz-breadcrumb-separator>
        <ng-container *nzStringTemplateOutlet="nzBreadCrumbComponent.nzSeparator">
          {{ nzBreadCrumbComponent.nzSeparator }}
        </ng-container>
      </nz-breadcrumb-separator>
    }

    <ng-template #noMenuTpl>
      <span class="ant-breadcrumb-link">
        <ng-content />
      </span>
    </ng-template>
  `
    }]
  }], () => [{
    type: NzBreadcrumb
  }], {
    nzOverlay: [{
      type: Input
    }]
  });
})();
var NzBreadCrumbComponent = class _NzBreadCrumbComponent {
  constructor(injector, cdr, elementRef, renderer, directionality) {
    this.injector = injector;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this.nzAutoGenerate = false;
    this.nzSeparator = "/";
    this.nzRouteLabel = "breadcrumb";
    this.nzRouteLabelFn = (label) => label;
    this.breadcrumbs = [];
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    if (this.nzAutoGenerate) {
      this.registerRouterChange();
    }
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.prepareComponentForRtl();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.prepareComponentForRtl();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  navigate(url, e) {
    e.preventDefault();
    this.injector.get(Router).navigateByUrl(url);
  }
  registerRouterChange() {
    try {
      const router = this.injector.get(Router);
      const activatedRoute = this.injector.get(ActivatedRoute);
      router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntil(this.destroy$),
        startWith(true)
        // trigger initial render
      ).subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
        this.cdr.markForCheck();
      });
    } catch (e) {
      throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
    }
  }
  getBreadcrumbs(route, url = "", breadcrumbs = []) {
    const children = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet === PRIMARY_OUTLET) {
        const routeUrl = child.snapshot.url.map((segment) => segment.path).filter((path) => path).join("/");
        const nextUrl = routeUrl ? `${url}/${routeUrl}` : url;
        const breadcrumbLabel = this.nzRouteLabelFn(child.snapshot.data[this.nzRouteLabel]);
        if (routeUrl && breadcrumbLabel) {
          const breadcrumb = {
            label: breadcrumbLabel,
            params: child.snapshot.params,
            url: nextUrl
          };
          breadcrumbs.push(breadcrumb);
        }
        return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
      }
    }
    return breadcrumbs;
  }
  prepareComponentForRtl() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    }
  }
  static {
    this.ɵfac = function NzBreadCrumbComponent_Factory(t) {
      return new (t || _NzBreadCrumbComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzBreadCrumbComponent,
      selectors: [["nz-breadcrumb"]],
      hostAttrs: [1, "ant-breadcrumb"],
      inputs: {
        nzAutoGenerate: "nzAutoGenerate",
        nzSeparator: "nzSeparator",
        nzRouteLabel: "nzRouteLabel",
        nzRouteLabelFn: "nzRouteLabelFn"
      },
      exportAs: ["nzBreadcrumb"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: NzBreadcrumb,
        useExisting: _NzBreadCrumbComponent
      }]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [[3, "click"]],
      template: function NzBreadCrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, NzBreadCrumbComponent_Conditional_1_Template, 2, 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(1, ctx.nzAutoGenerate && ctx.breadcrumbs.length ? 1 : -1);
        }
      },
      dependencies: [NzBreadCrumbItemComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([InputBoolean()], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-breadcrumb",
      exportAs: "nzBreadcrumb",
      preserveWhitespaces: false,
      providers: [{
        provide: NzBreadcrumb,
        useExisting: NzBreadCrumbComponent
      }],
      standalone: true,
      imports: [NzBreadCrumbItemComponent],
      template: `
    <ng-content />
    @if (nzAutoGenerate && breadcrumbs.length) {
      @for (breadcrumb of breadcrumbs; track breadcrumb.url) {
        <nz-breadcrumb-item>
          <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
        </nz-breadcrumb-item>
      }
    }
  `,
      host: {
        class: "ant-breadcrumb"
      }
    }]
  }], () => [{
    type: Injector
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzAutoGenerate: [{
      type: Input
    }],
    nzSeparator: [{
      type: Input
    }],
    nzRouteLabel: [{
      type: Input
    }],
    nzRouteLabelFn: [{
      type: Input
    }]
  });
})();
var NzBreadCrumbModule = class _NzBreadCrumbModule {
  static {
    this.ɵfac = function NzBreadCrumbModule_Factory(t) {
      return new (t || _NzBreadCrumbModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzBreadCrumbModule,
      imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
      exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbModule, [{
    type: NgModule,
    args: [{
      imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
      exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
    }]
  }], null, null);
})();
export {
  NzBreadCrumbComponent,
  NzBreadCrumbItemComponent,
  NzBreadCrumbModule,
  NzBreadCrumbSeparatorComponent
};
//# sourceMappingURL=ng-zorro-antd_breadcrumb.js.map
