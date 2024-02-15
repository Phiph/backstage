/*! For license information please see 462730f8.57b20f40.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[5826],{645950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var r=t(824246),o=t(511151);const c={id:"plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",title:"NewlineDelimitedJsonCollatorFactory",description:"API reference for NewlineDelimitedJsonCollatorFactory"},i=void 0,l={id:"reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",title:"NewlineDelimitedJsonCollatorFactory",description:"API reference for NewlineDelimitedJsonCollatorFactory",source:"@site/../docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",permalink:"/docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",title:"NewlineDelimitedJsonCollatorFactory",description:"API reference for NewlineDelimitedJsonCollatorFactory"}},s={},a=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory",children:(0,r.jsx)(n.code,{children:"NewlineDelimitedJsonCollatorFactory"})})]}),"\n",(0,r.jsx)(n.p,{children:'Factory class producing a collator that can be used to index documents sourced from the latest newline delimited JSON file matching a given search pattern. "Latest" is determined by the name of the file (last alphabetically is considered latest).'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class NewlineDelimitedJsonCollatorFactory implements DocumentCollatorFactory \n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Implements:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-common.documentcollatorfactory",children:"DocumentCollatorFactory"})]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["The reader provided must implement the ",(0,r.jsx)(n.code,{children:"search()"})," method as well as the ",(0,r.jsx)(n.code,{children:"readUrl"})," method whose response includes the ",(0,r.jsx)(n.code,{children:"stream()"})," method. Naturally, the reader must also be configured to understand the given search pattern."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example configuration using Google Cloud Storage, which would return the latest file under the ",(0,r.jsx)(n.code,{children:"bucket"})," GCS bucket with files like ",(0,r.jsx)(n.code,{children:"xyz-2021.ndjson"})," or ",(0,r.jsx)(n.code,{children:"xyz-2022.ndjson"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"indexBuilder.addCollator({\n  schedule,\n  factory: NewlineDelimitedJsonCollatorFactory.fromConfig(env.config, {\n    type: 'techdocs',\n    searchPattern: 'https://storage.cloud.google.com/bucket/xyz-*',\n    reader: env.reader,\n    logger: env.logger,\n  })\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Modifiers"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.type",children:"type"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"readonly"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.visibilitypermission",children:"visibilityPermission"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"readonly"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permission"})," | undefined"]}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Modifiers"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.fromconfig",children:"fromConfig(_config, options)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"static"})}),(0,r.jsx)(n.td,{children:"Returns a NewlineDelimitedJsonCollatorFactory instance from configuration and a set of options."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.newlinedelimitedjsoncollatorfactory.getcollator",children:"getCollator()"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,c={},a=null,u=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,r)&&!s.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:u,props:c,_owner:l.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function j(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||p}function x(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var g=b.prototype=new x;g.constructor=b,y(g,j.prototype),g.isPureReactComponent=!0;var v=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,r){var o,c={},i=null,l=null;if(null!=n)for(o in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(i=""+n.key),n)_.call(n,o)&&!w.hasOwnProperty(o)&&(c[o]=n[o]);var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];c.children=a}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:t,type:e,key:i,ref:l,props:c,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,o,c,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case r:s=!0}}if(s)return i=i(s=e),e=""===c?"."+R(s,0):c,v(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),P(i,n,o,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),n.push(i)),1;if(s=0,c=""===c?".":c+":",v(e))for(var a=0;a<e.length;a++){var u=c+R(l=e[a],a);s+=P(l,n,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),a=0;!(l=e.next()).done;)s+=P(l=l.value,n,o,u=c+R(l,a++),i);else if("object"===l)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,n,t){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function D(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},O={transition:null},F={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=j,n.Fragment=o,n.Profiler=i,n.PureComponent=b,n.StrictMode=c,n.Suspense=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,l=k.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)_.call(n,a)&&!w.hasOwnProperty(a)&&(o[a]=void 0===n[a]&&void 0!==s?s[a]:n[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:t,type:e.type,key:c,ref:i,props:o,_owner:l}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},n.createElement=C,n.createFactory=function(e){var n=C.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:D}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=O.transition;O.transition={};try{e()}finally{O.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return N.current.useCallback(e,n)},n.useContext=function(e){return N.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return N.current.useDeferredValue(e)},n.useEffect=function(e,n){return N.current.useEffect(e,n)},n.useId=function(){return N.current.useId()},n.useImperativeHandle=function(e,n,t){return N.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return N.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return N.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return N.current.useMemo(e,n)},n.useReducer=function(e,n,t){return N.current.useReducer(e,n,t)},n.useRef=function(e){return N.current.useRef(e)},n.useState=function(e){return N.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return N.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return N.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(667294);const o={},c=r.createContext(o);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);