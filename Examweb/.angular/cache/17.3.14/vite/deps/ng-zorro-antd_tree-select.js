import {
  NzTreeBase,
  NzTreeBaseService,
  NzTreeComponent,
  NzTreeHigherOrderServiceToken,
  NzTreeModule
} from "./chunk-SADBB35F.js";
import {
  NzSelectArrowComponent,
  NzSelectClearComponent,
  NzSelectItemComponent,
  NzSelectModule,
  NzSelectPlaceholderComponent,
  NzSelectSearchComponent
} from "./chunk-BNC7MDNR.js";
import "./chunk-7ZLPLXL6.js";
import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-MRAHIU6K.js";
import "./chunk-7L2NCGZT.js";
import "./chunk-WBZY2FM3.js";
import {
  FocusMonitor
} from "./chunk-QRA7THNK.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService
} from "./chunk-GBSO5XFS.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule,
  POSITION_MAP
} from "./chunk-EMCZTS3H.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin
} from "./chunk-VTIBGTZH.js";
import "./chunk-2WCDH2JP.js";
import {
  BACKSPACE,
  ESCAPE,
  TAB
} from "./chunk-27BDGVS6.js";
import "./chunk-LDYPNK6O.js";
import {
  NzNoAnimationDirective
} from "./chunk-BJW7QPAN.js";
import "./chunk-6PKCV7ZQ.js";
import "./chunk-K6OXKTPC.js";
import {
  reqAnimFrame
} from "./chunk-AT5YIVOW.js";
import "./chunk-KDR77T7S.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-EVTE3NKV.js";
import {
  slideMotion
} from "./chunk-F3JPORSX.js";
import "./chunk-YWASLI3P.js";
import "./chunk-5BZR2V47.js";
import "./chunk-FVHK2MSU.js";
import "./chunk-MXSTGZWO.js";
import "./chunk-I44STHJS.js";
import {
  Directionality
} from "./chunk-QEK6LCLK.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-AEVDEY7X.js";
import {
  InputBoolean,
  getStatusClassNames,
  isNotNil
} from "./chunk-K7CGAEXM.js";
import "./chunk-2TCXTTBJ.js";
import "./chunk-C47TUKU2.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  SlicePipe
} from "./chunk-PKEBHKHE.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Host,
  Injectable,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  Subject,
  ViewChild,
  __decorate,
  combineLatest,
  distinctUntilChanged,
  filter,
  forwardRef,
  map,
  merge,
  of,
  setClassMetadata,
  startWith,
  takeUntil,
  tap,
  withLatestFrom,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-56PQKP7J.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree-select.mjs
