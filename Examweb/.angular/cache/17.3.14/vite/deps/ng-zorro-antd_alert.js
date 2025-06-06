import {
  slideAlertMotion
} from "./chunk-F3JPORSX.js";
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
import {
  NzConfigService,
  WithConfig
} from "./chunk-AEVDEY7X.js";
import {
  InputBoolean
} from "./chunk-K7CGAEXM.js";
import "./chunk-2TCXTTBJ.js";
import "./chunk-C47TUKU2.js";
import "./chunk-PKEBHKHE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Optional,
  Output,
  Subject,
  ViewEncapsulation$1,
  __decorate,
  setClassMetadata,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-56PQKP7J.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-alert.mjs
function NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzIcon);
  }
}
function NzAlertComponent_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r1.nzIconType || ctx_r1.inferredIconType)("nzTheme", ctx_r1.iconTheme);
  }
}
function NzAlertComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_Template, 1, 1, "ng-container")(2, NzAlertComponent_Conditional_0_Conditional_1_Conditional_2_Template, 1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r1.nzIcon ? 1 : 2);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzMessage);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzMessage);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzDescription);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzDescription);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_Template, 2, 1, "span", 8)(2, NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_Template, 2, 1, "span", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r1.nzMessage ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r1.nzDescription ? 2 : -1);
  }
}
function NzAlertComponent_Conditional_0_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzAction);
  }
}
function NzAlertComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzAction);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 11);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.nzCloseText);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_ng_container_0_Template, 3, 1, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzCloseText);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function NzAlertComponent_Conditional_0_Conditional_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.closeAlert());
    });
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_Template, 1, 1, "ng-container")(2, NzAlertComponent_Conditional_0_Conditional_4_Conditional_2_Template, 1, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r1.nzCloseText ? 1 : 2);
  }
}
function NzAlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("@slideAlertMotion.done", function NzAlertComponent_Conditional_0_Template_div_animation_slideAlertMotion_done_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFadeAnimationDone());
    });
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_1_Template, 3, 1, "div", 2)(2, NzAlertComponent_Conditional_0_Conditional_2_Template, 3, 2, "div", 3)(3, NzAlertComponent_Conditional_0_Conditional_3_Template, 2, 1, "div", 4)(4, NzAlertComponent_Conditional_0_Conditional_4_Template, 3, 1, "button", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-alert-rtl", ctx_r1.dir === "rtl")("ant-alert-success", ctx_r1.nzType === "success")("ant-alert-info", ctx_r1.nzType === "info")("ant-alert-warning", ctx_r1.nzType === "warning")("ant-alert-error", ctx_r1.nzType === "error")("ant-alert-no-icon", !ctx_r1.nzShowIcon)("ant-alert-banner", ctx_r1.nzBanner)("ant-alert-closable", ctx_r1.nzCloseable)("ant-alert-with-description", !!ctx_r1.nzDescription);
    ɵɵproperty("@.disabled", ctx_r1.nzNoAnimation)("@slideAlertMotion", void 0);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r1.nzShowIcon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r1.nzMessage || ctx_r1.nzDescription ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(3, ctx_r1.nzAction ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(4, ctx_r1.nzCloseable || ctx_r1.nzCloseText ? 4 : -1);
  }
}
var NZ_CONFIG_MODULE_NAME = "alert";
var NzAlertComponent = class _NzAlertComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzAction = null;
    this.nzCloseText = null;
    this.nzIconType = null;
    this.nzMessage = null;
    this.nzDescription = null;
    this.nzType = "info";
    this.nzCloseable = false;
    this.nzShowIcon = false;
    this.nzBanner = false;
    this.nzNoAnimation = false;
    this.nzIcon = null;
    this.nzOnClose = new EventEmitter();
    this.closed = false;
    this.iconTheme = "fill";
    this.inferredIconType = "info-circle";
    this.dir = "ltr";
    this.isTypeSet = false;
    this.isShowIconSet = false;
    this.destroy$ = new Subject();
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  closeAlert() {
    this.closed = true;
  }
  onFadeAnimationDone() {
    if (this.closed) {
      this.nzOnClose.emit(true);
    }
  }
  ngOnChanges(changes) {
    const {
      nzShowIcon,
      nzDescription,
      nzType,
      nzBanner
    } = changes;
    if (nzShowIcon) {
      this.isShowIconSet = true;
    }
    if (nzType) {
      this.isTypeSet = true;
      switch (this.nzType) {
        case "error":
          this.inferredIconType = "close-circle";
          break;
        case "success":
          this.inferredIconType = "check-circle";
          break;
        case "info":
          this.inferredIconType = "info-circle";
          break;
        case "warning":
          this.inferredIconType = "exclamation-circle";
          break;
      }
    }
    if (nzDescription) {
      this.iconTheme = this.nzDescription ? "outline" : "fill";
    }
    if (nzBanner) {
      if (!this.isTypeSet) {
        this.nzType = "warning";
      }
      if (!this.isShowIconSet) {
        this.nzShowIcon = true;
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzAlertComponent_Factory(t) {
      return new (t || _NzAlertComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzAlertComponent,
      selectors: [["nz-alert"]],
      inputs: {
        nzAction: "nzAction",
        nzCloseText: "nzCloseText",
        nzIconType: "nzIconType",
        nzMessage: "nzMessage",
        nzDescription: "nzDescription",
        nzType: "nzType",
        nzCloseable: "nzCloseable",
        nzShowIcon: "nzShowIcon",
        nzBanner: "nzBanner",
        nzNoAnimation: "nzNoAnimation",
        nzIcon: "nzIcon"
      },
      outputs: {
        nzOnClose: "nzOnClose"
      },
      exportAs: ["nzAlert"],
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [[1, "ant-alert", 3, "ant-alert-rtl", "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description"], [1, "ant-alert"], [1, "ant-alert-icon"], [1, "ant-alert-content"], [1, "ant-alert-action"], ["type", "button", "tabindex", "0", 1, "ant-alert-close-icon"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"], [1, "ant-alert-message"], [1, "ant-alert-description"], ["type", "button", "tabindex", "0", 1, "ant-alert-close-icon", 3, "click"], [1, "ant-alert-close-text"], ["nz-icon", "", "nzType", "close"]],
      template: function NzAlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzAlertComponent_Conditional_0_Template, 5, 24, "div", 0);
        }
        if (rf & 2) {
          ɵɵconditional(0, !ctx.closed ? 0 : -1);
        }
      },
      dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      data: {
        animation: [slideAlertMotion]
      },
      changeDetection: 0
    });
  }
};
__decorate([WithConfig(), InputBoolean()], NzAlertComponent.prototype, "nzCloseable", void 0);
__decorate([WithConfig(), InputBoolean()], NzAlertComponent.prototype, "nzShowIcon", void 0);
__decorate([InputBoolean()], NzAlertComponent.prototype, "nzBanner", void 0);
__decorate([InputBoolean()], NzAlertComponent.prototype, "nzNoAnimation", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAlertComponent, [{
    type: Component,
    args: [{
      selector: "nz-alert",
      exportAs: "nzAlert",
      animations: [slideAlertMotion],
      standalone: true,
      imports: [NzIconModule, NzOutletModule],
      template: `
    @if (!closed) {
      <div
        class="ant-alert"
        [class.ant-alert-rtl]="dir === 'rtl'"
        [class.ant-alert-success]="nzType === 'success'"
        [class.ant-alert-info]="nzType === 'info'"
        [class.ant-alert-warning]="nzType === 'warning'"
        [class.ant-alert-error]="nzType === 'error'"
        [class.ant-alert-no-icon]="!nzShowIcon"
        [class.ant-alert-banner]="nzBanner"
        [class.ant-alert-closable]="nzCloseable"
        [class.ant-alert-with-description]="!!nzDescription"
        [@.disabled]="nzNoAnimation"
        [@slideAlertMotion]
        (@slideAlertMotion.done)="onFadeAnimationDone()"
      >
        @if (nzShowIcon) {
          <div class="ant-alert-icon">
            @if (nzIcon) {
              <ng-container *nzStringTemplateOutlet="nzIcon"></ng-container>
            } @else {
              <span nz-icon [nzType]="nzIconType || inferredIconType" [nzTheme]="iconTheme"></span>
            }
          </div>
        }

        @if (nzMessage || nzDescription) {
          <div class="ant-alert-content">
            @if (nzMessage) {
              <span class="ant-alert-message">
                <ng-container *nzStringTemplateOutlet="nzMessage">{{ nzMessage }}</ng-container>
              </span>
            }
            @if (nzDescription) {
              <span class="ant-alert-description">
                <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
              </span>
            }
          </div>
        }

        @if (nzAction) {
          <div class="ant-alert-action">
            <ng-container *nzStringTemplateOutlet="nzAction">{{ nzAction }}</ng-container>
          </div>
        }

        @if (nzCloseable || nzCloseText) {
          <button type="button" tabindex="0" class="ant-alert-close-icon" (click)="closeAlert()">
            @if (nzCloseText) {
              <ng-container *nzStringTemplateOutlet="nzCloseText">
                <span class="ant-alert-close-text">{{ nzCloseText }}</span>
              </ng-container>
            } @else {
              <span nz-icon nzType="close"></span>
            }
          </button>
        }
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzAction: [{
      type: Input
    }],
    nzCloseText: [{
      type: Input
    }],
    nzIconType: [{
      type: Input
    }],
    nzMessage: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzCloseable: [{
      type: Input
    }],
    nzShowIcon: [{
      type: Input
    }],
    nzBanner: [{
      type: Input
    }],
    nzNoAnimation: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzOnClose: [{
      type: Output
    }]
  });
})();
var NzAlertModule = class _NzAlertModule {
  static {
    this.ɵfac = function NzAlertModule_Factory(t) {
      return new (t || _NzAlertModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzAlertModule,
      imports: [NzAlertComponent],
      exports: [NzAlertComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzAlertComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAlertModule, [{
    type: NgModule,
    args: [{
      exports: [NzAlertComponent],
      imports: [NzAlertComponent]
    }]
  }], null, null);
})();
export {
  NzAlertComponent,
  NzAlertModule
};
//# sourceMappingURL=ng-zorro-antd_alert.js.map
