/*! For license information please see bebdb5c5.1006ba8f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[498193],{295413:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=t(824246),o=t(511151);const a={id:"backend-openapi-utils.internal.docparameters",title:"internal.DocParameters",description:"API reference for internal.DocParameters"},c=void 0,u={id:"reference/backend-openapi-utils.internal.docparameters",title:"internal.DocParameters",description:"API reference for internal.DocParameters",source:"@site/../docs/reference/backend-openapi-utils.internal.docparameters.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.docparameters",permalink:"/docs/reference/backend-openapi-utils.internal.docparameters",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.internal.docparameters.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.docparameters",title:"internal.DocParameters",description:"API reference for internal.DocParameters"}},i={},s=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-openapi-utils",children:(0,n.jsx)(r.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,n.jsx)(r.code,{children:"internal"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-openapi-utils.internal.docparameters",children:(0,n.jsx)(r.code,{children:"DocParameters"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type DocParameters<Doc extends RequiredDoc, Path extends Extract<keyof Doc['paths'], string>, Method extends keyof Doc['paths'][Path]> = {\n    [Index in keyof DocOperation<Doc, Path, Method>['parameters'] as FromNumberStringToNumber<Index>]: DocParameter<Doc, Path, Method, Index>;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-openapi-utils.internal.requireddoc",children:"RequiredDoc"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-openapi-utils.internal.docoperation",children:"DocOperation"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-openapi-utils.internal.fromnumberstringtonumber",children:"FromNumberStringToNumber"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-openapi-utils.internal.docparameter",children:"DocParameter"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,a={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:u.current}}r.Fragment=a,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function _(){}function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var k=v.prototype=new _;k.constructor=v,h(k,b.prototype),k.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,g={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,n){var o,a={},c=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,o)&&!S.hasOwnProperty(o)&&(a[o]=r[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:t,type:e,key:c,ref:u,props:a,_owner:g.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function D(e,r,o,a,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return c=c(i=e),e=""===a?"."+w(i,0):a,x(c)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),D(c,r,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),r.push(c)),1;if(i=0,a=""===a?".":a+":",x(e))for(var s=0;s<e.length;s++){var l=a+w(u=e[s],s);i+=D(u,r,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)i+=D(u=u.value,r,o,l=a+w(u,s++),c);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,r,t){if(null==e)return e;var n=[],o=0;return D(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},N={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:g};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=c,r.PureComponent=v,r.StrictMode=a,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,u=g.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)j.call(r,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==i?i[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:t,type:e.type,key:a,ref:c,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return $.current.useCallback(e,r)},r.useContext=function(e){return $.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return $.current.useDeferredValue(e)},r.useEffect=function(e,r){return $.current.useEffect(e,r)},r.useId=function(){return $.current.useId()},r.useImperativeHandle=function(e,r,t){return $.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return $.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return $.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return $.current.useMemo(e,r)},r.useReducer=function(e,r,t){return $.current.useReducer(e,r,t)},r.useRef=function(e){return $.current.useRef(e)},r.useState=function(e){return $.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return $.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return $.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>a});var n=t(667294);const o=n.createContext({});function a(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||c:a(e),n.createElement(o.Provider,{value:u},r)}}}]);