var _c0 = ["nzTreeTemplate"];
var _c1 = ["treeRef"];
var _c2 = () => [];
function NzTreeSelectComponent_ng_template_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵelement(1, "nz-embed-empty", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzComponentName", "tree-select")("specificContent", ctx_r1.nzNotFoundContent);
  }
}
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10)(1, "nz-tree", 11, 0);
    ɵɵlistener("nzExpandChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzExpandChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onExpandedKeysChange($event));
    })("nzClick", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nzTreeClick.emit($event));
    })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckedKeysChange_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSelectedNodes());
    })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSelectedKeysChange_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSelectedNodes());
    })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckBoxChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nzTreeCheckBoxChange.emit($event));
    })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSearchValueChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setSearchValues($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, NzTreeSelectComponent_ng_template_0_span_3_Template, 2, 2, "span", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown-placement-bottomLeft", ctx_r1.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r1.dropDownPosition === "top")("ant-tree-select-dropdown-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("@slideMotion", "enter")("ngClass", ctx_r1.dropdownClassName)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("dir", ctx_r1.dir)("ngStyle", ctx_r1.nzDropdownStyle);
    ɵɵadvance();
    ɵɵproperty("hidden", ctx_r1.isNotFound)("nzData", ctx_r1.nzNodes)("nzMultiple", ctx_r1.nzMultiple)("nzSearchValue", ctx_r1.inputValue)("nzHideUnMatched", ctx_r1.nzHideUnMatched)("nzShowIcon", ctx_r1.nzShowIcon)("nzCheckable", ctx_r1.nzCheckable)("nzAsyncData", ctx_r1.nzAsyncData)("nzShowExpand", ctx_r1.nzShowExpand)("nzShowLine", ctx_r1.nzShowLine)("nzExpandedIcon", ctx_r1.nzExpandedIcon)("nzExpandAll", ctx_r1.nzDefaultExpandAll)("nzExpandedKeys", ctx_r1.expandedKeys)("nzCheckedKeys", ctx_r1.nzCheckable ? ctx_r1.value : ɵɵpureFunction0(34, _c2))("nzSelectedKeys", !ctx_r1.nzCheckable ? ctx_r1.value : ɵɵpureFunction0(35, _c2))("nzTreeTemplate", ctx_r1.treeTemplate)("nzCheckStrictly", ctx_r1.nzCheckStrictly)("nzVirtualItemSize", ctx_r1.nzVirtualItemSize)("nzVirtualMaxBufferPx", ctx_r1.nzVirtualMaxBufferPx)("nzVirtualMinBufferPx", ctx_r1.nzVirtualMinBufferPx)("nzVirtualHeight", ctx_r1.nzVirtualHeight);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.nzNodes.length === 0 || ctx_r1.isNotFound);
  }
}
function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select-item", 17);
    ɵɵlistener("delete", function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() {
      const node_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.removeSelected(node_r4, true));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const node_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("deletable", true)("disabled", node_r4.isDisabled || ctx_r1.nzDisabled)("label", ctx_r1.nzDisplayWith(node_r4));
  }
}
function NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-item", 18);
    ɵɵpipe(1, "slice");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("contentTemplateOutlet", ctx_r1.nzMaxTagPlaceholder)("contentTemplateOutletContext", ɵɵpipeBind2(1, 5, ctx_r1.selectedNodes, ctx_r1.nzMaxTagCount))("deletable", false)("disabled", false)("label", "+ " + (ctx_r1.selectedNodes.length - ctx_r1.nzMaxTagCount) + " ...");
  }
}
function NzTreeSelectComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template, 1, 3, "nz-select-item", 15);
    ɵɵpipe(2, "slice");
    ɵɵtemplate(3, NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template, 2, 8, "nz-select-item", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind3(2, 3, ctx_r1.selectedNodes, 0, ctx_r1.nzMaxTagCount))("ngForTrackBy", ctx_r1.trackValue);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.selectedNodes.length > ctx_r1.nzMaxTagCount);
  }
}
function NzTreeSelectComponent_nz_select_placeholder_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-placeholder", 19);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("display", ctx_r1.placeHolderDisplay);
    ɵɵproperty("placeholder", ctx_r1.nzPlaceHolder);
  }
}
function NzTreeSelectComponent_nz_select_item_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-item", 20);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("deletable", false)("disabled", false)("label", ctx_r1.nzDisplayWith(ctx_r1.selectedNodes[0]));
  }
}
function NzTreeSelectComponent_nz_select_arrow_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-arrow");
  }
}
function NzTreeSelectComponent_nz_select_arrow_7_ng_template_1_nz_form_item_feedback_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 23);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r1.status);
  }
}
function NzTreeSelectComponent_nz_select_arrow_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTreeSelectComponent_nz_select_arrow_7_ng_template_1_nz_form_item_feedback_icon_0_Template, 1, 1, "nz-form-item-feedback-icon", 22);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.hasFeedback && !!ctx_r1.status);
  }
}
function NzTreeSelectComponent_nz_select_arrow_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-select-arrow", 21);
    ɵɵtemplate(1, NzTreeSelectComponent_nz_select_arrow_7_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feedbackIconTpl_r5 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("showArrow", !ctx_r1.isMultiple)("feedbackIcon", feedbackIconTpl_r5);
  }
}
function NzTreeSelectComponent_nz_select_clear_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select-clear", 24);
    ɵɵlistener("clear", function NzTreeSelectComponent_nz_select_clear_8_Template_nz_select_clear_clear_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClearSelection());
    });
    ɵɵelementEnd();
  }
}
var NzTreeSelectService = class _NzTreeSelectService extends NzTreeBaseService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNzTreeSelectService_BaseFactory;
      return function NzTreeSelectService_Factory(t) {
        return (ɵNzTreeSelectService_BaseFactory || (ɵNzTreeSelectService_BaseFactory = ɵɵgetInheritedFactory(_NzTreeSelectService)))(t || _NzTreeSelectService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzTreeSelectService,
      factory: _NzTreeSelectService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeSelectService, [{
    type: Injectable
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "treeSelect";
var TREE_SELECT_DEFAULT_CLASS = "ant-select-dropdown ant-select-tree-dropdown";
var listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var NzTreeSelectComponent = class _NzTreeSelectComponent extends NzTreeBase {
  set nzExpandedKeys(value) {
    this.expandedKeys = value;
  }
  get nzExpandedKeys() {
    return this.expandedKeys;
  }
  get treeTemplate() {
    return this.nzTreeTemplate || this.nzTreeTemplateChild;
  }
  get placeHolderDisplay() {
    return this.inputValue || this.isComposing || this.selectedNodes.length ? "none" : "block";
  }
  get isMultiple() {
    return this.nzMultiple || this.nzCheckable;
  }
  constructor(nzTreeService, nzConfigService, renderer, cdr, elementRef, directionality, focusMonitor, noAnimation, nzFormStatusService, nzFormNoStatusService) {
    super(nzTreeService);
    this.nzConfigService = nzConfigService;
    this.renderer = renderer;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.focusMonitor = focusMonitor;
    this.noAnimation = noAnimation;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzId = null;
    this.nzAllowClear = true;
    this.nzShowExpand = true;
    this.nzShowLine = false;
    this.nzDropdownMatchSelectWidth = true;
    this.nzCheckable = false;
    this.nzHideUnMatched = false;
    this.nzShowIcon = false;
    this.nzShowSearch = false;
    this.nzDisabled = false;
    this.nzAsyncData = false;
    this.nzMultiple = false;
    this.nzDefaultExpandAll = false;
    this.nzCheckStrictly = false;
    this.nzVirtualItemSize = 28;
    this.nzVirtualMaxBufferPx = 500;
    this.nzVirtualMinBufferPx = 28;
    this.nzVirtualHeight = null;
    this.nzNodes = [];
    this.nzOpen = false;
    this.nzSize = "default";
    this.nzPlaceHolder = "";
    this.nzDropdownStyle = null;
    this.nzBackdrop = false;
    this.nzStatus = "";
    this.nzPlacement = "";
    this.nzDisplayWith = (node) => node.title;
    this.nzMaxTagPlaceholder = null;
    this.nzOpenChange = new EventEmitter();
    this.nzCleared = new EventEmitter();
    this.nzRemoved = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.nzTreeClick = new EventEmitter();
    this.nzTreeCheckBoxChange = new EventEmitter();
    this.prefixCls = "ant-select";
    this.statusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.dropdownClassName = TREE_SELECT_DEFAULT_CLASS;
    this.isComposing = false;
    this.isDestroy = true;
    this.isNotFound = false;
    this.focused = false;
    this.inputValue = "";
    this.dropDownPosition = "bottom";
    this.selectedNodes = [];
    this.expandedKeys = [];
    this.value = [];
    this.dir = "ltr";
    this.positions = [];
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
    this.isComposingChange$ = new Subject();
    this.searchValueChange$ = new Subject();
    this.onChange = (_value) => {
    };
    this.onTouched = () => {
    };
    this.renderer.addClass(this.elementRef.nativeElement, "ant-select");
    this.renderer.addClass(this.elementRef.nativeElement, "ant-tree-select");
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? "" : status,
      hasFeedback
    })), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.isDestroy = false;
    this.subscribeSelectionChange();
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        this.focused = false;
        this.cdr.markForCheck();
        Promise.resolve().then(() => {
          this.onTouched();
        });
      } else {
        this.focused = true;
        this.cdr.markForCheck();
      }
    });
    combineLatest([this.searchValueChange$, this.isComposingChange$.pipe(startWith(false))]).pipe(takeUntil(this.destroy$)).subscribe(([searchValue, isComposing]) => {
      this.isComposing = isComposing;
      if (!isComposing) {
        this.inputValue = searchValue;
        this.updatePosition();
      }
    });
  }
  ngOnDestroy() {
    this.isDestroy = true;
    this.closeDropDown();
    this.destroy$.next();
    this.destroy$.complete();
  }
  isComposingChange(isComposing) {
    this.isComposingChange$.next(isComposing);
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.closeDropDown();
    this.isNzDisableFirstChange = false;
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
  ngOnChanges(changes) {
    const {
      nzNodes,
      nzDropdownClassName,
      nzStatus,
      nzPlacement
    } = changes;
    if (nzNodes) {
      this.updateSelectedNodes(true);
    }
    if (nzDropdownClassName) {
      const className = this.nzDropdownClassName && this.nzDropdownClassName.trim();
      this.dropdownClassName = className ? `${TREE_SELECT_DEFAULT_CLASS} ${className}` : TREE_SELECT_DEFAULT_CLASS;
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
    if (nzPlacement && this.nzPlacement) {
      if (POSITION_MAP[this.nzPlacement]) {
        this.positions = [POSITION_MAP[this.nzPlacement]];
      }
    }
  }
  writeValue(value) {
    if (isNotNil(value)) {
      if (this.isMultiple && Array.isArray(value)) {
        this.value = value;
      } else {
        this.value = [value];
      }
      this.updateSelectedNodes(true);
    } else {
      this.value = [];
      this.selectedNodes.forEach((node) => {
        this.removeSelected(node, false);
      });
      this.selectedNodes = [];
    }
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onKeydown(event) {
    if (this.nzDisabled) {
      return;
    }
    switch (event.keyCode) {
      case ESCAPE:
        break;
      case TAB:
        this.closeDropDown();
        break;
      default:
        if (!this.nzOpen) {
          this.openDropdown();
        }
    }
  }
  trigger() {
    if (this.nzDisabled || !this.nzDisabled && this.nzOpen) {
      this.closeDropDown();
    } else {
      this.openDropdown();
    }
  }
  openDropdown() {
    if (!this.nzDisabled) {
      this.nzOpen = true;
      this.nzOpenChange.emit(this.nzOpen);
      this.updateCdkConnectedOverlayStatus();
      if (this.nzShowSearch || this.isMultiple) {
        this.focusOnInput();
      }
    }
  }
  closeDropDown() {
    this.onTouched();
    this.nzOpen = false;
    this.inputValue = "";
    this.isNotFound = false;
    this.nzOpenChange.emit(this.nzOpen);
    this.cdr.markForCheck();
  }
  onKeyDownInput(e) {
    const keyCode = e.keyCode;
    const eventTarget = e.target;
    if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
      e.preventDefault();
      if (this.selectedNodes.length) {
        const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
        if (removeNode && !removeNode.isDisabled) {
          this.removeSelected(removeNode);
        }
      }
    }
  }
  onExpandedKeysChange(value) {
    this.nzExpandChange.emit(value);
    this.expandedKeys = [...value.keys];
  }
  setInputValue(value) {
    this.searchValueChange$.next(value);
  }
  removeSelected(node, emit = true) {
    node.isSelected = false;
    node.isChecked = false;
    if (this.nzCheckable) {
      this.nzTreeService.conduct(node, this.nzCheckStrictly);
    } else {
      this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
    }
    if (emit) {
      this.nzRemoved.emit(node);
    }
  }
  focusOnInput() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.focus();
    }
  }
  subscribeSelectionChange() {
    merge(this.nzTreeClick.pipe(tap((event) => {
      const node = event.node;
      if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
        node.isChecked = !node.isChecked;
        node.isHalfChecked = false;
        if (!this.nzCheckStrictly) {
          this.nzTreeService.conduct(node);
        }
      }
      if (this.nzCheckable) {
        node.isSelected = false;
      }
    }), filter((event) => {
      const node = event.node;
      return this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
    })), this.nzCheckable ? this.nzTreeCheckBoxChange.asObservable() : of(), this.nzCleared, this.nzRemoved).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateSelectedNodes();
      const value = this.selectedNodes.map((node) => node.key);
      this.value = [...value];
      if (this.nzShowSearch || this.isMultiple) {
        this.inputValue = "";
        this.isNotFound = false;
      }
      if (this.isMultiple) {
        this.onChange(value);
        this.focusOnInput();
        this.updatePosition();
      } else {
        this.closeDropDown();
        this.onChange(value.length ? value[0] : null);
      }
    });
  }
  updateSelectedNodes(init = false) {
    if (init) {
      const nodes = this.coerceTreeNodes(this.nzNodes);
      this.nzTreeService.isMultiple = this.isMultiple;
      this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
      this.nzTreeService.initTree(nodes);
      if (this.nzCheckable) {
        this.nzTreeService.conductCheck(this.value, this.nzCheckStrictly);
      } else {
        this.nzTreeService.conductSelectedKeys(this.value, this.isMultiple);
      }
    }
    this.selectedNodes = [...this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()].sort((a, b) => {
      const indexA = this.value.indexOf(a.key);
      const indexB = this.value.indexOf(b.key);
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      if (indexA !== -1) {
        return -1;
      }
      if (indexB !== -1) {
        return 1;
      }
      return 0;
    });
  }
  updatePosition() {
    reqAnimFrame(() => {
      this.cdkConnectedOverlay?.overlayRef?.updatePosition();
    });
  }
  onPositionChange(position) {
    this.dropDownPosition = position.connectionPair.originY;
  }
  onClearSelection() {
    this.selectedNodes.forEach((node) => {
      this.removeSelected(node, false);
    });
    this.nzCleared.emit();
  }
  onClickOutside(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropDown();
    }
  }
  setSearchValues($event) {
    Promise.resolve().then(() => {
      this.isNotFound = (this.nzShowSearch || this.isMultiple) && !!this.inputValue && $event.matchedKeys.length === 0;
    });
  }
  updateCdkConnectedOverlayStatus() {
    if (!this.nzPlacement || !listOfPositions.includes(POSITION_MAP[this.nzPlacement])) {
      this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
  }
  trackValue(_index, option) {
    return option.key;
  }
  static {
    this.ɵfac = function NzTreeSelectComponent_Factory(t) {
      return new (t || _NzTreeSelectComponent)(ɵɵdirectiveInject(NzTreeSelectService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(NzNoAnimationDirective, 9), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTreeSelectComponent,
      selectors: [["nz-tree-select"]],
      contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, _c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
        }
      },
      viewQuery: function NzTreeSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NzSelectSearchComponent, 5);
          ɵɵviewQuery(_c1, 5);
          ɵɵviewQuery(CdkOverlayOrigin, 7);
          ɵɵviewQuery(CdkConnectedOverlay, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.treeRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        }
      },
      hostAttrs: [1, "ant-select"],
      hostVars: 24,
      hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NzTreeSelectComponent_click_HostBindingHandler() {
            return ctx.trigger();
          })("keydown", function NzTreeSelectComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeydown($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.nzSize === "large")("ant-select-rtl", ctx.dir === "rtl")("ant-select-sm", ctx.nzSize === "small")("ant-select-disabled", ctx.nzDisabled)("ant-select-single", !ctx.isMultiple)("ant-select-show-arrow", !ctx.isMultiple)("ant-select-show-search", !ctx.isMultiple)("ant-select-multiple", ctx.isMultiple)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused);
        }
      },
      inputs: {
        nzId: "nzId",
        nzAllowClear: "nzAllowClear",
        nzShowExpand: "nzShowExpand",
        nzShowLine: "nzShowLine",
        nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
        nzCheckable: "nzCheckable",
        nzHideUnMatched: "nzHideUnMatched",
        nzShowIcon: "nzShowIcon",
        nzShowSearch: "nzShowSearch",
        nzDisabled: "nzDisabled",
        nzAsyncData: "nzAsyncData",
        nzMultiple: "nzMultiple",
        nzDefaultExpandAll: "nzDefaultExpandAll",
        nzCheckStrictly: "nzCheckStrictly",
        nzVirtualItemSize: "nzVirtualItemSize",
        nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
        nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
        nzVirtualHeight: "nzVirtualHeight",
        nzExpandedIcon: "nzExpandedIcon",
        nzNotFoundContent: "nzNotFoundContent",
        nzNodes: "nzNodes",
        nzOpen: "nzOpen",
        nzSize: "nzSize",
        nzPlaceHolder: "nzPlaceHolder",
        nzDropdownStyle: "nzDropdownStyle",
        nzDropdownClassName: "nzDropdownClassName",
        nzBackdrop: "nzBackdrop",
        nzStatus: "nzStatus",
        nzPlacement: "nzPlacement",
        nzExpandedKeys: "nzExpandedKeys",
        nzDisplayWith: "nzDisplayWith",
        nzMaxTagCount: "nzMaxTagCount",
        nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
        nzTreeTemplate: "nzTreeTemplate"
      },
      outputs: {
        nzOpenChange: "nzOpenChange",
        nzCleared: "nzCleared",
        nzRemoved: "nzRemoved",
        nzExpandChange: "nzExpandChange",
        nzTreeClick: "nzTreeClick",
        nzTreeCheckBoxChange: "nzTreeCheckBoxChange"
      },
      exportAs: ["nzTreeSelect"],
      standalone: true,
      features: [ɵɵProvidersFeature([NzTreeSelectService, {
        provide: NzTreeHigherOrderServiceToken,
        useExisting: NzTreeSelectService
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzTreeSelectComponent),
        multi: true
      }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 9,
      vars: 20,
      consts: [["treeRef", ""], ["feedbackIconTpl", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth"], ["cdkOverlayOrigin", "", 1, "ant-select-selector"], [4, "ngIf"], [3, "keydown", "isComposingChange", "valueChange", "nzId", "showInput", "value", "mirrorSync", "disabled", "focusTrigger"], [3, "placeholder", "display", 4, "ngIf"], [3, "deletable", "disabled", "label", 4, "ngIf"], [3, "showArrow", "feedbackIcon", 4, "ngIf"], [3, "clear", 4, "ngIf"], [3, "ngClass", "nzNoAnimation", "dir", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", "nzBlockNode", "", 3, "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange", "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight"], ["class", "ant-select-not-found", 4, "ngIf"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [3, "deletable", "disabled", "label", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label", 4, "ngIf"], [3, "delete", "deletable", "disabled", "label"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label"], [3, "placeholder"], [3, "deletable", "disabled", "label"], [3, "showArrow", "feedbackIcon"], [3, "status", 4, "ngIf"], [3, "status"], [3, "clear"]],
      template: function NzTreeSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzTreeSelectComponent_ng_template_0_Template, 4, 36, "ng-template", 2);
          ɵɵlistener("overlayOutsideClick", function NzTreeSelectComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
            return ctx.onClickOutside($event);
          })("detach", function NzTreeSelectComponent_Template_ng_template_detach_0_listener() {
            return ctx.closeDropDown();
          })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_0_listener($event) {
            return ctx.onPositionChange($event);
          });
          ɵɵelementStart(1, "div", 3);
          ɵɵtemplate(2, NzTreeSelectComponent_ng_container_2_Template, 4, 7, "ng-container", 4);
          ɵɵelementStart(3, "nz-select-search", 5);
          ɵɵlistener("keydown", function NzTreeSelectComponent_Template_nz_select_search_keydown_3_listener($event) {
            return ctx.onKeyDownInput($event);
          })("isComposingChange", function NzTreeSelectComponent_Template_nz_select_search_isComposingChange_3_listener($event) {
            return ctx.isComposingChange($event);
          })("valueChange", function NzTreeSelectComponent_Template_nz_select_search_valueChange_3_listener($event) {
            return ctx.setInputValue($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(4, NzTreeSelectComponent_nz_select_placeholder_4_Template, 1, 3, "nz-select-placeholder", 6)(5, NzTreeSelectComponent_nz_select_item_5_Template, 1, 3, "nz-select-item", 7)(6, NzTreeSelectComponent_nz_select_arrow_6_Template, 1, 0, "nz-select-arrow", 4)(7, NzTreeSelectComponent_nz_select_arrow_7_Template, 3, 2, "nz-select-arrow", 8)(8, NzTreeSelectComponent_nz_select_clear_8_Template, 1, 0, "nz-select-clear", 9);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayPositions", ctx.nzPlacement ? ctx.positions : ɵɵpureFunction0(19, _c2))("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-select-tree-dropdown")("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.isMultiple);
          ɵɵadvance();
          ɵɵproperty("nzId", ctx.nzId)("showInput", ctx.nzShowSearch)("value", ctx.inputValue)("mirrorSync", ctx.isMultiple)("disabled", ctx.nzDisabled)("focusTrigger", ctx.nzOpen);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.nzPlaceHolder && ctx.selectedNodes.length === 0);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.isMultiple && ctx.selectedNodes.length === 1 && !ctx.isComposing && ctx.inputValue === "");
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.isMultiple);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.isMultiple || ctx.hasFeedback && !!ctx.status);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.selectedNodes.length);
        }
      },
      dependencies: [NzOverlayModule, NzConnectedOverlayDirective, CdkConnectedOverlay, NgClass, NzNoAnimationDirective, NgStyle, NzTreeModule, NzTreeComponent, NgIf, NzEmptyModule, NzEmbedEmptyComponent, CdkOverlayOrigin, SlicePipe, NzSelectModule, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent, NgForOf, NzFormPatchModule, NzFormItemFeedbackIconComponent],
      encapsulation: 2,
      data: {
        animation: [slideMotion]
      }
    });
  }
};
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
__decorate([InputBoolean(), WithConfig()], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
__decorate([InputBoolean(), WithConfig()], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
__decorate([InputBoolean(), WithConfig()], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
__decorate([InputBoolean()], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
__decorate([WithConfig()], NzTreeSelectComponent.prototype, "nzSize", void 0);
__decorate([WithConfig()], NzTreeSelectComponent.prototype, "nzBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeSelectComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-select",
      exportAs: "nzTreeSelect",
      animations: [slideMotion],
      template: `
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      [cdkConnectedOverlayPositions]="nzPlacement ? positions : []"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-tree-dropdown'"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="closeDropDown()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        [@slideMotion]="'enter'"
        [ngClass]="dropdownClassName"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottom'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'top'"
        [class.ant-tree-select-dropdown-rtl]="dir === 'rtl'"
        [dir]="dir"
        [ngStyle]="nzDropdownStyle"
      >
        <nz-tree
          #treeRef
          [hidden]="isNotFound"
          nzNoAnimation
          nzSelectMode
          nzBlockNode
          [nzData]="nzNodes"
          [nzMultiple]="nzMultiple"
          [nzSearchValue]="inputValue"
          [nzHideUnMatched]="nzHideUnMatched"
          [nzShowIcon]="nzShowIcon"
          [nzCheckable]="nzCheckable"
          [nzAsyncData]="nzAsyncData"
          [nzShowExpand]="nzShowExpand"
          [nzShowLine]="nzShowLine"
          [nzExpandedIcon]="nzExpandedIcon"
          [nzExpandAll]="nzDefaultExpandAll"
          [nzExpandedKeys]="expandedKeys"
          [nzCheckedKeys]="nzCheckable ? value : []"
          [nzSelectedKeys]="!nzCheckable ? value : []"
          [nzTreeTemplate]="treeTemplate"
          [nzCheckStrictly]="nzCheckStrictly"
          [nzVirtualItemSize]="nzVirtualItemSize"
          [nzVirtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [nzVirtualMinBufferPx]="nzVirtualMinBufferPx"
          [nzVirtualHeight]="nzVirtualHeight"
          (nzExpandChange)="onExpandedKeysChange($event)"
          (nzClick)="nzTreeClick.emit($event)"
          (nzCheckedKeysChange)="updateSelectedNodes()"
          (nzSelectedKeysChange)="updateSelectedNodes()"
          (nzCheckBoxChange)="nzTreeCheckBoxChange.emit($event)"
          (nzSearchValueChange)="setSearchValues($event)"
        ></nz-tree>
        <span *ngIf="nzNodes.length === 0 || isNotFound" class="ant-select-not-found">
          <nz-embed-empty [nzComponentName]="'tree-select'" [specificContent]="nzNotFoundContent"></nz-embed-empty>
        </span>
      </div>
    </ng-template>

    <div cdkOverlayOrigin class="ant-select-selector">
      <ng-container *ngIf="isMultiple">
        <nz-select-item
          *ngFor="let node of selectedNodes | slice: 0 : nzMaxTagCount; trackBy: trackValue"
          [deletable]="true"
          [disabled]="node.isDisabled || nzDisabled"
          [label]="nzDisplayWith(node)"
          (delete)="removeSelected(node, true)"
        ></nz-select-item>

        <nz-select-item
          *ngIf="selectedNodes.length > nzMaxTagCount"
          [contentTemplateOutlet]="nzMaxTagPlaceholder"
          [contentTemplateOutletContext]="selectedNodes | slice: nzMaxTagCount"
          [deletable]="false"
          [disabled]="false"
          [label]="'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'"
        ></nz-select-item>
      </ng-container>

      <nz-select-search
        [nzId]="nzId"
        [showInput]="nzShowSearch"
        (keydown)="onKeyDownInput($event)"
        (isComposingChange)="isComposingChange($event)"
        (valueChange)="setInputValue($event)"
        [value]="inputValue"
        [mirrorSync]="isMultiple"
        [disabled]="nzDisabled"
        [focusTrigger]="nzOpen"
      ></nz-select-search>

      <nz-select-placeholder
        *ngIf="nzPlaceHolder && selectedNodes.length === 0"
        [placeholder]="nzPlaceHolder"
        [style.display]="placeHolderDisplay"
      ></nz-select-placeholder>

      <nz-select-item
        *ngIf="!isMultiple && selectedNodes.length === 1 && !isComposing && inputValue === ''"
        [deletable]="false"
        [disabled]="false"
        [label]="nzDisplayWith(selectedNodes[0])"
      ></nz-select-item>

      <nz-select-arrow *ngIf="!isMultiple"></nz-select-arrow>
      <nz-select-arrow
        *ngIf="!isMultiple || (hasFeedback && !!status)"
        [showArrow]="!isMultiple"
        [feedbackIcon]="feedbackIconTpl"
      >
        <ng-template #feedbackIconTpl>
          <nz-form-item-feedback-icon *ngIf="hasFeedback && !!status" [status]="status"></nz-form-item-feedback-icon>
        </ng-template>
      </nz-select-arrow>
      <nz-select-clear
        *ngIf="nzAllowClear && !nzDisabled && selectedNodes.length"
        (clear)="onClearSelection()"
      ></nz-select-clear>
    </div>
  `,
      providers: [NzTreeSelectService, {
        provide: NzTreeHigherOrderServiceToken,
        useExisting: NzTreeSelectService
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTreeSelectComponent),
        multi: true
      }],
      host: {
        class: "ant-select",
        "[class.ant-select-in-form-item]": "!!nzFormStatusService",
        "[class.ant-select-lg]": 'nzSize==="large"',
        "[class.ant-select-rtl]": 'dir==="rtl"',
        "[class.ant-select-sm]": 'nzSize==="small"',
        "[class.ant-select-disabled]": "nzDisabled",
        "[class.ant-select-single]": "!isMultiple",
        "[class.ant-select-show-arrow]": "!isMultiple",
        "[class.ant-select-show-search]": "!isMultiple",
        "[class.ant-select-multiple]": "isMultiple",
        "[class.ant-select-allow-clear]": "nzAllowClear",
        "[class.ant-select-open]": "nzOpen",
        "[class.ant-select-focused]": "nzOpen || focused",
        "(click)": "trigger()",
        "(keydown)": "onKeydown($event)"
      },
      imports: [NzOverlayModule, CdkConnectedOverlay, NgClass, NzNoAnimationDirective, NgStyle, NzTreeModule, NgIf, NzEmptyModule, CdkOverlayOrigin, SlicePipe, NzSelectModule, NgForOf, NzFormPatchModule],
      standalone: true
    }]
  }], () => [{
    type: NzTreeSelectService
  }, {
    type: NzConfigService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FocusMonitor
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    nzId: [{
      type: Input
    }],
    nzAllowClear: [{
      type: Input
    }],
    nzShowExpand: [{
      type: Input
    }],
    nzShowLine: [{
      type: Input
    }],
    nzDropdownMatchSelectWidth: [{
      type: Input
    }],
    nzCheckable: [{
      type: Input
    }],
    nzHideUnMatched: [{
      type: Input
    }],
    nzShowIcon: [{
      type: Input
    }],
    nzShowSearch: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzAsyncData: [{
      type: Input
    }],
    nzMultiple: [{
      type: Input
    }],
    nzDefaultExpandAll: [{
      type: Input
    }],
    nzCheckStrictly: [{
      type: Input
    }],
    nzVirtualItemSize: [{
      type: Input
    }],
    nzVirtualMaxBufferPx: [{
      type: Input
    }],
    nzVirtualMinBufferPx: [{
      type: Input
    }],
    nzVirtualHeight: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzNodes: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzDropdownStyle: [{
      type: Input
    }],
    nzDropdownClassName: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzExpandedKeys: [{
      type: Input
    }],
    nzDisplayWith: [{
      type: Input
    }],
    nzMaxTagCount: [{
      type: Input
    }],
    nzMaxTagPlaceholder: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzCleared: [{
      type: Output
    }],
    nzRemoved: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzTreeClick: [{
      type: Output
    }],
    nzTreeCheckBoxChange: [{
      type: Output
    }],
    nzSelectSearchComponent: [{
      type: ViewChild,
      args: [NzSelectSearchComponent, {
        static: false
      }]
    }],
    treeRef: [{
      type: ViewChild,
      args: ["treeRef", {
        static: false
      }]
    }],
    cdkOverlayOrigin: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true
      }]
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: false
      }]
    }],
    nzTreeTemplate: [{
      type: Input
    }],
    nzTreeTemplateChild: [{
      type: ContentChild,
      args: ["nzTreeTemplate", {
        static: true
      }]
    }]
  });
})();
var NzTreeSelectModule = class _NzTreeSelectModule {
  static {
    this.ɵfac = function NzTreeSelectModule_Factory(t) {
      return new (t || _NzTreeSelectModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzTreeSelectModule,
      imports: [NzTreeSelectComponent],
      exports: [NzTreeSelectComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzTreeSelectComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NzTreeSelectComponent],
      exports: [NzTreeSelectComponent]
    }]
  }], null, null);
})();
export {
  NzTreeSelectComponent,
  NzTreeSelectModule,
  NzTreeSelectService
};
//# sourceMappingURL=ng-zorro-antd_tree-select.js.map
