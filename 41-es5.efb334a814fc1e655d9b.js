function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{q2JX:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiEditorModule",(function(){return H}));var o,r=n("2kYt"),a=n("nIj0"),i=n("sEIs"),l=n("SVIu"),u=n("vgRF"),c=n("Qq0t"),d=n("Piem"),p=n("EM62"),s=n("K/iL"),m=n("WupT"),f=n("OZlg"),y=n("e0eB"),h=n("aPft"),g=n("iyc4"),x=n("zV1d"),b=n("trX1"),T=n("PVE+"),C=((o=function(){function e(){_classCallCheck(this,e),this.model='WYSIWYG (What you see is what you get) \u2014 Rich Text Editor \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u0444\u043e\u0440\u043c\u0430\u043c\u0438 Angular.<p><font size="6">\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a</font></p><font size="4">\u041e\u0442\u0434\u0435\u043b\u043e\u043c \u0423\u0424\u041c\u0421 \u0420\u043e\u0441\u0441\u0438\u0438 \u043f\u043e <font color="#ff78a7">\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u043e\u043c\u0443 \u043a\u0440\u0430\u044e</font> \u0432 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u043c \u0440\u0430\u0439\u043e\u043d\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u041f\u0435\u0442\u0440\u043e\u043f\u0430\u043b\u043e\u0432\u0441\u043a-\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u041e\u0442\u0434\u0435\u043b\u043e\u043c \u0423\u0424\u041c\u0421 <span style="background-color: rgb(163, 129, 255);">\u0420\u043e\u0441\u0441\u0438\u0438</span></font><blockquote>\u0420\u0430\u0441\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044c <u>\u0434\u0435\u0431\u0435\u0442\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439</u> <b>\u0432\u0435\u0437\u0434\u0435</b>, \u0433\u0434\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0438 \u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u043e\u0442 \u0431\u0430\u043d\u043a\u0430 \u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u043a\u044d\u0448\u0431\u044d\u043a\u0430</blockquote><p style="text-align: right;">\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0441\u0447\u0435\u0442\u0430\u043c \u0438 \u043a\u0430\u0440\u0442\u0430\u043c, \u043b\u044e\u0431\u044b\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0438 \u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b, \u043a\u0440\u0443\u0433\u043b\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u0447\u0430\u0442\u0435 \u2014 \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u0438 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0431\u0430\u043d\u043a\u0435</p>'}return _createClass(e,[{key:"onClick",value:function(){this.model="<b>HTML FTW!</b>"}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=p["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-editor-example-1"]],decls:12,vars:3,consts:[["tuiButton","","type","button",3,"click"],["exampleText","\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u0431\u043e\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u044b",1,"editor",3,"ngModel","ngModelChange"],[3,"content"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275elementStart"](1,"button",0),p["\u0275\u0275listener"]("click",(function(){return t.onClick()})),p["\u0275\u0275text"](2,"\u0417\u0430\u0434\u0430\u0442\u044c \u0438\u0437\u0432\u043d\u0435"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-editor",1),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model=e})),p["\u0275\u0275text"](4," \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0431\u043e\u044f\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"h4"),p["\u0275\u0275text"](6,"HTML:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](7,"tui-editor-socket",2),p["\u0275\u0275elementStart"](8,"h4"),p["\u0275\u0275text"](9,"\u0422\u0435\u043a\u0441\u0442:"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"p"),p["\u0275\u0275text"](11),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngModel",t.model),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("content",t.model),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](t.model))},directives:[x.a,b.a,a.NgControlStatus,a.NgModel,T.a],styles:[".editor[_ngcontent-%COMP%]{max-height:300px}"],changeDetection:0}),o),v=n("EPR0"),_=n("yHor"),E=n("zGJC"),P=n("FSyC"),S=n("u8jZ");function M(e,t){if(1&e&&(p["\u0275\u0275text"](0," Rich Text Editor \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u0444\u043e\u0440\u043c\u0430\u043c\u0438 Angular. "),p["\u0275\u0275elementStart"](1,"tui-notification",2),p["\u0275\u0275text"](2," \u042d\u0442\u043e\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e. "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",3),p["\u0275\u0275element"](4,"tui-editor-example-1"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("hasCloseButton",!1),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",n.example1)}}function k(e,t){1&e&&p["\u0275\u0275text"](0," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0444\u043e\u0440\u043c\u044b disabled (\u0447\u0435\u0440\u0435\u0437 formControl.disable()) ")}function w(e,t){1&e&&p["\u0275\u0275text"](0," \u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044f ")}function O(e,t){1&e&&p["\u0275\u0275text"](0," \u041d\u0430\u0431\u043e\u0440 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ")}function I(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo"),p["\u0275\u0275elementStart"](1,"tui-editor",4),p["\u0275\u0275text"](2," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-documentation"),p["\u0275\u0275template"](4,k,1,0,"ng-template",5),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().disabled=e})),p["\u0275\u0275template"](5,w,1,0,"ng-template",6),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().exampleText=e})),p["\u0275\u0275template"](6,O,1,0,"ng-template",7),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().tools=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](7,"inherited-documentation")}if(2&e){var o=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formControl",o.control)("focusable",o.focusable)("exampleText",o.exampleText)("readOnly",o.readOnly)("tools",o.tools)("pseudoInvalid",o.pseudoInvalid)("pseudoFocused",o.pseudoFocused)("pseudoHovered",o.pseudoHovered),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("documentationPropertyValue",o.disabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",o.exampleText),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",o.toolsVariants)("documentationPropertyValue",o.tools)}}function V(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",8),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0444\u043e\u0440\u043c\u0430\u043c\u0438 \u0438\u0437 Angular \u0438 \u043c\u043e\u0434\u0443\u043b\u044c "),p["\u0275\u0275elementStart"](3,"code"),p["\u0275\u0275text"](4,"TuiEditorModule"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),p["\u0275\u0275element"](6,"tui-doc-code",9),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"li"),p["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),p["\u0275\u0275element"](9,"tui-doc-code",10),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var A,R,j=((A=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.apply(this,arguments)).exampleImportModule="import {FormsModule} from '@angular/forms';\nimport {TuiEditorModule} from '@taiga-ui/addon-editor';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiEditorModule,\n        FormsModule,\n    ],\n...\n",e.exampleInsertTemplate='<tui-editor\n    exampleText="\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u0432\u043e\u0434\u0430"\n    [(ngModel)]="model">\n    \u041f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440\n</tui-editor>\n',e.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-editor-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorExample1 {\n    model =\n        'WYSIWYG (What you see is what you get) \u2014 Rich Text Editor \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u0444\u043e\u0440\u043c\u0430\u043c\u0438 Angular.' +\n        '<p><font size=\"6\">\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a</font></p><font size=\"4\">\u041e\u0442\u0434\u0435\u043b\u043e\u043c \u0423\u0424\u041c\u0421 \u0420\u043e\u0441\u0441\u0438\u0438 \u043f\u043e <font color=\"#ff78a7\">' +\n        '\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u043e\u043c\u0443 \u043a\u0440\u0430\u044e</font> \u0432 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u043c \u0440\u0430\u0439\u043e\u043d\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u041f\u0435\u0442\u0440\u043e\u043f\u0430\u043b\u043e\u0432\u0441\u043a-\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u041e\u0442\u0434\u0435\u043b\u043e\u043c \u0423\u0424\u041c\u0421 ' +\n        '<span style=\"background-color: rgb(163, 129, 255);\">\u0420\u043e\u0441\u0441\u0438\u0438</span></font><blockquote>\u0420\u0430\u0441\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044c ' +\n        '<u>\u0434\u0435\u0431\u0435\u0442\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439</u> <b>\u0432\u0435\u0437\u0434\u0435</b>, \u0433\u0434\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0438 \u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u043e\u0442 \u0431\u0430\u043d\u043a\u0430 \u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432, ' +\n        '\u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u043a\u044d\u0448\u0431\u044d\u043a\u0430</blockquote><p style=\"text-align: right;\">\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0441\u0447\u0435\u0442\u0430\u043c \u0438 ' +\n        '\u043a\u0430\u0440\u0442\u0430\u043c, \u043b\u044e\u0431\u044b\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0438 \u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b, \u043a\u0440\u0443\u0433\u043b\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u0447\u0430\u0442\u0435 \u2014 \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u043c \u0438 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0431\u0430\u043d\u043a\u0435</p>';\n\n    onClick() {\n        this.model = '<b>HTML FTW!</b>';\n    }\n}\n",HTML:'<p>\n    <button tuiButton type="button" (click)="onClick()">\u0417\u0430\u0434\u0430\u0442\u044c \u0438\u0437\u0432\u043d\u0435</button>\n</p>\n<tui-editor\n    class="editor"\n    exampleText="\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u0431\u043e\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u044b"\n    [(ngModel)]="model"\n>\n    \u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0431\u043e\u044f\n</tui-editor>\n<h4>HTML:</h4>\n<tui-editor-socket [content]="model"></tui-editor-socket>\n<h4>\u0422\u0435\u043a\u0441\u0442:</h4>\n<p>{{model}}</p>\n',LESS:".editor {\n    max-height: 300px;\n}\n"},e.control=new a.FormControl,e.toolsVariants=[u.defaultEditorTools,[u.TuiEditorTool.Bold,u.TuiEditorTool.Italic,u.TuiEditorTool.Strikethrough,u.TuiEditorTool.HR]],e.tools=e.toolsVariants[0],e}return n}(m.a)).\u0275fac=function(e){return F(e||A)},A.\u0275cmp=p["\u0275\u0275defineComponent"]({type:A,selectors:[["example-tui-editor"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:s.a,useExisting:Object(p.forwardRef)((function(){return A}))}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","Editor","package","ADDON-EDITOR"],["pageTab",""],["status","warning",1,"tui-space_top-4",3,"hasCloseButton"],["id","basic","heading","\u0411\u0430\u0437\u043e\u0432\u044b\u0439",3,"content"],[3,"formControl","focusable","exampleText","readOnly","tools","pseudoInvalid","pseudoFocused","pseudoHovered"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tools","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiEditorTool>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,M,5,2,"ng-template",1),p["\u0275\u0275template"](2,I,8,12,"ng-template",1),p["\u0275\u0275template"](3,V,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[f.a,y.a,h.a,g.a,C,v.a,b.a,a.NgControlStatus,a.FormControlDirective,_.a,E.a,P.a,S.a],encapsulation:2,changeDetection:0}),A),F=p["\u0275\u0275getInheritedFactory"](j),H=((R=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:R}),R.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||R)},imports:[[r.c,a.FormsModule,a.ReactiveFormsModule,u.TuiEditorModule,u.TuiEditorSocketModule,c.TuiNotificationModule,c.TuiButtonModule,d.a].concat(_toConsumableArray(l.e),[i.g.forChild(Object(l.n)(j))])]}),R)}}]);