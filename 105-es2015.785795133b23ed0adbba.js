(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{fugw:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDropdownSelectionModule",(function(){return $}));var o=n("2kYt"),i=n("nIj0"),r=n("sEIs"),a=n("SVIu"),u=n("Qq0t"),l=n("dvRg"),d=n("kiPw"),p=n("EM62"),c=n("OZlg"),m=n("e0eB"),s=n("iyc4"),g=n("bPri");let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dropdown-selection-example-1"]],decls:6,vars:0,consts:[["tuiDropdownSelection","","tuiDropdownSelectionPosition","selection","tuiDropdownContent","\xa0\xa0\u0422\u0435\u043a\u0441\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438\xa0\xa0"]],template:function(e,t){1&e&&(p["\u0275\u0275text"](0,"\u0412 \u0430\u0431\u0437\u0430\u0446\u0435 \u043d\u0438\u0436\u0435 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u0437\u043e\u0432\u0435\u0442 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438:\n"),p["\u0275\u0275elementStart"](1,"p",0),p["\u0275\u0275text"](2," \u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442, "),p["\u0275\u0275elementStart"](3,"b"),p["\u0275\u0275text"](4,"\u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0443\n"),p["\u0275\u0275elementEnd"]())},directives:[g.a],encapsulation:2,changeDetection:0}),e})();var x=n("D57K"),y=n("+SFL"),h=n("l4xa"),f=n("oEBb"),D=n("cVyY"),v=n("xcN3"),P=n("cweO");function S(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",6),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](e);const n=t.$implicit,o=p["\u0275\u0275nextContext"](3),i=p["\u0275\u0275reference"](1);return o.onClick(n.login,i.nativeFocusableElement)})),p["\u0275\u0275text"](1),p["\u0275\u0275element"](2,"tui-avatar",7),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e.name," "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("rounded",!0)("avatarUrl",e.avatar)("text",e.name)}}function C(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-data-list",4),p["\u0275\u0275listener"]("keydown.escape",(function(){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"](2),p["\u0275\u0275reference"](1).nativeFocusableElement.focus()})),p["\u0275\u0275template"](1,S,3,4,"button",5),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275nextContext"](2),t=p["\u0275\u0275reference"](1);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",e.filterItems(t.nativeFocusableElement))}}function E(e,t){if(1&e&&p["\u0275\u0275template"](0,C,2,1,"tui-data-list",3),2&e){p["\u0275\u0275nextContext"]();const e=p["\u0275\u0275reference"](1);p["\u0275\u0275property"]("ngIf",e.nativeFocusableElement)}}let V=(()=>{class e{constructor(){this.value="\u041d\u0430\u0431\u0435\u0440\u0438\u0442\u0435 @ \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438",this.options=h.EMPTY_QUERY,this.predicate=e=>Object(l.getWordRange)(e).toString().startsWith("@"),this.items=[{name:"Alexander Inkin",avatar:y.a,login:"a.inkin"},{name:"Roman Sedov",avatar:"",login:"r.sedov"}]}get focused(){return!!this.options.length||null}onArrow(e,t){const n=this.options[t];n&&(e.preventDefault(),Object(h.setNativeFocused)(n.nativeElement))}filterItems(e){const t=this.getCurrentSearch(e).replace("@","");return this.getFilteredItems(this.items,t)}onClick(e,t){const n=this.getCurrentSearch(t),o=this.value.replace(n,e),i=o.indexOf(e)+e.length;this.value=o,Object(h.setNativeFocused)(t),t.value=o,t.setSelectionRange(i,i)}getCurrentSearch(e){return e.value.substring(e.value.indexOf("@"),e.selectionStart)}getFilteredItems(e,t){return e.filter(({name:e,login:n})=>n.startsWith(t)||e.startsWith(t))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dropdown-selection-example-2"]],viewQuery:function(e,t){var n;1&e&&p["\u0275\u0275viewQuery"](u.TuiOptionComponent,!0,p.ElementRef),2&e&&p["\u0275\u0275queryRefresh"](n=p["\u0275\u0275loadQuery"]())&&(t.options=n)},decls:5,vars:4,consts:[["tuiDropdownSelectionPosition","word",3,"tuiDropdownContent","tuiDropdownSelection","pseudoFocused","ngModel","ngModelChange","keydown.arrowUp","keydown.arrowDown"],["textarea",""],["dropdown",""],["class","menu",3,"keydown.escape",4,"ngIf"],[1,"menu",3,"keydown.escape"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"],["size","s",3,"rounded","avatarUrl","text"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-text-area",0,1),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e}))("keydown.arrowUp",(function(e){return t.onArrow(e,"last")}))("keydown.arrowDown",(function(e){return t.onArrow(e,"first")})),p["\u0275\u0275text"](2," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](3,E,1,1,"ng-template",null,2,p["\u0275\u0275templateRefExtractor"])),2&e){const e=p["\u0275\u0275reference"](4);p["\u0275\u0275property"]("tuiDropdownContent",e)("tuiDropdownSelection",t.predicate)("pseudoFocused",t.focused)("ngModel",t.value)}},directives:[f.a,g.a,i.NgControlStatus,i.NgModel,o.t,D.a,o.s,v.a,P.a],styles:[".menu[_ngcontent-%COMP%]{width:200px}"],changeDetection:0}),Object(x.a)([h.tuiPure],e.prototype,"getFilteredItems",null),e})();var M=n("EPR0"),T=n("yHor"),b=n("zGJC"),H=n("zV1d"),k=n("u8jZ");function F(e,t){if(1&e&&(p["\u0275\u0275text"](0," \u0414\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430 "),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"tuiDropdownSelection"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," \u043d\u0443\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u0441 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c \u0440\u044f\u0434\u043e\u043c \u0441 \u0432\u044b\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435. "),p["\u0275\u0275elementStart"](4,"tui-doc-example",2),p["\u0275\u0275element"](5,"tui-dropdown-selection-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-doc-example",3),p["\u0275\u0275element"](7,"tui-dropdown-selection-example-2"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",e.example2)}}function I(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",17),p["\u0275\u0275text"](1," \u0422\u0443\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 "),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275text"](3,"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0435\u0451 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0442\u044c"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"button",18),p["\u0275\u0275text"](5,"\u041a\u043d\u043e\u043f\u043a\u0430"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]())}function A(e,t){1&e&&p["\u0275\u0275text"](0," \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 ")}function L(e,t){1&e&&(p["\u0275\u0275text"](0," \u041e\u043f\u043e\u0440\u043d\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430, \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438. \u041f\u0440\u0438 "),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"sided"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3,' \u2014 \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f "\u043f\u0440\u0438\u043b\u0438\u043f\u0430\u0435\u0442" \u043a \u0445\u043e\u0441\u0442\u0443, \u0438\u043d\u0430\u0447\u0435, \u043f\u0440\u0438 '),p["\u0275\u0275elementStart"](4,"code"),p["\u0275\u0275text"](5,"tuiDropdownLimitWidth !== 'fixed'"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](6," \u2014 \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0445\u043e\u0441\u0442\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0430 \u0432\u044b\u0440\u043e\u0432\u043d\u0435\u043d\u0430. \u041f\u0440\u0438 "),p["\u0275\u0275elementStart"](7,"code"),p["\u0275\u0275text"](8,"tuiDropdownLimitWidth === 'fixed'"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](9," \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u0438 \u043b\u0435\u0432\u0430\u044f \u0438 \u043f\u0440\u0430\u0432\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435 \u0445\u043e\u0441\u0442\u0430. "))}function R(e,t){1&e&&p["\u0275\u0275text"](0," \u0417\u0430\u0434\u0430\u0442\u044c \u044f\u0432\u043d\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 ")}function W(e,t){1&e&&p["\u0275\u0275text"](0," \u0417\u0430\u0434\u0430\u0442\u044c \u044f\u0432\u043d\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0441\u0447\u0438\u0442\u0430\u044e\u0449\u0438\u0439\u0441\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u043e\u043c \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u2014 \u043f\u0440\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0444\u043e\u043a\u0443\u0441\u0430 \u0438\u0437 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 Tab/Shift+Tab \u044d\u0442\u043e\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u043e\u0432\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u0444\u043e\u043a\u0443\u0441\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430. ")}function N(e,t){1&e&&p["\u0275\u0275text"](0," \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435 ")}function O(e,t){1&e&&p["\u0275\u0275text"](0," \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f ")}function U(e,t){1&e&&p["\u0275\u0275text"](0," \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 ")}function j(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"strong"),p["\u0275\u0275text"](1,"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u044b"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](2,". \u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0449\u0443\u044e \u043d\u0430 \u0432\u0445\u043e\u0434 \u043e\u0431\u044a\u0435\u043a\u0442 "),p["\u0275\u0275elementStart"](3,"code"),p["\u0275\u0275text"](4,"Range"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0439, \u043d\u0443\u0436\u043d\u043e \u043b\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0443. "))}function Q(e,t){1&e&&p["\u0275\u0275text"](0," \u041f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f ")}function _(e,t){1&e&&p["\u0275\u0275text"](0," \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0443 \u0441\u0431\u043e\u043a\u0443 \u043e\u0442 \u0445\u043e\u0441\u0442\u0430 ")}function Y(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo"),p["\u0275\u0275elementStart"](1,"p",4),p["\u0275\u0275text"](2," \u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442, "),p["\u0275\u0275elementStart"](3,"b"),p["\u0275\u0275text"](4,"\u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0443 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](6,I,6,0,"ng-template",5,6,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"tui-doc-documentation"),p["\u0275\u0275template"](9,A,1,0,"ng-template",7),p["\u0275\u0275template"](10,L,10,0,"ng-template",8),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().tuiDropdownAlign=t})),p["\u0275\u0275template"](11,R,1,0,"ng-template",9),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().tuiDropdownDirection=t})),p["\u0275\u0275template"](12,W,1,0,"ng-template",10),p["\u0275\u0275template"](13,N,1,0,"ng-template",11),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().tuiDropdownLimitWidth=t})),p["\u0275\u0275template"](14,O,1,0,"ng-template",12),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().tuiDropdownMinHeight=t})),p["\u0275\u0275template"](15,U,1,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().tuiDropdownMaxHeight=t})),p["\u0275\u0275template"](16,j,6,0,"ng-template",14),p["\u0275\u0275template"](17,Q,1,0,"ng-template",15),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().position=t})),p["\u0275\u0275template"](18,_,1,0,"ng-template",16),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().tuiDropdownSided=t})),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275reference"](7),t=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("tuiDropdownSelectionPosition",t.position)("tuiDropdownContent",e)("tuiDropdownMinHeight",t.tuiDropdownMinHeight)("tuiDropdownMaxHeight",t.tuiDropdownMaxHeight)("tuiDropdownAlign",t.tuiDropdownAlign)("tuiDropdownDirection",t.tuiDropdownDirection)("tuiDropdownLimitWidth",t.tuiDropdownLimitWidth)("tuiDropdownSided",t.tuiDropdownSided),p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("documentationPropertyValues",t.alignVariants)("documentationPropertyValue",t.tuiDropdownAlign),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",t.dropdownDirectionVariants)("documentationPropertyValue",t.tuiDropdownDirection),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("documentationPropertyValues",t.tuiDropdownLimitWidthVariants)("documentationPropertyValue",t.tuiDropdownLimitWidth),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownMinHeight),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownMaxHeight),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("documentationPropertyValues",t.positionVariants)("documentationPropertyValue",t.position),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownSided)}}function B(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",19),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),p["\u0275\u0275elementStart"](3,"code"),p["\u0275\u0275text"](4,"TuiDropdownModule"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),p["\u0275\u0275element"](6,"tui-doc-code",20),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"li"),p["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),p["\u0275\u0275element"](9,"tui-doc-code",21),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",e.exampleImportModule),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}let z=(()=>{class e{constructor(){this.exampleImportModule="import {TuiDropdownSelectionModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiDropdownSelectionModule\n    ],\n...\n",this.exampleInsertTemplate='<div tuiDropdownSelection [tuiDropdownContent]="dropdownContent">\n    \u0425\u043e\u0441\u0442-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\n</div>\n\n<ng-template #dropdownContent="polymorpheus"\n             polymorpheus>\n    \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438\n</ng-template>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-selection-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownSelectionExample1 {}\n",HTML:'\u0412 \u0430\u0431\u0437\u0430\u0446\u0435 \u043d\u0438\u0436\u0435 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u0437\u043e\u0432\u0435\u0442 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438:\n<p\n    tuiDropdownSelection\n    tuiDropdownSelectionPosition="selection"\n    tuiDropdownContent="&nbsp;&nbsp;\u0422\u0435\u043a\u0441\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438&nbsp;&nbsp;"\n>\n    \u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442, <b>\u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c</b> \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0443\n</p>\n'},this.example2={TypeScript:"import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\nimport {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';\nimport {EMPTY_QUERY, setNativeFocused, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';\nimport {TuiOptionComponent} from '@taiga-ui/core';\nimport {getWordRange} from '@taiga-ui/kit';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nexport interface User {\n    readonly name: string;\n    readonly avatar: string;\n    readonly login: string;\n}\n\n@Component({\n    selector: 'tui-dropdown-selection-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownSelectionExample2 {\n    value = '\u041d\u0430\u0431\u0435\u0440\u0438\u0442\u0435 @ \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438';\n\n    @ViewChildren(TuiOptionComponent, {read: ElementRef})\n    private readonly options: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;\n\n    predicate: TuiBooleanHandler<Range> = range =>\n        getWordRange(range).toString().startsWith('@');\n\n    readonly items = [\n        {\n            name: 'Alexander Inkin',\n            avatar,\n            login: 'a.inkin',\n        },\n        {\n            name: 'Roman Sedov',\n            avatar: '',\n            login: 'r.sedov',\n        },\n    ];\n\n    get focused(): true | null {\n        return !!this.options.length || null;\n    }\n\n    onArrow(event: KeyboardEvent, which: 'first' | 'last') {\n        const item = this.options[which];\n\n        if (!item) {\n            return;\n        }\n\n        event.preventDefault();\n        setNativeFocused(item.nativeElement);\n    }\n\n    filterItems(textarea: HTMLTextAreaElement): ReadonlyArray<User> {\n        const search = this.getCurrentSearch(textarea).replace('@', '');\n\n        return this.getFilteredItems(this.items, search);\n    }\n\n    onClick(login: string, textarea: HTMLTextAreaElement) {\n        const search = this.getCurrentSearch(textarea);\n        const value = this.value.replace(search, login);\n        const caret = value.indexOf(login) + login.length;\n\n        this.value = value;\n        setNativeFocused(textarea);\n        textarea.value = value;\n        textarea.setSelectionRange(caret, caret);\n    }\n\n    private getCurrentSearch(textarea: HTMLTextAreaElement): string {\n        return textarea.value.substring(\n            textarea.value.indexOf('@'),\n            textarea.selectionStart,\n        );\n    }\n\n    @tuiPure\n    private getFilteredItems(\n        items: ReadonlyArray<User>,\n        search: string,\n    ): ReadonlyArray<User> {\n        return items.filter(\n            ({name, login}) => login.startsWith(search) || name.startsWith(search),\n        );\n    }\n}\n",HTML:'<tui-text-area\n    #textarea\n    tuiDropdownSelectionPosition="word"\n    [tuiDropdownContent]="dropdown"\n    [tuiDropdownSelection]="predicate"\n    [pseudoFocused]="focused"\n    [(ngModel)]="value"\n    (keydown.arrowUp)="onArrow($event, \'last\')"\n    (keydown.arrowDown)="onArrow($event, \'first\')"\n>\n    \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\n</tui-text-area>\n<ng-template #dropdown>\n    <tui-data-list\n        *ngIf="textarea.nativeFocusableElement"\n        class="menu"\n        (keydown.escape)="textarea.nativeFocusableElement.focus()"\n    >\n        <button\n            *ngFor="let item of filterItems(textarea.nativeFocusableElement)"\n            tuiOption\n            (click)="onClick(item.login, textarea.nativeFocusableElement)"\n        >\n            {{item.name}}\n            <tui-avatar\n                size="s"\n                [rounded]="true"\n                [avatarUrl]="item.avatar"\n                [text]="item.name"\n            ></tui-avatar>\n        </button>\n    </tui-data-list>\n</ng-template>\n',LESS:".menu {\n    width: 200px;\n}\n"},this.positionVariants=["selection","word","tag"],this.open=!1,this.position="selection",this.tuiDropdownMinHeight=u.DEFAULT_MIN_HEIGHT,this.tuiDropdownMaxHeight=u.DEFAULT_MAX_HEIGHT,this.tuiDropdownSided=!1,this.alignVariants=["right","left"],this.tuiDropdownAlign=this.alignVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.tuiDropdownDirection=null,this.tuiDropdownLimitWidthVariants=["fixed","min","auto"],this.tuiDropdownLimitWidth=this.tuiDropdownLimitWidthVariants[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-dropdown-selection"]],decls:4,vars:0,consts:[["header","DropdownSelection","package","KIT"],["pageTab",""],["id","selection","heading","\u043f\u0440\u0438\u043c\u0435\u0440",3,"content"],["id","textarea","heading","textarea",3,"content"],["tuiDropdownSelection","",3,"tuiDropdownSelectionPosition","tuiDropdownContent","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownSided"],["polymorpheus",""],["dropdownContent","polymorpheus"],["documentationPropertyName","tuiDropdownContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownHost","documentationPropertyMode","input","documentationPropertyType","HTMLElement | null"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSelection","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<Range>"],["documentationPropertyName","tuiDropdownSelectionPosition","documentationPropertyMode","input","documentationPropertyType","TuiDropdownPosition",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],["tuiButton","","type","button"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,F,8,2,"ng-template",1),p["\u0275\u0275template"](2,Y,19,19,"ng-template",1),p["\u0275\u0275template"](3,B,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[c.a,m.a,s.a,w,V,M.a,g.a,d.e,T.a,b.a,H.a,k.a],styles:[".dropdown[_ngcontent-%COMP%]{max-width:320px;padding:8px 20px}"],changeDetection:0}),e})(),$=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,d.c,l.TuiDropdownSelectionModule,u.TuiButtonModule,l.TuiTextAreaModule,l.TuiAvatarModule,u.TuiDataListModule,...a.e,r.f.forChild(Object(a.n)(z))]]}),e})()}}]);