import{a as R,b as ve,f as ue,g as _e,h as xe,l as fe,m as Ce}from"./chunk-PKQ4VA4R.js";import{a as Ee,b as be}from"./chunk-33RX7XKT.js";import{$ as S,Aa as c,C as b,D as _,Ea as ae,Fa as re,Ga as le,Ha as f,Ka as h,La as n,Ma as C,Na as de,O as oe,Oa as ee,R as a,Sa as A,Y as g,aa as N,ab as P,bb as M,cb as L,d as Se,da as p,eb as ce,g as ie,jb as me,lb as se,ma as d,mb as pe,na as e,nb as F,oa as t,pa as v,ta as y,ua as w,wa as x,x as O,y as H,ya as u}from"./chunk-7MAX6PA7.js";var ge=["navList"];function ye(i,r){if(i&1&&(e(0,"a",8)(1,"span",4),n(2),t(),n(3),t()),i&2){let o=r.$implicit;d("routerLink",o.router),a(2),C(o.icon),a(),de(" ",o.text," ")}}var $=class i{navList;componentList=[{router:"Component_Accordion",icon:"view_day",text:"Accordion"},{router:"Component_Button",icon:"smart_button",text:"Button"},{router:"Component_Card",icon:"credit_card",text:"Card"},{router:"Component_Dropdown",icon:"arrow_drop_down",text:"Dropdown"},{router:"Component_Input",icon:"input",text:"Input"},{router:"Component_Menubar",icon:"menu",text:"Menubar"},{router:"Component_Nav",icon:"navigation",text:"Nav"},{router:"Component_Table",icon:"table_chart",text:"Table"},{router:"Component_Tab",icon:"tab",text:"Tab"},{router:"Component_Variables",icon:"tune",text:"Variables"}];constructor(){}ngOnInit(){}scrollNav(r){r==="left"?this.navList.nativeElement.scrollBy({left:-200,behavior:"smooth"}):this.navList.nativeElement.scrollBy({left:200,behavior:"smooth"})}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=S({type:i,selectors:[["app-components"]],viewQuery:function(o,l){if(o&1&&ae(ge,5),o&2){let m;re(m=le())&&(l.navList=m.first)}},standalone:!1,decls:13,vars:1,consts:[["navList",""],["id","component-container"],["id","component-nav"],["type","button",1,"mobile-left-nav",3,"click"],[1,"material-symbols-outlined"],["type","button",1,"mobile-right-nav",3,"click"],[1,"component-nav-list"],["routerLinkActive","component-nav-active",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","component-nav-active",3,"routerLink"]],template:function(o,l){if(o&1){let m=x();e(0,"section",1)(1,"nav",2)(2,"button",3),u("click",function(){return b(m),_(l.scrollNav("left"))}),e(3,"span",4),n(4," arrow_left "),t()(),e(5,"button",5),u("click",function(){return b(m),_(l.scrollNav("right"))}),e(6,"span",4),n(7," arrow_right "),t()(),e(8,"div",6,0),p(10,ye,4,3,"a",7),t()(),e(11,"div"),v(12,"router-outlet"),t()()}o&2&&(a(10),d("ngForOf",l.componentList))},dependencies:[M,me,se,pe],encapsulation:2})};var k=class i{THEME_KEY="theme";themeSubject=new ie(localStorage.getItem(this.THEME_KEY)||"light-mode");currentTheme$=this.themeSubject.asObservable();constructor(){let r=this.themeSubject.value;document.body.classList.add(r)}setTheme(r){let o=this.themeSubject.value;document.body.classList.remove(o),document.body.classList.add(r),localStorage.setItem(this.THEME_KEY,r),this.themeSubject.next(r)}toggleTheme(){let r=this.themeSubject.value==="dark-mode"?"light-mode":"dark-mode";this.setTheme(r)}get isDarkMode(){return this.themeSubject.value==="dark-mode"}static \u0275fac=function(o){return new(o||i)};static \u0275prov=O({token:i,factory:i.\u0275fac,providedIn:"root"})};var te=Se(Ee());function we(i,r){if(i&1){let o=x();e(0,"div")(1,"div",36)(2,"header")(3,"p"),n(4,"Scss Snippet"),t(),e(5,"button",37),u("click",function(){b(o);let m=f(11),s=c();return _(s.copyCode(m))}),e(6,"span",38),n(7," file_copy "),t()()(),e(8,"div",39)(9,"pre",40)(10,"code",41,0),n(12,`
:root {
  // Font
  --font-style: Roboto, "Helvetica Neue Light", "Helvetica Neue", Helvetica,
    Arial, "Lucida Grande", sans-serif;

  // Dark
  --yellow-dark-clr: rgb(250, 175, 0);
  --green-dark-clr: rgb(1, 157, 157);
  --orange-dark-clr: rgb(255, 90, 31);
  --blue-dark-clr: rgb(15, 85, 235);
  --violet-dark-clr: rgb(127, 54, 221);
  --gray-dark-clr: rgb(159, 159, 159);
  // Medium
  --yellow-medium-clr: #ffbd02;
  --green-medium-clr: #02bbbd;
  --orange-medium-clr: #ff7c4b;
  --blue-medium-clr: #3971ff;
  --violet-medium-clr: #9e54ff;
  --gray-medium-clr: #bababa;
  // Light
  --yellow-light-clr: #fbd97a;
  --green-light-clr: #8ad2d3;
  --orange-light-clr: #f6bc9a;
  --blue-light-clr: #b5e1ff;
  --violet-light-clr: #caa7ff;
  --gray-light-clr: #e5e5e5;
  // Font
  --yellow-font-clr: #ffffff;
  --green-font-clr: #ffffff;
  --orange-font-clr: #ffffff;
  --blue-font-clr: #ffffff;
  --violet-font-clr: #ffffff;
  --gray-font-clr: white;

  // Table
  --tbl-dark-clr: #d1d1d1;
  --tbl-medium-clr: #ebebeb;
  --tbl-light-clr: #dbdbdb;
  --tbl-font-clr: #898989;
  --th-font-weight: 400;

  // Button
  --btn-dark-clr: #d7d7d7;
  --btn-medium-clr: #f8f8f8;
  --btn-light-clr: #dbdbdb;
  --btn-font-clr: #898989;

  // Card
  --card-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  --card-width: 100%;
  --card-fixed-width: 400px;

  // Inputs
  --input-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  --input-dark-clr: #bfbfbf;
  --input-medium-clr: #cecece;
  --input-light-clr: #ffffff;
  --input-font-clr: #727272;

  // Nav
  --nav-dark-clr: #7d7d7d;
  --nav-medium-clr: #c8c8c8;
  --nav-light-clr: #fafafa;
  --nav-font-clr: #ffffff;

  // Colour Mode
  --cf-mode-primary: #ffffff;
  --cf-mode-secondary: #faf9f8;
  --cf-mode-active: #e1e1e1;
  --cf-mode-font-primary: #1f1e1e;
  --cf-mode-font-secondary: #535151;
}

// In-Build Colours
$buildIn: (
  "yellow": var(--yellow-dark-clr),
  "green": var(--green-dark-clr),
  "orange": var(--orange-dark-clr),
  "blue": var(--blue-dark-clr),
  "violet": var(--violet-dark-clr),
  "gray": var(--gray-dark-clr),
);

$colors: (
  "yellow": (
    var(--yellow-dark-clr),
    var(--yellow-medium-clr),
    var(--yellow-light-clr),
    var(--yellow-font-clr),
  ),
  "green": (
    var(--green-dark-clr),
    var(--green-medium-clr),
    var(--green-light-clr),
    var(--green-font-clr),
  ),
  "orange": (
    var(--orange-dark-clr),
    var(--orange-medium-clr),
    var(--orange-light-clr),
    var(--orange-font-clr),
  ),
  "blue": (
    var(--blue-dark-clr),
    var(--blue-medium-clr),
    var(--blue-light-clr),
    var(--blue-font-clr),
  ),
  "violet": (
    var(--violet-dark-clr),
    var(--violet-medium-clr),
    var(--violet-light-clr),
    var(--violet-font-clr),
  ),
  "gray": (
    var(--gray-dark-clr),
    var(--gray-medium-clr),
    var(--gray-light-clr),
    var(--gray-font-clr),
  ),
);
`),t(),n(13,`
`),t()()()()}}function ke(i,r){if(i&1){let o=x();e(0,"div")(1,"div",36)(2,"header"),v(3,"p"),e(4,"button",37),u("click",function(){b(o);let m=f(10),s=c();return _(s.copyCode(m))}),e(5,"span",38),n(6," file_copy "),t()()(),e(7,"div",39)(8,"pre",40)(9,"code",42,1),n(11,`
<div class="accordion-grup">
  <div class="accordion-main">
    <div class="acc-head">
      <h2 class="acc-title">
        <mat-icon class="acc-title-icon">pan_tool</mat-icon>
        Introduction
      </h2>
      <mat-icon class="state-arrow">keyboard_arrow_down</mat-icon>
    </div>
    <div class="acc-body">
      <div class="acc-content">...</div>
    </div>
  </div>
</div>
`),t(),n(12,`
`),t()()()()}}function Te(i,r){if(i&1){let o=x();e(0,"div")(1,"div",36)(2,"header"),v(3,"p"),e(4,"button",37),u("click",function(){b(o);let m=f(10),s=c();return _(s.copyCode(m))}),e(5,"span",38),n(6," file_copy "),t()()(),e(7,"div",39)(8,"pre",40)(9,"code",43,2),n(11,`
import { Accordion } from '@dev.spot/css-fusion';

export class AccordionComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      this.accordion();
    });
    }
  }

  accordion() {
    const accordionElements = document.querySelectorAll('.accordion-main');
    new Accordion(accordionElements as NodeListOf<HTMLElement>);
  {
}
`),t(),n(12,`
`),t()()()()}}function Ie(i,r){if(i&1){let o=x();e(0,"div")(1,"div",36)(2,"header")(3,"p"),n(4,"Html Snippet"),t(),e(5,"button",37),u("click",function(){b(o);let m=f(11),s=c();return _(s.copyCode(m))}),e(6,"span",38),n(7," file_copy "),t()()(),e(8,"div",39)(9,"pre",40)(10,"code",42,3),n(12,`
<div class="accordion-grup">
  <div class="accordion-main">
    <div class="acc-head acc-static">
      <h2 class="acc-title">...</h2>
      <mat-icon class="state-arrow">keyboard_arrow_down</mat-icon>
    </div>
    <div class="acc-body">
      <div class="acc-content"><p>...</p></div>
    </div>
  </div>
  <div class="accordion-main">
    <div class="acc-head acc-static">
      <h2 class="acc-title">...</h2>
      <mat-icon class="state-arrow">keyboard_arrow_down</mat-icon>
    </div>
    <div class="acc-body">
      <div class="acc-content"><p>...</p></div>
    </div>
  </div>
</div>
`),t(),n(13,`
`),t()()()()}}function Me(i,r){if(i&1){let o=x();e(0,"div")(1,"div",36)(2,"header")(3,"p"),n(4,"Html Snippet"),t(),e(5,"button",37),u("click",function(){b(o);let m=f(11),s=c();return _(s.copyCode(m))}),e(6,"span",38),n(7," file_copy "),t()()(),e(8,"div",39)(9,"pre",40)(10,"code",42,4),n(12,`
<div class="accordion-grup">
  <div class="accordion-main">
    <div class="acc-head">
      <h2 class="acc-title">...</h2>
      <mat-icon class="state-arrow">keyboard_arrow_down</mat-icon>
    </div>
    <div class="acc-body">
      <div class="acc-content"><p>...</p></div>
    </div>
  </div>
  <div class="accordion-main">
    <div class="acc-head">
      <h2 class="acc-title">...</h2>
      <mat-icon class="state-arrow">keyboard_arrow_down</mat-icon>
    </div>
    <div class="acc-body">
      <div class="acc-content"><p>...</p></div>
    </div>
  </div>
</div>
`),t(),n(13,`
`),t()()()()}}function Ve(i,r){if(i&1){let o=x();e(0,"div")(1,"div",36)(2,"header")(3,"p"),n(4,"Html Snippet"),t(),e(5,"button",37),u("click",function(){b(o);let m=f(11),s=c();return _(s.copyCode(m))}),e(6,"span",38),n(7," file_copy "),t()()(),e(8,"div",39)(9,"pre",40)(10,"code",42,1),n(12,`
  <div class="accordion-grup">
    <div class="accordion-main">
      <div class="acc-head">
        <div class="title">
          <h2>...</h2>
          <mat-icon class="state-arrow">keyboard_arrow_down</mat-icon>
        </div>
      </div>
      <div class="acc-body acc-open">
        <div class="acc-content">...</div>
      </div>
    </div>
  </div>
`),t(),n(13,`
`),t()()()()}}function Be(i,r){if(i&1){let o=x();e(0,"div")(1,"div",36)(2,"header")(3,"p"),n(4,"Html Snippet"),t(),e(5,"button",37),u("click",function(){b(o);let m=f(11),s=c();return _(s.copyCode(m))}),e(6,"span",38),n(7," file_copy "),t()()(),e(8,"div",39)(9,"pre",40)(10,"code",42,5),n(12,`
<div class="accordion-grup cf-dark"> </div>
`),t(),n(13,`
`),t()()()()}}function Fe(i,r){if(i&1){let o=x();e(0,"div")(1,"div",36)(2,"header")(3,"p"),n(4,"Html Snippet"),t(),e(5,"button",37),u("click",function(){b(o);let m=f(11),s=c();return _(s.copyCode(m))}),e(6,"span",38),n(7," file_copy "),t()()(),e(8,"div",39)(9,"pre",40)(10,"code",42,6),n(12,`
<div class="accordion-grup"> </div>
`),t(),n(13,`
`),t()()()()}}function De(i,r){if(i&1){let o=x();e(0,"div")(1,"div",36)(2,"header")(3,"p"),n(4,"Html Snippet"),t(),e(5,"button",37),u("click",function(){b(o);let m=f(11),s=c();return _(s.copyCode(m))}),e(6,"span",38),n(7," file_copy "),t()()(),e(8,"div",39)(9,"pre",40)(10,"code",42,6),n(12,`
<div class="accordion-grup">
  <div class="accordion-main accordion-yellow">
</div>
<div class="accordion-grup">
  <div class="accordion-main accordion-green">
</div>
<div class="accordion-grup">
  <div class="accordion-main accordion-orange">
</div>
<div class="accordion-grup">
  <div class="accordion-main accordion-blue">
</div>
<div class="accordion-grup">
  <div class="accordion-main accordion-violet">
</div>
<div class="accordion-grup">
  <div class="accordion-main accordion-gray">
</div>
`),t(),n(13,`
`),t()()()()}}function Oe(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function He(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Oe,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,7),n(7,`
<!-- Containers -->
<div class="accordion-grup"> </div> <!-- Group all accordion -->
<div class="accordion-main"> </div> <!-- Accordion Container -->

<!-- Inbuild Colour -->
<div class="accordion-main accordion-yellow">
<div class="accordion-main accordion-green">
<div class="accordion-main accordion-orange">
<div class="accordion-main accordion-blue">
<div class="accordion-main accordion-violet">
<div class="accordion-main accordion-gray">

<!-- Header -->
<div class="acc-head"> </div> <!-- Dynamic Accordion -->
<div class="acc-head acc-static"> </div> <!-- Static Accordion -->
<h2 class="acc-title"> </h2> <!-- Accordion Title -->
<mat-icon class="acc-title-icon"> </mat-icon> <!-- Accordion Title Icon -->
<mat-icon class="state-arrow"> </mat-icon> <!-- Accordion Arrow -->

<!-- Body -->
<div class="acc-body"> </div> <!-- Accordion Body -->
<div class="acc-body acc-open"> </div> <!-- Default Expand -->
<div class="acc-content"> </div> <!-- Accordion Body Content container  -->
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Ne(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Ae(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Ne,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,8),n(7,`
<button type="button" class="btn-line btn-line">Regular Button</button>
<button type="button" class="btn-line btn-line">
  <span class="material-symbols-outlined btn-icon"> edit </span>
</button>
<button type="button" class="btn-line btn-line">
  <span class="material-symbols-outlined btn-icon"> edit </span>
  <span class="btn-txt">Edit</span>
</button>
<button type="button" class="btn-line btn-line">
  <span class="btn-txt">Create</span>
  <span class="material-symbols-outlined btn-icon"> add_circle </span>
</button>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Pe(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Le(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Pe,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,9),n(7,`
<button type="button" class="btn-fill-gray">Gray</button>
<button type="button" class="btn-fill-yellow">Yellow</button>
<button type="button" class="btn-fill-green">Green</button>
<button type="button" class="btn-fill-orange">Orange</button>
<button type="button" class="btn-fill-blue">Blue</button>
<button type="button" class="btn-fill-violet">Violet</button>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Re(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function $e(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Re,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,10),n(7,`
<button type="button" class="btn-line-yellow">Yellow</button>
<button type="button" class="btn-line-green">Green</button>
<button type="button" class="btn-line-orange">Orange</button>
<button type="button" class="btn-line-blue">Blue</button>
<button type="button" class="btn-line-violet">Violet</button>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function je(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Ge(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,je,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,11),n(7,`
<button type="button" class="btn-fill btn-round">Round Button</button>
<button type="button" class="btn-fill btn-round">
  <span class="material-symbols-outlined btn-icon"> edit </span>
</button>
<button type="button" class="btn-fill btn-round">
  <span class="material-symbols-outlined btn-icon"> edit </span>
  <span class="btn-txt">Round Button</span>
</button>
<button type="button" class="btn-line btn-round">Round Button</button>
<button type="button" class="btn-line btn-round">
  <span class="material-symbols-outlined btn-icon"> edit </span>
</button>
<button type="button" class="btn-line btn-round">
  <span class="material-symbols-outlined btn-icon"> edit </span>
  <span class="btn-txt">Round Button</span>
</button>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Ue(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function We(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Ue,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,12),n(7,`
<button type="button" class="btn-iconTxt-gray">
  <span class="material-symbols-outlined btn-icon"> edit </span>
  <span class="btn-txt">Edit</span>
</button>
<button type="button" class="btn-iconTxt-yellow">
  <span class="material-symbols-outlined btn-icon"> add_circle </span>
  <span class="btn-txt">Create</span>
</button>
<button type="button" class="btn-iconTxt-green">
  <span class="material-symbols-outlined btn-icon"> done_all </span>
  <span class="btn-txt">Added</span>
</button>
<button type="button" class="btn-iconTxt-orange">
  <span class="material-symbols-outlined btn-icon"> delete </span>
  <span class="btn-txt">Delete</span>
</button>
<button type="button" class="btn-iconTxt-blue">
  <span class="material-symbols-outlined btn-icon"> thumb_up </span>
  <span class="btn-txt">Liked</span>
</button>
<button type="button" class="btn-iconTxt-violet">
  <span class="material-symbols-outlined btn-icon"> settings </span>
  <span class="btn-txt">Settings</span>
</button>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function ze(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function qe(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,ze,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,13),n(7,`
<div class="card-box card-fixed">
  <div class="card-head">
    <div class="card-title">...</div>
  </div>
  <div class="card-body">...</div>
  <div class="card-footer">...</div>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Ye(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Je(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Ye,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,14),n(7,`
<div class="card-box">
  <div class="card-head">
    <div class="card-title">...</div>
  </div>
  <div class="card-body">...</div>
  <div class="card-footer">...</div>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Ke(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Qe(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Ke,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,15),n(7,`
<div class="card-box-yellow card-fixed">...</div>
<div class="card-box-green card-fixed">...</div>
<div class="card-box-orange card-fixed">...</div>
<div class="card-box-blue card-fixed">...</div>
<div class="card-box-violet card-fixed">...</div>
<div class="card-box-gray card-fixed">...</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Xe(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Ze(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Xe,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,16),n(7,`
<div class="card-box card-fixed card-lines">
  <div class="card-head">
    <div class="card-title">...</div>
  </div>
  <div class="card-body">...</div>
  <div class="card-footer">...</div>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function et(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function tt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,et,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,15),n(7,`
<div class="card-box-yellow card-fixed card-lines-yellow">...</div>
<div class="card-box-green card-fixed card-lines-green">...</div>
<div class="card-box-orange card-fixed card-lines-orange">...</div>
<div class="card-box-blue card-fixed card-lines-blue">...</div>
<div class="card-box-violet card-fixed card-lines-violet">...</div>
<div class="card-box-gray card-fixed card-lines-gray">...</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function nt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function it(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,nt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,15),n(7,`
<div class="chart-cards">
  <!-- Yellow -->
  <div class="card-box-yellow card-fixed">
    <div class="card-head">
      <div class="card-title">...</div>
    </div>
    <div class="card-body">
      <p class="chart-num">...</p>
    </div>
  </div>

  <!-- Green -->
  <div class="card-box-green card-fixed">
    <div class="card-head">
      <div class="card-title">...</div>
    </div>
    <div class="card-body">
      <p class="chart-num">...</p>
    </div>
  </div>

  <!-- Orange -->
  <div class="card-box-orange card-fixed">
    <div class="card-head">
      <div class="card-title">...</div>
    </div>
    <div class="card-body">
      <p class="chart-num">...</p>
    </div>
  </div>

  <!-- Blue -->
  <div class="card-box-blue card-fixed">
    <div class="card-head">
      <div class="card-title">...</div>
    </div>
    <div class="card-body">
      <p class="chart-num">...</p>
    </div>
  </div>

  <!-- Violet -->
  <div class="card-box-violet card-fixed">
    <div class="card-head">
      <div class="card-title">...</div>
    </div>
    <div class="card-body">
      <p class="chart-num">...</p>
    </div>
  </div>

  <!-- Gray -->
  <div class="card-box-gray card-fixed">
    <div class="card-head">
      <div class="card-title">...</div>
    </div>
    <div class="card-body">
      <p class="chart-num">...</p>
    </div>
  </div>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function ot(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function at(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,ot,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,17),n(7,`
<div class="dropdown-box" id="dropdown01" cssFusionDropdown>
  <div class="dd-menu">
    <p class="dd-name">...</p>
    <span class="material-symbols-outlined"> arrow_drop_down </span>
  </div>
  <ul class="dd-list">
    <li class="dd-option">...</li>
  </ul>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function rt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function lt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,rt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,18),n(7,`
<nav class="navbar-box" cssFusionNav>
  <div class="navbar-set01">
    <h3>
      <span class="material-symbols-outlined nav-logo"> android </span>
      <span class="nav-txt">Company Logo</span>
    </h3>
    <span
      class="material-symbols-outlined nav-icon-trigger"
      id="navLeft-tigger"
    >
      keyboard_double_arrow_left
    </span>
  </div>
  <div class="navbar-set02">
    <small class="nav-menu">Home</small>
    <p class="navbar-link navbar-active">
      <span class="material-symbols-outlined nav-icon">dashboard</span>
      <span class="nav-txt">Dashboard</span>
    </p>
     <p class="navbar-link navbar-active">
      <span class="material-symbols-outlined nav-icon">add_circle</span>
      <span class="nav-txt">...</span>
    </p>
  </div>
  <div class="navbar-set03">
    <div class="user">
      <span class="material-symbols-outlined user-img">account_circle</span>
      <div class="user-info nav-txt">
        <h3>User Name</h3>
        <p>Ui/Ux Developer</p>
      </div>
    </div>
    <span class="material-symbols-outlined more-icon"> steppers </span>
  </div>
</nav>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function dt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function ct(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,dt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,19),n(7,`
<header class="menubar-box">
  <div class="menubar-set-01">
    <img class="menubar-logo" src="./logo.svg" />
    <p>Menu</p>
  </div>
  <div class="menubar-set-02">
    <div class="menubar-link-center">
      <p class="menubar-link active-link">Css</p>
      <p class="menubar-link">Scss</p>
      ...
    </div>
  </div>
  <div class="menubar-set-03">
    <form>
      <select>
        <option value="en">En</option>
        <option value="tn">Tn</option>
      </select>
    </form>
  </div>
</header>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function mt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function st(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,mt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,20),n(7,`
<header class="menubar-box">
  <div class="menubar-set-01">
    <img class="menubar-logo" src="./logo.svg" />
    <p>Menu</p>
  </div>
  <div class="menubar-set-02">
    <div class="menubar-link-left">
      <p class="menubar-link active-link">Css</p>
      <p class="menubar-link">Scss</p>
      ...
    </div>
  </div>
  <div class="menubar-set-03">
    <form>
      <select>
        <option value="en">En</option>
        <option value="tn">Tn</option>
      </select>
    </form>
  </div>
</header>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function pt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function vt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,pt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,21),n(7,`
<header class="menubar-box">
  <div class="menubar-set-01">
    <img class="menubar-logo" src="./logo.svg" />
    <p>Menu</p>
  </div>
  <div class="menubar-set-02">
    <div class="menubar-link-right">
      <p class="menubar-link active-link">Css</p>
      <p class="menubar-link">Scss</p>
      ...
    </div>
  </div>
  <div class="menubar-set-03">
    <form>
      <select>
        <option value="en">En</option>
        <option value="tn">Tn</option>
      </select>
    </form>
  </div>
</header>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function ut(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function bt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,ut,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,21),n(7,`
<header class="menubar-resizable">
  <div class="menubar-set-01">
    <span class="material-symbols-outlined" id="menubar-thumb"> menu </span>
    <p>Menu</p>
  </div>
  <div class="menubar-set-02">
    <span class="material-symbols-outlined btn-icon"> logout </span>
    <div class="menubar-profile-box">
      <span class="material-symbols-outlined btn-icon"> account_circle </span>
      <div class="profile-details">
        <p class="profile-name">Peter</p>
        <small class="profile-role">Senior Developer</small>
      </div>
    </div>
  </div>
</header>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function _t(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function xt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,_t,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,22),n(7,`
<div class="table-box tbl-bdr-btm">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function ft(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Ct(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,ft,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,23),n(7,`
<div class="table-btns">
  <button type="button" class="page-btn">
    <span class="material-symbols-outlined"> keyboard_double_arrow_left </span>
  </button>
  <button type="button" class="page-btn">
    <span class="material-symbols-outlined"> chevron_left </span>
  </button>
  <p class="page-count"><span class="active-page">01</span> of 50</p>
  <button type="button" class="page-btn">
    <span class="material-symbols-outlined"> chevron_right </span>
  </button>
  <button type="button" class="page-btn">
    <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
  </button>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function ht(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function St(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,ht,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,24),n(7,`
<div class="table-box tbl-bdr-btm">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Et(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function gt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Et,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,25),n(7,`
<div class="table-box tbl-bdr-rect">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function yt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function wt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,yt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,26),n(7,`
<div class="table-box-blue tbl-bdr-btm-blue">
  <table>...</table>
</div>

<div class="table-box-yellow tbl-bdr-btm-yellow">
  <table>...</table>
</div>

<div class="table-box-green tbl-bdr-btm-green">
  <table>...</table>
</div>

<div class="table-box-orange tbl-bdr-btm-orange">
  <table>...</table>
</div>

<div class="table-box-violet tbl-bdr-btm-violet">
  <table>...</table>
</div>

<div class="table-box-gray tbl-bdr-btm-gray">
  <table>...</table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function kt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Tt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,kt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,27),n(7,`
<div class="table-box tbl-responsive tbl-bdr-btm">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function It(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Mt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,It,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,28),n(7,`
<div class="table-box table-box tbl-bdr-btm tbl-line-hover">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Vt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Bt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Vt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,29),n(7,`
<div class="table-box tbl-bdr-rect tbl-row-hover">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Ft(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Dt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Ft,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,30),n(7,`
<div class="table-box tbl-row-even">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Ot(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Ht(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Ot,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,31),n(7,`
<div class="table-box tbl-clm-even">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Nt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function At(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Nt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,32),n(7,`
<div class="table-box tbl-row-odd">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Pt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Lt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Pt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,33),n(7,`
<div class="table-box tbl-clm-odd">
  <table>
    <thead>
      <tr>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>...</td>
      </tr>
    </tbody>
  </table>
</div>
`),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0)}}function Rt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function $t(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,Rt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,33),n(7),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0),a(5),ee(`
<div class="table-box tbl-responsive tbl-bdr-btm">
  <table>
    <thead>
      <tr>
        <th class="tbl-col-xsm">SI.No</th>
        <th>Batch No</th>
        <th>Brand</th>
        <th
          class="tbl-col-sm tbl-sort"
          [tableData]="tableLg"
          [columnIndex]="3"
          (sortChanged)="onSortChanged($event)"
          (sortStatus)="sortStatus = $event"
          cssFusionTable
        >
          <p>
            Modal
            <b>(`,o.flowerOpen," sortStatus ",o.flowerClose,`)</b>
            <span class="material-symbols-outlined"> swap_vert </span>
          </p>
        </th>
        <th>Service Date</th>
        <th class="tbl-col-md">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let tbody of tableLg">
        <td *ngFor="let tr of tbody.tr">`,o.flowerOpen," tr ",o.flowerClose,`</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-btns">
  <button type="button" class="page-btn" (click)="clearSort()">
    <span class="material-symbols-outlined"> restart_alt </span>
  </button>
  <button type="button" class="page-btn">
    <span class="material-symbols-outlined"> keyboard_double_arrow_left </span>
  </button>
  <button type="button" class="page-btn">
    <span class="material-symbols-outlined"> chevron_left </span>
  </button>
  <p class="page-count"><span class="active-page">01</span> of 50</p>
  <button type="button" class="page-btn">
    <span class="material-symbols-outlined"> chevron_right </span>
  </button>
  <button type="button" class="page-btn">
    <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
  </button>
</div>
`)}}function jt(i,r){if(i&1){let o=x();e(0,"header")(1,"p"),n(2,"Html Snippet"),t(),e(3,"button",37),u("click",function(){b(o),c();let m=f(6),s=c();return _(s.copyCode(m))}),e(4,"span",38),n(5," file_copy "),t()()()}}function Gt(i,r){if(i&1&&(e(0,"div")(1,"div",36),p(2,jt,6,0,"header",35),e(3,"div",39)(4,"pre",40)(5,"code",42,34),n(7),t(),n(8,`
`),t()()()()),i&2){let o=c();a(2),d("ngIf",o.compCodeHead===!0),a(5),ee(`
<div class="tabs-box tab-bdr" cssFusionTabs>
  <div class="tab-list-group tab-list-center">
    <p class="scroll-arrow tab-left">
      <mat-icon class="btn-icon">keyboard_arrow_left</mat-icon>
    </p>
    <nav class="tab-list">
      <p class="tab-name tab-01 active-tab">Home</p>
      <p class="tab-name tab-02">Company</p>
      <p class="tab-name tab-03">Service</p>
    </nav>
    <p class="scroll-arrow tab-right">
      <mat-icon class="btn-icon">keyboard_arrow_right</mat-icon>
    </p>
  </div>
  <section class="tab-body-set">
    <ng-container *ngFor="let data of tabContent">
      <div [class]="data.class">
        <h3 class="tab-title">`,o.flowerOpen," data.tabTitle ",o.flowerClose,`</h3>
        <p class="tab-content">`,o.flowerOpen," data.tabContent ",o.flowerClose,`</p>
      </div>
    </ng-container>
  </section>
</div>
`)}}var E=class i{constructor(r){this.snackBar=r}showCode="";compCodeHead=!0;showLang="";flowerOpen="{{";flowerClose="}}";ngAfterViewChecked(){te.highlightAll()}copyCode(r){let o=r.innerText.trim();navigator.clipboard.writeText(o).then(()=>this.snackBar.open("Code copied to clipboard!","Close",{duration:3e3,verticalPosition:"bottom",horizontalPosition:"right"}),l=>this.snackBar.open("Failed to copy code: "+l,"Close",{duration:3e3,verticalPosition:"bottom",horizontalPosition:"right"}))}switchLang(r){this.showLang=r,te.highlightAll()}static \u0275fac=function(o){return new(o||i)(g(be))};static \u0275cmp=S({type:i,selectors:[["app-comps-code"]],inputs:{showCode:"showCode",compCodeHead:"compCodeHead"},standalone:!1,decls:41,vars:41,consts:[["scssVariables",""],["accordion01",""],["accordion02",""],["acc_static",""],["acc_dynamic",""],["acc_dark",""],["acc_light",""],["accStructure",""],["btn01",""],["btn02",""],["btn03",""],["btn04",""],["btn05",""],["card01",""],["card02",""],["card03",""],["card04",""],["dropdown01",""],["navbar01",""],["menubar01",""],["menubar02",""],["menubar03",""],["table01",""],["table02",""],["table03",""],["table04",""],["table05",""],["table06",""],["table07",""],["table08",""],["table09",""],["table10",""],["table11",""],["table12",""],["tabs01",""],[4,"ngIf"],[1,"code-box"],["matTooltip","copy",1,"code-copy",3,"click"],[1,"material-symbols-outlined"],[1,"code-box-container"],[1,"line-numbers"],[1,"language-css"],[1,"language-html"],[1,"language-javascript"]],template:function(o,l){o&1&&p(0,we,14,0,"div",35)(1,ke,13,0,"div",35)(2,Te,13,0,"div",35)(3,Ie,14,0,"div",35)(4,Me,14,0,"div",35)(5,Ve,14,0,"div",35)(6,Be,14,0,"div",35)(7,Fe,14,0,"div",35)(8,De,14,0,"div",35)(9,He,9,1,"div",35)(10,Ae,9,1,"div",35)(11,Le,9,1,"div",35)(12,$e,9,1,"div",35)(13,Ge,9,1,"div",35)(14,We,9,1,"div",35)(15,qe,9,1,"div",35)(16,Je,9,1,"div",35)(17,Qe,9,1,"div",35)(18,Ze,9,1,"div",35)(19,tt,9,1,"div",35)(20,it,9,1,"div",35)(21,at,9,1,"div",35)(22,lt,9,1,"div",35)(23,ct,9,1,"div",35)(24,st,9,1,"div",35)(25,vt,9,1,"div",35)(26,bt,9,1,"div",35)(27,xt,9,1,"div",35)(28,Ct,9,1,"div",35)(29,St,9,1,"div",35)(30,gt,9,1,"div",35)(31,wt,9,1,"div",35)(32,Tt,9,1,"div",35)(33,Mt,9,1,"div",35)(34,Bt,9,1,"div",35)(35,Dt,9,1,"div",35)(36,Ht,9,1,"div",35)(37,At,9,1,"div",35)(38,Lt,9,1,"div",35)(39,$t,9,5,"div",35)(40,Gt,9,5,"div",35),o&2&&(d("ngIf",l.showCode==="scss-variables"),a(),d("ngIf",l.showCode==="accordion-01"),a(),d("ngIf",l.showCode==="accordion-02"),a(),d("ngIf",l.showCode==="acc-static"),a(),d("ngIf",l.showCode==="acc-dynamic"),a(),d("ngIf",l.showCode==="acc-open"),a(),d("ngIf",l.showCode==="acc-dark"),a(),d("ngIf",l.showCode==="acc-light"),a(),d("ngIf",l.showCode==="acc-buildin"),a(),d("ngIf",l.showCode==="acc-structure"),a(),d("ngIf",l.showCode==="btn-01"),a(),d("ngIf",l.showCode==="btn-02"),a(),d("ngIf",l.showCode==="btn-03"),a(),d("ngIf",l.showCode==="btn-04"),a(),d("ngIf",l.showCode==="btn-05"),a(),d("ngIf",l.showCode==="card-01"),a(),d("ngIf",l.showCode==="card-02"),a(),d("ngIf",l.showCode==="card-03"),a(),d("ngIf",l.showCode==="card-04"),a(),d("ngIf",l.showCode==="card-05"),a(),d("ngIf",l.showCode==="card-06"),a(),d("ngIf",l.showCode==="dropdown-01"),a(),d("ngIf",l.showCode==="navbar-01"),a(),d("ngIf",l.showCode==="menubar-01"),a(),d("ngIf",l.showCode==="menubar-02"),a(),d("ngIf",l.showCode==="menubar-03"),a(),d("ngIf",l.showCode==="menubar-04"),a(),d("ngIf",l.showCode==="table-01"),a(),d("ngIf",l.showCode==="table-02"),a(),d("ngIf",l.showCode==="table-03"),a(),d("ngIf",l.showCode==="table-04"),a(),d("ngIf",l.showCode==="table-05"),a(),d("ngIf",l.showCode==="table-06"),a(),d("ngIf",l.showCode==="table-07"),a(),d("ngIf",l.showCode==="table-08"),a(),d("ngIf",l.showCode==="table-09"),a(),d("ngIf",l.showCode==="table-10"),a(),d("ngIf",l.showCode==="table-11"),a(),d("ngIf",l.showCode==="table-12"),a(),d("ngIf",l.showCode==="table-13"),a(),d("ngIf",l.showCode==="tabs-01"))},dependencies:[L],styles:["code[_ngcontent-%COMP%]{font-size:1.2rem}"]})};function Wt(i,r){if(i&1&&(y(0),e(1,"div",10)(2,"div",25)(3,"h2",12),n(4),t(),e(5,"mat-icon",13),n(6,"keyboard_arrow_down"),t()(),e(7,"div",26)(8,"div",15)(9,"p"),n(10),t()()()(),w()),i&2){let o=r.$implicit;a(4),C(o.title),a(6),C(o.content)}}function zt(i,r){if(i&1&&(y(0),e(1,"div",10)(2,"div",25)(3,"h2",12),n(4),t(),e(5,"mat-icon",13),n(6,"keyboard_arrow_down"),t()(),e(7,"div",26)(8,"div",15)(9,"p"),n(10),t()()()(),w()),i&2){let o=r.$implicit;a(4),C(o.title),a(6),C(o.content)}}function qt(i,r){if(i&1&&(y(0),e(1,"div",10)(2,"div",11)(3,"h2",12),n(4),t(),e(5,"mat-icon",13),n(6,"keyboard_arrow_down"),t()(),e(7,"div",26)(8,"div",15)(9,"p"),n(10),t()()()(),w()),i&2){let o=r.$implicit;a(4),C(o.title),a(6),C(o.content)}}function Yt(i,r){if(i&1&&(y(0),e(1,"div",10)(2,"div",25)(3,"h2",12),n(4),t(),e(5,"mat-icon",13),n(6,"keyboard_arrow_down"),t()(),e(7,"div",26)(8,"div",15)(9,"p"),n(10),t()()()(),w()),i&2){let o=r.$implicit;a(4),C(o.title),a(6),C(o.content)}}function Jt(i,r){if(i&1&&(y(0),e(1,"div",10)(2,"div",11)(3,"h2",12),n(4),t(),e(5,"mat-icon",13),n(6,"keyboard_arrow_down"),t()(),e(7,"div",26)(8,"div",15)(9,"p"),n(10),t()()()(),w()),i&2){let o=r.$implicit;a(4),C(o.title),a(6),C(o.content)}}function Kt(i,r){if(i&1&&(y(0),e(1,"div",28)(2,"div",11)(3,"h2",12),n(4),t(),e(5,"mat-icon",13),n(6,"keyboard_arrow_down"),t()(),e(7,"div",26)(8,"div",15)(9,"p"),n(10),t()()()(),w()),i&2){let o=c().$implicit;a(),d("ngClass","accordion-main accordion-"+o.class),a(3),C(o.title),a(6),C(o.content)}}function Qt(i,r){if(i&1&&(y(0),p(1,Kt,11,3,"ng-container",27),w()),i&2){let o=r.$implicit,l=c();a(),d("ngIf",l.selectedClr===o.class)}}var j=class i{constructor(r){this.themeService=r}selectedClr="green";accContent=[{class:"",title:"Introduction",content:"Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content."},{class:"",title:"Terms and Conditions",content:"Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content."}];accContentXl=[{class:"yellow",title:"Introduction",content:"Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content."},{class:"green",title:"Terms and Conditions",content:"Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content."},{class:"orange",title:"Introduction",content:"Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content."},{class:"blue",title:"Terms and Conditions",content:"Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content."},{class:"violet",title:"Introduction",content:"Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content."},{class:"gray",title:"Terms and Conditions",content:"Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content."}];ngOnInit(){}selectClr(r){this.selectedClr=r}static \u0275fac=function(o){return new(o||i)(g(k))};static \u0275cmp=S({type:i,selectors:[["app-accordion"]],standalone:!1,decls:108,vars:14,consts:[["id","app-components"],[1,"app-intro-card"],[1,"card-header"],[1,"card-body"],[1,"accordion-grup"],[4,"ngFor","ngForOf"],[1,"app-components-box"],[1,"app-card"],[1,"card-code"],[3,"showCode"],["cssFusionAccordion","",1,"accordion-main"],[1,"acc-head"],[1,"acc-title"],[1,"state-arrow"],[1,"acc-body","acc-open"],[1,"acc-content"],[1,"accordion-grup","cf-dark"],[1,"card-header-box"],[1,"clr-blocks","clr-green",3,"click"],[1,"clr-blocks","clr-yellow",3,"click"],[1,"clr-blocks","clr-orange",3,"click"],[1,"clr-blocks","clr-blue",3,"click"],[1,"clr-blocks","clr-violet",3,"click"],[1,"clr-blocks","clr-gray",3,"click"],[3,"showCode","compCodeHead"],[1,"acc-head","acc-static"],[1,"acc-body"],[4,"ngIf"],["cssFusionAccordion","",3,"ngClass"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Toggle with Ease"),t(),e(5,"p"),n(6,"Quick, clean, and crafted \u2014 just plug 'em in!"),t()(),e(7,"div",3)(8,"div",4),p(9,Wt,11,2,"ng-container",5),t()()(),e(10,"div",6)(11,"div",7)(12,"div",2)(13,"div")(14,"h3"),n(15,"Synchronized Toggle"),t(),e(16,"p"),n(17,"Every panel dances together \u2014 open one, open all."),t()()(),e(18,"div",3)(19,"div",4),p(20,zt,11,2,"ng-container",5),t()(),e(21,"div",8),v(22,"app-comps-code",9),t()(),e(23,"div",7)(24,"div",2)(25,"div")(26,"h3"),n(27,"Solo Act"),t(),e(28,"p"),n(29,"Let one shine at a time \u2014 closing others with style."),t()()(),e(30,"div",3)(31,"div",4),p(32,qt,11,2,"ng-container",5),t()(),e(33,"div",8),v(34,"app-comps-code",9),t()(),e(35,"div",7)(36,"div",2)(37,"div")(38,"h3"),n(39,"Welcome Open"),t(),e(40,"p"),n(41,"The first one's already talking \u2014 dive right in."),t()()(),e(42,"div",3)(43,"div",4)(44,"div",10)(45,"div",11)(46,"h2",12),n(47,"Introduction"),t(),e(48,"mat-icon",13),n(49,"keyboard_arrow_down"),t()(),e(50,"div",14)(51,"div",15)(52,"p"),n(53," Welcome to the Accordion UI! This component allows you to display sections of content that can be expanded and collapsed. Use the arrow icon or click the headers to toggle between showing and hiding content. "),t()()()()()(),e(54,"div",8),v(55,"app-comps-code",9),t()(),e(56,"div",7)(57,"div",2)(58,"div")(59,"h3"),n(60,"Dark & Sleek"),t(),e(61,"p"),n(62," For those who love the night \u2014 clean, crisp, and easy on the eyes. "),t()()(),e(63,"div",3)(64,"div",16),p(65,Yt,11,2,"ng-container",5),t()(),e(66,"div",8),v(67,"app-comps-code",9),t()(),e(68,"div",7)(69,"div",2)(70,"div")(71,"h3"),n(72,"Bright & Clear"),t(),e(73,"p"),n(74,"Keep it fresh with a clean, classic light theme."),t()()(),e(75,"div",3)(76,"div",4),p(77,Jt,11,2,"ng-container",5),t()(),e(78,"div",8),v(79,"app-comps-code",9),t()(),e(80,"div",7)(81,"div",2)(82,"div")(83,"h3"),n(84,"Switch It Up"),t(),e(85,"p"),n(86,"Play with built-in color vibes \u2014 just one click away."),t()(),e(87,"div",17)(88,"span",18),u("click",function(){return l.selectClr("green")}),t(),e(89,"span",19),u("click",function(){return l.selectClr("yellow")}),t(),e(90,"span",20),u("click",function(){return l.selectClr("orange")}),t(),e(91,"span",21),u("click",function(){return l.selectClr("blue")}),t(),e(92,"span",22),u("click",function(){return l.selectClr("violet")}),t(),e(93,"span",23),u("click",function(){return l.selectClr("gray")}),t()()(),e(94,"div",3)(95,"div",4),p(96,Qt,2,1,"ng-container",5),t()(),e(97,"div",8),v(98,"app-comps-code",9),t()(),e(99,"div",7)(100,"div",2)(101,"div")(102,"h3"),n(103,"Anatomy of Accordion"),t(),e(104,"p"),n(105,"Peek under the hood \u2014 see how it's all wired together."),t()()(),e(106,"div",3),v(107,"app-comps-code",24),t()()()()),o&2&&(a(9),d("ngForOf",l.accContent),a(11),d("ngForOf",l.accContent),a(2),d("showCode","acc-static"),a(10),d("ngForOf",l.accContent),a(2),d("showCode","acc-dynamic"),a(21),d("showCode","acc-open"),a(10),d("ngForOf",l.accContent),a(2),d("showCode","acc-dark"),a(10),d("ngForOf",l.accContent),a(2),d("showCode","acc-light"),a(17),d("ngForOf",l.accContentXl),a(2),d("showCode","acc-buildin"),a(9),d("showCode","acc-structure")("compCodeHead",!1))},dependencies:[P,M,L,R,E],encapsulation:2})};var G=class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=S({type:i,selectors:[["app-button"]],standalone:!1,decls:152,vars:5,consts:[["id","app-components"],[1,"app-intro-card"],[1,"card-header"],[1,"card-body"],[1,"card-block-intro"],["type","button",1,"btn-fill"],[1,"material-symbols-outlined","btn-icon"],[1,"btn-txt"],[1,"app-components-box"],[1,"app-card"],[1,"card-block"],["type","button",1,"btn-line","btn-line"],[1,"card-code"],[3,"showCode"],["type","button",1,"btn-fill-gray"],["type","button",1,"btn-fill-yellow"],["type","button",1,"btn-fill-green"],["type","button",1,"btn-fill-orange"],["type","button",1,"btn-fill-blue"],["type","button",1,"btn-fill-violet"],["type","button",1,"btn-line-yellow"],["type","button",1,"btn-line-green"],["type","button",1,"btn-line-orange"],["type","button",1,"btn-line-blue"],["type","button",1,"btn-line-violet"],[1,"app-card","card-expand"],["type","button",1,"btn-fill","btn-round"],["type","button",1,"btn-line","btn-round"],["type","button",1,"btn-iconTxt-gray"],["type","button",1,"btn-iconTxt-yellow"],["type","button",1,"btn-iconTxt-green"],["type","button",1,"btn-iconTxt-orange"],["type","button",1,"btn-iconTxt-blue"],["type","button",1,"btn-iconTxt-violet"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Clicks that Count"),t(),e(5,"p"),n(6," From subtle taps to bold actions, buttons that blend style with purpose. "),t()(),e(7,"div",3)(8,"div",4)(9,"button",5),n(10,"Regular Button"),t(),e(11,"button",5)(12,"span",6),n(13," edit "),t()(),e(14,"button",5)(15,"span",6),n(16," edit "),t(),e(17,"span",7),n(18,"Edit"),t()(),e(19,"button",5)(20,"span",7),n(21,"Create"),t(),e(22,"span",6),n(23," add_circle "),t()()()()(),e(24,"section",8)(25,"div",9)(26,"div",2)(27,"h3"),n(28,"Outline"),t()(),e(29,"div",3)(30,"div",10)(31,"button",11),n(32," Regular Button "),t(),e(33,"button",11)(34,"span",6),n(35," edit "),t()(),e(36,"button",11)(37,"span",6),n(38," edit "),t(),e(39,"span",7),n(40,"Edit"),t()(),e(41,"button",11)(42,"span",7),n(43,"Create"),t(),e(44,"span",6),n(45," add_circle "),t()()(),e(46,"div",12),v(47,"app-comps-code",13),t()()(),e(48,"div",9)(49,"div",2)(50,"h3"),n(51,"In-Build Colours"),t()(),e(52,"div",3)(53,"div",10)(54,"button",14),n(55,"Gray"),t(),e(56,"button",15),n(57,"Yellow"),t(),e(58,"button",16),n(59,"Green"),t(),e(60,"button",17),n(61,"Orange"),t(),e(62,"button",18),n(63,"Blue"),t(),e(64,"button",19),n(65,"Violet"),t()(),e(66,"div",12),v(67,"app-comps-code",13),t()()(),e(68,"div",9)(69,"div",2)(70,"h3"),n(71,"Outline In-Build Colours"),t()(),e(72,"div",3)(73,"div",10)(74,"button",20),n(75,"Yellow"),t(),e(76,"button",21),n(77,"Green"),t(),e(78,"button",22),n(79,"Orange"),t(),e(80,"button",23),n(81,"Blue"),t(),e(82,"button",24),n(83,"Violet"),t()(),e(84,"div",12),v(85,"app-comps-code",13),t()()(),e(86,"div",25)(87,"div",2)(88,"h3"),n(89,"Button Round"),t()(),e(90,"div",3)(91,"div",10)(92,"button",26),n(93,"Round Button"),t(),e(94,"button",26)(95,"span",6),n(96," edit "),t()(),e(97,"button",26)(98,"span",6),n(99," edit "),t(),e(100,"span",7),n(101,"Round Button"),t()(),e(102,"button",27),n(103,"Round Button"),t(),e(104,"button",27)(105,"span",6),n(106," edit "),t()(),e(107,"button",27)(108,"span",6),n(109," edit "),t(),e(110,"span",7),n(111,"Round Button"),t()()(),e(112,"div",12),v(113,"app-comps-code",13),t()()(),e(114,"div",25)(115,"div",2)(116,"h3"),n(117,"Icon with Text"),t()(),e(118,"div",3)(119,"div",10)(120,"button",28)(121,"span",6),n(122," edit "),t(),e(123,"span",7),n(124,"Edit"),t()(),e(125,"button",29)(126,"span",6),n(127," add_circle "),t(),e(128,"span",7),n(129,"Create"),t()(),e(130,"button",30)(131,"span",6),n(132," done_all "),t(),e(133,"span",7),n(134,"Added"),t()(),e(135,"button",31)(136,"span",6),n(137," delete "),t(),e(138,"span",7),n(139,"Delete"),t()(),e(140,"button",32)(141,"span",6),n(142," thumb_up "),t(),e(143,"span",7),n(144,"Liked"),t()(),e(145,"button",33)(146,"span",6),n(147," settings "),t(),e(148,"span",7),n(149,"Settings"),t()()(),e(150,"div",12),v(151,"app-comps-code",13),t()()()()()),o&2&&(a(47),d("showCode","btn-01"),a(20),d("showCode","btn-02"),a(18),d("showCode","btn-03"),a(28),d("showCode","btn-04"),a(38),d("showCode","btn-05"))},dependencies:[E],styles:[".card-block-intro[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:1.4rem}.card-block[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;gap:1.4rem}"]})};function Xt(i,r){if(i&1&&(y(0),e(1,"div")(2,"div",8)(3,"div",9)(4,"h3"),n(5),t(),e(6,"small"),n(7),t()()(),e(8,"div",3)(9,"p"),n(10),t()(),e(11,"div",22)(12,"button",23)(13,"span",13),n(14," favorite "),t()(),e(15,"button",23)(16,"span",13),n(17," shopping_cart "),t(),e(18,"span",12),n(19,"Cart"),t()()()(),w()),i&2){let o=r.$implicit;a(),h("card-box-"+o.colour+" card-fixed"),a(4),C(o.title),a(2),C(o.tagline),a(3),C(o.features),a(2),h("btn-fill-"+o.colour),a(3),h("btn-fill-"+o.colour)}}function Zt(i,r){if(i&1&&(y(0),e(1,"div")(2,"div",8)(3,"div",9)(4,"h3"),n(5,"Welcome to CardBox"),t(),e(6,"small"),n(7,"Fixed Width"),t()()(),e(8,"div",3)(9,"p"),n(10," CardBox is a versatile card component for your frontend projects. It is designed to be customizable and easy to use. "),t(),e(11,"ul")(12,"li"),n(13,"Responsive design"),t(),e(14,"li"),n(15,"Customizable with themes"),t(),e(16,"li"),n(17,"Lightweight and efficient"),t()()(),e(18,"div",10)(19,"button",23)(20,"span",12),n(21,"Get Start"),t(),e(22,"span",13),n(23," flag "),t()()()(),w()),i&2){let o=r.$implicit;a(),h("card-box-"+o+" card-fixed card-lines-"+o),a(18),h("btn-fill-"+o)}}function en(i,r){if(i&1&&(y(0),e(1,"div")(2,"div",8)(3,"div",9)(4,"small"),n(5,"Fixed Width"),t()()(),e(6,"div",3)(7,"p",24),n(8,"24"),t()()(),w()),i&2){let o=r.$implicit;a(),h("card-box-"+o+" card-fixed")}}var U=class i{constructor(r){this.themeService=r}themeClr="";colours=["yellow","green","orange","blue","violet","gray"];coloursData=[{colour:"yellow",title:"Basic Plan",tagline:"Ideal for individuals",features:"Access basic features, 5GB storage, and email support for individuals."},{colour:"green",title:"Pro Plan",tagline:"Perfect for professionals",features:"Advanced features, 50GB storage, and priority support for professionals."},{colour:"orange",title:"Standard Plan",tagline:"Great for small teams",features:"Collaborate with a small team with 100GB storage and team tools."},{colour:"blue",title:"Premium Plan",tagline:"For growing businesses",features:"Enjoy all premium features, unlimited storage, and 24/7 support."},{colour:"violet",title:"Business Plan",tagline:"Tailored for enterprises",features:"Scalable solutions for enterprises with customized features and VIP support."},{colour:"gray",title:"Enterprise Plan",tagline:"For large-scale solutions",features:"Tailored for large organizations with multi-level management tools."}];static \u0275fac=function(o){return new(o||i)(g(k))};static \u0275cmp=S({type:i,selectors:[["app-card"]],standalone:!1,decls:138,vars:9,consts:[["id","app-components"],[1,"app-intro-card"],[1,"card-header"],[1,"card-body"],[1,"app-components-box"],[1,"comp-title"],[1,"grid-auto-adjust"],[1,"card-box","card-fixed"],[1,"card-head"],[1,"card-title"],[1,"card-footer"],["type","button",1,"btn-fill-green"],[1,"btn-txt"],[1,"material-symbols-outlined","btn-icon"],["type","button",1,"btn-fill-violet"],[1,"card-code"],[3,"showCode"],[1,"card-box"],[1,"comp-title","margin-t"],[4,"ngFor","ngForOf"],[1,"card-box","card-fixed","card-lines"],[1,"chart-cards"],[1,"card-footer","card-footer-end"],["type","button"],[1,"chart-num"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Wrapped with Elegance"),t(),e(5,"p"),n(6," Display info in neat little packages \u2014 flexible, beautiful, and content-ready. "),t()(),v(7,"div",3),t(),e(8,"div",4)(9,"div")(10,"h2",5),n(11,"Fixed width card"),t(),e(12,"div",6)(13,"div",7)(14,"div",8)(15,"div",9)(16,"h3"),n(17,"Welcome to CardBox"),t(),e(18,"small"),n(19,"Full Width"),t()()(),e(20,"div",3)(21,"p"),n(22," CardBox is a versatile card component for your frontend projects. It is designed to be customizable and easy to use. You can use it for displaying information, images, and actions in a structured way. "),t(),e(23,"ul")(24,"li"),n(25,"Responsive design"),t(),e(26,"li"),n(27,"Customizable with themes"),t(),e(28,"li"),n(29,"Lightweight and efficient"),t()()(),e(30,"div",10)(31,"button",11)(32,"span",12),n(33,"Get Start"),t(),e(34,"span",13),n(35," flag "),t()(),e(36,"button",14)(37,"span",12),n(38,"Learn More"),t(),e(39,"span",13),n(40," keyboard_double_arrow_right "),t()()()()(),e(41,"div",15),v(42,"app-comps-code",16),t()(),e(43,"div")(44,"h2",5),n(45,"Responsive card"),t(),e(46,"div",17)(47,"div",8)(48,"div",9)(49,"h3"),n(50,"Welcome to CardBox"),t(),e(51,"small"),n(52,"Fixed Width"),t()()(),e(53,"div",3)(54,"p"),n(55," CardBox is a versatile card component for your frontend projects. It is designed to be customizable and easy to use. You can use it for displaying information, images, and actions in a structured way. "),t(),e(56,"ul")(57,"li"),n(58,"Responsive design"),t(),e(59,"li"),n(60,"Customizable with themes"),t(),e(61,"li"),n(62,"Lightweight and efficient"),t(),e(63,"li"),n(64,"Full width and Fixed with classes"),t(),e(65,"li"),n(66,"Build-In Colours"),t(),e(67,"li"),n(68,"Chart Cards"),t()()(),e(69,"div",10)(70,"button",11)(71,"span",12),n(72,"Get Start"),t(),e(73,"span",13),n(74," flag "),t()(),e(75,"button",14)(76,"span",12),n(77,"Learn More"),t(),e(78,"span",13),n(79," keyboard_double_arrow_right "),t()()()(),e(80,"div",15),v(81,"app-comps-code",16),t()(),e(82,"div")(83,"h2",18),n(84,"Build-In Colours"),t(),e(85,"div",6),p(86,Xt,20,9,"ng-container",19),t(),e(87,"div",15),v(88,"app-comps-code",16),t()(),e(89,"div")(90,"h2",18),n(91,"Bordered Card Plain"),t(),e(92,"div",6)(93,"div",20)(94,"div",8)(95,"div",9)(96,"h3"),n(97,"Welcome to CardBox"),t(),e(98,"small"),n(99,"Fixed Width"),t()()(),e(100,"div",3)(101,"p"),n(102," CardBox is a versatile card component for your frontend projects. It is designed to be customizable and easy to use. "),t(),e(103,"ul")(104,"li"),n(105,"Responsive design"),t(),e(106,"li"),n(107,"Customizable with themes"),t(),e(108,"li"),n(109,"Lightweight and efficient"),t()()(),e(110,"div",10)(111,"button",11)(112,"span",12),n(113,"Get Start"),t(),e(114,"span",13),n(115," flag "),t()(),e(116,"button",14)(117,"span",12),n(118,"Learn More"),t(),e(119,"span",13),n(120," keyboard_double_arrow_right "),t()()()()(),e(121,"div",15),v(122,"app-comps-code",16),t()(),e(123,"div")(124,"h2",18),n(125,"Bordered Card Coloured"),t(),e(126,"div",6),p(127,Zt,24,4,"ng-container",19),t(),e(128,"div",15),v(129,"app-comps-code",16),t()(),e(130,"div")(131,"h2",18),n(132,"Chart Cards"),t(),e(133,"div",6)(134,"div",21),p(135,en,9,2,"ng-container",19),t()(),e(136,"div",15),v(137,"app-comps-code",16),t()()()()),o&2&&(a(42),d("showCode","card-01"),a(39),d("showCode","card-02"),a(5),d("ngForOf",l.coloursData),a(2),d("showCode","card-03"),a(34),d("showCode","card-04"),a(5),d("ngForOf",l.colours),a(2),d("showCode","card-05"),a(6),d("ngForOf",l.colours),a(2),d("showCode","card-06"))},dependencies:[M,E],styles:[".comp-title[_ngcontent-%COMP%]{font-size:2.8rem;margin-bottom:2rem}.grid-auto-adjust[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,auto));gap:30px}.flex-gap[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4rem}"]})};var W=class i{constructor(r){this.themeService=r}themeClr="";ngOnInit(){}static \u0275fac=function(o){return new(o||i)(g(k))};static \u0275cmp=S({type:i,selectors:[["app-dropdown"]],standalone:!1,decls:73,vars:1,consts:[["id","app-components"],[1,"app-intro-card"],[1,"card-header"],[1,"card-body"],["id","dropdown01","cssFusionDropdown","",1,"dropdown-box"],[1,"dd-menu"],[1,"dd-name"],[1,"material-symbols-outlined"],[1,"dd-list"],[1,"dd-option"],[1,"app-components-box"],[1,"app-card"],[1,"card-code"],[3,"showCode"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Options, Just a Click Away"),t(),e(5,"p"),n(6," Keep choices hidden until they're needed \u2014 clean, simple, dropdown magic. "),t()(),e(7,"div",3)(8,"div",4)(9,"div",5)(10,"p",6),n(11,"Mobile List"),t(),e(12,"span",7),n(13," arrow_drop_down "),t()(),e(14,"ul",8)(15,"li",9),n(16,"Apple"),t(),e(17,"li",9),n(18,"Samsung"),t(),e(19,"li",9),n(20,"Google Pixel"),t(),e(21,"li",9),n(22,"Nokia"),t(),e(23,"li",9),n(24,"Motorola"),t(),e(25,"li",9),n(26,"Apple"),t(),e(27,"li",9),n(28,"Samsung"),t(),e(29,"li",9),n(30,"Google Pixel"),t(),e(31,"li",9),n(32,"Nokia"),t(),e(33,"li",9),n(34,"Motorola"),t()()()()(),e(35,"div",10)(36,"div",11)(37,"div",2)(38,"div")(39,"h3"),n(40,"Synchronized Toggle"),t(),e(41,"p"),n(42,"Every panel dances together \u2014 open one, open all."),t()()(),e(43,"div",3)(44,"div",4)(45,"div",5)(46,"p",6),n(47,"Mobile List"),t(),e(48,"span",7),n(49," arrow_drop_down "),t()(),e(50,"ul",8)(51,"li",9),n(52,"Apple"),t(),e(53,"li",9),n(54,"Samsung"),t(),e(55,"li",9),n(56,"Google Pixel"),t(),e(57,"li",9),n(58,"Nokia"),t(),e(59,"li",9),n(60,"Motorola"),t(),e(61,"li",9),n(62,"Apple"),t(),e(63,"li",9),n(64,"Samsung"),t(),e(65,"li",9),n(66,"Google Pixel"),t(),e(67,"li",9),n(68,"Nokia"),t(),e(69,"li",9),n(70,"Motorola"),t()()()(),e(71,"div",12),v(72,"app-comps-code",13),t()()()()),o&2&&(a(72),d("showCode","dropdown-01"))},dependencies:[E],styles:[".app-intro-card[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{width:100%;max-width:40rem}"]})};var z=class i{constructor(r){this.themeService=r}themeClr="";ngOnInit(){}static \u0275fac=function(o){return new(o||i)(g(k))};static \u0275cmp=S({type:i,selectors:[["app-input"]],standalone:!1,decls:93,vars:38,consts:[["id","app-components"],[1,"app-intro-card"],[1,"card-header"],[1,"card-body"],[1,"app-components-box"],[1,"app-card"],[1,"form-grid-box"],[1,"input-grup","grup-expand-04"],["type","text","placeholder","Full Name"],[1,"input-grup","grup-expand-02"],["for","user_email"],["type","email","id","user_email","placeholder","example@gmail.com"],["for","user_password"],["type","password","id","user_password","placeholder","Password"],[1,"input-grup"],["for","user_gender"],["name","gender","id","user_gender"],["value","male"],["value","female"],[1,"input-grup","grup-expand-03"],["type","text","id","user_address","placeholder","Enter your address"],["name","user_review","id","review","placeholder","Write something about our product"],[1,"form-list-box"],["for","first_name"],["type","text","id","first_name","placeholder","John"],["for","last_name"],["type","text","id","last_name","placeholder","Smith"],["for","user_age"],["type","number","id","user_age","placeholder","20"],["type","text","id","user_mobile","placeholder","7676765765"],[1,"input-block"],[1,"material-symbols-outlined","icon-prefix"],["type","search","placeholder","Search Here!"],["type","text","placeholder","Search your tools"],[1,"material-symbols-outlined","icon-suffix"],[1,"material-symbols-outlined","icon-prefix-bg"],[1,"material-symbols-outlined","icon-suffix-bg"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Type It Your Way"),t(),e(5,"p"),n(6," Stylish, responsive fields that make data entry smooth and intuitive. "),t()(),v(7,"div",3),t(),e(8,"div",4)(9,"div",5)(10,"div",2)(11,"h3"),n(12,"Grid Type"),t()(),e(13,"div",3)(14,"div",6)(15,"div",7),v(16,"input",8),t(),e(17,"div",9)(18,"label",10),n(19,"Email"),t(),v(20,"input",11),t(),e(21,"div",9)(22,"label",12),n(23,"Password"),t(),v(24,"input",13),t(),e(25,"div",14)(26,"label",15),n(27,"Gender"),t(),e(28,"select",16)(29,"option",17),n(30,"Male"),t(),e(31,"option",18),n(32,"Female"),t()()(),e(33,"div",19)(34,"label",12),n(35,"Address"),t(),v(36,"input",20),t(),e(37,"div",7)(38,"label",15),n(39,"Review"),t(),v(40,"textarea",21),t()()()(),e(41,"div",5)(42,"div",2)(43,"h3"),n(44,"Form Type"),t()(),e(45,"div",3)(46,"div",22)(47,"div",14)(48,"label",23),n(49,"First Name"),t(),v(50,"input",24),t(),e(51,"div",14)(52,"label",25),n(53,"Last Name"),t(),v(54,"input",26),t(),e(55,"div",14)(56,"label",27),n(57,"Age"),t(),v(58,"input",28),t(),e(59,"div",14)(60,"label",15),n(61,"Gender"),t(),e(62,"select",16)(63,"option",17),n(64,"Male"),t(),e(65,"option",18),n(66,"Female"),t()()(),e(67,"div",14)(68,"label",10),n(69,"Mobile No"),t(),v(70,"input",29),t()()()(),e(71,"div",5)(72,"div",2)(73,"h3"),n(74,"Input with Icon"),t()(),e(75,"div",3)(76,"div",30)(77,"div")(78,"span",31),n(79," search "),t(),v(80,"input",32),t(),e(81,"div"),v(82,"input",33),e(83,"span",34),n(84," settings "),t()(),e(85,"div")(86,"span",35),n(87," search "),t(),v(88,"input",32),t(),e(89,"div"),v(90,"input",33),e(91,"span",36),n(92," settings "),t()()()()()()()),o&2&&(a(16),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(4),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(4),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(4),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(8),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(4),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(10),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(4),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(4),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(4),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(8),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(7),h(l.themeService.isDarkMode===!0?"input-icon-grup cf-dark":"input-icon-grup"),a(3),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(),h(l.themeService.isDarkMode===!0?"input-icon-grup cf-dark":"input-icon-grup"),a(),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(3),h(l.themeService.isDarkMode===!0?"input-icon-grup cf-dark":"input-icon-grup"),a(3),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"),a(),h(l.themeService.isDarkMode===!0?"input-icon-grup cf-dark":"input-icon-grup"),a(),h(l.themeService.isDarkMode===!0?"input-box cf-dark":"input-box"))},encapsulation:2})};var q=class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=S({type:i,selectors:[["app-menubar"]],standalone:!1,decls:144,vars:4,consts:[["id","app-components"],[1,"app-intro-card"],[1,"card-header"],[1,"card-body"],[1,"app-components-box"],[1,"app-card"],[1,"menubar-box"],[1,"menubar-set-01"],["src","me-logdark.svg",1,"menubar-logo"],[1,"menubar-logo-name"],[1,"menubar-set-02"],[1,"menubar-link-center"],[1,"menubar-link","active-link"],[1,"menubar-link"],[1,"menubar-set-03"],["value","en"],["value","tn"],[1,"card-code"],[3,"showCode"],[1,"menubar-link-left"],[1,"menubar-link-right"],[1,"menubar-resizable"],["id","menubar-thumb",1,"material-symbols-outlined"],[1,"material-symbols-outlined","menubar-icons"],[1,"menubar-profile-box"],[1,"profile-details"],[1,"profile-name"],[1,"profile-role"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Top-Level Menubar"),t(),e(5,"p"),n(6,"Guide users confidently with a sleek, responsive header bar."),t()(),v(7,"div",3),t(),e(8,"div",4)(9,"div",5)(10,"div",2)(11,"div")(12,"h3"),n(13,"Center Stage Menu"),t(),e(14,"p"),n(15,"Navigation links that sit front and center \u2014 bold and balanced."),t()()(),e(16,"div",3)(17,"header",6)(18,"div",7),v(19,"img",8),e(20,"p",9),n(21,"Menu"),t()(),e(22,"div",10)(23,"div",11)(24,"p",12),n(25,"Css"),t(),e(26,"p",13),n(27,"Scss"),t(),e(28,"p",13),n(29,"Javascript"),t(),e(30,"p",13),n(31,"Angular"),t(),e(32,"p",13),n(33,"React"),t(),e(34,"p",13),n(35,"Github"),t()()(),e(36,"div",14)(37,"form")(38,"select")(39,"option",15),n(40,"En"),t(),e(41,"option",16),n(42,"Tn"),t()()()()()(),e(43,"div",17),v(44,"app-comps-code",18),t()(),e(45,"div",5)(46,"div",2)(47,"div")(48,"h3"),n(49,"Classic Left Align"),t(),e(50,"p"),n(51,"A familiar flow \u2014 links neatly aligned for muscle memory wins."),t()()(),e(52,"div",3)(53,"header",6)(54,"div",7),v(55,"img",8),e(56,"p",9),n(57,"Menu"),t()(),e(58,"div",10)(59,"div",19)(60,"p",13),n(61,"Css"),t(),e(62,"p",13),n(63,"Scss"),t(),e(64,"p",12),n(65,"Javascript"),t(),e(66,"p",13),n(67,"Angular"),t(),e(68,"p",13),n(69,"React"),t(),e(70,"p",13),n(71,"Github"),t()()(),e(72,"div",14)(73,"form")(74,"select")(75,"option",15),n(76,"En"),t(),e(77,"option",16),n(78,"Tn"),t()()()()()(),e(79,"div",17),v(80,"app-comps-code",18),t()(),e(81,"div",5)(82,"div",2)(83,"div")(84,"h3"),n(85,"Right in Control"),t(),e(86,"p"),n(87," Shift the focus with right-aligned links that feel modern and sharp. "),t()()(),e(88,"div",3)(89,"header",6)(90,"div",7),v(91,"img",8),e(92,"p",9),n(93,"Menu"),t()(),e(94,"div",10)(95,"div",20)(96,"p",13),n(97,"Css"),t(),e(98,"p",13),n(99,"Scss"),t(),e(100,"p",13),n(101,"Javascript"),t(),e(102,"p",13),n(103,"Angular"),t(),e(104,"p",12),n(105,"React"),t(),e(106,"p",13),n(107,"Github"),t()()(),e(108,"div",14)(109,"form")(110,"select")(111,"option",15),n(112,"En"),t(),e(113,"option",16),n(114,"Tn"),t()()()()()(),e(115,"div",17),v(116,"app-comps-code",18),t()(),e(117,"div",5)(118,"div",2)(119,"div")(120,"h3"),n(121,"Smart & Resizable"),t(),e(122,"p"),n(123," Expandable menu with user flair \u2014 collapses clean, expands smart. "),t()()(),e(124,"div",3)(125,"header",21)(126,"div",7)(127,"span",22),n(128," menu "),t(),e(129,"p",9),n(130,"Menu"),t()(),e(131,"div",10)(132,"span",23),n(133," logout "),t(),e(134,"div",24)(135,"span",23),n(136," account_circle "),t(),e(137,"div",25)(138,"p",26),n(139,"Peter"),t(),e(140,"small",27),n(141,"Senior Developer"),t()()()()()(),e(142,"div",17),v(143,"app-comps-code",18),t()()()()),o&2&&(a(44),d("showCode","menubar-01"),a(36),d("showCode","menubar-02"),a(36),d("showCode","menubar-03"),a(27),d("showCode","menubar-04"))},dependencies:[E],styles:["select[_ngcontent-%COMP%]{width:60px;border:none;background-color:#2c2c2c;color:#fff;border-radius:4px;padding:4px;font-weight:500;letter-spacing:2px}select[_ngcontent-%COMP%]:focus{outline:none}"]})};var Y=class i{constructor(r,o){this.elRef=r;this.themeService=o}themeClr="";ngOnInit(){}static \u0275fac=function(o){return new(o||i)(g(oe),g(k))};static \u0275cmp=S({type:i,selectors:[["app-nav"]],standalone:!1,decls:194,vars:1,consts:[["id","app-components"],[1,"app-intro-card"],[1,"card-header"],[1,"card-body"],[1,"app-components-box-nav"],[1,"navbar-box","navbar-resize"],[1,"navbar-set01"],[1,"material-symbols-outlined","nav-logo"],["id","navLeft-tigger",1,"material-symbols-outlined"],[1,"navbar-set02"],[1,"nav-menu"],[1,"navbar-link","navbar-active"],[1,"material-symbols-outlined","nav-icon"],[1,"navbar-link"],[1,"navbar-set03"],[1,"user"],[1,"material-symbols-outlined","user-img"],[1,"material-symbols-outlined","more-icon"],[1,"navbar-box"],[1,"nav-txt"],[1,"user-info","nav-txt"],[1,"user-info-name"],[1,"user-info-desc"],[1,"card-code"],[3,"showCode"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Left, but Never Behind"),t(),e(5,"p"),n(6,"Vertical nav that anchors your app \u2014 smart, adaptive, and tidy."),t()(),v(7,"div",3),t(),e(8,"div",4)(9,"nav",5)(10,"div",6)(11,"h3")(12,"span",7),n(13," android "),t()(),e(14,"span",8),n(15," keyboard_double_arrow_left "),t()(),e(16,"div",9)(17,"small",10),n(18,"Home"),t(),e(19,"p",11)(20,"span",12),n(21,"dashboard"),t()(),e(22,"p",13)(23,"span",12),n(24,"add_circle"),t()(),e(25,"p",13)(26,"span",12),n(27,"table"),t()(),e(28,"small",10),n(29,"Charts"),t(),e(30,"p",13)(31,"span",12),n(32,"finance"),t()(),e(33,"p",13)(34,"span",12),n(35,"pie_chart"),t()(),e(36,"p",13)(37,"span",12),n(38,"donut_small"),t()()(),e(39,"div",14)(40,"div",15)(41,"span",16),n(42,"account_circle"),t()(),e(43,"span",17),n(44," steppers "),t()()(),e(45,"nav",18)(46,"div",6)(47,"h3")(48,"span",7),n(49," android "),t(),e(50,"span",19),n(51,"Company Logo"),t()(),e(52,"span",8),n(53," keyboard_double_arrow_left "),t()(),e(54,"div",9)(55,"small",10),n(56,"Home"),t(),e(57,"p",11)(58,"span",12),n(59,"dashboard"),t(),e(60,"span",19),n(61,"Dashboard"),t()(),e(62,"p",13)(63,"span",12),n(64,"add_circle"),t(),e(65,"span",19),n(66,"Creation"),t()(),e(67,"p",13)(68,"span",12),n(69,"table"),t(),e(70,"span",19),n(71,"Summary"),t()(),e(72,"small",10),n(73,"Charts"),t(),e(74,"p",13)(75,"span",12),n(76,"finance"),t(),e(77,"span",19),n(78,"Bar Chart"),t()(),e(79,"p",13)(80,"span",12),n(81,"pie_chart"),t(),e(82,"span",19),n(83,"Pie Chart"),t()(),e(84,"p",13)(85,"span",12),n(86,"donut_small"),t(),e(87,"span",19),n(88,"Donut Chart"),t()()(),e(89,"div",14)(90,"div",15)(91,"span",16),n(92,"account_circle"),t(),e(93,"div",20)(94,"h3",21),n(95,"User Name"),t(),e(96,"p",22),n(97,"Ui/Ux Developer"),t()()(),e(98,"span",17),n(99," steppers "),t()()(),e(100,"nav",18)(101,"div",6)(102,"h3")(103,"span",7),n(104," android "),t(),e(105,"span",19),n(106,"Company Logo"),t()(),e(107,"span",8),n(108," keyboard_double_arrow_left "),t()(),e(109,"div",9)(110,"small",10),n(111,"Home"),t(),e(112,"p",11)(113,"span",12),n(114,"dashboard"),t(),e(115,"span",19),n(116,"Dashboard"),t()(),e(117,"p",13)(118,"span",12),n(119,"add_circle"),t(),e(120,"span",19),n(121,"Creation"),t()(),e(122,"p",13)(123,"span",12),n(124,"table"),t(),e(125,"span",19),n(126,"Summary"),t()(),e(127,"small",10),n(128,"Charts"),t(),e(129,"p",13)(130,"span",12),n(131,"finance"),t(),e(132,"span",19),n(133,"Bar Chart"),t()(),e(134,"p",13)(135,"span",12),n(136,"monitoring"),t(),e(137,"span",19),n(138,"Graph Chart"),t()(),e(139,"p",13)(140,"span",12),n(141,"pie_chart"),t(),e(142,"span",19),n(143,"Pie Chart"),t()(),e(144,"p",13)(145,"span",12),n(146,"donut_small"),t(),e(147,"span",19),n(148,"Donut Chart"),t()(),e(149,"small",10),n(150,"Screens"),t(),e(151,"p",13)(152,"span",12),n(153,"add_circle"),t(),e(154,"span",19),n(155,"Creation"),t()(),e(156,"p",13)(157,"span",12),n(158,"edit"),t(),e(159,"span",19),n(160,"Edit"),t()(),e(161,"p",13)(162,"span",12),n(163,"verified"),t(),e(164,"span",19),n(165,"Verification"),t()(),e(166,"p",13)(167,"span",12),n(168,"description"),t(),e(169,"span",19),n(170,"Documentation"),t()(),e(171,"p",13)(172,"span",12),n(173,"security"),t(),e(174,"span",19),n(175,"Validation"),t()(),e(176,"p",13)(177,"span",12),n(178,"task"),t(),e(179,"span",19),n(180,"Submission"),t()()(),e(181,"div",14)(182,"div",15)(183,"span",16),n(184,"account_circle"),t(),e(185,"div",20)(186,"h3",21),n(187,"User Name"),t(),e(188,"p",22),n(189,"Ui/Ux Developer"),t()()(),e(190,"span",17),n(191," steppers "),t()()()(),e(192,"div",23),v(193,"app-comps-code",24),t()()),o&2&&(a(193),d("showCode","navbar-01"))},dependencies:[E],encapsulation:2})};var J=class i{tableSm=[{tr:["1","Apple","Iphone 8","10.08.2024","Battery Replacemeent"]}];tableMd=[{tr:["1","Apple","Iphone 8","10.08.2024","Battery Replacemeent"]},{tr:["2","Nokia","Nokia 10","20.09.2024","Battery Replacemeent"]},{tr:["3","Nothing","Nothing 2a","05.10.2024","Battery Replacemeent"]},{tr:["4","Oneplus","Oneplus 8","08.09.2024","Battery Replacemeent"]},{tr:["5","Redmi","Redmi 2 Prime","10.08.2024","Battery Replacemeent"]},{tr:["6","Pixel","Pixel 4a","15.08.2024","Battery Replacemeent"]}];tableLg=[{tr:["1","001","Apple","Iphone 8","10.08.2024","Screen replacement due to cracks"]},{tr:["2","002","Nokia","Nokia 10","20.09.2024","Software update for new features"]},{tr:["3","003","Nothing","Nothing 2a","05.10.2024","Camera lens replacement"]},{tr:["4","004","Oneplus","Oneplus 8","08.09.2024","Speaker malfunction repair"]},{tr:["5","005","Redmi","Redmi 2 Prime","10.08.2024","Charging port replacement"]},{tr:["6","006","Pixel","Pixel 4a","15.08.2024","WiFi connectivity issue fix"]},{tr:["7","006","Pixel","Nokia 8a","15.08.2024","Charging port replacement"]},{tr:["8","006","Pixel","Redmi 4","15.08.2024","Camera lens replacement"]},{tr:["9","006","Pixel","Pixel 9 Pro","15.08.2024","WiFi connectivity issue fix"]},{tr:["10","006","Pixel","Onplus 8","15.08.2024","Speaker malfunction repair"]},{tr:["11","006","Pixel","Oppo Reno","15.08.2024","WiFi connectivity issue fix"]},{tr:["12","006","Pixel","Samsung s23","15.08.2024","Camera lens replacement"]},{tr:["13","006","Pixel","Backberry One","15.08.2024","WiFi connectivity issue fix"]},{tr:["14","006","Pixel","Samsung A19","15.08.2024","Speaker malfunction repair"]},{tr:["15","006","Pixel","Oneplus 12","15.08.2024","WiFi connectivity issue fix"]}];tableMini=[{tr:["1","Apple","Iphone 8"]},{tr:["2","Nokia","Nokia 10"]},{tr:["3","Nothing","Nothing 2a"]},{tr:["4","Oneplus","Oneplus 8"]},{tr:["5","Redmi","Redmi 2 Prime"]},{tr:["6","Pixel","Pixel 4a"]}];constructor(){}static \u0275fac=function(o){return new(o||i)};static \u0275prov=O({token:i,factory:i.\u0275fac,providedIn:"root"})};function nn(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function on(i,r){if(i&1&&(e(0,"tr"),p(1,nn,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function an(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function rn(i,r){if(i&1&&(e(0,"tr"),p(1,an,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function ln(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function dn(i,r){if(i&1&&(e(0,"tr"),p(1,ln,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function cn(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function mn(i,r){if(i&1&&(e(0,"tr"),p(1,cn,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function sn(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function pn(i,r){if(i&1&&(e(0,"tr"),p(1,sn,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function vn(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function un(i,r){if(i&1&&(e(0,"tr"),p(1,vn,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function bn(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function _n(i,r){if(i&1&&(e(0,"tr"),p(1,bn,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function xn(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function fn(i,r){if(i&1&&(e(0,"tr"),p(1,xn,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function Cn(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function hn(i,r){if(i&1&&(e(0,"tr"),p(1,Cn,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function Sn(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function En(i,r){if(i&1&&(e(0,"tr"),p(1,Sn,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}function gn(i,r){if(i&1&&(e(0,"td"),n(1),t()),i&2){let o=r.$implicit;a(),C(o)}}function yn(i,r){if(i&1&&(e(0,"tr"),p(1,gn,2,1,"td",7),t()),i&2){let o=r.$implicit;a(),d("ngForOf",o.tr)}}var K=class i{constructor(r,o){this.service=r;this.themeService=o;this.tableSm=this.service.tableSm,this.tableMd=this.service.tableMd,this.tableLg=this.service.tableLg,this.originalTableLg=[...this.tableLg],this.tableMini=this.service.tableMini}themeClr="";tableSm=[];tableMd=[];tableLg=[];tableMini=[];originalTableLg=[];getInBuildClr="blue";sortStatus="No sort";ngOnInit(){}inBuildClrs(r){this.getInBuildClr=r}onSortChanged(r){this.tableLg=r}clearSort(){}static \u0275fac=function(o){return new(o||i)(g(J),g(k))};static \u0275cmp=S({type:i,selectors:[["app-table"]],standalone:!1,decls:450,vars:39,consts:[["id","app-components"],[1,"app-intro-card"],[1,"card-header"],[1,"card-body"],[1,"app-components-box"],[1,"app-card"],[1,"table-box","tbl-bdr-btm"],[4,"ngFor","ngForOf"],[1,"table-btns"],["type","button",1,"page-btn"],[1,"material-symbols-outlined"],[1,"page-count"],[1,"active-page"],[1,"card-code"],[3,"showCode"],[1,"table-box","tbl-bdr-rect"],[1,"tbl-col-xsm"],[1,"card-header-box"],[3,"click"],[1,"table-box","tbl-responsive","tbl-bdr-btm"],[1,"tbl-col-md"],[1,"table-box","table-box","tbl-bdr-btm","tbl-line-hover"],[1,"table-box","tbl-bdr-rect","tbl-row-hover"],[1,"table-box","tbl-row-even"],[1,"table-box","tbl-clm-even"],[1,"table-box","tbl-row-odd"],[1,"table-box","tbl-clm-odd"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Data, but Make It Stylish"),t(),e(5,"p"),n(6," Organize your numbers and info with scrollable, sortable, polished tables. "),t()(),v(7,"div",3),t(),e(8,"div",4)(9,"section",5)(10,"div",2)(11,"h3"),n(12,"Regular"),t()(),e(13,"div",3)(14,"div",6)(15,"table")(16,"thead")(17,"tr")(18,"th"),n(19,"SI.No"),t(),e(20,"th"),n(21,"Brand"),t(),e(22,"th"),n(23,"Modal"),t(),e(24,"th"),n(25,"Service Date"),t(),e(26,"th"),n(27,"Description"),t()()(),e(28,"tbody"),p(29,on,2,1,"tr",7),t()()(),e(30,"div",8)(31,"button",9)(32,"span",10),n(33," keyboard_double_arrow_left "),t()(),e(34,"button",9)(35,"span",10),n(36," chevron_left "),t()(),e(37,"p",11)(38,"span",12),n(39,"01"),t(),n(40," of 50"),t(),e(41,"button",9)(42,"span",10),n(43," chevron_right "),t()(),e(44,"button",9)(45,"span",10),n(46," keyboard_double_arrow_right "),t()()(),e(47,"div",13),v(48,"app-comps-code",14),t()()(),e(49,"section",5)(50,"div",2)(51,"h3"),n(52,"Pagination"),t()(),e(53,"div",3)(54,"div",8)(55,"button",9)(56,"span",10),n(57," keyboard_double_arrow_left "),t()(),e(58,"button",9)(59,"span",10),n(60," chevron_left "),t()(),e(61,"p",11)(62,"span",12),n(63,"01"),t(),n(64," of 50"),t(),e(65,"button",9)(66,"span",10),n(67," chevron_right "),t()(),e(68,"button",9)(69,"span",10),n(70," keyboard_double_arrow_right "),t()()(),e(71,"div",13),v(72,"app-comps-code",14),t()()(),e(73,"section",5)(74,"div",2)(75,"h3"),n(76,"Border Bottom"),t()(),e(77,"div",3)(78,"div",6)(79,"table")(80,"thead")(81,"tr")(82,"th"),n(83,"SI.No"),t(),e(84,"th"),n(85,"Brand"),t(),e(86,"th"),n(87,"Modal"),t()()(),e(88,"tbody"),p(89,rn,2,1,"tr",7),t()()(),e(90,"div",8)(91,"button",9)(92,"span",10),n(93," keyboard_double_arrow_left "),t()(),e(94,"button",9)(95,"span",10),n(96," chevron_left "),t()(),e(97,"p",11)(98,"span",12),n(99,"01"),t(),n(100," of 50"),t(),e(101,"button",9)(102,"span",10),n(103," chevron_right "),t()(),e(104,"button",9)(105,"span",10),n(106," keyboard_double_arrow_right "),t()()(),e(107,"div",13),v(108,"app-comps-code",14),t()()(),e(109,"section",5)(110,"div",2)(111,"h3"),n(112,"Border Rectangle"),t()(),e(113,"div",3)(114,"div",15)(115,"table")(116,"thead")(117,"tr")(118,"th",16),n(119,"SI.No"),t(),e(120,"th"),n(121,"Brand"),t(),e(122,"th"),n(123,"Modal"),t()()(),e(124,"tbody"),p(125,dn,2,1,"tr",7),t()()(),e(126,"div",8)(127,"button",9)(128,"span",10),n(129," keyboard_double_arrow_left "),t()(),e(130,"button",9)(131,"span",10),n(132," chevron_left "),t()(),e(133,"p",11)(134,"span",12),n(135,"01"),t(),n(136," of 50"),t(),e(137,"button",9)(138,"span",10),n(139," chevron_right "),t()(),e(140,"button",9)(141,"span",10),n(142," keyboard_double_arrow_right "),t()()(),e(143,"div",13),v(144,"app-comps-code",14),t()()(),e(145,"section",5)(146,"div",2)(147,"h3"),n(148,"In-Build Colours"),t(),e(149,"div",17)(150,"p",18),u("click",function(){return l.inBuildClrs("blue")}),t(),e(151,"p",18),u("click",function(){return l.inBuildClrs("yellow")}),t(),e(152,"p",18),u("click",function(){return l.inBuildClrs("green")}),t(),e(153,"p",18),u("click",function(){return l.inBuildClrs("orange")}),t(),e(154,"p",18),u("click",function(){return l.inBuildClrs("violet")}),t(),e(155,"p",18),u("click",function(){return l.inBuildClrs("gray")}),t()()(),e(156,"div",3)(157,"div")(158,"table")(159,"thead")(160,"tr")(161,"th"),n(162,"SI.No"),t(),e(163,"th"),n(164,"Brand"),t(),e(165,"th"),n(166,"Modal"),t(),e(167,"th"),n(168,"Service Date"),t(),e(169,"th"),n(170,"Description"),t()()(),e(171,"tbody"),p(172,mn,2,1,"tr",7),t()()(),e(173,"div")(174,"button",9)(175,"span",10),n(176," keyboard_double_arrow_left "),t()(),e(177,"button",9)(178,"span",10),n(179," chevron_left "),t()(),e(180,"p",11)(181,"span",12),n(182,"01"),t(),n(183," of 50"),t(),e(184,"button",9)(185,"span",10),n(186," chevron_right "),t()(),e(187,"button",9)(188,"span",10),n(189," keyboard_double_arrow_right "),t()()(),e(190,"div",13),v(191,"app-comps-code",14),t()()(),e(192,"section",5)(193,"div",2)(194,"h3"),n(195,"Responsive Border Bottom Table"),t()(),e(196,"div",3)(197,"div",19)(198,"table")(199,"thead")(200,"tr")(201,"th",16),n(202,"SI.No"),t(),e(203,"th"),n(204,"Batch No"),t(),e(205,"th"),n(206,"Brand"),t(),e(207,"th"),n(208,"Modal"),t(),e(209,"th"),n(210,"Service Date"),t(),e(211,"th",20),n(212,"Description"),t()()(),e(213,"tbody"),p(214,pn,2,1,"tr",7),t()()(),e(215,"div",8)(216,"button",9)(217,"span",10),n(218," keyboard_double_arrow_left "),t()(),e(219,"button",9)(220,"span",10),n(221," chevron_left "),t()(),e(222,"p",11)(223,"span",12),n(224,"01"),t(),n(225," of 50"),t(),e(226,"button",9)(227,"span",10),n(228," chevron_right "),t()(),e(229,"button",9)(230,"span",10),n(231," keyboard_double_arrow_right "),t()()(),e(232,"div",13),v(233,"app-comps-code",14),t()()(),e(234,"section",5)(235,"div",2)(236,"h3"),n(237,"Left Line Hover"),t()(),e(238,"div",3)(239,"div",21)(240,"table")(241,"thead")(242,"tr")(243,"th"),n(244,"SI.No"),t(),e(245,"th"),n(246,"Brand"),t(),e(247,"th"),n(248,"Modal"),t()()(),e(249,"tbody"),p(250,un,2,1,"tr",7),t()()(),e(251,"div",8)(252,"button",9)(253,"span",10),n(254," keyboard_double_arrow_left "),t()(),e(255,"button",9)(256,"span",10),n(257," chevron_left "),t()(),e(258,"p",11)(259,"span",12),n(260,"01"),t(),n(261," of 50"),t(),e(262,"button",9)(263,"span",10),n(264," chevron_right "),t()(),e(265,"button",9)(266,"span",10),n(267," keyboard_double_arrow_right "),t()()(),e(268,"div",13),v(269,"app-comps-code",14),t()()(),e(270,"section",5)(271,"div",2)(272,"h3"),n(273,"Row Hover"),t()(),e(274,"div",3)(275,"div",22)(276,"table")(277,"thead")(278,"tr")(279,"th",16),n(280,"SI.No"),t(),e(281,"th"),n(282,"Brand"),t(),e(283,"th"),n(284,"Modal"),t()()(),e(285,"tbody"),p(286,_n,2,1,"tr",7),t()()(),e(287,"div",8)(288,"button",9)(289,"span",10),n(290," keyboard_double_arrow_left "),t()(),e(291,"button",9)(292,"span",10),n(293," chevron_left "),t()(),e(294,"p",11)(295,"span",12),n(296,"01"),t(),n(297," of 50"),t(),e(298,"button",9)(299,"span",10),n(300," chevron_right "),t()(),e(301,"button",9)(302,"span",10),n(303," keyboard_double_arrow_right "),t()()(),e(304,"div",13),v(305,"app-comps-code",14),t()()(),e(306,"section",5)(307,"div",2)(308,"h3"),n(309,"Row Even"),t()(),e(310,"div",3)(311,"div",23)(312,"table")(313,"thead")(314,"tr")(315,"th",16),n(316,"SI.No"),t(),e(317,"th"),n(318,"Brand"),t(),e(319,"th"),n(320,"Modal"),t()()(),e(321,"tbody"),p(322,fn,2,1,"tr",7),t()()(),e(323,"div",8)(324,"button",9)(325,"span",10),n(326," keyboard_double_arrow_left "),t()(),e(327,"button",9)(328,"span",10),n(329," chevron_left "),t()(),e(330,"p",11)(331,"span",12),n(332,"01"),t(),n(333," of 50"),t(),e(334,"button",9)(335,"span",10),n(336," chevron_right "),t()(),e(337,"button",9)(338,"span",10),n(339," keyboard_double_arrow_right "),t()()(),e(340,"div",13),v(341,"app-comps-code",14),t()()(),e(342,"section",5)(343,"div",2)(344,"h3"),n(345,"Column Even"),t()(),e(346,"div",3)(347,"div",24)(348,"table")(349,"thead")(350,"tr")(351,"th",16),n(352,"SI.No"),t(),e(353,"th"),n(354,"Brand"),t(),e(355,"th"),n(356,"Modal"),t()()(),e(357,"tbody"),p(358,hn,2,1,"tr",7),t()()(),e(359,"div",8)(360,"button",9)(361,"span",10),n(362," keyboard_double_arrow_left "),t()(),e(363,"button",9)(364,"span",10),n(365," chevron_left "),t()(),e(366,"p",11)(367,"span",12),n(368,"01"),t(),n(369," of 50"),t(),e(370,"button",9)(371,"span",10),n(372," chevron_right "),t()(),e(373,"button",9)(374,"span",10),n(375," keyboard_double_arrow_right "),t()()(),e(376,"div",13),v(377,"app-comps-code",14),t()()(),e(378,"section",5)(379,"div",2)(380,"h3"),n(381,"Row Odd"),t()(),e(382,"div",3)(383,"div",25)(384,"table")(385,"thead")(386,"tr")(387,"th",16),n(388,"SI.No"),t(),e(389,"th"),n(390,"Brand"),t(),e(391,"th"),n(392,"Modal"),t()()(),e(393,"tbody"),p(394,En,2,1,"tr",7),t()()(),e(395,"div",8)(396,"button",9)(397,"span",10),n(398," keyboard_double_arrow_left "),t()(),e(399,"button",9)(400,"span",10),n(401," chevron_left "),t()(),e(402,"p",11)(403,"span",12),n(404,"01"),t(),n(405," of 50"),t(),e(406,"button",9)(407,"span",10),n(408," chevron_right "),t()(),e(409,"button",9)(410,"span",10),n(411," keyboard_double_arrow_right "),t()()(),e(412,"div",13),v(413,"app-comps-code",14),t()()(),e(414,"section",5)(415,"div",2)(416,"h3"),n(417,"Column Odd"),t()(),e(418,"div",3)(419,"div",26)(420,"table")(421,"thead")(422,"tr")(423,"th",16),n(424,"SI.No"),t(),e(425,"th"),n(426,"Brand"),t(),e(427,"th"),n(428,"Modal"),t()()(),e(429,"tbody"),p(430,yn,2,1,"tr",7),t()()(),e(431,"div",8)(432,"button",9)(433,"span",10),n(434," keyboard_double_arrow_left "),t()(),e(435,"button",9)(436,"span",10),n(437," chevron_left "),t()(),e(438,"p",11)(439,"span",12),n(440,"01"),t(),n(441," of 50"),t(),e(442,"button",9)(443,"span",10),n(444," chevron_right "),t()(),e(445,"button",9)(446,"span",10),n(447," keyboard_double_arrow_right "),t()()(),e(448,"div",13),v(449,"app-comps-code",14),t()()()()()),o&2&&(a(29),d("ngForOf",l.tableMd),a(19),d("showCode","table-01"),a(24),d("showCode","table-02"),a(17),d("ngForOf",l.tableMini),a(19),d("showCode","table-03"),a(17),d("ngForOf",l.tableMini),a(19),d("showCode","table-04"),a(6),h(l.getInBuildClr==="blue"?"clr-blocks clr-blue active-clr":"clr-blocks clr-blue"),a(),h(l.getInBuildClr==="yellow"?"clr-blocks clr-yellow active-clr":"clr-blocks clr-yellow"),a(),h(l.getInBuildClr==="green"?"clr-blocks clr-green active-clr":"clr-blocks clr-green"),a(),h(l.getInBuildClr==="orange"?"clr-blocks clr-orange active-clr":"clr-blocks clr-orange"),a(),h(l.getInBuildClr==="violet"?"clr-blocks clr-violet active-clr":"clr-blocks clr-violet"),a(),h(l.getInBuildClr==="gray"?"clr-blocks clr-gray active-clr":"clr-blocks clr-gray"),a(2),h("table-box-"+l.getInBuildClr+" tbl-bdr-btm-"+l.getInBuildClr),a(15),d("ngForOf",l.tableSm),a(),h("table-btns-"+l.getInBuildClr),a(18),d("showCode","table-05"),a(23),d("ngForOf",l.tableLg),a(19),d("showCode","table-06"),a(17),d("ngForOf",l.tableMini),a(19),d("showCode","table-07"),a(17),d("ngForOf",l.tableMini),a(19),d("showCode","table-08"),a(17),d("ngForOf",l.tableMini),a(19),d("showCode","table-09"),a(17),d("ngForOf",l.tableMini),a(19),d("showCode","table-10"),a(17),d("ngForOf",l.tableMini),a(19),d("showCode","table-11"),a(17),d("ngForOf",l.tableMini),a(19),d("showCode","table-12"))},dependencies:[M,E],encapsulation:2})};var ne=i=>({"active-content":i});function wn(i,r){if(i&1&&(y(0),e(1,"div",23)(2,"h3",24),n(3),t(),e(4,"p",25),n(5),t()(),w()),i&2){let o=r.$implicit,l=r.index;a(),d("ngClass",A(3,ne,l===0)),a(2),C(o.tabTitle),a(2),C(o.tabContent)}}function kn(i,r){if(i&1&&(y(0),e(1,"div",23)(2,"h3",24),n(3),t(),e(4,"p",25),n(5),t()(),w()),i&2){let o=r.$implicit,l=r.index;a(),d("ngClass",A(3,ne,l===0)),a(2),C(o.tabTitle),a(2),C(o.tabContent)}}function Tn(i,r){if(i&1&&(y(0),e(1,"div",23)(2,"h3",24),n(3),t(),e(4,"p",25),n(5),t()(),w()),i&2){let o=r.$implicit,l=r.index;a(),d("ngClass",A(3,ne,l===0)),a(2),C(o.tabTitle),a(2),C(o.tabContent)}}var Q=class i{constructor(r){this.themeService=r}themeClr="";tabContent=[{tabTitle:"Welcome to Tabs!",tabContent:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique odit officiis quis natus reprehenderit animi assumenda quisquam quos iure."},{tabTitle:"Company",tabContent:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique odit officiis quis natus reprehenderit animi assumenda quisquam quos iure."},{tabTitle:"Service",tabContent:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit similique odit officiis quis natus reprehenderit animi assumenda quisquam quos iure."}];ngOnInit(){}static \u0275fac=function(o){return new(o||i)(g(k))};static \u0275cmp=S({type:i,selectors:[["app-tab"]],standalone:!1,decls:74,vars:5,consts:[["id","app-components"],[1,"app-intro-card"],[1,"card-header"],[1,"card-body"],["cssFusionTabs","",1,"tabs-box","tab-pill"],[1,"tab-list-group","tab-list-center"],[1,"scroll-arrow","tab-left"],[1,"tab-scroll-icon"],[1,"tab-list"],[1,"tab-name","tab-01","active-tab"],[1,"tab-name","tab-02"],[1,"tab-name","tab-03"],[1,"scroll-arrow","tab-right"],[1,"tab-body-set"],[4,"ngFor","ngForOf"],[1,"app-components-box"],[1,"app-card"],[1,"tab-name","active-tab"],[1,"tab-name"],[1,"card-code"],[3,"showCode"],["cssFusionTabs","",1,"tabs-box","tab-regular"],[1,"tab-list-group"],[1,"tab-body",3,"ngClass"],[1,"tab-title"],[1,"tab-content"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3"),n(4,"Switch Without the Mess"),t(),e(5,"p"),n(6,"Snap between sections in a click \u2014 tabbed UI that's clean and fast."),t()(),e(7,"div",3)(8,"div",4)(9,"div",5)(10,"p",6)(11,"mat-icon",7),n(12,"keyboard_arrow_left"),t()(),e(13,"nav",8)(14,"p",9),n(15,"Home"),t(),e(16,"p",10),n(17,"Company"),t(),e(18,"p",11),n(19,"Service"),t()(),e(20,"p",12)(21,"mat-icon",7),n(22,"keyboard_arrow_right"),t()()(),e(23,"section",13),p(24,wn,6,5,"ng-container",14),t()()()(),e(25,"div",15)(26,"div",16)(27,"div",2)(28,"h3"),n(29,"Tab Pill"),t()(),e(30,"div",3)(31,"div",4)(32,"div",5)(33,"p",6)(34,"mat-icon",7),n(35,"keyboard_arrow_left"),t()(),e(36,"nav",8)(37,"p",17),n(38,"Home"),t(),e(39,"p",18),n(40,"Company"),t(),e(41,"p",18),n(42,"Service"),t()(),e(43,"p",12)(44,"mat-icon",7),n(45,"keyboard_arrow_right"),t()()(),e(46,"section",13),p(47,kn,6,5,"ng-container",14),t()(),e(48,"div",19),v(49,"app-comps-code",20),t()()(),e(50,"div",16)(51,"div",2)(52,"h3"),n(53,"Tab Regular"),t()(),e(54,"div",3)(55,"div",21)(56,"div",22)(57,"p",6)(58,"mat-icon",7),n(59,"keyboard_arrow_left"),t()(),e(60,"nav",8)(61,"p",17),n(62,"Home"),t(),e(63,"p",18),n(64,"Company"),t(),e(65,"p",18),n(66,"Service"),t()(),e(67,"p",12)(68,"mat-icon",7),n(69,"keyboard_arrow_right"),t()()(),e(70,"section",13),p(71,Tn,6,5,"ng-container",14),t()(),e(72,"div",19),v(73,"app-comps-code",20),t()()()()()),o&2&&(a(24),d("ngForOf",l.tabContent),a(23),d("ngForOf",l.tabContent),a(2),d("showCode","tabs-01"),a(22),d("ngForOf",l.tabContent),a(2),d("showCode","tabs-01"))},dependencies:[P,M,R,E],encapsulation:2})};var X=class i{constructor(){}ngOnInit(){}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=S({type:i,selectors:[["app-variables"]],standalone:!1,decls:9,vars:1,consts:[["id","app-components"],[1,"app-components-box"],[1,"app-card"],[1,"card-header"],[1,"card-code"],[3,"showCode"]],template:function(o,l){o&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"h3"),n(6,"Variables"),t()()(),e(7,"div",4),v(8,"app-comps-code",5),t()()()()),o&2&&(a(8),d("showCode","scss-variables"))},dependencies:[E],encapsulation:2})};var In=[{path:"Components",component:$,children:[{path:"",redirectTo:"Component_Accordion",pathMatch:"full"},{path:"Component_Accordion",component:j},{path:"Component_Button",component:G},{path:"Component_Card",component:U},{path:"Component_Dropdown",component:W},{path:"Component_Input",component:z},{path:"Component_Menubar",component:q},{path:"Component_Nav",component:Y},{path:"Component_Table",component:K},{path:"Component_Tab",component:Q},{path:"Component_Variables",component:X}]}],Z=class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=N({type:i});static \u0275inj=H({imports:[F.forChild(In),F]})};var he=class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=N({type:i});static \u0275inj=H({imports:[ce,F,Z,_e,xe,ve,fe,Ce,ue]})};export{k as a,Z as b,he as c};
