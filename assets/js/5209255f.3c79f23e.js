/*! For license information please see 5209255f.3c79f23e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[438429],{289077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var r=n(824246),o=n(511151);const a={id:"backend-openapi-utils.internal.templatetodocpath",title:"internal.TemplateToDocPath",description:"API reference for internal.TemplateToDocPath"},c=void 0,s={id:"reference/backend-openapi-utils.internal.templatetodocpath",title:"internal.TemplateToDocPath",description:"API reference for internal.TemplateToDocPath",source:"@site/../docs/reference/backend-openapi-utils.internal.templatetodocpath.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.templatetodocpath",permalink:"/docs/reference/backend-openapi-utils.internal.templatetodocpath",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.internal.templatetodocpath.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.templatetodocpath",title:"internal.TemplateToDocPath",description:"API reference for internal.TemplateToDocPath"}},u={},i=[{value:"Example",id:"example",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils",children:(0,r.jsx)(t.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,r.jsx)(t.code,{children:"internal"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.templatetodocpath",children:(0,r.jsx)(t.code,{children:"TemplateToDocPath"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Extract path as specified in OpenAPI ",(0,r.jsx)(t.code,{children:"Doc"})," based on request path"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type TemplateToDocPath<Doc extends PathDoc, Path extends DocPathTemplate<Doc>> = ValueOf<{\n    [Template in DocPath<Doc>]: Path extends PathTemplate<Template> ? Template : never;\n}>;\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.pathdoc",children:"PathDoc"}),", ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.docpathtemplate",children:"DocPathTemplate"}),", ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.valueof",children:"ValueOf"}),", ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.docpath",children:"DocPath"}),", ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-openapi-utils.internal.pathtemplate",children:"PathTemplate"})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'const spec = {\n  paths: {\n      "/posts/{postId}/comments/{commentId}": {},\n      "/posts/comments": {},\n  }\n};\nconst specPathWithParams: DocPath<typeof spec, "/posts/:postId/comments/:commentId"> = "/posts/{postId}/comments/{commentId}";\nconst specPathWithoutParams: DocPath<typeof spec, "/posts/comments"> = "/posts/comments";\n'})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,a={},i=null,l=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function _(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var x=v.prototype=new _;x.constructor=v,m(x,b.prototype),x.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,P={current:null},g={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},c=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,o)&&!g.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var i=Array(u),l=0;l<u;l++)i[l]=arguments[l+2];a.children=i}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:n,type:e,key:c,ref:s,props:a,_owner:P.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,o,a,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return c=c(u=e),e=""===a?"."+w(u,0):a,k(c)?(o="",null!=e&&(o=e.replace(T,"$&/")+"/"),D(c,t,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(T,"$&/")+"/")+e)),t.push(c)),1;if(u=0,a=""===a?".":a+":",k(e))for(var i=0;i<e.length;i++){var l=a+w(s=e[i],i);u+=D(s,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(s=e.next()).done;)u+=D(s=s.value,t,o,l=a+w(s,i++),c);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function R(e,t,n){if(null==e)return e;var r=[],o=0;return D(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},$={transition:null},I={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:$,ReactCurrentOwner:P};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=c,t.PureComponent=v,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=P.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in t)j.call(t,i)&&!g.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==u?u[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){u=Array(i);for(var l=0;l<i;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:a,ref:c,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,n){return C.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,n){return C.current.useReducer(e,t,n)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return C.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return C.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||c:a(e),r.createElement(o.Provider,{value:s},t)}}}]);