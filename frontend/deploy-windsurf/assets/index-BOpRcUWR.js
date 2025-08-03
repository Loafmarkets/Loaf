var jk=Object.defineProperty;var Sk=(e,t,n)=>t in e?jk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Be=(e,t,n)=>Sk(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function kk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xp={exports:{}},Xs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function Ck(){if(_v)return Xs;_v=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(o,s,c){var d=null;if(c!==void 0&&(d=""+c),s.key!==void 0&&(d=""+s.key),"key"in s){c={};for(var h in s)h!=="key"&&(c[h]=s[h])}else c=s;return s=c.ref,{$$typeof:e,type:o,key:d,ref:s!==void 0?s:null,props:c}}return Xs.Fragment=t,Xs.jsx=n,Xs.jsxs=n,Xs}var Tv;function Mk(){return Tv||(Tv=1,Xp.exports=Ck()),Xp.exports}var a=Mk(),Qp={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function _k(){if(zv)return Re;zv=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function k(P,$,G){this.props=P,this.context=$,this.refs=C,this.updater=G||j}k.prototype.isReactComponent={},k.prototype.setState=function(P,$){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,$,"setState")},k.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=k.prototype;function z(P,$,G){this.props=P,this.context=$,this.refs=C,this.updater=G||j}var D=z.prototype=new _;D.constructor=z,w(D,k.prototype),D.isPureReactComponent=!0;var L=Array.isArray,A={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function E(P,$,G,R,Y,J){return G=J.ref,{$$typeof:e,type:P,key:$,ref:G!==void 0?G:null,props:J}}function F(P,$){return E(P.type,$,void 0,void 0,void 0,P.props)}function te(P){return typeof P=="object"&&P!==null&&P.$$typeof===e}function de(P){var $={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(G){return $[G]})}var le=/\/+/g;function fe(P,$){return typeof P=="object"&&P!==null&&P.key!=null?de(""+P.key):$.toString(36)}function me(){}function pe(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(me,me):(P.status="pending",P.then(function($){P.status==="pending"&&(P.status="fulfilled",P.value=$)},function($){P.status==="pending"&&(P.status="rejected",P.reason=$)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function be(P,$,G,R,Y){var J=typeof P;(J==="undefined"||J==="boolean")&&(P=null);var Q=!1;if(P===null)Q=!0;else switch(J){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(P.$$typeof){case e:case t:Q=!0;break;case x:return Q=P._init,be(Q(P._payload),$,G,R,Y)}}if(Q)return Y=Y(P),Q=R===""?"."+fe(P,0):R,L(Y)?(G="",Q!=null&&(G=Q.replace(le,"$&/")+"/"),be(Y,$,G,"",function(ve){return ve})):Y!=null&&(te(Y)&&(Y=F(Y,G+(Y.key==null||P&&P.key===Y.key?"":(""+Y.key).replace(le,"$&/")+"/")+Q)),$.push(Y)),1;Q=0;var ue=R===""?".":R+":";if(L(P))for(var ce=0;ce<P.length;ce++)R=P[ce],J=ue+fe(R,ce),Q+=be(R,$,G,J,Y);else if(ce=y(P),typeof ce=="function")for(P=ce.call(P),ce=0;!(R=P.next()).done;)R=R.value,J=ue+fe(R,ce++),Q+=be(R,$,G,J,Y);else if(J==="object"){if(typeof P.then=="function")return be(pe(P),$,G,R,Y);throw $=String(P),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Q}function I(P,$,G){if(P==null)return P;var R=[],Y=0;return be(P,R,"","",function(J){return $.call(G,J,Y++)}),R}function H(P){if(P._status===-1){var $=P._result;$=$(),$.then(function(G){(P._status===0||P._status===-1)&&(P._status=1,P._result=G)},function(G){(P._status===0||P._status===-1)&&(P._status=2,P._result=G)}),P._status===-1&&(P._status=0,P._result=$)}if(P._status===1)return P._result.default;throw P._result}var ee=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function ne(){}return Re.Children={map:I,forEach:function(P,$,G){I(P,function(){$.apply(this,arguments)},G)},count:function(P){var $=0;return I(P,function(){$++}),$},toArray:function(P){return I(P,function($){return $})||[]},only:function(P){if(!te(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Re.Component=k,Re.Fragment=n,Re.Profiler=s,Re.PureComponent=z,Re.StrictMode=o,Re.Suspense=m,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,Re.__COMPILER_RUNTIME={__proto__:null,c:function(P){return A.H.useMemoCache(P)}},Re.cache=function(P){return function(){return P.apply(null,arguments)}},Re.cloneElement=function(P,$,G){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var R=w({},P.props),Y=P.key,J=void 0;if($!=null)for(Q in $.ref!==void 0&&(J=void 0),$.key!==void 0&&(Y=""+$.key),$)!V.call($,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&$.ref===void 0||(R[Q]=$[Q]);var Q=arguments.length-2;if(Q===1)R.children=G;else if(1<Q){for(var ue=Array(Q),ce=0;ce<Q;ce++)ue[ce]=arguments[ce+2];R.children=ue}return E(P.type,Y,void 0,void 0,J,R)},Re.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},Re.createElement=function(P,$,G){var R,Y={},J=null;if($!=null)for(R in $.key!==void 0&&(J=""+$.key),$)V.call($,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(Y[R]=$[R]);var Q=arguments.length-2;if(Q===1)Y.children=G;else if(1<Q){for(var ue=Array(Q),ce=0;ce<Q;ce++)ue[ce]=arguments[ce+2];Y.children=ue}if(P&&P.defaultProps)for(R in Q=P.defaultProps,Q)Y[R]===void 0&&(Y[R]=Q[R]);return E(P,J,void 0,void 0,null,Y)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(P){return{$$typeof:h,render:P}},Re.isValidElement=te,Re.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:H}},Re.memo=function(P,$){return{$$typeof:p,type:P,compare:$===void 0?null:$}},Re.startTransition=function(P){var $=A.T,G={};A.T=G;try{var R=P(),Y=A.S;Y!==null&&Y(G,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(ne,ee)}catch(J){ee(J)}finally{A.T=$}},Re.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},Re.use=function(P){return A.H.use(P)},Re.useActionState=function(P,$,G){return A.H.useActionState(P,$,G)},Re.useCallback=function(P,$){return A.H.useCallback(P,$)},Re.useContext=function(P){return A.H.useContext(P)},Re.useDebugValue=function(){},Re.useDeferredValue=function(P,$){return A.H.useDeferredValue(P,$)},Re.useEffect=function(P,$,G){var R=A.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(P,$)},Re.useId=function(){return A.H.useId()},Re.useImperativeHandle=function(P,$,G){return A.H.useImperativeHandle(P,$,G)},Re.useInsertionEffect=function(P,$){return A.H.useInsertionEffect(P,$)},Re.useLayoutEffect=function(P,$){return A.H.useLayoutEffect(P,$)},Re.useMemo=function(P,$){return A.H.useMemo(P,$)},Re.useOptimistic=function(P,$){return A.H.useOptimistic(P,$)},Re.useReducer=function(P,$,G){return A.H.useReducer(P,$,G)},Re.useRef=function(P){return A.H.useRef(P)},Re.useState=function(P){return A.H.useState(P)},Re.useSyncExternalStore=function(P,$,G){return A.H.useSyncExternalStore(P,$,G)},Re.useTransition=function(){return A.H.useTransition()},Re.version="19.1.0",Re}var Dv;function ag(){return Dv||(Dv=1,Qp.exports=_k()),Qp.exports}var S=ag();const pt=kk(S);var Zp={exports:{}},Qs={},Kp={exports:{}},Jp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function Tk(){return Pv||(Pv=1,function(e){function t(I,H){var ee=I.length;I.push(H);e:for(;0<ee;){var ne=ee-1>>>1,P=I[ne];if(0<s(P,H))I[ne]=H,I[ee]=P,ee=ne;else break e}}function n(I){return I.length===0?null:I[0]}function o(I){if(I.length===0)return null;var H=I[0],ee=I.pop();if(ee!==H){I[0]=ee;e:for(var ne=0,P=I.length,$=P>>>1;ne<$;){var G=2*(ne+1)-1,R=I[G],Y=G+1,J=I[Y];if(0>s(R,ee))Y<P&&0>s(J,R)?(I[ne]=J,I[Y]=ee,ne=Y):(I[ne]=R,I[G]=ee,ne=G);else if(Y<P&&0>s(J,ee))I[ne]=J,I[Y]=ee,ne=Y;else break e}}return H}function s(I,H){var ee=I.sortIndex-H.sortIndex;return ee!==0?ee:I.id-H.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,v=null,y=3,j=!1,w=!1,C=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var H=n(p);H!==null;){if(H.callback===null)o(p);else if(H.startTime<=I)o(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=n(p)}}function A(I){if(C=!1,L(I),!w)if(n(m)!==null)w=!0,V||(V=!0,fe());else{var H=n(p);H!==null&&be(A,H.startTime-I)}}var V=!1,E=-1,F=5,te=-1;function de(){return k?!0:!(e.unstable_now()-te<F)}function le(){if(k=!1,V){var I=e.unstable_now();te=I;var H=!0;try{e:{w=!1,C&&(C=!1,z(E),E=-1),j=!0;var ee=y;try{t:{for(L(I),v=n(m);v!==null&&!(v.expirationTime>I&&de());){var ne=v.callback;if(typeof ne=="function"){v.callback=null,y=v.priorityLevel;var P=ne(v.expirationTime<=I);if(I=e.unstable_now(),typeof P=="function"){v.callback=P,L(I),H=!0;break t}v===n(m)&&o(m),L(I)}else o(m);v=n(m)}if(v!==null)H=!0;else{var $=n(p);$!==null&&be(A,$.startTime-I),H=!1}}break e}finally{v=null,y=ee,j=!1}H=void 0}}finally{H?fe():V=!1}}}var fe;if(typeof D=="function")fe=function(){D(le)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,pe=me.port2;me.port1.onmessage=le,fe=function(){pe.postMessage(null)}}else fe=function(){_(le,0)};function be(I,H){E=_(function(){I(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(I){switch(y){case 1:case 2:case 3:var H=3;break;default:H=y}var ee=y;y=H;try{return I()}finally{y=ee}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var ee=y;y=I;try{return H()}finally{y=ee}},e.unstable_scheduleCallback=function(I,H,ee){var ne=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ne+ee:ne):ee=ne,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=ee+P,I={id:x++,callback:H,priorityLevel:I,startTime:ee,expirationTime:P,sortIndex:-1},ee>ne?(I.sortIndex=ee,t(p,I),n(m)===null&&I===n(p)&&(C?(z(E),E=-1):C=!0,be(A,ee-ne))):(I.sortIndex=P,t(m,I),w||j||(w=!0,V||(V=!0,fe()))),I},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(I){var H=y;return function(){var ee=y;y=H;try{return I.apply(this,arguments)}finally{y=ee}}}}(Jp)),Jp}var Av;function zk(){return Av||(Av=1,Kp.exports=Tk()),Kp.exports}var e0={exports:{}},dr={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function Dk(){if(Ev)return dr;Ev=1;var e=ag();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var o={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return dr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,dr.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},dr.flushSync=function(m){var p=d.T,x=o.p;try{if(d.T=null,o.p=2,m)return m()}finally{d.T=p,o.p=x,o.d.f()}},dr.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(m,p))},dr.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},dr.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,j=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?o.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:j}):x==="script"&&o.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:j,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},dr.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);o.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(m)},dr.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin);o.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},dr.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);o.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(m)},dr.requestFormReset=function(m){o.d.r(m)},dr.unstable_batchedUpdates=function(m,p){return m(p)},dr.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},dr.useFormStatus=function(){return d.H.useHostTransitionStatus()},dr.version="19.1.0",dr}var Ov;function Dw(){if(Ov)return e0.exports;Ov=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),e0.exports=Dk(),e0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function Pk(){if(Rv)return Qs;Rv=1;var e=zk(),t=ag(),n=Dw();function o(r){var i="https://react.dev/errors/"+r;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)i+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function c(r){var i=r,l=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(l=i.return),r=i.return;while(r)}return i.tag===3?l:null}function d(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function h(r){if(c(r)!==r)throw Error(o(188))}function m(r){var i=r.alternate;if(!i){if(i=c(r),i===null)throw Error(o(188));return i!==r?null:r}for(var l=r,u=i;;){var g=l.return;if(g===null)break;var b=g.alternate;if(b===null){if(u=g.return,u!==null){l=u;continue}break}if(g.child===b.child){for(b=g.child;b;){if(b===l)return h(g),r;if(b===u)return h(g),i;b=b.sibling}throw Error(o(188))}if(l.return!==u.return)l=g,u=b;else{for(var M=!1,T=g.child;T;){if(T===l){M=!0,l=g,u=b;break}if(T===u){M=!0,u=g,l=b;break}T=T.sibling}if(!M){for(T=b.child;T;){if(T===l){M=!0,l=b,u=g;break}if(T===u){M=!0,u=b,l=g;break}T=T.sibling}if(!M)throw Error(o(189))}}if(l.alternate!==u)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?r:i}function p(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r;for(r=r.child;r!==null;){if(i=p(r),i!==null)return i;r=r.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),de=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function fe(r){return r===null||typeof r!="object"?null:(r=le&&r[le]||r["@@iterator"],typeof r=="function"?r:null)}var me=Symbol.for("react.client.reference");function pe(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===me?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case w:return"Fragment";case k:return"Profiler";case C:return"StrictMode";case A:return"Suspense";case V:return"SuspenseList";case te:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case j:return"Portal";case D:return(r.displayName||"Context")+".Provider";case z:return(r._context.displayName||"Context")+".Consumer";case L:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case E:return i=r.displayName||null,i!==null?i:pe(r.type)||"Memo";case F:i=r._payload,r=r._init;try{return pe(r(i))}catch{}}return null}var be=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ne=[],P=-1;function $(r){return{current:r}}function G(r){0>P||(r.current=ne[P],ne[P]=null,P--)}function R(r,i){P++,ne[P]=r.current,r.current=i}var Y=$(null),J=$(null),Q=$(null),ue=$(null);function ce(r,i){switch(R(Q,i),R(J,r),R(Y,null),i.nodeType){case 9:case 11:r=(r=i.documentElement)&&(r=r.namespaceURI)?tv(r):0;break;default:if(r=i.tagName,i=i.namespaceURI)i=tv(i),r=rv(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}G(Y),R(Y,r)}function ve(){G(Y),G(J),G(Q)}function Fe(r){r.memoizedState!==null&&R(ue,r);var i=Y.current,l=rv(i,r.type);i!==l&&(R(J,r),R(Y,l))}function je(r){J.current===r&&(G(Y),G(J)),ue.current===r&&(G(ue),Is._currentValue=ee)}var Ye=Object.prototype.hasOwnProperty,Qe=e.unstable_scheduleCallback,ir=e.unstable_cancelCallback,Nr=e.unstable_shouldYield,gr=e.unstable_requestPaint,Ze=e.unstable_now,rt=e.unstable_getCurrentPriorityLevel,zt=e.unstable_ImmediatePriority,Dt=e.unstable_UserBlockingPriority,Pt=e.unstable_NormalPriority,ge=e.unstable_LowPriority,xe=e.unstable_IdlePriority,Ae=e.log,Oe=e.unstable_setDisableYieldValue,Ke=null,nt=null;function Bt(r){if(typeof Ae=="function"&&Oe(r),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Ke,r)}catch{}}var gt=Math.clz32?Math.clz32:wt,Ne=Math.log,qe=Math.LN2;function wt(r){return r>>>=0,r===0?32:31-(Ne(r)/qe|0)|0}var Vt=256,ar=4194304;function tr(r){var i=r&42;if(i!==0)return i;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function xr(r,i,l){var u=r.pendingLanes;if(u===0)return 0;var g=0,b=r.suspendedLanes,M=r.pingedLanes;r=r.warmLanes;var T=u&134217727;return T!==0?(u=T&~b,u!==0?g=tr(u):(M&=T,M!==0?g=tr(M):l||(l=T&~r,l!==0&&(g=tr(l))))):(T=u&~b,T!==0?g=tr(T):M!==0?g=tr(M):l||(l=u&~r,l!==0&&(g=tr(l)))),g===0?0:i!==0&&i!==g&&(i&b)===0&&(b=g&-g,l=i&-i,b>=l||b===32&&(l&4194048)!==0)?i:g}function Wt(r,i){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&i)===0}function Zo(r,i){switch(r){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(){var r=Vt;return Vt<<=1,(Vt&4194048)===0&&(Vt=256),r}function Rn(){var r=ar;return ar<<=1,(ar&62914560)===0&&(ar=4194304),r}function oe(r){for(var i=[],l=0;31>l;l++)i.push(r);return i}function ye(r,i){r.pendingLanes|=i,i!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Le(r,i,l,u,g,b){var M=r.pendingLanes;r.pendingLanes=l,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=l,r.entangledLanes&=l,r.errorRecoveryDisabledLanes&=l,r.shellSuspendCounter=0;var T=r.entanglements,O=r.expirationTimes,W=r.hiddenUpdates;for(l=M&~l;0<l;){var re=31-gt(l),ae=1<<re;T[re]=0,O[re]=-1;var X=W[re];if(X!==null)for(W[re]=null,re=0;re<X.length;re++){var Z=X[re];Z!==null&&(Z.lane&=-536870913)}l&=~ae}u!==0&&sr(r,u,0),b!==0&&g===0&&r.tag!==0&&(r.suspendedLanes|=b&~(M&~i))}function sr(r,i,l){r.pendingLanes|=i,r.suspendedLanes&=~i;var u=31-gt(i);r.entangledLanes|=i,r.entanglements[u]=r.entanglements[u]|1073741824|l&4194090}function br(r,i){var l=r.entangledLanes|=i;for(r=r.entanglements;l;){var u=31-gt(l),g=1<<u;g&i|r[u]&i&&(r[u]|=i),l&=~g}}function Hr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function Ln(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Bn(){var r=H.p;return r!==0?r:(r=window.event,r===void 0?32:wv(r.type))}function uo(r,i){var l=H.p;try{return H.p=r,i()}finally{H.p=l}}var Fr=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Fr,lr="__reactProps$"+Fr,ho="__reactContainer$"+Fr,rs="__reactEvents$"+Fr,Hh="__reactListeners$"+Fr,Fh="__reactHandles$"+Fr,U="__reactResources$"+Fr,se="__reactMarker$"+Fr;function _e(r){delete r[Gt],delete r[lr],delete r[rs],delete r[Hh],delete r[Fh]}function he(r){var i=r[Gt];if(i)return i;for(var l=r.parentNode;l;){if(i=l[ho]||l[Gt]){if(l=i.alternate,i.child!==null||l!==null&&l.child!==null)for(r=av(r);r!==null;){if(l=r[Gt])return l;r=av(r)}return i}r=l,l=r.parentNode}return null}function Te(r){if(r=r[Gt]||r[ho]){var i=r.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return r}return null}function Se(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r.stateNode;throw Error(o(33))}function ut(r){var i=r[U];return i||(i=r[U]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ce(r){r[se]=!0}var Mt=new Set,Me={};function Ut(r,i){vr(r,i),vr(r+"Capture",i)}function vr(r,i){for(Me[r]=i,r=0;r<i.length;r++)Mt.add(i[r])}var yn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wn={},Wg={};function mS(r){return Ye.call(Wg,r)?!0:Ye.call(wn,r)?!1:yn.test(r)?Wg[r]=!0:(wn[r]=!0,!1)}function Ql(r,i,l){if(mS(i))if(l===null)r.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":r.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(i);return}}r.setAttribute(i,""+l)}}function Zl(r,i,l){if(l===null)r.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(i);return}r.setAttribute(i,""+l)}}function $n(r,i,l,u){if(u===null)r.removeAttribute(l);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(l);return}r.setAttributeNS(i,l,""+u)}}var Vh,Gg;function $i(r){if(Vh===void 0)try{throw Error()}catch(l){var i=l.stack.trim().match(/\n( *(at )?)/);Vh=i&&i[1]||"",Gg=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vh+r+Gg}var Uh=!1;function Ih(r,i){if(!r||Uh)return"";Uh=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(Z){var X=Z}Reflect.construct(r,[],ae)}else{try{ae.call()}catch(Z){X=Z}r.call(ae.prototype)}}else{try{throw Error()}catch(Z){X=Z}(ae=r())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(Z){if(Z&&X&&typeof Z.stack=="string")return[Z.stack,X.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var g=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");g&&g.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=u.DetermineComponentFrameRoot(),M=b[0],T=b[1];if(M&&T){var O=M.split(`
`),W=T.split(`
`);for(g=u=0;u<O.length&&!O[u].includes("DetermineComponentFrameRoot");)u++;for(;g<W.length&&!W[g].includes("DetermineComponentFrameRoot");)g++;if(u===O.length||g===W.length)for(u=O.length-1,g=W.length-1;1<=u&&0<=g&&O[u]!==W[g];)g--;for(;1<=u&&0<=g;u--,g--)if(O[u]!==W[g]){if(u!==1||g!==1)do if(u--,g--,0>g||O[u]!==W[g]){var re=`
`+O[u].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=u&&0<=g);break}}}finally{Uh=!1,Error.prepareStackTrace=l}return(l=r?r.displayName||r.name:"")?$i(l):""}function gS(r){switch(r.tag){case 26:case 27:case 5:return $i(r.type);case 16:return $i("Lazy");case 13:return $i("Suspense");case 19:return $i("SuspenseList");case 0:case 15:return Ih(r.type,!1);case 11:return Ih(r.type.render,!1);case 1:return Ih(r.type,!0);case 31:return $i("Activity");default:return""}}function Xg(r){try{var i="";do i+=gS(r),r=r.return;while(r);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Vr(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Qg(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function xS(r){var i=Qg(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,b=l.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return g.call(this)},set:function(M){u=""+M,b.call(this,M)}}),Object.defineProperty(r,i,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Kl(r){r._valueTracker||(r._valueTracker=xS(r))}function Zg(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var l=i.getValue(),u="";return r&&(u=Qg(r)?r.checked?"true":"false":r.value),r=u,r!==l?(i.setValue(r),!0):!1}function Jl(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var bS=/[\n"\\]/g;function Ur(r){return r.replace(bS,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Yh(r,i,l,u,g,b,M,T){r.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?r.type=M:r.removeAttribute("type"),i!=null?M==="number"?(i===0&&r.value===""||r.value!=i)&&(r.value=""+Vr(i)):r.value!==""+Vr(i)&&(r.value=""+Vr(i)):M!=="submit"&&M!=="reset"||r.removeAttribute("value"),i!=null?qh(r,M,Vr(i)):l!=null?qh(r,M,Vr(l)):u!=null&&r.removeAttribute("value"),g==null&&b!=null&&(r.defaultChecked=!!b),g!=null&&(r.checked=g&&typeof g!="function"&&typeof g!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.name=""+Vr(T):r.removeAttribute("name")}function Kg(r,i,l,u,g,b,M,T){if(b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.type=b),i!=null||l!=null){if(!(b!=="submit"&&b!=="reset"||i!=null))return;l=l!=null?""+Vr(l):"",i=i!=null?""+Vr(i):l,T||i===r.value||(r.value=i),r.defaultValue=i}u=u??g,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=T?r.checked:!!u,r.defaultChecked=!!u,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(r.name=M)}function qh(r,i,l){i==="number"&&Jl(r.ownerDocument)===r||r.defaultValue===""+l||(r.defaultValue=""+l)}function Ni(r,i,l,u){if(r=r.options,i){i={};for(var g=0;g<l.length;g++)i["$"+l[g]]=!0;for(l=0;l<r.length;l++)g=i.hasOwnProperty("$"+r[l].value),r[l].selected!==g&&(r[l].selected=g),g&&u&&(r[l].defaultSelected=!0)}else{for(l=""+Vr(l),i=null,g=0;g<r.length;g++){if(r[g].value===l){r[g].selected=!0,u&&(r[g].defaultSelected=!0);return}i!==null||r[g].disabled||(i=r[g])}i!==null&&(i.selected=!0)}}function Jg(r,i,l){if(i!=null&&(i=""+Vr(i),i!==r.value&&(r.value=i),l==null)){r.defaultValue!==i&&(r.defaultValue=i);return}r.defaultValue=l!=null?""+Vr(l):""}function ex(r,i,l,u){if(i==null){if(u!=null){if(l!=null)throw Error(o(92));if(be(u)){if(1<u.length)throw Error(o(93));u=u[0]}l=u}l==null&&(l=""),i=l}l=Vr(i),r.defaultValue=l,u=r.textContent,u===l&&u!==""&&u!==null&&(r.value=u)}function Hi(r,i){if(i){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=i;return}}r.textContent=i}var vS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tx(r,i,l){var u=i.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?u?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="":u?r.setProperty(i,l):typeof l!="number"||l===0||vS.has(i)?i==="float"?r.cssFloat=l:r[i]=(""+l).trim():r[i]=l+"px"}function rx(r,i,l){if(i!=null&&typeof i!="object")throw Error(o(62));if(r=r.style,l!=null){for(var u in l)!l.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var g in i)u=i[g],i.hasOwnProperty(g)&&l[g]!==u&&tx(r,g,u)}else for(var b in i)i.hasOwnProperty(b)&&tx(r,b,i[b])}function Wh(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ec(r){return wS.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Gh=null;function Xh(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Fi=null,Vi=null;function nx(r){var i=Te(r);if(i&&(r=i.stateNode)){var l=r[lr]||null;e:switch(r=i.stateNode,i.type){case"input":if(Yh(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),i=l.name,l.type==="radio"&&i!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ur(""+i)+'"][type="radio"]'),i=0;i<l.length;i++){var u=l[i];if(u!==r&&u.form===r.form){var g=u[lr]||null;if(!g)throw Error(o(90));Yh(u,g.value,g.defaultValue,g.defaultValue,g.checked,g.defaultChecked,g.type,g.name)}}for(i=0;i<l.length;i++)u=l[i],u.form===r.form&&Zg(u)}break e;case"textarea":Jg(r,l.value,l.defaultValue);break e;case"select":i=l.value,i!=null&&Ni(r,!!l.multiple,i,!1)}}}var Qh=!1;function ox(r,i,l){if(Qh)return r(i,l);Qh=!0;try{var u=r(i);return u}finally{if(Qh=!1,(Fi!==null||Vi!==null)&&(Nc(),Fi&&(i=Fi,r=Vi,Vi=Fi=null,nx(i),r)))for(i=0;i<r.length;i++)nx(r[i])}}function ns(r,i){var l=r.stateNode;if(l===null)return null;var u=l[lr]||null;if(u===null)return null;l=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(o(231,i,typeof l));return l}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zh=!1;if(Nn)try{var os={};Object.defineProperty(os,"passive",{get:function(){Zh=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Zh=!1}var fo=null,Kh=null,tc=null;function ix(){if(tc)return tc;var r,i=Kh,l=i.length,u,g="value"in fo?fo.value:fo.textContent,b=g.length;for(r=0;r<l&&i[r]===g[r];r++);var M=l-r;for(u=1;u<=M&&i[l-u]===g[b-u];u++);return tc=g.slice(r,1<u?1-u:void 0)}function rc(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function nc(){return!0}function ax(){return!1}function wr(r){function i(l,u,g,b,M){this._reactName=l,this._targetInst=g,this.type=u,this.nativeEvent=b,this.target=M,this.currentTarget=null;for(var T in r)r.hasOwnProperty(T)&&(l=r[T],this[T]=l?l(b):b[T]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?nc:ax,this.isPropagationStopped=ax,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),i}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=wr(Ko),is=x({},Ko,{view:0,detail:0}),jS=wr(is),Jh,ef,as,ic=x({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==as&&(as&&r.type==="mousemove"?(Jh=r.screenX-as.screenX,ef=r.screenY-as.screenY):ef=Jh=0,as=r),Jh)},movementY:function(r){return"movementY"in r?r.movementY:ef}}),sx=wr(ic),SS=x({},ic,{dataTransfer:0}),kS=wr(SS),CS=x({},is,{relatedTarget:0}),tf=wr(CS),MS=x({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=wr(MS),TS=x({},Ko,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),zS=wr(TS),DS=x({},Ko,{data:0}),lx=wr(DS),PS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ES={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OS(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=ES[r])?!!i[r]:!1}function rf(){return OS}var RS=x({},is,{key:function(r){if(r.key){var i=PS[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=rc(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?AS[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(r){return r.type==="keypress"?rc(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?rc(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),LS=wr(RS),BS=x({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cx=wr(BS),$S=x({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),NS=wr($S),HS=x({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),FS=wr(HS),VS=x({},ic,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),US=wr(VS),IS=x({},Ko,{newState:0,oldState:0}),YS=wr(IS),qS=[9,13,27,32],nf=Nn&&"CompositionEvent"in window,ss=null;Nn&&"documentMode"in document&&(ss=document.documentMode);var WS=Nn&&"TextEvent"in window&&!ss,dx=Nn&&(!nf||ss&&8<ss&&11>=ss),ux=" ",hx=!1;function fx(r,i){switch(r){case"keyup":return qS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function px(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ui=!1;function GS(r,i){switch(r){case"compositionend":return px(i);case"keypress":return i.which!==32?null:(hx=!0,ux);case"textInput":return r=i.data,r===ux&&hx?null:r;default:return null}}function XS(r,i){if(Ui)return r==="compositionend"||!nf&&fx(r,i)?(r=ix(),tc=Kh=fo=null,Ui=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dx&&i.locale!=="ko"?null:i.data;default:return null}}var QS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mx(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!QS[r.type]:i==="textarea"}function gx(r,i,l,u){Fi?Vi?Vi.push(u):Vi=[u]:Fi=u,i=Yc(i,"onChange"),0<i.length&&(l=new oc("onChange","change",null,l,u),r.push({event:l,listeners:i}))}var ls=null,cs=null;function ZS(r){Qb(r,0)}function ac(r){var i=Se(r);if(Zg(i))return r}function xx(r,i){if(r==="change")return i}var bx=!1;if(Nn){var of;if(Nn){var af="oninput"in document;if(!af){var vx=document.createElement("div");vx.setAttribute("oninput","return;"),af=typeof vx.oninput=="function"}of=af}else of=!1;bx=of&&(!document.documentMode||9<document.documentMode)}function yx(){ls&&(ls.detachEvent("onpropertychange",wx),cs=ls=null)}function wx(r){if(r.propertyName==="value"&&ac(cs)){var i=[];gx(i,cs,r,Xh(r)),ox(ZS,i)}}function KS(r,i,l){r==="focusin"?(yx(),ls=i,cs=l,ls.attachEvent("onpropertychange",wx)):r==="focusout"&&yx()}function JS(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ac(cs)}function e3(r,i){if(r==="click")return ac(i)}function t3(r,i){if(r==="input"||r==="change")return ac(i)}function r3(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var zr=typeof Object.is=="function"?Object.is:r3;function ds(r,i){if(zr(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var l=Object.keys(r),u=Object.keys(i);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var g=l[u];if(!Ye.call(i,g)||!zr(r[g],i[g]))return!1}return!0}function jx(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Sx(r,i){var l=jx(r);r=0;for(var u;l;){if(l.nodeType===3){if(u=r+l.textContent.length,r<=i&&u>=i)return{node:l,offset:i-r};r=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=jx(l)}}function kx(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?kx(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function Cx(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var i=Jl(r.document);i instanceof r.HTMLIFrameElement;){try{var l=typeof i.contentWindow.location.href=="string"}catch{l=!1}if(l)r=i.contentWindow;else break;i=Jl(r.document)}return i}function sf(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}var n3=Nn&&"documentMode"in document&&11>=document.documentMode,Ii=null,lf=null,us=null,cf=!1;function Mx(r,i,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;cf||Ii==null||Ii!==Jl(u)||(u=Ii,"selectionStart"in u&&sf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),us&&ds(us,u)||(us=u,u=Yc(lf,"onSelect"),0<u.length&&(i=new oc("onSelect","select",null,i,l),r.push({event:i,listeners:u}),i.target=Ii)))}function Jo(r,i){var l={};return l[r.toLowerCase()]=i.toLowerCase(),l["Webkit"+r]="webkit"+i,l["Moz"+r]="moz"+i,l}var Yi={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionrun:Jo("Transition","TransitionRun"),transitionstart:Jo("Transition","TransitionStart"),transitioncancel:Jo("Transition","TransitionCancel"),transitionend:Jo("Transition","TransitionEnd")},df={},_x={};Nn&&(_x=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function ei(r){if(df[r])return df[r];if(!Yi[r])return r;var i=Yi[r],l;for(l in i)if(i.hasOwnProperty(l)&&l in _x)return df[r]=i[l];return r}var Tx=ei("animationend"),zx=ei("animationiteration"),Dx=ei("animationstart"),o3=ei("transitionrun"),i3=ei("transitionstart"),a3=ei("transitioncancel"),Px=ei("transitionend"),Ax=new Map,uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uf.push("scrollEnd");function on(r,i){Ax.set(r,i),Ut(i,[r])}var Ex=new WeakMap;function Ir(r,i){if(typeof r=="object"&&r!==null){var l=Ex.get(r);return l!==void 0?l:(i={value:r,source:i,stack:Xg(i)},Ex.set(r,i),i)}return{value:r,source:i,stack:Xg(i)}}var Yr=[],qi=0,hf=0;function sc(){for(var r=qi,i=hf=qi=0;i<r;){var l=Yr[i];Yr[i++]=null;var u=Yr[i];Yr[i++]=null;var g=Yr[i];Yr[i++]=null;var b=Yr[i];if(Yr[i++]=null,u!==null&&g!==null){var M=u.pending;M===null?g.next=g:(g.next=M.next,M.next=g),u.pending=g}b!==0&&Ox(l,g,b)}}function lc(r,i,l,u){Yr[qi++]=r,Yr[qi++]=i,Yr[qi++]=l,Yr[qi++]=u,hf|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function ff(r,i,l,u){return lc(r,i,l,u),cc(r)}function Wi(r,i){return lc(r,null,null,i),cc(r)}function Ox(r,i,l){r.lanes|=l;var u=r.alternate;u!==null&&(u.lanes|=l);for(var g=!1,b=r.return;b!==null;)b.childLanes|=l,u=b.alternate,u!==null&&(u.childLanes|=l),b.tag===22&&(r=b.stateNode,r===null||r._visibility&1||(g=!0)),r=b,b=b.return;return r.tag===3?(b=r.stateNode,g&&i!==null&&(g=31-gt(l),r=b.hiddenUpdates,u=r[g],u===null?r[g]=[i]:u.push(i),i.lane=l|536870912),b):null}function cc(r){if(50<Ls)throw Ls=0,vp=null,Error(o(185));for(var i=r.return;i!==null;)r=i,i=r.return;return r.tag===3?r.stateNode:null}var Gi={};function s3(r,i,l,u){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dr(r,i,l,u){return new s3(r,i,l,u)}function pf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Hn(r,i){var l=r.alternate;return l===null?(l=Dr(r.tag,i,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=i,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&65011712,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,i=r.dependencies,l.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l.refCleanup=r.refCleanup,l}function Rx(r,i){r.flags&=65011714;var l=r.alternate;return l===null?(r.childLanes=0,r.lanes=i,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,i=l.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),r}function dc(r,i,l,u,g,b){var M=0;if(u=r,typeof r=="function")pf(r)&&(M=1);else if(typeof r=="string")M=ck(r,l,Y.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case te:return r=Dr(31,l,i,g),r.elementType=te,r.lanes=b,r;case w:return ti(l.children,g,b,i);case C:M=8,g|=24;break;case k:return r=Dr(12,l,i,g|2),r.elementType=k,r.lanes=b,r;case A:return r=Dr(13,l,i,g),r.elementType=A,r.lanes=b,r;case V:return r=Dr(19,l,i,g),r.elementType=V,r.lanes=b,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case _:case D:M=10;break e;case z:M=9;break e;case L:M=11;break e;case E:M=14;break e;case F:M=16,u=null;break e}M=29,l=Error(o(130,r===null?"null":typeof r,"")),u=null}return i=Dr(M,l,i,g),i.elementType=r,i.type=u,i.lanes=b,i}function ti(r,i,l,u){return r=Dr(7,r,u,i),r.lanes=l,r}function mf(r,i,l){return r=Dr(6,r,null,i),r.lanes=l,r}function gf(r,i,l){return i=Dr(4,r.children!==null?r.children:[],r.key,i),i.lanes=l,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}var Xi=[],Qi=0,uc=null,hc=0,qr=[],Wr=0,ri=null,Fn=1,Vn="";function ni(r,i){Xi[Qi++]=hc,Xi[Qi++]=uc,uc=r,hc=i}function Lx(r,i,l){qr[Wr++]=Fn,qr[Wr++]=Vn,qr[Wr++]=ri,ri=r;var u=Fn;r=Vn;var g=32-gt(u)-1;u&=~(1<<g),l+=1;var b=32-gt(i)+g;if(30<b){var M=g-g%5;b=(u&(1<<M)-1).toString(32),u>>=M,g-=M,Fn=1<<32-gt(i)+g|l<<g|u,Vn=b+r}else Fn=1<<b|l<<g|u,Vn=r}function xf(r){r.return!==null&&(ni(r,1),Lx(r,1,0))}function bf(r){for(;r===uc;)uc=Xi[--Qi],Xi[Qi]=null,hc=Xi[--Qi],Xi[Qi]=null;for(;r===ri;)ri=qr[--Wr],qr[Wr]=null,Vn=qr[--Wr],qr[Wr]=null,Fn=qr[--Wr],qr[Wr]=null}var yr=null,_t=null,et=!1,oi=null,jn=!1,vf=Error(o(519));function ii(r){var i=Error(o(418,""));throw ps(Ir(i,r)),vf}function Bx(r){var i=r.stateNode,l=r.type,u=r.memoizedProps;switch(i[Gt]=r,i[lr]=u,l){case"dialog":Ie("cancel",i),Ie("close",i);break;case"iframe":case"object":case"embed":Ie("load",i);break;case"video":case"audio":for(l=0;l<$s.length;l++)Ie($s[l],i);break;case"source":Ie("error",i);break;case"img":case"image":case"link":Ie("error",i),Ie("load",i);break;case"details":Ie("toggle",i);break;case"input":Ie("invalid",i),Kg(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Kl(i);break;case"select":Ie("invalid",i);break;case"textarea":Ie("invalid",i),ex(i,u.value,u.defaultValue,u.children),Kl(i)}l=u.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||i.textContent===""+l||u.suppressHydrationWarning===!0||ev(i.textContent,l)?(u.popover!=null&&(Ie("beforetoggle",i),Ie("toggle",i)),u.onScroll!=null&&Ie("scroll",i),u.onScrollEnd!=null&&Ie("scrollend",i),u.onClick!=null&&(i.onclick=qc),i=!0):i=!1,i||ii(r)}function $x(r){for(yr=r.return;yr;)switch(yr.tag){case 5:case 13:jn=!1;return;case 27:case 3:jn=!0;return;default:yr=yr.return}}function hs(r){if(r!==yr)return!1;if(!et)return $x(r),et=!0,!1;var i=r.tag,l;if((l=i!==3&&i!==27)&&((l=i===5)&&(l=r.type,l=!(l!=="form"&&l!=="button")||Rp(r.type,r.memoizedProps)),l=!l),l&&_t&&ii(r),$x(r),i===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8)if(l=r.data,l==="/$"){if(i===0){_t=sn(r.nextSibling);break e}i--}else l!=="$"&&l!=="$!"&&l!=="$?"||i++;r=r.nextSibling}_t=null}}else i===27?(i=_t,zo(r.type)?(r=Np,Np=null,_t=r):_t=i):_t=yr?sn(r.stateNode.nextSibling):null;return!0}function fs(){_t=yr=null,et=!1}function Nx(){var r=oi;return r!==null&&(kr===null?kr=r:kr.push.apply(kr,r),oi=null),r}function ps(r){oi===null?oi=[r]:oi.push(r)}var yf=$(null),ai=null,Un=null;function po(r,i,l){R(yf,i._currentValue),i._currentValue=l}function In(r){r._currentValue=yf.current,G(yf)}function wf(r,i,l){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===l)break;r=r.return}}function jf(r,i,l,u){var g=r.child;for(g!==null&&(g.return=r);g!==null;){var b=g.dependencies;if(b!==null){var M=g.child;b=b.firstContext;e:for(;b!==null;){var T=b;b=g;for(var O=0;O<i.length;O++)if(T.context===i[O]){b.lanes|=l,T=b.alternate,T!==null&&(T.lanes|=l),wf(b.return,l,r),u||(M=null);break e}b=T.next}}else if(g.tag===18){if(M=g.return,M===null)throw Error(o(341));M.lanes|=l,b=M.alternate,b!==null&&(b.lanes|=l),wf(M,l,r),M=null}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===r){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}}function ms(r,i,l,u){r=null;for(var g=i,b=!1;g!==null;){if(!b){if((g.flags&524288)!==0)b=!0;else if((g.flags&262144)!==0)break}if(g.tag===10){var M=g.alternate;if(M===null)throw Error(o(387));if(M=M.memoizedProps,M!==null){var T=g.type;zr(g.pendingProps.value,M.value)||(r!==null?r.push(T):r=[T])}}else if(g===ue.current){if(M=g.alternate,M===null)throw Error(o(387));M.memoizedState.memoizedState!==g.memoizedState.memoizedState&&(r!==null?r.push(Is):r=[Is])}g=g.return}r!==null&&jf(i,r,l,u),i.flags|=262144}function fc(r){for(r=r.firstContext;r!==null;){if(!zr(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function si(r){ai=r,Un=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function cr(r){return Hx(ai,r)}function pc(r,i){return ai===null&&si(r),Hx(r,i)}function Hx(r,i){var l=i._currentValue;if(i={context:i,memoizedValue:l,next:null},Un===null){if(r===null)throw Error(o(308));Un=i,r.dependencies={lanes:0,firstContext:i},r.flags|=524288}else Un=Un.next=i;return l}var l3=typeof AbortController<"u"?AbortController:function(){var r=[],i=this.signal={aborted:!1,addEventListener:function(l,u){r.push(u)}};this.abort=function(){i.aborted=!0,r.forEach(function(l){return l()})}},c3=e.unstable_scheduleCallback,d3=e.unstable_NormalPriority,It={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new l3,data:new Map,refCount:0}}function gs(r){r.refCount--,r.refCount===0&&c3(d3,function(){r.controller.abort()})}var xs=null,kf=0,Zi=0,Ki=null;function u3(r,i){if(xs===null){var l=xs=[];kf=0,Zi=Mp(),Ki={status:"pending",value:void 0,then:function(u){l.push(u)}}}return kf++,i.then(Fx,Fx),i}function Fx(){if(--kf===0&&xs!==null){Ki!==null&&(Ki.status="fulfilled");var r=xs;xs=null,Zi=0,Ki=null;for(var i=0;i<r.length;i++)(0,r[i])()}}function h3(r,i){var l=[],u={status:"pending",value:null,reason:null,then:function(g){l.push(g)}};return r.then(function(){u.status="fulfilled",u.value=i;for(var g=0;g<l.length;g++)(0,l[g])(i)},function(g){for(u.status="rejected",u.reason=g,g=0;g<l.length;g++)(0,l[g])(void 0)}),u}var Vx=I.S;I.S=function(r,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&u3(r,i),Vx!==null&&Vx(r,i)};var li=$(null);function Cf(){var r=li.current;return r!==null?r:ft.pooledCache}function mc(r,i){i===null?R(li,li.current):R(li,i.pool)}function Ux(){var r=Cf();return r===null?null:{parent:It._currentValue,pool:r}}var bs=Error(o(460)),Ix=Error(o(474)),gc=Error(o(542)),Mf={then:function(){}};function Yx(r){return r=r.status,r==="fulfilled"||r==="rejected"}function xc(){}function qx(r,i,l){switch(l=r[l],l===void 0?r.push(i):l!==i&&(i.then(xc,xc),i=l),i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,Gx(r),r;default:if(typeof i.status=="string")i.then(xc,xc);else{if(r=ft,r!==null&&100<r.shellSuspendCounter)throw Error(o(482));r=i,r.status="pending",r.then(function(u){if(i.status==="pending"){var g=i;g.status="fulfilled",g.value=u}},function(u){if(i.status==="pending"){var g=i;g.status="rejected",g.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,Gx(r),r}throw vs=i,bs}}var vs=null;function Wx(){if(vs===null)throw Error(o(459));var r=vs;return vs=null,r}function Gx(r){if(r===bs||r===gc)throw Error(o(483))}var mo=!1;function _f(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function go(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function xo(r,i,l){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(ot&2)!==0){var g=u.pending;return g===null?i.next=i:(i.next=g.next,g.next=i),u.pending=i,i=cc(r),Ox(r,null,l),i}return lc(r,u,i,l),cc(r)}function ys(r,i,l){if(i=i.updateQueue,i!==null&&(i=i.shared,(l&4194048)!==0)){var u=i.lanes;u&=r.pendingLanes,l|=u,i.lanes=l,br(r,l)}}function zf(r,i){var l=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var g=null,b=null;if(l=l.firstBaseUpdate,l!==null){do{var M={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};b===null?g=b=M:b=b.next=M,l=l.next}while(l!==null);b===null?g=b=i:b=b.next=i}else g=b=i;l={baseState:u.baseState,firstBaseUpdate:g,lastBaseUpdate:b,shared:u.shared,callbacks:u.callbacks},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=i:r.next=i,l.lastBaseUpdate=i}var Df=!1;function ws(){if(Df){var r=Ki;if(r!==null)throw r}}function js(r,i,l,u){Df=!1;var g=r.updateQueue;mo=!1;var b=g.firstBaseUpdate,M=g.lastBaseUpdate,T=g.shared.pending;if(T!==null){g.shared.pending=null;var O=T,W=O.next;O.next=null,M===null?b=W:M.next=W,M=O;var re=r.alternate;re!==null&&(re=re.updateQueue,T=re.lastBaseUpdate,T!==M&&(T===null?re.firstBaseUpdate=W:T.next=W,re.lastBaseUpdate=O))}if(b!==null){var ae=g.baseState;M=0,re=W=O=null,T=b;do{var X=T.lane&-536870913,Z=X!==T.lane;if(Z?(Ge&X)===X:(u&X)===X){X!==0&&X===Zi&&(Df=!0),re!==null&&(re=re.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Pe=r,ze=T;X=i;var dt=l;switch(ze.tag){case 1:if(Pe=ze.payload,typeof Pe=="function"){ae=Pe.call(dt,ae,X);break e}ae=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=ze.payload,X=typeof Pe=="function"?Pe.call(dt,ae,X):Pe,X==null)break e;ae=x({},ae,X);break e;case 2:mo=!0}}X=T.callback,X!==null&&(r.flags|=64,Z&&(r.flags|=8192),Z=g.callbacks,Z===null?g.callbacks=[X]:Z.push(X))}else Z={lane:X,tag:T.tag,payload:T.payload,callback:T.callback,next:null},re===null?(W=re=Z,O=ae):re=re.next=Z,M|=X;if(T=T.next,T===null){if(T=g.shared.pending,T===null)break;Z=T,T=Z.next,Z.next=null,g.lastBaseUpdate=Z,g.shared.pending=null}}while(!0);re===null&&(O=ae),g.baseState=O,g.firstBaseUpdate=W,g.lastBaseUpdate=re,b===null&&(g.shared.lanes=0),Co|=M,r.lanes=M,r.memoizedState=ae}}function Xx(r,i){if(typeof r!="function")throw Error(o(191,r));r.call(i)}function Qx(r,i){var l=r.callbacks;if(l!==null)for(r.callbacks=null,r=0;r<l.length;r++)Xx(l[r],i)}var Ji=$(null),bc=$(0);function Zx(r,i){r=Zn,R(bc,r),R(Ji,i),Zn=r|i.baseLanes}function Pf(){R(bc,Zn),R(Ji,Ji.current)}function Af(){Zn=bc.current,G(Ji),G(bc)}var bo=0,He=null,lt=null,$t=null,vc=!1,ea=!1,ci=!1,yc=0,Ss=0,ta=null,f3=0;function At(){throw Error(o(321))}function Ef(r,i){if(i===null)return!1;for(var l=0;l<i.length&&l<r.length;l++)if(!zr(r[l],i[l]))return!1;return!0}function Of(r,i,l,u,g,b){return bo=b,He=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=r===null||r.memoizedState===null?O1:R1,ci=!1,b=l(u,g),ci=!1,ea&&(b=Jx(i,l,u,g)),Kx(r),b}function Kx(r){I.H=Mc;var i=lt!==null&&lt.next!==null;if(bo=0,$t=lt=He=null,vc=!1,Ss=0,ta=null,i)throw Error(o(300));r===null||Xt||(r=r.dependencies,r!==null&&fc(r)&&(Xt=!0))}function Jx(r,i,l,u){He=r;var g=0;do{if(ea&&(ta=null),Ss=0,ea=!1,25<=g)throw Error(o(301));if(g+=1,$t=lt=null,r.updateQueue!=null){var b=r.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}I.H=y3,b=i(l,u)}while(ea);return b}function p3(){var r=I.H,i=r.useState()[0];return i=typeof i.then=="function"?ks(i):i,r=r.useState()[0],(lt!==null?lt.memoizedState:null)!==r&&(He.flags|=1024),i}function Rf(){var r=yc!==0;return yc=0,r}function Lf(r,i,l){i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~l}function Bf(r){if(vc){for(r=r.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vc=!1}bo=0,$t=lt=He=null,ea=!1,Ss=yc=0,ta=null}function jr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?He.memoizedState=$t=r:$t=$t.next=r,$t}function Nt(){if(lt===null){var r=He.alternate;r=r!==null?r.memoizedState:null}else r=lt.next;var i=$t===null?He.memoizedState:$t.next;if(i!==null)$t=i,lt=r;else{if(r===null)throw He.alternate===null?Error(o(467)):Error(o(310));lt=r,r={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},$t===null?He.memoizedState=$t=r:$t=$t.next=r}return $t}function $f(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ks(r){var i=Ss;return Ss+=1,ta===null&&(ta=[]),r=qx(ta,r,i),i=He,($t===null?i.memoizedState:$t.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?O1:R1),r}function wc(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return ks(r);if(r.$$typeof===D)return cr(r)}throw Error(o(438,String(r)))}function Nf(r){var i=null,l=He.updateQueue;if(l!==null&&(i=l.memoCache),i==null){var u=He.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(g){return g.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),l===null&&(l=$f(),He.updateQueue=l),l.memoCache=i,l=i.data[i.index],l===void 0)for(l=i.data[i.index]=Array(r),u=0;u<r;u++)l[u]=de;return i.index++,l}function Yn(r,i){return typeof i=="function"?i(r):i}function jc(r){var i=Nt();return Hf(i,lt,r)}function Hf(r,i,l){var u=r.queue;if(u===null)throw Error(o(311));u.lastRenderedReducer=l;var g=r.baseQueue,b=u.pending;if(b!==null){if(g!==null){var M=g.next;g.next=b.next,b.next=M}i.baseQueue=g=b,u.pending=null}if(b=r.baseState,g===null)r.memoizedState=b;else{i=g.next;var T=M=null,O=null,W=i,re=!1;do{var ae=W.lane&-536870913;if(ae!==W.lane?(Ge&ae)===ae:(bo&ae)===ae){var X=W.revertLane;if(X===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),ae===Zi&&(re=!0);else if((bo&X)===X){W=W.next,X===Zi&&(re=!0);continue}else ae={lane:0,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},O===null?(T=O=ae,M=b):O=O.next=ae,He.lanes|=X,Co|=X;ae=W.action,ci&&l(b,ae),b=W.hasEagerState?W.eagerState:l(b,ae)}else X={lane:ae,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},O===null?(T=O=X,M=b):O=O.next=X,He.lanes|=ae,Co|=ae;W=W.next}while(W!==null&&W!==i);if(O===null?M=b:O.next=T,!zr(b,r.memoizedState)&&(Xt=!0,re&&(l=Ki,l!==null)))throw l;r.memoizedState=b,r.baseState=M,r.baseQueue=O,u.lastRenderedState=b}return g===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Ff(r){var i=Nt(),l=i.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=r;var u=l.dispatch,g=l.pending,b=i.memoizedState;if(g!==null){l.pending=null;var M=g=g.next;do b=r(b,M.action),M=M.next;while(M!==g);zr(b,i.memoizedState)||(Xt=!0),i.memoizedState=b,i.baseQueue===null&&(i.baseState=b),l.lastRenderedState=b}return[b,u]}function e1(r,i,l){var u=He,g=Nt(),b=et;if(b){if(l===void 0)throw Error(o(407));l=l()}else l=i();var M=!zr((lt||g).memoizedState,l);M&&(g.memoizedState=l,Xt=!0),g=g.queue;var T=n1.bind(null,u,g,r);if(Cs(2048,8,T,[r]),g.getSnapshot!==i||M||$t!==null&&$t.memoizedState.tag&1){if(u.flags|=2048,ra(9,Sc(),r1.bind(null,u,g,l,i),null),ft===null)throw Error(o(349));b||(bo&124)!==0||t1(u,i,l)}return l}function t1(r,i,l){r.flags|=16384,r={getSnapshot:i,value:l},i=He.updateQueue,i===null?(i=$f(),He.updateQueue=i,i.stores=[r]):(l=i.stores,l===null?i.stores=[r]:l.push(r))}function r1(r,i,l,u){i.value=l,i.getSnapshot=u,o1(i)&&i1(r)}function n1(r,i,l){return l(function(){o1(i)&&i1(r)})}function o1(r){var i=r.getSnapshot;r=r.value;try{var l=i();return!zr(r,l)}catch{return!0}}function i1(r){var i=Wi(r,2);i!==null&&Rr(i,r,2)}function Vf(r){var i=jr();if(typeof r=="function"){var l=r;if(r=l(),ci){Bt(!0);try{l()}finally{Bt(!1)}}}return i.memoizedState=i.baseState=r,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:r},i}function a1(r,i,l,u){return r.baseState=l,Hf(r,lt,typeof u=="function"?u:Yn)}function m3(r,i,l,u,g){if(Cc(r))throw Error(o(485));if(r=i.action,r!==null){var b={payload:g,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){b.listeners.push(M)}};I.T!==null?l(!0):b.isTransition=!1,u(b),l=i.pending,l===null?(b.next=i.pending=b,s1(i,b)):(b.next=l.next,i.pending=l.next=b)}}function s1(r,i){var l=i.action,u=i.payload,g=r.state;if(i.isTransition){var b=I.T,M={};I.T=M;try{var T=l(g,u),O=I.S;O!==null&&O(M,T),l1(r,i,T)}catch(W){Uf(r,i,W)}finally{I.T=b}}else try{b=l(g,u),l1(r,i,b)}catch(W){Uf(r,i,W)}}function l1(r,i,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(u){c1(r,i,u)},function(u){return Uf(r,i,u)}):c1(r,i,l)}function c1(r,i,l){i.status="fulfilled",i.value=l,d1(i),r.state=l,i=r.pending,i!==null&&(l=i.next,l===i?r.pending=null:(l=l.next,i.next=l,s1(r,l)))}function Uf(r,i,l){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=l,d1(i),i=i.next;while(i!==u)}r.action=null}function d1(r){r=r.listeners;for(var i=0;i<r.length;i++)(0,r[i])()}function u1(r,i){return i}function h1(r,i){if(et){var l=ft.formState;if(l!==null){e:{var u=He;if(et){if(_t){t:{for(var g=_t,b=jn;g.nodeType!==8;){if(!b){g=null;break t}if(g=sn(g.nextSibling),g===null){g=null;break t}}b=g.data,g=b==="F!"||b==="F"?g:null}if(g){_t=sn(g.nextSibling),u=g.data==="F!";break e}}ii(u)}u=!1}u&&(i=l[0])}}return l=jr(),l.memoizedState=l.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:u1,lastRenderedState:i},l.queue=u,l=P1.bind(null,He,u),u.dispatch=l,u=Vf(!1),b=Gf.bind(null,He,!1,u.queue),u=jr(),g={state:i,dispatch:null,action:r,pending:null},u.queue=g,l=m3.bind(null,He,g,b,l),g.dispatch=l,u.memoizedState=r,[i,l,!1]}function f1(r){var i=Nt();return p1(i,lt,r)}function p1(r,i,l){if(i=Hf(r,i,u1)[0],r=jc(Yn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=ks(i)}catch(M){throw M===bs?gc:M}else u=i;i=Nt();var g=i.queue,b=g.dispatch;return l!==i.memoizedState&&(He.flags|=2048,ra(9,Sc(),g3.bind(null,g,l),null)),[u,b,r]}function g3(r,i){r.action=i}function m1(r){var i=Nt(),l=lt;if(l!==null)return p1(i,l,r);Nt(),i=i.memoizedState,l=Nt();var u=l.queue.dispatch;return l.memoizedState=r,[i,u,!1]}function ra(r,i,l,u){return r={tag:r,create:l,deps:u,inst:i,next:null},i=He.updateQueue,i===null&&(i=$f(),He.updateQueue=i),l=i.lastEffect,l===null?i.lastEffect=r.next=r:(u=l.next,l.next=r,r.next=u,i.lastEffect=r),r}function Sc(){return{destroy:void 0,resource:void 0}}function g1(){return Nt().memoizedState}function kc(r,i,l,u){var g=jr();u=u===void 0?null:u,He.flags|=r,g.memoizedState=ra(1|i,Sc(),l,u)}function Cs(r,i,l,u){var g=Nt();u=u===void 0?null:u;var b=g.memoizedState.inst;lt!==null&&u!==null&&Ef(u,lt.memoizedState.deps)?g.memoizedState=ra(i,b,l,u):(He.flags|=r,g.memoizedState=ra(1|i,b,l,u))}function x1(r,i){kc(8390656,8,r,i)}function b1(r,i){Cs(2048,8,r,i)}function v1(r,i){return Cs(4,2,r,i)}function y1(r,i){return Cs(4,4,r,i)}function w1(r,i){if(typeof i=="function"){r=r();var l=i(r);return function(){typeof l=="function"?l():i(null)}}if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function j1(r,i,l){l=l!=null?l.concat([r]):null,Cs(4,4,w1.bind(null,i,r),l)}function If(){}function S1(r,i){var l=Nt();i=i===void 0?null:i;var u=l.memoizedState;return i!==null&&Ef(i,u[1])?u[0]:(l.memoizedState=[r,i],r)}function k1(r,i){var l=Nt();i=i===void 0?null:i;var u=l.memoizedState;if(i!==null&&Ef(i,u[1]))return u[0];if(u=r(),ci){Bt(!0);try{r()}finally{Bt(!1)}}return l.memoizedState=[u,i],u}function Yf(r,i,l){return l===void 0||(bo&1073741824)!==0?r.memoizedState=i:(r.memoizedState=l,r=_b(),He.lanes|=r,Co|=r,l)}function C1(r,i,l,u){return zr(l,i)?l:Ji.current!==null?(r=Yf(r,l,u),zr(r,i)||(Xt=!0),r):(bo&42)===0?(Xt=!0,r.memoizedState=l):(r=_b(),He.lanes|=r,Co|=r,i)}function M1(r,i,l,u,g){var b=H.p;H.p=b!==0&&8>b?b:8;var M=I.T,T={};I.T=T,Gf(r,!1,i,l);try{var O=g(),W=I.S;if(W!==null&&W(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var re=h3(O,u);Ms(r,i,re,Or(r))}else Ms(r,i,u,Or(r))}catch(ae){Ms(r,i,{then:function(){},status:"rejected",reason:ae},Or())}finally{H.p=b,I.T=M}}function x3(){}function qf(r,i,l,u){if(r.tag!==5)throw Error(o(476));var g=_1(r).queue;M1(r,g,i,ee,l===null?x3:function(){return T1(r),l(u)})}function _1(r){var i=r.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:ee},next:null};var l={};return i.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:l},next:null},r.memoizedState=i,r=r.alternate,r!==null&&(r.memoizedState=i),i}function T1(r){var i=_1(r).next.queue;Ms(r,i,{},Or())}function Wf(){return cr(Is)}function z1(){return Nt().memoizedState}function D1(){return Nt().memoizedState}function b3(r){for(var i=r.return;i!==null;){switch(i.tag){case 24:case 3:var l=Or();r=go(l);var u=xo(i,r,l);u!==null&&(Rr(u,i,l),ys(u,i,l)),i={cache:Sf()},r.payload=i;return}i=i.return}}function v3(r,i,l){var u=Or();l={lane:u,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Cc(r)?A1(i,l):(l=ff(r,i,l,u),l!==null&&(Rr(l,r,u),E1(l,i,u)))}function P1(r,i,l){var u=Or();Ms(r,i,l,u)}function Ms(r,i,l,u){var g={lane:u,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Cc(r))A1(i,g);else{var b=r.alternate;if(r.lanes===0&&(b===null||b.lanes===0)&&(b=i.lastRenderedReducer,b!==null))try{var M=i.lastRenderedState,T=b(M,l);if(g.hasEagerState=!0,g.eagerState=T,zr(T,M))return lc(r,i,g,0),ft===null&&sc(),!1}catch{}finally{}if(l=ff(r,i,g,u),l!==null)return Rr(l,r,u),E1(l,i,u),!0}return!1}function Gf(r,i,l,u){if(u={lane:2,revertLane:Mp(),action:u,hasEagerState:!1,eagerState:null,next:null},Cc(r)){if(i)throw Error(o(479))}else i=ff(r,l,u,2),i!==null&&Rr(i,r,2)}function Cc(r){var i=r.alternate;return r===He||i!==null&&i===He}function A1(r,i){ea=vc=!0;var l=r.pending;l===null?i.next=i:(i.next=l.next,l.next=i),r.pending=i}function E1(r,i,l){if((l&4194048)!==0){var u=i.lanes;u&=r.pendingLanes,l|=u,i.lanes=l,br(r,l)}}var Mc={readContext:cr,use:wc,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At},O1={readContext:cr,use:wc,useCallback:function(r,i){return jr().memoizedState=[r,i===void 0?null:i],r},useContext:cr,useEffect:x1,useImperativeHandle:function(r,i,l){l=l!=null?l.concat([r]):null,kc(4194308,4,w1.bind(null,i,r),l)},useLayoutEffect:function(r,i){return kc(4194308,4,r,i)},useInsertionEffect:function(r,i){kc(4,2,r,i)},useMemo:function(r,i){var l=jr();i=i===void 0?null:i;var u=r();if(ci){Bt(!0);try{r()}finally{Bt(!1)}}return l.memoizedState=[u,i],u},useReducer:function(r,i,l){var u=jr();if(l!==void 0){var g=l(i);if(ci){Bt(!0);try{l(i)}finally{Bt(!1)}}}else g=i;return u.memoizedState=u.baseState=g,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:g},u.queue=r,r=r.dispatch=v3.bind(null,He,r),[u.memoizedState,r]},useRef:function(r){var i=jr();return r={current:r},i.memoizedState=r},useState:function(r){r=Vf(r);var i=r.queue,l=P1.bind(null,He,i);return i.dispatch=l,[r.memoizedState,l]},useDebugValue:If,useDeferredValue:function(r,i){var l=jr();return Yf(l,r,i)},useTransition:function(){var r=Vf(!1);return r=M1.bind(null,He,r.queue,!0,!1),jr().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,i,l){var u=He,g=jr();if(et){if(l===void 0)throw Error(o(407));l=l()}else{if(l=i(),ft===null)throw Error(o(349));(Ge&124)!==0||t1(u,i,l)}g.memoizedState=l;var b={value:l,getSnapshot:i};return g.queue=b,x1(n1.bind(null,u,b,r),[r]),u.flags|=2048,ra(9,Sc(),r1.bind(null,u,b,l,i),null),l},useId:function(){var r=jr(),i=ft.identifierPrefix;if(et){var l=Vn,u=Fn;l=(u&~(1<<32-gt(u)-1)).toString(32)+l,i="«"+i+"R"+l,l=yc++,0<l&&(i+="H"+l.toString(32)),i+="»"}else l=f3++,i="«"+i+"r"+l.toString(32)+"»";return r.memoizedState=i},useHostTransitionStatus:Wf,useFormState:h1,useActionState:h1,useOptimistic:function(r){var i=jr();i.memoizedState=i.baseState=r;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=l,i=Gf.bind(null,He,!0,l),l.dispatch=i,[r,i]},useMemoCache:Nf,useCacheRefresh:function(){return jr().memoizedState=b3.bind(null,He)}},R1={readContext:cr,use:wc,useCallback:S1,useContext:cr,useEffect:b1,useImperativeHandle:j1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:k1,useReducer:jc,useRef:g1,useState:function(){return jc(Yn)},useDebugValue:If,useDeferredValue:function(r,i){var l=Nt();return C1(l,lt.memoizedState,r,i)},useTransition:function(){var r=jc(Yn)[0],i=Nt().memoizedState;return[typeof r=="boolean"?r:ks(r),i]},useSyncExternalStore:e1,useId:z1,useHostTransitionStatus:Wf,useFormState:f1,useActionState:f1,useOptimistic:function(r,i){var l=Nt();return a1(l,lt,r,i)},useMemoCache:Nf,useCacheRefresh:D1},y3={readContext:cr,use:wc,useCallback:S1,useContext:cr,useEffect:b1,useImperativeHandle:j1,useInsertionEffect:v1,useLayoutEffect:y1,useMemo:k1,useReducer:Ff,useRef:g1,useState:function(){return Ff(Yn)},useDebugValue:If,useDeferredValue:function(r,i){var l=Nt();return lt===null?Yf(l,r,i):C1(l,lt.memoizedState,r,i)},useTransition:function(){var r=Ff(Yn)[0],i=Nt().memoizedState;return[typeof r=="boolean"?r:ks(r),i]},useSyncExternalStore:e1,useId:z1,useHostTransitionStatus:Wf,useFormState:m1,useActionState:m1,useOptimistic:function(r,i){var l=Nt();return lt!==null?a1(l,lt,r,i):(l.baseState=r,[r,l.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:D1},na=null,_s=0;function _c(r){var i=_s;return _s+=1,na===null&&(na=[]),qx(na,r,i)}function Ts(r,i){i=i.props.ref,r.ref=i!==void 0?i:null}function Tc(r,i){throw i.$$typeof===v?Error(o(525)):(r=Object.prototype.toString.call(i),Error(o(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r)))}function L1(r){var i=r._init;return i(r._payload)}function B1(r){function i(N,B){if(r){var q=N.deletions;q===null?(N.deletions=[B],N.flags|=16):q.push(B)}}function l(N,B){if(!r)return null;for(;B!==null;)i(N,B),B=B.sibling;return null}function u(N){for(var B=new Map;N!==null;)N.key!==null?B.set(N.key,N):B.set(N.index,N),N=N.sibling;return B}function g(N,B){return N=Hn(N,B),N.index=0,N.sibling=null,N}function b(N,B,q){return N.index=q,r?(q=N.alternate,q!==null?(q=q.index,q<B?(N.flags|=67108866,B):q):(N.flags|=67108866,B)):(N.flags|=1048576,B)}function M(N){return r&&N.alternate===null&&(N.flags|=67108866),N}function T(N,B,q,ie){return B===null||B.tag!==6?(B=mf(q,N.mode,ie),B.return=N,B):(B=g(B,q),B.return=N,B)}function O(N,B,q,ie){var we=q.type;return we===w?re(N,B,q.props.children,ie,q.key):B!==null&&(B.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===F&&L1(we)===B.type)?(B=g(B,q.props),Ts(B,q),B.return=N,B):(B=dc(q.type,q.key,q.props,null,N.mode,ie),Ts(B,q),B.return=N,B)}function W(N,B,q,ie){return B===null||B.tag!==4||B.stateNode.containerInfo!==q.containerInfo||B.stateNode.implementation!==q.implementation?(B=gf(q,N.mode,ie),B.return=N,B):(B=g(B,q.children||[]),B.return=N,B)}function re(N,B,q,ie,we){return B===null||B.tag!==7?(B=ti(q,N.mode,ie,we),B.return=N,B):(B=g(B,q),B.return=N,B)}function ae(N,B,q){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=mf(""+B,N.mode,q),B.return=N,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case y:return q=dc(B.type,B.key,B.props,null,N.mode,q),Ts(q,B),q.return=N,q;case j:return B=gf(B,N.mode,q),B.return=N,B;case F:var ie=B._init;return B=ie(B._payload),ae(N,B,q)}if(be(B)||fe(B))return B=ti(B,N.mode,q,null),B.return=N,B;if(typeof B.then=="function")return ae(N,_c(B),q);if(B.$$typeof===D)return ae(N,pc(N,B),q);Tc(N,B)}return null}function X(N,B,q,ie){var we=B!==null?B.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return we!==null?null:T(N,B,""+q,ie);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case y:return q.key===we?O(N,B,q,ie):null;case j:return q.key===we?W(N,B,q,ie):null;case F:return we=q._init,q=we(q._payload),X(N,B,q,ie)}if(be(q)||fe(q))return we!==null?null:re(N,B,q,ie,null);if(typeof q.then=="function")return X(N,B,_c(q),ie);if(q.$$typeof===D)return X(N,B,pc(N,q),ie);Tc(N,q)}return null}function Z(N,B,q,ie,we){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return N=N.get(q)||null,T(B,N,""+ie,we);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case y:return N=N.get(ie.key===null?q:ie.key)||null,O(B,N,ie,we);case j:return N=N.get(ie.key===null?q:ie.key)||null,W(B,N,ie,we);case F:var Ve=ie._init;return ie=Ve(ie._payload),Z(N,B,q,ie,we)}if(be(ie)||fe(ie))return N=N.get(q)||null,re(B,N,ie,we,null);if(typeof ie.then=="function")return Z(N,B,q,_c(ie),we);if(ie.$$typeof===D)return Z(N,B,q,pc(B,ie),we);Tc(B,ie)}return null}function Pe(N,B,q,ie){for(var we=null,Ve=null,ke=B,De=B=0,Zt=null;ke!==null&&De<q.length;De++){ke.index>De?(Zt=ke,ke=null):Zt=ke.sibling;var Je=X(N,ke,q[De],ie);if(Je===null){ke===null&&(ke=Zt);break}r&&ke&&Je.alternate===null&&i(N,ke),B=b(Je,B,De),Ve===null?we=Je:Ve.sibling=Je,Ve=Je,ke=Zt}if(De===q.length)return l(N,ke),et&&ni(N,De),we;if(ke===null){for(;De<q.length;De++)ke=ae(N,q[De],ie),ke!==null&&(B=b(ke,B,De),Ve===null?we=ke:Ve.sibling=ke,Ve=ke);return et&&ni(N,De),we}for(ke=u(ke);De<q.length;De++)Zt=Z(ke,N,De,q[De],ie),Zt!==null&&(r&&Zt.alternate!==null&&ke.delete(Zt.key===null?De:Zt.key),B=b(Zt,B,De),Ve===null?we=Zt:Ve.sibling=Zt,Ve=Zt);return r&&ke.forEach(function(Oo){return i(N,Oo)}),et&&ni(N,De),we}function ze(N,B,q,ie){if(q==null)throw Error(o(151));for(var we=null,Ve=null,ke=B,De=B=0,Zt=null,Je=q.next();ke!==null&&!Je.done;De++,Je=q.next()){ke.index>De?(Zt=ke,ke=null):Zt=ke.sibling;var Oo=X(N,ke,Je.value,ie);if(Oo===null){ke===null&&(ke=Zt);break}r&&ke&&Oo.alternate===null&&i(N,ke),B=b(Oo,B,De),Ve===null?we=Oo:Ve.sibling=Oo,Ve=Oo,ke=Zt}if(Je.done)return l(N,ke),et&&ni(N,De),we;if(ke===null){for(;!Je.done;De++,Je=q.next())Je=ae(N,Je.value,ie),Je!==null&&(B=b(Je,B,De),Ve===null?we=Je:Ve.sibling=Je,Ve=Je);return et&&ni(N,De),we}for(ke=u(ke);!Je.done;De++,Je=q.next())Je=Z(ke,N,De,Je.value,ie),Je!==null&&(r&&Je.alternate!==null&&ke.delete(Je.key===null?De:Je.key),B=b(Je,B,De),Ve===null?we=Je:Ve.sibling=Je,Ve=Je);return r&&ke.forEach(function(wk){return i(N,wk)}),et&&ni(N,De),we}function dt(N,B,q,ie){if(typeof q=="object"&&q!==null&&q.type===w&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case y:e:{for(var we=q.key;B!==null;){if(B.key===we){if(we=q.type,we===w){if(B.tag===7){l(N,B.sibling),ie=g(B,q.props.children),ie.return=N,N=ie;break e}}else if(B.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===F&&L1(we)===B.type){l(N,B.sibling),ie=g(B,q.props),Ts(ie,q),ie.return=N,N=ie;break e}l(N,B);break}else i(N,B);B=B.sibling}q.type===w?(ie=ti(q.props.children,N.mode,ie,q.key),ie.return=N,N=ie):(ie=dc(q.type,q.key,q.props,null,N.mode,ie),Ts(ie,q),ie.return=N,N=ie)}return M(N);case j:e:{for(we=q.key;B!==null;){if(B.key===we)if(B.tag===4&&B.stateNode.containerInfo===q.containerInfo&&B.stateNode.implementation===q.implementation){l(N,B.sibling),ie=g(B,q.children||[]),ie.return=N,N=ie;break e}else{l(N,B);break}else i(N,B);B=B.sibling}ie=gf(q,N.mode,ie),ie.return=N,N=ie}return M(N);case F:return we=q._init,q=we(q._payload),dt(N,B,q,ie)}if(be(q))return Pe(N,B,q,ie);if(fe(q)){if(we=fe(q),typeof we!="function")throw Error(o(150));return q=we.call(q),ze(N,B,q,ie)}if(typeof q.then=="function")return dt(N,B,_c(q),ie);if(q.$$typeof===D)return dt(N,B,pc(N,q),ie);Tc(N,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,B!==null&&B.tag===6?(l(N,B.sibling),ie=g(B,q),ie.return=N,N=ie):(l(N,B),ie=mf(q,N.mode,ie),ie.return=N,N=ie),M(N)):l(N,B)}return function(N,B,q,ie){try{_s=0;var we=dt(N,B,q,ie);return na=null,we}catch(ke){if(ke===bs||ke===gc)throw ke;var Ve=Dr(29,ke,null,N.mode);return Ve.lanes=ie,Ve.return=N,Ve}finally{}}}var oa=B1(!0),$1=B1(!1),Gr=$(null),Sn=null;function vo(r){var i=r.alternate;R(Yt,Yt.current&1),R(Gr,r),Sn===null&&(i===null||Ji.current!==null||i.memoizedState!==null)&&(Sn=r)}function N1(r){if(r.tag===22){if(R(Yt,Yt.current),R(Gr,r),Sn===null){var i=r.alternate;i!==null&&i.memoizedState!==null&&(Sn=r)}}else yo()}function yo(){R(Yt,Yt.current),R(Gr,Gr.current)}function qn(r){G(Gr),Sn===r&&(Sn=null),G(Yt)}var Yt=$(0);function zc(r){for(var i=r;i!==null;){if(i.tag===13){var l=i.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||$p(l)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Xf(r,i,l,u){i=r.memoizedState,l=l(u,i),l=l==null?i:x({},i,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Qf={enqueueSetState:function(r,i,l){r=r._reactInternals;var u=Or(),g=go(u);g.payload=i,l!=null&&(g.callback=l),i=xo(r,g,u),i!==null&&(Rr(i,r,u),ys(i,r,u))},enqueueReplaceState:function(r,i,l){r=r._reactInternals;var u=Or(),g=go(u);g.tag=1,g.payload=i,l!=null&&(g.callback=l),i=xo(r,g,u),i!==null&&(Rr(i,r,u),ys(i,r,u))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var l=Or(),u=go(l);u.tag=2,i!=null&&(u.callback=i),i=xo(r,u,l),i!==null&&(Rr(i,r,l),ys(i,r,l))}};function H1(r,i,l,u,g,b,M){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,b,M):i.prototype&&i.prototype.isPureReactComponent?!ds(l,u)||!ds(g,b):!0}function F1(r,i,l,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(l,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(l,u),i.state!==r&&Qf.enqueueReplaceState(i,i.state,null)}function di(r,i){var l=i;if("ref"in i){l={};for(var u in i)u!=="ref"&&(l[u]=i[u])}if(r=r.defaultProps){l===i&&(l=x({},l));for(var g in r)l[g]===void 0&&(l[g]=r[g])}return l}var Dc=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function V1(r){Dc(r)}function U1(r){console.error(r)}function I1(r){Dc(r)}function Pc(r,i){try{var l=r.onUncaughtError;l(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Y1(r,i,l){try{var u=r.onCaughtError;u(l.value,{componentStack:l.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(g){setTimeout(function(){throw g})}}function Zf(r,i,l){return l=go(l),l.tag=3,l.payload={element:null},l.callback=function(){Pc(r,i)},l}function q1(r){return r=go(r),r.tag=3,r}function W1(r,i,l,u){var g=l.type.getDerivedStateFromError;if(typeof g=="function"){var b=u.value;r.payload=function(){return g(b)},r.callback=function(){Y1(i,l,u)}}var M=l.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(r.callback=function(){Y1(i,l,u),typeof g!="function"&&(Mo===null?Mo=new Set([this]):Mo.add(this));var T=u.stack;this.componentDidCatch(u.value,{componentStack:T!==null?T:""})})}function w3(r,i,l,u,g){if(l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=l.alternate,i!==null&&ms(i,l,g,!0),l=Gr.current,l!==null){switch(l.tag){case 13:return Sn===null?wp():l.alternate===null&&Tt===0&&(Tt=3),l.flags&=-257,l.flags|=65536,l.lanes=g,u===Mf?l.flags|=16384:(i=l.updateQueue,i===null?l.updateQueue=new Set([u]):i.add(u),Sp(r,u,g)),!1;case 22:return l.flags|=65536,u===Mf?l.flags|=16384:(i=l.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},l.updateQueue=i):(l=i.retryQueue,l===null?i.retryQueue=new Set([u]):l.add(u)),Sp(r,u,g)),!1}throw Error(o(435,l.tag))}return Sp(r,u,g),wp(),!1}if(et)return i=Gr.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=g,u!==vf&&(r=Error(o(422),{cause:u}),ps(Ir(r,l)))):(u!==vf&&(i=Error(o(423),{cause:u}),ps(Ir(i,l))),r=r.current.alternate,r.flags|=65536,g&=-g,r.lanes|=g,u=Ir(u,l),g=Zf(r.stateNode,u,g),zf(r,g),Tt!==4&&(Tt=2)),!1;var b=Error(o(520),{cause:u});if(b=Ir(b,l),Rs===null?Rs=[b]:Rs.push(b),Tt!==4&&(Tt=2),i===null)return!0;u=Ir(u,l),l=i;do{switch(l.tag){case 3:return l.flags|=65536,r=g&-g,l.lanes|=r,r=Zf(l.stateNode,u,r),zf(l,r),!1;case 1:if(i=l.type,b=l.stateNode,(l.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Mo===null||!Mo.has(b))))return l.flags|=65536,g&=-g,l.lanes|=g,g=q1(g),W1(g,r,l,u),zf(l,g),!1}l=l.return}while(l!==null);return!1}var G1=Error(o(461)),Xt=!1;function rr(r,i,l,u){i.child=r===null?$1(i,null,l,u):oa(i,r.child,l,u)}function X1(r,i,l,u,g){l=l.render;var b=i.ref;if("ref"in u){var M={};for(var T in u)T!=="ref"&&(M[T]=u[T])}else M=u;return si(i),u=Of(r,i,l,M,b,g),T=Rf(),r!==null&&!Xt?(Lf(r,i,g),Wn(r,i,g)):(et&&T&&xf(i),i.flags|=1,rr(r,i,u,g),i.child)}function Q1(r,i,l,u,g){if(r===null){var b=l.type;return typeof b=="function"&&!pf(b)&&b.defaultProps===void 0&&l.compare===null?(i.tag=15,i.type=b,Z1(r,i,b,u,g)):(r=dc(l.type,null,u,i,i.mode,g),r.ref=i.ref,r.return=i,i.child=r)}if(b=r.child,!ip(r,g)){var M=b.memoizedProps;if(l=l.compare,l=l!==null?l:ds,l(M,u)&&r.ref===i.ref)return Wn(r,i,g)}return i.flags|=1,r=Hn(b,u),r.ref=i.ref,r.return=i,i.child=r}function Z1(r,i,l,u,g){if(r!==null){var b=r.memoizedProps;if(ds(b,u)&&r.ref===i.ref)if(Xt=!1,i.pendingProps=u=b,ip(r,g))(r.flags&131072)!==0&&(Xt=!0);else return i.lanes=r.lanes,Wn(r,i,g)}return Kf(r,i,l,u,g)}function K1(r,i,l){var u=i.pendingProps,g=u.children,b=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=b!==null?b.baseLanes|l:l,r!==null){for(g=i.child=r.child,b=0;g!==null;)b=b|g.lanes|g.childLanes,g=g.sibling;i.childLanes=b&~u}else i.childLanes=0,i.child=null;return J1(r,i,u,l)}if((l&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},r!==null&&mc(i,b!==null?b.cachePool:null),b!==null?Zx(i,b):Pf(),N1(i);else return i.lanes=i.childLanes=536870912,J1(r,i,b!==null?b.baseLanes|l:l,l)}else b!==null?(mc(i,b.cachePool),Zx(i,b),yo(),i.memoizedState=null):(r!==null&&mc(i,null),Pf(),yo());return rr(r,i,g,l),i.child}function J1(r,i,l,u){var g=Cf();return g=g===null?null:{parent:It._currentValue,pool:g},i.memoizedState={baseLanes:l,cachePool:g},r!==null&&mc(i,null),Pf(),N1(i),r!==null&&ms(r,i,u,!0),null}function Ac(r,i){var l=i.ref;if(l===null)r!==null&&r.ref!==null&&(i.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(r===null||r.ref!==l)&&(i.flags|=4194816)}}function Kf(r,i,l,u,g){return si(i),l=Of(r,i,l,u,void 0,g),u=Rf(),r!==null&&!Xt?(Lf(r,i,g),Wn(r,i,g)):(et&&u&&xf(i),i.flags|=1,rr(r,i,l,g),i.child)}function eb(r,i,l,u,g,b){return si(i),i.updateQueue=null,l=Jx(i,u,l,g),Kx(r),u=Rf(),r!==null&&!Xt?(Lf(r,i,b),Wn(r,i,b)):(et&&u&&xf(i),i.flags|=1,rr(r,i,l,b),i.child)}function tb(r,i,l,u,g){if(si(i),i.stateNode===null){var b=Gi,M=l.contextType;typeof M=="object"&&M!==null&&(b=cr(M)),b=new l(u,b),i.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=Qf,i.stateNode=b,b._reactInternals=i,b=i.stateNode,b.props=u,b.state=i.memoizedState,b.refs={},_f(i),M=l.contextType,b.context=typeof M=="object"&&M!==null?cr(M):Gi,b.state=i.memoizedState,M=l.getDerivedStateFromProps,typeof M=="function"&&(Xf(i,l,M,u),b.state=i.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(M=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),M!==b.state&&Qf.enqueueReplaceState(b,b.state,null),js(i,u,b,g),ws(),b.state=i.memoizedState),typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(r===null){b=i.stateNode;var T=i.memoizedProps,O=di(l,T);b.props=O;var W=b.context,re=l.contextType;M=Gi,typeof re=="object"&&re!==null&&(M=cr(re));var ae=l.getDerivedStateFromProps;re=typeof ae=="function"||typeof b.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,re||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(T||W!==M)&&F1(i,b,u,M),mo=!1;var X=i.memoizedState;b.state=X,js(i,u,b,g),ws(),W=i.memoizedState,T||X!==W||mo?(typeof ae=="function"&&(Xf(i,l,ae,u),W=i.memoizedState),(O=mo||H1(i,l,O,u,X,W,M))?(re||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=W),b.props=u,b.state=W,b.context=M,u=O):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,Tf(r,i),M=i.memoizedProps,re=di(l,M),b.props=re,ae=i.pendingProps,X=b.context,W=l.contextType,O=Gi,typeof W=="object"&&W!==null&&(O=cr(W)),T=l.getDerivedStateFromProps,(W=typeof T=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(M!==ae||X!==O)&&F1(i,b,u,O),mo=!1,X=i.memoizedState,b.state=X,js(i,u,b,g),ws();var Z=i.memoizedState;M!==ae||X!==Z||mo||r!==null&&r.dependencies!==null&&fc(r.dependencies)?(typeof T=="function"&&(Xf(i,l,T,u),Z=i.memoizedState),(re=mo||H1(i,l,re,u,X,Z,O)||r!==null&&r.dependencies!==null&&fc(r.dependencies))?(W||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,Z,O),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,Z,O)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||M===r.memoizedProps&&X===r.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||M===r.memoizedProps&&X===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Z),b.props=u,b.state=Z,b.context=O,u=re):(typeof b.componentDidUpdate!="function"||M===r.memoizedProps&&X===r.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||M===r.memoizedProps&&X===r.memoizedState||(i.flags|=1024),u=!1)}return b=u,Ac(r,i),u=(i.flags&128)!==0,b||u?(b=i.stateNode,l=u&&typeof l.getDerivedStateFromError!="function"?null:b.render(),i.flags|=1,r!==null&&u?(i.child=oa(i,r.child,null,g),i.child=oa(i,null,l,g)):rr(r,i,l,g),i.memoizedState=b.state,r=i.child):r=Wn(r,i,g),r}function rb(r,i,l,u){return fs(),i.flags|=256,rr(r,i,l,u),i.child}var Jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ep(r){return{baseLanes:r,cachePool:Ux()}}function tp(r,i,l){return r=r!==null?r.childLanes&~l:0,i&&(r|=Xr),r}function nb(r,i,l){var u=i.pendingProps,g=!1,b=(i.flags&128)!==0,M;if((M=b)||(M=r!==null&&r.memoizedState===null?!1:(Yt.current&2)!==0),M&&(g=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,r===null){if(et){if(g?vo(i):yo(),et){var T=_t,O;if(O=T){e:{for(O=T,T=jn;O.nodeType!==8;){if(!T){T=null;break e}if(O=sn(O.nextSibling),O===null){T=null;break e}}T=O}T!==null?(i.memoizedState={dehydrated:T,treeContext:ri!==null?{id:Fn,overflow:Vn}:null,retryLane:536870912,hydrationErrors:null},O=Dr(18,null,null,0),O.stateNode=T,O.return=i,i.child=O,yr=i,_t=null,O=!0):O=!1}O||ii(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return $p(T)?i.lanes=32:i.lanes=536870912,null;qn(i)}return T=u.children,u=u.fallback,g?(yo(),g=i.mode,T=Ec({mode:"hidden",children:T},g),u=ti(u,g,l,null),T.return=i,u.return=i,T.sibling=u,i.child=T,g=i.child,g.memoizedState=ep(l),g.childLanes=tp(r,M,l),i.memoizedState=Jf,u):(vo(i),rp(i,T))}if(O=r.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(b)i.flags&256?(vo(i),i.flags&=-257,i=np(r,i,l)):i.memoizedState!==null?(yo(),i.child=r.child,i.flags|=128,i=null):(yo(),g=u.fallback,T=i.mode,u=Ec({mode:"visible",children:u.children},T),g=ti(g,T,l,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,oa(i,r.child,null,l),u=i.child,u.memoizedState=ep(l),u.childLanes=tp(r,M,l),i.memoizedState=Jf,i=g);else if(vo(i),$p(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var W=M.dgst;M=W,u=Error(o(419)),u.stack="",u.digest=M,ps({value:u,source:null,stack:null}),i=np(r,i,l)}else if(Xt||ms(r,i,l,!1),M=(l&r.childLanes)!==0,Xt||M){if(M=ft,M!==null&&(u=l&-l,u=(u&42)!==0?1:Hr(u),u=(u&(M.suspendedLanes|l))!==0?0:u,u!==0&&u!==O.retryLane))throw O.retryLane=u,Wi(r,u),Rr(M,r,u),G1;T.data==="$?"||wp(),i=np(r,i,l)}else T.data==="$?"?(i.flags|=192,i.child=r.child,i=null):(r=O.treeContext,_t=sn(T.nextSibling),yr=i,et=!0,oi=null,jn=!1,r!==null&&(qr[Wr++]=Fn,qr[Wr++]=Vn,qr[Wr++]=ri,Fn=r.id,Vn=r.overflow,ri=i),i=rp(i,u.children),i.flags|=4096);return i}return g?(yo(),g=u.fallback,T=i.mode,O=r.child,W=O.sibling,u=Hn(O,{mode:"hidden",children:u.children}),u.subtreeFlags=O.subtreeFlags&65011712,W!==null?g=Hn(W,g):(g=ti(g,T,l,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,T=r.child.memoizedState,T===null?T=ep(l):(O=T.cachePool,O!==null?(W=It._currentValue,O=O.parent!==W?{parent:W,pool:W}:O):O=Ux(),T={baseLanes:T.baseLanes|l,cachePool:O}),g.memoizedState=T,g.childLanes=tp(r,M,l),i.memoizedState=Jf,u):(vo(i),l=r.child,r=l.sibling,l=Hn(l,{mode:"visible",children:u.children}),l.return=i,l.sibling=null,r!==null&&(M=i.deletions,M===null?(i.deletions=[r],i.flags|=16):M.push(r)),i.child=l,i.memoizedState=null,l)}function rp(r,i){return i=Ec({mode:"visible",children:i},r.mode),i.return=r,r.child=i}function Ec(r,i){return r=Dr(22,r,null,i),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function np(r,i,l){return oa(i,r.child,null,l),r=rp(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function ob(r,i,l){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),wf(r.return,i,l)}function op(r,i,l,u,g){var b=r.memoizedState;b===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:g}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=u,b.tail=l,b.tailMode=g)}function ib(r,i,l){var u=i.pendingProps,g=u.revealOrder,b=u.tail;if(rr(r,i,u.children,l),u=Yt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ob(r,l,i);else if(r.tag===19)ob(r,l,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(R(Yt,u),g){case"forwards":for(l=i.child,g=null;l!==null;)r=l.alternate,r!==null&&zc(r)===null&&(g=l),l=l.sibling;l=g,l===null?(g=i.child,i.child=null):(g=l.sibling,l.sibling=null),op(i,!1,g,l,b);break;case"backwards":for(l=null,g=i.child,i.child=null;g!==null;){if(r=g.alternate,r!==null&&zc(r)===null){i.child=g;break}r=g.sibling,g.sibling=l,l=g,g=r}op(i,!0,l,null,b);break;case"together":op(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wn(r,i,l){if(r!==null&&(i.dependencies=r.dependencies),Co|=i.lanes,(l&i.childLanes)===0)if(r!==null){if(ms(r,i,l,!1),(l&i.childLanes)===0)return null}else return null;if(r!==null&&i.child!==r.child)throw Error(o(153));if(i.child!==null){for(r=i.child,l=Hn(r,r.pendingProps),i.child=l,l.return=i;r.sibling!==null;)r=r.sibling,l=l.sibling=Hn(r,r.pendingProps),l.return=i;l.sibling=null}return i.child}function ip(r,i){return(r.lanes&i)!==0?!0:(r=r.dependencies,!!(r!==null&&fc(r)))}function j3(r,i,l){switch(i.tag){case 3:ce(i,i.stateNode.containerInfo),po(i,It,r.memoizedState.cache),fs();break;case 27:case 5:Fe(i);break;case 4:ce(i,i.stateNode.containerInfo);break;case 10:po(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(vo(i),i.flags|=128,null):(l&i.child.childLanes)!==0?nb(r,i,l):(vo(i),r=Wn(r,i,l),r!==null?r.sibling:null);vo(i);break;case 19:var g=(r.flags&128)!==0;if(u=(l&i.childLanes)!==0,u||(ms(r,i,l,!1),u=(l&i.childLanes)!==0),g){if(u)return ib(r,i,l);i.flags|=128}if(g=i.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),R(Yt,Yt.current),u)break;return null;case 22:case 23:return i.lanes=0,K1(r,i,l);case 24:po(i,It,r.memoizedState.cache)}return Wn(r,i,l)}function ab(r,i,l){if(r!==null)if(r.memoizedProps!==i.pendingProps)Xt=!0;else{if(!ip(r,l)&&(i.flags&128)===0)return Xt=!1,j3(r,i,l);Xt=(r.flags&131072)!==0}else Xt=!1,et&&(i.flags&1048576)!==0&&Lx(i,hc,i.index);switch(i.lanes=0,i.tag){case 16:e:{r=i.pendingProps;var u=i.elementType,g=u._init;if(u=g(u._payload),i.type=u,typeof u=="function")pf(u)?(r=di(u,r),i.tag=1,i=tb(null,i,u,r,l)):(i.tag=0,i=Kf(null,i,u,r,l));else{if(u!=null){if(g=u.$$typeof,g===L){i.tag=11,i=X1(null,i,u,r,l);break e}else if(g===E){i.tag=14,i=Q1(null,i,u,r,l);break e}}throw i=pe(u)||u,Error(o(306,i,""))}}return i;case 0:return Kf(r,i,i.type,i.pendingProps,l);case 1:return u=i.type,g=di(u,i.pendingProps),tb(r,i,u,g,l);case 3:e:{if(ce(i,i.stateNode.containerInfo),r===null)throw Error(o(387));u=i.pendingProps;var b=i.memoizedState;g=b.element,Tf(r,i),js(i,u,null,l);var M=i.memoizedState;if(u=M.cache,po(i,It,u),u!==b.cache&&jf(i,[It],l,!0),ws(),u=M.element,b.isDehydrated)if(b={element:u,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=b,i.memoizedState=b,i.flags&256){i=rb(r,i,u,l);break e}else if(u!==g){g=Ir(Error(o(424)),i),ps(g),i=rb(r,i,u,l);break e}else{switch(r=i.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(_t=sn(r.firstChild),yr=i,et=!0,oi=null,jn=!0,l=$1(i,null,u,l),i.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(fs(),u===g){i=Wn(r,i,l);break e}rr(r,i,u,l)}i=i.child}return i;case 26:return Ac(r,i),r===null?(l=dv(i.type,null,i.pendingProps,null))?i.memoizedState=l:et||(l=i.type,r=i.pendingProps,u=Wc(Q.current).createElement(l),u[Gt]=i,u[lr]=r,or(u,l,r),Ce(u),i.stateNode=u):i.memoizedState=dv(i.type,r.memoizedProps,i.pendingProps,r.memoizedState),null;case 27:return Fe(i),r===null&&et&&(u=i.stateNode=sv(i.type,i.pendingProps,Q.current),yr=i,jn=!0,g=_t,zo(i.type)?(Np=g,_t=sn(u.firstChild)):_t=g),rr(r,i,i.pendingProps.children,l),Ac(r,i),r===null&&(i.flags|=4194304),i.child;case 5:return r===null&&et&&((g=u=_t)&&(u=Q3(u,i.type,i.pendingProps,jn),u!==null?(i.stateNode=u,yr=i,_t=sn(u.firstChild),jn=!1,g=!0):g=!1),g||ii(i)),Fe(i),g=i.type,b=i.pendingProps,M=r!==null?r.memoizedProps:null,u=b.children,Rp(g,b)?u=null:M!==null&&Rp(g,M)&&(i.flags|=32),i.memoizedState!==null&&(g=Of(r,i,p3,null,null,l),Is._currentValue=g),Ac(r,i),rr(r,i,u,l),i.child;case 6:return r===null&&et&&((r=l=_t)&&(l=Z3(l,i.pendingProps,jn),l!==null?(i.stateNode=l,yr=i,_t=null,r=!0):r=!1),r||ii(i)),null;case 13:return nb(r,i,l);case 4:return ce(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=oa(i,null,u,l):rr(r,i,u,l),i.child;case 11:return X1(r,i,i.type,i.pendingProps,l);case 7:return rr(r,i,i.pendingProps,l),i.child;case 8:return rr(r,i,i.pendingProps.children,l),i.child;case 12:return rr(r,i,i.pendingProps.children,l),i.child;case 10:return u=i.pendingProps,po(i,i.type,u.value),rr(r,i,u.children,l),i.child;case 9:return g=i.type._context,u=i.pendingProps.children,si(i),g=cr(g),u=u(g),i.flags|=1,rr(r,i,u,l),i.child;case 14:return Q1(r,i,i.type,i.pendingProps,l);case 15:return Z1(r,i,i.type,i.pendingProps,l);case 19:return ib(r,i,l);case 31:return u=i.pendingProps,l=i.mode,u={mode:u.mode,children:u.children},r===null?(l=Ec(u,l),l.ref=i.ref,i.child=l,l.return=i,i=l):(l=Hn(r.child,u),l.ref=i.ref,i.child=l,l.return=i,i=l),i;case 22:return K1(r,i,l);case 24:return si(i),u=cr(It),r===null?(g=Cf(),g===null&&(g=ft,b=Sf(),g.pooledCache=b,b.refCount++,b!==null&&(g.pooledCacheLanes|=l),g=b),i.memoizedState={parent:u,cache:g},_f(i),po(i,It,g)):((r.lanes&l)!==0&&(Tf(r,i),js(i,null,null,l),ws()),g=r.memoizedState,b=i.memoizedState,g.parent!==u?(g={parent:u,cache:u},i.memoizedState=g,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=g),po(i,It,u)):(u=b.cache,po(i,It,u),u!==g.cache&&jf(i,[It],l,!0))),rr(r,i,i.pendingProps.children,l),i.child;case 29:throw i.pendingProps}throw Error(o(156,i.tag))}function Gn(r){r.flags|=4}function sb(r,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!mv(i)){if(i=Gr.current,i!==null&&((Ge&4194048)===Ge?Sn!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||i!==Sn))throw vs=Mf,Ix;r.flags|=8192}}function Oc(r,i){i!==null&&(r.flags|=4),r.flags&16384&&(i=r.tag!==22?Rn():536870912,r.lanes|=i,la|=i)}function zs(r,i){if(!et)switch(r.tailMode){case"hidden":i=r.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function jt(r){var i=r.alternate!==null&&r.alternate.child===r.child,l=0,u=0;if(i)for(var g=r.child;g!==null;)l|=g.lanes|g.childLanes,u|=g.subtreeFlags&65011712,u|=g.flags&65011712,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)l|=g.lanes|g.childLanes,u|=g.subtreeFlags,u|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=u,r.childLanes=l,i}function S3(r,i,l){var u=i.pendingProps;switch(bf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return jt(i),null;case 3:return l=i.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),In(It),ve(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(r===null||r.child===null)&&(hs(i)?Gn(i):r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Nx())),jt(i),null;case 26:return l=i.memoizedState,r===null?(Gn(i),l!==null?(jt(i),sb(i,l)):(jt(i),i.flags&=-16777217)):l?l!==r.memoizedState?(Gn(i),jt(i),sb(i,l)):(jt(i),i.flags&=-16777217):(r.memoizedProps!==u&&Gn(i),jt(i),i.flags&=-16777217),null;case 27:je(i),l=Q.current;var g=i.type;if(r!==null&&i.stateNode!=null)r.memoizedProps!==u&&Gn(i);else{if(!u){if(i.stateNode===null)throw Error(o(166));return jt(i),null}r=Y.current,hs(i)?Bx(i):(r=sv(g,u,l),i.stateNode=r,Gn(i))}return jt(i),null;case 5:if(je(i),l=i.type,r!==null&&i.stateNode!=null)r.memoizedProps!==u&&Gn(i);else{if(!u){if(i.stateNode===null)throw Error(o(166));return jt(i),null}if(r=Y.current,hs(i))Bx(i);else{switch(g=Wc(Q.current),r){case 1:r=g.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=g.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=g.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?g.createElement("select",{is:u.is}):g.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?g.createElement(l,{is:u.is}):g.createElement(l)}}r[Gt]=i,r[lr]=u;e:for(g=i.child;g!==null;){if(g.tag===5||g.tag===6)r.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===i)break e;for(;g.sibling===null;){if(g.return===null||g.return===i)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}i.stateNode=r;e:switch(or(r,l,u),l){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Gn(i)}}return jt(i),i.flags&=-16777217,null;case 6:if(r&&i.stateNode!=null)r.memoizedProps!==u&&Gn(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(o(166));if(r=Q.current,hs(i)){if(r=i.stateNode,l=i.memoizedProps,u=null,g=yr,g!==null)switch(g.tag){case 27:case 5:u=g.memoizedProps}r[Gt]=i,r=!!(r.nodeValue===l||u!==null&&u.suppressHydrationWarning===!0||ev(r.nodeValue,l)),r||ii(i)}else r=Wc(r).createTextNode(u),r[Gt]=i,i.stateNode=r}return jt(i),null;case 13:if(u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(g=hs(i),u!==null&&u.dehydrated!==null){if(r===null){if(!g)throw Error(o(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(o(317));g[Gt]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),g=!1}else g=Nx(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=g),g=!0;if(!g)return i.flags&256?(qn(i),i):(qn(i),null)}if(qn(i),(i.flags&128)!==0)return i.lanes=l,i;if(l=u!==null,r=r!==null&&r.memoizedState!==null,l){u=i.child,g=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(g=u.alternate.memoizedState.cachePool.pool);var b=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(b=u.memoizedState.cachePool.pool),b!==g&&(u.flags|=2048)}return l!==r&&l&&(i.child.flags|=8192),Oc(i,i.updateQueue),jt(i),null;case 4:return ve(),r===null&&Dp(i.stateNode.containerInfo),jt(i),null;case 10:return In(i.type),jt(i),null;case 19:if(G(Yt),g=i.memoizedState,g===null)return jt(i),null;if(u=(i.flags&128)!==0,b=g.rendering,b===null)if(u)zs(g,!1);else{if(Tt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(b=zc(r),b!==null){for(i.flags|=128,zs(g,!1),r=b.updateQueue,i.updateQueue=r,Oc(i,r),i.subtreeFlags=0,r=l,l=i.child;l!==null;)Rx(l,r),l=l.sibling;return R(Yt,Yt.current&1|2),i.child}r=r.sibling}g.tail!==null&&Ze()>Bc&&(i.flags|=128,u=!0,zs(g,!1),i.lanes=4194304)}else{if(!u)if(r=zc(b),r!==null){if(i.flags|=128,u=!0,r=r.updateQueue,i.updateQueue=r,Oc(i,r),zs(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!et)return jt(i),null}else 2*Ze()-g.renderingStartTime>Bc&&l!==536870912&&(i.flags|=128,u=!0,zs(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(r=g.last,r!==null?r.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ze(),i.sibling=null,r=Yt.current,R(Yt,u?r&1|2:r&1),i):(jt(i),null);case 22:case 23:return qn(i),Af(),u=i.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(l&536870912)!==0&&(i.flags&128)===0&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),l=i.updateQueue,l!==null&&Oc(i,l.retryQueue),l=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==l&&(i.flags|=2048),r!==null&&G(li),null;case 24:return l=null,r!==null&&(l=r.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),In(It),jt(i),null;case 25:return null;case 30:return null}throw Error(o(156,i.tag))}function k3(r,i){switch(bf(i),i.tag){case 1:return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return In(It),ve(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 26:case 27:case 5:return je(i),null;case 13:if(qn(i),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(o(340));fs()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return G(Yt),null;case 4:return ve(),null;case 10:return In(i.type),null;case 22:case 23:return qn(i),Af(),r!==null&&G(li),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 24:return In(It),null;case 25:return null;default:return null}}function lb(r,i){switch(bf(i),i.tag){case 3:In(It),ve();break;case 26:case 27:case 5:je(i);break;case 4:ve();break;case 13:qn(i);break;case 19:G(Yt);break;case 10:In(i.type);break;case 22:case 23:qn(i),Af(),r!==null&&G(li);break;case 24:In(It)}}function Ds(r,i){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var g=u.next;l=g;do{if((l.tag&r)===r){u=void 0;var b=l.create,M=l.inst;u=b(),M.destroy=u}l=l.next}while(l!==g)}}catch(T){ht(i,i.return,T)}}function wo(r,i,l){try{var u=i.updateQueue,g=u!==null?u.lastEffect:null;if(g!==null){var b=g.next;u=b;do{if((u.tag&r)===r){var M=u.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,g=i;var O=l,W=T;try{W()}catch(re){ht(g,O,re)}}}u=u.next}while(u!==b)}}catch(re){ht(i,i.return,re)}}function cb(r){var i=r.updateQueue;if(i!==null){var l=r.stateNode;try{Qx(i,l)}catch(u){ht(r,r.return,u)}}}function db(r,i,l){l.props=di(r.type,r.memoizedProps),l.state=r.memoizedState;try{l.componentWillUnmount()}catch(u){ht(r,i,u)}}function Ps(r,i){try{var l=r.ref;if(l!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof l=="function"?r.refCleanup=l(u):l.current=u}}catch(g){ht(r,i,g)}}function kn(r,i){var l=r.ref,u=r.refCleanup;if(l!==null)if(typeof u=="function")try{u()}catch(g){ht(r,i,g)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(g){ht(r,i,g)}else l.current=null}function ub(r){var i=r.type,l=r.memoizedProps,u=r.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":l.autoFocus&&u.focus();break e;case"img":l.src?u.src=l.src:l.srcSet&&(u.srcset=l.srcSet)}}catch(g){ht(r,r.return,g)}}function ap(r,i,l){try{var u=r.stateNode;Y3(u,r.type,l,i),u[lr]=i}catch(g){ht(r,r.return,g)}}function hb(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&zo(r.type)||r.tag===4}function sp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||hb(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&zo(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function lp(r,i,l){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(r,i):(i=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,i.appendChild(r),l=l._reactRootContainer,l!=null||i.onclick!==null||(i.onclick=qc));else if(u!==4&&(u===27&&zo(r.type)&&(l=r.stateNode,i=null),r=r.child,r!==null))for(lp(r,i,l),r=r.sibling;r!==null;)lp(r,i,l),r=r.sibling}function Rc(r,i,l){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?l.insertBefore(r,i):l.appendChild(r);else if(u!==4&&(u===27&&zo(r.type)&&(l=r.stateNode),r=r.child,r!==null))for(Rc(r,i,l),r=r.sibling;r!==null;)Rc(r,i,l),r=r.sibling}function fb(r){var i=r.stateNode,l=r.memoizedProps;try{for(var u=r.type,g=i.attributes;g.length;)i.removeAttributeNode(g[0]);or(i,u,l),i[Gt]=r,i[lr]=l}catch(b){ht(r,r.return,b)}}var Xn=!1,Et=!1,cp=!1,pb=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function C3(r,i){if(r=r.containerInfo,Ep=Jc,r=Cx(r),sf(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var g=u.anchorOffset,b=u.focusNode;u=u.focusOffset;try{l.nodeType,b.nodeType}catch{l=null;break e}var M=0,T=-1,O=-1,W=0,re=0,ae=r,X=null;t:for(;;){for(var Z;ae!==l||g!==0&&ae.nodeType!==3||(T=M+g),ae!==b||u!==0&&ae.nodeType!==3||(O=M+u),ae.nodeType===3&&(M+=ae.nodeValue.length),(Z=ae.firstChild)!==null;)X=ae,ae=Z;for(;;){if(ae===r)break t;if(X===l&&++W===g&&(T=M),X===b&&++re===u&&(O=M),(Z=ae.nextSibling)!==null)break;ae=X,X=ae.parentNode}ae=Z}l=T===-1||O===-1?null:{start:T,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(Op={focusedElem:r,selectionRange:l},Jc=!1,Qt=i;Qt!==null;)if(i=Qt,r=i.child,(i.subtreeFlags&1024)!==0&&r!==null)r.return=i,Qt=r;else for(;Qt!==null;){switch(i=Qt,b=i.alternate,r=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&b!==null){r=void 0,l=i,g=b.memoizedProps,b=b.memoizedState,u=l.stateNode;try{var Pe=di(l.type,g,l.elementType===l.type);r=u.getSnapshotBeforeUpdate(Pe,b),u.__reactInternalSnapshotBeforeUpdate=r}catch(ze){ht(l,l.return,ze)}}break;case 3:if((r&1024)!==0){if(r=i.stateNode.containerInfo,l=r.nodeType,l===9)Bp(r);else if(l===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Bp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(o(163))}if(r=i.sibling,r!==null){r.return=i.return,Qt=r;break}Qt=i.return}}function mb(r,i,l){var u=l.flags;switch(l.tag){case 0:case 11:case 15:jo(r,l),u&4&&Ds(5,l);break;case 1:if(jo(r,l),u&4)if(r=l.stateNode,i===null)try{r.componentDidMount()}catch(M){ht(l,l.return,M)}else{var g=di(l.type,i.memoizedProps);i=i.memoizedState;try{r.componentDidUpdate(g,i,r.__reactInternalSnapshotBeforeUpdate)}catch(M){ht(l,l.return,M)}}u&64&&cb(l),u&512&&Ps(l,l.return);break;case 3:if(jo(r,l),u&64&&(r=l.updateQueue,r!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{Qx(r,i)}catch(M){ht(l,l.return,M)}}break;case 27:i===null&&u&4&&fb(l);case 26:case 5:jo(r,l),i===null&&u&4&&ub(l),u&512&&Ps(l,l.return);break;case 12:jo(r,l);break;case 13:jo(r,l),u&4&&bb(r,l),u&64&&(r=l.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(l=O3.bind(null,l),K3(r,l))));break;case 22:if(u=l.memoizedState!==null||Xn,!u){i=i!==null&&i.memoizedState!==null||Et,g=Xn;var b=Et;Xn=u,(Et=i)&&!b?So(r,l,(l.subtreeFlags&8772)!==0):jo(r,l),Xn=g,Et=b}break;case 30:break;default:jo(r,l)}}function gb(r){var i=r.alternate;i!==null&&(r.alternate=null,gb(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&_e(i)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var vt=null,Sr=!1;function Qn(r,i,l){for(l=l.child;l!==null;)xb(r,i,l),l=l.sibling}function xb(r,i,l){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Ke,l)}catch{}switch(l.tag){case 26:Et||kn(l,i),Qn(r,i,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Et||kn(l,i);var u=vt,g=Sr;zo(l.type)&&(vt=l.stateNode,Sr=!1),Qn(r,i,l),Hs(l.stateNode),vt=u,Sr=g;break;case 5:Et||kn(l,i);case 6:if(u=vt,g=Sr,vt=null,Qn(r,i,l),vt=u,Sr=g,vt!==null)if(Sr)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(l.stateNode)}catch(b){ht(l,i,b)}else try{vt.removeChild(l.stateNode)}catch(b){ht(l,i,b)}break;case 18:vt!==null&&(Sr?(r=vt,iv(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,l.stateNode),Gs(r)):iv(vt,l.stateNode));break;case 4:u=vt,g=Sr,vt=l.stateNode.containerInfo,Sr=!0,Qn(r,i,l),vt=u,Sr=g;break;case 0:case 11:case 14:case 15:Et||wo(2,l,i),Et||wo(4,l,i),Qn(r,i,l);break;case 1:Et||(kn(l,i),u=l.stateNode,typeof u.componentWillUnmount=="function"&&db(l,i,u)),Qn(r,i,l);break;case 21:Qn(r,i,l);break;case 22:Et=(u=Et)||l.memoizedState!==null,Qn(r,i,l),Et=u;break;default:Qn(r,i,l)}}function bb(r,i){if(i.memoizedState===null&&(r=i.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Gs(r)}catch(l){ht(i,i.return,l)}}function M3(r){switch(r.tag){case 13:case 19:var i=r.stateNode;return i===null&&(i=r.stateNode=new pb),i;case 22:return r=r.stateNode,i=r._retryCache,i===null&&(i=r._retryCache=new pb),i;default:throw Error(o(435,r.tag))}}function dp(r,i){var l=M3(r);i.forEach(function(u){var g=R3.bind(null,r,u);l.has(u)||(l.add(u),u.then(g,g))})}function Pr(r,i){var l=i.deletions;if(l!==null)for(var u=0;u<l.length;u++){var g=l[u],b=r,M=i,T=M;e:for(;T!==null;){switch(T.tag){case 27:if(zo(T.type)){vt=T.stateNode,Sr=!1;break e}break;case 5:vt=T.stateNode,Sr=!1;break e;case 3:case 4:vt=T.stateNode.containerInfo,Sr=!0;break e}T=T.return}if(vt===null)throw Error(o(160));xb(b,M,g),vt=null,Sr=!1,b=g.alternate,b!==null&&(b.return=null),g.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)vb(i,r),i=i.sibling}var an=null;function vb(r,i){var l=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Pr(i,r),Ar(r),u&4&&(wo(3,r,r.return),Ds(3,r),wo(5,r,r.return));break;case 1:Pr(i,r),Ar(r),u&512&&(Et||l===null||kn(l,l.return)),u&64&&Xn&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(l=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=l===null?u:l.concat(u))));break;case 26:var g=an;if(Pr(i,r),Ar(r),u&512&&(Et||l===null||kn(l,l.return)),u&4){var b=l!==null?l.memoizedState:null;if(u=r.memoizedState,l===null)if(u===null)if(r.stateNode===null){e:{u=r.type,l=r.memoizedProps,g=g.ownerDocument||g;t:switch(u){case"title":b=g.getElementsByTagName("title")[0],(!b||b[se]||b[Gt]||b.namespaceURI==="http://www.w3.org/2000/svg"||b.hasAttribute("itemprop"))&&(b=g.createElement(u),g.head.insertBefore(b,g.querySelector("head > title"))),or(b,u,l),b[Gt]=r,Ce(b),u=b;break e;case"link":var M=fv("link","href",g).get(u+(l.href||""));if(M){for(var T=0;T<M.length;T++)if(b=M[T],b.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&b.getAttribute("rel")===(l.rel==null?null:l.rel)&&b.getAttribute("title")===(l.title==null?null:l.title)&&b.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){M.splice(T,1);break t}}b=g.createElement(u),or(b,u,l),g.head.appendChild(b);break;case"meta":if(M=fv("meta","content",g).get(u+(l.content||""))){for(T=0;T<M.length;T++)if(b=M[T],b.getAttribute("content")===(l.content==null?null:""+l.content)&&b.getAttribute("name")===(l.name==null?null:l.name)&&b.getAttribute("property")===(l.property==null?null:l.property)&&b.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&b.getAttribute("charset")===(l.charSet==null?null:l.charSet)){M.splice(T,1);break t}}b=g.createElement(u),or(b,u,l),g.head.appendChild(b);break;default:throw Error(o(468,u))}b[Gt]=r,Ce(b),u=b}r.stateNode=u}else pv(g,r.type,r.stateNode);else r.stateNode=hv(g,u,r.memoizedProps);else b!==u?(b===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):b.count--,u===null?pv(g,r.type,r.stateNode):hv(g,u,r.memoizedProps)):u===null&&r.stateNode!==null&&ap(r,r.memoizedProps,l.memoizedProps)}break;case 27:Pr(i,r),Ar(r),u&512&&(Et||l===null||kn(l,l.return)),l!==null&&u&4&&ap(r,r.memoizedProps,l.memoizedProps);break;case 5:if(Pr(i,r),Ar(r),u&512&&(Et||l===null||kn(l,l.return)),r.flags&32){g=r.stateNode;try{Hi(g,"")}catch(Z){ht(r,r.return,Z)}}u&4&&r.stateNode!=null&&(g=r.memoizedProps,ap(r,g,l!==null?l.memoizedProps:g)),u&1024&&(cp=!0);break;case 6:if(Pr(i,r),Ar(r),u&4){if(r.stateNode===null)throw Error(o(162));u=r.memoizedProps,l=r.stateNode;try{l.nodeValue=u}catch(Z){ht(r,r.return,Z)}}break;case 3:if(Qc=null,g=an,an=Gc(i.containerInfo),Pr(i,r),an=g,Ar(r),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Gs(i.containerInfo)}catch(Z){ht(r,r.return,Z)}cp&&(cp=!1,yb(r));break;case 4:u=an,an=Gc(r.stateNode.containerInfo),Pr(i,r),Ar(r),an=u;break;case 12:Pr(i,r),Ar(r);break;case 13:Pr(i,r),Ar(r),r.child.flags&8192&&r.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gp=Ze()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,dp(r,u)));break;case 22:g=r.memoizedState!==null;var O=l!==null&&l.memoizedState!==null,W=Xn,re=Et;if(Xn=W||g,Et=re||O,Pr(i,r),Et=re,Xn=W,Ar(r),u&8192)e:for(i=r.stateNode,i._visibility=g?i._visibility&-2:i._visibility|1,g&&(l===null||O||Xn||Et||ui(r)),l=null,i=r;;){if(i.tag===5||i.tag===26){if(l===null){O=l=i;try{if(b=O.stateNode,g)M=b.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=O.stateNode;var ae=O.memoizedProps.style,X=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;T.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Z){ht(O,O.return,Z)}}}else if(i.tag===6){if(l===null){O=i;try{O.stateNode.nodeValue=g?"":O.memoizedProps}catch(Z){ht(O,O.return,Z)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===r)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;l===i&&(l=null),i=i.return}l===i&&(l=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=r.updateQueue,u!==null&&(l=u.retryQueue,l!==null&&(u.retryQueue=null,dp(r,l))));break;case 19:Pr(i,r),Ar(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,dp(r,u)));break;case 30:break;case 21:break;default:Pr(i,r),Ar(r)}}function Ar(r){var i=r.flags;if(i&2){try{for(var l,u=r.return;u!==null;){if(hb(u)){l=u;break}u=u.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var g=l.stateNode,b=sp(r);Rc(r,b,g);break;case 5:var M=l.stateNode;l.flags&32&&(Hi(M,""),l.flags&=-33);var T=sp(r);Rc(r,T,M);break;case 3:case 4:var O=l.stateNode.containerInfo,W=sp(r);lp(r,W,O);break;default:throw Error(o(161))}}catch(re){ht(r,r.return,re)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function yb(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var i=r;yb(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),r=r.sibling}}function jo(r,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)mb(r,i.alternate,i),i=i.sibling}function ui(r){for(r=r.child;r!==null;){var i=r;switch(i.tag){case 0:case 11:case 14:case 15:wo(4,i,i.return),ui(i);break;case 1:kn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&db(i,i.return,l),ui(i);break;case 27:Hs(i.stateNode);case 26:case 5:kn(i,i.return),ui(i);break;case 22:i.memoizedState===null&&ui(i);break;case 30:ui(i);break;default:ui(i)}r=r.sibling}}function So(r,i,l){for(l=l&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,g=r,b=i,M=b.flags;switch(b.tag){case 0:case 11:case 15:So(g,b,l),Ds(4,b);break;case 1:if(So(g,b,l),u=b,g=u.stateNode,typeof g.componentDidMount=="function")try{g.componentDidMount()}catch(W){ht(u,u.return,W)}if(u=b,g=u.updateQueue,g!==null){var T=u.stateNode;try{var O=g.shared.hiddenCallbacks;if(O!==null)for(g.shared.hiddenCallbacks=null,g=0;g<O.length;g++)Xx(O[g],T)}catch(W){ht(u,u.return,W)}}l&&M&64&&cb(b),Ps(b,b.return);break;case 27:fb(b);case 26:case 5:So(g,b,l),l&&u===null&&M&4&&ub(b),Ps(b,b.return);break;case 12:So(g,b,l);break;case 13:So(g,b,l),l&&M&4&&bb(g,b);break;case 22:b.memoizedState===null&&So(g,b,l),Ps(b,b.return);break;case 30:break;default:So(g,b,l)}i=i.sibling}}function up(r,i){var l=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(r!=null&&r.refCount++,l!=null&&gs(l))}function hp(r,i){r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&gs(r))}function Cn(r,i,l,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)wb(r,i,l,u),i=i.sibling}function wb(r,i,l,u){var g=i.flags;switch(i.tag){case 0:case 11:case 15:Cn(r,i,l,u),g&2048&&Ds(9,i);break;case 1:Cn(r,i,l,u);break;case 3:Cn(r,i,l,u),g&2048&&(r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&gs(r)));break;case 12:if(g&2048){Cn(r,i,l,u),r=i.stateNode;try{var b=i.memoizedProps,M=b.id,T=b.onPostCommit;typeof T=="function"&&T(M,i.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(O){ht(i,i.return,O)}}else Cn(r,i,l,u);break;case 13:Cn(r,i,l,u);break;case 23:break;case 22:b=i.stateNode,M=i.alternate,i.memoizedState!==null?b._visibility&2?Cn(r,i,l,u):As(r,i):b._visibility&2?Cn(r,i,l,u):(b._visibility|=2,ia(r,i,l,u,(i.subtreeFlags&10256)!==0)),g&2048&&up(M,i);break;case 24:Cn(r,i,l,u),g&2048&&hp(i.alternate,i);break;default:Cn(r,i,l,u)}}function ia(r,i,l,u,g){for(g=g&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var b=r,M=i,T=l,O=u,W=M.flags;switch(M.tag){case 0:case 11:case 15:ia(b,M,T,O,g),Ds(8,M);break;case 23:break;case 22:var re=M.stateNode;M.memoizedState!==null?re._visibility&2?ia(b,M,T,O,g):As(b,M):(re._visibility|=2,ia(b,M,T,O,g)),g&&W&2048&&up(M.alternate,M);break;case 24:ia(b,M,T,O,g),g&&W&2048&&hp(M.alternate,M);break;default:ia(b,M,T,O,g)}i=i.sibling}}function As(r,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var l=r,u=i,g=u.flags;switch(u.tag){case 22:As(l,u),g&2048&&up(u.alternate,u);break;case 24:As(l,u),g&2048&&hp(u.alternate,u);break;default:As(l,u)}i=i.sibling}}var Es=8192;function aa(r){if(r.subtreeFlags&Es)for(r=r.child;r!==null;)jb(r),r=r.sibling}function jb(r){switch(r.tag){case 26:aa(r),r.flags&Es&&r.memoizedState!==null&&uk(an,r.memoizedState,r.memoizedProps);break;case 5:aa(r);break;case 3:case 4:var i=an;an=Gc(r.stateNode.containerInfo),aa(r),an=i;break;case 22:r.memoizedState===null&&(i=r.alternate,i!==null&&i.memoizedState!==null?(i=Es,Es=16777216,aa(r),Es=i):aa(r));break;default:aa(r)}}function Sb(r){var i=r.alternate;if(i!==null&&(r=i.child,r!==null)){i.child=null;do i=r.sibling,r.sibling=null,r=i;while(r!==null)}}function Os(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];Qt=u,Cb(u,r)}Sb(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)kb(r),r=r.sibling}function kb(r){switch(r.tag){case 0:case 11:case 15:Os(r),r.flags&2048&&wo(9,r,r.return);break;case 3:Os(r);break;case 12:Os(r);break;case 22:var i=r.stateNode;r.memoizedState!==null&&i._visibility&2&&(r.return===null||r.return.tag!==13)?(i._visibility&=-3,Lc(r)):Os(r);break;default:Os(r)}}function Lc(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];Qt=u,Cb(u,r)}Sb(r)}for(r=r.child;r!==null;){switch(i=r,i.tag){case 0:case 11:case 15:wo(8,i,i.return),Lc(i);break;case 22:l=i.stateNode,l._visibility&2&&(l._visibility&=-3,Lc(i));break;default:Lc(i)}r=r.sibling}}function Cb(r,i){for(;Qt!==null;){var l=Qt;switch(l.tag){case 0:case 11:case 15:wo(8,l,i);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var u=l.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:gs(l.memoizedState.cache)}if(u=l.child,u!==null)u.return=l,Qt=u;else e:for(l=r;Qt!==null;){u=Qt;var g=u.sibling,b=u.return;if(gb(u),u===l){Qt=null;break e}if(g!==null){g.return=b,Qt=g;break e}Qt=b}}}var _3={getCacheForType:function(r){var i=cr(It),l=i.data.get(r);return l===void 0&&(l=r(),i.data.set(r,l)),l}},T3=typeof WeakMap=="function"?WeakMap:Map,ot=0,ft=null,Ue=null,Ge=0,it=0,Er=null,ko=!1,sa=!1,fp=!1,Zn=0,Tt=0,Co=0,hi=0,pp=0,Xr=0,la=0,Rs=null,kr=null,mp=!1,gp=0,Bc=1/0,$c=null,Mo=null,nr=0,_o=null,ca=null,da=0,xp=0,bp=null,Mb=null,Ls=0,vp=null;function Or(){if((ot&2)!==0&&Ge!==0)return Ge&-Ge;if(I.T!==null){var r=Zi;return r!==0?r:Mp()}return Bn()}function _b(){Xr===0&&(Xr=(Ge&536870912)===0||et?Bi():536870912);var r=Gr.current;return r!==null&&(r.flags|=32),Xr}function Rr(r,i,l){(r===ft&&(it===2||it===9)||r.cancelPendingCommit!==null)&&(ua(r,0),To(r,Ge,Xr,!1)),ye(r,l),((ot&2)===0||r!==ft)&&(r===ft&&((ot&2)===0&&(hi|=l),Tt===4&&To(r,Ge,Xr,!1)),Mn(r))}function Tb(r,i,l){if((ot&6)!==0)throw Error(o(327));var u=!l&&(i&124)===0&&(i&r.expiredLanes)===0||Wt(r,i),g=u?P3(r,i):jp(r,i,!0),b=u;do{if(g===0){sa&&!u&&To(r,i,0,!1);break}else{if(l=r.current.alternate,b&&!z3(l)){g=jp(r,i,!1),b=!1;continue}if(g===2){if(b=i,r.errorRecoveryDisabledLanes&b)var M=0;else M=r.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var T=r;g=Rs;var O=T.current.memoizedState.isDehydrated;if(O&&(ua(T,M).flags|=256),M=jp(T,M,!1),M!==2){if(fp&&!O){T.errorRecoveryDisabledLanes|=b,hi|=b,g=4;break e}b=kr,kr=g,b!==null&&(kr===null?kr=b:kr.push.apply(kr,b))}g=M}if(b=!1,g!==2)continue}}if(g===1){ua(r,0),To(r,i,0,!0);break}e:{switch(u=r,b=g,b){case 0:case 1:throw Error(o(345));case 4:if((i&4194048)!==i)break;case 6:To(u,i,Xr,!ko);break e;case 2:kr=null;break;case 3:case 5:break;default:throw Error(o(329))}if((i&62914560)===i&&(g=gp+300-Ze(),10<g)){if(To(u,i,Xr,!ko),xr(u,0,!0)!==0)break e;u.timeoutHandle=nv(zb.bind(null,u,l,kr,$c,mp,i,Xr,hi,la,ko,b,2,-0,0),g);break e}zb(u,l,kr,$c,mp,i,Xr,hi,la,ko,b,0,-0,0)}}break}while(!0);Mn(r)}function zb(r,i,l,u,g,b,M,T,O,W,re,ae,X,Z){if(r.timeoutHandle=-1,ae=i.subtreeFlags,(ae&8192||(ae&16785408)===16785408)&&(Us={stylesheets:null,count:0,unsuspend:dk},jb(i),ae=hk(),ae!==null)){r.cancelPendingCommit=ae(Lb.bind(null,r,i,b,l,u,g,M,T,O,re,1,X,Z)),To(r,b,M,!W);return}Lb(r,i,b,l,u,g,M,T,O)}function z3(r){for(var i=r;;){var l=i.tag;if((l===0||l===11||l===15)&&i.flags&16384&&(l=i.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var u=0;u<l.length;u++){var g=l[u],b=g.getSnapshot;g=g.value;try{if(!zr(b(),g))return!1}catch{return!1}}if(l=i.child,i.subtreeFlags&16384&&l!==null)l.return=i,i=l;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function To(r,i,l,u){i&=~pp,i&=~hi,r.suspendedLanes|=i,r.pingedLanes&=~i,u&&(r.warmLanes|=i),u=r.expirationTimes;for(var g=i;0<g;){var b=31-gt(g),M=1<<b;u[b]=-1,g&=~M}l!==0&&sr(r,l,i)}function Nc(){return(ot&6)===0?(Bs(0),!1):!0}function yp(){if(Ue!==null){if(it===0)var r=Ue.return;else r=Ue,Un=ai=null,Bf(r),na=null,_s=0,r=Ue;for(;r!==null;)lb(r.alternate,r),r=r.return;Ue=null}}function ua(r,i){var l=r.timeoutHandle;l!==-1&&(r.timeoutHandle=-1,W3(l)),l=r.cancelPendingCommit,l!==null&&(r.cancelPendingCommit=null,l()),yp(),ft=r,Ue=l=Hn(r.current,null),Ge=i,it=0,Er=null,ko=!1,sa=Wt(r,i),fp=!1,la=Xr=pp=hi=Co=Tt=0,kr=Rs=null,mp=!1,(i&8)!==0&&(i|=i&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=i;0<u;){var g=31-gt(u),b=1<<g;i|=r[g],u&=~b}return Zn=i,sc(),l}function Db(r,i){He=null,I.H=Mc,i===bs||i===gc?(i=Wx(),it=3):i===Ix?(i=Wx(),it=4):it=i===G1?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Er=i,Ue===null&&(Tt=1,Pc(r,Ir(i,r.current)))}function Pb(){var r=I.H;return I.H=Mc,r===null?Mc:r}function Ab(){var r=I.A;return I.A=_3,r}function wp(){Tt=4,ko||(Ge&4194048)!==Ge&&Gr.current!==null||(sa=!0),(Co&134217727)===0&&(hi&134217727)===0||ft===null||To(ft,Ge,Xr,!1)}function jp(r,i,l){var u=ot;ot|=2;var g=Pb(),b=Ab();(ft!==r||Ge!==i)&&($c=null,ua(r,i)),i=!1;var M=Tt;e:do try{if(it!==0&&Ue!==null){var T=Ue,O=Er;switch(it){case 8:yp(),M=6;break e;case 3:case 2:case 9:case 6:Gr.current===null&&(i=!0);var W=it;if(it=0,Er=null,ha(r,T,O,W),l&&sa){M=0;break e}break;default:W=it,it=0,Er=null,ha(r,T,O,W)}}D3(),M=Tt;break}catch(re){Db(r,re)}while(!0);return i&&r.shellSuspendCounter++,Un=ai=null,ot=u,I.H=g,I.A=b,Ue===null&&(ft=null,Ge=0,sc()),M}function D3(){for(;Ue!==null;)Eb(Ue)}function P3(r,i){var l=ot;ot|=2;var u=Pb(),g=Ab();ft!==r||Ge!==i?($c=null,Bc=Ze()+500,ua(r,i)):sa=Wt(r,i);e:do try{if(it!==0&&Ue!==null){i=Ue;var b=Er;t:switch(it){case 1:it=0,Er=null,ha(r,i,b,1);break;case 2:case 9:if(Yx(b)){it=0,Er=null,Ob(i);break}i=function(){it!==2&&it!==9||ft!==r||(it=7),Mn(r)},b.then(i,i);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:Yx(b)?(it=0,Er=null,Ob(i)):(it=0,Er=null,ha(r,i,b,7));break;case 5:var M=null;switch(Ue.tag){case 26:M=Ue.memoizedState;case 5:case 27:var T=Ue;if(!M||mv(M)){it=0,Er=null;var O=T.sibling;if(O!==null)Ue=O;else{var W=T.return;W!==null?(Ue=W,Hc(W)):Ue=null}break t}}it=0,Er=null,ha(r,i,b,5);break;case 6:it=0,Er=null,ha(r,i,b,6);break;case 8:yp(),Tt=6;break e;default:throw Error(o(462))}}A3();break}catch(re){Db(r,re)}while(!0);return Un=ai=null,I.H=u,I.A=g,ot=l,Ue!==null?0:(ft=null,Ge=0,sc(),Tt)}function A3(){for(;Ue!==null&&!Nr();)Eb(Ue)}function Eb(r){var i=ab(r.alternate,r,Zn);r.memoizedProps=r.pendingProps,i===null?Hc(r):Ue=i}function Ob(r){var i=r,l=i.alternate;switch(i.tag){case 15:case 0:i=eb(l,i,i.pendingProps,i.type,void 0,Ge);break;case 11:i=eb(l,i,i.pendingProps,i.type.render,i.ref,Ge);break;case 5:Bf(i);default:lb(l,i),i=Ue=Rx(i,Zn),i=ab(l,i,Zn)}r.memoizedProps=r.pendingProps,i===null?Hc(r):Ue=i}function ha(r,i,l,u){Un=ai=null,Bf(i),na=null,_s=0;var g=i.return;try{if(w3(r,g,i,l,Ge)){Tt=1,Pc(r,Ir(l,r.current)),Ue=null;return}}catch(b){if(g!==null)throw Ue=g,b;Tt=1,Pc(r,Ir(l,r.current)),Ue=null;return}i.flags&32768?(et||u===1?r=!0:sa||(Ge&536870912)!==0?r=!1:(ko=r=!0,(u===2||u===9||u===3||u===6)&&(u=Gr.current,u!==null&&u.tag===13&&(u.flags|=16384))),Rb(i,r)):Hc(i)}function Hc(r){var i=r;do{if((i.flags&32768)!==0){Rb(i,ko);return}r=i.return;var l=S3(i.alternate,i,Zn);if(l!==null){Ue=l;return}if(i=i.sibling,i!==null){Ue=i;return}Ue=i=r}while(i!==null);Tt===0&&(Tt=5)}function Rb(r,i){do{var l=k3(r.alternate,r);if(l!==null){l.flags&=32767,Ue=l;return}if(l=r.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!i&&(r=r.sibling,r!==null)){Ue=r;return}Ue=r=l}while(r!==null);Tt=6,Ue=null}function Lb(r,i,l,u,g,b,M,T,O){r.cancelPendingCommit=null;do Fc();while(nr!==0);if((ot&6)!==0)throw Error(o(327));if(i!==null){if(i===r.current)throw Error(o(177));if(b=i.lanes|i.childLanes,b|=hf,Le(r,l,b,M,T,O),r===ft&&(Ue=ft=null,Ge=0),ca=i,_o=r,da=l,xp=b,bp=g,Mb=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,L3(Pt,function(){return Fb(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=I.T,I.T=null,g=H.p,H.p=2,M=ot,ot|=4;try{C3(r,i,l)}finally{ot=M,H.p=g,I.T=u}}nr=1,Bb(),$b(),Nb()}}function Bb(){if(nr===1){nr=0;var r=_o,i=ca,l=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null;var u=H.p;H.p=2;var g=ot;ot|=4;try{vb(i,r);var b=Op,M=Cx(r.containerInfo),T=b.focusedElem,O=b.selectionRange;if(M!==T&&T&&T.ownerDocument&&kx(T.ownerDocument.documentElement,T)){if(O!==null&&sf(T)){var W=O.start,re=O.end;if(re===void 0&&(re=W),"selectionStart"in T)T.selectionStart=W,T.selectionEnd=Math.min(re,T.value.length);else{var ae=T.ownerDocument||document,X=ae&&ae.defaultView||window;if(X.getSelection){var Z=X.getSelection(),Pe=T.textContent.length,ze=Math.min(O.start,Pe),dt=O.end===void 0?ze:Math.min(O.end,Pe);!Z.extend&&ze>dt&&(M=dt,dt=ze,ze=M);var N=Sx(T,ze),B=Sx(T,dt);if(N&&B&&(Z.rangeCount!==1||Z.anchorNode!==N.node||Z.anchorOffset!==N.offset||Z.focusNode!==B.node||Z.focusOffset!==B.offset)){var q=ae.createRange();q.setStart(N.node,N.offset),Z.removeAllRanges(),ze>dt?(Z.addRange(q),Z.extend(B.node,B.offset)):(q.setEnd(B.node,B.offset),Z.addRange(q))}}}}for(ae=[],Z=T;Z=Z.parentNode;)Z.nodeType===1&&ae.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ae.length;T++){var ie=ae[T];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}Jc=!!Ep,Op=Ep=null}finally{ot=g,H.p=u,I.T=l}}r.current=i,nr=2}}function $b(){if(nr===2){nr=0;var r=_o,i=ca,l=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||l){l=I.T,I.T=null;var u=H.p;H.p=2;var g=ot;ot|=4;try{mb(r,i.alternate,i)}finally{ot=g,H.p=u,I.T=l}}nr=3}}function Nb(){if(nr===4||nr===3){nr=0,gr();var r=_o,i=ca,l=da,u=Mb;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?nr=5:(nr=0,ca=_o=null,Hb(r,r.pendingLanes));var g=r.pendingLanes;if(g===0&&(Mo=null),Ln(l),i=i.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Ke,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=I.T,g=H.p,H.p=2,I.T=null;try{for(var b=r.onRecoverableError,M=0;M<u.length;M++){var T=u[M];b(T.value,{componentStack:T.stack})}}finally{I.T=i,H.p=g}}(da&3)!==0&&Fc(),Mn(r),g=r.pendingLanes,(l&4194090)!==0&&(g&42)!==0?r===vp?Ls++:(Ls=0,vp=r):Ls=0,Bs(0)}}function Hb(r,i){(r.pooledCacheLanes&=i)===0&&(i=r.pooledCache,i!=null&&(r.pooledCache=null,gs(i)))}function Fc(r){return Bb(),$b(),Nb(),Fb()}function Fb(){if(nr!==5)return!1;var r=_o,i=xp;xp=0;var l=Ln(da),u=I.T,g=H.p;try{H.p=32>l?32:l,I.T=null,l=bp,bp=null;var b=_o,M=da;if(nr=0,ca=_o=null,da=0,(ot&6)!==0)throw Error(o(331));var T=ot;if(ot|=4,kb(b.current),wb(b,b.current,M,l),ot=T,Bs(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Ke,b)}catch{}return!0}finally{H.p=g,I.T=u,Hb(r,i)}}function Vb(r,i,l){i=Ir(l,i),i=Zf(r.stateNode,i,2),r=xo(r,i,2),r!==null&&(ye(r,2),Mn(r))}function ht(r,i,l){if(r.tag===3)Vb(r,r,l);else for(;i!==null;){if(i.tag===3){Vb(i,r,l);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Mo===null||!Mo.has(u))){r=Ir(l,r),l=q1(2),u=xo(i,l,2),u!==null&&(W1(l,u,i,r),ye(u,2),Mn(u));break}}i=i.return}}function Sp(r,i,l){var u=r.pingCache;if(u===null){u=r.pingCache=new T3;var g=new Set;u.set(i,g)}else g=u.get(i),g===void 0&&(g=new Set,u.set(i,g));g.has(l)||(fp=!0,g.add(l),r=E3.bind(null,r,i,l),i.then(r,r))}function E3(r,i,l){var u=r.pingCache;u!==null&&u.delete(i),r.pingedLanes|=r.suspendedLanes&l,r.warmLanes&=~l,ft===r&&(Ge&l)===l&&(Tt===4||Tt===3&&(Ge&62914560)===Ge&&300>Ze()-gp?(ot&2)===0&&ua(r,0):pp|=l,la===Ge&&(la=0)),Mn(r)}function Ub(r,i){i===0&&(i=Rn()),r=Wi(r,i),r!==null&&(ye(r,i),Mn(r))}function O3(r){var i=r.memoizedState,l=0;i!==null&&(l=i.retryLane),Ub(r,l)}function R3(r,i){var l=0;switch(r.tag){case 13:var u=r.stateNode,g=r.memoizedState;g!==null&&(l=g.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(o(314))}u!==null&&u.delete(i),Ub(r,l)}function L3(r,i){return Qe(r,i)}var Vc=null,fa=null,kp=!1,Uc=!1,Cp=!1,fi=0;function Mn(r){r!==fa&&r.next===null&&(fa===null?Vc=fa=r:fa=fa.next=r),Uc=!0,kp||(kp=!0,$3())}function Bs(r,i){if(!Cp&&Uc){Cp=!0;do for(var l=!1,u=Vc;u!==null;){if(r!==0){var g=u.pendingLanes;if(g===0)var b=0;else{var M=u.suspendedLanes,T=u.pingedLanes;b=(1<<31-gt(42|r)+1)-1,b&=g&~(M&~T),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(l=!0,Wb(u,b))}else b=Ge,b=xr(u,u===ft?b:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(b&3)===0||Wt(u,b)||(l=!0,Wb(u,b));u=u.next}while(l);Cp=!1}}function B3(){Ib()}function Ib(){Uc=kp=!1;var r=0;fi!==0&&(q3()&&(r=fi),fi=0);for(var i=Ze(),l=null,u=Vc;u!==null;){var g=u.next,b=Yb(u,i);b===0?(u.next=null,l===null?Vc=g:l.next=g,g===null&&(fa=l)):(l=u,(r!==0||(b&3)!==0)&&(Uc=!0)),u=g}Bs(r)}function Yb(r,i){for(var l=r.suspendedLanes,u=r.pingedLanes,g=r.expirationTimes,b=r.pendingLanes&-62914561;0<b;){var M=31-gt(b),T=1<<M,O=g[M];O===-1?((T&l)===0||(T&u)!==0)&&(g[M]=Zo(T,i)):O<=i&&(r.expiredLanes|=T),b&=~T}if(i=ft,l=Ge,l=xr(r,r===i?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,l===0||r===i&&(it===2||it===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&ir(u),r.callbackNode=null,r.callbackPriority=0;if((l&3)===0||Wt(r,l)){if(i=l&-l,i===r.callbackPriority)return i;switch(u!==null&&ir(u),Ln(l)){case 2:case 8:l=Dt;break;case 32:l=Pt;break;case 268435456:l=xe;break;default:l=Pt}return u=qb.bind(null,r),l=Qe(l,u),r.callbackPriority=i,r.callbackNode=l,i}return u!==null&&u!==null&&ir(u),r.callbackPriority=2,r.callbackNode=null,2}function qb(r,i){if(nr!==0&&nr!==5)return r.callbackNode=null,r.callbackPriority=0,null;var l=r.callbackNode;if(Fc()&&r.callbackNode!==l)return null;var u=Ge;return u=xr(r,r===ft?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(Tb(r,u,i),Yb(r,Ze()),r.callbackNode!=null&&r.callbackNode===l?qb.bind(null,r):null)}function Wb(r,i){if(Fc())return null;Tb(r,i,!0)}function $3(){G3(function(){(ot&6)!==0?Qe(zt,B3):Ib()})}function Mp(){return fi===0&&(fi=Bi()),fi}function Gb(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:ec(""+r)}function Xb(r,i){var l=i.ownerDocument.createElement("input");return l.name=i.name,l.value=i.value,r.id&&l.setAttribute("form",r.id),i.parentNode.insertBefore(l,i),r=new FormData(r),l.parentNode.removeChild(l),r}function N3(r,i,l,u,g){if(i==="submit"&&l&&l.stateNode===g){var b=Gb((g[lr]||null).action),M=u.submitter;M&&(i=(i=M[lr]||null)?Gb(i.formAction):M.getAttribute("formAction"),i!==null&&(b=i,M=null));var T=new oc("action","action",null,u,g);r.push({event:T,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(fi!==0){var O=M?Xb(g,M):new FormData(g);qf(l,{pending:!0,data:O,method:g.method,action:b},null,O)}}else typeof b=="function"&&(T.preventDefault(),O=M?Xb(g,M):new FormData(g),qf(l,{pending:!0,data:O,method:g.method,action:b},b,O))},currentTarget:g}]})}}for(var _p=0;_p<uf.length;_p++){var Tp=uf[_p],H3=Tp.toLowerCase(),F3=Tp[0].toUpperCase()+Tp.slice(1);on(H3,"on"+F3)}on(Tx,"onAnimationEnd"),on(zx,"onAnimationIteration"),on(Dx,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(o3,"onTransitionRun"),on(i3,"onTransitionStart"),on(a3,"onTransitionCancel"),on(Px,"onTransitionEnd"),vr("onMouseEnter",["mouseout","mouseover"]),vr("onMouseLeave",["mouseout","mouseover"]),vr("onPointerEnter",["pointerout","pointerover"]),vr("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($s));function Qb(r,i){i=(i&4)!==0;for(var l=0;l<r.length;l++){var u=r[l],g=u.event;u=u.listeners;e:{var b=void 0;if(i)for(var M=u.length-1;0<=M;M--){var T=u[M],O=T.instance,W=T.currentTarget;if(T=T.listener,O!==b&&g.isPropagationStopped())break e;b=T,g.currentTarget=W;try{b(g)}catch(re){Dc(re)}g.currentTarget=null,b=O}else for(M=0;M<u.length;M++){if(T=u[M],O=T.instance,W=T.currentTarget,T=T.listener,O!==b&&g.isPropagationStopped())break e;b=T,g.currentTarget=W;try{b(g)}catch(re){Dc(re)}g.currentTarget=null,b=O}}}}function Ie(r,i){var l=i[rs];l===void 0&&(l=i[rs]=new Set);var u=r+"__bubble";l.has(u)||(Zb(i,r,2,!1),l.add(u))}function zp(r,i,l){var u=0;i&&(u|=4),Zb(l,r,u,i)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Dp(r){if(!r[Ic]){r[Ic]=!0,Mt.forEach(function(l){l!=="selectionchange"&&(V3.has(l)||zp(l,!1,r),zp(l,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[Ic]||(i[Ic]=!0,zp("selectionchange",!1,i))}}function Zb(r,i,l,u){switch(wv(i)){case 2:var g=mk;break;case 8:g=gk;break;default:g=Ip}l=g.bind(null,i,l,r),g=void 0,!Zh||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(g=!0),u?g!==void 0?r.addEventListener(i,l,{capture:!0,passive:g}):r.addEventListener(i,l,!0):g!==void 0?r.addEventListener(i,l,{passive:g}):r.addEventListener(i,l,!1)}function Pp(r,i,l,u,g){var b=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var T=u.stateNode.containerInfo;if(T===g)break;if(M===4)for(M=u.return;M!==null;){var O=M.tag;if((O===3||O===4)&&M.stateNode.containerInfo===g)return;M=M.return}for(;T!==null;){if(M=he(T),M===null)return;if(O=M.tag,O===5||O===6||O===26||O===27){u=b=M;continue e}T=T.parentNode}}u=u.return}ox(function(){var W=b,re=Xh(l),ae=[];e:{var X=Ax.get(r);if(X!==void 0){var Z=oc,Pe=r;switch(r){case"keypress":if(rc(l)===0)break e;case"keydown":case"keyup":Z=LS;break;case"focusin":Pe="focus",Z=tf;break;case"focusout":Pe="blur",Z=tf;break;case"beforeblur":case"afterblur":Z=tf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=sx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=kS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=NS;break;case Tx:case zx:case Dx:Z=_S;break;case Px:Z=FS;break;case"scroll":case"scrollend":Z=jS;break;case"wheel":Z=US;break;case"copy":case"cut":case"paste":Z=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=cx;break;case"toggle":case"beforetoggle":Z=YS}var ze=(i&4)!==0,dt=!ze&&(r==="scroll"||r==="scrollend"),N=ze?X!==null?X+"Capture":null:X;ze=[];for(var B=W,q;B!==null;){var ie=B;if(q=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||q===null||N===null||(ie=ns(B,N),ie!=null&&ze.push(Ns(B,ie,q))),dt)break;B=B.return}0<ze.length&&(X=new Z(X,Pe,null,l,re),ae.push({event:X,listeners:ze}))}}if((i&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",Z=r==="mouseout"||r==="pointerout",X&&l!==Gh&&(Pe=l.relatedTarget||l.fromElement)&&(he(Pe)||Pe[ho]))break e;if((Z||X)&&(X=re.window===re?re:(X=re.ownerDocument)?X.defaultView||X.parentWindow:window,Z?(Pe=l.relatedTarget||l.toElement,Z=W,Pe=Pe?he(Pe):null,Pe!==null&&(dt=c(Pe),ze=Pe.tag,Pe!==dt||ze!==5&&ze!==27&&ze!==6)&&(Pe=null)):(Z=null,Pe=W),Z!==Pe)){if(ze=sx,ie="onMouseLeave",N="onMouseEnter",B="mouse",(r==="pointerout"||r==="pointerover")&&(ze=cx,ie="onPointerLeave",N="onPointerEnter",B="pointer"),dt=Z==null?X:Se(Z),q=Pe==null?X:Se(Pe),X=new ze(ie,B+"leave",Z,l,re),X.target=dt,X.relatedTarget=q,ie=null,he(re)===W&&(ze=new ze(N,B+"enter",Pe,l,re),ze.target=q,ze.relatedTarget=dt,ie=ze),dt=ie,Z&&Pe)t:{for(ze=Z,N=Pe,B=0,q=ze;q;q=pa(q))B++;for(q=0,ie=N;ie;ie=pa(ie))q++;for(;0<B-q;)ze=pa(ze),B--;for(;0<q-B;)N=pa(N),q--;for(;B--;){if(ze===N||N!==null&&ze===N.alternate)break t;ze=pa(ze),N=pa(N)}ze=null}else ze=null;Z!==null&&Kb(ae,X,Z,ze,!1),Pe!==null&&dt!==null&&Kb(ae,dt,Pe,ze,!0)}}e:{if(X=W?Se(W):window,Z=X.nodeName&&X.nodeName.toLowerCase(),Z==="select"||Z==="input"&&X.type==="file")var we=xx;else if(mx(X))if(bx)we=t3;else{we=JS;var Ve=KS}else Z=X.nodeName,!Z||Z.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&Wh(W.elementType)&&(we=xx):we=e3;if(we&&(we=we(r,W))){gx(ae,we,l,re);break e}Ve&&Ve(r,X,W),r==="focusout"&&W&&X.type==="number"&&W.memoizedProps.value!=null&&qh(X,"number",X.value)}switch(Ve=W?Se(W):window,r){case"focusin":(mx(Ve)||Ve.contentEditable==="true")&&(Ii=Ve,lf=W,us=null);break;case"focusout":us=lf=Ii=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Mx(ae,l,re);break;case"selectionchange":if(n3)break;case"keydown":case"keyup":Mx(ae,l,re)}var ke;if(nf)e:{switch(r){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else Ui?fx(r,l)&&(De="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(De="onCompositionStart");De&&(dx&&l.locale!=="ko"&&(Ui||De!=="onCompositionStart"?De==="onCompositionEnd"&&Ui&&(ke=ix()):(fo=re,Kh="value"in fo?fo.value:fo.textContent,Ui=!0)),Ve=Yc(W,De),0<Ve.length&&(De=new lx(De,r,null,l,re),ae.push({event:De,listeners:Ve}),ke?De.data=ke:(ke=px(l),ke!==null&&(De.data=ke)))),(ke=WS?GS(r,l):XS(r,l))&&(De=Yc(W,"onBeforeInput"),0<De.length&&(Ve=new lx("onBeforeInput","beforeinput",null,l,re),ae.push({event:Ve,listeners:De}),Ve.data=ke)),N3(ae,r,W,l,re)}Qb(ae,i)})}function Ns(r,i,l){return{instance:r,listener:i,currentTarget:l}}function Yc(r,i){for(var l=i+"Capture",u=[];r!==null;){var g=r,b=g.stateNode;if(g=g.tag,g!==5&&g!==26&&g!==27||b===null||(g=ns(r,l),g!=null&&u.unshift(Ns(r,g,b)),g=ns(r,i),g!=null&&u.push(Ns(r,g,b))),r.tag===3)return u;r=r.return}return[]}function pa(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function Kb(r,i,l,u,g){for(var b=i._reactName,M=[];l!==null&&l!==u;){var T=l,O=T.alternate,W=T.stateNode;if(T=T.tag,O!==null&&O===u)break;T!==5&&T!==26&&T!==27||W===null||(O=W,g?(W=ns(l,b),W!=null&&M.unshift(Ns(l,W,O))):g||(W=ns(l,b),W!=null&&M.push(Ns(l,W,O)))),l=l.return}M.length!==0&&r.push({event:i,listeners:M})}var U3=/\r\n?/g,I3=/\u0000|\uFFFD/g;function Jb(r){return(typeof r=="string"?r:""+r).replace(U3,`
`).replace(I3,"")}function ev(r,i){return i=Jb(i),Jb(r)===i}function qc(){}function ct(r,i,l,u,g,b){switch(l){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Hi(r,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Hi(r,""+u);break;case"className":Zl(r,"class",u);break;case"tabIndex":Zl(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Zl(r,l,u);break;case"style":rx(r,u,b);break;case"data":if(i!=="object"){Zl(r,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||l!=="href")){r.removeAttribute(l);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(l);break}u=ec(""+u),r.setAttribute(l,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b=="function"&&(l==="formAction"?(i!=="input"&&ct(r,i,"name",g.name,g,null),ct(r,i,"formEncType",g.formEncType,g,null),ct(r,i,"formMethod",g.formMethod,g,null),ct(r,i,"formTarget",g.formTarget,g,null)):(ct(r,i,"encType",g.encType,g,null),ct(r,i,"method",g.method,g,null),ct(r,i,"target",g.target,g,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(l);break}u=ec(""+u),r.setAttribute(l,u);break;case"onClick":u!=null&&(r.onclick=qc);break;case"onScroll":u!=null&&Ie("scroll",r);break;case"onScrollEnd":u!=null&&Ie("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(o(61));if(l=u.__html,l!=null){if(g.children!=null)throw Error(o(60));r.innerHTML=l}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}l=ec(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(l,""+u):r.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(l,""):r.removeAttribute(l);break;case"capture":case"download":u===!0?r.setAttribute(l,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(l,u):r.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(l,u):r.removeAttribute(l);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(l):r.setAttribute(l,u);break;case"popover":Ie("beforetoggle",r),Ie("toggle",r),Ql(r,"popover",u);break;case"xlinkActuate":$n(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":$n(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":$n(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":$n(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":$n(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":$n(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":$n(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":$n(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":$n(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ql(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=yS.get(l)||l,Ql(r,l,u))}}function Ap(r,i,l,u,g,b){switch(l){case"style":rx(r,u,b);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(o(61));if(l=u.__html,l!=null){if(g.children!=null)throw Error(o(60));r.innerHTML=l}}break;case"children":typeof u=="string"?Hi(r,u):(typeof u=="number"||typeof u=="bigint")&&Hi(r,""+u);break;case"onScroll":u!=null&&Ie("scroll",r);break;case"onScrollEnd":u!=null&&Ie("scrollend",r);break;case"onClick":u!=null&&(r.onclick=qc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Me.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(g=l.endsWith("Capture"),i=l.slice(2,g?l.length-7:void 0),b=r[lr]||null,b=b!=null?b[l]:null,typeof b=="function"&&r.removeEventListener(i,b,g),typeof u=="function")){typeof b!="function"&&b!==null&&(l in r?r[l]=null:r.hasAttribute(l)&&r.removeAttribute(l)),r.addEventListener(i,u,g);break e}l in r?r[l]=u:u===!0?r.setAttribute(l,""):Ql(r,l,u)}}}function or(r,i,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",r),Ie("load",r);var u=!1,g=!1,b;for(b in l)if(l.hasOwnProperty(b)){var M=l[b];if(M!=null)switch(b){case"src":u=!0;break;case"srcSet":g=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,i));default:ct(r,i,b,M,l,null)}}g&&ct(r,i,"srcSet",l.srcSet,l,null),u&&ct(r,i,"src",l.src,l,null);return;case"input":Ie("invalid",r);var T=b=M=g=null,O=null,W=null;for(u in l)if(l.hasOwnProperty(u)){var re=l[u];if(re!=null)switch(u){case"name":g=re;break;case"type":M=re;break;case"checked":O=re;break;case"defaultChecked":W=re;break;case"value":b=re;break;case"defaultValue":T=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(o(137,i));break;default:ct(r,i,u,re,l,null)}}Kg(r,b,T,O,W,M,g,!1),Kl(r);return;case"select":Ie("invalid",r),u=M=b=null;for(g in l)if(l.hasOwnProperty(g)&&(T=l[g],T!=null))switch(g){case"value":b=T;break;case"defaultValue":M=T;break;case"multiple":u=T;default:ct(r,i,g,T,l,null)}i=b,l=M,r.multiple=!!u,i!=null?Ni(r,!!u,i,!1):l!=null&&Ni(r,!!u,l,!0);return;case"textarea":Ie("invalid",r),b=g=u=null;for(M in l)if(l.hasOwnProperty(M)&&(T=l[M],T!=null))switch(M){case"value":u=T;break;case"defaultValue":g=T;break;case"children":b=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(91));break;default:ct(r,i,M,T,l,null)}ex(r,u,g,b),Kl(r);return;case"option":for(O in l)if(l.hasOwnProperty(O)&&(u=l[O],u!=null))switch(O){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ct(r,i,O,u,l,null)}return;case"dialog":Ie("beforetoggle",r),Ie("toggle",r),Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":Ie("load",r);break;case"video":case"audio":for(u=0;u<$s.length;u++)Ie($s[u],r);break;case"image":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"embed":case"source":case"link":Ie("error",r),Ie("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in l)if(l.hasOwnProperty(W)&&(u=l[W],u!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,i));default:ct(r,i,W,u,l,null)}return;default:if(Wh(i)){for(re in l)l.hasOwnProperty(re)&&(u=l[re],u!==void 0&&Ap(r,i,re,u,l,void 0));return}}for(T in l)l.hasOwnProperty(T)&&(u=l[T],u!=null&&ct(r,i,T,u,l,null))}function Y3(r,i,l,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var g=null,b=null,M=null,T=null,O=null,W=null,re=null;for(Z in l){var ae=l[Z];if(l.hasOwnProperty(Z)&&ae!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":O=ae;default:u.hasOwnProperty(Z)||ct(r,i,Z,null,u,ae)}}for(var X in u){var Z=u[X];if(ae=l[X],u.hasOwnProperty(X)&&(Z!=null||ae!=null))switch(X){case"type":b=Z;break;case"name":g=Z;break;case"checked":W=Z;break;case"defaultChecked":re=Z;break;case"value":M=Z;break;case"defaultValue":T=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(o(137,i));break;default:Z!==ae&&ct(r,i,X,Z,u,ae)}}Yh(r,M,T,O,W,re,b,g);return;case"select":Z=M=T=X=null;for(b in l)if(O=l[b],l.hasOwnProperty(b)&&O!=null)switch(b){case"value":break;case"multiple":Z=O;default:u.hasOwnProperty(b)||ct(r,i,b,null,u,O)}for(g in u)if(b=u[g],O=l[g],u.hasOwnProperty(g)&&(b!=null||O!=null))switch(g){case"value":X=b;break;case"defaultValue":T=b;break;case"multiple":M=b;default:b!==O&&ct(r,i,g,b,u,O)}i=T,l=M,u=Z,X!=null?Ni(r,!!l,X,!1):!!u!=!!l&&(i!=null?Ni(r,!!l,i,!0):Ni(r,!!l,l?[]:"",!1));return;case"textarea":Z=X=null;for(T in l)if(g=l[T],l.hasOwnProperty(T)&&g!=null&&!u.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ct(r,i,T,null,u,g)}for(M in u)if(g=u[M],b=l[M],u.hasOwnProperty(M)&&(g!=null||b!=null))switch(M){case"value":X=g;break;case"defaultValue":Z=g;break;case"children":break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:g!==b&&ct(r,i,M,g,u,b)}Jg(r,X,Z);return;case"option":for(var Pe in l)if(X=l[Pe],l.hasOwnProperty(Pe)&&X!=null&&!u.hasOwnProperty(Pe))switch(Pe){case"selected":r.selected=!1;break;default:ct(r,i,Pe,null,u,X)}for(O in u)if(X=u[O],Z=l[O],u.hasOwnProperty(O)&&X!==Z&&(X!=null||Z!=null))switch(O){case"selected":r.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:ct(r,i,O,X,u,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ze in l)X=l[ze],l.hasOwnProperty(ze)&&X!=null&&!u.hasOwnProperty(ze)&&ct(r,i,ze,null,u,X);for(W in u)if(X=u[W],Z=l[W],u.hasOwnProperty(W)&&X!==Z&&(X!=null||Z!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(o(137,i));break;default:ct(r,i,W,X,u,Z)}return;default:if(Wh(i)){for(var dt in l)X=l[dt],l.hasOwnProperty(dt)&&X!==void 0&&!u.hasOwnProperty(dt)&&Ap(r,i,dt,void 0,u,X);for(re in u)X=u[re],Z=l[re],!u.hasOwnProperty(re)||X===Z||X===void 0&&Z===void 0||Ap(r,i,re,X,u,Z);return}}for(var N in l)X=l[N],l.hasOwnProperty(N)&&X!=null&&!u.hasOwnProperty(N)&&ct(r,i,N,null,u,X);for(ae in u)X=u[ae],Z=l[ae],!u.hasOwnProperty(ae)||X===Z||X==null&&Z==null||ct(r,i,ae,X,u,Z)}var Ep=null,Op=null;function Wc(r){return r.nodeType===9?r:r.ownerDocument}function tv(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rv(r,i){if(r===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&i==="foreignObject"?0:r}function Rp(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lp=null;function q3(){var r=window.event;return r&&r.type==="popstate"?r===Lp?!1:(Lp=r,!0):(Lp=null,!1)}var nv=typeof setTimeout=="function"?setTimeout:void 0,W3=typeof clearTimeout=="function"?clearTimeout:void 0,ov=typeof Promise=="function"?Promise:void 0,G3=typeof queueMicrotask=="function"?queueMicrotask:typeof ov<"u"?function(r){return ov.resolve(null).then(r).catch(X3)}:nv;function X3(r){setTimeout(function(){throw r})}function zo(r){return r==="head"}function iv(r,i){var l=i,u=0,g=0;do{var b=l.nextSibling;if(r.removeChild(l),b&&b.nodeType===8)if(l=b.data,l==="/$"){if(0<u&&8>u){l=u;var M=r.ownerDocument;if(l&1&&Hs(M.documentElement),l&2&&Hs(M.body),l&4)for(l=M.head,Hs(l),M=l.firstChild;M;){var T=M.nextSibling,O=M.nodeName;M[se]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&M.rel.toLowerCase()==="stylesheet"||l.removeChild(M),M=T}}if(g===0){r.removeChild(b),Gs(i);return}g--}else l==="$"||l==="$?"||l==="$!"?g++:u=l.charCodeAt(0)-48;else u=0;l=b}while(l);Gs(i)}function Bp(r){var i=r.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var l=i;switch(i=i.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Bp(l),_e(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}r.removeChild(l)}}function Q3(r,i,l,u){for(;r.nodeType===1;){var g=l;if(r.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[se])switch(i){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(b=r.getAttribute("rel"),b==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(b!==g.rel||r.getAttribute("href")!==(g.href==null||g.href===""?null:g.href)||r.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin)||r.getAttribute("title")!==(g.title==null?null:g.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(b=r.getAttribute("src"),(b!==(g.src==null?null:g.src)||r.getAttribute("type")!==(g.type==null?null:g.type)||r.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin))&&b&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(i==="input"&&r.type==="hidden"){var b=g.name==null?null:""+g.name;if(g.type==="hidden"&&r.getAttribute("name")===b)return r}else return r;if(r=sn(r.nextSibling),r===null)break}return null}function Z3(r,i,l){if(i==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!l||(r=sn(r.nextSibling),r===null))return null;return r}function $p(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function K3(r,i){var l=r.ownerDocument;if(r.data!=="$?"||l.readyState==="complete")i();else{var u=function(){i(),l.removeEventListener("DOMContentLoaded",u)};l.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function sn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return r}var Np=null;function av(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(i===0)return r;i--}else l==="/$"&&i++}r=r.previousSibling}return null}function sv(r,i,l){switch(i=Wc(l),r){case"html":if(r=i.documentElement,!r)throw Error(o(452));return r;case"head":if(r=i.head,!r)throw Error(o(453));return r;case"body":if(r=i.body,!r)throw Error(o(454));return r;default:throw Error(o(451))}}function Hs(r){for(var i=r.attributes;i.length;)r.removeAttributeNode(i[0]);_e(r)}var Qr=new Map,lv=new Set;function Gc(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Kn=H.d;H.d={f:J3,r:ek,D:tk,C:rk,L:nk,m:ok,X:ak,S:ik,M:sk};function J3(){var r=Kn.f(),i=Nc();return r||i}function ek(r){var i=Te(r);i!==null&&i.tag===5&&i.type==="form"?T1(i):Kn.r(r)}var ma=typeof document>"u"?null:document;function cv(r,i,l){var u=ma;if(u&&typeof i=="string"&&i){var g=Ur(i);g='link[rel="'+r+'"][href="'+g+'"]',typeof l=="string"&&(g+='[crossorigin="'+l+'"]'),lv.has(g)||(lv.add(g),r={rel:r,crossOrigin:l,href:i},u.querySelector(g)===null&&(i=u.createElement("link"),or(i,"link",r),Ce(i),u.head.appendChild(i)))}}function tk(r){Kn.D(r),cv("dns-prefetch",r,null)}function rk(r,i){Kn.C(r,i),cv("preconnect",r,i)}function nk(r,i,l){Kn.L(r,i,l);var u=ma;if(u&&r&&i){var g='link[rel="preload"][as="'+Ur(i)+'"]';i==="image"&&l&&l.imageSrcSet?(g+='[imagesrcset="'+Ur(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(g+='[imagesizes="'+Ur(l.imageSizes)+'"]')):g+='[href="'+Ur(r)+'"]';var b=g;switch(i){case"style":b=ga(r);break;case"script":b=xa(r)}Qr.has(b)||(r=x({rel:"preload",href:i==="image"&&l&&l.imageSrcSet?void 0:r,as:i},l),Qr.set(b,r),u.querySelector(g)!==null||i==="style"&&u.querySelector(Fs(b))||i==="script"&&u.querySelector(Vs(b))||(i=u.createElement("link"),or(i,"link",r),Ce(i),u.head.appendChild(i)))}}function ok(r,i){Kn.m(r,i);var l=ma;if(l&&r){var u=i&&typeof i.as=="string"?i.as:"script",g='link[rel="modulepreload"][as="'+Ur(u)+'"][href="'+Ur(r)+'"]',b=g;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=xa(r)}if(!Qr.has(b)&&(r=x({rel:"modulepreload",href:r},i),Qr.set(b,r),l.querySelector(g)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Vs(b)))return}u=l.createElement("link"),or(u,"link",r),Ce(u),l.head.appendChild(u)}}}function ik(r,i,l){Kn.S(r,i,l);var u=ma;if(u&&r){var g=ut(u).hoistableStyles,b=ga(r);i=i||"default";var M=g.get(b);if(!M){var T={loading:0,preload:null};if(M=u.querySelector(Fs(b)))T.loading=5;else{r=x({rel:"stylesheet",href:r,"data-precedence":i},l),(l=Qr.get(b))&&Hp(r,l);var O=M=u.createElement("link");Ce(O),or(O,"link",r),O._p=new Promise(function(W,re){O.onload=W,O.onerror=re}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Xc(M,i,u)}M={type:"stylesheet",instance:M,count:1,state:T},g.set(b,M)}}}function ak(r,i){Kn.X(r,i);var l=ma;if(l&&r){var u=ut(l).hoistableScripts,g=xa(r),b=u.get(g);b||(b=l.querySelector(Vs(g)),b||(r=x({src:r,async:!0},i),(i=Qr.get(g))&&Fp(r,i),b=l.createElement("script"),Ce(b),or(b,"link",r),l.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},u.set(g,b))}}function sk(r,i){Kn.M(r,i);var l=ma;if(l&&r){var u=ut(l).hoistableScripts,g=xa(r),b=u.get(g);b||(b=l.querySelector(Vs(g)),b||(r=x({src:r,async:!0,type:"module"},i),(i=Qr.get(g))&&Fp(r,i),b=l.createElement("script"),Ce(b),or(b,"link",r),l.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},u.set(g,b))}}function dv(r,i,l,u){var g=(g=Q.current)?Gc(g):null;if(!g)throw Error(o(446));switch(r){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(i=ga(l.href),l=ut(g).hoistableStyles,u=l.get(i),u||(u={type:"style",instance:null,count:0,state:null},l.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){r=ga(l.href);var b=ut(g).hoistableStyles,M=b.get(r);if(M||(g=g.ownerDocument||g,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},b.set(r,M),(b=g.querySelector(Fs(r)))&&!b._p&&(M.instance=b,M.state.loading=5),Qr.has(r)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Qr.set(r,l),b||lk(g,r,l,M.state))),i&&u===null)throw Error(o(528,""));return M}if(i&&u!==null)throw Error(o(529,""));return null;case"script":return i=l.async,l=l.src,typeof l=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=xa(l),l=ut(g).hoistableScripts,u=l.get(i),u||(u={type:"script",instance:null,count:0,state:null},l.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,r))}}function ga(r){return'href="'+Ur(r)+'"'}function Fs(r){return'link[rel="stylesheet"]['+r+"]"}function uv(r){return x({},r,{"data-precedence":r.precedence,precedence:null})}function lk(r,i,l,u){r.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=r.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),or(i,"link",l),Ce(i),r.head.appendChild(i))}function xa(r){return'[src="'+Ur(r)+'"]'}function Vs(r){return"script[async]"+r}function hv(r,i,l){if(i.count++,i.instance===null)switch(i.type){case"style":var u=r.querySelector('style[data-href~="'+Ur(l.href)+'"]');if(u)return i.instance=u,Ce(u),u;var g=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Ce(u),or(u,"style",g),Xc(u,l.precedence,r),i.instance=u;case"stylesheet":g=ga(l.href);var b=r.querySelector(Fs(g));if(b)return i.state.loading|=4,i.instance=b,Ce(b),b;u=uv(l),(g=Qr.get(g))&&Hp(u,g),b=(r.ownerDocument||r).createElement("link"),Ce(b);var M=b;return M._p=new Promise(function(T,O){M.onload=T,M.onerror=O}),or(b,"link",u),i.state.loading|=4,Xc(b,l.precedence,r),i.instance=b;case"script":return b=xa(l.src),(g=r.querySelector(Vs(b)))?(i.instance=g,Ce(g),g):(u=l,(g=Qr.get(b))&&(u=x({},l),Fp(u,g)),r=r.ownerDocument||r,g=r.createElement("script"),Ce(g),or(g,"link",u),r.head.appendChild(g),i.instance=g);case"void":return null;default:throw Error(o(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Xc(u,l.precedence,r));return i.instance}function Xc(r,i,l){for(var u=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),g=u.length?u[u.length-1]:null,b=g,M=0;M<u.length;M++){var T=u[M];if(T.dataset.precedence===i)b=T;else if(b!==g)break}b?b.parentNode.insertBefore(r,b.nextSibling):(i=l.nodeType===9?l.head:l,i.insertBefore(r,i.firstChild))}function Hp(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.title==null&&(r.title=i.title)}function Fp(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.integrity==null&&(r.integrity=i.integrity)}var Qc=null;function fv(r,i,l){if(Qc===null){var u=new Map,g=Qc=new Map;g.set(l,u)}else g=Qc,u=g.get(l),u||(u=new Map,g.set(l,u));if(u.has(r))return u;for(u.set(r,null),l=l.getElementsByTagName(r),g=0;g<l.length;g++){var b=l[g];if(!(b[se]||b[Gt]||r==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!=="http://www.w3.org/2000/svg"){var M=b.getAttribute(i)||"";M=r+M;var T=u.get(M);T?T.push(b):u.set(M,[b])}}return u}function pv(r,i,l){r=r.ownerDocument||r,r.head.insertBefore(l,i==="title"?r.querySelector("head > title"):null)}function ck(r,i,l){if(l===1||i.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return r=i.disabled,typeof i.precedence=="string"&&r==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function mv(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Us=null;function dk(){}function uk(r,i,l){if(Us===null)throw Error(o(475));var u=Us;if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var g=ga(l.href),b=r.querySelector(Fs(g));if(b){r=b._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=Zc.bind(u),r.then(u,u)),i.state.loading|=4,i.instance=b,Ce(b);return}b=r.ownerDocument||r,l=uv(l),(g=Qr.get(g))&&Hp(l,g),b=b.createElement("link"),Ce(b);var M=b;M._p=new Promise(function(T,O){M.onload=T,M.onerror=O}),or(b,"link",l),i.instance=b}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,r),(r=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=Zc.bind(u),r.addEventListener("load",i),r.addEventListener("error",i))}}function hk(){if(Us===null)throw Error(o(475));var r=Us;return r.stylesheets&&r.count===0&&Vp(r,r.stylesheets),0<r.count?function(i){var l=setTimeout(function(){if(r.stylesheets&&Vp(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=i,function(){r.unsuspend=null,clearTimeout(l)}}:null}function Zc(){if(this.count--,this.count===0){if(this.stylesheets)Vp(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Kc=null;function Vp(r,i){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Kc=new Map,i.forEach(fk,r),Kc=null,Zc.call(r))}function fk(r,i){if(!(i.state.loading&4)){var l=Kc.get(r);if(l)var u=l.get(null);else{l=new Map,Kc.set(r,l);for(var g=r.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<g.length;b++){var M=g[b];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(l.set(M.dataset.precedence,M),u=M)}u&&l.set(null,u)}g=i.instance,M=g.getAttribute("data-precedence"),b=l.get(M)||u,b===u&&l.set(null,g),l.set(M,g),this.count++,u=Zc.bind(this),g.addEventListener("load",u),g.addEventListener("error",u),b?b.parentNode.insertBefore(g,b.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(g,r.firstChild)),i.state.loading|=4}}var Is={$$typeof:D,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function pk(r,i,l,u,g,b,M,T){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oe(0),this.hiddenUpdates=oe(null),this.identifierPrefix=u,this.onUncaughtError=g,this.onCaughtError=b,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function gv(r,i,l,u,g,b,M,T,O,W,re,ae){return r=new pk(r,i,l,M,T,O,W,ae),i=1,b===!0&&(i|=24),b=Dr(3,null,null,i),r.current=b,b.stateNode=r,i=Sf(),i.refCount++,r.pooledCache=i,i.refCount++,b.memoizedState={element:u,isDehydrated:l,cache:i},_f(b),r}function xv(r){return r?(r=Gi,r):Gi}function bv(r,i,l,u,g,b){g=xv(g),u.context===null?u.context=g:u.pendingContext=g,u=go(i),u.payload={element:l},b=b===void 0?null:b,b!==null&&(u.callback=b),l=xo(r,u,i),l!==null&&(Rr(l,r,i),ys(l,r,i))}function vv(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<i?l:i}}function Up(r,i){vv(r,i),(r=r.alternate)&&vv(r,i)}function yv(r){if(r.tag===13){var i=Wi(r,67108864);i!==null&&Rr(i,r,67108864),Up(r,67108864)}}var Jc=!0;function mk(r,i,l,u){var g=I.T;I.T=null;var b=H.p;try{H.p=2,Ip(r,i,l,u)}finally{H.p=b,I.T=g}}function gk(r,i,l,u){var g=I.T;I.T=null;var b=H.p;try{H.p=8,Ip(r,i,l,u)}finally{H.p=b,I.T=g}}function Ip(r,i,l,u){if(Jc){var g=Yp(u);if(g===null)Pp(r,i,u,ed,l),jv(r,u);else if(bk(g,r,i,l,u))u.stopPropagation();else if(jv(r,u),i&4&&-1<xk.indexOf(r)){for(;g!==null;){var b=Te(g);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var M=tr(b.pendingLanes);if(M!==0){var T=b;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var O=1<<31-gt(M);T.entanglements[1]|=O,M&=~O}Mn(b),(ot&6)===0&&(Bc=Ze()+500,Bs(0))}}break;case 13:T=Wi(b,2),T!==null&&Rr(T,b,2),Nc(),Up(b,2)}if(b=Yp(u),b===null&&Pp(r,i,u,ed,l),b===g)break;g=b}g!==null&&u.stopPropagation()}else Pp(r,i,u,null,l)}}function Yp(r){return r=Xh(r),qp(r)}var ed=null;function qp(r){if(ed=null,r=he(r),r!==null){var i=c(r);if(i===null)r=null;else{var l=i.tag;if(l===13){if(r=d(i),r!==null)return r;r=null}else if(l===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null)}}return ed=r,null}function wv(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rt()){case zt:return 2;case Dt:return 8;case Pt:case ge:return 32;case xe:return 268435456;default:return 32}default:return 32}}var Wp=!1,Do=null,Po=null,Ao=null,Ys=new Map,qs=new Map,Eo=[],xk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jv(r,i){switch(r){case"focusin":case"focusout":Do=null;break;case"dragenter":case"dragleave":Po=null;break;case"mouseover":case"mouseout":Ao=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function Ws(r,i,l,u,g,b){return r===null||r.nativeEvent!==b?(r={blockedOn:i,domEventName:l,eventSystemFlags:u,nativeEvent:b,targetContainers:[g]},i!==null&&(i=Te(i),i!==null&&yv(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,g!==null&&i.indexOf(g)===-1&&i.push(g),r)}function bk(r,i,l,u,g){switch(i){case"focusin":return Do=Ws(Do,r,i,l,u,g),!0;case"dragenter":return Po=Ws(Po,r,i,l,u,g),!0;case"mouseover":return Ao=Ws(Ao,r,i,l,u,g),!0;case"pointerover":var b=g.pointerId;return Ys.set(b,Ws(Ys.get(b)||null,r,i,l,u,g)),!0;case"gotpointercapture":return b=g.pointerId,qs.set(b,Ws(qs.get(b)||null,r,i,l,u,g)),!0}return!1}function Sv(r){var i=he(r.target);if(i!==null){var l=c(i);if(l!==null){if(i=l.tag,i===13){if(i=d(l),i!==null){r.blockedOn=i,uo(r.priority,function(){if(l.tag===13){var u=Or();u=Hr(u);var g=Wi(l,u);g!==null&&Rr(g,l,u),Up(l,u)}});return}}else if(i===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function td(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var l=Yp(r.nativeEvent);if(l===null){l=r.nativeEvent;var u=new l.constructor(l.type,l);Gh=u,l.target.dispatchEvent(u),Gh=null}else return i=Te(l),i!==null&&yv(i),r.blockedOn=l,!1;i.shift()}return!0}function kv(r,i,l){td(r)&&l.delete(i)}function vk(){Wp=!1,Do!==null&&td(Do)&&(Do=null),Po!==null&&td(Po)&&(Po=null),Ao!==null&&td(Ao)&&(Ao=null),Ys.forEach(kv),qs.forEach(kv)}function rd(r,i){r.blockedOn===i&&(r.blockedOn=null,Wp||(Wp=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vk)))}var nd=null;function Cv(r){nd!==r&&(nd=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){nd===r&&(nd=null);for(var i=0;i<r.length;i+=3){var l=r[i],u=r[i+1],g=r[i+2];if(typeof u!="function"){if(qp(u||l)===null)continue;break}var b=Te(l);b!==null&&(r.splice(i,3),i-=3,qf(b,{pending:!0,data:g,method:l.method,action:u},u,g))}}))}function Gs(r){function i(O){return rd(O,r)}Do!==null&&rd(Do,r),Po!==null&&rd(Po,r),Ao!==null&&rd(Ao,r),Ys.forEach(i),qs.forEach(i);for(var l=0;l<Eo.length;l++){var u=Eo[l];u.blockedOn===r&&(u.blockedOn=null)}for(;0<Eo.length&&(l=Eo[0],l.blockedOn===null);)Sv(l),l.blockedOn===null&&Eo.shift();if(l=(r.ownerDocument||r).$$reactFormReplay,l!=null)for(u=0;u<l.length;u+=3){var g=l[u],b=l[u+1],M=g[lr]||null;if(typeof b=="function")M||Cv(l);else if(M){var T=null;if(b&&b.hasAttribute("formAction")){if(g=b,M=b[lr]||null)T=M.formAction;else if(qp(g)!==null)continue}else T=M.action;typeof T=="function"?l[u+1]=T:(l.splice(u,3),u-=3),Cv(l)}}}function Gp(r){this._internalRoot=r}od.prototype.render=Gp.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(o(409));var l=i.current,u=Or();bv(l,u,r,i,null,null)},od.prototype.unmount=Gp.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;bv(r.current,2,null,r,null,null),Nc(),i[ho]=null}};function od(r){this._internalRoot=r}od.prototype.unstable_scheduleHydration=function(r){if(r){var i=Bn();r={blockedOn:null,target:r,priority:i};for(var l=0;l<Eo.length&&i!==0&&i<Eo[l].priority;l++);Eo.splice(l,0,r),l===0&&Sv(r)}};var Mv=t.version;if(Mv!=="19.1.0")throw Error(o(527,Mv,"19.1.0"));H.findDOMNode=function(r){var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(o(188)):(r=Object.keys(r).join(","),Error(o(268,r)));return r=m(i),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var yk={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var id=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!id.isDisabled&&id.supportsFiber)try{Ke=id.inject(yk),nt=id}catch{}}return Qs.createRoot=function(r,i){if(!s(r))throw Error(o(299));var l=!1,u="",g=V1,b=U1,M=I1,T=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(g=i.onUncaughtError),i.onCaughtError!==void 0&&(b=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=gv(r,1,!1,null,null,l,u,g,b,M,T,null),r[ho]=i.current,Dp(r),new Gp(i)},Qs.hydrateRoot=function(r,i,l){if(!s(r))throw Error(o(299));var u=!1,g="",b=V1,M=U1,T=I1,O=null,W=null;return l!=null&&(l.unstable_strictMode===!0&&(u=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onUncaughtError!==void 0&&(b=l.onUncaughtError),l.onCaughtError!==void 0&&(M=l.onCaughtError),l.onRecoverableError!==void 0&&(T=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(O=l.unstable_transitionCallbacks),l.formState!==void 0&&(W=l.formState)),i=gv(r,1,!0,i,l??null,u,g,b,M,T,O,W),i.context=xv(null),l=i.current,u=Or(),u=Hr(u),g=go(u),g.callback=null,xo(l,g,u),l=u,i.current.lanes=l,ye(i,l),Mn(i),r[ho]=i.current,Dp(r),new od(i)},Qs.version="19.1.0",Qs}var Lv;function Ak(){if(Lv)return Zp.exports;Lv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Zp.exports=Pk(),Zp.exports}var Ek=Ak(),Zs={},Bv;function Ok(){if(Bv)return Zs;Bv=1,Object.defineProperty(Zs,"__esModule",{value:!0}),Zs.parse=d,Zs.serialize=p;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,c=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function d(y,j){const w=new c,C=y.length;if(C<2)return w;const k=(j==null?void 0:j.decode)||x;let _=0;do{const z=y.indexOf("=",_);if(z===-1)break;const D=y.indexOf(";",_),L=D===-1?C:D;if(z>L){_=y.lastIndexOf(";",z-1)+1;continue}const A=h(y,_,z),V=m(y,z,A),E=y.slice(A,V);if(w[E]===void 0){let F=h(y,z+1,L),te=m(y,L,F);const de=k(y.slice(F,te));w[E]=de}_=L+1}while(_<C);return w}function h(y,j,w){do{const C=y.charCodeAt(j);if(C!==32&&C!==9)return j}while(++j<w);return w}function m(y,j,w){for(;j>w;){const C=y.charCodeAt(--j);if(C!==32&&C!==9)return j+1}return w}function p(y,j,w){const C=(w==null?void 0:w.encode)||encodeURIComponent;if(!e.test(y))throw new TypeError(`argument name is invalid: ${y}`);const k=C(j);if(!t.test(k))throw new TypeError(`argument val is invalid: ${j}`);let _=y+"="+k;if(!w)return _;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);_+="; Max-Age="+w.maxAge}if(w.domain){if(!n.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);_+="; Domain="+w.domain}if(w.path){if(!o.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);_+="; Path="+w.path}if(w.expires){if(!v(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);_+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(_+="; HttpOnly"),w.secure&&(_+="; Secure"),w.partitioned&&(_+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return _}function x(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function v(y){return s.call(y)==="[object Date]"}return Zs}Ok();var $v="popstate";function Rk(e={}){function t(o,s){let{pathname:c,search:d,hash:h}=o.location;return Dm("",{pathname:c,search:d,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(o,s){return typeof s=="string"?s:Al(s)}return Bk(t,n,null,e)}function yt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Lk(){return Math.random().toString(36).substring(2,10)}function Nv(e,t){return{usr:e.state,key:e.key,idx:t}}function Dm(e,t,n=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Xa(t):t,state:n,key:t&&t.key||o||Lk()}}function Al({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Xa(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substring(o),e=e.substring(0,o)),e&&(t.pathname=e)}return t}function Bk(e,t,n,o={}){let{window:s=document.defaultView,v5Compat:c=!1}=o,d=s.history,h="POP",m=null,p=x();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function x(){return(d.state||{idx:null}).idx}function v(){h="POP";let k=x(),_=k==null?null:k-p;p=k,m&&m({action:h,location:C.location,delta:_})}function y(k,_){h="PUSH";let z=Dm(C.location,k,_);p=x()+1;let D=Nv(z,p),L=C.createHref(z);try{d.pushState(D,"",L)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;s.location.assign(L)}c&&m&&m({action:h,location:C.location,delta:1})}function j(k,_){h="REPLACE";let z=Dm(C.location,k,_);p=x();let D=Nv(z,p),L=C.createHref(z);d.replaceState(D,"",L),c&&m&&m({action:h,location:C.location,delta:0})}function w(k){return $k(k)}let C={get action(){return h},get location(){return e(s,d)},listen(k){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener($v,v),m=k,()=>{s.removeEventListener($v,v),m=null}},createHref(k){return t(s,k)},createURL:w,encodeLocation(k){let _=w(k);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:j,go(k){return d.go(k)}};return C}function $k(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),yt(n,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Al(e);return o=o.replace(/ $/,"%20"),!t&&o.startsWith("//")&&(o=n+o),new URL(o,n)}function Pw(e,t,n="/"){return Nk(e,t,n,!1)}function Nk(e,t,n,o){let s=typeof t=="string"?Xa(t):t,c=lo(s.pathname||"/",n);if(c==null)return null;let d=Aw(e);Hk(d);let h=null;for(let m=0;h==null&&m<d.length;++m){let p=Zk(c);h=Xk(d[m],p,o)}return h}function Aw(e,t=[],n=[],o=""){let s=(c,d,h)=>{let m={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(yt(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length));let p=so([o,m.relativePath]),x=n.concat(m);c.children&&c.children.length>0&&(yt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Aw(c.children,t,x,p)),!(c.path==null&&!c.index)&&t.push({path:p,score:Wk(p,c.index),routesMeta:x})};return e.forEach((c,d)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))s(c,d);else for(let m of Ew(c.path))s(c,d,m)}),t}function Ew(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,s=n.endsWith("?"),c=n.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let d=Ew(o.join("/")),h=[];return h.push(...d.map(m=>m===""?c:[c,m].join("/"))),s&&h.push(...d),h.map(m=>e.startsWith("/")&&m===""?"/":m)}function Hk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gk(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}var Fk=/^:[\w-]+$/,Vk=3,Uk=2,Ik=1,Yk=10,qk=-2,Hv=e=>e==="*";function Wk(e,t){let n=e.split("/"),o=n.length;return n.some(Hv)&&(o+=qk),t&&(o+=Uk),n.filter(s=>!Hv(s)).reduce((s,c)=>s+(Fk.test(c)?Vk:c===""?Ik:Yk),o)}function Gk(e,t){return e.length===t.length&&e.slice(0,-1).every((o,s)=>o===t[s])?e[e.length-1]-t[t.length-1]:0}function Xk(e,t,n=!1){let{routesMeta:o}=e,s={},c="/",d=[];for(let h=0;h<o.length;++h){let m=o[h],p=h===o.length-1,x=c==="/"?t:t.slice(c.length)||"/",v=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),y=m.route;if(!v&&p&&n&&!o[o.length-1].route.index&&(v=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!v)return null;Object.assign(s,v.params),d.push({params:s,pathname:so([c,v.pathname]),pathnameBase:t8(so([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=so([c,v.pathnameBase]))}return d}function Gu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Qk(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let c=s[0],d=c.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:o.reduce((p,{paramName:x,isOptional:v},y)=>{if(x==="*"){let w=h[y]||"";d=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const j=h[y];return v&&!j?p[x]=void 0:p[x]=(j||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:d,pattern:e}}function Qk(e,t=!1,n=!0){gn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,m)=>(o.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),o]}function Zk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return gn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function lo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function Kk(e,t="/"){let{pathname:n,search:o="",hash:s=""}=typeof e=="string"?Xa(e):e;return{pathname:n?n.startsWith("/")?n:Jk(n,t):t,search:r8(o),hash:n8(s)}}function Jk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function t0(e,t,n,o){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function e8(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sg(e){let t=e8(e);return t.map((n,o)=>o===t.length-1?n.pathname:n.pathnameBase)}function lg(e,t,n,o=!1){let s;typeof e=="string"?s=Xa(e):(s={...e},yt(!s.pathname||!s.pathname.includes("?"),t0("?","pathname","search",s)),yt(!s.pathname||!s.pathname.includes("#"),t0("#","pathname","hash",s)),yt(!s.search||!s.search.includes("#"),t0("#","search","hash",s)));let c=e===""||s.pathname==="",d=c?"/":s.pathname,h;if(d==null)h=n;else{let v=t.length-1;if(!o&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),v-=1;s.pathname=y.join("/")}h=v>=0?t[v]:"/"}let m=Kk(s,h),p=d&&d!=="/"&&d.endsWith("/"),x=(c||d===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var so=e=>e.join("/").replace(/\/\/+/g,"/"),t8=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),r8=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,n8=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o8(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Ow=["POST","PUT","PATCH","DELETE"];new Set(Ow);var i8=["GET",...Ow];new Set(i8);var Qa=S.createContext(null);Qa.displayName="DataRouter";var ph=S.createContext(null);ph.displayName="DataRouterState";var Rw=S.createContext({isTransitioning:!1});Rw.displayName="ViewTransition";var a8=S.createContext(new Map);a8.displayName="Fetchers";var s8=S.createContext(null);s8.displayName="Await";var xn=S.createContext(null);xn.displayName="Navigation";var Fl=S.createContext(null);Fl.displayName="Location";var bn=S.createContext({outlet:null,matches:[],isDataRoute:!1});bn.displayName="Route";var cg=S.createContext(null);cg.displayName="RouteError";function l8(e,{relative:t}={}){yt(Za(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:o}=S.useContext(xn),{hash:s,pathname:c,search:d}=Vl(e,{relative:t}),h=c;return n!=="/"&&(h=c==="/"?n:so([n,c])),o.createHref({pathname:h,search:d,hash:s})}function Za(){return S.useContext(Fl)!=null}function nn(){return yt(Za(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Fl).location}var Lw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bw(e){S.useContext(xn).static||S.useLayoutEffect(e)}function Ei(){let{isDataRoute:e}=S.useContext(bn);return e?w8():c8()}function c8(){yt(Za(),"useNavigate() may be used only in the context of a <Router> component.");let e=S.useContext(Qa),{basename:t,navigator:n}=S.useContext(xn),{matches:o}=S.useContext(bn),{pathname:s}=nn(),c=JSON.stringify(sg(o)),d=S.useRef(!1);return Bw(()=>{d.current=!0}),S.useCallback((m,p={})=>{if(gn(d.current,Lw),!d.current)return;if(typeof m=="number"){n.go(m);return}let x=lg(m,JSON.parse(c),s,p.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:so([t,x.pathname])),(p.replace?n.replace:n.push)(x,p.state,p)},[t,n,c,s,e])}S.createContext(null);function dg(){let{matches:e}=S.useContext(bn),t=e[e.length-1];return t?t.params:{}}function Vl(e,{relative:t}={}){let{matches:n}=S.useContext(bn),{pathname:o}=nn(),s=JSON.stringify(sg(n));return S.useMemo(()=>lg(e,JSON.parse(s),o,t==="path"),[e,s,o,t])}function d8(e,t){return $w(e,t)}function $w(e,t,n,o){var _;yt(Za(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=S.useContext(xn),{matches:c}=S.useContext(bn),d=c[c.length-1],h=d?d.params:{},m=d?d.pathname:"/",p=d?d.pathnameBase:"/",x=d&&d.route;{let z=x&&x.path||"";Nw(m,!x||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let v=nn(),y;if(t){let z=typeof t=="string"?Xa(t):t;yt(p==="/"||((_=z.pathname)==null?void 0:_.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${z.pathname}" was given in the \`location\` prop.`),y=z}else y=v;let j=y.pathname||"/",w=j;if(p!=="/"){let z=p.replace(/^\//,"").split("/");w="/"+j.replace(/^\//,"").split("/").slice(z.length).join("/")}let C=Pw(e,{pathname:w});gn(x||C!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),gn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=m8(C&&C.map(z=>Object.assign({},z,{params:Object.assign({},h,z.params),pathname:so([p,s.encodeLocation?s.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?p:so([p,s.encodeLocation?s.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),c,n,o);return t&&k?S.createElement(Fl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},k):k}function u8(){let e=y8(),t=o8(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:c},"ErrorBoundary")," or"," ",S.createElement("code",{style:c},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:s},n):null,d)}var h8=S.createElement(u8,null),f8=class extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?S.createElement(bn.Provider,{value:this.props.routeContext},S.createElement(cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function p8({routeContext:e,match:t,children:n}){let o=S.useContext(Qa);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),S.createElement(bn.Provider,{value:e},n)}function m8(e,t=[],n=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,c=n==null?void 0:n.errors;if(c!=null){let m=s.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);yt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let d=!1,h=-1;if(n)for(let m=0;m<s.length;m++){let p=s[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:x,errors:v}=n,y=p.route.loader&&!x.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){d=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((m,p,x)=>{let v,y=!1,j=null,w=null;n&&(v=c&&p.route.id?c[p.route.id]:void 0,j=p.route.errorElement||h8,d&&(h<0&&x===0?(Nw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,w=null):h===x&&(y=!0,w=p.route.hydrateFallbackElement||null)));let C=t.concat(s.slice(0,x+1)),k=()=>{let _;return v?_=j:y?_=w:p.route.Component?_=S.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,S.createElement(p8,{match:p,routeContext:{outlet:m,matches:C,isDataRoute:n!=null},children:_})};return n&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?S.createElement(f8,{location:n.location,revalidation:n.revalidation,component:j,error:v,children:k(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):k()},null)}function ug(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g8(e){let t=S.useContext(Qa);return yt(t,ug(e)),t}function x8(e){let t=S.useContext(ph);return yt(t,ug(e)),t}function b8(e){let t=S.useContext(bn);return yt(t,ug(e)),t}function hg(e){let t=b8(e),n=t.matches[t.matches.length-1];return yt(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function v8(){return hg("useRouteId")}function y8(){var o;let e=S.useContext(cg),t=x8("useRouteError"),n=hg("useRouteError");return e!==void 0?e:(o=t.errors)==null?void 0:o[n]}function w8(){let{router:e}=g8("useNavigate"),t=hg("useNavigate"),n=S.useRef(!1);return Bw(()=>{n.current=!0}),S.useCallback(async(s,c={})=>{gn(n.current,Lw),n.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:t,...c}))},[e,t])}var Fv={};function Nw(e,t,n){!t&&!Fv[e]&&(Fv[e]=!0,gn(!1,n))}S.memo(j8);function j8({routes:e,future:t,state:n}){return $w(e,void 0,n,t)}function Hw({to:e,replace:t,state:n,relative:o}){yt(Za(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=S.useContext(xn);gn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=S.useContext(bn),{pathname:d}=nn(),h=Ei(),m=lg(e,sg(c),d,o==="path"),p=JSON.stringify(m);return S.useEffect(()=>{h(JSON.parse(p),{replace:t,state:n,relative:o})},[h,p,o,t,n]),null}function Ht(e){yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function S8({basename:e="/",children:t=null,location:n,navigationType:o="POP",navigator:s,static:c=!1}){yt(!Za(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),h=S.useMemo(()=>({basename:d,navigator:s,static:c,future:{}}),[d,s,c]);typeof n=="string"&&(n=Xa(n));let{pathname:m="/",search:p="",hash:x="",state:v=null,key:y="default"}=n,j=S.useMemo(()=>{let w=lo(m,d);return w==null?null:{location:{pathname:w,search:p,hash:x,state:v,key:y},navigationType:o}},[d,m,p,x,v,y,o]);return gn(j!=null,`<Router basename="${d}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:S.createElement(xn.Provider,{value:h},S.createElement(Fl.Provider,{children:t,value:j}))}function k8({children:e,location:t}){return d8(Pm(e),t)}function Pm(e,t=[]){let n=[];return S.Children.forEach(e,(o,s)=>{if(!S.isValidElement(o))return;let c=[...t,s];if(o.type===S.Fragment){n.push.apply(n,Pm(o.props.children,c));return}yt(o.type===Ht,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),yt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=Pm(o.props.children,c)),n.push(d)}),n}var zu="get",Du="application/x-www-form-urlencoded";function mh(e){return e!=null&&typeof e.tagName=="string"}function C8(e){return mh(e)&&e.tagName.toLowerCase()==="button"}function M8(e){return mh(e)&&e.tagName.toLowerCase()==="form"}function _8(e){return mh(e)&&e.tagName.toLowerCase()==="input"}function T8(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function z8(e,t){return e.button===0&&(!t||t==="_self")&&!T8(e)}var ad=null;function D8(){if(ad===null)try{new FormData(document.createElement("form"),0),ad=!1}catch{ad=!0}return ad}var P8=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function r0(e){return e!=null&&!P8.has(e)?(gn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Du}"`),null):e}function A8(e,t){let n,o,s,c,d;if(M8(e)){let h=e.getAttribute("action");o=h?lo(h,t):null,n=e.getAttribute("method")||zu,s=r0(e.getAttribute("enctype"))||Du,c=new FormData(e)}else if(C8(e)||_8(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=e.getAttribute("formaction")||h.getAttribute("action");if(o=m?lo(m,t):null,n=e.getAttribute("formmethod")||h.getAttribute("method")||zu,s=r0(e.getAttribute("formenctype"))||r0(h.getAttribute("enctype"))||Du,c=new FormData(h,e),!D8()){let{name:p,type:x,value:v}=e;if(x==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,v)}}else{if(mh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=zu,o=null,s=Du,d=e}return c&&s==="text/plain"&&(d=c,c=void 0),{action:o,method:n.toLowerCase(),encType:s,formData:c,body:d}}function fg(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function E8(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function O8(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function R8(e,t,n){let o=await Promise.all(e.map(async s=>{let c=t.routes[s.route.id];if(c){let d=await E8(c,n);return d.links?d.links():[]}return[]}));return N8(o.flat(1).filter(O8).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Vv(e,t,n,o,s,c){let d=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,h=(m,p)=>{var x;return n[p].pathname!==m.pathname||((x=n[p].route.path)==null?void 0:x.endsWith("*"))&&n[p].params["*"]!==m.params["*"]};return c==="assets"?t.filter((m,p)=>d(m,p)||h(m,p)):c==="data"?t.filter((m,p)=>{var v;let x=o.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(d(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let y=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(e,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function L8(e,t,{includeHydrateFallback:n}={}){return B8(e.map(o=>{let s=t.routes[o.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function B8(e){return[...new Set(e)]}function $8(e){let t={},n=Object.keys(e).sort();for(let o of n)t[o]=e[o];return t}function N8(e,t){let n=new Set;return new Set(t),e.reduce((o,s)=>{let c=JSON.stringify($8(s));return n.has(c)||(n.add(c),o.push({key:c,link:s})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var H8=new Set([100,101,204,205]);function F8(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&lo(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Fw(){let e=S.useContext(Qa);return fg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function V8(){let e=S.useContext(ph);return fg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var pg=S.createContext(void 0);pg.displayName="FrameworkContext";function Vw(){let e=S.useContext(pg);return fg(e,"You must render this element inside a <HydratedRouter> element"),e}function U8(e,t){let n=S.useContext(pg),[o,s]=S.useState(!1),[c,d]=S.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:v}=t,y=S.useRef(null);S.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let C=_=>{_.forEach(z=>{d(z.isIntersecting)})},k=new IntersectionObserver(C,{threshold:.5});return y.current&&k.observe(y.current),()=>{k.disconnect()}}},[e]),S.useEffect(()=>{if(o){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[o]);let j=()=>{s(!0)},w=()=>{s(!1),d(!1)};return n?e!=="intent"?[c,y,{}]:[c,y,{onFocus:Ks(h,j),onBlur:Ks(m,w),onMouseEnter:Ks(p,j),onMouseLeave:Ks(x,w),onTouchStart:Ks(v,j)}]:[!1,y,{}]}function Ks(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function I8({page:e,...t}){let{router:n}=Fw(),o=S.useMemo(()=>Pw(n.routes,e,n.basename),[n.routes,e,n.basename]);return o?S.createElement(q8,{page:e,matches:o,...t}):null}function Y8(e){let{manifest:t,routeModules:n}=Vw(),[o,s]=S.useState([]);return S.useEffect(()=>{let c=!1;return R8(e,t,n).then(d=>{c||s(d)}),()=>{c=!0}},[e,t,n]),o}function q8({page:e,matches:t,...n}){let o=nn(),{manifest:s,routeModules:c}=Vw(),{basename:d}=Fw(),{loaderData:h,matches:m}=V8(),p=S.useMemo(()=>Vv(e,t,m,s,o,"data"),[e,t,m,s,o]),x=S.useMemo(()=>Vv(e,t,m,s,o,"assets"),[e,t,m,s,o]),v=S.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let w=new Set,C=!1;if(t.forEach(_=>{var D;let z=s.routes[_.route.id];!z||!z.hasLoader||(!p.some(L=>L.route.id===_.route.id)&&_.route.id in h&&((D=c[_.route.id])!=null&&D.shouldRevalidate)||z.hasClientLoader?C=!0:w.add(_.route.id))}),w.size===0)return[];let k=F8(e,d);return C&&w.size>0&&k.searchParams.set("_routes",t.filter(_=>w.has(_.route.id)).map(_=>_.route.id).join(",")),[k.pathname+k.search]},[d,h,o,s,p,t,e,c]),y=S.useMemo(()=>L8(x,s),[x,s]),j=Y8(x);return S.createElement(S.Fragment,null,v.map(w=>S.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),y.map(w=>S.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),j.map(({key:w,link:C})=>S.createElement("link",{key:w,...C})))}function W8(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Uw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Uw&&(window.__reactRouterVersion="7.6.2")}catch{}function G8({basename:e,children:t,window:n}){let o=S.useRef();o.current==null&&(o.current=Rk({window:n,v5Compat:!0}));let s=o.current,[c,d]=S.useState({action:s.action,location:s.location}),h=S.useCallback(m=>{S.startTransition(()=>d(m))},[d]);return S.useLayoutEffect(()=>s.listen(h),[s,h]),S.createElement(S8,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:s})}var Iw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,st=S.forwardRef(function({onClick:t,discover:n="render",prefetch:o="none",relative:s,reloadDocument:c,replace:d,state:h,target:m,to:p,preventScrollReset:x,viewTransition:v,...y},j){let{basename:w}=S.useContext(xn),C=typeof p=="string"&&Iw.test(p),k,_=!1;if(typeof p=="string"&&C&&(k=p,Uw))try{let te=new URL(window.location.href),de=p.startsWith("//")?new URL(te.protocol+p):new URL(p),le=lo(de.pathname,w);de.origin===te.origin&&le!=null?p=le+de.search+de.hash:_=!0}catch{gn(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=l8(p,{relative:s}),[D,L,A]=U8(o,y),V=K8(p,{replace:d,state:h,target:m,preventScrollReset:x,relative:s,viewTransition:v});function E(te){t&&t(te),te.defaultPrevented||V(te)}let F=S.createElement("a",{...y,...A,href:k||z,onClick:_||c?t:E,ref:W8(j,L),target:m,"data-discover":!C&&n==="render"?"true":void 0});return D&&!C?S.createElement(S.Fragment,null,F,S.createElement(I8,{page:z})):F});st.displayName="Link";var X8=S.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:o="",end:s=!1,style:c,to:d,viewTransition:h,children:m,...p},x){let v=Vl(d,{relative:p.relative}),y=nn(),j=S.useContext(ph),{navigator:w,basename:C}=S.useContext(xn),k=j!=null&&n6(v)&&h===!0,_=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,z=y.pathname,D=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;n||(z=z.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&C&&(D=lo(D,C)||D);const L=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let A=z===_||!s&&z.startsWith(_)&&z.charAt(L)==="/",V=D!=null&&(D===_||!s&&D.startsWith(_)&&D.charAt(_.length)==="/"),E={isActive:A,isPending:V,isTransitioning:k},F=A?t:void 0,te;typeof o=="function"?te=o(E):te=[o,A?"active":null,V?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let de=typeof c=="function"?c(E):c;return S.createElement(st,{...p,"aria-current":F,className:te,ref:x,style:de,to:d,viewTransition:h},typeof m=="function"?m(E):m)});X8.displayName="NavLink";var Q8=S.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:o,replace:s,state:c,method:d=zu,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:v,...y},j)=>{let w=t6(),C=r6(h,{relative:p}),k=d.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&Iw.test(h),z=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let L=D.nativeEvent.submitter,A=(L==null?void 0:L.getAttribute("formmethod"))||d;w(L||D.currentTarget,{fetcherKey:t,method:A,navigate:n,replace:s,state:c,relative:p,preventScrollReset:x,viewTransition:v})};return S.createElement("form",{ref:j,method:k,action:C,onSubmit:o?m:z,...y,"data-discover":!_&&e==="render"?"true":void 0})});Q8.displayName="Form";function Z8(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yw(e){let t=S.useContext(Qa);return yt(t,Z8(e)),t}function K8(e,{target:t,replace:n,state:o,preventScrollReset:s,relative:c,viewTransition:d}={}){let h=Ei(),m=nn(),p=Vl(e,{relative:c});return S.useCallback(x=>{if(z8(x,t)){x.preventDefault();let v=n!==void 0?n:Al(m)===Al(p);h(e,{replace:v,state:o,preventScrollReset:s,relative:c,viewTransition:d})}},[m,h,p,n,o,t,e,s,c,d])}var J8=0,e6=()=>`__${String(++J8)}__`;function t6(){let{router:e}=Yw("useSubmit"),{basename:t}=S.useContext(xn),n=v8();return S.useCallback(async(o,s={})=>{let{action:c,method:d,encType:h,formData:m,body:p}=A8(o,t);if(s.navigate===!1){let x=s.fetcherKey||e6();await e.fetch(x,n,s.action||c,{preventScrollReset:s.preventScrollReset,formData:m,body:p,formMethod:s.method||d,formEncType:s.encType||h,flushSync:s.flushSync})}else await e.navigate(s.action||c,{preventScrollReset:s.preventScrollReset,formData:m,body:p,formMethod:s.method||d,formEncType:s.encType||h,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,t,n])}function r6(e,{relative:t}={}){let{basename:n}=S.useContext(xn),o=S.useContext(bn);yt(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),c={...Vl(e||".",{relative:t})},d=nn();if(e==null){c.search=d.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let x=h.toString();c.search=x?`?${x}`:""}}return(!e||e===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:so([n,c.pathname])),Al(c)}function n6(e,t={}){let n=S.useContext(Rw);yt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Yw("useViewTransitionState"),s=Vl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let c=lo(n.currentLocation.pathname,o)||n.currentLocation.pathname,d=lo(n.nextLocation.pathname,o)||n.nextLocation.pathname;return Gu(s.pathname,d)!=null||Gu(s.pathname,c)!=null}[...H8];var qw=Dw(),fr=function(){return fr=Object.assign||function(t){for(var n,o=1,s=arguments.length;o<s;o++){n=arguments[o];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},fr.apply(this,arguments)};function Ba(e,t,n){if(n||arguments.length===2)for(var o=0,s=t.length,c;o<s;o++)(c||!(o in t))&&(c||(c=Array.prototype.slice.call(t,0,o)),c[o]=t[o]);return e.concat(c||Array.prototype.slice.call(t))}var xt="-ms-",Cl="-moz-",tt="-webkit-",Ww="comm",gh="rule",mg="decl",o6="@import",Gw="@keyframes",i6="@layer",Xw=Math.abs,gg=String.fromCharCode,Am=Object.assign;function a6(e,t){return Kt(e,0)^45?(((t<<2^Kt(e,0))<<2^Kt(e,1))<<2^Kt(e,2))<<2^Kt(e,3):0}function Qw(e){return e.trim()}function no(e,t){return(e=t.exec(e))?e[0]:e}function $e(e,t,n){return e.replace(t,n)}function Pu(e,t,n){return e.indexOf(t,n)}function Kt(e,t){return e.charCodeAt(t)|0}function $a(e,t,n){return e.slice(t,n)}function En(e){return e.length}function Zw(e){return e.length}function wl(e,t){return t.push(e),e}function s6(e,t){return e.map(t).join("")}function Uv(e,t){return e.filter(function(n){return!no(n,t)})}var xh=1,Na=1,Kw=0,tn=0,Ft=0,Ka="";function bh(e,t,n,o,s,c,d,h){return{value:e,root:t,parent:n,type:o,props:s,children:c,line:xh,column:Na,length:d,return:"",siblings:h}}function Vo(e,t){return Am(bh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ba(e){for(;e.root;)e=Vo(e.root,{children:[e]});wl(e,e.siblings)}function l6(){return Ft}function c6(){return Ft=tn>0?Kt(Ka,--tn):0,Na--,Ft===10&&(Na=1,xh--),Ft}function pn(){return Ft=tn<Kw?Kt(Ka,tn++):0,Na++,Ft===10&&(Na=1,xh++),Ft}function Mi(){return Kt(Ka,tn)}function Au(){return tn}function vh(e,t){return $a(Ka,e,t)}function Em(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d6(e){return xh=Na=1,Kw=En(Ka=e),tn=0,[]}function u6(e){return Ka="",e}function n0(e){return Qw(vh(tn-1,Om(e===91?e+2:e===40?e+1:e)))}function h6(e){for(;(Ft=Mi())&&Ft<33;)pn();return Em(e)>2||Em(Ft)>3?"":" "}function f6(e,t){for(;--t&&pn()&&!(Ft<48||Ft>102||Ft>57&&Ft<65||Ft>70&&Ft<97););return vh(e,Au()+(t<6&&Mi()==32&&pn()==32))}function Om(e){for(;pn();)switch(Ft){case e:return tn;case 34:case 39:e!==34&&e!==39&&Om(Ft);break;case 40:e===41&&Om(e);break;case 92:pn();break}return tn}function p6(e,t){for(;pn()&&e+Ft!==57;)if(e+Ft===84&&Mi()===47)break;return"/*"+vh(t,tn-1)+"*"+gg(e===47?e:pn())}function m6(e){for(;!Em(Mi());)pn();return vh(e,tn)}function g6(e){return u6(Eu("",null,null,null,[""],e=d6(e),0,[0],e))}function Eu(e,t,n,o,s,c,d,h,m){for(var p=0,x=0,v=d,y=0,j=0,w=0,C=1,k=1,_=1,z=0,D="",L=s,A=c,V=o,E=D;k;)switch(w=z,z=pn()){case 40:if(w!=108&&Kt(E,v-1)==58){Pu(E+=$e(n0(z),"&","&\f"),"&\f",Xw(p?h[p-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:E+=n0(z);break;case 9:case 10:case 13:case 32:E+=h6(w);break;case 92:E+=f6(Au()-1,7);continue;case 47:switch(Mi()){case 42:case 47:wl(x6(p6(pn(),Au()),t,n,m),m);break;default:E+="/"}break;case 123*C:h[p++]=En(E)*_;case 125*C:case 59:case 0:switch(z){case 0:case 125:k=0;case 59+x:_==-1&&(E=$e(E,/\f/g,"")),j>0&&En(E)-v&&wl(j>32?Yv(E+";",o,n,v-1,m):Yv($e(E," ","")+";",o,n,v-2,m),m);break;case 59:E+=";";default:if(wl(V=Iv(E,t,n,p,x,s,h,D,L=[],A=[],v,c),c),z===123)if(x===0)Eu(E,t,V,V,L,c,v,h,A);else switch(y===99&&Kt(E,3)===110?100:y){case 100:case 108:case 109:case 115:Eu(e,V,V,o&&wl(Iv(e,V,V,0,0,s,h,D,s,L=[],v,A),A),s,A,v,h,o?L:A);break;default:Eu(E,V,V,V,[""],A,0,h,A)}}p=x=j=0,C=_=1,D=E="",v=d;break;case 58:v=1+En(E),j=w;default:if(C<1){if(z==123)--C;else if(z==125&&C++==0&&c6()==125)continue}switch(E+=gg(z),z*C){case 38:_=x>0?1:(E+="\f",-1);break;case 44:h[p++]=(En(E)-1)*_,_=1;break;case 64:Mi()===45&&(E+=n0(pn())),y=Mi(),x=v=En(D=E+=m6(Au())),z++;break;case 45:w===45&&En(E)==2&&(C=0)}}return c}function Iv(e,t,n,o,s,c,d,h,m,p,x,v){for(var y=s-1,j=s===0?c:[""],w=Zw(j),C=0,k=0,_=0;C<o;++C)for(var z=0,D=$a(e,y+1,y=Xw(k=d[C])),L=e;z<w;++z)(L=Qw(k>0?j[z]+" "+D:$e(D,/&\f/g,j[z])))&&(m[_++]=L);return bh(e,t,n,s===0?gh:h,m,p,x,v)}function x6(e,t,n,o){return bh(e,t,n,Ww,gg(l6()),$a(e,2,-2),0,o)}function Yv(e,t,n,o,s){return bh(e,t,n,mg,$a(e,0,o),$a(e,o+1,-1),o,s)}function Jw(e,t,n){switch(a6(e,t)){case 5103:return tt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+e+e;case 4789:return Cl+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+e+Cl+e+xt+e+e;case 5936:switch(Kt(e,t+11)){case 114:return tt+e+xt+$e(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return tt+e+xt+$e(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return tt+e+xt+$e(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return tt+e+xt+e+e;case 6165:return tt+e+xt+"flex-"+e+e;case 5187:return tt+e+$e(e,/(\w+).+(:[^]+)/,tt+"box-$1$2"+xt+"flex-$1$2")+e;case 5443:return tt+e+xt+"flex-item-"+$e(e,/flex-|-self/g,"")+(no(e,/flex-|baseline/)?"":xt+"grid-row-"+$e(e,/flex-|-self/g,""))+e;case 4675:return tt+e+xt+"flex-line-pack"+$e(e,/align-content|flex-|-self/g,"")+e;case 5548:return tt+e+xt+$e(e,"shrink","negative")+e;case 5292:return tt+e+xt+$e(e,"basis","preferred-size")+e;case 6060:return tt+"box-"+$e(e,"-grow","")+tt+e+xt+$e(e,"grow","positive")+e;case 4554:return tt+$e(e,/([^-])(transform)/g,"$1"+tt+"$2")+e;case 6187:return $e($e($e(e,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),e,"")+e;case 5495:case 3959:return $e(e,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return $e($e(e,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+e+e;case 4200:if(!no(e,/flex-|baseline/))return xt+"grid-column-align"+$a(e,t)+e;break;case 2592:case 3360:return xt+$e(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(o,s){return t=s,no(o.props,/grid-\w+-end/)})?~Pu(e+(n=n[t].value),"span",0)?e:xt+$e(e,"-start","")+e+xt+"grid-row-span:"+(~Pu(n,"span",0)?no(n,/\d+/):+no(n,/\d+/)-+no(e,/\d+/))+";":xt+$e(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(o){return no(o.props,/grid-\w+-start/)})?e:xt+$e($e(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $e(e,/(.+)-inline(.+)/,tt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(En(e)-1-t>6)switch(Kt(e,t+1)){case 109:if(Kt(e,t+4)!==45)break;case 102:return $e(e,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+Cl+(Kt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pu(e,"stretch",0)?Jw($e(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $e(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,c,d,h,m,p){return xt+s+":"+c+p+(d?xt+s+"-span:"+(h?m:+m-+c)+p:"")+e});case 4949:if(Kt(e,t+6)===121)return $e(e,":",":"+tt)+e;break;case 6444:switch(Kt(e,Kt(e,14)===45?18:11)){case 120:return $e(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(Kt(e,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+xt+"$2box$3")+e;case 100:return $e(e,":",":"+xt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $e(e,"scroll-","scroll-snap-")+e}return e}function Xu(e,t){for(var n="",o=0;o<e.length;o++)n+=t(e[o],o,e,t)||"";return n}function b6(e,t,n,o){switch(e.type){case i6:if(e.children.length)break;case o6:case mg:return e.return=e.return||e.value;case Ww:return"";case Gw:return e.return=e.value+"{"+Xu(e.children,o)+"}";case gh:if(!En(e.value=e.props.join(",")))return""}return En(n=Xu(e.children,o))?e.return=e.value+"{"+n+"}":""}function v6(e){var t=Zw(e);return function(n,o,s,c){for(var d="",h=0;h<t;h++)d+=e[h](n,o,s,c)||"";return d}}function y6(e){return function(t){t.root||(t=t.return)&&e(t)}}function w6(e,t,n,o){if(e.length>-1&&!e.return)switch(e.type){case mg:e.return=Jw(e.value,e.length,n);return;case Gw:return Xu([Vo(e,{value:$e(e.value,"@","@"+tt)})],o);case gh:if(e.length)return s6(n=e.props,function(s){switch(no(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ba(Vo(e,{props:[$e(s,/:(read-\w+)/,":"+Cl+"$1")]})),ba(Vo(e,{props:[s]})),Am(e,{props:Uv(n,o)});break;case"::placeholder":ba(Vo(e,{props:[$e(s,/:(plac\w+)/,":"+tt+"input-$1")]})),ba(Vo(e,{props:[$e(s,/:(plac\w+)/,":"+Cl+"$1")]})),ba(Vo(e,{props:[$e(s,/:(plac\w+)/,xt+"input-$1")]})),ba(Vo(e,{props:[s]})),Am(e,{props:Uv(n,o)});break}return""})}}var j6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$r={},Ha=typeof process<"u"&&$r!==void 0&&($r.REACT_APP_SC_ATTR||$r.SC_ATTR)||"data-styled",ej="active",tj="data-styled-version",yh="6.1.19",xg=`/*!sc*/
`,Qu=typeof window<"u"&&typeof document<"u",S6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$r!==void 0&&$r.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$r.REACT_APP_SC_DISABLE_SPEEDY!==""?$r.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$r.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$r!==void 0&&$r.SC_DISABLE_SPEEDY!==void 0&&$r.SC_DISABLE_SPEEDY!==""&&$r.SC_DISABLE_SPEEDY!=="false"&&$r.SC_DISABLE_SPEEDY),k6={},wh=Object.freeze([]),Fa=Object.freeze({});function rj(e,t,n){return n===void 0&&(n=Fa),e.theme!==n.theme&&e.theme||t||n.theme}var nj=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),C6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,M6=/(^-|-$)/g;function qv(e){return e.replace(C6,"-").replace(M6,"")}var _6=/(a)(d)/gi,sd=52,Wv=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rm(e){var t,n="";for(t=Math.abs(e);t>sd;t=t/sd|0)n=Wv(t%sd)+n;return(Wv(t%sd)+n).replace(_6,"$1-$2")}var o0,oj=5381,Oa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ij=function(e){return Oa(oj,e)};function bg(e){return Rm(ij(e)>>>0)}function T6(e){return e.displayName||e.name||"Component"}function i0(e){return typeof e=="string"&&!0}var aj=typeof Symbol=="function"&&Symbol.for,sj=aj?Symbol.for("react.memo"):60115,z6=aj?Symbol.for("react.forward_ref"):60112,D6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},P6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lj={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A6=((o0={})[z6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o0[sj]=lj,o0);function Gv(e){return("type"in(t=e)&&t.type.$$typeof)===sj?lj:"$$typeof"in e?A6[e.$$typeof]:D6;var t}var E6=Object.defineProperty,O6=Object.getOwnPropertyNames,Xv=Object.getOwnPropertySymbols,R6=Object.getOwnPropertyDescriptor,L6=Object.getPrototypeOf,Qv=Object.prototype;function cj(e,t,n){if(typeof t!="string"){if(Qv){var o=L6(t);o&&o!==Qv&&cj(e,o,n)}var s=O6(t);Xv&&(s=s.concat(Xv(t)));for(var c=Gv(e),d=Gv(t),h=0;h<s.length;++h){var m=s[h];if(!(m in P6||n&&n[m]||d&&m in d||c&&m in c)){var p=R6(t,m);try{E6(e,m,p)}catch{}}}}return e}function Va(e){return typeof e=="function"}function vg(e){return typeof e=="object"&&"styledComponentId"in e}function ji(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zu(e,t){if(e.length===0)return"";for(var n=e[0],o=1;o<e.length;o++)n+=e[o];return n}function El(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Lm(e,t,n){if(n===void 0&&(n=!1),!n&&!El(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=Lm(e[o],t[o]);else if(El(t))for(var o in t)e[o]=Lm(e[o],t[o]);return e}function yg(e,t){Object.defineProperty(e,"toString",{value:t})}function Ul(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var B6=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,c=s;t>=c;)if((c<<=1)<0)throw Ul(16,"".concat(t));this.groupSizes=new Uint32Array(c),this.groupSizes.set(o),this.length=c;for(var d=s;d<c;d++)this.groupSizes[d]=0}for(var h=this.indexOfGroup(t+1),m=(d=0,n.length);d<m;d++)this.tag.insertRule(h,n[d])&&(this.groupSizes[t]++,h++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),s=o+n;this.groupSizes[t]=0;for(var c=o;c<s;c++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],s=this.indexOfGroup(t),c=s+o,d=s;d<c;d++)n+="".concat(this.tag.getRule(d)).concat(xg);return n},e}(),Ou=new Map,Ku=new Map,Ru=1,ld=function(e){if(Ou.has(e))return Ou.get(e);for(;Ku.has(Ru);)Ru++;var t=Ru++;return Ou.set(e,t),Ku.set(t,e),t},$6=function(e,t){Ru=t+1,Ou.set(e,t),Ku.set(t,e)},N6="style[".concat(Ha,"][").concat(tj,'="').concat(yh,'"]'),H6=new RegExp("^".concat(Ha,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F6=function(e,t,n){for(var o,s=n.split(","),c=0,d=s.length;c<d;c++)(o=s[c])&&e.registerName(t,o)},V6=function(e,t){for(var n,o=((n=t.textContent)!==null&&n!==void 0?n:"").split(xg),s=[],c=0,d=o.length;c<d;c++){var h=o[c].trim();if(h){var m=h.match(H6);if(m){var p=0|parseInt(m[1],10),x=m[2];p!==0&&($6(x,p),F6(e,x,m[3]),e.getTag().insertRules(p,s)),s.length=0}else s.push(h)}}},Zv=function(e){for(var t=document.querySelectorAll(N6),n=0,o=t.length;n<o;n++){var s=t[n];s&&s.getAttribute(Ha)!==ej&&(V6(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function U6(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dj=function(e){var t=document.head,n=e||t,o=document.createElement("style"),s=function(h){var m=Array.from(h.querySelectorAll("style[".concat(Ha,"]")));return m[m.length-1]}(n),c=s!==void 0?s.nextSibling:null;o.setAttribute(Ha,ej),o.setAttribute(tj,yh);var d=U6();return d&&o.setAttribute("nonce",d),n.insertBefore(o,c),o},I6=function(){function e(t){this.element=dj(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var o=document.styleSheets,s=0,c=o.length;s<c;s++){var d=o[s];if(d.ownerNode===n)return d}throw Ul(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Y6=function(){function e(t){this.element=dj(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),q6=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Kv=Qu,W6={isServer:!Qu,useCSSOMInjection:!S6},Ju=function(){function e(t,n,o){t===void 0&&(t=Fa),n===void 0&&(n={});var s=this;this.options=fr(fr({},W6),t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Qu&&Kv&&(Kv=!1,Zv(this)),yg(this,function(){return function(c){for(var d=c.getTag(),h=d.length,m="",p=function(v){var y=function(_){return Ku.get(_)}(v);if(y===void 0)return"continue";var j=c.names.get(y),w=d.getGroup(v);if(j===void 0||!j.size||w.length===0)return"continue";var C="".concat(Ha,".g").concat(v,'[id="').concat(y,'"]'),k="";j!==void 0&&j.forEach(function(_){_.length>0&&(k+="".concat(_,","))}),m+="".concat(w).concat(C,'{content:"').concat(k,'"}').concat(xg)},x=0;x<h;x++)p(x);return m}(s)})}return e.registerId=function(t){return ld(t)},e.prototype.rehydrate=function(){!this.server&&Qu&&Zv(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(fr(fr({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var o=n.useCSSOMInjection,s=n.target;return n.isServer?new q6(s):o?new I6(s):new Y6(s)}(this.options),new B6(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ld(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},e.prototype.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(ld(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ld(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),G6=/&/g,X6=/^\s*\/\/.*$/gm;function uj(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=uj(n.children,t)),n})}function Q6(e){var t,n,o,s=Fa,c=s.options,d=c===void 0?Fa:c,h=s.plugins,m=h===void 0?wh:h,p=function(y,j,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):y},x=m.slice();x.push(function(y){y.type===gh&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(G6,n).replace(o,p))}),d.prefix&&x.push(w6),x.push(b6);var v=function(y,j,w,C){j===void 0&&(j=""),w===void 0&&(w=""),C===void 0&&(C="&"),t=C,n=j,o=new RegExp("\\".concat(n,"\\b"),"g");var k=y.replace(X6,""),_=g6(w||j?"".concat(w," ").concat(j," { ").concat(k," }"):k);d.namespace&&(_=uj(_,d.namespace));var z=[];return Xu(_,v6(x.concat(y6(function(D){return z.push(D)})))),z};return v.hash=m.length?m.reduce(function(y,j){return j.name||Ul(15),Oa(y,j.name)},oj).toString():"",v}var Z6=new Ju,Bm=Q6(),hj=pt.createContext({shouldForwardProp:void 0,styleSheet:Z6,stylis:Bm});hj.Consumer;pt.createContext(void 0);function $m(){return S.useContext(hj)}var fj=function(){function e(t,n){var o=this;this.inject=function(s,c){c===void 0&&(c=Bm);var d=o.name+c.hash;s.hasNameForId(o.id,d)||s.insertRules(o.id,d,c(o.rules,d,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,yg(this,function(){throw Ul(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Bm),this.name+t.hash},e}(),K6=function(e){return e>="A"&&e<="Z"};function Jv(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(n===1&&o==="-"&&e[0]==="-")return e;K6(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var pj=function(e){return e==null||e===!1||e===""},mj=function(e){var t,n,o=[];for(var s in e){var c=e[s];e.hasOwnProperty(s)&&!pj(c)&&(Array.isArray(c)&&c.isCss||Va(c)?o.push("".concat(Jv(s),":"),c,";"):El(c)?o.push.apply(o,Ba(Ba(["".concat(s," {")],mj(c),!1),["}"],!1)):o.push("".concat(Jv(s),": ").concat((t=s,(n=c)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in j6||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return o};function qo(e,t,n,o){if(pj(e))return[];if(vg(e))return[".".concat(e.styledComponentId)];if(Va(e)){if(!Va(c=e)||c.prototype&&c.prototype.isReactComponent||!t)return[e];var s=e(t);return qo(s,t,n,o)}var c;return e instanceof fj?n?(e.inject(n,o),[e.getName(o)]):[e]:El(e)?mj(e):Array.isArray(e)?Array.prototype.concat.apply(wh,e.map(function(d){return qo(d,t,n,o)})):[e.toString()]}function gj(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Va(n)&&!vg(n))return!1}return!0}var J6=ij(yh),eC=function(){function e(t,n,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&gj(t),this.componentId=n,this.baseHash=Oa(J6,n),this.baseStyle=o,Ju.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=ji(s,this.staticRulesId);else{var c=Zu(qo(this.rules,t,n,o)),d=Rm(Oa(this.baseHash,c)>>>0);if(!n.hasNameForId(this.componentId,d)){var h=o(c,".".concat(d),void 0,this.componentId);n.insertRules(this.componentId,d,h)}s=ji(s,d),this.staticRulesId=d}else{for(var m=Oa(this.baseHash,o.hash),p="",x=0;x<this.rules.length;x++){var v=this.rules[x];if(typeof v=="string")p+=v;else if(v){var y=Zu(qo(v,t,n,o));m=Oa(m,y+x),p+=y}}if(p){var j=Rm(m>>>0);n.hasNameForId(this.componentId,j)||n.insertRules(this.componentId,j,o(p,".".concat(j),void 0,this.componentId)),s=ji(s,j)}}return s},e}(),wg=pt.createContext(void 0);wg.Consumer;var a0={};function tC(e,t,n){var o=vg(e),s=e,c=!i0(e),d=t.attrs,h=d===void 0?wh:d,m=t.componentId,p=m===void 0?function(L,A){var V=typeof L!="string"?"sc":qv(L);a0[V]=(a0[V]||0)+1;var E="".concat(V,"-").concat(bg(yh+V+a0[V]));return A?"".concat(A,"-").concat(E):E}(t.displayName,t.parentComponentId):m,x=t.displayName,v=x===void 0?function(L){return i0(L)?"styled.".concat(L):"Styled(".concat(T6(L),")")}(e):x,y=t.displayName&&t.componentId?"".concat(qv(t.displayName),"-").concat(t.componentId):t.componentId||p,j=o&&s.attrs?s.attrs.concat(h).filter(Boolean):h,w=t.shouldForwardProp;if(o&&s.shouldForwardProp){var C=s.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;w=function(L,A){return C(L,A)&&k(L,A)}}else w=C}var _=new eC(n,y,o?s.componentStyle:void 0);function z(L,A){return function(V,E,F){var te=V.attrs,de=V.componentStyle,le=V.defaultProps,fe=V.foldedComponentIds,me=V.styledComponentId,pe=V.target,be=pt.useContext(wg),I=$m(),H=V.shouldForwardProp||I.shouldForwardProp,ee=rj(E,be,le)||Fa,ne=function(J,Q,ue){for(var ce,ve=fr(fr({},Q),{className:void 0,theme:ue}),Fe=0;Fe<J.length;Fe+=1){var je=Va(ce=J[Fe])?ce(ve):ce;for(var Ye in je)ve[Ye]=Ye==="className"?ji(ve[Ye],je[Ye]):Ye==="style"?fr(fr({},ve[Ye]),je[Ye]):je[Ye]}return Q.className&&(ve.className=ji(ve.className,Q.className)),ve}(te,E,ee),P=ne.as||pe,$={};for(var G in ne)ne[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&ne.theme===ee||(G==="forwardedAs"?$.as=ne.forwardedAs:H&&!H(G,P)||($[G]=ne[G]));var R=function(J,Q){var ue=$m(),ce=J.generateAndInjectStyles(Q,ue.styleSheet,ue.stylis);return ce}(de,ne),Y=ji(fe,me);return R&&(Y+=" "+R),ne.className&&(Y+=" "+ne.className),$[i0(P)&&!nj.has(P)?"class":"className"]=Y,F&&($.ref=F),S.createElement(P,$)}(D,L,A)}z.displayName=v;var D=pt.forwardRef(z);return D.attrs=j,D.componentStyle=_,D.displayName=v,D.shouldForwardProp=w,D.foldedComponentIds=o?ji(s.foldedComponentIds,s.styledComponentId):"",D.styledComponentId=y,D.target=o?s.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=o?function(A){for(var V=[],E=1;E<arguments.length;E++)V[E-1]=arguments[E];for(var F=0,te=V;F<te.length;F++)Lm(A,te[F],!0);return A}({},s.defaultProps,L):L}}),yg(D,function(){return".".concat(D.styledComponentId)}),c&&cj(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function ey(e,t){for(var n=[e[0]],o=0,s=t.length;o<s;o+=1)n.push(t[o],e[o+1]);return n}var ty=function(e){return Object.assign(e,{isCss:!0})};function jg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Va(e)||El(e))return ty(qo(ey(wh,Ba([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?qo(o):ty(qo(ey(o,t)))}function Nm(e,t,n){if(n===void 0&&(n=Fa),!t)throw Ul(1,t);var o=function(s){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];return e(t,n,jg.apply(void 0,Ba([s],c,!1)))};return o.attrs=function(s){return Nm(e,t,fr(fr({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return Nm(e,t,fr(fr({},n),s))},o}var xj=function(e){return Nm(tC,e)},f=xj;nj.forEach(function(e){f[e]=xj(e)});var rC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=gj(t),Ju.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,o,s){var c=s(Zu(qo(this.rules,n,o,s)),""),d=this.componentId+t;o.insertRules(d,d,c)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,o,s){t>2&&Ju.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,n,o,s)},e}();function nC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=jg.apply(void 0,Ba([e],t,!1)),s="sc-global-".concat(bg(JSON.stringify(o))),c=new rC(o,s),d=function(m){var p=$m(),x=pt.useContext(wg),v=pt.useRef(p.styleSheet.allocateGSInstance(s)).current;return p.styleSheet.server&&h(v,m,p.styleSheet,x,p.stylis),pt.useLayoutEffect(function(){if(!p.styleSheet.server)return h(v,m,p.styleSheet,x,p.stylis),function(){return c.removeStyles(v,p.styleSheet)}},[v,m,p.styleSheet,x,p.stylis]),null};function h(m,p,x,v,y){if(c.isStatic)c.renderStyles(m,k6,x,y);else{var j=fr(fr({},p),{theme:rj(p,v,d.defaultProps)});c.renderStyles(m,j,x,y)}}return pt.memo(d)}function On(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=Zu(jg.apply(void 0,Ba([e],t,!1))),s=bg(o);return new fj(s,o)}const oC=nC`
  :root {
    --color-background: #0A0A0C;
    --color-background-secondary: #121216;
    --color-text: #FFFFFF;
    --color-text-secondary: #B0B0B8;
    --color-accent: #E6C87E;
    --color-accent-hover: #F2D898;
    --color-positive: #00C076;
    --color-negative: #FF5757;
    --color-border: #2A2A32;
    --color-card: #16161C;
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    --border-radius: 8px;
    --transition-speed: 0.2s;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: var(--font-family);
    background-color: var(--color-background) !important;
    color: var(--color-text) !important;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
  
  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
    flex: 1;
    width: 100%;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
    
    &:hover {
      color: var(--color-accent-hover);
    }
  }

  button {
    font-family: var(--font-family);
    cursor: pointer;
    border: none;
    outline: none;
    transition: all var(--transition-speed) ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .positive {
    color: var(--color-positive);
  }

  .negative {
    color: var(--color-negative);
  }

  .card {
    background-color: var(--color-card);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.03);
  }

  .app-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    max-width: 100vw;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .map-view-active .container {
    padding: 0;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.03em;
    transition: all 0.3s ease;
    
    &.btn-primary {
      background-color: var(--color-accent);
      color: var(--color-background);
      
      &:hover {
        background-color: var(--color-accent-hover);
      }
    }
    
    &.btn-secondary {
      background-color: transparent;
      border: 1px solid var(--color-accent);
      color: var(--color-accent);
      
      &:hover {
        background-color: rgba(230, 200, 126, 0.1);
      }
    }
  }
`,iC="/loaf-mvp/assets/loaf-logo-clipped-DgMaCO4I.png";function bj(e,t){return function(){return e.apply(t,arguments)}}const{toString:aC}=Object.prototype,{getPrototypeOf:Sg}=Object,{iterator:jh,toStringTag:vj}=Symbol,Sh=(e=>t=>{const n=aC.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vn=e=>(e=e.toLowerCase(),t=>Sh(t)===e),kh=e=>t=>typeof t===e,{isArray:Ja}=Array,Ol=kh("undefined");function sC(e){return e!==null&&!Ol(e)&&e.constructor!==null&&!Ol(e.constructor)&&_r(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const yj=vn("ArrayBuffer");function lC(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&yj(e.buffer),t}const cC=kh("string"),_r=kh("function"),wj=kh("number"),Ch=e=>e!==null&&typeof e=="object",dC=e=>e===!0||e===!1,Lu=e=>{if(Sh(e)!=="object")return!1;const t=Sg(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(vj in e)&&!(jh in e)},uC=vn("Date"),hC=vn("File"),fC=vn("Blob"),pC=vn("FileList"),mC=e=>Ch(e)&&_r(e.pipe),gC=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||_r(e.append)&&((t=Sh(e))==="formdata"||t==="object"&&_r(e.toString)&&e.toString()==="[object FormData]"))},xC=vn("URLSearchParams"),[bC,vC,yC,wC]=["ReadableStream","Request","Response","Headers"].map(vn),jC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Il(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,s;if(typeof e!="object"&&(e=[e]),Ja(e))for(o=0,s=e.length;o<s;o++)t.call(null,e[o],o,e);else{const c=n?Object.getOwnPropertyNames(e):Object.keys(e),d=c.length;let h;for(o=0;o<d;o++)h=c[o],t.call(null,e[h],h,e)}}function jj(e,t){t=t.toLowerCase();const n=Object.keys(e);let o=n.length,s;for(;o-- >0;)if(s=n[o],t===s.toLowerCase())return s;return null}const Si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Sj=e=>!Ol(e)&&e!==Si;function Hm(){const{caseless:e}=Sj(this)&&this||{},t={},n=(o,s)=>{const c=e&&jj(t,s)||s;Lu(t[c])&&Lu(o)?t[c]=Hm(t[c],o):Lu(o)?t[c]=Hm({},o):Ja(o)?t[c]=o.slice():t[c]=o};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&Il(arguments[o],n);return t}const SC=(e,t,n,{allOwnKeys:o}={})=>(Il(t,(s,c)=>{n&&_r(s)?e[c]=bj(s,n):e[c]=s},{allOwnKeys:o}),e),kC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),CC=(e,t,n,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},MC=(e,t,n,o)=>{let s,c,d;const h={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),c=s.length;c-- >0;)d=s[c],(!o||o(d,e,t))&&!h[d]&&(t[d]=e[d],h[d]=!0);e=n!==!1&&Sg(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},_C=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const o=e.indexOf(t,n);return o!==-1&&o===n},TC=e=>{if(!e)return null;if(Ja(e))return e;let t=e.length;if(!wj(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},zC=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Sg(Uint8Array)),DC=(e,t)=>{const o=(e&&e[jh]).call(e);let s;for(;(s=o.next())&&!s.done;){const c=s.value;t.call(e,c[0],c[1])}},PC=(e,t)=>{let n;const o=[];for(;(n=e.exec(t))!==null;)o.push(n);return o},AC=vn("HTMLFormElement"),EC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,s){return o.toUpperCase()+s}),ry=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),OC=vn("RegExp"),kj=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),o={};Il(n,(s,c)=>{let d;(d=t(s,c,e))!==!1&&(o[c]=d||s)}),Object.defineProperties(e,o)},RC=e=>{kj(e,(t,n)=>{if(_r(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(_r(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},LC=(e,t)=>{const n={},o=s=>{s.forEach(c=>{n[c]=!0})};return Ja(e)?o(e):o(String(e).split(t)),n},BC=()=>{},$C=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function NC(e){return!!(e&&_r(e.append)&&e[vj]==="FormData"&&e[jh])}const HC=e=>{const t=new Array(10),n=(o,s)=>{if(Ch(o)){if(t.indexOf(o)>=0)return;if(!("toJSON"in o)){t[s]=o;const c=Ja(o)?[]:{};return Il(o,(d,h)=>{const m=n(d,s+1);!Ol(m)&&(c[h]=m)}),t[s]=void 0,c}}return o};return n(e,0)},FC=vn("AsyncFunction"),VC=e=>e&&(Ch(e)||_r(e))&&_r(e.then)&&_r(e.catch),Cj=((e,t)=>e?setImmediate:t?((n,o)=>(Si.addEventListener("message",({source:s,data:c})=>{s===Si&&c===n&&o.length&&o.shift()()},!1),s=>{o.push(s),Si.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_r(Si.postMessage)),UC=typeof queueMicrotask<"u"?queueMicrotask.bind(Si):typeof process<"u"&&process.nextTick||Cj,IC=e=>e!=null&&_r(e[jh]),K={isArray:Ja,isArrayBuffer:yj,isBuffer:sC,isFormData:gC,isArrayBufferView:lC,isString:cC,isNumber:wj,isBoolean:dC,isObject:Ch,isPlainObject:Lu,isReadableStream:bC,isRequest:vC,isResponse:yC,isHeaders:wC,isUndefined:Ol,isDate:uC,isFile:hC,isBlob:fC,isRegExp:OC,isFunction:_r,isStream:mC,isURLSearchParams:xC,isTypedArray:zC,isFileList:pC,forEach:Il,merge:Hm,extend:SC,trim:jC,stripBOM:kC,inherits:CC,toFlatObject:MC,kindOf:Sh,kindOfTest:vn,endsWith:_C,toArray:TC,forEachEntry:DC,matchAll:PC,isHTMLForm:AC,hasOwnProperty:ry,hasOwnProp:ry,reduceDescriptors:kj,freezeMethods:RC,toObjectSet:LC,toCamelCase:EC,noop:BC,toFiniteNumber:$C,findKey:jj,global:Si,isContextDefined:Sj,isSpecCompliantForm:NC,toJSONObject:HC,isAsyncFn:FC,isThenable:VC,setImmediate:Cj,asap:UC,isIterable:IC};function Ee(e,t,n,o,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),o&&(this.request=o),s&&(this.response=s,this.status=s.status?s.status:null)}K.inherits(Ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.status}}});const Mj=Ee.prototype,_j={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_j[e]={value:e}});Object.defineProperties(Ee,_j);Object.defineProperty(Mj,"isAxiosError",{value:!0});Ee.from=(e,t,n,o,s,c)=>{const d=Object.create(Mj);return K.toFlatObject(e,d,function(m){return m!==Error.prototype},h=>h!=="isAxiosError"),Ee.call(d,e.message,t,n,o,s),d.cause=e,d.name=e.name,c&&Object.assign(d,c),d};const YC=null;function Fm(e){return K.isPlainObject(e)||K.isArray(e)}function Tj(e){return K.endsWith(e,"[]")?e.slice(0,-2):e}function ny(e,t,n){return e?e.concat(t).map(function(s,c){return s=Tj(s),!n&&c?"["+s+"]":s}).join(n?".":""):t}function qC(e){return K.isArray(e)&&!e.some(Fm)}const WC=K.toFlatObject(K,{},null,function(t){return/^is[A-Z]/.test(t)});function Mh(e,t,n){if(!K.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,k){return!K.isUndefined(k[C])});const o=n.metaTokens,s=n.visitor||x,c=n.dots,d=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(t);if(!K.isFunction(s))throw new TypeError("visitor must be a function");function p(w){if(w===null)return"";if(K.isDate(w))return w.toISOString();if(K.isBoolean(w))return w.toString();if(!m&&K.isBlob(w))throw new Ee("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(w)||K.isTypedArray(w)?m&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function x(w,C,k){let _=w;if(w&&!k&&typeof w=="object"){if(K.endsWith(C,"{}"))C=o?C:C.slice(0,-2),w=JSON.stringify(w);else if(K.isArray(w)&&qC(w)||(K.isFileList(w)||K.endsWith(C,"[]"))&&(_=K.toArray(w)))return C=Tj(C),_.forEach(function(D,L){!(K.isUndefined(D)||D===null)&&t.append(d===!0?ny([C],L,c):d===null?C:C+"[]",p(D))}),!1}return Fm(w)?!0:(t.append(ny(k,C,c),p(w)),!1)}const v=[],y=Object.assign(WC,{defaultVisitor:x,convertValue:p,isVisitable:Fm});function j(w,C){if(!K.isUndefined(w)){if(v.indexOf(w)!==-1)throw Error("Circular reference detected in "+C.join("."));v.push(w),K.forEach(w,function(_,z){(!(K.isUndefined(_)||_===null)&&s.call(t,_,K.isString(z)?z.trim():z,C,y))===!0&&j(_,C?C.concat(z):[z])}),v.pop()}}if(!K.isObject(e))throw new TypeError("data must be an object");return j(e),t}function oy(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function kg(e,t){this._pairs=[],e&&Mh(e,this,t)}const zj=kg.prototype;zj.append=function(t,n){this._pairs.push([t,n])};zj.toString=function(t){const n=t?function(o){return t.call(this,o,oy)}:oy;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function GC(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Dj(e,t,n){if(!t)return e;const o=n&&n.encode||GC;K.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let c;if(s?c=s(t,n):c=K.isURLSearchParams(t)?t.toString():new kg(t,n).toString(o),c){const d=e.indexOf("#");d!==-1&&(e=e.slice(0,d)),e+=(e.indexOf("?")===-1?"?":"&")+c}return e}class iy{constructor(){this.handlers=[]}use(t,n,o){return this.handlers.push({fulfilled:t,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){K.forEach(this.handlers,function(o){o!==null&&t(o)})}}const Pj={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},XC=typeof URLSearchParams<"u"?URLSearchParams:kg,QC=typeof FormData<"u"?FormData:null,ZC=typeof Blob<"u"?Blob:null,KC={isBrowser:!0,classes:{URLSearchParams:XC,FormData:QC,Blob:ZC},protocols:["http","https","file","blob","url","data"]},Cg=typeof window<"u"&&typeof document<"u",Vm=typeof navigator=="object"&&navigator||void 0,JC=Cg&&(!Vm||["ReactNative","NativeScript","NS"].indexOf(Vm.product)<0),eM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tM=Cg&&window.location.href||"http://localhost",rM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cg,hasStandardBrowserEnv:JC,hasStandardBrowserWebWorkerEnv:eM,navigator:Vm,origin:tM},Symbol.toStringTag,{value:"Module"})),hr={...rM,...KC};function nM(e,t){return Mh(e,new hr.classes.URLSearchParams,Object.assign({visitor:function(n,o,s,c){return hr.isNode&&K.isBuffer(n)?(this.append(o,n.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)}},t))}function oM(e){return K.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function iM(e){const t={},n=Object.keys(e);let o;const s=n.length;let c;for(o=0;o<s;o++)c=n[o],t[c]=e[c];return t}function Aj(e){function t(n,o,s,c){let d=n[c++];if(d==="__proto__")return!0;const h=Number.isFinite(+d),m=c>=n.length;return d=!d&&K.isArray(s)?s.length:d,m?(K.hasOwnProp(s,d)?s[d]=[s[d],o]:s[d]=o,!h):((!s[d]||!K.isObject(s[d]))&&(s[d]=[]),t(n,o,s[d],c)&&K.isArray(s[d])&&(s[d]=iM(s[d])),!h)}if(K.isFormData(e)&&K.isFunction(e.entries)){const n={};return K.forEachEntry(e,(o,s)=>{t(oM(o),s,n,0)}),n}return null}function aM(e,t,n){if(K.isString(e))try{return(t||JSON.parse)(e),K.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const Yl={transitional:Pj,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const o=n.getContentType()||"",s=o.indexOf("application/json")>-1,c=K.isObject(t);if(c&&K.isHTMLForm(t)&&(t=new FormData(t)),K.isFormData(t))return s?JSON.stringify(Aj(t)):t;if(K.isArrayBuffer(t)||K.isBuffer(t)||K.isStream(t)||K.isFile(t)||K.isBlob(t)||K.isReadableStream(t))return t;if(K.isArrayBufferView(t))return t.buffer;if(K.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let h;if(c){if(o.indexOf("application/x-www-form-urlencoded")>-1)return nM(t,this.formSerializer).toString();if((h=K.isFileList(t))||o.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Mh(h?{"files[]":t}:t,m&&new m,this.formSerializer)}}return c||s?(n.setContentType("application/json",!1),aM(t)):t}],transformResponse:[function(t){const n=this.transitional||Yl.transitional,o=n&&n.forcedJSONParsing,s=this.responseType==="json";if(K.isResponse(t)||K.isReadableStream(t))return t;if(t&&K.isString(t)&&(o&&!this.responseType||s)){const d=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(h){if(d)throw h.name==="SyntaxError"?Ee.from(h,Ee.ERR_BAD_RESPONSE,this,null,this.response):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:hr.classes.FormData,Blob:hr.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],e=>{Yl.headers[e]={}});const sM=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lM=e=>{const t={};let n,o,s;return e&&e.split(`
`).forEach(function(d){s=d.indexOf(":"),n=d.substring(0,s).trim().toLowerCase(),o=d.substring(s+1).trim(),!(!n||t[n]&&sM[n])&&(n==="set-cookie"?t[n]?t[n].push(o):t[n]=[o]:t[n]=t[n]?t[n]+", "+o:o)}),t},ay=Symbol("internals");function Js(e){return e&&String(e).trim().toLowerCase()}function Bu(e){return e===!1||e==null?e:K.isArray(e)?e.map(Bu):String(e)}function cM(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)t[o[1]]=o[2];return t}const dM=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function s0(e,t,n,o,s){if(K.isFunction(o))return o.call(this,t,n);if(s&&(t=n),!!K.isString(t)){if(K.isString(o))return t.indexOf(o)!==-1;if(K.isRegExp(o))return o.test(t)}}function uM(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,o)=>n.toUpperCase()+o)}function hM(e,t){const n=K.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(s,c,d){return this[o].call(this,t,s,c,d)},configurable:!0})})}let Tr=class{constructor(t){t&&this.set(t)}set(t,n,o){const s=this;function c(h,m,p){const x=Js(m);if(!x)throw new Error("header name must be a non-empty string");const v=K.findKey(s,x);(!v||s[v]===void 0||p===!0||p===void 0&&s[v]!==!1)&&(s[v||m]=Bu(h))}const d=(h,m)=>K.forEach(h,(p,x)=>c(p,x,m));if(K.isPlainObject(t)||t instanceof this.constructor)d(t,n);else if(K.isString(t)&&(t=t.trim())&&!dM(t))d(lM(t),n);else if(K.isObject(t)&&K.isIterable(t)){let h={},m,p;for(const x of t){if(!K.isArray(x))throw TypeError("Object iterator must return a key-value pair");h[p=x[0]]=(m=h[p])?K.isArray(m)?[...m,x[1]]:[m,x[1]]:x[1]}d(h,n)}else t!=null&&c(n,t,o);return this}get(t,n){if(t=Js(t),t){const o=K.findKey(this,t);if(o){const s=this[o];if(!n)return s;if(n===!0)return cM(s);if(K.isFunction(n))return n.call(this,s,o);if(K.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Js(t),t){const o=K.findKey(this,t);return!!(o&&this[o]!==void 0&&(!n||s0(this,this[o],o,n)))}return!1}delete(t,n){const o=this;let s=!1;function c(d){if(d=Js(d),d){const h=K.findKey(o,d);h&&(!n||s0(o,o[h],h,n))&&(delete o[h],s=!0)}}return K.isArray(t)?t.forEach(c):c(t),s}clear(t){const n=Object.keys(this);let o=n.length,s=!1;for(;o--;){const c=n[o];(!t||s0(this,this[c],c,t,!0))&&(delete this[c],s=!0)}return s}normalize(t){const n=this,o={};return K.forEach(this,(s,c)=>{const d=K.findKey(o,c);if(d){n[d]=Bu(s),delete n[c];return}const h=t?uM(c):String(c).trim();h!==c&&delete n[c],n[h]=Bu(s),o[h]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return K.forEach(this,(o,s)=>{o!=null&&o!==!1&&(n[s]=t&&K.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const o=new this(t);return n.forEach(s=>o.set(s)),o}static accessor(t){const o=(this[ay]=this[ay]={accessors:{}}).accessors,s=this.prototype;function c(d){const h=Js(d);o[h]||(hM(s,d),o[h]=!0)}return K.isArray(t)?t.forEach(c):c(t),this}};Tr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.reduceDescriptors(Tr.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(o){this[n]=o}}});K.freezeMethods(Tr);function l0(e,t){const n=this||Yl,o=t||n,s=Tr.from(o.headers);let c=o.data;return K.forEach(e,function(h){c=h.call(n,c,s.normalize(),t?t.status:void 0)}),s.normalize(),c}function Ej(e){return!!(e&&e.__CANCEL__)}function es(e,t,n){Ee.call(this,e??"canceled",Ee.ERR_CANCELED,t,n),this.name="CanceledError"}K.inherits(es,Ee,{__CANCEL__:!0});function Oj(e,t,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):t(new Ee("Request failed with status code "+n.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function fM(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pM(e,t){e=e||10;const n=new Array(e),o=new Array(e);let s=0,c=0,d;return t=t!==void 0?t:1e3,function(m){const p=Date.now(),x=o[c];d||(d=p),n[s]=m,o[s]=p;let v=c,y=0;for(;v!==s;)y+=n[v++],v=v%e;if(s=(s+1)%e,s===c&&(c=(c+1)%e),p-d<t)return;const j=x&&p-x;return j?Math.round(y*1e3/j):void 0}}function mM(e,t){let n=0,o=1e3/t,s,c;const d=(p,x=Date.now())=>{n=x,s=null,c&&(clearTimeout(c),c=null),e.apply(null,p)};return[(...p)=>{const x=Date.now(),v=x-n;v>=o?d(p,x):(s=p,c||(c=setTimeout(()=>{c=null,d(s)},o-v)))},()=>s&&d(s)]}const eh=(e,t,n=3)=>{let o=0;const s=pM(50,250);return mM(c=>{const d=c.loaded,h=c.lengthComputable?c.total:void 0,m=d-o,p=s(m),x=d<=h;o=d;const v={loaded:d,total:h,progress:h?d/h:void 0,bytes:m,rate:p||void 0,estimated:p&&h&&x?(h-d)/p:void 0,event:c,lengthComputable:h!=null,[t?"download":"upload"]:!0};e(v)},n)},sy=(e,t)=>{const n=e!=null;return[o=>t[0]({lengthComputable:n,total:e,loaded:o}),t[1]]},ly=e=>(...t)=>K.asap(()=>e(...t)),gM=hr.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,hr.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(hr.origin),hr.navigator&&/(msie|trident)/i.test(hr.navigator.userAgent)):()=>!0,xM=hr.hasStandardBrowserEnv?{write(e,t,n,o,s,c){const d=[e+"="+encodeURIComponent(t)];K.isNumber(n)&&d.push("expires="+new Date(n).toGMTString()),K.isString(o)&&d.push("path="+o),K.isString(s)&&d.push("domain="+s),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function bM(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function vM(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Rj(e,t,n){let o=!bM(t);return e&&(o||n==!1)?vM(e,t):t}const cy=e=>e instanceof Tr?{...e}:e;function Pi(e,t){t=t||{};const n={};function o(p,x,v,y){return K.isPlainObject(p)&&K.isPlainObject(x)?K.merge.call({caseless:y},p,x):K.isPlainObject(x)?K.merge({},x):K.isArray(x)?x.slice():x}function s(p,x,v,y){if(K.isUndefined(x)){if(!K.isUndefined(p))return o(void 0,p,v,y)}else return o(p,x,v,y)}function c(p,x){if(!K.isUndefined(x))return o(void 0,x)}function d(p,x){if(K.isUndefined(x)){if(!K.isUndefined(p))return o(void 0,p)}else return o(void 0,x)}function h(p,x,v){if(v in t)return o(p,x);if(v in e)return o(void 0,p)}const m={url:c,method:c,data:c,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:h,headers:(p,x,v)=>s(cy(p),cy(x),v,!0)};return K.forEach(Object.keys(Object.assign({},e,t)),function(x){const v=m[x]||s,y=v(e[x],t[x],x);K.isUndefined(y)&&v!==h||(n[x]=y)}),n}const Lj=e=>{const t=Pi({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:c,headers:d,auth:h}=t;t.headers=d=Tr.from(d),t.url=Dj(Rj(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),h&&d.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):"")));let m;if(K.isFormData(n)){if(hr.hasStandardBrowserEnv||hr.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((m=d.getContentType())!==!1){const[p,...x]=m?m.split(";").map(v=>v.trim()).filter(Boolean):[];d.setContentType([p||"multipart/form-data",...x].join("; "))}}if(hr.hasStandardBrowserEnv&&(o&&K.isFunction(o)&&(o=o(t)),o||o!==!1&&gM(t.url))){const p=s&&c&&xM.read(c);p&&d.set(s,p)}return t},yM=typeof XMLHttpRequest<"u",wM=yM&&function(e){return new Promise(function(n,o){const s=Lj(e);let c=s.data;const d=Tr.from(s.headers).normalize();let{responseType:h,onUploadProgress:m,onDownloadProgress:p}=s,x,v,y,j,w;function C(){j&&j(),w&&w(),s.cancelToken&&s.cancelToken.unsubscribe(x),s.signal&&s.signal.removeEventListener("abort",x)}let k=new XMLHttpRequest;k.open(s.method.toUpperCase(),s.url,!0),k.timeout=s.timeout;function _(){if(!k)return;const D=Tr.from("getAllResponseHeaders"in k&&k.getAllResponseHeaders()),A={data:!h||h==="text"||h==="json"?k.responseText:k.response,status:k.status,statusText:k.statusText,headers:D,config:e,request:k};Oj(function(E){n(E),C()},function(E){o(E),C()},A),k=null}"onloadend"in k?k.onloadend=_:k.onreadystatechange=function(){!k||k.readyState!==4||k.status===0&&!(k.responseURL&&k.responseURL.indexOf("file:")===0)||setTimeout(_)},k.onabort=function(){k&&(o(new Ee("Request aborted",Ee.ECONNABORTED,e,k)),k=null)},k.onerror=function(){o(new Ee("Network Error",Ee.ERR_NETWORK,e,k)),k=null},k.ontimeout=function(){let L=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||Pj;s.timeoutErrorMessage&&(L=s.timeoutErrorMessage),o(new Ee(L,A.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,e,k)),k=null},c===void 0&&d.setContentType(null),"setRequestHeader"in k&&K.forEach(d.toJSON(),function(L,A){k.setRequestHeader(A,L)}),K.isUndefined(s.withCredentials)||(k.withCredentials=!!s.withCredentials),h&&h!=="json"&&(k.responseType=s.responseType),p&&([y,w]=eh(p,!0),k.addEventListener("progress",y)),m&&k.upload&&([v,j]=eh(m),k.upload.addEventListener("progress",v),k.upload.addEventListener("loadend",j)),(s.cancelToken||s.signal)&&(x=D=>{k&&(o(!D||D.type?new es(null,e,k):D),k.abort(),k=null)},s.cancelToken&&s.cancelToken.subscribe(x),s.signal&&(s.signal.aborted?x():s.signal.addEventListener("abort",x)));const z=fM(s.url);if(z&&hr.protocols.indexOf(z)===-1){o(new Ee("Unsupported protocol "+z+":",Ee.ERR_BAD_REQUEST,e));return}k.send(c||null)})},jM=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let o=new AbortController,s;const c=function(p){if(!s){s=!0,h();const x=p instanceof Error?p:this.reason;o.abort(x instanceof Ee?x:new es(x instanceof Error?x.message:x))}};let d=t&&setTimeout(()=>{d=null,c(new Ee(`timeout ${t} of ms exceeded`,Ee.ETIMEDOUT))},t);const h=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(c):p.removeEventListener("abort",c)}),e=null)};e.forEach(p=>p.addEventListener("abort",c));const{signal:m}=o;return m.unsubscribe=()=>K.asap(h),m}},SM=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let o=0,s;for(;o<n;)s=o+t,yield e.slice(o,s),o=s},kM=async function*(e,t){for await(const n of CM(e))yield*SM(n,t)},CM=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:o}=await t.read();if(n)break;yield o}}finally{await t.cancel()}},dy=(e,t,n,o)=>{const s=kM(e,t);let c=0,d,h=m=>{d||(d=!0,o&&o(m))};return new ReadableStream({async pull(m){try{const{done:p,value:x}=await s.next();if(p){h(),m.close();return}let v=x.byteLength;if(n){let y=c+=v;n(y)}m.enqueue(new Uint8Array(x))}catch(p){throw h(p),p}},cancel(m){return h(m),s.return()}},{highWaterMark:2})},_h=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Bj=_h&&typeof ReadableStream=="function",MM=_h&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),$j=(e,...t)=>{try{return!!e(...t)}catch{return!1}},_M=Bj&&$j(()=>{let e=!1;const t=new Request(hr.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),uy=64*1024,Um=Bj&&$j(()=>K.isReadableStream(new Response("").body)),th={stream:Um&&(e=>e.body)};_h&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!th[t]&&(th[t]=K.isFunction(e[t])?n=>n[t]():(n,o)=>{throw new Ee(`Response type '${t}' is not supported`,Ee.ERR_NOT_SUPPORT,o)})})})(new Response);const TM=async e=>{if(e==null)return 0;if(K.isBlob(e))return e.size;if(K.isSpecCompliantForm(e))return(await new Request(hr.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(K.isArrayBufferView(e)||K.isArrayBuffer(e))return e.byteLength;if(K.isURLSearchParams(e)&&(e=e+""),K.isString(e))return(await MM(e)).byteLength},zM=async(e,t)=>{const n=K.toFiniteNumber(e.getContentLength());return n??TM(t)},DM=_h&&(async e=>{let{url:t,method:n,data:o,signal:s,cancelToken:c,timeout:d,onDownloadProgress:h,onUploadProgress:m,responseType:p,headers:x,withCredentials:v="same-origin",fetchOptions:y}=Lj(e);p=p?(p+"").toLowerCase():"text";let j=jM([s,c&&c.toAbortSignal()],d),w;const C=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let k;try{if(m&&_M&&n!=="get"&&n!=="head"&&(k=await zM(x,o))!==0){let A=new Request(t,{method:"POST",body:o,duplex:"half"}),V;if(K.isFormData(o)&&(V=A.headers.get("content-type"))&&x.setContentType(V),A.body){const[E,F]=sy(k,eh(ly(m)));o=dy(A.body,uy,E,F)}}K.isString(v)||(v=v?"include":"omit");const _="credentials"in Request.prototype;w=new Request(t,{...y,signal:j,method:n.toUpperCase(),headers:x.normalize().toJSON(),body:o,duplex:"half",credentials:_?v:void 0});let z=await fetch(w,y);const D=Um&&(p==="stream"||p==="response");if(Um&&(h||D&&C)){const A={};["status","statusText","headers"].forEach(te=>{A[te]=z[te]});const V=K.toFiniteNumber(z.headers.get("content-length")),[E,F]=h&&sy(V,eh(ly(h),!0))||[];z=new Response(dy(z.body,uy,E,()=>{F&&F(),C&&C()}),A)}p=p||"text";let L=await th[K.findKey(th,p)||"text"](z,e);return!D&&C&&C(),await new Promise((A,V)=>{Oj(A,V,{data:L,headers:Tr.from(z.headers),status:z.status,statusText:z.statusText,config:e,request:w})})}catch(_){throw C&&C(),_&&_.name==="TypeError"&&/Load failed|fetch/i.test(_.message)?Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,e,w),{cause:_.cause||_}):Ee.from(_,_&&_.code,e,w)}}),Im={http:YC,xhr:wM,fetch:DM};K.forEach(Im,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const hy=e=>`- ${e}`,PM=e=>K.isFunction(e)||e===null||e===!1,Nj={getAdapter:e=>{e=K.isArray(e)?e:[e];const{length:t}=e;let n,o;const s={};for(let c=0;c<t;c++){n=e[c];let d;if(o=n,!PM(n)&&(o=Im[(d=String(n)).toLowerCase()],o===void 0))throw new Ee(`Unknown adapter '${d}'`);if(o)break;s[d||"#"+c]=o}if(!o){const c=Object.entries(s).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let d=t?c.length>1?`since :
`+c.map(hy).join(`
`):" "+hy(c[0]):"as no adapter specified";throw new Ee("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return o},adapters:Im};function c0(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new es(null,e)}function fy(e){return c0(e),e.headers=Tr.from(e.headers),e.data=l0.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Nj.getAdapter(e.adapter||Yl.adapter)(e).then(function(o){return c0(e),o.data=l0.call(e,e.transformResponse,o),o.headers=Tr.from(o.headers),o},function(o){return Ej(o)||(c0(e),o&&o.response&&(o.response.data=l0.call(e,e.transformResponse,o.response),o.response.headers=Tr.from(o.response.headers))),Promise.reject(o)})}const Hj="1.10.0",Th={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Th[e]=function(o){return typeof o===e||"a"+(t<1?"n ":" ")+e}});const py={};Th.transitional=function(t,n,o){function s(c,d){return"[Axios v"+Hj+"] Transitional option '"+c+"'"+d+(o?". "+o:"")}return(c,d,h)=>{if(t===!1)throw new Ee(s(d," has been removed"+(n?" in "+n:"")),Ee.ERR_DEPRECATED);return n&&!py[d]&&(py[d]=!0,console.warn(s(d," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(c,d,h):!0}};Th.spelling=function(t){return(n,o)=>(console.warn(`${o} is likely a misspelling of ${t}`),!0)};function AM(e,t,n){if(typeof e!="object")throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let s=o.length;for(;s-- >0;){const c=o[s],d=t[c];if(d){const h=e[c],m=h===void 0||d(h,c,e);if(m!==!0)throw new Ee("option "+c+" must be "+m,Ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ee("Unknown option "+c,Ee.ERR_BAD_OPTION)}}const $u={assertOptions:AM,validators:Th},_n=$u.validators;let _i=class{constructor(t){this.defaults=t||{},this.interceptors={request:new iy,response:new iy}}async request(t,n){try{return await this._request(t,n)}catch(o){if(o instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const c=s.stack?s.stack.replace(/^.+\n/,""):"";try{o.stack?c&&!String(o.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+c):o.stack=c}catch{}}throw o}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Pi(this.defaults,n);const{transitional:o,paramsSerializer:s,headers:c}=n;o!==void 0&&$u.assertOptions(o,{silentJSONParsing:_n.transitional(_n.boolean),forcedJSONParsing:_n.transitional(_n.boolean),clarifyTimeoutError:_n.transitional(_n.boolean)},!1),s!=null&&(K.isFunction(s)?n.paramsSerializer={serialize:s}:$u.assertOptions(s,{encode:_n.function,serialize:_n.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),$u.assertOptions(n,{baseUrl:_n.spelling("baseURL"),withXsrfToken:_n.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let d=c&&K.merge(c.common,c[n.method]);c&&K.forEach(["delete","get","head","post","put","patch","common"],w=>{delete c[w]}),n.headers=Tr.concat(d,c);const h=[];let m=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(n)===!1||(m=m&&C.synchronous,h.unshift(C.fulfilled,C.rejected))});const p=[];this.interceptors.response.forEach(function(C){p.push(C.fulfilled,C.rejected)});let x,v=0,y;if(!m){const w=[fy.bind(this),void 0];for(w.unshift.apply(w,h),w.push.apply(w,p),y=w.length,x=Promise.resolve(n);v<y;)x=x.then(w[v++],w[v++]);return x}y=h.length;let j=n;for(v=0;v<y;){const w=h[v++],C=h[v++];try{j=w(j)}catch(k){C.call(this,k);break}}try{x=fy.call(this,j)}catch(w){return Promise.reject(w)}for(v=0,y=p.length;v<y;)x=x.then(p[v++],p[v++]);return x}getUri(t){t=Pi(this.defaults,t);const n=Rj(t.baseURL,t.url,t.allowAbsoluteUrls);return Dj(n,t.params,t.paramsSerializer)}};K.forEach(["delete","get","head","options"],function(t){_i.prototype[t]=function(n,o){return this.request(Pi(o||{},{method:t,url:n,data:(o||{}).data}))}});K.forEach(["post","put","patch"],function(t){function n(o){return function(c,d,h){return this.request(Pi(h||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:c,data:d}))}}_i.prototype[t]=n(),_i.prototype[t+"Form"]=n(!0)});let EM=class Fj{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(c){n=c});const o=this;this.promise.then(s=>{if(!o._listeners)return;let c=o._listeners.length;for(;c-- >0;)o._listeners[c](s);o._listeners=null}),this.promise.then=s=>{let c;const d=new Promise(h=>{o.subscribe(h),c=h}).then(s);return d.cancel=function(){o.unsubscribe(c)},d},t(function(c,d,h){o.reason||(o.reason=new es(c,d,h),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=o=>{t.abort(o)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Fj(function(s){t=s}),cancel:t}}};function OM(e){return function(n){return e.apply(null,n)}}function RM(e){return K.isObject(e)&&e.isAxiosError===!0}const Ym={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ym).forEach(([e,t])=>{Ym[t]=e});function Vj(e){const t=new _i(e),n=bj(_i.prototype.request,t);return K.extend(n,_i.prototype,t,{allOwnKeys:!0}),K.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Vj(Pi(e,s))},n}const Rt=Vj(Yl);Rt.Axios=_i;Rt.CanceledError=es;Rt.CancelToken=EM;Rt.isCancel=Ej;Rt.VERSION=Hj;Rt.toFormData=Mh;Rt.AxiosError=Ee;Rt.Cancel=Rt.CanceledError;Rt.all=function(t){return Promise.all(t)};Rt.spread=OM;Rt.isAxiosError=RM;Rt.mergeConfig=Pi;Rt.AxiosHeaders=Tr;Rt.formToJSON=e=>Aj(K.isHTMLForm(e)?new FormData(e):e);Rt.getAdapter=Nj.getAdapter;Rt.HttpStatusCode=Ym;Rt.default=Rt;const{Axios:gY,AxiosError:xY,CanceledError:bY,isCancel:vY,CancelToken:yY,VERSION:wY,all:jY,Cancel:SY,isAxiosError:kY,spread:CY,toFormData:MY,AxiosHeaders:_Y,HttpStatusCode:TY,formToJSON:zY,getAdapter:DY,mergeConfig:PY}=Rt,LM="http://localhost:5001/api",BM=Rt.create({baseURL:LM,headers:{"Content-Type":"application/json"}});BM.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));const Uj=S.createContext(),Qo=()=>S.useContext(Uj),$M=({children:e})=>{const[t,n]=S.useState(null),[o,s]=S.useState(!0),[c,d]=S.useState(null);S.useEffect(()=>{localStorage.getItem("token")?h():s(!1)},[]);const h=async j=>{try{const w={id:1,email:"user@example.com",firstName:"John",lastName:"Doe",createdAt:new Date().toISOString()};n(w),d(null)}catch(w){console.error("Error fetching user profile:",w),d("Failed to fetch user profile"),localStorage.removeItem("token")}finally{s(!1)}},y={currentUser:t,loading:o,error:c,login:async(j,w)=>{var C,k,_,z;s(!0);try{const D="mock-jwt-token",L={id:1,email:j,firstName:"John",lastName:"Doe",createdAt:new Date().toISOString()};return localStorage.setItem("token",D),n(L),d(null),{success:!0}}catch(D){return console.error("Login error:",D),d(((k=(C=D.response)==null?void 0:C.data)==null?void 0:k.message)||"Invalid email or password"),{success:!1,error:((z=(_=D.response)==null?void 0:_.data)==null?void 0:z.message)||"Invalid email or password"}}finally{s(!1)}},register:async j=>{var w,C,k,_;s(!0);try{const z="mock-jwt-token",D={id:1,email:j.email,firstName:j.firstName,lastName:j.lastName,createdAt:new Date().toISOString()};return localStorage.setItem("token",z),n(D),d(null),{success:!0}}catch(z){return console.error("Registration error:",z),d(((C=(w=z.response)==null?void 0:w.data)==null?void 0:C.message)||"Registration failed"),{success:!1,error:((_=(k=z.response)==null?void 0:k.data)==null?void 0:_.message)||"Registration failed"}}finally{s(!1)}},logout:()=>{localStorage.removeItem("token"),n(null)},updateProfile:async j=>{var w,C,k,_;s(!0);try{const z={...t,...j};return n(z),d(null),{success:!0}}catch(z){return console.error("Update profile error:",z),d(((C=(w=z.response)==null?void 0:w.data)==null?void 0:C.message)||"Failed to update profile"),{success:!1,error:((_=(k=z.response)==null?void 0:k.data)==null?void 0:_.message)||"Failed to update profile"}}finally{s(!1)}}};return a.jsx(Uj.Provider,{value:y,children:e})},Mg="40px",NM=f.div`
  background-color: #F0B90B; /* Binance yellow */
  color: #0B0E11; /* Dark text for contrast */
  min-height: ${Mg};
  padding: 8px 12px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  width: 100%;
  z-index: 1100; /* Higher than header's z-index */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #D4A309;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 0.75rem;
  }
  
  a {
    color: var(--color-accent);
    margin-left: 5px;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;f.button`
  background: none;
  border: none;
  color: #B7BDC6;
  margin-left: 16px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  
  &:hover {
    color: white;
  }
`;const HM=()=>a.jsx(NM,{children:a.jsxs("span",{children:[a.jsx("strong",{children:"IMPORTANT:"})," This is an MVP mockup — all properties and associated data are fictitious"]})}),FM=f.div`
  display: ${e=>e.isOpen?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  z-index: 999;
`,d0=f.button`
  display: none;
  background-color: ${e=>e.isOpen?"rgba(240, 185, 11, 0.2)":"#f0b90b"};
  color: ${e=>e.isOpen?"#ffffff":"#0b0e11"};
  font-size: 24px;
  font-weight: bold;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  margin-left: 0.75rem;
  z-index: 1100;
  border-radius: 8px;
  border: ${e=>e.isOpen?"1px solid #f0b90b":"none"};
  line-height: 1;
  padding: 0;
  cursor: pointer;
  box-shadow: ${e=>e.isOpen?"0 2px 8px rgba(0, 0, 0, 0.3)":"none"};
  
  &:hover {
    background-color: ${e=>e.isOpen?"rgba(240, 185, 11, 0.3)":"#e0aa0b"};
  }
  
  &:active {
    background-color: ${e=>e.isOpen?"rgba(240, 185, 11, 0.4)":"#d19f0a"};
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`,VM=f.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #0b0e11;
  border-bottom: 1px solid #232a32;
  position: fixed;
  top: ${Mg};
  left: 0;
  right: 0;
  z-index: 1000; /* Lower than notification bar z-index but still high */
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,UM=f.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  padding-top: 6px; /* Increased padding to move logo further down */
  
  img {
    height: 36px;
  }
  
  h1 {
    display: none;
  }
  
  @media (max-width: 768px) {
    img {
      height: 30px;
    }
  }
`,IM=f.nav`
  display: flex;
  flex-direction: column;
  
  .desktop-nav {
    display: flex;
  }
  
  .mobile-menu-content {
    display: none;
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${e=>e.isOpen?"0":"-100%"};
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background-color: #1a2030;
    z-index: 1000;
    transition: right 0.3s ease;
    box-shadow: ${e=>e.isOpen?"-5px 0 15px rgba(0, 0, 0, 0.3)":"none"};
    overflow-y: auto;
    
    .desktop-nav {
      display: none;
    }
    
    .mobile-menu-content {
      display: flex;
      flex-direction: column;
      padding-top: 64px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`,Jn=f(st)`
  margin: 0 16px;
  color: #eaecef;
  font-weight: 600;
  font-size: 14px;
  padding: 0 4px;
  height: 64px;
  display: flex;
  align-items: center;
  position: relative;
  transition: color 0.2s ease;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:hover, &.active {
    color: #f0b90b;
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #f0b90b;
  }
  
  @media (max-width: 768px) {
    margin: 0;
    padding: 16px 24px;
    width: 100%;
    height: auto;
    text-align: left;
    font-size: 16px;
    color: #eaecef;
    display: flex;
    align-items: center;
    
    &:hover {
      background-color: #2b3139;
    }
    
    &.active::after {
      display: none;
    }
    
    svg {
      margin-right: 12px;
      width: 20px;
      height: 20px;
    }
  }
`,YM=f.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-left: auto;
  }
`,cd=f.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  margin-left: 1rem;
  transition: all 0.2s ease;
  
  &.login {
    background-color: transparent;
    border: 1px solid #f0b90b;
    color: #f0b90b;
    
    &:hover {
      background-color: rgba(240, 185, 11, 0.1);
    }
  }
  
  &.signup {
    background-color: #f0b90b;
    color: #0b0e11;
    border: none;
    
    &:hover {
      background-color: #f8d12f;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
`,qM=f.div`
  position: relative;
  margin-left: 1rem;
  height: 64px;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-left: auto;
  }
`,WM=f.button`
  display: flex;
  align-items: center;
  background: transparent;
  color: #eaecef;
  font-size: 14px;
  padding: 0 8px;
  height: 36px;
  border-radius: 4px;
  
  &:hover {
    background-color: #2b3139;
  }
  
  span {
    margin-right: 0.5rem;
  }
  
  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    transform: ${e=>e.isOpen?"rotate(180deg)":"rotate(0)"};
  }
`,GM=f.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: #1e2329;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border: 1px solid #2b3139;
  min-width: 200px;
  overflow: hidden;
  z-index: 10;
  padding: 0.5rem 0;
`,el=f.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: #eaecef;
  font-size: 14px;
  border-bottom: 1px solid #2b3139;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #2b3139;
  }
  
  &.logout {
    color: #f6465d;
  }
`,XM=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #2b3139;
`,QM=f.button`
  background: none;
  border: none;
  color: #eaecef;
  cursor: pointer;
  padding: 8px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ZM=f.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 16px 24px 8px;
  border: 1px solid rgba(240, 185, 11, 0.3);
  
  svg {
    color: #f0b90b;
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
  
  input {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 14px;
    width: 100%;
    outline: none;
    height: 24px;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`,Zr=f.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 500;
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
    color: #f0b90b;
  }
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    color: #f0b90b;
  }
`;f.button`
  display: flex; /* Always display flex */
  background: transparent;
  color: #f0b90b; /* Binance yellow */
  font-size: 1.25rem;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 0.75rem;
  z-index: 1100; /* Increased z-index */
  transition: transform 0.2s ease;
  border-radius: 4px;
  border: 1px solid #f0b90b; /* Added border for visibility */
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
  }
  
  @media (max-width: 768px) {
    position: ${e=>e.isOpen?"fixed":"relative"};
    right: ${e=>e.isOpen?"1rem":"0"};
    top: ${e=>e.isOpen?"1rem":"0"};
  }
  
  @media (min-width: 769px) {
    display: none; /* Hide on desktop */
  }
  
  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
    fill: #f0b90b; /* Explicitly set fill color */
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`;const KM=()=>{const[e,t]=S.useState(!1),[n,o]=S.useState(!1),s=Ei(),{currentUser:c,logout:d}=Qo(),h=!!c;S.useEffect(()=>{const x=v=>{e&&!v.target.closest(".user-menu")&&t(!1),n&&!v.target.closest(".mobile-menu")&&!v.target.closest(".mobile-menu-button")&&o(!1)};return document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[e,n]);const m=x=>{o(!1),s(x)},p=()=>{d(),t(!1),o(!1),s("/")};return a.jsxs(a.Fragment,{children:[a.jsx(FM,{isOpen:n,onClick:()=>o(!1)}),a.jsxs(VM,{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[a.jsxs(UM,{children:[a.jsx(st,{to:"/",onClick:()=>o(!1),children:a.jsx("img",{src:iC,alt:"LOAF Logo"})}),a.jsx("h1",{children:"LOAF"})]}),a.jsxs(IM,{isOpen:n,className:"mobile-menu",children:[!n&&a.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",height:"64px"},className:"desktop-nav",children:[a.jsx(Jn,{to:"/",className:location.pathname==="/"?"active":"",children:"Home"}),a.jsx(Jn,{to:"/properties",className:location.pathname.startsWith("/properties")?"active":"",children:"Properties"}),a.jsx(Jn,{to:"/market",className:location.pathname==="/market"?"active":"",children:"Market"}),a.jsx(Jn,{to:"/ipo",className:location.pathname.startsWith("/ipo")?"active":"",children:"IPOs"}),a.jsx(Jn,{to:"/auction-test",className:location.pathname.startsWith("/auction-test")?"active":"",children:"Live Auction"}),a.jsx(Jn,{to:"/home-owners",className:location.pathname==="/home-owners"?"active":"",children:"Home Owners"}),h?a.jsxs(a.Fragment,{children:[a.jsx(Jn,{to:"/portfolio",className:location.pathname==="/portfolio"?"active":"",children:"My Portfolio"}),a.jsx(Jn,{to:"/wallet",className:location.pathname==="/wallet"?"active":"",children:"Wallet"})]}):a.jsx(Jn,{to:"/buy",className:location.pathname==="/buy"?"active":"",children:"Buy Property"})]}),a.jsxs("div",{className:"mobile-menu-content",children:[a.jsx(XM,{children:a.jsx(QM,{onClick:()=>o(!1),children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})})}),!h&&a.jsxs("div",{style:{display:"flex",gap:"12px",padding:"16px 24px"},children:[a.jsx(cd,{className:"login",onClick:()=>s("/login"),style:{flex:1,margin:0},children:"Log In"}),a.jsx(cd,{className:"signup",onClick:()=>s("/register"),style:{flex:1,margin:0},children:"Sign Up"})]}),a.jsxs(ZM,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})}),a.jsx("input",{type:"text",placeholder:"Search..."})]}),a.jsxs(Zr,{onClick:()=>m("/"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}),"Home"]}),a.jsxs(Zr,{onClick:()=>m("/buy"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"})}),"Buy Property"]}),a.jsxs(Zr,{onClick:()=>m("/market"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"})}),"Market"]}),a.jsxs(Zr,{onClick:()=>m("/trade"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"})}),"Trade"]}),a.jsxs(Zr,{onClick:()=>m("/properties"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}),"Properties"]}),a.jsxs(Zr,{onClick:()=>m("/ipo"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"})}),"IPOs"]}),a.jsxs(Zr,{onClick:()=>m("/auction-test"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M13.75 22c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75.78-1.75 1.75-1.75 1.75.78 1.75 1.75zm-1.75-22c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm4.25 9.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm-4.25 3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm-4.5-8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"})}),"Live Auction"]}),a.jsxs(Zr,{onClick:()=>m("/home-owners"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"})}),"Home Owners"]}),h&&a.jsxs(Zr,{onClick:()=>m("/portfolio"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 8.69V4h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"})}),"Portfolio"]}),h&&a.jsxs(Zr,{onClick:()=>m("/wallet"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"})}),"Wallet"]}),a.jsx("div",{style:{borderTop:"1px solid #2b3139",margin:"8px 0"}}),a.jsxs(Zr,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"})}),"Theme",a.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center"},children:[a.jsx("span",{style:{marginRight:"8px",color:"#848e9c"},children:"Light"}),a.jsx("div",{style:{width:"40px",height:"20px",backgroundColor:"#2b3139",borderRadius:"10px",position:"relative",cursor:"pointer"},children:a.jsx("div",{style:{position:"absolute",right:"2px",top:"2px",width:"16px",height:"16px",backgroundColor:"#f0b90b",borderRadius:"50%"}})})]})]}),h&&a.jsxs(Zr,{onClick:p,style:{color:"#f6465d"},children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",style:{color:"#f6465d"},children:a.jsx("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})}),"Logout"]})]})]})]}),n&&a.jsx(d0,{onClick:()=>o(!1),isOpen:!0,style:{position:"fixed",right:"1rem",top:"1rem"},children:"✕"}),h?a.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[a.jsxs(qM,{children:[a.jsxs(WM,{onClick:()=>t(!e),isOpen:e,className:"user-menu",children:[a.jsx("span",{children:(c==null?void 0:c.firstName)||"User"}),a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 10l5 5 5-5H7z"})})]}),e&&a.jsxs(GM,{children:[a.jsx(el,{onClick:()=>m("/profile"),children:"Profile"}),a.jsx(el,{onClick:()=>m("/portfolio"),children:"Portfolio"}),a.jsx(el,{onClick:()=>m("/orders"),children:"Orders"}),a.jsx(el,{onClick:()=>m("/wallet"),children:"Wallet"}),a.jsx(el,{className:"logout",onClick:p,children:"Logout"})]})]}),!n&&a.jsx(d0,{onClick:()=>o(!0),isOpen:!1,children:"☰"})]}):a.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[a.jsxs(YM,{children:[a.jsx(cd,{className:"login",onClick:()=>s("/login"),children:"Login"}),a.jsx(cd,{className:"signup",onClick:()=>s("/register"),children:"Sign Up"})]}),!n&&a.jsx(d0,{onClick:()=>o(!0),isOpen:!1,children:"☰"})]})]})]})},JM=f.div`
  width: 120px;
  height: 30px;
  position: relative;
  margin-left: auto;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`,e7=f.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`,t7=f.path`
  stroke: ${e=>e.isPositive?"#4CAF50":"#FF5252"};
  stroke-width: 2;
  fill: none;
  filter: drop-shadow(0 0 2px ${e=>e.isPositive?"rgba(76, 175, 80, 0.6)":"rgba(255, 82, 82, 0.6)"});
`,r7=e=>{const t=[];for(let c=0;c<20;c++){const d=c/19*80;let h=e?.7:-.7;const m=Math.random()*10-5;let p;e?p=30-(c/19*30*h+m):p=c/19*30*h+m+30/2,t.push(`${d},${p}`)}return`M ${t.join(" L ")}`},n7=f.line`
  stroke: rgba(255, 255, 255, 0.15);
  stroke-width: 0.5;
  stroke-dasharray: 1, 2;
`,o7=({isPositive:e})=>{const t=r7(e);return a.jsx(JM,{children:a.jsxs(e7,{viewBox:"0 0 80 30",children:[a.jsx(n7,{x1:"0",y1:"15",x2:"80",y2:"15"}),a.jsx(t7,{d:t,isPositive:e})]})})},i7=f.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background-color: #111;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
`,a7=f.div`
  display: flex;
  align-items: center;
  flex: 1;
`,s7=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 0;
  padding-right: 12px;
`;f.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: #4CAF50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 16px;
`;const l7=f.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`,c7=f.span`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0;
  line-height: 1.2;
`,d7=f.span`
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.2;
`,u7=f.div`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${e=>e.isPositive?"#4CAF50":"#FF5252"};
  margin-top: 2px;
`;f.div`
  height: 24px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.875rem;
`;const h7=({price:e,priceChangePercent:t,propertyName:n,suburb:o})=>{const s=parseFloat(t)>=0;return a.jsxs(i7,{children:[a.jsx(a7,{children:a.jsx(l7,{children:a.jsx(c7,{children:o||n})})}),a.jsx(o7,{isPositive:s}),a.jsxs(s7,{children:[a.jsxs(d7,{children:["$",e]}),a.jsxs(u7,{isPositive:s,children:[s?"+":"",t,"%"]})]})]})},_g=()=>a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M12 5.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM7.5 9a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"}),a.jsx("path",{d:"M21 16.5v-1.25c0-2.9-2.35-5.25-5.25-5.25h-7.5C5.35 10 3 12.35 3 15.25v1.25h18z"})]}),Tg=()=>a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M21 10H3V8h18v2zm-7-3V3h-4v4H7V3a2 2 0 012-2h6a2 2 0 012 2v4h-3zm7 5v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6h18zm-5 4a1 1 0 10-2 0 1 1 0 002 0z"})}),zg=()=>a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M19 20h-14v-3h14v3zm0-5h-14l-1-9 3-4h10l3 4-1 9zm-12-2h2v-3h-2v3zm8 0h2v-3h-2v3z"})}),f7=f.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  color: white;
`,Jt={BedroomIcon:_g,BathroomIcon:Tg,CarIcon:zg,IconWrapper:f7},u0=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),Ij=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`,p7=f.div`
  position: relative;
  height: 260px;
  overflow: hidden;
`,m7=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-speed) ease;
  
  ${Ij}:hover & {
    transform: scale(1.05);
  }
`,g7=f.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
`;f.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
`;const x7=f.div`
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
`,b7=f.h3`
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: var(--color-text);
  font-weight: 600;
`,v7=f.p`
  margin: 0 0 0.5rem 0;
  color: var(--color-text-secondary);
  font-size: 0.8rem;
`,y7=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  padding: 12px 16px;
  background-color: #111;
  color: white;
  border-top: none;
  margin-top: 0;
`,tl=f.div`
  display: flex;
  align-items: center;
  margin-right: ${e=>e.marginRight||"12px"};
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
`,h0=f.span`
  color: #999;
  font-size: 0.85rem;
  margin-right: 4px;
`,Ea=f.span`
  color: white;
  font-weight: 600;
  font-size: 0.85rem;
`;f(Ea)`
  color: var(--color-accent);
`;const w7=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: center;
  min-width: 100px;
`,Yj=f.button`
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
  
  &:active {
    transform: translateY(0);
  }
`,j7=f(Yj)`
  background-color: var(--color-accent, #3861fb);
  color: black;
`,S7=f(Yj)`
  background-color: transparent;
  border: 1px solid var(--color-accent, #3861fb);
  color: var(--color-accent, #3861fb);
  white-space: nowrap;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: var(--color-card);
  border-top: 1px solid var(--color-border);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
`;f.div`
  display: flex;
  align-items: center;
`;f.div`
  display: flex;
  align-items: center;
`;f.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
`;f.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
`;const Io=({property:e})=>{const t=Ei(),n=s=>{s.preventDefault();const c=u0(e.name||"28 Wentworth Road");t(`/properties/${c}#offers`)};parseFloat(e.priceChangePercent)>=0;let o;if(e.location.includes(",")){const s=e.location.split(",");/^\d+\s/.test(s[0].trim())&&s.length>1?o=s[1].trim():o=s[0].trim()}else o=e.location;return o=o.replace(", Sydney","").replace(" Sydney","").replace("Sydney","").trim(),a.jsx(Ij,{children:a.jsxs(st,{to:`/properties/${u0(e.name||"28 Wentworth Road")}`,children:[a.jsxs(p7,{children:[a.jsx(m7,{src:e.imageUrl,alt:e.name}),a.jsx(g7,{children:"TRADING"})]}),a.jsx(h7,{price:e.tokenPrice,priceChangePercent:e.priceChangePercent,propertyName:e.shortName||e.name.split(" ")[0],suburb:o}),a.jsxs(x7,{children:[a.jsxs("div",{children:[a.jsx(b7,{children:e.name}),a.jsx(v7,{children:e.location})]}),a.jsxs(w7,{children:[a.jsx(st,{to:`/properties/${u0(e.name||"28 Wentworth Road")}#trade`,children:a.jsx(j7,{children:"Trade"})}),a.jsx(S7,{onClick:n,children:"Make Offer"})]})]}),a.jsxs(y7,{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[a.jsxs(tl,{children:[a.jsx(_g,{}),a.jsx(Ea,{style:{marginLeft:"4px"},children:e.bedrooms}),a.jsx(h0,{children:" • "})]}),a.jsxs(tl,{children:[a.jsx(Tg,{}),a.jsx(Ea,{style:{marginLeft:"4px"},children:e.bathrooms}),a.jsx(h0,{children:" • "})]}),a.jsxs(tl,{children:[a.jsx(zg,{}),a.jsx(Ea,{style:{marginLeft:"4px"},children:e.carSpots}),a.jsx(h0,{children:" • "})]}),a.jsx(tl,{marginRight:"0",children:a.jsx(Ea,{children:e.propertyType})})]}),a.jsx("div",{children:a.jsx(tl,{align:"flex-end",marginRight:"0",children:a.jsxs(Ea,{style:{fontWeight:"700",color:"var(--color-accent)"},children:["$",e.marketCap]})})})]})]})})},k7=f.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`,C7=f.div`
  flex: 1;
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,M7=f.div`
  flex: 1;
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,my=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`,gy=f.h2`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #f8f9fa;
  
  svg {
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
  }
`,xy=f(st)`
  color: #848e9c;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-left: 4px;
    width: 12px;
    height: 12px;
  }
  
  &:hover {
    color: var(--color-accent);
  }
`,by=f.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 0.5rem;
`,pi=f.div`
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  color: ${e=>e.active?"#f8f9fa":"#848e9c"};
  font-weight: ${e=>e.active?"600":"400"};
  border-bottom: 2px solid ${e=>e.active?"var(--color-accent)":"transparent"};
  margin-bottom: -1px;
  
  &:hover {
    color: ${e=>e.active?"#f8f9fa":"var(--color-accent)"};
  }
`,_7=f.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,T7=f.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  height: 48px;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`,vy=f.td`
  padding: 0.75rem 0;
  font-size: 0.85rem;
  vertical-align: middle;
  text-align: ${e=>e.align||"left"};
`,z7=f.div`
  font-weight: 600;
  font-size: 0.9rem;
  color: #f8f9fa;
`,D7=f.div`
  font-size: 0.75rem;
  color: ${e=>e.isPositive?"#0ecb81":"#f6465d"};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  &:nth-child(2) {
    text-align: right;
    font-weight: 500;
  }
  
  &:nth-child(3) {
    text-align: right;
    padding-right: 0.5rem;
  }
`,P7=f.div`
  display: flex;
  align-items: center;
`,A7=f.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.75rem;
`,E7=f.div`
  font-weight: 500;
  color: #f8f9fa;
`,O7=f.div`
  color: #848e9c;
  font-size: 0.7rem;
  margin-top: 2px;
`;f.div`
  color: ${e=>e.isPositive?"#0ecb81":"#f6465d"};
  font-weight: 600;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  svg {
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
`;const R7=f.div`
  display: flex;
  flex-direction: column;
`,L7=f.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`,B7=f.div`
  flex: 1;
`,$7=f.h3`
  font-size: 0.85rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
  color: #f8f9fa;
  line-height: 1.4;
  
  &:hover {
    color: var(--color-accent);
  }
`,N7=f.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,H7=f.span`
  color: #848e9c;
  font-size: 0.7rem;
`,F7=f.span`
  padding: 0.15rem 0.4rem;
  border-radius: 2px;
  font-size: 0.65rem;
  background-color: ${e=>e.type==="property"?"rgba(14, 203, 129, 0.1)":e.type==="market"?"rgba(240, 185, 11, 0.1)":"rgba(255, 255, 255, 0.05)"};
  color: ${e=>e.type==="property"?"#0ecb81":e.type==="market"?"#f0b90b":"#848e9c"};
  font-weight: 500;
`,V7=f.div`
  display: flex;
  align-items: center;
  color: #848e9c;
  margin-left: 0.5rem;
  
  svg {
    width: 14px;
    height: 14px;
  }
`,U7=[{id:1,name:"28 Wentworth Road",symbol:"WENT",imageUrl:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:"125,780",priceChangePercent:"+2.18%"},{id:2,name:"45 Victoria Street",symbol:"VICT",imageUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:"98,450",priceChangePercent:"-1.05%"},{id:3,name:"12 Bellevue Hill",symbol:"BELL",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:"156,320",priceChangePercent:"+3.42%"},{id:4,name:"8 Double Bay",symbol:"DBAY",imageUrl:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:"112,650",priceChangePercent:"+0.87%"},{id:5,name:"22 Arden Street",symbol:"ARDN",imageUrl:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:"85,400",priceChangePercent:"-0.32%"}],I7=[{id:1,title:"Sydney's housing market is officially the second-most expensive in the world (again)",date:"2025-07-12",type:"market"},{id:2,title:"Council approves rooftop terrace expansion for Vaucluse Mansion",date:"2025-06-18",type:"property"},{id:3,title:"RBA slashes cash rate by 0.25bp, boosting property market",date:"2025-06-15",type:"market"},{id:4,title:"Luxury property values in Eastern Suburbs rise 8.5% in Q2",date:"2025-06-10",type:"market"},{id:5,title:"New elevator installation approved for Vaucluse Mansion",date:"2025-06-05",type:"property"}],Y7=f.div`
  width: 100%;
  height: 250px;
  background-color: rgba(20, 21, 26, 0.5);
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5rem;
`,q7=f.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
`,f0=f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,p0=f.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${e=>e.color};
`,dd=f.div`
  position: absolute;
  height: 2px;
  background: ${e=>e.color};
  bottom: ${e=>e.position}px;
  left: 10%;
  width: 80%;
  opacity: 0.8;
  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 10px;
    background: ${e=>e.color};
    filter: blur(12px);
    opacity: 0.5;
  }
`,m0=f.div`
  position: absolute;
  left: 1rem;
  color: #848e9c;
  font-size: 0.7rem;
  bottom: ${e=>e.position-5}px;
`,W7=()=>a.jsxs(a.Fragment,{children:[a.jsxs(Y7,{children:[a.jsx(dd,{color:"#f0b90b",position:180}),a.jsx(m0,{position:180,children:"Loaf Assets +32.4%"}),a.jsx(dd,{color:"#2196f3",position:120}),a.jsx(m0,{position:120,children:"ASX200 +8.7%"}),a.jsx(dd,{color:"#e91e63",position:70}),a.jsx(m0,{position:70,children:"Global House Price +3.2%"}),a.jsx(dd,{color:"rgba(255,255,255,0.1)",position:30})]}),a.jsxs(q7,{children:[a.jsxs(f0,{children:[a.jsx(p0,{color:"#f0b90b"}),a.jsx("span",{children:"Loaf Assets"})]}),a.jsxs(f0,{children:[a.jsx(p0,{color:"#2196f3"}),a.jsx("span",{children:"ASX200"})]}),a.jsxs(f0,{children:[a.jsx(p0,{color:"#e91e63"}),a.jsx("span",{children:"Global House Price"})]})]})]}),G7=()=>{const e=Ei(),[t,n]=S.useState("popular"),[o,s]=S.useState("all");return a.jsxs(k7,{children:[a.jsxs(C7,{children:[a.jsxs(my,{children:[a.jsxs(gy,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"})}),"Market Overview"]}),a.jsxs(xy,{to:"/market",children:["View All 350+ Coins",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})]})]}),a.jsxs(by,{children:[a.jsx(pi,{active:t==="popular",onClick:()=>n("popular"),children:"Popular"}),a.jsx(pi,{active:t==="gainers",onClick:()=>n("gainers"),children:"Gainers"}),a.jsx(pi,{active:t==="new",onClick:()=>n("new"),children:"New Listings"}),a.jsx(pi,{active:t==="loafIndex",onClick:()=>n("loafIndex"),children:"Loaf Index"})]}),t==="loafIndex"?a.jsx(W7,{}):a.jsx(_7,{children:a.jsx("tbody",{children:U7.map(c=>{const d=c.priceChangePercent.startsWith("+");return a.jsxs(T7,{onClick:()=>e("/properties/28-derby-street-elara#trade"),children:[a.jsx(vy,{children:a.jsxs(P7,{children:[a.jsx(A7,{src:c.imageUrl,alt:c.name}),a.jsxs("div",{children:[a.jsx(E7,{children:c.name}),a.jsx(O7,{children:c.symbol})]})]})}),a.jsxs(vy,{align:"right",children:[a.jsxs(z7,{children:["$",c.price.toLocaleString()]}),a.jsx(D7,{isPositive:d,children:c.priceChangePercent})]})]},c.id)})})})]}),a.jsxs(M7,{children:[a.jsxs(my,{children:[a.jsxs(gy,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"})}),"Property News & Updates"]}),a.jsxs(xy,{to:"/news",children:["View All News",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})]})]}),a.jsxs(by,{children:[a.jsx(pi,{active:o==="all",onClick:()=>s("all"),children:"All News"}),a.jsx(pi,{active:o==="property",onClick:()=>s("property"),children:"Property Updates"}),a.jsx(pi,{active:o==="market",onClick:()=>s("market"),children:"Market News"})]}),a.jsx(R7,{children:I7.map(c=>a.jsxs(L7,{children:[a.jsxs(B7,{children:[a.jsx($7,{children:c.title}),a.jsxs(N7,{children:[a.jsx(H7,{children:c.date}),a.jsx(F7,{type:c.type,children:c.type==="property"?"Property Update":"Market News"})]})]}),a.jsx(V7,{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"})})})]},c.id))})]})]})},X7=f.div`
  font-size: ${e=>e.fontSize||"2.5rem"};
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
`,rl=({value:e,startValue:t=null,duration:n=2e3,prefix:o="",suffix:s="",decimals:c=2,fontSize:d="2.5rem"})=>{const[h,m]=S.useState(t!==null?t:e),p=S.useRef(null),x=S.useRef(null),v=S.useRef(t!==null?t:e),y=j=>j.toLocaleString("en-US",{minimumFractionDigits:c,maximumFractionDigits:c});return S.useEffect(()=>{if(e===v.current)return;x.current&&cancelAnimationFrame(x.current);const j=w=>{p.current||(p.current=w);const C=w-p.current,k=Math.min(C/n,1),_=1-Math.pow(1-k,4),z=v.current+(e-v.current)*_;m(z),k<1?x.current=requestAnimationFrame(j):(m(e),p.current=null,x.current=null)};return x.current=requestAnimationFrame(j),()=>{x.current&&cancelAnimationFrame(x.current)}},[e,n]),a.jsxs(X7,{fontSize:d,children:[o,y(h),s]})},Q7=f.div`
  width: 100%;
  margin: 1.5rem 0;
`,Z7=f.div`
  width: 100%;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`,K7=f.div`
  height: 100%;
  background-color: var(--color-accent);
  border-radius: 6px;
  width: ${e=>`${e.percentage}%`};
  transition: width 1s ease-in-out;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,J7=f.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`,e_=f.div`
  font-weight: 600;
  color: var(--color-accent);
`,t_=f.div`
  color: var(--color-text-secondary);
`,r_=f.div`
  font-weight: 600;
  color: var(--color-text);
`,rh=({percentage:e=0,raisedAmount:t=0,targetAmount:n=0,animate:o=!0,dynamicIncrease:s=!1,variant:c="default"})=>{const d=s?Math.max(30,e):e,[h,m]=S.useState(o?0:d),[p,x]=S.useState(t),v=S.useRef(null),y=S.useRef(null),j=()=>{const k=new CustomEvent("subscription_complete");window.dispatchEvent(k)};S.useEffect(()=>{m(k=>Math.max(k,e))},[e]),S.useEffect(()=>{if(s)return v.current&&clearTimeout(v.current),y.current&&clearInterval(y.current),v.current=setTimeout(()=>{let k=d;y.current=setInterval(()=>{const _=Math.random()*1.9+.1,z=Math.min(100,k+_),D=z/100*n;m(z),x(D),k=z,z>=100&&(clearInterval(y.current),j())},2e3)},3e3),()=>{v.current&&clearTimeout(v.current),y.current&&clearInterval(y.current)}},[s,d,n]);const w=k=>k>=1e6?`$${(k/1e6).toFixed(1)}M`:k>=1e3?`$${(k/1e3).toFixed(0)}K`:`$${k.toFixed(0)}`,C=s?p:t;return a.jsxs(Q7,{children:[a.jsx(Z7,{children:a.jsx(K7,{percentage:h})}),a.jsxs(J7,{children:[a.jsxs(e_,{children:[h.toFixed(1),"% ",c==="auction"?"Allocated":"Subscribed"]}),a.jsx(t_,{children:a.jsx(r_,{children:c==="auction"?`${Math.round(C)} / ${Math.round(n)} Hermitage`:`${w(C)} / ${w(n)}`})})]})]})},qj=S.createContext(),ql=()=>S.useContext(qj),Dg=({children:e,initialProperty:t})=>{const[n,o]=S.useState(t||null),[s,c]=S.useState(!1);S.useEffect(()=>{t&&o(t)},[t]),S.useEffect(()=>{n&&n.subscriptionPercentage>=100&&c(!0)},[n==null?void 0:n.subscriptionPercentage]);const h={property:n,isFullySubscribed:s,addPurchase:m=>{!n||s||o(p=>{const x=p.raisedAmount+m,v=Math.min(100,Math.max(p.subscriptionPercentage,x/p.targetRaise*100));return{...p,raisedAmount:x,subscriptionPercentage:v}})}};return a.jsx(qj.Provider,{value:h,children:e})},Wj=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: box-shadow var(--transition-speed) ease;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,n_=f.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 250px;
    min-height: auto;
  }
`,o_=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed) ease;
  
  ${Wj}:hover & {
    transform: scale(1.05);
  }
`,i_=f.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
`,Gj=f.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
`,a_=f(Gj)`
  /* Live indicator styles inherit from StatusIndicator */
`,s_=f(Gj)`
  background-color: rgba(120, 120, 120, 0.85);
  display: flex;
  align-items: center;
  gap: 6px;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e74c3c;
    display: inline-block;
  }
`,l_=f.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
  z-index: 5;
`,g0=f.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  }
`,c_=f.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #00d26a;
  margin-right: 6px;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 210, 106, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 6px rgba(0, 210, 106, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 210, 106, 0);
    }
  }
`,d_=f.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`,u_=f.h2`
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  color: var(--color-text);
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`,h_=f.span`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-left: 1rem;
  font-weight: normal;
`,f_=f.p`
  margin: 0 0 1.5rem 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
`,p_=f.p`
  margin: 0 0 1.5rem 0;
  color: var(--color-text);
  font-size: 0.875rem;
  line-height: 1.5;
`,m_=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`,ud=f.div`
  display: flex;
  flex-direction: column;
`,hd=f.span`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`,Nu=f.span`
  color: var(--color-text);
  font-weight: 600;
  font-size: 1.125rem;
`,g_=f(Nu)`
  color: var(--color-accent);
`,x_=f.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,yy=f(st)`
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
  flex: 1;
  display: inline-block;
  text-decoration: none;
  
  &.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-background);
    
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
  
  &.btn-secondary {
    background-color: transparent;
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    
    &:hover {
      background-color: rgba(230, 200, 126, 0.1);
    }
  }
  
  &.btn-disabled {
    background-color: #555;
    color: #999;
    cursor: not-allowed;
    
    &:hover {
      background-color: #555;
    }
  }
`,b_=e=>e>=1e6?`$${(e/1e6).toFixed(1)}M`:e>=1e3?`$${(e/1e3).toFixed(0)}K`:`$${e.toFixed(0)}`,v_=e=>{const t={year:"numeric",month:"long",day:"numeric"};return new Date(e).toLocaleDateString(void 0,t)},Xj=({property:e})=>{const{property:t,isFullySubscribed:n}=ql();return a.jsxs(Wj,{children:[a.jsxs(n_,{children:[a.jsx(o_,{src:t.imageUrl,alt:t.name}),a.jsx(i_,{children:"Public IPO"}),n?a.jsx(s_,{children:"CLOSED"}):a.jsxs(a_,{children:[a.jsx(c_,{}),"LIVE"]}),a.jsxs(l_,{children:[a.jsx(g0,{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M4 5h16v14H4V5zm15 13V6H5v12h14zM7 13l3-3 2 2 3-3 2 2v3H7v-1z"})})}),a.jsx(g0,{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V9.5l6 3.5-6 3.5z"})})}),a.jsx(g0,{children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("path",{d:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"}),a.jsx("path",{d:"M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z"}),a.jsx("path",{d:"M18 12a6 6 0 0 0-6-6v2a4 4 0 0 1 4 4h2z"})]})})]})]}),a.jsxs(d_,{children:[a.jsxs(u_,{children:[t.name,a.jsx(h_,{children:t.address})]}),a.jsx(f_,{children:t.location}),a.jsx(p_,{children:t.description}),a.jsx(rh,{percentage:t.subscriptionPercentage,raisedAmount:t.raisedAmount,targetAmount:t.targetRaise}),a.jsxs(m_,{children:[a.jsxs(ud,{children:[a.jsx(hd,{children:"Token Price"}),a.jsxs(g_,{children:["$",t.tokenPrice]})]}),a.jsxs(ud,{children:[a.jsx(hd,{children:"Projected Yield"}),a.jsxs(Nu,{children:[t.projectedYield,"%"]})]}),a.jsxs(ud,{children:[a.jsx(hd,{children:"Max Investment"}),a.jsx(Nu,{children:b_(t.minInvestment)})]}),a.jsxs(ud,{children:[a.jsx(hd,{children:"Closing Date"}),a.jsx(Nu,{children:v_(t.ipoEndDate)})]})]}),a.jsxs(x_,{children:[a.jsx(yy,{to:`/ipo/${t.id}`,className:"btn-secondary",onClick:()=>console.log("View Details clicked for IPO ID:",t.id),children:"View Details"}),a.jsx(yy,{to:n?"#":`/ipo/${t.id}/buy`,className:n?"btn-disabled":"btn-primary",children:n?"Closed":"Buy Now"})]})]})]})},Qj=S.createContext(),Zj=()=>{const e=S.useContext(Qj);if(!e)throw new Error("useAuction must be used within an AuctionProvider");return e},Kj=({children:e})=>{const[t,n]=S.useState({clearingPrice:145e3,startingPrice:125e3,propertyValue:145e5,timeRemaining:172800,bidPriceChange:"+1.2",recentActivity:[{user:"User123",action:"placed a bid at",amount:"$146,500",tokens:5,time:"2 mins ago"},{user:"User456",action:"placed a bid at",amount:"$145,800",tokens:3,time:"5 mins ago"}],activeBidders:42});S.useEffect(()=>{const s=setInterval(()=>{n(c=>{const d=(Math.random()*2-.5)/100,h=Math.round(c.clearingPrice*(1+d)),m=h*100,p=Math.random()>.3?"+":"-",x=(Math.random()*2+.1).toFixed(1),v=Math.max(0,c.timeRemaining-10);return{...c,clearingPrice:h,propertyValue:m,bidPriceChange:`${p}${x}`,timeRemaining:v}})},1e4);return()=>clearInterval(s)},[]);const o={auctionData:t,setAuctionData:n};return a.jsx(Qj.Provider,{value:o,children:e})},Jj=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: box-shadow var(--transition-speed) ease;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,y_=f.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 250px;
    min-height: auto;
  }
`,w_=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed) ease;
  
  ${Jj}:hover & {
    transform: scale(1.05);
  }
`,j_=f.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #ff9800; /* Orange color for auction */
  color: var(--color-background);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
`,e4=f.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
`,S_=f(e4)`
  /* Live indicator styles inherit from StatusIndicator */
`,k_=f(e4)`
  background-color: rgba(120, 120, 120, 0.85);
  display: flex;
  align-items: center;
  gap: 6px;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e74c3c;
    display: inline-block;
  }
`,C_=f.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
  z-index: 5;
`,x0=f.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  }
`,M_=f.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #00d26a;
  margin-right: 6px;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 210, 106, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 6px rgba(0, 210, 106, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 210, 106, 0);
    }
  }
`,__=f.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`,T_=f.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: var(--color-text);
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`,z_=f.span`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-left: 0.75rem;
  font-weight: normal;
`,D_=f.p`
  margin: 0 0 1.5rem 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
`,P_=f.p`
  margin: 0 0 1.5rem 0;
  color: var(--color-text);
  font-size: 0.875rem;
  line-height: 1.5;
`,A_=On`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--color-accent-rgb, 240, 185, 11), 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--color-accent-rgb, 240, 185, 11), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--color-accent-rgb, 240, 185, 11), 0);
  }
`,E_=f.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.25rem;
  
  .tooltip-icon {
    margin-left: 0.5rem;
    cursor: help;
    position: relative;
  }

  .tooltip-text {
    visibility: hidden;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: left;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 100;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.75rem;
    line-height: 1.4;
    pointer-events: none;
  }
  
  .tooltip-icon:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`,O_=f.div`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  .trend-indicator {
    margin-left: 0.5rem;
    color: #00d26a;
    font-size: 1.25rem;
    animation: ${A_} 2s infinite;
  }
  
  .currency-indicator {
    margin-left: 0.5rem;
    color: #999;
    font-size: 1rem;
    font-weight: 300;
  }
`,R_=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  justify-content: space-between;
`,L_=f.div`
  font-size: 0.8rem;
  color: #fff;
  margin-left: 1.5rem;
  padding: 0.5rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  
  span {
    font-weight: 600;
    margin-left: 0.25rem;
  }
`,B_=f.div`
  font-size: 0.75rem;
  color: var(--color-accent); /* Gold color */
  margin-bottom: 1.5rem;
  margin-top: -0.5rem; /* Move closer to the number */
  font-weight: normal;
`,$_=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`,fd=f.div`
  display: flex;
  flex-direction: column;
`,pd=f.span`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  position: relative;
  
  .tooltip-icon {
    position: relative;
    display: inline-block;
    margin-left: 5px;
    color: #888;
    font-size: 0.75rem;
    cursor: help;

    &:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }

    .tooltip-text {
      visibility: hidden;
      width: 250px;
      background-color: #333;
      color: #fff;
      text-align: left;
      border-radius: 6px;
      padding: 10px;
      position: absolute;
      z-index: 100;
      bottom: 125%;
      right: -125px;
      opacity: 0;
      transition: opacity 0.3s;
      font-weight: normal;
      font-size: 0.75rem;
      line-height: 1.4;
    }
  }
  
  .tooltip-icon:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`,Hu=f.span`
  color: var(--color-text);
  font-weight: 600;
  font-size: 1.125rem;
`,N_=f(Hu)`
  color: var(--color-accent);
`,H_=f.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,wy=f(st)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-speed) ease;
  flex: 1;
  
  &.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-background);
    
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
  
  &.btn-secondary {
    background-color: transparent;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
    
    &:hover {
      background-color: rgba(230, 200, 126, 0.1);
    }
  }
  
  &.btn-disabled {
    background-color: #555;
    color: #999;
    cursor: not-allowed;
    
    &:hover {
      background-color: #555;
    }
  }
`,F_=e=>e>=1e6?`$${(e/1e6).toFixed(1)}M`:e>=1e3?`$${(e/1e3).toFixed(0)}K`:`$${e.toFixed(0)}`,V_=e=>{const o=new Date(e)-new Date;if(o<=0)return"Ended";const s=Math.floor(o/(1e3*60*60*24)),c=Math.floor(o%(1e3*60*60*24)/(1e3*60*60));return`${s} Day ${c} Hour`},U_=({property:e})=>{const{property:t,isFullySubscribed:n}=ql(),{auctionData:o}=Zj(),s=o.bidPriceChange,c=parseFloat(s.replace(/[^-0-9.]/g,"")),d=Math.abs(c).toFixed(1),m=Math.round(o.clearingPrice*1.12),p=F_(o.propertyValue);return a.jsxs(Jj,{children:[a.jsxs(y_,{children:[a.jsx(w_,{src:t.imageUrl,alt:t.name}),a.jsx(j_,{children:"Auction IPO"}),o.timeRemaining<=0?a.jsx(k_,{children:"CLOSED"}):a.jsxs(S_,{children:[a.jsx(M_,{}),"LIVE"]}),a.jsxs(C_,{children:[a.jsx(x0,{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M4 5h16v14H4V5zm15 13V6H5v12h14zM7 13l3-3 2 2 3-3 2 2v3H7v-1z"})})}),a.jsx(x0,{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V9.5l6 3.5-6 3.5z"})})}),a.jsx(x0,{children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("path",{d:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"}),a.jsx("path",{d:"M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z"}),a.jsx("path",{d:"M18 12a6 6 0 0 0-6-6v2a4 4 0 0 1 4 4h2z"})]})})]})]}),a.jsxs(__,{children:[a.jsxs(T_,{children:[t.name,a.jsx(z_,{children:t.address})]}),a.jsx(D_,{children:t.location}),a.jsx(P_,{children:t.description}),a.jsxs(E_,{children:["Clearing Bid",a.jsxs("span",{className:"tooltip-icon",children:["ⓘ",a.jsx("span",{className:"tooltip-text",children:"The clearing price is the lowest competitive bid that fully allocates all available tokens. This is the minimum price per token bidders have to bid. When the auction ends, all bidders who end up with bids at or above this price will receive token allocation at the final clearing price, regardless of how high the original bid."})]})]}),a.jsxs(R_,{children:[a.jsxs("div",{children:[a.jsxs(O_,{children:["$",o.clearingPrice.toLocaleString(),a.jsx("span",{className:"trend-indicator",children:"↑"}),a.jsx("span",{className:"currency-indicator",children:"AUD"})]}),a.jsx(B_,{children:"Per Hermitage"})]}),a.jsxs(L_,{children:["Market Cap: ",a.jsx("span",{children:p.startsWith("$")?p:"$"+p})]})]}),a.jsx(rh,{percentage:Math.min(Math.round(o.clearingPrice/185650*100),100),variant:"auction",raisedAmount:Math.min(Math.round(o.clearingPrice/185650*100),100),targetAmount:100}),a.jsxs($_,{children:[a.jsxs(fd,{children:[a.jsxs(pd,{children:["Average Bid",a.jsxs("span",{className:"tooltip-icon",children:["ⓘ",a.jsx("span",{className:"tooltip-text",children:"Average bid is the average of all competitive bids above the clearing price."})]})]}),a.jsxs(N_,{children:["$",m.toLocaleString(),a.jsx("span",{style:{color:"#00d26a",marginLeft:"4px",display:"inline-block",animation:"pulse 1.5s infinite"},children:"↑"}),a.jsx("div",{style:{fontSize:"0.75rem",color:"var(--color-accent)",fontWeight:"normal",marginTop:"-2px"},children:"Per Hermitage"})]})]}),a.jsxs(fd,{children:[a.jsxs(pd,{children:["Modelled Valuation",a.jsxs("span",{className:"tooltip-icon",children:["ⓘ",a.jsx("span",{className:"tooltip-text",children:"The fair market value from the Loaf Pricing Model which utilises millions of data points, comparables, independent valuations, economic data and more in real time."})]})]}),a.jsx(Hu,{children:"$16.5M"})]}),a.jsxs(fd,{children:[a.jsx(pd,{children:"Clearing Price Change"}),a.jsxs(Hu,{style:{color:"#fff"},children:[d,"% last 5 mins"]})]}),a.jsxs(fd,{children:[a.jsx(pd,{children:"Auction Ends In:"}),a.jsx(Hu,{children:V_(new Date(Date.now()+o.timeRemaining*1e3).toISOString())})]})]}),a.jsxs(H_,{children:[a.jsx(wy,{to:"/auction-test",className:"btn-secondary",onClick:()=>console.log("View Details clicked for auction test page"),children:"View Details"}),a.jsx(wy,{to:o.timeRemaining<=0?"#":"/auction-test",className:o.timeRemaining<=0?"btn-disabled":"btn-primary",children:o.timeRemaining<=0?"Closed":"Place Bid"})]})]})]})},md=43200,jy=1440,Sy=Symbol.for("constructDateFrom");function Pg(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Sy in e?e[Sy](t):e instanceof Date?new e.constructor(t):new Date(t)}function Go(e,t){return Pg(e,e)}let I_={};function Y_(){return I_}function ky(e){const t=Go(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Ag(e,...t){const n=Pg.bind(null,e||t.find(o=>typeof o=="object"));return t.map(n)}function Fu(e,t){const n=+Go(e)-+Go(t);return n<0?-1:n>0?1:n}function q_(e){return Pg(e,Date.now())}function W_(e,t,n){const[o,s]=Ag(n==null?void 0:n.in,e,t),c=o.getFullYear()-s.getFullYear(),d=o.getMonth()-s.getMonth();return c*12+d}function G_(e){return t=>{const o=(e?Math[e]:Math.trunc)(t);return o===0?0:o}}function X_(e,t){return+Go(e)-+Go(t)}function Q_(e,t){const n=Go(e);return n.setHours(23,59,59,999),n}function Z_(e,t){const n=Go(e),o=n.getMonth();return n.setFullYear(n.getFullYear(),o+1,0),n.setHours(23,59,59,999),n}function K_(e,t){const n=Go(e);return+Q_(n)==+Z_(n)}function J_(e,t,n){const[o,s,c]=Ag(n==null?void 0:n.in,e,e,t),d=Fu(s,c),h=Math.abs(W_(s,c));if(h<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-d*h);let m=Fu(s,c)===-d;K_(o)&&h===1&&Fu(o,c)===1&&(m=!1);const p=d*(h-+m);return p===0?0:p}function eT(e,t,n){const o=X_(e,t)/1e3;return G_(n==null?void 0:n.roundingMethod)(o)}const tT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},rT=(e,t,n)=>{let o;const s=tT[e];return typeof s=="string"?o=s:t===1?o=s.one:o=s.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o};function b0(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const nT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},oT={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},iT={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},aT={date:b0({formats:nT,defaultWidth:"full"}),time:b0({formats:oT,defaultWidth:"full"}),dateTime:b0({formats:iT,defaultWidth:"full"})},sT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lT=(e,t,n,o)=>sT[e];function nl(e){return(t,n)=>{const o=n!=null&&n.context?String(n.context):"standalone";let s;if(o==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,h=n!=null&&n.width?String(n.width):d;s=e.formattingValues[h]||e.formattingValues[d]}else{const d=e.defaultWidth,h=n!=null&&n.width?String(n.width):e.defaultWidth;s=e.values[h]||e.values[d]}const c=e.argumentCallback?e.argumentCallback(t):t;return s[c]}}const cT={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},dT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},uT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},fT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},pT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},mT=(e,t)=>{const n=Number(e),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},gT={ordinalNumber:mT,era:nl({values:cT,defaultWidth:"wide"}),quarter:nl({values:dT,defaultWidth:"wide",argumentCallback:e=>e-1}),month:nl({values:uT,defaultWidth:"wide"}),day:nl({values:hT,defaultWidth:"wide"}),dayPeriod:nl({values:fT,defaultWidth:"wide",formattingValues:pT,defaultFormattingWidth:"wide"})};function ol(e){return(t,n={})=>{const o=n.width,s=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],c=t.match(s);if(!c)return null;const d=c[0],h=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(h)?bT(h,v=>v.test(d)):xT(h,v=>v.test(d));let p;p=e.valueCallback?e.valueCallback(m):m,p=n.valueCallback?n.valueCallback(p):p;const x=t.slice(d.length);return{value:p,rest:x}}}function xT(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function bT(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function vT(e){return(t,n={})=>{const o=t.match(e.matchPattern);if(!o)return null;const s=o[0],c=t.match(e.parsePattern);if(!c)return null;let d=e.valueCallback?e.valueCallback(c[0]):c[0];d=n.valueCallback?n.valueCallback(d):d;const h=t.slice(s.length);return{value:d,rest:h}}}const yT=/^(\d+)(th|st|nd|rd)?/i,wT=/\d+/i,jT={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ST={any:[/^b/i,/^(a|c)/i]},kT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},CT={any:[/1/i,/2/i,/3/i,/4/i]},MT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},_T={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},TT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},zT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},DT={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},PT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},AT={ordinalNumber:vT({matchPattern:yT,parsePattern:wT,valueCallback:e=>parseInt(e,10)}),era:ol({matchPatterns:jT,defaultMatchWidth:"wide",parsePatterns:ST,defaultParseWidth:"any"}),quarter:ol({matchPatterns:kT,defaultMatchWidth:"wide",parsePatterns:CT,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ol({matchPatterns:MT,defaultMatchWidth:"wide",parsePatterns:_T,defaultParseWidth:"any"}),day:ol({matchPatterns:TT,defaultMatchWidth:"wide",parsePatterns:zT,defaultParseWidth:"any"}),dayPeriod:ol({matchPatterns:DT,defaultMatchWidth:"any",parsePatterns:PT,defaultParseWidth:"any"})},ET={code:"en-US",formatDistance:rT,formatLong:aT,formatRelative:lT,localize:gT,match:AT,options:{weekStartsOn:0,firstWeekContainsDate:1}};function OT(e,t,n){const o=Y_(),s=(n==null?void 0:n.locale)??o.locale??ET,c=2520,d=Fu(e,t);if(isNaN(d))throw new RangeError("Invalid time value");const h=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:d}),[m,p]=Ag(n==null?void 0:n.in,...d>0?[t,e]:[e,t]),x=eT(p,m),v=(ky(p)-ky(m))/1e3,y=Math.round((x-v)/60);let j;if(y<2)return n!=null&&n.includeSeconds?x<5?s.formatDistance("lessThanXSeconds",5,h):x<10?s.formatDistance("lessThanXSeconds",10,h):x<20?s.formatDistance("lessThanXSeconds",20,h):x<40?s.formatDistance("halfAMinute",0,h):x<60?s.formatDistance("lessThanXMinutes",1,h):s.formatDistance("xMinutes",1,h):y===0?s.formatDistance("lessThanXMinutes",1,h):s.formatDistance("xMinutes",y,h);if(y<45)return s.formatDistance("xMinutes",y,h);if(y<90)return s.formatDistance("aboutXHours",1,h);if(y<jy){const w=Math.round(y/60);return s.formatDistance("aboutXHours",w,h)}else{if(y<c)return s.formatDistance("xDays",1,h);if(y<md){const w=Math.round(y/jy);return s.formatDistance("xDays",w,h)}else if(y<md*2)return j=Math.round(y/md),s.formatDistance("aboutXMonths",j,h)}if(j=J_(p,m),j<12){const w=Math.round(y/md);return s.formatDistance("xMonths",w,h)}else{const w=j%12,C=Math.trunc(j/12);return w<3?s.formatDistance("aboutXYears",C,h):w<9?s.formatDistance("overXYears",C,h):s.formatDistance("almostXYears",C+1,h)}}function t4(e,t){return OT(e,q_(e),t)}const RT=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  max-height: 300px;
  overflow-y: auto;
`,LT=f.h3`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  
  span.live-indicator {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #0ecb81;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border-radius: 50%;
      background-color: rgba(14, 203, 129, 0.3);
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.7;
      }
      70% {
        transform: scale(1.5);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  }
`,BT=f.div`
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.5s ease-in-out;
  
  &:last-child {
    border-bottom: none;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,$T=f.div`
  display: flex;
  flex-direction: column;
`,NT=f.div`
  font-weight: 500;
  color: var(--color-text);
`,HT=f.div`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  margin-top: 0.25rem;
`,FT=f.div`
  font-weight: 600;
  color: var(--color-accent);
`,VT=f.div`
  text-align: center;
  padding: 2rem 0;
  color: var(--color-text-secondary);
`,UT=e=>e>=1e6?`$${(e/1e6).toFixed(2)}M`:e>=1e3?`$${(e/1e3).toFixed(1)}K`:`$${e.toFixed(0)}`,Eg=({purchases:e=[],autoUpdate:t=!0})=>{const[n,o]=S.useState(e),[s,c]=S.useState(new Date),d=S.useRef(null),{property:h,isFullySubscribed:m,addPurchase:p}=ql();return S.useEffect(()=>{if(!t||m)return;const x=[],v=["James","Emma","Noah","Olivia","William","Ava","Benjamin","Sophia","Lucas","Isabella","Henry","Mia","Alexander","Charlotte","Michael","Ethan","Amelia","Daniel","Harper","Matthew","Evelyn","Joseph","Abigail","David","Emily"],y=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson","White","Harris"],j=()=>{const _=(h==null?void 0:h.tokenPrice)||125e3;let z;const D=Math.random()*100;D<75?z=Math.round((Math.random()*.8+.1)*10)/10:D<95?z=Math.floor(Math.random()*3)+1:z=Math.floor(Math.random()*7)+4;const L=_*z,A=v[Math.floor(Math.random()*v.length)],V=y[Math.floor(Math.random()*y.length)],E=`${A} ${V}`,F=new Date,te=Math.floor(Math.random()*100);return{id:`p-${Date.now()}-${te}`,name:E,amount:L,timestamp:F.toISOString(),tokenCount:z}},w=()=>{if(m)return;if(Math.random()<.3){const z=Math.floor(Math.random()*4)+2,D=[];let L=0;for(let A=0;A<z;A++){const V=j();D.push(V),L+=V.amount}o(A=>[...D,...A].slice(0,10)),c(new Date),p(L)}else{const z=j();o(D=>[z,...D.slice(0,9)]),c(new Date),p(z.amount)}m||C()},C=()=>{if(m)return;let _;Math.random()<.4?_=Math.floor(Math.random()*600)+200:_=Math.floor(Math.random()*2e3)+1e3;const z=setTimeout(w,_);x.push(z)},k=setTimeout(()=>{w()},1e3);return x.push(k),()=>{x.forEach(_=>clearTimeout(_))}},[t,h,m,p]),S.useEffect(()=>{o(e)},[e]),S.useEffect(()=>{d.current&&(d.current.scrollTop=0)},[n]),a.jsxs(RT,{ref:d,children:[a.jsxs(LT,{children:[a.jsx("span",{className:"live-indicator"}),"Live Acquisitions"]}),n.length>0?n.map(x=>a.jsxs(BT,{children:[a.jsxs($T,{children:[a.jsx(NT,{children:x.name.split(" ")[0].substring(0,3)+(x.name.split(" ")[1]?" "+x.name.split(" ")[1].charAt(0)+".":"")}),a.jsx(HT,{children:t4(new Date(x.timestamp),{addSuffix:!0})})]}),a.jsx(FT,{children:UT(x.amount)})]},x.id)):a.jsx(VT,{children:"No recent purchases"})]})},IT=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  max-height: 300px;
  overflow-y: auto;
`,YT=f.h3`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span.live-indicator {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #0ecb81;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border-radius: 50%;
      background-color: rgba(14, 203, 129, 0.3);
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.7;
      }
      70% {
        transform: scale(1.5);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  }
`,qT=f.div`
  display: flex;
  align-items: center;
`,WT=f.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
`,GT=f.div`
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.5s ease-in-out;
  
  &:last-child {
    border-bottom: none;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,XT=f.div`
  display: flex;
  flex-direction: column;
`,QT=f.div`
  font-weight: 500;
  color: var(--color-text);
`,ZT=f.div`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  margin-top: 0.25rem;
`,KT=f.div`
  font-weight: 600;
  color: var(--color-accent);
`,JT=f.div`
  text-align: center;
  padding: 2rem 0;
  color: var(--color-text-secondary);
`,e9=e=>e>=1e6?`$${(e/1e6).toFixed(2)}M`:e>=1e3?`$${(e/1e3).toFixed(1)}K`:`$${e.toFixed(0)}`,t9=({purchases:e=[],autoUpdate:t=!0})=>{const n=e.length>0?e:[{id:"b-init-1",name:"Michael S.",amount:151200,timestamp:new Date(Date.now()-3e4).toISOString()},{id:"b-init-2",name:"Sarah T.",amount:150800,timestamp:new Date(Date.now()-6e4).toISOString()},{id:"b-init-3",name:"David L.",amount:151500,timestamp:new Date(Date.now()-12e4).toISOString()},{id:"b-init-4",name:"Emma W.",amount:150900,timestamp:new Date(Date.now()-18e4).toISOString()},{id:"b-init-5",name:"James K.",amount:151300,timestamp:new Date(Date.now()-24e4).toISOString()}],[o,s]=S.useState(n),[c,d]=S.useState(new Date),h=S.useRef(null),{property:m,isFullySubscribed:p}=ql(),{auctionData:x}=Zj(),v=(x==null?void 0:x.clearingPrice)||15e4,[y,j]=S.useState((x==null?void 0:x.activeBidders)||3842);return S.useEffect(()=>{const w=setInterval(()=>{j(C=>{const k=Math.random()>.2?Math.floor(Math.random()*4):-Math.floor(Math.random()*2);return Math.max(3800,C+k)})},5e3);return()=>clearInterval(w)},[]),S.useEffect(()=>{if(!t||p)return;const w=[],C=["James","Emma","Noah","Olivia","William","Ava","Benjamin","Sophia","Lucas","Isabella","Henry","Mia","Alexander","Charlotte","Michael","Ethan","Amelia","Daniel","Harper","Matthew","Evelyn","Joseph","Abigail","David","Emily"],k=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin","Lee","Perez","Thompson","White","Harris"],_=()=>{let A;const V=Math.random()*100;V<70?A=1+(Math.random()*2+1)/100:V<95?A=1+(Math.random()*2+3)/100:A=1+(Math.random()*5+5)/100;const E=v*A,F=C[Math.floor(Math.random()*C.length)],te=k[Math.floor(Math.random()*k.length)],de=`${F} ${te}`,le=new Date,fe=Math.floor(Math.random()*100);return{id:`b-${Date.now()}-${fe}`,name:de,amount:E,timestamp:le.toISOString()}},z=()=>{if(p)return;if(Math.random()<.3){const V=Math.floor(Math.random()*3)+2,E=[];for(let F=0;F<V;F++){const te=_();E.push(te)}s(F=>[...E,...F].slice(0,10)),d(new Date)}else{const V=_();s(E=>[V,...E.slice(0,9)]),d(new Date)}p||D()},D=()=>{if(p)return;let A;Math.random()<.4?A=Math.floor(Math.random()*600)+200:A=Math.floor(Math.random()*2e3)+1e3;const V=setTimeout(z,A);w.push(V)},L=setTimeout(()=>{z()},1e3);return w.push(L),()=>{w.forEach(A=>clearTimeout(A))}},[t,m,p,v]),S.useEffect(()=>{s(e)},[e]),S.useEffect(()=>{h.current&&(h.current.scrollTop=0)},[o]),a.jsxs(IT,{ref:h,children:[a.jsxs(YT,{children:[a.jsxs(qT,{children:[a.jsx("span",{className:"live-indicator"}),"Live Bids"]}),a.jsxs(WT,{children:["Active Bidders: ",y]})]}),o.length>0?o.map(w=>a.jsxs(GT,{children:[a.jsxs(XT,{children:[a.jsx(QT,{children:w.name.split(" ")[0].substring(0,3)+(w.name.split(" ")[1]?" "+w.name.split(" ")[1].charAt(0)+".":"")}),a.jsx(ZT,{children:t4(new Date(w.timestamp),{addSuffix:!0})})]}),a.jsx(KT,{children:e9(w.amount)})]},w.id)):a.jsx(JT,{children:"No recent bids"})]})},r4=f(st)`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  text-decoration: none;
  cursor: pointer;
`,r9=f.img`
  display: block;
  max-width: none;
  min-width: 120%;
  min-height: 120%;
  margin: 0;
  padding: 0;
  transition: transform var(--transition-speed) ease;
  transform: scale(1.0);
  transform-origin: center center;
  
  ${r4}:hover & {
    transform: scale(1.05);
  }
`,n9=f.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`,o9=f.div`
  display: inline-block;
  width: auto;
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
`,i9=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,a9=f.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
`,s9=f.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-accent, #f0b90b);
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
`,l9=f.span`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>e.isPositive?"var(--color-positive, #0ecb81)":"var(--color-negative, #f6465d)"};
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  svg {
    margin-right: 0.15rem;
  }
`,c9=f.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
`,gd=f.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 18px;
    height: 18px;
  }
`,d9=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,n4=f(st)`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,u9=f(n4)`
  background-color: var(--color-accent, #f0b90b);
  color: black;
  font-size: 0.95rem;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
  }
`,h9=f(n4)`
  background-color: rgba(240, 185, 11, 0.15);
  color: var(--color-accent, #f0b90b);
  border: 1px solid var(--color-accent, #f0b90b);
  font-size: 0.95rem;
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.25);
  }
`,f9=({property:e})=>{const t=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(c);if(!e)return null;const n=e.token||{price:e.price||125e3,basePrice:e.basePrice||125e3},o=n.price/n.basePrice-1,s=o>=0;return a.jsxs(r4,{to:`/properties/${e.slug}`,children:[a.jsx(r9,{src:e.imageUrl,alt:e.name}),a.jsxs(n9,{children:[a.jsxs(o9,{children:[a.jsx(i9,{children:e.name}),a.jsxs(a9,{children:[e.location,a.jsxs(s9,{children:[t(n.price),a.jsxs(l9,{isPositive:s,children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:s?"M7 14l5-5 5 5H7z":"M7 10l5 5 5-5H7z"})}),Math.abs(o*100).toFixed(2),"%"]})]})]}),a.jsxs(c9,{children:[a.jsxs(gd,{children:[a.jsx(Jt.IconWrapper,{children:a.jsx(Jt.BedroomIcon,{})}),e.bedrooms," Beds"]}),a.jsxs(gd,{children:[a.jsx(Jt.IconWrapper,{children:a.jsx(Jt.BathroomIcon,{})}),e.bathrooms," Baths"]}),a.jsxs(gd,{children:[a.jsx(Jt.IconWrapper,{children:a.jsx(Jt.CarIcon,{})}),e.carSpots," Cars"]}),a.jsx(gd,{children:e.propertyType})]})]}),a.jsxs(d9,{children:[a.jsx(u9,{as:st,to:`/properties/${e.slug}#trade`,"data-discover":"true",children:"Trade"}),a.jsx(h9,{as:st,to:`/properties/${e.slug}`,"data-discover":"true",children:"Make Offer"})]})]})]})},p9=f.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`,m9=f.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${e=>e.activeIndex*100}%);
`,g9=f.div`
  flex: 0 0 100%;
  width: 100%;
`,x9=f.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
`,b9=f.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${e=>e.active?"var(--color-accent)":"rgba(230, 200, 126, 0.3)"};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  padding: 0;
  margin: 0;
  
  &:hover {
    transform: scale(1.2);
  }
  
  &:focus {
    outline: none;
  }
`,v9=({children:e})=>{const[t,n]=S.useState(0),[o,s]=S.useState(!1),c=pt.Children.toArray(e),d=S.useRef(null),h=p=>{n(p),s(!0)},m=()=>{o||(n(p=>(p+1)%c.length),s(!0))};return S.useEffect(()=>(d.current&&clearTimeout(d.current),o||(d.current=setTimeout(()=>{m()},5e3)),()=>{d.current&&clearTimeout(d.current)}),[o,c.length]),a.jsxs("div",{children:[a.jsx(x9,{children:c.map((p,x)=>a.jsx(b9,{active:x===t,onClick:()=>h(x)},x))}),a.jsx(p9,{children:a.jsx(m9,{activeIndex:t,children:c.map((p,x)=>a.jsx(g9,{children:p},x))})})]})},Vu={id:"ipo-001",name:"Hermitage",address:"42 Wentworth Road",location:"Vaucluse, Sydney",imageUrl:"https://rimh2.domainstatic.com.au/K2F_ORgd_kmIe3ClzBwmk_giZC4=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2017423566_1_1_211118_045100-w1920-h1279",description:"Prestigious waterfront mansion in Vaucluse with breathtaking panoramic views of Sydney Harbour, the Opera House, and Harbour Bridge. This architectural masterpiece offers unparalleled luxury living.",images:["https://rimh2.domainstatic.com.au/K2F_ORgd_kmIe3ClzBwmk_giZC4=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2017423566_1_1_211118_045100-w1920-h1279","https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80","https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],tokenPrice:125e3,totalTokens:1e5,tokensSold:67500,subscriptionPercentage:67.5,targetRaise:125e5,raisedAmount:8437500,minInvestment:625e3,ipoStartDate:"2025-06-01T00:00:00Z",ipoEndDate:"2025-07-15T00:00:00Z",features:["7 Bedrooms","8 Bathrooms","6 Car Garage","Infinity Pool","Private Jetty"],projectedYield:6.2,propertyValue:125e5,propertySize:1250,yearBuilt:2023,documents:[{name:"Investment Memorandum",url:"#"},{name:"Financial Projections",url:"#"},{name:"Legal Documentation",url:"#"}]},qm=[{id:"ipo-002",name:"15 Bondi Road",location:"Bondi, Sydney",imageUrl:"https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",description:"Beachside apartment complex just steps from the iconic Bondi Beach.",tokenPrice:85,totalTokens:15e4,targetRaise:1275e4,projectedYield:4.9,ipoStartDate:"2025-07-20T00:00:00Z",propertyValue:1275e4,propertySize:1200,yearBuilt:2021},{id:"ipo-003",name:"78 Collins Avenue",location:"Melbourne, Australia",imageUrl:"https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",description:"Modern office building in Melbourne CBD with long-term corporate tenants.",tokenPrice:110,totalTokens:18e4,targetRaise:198e5,projectedYield:6.2,ipoStartDate:"2025-08-05T00:00:00Z",propertyValue:198e5,propertySize:2800,yearBuilt:2019},{id:"ipo-004",name:"23 River View",location:"Brisbane, Australia",imageUrl:"https://images.unsplash.com/photo-1600607687644-a7e0722b0d11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",description:"Luxury riverside apartments with stunning views of the Brisbane River.",tokenPrice:95,totalTokens:12e4,targetRaise:114e5,projectedYield:5.5,ipoStartDate:"2025-08-15T00:00:00Z",propertyValue:114e5,propertySize:1800,yearBuilt:2023}],y9=[{id:"p1",name:"Alex",amount:25e3,timestamp:new Date(Date.now()-35e3).toISOString()},{id:"p2",name:"Sarah",amount:12500,timestamp:new Date(Date.now()-18e4).toISOString()},{id:"p3",name:"Michael",amount:5e4,timestamp:new Date(Date.now()-36e4).toISOString()},{id:"p4",name:"Emma",amount:37500,timestamp:new Date(Date.now()-72e4).toISOString()},{id:"p5",name:"David",amount:62500,timestamp:new Date(Date.now()-12e5).toISOString()}],w9=async()=>{try{return{data:Vu}}catch(e){throw console.error("Error fetching featured IPO:",e),e}},j9=async()=>{try{return{data:qm}}catch(e){throw console.error("Error fetching presale properties:",e),e}},S9=async e=>{try{return{data:y9}}catch(t){throw console.error("Error fetching recent purchases:",t),t}},k9=async(e,t,n)=>{try{return{success:!0,message:"Purchase successful",data:{transactionId:`tx-${Date.now()}`,amount:t,timestamp:new Date().toISOString()}}}catch(o){throw console.error("Error purchasing IPO tokens:",o),o}},o4=async e=>{try{if(console.log("getIPOById called with ID:",e),e===Vu.id)return console.log("Found matching featured IPO"),{data:Vu};const t=qm.find(n=>n.id===e);if(t)return console.log("Found matching presale property"),{data:t};throw console.log("Available IPO IDs:",[Vu.id,...qm.map(n=>n.id)]),new Error(`IPO with ID ${e} not found`)}catch(t){throw console.error(`Error fetching IPO with ID ${e}:`,t),t}},Ti={getFeaturedIPO:w9,getPresaleProperties:j9,getRecentPurchases:S9,purchaseIPOTokens:k9,getIPOById:o4},C9=f.div`
  padding: 2rem 0;
  width: 100%;
`,M9=f.section`
  position: relative;
  background-color: transparent;
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,_9=f.div`
  position: relative;
  max-width: 600px;
  flex: 1;
`,T9=f.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  
  span {
    color: var(--color-accent);
  }
`,z9=f.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
  
  .highlight {
    color: var(--color-accent);
    font-weight: 700;
    position: relative;
    padding: 0 2px;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-accent);
      opacity: 0.7;
    }
  }
`,D9=f.div`
  display: flex;
  gap: 1rem;
`,P9=f.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px;
  margin-left: 0;
  position: relative;
  right: 50px;
  
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 2rem;
    width: 100%;
    right: 0;
  }
`,A9=f.h3`
  font-size: 1rem;
  color: #848e9c;
  margin-bottom: 0.5rem;
  font-weight: 400;
`,E9=f.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
`,O9=f.div`
  font-size: 0.875rem;
  color: ${e=>e.isPositive?"#0ecb81":"#f6465d"};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 12px;
    height: 12px;
    margin-right: 4px;
  }
`,Cy=f(st)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
  
  &.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-background);
    
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
  
  &.btn-secondary {
    background-color: transparent;
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    
    &:hover {
      background-color: rgba(230, 200, 126, 0.1);
    }
  }
`,v0=f.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`,y0=f.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
`,My=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,w0=f.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
`,j0=f(st)`
  color: var(--color-accent);
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`,_y=f.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,R9=f.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,xd=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  text-align: center;
`,bd=f.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-accent);
`,vd=f.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,L9=()=>{const[e,t]=S.useState([]),[n,o]=S.useState([]),[s,c]=S.useState(null),[d,h]=S.useState([]),[m,p]=S.useState(!0),[x,v]=S.useState({amount:15e6,isPositive:!0,change:"3.8"}),[y,j]=S.useState(null),[w,C]=S.useState(!1),[k,_]=S.useState(!1),z=async()=>{try{const E=await Ti.getFeaturedIPO();c(E.data)}catch(E){console.error("Error fetching featured IPO:",E)}},D=async()=>{try{const E=await Ti.getRecentPurchases();h(E.data)}catch(E){console.error("Error fetching recent purchases:",E)}};S.useEffect(()=>{(async()=>{p(!0),await Promise.all([L(),z(),D(),A()]),p(!1),setTimeout(()=>{_(!0)},500)})();const F=setTimeout(()=>{C(!0)},3e3);return()=>clearTimeout(F)},[]),S.useEffect(()=>{const E=setInterval(()=>{v(F=>{const te=(Math.random()-.45)*.01;let de=F.amount*(1+te);const le=12e6,fe=18e6;return de<le?de=le+Math.random()*5e5:de>fe&&(de=fe-Math.random()*5e5),{amount:de,change:Math.abs(te*100).toFixed(2),isPositive:te>=0}})},3e3);return()=>clearInterval(E)},[]);const L=async()=>{p(!0);try{const E=V(),F=[...E].sort(()=>.5-Math.random()).slice(0,3),de=[...E.filter(le=>!le.name.includes("28 Derby Street"))].sort((le,fe)=>parseFloat(fe.priceChangePercent)-parseFloat(le.priceChangePercent)).slice(0,6);t(F),o(de),p(!1)}catch(E){console.error("Error fetching properties:",E),p(!1)}},A=async()=>{try{j({id:"derby-street",slug:"28-derby-street-elara",name:"28 Derby Street (Elara)",location:"Vaucluse, Sydney",imageUrl:"https://i2.au.reastatic.net/1232x688-resize,extend,r=33,g=40,b=46/5f6981d6e0c819bf4775b18f9b182ef5290b2271fec86b8ad05b6d9b3ebe6287/image.jpg",bedrooms:4,bathrooms:5,carSpots:4,propertyType:"House",token:{price:126206824,basePrice:125e6,priceChange:.97}})}catch(E){console.error("Error fetching Derby Street property:",E)}},V=()=>[{id:1,name:"28 Derby Street (Elara)",location:"Vaucluse, Sydney",price:126206824,priceChange:.97,bedrooms:4,bathrooms:5,carSpots:4,imageUrl:"https://i2.au.reastatic.net/1232x688-resize,extend,r=33,g=40,b=46/5f6981d6e0c819bf4775b18f9b182ef5290b2271fec86b8ad05b6d9b3ebe6287/image.jpg",tokenPrice:125,tokenPriceChange:2.1,slug:"28-derby-street-elara"},{id:2,name:"42 Wolseley Road",location:"Point Piper, Sydney",imageUrl:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"150,000",marketCap:"24,500,000",volume24h:"3,250,000",priceChangePercent:"-0.75",bedrooms:6,bathrooms:5,carSpots:4,propertyType:"House"},{id:3,name:"15 Roslyndale Avenue",location:"Woollahra, Sydney",imageUrl:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"98,500",marketCap:"14,775,000",volume24h:"1,850,000",priceChangePercent:"1.25",bedrooms:4,bathrooms:3,carSpots:2,propertyType:"House"},{id:4,name:"7 Raglan Street",location:"Mosman, Sydney",imageUrl:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"112,800",marketCap:"16,920,000",volume24h:"2,250,000",priceChangePercent:"3.42",bedrooms:3,bathrooms:2,carSpots:2,propertyType:"House"},{id:5,name:"22 Arden Street",location:"Coogee, Sydney",imageUrl:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"85,400",marketCap:"12,810,000",volume24h:"1,750,000",priceChangePercent:"-1.05",bedrooms:3,bathrooms:2,carSpots:1,propertyType:"Apartment"},{id:6,name:"18 Killara Avenue",location:"Gordon, Sydney",imageUrl:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"72,500",marketCap:"10,875,000",volume24h:"1,450,000",priceChangePercent:"0.87",bedrooms:4,bathrooms:3,carSpots:2,propertyType:"House"},{id:7,name:"9 Kambala Road",location:"Bellevue Hill, Sydney",imageUrl:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"135,600",marketCap:"20,340,000",volume24h:"2,850,000",priceChangePercent:"2.18",bedrooms:5,bathrooms:4,carSpots:3,propertyType:"House"},{id:8,name:"32 Burran Avenue",location:"Mosman, Sydney",imageUrl:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"95,200",marketCap:"14,280,000",volume24h:"1,950,000",priceChangePercent:"-0.32",bedrooms:4,bathrooms:3,carSpots:2,propertyType:"House"}];return a.jsxs(C9,{className:"container",children:[a.jsxs(M9,{children:[a.jsxs(_9,{children:[a.jsx(T9,{children:a.jsx("span",{children:"Trading Property"})}),a.jsx(z9,{children:"Where Australia's most exclusive properties trade."}),a.jsxs(D9,{children:[a.jsx(Cy,{to:"/properties",className:"btn-primary",children:"Explore Properties"}),a.jsx(Cy,{to:"/register",className:"btn-secondary",children:"Get Started"})]})]}),a.jsxs(P9,{children:[a.jsx(A9,{children:"Median House Price"}),!w&&k?a.jsx(rl,{value:x.amount/1e6,startValue:x.amount/1e6-3,duration:2500,prefix:"$",suffix:"M",decimals:2}):a.jsxs(E9,{children:["$",(x.amount/1e6).toFixed(2),"M"]}),a.jsxs(O9,{isPositive:x.isPositive,children:[x.isPositive?a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 14l5-5 5 5H7z"})}):a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 10l5 5 5-5H7z"})}),x.change,"% Today"]})]})]}),a.jsx(G7,{}),s&&a.jsxs("section",{children:[a.jsxs(w0,{children:[a.jsxs("div",{children:[a.jsx(v0,{children:"Current IPO"}),a.jsx(y0,{children:"Property currently in IPO - Allocation given on first come first serve bases"})]}),a.jsx(j0,{to:"/ipo",children:"View All IPOs"})]}),a.jsx(Dg,{initialProperty:s,children:a.jsx(Kj,{children:a.jsxs(v9,{children:[a.jsxs(_y,{children:[a.jsx(Xj,{property:s}),a.jsx(Eg,{purchases:d,autoUpdate:!0})]}),a.jsxs(_y,{children:[a.jsx(U_,{property:s}),a.jsx(t9,{purchases:[],autoUpdate:!0})]})]})})})]}),a.jsxs("section",{children:[a.jsxs(w0,{children:[a.jsxs("div",{children:[a.jsx(v0,{children:"Featured Properties"}),a.jsx(y0,{children:"Concentrate or diversify at will"})]}),a.jsx(j0,{to:"/properties",children:"View All"})]}),m?a.jsx("div",{children:"Loading properties..."}):a.jsxs(a.Fragment,{children:[y&&a.jsx(f9,{property:y}),a.jsx(My,{children:e.map(E=>a.jsx(Io,{property:E},E.id))})]})]}),a.jsxs(R9,{children:[a.jsxs(xd,{children:[k?a.jsx(rl,{value:214.7,startValue:190,duration:2800,prefix:"$",suffix:"M",decimals:1,fontSize:"2rem"}):a.jsx(bd,{children:"$214.7M"}),a.jsx(vd,{children:"Total Property Value"})]}),a.jsxs(xd,{children:[k?a.jsx(rl,{value:12840,startValue:11500,duration:2600,decimals:0,fontSize:"2rem"}):a.jsx(bd,{children:"12,840"}),a.jsx(vd,{children:"Active Investors"})]}),a.jsxs(xd,{children:[k?a.jsx(rl,{value:22,startValue:18,duration:1800,decimals:0,fontSize:"2rem"}):a.jsx(bd,{children:"22"}),a.jsx(vd,{children:"Properties Tokenized"})]}),a.jsxs(xd,{children:[k?a.jsx(rl,{value:3.4,startValue:2.8,duration:2200,prefix:"$",suffix:"M",decimals:1,fontSize:"2rem"}):a.jsx(bd,{children:"$3.4M"}),a.jsx(vd,{children:"24h Trading Volume"})]})]}),a.jsxs("section",{children:[a.jsxs(w0,{children:[a.jsxs("div",{children:[a.jsx(v0,{children:"Trending Properties"}),a.jsx(y0,{children:"Most active properties in the last 24 hours"})]}),a.jsx(j0,{to:"/market",children:"View Market"})]}),m?a.jsx("div",{children:"Loading properties..."}):a.jsx(My,{children:n.map(E=>a.jsx(Io,{property:E},E.id))})]})]})},i4=S.createContext(),B9=({children:e})=>{const[t,n]=S.useState(!1);return a.jsx(i4.Provider,{value:{isMapViewActive:t,setIsMapViewActive:n},children:e})},$9=()=>{const e=S.useContext(i4);if(!e)throw new Error("useMapView must be used within a MapViewProvider");return e},N9="/loaf-mvp/assets/Westfield-BonQuCc5.jpg",H9="/loaf-mvp/assets/barangaroo-CTQo254I.avif",F9="modulepreload",V9=function(e){return"/loaf-mvp/"+e},Ty={},U9=function(t,n,o){let s=Promise.resolve();if(n&&n.length>0){let d=function(p){return Promise.all(p.map(x=>Promise.resolve(x).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=d(n.map(p=>{if(p=V9(p),p in Ty)return;Ty[p]=!0;const x=p.endsWith(".css"),v=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const y=document.createElement("link");if(y.rel=x?"stylesheet":F9,x||(y.as="script"),y.crossOrigin="",y.href=p,m&&y.setAttribute("nonce",m),document.head.appendChild(y),x)return new Promise((j,w)=>{y.addEventListener("load",j),y.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return s.then(d=>{for(const h of d||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})},I9=S.createContext(null);function Y9(e,t){const n=Array.isArray(e)?e[0]:e?e.x:0,o=Array.isArray(e)?e[1]:e?e.y:0,s=Array.isArray(t)?t[0]:t?t.x:0,c=Array.isArray(t)?t[1]:t?t.y:0;return n===s&&o===c}function ao(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!ao(e[n],t[n]))return!1;return!0}else if(Array.isArray(t))return!1;if(typeof e=="object"&&typeof t=="object"){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(const s of n)if(!t.hasOwnProperty(s)||!ao(e[s],t[s]))return!1;return!0}return!1}function q9(e){const t=e.clone();return t.pixelsToGLUnits=e.pixelsToGLUnits,t}function zy(e,t){if(!e.getProjection)return;const n=e.getProjection(),o=t.getProjection();ao(n,o)||t.setProjection(n)}function Dy(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function Py(e,t){const n=t.viewState||t;let o=!1;if("zoom"in n){const s=e.zoom;e.zoom=n.zoom,o=o||s!==e.zoom}if("bearing"in n){const s=e.bearing;e.bearing=n.bearing,o=o||s!==e.bearing}if("pitch"in n){const s=e.pitch;e.pitch=n.pitch,o=o||s!==e.pitch}if(n.padding&&!e.isPaddingEqual(n.padding)&&(o=!0,e.padding=n.padding),"longitude"in n&&"latitude"in n){const s=e.center;e.center=new s.constructor(n.longitude,n.latitude),o=o||s!==e.center}return o}const W9=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function Ay(e){if(!e)return null;if(typeof e=="string"||("toJS"in e&&(e=e.toJS()),!e.layers))return e;const t={};for(const o of e.layers)t[o.id]=o;const n=e.layers.map(o=>{let s=null;"interactive"in o&&(s=Object.assign({},o),delete s.interactive);const c=t[o.ref];if(c){s=s||Object.assign({},o),delete s.ref;for(const d of W9)d in c&&(s[d]=c[d])}return s||o});return{...e,layers:n}}var Ey={};const Oy={version:8,sources:{},layers:[]},Ry={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},S0={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},Ly={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},G9=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],X9=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class Ua{constructor(t,n,o){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=s=>{const c=this.props[Ly[s.type]];c?c(s):s.type==="error"&&console.error(s.error)},this._onPointerEvent=s=>{(s.type==="mousemove"||s.type==="mouseout")&&this._updateHover(s);const c=this.props[Ry[s.type]];c&&(this.props.interactiveLayerIds&&s.type!=="mouseover"&&s.type!=="mouseout"&&(s.features=this._hoveredFeatures||this._queryRenderedFeatures(s.point)),c(s),delete s.features)},this._onCameraEvent=s=>{if(!this._internalUpdate){const c=this.props[S0[s.type]];c&&c(s)}s.type in this._deferredEvents&&(this._deferredEvents[s.type]=!1)},this._MapClass=t,this.props=n,this._initialize(o)}get map(){return this._map}get transform(){return this._renderTransform}setProps(t){const n=this.props;this.props=t;const o=this._updateSettings(t,n);o&&this._createShadowTransform(this._map);const s=this._updateSize(t),c=this._updateViewState(t,!0);this._updateStyle(t,n),this._updateStyleComponents(t,n),this._updateHandlers(t,n),(o||s||c&&!this._map.isMoving())&&this.redraw()}static reuse(t,n){const o=Ua.savedMaps.pop();if(!o)return null;const s=o.map,c=s.getContainer();for(n.className=c.className;c.childNodes.length>0;)n.appendChild(c.childNodes[0]);s._container=n;const d=s._resizeObserver;d&&(d.disconnect(),d.observe(n)),o.setProps({...t,styleDiffing:!1}),s.resize();const{initialViewState:h}=t;return h&&(h.bounds?s.fitBounds(h.bounds,{...h.fitBoundsOptions,duration:0}):o._updateViewState(h,!1)),s.isStyleLoaded()?s.fire("load"):s.once("styledata",()=>s.fire("load")),s._update(),o}_initialize(t){const{props:n}=this,{mapStyle:o=Oy}=n,s={...n,...n.initialViewState,accessToken:n.mapboxAccessToken||Q9()||null,container:t,style:Ay(o)},c=s.initialViewState||s.viewState||s;if(Object.assign(s,{center:[c.longitude||0,c.latitude||0],zoom:c.zoom||0,pitch:c.pitch||0,bearing:c.bearing||0}),n.gl){const x=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=x,n.gl)}const d=new this._MapClass(s);c.padding&&d.setPadding(c.padding),n.cursor&&(d.getCanvas().style.cursor=n.cursor),this._createShadowTransform(d);const h=d._render;d._render=x=>{this._inRender=!0,h.call(d,x),this._inRender=!1};const m=d._renderTaskQueue.run;d._renderTaskQueue.run=x=>{m.call(d._renderTaskQueue,x),this._onBeforeRepaint()},d.on("render",()=>this._onAfterRepaint());const p=d.fire;d.fire=this._fireEvent.bind(this,p),d.on("resize",()=>{this._renderTransform.resize(d.transform.width,d.transform.height)}),d.on("styledata",()=>{this._updateStyleComponents(this.props,{}),zy(d.transform,this._renderTransform)}),d.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const x in Ry)d.on(x,this._onPointerEvent);for(const x in S0)d.on(x,this._onCameraEvent);for(const x in Ly)d.on(x,this._onEvent);this._map=d}recycle(){const n=this.map.getContainer().querySelector("[mapboxgl-children]");n==null||n.remove(),Ua.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const t=this._map;!this._inRender&&t.style&&(t._frame&&(t._frame.cancel(),t._frame=null),t._render())}_createShadowTransform(t){const n=q9(t.transform);t.painter.transform=n,this._renderTransform=n}_updateSize(t){const{viewState:n}=t;if(n){const o=this._map;if(n.width!==o.transform.width||n.height!==o.transform.height)return o.resize(),!0}return!1}_updateViewState(t,n){if(this._internalUpdate)return!1;const o=this._map,s=this._renderTransform,{zoom:c,pitch:d,bearing:h}=s,m=o.isMoving();m&&(s.cameraElevationReference="sea");const p=Py(s,{...Dy(o.transform),...t});if(m&&(s.cameraElevationReference="ground"),p&&n){const x=this._deferredEvents;x.move=!0,x.zoom||(x.zoom=c!==s.zoom),x.rotate||(x.rotate=h!==s.bearing),x.pitch||(x.pitch=d!==s.pitch)}return m||Py(o.transform,t),p}_updateSettings(t,n){const o=this._map;let s=!1;for(const c of G9)if(c in t&&!ao(t[c],n[c])){s=!0;const d=o[`set${c[0].toUpperCase()}${c.slice(1)}`];d==null||d.call(o,t[c])}return s}_updateStyle(t,n){if(t.cursor!==n.cursor&&(this._map.getCanvas().style.cursor=t.cursor||""),t.mapStyle!==n.mapStyle){const{mapStyle:o=Oy,styleDiffing:s=!0}=t,c={diff:s};return"localIdeographFontFamily"in t&&(c.localIdeographFontFamily=t.localIdeographFontFamily),this._map.setStyle(Ay(o),c),!0}return!1}_updateStyleComponents(t,n){const o=this._map;let s=!1;return o.isStyleLoaded()&&("light"in t&&o.setLight&&!ao(t.light,n.light)&&(s=!0,o.setLight(t.light)),"fog"in t&&o.setFog&&!ao(t.fog,n.fog)&&(s=!0,o.setFog(t.fog)),"terrain"in t&&o.setTerrain&&!ao(t.terrain,n.terrain)&&(!t.terrain||o.getSource(t.terrain.source))&&(s=!0,o.setTerrain(t.terrain))),s}_updateHandlers(t,n){var o,s;const c=this._map;let d=!1;for(const h of X9){const m=(o=t[h])!==null&&o!==void 0?o:!0,p=(s=n[h])!==null&&s!==void 0?s:!0;ao(m,p)||(d=!0,m?c[h].enable(m):c[h].disable())}return d}_queryRenderedFeatures(t){const n=this._map,o=n.transform,{interactiveLayerIds:s=[]}=this.props;try{return n.transform=this._renderTransform,n.queryRenderedFeatures(t,{layers:s.filter(n.getLayer.bind(n))})}catch{return[]}finally{n.transform=o}}_updateHover(t){var n;const{props:o}=this;if(o.interactiveLayerIds&&(o.onMouseMove||o.onMouseEnter||o.onMouseLeave)){const c=t.type,d=((n=this._hoveredFeatures)===null||n===void 0?void 0:n.length)>0,h=this._queryRenderedFeatures(t.point),m=h.length>0;!m&&d&&(t.type="mouseleave",this._onPointerEvent(t)),this._hoveredFeatures=h,m&&!d&&(t.type="mouseenter",this._onPointerEvent(t)),t.type=c}else this._hoveredFeatures=null}_fireEvent(t,n,o){const s=this._map,c=s.transform,d=typeof n=="string"?n:n.type;return d==="move"&&this._updateViewState(this.props,!1),d in S0&&(typeof n=="object"&&(n.viewState=Dy(c)),this._map.isMoving())?(s.transform=this._renderTransform,t.call(s,n,o),s.transform=c,s):(t.call(s,n,o),s)}_onBeforeRepaint(){const t=this._map;this._internalUpdate=!0;for(const o in this._deferredEvents)this._deferredEvents[o]&&t.fire(o);this._internalUpdate=!1;const n=this._map.transform;t.transform=this._renderTransform,this._onAfterRepaint=()=>{zy(this._renderTransform,n),t.transform=n}}}Ua.savedMaps=[];function Q9(){let e=null;if(typeof location<"u"){const t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||Ey.MapboxAccessToken}catch{}try{e=e||Ey.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return e}const Z9=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function K9(e){if(!e)return null;const t=e.map,n={getMap:()=>t,getCenter:()=>e.transform.center,getZoom:()=>e.transform.zoom,getBearing:()=>e.transform.bearing,getPitch:()=>e.transform.pitch,getPadding:()=>e.transform.padding,getBounds:()=>e.transform.getBounds(),project:o=>{const s=t.transform;t.transform=e.transform;const c=t.project(o);return t.transform=s,c},unproject:o=>{const s=t.transform;t.transform=e.transform;const c=t.unproject(o);return t.transform=s,c},queryTerrainElevation:(o,s)=>{const c=t.transform;t.transform=e.transform;const d=t.queryTerrainElevation(o,s);return t.transform=c,d},queryRenderedFeatures:(o,s)=>{const c=t.transform;t.transform=e.transform;const d=t.queryRenderedFeatures(o,s);return t.transform=c,d}};for(const o of J9(t))!(o in n)&&!Z9.includes(o)&&(n[o]=t[o].bind(t));return n}function J9(e){const t=new Set;let n=e;for(;n;){for(const o of Object.getOwnPropertyNames(n))o[0]!=="_"&&typeof e[o]=="function"&&o!=="fire"&&o!=="setEventedParent"&&t.add(o);n=Object.getPrototypeOf(n)}return Array.from(t)}const ez=typeof document<"u"?S.useLayoutEffect:S.useEffect,tz=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function rz(e,t){for(const o of tz)o in t&&(e[o]=t[o]);const{RTLTextPlugin:n="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=t;n&&e.getRTLTextPluginStatus&&e.getRTLTextPluginStatus()==="unavailable"&&e.setRTLTextPlugin(n,o=>{o&&console.error(o)},!0)}const zh=S.createContext(null);function nz(e,t,n){const o=S.useContext(I9),[s,c]=S.useState(null),d=S.useRef(),{current:h}=S.useRef({mapLib:null,map:null});S.useEffect(()=>{const x=e.mapLib;let v=!0,y;return Promise.resolve(x||n).then(j=>{if(!v)return;if(!j)throw new Error("Invalid mapLib");const w="Map"in j?j:j.default;if(!w.Map)throw new Error("Invalid mapLib");if(rz(w,e),!w.supported||w.supported(e))e.reuseMaps&&(y=Ua.reuse(e,d.current)),y||(y=new Ua(w.Map,e,d.current)),h.map=K9(y),h.mapLib=w,c(y),o==null||o.onMapMount(h.map,e.id);else throw new Error("Map is not supported by this browser")}).catch(j=>{const{onError:w}=e;w?w({type:"error",target:null,originalEvent:null,error:j}):console.error(j)}),()=>{v=!1,y&&(o==null||o.onMapUnmount(e.id),e.reuseMaps?y.recycle():y.destroy())}},[]),ez(()=>{s&&s.setProps(e)}),S.useImperativeHandle(t,()=>h.map,[s]);const m=S.useMemo(()=>({position:"relative",width:"100%",height:"100%",...e.style}),[e.style]),p={height:"100%"};return S.createElement("div",{id:e.id,ref:d,style:m},s&&S.createElement(zh.Provider,{value:h},S.createElement("div",{"mapboxgl-children":"",style:p},e.children)))}const oz=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function Oi(e,t){if(!e||!t)return;const n=e.style;for(const o in t){const s=t[o];Number.isFinite(s)&&!oz.test(o)?n[o]=`${s}px`:n[o]=s}}function iz(e,t){const{map:n,mapLib:o}=S.useContext(zh),s=S.useRef({props:e});s.current.props=e;const c=S.useMemo(()=>{let C=!1;S.Children.forEach(e.children,z=>{z&&(C=!0)});const k={...e,element:C?document.createElement("div"):null},_=new o.Marker(k);return _.setLngLat([e.longitude,e.latitude]),_.getElement().addEventListener("click",z=>{var D,L;(L=(D=s.current.props).onClick)===null||L===void 0||L.call(D,{type:"click",target:_,originalEvent:z})}),_.on("dragstart",z=>{var D,L;const A=z;A.lngLat=c.getLngLat(),(L=(D=s.current.props).onDragStart)===null||L===void 0||L.call(D,A)}),_.on("drag",z=>{var D,L;const A=z;A.lngLat=c.getLngLat(),(L=(D=s.current.props).onDrag)===null||L===void 0||L.call(D,A)}),_.on("dragend",z=>{var D,L;const A=z;A.lngLat=c.getLngLat(),(L=(D=s.current.props).onDragEnd)===null||L===void 0||L.call(D,A)}),_},[]);S.useEffect(()=>(c.addTo(n.getMap()),()=>{c.remove()}),[]);const{longitude:d,latitude:h,offset:m,style:p,draggable:x=!1,popup:v=null,rotation:y=0,rotationAlignment:j="auto",pitchAlignment:w="auto"}=e;return S.useEffect(()=>{Oi(c.getElement(),p)},[p]),S.useImperativeHandle(t,()=>c,[]),(c.getLngLat().lng!==d||c.getLngLat().lat!==h)&&c.setLngLat([d,h]),m&&!Y9(c.getOffset(),m)&&c.setOffset(m),c.isDraggable()!==x&&c.setDraggable(x),c.getRotation()!==y&&c.setRotation(y),c.getRotationAlignment()!==j&&c.setRotationAlignment(j),c.getPitchAlignment()!==w&&c.setPitchAlignment(w),c.getPopup()!==v&&c.setPopup(v),qw.createPortal(e.children,c.getElement())}const az=S.memo(S.forwardRef(iz));function By(e){return new Set(e?e.trim().split(/\s+/):[])}function sz(e,t){const{map:n,mapLib:o}=S.useContext(zh),s=S.useMemo(()=>document.createElement("div"),[]),c=S.useRef({props:e});c.current.props=e;const d=S.useMemo(()=>{const h={...e},m=new o.Popup(h);return m.setLngLat([e.longitude,e.latitude]),m.once("open",p=>{var x,v;(v=(x=c.current.props).onOpen)===null||v===void 0||v.call(x,p)}),m},[]);if(S.useEffect(()=>{const h=m=>{var p,x;(x=(p=c.current.props).onClose)===null||x===void 0||x.call(p,m)};return d.on("close",h),d.setDOMContent(s).addTo(n.getMap()),()=>{d.off("close",h),d.isOpen()&&d.remove()}},[]),S.useEffect(()=>{Oi(d.getElement(),e.style)},[e.style]),S.useImperativeHandle(t,()=>d,[]),d.isOpen()&&((d.getLngLat().lng!==e.longitude||d.getLngLat().lat!==e.latitude)&&d.setLngLat([e.longitude,e.latitude]),e.offset&&!ao(d.options.offset,e.offset)&&d.setOffset(e.offset),(d.options.anchor!==e.anchor||d.options.maxWidth!==e.maxWidth)&&(d.options.anchor=e.anchor,d.setMaxWidth(e.maxWidth)),d.options.className!==e.className)){const h=By(d.options.className),m=By(e.className);for(const p of h)m.has(p)||d.removeClassName(p);for(const p of m)h.has(p)||d.addClassName(p);d.options.className=e.className}return qw.createPortal(e.children,s)}const lz=S.memo(S.forwardRef(sz));function Wl(e,t,n,o){const s=S.useContext(zh),c=S.useMemo(()=>e(s),[]);return S.useEffect(()=>{const d=t,h=null,m=typeof t=="function"?t:null,{map:p}=s;return p.hasControl(c)||(p.addControl(c,d==null?void 0:d.position),h&&h(s)),()=>{m&&m(s),p.hasControl(c)&&p.removeControl(c)}},[]),c}function cz(e){const t=Wl(({mapLib:n})=>new n.AttributionControl(e),{position:e.position});return S.useEffect(()=>{Oi(t._container,e.style)},[e.style]),null}S.memo(cz);function dz(e){const t=Wl(({mapLib:n})=>new n.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)}),{position:e.position});return S.useEffect(()=>{Oi(t._controlContainer,e.style)},[e.style]),null}S.memo(dz);function uz(e,t){const n=S.useRef({props:e}),o=Wl(({mapLib:s})=>{const c=new s.GeolocateControl(e),d=c._setupUI;return c._setupUI=h=>{c._container.hasChildNodes()||d(h)},c.on("geolocate",h=>{var m,p;(p=(m=n.current.props).onGeolocate)===null||p===void 0||p.call(m,h)}),c.on("error",h=>{var m,p;(p=(m=n.current.props).onError)===null||p===void 0||p.call(m,h)}),c.on("outofmaxbounds",h=>{var m,p;(p=(m=n.current.props).onOutOfMaxBounds)===null||p===void 0||p.call(m,h)}),c.on("trackuserlocationstart",h=>{var m,p;(p=(m=n.current.props).onTrackUserLocationStart)===null||p===void 0||p.call(m,h)}),c.on("trackuserlocationend",h=>{var m,p;(p=(m=n.current.props).onTrackUserLocationEnd)===null||p===void 0||p.call(m,h)}),c},{position:e.position});return n.current.props=e,S.useImperativeHandle(t,()=>o,[]),S.useEffect(()=>{Oi(o._container,e.style)},[e.style]),null}S.memo(S.forwardRef(uz));function hz(e){const t=Wl(({mapLib:n})=>new n.NavigationControl(e),{position:e.position});return S.useEffect(()=>{Oi(t._container,e.style)},[e.style]),null}const fz=S.memo(hz);function pz(e){const t=Wl(({mapLib:c})=>new c.ScaleControl(e),{position:e.position}),n=S.useRef(e),o=n.current;n.current=e;const{style:s}=e;return e.maxWidth!==void 0&&e.maxWidth!==o.maxWidth&&(t.options.maxWidth=e.maxWidth),e.unit!==void 0&&e.unit!==o.unit&&t.setUnit(e.unit),S.useEffect(()=>{Oi(t._container,s)},[s]),null}S.memo(pz);const mz=U9(()=>import("./mapbox-gl-D16ahCLI.js").then(e=>e.m),[]),gz=S.forwardRef(function(t,n){return nz(t,n,mz)}),xz=az,bz=lz,vz=fz,yz=({property:e,isHovered:t,onClick:n,onMouseEnter:o,onMouseLeave:s})=>{const c=parseFloat(e.priceChangePercent),d=c>0,h=c<0;return a.jsxs(wz,{isHovered:t,isPriceUp:d,isPriceDown:h,onClick:n,onMouseEnter:o,onMouseLeave:s,children:[a.jsxs(jz,{children:[a.jsxs(Sz,{children:["$",e.tokenPrice]}),a.jsxs(kz,{isPriceUp:d,isPriceDown:h,children:[d?"+":"",e.priceChangePercent,"%"]})]}),t&&a.jsxs(Cz,{children:[a.jsx(Mz,{src:e.imageUrl,alt:e.name}),a.jsxs(_z,{children:[a.jsx(Tz,{children:e.name}),a.jsx(zz,{children:e.location}),a.jsx(Dz,{children:e.category})]})]})]})},wz=f.div`
  position: relative;
  cursor: pointer;
  z-index: ${e=>e.isHovered?10:1};
  transition: all 0.3s ease;
  transform: ${e=>e.isHovered?"scale(1.05)":"scale(1)"};
`,jz=f.div`
  background-color: #1A1A1D;
  color: white;
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 90px;
  border: 2px solid ${e=>e.isPriceUp?"#00C853":e.isPriceDown?"#FF3D00":"#1A1A1D"};
`,Sz=f.div`
  font-weight: bold;
  font-size: 14px;
`,kz=f.div`
  font-size: 12px;
  color: ${e=>e.isPriceUp?"#00C853":e.isPriceDown?"#FF3D00":"#FFFFFF"};
  margin-top: 2px;
`,Cz=f.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  background-color: #1A1A1D;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 100;
`,Mz=f.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`,_z=f.div`
  padding: 12px;
`,Tz=f.div`
  font-weight: bold;
  font-size: 14px;
  color: white;
  margin-bottom: 4px;
`,zz=f.div`
  font-size: 12px;
  color: #CCCCCC;
  margin-bottom: 4px;
`,Dz=f.div`
  font-size: 11px;
  color: #999999;
  background-color: rgba(255, 255, 255, 0.1);
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
`,Pz=({property:e})=>{const t=c=>c?c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0",n=parseFloat(e.priceChangePercent),o=n>0,s=n<0;return a.jsxs(Az,{children:[a.jsx(Ez,{src:e.imageUrl,alt:e.name}),a.jsxs(Oz,{children:[a.jsx(Rz,{children:e.name}),a.jsx(Lz,{children:e.location}),a.jsxs(Bz,{children:[a.jsxs(k0,{children:[a.jsx(C0,{children:"Token Price"}),a.jsxs(M0,{children:["$",e.tokenPrice]})]}),a.jsxs(k0,{children:[a.jsx(C0,{children:"Implied Value"}),a.jsxs(M0,{children:["$",t(e.marketCap)]})]}),a.jsxs(k0,{children:[a.jsx(C0,{children:"24h Volume"}),a.jsxs(M0,{children:["$",t(e.volume24h)]})]})]}),a.jsxs($z,{children:[a.jsxs(Nz,{isPriceUp:o,isPriceDown:s,children:[o?"+":"",e.priceChangePercent,"%"]}),a.jsx(Hz,{children:"24h Change"})]}),a.jsx(Fz,{children:e.category}),a.jsx(Vz,{children:e.description}),a.jsx(Uz,{children:"View Property"})]})]})},Az=f.div`
  width: 320px;
  background-color: #1A1A1D;
  border-radius: 8px;
  overflow: hidden;
`,Ez=f.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,Oz=f.div`
  padding: 16px;
`,Rz=f.h3`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin: 0 0 4px 0;
`,Lz=f.div`
  font-size: 14px;
  color: #CCCCCC;
  margin-bottom: 16px;
`,Bz=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`,k0=f.div`
  flex: 1;
`,C0=f.div`
  font-size: 12px;
  color: #999999;
  margin-bottom: 4px;
`,M0=f.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
`,$z=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,Nz=f.div`
  font-size: 16px;
  font-weight: bold;
  color: ${e=>e.isPriceUp?"#00C853":e.isPriceDown?"#FF3D00":"#FFFFFF"};
  margin-right: 8px;
`,Hz=f.div`
  font-size: 12px;
  color: #999999;
`,Fz=f.div`
  font-size: 12px;
  color: #CCCCCC;
  background-color: rgba(255, 255, 255, 0.1);
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
`,Vz=f.p`
  font-size: 14px;
  color: #CCCCCC;
  margin: 0 0 16px 0;
  line-height: 1.4;
`,Uz=f.button`
  width: 100%;
  background-color: #6200EA;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #7C4DFF;
  }
`,Iz="pk.eyJ1IjoibG9hZm1hcmtldHMiLCJhIjoiY2x3MnVnNWxvMDFrZTJrcGR5ZmF0ZXdwMCJ9.7ZlCb1bdgTqZm9M9wLXKvg",Yz={longitude:151.2093,latitude:-33.8688,zoom:12},qz=({properties:e,onViewportChange:t,onPropertyHover:n})=>{const[o,s]=S.useState(Yz),[c,d]=S.useState(null),[h,m]=S.useState(null);S.useEffect(()=>{t&&t(o)},[o,t]);const p=S.useMemo(()=>e.filter(y=>y.coordinates&&y.coordinates.lat&&y.coordinates.lng),[e]),x=y=>{d(y),n&&n(y)},v=y=>{m(y)};return a.jsx(Wz,{children:a.jsxs(gz,{mapboxAccessToken:Iz,initialViewState:o,onMove:y=>s(y.viewState),mapStyle:"mapbox://styles/mapbox/light-v11",style:{width:"100%",height:"100%"},children:[a.jsx(vz,{position:"top-right"}),p.map(y=>a.jsx(xz,{longitude:y.coordinates.lng,latitude:y.coordinates.lat,anchor:"bottom",children:a.jsx(yz,{property:y,isHovered:(c==null?void 0:c.id)===y.id,onClick:()=>v(y),onMouseEnter:()=>x(y),onMouseLeave:()=>x(null)})},y.id)),h&&a.jsx(bz,{anchor:"top",longitude:h.coordinates.lng,latitude:h.coordinates.lat,onClose:()=>m(null),closeOnClick:!1,offset:20,children:a.jsx(Pz,{property:h})})]})})},Wz=f.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  left: 0;
  
  .mapboxgl-popup-content {
    padding: 0;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,Gz=({properties:e,activeFilters:t,onFilterChange:n,hoveredProperty:o,onPropertyHover:s})=>{const c=e.filter(d=>t.length===0?!0:t.includes(d.type));return a.jsxs(Xz,{children:[a.jsxs(Qz,{children:[a.jsx(Zz,{children:"Filter Properties"}),a.jsxs(Kz,{children:[a.jsx(yd,{active:t.includes("luxury"),onClick:()=>n("luxury"),children:"Luxury Homes"}),a.jsx(yd,{active:t.includes("apartment"),onClick:()=>n("apartment"),children:"Premium Apartments"}),a.jsx(yd,{active:t.includes("commercial"),onClick:()=>n("commercial"),children:"Commercial"}),a.jsx(yd,{active:t.includes("industrial"),onClick:()=>n("industrial"),children:"Industrial"})]})]}),a.jsxs(Jz,{children:[c.length," Properties"]}),a.jsx(eD,{children:c.map(d=>a.jsx(tD,{isHovered:(o==null?void 0:o.id)===d.id,onMouseEnter:()=>s(d),onMouseLeave:()=>s(null),children:a.jsx(Io,{property:d,compact:!0})},d.id))})]})},Xz=f.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
`,Qz=f.div`
  margin-bottom: 16px;
`,Zz=f.h3`
  font-size: 16px;
  color: white;
  margin: 0 0 12px 0;
`,Kz=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,yd=f.button`
  background-color: ${e=>e.active?"#6200EA":"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.active?"white":"#CCCCCC"};
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.active?"#7C4DFF":"rgba(255, 255, 255, 0.15)"};
  }
`,Jz=f.div`
  font-size: 14px;
  color: #CCCCCC;
  margin-bottom: 16px;
`,eD=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,tD=f.div`
  transition: transform 0.2s;
  transform: ${e=>e.isHovered?"scale(1.02)":"scale(1)"};
  box-shadow: ${e=>e.isHovered?"0 4px 12px rgba(0, 0, 0, 0.2)":"none"};
  border-radius: 8px;
`,rD=({onClose:e})=>a.jsx(nD,{children:a.jsxs(oD,{onClick:e,children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M12 4L4 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Exit Map View"]})}),nD=f.div`
  position: absolute;
  top: 48px;
  left: 16px;
  z-index: 10;
  display: flex;
  gap: 8px;
`,oD=f.button`
  background-color: rgba(26, 26, 29, 0.8);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(26, 26, 29, 1);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`,iD=({properties:e,onClose:t})=>{const[n,o]=S.useState([]),[s,c]=S.useState(null),[d,h]=S.useState(null),m=S.useMemo(()=>e.map(y=>{if(y.coordinates)return y;const j=aD(y.location);return{...y,coordinates:j}}),[e]),p=y=>{o(j=>j.includes(y)?j.filter(w=>w!==y):[...j,y])},x=S.useMemo(()=>m,[m,s]),v=y=>{h(y)};return a.jsxs(sD,{children:[a.jsx(lD,{children:a.jsx(Gz,{properties:x,activeFilters:n,onFilterChange:p,hoveredProperty:d,onPropertyHover:v})}),a.jsxs(cD,{children:[a.jsx(qz,{properties:x.filter(y=>n.length===0?!0:n.includes(y.type)),onViewportChange:c,onPropertyHover:v}),a.jsx(rD,{onClose:t})]})]})},aD=e=>{const t={lat:-33.8688,lng:151.2093},n=(Math.random()-.5)*.1,o=(Math.random()-.5)*.1;return{"Vaucluse, Sydney":{lat:-33.8568,lng:151.278},"Bondi, Sydney":{lat:-33.891,lng:151.2745},"Double Bay, Sydney":{lat:-33.878,lng:151.24},"Circular Quay, Sydney":{lat:-33.861,lng:151.213},"Bondi Junction, Sydney":{lat:-33.8916,lng:151.2501},"Barangaroo, Sydney":{lat:-33.8605,lng:151.201},"Surry Hills, Sydney":{lat:-33.8845,lng:151.2115}}[e]||{lat:t.lat+n,lng:t.lng+o}},sD=f.div`
  display: flex;
  height: calc(100vh - 64px);
  width: 100vw;
  position: fixed;
  top: 64px; /* Height of the navigation bar */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  overflow: hidden;
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  transform: translateX(0);
  padding-top: 40px; /* Match spacing from the screenshot */
`,lD=f.div`
  width: 50%;
  max-width: 600px;
  height: 100%;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: var(--color-background);
  border-right: 1px solid var(--color-border);
  box-sizing: border-box;
`,cD=f.div`
  flex: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
`,dD=f.div`
  padding: ${e=>e.isMapView?"0":"2rem 0"};
  height: ${e=>e.isMapView?"calc(100vh - 64px)":"auto"};
  overflow: ${e=>e.isMapView?"hidden":"visible"};
  position: ${e=>e.isMapView?"relative":"static"};
  margin: 0;
  width: ${e=>e.isMapView?"100vw":"100%"};
  max-width: ${e=>e.isMapView?"none":"100%"};
`,uD=f.div`
  margin-bottom: 2rem;
  text-align: center;
`,hD=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,fD=f.p`
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto;
`,pD=f.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,il=f.button`
  padding: 0.75rem 1.5rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.05)"};
  }
`,al=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,wd=f.section`
  margin-bottom: 4rem;
`,jd=f.div`
  margin-bottom: 2rem;
`,Sd=f.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`,kd=f.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
`,mD=f.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0.25rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`,$y=f.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text)"};
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: all var(--transition-speed) ease;
  
  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
  }
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.1)"};
  }
`,gD=()=>{const[e,t]=S.useState([]),[n,o]=S.useState([]),[s,c]=S.useState("all"),[d,h]=S.useState(!0),{setIsMapViewActive:m}=$9(),[p,x]=S.useState(!1);S.useEffect(()=>{v()},[]),S.useEffect(()=>(p?(document.body.classList.add("map-view-active"),m(!0)):(document.body.classList.remove("map-view-active"),m(!1)),()=>{document.body.classList.remove("map-view-active"),m(!1)}),[p,m]),S.useEffect(()=>{y(s)},[s,e]);const v=async()=>{h(!0);try{const z=j();t(z),o(z),h(!1)}catch(z){console.error("Error fetching properties:",z),h(!1)}},y=z=>{if(z==="all")o(e);else{const D=e.filter(L=>L.type===z);o(D)}},j=()=>[{id:1,name:"42 Vaucluse Road",shortName:"Vaucluse",location:"Vaucluse",type:"residential",category:"Luxury Mansion",imageUrl:"https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"102,520",marketCap:"28,500,000",volume24h:"1,250,000",priceChangePercent:"1.20",bedrooms:7,bathrooms:6,carSpots:5,propertyType:"House",description:"Prestigious waterfront mansion with harbor views, 7 bedrooms, pool, and private jetty."},{id:2,name:"24 Wolseley Road",shortName:"Point Piper",location:"Point Piper",type:"residential",category:"Luxury Mansion",imageUrl:"https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"145,750",marketCap:"42,750,000",volume24h:"1,875,000",priceChangePercent:"2.35",bedrooms:6,bathrooms:5,carSpots:4,propertyType:"House",description:"Iconic waterfront estate with panoramic harbor views, 6 bedrooms, and private beach access."},{id:3,name:"18 Victoria Road",shortName:"Bellevue Hill",location:"Bellevue Hill",type:"residential",category:"Luxury Mansion",imageUrl:"https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"98,500",marketCap:"32,500,000",volume24h:"985,000",priceChangePercent:"-0.75",bedrooms:5,bathrooms:4,carSpots:3,propertyType:"House",description:"Heritage-listed mansion with tennis court, pool, and extensive gardens on 2,000sqm land."},{id:4,name:"Penthouse, 15 Cross Street",shortName:"Double Bay",location:"Double Bay",type:"apartment",category:"Luxury Apartment",imageUrl:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"78,300",marketCap:"18,750,000",volume24h:"1,120,000",priceChangePercent:"3.42",bedrooms:4,bathrooms:3,carSpots:2,propertyType:"Apartment",description:"Exclusive penthouse with 360° views, private elevator, and rooftop terrace with infinity pool."},{id:5,name:"Apartment 1201, 130 Elizabeth Street",shortName:"Elizabeth",location:"Sydney CBD",type:"apartment",category:"Luxury Apartment",imageUrl:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"65,400",marketCap:"15,750,000",volume24h:"850,000",priceChangePercent:"1.85",bedrooms:3,bathrooms:2,carSpots:1,propertyType:"Apartment",description:"Premium high-rise apartment with city views, 3 bedrooms, and access to 5-star amenities."},{id:6,name:"Penthouse, 71 Macquarie Street",shortName:"Macquarie",location:"Circular Quay",type:"apartment",category:"Luxury Apartment",imageUrl:"https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"92,800",marketCap:"22,450,000",volume24h:"750,000",priceChangePercent:"0.87",bedrooms:4,bathrooms:3,carSpots:2,propertyType:"Apartment",description:"Harbor-front penthouse with Opera House views, 4 bedrooms, and private wine cellar.",agent:{name:"Steven Chen",agency:"The Agency",photoUrl:"https://randomuser.me/api/portraits/men/37.jpg",agencyLogoUrl:"https://via.placeholder.com/100x40?text=THE+AGENCY"}},{id:7,name:"Westfield Shopping Centre",location:"Bondi Junction",type:"commercial",category:"Shopping Centre",imageUrl:N9,tokenPrice:"125,000",marketCap:"75,000,000",volume24h:"2,500,000",priceChangePercent:"4.25",description:"Prime retail location with over 250 stores and annual foot traffic of 28 million visitors.",agent:{name:"Steven Chen",agency:"The Agency",photoUrl:"https://randomuser.me/api/portraits/men/32.jpg",agencyLogoUrl:"https://via.placeholder.com/100x40?text=THE+AGENCY"}},{id:8,name:"Barangaroo Office Tower",location:"Barangaroo",type:"commercial",category:"Office Building",imageUrl:H9,tokenPrice:"185,750",marketCap:"120,500,000",volume24h:"2,850,000",priceChangePercent:"-1.25",description:"A-grade office tower with harbor views, fully leased to blue-chip tenants on 10+ year terms.",agent:{name:"Jessica Wong",agency:"The Agency",photoUrl:"https://randomuser.me/api/portraits/women/44.jpg",agencyLogoUrl:"https://via.placeholder.com/100x40?text=THE+AGENCY"}},{id:9,name:"AI Power Coffee Stand",location:"Surry Hills",type:"commercial",category:"Retail - F&B",imageUrl:"https://i0.wp.com/thespoon.tech/wp-content/uploads/2018/06/DSC00168-scaled.jpg?w=2560&ssl=1",tokenPrice:"100",marketCap:"50,500",volume24h:"10,200",priceChangePercent:"-0.45",description:"Innovative AI-powered coffee stand with automated baristas and premium coffee beans.",agent:{name:"Michael Zhang",agency:"The Agency",photoUrl:"https://randomuser.me/api/portraits/men/22.jpg",agencyLogoUrl:"https://via.placeholder.com/100x40?text=THE+AGENCY"}},{id:10,name:"Alexandria Logistics Hub",location:"Alexandria",type:"industrial",category:"Logistics Facility",imageUrl:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"75,200",marketCap:"52,450,000",volume24h:"950,000",priceChangePercent:"0.95",description:"State-of-the-art logistics facility with automated systems, leased to major e-commerce company.",agent:{name:"Sarah Johnson",agency:"The Agency",photoUrl:"https://randomuser.me/api/portraits/women/28.jpg",agencyLogoUrl:"https://via.placeholder.com/100x40?text=THE+AGENCY"}},{id:11,name:"Eastern Creek Data Center",location:"Eastern Creek",type:"industrial",category:"Data Center",imageUrl:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"68,750",marketCap:"48,250,000",volume24h:"875,000",priceChangePercent:"1.65",description:"Modern distribution center with excellent motorway access, solar power, and long-term tenant."},{id:12,name:"Port Botany Warehouse",location:"Port Botany",type:"industrial",category:"Warehouse",imageUrl:"https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",tokenPrice:"55,400",marketCap:"38,750,000",volume24h:"650,000",priceChangePercent:"-0.32",description:"Strategic port-side warehouse with customs facilities and direct access to shipping terminals."}],w=n.filter(z=>z.type==="residential"),C=n.filter(z=>z.type==="apartment"),k=n.filter(z=>z.type==="commercial"),_=n.filter(z=>z.type==="industrial");return a.jsx(dD,{isMapView:p,children:p?a.jsx(iD,{properties:e,onClose:()=>x(!1)}):a.jsxs(a.Fragment,{children:[a.jsxs(uD,{children:[a.jsx(hD,{children:"Tokenized Properties"}),a.jsx(fD,{children:"Invest in fractional ownership of premium real estate assets"})]}),a.jsxs(mD,{children:[a.jsxs($y,{active:!p,onClick:()=>x(!1),children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M4 6H20M4 12H20M4 18H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),"List View"]}),a.jsxs($y,{active:p,onClick:()=>x(!0),children:[a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M9 20L3 17V4L9 7M9 20V7M9 20L15 17M9 7L15 4M15 17V4M15 17L21 20V7L15 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"Map View"]})]}),a.jsxs(pD,{children:[a.jsx(il,{active:s==="all",onClick:()=>c("all"),children:"All Properties"}),a.jsx(il,{active:s==="residential",onClick:()=>c("residential"),children:"Luxury Homes"}),a.jsx(il,{active:s==="apartment",onClick:()=>c("apartment"),children:"Premium Apartments"}),a.jsx(il,{active:s==="commercial",onClick:()=>c("commercial"),children:"Commercial"}),a.jsx(il,{active:s==="industrial",onClick:()=>c("industrial"),children:"Industrial"})]}),d?a.jsx("div",{children:"Loading properties..."}):a.jsx(a.Fragment,{children:s==="all"?a.jsxs(a.Fragment,{children:[w.length>0&&a.jsxs(wd,{children:[a.jsxs(jd,{children:[a.jsx(Sd,{children:"Luxury Residential Properties"}),a.jsx(kd,{children:"Prestigious homes in Australia's most exclusive neighborhoods"})]}),a.jsx(al,{children:w.map(z=>a.jsx(Io,{property:z},z.id))})]}),C.length>0&&a.jsxs(wd,{children:[a.jsxs(jd,{children:[a.jsx(Sd,{children:"Premium Apartments"}),a.jsx(kd,{children:"High-end apartments and penthouses in prime locations"})]}),a.jsx(al,{children:C.map(z=>a.jsx(Io,{property:z},z.id))})]}),k.length>0&&a.jsxs(wd,{children:[a.jsxs(jd,{children:[a.jsx(Sd,{children:"Commercial Properties"}),a.jsx(kd,{children:"Retail centers and office buildings with premium tenants"})]}),a.jsx(al,{children:k.map(z=>a.jsx(Io,{property:z},z.id))})]}),_.length>0&&a.jsxs(wd,{children:[a.jsxs(jd,{children:[a.jsx(Sd,{children:"Industrial Assets"}),a.jsx(kd,{children:"High-performing logistics and industrial facilities"})]}),a.jsx(al,{children:_.map(z=>a.jsx(Io,{property:z},z.id))})]})]}):a.jsx(al,{children:n.map(z=>a.jsx(Io,{property:z},z.id))})})]})})},a4=S.createContext(),xD=()=>S.useContext(a4),bD=({children:e})=>{const[t,n]=S.useState({value:325e3,formatted:"325,000.00",change:{value:"1625.00",percentage:"0.50",isPositive:!0}}),o=s=>s.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2});return S.useEffect(()=>{const s=setInterval(()=>{n(c=>{const d=.2+Math.random()*1.3,h=c.value*(d/100);let m=c.value+h;m>35e4&&(m=35e4-(m-35e4),m=Math.max(m,3e5)),m<3e5&&(m=3e5+(3e5-m),m=Math.min(m,35e4));const p=m-c.value,x=(p/c.value*100).toFixed(2);return{value:m,formatted:o(m),change:{value:p.toFixed(2),percentage:x,isPositive:p>=0}}})},5e3);return()=>clearInterval(s)},[]),a.jsx(a4.Provider,{value:t,children:e})};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Gl(e){return e+.5|0}const Yo=(e,t,n)=>Math.max(Math.min(e,n),t);function jl(e){return Yo(Gl(e*2.55),0,255)}function Wo(e){return Yo(Gl(e*255),0,255)}function oo(e){return Yo(Gl(e/2.55)/100,0,1)}function Ny(e){return Yo(Gl(e*100),0,100)}const Kr={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Wm=[..."0123456789ABCDEF"],vD=e=>Wm[e&15],yD=e=>Wm[(e&240)>>4]+Wm[e&15],Cd=e=>(e&240)>>4===(e&15),wD=e=>Cd(e.r)&&Cd(e.g)&&Cd(e.b)&&Cd(e.a);function jD(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&Kr[e[1]]*17,g:255&Kr[e[2]]*17,b:255&Kr[e[3]]*17,a:t===5?Kr[e[4]]*17:255}:(t===7||t===9)&&(n={r:Kr[e[1]]<<4|Kr[e[2]],g:Kr[e[3]]<<4|Kr[e[4]],b:Kr[e[5]]<<4|Kr[e[6]],a:t===9?Kr[e[7]]<<4|Kr[e[8]]:255})),n}const SD=(e,t)=>e<255?t(e):"";function kD(e){var t=wD(e)?vD:yD;return e?"#"+t(e.r)+t(e.g)+t(e.b)+SD(e.a,t):void 0}const CD=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function s4(e,t,n){const o=t*Math.min(n,1-n),s=(c,d=(c+e/30)%12)=>n-o*Math.max(Math.min(d-3,9-d,1),-1);return[s(0),s(8),s(4)]}function MD(e,t,n){const o=(s,c=(s+e/60)%6)=>n-n*t*Math.max(Math.min(c,4-c,1),0);return[o(5),o(3),o(1)]}function _D(e,t,n){const o=s4(e,1,.5);let s;for(t+n>1&&(s=1/(t+n),t*=s,n*=s),s=0;s<3;s++)o[s]*=1-t-n,o[s]+=t;return o}function TD(e,t,n,o,s){return e===s?(t-n)/o+(t<n?6:0):t===s?(n-e)/o+2:(e-t)/o+4}function Og(e){const n=e.r/255,o=e.g/255,s=e.b/255,c=Math.max(n,o,s),d=Math.min(n,o,s),h=(c+d)/2;let m,p,x;return c!==d&&(x=c-d,p=h>.5?x/(2-c-d):x/(c+d),m=TD(n,o,s,x,c),m=m*60+.5),[m|0,p||0,h]}function Rg(e,t,n,o){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,o)).map(Wo)}function Lg(e,t,n){return Rg(s4,e,t,n)}function zD(e,t,n){return Rg(_D,e,t,n)}function DD(e,t,n){return Rg(MD,e,t,n)}function l4(e){return(e%360+360)%360}function PD(e){const t=CD.exec(e);let n=255,o;if(!t)return;t[5]!==o&&(n=t[6]?jl(+t[5]):Wo(+t[5]));const s=l4(+t[2]),c=+t[3]/100,d=+t[4]/100;return t[1]==="hwb"?o=zD(s,c,d):t[1]==="hsv"?o=DD(s,c,d):o=Lg(s,c,d),{r:o[0],g:o[1],b:o[2],a:n}}function AD(e,t){var n=Og(e);n[0]=l4(n[0]+t),n=Lg(n),e.r=n[0],e.g=n[1],e.b=n[2]}function ED(e){if(!e)return;const t=Og(e),n=t[0],o=Ny(t[1]),s=Ny(t[2]);return e.a<255?`hsla(${n}, ${o}%, ${s}%, ${oo(e.a)})`:`hsl(${n}, ${o}%, ${s}%)`}const Hy={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Fy={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function OD(){const e={},t=Object.keys(Fy),n=Object.keys(Hy);let o,s,c,d,h;for(o=0;o<t.length;o++){for(d=h=t[o],s=0;s<n.length;s++)c=n[s],h=h.replace(c,Hy[c]);c=parseInt(Fy[d],16),e[h]=[c>>16&255,c>>8&255,c&255]}return e}let Md;function RD(e){Md||(Md=OD(),Md.transparent=[0,0,0,0]);const t=Md[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const LD=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function BD(e){const t=LD.exec(e);let n=255,o,s,c;if(t){if(t[7]!==o){const d=+t[7];n=t[8]?jl(d):Yo(d*255,0,255)}return o=+t[1],s=+t[3],c=+t[5],o=255&(t[2]?jl(o):Yo(o,0,255)),s=255&(t[4]?jl(s):Yo(s,0,255)),c=255&(t[6]?jl(c):Yo(c,0,255)),{r:o,g:s,b:c,a:n}}}function $D(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${oo(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const _0=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,va=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function ND(e,t,n){const o=va(oo(e.r)),s=va(oo(e.g)),c=va(oo(e.b));return{r:Wo(_0(o+n*(va(oo(t.r))-o))),g:Wo(_0(s+n*(va(oo(t.g))-s))),b:Wo(_0(c+n*(va(oo(t.b))-c))),a:e.a+n*(t.a-e.a)}}function _d(e,t,n){if(e){let o=Og(e);o[t]=Math.max(0,Math.min(o[t]+o[t]*n,t===0?360:1)),o=Lg(o),e.r=o[0],e.g=o[1],e.b=o[2]}}function c4(e,t){return e&&Object.assign(t||{},e)}function Vy(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Wo(e[3]))):(t=c4(e,{r:0,g:0,b:0,a:1}),t.a=Wo(t.a)),t}function HD(e){return e.charAt(0)==="r"?BD(e):PD(e)}class Rl{constructor(t){if(t instanceof Rl)return t;const n=typeof t;let o;n==="object"?o=Vy(t):n==="string"&&(o=jD(t)||RD(t)||HD(t)),this._rgb=o,this._valid=!!o}get valid(){return this._valid}get rgb(){var t=c4(this._rgb);return t&&(t.a=oo(t.a)),t}set rgb(t){this._rgb=Vy(t)}rgbString(){return this._valid?$D(this._rgb):void 0}hexString(){return this._valid?kD(this._rgb):void 0}hslString(){return this._valid?ED(this._rgb):void 0}mix(t,n){if(t){const o=this.rgb,s=t.rgb;let c;const d=n===c?.5:n,h=2*d-1,m=o.a-s.a,p=((h*m===-1?h:(h+m)/(1+h*m))+1)/2;c=1-p,o.r=255&p*o.r+c*s.r+.5,o.g=255&p*o.g+c*s.g+.5,o.b=255&p*o.b+c*s.b+.5,o.a=d*o.a+(1-d)*s.a,this.rgb=o}return this}interpolate(t,n){return t&&(this._rgb=ND(this._rgb,t._rgb,n)),this}clone(){return new Rl(this.rgb)}alpha(t){return this._rgb.a=Wo(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Gl(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return _d(this._rgb,2,t),this}darken(t){return _d(this._rgb,2,-t),this}saturate(t){return _d(this._rgb,1,t),this}desaturate(t){return _d(this._rgb,1,-t),this}rotate(t){return AD(this._rgb,t),this}}/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function eo(){}const FD=(()=>{let e=0;return()=>e++})();function mt(e){return e==null}function qt(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Xe(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function mr(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Tn(e,t){return mr(e)?e:t}function We(e,t){return typeof e>"u"?t:e}const VD=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function bt(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function at(e,t,n,o){let s,c,d;if(qt(e))for(c=e.length,s=0;s<c;s++)t.call(n,e[s],s);else if(Xe(e))for(d=Object.keys(e),c=d.length,s=0;s<c;s++)t.call(n,e[d[s]],d[s])}function nh(e,t){let n,o,s,c;if(!e||!t||e.length!==t.length)return!1;for(n=0,o=e.length;n<o;++n)if(s=e[n],c=t[n],s.datasetIndex!==c.datasetIndex||s.index!==c.index)return!1;return!0}function oh(e){if(qt(e))return e.map(oh);if(Xe(e)){const t=Object.create(null),n=Object.keys(e),o=n.length;let s=0;for(;s<o;++s)t[n[s]]=oh(e[n[s]]);return t}return e}function d4(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function UD(e,t,n,o){if(!d4(e))return;const s=t[e],c=n[e];Xe(s)&&Xe(c)?Ll(s,c,o):t[e]=oh(c)}function Ll(e,t,n){const o=qt(t)?t:[t],s=o.length;if(!Xe(e))return e;n=n||{};const c=n.merger||UD;let d;for(let h=0;h<s;++h){if(d=o[h],!Xe(d))continue;const m=Object.keys(d);for(let p=0,x=m.length;p<x;++p)c(m[p],e,d,n)}return e}function Ml(e,t){return Ll(e,t,{merger:ID})}function ID(e,t,n){if(!d4(e))return;const o=t[e],s=n[e];Xe(o)&&Xe(s)?Ml(o,s):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=oh(s))}const Uy={"":e=>e,x:e=>e.x,y:e=>e.y};function YD(e){const t=e.split("."),n=[];let o="";for(const s of t)o+=s,o.endsWith("\\")?o=o.slice(0,-1)+".":(n.push(o),o="");return n}function qD(e){const t=YD(e);return n=>{for(const o of t){if(o==="")break;n=n&&n[o]}return n}}function ih(e,t){return(Uy[t]||(Uy[t]=qD(t)))(e)}function Bg(e){return e.charAt(0).toUpperCase()+e.slice(1)}const ah=e=>typeof e<"u",Xo=e=>typeof e=="function",Iy=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function WD(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const er=Math.PI,mn=2*er,GD=mn+er,sh=Number.POSITIVE_INFINITY,XD=er/180,hn=er/2,mi=er/4,Yy=er*2/3,u4=Math.log10,Ia=Math.sign;function _l(e,t,n){return Math.abs(e-t)<n}function qy(e){const t=Math.round(e);e=_l(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(u4(e))),o=e/n;return(o<=1?1:o<=2?2:o<=5?5:10)*n}function QD(e){const t=[],n=Math.sqrt(e);let o;for(o=1;o<n;o++)e%o===0&&(t.push(o),t.push(e/o));return n===(n|0)&&t.push(n),t.sort((s,c)=>s-c).pop(),t}function ZD(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function Bl(e){return!ZD(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function KD(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function JD(e,t,n){let o,s,c;for(o=0,s=e.length;o<s;o++)c=e[o][n],isNaN(c)||(t.min=Math.min(t.min,c),t.max=Math.max(t.max,c))}function ki(e){return e*(er/180)}function eP(e){return e*(180/er)}function Wy(e){if(!mr(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function tP(e,t){const n=t.x-e.x,o=t.y-e.y,s=Math.sqrt(n*n+o*o);let c=Math.atan2(o,n);return c<-.5*er&&(c+=mn),{angle:c,distance:s}}function Gm(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function rP(e,t){return(e-t+GD)%mn-er}function An(e){return(e%mn+mn)%mn}function h4(e,t,n,o){const s=An(e),c=An(t),d=An(n),h=An(c-s),m=An(d-s),p=An(s-c),x=An(s-d);return s===c||s===d||o&&c===d||h>m&&p<x}function Jr(e,t,n){return Math.max(t,Math.min(n,e))}function nP(e){return Jr(e,-32768,32767)}function Ra(e,t,n,o=1e-6){return e>=Math.min(t,n)-o&&e<=Math.max(t,n)+o}function $g(e,t,n){n=n||(d=>e[d]<t);let o=e.length-1,s=0,c;for(;o-s>1;)c=s+o>>1,n(c)?s=c:o=c;return{lo:s,hi:o}}const Ci=(e,t,n,o)=>$g(e,n,o?s=>{const c=e[s][t];return c<n||c===n&&e[s+1][t]===n}:s=>e[s][t]<n),oP=(e,t,n)=>$g(e,n,o=>e[o][t]>=n);function iP(e,t,n){let o=0,s=e.length;for(;o<s&&e[o]<t;)o++;for(;s>o&&e[s-1]>n;)s--;return o>0||s<e.length?e.slice(o,s):e}const f4=["push","pop","shift","splice","unshift"];function aP(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),f4.forEach(n=>{const o="_onData"+Bg(n),s=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...c){const d=s.apply(this,c);return e._chartjs.listeners.forEach(h=>{typeof h[o]=="function"&&h[o](...c)}),d}})})}function Gy(e,t){const n=e._chartjs;if(!n)return;const o=n.listeners,s=o.indexOf(t);s!==-1&&o.splice(s,1),!(o.length>0)&&(f4.forEach(c=>{delete e[c]}),delete e._chartjs)}function sP(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const p4=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function m4(e,t){let n=[],o=!1;return function(...s){n=s,o||(o=!0,p4.call(window,()=>{o=!1,e.apply(t,n)}))}}function lP(e,t){let n;return function(...o){return t?(clearTimeout(n),n=setTimeout(e,t,o)):e.apply(this,o),t}}const Ng=e=>e==="start"?"left":e==="end"?"right":"center",ur=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,cP=(e,t,n,o)=>e===(o?"left":"right")?n:e==="center"?(t+n)/2:t;function dP(e,t,n){const o=t.length;let s=0,c=o;if(e._sorted){const{iScale:d,vScale:h,_parsed:m}=e,p=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,x=d.axis,{min:v,max:y,minDefined:j,maxDefined:w}=d.getUserBounds();if(j){if(s=Math.min(Ci(m,x,v).lo,n?o:Ci(t,x,d.getPixelForValue(v)).lo),p){const C=m.slice(0,s+1).reverse().findIndex(k=>!mt(k[h.axis]));s-=Math.max(0,C)}s=Jr(s,0,o-1)}if(w){let C=Math.max(Ci(m,d.axis,y,!0).hi+1,n?0:Ci(t,x,d.getPixelForValue(y),!0).hi+1);if(p){const k=m.slice(C-1).findIndex(_=>!mt(_[h.axis]));C+=Math.max(0,k)}c=Jr(C,s,o)-s}else c=o-s}return{start:s,count:c}}function uP(e){const{xScale:t,yScale:n,_scaleRanges:o}=e,s={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!o)return e._scaleRanges=s,!0;const c=o.xmin!==t.min||o.xmax!==t.max||o.ymin!==n.min||o.ymax!==n.max;return Object.assign(o,s),c}const Td=e=>e===0||e===1,Xy=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*mn/n)),Qy=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*mn/n)+1,Tl={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*hn)+1,easeOutSine:e=>Math.sin(e*hn),easeInOutSine:e=>-.5*(Math.cos(er*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>Td(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>Td(e)?e:Xy(e,.075,.3),easeOutElastic:e=>Td(e)?e:Qy(e,.075,.3),easeInOutElastic(e){return Td(e)?e:e<.5?.5*Xy(e*2,.1125,.45):.5+.5*Qy(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Tl.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Tl.easeInBounce(e*2)*.5:Tl.easeOutBounce(e*2-1)*.5+.5};function Hg(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Zy(e){return Hg(e)?e:new Rl(e)}function T0(e){return Hg(e)?e:new Rl(e).saturate(.5).darken(.1).hexString()}const hP=["x","y","borderWidth","radius","tension"],fP=["color","borderColor","backgroundColor"];function pP(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:fP},numbers:{type:"number",properties:hP}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function mP(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Ky=new Map;function gP(e,t){t=t||{};const n=e+JSON.stringify(t);let o=Ky.get(n);return o||(o=new Intl.NumberFormat(e,t),Ky.set(n,o)),o}function g4(e,t,n){return gP(t,n).format(e)}const xP={values(e){return qt(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const o=this.chart.options.locale;let s,c=e;if(n.length>1){const p=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(p<1e-4||p>1e15)&&(s="scientific"),c=bP(e,n)}const d=u4(Math.abs(c)),h=isNaN(d)?1:Math.max(Math.min(-1*Math.floor(d),20),0),m={notation:s,minimumFractionDigits:h,maximumFractionDigits:h};return Object.assign(m,this.options.ticks.format),g4(e,o,m)}};function bP(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var x4={formatters:xP};function vP(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:x4.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Ai=Object.create(null),Xm=Object.create(null);function zl(e,t){if(!t)return e;const n=t.split(".");for(let o=0,s=n.length;o<s;++o){const c=n[o];e=e[c]||(e[c]=Object.create(null))}return e}function z0(e,t,n){return typeof t=="string"?Ll(zl(e,t),n):Ll(zl(e,""),t)}class yP{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=o=>o.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(o,s)=>T0(s.backgroundColor),this.hoverBorderColor=(o,s)=>T0(s.borderColor),this.hoverColor=(o,s)=>T0(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return z0(this,t,n)}get(t){return zl(this,t)}describe(t,n){return z0(Xm,t,n)}override(t,n){return z0(Ai,t,n)}route(t,n,o,s){const c=zl(this,t),d=zl(this,o),h="_"+n;Object.defineProperties(c,{[h]:{value:c[n],writable:!0},[n]:{enumerable:!0,get(){const m=this[h],p=d[s];return Xe(m)?Object.assign({},p,m):We(m,p)},set(m){this[h]=m}}})}apply(t){t.forEach(n=>n(this))}}var Ot=new yP({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[pP,mP,vP]);function wP(e){return!e||mt(e.size)||mt(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Jy(e,t,n,o,s){let c=t[s];return c||(c=t[s]=e.measureText(s).width,n.push(s)),c>o&&(o=c),o}function gi(e,t,n){const o=e.currentDevicePixelRatio,s=n!==0?Math.max(n/2,.5):0;return Math.round((t-s)*o)/o+s}function e2(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Qm(e,t,n,o){b4(e,t,n,o,null)}function b4(e,t,n,o,s){let c,d,h,m,p,x,v,y;const j=t.pointStyle,w=t.rotation,C=t.radius;let k=(w||0)*XD;if(j&&typeof j=="object"&&(c=j.toString(),c==="[object HTMLImageElement]"||c==="[object HTMLCanvasElement]")){e.save(),e.translate(n,o),e.rotate(k),e.drawImage(j,-j.width/2,-j.height/2,j.width,j.height),e.restore();return}if(!(isNaN(C)||C<=0)){switch(e.beginPath(),j){default:s?e.ellipse(n,o,s/2,C,0,0,mn):e.arc(n,o,C,0,mn),e.closePath();break;case"triangle":x=s?s/2:C,e.moveTo(n+Math.sin(k)*x,o-Math.cos(k)*C),k+=Yy,e.lineTo(n+Math.sin(k)*x,o-Math.cos(k)*C),k+=Yy,e.lineTo(n+Math.sin(k)*x,o-Math.cos(k)*C),e.closePath();break;case"rectRounded":p=C*.516,m=C-p,d=Math.cos(k+mi)*m,v=Math.cos(k+mi)*(s?s/2-p:m),h=Math.sin(k+mi)*m,y=Math.sin(k+mi)*(s?s/2-p:m),e.arc(n-v,o-h,p,k-er,k-hn),e.arc(n+y,o-d,p,k-hn,k),e.arc(n+v,o+h,p,k,k+hn),e.arc(n-y,o+d,p,k+hn,k+er),e.closePath();break;case"rect":if(!w){m=Math.SQRT1_2*C,x=s?s/2:m,e.rect(n-x,o-m,2*x,2*m);break}k+=mi;case"rectRot":v=Math.cos(k)*(s?s/2:C),d=Math.cos(k)*C,h=Math.sin(k)*C,y=Math.sin(k)*(s?s/2:C),e.moveTo(n-v,o-h),e.lineTo(n+y,o-d),e.lineTo(n+v,o+h),e.lineTo(n-y,o+d),e.closePath();break;case"crossRot":k+=mi;case"cross":v=Math.cos(k)*(s?s/2:C),d=Math.cos(k)*C,h=Math.sin(k)*C,y=Math.sin(k)*(s?s/2:C),e.moveTo(n-v,o-h),e.lineTo(n+v,o+h),e.moveTo(n+y,o-d),e.lineTo(n-y,o+d);break;case"star":v=Math.cos(k)*(s?s/2:C),d=Math.cos(k)*C,h=Math.sin(k)*C,y=Math.sin(k)*(s?s/2:C),e.moveTo(n-v,o-h),e.lineTo(n+v,o+h),e.moveTo(n+y,o-d),e.lineTo(n-y,o+d),k+=mi,v=Math.cos(k)*(s?s/2:C),d=Math.cos(k)*C,h=Math.sin(k)*C,y=Math.sin(k)*(s?s/2:C),e.moveTo(n-v,o-h),e.lineTo(n+v,o+h),e.moveTo(n+y,o-d),e.lineTo(n-y,o+d);break;case"line":d=s?s/2:Math.cos(k)*C,h=Math.sin(k)*C,e.moveTo(n-d,o-h),e.lineTo(n+d,o+h);break;case"dash":e.moveTo(n,o),e.lineTo(n+Math.cos(k)*(s?s/2:C),o+Math.sin(k)*C);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function $l(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function Dh(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function Ph(e){e.restore()}function jP(e,t,n,o,s){if(!t)return e.lineTo(n.x,n.y);if(s==="middle"){const c=(t.x+n.x)/2;e.lineTo(c,t.y),e.lineTo(c,n.y)}else s==="after"!=!!o?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function SP(e,t,n,o){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(o?t.cp1x:t.cp2x,o?t.cp1y:t.cp2y,o?n.cp2x:n.cp1x,o?n.cp2y:n.cp1y,n.x,n.y)}function kP(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),mt(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function CP(e,t,n,o,s){if(s.strikethrough||s.underline){const c=e.measureText(o),d=t-c.actualBoundingBoxLeft,h=t+c.actualBoundingBoxRight,m=n-c.actualBoundingBoxAscent,p=n+c.actualBoundingBoxDescent,x=s.strikethrough?(m+p)/2:p;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=s.decorationWidth||2,e.moveTo(d,x),e.lineTo(h,x),e.stroke()}}function MP(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Nl(e,t,n,o,s,c={}){const d=qt(t)?t:[t],h=c.strokeWidth>0&&c.strokeColor!=="";let m,p;for(e.save(),e.font=s.string,kP(e,c),m=0;m<d.length;++m)p=d[m],c.backdrop&&MP(e,c.backdrop),h&&(c.strokeColor&&(e.strokeStyle=c.strokeColor),mt(c.strokeWidth)||(e.lineWidth=c.strokeWidth),e.strokeText(p,n,o,c.maxWidth)),e.fillText(p,n,o,c.maxWidth),CP(e,n,o,p,c),o+=Number(s.lineHeight);e.restore()}function Zm(e,t){const{x:n,y:o,w:s,h:c,radius:d}=t;e.arc(n+d.topLeft,o+d.topLeft,d.topLeft,1.5*er,er,!0),e.lineTo(n,o+c-d.bottomLeft),e.arc(n+d.bottomLeft,o+c-d.bottomLeft,d.bottomLeft,er,hn,!0),e.lineTo(n+s-d.bottomRight,o+c),e.arc(n+s-d.bottomRight,o+c-d.bottomRight,d.bottomRight,hn,0,!0),e.lineTo(n+s,o+d.topRight),e.arc(n+s-d.topRight,o+d.topRight,d.topRight,0,-hn,!0),e.lineTo(n+d.topLeft,o)}const _P=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,TP=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function zP(e,t){const n=(""+e).match(_P);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const DP=e=>+e||0;function v4(e,t){const n={},o=Xe(t),s=o?Object.keys(t):t,c=Xe(e)?o?d=>We(e[d],e[t[d]]):d=>e[d]:()=>e;for(const d of s)n[d]=DP(c(d));return n}function PP(e){return v4(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Dl(e){return v4(e,["topLeft","topRight","bottomLeft","bottomRight"])}function rn(e){const t=PP(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function pr(e,t){e=e||{},t=t||Ot.font;let n=We(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let o=We(e.style,t.style);o&&!(""+o).match(TP)&&(console.warn('Invalid font style specified: "'+o+'"'),o=void 0);const s={family:We(e.family,t.family),lineHeight:zP(We(e.lineHeight,t.lineHeight),n),size:n,style:o,weight:We(e.weight,t.weight),string:""};return s.string=wP(s),s}function zd(e,t,n,o){let s,c,d;for(s=0,c=e.length;s<c;++s)if(d=e[s],d!==void 0&&d!==void 0)return d}function AP(e,t,n){const{min:o,max:s}=e,c=VD(t,(s-o)/2),d=(h,m)=>n&&h===0?0:h+m;return{min:d(o,-Math.abs(c)),max:d(s,c)}}function Ri(e,t){return Object.assign(Object.create(e),t)}function Fg(e,t=[""],n,o,s=()=>e[0]){const c=n||e;typeof o>"u"&&(o=S4("_fallback",e));const d={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:c,_fallback:o,_getTarget:s,override:h=>Fg([h,...e],t,c,o)};return new Proxy(d,{deleteProperty(h,m){return delete h[m],delete h._keys,delete e[0][m],!0},get(h,m){return w4(h,m,()=>HP(m,t,e,h))},getOwnPropertyDescriptor(h,m){return Reflect.getOwnPropertyDescriptor(h._scopes[0],m)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(h,m){return r2(h).includes(m)},ownKeys(h){return r2(h)},set(h,m,p){const x=h._storage||(h._storage=s());return h[m]=x[m]=p,delete h._keys,!0}})}function Ya(e,t,n,o){const s={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:y4(e,o),setContext:c=>Ya(e,c,n,o),override:c=>Ya(e.override(c),t,n,o)};return new Proxy(s,{deleteProperty(c,d){return delete c[d],delete e[d],!0},get(c,d,h){return w4(c,d,()=>OP(c,d,h))},getOwnPropertyDescriptor(c,d){return c._descriptors.allKeys?Reflect.has(e,d)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,d)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(c,d){return Reflect.has(e,d)},ownKeys(){return Reflect.ownKeys(e)},set(c,d,h){return e[d]=h,delete c[d],!0}})}function y4(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:o=t.indexable,_allKeys:s=t.allKeys}=e;return{allKeys:s,scriptable:n,indexable:o,isScriptable:Xo(n)?n:()=>n,isIndexable:Xo(o)?o:()=>o}}const EP=(e,t)=>e?e+Bg(t):t,Vg=(e,t)=>Xe(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function w4(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const o=n();return e[t]=o,o}function OP(e,t,n){const{_proxy:o,_context:s,_subProxy:c,_descriptors:d}=e;let h=o[t];return Xo(h)&&d.isScriptable(t)&&(h=RP(t,h,e,n)),qt(h)&&h.length&&(h=LP(t,h,e,d.isIndexable)),Vg(t,h)&&(h=Ya(h,s,c&&c[t],d)),h}function RP(e,t,n,o){const{_proxy:s,_context:c,_subProxy:d,_stack:h}=n;if(h.has(e))throw new Error("Recursion detected: "+Array.from(h).join("->")+"->"+e);h.add(e);let m=t(c,d||o);return h.delete(e),Vg(e,m)&&(m=Ug(s._scopes,s,e,m)),m}function LP(e,t,n,o){const{_proxy:s,_context:c,_subProxy:d,_descriptors:h}=n;if(typeof c.index<"u"&&o(e))return t[c.index%t.length];if(Xe(t[0])){const m=t,p=s._scopes.filter(x=>x!==m);t=[];for(const x of m){const v=Ug(p,s,e,x);t.push(Ya(v,c,d&&d[e],h))}}return t}function j4(e,t,n){return Xo(e)?e(t,n):e}const BP=(e,t)=>e===!0?t:typeof e=="string"?ih(t,e):void 0;function $P(e,t,n,o,s){for(const c of t){const d=BP(n,c);if(d){e.add(d);const h=j4(d._fallback,n,s);if(typeof h<"u"&&h!==n&&h!==o)return h}else if(d===!1&&typeof o<"u"&&n!==o)return null}return!1}function Ug(e,t,n,o){const s=t._rootScopes,c=j4(t._fallback,n,o),d=[...e,...s],h=new Set;h.add(o);let m=t2(h,d,n,c||n,o);return m===null||typeof c<"u"&&c!==n&&(m=t2(h,d,c,m,o),m===null)?!1:Fg(Array.from(h),[""],s,c,()=>NP(t,n,o))}function t2(e,t,n,o,s){for(;n;)n=$P(e,t,n,o,s);return n}function NP(e,t,n){const o=e._getTarget();t in o||(o[t]={});const s=o[t];return qt(s)&&Xe(n)?n:s||{}}function HP(e,t,n,o){let s;for(const c of t)if(s=S4(EP(c,e),n),typeof s<"u")return Vg(e,s)?Ug(n,o,e,s):s}function S4(e,t){for(const n of t){if(!n)continue;const o=n[e];if(typeof o<"u")return o}}function r2(e){let t=e._keys;return t||(t=e._keys=FP(e._scopes)),t}function FP(e){const t=new Set;for(const n of e)for(const o of Object.keys(n).filter(s=>!s.startsWith("_")))t.add(o);return Array.from(t)}const VP=Number.EPSILON||1e-14,qa=(e,t)=>t<e.length&&!e[t].skip&&e[t],k4=e=>e==="x"?"y":"x";function UP(e,t,n,o){const s=e.skip?t:e,c=t,d=n.skip?t:n,h=Gm(c,s),m=Gm(d,c);let p=h/(h+m),x=m/(h+m);p=isNaN(p)?0:p,x=isNaN(x)?0:x;const v=o*p,y=o*x;return{previous:{x:c.x-v*(d.x-s.x),y:c.y-v*(d.y-s.y)},next:{x:c.x+y*(d.x-s.x),y:c.y+y*(d.y-s.y)}}}function IP(e,t,n){const o=e.length;let s,c,d,h,m,p=qa(e,0);for(let x=0;x<o-1;++x)if(m=p,p=qa(e,x+1),!(!m||!p)){if(_l(t[x],0,VP)){n[x]=n[x+1]=0;continue}s=n[x]/t[x],c=n[x+1]/t[x],h=Math.pow(s,2)+Math.pow(c,2),!(h<=9)&&(d=3/Math.sqrt(h),n[x]=s*d*t[x],n[x+1]=c*d*t[x])}}function YP(e,t,n="x"){const o=k4(n),s=e.length;let c,d,h,m=qa(e,0);for(let p=0;p<s;++p){if(d=h,h=m,m=qa(e,p+1),!h)continue;const x=h[n],v=h[o];d&&(c=(x-d[n])/3,h[`cp1${n}`]=x-c,h[`cp1${o}`]=v-c*t[p]),m&&(c=(m[n]-x)/3,h[`cp2${n}`]=x+c,h[`cp2${o}`]=v+c*t[p])}}function qP(e,t="x"){const n=k4(t),o=e.length,s=Array(o).fill(0),c=Array(o);let d,h,m,p=qa(e,0);for(d=0;d<o;++d)if(h=m,m=p,p=qa(e,d+1),!!m){if(p){const x=p[t]-m[t];s[d]=x!==0?(p[n]-m[n])/x:0}c[d]=h?p?Ia(s[d-1])!==Ia(s[d])?0:(s[d-1]+s[d])/2:s[d-1]:s[d]}IP(e,s,c),YP(e,c,t)}function Dd(e,t,n){return Math.max(Math.min(e,n),t)}function WP(e,t){let n,o,s,c,d,h=$l(e[0],t);for(n=0,o=e.length;n<o;++n)d=c,c=h,h=n<o-1&&$l(e[n+1],t),c&&(s=e[n],d&&(s.cp1x=Dd(s.cp1x,t.left,t.right),s.cp1y=Dd(s.cp1y,t.top,t.bottom)),h&&(s.cp2x=Dd(s.cp2x,t.left,t.right),s.cp2y=Dd(s.cp2y,t.top,t.bottom)))}function GP(e,t,n,o,s){let c,d,h,m;if(t.spanGaps&&(e=e.filter(p=>!p.skip)),t.cubicInterpolationMode==="monotone")qP(e,s);else{let p=o?e[e.length-1]:e[0];for(c=0,d=e.length;c<d;++c)h=e[c],m=UP(p,h,e[Math.min(c+1,d-(o?0:1))%d],t.tension),h.cp1x=m.previous.x,h.cp1y=m.previous.y,h.cp2x=m.next.x,h.cp2y=m.next.y,p=h}t.capBezierPoints&&WP(e,n)}function Ig(){return typeof window<"u"&&typeof document<"u"}function Yg(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function lh(e,t,n){let o;return typeof e=="string"?(o=parseInt(e,10),e.indexOf("%")!==-1&&(o=o/100*t.parentNode[n])):o=e,o}const Ah=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function XP(e,t){return Ah(e).getPropertyValue(t)}const QP=["top","right","bottom","left"];function zi(e,t,n){const o={};n=n?"-"+n:"";for(let s=0;s<4;s++){const c=QP[s];o[c]=parseFloat(e[t+"-"+c+n])||0}return o.width=o.left+o.right,o.height=o.top+o.bottom,o}const ZP=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function KP(e,t){const n=e.touches,o=n&&n.length?n[0]:e,{offsetX:s,offsetY:c}=o;let d=!1,h,m;if(ZP(s,c,e.target))h=s,m=c;else{const p=t.getBoundingClientRect();h=o.clientX-p.left,m=o.clientY-p.top,d=!0}return{x:h,y:m,box:d}}function bi(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:o}=t,s=Ah(n),c=s.boxSizing==="border-box",d=zi(s,"padding"),h=zi(s,"border","width"),{x:m,y:p,box:x}=KP(e,n),v=d.left+(x&&h.left),y=d.top+(x&&h.top);let{width:j,height:w}=t;return c&&(j-=d.width+h.width,w-=d.height+h.height),{x:Math.round((m-v)/j*n.width/o),y:Math.round((p-y)/w*n.height/o)}}function JP(e,t,n){let o,s;if(t===void 0||n===void 0){const c=e&&Yg(e);if(!c)t=e.clientWidth,n=e.clientHeight;else{const d=c.getBoundingClientRect(),h=Ah(c),m=zi(h,"border","width"),p=zi(h,"padding");t=d.width-p.width-m.width,n=d.height-p.height-m.height,o=lh(h.maxWidth,c,"clientWidth"),s=lh(h.maxHeight,c,"clientHeight")}}return{width:t,height:n,maxWidth:o||sh,maxHeight:s||sh}}const Pd=e=>Math.round(e*10)/10;function eA(e,t,n,o){const s=Ah(e),c=zi(s,"margin"),d=lh(s.maxWidth,e,"clientWidth")||sh,h=lh(s.maxHeight,e,"clientHeight")||sh,m=JP(e,t,n);let{width:p,height:x}=m;if(s.boxSizing==="content-box"){const y=zi(s,"border","width"),j=zi(s,"padding");p-=j.width+y.width,x-=j.height+y.height}return p=Math.max(0,p-c.width),x=Math.max(0,o?p/o:x-c.height),p=Pd(Math.min(p,d,m.maxWidth)),x=Pd(Math.min(x,h,m.maxHeight)),p&&!x&&(x=Pd(p/2)),(t!==void 0||n!==void 0)&&o&&m.height&&x>m.height&&(x=m.height,p=Pd(Math.floor(x*o))),{width:p,height:x}}function n2(e,t,n){const o=t||1,s=Math.floor(e.height*o),c=Math.floor(e.width*o);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const d=e.canvas;return d.style&&(n||!d.style.height&&!d.style.width)&&(d.style.height=`${e.height}px`,d.style.width=`${e.width}px`),e.currentDevicePixelRatio!==o||d.height!==s||d.width!==c?(e.currentDevicePixelRatio=o,d.height=s,d.width=c,e.ctx.setTransform(o,0,0,o,0,0),!0):!1}const tA=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Ig()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function o2(e,t){const n=XP(e,t),o=n&&n.match(/^(\d+)(\.\d+)?px$/);return o?+o[1]:void 0}function vi(e,t,n,o){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function rA(e,t,n,o){return{x:e.x+n*(t.x-e.x),y:o==="middle"?n<.5?e.y:t.y:o==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function nA(e,t,n,o){const s={x:e.cp2x,y:e.cp2y},c={x:t.cp1x,y:t.cp1y},d=vi(e,s,n),h=vi(s,c,n),m=vi(c,t,n),p=vi(d,h,n),x=vi(h,m,n);return vi(p,x,n)}const oA=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,o){return n-o},leftForLtr(n,o){return n-o}}},iA=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function La(e,t,n){return e?oA(t,n):iA()}function C4(e,t){let n,o;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,o=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=o)}function M4(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function _4(e){return e==="angle"?{between:h4,compare:rP,normalize:An}:{between:Ra,compare:(t,n)=>t-n,normalize:t=>t}}function i2({start:e,end:t,count:n,loop:o,style:s}){return{start:e%n,end:t%n,loop:o&&(t-e+1)%n===0,style:s}}function aA(e,t,n){const{property:o,start:s,end:c}=n,{between:d,normalize:h}=_4(o),m=t.length;let{start:p,end:x,loop:v}=e,y,j;if(v){for(p+=m,x+=m,y=0,j=m;y<j&&d(h(t[p%m][o]),s,c);++y)p--,x--;p%=m,x%=m}return x<p&&(x+=m),{start:p,end:x,loop:v,style:e.style}}function T4(e,t,n){if(!n)return[e];const{property:o,start:s,end:c}=n,d=t.length,{compare:h,between:m,normalize:p}=_4(o),{start:x,end:v,loop:y,style:j}=aA(e,t,n),w=[];let C=!1,k=null,_,z,D;const L=()=>m(s,D,_)&&h(s,D)!==0,A=()=>h(c,_)===0||m(c,D,_),V=()=>C||L(),E=()=>!C||A();for(let F=x,te=x;F<=v;++F)z=t[F%d],!z.skip&&(_=p(z[o]),_!==D&&(C=m(_,s,c),k===null&&V()&&(k=h(_,s)===0?F:te),k!==null&&E()&&(w.push(i2({start:k,end:F,loop:y,count:d,style:j})),k=null),te=F,D=_));return k!==null&&w.push(i2({start:k,end:v,loop:y,count:d,style:j})),w}function z4(e,t){const n=[],o=e.segments;for(let s=0;s<o.length;s++){const c=T4(o[s],e.points,t);c.length&&n.push(...c)}return n}function sA(e,t,n,o){let s=0,c=t-1;if(n&&!o)for(;s<t&&!e[s].skip;)s++;for(;s<t&&e[s].skip;)s++;for(s%=t,n&&(c+=s);c>s&&e[c%t].skip;)c--;return c%=t,{start:s,end:c}}function lA(e,t,n,o){const s=e.length,c=[];let d=t,h=e[t],m;for(m=t+1;m<=n;++m){const p=e[m%s];p.skip||p.stop?h.skip||(o=!1,c.push({start:t%s,end:(m-1)%s,loop:o}),t=d=p.stop?m:null):(d=m,h.skip&&(t=m)),h=p}return d!==null&&c.push({start:t%s,end:d%s,loop:o}),c}function cA(e,t){const n=e.points,o=e.options.spanGaps,s=n.length;if(!s)return[];const c=!!e._loop,{start:d,end:h}=sA(n,s,c,o);if(o===!0)return a2(e,[{start:d,end:h,loop:c}],n,t);const m=h<d?h+s:h,p=!!e._fullLoop&&d===0&&h===s-1;return a2(e,lA(n,d,m,p),n,t)}function a2(e,t,n,o){return!o||!o.setContext||!n?t:dA(e,t,n,o)}function dA(e,t,n,o){const s=e._chart.getContext(),c=s2(e.options),{_datasetIndex:d,options:{spanGaps:h}}=e,m=n.length,p=[];let x=c,v=t[0].start,y=v;function j(w,C,k,_){const z=h?-1:1;if(w!==C){for(w+=m;n[w%m].skip;)w-=z;for(;n[C%m].skip;)C+=z;w%m!==C%m&&(p.push({start:w%m,end:C%m,loop:k,style:_}),x=_,v=C%m)}}for(const w of t){v=h?v:w.start;let C=n[v%m],k;for(y=v+1;y<=w.end;y++){const _=n[y%m];k=s2(o.setContext(Ri(s,{type:"segment",p0:C,p1:_,p0DataIndex:(y-1)%m,p1DataIndex:y%m,datasetIndex:d}))),uA(k,x)&&j(v,y-1,w.loop,x),C=_,x=k}v<y-1&&j(v,y-1,w.loop,x)}return p}function s2(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function uA(e,t){if(!t)return!1;const n=[],o=function(s,c){return Hg(c)?(n.includes(c)||n.push(c),n.indexOf(c)):c};return JSON.stringify(e,o)!==JSON.stringify(t,o)}function Ad(e,t,n){return e.options.clip?e[n]:t[n]}function hA(e,t){const{xScale:n,yScale:o}=e;return n&&o?{left:Ad(n,t,"left"),right:Ad(n,t,"right"),top:Ad(o,t,"top"),bottom:Ad(o,t,"bottom")}:t}function D4(e,t){const n=t._clip;if(n.disabled)return!1;const o=hA(t,e.chartArea);return{left:n.left===!1?0:o.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:o.right+(n.right===!0?0:n.right),top:n.top===!1?0:o.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:o.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class fA{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,o,s){const c=n.listeners[s],d=n.duration;c.forEach(h=>h({chart:t,initial:n.initial,numSteps:d,currentStep:Math.min(o-n.start,d)}))}_refresh(){this._request||(this._running=!0,this._request=p4.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((o,s)=>{if(!o.running||!o.items.length)return;const c=o.items;let d=c.length-1,h=!1,m;for(;d>=0;--d)m=c[d],m._active?(m._total>o.duration&&(o.duration=m._total),m.tick(t),h=!0):(c[d]=c[c.length-1],c.pop());h&&(s.draw(),this._notify(s,o,t,"progress")),c.length||(o.running=!1,this._notify(s,o,t,"complete"),o.initial=!1),n+=c.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let o=n.get(t);return o||(o={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,o)),o}listen(t,n,o){this._getAnims(t).listeners[n].push(o)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((o,s)=>Math.max(o,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const o=n.items;let s=o.length-1;for(;s>=0;--s)o[s].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var to=new fA;const l2="transparent",pA={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const o=Zy(e||l2),s=o.valid&&Zy(t||l2);return s&&s.valid?s.mix(o,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class mA{constructor(t,n,o,s){const c=n[o];s=zd([t.to,s,c,t.from]);const d=zd([t.from,c,s]);this._active=!0,this._fn=t.fn||pA[t.type||typeof d],this._easing=Tl[t.easing]||Tl.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=o,this._from=d,this._to=s,this._promises=void 0}active(){return this._active}update(t,n,o){if(this._active){this._notify(!1);const s=this._target[this._prop],c=o-this._start,d=this._duration-c;this._start=o,this._duration=Math.floor(Math.max(d,t.duration)),this._total+=c,this._loop=!!t.loop,this._to=zd([t.to,n,s,t.from]),this._from=zd([t.from,s,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,o=this._duration,s=this._prop,c=this._from,d=this._loop,h=this._to;let m;if(this._active=c!==h&&(d||n<o),!this._active){this._target[s]=h,this._notify(!0);return}if(n<0){this._target[s]=c;return}m=n/o%2,m=d&&m>1?2-m:m,m=this._easing(Math.min(1,Math.max(0,m))),this._target[s]=this._fn(c,h,m)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,o)=>{t.push({res:n,rej:o})})}_notify(t){const n=t?"res":"rej",o=this._promises||[];for(let s=0;s<o.length;s++)o[s][n]()}}class P4{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!Xe(t))return;const n=Object.keys(Ot.animation),o=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const c=t[s];if(!Xe(c))return;const d={};for(const h of n)d[h]=c[h];(qt(c.properties)&&c.properties||[s]).forEach(h=>{(h===s||!o.has(h))&&o.set(h,d)})})}_animateOptions(t,n){const o=n.options,s=xA(t,o);if(!s)return[];const c=this._createAnimations(s,o);return o.$shared&&gA(t.options.$animations,o).then(()=>{t.options=o},()=>{}),c}_createAnimations(t,n){const o=this._properties,s=[],c=t.$animations||(t.$animations={}),d=Object.keys(n),h=Date.now();let m;for(m=d.length-1;m>=0;--m){const p=d[m];if(p.charAt(0)==="$")continue;if(p==="options"){s.push(...this._animateOptions(t,n));continue}const x=n[p];let v=c[p];const y=o.get(p);if(v)if(y&&v.active()){v.update(y,x,h);continue}else v.cancel();if(!y||!y.duration){t[p]=x;continue}c[p]=v=new mA(y,t,p,x),s.push(v)}return s}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const o=this._createAnimations(t,n);if(o.length)return to.add(this._chart,o),!0}}function gA(e,t){const n=[],o=Object.keys(t);for(let s=0;s<o.length;s++){const c=e[o[s]];c&&c.active()&&n.push(c.wait())}return Promise.all(n)}function xA(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function c2(e,t){const n=e&&e.options||{},o=n.reverse,s=n.min===void 0?t:0,c=n.max===void 0?t:0;return{start:o?c:s,end:o?s:c}}function bA(e,t,n){if(n===!1)return!1;const o=c2(e,n),s=c2(t,n);return{top:s.end,right:o.end,bottom:s.start,left:o.start}}function vA(e){let t,n,o,s;return Xe(e)?(t=e.top,n=e.right,o=e.bottom,s=e.left):t=n=o=s=e,{top:t,right:n,bottom:o,left:s,disabled:e===!1}}function A4(e,t){const n=[],o=e._getSortedDatasetMetas(t);let s,c;for(s=0,c=o.length;s<c;++s)n.push(o[s].index);return n}function d2(e,t,n,o={}){const s=e.keys,c=o.mode==="single";let d,h,m,p;if(t===null)return;let x=!1;for(d=0,h=s.length;d<h;++d){if(m=+s[d],m===n){if(x=!0,o.all)continue;break}p=e.values[m],mr(p)&&(c||t===0||Ia(t)===Ia(p))&&(t+=p)}return!x&&!o.all?0:t}function yA(e,t){const{iScale:n,vScale:o}=t,s=n.axis==="x"?"x":"y",c=o.axis==="x"?"x":"y",d=Object.keys(e),h=new Array(d.length);let m,p,x;for(m=0,p=d.length;m<p;++m)x=d[m],h[m]={[s]:x,[c]:e[x]};return h}function D0(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function wA(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function jA(e){const{min:t,max:n,minDefined:o,maxDefined:s}=e.getUserBounds();return{min:o?t:Number.NEGATIVE_INFINITY,max:s?n:Number.POSITIVE_INFINITY}}function SA(e,t,n){const o=e[t]||(e[t]={});return o[n]||(o[n]={})}function u2(e,t,n,o){for(const s of t.getMatchingVisibleMetas(o).reverse()){const c=e[s.index];if(n&&c>0||!n&&c<0)return s.index}return null}function h2(e,t){const{chart:n,_cachedMeta:o}=e,s=n._stacks||(n._stacks={}),{iScale:c,vScale:d,index:h}=o,m=c.axis,p=d.axis,x=wA(c,d,o),v=t.length;let y;for(let j=0;j<v;++j){const w=t[j],{[m]:C,[p]:k}=w,_=w._stacks||(w._stacks={});y=_[p]=SA(s,x,C),y[h]=k,y._top=u2(y,d,!0,o.type),y._bottom=u2(y,d,!1,o.type);const z=y._visualValues||(y._visualValues={});z[h]=k}}function P0(e,t){const n=e.scales;return Object.keys(n).filter(o=>n[o].axis===t).shift()}function kA(e,t){return Ri(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function CA(e,t,n){return Ri(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function sl(e,t){const n=e.controller.index,o=e.vScale&&e.vScale.axis;if(o){t=t||e._parsed;for(const s of t){const c=s._stacks;if(!c||c[o]===void 0||c[o][n]===void 0)return;delete c[o][n],c[o]._visualValues!==void 0&&c[o]._visualValues[n]!==void 0&&delete c[o]._visualValues[n]}}}const A0=e=>e==="reset"||e==="none",f2=(e,t)=>t?e:Object.assign({},e),MA=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:A4(n,!0),values:null};class Pl{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=D0(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&sl(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,o=this.getDataset(),s=(v,y,j,w)=>v==="x"?y:v==="r"?w:j,c=n.xAxisID=We(o.xAxisID,P0(t,"x")),d=n.yAxisID=We(o.yAxisID,P0(t,"y")),h=n.rAxisID=We(o.rAxisID,P0(t,"r")),m=n.indexAxis,p=n.iAxisID=s(m,c,d,h),x=n.vAxisID=s(m,d,c,h);n.xScale=this.getScaleForId(c),n.yScale=this.getScaleForId(d),n.rScale=this.getScaleForId(h),n.iScale=this.getScaleForId(p),n.vScale=this.getScaleForId(x)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Gy(this._data,this),t._stacked&&sl(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),o=this._data;if(Xe(n)){const s=this._cachedMeta;this._data=yA(n,s)}else if(o!==n){if(o){Gy(o,this);const s=this._cachedMeta;sl(s),s._parsed=[]}n&&Object.isExtensible(n)&&aP(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,o=this.getDataset();let s=!1;this._dataCheck();const c=n._stacked;n._stacked=D0(n.vScale,n),n.stack!==o.stack&&(s=!0,sl(n),n.stack=o.stack),this._resyncElements(t),(s||c!==n._stacked)&&(h2(this,n._parsed),n._stacked=D0(n.vScale,n))}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),o=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(o,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:o,_data:s}=this,{iScale:c,_stacked:d}=o,h=c.axis;let m=t===0&&n===s.length?!0:o._sorted,p=t>0&&o._parsed[t-1],x,v,y;if(this._parsing===!1)o._parsed=s,o._sorted=!0,y=s;else{qt(s[t])?y=this.parseArrayData(o,s,t,n):Xe(s[t])?y=this.parseObjectData(o,s,t,n):y=this.parsePrimitiveData(o,s,t,n);const j=()=>v[h]===null||p&&v[h]<p[h];for(x=0;x<n;++x)o._parsed[x+t]=v=y[x],m&&(j()&&(m=!1),p=v);o._sorted=m}d&&h2(this,y)}parsePrimitiveData(t,n,o,s){const{iScale:c,vScale:d}=t,h=c.axis,m=d.axis,p=c.getLabels(),x=c===d,v=new Array(s);let y,j,w;for(y=0,j=s;y<j;++y)w=y+o,v[y]={[h]:x||c.parse(p[w],w),[m]:d.parse(n[w],w)};return v}parseArrayData(t,n,o,s){const{xScale:c,yScale:d}=t,h=new Array(s);let m,p,x,v;for(m=0,p=s;m<p;++m)x=m+o,v=n[x],h[m]={x:c.parse(v[0],x),y:d.parse(v[1],x)};return h}parseObjectData(t,n,o,s){const{xScale:c,yScale:d}=t,{xAxisKey:h="x",yAxisKey:m="y"}=this._parsing,p=new Array(s);let x,v,y,j;for(x=0,v=s;x<v;++x)y=x+o,j=n[y],p[x]={x:c.parse(ih(j,h),y),y:d.parse(ih(j,m),y)};return p}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,o){const s=this.chart,c=this._cachedMeta,d=n[t.axis],h={keys:A4(s,!0),values:n._stacks[t.axis]._visualValues};return d2(h,d,c.index,{mode:o})}updateRangeFromParsed(t,n,o,s){const c=o[n.axis];let d=c===null?NaN:c;const h=s&&o._stacks[n.axis];s&&h&&(s.values=h,d=d2(s,c,this._cachedMeta.index)),t.min=Math.min(t.min,d),t.max=Math.max(t.max,d)}getMinMax(t,n){const o=this._cachedMeta,s=o._parsed,c=o._sorted&&t===o.iScale,d=s.length,h=this._getOtherScale(t),m=MA(n,o,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:x,max:v}=jA(h);let y,j;function w(){j=s[y];const C=j[h.axis];return!mr(j[t.axis])||x>C||v<C}for(y=0;y<d&&!(!w()&&(this.updateRangeFromParsed(p,t,j,m),c));++y);if(c){for(y=d-1;y>=0;--y)if(!w()){this.updateRangeFromParsed(p,t,j,m);break}}return p}getAllParsedValues(t){const n=this._cachedMeta._parsed,o=[];let s,c,d;for(s=0,c=n.length;s<c;++s)d=n[s][t.axis],mr(d)&&o.push(d);return o}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,o=n.iScale,s=n.vScale,c=this.getParsed(t);return{label:o?""+o.getLabelForValue(c[o.axis]):"",value:s?""+s.getLabelForValue(c[s.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=vA(We(this.options.clip,bA(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,o=this._cachedMeta,s=o.data||[],c=n.chartArea,d=[],h=this._drawStart||0,m=this._drawCount||s.length-h,p=this.options.drawActiveElementsOnTop;let x;for(o.dataset&&o.dataset.draw(t,c,h,m),x=h;x<h+m;++x){const v=s[x];v.hidden||(v.active&&p?d.push(v):v.draw(t,c))}for(x=0;x<d.length;++x)d[x].draw(t,c)}getStyle(t,n){const o=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(o):this.resolveDataElementOptions(t||0,o)}getContext(t,n,o){const s=this.getDataset();let c;if(t>=0&&t<this._cachedMeta.data.length){const d=this._cachedMeta.data[t];c=d.$context||(d.$context=CA(this.getContext(),t,d)),c.parsed=this.getParsed(t),c.raw=s.data[t],c.index=c.dataIndex=t}else c=this.$context||(this.$context=kA(this.chart.getContext(),this.index)),c.dataset=s,c.index=c.datasetIndex=this.index;return c.active=!!n,c.mode=o,c}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",o){const s=n==="active",c=this._cachedDataOpts,d=t+"-"+n,h=c[d],m=this.enableOptionSharing&&ah(o);if(h)return f2(h,m);const p=this.chart.config,x=p.datasetElementScopeKeys(this._type,t),v=s?[`${t}Hover`,"hover",t,""]:[t,""],y=p.getOptionScopes(this.getDataset(),x),j=Object.keys(Ot.elements[t]),w=()=>this.getContext(o,s,n),C=p.resolveNamedOptions(y,j,w,v);return C.$shared&&(C.$shared=m,c[d]=Object.freeze(f2(C,m))),C}_resolveAnimations(t,n,o){const s=this.chart,c=this._cachedDataOpts,d=`animation-${n}`,h=c[d];if(h)return h;let m;if(s.options.animation!==!1){const x=this.chart.config,v=x.datasetAnimationScopeKeys(this._type,n),y=x.getOptionScopes(this.getDataset(),v);m=x.createResolver(y,this.getContext(t,o,n))}const p=new P4(s,m&&m.animations);return m&&m._cacheable&&(c[d]=Object.freeze(p)),p}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||A0(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const o=this.resolveDataElementOptions(t,n),s=this._sharedOptions,c=this.getSharedOptions(o),d=this.includeOptions(n,c)||c!==s;return this.updateSharedOptions(c,n,o),{sharedOptions:c,includeOptions:d}}updateElement(t,n,o,s){A0(s)?Object.assign(t,o):this._resolveAnimations(n,s).update(t,o)}updateSharedOptions(t,n,o){t&&!A0(n)&&this._resolveAnimations(void 0,n).update(t,o)}_setStyle(t,n,o,s){t.active=s;const c=this.getStyle(n,s);this._resolveAnimations(n,o,s).update(t,{options:!s&&this.getSharedOptions(c)||c})}removeHoverStyle(t,n,o){this._setStyle(t,o,"active",!1)}setHoverStyle(t,n,o){this._setStyle(t,o,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,o=this._cachedMeta.data;for(const[h,m,p]of this._syncList)this[h](m,p);this._syncList=[];const s=o.length,c=n.length,d=Math.min(c,s);d&&this.parse(0,d),c>s?this._insertElements(s,c-s,t):c<s&&this._removeElements(c,s-c)}_insertElements(t,n,o=!0){const s=this._cachedMeta,c=s.data,d=t+n;let h;const m=p=>{for(p.length+=n,h=p.length-1;h>=d;h--)p[h]=p[h-n]};for(m(c),h=t;h<d;++h)c[h]=new this.dataElementType;this._parsing&&m(s._parsed),this.parse(t,n),o&&this.updateElements(c,t,n,"reset")}updateElements(t,n,o,s){}_removeElements(t,n){const o=this._cachedMeta;if(this._parsing){const s=o._parsed.splice(t,n);o._stacked&&sl(o,s)}o.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,o,s]=t;this[n](o,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const o=arguments.length-2;o&&this._sync(["_insertElements",t,o])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}Be(Pl,"defaults",{}),Be(Pl,"datasetElementType",null),Be(Pl,"dataElementType",null);class Uu extends Pl{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:o,data:s=[],_dataset:c}=n,d=this.chart._animationsDisabled;let{start:h,count:m}=dP(n,s,d);this._drawStart=h,this._drawCount=m,uP(n)&&(h=0,m=s.length),o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!c._decimated,o.points=s;const p=this.resolveDatasetElementOptions(t);this.options.showLine||(p.borderWidth=0),p.segment=this.options.segment,this.updateElement(o,void 0,{animated:!d,options:p},t),this.updateElements(s,h,m,t)}updateElements(t,n,o,s){const c=s==="reset",{iScale:d,vScale:h,_stacked:m,_dataset:p}=this._cachedMeta,{sharedOptions:x,includeOptions:v}=this._getSharedOptions(n,s),y=d.axis,j=h.axis,{spanGaps:w,segment:C}=this.options,k=Bl(w)?w:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||c||s==="none",z=n+o,D=t.length;let L=n>0&&this.getParsed(n-1);for(let A=0;A<D;++A){const V=t[A],E=_?V:{};if(A<n||A>=z){E.skip=!0;continue}const F=this.getParsed(A),te=mt(F[j]),de=E[y]=d.getPixelForValue(F[y],A),le=E[j]=c||te?h.getBasePixel():h.getPixelForValue(m?this.applyStack(h,F,m):F[j],A);E.skip=isNaN(de)||isNaN(le)||te,E.stop=A>0&&Math.abs(F[y]-L[y])>k,C&&(E.parsed=F,E.raw=p.data[A]),v&&(E.options=x||this.resolveDataElementOptions(A,V.active?"active":s)),_||this.updateElement(V,A,E,s),L=F}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,o=n.options&&n.options.borderWidth||0,s=t.data||[];if(!s.length)return o;const c=s[0].size(this.resolveDataElementOptions(0)),d=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(o,c,d)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}Be(Uu,"id","line"),Be(Uu,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),Be(Uu,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function xi(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class qg{constructor(t){Be(this,"options");this.options=t||{}}static override(t){Object.assign(qg.prototype,t)}init(){}formats(){return xi()}parse(){return xi()}format(){return xi()}add(){return xi()}diff(){return xi()}startOf(){return xi()}endOf(){return xi()}}var _A={_date:qg};function TA(e,t,n,o){const{controller:s,data:c,_sorted:d}=e,h=s._cachedMeta.iScale,m=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(h&&t===h.axis&&t!=="r"&&d&&c.length){const p=h._reversePixels?oP:Ci;if(o){if(s._sharedOptions){const x=c[0],v=typeof x.getRange=="function"&&x.getRange(t);if(v){const y=p(c,t,n-v),j=p(c,t,n+v);return{lo:y.lo,hi:j.hi}}}}else{const x=p(c,t,n);if(m){const{vScale:v}=s._cachedMeta,{_parsed:y}=e,j=y.slice(0,x.lo+1).reverse().findIndex(C=>!mt(C[v.axis]));x.lo-=Math.max(0,j);const w=y.slice(x.hi).findIndex(C=>!mt(C[v.axis]));x.hi+=Math.max(0,w)}return x}}return{lo:0,hi:c.length-1}}function Eh(e,t,n,o,s){const c=e.getSortedVisibleDatasetMetas(),d=n[t];for(let h=0,m=c.length;h<m;++h){const{index:p,data:x}=c[h],{lo:v,hi:y}=TA(c[h],t,d,s);for(let j=v;j<=y;++j){const w=x[j];w.skip||o(w,p,j)}}}function zA(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(o,s){const c=t?Math.abs(o.x-s.x):0,d=n?Math.abs(o.y-s.y):0;return Math.sqrt(Math.pow(c,2)+Math.pow(d,2))}}function E0(e,t,n,o,s){const c=[];return!s&&!e.isPointInArea(t)||Eh(e,n,t,function(h,m,p){!s&&!$l(h,e.chartArea,0)||h.inRange(t.x,t.y,o)&&c.push({element:h,datasetIndex:m,index:p})},!0),c}function DA(e,t,n,o){let s=[];function c(d,h,m){const{startAngle:p,endAngle:x}=d.getProps(["startAngle","endAngle"],o),{angle:v}=tP(d,{x:t.x,y:t.y});h4(v,p,x)&&s.push({element:d,datasetIndex:h,index:m})}return Eh(e,n,t,c),s}function PA(e,t,n,o,s,c){let d=[];const h=zA(n);let m=Number.POSITIVE_INFINITY;function p(x,v,y){const j=x.inRange(t.x,t.y,s);if(o&&!j)return;const w=x.getCenterPoint(s);if(!(!!c||e.isPointInArea(w))&&!j)return;const k=h(t,w);k<m?(d=[{element:x,datasetIndex:v,index:y}],m=k):k===m&&d.push({element:x,datasetIndex:v,index:y})}return Eh(e,n,t,p),d}function O0(e,t,n,o,s,c){return!c&&!e.isPointInArea(t)?[]:n==="r"&&!o?DA(e,t,n,s):PA(e,t,n,o,s,c)}function p2(e,t,n,o,s){const c=[],d=n==="x"?"inXRange":"inYRange";let h=!1;return Eh(e,n,t,(m,p,x)=>{m[d]&&m[d](t[n],s)&&(c.push({element:m,datasetIndex:p,index:x}),h=h||m.inRange(t.x,t.y,s))}),o&&!h?[]:c}var AA={modes:{index(e,t,n,o){const s=bi(t,e),c=n.axis||"x",d=n.includeInvisible||!1,h=n.intersect?E0(e,s,c,o,d):O0(e,s,c,!1,o,d),m=[];return h.length?(e.getSortedVisibleDatasetMetas().forEach(p=>{const x=h[0].index,v=p.data[x];v&&!v.skip&&m.push({element:v,datasetIndex:p.index,index:x})}),m):[]},dataset(e,t,n,o){const s=bi(t,e),c=n.axis||"xy",d=n.includeInvisible||!1;let h=n.intersect?E0(e,s,c,o,d):O0(e,s,c,!1,o,d);if(h.length>0){const m=h[0].datasetIndex,p=e.getDatasetMeta(m).data;h=[];for(let x=0;x<p.length;++x)h.push({element:p[x],datasetIndex:m,index:x})}return h},point(e,t,n,o){const s=bi(t,e),c=n.axis||"xy",d=n.includeInvisible||!1;return E0(e,s,c,o,d)},nearest(e,t,n,o){const s=bi(t,e),c=n.axis||"xy",d=n.includeInvisible||!1;return O0(e,s,c,n.intersect,o,d)},x(e,t,n,o){const s=bi(t,e);return p2(e,s,"x",n.intersect,o)},y(e,t,n,o){const s=bi(t,e);return p2(e,s,"y",n.intersect,o)}}};const E4=["left","top","right","bottom"];function ll(e,t){return e.filter(n=>n.pos===t)}function m2(e,t){return e.filter(n=>E4.indexOf(n.pos)===-1&&n.box.axis===t)}function cl(e,t){return e.sort((n,o)=>{const s=t?o:n,c=t?n:o;return s.weight===c.weight?s.index-c.index:s.weight-c.weight})}function EA(e){const t=[];let n,o,s,c,d,h;for(n=0,o=(e||[]).length;n<o;++n)s=e[n],{position:c,options:{stack:d,stackWeight:h=1}}=s,t.push({index:n,box:s,pos:c,horizontal:s.isHorizontal(),weight:s.weight,stack:d&&c+d,stackWeight:h});return t}function OA(e){const t={};for(const n of e){const{stack:o,pos:s,stackWeight:c}=n;if(!o||!E4.includes(s))continue;const d=t[o]||(t[o]={count:0,placed:0,weight:0,size:0});d.count++,d.weight+=c}return t}function RA(e,t){const n=OA(e),{vBoxMaxWidth:o,hBoxMaxHeight:s}=t;let c,d,h;for(c=0,d=e.length;c<d;++c){h=e[c];const{fullSize:m}=h.box,p=n[h.stack],x=p&&h.stackWeight/p.weight;h.horizontal?(h.width=x?x*o:m&&t.availableWidth,h.height=s):(h.width=o,h.height=x?x*s:m&&t.availableHeight)}return n}function LA(e){const t=EA(e),n=cl(t.filter(p=>p.box.fullSize),!0),o=cl(ll(t,"left"),!0),s=cl(ll(t,"right")),c=cl(ll(t,"top"),!0),d=cl(ll(t,"bottom")),h=m2(t,"x"),m=m2(t,"y");return{fullSize:n,leftAndTop:o.concat(c),rightAndBottom:s.concat(m).concat(d).concat(h),chartArea:ll(t,"chartArea"),vertical:o.concat(s).concat(m),horizontal:c.concat(d).concat(h)}}function g2(e,t,n,o){return Math.max(e[n],t[n])+Math.max(e[o],t[o])}function O4(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function BA(e,t,n,o){const{pos:s,box:c}=n,d=e.maxPadding;if(!Xe(s)){n.size&&(e[s]-=n.size);const v=o[n.stack]||{size:0,count:1};v.size=Math.max(v.size,n.horizontal?c.height:c.width),n.size=v.size/v.count,e[s]+=n.size}c.getPadding&&O4(d,c.getPadding());const h=Math.max(0,t.outerWidth-g2(d,e,"left","right")),m=Math.max(0,t.outerHeight-g2(d,e,"top","bottom")),p=h!==e.w,x=m!==e.h;return e.w=h,e.h=m,n.horizontal?{same:p,other:x}:{same:x,other:p}}function $A(e){const t=e.maxPadding;function n(o){const s=Math.max(t[o]-e[o],0);return e[o]+=s,s}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function NA(e,t){const n=t.maxPadding;function o(s){const c={left:0,top:0,right:0,bottom:0};return s.forEach(d=>{c[d]=Math.max(t[d],n[d])}),c}return o(e?["left","right"]:["top","bottom"])}function Sl(e,t,n,o){const s=[];let c,d,h,m,p,x;for(c=0,d=e.length,p=0;c<d;++c){h=e[c],m=h.box,m.update(h.width||t.w,h.height||t.h,NA(h.horizontal,t));const{same:v,other:y}=BA(t,n,h,o);p|=v&&s.length,x=x||y,m.fullSize||s.push(h)}return p&&Sl(s,t,n,o)||x}function Ed(e,t,n,o,s){e.top=n,e.left=t,e.right=t+o,e.bottom=n+s,e.width=o,e.height=s}function x2(e,t,n,o){const s=n.padding;let{x:c,y:d}=t;for(const h of e){const m=h.box,p=o[h.stack]||{placed:0,weight:1},x=h.stackWeight/p.weight||1;if(h.horizontal){const v=t.w*x,y=p.size||m.height;ah(p.start)&&(d=p.start),m.fullSize?Ed(m,s.left,d,n.outerWidth-s.right-s.left,y):Ed(m,t.left+p.placed,d,v,y),p.start=d,p.placed+=v,d=m.bottom}else{const v=t.h*x,y=p.size||m.width;ah(p.start)&&(c=p.start),m.fullSize?Ed(m,c,s.top,y,n.outerHeight-s.bottom-s.top):Ed(m,c,t.top+p.placed,y,v),p.start=c,p.placed+=v,c=m.right}}t.x=c,t.y=d}var en={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,o){if(!e)return;const s=rn(e.options.layout.padding),c=Math.max(t-s.width,0),d=Math.max(n-s.height,0),h=LA(e.boxes),m=h.vertical,p=h.horizontal;at(e.boxes,C=>{typeof C.beforeLayout=="function"&&C.beforeLayout()});const x=m.reduce((C,k)=>k.box.options&&k.box.options.display===!1?C:C+1,0)||1,v=Object.freeze({outerWidth:t,outerHeight:n,padding:s,availableWidth:c,availableHeight:d,vBoxMaxWidth:c/2/x,hBoxMaxHeight:d/2}),y=Object.assign({},s);O4(y,rn(o));const j=Object.assign({maxPadding:y,w:c,h:d,x:s.left,y:s.top},s),w=RA(m.concat(p),v);Sl(h.fullSize,j,v,w),Sl(m,j,v,w),Sl(p,j,v,w)&&Sl(m,j,v,w),$A(j),x2(h.leftAndTop,j,v,w),j.x+=j.w,j.y+=j.h,x2(h.rightAndBottom,j,v,w),e.chartArea={left:j.left,top:j.top,right:j.left+j.w,bottom:j.top+j.h,height:j.h,width:j.w},at(h.chartArea,C=>{const k=C.box;Object.assign(k,e.chartArea),k.update(j.w,j.h,{left:0,top:0,right:0,bottom:0})})}};class R4{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,o){}removeEventListener(t,n,o){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,o,s){return n=Math.max(0,n||t.width),o=o||t.height,{width:n,height:Math.max(0,s?Math.floor(n/s):o)}}isAttached(t){return!0}updateConfig(t){}}class HA extends R4{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Iu="$chartjs",FA={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},b2=e=>e===null||e==="";function VA(e,t){const n=e.style,o=e.getAttribute("height"),s=e.getAttribute("width");if(e[Iu]={initial:{height:o,width:s,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",b2(s)){const c=o2(e,"width");c!==void 0&&(e.width=c)}if(b2(o))if(e.style.height==="")e.height=e.width/(t||2);else{const c=o2(e,"height");c!==void 0&&(e.height=c)}return e}const L4=tA?{passive:!0}:!1;function UA(e,t,n){e&&e.addEventListener(t,n,L4)}function IA(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,L4)}function YA(e,t){const n=FA[e.type]||e.type,{x:o,y:s}=bi(e,t);return{type:n,chart:t,native:e,x:o!==void 0?o:null,y:s!==void 0?s:null}}function ch(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function qA(e,t,n){const o=e.canvas,s=new MutationObserver(c=>{let d=!1;for(const h of c)d=d||ch(h.addedNodes,o),d=d&&!ch(h.removedNodes,o);d&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}function WA(e,t,n){const o=e.canvas,s=new MutationObserver(c=>{let d=!1;for(const h of c)d=d||ch(h.removedNodes,o),d=d&&!ch(h.addedNodes,o);d&&n()});return s.observe(document,{childList:!0,subtree:!0}),s}const Hl=new Map;let v2=0;function B4(){const e=window.devicePixelRatio;e!==v2&&(v2=e,Hl.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function GA(e,t){Hl.size||window.addEventListener("resize",B4),Hl.set(e,t)}function XA(e){Hl.delete(e),Hl.size||window.removeEventListener("resize",B4)}function QA(e,t,n){const o=e.canvas,s=o&&Yg(o);if(!s)return;const c=m4((h,m)=>{const p=s.clientWidth;n(h,m),p<s.clientWidth&&n()},window),d=new ResizeObserver(h=>{const m=h[0],p=m.contentRect.width,x=m.contentRect.height;p===0&&x===0||c(p,x)});return d.observe(s),GA(e,c),d}function R0(e,t,n){n&&n.disconnect(),t==="resize"&&XA(e)}function ZA(e,t,n){const o=e.canvas,s=m4(c=>{e.ctx!==null&&n(YA(c,e))},e);return UA(o,t,s),s}class KA extends R4{acquireContext(t,n){const o=t&&t.getContext&&t.getContext("2d");return o&&o.canvas===t?(VA(t,n),o):null}releaseContext(t){const n=t.canvas;if(!n[Iu])return!1;const o=n[Iu].initial;["height","width"].forEach(c=>{const d=o[c];mt(d)?n.removeAttribute(c):n.setAttribute(c,d)});const s=o.style||{};return Object.keys(s).forEach(c=>{n.style[c]=s[c]}),n.width=n.width,delete n[Iu],!0}addEventListener(t,n,o){this.removeEventListener(t,n);const s=t.$proxies||(t.$proxies={}),d={attach:qA,detach:WA,resize:QA}[n]||ZA;s[n]=d(t,n,o)}removeEventListener(t,n){const o=t.$proxies||(t.$proxies={}),s=o[n];if(!s)return;({attach:R0,detach:R0,resize:R0}[n]||IA)(t,n,s),o[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,o,s){return eA(t,n,o,s)}isAttached(t){const n=t&&Yg(t);return!!(n&&n.isConnected)}}function JA(e){return!Ig()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?HA:KA}class co{constructor(){Be(this,"x");Be(this,"y");Be(this,"active",!1);Be(this,"options");Be(this,"$animations")}tooltipPosition(t){const{x:n,y:o}=this.getProps(["x","y"],t);return{x:n,y:o}}hasValue(){return Bl(this.x)&&Bl(this.y)}getProps(t,n){const o=this.$animations;if(!n||!o)return this;const s={};return t.forEach(c=>{s[c]=o[c]&&o[c].active()?o[c]._to:this[c]}),s}}Be(co,"defaults",{}),Be(co,"defaultRoutes");function eE(e,t){const n=e.options.ticks,o=tE(e),s=Math.min(n.maxTicksLimit||o,o),c=n.major.enabled?nE(t):[],d=c.length,h=c[0],m=c[d-1],p=[];if(d>s)return oE(t,p,c,d/s),p;const x=rE(c,t,s);if(d>0){let v,y;const j=d>1?Math.round((m-h)/(d-1)):null;for(Od(t,p,x,mt(j)?0:h-j,h),v=0,y=d-1;v<y;v++)Od(t,p,x,c[v],c[v+1]);return Od(t,p,x,m,mt(j)?t.length:m+j),p}return Od(t,p,x),p}function tE(e){const t=e.options.offset,n=e._tickSize(),o=e._length/n+(t?0:1),s=e._maxLength/n;return Math.floor(Math.min(o,s))}function rE(e,t,n){const o=iE(e),s=t.length/n;if(!o)return Math.max(s,1);const c=QD(o);for(let d=0,h=c.length-1;d<h;d++){const m=c[d];if(m>s)return m}return Math.max(s,1)}function nE(e){const t=[];let n,o;for(n=0,o=e.length;n<o;n++)e[n].major&&t.push(n);return t}function oE(e,t,n,o){let s=0,c=n[0],d;for(o=Math.ceil(o),d=0;d<e.length;d++)d===c&&(t.push(e[d]),s++,c=n[s*o])}function Od(e,t,n,o,s){const c=We(o,0),d=Math.min(We(s,e.length),e.length);let h=0,m,p,x;for(n=Math.ceil(n),s&&(m=s-o,n=m/Math.floor(m/n)),x=c;x<0;)h++,x=Math.round(c+h*n);for(p=Math.max(c,0);p<d;p++)p===x&&(t.push(e[p]),h++,x=Math.round(c+h*n))}function iE(e){const t=e.length;let n,o;if(t<2)return!1;for(o=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==o)return!1;return o}const aE=e=>e==="left"?"right":e==="right"?"left":e,y2=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,w2=(e,t)=>Math.min(t||e,e);function j2(e,t){const n=[],o=e.length/t,s=e.length;let c=0;for(;c<s;c+=o)n.push(e[Math.floor(c)]);return n}function sE(e,t,n){const o=e.ticks.length,s=Math.min(t,o-1),c=e._startPixel,d=e._endPixel,h=1e-6;let m=e.getPixelForTick(s),p;if(!(n&&(o===1?p=Math.max(m-c,d-m):t===0?p=(e.getPixelForTick(1)-m)/2:p=(m-e.getPixelForTick(s-1))/2,m+=s<t?p:-p,m<c-h||m>d+h)))return m}function lE(e,t){at(e,n=>{const o=n.gc,s=o.length/2;let c;if(s>t){for(c=0;c<s;++c)delete n.data[o[c]];o.splice(0,s)}})}function dl(e){return e.drawTicks?e.tickLength:0}function S2(e,t){if(!e.display)return 0;const n=pr(e.font,t),o=rn(e.padding);return(qt(e.text)?e.text.length:1)*n.lineHeight+o.height}function cE(e,t){return Ri(e,{scale:t,type:"scale"})}function dE(e,t,n){return Ri(e,{tick:n,index:t,type:"tick"})}function uE(e,t,n){let o=Ng(e);return(n&&t!=="right"||!n&&t==="right")&&(o=aE(o)),o}function hE(e,t,n,o){const{top:s,left:c,bottom:d,right:h,chart:m}=e,{chartArea:p,scales:x}=m;let v=0,y,j,w;const C=d-s,k=h-c;if(e.isHorizontal()){if(j=ur(o,c,h),Xe(n)){const _=Object.keys(n)[0],z=n[_];w=x[_].getPixelForValue(z)+C-t}else n==="center"?w=(p.bottom+p.top)/2+C-t:w=y2(e,n,t);y=h-c}else{if(Xe(n)){const _=Object.keys(n)[0],z=n[_];j=x[_].getPixelForValue(z)-k+t}else n==="center"?j=(p.left+p.right)/2-k+t:j=y2(e,n,t);w=ur(o,d,s),v=n==="left"?-hn:hn}return{titleX:j,titleY:w,maxWidth:y,rotation:v}}class ts extends co{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:o,_suggestedMax:s}=this;return t=Tn(t,Number.POSITIVE_INFINITY),n=Tn(n,Number.NEGATIVE_INFINITY),o=Tn(o,Number.POSITIVE_INFINITY),s=Tn(s,Number.NEGATIVE_INFINITY),{min:Tn(t,o),max:Tn(n,s),minDefined:mr(t),maxDefined:mr(n)}}getMinMax(t){let{min:n,max:o,minDefined:s,maxDefined:c}=this.getUserBounds(),d;if(s&&c)return{min:n,max:o};const h=this.getMatchingVisibleMetas();for(let m=0,p=h.length;m<p;++m)d=h[m].controller.getMinMax(this,t),s||(n=Math.min(n,d.min)),c||(o=Math.max(o,d.max));return n=c&&n>o?o:n,o=s&&n>o?n:o,{min:Tn(n,Tn(o,n)),max:Tn(o,Tn(n,o))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){bt(this.options.beforeUpdate,[this])}update(t,n,o){const{beginAtZero:s,grace:c,ticks:d}=this.options,h=d.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=o=Object.assign({left:0,right:0,top:0,bottom:0},o),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+o.left+o.right:this.height+o.top+o.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=AP(this,c,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const m=h<this.ticks.length;this._convertTicksToLabels(m?j2(this.ticks,h):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),d.display&&(d.autoSkip||d.source==="auto")&&(this.ticks=eE(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),m&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,o;this.isHorizontal()?(n=this.left,o=this.right):(n=this.top,o=this.bottom,t=!t),this._startPixel=n,this._endPixel=o,this._reversePixels=t,this._length=o-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){bt(this.options.afterUpdate,[this])}beforeSetDimensions(){bt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){bt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),bt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){bt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let o,s,c;for(o=0,s=t.length;o<s;o++)c=t[o],c.label=bt(n.callback,[c.value,o,t],this)}afterTickToLabelConversion(){bt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){bt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,o=w2(this.ticks.length,t.ticks.maxTicksLimit),s=n.minRotation||0,c=n.maxRotation;let d=s,h,m,p;if(!this._isVisible()||!n.display||s>=c||o<=1||!this.isHorizontal()){this.labelRotation=s;return}const x=this._getLabelSizes(),v=x.widest.width,y=x.highest.height,j=Jr(this.chart.width-v,0,this.maxWidth);h=t.offset?this.maxWidth/o:j/(o-1),v+6>h&&(h=j/(o-(t.offset?.5:1)),m=this.maxHeight-dl(t.grid)-n.padding-S2(t.title,this.chart.options.font),p=Math.sqrt(v*v+y*y),d=eP(Math.min(Math.asin(Jr((x.highest.height+6)/h,-1,1)),Math.asin(Jr(m/p,-1,1))-Math.asin(Jr(y/p,-1,1)))),d=Math.max(s,Math.min(c,d))),this.labelRotation=d}afterCalculateLabelRotation(){bt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){bt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:o,title:s,grid:c}}=this,d=this._isVisible(),h=this.isHorizontal();if(d){const m=S2(s,n.options.font);if(h?(t.width=this.maxWidth,t.height=dl(c)+m):(t.height=this.maxHeight,t.width=dl(c)+m),o.display&&this.ticks.length){const{first:p,last:x,widest:v,highest:y}=this._getLabelSizes(),j=o.padding*2,w=ki(this.labelRotation),C=Math.cos(w),k=Math.sin(w);if(h){const _=o.mirror?0:k*v.width+C*y.height;t.height=Math.min(this.maxHeight,t.height+_+j)}else{const _=o.mirror?0:C*v.width+k*y.height;t.width=Math.min(this.maxWidth,t.width+_+j)}this._calculatePadding(p,x,k,C)}}this._handleMargins(),h?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,o,s){const{ticks:{align:c,padding:d},position:h}=this.options,m=this.labelRotation!==0,p=h!=="top"&&this.axis==="x";if(this.isHorizontal()){const x=this.getPixelForTick(0)-this.left,v=this.right-this.getPixelForTick(this.ticks.length-1);let y=0,j=0;m?p?(y=s*t.width,j=o*n.height):(y=o*t.height,j=s*n.width):c==="start"?j=n.width:c==="end"?y=t.width:c!=="inner"&&(y=t.width/2,j=n.width/2),this.paddingLeft=Math.max((y-x+d)*this.width/(this.width-x),0),this.paddingRight=Math.max((j-v+d)*this.width/(this.width-v),0)}else{let x=n.height/2,v=t.height/2;c==="start"?(x=0,v=t.height):c==="end"&&(x=n.height,v=0),this.paddingTop=x+d,this.paddingBottom=v+d}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){bt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,o;for(n=0,o=t.length;n<o;n++)mt(t[n].label)&&(t.splice(n,1),o--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let o=this.ticks;n<o.length&&(o=j2(o,n)),this._labelSizes=t=this._computeLabelSizes(o,o.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,o){const{ctx:s,_longestTextCache:c}=this,d=[],h=[],m=Math.floor(n/w2(n,o));let p=0,x=0,v,y,j,w,C,k,_,z,D,L,A;for(v=0;v<n;v+=m){if(w=t[v].label,C=this._resolveTickFontOptions(v),s.font=k=C.string,_=c[k]=c[k]||{data:{},gc:[]},z=C.lineHeight,D=L=0,!mt(w)&&!qt(w))D=Jy(s,_.data,_.gc,D,w),L=z;else if(qt(w))for(y=0,j=w.length;y<j;++y)A=w[y],!mt(A)&&!qt(A)&&(D=Jy(s,_.data,_.gc,D,A),L+=z);d.push(D),h.push(L),p=Math.max(D,p),x=Math.max(L,x)}lE(c,n);const V=d.indexOf(p),E=h.indexOf(x),F=te=>({width:d[te]||0,height:h[te]||0});return{first:F(0),last:F(n-1),widest:F(V),highest:F(E),widths:d,heights:h}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return nP(this._alignToPixels?gi(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const o=n[t];return o.$context||(o.$context=dE(this.getContext(),t,o))}return this.$context||(this.$context=cE(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=ki(this.labelRotation),o=Math.abs(Math.cos(n)),s=Math.abs(Math.sin(n)),c=this._getLabelSizes(),d=t.autoSkipPadding||0,h=c?c.widest.width+d:0,m=c?c.highest.height+d:0;return this.isHorizontal()?m*o>h*s?h/o:m/s:m*s<h*o?m/o:h/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,o=this.chart,s=this.options,{grid:c,position:d,border:h}=s,m=c.offset,p=this.isHorizontal(),v=this.ticks.length+(m?1:0),y=dl(c),j=[],w=h.setContext(this.getContext()),C=w.display?w.width:0,k=C/2,_=function(I){return gi(o,I,C)};let z,D,L,A,V,E,F,te,de,le,fe,me;if(d==="top")z=_(this.bottom),E=this.bottom-y,te=z-k,le=_(t.top)+k,me=t.bottom;else if(d==="bottom")z=_(this.top),le=t.top,me=_(t.bottom)-k,E=z+k,te=this.top+y;else if(d==="left")z=_(this.right),V=this.right-y,F=z-k,de=_(t.left)+k,fe=t.right;else if(d==="right")z=_(this.left),de=t.left,fe=_(t.right)-k,V=z+k,F=this.left+y;else if(n==="x"){if(d==="center")z=_((t.top+t.bottom)/2+.5);else if(Xe(d)){const I=Object.keys(d)[0],H=d[I];z=_(this.chart.scales[I].getPixelForValue(H))}le=t.top,me=t.bottom,E=z+k,te=E+y}else if(n==="y"){if(d==="center")z=_((t.left+t.right)/2);else if(Xe(d)){const I=Object.keys(d)[0],H=d[I];z=_(this.chart.scales[I].getPixelForValue(H))}V=z-k,F=V-y,de=t.left,fe=t.right}const pe=We(s.ticks.maxTicksLimit,v),be=Math.max(1,Math.ceil(v/pe));for(D=0;D<v;D+=be){const I=this.getContext(D),H=c.setContext(I),ee=h.setContext(I),ne=H.lineWidth,P=H.color,$=ee.dash||[],G=ee.dashOffset,R=H.tickWidth,Y=H.tickColor,J=H.tickBorderDash||[],Q=H.tickBorderDashOffset;L=sE(this,D,m),L!==void 0&&(A=gi(o,L,ne),p?V=F=de=fe=A:E=te=le=me=A,j.push({tx1:V,ty1:E,tx2:F,ty2:te,x1:de,y1:le,x2:fe,y2:me,width:ne,color:P,borderDash:$,borderDashOffset:G,tickWidth:R,tickColor:Y,tickBorderDash:J,tickBorderDashOffset:Q}))}return this._ticksLength=v,this._borderValue=z,j}_computeLabelItems(t){const n=this.axis,o=this.options,{position:s,ticks:c}=o,d=this.isHorizontal(),h=this.ticks,{align:m,crossAlign:p,padding:x,mirror:v}=c,y=dl(o.grid),j=y+x,w=v?-x:j,C=-ki(this.labelRotation),k=[];let _,z,D,L,A,V,E,F,te,de,le,fe,me="middle";if(s==="top")V=this.bottom-w,E=this._getXAxisLabelAlignment();else if(s==="bottom")V=this.top+w,E=this._getXAxisLabelAlignment();else if(s==="left"){const be=this._getYAxisLabelAlignment(y);E=be.textAlign,A=be.x}else if(s==="right"){const be=this._getYAxisLabelAlignment(y);E=be.textAlign,A=be.x}else if(n==="x"){if(s==="center")V=(t.top+t.bottom)/2+j;else if(Xe(s)){const be=Object.keys(s)[0],I=s[be];V=this.chart.scales[be].getPixelForValue(I)+j}E=this._getXAxisLabelAlignment()}else if(n==="y"){if(s==="center")A=(t.left+t.right)/2-j;else if(Xe(s)){const be=Object.keys(s)[0],I=s[be];A=this.chart.scales[be].getPixelForValue(I)}E=this._getYAxisLabelAlignment(y).textAlign}n==="y"&&(m==="start"?me="top":m==="end"&&(me="bottom"));const pe=this._getLabelSizes();for(_=0,z=h.length;_<z;++_){D=h[_],L=D.label;const be=c.setContext(this.getContext(_));F=this.getPixelForTick(_)+c.labelOffset,te=this._resolveTickFontOptions(_),de=te.lineHeight,le=qt(L)?L.length:1;const I=le/2,H=be.color,ee=be.textStrokeColor,ne=be.textStrokeWidth;let P=E;d?(A=F,E==="inner"&&(_===z-1?P=this.options.reverse?"left":"right":_===0?P=this.options.reverse?"right":"left":P="center"),s==="top"?p==="near"||C!==0?fe=-le*de+de/2:p==="center"?fe=-pe.highest.height/2-I*de+de:fe=-pe.highest.height+de/2:p==="near"||C!==0?fe=de/2:p==="center"?fe=pe.highest.height/2-I*de:fe=pe.highest.height-le*de,v&&(fe*=-1),C!==0&&!be.showLabelBackdrop&&(A+=de/2*Math.sin(C))):(V=F,fe=(1-le)*de/2);let $;if(be.showLabelBackdrop){const G=rn(be.backdropPadding),R=pe.heights[_],Y=pe.widths[_];let J=fe-G.top,Q=0-G.left;switch(me){case"middle":J-=R/2;break;case"bottom":J-=R;break}switch(E){case"center":Q-=Y/2;break;case"right":Q-=Y;break;case"inner":_===z-1?Q-=Y:_>0&&(Q-=Y/2);break}$={left:Q,top:J,width:Y+G.width,height:R+G.height,color:be.backdropColor}}k.push({label:L,font:te,textOffset:fe,options:{rotation:C,color:H,strokeColor:ee,strokeWidth:ne,textAlign:P,textBaseline:me,translation:[A,V],backdrop:$}})}return k}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-ki(this.labelRotation))return t==="top"?"left":"right";let s="center";return n.align==="start"?s="left":n.align==="end"?s="right":n.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:o,mirror:s,padding:c}}=this.options,d=this._getLabelSizes(),h=t+c,m=d.widest.width;let p,x;return n==="left"?s?(x=this.right+c,o==="near"?p="left":o==="center"?(p="center",x+=m/2):(p="right",x+=m)):(x=this.right-h,o==="near"?p="right":o==="center"?(p="center",x-=m/2):(p="left",x=this.left)):n==="right"?s?(x=this.left+c,o==="near"?p="right":o==="center"?(p="center",x-=m/2):(p="left",x-=m)):(x=this.left+h,o==="near"?p="left":o==="center"?(p="center",x+=m/2):(p="right",x=this.right)):p="right",{textAlign:p,x}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:o,top:s,width:c,height:d}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(o,s,c,d),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const s=this.ticks.findIndex(c=>c.value===t);return s>=0?n.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const n=this.options.grid,o=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let c,d;const h=(m,p,x)=>{!x.width||!x.color||(o.save(),o.lineWidth=x.width,o.strokeStyle=x.color,o.setLineDash(x.borderDash||[]),o.lineDashOffset=x.borderDashOffset,o.beginPath(),o.moveTo(m.x,m.y),o.lineTo(p.x,p.y),o.stroke(),o.restore())};if(n.display)for(c=0,d=s.length;c<d;++c){const m=s[c];n.drawOnChartArea&&h({x:m.x1,y:m.y1},{x:m.x2,y:m.y2},m),n.drawTicks&&h({x:m.tx1,y:m.ty1},{x:m.tx2,y:m.ty2},{color:m.tickColor,width:m.tickWidth,borderDash:m.tickBorderDash,borderDashOffset:m.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:o,grid:s}}=this,c=o.setContext(this.getContext()),d=o.display?c.width:0;if(!d)return;const h=s.setContext(this.getContext(0)).lineWidth,m=this._borderValue;let p,x,v,y;this.isHorizontal()?(p=gi(t,this.left,d)-d/2,x=gi(t,this.right,h)+h/2,v=y=m):(v=gi(t,this.top,d)-d/2,y=gi(t,this.bottom,h)+h/2,p=x=m),n.save(),n.lineWidth=c.width,n.strokeStyle=c.color,n.beginPath(),n.moveTo(p,v),n.lineTo(x,y),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const o=this.ctx,s=this._computeLabelArea();s&&Dh(o,s);const c=this.getLabelItems(t);for(const d of c){const h=d.options,m=d.font,p=d.label,x=d.textOffset;Nl(o,p,0,x,m,h)}s&&Ph(o)}drawTitle(){const{ctx:t,options:{position:n,title:o,reverse:s}}=this;if(!o.display)return;const c=pr(o.font),d=rn(o.padding),h=o.align;let m=c.lineHeight/2;n==="bottom"||n==="center"||Xe(n)?(m+=d.bottom,qt(o.text)&&(m+=c.lineHeight*(o.text.length-1))):m+=d.top;const{titleX:p,titleY:x,maxWidth:v,rotation:y}=hE(this,m,n,h);Nl(t,o.text,0,0,c,{color:o.color,maxWidth:v,rotation:y,textAlign:uE(h,n,s),textBaseline:"middle",translation:[p,x]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,o=We(t.grid&&t.grid.z,-1),s=We(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==ts.prototype.draw?[{z:n,draw:c=>{this.draw(c)}}]:[{z:o,draw:c=>{this.drawBackground(),this.drawGrid(c),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:n,draw:c=>{this.drawLabels(c)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),o=this.axis+"AxisID",s=[];let c,d;for(c=0,d=n.length;c<d;++c){const h=n[c];h[o]===this.id&&(!t||h.type===t)&&s.push(h)}return s}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return pr(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Rd{constructor(t,n,o){this.type=t,this.scope=n,this.override=o,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let o;mE(n)&&(o=this.register(n));const s=this.items,c=t.id,d=this.scope+"."+c;if(!c)throw new Error("class does not have id: "+t);return c in s||(s[c]=t,fE(t,d,o),this.override&&Ot.override(t.id,t.overrides)),d}get(t){return this.items[t]}unregister(t){const n=this.items,o=t.id,s=this.scope;o in n&&delete n[o],s&&o in Ot[s]&&(delete Ot[s][o],this.override&&delete Ai[o])}}function fE(e,t,n){const o=Ll(Object.create(null),[n?Ot.get(n):{},Ot.get(t),e.defaults]);Ot.set(t,o),e.defaultRoutes&&pE(t,e.defaultRoutes),e.descriptors&&Ot.describe(t,e.descriptors)}function pE(e,t){Object.keys(t).forEach(n=>{const o=n.split("."),s=o.pop(),c=[e].concat(o).join("."),d=t[n].split("."),h=d.pop(),m=d.join(".");Ot.route(c,s,m,h)})}function mE(e){return"id"in e&&"defaults"in e}class gE{constructor(){this.controllers=new Rd(Pl,"datasets",!0),this.elements=new Rd(co,"elements"),this.plugins=new Rd(Object,"plugins"),this.scales=new Rd(ts,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,o){[...n].forEach(s=>{const c=o||this._getRegistryForType(s);o||c.isForType(s)||c===this.plugins&&s.id?this._exec(t,c,s):at(s,d=>{const h=o||this._getRegistryForType(d);this._exec(t,h,d)})})}_exec(t,n,o){const s=Bg(t);bt(o["before"+s],[],o),n[t](o),bt(o["after"+s],[],o)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const o=this._typedRegistries[n];if(o.isForType(t))return o}return this.plugins}_get(t,n,o){const s=n.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+o+".");return s}}var Pn=new gE;class xE{constructor(){this._init=[]}notify(t,n,o,s){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const c=s?this._descriptors(t).filter(s):this._descriptors(t),d=this._notify(c,t,n,o);return n==="afterDestroy"&&(this._notify(c,t,"stop"),this._notify(this._init,t,"uninstall")),d}_notify(t,n,o,s){s=s||{};for(const c of t){const d=c.plugin,h=d[o],m=[n,s,c.options];if(bt(h,m,d)===!1&&s.cancelable)return!1}return!0}invalidate(){mt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const o=t&&t.config,s=We(o.options&&o.options.plugins,{}),c=bE(o);return s===!1&&!n?[]:yE(t,c,s,n)}_notifyStateChanges(t){const n=this._oldCache||[],o=this._cache,s=(c,d)=>c.filter(h=>!d.some(m=>h.plugin.id===m.plugin.id));this._notify(s(n,o),t,"stop"),this._notify(s(o,n),t,"start")}}function bE(e){const t={},n=[],o=Object.keys(Pn.plugins.items);for(let c=0;c<o.length;c++)n.push(Pn.getPlugin(o[c]));const s=e.plugins||[];for(let c=0;c<s.length;c++){const d=s[c];n.indexOf(d)===-1&&(n.push(d),t[d.id]=!0)}return{plugins:n,localIds:t}}function vE(e,t){return!t&&e===!1?null:e===!0?{}:e}function yE(e,{plugins:t,localIds:n},o,s){const c=[],d=e.getContext();for(const h of t){const m=h.id,p=vE(o[m],s);p!==null&&c.push({plugin:h,options:wE(e.config,{plugin:h,local:n[m]},p,d)})}return c}function wE(e,{plugin:t,local:n},o,s){const c=e.pluginScopeKeys(t),d=e.getOptionScopes(o,c);return n&&t.defaults&&d.push(t.defaults),e.createResolver(d,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Km(e,t){const n=Ot.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function jE(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function SE(e,t){return e===t?"_index_":"_value_"}function k2(e){if(e==="x"||e==="y"||e==="r")return e}function kE(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Jm(e,...t){if(k2(e))return e;for(const n of t){const o=n.axis||kE(n.position)||e.length>1&&k2(e[0].toLowerCase());if(o)return o}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function C2(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function CE(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(o=>o.xAxisID===e||o.yAxisID===e);if(n.length)return C2(e,"x",n[0])||C2(e,"y",n[0])}return{}}function ME(e,t){const n=Ai[e.type]||{scales:{}},o=t.scales||{},s=Km(e.type,t),c=Object.create(null);return Object.keys(o).forEach(d=>{const h=o[d];if(!Xe(h))return console.error(`Invalid scale configuration for scale: ${d}`);if(h._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${d}`);const m=Jm(d,h,CE(d,e),Ot.scales[h.type]),p=SE(m,s),x=n.scales||{};c[d]=Ml(Object.create(null),[{axis:m},h,x[m],x[p]])}),e.data.datasets.forEach(d=>{const h=d.type||e.type,m=d.indexAxis||Km(h,t),x=(Ai[h]||{}).scales||{};Object.keys(x).forEach(v=>{const y=jE(v,m),j=d[y+"AxisID"]||y;c[j]=c[j]||Object.create(null),Ml(c[j],[{axis:y},o[j],x[v]])})}),Object.keys(c).forEach(d=>{const h=c[d];Ml(h,[Ot.scales[h.type],Ot.scale])}),c}function $4(e){const t=e.options||(e.options={});t.plugins=We(t.plugins,{}),t.scales=ME(e,t)}function N4(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function _E(e){return e=e||{},e.data=N4(e.data),$4(e),e}const M2=new Map,H4=new Set;function Ld(e,t){let n=M2.get(e);return n||(n=t(),M2.set(e,n),H4.add(n)),n}const ul=(e,t,n)=>{const o=ih(t,n);o!==void 0&&e.add(o)};class TE{constructor(t){this._config=_E(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=N4(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),$4(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ld(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return Ld(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return Ld(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,o=this.type;return Ld(`${o}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const o=this._scopeCache;let s=o.get(t);return(!s||n)&&(s=new Map,o.set(t,s)),s}getOptionScopes(t,n,o){const{options:s,type:c}=this,d=this._cachedScopes(t,o),h=d.get(n);if(h)return h;const m=new Set;n.forEach(x=>{t&&(m.add(t),x.forEach(v=>ul(m,t,v))),x.forEach(v=>ul(m,s,v)),x.forEach(v=>ul(m,Ai[c]||{},v)),x.forEach(v=>ul(m,Ot,v)),x.forEach(v=>ul(m,Xm,v))});const p=Array.from(m);return p.length===0&&p.push(Object.create(null)),H4.has(n)&&d.set(n,p),p}chartOptionScopes(){const{options:t,type:n}=this;return[t,Ai[n]||{},Ot.datasets[n]||{},{type:n},Ot,Xm]}resolveNamedOptions(t,n,o,s=[""]){const c={$shared:!0},{resolver:d,subPrefixes:h}=_2(this._resolverCache,t,s);let m=d;if(DE(d,n)){c.$shared=!1,o=Xo(o)?o():o;const p=this.createResolver(t,o,h);m=Ya(d,o,p)}for(const p of n)c[p]=m[p];return c}createResolver(t,n,o=[""],s){const{resolver:c}=_2(this._resolverCache,t,o);return Xe(n)?Ya(c,n,void 0,s):c}}function _2(e,t,n){let o=e.get(t);o||(o=new Map,e.set(t,o));const s=n.join();let c=o.get(s);return c||(c={resolver:Fg(t,n),subPrefixes:n.filter(h=>!h.toLowerCase().includes("hover"))},o.set(s,c)),c}const zE=e=>Xe(e)&&Object.getOwnPropertyNames(e).some(t=>Xo(e[t]));function DE(e,t){const{isScriptable:n,isIndexable:o}=y4(e);for(const s of t){const c=n(s),d=o(s),h=(d||c)&&e[s];if(c&&(Xo(h)||zE(h))||d&&qt(h))return!0}return!1}var PE="4.5.0";const AE=["top","bottom","left","right","chartArea"];function T2(e,t){return e==="top"||e==="bottom"||AE.indexOf(e)===-1&&t==="x"}function z2(e,t){return function(n,o){return n[e]===o[e]?n[t]-o[t]:n[e]-o[e]}}function D2(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),bt(n&&n.onComplete,[e],t)}function EE(e){const t=e.chart,n=t.options.animation;bt(n&&n.onProgress,[e],t)}function F4(e){return Ig()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Yu={},P2=e=>{const t=F4(e);return Object.values(Yu).filter(n=>n.canvas===t).pop()};function OE(e,t,n){const o=Object.keys(e);for(const s of o){const c=+s;if(c>=t){const d=e[s];delete e[s],(n>0||c>t)&&(e[c+n]=d)}}}function RE(e,t,n,o){return!n||e.type==="mouseout"?null:o?t:e}var Fo;let Li=(Fo=class{static register(...t){Pn.add(...t),A2()}static unregister(...t){Pn.remove(...t),A2()}constructor(t,n){const o=this.config=new TE(n),s=F4(t),c=P2(s);if(c)throw new Error("Canvas is already in use. Chart with ID '"+c.id+"' must be destroyed before the canvas with ID '"+c.canvas.id+"' can be reused.");const d=o.createResolver(o.chartOptionScopes(),this.getContext());this.platform=new(o.platform||JA(s)),this.platform.updateConfig(o);const h=this.platform.acquireContext(s,d.aspectRatio),m=h&&h.canvas,p=m&&m.height,x=m&&m.width;if(this.id=FD(),this.ctx=h,this.canvas=m,this.width=x,this.height=p,this._options=d,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new xE,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=lP(v=>this.update(v),d.resizeDelay||0),this._dataChanges=[],Yu[this.id]=this,!h||!m){console.error("Failed to create chart: can't acquire context from the given item");return}to.listen(this,"complete",D2),to.listen(this,"progress",EE),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:o,height:s,_aspectRatio:c}=this;return mt(t)?n&&c?c:s?o/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Pn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():n2(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return e2(this.canvas,this.ctx),this}stop(){return to.stop(this),this}resize(t,n){to.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const o=this.options,s=this.canvas,c=o.maintainAspectRatio&&this.aspectRatio,d=this.platform.getMaximumSize(s,t,n,c),h=o.devicePixelRatio||this.platform.getDevicePixelRatio(),m=this.width?"resize":"attach";this.width=d.width,this.height=d.height,this._aspectRatio=this.aspectRatio,n2(this,h,!0)&&(this.notifyPlugins("resize",{size:d}),bt(o.onResize,[this,d],this),this.attached&&this._doResize(m)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};at(n,(o,s)=>{o.id=s})}buildOrUpdateScales(){const t=this.options,n=t.scales,o=this.scales,s=Object.keys(o).reduce((d,h)=>(d[h]=!1,d),{});let c=[];n&&(c=c.concat(Object.keys(n).map(d=>{const h=n[d],m=Jm(d,h),p=m==="r",x=m==="x";return{options:h,dposition:p?"chartArea":x?"bottom":"left",dtype:p?"radialLinear":x?"category":"linear"}}))),at(c,d=>{const h=d.options,m=h.id,p=Jm(m,h),x=We(h.type,d.dtype);(h.position===void 0||T2(h.position,p)!==T2(d.dposition))&&(h.position=d.dposition),s[m]=!0;let v=null;if(m in o&&o[m].type===x)v=o[m];else{const y=Pn.getScale(x);v=new y({id:m,type:x,ctx:this.ctx,chart:this}),o[v.id]=v}v.init(h,t)}),at(s,(d,h)=>{d||delete o[h]}),at(o,d=>{en.configure(this,d,d.options),en.addBox(this,d)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,o=t.length;if(t.sort((s,c)=>s.index-c.index),o>n){for(let s=n;s<o;++s)this._destroyDatasetMeta(s);t.splice(n,o-n)}this._sortedMetasets=t.slice(0).sort(z2("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((o,s)=>{n.filter(c=>c===o._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let o,s;for(this._removeUnreferencedMetasets(),o=0,s=n.length;o<s;o++){const c=n[o];let d=this.getDatasetMeta(o);const h=c.type||this.config.type;if(d.type&&d.type!==h&&(this._destroyDatasetMeta(o),d=this.getDatasetMeta(o)),d.type=h,d.indexAxis=c.indexAxis||Km(h,this.options),d.order=c.order||0,d.index=o,d.label=""+c.label,d.visible=this.isDatasetVisible(o),d.controller)d.controller.updateIndex(o),d.controller.linkScales();else{const m=Pn.getController(h),{datasetElementType:p,dataElementType:x}=Ot.datasets[h];Object.assign(m,{dataElementType:Pn.getElement(x),datasetElementType:p&&Pn.getElement(p)}),d.controller=new m(this,o),t.push(d.controller)}}return this._updateMetasets(),t}_resetElements(){at(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const o=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!o.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const c=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let d=0;for(let p=0,x=this.data.datasets.length;p<x;p++){const{controller:v}=this.getDatasetMeta(p),y=!s&&c.indexOf(v)===-1;v.buildOrUpdateElements(y),d=Math.max(+v.getMaxOverflow(),d)}d=this._minPadding=o.layout.autoPadding?d:0,this._updateLayout(d),s||at(c,p=>{p.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(z2("z","_idx"));const{_active:h,_lastEvent:m}=this;m?this._eventHandler(m,!0):h.length&&this._updateHoverStyles(h,h,!0),this.render()}_updateScales(){at(this.scales,t=>{en.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),o=new Set(t.events);(!Iy(n,o)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:o,start:s,count:c}of n){const d=o==="_removeElements"?-c:c;OE(t,s,d)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,o=c=>new Set(t.filter(d=>d[0]===c).map((d,h)=>h+","+d.splice(1).join(","))),s=o(0);for(let c=1;c<n;c++)if(!Iy(s,o(c)))return;return Array.from(s).map(c=>c.split(",")).map(c=>({method:c[1],start:+c[2],count:+c[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;en.update(this,this.width,this.height,t);const n=this.chartArea,o=n.width<=0||n.height<=0;this._layers=[],at(this.boxes,s=>{o&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,c)=>{s._idx=c}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,o=this.data.datasets.length;n<o;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,o=this.data.datasets.length;n<o;++n)this._updateDataset(n,Xo(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const o=this.getDatasetMeta(t),s={meta:o,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(o.controller._update(n),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(to.has(this)?this.attached&&!to.running(this)&&to.start(this):(this.draw(),D2({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:o,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(o,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,o=[];let s,c;for(s=0,c=n.length;s<c;++s){const d=n[s];(!t||d.visible)&&o.push(d)}return o}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,o={meta:t,index:t.index,cancelable:!0},s=D4(this,t);this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&Dh(n,s),t.controller.draw(),s&&Ph(n),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return $l(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,o,s){const c=AA.modes[n];return typeof c=="function"?c(this,t,o,s):[]}getDatasetMeta(t){const n=this.data.datasets[t],o=this._metasets;let s=o.filter(c=>c&&c._dataset===n).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},o.push(s)),s}getContext(){return this.$context||(this.$context=Ri(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const o=this.getDatasetMeta(t);return typeof o.hidden=="boolean"?!o.hidden:!n.hidden}setDatasetVisibility(t,n){const o=this.getDatasetMeta(t);o.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,o){const s=o?"show":"hide",c=this.getDatasetMeta(t),d=c.controller._resolveAnimations(void 0,s);ah(n)?(c.data[n].hidden=!o,this.update()):(this.setDatasetVisibility(t,o),d.update(c,{visible:o}),this.update(h=>h.datasetIndex===t?s:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),to.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),e2(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Yu[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,o=(c,d)=>{n.addEventListener(this,c,d),t[c]=d},s=(c,d,h)=>{c.offsetX=d,c.offsetY=h,this._eventHandler(c)};at(this.options.events,c=>o(c,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,o=(m,p)=>{n.addEventListener(this,m,p),t[m]=p},s=(m,p)=>{t[m]&&(n.removeEventListener(this,m,p),delete t[m])},c=(m,p)=>{this.canvas&&this.resize(m,p)};let d;const h=()=>{s("attach",h),this.attached=!0,this.resize(),o("resize",c),o("detach",d)};d=()=>{this.attached=!1,s("resize",c),this._stop(),this._resize(0,0),o("attach",h)},n.isAttached(this.canvas)?h():d()}unbindEvents(){at(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},at(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,o){const s=o?"set":"remove";let c,d,h,m;for(n==="dataset"&&(c=this.getDatasetMeta(t[0].datasetIndex),c.controller["_"+s+"DatasetHoverStyle"]()),h=0,m=t.length;h<m;++h){d=t[h];const p=d&&this.getDatasetMeta(d.datasetIndex).controller;p&&p[s+"HoverStyle"](d.element,d.datasetIndex,d.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],o=t.map(({datasetIndex:c,index:d})=>{const h=this.getDatasetMeta(c);if(!h)throw new Error("No dataset found at index "+c);return{datasetIndex:c,element:h.data[d],index:d}});!nh(o,n)&&(this._active=o,this._lastEvent=null,this._updateHoverStyles(o,n))}notifyPlugins(t,n,o){return this._plugins.notify(this,t,n,o)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,o){const s=this.options.hover,c=(m,p)=>m.filter(x=>!p.some(v=>x.datasetIndex===v.datasetIndex&&x.index===v.index)),d=c(n,t),h=o?t:c(t,n);d.length&&this.updateHoverStyle(d,s.mode,!1),h.length&&s.mode&&this.updateHoverStyle(h,s.mode,!0)}_eventHandler(t,n){const o={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},s=d=>(d.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",o,s)===!1)return;const c=this._handleEvent(t,n,o.inChartArea);return o.cancelable=!1,this.notifyPlugins("afterEvent",o,s),(c||o.changed)&&this.render(),this}_handleEvent(t,n,o){const{_active:s=[],options:c}=this,d=n,h=this._getActiveElements(t,s,o,d),m=WD(t),p=RE(t,this._lastEvent,o,m);o&&(this._lastEvent=null,bt(c.onHover,[t,h,this],this),m&&bt(c.onClick,[t,h,this],this));const x=!nh(h,s);return(x||n)&&(this._active=h,this._updateHoverStyles(h,s,n)),this._lastEvent=p,x}_getActiveElements(t,n,o,s){if(t.type==="mouseout")return[];if(!o)return n;const c=this.options.hover;return this.getElementsAtEventForMode(t,c.mode,c,s)}},Be(Fo,"defaults",Ot),Be(Fo,"instances",Yu),Be(Fo,"overrides",Ai),Be(Fo,"registry",Pn),Be(Fo,"version",PE),Be(Fo,"getChart",P2),Fo);function A2(){return at(Li.instances,e=>e._plugins.invalidate())}function V4(e,t,n=t){e.lineCap=We(n.borderCapStyle,t.borderCapStyle),e.setLineDash(We(n.borderDash,t.borderDash)),e.lineDashOffset=We(n.borderDashOffset,t.borderDashOffset),e.lineJoin=We(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=We(n.borderWidth,t.borderWidth),e.strokeStyle=We(n.borderColor,t.borderColor)}function LE(e,t,n){e.lineTo(n.x,n.y)}function BE(e){return e.stepped?jP:e.tension||e.cubicInterpolationMode==="monotone"?SP:LE}function U4(e,t,n={}){const o=e.length,{start:s=0,end:c=o-1}=n,{start:d,end:h}=t,m=Math.max(s,d),p=Math.min(c,h),x=s<d&&c<d||s>h&&c>h;return{count:o,start:m,loop:t.loop,ilen:p<m&&!x?o+p-m:p-m}}function $E(e,t,n,o){const{points:s,options:c}=t,{count:d,start:h,loop:m,ilen:p}=U4(s,n,o),x=BE(c);let{move:v=!0,reverse:y}=o||{},j,w,C;for(j=0;j<=p;++j)w=s[(h+(y?p-j:j))%d],!w.skip&&(v?(e.moveTo(w.x,w.y),v=!1):x(e,C,w,y,c.stepped),C=w);return m&&(w=s[(h+(y?p:0))%d],x(e,C,w,y,c.stepped)),!!m}function NE(e,t,n,o){const s=t.points,{count:c,start:d,ilen:h}=U4(s,n,o),{move:m=!0,reverse:p}=o||{};let x=0,v=0,y,j,w,C,k,_;const z=L=>(d+(p?h-L:L))%c,D=()=>{C!==k&&(e.lineTo(x,k),e.lineTo(x,C),e.lineTo(x,_))};for(m&&(j=s[z(0)],e.moveTo(j.x,j.y)),y=0;y<=h;++y){if(j=s[z(y)],j.skip)continue;const L=j.x,A=j.y,V=L|0;V===w?(A<C?C=A:A>k&&(k=A),x=(v*x+L)/++v):(D(),e.lineTo(L,A),w=V,v=0,C=k=A),_=A}D()}function eg(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?NE:$E}function HE(e){return e.stepped?rA:e.tension||e.cubicInterpolationMode==="monotone"?nA:vi}function FE(e,t,n,o){let s=t._path;s||(s=t._path=new Path2D,t.path(s,n,o)&&s.closePath()),V4(e,t.options),e.stroke(s)}function VE(e,t,n,o){const{segments:s,options:c}=t,d=eg(t);for(const h of s)V4(e,c,h.style),e.beginPath(),d(e,t,h,{start:n,end:n+o-1})&&e.closePath(),e.stroke()}const UE=typeof Path2D=="function";function IE(e,t,n,o){UE&&!t.options.segment?FE(e,t,n,o):VE(e,t,n,o)}class fn extends co{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const o=this.options;if((o.tension||o.cubicInterpolationMode==="monotone")&&!o.stepped&&!this._pointsUpdated){const s=o.spanGaps?this._loop:this._fullLoop;GP(this._points,o,t,s,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=cA(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,o=t.length;return o&&n[t[o-1].end]}interpolate(t,n){const o=this.options,s=t[n],c=this.points,d=z4(this,{property:n,start:s,end:s});if(!d.length)return;const h=[],m=HE(o);let p,x;for(p=0,x=d.length;p<x;++p){const{start:v,end:y}=d[p],j=c[v],w=c[y];if(j===w){h.push(j);continue}const C=Math.abs((s-j[n])/(w[n]-j[n])),k=m(j,w,C,o.stepped);k[n]=t[n],h.push(k)}return h.length===1?h[0]:h}pathSegment(t,n,o){return eg(this)(t,this,n,o)}path(t,n,o){const s=this.segments,c=eg(this);let d=this._loop;n=n||0,o=o||this.points.length-n;for(const h of s)d&=c(t,this,h,{start:n,end:n+o-1});return!!d}draw(t,n,o,s){const c=this.options||{};(this.points||[]).length&&c.borderWidth&&(t.save(),IE(t,this,o,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}Be(fn,"id","line"),Be(fn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),Be(fn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),Be(fn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function E2(e,t,n,o){const s=e.options,{[n]:c}=e.getProps([n],o);return Math.abs(t-c)<s.radius+s.hitRadius}class Di extends co{constructor(n){super();Be(this,"parsed");Be(this,"skip");Be(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,o,s){const c=this.options,{x:d,y:h}=this.getProps(["x","y"],s);return Math.pow(n-d,2)+Math.pow(o-h,2)<Math.pow(c.hitRadius+c.radius,2)}inXRange(n,o){return E2(this,n,"x",o)}inYRange(n,o){return E2(this,n,"y",o)}getCenterPoint(n){const{x:o,y:s}=this.getProps(["x","y"],n);return{x:o,y:s}}size(n){n=n||this.options||{};let o=n.radius||0;o=Math.max(o,o&&n.hoverRadius||0);const s=o&&n.borderWidth||0;return(o+s)*2}draw(n,o){const s=this.options;this.skip||s.radius<.1||!$l(this,o,this.size(s)/2)||(n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.fillStyle=s.backgroundColor,Qm(n,s,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}Be(Di,"id","point"),Be(Di,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),Be(Di,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function YE(e,t,n){const o=e.segments,s=e.points,c=t.points,d=[];for(const h of o){let{start:m,end:p}=h;p=Oh(m,p,s);const x=tg(n,s[m],s[p],h.loop);if(!t.segments){d.push({source:h,target:x,start:s[m],end:s[p]});continue}const v=z4(t,x);for(const y of v){const j=tg(n,c[y.start],c[y.end],y.loop),w=T4(h,s,j);for(const C of w)d.push({source:C,target:y,start:{[n]:O2(x,j,"start",Math.max)},end:{[n]:O2(x,j,"end",Math.min)}})}}return d}function tg(e,t,n,o){if(o)return;let s=t[e],c=n[e];return e==="angle"&&(s=An(s),c=An(c)),{property:e,start:s,end:c}}function qE(e,t){const{x:n=null,y:o=null}=e||{},s=t.points,c=[];return t.segments.forEach(({start:d,end:h})=>{h=Oh(d,h,s);const m=s[d],p=s[h];o!==null?(c.push({x:m.x,y:o}),c.push({x:p.x,y:o})):n!==null&&(c.push({x:n,y:m.y}),c.push({x:n,y:p.y}))}),c}function Oh(e,t,n){for(;t>e;t--){const o=n[t];if(!isNaN(o.x)&&!isNaN(o.y))break}return t}function O2(e,t,n,o){return e&&t?o(e[n],t[n]):e?e[n]:t?t[n]:0}function I4(e,t){let n=[],o=!1;return qt(e)?(o=!0,n=e):n=qE(e,t),n.length?new fn({points:n,options:{tension:0},_loop:o,_fullLoop:o}):null}function R2(e){return e&&e.fill!==!1}function WE(e,t,n){let s=e[t].fill;const c=[t];let d;if(!n)return s;for(;s!==!1&&c.indexOf(s)===-1;){if(!mr(s))return s;if(d=e[s],!d)return!1;if(d.visible)return s;c.push(s),s=d.fill}return!1}function GE(e,t,n){const o=KE(e);if(Xe(o))return isNaN(o.value)?!1:o;let s=parseFloat(o);return mr(s)&&Math.floor(s)===s?XE(o[0],t,s,n):["origin","start","end","stack","shape"].indexOf(o)>=0&&o}function XE(e,t,n,o){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=o?!1:n}function QE(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:Xe(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function ZE(e,t,n){let o;return e==="start"?o=n:e==="end"?o=t.options.reverse?t.min:t.max:Xe(e)?o=e.value:o=t.getBaseValue(),o}function KE(e){const t=e.options,n=t.fill;let o=We(n&&n.target,n);return o===void 0&&(o=!!t.backgroundColor),o===!1||o===null?!1:o===!0?"origin":o}function JE(e){const{scale:t,index:n,line:o}=e,s=[],c=o.segments,d=o.points,h=eO(t,n);h.push(I4({x:null,y:t.bottom},o));for(let m=0;m<c.length;m++){const p=c[m];for(let x=p.start;x<=p.end;x++)tO(s,d[x],h)}return new fn({points:s,options:{}})}function eO(e,t){const n=[],o=e.getMatchingVisibleMetas("line");for(let s=0;s<o.length;s++){const c=o[s];if(c.index===t)break;c.hidden||n.unshift(c.dataset)}return n}function tO(e,t,n){const o=[];for(let s=0;s<n.length;s++){const c=n[s],{first:d,last:h,point:m}=rO(c,t,"x");if(!(!m||d&&h)){if(d)o.unshift(m);else if(e.push(m),!h)break}}e.push(...o)}function rO(e,t,n){const o=e.interpolate(t,n);if(!o)return{};const s=o[n],c=e.segments,d=e.points;let h=!1,m=!1;for(let p=0;p<c.length;p++){const x=c[p],v=d[x.start][n],y=d[x.end][n];if(Ra(s,v,y)){h=s===v,m=s===y;break}}return{first:h,last:m,point:o}}class Y4{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,o){const{x:s,y:c,radius:d}=this;return n=n||{start:0,end:mn},t.arc(s,c,d,n.end,n.start,!0),!o.bounds}interpolate(t){const{x:n,y:o,radius:s}=this,c=t.angle;return{x:n+Math.cos(c)*s,y:o+Math.sin(c)*s,angle:c}}}function nO(e){const{chart:t,fill:n,line:o}=e;if(mr(n))return oO(t,n);if(n==="stack")return JE(e);if(n==="shape")return!0;const s=iO(e);return s instanceof Y4?s:I4(s,o)}function oO(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function iO(e){return(e.scale||{}).getPointPositionForValue?sO(e):aO(e)}function aO(e){const{scale:t={},fill:n}=e,o=QE(n,t);if(mr(o)){const s=t.isHorizontal();return{x:s?o:null,y:s?null:o}}return null}function sO(e){const{scale:t,fill:n}=e,o=t.options,s=t.getLabels().length,c=o.reverse?t.max:t.min,d=ZE(n,t,c),h=[];if(o.grid.circular){const m=t.getPointPositionForValue(0,c);return new Y4({x:m.x,y:m.y,radius:t.getDistanceFromCenterForValue(d)})}for(let m=0;m<s;++m)h.push(t.getPointPositionForValue(m,d));return h}function L0(e,t,n){const o=nO(t),{chart:s,index:c,line:d,scale:h,axis:m}=t,p=d.options,x=p.fill,v=p.backgroundColor,{above:y=v,below:j=v}=x||{},w=s.getDatasetMeta(c),C=D4(s,w);o&&d.points.length&&(Dh(e,n),lO(e,{line:d,target:o,above:y,below:j,area:n,scale:h,axis:m,clip:C}),Ph(e))}function lO(e,t){const{line:n,target:o,above:s,below:c,area:d,scale:h,clip:m}=t,p=n._loop?"angle":t.axis;e.save();let x=c;c!==s&&(p==="x"?(L2(e,o,d.top),B0(e,{line:n,target:o,color:s,scale:h,property:p,clip:m}),e.restore(),e.save(),L2(e,o,d.bottom)):p==="y"&&(B2(e,o,d.left),B0(e,{line:n,target:o,color:c,scale:h,property:p,clip:m}),e.restore(),e.save(),B2(e,o,d.right),x=s)),B0(e,{line:n,target:o,color:x,scale:h,property:p,clip:m}),e.restore()}function L2(e,t,n){const{segments:o,points:s}=t;let c=!0,d=!1;e.beginPath();for(const h of o){const{start:m,end:p}=h,x=s[m],v=s[Oh(m,p,s)];c?(e.moveTo(x.x,x.y),c=!1):(e.lineTo(x.x,n),e.lineTo(x.x,x.y)),d=!!t.pathSegment(e,h,{move:d}),d?e.closePath():e.lineTo(v.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function B2(e,t,n){const{segments:o,points:s}=t;let c=!0,d=!1;e.beginPath();for(const h of o){const{start:m,end:p}=h,x=s[m],v=s[Oh(m,p,s)];c?(e.moveTo(x.x,x.y),c=!1):(e.lineTo(n,x.y),e.lineTo(x.x,x.y)),d=!!t.pathSegment(e,h,{move:d}),d?e.closePath():e.lineTo(n,v.y)}e.lineTo(n,t.first().y),e.closePath(),e.clip()}function B0(e,t){const{line:n,target:o,property:s,color:c,scale:d,clip:h}=t,m=YE(n,o,s);for(const{source:p,target:x,start:v,end:y}of m){const{style:{backgroundColor:j=c}={}}=p,w=o!==!0;e.save(),e.fillStyle=j,cO(e,d,h,w&&tg(s,v,y)),e.beginPath();const C=!!n.pathSegment(e,p);let k;if(w){C?e.closePath():$2(e,o,y,s);const _=!!o.pathSegment(e,x,{move:C,reverse:!0});k=C&&_,k||$2(e,o,v,s)}e.closePath(),e.fill(k?"evenodd":"nonzero"),e.restore()}}function cO(e,t,n,o){const s=t.chart.chartArea,{property:c,start:d,end:h}=o||{};if(c==="x"||c==="y"){let m,p,x,v;c==="x"?(m=d,p=s.top,x=h,v=s.bottom):(m=s.left,p=d,x=s.right,v=h),e.beginPath(),n&&(m=Math.max(m,n.left),x=Math.min(x,n.right),p=Math.max(p,n.top),v=Math.min(v,n.bottom)),e.rect(m,p,x-m,v-p),e.clip()}}function $2(e,t,n,o){const s=t.interpolate(n,o);s&&e.lineTo(s.x,s.y)}var Rh={id:"filler",afterDatasetsUpdate(e,t,n){const o=(e.data.datasets||[]).length,s=[];let c,d,h,m;for(d=0;d<o;++d)c=e.getDatasetMeta(d),h=c.dataset,m=null,h&&h.options&&h instanceof fn&&(m={visible:e.isDatasetVisible(d),index:d,fill:GE(h,d,o),chart:e,axis:c.controller.options.indexAxis,scale:c.vScale,line:h}),c.$filler=m,s.push(m);for(d=0;d<o;++d)m=s[d],!(!m||m.fill===!1)&&(m.fill=WE(s,d,n.propagate))},beforeDraw(e,t,n){const o=n.drawTime==="beforeDraw",s=e.getSortedVisibleDatasetMetas(),c=e.chartArea;for(let d=s.length-1;d>=0;--d){const h=s[d].$filler;h&&(h.line.updateControlPoints(c,h.axis),o&&h.fill&&L0(e.ctx,h,c))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const o=e.getSortedVisibleDatasetMetas();for(let s=o.length-1;s>=0;--s){const c=o[s].$filler;R2(c)&&L0(e.ctx,c,e.chartArea)}},beforeDatasetDraw(e,t,n){const o=t.meta.$filler;!R2(o)||n.drawTime!=="beforeDatasetDraw"||L0(e.ctx,o,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const N2=(e,t)=>{let{boxHeight:n=t,boxWidth:o=t}=e;return e.usePointStyle&&(n=Math.min(n,t),o=e.pointStyleWidth||Math.min(o,t)),{boxWidth:o,boxHeight:n,itemHeight:Math.max(t,n)}},dO=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class H2 extends co{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,o){this.maxWidth=t,this.maxHeight=n,this._margins=o,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=bt(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(o=>t.filter(o,this.chart.data))),t.sort&&(n=n.sort((o,s)=>t.sort(o,s,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const o=t.labels,s=pr(o.font),c=s.size,d=this._computeTitleHeight(),{boxWidth:h,itemHeight:m}=N2(o,c);let p,x;n.font=s.string,this.isHorizontal()?(p=this.maxWidth,x=this._fitRows(d,c,h,m)+10):(x=this.maxHeight,p=this._fitCols(d,s,h,m)+10),this.width=Math.min(p,t.maxWidth||this.maxWidth),this.height=Math.min(x,t.maxHeight||this.maxHeight)}_fitRows(t,n,o,s){const{ctx:c,maxWidth:d,options:{labels:{padding:h}}}=this,m=this.legendHitBoxes=[],p=this.lineWidths=[0],x=s+h;let v=t;c.textAlign="left",c.textBaseline="middle";let y=-1,j=-x;return this.legendItems.forEach((w,C)=>{const k=o+n/2+c.measureText(w.text).width;(C===0||p[p.length-1]+k+2*h>d)&&(v+=x,p[p.length-(C>0?0:1)]=0,j+=x,y++),m[C]={left:0,top:j,row:y,width:k,height:s},p[p.length-1]+=k+h}),v}_fitCols(t,n,o,s){const{ctx:c,maxHeight:d,options:{labels:{padding:h}}}=this,m=this.legendHitBoxes=[],p=this.columnSizes=[],x=d-t;let v=h,y=0,j=0,w=0,C=0;return this.legendItems.forEach((k,_)=>{const{itemWidth:z,itemHeight:D}=uO(o,n,c,k,s);_>0&&j+D+2*h>x&&(v+=y+h,p.push({width:y,height:j}),w+=y+h,C++,y=j=0),m[_]={left:w,top:j,col:C,width:z,height:D},y=Math.max(y,z),j+=D+h}),v+=y,p.push({width:y,height:j}),v}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:o,labels:{padding:s},rtl:c}}=this,d=La(c,this.left,this.width);if(this.isHorizontal()){let h=0,m=ur(o,this.left+s,this.right-this.lineWidths[h]);for(const p of n)h!==p.row&&(h=p.row,m=ur(o,this.left+s,this.right-this.lineWidths[h])),p.top+=this.top+t+s,p.left=d.leftForLtr(d.x(m),p.width),m+=p.width+s}else{let h=0,m=ur(o,this.top+t+s,this.bottom-this.columnSizes[h].height);for(const p of n)p.col!==h&&(h=p.col,m=ur(o,this.top+t+s,this.bottom-this.columnSizes[h].height)),p.top=m,p.left+=this.left+s,p.left=d.leftForLtr(d.x(p.left),p.width),m+=p.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Dh(t,this),this._draw(),Ph(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:o,ctx:s}=this,{align:c,labels:d}=t,h=Ot.color,m=La(t.rtl,this.left,this.width),p=pr(d.font),{padding:x}=d,v=p.size,y=v/2;let j;this.drawTitle(),s.textAlign=m.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=p.string;const{boxWidth:w,boxHeight:C,itemHeight:k}=N2(d,v),_=function(V,E,F){if(isNaN(w)||w<=0||isNaN(C)||C<0)return;s.save();const te=We(F.lineWidth,1);if(s.fillStyle=We(F.fillStyle,h),s.lineCap=We(F.lineCap,"butt"),s.lineDashOffset=We(F.lineDashOffset,0),s.lineJoin=We(F.lineJoin,"miter"),s.lineWidth=te,s.strokeStyle=We(F.strokeStyle,h),s.setLineDash(We(F.lineDash,[])),d.usePointStyle){const de={radius:C*Math.SQRT2/2,pointStyle:F.pointStyle,rotation:F.rotation,borderWidth:te},le=m.xPlus(V,w/2),fe=E+y;b4(s,de,le,fe,d.pointStyleWidth&&w)}else{const de=E+Math.max((v-C)/2,0),le=m.leftForLtr(V,w),fe=Dl(F.borderRadius);s.beginPath(),Object.values(fe).some(me=>me!==0)?Zm(s,{x:le,y:de,w,h:C,radius:fe}):s.rect(le,de,w,C),s.fill(),te!==0&&s.stroke()}s.restore()},z=function(V,E,F){Nl(s,F.text,V,E+k/2,p,{strikethrough:F.hidden,textAlign:m.textAlign(F.textAlign)})},D=this.isHorizontal(),L=this._computeTitleHeight();D?j={x:ur(c,this.left+x,this.right-o[0]),y:this.top+x+L,line:0}:j={x:this.left+x,y:ur(c,this.top+L+x,this.bottom-n[0].height),line:0},C4(this.ctx,t.textDirection);const A=k+x;this.legendItems.forEach((V,E)=>{s.strokeStyle=V.fontColor,s.fillStyle=V.fontColor;const F=s.measureText(V.text).width,te=m.textAlign(V.textAlign||(V.textAlign=d.textAlign)),de=w+y+F;let le=j.x,fe=j.y;m.setWidth(this.width),D?E>0&&le+de+x>this.right&&(fe=j.y+=A,j.line++,le=j.x=ur(c,this.left+x,this.right-o[j.line])):E>0&&fe+A>this.bottom&&(le=j.x=le+n[j.line].width+x,j.line++,fe=j.y=ur(c,this.top+L+x,this.bottom-n[j.line].height));const me=m.x(le);if(_(me,fe,V),le=cP(te,le+w+y,D?le+de:this.right,t.rtl),z(m.x(le),fe,V),D)j.x+=de+x;else if(typeof V.text!="string"){const pe=p.lineHeight;j.y+=q4(V,pe)+x}else j.y+=A}),M4(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,o=pr(n.font),s=rn(n.padding);if(!n.display)return;const c=La(t.rtl,this.left,this.width),d=this.ctx,h=n.position,m=o.size/2,p=s.top+m;let x,v=this.left,y=this.width;if(this.isHorizontal())y=Math.max(...this.lineWidths),x=this.top+p,v=ur(t.align,v,this.right-y);else{const w=this.columnSizes.reduce((C,k)=>Math.max(C,k.height),0);x=p+ur(t.align,this.top,this.bottom-w-t.labels.padding-this._computeTitleHeight())}const j=ur(h,v,v+y);d.textAlign=c.textAlign(Ng(h)),d.textBaseline="middle",d.strokeStyle=n.color,d.fillStyle=n.color,d.font=o.string,Nl(d,n.text,j,x,o)}_computeTitleHeight(){const t=this.options.title,n=pr(t.font),o=rn(t.padding);return t.display?n.lineHeight+o.height:0}_getLegendItemAt(t,n){let o,s,c;if(Ra(t,this.left,this.right)&&Ra(n,this.top,this.bottom)){for(c=this.legendHitBoxes,o=0;o<c.length;++o)if(s=c[o],Ra(t,s.left,s.left+s.width)&&Ra(n,s.top,s.top+s.height))return this.legendItems[o]}return null}handleEvent(t){const n=this.options;if(!pO(t.type,n))return;const o=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,c=dO(s,o);s&&!c&&bt(n.onLeave,[t,s,this],this),this._hoveredItem=o,o&&!c&&bt(n.onHover,[t,o,this],this)}else o&&bt(n.onClick,[t,o,this],this)}}function uO(e,t,n,o,s){const c=hO(o,e,t,n),d=fO(s,o,t.lineHeight);return{itemWidth:c,itemHeight:d}}function hO(e,t,n,o){let s=e.text;return s&&typeof s!="string"&&(s=s.reduce((c,d)=>c.length>d.length?c:d)),t+n.size/2+o.measureText(s).width}function fO(e,t,n){let o=e;return typeof t.text!="string"&&(o=q4(t,n)),o}function q4(e,t){const n=e.text?e.text.length:0;return t*n}function pO(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var Lh={id:"legend",_element:H2,start(e,t,n){const o=e.legend=new H2({ctx:e.ctx,options:n,chart:e});en.configure(e,o,n),en.addBox(e,o)},stop(e){en.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const o=e.legend;en.configure(e,o,n),o.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const o=t.datasetIndex,s=n.chart;s.isDatasetVisible(o)?(s.hide(o),t.hidden=!0):(s.show(o),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:o,textAlign:s,color:c,useBorderRadius:d,borderRadius:h}}=e.legend.options;return e._getSortedDatasetMetas().map(m=>{const p=m.controller.getStyle(n?0:void 0),x=rn(p.borderWidth);return{text:t[m.index].label,fillStyle:p.backgroundColor,fontColor:c,hidden:!m.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(x.width+x.height)/4,strokeStyle:p.borderColor,pointStyle:o||p.pointStyle,rotation:p.rotation,textAlign:s||p.textAlign,borderRadius:d&&(h||p.borderRadius),datasetIndex:m.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};let W4=class extends co{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const o=this.options;if(this.left=0,this.top=0,!o.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const s=qt(o.text)?o.text.length:1;this._padding=rn(o.padding);const c=s*pr(o.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=c:this.width=c}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:o,bottom:s,right:c,options:d}=this,h=d.align;let m=0,p,x,v;return this.isHorizontal()?(x=ur(h,o,c),v=n+t,p=c-o):(d.position==="left"?(x=o+t,v=ur(h,s,n),m=er*-.5):(x=c-t,v=ur(h,n,s),m=er*.5),p=s-n),{titleX:x,titleY:v,maxWidth:p,rotation:m}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const o=pr(n.font),c=o.lineHeight/2+this._padding.top,{titleX:d,titleY:h,maxWidth:m,rotation:p}=this._drawArgs(c);Nl(t,n.text,0,0,o,{color:n.color,maxWidth:m,rotation:p,textAlign:Ng(n.align),textBaseline:"middle",translation:[d,h]})}};function mO(e,t){const n=new W4({ctx:e.ctx,options:t,chart:e});en.configure(e,n,t),en.addBox(e,n),e.titleBlock=n}var Bh={id:"title",_element:W4,start(e,t,n){mO(e,n)},stop(e){const t=e.titleBlock;en.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const o=e.titleBlock;en.configure(e,o,n),o.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const kl={average(e){if(!e.length)return!1;let t,n,o=new Set,s=0,c=0;for(t=0,n=e.length;t<n;++t){const h=e[t].element;if(h&&h.hasValue()){const m=h.tooltipPosition();o.add(m.x),s+=m.y,++c}}return c===0||o.size===0?!1:{x:[...o].reduce((h,m)=>h+m)/o.size,y:s/c}},nearest(e,t){if(!e.length)return!1;let n=t.x,o=t.y,s=Number.POSITIVE_INFINITY,c,d,h;for(c=0,d=e.length;c<d;++c){const m=e[c].element;if(m&&m.hasValue()){const p=m.getCenterPoint(),x=Gm(t,p);x<s&&(s=x,h=m)}}if(h){const m=h.tooltipPosition();n=m.x,o=m.y}return{x:n,y:o}}};function Dn(e,t){return t&&(qt(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function ro(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function gO(e,t){const{element:n,datasetIndex:o,index:s}=t,c=e.getDatasetMeta(o).controller,{label:d,value:h}=c.getLabelAndValue(s);return{chart:e,label:d,parsed:c.getParsed(s),raw:e.data.datasets[o].data[s],formattedValue:h,dataset:c.getDataset(),dataIndex:s,datasetIndex:o,element:n}}function F2(e,t){const n=e.chart.ctx,{body:o,footer:s,title:c}=e,{boxWidth:d,boxHeight:h}=t,m=pr(t.bodyFont),p=pr(t.titleFont),x=pr(t.footerFont),v=c.length,y=s.length,j=o.length,w=rn(t.padding);let C=w.height,k=0,_=o.reduce((L,A)=>L+A.before.length+A.lines.length+A.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,v&&(C+=v*p.lineHeight+(v-1)*t.titleSpacing+t.titleMarginBottom),_){const L=t.displayColors?Math.max(h,m.lineHeight):m.lineHeight;C+=j*L+(_-j)*m.lineHeight+(_-1)*t.bodySpacing}y&&(C+=t.footerMarginTop+y*x.lineHeight+(y-1)*t.footerSpacing);let z=0;const D=function(L){k=Math.max(k,n.measureText(L).width+z)};return n.save(),n.font=p.string,at(e.title,D),n.font=m.string,at(e.beforeBody.concat(e.afterBody),D),z=t.displayColors?d+2+t.boxPadding:0,at(o,L=>{at(L.before,D),at(L.lines,D),at(L.after,D)}),z=0,n.font=x.string,at(e.footer,D),n.restore(),k+=w.width,{width:k,height:C}}function xO(e,t){const{y:n,height:o}=t;return n<o/2?"top":n>e.height-o/2?"bottom":"center"}function bO(e,t,n,o){const{x:s,width:c}=o,d=n.caretSize+n.caretPadding;if(e==="left"&&s+c+d>t.width||e==="right"&&s-c-d<0)return!0}function vO(e,t,n,o){const{x:s,width:c}=n,{width:d,chartArea:{left:h,right:m}}=e;let p="center";return o==="center"?p=s<=(h+m)/2?"left":"right":s<=c/2?p="left":s>=d-c/2&&(p="right"),bO(p,e,t,n)&&(p="center"),p}function V2(e,t,n){const o=n.yAlign||t.yAlign||xO(e,n);return{xAlign:n.xAlign||t.xAlign||vO(e,t,n,o),yAlign:o}}function yO(e,t){let{x:n,width:o}=e;return t==="right"?n-=o:t==="center"&&(n-=o/2),n}function wO(e,t,n){let{y:o,height:s}=e;return t==="top"?o+=n:t==="bottom"?o-=s+n:o-=s/2,o}function U2(e,t,n,o){const{caretSize:s,caretPadding:c,cornerRadius:d}=e,{xAlign:h,yAlign:m}=n,p=s+c,{topLeft:x,topRight:v,bottomLeft:y,bottomRight:j}=Dl(d);let w=yO(t,h);const C=wO(t,m,p);return m==="center"?h==="left"?w+=p:h==="right"&&(w-=p):h==="left"?w-=Math.max(x,y)+s:h==="right"&&(w+=Math.max(v,j)+s),{x:Jr(w,0,o.width-t.width),y:Jr(C,0,o.height-t.height)}}function Bd(e,t,n){const o=rn(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-o.right:e.x+o.left}function I2(e){return Dn([],ro(e))}function jO(e,t,n){return Ri(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function Y2(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const G4={beforeTitle:eo,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,o=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(o>0&&t.dataIndex<o)return n[t.dataIndex]}return""},afterTitle:eo,beforeBody:eo,beforeLabel:eo,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return mt(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:eo,afterBody:eo,beforeFooter:eo,footer:eo,afterFooter:eo};function Cr(e,t,n,o){const s=e[t].call(n,o);return typeof s>"u"?G4[t].call(n,o):s}var zm;let q2=(zm=class extends co{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,o=this.options.setContext(this.getContext()),s=o.enabled&&n.options.animation&&o.animations,c=new P4(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(c)),c}getContext(){return this.$context||(this.$context=jO(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:o}=n,s=Cr(o,"beforeTitle",this,t),c=Cr(o,"title",this,t),d=Cr(o,"afterTitle",this,t);let h=[];return h=Dn(h,ro(s)),h=Dn(h,ro(c)),h=Dn(h,ro(d)),h}getBeforeBody(t,n){return I2(Cr(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:o}=n,s=[];return at(t,c=>{const d={before:[],lines:[],after:[]},h=Y2(o,c);Dn(d.before,ro(Cr(h,"beforeLabel",this,c))),Dn(d.lines,Cr(h,"label",this,c)),Dn(d.after,ro(Cr(h,"afterLabel",this,c))),s.push(d)}),s}getAfterBody(t,n){return I2(Cr(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:o}=n,s=Cr(o,"beforeFooter",this,t),c=Cr(o,"footer",this,t),d=Cr(o,"afterFooter",this,t);let h=[];return h=Dn(h,ro(s)),h=Dn(h,ro(c)),h=Dn(h,ro(d)),h}_createItems(t){const n=this._active,o=this.chart.data,s=[],c=[],d=[];let h=[],m,p;for(m=0,p=n.length;m<p;++m)h.push(gO(this.chart,n[m]));return t.filter&&(h=h.filter((x,v,y)=>t.filter(x,v,y,o))),t.itemSort&&(h=h.sort((x,v)=>t.itemSort(x,v,o))),at(h,x=>{const v=Y2(t.callbacks,x);s.push(Cr(v,"labelColor",this,x)),c.push(Cr(v,"labelPointStyle",this,x)),d.push(Cr(v,"labelTextColor",this,x))}),this.labelColors=s,this.labelPointStyles=c,this.labelTextColors=d,this.dataPoints=h,h}update(t,n){const o=this.options.setContext(this.getContext()),s=this._active;let c,d=[];if(!s.length)this.opacity!==0&&(c={opacity:0});else{const h=kl[o.position].call(this,s,this._eventPosition);d=this._createItems(o),this.title=this.getTitle(d,o),this.beforeBody=this.getBeforeBody(d,o),this.body=this.getBody(d,o),this.afterBody=this.getAfterBody(d,o),this.footer=this.getFooter(d,o);const m=this._size=F2(this,o),p=Object.assign({},h,m),x=V2(this.chart,o,p),v=U2(o,p,x,this.chart);this.xAlign=x.xAlign,this.yAlign=x.yAlign,c={opacity:1,x:v.x,y:v.y,width:m.width,height:m.height,caretX:h.x,caretY:h.y}}this._tooltipItems=d,this.$context=void 0,c&&this._resolveAnimations().update(this,c),t&&o.external&&o.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,o,s){const c=this.getCaretPosition(t,o,s);n.lineTo(c.x1,c.y1),n.lineTo(c.x2,c.y2),n.lineTo(c.x3,c.y3)}getCaretPosition(t,n,o){const{xAlign:s,yAlign:c}=this,{caretSize:d,cornerRadius:h}=o,{topLeft:m,topRight:p,bottomLeft:x,bottomRight:v}=Dl(h),{x:y,y:j}=t,{width:w,height:C}=n;let k,_,z,D,L,A;return c==="center"?(L=j+C/2,s==="left"?(k=y,_=k-d,D=L+d,A=L-d):(k=y+w,_=k+d,D=L-d,A=L+d),z=k):(s==="left"?_=y+Math.max(m,x)+d:s==="right"?_=y+w-Math.max(p,v)-d:_=this.caretX,c==="top"?(D=j,L=D-d,k=_-d,z=_+d):(D=j+C,L=D+d,k=_+d,z=_-d),A=D),{x1:k,x2:_,x3:z,y1:D,y2:L,y3:A}}drawTitle(t,n,o){const s=this.title,c=s.length;let d,h,m;if(c){const p=La(o.rtl,this.x,this.width);for(t.x=Bd(this,o.titleAlign,o),n.textAlign=p.textAlign(o.titleAlign),n.textBaseline="middle",d=pr(o.titleFont),h=o.titleSpacing,n.fillStyle=o.titleColor,n.font=d.string,m=0;m<c;++m)n.fillText(s[m],p.x(t.x),t.y+d.lineHeight/2),t.y+=d.lineHeight+h,m+1===c&&(t.y+=o.titleMarginBottom-h)}}_drawColorBox(t,n,o,s,c){const d=this.labelColors[o],h=this.labelPointStyles[o],{boxHeight:m,boxWidth:p}=c,x=pr(c.bodyFont),v=Bd(this,"left",c),y=s.x(v),j=m<x.lineHeight?(x.lineHeight-m)/2:0,w=n.y+j;if(c.usePointStyle){const C={radius:Math.min(p,m)/2,pointStyle:h.pointStyle,rotation:h.rotation,borderWidth:1},k=s.leftForLtr(y,p)+p/2,_=w+m/2;t.strokeStyle=c.multiKeyBackground,t.fillStyle=c.multiKeyBackground,Qm(t,C,k,_),t.strokeStyle=d.borderColor,t.fillStyle=d.backgroundColor,Qm(t,C,k,_)}else{t.lineWidth=Xe(d.borderWidth)?Math.max(...Object.values(d.borderWidth)):d.borderWidth||1,t.strokeStyle=d.borderColor,t.setLineDash(d.borderDash||[]),t.lineDashOffset=d.borderDashOffset||0;const C=s.leftForLtr(y,p),k=s.leftForLtr(s.xPlus(y,1),p-2),_=Dl(d.borderRadius);Object.values(_).some(z=>z!==0)?(t.beginPath(),t.fillStyle=c.multiKeyBackground,Zm(t,{x:C,y:w,w:p,h:m,radius:_}),t.fill(),t.stroke(),t.fillStyle=d.backgroundColor,t.beginPath(),Zm(t,{x:k,y:w+1,w:p-2,h:m-2,radius:_}),t.fill()):(t.fillStyle=c.multiKeyBackground,t.fillRect(C,w,p,m),t.strokeRect(C,w,p,m),t.fillStyle=d.backgroundColor,t.fillRect(k,w+1,p-2,m-2))}t.fillStyle=this.labelTextColors[o]}drawBody(t,n,o){const{body:s}=this,{bodySpacing:c,bodyAlign:d,displayColors:h,boxHeight:m,boxWidth:p,boxPadding:x}=o,v=pr(o.bodyFont);let y=v.lineHeight,j=0;const w=La(o.rtl,this.x,this.width),C=function(F){n.fillText(F,w.x(t.x+j),t.y+y/2),t.y+=y+c},k=w.textAlign(d);let _,z,D,L,A,V,E;for(n.textAlign=d,n.textBaseline="middle",n.font=v.string,t.x=Bd(this,k,o),n.fillStyle=o.bodyColor,at(this.beforeBody,C),j=h&&k!=="right"?d==="center"?p/2+x:p+2+x:0,L=0,V=s.length;L<V;++L){for(_=s[L],z=this.labelTextColors[L],n.fillStyle=z,at(_.before,C),D=_.lines,h&&D.length&&(this._drawColorBox(n,t,L,w,o),y=Math.max(v.lineHeight,m)),A=0,E=D.length;A<E;++A)C(D[A]),y=v.lineHeight;at(_.after,C)}j=0,y=v.lineHeight,at(this.afterBody,C),t.y-=c}drawFooter(t,n,o){const s=this.footer,c=s.length;let d,h;if(c){const m=La(o.rtl,this.x,this.width);for(t.x=Bd(this,o.footerAlign,o),t.y+=o.footerMarginTop,n.textAlign=m.textAlign(o.footerAlign),n.textBaseline="middle",d=pr(o.footerFont),n.fillStyle=o.footerColor,n.font=d.string,h=0;h<c;++h)n.fillText(s[h],m.x(t.x),t.y+d.lineHeight/2),t.y+=d.lineHeight+o.footerSpacing}}drawBackground(t,n,o,s){const{xAlign:c,yAlign:d}=this,{x:h,y:m}=t,{width:p,height:x}=o,{topLeft:v,topRight:y,bottomLeft:j,bottomRight:w}=Dl(s.cornerRadius);n.fillStyle=s.backgroundColor,n.strokeStyle=s.borderColor,n.lineWidth=s.borderWidth,n.beginPath(),n.moveTo(h+v,m),d==="top"&&this.drawCaret(t,n,o,s),n.lineTo(h+p-y,m),n.quadraticCurveTo(h+p,m,h+p,m+y),d==="center"&&c==="right"&&this.drawCaret(t,n,o,s),n.lineTo(h+p,m+x-w),n.quadraticCurveTo(h+p,m+x,h+p-w,m+x),d==="bottom"&&this.drawCaret(t,n,o,s),n.lineTo(h+j,m+x),n.quadraticCurveTo(h,m+x,h,m+x-j),d==="center"&&c==="left"&&this.drawCaret(t,n,o,s),n.lineTo(h,m+v),n.quadraticCurveTo(h,m,h+v,m),n.closePath(),n.fill(),s.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,o=this.$animations,s=o&&o.x,c=o&&o.y;if(s||c){const d=kl[t.position].call(this,this._active,this._eventPosition);if(!d)return;const h=this._size=F2(this,t),m=Object.assign({},d,this._size),p=V2(n,t,m),x=U2(t,m,p,n);(s._to!==x.x||c._to!==x.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=h.width,this.height=h.height,this.caretX=d.x,this.caretY=d.y,this._resolveAnimations().update(this,x))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let o=this.opacity;if(!o)return;this._updateAnimationTarget(n);const s={width:this.width,height:this.height},c={x:this.x,y:this.y};o=Math.abs(o)<.001?0:o;const d=rn(n.padding),h=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&h&&(t.save(),t.globalAlpha=o,this.drawBackground(c,t,s,n),C4(t,n.textDirection),c.y+=d.top,this.drawTitle(c,t,n),this.drawBody(c,t,n),this.drawFooter(c,t,n),M4(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const o=this._active,s=t.map(({datasetIndex:h,index:m})=>{const p=this.chart.getDatasetMeta(h);if(!p)throw new Error("Cannot find a dataset at index "+h);return{datasetIndex:h,element:p.data[m],index:m}}),c=!nh(o,s),d=this._positionChanged(s,n);(c||d)&&(this._active=s,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,o=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,c=this._active||[],d=this._getActiveElements(t,c,n,o),h=this._positionChanged(d,t),m=n||!nh(d,c)||h;return m&&(this._active=d,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),m}_getActiveElements(t,n,o,s){const c=this.options;if(t.type==="mouseout")return[];if(!s)return n.filter(h=>this.chart.data.datasets[h.datasetIndex]&&this.chart.getDatasetMeta(h.datasetIndex).controller.getParsed(h.index)!==void 0);const d=this.chart.getElementsAtEventForMode(t,c.mode,c,o);return c.reverse&&d.reverse(),d}_positionChanged(t,n){const{caretX:o,caretY:s,options:c}=this,d=kl[c.position].call(this,t,n);return d!==!1&&(o!==d.x||s!==d.y)}},Be(zm,"positioners",kl),zm);var $h={id:"tooltip",_element:q2,positioners:kl,afterInit(e,t,n){n&&(e.tooltip=new q2({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:G4},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const SO=(e,t,n,o)=>(typeof t=="string"?(n=e.push(t)-1,o.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function kO(e,t,n,o){const s=e.indexOf(t);if(s===-1)return SO(e,t,n,o);const c=e.lastIndexOf(t);return s!==c?n:s}const CO=(e,t)=>e===null?null:Jr(Math.round(e),0,t);function W2(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class Wa extends ts{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const o=this.getLabels();for(const{index:s,label:c}of n)o[s]===c&&o.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(mt(t))return null;const o=this.getLabels();return n=isFinite(n)&&o[n]===t?n:kO(o,t,We(n,t),this._addedLabels),CO(n,o.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:o,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(o=0),n||(s=this.getLabels().length-1)),this.min=o,this.max=s}buildTicks(){const t=this.min,n=this.max,o=this.options.offset,s=[];let c=this.getLabels();c=t===0&&n===c.length-1?c:c.slice(t,n+1),this._valueRange=Math.max(c.length-(o?0:1),1),this._startValue=this.min-(o?.5:0);for(let d=t;d<=n;d++)s.push({value:d});return s}getLabelForValue(t){return W2.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}Be(Wa,"id","category"),Be(Wa,"defaults",{ticks:{callback:W2}});function MO(e,t){const n=[],{bounds:s,step:c,min:d,max:h,precision:m,count:p,maxTicks:x,maxDigits:v,includeBounds:y}=e,j=c||1,w=x-1,{min:C,max:k}=t,_=!mt(d),z=!mt(h),D=!mt(p),L=(k-C)/(v+1);let A=qy((k-C)/w/j)*j,V,E,F,te;if(A<1e-14&&!_&&!z)return[{value:C},{value:k}];te=Math.ceil(k/A)-Math.floor(C/A),te>w&&(A=qy(te*A/w/j)*j),mt(m)||(V=Math.pow(10,m),A=Math.ceil(A*V)/V),s==="ticks"?(E=Math.floor(C/A)*A,F=Math.ceil(k/A)*A):(E=C,F=k),_&&z&&c&&KD((h-d)/c,A/1e3)?(te=Math.round(Math.min((h-d)/A,x)),A=(h-d)/te,E=d,F=h):D?(E=_?d:E,F=z?h:F,te=p-1,A=(F-E)/te):(te=(F-E)/A,_l(te,Math.round(te),A/1e3)?te=Math.round(te):te=Math.ceil(te));const de=Math.max(Wy(A),Wy(E));V=Math.pow(10,mt(m)?de:m),E=Math.round(E*V)/V,F=Math.round(F*V)/V;let le=0;for(_&&(y&&E!==d?(n.push({value:d}),E<d&&le++,_l(Math.round((E+le*A)*V)/V,d,G2(d,L,e))&&le++):E<d&&le++);le<te;++le){const fe=Math.round((E+le*A)*V)/V;if(z&&fe>h)break;n.push({value:fe})}return z&&y&&F!==h?n.length&&_l(n[n.length-1].value,h,G2(h,L,e))?n[n.length-1].value=h:n.push({value:h}):(!z||F===h)&&n.push({value:F}),n}function G2(e,t,{horizontal:n,minRotation:o}){const s=ki(o),c=(n?Math.sin(s):Math.cos(s))||.001,d=.75*t*(""+e).length;return Math.min(t/c,d)}class _O extends ts{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return mt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:o}=this.getUserBounds();let{min:s,max:c}=this;const d=m=>s=n?s:m,h=m=>c=o?c:m;if(t){const m=Ia(s),p=Ia(c);m<0&&p<0?h(0):m>0&&p>0&&d(0)}if(s===c){let m=c===0?1:Math.abs(c*.05);h(c+m),t||d(s-m)}this.min=s,this.max=c}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:o}=t,s;return o?(s=Math.ceil(this.max/o)-Math.floor(this.min/o)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${o} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),n=n||11),n&&(s=Math.min(n,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let o=this.getTickLimit();o=Math.max(2,o);const s={maxTicks:o,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},c=this._range||this,d=MO(s,c);return t.bounds==="ticks"&&JD(d,this,"value"),t.reverse?(d.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),d}configure(){const t=this.ticks;let n=this.min,o=this.max;if(super.configure(),this.options.offset&&t.length){const s=(o-n)/Math.max(t.length-1,1)/2;n-=s,o+=s}this._startValue=n,this._endValue=o,this._valueRange=o-n}getLabelForValue(t){return g4(t,this.chart.options.locale,this.options.ticks.format)}}class Ga extends _O{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=mr(t)?t:0,this.max=mr(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,o=ki(this.options.ticks.minRotation),s=(t?Math.sin(o):Math.cos(o))||.001,c=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,c.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}Be(Ga,"id","linear"),Be(Ga,"defaults",{ticks:{callback:x4.formatters.numeric}});const Nh={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Mr=Object.keys(Nh);function X2(e,t){return e-t}function Q2(e,t){if(mt(t))return null;const n=e._adapter,{parser:o,round:s,isoWeekday:c}=e._parseOpts;let d=t;return typeof o=="function"&&(d=o(d)),mr(d)||(d=typeof o=="string"?n.parse(d,o):n.parse(d)),d===null?null:(s&&(d=s==="week"&&(Bl(c)||c===!0)?n.startOf(d,"isoWeek",c):n.startOf(d,s)),+d)}function Z2(e,t,n,o){const s=Mr.length;for(let c=Mr.indexOf(e);c<s-1;++c){const d=Nh[Mr[c]],h=d.steps?d.steps:Number.MAX_SAFE_INTEGER;if(d.common&&Math.ceil((n-t)/(h*d.size))<=o)return Mr[c]}return Mr[s-1]}function TO(e,t,n,o,s){for(let c=Mr.length-1;c>=Mr.indexOf(n);c--){const d=Mr[c];if(Nh[d].common&&e._adapter.diff(s,o,d)>=t-1)return d}return Mr[n?Mr.indexOf(n):0]}function zO(e){for(let t=Mr.indexOf(e)+1,n=Mr.length;t<n;++t)if(Nh[Mr[t]].common)return Mr[t]}function K2(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:o,hi:s}=$g(n,t),c=n[o]>=t?n[o]:n[s];e[c]=!0}}function DO(e,t,n,o){const s=e._adapter,c=+s.startOf(t[0].value,o),d=t[t.length-1].value;let h,m;for(h=c;h<=d;h=+s.add(h,1,o))m=n[h],m>=0&&(t[m].major=!0);return t}function J2(e,t,n){const o=[],s={},c=t.length;let d,h;for(d=0;d<c;++d)h=t[d],s[h]=d,o.push({value:h,major:!1});return c===0||!n?o:DO(e,o,s,n)}class dh extends ts{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const o=t.time||(t.time={}),s=this._adapter=new _A._date(t.adapters.date);s.init(n),Ml(o.displayFormats,s.formats()),this._parseOpts={parser:o.parser,round:o.round,isoWeekday:o.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:Q2(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,o=t.time.unit||"day";let{min:s,max:c,minDefined:d,maxDefined:h}=this.getUserBounds();function m(p){!d&&!isNaN(p.min)&&(s=Math.min(s,p.min)),!h&&!isNaN(p.max)&&(c=Math.max(c,p.max))}(!d||!h)&&(m(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&m(this.getMinMax(!1))),s=mr(s)&&!isNaN(s)?s:+n.startOf(Date.now(),o),c=mr(c)&&!isNaN(c)?c:+n.endOf(Date.now(),o)+1,this.min=Math.min(s,c-1),this.max=Math.max(s+1,c)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],o=t[t.length-1]),{min:n,max:o}}buildTicks(){const t=this.options,n=t.time,o=t.ticks,s=o.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const c=this.min,d=this.max,h=iP(s,c,d);return this._unit=n.unit||(o.autoSkip?Z2(n.minUnit,this.min,this.max,this._getLabelCapacity(c)):TO(this,h.length,n.minUnit,this.min,this.max)),this._majorUnit=!o.major.enabled||this._unit==="year"?void 0:zO(this._unit),this.initOffsets(s),t.reverse&&h.reverse(),J2(this,h,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,o=0,s,c;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?n=1-s:n=(this.getDecimalForValue(t[1])-s)/2,c=this.getDecimalForValue(t[t.length-1]),t.length===1?o=c:o=(c-this.getDecimalForValue(t[t.length-2]))/2);const d=t.length<3?.5:.25;n=Jr(n,0,d),o=Jr(o,0,d),this._offsets={start:n,end:o,factor:1/(n+1+o)}}_generate(){const t=this._adapter,n=this.min,o=this.max,s=this.options,c=s.time,d=c.unit||Z2(c.minUnit,n,o,this._getLabelCapacity(n)),h=We(s.ticks.stepSize,1),m=d==="week"?c.isoWeekday:!1,p=Bl(m)||m===!0,x={};let v=n,y,j;if(p&&(v=+t.startOf(v,"isoWeek",m)),v=+t.startOf(v,p?"day":d),t.diff(o,n,d)>1e5*h)throw new Error(n+" and "+o+" are too far apart with stepSize of "+h+" "+d);const w=s.ticks.source==="data"&&this.getDataTimestamps();for(y=v,j=0;y<o;y=+t.add(y,h,d),j++)K2(x,y,w);return(y===o||s.bounds==="ticks"||j===1)&&K2(x,y,w),Object.keys(x).sort(X2).map(C=>+C)}getLabelForValue(t){const n=this._adapter,o=this.options.time;return o.tooltipFormat?n.format(t,o.tooltipFormat):n.format(t,o.displayFormats.datetime)}format(t,n){const s=this.options.time.displayFormats,c=this._unit,d=n||s[c];return this._adapter.format(t,d)}_tickFormatFunction(t,n,o,s){const c=this.options,d=c.ticks.callback;if(d)return bt(d,[t,n,o],this);const h=c.time.displayFormats,m=this._unit,p=this._majorUnit,x=m&&h[m],v=p&&h[p],y=o[n],j=p&&v&&y&&y.major;return this._adapter.format(t,s||(j?v:x))}generateTickLabels(t){let n,o,s;for(n=0,o=t.length;n<o;++n)s=t[n],s.label=this._tickFormatFunction(s.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,o=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+o)*n.factor)}getValueForPixel(t){const n=this._offsets,o=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+o*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,o=this.ctx.measureText(t).width,s=ki(this.isHorizontal()?n.maxRotation:n.minRotation),c=Math.cos(s),d=Math.sin(s),h=this._resolveTickFontOptions(0).size;return{w:o*c+h*d,h:o*d+h*c}}_getLabelCapacity(t){const n=this.options.time,o=n.displayFormats,s=o[n.unit]||o.millisecond,c=this._tickFormatFunction(t,0,J2(this,[t],this._majorUnit),s),d=this._getLabelSize(c),h=Math.floor(this.isHorizontal()?this.width/d.w:this.height/d.h)-1;return h>0?h:1}getDataTimestamps(){let t=this._cache.data||[],n,o;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(n=0,o=s.length;n<o;++n)t=t.concat(s[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,o;if(t.length)return t;const s=this.getLabels();for(n=0,o=s.length;n<o;++n)t.push(Q2(this,s[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return sP(t.sort(X2))}}Be(dh,"id","time"),Be(dh,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function $d(e,t,n){let o=0,s=e.length-1,c,d,h,m;n?(t>=e[o].pos&&t<=e[s].pos&&({lo:o,hi:s}=Ci(e,"pos",t)),{pos:c,time:h}=e[o],{pos:d,time:m}=e[s]):(t>=e[o].time&&t<=e[s].time&&({lo:o,hi:s}=Ci(e,"time",t)),{time:c,pos:h}=e[o],{time:d,pos:m}=e[s]);const p=d-c;return p?h+(m-h)*(t-c)/p:h}class e5 extends dh{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=$d(n,this.min),this._tableRange=$d(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:o}=this,s=[],c=[];let d,h,m,p,x;for(d=0,h=t.length;d<h;++d)p=t[d],p>=n&&p<=o&&s.push(p);if(s.length<2)return[{time:n,pos:0},{time:o,pos:1}];for(d=0,h=s.length;d<h;++d)x=s[d+1],m=s[d-1],p=s[d],Math.round((x+m)/2)!==p&&c.push({time:p,pos:d/(h-1)});return c}_generate(){const t=this.min,n=this.max;let o=super.getDataTimestamps();return(!o.includes(t)||!o.length)&&o.splice(0,0,t),(!o.includes(n)||o.length===1)&&o.push(n),o.sort((s,c)=>s-c)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),o=this.getLabelTimestamps();return n.length&&o.length?t=this.normalize(n.concat(o)):t=n.length?n:o,t=this._cache.all=t,t}getDecimalForValue(t){return($d(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,o=this.getDecimalForPixel(t)/n.factor-n.end;return $d(this._table,o*this._tableRange+this._minPos,!0)}}Be(e5,"id","timeseries"),Be(e5,"defaults",dh.defaults);const X4="label";function t5(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function PO(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function Q4(e,t){e.labels=t}function Z4(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:X4;const o=[];e.datasets=t.map(s=>{const c=e.datasets.find(d=>d[n]===s[n]);return!c||!s.data||o.includes(c)?{...s}:(o.push(c),Object.assign(c,s),c)})}function AO(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X4;const n={labels:[],datasets:[]};return Q4(n,e.labels),Z4(n,e.datasets,t),n}function EO(e,t){const{height:n=150,width:o=300,redraw:s=!1,datasetIdKey:c,type:d,data:h,options:m,plugins:p=[],fallbackContent:x,updateMode:v,...y}=e,j=S.useRef(null),w=S.useRef(null),C=()=>{j.current&&(w.current=new Li(j.current,{type:d,data:AO(h,c),options:m&&{...m},plugins:p}),t5(t,w.current))},k=()=>{t5(t,null),w.current&&(w.current.destroy(),w.current=null)};return S.useEffect(()=>{!s&&w.current&&m&&PO(w.current,m)},[s,m]),S.useEffect(()=>{!s&&w.current&&Q4(w.current.config.data,h.labels)},[s,h.labels]),S.useEffect(()=>{!s&&w.current&&h.datasets&&Z4(w.current.config.data,h.datasets,c)},[s,h.datasets]),S.useEffect(()=>{w.current&&(s?(k(),setTimeout(C)):w.current.update(v))},[s,m,h.labels,h.datasets,v]),S.useEffect(()=>{w.current&&(k(),setTimeout(C))},[d]),S.useEffect(()=>(C(),()=>k()),[]),pt.createElement("canvas",{ref:j,role:"img",height:n,width:o,...y},x)}const OO=S.forwardRef(EO);function RO(e,t){return Li.register(t),S.forwardRef((n,o)=>pt.createElement(OO,{...n,ref:o,type:e}))}const K4=RO("line",Uu);Li.register(Wa,Ga,Di,fn,Bh,$h,Lh,Rh);f.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;f.h3`
  margin: 0;
  font-size: 1.25rem;
`;f.div`
  display: flex;
  align-items: center;
`;f.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
  color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
  
  .decimal {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;f.div`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  background-color: ${e=>e.isPositive?"rgba(0, 192, 118, 0.1)":"rgba(255, 87, 87, 0.1)"};
  color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
`;f.div`
  display: flex;
  margin-bottom: 1.5rem;
`;f.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: var(--border-radius);
  margin-right: 0.5rem;
  font-weight: 500;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.05)"};
  }
`;f.div`
  position: absolute;
  top: 120px;
  left: 50px;
  right: 50px;
  bottom: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  z-index: 1;
  pointer-events: none;
`;f.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.08);
  
  &.horizontal {
    height: 1px;
    left: 0;
    right: 0;
  }
  
  &.vertical {
    width: 1px;
    top: 0;
    bottom: 0;
  }
`;f.div`
  position: absolute;
  top: 120px;
  right: 20px;
  bottom: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  pointer-events: none;
`;f.div`
  position: absolute;
  left: 50px;
  right: 50px;
  bottom: 25px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  pointer-events: none;
`;f.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
  white-space: nowrap;
  
  &.y-label {
    text-align: right;
    padding-right: 5px;
  }
  
  &.x-label {
    text-align: center;
  }
`;f.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;f.h3`
  margin: 0;
  font-size: 1.25rem;
`;f.div`
  display: flex;
  margin-bottom: 1rem;
`;f.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: var(--border-radius);
  margin-right: 0.5rem;
  font-weight: 500;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.05)"};
  }
`;f.div`
  width: 100%;
`;f.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  font-weight: 500;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;f.div`
  max-height: 300px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--color-background);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-border);
    border-radius: 3px;
  }
`;f.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.875rem;
  
  &:last-child {
    border-bottom: none;
  }
`;f.div`
  color: ${e=>e.type==="buy"?"var(--color-positive)":"var(--color-negative)"};
`;f.div`
  color: var(--color-text);
`;f.div`
  color: var(--color-text-secondary);
`;f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  margin: 0.5rem 0;
`;f.span`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;f.span`
  color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
  font-weight: 600;
  font-size: 1.1rem;
  
  .decimal {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 0;
  height: fit-content;
  overflow: visible;
  display: flex;
  flex-direction: column;
`;f.div`
  display: flex;
  margin-bottom: 1.5rem;
`;f.button`
  flex: 1;
  padding: 0.75rem;
  background-color: ${e=>e.active?e.type==="buy"?"var(--color-positive)":"var(--color-negative)":"transparent"};
  color: ${e=>e.active?"white":"var(--color-text)"};
  border: 1px solid ${e=>e.active?e.type==="buy"?"var(--color-positive)":"var(--color-negative)":"var(--color-border)"};
  border-radius: ${e=>e.position==="left"?"var(--border-radius) 0 0 var(--border-radius)":"0 var(--border-radius) var(--border-radius) 0"};
  font-weight: 600;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: ${e=>e.active?e.type==="buy"?"var(--color-positive)":"var(--color-negative)":"rgba(255, 255, 255, 0.05)"};
  }
`;f.div`
  margin-bottom: 1.25rem;
`;f.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;f.div`
  position: relative;
`;f.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: ${e=>e.hasAddon?"4rem":"1rem"};
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-speed) ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;f.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
`;f.input`
  width: 100%;
  margin: 1rem 0;
  -webkit-appearance: none;
  background: var(--color-border);
  height: 4px;
  border-radius: 2px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${e=>e.type==="buy"?"var(--color-positive)":"var(--color-negative)"};
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${e=>e.type==="buy"?"var(--color-positive)":"var(--color-negative)"};
    cursor: pointer;
    border: none;
  }
`;f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;f.button`
  padding: 0.25rem 0.5rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text-secondary)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.05)"};
  }
`;f.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
`;const LO=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,BO=f.span`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,$O=f.span`
  color: var(--color-text);
  font-weight: 500;
`;f(LO)`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-weight: 600;
`;f(BO)`
  font-weight: 600;
`;f($O)`
  font-weight: 600;
`;f.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  background-color: ${e=>e.type==="buy"?"var(--color-positive)":"var(--color-negative)"};
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  transition: opacity var(--transition-speed) ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    cursor: not-allowed;
    opacity: 0.7;
  }
`;f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
`;f.span`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;f.span`
  color: var(--color-text);
  font-weight: 500;
`;f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  height: fit-content;
  max-height: max-content;
  overflow: visible;
  display: flex;
  flex-direction: column;
`;f.div`
  margin-bottom: 1.25rem;
`;f.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;f.div`
  position: relative;
`;f.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: ${e=>e.hasAddon?"4rem":"1rem"};
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-speed) ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;f.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
`;f.input`
  width: 100%;
  margin: 1rem 0;
  -webkit-appearance: none;
  background: var(--color-border);
  height: 4px;
  border-radius: 2px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-accent);
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-accent);
    cursor: pointer;
    border: none;
  }
`;f.div`
  margin-bottom: 1.5rem;
`;f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;f.button`
  padding: 0.5rem 0.75rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text-secondary)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.05)"};
  }
`;f.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
`;const NO=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,HO=f.span`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,FO=f.span`
  color: var(--color-text);
  font-weight: 500;
`;f(NO)`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-weight: 600;
`;f(HO)`
  font-weight: 600;
`;f(FO)`
  font-weight: 600;
`;f.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
  
  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }
`;f.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;f.button`
  flex: 1;
  padding: 0.75rem;
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;f.span`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;f.span`
  color: var(--color-text);
  font-weight: 500;
`;f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  height: fit-content;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
`;f.div`
  display: flex;
  margin-bottom: 1.5rem;
`;f.button`
  flex: 1;
  padding: 0.75rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"white":"var(--color-text)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: ${e=>e.position==="left"?"var(--border-radius) 0 0 var(--border-radius)":e.position==="right"?"0 var(--border-radius) var(--border-radius) 0":"0"};
  font-weight: 600;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.05)"};
  }
`;f.div`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  text-align: right;
`;f.div`
  margin-top: 2rem;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
`;f.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text);
`;f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;f.div`
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1rem;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;f.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;f.span`
  background-color: var(--color-accent);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;f.div`
  display: flex;
  flex-direction: column;
`;f.span`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
`;f.span`
  color: var(--color-text);
  font-weight: 500;
`;f.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;f.button`
  flex: 1;
  padding: 0.5rem;
  font-size: 0.875rem;
  background-color: ${e=>e.variant==="primary"?"var(--color-accent)":"transparent"};
  color: ${e=>e.variant==="primary"?"white":"var(--color-text)"};
  border: 1px solid ${e=>e.variant==="primary"?"var(--color-accent)":"var(--color-border)"};
  border-radius: var(--border-radius);
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.variant==="primary"?"var(--color-accent-hover)":"rgba(255, 255, 255, 0.05)"};
  }
`;f.div`
  margin-top: 1.5rem;
  overflow-x: auto;
`;f.table`
  width: 100%;
  border-collapse: collapse;
`;f.th`
  text-align: left;
  padding: 0.75rem;
  color: var(--color-text-secondary);
  font-weight: 600;
  font-size: 0.875rem;
  border-bottom: 1px solid var(--color-border);
`;f.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
`;f.td`
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.875rem;
`;f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;f.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;f.span`
  color: ${e=>e.value>=0?"var(--color-positive)":"var(--color-negative)"};
  font-weight: 500;
`;f.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${e=>e.risk==="high"?"var(--color-negative)":e.risk==="medium"?"orange":"var(--color-text-secondary)"};
  font-size: 0.75rem;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;f.button`
  padding: 0.5rem 0.75rem;
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: var(--color-negative);
    color: white;
    border-color: var(--color-negative);
  }
`;f.div`
  padding: 2rem;
  text-align: center;
  color: var(--color-text-secondary);
`;f.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
`;f.h3`
  margin-top: 0;
  margin-bottom: 1rem;
`;f.p`
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
`;f.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;f.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;f.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-negative);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  
  &:hover {
    background-color: #ff3b3b;
  }
`;f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;f.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: var(--color-accent);
  }
`;f.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-top: 2rem;
`;f.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;f.div`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${e=>e.active?"var(--color-text)":"var(--color-text-secondary)"};
  font-weight: ${e=>e.active?"600":"400"};
  border-bottom: 2px solid ${e=>e.active?"var(--color-accent)":"transparent"};
  
  &:hover {
    color: ${e=>!e.active&&"var(--color-accent)"};
  }
`;f.div`
  max-height: 400px;
  overflow-y: auto;
`;f.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;f.div`
  text-align: ${e=>e.align||"left"};
`;f.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.875rem;
  
  &:last-child {
    border-bottom: none;
  }
`;f.div`
  color: ${e=>e.type==="buy"?"#0ecb81":"#f6465d"};
  font-weight: 500;
`;f.div`
  font-weight: 500;
  text-align: center;
`;f.div`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  text-align: right;
`;f.div`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;f.div`
  flex: 1;
`;f.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border-left: 3px solid var(--color-accent);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;f.div`
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  
  svg {
    margin-right: 0.75rem;
    color: var(--color-accent);
    flex-shrink: 0;
  }
`;f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;f.p`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
`;f.p`
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  max-width: 600px;
  line-height: 1.6;
`;f.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;f.div`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 1rem;
  
  .decimal {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;f.div`
  padding: 0.5rem 0.75rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  background-color: ${e=>e.isPositive?"rgba(0, 192, 118, 0.1)":"rgba(255, 87, 87, 0.1)"};
  color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.25rem;
    width: 16px;
    height: 16px;
  }
`;f.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
  }
`;f.img`
  width: 450px;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius);
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;f.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-3px);
    background-color: var(--color-accent);
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: var(--color-text);
  }
  
  &:hover svg {
    color: var(--color-background);
  }
`;f.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;f.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;f.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;f.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin: 0 auto 2rem;
  max-width: 100%;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;f.div`
  margin-top: 2rem;
  padding: 0 1rem;
`;f.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: var(--color-accent);
  }
`;f.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;f.div`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  background-color: ${e=>e.active?"var(--color-accent)":"var(--color-card)"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text)"};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.1)"};
  }
`;f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.25rem;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    transform: translateY(-3px);
  }
`;f.div`
  flex: 1;
`;f.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;f.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;f.span`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;f.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background-color: ${e=>e.type==="property"?"rgba(0, 192, 118, 0.1)":"rgba(255, 215, 0, 0.1)"};
  color: ${e=>e.type==="property"?"var(--color-positive)":"var(--color-accent)"};
  font-weight: 500;
`;f.div`
  margin-left: 1rem;
  color: var(--color-text-secondary);
  
  svg {
    width: 20px;
    height: 20px;
  }
`;f.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  
  & > div {
    width: 100%;
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;f.div`
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;f.div`
  display: none;
  margin-bottom: 1rem;
  width: 100%;
  height: fit-content;
  max-height: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;f.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  height: fit-content;
  max-height: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`;var J4={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r5=pt.createContext&&pt.createContext(J4),VO=["attr","size","title"];function UO(e,t){if(e==null)return{};var n=IO(e,t),o,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)o=c[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function IO(e,t){if(e==null)return{};var n={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}function uh(){return uh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},uh.apply(this,arguments)}function n5(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,o)}return n}function hh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?n5(Object(n),!0).forEach(function(o){YO(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):n5(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function YO(e,t,n){return t=qO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qO(e){var t=WO(e,"string");return typeof t=="symbol"?t:t+""}function WO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eS(e){return e&&e.map((t,n)=>pt.createElement(t.tag,hh({key:n},t.attr),eS(t.child)))}function Lt(e){return t=>pt.createElement(GO,uh({attr:hh({},e.attr)},t),eS(e.child))}function GO(e){var t=n=>{var{attr:o,size:s,title:c}=e,d=UO(e,VO),h=s||n.size||"1em",m;return n.className&&(m=n.className),e.className&&(m=(m?m+" ":"")+e.className),pt.createElement("svg",uh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,d,{className:m,style:hh(hh({color:e.color||n.color},n.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&pt.createElement("title",null,c),e.children)};return r5!==void 0?pt.createElement(r5.Consumer,null,n=>t(n)):t(J4)}function XO(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"},child:[]},{tag:"path",attr:{d:"M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"},child:[]}]})(e)}function Nd(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"},child:[]}]})(e)}function tS(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"},child:[]}]})(e)}function QO(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"},child:[]}]})(e)}function ZO(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 6C7.03 6 2 7.546 2 10.5v4C2 17.454 7.03 19 12 19s10-1.546 10-4.5v-4C22 7.546 16.97 6 12 6zm-8 8.5v-1.197a9.989 9.989 0 0 0 2 .86v1.881c-1.312-.514-2-1.126-2-1.544zm12 .148v1.971c-.867.179-1.867.31-3 .358v-2a21.75 21.75 0 0 0 3-.329zm-5 2.33a18.788 18.788 0 0 1-3-.358v-1.971c.959.174 1.972.287 3 .33v1.999zm7-.934v-1.881a9.931 9.931 0 0 0 2-.86V14.5c0 .418-.687 1.03-2 1.544zM12 13c-5.177 0-8-1.651-8-2.5S6.823 8 12 8s8 1.651 8 2.5-2.823 2.5-8 2.5z"},child:[]}]})(e)}function rS(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"},child:[]},{tag:"path",attr:{d:"M6 14h6v2H6z"},child:[]}]})(e)}function KO(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m21.406 6.086-9-4a1.001 1.001 0 0 0-.813 0l-9 4c-.02.009-.034.024-.054.035-.028.014-.058.023-.084.04-.022.015-.039.034-.06.05a.87.87 0 0 0-.19.194c-.02.028-.041.053-.059.081a1.119 1.119 0 0 0-.076.165c-.009.027-.023.052-.031.079A1.013 1.013 0 0 0 2 7v10c0 .396.232.753.594.914l9 4c.13.058.268.086.406.086a.997.997 0 0 0 .402-.096l.004.01 9-4A.999.999 0 0 0 22 17V7a.999.999 0 0 0-.594-.914zM12 4.095 18.538 7 12 9.905l-1.308-.581L5.463 7 12 4.095zM4 16.351V8.539l7 3.111v7.811l-7-3.11zm9 3.11V11.65l7-3.111v7.812l-7 3.11z"},child:[]}]})(e)}function JO(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"},child:[]}]})(e)}function o5(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"},child:[]}]})(e)}function eR(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{cx:"7.499",cy:"9.5",r:"1.5"},child:[]},{tag:"path",attr:{d:"m10.499 14-1.5-2-3 4h12l-4.5-6z"},child:[]},{tag:"path",attr:{d:"M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"},child:[]}]})(e)}function i5(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"},child:[]},{tag:"path",attr:{d:"M11 11h2v6h-2zm0-4h2v2h-2z"},child:[]}]})(e)}function tR(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"},child:[]},{tag:"path",attr:{d:"M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"},child:[]}]})(e)}function rR(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"},child:[]}]})(e)}function nR(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7zm-1.998 10H4V7h12l.001 4.999L16 12l.001.001.001 4.999z"},child:[]}]})(e)}function oR(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 12h2v4h-2z"},child:[]},{tag:"path",attr:{d:"M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"},child:[]}]})(e)}function rg(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"},child:[]}]})(e)}function iR(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"},child:[]}]})(e)}function aR(e){return Lt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(e)}function sR(e){return Lt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"},child:[]}]})(e)}function lR(e){return Lt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M109.25 173.25c24.99-24.99 24.99-65.52 0-90.51-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 25 25 65.52 25 90.51 0zm256 165.49c-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 24.99 24.99 65.52 24.99 90.51 0 25-24.99 25-65.51 0-90.51zm-1.94-231.43l-22.62-22.62c-12.5-12.5-32.76-12.5-45.25 0L20.69 359.44c-12.5 12.5-12.5 32.76 0 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.25 0l274.75-274.75c12.5-12.49 12.5-32.75 0-45.25z"},child:[]}]})(e)}function cR(e){return Lt({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M18 13h-.68l-2 2h1.91L19 17H5l1.78-2h2.05l-2-2H6l-3 3v4c0 1.1.89 2 1.99 2H19a2 2 0 0 0 2-2v-4l-3-3zm-1-5.05-4.95 4.95-3.54-3.54 4.95-4.95L17 7.95zm-4.24-5.66L6.39 8.66a.996.996 0 0 0 0 1.41l4.95 4.95c.39.39 1.02.39 1.41 0l6.36-6.36a.996.996 0 0 0 0-1.41L14.16 2.3a.975.975 0 0 0-1.4-.01z"},child:[]}]})(e)}const dR=f.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,uR=f.div`
  background: linear-gradient(to right, #111, #1a1a1a);
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #fff;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`,hR=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,fR=f.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
`,pR=f.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  transition: color 0.2s;
  
  &:hover {
    color: #fff;
  }
`,mR=f.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`,hl=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 600;
  }
`,gR=f.h4`
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
  color: #fff;
`,Hd=f.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background: ${e=>e.isSelected?"rgba(0, 123, 255, 0.1)":"transparent"};
  border: 1px solid ${e=>e.isSelected?"#007bff":"rgba(255, 255, 255, 0.2)"};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(0, 123, 255, 0.05);
    border-color: rgba(0, 123, 255, 0.5);
  }
`,Fd=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  margin-right: 1rem;
  color: ${e=>e.color||"#fff"};
`,Vd=f.div`
  flex: 1;
`,Ud=f.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`,Id=f.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`,Yd=f.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${e=>e.isSelected?"#007bff":"rgba(255, 255, 255, 0.5)"};
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #007bff;
    opacity: ${e=>e.isSelected?1:0};
    transition: opacity 0.2s;
  }
`,qd=f.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  animation: expandIn 0.3s ease-out;
  
  @keyframes expandIn {
    from { max-height: 0; opacity: 0; }
    to { max-height: 500px; opacity: 1; }
  }
`,xR=f.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`,bR=f.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
`,vR=f.button`
  background: linear-gradient(to right, #d4af37, #f2d35b);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: linear-gradient(to right, #f2d35b, #d4af37);
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
    transform: none;
  }
`,yR=({isOpen:e,onClose:t,onConfirm:n,selectedDates:o,totalCost:s,isOwnerRate:c,tokenPrice:d,ownerRate:h,marketRate:m,userTokenHoldings:p,propertyName:x})=>{const[v,y]=S.useState("tokens");if(!e)return null;const j=o&&o[0]?new Date(o[0]):new Date,w=o&&o[1]?new Date(o[1]):new Date,C=j&&w?Math.max(1,Math.round((w.getTime()-j.getTime())/(1e3*60*60*24))):1,k=z=>new Date(z).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),_=z=>{y(z)};return a.jsx(dR,{children:a.jsxs(uR,{children:[a.jsxs(hR,{children:[a.jsx(fR,{children:"Complete Your Reservation"}),a.jsx(pR,{onClick:t,children:a.jsx(rg,{})})]}),a.jsxs(mR,{children:[a.jsxs(hl,{children:[a.jsx("span",{children:"Property"}),a.jsx("span",{children:x})]}),a.jsxs(hl,{children:[a.jsx("span",{children:"Dates"}),a.jsxs("span",{children:[k(j)," - ",k(w)]})]}),a.jsxs(hl,{children:[a.jsx("span",{children:"Nights"}),a.jsx("span",{children:C})]}),a.jsxs(hl,{children:[a.jsx("span",{children:"Rate per night"}),a.jsx("span",{children:c?`${h.toFixed(4)} tokens (~$${(h*d).toFixed(2)})`:`${m.toFixed(4)} tokens (~$${(m*d).toFixed(2)})`})]}),a.jsxs(hl,{children:[a.jsx("span",{children:"Total"}),a.jsxs("span",{children:[s.toFixed(4)," tokens (~$$",(s*d).toFixed(2),")"]})]})]}),a.jsx(gR,{children:"Select Payment Method"}),a.jsxs(Hd,{isSelected:v==="tokens",onClick:()=>_("tokens"),children:[a.jsx(Fd,{color:"#d4af37",children:a.jsx(ZO,{size:24})}),a.jsxs(Vd,{children:[a.jsx(Ud,{children:"Loaf Tokens"}),a.jsx(Id,{children:"Pay with your Loaf token balance"})]}),a.jsx(Yd,{isSelected:v==="tokens"})]}),v==="tokens"&&a.jsxs(qd,{children:[a.jsxs("div",{children:["Available balance: ",p.toFixed(4)," tokens"]}),p<s&&a.jsx("div",{style:{color:"#ff4d4d",marginTop:"0.5rem"},children:"Insufficient balance. Please select another payment method."})]}),a.jsxs(Hd,{isSelected:v==="deposit",onClick:()=>_("deposit"),children:[a.jsx(Fd,{color:"#4dabf7",children:a.jsx(oR,{size:24})}),a.jsxs(Vd,{children:[a.jsx(Ud,{children:"Platform Deposit"}),a.jsx(Id,{children:"Use your available platform balance"})]}),a.jsx(Yd,{isSelected:v==="deposit"})]}),v==="deposit"&&a.jsx(qd,{children:a.jsx("div",{children:"Available balance: $1,500.00"})}),a.jsxs(Hd,{isSelected:v==="fiat",onClick:()=>_("fiat"),children:[a.jsx(Fd,{color:"#82c91e",children:a.jsx(rS,{size:24})}),a.jsxs(Vd,{children:[a.jsx(Ud,{children:"Credit/Debit Card"}),a.jsx(Id,{children:"Pay with your credit or debit card"})]}),a.jsx(Yd,{isSelected:v==="fiat"})]}),v==="fiat"&&a.jsxs(qd,{children:[a.jsx("div",{children:"Select a saved card or enter new card details"}),a.jsx("div",{style:{marginTop:"0.5rem"},children:a.jsxs("select",{style:{background:"rgba(0, 0, 0, 0.3)",color:"#fff",padding:"0.5rem",borderRadius:"4px",border:"1px solid rgba(255, 255, 255, 0.2)",width:"100%"},children:[a.jsx("option",{value:"",children:"Select a card"}),a.jsx("option",{value:"visa",children:"Visa ending in 4242"}),a.jsx("option",{value:"mastercard",children:"Mastercard ending in 5555"}),a.jsx("option",{value:"new",children:"+ Add new card"})]})})]}),a.jsxs(Hd,{isSelected:v==="crypto",onClick:()=>_("crypto"),children:[a.jsx(Fd,{color:"#f08c00",children:a.jsx(iR,{size:20})}),a.jsxs(Vd,{children:[a.jsx(Ud,{children:"Cryptocurrency"}),a.jsx(Id,{children:"Pay with Bitcoin, Ethereum, or other cryptocurrencies"})]}),a.jsx(Yd,{isSelected:v==="crypto"})]}),v==="crypto"&&a.jsxs(qd,{children:[a.jsx("div",{children:"Select cryptocurrency:"}),a.jsx("div",{style:{marginTop:"0.5rem"},children:a.jsxs("select",{style:{background:"rgba(0, 0, 0, 0.3)",color:"#fff",padding:"0.5rem",borderRadius:"4px",border:"1px solid rgba(255, 255, 255, 0.2)",width:"100%"},children:[a.jsx("option",{value:"btc",children:"Bitcoin (BTC)"}),a.jsx("option",{value:"eth",children:"Ethereum (ETH)"}),a.jsx("option",{value:"usdc",children:"USD Coin (USDC)"}),a.jsx("option",{value:"usdt",children:"Tether (USDT)"})]})})]}),a.jsxs(xR,{children:[a.jsx(bR,{onClick:t,children:"Back to Booking"}),a.jsx(vR,{onClick:()=>n(v),disabled:v==="tokens"&&p<s,children:"Confirm Payment"})]})]})})},wR=f.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,jR=f.div`
  background: linear-gradient(to right, #111, #1a1a1a);
  border-radius: 12px;
  padding: 2rem;
  color: #fff;
  margin-bottom: 1rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
`,SR=f.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,kR=f.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`,CR=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`,Wd=f.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.2s ease;
  border-left: 2px solid rgba(212, 175, 55, 0.5);
  
  &:hover {
    background: rgba(212, 175, 55, 0.08);
    transform: translateY(-2px);
  }
`,Gd=f.h3`
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Xd=f.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`,MR=f.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #111;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.05);
`,_R=f.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
`,TR=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,zR=f.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
`,DR=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,PR=f.h2`
  font-size: 1.2rem;
  color: #d4af37;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  padding-bottom: 0.75rem;
`;f.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 6px;
  padding: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  line-height: 1.4;
`;const AR=f.h3`
  font-size: 1.2rem;
  color: #fff;
`,ER=f.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`,OR=f.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`,RR=f.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  &:hover {
    color: #e5c158;
  }
`,LR=f.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #1a1a1a;
  border: 1px solid #d4af37;
  border-radius: 6px;
  width: 240px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  display: ${e=>e.isOpen?"block":"none"};
`,BR=f.div`
  padding: 0.75rem;
`,$R=f.h4`
  color: #d4af37;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 500;
`,NR=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`,HR=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`,a5=f.button`
  background: none;
  border: none;
  color: #d4af37;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  &:hover {
    color: #e5c158;
  }
`,FR=f.span`
  color: #fff;
  font-size: 1rem;
`,VR=f.button`
  background: ${e=>e.isSelected?"rgba(212, 175, 55, 0.2)":"none"};
  border: 1px solid ${e=>e.isSelected?"#d4af37":"rgba(255, 255, 255, 0.1)"};
  color: ${e=>e.isSelected?"#d4af37":"#fff"};
  border-radius: 4px;
  padding: 0.5rem 0;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(212, 175, 55, 0.1);
    border-color: rgba(212, 175, 55, 0.5);
  }
`,s5=f.button`
  background: rgba(212, 175, 55, 0.15);
  border: none;
  border-radius: 4px;
  color: #d4af37;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(212, 175, 55, 0.3);
  }
`,UR=f.button`
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 4px;
  color: #d4af37;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: 0.5rem;
  white-space: nowrap;
  
  &:hover {
    background: rgba(212, 175, 55, 0.3);
    border-color: rgba(212, 175, 55, 0.5);
  }
  
  &:active {
    transform: translateY(1px);
  }
`,IR=f.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
`,nS=f.button`
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 4px;
  color: #d4af37;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  
  &:hover {
    background: rgba(212, 175, 55, 0.3);
    border-color: rgba(212, 175, 55, 0.6);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,l5=f(nS)`
  background: rgba(212, 175, 55, 0.3);
  border: 1px solid rgba(212, 175, 55, 0.5);
  font-weight: 600;
`;f.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;f.div`
  position: relative;
  background: ${e=>(e.color,"rgba(17, 17, 17, 0.6)")};
  border-radius: 4px;
  padding: 1rem;
  border-left: 4px solid ${e=>e.color?e.color.border:"transparent"};
  margin-bottom: 1rem;
`;f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
`;f.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;const oS=f.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    color: #fff;
  }
`,YR=f(oS)`
  color: rgba(212, 175, 55, 0.6);
  margin-right: 0.5rem;
  
  &:hover {
    color: #d4af37;
  }
`,qR=f.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`,WR=f.div`
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  padding: 0.5rem 0;
`,GR=f.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.isSelected?"rgba(212, 175, 55, 0.4)":e.isInSelectedRange?"rgba(212, 175, 55, 0.3)":e.savedRangeColor?e.savedRangeColor.bg:e.isInHoverRange?"rgba(212, 175, 55, 0.2)":"transparent"};
  border-radius: 4px;
  cursor: ${e=>e.isAvailable&&!e.savedRangeColor?"pointer":"default"};
  opacity: ${e=>e.isCurrentMonth?1:.3};
  color: ${e=>e.isAvailable?"#fff":"rgba(255, 255, 255, 0.3)"};
  border: 1px solid ${e=>e.isSelected||e.isInSelectedRange?"rgba(212, 175, 55, 0.6)":e.savedRangeColor?e.savedRangeColor.border:e.isAvailable?"rgba(212, 175, 55, 0.3)":"transparent"};
  font-weight: ${e=>e.isSelected||e.isInHoverRange||e.isInSelectedRange||e.savedRangeColor?"500":e.isAvailable?"400":"normal"};
  transition: background 0.15s ease, border-color 0.15s ease;
  
  &:hover {
    background: ${e=>e.isSelected?"rgba(212, 175, 55, 0.6)":e.isInSelectedRange?"rgba(212, 175, 55, 0.4)":e.savedRangeColor?e.savedRangeColor.bg:e.isAvailable&&!e.savedRangeColor?"rgba(212, 175, 55, 0.15)":"transparent"};
    opacity: ${e=>e.isCurrentMonth?e.savedRangeColor?.8:1:.3};
  }
  
  position: relative;
  
  &::after {
    content: ${e=>e.reservationNumber?`'${e.reservationNumber}'`:'""'};
    position: absolute;
    top: 1px;
    right: 2px;
    font-size: 8px;
    font-weight: bold;
    color: ${e=>e.savedRangeColor?e.savedRangeColor.border:"transparent"};
  }
`,XR=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;f.label`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;f.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.75rem;
  color: #fff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
  }
`;f.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.75rem;
  color: #fff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
  }
`;const QR=f.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`,c5=f.div`
  flex: 1;
  text-align: center;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
`,d5=f.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.25rem;
`,u5=f.div`
  font-size: 1.1rem;
  color: #fff;
`,ZR=f.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
`,KR=f.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
`,JR=f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,$0=f.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid ${e=>e.isSelected?"rgba(212, 175, 55, 0.7)":"transparent"};
  
  &:hover {
    background: rgba(212, 175, 55, 0.08);
  }
`,N0=f.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${e=>e.isSelected&&`
    border-color: #d4af37;
    
    &:after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #d4af37;
    }
  `}
`,H0=f.div`
  flex: 1;
`,F0=f.div`
  font-size: 1rem;
  color: #fff;
`,V0=f.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.25rem;
`,eL=f.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  
  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`,tL=f.div`
  visibility: hidden;
  position: absolute;
  width: 250px;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.8rem;
  line-height: 1.4;
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;
  }
`,rL=f.button`
  background: ${e=>e.disabled?"rgba(255, 255, 255, 0.1)":"linear-gradient(to right, #d4af37, #f2d35b)"};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  color: ${e=>e.disabled?"#fff":"#000"};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1.5rem;
  
  &:hover {
    background: linear-gradient(to right, #f2d35b, #d4af37);
    transform: translateY(-2px);
  }
`,nL=f.div`
  background: rgba(212, 175, 55, 0.1);
  border-left: 3px solid #d4af37;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 4px 4px 0;
`,oL=f.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`,iL=f.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
  border: 1px solid rgba(212, 175, 55, 0.2);
`,aL=f.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1rem;
`,yi=f.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
  
  &:last-child {
    border-bottom: none;
  }
`,wi=f.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`,Uo=f.div`
  font-size: 0.9rem;
  color: #fff;
  font-weight: ${e=>e.isBold?"600":"400"};
`,U0=f(yi)`
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: none;
`,I0=f(wi)`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`,h5=f(Uo)`
  font-size: 1.1rem;
  font-weight: 600;
`;f.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;f.h4`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;f.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`;const sL=(e,t)=>{const n=new Date(e,t,1),s=new Date(e,t+1,0).getDate(),c=n.getDay(),d=[],h=t===0?11:t-1,m=t===0?e-1:e,p=new Date(m,h+1,0).getDate();for(let k=0;k<c;k++){const _=new Date(m,h,p-c+k+1),z=h===11||h===0||h===1;d.push({date:_,isCurrentMonth:!1,isAvailable:z})}const x=[];for(let k=1;k<=s;k++){const _=new Date(e,t,k),z=t===11||t===0||t===1;x.push({date:_,isCurrentMonth:!0,isAvailable:z,isToday:new Date().toDateString()===_.toDateString()})}const v=[],j=42-(d.length+x.length),w=t===11?0:t+1,C=t===11?e+1:e;for(let k=1;k<=j;k++){const _=new Date(C,w,k),z=w===11||w===0||w===1;v.push({date:_,isCurrentMonth:!1,isAvailable:z})}return[...d,...x,...v]},lL=({property:e,token:t})=>{var Rn;const n=new Date,[o,s]=S.useState(n.getFullYear()),[c,d]=S.useState(n.getMonth()),[h,m]=S.useState([]),[p,x]=S.useState([]),[v,y]=S.useState(null),[j,w]=S.useState("tokens"),C=2.2,[k,_]=S.useState(!1),[z,D]=S.useState(!1),[L,A]=S.useState(n.getFullYear()),[V,E]=S.useState(!1),[F,te]=S.useState(null),[de,le]=S.useState(null),[fe,me]=S.useState(!1),pe=t.price,be=S.useRef(null),I=()=>{if(p.length!==2)return 0;const oe=new Date(p[0]),ye=new Date(p[1]),Le=Math.abs(ye-oe);return Math.ceil(Le/(1e3*60*60*24))},H=()=>{if(pe<=0)return 0;const oe=700,ye=oe/pe,Le=Math.ceil(ye*1e4)/1e4;return Le*pe<oe?Math.ceil(oe/pe*1e4)/1e4+1e-4:Le},ee=()=>{if(pe<=0)return 0;const oe=1200,ye=oe/pe,Le=Math.ceil(ye*1e4)/1e4;return Le*pe<oe?Math.ceil(oe/pe*1e4)/1e4+1e-4:Le},ne=()=>H(),P=()=>"Owner's Rate",[$,G]=S.useState(0),[R,Y]=S.useState(0),[J,Q]=S.useState(0),[ue,ce]=S.useState(0),[ve,Fe]=S.useState(0);S.useEffect(()=>{if(p.length===2){const oe=I(),ye=H(),Le=oe*ye;G(oe),Y(ye),Q(Le),ce(ye*pe),Fe(Le*pe)}else G(0),Y(0),Q(0),ce(0),Fe(0)},[p,pe]);const je=()=>h.reduce((oe,ye)=>oe+ye.nights,0),Ye=()=>h.reduce((oe,ye)=>oe+ye.tokens,0),Qe=()=>Ye()*pe,ir=()=>p.length!==2?0:ge(new Date(p[0]),new Date(p[1]))*ne(),Nr=()=>ir()*pe,gr=oe=>{const ye=H();return oe*ye},Ze=oe=>gr(oe)*pe,rt=oe=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(oe),zt=oe=>h.some(ye=>oe>=ye.arrival&&oe<=ye.departure),Dt=oe=>{if(!(!oe.isAvailable||!oe.isCurrentMonth)&&!zt(oe.date)){if(p.length===0||p.length===2)x([oe.date]);else if(p.length===1){const ye=new Date(Math.min(p[0].getTime(),oe.date.getTime())),Le=new Date(Math.max(p[0].getTime(),oe.date.getTime()));let sr=!1;const br=new Date(ye);for(;br<=Le;){if(zt(new Date(br))){sr=!0;break}br.setDate(br.getDate()+1)}if(!sr){const Hr=[p[0],oe.date].sort((Ln,Bn)=>Ln-Bn);x(Hr)}}y(null)}},Pt=[{bg:"rgba(212, 175, 55, 0.25)",border:"rgba(212, 175, 55, 0.6)"},{bg:"rgba(86, 180, 235, 0.25)",border:"rgba(86, 180, 235, 0.6)"},{bg:"rgba(230, 126, 34, 0.25)",border:"rgba(230, 126, 34, 0.6)"},{bg:"rgba(46, 204, 113, 0.25)",border:"rgba(46, 204, 113, 0.6)"},{bg:"rgba(155, 89, 182, 0.25)",border:"rgba(155, 89, 182, 0.6)"}],ge=(oe,ye)=>{const Le=new Date(oe),sr=new Date(ye),br=Math.abs(sr-Le);return Math.ceil(br/(1e3*60*60*24))},xe=()=>{if(p.length===2){const oe=new Date(p[0]),ye=new Date(p[1]),Le=H(),sr=ge(oe,ye),br=sr*Le,Hr=Le*pe,Ln=br*pe,Bn=[...h,{arrival:oe,departure:ye,nights:sr,tokens:br,tokensPerDay:Le,dailyRate:Hr,totalCost:Ln,tokenPriceAtBooking:pe,color:Pt[h.length%Pt.length]}];Bn.sort((uo,Fr)=>uo.arrival-Fr.arrival),m(Bn),x([])}},Ae=oe=>{const ye=h[oe];x([ye.arrival,ye.departure]),le(oe);const Le=[...h];Le.splice(oe,1),m(Le)},Oe=oe=>{const ye=[...h];ye.splice(oe,1),m(ye),de===oe?(le(null),x([])):de!==null&&oe<de&&le(de-1)},Ke=oe=>{!oe.isAvailable||!oe.isCurrentMonth||p.length===1&&y(oe.date)},nt=()=>{y(null)},Bt=oe=>{if(p.length!==1||!v)return!1;const ye=p[0]<v?p[0]:v,Le=p[0]<v?v:p[0];return oe>=ye&&oe<=Le},gt=oe=>{if(p.length!==2)return!1;const ye=new Date(Math.min(p[0].getTime(),p[1].getTime())),Le=new Date(Math.max(p[0].getTime(),p[1].getTime()));return oe>=ye&&oe<=Le},Ne=oe=>{for(let ye=0;ye<h.length;ye++){const Le=h[ye];if(oe>=Le.arrival&&oe<=Le.departure)return{inRange:!0,color:Le.color,index:ye}}return{inRange:!1}},qe=()=>{c===0?(d(11),s(o-1)):d(c-1)},wt=()=>{c===11?(d(0),s(o+1)):d(c+1)};S.useEffect(()=>{const oe=ye=>{be.current&&!be.current.contains(ye.target)&&D(!1)};return document.addEventListener("mousedown",oe),()=>{document.removeEventListener("mousedown",oe)}},[]);const Vt=()=>{D(!z)},ar=oe=>{A(L+oe)},tr=oe=>{d(oe),s(L),D(!1)},xr=()=>{let oe,ye=o;c<11?oe=11:c===11?(oe=0,ye=o+1):c===0?oe=1:(oe=11,ye=o+1),d(oe),s(ye)},Wt=sL(o,c),Zo=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Bi=["January","February","March","April","May","June","July","August","September","October","November","December"];return a.jsxs(wR,{children:[V&&F&&a.jsx(PopupOverlay,{children:a.jsxs(PopupContainer,{children:[a.jsxs(PopupHeader,{children:[a.jsx(PopupTitle,{children:"Confirm Your Reservation"}),a.jsx(CloseButton,{onClick:()=>E(!1),children:a.jsx(rg,{})})]}),a.jsxs(PopupSection,{children:[a.jsx(PopupSectionTitle,{children:"Reservation Details"}),a.jsxs(ReservationCard,{color:(Rn=F.color)==null?void 0:Rn.border,children:[a.jsx("div",{style:{marginBottom:"0.75rem"},children:a.jsx("strong",{children:e.name})}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.75rem"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.85rem",color:"#aaa",marginBottom:"0.25rem"},children:"Arrival"}),a.jsx("div",{children:F.arrival.toLocaleDateString()})]}),a.jsx("div",{style:{display:"flex",alignItems:"center",margin:"0 1rem"},children:a.jsx("span",{style:{color:"#aaa"},children:"→"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.85rem",color:"#aaa",marginBottom:"0.25rem"},children:"Departure"}),a.jsx("div",{children:F.departure.toLocaleDateString()})]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.85rem",color:"#aaa",marginBottom:"0.25rem"},children:"Nights"}),a.jsx("div",{children:F.nights})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.85rem",color:"#aaa",marginBottom:"0.25rem"},children:"Elara"}),a.jsx("div",{children:F.tokens.toFixed(4)})]}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"0.85rem",color:"#aaa",marginBottom:"0.25rem"},children:"Approx. Cost"}),a.jsx("div",{children:rt(F.totalCost)})]})]})]})]}),a.jsxs(PopupSection,{children:[a.jsx(PopupSectionTitle,{children:"Payment Method"}),a.jsxs(PaymentMethodsContainer,{children:[a.jsxs(PaymentMethodOption,{isSelected:j==="tokens",onClick:()=>w("tokens"),children:[a.jsx(PaymentMethodIcon,{children:a.jsx("span",{style:{color:"#d4af37",fontSize:"1.2rem"},children:"₮"})}),a.jsxs(PaymentMethodDetails,{children:[a.jsx(PaymentMethodName,{children:"Loaf Elara"}),a.jsx(PaymentMethodDescription,{children:"Pay with your LOAF tokens"})]})]}),a.jsxs(PaymentMethodOption,{isSelected:j==="deposit",onClick:()=>w("deposit"),children:[a.jsx(PaymentMethodIcon,{children:a.jsx("span",{style:{color:"#fff",fontSize:"1.2rem"},children:"$"})}),a.jsxs(PaymentMethodDetails,{children:[a.jsx(PaymentMethodName,{children:"Platform Deposit"}),a.jsx(PaymentMethodDescription,{children:"Pay with your platform balance"})]})]}),a.jsxs(PaymentMethodOption,{isSelected:j==="fiat",onClick:()=>w("fiat"),children:[a.jsx(PaymentMethodIcon,{children:a.jsx("span",{style:{color:"#4CAF50",fontSize:"1.2rem"},children:"$"})}),a.jsxs(PaymentMethodDetails,{children:[a.jsx(PaymentMethodName,{children:"Fiat Payment"}),a.jsx(PaymentMethodDescription,{children:"Pay with credit card or bank transfer"})]})]}),a.jsxs(PaymentMethodOption,{isSelected:j==="crypto",onClick:()=>w("crypto"),children:[a.jsx(PaymentMethodIcon,{children:a.jsx("span",{style:{color:"#ff9900",fontSize:"1.2rem"},children:"₿"})}),a.jsxs(PaymentMethodDetails,{children:[a.jsx(PaymentMethodName,{children:"Cryptocurrency"}),a.jsx(PaymentMethodDescription,{children:"Pay with BTC, ETH, or other cryptocurrencies"})]})]})]})]}),a.jsxs(ButtonsContainer,{children:[a.jsx(BackButton,{onClick:()=>E(!1),children:"Back to Calendar"}),a.jsx(ConfirmPaymentButton,{onClick:handleConfirmReservation,children:"Confirm Reservation"})]})]})}),a.jsxs(jR,{children:[a.jsxs(SR,{children:[a.jsx(i5,{size:24})," Property Reservation System"]}),a.jsx(kR,{children:"As a LOAF home owner, you have exclusive rights to reserve your property at an owner's rate for private use, gatherings, or stays. From a single day to extended stays, enjoy the flexibility of booking your property when available."}),a.jsx(nL,{children:a.jsxs(oL,{children:[a.jsx("strong",{children:"Flexible Payment Options:"})," Pay using tokens from any property holding, platform deposits, fiat currency, or cryptocurrency."]})}),a.jsxs(CR,{children:[a.jsxs(Wd,{children:[a.jsxs(Gd,{children:[a.jsx(Nd,{size:20})," Owner's Rate"]}),a.jsx(Xd,{children:"Access special owner's rates when you hold at least 0.1 tokens in the property."})]}),a.jsxs(Wd,{children:[a.jsxs(Gd,{children:[a.jsx(Nd,{size:20})," Multiple Payment Methods"]}),a.jsx(Xd,{children:"Choose from tokens, fiat, or crypto payment options for maximum convenience."})]}),a.jsxs(Wd,{children:[a.jsxs(Gd,{children:[a.jsx(Nd,{size:20})," Flexible Booking"]}),a.jsx(Xd,{children:"Book your property for any duration - from single day events to extended vacation stays."})]}),a.jsxs(Wd,{children:[a.jsxs(Gd,{children:[a.jsx(Nd,{size:20})," Priority Access"]}),a.jsx(Xd,{children:"Enjoy priority booking windows and special access to your property's calendar."})]})]})]}),a.jsxs(MR,{children:[a.jsx(_R,{children:"Reserve Your Stay"}),a.jsxs(TR,{children:[a.jsxs(zR,{children:[a.jsx(PR,{children:"Residence Calendar"}),a.jsxs(DR,{children:[a.jsxs(AR,{children:[a.jsx(XO,{size:20,style:{marginRight:"0.5rem",verticalAlign:"middle"}}),a.jsxs(OR,{ref:be,children:[a.jsxs(RR,{onClick:Vt,children:[Bi[c]," ",o," ",a.jsx(tS,{size:16,style:{marginLeft:"0.25rem"}})]}),a.jsx(LR,{isOpen:z,children:a.jsxs(BR,{children:[a.jsxs(HR,{children:[a.jsx(a5,{onClick:()=>ar(-1),children:"<"}),a.jsx(FR,{children:L}),a.jsx(a5,{onClick:()=>ar(1),children:">"})]}),a.jsx($R,{children:"Select Month"}),a.jsx(NR,{children:Bi.map((oe,ye)=>a.jsx(VR,{isSelected:c===ye&&o===L,onClick:()=>tr(ye),children:oe.substring(0,3)},oe))})]})})]})]}),a.jsxs(ER,{children:[a.jsx(s5,{onClick:qe,children:"<"}),a.jsx(s5,{onClick:wt,children:">"}),a.jsx(UR,{onClick:xr,children:"Next Available Date"})]})]}),a.jsxs(qR,{onMouseLeave:nt,children:[Zo.map(oe=>a.jsx(WR,{children:oe},oe)),Wt.map((oe,ye)=>{const Le=oe.isAvailable&&oe.isCurrentMonth?Ne(oe.date):{inRange:!1};return a.jsx(GR,{isAvailable:oe.isAvailable,isCurrentMonth:oe.isCurrentMonth,isToday:oe.isToday,isSelected:p.some(sr=>sr.toDateString()===oe.date.toDateString()),isInSelectedRange:oe.isAvailable&&oe.isCurrentMonth&&gt(oe.date),savedRangeColor:Le.inRange?Le.color:null,reservationNumber:Le.inRange?Le.index+1:null,isInHoverRange:oe.isAvailable&&oe.isCurrentMonth&&Bt(oe.date),onClick:()=>Dt(oe),onMouseEnter:()=>Ke(oe),children:oe.date.getDate()},ye)})]}),p.length>0&&a.jsxs(QR,{children:[a.jsxs(c5,{children:[a.jsx(d5,{children:"Arrival"}),a.jsx(u5,{children:p[0].toLocaleDateString("en-US",{month:"short",day:"numeric"})})]}),a.jsx("span",{children:"→"}),a.jsxs(c5,{children:[a.jsx(d5,{children:"Departure"}),a.jsx(u5,{children:p[p.length-1].toLocaleDateString("en-US",{month:"short",day:"numeric"})})]})]}),a.jsxs(IR,{children:[(p.length===2||h.length>0)&&a.jsx(nS,{onClick:()=>{p.length===2&&xe()},children:h.length===0?"Add Date Range":"Add Another Date Range"}),p.length===2&&a.jsx(l5,{onClick:()=>{xe()},children:"Confirm"})]})]}),a.jsxs(XR,{children:[k&&a.jsxs(ZR,{children:[a.jsx(KR,{children:"Payment Method"}),a.jsxs(JR,{children:[a.jsxs($0,{isSelected:j==="tokens",onClick:()=>w("tokens"),children:[a.jsx(N0,{isSelected:j==="tokens"}),a.jsxs(H0,{children:[a.jsx(F0,{children:"Pay with Elara"}),a.jsx(V0,{children:"Use your LOAF Elara as payment. Elara will be removed from circulation."})]})]}),a.jsxs($0,{isSelected:j==="deposit",onClick:()=>w("deposit"),children:[a.jsx(N0,{isSelected:j==="deposit"}),a.jsxs(H0,{children:[a.jsx(F0,{children:"Platform Deposit"}),a.jsx(V0,{children:"Pay with cash deposit and keep your tokens. No impact on token circulation."})]})]}),a.jsxs($0,{isSelected:j==="collateral",onClick:()=>w("collateral"),children:[a.jsx(N0,{isSelected:j==="collateral"}),a.jsxs(H0,{children:[a.jsx(F0,{children:"Elara as Collateral"}),a.jsx(V0,{children:"Lock Elara as collateral during your reservation period. Elara returned after your stay."})]})]})]})]}),a.jsxs(iL,{children:[a.jsx(aL,{children:"Reservation Summary"}),a.jsxs(yi,{children:[a.jsx(wi,{children:"Property"}),a.jsx(Uo,{children:e.name})]}),p.length===2&&a.jsxs(a.Fragment,{children:[a.jsxs(yi,{children:[a.jsx(wi,{children:"Current Selection"}),a.jsx(Uo,{children:a.jsxs("div",{style:{fontWeight:"500",fontSize:"0.95rem"},children:[p[0].toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})," - ",p[1].toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})]})})]}),a.jsxs(yi,{children:[a.jsx(wi,{children:"Nights"}),a.jsxs(Uo,{children:[$," ",$===1?"night":"nights"]})]}),a.jsxs(yi,{children:[a.jsx(wi,{children:"Market Rate per Night"}),a.jsxs(Uo,{children:[ee().toFixed(4)," Elara",a.jsxs("div",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.6)",marginTop:"2px"},children:["≈ ",rt(ee()*pe)]})]})]}),a.jsxs(yi,{children:[a.jsxs(wi,{children:["Owner's Rate per Night",a.jsxs(eL,{children:[a.jsx(i5,{size:16,color:"rgba(212, 175, 55, 0.8)"}),a.jsx(tL,{className:"tooltip",children:"Owners are classified as those who hold above 0.1% of the property or 0.1 Elara in the property. Owners do not have to pay with Elara to access this rate."})]}),a.jsxs("div",{style:{fontSize:"0.75rem",color:"rgba(212, 175, 55, 0.8)",marginTop:"4px"},children:["Your Holdings: ",C.toFixed(2)," Elara"]})]}),a.jsxs(Uo,{children:[R.toFixed(4)," Elara",a.jsxs("div",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.6)",marginTop:"2px"},children:["≈ ",rt(ue)]})]})]}),a.jsxs(U0,{children:[a.jsxs(I0,{children:["Selection Total (",P(),")"]}),a.jsxs(Uo,{isBold:!0,children:[a.jsxs("span",{style:{fontSize:"1.05rem",fontWeight:"600"},children:[ir().toFixed(4)," Elara"]}),a.jsxs("div",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.7)",marginTop:"2px"},children:["≈ ",rt(Nr())]})]})]}),a.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"0.75rem"},children:a.jsx(l5,{onClick:()=>{xe()},style:{width:"auto",padding:"0.5rem 1.5rem"},children:"Confirm"})}),a.jsx("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.1)",margin:"0.5rem 0"}})]}),h.length>0&&a.jsxs(a.Fragment,{children:[a.jsxs(yi,{children:[a.jsx(wi,{children:"Reservations"}),a.jsx(Uo,{children:h.length})]}),h.map((oe,ye)=>a.jsxs("div",{style:{margin:"0.75rem 0",padding:"0.75rem",backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:"4px",borderLeft:`4px solid ${oe.color?oe.color.border:"#d4af37"}`,position:"relative"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[a.jsxs("div",{style:{fontWeight:"600",fontSize:"0.95rem"},children:["Reservation ",ye+1]}),a.jsxs("div",{style:{display:"flex"},children:[a.jsx(YR,{onClick:()=>Ae(ye),style:{position:"static",margin:"0 0.5rem 0 0"},children:a.jsx(rR,{size:16})}),a.jsx(oS,{onClick:()=>Oe(ye),style:{position:"static"},children:a.jsx(rg,{size:18})})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.5rem"},children:[a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.6)"},children:"Arrival"}),a.jsx("div",{style:{fontWeight:"500"},children:oe.arrival.toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})})]}),a.jsx("div",{style:{margin:"0 0.75rem",color:"rgba(255, 255, 255, 0.4)"},children:"→"}),a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.6)"},children:"Departure"}),a.jsx("div",{style:{fontWeight:"500"},children:oe.departure.toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})})]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"0.5rem",paddingTop:"0.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.1)"},children:[a.jsx("div",{children:a.jsxs("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.6)"},children:[oe.nights," ",oe.nights===1?"night":"nights"]})}),a.jsxs("div",{style:{textAlign:"right"},children:[a.jsxs("div",{style:{fontSize:"0.9rem",color:"#d4af37",fontWeight:"500"},children:[gr(oe.nights).toFixed(4)," tokens"]}),a.jsxs("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.6)"},children:["≈ ",rt(Ze(oe.nights))]})]})]})]},ye)),a.jsxs(U0,{children:[a.jsx(I0,{children:"Total Stay"}),a.jsxs(h5,{children:[je()," ",je()===1?"night":"nights"]})]}),a.jsxs(U0,{children:[a.jsxs(I0,{children:["Total Cost (",P(),")"]}),a.jsxs(h5,{children:[a.jsxs("span",{style:{fontSize:"1.05rem",fontWeight:"600"},children:[Ye().toFixed(4)," Elara"]}),a.jsxs("div",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.7)",marginTop:"2px"},children:["≈ ",rt(Qe())]})]})]})]})]}),h.length>0&&a.jsx(rL,{onClick:()=>me(!0),children:"Confirm Reservation"})]})]})]}),fe&&h&&h.length>0&&a.jsx("div",{id:"payment-popup-container",children:a.jsx(yR,{isOpen:!0,onClose:()=>me(!1),onConfirm:oe=>{console.log(`Payment confirmed with method: ${oe}`),me(!1)},selectedDates:[h[0].arrival,h[0].departure],totalCost:h[0].tokens||0,isOwnerRate:C>=.1,tokenPrice:pe||0,ownerRate:h[0].tokensPerDay||0,marketRate:calculateMarketRatePerDay()||0,userTokenHoldings:C,propertyName:(e==null?void 0:e.name)||"Property"})})]})};Li.register(Wa,Ga,Di,fn,Bh,$h,Lh,Rh);const f5=(e,t,n,o)=>e<=t?0:e>=o?100:e<n?50*(e-t)/(n-t):50+50*(e-n)/(o-n),cL=e=>({"28-wentworth-road":1,"15-blue-point-road":2,"42-vaucluse-road":3,"8-carrara-road":4,"17-olola-avenue":5,"23-victoria-street":6})[e]||1,dL=e=>({1:"28-wentworth-road",2:"15-blue-point-road",3:"42-vaucluse-road",4:"8-carrara-road",5:"17-olola-avenue",6:"23-victoria-street"})[e]||"28-derby-street-elara",p5=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  color: var(--color-text, #f8f9fa);
  font-family: var(--font-family, 'Inter', sans-serif);
`,uL=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,hL=f.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
  flex: 1;
  
  &:hover {
    .dropdown-icon {
      transform: translateY(2px);
    }
  }
`,fL=f.div`
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s;
  }
`,pL=f.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-width: 400px;
  background-color: var(--color-card);
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
  overflow: hidden;
  display: ${e=>e.isOpen?"block":"none"};
`,mL=f.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:last-child {
    border-bottom: none;
  }
`,gL=f.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`,xL=f.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`,m5=f.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
  }
`,bL=f.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`,vL=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  max-width: none;
  min-width: 120%;
  min-height: 120%;
  margin: 0;
  padding: 0;
  transform: scale(1.0);
  transform-origin: center;
`,yL=f.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`,wL=f.div`
  display: inline-block;
  width: auto;
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
`,jL=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,SL=f.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
`,kL=f.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-accent, #f0b90b);
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
`,CL=f.span`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>e.isPositive?"var(--color-positive, #0ecb81)":"var(--color-negative, #f6465d)"};
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  svg {
    margin-right: 0.15rem;
  }
`,ML=f.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
`,_L=f.div`
  font-size: 0.95rem;
  color: var(--color-accent, #f0b90b);
  font-weight: 600;
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
  }
`,Qd=f.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 18px;
    height: 18px;
  }
`,TL=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,iS=f.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,zL=f(iS)`
  background-color: var(--color-accent, #f0b90b);
  color: black;
  border: none;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
  }
`,DL=f(iS)`
  background-color: transparent;
  border: 1px solid var(--color-accent, #f0b90b);
  color: var(--color-accent, #f0b90b);
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
  }
`,PL=f.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`,AL=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Y0=f.button`
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`,g5=f.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  background-color: ${e=>e.color||"#f6465d"};
  border-radius: 50%;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(246, 70, 93, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 5px rgba(246, 70, 93, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(246, 70, 93, 0);
    }
  }
`,ya=f.div`
  padding: 1rem 1.5rem;
  font-weight: ${e=>e.active?"600":"400"};
  color: ${e=>e.active?"var(--color-accent)":"var(--color-text-secondary)"};
  border-bottom: 2px solid ${e=>e.active?"var(--color-accent)":"transparent"};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
  position: relative;
  
  &:hover {
    color: ${e=>e.active?"var(--color-accent)":"var(--color-text)"};
  }
`,wa=f.div`
  display: ${e=>e.active?"block":"none"};
  margin-top: 1.5rem;
  
  &.trade-console {
    margin: 0 -2rem;
    padding: 1.5rem 2rem;
    background-color: var(--color-background-darker, #0a0a0a);
    border-radius: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    max-width: 100vw;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
`,EL=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,OL=f.div``,RL=f.div``,LL=f.div`
  margin-bottom: 2rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
`,BL=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`,Zd=f.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
`,Kd=f.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
`,Jd=f.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`,$L=f.div`
  margin-top: 2rem;
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.5rem;
  grid-column: 1 / -1; /* Make it span full width */
  width: 100%;
`,NL=f.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: var(--color-accent);
  }
`,HL=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ja=f.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  transition: all 0.2s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,Sa=f.div`
  width: 36px;
  height: 36px;
  min-width: 36px;
  border-radius: 50%;
  background-color: rgba(240, 185, 11, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  
  svg {
    width: 18px;
    height: 18px;
    color: var(--color-accent);
  }
`,ka=f.div`
  flex: 1;
`,Ca=f.h4`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`,Ma=f.p`
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`,FL=f.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
`,VL=f.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
  
  &:hover {
    opacity: 0.9;
  }
`,UL=f.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-text);
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
  }
`,IL=f.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  background-color: var(--color-card-dark);
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 100;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid var(--color-border);
  margin-top: 0.5rem;
`,YL=f.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  background-color: ${e=>e.selected?"rgba(56, 97, 251, 0.1)":"transparent"};
  border-left: ${e=>e.selected?"3px solid var(--color-accent)":"3px solid transparent"};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`,qL=f.div`
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-text);
`,WL=f.div`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-top: 0.25rem;
`,GL=f.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  
  /* First child (place order panel) spans only first column */
  & > div:first-child {
    grid-column: 1 / 2;
  }
  
  /* BottomPanelsContainer spans both columns */
  & > div:last-child {
    grid-column: 1 / -1;
  }
`;f.div`
  background-color: var(--color-background);
  border-radius: 8px;
  overflow: hidden;
`;const XL=f.div`
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  height: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  
  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    
    .chart-title-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .price-display {
      margin-top: 8px;
    }
    
    .price-main {
      display: flex;
      align-items: baseline;
      margin-bottom: 2px;
      
      .price-value-container {
        display: flex;
        align-items: baseline;
        color: #fff;
        
        &.flash-increase {
          color: #0ecb81 !important;
          /* No transition - immediate color change */
        }
        
        &.flash-decrease {
          color: #f6465d !important;
          /* No transition - immediate color change */
        }
      }
      
      .price-value {
        font-size: 24px;
        font-weight: 700;
        color: inherit;
      }
      
      .last-digit {
        font-size: 24px;
        font-weight: 700;
        
        &.last-digit-increase {
          color: #0ecb81;
        }
        
        &.last-digit-decrease {
          color: #f6465d;
        }
      }
      
      .price-currency {
        font-size: 14px;
        color: #999;
        margin-left: 4px;
      }
    }
    
    .price-changes {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 500;
    }
    
    .price-change, .absolute-change {
      &.positive {
        color: #0ecb81;
      }
      
      &.negative {
        color: #f6465d;
      }
    }
  }
  
  .chart-controls {
    display: flex;
    gap: 0.5rem;
  }
  
  .chart-btn {
    background-color: var(--color-card-dark);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--color-accent-dark);
      color: var(--color-text);
    }
    
    &.active {
      background-color: var(--color-accent);
      color: var(--color-text);
      border-color: var(--color-accent);
    }
  }
  
  .chart-container {
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  
  .chart-grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .chart-grid-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .chart-grid-line.vertical {
    top: 0;
    bottom: 0;
    width: 1px;
    height: auto;
  }
  
  .chart-line {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-accent) 10%, var(--color-accent) 90%, transparent);
    box-shadow: 0 0 8px var(--color-accent);
    opacity: 0.7;
  }
`,QL=f.div`
  display: flex;
  gap: 1.5rem;
  height: 350px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`,ZL=f.div`
  flex: 1;
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
  
  .section-controls {
    display: flex;
    gap: 0.75rem;
    
    span {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      
      &:hover {
        color: var(--color-text);
      }
      
      &.active {
        color: var(--color-accent);
        background-color: rgba(0, 123, 255, 0.1);
      }
    }
  }
  
  .order-book-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .order-book-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--color-border);
    font-size: 0.85rem;
    color: var(--color-text-secondary);
  }
  
  .order-book-sells, .order-book-buys {
    flex: 1;
    overflow-y: auto;
    position: relative;
    scrollbar-width: thin;
    scrollbar-color: var(--color-border) transparent;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-border);
      border-radius: 3px;
    }
  }
  
  .order-book-sells {
    display: flex;
    flex-direction: column;
  }
  
  .order-book-buys {
    display: flex;
    flex-direction: column;
  }
  
  .order-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.35rem 0;
    font-size: 0.9rem;
    position: relative;
    
    .depth-indicator {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      opacity: 0.1;
    }
    
    &.sell .depth-indicator {
      background-color: #f6465d;
    }
    
    &.buy .depth-indicator {
      background-color: #0ecb81;
    }
    
    .price {
      &.up {
        color: #0ecb81;
      }
      
      &.down {
        color: #f6465d;
      }
      
      &.neutral {
        &.sell {
          color: #f6465d;
        }
        
        &.buy {
          color: #0ecb81;
        }
      }
    }
    
    > div {
      position: relative;
      z-index: 1;
    }
  }
  
  .order-book-current-price {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.5rem 0;
    background-color: rgba(0, 123, 255, 0.05);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    
    .current-price {
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 8px;
      
      &.increasing {
        color: #0ecb81;
      }
      
      &.decreasing {
        color: #f6465d;
      }
    }
    
    .price-change {
      color: #0ecb81;
      font-size: 0.9rem;
      &.negative {
        color: #f6465d;
      }
    }
  }
`,KL=f.div`
  flex: 1;
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
  
  .section-controls {
    display: flex;
    gap: 0.75rem;
    
    span {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      
      &:hover {
        color: var(--color-text);
      }
      
      &.active {
        color: var(--color-accent);
        background-color: rgba(0, 123, 255, 0.1);
      }
    }
  }
  
  .market-trades-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .market-trades-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--color-border);
    font-size: 0.85rem;
    color: var(--color-text-secondary);
  }
  
  .market-trades-list {
    flex: 1;
    overflow-y: auto;
  }
  
  .trade-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.35rem 0;
    font-size: 0.9rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    
    &:last-child {
      border-bottom: none;
    }
    
    &.buy .price {
      color: #0ecb81;
    }
    
    &.sell .price {
      color: #f6465d;
    }
    
    .time {
      color: var(--color-text-secondary);
      font-size: 0.85rem;
    }
  }
`,JL=f.div`
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  flex: 0 0 calc(66.667% - 1.5rem);
  max-width: calc(66.667% - 1.5rem);
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
`,eB=f.div`
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--color-accent) rgba(255, 255, 255, 0.1);
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-accent);
    border-radius: 3px;
  }
`,tB=f.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr 1fr 1fr 1fr 1.2fr 0.8fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: 0.5rem;
`,Ro=f.div`
  text-align: ${e=>e.align||"left"};
`,x5=f.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr 1fr 1fr 1fr 1.2fr 0.8fr;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`,rB=f.span`
  font-weight: 500;
  color: ${e=>e.type==="buy"?"#0ecb81":"#f6465d"};
`,nB=f.div`
  font-weight: 500;
`,oB=f.div`
  font-weight: 500;
`,iB=f.div`
  font-weight: 500;
`,aB=f.div`
  font-weight: 500;
  text-align: left;
`,sB=f.div`
  font-weight: 500;
`,lB=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,cB=f.div`
  font-weight: 500;
  font-size: 0.875rem;
`,dB=f.div`
  width: 80%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
`,uB=f.div`
  height: 100%;
  background-color: var(--color-accent);
  border-radius: 3px;
  transition: width 0.3s ease-in-out;
  width: ${e=>e.percentage}%;
`,b5=f.button`
  background-color: transparent;
  color: var(--color-text-secondary);
  border: none;
  padding: 0;
  margin-left: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  font-size: 0.875rem;
  
  &:hover {
    color: var(--color-accent);
  }
  
  &:active {
    transform: translateY(1px);
  }
`,hB=f.button`
  background-color: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-text-secondary);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(246, 70, 93, 0.1);
    color: #f6465d;
    border-color: #f6465d;
  }
  
  &:active {
    transform: translateY(1px);
  }
`,fB=f.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
`,pB=f.div`
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  flex: 0 0 33.333%;
  max-width: 33.333%;
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`,mB=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
`,gB=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  overflow-y: auto;
`,xB=f.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
`,bB=f.h4`
  font-size: 0.9375rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
`,vB=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
`,yB=f.span``,wB=f.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: ${e=>e.type==="property"?"rgba(14, 203, 129, 0.1)":"rgba(240, 185, 11, 0.1)"};
  color: ${e=>e.type==="property"?"#0ecb81":"var(--color-accent, #f0b90b)"};
  font-weight: 500;
`,jB=f.div`
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
  
  .section-controls {
    display: flex;
    gap: 0.75rem;
    
    span {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      
      &:hover {
        color: var(--color-text);
      }
      
      &.active {
        color: var(--color-accent);
        background-color: rgba(0, 123, 255, 0.1);
      }
    }
  }
  
  .trade-tabs {
    display: flex;
    margin-bottom: 1.5rem;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--color-border);
  }
  
  .trade-tab {
    flex: 1;
    background: none;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
    
    &.active {
      background-color: var(--color-accent);
      color: #000;
    }
    
    &:first-child {
      border-right: 1px solid var(--color-border);
      
      &.active {
        border-right-color: transparent;
      }
    }
  }
  
  .trade-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    label {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
    }
  }
  
  .input-group {
    display: flex;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.2);
    
    input {
      flex: 1;
      background: none;
      border: none;
      padding: 0.75rem 1rem;
      color: var(--color-text);
      font-size: 1rem;
      
      &:focus {
        outline: none;
      }
    }
    
    .input-addon {
      display: flex;
      align-items: center;
      padding: 0 1rem;
      background-color: rgba(0, 0, 0, 0.2);
      color: var(--color-text-secondary);
      font-size: 0.9rem;
      border-left: 1px solid var(--color-border);
    }
  }
  
  .trade-slider {
    margin: 0.5rem 0;
    
    .slider-labels {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      
      span {
        font-size: 0.8rem;
        color: var(--color-text-secondary);
      }
    }
    
    .slider-track {
      position: relative;
      height: 6px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      margin: 0.75rem 0;
    }
    
    .slider-fill {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: var(--color-accent);
      border-radius: 3px;
    }
    
    .slider-handle {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      background-color: var(--color-accent);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
    }
  }
  
  .trade-summary {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 1rem;
    margin-top: 0.5rem;
    
    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      span:first-child {
        color: var(--color-text-secondary);
      }
      
      span:last-child {
        color: var(--color-text);
      }
    }
  }
  
  .trade-button {
    margin-top: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &.buy {
      background-color: #0ecb81;
      color: white;
      
      &:hover {
        background-color: #0bb974;
      }
    }
    
    &.sell {
      background-color: #f6465d;
      color: white;
      
      &:hover {
        background-color: #e73a51;
      }
    }
  }
`,SB=f.div`
  display: flex;
  gap: 0.5rem;
`,eu=f.button`
  background-color: ${e=>e.active?"var(--color-accent, #f0b90b)":"transparent"};
  color: ${e=>e.active?"#000":"#fff"};
  border: 1px solid var(--color-accent, #f0b90b);
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent, #f0b90b)":"rgba(240, 185, 11, 0.1)"};
  }
`,ng=f.div`
  background-color: rgba(30, 32, 38, 0.7);
  border-bottom: 1px solid rgba(240, 185, 11, 0.15);
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;f(ng)`
  background-color: rgba(30, 32, 38, 0.7);
  border-bottom: 1px solid rgba(240, 185, 11, 0.3);
`;const kB=f.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  
  /* Solid timeline showing linear relationship */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1rem;
    width: 1px;
    background-color: rgba(240, 185, 11, 0.15);
    z-index: 0;
  }
`,CB=f.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 0.5rem;
  table-layout: fixed;
  
  th {
    text-align: left;
    padding: 0.75rem 1rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Match column widths with SalesTable */
  th:nth-child(1) { width: 15%; }
  th:nth-child(2) { width: 20%; }
  th:nth-child(3) { width: 15%; }
  th:nth-child(4) { width: 20%; }
  th:nth-child(5) { width: 30%; }
`,v5=f.div`
  margin-bottom: 1.5rem;
  margin-left: 2rem;
  border: 1px solid rgba(240, 185, 11, 0.15);
  border-radius: 8px;
  background-color: rgba(30, 32, 38, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -2rem;
    width: 1.5rem;
    height: 2px;
    background-color: rgba(240, 185, 11, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -2rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(240, 185, 11, 0.8);
    transform: translateY(-50%);
    box-shadow: 0 0 0 4px rgba(30, 32, 38, 0.6);
  }
  
  ${e=>e.isLoafListing&&`
    background-color: rgba(30, 32, 38, 0.1);
    border-color: rgba(240, 185, 11, 0.05);
    
    &::after {
      background-color: rgba(240, 185, 11, 0.4);
    }
  `}
`,y5=f.div`
  margin: 0.3rem 1rem;
  padding: 0.3rem 1rem 0.3rem;
  background-color: rgba(30, 32, 38, 0.2);
  border-radius: 6px;
  border-left: 2px solid rgba(255, 255, 255, 0.15);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -0.3rem;
    left: 1rem;
    width: 1px;
    height: 0.3rem;
    background-color: rgba(255, 255, 255, 0.15);
  }
`,MB=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`,_B=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  gap: 1rem;
`,TB=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,zB=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
  position: relative;
`,St=f.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,kt=f.span`
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  width: 120px;
  flex-shrink: 0;
`,Ct=f.span`
  font-size: 0.9rem;
  color: var(--color-text-primary);
  flex-grow: 1;
`,fl=f.button`
  background-color: rgba(0, 114, 229, 0.1);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`,w5=({event:e})=>{const[t,n]=S.useState(!1),o=()=>{n(!t)},s=()=>{switch(e.type){case"Leased":return a.jsxs(a.Fragment,{children:[a.jsxs(St,{children:[a.jsx(kt,{children:"Lease Date:"}),a.jsx(Ct,{children:e.date})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Lease Term:"}),a.jsx(Ct,{children:e.leaseTerm||"12 months"})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Weekly Rate:"}),a.jsx(Ct,{children:e.weeklyRate||e.price})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Tenant:"}),a.jsx(Ct,{children:e.buyer})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Agent:"}),a.jsx(Ct,{children:e.agent})]}),a.jsx(fl,{onClick:()=>alert("View lease agreement"),children:"View Lease Agreement"})]});case"Extended":return a.jsxs(a.Fragment,{children:[a.jsxs(St,{children:[a.jsx(kt,{children:"Completion Date:"}),a.jsx(Ct,{children:e.date})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Construction Time:"}),a.jsx(Ct,{children:"6 months"})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Cost:"}),a.jsx(Ct,{children:e.price})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Contractor:"}),a.jsx(Ct,{children:e.agent})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Description:"}),a.jsx(Ct,{children:"Extension to the eastern wing of the property, adding 120sqm of living space including a new master suite and expanded kitchen."})]}),a.jsx(fl,{onClick:()=>alert("View design plans"),children:"View Design Plans"})]});case"Rebuilt":case"Renovated":return a.jsxs(a.Fragment,{children:[a.jsxs(St,{children:[a.jsx(kt,{children:"Completion Date:"}),a.jsx(Ct,{children:e.date})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Construction Time:"}),a.jsx(Ct,{children:"14 months"})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Cost:"}),a.jsx(Ct,{children:e.price})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Builder:"}),a.jsx(Ct,{children:e.agent})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Description:"}),a.jsx(Ct,{children:"Complete rebuild of the property, maintaining the heritage facade while modernizing all internal spaces and systems."})]}),a.jsx(fl,{onClick:()=>alert("View renovation details"),children:"View Design Plans"})]});case"DA Approval":return a.jsxs(a.Fragment,{children:[a.jsxs(St,{children:[a.jsx(kt,{children:"Approval Date:"}),a.jsx(Ct,{children:e.date})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Council:"}),a.jsx(Ct,{children:e.agent})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Application Fee:"}),a.jsx(Ct,{children:e.price})]}),a.jsx(fl,{onClick:()=>alert("View approval documents"),children:"View Approval"})]});case"Rezoned":return a.jsxs(a.Fragment,{children:[a.jsxs(St,{children:[a.jsx(kt,{children:"Rezoning Date:"}),a.jsx(Ct,{children:e.date})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"New Zoning:"}),a.jsx(Ct,{children:"R4 High Density Residential"})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Authority:"}),a.jsx(Ct,{children:e.agent})]}),a.jsx(fl,{onClick:()=>alert("View zoning documents"),children:"View Zoning Documents"})]});default:return a.jsxs(a.Fragment,{children:[a.jsxs(St,{children:[a.jsx(kt,{children:"Date:"}),a.jsx(Ct,{children:e.date})]}),a.jsxs(St,{children:[a.jsx(kt,{children:"Details:"}),a.jsx(Ct,{children:e.saleType})]})]})}};return a.jsxs("div",{children:[a.jsxs(MB,{onClick:o,children:[a.jsx(_B,{children:a.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[a.jsx(qu,{type:e.type,children:e.type==="Sale"?"Sold":e.type}),a.jsx("span",{style:{marginLeft:"0.5rem"},children:e.date})]})}),a.jsx(TB,{children:t?a.jsx(QO,{size:20}):a.jsx(tS,{size:20})})]}),t&&a.jsx(zB,{children:s()})]})},j5=f.div`
  height: 4px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  margin-bottom: 0.75rem;
  border-radius: 2px;
`,og=f.div`
  font-weight: 600;
  color: var(--color-accent);
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
`;f(og)`
  color: var(--color-accent, #f0b90b);
`;f.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${e=>e.isPositive?"#0ecb81":"#f6465d"};
  margin-top: 6px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${e=>e.isPositive?"#0ecb81":"#f6465d"};
    margin-right: 6px;
  }
`;const q0=f.tr`
  background-color: ${e=>e.isOwnershipStart?"rgba(240, 185, 11, 0.05)":"transparent"};
  
  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 0.9rem;
  }
  
  &:last-child td {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`,qu=f.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: ${e=>e.type==="Listed"?"600":"500"};
  background-color: ${e=>{switch(e.type){case"Listed":return"var(--color-accent, #f0b90b)";case"Sale":return"rgba(14, 203, 129, 0.15)";case"Leased":return"rgba(79, 117, 235, 0.15)";case"Renovated":case"Extended":case"Rebuilt":return"rgba(255, 152, 0, 0.15)";case"Rezoned":case"DA Approval":return"rgba(33, 150, 243, 0.15)";default:return"rgba(240, 185, 11, 0.15)"}}};
  color: ${e=>{switch(e.type){case"Listed":return"#000";case"Sale":return"#0ecb81";case"Leased":return"#4f75eb";case"Renovated":case"Extended":case"Rebuilt":return"#ff9800";case"Rezoned":case"DA Approval":return"#2196f3";default:return"var(--color-accent)"}}};
`,DB=f.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`,W0=f.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  
  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  th {
    font-weight: 500;
    color: var(--color-text-secondary);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  /* Match column widths with HistoryTableHeader */
  td:nth-child(1), th:nth-child(1) { width: 15%; }
  td:nth-child(2), th:nth-child(2) { width: 20%; }
  td:nth-child(3), th:nth-child(3) { width: 15%; }
  td:nth-child(4), th:nth-child(4) { width: 20%; }
  td:nth-child(5), th:nth-child(5) { width: 30%; }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  tr:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
  
  tr td:first-child {
    width: 100px;
  }
  
  tr td:nth-child(2) {
    width: 130px;
  }
`,PB=f.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`,AB=f.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,EB=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`,OB=f.div``,RB=f.div`
  font-weight: 600;
  font-size: 1.125rem;
`,LB=f.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`,BB=f.div`
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${e=>{switch(e.status){case"active":return"rgba(14, 203, 129, 0.2)";case"rejected":return"rgba(246, 70, 93, 0.2)";case"historical":return"rgba(56, 97, 251, 0.2)";default:return"rgba(255, 255, 255, 0.1)"}}};
  color: ${e=>{switch(e.status){case"active":return"#0ecb81";case"rejected":return"#f6465d";case"historical":return"#3861fb";default:return"var(--color-text-secondary)"}}};
`,$B=f.button`
  background-color: var(--color-accent, #f0b90b);
  color: black;
  border: none;
  border-radius: 4px;
  padding: 0.375rem 0.75rem;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: 0.75rem;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,NB=f.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`,HB=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h2 {
    margin: 0;
  }
`,FB=f.div`
  display: flex;
  gap: 1rem;
`,VB=f.button`
  background-color: var(--color-accent, #f0b90b);
  color: black;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,UB=f.button`
  background-color: transparent;
  color: var(--color-accent, #f0b90b);
  border: 1px solid var(--color-accent, #f0b90b);
  border-radius: 4px;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,IB=f.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`,YB=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
`,qB=f.div`
  background-color: rgba(40, 42, 48, 0.95);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,WB=f.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`,GB=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,XB=f.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`,QB=f.div`
  width: 8px;
  height: 8px;
  background-color: #FFA500;
  border-radius: 50%;
`,ZB=f.div`
  padding: 1rem;
`,KB=f.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
`,JB=f.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
`,e$=f.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`,t$=f.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.75rem;
`,r$=f.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`,n$=f.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`,o$=f.div`
  background-color: rgba(40, 42, 48, 0.95);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
`,i$=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,a$=f.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
`,s$=f.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-primary);
`,l$=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`,pl=f.div`
  background-color: rgba(50, 52, 58, 0.95);
  border-radius: 6px;
  padding: 1rem;
`,ml=f.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
`,tu=f.div`
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
`,c$=f.div`
  background-color: rgba(50, 52, 58, 0.95);
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`,d$=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`,S5=f.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`,u$=f.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${e=>e.color||"#fff"};
`,h$=f.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`,f$=f.div`
  width: 100%;
  height: 40px;
  background: linear-gradient(to right, #2196F3, #FFFFFF, #F44336);
  border-radius: 20px;
  position: relative;
`,k5=f.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${e=>e.type==="fairValue"?"var(--color-accent)":e.type==="lastPrice"?"#000":"#fff"};
  border: 2px solid ${e=>e.type==="lastPrice"?"#fff":"#000"};
  top: 50%;
  left: ${e=>e.position}%;
  transform: translateY(-50%) translateX(-50%);
  z-index: ${e=>e.type==="fairValue"?3:e.type==="lastPrice"?4:2};
  box-shadow: ${e=>e.type==="fairValue"?"0 0 8px rgba(255, 215, 0, 0.6)":e.type==="lastPrice"?"0 0 8px rgba(255, 255, 255, 0.4)":"none"};
`;f.div`
  position: absolute;
  font-size: 0.8rem;
  color: #fff;
  top: -20px;
  transform: translateX(-50%);
  white-space: nowrap;
`;const p$=f.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`,G0=f.div`
  display: flex;
  flex-direction: column;
`;f.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
`;const X0=f.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>e.color||"#fff"};
`,m$=f.div`
  width: 100%;
  height: 300px;
  margin-top: 1.5rem;
  background-color: rgba(50, 52, 58, 0.5);
  border-radius: 6px;
  padding: 1rem;
  position: relative;
`;f.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;f.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;f.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`;f.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  margin-right: 0.5rem;
  background-color: ${e=>e.color};
`;const g$=f.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`,x$=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,b$=f.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-3px);
    background-color: rgba(255, 255, 255, 0.08);
  }
`,v$=f.h3`
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
`,y$=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`,w$=f.div``,j$=f.div`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: rgba(56, 97, 251, 0.1);
  color: var(--color-primary, #3861fb);
  font-size: 0.75rem;
  font-weight: 500;
`,ru=({initialTab:e="overview"})=>{const{id:t,propertySlug:n}=dg(),o=nn(),{priceData:s}=xD(),[c,d]=S.useState(null),[h,m]=S.useState({price:125e3,basePrice:125e3,volatility:.002,change:0,priceChange:0}),[p,x]=S.useState(!1),[v,y]=S.useState(!0),j=o.pathname.startsWith("/property-new/"),w=n?cL(n):t||1,C=n||dL(w),k=()=>{if(o.hash){const U=o.hash.substring(1);if(["overview","trade","offers","market","past-sales","owner-booking"].includes(U))return U}return e},[_,z]=S.useState(k()),[D,L]=S.useState("all"),[A,V]=S.useState([]),[E,F]=S.useState([]),[te,de]=S.useState([]),[le,fe]=S.useState(!0),[me,pe]=S.useState(null),[be,I]=S.useState([]),[H,ee]=S.useState(125e3),[ne,P]=S.useState(125e3),[$,G]=S.useState(0),[R,Y]=S.useState(0),[J,Q]=S.useState(0),[ue,ce]=S.useState("buy"),[ve,Fe]=S.useState("limit"),[je]=S.useState(1052750),[Ye,Qe]=S.useState(""),[ir,Nr]=S.useState(!1),[gr,Ze]=S.useState([]),[rt,zt]=S.useState([]),[Dt,Pt]=S.useState([]);S.useEffect(()=>{h&&h.price&&ee(h.price)},[h]);const ge=U=>{Qe("");const se=U.target.value;if(se===""||se.endsWith(".")||se.endsWith(",")){ee(se);return}const _e=se.replace(/[$,]/g,"").replace(/[^0-9.]/g,""),he=parseFloat(_e)||0;he<=0&&Qe("Price must be greater than 0"),ee(he);const Te=typeof $=="string"?parseFloat($.replace(/,/g,""))||0:$,Se=he*Te;Y(Se)},xe=U=>{Qe("");const se=U.target.value;if(se===""||se.endsWith(".")||se.endsWith(",")){P(se);return}const _e=se.replace(/[^0-9.]/g,""),he=parseFloat(_e)||0;P(he)},Ae=U=>{Qe("");const se=U.target.value;if(se===""||se.endsWith(".")||se.endsWith(",")){G(se);return}const _e=se.replace(/[^0-9.]/g,""),he=parseFloat(_e)||0;G(he);let Te;ve==="market"?Te=h.price:Te=typeof H=="string"?parseFloat(H.replace(/,/g,""))||0:H;const Se=Te*he;Y(Se),ue==="buy"&&Se>je&&Qe("Insufficient funds for this purchase");const ut=Math.min(100,Math.max(0,Se/je*100));Q(ut),Y(Se)},Oe=U=>{Qe("");const se=U.target.value;if(se===""||se.endsWith(".")||se.endsWith(",")){Y(se);return}const _e=se.replace(/[$,]/g,"").replace(/[^0-9.]/g,""),he=parseFloat(_e)||0;Y(he),ue==="buy"&&he>je?Qe("Total exceeds available funds"):he<=0&&Qe("Total must be greater than 0");let Te;ve==="market"?Te=h.price:Te=typeof H=="string"?parseFloat(H.replace(/,/g,""))||0:H;const Se=Te>0?he/Te:0;G(Se);const ut=Math.min(100,Math.max(0,he/je*100));Q(ut)},Ke=U=>{ce(U),Qe("")},nt=U=>{Fe(U.toLowerCase()),Qe("")},Bt=()=>{if(Qe(""),H<=0){Qe("Price must be greater than 0");return}if($<=0){Qe("Token amount must be greater than 0");return}if(ue==="buy"&&R>je){Qe("Insufficient funds for this purchase");return}Nr(!0),setTimeout(()=>{Nr(!1),G(0),Y(0),Q(0),alert(`Successfully ${ue==="buy"?"bought":"sold"} ${$.toFixed(2)} Elara of ${(c==null?void 0:c.name)||"28 Derby Street (Elara)"}`)},1500)},gt=pt.useRef(null),Ne=pt.useRef(null),[qe,wt]=S.useState(!1),[Vt,ar]=S.useState(!1),[tr,xr]=S.useState(!1),[Wt,Zo]=S.useState(!1),[Bi,Rn]=S.useState(!1),oe=U=>{window.location.hash=U==="overview"?"":U,U==="trade"&&xr(!1),U==="offers"&&Zo(!1),U==="news"&&Rn(!1)},ye=pt.useRef(null),Le=pt.useRef(null);S.useEffect(()=>{const U=se=>{Le.current&&!Le.current.contains(se.target)&&wt(!1)};return document.addEventListener("mousedown",U),()=>{document.removeEventListener("mousedown",U)}},[]),S.useEffect(()=>{const U=setInterval(()=>{_!=="trade"&&xr(!0)},3e4),se=setInterval(()=>{_!=="offers"&&Zo(!0)},45e3),_e=setInterval(()=>{_!=="news"&&Rn(!0)},6e4);return setTimeout(()=>{_!=="offers"&&Zo(!0)},5e3),setTimeout(()=>{_!=="news"&&Rn(!0)},8e3),()=>{clearInterval(U),clearInterval(se),clearInterval(_e)}},[_]),S.useEffect(()=>{const U=k();U!==_&&z(U)},[o.hash]),S.useEffect(()=>{v||setTimeout(()=>{_==="trade"&&gt.current?gt.current.scrollIntoView({behavior:"smooth",block:"start"}):_==="offers"&&Ne.current&&Ne.current.scrollIntoView({behavior:"smooth",block:"start"})},300)},[_,v]),S.useEffect(()=>{(async()=>{y(!0);try{const se=Gt(w);d(se),m({...se.token,basePrice:se.token.price,volatility:.002}),V(lr()),de(ho());const _e=rs();console.log("Mock orders:",_e),F(_e),br(se.token.price),Hr(se.token.price),y(!1)}catch(se){console.error("Error fetching property details:",se),y(!1)}})()},[w]);const sr=()=>{m(U=>{const se=(Math.random()-.5)*2,_e=(U.basePrice-U.price)*.01,he=U.volatility*U.price;let Te=se*he+_e;Te=Math.max(Math.min(Te,500),-500);const Se=U.price+Te,ut=(Se/U.basePrice-1)*100,Ce=Te>0?1:Te<0?-1:0;return I(Mt=>{const Me=[...Mt,Se];return Me.length>100&&Me.shift(),Me}),Ce!==0&&(window.priceFlashTimeout&&clearTimeout(window.priceFlashTimeout),x(!0),window.priceFlashTimeout=setTimeout(()=>{x(!1)},1e3)),{...U,price:Se,priceChange:Ce,change:parseFloat(ut.toFixed(2))}})},br=U=>{const se=[],_e=[];for(let he=1;he<=10;he++){const Te=U*(1+he*.001),Se=(Math.random()*10+1).toFixed(3),ut=Te*parseFloat(Se),Ce=100-he*8;se.push({price:Te,amount:Se,total:ut,depth:Ce})}for(let he=1;he<=10;he++){const Te=U*(1-he*.001),Se=(Math.random()*10+1).toFixed(3),ut=Te*parseFloat(Se),Ce=100-he*8;_e.push({price:Te,amount:Se,total:ut,depth:Ce})}Ze(he=>{const Te=he&&he.length?he.filter(()=>Math.random()>.3).slice(0,5):[],Se={};return he.forEach(Ce=>{Se[Ce.price.toFixed(2)]=!0}),[...se,...Te].map(Ce=>{const Mt=Ce.price.toFixed(2);let Me="neutral";if(Se[Mt])Me="neutral";else{const Ut=he.reduce((vr,yn)=>{const wn=Math.abs(yn.price-Ce.price);return wn<vr.diff?{diff:wn,price:yn.price}:vr},{diff:1/0,price:0});Ut.diff<Ce.price*.001&&(Me=Ce.price>Ut.price?"up":"down")}return{...Ce,priceDirection:Me}}).sort((Ce,Mt)=>Mt.price-Ce.price).slice(0,10)}),zt(he=>{const Te=he&&he.length?he.filter(()=>Math.random()>.3).slice(0,5):[],Se={};return he.forEach(Ce=>{Se[Ce.price.toFixed(2)]=!0}),[..._e,...Te].map(Ce=>{const Mt=Ce.price.toFixed(2);let Me="neutral";if(Se[Mt])Me="neutral";else{const Ut=he.reduce((vr,yn)=>{const wn=Math.abs(yn.price-Ce.price);return wn<vr.diff?{diff:wn,price:yn.price}:vr},{diff:1/0,price:0});Ut.diff<Ce.price*.001&&(Me=Ce.price>Ut.price?"up":"down")}return{...Ce,priceDirection:Me}}).sort((Ce,Mt)=>Mt.price-Ce.price).slice(0,10)})},Hr=(U,se=null)=>{if(se){Pt(he=>[se,...he||[]].slice(0,20));return}const _e=[];for(let he=0;he<20;he++){const Te=Math.random()>.5?"buy":"sell",Se=U*.001*Math.random(),ut=Te==="buy"?(U+Se).toFixed(2):(U-Se).toFixed(2),Ce=(Math.random()*5+.1).toFixed(3),Mt=new Date(Date.now()-he*6e4).toLocaleTimeString();_e.push({type:Te,price:ut,amount:Ce,time:Mt})}Pt(_e)},Ln=()=>{h&&F(U=>U.map(se=>{if(se.status==="filled"||se.status==="canceled")return se;let _e=!1,he=h.price;return se.type==="buy"?(se.orderType==="market"||se.orderType==="limit"&&h.price<=se.price||se.orderType==="stop"&&h.price>=se.stopPrice)&&(_e=!0):se.type==="sell"&&(se.orderType==="market"||se.orderType==="limit"&&h.price>=se.price||se.orderType==="stop"&&h.price<=se.stopPrice)&&(_e=!0),_e?(Hr(he,{type:se.type,price:he.toFixed(2),amount:se.amount.toFixed(3),time:new Date().toLocaleTimeString()}),{...se,status:"filled",filledPrice:he,filledAt:new Date().toISOString(),filledPercentage:100}):se}))},Bn=()=>{sr(),br((h==null?void 0:h.price)||125e3),Ln(),Math.random()>.5&&Hr((h==null?void 0:h.price)||125e3)},uo=pt.useRef(null);pt.useRef(null),S.useEffect(()=>{uo.current&&(uo.current.scrollTop=uo.current.scrollHeight)},[gr]),S.useEffect(()=>{if(le&&!me){const U=setInterval(Bn,2e3);pe(U)}else!le&&me&&(clearInterval(me),pe(null));return()=>{me&&clearInterval(me)}},[le,me,h]);const Fr=[{id:1,name:"28 Derby Street (Elara)",location:"Vaucluse, Sydney",imageUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},{id:2,name:"32 Burran Avenue",location:"Mosman, Sydney",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"},{id:3,name:"15 Victoria Street",location:"Bellevue Hill, Sydney",imageUrl:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},{id:4,name:"8 Wolseley Road",location:"Point Piper, Sydney",imageUrl:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"}],Gt=U=>({id:U,name:"28 Derby Street (Elara)",location:"Vaucluse, Sydney",description:"This exceptional residence represents a <b>premier investment opportunity</b> in the most sought after region of Australia's eastern suburbs. Vaucluse has a <b>median house price of $8.3m</b> and has <b>increased more than 125% in under a decade</b>. Situated on an <b>irreplaceable 1,800 sqm parcel</b> with <b>unobstructed views of Sydney Harbour, The Opera House, and The Harbour Bridge</b>, this home stands as a symbol of exclusivity and enduring demand both domestically and internationally, allowing it to <b>outperform the broader market by 50% over the decade</b> and weather global economic downturns. The <b>scarcity of such substantial landholdings</b> in this ultra-exclusive enclave ensures <b>perpetual demand from both domestic and international ultra-high-net-worth buyers</b>, particularly from Asia and North America. This architectural masterpiece features <b>5 bedrooms, 4 bathrooms, and a 3-car garage</b>, complemented by a <b>heated swimming pool and championship tennis court</b>—amenities highly prized by the luxury market segment. <b>Tokenized ownership provides unprecedented liquidity</b> for this asset class, with <b>tokens backed 1:1 by the underlying property value</b>. Token holders receive <b>governance rights, voting privileges on property decisions, priority access for stays, a share of rental yield (currently 4.2% p.a.), and proportional proceeds from any future sale</b>. Vaucluse's <b>strict development controls and limited land supply</b> create a <b>perfect hedge against inflation</b> while delivering both <b>capital growth and income</b>—truly an investment that has historically made the wealthy wealthier.",imageUrl:"https://i2.au.reastatic.net/1232x688-resize,extend,r=33,g=40,b=46/5f6981d6e0c819bf4775b18f9b182ef5290b2271fec86b8ad05b6d9b3ebe6287/image.jpg",bedrooms:4,bathrooms:5,carSpots:4,propertyType:"House",landSize:"1,800 sqm",annualReturn:"8.2",rentalYield:"4.5",recentSales:[{address:"24 Wentworth Road",suburb:"Vaucluse",price:"$12,500,000",saleDate:"June 2025",bedrooms:5,bathrooms:4,landSize:"1,650 sqm",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"},{address:"15 Carrara Road",suburb:"Vaucluse",price:"$10,800,000",saleDate:"May 2025",bedrooms:4,bathrooms:3,landSize:"1,200 sqm",imageUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"},{address:"8 Hopetoun Avenue",suburb:"Bellevue Hill",price:"$11,250,000",saleDate:"April 2025",bedrooms:5,bathrooms:4,landSize:"1,450 sqm",imageUrl:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"}],loafPricingModel:{currentGuideValue:"$18,750,000",pricePerToken:"$125,000",totalTokens:150,historicalData:[{date:"Jan 2024",guideValue:175e5,tokenPrice:115e3},{date:"Feb 2024",guideValue:176e5,tokenPrice:117500},{date:"Mar 2024",guideValue:178e5,tokenPrice:118200},{date:"Apr 2024",guideValue:179e5,tokenPrice:119e3},{date:"May 2024",guideValue:18e6,tokenPrice:120500},{date:"Jun 2024",guideValue:182e5,tokenPrice:121800},{date:"Jul 2024",guideValue:185e5,tokenPrice:123500},{date:"Aug 2024",guideValue:186e5,tokenPrice:124e3},{date:"Sep 2024",guideValue:1865e4,tokenPrice:124200},{date:"Oct 2024",guideValue:187e5,tokenPrice:124500},{date:"Nov 2024",guideValue:1872e4,tokenPrice:124800},{date:"Dec 2024",guideValue:1874e4,tokenPrice:124900},{date:"Jan 2025",guideValue:1875e4,tokenPrice:125e3}]},token:{id:"VAUCLUSE-001",name:"28 Derby Street (Elara)",symbol:"VCL001",price:125e3,priceChangePercent:"+2.15",marketCap:"18,750,000",volume24h:"2,450,000",modelledPriceGuide:"132,500",modelledPriceGuideChange:"5.8"},news:[{id:1,title:"Property value increases by 5.8% following renovation completion",date:"July 15, 2025",category:"property",type:"property"},{id:2,title:"New 5-year lease agreement signed with premium tenant",date:"July 10, 2025",category:"property",type:"property"},{id:3,title:"Vaucluse property market sees 12% growth in Q2 2025",date:"July 5, 2025",category:"market",type:"market"},{id:4,title:"RBA holds interest rates steady at 3.75%",date:"July 2, 2025",category:"economy",type:"market"}]}),lr=()=>[{id:"loaf-listing",type:"Listed",saleType:"Loaf Auction",date:"January 15, 2025",price:"$14,000,000",buyer:"-",seller:"Current Owner",agent:"Loaf Platform",ownershipPeriod:"current",sortOrder:1},{id:"da-approval",type:"DA Approval",saleType:"Planning Change",date:"February 5, 2025",price:"$500,000",buyer:"-",seller:"Current Owner",agent:"City Planning Consultants",ownershipPeriod:"current",sortOrder:2,description:"Extension from 4 to 6 bathrooms, installation of elevator and rooftop terrace"},{id:"leased-current",type:"Leased",saleType:"Rental",date:"February 10, 2025",price:"$4,500/week",buyer:"Executive Tenants Ltd",seller:"Current Owner",agent:"Sydney Luxury Rentals",ownershipPeriod:"current",sortOrder:3,leaseTerm:"12 months",weeklyRate:"$4,500"},{id:"leased-2",type:"Leased",saleType:"Rental",date:"March 5, 2022",price:"$4,000/week",buyer:"Premium Tenants LLC",seller:"Current Owner",agent:"Sydney Prestige Real Estate",ownershipPeriod:"period-1",sortOrder:10,leaseTerm:"24 months",weeklyRate:"$4,000"},{id:"leased-1",type:"Leased",saleType:"Rental",date:"November 15, 2020",price:"$4,000/week",buyer:"Executive Rentals LLC",seller:"Current Owner",agent:"Sydney Prestige Real Estate",ownershipPeriod:"period-1",sortOrder:15,leaseTerm:"24 months",weeklyRate:"$4,000"},{id:"ownership-1",type:"Sale",saleType:"Private Sale",date:"October 20, 2020",price:"$8,000,000",buyer:"Current Owner",seller:"Previous Owner",agent:"Ray White Double Bay",ownershipPeriod:"period-1",isOwnershipStart:!0,isOwnershipEnd:!1,sortOrder:100,percentGain:166.7},{id:"rebuilt-1",type:"Rebuilt",saleType:"Major Renovation",date:"December 10, 2010",price:"$1,200,000",buyer:"-",seller:"Previous Owner",agent:"Premium Builders",ownershipPeriod:"period-2",sortOrder:8},{id:"ownership-2",type:"Sale",saleType:"Auction",date:"March 5, 2010",price:"$3,000,000",buyer:"Previous Owner",seller:"Original Developer",agent:"LJ Hooker Double Bay",ownershipPeriod:"period-2",isOwnershipStart:!0,isOwnershipEnd:!0,sortOrder:100}],ho=()=>[{id:1,price:"$13,200,000",date:"July 10, 2025",expiry:"July 24, 2025",buyer:"International Investor (Singapore)",conditions:"Subject to finance approval",status:"active"},{id:2,price:"$12,950,000",date:"July 5, 2025",expiry:"July 19, 2025",buyer:"Local Business Executive",conditions:"60-day settlement",status:"active"},{id:3,price:"$12,750,000",date:"June 15, 2025",expiry:"June 29, 2025",buyer:"Property Fund Manager",conditions:"45-day settlement, subject to due diligence",status:"rejected"},{id:4,price:"$12,600,000",date:"May 28, 2025",expiry:"June 11, 2025",buyer:"Tech Executive",conditions:"30-day settlement, all fixtures included",status:"rejected"},{id:5,price:"$12,450,000",date:"May 12, 2025",expiry:"May 26, 2025",buyer:"Local Developer",conditions:"Subject to council approval for minor renovations",status:"rejected"},{id:6,price:"$12,300,000",date:"April 20, 2025",expiry:"May 4, 2025",buyer:"Investment Consortium",conditions:"90-day settlement, subject to financing",status:"rejected"},{id:7,price:"$12,100,000",date:"March 15, 2025",expiry:"March 29, 2025",buyer:"Family Trust",conditions:"45-day settlement, conditional on inspection",status:"rejected"},{id:8,price:"$11,900,000",date:"February 8, 2025",expiry:"February 22, 2025",buyer:"Overseas Family Office",conditions:"Cash offer, 30-day settlement",status:"rejected"},{id:9,price:"$11,750,000",date:"January 12, 2025",expiry:"January 26, 2025",buyer:"Property Investment Group",conditions:"60-day settlement, subject to board approval",status:"rejected"},{id:10,price:"$11,500,000",date:"December 5, 2024",expiry:"December 19, 2024",buyer:"High Net Worth Individual",conditions:"45-day settlement, all fixtures included",status:"rejected"},{id:11,price:"$11,200,000",date:"November 10, 2024",expiry:"November 24, 2024",buyer:"Corporate Relocation Service",conditions:"30-day settlement, subject to executive approval",status:"rejected"},{id:12,price:"$10,800,000",date:"October 15, 2024",expiry:"October 29, 2024",buyer:"Real Estate Investment Trust",conditions:"60-day settlement, subject to portfolio review",status:"rejected"}],rs=()=>{const U=[{id:1,type:"buy",price:125e3,amount:2.5,total:312500,date:new Date,property:"20A Vaucluse Rd",filled:94},{id:2,type:"sell",price:126500,amount:1.8,total:227700,date:new Date(Date.now()-12e4),property:"42 Bellevue Hill Rd",filled:17},{id:3,type:"buy",price:124800,amount:3.2,total:399360,date:new Date(Date.now()-24e4),property:"15 Point Piper Ave",filled:56},{id:4,type:"sell",price:127e3,amount:1.5,total:190500,date:new Date(Date.now()-36e4),property:"8 Rose Bay Pl",filled:10}];return console.log("Generated mock orders with properties:",U),U},Hh=()=>{window.location.hash="trade"},Fh=()=>{window.location.hash="offers"};if(j){const U=o.hash||"",se=`/properties/${C}${U}`;return a.jsx(Navigate,{to:se,replace:!0})}return v||!c?a.jsx(p5,{children:a.jsx("div",{style:{textAlign:"center",padding:"4rem 0"},children:a.jsx("h2",{children:"Loading property details..."})})}):a.jsxs(p5,{children:[a.jsxs(uL,{children:[a.jsxs(hL,{ref:Le,onClick:()=>wt(!qe),children:[a.jsxs(fL,{children:[c.name,a.jsx("svg",{className:"dropdown-icon",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",style:{transform:qe?"rotate(180deg)":"none"},children:a.jsx("path",{d:"M7 10l5 5 5-5H7z"})})]}),a.jsx(pL,{isOpen:qe,children:Fr.map(U=>a.jsxs(mL,{onClick:se=>{se.stopPropagation(),wt(!1)},children:[a.jsx(gL,{children:U.name}),a.jsx(xL,{children:U.location})]},U.id))})]}),a.jsxs(m5,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"})}),"Compare"]})]}),a.jsxs(bL,{children:[a.jsx(vL,{src:c.imageUrl,alt:c.name}),a.jsxs(yL,{children:[a.jsxs(wL,{children:[a.jsx(jL,{children:c.name}),a.jsxs(SL,{children:[c.location,a.jsxs(kL,{children:["$",h.price.toLocaleString(),a.jsxs(CL,{isPositive:h.price/h.basePrice-1>=0,children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:h.price/h.basePrice-1>=0?"M7 14l5-5 5 5H7z":"M7 10l5 5 5-5H7z"})}),Math.abs((h.price/h.basePrice-1)*100).toFixed(2),"%"]})]})]}),a.jsxs(ML,{children:[a.jsxs(Qd,{children:[a.jsx(Jt.IconWrapper,{children:a.jsx(Jt.BedroomIcon,{})}),c.bedrooms," Beds"]}),a.jsxs(Qd,{children:[a.jsx(Jt.IconWrapper,{children:a.jsx(Jt.BathroomIcon,{})}),c.bathrooms," Baths"]}),a.jsxs(Qd,{children:[a.jsx(Jt.IconWrapper,{children:a.jsx(Jt.CarIcon,{})}),c.carSpots," Cars"]}),a.jsx(Qd,{children:c.propertyType})]}),a.jsx(_L,{children:"Your Ownership: 2.2 Elara (2.2%)"})]}),a.jsxs(TL,{children:[a.jsx(zL,{onClick:Hh,children:"Trade"}),a.jsx(DL,{onClick:Fh,children:"Make Offer"})]})]})]}),a.jsxs(PL,{ref:gt,children:[a.jsxs("div",{style:{display:"flex"},children:[a.jsx(ya,{active:_==="overview",onClick:()=>oe("overview"),children:"Overview"}),a.jsxs(ya,{active:_==="trade",onClick:()=>oe("trade"),children:["Trade",tr&&a.jsx(g5,{color:"#f6465d"})]}),a.jsx(ya,{active:_==="market",onClick:()=>oe("market"),children:"Market Data"}),a.jsx(ya,{active:_==="past-sales",onClick:()=>oe("past-sales"),children:"Property History"}),a.jsxs(ya,{active:_==="offers",onClick:()=>oe("offers"),children:["Offers",Wt&&a.jsx(g5,{color:"#f6465d"})]}),a.jsx(ya,{active:_==="owner-booking",onClick:()=>oe("owner-booking"),children:"Reserve"})]}),a.jsxs(AL,{children:[a.jsxs(Y0,{children:[a.jsx(eR,{size:16})," Photos"]}),a.jsxs(Y0,{children:[a.jsx(nR,{size:16})," Video"]}),a.jsxs(Y0,{children:[a.jsx(KO,{size:16})," Immersive Tour"]})]})]}),a.jsx(wa,{active:_==="overview",children:a.jsxs(EL,{children:[a.jsx(OL,{children:a.jsxs(LL,{children:[a.jsx("h2",{children:"About this property"}),a.jsx("p",{dangerouslySetInnerHTML:{__html:c.description}})]})}),a.jsxs(RL,{children:[a.jsx("h2",{children:"Financial Overview"}),a.jsxs(BL,{children:[a.jsxs(Zd,{children:[a.jsxs(Kd,{children:["$",h.price.toLocaleString()]}),a.jsx(Jd,{children:"Current Elara Price"})]}),a.jsxs(Zd,{children:[a.jsxs(Kd,{children:["$",(100*h.price/1e6).toFixed(2),"M"]}),a.jsx(Jd,{children:"Property Value"})]}),a.jsxs(Zd,{children:[a.jsx(Kd,{children:"$4500 Week"}),a.jsx(Jd,{children:"Net Operating Income"})]}),a.jsx(Zd,{children:a.jsxs("div",{style:{position:"relative"},children:[a.jsx("div",{style:{position:"absolute",top:"0",right:"0",fontSize:"0.75rem",color:"#4CAF50"},children:"Certainty: High"}),a.jsx(Kd,{children:"2.5%"}),a.jsx(Jd,{children:"Dividend Yield"})]})})]})]}),a.jsxs($L,{children:[a.jsxs(NL,{children:[a.jsx(aR,{})," Ownership Rights"]}),a.jsxs(HL,{children:[a.jsxs(ja,{children:[a.jsx(Sa,{children:a.jsx(JO,{})}),a.jsxs(ka,{children:[a.jsx(Ca,{children:"Payout upon sale of property"}),a.jsx(Ma,{children:"Receive your share of proceeds when the property is sold, directly proportional to your ownership stake."})]})]}),a.jsxs(ja,{children:[a.jsx(Sa,{children:a.jsx(lR,{})}),a.jsxs(ka,{children:[a.jsx(Ca,{children:"Weekly Rental Distributions"}),a.jsx(Ma,{children:"Earn passive income through regular rental distributions paid directly to token holders."})]})]}),a.jsxs(ja,{children:[a.jsx(Sa,{children:a.jsx(tR,{})}),a.jsxs(ka,{children:[a.jsx(Ca,{children:"Active Market Trading"}),a.jsx(Ma,{children:"Capture gains through active market trading without the friction of traditional real estate transactions. Developed by quants and powered by blockchain with unprecedented liquidity enabled through platform reserves."})]})]}),a.jsxs(ja,{children:[a.jsx(Sa,{children:a.jsx(sR,{})}),a.jsxs(ka,{children:[a.jsx(Ca,{children:"Exclusive Reservation Rights"}),a.jsx(Ma,{children:"Enjoy priority access to property reservations for personal stays at owner's rates."})]})]}),a.jsxs(ja,{children:[a.jsx(Sa,{children:a.jsx(cR,{})}),a.jsxs(ka,{children:[a.jsx(Ca,{children:"Governance Rights"}),a.jsx(Ma,{children:"Vote on major property decisions including renovations, management changes, and potential sale offers."})]})]}),a.jsxs(ja,{children:[a.jsx(Sa,{children:a.jsx(rS,{})}),a.jsxs(ka,{children:[a.jsx(Ca,{children:"Spend Your Equity"}),a.jsx(Ma,{children:"Spend your equity without having to withdraw or sell, directly on the platform or via Loaf Card powered by Visa."})]})]})]})]})]})}),a.jsx(wa,{active:_==="trade",ref:ye,className:_==="trade"?"trade-console":"",children:a.jsxs(GL,{children:[a.jsxs("div",{children:[a.jsxs(FL,{children:[a.jsx(VL,{onClick:()=>ar(!Vt),children:a.jsxs(UL,{children:[c.name,a.jsx("svg",{className:"dropdown-icon",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",style:{transform:Vt?"rotate(180deg)":"none"},children:a.jsx("path",{d:"M7 10l5 5 5-5H7z"})})]})}),a.jsxs(m5,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"})}),"Compare"]}),Vt&&a.jsx(IL,{children:mockProperties.map(U=>a.jsxs(YL,{onClick:()=>{d(U),ar(!1)},selected:U.id===c.id,children:[a.jsx(qL,{children:U.name}),a.jsx(WL,{children:U.location})]},U.id))})]}),a.jsxs(XL,{children:[a.jsxs("div",{className:"chart-header",children:[a.jsxs("div",{className:"chart-title-container",children:[a.jsx("h3",{children:"Price Chart"}),a.jsxs("div",{className:"price-display",children:[a.jsxs("div",{className:"price-main",children:[a.jsxs("span",{className:`price-value-container ${p?(h==null?void 0:h.priceChange)>0?"flash-increase":"flash-decrease":""}`,children:[a.jsxs("span",{className:"price-value",children:["$",h!=null&&h.price?h.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}).slice(0,-1):"0.0"]}),a.jsx("span",{className:`last-digit ${!p&&((h==null?void 0:h.priceChange)>0?"last-digit-increase":(h==null?void 0:h.priceChange)<0?"last-digit-decrease":"")}`,children:h!=null&&h.price?h.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}).slice(-1):"0"})]}),a.jsx("span",{className:"price-currency",children:"AUD"})]}),a.jsxs("div",{className:"price-changes",children:[a.jsxs("span",{className:`absolute-change ${(h==null?void 0:h.change)<0?"negative":"positive"}`,children:[(h==null?void 0:h.change)>=0?"+":"-","$",Math.abs((h==null?void 0:h.price)-(h==null?void 0:h.basePrice)).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsxs("span",{className:`price-change ${(h==null?void 0:h.change)<0?"negative":"positive"}`,children:[(h==null?void 0:h.change)>0?"+":"",h==null?void 0:h.change,"%"]})]})]})]}),a.jsxs("div",{className:"chart-controls",children:[a.jsx("button",{className:"chart-btn active",children:"1D"}),a.jsx("button",{className:"chart-btn",children:"1W"}),a.jsx("button",{className:"chart-btn",children:"1M"}),a.jsx("button",{className:"chart-btn",children:"3M"}),a.jsx("button",{className:"chart-btn",children:"1Y"}),a.jsx("button",{className:"chart-btn",children:"All"})]})]}),a.jsx("div",{className:"chart-container",children:a.jsxs("div",{className:"chart-grid",children:[[...Array(5)].map((U,se)=>a.jsx("div",{className:"chart-grid-line",style:{bottom:`${se*25}%`}},se)),[...Array(6)].map((U,se)=>a.jsx("div",{className:"chart-grid-line vertical",style:{left:`${se*20}%`}},se)),a.jsx("div",{className:"chart-line"})]})})]}),a.jsxs(QL,{children:[a.jsxs(ZL,{children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h3",{children:"Order Book"}),a.jsxs("div",{className:"section-controls",children:[a.jsx("span",{className:"active",children:"0.01"}),a.jsx("span",{children:"0.1"}),a.jsx("span",{children:"1"})]})]}),a.jsxs("div",{className:"order-book-container",children:[a.jsxs("div",{className:"order-book-header",children:[a.jsx("div",{children:"Price (USD)"}),a.jsx("div",{children:"Amount"}),a.jsx("div",{children:"Total"})]}),a.jsx("div",{className:"order-book-sells",ref:uo,children:gr.map((U,se)=>a.jsxs("div",{className:"order-row sell",children:[a.jsxs("div",{className:`price ${U.priceDirection||"neutral"} sell`,children:["$",U.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsx("div",{className:"amount",children:U.amount}),a.jsxs("div",{className:"total",children:["$",U.total.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsx("div",{className:"depth-indicator",style:{width:`${U.depth}%`}})]},se))}),a.jsxs("div",{className:"order-book-current-price",children:[a.jsxs("div",{className:`current-price ${h.priceChange>0?"increasing":h.priceChange<0?"decreasing":""}`,children:["$",h.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),a.jsxs("div",{className:`price-change ${h.change<0?"negative":""}`,children:[h.change>0?"+":"",h.change,"%"]})]}),a.jsx("div",{}),a.jsx("div",{})]}),a.jsx("div",{className:"order-book-buys",children:rt.map((U,se)=>a.jsxs("div",{className:"order-row buy",children:[a.jsxs("div",{className:`price ${U.priceDirection||"neutral"} buy`,children:["$",U.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsx("div",{className:"amount",children:U.amount}),a.jsxs("div",{className:"total",children:["$",U.total.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsx("div",{className:"depth-indicator",style:{width:`${U.depth}%`}})]},se))})]})]}),a.jsxs(KL,{children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h3",{children:"Market Trades"}),a.jsxs("div",{className:"section-controls",children:[a.jsx("span",{className:"active",children:"All"}),a.jsx("span",{children:"Buy"}),a.jsx("span",{children:"Sell"})]})]}),a.jsxs("div",{className:"market-trades-container",children:[a.jsxs("div",{className:"market-trades-header",children:[a.jsx("div",{children:"Price (USD)"}),a.jsx("div",{children:"Amount"}),a.jsx("div",{children:"Time"})]}),a.jsx("div",{className:"market-trades-list",children:Dt.map((U,se)=>a.jsxs("div",{className:`trade-row ${U.type}`,children:[a.jsxs("div",{className:"price",children:["$",U.price.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsx("div",{className:"amount",children:U.amount}),a.jsx("div",{className:"time",children:U.time})]},se))})]})]})]})]}),a.jsxs(jB,{children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h3",{children:"Place Order"}),a.jsxs("div",{className:"section-controls",children:[a.jsx("span",{className:ve==="limit"?"active":"",onClick:()=>nt("limit"),children:"Limit"}),a.jsx("span",{className:ve==="market"?"active":"",onClick:()=>nt("market"),children:"Market"}),a.jsx("span",{className:ve==="stop"?"active":"",onClick:()=>nt("stop"),children:"Stop"})]})]}),a.jsxs("div",{className:"trade-tabs",children:[a.jsx("button",{className:`trade-tab ${ue==="buy"?"active":""}`,onClick:()=>Ke("buy"),children:"Buy"}),a.jsx("button",{className:`trade-tab ${ue==="sell"?"active":""}`,onClick:()=>Ke("sell"),children:"Sell"})]}),a.jsxs("div",{className:"trade-form",children:[ve==="stop"?a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("div",{className:"form-group",style:{flex:1},children:[a.jsx("label",{children:"Stop Price"}),a.jsxs("div",{className:"input-group",children:[a.jsx("input",{type:"text",value:typeof ne=="string"?ne:ne.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),onChange:xe}),a.jsx("span",{className:"input-addon",children:"AUD"})]})]}),a.jsxs("div",{className:"form-group",style:{flex:1},children:[a.jsx("label",{children:"Price"}),a.jsxs("div",{className:"input-group",children:[a.jsx("input",{type:"text",value:typeof H=="string"?H:H.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),onChange:ge}),a.jsx("span",{className:"input-addon",children:"AUD"})]})]})]}):a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Price"}),a.jsxs("div",{className:"input-group",children:[a.jsx("input",{type:"text",value:ve==="market"?"Market price":typeof H=="string"?H:H.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),onChange:ge,disabled:ve==="market",style:ve==="market"?{color:"rgba(255, 255, 255, 0.5)"}:{}}),a.jsx("span",{className:"input-addon",children:"AUD"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Amount"}),a.jsxs("div",{className:"input-group",children:[a.jsx("input",{type:"text",value:typeof $=="string"?$:$.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}),onChange:Ae,placeholder:"0.000"}),a.jsx("span",{className:"input-addon",children:"Elara"})]})]}),a.jsxs("div",{className:"trade-slider",style:{marginBottom:"20px"},children:[a.jsxs("div",{className:"slider-labels",style:{display:"flex",justifyContent:"space-between",marginBottom:"5px"},children:[a.jsx("span",{children:"0%"}),a.jsx("span",{children:"25%"}),a.jsx("span",{children:"50%"}),a.jsx("span",{children:"75%"}),a.jsx("span",{children:"100%"})]}),a.jsxs("div",{style:{position:"relative",padding:"10px 0",height:"30px",cursor:"pointer"},onMouseDown:U=>{const _e=U.currentTarget.getBoundingClientRect(),he=U.clientX-_e.left,Te=Math.min(100,Math.max(0,Math.round(he/_e.width*100)));Q(Te);const Se=je*Te/100,ut=H>0?Se/H:0;G(ut),Y(Se);const Ce=Me=>{Me.preventDefault();const Ut=Me.clientX-_e.left,vr=Math.min(100,Math.max(0,Math.round(Ut/_e.width*100)));Q(vr);const yn=je*vr/100,wn=H>0?yn/H:0;G(wn),Y(yn)},Mt=()=>{document.removeEventListener("mousemove",Ce),document.removeEventListener("mouseup",Mt)};document.addEventListener("mousemove",Ce),document.addEventListener("mouseup",Mt)},children:[a.jsx("div",{style:{position:"absolute",top:"50%",left:0,right:0,height:"6px",transform:"translateY(-50%)",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"3px"}}),a.jsx("div",{style:{position:"absolute",top:"50%",left:0,width:`${J}%`,height:"6px",transform:"translateY(-50%)",backgroundColor:"var(--color-accent, #f0b90b)",borderRadius:"3px"}}),a.jsx("div",{style:{position:"absolute",top:"50%",left:`${J}%`,width:"20px",height:"20px",backgroundColor:"var(--color-accent, #f0b90b)",borderRadius:"50%",transform:"translate(-50%, -50%)",boxShadow:"0 2px 4px rgba(0,0,0,0.4)",transition:"transform 0.05s ease"}})]}),a.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.75rem"},children:[25,50,75,100].map(U=>a.jsxs("button",{onClick:()=>{const se=U;Q(se);const _e=je*se/100,he=H>0?_e/H:0;G(he),Y(_e)},style:{width:"60px",padding:"0.5rem 0",fontSize:"0.75rem",backgroundColor:J===U?"var(--color-accent)":"rgba(30, 32, 38, 0.5)",color:J===U?"var(--color-background)":"var(--color-text-secondary)",border:"none",borderRadius:"4px",cursor:"pointer",textAlign:"center"},children:[U,"%"]},U))})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",padding:"0 0.5rem"},children:[a.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--color-text-secondary)"},children:["Available Funds: $",je.toLocaleString()]}),a.jsx("button",{style:{background:"none",border:"none",color:"var(--color-accent, #f0b90b)",fontSize:"0.9rem",cursor:"pointer",padding:"0"},children:"Add Funds"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Total"}),a.jsxs("div",{className:"input-group",children:[a.jsx("input",{type:"text",value:typeof R=="string"?R:R.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),onChange:Oe,placeholder:"0.00"}),a.jsx("span",{className:"input-addon",children:"AUD"})]})]}),a.jsxs("div",{className:"trade-summary",children:[a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Property Valuation"}),a.jsxs("span",{children:["$",(H*100).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Ownership"}),a.jsxs("span",{children:[(typeof $=="string"?parseFloat($.replace(/,/g,""))||0:$).toFixed(3),"%"]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Est. Fee"}),a.jsxs("span",{children:[(typeof $=="string"?parseFloat($.replace(/,/g,""))*.001:$*.001).toLocaleString(void 0,{minimumFractionDigits:6,maximumFractionDigits:6})," Elara"]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Stamp Duty"}),a.jsx("span",{children:"-"})]})]}),Ye&&a.jsx("div",{style:{color:"var(--color-error, #ff4d4f)",fontSize:"0.85rem",margin:"0.5rem 0",textAlign:"center"},children:Ye}),a.jsx("button",{className:`trade-button ${ue==="buy"?"buy":"sell"}`,disabled:$<=0||R<=0||!!Ye||ir,onClick:Bt,children:ir?"Processing...":`${ue==="buy"?"Buy":"Sell"} Elara`})]})]}),a.jsxs(fB,{children:[a.jsxs(pB,{children:[a.jsx(mB,{children:a.jsx("h3",{children:"Property News & Updates"})}),a.jsx(gB,{children:c.news&&c.news.slice(0,4).map(U=>a.jsxs(xB,{children:[a.jsx(bB,{children:U.title}),a.jsxs(vB,{children:[a.jsx(yB,{children:U.date}),a.jsx(wB,{type:U.type,children:U.type==="property"?"Property Update":"Market News"})]})]},U.id))})]}),a.jsxs(JL,{children:[a.jsx("div",{className:"section-header",children:a.jsx("h3",{children:"Your Orders"})}),a.jsxs(tB,{children:[a.jsx(Ro,{children:"Asset"}),a.jsx(Ro,{children:"Type"}),a.jsx(Ro,{children:"Date"}),a.jsx(Ro,{children:"Price"}),a.jsx(Ro,{children:"Amount"}),a.jsx(Ro,{children:"Total"}),a.jsx(Ro,{children:"Filled"}),a.jsx(Ro,{align:"center",children:"Actions"})]}),a.jsxs(eB,{children:[console.log("Rendering orders:",E),E&&E.length>0?E.map(U=>a.jsxs(x5,{children:[a.jsx(sB,{children:U.id===1?"20A Vaucluse Rd":U.id===2?"42 Bellevue Hill Rd":U.id===3?"15 Point Piper Ave":U.id===4?"8 Rose Bay Pl":"Unknown Property"}),a.jsx(rB,{type:U.type,children:U.type.toUpperCase()}),a.jsx(aB,{children:new Date(U.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})}),a.jsxs(nB,{children:["$",U.price.toLocaleString(),a.jsx(b5,{onClick:()=>console.log(`Edit price for order ${U.id}`),children:a.jsx(o5,{size:16})})]}),a.jsxs(oB,{children:[U.amount,a.jsx(b5,{onClick:()=>console.log(`Edit amount for order ${U.id}`),children:a.jsx(o5,{size:16})})]}),a.jsxs(iB,{children:["$",U.total.toLocaleString()]}),a.jsxs(lB,{children:[a.jsxs(cB,{children:[U.filled||Math.floor(Math.random()*100),"%"]}),a.jsx(dB,{children:a.jsx(uB,{percentage:U.filled||Math.floor(Math.random()*100)})})]}),a.jsx("div",{style:{textAlign:"center"},children:a.jsx(hB,{onClick:()=>console.log(`Cancelling order ${U.id}`),children:"Cancel"})})]},U.id)):a.jsx(x5,{children:a.jsx("div",{style:{textAlign:"center",width:"100%",padding:"1rem 0"},children:"No active orders found"})})]})]})]})]})}),a.jsxs(wa,{active:_==="market",children:[a.jsx("div",{style:{marginBottom:"2rem"},children:a.jsx("h2",{children:"Market Data"})}),a.jsxs(n$,{children:[a.jsx("h2",{children:"Loaf Pricing Model"}),a.jsxs(o$,{children:[a.jsxs(i$,{children:[a.jsx(a$,{children:"28 Derby Street (Elara)"}),a.jsxs(s$,{children:["Valuation as of ",a.jsx("span",{style:{color:"var(--color-accent)"},children:new Date().toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric"})})]})]}),a.jsxs(l$,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[a.jsxs(pl,{children:[a.jsx(ml,{children:"Last Price"}),a.jsxs(tu,{children:["$",h.price.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),a.jsxs(pl,{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[a.jsx(ml,{children:"Fair Value"}),a.jsx("span",{style:{fontSize:"0.75rem",color:"#4CAF50",fontWeight:"bold"},children:"Confidence: High"})]}),a.jsxs(tu,{style:{color:"var(--color-accent)",fontWeight:"bold"},children:["$129,650.60 ",a.jsxs("span",{style:{fontSize:"0.85em",fontWeight:"normal",opacity:.8},children:["($",(129650.6*100).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),")"]})]})]})]}),a.jsxs(pl,{children:[a.jsx(ml,{children:"Valuation"}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"linear-gradient(90deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.1) 100%)",borderRadius:"8px",padding:"10px 16px",border:"1px solid rgba(76, 175, 80, 0.2)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.05)",width:"100%"},children:[a.jsx("span",{style:{color:"#4CAF50",fontWeight:"600",fontSize:"16px",letterSpacing:"0.3px"},children:"Undervalued"}),a.jsx("div",{style:{background:"linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",color:"white",padding:"5px 12px",borderRadius:"20px",fontSize:"14px",fontWeight:"600",boxShadow:"0 2px 4px rgba(76, 175, 80, 0.25)"},children:"-3.2%"})]})]}),a.jsxs(pl,{children:[a.jsx(ml,{children:"Area Demand"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[a.jsx(tu,{children:"Hot"}),a.jsxs("div",{style:{height:"60px",width:"100%",position:"relative"},children:[a.jsxs("svg",{width:"100%",height:"60",viewBox:"0 0 180 60",preserveAspectRatio:"none",children:[a.jsx("rect",{x:"0",y:"0",width:"180",height:"20",fill:"rgba(244, 67, 54, 0.2)"}),a.jsx("rect",{x:"0",y:"20",width:"180",height:"20",fill:"rgba(255, 152, 0, 0.15)"}),a.jsx("rect",{x:"0",y:"40",width:"180",height:"20",fill:"rgba(158, 158, 158, 0.15)"}),a.jsx("line",{x1:"0",y1:"20",x2:"180",y2:"20",stroke:"rgba(255,255,255,0.1)",strokeWidth:"1"}),a.jsx("line",{x1:"0",y1:"40",x2:"180",y2:"40",stroke:"rgba(255,255,255,0.1)",strokeWidth:"1"}),a.jsx("line",{x1:"45",y1:"0",x2:"45",y2:"60",stroke:"rgba(255,255,255,0.05)",strokeWidth:"1"}),a.jsx("line",{x1:"90",y1:"0",x2:"90",y2:"60",stroke:"rgba(255,255,255,0.05)",strokeWidth:"1"}),a.jsx("line",{x1:"135",y1:"0",x2:"135",y2:"60",stroke:"rgba(255,255,255,0.05)",strokeWidth:"1"}),a.jsx("path",{d:"M0,35 C10,30 20,25 30,20 C40,15 50,25 60,15 C70,30 80,10 90,25 C100,15 110,5 120,15 C130,10 140,20 150,5 C160,10 170,5 180,5",fill:"none",stroke:"#F44336",strokeWidth:"2"})]}),a.jsx("div",{style:{position:"absolute",top:"3px",right:"5px",fontSize:"9px",color:"rgba(255,255,255,0.7)"},children:"Hot"}),a.jsx("div",{style:{position:"absolute",top:"23px",right:"5px",fontSize:"9px",color:"rgba(255,255,255,0.7)"},children:"Warm"}),a.jsx("div",{style:{position:"absolute",top:"43px",right:"5px",fontSize:"9px",color:"rgba(255,255,255,0.7)"},children:"Cold"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",left:"0",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2020"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",left:"45px",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2021"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",left:"90px",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2022"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",left:"135px",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2023"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",right:"0",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2025"})]})]})]}),a.jsxs(pl,{children:[a.jsx(ml,{children:"Property Moat"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[a.jsx(tu,{children:"Wide"}),a.jsxs("div",{style:{height:"60px",width:"100%",position:"relative"},children:[a.jsxs("svg",{width:"100%",height:"60",viewBox:"0 0 180 60",preserveAspectRatio:"none",children:[a.jsx("rect",{x:"0",y:"0",width:"180",height:"20",fill:"rgba(0, 137, 123, 0.2)"}),a.jsx("rect",{x:"0",y:"20",width:"180",height:"20",fill:"rgba(102, 187, 106, 0.15)"}),a.jsx("rect",{x:"0",y:"40",width:"180",height:"20",fill:"rgba(200, 230, 201, 0.15)"}),a.jsx("line",{x1:"0",y1:"20",x2:"180",y2:"20",stroke:"rgba(255,255,255,0.1)",strokeWidth:"1"}),a.jsx("line",{x1:"0",y1:"40",x2:"180",y2:"40",stroke:"rgba(255,255,255,0.1)",strokeWidth:"1"}),a.jsx("line",{x1:"45",y1:"0",x2:"45",y2:"60",stroke:"rgba(255,255,255,0.05)",strokeWidth:"1"}),a.jsx("line",{x1:"90",y1:"0",x2:"90",y2:"60",stroke:"rgba(255,255,255,0.05)",strokeWidth:"1"}),a.jsx("line",{x1:"135",y1:"0",x2:"135",y2:"60",stroke:"rgba(255,255,255,0.05)",strokeWidth:"1"}),a.jsx("path",{d:"M0,15 C10,12 20,8 30,10 C40,5 50,12 60,8 C70,15 80,10 90,5 C100,12 110,8 120,15 C130,10 140,5 150,12 C160,8 170,10 180,5",fill:"none",stroke:"#00897B",strokeWidth:"2"})]}),a.jsx("div",{style:{position:"absolute",top:"3px",right:"5px",fontSize:"9px",color:"rgba(255,255,255,0.7)"},children:"Wide Moat"}),a.jsx("div",{style:{position:"absolute",top:"23px",right:"5px",fontSize:"9px",color:"rgba(255,255,255,0.7)"},children:"Narrow Moat"}),a.jsx("div",{style:{position:"absolute",top:"43px",right:"5px",fontSize:"9px",color:"rgba(255,255,255,0.7)"},children:"No Moat"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",left:"0",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2020"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",left:"45px",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2021"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",left:"90px",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2022"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",left:"135px",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2023"}),a.jsx("div",{style:{position:"absolute",bottom:"-15px",right:"0",fontSize:"9px",color:"rgba(255,255,255,0.5)"},children:"2025"})]})]})]})]}),a.jsxs(c$,{children:[a.jsxs(d$,{children:[a.jsx(S5,{style:{color:"#4CAF50"},children:"Undervalued"}),a.jsx(S5,{style:{color:"var(--color-accent)",position:"absolute",left:"50%",transform:"translateX(-50%)"},children:"Fair Value"}),a.jsx(u$,{color:"#F44336",children:"Overvalued"})]}),a.jsxs(h$,{children:[a.jsx(f$,{}),a.jsx(k5,{type:"fairValue",position:50}),a.jsxs("div",{style:{position:"absolute",left:`${f5(h.price,129650.6*.9,129650.6,129650.6*1.1)}%`,top:"-45px",transform:"translateX(-50%)",color:"#fff",fontWeight:"500",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",textAlign:"center",lineHeight:"1.2",fontFamily:"inherit"},children:["Last Price:",a.jsx("br",{}),"$",h.price.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]}),a.jsx(k5,{position:f5(h.price,129650.6*.9,129650.6,129650.6*1.1),style:{backgroundColor:"transparent",borderColor:"#000",borderWidth:"2px",zIndex:4}})]}),a.jsxs(p$,{children:[a.jsx(G0,{children:a.jsxs(X0,{style:{color:"#4CAF50"},children:["< $",(129650.6*.9).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",a.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:"normal"},children:["($$",(129650.6*.9/1e4).toFixed(2),"m)"]})]})}),a.jsx(G0,{children:a.jsxs(X0,{style:{color:"var(--color-accent)"},children:["$",129650.6.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",a.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:"normal"},children:["($$",(129650.6/1e4).toFixed(2),"m)"]})]})}),a.jsx(G0,{children:a.jsxs(X0,{style:{color:"#F44336"},children:["> $",(129650.6*1.1).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",a.jsxs("span",{style:{fontSize:"0.8rem",fontWeight:"normal"},children:["($$",(129650.6*1.1/1e4).toFixed(2),"m)"]})]})})]})]}),a.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#fff"},children:"Historical Valuation"}),a.jsx(m$,{children:a.jsx("div",{style:{height:"300px",position:"relative",marginBottom:"20px",padding:"10px",width:"100%"},children:a.jsxs("div",{style:{position:"relative",height:"100%",width:"100%"},children:[a.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(255,255,255,0.03)",borderRadius:"8px",zIndex:1}}),[0,25,50,75,100].map(U=>a.jsx("div",{style:{position:"absolute",left:40,right:10,height:"1px",bottom:`${U}%`,background:"rgba(255,255,255,0.1)"}},`y-${U}`)),["Q1 2023","Q2 2023","Q3 2023","Q4 2023","Q1 2024","Q2 2024","Q3 2024","Q4 2024","Q1 2025","Q2 2025","Q3 2025","Q4 2025"].map((U,se,_e)=>{const he=se/(_e.length-1)*100;return a.jsxs("div",{children:[a.jsx("div",{style:{position:"absolute",bottom:25,top:10,width:"1px",left:`${he}%`,background:"rgba(255,255,255,0.1)"}}),a.jsx("div",{style:{position:"absolute",bottom:5,left:`${he}%`,transform:"translateX(-50%)",fontSize:"10px",color:"rgba(255,255,255,0.6)"},children:U})]},`x-${se}`)}),a.jsx("div",{style:{position:"absolute",top:10,bottom:25,left:-40,width:40,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:["$130K","$125K","$120K","$115K","$110K"].map((U,se)=>a.jsx("div",{style:{fontSize:"10px",color:"rgba(255,255,255,0.6)",textAlign:"right",paddingRight:"5px"},children:U},`y-label-${se}`))}),a.jsxs("svg",{style:{position:"absolute",top:10,right:0,bottom:25,left:0,overflow:"visible",width:"100%",height:"calc(100% - 35px)",zIndex:10},viewBox:"0 0 1200 200",preserveAspectRatio:"none",children:[a.jsx("path",{d:"M 0 180 L 50 175 L 100 170 L 150 165 L 200 160 L 250 155 L 300 150 L 350 145 L 400 140 L 450 130 L 500 120 L 550 110 L 600 95 L 620 100 L 640 95 L 660 90 L 700 85 L 750 80 L 800 70 L 850 65 L 900 55 L 950 50 L 1000 45 L 1050 50 L 1080 65 L 1100 55 L 1120 50 L 1150 45 L 1200 42",fill:"none",stroke:"#D4AF37",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"}),a.jsx("path",{d:"M 0 190 L 50 180 L 100 175 L 150 170 L 180 165 L 200 160 L 250 155 L 280 150 L 300 145 L 350 140 L 380 135 L 400 130 L 420 125 L 450 120 L 480 115 L 500 110 L 520 105 L 540 100 L 560 95 L 580 90 L 600 85 L 620 105 L 640 110 L 660 115 L 680 110 L 700 105 L 720 100 L 740 95 L 760 90 L 780 85 L 800 80 L 820 75 L 840 70 L 860 65 L 880 60 L 900 75 L 920 70 L 940 65 L 960 60 L 980 55 L 1000 50 L 1020 75 L 1040 70 L 1060 65 L 1080 130 L 1100 100 L 1120 70 L 1140 65 L 1160 60 L 1180 65 L 1200 60",fill:"none",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]}),a.jsxs("div",{style:{position:"absolute",top:10,right:10,zIndex:15,display:"flex",flexDirection:"column",gap:"8px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("div",{style:{width:"10px",height:"2px",backgroundColor:"#D4AF37"}}),a.jsx("div",{style:{fontSize:"10px",color:"#D4AF37",fontWeight:"bold"},children:"Fair Value: $129,650.60"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[a.jsx("div",{style:{width:"10px",height:"2px",backgroundColor:"#FFFFFF"}}),a.jsx("div",{style:{fontSize:"10px",color:"#FFFFFF",fontWeight:"bold"},children:"Last Price: $124,813.67"})]})]})]})})})]})]}),a.jsxs(IB,{children:[a.jsx("h2",{children:"Recent Sales in Comparable Suburbs"}),a.jsx(YB,{children:c.recentSales.map((U,se)=>a.jsxs(qB,{children:[a.jsxs(WB,{children:[a.jsx(GB,{src:U.imageUrl,alt:U.address}),a.jsxs(XB,{children:[a.jsx(QB,{}),"Sold"]})]}),a.jsxs(ZB,{children:[a.jsx(KB,{children:U.address}),a.jsx(JB,{children:U.suburb}),a.jsx(e$,{children:U.price}),a.jsx(r$,{children:U.saleDate}),a.jsxs(t$,{children:[a.jsxs("span",{children:[U.bedrooms," beds • ",U.bathrooms," baths"]}),a.jsx("span",{children:U.landSize})]})]})]},se))})]}),a.jsxs(g$,{children:[a.jsx("h2",{children:"News & Updates"}),a.jsx(x$,{children:c.news.map(U=>a.jsxs(b$,{children:[a.jsx(v$,{children:U.title}),a.jsxs(y$,{children:[a.jsx(w$,{children:U.date}),a.jsx(j$,{children:U.type==="property"?"Property Update":"Market News"})]})]},U.id))})]})]}),a.jsx(wa,{active:_==="past-sales",children:a.jsxs(DB,{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[a.jsx("h2",{children:"Property History"}),a.jsxs(SB,{children:[a.jsx(eu,{active:D==="all",onClick:()=>L("all"),children:"All"}),a.jsx(eu,{active:D==="sales",onClick:()=>L("sales"),children:"Sales"}),a.jsx(eu,{active:D==="events",onClick:()=>L("events"),children:"Events"}),a.jsx(eu,{active:D==="loaf",onClick:()=>L("loaf"),children:"Listed"})]})]}),a.jsxs(kB,{children:[a.jsx(CB,{children:a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Type"}),a.jsx("th",{children:"Sale Type"}),a.jsx("th",{children:"Date"}),a.jsx("th",{children:"Price"}),a.jsx("th",{children:"Agent"})]})})}),(()=>{const U=A.find(_e=>_e.type==="Listed");if(!U||!(D==="all"||D==="loaf"))return null;const se=A.filter(_e=>_e.ownershipPeriod==="current"&&_e.type!=="Listed"&&(_e.id==="leased-current"||_e.id==="da-approval"));return a.jsxs(v5,{isLoafListing:!0,children:[a.jsx(ng,{children:a.jsxs(og,{children:[U.price.includes("18,750,000")?"18.75M":U.price,a.jsx("span",{style:{fontSize:"0.9rem",fontWeight:"normal",marginLeft:"0.75rem",opacity:.8},children:U.date.replace(/\d+,\s|\s\d+$/,"")})]})}),a.jsx(W0,{children:a.jsx("tbody",{children:a.jsxs(q0,{type:U.type,isOwnershipStart:!0,children:[a.jsx("td",{children:a.jsx(qu,{type:U.type,children:U.type==="Sale"?"Sold":U.type})}),a.jsx("td",{children:U.saleType||"-"}),a.jsx("td",{children:U.date.replace(/\d+,\s|\s\d+$/,"")}),a.jsx("td",{children:U.price}),a.jsx("td",{children:U.agent})]})})}),se.length>0&&a.jsxs(y5,{children:[a.jsx(j5,{}),a.jsx("div",{style:{padding:"0.5rem 0"},children:se.map(_e=>a.jsx("div",{style:{marginBottom:"0.5rem"},children:a.jsx(w5,{event:_e})},_e.id))})]})]},U.id)})(),(()=>{const U=A.filter(he=>he.type==="Listed"?!1:D==="all"?!0:D==="sales"?he.type==="Sale":D==="lease"?he.type==="Lease":D!=="loaf");U.sort((he,Te)=>{const Se=new Date(he.date);return new Date(Te.date)-Se});const se={};return U.forEach(he=>{se[he.ownershipPeriod]||(se[he.ownershipPeriod]=[]),se[he.ownershipPeriod].push(he)}),Object.keys(se).sort((he,Te)=>{const Se=se[he].map(Me=>new Date(Me.date)),ut=se[Te].map(Me=>new Date(Me.date)),Ce=new Date(Math.max(...Se));return new Date(Math.max(...ut))-Ce}).map(he=>{const Te=se[he],Se=Te.find(Me=>Me.isOwnershipStart);if(D==="sales"&&!Se&&!Te.some(Me=>Me.type==="Sale")||D==="events"&&!Te.some(Me=>["Leased","Renovated","Extended","Rebuilt","Rezoned"].includes(Me.type))||D==="loaf"&&!Te.some(Me=>Me.type==="Listed"||Me.type==="Loaf Listing"))return null;const ut=["Leased","Renovated","Extended","Rebuilt","Rezoned","DA Approval"],Ce=Te.filter(Me=>ut.includes(Me.type)&&Me.id!=="leased-current"&&Me.id!=="da-approval"&&(he!=="current"||Me.type!=="Leased")),Mt=Te.filter(Me=>Me.type==="Sale"&&!Me.isOwnershipStart);return Ce.sort((Me,Ut)=>new Date(Ut.date)-new Date(Me.date)),Mt.sort((Me,Ut)=>new Date(Ut.date)-new Date(Me.date)),a.jsxs(v5,{children:[Se&&(D==="all"||D==="sales")&&a.jsx(ng,{children:a.jsxs(og,{children:[Se.price.includes("18,750,000")?"18.75M":Se.price.includes("15,200,000")?"15.20M":Se.price,a.jsx("span",{style:{fontSize:"0.9rem",fontWeight:"normal",marginLeft:"0.75rem",opacity:.8},children:Se.date.replace(/\d+,\s|\s\d+$/,"")})]})}),Se&&(D==="all"||D==="sales")&&a.jsx(W0,{children:a.jsx("tbody",{children:a.jsxs(q0,{isOwnershipStart:!0,type:Se.type,children:[a.jsx("td",{children:a.jsx(qu,{type:Se.type,children:Se.type==="Sale"?"Sold":Se.type})}),a.jsx("td",{children:Se.saleType||"-"}),a.jsx("td",{children:Se.date.replace(/\d+,\s|\s\d+$/,"")}),a.jsx("td",{children:Se.price}),a.jsx("td",{children:Se.agent})]},Se.id)})}),Ce.length>0&&(D==="all"||D==="events")&&a.jsxs(y5,{children:[a.jsx(j5,{}),a.jsx("div",{style:{padding:"0.5rem 0"},children:Ce.map(Me=>a.jsx("div",{style:{marginBottom:"0.5rem"},children:a.jsx(w5,{event:Me})},Me.id))})]}),Mt.length>0&&(D==="all"||D==="sales")&&a.jsx(W0,{children:a.jsx("tbody",{children:Mt.map(Me=>a.jsxs(q0,{type:Me.type,children:[a.jsx("td",{children:a.jsx(qu,{type:Me.type,children:Me.type==="Sale"?"Sold":Me.type})}),a.jsx("td",{children:Me.saleType||"-"}),a.jsx("td",{children:Me.date.replace(/\d+,\s|\s\d+$/,"")}),a.jsx("td",{children:Me.price}),a.jsx("td",{children:Me.agent})]},Me.id))})})]},he)})})()]})]})}),a.jsx(wa,{active:_==="offers",children:a.jsxs(PB,{ref:Ne,children:[a.jsxs(HB,{children:[a.jsx("h2",{children:"Active & Historical Buyout Offers"}),a.jsxs(FB,{children:[a.jsx(VB,{onClick:()=>alert("Redirecting to Make Offer page..."),children:"Make Offer"}),a.jsx(UB,{onClick:()=>alert("Opening Enquiry form..."),children:"Enquire"})]})]}),a.jsx(AB,{children:te.map(U=>a.jsxs(EB,{children:[a.jsxs(OB,{children:[a.jsx(RB,{children:U.price}),a.jsxs(LB,{children:["by ",U.buyer," • ",U.date," • Expires: ",U.expiry]}),a.jsx("div",{style:{fontSize:"0.85rem",marginTop:"0.5rem",color:"rgba(255,255,255,0.7)"},children:U.conditions})]}),a.jsxs(NB,{children:[a.jsx(BB,{status:U.status,children:U.status}),U.status==="active"&&a.jsx($B,{onClick:()=>alert(`Voted for offer: ${U.price} by ${U.buyer}`),children:"Vote"})]})]},U.id))})]})}),a.jsx(wa,{active:_==="owner-booking",children:a.jsx(lL,{property:c,token:h})})]})},S$=f.div`
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`,k$=f.div`
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,C$=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,M$=f.p`
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
`,_$=f.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,nu=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`,ou=f.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,iu=f.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,T$=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow-x: auto;
  
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`,z$=f.table`
  width: 100%;
  border-collapse: collapse;
`,D$=f.thead`
  background-color: rgba(255, 255, 255, 0.05);
`,au=f.tr`
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`,_a=f.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,Lo=f.td`
  padding: 1rem;
  vertical-align: middle;
`,P$=f.div`
  display: flex;
  align-items: center;
`,A$=f.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`,E$=f.div`
  font-weight: 500;
`,O$=f.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,R$=f.div`
  color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.25rem;
    width: 12px;
    height: 12px;
  }
`,L$=f(st)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
`,B$=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
`,$$=f.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,su=f.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: var(--border-radius);
  font-weight: 500;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.05)"};
  }
`,N$=f.input`
  padding: 0.5rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  width: 250px;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,H$=()=>{const[e,t]=S.useState([]),[n,o]=S.useState([]),[s,c]=S.useState(!0),[d,h]=S.useState("all"),[m,p]=S.useState("");S.useEffect(()=>{x()},[]),S.useEffect(()=>{v()},[e,d,m]);const x=async()=>{c(!0);try{const C=y();t(C),o(C),c(!1)}catch(C){console.error("Error fetching tokens:",C),c(!1)}},v=()=>{let C=[...e];if(d==="gainers"?C=C.filter(k=>parseFloat(k.priceChangePercent)>0):d==="losers"?C=C.filter(k=>parseFloat(k.priceChangePercent)<0):d==="volume"&&(C=C.sort((k,_)=>parseFloat(_.volume24h.replace(/,/g,""))-parseFloat(k.volume24h.replace(/,/g,"")))),m){const k=m.toLowerCase();C=C.filter(_=>_.name.toLowerCase().includes(k)||_.symbol.toLowerCase().includes(k)||_.propertyName.toLowerCase().includes(k))}o(C)},y=()=>[{id:1,symbol:"VAUC",name:"Vaucluse Mansion",propertyName:"42 Vaucluse Road",propertyLocation:"Vaucluse, Sydney",imageUrl:"https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"102,520.00",priceChangePercent:"1.20",marketCap:"28,500,000",volume24h:"1,250,000"},{id:2,symbol:"POIN",name:"Point Piper Estate",propertyName:"24 Wolseley Road",propertyLocation:"Point Piper, Sydney",imageUrl:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"145,750.00",priceChangePercent:"2.35",marketCap:"42,750,000",volume24h:"1,875,000"},{id:3,symbol:"BELV",name:"Bellevue Hill Mansion",propertyName:"18 Victoria Road",propertyLocation:"Bellevue Hill, Sydney",imageUrl:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"98,500.00",priceChangePercent:"-0.75",marketCap:"32,500,000",volume24h:"985,000"},{id:4,symbol:"DBAY",name:"Double Bay Penthouse",propertyName:"15 Cross Street",propertyLocation:"Double Bay, Sydney",imageUrl:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"78,300.00",priceChangePercent:"3.42",marketCap:"18,750,000",volume24h:"1,120,000"},{id:5,symbol:"TOOR",name:"Toorak Mansion",propertyName:"27 St Georges Road",propertyLocation:"Toorak, Melbourne",imageUrl:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"115,250.00",priceChangePercent:"-1.05",marketCap:"25,650,000",volume24h:"875,000"},{id:6,symbol:"MOSR",name:"Mosman Residence",propertyName:"5 Bradleys Head Road",propertyLocation:"Mosman, Sydney",imageUrl:"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"92,800.00",priceChangePercent:"0.87",marketCap:"22,450,000",volume24h:"750,000"},{id:7,symbol:"PALM",name:"Palm Beach Estate",propertyName:"19 Barrenjoey Road",propertyLocation:"Palm Beach, Sydney",imageUrl:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"110,400.00",priceChangePercent:"2.18",marketCap:"24,250,000",volume24h:"1,050,000"},{id:8,symbol:"BRTN",name:"Brighton Beachfront",propertyName:"36 The Esplanade",propertyLocation:"Brighton, Melbourne",imageUrl:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"85,600.00",priceChangePercent:"-0.32",marketCap:"19,850,000",volume24h:"680,000"}],w=(()=>{const C=e.reduce((D,L)=>D+parseFloat(L.marketCap.replace(/,/g,"")),0),k=e.reduce((D,L)=>D+parseFloat(L.volume24h.replace(/,/g,"")),0),_=e.filter(D=>parseFloat(D.priceChangePercent)>0).length,z=e.filter(D=>parseFloat(D.priceChangePercent)<0).length;return{totalMarketCap:C.toLocaleString(),totalVolume:k.toLocaleString(),gainers:_,losers:z}})();return a.jsxs(S$,{className:"container",children:[a.jsxs(k$,{children:[a.jsx(C$,{children:"Market"}),a.jsx(M$,{children:"Explore and trade tokenized real estate properties on the LOAF platform"})]}),a.jsxs(_$,{children:[a.jsxs(nu,{children:[a.jsxs(ou,{children:["$",w.totalMarketCap]}),a.jsx(iu,{children:"Total Property Value"})]}),a.jsxs(nu,{children:[a.jsxs(ou,{children:["$",w.totalVolume]}),a.jsx(iu,{children:"24h Volume"})]}),a.jsxs(nu,{children:[a.jsx(ou,{children:w.gainers}),a.jsx(iu,{children:"Gainers (24h)"})]}),a.jsxs(nu,{children:[a.jsx(ou,{children:w.losers}),a.jsx(iu,{children:"Losers (24h)"})]})]}),a.jsxs(B$,{children:[a.jsxs($$,{children:[a.jsx(su,{active:d==="all",onClick:()=>h("all"),children:"All"}),a.jsx(su,{active:d==="gainers",onClick:()=>h("gainers"),children:"Gainers"}),a.jsx(su,{active:d==="losers",onClick:()=>h("losers"),children:"Losers"}),a.jsx(su,{active:d==="volume",onClick:()=>h("volume"),children:"Highest Volume"})]}),a.jsx(N$,{type:"text",placeholder:"Search tokens...",value:m,onChange:C=>p(C.target.value)})]}),a.jsx(T$,{children:a.jsxs(z$,{children:[a.jsx(D$,{children:a.jsxs(au,{children:[a.jsx(_a,{children:"Property"}),a.jsx(_a,{children:"Price per Share"}),a.jsx(_a,{children:"24h Change"}),a.jsx(_a,{children:"Implied Property Value"}),a.jsx(_a,{children:"24h Volume"}),a.jsx(_a,{children:"Action"})]})}),a.jsx("tbody",{children:s?a.jsx(au,{children:a.jsx(Lo,{colSpan:"6",children:"Loading tokens..."})}):n.length===0?a.jsx(au,{children:a.jsx(Lo,{colSpan:"6",children:"No tokens found"})}):n.map(C=>{const k=parseFloat(C.priceChangePercent)>=0;return a.jsxs(au,{children:[a.jsx(Lo,{children:a.jsxs(P$,{children:[a.jsx(A$,{src:C.imageUrl,alt:C.name}),a.jsxs("div",{children:[a.jsx(E$,{children:C.propertyName}),a.jsx(O$,{children:C.symbol})]})]})}),a.jsxs(Lo,{children:["$",C.currentPrice]}),a.jsx(Lo,{children:a.jsxs(R$,{isPositive:k,children:[k?a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 14l5-5 5 5H7z"})}):a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 10l5 5 5-5H7z"})}),k?"+":"",C.priceChangePercent,"%"]})}),a.jsxs(Lo,{children:["$",C.marketCap]}),a.jsxs(Lo,{children:["$",C.volume24h]}),a.jsx(Lo,{children:a.jsx(L$,{to:`/property-new/${C.id}/trade`,children:"Trade"})})]},C.id)})})]})})]})},F$=f.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
    box-sizing: border-box;
  }
`,V$=f.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-text);
`,U$=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`,I$=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
`,Y$=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`,q$=f.div`
  display: flex;
  flex-direction: column;
`,W$=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
  
  &:last-child {
    border-bottom: none;
  }
`,G$=f.div`
  display: flex;
  align-items: center;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`,X$=f.div`
  display: flex;
  flex-direction: column;
  
  span:first-child {
    font-weight: 500;
  }
  
  span:last-child {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
  }
`,Q$=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  span:first-child {
    font-weight: 500;
  }
  
  span:last-child {
    font-size: 0.8rem;
    color: ${e=>e.change>=0?"var(--color-positive)":"var(--color-negative)"};
  }
`,Z$=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
`,K$=f.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
`,C5=f.button`
  background: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  color: ${e=>e.active?"var(--color-text)":"var(--color-text-secondary)"};
  border-bottom: 2px solid ${e=>e.active?"var(--color-accent)":"transparent"};
  
  &:hover {
    color: var(--color-text);
    background: transparent;
  }
`,J$=f.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,M5=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,_5=f.label`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`,T5=f.div`
  display: flex;
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  overflow: hidden;
`,z5=f.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 1rem;
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,D5=f.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-background);
  border: none;
  padding: 0 1rem;
  
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  
  svg {
    width: 12px;
    height: 12px;
    margin-left: 0.5rem;
  }
`,eN=f.button`
  background-color: var(--color-accent);
  color: var(--color-background);
  font-weight: 600;
  padding: 1rem;
  border: none;
  border-radius: var(--border-radius);
  margin-top: 1rem;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
  
  &:disabled {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    cursor: not-allowed;
  }
`,tN=f.div`
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`,rN=f.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`,nN=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
`,Q0=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  
  h3 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      background-color: var(--color-accent);
      border-radius: 50%;
      font-size: 0.9rem;
    }
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;
    box-sizing: border-box;
  }
`,oN=()=>{const[e,t]=S.useState("buy"),[n,o]=S.useState([]),[s,c]=S.useState(null),[d,h]=S.useState(""),[m,p]=S.useState(!0),{isAuthenticated:x}=Qo(),v=()=>{setTimeout(()=>{const k=[{id:1,symbol:"VAUC",name:"Vaucluse Mansion",image:"https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:102520,priceChange:1.2,address:"42 Vaucluse Road, Vaucluse, Sydney"},{id:2,symbol:"POIN",name:"Point Piper Estate",image:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:145750,priceChange:2.35,address:"24 Wolseley Road, Point Piper, Sydney"},{id:3,symbol:"BELV",name:"Bellevue Hill Mansion",image:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:98500,priceChange:-.75,address:"18 Victoria Road, Bellevue Hill, Sydney"},{id:4,symbol:"DBAY",name:"Double Bay Penthouse",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:78300,priceChange:3.42,address:"15 Cross Street, Double Bay, Sydney"},{id:5,symbol:"TOOR",name:"Toorak Mansion",image:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",price:115250,priceChange:-1.05,address:"27 St Georges Road, Toorak, Melbourne"}];o(k),c(k[0]),p(!1)},1e3)};S.useEffect(()=>{v()},[]);const y=k=>{t(k)},j=k=>{c(k)},w=k=>{k.preventDefault(),console.log("Transaction:",{type:e,property:s,amount:d}),alert(`${e==="buy"?"Bought":"Sold"} ${d} tokens of ${s.name}`)},C=k=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(k);return a.jsxs(F$,{children:[a.jsx(V$,{children:"Buy Property Tokens"}),a.jsxs(U$,{children:[a.jsxs(I$,{children:[a.jsx(Y$,{children:a.jsx("h2",{children:"Hot Properties"})}),a.jsx(q$,{children:n.map(k=>a.jsxs(W$,{onClick:()=>j(k),style:{backgroundColor:(s==null?void 0:s.id)===k.id?"rgba(255, 255, 255, 0.05)":"transparent"},children:[a.jsxs(G$,{children:[a.jsx("img",{src:k.image,alt:k.symbol}),a.jsxs(X$,{children:[a.jsx("span",{children:k.symbol}),a.jsx("span",{children:k.name})]})]}),a.jsxs(Q$,{change:k.priceChange,children:[a.jsx("span",{children:C(k.price)}),a.jsxs("span",{children:[k.priceChange>0?"+":"",k.priceChange,"%"]})]})]},k.id))})]}),a.jsxs(Z$,{children:[a.jsxs(K$,{children:[a.jsx(C5,{active:e==="buy",onClick:()=>y("buy"),children:"Buy"}),a.jsx(C5,{active:e==="sell",onClick:()=>y("sell"),children:"Sell"})]}),a.jsxs(J$,{onSubmit:w,children:[a.jsxs(M5,{children:[a.jsx(_5,{children:e==="buy"?"Spend":"Receive"}),a.jsxs(T5,{children:[a.jsx(z5,{type:"number",placeholder:"0.00",value:d,onChange:k=>h(k.target.value),required:!0}),a.jsxs(D5,{type:"button",children:["USD",a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 10l5 5 5-5H7z"})})]})]})]}),a.jsxs(M5,{children:[a.jsx(_5,{children:e==="buy"?"Receive":"Spend"}),a.jsxs(T5,{children:[a.jsx(z5,{type:"number",placeholder:"0.00",value:d?(d/(s==null?void 0:s.price)).toFixed(4):"",readOnly:!0}),a.jsx(D5,{type:"button",children:s&&a.jsxs(a.Fragment,{children:[a.jsx("img",{src:s.image,alt:s.symbol}),s.symbol,a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 10l5 5 5-5H7z"})})]})})]})]}),s&&a.jsxs("div",{style:{fontSize:"0.9rem",color:"var(--color-text-secondary)"},children:["1 ",s.symbol," = ",C(s.price)]}),a.jsx(eN,{type:"submit",disabled:!d||!s||!x,children:x?`${e==="buy"?"Buy":"Sell"} ${s==null?void 0:s.symbol}`:"Log In/Sign Up"})]})]})]}),a.jsxs(tN,{children:[a.jsx(rN,{children:"How to Buy Property Tokens"}),a.jsxs(nN,{children:[a.jsxs(Q0,{children:[a.jsxs("h3",{children:[a.jsx("span",{children:"1"})," Enter Amount & Select Property"]}),a.jsx("p",{children:"Enter the amount you want to spend and select the property token you wish to purchase. Our platform tokenizes premium real estate into affordable shares."})]}),a.jsxs(Q0,{children:[a.jsxs("h3",{children:[a.jsx("span",{children:"2"})," Confirm Order"]}),a.jsx("p",{children:"Review your order details including the property information, token price, quantity, and total cost. Confirm your purchase to proceed with the transaction."})]}),a.jsxs(Q0,{children:[a.jsxs("h3",{children:[a.jsx("span",{children:"3"})," Receive Property Tokens"]}),a.jsx("p",{children:"After confirmation, the purchased property tokens will be deposited into your wallet. You can track your portfolio performance and manage your real estate investments."})]})]})]})]})},iN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
  width: 100%;
`,aN=f.div`
  width: 100%;
  max-width: 450px;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,sN=f.div`
  text-align: center;
  margin-bottom: 2rem;
`,lN=f.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,cN=f.p`
  color: var(--color-text-secondary);
`,dN=f.form`
  display: flex;
  flex-direction: column;
`,P5=f.div`
  margin-bottom: 1.5rem;
`,A5=f.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,E5=f.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-speed) ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`,uN=f.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
  
  &:disabled {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    cursor: not-allowed;
  }
`,hN=f.div`
  color: var(--color-negative);
  background-color: rgba(255, 87, 87, 0.1);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`,fN=f.p`
  text-align: center;
  margin-top: 1.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  
  a {
    color: var(--color-accent);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,pN=()=>{var j,w;const[e,t]=S.useState(""),[n,o]=S.useState(""),[s,c]=S.useState(""),[d,h]=S.useState(!1),{login:m}=Qo(),p=Ei(),v=((w=(j=nn().state)==null?void 0:j.from)==null?void 0:w.pathname)||"/",y=async C=>{if(C.preventDefault(),!e||!n){c("Please enter both email and password");return}h(!0),c("");try{const k=await m(e,n);k.success?p(v,{replace:!0}):c(k.error||"Invalid email or password")}catch(k){c("An unexpected error occurred. Please try again."),console.error("Login error:",k)}finally{h(!1)}};return a.jsx(iN,{children:a.jsxs(aN,{children:[a.jsxs(sN,{children:[a.jsx(lN,{children:"Welcome back"}),a.jsx(cN,{children:"Sign in to access your LOAF account"})]}),s&&a.jsx(hN,{children:s}),a.jsxs(dN,{onSubmit:y,children:[a.jsxs(P5,{children:[a.jsx(A5,{htmlFor:"email",children:"Email"}),a.jsx(E5,{id:"email",type:"email",value:e,onChange:C=>t(C.target.value),placeholder:"Enter your email",required:!0})]}),a.jsxs(P5,{children:[a.jsx(A5,{htmlFor:"password",children:"Password"}),a.jsx(E5,{id:"password",type:"password",value:n,onChange:C=>o(C.target.value),placeholder:"Enter your password",required:!0})]}),a.jsx(uN,{type:"submit",disabled:d,children:d?"Signing in...":"Sign In"})]}),a.jsxs(fN,{children:["Don't have an account? ",a.jsx(st,{to:"/register",children:"Sign up"})]})]})})},mN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
  width: 100%;
`,gN=f.div`
  width: 100%;
  max-width: 500px;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,xN=f.div`
  text-align: center;
  margin-bottom: 2rem;
`,bN=f.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,vN=f.p`
  color: var(--color-text-secondary);
`,yN=f.form`
  display: flex;
  flex-direction: column;
`,wN=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Ta=f.div`
  margin-bottom: 1.5rem;
`,gl=f.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,xl=f.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-speed) ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`,jN=f.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
  
  &:disabled {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    cursor: not-allowed;
  }
`,SN=f.div`
  color: var(--color-negative);
  background-color: rgba(255, 87, 87, 0.1);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`,kN=f.p`
  text-align: center;
  margin-top: 1.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  
  a {
    color: var(--color-accent);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,CN=f.input`
  margin-right: 0.5rem;
`,MN=f.label`
  display: flex;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  cursor: pointer;
  
  a {
    color: var(--color-accent);
    margin-left: 0.25rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,_N=()=>{const[e,t]=S.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",agreeToTerms:!1}),[n,o]=S.useState(""),[s,c]=S.useState(!1),{register:d}=Qo(),h=Ei(),m=v=>{const{name:y,value:j,type:w,checked:C}=v.target;t(k=>({...k,[y]:w==="checkbox"?C:j}))},p=()=>!e.firstName||!e.lastName||!e.email||!e.password||!e.confirmPassword?(o("All fields are required"),!1):e.password!==e.confirmPassword?(o("Passwords do not match"),!1):e.password.length<8?(o("Password must be at least 8 characters long"),!1):e.agreeToTerms?!0:(o("You must agree to the Terms of Service and Privacy Policy"),!1),x=async v=>{if(v.preventDefault(),!!p()){c(!0),o("");try{const y=await d({firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password});y.success?h("/"):o(y.error||"Registration failed")}catch(y){o("An unexpected error occurred. Please try again."),console.error("Registration error:",y)}finally{c(!1)}}};return a.jsx(mN,{children:a.jsxs(gN,{children:[a.jsxs(xN,{children:[a.jsx(bN,{children:"Create an account"}),a.jsx(vN,{children:"Join LOAF to start investing in tokenized real estate"})]}),n&&a.jsx(SN,{children:n}),a.jsxs(yN,{onSubmit:x,children:[a.jsxs(wN,{children:[a.jsxs(Ta,{children:[a.jsx(gl,{htmlFor:"firstName",children:"First Name"}),a.jsx(xl,{id:"firstName",name:"firstName",type:"text",value:e.firstName,onChange:m,placeholder:"Enter your first name",required:!0})]}),a.jsxs(Ta,{children:[a.jsx(gl,{htmlFor:"lastName",children:"Last Name"}),a.jsx(xl,{id:"lastName",name:"lastName",type:"text",value:e.lastName,onChange:m,placeholder:"Enter your last name",required:!0})]})]}),a.jsxs(Ta,{children:[a.jsx(gl,{htmlFor:"email",children:"Email"}),a.jsx(xl,{id:"email",name:"email",type:"email",value:e.email,onChange:m,placeholder:"Enter your email",required:!0})]}),a.jsxs(Ta,{children:[a.jsx(gl,{htmlFor:"password",children:"Password"}),a.jsx(xl,{id:"password",name:"password",type:"password",value:e.password,onChange:m,placeholder:"Create a password",required:!0})]}),a.jsxs(Ta,{children:[a.jsx(gl,{htmlFor:"confirmPassword",children:"Confirm Password"}),a.jsx(xl,{id:"confirmPassword",name:"confirmPassword",type:"password",value:e.confirmPassword,onChange:m,placeholder:"Confirm your password",required:!0})]}),a.jsx(Ta,{children:a.jsxs(MN,{children:[a.jsx(CN,{type:"checkbox",name:"agreeToTerms",checked:e.agreeToTerms,onChange:m,required:!0}),"I agree to the",a.jsx(st,{to:"/terms",children:"Terms of Service"}),"and",a.jsx(st,{to:"/privacy",children:"Privacy Policy"})]})}),a.jsx(jN,{type:"submit",disabled:s,children:s?"Creating account...":"Create Account"})]}),a.jsxs(kN,{children:["Already have an account? ",a.jsx(st,{to:"/login",children:"Sign in"})]})]})})};Li.register(Wa,Ga,Di,fn,Bh,$h,Lh,Rh);const TN=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  height: 100%;
`,zN=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,DN=f.h3`
  margin: 0;
  font-size: 1.25rem;
`,PN=f.div`
  display: flex;
  align-items: center;
`,AN=f.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
`,EN=f.div`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  background-color: ${e=>e.isPositive?"rgba(0, 192, 118, 0.1)":"rgba(255, 87, 87, 0.1)"};
  color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
`,ON=f.div`
  display: flex;
  margin-bottom: 1.5rem;
`,RN=f.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: var(--border-radius);
  margin-right: 0.5rem;
  font-weight: 500;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.05)"};
  }
`,aS=({userId:e})=>{const[t,n]=S.useState("1M"),[o,s]=S.useState(null),[c,d]=S.useState(!0),[h,m]=S.useState("28,750.42"),[p,x]=S.useState({percentage:"3.2",isPositive:!0}),v={"1D":{value:"28,750.42",change:"0.5",isPositive:!0},"1W":{value:"28,750.42",change:"1.8",isPositive:!0},"1M":{value:"28,750.42",change:"3.2",isPositive:!0},"3M":{value:"28,750.42",change:"5.7",isPositive:!0},"1Y":{value:"28,750.42",change:"12.4",isPositive:!0}};S.useEffect(()=>{d(!0);const C=setTimeout(()=>{const k=v[t];m(k.value),x({percentage:k.change,isPositive:k.isPositive});const _=y(t);s(_),d(!1)},300);return()=>clearTimeout(C)},[t]);const y=C=>{let k=[],_=[],z=28750.42,D,L=[];const A=new Date,V=new Date(A.getFullYear(),A.getMonth(),A.getDate());switch(C){case"1D":k=Array.from({length:24},(E,F)=>`${F}:00`),L=Array.from({length:24},(E,F)=>{const te=new Date(V);return te.setHours(F,0,0),te.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),D=z*.003,_=j(z,24,D,.5);break;case"1W":for(let E=6;E>=0;E--){const F=new Date(V);F.setDate(F.getDate()-E),k.push(F.toLocaleDateString([],{weekday:"short"})),L.push(F.toLocaleDateString([],{month:"short",day:"numeric"}))}D=z*.005,_=j(z,7,D,1.8);break;case"1M":for(let E=4;E>=0;E--){const F=new Date(V);F.setDate(F.getDate()-E*7),k.push(`Week ${4-E}`),L.push(F.toLocaleDateString([],{month:"short",day:"numeric"}))}D=z*.008,_=j(z,5,D,3.2);break;case"3M":for(let E=3;E>=0;E--){const F=new Date(V);F.setMonth(F.getMonth()-E),k.push(F.toLocaleDateString([],{month:"short"})),L.push(F.toLocaleDateString([],{month:"short",year:"numeric"}))}D=z*.01,_=j(z,4,D,5.7);break;case"1Y":for(let E=4;E>=0;E--){const F=new Date(V);F.setMonth(F.getMonth()-E*3),k.push(`Q${4-E}`),L.push(F.toLocaleDateString([],{month:"short",year:"numeric"}))}D=z*.02,_=j(z,5,D,12.4);break;default:k=["No Data"],_=[z]}return{labels:k,tooltipLabels:L,datasets:[{label:"Portfolio Value",data:_,borderColor:p.isPositive?"var(--color-positive)":"var(--color-negative)",backgroundColor:function(E){const F=E.chart,{ctx:te,chartArea:de}=F;if(!de)return null;const le=te.createLinearGradient(0,de.bottom,0,de.top),fe=p.isPositive?"rgba(0, 192, 118, 0.3)":"rgba(255, 87, 87, 0.3)";return le.addColorStop(0,"rgba(0, 0, 0, 0)"),le.addColorStop(1,fe),le},borderWidth:3,pointRadius:0,pointHoverRadius:5,pointHoverBackgroundColor:p.isPositive?"var(--color-positive)":"var(--color-negative)",tension:.4,fill:!0}]}},j=(C,k,_,z)=>{const D=[],L=z/100*C,A=C-L;for(let V=0;V<k;V++){const E=A+L*V/(k-1),F=(Math.random()-.5)*2*_,te=E+F;D.push(Math.max(te,0))}return D},w={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{mode:"index",intersect:!1,backgroundColor:"rgba(30, 30, 40, 0.95)",titleColor:"rgba(255, 255, 255, 0.95)",bodyColor:"rgba(255, 255, 255, 0.95)",borderColor:"var(--color-border)",borderWidth:1,padding:12,displayColors:!1,titleFont:{size:14,weight:"bold"},bodyFont:{size:14},callbacks:{title:function(C){if(C[0]&&o&&o.tooltipLabels){const k=C[0].dataIndex;return o.tooltipLabels[k]||""}return""},label:function(C){return`Value: $${C.parsed.y.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`}}}},scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{color:"rgba(255, 255, 255, 0.8)",maxRotation:0,autoSkip:!0,maxTicksLimit:8,font:{size:12,weight:"500"}}},y:{grid:{color:"rgba(255, 255, 255, 0.1)",drawBorder:!1},ticks:{color:"rgba(255, 255, 255, 0.8)",font:{size:12,weight:"500"},callback:function(C){return"$"+C.toLocaleString()}}}},interaction:{mode:"nearest",axis:"x",intersect:!1},animation:{duration:1e3}};return a.jsxs(TN,{children:[a.jsxs(zN,{children:[a.jsx(DN,{children:"Portfolio Value Over Time"}),a.jsxs(PN,{children:[a.jsxs(AN,{children:["$",h]}),a.jsxs(EN,{isPositive:p.isPositive,children:[p.isPositive?"+":"",p.percentage,"%"]})]})]}),a.jsx(ON,{children:["1D","1W","1M","3M","1Y"].map(C=>a.jsx(RN,{active:t===C,onClick:()=>n(C),children:C},C))}),a.jsx("div",{style:{height:"300px"},children:c?a.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:"Loading chart data..."}):o?a.jsx(K4,{data:o,options:w}):a.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:"No data available"})})]})},O5=f.div`
  padding: 2rem 0;
  width: 100%;
`,LN=f.div`
  margin-bottom: 2rem;
`,BN=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,$N=f.p`
  color: var(--color-text-secondary);
  max-width: 600px;
`,NN=f.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,lu=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`,cu=f.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,du=f.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,R5=f.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
`,L5=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 2rem;
`,B5=f.table`
  width: 100%;
  border-collapse: collapse;
`,$5=f.thead`
  background-color: rgba(255, 255, 255, 0.05);
`,uu=f.tr`
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`,Lr=f.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,Br=f.td`
  padding: 1rem;
  vertical-align: middle;
`,HN=f.div`
  display: flex;
  align-items: center;
`,FN=f.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`,N5=f.div`
  font-weight: 500;
`,H5=f.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,Z0=f.div`
  color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.25rem;
    width: 12px;
    height: 12px;
  }
`,K0=f(st)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
`,J0=f.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-text-secondary);
`,VN=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;f.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;f.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: var(--border-radius);
  color: var(--color-text-secondary);
`;const UN=()=>{const{currentUser:e}=Qo(),[t,n]=S.useState(null),[o,s]=S.useState(!0);S.useEffect(()=>{c()},[]);const c=async()=>{s(!0);try{const h=d();n(h),s(!1)}catch(h){console.error("Error fetching portfolio:",h),s(!1)}},d=()=>({totalValue:28750.42,totalProfit:3245.18,profitPercentage:12.72,tokenCount:5,tokens:[{id:1,symbol:"BUNYA",name:"Bunya Parade Token",propertyName:"14 Bunya Parade",propertyLocation:"South Coogee, Sydney",imageUrl:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"215.00",priceChangePercent:"2.57",quantity:50,value:10750,profit:1285,profitPercentage:13.58},{id:2,symbol:"HARB",name:"Harbour View Token",propertyName:"42 Harbour View",propertyLocation:"Circular Quay, Sydney",imageUrl:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"325.75",priceChangePercent:"1.23",quantity:25,value:8143.75,profit:768.75,profitPercentage:10.42},{id:3,symbol:"MOUNT",name:"Mountain Retreat Token",propertyName:"8 Mountain Retreat",propertyLocation:"Blue Mountains, NSW",imageUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"87.50",priceChangePercent:"-0.75",quantity:30,value:2625,profit:-60,profitPercentage:-2.24},{id:4,symbol:"BONDI",name:"Bondi Beach Token",propertyName:"15 Beachfront Villa",propertyLocation:"Bondi Beach, Sydney",imageUrl:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"178.30",priceChangePercent:"3.42",quantity:35,value:6240.5,profit:1190.5,profitPercentage:23.58},{id:7,symbol:"WINE",name:"Vineyard Estate Token",propertyName:"19 Vineyard Estate",propertyLocation:"Barossa Valley, SA",imageUrl:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",currentPrice:"210.40",priceChangePercent:"2.18",quantity:5,value:1052,profit:60,profitPercentage:6.05}],recentTransactions:[{id:1,type:"buy",tokenSymbol:"BUNYA",tokenName:"Bunya Parade Token",amount:10,price:210.5,total:2105,date:"2025-06-15T14:32:21Z"},{id:2,type:"sell",tokenSymbol:"MOUNT",tokenName:"Mountain Retreat Token",amount:5,price:88.2,total:441,date:"2025-06-12T09:45:17Z"},{id:3,type:"buy",tokenSymbol:"BONDI",tokenName:"Bondi Beach Token",amount:15,price:172.8,total:2592,date:"2025-06-10T16:21:05Z"},{id:4,type:"buy",tokenSymbol:"WINE",tokenName:"Vineyard Estate Token",amount:5,price:205.6,total:1028,date:"2025-06-08T11:17:32Z"},{id:5,type:"sell",tokenSymbol:"HARB",tokenName:"Harbour View Token",amount:3,price:320.25,total:960.75,date:"2025-06-05T13:42:19Z"}]});return o?a.jsx("div",{className:"container",children:"Loading portfolio..."}):e?a.jsxs(O5,{className:"container",children:[a.jsxs(LN,{children:[a.jsx(BN,{children:"My Portfolio"}),a.jsx($N,{children:"Track your property token investments and performance"})]}),a.jsxs(NN,{children:[a.jsxs(lu,{children:[a.jsxs(cu,{children:["$",t.totalValue.toLocaleString()]}),a.jsx(du,{children:"Total Value"})]}),a.jsxs(lu,{children:[a.jsxs(cu,{style:{color:t.profitPercentage>=0?"var(--color-positive)":"var(--color-negative)"},children:[t.profitPercentage>=0?"+":"",t.profitPercentage,"%"]}),a.jsx(du,{children:"Total Return"})]}),a.jsxs(lu,{children:[a.jsxs(cu,{style:{color:t.totalProfit>=0?"var(--color-positive)":"var(--color-negative)"},children:[t.totalProfit>=0?"+$":"-$",Math.abs(t.totalProfit).toLocaleString()]}),a.jsx(du,{children:"Profit/Loss"})]}),a.jsxs(lu,{children:[a.jsx(cu,{children:t.tokenCount}),a.jsx(du,{children:"Properties"})]})]}),a.jsx(VN,{children:a.jsx(aS,{userId:e==null?void 0:e.id})}),a.jsx(R5,{children:"My Property Tokens"}),t.tokens.length===0?a.jsxs(J0,{children:[a.jsx("p",{children:"You don't have any property tokens yet."}),a.jsx(K0,{to:"/market",children:"Explore Market"})]}):a.jsx(L5,{children:a.jsxs(B5,{children:[a.jsx($5,{children:a.jsxs(uu,{children:[a.jsx(Lr,{children:"Property"}),a.jsx(Lr,{children:"Price"}),a.jsx(Lr,{children:"24h"}),a.jsx(Lr,{children:"Quantity"}),a.jsx(Lr,{children:"Value"}),a.jsx(Lr,{children:"Profit/Loss"}),a.jsx(Lr,{children:"Action"})]})}),a.jsx("tbody",{children:t.tokens.map(h=>{const m=parseFloat(h.priceChangePercent)>=0,p=h.profit>=0;return a.jsxs(uu,{children:[a.jsx(Br,{children:a.jsxs(HN,{children:[a.jsx(FN,{src:h.imageUrl,alt:h.name}),a.jsxs("div",{children:[a.jsx(N5,{children:h.propertyName}),a.jsx(H5,{children:h.symbol})]})]})}),a.jsxs(Br,{children:["$",h.currentPrice]}),a.jsx(Br,{children:a.jsxs(Z0,{isPositive:m,children:[m?a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 14l5-5 5 5H7z"})}):a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 10l5 5 5-5H7z"})}),m?"+":"",h.priceChangePercent,"%"]})}),a.jsx(Br,{children:h.quantity}),a.jsxs(Br,{children:["$",h.value.toLocaleString()]}),a.jsx(Br,{children:a.jsxs(Z0,{isPositive:p,children:[p?"+$":"-$",Math.abs(h.profit).toLocaleString()," (",p?"+":"",h.profitPercentage,"%)"]})}),a.jsx(Br,{children:a.jsx(K0,{to:`/property-new/${h.id}/trade`,children:"Trade"})})]},h.id)})})]})}),a.jsx(R5,{children:"Recent Transactions"}),t.recentTransactions.length===0?a.jsx(J0,{children:a.jsx("p",{children:"You don't have any transactions yet."})}):a.jsx(L5,{children:a.jsxs(B5,{children:[a.jsx($5,{children:a.jsxs(uu,{children:[a.jsx(Lr,{children:"Type"}),a.jsx(Lr,{children:"Token"}),a.jsx(Lr,{children:"Amount"}),a.jsx(Lr,{children:"Price"}),a.jsx(Lr,{children:"Total"}),a.jsx(Lr,{children:"Date"})]})}),a.jsx("tbody",{children:t.recentTransactions.map(h=>{const m=h.type==="buy",p=new Date(h.date);return a.jsxs(uu,{children:[a.jsx(Br,{children:a.jsx(Z0,{isPositive:m,children:m?"Buy":"Sell"})}),a.jsx(Br,{children:a.jsxs("div",{children:[a.jsx(N5,{children:h.tokenName}),a.jsx(H5,{children:h.tokenSymbol})]})}),a.jsx(Br,{children:h.amount}),a.jsxs(Br,{children:["$",h.price.toFixed(2)]}),a.jsxs(Br,{children:["$",h.total.toLocaleString()]}),a.jsxs(Br,{children:[p.toLocaleDateString()," ",p.toLocaleTimeString()]})]},h.id)})})]})})]}):a.jsx(O5,{className:"container",children:a.jsxs(J0,{children:[a.jsx("h2",{children:"Please log in to view your portfolio"}),a.jsx("p",{children:"You need to be logged in to access your portfolio information."}),a.jsx(K0,{to:"/login",children:"Log In"})]})})},F5=f.div`
  padding: 2rem 0;
  width: 100%;
`,IN=f.div`
  margin-bottom: 2rem;
`,YN=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,qN=f.p`
  color: var(--color-text-secondary);
  max-width: 600px;
`,WN=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,em=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`,tm=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,rm=f.h3`
  font-size: 1.25rem;
  font-weight: 500;
`,nm=f.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,GN=f.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`,om=f.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>e.secondary?"transparent":"var(--color-accent)"};
  color: ${e=>e.secondary?"var(--color-accent)":"var(--color-background)"};
  border: ${e=>e.secondary?"1px solid var(--color-accent)":"none"};
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.secondary?"rgba(230, 200, 126, 0.1)":"var(--color-accent-hover)"};
  }
`,XN=f.div`
  display: flex;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
`,im=f.button`
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-accent)":"var(--color-text)"};
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: var(--color-accent);
  }
`,V5=f.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-text-secondary);
`,QN=()=>{const{currentUser:e}=Qo(),[t,n]=S.useState("transactions"),[o,s]=S.useState(null),[c,d]=S.useState(!0);S.useEffect(()=>{h()},[]);const h=async()=>{d(!0);try{s({balance:15e3,pendingDeposits:2500,pendingWithdrawals:0,transactions:[{id:1,type:"deposit",amount:5e3,status:"completed",date:"2025-06-15T14:32:21Z"},{id:2,type:"withdrawal",amount:1e3,status:"completed",date:"2025-06-10T09:45:17Z"},{id:3,type:"deposit",amount:2500,status:"pending",date:"2025-06-18T16:21:05Z"}]}),d(!1)}catch(m){console.error("Error fetching wallet data:",m),d(!1)}};return c?a.jsx("div",{className:"container",children:"Loading wallet..."}):e?a.jsxs(F5,{className:"container",children:[a.jsxs(IN,{children:[a.jsx(YN,{children:"My Wallet"}),a.jsx(qN,{children:"Manage your funds, make deposits and withdrawals"})]}),a.jsxs(WN,{children:[a.jsxs(em,{children:[a.jsx(tm,{children:a.jsx(rm,{children:"Available Balance"})}),a.jsxs(nm,{children:["$",o.balance.toLocaleString()]}),a.jsxs(GN,{children:[a.jsx(om,{children:"Deposit"}),a.jsx(om,{secondary:!0,children:"Withdraw"})]})]}),a.jsxs(em,{children:[a.jsx(tm,{children:a.jsx(rm,{children:"Pending Deposits"})}),a.jsxs(nm,{children:["$",o.pendingDeposits.toLocaleString()]})]}),a.jsxs(em,{children:[a.jsx(tm,{children:a.jsx(rm,{children:"Pending Withdrawals"})}),a.jsxs(nm,{children:["$",o.pendingWithdrawals.toLocaleString()]})]})]}),a.jsxs(XN,{children:[a.jsx(im,{active:t==="transactions",onClick:()=>n("transactions"),children:"Transactions"}),a.jsx(im,{active:t==="deposits",onClick:()=>n("deposits"),children:"Deposits"}),a.jsx(im,{active:t==="withdrawals",onClick:()=>n("withdrawals"),children:"Withdrawals"})]}),o.transactions.length===0?a.jsx(V5,{children:a.jsx("p",{children:"You don't have any transactions yet."})}):a.jsx("div",{children:a.jsx("p",{children:"Transaction history will be displayed here."})})]}):a.jsx(F5,{className:"container",children:a.jsxs(V5,{children:[a.jsx("h2",{children:"Please log in to view your wallet"}),a.jsx("p",{children:"You need to be logged in to access your wallet information."}),a.jsx(om,{as:st,to:"/login",children:"Log In"})]})})},U5=f.div`
  padding: 2rem 0;
  width: 100%;
`,ZN=f.div`
  margin-bottom: 2rem;
`,KN=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
  width: 100%;
  height: 450px;
`,JN=f.div`
  margin-bottom: 2rem;
`,eH=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`,tH=f.p`
  color: var(--color-text-secondary);
  max-width: 600px;
`,rH=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,nH=f.div`
  display: flex;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2rem;
`,I5=f.button`
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-accent)":"var(--color-text)"};
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: var(--color-accent);
  }
`,Y5=f.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,oH=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,za=f.div`
  display: flex;
  flex-direction: column;
`,Da=f.label`
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,Pa=f.input`
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,q5=f.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 1rem;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
  
  &:disabled {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    cursor: not-allowed;
  }
`,W5=f.div`
  color: var(--color-positive);
  background-color: rgba(39, 174, 96, 0.1);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin-bottom: 1.5rem;
`,G5=f.div`
  color: var(--color-negative);
  background-color: rgba(255, 87, 87, 0.1);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin-bottom: 1.5rem;
`,iH=f.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-text-secondary);
`,aH=()=>{const{currentUser:e,updateProfile:t,logout:n}=Qo(),[o,s]=S.useState("profile"),[c,d]=S.useState(!1),[h,m]=S.useState(""),[p,x]=S.useState(""),[v,y]=S.useState({firstName:(e==null?void 0:e.firstName)||"",lastName:(e==null?void 0:e.lastName)||"",email:(e==null?void 0:e.email)||"",currentPassword:"",newPassword:"",confirmPassword:""}),j=k=>{const{name:_,value:z}=k.target;y(D=>({...D,[_]:z}))},w=async k=>{k.preventDefault(),d(!0),m(""),x("");try{const _=await t({firstName:v.firstName,lastName:v.lastName});_.success?m("Profile updated successfully"):x(_.error||"Failed to update profile")}catch(_){x("An unexpected error occurred"),console.error("Profile update error:",_)}finally{d(!1)}},C=async k=>{if(k.preventDefault(),v.newPassword!==v.confirmPassword){x("New passwords do not match");return}if(v.newPassword.length<8){x("New password must be at least 8 characters long");return}d(!0),m(""),x("");try{({success:!0}).success&&(m("Password updated successfully"),y(z=>({...z,currentPassword:"",newPassword:"",confirmPassword:""})))}catch(_){x("An unexpected error occurred"),console.error("Password update error:",_)}finally{d(!1)}};return e?a.jsxs(U5,{className:"container",children:[a.jsxs(JN,{children:[a.jsx(eH,{children:"My Profile"}),a.jsx(tH,{children:"View and update your account information"})]}),a.jsx(ZN,{children:a.jsx(KN,{children:a.jsx(aS,{userId:e==null?void 0:e.id})})}),a.jsxs(rH,{children:[a.jsxs(nH,{children:[a.jsx(I5,{active:o==="profile",onClick:()=>s("profile"),children:"Profile Information"}),a.jsx(I5,{active:o==="security",onClick:()=>s("security"),children:"Security"})]}),o==="profile"&&a.jsxs(a.Fragment,{children:[h&&a.jsx(W5,{children:h}),p&&a.jsx(G5,{children:p}),a.jsxs(Y5,{onSubmit:w,children:[a.jsxs(oH,{children:[a.jsxs(za,{children:[a.jsx(Da,{htmlFor:"firstName",children:"First Name"}),a.jsx(Pa,{id:"firstName",name:"firstName",type:"text",value:v.firstName,onChange:j,required:!0})]}),a.jsxs(za,{children:[a.jsx(Da,{htmlFor:"lastName",children:"Last Name"}),a.jsx(Pa,{id:"lastName",name:"lastName",type:"text",value:v.lastName,onChange:j,required:!0})]})]}),a.jsxs(za,{children:[a.jsx(Da,{htmlFor:"email",children:"Email"}),a.jsx(Pa,{id:"email",name:"email",type:"email",value:v.email,disabled:!0})]}),a.jsx(q5,{type:"submit",disabled:c,children:c?"Updating...":"Update Profile"})]})]}),o==="security"&&a.jsxs(a.Fragment,{children:[h&&a.jsx(W5,{children:h}),p&&a.jsx(G5,{children:p}),a.jsxs(Y5,{onSubmit:C,children:[a.jsxs(za,{children:[a.jsx(Da,{htmlFor:"currentPassword",children:"Current Password"}),a.jsx(Pa,{id:"currentPassword",name:"currentPassword",type:"password",value:v.currentPassword,onChange:j,required:!0})]}),a.jsxs(za,{children:[a.jsx(Da,{htmlFor:"newPassword",children:"New Password"}),a.jsx(Pa,{id:"newPassword",name:"newPassword",type:"password",value:v.newPassword,onChange:j,required:!0})]}),a.jsxs(za,{children:[a.jsx(Da,{htmlFor:"confirmPassword",children:"Confirm New Password"}),a.jsx(Pa,{id:"confirmPassword",name:"confirmPassword",type:"password",value:v.confirmPassword,onChange:j,required:!0})]}),a.jsx(q5,{type:"submit",disabled:c,children:c?"Updating...":"Update Password"})]})]})]})]}):a.jsx(U5,{className:"container",children:a.jsxs(iH,{children:[a.jsx("h2",{children:"Please log in to view your profile"}),a.jsx("p",{children:"You need to be logged in to access your profile information."})]})})},sS=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`,sH=f.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,lH=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed) ease;
  
  ${sS}:hover & {
    transform: scale(1.05);
  }
`,cH=f.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
`,dH=f.div`
  padding: 1.25rem;
`,uH=f.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: var(--color-text);
`,hH=f.p`
  margin: 0 0 1rem 0;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`,fH=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  padding: 12px 16px;
  background-color: #111;
  color: white;
  border-top: none;
  margin-top: 0;
`,bl=f.div`
  display: flex;
  align-items: center;
  margin-right: ${e=>e.marginRight||"12px"};
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
`,hu=f.span`
  color: #999;
  font-size: 0.85rem;
  margin-right: 4px;
`,vl=f.span`
  color: white;
  font-weight: 600;
  font-size: 0.85rem;
`,pH=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: center;
  min-width: 100px;
`,lS=f.button`
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
  
  &:active {
    transform: translateY(0);
  }
`,mH=f(lS)`
  background-color: var(--color-accent, #3861fb);
  color: white;
`,gH=f(lS)`
  background-color: transparent;
  border: 1px solid var(--color-accent, #3861fb);
  color: var(--color-accent, #3861fb);
  white-space: nowrap;
`,xH=({property:e,badgeText:t="IPO"})=>{const n=o=>o>=1e6?`${(o/1e6).toFixed(1)}M`:o>=1e3?`${(o/1e3).toFixed(0)}K`:`${o.toFixed(0)}`;return a.jsx(sS,{children:a.jsxs(st,{to:`/ipo/${e.id}`,children:[a.jsxs(sH,{children:[a.jsx(lH,{src:e.imageUrl,alt:e.name}),a.jsx(cH,{children:t})]}),a.jsxs(dH,{children:[a.jsxs("div",{children:[a.jsx(uH,{children:e.name}),a.jsx(hH,{children:e.location})]}),a.jsxs(pH,{children:[a.jsx(mH,{children:"Pre-sale"}),a.jsx(gH,{children:"Viewings"})]})]}),a.jsxs(fH,{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[a.jsxs(bl,{children:[a.jsx(_g,{}),a.jsx(vl,{style:{marginLeft:"4px"},children:e.bedrooms||4}),a.jsx(hu,{children:" • "})]}),a.jsxs(bl,{children:[a.jsx(Tg,{}),a.jsx(vl,{style:{marginLeft:"4px"},children:e.bathrooms||3}),a.jsx(hu,{children:" • "})]}),a.jsxs(bl,{children:[a.jsx(zg,{}),a.jsx(vl,{style:{marginLeft:"4px"},children:e.carSpots||2}),a.jsx(hu,{children:" • "})]}),a.jsx(bl,{marginRight:"0",children:a.jsx(vl,{children:e.propertyType||"House"})})]}),a.jsx("div",{children:a.jsxs(bl,{align:"flex-end",marginRight:"0",children:[a.jsx(hu,{children:"Value "}),a.jsxs(vl,{style:{fontWeight:"700"},children:["$",n(e.targetRaise)]})]})})]})]})})},bH=({property:e})=>a.jsx(xH,{property:e,badgeText:"Public Sale Coming Soon"}),X5=f.div`
  padding: 2rem 0;
  width: 100%;
`,Q5=f.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`,Z5=f.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
`,vH=f.section`
  margin-bottom: 3rem;
`,yH=f.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,wH=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`,jH=()=>{const[e,t]=S.useState(null),[n,o]=S.useState([]),[s,c]=S.useState([]),[d,h]=S.useState(!0),m=async()=>{try{const v=await Ti.getFeaturedIPO();t(v.data)}catch(v){console.error("Error fetching featured IPO:",v)}},p=async()=>{try{const v=await Ti.getPresaleProperties();o(v.data)}catch(v){console.error("Error fetching presale properties:",v)}},x=async()=>{try{const v=await Ti.getRecentPurchases();c(v.data)}catch(v){console.error("Error fetching recent purchases:",v)}};return S.useEffect(()=>{(async()=>{h(!0),await Promise.all([m(),p(),x()]),h(!1)})()},[]),d?a.jsx(X5,{children:a.jsx("div",{children:"Loading IPO opportunities..."})}):a.jsxs(X5,{children:[a.jsxs(vH,{children:[a.jsx(Q5,{children:"Current IPO"}),a.jsx(Z5,{children:"Property currently in IPO - Allocation given on first come first serve bases"}),e&&a.jsx(Dg,{initialProperty:e,children:a.jsxs(yH,{children:[a.jsx(Xj,{property:e}),a.jsx(Eg,{purchases:s,autoUpdate:!0})]})})]}),a.jsxs("section",{children:[a.jsx(Q5,{children:"Upcoming IPOs"}),a.jsx(Z5,{children:"Properties in presale phase - Register your interest early"}),a.jsx(wH,{children:n.map(v=>a.jsx(bH,{property:v},v.id))})]})]})};Li.register(Wa,Ga,Di,fn,Bh,$h,Lh,Rh);const SH=f.div`
  width: 100%;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
`,kH=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,CH=f.h3`
  margin: 0;
  font-size: 1.25rem;
`,MH=f.div`
  display: flex;
  align-items: center;
`,_H=f.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
  color: white;
  
  .decimal {
    font-size: 0.9rem;
    font-weight: 500;
  }
`,TH=f.div`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  background-color: ${e=>e.isPositive?"rgba(0, 192, 118, 0.1)":"rgba(255, 87, 87, 0.1)"};
  color: ${e=>e.isPositive?"var(--color-positive)":"var(--color-negative)"};
`,zH=f.div`
  display: flex;
  margin-bottom: 1.5rem;
`,DH=f.button`
  padding: 0.5rem 1rem;
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"var(--color-background)":"var(--color-text)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: var(--border-radius);
  margin-right: 0.5rem;
  font-weight: 500;
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.05)"};
  }
`,PH=f.p`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-top: 1rem;
  line-height: 1.5;
  font-style: italic;
`,AH=f.div`
  margin-top: 2rem;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
`,EH=f.h4`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`,OH=f.div`
  position: relative;
  padding-left: 2rem;
  &:before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-border);
  }
`,RH=f.div`
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
`,LH=f.div`
  position: absolute;
  left: -2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--color-accent);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  line-height: 1.2;
  font-size: 0.85rem;
  transform: translateX(-50%);
  z-index: 2;
`,BH=f.div`
  text-transform: uppercase;
  font-size: 0.6rem;
  line-height: 1;
`,$H=f.div`
  font-size: 0.8rem;
  line-height: 1;
`,NH=f.div`
  background-color: rgba(62, 151, 255, 0.1);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  flex: 1;
`,HH=f.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  background-color: #4a5568;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,FH=f.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`,VH=f.div`
  font-size: 0.9rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: 500;
`,UH=f.div`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
`,IH=f.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
`,YH=f.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 1.5rem auto 0;
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(62, 151, 255, 0.1);
  }
`,un=125e3,io=3e7,zn=[{year:2021,month:2,day:15,price:25e6,get tokenPrice(){return Math.round(this.price/io*un)},get date(){return new Date(this.year,this.month,this.day)},get formattedDate(){return new Date(this.year,this.month,this.day).toLocaleDateString("en-US",{month:"long",year:"numeric"})}},{year:2010,month:6,day:22,price:15e6,get tokenPrice(){return Math.round(this.price/io*un)},get date(){return new Date(this.year,this.month,this.day)},get formattedDate(){return new Date(this.year,this.month,this.day).toLocaleDateString("en-US",{month:"long",year:"numeric"})}},{year:2e3,month:4,day:8,price:8e6,get tokenPrice(){return Math.round(this.price/io*un)},get date(){return new Date(this.year,this.month,this.day)},get formattedDate(){return new Date(this.year,this.month,this.day).toLocaleDateString("en-US",{month:"long",year:"numeric"})}}],qH=({propertyId:e})=>{const[t,n]=S.useState("1Y"),[o,s]=S.useState(null),[c,d]=S.useState(!0);(()=>{let j;switch(t){case"1Y":j=2024;break;case"3Y":j=2022;break;case"5Y":j=2020;break;case"10Y":j=2015;break;case"20Y":j=2005;break;default:j=2024}return zn.filter(w=>w.year>=j)})();const p={formatted:"125,000.00",change:(y=>{switch(y){case"1Y":return{isPositive:!0,percentage:"10.00"};case"3Y":return{isPositive:!0,percentage:"33.10"};case"5Y":return{isPositive:!0,percentage:"61.05"};case"10Y":return{isPositive:!0,percentage:"159.37"};case"20Y":return{isPositive:!0,percentage:"572.75"};default:return{isPositive:!0,percentage:"10.00"}}})(t)};S.useEffect(()=>{d(!0),setTimeout(()=>{const y=x(t);s(y),d(!1)},300)},[t,e]);const x=y=>{const j=[...zn].sort((me,pe)=>me.year-pe.year),w={},C={};zn.forEach(me=>{const pe=Math.round(me.price/io*un),be=`${me.year}-${me.month+1}-${me.day}`;w[be]={price:pe,propertyPrice:me.price,year:me.year,month:me.month,day:me.day,formattedDate:me.formattedDate},C[me.year]={price:pe,propertyPrice:me.price,formattedDate:me.formattedDate}});let k=[],_=[],z=un,D=j[0]?Math.round(j[0].price/io*un)*.7:3e4,L=135e3,A,V=[],E,F=[];const te=new Date(2025,5,28);switch(y){case"1D":E=24,A=.002;for(let R=0;R<E;R++){const Y=R,J=new Date(te);J.setHours(Y,0,0),k.push(J.toISOString()),V.push(`${Y.toString().padStart(2,"0")}:00`);const Q=R/E*.05,ue=(Math.random()-.5)*A,ce=D*(1+Q+ue);_.push(ce)}break;case"1W":E=7,A=.005;for(let R=0;R<E;R++){const Y=new Date(te);Y.setDate(Y.getDate()-(E-1)+R);const J=Y.toLocaleDateString("en-US",{weekday:"short"});k.push(Y.toISOString()),V.push(J);const Q=R/E*.08,ue=(Math.random()-.5)*A,ce=D*(1+Q+ue);_.push(ce)}break;case"1M":E=30,A=.01;for(let R=0;R<E;R++){const Y=new Date(te);Y.setDate(Y.getDate()-(E-1)+R);const J=Y.toLocaleDateString("en-US",{day:"numeric",month:"short"});k.push(Y.toISOString()),V.push(J);const Q=R/E*.15,ue=(Math.random()-.5)*A,ce=D*(1+Q+ue);_.push(ce)}break;case"3M":E=90,A=.015;for(let R=0;R<E;R++){const Y=new Date(te);Y.setDate(Y.getDate()-(E-1)+R);const J=Y.toLocaleDateString("en-US",{day:"numeric",month:"short"});k.push(Y.toISOString()),V.push(J);const Q=R/E*.25,ue=(Math.random()-.5)*A,ce=D*(1+Q+ue);_.push(ce)}break;case"1Y":E=12,A=.02;for(let R=0;R<E;R++){const Y=new Date(te.getFullYear(),te.getMonth()-(E-1)+R,1),J=Y.toLocaleDateString("en-US",{month:"short",year:"numeric"});k.push(Y.toISOString()),V.push(J);let Q;if(R<10){const ce=R/9*((L-D)/D),ve=(Math.random()-.5)*A;Q=D*(1+ce+ve)}else{const ue=(R-9)/2,ce=(L-z)/L*ue,ve=(Math.random()-.5)*A*.5;Q=L*(1-ce+ve)}_.push(Q)}break;case"3Y":E=12,A=.03;const me=z/Math.pow(1.1,3);for(let R=0;R<E;R++){const Y=R%4,J=Math.floor(R/4),Q=new Date(te.getFullYear()-3+J,Y*3,1),ue=`Q${Y+1} ${Q.getFullYear()}`;k.push(Q.toISOString()),V.push(ue);const ce=J+Y/4,ve=Math.pow(1.1,ce),Fe=(Math.random()-.5)*A,je=me*ve*(1+Fe);_.push(je)}break;case"5Y":E=10,A=.04;const pe=z/Math.pow(1.1,5);for(let R=0;R<E;R++){const Y=R%2,J=Math.floor(R/2),Q=new Date(te.getFullYear()-5+J,Y*6,1),ce=`${Y===0?"H1":"H2"} ${Q.getFullYear()}`;k.push(Q.toISOString()),V.push(ce);const ve=J+Y/2,Fe=Math.pow(1.1,ve),je=(Math.random()-.5)*A,Ye=pe*Fe*(1+je);_.push(Ye)}break;case"10Y":E=10,A=.05;const be=z/Math.pow(1.1,10);for(let R=0;R<E;R++){const Y=te.getFullYear()-10+R,J=zn.find(je=>je.year===Y),Q=J?J.month:0,ue=J?J.day:1,ce=new Date(Y,Q,ue),ve=ce.getFullYear().toString();k.push(ce.toISOString()),V.push(ve);let Fe;if(J)Fe=Math.round(J.price/io*un),F.push({index:R,year:Y,month:Q,day:ue,price:Fe,propertyPrice:J.price,formattedDate:J.formattedDate});else{const je=Math.pow(1.1,R),Ye=(Math.random()-.5)*A;Fe=be*je*(1+Ye)}_.push(Fe)}break;case"20Y":E=24,A=.08;const I=te.getFullYear()-20,H=te.getFullYear(),ee={};zn.forEach(R=>{if(R.year>=I&&R.year<=H){const Y=Math.round(R.price/io*un);ee[R.year]=Y}});const ne=[],P=[];for(let R=I;R<=H;R++){const Y=zn.find(ce=>ce.year===R),J=Y?Y.month:0,Q=Y?Y.day:1,ue=new Date(R,J,Q);if(ne.push(ue),Y){const ce=Math.round(Y.price/io*un);P.push(ce)}else P.push(null)}let $=D,G=-1;for(let R=0;R<P.length;R++)if(P[R]!==null){if(G!==-1&&R-G>1){const Y=P[R]-$,J=R-G;for(let Q=1;Q<J;Q++){const ue=Q/J,ce=$+Y*ue,ve=(Math.random()-.5)*A*ce;P[G+Q]=Math.round(ce+ve)}}$=P[R],G=R}if(G!==-1&&G<P.length-1){const R=P.length-1-G,J=z-$;for(let Q=1;Q<=R;Q++){const ue=Q/(R+1),ce=$+J*ue,ve=(Math.random()-.5)*A*ce;P[G+Q]=Math.round(ce+ve)}}if(P[0]===null){let R=P.findIndex(Y=>Y!==null);if(R===-1)for(let Y=0;Y<P.length;Y++){const J=Math.pow(1.12,Y),Q=(Math.random()-.5)*A;P[Y]=Math.round(D*J*(1+Q))}else{const Y=P[R],J=R;for(let Q=0;Q<J;Q++){const ue=Q/J,ce=D+(Y-D)*ue,ve=(Math.random()-.5)*A*ce;P[Q]=Math.round(ce+ve)}}}P[P.length-1]=z;for(let R=0;R<ne.length;R++){const Y=ne[R],J=Y.getFullYear().toString();k.push(Y.toISOString()),V.push(J),_.push(P[R]);const Q=zn.find(ue=>ue.year===Y.getFullYear()&&ue.month===Y.getMonth()&&ue.day===Y.getDate());if(Q){const ue=Math.round(Q.price/io*un);F.push({index:R,year:Q.year,month:Q.month,day:Q.day,price:ue,propertyPrice:Q.price,formattedDate:Q.formattedDate}),_[R]=ue}}break;default:return x("1D")}_[_.length-1]=z;const de=[];k.forEach((me,pe)=>{var be,I;try{if(me.includes("-")){const H=new Date(me),ee=H.getFullYear(),ne=H.getMonth(),P=H.getDate(),$=`${ee}-${ne+1}-${P}`;if(w[$])de.push({index:pe,year:ee,month:ne,day:P,price:w[$].price,propertyPrice:w[$].propertyPrice,formattedDate:w[$].formattedDate}),_[pe]=w[$].price;else if(C[ee]){const G=((be=zn.find(ue=>ue.year===ee))==null?void 0:be.month)||0,R=((I=zn.find(ue=>ue.year===ee))==null?void 0:I.day)||1,Y=new Date(ee,G,R),J=new Date(ee,ne,P);Math.abs((Y-J)/(1e3*60*60*24))<=15&&(de.find(ce=>ce.year===ee)||(de.push({index:pe,year:ee,month:G,day:R,price:C[ee].price,propertyPrice:C[ee].propertyPrice,formattedDate:C[ee].formattedDate}),_[pe]=C[ee].price))}}else if(V[pe]){const H=V[pe].match(/(\d{4})/);if(H){const ee=parseInt(H[0]);C[ee]&&(de.push({index:pe,year:ee,price:C[ee].price,propertyPrice:C[ee].propertyPrice,formattedDate:C[ee].formattedDate}),_[pe]=C[ee].price)}}}catch{}});const le=Array(_.length).fill(null);return de.forEach(me=>{le[me.index]=_[me.index]}),{labels:k,datasets:[{label:"Token Price",data:_,borderColor:"#3E97FF",backgroundColor:me=>{const pe=me.chart,{ctx:be,chartArea:I}=pe;if(!I)return"rgba(62, 151, 255, 0.2)";const H=be.createLinearGradient(0,I.bottom,0,I.top);return H.addColorStop(0,"rgba(62, 151, 255, 0)"),H.addColorStop(1,"rgba(62, 151, 255, 0.2)"),H},borderWidth:2,pointRadius:0,tension:.4,fill:"start"},{label:"Historical Sales",data:le,borderColor:"transparent",backgroundColor:"transparent",pointRadius:12,pointBackgroundColor:"#FFD700",pointBorderColor:"#B8860B",pointBorderWidth:2,pointStyle:"circle",pointHoverRadius:14,pointHoverBackgroundColor:"#FFD700",pointHoverBorderColor:"#B8860B",pointHoverBorderWidth:3,tension:0,fill:!1,pointShadowBlur:10,pointShadowColor:"rgba(255, 215, 0, 0.5)"}],tooltipLabels:V,salesPoints:de}},v={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{mode:"index",intersect:!1,backgroundColor:"rgba(20, 20, 30, 0.9)",titleColor:"#FFD700",titleFont:{weight:"bold",size:14},bodyColor:"#FFFFFF",bodyFont:{size:13},borderColor:"#FFD700",borderWidth:1,cornerRadius:6,padding:12,displayColors:!1,boxPadding:6,callbacks:{title:function(y){if(!o||!o.tooltipLabels)return"";const j=y[0].dataIndex;if(y[0].datasetIndex===1&&y[0].parsed.y!==null){const w=o.salesPoints&&o.salesPoints.find(C=>C.index===j);if(w)return`${w.formattedDate||w.year} - Property Sale`}return o.tooltipLabels[j]},label:function(y){if(y.datasetIndex===1&&y.parsed.y===null)return null;const j=y.parsed.y;if(!j&&j!==0)return null;const w=j,k=w*(3e7/un)/1e6;if(y.datasetIndex===1){const _=y.dataIndex,z=o.salesPoints&&o.salesPoints.find(D=>D.index===_);if(z)return[`Property Sale: $${(z.propertyPrice/1e6).toFixed(1)}M`,`Token Price: $${w.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`]}return[`Token Price: $${w.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`,`Property Value: $${k.toFixed(1)}M`]},afterLabel:function(y){return""}}}},scales:{x:{grid:{display:!1,drawBorder:!1},border:{display:!0,color:"rgba(255, 255, 255, 0.2)"},ticks:{color:function(y){const j=y.index;return o&&o.salesPoints&&o.salesPoints.some(C=>C.index===j)?"#FFD700":"rgba(255, 255, 255, 0.8)"},font:function(y){const j=y.index,w=o&&o.salesPoints&&o.salesPoints.some(C=>C.index===j);return{size:w?14:12,weight:w?"700":"600"}},padding:10,maxRotation:0,autoSkip:!1,callback:function(y,j){if(!o||!o.tooltipLabels)return"";const w=o.salesPoints&&o.salesPoints.some(z=>z.index===j),C=o.tooltipLabels.length;let k=!1,_="";if(w){k=!0;const z=o.salesPoints.find(D=>D.index===j);z&&z.formattedDate?_=z.formattedDate:_=o.tooltipLabels[j]}else{const z={"1D":()=>j%4===0||j===C-1?(k=!0,o.tooltipLabels[j].split(" ")[0]):"","1W":()=>j%1===0||j===C-1?(k=!0,o.tooltipLabels[j].split(" ")[0]):"","1M":()=>j%5===0||j===C-1?(k=!0,o.tooltipLabels[j]):"","3M":()=>j%15===0||j===C-1?(k=!0,o.tooltipLabels[j]):"","1Y":()=>(k=!0,o.tooltipLabels[j]),"3Y":()=>(k=!0,o.tooltipLabels[j]),"5Y":()=>(k=!0,o.tooltipLabels[j]),"10Y":()=>(k=!0,o.tooltipLabels[j]),"20Y":()=>j%2===0||j===C-1?(k=!0,o.tooltipLabels[j]):""};z[t]&&(_=z[t]())}return k?_:""}}},y:{grid:{color:"rgba(255, 255, 255, 0.1)",drawBorder:!1},ticks:{color:"rgba(255, 255, 255, 0.6)",font:{size:12,weight:"500"},callback:function(y){return"$"+y.toLocaleString()}}}},interaction:{mode:"index",intersect:!1},animation:{duration:500}};return a.jsxs(SH,{children:[a.jsxs(kH,{children:[a.jsx(CH,{children:"Modelled Historical Price"}),a.jsxs(MH,{children:[a.jsxs(_H,{isPositive:p.change.isPositive,children:["$",(()=>{const y=p.formatted.split(".");return a.jsxs(a.Fragment,{children:[y[0],y.length>1&&a.jsxs("span",{className:"decimal",children:[".",y[1]]})]})})()]}),a.jsxs(TH,{isPositive:p.change.isPositive,children:[p.change.isPositive?"+":"",p.change.percentage,"%"]})]})]}),a.jsx(zH,{children:["1Y","3Y","5Y","10Y","20Y"].map(y=>a.jsx(DH,{active:t===y,onClick:()=>n(y),children:y},y))}),a.jsx("div",{style:{height:"300px"},children:c?a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:a.jsx("div",{children:"Loading price chart..."})}):o?a.jsx(K4,{data:o,options:v}):a.jsx("div",{children:"No data available"})}),a.jsx(PH,{children:"This chart shows the modelled historical price of the property leading up to the IPO launch on June 28, 2025. The model incorporates past sales data and market trends to estimate how the property value reached its current token price of $125,000."}),a.jsxs(AH,{children:[a.jsx(EH,{children:"Property history"}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",marginBottom:"1.5rem"},children:[a.jsx("button",{style:{flex:1,padding:"0.75rem",background:"transparent",border:"none",borderBottom:"2px solid var(--color-accent)",color:"var(--color-text)",fontWeight:600,cursor:"pointer"},children:"ALL"}),a.jsx("button",{style:{flex:1,padding:"0.75rem",background:"transparent",border:"none",borderBottom:"1px solid var(--color-border)",color:"var(--color-text-secondary)",fontWeight:600,cursor:"pointer"},children:"SOLD"}),a.jsx("button",{style:{flex:1,padding:"0.75rem",background:"transparent",border:"none",borderBottom:"1px solid var(--color-border)",color:"var(--color-text-secondary)",fontWeight:600,cursor:"pointer"},children:"RENTED"})]}),a.jsx(OH,{children:zn.map((y,j)=>{const w=["MAR","JUN","MAY"],C=w[j%w.length];return a.jsxs(RH,{children:[a.jsxs(LH,{children:[a.jsx(BH,{children:C}),a.jsx($H,{children:y.year})]}),a.jsxs(NH,{children:[a.jsx(HH,{children:"SOLD"}),a.jsxs(FH,{children:["$",(y.price/1e6).toFixed(1),"M"]}),a.jsxs(VH,{children:["Implied token price: $",y.tokenPrice.toLocaleString()]}),a.jsxs(UH,{children:["Listed by Sydney Sotheby's International Realty",j%2===0?" - Double Bay":""]}),a.jsxs(IH,{children:[j%2===0?"16":"18"," days listed"]})]})]},y.year)})}),a.jsx(YH,{children:"View more results"})]})]})]})},WH=f.span`
  font-weight: 600;
  color: #ffffff;
`,GH=()=>{const[e,t]=S.useState(10742);S.useEffect(()=>{const o=setInterval(()=>{t(s=>{const c=Math.floor(Math.random()*15)+1;return s+c})},Math.random()*3e3+2e3);return()=>clearInterval(o)},[]);const n=e.toLocaleString();return a.jsxs(WH,{children:[n," ahead"]})},fh=f.div`
  padding: 2rem 0;
  width: 100%;
`,cS=f(st)`
  display: inline-flex;
  align-items: center;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  font-size: 0.875rem;
  text-decoration: none;
  
  &:hover {
    color: var(--color-accent);
  }
  
  svg {
    margin-right: 0.5rem;
  }
`,XH=f.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`,QH=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`,ZH=f.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
`,KH=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-accent);
  color: var(--color-background);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  width: fit-content;
  min-width: 150px;
`,JH=f.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-left: 12px;
`,eF=f.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: ${e=>e.isSubscribed?"#e74c3c":"#2ecc71"};
  border-radius: 50%;
  box-shadow: ${e=>e.isSubscribed?"0 0 6px 1px #e74c3c":"0 0 6px 1px #2ecc71"};
  animation: ${e=>e.isSubscribed?"pulseRed":"pulseGreen"} 1.5s infinite;
  
  @keyframes pulseGreen {
    0% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(46, 204, 113, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
    }
  }
  
  @keyframes pulseRed {
    0% {
      box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(231, 76, 60, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(231, 76, 60, 0);
    }
  }
`,tF=f.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,rF=f.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,nF=f.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Aa=f.section`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`,K5=f.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`,oF=f.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
`,iF=f.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
  z-index: 5;
`,am=f.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  }
`,aF=f.p`
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,J5=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
`,ln=f.div`
  display: flex;
  flex-direction: column;
`,cn=f.span`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`,dn=f.span`
  color: var(--color-text);
  font-weight: 600;
  font-size: 1.125rem;
`,sF=f(dn)`
  color: var(--color-gold, #E6C75F);
  font-weight: 700;
`,lF=f(dn)`
  color: var(--color-accent);
`,cF=f.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`,dF=f.li`
  display: flex;
  align-items: center;
  
  &::before {
    content: '✓';
    display: inline-block;
    margin-right: 0.5rem;
    color: var(--color-accent);
    font-weight: bold;
  }
`,uF=f.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,hF=f.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
  
  a {
    display: flex;
    align-items: center;
    color: var(--color-text);
    text-decoration: none;
    
    &:hover {
      color: var(--color-accent);
    }
    
    svg {
      margin-right: 0.75rem;
      color: var(--color-text-secondary);
    }
  }
`,fF=f.div`
  margin-bottom: 1.5rem;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;f.span`
margin-left: auto;
font-weight: 600;
`;const pF=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,mF=f.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-secondary);
`,gF=f.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
`,xF=f(st)`
  display: block;
  width: 100%;
  background-color: ${e=>e.disabled?"#999":"var(--color-accent)"};
  color: var(--color-background);
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 2rem;
  text-decoration: none;
  transition: background-color 0.2s;
  pointer-events: ${e=>e.disabled?"none":"auto"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};

  &:hover {
    background-color: ${e=>e.disabled?"#999":"var(--color-accent-hover)"};
    color: var(--color-background);
  }
`,bF=()=>{var h,m;const{property:e,isFullySubscribed:t}=ql(),[n,o]=S.useState([]);if(S.useEffect(()=>{(async()=>{if(e&&e.id&&e.subscriptionPercentage!==void 0)try{const x=await Ti.getRecentPurchases(e.id);o(x.data)}catch(x){console.error("Error fetching recent purchases:",x)}})()},[e]),!e)return a.jsx(fh,{children:a.jsx("div",{children:"Property not found"})});const s=e.subscriptionPercentage!==void 0,c=p=>p>=1e6?`$${(p/1e6).toFixed(1)}M`:p>=1e3?`$${(p/1e3).toFixed(0)}K`:`$${p.toFixed(0)}`,d=p=>{const x={year:"numeric",month:"long",day:"numeric"};return new Date(p).toLocaleDateString(void 0,x)};return a.jsxs(fh,{children:[a.jsxs(cS,{to:"/ipo",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back to IPO Opportunities"]}),a.jsxs(XH,{children:[a.jsx(QH,{children:e.name}),a.jsx(ZH,{children:e.location}),a.jsx(KH,{children:s?a.jsxs(a.Fragment,{children:["Public IPO",a.jsxs(JH,{children:[e.subscriptionPercentage>=100?"CLOSED":"LIVE",a.jsx(eF,{isSubscribed:e.subscriptionPercentage>=100})]})]}):"IPO Coming Soon"})]}),a.jsxs(tF,{children:[a.jsxs(rF,{children:[a.jsxs(Aa,{children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx(oF,{src:e.imageUrl,alt:e.name}),a.jsxs(iF,{children:[a.jsx(am,{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M4 5h16v14H4V5zm15 13V6H5v12h14zM7 13l3-3 2 2 3-3 2 2v3H7v-1z"})})}),a.jsx(am,{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V9.5l6 3.5-6 3.5z"})})}),a.jsx(am,{children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("path",{d:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"}),a.jsx("path",{d:"M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z"}),a.jsx("path",{d:"M18 12a6 6 0 0 0-6-6v2a4 4 0 0 1 4 4h2z"})]})})]})]}),a.jsx(aF,{children:e.description}),s&&a.jsx(rh,{percentage:e.subscriptionPercentage,raisedAmount:e.raisedAmount,targetAmount:e.targetRaise,animate:!1}),a.jsxs(J5,{children:[a.jsxs(ln,{children:[a.jsx(cn,{children:"Token Price"}),a.jsxs(lF,{children:["$",(h=e.tokenPrice)==null?void 0:h.toLocaleString()]})]}),a.jsxs(ln,{children:[a.jsx(cn,{children:"IPO Valuation"}),a.jsx(dn,{children:"$30M"})]}),a.jsxs(ln,{children:[a.jsx(cn,{children:"Property Valuation"}),a.jsx(dn,{children:"$30M"})]}),a.jsxs(ln,{children:[a.jsx(cn,{children:"Property Size"}),a.jsxs(dn,{children:[(m=e.propertySize)==null?void 0:m.toLocaleString()," m²"]})]}),a.jsxs(ln,{children:[a.jsx(cn,{children:"Year Built"}),a.jsx(dn,{children:e.yearBuilt})]}),s&&a.jsxs(ln,{children:[a.jsx(cn,{children:"IPO Closes"}),a.jsx(dn,{children:d(e.ipoEndDate)})]}),!s&&a.jsxs(ln,{children:[a.jsx(cn,{children:"IPO Starts"}),a.jsx(dn,{children:d(e.ipoStartDate)})]})]})]}),e.features&&a.jsxs(a.Fragment,{children:[a.jsx(Aa,{children:a.jsx(qH,{propertyId:e.id})}),a.jsxs(Aa,{children:[a.jsx(K5,{children:"Property Features"}),a.jsx(cF,{children:e.features.map((p,x)=>a.jsx(dF,{children:p},x))})]})]}),e.documents&&a.jsxs(Aa,{children:[a.jsx(K5,{children:"Investment Documents"}),a.jsx(uF,{children:e.documents.map((p,x)=>a.jsx(hF,{children:a.jsxs("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a.jsx("polyline",{points:"14 2 14 8 20 8"}),a.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),a.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),a.jsx("polyline",{points:"10 9 9 9 8 9"})]}),p.name]})},x))})]})]}),a.jsxs(nF,{children:[a.jsxs(Aa,{children:[a.jsx(fF,{children:a.jsx(rh,{percentage:e.subscriptionPercentage,raisedAmount:e.raisedAmount||e.subscriptionPercentage*e.targetRaise/100,targetAmount:e.targetRaise||125e5,height:"10px",borderRadius:"5px"})}),a.jsxs(J5,{children:[a.jsxs(ln,{children:[a.jsx(cn,{children:"Token Price"}),a.jsxs(sF,{children:["$",e.tokenPrice.toLocaleString()]})]}),a.jsxs(ln,{children:[a.jsx(cn,{children:"Property Valuation"}),a.jsx(dn,{children:"$30M"})]}),a.jsxs(ln,{children:[a.jsx(cn,{children:"Max Investment"}),a.jsx(dn,{children:c(e.minInvestment)})]}),a.jsxs(ln,{children:[a.jsx(cn,{children:"Closing Date"}),a.jsx(dn,{children:"15 July 2025"})]})]}),s&&a.jsxs(a.Fragment,{children:[a.jsxs(pF,{children:[a.jsx(mF,{children:"Subscription Queue"}),a.jsx(gF,{children:a.jsx(GH,{})})]}),a.jsx(xF,{to:e.subscriptionPercentage>=100?"#":`/ipo/${e.id}/buy`,disabled:e.subscriptionPercentage>=100,children:e.subscriptionPercentage>=100?"FULLY SUBSCRIBED":"Subscribe"})]})]}),s&&a.jsx(Aa,{children:a.jsx(Eg,{purchases:n,autoUpdate:!0})})]})]})]})},vF=()=>{const{id:e}=dg(),[t,n]=S.useState(null),[o,s]=S.useState(!0),[c,d]=S.useState(null);return S.useEffect(()=>{e?(async()=>{s(!0);try{console.log("Fetching IPO details for ID:",e);const m=await Ti.getIPOById(e);console.log("IPO details response:",m),m&&m.data?n(m.data):(d("No data returned from getIPOById"),console.error("No data returned from getIPOById"))}catch(m){d(`Error fetching IPO details: ${m.message}`),console.error("Error fetching IPO details:",m)}finally{s(!1)}})():(d("No IPO ID provided in URL parameters"),console.error("No IPO ID provided in URL parameters"),s(!1))},[e]),o?a.jsx(fh,{children:a.jsx("div",{children:"Loading property details..."})}):c||!t?a.jsxs(fh,{children:[a.jsxs(cS,{to:"/ipo",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back to IPO Opportunities"]}),a.jsx("div",{style:{marginTop:"2rem",color:"var(--color-text-secondary)"},children:c||"Property not found"})]}):a.jsx(Dg,{initialProperty:t,children:a.jsx(bF,{})})};f.div`
  background-color: #1e2329;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;f.h2`
  font-size: 24px;
  color: #eaecef;
  margin-bottom: 24px;
  text-align: center;
`;f.div`
  margin-bottom: 20px;
`;f.label`
  display: block;
  font-size: 14px;
  color: #b7bdc6;
  margin-bottom: 8px;
`;f.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  background-color: #2b3139;
  border: 1px solid #474d57;
  border-radius: 4px;
  color: #eaecef;
  transition: all 0.2s;
  
  &:focus {
    border-color: #f0b90b;
    outline: none;
  }
  
  &::placeholder {
    color: #5e6673;
  }
`;f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
`;f.span`
  color: #b7bdc6;
`;f.span`
  color: #eaecef;
  font-weight: 500;
`;f.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  padding-top: 16px;
  border-top: 1px solid #2b3139;
  font-size: 16px;
`;f.span`
  color: #eaecef;
  font-weight: 500;
`;f.span`
  color: #f0b90b;
  font-weight: 600;
  font-size: 18px;
`;f.button`
  width: 100%;
  padding: 14px;
  background-color: #f0b90b;
  color: #0b0e11;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f8d12f;
  }
  
  &:disabled {
    background-color: #5e6673;
    cursor: not-allowed;
  }
`;f.div`
  color: #f6465d;
  font-size: 14px;
  margin-top: 8px;
`;f.div`
  color: #0ecb81;
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`;f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  padding-top: 100px;
`;f(st)`
  display: flex;
  align-items: center;
  color: #b7bdc6;
  font-size: 14px;
  margin-bottom: 24px;
  text-decoration: none;
  
  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    color: #f0b90b;
  }
`;f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;f.div`
  background-color: #1e2329;
  border-radius: 8px;
  overflow: hidden;
`;f.div`
  width: 100%;
  height: 240px;
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  position: relative;
`;f.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #f0b90b;
  color: #0b0e11;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
`;f.div`
  padding: 24px;
`;f.h1`
  font-size: 24px;
  color: #eaecef;
  margin-bottom: 8px;
`;f.p`
  color: #b7bdc6;
  font-size: 14px;
  margin-bottom: 16px;
`;f.p`
  color: #eaecef;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
`;f.div`
  margin-top: 24px;
`;f.h3`
  font-size: 16px;
  color: #eaecef;
  margin-bottom: 16px;
`;const sm=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  padding-top: 100px;
`,yF=f(st)`
  display: flex;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 14px;
  margin-bottom: 24px;
  text-decoration: none;
  
  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    color: var(--color-accent);
  }
`,wF=f.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 32px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,jF=f.div`
  background-color: var(--color-card);
  border-radius: ${e=>e.fullscreen?"0":"var(--border-radius)"};
  overflow: hidden;
  height: ${e=>e.fullscreen?"100vh":"600px"};
  position: ${e=>e.fullscreen?"fixed":"relative"};
  top: ${e=>e.fullscreen?"0":"auto"};
  left: ${e=>e.fullscreen?"0":"auto"};
  right: ${e=>e.fullscreen?"0":"auto"};
  bottom: ${e=>e.fullscreen?"0":"auto"};
  z-index: ${e=>e.fullscreen?"1000":"1"};
  width: ${e=>e.fullscreen?"100%":"auto"};
`,SF=f.div`
  display: flex;
  background-color: var(--color-background-secondary);
  border-radius: ${e=>e.fullscreen?"0":"var(--border-radius) var(--border-radius) 0 0"};
`,fu=f.div`
  padding: 12px 24px;
  cursor: pointer;
  font-weight: 500;
  color: ${e=>e.active?"var(--color-accent)":"var(--color-text-secondary)"};
  border-bottom: 2px solid ${e=>e.active?"var(--color-accent)":"transparent"};
  
  &:hover {
    color: ${e=>e.active?"var(--color-accent)":"var(--color-text)"};
  }
`,kF=f.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 8px;
  z-index: 10;
`,CF=f.div`
  position: absolute;
  top: 70px;
  right: 20px; /* Moved to right side */
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`,MF=f.div`
  position: absolute;
  top: 70px; /* Moved lower to avoid top notice bar */
  left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  padding: 12px;
  color: white;
  z-index: 20;
  display: ${e=>e.show?"block":"none"};
  width: 280px;
`,_F=f.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    color: var(--color-accent);
  }
`,TF=f.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
`,zF=f.div`
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin-bottom: 8px;
`,DF=f.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>e.percentage}%;
  background-color: var(--color-accent);
  border-radius: 2px;
`,ew=f.div`
  font-size: 12px;
  opacity: 0.8;
  text-align: right;
`;f.button`
  background-color: var(--color-accent);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--border-radius);
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #d4b64c;
  }
  
  &:active {
    background-color: #c4a73d;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;const PF=f.button`
  background-color: var(--color-accent);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--border-radius);
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  
  &:hover {
    background-color: #d4b64c;
  }
  
  &:active {
    background-color: #c4a73d;
  }
`,dS=f.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,uS=f.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  padding: 24px;
  width: 90%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,tw=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,AF=f.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`,rw=f.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`,lm=f.button`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s;
  
  &:hover {
    border-color: var(--color-accent);
  }
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    color: var(--color-accent);
  }
`,cm=f.div`
  flex: 1;
  
  h4 {
    margin: 0 0 4px 0;
    font-size: 16px;
    font-weight: 500;
  }
  
  p {
    margin: 0;
    font-size: 12px;
    color: var(--color-text-secondary);
  }
`,EF=f(dS)`
  z-index: 1100; // Higher than deposit modal
`,OF=f(uS)`
  text-align: center;
  max-width: 550px;
`,RF=f.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--color-accent);
`,LF=f.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin: 16px 0;
`,BF=f.div`
  margin: 24px 0;
  text-align: left;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 16px;
`,pu=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,mu=f.span`
  color: var(--color-text-secondary);
`,gu=f.span`
  font-weight: 500;
`,$F=f.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
`,nw=f.button`
  flex: 1;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.2s;
  
  &:hover {
    border-color: var(--color-accent);
  }
  
  svg {
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    color: var(--color-accent);
  }
`,ow=f.span`
  font-size: 14px;
  font-weight: 500;
`,NF=f.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`,HF=f.button`
  flex: 1;
  background-color: var(--color-background-secondary);
  color: var(--color-text);
  border: none;
  border-radius: var(--border-radius);
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--color-background-dark);
  }
`,FF=f.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`,VF=f.div`
  margin-bottom: 12px;
`,UF=f.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin-bottom: 8px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: waveShimmer 2s infinite;
  }
  
  @keyframes waveShimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,IF=f.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>e.percentage}%;
  background: linear-gradient(90deg, #E6C656 0%, #f0b90b 100%); /* Gold gradient */
  border-radius: 4px;
  transition: width 1s ease;
`,YF=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,qF=f.div`
  font-weight: 600;
  color: #E6C656; /* Gold color from the screenshot */
  font-size: 14px;
`,WF=f.div`
  font-weight: 600;
  color: white;
  font-size: 14px;
`,GF=f.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
`,xu=f.div`
  display: flex;
  flex-direction: column;
`,bu=f.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 4px;
`,Wu=f.span`
  font-size: 14px;
  font-weight: 600;
  color: white;
`,XF=f(Wu)`
  color: #E6C656; /* Gold color for token price */
`,dm=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${e=>e.active?"var(--color-background)":"white"};
  background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  
  svg {
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    background-color: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.1)"};
  }
`,QF=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: fit-content;
`,ZF=f.h2`
  font-size: 20px;
  color: var(--color-text);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
    color: var(--color-accent);
  }
`,KF=f.p`
  color: var(--color-text-secondary);
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.6;
`,JF=f.h3`
  font-size: 18px;
  color: var(--color-text);
  margin-bottom: 4px;
`,eV=f.p`
  color: var(--color-text-secondary);
  font-size: 14px;
  margin-bottom: 24px;
`,tV=f.div`
  margin-bottom: 24px;
`,rV=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
`;f.span`
  margin-left: 6px;
  font-size: 12px;
  font-weight: 500;
  color: ${e=>e.isIncrease?"var(--color-positive)":"var(--color-negative)"};
  opacity: ${e=>e.isVisible?1:0};
  transition: opacity 0.5s ease;
`;const nV=f.span`
  color: var(--color-text);
  font-weight: 600;
`,oV=f.span`
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
`,iV=f.div`
  height: 8px;
  background-color: var(--color-background-secondary);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: waveShimmer 2s infinite;
  }
  
  @keyframes waveShimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,aV=f.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>e.percentage}%;
  background: linear-gradient(90deg, var(--color-accent) 0%, #f0b90b 100%);
  border-radius: 4px;
  transition: width 1s ease;
`,sV=f.div`
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius);
  padding: 16px;
  margin-bottom: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`,iw=f.div`
  color: var(--color-text-secondary);
  font-size: 12px;
  margin-bottom: 4px;
`,lV=f.div`
  color: var(--color-text);
  font-size: 20px;
  font-weight: 600;
`,cV=f.div`
  color: var(--color-accent);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
`,dV=f.div`
  width: 100%;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 16px;
  margin-top: 16px;
`,uV=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-dark);
  padding: 12px 16px;
  border-radius: var(--border-radius);
  margin-bottom: 4px;
`,hV=f.span`
  color: var(--color-text-secondary);
`,fV=f.span`
  font-weight: 600;
`,pV=f.button`
  background: none;
  border: none;
  color: var(--color-accent);
  font-size: 12px;
  padding: 0;
  margin: 0 0 12px 0;
  cursor: pointer;
  text-align: right;
  display: block;
  width: 100%;
  
  &:hover {
    text-decoration: underline;
  }
`,aw=f.div`
  margin-bottom: 16px;
`,sw=f.label`
  display: block;
  margin-bottom: 8px;
  color: var(--color-text-secondary);
`,lw=f.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius);
  overflow: hidden;
`,cw=f.input`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  border: none;
  color: var(--color-text);
  font-size: 16px;
  &:focus {
    outline: none;
  }
`,dw=f.span`
  padding-right: 12px;
  color: var(--color-text-secondary);
  font-weight: 500;
`,mV=f.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 8px;
`,gV=f.button`
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: var(--border-radius);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,um=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: ${e=>e.noBorder?"none":"1px solid rgba(255, 255, 255, 0.1)"};
`,hm=f.span`
  color: var(--color-text-secondary);
`,fm=f.span`
  font-weight: 500;
`,uw=f.button`
  width: 100%;
  padding: 14px;
  background-color: var(--color-accent);
  color: #000;
  border: none;
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`,xV=f.button`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: auto;
  
  &:hover {
    background-color: var(--color-background-secondary);
  }
`,bV=f.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  
  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    color: var(--color-accent);
  }
`,vV=f.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  padding: 8px;
`,vu=f.div`
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`,yV=f.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  
  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    color: var(--color-accent);
  }
`,wV=f.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-card);
  padding: 24px;
  overflow-y: auto;
`,jV=f.div`
  margin-bottom: 24px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 16px;
`,SV=f.h2`
  font-size: 24px;
  color: var(--color-text);
  margin-bottom: 8px;
`,kV=f.p`
  color: var(--color-text-secondary);
  font-size: 16px;
`,CV=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Bo=f.div`
  display: flex;
  flex-direction: column;
`,$o=f.span`
  color: var(--color-text-secondary);
  font-size: 12px;
  margin-bottom: 4px;
`,No=f.span`
  color: var(--color-text);
  font-size: 16px;
  font-weight: 600;
`,MV=f.p`
  color: var(--color-text);
  font-size: 14px;
  line-height: 1.6;
  margin-top: 24px;
  border-top: 1px solid var(--color-border);
  padding-top: 24px;
`,_V=f.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,TV=f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 24px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,zV=f.h3`
  font-size: 20px;
  color: var(--color-text);
  margin-bottom: 12px;
`,DV=f.p`
  color: var(--color-text-secondary);
  font-size: 16px;
  margin-bottom: 24px;
`,PV=f.div`
  display: flex;
  gap: 12px;
`,AV=f.button`
  background-color: var(--color-negative);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 12px 16px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    background-color: #d32f2f;
  }
`,EV=f.button`
  background-color: var(--color-background-secondary);
  color: var(--color-text);
  border: none;
  border-radius: var(--border-radius);
  padding: 12px 16px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    background-color: var(--color-border);
  }
`,OV=()=>{var xe,Ae,Oe,Ke,nt,Bt,gt;const{id:e}=dg(),[t,n]=S.useState(null),[o,s]=S.useState(!0),[c,d]=S.useState(null),[h,m]=S.useState(1e3),[p,x]=S.useState(12500),[v,y]=S.useState("0:45"),[j,w]=S.useState(0),[C,k]=S.useState(!1),[_,z]=S.useState(!1),[D,L]=S.useState(!1),[A,V]=S.useState(76.4),[E,F]=S.useState(96e5),[te,de]=S.useState(125e5),[le,fe]=S.useState(125e3),[me,pe]=S.useState("$30M"),[be,I]=S.useState("$625K"),[H,ee]=S.useState("15 July 2025"),[ne,P]=S.useState(8e4),[$,G]=S.useState(""),[R,Y]=S.useState(0),[J,Q]=S.useState(!1),[ue,ce]=S.useState(!1),[ve,Fe]=S.useState(0),[je,Ye]=S.useState(5*60),[Qe,ir]=S.useState(!1),[Nr,gr]=S.useState(10753),Ze=Ne=>{const qe=Math.floor(Ne/60),wt=Ne%60;return`${qe}:${wt<10?"0":""}${wt}`},[rt,zt]=S.useState("vr"),[Dt,Pt]=S.useState("interior");if(S.useEffect(()=>{const qe=setInterval(()=>{m(tr=>{if(tr<=0)return clearInterval(qe),0;let xr;const Wt=Math.random();return Wt<.6?xr=Math.floor(Math.random()*11)+10:Wt<.9?xr=Math.floor(Math.random()*21)+20:xr=Math.floor(Math.random()*21)+40,Math.max(0,tr-xr)}),x(tr=>{if(Math.random()<.4){const Wt=Math.floor(Math.random()*31)+10;return w(Wt),k(!0),setTimeout(()=>k(!1),2e3),tr+Wt}else{const Wt=Math.floor(Math.random()*21)+5;return w(-Wt),k(!0),setTimeout(()=>k(!1),2e3),Math.max(h+100,tr-Wt)}});const wt=Math.ceil(h/22.22),Vt=Math.floor(wt/60),ar=wt%60;y(`${Vt}:${ar.toString().padStart(2,"0")}`)},1e3);return()=>clearInterval(qe)},[h,e]),S.useEffect(()=>{const Ne=qe=>{qe.key==="Escape"&&D&&L(!1)};return document.addEventListener("keydown",Ne),()=>{document.removeEventListener("keydown",Ne)}},[D]),S.useEffect(()=>{let Ne;return h===0&&!Qe&&(ir(!0),Ye(5*60)),Qe&&je>0?Ne=setInterval(()=>{Ye(qe=>qe-1)},1e3):je===0&&ir(!1),()=>{Ne&&clearInterval(Ne)}},[h,Qe,je]),S.useEffect(()=>{if(A<100){const Ne=setInterval(()=>{V(qe=>{const wt=Math.random()*.15+.05,Vt=Math.min(qe+wt,100),ar=Vt/100*te;return F(ar),Vt})},3e3);return()=>clearInterval(Ne)}},[A,te]),S.useEffect(()=>{(async()=>{try{const qe=await o4(e);n(qe.data),s(!1)}catch(qe){console.error("Error fetching IPO property:",qe),d("Failed to load property details"),s(!1)}})()},[e]),o)return a.jsx(sm,{children:a.jsx("div",{style:{textAlign:"center",padding:"100px 0"},children:a.jsx("div",{children:"Loading property details..."})})});if(c||!t)return a.jsx(sm,{children:a.jsx("div",{style:{textAlign:"center",padding:"100px 0",color:"var(--color-negative)"},children:c||"Property not found"})});const ge=Math.max(0,Math.min(100,(p-h)/p*100));return a.jsxs(sm,{children:[a.jsxs(yF,{to:`/ipo/${e}`,children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back to Property Details"]}),a.jsxs(wF,{children:[a.jsxs(jF,{fullscreen:D,children:[a.jsxs(SF,{fullscreen:D,children:[a.jsx(fu,{active:rt==="vr",onClick:()=>zt("vr"),children:"Virtual Tour"}),a.jsx(fu,{active:rt==="photos",onClick:()=>zt("photos"),children:"Photos"}),a.jsx(fu,{active:rt==="video",onClick:()=>zt("video"),children:"Video"}),a.jsx(fu,{active:rt==="details",onClick:()=>zt("details"),children:"Details"})]}),a.jsx(CF,{onClick:()=>L(!D),children:D?a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"})}):a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})})}),a.jsxs(MF,{show:D,children:[a.jsxs(_F,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M22 10v8h-2v-8h-4V8h10v2h-4zm-2-6H4v2h16V4zm0 4H4v8h10v2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2z"})}),"Queue Position"]}),a.jsxs(TF,{children:["Position: ",h," of ",p]}),a.jsx(zF,{children:a.jsx(DF,{percentage:ge})}),h>0?a.jsxs(ew,{children:["Est. wait: ",v]}):a.jsxs(a.Fragment,{children:[a.jsx(ew,{style:{color:"#E6C656",fontWeight:"bold"},children:"Your turn!"}),a.jsx(PF,{onClick:()=>L(!1),children:"Purchase Now"})]}),a.jsxs(FF,{children:[a.jsxs(VF,{children:[a.jsx(UF,{children:a.jsx(IF,{percentage:A})}),a.jsxs(YF,{children:[a.jsxs(qF,{children:[A.toFixed(1),"% Subscribed"]}),a.jsxs(WF,{children:["$",(E/1e6).toFixed(1),"M / $",(te/1e6).toFixed(1),"M"]})]})]}),a.jsxs(GF,{children:[a.jsxs(xu,{children:[a.jsx(bu,{children:"Token Price"}),a.jsxs(XF,{children:["$",le.toLocaleString()]})]}),a.jsxs(xu,{children:[a.jsx(bu,{children:"Property Valuation"}),a.jsx(Wu,{children:me})]}),a.jsxs(xu,{children:[a.jsx(bu,{children:"Max Investment"}),a.jsx(Wu,{children:be})]}),a.jsxs(xu,{children:[a.jsx(bu,{children:"Closing Date"}),a.jsx(Wu,{children:H})]})]})]})]}),rt==="vr"&&a.jsxs(a.Fragment,{children:[a.jsxs(bV,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12zM9 10v6l5-3z"})}),a.jsx("div",{children:"Virtual Reality Tour"}),a.jsxs("div",{style:{fontSize:"14px",color:"#aaa",marginTop:"8px"},children:[Dt==="interior"&&"Explore the interior of the property",Dt==="exterior"&&"View the exterior and surroundings",Dt==="drone"&&"Aerial drone view of the property"]})]}),a.jsxs(kF,{children:[a.jsxs(dm,{active:Dt==="interior",onClick:()=>Pt("interior"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"})}),"Interior"]}),a.jsxs(dm,{active:Dt==="exterior",onClick:()=>Pt("exterior"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M17 12h2L12 3 2 12h2v8h2v-2h12v2h2v-8zm-5 2v-2h2v2h-2zm-4-2h2v2H8v-2z"})}),"Exterior"]}),a.jsxs(dm,{active:Dt==="drone",onClick:()=>Pt("drone"),children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"})}),"Drone View"]})]})]}),rt==="photos"&&a.jsxs(vV,{children:[a.jsx(vu,{image:t.imageUrl}),a.jsx(vu,{image:((xe=t.images)==null?void 0:xe[1])||t.imageUrl}),a.jsx(vu,{image:((Ae=t.images)==null?void 0:Ae[2])||t.imageUrl}),a.jsx(vu,{image:((Oe=t.images)==null?void 0:Oe[3])||t.imageUrl})]}),rt==="video"&&a.jsxs(yV,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"})}),a.jsx("div",{children:"Property Video Tour"})]}),rt==="details"&&a.jsxs(wV,{children:[a.jsxs(jV,{children:[a.jsx(SV,{children:t.name}),a.jsx(kV,{children:t.location})]}),a.jsxs(CV,{children:[a.jsxs(Bo,{children:[a.jsx($o,{children:"Property Value"}),a.jsxs(No,{children:["$",((Ke=t.propertyValue)==null?void 0:Ke.toLocaleString())||"5,750,000"]})]}),a.jsxs(Bo,{children:[a.jsx($o,{children:"Token Price"}),a.jsxs(No,{children:["$",t.tokenPrice||"57.50"]})]}),a.jsxs(Bo,{children:[a.jsx($o,{children:"Total Tokens"}),a.jsx(No,{children:((nt=t.totalTokens)==null?void 0:nt.toLocaleString())||"100,000"})]}),a.jsxs(Bo,{children:[a.jsx($o,{children:"Maximum Investment"}),a.jsxs(No,{children:["$",((Bt=t.maxInvestment)==null?void 0:Bt.toLocaleString())||"575,000"]})]}),a.jsxs(Bo,{children:[a.jsx($o,{children:"Projected Yield"}),a.jsxs(No,{children:[t.projectedYield||"8.2","%"]})]}),a.jsxs(Bo,{children:[a.jsx($o,{children:"Property Type"}),a.jsx(No,{children:t.propertyType||"Residential"})]}),a.jsxs(Bo,{children:[a.jsx($o,{children:"Square Footage"}),a.jsxs(No,{children:[((gt=t.squareFootage)==null?void 0:gt.toLocaleString())||"3,200"," sq ft"]})]}),a.jsxs(Bo,{children:[a.jsx($o,{children:"Year Built"}),a.jsx(No,{children:t.yearBuilt||"2020"})]})]}),a.jsx(MV,{children:t.fullDescription||"This luxury property features modern architecture with premium finishes throughout. Located in a prime neighborhood with excellent amenities, the property offers strong rental income potential and projected appreciation. The property has been fully renovated with high-end appliances, smart home technology, and energy-efficient systems."})]})]}),a.jsxs(QF,{children:[a.jsxs(ZF,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:a.jsx("path",{d:"M22 10v8h-2v-8h-4V8h10v2h-4zm-2-6H4v2h16V4zm0 4H4v8h10v2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2z"})}),"Queue Position"]}),a.jsx(KF,{children:"You are in line to purchase tokens for this property. When it's your turn, you'll have 5 minutes to complete your purchase."}),a.jsx(JF,{children:t.name}),a.jsx(eV,{children:t.location}),a.jsxs(tV,{children:[a.jsxs(rV,{children:[a.jsxs(nV,{children:["Position: ",h]}),a.jsxs(oV,{children:["Total: ",p]})]}),a.jsx(iV,{children:a.jsx(aV,{percentage:ge})})]}),a.jsx(sV,{children:h>0?a.jsxs(a.Fragment,{children:[a.jsx(iw,{children:"Estimated Wait Time"}),a.jsx(lV,{children:v})]}):a.jsxs(a.Fragment,{children:[a.jsx(iw,{children:"Time Remaining"}),a.jsx(cV,{children:Ze(je)}),a.jsxs(dV,{children:[a.jsxs(uV,{children:[a.jsx(hV,{children:"Available:"}),a.jsxs(fV,{children:["$",ne.toLocaleString(),".00"]})]}),a.jsx(pV,{onClick:()=>Q(!0),children:"+ Deposit more funds"}),a.jsxs(aw,{children:[a.jsx(sw,{children:"Price per token"}),a.jsxs(lw,{children:[a.jsx(cw,{type:"text",value:le.toLocaleString(),readOnly:!0}),a.jsx(dw,{children:"$"})]})]}),a.jsxs(aw,{children:[a.jsx(sw,{children:"Amount"}),a.jsxs(lw,{children:[a.jsx(cw,{type:"text",placeholder:"0.00",value:$,onChange:Ne=>{const qe=Ne.target.value.replace(/[^0-9.]/g,"");G(qe);const wt=parseFloat(qe)||0;Y(wt*le)}}),a.jsx(dw,{children:"Tokens"})]}),a.jsx(mV,{children:[25,50,75,100].map(Ne=>a.jsxs(gV,{onClick:()=>{const wt=(ne/le*(Ne/100)).toFixed(2);G(wt),Y(parseFloat(wt)*le)},children:[Ne,"%"]},Ne))})]}),a.jsxs(um,{children:[a.jsx(hm,{children:"Price per token"}),a.jsxs(fm,{children:["$",le.toLocaleString()]})]}),a.jsxs(um,{children:[a.jsx(hm,{children:"Amount"}),a.jsxs(fm,{children:[$?parseFloat($).toLocaleString():"0"," Tokens"]})]}),a.jsxs(um,{noBorder:!0,children:[a.jsx(hm,{children:"Total"}),a.jsxs(fm,{children:["$",R.toLocaleString(),".00"]})]}),a.jsx(uw,{disabled:!$||R<=0||R>ne,onClick:()=>{const Ne=parseFloat($);P(qe=>qe-R),Fe(qe=>qe+Ne),ce(!0),G(""),Y(0)},children:"Purchase"})]})]})}),a.jsx(xV,{onClick:()=>z(!0),children:"Leave Queue"}),_&&a.jsx(_V,{children:a.jsxs(TV,{children:[a.jsx(zV,{children:"Are you sure?"}),a.jsx(DV,{children:"You will lose your position in the queue."}),a.jsxs(PV,{children:[a.jsx(AV,{onClick:()=>window.location.href=`/ipo/${e}`,children:"Yes, Leave Queue"}),a.jsx(EV,{onClick:()=>z(!1),children:"No, Stay in Queue"})]})]})})]})]}),J&&a.jsx(dS,{children:a.jsxs(uS,{children:[a.jsxs(tw,{children:[a.jsx(AF,{children:"Deposit Funds"}),a.jsx(rw,{onClick:()=>Q(!1),children:"×"})]}),a.jsxs(lm,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3-7h5.5a2.5 2.5 0 1 0 0-5H10v-.5h2v-2h-2V4h-2v1.5H7v2h4.5a.5.5 0 0 1 0 1H6v2h2v.5H6v2h1v1.5h2V14z"})}),a.jsxs(cm,{children:[a.jsx("h4",{children:"Cryptocurrency"}),a.jsx("p",{children:"Deposit using Bitcoin, Ethereum, or other cryptocurrencies"})]})]}),a.jsxs(lm,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M4 15h16v2H4v-2zm0 4h16v2H4v-2zm9-14V3h7v18h-7v-2h5V5h-5V3H5v18H3V3h10zm-2 7h-3v2h3v-2z"})}),a.jsxs(cm,{children:[a.jsx("h4",{children:"Bank Transfer"}),a.jsx("p",{children:"Connect your bank account for direct transfers"})]})]}),a.jsxs(lm,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M22 10v8h-2v-8h-4V8h10v2h-4zm-2-6H4v2h16V4zm0 4H4v8h10v2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2z"})}),a.jsxs(cm,{children:[a.jsx("h4",{children:"Credit/Debit Card"}),a.jsx("p",{children:"Quick deposit using your credit or debit card"})]})]})]})}),ue&&a.jsx(EF,{children:a.jsxs(OF,{children:[a.jsxs(tw,{children:[a.jsx(RF,{children:"Congratulations!"}),a.jsx(rw,{onClick:()=>ce(!1),children:"×"})]}),a.jsx("p",{children:"You now own property interest in"}),a.jsx("h3",{children:"123 Luxury Avenue, Beverly Hills, CA 90210"}),a.jsx(LF,{src:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",alt:"Luxury Property"}),a.jsxs(BF,{children:[a.jsxs(pu,{children:[a.jsx(mu,{children:"Tokens Purchased:"}),a.jsx(gu,{children:ve.toFixed(2)})]}),a.jsxs(pu,{children:[a.jsx(mu,{children:"Token Price:"}),a.jsxs(gu,{children:["$",le.toLocaleString()]})]}),a.jsxs(pu,{children:[a.jsx(mu,{children:"Total Investment:"}),a.jsxs(gu,{children:["$",(ve*le).toLocaleString()]})]}),a.jsxs(pu,{children:[a.jsx(mu,{children:"Ownership Percentage:"}),a.jsxs(gu,{children:[(ve*le/3e7*100).toFixed(4),"%"]})]})]}),a.jsxs($F,{children:[a.jsxs(nw,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"})}),a.jsx(ow,{children:"Ownership Contract"})]}),a.jsxs(nw,{children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7.5-1c1.38 0 2.5-1.12 2.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"})}),a.jsx(ow,{children:"Ownership Certificate"})]})]}),a.jsxs(NF,{children:[a.jsx(HF,{onClick:()=>ce(!1),children:"Close"}),a.jsx(uw,{onClick:()=>{ce(!1),G("")},children:"Buy More"})]})]})})]})},RV=f.div`
  background-color: var(--color-background-secondary, #12161c);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
`,LV=f.div`
  background-color: rgba(var(--color-accent-rgb, 240, 185, 11), 0.1);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,BV=f.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-accent);
`,$V=f.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-accent);
`,pm=f.div`
  margin-bottom: 1.5rem;
`,ig=f.label`
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #c1c5c9;
  margin-bottom: 0.75rem;
`,hw=f.div`
  position: relative;
  display: flex;
  align-items: center;
`,fw=f.input`
  flex: 1;
  padding: 0.75rem;
  padding-left: 1.5rem;
  background-color: var(--color-background, #0b0e11);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,pw=f.button`
  background-color: #1e2329;
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 8px;
  
  &:hover {
    background-color: #252b33;
  }
  
  &:active {
    transform: scale(0.95);
  }
`,mw=f.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary, #848e9c);
`,NV=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.75rem;
`,HV=f.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`,yu=f.button`
  background-color: #1e2329;
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  padding: 0.5rem 0.4rem;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .price-text {
    font-size: 0.65rem;
    color: var(--color-text-secondary, #848e9c);
    margin-top: 1px;
  }
  
  &:hover {
    background-color: #252b33;
  }
  
  &.active {
    background-color: #252b33;
    outline: 1px solid var(--color-accent);
    border: none;
    color: var(--color-accent);
    font-weight: 600;
  }
  
  /* Remove any transform or size changes on active/focus/hover */
  &:active, &:focus {
    transform: none;
    padding: 0.5rem 0.4rem;
  }
`;f.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;f.button`
  background-color: var(--color-card, #1e2329);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  
  &:hover {
    background-color: #2b3139;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Remove any transform or size changes on active/focus */
  &:active, &:focus {
    transform: none;
  }
`;f.input`
  width: 4rem;
  padding: 0.5rem;
  text-align: center;
  background-color: var(--color-background, #0b0e11);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;f.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;const FV=f.div`
  display: flex;
  width: 100%;
  margin-top: 0.75rem;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`,wu=f.button`
  background-color: #1e2329;
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  padding: 0.75rem 0;
  font-size: 0.75rem;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    background-color: #252b33;
  }
  
  &.active {
    background-color: #252b33;
    outline: 1px solid var(--color-accent);
    border: none;
    color: var(--color-accent);
    font-weight: 600;
  }
  
  /* Remove any transform or size changes on active/focus */
  &:active, &:focus {
    transform: none;
    padding: 0.75rem 0;
  }
`,VV=f.div`
  position: relative;
  margin-top: 0.75rem;
`,UV=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.75rem;
`,IV=f.div`
  color: #848e9c;
`,YV=f.button`
  background: transparent;
  border: none;
  color: var(--color-accent, #f0b90b);
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  
  &:hover {
    color: #f8d12f;
  }
`,qV=f.input`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-background, #0b0e11);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,WV=f.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary, #848e9c);
  font-size: 0.875rem;
`,GV=f.div`
  width: 100%;
  height: 2px;
  background-color: #333;
  margin: 1rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${e=>e.percentage}%;
    background-color: var(--color-accent);
  }
`;f.div`
  background-color: var(--color-card, #1e2329);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;const mm=f.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 600;
  }
`,gm=f.div`
  font-size: 0.875rem;
  color: #848e9c;
`,xm=f.div`
  font-size: 0.875rem;
  color: #f8f9fa;
`;f.div`
  position: relative;
  width: 100%;
`;const XV=f(ig)`
  color: var(--color-accent, #f0b90b);
  font-weight: 500;
`,QV=f.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,ZV=f.div`
  background-color: var(--color-background-secondary, #12161c);
  border-radius: 8px;
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`,KV=f.h3`
  font-size: 1.25rem;
  color: var(--color-text, #eaecef);
  margin-bottom: 1rem;
`,JV=f.p`
  font-size: 0.875rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,eU=f.span`
  color: var(--color-accent, #f0b90b);
  font-weight: 600;
`,tU=f.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,hS=f.button`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-1px);
  }
`,gw=f(hS)`
  background-color: transparent;
  border: 1px solid var(--color-border, #2a2f37);
  color: var(--color-text, #eaecef);
  margin-top: 0.75rem;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`,rU=f(hS)`
  background-color: var(--color-accent, #f0b90b);
  border: none;
  color: #000;
  
  &:hover {
    background-color: #f8d12f;
  }
`,xw=f.div`
  font-size: 0.75rem;
  color: var(--color-accent);
  margin-top: 0.5rem;
  text-align: center;
`,bw=f.button`
  width: 100%;
  background-color: var(--color-accent);
  border: none;
  border-radius: 4px;
  color: #0b0e11;
  padding: 0.875rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
  }
  
  &:disabled {
    background-color: #333;
    color: #848e9c;
    cursor: not-allowed;
  }
  
  /* Remove any transform or size changes on active/focus */
  &:active, &:focus {
    transform: none;
    padding: 0.875rem;
  }
`,nU=({clearingPrice:e,userBids:t,onPlaceBid:n,totalTokens:o,bidToAmend:s,onCancelAmend:c,userInteracted:d,setUserInteracted:h,propertyAddress:m="83 Fitzwilliam Road"})=>{const[p,x]=S.useState(Math.ceil(e*1.001)),[v,y]=S.useState(0),[j,w]=S.useState(0),[C,k]=S.useState(0),[_,z]=S.useState(""),[D,L]=S.useState(""),[A,V]=S.useState(!1),[E,F]=S.useState("match"),[te,de]=S.useState(!1),[le,fe]=S.useState(!1),[me,pe]=S.useState(!1),[be,I]=S.useState(!1),[H,ee]=S.useState(0),[ne,P]=S.useState(5e5),[$,G]=S.useState([]),[R,Y]=S.useState(!1);S.useEffect(()=>{console.log("Component initialized. Setting initial state."),(te||le)&&h&&(d||(console.log("Setting userInteracted to true based on price/percentage selection"),h(!0))),!s&&p===0&&(console.log("Initial mount - setting starting bid price to 0.1% above clearing price:",e),x(Math.ceil(e*1.001)),F("match")),console.log("Bid panel state:",{bidPrice:p,clearingPrice:e,bidToAmend:!!s,userInteracted:d,userSelectedPrice:te,userSelectedPercentage:le,increaseBidClicked:me})},[s,d,te,le]),S.useEffect(()=>{!s&&!d&&!te&&!le&&!me&&(console.log("Updating bid price to 0.1% above clearing price for new bid panel:",e),x(Math.ceil(e*1.001)),F("match"))},[e,s,d,te,le,me]);const J=(ge,xe)=>ge<xe?"outbid":(ge-xe)/xe*100<2?"at-risk":"competitive";S.useEffect(()=>{if(!t||t.length===0||R)return;const ge=t.map(xe=>({...xe,initialStatus:J(xe.price,e)}));G(ge),Y(!0)},[t,R,e]);const[Q,ue]=S.useState([]);S.useEffect(()=>{if(!t||!R)return;const ge=[];if(t.forEach(xe=>{xe.price<e&&!Q.includes(xe.id)&&ge.push(xe)}),ge.length>0){let xe=0;const Ae=[...Q];ge.forEach(Oe=>{const Ke=Oe.price*Oe.tokenAmount;xe+=Ke,Ae.push(Oe.id)}),xe>0&&(P(Oe=>Oe+xe),ue(Ae))}},[t,e,R,Q]);const[ce,ve]=S.useState(!1);S.useEffect(()=>{if(p&&v){const ge=p*v;k(ge),ce||z(ge.toLocaleString());const Ae=Math.min(100,Math.round(ge/ne*100));w(Ae)}else ce||(k(0),z(""),w(0))},[p,v,ce]),S.useEffect(()=>{if(s){console.log("Handling bid amendment, bid:",s);const ge=J(s.price,e);console.log("Bid status:",ge,"Clearing price:",e);const xe=s.price<e?e:s.price;console.log("Price to use for amendment:",xe),y(s.tokenAmount),L(s.tokenAmount.toString()),z((xe*s.tokenAmount).toLocaleString()),V(!0),ge==="outbid"?(console.log("Outbid bid - setting price to clearing price once"),x(e),F("match"),pe(!0),h(!0),de(!0)):(console.log("Competitive/at-risk bid - keeping original bid price:",s.price),x(s.price),F("match"),h&&(h(!0),console.log("Setting userInteracted to true for competitive/at-risk bid")),de(!0));const Ae=ne,Oe=Math.min(100,Math.round(xe*s.tokenAmount/Ae*100));w(Oe),console.log("Bid to amend set with fixed price, not following clearing price")}else V(!1)},[s]);const Fe=(ge,xe,Ae)=>{const Oe=ge.replace(/[^0-9.]/g,"");if(!Oe||isNaN(parseFloat(Oe)))return"";const Ke=Oe.split("."),nt=Ke[0],Bt=Ke.length>1?"."+Ke[1]:"",Ne=nt.replace(/\B(?=(\d{3})+(?!\d))/g,",")+Bt;let qe=Ae;if(xe&&Ae){const wt=(xe.substring(0,Ae).match(/,/g)||[]).length,Vt=(Ne.substring(0,Ae).match(/,/g)||[]).length;qe+=Vt-wt}return{formattedValue:Ne,cursorPosition:qe}},je=ge=>{h&&h(!0),ve(!0);const xe=ge.target,Ae=xe.selectionStart,Oe=_,Ke=ge.target.value;if(Ke===""){z(""),k(0),y(0),L(""),w(0);return}const{formattedValue:nt,cursorPosition:Bt}=Fe(Ke,Oe,Ae);z(nt),setTimeout(()=>{xe&&xe.setSelectionRange(Bt,Bt)},0);const gt=Ke.replace(/[^0-9.]/g,""),Ne=parseFloat(gt);if(!isNaN(Ne)&&(k(Ne),p>0)){const qe=Math.round(Ne/p*100)/100;y(qe),L(qe.toString());const Vt=Math.min(100,Math.round(Ne/ne*100));if(w(Vt),Ne>ne){const ar=Math.ceil(Ne-ne);ee(ar),I(!0)}}},Ye=()=>{I(!1),alert("Redirecting to payment gateway...")},Qe=ge=>{const xe=ge/100*ne,Ae=Math.floor(xe/p*1e3)/1e3;return Math.max(.001,Math.min(Ae,o))},ir=ge=>{h&&(h(!0),console.log("User manually changed bid price - setting userInteracted to true")),de(!0),fe(!1),pe(!1);const xe=ge.target.value;if(!xe||xe==="$"){x(0);return}const Ae=xe.replace(/[^0-9]/g,""),Oe=parseInt(Ae,10)||0;if(A&&s&&J(s.price,e)!=="outbid"&&Oe<s.price){x(s.price),alert("You cannot place a bid lower than your existing bid price when amending a competitive or at-risk bid.");return}x(Oe),console.log("User manually set bid price to:",Oe),F(""),j>0&&y(Qe(j))},Nr=ge=>{h&&(h(!0),console.log("User adjusted bid price - setting userInteracted to true")),de(!0),fe(!1),pe(!1);const Ae=Math.max(0,(p||e)+ge);if(A&&s&&J(s.price,e)!=="outbid"&&Ae<s.price){alert("You cannot place a bid lower than your existing bid price when amending a competitive or at-risk bid.");return}x(Ae),console.log("User adjusted bid price to:",Ae),F(""),j>0&&y(Qe(j))},gr=ge=>{h&&h(!0),pe(!1);const xe=ge.target.value;if(L(xe),xe===""){y(0),w(0);return}console.log("User changed token amount, fixing bid price at:",p);const Ae=parseFloat(xe);if(!isNaN(Ae)){const Oe=Math.round(Ae*1e3)/1e3;if(A&&s&&J(s.price,e)!=="outbid"&&Oe<s.tokenAmount){y(s.tokenAmount),L(s.tokenAmount.toString()),alert("You cannot reduce the token amount when amending a competitive or at-risk bid.");return}y(Math.min(Oe,o)),w(0)}},Ze=ge=>{h&&(h(!0),console.log("User clicked quick bid button - setting userInteracted to true")),de(!0),fe(!0),pe(!1);let xe=e;A&&s&&J(s.price,e)!=="outbid"&&(xe=s.price);const Ae=xe*(1+ge/100);x(Ae),F(`plus${ge}`);const Oe=v*Ae;k(Oe),z(Oe.toLocaleString()),console.log("User clicked quick bid button +"+ge+"%, updating bid price to:",Ae,"(+"+ge+"% above reference price)")},rt=()=>{if(h&&h(!0),de(!0),fe(!1),pe(!1),A&&s&&J(s.price,e)!=="outbid")x(s.price);else{const ge=Math.ceil(e*1.001);x(ge)}F("match"),j>0&&y(Qe(j))},zt=ge=>{h&&h(!0),fe(!0),pe(!1),w(ge);const xe=ge/100*ne,Ae=p,Oe=Math.floor(xe/Ae*1e3)/1e3,Ke=Math.max(.001,Math.min(Oe,o));y(Ke),L(Ke.toString());const nt=Ke*Ae;k(nt),z(nt.toLocaleString()),console.log("User clicked token percentage button "+ge+"%, allocating funds:",xe,"for",Ke,"tokens")},Dt=ge=>{if(ge.preventDefault(),!p||!v){alert("Please enter both bid price and token amount");return}if(A&&s&&J(s.price,e)!=="outbid"){if(p<s.price){alert("You cannot place a bid lower than your existing bid price when amending a competitive or at-risk bid.");return}if(v<s.tokenAmount){alert("You cannot reduce the token amount when amending a competitive or at-risk bid.");return}}if(C>ne){const xe=C-ne;ee(xe),I(!0);return}if(A&&s){const xe=s.price*s.tokenAmount,Oe=p*v-xe;Oe>0?P(Ke=>Ke-Oe):Oe<0&&P(Ke=>Ke-Oe),n(p,v,s.id),alert(`Bid modified successfully! ${v} tokens at $${p.toLocaleString()} each.`)}else P(xe=>xe-C),n(p,v),alert(`Bid placed successfully! ${v} tokens at $${p.toLocaleString()} each.`);y(0),L(""),z(""),w(0),V(!1),h&&(h(!1),console.log("Bid submitted, resetting userInteracted to false")),de(!1),fe(!1),pe(!1),A&&c&&Pt()},Pt=ge=>{try{if(ge&&(ge.preventDefault(),ge.stopPropagation()),V(!1),h&&(h(!1),console.log("Cancel amend clicked, resetting userInteracted to false")),y(0),L(""),z(""),w(0),de(!1),fe(!1),pe(!1),c)try{c(ge),console.log("Successfully called parent onCancelAmend")}catch(xe){console.error("Error in parent onCancelAmend:",xe)}console.log("Successfully cancelled amendment in BidPanel")}catch(xe){console.error("Error in handleCancelAmend:",xe)}};return a.jsxs(RV,{id:"bid-panel",children:[a.jsxs(LV,{children:[a.jsx(BV,{children:"Bid Is At"}),a.jsxs($V,{children:["$",e.toLocaleString()]})]}),a.jsxs("form",{onSubmit:Dt,children:[a.jsxs(pm,{children:[a.jsx(ig,{children:"Your Bid ($/Token)"}),a.jsxs(hw,{children:[a.jsx(mw,{children:"$"}),a.jsx(fw,{type:"text",value:p===0?"":p.toLocaleString(),onChange:ir,placeholder:"Enter bid price",autoComplete:"off"}),a.jsx(pw,{type:"button",onClick:()=>Nr(500),"aria-label":"Increase bid by $500",children:"+"}),a.jsx(pw,{type:"button",onClick:()=>Nr(-500),"aria-label":"Decrease bid by $500",children:"-"})]}),a.jsxs(NV,{children:[a.jsx(yu,{type:"button",onClick:rt,style:{width:"100%"},className:E==="match"?"active":"",children:A&&s&&J(s.price,e)!=="outbid"?"Original Bid":`Minimum Bid ($${Math.ceil(e*1.001).toLocaleString()})`}),a.jsxs(HV,{children:[a.jsxs(yu,{type:"button",onClick:()=>Ze(1),className:E==="plus1"?"active":"",children:["+1%",a.jsxs("span",{className:"price-text",children:["$",Math.round((A&&s&&J(s.price,e)!=="outbid"?s.price:e)*1.01).toLocaleString()]})]}),a.jsxs(yu,{type:"button",onClick:()=>Ze(3),className:E==="plus3"?"active":"",children:["+3%",a.jsxs("span",{className:"price-text",children:["$",Math.round((A&&s&&J(s.price,e)!=="outbid"?s.price:e)*1.03).toLocaleString()]})]}),a.jsxs(yu,{type:"button",onClick:()=>Ze(5),className:E==="plus5"?"active":"",children:["+5%",a.jsxs("span",{className:"price-text",children:["$",Math.round((A&&s&&J(s.price,e)!=="outbid"?s.price:e)*1.05).toLocaleString()]})]})]})]})]}),a.jsxs(pm,{children:[a.jsx(ig,{children:`Amount (${m})`}),a.jsxs(VV,{children:[a.jsx(qV,{type:"text",value:D,onChange:gr,"aria-label":"Token amount",placeholder:"Enter token amount",onFocus:ge=>ge.target.select()}),a.jsx(WV,{children:"Tokens"})]}),a.jsx(GV,{percentage:j}),a.jsxs(FV,{children:[a.jsx(wu,{type:"button",className:j===25?"active":"",onClick:()=>zt(25),children:"25%"}),a.jsx(wu,{type:"button",className:j===50?"active":"",onClick:()=>zt(50),children:"50%"}),a.jsx(wu,{type:"button",className:j===75?"active":"",onClick:()=>zt(75),children:"75%"}),a.jsx(wu,{type:"button",className:j===100?"active":"",onClick:()=>zt(100),children:"100%"})]}),a.jsxs(UV,{children:[a.jsxs(IV,{children:["Available Funds: $",ne.toLocaleString()]}),a.jsx(YV,{type:"button",onClick:Ye,children:"Add Funds"})]})]}),a.jsxs(pm,{children:[a.jsx(XV,{children:"Total Amount"}),a.jsxs(hw,{children:[a.jsx(mw,{children:"$"}),a.jsx(fw,{id:"total-bid-input",type:"text",value:_,onChange:je,placeholder:"Enter total amount","aria-label":"Total amount",onFocus:ge=>{ge.target.select(),ve(!0)},onBlur:()=>ve(!1),onClick:ge=>ge.target.select(),autoComplete:"off"})]})]}),a.jsxs(mm,{children:[a.jsx(gm,{children:"Bid:"}),a.jsxs(xm,{children:[v," tokens at $",p.toLocaleString()]})]}),a.jsxs(mm,{children:[a.jsx(gm,{children:"Property Valuation:"}),a.jsxs(xm,{children:["$",(p*o).toLocaleString()]})]}),a.jsxs(mm,{children:[a.jsx(gm,{children:"Property Ownership:"}),a.jsxs(xm,{children:[(v/o*100).toFixed(2),"%"]})]}),A?a.jsxs(a.Fragment,{children:[a.jsx(bw,{type:"submit",disabled:!p||!v||p<Math.ceil(e*1.001),children:"Modify Bid"}),a.jsx(gw,{type:"button",onClick:ge=>{ge.preventDefault(),ge.stopPropagation();try{Pt(ge)}catch(xe){console.error("Error in CancelButton click:",xe)}},children:"✕ Keep Current Bid"}),a.jsx(xw,{children:"Note: Successful bids will be filled at the final clearance price, not your bid. For a bid to be successful, it must remain at or above the auction clearing price."})]}):a.jsxs(a.Fragment,{children:[a.jsx(bw,{type:"submit",disabled:!p||!v||p<Math.ceil(e*1.001),children:"Place Bid"}),a.jsx(xw,{children:"Note: Successful bids will be filled at the final clearance price, not your bid. For a bid to be successful, it must remain at or above the auction clearing price."})]})]}),be&&a.jsx(QV,{children:a.jsxs(ZV,{children:[a.jsx(KV,{children:"Additional Funds Required"}),a.jsxs(JV,{children:["You need ",a.jsxs(eU,{children:["$",H.toLocaleString()]})," more to complete this bid. Would you like to add funds to your account?"]}),a.jsxs(tU,{children:[a.jsx(gw,{onClick:()=>I(!1),children:"Cancel"}),a.jsx(rU,{onClick:Ye,children:"Add Funds"})]})]})})]})},oU=f.div`
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`,iU=f.h3`
  font-size: 1rem;
  color: var(--color-text, #eaecef);
  margin-bottom: 1rem;
`,aU=f.div`
  background-color: var(--color-card, #1e2329);
  border-radius: 4px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-height: 300px;
    overflow-y: auto;
    padding-right: 4px; /* Space for scrollbar */
    
    /* Scrollbar styling */
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
  }
`,sU=f.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr 1fr 1.3fr 1fr;
  padding: 0.75rem;
  font-size: 0.75rem;
  background-color: #2b3139;
  color: var(--color-text-secondary, #848e9c);
  font-weight: 500;
  
  @media (max-width: 768px) {
    display: none; /* Hide the header on mobile */
  }
`,lU=f.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: help;
`,cU=f.span`
  margin-left: 5px;
  font-size: 12px;
  color: #848e9c;
  cursor: help;
`,dU=f.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1e2329;
  color: #eaecef;
  padding: 10px 15px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 280px;
  z-index: 10;
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
  border: 1px solid #2a2f37;
  
  &:before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #2a2f37;
  }
`,bm=f.span`
  color: ${e=>e.type==="competitive"?"#0ecb81":e.type==="at-risk"?"#f0b90b":"#f6465d"};
  font-weight: 500;
`,vw=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  width: 100%;
`,yw=f.div`
  width: 80px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 4px;
`,ww=f.div`
  height: 100%;
  border-radius: 2px;
  background-color: ${e=>e.status==="competitive"?"#0ecb81":e.status==="at-risk"?"#f0b90b":"#f6465d"};
  width: ${e=>`${e.fillPercentage}%`};
  transition: width 0.5s ease-out;
`,uU=f.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr 1fr 1.3fr 1fr;
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border, #2a2f37);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "price action"
      "tokens tokens"
      "total status";
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    background-color: #1a1d24;
    border: 1px solid rgba(255, 255, 255, 0.05);
    gap: 0.5rem;
  }
`,yl=f.div`
  font-size: 0.875rem;
  color: var(--color-text, #eaecef);
  display: flex;
  align-items: center;
  
  &.status {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  
  &.price {
    color: var(--color-accent, #f0b90b);
  }
  
  &.status {
    color: ${e=>e.statusType==="competitive"?"#0ecb81":e.statusType==="at-risk"?"#f0b90b":"#f6465d"};
  }
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 0.8125rem;
    
    &:before {
      content: attr(data-label);
      font-size: 0.75rem;
      color: var(--color-text-secondary, #848e9c);
      margin-right: 0.5rem;
    }
    
    &.status-cell:before {
      content: none; /* Remove the Status label in mobile view */
    }
    
    &.price-cell {
      grid-area: price;
    }
    
    &.tokens-cell {
      grid-area: tokens;
    }
    
    &.total-cell {
      grid-area: total;
    }
    
    &.status-cell {
      grid-area: status;
      padding: 0.25rem 0;
      justify-content: flex-end;
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    
    &.action-cell {
      grid-area: action;
      justify-content: flex-end;
      margin: 0;
      padding: 0;
      border-top: none;
    }
  }
`,hU=f.button`
  background-color: transparent;
  border: 1px solid ${e=>e.status==="outbid"?"#f6465d":e.status==="at-risk"?"#f0b90b":"#0ecb81"};
  color: ${e=>e.status==="outbid"?"#f6465d":e.status==="at-risk"?"#f0b90b":"#0ecb81"};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.status==="outbid"?"rgba(246, 70, 93, 0.1)":e.status==="at-risk"?"rgba(240, 185, 11, 0.1)":"rgba(14, 203, 129, 0.1)"};
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.8125rem;
    width: auto;
  }
`,Ho=(e,t)=>e<t?"outbid":(e-t)/t*100<2?"at-risk":"competitive",jw=(e,t)=>t?e<t?`(-${((t-e)/t*100).toFixed(1)}%)`:`(+${((e-t)/t*100).toFixed(1)}%)`:"",fU=({userBids:e,clearingPrice:t,onAmendBid:n})=>{const[o,s]=S.useState(!1),[c,d]=S.useState({});return!e||e.length===0?null:(S.useEffect(()=>{const h={};e.forEach(p=>{const x=Ho(p.price,t);x==="competitive"||x==="at-risk"?c[p.id]===void 0?h[p.id]=100:h[p.id]=c[p.id]:h[p.id]=0}),d(p=>({...p,...h}));const m=setInterval(()=>{d(p=>{const x={...p};return e.forEach(v=>{const y=v.price-t;if(y===0){if(x[v.id]>0){const j=1+Math.random()*2;x[v.id]=Math.max(0,x[v.id]-j)}}else if(y>0&&y<t*.005){if(x[v.id]>0){const j=3+Math.random()*5;x[v.id]=Math.max(0,x[v.id]-j)}}else y<0&&(x[v.id]=0)}),x})},1e3);return()=>clearInterval(m)},[e,t,c]),a.jsxs(oU,{children:[a.jsx(iU,{children:"Your Active Bids"}),a.jsxs(aU,{children:[a.jsxs(sU,{children:[a.jsx("div",{children:"Bid Price"}),a.jsx("div",{children:"Tokens"}),a.jsx("div",{children:"Total Bid"}),a.jsxs(lU,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[a.jsx("div",{children:"Status"}),a.jsx(cU,{title:"Bid status information",children:"ⓘ"}),o&&a.jsxs(dU,{children:[a.jsxs("p",{children:[a.jsx(bm,{type:"competitive",children:"Competitive"}),": Strong bid that will receive token allocation."]}),a.jsxs("p",{children:[a.jsx(bm,{type:"at-risk",children:"At Risk"}),": At risk of being outbid and may need attention, but will still receive allocation if auction concludes now."]}),a.jsxs("p",{children:[a.jsx(bm,{type:"outbid",children:"Outbid"}),": Below clearing price and will not receive allocation. Must be increased to participate. Funds automatically become available to increase bid or place new bids."]})]})]}),a.jsx("div",{children:"Action"})]}),[...e].sort((h,m)=>m.price-h.price).map((h,m)=>a.jsxs(uU,{children:[a.jsxs(yl,{className:"price price-cell","data-label":"Bid Price",children:["$",h.price.toLocaleString()]}),a.jsx(yl,{className:"tokens-cell","data-label":"Tokens",children:h.tokenAmount}),a.jsxs(yl,{className:"total-cell","data-label":"Total Bid",children:["$",Math.round(h.price*h.tokenAmount).toLocaleString()]}),a.jsx(yl,{className:"status status-cell",statusType:Ho(h.price,t),children:Ho(h.price,t)==="competitive"?a.jsxs(a.Fragment,{children:[a.jsx(vw,{children:a.jsxs("div",{children:["Competitive ",jw(h.price,t)]})}),a.jsx(yw,{children:a.jsx(ww,{status:"competitive",fillPercentage:c[h.id]||100})})]}):a.jsxs(a.Fragment,{children:[a.jsx(vw,{children:a.jsxs("div",{children:[Ho(h.price,t)==="at-risk"?"At Risk":"Outbid"," ",jw(h.price,t)]})}),a.jsx(yw,{children:a.jsx(ww,{status:Ho(h.price,t),fillPercentage:c[h.id]||(Ho(h.price,t)==="at-risk"?100:0)})})]})}),a.jsx(yl,{className:"action-cell",children:a.jsx(hU,{onClick:p=>{p.preventDefault(),p.stopPropagation();try{n(h)}catch(x){console.error("Error in AmendButton click:",x)}},status:Ho(h.price,t),children:Ho(h.price,t)==="competitive"?"Amend":"Increase Bid"})})]},h.id))]})]}))},pU=f.div`
  background-color: #1e2329;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,mU=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,gU=f.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #f8f9fa;
`,xU=f.div`
  font-size: 0.75rem;
  color: #848e9c;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;f.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: #848e9c;
  font-size: 0.7rem;
  padding: 0 40px;
`;const bU=f.div`
  position: absolute;
  bottom: 0;
  left: 40px;
  right: 0;
  height: 1px;
  background-color: #2b3139;
`,vU=f.div`
  position: absolute;
  bottom: -15px;
  left: 40px;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: #848e9c;
  font-size: 0.7rem;
`,yU=f.div`
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
  left: ${e=>e.position}%;
`,wU=f.div`
  position: relative;
  height: 200px;
  margin-bottom: 2rem;
`,jU=f.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 0.5rem;
  color: #848e9c;
  font-size: 0.7rem;
  text-align: right;
`,SU=f.div`
  position: absolute;
  left: 40px;
  right: 0;
  top: 0;
  bottom: 20px;
  align-items: flex-end;
  border-left: 1px solid #2b3139;
  position: relative;
  overflow: hidden;
`,kU=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
`,CU=f.div`
  width: 70%;
  height: ${e=>e.height||"0%"};
  background-color: ${e=>e.color||"#f0b90b"};
  border-radius: 2px 2px 0 0;
  transition: height 0.3s ease;
  position: relative;
  
  &:hover {
    opacity: 0.8;
  }
`,MU=f.div`
  position: absolute;
  bottom: -20px;
  font-size: 0.7rem;
  color: #848e9c;
  transform: rotate(-45deg);
  transform-origin: left top;
  white-space: nowrap;
  display: ${e=>e.show?"block":"none"};
`,_U=f.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%; /* Fixed position at 25% of chart width */
  width: 2px;
  background-color: #F0B90B;
  z-index: 5;
`,TU=f.div`
  position: absolute;
  top: -20px;
  left: 0;
  transform: translateX(-50%);
  background-color: #f0b90b;
  color: #0b0e11;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
`,zU=f.div`
  position: absolute;
  bottom: ${e=>e.position||"0%"};
  width: 12px;
  height: 12px;
  background-color: #f8f9fa;
  transform: rotate(45deg);
  z-index: 3;
  border: 2px solid #0b0e11;
`,DU=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`,ju=f.div`
  display: flex;
  align-items: center;
`,Sw=f.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${e=>e.color};
  margin-right: 6px;
`,PU=f.div`
  width: 10px;
  height: 10px;
  background-color: #f8f9fa;
  transform: rotate(45deg);
  margin-right: 6px;
  border: 1px solid #0b0e11;
`,Su=f.span`
  font-size: 0.75rem;
  color: #848e9c;
`,AU=f.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: visible;
`,EU=f.path`
  fill: none;
  stroke: #f0b90b;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.9;
`,OU=f.path`
  fill: url(#curveGradient);
  opacity: 0.4;
`,RU=({bidDistribution:e,clearingPrice:t,userBids:n})=>{const[o,s]=S.useState({min:0,max:0}),[c,d]=S.useState(!1),h=S.useRef(t),m=e.length>0?Math.max(1,...e.map(v=>v.count)):1;S.useEffect(()=>{const v=t*2,y=Math.max(0,t-v*.25),j=y+v;h.current!==t&&h.current!==0&&d(!0),s({min:y,max:j}),h.current=t;const w=setTimeout(()=>{d(!1)},500);return()=>clearTimeout(w)},[t]),S.useEffect(()=>{if(o.min===0&&o.max===0&&e.length>0){const v=t*2,y=t-v*.25,j=y+v;s({min:y,max:j}),h.current=t,console.log(`Chart initialized: $${y.toLocaleString()} - $${j.toLocaleString()}, clearing price: $${t.toLocaleString()}`)}},[e,t,o]);const p=new Set;n.forEach(v=>{e.forEach((y,j)=>{const[w,C]=y.priceRange;v.price>=w&&v.price<C&&p.add(j)})});const x=S.useMemo(()=>{if(e.length===0||m===0)return{curvePath:"",areaPath:""};const v=e.map((w,C)=>{const k=(w.priceRange[0]+w.priceRange[1])/2,_=(k-o.min)/(o.max-o.min)*100,z=100-w.count/m*100;return{x:_,y:z,price:k}});v.length<2&&v.push({x:100,y:v[0].y});let y=`M${v[0].x},${v[0].y}`;for(let w=1;w<v.length;w++){const C=v[w-1].x+(v[w].x-v[w-1].x)/3,k=v[w-1].y,_=v[w].x-(v[w].x-v[w-1].x)/3,z=v[w].y;y+=` C${C},${k} ${_},${z} ${v[w].x},${v[w].y}`}const j=`${y} L${v[v.length-1].x},100 L${v[0].x},100 Z`;return{curvePath:y,areaPath:j}},[e,m]);return a.jsxs(pU,{children:[a.jsx(mU,{children:a.jsx(gU,{children:"Bid Distribution"})}),a.jsx(xU,{children:"This chart shows the distribution of all bids in $1,000 intervals. Gold bars represent bids above the current clearing price (successful), while grey bars show bids below the clearing price (unsuccessful). Diamond markers show your bids. Bids are rounded up to the nearest $1,000."}),a.jsxs(wU,{children:[a.jsxs(jU,{children:[a.jsx("div",{children:"50"}),a.jsx("div",{children:"40"}),a.jsx("div",{children:"30"}),a.jsx("div",{children:"20"}),a.jsx("div",{children:"10"}),a.jsx("div",{children:"0"})]}),a.jsx(bU,{}),a.jsx(vU,{children:[0,20,40,60,80,100].map(v=>{const y=o.min+(o.max-o.min)*(v/100);return a.jsxs(yU,{position:v,children:["$",Math.round(y/1e3),"k"]},v)})}),a.jsxs(SU,{children:[a.jsxs(AU,{children:[a.jsx("defs",{children:a.jsxs("linearGradient",{id:"curveGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[a.jsx("stop",{offset:"0%",stopColor:"#F0B90B",stopOpacity:"0.8"}),a.jsx("stop",{offset:"100%",stopColor:"#F0B90B",stopOpacity:"0.2"})]})}),a.jsx(OU,{d:x.areaPath}),a.jsx(EU,{d:x.curvePath})]}),e.map((v,y)=>{const j=v.priceRange[0]>=t,w=`${v.count/m*100}%`,C=p.has(y),_=((v.priceRange[0]+v.priceRange[1])/2-o.min)/(o.max-o.min)*100;return _<-10||_>110?null:a.jsxs(kU,{style:{position:"absolute",left:`${_}%`,width:"3%",transition:c?"left 0.5s ease-out":"none"},children:[a.jsx(CU,{height:w,color:j?"#F0B90B":"#848E9C"}),a.jsxs(MU,{show:y%5===0,children:["$",(v.priceRange[0]/1e3).toFixed(0),"k"]}),C&&a.jsx(zU,{position:w})]},y)}),a.jsx(_U,{children:a.jsxs(TU,{children:["$",t.toLocaleString()]})})]})]}),a.jsxs(DU,{children:[a.jsxs(ju,{children:[a.jsx(Sw,{color:"#F0B90B"}),a.jsx(Su,{children:"Bids above clearing price (successful)"})]}),a.jsxs(ju,{children:[a.jsx(Sw,{color:"#848E9C"}),a.jsx(Su,{children:"Bids below clearing price (unsuccessful)"})]}),a.jsxs(ju,{children:[a.jsx(PU,{}),a.jsx(Su,{children:"Your bids"})]}),a.jsxs(ju,{children:[a.jsx("div",{style:{width:"2px",height:"12px",backgroundColor:"#F0B90B",marginRight:"6px"}}),a.jsx(Su,{children:"Clearing price line (fixed position)"})]})]})]})},fS=On`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--color-accent-rgb, 240, 185, 11), 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--color-accent-rgb, 240, 185, 11), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--color-accent-rgb, 240, 185, 11), 0);
  }
`;On`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;On`
  0% {
    transform: scale(1);
    background-color: rgba(14, 203, 129, 0.1);
  }
  50% {
    transform: scale(1.05);
    background-color: rgba(14, 203, 129, 0.2);
  }
  100% {
    transform: scale(1);
    background-color: transparent;
  }
`;On`
  0% {
    font-size: 100%;
    font-weight: 400;
  }
  50% {
    font-size: 105%;
    font-weight: 600;
  }
  100% {
    font-size: 100%;
    font-weight: 400;
  }
`;const LU=f.div`
  background-color: var(--color-background-secondary, #12161c);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
`,BU=f.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    /* For mid-width screens where the mobile button appears */
    flex-direction: column;
  }
`,$U=f.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 5;
  
  @media (min-width: 1025px) {
    display: none;
  }
`,NU=f.div`
  flex: 1;
`,HU=f.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  
  .info-icon {
    margin-left: 0.5rem;
    cursor: help;
    position: relative;
  }
  
  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-card, #1e2329);
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    width: 200px;
    z-index: 10;
    display: none;
    color: var(--color-text, #eaecef);
    border: 1px solid var(--color-border, #2a2f37);
  }
  
  .info-icon:hover .tooltip {
    display: block;
  }
`,FU=f.div`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-accent);
  display: flex;
  align-items: center;
  
  .trend-indicator {
    margin-left: 0.5rem;
    color: #0ecb81;
    animation: ${fS} 2s infinite;
  }
`,VU=f.div`
  flex: 1;
  text-align: right;
  
  @media (max-width: 1024px) {
    text-align: left;
    margin-top: 1rem;
  }
`,UU=f.div`
  font-size: 0.875rem;
  color: #848e9c;
  margin-bottom: 0.25rem;
`,IU=f.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f8f9fa;
`,vm=f.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`,ym=f.div`
  color: #848e9c;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  
  .info-icon {
    margin-left: 0.5rem;
    cursor: help;
    position: relative;
  }
  
  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2b3139;
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 0.75rem;
    width: 250px;
    z-index: 10;
    display: none;
    line-height: 1.4;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .info-icon:hover .tooltip {
    display: block;
  }
`,wm=f.div`
  color: #f8f9fa;
  font-weight: 500;
  font-size: 0.875rem;
`,YU=f.div`
  margin-top: 1.5rem;
`,qU=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  .live-indicator {
    width: 8px;
    height: 8px;
    background-color: #0ecb81;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #0ecb81;
      border-radius: 50%;
      animation: ${fS} 2s infinite;
    }
  }
`,WU=f.div`
  font-size: 0.875rem;
  font-weight: 500;
`,GU=f.div`
  max-height: 200px;
  overflow-y: auto;
`,XU=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`,QU=f.div`
  font-size: 0.75rem;
  
  .user {
    color: #f8f9fa;
    font-weight: 500;
  }
  
  .action {
    color: #848e9c;
  }
  
  .amount {
    color: var(--color-accent);
  }
`,ZU=f.div`
  font-size: 0.75rem;
  color: #848e9c;
`,KU=e=>{const t=Math.floor(e/3600),n=Math.floor(e%3600/60),o=e%60;return`${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`},JU=({clearingPrice:e,startingPrice:t,propertyValue:n,timeRemaining:o,recentActivity:s,userBids:c,onAmendBid:d,mobilePlaceBidButton:h,clearingPriceChange:m})=>{const[p,x]=S.useState(68),[v,y]=S.useState(((e-t)/t*100).toFixed(2)),[j,w]=S.useState(1.2),[C,k]=S.useState([{price:e,timestamp:Date.now()}]),[_,z]=S.useState(3842);return S.useEffect(()=>{const D=()=>{z(E=>{const F=Math.floor(Math.random()*21)+5;return E+F})},L=()=>{const E=Math.floor(Math.random()*50)+20,F=Math.floor(Math.random()*30)+15,te=Math.floor(Math.random()*200)+50,de=Math.floor(Math.random()*150)+50,le=Math.random()*.05,fe=E/F*40,me=te/de*30,pe=le/(t*.01)*30;let be=fe+me+pe;if(be=Math.min(Math.max(be,0),100),e>=145e3){const I=Math.min((e-145e3)/5e3,1);be=be*(1-I*.7),e>=153e3&&(be=Math.min(be,30))}x(I=>{const H=(be-I)*.4+(Math.random()*6-3);return Math.min(Math.max(Math.round(I+H),0),100)}),y(((e-t)/t*100).toFixed(2))},A=setInterval(()=>{Math.random()<.8&&D()},Math.floor(Math.random()*6e3)+2e3),V=setInterval(()=>{const E=Date.now(),F=E-5*60*1e3;k(te=>[...te,{price:e,timestamp:E}].filter(le=>le.timestamp>=F)),k(te=>{if(te.length>1){const de=te[0],le=((e-de.price)/de.price*100).toFixed(1);w(Math.max(.1,Math.abs(le)))}return te}),L()},1e4);return()=>{clearInterval(A),clearInterval(V)}},[e,t]),a.jsxs(LU,{children:[h&&a.jsx($U,{children:h}),a.jsxs(BU,{children:[a.jsxs(NU,{children:[a.jsxs(HU,{children:["Auction Clearing Price",a.jsxs("span",{className:"info-icon",children:["ⓘ",a.jsx("span",{className:"tooltip",children:"The clearing price is the lowest competitive bid that fully allocates all available tokens. This is the minimum price per token bidders have to bid. When the auction ends, all bidders who end up with bids at or above this price will receive token allocation at the final clearing price, regardless of how high the original bid."})]})]}),a.jsxs(FU,{children:["$",e.toLocaleString(),a.jsx("span",{className:"trend-indicator",children:"↑"})]})]}),a.jsxs(VU,{children:[a.jsx(UU,{children:"Property Value at Current Price"}),a.jsxs(IU,{children:["$",n.toLocaleString()]})]})]}),a.jsxs(vm,{children:[a.jsx(ym,{children:"Auction Ends In"}),a.jsx(wm,{children:KU(o)})]}),a.jsxs(vm,{children:[a.jsxs(ym,{children:["Clearing price change (last 5 minutes)",a.jsxs("span",{className:"info-icon",children:["ⓘ",a.jsx("span",{className:"tooltip",children:"Average percentage change in clearing price over the last 5 minutes."})]})]}),a.jsxs(wm,{style:{color:m>=0?"#0ecb81":"#f6465d"},children:[m>=0?"+":"",m,"%"]})]}),a.jsxs(vm,{children:[a.jsx(ym,{children:"Active Bidders"}),a.jsx(wm,{children:_.toLocaleString()})]}),a.jsxs(YU,{children:[a.jsxs(qU,{children:[a.jsx("span",{className:"live-indicator"}),a.jsx(WU,{children:"Recent Bid Activity"})]}),a.jsx(GU,{children:s.map((D,L)=>a.jsxs(XU,{children:[a.jsxs(QU,{children:[a.jsx("span",{className:"user",children:D.user})," ",a.jsx("span",{className:"action",children:D.action})," ",a.jsx("span",{className:"amount",children:D.amount})," ",a.jsxs("span",{className:"action",children:["for ",D.tokens," token",D.tokens!==1?"s":""]})]}),a.jsx(ZU,{children:D.time})]},L))})]}),a.jsx(fU,{userBids:c,clearingPrice:e,onAmendBid:d})]})},eI=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text, #f8f9fa);
  font-family: var(--font-family, 'Inter', sans-serif);
`,tI=f(st)`
  display: inline-flex;
  align-items: center;
  color: var(--color-text-secondary, #848e9c);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    color: var(--color-accent, #f0b90b);
  }
`,rI=f.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text, #f8f9fa);
  margin-bottom: 0.75rem;
`,nI=f.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.5;
`,oI=f.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`,iI=f.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
`,aI=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,sI=f.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,lI=f.div`
  flex: 1;
`,cI=f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  display: flex;
  align-items: baseline;
`,dI=f.span`
  font-size: 1rem;
  color: var(--color-text-secondary, #848e9c);
  margin-left: 1rem;
  font-weight: normal;
`,uI=f.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 1rem;
`,hI=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0d78a;
  color: #000;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,fI=f.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  font-size: 0.75rem;
  margin-left: 8px;
  color: #000;
`,pI=f.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #2ecc71;
  border-radius: 50%;
  box-shadow: 0 0 4px 1px #2ecc71;
  animation: pulseGreen 1.5s infinite;
  margin-right: 2px;
  
  @keyframes pulseGreen {
    0% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);
    }
    70% {
      box-shadow: 0 0 0 4px rgba(46, 204, 113, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
    }
  }
`,mI=f.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`,ku=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Cu=f.span`
  font-size: 0.75rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 0.25rem;
`,Mu=f.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
`;f.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 20px;
    height: 20px;
  }
`;const gI=f.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: row;
  }
`,kw=f.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9375rem;
  transition: all 0.2s;
  width: 140px;
  text-align: center;
  border: none;
  
  &:hover {
    opacity: 0.9;
  }
`,xI=f.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    display: block;
  }
`,bI=f.button`
  display: none;
  background-color: var(--color-accent, #f0b90b);
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.875rem;
  
  @media (max-width: 1024px) {
    display: block;
  }
  
  &:hover {
    background-color: #d9a400;
  }
`,Cw=f.div`
  @media (max-width: 1024px) {
    .bid-distribution-section {
      margin-top: 2rem;
    }
  }
`,vI=f.div`
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`,jm=f.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,yI=f.div`
  background-color: rgba(var(--color-accent-rgb, 240, 185, 11), 0.1);
  border: 1px solid rgba(var(--color-accent-rgb, 240, 185, 11), 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  
  h3 {
    color: var(--color-accent, #f0b90b);
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
  
  .key-point {
    font-weight: bold;
    color: var(--color-accent, #f0b90b);
  }
`,wI=()=>{const e={name:"83 Fitzwilliam Road",location:"Vaucluse, Sydney",imageUrl:"https://rimh2.domainstatic.com.au/K2F_ORgd_kmIe3ClzBwmk_giZC4=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2017423566_1_1_211118_045100-w1920-h1279",bedrooms:5,bathrooms:4,carSpots:2,propertyType:"House",totalTokens:100},[t,n]=S.useState(12e4),[o]=S.useState(12e4),[s,c]=S.useState(13e6),[d,h]=S.useState(12e3),[m,p]=S.useState([{id:"bid1",price:122e3,tokenAmount:1.5,timestamp:new Date().toISOString()},{id:"bid2",price:125e3,tokenAmount:2.25,timestamp:new Date().toISOString()},{id:"bid3",price:118e3,tokenAmount:.75,timestamp:new Date().toISOString()}]),[x,v]=S.useState(null),[y,j]=S.useState(null),[w,C]=S.useState(!1),k=S.useRef(null),_=()=>{const H=[];for(let ee=12e4;ee<2e5;ee+=1e3)H.push({priceRange:[ee,ee+1e3],count:0,tokens:0});return H},[z,D]=S.useState(_()),[L,A]=S.useState([{id:"initial-1",user:"Alex S.",action:"placed a bid",amount:"$142",tokens:2,time:"2 minutes ago",timestamp:Date.now()-2*60*1e3},{id:"initial-2",user:"Morgan W.",action:"placed a bid",amount:"$138.5",tokens:1,time:"5 minutes ago",timestamp:Date.now()-5*60*1e3},{id:"initial-3",user:"Taylor R.",action:"placed a bid",amount:"$143",tokens:3,time:"8 minutes ago",timestamp:Date.now()-8*60*1e3},{id:"initial-4",user:"Jordan K.",action:"placed a bid",amount:"$141",tokens:2,time:"12 minutes ago",timestamp:Date.now()-12*60*1e3},{id:"initial-5",user:"Casey P.",action:"placed a bid",amount:"$139",tokens:1,time:"15 minutes ago",timestamp:Date.now()-15*60*1e3}]),[V,E]=S.useState(1),[F,te]=S.useState([]),[de,le]=S.useState(0);S.useEffect(()=>{const H=setInterval(()=>{A(ne=>ne.length===0?ne:ne.map(P=>{const $=Math.floor((Date.now()-P.timestamp)/1e3);let G;if($<60)G="just now";else if($<3600){const R=Math.floor($/60);G=`${R} minute${R!==1?"s":""} ago`}else{const R=Math.floor($/3600);G=`${R} hour${R!==1?"s":""} ago`}return{...P,time:G}}))},3e4),ee=setInterval(()=>{const ne=t,P=L.length>0?parseFloat(L[0].amount.replace(/[^0-9.k]/g,"")):ne/1e3;let $=.001,G,R=.9;if(ne<13e4?(G=.005,R=.95):ne<14e4?(G=.004,R=.9):ne<145e3?(G=.003,R=.8):ne<148e3?(G=.002,R=.6):ne<15e4?(G=.0015,R=.3):(G=.001,R=.1),Math.random()>R)return;const Y=$+Math.random()*(G-$),J=Math.max(ne,P*1e3);let Q;const ue=Math.random();if(ue<.8)if(J>=149e3)Q=Math.max(Math.ceil(ne*1.001),149e3+Math.floor(Math.random()*1500));else if(J>=145e3){const Ze=Math.max(.001,Y*.2);Q=Math.max(Math.ceil(ne*1.001),Math.round(J*(1+Ze)))}else{const Ze=.001+Math.random()*.001;Q=Math.round(J*(1+Ze))}else if(ue<.95){const Ze=.005+Math.random()*.015;Q=Math.round(J*(1+Ze))}else{const Ze=.02+Math.random()*.03;Q=Math.round(J*(1+Ze))}Q=Math.max(Q,Math.ceil(ne*1.001));let ce;ne<13e4?ce=3:ne<14e4?ce=2.5:ne<145e3?ce=1.75:ne<15e4?ce=1.25:ce=.75;const ve=Math.min(.125,ce/2),Fe=parseFloat((ve+Math.random()*(ce-ve)).toFixed(3)),je=["Alex S.","Morgan L.","Jamie W.","Taylor R.","Jordan B.","Casey P.","Robin M.","Quinn T.","Avery D.","Blake C.","Skyler F.","Riley H.","Dakota J.","Parker N.","Jordan V."],Ye={id:`sim-bid-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,price:Q,tokenAmount:Fe,timestamp:new Date().toISOString(),bidder:je[Math.floor(Math.random()*je.length)]},Qe={id:`bid-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,user:Ye.bidder,action:"placed a bid",amount:`$${(Q/1e3).toFixed(1)}k`,tokens:Fe.toFixed(3),time:"just now",timestamp:Date.now()};A(Ze=>[Qe,...Ze].slice(0,20)),D(Ze=>{const rt=[...Ze],zt=Q;for(const Dt of rt){const[Pt,ge]=Dt.priceRange;if(zt>=Pt&&zt<ge){Dt.count+=1,Dt.tokens+=Fe;break}}return rt});const ir=fe(),Nr=[...m,...ir,Ye],gr=me(Nr);if(gr!==t){const rt=gr>t?Math.min(gr,t+500):t;n(rt),c(rt*100),te(Pt=>{const ge=new Date,xe=[...Pt,{price:rt,timestamp:ge}],Ae=new Date(ge.getTime()-30*60*1e3);return xe.filter(Oe=>Oe.timestamp>Ae)});const Dt=1+(gr-t)/t*100/100;E(Dt)}},1e3);return()=>{clearInterval(ee),clearInterval(H)}},[t,L,m]),S.useEffect(()=>{const H=setInterval(()=>{h(ee=>ee<=0?(clearInterval(H),0):ee-1)},1e3);return()=>clearInterval(H)},[]),S.useEffect(()=>{const H=setInterval(()=>{if(F.length>0){const ee=new Date,ne=new Date(ee.getTime()-5*60*1e3),P=F.filter($=>$.timestamp<=ne);if(P.length>0){const G=P.reduce((J,Q)=>{const ue=Math.abs(Q.timestamp-ne),ce=Math.abs(J.timestamp-ne);return ue<ce?Q:J}).price,Y=(t-G)/G*100;le(Math.round(Y*10)/10)}else if(F.length>1){const G=F[0].price,R=(t-G)/G*100;le(Math.round(R*10)/10)}}},1e3);return()=>clearInterval(H)},[F,t]);const fe=()=>{const H=["Alex S.","Morgan L.","Jamie W.","Taylor R.","Jordan B.","Casey P.","Robin M.","Quinn T.","Avery D.","Blake C.","Skyler F.","Riley H.","Dakota J.","Parker N.","Jordan V."],ee=[];return z.forEach(ne=>{const[P,$]=ne.priceRange,G=ne.count;for(let R=0;R<G;R++){const Y=Math.min(2e5,Math.floor(P+Math.random()*($-P))),J=parseFloat((.125+Math.random()*2.375).toFixed(3));ee.push({id:`sim-${P}-${R}`,price:Y,tokenAmount:J,timestamp:new Date().toISOString(),bidder:H[Math.floor(Math.random()*H.length)]})}}),ee},me=H=>{const ee=[...H].sort((G,R)=>R.price-G.price);let ne=0,P=!1,$=0;for(const G of ee){const R=ne;if(ne+=G.tokenAmount,R<100&&ne>=100){$=G.price,P=!0;break}}return P||($=ee.length>0?ee[ee.length-1].price:o),$=Math.min(2e5,$),console.log(`Clearing price calculated: $${$.toLocaleString()} based on ${ne} tokens`),$};S.useEffect(()=>{const H=[];let ee=0;console.log("Generating initial bids to fill all 100 tokens...");const ne=m.reduce((Y,J)=>Y+J.tokenAmount,0);ee+=ne;let P=0;const $=1e3;for(;ee<100&&P<$;){P++;let Y;const J=Math.random();if(J<.8)if(t>=149e3)Y=149e3+Math.floor(Math.random()*1500);else if(t>=145e3){const je=1+(Math.random()*.002-.001);Y=Math.round(t*je)}else{const je=1+(1e-4+Math.random()*.001);Y=Math.round(t*je)}else if(J<.95){const je=1+(.005+Math.random()*.015);Y=Math.round(t*je)}else{const je=1+(.02+Math.random()*.03);Y=Math.min(2e5,Math.round(t*je))}const Q=Math.min(2.5,100-ee),ue=parseFloat((.125+Math.random()*(Q-.125)).toFixed(3)),ce=["Alex S.","Morgan L.","Jamie W.","Taylor R.","Jordan B.","Casey P.","Robin M.","Quinn T.","Avery D.","Blake C.","Skyler F.","Riley H.","Dakota J.","Parker N.","Jordan V."],ve=ce[Math.floor(Math.random()*ce.length)],Fe={id:`init-bid-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,price:Y,tokenAmount:ue,timestamp:new Date(Date.now()-Math.random()*36e5).toISOString(),bidder:ve};if(H.push(Fe),H.length<=5){const je={user:ve,action:"placed a bid",amount:`$${(Y/1e3).toFixed(1)}k`,tokens:ue,time:Math.floor(Math.random()*10)+1+" minutes ago"};setTimeout(()=>{A(Ye=>[{...je,id:`user-bid-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,timestamp:Date.now()},...Ye].slice(0,20))},H.length*300)}}D(Y=>{const J=[...Y];return H.forEach(Q=>{for(const ue of J){const[ce,ve]=ue.priceRange;if(Q.price>=ce&&Q.price<ve){ue.count+=1,ue.tokens+=Q.tokenAmount;break}}}),J});const G=[...m,...fe(),...H],R=me(G);n(R),c(R*100),console.log(`Generated ${H.length} initial bids, new clearing price: $${R.toLocaleString()}`)},[]);const pe=(H,ee,ne=null)=>{const $={id:ne||`bid${Date.now()}`,price:H,tokenAmount:ee,timestamp:new Date().toISOString()};let G=[];ne?(G=m.map(Q=>Q.id===ne?$:Q),p(G),v(null)):(G=[...m,$],p(G));const R={user:"You",action:ne?"amended a bid":"placed a bid",amount:`$${(H/1e3).toFixed(1)}k`,tokens:ee.toFixed(3),time:"just now"};A(Q=>[{...R,id:`user-bid-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,timestamp:Date.now()},...Q].slice(0,20)),D(Q=>{const ue=[...Q];if(ne){const ve=m.find(Fe=>Fe.id===ne);if(ve){const Fe=Math.ceil(ve.price/1e3)*1e3;for(const je of ue){const[Ye,Qe]=je.priceRange;if(Fe>=Ye&&Fe<Qe){je.count=Math.max(0,je.count-1),je.tokens=Math.max(0,je.tokens-ve.tokenAmount);break}}}}const ce=Math.ceil(H/1e3)*1e3;for(const ve of ue){const[Fe,je]=ve.priceRange;if(ce>=Fe&&ce<je){ve.count+=1,ve.tokens+=ee;break}}return ue});const Y=[...G,...fe()],J=me(Y);console.log(`New clearing price calculated: $${J.toLocaleString()} after user placed bid of $${H.toLocaleString()} for ${ee} tokens`),J!==t&&(n(J),c(J*100)),C(!0),console.log("User placed/amended bid, marking as interacted with bid panel")},be=H=>{try{const ee={...H};v(ee),j(ee),C(!1),console.log("Amend/Increase bid clicked, resetting userInteractedWithBidPanel to false"),setTimeout(()=>{try{const ne=document.getElementById("bid-panel");if(ne){ne.scrollIntoView({behavior:"smooth"});const P=ne.querySelectorAll("input"),$=ne.querySelectorAll('button:not([type="submit"])'),G=()=>{C(!0),console.log("User interacted with bid panel after clicking Increase Bid"),P.forEach(R=>R.removeEventListener("focus",G)),$.forEach(R=>R.removeEventListener("click",G))};P.forEach(R=>R.addEventListener("focus",G)),$.forEach(R=>R.addEventListener("click",G))}console.log("Successfully set bid to amend:",ee)}catch(ne){console.error("Error scrolling to bid panel:",ne)}},0)}catch(ee){console.error("Error in handleAmendBid:",ee),alert("There was an error processing your request. Please try again.")}},I=H=>{try{H&&(H.preventDefault(),H.stopPropagation()),v(null),console.log("Successfully cancelled amendment")}catch(ee){console.error("Error in handleCancelAmend:",ee)}};return a.jsxs(eI,{children:[a.jsxs(tI,{to:"/ipo",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back to IPO Listings"]}),a.jsx(rI,{children:"Auctions"}),a.jsx(nI,{children:"LOAF Auctions is pioneering a new multi-allocation auction system that enables true market price discovery."}),a.jsx(iI,{children:a.jsx(aI,{src:e.imageUrl,alt:e.name})}),a.jsx(oI,{children:a.jsxs(sI,{children:[a.jsxs(lI,{children:[a.jsxs(hI,{children:["AUCTION",a.jsxs(fI,{children:[a.jsx(pI,{}),"LIVE"]})]}),a.jsxs(cI,{children:[e.name,a.jsx(dI,{children:"83 Fitzwilliam Road"})]}),a.jsx(uI,{children:e.location}),a.jsxs(mI,{children:[a.jsxs(ku,{children:[a.jsx(Cu,{children:"Bedrooms"}),a.jsxs(Mu,{children:[e.bedrooms,a.jsx(Jt.IconWrapper,{children:a.jsx(Jt.BedroomIcon,{})})]})]}),a.jsxs(ku,{children:[a.jsx(Cu,{children:"Bathrooms"}),a.jsxs(Mu,{children:[e.bathrooms,a.jsx(Jt.IconWrapper,{children:a.jsx(Jt.BathroomIcon,{})})]})]}),a.jsxs(ku,{children:[a.jsx(Cu,{children:"Car Spots"}),a.jsxs(Mu,{children:[e.carSpots,a.jsx(Jt.IconWrapper,{children:a.jsx(Jt.CarIcon,{})})]})]}),a.jsxs(ku,{children:[a.jsx(Cu,{children:"Property Type"}),a.jsx(Mu,{children:e.propertyType})]})]})]}),a.jsxs(gI,{children:[a.jsx(kw,{style:{backgroundColor:"var(--color-accent)",color:"#000"},onClick:()=>{var H;return(H=k.current)==null?void 0:H.scrollIntoView({behavior:"smooth"})},children:"Place Bid"}),a.jsx(kw,{style:{backgroundColor:"transparent",border:"1px solid var(--color-accent)",color:"var(--color-accent)"},children:"Property Details"})]})]})}),a.jsxs(yI,{children:[a.jsx("h3",{children:"How This Auction Works"}),a.jsxs("p",{children:[a.jsx("span",{className:"key-point",children:"Bids above clearing price when auction ends = guaranteed allocation"}),a.jsx("br",{}),a.jsx("span",{className:"key-point",children:"You pay clearing price"}),", not your bid price, even if your bid is higher."]}),a.jsxs("p",{children:["1. Place a bid above the clearing price (minimum bid 0.1% above)",a.jsx("br",{}),"2. If your bid stays above the clearing price, you're guaranteed allocation for your bid",a.jsx("br",{}),"3. The clearing price is related to bid demand and rises as more people bid at higher prices",a.jsx("br",{}),"4. When the auction ends, successful bids which remain above the clearing price will receive allocation at the clearing price"]})]}),a.jsxs(xI,{children:[a.jsxs(Cw,{children:[a.jsx(jm,{children:"Auction Status"}),a.jsx(JU,{clearingPrice:t,startingPrice:o,propertyValue:s,timeRemaining:d,recentActivity:L.slice(0,10),userBids:m,onAmendBid:be,clearingPriceChange:de,mobilePlaceBidButton:a.jsx(bI,{onClick:()=>{var H;(H=k.current)==null||H.scrollIntoView({behavior:"smooth"})},children:"Place Bid"})})]}),a.jsxs(vI,{ref:k,children:[a.jsx(jm,{children:"Place Your Bid"}),a.jsx(nU,{clearingPrice:t,userBids:m,onPlaceBid:pe,propertyValue:s,totalTokens:e.totalTokens,bidToAmend:x,onCancelAmend:I,userInteracted:w,setUserInteracted:C})]}),a.jsx(Cw,{children:a.jsxs("div",{className:"bid-distribution-section",children:[a.jsx(jm,{children:"Bid Distribution"}),a.jsx(RU,{bidDistribution:z,clearingPrice:t,userBids:m})]})})]})]})};f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: ${e=>e.compact?"0.75rem":"1rem"};
  margin-bottom: ${e=>e.compact?"0.75rem":"2rem"};
  z-index: 20;
  position: relative;
`;f.h3`
  font-size: ${e=>e.compact?"0.875rem":"1rem"};
  margin: 0 0 ${e=>e.compact?"0.5rem":"1rem"} 0;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;f.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.compact?"0.5rem":"0.75rem"};
  margin-bottom: ${e=>e.compact?"0.5rem":"1rem"};
`;f.button`
  background-color: ${e=>e.active?"var(--color-accent)":"var(--color-background)"};
  color: ${e=>e.active?"#000":"var(--color-text)"};
  border: 1px solid ${e=>e.active?"var(--color-accent)":"var(--color-border)"};
  border-radius: var(--border-radius);
  padding: ${e=>e.compact?"0.35rem 0.75rem":"0.5rem 1rem"};
  font-size: ${e=>e.compact?"0.75rem":"0.875rem"};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: var(--color-accent);
  }
`;f.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;f.div``;f.label`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
`;f.select`
  width: 100%;
  padding: 0.5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;f.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;f.input`
  flex: 1;
  padding: 0.5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;f.h3`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0;
`;f.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;f.div`
  cursor: pointer;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  transition: all 0.2s;
  flex: 1;
  
  &:hover {
    border-color: var(--color-accent);
  }
`;f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;f.div`
  width: ${e=>e.large?"100%":"48px"};
  height: ${e=>e.large?"250px":"48px"};
  border-radius: 8px;
  overflow: hidden;
  margin-right: ${e=>e.large?"0":"1rem"};
  margin-bottom: ${e=>e.large?"1rem":"0"};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;f.div`
  text-align: ${e=>e.centered?"center":"left"};
  width: 100%;
`;f.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;f.div`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
`;f.div`
  font-size: 0.75rem;
  color: var(--color-accent);
`;f.div`
  font-weight: 600;
`;f.div`
  position: relative;
  width: 100%;
  z-index: 10;
`;f.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  margin-top: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  display: ${e=>e.isOpen?"block":"none"};
  z-index: 30;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;f.div`
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  background-color: var(--color-card);
  z-index: 1;
`;f.div`
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  padding: 0.5rem 0.75rem;
  
  svg {
    color: var(--color-text-secondary);
    margin-right: 0.5rem;
  }
  
  input {
    background: none;
    border: none;
    color: var(--color-text);
    width: 100%;
    outline: none;
    
    &::placeholder {
      color: var(--color-text-secondary);
    }
  }
`;f.div`
  padding: 0.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--color-background);
  }
  
  ${e=>e.selected&&`
    background-color: rgba(var(--color-accent-rgb), 0.1);
  `}
`;f.div`
  padding: 1rem;
  text-align: center;
  color: var(--color-text-secondary);
`;f.div`
  width: 100%;
  height: 300px;
  position: relative;
`;f.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;f.button`
  background: ${e=>e.active?"var(--color-accent)":"transparent"};
  color: ${e=>e.active?"#000":"var(--color-text-secondary)"};
  border: none;
  border-radius: var(--border-radius);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: ${e=>e.active?"#000":"var(--color-text)"};
  }
`;f.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;f.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;f.path`
  stroke: var(--color-accent);
  stroke-width: 2;
  fill: none;
`;f.path`
  fill: url(#gradient);
  opacity: 0.2;
`;f.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;f.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;f.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  
  &:first-child {
    margin-right: -8px;
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;f.div`
  font-weight: 600;
`;f.div`
  margin-left: auto;
  font-weight: 600;
  color: var(--color-accent);
`;f.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;f.div`
  text-align: center;
`;f.div`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.25rem;
`;f.div`
  font-weight: 600;
`;f.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;f.h3`
  font-size: 1.25rem;
  margin: 0 0 1.5rem 0;
`;f.div`
  margin-bottom: 1.5rem;
`;f.label`
  display: block;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
`;f.div`
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem;
  
  &:focus-within {
    border-color: var(--color-accent);
  }
`;f.input`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  width: 100%;
  outline: none;
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;f.button`
  background-color: rgba(var(--color-accent-rgb), 0.1);
  color: var(--color-accent);
  border: none;
  border-radius: var(--border-radius);
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(var(--color-accent-rgb), 0.2);
  }
`;f.span`
  color: var(--color-text-secondary);
  margin-left: 0.5rem;
`;f.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
  margin-bottom: 1rem;
`;f.div`
  color: var(--color-text-secondary);
`;f.div`
  font-weight: 600;
`;f.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;f.div`
  color: var(--color-text-secondary);
`;f.div``;f.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
  margin: 1rem 0;
`;f.div`
  font-weight: 600;
`;f.div`
  font-weight: 600;
`;f.div`
  display: flex;
  gap: 1rem;
`;f.button`
  flex: 1;
  background-color: ${e=>e.primary?"var(--color-accent)":"transparent"};
  color: ${e=>e.primary?"#000":"var(--color-text)"};
  border: 1px solid ${e=>e.primary?"var(--color-accent)":"var(--color-border)"};
  border-radius: var(--border-radius);
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.primary?"var(--color-accent)":"rgba(var(--color-accent-rgb), 0.1)"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;f.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text);
`;f.div`
  margin-bottom: 2rem;
`;f.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;f.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
`;f.div`
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  min-height: 480px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;f.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: var(--color-accent);
    color: #000;
    transform: scale(1.05);
  }
  
  svg {
    font-size: 1.5rem;
  }
`;f.div`
  margin-top: 2rem;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;f.h2`
  font-size: 1.25rem;
  margin: 0;
`;f.div`
  display: flex;
  align-items: center;
`;f.span`
  margin-right: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;f.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    transition: .4s;
    border-radius: 24px;
    
    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }
  
  input:checked + span {
    background-color: var(--color-accent);
  }
  
  input:checked + span:before {
    transform: translateX(24px);
  }
`;const jI=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  color: var(--color-text);
`,SI=f.div`
  background: linear-gradient(135deg, #1a2030 0%, #0a101f 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #f0b90b, #f8d33a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 2rem;
    color: #eaecef;
    line-height: 1.6;
  }
`,Mw=f(st)`
  display: inline-block;
  background: linear-gradient(90deg, #f0b90b, #f8d33a);
  color: #000;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(240, 185, 11, 0.3);
  }
`,_u=f.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #f0b90b;
`,Tu=f.section`
  margin-bottom: 3rem;
`,_w=f.ul`
  list-style-type: none;
  padding: 0;
  
  li {
    background-color: rgba(26, 32, 48, 0.8);
    margin-bottom: 1rem;
    padding: 1.2rem;
    border-radius: 8px;
    border-left: 4px solid #f0b90b;
    display: flex;
    align-items: flex-start;
    
    svg {
      margin-right: 1rem;
      min-width: 24px;
      color: #f0b90b;
    }
    
    div {
      h3 {
        margin: 0 0 0.5rem;
        font-size: 1.2rem;
      }
      
      p {
        margin: 0;
        color: #b7bdc6;
        line-height: 1.5;
      }
    }
  }
`,kI=f.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  .step {
    background-color: rgba(26, 32, 48, 0.8);
    border-radius: 8px;
    padding: 1.5rem;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    .step-number {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: #f0b90b;
      color: #000;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    
    h3 {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 1.2rem;
    }
    
    p {
      color: #b7bdc6;
      line-height: 1.5;
      margin: 0;
    }
  }
`,CI=f.div`
  .faq-item {
    background-color: rgba(26, 32, 48, 0.8);
    border-radius: 8px;
    margin-bottom: 1rem;
    overflow: hidden;
    
    .faq-question {
      padding: 1.2rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      
      &:hover {
        background-color: rgba(240, 185, 11, 0.1);
      }
    }
    
    .faq-answer {
      padding: 0 1.2rem 1.2rem;
      color: #b7bdc6;
      line-height: 1.5;
    }
  }
`,MI=f.div`
  background-color: rgba(26, 32, 48, 0.8);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #b7bdc6;
  }
`,_I=()=>a.jsxs(jI,{children:[a.jsxs(SI,{children:[a.jsx("h1",{children:"List Your Property on LOAF"}),a.jsx("p",{children:"Turn your property into a tradable digital asset. Unlock new opportunities for property ownership, investment, and liquidity with LOAF's innovative tokenization platform."}),a.jsx(Mw,{to:"/contact",children:"Get Started"})]}),a.jsxs(Tu,{children:[a.jsx(_u,{children:"Why List Your Property on LOAF?"}),a.jsxs(_w,{children:[a.jsxs("li",{children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Increased Property Liquidity"}),a.jsx("p",{children:"Transform your illiquid real estate asset into tradable tokens that can be bought and sold 24/7 on our platform."})]})]}),a.jsxs("li",{children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Access to Global Investors"}),a.jsx("p",{children:"Reach a worldwide audience of potential investors interested in fractional property ownership."})]})]}),a.jsxs("li",{children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Transparent Valuation"}),a.jsx("p",{children:"Benefit from market-driven property valuation with real-time price discovery."})]})]}),a.jsxs("li",{children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Simplified Management"}),a.jsx("p",{children:"Our platform handles the complexities of property tokenization, legal compliance, and trading infrastructure."})]})]})]})]}),a.jsxs(Tu,{children:[a.jsx(_u,{children:"Property Requirements"}),a.jsxs(_w,{children:[a.jsxs("li",{children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"}),a.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Clear Title"}),a.jsx("p",{children:"Property must have a clear title with no liens or encumbrances that would prevent tokenization."})]})]}),a.jsxs("li",{children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"}),a.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Professional Valuation"}),a.jsx("p",{children:"Recent professional property valuation (within the last 6 months)."})]})]}),a.jsxs("li",{children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"}),a.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Property Documentation"}),a.jsx("p",{children:"Complete property documentation including floor plans, inspection reports, and maintenance records."})]})]}),a.jsxs("li",{children:[a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"}),a.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Legal Compliance"}),a.jsx("p",{children:"Property must comply with all local zoning laws and regulations for tokenization."})]})]})]})]}),a.jsxs(Tu,{children:[a.jsx(_u,{children:"The Listing Process"}),a.jsxs(kI,{children:[a.jsxs("div",{className:"step",children:[a.jsx("div",{className:"step-number",children:"1"}),a.jsx("h3",{children:"Initial Application"}),a.jsx("p",{children:"Submit your property details through our online application form for preliminary review."})]}),a.jsxs("div",{className:"step",children:[a.jsx("div",{className:"step-number",children:"2"}),a.jsx("h3",{children:"Property Assessment"}),a.jsx("p",{children:"Our team conducts a thorough assessment of your property and documentation."})]}),a.jsxs("div",{className:"step",children:[a.jsx("div",{className:"step-number",children:"3"}),a.jsx("h3",{children:"Legal Structure"}),a.jsx("p",{children:"We establish the appropriate legal structure for tokenizing your property."})]}),a.jsxs("div",{className:"step",children:[a.jsx("div",{className:"step-number",children:"4"}),a.jsx("h3",{children:"Token Creation"}),a.jsx("p",{children:"Your property is tokenized and prepared for listing on the LOAF platform."})]}),a.jsxs("div",{className:"step",children:[a.jsx("div",{className:"step-number",children:"5"}),a.jsx("h3",{children:"Market Launch"}),a.jsx("p",{children:"Your property tokens are listed on our marketplace and made available to investors."})]})]})]}),a.jsxs(Tu,{children:[a.jsx(_u,{children:"Frequently Asked Questions"}),a.jsxs(CI,{children:[a.jsxs("div",{className:"faq-item",children:[a.jsx("div",{className:"faq-question",children:"How long does the tokenization process take?"}),a.jsx("div",{className:"faq-answer",children:"The typical timeline from application to market listing is 4-6 weeks, depending on property complexity and documentation readiness."})]}),a.jsxs("div",{className:"faq-item",children:[a.jsx("div",{className:"faq-question",children:"What fees are involved in listing my property?"}),a.jsx("div",{className:"faq-answer",children:"LOAF charges a one-time tokenization fee and a small percentage of the total property value. Detailed fee structures are provided during the application process."})]}),a.jsxs("div",{className:"faq-item",children:[a.jsx("div",{className:"faq-question",children:"Can I still live in or use my property after tokenization?"}),a.jsx("div",{className:"faq-answer",children:"Yes, depending on the tokenization structure chosen, you may retain certain usage rights while benefiting from the liquidity of tokenization."})]}),a.jsxs("div",{className:"faq-item",children:[a.jsx("div",{className:"faq-question",children:"How is my property valued on the platform?"}),a.jsx("div",{className:"faq-answer",children:"Initial valuation is based on professional appraisals, while ongoing valuation is determined by market trading activity on the LOAF platform."})]})]})]}),a.jsxs(MI,{children:[a.jsx("h3",{children:"Ready to List Your Property?"}),a.jsx("p",{children:"Our team is ready to guide you through every step of the property tokenization process."}),a.jsx(Mw,{to:"/contact",children:"Contact Us"})]})]}),Sm=({children:e})=>{const{currentUser:t,loading:n}=Qo(),o=nn();return n?a.jsx("div",{children:"Loading..."}):t?e:a.jsx(Hw,{to:"/login",state:{from:o},replace:!0})};var TI={};const Xl=On`
  from { opacity: 0; }
  to { opacity: 1; }
`,zI=On`
  from { opacity: 1; }
  to { opacity: 0; transform: scale(0.8) translateY(50px) translateX(50px); }
`,DI=On`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,PI=On`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(20px); opacity: 0; }
`,AI=f.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${e=>e.isClosing?zI:Xl} 0.3s ease-out;
  animation-fill-mode: forwards;
  overflow-y: auto;
  padding: 20px 0;
  
  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 20px 0 150px 0; /* Add significant padding at bottom for mobile */
  }
`,EI=f.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  width: 90%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(230, 198, 86, 0.3);
  animation: ${e=>e.isClosing?PI:DI} 0.3s ease-out;
  animation-fill-mode: forwards;
  padding: 2rem;
  padding-bottom: 3rem; /* Extra padding at bottom */
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
    margin-bottom: 3rem;
    border-bottom-width: 2px;
  }
`,OI=f.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  height: 100px;
  align-items: center;
`,RI=f.img`
  height: 90px;
`,LI=f.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-text);
  
  span {
    color: var(--color-accent);
  }
`,BI=f.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`,$I=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,km=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,Cm=f.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  svg, img {
    width: 100%;
    height: 100%;
    color: var(--color-accent);
  }
`,Mm=f.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`,_m=f.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`,NI=f.div`
  background-color: rgba(230, 198, 86, 0.1);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2.5rem;
  text-align: center;
  border: 1px solid rgba(230, 198, 86, 0.2);
  width: 100%;
  align-self: stretch;
`,HI=f.p`
  font-size: 1rem;
  color: var(--color-text);
  margin: 0;
  
  span {
    color: var(--color-accent);
    font-weight: 600;
  }
`,FI=f.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
`,Tm=f.button`
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  
  &.primary {
    background-color: var(--color-accent);
    color: var(--color-background);
    border: none;
    
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
  
  &.secondary {
    background-color: transparent;
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    
    &:hover {
      background-color: rgba(230, 198, 86, 0.1);
    }
  }
`,VI=f.form`
  display: ${e=>e.visible?"block":"none"};
  animation: ${Xl} 0.3s ease-out;
  width: 100%;
  margin-bottom: 1rem;
`,Tw=f.div`
  margin-bottom: 1rem;
`,zw=f.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  background-color: var(--color-background-light);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,UI=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,II=f.input`
  margin-right: 0.5rem;
  cursor: pointer;
`,YI=f.label`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  cursor: pointer;
`,qI=f.div`
  color: #0ecb81;
  text-align: center;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: rgba(14, 203, 129, 0.1);
  margin-top: 1rem;
  display: ${e=>e.visible?"block":"none"};
  animation: ${Xl} 0.3s ease-out;
`,WI=f.div`
  color: #e74c3c;
  text-align: center;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: rgba(231, 76, 60, 0.1);
  margin-bottom: 1rem;
  animation: ${Xl} 0.3s ease-out;
`,GI=f.div`
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-size: 0.95rem;
  animation: ${Xl} 0.3s ease-out;
  display: ${e=>e.visible?"block":"none"};
`,XI=({onClose:e})=>{const[t,n]=S.useState(!1),[o,s]=S.useState(!1),[c,d]=S.useState(""),[h,m]=S.useState(""),[p,x]=S.useState(!0),[v,y]=S.useState(!1),[j,w]=S.useState(!1),[C,k]=S.useState("");pt.useEffect(()=>{const A=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=A}},[]);const _=()=>{n(!0),setTimeout(()=>{e()},250)},z=()=>{localStorage.setItem("loafWelcomePopupSeen","true"),_()},D=()=>{s(!0)},L=async A=>{A.preventDefault(),k(""),w(!0);try{const V=await fetch(`${TI.REACT_APP_API_URL||"http://localhost:5001"}/api/early-access/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,name:h||void 0,accept_marketing:p})}),E=await V.json();if(!V.ok)throw new Error(E.message||"Failed to register for early access");y(!0),localStorage.setItem("loafWelcomePopupSeen","true"),d(""),m("")}catch(V){console.error("Early access signup error:",V),k(V.message||"Something went wrong. Please try again.")}finally{w(!1)}};return a.jsx(AI,{isClosing:t,children:a.jsxs(EI,{isClosing:t,children:[a.jsx(OI,{children:a.jsx(RI,{src:"/loaf-logo.png",alt:"Loaf Logo"})}),a.jsxs(LI,{children:["Welcome to ",a.jsx("span",{children:"Loaf"})]}),a.jsx(BI,{children:"Reimagining luxury property investment through tokenization, providing unprecedented access and liquidity to a historically exclusive market."}),a.jsxs($I,{children:[a.jsxs(km,{children:[a.jsx(Cm,{children:a.jsx("img",{src:"/icons/access-icon.svg",alt:"Access Icon"})}),a.jsx(Mm,{children:"Access."}),a.jsx(_m,{children:"Invest in an exclusive class of blue-chip real estate assets"})]}),a.jsxs(km,{children:[a.jsx(Cm,{children:a.jsx("img",{src:"/icons/liquidity-icon.svg",alt:"Liquidity Icon"})}),a.jsx(Mm,{children:"Tradeability."}),a.jsx(_m,{children:"Pioneering true tradability in a traditionally illiquid asset."})]}),a.jsxs(km,{children:[a.jsx(Cm,{children:a.jsx("img",{src:"/icons/simplify-icon.svg",alt:"Real Assets Icon"})}),a.jsx(Mm,{children:"Real assets."}),a.jsx(_m,{children:"Real property - giving blockchain a real-world use case."})]})]}),a.jsx(NI,{children:a.jsxs(HI,{children:["You are viewing a ",a.jsx("span",{children:"demo version"})," of the Loaf platform. Experience how we're transforming property investment."]})}),a.jsxs(FI,{children:[a.jsx(Tm,{className:"primary",onClick:z,children:"Try Demo"}),a.jsx(Tm,{className:"secondary",onClick:D,children:"Exclusive Early Access"})]}),a.jsxs(VI,{visible:o,onSubmit:L,children:[a.jsx(GI,{visible:o,children:"Be the first to explore tokenised luxury property investments before our public launch. Get exclusive access to presale opportunities and premium property viewings."}),C&&a.jsx(WI,{children:C}),a.jsx(Tw,{children:a.jsx(zw,{type:"text",placeholder:"Your name",value:h,onChange:A=>m(A.target.value),required:!0})}),a.jsx(Tw,{children:a.jsx(zw,{type:"email",placeholder:"Your email address",value:c,onChange:A=>d(A.target.value),required:!0})}),a.jsxs(UI,{children:[a.jsx(II,{type:"checkbox",id:"marketing",checked:p,onChange:A=>x(A.target.checked)}),a.jsx(YI,{htmlFor:"marketing",children:"I agree to receive updates about early access and exclusive property offerings"})]}),a.jsx(Tm,{className:"primary",type:"submit",style:{width:"100%"},disabled:j,children:j?"Submitting...":"Sign Up"}),a.jsx(qI,{visible:v,children:"Thank you! We'll notify you when early access becomes available."})]})]})})},pS=On`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,QI=f.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  animation: ${pS} 0.5s ease-out;
`,ZI=f.button`
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  border-radius: 50px;
  padding: 12px 20px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    margin-right: 8px;
  }
`,KI=f.div`
  position: absolute;
  bottom: 60px;
  right: 0;
  background-color: var(--color-background);
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(230, 198, 86, 0.3);
  animation: ${pS} 0.3s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid var(--color-background);
  }
`,JI=f.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  
  span {
    color: var(--color-accent);
  }
`,eY=f.input`
  width: 100%;
  padding: 10px;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  background-color: var(--color-background-light);
  color: var(--color-text);
  font-size: 0.9rem;
  margin-bottom: 10px;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,tY=f.button`
  width: 100%;
  padding: 10px;
  border-radius: var(--border-radius);
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
`,rY=f.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,nY=f.input`
  margin-right: 0.5rem;
  cursor: pointer;
`,oY=f.label`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  cursor: pointer;
`,iY=f.div`
  color: #0ecb81;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.9rem;
`,aY=({onButtonClick:e})=>{const[t,n]=S.useState(!1),[o,s]=S.useState(""),[c,d]=S.useState(!1),[h,m]=S.useState(!1),p=()=>{n(!t),h&&m(!1)},x=v=>{v.preventDefault(),console.log("Email submitted:",o),console.log("Marketing accepted:",c),m(!0),s(""),d(!1)};return a.jsxs(QI,{children:[t&&a.jsx(KI,{children:h?a.jsx(iY,{children:"Thank you! We'll notify you when early access becomes available."}):a.jsxs(a.Fragment,{children:[a.jsxs(JI,{children:["Get ",a.jsx("span",{children:"Early Access"})]}),a.jsxs("form",{onSubmit:x,children:[a.jsx(eY,{type:"email",placeholder:"Your email address",value:o,onChange:v=>s(v.target.value),required:!0}),a.jsxs(rY,{children:[a.jsx(nY,{type:"checkbox",id:"marketing-floating",checked:c,onChange:v=>d(v.target.checked)}),a.jsx(oY,{htmlFor:"marketing-floating",children:"I agree to receive updates about early access"})]}),a.jsx(tY,{type:"submit",children:"Sign Up"})]})]})}),a.jsxs(ZI,{onClick:e||p,children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z",fill:"currentColor"})}),"Get Early Access"]})]})},sY=f.div`
  max-width: ${e=>e.noMaxWidth?"none":"1600px"};
  width: 100%;
  margin: 0 auto;
  padding: ${e=>e.noPadding?"0":"0 5%"};
  transition: filter 0.3s ease;
  background-color: var(--color-background);
  ${e=>e.blurred&&`
    filter: blur(8px);
    pointer-events: none;
  `}
`,lY=f(KM)`
  transition: filter 0.3s ease;
  ${e=>e.blurred&&`
    filter: blur(8px);
    pointer-events: none;
  `}
`,cY=f(HM)`
  transition: filter 0.3s ease;
  ${e=>e.blurred&&`
    filter: blur(8px);
    pointer-events: none;
  `}
`,dY=f.main`
  padding-top: calc(64px + ${Mg} + 1.5rem);
  width: 100%;
`,uY=()=>{const t=nn().pathname==="/";return a.jsx(dY,{isHomePage:t,children:a.jsxs(k8,{children:[a.jsx(Ht,{path:"/",element:a.jsx(L9,{})}),a.jsx(Ht,{path:"/properties",element:a.jsx(gD,{})}),a.jsx(Ht,{path:"/properties/:propertySlug",element:a.jsx(ru,{})}),a.jsx(Ht,{path:"/property-new/:id",element:a.jsx(ru,{})}),a.jsx(Ht,{path:"/property-new/:id/trade",element:a.jsx(ru,{initialTab:"trade"})}),a.jsx(Ht,{path:"/property-new/:id/offers",element:a.jsx(ru,{initialTab:"offers"})}),a.jsx(Ht,{path:"/market",element:a.jsx(H$,{})}),a.jsx(Ht,{path:"/buy",element:a.jsx(oN,{})}),a.jsx(Ht,{path:"/trade",element:a.jsx(Hw,{to:"/",replace:!0})}),a.jsx(Ht,{path:"/ipo",element:a.jsx(jH,{})}),a.jsx(Ht,{path:"/ipo/:id",element:a.jsx(vF,{})}),a.jsx(Ht,{path:"/ipo/:id/buy",element:a.jsx(OV,{})}),a.jsx(Ht,{path:"/auction-test",element:a.jsx(wI,{})}),a.jsx(Ht,{path:"/home-owners",element:a.jsx(_I,{})}),a.jsx(Ht,{path:"/login",element:a.jsx(pN,{})}),a.jsx(Ht,{path:"/register",element:a.jsx(_N,{})}),a.jsx(Ht,{path:"/portfolio",element:a.jsx(Sm,{children:a.jsx(UN,{})})}),a.jsx(Ht,{path:"/wallet",element:a.jsx(Sm,{children:a.jsx(QN,{})})}),a.jsx(Ht,{path:"/profile",element:a.jsx(Sm,{children:a.jsx(aH,{})})})]})})};function hY(){const[e,t]=S.useState(!1),[n,o]=S.useState(!1),[s,c]=S.useState(!1),[d,h]=S.useState(!1);S.useEffect(()=>{localStorage.removeItem("loafWelcomePopupSeen"),t(!0)},[]),S.useEffect(()=>{const x=new MutationObserver(v=>{v.forEach(y=>{if(y.attributeName==="class"){const j=document.body.classList.contains("map-view-active");h(j)}})});return x.observe(document.body,{attributes:!0}),()=>{x.disconnect()}},[]);const m=()=>{c(!0),setTimeout(()=>{t(!1),c(!1),o(!0)},300)},p=()=>{o(!1),t(!0)};return a.jsx(G8,{children:a.jsx($M,{children:a.jsx(bD,{children:a.jsx(B9,{children:a.jsxs(Kj,{children:[a.jsx(oC,{}),a.jsxs("div",{className:"app-container",style:{backgroundColor:"var(--color-background)"},children:[a.jsx(cY,{blurred:e}),a.jsx(lY,{blurred:e}),a.jsx(sY,{blurred:e,noPadding:d,noMaxWidth:d,children:a.jsx(uY,{})}),e&&a.jsx(XI,{onClose:m}),n&&!e&&a.jsx(aY,{onButtonClick:p})]})]})})})})})}Ek.createRoot(document.getElementById("root")).render(a.jsx(S.StrictMode,{children:a.jsx(hY,{})}));export{kk as g};
