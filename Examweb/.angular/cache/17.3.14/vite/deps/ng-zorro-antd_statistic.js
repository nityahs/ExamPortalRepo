import {
  timeUnits
} from "./chunk-WBZY2FM3.js";
import "./chunk-5BZR2V47.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-MXSTGZWO.js";
import {
  Platform
} from "./chunk-I44STHJS.js";
import {
  Directionality
} from "./chunk-QEK6LCLK.js";
import {
  padStart
} from "./chunk-K7CGAEXM.js";
import {
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  NumberSymbol,
  getLocaleNumberSymbol
} from "./chunk-PKEBHKHE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  LOCALE_ID,
  NgModule,
  NgZone,
  Optional,
  Output,
  Pipe,
  Subject,
  ViewEncapsulation$1,
  interval,
  setClassMetadata,
  takeUntil,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-56PQKP7J.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-pipe.mjs
var NzTimeRangePipe = class _NzTimeRangePipe {
  transform(value, format = "HH:mm:ss") {
    let duration = Number(value || 0);
    return timeUnits.reduce((current, [name, unit]) => {
      if (current.indexOf(name) !== -1) {
        const v = Math.floor(duration / unit);
        duration -= v * unit;
        return current.replace(new RegExp(`${name}+`, "g"), (match) => padStart(v.toString(), match.length, "0"));
      }
      return current;
    }, format);
  }
  static {
    this.ɵfac = function NzTimeRangePipe_Factory(t) {
      return new (t || _NzTimeRangePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "nzTimeRange",
      type: _NzTimeRangePipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimeRangePipe, [{
    type: Pipe,
    args: [{
      name: "nzTimeRange",
      pure: true,
      standalone: true
    }]
  }], null, null);
})();
var NzPipesModule = class _NzPipesModule {
  static {
    this.ɵfac = function NzPipesModule_Factory(t) {
      return new (t || _NzPipesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzPipesModule,
      imports: [NzTimeRangePipe],
      exports: [NzTimeRangePipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPipesModule, [{
    type: NgModule,
    args: [{
      imports: [NzTimeRangePipe],
      exports: [NzTimeRangePipe]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-statistic.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function NzStatisticNumberComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzValueTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.nzValue));
  }
}
function NzStatisticNumberComponent_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.displayInt);
  }
}
function NzStatisticNumberComponent_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.displayDecimal);
  }
}
function NzStatisticNumberComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_2_span_1_Template, 2, 1, "span", 4)(2, NzStatisticNumberComponent_ng_container_2_span_2_Template, 2, 1, "span", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayInt);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayDecimal);
  }
}
function NzStatisticComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzStatisticComponent_span_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzPrefix);
  }
}
function NzStatisticComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtemplate(1, NzStatisticComponent_span_3_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzPrefix);
  }
}
function NzStatisticComponent_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzSuffix);
  }
}
function NzStatisticComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtemplate(1, NzStatisticComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzSuffix);
  }
}
function NzCountdownComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "nzTimeRange");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate(ɵɵpipeBind2(1, 1, ctx_r0.diff, ctx_r0.nzFormat));
  }
}
var NzStatisticNumberComponent = class _NzStatisticNumberComponent {
  constructor(locale_id) {
    this.locale_id = locale_id;
    this.displayInt = "";
    this.displayDecimal = "";
  }
  ngOnChanges() {
    this.formatNumber();
  }
  formatNumber() {
    const decimalSeparator = typeof this.nzValue === "number" ? "." : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
    const value = String(this.nzValue);
    const [int, decimal] = value.split(decimalSeparator);
    this.displayInt = int;
    this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : "";
  }
  static {
    this.ɵfac = function NzStatisticNumberComponent_Factory(t) {
      return new (t || _NzStatisticNumberComponent)(ɵɵdirectiveInject(LOCALE_ID));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzStatisticNumberComponent,
      selectors: [["nz-statistic-number"]],
      inputs: {
        nzValue: "nzValue",
        nzValueTemplate: "nzValueTemplate"
      },
      exportAs: ["nzStatisticNumber"],
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [[1, "ant-statistic-content-value"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-statistic-content-value-int", 4, "ngIf"], ["class", "ant-statistic-content-value-decimal", 4, "ngIf"], [1, "ant-statistic-content-value-int"], [1, "ant-statistic-content-value-decimal"]],
      template: function NzStatisticNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "span", 0);
          ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_1_Template, 1, 4, "ng-container", 1)(2, NzStatisticNumberComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.nzValueTemplate);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.nzValueTemplate);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStatisticNumberComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      selector: "nz-statistic-number",
      exportAs: "nzStatisticNumber",
      template: `
    <span class="ant-statistic-content-value">
      <ng-container
        *ngIf="nzValueTemplate"
        [ngTemplateOutlet]="nzValueTemplate"
        [ngTemplateOutletContext]="{ $implicit: nzValue }"
      ></ng-container>
      <ng-container *ngIf="!nzValueTemplate">
        <span *ngIf="displayInt" class="ant-statistic-content-value-int">{{ displayInt }}</span>
        <span *ngIf="displayDecimal" class="ant-statistic-content-value-decimal">{{ displayDecimal }}</span>
      </ng-container>
    </span>
  `,
      imports: [NgIf, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }], {
    nzValue: [{
      type: Input
    }],
    nzValueTemplate: [{
      type: Input
    }]
  });
})();
var NzStatisticComponent = class _NzStatisticComponent {
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
    this.nzValueStyle = {};
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzStatisticComponent_Factory(t) {
      return new (t || _NzStatisticComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzStatisticComponent,
      selectors: [["nz-statistic"]],
      hostAttrs: [1, "ant-statistic"],
      hostVars: 2,
      hostBindings: function NzStatisticComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-statistic-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzPrefix: "nzPrefix",
        nzSuffix: "nzSuffix",
        nzTitle: "nzTitle",
        nzValue: "nzValue",
        nzValueStyle: "nzValueStyle",
        nzValueTemplate: "nzValueTemplate"
      },
      exportAs: ["nzStatistic"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 6,
      vars: 6,
      consts: [[1, "ant-statistic-title"], [4, "nzStringTemplateOutlet"], [1, "ant-statistic-content", 3, "ngStyle"], ["class", "ant-statistic-content-prefix", 4, "ngIf"], [3, "nzValue", "nzValueTemplate"], ["class", "ant-statistic-content-suffix", 4, "ngIf"], [1, "ant-statistic-content-prefix"], [1, "ant-statistic-content-suffix"]],
      template: function NzStatisticComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, NzStatisticComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 2);
          ɵɵtemplate(3, NzStatisticComponent_span_3_Template, 2, 1, "span", 3);
          ɵɵelement(4, "nz-statistic-number", 4);
          ɵɵtemplate(5, NzStatisticComponent_span_5_Template, 2, 1, "span", 5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
          ɵɵadvance();
          ɵɵproperty("ngStyle", ctx.nzValueStyle);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.nzPrefix);
          ɵɵadvance();
          ɵɵproperty("nzValue", ctx.nzValue)("nzValueTemplate", ctx.nzValueTemplate);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.nzSuffix);
        }
      },
      dependencies: [NzStatisticNumberComponent, NgIf, NzOutletModule, NzStringTemplateOutletDirective, NgStyle],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStatisticComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-statistic",
      exportAs: "nzStatistic",
      template: `
    <div class="ant-statistic-title">
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
    </div>
    <div class="ant-statistic-content" [ngStyle]="nzValueStyle">
      <span *ngIf="nzPrefix" class="ant-statistic-content-prefix">
        <ng-container *nzStringTemplateOutlet="nzPrefix">{{ nzPrefix }}</ng-container>
      </span>
      <nz-statistic-number [nzValue]="nzValue" [nzValueTemplate]="nzValueTemplate"></nz-statistic-number>
      <span *ngIf="nzSuffix" class="ant-statistic-content-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffix">{{ nzSuffix }}</ng-container>
      </span>
    </div>
  `,
      host: {
        class: "ant-statistic",
        "[class.ant-statistic-rtl]": `dir === 'rtl'`
      },
      imports: [NzStatisticNumberComponent, NgIf, NzOutletModule, NgStyle],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzPrefix: [{
      type: Input
    }],
    nzSuffix: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzValueStyle: [{
      type: Input
    }],
    nzValueTemplate: [{
      type: Input
    }]
  });
})();
var REFRESH_INTERVAL = 1e3 / 30;
var NzCountdownComponent = class _NzCountdownComponent extends NzStatisticComponent {
  constructor(cdr, ngZone, platform, directionality) {
    super(cdr, directionality);
    this.ngZone = ngZone;
    this.platform = platform;
    this.nzFormat = "HH:mm:ss";
    this.nzCountdownFinish = new EventEmitter();
    this.target = 0;
  }
  ngOnChanges(changes) {
    if (changes.nzValue) {
      this.target = Number(changes.nzValue.currentValue);
      if (!changes.nzValue.isFirstChange()) {
        this.syncTimer();
      }
    }
  }
  ngOnInit() {
    super.ngOnInit();
    this.syncTimer();
  }
  ngOnDestroy() {
    this.stopTimer();
  }
  syncTimer() {
    if (this.target >= Date.now()) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }
  startTimer() {
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        this.stopTimer();
        this.updater_ = interval(REFRESH_INTERVAL).subscribe(() => {
          this.updateValue();
          this.cdr.detectChanges();
        });
      });
    }
  }
  stopTimer() {
    if (this.updater_) {
      this.updater_.unsubscribe();
      this.updater_ = null;
    }
  }
  /**
   * Update time that should be displayed on the screen.
   */
  updateValue() {
    this.diff = Math.max(this.target - Date.now(), 0);
    if (this.diff === 0) {
      this.stopTimer();
      if (this.nzCountdownFinish.observers.length) {
        this.ngZone.run(() => this.nzCountdownFinish.emit());
      }
    }
  }
  static {
    this.ɵfac = function NzCountdownComponent_Factory(t) {
      return new (t || _NzCountdownComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Directionality, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzCountdownComponent,
      selectors: [["nz-countdown"]],
      inputs: {
        nzFormat: "nzFormat"
      },
      outputs: {
        nzCountdownFinish: "nzCountdownFinish"
      },
      exportAs: ["nzCountdown"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 6,
      consts: [["countDownTpl", ""], [3, "nzValue", "nzValueStyle", "nzValueTemplate", "nzTitle", "nzPrefix", "nzSuffix"]],
      template: function NzCountdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "nz-statistic", 1);
          ɵɵtemplate(1, NzCountdownComponent_ng_template_1_Template, 2, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const countDownTpl_r2 = ɵɵreference(2);
          ɵɵproperty("nzValue", ctx.diff)("nzValueStyle", ctx.nzValueStyle)("nzValueTemplate", ctx.nzValueTemplate || countDownTpl_r2)("nzTitle", ctx.nzTitle)("nzPrefix", ctx.nzPrefix)("nzSuffix", ctx.nzSuffix);
        }
      },
      dependencies: [NzStatisticComponent, NzPipesModule, NzTimeRangePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCountdownComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-countdown",
      exportAs: "nzCountdown",
      template: `
    <nz-statistic
      [nzValue]="diff"
      [nzValueStyle]="nzValueStyle"
      [nzValueTemplate]="nzValueTemplate || countDownTpl"
      [nzTitle]="nzTitle"
      [nzPrefix]="nzPrefix"
      [nzSuffix]="nzSuffix"
    ></nz-statistic>

    <ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>
  `,
      imports: [NzStatisticComponent, NzPipesModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzFormat: [{
      type: Input
    }],
    nzCountdownFinish: [{
      type: Output
    }]
  });
})();
var NzStatisticModule = class _NzStatisticModule {
  static {
    this.ɵfac = function NzStatisticModule_Factory(t) {
      return new (t || _NzStatisticModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzStatisticModule,
      imports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
      exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzStatisticComponent, NzCountdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStatisticModule, [{
    type: NgModule,
    args: [{
      imports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
      exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
    }]
  }], null, null);
})();
export {
  NzCountdownComponent,
  NzStatisticComponent,
  NzStatisticModule,
  NzStatisticNumberComponent
};
//# sourceMappingURL=ng-zorro-antd_statistic.js.map
