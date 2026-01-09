(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var td={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function xT(){if(C_)return dl;C_=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:i,type:s,key:u,ref:o!==void 0?o:null,props:c}}return dl.Fragment=t,dl.jsx=n,dl.jsxs=n,dl}var D_;function yT(){return D_||(D_=1,td.exports=xT()),td.exports}var Z=yT(),ed={exports:{}},pl={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function ST(){return U_||(U_=1,(function(i){function t(k,G){var $=k.length;k.push(G);t:for(;0<$;){var _t=$-1>>>1,P=k[_t];if(0<o(P,G))k[_t]=G,k[$]=P,$=_t;else break t}}function n(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var G=k[0],$=k.pop();if($!==G){k[0]=$;t:for(var _t=0,P=k.length,J=P>>>1;_t<J;){var wt=2*(_t+1)-1,Et=k[wt],Rt=wt+1,Yt=k[Rt];if(0>o(Et,$))Rt<P&&0>o(Yt,Et)?(k[_t]=Yt,k[Rt]=$,_t=Rt):(k[_t]=Et,k[wt]=$,_t=wt);else if(Rt<P&&0>o(Yt,$))k[_t]=Yt,k[Rt]=$,_t=Rt;else break t}}return G}function o(k,G){var $=k.sortIndex-G.sortIndex;return $!==0?$:k.id-G.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,v=null,_=3,y=!1,b=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function w(k){for(var G=n(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=k)s(p),G.sortIndex=G.expirationTime,t(d,G);else break;G=n(p)}}function L(k){if(A=!1,w(k),!b)if(n(d)!==null)b=!0,ft();else{var G=n(p);G!==null&&lt(L,G.startTime-k)}}var D=!1,O=-1,I=5,z=-1;function T(){return!(i.unstable_now()-z<I)}function C(){if(D){var k=i.unstable_now();z=k;var G=!0;try{t:{b=!1,A&&(A=!1,x(O),O=-1),y=!0;var $=_;try{e:{for(w(k),v=n(d);v!==null&&!(v.expirationTime>k&&T());){var _t=v.callback;if(typeof _t=="function"){v.callback=null,_=v.priorityLevel;var P=_t(v.expirationTime<=k);if(k=i.unstable_now(),typeof P=="function"){v.callback=P,w(k),G=!0;break e}v===n(d)&&s(d),w(k)}else s(d);v=n(d)}if(v!==null)G=!0;else{var J=n(p);J!==null&&lt(L,J.startTime-k),G=!1}}break t}finally{v=null,_=$,y=!1}G=void 0}}finally{G?V():D=!1}}}var V;if(typeof R=="function")V=function(){R(C)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,at=st.port2;st.port1.onmessage=C,V=function(){at.postMessage(null)}}else V=function(){S(C,0)};function ft(){D||(D=!0,V())}function lt(k,G){O=S(function(){k(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(k){k.callback=null},i.unstable_continueExecution=function(){b||y||(b=!0,ft())},i.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<k?Math.floor(1e3/k):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return n(d)},i.unstable_next=function(k){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var $=_;_=G;try{return k()}finally{_=$}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(k,G){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var $=_;_=k;try{return G()}finally{_=$}},i.unstable_scheduleCallback=function(k,G,$){var _t=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?_t+$:_t):$=_t,k){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=$+P,k={id:g++,callback:G,priorityLevel:k,startTime:$,expirationTime:P,sortIndex:-1},$>_t?(k.sortIndex=$,t(p,k),n(d)===null&&k===n(p)&&(A?(x(O),O=-1):A=!0,lt(L,$-_t))):(k.sortIndex=P,t(d,k),b||y||(b=!0,ft())),k},i.unstable_shouldYield=T,i.unstable_wrapCallback=function(k){var G=_;return function(){var $=_;_=G;try{return k.apply(this,arguments)}finally{_=$}}}})(id)),id}var N_;function MT(){return N_||(N_=1,nd.exports=ST()),nd.exports}var ad={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function bT(){if(L_)return he;L_=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function S(P,J,wt){this.props=P,this.context=J,this.refs=A,this.updater=wt||y}S.prototype.isReactComponent={},S.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function x(){}x.prototype=S.prototype;function R(P,J,wt){this.props=P,this.context=J,this.refs=A,this.updater=wt||y}var w=R.prototype=new x;w.constructor=R,b(w,S.prototype),w.isPureReactComponent=!0;var L=Array.isArray,D={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function I(P,J,wt,Et,Rt,Yt){return wt=Yt.ref,{$$typeof:i,type:P,key:J,ref:wt!==void 0?wt:null,props:Yt}}function z(P,J){return I(P.type,J,void 0,void 0,void 0,P.props)}function T(P){return typeof P=="object"&&P!==null&&P.$$typeof===i}function C(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(wt){return J[wt]})}var V=/\/+/g;function st(P,J){return typeof P=="object"&&P!==null&&P.key!=null?C(""+P.key):J.toString(36)}function at(){}function ft(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(at,at):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function lt(P,J,wt,Et,Rt){var Yt=typeof P;(Yt==="undefined"||Yt==="boolean")&&(P=null);var nt=!1;if(P===null)nt=!0;else switch(Yt){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(P.$$typeof){case i:case t:nt=!0;break;case g:return nt=P._init,lt(nt(P._payload),J,wt,Et,Rt)}}if(nt)return Rt=Rt(P),nt=Et===""?"."+st(P,0):Et,L(Rt)?(wt="",nt!=null&&(wt=nt.replace(V,"$&/")+"/"),lt(Rt,J,wt,"",function(kt){return kt})):Rt!=null&&(T(Rt)&&(Rt=z(Rt,wt+(Rt.key==null||P&&P.key===Rt.key?"":(""+Rt.key).replace(V,"$&/")+"/")+nt)),J.push(Rt)),1;nt=0;var pt=Et===""?".":Et+":";if(L(P))for(var Mt=0;Mt<P.length;Mt++)Et=P[Mt],Yt=pt+st(Et,Mt),nt+=lt(Et,J,wt,Yt,Rt);else if(Mt=_(P),typeof Mt=="function")for(P=Mt.call(P),Mt=0;!(Et=P.next()).done;)Et=Et.value,Yt=pt+st(Et,Mt++),nt+=lt(Et,J,wt,Yt,Rt);else if(Yt==="object"){if(typeof P.then=="function")return lt(ft(P),J,wt,Et,Rt);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return nt}function k(P,J,wt){if(P==null)return P;var Et=[],Rt=0;return lt(P,Et,"","",function(Yt){return J.call(wt,Yt,Rt++)}),Et}function G(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(wt){(P._status===0||P._status===-1)&&(P._status=1,P._result=wt)},function(wt){(P._status===0||P._status===-1)&&(P._status=2,P._result=wt)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var $=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function _t(){}return he.Children={map:k,forEach:function(P,J,wt){k(P,function(){J.apply(this,arguments)},wt)},count:function(P){var J=0;return k(P,function(){J++}),J},toArray:function(P){return k(P,function(J){return J})||[]},only:function(P){if(!T(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},he.Component=S,he.Fragment=n,he.Profiler=o,he.PureComponent=R,he.StrictMode=s,he.Suspense=d,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,he.act=function(){throw Error("act(...) is not supported in production builds of React.")},he.cache=function(P){return function(){return P.apply(null,arguments)}},he.cloneElement=function(P,J,wt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Et=b({},P.props),Rt=P.key,Yt=void 0;if(J!=null)for(nt in J.ref!==void 0&&(Yt=void 0),J.key!==void 0&&(Rt=""+J.key),J)!O.call(J,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&J.ref===void 0||(Et[nt]=J[nt]);var nt=arguments.length-2;if(nt===1)Et.children=wt;else if(1<nt){for(var pt=Array(nt),Mt=0;Mt<nt;Mt++)pt[Mt]=arguments[Mt+2];Et.children=pt}return I(P.type,Rt,void 0,void 0,Yt,Et)},he.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},he.createElement=function(P,J,wt){var Et,Rt={},Yt=null;if(J!=null)for(Et in J.key!==void 0&&(Yt=""+J.key),J)O.call(J,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Rt[Et]=J[Et]);var nt=arguments.length-2;if(nt===1)Rt.children=wt;else if(1<nt){for(var pt=Array(nt),Mt=0;Mt<nt;Mt++)pt[Mt]=arguments[Mt+2];Rt.children=pt}if(P&&P.defaultProps)for(Et in nt=P.defaultProps,nt)Rt[Et]===void 0&&(Rt[Et]=nt[Et]);return I(P,Yt,void 0,void 0,null,Rt)},he.createRef=function(){return{current:null}},he.forwardRef=function(P){return{$$typeof:h,render:P}},he.isValidElement=T,he.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:G}},he.memo=function(P,J){return{$$typeof:p,type:P,compare:J===void 0?null:J}},he.startTransition=function(P){var J=D.T,wt={};D.T=wt;try{var Et=P(),Rt=D.S;Rt!==null&&Rt(wt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(_t,$)}catch(Yt){$(Yt)}finally{D.T=J}},he.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},he.use=function(P){return D.H.use(P)},he.useActionState=function(P,J,wt){return D.H.useActionState(P,J,wt)},he.useCallback=function(P,J){return D.H.useCallback(P,J)},he.useContext=function(P){return D.H.useContext(P)},he.useDebugValue=function(){},he.useDeferredValue=function(P,J){return D.H.useDeferredValue(P,J)},he.useEffect=function(P,J){return D.H.useEffect(P,J)},he.useId=function(){return D.H.useId()},he.useImperativeHandle=function(P,J,wt){return D.H.useImperativeHandle(P,J,wt)},he.useInsertionEffect=function(P,J){return D.H.useInsertionEffect(P,J)},he.useLayoutEffect=function(P,J){return D.H.useLayoutEffect(P,J)},he.useMemo=function(P,J){return D.H.useMemo(P,J)},he.useOptimistic=function(P,J){return D.H.useOptimistic(P,J)},he.useReducer=function(P,J,wt){return D.H.useReducer(P,J,wt)},he.useRef=function(P){return D.H.useRef(P)},he.useState=function(P){return D.H.useState(P)},he.useSyncExternalStore=function(P,J,wt){return D.H.useSyncExternalStore(P,J,wt)},he.useTransition=function(){return D.H.useTransition()},he.version="19.0.0",he}var P_;function xm(){return P_||(P_=1,ad.exports=bT()),ad.exports}var sd={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function ET(){if(O_)return zn;O_=1;var i=xm();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var u=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(d,p,null,g)},zn.flushSync=function(d){var p=u.T,g=s.p;try{if(u.T=null,s.p=2,d)return d()}finally{u.T=p,s.p=g,s.d.f()}},zn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(d,p))},zn.prefetchDNS=function(d){typeof d=="string"&&s.d.D(d)},zn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&s.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(d)},zn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);s.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(d)},zn.requestFormReset=function(d){s.d.r(d)},zn.unstable_batchedUpdates=function(d,p){return d(p)},zn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.0.0",zn}var F_;function TT(){if(F_)return sd.exports;F_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),sd.exports=ET(),sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function AT(){if(I_)return pl;I_=1;var i=MT(),t=xm(),n=TT();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),_=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),L=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case d:return"Fragment";case h:return"Portal";case g:return"Profiler";case p:return"StrictMode";case A:return"Suspense";case S:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case _:return(e._context.displayName||"Context")+".Consumer";case b:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return a=e.displayName||null,a!==null?a:z(e.type)||"Memo";case R:a=e._payload,e=e._init;try{return z(e(a))}catch{}}return null}var T=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,V,st;function at(e){if(V===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);V=a&&a[1]||"",st=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+e+st}var ft=!1;function lt(e,a){if(!e||ft)return"";ft=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var rt=ut}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ut){rt=ut}e.call(xt.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],U=m[1];if(M&&U){var B=M.split(`
`),j=U.split(`
`);for(f=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;f<j.length&&!j[f].includes("DetermineComponentFrameRoot");)f++;if(l===B.length||f===j.length)for(l=B.length-1,f=j.length-1;1<=l&&0<=f&&B[l]!==j[f];)f--;for(;1<=l&&0<=f;l--,f--)if(B[l]!==j[f]){if(l!==1||f!==1)do if(l--,f--,0>f||B[l]!==j[f]){var dt=`
`+B[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=f);break}}}finally{ft=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?at(r):""}function k(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return e=lt(e.type,!1),e;case 11:return e=lt(e.type.render,!1),e;case 1:return e=lt(e.type,!0),e;default:return""}}function G(e){try{var a="";do a+=k(e),e=e.return;while(e);return a}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function $(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function _t(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function P(e){if($(e)!==e)throw Error(s(188))}function J(e){var a=e.alternate;if(!a){if(a=$(e),a===null)throw Error(s(188));return a!==e?null:e}for(var r=e,l=a;;){var f=r.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===r)return P(f),e;if(m===l)return P(f),a;m=m.sibling}throw Error(s(188))}if(r.return!==l.return)r=f,l=m;else{for(var M=!1,U=f.child;U;){if(U===r){M=!0,r=f,l=m;break}if(U===l){M=!0,l=f,r=m;break}U=U.sibling}if(!M){for(U=m.child;U;){if(U===r){M=!0,r=m,l=f;break}if(U===l){M=!0,l=m,r=f;break}U=U.sibling}if(!M)throw Error(s(189))}}if(r.alternate!==l)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:a}function wt(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=wt(e),a!==null)return a;e=e.sibling}return null}var Et=Array.isArray,Rt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yt={pending:!1,data:null,method:null,action:null},nt=[],pt=-1;function Mt(e){return{current:e}}function kt(e){0>pt||(e.current=nt[pt],nt[pt]=null,pt--)}function Ct(e,a){pt++,nt[pt]=e.current,e.current=a}var ce=Mt(null),We=Mt(null),ue=Mt(null),Se=Mt(null);function Re(e,a){switch(Ct(ue,a),Ct(We,e),Ct(ce,null),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)&&(a=a.namespaceURI)?a_(a):0;break;default:if(e=e===8?a.parentNode:a,a=e.tagName,e=e.namespaceURI)e=a_(e),a=s_(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}kt(ce),Ct(ce,a)}function ae(){kt(ce),kt(We),kt(ue)}function je(e){e.memoizedState!==null&&Ct(Se,e);var a=ce.current,r=s_(a,e.type);a!==r&&(Ct(We,e),Ct(ce,r))}function H(e){We.current===e&&(kt(ce),kt(We)),Se.current===e&&(kt(Se),ll._currentValue=Yt)}var qe=Object.prototype.hasOwnProperty,Me=i.unstable_scheduleCallback,Pe=i.unstable_cancelCallback,qt=i.unstable_shouldYield,F=i.unstable_requestPaint,E=i.unstable_now,q=i.unstable_getCurrentPriorityLevel,ht=i.unstable_ImmediatePriority,vt=i.unstable_UserBlockingPriority,ct=i.unstable_NormalPriority,Zt=i.unstable_LowPriority,Ut=i.unstable_IdlePriority,Xt=i.log,ie=i.unstable_setDisableYieldValue,St=null,Tt=null;function Ht(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(St,e,void 0,(e.current.flags&128)===128)}catch{}}function Bt(e){if(typeof Xt=="function"&&ie(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(St,e)}catch{}}var bt=Math.clz32?Math.clz32:Ot,fe=Math.log,X=Math.LN2;function Ot(e){return e>>>=0,e===0?32:31-(fe(e)/X|0)|0}var At=128,Ft=4194304;function yt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,a){var r=e.pendingLanes;if(r===0)return 0;var l=0,f=e.suspendedLanes,m=e.pingedLanes,M=e.warmLanes;e=e.finishedLanes!==0;var U=r&134217727;return U!==0?(r=U&~f,r!==0?l=yt(r):(m&=U,m!==0?l=yt(m):e||(M=U&~M,M!==0&&(l=yt(M))))):(U=r&~f,U!==0?l=yt(U):m!==0?l=yt(m):e||(M=r&~M,M!==0&&(l=yt(M)))),l===0?0:a!==0&&a!==l&&(a&f)===0&&(f=l&-l,M=a&-a,f>=M||f===32&&(M&4194176)!==0)?a:l}function Dt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function se(e,a){switch(e){case 1:case 2:case 4:case 8:return a+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=At;return At<<=1,(At&4194176)===0&&(At=128),e}function we(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Qn(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function Xn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $u(e,a,r,l,f,m){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var U=e.entanglements,B=e.expirationTimes,j=e.hiddenUpdates;for(r=M&~r;0<r;){var dt=31-bt(r),xt=1<<dt;U[dt]=0,B[dt]=-1;var rt=j[dt];if(rt!==null)for(j[dt]=null,dt=0;dt<rt.length;dt++){var ut=rt[dt];ut!==null&&(ut.lane&=-536870913)}r&=~xt}l!==0&&_o(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~a))}function _o(e,a,r){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-bt(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|r&4194218}function ar(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var l=31-bt(r),f=1<<l;f&a|e[l]&a&&(e[l]|=a),r&=~f}}function ql(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xo(){var e=Rt.p;return e!==0?e:(e=window.event,e===void 0?32:b_(e.type))}function Yl(e,a){var r=Rt.p;try{return Rt.p=e,a()}finally{Rt.p=r}}var In=Math.random().toString(36).slice(2),on="__reactFiber$"+In,Tn="__reactProps$"+In,sa="__reactContainer$"+In,Fa="__reactEvents$"+In,Zl="__reactListeners$"+In,sr="__reactHandles$"+In,yo="__reactResources$"+In,Ia="__reactMarker$"+In;function So(e){delete e[on],delete e[Tn],delete e[Fa],delete e[Zl],delete e[sr]}function ra(e){var a=e[on];if(a)return a;for(var r=e.parentNode;r;){if(a=r[sa]||r[on]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=l_(e);e!==null;){if(r=e[on])return r;e=l_(e)}return a}e=r,r=e.parentNode}return null}function Ba(e){if(e=e[on]||e[sa]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function Ss(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function za(e){var a=e[yo];return a||(a=e[yo]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ln(e){e[Ia]=!0}var N=new Set,Y={};function ot(e,a){it(e,a),it(e+"Capture",a)}function it(e,a){for(Y[e]=a,e=0;e<a.length;e++)N.add(a[e])}var Q=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Lt={};function Vt(e){return qe.call(Lt,e)?!0:qe.call(It,e)?!1:Nt.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function Wt(e,a,r){if(Vt(a))if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+r)}}function $t(e,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+r)}}function jt(e,a,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(a,r,""+l)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ye(e){var a=Ne(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),l=""+e[a];if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var f=r.get,m=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return f.call(this)},set:function(M){l=""+M,m.call(this,M)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function He(e){e._valueTracker||(e._valueTracker=Ye(e))}function Oe(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),l="";return e&&(l=Ne(e)?e.checked?"true":"false":e.value),e=l,e!==r?(a.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Le=/[\n"\\]/g;function re(e){return e.replace(Le,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function An(e,a,r,l,f,m,M,U){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),a!=null?M==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ee(a)):e.value!==""+ee(a)&&(e.value=""+ee(a)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),a!=null?Rn(e,M,ee(a)):r!=null?Rn(e,M,ee(r)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+ee(U):e.removeAttribute("name")}function oa(e,a,r,l,f,m,M,U){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;r=r!=null?""+ee(r):"",a=a!=null?""+ee(a):r,U||a===e.value||(e.value=a),e.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=U?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Rn(e,a,r){a==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function fi(e,a,r,l){if(e=e.options,a){a={};for(var f=0;f<r.length;f++)a["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=a.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+ee(r),a=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}a!==null||e[f].disabled||(a=e[f])}a!==null&&(a.selected=!0)}}function Ie(e,a,r){if(a!=null&&(a=""+ee(a),a!==e.value&&(e.value=a),r==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=r!=null?""+ee(r):""}function wn(e,a,r,l){if(a==null){if(l!=null){if(r!=null)throw Error(s(92));if(Et(l)){if(1<l.length)throw Error(s(93));l=l[0]}r=l}r==null&&(r=""),a=r}r=ee(a),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l)}function pn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var Cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dn(e,a,r){var l=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,r):typeof r!="number"||r===0||Cn.has(a)?a==="float"?e.cssFloat=r:e[a]=(""+r).trim():e[a]=r+"px"}function rr(e,a,r){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&r[f]!==l&&Dn(e,f,l)}else for(var m in a)a.hasOwnProperty(m)&&Dn(e,m,a[m])}function Ci(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_b=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(e){return _b.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tf=null;function ef(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var or=null,lr=null;function pg(e){var a=Ba(e);if(a&&(e=a.stateNode)){var r=e[Tn]||null;t:switch(e=a.stateNode,a.type){case"input":if(An(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+re(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var l=r[a];if(l!==e&&l.form===e.form){var f=l[Tn]||null;if(!f)throw Error(s(90));An(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<r.length;a++)l=r[a],l.form===e.form&&Oe(l)}break t;case"textarea":Ie(e,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&fi(e,!!r.multiple,a,!1)}}}var nf=!1;function mg(e,a,r){if(nf)return e(a,r);nf=!0;try{var l=e(a);return l}finally{if(nf=!1,(or!==null||lr!==null)&&(Lc(),or&&(a=or,e=lr,lr=or=null,pg(a),e)))for(a=0;a<e.length;a++)pg(e[a])}}function Mo(e,a){var r=e.stateNode;if(r===null)return null;var l=r[Tn]||null;if(l===null)return null;r=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,a,typeof r));return r}var af=!1;if(Q)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){af=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{af=!1}var Va=null,sf=null,Ql=null;function gg(){if(Ql)return Ql;var e,a=sf,r=a.length,l,f="value"in Va?Va.value:Va.textContent,m=f.length;for(e=0;e<r&&a[e]===f[e];e++);var M=r-e;for(l=1;l<=M&&a[r-l]===f[m-l];l++);return Ql=f.slice(e,1<l?1-l:void 0)}function Jl(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function $l(){return!0}function vg(){return!1}function Jn(e){function a(r,l,f,m,M){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(r=e[U],this[U]=r?r(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?$l:vg,this.isPropagationStopped=vg,this}return C(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),a}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=Jn(Ms),Eo=C({},Ms,{view:0,detail:0}),xb=Jn(Eo),rf,of,To,ec=C({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(rf=e.screenX-To.screenX,of=e.screenY-To.screenY):of=rf=0,To=e),rf)},movementY:function(e){return"movementY"in e?e.movementY:of}}),_g=Jn(ec),yb=C({},ec,{dataTransfer:0}),Sb=Jn(yb),Mb=C({},Eo,{relatedTarget:0}),lf=Jn(Mb),bb=C({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Eb=Jn(bb),Tb=C({},Ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ab=Jn(Tb),Rb=C({},Ms,{data:0}),xg=Jn(Rb),wb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Db={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ub(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Db[e])?!!a[e]:!1}function cf(){return Ub}var Nb=C({},Eo,{key:function(e){if(e.key){var a=wb[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(e){return e.type==="keypress"?Jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lb=Jn(Nb),Pb=C({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yg=Jn(Pb),Ob=C({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),Fb=Jn(Ob),Ib=C({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bb=Jn(Ib),zb=C({},ec,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vb=Jn(zb),Hb=C({},Ms,{newState:0,oldState:0}),Gb=Jn(Hb),kb=[9,13,27,32],uf=Q&&"CompositionEvent"in window,Ao=null;Q&&"documentMode"in document&&(Ao=document.documentMode);var Xb=Q&&"TextEvent"in window&&!Ao,Sg=Q&&(!uf||Ao&&8<Ao&&11>=Ao),Mg=" ",bg=!1;function Eg(e,a){switch(e){case"keyup":return kb.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function Wb(e,a){switch(e){case"compositionend":return Tg(a);case"keypress":return a.which!==32?null:(bg=!0,Mg);case"textInput":return e=a.data,e===Mg&&bg?null:e;default:return null}}function jb(e,a){if(cr)return e==="compositionend"||!uf&&Eg(e,a)?(e=gg(),Ql=sf=Va=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Sg&&a.locale!=="ko"?null:a.data;default:return null}}var qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ag(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!qb[e.type]:a==="textarea"}function Rg(e,a,r,l){or?lr?lr.push(l):lr=[l]:or=l,a=Bc(a,"onChange"),0<a.length&&(r=new tc("onChange","change",null,r,l),e.push({event:r,listeners:a}))}var Ro=null,wo=null;function Yb(e){$v(e,0)}function nc(e){var a=Ss(e);if(Oe(a))return e}function wg(e,a){if(e==="change")return a}var Cg=!1;if(Q){var ff;if(Q){var hf="oninput"in document;if(!hf){var Dg=document.createElement("div");Dg.setAttribute("oninput","return;"),hf=typeof Dg.oninput=="function"}ff=hf}else ff=!1;Cg=ff&&(!document.documentMode||9<document.documentMode)}function Ug(){Ro&&(Ro.detachEvent("onpropertychange",Ng),wo=Ro=null)}function Ng(e){if(e.propertyName==="value"&&nc(wo)){var a=[];Rg(a,wo,e,ef(e)),mg(Yb,a)}}function Zb(e,a,r){e==="focusin"?(Ug(),Ro=a,wo=r,Ro.attachEvent("onpropertychange",Ng)):e==="focusout"&&Ug()}function Kb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nc(wo)}function Qb(e,a){if(e==="click")return nc(a)}function Jb(e,a){if(e==="input"||e==="change")return nc(a)}function $b(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ii=typeof Object.is=="function"?Object.is:$b;function Co(e,a){if(ii(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),l=Object.keys(a);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!qe.call(a,f)||!ii(e[f],a[f]))return!1}return!0}function Lg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pg(e,a){var r=Lg(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=a&&l>=a)return{node:r,offset:a-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Lg(r)}}function Og(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Og(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Fg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Qt(e.document);a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Qt(e.document)}return a}function df(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function tE(e,a){var r=Fg(a);a=e.focusedElem;var l=e.selectionRange;if(r!==a&&a&&a.ownerDocument&&Og(a.ownerDocument.documentElement,a)){if(l!==null&&df(a)){if(e=l.start,r=l.end,r===void 0&&(r=e),"selectionStart"in a)a.selectionStart=e,a.selectionEnd=Math.min(r,a.value.length);else if(r=(e=a.ownerDocument||document)&&e.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,m=Math.min(l.start,f);l=l.end===void 0?m:Math.min(l.end,f),!r.extend&&m>l&&(f=l,l=m,m=f),f=Pg(a,m);var M=Pg(a,l);f&&M&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==M.node||r.focusOffset!==M.offset)&&(e=e.createRange(),e.setStart(f.node,f.offset),r.removeAllRanges(),m>l?(r.addRange(e),r.extend(M.node,M.offset)):(e.setEnd(M.node,M.offset),r.addRange(e)))}}for(e=[],r=a;r=r.parentNode;)r.nodeType===1&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<e.length;a++)r=e[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var eE=Q&&"documentMode"in document&&11>=document.documentMode,ur=null,pf=null,Do=null,mf=!1;function Ig(e,a,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;mf||ur==null||ur!==Qt(l)||(l=ur,"selectionStart"in l&&df(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Do&&Co(Do,l)||(Do=l,l=Bc(pf,"onSelect"),0<l.length&&(a=new tc("onSelect","select",null,a,r),e.push({event:a,listeners:l}),a.target=ur)))}function bs(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var fr={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},gf={},Bg={};Q&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Es(e){if(gf[e])return gf[e];if(!fr[e])return e;var a=fr[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in Bg)return gf[e]=a[r];return e}var zg=Es("animationend"),Vg=Es("animationiteration"),Hg=Es("animationstart"),nE=Es("transitionrun"),iE=Es("transitionstart"),aE=Es("transitioncancel"),Gg=Es("transitionend"),kg=new Map,Xg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Di(e,a){kg.set(e,a),ot(a,[e])}var hi=[],hr=0,vf=0;function ic(){for(var e=hr,a=vf=hr=0;a<e;){var r=hi[a];hi[a++]=null;var l=hi[a];hi[a++]=null;var f=hi[a];hi[a++]=null;var m=hi[a];if(hi[a++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&Wg(r,f,m)}}function ac(e,a,r,l){hi[hr++]=e,hi[hr++]=a,hi[hr++]=r,hi[hr++]=l,vf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _f(e,a,r,l){return ac(e,a,r,l),sc(e)}function Ha(e,a){return ac(e,null,null,a),sc(e)}function Wg(e,a,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;f&&a!==null&&e.tag===3&&(m=e.stateNode,f=31-bt(r),m=m.hiddenUpdates,e=m[f],e===null?m[f]=[a]:e.push(a),a.lane=r|536870912)}function sc(e){if(50<el)throw el=0,Eh=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var dr={},jg=new WeakMap;function di(e,a){if(typeof e=="object"&&e!==null){var r=jg.get(e);return r!==void 0?r:(a={value:e,source:a,stack:G(a)},jg.set(e,a),a)}return{value:e,source:a,stack:G(a)}}var pr=[],mr=0,rc=null,oc=0,pi=[],mi=0,Ts=null,la=1,ca="";function As(e,a){pr[mr++]=oc,pr[mr++]=rc,rc=e,oc=a}function qg(e,a,r){pi[mi++]=la,pi[mi++]=ca,pi[mi++]=Ts,Ts=e;var l=la;e=ca;var f=32-bt(l)-1;l&=~(1<<f),r+=1;var m=32-bt(a)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,la=1<<32-bt(a)+f|r<<f|l,ca=m+e}else la=1<<m|r<<f|l,ca=e}function xf(e){e.return!==null&&(As(e,1),qg(e,1,0))}function yf(e){for(;e===rc;)rc=pr[--mr],pr[mr]=null,oc=pr[--mr],pr[mr]=null;for(;e===Ts;)Ts=pi[--mi],pi[mi]=null,ca=pi[--mi],pi[mi]=null,la=pi[--mi],pi[mi]=null}var Wn=null,Un=null,Ce=!1,Ui=null,Gi=!1,Sf=Error(s(519));function Rs(e){var a=Error(s(418,""));throw Lo(di(a,e)),Sf}function Yg(e){var a=e.stateNode,r=e.type,l=e.memoizedProps;switch(a[on]=e,a[Tn]=l,r){case"dialog":xe("cancel",a),xe("close",a);break;case"iframe":case"object":case"embed":xe("load",a);break;case"video":case"audio":for(r=0;r<il.length;r++)xe(il[r],a);break;case"source":xe("error",a);break;case"img":case"image":case"link":xe("error",a),xe("load",a);break;case"details":xe("toggle",a);break;case"input":xe("invalid",a),oa(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),He(a);break;case"select":xe("invalid",a);break;case"textarea":xe("invalid",a),wn(a,l.value,l.defaultValue,l.children),He(a)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||l.suppressHydrationWarning===!0||i_(a.textContent,r)?(l.popover!=null&&(xe("beforetoggle",a),xe("toggle",a)),l.onScroll!=null&&xe("scroll",a),l.onScrollEnd!=null&&xe("scrollend",a),l.onClick!=null&&(a.onclick=zc),a=!0):a=!1,a||Rs(e)}function Zg(e){for(Wn=e.return;Wn;)switch(Wn.tag){case 3:case 27:Gi=!0;return;case 5:case 13:Gi=!1;return;default:Wn=Wn.return}}function Uo(e){if(e!==Wn)return!1;if(!Ce)return Zg(e),Ce=!0,!1;var a=!1,r;if((r=e.tag!==3&&e.tag!==27)&&((r=e.tag===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Hh(e.type,e.memoizedProps)),r=!r),r&&(a=!0),a&&Un&&Rs(e),Zg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(a===0){Un=Li(e.nextSibling);break t}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++;e=e.nextSibling}Un=null}}else Un=Wn?Li(e.stateNode.nextSibling):null;return!0}function No(){Un=Wn=null,Ce=!1}function Lo(e){Ui===null?Ui=[e]:Ui.push(e)}var Po=Error(s(460)),Kg=Error(s(474)),Mf={then:function(){}};function Qg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lc(){}function Jg(e,a,r){switch(r=e[r],r===void 0?e.push(a):r!==a&&(a.then(lc,lc),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,e===Po?Error(s(483)):e;default:if(typeof a.status=="string")a.then(lc,lc);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,e===Po?Error(s(483)):e}throw Oo=a,Po}}var Oo=null;function $g(){if(Oo===null)throw Error(s(459));var e=Oo;return Oo=null,e}var gr=null,Fo=0;function cc(e){var a=Fo;return Fo+=1,gr===null&&(gr=[]),Jg(gr,e,a)}function Io(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function uc(e,a){throw a.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function t0(e){var a=e._init;return a(e._payload)}function e0(e){function a(K,W){if(e){var et=K.deletions;et===null?(K.deletions=[W],K.flags|=16):et.push(W)}}function r(K,W){if(!e)return null;for(;W!==null;)a(K,W),W=W.sibling;return null}function l(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function f(K,W){return K=$a(K,W),K.index=0,K.sibling=null,K}function m(K,W,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<W?(K.flags|=33554434,W):et):(K.flags|=33554434,W)):(K.flags|=1048576,W)}function M(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function U(K,W,et,gt){return W===null||W.tag!==6?(W=gh(et,K.mode,gt),W.return=K,W):(W=f(W,et),W.return=K,W)}function B(K,W,et,gt){var Gt=et.type;return Gt===d?dt(K,W,et.props.children,gt,et.key):W!==null&&(W.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===R&&t0(Gt)===W.type)?(W=f(W,et.props),Io(W,et),W.return=K,W):(W=wc(et.type,et.key,et.props,null,K.mode,gt),Io(W,et),W.return=K,W)}function j(K,W,et,gt){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=vh(et,K.mode,gt),W.return=K,W):(W=f(W,et.children||[]),W.return=K,W)}function dt(K,W,et,gt,Gt){return W===null||W.tag!==7?(W=Is(et,K.mode,gt,Gt),W.return=K,W):(W=f(W,et),W.return=K,W)}function xt(K,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=gh(""+W,K.mode,et),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case u:return et=wc(W.type,W.key,W.props,null,K.mode,et),Io(et,W),et.return=K,et;case h:return W=vh(W,K.mode,et),W.return=K,W;case R:var gt=W._init;return W=gt(W._payload),xt(K,W,et)}if(Et(W)||O(W))return W=Is(W,K.mode,et,null),W.return=K,W;if(typeof W.then=="function")return xt(K,cc(W),et);if(W.$$typeof===y)return xt(K,Tc(K,W),et);uc(K,W)}return null}function rt(K,W,et,gt){var Gt=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Gt!==null?null:U(K,W,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case u:return et.key===Gt?B(K,W,et,gt):null;case h:return et.key===Gt?j(K,W,et,gt):null;case R:return Gt=et._init,et=Gt(et._payload),rt(K,W,et,gt)}if(Et(et)||O(et))return Gt!==null?null:dt(K,W,et,gt,null);if(typeof et.then=="function")return rt(K,W,cc(et),gt);if(et.$$typeof===y)return rt(K,W,Tc(K,et),gt);uc(K,et)}return null}function ut(K,W,et,gt,Gt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(et)||null,U(W,K,""+gt,Gt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case u:return K=K.get(gt.key===null?et:gt.key)||null,B(W,K,gt,Gt);case h:return K=K.get(gt.key===null?et:gt.key)||null,j(W,K,gt,Gt);case R:var ge=gt._init;return gt=ge(gt._payload),ut(K,W,et,gt,Gt)}if(Et(gt)||O(gt))return K=K.get(et)||null,dt(W,K,gt,Gt,null);if(typeof gt.then=="function")return ut(K,W,et,cc(gt),Gt);if(gt.$$typeof===y)return ut(K,W,et,Tc(W,gt),Gt);uc(W,gt)}return null}function Kt(K,W,et,gt){for(var Gt=null,ge=null,Jt=W,ne=W=0,Mn=null;Jt!==null&&ne<et.length;ne++){Jt.index>ne?(Mn=Jt,Jt=null):Mn=Jt.sibling;var De=rt(K,Jt,et[ne],gt);if(De===null){Jt===null&&(Jt=Mn);break}e&&Jt&&De.alternate===null&&a(K,Jt),W=m(De,W,ne),ge===null?Gt=De:ge.sibling=De,ge=De,Jt=Mn}if(ne===et.length)return r(K,Jt),Ce&&As(K,ne),Gt;if(Jt===null){for(;ne<et.length;ne++)Jt=xt(K,et[ne],gt),Jt!==null&&(W=m(Jt,W,ne),ge===null?Gt=Jt:ge.sibling=Jt,ge=Jt);return Ce&&As(K,ne),Gt}for(Jt=l(Jt);ne<et.length;ne++)Mn=ut(Jt,K,ne,et[ne],gt),Mn!==null&&(e&&Mn.alternate!==null&&Jt.delete(Mn.key===null?ne:Mn.key),W=m(Mn,W,ne),ge===null?Gt=Mn:ge.sibling=Mn,ge=Mn);return e&&Jt.forEach(function(rs){return a(K,rs)}),Ce&&As(K,ne),Gt}function oe(K,W,et,gt){if(et==null)throw Error(s(151));for(var Gt=null,ge=null,Jt=W,ne=W=0,Mn=null,De=et.next();Jt!==null&&!De.done;ne++,De=et.next()){Jt.index>ne?(Mn=Jt,Jt=null):Mn=Jt.sibling;var rs=rt(K,Jt,De.value,gt);if(rs===null){Jt===null&&(Jt=Mn);break}e&&Jt&&rs.alternate===null&&a(K,Jt),W=m(rs,W,ne),ge===null?Gt=rs:ge.sibling=rs,ge=rs,Jt=Mn}if(De.done)return r(K,Jt),Ce&&As(K,ne),Gt;if(Jt===null){for(;!De.done;ne++,De=et.next())De=xt(K,De.value,gt),De!==null&&(W=m(De,W,ne),ge===null?Gt=De:ge.sibling=De,ge=De);return Ce&&As(K,ne),Gt}for(Jt=l(Jt);!De.done;ne++,De=et.next())De=ut(Jt,K,ne,De.value,gt),De!==null&&(e&&De.alternate!==null&&Jt.delete(De.key===null?ne:De.key),W=m(De,W,ne),ge===null?Gt=De:ge.sibling=De,ge=De);return e&&Jt.forEach(function(_T){return a(K,_T)}),Ce&&As(K,ne),Gt}function nn(K,W,et,gt){if(typeof et=="object"&&et!==null&&et.type===d&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case u:t:{for(var Gt=et.key;W!==null;){if(W.key===Gt){if(Gt=et.type,Gt===d){if(W.tag===7){r(K,W.sibling),gt=f(W,et.props.children),gt.return=K,K=gt;break t}}else if(W.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===R&&t0(Gt)===W.type){r(K,W.sibling),gt=f(W,et.props),Io(gt,et),gt.return=K,K=gt;break t}r(K,W);break}else a(K,W);W=W.sibling}et.type===d?(gt=Is(et.props.children,K.mode,gt,et.key),gt.return=K,K=gt):(gt=wc(et.type,et.key,et.props,null,K.mode,gt),Io(gt,et),gt.return=K,K=gt)}return M(K);case h:t:{for(Gt=et.key;W!==null;){if(W.key===Gt)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){r(K,W.sibling),gt=f(W,et.children||[]),gt.return=K,K=gt;break t}else{r(K,W);break}else a(K,W);W=W.sibling}gt=vh(et,K.mode,gt),gt.return=K,K=gt}return M(K);case R:return Gt=et._init,et=Gt(et._payload),nn(K,W,et,gt)}if(Et(et))return Kt(K,W,et,gt);if(O(et)){if(Gt=O(et),typeof Gt!="function")throw Error(s(150));return et=Gt.call(et),oe(K,W,et,gt)}if(typeof et.then=="function")return nn(K,W,cc(et),gt);if(et.$$typeof===y)return nn(K,W,Tc(K,et),gt);uc(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(r(K,W.sibling),gt=f(W,et),gt.return=K,K=gt):(r(K,W),gt=gh(et,K.mode,gt),gt.return=K,K=gt),M(K)):r(K,W)}return function(K,W,et,gt){try{Fo=0;var Gt=nn(K,W,et,gt);return gr=null,Gt}catch(Jt){if(Jt===Po)throw Jt;var ge=xi(29,Jt,null,K.mode);return ge.lanes=gt,ge.return=K,ge}finally{}}}var ws=e0(!0),n0=e0(!1),vr=Mt(null),fc=Mt(0);function i0(e,a){e=ya,Ct(fc,e),Ct(vr,a),ya=e|a.baseLanes}function bf(){Ct(fc,ya),Ct(vr,vr.current)}function Ef(){ya=fc.current,kt(vr),kt(fc)}var gi=Mt(null),ki=null;function Ga(e){var a=e.alternate;Ct(mn,mn.current&1),Ct(gi,e),ki===null&&(a===null||vr.current!==null||a.memoizedState!==null)&&(ki=e)}function a0(e){if(e.tag===22){if(Ct(mn,mn.current),Ct(gi,e),ki===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(ki=e)}}else ka()}function ka(){Ct(mn,mn.current),Ct(gi,gi.current)}function ua(e){kt(gi),ki===e&&(ki=null),kt(mn)}var mn=Mt(0);function hc(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var sE=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(r){return r()})}},rE=i.unstable_scheduleCallback,oE=i.unstable_NormalPriority,gn={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tf(){return{controller:new sE,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&rE(oE,function(){e.controller.abort()})}var zo=null,Af=0,_r=0,xr=null;function lE(e,a){if(zo===null){var r=zo=[];Af=0,_r=Nh(),xr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Af++,a.then(s0,s0),a}function s0(){if(--Af===0&&zo!==null){xr!==null&&(xr.status="fulfilled");var e=zo;zo=null,_r=0,xr=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function cE(e,a){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<r.length;f++)(0,r[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var r0=T.S;T.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&lE(e,a),r0!==null&&r0(e,a)};var Cs=Mt(null);function Rf(){var e=Cs.current;return e!==null?e:ke.pooledCache}function dc(e,a){a===null?Ct(Cs,Cs.current):Ct(Cs,a.pool)}function o0(){var e=Rf();return e===null?null:{parent:gn._currentValue,pool:e}}var Xa=0,me=null,ze=null,cn=null,pc=!1,yr=!1,Ds=!1,mc=0,Vo=0,Sr=null,uE=0;function rn(){throw Error(s(321))}function wf(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!ii(e[r],a[r]))return!1;return!0}function Cf(e,a,r,l,f,m){return Xa=m,me=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,T.H=e===null||e.memoizedState===null?Us:Wa,Ds=!1,m=r(l,f),Ds=!1,yr&&(m=c0(a,r,l,f)),l0(e),m}function l0(e){T.H=Xi;var a=ze!==null&&ze.next!==null;if(Xa=0,cn=ze=me=null,pc=!1,Vo=0,Sr=null,a)throw Error(s(300));e===null||yn||(e=e.dependencies,e!==null&&Ec(e)&&(yn=!0))}function c0(e,a,r,l){me=e;var f=0;do{if(yr&&(Sr=null),Vo=0,yr=!1,25<=f)throw Error(s(301));if(f+=1,cn=ze=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}T.H=Ns,m=a(r,l)}while(yr);return m}function fE(){var e=T.H,a=e.useState()[0];return a=typeof a.then=="function"?Ho(a):a,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(me.flags|=1024),a}function Df(){var e=mc!==0;return mc=0,e}function Uf(e,a,r){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r}function Nf(e){if(pc){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}pc=!1}Xa=0,cn=ze=me=null,yr=!1,Vo=mc=0,Sr=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?me.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(ze===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var a=cn===null?me.memoizedState:cn.next;if(a!==null)cn=a,ze=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},cn===null?me.memoizedState=cn=e:cn=cn.next=e}return cn}var gc;gc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ho(e){var a=Vo;return Vo+=1,Sr===null&&(Sr=[]),e=Jg(Sr,e,a),a=me,(cn===null?a.memoizedState:cn.next)===null&&(a=a.alternate,T.H=a===null||a.memoizedState===null?Us:Wa),e}function vc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ho(e);if(e.$$typeof===y)return Bn(e)}throw Error(s(438,String(e)))}function Lf(e){var a=null,r=me.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=gc(),me.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(e),l=0;l<e;l++)r[l]=L;return a.index++,r}function fa(e,a){return typeof a=="function"?a(e):a}function _c(e){var a=un();return Pf(a,ze,e)}function Pf(e,a,r){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=r;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}a.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{a=f.next;var U=M=null,B=null,j=a,dt=!1;do{var xt=j.lane&-536870913;if(xt!==j.lane?(be&xt)===xt:(Xa&xt)===xt){var rt=j.revertLane;if(rt===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),xt===_r&&(dt=!0);else if((Xa&rt)===rt){j=j.next,rt===_r&&(dt=!0);continue}else xt={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},B===null?(U=B=xt,M=m):B=B.next=xt,me.lanes|=rt,ts|=rt;xt=j.action,Ds&&r(m,xt),m=j.hasEagerState?j.eagerState:r(m,xt)}else rt={lane:xt,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},B===null?(U=B=rt,M=m):B=B.next=rt,me.lanes|=xt,ts|=xt;j=j.next}while(j!==null&&j!==a);if(B===null?M=m:B.next=U,!ii(m,e.memoizedState)&&(yn=!0,dt&&(r=xr,r!==null)))throw r;e.memoizedState=m,e.baseState=M,e.baseQueue=B,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Of(e){var a=un(),r=a.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,m=a.memoizedState;if(f!==null){r.pending=null;var M=f=f.next;do m=e(m,M.action),M=M.next;while(M!==f);ii(m,a.memoizedState)||(yn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),r.lastRenderedState=m}return[m,l]}function u0(e,a,r){var l=me,f=un(),m=Ce;if(m){if(r===void 0)throw Error(s(407));r=r()}else r=a();var M=!ii((ze||f).memoizedState,r);if(M&&(f.memoizedState=r,yn=!0),f=f.queue,Bf(d0.bind(null,l,f,e),[e]),f.getSnapshot!==a||M||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,Mr(9,h0.bind(null,l,f,r,a),{destroy:void 0},null),ke===null)throw Error(s(349));m||(Xa&60)!==0||f0(l,a,r)}return r}function f0(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=me.updateQueue,a===null?(a=gc(),me.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function h0(e,a,r,l){a.value=r,a.getSnapshot=l,p0(a)&&m0(e)}function d0(e,a,r){return r(function(){p0(a)&&m0(e)})}function p0(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!ii(e,r)}catch{return!0}}function m0(e){var a=Ha(e,2);a!==null&&jn(a,e,2)}function Ff(e){var a=$n();if(typeof e=="function"){var r=e;if(e=r(),Ds){Bt(!0);try{r()}finally{Bt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},a}function g0(e,a,r,l){return e.baseState=r,Pf(e,ze,typeof l=="function"?l:fa)}function hE(e,a,r,l,f){if(Sc(e))throw Error(s(485));if(e=a.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};T.T!==null?r(!0):m.isTransition=!1,l(m),r=a.pending,r===null?(m.next=a.pending=m,v0(a,m)):(m.next=r.next,a.pending=r.next=m)}}function v0(e,a){var r=a.action,l=a.payload,f=e.state;if(a.isTransition){var m=T.T,M={};T.T=M;try{var U=r(f,l),B=T.S;B!==null&&B(M,U),_0(e,a,U)}catch(j){If(e,a,j)}finally{T.T=m}}else try{m=r(f,l),_0(e,a,m)}catch(j){If(e,a,j)}}function _0(e,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){x0(e,a,l)},function(l){return If(e,a,l)}):x0(e,a,r)}function x0(e,a,r){a.status="fulfilled",a.value=r,y0(a),e.state=r,a=e.pending,a!==null&&(r=a.next,r===a?e.pending=null:(r=r.next,a.next=r,v0(e,r)))}function If(e,a,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=r,y0(a),a=a.next;while(a!==l)}e.action=null}function y0(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function S0(e,a){return a}function M0(e,a){if(Ce){var r=ke.formState;if(r!==null){t:{var l=me;if(Ce){if(Un){e:{for(var f=Un,m=Gi;f.nodeType!==8;){if(!m){f=null;break e}if(f=Li(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Un=Li(f.nextSibling),l=f.data==="F!";break t}}Rs(l)}l=!1}l&&(a=r[0])}}return r=$n(),r.memoizedState=r.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S0,lastRenderedState:a},r.queue=l,r=V0.bind(null,me,l),l.dispatch=r,l=Ff(!1),m=kf.bind(null,me,!1,l.queue),l=$n(),f={state:a,dispatch:null,action:e,pending:null},l.queue=f,r=hE.bind(null,me,f,m,r),f.dispatch=r,l.memoizedState=e,[a,r,!1]}function b0(e){var a=un();return E0(a,ze,e)}function E0(e,a,r){a=Pf(e,a,S0)[0],e=_c(fa)[0],a=typeof a=="object"&&a!==null&&typeof a.then=="function"?Ho(a):a;var l=un(),f=l.queue,m=f.dispatch;return r!==l.memoizedState&&(me.flags|=2048,Mr(9,dE.bind(null,f,r),{destroy:void 0},null)),[a,m,e]}function dE(e,a){e.action=a}function T0(e){var a=un(),r=ze;if(r!==null)return E0(a,r,e);un(),a=a.memoizedState,r=un();var l=r.queue.dispatch;return r.memoizedState=e,[a,l,!1]}function Mr(e,a,r,l){return e={tag:e,create:a,inst:r,deps:l,next:null},a=me.updateQueue,a===null&&(a=gc(),me.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,a.lastEffect=e),e}function A0(){return un().memoizedState}function xc(e,a,r,l){var f=$n();me.flags|=e,f.memoizedState=Mr(1|a,r,{destroy:void 0},l===void 0?null:l)}function yc(e,a,r,l){var f=un();l=l===void 0?null:l;var m=f.memoizedState.inst;ze!==null&&l!==null&&wf(l,ze.memoizedState.deps)?f.memoizedState=Mr(a,r,m,l):(me.flags|=e,f.memoizedState=Mr(1|a,r,m,l))}function R0(e,a){xc(8390656,8,e,a)}function Bf(e,a){yc(2048,8,e,a)}function w0(e,a){return yc(4,2,e,a)}function C0(e,a){return yc(4,4,e,a)}function D0(e,a){if(typeof a=="function"){e=e();var r=a(e);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function U0(e,a,r){r=r!=null?r.concat([e]):null,yc(4,4,D0.bind(null,a,e),r)}function zf(){}function N0(e,a){var r=un();a=a===void 0?null:a;var l=r.memoizedState;return a!==null&&wf(a,l[1])?l[0]:(r.memoizedState=[e,a],e)}function L0(e,a){var r=un();a=a===void 0?null:a;var l=r.memoizedState;if(a!==null&&wf(a,l[1]))return l[0];if(l=e(),Ds){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[l,a],l}function Vf(e,a,r){return r===void 0||(Xa&1073741824)!==0?e.memoizedState=a:(e.memoizedState=r,e=Ov(),me.lanes|=e,ts|=e,r)}function P0(e,a,r,l){return ii(r,a)?r:vr.current!==null?(e=Vf(e,r,l),ii(e,a)||(yn=!0),e):(Xa&42)===0?(yn=!0,e.memoizedState=r):(e=Ov(),me.lanes|=e,ts|=e,a)}function O0(e,a,r,l,f){var m=Rt.p;Rt.p=m!==0&&8>m?m:8;var M=T.T,U={};T.T=U,kf(e,!1,a,r);try{var B=f(),j=T.S;if(j!==null&&j(U,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=cE(B,l);Go(e,a,dt,oi(e))}else Go(e,a,l,oi(e))}catch(xt){Go(e,a,{then:function(){},status:"rejected",reason:xt},oi())}finally{Rt.p=m,T.T=M}}function pE(){}function Hf(e,a,r,l){if(e.tag!==5)throw Error(s(476));var f=F0(e).queue;O0(e,f,a,Yt,r===null?pE:function(){return I0(e),r(l)})}function F0(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Yt,baseState:Yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:Yt},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:r},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function I0(e){var a=F0(e).next.queue;Go(e,a,{},oi())}function Gf(){return Bn(ll)}function B0(){return un().memoizedState}function z0(){return un().memoizedState}function mE(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var r=oi();e=Ya(r);var l=Za(a,e,r);l!==null&&(jn(l,a,r),Wo(l,a,r)),a={cache:Tf()},e.payload=a;return}a=a.return}}function gE(e,a,r){var l=oi();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Sc(e)?H0(a,r):(r=_f(e,a,r,l),r!==null&&(jn(r,e,l),G0(r,a,l)))}function V0(e,a,r){var l=oi();Go(e,a,r,l)}function Go(e,a,r,l){var f={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))H0(a,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var M=a.lastRenderedState,U=m(M,r);if(f.hasEagerState=!0,f.eagerState=U,ii(U,M))return ac(e,a,f,0),ke===null&&ic(),!1}catch{}finally{}if(r=_f(e,a,f,l),r!==null)return jn(r,e,l),G0(r,a,l),!0}return!1}function kf(e,a,r,l){if(l={lane:2,revertLane:Nh(),action:l,hasEagerState:!1,eagerState:null,next:null},Sc(e)){if(a)throw Error(s(479))}else a=_f(e,r,l,2),a!==null&&jn(a,e,2)}function Sc(e){var a=e.alternate;return e===me||a!==null&&a===me}function H0(e,a){yr=pc=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function G0(e,a,r){if((r&4194176)!==0){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,ar(e,r)}}var Xi={readContext:Bn,use:vc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn};Xi.useCacheRefresh=rn,Xi.useMemoCache=rn,Xi.useHostTransitionStatus=rn,Xi.useFormState=rn,Xi.useActionState=rn,Xi.useOptimistic=rn;var Us={readContext:Bn,use:vc,useCallback:function(e,a){return $n().memoizedState=[e,a===void 0?null:a],e},useContext:Bn,useEffect:R0,useImperativeHandle:function(e,a,r){r=r!=null?r.concat([e]):null,xc(4194308,4,D0.bind(null,a,e),r)},useLayoutEffect:function(e,a){return xc(4194308,4,e,a)},useInsertionEffect:function(e,a){xc(4,2,e,a)},useMemo:function(e,a){var r=$n();a=a===void 0?null:a;var l=e();if(Ds){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[l,a],l},useReducer:function(e,a,r){var l=$n();if(r!==void 0){var f=r(a);if(Ds){Bt(!0);try{r(a)}finally{Bt(!1)}}}else f=a;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=gE.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var a=$n();return e={current:e},a.memoizedState=e},useState:function(e){e=Ff(e);var a=e.queue,r=V0.bind(null,me,a);return a.dispatch=r,[e.memoizedState,r]},useDebugValue:zf,useDeferredValue:function(e,a){var r=$n();return Vf(r,e,a)},useTransition:function(){var e=Ff(!1);return e=O0.bind(null,me,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,r){var l=me,f=$n();if(Ce){if(r===void 0)throw Error(s(407));r=r()}else{if(r=a(),ke===null)throw Error(s(349));(be&60)!==0||f0(l,a,r)}f.memoizedState=r;var m={value:r,getSnapshot:a};return f.queue=m,R0(d0.bind(null,l,m,e),[e]),l.flags|=2048,Mr(9,h0.bind(null,l,m,r,a),{destroy:void 0},null),r},useId:function(){var e=$n(),a=ke.identifierPrefix;if(Ce){var r=ca,l=la;r=(l&~(1<<32-bt(l)-1)).toString(32)+r,a=":"+a+"R"+r,r=mc++,0<r&&(a+="H"+r.toString(32)),a+=":"}else r=uE++,a=":"+a+"r"+r.toString(32)+":";return e.memoizedState=a},useCacheRefresh:function(){return $n().memoizedState=mE.bind(null,me)}};Us.useMemoCache=Lf,Us.useHostTransitionStatus=Gf,Us.useFormState=M0,Us.useActionState=M0,Us.useOptimistic=function(e){var a=$n();a.memoizedState=a.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=kf.bind(null,me,!0,r),r.dispatch=a,[e,a]};var Wa={readContext:Bn,use:vc,useCallback:N0,useContext:Bn,useEffect:Bf,useImperativeHandle:U0,useInsertionEffect:w0,useLayoutEffect:C0,useMemo:L0,useReducer:_c,useRef:A0,useState:function(){return _c(fa)},useDebugValue:zf,useDeferredValue:function(e,a){var r=un();return P0(r,ze.memoizedState,e,a)},useTransition:function(){var e=_c(fa)[0],a=un().memoizedState;return[typeof e=="boolean"?e:Ho(e),a]},useSyncExternalStore:u0,useId:B0};Wa.useCacheRefresh=z0,Wa.useMemoCache=Lf,Wa.useHostTransitionStatus=Gf,Wa.useFormState=b0,Wa.useActionState=b0,Wa.useOptimistic=function(e,a){var r=un();return g0(r,ze,e,a)};var Ns={readContext:Bn,use:vc,useCallback:N0,useContext:Bn,useEffect:Bf,useImperativeHandle:U0,useInsertionEffect:w0,useLayoutEffect:C0,useMemo:L0,useReducer:Of,useRef:A0,useState:function(){return Of(fa)},useDebugValue:zf,useDeferredValue:function(e,a){var r=un();return ze===null?Vf(r,e,a):P0(r,ze.memoizedState,e,a)},useTransition:function(){var e=Of(fa)[0],a=un().memoizedState;return[typeof e=="boolean"?e:Ho(e),a]},useSyncExternalStore:u0,useId:B0};Ns.useCacheRefresh=z0,Ns.useMemoCache=Lf,Ns.useHostTransitionStatus=Gf,Ns.useFormState=T0,Ns.useActionState=T0,Ns.useOptimistic=function(e,a){var r=un();return ze!==null?g0(r,ze,e,a):(r.baseState=e,[e,r.queue.dispatch])};function Xf(e,a,r,l){a=e.memoizedState,r=r(l,a),r=r==null?a:C({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Wf={isMounted:function(e){return(e=e._reactInternals)?$(e)===e:!1},enqueueSetState:function(e,a,r){e=e._reactInternals;var l=oi(),f=Ya(l);f.payload=a,r!=null&&(f.callback=r),a=Za(e,f,l),a!==null&&(jn(a,e,l),Wo(a,e,l))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var l=oi(),f=Ya(l);f.tag=1,f.payload=a,r!=null&&(f.callback=r),a=Za(e,f,l),a!==null&&(jn(a,e,l),Wo(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=oi(),l=Ya(r);l.tag=2,a!=null&&(l.callback=a),a=Za(e,l,r),a!==null&&(jn(a,e,r),Wo(a,e,r))}};function k0(e,a,r,l,f,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):a.prototype&&a.prototype.isPureReactComponent?!Co(r,l)||!Co(f,m):!0}function X0(e,a,r,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,l),a.state!==e&&Wf.enqueueReplaceState(a,a.state,null)}function Ls(e,a){var r=a;if("ref"in a){r={};for(var l in a)l!=="ref"&&(r[l]=a[l])}if(e=e.defaultProps){r===a&&(r=C({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}var Mc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function W0(e){Mc(e)}function j0(e){console.error(e)}function q0(e){Mc(e)}function bc(e,a){try{var r=e.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Y0(e,a,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function jf(e,a,r){return r=Ya(r),r.tag=3,r.payload={element:null},r.callback=function(){bc(e,a)},r}function Z0(e){return e=Ya(e),e.tag=3,e}function K0(e,a,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){Y0(a,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Y0(a,r,l),typeof f!="function"&&(es===null?es=new Set([this]):es.add(this));var U=l.stack;this.componentDidCatch(l.value,{componentStack:U!==null?U:""})})}function vE(e,a,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=r.alternate,a!==null&&Xo(a,r,f,!0),r=gi.current,r!==null){switch(r.tag){case 13:return ki===null?Rh():r.alternate===null&&en===0&&(en=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Mf?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([l]):a.add(l),Ch(e,l,f)),!1;case 22:return r.flags|=65536,l===Mf?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([l]):r.add(l)),Ch(e,l,f)),!1}throw Error(s(435,r.tag))}return Ch(e,l,f),Rh(),!1}if(Ce)return a=gi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==Sf&&(e=Error(s(422),{cause:l}),Lo(di(e,r)))):(l!==Sf&&(a=Error(s(423),{cause:l}),Lo(di(a,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=di(l,r),f=jf(e.stateNode,l,f),oh(e,f),en!==4&&(en=2)),!1;var m=Error(s(520),{cause:l});if(m=di(m,r),$o===null?$o=[m]:$o.push(m),en!==4&&(en=2),a===null)return!0;l=di(l,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=jf(r.stateNode,l,e),oh(r,e),!1;case 1:if(a=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(es===null||!es.has(m))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Z0(f),K0(f,e,r,l),oh(r,f),!1}r=r.return}while(r!==null);return!1}var Q0=Error(s(461)),yn=!1;function Nn(e,a,r,l){a.child=e===null?n0(a,null,r,l):ws(a,e.child,r,l)}function J0(e,a,r,l,f){r=r.render;var m=a.ref;if("ref"in l){var M={};for(var U in l)U!=="ref"&&(M[U]=l[U])}else M=l;return Os(a),l=Cf(e,a,r,M,m,f),U=Df(),e!==null&&!yn?(Uf(e,a,f),ha(e,a,f)):(Ce&&U&&xf(a),a.flags|=1,Nn(e,a,l,f),a.child)}function $0(e,a,r,l,f){if(e===null){var m=r.type;return typeof m=="function"&&!mh(m)&&m.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=m,tv(e,a,m,l,f)):(e=wc(r.type,null,l,a,a.mode,f),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!eh(e,f)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:Co,r(M,l)&&e.ref===a.ref)return ha(e,a,f)}return a.flags|=1,e=$a(m,l),e.ref=a.ref,e.return=a,a.child=e}function tv(e,a,r,l,f){if(e!==null){var m=e.memoizedProps;if(Co(m,l)&&e.ref===a.ref)if(yn=!1,a.pendingProps=l=m,eh(e,f))(e.flags&131072)!==0&&(yn=!0);else return a.lanes=e.lanes,ha(e,a,f)}return qf(e,a,r,l,f)}function ev(e,a,r){var l=a.pendingProps,f=l.children,m=(a.stateNode._pendingVisibility&2)!==0,M=e!==null?e.memoizedState:null;if(ko(e,a),l.mode==="hidden"||m){if((a.flags&128)!==0){if(l=M!==null?M.baseLanes|r:r,e!==null){for(f=a.child=e.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~l}else a.childLanes=0,a.child=null;return nv(e,a,l,r)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&dc(a,M!==null?M.cachePool:null),M!==null?i0(a,M):bf(),a0(a);else return a.lanes=a.childLanes=536870912,nv(e,a,M!==null?M.baseLanes|r:r,r)}else M!==null?(dc(a,M.cachePool),i0(a,M),ka(),a.memoizedState=null):(e!==null&&dc(a,null),bf(),ka());return Nn(e,a,f,r),a.child}function nv(e,a,r,l){var f=Rf();return f=f===null?null:{parent:gn._currentValue,pool:f},a.memoizedState={baseLanes:r,cachePool:f},e!==null&&dc(a,null),bf(),a0(a),e!==null&&Xo(e,a,l,!0),null}function ko(e,a){var r=a.ref;if(r===null)e!==null&&e.ref!==null&&(a.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(e===null||e.ref!==r)&&(a.flags|=2097664)}}function qf(e,a,r,l,f){return Os(a),r=Cf(e,a,r,l,void 0,f),l=Df(),e!==null&&!yn?(Uf(e,a,f),ha(e,a,f)):(Ce&&l&&xf(a),a.flags|=1,Nn(e,a,r,f),a.child)}function iv(e,a,r,l,f,m){return Os(a),a.updateQueue=null,r=c0(a,l,r,f),l0(e),l=Df(),e!==null&&!yn?(Uf(e,a,m),ha(e,a,m)):(Ce&&l&&xf(a),a.flags|=1,Nn(e,a,r,m),a.child)}function av(e,a,r,l,f){if(Os(a),a.stateNode===null){var m=dr,M=r.contextType;typeof M=="object"&&M!==null&&(m=Bn(M)),m=new r(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Wf,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},sh(a),M=r.contextType,m.context=typeof M=="object"&&M!==null?Bn(M):dr,m.state=a.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Xf(a,r,M,l),m.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Wf.enqueueReplaceState(m,m.state,null),qo(a,l,m,f),jo(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){m=a.stateNode;var U=a.memoizedProps,B=Ls(r,U);m.props=B;var j=m.context,dt=r.contextType;M=dr,typeof dt=="object"&&dt!==null&&(M=Bn(dt));var xt=r.getDerivedStateFromProps;dt=typeof xt=="function"||typeof m.getSnapshotBeforeUpdate=="function",U=a.pendingProps!==U,dt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(U||j!==M)&&X0(a,m,l,M),qa=!1;var rt=a.memoizedState;m.state=rt,qo(a,l,m,f),jo(),j=a.memoizedState,U||rt!==j||qa?(typeof xt=="function"&&(Xf(a,r,xt,l),j=a.memoizedState),(B=qa||k0(a,r,B,l,rt,j,M))?(dt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=j),m.props=l,m.state=j,m.context=M,l=B):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,rh(e,a),M=a.memoizedProps,dt=Ls(r,M),m.props=dt,xt=a.pendingProps,rt=m.context,j=r.contextType,B=dr,typeof j=="object"&&j!==null&&(B=Bn(j)),U=r.getDerivedStateFromProps,(j=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==xt||rt!==B)&&X0(a,m,l,B),qa=!1,rt=a.memoizedState,m.state=rt,qo(a,l,m,f),jo();var ut=a.memoizedState;M!==xt||rt!==ut||qa||e!==null&&e.dependencies!==null&&Ec(e.dependencies)?(typeof U=="function"&&(Xf(a,r,U,l),ut=a.memoizedState),(dt=qa||k0(a,r,dt,l,rt,ut,B)||e!==null&&e.dependencies!==null&&Ec(e.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ut,B),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ut,B)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=ut),m.props=l,m.state=ut,m.context=B,l=dt):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(a.flags|=1024),l=!1)}return m=l,ko(e,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&l?(a.child=ws(a,e.child,null,f),a.child=ws(a,null,r,f)):Nn(e,a,r,f),a.memoizedState=m.state,e=a.child):e=ha(e,a,f),e}function sv(e,a,r,l){return No(),a.flags|=256,Nn(e,a,r,l),a.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function Zf(e){return{baseLanes:e,cachePool:o0()}}function Kf(e,a,r){return e=e!==null?e.childLanes&~r:0,a&&(e|=yi),e}function rv(e,a,r){var l=a.pendingProps,f=!1,m=(a.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),M&&(f=!0,a.flags&=-129),M=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ce){if(f?Ga(a):ka(),Ce){var U=Un,B;if(B=U){t:{for(B=U,U=Gi;B.nodeType!==8;){if(!U){U=null;break t}if(B=Li(B.nextSibling),B===null){U=null;break t}}U=B}U!==null?(a.memoizedState={dehydrated:U,treeContext:Ts!==null?{id:la,overflow:ca}:null,retryLane:536870912},B=xi(18,null,null,0),B.stateNode=U,B.return=a,a.child=B,Wn=a,Un=null,B=!0):B=!1}B||Rs(a)}if(U=a.memoizedState,U!==null&&(U=U.dehydrated,U!==null))return U.data==="$!"?a.lanes=16:a.lanes=536870912,null;ua(a)}return U=l.children,l=l.fallback,f?(ka(),f=a.mode,U=Jf({mode:"hidden",children:U},f),l=Is(l,f,r,null),U.return=a,l.return=a,U.sibling=l,a.child=U,f=a.child,f.memoizedState=Zf(r),f.childLanes=Kf(e,M,r),a.memoizedState=Yf,l):(Ga(a),Qf(a,U))}if(B=e.memoizedState,B!==null&&(U=B.dehydrated,U!==null)){if(m)a.flags&256?(Ga(a),a.flags&=-257,a=$f(e,a,r)):a.memoizedState!==null?(ka(),a.child=e.child,a.flags|=128,a=null):(ka(),f=l.fallback,U=a.mode,l=Jf({mode:"visible",children:l.children},U),f=Is(f,U,r,null),f.flags|=2,l.return=a,f.return=a,l.sibling=f,a.child=l,ws(a,e.child,null,r),l=a.child,l.memoizedState=Zf(r),l.childLanes=Kf(e,M,r),a.memoizedState=Yf,a=f);else if(Ga(a),U.data==="$!"){if(M=U.nextSibling&&U.nextSibling.dataset,M)var j=M.dgst;M=j,l=Error(s(419)),l.stack="",l.digest=M,Lo({value:l,source:null,stack:null}),a=$f(e,a,r)}else if(yn||Xo(e,a,r,!1),M=(r&e.childLanes)!==0,yn||M){if(M=ke,M!==null){if(l=r&-r,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(M.suspendedLanes|r))!==0?0:l,l!==0&&l!==B.retryLane)throw B.retryLane=l,Ha(e,l),jn(M,e,l),Q0}U.data==="$?"||Rh(),a=$f(e,a,r)}else U.data==="$?"?(a.flags|=128,a.child=e.child,a=NE.bind(null,e),U._reactRetry=a,a=null):(e=B.treeContext,Un=Li(U.nextSibling),Wn=a,Ce=!0,Ui=null,Gi=!1,e!==null&&(pi[mi++]=la,pi[mi++]=ca,pi[mi++]=Ts,la=e.id,ca=e.overflow,Ts=a),a=Qf(a,l.children),a.flags|=4096);return a}return f?(ka(),f=l.fallback,U=a.mode,B=e.child,j=B.sibling,l=$a(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&31457280,j!==null?f=$a(j,f):(f=Is(f,U,r,null),f.flags|=2),f.return=a,l.return=a,l.sibling=f,a.child=l,l=f,f=a.child,U=e.child.memoizedState,U===null?U=Zf(r):(B=U.cachePool,B!==null?(j=gn._currentValue,B=B.parent!==j?{parent:j,pool:j}:B):B=o0(),U={baseLanes:U.baseLanes|r,cachePool:B}),f.memoizedState=U,f.childLanes=Kf(e,M,r),a.memoizedState=Yf,l):(Ga(a),r=e.child,e=r.sibling,r=$a(r,{mode:"visible",children:l.children}),r.return=a,r.sibling=null,e!==null&&(M=a.deletions,M===null?(a.deletions=[e],a.flags|=16):M.push(e)),a.child=r,a.memoizedState=null,r)}function Qf(e,a){return a=Jf({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Jf(e,a){return Nv(e,a,0,null)}function $f(e,a,r){return ws(a,e.child,null,r),e=Qf(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function ov(e,a,r){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),ih(e.return,a,r)}function th(e,a,r,l,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=r,m.tailMode=f)}function lv(e,a,r){var l=a.pendingProps,f=l.revealOrder,m=l.tail;if(Nn(e,a,l.children,r),l=mn.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ov(e,r,a);else if(e.tag===19)ov(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Ct(mn,l),f){case"forwards":for(r=a.child,f=null;r!==null;)e=r.alternate,e!==null&&hc(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=a.child,a.child=null):(f=r.sibling,r.sibling=null),th(a,!1,f,r,m);break;case"backwards":for(r=null,f=a.child,a.child=null;f!==null;){if(e=f.alternate,e!==null&&hc(e)===null){a.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}th(a,!0,r,null,m);break;case"together":th(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ha(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),ts|=a.lanes,(r&a.childLanes)===0)if(e!==null){if(Xo(e,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,r=$a(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=$a(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function eh(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Ec(e)))}function _E(e,a,r){switch(a.tag){case 3:Re(a,a.stateNode.containerInfo),ja(a,gn,e.memoizedState.cache),No();break;case 27:case 5:je(a);break;case 4:Re(a,a.stateNode.containerInfo);break;case 10:ja(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Ga(a),a.flags|=128,null):(r&a.child.childLanes)!==0?rv(e,a,r):(Ga(a),e=ha(e,a,r),e!==null?e.sibling:null);Ga(a);break;case 19:var f=(e.flags&128)!==0;if(l=(r&a.childLanes)!==0,l||(Xo(e,a,r,!1),l=(r&a.childLanes)!==0),f){if(l)return lv(e,a,r);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ct(mn,mn.current),l)break;return null;case 22:case 23:return a.lanes=0,ev(e,a,r);case 24:ja(a,gn,e.memoizedState.cache)}return ha(e,a,r)}function cv(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps)yn=!0;else{if(!eh(e,r)&&(a.flags&128)===0)return yn=!1,_E(e,a,r);yn=(e.flags&131072)!==0}else yn=!1,Ce&&(a.flags&1048576)!==0&&qg(a,oc,a.index);switch(a.lanes=0,a.tag){case 16:t:{e=a.pendingProps;var l=a.elementType,f=l._init;if(l=f(l._payload),a.type=l,typeof l=="function")mh(l)?(e=Ls(l,e),a.tag=1,a=av(null,a,l,e,r)):(a.tag=0,a=qf(null,a,l,e,r));else{if(l!=null){if(f=l.$$typeof,f===b){a.tag=11,a=J0(null,a,l,e,r);break t}else if(f===x){a.tag=14,a=$0(null,a,l,e,r);break t}}throw a=z(l)||l,Error(s(306,a,""))}}return a;case 0:return qf(e,a,a.type,a.pendingProps,r);case 1:return l=a.type,f=Ls(l,a.pendingProps),av(e,a,l,f,r);case 3:t:{if(Re(a,a.stateNode.containerInfo),e===null)throw Error(s(387));var m=a.pendingProps;f=a.memoizedState,l=f.element,rh(e,a),qo(a,m,null,r);var M=a.memoizedState;if(m=M.cache,ja(a,gn,m),m!==f.cache&&ah(a,[gn],r,!0),jo(),m=M.element,f.isDehydrated)if(f={element:m,isDehydrated:!1,cache:M.cache},a.updateQueue.baseState=f,a.memoizedState=f,a.flags&256){a=sv(e,a,m,r);break t}else if(m!==l){l=di(Error(s(424)),a),Lo(l),a=sv(e,a,m,r);break t}else for(Un=Li(a.stateNode.containerInfo.firstChild),Wn=a,Ce=!0,Ui=null,Gi=!0,r=n0(a,null,m,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(No(),m===l){a=ha(e,a,r);break t}Nn(e,a,m,r)}a=a.child}return a;case 26:return ko(e,a),e===null?(r=h_(a.type,null,a.pendingProps,null))?a.memoizedState=r:Ce||(r=a.type,e=a.pendingProps,l=Vc(ue.current).createElement(r),l[on]=a,l[Tn]=e,Ln(l,r,e),ln(l),a.stateNode=l):a.memoizedState=h_(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return je(a),e===null&&Ce&&(l=a.stateNode=c_(a.type,a.pendingProps,ue.current),Wn=a,Gi=!0,Un=Li(l.firstChild)),l=a.pendingProps.children,e!==null||Ce?Nn(e,a,l,r):a.child=ws(a,null,l,r),ko(e,a),a.child;case 5:return e===null&&Ce&&((f=l=Un)&&(l=YE(l,a.type,a.pendingProps,Gi),l!==null?(a.stateNode=l,Wn=a,Un=Li(l.firstChild),Gi=!1,f=!0):f=!1),f||Rs(a)),je(a),f=a.type,m=a.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,Hh(f,m)?l=null:M!==null&&Hh(f,M)&&(a.flags|=32),a.memoizedState!==null&&(f=Cf(e,a,fE,null,null,r),ll._currentValue=f),ko(e,a),Nn(e,a,l,r),a.child;case 6:return e===null&&Ce&&((e=r=Un)&&(r=ZE(r,a.pendingProps,Gi),r!==null?(a.stateNode=r,Wn=a,Un=null,e=!0):e=!1),e||Rs(a)),null;case 13:return rv(e,a,r);case 4:return Re(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=ws(a,null,l,r):Nn(e,a,l,r),a.child;case 11:return J0(e,a,a.type,a.pendingProps,r);case 7:return Nn(e,a,a.pendingProps,r),a.child;case 8:return Nn(e,a,a.pendingProps.children,r),a.child;case 12:return Nn(e,a,a.pendingProps.children,r),a.child;case 10:return l=a.pendingProps,ja(a,a.type,l.value),Nn(e,a,l.children,r),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,Os(a),f=Bn(f),l=l(f),a.flags|=1,Nn(e,a,l,r),a.child;case 14:return $0(e,a,a.type,a.pendingProps,r);case 15:return tv(e,a,a.type,a.pendingProps,r);case 19:return lv(e,a,r);case 22:return ev(e,a,r);case 24:return Os(a),l=Bn(gn),e===null?(f=Rf(),f===null&&(f=ke,m=Tf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=r),f=m),a.memoizedState={parent:l,cache:f},sh(a),ja(a,gn,f)):((e.lanes&r)!==0&&(rh(e,a),qo(a,null,null,r),jo()),f=e.memoizedState,m=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),ja(a,gn,l)):(l=m.cache,ja(a,gn,l),l!==f.cache&&ah(a,[gn],r,!0))),Nn(e,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}var nh=Mt(null),Ps=null,da=null;function ja(e,a,r){Ct(nh,a._currentValue),a._currentValue=r}function pa(e){e._currentValue=nh.current,kt(nh)}function ih(e,a,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===r)break;e=e.return}}function ah(e,a,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;t:for(;m!==null;){var U=m;m=f;for(var B=0;B<a.length;B++)if(U.context===a[B]){m.lanes|=r,U=m.alternate,U!==null&&(U.lanes|=r),ih(m.return,r,e),l||(M=null);break t}m=U.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(s(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),ih(M,r,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Xo(e,a,r,l){e=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var U=f.type;ii(f.pendingProps.value,M.value)||(e!==null?e.push(U):e=[U])}}else if(f===Se.current){if(M=f.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}f=f.return}e!==null&&ah(a,e,r,l),a.flags|=262144}function Ec(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Os(e){Ps=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bn(e){return uv(Ps,e)}function Tc(e,a){return Ps===null&&Os(e),uv(e,a)}function uv(e,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},da===null){if(e===null)throw Error(s(308));da=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else da=da.next=a;return r}var qa=!1;function sh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rh(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,a,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Qe&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=sc(e),Wg(e,null,r),a}return ac(e,l,a,r),sc(e)}function Wo(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194176)!==0)){var l=a.lanes;l&=e.pendingLanes,r|=l,a.lanes=r,ar(e,r)}}function oh(e,a){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?f=m=a:m=m.next=a}else f=m=a;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}var lh=!1;function jo(){if(lh){var e=xr;if(e!==null)throw e}}function qo(e,a,r,l){lh=!1;var f=e.updateQueue;qa=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var B=U,j=B.next;B.next=null,M===null?m=j:M.next=j,M=B;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,U=dt.lastBaseUpdate,U!==M&&(U===null?dt.firstBaseUpdate=j:U.next=j,dt.lastBaseUpdate=B))}if(m!==null){var xt=f.baseState;M=0,dt=j=B=null,U=m;do{var rt=U.lane&-536870913,ut=rt!==U.lane;if(ut?(be&rt)===rt:(l&rt)===rt){rt!==0&&rt===_r&&(lh=!0),dt!==null&&(dt=dt.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var Kt=e,oe=U;rt=a;var nn=r;switch(oe.tag){case 1:if(Kt=oe.payload,typeof Kt=="function"){xt=Kt.call(nn,xt,rt);break t}xt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=oe.payload,rt=typeof Kt=="function"?Kt.call(nn,xt,rt):Kt,rt==null)break t;xt=C({},xt,rt);break t;case 2:qa=!0}}rt=U.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=f.callbacks,ut===null?f.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:U.tag,payload:U.payload,callback:U.callback,next:null},dt===null?(j=dt=ut,B=xt):dt=dt.next=ut,M|=rt;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;ut=U,U=ut.next,ut.next=null,f.lastBaseUpdate=ut,f.shared.pending=null}}while(!0);dt===null&&(B=xt),f.baseState=B,f.firstBaseUpdate=j,f.lastBaseUpdate=dt,m===null&&(f.shared.lanes=0),ts|=M,e.lanes=M,e.memoizedState=xt}}function fv(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function hv(e,a){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)fv(r[e],a)}function Yo(e,a){try{var r=a.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var m=r.create,M=r.inst;l=m(),M.destroy=l}r=r.next}while(r!==f)}}catch(U){Ge(a,a.return,U)}}function Ka(e,a,r){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var M=l.inst,U=M.destroy;if(U!==void 0){M.destroy=void 0,f=a;var B=r;try{U()}catch(j){Ge(f,B,j)}}}l=l.next}while(l!==m)}}catch(j){Ge(a,a.return,j)}}function dv(e){var a=e.updateQueue;if(a!==null){var r=e.stateNode;try{hv(a,r)}catch(l){Ge(e,e.return,l)}}}function pv(e,a,r){r.props=Ls(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ge(e,a,l)}}function Fs(e,a){try{var r=e.ref;if(r!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var f=l;break;default:f=l}typeof r=="function"?e.refCleanup=r(f):r.current=f}}catch(m){Ge(e,a,m)}}function ai(e,a){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Ge(e,a,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Ge(e,a,f)}else r.current=null}function mv(e){var a=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Ge(e,e.return,f)}}function gv(e,a,r){try{var l=e.stateNode;kE(l,e.type,r,a),l[Tn]=a}catch(f){Ge(e,e.return,f)}}function vv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function ch(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||vv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uh(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.nodeType===8?r.parentNode.insertBefore(e,a):r.insertBefore(e,a):(r.nodeType===8?(a=r.parentNode,a.insertBefore(e,r)):(a=r,a.appendChild(e)),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=zc));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(uh(e,a,r),e=e.sibling;e!==null;)uh(e,a,r),e=e.sibling}function Ac(e,a,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Ac(e,a,r),e=e.sibling;e!==null;)Ac(e,a,r),e=e.sibling}var ma=!1,tn=!1,fh=!1,_v=typeof WeakSet=="function"?WeakSet:Set,Sn=null,xv=!1;function xE(e,a){if(e=e.containerInfo,zh=jc,e=Fg(e),df(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var M=0,U=-1,B=-1,j=0,dt=0,xt=e,rt=null;e:for(;;){for(var ut;xt!==r||f!==0&&xt.nodeType!==3||(U=M+f),xt!==m||l!==0&&xt.nodeType!==3||(B=M+l),xt.nodeType===3&&(M+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)rt=xt,xt=ut;for(;;){if(xt===e)break e;if(rt===r&&++j===f&&(U=M),rt===m&&++dt===l&&(B=M),(ut=xt.nextSibling)!==null)break;xt=rt,rt=xt.parentNode}xt=ut}r=U===-1||B===-1?null:{start:U,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vh={focusedElem:e,selectionRange:r},jc=!1,Sn=a;Sn!==null;)if(a=Sn,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Sn=e;else for(;Sn!==null;){switch(a=Sn,m=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=a,f=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Kt=Ls(r.type,f,r.elementType===r.type);e=l.getSnapshotBeforeUpdate(Kt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ge(r,r.return,oe)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,r=e.nodeType,r===9)Xh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,Sn=e;break}Sn=a.return}return Kt=xv,xv=!1,Kt}function yv(e,a,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:va(e,r),l&4&&Yo(5,r);break;case 1:if(va(e,r),l&4)if(e=r.stateNode,a===null)try{e.componentDidMount()}catch(U){Ge(r,r.return,U)}else{var f=Ls(r.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(f,a,e.__reactInternalSnapshotBeforeUpdate)}catch(U){Ge(r,r.return,U)}}l&64&&dv(r),l&512&&Fs(r,r.return);break;case 3:if(va(e,r),l&64&&(l=r.updateQueue,l!==null)){if(e=null,r.child!==null)switch(r.child.tag){case 27:case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}try{hv(l,e)}catch(U){Ge(r,r.return,U)}}break;case 26:va(e,r),l&512&&Fs(r,r.return);break;case 27:case 5:va(e,r),a===null&&l&4&&mv(r),l&512&&Fs(r,r.return);break;case 12:va(e,r);break;case 13:va(e,r),l&4&&bv(e,r);break;case 22:if(f=r.memoizedState!==null||ma,!f){a=a!==null&&a.memoizedState!==null||tn;var m=ma,M=tn;ma=f,(tn=a)&&!M?Qa(e,r,(r.subtreeFlags&8772)!==0):va(e,r),ma=m,tn=M}l&512&&(r.memoizedProps.mode==="manual"?Fs(r,r.return):ai(r,r.return));break;default:va(e,r)}}function Sv(e){var a=e.alternate;a!==null&&(e.alternate=null,Sv(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&So(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,si=!1;function ga(e,a,r){for(r=r.child;r!==null;)Mv(e,a,r),r=r.sibling}function Mv(e,a,r){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(St,r)}catch{}switch(r.tag){case 26:tn||ai(r,a),ga(e,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:tn||ai(r,a);var l=fn,f=si;for(fn=r.stateNode,ga(e,a,r),r=r.stateNode,a=r.attributes;a.length;)r.removeAttributeNode(a[0]);So(r),fn=l,si=f;break;case 5:tn||ai(r,a);case 6:f=fn;var m=si;if(fn=null,ga(e,a,r),fn=f,si=m,fn!==null)if(si)try{e=fn,l=r.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(M){Ge(r,a,M)}else try{fn.removeChild(r.stateNode)}catch(M){Ge(r,a,M)}break;case 18:fn!==null&&(si?(a=fn,r=r.stateNode,a.nodeType===8?kh(a.parentNode,r):a.nodeType===1&&kh(a,r),hl(a)):kh(fn,r.stateNode));break;case 4:l=fn,f=si,fn=r.stateNode.containerInfo,si=!0,ga(e,a,r),fn=l,si=f;break;case 0:case 11:case 14:case 15:tn||Ka(2,r,a),tn||Ka(4,r,a),ga(e,a,r);break;case 1:tn||(ai(r,a),l=r.stateNode,typeof l.componentWillUnmount=="function"&&pv(r,a,l)),ga(e,a,r);break;case 21:ga(e,a,r);break;case 22:tn||ai(r,a),tn=(l=tn)||r.memoizedState!==null,ga(e,a,r),tn=l;break;default:ga(e,a,r)}}function bv(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hl(e)}catch(r){Ge(a,a.return,r)}}function yE(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new _v),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new _v),a;default:throw Error(s(435,e.tag))}}function hh(e,a){var r=yE(e);a.forEach(function(l){var f=LE.bind(null,e,l);r.has(l)||(r.add(l),l.then(f,f))})}function vi(e,a){var r=a.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],m=e,M=a,U=M;t:for(;U!==null;){switch(U.tag){case 27:case 5:fn=U.stateNode,si=!1;break t;case 3:fn=U.stateNode.containerInfo,si=!0;break t;case 4:fn=U.stateNode.containerInfo,si=!0;break t}U=U.return}if(fn===null)throw Error(s(160));Mv(m,M,f),fn=null,si=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Ev(a,e),a=a.sibling}var Ni=null;function Ev(e,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vi(a,e),_i(e),l&4&&(Ka(3,e,e.return),Yo(3,e),Ka(5,e,e.return));break;case 1:vi(a,e),_i(e),l&512&&(tn||r===null||ai(r,r.return)),l&64&&ma&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Ni;if(vi(a,e),_i(e),l&512&&(tn||r===null||ai(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ia]||m[on]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Ln(m,l,r),m[on]=e,ln(m),l=m;break t;case"link":var M=m_("link","href",f).get(l+(r.href||""));if(M){for(var U=0;U<M.length;U++)if(m=M[U],m.getAttribute("href")===(r.href==null?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(U,1);break e}}m=f.createElement(l),Ln(m,l,r),f.head.appendChild(m);break;case"meta":if(M=m_("meta","content",f).get(l+(r.content||""))){for(U=0;U<M.length;U++)if(m=M[U],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(U,1);break e}}m=f.createElement(l),Ln(m,l,r),f.head.appendChild(m);break;default:throw Error(s(468,l))}m[on]=e,ln(m),l=m}e.stateNode=l}else g_(f,e.type,e.stateNode);else e.stateNode=p_(f,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?g_(f,e.type,e.stateNode):p_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&gv(e,e.memoizedProps,r.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){f=e.stateNode,m=e.memoizedProps;try{for(var B=f.firstChild;B;){var j=B.nextSibling,dt=B.nodeName;B[Ia]||dt==="HEAD"||dt==="BODY"||dt==="SCRIPT"||dt==="STYLE"||dt==="LINK"&&B.rel.toLowerCase()==="stylesheet"||f.removeChild(B),B=j}for(var xt=e.type,rt=f.attributes;rt.length;)f.removeAttributeNode(rt[0]);Ln(f,xt,m),f[on]=e,f[Tn]=m}catch(Kt){Ge(e,e.return,Kt)}}case 5:if(vi(a,e),_i(e),l&512&&(tn||r===null||ai(r,r.return)),e.flags&32){f=e.stateNode;try{pn(f,"")}catch(Kt){Ge(e,e.return,Kt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,gv(e,f,r!==null?r.memoizedProps:f)),l&1024&&(fh=!0);break;case 6:if(vi(a,e),_i(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Kt){Ge(e,e.return,Kt)}}break;case 3:if(kc=null,f=Ni,Ni=Hc(a.containerInfo),vi(a,e),Ni=f,_i(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{hl(a.containerInfo)}catch(Kt){Ge(e,e.return,Kt)}fh&&(fh=!1,Tv(e));break;case 4:l=Ni,Ni=Hc(e.stateNode.containerInfo),vi(a,e),_i(e),Ni=l;break;case 12:vi(a,e),_i(e);break;case 13:vi(a,e),_i(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Sh=E()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,hh(e,l)));break;case 22:if(l&512&&(tn||r===null||ai(r,r.return)),B=e.memoizedState!==null,j=r!==null&&r.memoizedState!==null,dt=ma,xt=tn,ma=dt||B,tn=xt||j,vi(a,e),tn=xt,ma=dt,_i(e),a=e.stateNode,a._current=e,a._visibility&=-3,a._visibility|=a._pendingVisibility&2,l&8192&&(a._visibility=B?a._visibility&-2:a._visibility|1,B&&(a=ma||tn,r===null||j||a||br(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(r=null,a=e;;){if(a.tag===5||a.tag===26||a.tag===27){if(r===null){j=r=a;try{if(f=j.stateNode,B)m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{M=j.stateNode,U=j.memoizedProps.style;var ut=U!=null&&U.hasOwnProperty("display")?U.display:null;M.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(Kt){Ge(j,j.return,Kt)}}}else if(a.tag===6){if(r===null){j=a;try{j.stateNode.nodeValue=B?"":j.memoizedProps}catch(Kt){Ge(j,j.return,Kt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,hh(e,r))));break;case 19:vi(a,e),_i(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,hh(e,l)));break;case 21:break;default:vi(a,e),_i(e)}}function _i(e){var a=e.flags;if(a&2){try{if(e.tag!==27){t:{for(var r=e.return;r!==null;){if(vv(r)){var l=r;break t}r=r.return}throw Error(s(160))}switch(l.tag){case 27:var f=l.stateNode,m=ch(e);Ac(e,m,f);break;case 5:var M=l.stateNode;l.flags&32&&(pn(M,""),l.flags&=-33);var U=ch(e);Ac(e,U,M);break;case 3:case 4:var B=l.stateNode.containerInfo,j=ch(e);uh(e,j,B);break;default:throw Error(s(161))}}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Tv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Tv(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function va(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)yv(e,a.alternate,a),a=a.sibling}function br(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Ka(4,a,a.return),br(a);break;case 1:ai(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&pv(a,a.return,r),br(a);break;case 26:case 27:case 5:ai(a,a.return),br(a);break;case 22:ai(a,a.return),a.memoizedState===null&&br(a);break;default:br(a)}e=e.sibling}}function Qa(e,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=e,m=a,M=m.flags;switch(m.tag){case 0:case 11:case 15:Qa(f,m,r),Yo(4,m);break;case 1:if(Qa(f,m,r),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(j){Ge(l,l.return,j)}if(l=m,f=l.updateQueue,f!==null){var U=l.stateNode;try{var B=f.shared.hiddenCallbacks;if(B!==null)for(f.shared.hiddenCallbacks=null,f=0;f<B.length;f++)fv(B[f],U)}catch(j){Ge(l,l.return,j)}}r&&M&64&&dv(m),Fs(m,m.return);break;case 26:case 27:case 5:Qa(f,m,r),r&&l===null&&M&4&&mv(m),Fs(m,m.return);break;case 12:Qa(f,m,r);break;case 13:Qa(f,m,r),r&&M&4&&bv(f,m);break;case 22:m.memoizedState===null&&Qa(f,m,r),Fs(m,m.return);break;default:Qa(f,m,r)}a=a.sibling}}function dh(e,a){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Bo(r))}function ph(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Bo(e))}function Ja(e,a,r,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Av(e,a,r,l),a=a.sibling}function Av(e,a,r,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:Ja(e,a,r,l),f&2048&&Yo(9,a);break;case 3:Ja(e,a,r,l),f&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Bo(e)));break;case 12:if(f&2048){Ja(e,a,r,l),e=a.stateNode;try{var m=a.memoizedProps,M=m.id,U=m.onPostCommit;typeof U=="function"&&U(M,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ge(a,a.return,B)}}else Ja(e,a,r,l);break;case 23:break;case 22:m=a.stateNode,a.memoizedState!==null?m._visibility&4?Ja(e,a,r,l):Zo(e,a):m._visibility&4?Ja(e,a,r,l):(m._visibility|=4,Er(e,a,r,l,(a.subtreeFlags&10256)!==0)),f&2048&&dh(a.alternate,a);break;case 24:Ja(e,a,r,l),f&2048&&ph(a.alternate,a);break;default:Ja(e,a,r,l)}}function Er(e,a,r,l,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=e,M=a,U=r,B=l,j=M.flags;switch(M.tag){case 0:case 11:case 15:Er(m,M,U,B,f),Yo(8,M);break;case 23:break;case 22:var dt=M.stateNode;M.memoizedState!==null?dt._visibility&4?Er(m,M,U,B,f):Zo(m,M):(dt._visibility|=4,Er(m,M,U,B,f)),f&&j&2048&&dh(M.alternate,M);break;case 24:Er(m,M,U,B,f),f&&j&2048&&ph(M.alternate,M);break;default:Er(m,M,U,B,f)}a=a.sibling}}function Zo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=e,l=a,f=l.flags;switch(l.tag){case 22:Zo(r,l),f&2048&&dh(l.alternate,l);break;case 24:Zo(r,l),f&2048&&ph(l.alternate,l);break;default:Zo(r,l)}a=a.sibling}}var Ko=8192;function Tr(e){if(e.subtreeFlags&Ko)for(e=e.child;e!==null;)Rv(e),e=e.sibling}function Rv(e){switch(e.tag){case 26:Tr(e),e.flags&Ko&&e.memoizedState!==null&&lT(Ni,e.memoizedState,e.memoizedProps);break;case 5:Tr(e);break;case 3:case 4:var a=Ni;Ni=Hc(e.stateNode.containerInfo),Tr(e),Ni=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ko,Ko=16777216,Tr(e),Ko=a):Tr(e));break;default:Tr(e)}}function wv(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Qo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Sn=l,Dv(l,e)}wv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cv(e),e=e.sibling}function Cv(e){switch(e.tag){case 0:case 11:case 15:Qo(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Qo(e);break;case 12:Qo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&4&&(e.return===null||e.return.tag!==13)?(a._visibility&=-5,Rc(e)):Qo(e);break;default:Qo(e)}}function Rc(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];Sn=l,Dv(l,e)}wv(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Ka(8,a,a.return),Rc(a);break;case 22:r=a.stateNode,r._visibility&4&&(r._visibility&=-5,Rc(a));break;default:Rc(a)}e=e.sibling}}function Dv(e,a){for(;Sn!==null;){var r=Sn;switch(r.tag){case 0:case 11:case 15:Ka(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Sn=l;else t:for(r=e;Sn!==null;){l=Sn;var f=l.sibling,m=l.return;if(Sv(l),l===r){Sn=null;break t}if(f!==null){f.return=m,Sn=f;break t}Sn=m}}}function SE(e,a,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,a,r,l){return new SE(e,a,r,l)}function mh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $a(e,a){var r=e.alternate;return r===null?(r=xi(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&31457280,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Uv(e,a){e.flags&=31457282;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,a=r.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function wc(e,a,r,l,f,m){var M=0;if(l=e,typeof e=="function")mh(e)&&(M=1);else if(typeof e=="string")M=rT(e,r,ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case d:return Is(r.children,f,m,a);case p:M=8,f|=24;break;case g:return e=xi(12,r,a,f|2),e.elementType=g,e.lanes=m,e;case A:return e=xi(13,r,a,f),e.elementType=A,e.lanes=m,e;case S:return e=xi(19,r,a,f),e.elementType=S,e.lanes=m,e;case w:return Nv(r,f,m,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case y:M=10;break t;case _:M=9;break t;case b:M=11;break t;case x:M=14;break t;case R:M=16,l=null;break t}M=29,r=Error(s(130,e===null?"null":typeof e,"")),l=null}return a=xi(M,r,a,f),a.elementType=e,a.type=l,a.lanes=m,a}function Is(e,a,r,l){return e=xi(7,e,l,a),e.lanes=r,e}function Nv(e,a,r,l){e=xi(22,e,l,a),e.elementType=w,e.lanes=r;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=f._current;if(m===null)throw Error(s(456));if((f._pendingVisibility&2)===0){var M=Ha(m,2);M!==null&&(f._pendingVisibility|=2,jn(M,m,2))}},attach:function(){var m=f._current;if(m===null)throw Error(s(456));if((f._pendingVisibility&2)!==0){var M=Ha(m,2);M!==null&&(f._pendingVisibility&=-3,jn(M,m,2))}}};return e.stateNode=f,e}function gh(e,a,r){return e=xi(6,e,null,a),e.lanes=r,e}function vh(e,a,r){return a=xi(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function _a(e){e.flags|=4}function Lv(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!v_(a)){if(a=gi.current,a!==null&&((be&4194176)===be?ki!==null:(be&62914560)!==be&&(be&536870912)===0||a!==ki))throw Oo=Mf,Kg;e.flags|=8192}}function Cc(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?we():536870912,e.lanes|=a,Rr|=a)}function Jo(e,a){if(!Ce)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(a)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&31457280,l|=f.flags&31457280,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,a}function ME(e,a,r){var l=a.pendingProps;switch(yf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(a),null;case 1:return Ke(a),null;case 3:return r=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),pa(gn),ae(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Uo(a)?_a(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ui!==null&&(Th(Ui),Ui=null))),Ke(a),null;case 26:return r=a.memoizedState,e===null?(_a(a),r!==null?(Ke(a),Lv(a,r)):(Ke(a),a.flags&=-16777217)):r?r!==e.memoizedState?(_a(a),Ke(a),Lv(a,r)):(Ke(a),a.flags&=-16777217):(e.memoizedProps!==l&&_a(a),Ke(a),a.flags&=-16777217),null;case 27:H(a),r=ue.current;var f=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==l&&_a(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ke(a),null}e=ce.current,Uo(a)?Yg(a):(e=c_(f,l,r),a.stateNode=e,_a(a))}return Ke(a),null;case 5:if(H(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&_a(a);else{if(!l){if(a.stateNode===null)throw Error(s(166));return Ke(a),null}if(e=ce.current,Uo(a))Yg(a);else{switch(f=Vc(ue.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(r,{is:l.is}):f.createElement(r)}}e[on]=a,e[Tn]=l;t:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break t;for(;f.sibling===null;){if(f.return===null||f.return===a)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=e;t:switch(Ln(e,r,l),r){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&_a(a)}}return Ke(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&_a(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(s(166));if(e=ue.current,Uo(a)){if(e=a.stateNode,r=a.memoizedProps,l=null,f=Wn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[on]=a,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||i_(e.nodeValue,r)),e||Rs(a)}else e=Vc(e).createTextNode(l),e[on]=a,a.stateNode=e}return Ke(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Uo(a),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[on]=a}else No(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ke(a),f=!1}else Ui!==null&&(Th(Ui),Ui=null),f=!0;if(!f)return a.flags&256?(ua(a),a):(ua(a),null)}if(ua(a),(a.flags&128)!==0)return a.lanes=r,a;if(r=l!==null,e=e!==null&&e.memoizedState!==null,r){l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return r!==e&&r&&(a.child.flags|=8192),Cc(a,a.updateQueue),Ke(a),null;case 4:return ae(),e===null&&Fh(a.stateNode.containerInfo),Ke(a),null;case 10:return pa(a.type),Ke(a),null;case 19:if(kt(mn),f=a.memoizedState,f===null)return Ke(a),null;if(l=(a.flags&128)!==0,m=f.rendering,m===null)if(l)Jo(f,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=hc(e),m!==null){for(a.flags|=128,Jo(f,!1),e=m.updateQueue,a.updateQueue=e,Cc(a,e),a.subtreeFlags=0,e=r,r=a.child;r!==null;)Uv(r,e),r=r.sibling;return Ct(mn,mn.current&1|2),a.child}e=e.sibling}f.tail!==null&&E()>Dc&&(a.flags|=128,l=!0,Jo(f,!1),a.lanes=4194304)}else{if(!l)if(e=hc(m),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,Cc(a,e),Jo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ce)return Ke(a),null}else 2*E()-f.renderingStartTime>Dc&&r!==536870912&&(a.flags|=128,l=!0,Jo(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(e=f.last,e!==null?e.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=E(),a.sibling=null,e=mn.current,Ct(mn,l?e&1|2:e&1),a):(Ke(a),null);case 22:case 23:return ua(a),Ef(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(r&536870912)!==0&&(a.flags&128)===0&&(Ke(a),a.subtreeFlags&6&&(a.flags|=8192)):Ke(a),r=a.updateQueue,r!==null&&Cc(a,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==r&&(a.flags|=2048),e!==null&&kt(Cs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),pa(gn),Ke(a),null;case 25:return null}throw Error(s(156,a.tag))}function bE(e,a){switch(yf(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return pa(gn),ae(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return H(a),null;case 13:if(ua(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));No()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return kt(mn),null;case 4:return ae(),null;case 10:return pa(a.type),null;case 22:case 23:return ua(a),Ef(),e!==null&&kt(Cs),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return pa(gn),null;case 25:return null;default:return null}}function Pv(e,a){switch(yf(a),a.tag){case 3:pa(gn),ae();break;case 26:case 27:case 5:H(a);break;case 4:ae();break;case 13:ua(a);break;case 19:kt(mn);break;case 10:pa(a.type);break;case 22:case 23:ua(a),Ef(),e!==null&&kt(Cs);break;case 24:pa(gn)}}var EE={getCacheForType:function(e){var a=Bn(gn),r=a.data.get(e);return r===void 0&&(r=e(),a.data.set(e,r)),r}},TE=typeof WeakMap=="function"?WeakMap:Map,Qe=0,ke=null,ve=null,be=0,Xe=0,ri=null,xa=!1,Ar=!1,_h=!1,ya=0,en=0,ts=0,Bs=0,xh=0,yi=0,Rr=0,$o=null,Wi=null,yh=!1,Sh=0,Dc=1/0,Uc=null,es=null,Nc=!1,zs=null,tl=0,Mh=0,bh=null,el=0,Eh=null;function oi(){if((Qe&2)!==0&&be!==0)return be&-be;if(T.T!==null){var e=_r;return e!==0?e:Nh()}return xo()}function Ov(){yi===0&&(yi=(be&536870912)===0||Ce?Fe():536870912);var e=gi.current;return e!==null&&(e.flags|=32),yi}function jn(e,a,r){(e===ke&&Xe===2||e.cancelPendingCommit!==null)&&(wr(e,0),Sa(e,be,yi,!1)),Xn(e,r),((Qe&2)===0||e!==ke)&&(e===ke&&((Qe&2)===0&&(Bs|=r),en===4&&Sa(e,be,yi,!1)),ji(e))}function Fv(e,a,r){if((Qe&6)!==0)throw Error(s(327));var l=!r&&(a&60)===0&&(a&e.expiredLanes)===0||Dt(e,a),f=l?wE(e,a):wh(e,a,!0),m=l;do{if(f===0){Ar&&!l&&Sa(e,a,0,!1);break}else if(f===6)Sa(e,a,0,!xa);else{if(r=e.current.alternate,m&&!AE(r)){f=wh(e,a,!1),m=!1;continue}if(f===2){if(m=a,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){a=M;t:{var U=e;f=$o;var B=U.current.memoizedState.isDehydrated;if(B&&(wr(U,M).flags|=256),M=wh(U,M,!1),M!==2){if(_h&&!B){U.errorRecoveryDisabledLanes|=m,Bs|=m,f=4;break t}m=Wi,Wi=f,m!==null&&Th(m)}f=M}if(m=!1,f!==2)continue}}if(f===1){wr(e,0),Sa(e,a,0,!0);break}t:{switch(l=e,f){case 0:case 1:throw Error(s(345));case 4:if((a&4194176)===a){Sa(l,a,yi,!xa);break t}break;case 2:Wi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=r,l.finishedLanes=a,(a&62914560)===a&&(m=Sh+300-E(),10<m)){if(Sa(l,a,yi,!xa),mt(l,0)!==0)break t;l.timeoutHandle=r_(Iv.bind(null,l,r,Wi,Uc,yh,a,yi,Bs,Rr,xa,2,-0,0),m);break t}Iv(l,r,Wi,Uc,yh,a,yi,Bs,Rr,xa,0,-0,0)}}break}while(!0);ji(e)}function Th(e){Wi===null?Wi=e:Wi.push.apply(Wi,e)}function Iv(e,a,r,l,f,m,M,U,B,j,dt,xt,rt){var ut=a.subtreeFlags;if((ut&8192||(ut&16785408)===16785408)&&(ol={stylesheets:null,count:0,unsuspend:oT},Rv(a),a=cT(),a!==null)){e.cancelPendingCommit=a(Xv.bind(null,e,r,l,f,M,U,B,1,xt,rt)),Sa(e,m,M,!j);return}Xv(e,r,l,f,M,U,B,dt,xt,rt)}function AE(e){for(var a=e;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],m=f.getSnapshot;f=f.value;try{if(!ii(m(),f))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Sa(e,a,r,l){a&=~xh,a&=~Bs,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var f=a;0<f;){var m=31-bt(f),M=1<<m;l[m]=-1,f&=~M}r!==0&&_o(e,r,a)}function Lc(){return(Qe&6)===0?(nl(0),!1):!0}function Ah(){if(ve!==null){if(Xe===0)var e=ve.return;else e=ve,da=Ps=null,Nf(e),gr=null,Fo=0,e=ve;for(;e!==null;)Pv(e.alternate,e),e=e.return;ve=null}}function wr(e,a){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,WE(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ah(),ke=e,ve=r=$a(e.current,null),be=a,Xe=0,ri=null,xa=!1,Ar=Dt(e,a),_h=!1,Rr=yi=xh=Bs=ts=en=0,Wi=$o=null,yh=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var f=31-bt(l),m=1<<f;a|=e[f],l&=~m}return ya=a,ic(),r}function Bv(e,a){me=null,T.H=Xi,a===Po?(a=$g(),Xe=3):a===Kg?(a=$g(),Xe=4):Xe=a===Q0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ri=a,ve===null&&(en=1,bc(e,di(a,e.current)))}function zv(){var e=T.H;return T.H=Xi,e===null?Xi:e}function Vv(){var e=T.A;return T.A=EE,e}function Rh(){en=4,xa||(be&4194176)!==be&&gi.current!==null||(Ar=!0),(ts&134217727)===0&&(Bs&134217727)===0||ke===null||Sa(ke,be,yi,!1)}function wh(e,a,r){var l=Qe;Qe|=2;var f=zv(),m=Vv();(ke!==e||be!==a)&&(Uc=null,wr(e,a)),a=!1;var M=en;t:do try{if(Xe!==0&&ve!==null){var U=ve,B=ri;switch(Xe){case 8:Ah(),M=6;break t;case 3:case 2:case 6:gi.current===null&&(a=!0);var j=Xe;if(Xe=0,ri=null,Cr(e,U,B,j),r&&Ar){M=0;break t}break;default:j=Xe,Xe=0,ri=null,Cr(e,U,B,j)}}RE(),M=en;break}catch(dt){Bv(e,dt)}while(!0);return a&&e.shellSuspendCounter++,da=Ps=null,Qe=l,T.H=f,T.A=m,ve===null&&(ke=null,be=0,ic()),M}function RE(){for(;ve!==null;)Hv(ve)}function wE(e,a){var r=Qe;Qe|=2;var l=zv(),f=Vv();ke!==e||be!==a?(Uc=null,Dc=E()+500,wr(e,a)):Ar=Dt(e,a);t:do try{if(Xe!==0&&ve!==null){a=ve;var m=ri;e:switch(Xe){case 1:Xe=0,ri=null,Cr(e,a,m,1);break;case 2:if(Qg(m)){Xe=0,ri=null,Gv(a);break}a=function(){Xe===2&&ke===e&&(Xe=7),ji(e)},m.then(a,a);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:Qg(m)?(Xe=0,ri=null,Gv(a)):(Xe=0,ri=null,Cr(e,a,m,7));break;case 5:var M=null;switch(ve.tag){case 26:M=ve.memoizedState;case 5:case 27:var U=ve;if(!M||v_(M)){Xe=0,ri=null;var B=U.sibling;if(B!==null)ve=B;else{var j=U.return;j!==null?(ve=j,Pc(j)):ve=null}break e}}Xe=0,ri=null,Cr(e,a,m,5);break;case 6:Xe=0,ri=null,Cr(e,a,m,6);break;case 8:Ah(),en=6;break t;default:throw Error(s(462))}}CE();break}catch(dt){Bv(e,dt)}while(!0);return da=Ps=null,T.H=l,T.A=f,Qe=r,ve!==null?0:(ke=null,be=0,ic(),en)}function CE(){for(;ve!==null&&!qt();)Hv(ve)}function Hv(e){var a=cv(e.alternate,e,ya);e.memoizedProps=e.pendingProps,a===null?Pc(e):ve=a}function Gv(e){var a=e,r=a.alternate;switch(a.tag){case 15:case 0:a=iv(r,a,a.pendingProps,a.type,void 0,be);break;case 11:a=iv(r,a,a.pendingProps,a.type.render,a.ref,be);break;case 5:Nf(a);default:Pv(r,a),a=ve=Uv(a,ya),a=cv(r,a,ya)}e.memoizedProps=e.pendingProps,a===null?Pc(e):ve=a}function Cr(e,a,r,l){da=Ps=null,Nf(a),gr=null,Fo=0;var f=a.return;try{if(vE(e,f,a,r,be)){en=1,bc(e,di(r,e.current)),ve=null;return}}catch(m){if(f!==null)throw ve=f,m;en=1,bc(e,di(r,e.current)),ve=null;return}a.flags&32768?(Ce||l===1?e=!0:Ar||(be&536870912)!==0?e=!1:(xa=e=!0,(l===2||l===3||l===6)&&(l=gi.current,l!==null&&l.tag===13&&(l.flags|=16384))),kv(a,e)):Pc(a)}function Pc(e){var a=e;do{if((a.flags&32768)!==0){kv(a,xa);return}e=a.return;var r=ME(a.alternate,a,ya);if(r!==null){ve=r;return}if(a=a.sibling,a!==null){ve=a;return}ve=a=e}while(a!==null);en===0&&(en=5)}function kv(e,a){do{var r=bE(e.alternate,e);if(r!==null){r.flags&=32767,ve=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(e=e.sibling,e!==null)){ve=e;return}ve=e=r}while(e!==null);en=6,ve=null}function Xv(e,a,r,l,f,m,M,U,B,j){var dt=T.T,xt=Rt.p;try{Rt.p=2,T.T=null,DE(e,a,r,l,xt,f,m,M,U,B,j)}finally{T.T=dt,Rt.p=xt}}function DE(e,a,r,l,f,m,M,U){do Dr();while(zs!==null);if((Qe&6)!==0)throw Error(s(327));var B=e.finishedWork;if(l=e.finishedLanes,B===null)return null;if(e.finishedWork=null,e.finishedLanes=0,B===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var j=B.lanes|B.childLanes;if(j|=vf,$u(e,l,j,m,M,U),e===ke&&(ve=ke=null,be=0),(B.subtreeFlags&10256)===0&&(B.flags&10256)===0||Nc||(Nc=!0,Mh=j,bh=r,PE(ct,function(){return Dr(),null})),r=(B.flags&15990)!==0,(B.subtreeFlags&15990)!==0||r?(r=T.T,T.T=null,m=Rt.p,Rt.p=2,M=Qe,Qe|=4,xE(e,B),Ev(B,e),tE(Vh,e.containerInfo),jc=!!zh,Vh=zh=null,e.current=B,yv(e,B.alternate,B),F(),Qe=M,Rt.p=m,T.T=r):e.current=B,Nc?(Nc=!1,zs=e,tl=l):Wv(e,j),j=e.pendingLanes,j===0&&(es=null),Ht(B.stateNode),ji(e),a!==null)for(f=e.onRecoverableError,B=0;B<a.length;B++)j=a[B],f(j.value,{componentStack:j.stack});return(tl&3)!==0&&Dr(),j=e.pendingLanes,(l&4194218)!==0&&(j&42)!==0?e===Eh?el++:(el=0,Eh=e):el=0,nl(0),null}function Wv(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Bo(a)))}function Dr(){if(zs!==null){var e=zs,a=Mh;Mh=0;var r=ql(tl),l=T.T,f=Rt.p;try{if(Rt.p=32>r?32:r,T.T=null,zs===null)var m=!1;else{r=bh,bh=null;var M=zs,U=tl;if(zs=null,tl=0,(Qe&6)!==0)throw Error(s(331));var B=Qe;if(Qe|=4,Cv(M.current),Av(M,M.current,U,r),Qe=B,nl(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(St,M)}catch{}m=!0}return m}finally{Rt.p=f,T.T=l,Wv(e,a)}}return!1}function jv(e,a,r){a=di(r,a),a=jf(e.stateNode,a,2),e=Za(e,a,2),e!==null&&(Xn(e,2),ji(e))}function Ge(e,a,r){if(e.tag===3)jv(e,e,r);else for(;a!==null;){if(a.tag===3){jv(a,e,r);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(es===null||!es.has(l))){e=di(r,e),r=Z0(2),l=Za(a,r,2),l!==null&&(K0(r,l,a,e),Xn(l,2),ji(l));break}}a=a.return}}function Ch(e,a,r){var l=e.pingCache;if(l===null){l=e.pingCache=new TE;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(r)||(_h=!0,f.add(r),e=UE.bind(null,e,a,r),a.then(e,e))}function UE(e,a,r){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ke===e&&(be&r)===r&&(en===4||en===3&&(be&62914560)===be&&300>E()-Sh?(Qe&2)===0&&wr(e,0):xh|=r,Rr===be&&(Rr=0)),ji(e)}function qv(e,a){a===0&&(a=we()),e=Ha(e,a),e!==null&&(Xn(e,a),ji(e))}function NE(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),qv(e,r)}function LE(e,a){var r=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(a),qv(e,r)}function PE(e,a){return Me(e,a)}var Oc=null,Ur=null,Dh=!1,Fc=!1,Uh=!1,Vs=0;function ji(e){e!==Ur&&e.next===null&&(Ur===null?Oc=Ur=e:Ur=Ur.next=e),Fc=!0,Dh||(Dh=!0,FE(OE))}function nl(e,a){if(!Uh&&Fc){Uh=!0;do for(var r=!1,l=Oc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,U=l.pingedLanes;m=(1<<31-bt(42|e)+1)-1,m&=f&~(M&~U),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(r=!0,Kv(l,m))}else m=be,m=mt(l,l===ke?m:0),(m&3)===0||Dt(l,m)||(r=!0,Kv(l,m));l=l.next}while(r);Uh=!1}}function OE(){Fc=Dh=!1;var e=0;Vs!==0&&(XE()&&(e=Vs),Vs=0);for(var a=E(),r=null,l=Oc;l!==null;){var f=l.next,m=Yv(l,a);m===0?(l.next=null,r===null?Oc=f:r.next=f,f===null&&(Ur=r)):(r=l,(e!==0||(m&3)!==0)&&(Fc=!0)),l=f}nl(e)}function Yv(e,a){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-bt(m),U=1<<M,B=f[M];B===-1?((U&r)===0||(U&l)!==0)&&(f[M]=se(U,a)):B<=a&&(e.expiredLanes|=U),m&=~U}if(a=ke,r=be,r=mt(e,e===a?r:0),l=e.callbackNode,r===0||e===a&&Xe===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Pe(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Dt(e,r)){if(a=r&-r,a===e.callbackPriority)return a;switch(l!==null&&Pe(l),ql(r)){case 2:case 8:r=vt;break;case 32:r=ct;break;case 268435456:r=Ut;break;default:r=ct}return l=Zv.bind(null,e),r=Me(r,l),e.callbackPriority=a,e.callbackNode=r,a}return l!==null&&l!==null&&Pe(l),e.callbackPriority=2,e.callbackNode=null,2}function Zv(e,a){var r=e.callbackNode;if(Dr()&&e.callbackNode!==r)return null;var l=be;return l=mt(e,e===ke?l:0),l===0?null:(Fv(e,l,a),Yv(e,E()),e.callbackNode!=null&&e.callbackNode===r?Zv.bind(null,e):null)}function Kv(e,a){if(Dr())return null;Fv(e,a,!0)}function FE(e){jE(function(){(Qe&6)!==0?Me(ht,e):e()})}function Nh(){return Vs===0&&(Vs=Fe()),Vs}function Qv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kl(""+e)}function Jv(e,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,e.id&&r.setAttribute("form",e.id),a.parentNode.insertBefore(r,a),e=new FormData(e),r.parentNode.removeChild(r),e}function IE(e,a,r,l,f){if(a==="submit"&&r&&r.stateNode===f){var m=Qv((f[Tn]||null).action),M=l.submitter;M&&(a=(a=M[Tn]||null)?Qv(a.formAction):M.getAttribute("formAction"),a!==null&&(m=a,M=null));var U=new tc("action","action",null,l,f);e.push({event:U,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Vs!==0){var B=M?Jv(f,M):new FormData(f);Hf(r,{pending:!0,data:B,method:f.method,action:m},null,B)}}else typeof m=="function"&&(U.preventDefault(),B=M?Jv(f,M):new FormData(f),Hf(r,{pending:!0,data:B,method:f.method,action:m},m,B))},currentTarget:f}]})}}for(var Lh=0;Lh<Xg.length;Lh++){var Ph=Xg[Lh],BE=Ph.toLowerCase(),zE=Ph[0].toUpperCase()+Ph.slice(1);Di(BE,"on"+zE)}Di(zg,"onAnimationEnd"),Di(Vg,"onAnimationIteration"),Di(Hg,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(nE,"onTransitionRun"),Di(iE,"onTransitionStart"),Di(aE,"onTransitionCancel"),Di(Gg,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function $v(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var m=void 0;if(a)for(var M=l.length-1;0<=M;M--){var U=l[M],B=U.instance,j=U.currentTarget;if(U=U.listener,B!==m&&f.isPropagationStopped())break t;m=U,f.currentTarget=j;try{m(f)}catch(dt){Mc(dt)}f.currentTarget=null,m=B}else for(M=0;M<l.length;M++){if(U=l[M],B=U.instance,j=U.currentTarget,U=U.listener,B!==m&&f.isPropagationStopped())break t;m=U,f.currentTarget=j;try{m(f)}catch(dt){Mc(dt)}f.currentTarget=null,m=B}}}}function xe(e,a){var r=a[Fa];r===void 0&&(r=a[Fa]=new Set);var l=e+"__bubble";r.has(l)||(t_(a,e,2,!1),r.add(l))}function Oh(e,a,r){var l=0;a&&(l|=4),t_(r,e,l,a)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Fh(e){if(!e[Ic]){e[Ic]=!0,N.forEach(function(r){r!=="selectionchange"&&(VE.has(r)||Oh(r,!1,e),Oh(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Ic]||(a[Ic]=!0,Oh("selectionchange",!1,a))}}function t_(e,a,r,l){switch(b_(a)){case 2:var f=hT;break;case 8:f=dT;break;default:f=Zh}r=f.bind(null,a,r,e),f=void 0,!af||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(a,r,{capture:!0,passive:f}):e.addEventListener(a,r,!0):f!==void 0?e.addEventListener(a,r,{passive:f}):e.addEventListener(a,r,!1)}function Ih(e,a,r,l,f){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(M===4)for(M=l.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;M=M.return}for(;U!==null;){if(M=ra(U),M===null)return;if(B=M.tag,B===5||B===6||B===26||B===27){l=m=M;continue t}U=U.parentNode}}l=l.return}mg(function(){var j=m,dt=ef(r),xt=[];t:{var rt=kg.get(e);if(rt!==void 0){var ut=tc,Kt=e;switch(e){case"keypress":if(Jl(r)===0)break t;case"keydown":case"keyup":ut=Lb;break;case"focusin":Kt="focus",ut=lf;break;case"focusout":Kt="blur",ut=lf;break;case"beforeblur":case"afterblur":ut=lf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Sb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Fb;break;case zg:case Vg:case Hg:ut=Eb;break;case Gg:ut=Bb;break;case"scroll":case"scrollend":ut=xb;break;case"wheel":ut=Vb;break;case"copy":case"cut":case"paste":ut=Ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=yg;break;case"toggle":case"beforetoggle":ut=Gb}var oe=(a&4)!==0,nn=!oe&&(e==="scroll"||e==="scrollend"),K=oe?rt!==null?rt+"Capture":null:rt;oe=[];for(var W=j,et;W!==null;){var gt=W;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||K===null||(gt=Mo(W,K),gt!=null&&oe.push(al(W,gt,et))),nn)break;W=W.return}0<oe.length&&(rt=new ut(rt,Kt,null,r,dt),xt.push({event:rt,listeners:oe}))}}if((a&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&r!==tf&&(Kt=r.relatedTarget||r.fromElement)&&(ra(Kt)||Kt[sa]))break t;if((ut||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(Kt=r.relatedTarget||r.toElement,ut=j,Kt=Kt?ra(Kt):null,Kt!==null&&(nn=$(Kt),oe=Kt.tag,Kt!==nn||oe!==5&&oe!==27&&oe!==6)&&(Kt=null)):(ut=null,Kt=j),ut!==Kt)){if(oe=_g,gt="onMouseLeave",K="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(oe=yg,gt="onPointerLeave",K="onPointerEnter",W="pointer"),nn=ut==null?rt:Ss(ut),et=Kt==null?rt:Ss(Kt),rt=new oe(gt,W+"leave",ut,r,dt),rt.target=nn,rt.relatedTarget=et,gt=null,ra(dt)===j&&(oe=new oe(K,W+"enter",Kt,r,dt),oe.target=et,oe.relatedTarget=nn,gt=oe),nn=gt,ut&&Kt)e:{for(oe=ut,K=Kt,W=0,et=oe;et;et=Nr(et))W++;for(et=0,gt=K;gt;gt=Nr(gt))et++;for(;0<W-et;)oe=Nr(oe),W--;for(;0<et-W;)K=Nr(K),et--;for(;W--;){if(oe===K||K!==null&&oe===K.alternate)break e;oe=Nr(oe),K=Nr(K)}oe=null}else oe=null;ut!==null&&e_(xt,rt,ut,oe,!1),Kt!==null&&nn!==null&&e_(xt,nn,Kt,oe,!0)}}t:{if(rt=j?Ss(j):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var Gt=wg;else if(Ag(rt))if(Cg)Gt=Jb;else{Gt=Kb;var ge=Zb}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?j&&Ci(j.elementType)&&(Gt=wg):Gt=Qb;if(Gt&&(Gt=Gt(e,j))){Rg(xt,Gt,r,dt);break t}ge&&ge(e,rt,j),e==="focusout"&&j&&rt.type==="number"&&j.memoizedProps.value!=null&&Rn(rt,"number",rt.value)}switch(ge=j?Ss(j):window,e){case"focusin":(Ag(ge)||ge.contentEditable==="true")&&(ur=ge,pf=j,Do=null);break;case"focusout":Do=pf=ur=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,Ig(xt,r,dt);break;case"selectionchange":if(eE)break;case"keydown":case"keyup":Ig(xt,r,dt)}var Jt;if(uf)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else cr?Eg(e,r)&&(ne="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ne="onCompositionStart");ne&&(Sg&&r.locale!=="ko"&&(cr||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&cr&&(Jt=gg()):(Va=dt,sf="value"in Va?Va.value:Va.textContent,cr=!0)),ge=Bc(j,ne),0<ge.length&&(ne=new xg(ne,e,null,r,dt),xt.push({event:ne,listeners:ge}),Jt?ne.data=Jt:(Jt=Tg(r),Jt!==null&&(ne.data=Jt)))),(Jt=Xb?Wb(e,r):jb(e,r))&&(ne=Bc(j,"onBeforeInput"),0<ne.length&&(ge=new xg("onBeforeInput","beforeinput",null,r,dt),xt.push({event:ge,listeners:ne}),ge.data=Jt)),IE(xt,e,j,r,dt)}$v(xt,a)})}function al(e,a,r){return{instance:e,listener:a,currentTarget:r}}function Bc(e,a){for(var r=a+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Mo(e,r),f!=null&&l.unshift(al(e,f,m)),f=Mo(e,a),f!=null&&l.push(al(e,f,m))),e=e.return}return l}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function e_(e,a,r,l,f){for(var m=a._reactName,M=[];r!==null&&r!==l;){var U=r,B=U.alternate,j=U.stateNode;if(U=U.tag,B!==null&&B===l)break;U!==5&&U!==26&&U!==27||j===null||(B=j,f?(j=Mo(r,m),j!=null&&M.unshift(al(r,j,B))):f||(j=Mo(r,m),j!=null&&M.push(al(r,j,B)))),r=r.return}M.length!==0&&e.push({event:a,listeners:M})}var HE=/\r\n?/g,GE=/\u0000|\uFFFD/g;function n_(e){return(typeof e=="string"?e:""+e).replace(HE,`
`).replace(GE,"")}function i_(e,a){return a=n_(a),n_(e)===a}function zc(){}function Ve(e,a,r,l,f,m){switch(r){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||pn(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&pn(e,""+l);break;case"className":$t(e,"class",l);break;case"tabIndex":$t(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,r,l);break;case"style":rr(e,l,m);break;case"data":if(a!=="object"){$t(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Kl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(a!=="input"&&Ve(e,a,"name",f.name,f,null),Ve(e,a,"formEncType",f.formEncType,f,null),Ve(e,a,"formMethod",f.formMethod,f,null),Ve(e,a,"formTarget",f.formTarget,f,null)):(Ve(e,a,"encType",f.encType,f,null),Ve(e,a,"method",f.method,f,null),Ve(e,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Kl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=zc);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Kl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Wt(e,"popover",l);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Wt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=vb.get(r)||r,Wt(e,r,l))}}function Bh(e,a,r,l,f,m){switch(r){case"style":rr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=r}}break;case"children":typeof l=="string"?pn(e,l):(typeof l=="number"||typeof l=="bigint")&&pn(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=zc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Y.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),a=r.slice(2,f?r.length-7:void 0),m=e[Tn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(a,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(a,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Wt(e,r,l)}}}function Ln(e,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,f=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Ve(e,a,m,M,r,null)}}f&&Ve(e,a,"srcSet",r.srcSet,r,null),l&&Ve(e,a,"src",r.src,r,null);return;case"input":xe("invalid",e);var U=m=M=f=null,B=null,j=null;for(l in r)if(r.hasOwnProperty(l)){var dt=r[l];if(dt!=null)switch(l){case"name":f=dt;break;case"type":M=dt;break;case"checked":B=dt;break;case"defaultChecked":j=dt;break;case"value":m=dt;break;case"defaultValue":U=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,a));break;default:Ve(e,a,l,dt,r,null)}}oa(e,m,U,B,j,M,f,!1),He(e);return;case"select":xe("invalid",e),l=M=m=null;for(f in r)if(r.hasOwnProperty(f)&&(U=r[f],U!=null))switch(f){case"value":m=U;break;case"defaultValue":M=U;break;case"multiple":l=U;default:Ve(e,a,f,U,r,null)}a=m,r=M,e.multiple=!!l,a!=null?fi(e,!!l,a,!1):r!=null&&fi(e,!!l,r,!0);return;case"textarea":xe("invalid",e),m=f=l=null;for(M in r)if(r.hasOwnProperty(M)&&(U=r[M],U!=null))switch(M){case"value":l=U;break;case"defaultValue":f=U;break;case"children":m=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(91));break;default:Ve(e,a,M,U,r,null)}wn(e,l,f,m),He(e);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(l=r[B],l!=null))switch(B){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ve(e,a,B,l,r,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<il.length;l++)xe(il[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in r)if(r.hasOwnProperty(j)&&(l=r[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Ve(e,a,j,l,r,null)}return;default:if(Ci(a)){for(dt in r)r.hasOwnProperty(dt)&&(l=r[dt],l!==void 0&&Bh(e,a,dt,l,r,void 0));return}}for(U in r)r.hasOwnProperty(U)&&(l=r[U],l!=null&&Ve(e,a,U,l,r,null))}function kE(e,a,r,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,U=null,B=null,j=null,dt=null;for(ut in r){var xt=r[ut];if(r.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=xt;default:l.hasOwnProperty(ut)||Ve(e,a,ut,null,l,xt)}}for(var rt in l){var ut=l[rt];if(xt=r[rt],l.hasOwnProperty(rt)&&(ut!=null||xt!=null))switch(rt){case"type":m=ut;break;case"name":f=ut;break;case"checked":j=ut;break;case"defaultChecked":dt=ut;break;case"value":M=ut;break;case"defaultValue":U=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,a));break;default:ut!==xt&&Ve(e,a,rt,ut,l,xt)}}An(e,M,U,B,j,dt,m,f);return;case"select":ut=M=U=rt=null;for(m in r)if(B=r[m],r.hasOwnProperty(m)&&B!=null)switch(m){case"value":break;case"multiple":ut=B;default:l.hasOwnProperty(m)||Ve(e,a,m,null,l,B)}for(f in l)if(m=l[f],B=r[f],l.hasOwnProperty(f)&&(m!=null||B!=null))switch(f){case"value":rt=m;break;case"defaultValue":U=m;break;case"multiple":M=m;default:m!==B&&Ve(e,a,f,m,l,B)}a=U,r=M,l=ut,rt!=null?fi(e,!!r,rt,!1):!!l!=!!r&&(a!=null?fi(e,!!r,a,!0):fi(e,!!r,r?[]:"",!1));return;case"textarea":ut=rt=null;for(U in r)if(f=r[U],r.hasOwnProperty(U)&&f!=null&&!l.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:Ve(e,a,U,null,l,f)}for(M in l)if(f=l[M],m=r[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":rt=f;break;case"defaultValue":ut=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&Ve(e,a,M,f,l,m)}Ie(e,rt,ut);return;case"option":for(var Kt in r)if(rt=r[Kt],r.hasOwnProperty(Kt)&&rt!=null&&!l.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:Ve(e,a,Kt,null,l,rt)}for(B in l)if(rt=l[B],ut=r[B],l.hasOwnProperty(B)&&rt!==ut&&(rt!=null||ut!=null))switch(B){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ve(e,a,B,rt,l,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in r)rt=r[oe],r.hasOwnProperty(oe)&&rt!=null&&!l.hasOwnProperty(oe)&&Ve(e,a,oe,null,l,rt);for(j in l)if(rt=l[j],ut=r[j],l.hasOwnProperty(j)&&rt!==ut&&(rt!=null||ut!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,a));break;default:Ve(e,a,j,rt,l,ut)}return;default:if(Ci(a)){for(var nn in r)rt=r[nn],r.hasOwnProperty(nn)&&rt!==void 0&&!l.hasOwnProperty(nn)&&Bh(e,a,nn,void 0,l,rt);for(dt in l)rt=l[dt],ut=r[dt],!l.hasOwnProperty(dt)||rt===ut||rt===void 0&&ut===void 0||Bh(e,a,dt,rt,l,ut);return}}for(var K in r)rt=r[K],r.hasOwnProperty(K)&&rt!=null&&!l.hasOwnProperty(K)&&Ve(e,a,K,null,l,rt);for(xt in l)rt=l[xt],ut=r[xt],!l.hasOwnProperty(xt)||rt===ut||rt==null&&ut==null||Ve(e,a,xt,rt,l,ut)}var zh=null,Vh=null;function Vc(e){return e.nodeType===9?e:e.ownerDocument}function a_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Hh(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Gh=null;function XE(){var e=window.event;return e&&e.type==="popstate"?e===Gh?!1:(Gh=e,!0):(Gh=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,WE=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,jE=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(e){return o_.resolve(null).then(e).catch(qE)}:r_;function qE(e){setTimeout(function(){throw e})}function kh(e,a){var r=a,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(l===0){e.removeChild(f),hl(a);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=f}while(r);hl(a)}function Xh(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Xh(r),So(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function YE(e,a,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ia])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Li(e.nextSibling),e===null)break}return null}function ZE(e,a,r){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Li(e.nextSibling),e===null))return null;return e}function Li(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}function l_(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return e;a--}else r==="/$"&&a++}e=e.previousSibling}return null}function c_(e,a,r){switch(a=Vc(r),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var Si=new Map,u_=new Set;function Hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ma=Rt.d;Rt.d={f:KE,r:QE,D:JE,C:$E,L:tT,m:eT,X:iT,S:nT,M:aT};function KE(){var e=Ma.f(),a=Lc();return e||a}function QE(e){var a=Ba(e);a!==null&&a.tag===5&&a.type==="form"?I0(a):Ma.r(e)}var Lr=typeof document>"u"?null:document;function f_(e,a,r){var l=Lr;if(l&&typeof a=="string"&&a){var f=re(a);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),u_.has(f)||(u_.add(f),e={rel:e,crossOrigin:r,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),Ln(a,"link",e),ln(a),l.head.appendChild(a)))}}function JE(e){Ma.D(e),f_("dns-prefetch",e,null)}function $E(e,a){Ma.C(e,a),f_("preconnect",e,a)}function tT(e,a,r){Ma.L(e,a,r);var l=Lr;if(l&&e&&a){var f='link[rel="preload"][as="'+re(a)+'"]';a==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+re(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+re(r.imageSizes)+'"]')):f+='[href="'+re(e)+'"]';var m=f;switch(a){case"style":m=Pr(e);break;case"script":m=Or(e)}Si.has(m)||(e=C({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:e,as:a},r),Si.set(m,e),l.querySelector(f)!==null||a==="style"&&l.querySelector(sl(m))||a==="script"&&l.querySelector(rl(m))||(a=l.createElement("link"),Ln(a,"link",e),ln(a),l.head.appendChild(a)))}}function eT(e,a){Ma.m(e,a);var r=Lr;if(r&&e){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+re(l)+'"][href="'+re(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Or(e)}if(!Si.has(m)&&(e=C({rel:"modulepreload",href:e},a),Si.set(m,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(rl(m)))return}l=r.createElement("link"),Ln(l,"link",e),ln(l),r.head.appendChild(l)}}}function nT(e,a,r){Ma.S(e,a,r);var l=Lr;if(l&&e){var f=za(l).hoistableStyles,m=Pr(e);a=a||"default";var M=f.get(m);if(!M){var U={loading:0,preload:null};if(M=l.querySelector(sl(m)))U.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":a},r),(r=Si.get(m))&&Wh(e,r);var B=M=l.createElement("link");ln(B),Ln(B,"link",e),B._p=new Promise(function(j,dt){B.onload=j,B.onerror=dt}),B.addEventListener("load",function(){U.loading|=1}),B.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Gc(M,a,l)}M={type:"stylesheet",instance:M,count:1,state:U},f.set(m,M)}}}function iT(e,a){Ma.X(e,a);var r=Lr;if(r&&e){var l=za(r).hoistableScripts,f=Or(e),m=l.get(f);m||(m=r.querySelector(rl(f)),m||(e=C({src:e,async:!0},a),(a=Si.get(f))&&jh(e,a),m=r.createElement("script"),ln(m),Ln(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function aT(e,a){Ma.M(e,a);var r=Lr;if(r&&e){var l=za(r).hoistableScripts,f=Or(e),m=l.get(f);m||(m=r.querySelector(rl(f)),m||(e=C({src:e,async:!0,type:"module"},a),(a=Si.get(f))&&jh(e,a),m=r.createElement("script"),ln(m),Ln(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function h_(e,a,r,l){var f=(f=ue.current)?Hc(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Pr(r.href),r=za(f).hoistableStyles,l=r.get(a),l||(l={type:"style",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Pr(r.href);var m=za(f).hoistableStyles,M=m.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=f.querySelector(sl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),Si.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Si.set(e,r),m||sT(f,e,r,M.state))),a&&l===null)throw Error(s(528,""));return M}if(a&&l!==null)throw Error(s(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Or(r),r=za(f).hoistableScripts,l=r.get(a),l||(l={type:"script",instance:null,count:0,state:null},r.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pr(e){return'href="'+re(e)+'"'}function sl(e){return'link[rel="stylesheet"]['+e+"]"}function d_(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function sT(e,a,r,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Ln(a,"link",r),ln(a),e.head.appendChild(a))}function Or(e){return'[src="'+re(e)+'"]'}function rl(e){return"script[async]"+e}function p_(e,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+re(r.href)+'"]');if(l)return a.instance=l,ln(l),l;var f=C({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ln(l),Ln(l,"style",f),Gc(l,r.precedence,e),a.instance=l;case"stylesheet":f=Pr(r.href);var m=e.querySelector(sl(f));if(m)return a.state.loading|=4,a.instance=m,ln(m),m;l=d_(r),(f=Si.get(f))&&Wh(l,f),m=(e.ownerDocument||e).createElement("link"),ln(m);var M=m;return M._p=new Promise(function(U,B){M.onload=U,M.onerror=B}),Ln(m,"link",l),a.state.loading|=4,Gc(m,r.precedence,e),a.instance=m;case"script":return m=Or(r.src),(f=e.querySelector(rl(m)))?(a.instance=f,ln(f),f):(l=r,(f=Si.get(m))&&(l=C({},r),jh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),ln(f),Ln(f,"link",l),e.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Gc(l,r.precedence,e));return a.instance}function Gc(e,a,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var U=l[M];if(U.dataset.precedence===a)m=U;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(e,a.firstChild))}function Wh(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function jh(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var kc=null;function m_(e,a,r){if(kc===null){var l=new Map,f=kc=new Map;f.set(r,l)}else f=kc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var m=r[f];if(!(m[Ia]||m[on]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(a)||"";M=e+M;var U=l.get(M);U?U.push(m):l.set(M,[m])}}return l}function g_(e,a,r){e=e.ownerDocument||e,e.head.insertBefore(r,a==="title"?e.querySelector("head > title"):null)}function rT(e,a,r){if(r===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function v_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ol=null;function oT(){}function lT(e,a,r){if(ol===null)throw Error(s(475));var l=ol;if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Pr(r.href),m=e.querySelector(sl(f));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Xc.bind(l),e.then(l,l)),a.state.loading|=4,a.instance=m,ln(m);return}m=e.ownerDocument||e,r=d_(r),(f=Si.get(f))&&Wh(r,f),m=m.createElement("link"),ln(m);var M=m;M._p=new Promise(function(U,B){M.onload=U,M.onerror=B}),Ln(m,"link",r),a.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Xc.bind(l),e.addEventListener("load",a),e.addEventListener("error",a))}}function cT(){if(ol===null)throw Error(s(475));var e=ol;return e.stylesheets&&e.count===0&&qh(e,e.stylesheets),0<e.count?function(a){var r=setTimeout(function(){if(e.stylesheets&&qh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Xc(){if(this.count--,this.count===0){if(this.stylesheets)qh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wc=null;function qh(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wc=new Map,a.forEach(uT,e),Wc=null,Xc.call(e))}function uT(e,a){if(!(a.state.loading&4)){var r=Wc.get(e);if(r)var l=r.get(null);else{r=new Map,Wc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}f=a.instance,M=f.getAttribute("data-precedence"),m=r.get(M)||l,m===l&&r.set(null,f),r.set(M,f),this.count++,l=Xc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),a.state.loading|=4}}var ll={$$typeof:y,Provider:null,Consumer:null,_currentValue:Yt,_currentValue2:Yt,_threadCount:0};function fT(e,a,r,l,f,m,M,U){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qn(0),this.hiddenUpdates=Qn(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function __(e,a,r,l,f,m,M,U,B,j,dt,xt){return e=new fT(e,a,r,M,U,B,j,xt),a=1,m===!0&&(a|=24),m=xi(3,null,null,a),e.current=m,m.stateNode=e,a=Tf(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:a},sh(m),e}function x_(e){return e?(e=dr,e):dr}function y_(e,a,r,l,f,m){f=x_(f),l.context===null?l.context=f:l.pendingContext=f,l=Ya(a),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=Za(e,l,a),r!==null&&(jn(r,e,a),Wo(r,e,a))}function S_(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function Yh(e,a){S_(e,a),(e=e.alternate)&&S_(e,a)}function M_(e){if(e.tag===13){var a=Ha(e,67108864);a!==null&&jn(a,e,67108864),Yh(e,67108864)}}var jc=!0;function hT(e,a,r,l){var f=T.T;T.T=null;var m=Rt.p;try{Rt.p=2,Zh(e,a,r,l)}finally{Rt.p=m,T.T=f}}function dT(e,a,r,l){var f=T.T;T.T=null;var m=Rt.p;try{Rt.p=8,Zh(e,a,r,l)}finally{Rt.p=m,T.T=f}}function Zh(e,a,r,l){if(jc){var f=Kh(l);if(f===null)Ih(e,a,l,qc,r),E_(e,l);else if(mT(f,e,a,r,l))l.stopPropagation();else if(E_(e,l),a&4&&-1<pT.indexOf(e)){for(;f!==null;){var m=Ba(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=yt(m.pendingLanes);if(M!==0){var U=m;for(U.pendingLanes|=2,U.entangledLanes|=2;M;){var B=1<<31-bt(M);U.entanglements[1]|=B,M&=~B}ji(m),(Qe&6)===0&&(Dc=E()+500,nl(0))}}break;case 13:U=Ha(m,2),U!==null&&jn(U,m,2),Lc(),Yh(m,2)}if(m=Kh(l),m===null&&Ih(e,a,l,qc,r),m===f)break;f=m}f!==null&&l.stopPropagation()}else Ih(e,a,l,null,r)}}function Kh(e){return e=ef(e),Qh(e)}var qc=null;function Qh(e){if(qc=null,e=ra(e),e!==null){var a=$(e);if(a===null)e=null;else{var r=a.tag;if(r===13){if(e=_t(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return qc=e,null}function b_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ht:return 2;case vt:return 8;case ct:case Zt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Jh=!1,ns=null,is=null,as=null,cl=new Map,ul=new Map,ss=[],pT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E_(e,a){switch(e){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":cl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(a.pointerId)}}function fl(e,a,r,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},a!==null&&(a=Ba(a),a!==null&&M_(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),e)}function mT(e,a,r,l,f){switch(a){case"focusin":return ns=fl(ns,e,a,r,l,f),!0;case"dragenter":return is=fl(is,e,a,r,l,f),!0;case"mouseover":return as=fl(as,e,a,r,l,f),!0;case"pointerover":var m=f.pointerId;return cl.set(m,fl(cl.get(m)||null,e,a,r,l,f)),!0;case"gotpointercapture":return m=f.pointerId,ul.set(m,fl(ul.get(m)||null,e,a,r,l,f)),!0}return!1}function T_(e){var a=ra(e.target);if(a!==null){var r=$(a);if(r!==null){if(a=r.tag,a===13){if(a=_t(r),a!==null){e.blockedOn=a,Yl(e.priority,function(){if(r.tag===13){var l=oi(),f=Ha(r,l);f!==null&&jn(f,r,l),Yh(r,l)}});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yc(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Kh(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);tf=l,r.target.dispatchEvent(l),tf=null}else return a=Ba(r),a!==null&&M_(a),e.blockedOn=r,!1;a.shift()}return!0}function A_(e,a,r){Yc(e)&&r.delete(a)}function gT(){Jh=!1,ns!==null&&Yc(ns)&&(ns=null),is!==null&&Yc(is)&&(is=null),as!==null&&Yc(as)&&(as=null),cl.forEach(A_),ul.forEach(A_)}function Zc(e,a){e.blockedOn===a&&(e.blockedOn=null,Jh||(Jh=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,gT)))}var Kc=null;function R_(e){Kc!==e&&(Kc=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Kc===e&&(Kc=null);for(var a=0;a<e.length;a+=3){var r=e[a],l=e[a+1],f=e[a+2];if(typeof l!="function"){if(Qh(l||r)===null)continue;break}var m=Ba(r);m!==null&&(e.splice(a,3),a-=3,Hf(m,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function hl(e){function a(B){return Zc(B,e)}ns!==null&&Zc(ns,e),is!==null&&Zc(is,e),as!==null&&Zc(as,e),cl.forEach(a),ul.forEach(a);for(var r=0;r<ss.length;r++){var l=ss[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ss.length&&(r=ss[0],r.blockedOn===null);)T_(r),r.blockedOn===null&&ss.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],m=r[l+1],M=f[Tn]||null;if(typeof m=="function")M||R_(r);else if(M){var U=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[Tn]||null)U=M.formAction;else if(Qh(f)!==null)continue}else U=M.action;typeof U=="function"?r[l+1]=U:(r.splice(l,3),l-=3),R_(r)}}}function $h(e){this._internalRoot=e}Qc.prototype.render=$h.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var r=a.current,l=oi();y_(r,l,e,a,null,null)},Qc.prototype.unmount=$h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;e.tag===0&&Dr(),y_(e.current,2,null,e,null,null),Lc(),a[sa]=null}};function Qc(e){this._internalRoot=e}Qc.prototype.unstable_scheduleHydration=function(e){if(e){var a=xo();e={blockedOn:null,target:e,priority:a};for(var r=0;r<ss.length&&a!==0&&a<ss[r].priority;r++);ss.splice(r,0,e),r===0&&T_(e)}};var w_=t.version;if(w_!=="19.0.0")throw Error(s(527,w_,"19.0.0"));Rt.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=J(a),e=e!==null?wt(e):null,e=e===null?null:e.stateNode,e};var vT={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:T,findFiberByHostInstance:ra,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{St=Jc.inject(vT),Tt=Jc}catch{}}return pl.createRoot=function(e,a){if(!o(e))throw Error(s(299));var r=!1,l="",f=W0,m=j0,M=q0,U=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(U=a.unstable_transitionCallbacks)),a=__(e,1,!1,null,null,r,l,f,m,M,U,null),e[sa]=a.current,Fh(e.nodeType===8?e.parentNode:e),new $h(a)},pl.hydrateRoot=function(e,a,r){if(!o(e))throw Error(s(299));var l=!1,f="",m=W0,M=j0,U=q0,B=null,j=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(U=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&(j=r.formState)),a=__(e,1,!0,a,r??null,l,f,m,M,U,B,j),a.context=x_(null),r=a.current,l=oi(),f=Ya(l),f.callback=null,Za(r,f,l),a.current.lanes=l,Xn(a,l),ji(a),e[sa]=a.current,Fh(e),new Qc(a)},pl.version="19.0.0",pl}var B_;function RT(){if(B_)return ed.exports;B_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),ed.exports=AT(),ed.exports}var wT=RT(),te=xm();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),DT=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),z_=i=>{const t=DT(i);return t.charAt(0).toUpperCase()+t.slice(1)},eS=(...i)=>i.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=te.forwardRef(({color:i="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...h},d)=>te.createElement("svg",{ref:d,...UT,width:t,height:t,stroke:i,strokeWidth:s?Number(n)*24/Number(t):n,className:eS("lucide",o),...h},[...u.map(([p,g])=>te.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=(i,t)=>{const n=te.forwardRef(({className:s,...o},c)=>te.createElement(NT,{ref:c,iconNode:t,className:eS(`lucide-${CT(z_(i))}`,`lucide-${i}`,s),...o}));return n.displayName=z_(i),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],PT=wi("award",LT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],V_=wi("briefcase",OT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],IT=wi("download",FT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],zT=wi("external-link",BT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],HT=wi("github",VT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],H_=wi("graduation-cap",GT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],XT=wi("linkedin",kT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],jT=wi("mail",WT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],G_=wi("map-pin",qT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],ZT=wi("menu",YT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],QT=wi("phone",KT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$T=wi("x",JT),nS=te.createContext({});function t1(i){const t=te.useRef(null);return t.current===null&&(t.current=i()),t.current}const ym=typeof window<"u",e1=ym?te.useLayoutEffect:te.useEffect,Sm=te.createContext(null);function Mm(i,t){i.indexOf(t)===-1&&i.push(t)}function bm(i,t){const n=i.indexOf(t);n>-1&&i.splice(n,1)}const ta=(i,t,n)=>n>t?t:n<i?i:n;let Em=()=>{};const La={},iS=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function aS(i){return typeof i=="object"&&i!==null}const sS=i=>/^0[^.\s]+$/u.test(i);function Tm(i){let t;return()=>(t===void 0&&(t=i()),t)}const Ri=i=>i,n1=(i,t)=>n=>t(i(n)),Vl=(...i)=>i.reduce(n1),Ul=(i,t,n)=>{const s=t-i;return s===0?1:(n-i)/s};class Am{constructor(){this.subscriptions=[]}add(t){return Mm(this.subscriptions,t),()=>bm(this.subscriptions,t)}notify(t,n,s){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,s);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Da=i=>i*1e3,Ai=i=>i/1e3;function rS(i,t){return t?i*(1e3/t):0}const oS=(i,t,n)=>(((1-3*n+3*t)*i+(3*n-6*t))*i+3*t)*i,i1=1e-7,a1=12;function s1(i,t,n,s,o){let c,u,h=0;do u=t+(n-t)/2,c=oS(u,s,o)-i,c>0?n=u:t=u;while(Math.abs(c)>i1&&++h<a1);return u}function Hl(i,t,n,s){if(i===t&&n===s)return Ri;const o=c=>s1(c,0,1,i,n);return c=>c===0||c===1?c:oS(o(c),t,s)}const lS=i=>t=>t<=.5?i(2*t)/2:(2-i(2*(1-t)))/2,cS=i=>t=>1-i(1-t),uS=Hl(.33,1.53,.69,.99),Rm=cS(uS),fS=lS(Rm),hS=i=>(i*=2)<1?.5*Rm(i):.5*(2-Math.pow(2,-10*(i-1))),wm=i=>1-Math.sin(Math.acos(i)),dS=cS(wm),pS=lS(wm),r1=Hl(.42,0,1,1),o1=Hl(0,0,.58,1),mS=Hl(.42,0,.58,1),l1=i=>Array.isArray(i)&&typeof i[0]!="number",gS=i=>Array.isArray(i)&&typeof i[0]=="number",c1={linear:Ri,easeIn:r1,easeInOut:mS,easeOut:o1,circIn:wm,circInOut:pS,circOut:dS,backIn:Rm,backInOut:fS,backOut:uS,anticipate:hS},u1=i=>typeof i=="string",k_=i=>{if(gS(i)){Em(i.length===4);const[t,n,s,o]=i;return Hl(t,n,s,o)}else if(u1(i))return c1[i];return i},$c=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function f1(i,t){let n=new Set,s=new Set,o=!1,c=!1;const u=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function d(g){u.has(g)&&(p.schedule(g),i()),g(h)}const p={schedule:(g,v=!1,_=!1)=>{const b=_&&o?n:s;return v&&u.add(g),b.has(g)||b.add(g),g},cancel:g=>{s.delete(g),u.delete(g)},process:g=>{if(h=g,o){c=!0;return}o=!0,[n,s]=[s,n],n.forEach(d),n.clear(),o=!1,c&&(c=!1,p.process(g))}};return p}const h1=40;function vS(i,t){let n=!1,s=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>n=!0,u=$c.reduce((w,L)=>(w[L]=f1(c),w),{}),{setup:h,read:d,resolveKeyframes:p,preUpdate:g,update:v,preRender:_,render:y,postRender:b}=u,A=()=>{const w=La.useManualTiming?o.timestamp:performance.now();n=!1,La.useManualTiming||(o.delta=s?1e3/60:Math.max(Math.min(w-o.timestamp,h1),1)),o.timestamp=w,o.isProcessing=!0,h.process(o),d.process(o),p.process(o),g.process(o),v.process(o),_.process(o),y.process(o),b.process(o),o.isProcessing=!1,n&&t&&(s=!1,i(A))},S=()=>{n=!0,s=!0,o.isProcessing||i(A)};return{schedule:$c.reduce((w,L)=>{const D=u[L];return w[L]=(O,I=!1,z=!1)=>(n||S(),D.schedule(O,I,z)),w},{}),cancel:w=>{for(let L=0;L<$c.length;L++)u[$c[L]].cancel(w)},state:o,steps:u}}const{schedule:Ze,cancel:vs,state:Pn,steps:rd}=vS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ri,!0);let Tu;function d1(){Tu=void 0}const Yn={now:()=>(Tu===void 0&&Yn.set(Pn.isProcessing||La.useManualTiming?Pn.timestamp:performance.now()),Tu),set:i=>{Tu=i,queueMicrotask(d1)}},_S=i=>t=>typeof t=="string"&&t.startsWith(i),xS=_S("--"),p1=_S("var(--"),Cm=i=>p1(i)?m1.test(i.split("/*")[0].trim()):!1,m1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function X_(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const uo={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Nl={...uo,transform:i=>ta(0,1,i)},tu={...uo,default:1},Rl=i=>Math.round(i*1e5)/1e5,Dm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function g1(i){return i==null}const v1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Um=(i,t)=>n=>!!(typeof n=="string"&&v1.test(n)&&n.startsWith(i)||t&&!g1(n)&&Object.prototype.hasOwnProperty.call(n,t)),yS=(i,t,n)=>s=>{if(typeof s!="string")return s;const[o,c,u,h]=s.match(Dm);return{[i]:parseFloat(o),[t]:parseFloat(c),[n]:parseFloat(u),alpha:h!==void 0?parseFloat(h):1}},_1=i=>ta(0,255,i),od={...uo,transform:i=>Math.round(_1(i))},Js={test:Um("rgb","red"),parse:yS("red","green","blue"),transform:({red:i,green:t,blue:n,alpha:s=1})=>"rgba("+od.transform(i)+", "+od.transform(t)+", "+od.transform(n)+", "+Rl(Nl.transform(s))+")"};function x1(i){let t="",n="",s="",o="";return i.length>5?(t=i.substring(1,3),n=i.substring(3,5),s=i.substring(5,7),o=i.substring(7,9)):(t=i.substring(1,2),n=i.substring(2,3),s=i.substring(3,4),o=i.substring(4,5),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const ep={test:Um("#"),parse:x1,transform:Js.transform},Gl=i=>({test:t=>typeof t=="string"&&t.endsWith(i)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${i}`}),ds=Gl("deg"),Qi=Gl("%"),zt=Gl("px"),y1=Gl("vh"),S1=Gl("vw"),W_={...Qi,parse:i=>Qi.parse(i)/100,transform:i=>Qi.transform(i*100)},Kr={test:Um("hsl","hue"),parse:yS("hue","saturation","lightness"),transform:({hue:i,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(i)+", "+Qi.transform(Rl(t))+", "+Qi.transform(Rl(n))+", "+Rl(Nl.transform(s))+")"},dn={test:i=>Js.test(i)||ep.test(i)||Kr.test(i),parse:i=>Js.test(i)?Js.parse(i):Kr.test(i)?Kr.parse(i):ep.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?Js.transform(i):Kr.transform(i),getAnimatableNone:i=>{const t=dn.parse(i);return t.alpha=0,dn.transform(t)}},M1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function b1(i){var t,n;return isNaN(i)&&typeof i=="string"&&(((t=i.match(Dm))==null?void 0:t.length)||0)+(((n=i.match(M1))==null?void 0:n.length)||0)>0}const SS="number",MS="color",E1="var",T1="var(",j_="${}",A1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ll(i){const t=i.toString(),n=[],s={color:[],number:[],var:[]},o=[];let c=0;const h=t.replace(A1,d=>(dn.test(d)?(s.color.push(c),o.push(MS),n.push(dn.parse(d))):d.startsWith(T1)?(s.var.push(c),o.push(E1),n.push(d)):(s.number.push(c),o.push(SS),n.push(parseFloat(d))),++c,j_)).split(j_);return{values:n,split:h,indexes:s,types:o}}function bS(i){return Ll(i).values}function ES(i){const{split:t,types:n}=Ll(i),s=t.length;return o=>{let c="";for(let u=0;u<s;u++)if(c+=t[u],o[u]!==void 0){const h=n[u];h===SS?c+=Rl(o[u]):h===MS?c+=dn.transform(o[u]):c+=o[u]}return c}}const R1=i=>typeof i=="number"?0:dn.test(i)?dn.getAnimatableNone(i):i;function w1(i){const t=bS(i);return ES(i)(t.map(R1))}const _s={test:b1,parse:bS,createTransformer:ES,getAnimatableNone:w1};function ld(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*(2/3-n)*6:i}function C1({hue:i,saturation:t,lightness:n,alpha:s}){i/=360,t/=100,n/=100;let o=0,c=0,u=0;if(!t)o=c=u=n;else{const h=n<.5?n*(1+t):n+t-n*t,d=2*n-h;o=ld(d,h,i+1/3),c=ld(d,h,i),u=ld(d,h,i-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:s}}function Ou(i,t){return n=>n>0?t:i}const Je=(i,t,n)=>i+(t-i)*n,cd=(i,t,n)=>{const s=i*i,o=n*(t*t-s)+s;return o<0?0:Math.sqrt(o)},D1=[ep,Js,Kr],U1=i=>D1.find(t=>t.test(i));function q_(i){const t=U1(i);if(!t)return!1;let n=t.parse(i);return t===Kr&&(n=C1(n)),n}const Y_=(i,t)=>{const n=q_(i),s=q_(t);if(!n||!s)return Ou(i,t);const o={...n};return c=>(o.red=cd(n.red,s.red,c),o.green=cd(n.green,s.green,c),o.blue=cd(n.blue,s.blue,c),o.alpha=Je(n.alpha,s.alpha,c),Js.transform(o))},np=new Set(["none","hidden"]);function N1(i,t){return np.has(i)?n=>n<=0?i:t:n=>n>=1?t:i}function L1(i,t){return n=>Je(i,t,n)}function Nm(i){return typeof i=="number"?L1:typeof i=="string"?Cm(i)?Ou:dn.test(i)?Y_:F1:Array.isArray(i)?TS:typeof i=="object"?dn.test(i)?Y_:P1:Ou}function TS(i,t){const n=[...i],s=n.length,o=i.map((c,u)=>Nm(c)(c,t[u]));return c=>{for(let u=0;u<s;u++)n[u]=o[u](c);return n}}function P1(i,t){const n={...i,...t},s={};for(const o in n)i[o]!==void 0&&t[o]!==void 0&&(s[o]=Nm(i[o])(i[o],t[o]));return o=>{for(const c in s)n[c]=s[c](o);return n}}function O1(i,t){const n=[],s={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const c=t.types[o],u=i.indexes[c][s[c]],h=i.values[u]??0;n[o]=h,s[c]++}return n}const F1=(i,t)=>{const n=_s.createTransformer(t),s=Ll(i),o=Ll(t);return s.indexes.var.length===o.indexes.var.length&&s.indexes.color.length===o.indexes.color.length&&s.indexes.number.length>=o.indexes.number.length?np.has(i)&&!o.values.length||np.has(t)&&!s.values.length?N1(i,t):Vl(TS(O1(s,o),o.values),n):Ou(i,t)};function AS(i,t,n){return typeof i=="number"&&typeof t=="number"&&typeof n=="number"?Je(i,t,n):Nm(i)(i,t)}const I1=i=>{const t=({timestamp:n})=>i(n);return{start:(n=!0)=>Ze.update(t,n),stop:()=>vs(t),now:()=>Pn.isProcessing?Pn.timestamp:Yn.now()}},RS=(i,t,n=10)=>{let s="";const o=Math.max(Math.round(t/n),2);for(let c=0;c<o;c++)s+=Math.round(i(c/(o-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Fu=2e4;function Lm(i){let t=0;const n=50;let s=i.next(t);for(;!s.done&&t<Fu;)t+=n,s=i.next(t);return t>=Fu?1/0:t}function B1(i,t=100,n){const s=n({...i,keyframes:[0,t]}),o=Math.min(Lm(s),Fu);return{type:"keyframes",ease:c=>s.next(o*c).value/t,duration:Ai(o)}}const z1=5;function wS(i,t,n){const s=Math.max(t-z1,0);return rS(n-i(s),t-s)}const an={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ud=.001;function V1({duration:i=an.duration,bounce:t=an.bounce,velocity:n=an.velocity,mass:s=an.mass}){let o,c,u=1-t;u=ta(an.minDamping,an.maxDamping,u),i=ta(an.minDuration,an.maxDuration,Ai(i)),u<1?(o=p=>{const g=p*u,v=g*i,_=g-n,y=ip(p,u),b=Math.exp(-v);return ud-_/y*b},c=p=>{const v=p*u*i,_=v*n+n,y=Math.pow(u,2)*Math.pow(p,2)*i,b=Math.exp(-v),A=ip(Math.pow(p,2),u);return(-o(p)+ud>0?-1:1)*((_-y)*b)/A}):(o=p=>{const g=Math.exp(-p*i),v=(p-n)*i+1;return-ud+g*v},c=p=>{const g=Math.exp(-p*i),v=(n-p)*(i*i);return g*v});const h=5/i,d=G1(o,c,h);if(i=Da(i),isNaN(d))return{stiffness:an.stiffness,damping:an.damping,duration:i};{const p=Math.pow(d,2)*s;return{stiffness:p,damping:u*2*Math.sqrt(s*p),duration:i}}}const H1=12;function G1(i,t,n){let s=n;for(let o=1;o<H1;o++)s=s-i(s)/t(s);return s}function ip(i,t){return i*Math.sqrt(1-t*t)}const k1=["duration","bounce"],X1=["stiffness","damping","mass"];function Z_(i,t){return t.some(n=>i[n]!==void 0)}function W1(i){let t={velocity:an.velocity,stiffness:an.stiffness,damping:an.damping,mass:an.mass,isResolvedFromDuration:!1,...i};if(!Z_(i,X1)&&Z_(i,k1))if(i.visualDuration){const n=i.visualDuration,s=2*Math.PI/(n*1.2),o=s*s,c=2*ta(.05,1,1-(i.bounce||0))*Math.sqrt(o);t={...t,mass:an.mass,stiffness:o,damping:c}}else{const n=V1(i);t={...t,...n,mass:an.mass},t.isResolvedFromDuration=!0}return t}function Iu(i=an.visualDuration,t=an.bounce){const n=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:t}:i;let{restSpeed:s,restDelta:o}=n;const c=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],h={done:!1,value:c},{stiffness:d,damping:p,mass:g,duration:v,velocity:_,isResolvedFromDuration:y}=W1({...n,velocity:-Ai(n.velocity||0)}),b=_||0,A=p/(2*Math.sqrt(d*g)),S=u-c,x=Ai(Math.sqrt(d/g)),R=Math.abs(S)<5;s||(s=R?an.restSpeed.granular:an.restSpeed.default),o||(o=R?an.restDelta.granular:an.restDelta.default);let w;if(A<1){const D=ip(x,A);w=O=>{const I=Math.exp(-A*x*O);return u-I*((b+A*x*S)/D*Math.sin(D*O)+S*Math.cos(D*O))}}else if(A===1)w=D=>u-Math.exp(-x*D)*(S+(b+x*S)*D);else{const D=x*Math.sqrt(A*A-1);w=O=>{const I=Math.exp(-A*x*O),z=Math.min(D*O,300);return u-I*((b+A*x*S)*Math.sinh(z)+D*S*Math.cosh(z))/D}}const L={calculatedDuration:y&&v||null,next:D=>{const O=w(D);if(y)h.done=D>=v;else{let I=D===0?b:0;A<1&&(I=D===0?Da(b):wS(w,D,O));const z=Math.abs(I)<=s,T=Math.abs(u-O)<=o;h.done=z&&T}return h.value=h.done?u:O,h},toString:()=>{const D=Math.min(Lm(L),Fu),O=RS(I=>L.next(D*I).value,D,30);return D+"ms "+O},toTransition:()=>{}};return L}Iu.applyToOptions=i=>{const t=B1(i,100,Iu);return i.ease=t.ease,i.duration=Da(t.duration),i.type="keyframes",i};function ap({keyframes:i,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:h,max:d,restDelta:p=.5,restSpeed:g}){const v=i[0],_={done:!1,value:v},y=z=>h!==void 0&&z<h||d!==void 0&&z>d,b=z=>h===void 0?d:d===void 0||Math.abs(h-z)<Math.abs(d-z)?h:d;let A=n*t;const S=v+A,x=u===void 0?S:u(S);x!==S&&(A=x-v);const R=z=>-A*Math.exp(-z/s),w=z=>x+R(z),L=z=>{const T=R(z),C=w(z);_.done=Math.abs(T)<=p,_.value=_.done?x:C};let D,O;const I=z=>{y(_.value)&&(D=z,O=Iu({keyframes:[_.value,b(_.value)],velocity:wS(w,z,_.value),damping:o,stiffness:c,restDelta:p,restSpeed:g}))};return I(0),{calculatedDuration:null,next:z=>{let T=!1;return!O&&D===void 0&&(T=!0,L(z),I(z)),D!==void 0&&z>=D?O.next(z-D):(!T&&L(z),_)}}}function j1(i,t,n){const s=[],o=n||La.mix||AS,c=i.length-1;for(let u=0;u<c;u++){let h=o(i[u],i[u+1]);if(t){const d=Array.isArray(t)?t[u]||Ri:t;h=Vl(d,h)}s.push(h)}return s}function q1(i,t,{clamp:n=!0,ease:s,mixer:o}={}){const c=i.length;if(Em(c===t.length),c===1)return()=>t[0];if(c===2&&t[0]===t[1])return()=>t[1];const u=i[0]===i[1];i[0]>i[c-1]&&(i=[...i].reverse(),t=[...t].reverse());const h=j1(t,s,o),d=h.length,p=g=>{if(u&&g<i[0])return t[0];let v=0;if(d>1)for(;v<i.length-2&&!(g<i[v+1]);v++);const _=Ul(i[v],i[v+1],g);return h[v](_)};return n?g=>p(ta(i[0],i[c-1],g)):p}function Y1(i,t){const n=i[i.length-1];for(let s=1;s<=t;s++){const o=Ul(0,t,s);i.push(Je(n,1,o))}}function Z1(i){const t=[0];return Y1(t,i.length-1),t}function K1(i,t){return i.map(n=>n*t)}function Q1(i,t){return i.map(()=>t||mS).splice(0,i.length-1)}function wl({duration:i=300,keyframes:t,times:n,ease:s="easeInOut"}){const o=l1(s)?s.map(k_):k_(s),c={done:!1,value:t[0]},u=K1(n&&n.length===t.length?n:Z1(t),i),h=q1(u,t,{ease:Array.isArray(o)?o:Q1(t,o)});return{calculatedDuration:i,next:d=>(c.value=h(d),c.done=d>=i,c)}}const J1=i=>i!==null;function Pm(i,{repeat:t,repeatType:n="loop"},s,o=1){const c=i.filter(J1),h=o<0||t&&n!=="loop"&&t%2===1?0:c.length-1;return!h||s===void 0?c[h]:s}const $1={decay:ap,inertia:ap,tween:wl,keyframes:wl,spring:Iu};function CS(i){typeof i.type=="string"&&(i.type=$1[i.type])}class Om{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const tA=i=>i/100;class Fm extends Om{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var s,o;const{motionValue:n}=this.options;n&&n.updatedAt!==Yn.now()&&this.tick(Yn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(s=this.options).onStop)==null||o.call(s))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;CS(t);const{type:n=wl,repeat:s=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=t;let{keyframes:h}=t;const d=n||wl;d!==wl&&typeof h[0]!="number"&&(this.mixKeyframes=Vl(tA,AS(h[0],h[1])),h=[0,100]);const p=d({...t,keyframes:h});c==="mirror"&&(this.mirroredGenerator=d({...t,keyframes:[...h].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=Lm(p));const{calculatedDuration:g}=p;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(s+1)-o,this.generator=p}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:s,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:h,calculatedDuration:d}=this;if(this.startTime===null)return s.next(0);const{delay:p=0,keyframes:g,repeat:v,repeatType:_,repeatDelay:y,type:b,onUpdate:A,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-p*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?x<0:x>o;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let w=this.currentTime,L=s;if(v){const z=Math.min(this.currentTime,o)/h;let T=Math.floor(z),C=z%1;!C&&z>=1&&(C=1),C===1&&T--,T=Math.min(T,v+1),!!(T%2)&&(_==="reverse"?(C=1-C,y&&(C-=y/h)):_==="mirror"&&(L=u)),w=ta(0,1,C)*h}const D=R?{done:!1,value:g[0]}:L.next(w);c&&(D.value=c(D.value));let{done:O}=D;!R&&d!==null&&(O=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&O);return I&&b!==ap&&(D.value=Pm(g,this.options,S,this.speed)),A&&A(D.value),I&&this.finish(),D}then(t,n){return this.finished.then(t,n)}get duration(){return Ai(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ai(t)}get time(){return Ai(this.currentTime)}set time(t){var n;t=Da(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Yn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ai(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:t=I1,startTime:n}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(c=(o=this.options).onPlay)==null||c.call(o);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Yn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function eA(i){for(let t=1;t<i.length;t++)i[t]??(i[t]=i[t-1])}const $s=i=>i*180/Math.PI,sp=i=>{const t=$s(Math.atan2(i[1],i[0]));return rp(t)},nA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:sp,rotateZ:sp,skewX:i=>$s(Math.atan(i[1])),skewY:i=>$s(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},rp=i=>(i=i%360,i<0&&(i+=360),i),K_=sp,Q_=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),J_=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),iA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Q_,scaleY:J_,scale:i=>(Q_(i)+J_(i))/2,rotateX:i=>rp($s(Math.atan2(i[6],i[5]))),rotateY:i=>rp($s(Math.atan2(-i[2],i[0]))),rotateZ:K_,rotate:K_,skewX:i=>$s(Math.atan(i[4])),skewY:i=>$s(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function op(i){return i.includes("scale")?1:0}function lp(i,t){if(!i||i==="none")return op(t);const n=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,o;if(n)s=iA,o=n;else{const h=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=nA,o=h}if(!o)return op(t);const c=s[t],u=o[1].split(",").map(sA);return typeof c=="function"?c(u):u[c]}const aA=(i,t)=>{const{transform:n="none"}=getComputedStyle(i);return lp(n,t)};function sA(i){return parseFloat(i.trim())}const fo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ho=new Set(fo),$_=i=>i===uo||i===zt,rA=new Set(["x","y","z"]),oA=fo.filter(i=>!rA.has(i));function lA(i){const t=[];return oA.forEach(n=>{const s=i.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t}const ms={width:({x:i},{paddingLeft:t="0",paddingRight:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),height:({y:i},{paddingTop:t="0",paddingBottom:n="0"})=>i.max-i.min-parseFloat(t)-parseFloat(n),top:(i,{top:t})=>parseFloat(t),left:(i,{left:t})=>parseFloat(t),bottom:({y:i},{top:t})=>parseFloat(t)+(i.max-i.min),right:({x:i},{left:t})=>parseFloat(t)+(i.max-i.min),x:(i,{transform:t})=>lp(t,"x"),y:(i,{transform:t})=>lp(t,"y")};ms.translateX=ms.x;ms.translateY=ms.y;const nr=new Set;let cp=!1,up=!1,fp=!1;function DS(){if(up){const i=Array.from(nr).filter(s=>s.needsMeasurement),t=new Set(i.map(s=>s.element)),n=new Map;t.forEach(s=>{const o=lA(s);o.length&&(n.set(s,o),s.render())}),i.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const o=n.get(s);o&&o.forEach(([c,u])=>{var h;(h=s.getValue(c))==null||h.set(u)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}up=!1,cp=!1,nr.forEach(i=>i.complete(fp)),nr.clear()}function US(){nr.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(up=!0)})}function cA(){fp=!0,US(),DS(),fp=!1}class Im{constructor(t,n,s,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=s,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(nr.add(this),cp||(cp=!0,Ze.read(US),Ze.resolveKeyframes(DS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:s,motionValue:o}=this;if(t[0]===null){const c=o==null?void 0:o.get(),u=t[t.length-1];if(c!==void 0)t[0]=c;else if(s&&n){const h=s.readValue(n,u);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=u),o&&c===void 0&&o.set(t[0])}eA(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),nr.delete(this)}cancel(){this.state==="scheduled"&&(nr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const uA=i=>i.startsWith("--");function fA(i,t,n){uA(t)?i.style.setProperty(t,n):i.style[t]=n}const hA=Tm(()=>window.ScrollTimeline!==void 0),dA={};function pA(i,t){const n=Tm(i);return()=>dA[t]??n()}const NS=pA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),bl=([i,t,n,s])=>`cubic-bezier(${i}, ${t}, ${n}, ${s})`,tx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:bl([0,.65,.55,1]),circOut:bl([.55,0,1,.45]),backIn:bl([.31,.01,.66,-.59]),backOut:bl([.33,1.53,.69,.99])};function LS(i,t){if(i)return typeof i=="function"?NS()?RS(i,t):"ease-out":gS(i)?bl(i):Array.isArray(i)?i.map(n=>LS(n,t)||tx.easeOut):tx[i]}function mA(i,t,n,{delay:s=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:h="easeOut",times:d}={},p=void 0){const g={[t]:n};d&&(g.offset=d);const v=LS(h,o);Array.isArray(v)&&(g.easing=v);const _={delay:s,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return p&&(_.pseudoElement=p),i.animate(g,_)}function PS(i){return typeof i=="function"&&"applyToOptions"in i}function gA({type:i,...t}){return PS(i)&&NS()?i.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class vA extends Om{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:s,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:h,onComplete:d}=t;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=t,Em(typeof t.type!="string");const p=gA(t);this.animation=mA(n,s,o,p,c),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const g=Pm(o,this.options,h,this.speed);this.updateMotionValue?this.updateMotionValue(g):fA(n,s,g),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,s;const t=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return Ai(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ai(t)}get time(){return Ai(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Da(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&hA()?(this.animation.timeline=t,Ri):n(this)}}const OS={anticipate:hS,backInOut:fS,circInOut:pS};function _A(i){return i in OS}function xA(i){typeof i.ease=="string"&&_A(i.ease)&&(i.ease=OS[i.ease])}const fd=10;class yA extends vA{constructor(t){xA(t),CS(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:s,onComplete:o,element:c,...u}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const h=new Fm({...u,autoplay:!1}),d=Math.max(fd,Yn.now()-this.startTime),p=ta(0,fd,d-fd);n.setWithVelocity(h.sample(Math.max(0,d-p)).value,h.sample(d).value,p),h.stop()}}const ex=(i,t)=>t==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(_s.test(i)||i==="0")&&!i.startsWith("url("));function SA(i){const t=i[0];if(i.length===1)return!0;for(let n=0;n<i.length;n++)if(i[n]!==t)return!0}function MA(i,t,n,s){const o=i[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const c=i[i.length-1],u=ex(o,t),h=ex(c,t);return!u||!h?!1:SA(i)||(n==="spring"||PS(n))&&s}function hp(i){i.duration=0,i.type="keyframes"}const bA=new Set(["opacity","clipPath","filter","transform"]),EA=Tm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function TA(i){var g;const{motionValue:t,name:n,repeatDelay:s,repeatType:o,damping:c,type:u}=i;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:p}=t.owner.getProps();return EA()&&n&&bA.has(n)&&(n!=="transform"||!p)&&!d&&!s&&o!=="mirror"&&c!==0&&u!=="inertia"}const AA=40;class RA extends Om{constructor({autoplay:t=!0,delay:n=0,type:s="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:h,name:d,motionValue:p,element:g,...v}){var b;super(),this.stop=()=>{var A,S;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=Yn.now();const _={autoplay:t,delay:n,type:s,repeat:o,repeatDelay:c,repeatType:u,name:d,motionValue:p,element:g,...v},y=(g==null?void 0:g.KeyframeResolver)||Im;this.keyframeResolver=new y(h,(A,S,x)=>this.onKeyframesResolved(A,S,_,!x),d,p,g),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(t,n,s,o){this.keyframeResolver=void 0;const{name:c,type:u,velocity:h,delay:d,isHandoff:p,onUpdate:g}=s;this.resolvedAt=Yn.now(),MA(t,c,u,h)||((La.instantAnimations||!d)&&(g==null||g(Pm(t,s,n))),t[0]=t[t.length-1],hp(s),s.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>AA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:t},y=!p&&TA(_)?new yA({..._,element:_.motionValue.owner.current}):new Fm(_);y.finished.then(()=>this.notifyFinished()).catch(Ri),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),cA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const wA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function CA(i){const t=wA.exec(i);if(!t)return[,];const[,n,s,o]=t;return[`--${n??s}`,o]}function FS(i,t,n=1){const[s,o]=CA(i);if(!s)return;const c=window.getComputedStyle(t).getPropertyValue(s);if(c){const u=c.trim();return iS(u)?parseFloat(u):u}return Cm(o)?FS(o,t,n+1):o}function Bm(i,t){return(i==null?void 0:i[t])??(i==null?void 0:i.default)??i}const IS=new Set(["width","height","top","left","right","bottom",...fo]),DA={test:i=>i==="auto",parse:i=>i},BS=i=>t=>t.test(i),zS=[uo,zt,Qi,ds,S1,y1,DA],nx=i=>zS.find(BS(i));function UA(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||sS(i):!0}const NA=new Set(["brightness","contrast","saturate","opacity"]);function LA(i){const[t,n]=i.slice(0,-1).split("(");if(t==="drop-shadow")return i;const[s]=n.match(Dm)||[];if(!s)return i;const o=n.replace(s,"");let c=NA.has(t)?1:0;return s!==n&&(c*=100),t+"("+c+o+")"}const PA=/\b([a-z-]*)\(.*?\)/gu,dp={..._s,getAnimatableNone:i=>{const t=i.match(PA);return t?t.map(LA).join(" "):i}},ix={...uo,transform:Math.round},OA={rotate:ds,rotateX:ds,rotateY:ds,rotateZ:ds,scale:tu,scaleX:tu,scaleY:tu,scaleZ:tu,skew:ds,skewX:ds,skewY:ds,distance:zt,translateX:zt,translateY:zt,translateZ:zt,x:zt,y:zt,z:zt,perspective:zt,transformPerspective:zt,opacity:Nl,originX:W_,originY:W_,originZ:zt},zm={borderWidth:zt,borderTopWidth:zt,borderRightWidth:zt,borderBottomWidth:zt,borderLeftWidth:zt,borderRadius:zt,radius:zt,borderTopLeftRadius:zt,borderTopRightRadius:zt,borderBottomRightRadius:zt,borderBottomLeftRadius:zt,width:zt,maxWidth:zt,height:zt,maxHeight:zt,top:zt,right:zt,bottom:zt,left:zt,inset:zt,insetBlock:zt,insetBlockStart:zt,insetBlockEnd:zt,insetInline:zt,insetInlineStart:zt,insetInlineEnd:zt,padding:zt,paddingTop:zt,paddingRight:zt,paddingBottom:zt,paddingLeft:zt,paddingBlock:zt,paddingBlockStart:zt,paddingBlockEnd:zt,paddingInline:zt,paddingInlineStart:zt,paddingInlineEnd:zt,margin:zt,marginTop:zt,marginRight:zt,marginBottom:zt,marginLeft:zt,marginBlock:zt,marginBlockStart:zt,marginBlockEnd:zt,marginInline:zt,marginInlineStart:zt,marginInlineEnd:zt,backgroundPositionX:zt,backgroundPositionY:zt,...OA,zIndex:ix,fillOpacity:Nl,strokeOpacity:Nl,numOctaves:ix},FA={...zm,color:dn,backgroundColor:dn,outlineColor:dn,fill:dn,stroke:dn,borderColor:dn,borderTopColor:dn,borderRightColor:dn,borderBottomColor:dn,borderLeftColor:dn,filter:dp,WebkitFilter:dp},VS=i=>FA[i];function HS(i,t){let n=VS(i);return n!==dp&&(n=_s),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const IA=new Set(["auto","none","0"]);function BA(i,t,n){let s=0,o;for(;s<i.length&&!o;){const c=i[s];typeof c=="string"&&!IA.has(c)&&Ll(c).values.length&&(o=i[s]),s++}if(o&&n)for(const c of t)i[c]=HS(n,o)}class zA extends Im{constructor(t,n,s,o,c){super(t,n,s,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let g=0;g<t.length;g++){let v=t[g];if(typeof v=="string"&&(v=v.trim(),Cm(v))){const _=FS(v,n.current);_!==void 0&&(t[g]=_),g===t.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!IS.has(s)||t.length!==2)return;const[o,c]=t,u=nx(o),h=nx(c),d=X_(o),p=X_(c);if(d!==p&&ms[s]){this.needsMeasurement=!0;return}if(u!==h)if($_(u)&&$_(h))for(let g=0;g<t.length;g++){const v=t[g];typeof v=="string"&&(t[g]=parseFloat(v))}else ms[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,s=[];for(let o=0;o<t.length;o++)(t[o]===null||UA(t[o]))&&s.push(o);s.length&&BA(t,s,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ms[s](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(s,o).jump(o,!1)}measureEndState(){var h;const{element:t,name:n,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const o=t.getValue(n);o&&o.jump(this.measuredOrigin,!1);const c=s.length-1,u=s[c];s[c]=ms[n](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([d,p])=>{t.getValue(d).set(p)}),this.resolveNoneKeyframes()}}function VA(i,t,n){if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const o=(n==null?void 0:n[i])??s.querySelectorAll(i);return o?Array.from(o):[]}return Array.from(i)}const GS=(i,t)=>t&&typeof i=="number"?t.transform(i):i;function HA(i){return aS(i)&&"offsetHeight"in i}const ax=30,GA=i=>!isNaN(parseFloat(i));class kA{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var c;const o=Yn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Yn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=GA(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Am);const s=this.events[t].add(n);return t==="change"?()=>{s(),Ze.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Yn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ax)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ax);return rS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function io(i,t){return new kA(i,t)}const{schedule:Vm}=vS(queueMicrotask,!1),Bi={x:!1,y:!1};function kS(){return Bi.x||Bi.y}function XA(i){return i==="x"||i==="y"?Bi[i]?null:(Bi[i]=!0,()=>{Bi[i]=!1}):Bi.x||Bi.y?null:(Bi.x=Bi.y=!0,()=>{Bi.x=Bi.y=!1})}function XS(i,t){const n=VA(i),s=new AbortController,o={passive:!0,...t,signal:s.signal};return[n,o,()=>s.abort()]}function sx(i){return!(i.pointerType==="touch"||kS())}function WA(i,t,n={}){const[s,o,c]=XS(i,n),u=h=>{if(!sx(h))return;const{target:d}=h,p=t(d,h);if(typeof p!="function"||!d)return;const g=v=>{sx(v)&&(p(v),d.removeEventListener("pointerleave",g))};d.addEventListener("pointerleave",g,o)};return s.forEach(h=>{h.addEventListener("pointerenter",u,o)}),c}const WS=(i,t)=>t?i===t?!0:WS(i,t.parentElement):!1,Hm=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,jA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jS(i){return jA.has(i.tagName)||i.isContentEditable===!0}const Au=new WeakSet;function rx(i){return t=>{t.key==="Enter"&&i(t)}}function hd(i,t){i.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const qA=(i,t)=>{const n=i.currentTarget;if(!n)return;const s=rx(()=>{if(Au.has(n))return;hd(n,"down");const o=rx(()=>{hd(n,"up")}),c=()=>hd(n,"cancel");n.addEventListener("keyup",o,t),n.addEventListener("blur",c,t)});n.addEventListener("keydown",s,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),t)};function ox(i){return Hm(i)&&!kS()}function YA(i,t,n={}){const[s,o,c]=XS(i,n),u=h=>{const d=h.currentTarget;if(!ox(h))return;Au.add(d);const p=t(d,h),g=(y,b)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",_),Au.has(d)&&Au.delete(d),ox(y)&&typeof p=="function"&&p(y,{success:b})},v=y=>{g(y,d===window||d===document||n.useGlobalTarget||WS(d,y.target))},_=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",_,o)};return s.forEach(h=>{(n.useGlobalTarget?window:h).addEventListener("pointerdown",u,o),HA(h)&&(h.addEventListener("focus",p=>qA(p,o)),!jS(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),c}function qS(i){return aS(i)&&"ownerSVGElement"in i}function ZA(i){return qS(i)&&i.tagName==="svg"}const Gn=i=>!!(i&&i.getVelocity),KA=[...zS,dn,_s],QA=i=>KA.find(BS(i)),YS=te.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function JA(i=!0){const t=te.useContext(Sm);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,c=te.useId();te.useEffect(()=>{if(i)return o(c)},[i]);const u=te.useCallback(()=>i&&s&&s(c),[c,s,i]);return!n&&s?[!1,u]:[!0]}const ZS=te.createContext({strict:!1}),lx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ao={};for(const i in lx)ao[i]={isEnabled:t=>lx[i].some(n=>!!t[n])};function $A(i){for(const t in i)ao[t]={...ao[t],...i[t]}}const tR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bu(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||tR.has(i)}let KS=i=>!Bu(i);function eR(i){typeof i=="function"&&(KS=t=>t.startsWith("on")?!Bu(t):i(t))}try{eR(require("@emotion/is-prop-valid").default)}catch{}function nR(i,t,n){const s={};for(const o in i)o==="values"&&typeof i.values=="object"||(KS(o)||n===!0&&Bu(o)||!t&&!Bu(o)||i.draggable&&o.startsWith("onDrag"))&&(s[o]=i[o]);return s}const Xu=te.createContext({});function Wu(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Pl(i){return typeof i=="string"||Array.isArray(i)}const Gm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],km=["initial",...Gm];function ju(i){return Wu(i.animate)||km.some(t=>Pl(i[t]))}function QS(i){return!!(ju(i)||i.variants)}function iR(i,t){if(ju(i)){const{initial:n,animate:s}=i;return{initial:n===!1||Pl(n)?n:void 0,animate:Pl(s)?s:void 0}}return i.inherit!==!1?t:{}}function aR(i){const{initial:t,animate:n}=iR(i,te.useContext(Xu));return te.useMemo(()=>({initial:t,animate:n}),[cx(t),cx(n)])}function cx(i){return Array.isArray(i)?i.join(" "):i}function ux(i,t){return t.max===t.min?0:i/(t.max-t.min)*100}const ml={correct:(i,t)=>{if(!t.target)return i;if(typeof i=="string")if(zt.test(i))i=parseFloat(i);else return i;const n=ux(i,t.target.x),s=ux(i,t.target.y);return`${n}% ${s}%`}},sR={correct:(i,{treeScale:t,projectionDelta:n})=>{const s=i,o=_s.parse(i);if(o.length>5)return s;const c=_s.createTransformer(i),u=typeof o[0]!="number"?1:0,h=n.x.scale*t.x,d=n.y.scale*t.y;o[0+u]/=h,o[1+u]/=d;const p=Je(h,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=p),typeof o[3+u]=="number"&&(o[3+u]/=p),c(o)}},pp={borderRadius:{...ml,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ml,borderTopRightRadius:ml,borderBottomLeftRadius:ml,borderBottomRightRadius:ml,boxShadow:sR};function JS(i,{layout:t,layoutId:n}){return ho.has(i)||i.startsWith("origin")||(t||n!==void 0)&&(!!pp[i]||i==="opacity")}const rR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},oR=fo.length;function lR(i,t,n){let s="",o=!0;for(let c=0;c<oR;c++){const u=fo[c],h=i[u];if(h===void 0)continue;let d=!0;if(typeof h=="number"?d=h===(u.startsWith("scale")?1:0):d=parseFloat(h)===0,!d||n){const p=GS(h,zm[u]);if(!d){o=!1;const g=rR[u]||u;s+=`${g}(${p}) `}n&&(t[u]=p)}}return s=s.trim(),n?s=n(t,o?"":s):o&&(s="none"),s}function Xm(i,t,n){const{style:s,vars:o,transformOrigin:c}=i;let u=!1,h=!1;for(const d in t){const p=t[d];if(ho.has(d)){u=!0;continue}else if(xS(d)){o[d]=p;continue}else{const g=GS(p,zm[d]);d.startsWith("origin")?(h=!0,c[d]=g):s[d]=g}}if(t.transform||(u||n?s.transform=lR(t,i.transform,n):s.transform&&(s.transform="none")),h){const{originX:d="50%",originY:p="50%",originZ:g=0}=c;s.transformOrigin=`${d} ${p} ${g}`}}const Wm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function $S(i,t,n){for(const s in t)!Gn(t[s])&&!JS(s,n)&&(i[s]=t[s])}function cR({transformTemplate:i},t){return te.useMemo(()=>{const n=Wm();return Xm(n,t,i),Object.assign({},n.vars,n.style)},[t])}function uR(i,t){const n=i.style||{},s={};return $S(s,n,i),Object.assign(s,cR(i,t)),s}function fR(i,t){const n={},s=uR(i,t);return i.drag&&i.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(n.tabIndex=0),n.style=s,n}const hR={offset:"stroke-dashoffset",array:"stroke-dasharray"},dR={offset:"strokeDashoffset",array:"strokeDasharray"};function pR(i,t,n=1,s=0,o=!0){i.pathLength=1;const c=o?hR:dR;i[c.offset]=zt.transform(-s);const u=zt.transform(t),h=zt.transform(n);i[c.array]=`${u} ${h}`}const mR=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function tM(i,{attrX:t,attrY:n,attrScale:s,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...h},d,p,g){if(Xm(i,h,p),d){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:v,style:_}=i;v.transform&&(_.transform=v.transform,delete v.transform),(_.transform||v.transformOrigin)&&(_.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),_.transform&&(_.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete v.transformBox);for(const y of mR)v[y]!==void 0&&(_[y]=v[y],delete v[y]);t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),s!==void 0&&(v.scale=s),o!==void 0&&pR(v,o,c,u,!1)}const eM=()=>({...Wm(),attrs:{}}),nM=i=>typeof i=="string"&&i.toLowerCase()==="svg";function gR(i,t,n,s){const o=te.useMemo(()=>{const c=eM();return tM(c,t,nM(s),i.transformTemplate,i.style),{...c.attrs,style:{...c.style}}},[t]);if(i.style){const c={};$S(c,i.style,i),o.style={...c,...o.style}}return o}const vR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jm(i){return typeof i!="string"||i.includes("-")?!1:!!(vR.indexOf(i)>-1||/[A-Z]/u.test(i))}function _R(i,t,n,{latestValues:s},o,c=!1,u){const d=(u??jm(i)?gR:fR)(t,s,o,i),p=nR(t,typeof i=="string",c),g=i!==te.Fragment?{...p,...d,ref:n}:{},{children:v}=t,_=te.useMemo(()=>Gn(v)?v.get():v,[v]);return te.createElement(i,{...g,children:_})}function fx(i){const t=[{},{}];return i==null||i.values.forEach((n,s)=>{t[0][s]=n.get(),t[1][s]=n.getVelocity()}),t}function qm(i,t,n,s){if(typeof t=="function"){const[o,c]=fx(s);t=t(n!==void 0?n:i.custom,o,c)}if(typeof t=="string"&&(t=i.variants&&i.variants[t]),typeof t=="function"){const[o,c]=fx(s);t=t(n!==void 0?n:i.custom,o,c)}return t}function Ru(i){return Gn(i)?i.get():i}function xR({scrapeMotionValuesFromProps:i,createRenderState:t},n,s,o){return{latestValues:yR(n,s,o,i),renderState:t()}}function yR(i,t,n,s){const o={},c=s(i,{});for(const _ in c)o[_]=Ru(c[_]);let{initial:u,animate:h}=i;const d=ju(i),p=QS(i);t&&p&&!d&&i.inherit!==!1&&(u===void 0&&(u=t.initial),h===void 0&&(h=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const v=g?h:u;if(v&&typeof v!="boolean"&&!Wu(v)){const _=Array.isArray(v)?v:[v];for(let y=0;y<_.length;y++){const b=qm(i,_[y]);if(b){const{transitionEnd:A,transition:S,...x}=b;for(const R in x){let w=x[R];if(Array.isArray(w)){const L=g?w.length-1:0;w=w[L]}w!==null&&(o[R]=w)}for(const R in A)o[R]=A[R]}}}return o}const iM=i=>(t,n)=>{const s=te.useContext(Xu),o=te.useContext(Sm),c=()=>xR(i,t,s,o);return n?c():t1(c)};function Ym(i,t,n){var c;const{style:s}=i,o={};for(const u in s)(Gn(s[u])||t.style&&Gn(t.style[u])||JS(u,i)||((c=n==null?void 0:n.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(o[u]=s[u]);return o}const SR=iM({scrapeMotionValuesFromProps:Ym,createRenderState:Wm});function aM(i,t,n){const s=Ym(i,t,n);for(const o in i)if(Gn(i[o])||Gn(t[o])){const c=fo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;s[c]=i[o]}return s}const MR=iM({scrapeMotionValuesFromProps:aM,createRenderState:eM}),bR=Symbol.for("motionComponentSymbol");function ER(i,t,n){const s=te.useRef(n);te.useInsertionEffect(()=>{s.current=n});const o=te.useRef(null);return te.useCallback(c=>{var h;c&&((h=i.onMount)==null||h.call(i,c)),t&&(c?t.mount(c):t.unmount());const u=s.current;if(typeof u=="function")if(c){const d=u(c);typeof d=="function"&&(o.current=d)}else o.current?(o.current(),o.current=null):u(c);else u&&(u.current=c)},[t])}const Zm=i=>i.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),TR="framerAppearId",sM="data-"+Zm(TR),rM=te.createContext({});function El(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function AR(i,t,n,s,o,c){var S,x;const{visualElement:u}=te.useContext(Xu),h=te.useContext(ZS),d=te.useContext(Sm),p=te.useContext(YS).reducedMotion,g=te.useRef(null);s=s||h.renderer,!g.current&&s&&(g.current=s(i,{visualState:t,parent:u,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p,isSVG:c}));const v=g.current,_=te.useContext(rM);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&RR(g.current,n,o,_);const y=te.useRef(!1);te.useInsertionEffect(()=>{v&&y.current&&v.update(n,d)});const b=n[sM],A=te.useRef(!!b&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,b))&&((x=window.MotionHasOptimisedAnimation)==null?void 0:x.call(window,b)));return e1(()=>{v&&(y.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),A.current&&v.animationState&&v.animationState.animateChanges())}),te.useEffect(()=>{v&&(!A.current&&v.animationState&&v.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{var R;(R=window.MotionHandoffMarkAsComplete)==null||R.call(window,b)}),A.current=!1),v.enteringChildren=void 0)}),v}function RR(i,t,n,s){const{layoutId:o,layout:c,drag:u,dragConstraints:h,layoutScroll:d,layoutRoot:p,layoutCrossfade:g}=t;i.projection=new n(i.latestValues,t["data-framer-portal-id"]?void 0:oM(i.parent)),i.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||h&&El(h),visualElement:i,animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,crossfade:g,layoutScroll:d,layoutRoot:p})}function oM(i){if(i)return i.options.allowProjection!==!1?i.projection:oM(i.parent)}function dd(i,{forwardMotionProps:t=!1,type:n}={},s,o){s&&$A(s);const c=n?n==="svg":jm(i),u=c?MR:SR;function h(p,g){let v;const _={...te.useContext(YS),...p,layoutId:wR(p)},{isStatic:y}=_,b=aR(p),A=u(p,y);if(!y&&ym){CR();const S=DR(_);v=S.MeasureLayout,b.visualElement=AR(i,A,_,o,S.ProjectionNode,c)}return Z.jsxs(Xu.Provider,{value:b,children:[v&&b.visualElement?Z.jsx(v,{visualElement:b.visualElement,..._}):null,_R(i,p,ER(A,b.visualElement,g),A,y,t,c)]})}h.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const d=te.forwardRef(h);return d[bR]=i,d}function wR({layoutId:i}){const t=te.useContext(nS).id;return t&&i!==void 0?t+"-"+i:i}function CR(i,t){te.useContext(ZS).strict}function DR(i){const{drag:t,layout:n}=ao;if(!t&&!n)return{};const s={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(i)||n!=null&&n.isEnabled(i)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function UR(i,t){if(typeof Proxy>"u")return dd;const n=new Map,s=(c,u)=>dd(c,u,i,t),o=(c,u)=>s(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?s:(n.has(u)||n.set(u,dd(u,void 0,i,t)),n.get(u))})}function lM({top:i,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:i,max:s}}}function NR({x:i,y:t}){return{top:t.min,right:i.max,bottom:t.max,left:i.min}}function LR(i,t){if(!t)return i;const n=t({x:i.left,y:i.top}),s=t({x:i.right,y:i.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function pd(i){return i===void 0||i===1}function mp({scale:i,scaleX:t,scaleY:n}){return!pd(i)||!pd(t)||!pd(n)}function Ys(i){return mp(i)||cM(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function cM(i){return hx(i.x)||hx(i.y)}function hx(i){return i&&i!=="0%"}function zu(i,t,n){const s=i-n,o=t*s;return n+o}function dx(i,t,n,s,o){return o!==void 0&&(i=zu(i,o,s)),zu(i,n,s)+t}function gp(i,t=0,n=1,s,o){i.min=dx(i.min,t,n,s,o),i.max=dx(i.max,t,n,s,o)}function uM(i,{x:t,y:n}){gp(i.x,t.translate,t.scale,t.originPoint),gp(i.y,n.translate,n.scale,n.originPoint)}const px=.999999999999,mx=1.0000000000001;function PR(i,t,n,s=!1){const o=n.length;if(!o)return;t.x=t.y=1;let c,u;for(let h=0;h<o;h++){c=n[h],u=c.projectionDelta;const{visualElement:d}=c.options;d&&d.props.style&&d.props.style.display==="contents"||(s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Jr(i,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,uM(i,u)),s&&Ys(c.latestValues)&&Jr(i,c.latestValues))}t.x<mx&&t.x>px&&(t.x=1),t.y<mx&&t.y>px&&(t.y=1)}function Qr(i,t){i.min=i.min+t,i.max=i.max+t}function gx(i,t,n,s,o=.5){const c=Je(i.min,i.max,o);gp(i,t,n,c,s)}function Jr(i,t){gx(i.x,t.x,t.scaleX,t.scale,t.originX),gx(i.y,t.y,t.scaleY,t.scale,t.originY)}function fM(i,t){return lM(LR(i.getBoundingClientRect(),t))}function OR(i,t,n){const s=fM(i,n),{scroll:o}=t;return o&&(Qr(s.x,o.offset.x),Qr(s.y,o.offset.y)),s}const vx=()=>({translate:0,scale:1,origin:0,originPoint:0}),$r=()=>({x:vx(),y:vx()}),_x=()=>({min:0,max:0}),vn=()=>({x:_x(),y:_x()}),vp={current:null},hM={current:!1};function FR(){if(hM.current=!0,!!ym)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),t=()=>vp.current=i.matches;i.addEventListener("change",t),t()}else vp.current=!1}const IR=new WeakMap;function BR(i,t,n){for(const s in t){const o=t[s],c=n[s];if(Gn(o))i.addValue(s,o);else if(Gn(c))i.addValue(s,io(o,{owner:i}));else if(c!==o)if(i.hasValue(s)){const u=i.getValue(s);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=i.getStaticValue(s);i.addValue(s,io(u!==void 0?u:o,{owner:i}))}}for(const s in n)t[s]===void 0&&i.removeValue(s);return t}const xx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class zR{scrapeMotionValuesFromProps(t,n,s){return{}}constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:o,blockInitialAnimation:c,visualState:u},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Im,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Yn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Ze.render(this.render,!1,!0))};const{latestValues:d,renderState:p}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=n.initial?{...d}:{},this.renderState=p,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=ju(n),this.isVariantNode=QS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(n,{},this);for(const _ in v){const y=v[_];d[_]!==void 0&&Gn(y)&&y.set(d[_])}}mount(t){var n;this.current=t,IR.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,o)=>this.bindToMotionValue(o,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(hM.current||FR(),this.shouldReduceMotion=vp.current),(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),vs(this.notifyUpdate),vs(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const s=ho.has(t);s&&this.onBindTransform&&this.onBindTransform();const o=n.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Ze.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{o(),c&&c(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ao){const n=ao[t];if(!n)continue;const{isEnabled:s,Feature:o}=n;if(!this.features[t]&&o&&s(this.props)&&(this.features[t]=new o(this)),this.features[t]){const c=this.features[t];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):vn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<xx.length;s++){const o=xx[s];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=t[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=BR(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const s=this.values.get(t);n!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=io(n===null?void 0:n,{owner:this}),this.addValue(t,s)),s}readValue(t,n){let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(iS(s)||sS(s))?s=parseFloat(s):!QA(s)&&_s.test(n)&&(s=HS(t,n)),this.setBaseTarget(t,Gn(s)?s.get():s)),Gn(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var c;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const u=qm(this.props,n,(c=this.presenceContext)==null?void 0:c.custom);u&&(s=u[t])}if(n&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Gn(o)?o:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Am),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Vm.render(this.render)}}class dM extends zR{constructor(){super(...arguments),this.KeyframeResolver=zA}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Gn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function pM(i,{style:t,vars:n},s,o){const c=i.style;let u;for(u in t)c[u]=t[u];o==null||o.applyProjectionStyles(c,s);for(u in n)c.setProperty(u,n[u])}function VR(i){return window.getComputedStyle(i)}class HR extends dM{constructor(){super(...arguments),this.type="html",this.renderInstance=pM}readValueFromInstance(t,n){var s;if(ho.has(n))return(s=this.projection)!=null&&s.isProjecting?op(n):aA(t,n);{const o=VR(t),c=(xS(n)?o.getPropertyValue(n):o[n])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(t,{transformPagePoint:n}){return fM(t,n)}build(t,n,s){Xm(t,n,s.transformTemplate)}scrapeMotionValuesFromProps(t,n,s){return Ym(t,n,s)}}const mM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function GR(i,t,n,s){pM(i,t,void 0,s);for(const o in t.attrs)i.setAttribute(mM.has(o)?o:Zm(o),t.attrs[o])}class kR extends dM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=vn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ho.has(n)){const s=VS(n);return s&&s.default||0}return n=mM.has(n)?n:Zm(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,s){return aM(t,n,s)}build(t,n,s){tM(t,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(t,n,s,o){GR(t,n,s,o)}mount(t){this.isSVGTag=nM(t.tagName),super.mount(t)}}const XR=(i,t)=>t.isSVG??jm(i)?new kR(t):new HR(t,{allowProjection:i!==te.Fragment});function to(i,t,n){const s=i.getProps();return qm(s,t,n!==void 0?n:s.custom,i)}const _p=i=>Array.isArray(i);function WR(i,t,n){i.hasValue(t)?i.getValue(t).set(n):i.addValue(t,io(n))}function jR(i){return _p(i)?i[i.length-1]||0:i}function qR(i,t){const n=to(i,t);let{transitionEnd:s={},transition:o={},...c}=n||{};c={...c,...s};for(const u in c){const h=jR(c[u]);WR(i,u,h)}}function YR(i){return!!(Gn(i)&&i.add)}function xp(i,t){const n=i.getValue("willChange");if(YR(n))return n.add(t);if(!n&&La.WillChange){const s=new La.WillChange("auto");i.addValue("willChange",s),s.add(t)}}function gM(i){return i.props[sM]}const ZR=i=>i!==null;function KR(i,{repeat:t,repeatType:n="loop"},s){const o=i.filter(ZR),c=t&&n!=="loop"&&t%2===1?0:o.length-1;return o[c]}const QR={type:"spring",stiffness:500,damping:25,restSpeed:10},JR=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),$R={type:"keyframes",duration:.8},tw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ew=(i,{keyframes:t})=>t.length>2?$R:ho.has(i)?i.startsWith("scale")?JR(t[1]):QR:tw;function nw({when:i,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:h,from:d,elapsed:p,...g}){return!!Object.keys(g).length}const Km=(i,t,n,s={},o,c)=>u=>{const h=Bm(s,i)||{},d=h.delay||s.delay||0;let{elapsed:p=0}=s;p=p-Da(d);const g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...h,delay:-p,onUpdate:_=>{t.set(_),h.onUpdate&&h.onUpdate(_)},onComplete:()=>{u(),h.onComplete&&h.onComplete()},name:i,motionValue:t,element:c?void 0:o};nw(h)||Object.assign(g,ew(i,g)),g.duration&&(g.duration=Da(g.duration)),g.repeatDelay&&(g.repeatDelay=Da(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(hp(g),g.delay===0&&(v=!0)),(La.instantAnimations||La.skipAnimations)&&(v=!0,hp(g),g.delay=0),g.allowFlatten=!h.type&&!h.ease,v&&!c&&t.get()!==void 0){const _=KR(g.keyframes,h);if(_!==void 0){Ze.update(()=>{g.onUpdate(_),g.onComplete()});return}}return h.isSync?new Fm(g):new RA(g)};function iw({protectedKeys:i,needsAnimating:t},n){const s=i.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function vM(i,t,{delay:n=0,transitionOverride:s,type:o}={}){let{transition:c=i.getDefaultTransition(),transitionEnd:u,...h}=t;s&&(c=s);const d=[],p=o&&i.animationState&&i.animationState.getState()[o];for(const g in h){const v=i.getValue(g,i.latestValues[g]??null),_=h[g];if(_===void 0||p&&iw(p,g))continue;const y={delay:n,...Bm(c||{},g)},b=v.get();if(b!==void 0&&!v.isAnimating&&!Array.isArray(_)&&_===b&&!y.velocity)continue;let A=!1;if(window.MotionHandoffAnimation){const x=gM(i);if(x){const R=window.MotionHandoffAnimation(x,g,Ze);R!==null&&(y.startTime=R,A=!0)}}xp(i,g),v.start(Km(g,v,_,i.shouldReduceMotion&&IS.has(g)?{type:!1}:y,i,A));const S=v.animation;S&&d.push(S)}return u&&Promise.all(d).then(()=>{Ze.update(()=>{u&&qR(i,u)})}),d}function _M(i,t,n,s=0,o=1){const c=Array.from(i).sort((p,g)=>p.sortNodePosition(g)).indexOf(t),u=i.size,h=(u-1)*s;return typeof n=="function"?n(c,u):o===1?c*s:h-c*s}function yp(i,t,n={}){var d;const s=to(i,t,n.type==="exit"?(d=i.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=i.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const c=s?()=>Promise.all(vM(i,s,n)):()=>Promise.resolve(),u=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:_}=o;return aw(i,t,p,g,v,_,n)}:()=>Promise.resolve(),{when:h}=o;if(h){const[p,g]=h==="beforeChildren"?[c,u]:[u,c];return p().then(()=>g())}else return Promise.all([c(),u(n.delay)])}function aw(i,t,n=0,s=0,o=0,c=1,u){const h=[];for(const d of i.variantChildren)d.notify("AnimationStart",t),h.push(yp(d,t,{...u,delay:n+(typeof s=="function"?0:s)+_M(i.variantChildren,d,s,o,c)}).then(()=>d.notify("AnimationComplete",t)));return Promise.all(h)}function sw(i,t,n={}){i.notify("AnimationStart",t);let s;if(Array.isArray(t)){const o=t.map(c=>yp(i,c,n));s=Promise.all(o)}else if(typeof t=="string")s=yp(i,t,n);else{const o=typeof t=="function"?to(i,t,n.custom):t;s=Promise.all(vM(i,o,n))}return s.then(()=>{i.notify("AnimationComplete",t)})}function xM(i,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==i.length)return!1;for(let s=0;s<n;s++)if(t[s]!==i[s])return!1;return!0}const rw=km.length;function yM(i){if(!i)return;if(!i.isControllingVariants){const n=i.parent?yM(i.parent)||{}:{};return i.props.initial!==void 0&&(n.initial=i.props.initial),n}const t={};for(let n=0;n<rw;n++){const s=km[n],o=i.props[s];(Pl(o)||o===!1)&&(t[s]=o)}return t}const ow=[...Gm].reverse(),lw=Gm.length;function cw(i){return t=>Promise.all(t.map(({animation:n,options:s})=>sw(i,n,s)))}function uw(i){let t=cw(i),n=yx(),s=!0;const o=d=>(p,g)=>{var _;const v=to(i,g,d==="exit"?(_=i.presenceContext)==null?void 0:_.custom:void 0);if(v){const{transition:y,transitionEnd:b,...A}=v;p={...p,...A,...b}}return p};function c(d){t=d(i)}function u(d){const{props:p}=i,g=yM(i.parent)||{},v=[],_=new Set;let y={},b=1/0;for(let S=0;S<lw;S++){const x=ow[S],R=n[x],w=p[x]!==void 0?p[x]:g[x],L=Pl(w),D=x===d?R.isActive:null;D===!1&&(b=S);let O=w===g[x]&&w!==p[x]&&L;if(O&&s&&i.manuallyAnimateOnMount&&(O=!1),R.protectedKeys={...y},!R.isActive&&D===null||!w&&!R.prevProp||Wu(w)||typeof w=="boolean")continue;const I=fw(R.prevProp,w);let z=I||x===d&&R.isActive&&!O&&L||S>b&&L,T=!1;const C=Array.isArray(w)?w:[w];let V=C.reduce(o(x),{});D===!1&&(V={});const{prevResolvedValues:st={}}=R,at={...st,...V},ft=G=>{z=!0,_.has(G)&&(T=!0,_.delete(G)),R.needsAnimating[G]=!0;const $=i.getValue(G);$&&($.liveStyle=!1)};for(const G in at){const $=V[G],_t=st[G];if(y.hasOwnProperty(G))continue;let P=!1;_p($)&&_p(_t)?P=!xM($,_t):P=$!==_t,P?$!=null?ft(G):_.add(G):$!==void 0&&_.has(G)?ft(G):R.protectedKeys[G]=!0}R.prevProp=w,R.prevResolvedValues=V,R.isActive&&(y={...y,...V}),s&&i.blockInitialAnimation&&(z=!1);const lt=O&&I;z&&(!lt||T)&&v.push(...C.map(G=>{const $={type:x};if(typeof G=="string"&&s&&!lt&&i.manuallyAnimateOnMount&&i.parent){const{parent:_t}=i,P=to(_t,G);if(_t.enteringChildren&&P){const{delayChildren:J}=P.transition||{};$.delay=_M(_t.enteringChildren,i,J)}}return{animation:G,options:$}}))}if(_.size){const S={};if(typeof p.initial!="boolean"){const x=to(i,Array.isArray(p.initial)?p.initial[0]:p.initial);x&&x.transition&&(S.transition=x.transition)}_.forEach(x=>{const R=i.getBaseTarget(x),w=i.getValue(x);w&&(w.liveStyle=!0),S[x]=R??null}),v.push({animation:S})}let A=!!v.length;return s&&(p.initial===!1||p.initial===p.animate)&&!i.manuallyAnimateOnMount&&(A=!1),s=!1,A?t(v):Promise.resolve()}function h(d,p){var v;if(n[d].isActive===p)return Promise.resolve();(v=i.variantChildren)==null||v.forEach(_=>{var y;return(y=_.animationState)==null?void 0:y.setActive(d,p)}),n[d].isActive=p;const g=u(d);for(const _ in n)n[_].protectedKeys={};return g}return{animateChanges:u,setActive:h,setAnimateFunction:c,getState:()=>n,reset:()=>{n=yx()}}}function fw(i,t){return typeof t=="string"?t!==i:Array.isArray(t)?!xM(t,i):!1}function Hs(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function yx(){return{animate:Hs(!0),whileInView:Hs(),whileHover:Hs(),whileTap:Hs(),whileDrag:Hs(),whileFocus:Hs(),exit:Hs()}}class ys{constructor(t){this.isMounted=!1,this.node=t}update(){}}class hw extends ys{constructor(t){super(t),t.animationState||(t.animationState=uw(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Wu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let dw=0;class pw extends ys{constructor(){super(...arguments),this.id=dw++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const mw={animation:{Feature:hw},exit:{Feature:pw}};function Ol(i,t,n,s={passive:!0}){return i.addEventListener(t,n,s),()=>i.removeEventListener(t,n)}function kl(i){return{point:{x:i.pageX,y:i.pageY}}}const gw=i=>t=>Hm(t)&&i(t,kl(t));function Cl(i,t,n,s){return Ol(i,t,gw(n),s)}const SM=1e-4,vw=1-SM,_w=1+SM,MM=.01,xw=0-MM,yw=0+MM;function Zn(i){return i.max-i.min}function Sw(i,t,n){return Math.abs(i-t)<=n}function Sx(i,t,n,s=.5){i.origin=s,i.originPoint=Je(t.min,t.max,i.origin),i.scale=Zn(n)/Zn(t),i.translate=Je(n.min,n.max,i.origin)-i.originPoint,(i.scale>=vw&&i.scale<=_w||isNaN(i.scale))&&(i.scale=1),(i.translate>=xw&&i.translate<=yw||isNaN(i.translate))&&(i.translate=0)}function Dl(i,t,n,s){Sx(i.x,t.x,n.x,s?s.originX:void 0),Sx(i.y,t.y,n.y,s?s.originY:void 0)}function Mx(i,t,n){i.min=n.min+t.min,i.max=i.min+Zn(t)}function Mw(i,t,n){Mx(i.x,t.x,n.x),Mx(i.y,t.y,n.y)}function bx(i,t,n){i.min=t.min-n.min,i.max=i.min+Zn(t)}function Vu(i,t,n){bx(i.x,t.x,n.x),bx(i.y,t.y,n.y)}function bi(i){return[i("x"),i("y")]}const bM=({current:i})=>i?i.ownerDocument.defaultView:null,Ex=(i,t)=>Math.abs(i-t);function bw(i,t){const n=Ex(i.x,t.x),s=Ex(i.y,t.y);return Math.sqrt(n**2+s**2)}class EM{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=gd(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,b=bw(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!b)return;const{point:A}=_,{timestamp:S}=Pn;this.history.push({...A,timestamp:S});const{onStart:x,onMove:R}=this.handlers;y||(x&&x(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,_)},this.handlePointerMove=(_,y)=>{this.lastMoveEvent=_,this.lastMoveEventInfo=md(y,this.transformPagePoint),Ze.update(this.updatePoint,!0)},this.handlePointerUp=(_,y)=>{this.end();const{onEnd:b,onSessionEnd:A,resumeAnimation:S}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=gd(_.type==="pointercancel"?this.lastMoveEventInfo:md(y,this.transformPagePoint),this.history);this.startEvent&&b&&b(_,x),A&&A(_,x)},!Hm(t))return;this.dragSnapToOrigin=c,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=u,this.contextWindow=o||window;const h=kl(t),d=md(h,this.transformPagePoint),{point:p}=d,{timestamp:g}=Pn;this.history=[{...p,timestamp:g}];const{onSessionStart:v}=n;v&&v(t,gd(d,this.history)),this.removeListeners=Vl(Cl(this.contextWindow,"pointermove",this.handlePointerMove),Cl(this.contextWindow,"pointerup",this.handlePointerUp),Cl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),vs(this.updatePoint)}}function md(i,t){return t?{point:t(i.point)}:i}function Tx(i,t){return{x:i.x-t.x,y:i.y-t.y}}function gd({point:i},t){return{point:i,delta:Tx(i,TM(t)),offset:Tx(i,Ew(t)),velocity:Tw(t,.1)}}function Ew(i){return i[0]}function TM(i){return i[i.length-1]}function Tw(i,t){if(i.length<2)return{x:0,y:0};let n=i.length-1,s=null;const o=TM(i);for(;n>=0&&(s=i[n],!(o.timestamp-s.timestamp>Da(t)));)n--;if(!s)return{x:0,y:0};const c=Ai(o.timestamp-s.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-s.x)/c,y:(o.y-s.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function Aw(i,{min:t,max:n},s){return t!==void 0&&i<t?i=s?Je(t,i,s.min):Math.max(i,t):n!==void 0&&i>n&&(i=s?Je(n,i,s.max):Math.min(i,n)),i}function Ax(i,t,n){return{min:t!==void 0?i.min+t:void 0,max:n!==void 0?i.max+n-(i.max-i.min):void 0}}function Rw(i,{top:t,left:n,bottom:s,right:o}){return{x:Ax(i.x,n,o),y:Ax(i.y,t,s)}}function Rx(i,t){let n=t.min-i.min,s=t.max-i.max;return t.max-t.min<i.max-i.min&&([n,s]=[s,n]),{min:n,max:s}}function ww(i,t){return{x:Rx(i.x,t.x),y:Rx(i.y,t.y)}}function Cw(i,t){let n=.5;const s=Zn(i),o=Zn(t);return o>s?n=Ul(t.min,t.max-s,i.min):s>o&&(n=Ul(i.min,i.max-o,t.min)),ta(0,1,n)}function Dw(i,t){const n={};return t.min!==void 0&&(n.min=t.min-i.min),t.max!==void 0&&(n.max=t.max-i.min),n}const Sp=.35;function Uw(i=Sp){return i===!1?i=0:i===!0&&(i=Sp),{x:wx(i,"left","right"),y:wx(i,"top","bottom")}}function wx(i,t,n){return{min:Cx(i,t),max:Cx(i,n)}}function Cx(i,t){return typeof i=="number"?i:i[t]||0}const Nw=new WeakMap;class Lw{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=vn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{n?(this.stopAnimation(),this.snapToCursor(kl(v).point)):this.pauseAnimation()},u=(v,_)=>{this.stopAnimation();const{drag:y,dragPropagation:b,onDragStart:A}=this.getProps();if(y&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=XA(y),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=_,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),bi(x=>{let R=this.getAxisMotionValue(x).get()||0;if(Qi.test(R)){const{projection:w}=this.visualElement;if(w&&w.layout){const L=w.layout.layoutBox[x];L&&(R=Zn(L)*(parseFloat(R)/100))}}this.originPoint[x]=R}),A&&Ze.postRender(()=>A(v,_)),xp(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},h=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_;const{dragPropagation:y,dragDirectionLock:b,onDirectionLock:A,onDrag:S}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:x}=_;if(b&&this.currentDirection===null){this.currentDirection=Pw(x),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",_.point,x),this.updateAxis("y",_.point,x),this.visualElement.render(),S&&S(v,_)},d=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_,this.stop(v,_),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>bi(v=>{var _;return this.getAnimationState(v)==="paused"&&((_=this.getAxisMotionValue(v).animation)==null?void 0:_.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new EM(t,{onSessionStart:c,onStart:u,onMove:h,onSessionEnd:d,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:s,contextWindow:bM(this.visualElement)})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!s)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:h}=this.getProps();h&&Ze.postRender(()=>h(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!eu(t,o,this.currentDirection))return;const c=this.getAxisMotionValue(t);let u=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(u=Aw(u,this.constraints[t],this.elastic[t])),c.set(u)}resolveConstraints(){var c;const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;t&&El(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=Rw(s.layoutBox,t):this.constraints=!1,this.elastic=Uw(n),o!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&bi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=Dw(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!El(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=OR(s,o.root,this.visualElement.getTransformPagePoint());let u=ww(o.layout.layoutBox,c);if(n){const h=n(NR(u));this.hasMutatedConstraints=!!h,h&&(u=lM(h))}return u}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:h}=this.getProps(),d=this.constraints||{},p=bi(g=>{if(!eu(g,n,this.currentDirection))return;let v=d&&d[g]||{};u&&(v={min:0,max:0});const _=o?200:1e6,y=o?40:1e7,b={type:"inertia",velocity:s?t[g]:0,bounceStiffness:_,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(g,b)});return Promise.all(p).then(h)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return xp(this.visualElement,t),s.start(Km(t,s,0,n,this.visualElement,!1))}stopAnimation(){bi(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){bi(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){bi(n=>{const{drag:s}=this.getProps();if(!eu(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(n);if(o&&o.layout){const{min:u,max:h}=o.layout.layoutBox[n],d=c.get()||0;c.set(t[n]-Je(u,h,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!El(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};bi(u=>{const h=this.getAxisMotionValue(u);if(h&&this.constraints!==!1){const d=h.get();o[u]=Cw({min:d,max:d},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),bi(u=>{if(!eu(u,t,null))return;const h=this.getAxisMotionValue(u),{min:d,max:p}=this.constraints[u];h.set(Je(d,p,o[u]))})}addListeners(){if(!this.visualElement.current)return;Nw.set(this.visualElement,this);const t=this.visualElement.current,n=Cl(t,"pointerdown",d=>{const{drag:p,dragListener:g=!0}=this.getProps();p&&g&&!jS(d.target)&&this.start(d)}),s=()=>{const{dragConstraints:d}=this.getProps();El(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,c=o.addEventListener("measure",s);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ze.read(s);const u=Ol(window,"resize",()=>this.scalePositionWithinConstraints()),h=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:p})=>{this.isDragging&&p&&(bi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=d[g].translate,v.set(v.get()+d[g].translate))}),this.visualElement.render())}));return()=>{u(),n(),c(),h&&h()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=Sp,dragMomentum:h=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:h}}}function eu(i,t,n){return(t===!0||t===i)&&(n===null||n===i)}function Pw(i,t=10){let n=null;return Math.abs(i.y)>t?n="y":Math.abs(i.x)>t&&(n="x"),n}class Ow extends ys{constructor(t){super(t),this.removeGroupControls=Ri,this.removeListeners=Ri,this.controls=new Lw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ri}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Dx=i=>(t,n)=>{i&&Ze.postRender(()=>i(t,n))};class Fw extends ys{constructor(){super(...arguments),this.removePointerDownListener=Ri}onPointerDown(t){this.session=new EM(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:bM(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:Dx(t),onStart:Dx(n),onMove:s,onEnd:(c,u)=>{delete this.session,o&&Ze.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Cl(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const wu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let vd=!1;class Iw extends te.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:c}=t;c&&(n.group&&n.group.add(c),s&&s.register&&o&&s.register(c),vd&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),wu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:c}=this.props,{projection:u}=s;return u&&(u.isPresent=c,vd=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==c?u.willUpdate():this.safeToRemove(),t.isPresent!==c&&(c?u.promote():u.relegate()||Ze.postRender(()=>{const h=u.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Vm.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;vd=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function AM(i){const[t,n]=JA(),s=te.useContext(nS);return Z.jsx(Iw,{...i,layoutGroup:s,switchLayoutGroup:te.useContext(rM),isPresent:t,safeToRemove:n})}function Bw(i,t,n){const s=Gn(i)?i:io(i);return s.start(Km("",s,t,n)),s.animation}const zw=(i,t)=>i.depth-t.depth;class Vw{constructor(){this.children=[],this.isDirty=!1}add(t){Mm(this.children,t),this.isDirty=!0}remove(t){bm(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(zw),this.isDirty=!1,this.children.forEach(t)}}function Hw(i,t){const n=Yn.now(),s=({timestamp:o})=>{const c=o-n;c>=t&&(vs(s),i(c-t))};return Ze.setup(s,!0),()=>vs(s)}const RM=["TopLeft","TopRight","BottomLeft","BottomRight"],Gw=RM.length,Ux=i=>typeof i=="string"?parseFloat(i):i,Nx=i=>typeof i=="number"||zt.test(i);function kw(i,t,n,s,o,c){o?(i.opacity=Je(0,n.opacity??1,Xw(s)),i.opacityExit=Je(t.opacity??1,0,Ww(s))):c&&(i.opacity=Je(t.opacity??1,n.opacity??1,s));for(let u=0;u<Gw;u++){const h=`border${RM[u]}Radius`;let d=Lx(t,h),p=Lx(n,h);if(d===void 0&&p===void 0)continue;d||(d=0),p||(p=0),d===0||p===0||Nx(d)===Nx(p)?(i[h]=Math.max(Je(Ux(d),Ux(p),s),0),(Qi.test(p)||Qi.test(d))&&(i[h]+="%")):i[h]=p}(t.rotate||n.rotate)&&(i.rotate=Je(t.rotate||0,n.rotate||0,s))}function Lx(i,t){return i[t]!==void 0?i[t]:i.borderRadius}const Xw=wM(0,.5,dS),Ww=wM(.5,.95,Ri);function wM(i,t,n){return s=>s<i?0:s>t?1:n(Ul(i,t,s))}function Px(i,t){i.min=t.min,i.max=t.max}function Pi(i,t){Px(i.x,t.x),Px(i.y,t.y)}function Ox(i,t){i.translate=t.translate,i.scale=t.scale,i.originPoint=t.originPoint,i.origin=t.origin}function Fx(i,t,n,s,o){return i-=t,i=zu(i,1/n,s),o!==void 0&&(i=zu(i,1/o,s)),i}function jw(i,t=0,n=1,s=.5,o,c=i,u=i){if(Qi.test(t)&&(t=parseFloat(t),t=Je(u.min,u.max,t/100)-u.min),typeof t!="number")return;let h=Je(c.min,c.max,s);i===c&&(h-=t),i.min=Fx(i.min,t,n,h,o),i.max=Fx(i.max,t,n,h,o)}function Ix(i,t,[n,s,o],c,u){jw(i,t[n],t[s],t[o],t.scale,c,u)}const qw=["x","scaleX","originX"],Yw=["y","scaleY","originY"];function Bx(i,t,n,s){Ix(i.x,t,qw,n?n.x:void 0,s?s.x:void 0),Ix(i.y,t,Yw,n?n.y:void 0,s?s.y:void 0)}function zx(i){return i.translate===0&&i.scale===1}function CM(i){return zx(i.x)&&zx(i.y)}function Vx(i,t){return i.min===t.min&&i.max===t.max}function Zw(i,t){return Vx(i.x,t.x)&&Vx(i.y,t.y)}function Hx(i,t){return Math.round(i.min)===Math.round(t.min)&&Math.round(i.max)===Math.round(t.max)}function DM(i,t){return Hx(i.x,t.x)&&Hx(i.y,t.y)}function Gx(i){return Zn(i.x)/Zn(i.y)}function kx(i,t){return i.translate===t.translate&&i.scale===t.scale&&i.originPoint===t.originPoint}class Kw{constructor(){this.members=[]}add(t){Mm(this.members,t),t.scheduleRender()}remove(t){if(bm(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let s;for(let o=n;o>=0;o--){const c=this.members[o];if(c.isPresent!==!1){s=c;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Qw(i,t,n){let s="";const o=i.x.translate/t.x,c=i.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((o||c||u)&&(s=`translate3d(${o}px, ${c}px, ${u}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:p,rotate:g,rotateX:v,rotateY:_,skewX:y,skewY:b}=n;p&&(s=`perspective(${p}px) ${s}`),g&&(s+=`rotate(${g}deg) `),v&&(s+=`rotateX(${v}deg) `),_&&(s+=`rotateY(${_}deg) `),y&&(s+=`skewX(${y}deg) `),b&&(s+=`skewY(${b}deg) `)}const h=i.x.scale*t.x,d=i.y.scale*t.y;return(h!==1||d!==1)&&(s+=`scale(${h}, ${d})`),s||"none"}const _d=["","X","Y","Z"],Jw=1e3;let $w=0;function xd(i,t,n,s){const{latestValues:o}=t;o[i]&&(n[i]=o[i],t.setStaticValue(i,0),s&&(s[i]=0))}function UM(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:t}=i.options;if(!t)return;const n=gM(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:o,layoutId:c}=i.options;window.MotionCancelOptimisedAnimation(n,"transform",Ze,!(o||c))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&UM(s)}function NM({attachResizeListener:i,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:o}){return class{constructor(u={},h=t==null?void 0:t()){this.id=$w++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(nC),this.nodes.forEach(rC),this.nodes.forEach(oC),this.nodes.forEach(iC)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new Vw)}addEventListener(u,h){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Am),this.eventHandlers.get(u).add(h)}notifyListeners(u,...h){const d=this.eventHandlers.get(u);d&&d.notify(...h)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=qS(u)&&!ZA(u),this.instance=u;const{layoutId:h,layout:d,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||h)&&(this.isLayoutDirty=!0),i){let g,v=0;const _=()=>this.root.updateBlockedByResize=!1;Ze.read(()=>{v=window.innerWidth}),i(u,()=>{const y=window.innerWidth;y!==v&&(v=y,this.root.updateBlockedByResize=!0,g&&g(),g=Hw(_,250),wu.hasAnimatedSinceResize&&(wu.hasAnimatedSinceResize=!1,this.nodes.forEach(jx)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&p&&(h||d)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeLayoutChanged:_,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||p.getDefaultTransition()||hC,{onLayoutAnimationStart:A,onLayoutAnimationComplete:S}=p.getProps(),x=!this.targetLayout||!DM(this.targetLayout,y),R=!v&&_;if(this.options.layoutRoot||this.resumeFrom||R||v&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const w={...Bm(b,"layout"),onPlay:A,onComplete:S};(p.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w),this.setAnimationOrigin(g,R)}else v||jx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),vs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(lC),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&UM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:d}=this.options;if(h===void 0&&!d)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Wx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(sC),this.nodes.forEach(tC),this.nodes.forEach(eC)):this.nodes.forEach(Wx),this.clearAllSnapshots();const h=Yn.now();Pn.delta=ta(0,1e3/60,h-Pn.timestamp),Pn.timestamp=h,Pn.isProcessing=!0,rd.update.process(Pn),rd.preRender.process(Pn),rd.render.process(Pn),Pn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Vm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(aC),this.sharedNodes.forEach(cC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ze.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ze.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Zn(this.snapshot.measuredBox.x)&&!Zn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=vn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(h=!1),h&&this.instance){const d=s(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!CM(this.projectionDelta),d=this.getTransformTemplate(),p=d?d(this.latestValues,""):void 0,g=p!==this.prevTransformTemplateValue;u&&this.instance&&(h||Ys(this.latestValues)||g)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const h=this.measurePageBox();let d=this.removeElementScroll(h);return u&&(d=this.removeTransform(d)),dC(d),{animationId:this.root.animationId,measuredBox:h,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:u}=this.options;if(!u)return vn();const h=u.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(pC))){const{scroll:g}=this.root;g&&(Qr(h.x,g.offset.x),Qr(h.y,g.offset.y))}return h}removeElementScroll(u){var d;const h=vn();if(Pi(h,u),(d=this.scroll)!=null&&d.wasRoot)return h;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:v,options:_}=g;g!==this.root&&v&&_.layoutScroll&&(v.wasRoot&&Pi(h,u),Qr(h.x,v.offset.x),Qr(h.y,v.offset.y))}return h}applyTransform(u,h=!1){const d=vn();Pi(d,u);for(let p=0;p<this.path.length;p++){const g=this.path[p];!h&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Jr(d,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Ys(g.latestValues)&&Jr(d,g.latestValues)}return Ys(this.latestValues)&&Jr(d,this.latestValues),d}removeTransform(u){const h=vn();Pi(h,u);for(let d=0;d<this.path.length;d++){const p=this.path[d];if(!p.instance||!Ys(p.latestValues))continue;mp(p.latestValues)&&p.updateSnapshot();const g=vn(),v=p.measurePageBox();Pi(g,v),Bx(h,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,g)}return Ys(this.latestValues)&&Bx(h,this.latestValues),h}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var y;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==h;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!this.layout||!(g||v))return;this.resolvedRelativeTargetAt=Pn.timestamp;const _=this.getClosestProjectingParent();_&&this.linkedParentVersion!==_.layoutVersion&&!_.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(_&&_.layout?this.createRelativeTarget(_,this.layout.layoutBox,_.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=vn(),this.targetWithTransforms=vn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Mw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Pi(this.target,this.layout.layoutBox),uM(this.target,this.targetDelta)):Pi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?this.createRelativeTarget(_,this.target,_.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||mp(this.parent.latestValues)||cM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,h,d){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vn(),this.relativeTargetOrigin=vn(),Vu(this.relativeTargetOrigin,h,d),Pi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var b;const u=this.getLead(),h=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(d=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Pn.timestamp&&(d=!1),d)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;Pi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;PR(this.layoutCorrected,this.treeScale,this.path,h),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=vn());const{target:y}=u;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ox(this.prevProjectionDelta.x,this.projectionDelta.x),Ox(this.prevProjectionDelta.y,this.projectionDelta.y)),Dl(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!kx(this.projectionDelta.x,this.prevProjectionDelta.x)||!kx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=$r(),this.projectionDelta=$r(),this.projectionDeltaWithTransform=$r()}setAnimationOrigin(u,h=!1){const d=this.snapshot,p=d?d.latestValues:{},g={...this.latestValues},v=$r();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const _=vn(),y=d?d.source:void 0,b=this.layout?this.layout.source:void 0,A=y!==b,S=this.getStack(),x=!S||S.members.length<=1,R=!!(A&&!x&&this.options.crossfade===!0&&!this.path.some(fC));this.animationProgress=0;let w;this.mixTargetDelta=L=>{const D=L/1e3;qx(v.x,u.x,D),qx(v.y,u.y,D),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Vu(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),uC(this.relativeTarget,this.relativeTargetOrigin,_,D),w&&Zw(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=vn()),Pi(w,this.relativeTarget)),A&&(this.animationValues=g,kw(g,p,this.latestValues,D,R,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var h,d,p;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(p=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||p.stop(),this.pendingAnimation&&(vs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ze.update(()=>{wu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=io(0)),this.currentAnimation=Bw(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Jw),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:h,target:d,layout:p,latestValues:g}=u;if(!(!h||!d||!p)){if(this!==u&&this.layout&&p&&LM(this.options.animationType,this.layout.layoutBox,p.layoutBox)){d=this.target||vn();const v=Zn(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+v;const _=Zn(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+_}Pi(h,d),Jr(h,g),Dl(this.projectionDeltaWithTransform,this.layoutCorrected,h,g)}}registerSharedNode(u,h){this.sharedNodes.has(u)||this.sharedNodes.set(u,new Kw),this.sharedNodes.get(u).add(h);const p=h.options.initialPromotionConfig;h.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(h):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var h;const{layoutId:u}=this.options;return u?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:u}=this.options;return u?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:h,preserveFollowOpacity:d}={}){const p=this.getStack();p&&p.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let h=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(h=!0),!h)return;const p={};d.z&&xd("z",u,p,this.animationValues);for(let g=0;g<_d.length;g++)xd(`rotate${_d[g]}`,u,p,this.animationValues),xd(`skew${_d[g]}`,u,p,this.animationValues);u.render();for(const g in p)u.setStaticValue(g,p[g]),this.animationValues&&(this.animationValues[g]=p[g]);u.scheduleRender()}applyProjectionStyles(u,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Ru(h==null?void 0:h.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Ru(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Ys(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=p.animationValues||p.latestValues;this.applyTransformsToTarget();let v=Qw(this.projectionDeltaWithTransform,this.treeScale,g);d&&(v=d(g,v)),u.transform=v;const{x:_,y}=this.projectionDelta;u.transformOrigin=`${_.origin*100}% ${y.origin*100}% 0`,p.animationValues?u.opacity=p===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=p===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const b in pp){if(g[b]===void 0)continue;const{correct:A,applyTo:S,isCSSVariable:x}=pp[b],R=v==="none"?g[b]:A(g[b],p);if(S){const w=S.length;for(let L=0;L<w;L++)u[S[L]]=R}else x?this.options.visualElement.renderState.vars[b]=R:u[b]=R}this.options.layoutId&&(u.pointerEvents=p===this?Ru(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var h;return(h=u.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Xx),this.root.sharedNodes.clear()}}}function tC(i){i.updateLayout()}function eC(i){var n;const t=((n=i.resumeFrom)==null?void 0:n.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&t&&i.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:o}=i.layout,{animationType:c}=i.options,u=t.source!==i.layout.source;c==="size"?bi(v=>{const _=u?t.measuredBox[v]:t.layoutBox[v],y=Zn(_);_.min=s[v].min,_.max=_.min+y}):LM(c,t.layoutBox,s)&&bi(v=>{const _=u?t.measuredBox[v]:t.layoutBox[v],y=Zn(s[v]);_.max=_.min+y,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[v].max=i.relativeTarget[v].min+y)});const h=$r();Dl(h,s,t.layoutBox);const d=$r();u?Dl(d,i.applyTransform(o,!0),t.measuredBox):Dl(d,s,t.layoutBox);const p=!CM(h);let g=!1;if(!i.resumeFrom){const v=i.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:_,layout:y}=v;if(_&&y){const b=vn();Vu(b,t.layoutBox,_.layoutBox);const A=vn();Vu(A,s,y.layoutBox),DM(b,A)||(g=!0),v.options.layoutRoot&&(i.relativeTarget=A,i.relativeTargetOrigin=b,i.relativeParent=v)}}}i.notifyListeners("didUpdate",{layout:s,snapshot:t,delta:d,layoutDelta:h,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(i.isLead()){const{onExitComplete:s}=i.options;s&&s()}i.options.transition=void 0}function nC(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function iC(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function aC(i){i.clearSnapshot()}function Xx(i){i.clearMeasurements()}function Wx(i){i.isLayoutDirty=!1}function sC(i){const{visualElement:t}=i.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),i.resetTransform()}function jx(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function rC(i){i.resolveTargetDelta()}function oC(i){i.calcProjection()}function lC(i){i.resetSkewAndRotation()}function cC(i){i.removeLeadSnapshot()}function qx(i,t,n){i.translate=Je(t.translate,0,n),i.scale=Je(t.scale,1,n),i.origin=t.origin,i.originPoint=t.originPoint}function Yx(i,t,n,s){i.min=Je(t.min,n.min,s),i.max=Je(t.max,n.max,s)}function uC(i,t,n,s){Yx(i.x,t.x,n.x,s),Yx(i.y,t.y,n.y,s)}function fC(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const hC={duration:.45,ease:[.4,0,.1,1]},Zx=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),Kx=Zx("applewebkit/")&&!Zx("chrome/")?Math.round:Ri;function Qx(i){i.min=Kx(i.min),i.max=Kx(i.max)}function dC(i){Qx(i.x),Qx(i.y)}function LM(i,t,n){return i==="position"||i==="preserve-aspect"&&!Sw(Gx(t),Gx(n),.2)}function pC(i){var t;return i!==i.root&&((t=i.scroll)==null?void 0:t.wasRoot)}const mC=NM({attachResizeListener:(i,t)=>Ol(i,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),yd={current:void 0},PM=NM({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!yd.current){const i=new mC({});i.mount(window),i.setOptions({layoutScroll:!0}),yd.current=i}return yd.current},resetTransform:(i,t)=>{i.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),gC={pan:{Feature:Fw},drag:{Feature:Ow,ProjectionNode:PM,MeasureLayout:AM}};function Jx(i,t,n){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,c=s[o];c&&Ze.postRender(()=>c(t,kl(t)))}class vC extends ys{mount(){const{current:t}=this.node;t&&(this.unmount=WA(t,(n,s)=>(Jx(this.node,s,"Start"),o=>Jx(this.node,o,"End"))))}unmount(){}}class _C extends ys{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vl(Ol(this.node.current,"focus",()=>this.onFocus()),Ol(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function $x(i,t,n){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),c=s[o];c&&Ze.postRender(()=>c(t,kl(t)))}class xC extends ys{mount(){const{current:t}=this.node;t&&(this.unmount=YA(t,(n,s)=>($x(this.node,s,"Start"),(o,{success:c})=>$x(this.node,o,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Mp=new WeakMap,Sd=new WeakMap,yC=i=>{const t=Mp.get(i.target);t&&t(i)},SC=i=>{i.forEach(yC)};function MC({root:i,...t}){const n=i||document;Sd.has(n)||Sd.set(n,{});const s=Sd.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(SC,{root:i,...t})),s[o]}function bC(i,t,n){const s=MC(t);return Mp.set(i,n),s.observe(i),()=>{Mp.delete(i),s.unobserve(i)}}const EC={some:0,all:1};class TC extends ys{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:c}=t,u={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:EC[o]},h=d=>{const{isIntersecting:p}=d;if(this.isInView===p||(this.isInView=p,c&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),_=p?g:v;_&&_(d)};return bC(this.node.current,u,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(AC(t,n))&&this.startObserver()}unmount(){}}function AC({viewport:i={}},{viewport:t={}}={}){return n=>i[n]!==t[n]}const RC={inView:{Feature:TC},tap:{Feature:xC},focus:{Feature:_C},hover:{Feature:vC}},wC={layout:{ProjectionNode:PM,MeasureLayout:AM}},CC={...mw,...RC,...gC,...wC},_e=UR(CC,XR);function DC({title:i,description:t,image:n,tags:s,demoUrl:o,githubUrl:c,duration:u}){return Z.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full flex flex-col border border-blue-500/20",children:[Z.jsxs("div",{className:"aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/30 relative",children:[Z.jsx("img",{src:n,alt:i,className:"w-full h-full object-cover hover:scale-110 transition-transform duration-500"}),u&&Z.jsx("div",{className:"absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-blue-400/30",children:u})]}),Z.jsxs("div",{className:"p-6 flex-1 flex flex-col",children:[Z.jsx("h3",{className:"text-xl mb-3 text-gray-100",children:i}),Z.jsx("p",{className:"text-gray-400 mb-4 text-sm leading-relaxed flex-1",children:t}),Z.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.map((h,d)=>Z.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30",children:h},d))}),(o||c)&&Z.jsxs("div",{className:"flex gap-3",children:[o&&Z.jsxs("a",{href:o,className:"flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-sm",children:[Z.jsx(zT,{className:"w-4 h-4"}),"View Demo"]}),c&&Z.jsxs("a",{href:c,className:"flex items-center gap-2 px-4 py-2 border-2 border-blue-500/30 text-blue-400 rounded-lg hover:border-blue-400 hover:bg-blue-500/10 transition-all text-sm",children:[Z.jsx(HT,{className:"w-4 h-4"}),"GitHub"]})]})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qm="182",UC=0,ty=1,NC=2,Cu=1,LC=2,Tl=3,xs=0,ei=1,wa=2,Ua=0,eo=1,bp=2,ey=3,ny=4,PC=5,Ks=100,OC=101,FC=102,IC=103,BC=104,zC=200,VC=201,HC=202,GC=203,Ep=204,Tp=205,kC=206,XC=207,WC=208,jC=209,qC=210,YC=211,ZC=212,KC=213,QC=214,Ap=0,Rp=1,wp=2,so=3,Cp=4,Dp=5,Up=6,Np=7,Jm=0,JC=1,$C=2,Ji=0,OM=1,FM=2,IM=3,BM=4,zM=5,VM=6,HM=7,GM=300,ir=301,ro=302,Lp=303,Pp=304,qu=306,Op=1e3,Ca=1001,Fp=1002,On=1003,t2=1004,nu=1005,kn=1006,Md=1007,tr=1008,ui=1009,kM=1010,XM=1011,Fl=1012,$m=1013,ea=1014,Zi=1015,Pa=1016,tg=1017,eg=1018,Il=1020,WM=35902,jM=35899,qM=1021,YM=1022,Vi=1023,Oa=1026,er=1027,ZM=1028,ng=1029,oo=1030,ig=1031,ag=1033,Du=33776,Uu=33777,Nu=33778,Lu=33779,Ip=35840,Bp=35841,zp=35842,Vp=35843,Hp=36196,Gp=37492,kp=37496,Xp=37488,Wp=37489,jp=37490,qp=37491,Yp=37808,Zp=37809,Kp=37810,Qp=37811,Jp=37812,$p=37813,tm=37814,em=37815,nm=37816,im=37817,am=37818,sm=37819,rm=37820,om=37821,lm=36492,cm=36494,um=36495,fm=36283,hm=36284,dm=36285,pm=36286,e2=3200,KM=0,n2=1,ps="",Ei="srgb",lo="srgb-linear",Hu="linear",Be="srgb",Fr=7680,iy=519,i2=512,a2=513,s2=514,sg=515,r2=516,o2=517,rg=518,l2=519,ay=35044,sy="300 es",Ki=2e3,Gu=2001;function QM(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ku(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function c2(){const i=ku("canvas");return i.style.display="block",i}const ry={};function oy(...i){const t="THREE."+i.shift();console.log(t,...i)}function le(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Ue(...i){const t="THREE."+i.shift();console.error(t,...i)}function Bl(...i){const t=i.join(" ");t in ry||(ry[t]=!0,le(...i))}function u2(i,t,n){return new Promise(function(s,o){function c(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class po{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=Math.PI/180,mm=180/Math.PI;function Xl(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[n&63|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]).toLowerCase()}function ye(i,t,n){return Math.max(t,Math.min(n,i))}function f2(i,t){return(i%t+t)%t}function Ed(i,t,n){return(1-n)*i+n*t}function gl(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,n=0){Ee.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*s-u*o+t.x,this.y=c*o+u*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wl{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,u,h){let d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3],_=c[u+0],y=c[u+1],b=c[u+2],A=c[u+3];if(h<=0){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(h>=1){t[n+0]=_,t[n+1]=y,t[n+2]=b,t[n+3]=A;return}if(v!==A||d!==_||p!==y||g!==b){let S=d*_+p*y+g*b+v*A;S<0&&(_=-_,y=-y,b=-b,A=-A,S=-S);let x=1-h;if(S<.9995){const R=Math.acos(S),w=Math.sin(R);x=Math.sin(x*R)/w,h=Math.sin(h*R)/w,d=d*x+_*h,p=p*x+y*h,g=g*x+b*h,v=v*x+A*h}else{d=d*x+_*h,p=p*x+y*h,g=g*x+b*h,v=v*x+A*h;const R=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=R,p*=R,g*=R,v*=R}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,o,c,u){const h=s[o],d=s[o+1],p=s[o+2],g=s[o+3],v=c[u],_=c[u+1],y=c[u+2],b=c[u+3];return t[n]=h*b+g*v+d*y-p*_,t[n+1]=d*b+g*_+p*v-h*y,t[n+2]=p*b+g*y+h*_-d*v,t[n+3]=g*b-h*v-d*_-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,d=Math.sin,p=h(s/2),g=h(o/2),v=h(c/2),_=d(s/2),y=d(o/2),b=d(c/2);switch(u){case"XYZ":this._x=_*g*v+p*y*b,this._y=p*y*v-_*g*b,this._z=p*g*b+_*y*v,this._w=p*g*v-_*y*b;break;case"YXZ":this._x=_*g*v+p*y*b,this._y=p*y*v-_*g*b,this._z=p*g*b-_*y*v,this._w=p*g*v+_*y*b;break;case"ZXY":this._x=_*g*v-p*y*b,this._y=p*y*v+_*g*b,this._z=p*g*b+_*y*v,this._w=p*g*v-_*y*b;break;case"ZYX":this._x=_*g*v-p*y*b,this._y=p*y*v+_*g*b,this._z=p*g*b-_*y*v,this._w=p*g*v+_*y*b;break;case"YZX":this._x=_*g*v+p*y*b,this._y=p*y*v+_*g*b,this._z=p*g*b-_*y*v,this._w=p*g*v-_*y*b;break;case"XZY":this._x=_*g*v-p*y*b,this._y=p*y*v-_*g*b,this._z=p*g*b+_*y*v,this._w=p*g*v+_*y*b;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],v=n[10],_=s+h+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-d)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(s>h&&s>v){const y=2*Math.sqrt(1+s-h-v);this._w=(g-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-s-v);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+v-s-h);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,u=t._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=s*g+u*h+o*p-c*d,this._y=o*g+u*d+c*h-s*p,this._z=c*g+u*p+s*d-o*h,this._w=u*g-s*h-o*d-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(s=-s,o=-o,c=-c,u=-u,h=-h);let d=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);d=Math.sin(d*p)/g,n=Math.sin(n*p)/g,this._x=this._x*d+s*n,this._y=this._y*d+o*n,this._z=this._z*d+c*n,this._w=this._w*d+u*n,this._onChangeCallback()}else this._x=this._x*d+s*n,this._y=this._y*d+o*n,this._z=this._z*d+c*n,this._w=this._w*d+u*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,n=0,s=0){tt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ly.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ly.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,u=t.y,h=t.z,d=t.w,p=2*(u*o-h*s),g=2*(h*n-c*o),v=2*(c*s-u*n);return this.x=n+d*p+u*v-h*g,this.y=s+d*g+h*p-c*v,this.z=o+d*v+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,u=n.x,h=n.y,d=n.z;return this.x=o*d-c*h,this.y=c*u-s*d,this.z=s*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Td.copy(this).projectOnVector(t),this.sub(Td)}reflect(t){return this.sub(Td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Td=new tt,ly=new Wl;class de{constructor(t,n,s,o,c,u,h,d,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,h,d,p)}set(t,n,s,o,c,u,h,d,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],h=s[3],d=s[6],p=s[1],g=s[4],v=s[7],_=s[2],y=s[5],b=s[8],A=o[0],S=o[3],x=o[6],R=o[1],w=o[4],L=o[7],D=o[2],O=o[5],I=o[8];return c[0]=u*A+h*R+d*D,c[3]=u*S+h*w+d*O,c[6]=u*x+h*L+d*I,c[1]=p*A+g*R+v*D,c[4]=p*S+g*w+v*O,c[7]=p*x+g*L+v*I,c[2]=_*A+y*R+b*D,c[5]=_*S+y*w+b*O,c[8]=_*x+y*L+b*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return n*u*g-n*h*p-s*c*g+s*h*d+o*c*p-o*u*d}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=g*u-h*p,_=h*d-g*c,y=p*c-u*d,b=n*v+s*_+o*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=v*A,t[1]=(o*p-g*s)*A,t[2]=(h*s-o*u)*A,t[3]=_*A,t[4]=(g*n-o*d)*A,t[5]=(o*c-h*n)*A,t[6]=y*A,t[7]=(s*d-p*n)*A,t[8]=(u*n-s*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(s*d,s*p,-s*(d*u+p*h)+u+t,-o*p,o*d,-o*(-p*u+d*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ad.makeScale(t,n)),this}rotate(t){return this.premultiply(Ad.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ad.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new de,cy=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uy=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h2(){const i={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Be&&(o.r=Na(o.r),o.g=Na(o.g),o.b=Na(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Be&&(o.r=no(o.r),o.g=no(o.g),o.b=no(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ps?Hu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Bl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Bl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[lo]:{primaries:t,whitePoint:s,transfer:Hu,toXYZ:cy,fromXYZ:uy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:cy,fromXYZ:uy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),i}const Te=h2();function Na(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function no(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ir;class d2{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ir===void 0&&(Ir=ku("canvas")),Ir.width=t.width,Ir.height=t.height;const o=Ir.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Ir}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ku("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Na(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Na(n[s]/255)*255):n[s]=Na(n[s]);return{data:n,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let p2=0;class og{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p2++}),this.uuid=Xl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Rd(o[u].image)):c.push(Rd(o[u]))}else c=Rd(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function Rd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?d2.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let m2=0;const wd=new tt;class Kn extends po{constructor(t=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,s=Ca,o=Ca,c=kn,u=tr,h=Vi,d=ui,p=Kn.DEFAULT_ANISOTROPY,g=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m2++}),this.uuid=Xl(),this.name="",this.source=new og(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){le(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==GM)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Op:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case Fp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Op:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case Fp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=GM;Kn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,n=0,s=0,o=1){sn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const d=t.elements,p=d[0],g=d[4],v=d[8],_=d[1],y=d[5],b=d[9],A=d[2],S=d[6],x=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(b+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(p+1)/2,L=(y+1)/2,D=(x+1)/2,O=(g+_)/4,I=(v+A)/4,z=(b+S)/4;return w>L&&w>D?w<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(w),o=O/s,c=I/s):L>D?L<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),s=O/o,c=z/o):D<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(D),s=I/c,o=z/c),this.set(s,o,c,n),this}let R=Math.sqrt((S-b)*(S-b)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(S-b)/R,this.y=(v-A)/R,this.z=(_-g)/R,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g2 extends po{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new sn(0,0,t,n),this.scissorTest=!1,this.viewport=new sn(0,0,t,n);const o={width:t,height:n,depth:s.depth},c=new Kn(o);this.textures=[];const u=s.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new og(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends g2{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class JM extends Kn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class v2 extends Kn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl{constructor(t=new tt(1/0,1/0,1/0),n=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Oi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Oi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Oi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Oi):Oi.fromBufferAttribute(c,u),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),iu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),iu.copy(s.boundingBox)),iu.applyMatrix4(t.matrixWorld),this.union(iu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vl),au.subVectors(this.max,vl),Br.subVectors(t.a,vl),zr.subVectors(t.b,vl),Vr.subVectors(t.c,vl),os.subVectors(zr,Br),ls.subVectors(Vr,zr),Gs.subVectors(Br,Vr);let n=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Gs.z,Gs.y,os.z,0,-os.x,ls.z,0,-ls.x,Gs.z,0,-Gs.x,-os.y,os.x,0,-ls.y,ls.x,0,-Gs.y,Gs.x,0];return!Cd(n,Br,zr,Vr,au)||(n=[1,0,0,0,1,0,0,0,1],!Cd(n,Br,zr,Vr,au))?!1:(su.crossVectors(os,ls),n=[su.x,su.y,su.z],Cd(n,Br,zr,Vr,au))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Oi=new tt,iu=new jl,Br=new tt,zr=new tt,Vr=new tt,os=new tt,ls=new tt,Gs=new tt,vl=new tt,au=new tt,su=new tt,ks=new tt;function Cd(i,t,n,s,o){for(let c=0,u=i.length-3;c<=u;c+=3){ks.fromArray(i,c);const h=o.x*Math.abs(ks.x)+o.y*Math.abs(ks.y)+o.z*Math.abs(ks.z),d=t.dot(ks),p=n.dot(ks),g=s.dot(ks);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const _2=new jl,_l=new tt,Dd=new tt;class Yu{constructor(t=new tt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):_2.setFromPoints(t).getCenter(s);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_l.subVectors(t,this.center);const n=_l.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(_l,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_l.copy(t.center).add(Dd)),this.expandByPoint(_l.copy(t.center).sub(Dd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ea=new tt,Ud=new tt,ru=new tt,cs=new tt,Nd=new tt,ou=new tt,Ld=new tt;class $M{constructor(t=new tt,n=new tt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ea)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ea.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ea.copy(this.origin).addScaledVector(this.direction,n),Ea.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){Ud.copy(t).add(n).multiplyScalar(.5),ru.copy(n).sub(t).normalize(),cs.copy(this.origin).sub(Ud);const c=t.distanceTo(n)*.5,u=-this.direction.dot(ru),h=cs.dot(this.direction),d=-cs.dot(ru),p=cs.lengthSq(),g=Math.abs(1-u*u);let v,_,y,b;if(g>0)if(v=u*d-h,_=u*h-d,b=c*g,v>=0)if(_>=-b)if(_<=b){const A=1/g;v*=A,_*=A,y=v*(v+u*_+2*h)+_*(u*v+_+2*d)+p}else _=c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*d)+p;else _=-c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*d)+p;else _<=-b?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-d),c),y=-v*v+_*(_+2*d)+p):_<=b?(v=0,_=Math.min(Math.max(-c,-d),c),y=_*(_+2*d)+p):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-d),c),y=-v*v+_*(_+2*d)+p);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*d)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ud).addScaledVector(ru,_),y}intersectSphere(t,n){Ea.subVectors(t.center,this.origin);const s=Ea.dot(this.direction),o=Ea.dot(Ea)-s*s,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=s-u,d=s+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,o=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,o=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),s>d||h>o)||((h>s||s!==s)&&(s=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,Ea)!==null}intersectTriangle(t,n,s,o,c){Nd.subVectors(n,t),ou.subVectors(s,t),Ld.crossVectors(Nd,ou);let u=this.direction.dot(Ld),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;cs.subVectors(this.origin,t);const d=h*this.direction.dot(ou.crossVectors(cs,ou));if(d<0)return null;const p=h*this.direction.dot(Nd.cross(cs));if(p<0||d+p>u)return null;const g=-h*cs.dot(Ld);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,n,s,o,c,u,h,d,p,g,v,_,y,b,A,S){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,u,h,d,p,g,v,_,y,b,A,S)}set(t,n,s,o,c,u,h,d,p,g,v,_,y,b,A,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=d,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=b,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/Hr.setFromMatrixColumn(t,0).length(),c=1/Hr.setFromMatrixColumn(t,1).length(),u=1/Hr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,u=Math.cos(s),h=Math.sin(s),d=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,y=u*v,b=h*g,A=h*v;n[0]=d*g,n[4]=-d*v,n[8]=p,n[1]=y+b*p,n[5]=_-A*p,n[9]=-h*d,n[2]=A-_*p,n[6]=b+y*p,n[10]=u*d}else if(t.order==="YXZ"){const _=d*g,y=d*v,b=p*g,A=p*v;n[0]=_+A*h,n[4]=b*h-y,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=y*h-b,n[6]=A+_*h,n[10]=u*d}else if(t.order==="ZXY"){const _=d*g,y=d*v,b=p*g,A=p*v;n[0]=_-A*h,n[4]=-u*v,n[8]=b+y*h,n[1]=y+b*h,n[5]=u*g,n[9]=A-_*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(t.order==="ZYX"){const _=u*g,y=u*v,b=h*g,A=h*v;n[0]=d*g,n[4]=b*p-y,n[8]=_*p+A,n[1]=d*v,n[5]=A*p+_,n[9]=y*p-b,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(t.order==="YZX"){const _=u*d,y=u*p,b=h*d,A=h*p;n[0]=d*g,n[4]=A-_*v,n[8]=b*v+y,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=y*v+b,n[10]=_-A*v}else if(t.order==="XZY"){const _=u*d,y=u*p,b=h*d,A=h*p;n[0]=d*g,n[4]=-v,n[8]=p*g,n[1]=_*v+A,n[5]=u*g,n[9]=y*v-b,n[2]=b*v-y,n[6]=h*g,n[10]=A*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(x2,t,y2)}lookAt(t,n,s){const o=this.elements;return li.subVectors(t,n),li.lengthSq()===0&&(li.z=1),li.normalize(),us.crossVectors(s,li),us.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),us.crossVectors(s,li)),us.normalize(),lu.crossVectors(li,us),o[0]=us.x,o[4]=lu.x,o[8]=li.x,o[1]=us.y,o[5]=lu.y,o[9]=li.y,o[2]=us.z,o[6]=lu.z,o[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,u=s[0],h=s[4],d=s[8],p=s[12],g=s[1],v=s[5],_=s[9],y=s[13],b=s[2],A=s[6],S=s[10],x=s[14],R=s[3],w=s[7],L=s[11],D=s[15],O=o[0],I=o[4],z=o[8],T=o[12],C=o[1],V=o[5],st=o[9],at=o[13],ft=o[2],lt=o[6],k=o[10],G=o[14],$=o[3],_t=o[7],P=o[11],J=o[15];return c[0]=u*O+h*C+d*ft+p*$,c[4]=u*I+h*V+d*lt+p*_t,c[8]=u*z+h*st+d*k+p*P,c[12]=u*T+h*at+d*G+p*J,c[1]=g*O+v*C+_*ft+y*$,c[5]=g*I+v*V+_*lt+y*_t,c[9]=g*z+v*st+_*k+y*P,c[13]=g*T+v*at+_*G+y*J,c[2]=b*O+A*C+S*ft+x*$,c[6]=b*I+A*V+S*lt+x*_t,c[10]=b*z+A*st+S*k+x*P,c[14]=b*T+A*at+S*G+x*J,c[3]=R*O+w*C+L*ft+D*$,c[7]=R*I+w*V+L*lt+D*_t,c[11]=R*z+w*st+L*k+D*P,c[15]=R*T+w*at+L*G+D*J,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],u=t[1],h=t[5],d=t[9],p=t[13],g=t[2],v=t[6],_=t[10],y=t[14],b=t[3],A=t[7],S=t[11],x=t[15],R=d*y-p*_,w=h*y-p*v,L=h*_-d*v,D=u*y-p*g,O=u*_-d*g,I=u*v-h*g;return n*(A*R-S*w+x*L)-s*(b*R-S*D+x*O)+o*(b*w-A*D+x*I)-c*(b*L-A*O+S*I)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],v=t[9],_=t[10],y=t[11],b=t[12],A=t[13],S=t[14],x=t[15],R=v*S*p-A*_*p+A*d*y-h*S*y-v*d*x+h*_*x,w=b*_*p-g*S*p-b*d*y+u*S*y+g*d*x-u*_*x,L=g*A*p-b*v*p+b*h*y-u*A*y-g*h*x+u*v*x,D=b*v*d-g*A*d-b*h*_+u*A*_+g*h*S-u*v*S,O=n*R+s*w+o*L+c*D;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return t[0]=R*I,t[1]=(A*_*c-v*S*c-A*o*y+s*S*y+v*o*x-s*_*x)*I,t[2]=(h*S*c-A*d*c+A*o*p-s*S*p-h*o*x+s*d*x)*I,t[3]=(v*d*c-h*_*c-v*o*p+s*_*p+h*o*y-s*d*y)*I,t[4]=w*I,t[5]=(g*S*c-b*_*c+b*o*y-n*S*y-g*o*x+n*_*x)*I,t[6]=(b*d*c-u*S*c-b*o*p+n*S*p+u*o*x-n*d*x)*I,t[7]=(u*_*c-g*d*c+g*o*p-n*_*p-u*o*y+n*d*y)*I,t[8]=L*I,t[9]=(b*v*c-g*A*c-b*s*y+n*A*y+g*s*x-n*v*x)*I,t[10]=(u*A*c-b*h*c+b*s*p-n*A*p-u*s*x+n*h*x)*I,t[11]=(g*h*c-u*v*c-g*s*p+n*v*p+u*s*y-n*h*y)*I,t[12]=D*I,t[13]=(g*A*o-b*v*o+b*s*_-n*A*_-g*s*S+n*v*S)*I,t[14]=(b*h*o-u*A*o-b*s*d+n*A*d+u*s*S-n*h*S)*I,t[15]=(u*v*o-g*h*o+g*s*d-n*v*d-u*s*_+n*h*_)*I,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=t.x,h=t.y,d=t.z,p=c*u,g=c*h;return this.set(p*u+s,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+s,g*d-o*u,0,p*d-o*h,g*d+o*u,c*d*d+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,u){return this.set(1,s,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,u=n._y,h=n._z,d=n._w,p=c+c,g=u+u,v=h+h,_=c*p,y=c*g,b=c*v,A=u*g,S=u*v,x=h*v,R=d*p,w=d*g,L=d*v,D=s.x,O=s.y,I=s.z;return o[0]=(1-(A+x))*D,o[1]=(y+L)*D,o[2]=(b-w)*D,o[3]=0,o[4]=(y-L)*O,o[5]=(1-(_+x))*O,o[6]=(S+R)*O,o[7]=0,o[8]=(b+w)*I,o[9]=(S-R)*I,o[10]=(1-(_+A))*I,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=Hr.set(o[0],o[1],o[2]).length();const u=Hr.set(o[4],o[5],o[6]).length(),h=Hr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Fi.copy(this);const p=1/c,g=1/u,v=1/h;return Fi.elements[0]*=p,Fi.elements[1]*=p,Fi.elements[2]*=p,Fi.elements[4]*=g,Fi.elements[5]*=g,Fi.elements[6]*=g,Fi.elements[8]*=v,Fi.elements[9]*=v,Fi.elements[10]*=v,n.setFromRotationMatrix(Fi),s.x=c,s.y=u,s.z=h,this}makePerspective(t,n,s,o,c,u,h=Ki,d=!1){const p=this.elements,g=2*c/(n-t),v=2*c/(s-o),_=(n+t)/(n-t),y=(s+o)/(s-o);let b,A;if(d)b=c/(u-c),A=u*c/(u-c);else if(h===Ki)b=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===Gu)b=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,o,c,u,h=Ki,d=!1){const p=this.elements,g=2/(n-t),v=2/(s-o),_=-(n+t)/(n-t),y=-(s+o)/(s-o);let b,A;if(d)b=1/(u-c),A=u/(u-c);else if(h===Ki)b=-2/(u-c),A=-(u+c)/(u-c);else if(h===Gu)b=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Hr=new tt,Fi=new $e,x2=new tt(0,0,0),y2=new tt(1,1,1),us=new tt,lu=new tt,li=new tt,fy=new $e,hy=new Wl;class na{constructor(t=0,n=0,s=0,o=na.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],d=o[1],p=o[5],g=o[9],v=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return fy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fy,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return hy.setFromEuler(this),this.setFromQuaternion(hy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class tb{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let S2=0;const dy=new tt,Gr=new Wl,Ta=new $e,cu=new tt,xl=new tt,M2=new tt,b2=new Wl,py=new tt(1,0,0),my=new tt(0,1,0),gy=new tt(0,0,1),vy={type:"added"},E2={type:"removed"},kr={type:"childadded",child:null},Pd={type:"childremoved",child:null};class Fn extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S2++}),this.uuid=Xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new tt,n=new na,s=new Wl,o=new tt(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $e},normalMatrix:{value:new de}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Gr.setFromAxisAngle(t,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(t,n){return Gr.setFromAxisAngle(t,n),this.quaternion.premultiply(Gr),this}rotateX(t){return this.rotateOnAxis(py,t)}rotateY(t){return this.rotateOnAxis(my,t)}rotateZ(t){return this.rotateOnAxis(gy,t)}translateOnAxis(t,n){return dy.copy(t).applyQuaternion(this.quaternion),this.position.add(dy.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(py,t)}translateY(t){return this.translateOnAxis(my,t)}translateZ(t){return this.translateOnAxis(gy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?cu.copy(t):cu.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(xl,cu,this.up):Ta.lookAt(cu,xl,this.up),this.quaternion.setFromRotationMatrix(Ta),o&&(Ta.extractRotation(o.matrixWorld),Gr.setFromRotationMatrix(Ta),this.quaternion.premultiply(Gr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vy),kr.child=t,this.dispatchEvent(kr),kr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(E2),Pd.child=t,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vy),kr.child=t,this.dispatchEvent(kr),kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,t,M2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,b2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];c(t.shapes,v)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(t.materials,this.material[d]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(c(t.animations,d))}}if(n){const h=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),y=u(t.animations),b=u(t.nodes);h.length>0&&(s.geometries=h),d.length>0&&(s.materials=d),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=o,s;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new tt(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new tt,Aa=new tt,Od=new tt,Ra=new tt,Xr=new tt,Wr=new tt,_y=new tt,Fd=new tt,Id=new tt,Bd=new tt,zd=new sn,Vd=new sn,Hd=new sn;class zi{constructor(t=new tt,n=new tt,s=new tt){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Ii.subVectors(t,n),o.cross(Ii);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){Ii.subVectors(o,n),Aa.subVectors(s,n),Od.subVectors(t,n);const u=Ii.dot(Ii),h=Ii.dot(Aa),d=Ii.dot(Od),p=Aa.dot(Aa),g=Aa.dot(Od),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(p*d-h*g)*_,b=(u*g-h*d)*_;return c.set(1-y-b,b,y)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,n,s,o,c,u,h,d){return this.getBarycoord(t,n,s,o,Ra)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,Ra.x),d.addScaledVector(u,Ra.y),d.addScaledVector(h,Ra.z),d)}static getInterpolatedAttribute(t,n,s,o,c,u){return zd.setScalar(0),Vd.setScalar(0),Hd.setScalar(0),zd.fromBufferAttribute(t,n),Vd.fromBufferAttribute(t,s),Hd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(zd,c.x),u.addScaledVector(Vd,c.y),u.addScaledVector(Hd,c.z),u}static isFrontFacing(t,n,s,o){return Ii.subVectors(s,n),Aa.subVectors(t,n),Ii.cross(Aa).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Ii.cross(Aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return zi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return zi.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let u,h;Xr.subVectors(o,s),Wr.subVectors(c,s),Fd.subVectors(t,s);const d=Xr.dot(Fd),p=Wr.dot(Fd);if(d<=0&&p<=0)return n.copy(s);Id.subVectors(t,o);const g=Xr.dot(Id),v=Wr.dot(Id);if(g>=0&&v<=g)return n.copy(o);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(s).addScaledVector(Xr,u);Bd.subVectors(t,c);const y=Xr.dot(Bd),b=Wr.dot(Bd);if(b>=0&&y<=b)return n.copy(c);const A=y*p-d*b;if(A<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(s).addScaledVector(Wr,h);const S=g*b-y*v;if(S<=0&&v-g>=0&&y-b>=0)return _y.subVectors(c,o),h=(v-g)/(v-g+(y-b)),n.copy(o).addScaledVector(_y,h);const x=1/(S+A+_);return u=A*x,h=_*x,n.copy(s).addScaledVector(Xr,u).addScaledVector(Wr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},uu={h:0,s:0,l:0};function Gd(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class Ae{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Te.workingColorSpace){return this.r=t,this.g=n,this.b=s,Te.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Te.workingColorSpace){if(t=f2(t,1),n=ye(n,0,1),s=ye(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=Gd(u,c,t+1/3),this.g=Gd(u,c,t),this.b=Gd(u,c,t-1/3)}return Te.colorSpaceToWorking(this,o),this}setStyle(t,n=Ei){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:le("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ei){const s=eb[t.toLowerCase()];return s!==void 0?this.setHex(s,n):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return Te.workingToColorSpace(Hn.copy(this),t),Math.round(ye(Hn.r*255,0,255))*65536+Math.round(ye(Hn.g*255,0,255))*256+Math.round(ye(Hn.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Te.workingColorSpace){Te.workingToColorSpace(Hn.copy(this),n);const s=Hn.r,o=Hn.g,c=Hn.b,u=Math.max(s,o,c),h=Math.min(s,o,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const v=u-h;switch(p=g<=.5?v/(u+h):v/(2-u-h),u){case s:d=(o-c)/v+(o<c?6:0);break;case o:d=(c-s)/v+2;break;case c:d=(s-o)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=Te.workingColorSpace){return Te.workingToColorSpace(Hn.copy(this),n),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Ei){Te.workingToColorSpace(Hn.copy(this),t);const n=Hn.r,s=Hn.g,o=Hn.b;return t!==Ei?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+n,fs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(fs),t.getHSL(uu);const s=Ed(fs.h,uu.h,n),o=Ed(fs.s,uu.s,n),c=Ed(fs.l,uu.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ae;Ae.NAMES=eb;let T2=0;class mo extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T2++}),this.uuid=Xl(),this.name="",this.type="Material",this.blending=eo,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ep,this.blendDst=Tp,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){le(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(s.blending=this.blending),this.side!==xs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ep&&(s.blendSrc=this.blendSrc),this.blendDst!==Tp&&(s.blendDst=this.blendDst),this.blendEquation!==Ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iy&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nb extends mo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=Jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new tt,fu=new Ee;let A2=0;class Hi{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=ay,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)fu.fromBufferAttribute(this,n),fu.applyMatrix3(t),this.setXY(n,fu.x,fu.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=gl(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=ti(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=gl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=gl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=gl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=gl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),s=ti(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),s=ti(s,this.array),o=ti(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),s=ti(s,this.array),o=ti(o,this.array),c=ti(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ay&&(t.usage=this.usage),t}}class ib extends Hi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class ab extends Hi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class En extends Hi{constructor(t,n,s){super(new Float32Array(t),n,s)}}let R2=0;const Mi=new $e,kd=new Fn,jr=new tt,ci=new jl,yl=new jl,bn=new tt;class ni extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=Xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(QM(t)?ab:ib)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,n,s){return Mi.makeTranslation(t,n,s),this.applyMatrix4(Mi),this}scale(t,n,s){return Mi.makeScale(t,n,s),this.applyMatrix4(Mi),this}lookAt(t){return kd.lookAt(t),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new En(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];yl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ci.min,yl.min),ci.expandByPoint(bn),bn.addVectors(ci.max,yl.max),ci.expandByPoint(bn)):(ci.expandByPoint(yl.min),ci.expandByPoint(yl.max))}ci.getCenter(s);let o=0;for(let c=0,u=t.count;c<u;c++)bn.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(bn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)bn.fromBufferAttribute(h,p),d&&(jr.fromBufferAttribute(t,p),bn.add(jr)),o=Math.max(o,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let z=0;z<s.count;z++)h[z]=new tt,d[z]=new tt;const p=new tt,g=new tt,v=new tt,_=new Ee,y=new Ee,b=new Ee,A=new tt,S=new tt;function x(z,T,C){p.fromBufferAttribute(s,z),g.fromBufferAttribute(s,T),v.fromBufferAttribute(s,C),_.fromBufferAttribute(c,z),y.fromBufferAttribute(c,T),b.fromBufferAttribute(c,C),g.sub(p),v.sub(p),y.sub(_),b.sub(_);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(V),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(V),h[z].add(A),h[T].add(A),h[C].add(A),d[z].add(S),d[T].add(S),d[C].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let z=0,T=R.length;z<T;++z){const C=R[z],V=C.start,st=C.count;for(let at=V,ft=V+st;at<ft;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const w=new tt,L=new tt,D=new tt,O=new tt;function I(z){D.fromBufferAttribute(o,z),O.copy(D);const T=h[z];w.copy(T),w.sub(D.multiplyScalar(D.dot(T))).normalize(),L.crossVectors(O,T);const V=L.dot(d[z])<0?-1:1;u.setXYZW(z,w.x,w.y,w.z,V)}for(let z=0,T=R.length;z<T;++z){const C=R[z],V=C.start,st=C.count;for(let at=V,ft=V+st;at<ft;at+=3)I(t.getX(at+0)),I(t.getX(at+1)),I(t.getX(at+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const o=new tt,c=new tt,u=new tt,h=new tt,d=new tt,p=new tt,g=new tt,v=new tt;if(t)for(let _=0,y=t.count;_<y;_+=3){const b=t.getX(_+0),A=t.getX(_+1),S=t.getX(_+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(s,b),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),h.add(g),d.add(g),p.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(d.length*g);let y=0,b=0;for(let A=0,S=d.length;A<S;A++){h.isInterleavedBufferAttribute?y=d[A]*h.data.stride+h.offset:y=d[A]*g;for(let x=0;x<g;x++)_[b++]=p[y++]}return new Hi(_,g,v)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ni,s=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=t(d,s);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],y=t(_,s);d.push(y)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const d in s){const p=s[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(o[d]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xy=new $e,Xs=new $M,hu=new Yu,yy=new tt,du=new tt,pu=new tt,mu=new tt,Xd=new tt,gu=new tt,Sy=new tt,vu=new tt;class ia extends Fn{constructor(t=new ni,n=new nb){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){gu.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],v=c[d];g!==0&&(Xd.fromBufferAttribute(v,t),u?gu.addScaledVector(Xd,g):gu.addScaledVector(Xd.sub(n),g))}n.add(gu)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hu.copy(s.boundingSphere),hu.applyMatrix4(c),Xs.copy(t.ray).recast(t.near),!(hu.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(hu,yy)===null||Xs.origin.distanceToSquared(yy)>(t.far-t.near)**2))&&(xy.copy(c).invert(),Xs.copy(t.ray).applyMatrix4(xy),!(s.boundingBox!==null&&Xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Xs)))}_computeIntersections(t,n,s){let o;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,A=_.length;b<A;b++){const S=_[b],x=u[S.materialIndex],R=Math.max(S.start,y.start),w=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let L=R,D=w;L<D;L+=3){const O=h.getX(L),I=h.getX(L+1),z=h.getX(L+2);o=_u(this,x,t,s,p,g,v,O,I,z),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=b,x=A;S<x;S+=3){const R=h.getX(S),w=h.getX(S+1),L=h.getX(S+2);o=_u(this,u,t,s,p,g,v,R,w,L),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let b=0,A=_.length;b<A;b++){const S=_[b],x=u[S.materialIndex],R=Math.max(S.start,y.start),w=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let L=R,D=w;L<D;L+=3){const O=L,I=L+1,z=L+2;o=_u(this,x,t,s,p,g,v,O,I,z),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=b,x=A;S<x;S+=3){const R=S,w=S+1,L=S+2;o=_u(this,u,t,s,p,g,v,R,w,L),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function w2(i,t,n,s,o,c,u,h){let d;if(t.side===ei?d=s.intersectTriangle(u,c,o,!0,h):d=s.intersectTriangle(o,c,u,t.side===xs,h),d===null)return null;vu.copy(h),vu.applyMatrix4(i.matrixWorld);const p=n.ray.origin.distanceTo(vu);return p<n.near||p>n.far?null:{distance:p,point:vu.clone(),object:i}}function _u(i,t,n,s,o,c,u,h,d,p){i.getVertexPosition(h,du),i.getVertexPosition(d,pu),i.getVertexPosition(p,mu);const g=w2(i,t,n,s,du,pu,mu,Sy);if(g){const v=new tt;zi.getBarycoord(Sy,du,pu,mu,v),o&&(g.uv=zi.getInterpolatedAttribute(o,h,d,p,v,new Ee)),c&&(g.uv1=zi.getInterpolatedAttribute(c,h,d,p,v,new Ee)),u&&(g.normal=zi.getInterpolatedAttribute(u,h,d,p,v,new tt),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:d,c:p,normal:new tt,materialIndex:0};zi.getNormal(du,pu,mu,_.normal),g.face=_,g.barycoord=v}return g}class go extends ni{constructor(t=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],v=[];let _=0,y=0;b("z","y","x",-1,-1,s,n,t,u,c,0),b("z","y","x",1,-1,s,n,-t,u,c,1),b("x","z","y",1,1,t,s,n,o,u,2),b("x","z","y",1,-1,t,s,-n,o,u,3),b("x","y","z",1,-1,t,n,s,o,c,4),b("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(d),this.setAttribute("position",new En(p,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(v,2));function b(A,S,x,R,w,L,D,O,I,z,T){const C=L/I,V=D/z,st=L/2,at=D/2,ft=O/2,lt=I+1,k=z+1;let G=0,$=0;const _t=new tt;for(let P=0;P<k;P++){const J=P*V-at;for(let wt=0;wt<lt;wt++){const Et=wt*C-st;_t[A]=Et*R,_t[S]=J*w,_t[x]=ft,p.push(_t.x,_t.y,_t.z),_t[A]=0,_t[S]=0,_t[x]=O>0?1:-1,g.push(_t.x,_t.y,_t.z),v.push(wt/I),v.push(1-P/z),G+=1}}for(let P=0;P<z;P++)for(let J=0;J<I;J++){const wt=_+J+lt*P,Et=_+J+lt*(P+1),Rt=_+(J+1)+lt*(P+1),Yt=_+(J+1)+lt*P;d.push(wt,Et,Yt),d.push(Et,Rt,Yt),$+=6}h.addGroup(y,$,T),y+=$,_+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function co(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const o=i[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function qn(i){const t={};for(let n=0;n<i.length;n++){const s=co(i[n]);for(const o in s)t[o]=s[o]}return t}function C2(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function sb(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const D2={clone:co,merge:qn};var U2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends mo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U2,this.fragmentShader=N2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=co(t.uniforms),this.uniformsGroups=C2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class rb extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new tt,My=new Ee,by=new Ee;class Ti extends rb{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=mm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mm*2*Math.atan(Math.tan(bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,n){return this.getViewBounds(t,My,by),n.subVectors(by,My)}setViewOffset(t,n,s,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(bd*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/d,n-=u.offsetY*s/p,o*=u.width/d,s*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,Yr=1;class L2 extends Fn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ti(qr,Yr,t,n);o.layers=this.layers,this.add(o);const c=new Ti(qr,Yr,t,n);c.layers=this.layers,this.add(c);const u=new Ti(qr,Yr,t,n);u.layers=this.layers,this.add(u);const h=new Ti(qr,Yr,t,n);h.layers=this.layers,this.add(h);const d=new Ti(qr,Yr,t,n);d.layers=this.layers,this.add(d);const p=new Ti(qr,Yr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,h,d]=n;for(const p of n)this.remove(p);if(t===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Gu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(n,c),t.setRenderTarget(s,1,o),t.render(n,u),t.setRenderTarget(s,2,o),t.render(n,h),t.setRenderTarget(s,3,o),t.render(n,d),t.setRenderTarget(s,4,o),t.render(n,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,o),t.render(n,g),t.setRenderTarget(v,_,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class ob extends Kn{constructor(t=[],n=ir,s,o,c,u,h,d,p,g){super(t,n,s,o,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lb extends $i{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new ob(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new go(5,5,5),c=new aa({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ei,blending:Ua});c.uniforms.tEquirect.value=n;const u=new ia(o,c),h=n.minFilter;return n.minFilter===tr&&(n.minFilter=kn),new L2(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,s,o);t.setRenderTarget(c)}}class xu extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P2={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const A of t.hand.values()){const S=n.getJointPose(A,s),x=this._getHandJoint(p,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&_>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(P2)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new xu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class O2 extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class F2 extends Kn{constructor(t=null,n=1,s=1,o,c,u,h,d,p=On,g=On,v,_){super(null,u,h,d,p,g,o,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new tt,I2=new tt,B2=new de;class Zs{constructor(t=new tt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=jd.subVectors(s,n).cross(I2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(jd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||B2.getNormalMatrix(t),o=this.coplanarPoint(jd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new Yu,z2=new Ee(.5,.5),yu=new tt;class lg{constructor(t=new Zs,n=new Zs,s=new Zs,o=new Zs,c=new Zs,u=new Zs){this.planes=[t,n,s,o,c,u]}set(t,n,s,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Ki,s=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],v=c[5],_=c[6],y=c[7],b=c[8],A=c[9],S=c[10],x=c[11],R=c[12],w=c[13],L=c[14],D=c[15];if(o[0].setComponents(p-u,y-g,x-b,D-R).normalize(),o[1].setComponents(p+u,y+g,x+b,D+R).normalize(),o[2].setComponents(p+h,y+v,x+A,D+w).normalize(),o[3].setComponents(p-h,y-v,x-A,D-w).normalize(),s)o[4].setComponents(d,_,S,L).normalize(),o[5].setComponents(p-d,y-_,x-S,D-L).normalize();else if(o[4].setComponents(p-d,y-_,x-S,D-L).normalize(),n===Ki)o[5].setComponents(p+d,y+_,x+S,D+L).normalize();else if(n===Gu)o[5].setComponents(d,_,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);const n=z2.distanceTo(t.center);return Ws.radius=.7071067811865476+n,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(yu.x=o.normal.x>0?t.max.x:t.min.x,yu.y=o.normal.y>0?t.max.y:t.min.y,yu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(yu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cb extends mo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ey=new $e,gm=new $M,Su=new Yu,Mu=new tt;class V2 extends Fn{constructor(t=new ni,n=new cb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Su.copy(s.boundingSphere),Su.applyMatrix4(o),Su.radius+=c,t.ray.intersectsSphere(Su)===!1)return;Ey.copy(o).invert(),gm.copy(t.ray).applyMatrix4(Ey);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=s.index,v=s.attributes.position;if(p!==null){const _=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let b=_,A=y;b<A;b++){const S=p.getX(b);Mu.fromBufferAttribute(v,S),Ty(Mu,S,d,o,t,n,this)}}else{const _=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let b=_,A=y;b<A;b++)Mu.fromBufferAttribute(v,b),Ty(Mu,b,d,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Ty(i,t,n,s,o,c,u){const h=gm.distanceSqToPoint(i);if(h<n){const d=new tt;gm.closestPointToPoint(i,d),d.applyMatrix4(s);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class zl extends Kn{constructor(t,n,s=ea,o,c,u,h=On,d=On,p,g=Oa,v=1){if(g!==Oa&&g!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,c,u,h,d,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new og(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class H2 extends zl{constructor(t,n=ea,s=ir,o,c,u=On,h=On,d,p=Oa){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,s,o,c,u,h,d,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ub extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zu extends ni{constructor(t=[],n=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:s,detail:o};const c=[],u=[];h(o),p(s),g(),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(c.slice(),3)),this.setAttribute("uv",new En(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(R){const w=new tt,L=new tt,D=new tt;for(let O=0;O<n.length;O+=3)y(n[O+0],w),y(n[O+1],L),y(n[O+2],D),d(w,L,D,R)}function d(R,w,L,D){const O=D+1,I=[];for(let z=0;z<=O;z++){I[z]=[];const T=R.clone().lerp(L,z/O),C=w.clone().lerp(L,z/O),V=O-z;for(let st=0;st<=V;st++)st===0&&z===O?I[z][st]=T:I[z][st]=T.clone().lerp(C,st/V)}for(let z=0;z<O;z++)for(let T=0;T<2*(O-z)-1;T++){const C=Math.floor(T/2);T%2===0?(_(I[z][C+1]),_(I[z+1][C]),_(I[z][C])):(_(I[z][C+1]),_(I[z+1][C+1]),_(I[z+1][C]))}}function p(R){const w=new tt;for(let L=0;L<c.length;L+=3)w.x=c[L+0],w.y=c[L+1],w.z=c[L+2],w.normalize().multiplyScalar(R),c[L+0]=w.x,c[L+1]=w.y,c[L+2]=w.z}function g(){const R=new tt;for(let w=0;w<c.length;w+=3){R.x=c[w+0],R.y=c[w+1],R.z=c[w+2];const L=S(R)/2/Math.PI+.5,D=x(R)/Math.PI+.5;u.push(L,1-D)}b(),v()}function v(){for(let R=0;R<u.length;R+=6){const w=u[R+0],L=u[R+2],D=u[R+4],O=Math.max(w,L,D),I=Math.min(w,L,D);O>.9&&I<.1&&(w<.2&&(u[R+0]+=1),L<.2&&(u[R+2]+=1),D<.2&&(u[R+4]+=1))}}function _(R){c.push(R.x,R.y,R.z)}function y(R,w){const L=R*3;w.x=t[L+0],w.y=t[L+1],w.z=t[L+2]}function b(){const R=new tt,w=new tt,L=new tt,D=new tt,O=new Ee,I=new Ee,z=new Ee;for(let T=0,C=0;T<c.length;T+=9,C+=6){R.set(c[T+0],c[T+1],c[T+2]),w.set(c[T+3],c[T+4],c[T+5]),L.set(c[T+6],c[T+7],c[T+8]),O.set(u[C+0],u[C+1]),I.set(u[C+2],u[C+3]),z.set(u[C+4],u[C+5]),D.copy(R).add(w).add(L).divideScalar(3);const V=S(D);A(O,C+0,R,V),A(I,C+2,w,V),A(z,C+4,L,V)}}function A(R,w,L,D){D<0&&R.x===1&&(u[w]=R.x-1),L.x===0&&L.z===0&&(u[w]=D/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function x(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.vertices,t.indices,t.radius,t.detail)}}class cg extends Zu{constructor(t=1,n=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new cg(t.radius,t.detail)}}class Ku extends ni{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(s),d=Math.floor(o),p=h+1,g=d+1,v=t/h,_=n/d,y=[],b=[],A=[],S=[];for(let x=0;x<g;x++){const R=x*_-u;for(let w=0;w<p;w++){const L=w*v-c;b.push(L,-R,0),A.push(0,0,1),S.push(w/h),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let R=0;R<h;R++){const w=R+p*x,L=R+p*(x+1),D=R+1+p*(x+1),O=R+1+p*x;y.push(w,L,O),y.push(L,D,O)}this.setIndex(y),this.setAttribute("position",new En(b,3)),this.setAttribute("normal",new En(A,3)),this.setAttribute("uv",new En(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.width,t.height,t.widthSegments,t.heightSegments)}}class ug extends ni{constructor(t=1,n=32,s=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:s,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const d=Math.min(u+h,Math.PI);let p=0;const g=[],v=new tt,_=new tt,y=[],b=[],A=[],S=[];for(let x=0;x<=s;x++){const R=[],w=x/s;let L=0;x===0&&u===0?L=.5/n:x===s&&d===Math.PI&&(L=-.5/n);for(let D=0;D<=n;D++){const O=D/n;v.x=-t*Math.cos(o+O*c)*Math.sin(u+w*h),v.y=t*Math.cos(u+w*h),v.z=t*Math.sin(o+O*c)*Math.sin(u+w*h),b.push(v.x,v.y,v.z),_.copy(v).normalize(),A.push(_.x,_.y,_.z),S.push(O+L,1-w),R.push(p++)}g.push(R)}for(let x=0;x<s;x++)for(let R=0;R<n;R++){const w=g[x][R+1],L=g[x][R],D=g[x+1][R],O=g[x+1][R+1];(x!==0||u>0)&&y.push(w,L,O),(x!==s-1||d<Math.PI)&&y.push(L,D,O)}this.setIndex(y),this.setAttribute("position",new En(b,3)),this.setAttribute("normal",new En(A,3)),this.setAttribute("uv",new En(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ug(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fg extends Zu{constructor(t=1,n=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],o=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,o,t,n),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new fg(t.radius,t.detail)}}class hg extends ni{constructor(t=1,n=.4,s=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:s,tubularSegments:o,arc:c},s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],p=[],g=new tt,v=new tt,_=new tt;for(let y=0;y<=s;y++)for(let b=0;b<=o;b++){const A=b/o*c,S=y/s*Math.PI*2;v.x=(t+n*Math.cos(S))*Math.cos(A),v.y=(t+n*Math.cos(S))*Math.sin(A),v.z=n*Math.sin(S),h.push(v.x,v.y,v.z),g.x=t*Math.cos(A),g.y=t*Math.sin(A),_.subVectors(v,g).normalize(),d.push(_.x,_.y,_.z),p.push(b/o),p.push(y/s)}for(let y=1;y<=s;y++)for(let b=1;b<=o;b++){const A=(o+1)*y+b-1,S=(o+1)*(y-1)+b-1,x=(o+1)*(y-1)+b,R=(o+1)*y+b;u.push(A,S,R),u.push(S,x,R)}this.setIndex(u),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(d,3)),this.setAttribute("uv",new En(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hg(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class G2 extends aa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class k2 extends mo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=KM,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=Jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class X2 extends mo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class W2 extends mo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fb extends Fn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const qd=new $e,Ay=new tt,Ry=new tt;class j2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lg,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;Ay.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ay),Ry.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Ry),n.updateMatrixWorld(),qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(qd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class dg extends rb{constructor(t=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,u=s+t,h=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class q2 extends j2{constructor(){super(new dg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wy extends fb{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new q2}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Y2 extends fb{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Z2 extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Cy(i,t,n,s){const o=K2(s);switch(n){case qM:return i*t;case ZM:return i*t/o.components*o.byteLength;case ng:return i*t/o.components*o.byteLength;case oo:return i*t*2/o.components*o.byteLength;case ig:return i*t*2/o.components*o.byteLength;case YM:return i*t*3/o.components*o.byteLength;case Vi:return i*t*4/o.components*o.byteLength;case ag:return i*t*4/o.components*o.byteLength;case Du:case Uu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nu:case Lu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bp:case Vp:return Math.max(i,16)*Math.max(t,8)/4;case Ip:case zp:return Math.max(i,8)*Math.max(t,8)/2;case Hp:case Gp:case Xp:case Wp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kp:case jp:case qp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zp:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Kp:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jp:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $p:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tm:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case em:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nm:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case im:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case am:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sm:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rm:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case om:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lm:case cm:case um:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fm:case hm:return Math.ceil(i/4)*Math.ceil(t/4)*8;case dm:case pm:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function K2(i){switch(i){case ui:case kM:return{byteLength:1,components:1};case Fl:case XM:case Pa:return{byteLength:2,components:1};case tg:case eg:return{byteLength:2,components:4};case ea:case $m:case Zi:return{byteLength:4,components:1};case WM:case jM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qm}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hb(){let i=null,t=!1,n=null,s=null;function o(c,u){n(c,u),s=i.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(o),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){i=c}}}function Q2(i){const t=new WeakMap;function n(h,d){const p=h.array,g=h.usage,v=p.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=i.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,d,p){const g=d.array,v=d.updateRanges;if(i.bindBuffer(p,h),v.length===0)i.bufferSubData(p,0,g);else{v.sort((y,b)=>y.start-b.start);let _=0;for(let y=1;y<v.length;y++){const b=v[_],A=v[y];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++_,v[_]=A)}v.length=_+1;for(let y=0,b=v.length;y<b;y++){const A=v[y];i.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(i.deleteBuffer(d.buffer),t.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,d),p.version=h.version}}return{get:o,remove:c,update:u}}var J2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,o3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,S3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,b3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w3="gl_FragColor = linearToOutputTexel( gl_FragColor );",C3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,U3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,W3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_D=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ED=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ND=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,PD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ID=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$D=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_U=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:J2,alphahash_pars_fragment:$2,alphamap_fragment:t3,alphamap_pars_fragment:e3,alphatest_fragment:n3,alphatest_pars_fragment:i3,aomap_fragment:a3,aomap_pars_fragment:s3,batching_pars_vertex:r3,batching_vertex:o3,begin_vertex:l3,beginnormal_vertex:c3,bsdfs:u3,iridescence_fragment:f3,bumpmap_pars_fragment:h3,clipping_planes_fragment:d3,clipping_planes_pars_fragment:p3,clipping_planes_pars_vertex:m3,clipping_planes_vertex:g3,color_fragment:v3,color_pars_fragment:_3,color_pars_vertex:x3,color_vertex:y3,common:S3,cube_uv_reflection_fragment:M3,defaultnormal_vertex:b3,displacementmap_pars_vertex:E3,displacementmap_vertex:T3,emissivemap_fragment:A3,emissivemap_pars_fragment:R3,colorspace_fragment:w3,colorspace_pars_fragment:C3,envmap_fragment:D3,envmap_common_pars_fragment:U3,envmap_pars_fragment:N3,envmap_pars_vertex:L3,envmap_physical_pars_fragment:X3,envmap_vertex:P3,fog_vertex:O3,fog_pars_vertex:F3,fog_fragment:I3,fog_pars_fragment:B3,gradientmap_pars_fragment:z3,lightmap_pars_fragment:V3,lights_lambert_fragment:H3,lights_lambert_pars_fragment:G3,lights_pars_begin:k3,lights_toon_fragment:W3,lights_toon_pars_fragment:j3,lights_phong_fragment:q3,lights_phong_pars_fragment:Y3,lights_physical_fragment:Z3,lights_physical_pars_fragment:K3,lights_fragment_begin:Q3,lights_fragment_maps:J3,lights_fragment_end:$3,logdepthbuf_fragment:tD,logdepthbuf_pars_fragment:eD,logdepthbuf_pars_vertex:nD,logdepthbuf_vertex:iD,map_fragment:aD,map_pars_fragment:sD,map_particle_fragment:rD,map_particle_pars_fragment:oD,metalnessmap_fragment:lD,metalnessmap_pars_fragment:cD,morphinstance_vertex:uD,morphcolor_vertex:fD,morphnormal_vertex:hD,morphtarget_pars_vertex:dD,morphtarget_vertex:pD,normal_fragment_begin:mD,normal_fragment_maps:gD,normal_pars_fragment:vD,normal_pars_vertex:_D,normal_vertex:xD,normalmap_pars_fragment:yD,clearcoat_normal_fragment_begin:SD,clearcoat_normal_fragment_maps:MD,clearcoat_pars_fragment:bD,iridescence_pars_fragment:ED,opaque_fragment:TD,packing:AD,premultiplied_alpha_fragment:RD,project_vertex:wD,dithering_fragment:CD,dithering_pars_fragment:DD,roughnessmap_fragment:UD,roughnessmap_pars_fragment:ND,shadowmap_pars_fragment:LD,shadowmap_pars_vertex:PD,shadowmap_vertex:OD,shadowmask_pars_fragment:FD,skinbase_vertex:ID,skinning_pars_vertex:BD,skinning_vertex:zD,skinnormal_vertex:VD,specularmap_fragment:HD,specularmap_pars_fragment:GD,tonemapping_fragment:kD,tonemapping_pars_fragment:XD,transmission_fragment:WD,transmission_pars_fragment:jD,uv_pars_fragment:qD,uv_pars_vertex:YD,uv_vertex:ZD,worldpos_vertex:KD,background_vert:QD,background_frag:JD,backgroundCube_vert:$D,backgroundCube_frag:tU,cube_vert:eU,cube_frag:nU,depth_vert:iU,depth_frag:aU,distance_vert:sU,distance_frag:rU,equirect_vert:oU,equirect_frag:lU,linedashed_vert:cU,linedashed_frag:uU,meshbasic_vert:fU,meshbasic_frag:hU,meshlambert_vert:dU,meshlambert_frag:pU,meshmatcap_vert:mU,meshmatcap_frag:gU,meshnormal_vert:vU,meshnormal_frag:_U,meshphong_vert:xU,meshphong_frag:yU,meshphysical_vert:SU,meshphysical_frag:MU,meshtoon_vert:bU,meshtoon_frag:EU,points_vert:TU,points_frag:AU,shadow_vert:RU,shadow_frag:wU,sprite_vert:CU,sprite_frag:DU},Pt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Yi={basic:{uniforms:qn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:qn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:qn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:qn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:qn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:qn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:qn([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:qn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:qn([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:qn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:qn([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:qn([Pt.common,Pt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:qn([Pt.lights,Pt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Yi.physical={uniforms:qn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const bu={r:0,b:0,g:0},js=new na,UU=new $e;function NU(i,t,n,s,o,c,u){const h=new Ae(0);let d=c===!0?0:1,p,g,v=null,_=0,y=null;function b(w){let L=w.isScene===!0?w.background:null;return L&&L.isTexture&&(L=(w.backgroundBlurriness>0?n:t).get(L)),L}function A(w){let L=!1;const D=b(w);D===null?x(h,d):D&&D.isColor&&(x(D,1),L=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(i.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(w,L){const D=b(L);D&&(D.isCubeTexture||D.mapping===qu)?(g===void 0&&(g=new ia(new go(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:co(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),js.copy(L.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(UU.makeRotationFromEuler(js)),g.material.toneMapped=Te.getTransfer(D.colorSpace)!==Be,(v!==D||_!==D.version||y!==i.toneMapping)&&(g.material.needsUpdate=!0,v=D,_=D.version,y=i.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new ia(new Ku(2,2),new aa({name:"BackgroundMaterial",uniforms:co(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Te.getTransfer(D.colorSpace)!==Be,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||_!==D.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,v=D,_=D.version,y=i.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function x(w,L){w.getRGB(bu,sb(i)),s.buffers.color.setClear(bu.r,bu.g,bu.b,L,u)}function R(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,L=1){h.set(w),d=L,x(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,x(h,d)},render:A,addToRenderList:S,dispose:R}}function LU(i,t){const n=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},o=_(null);let c=o,u=!1;function h(C,V,st,at,ft){let lt=!1;const k=v(at,st,V);c!==k&&(c=k,p(c.object)),lt=y(C,at,st,ft),lt&&b(C,at,st,ft),ft!==null&&t.update(ft,i.ELEMENT_ARRAY_BUFFER),(lt||u)&&(u=!1,L(C,V,st,at),ft!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function d(){return i.createVertexArray()}function p(C){return i.bindVertexArray(C)}function g(C){return i.deleteVertexArray(C)}function v(C,V,st){const at=st.wireframe===!0;let ft=s[C.id];ft===void 0&&(ft={},s[C.id]=ft);let lt=ft[V.id];lt===void 0&&(lt={},ft[V.id]=lt);let k=lt[at];return k===void 0&&(k=_(d()),lt[at]=k),k}function _(C){const V=[],st=[],at=[];for(let ft=0;ft<n;ft++)V[ft]=0,st[ft]=0,at[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:st,attributeDivisors:at,object:C,attributes:{},index:null}}function y(C,V,st,at){const ft=c.attributes,lt=V.attributes;let k=0;const G=st.getAttributes();for(const $ in G)if(G[$].location>=0){const P=ft[$];let J=lt[$];if(J===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),P===void 0||P.attribute!==J||J&&P.data!==J.data)return!0;k++}return c.attributesNum!==k||c.index!==at}function b(C,V,st,at){const ft={},lt=V.attributes;let k=0;const G=st.getAttributes();for(const $ in G)if(G[$].location>=0){let P=lt[$];P===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(P=C.instanceColor));const J={};J.attribute=P,P&&P.data&&(J.data=P.data),ft[$]=J,k++}c.attributes=ft,c.attributesNum=k,c.index=at}function A(){const C=c.newAttributes;for(let V=0,st=C.length;V<st;V++)C[V]=0}function S(C){x(C,0)}function x(C,V){const st=c.newAttributes,at=c.enabledAttributes,ft=c.attributeDivisors;st[C]=1,at[C]===0&&(i.enableVertexAttribArray(C),at[C]=1),ft[C]!==V&&(i.vertexAttribDivisor(C,V),ft[C]=V)}function R(){const C=c.newAttributes,V=c.enabledAttributes;for(let st=0,at=V.length;st<at;st++)V[st]!==C[st]&&(i.disableVertexAttribArray(st),V[st]=0)}function w(C,V,st,at,ft,lt,k){k===!0?i.vertexAttribIPointer(C,V,st,ft,lt):i.vertexAttribPointer(C,V,st,at,ft,lt)}function L(C,V,st,at){A();const ft=at.attributes,lt=st.getAttributes(),k=V.defaultAttributeValues;for(const G in lt){const $=lt[G];if($.location>=0){let _t=ft[G];if(_t===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const P=_t.normalized,J=_t.itemSize,wt=t.get(_t);if(wt===void 0)continue;const Et=wt.buffer,Rt=wt.type,Yt=wt.bytesPerElement,nt=Rt===i.INT||Rt===i.UNSIGNED_INT||_t.gpuType===$m;if(_t.isInterleavedBufferAttribute){const pt=_t.data,Mt=pt.stride,kt=_t.offset;if(pt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<$.locationSize;Ct++)x($.location+Ct,pt.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ct=0;Ct<$.locationSize;Ct++)S($.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Ct=0;Ct<$.locationSize;Ct++)w($.location+Ct,J/$.locationSize,Rt,P,Mt*Yt,(kt+J/$.locationSize*Ct)*Yt,nt)}else{if(_t.isInstancedBufferAttribute){for(let pt=0;pt<$.locationSize;pt++)x($.location+pt,_t.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let pt=0;pt<$.locationSize;pt++)S($.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let pt=0;pt<$.locationSize;pt++)w($.location+pt,J/$.locationSize,Rt,P,J*Yt,J/$.locationSize*pt*Yt,nt)}}else if(k!==void 0){const P=k[G];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv($.location,P);break;case 3:i.vertexAttrib3fv($.location,P);break;case 4:i.vertexAttrib4fv($.location,P);break;default:i.vertexAttrib1fv($.location,P)}}}}R()}function D(){z();for(const C in s){const V=s[C];for(const st in V){const at=V[st];for(const ft in at)g(at[ft].object),delete at[ft];delete V[st]}delete s[C]}}function O(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const st in V){const at=V[st];for(const ft in at)g(at[ft].object),delete at[ft];delete V[st]}delete s[C.id]}function I(C){for(const V in s){const st=s[V];if(st[C.id]===void 0)continue;const at=st[C.id];for(const ft in at)g(at[ft].object),delete at[ft];delete st[C.id]}}function z(){T(),u=!0,c!==o&&(c=o,p(c.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:z,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:S,disableUnusedAttributes:R}}function PU(i,t,n){let s;function o(p){s=p}function c(p,g){i.drawArrays(s,p,g),n.update(g,s,1)}function u(p,g,v){v!==0&&(i.drawArraysInstanced(s,p,g,v),n.update(g,s,v))}function h(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];n.update(y,s,1)}function d(p,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)u(p[b],g[b],_[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,_,0,v);let b=0;for(let A=0;A<v;A++)b+=g[A]*_[A];n.update(b,s,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function OU(i,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");o=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Vi&&s.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const z=I===Pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ui&&s.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Zi&&!z)}function d(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(le("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:L,maxSamples:D,samples:O}}function FU(i){const t=this;let n=null,s=0,o=!1,c=!1;const u=new Zs,h=new de,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||s!==0||o;return o=_,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const b=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,x=i.get(v);if(!o||b===null||b.length===0||c&&!S)c?g(null):p();else{const R=c?0:s,w=R*4;let L=x.clippingState||null;d.value=L,L=g(b,_,w,y);for(let D=0;D!==w;++D)L[D]=n[D];x.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,_,y,b){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=d.value,b!==!0||S===null){const x=y+A*4,R=_.matrixWorldInverse;h.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let w=0,L=y;w!==A;++w,L+=4)u.copy(v[w]).applyMatrix4(R,h),u.normal.toArray(S,L),S[L+3]=u.constant}d.value=S,d.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function IU(i){let t=new WeakMap;function n(u,h){return h===Lp?u.mapping=ir:h===Pp&&(u.mapping=ro),u}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===Lp||h===Pp)if(t.has(u)){const d=t.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new lb(d.height);return p.fromEquirectangularTexture(i,u),t.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const gs=4,Dy=[.125,.215,.35,.446,.526,.582],Qs=20,BU=256,Sl=new dg,Uy=new Ae;let Yd=null,Zd=0,Kd=0,Qd=!1;const zU=new tt;class Ny{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:u=256,position:h=zU}=c;Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,s,o,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Py(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yd,Zd,Kd),this._renderer.xr.enabled=Qd,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ir||t.mapping===ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yd=this._renderer.getRenderTarget(),Zd=this._renderer.getActiveCubeFace(),Kd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Pa,format:Vi,colorSpace:lo,depthBuffer:!1},o=Ly(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ly(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VU(c)),this._blurMaterial=GU(c,t,n),this._ggxMaterial=HU(c,t,n)}return o}_compileMaterial(t){const n=new ia(new ni,t);this._renderer.compile(n,Sl)}_sceneToCubeUV(t,n,s,o,c){const d=new Ti(90,1,n,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(Uy),v.toneMapping=Ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ia(new go,new nb({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,x=!0):(S.color.copy(Uy),x=!0);for(let w=0;w<6;w++){const L=w%3;L===0?(d.up.set(0,p[w],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[w],c.y,c.z)):L===1?(d.up.set(0,0,p[w]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[w],c.z)):(d.up.set(0,p[w],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[w]));const D=this._cubeSize;Zr(o,L*D,w>2?D:0,D,D),v.setRenderTarget(o),x&&v.render(A,d),v.render(t,d)}v.toneMapping=y,v.autoClear=_,t.background=R}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===ir||t.mapping===ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Py());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const d=this._cubeSize;Zr(n,0,0,3*d,2*d),s.setRenderTarget(n),s.render(u,Sl)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[s];h.material=u;const d=u.uniforms,p=s/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=0+p*1.25,y=v*_,{_lodMax:b}=this,A=this._sizeLods[s],S=3*A*(s>b-gs?s-b+gs:0),x=4*(this._cubeSize-A);d.envMap.value=t.texture,d.roughness.value=y,d.mipInt.value=b-n,Zr(c,S,x,3*A,2*A),o.setRenderTarget(c),o.render(h,Sl),d.envMap.value=c.texture,d.roughness.value=0,d.mipInt.value=b-s,Zr(t,S,x,3*A,2*A),o.setRenderTarget(t),o.render(h,Sl)}_blur(t,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,s,o,"latitudinal",c),this._halfBlur(u,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=p;const _=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Qs-1),A=c/b,S=isFinite(c)?1+Math.floor(g*A):Qs;S>Qs&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Qs}`);const x=[];let R=0;for(let I=0;I<Qs;++I){const z=I/A,T=Math.exp(-z*z/2);x.push(T),I===0?R+=T:I<S&&(R+=2*T)}for(let I=0;I<x.length;I++)x[I]=x[I]/R;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:w}=this;_.dTheta.value=b,_.mipInt.value=w-s;const L=this._sizeLods[o],D=3*L*(o>w-gs?o-w+gs:0),O=4*(this._cubeSize-L);Zr(n,D,O,3*L,2*L),d.setRenderTarget(n),d.render(v,Sl)}}function VU(i){const t=[],n=[],s=[];let o=i;const c=i-gs+1+Dy.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let d=1/h;u>i-gs?d=Dy[u-i+gs-1]:u===0&&(d=0),n.push(d);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,A=3,S=2,x=1,R=new Float32Array(A*b*y),w=new Float32Array(S*b*y),L=new Float32Array(x*b*y);for(let O=0;O<y;O++){const I=O%3*2/3-1,z=O>2?0:-1,T=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];R.set(T,A*b*O),w.set(_,S*b*O);const C=[O,O,O,O,O,O];L.set(C,x*b*O)}const D=new ni;D.setAttribute("position",new Hi(R,A)),D.setAttribute("uv",new Hi(w,S)),D.setAttribute("faceIndex",new Hi(L,x)),s.push(new ia(D,null)),o>gs&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function Ly(i,t,n){const s=new $i(i,t,n);return s.texture.mapping=qu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Zr(i,t,n,s,o){i.viewport.set(t,n,s,o),i.scissor.set(t,n,s,o)}function HU(i,t,n){return new aa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BU,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function GU(i,t,n){const s=new Float32Array(Qs),o=new tt(0,1,0);return new aa({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Py(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Oy(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kU(i){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const d=h.mapping,p=d===Lp||d===Pp,g=d===ir||d===ro;if(p||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new Ny(i)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Ny(i)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function XU(i){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=i.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&Bl("WebGLRenderer: "+s+" extension not supported."),o}}}function WU(i,t,n,s){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function d(v){const _=v.attributes;for(const y in _)t.update(_[y],i.ARRAY_BUFFER)}function p(v){const _=[],y=v.index,b=v.attributes.position;let A=0;if(y!==null){const R=y.array;A=y.version;for(let w=0,L=R.length;w<L;w+=3){const D=R[w+0],O=R[w+1],I=R[w+2];_.push(D,O,O,I,I,D)}}else if(b!==void 0){const R=b.array;A=b.version;for(let w=0,L=R.length/3-1;w<L;w+=3){const D=w+0,O=w+1,I=w+2;_.push(D,O,O,I,I,D)}}else return;const S=new(QM(_)?ab:ib)(_,1);S.version=A;const x=c.get(v);x&&t.remove(x),c.set(v,S)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:d,getWireframeAttribute:g}}function jU(i,t,n){let s;function o(_){s=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function d(_,y){i.drawElements(s,y,c,_*u),n.update(y,s,1)}function p(_,y,b){b!==0&&(i.drawElementsInstanced(s,y,c,_*u,b),n.update(y,s,b))}function g(_,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,_,0,b);let S=0;for(let x=0;x<b;x++)S+=y[x];n.update(S,s,1)}function v(_,y,b,A){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)p(_[x]/u,y[x],A[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,_,0,A,0,b);let x=0;for(let R=0;R<b;R++)x+=y[R]*A[R];n.update(x,s,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function qU(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,h){switch(n.calls++,u){case i.TRIANGLES:n.triangles+=h*(c/3);break;case i.LINES:n.lines+=h*(c/2);break;case i.LINE_STRIP:n.lines+=h*(c-1);break;case i.LINE_LOOP:n.lines+=h*c;break;case i.POINTS:n.points+=h*c;break;default:Ue("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function YU(i,t,n){const s=new WeakMap,o=new sn;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let C=function(){z.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var y=C;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),A===!0&&(L=2),S===!0&&(L=3);let D=h.attributes.position.count*L,O=1;D>t.maxTextureSize&&(O=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const I=new Float32Array(D*O*4*v),z=new JM(I,D,O,v);z.type=Zi,z.needsUpdate=!0;const T=L*4;for(let V=0;V<v;V++){const st=x[V],at=R[V],ft=w[V],lt=D*O*4*V;for(let k=0;k<st.count;k++){const G=k*T;b===!0&&(o.fromBufferAttribute(st,k),I[lt+G+0]=o.x,I[lt+G+1]=o.y,I[lt+G+2]=o.z,I[lt+G+3]=0),A===!0&&(o.fromBufferAttribute(at,k),I[lt+G+4]=o.x,I[lt+G+5]=o.y,I[lt+G+6]=o.z,I[lt+G+7]=0),S===!0&&(o.fromBufferAttribute(ft,k),I[lt+G+8]=o.x,I[lt+G+9]=o.y,I[lt+G+10]=o.z,I[lt+G+11]=ft.itemSize===4?o.w:1)}}_={count:v,texture:z,size:new Ee(D,O)},s.set(h,_),h.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",u.morphTexture,n);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const A=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(i,"morphTargetBaseInfluence",A),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:c}}function ZU(i,t,n,s){let o=new WeakMap;function c(d){const p=s.render.frame,g=d.geometry,v=t.get(d,g);if(o.get(v)!==p&&(t.update(v),o.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(n.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,i.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return v}function u(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const KU={[OM]:"LINEAR_TONE_MAPPING",[FM]:"REINHARD_TONE_MAPPING",[IM]:"CINEON_TONE_MAPPING",[BM]:"ACES_FILMIC_TONE_MAPPING",[VM]:"AGX_TONE_MAPPING",[HM]:"NEUTRAL_TONE_MAPPING",[zM]:"CUSTOM_TONE_MAPPING"};function QU(i,t,n,s,o){const c=new $i(t,n,{type:i,depthBuffer:s,stencilBuffer:o}),u=new $i(t,n,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),h=new ni;h.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new En([0,2,0,0,2,0],2));const d=new G2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ia(h,d),g=new dg(-1,1,1,-1,0,1);let v=null,_=null,y=!1,b,A=null,S=[],x=!1;this.setSize=function(R,w){c.setSize(R,w),u.setSize(R,w);for(let L=0;L<S.length;L++){const D=S[L];D.setSize&&D.setSize(R,w)}},this.setEffects=function(R){S=R,x=S.length>0&&S[0].isRenderPass===!0;const w=c.width,L=c.height;for(let D=0;D<S.length;D++){const O=S[D];O.setSize&&O.setSize(w,L)}},this.begin=function(R,w){if(y||R.toneMapping===Ji&&S.length===0)return!1;if(A=w,w!==null){const L=w.width,D=w.height;(c.width!==L||c.height!==D)&&this.setSize(L,D)}return x===!1&&R.setRenderTarget(c),b=R.toneMapping,R.toneMapping=Ji,!0},this.hasRenderPass=function(){return x},this.end=function(R,w){R.toneMapping=b,y=!0;let L=c,D=u;for(let O=0;O<S.length;O++){const I=S[O];if(I.enabled!==!1&&(I.render(R,D,L,w),I.needsSwap!==!1)){const z=L;L=D,D=z}}if(v!==R.outputColorSpace||_!==R.toneMapping){v=R.outputColorSpace,_=R.toneMapping,d.defines={},Te.getTransfer(v)===Be&&(d.defines.SRGB_TRANSFER="");const O=KU[_];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(A),R.render(p,g),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),u.dispose(),h.dispose(),d.dispose()}}const db=new Kn,vm=new zl(1,1),pb=new JM,mb=new v2,gb=new ob,Fy=[],Iy=[],By=new Float32Array(16),zy=new Float32Array(9),Vy=new Float32Array(4);function vo(i,t,n){const s=i[0];if(s<=0||s>0)return i;const o=t*n;let c=Fy[o];if(c===void 0&&(c=new Float32Array(o),Fy[o]=c),t!==0){s.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,i[u].toArray(c,h)}return c}function _n(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function xn(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function Ju(i,t){let n=Iy[t];n===void 0&&(n=new Int32Array(t),Iy[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function JU(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function $U(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2fv(this.addr,t),xn(n,t)}}function tN(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;i.uniform3fv(this.addr,t),xn(n,t)}}function eN(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4fv(this.addr,t),xn(n,t)}}function nN(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,s))return;Vy.set(s),i.uniformMatrix2fv(this.addr,!1,Vy),xn(n,s)}}function iN(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,s))return;zy.set(s),i.uniformMatrix3fv(this.addr,!1,zy),xn(n,s)}}function aN(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(_n(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),xn(n,t)}else{if(_n(n,s))return;By.set(s),i.uniformMatrix4fv(this.addr,!1,By),xn(n,s)}}function sN(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function rN(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2iv(this.addr,t),xn(n,t)}}function oN(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;i.uniform3iv(this.addr,t),xn(n,t)}}function lN(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4iv(this.addr,t),xn(n,t)}}function cN(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function uN(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;i.uniform2uiv(this.addr,t),xn(n,t)}}function fN(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;i.uniform3uiv(this.addr,t),xn(n,t)}}function hN(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;i.uniform4uiv(this.addr,t),xn(n,t)}}function dN(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(vm.compareFunction=n.isReversedDepthBuffer()?rg:sg,c=vm):c=db,n.setTexture2D(t||c,o)}function pN(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||mb,o)}function mN(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||gb,o)}function gN(i,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||pb,o)}function vN(i){switch(i){case 5126:return JU;case 35664:return $U;case 35665:return tN;case 35666:return eN;case 35674:return nN;case 35675:return iN;case 35676:return aN;case 5124:case 35670:return sN;case 35667:case 35671:return rN;case 35668:case 35672:return oN;case 35669:case 35673:return lN;case 5125:return cN;case 36294:return uN;case 36295:return fN;case 36296:return hN;case 35678:case 36198:case 36298:case 36306:case 35682:return dN;case 35679:case 36299:case 36307:return pN;case 35680:case 36300:case 36308:case 36293:return mN;case 36289:case 36303:case 36311:case 36292:return gN}}function _N(i,t){i.uniform1fv(this.addr,t)}function xN(i,t){const n=vo(t,this.size,2);i.uniform2fv(this.addr,n)}function yN(i,t){const n=vo(t,this.size,3);i.uniform3fv(this.addr,n)}function SN(i,t){const n=vo(t,this.size,4);i.uniform4fv(this.addr,n)}function MN(i,t){const n=vo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function bN(i,t){const n=vo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function EN(i,t){const n=vo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function TN(i,t){i.uniform1iv(this.addr,t)}function AN(i,t){i.uniform2iv(this.addr,t)}function RN(i,t){i.uniform3iv(this.addr,t)}function wN(i,t){i.uniform4iv(this.addr,t)}function CN(i,t){i.uniform1uiv(this.addr,t)}function DN(i,t){i.uniform2uiv(this.addr,t)}function UN(i,t){i.uniform3uiv(this.addr,t)}function NN(i,t){i.uniform4uiv(this.addr,t)}function LN(i,t,n){const s=this.cache,o=t.length,c=Ju(n,o);_n(s,c)||(i.uniform1iv(this.addr,c),xn(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=vm:u=db;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||u,c[h])}function PN(i,t,n){const s=this.cache,o=t.length,c=Ju(n,o);_n(s,c)||(i.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||mb,c[u])}function ON(i,t,n){const s=this.cache,o=t.length,c=Ju(n,o);_n(s,c)||(i.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||gb,c[u])}function FN(i,t,n){const s=this.cache,o=t.length,c=Ju(n,o);_n(s,c)||(i.uniform1iv(this.addr,c),xn(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||pb,c[u])}function IN(i){switch(i){case 5126:return _N;case 35664:return xN;case 35665:return yN;case 35666:return SN;case 35674:return MN;case 35675:return bN;case 35676:return EN;case 5124:case 35670:return TN;case 35667:case 35671:return AN;case 35668:case 35672:return RN;case 35669:case 35673:return wN;case 5125:return CN;case 36294:return DN;case 36295:return UN;case 36296:return NN;case 35678:case 36198:case 36298:case 36306:case 35682:return LN;case 35679:case 36299:case 36307:return PN;case 35680:case 36300:case 36308:case 36293:return ON;case 36289:case 36303:case 36311:case 36292:return FN}}class BN{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=vN(n.type)}}class zN{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IN(n.type)}}class VN{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],s)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function Hy(i,t){i.seq.push(t),i.map[t.id]=t}function HN(i,t,n){const s=i.name,o=s.length;for(Jd.lastIndex=0;;){const c=Jd.exec(s),u=Jd.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===o){Hy(n,p===void 0?new BN(h,i,t):new zN(h,i,t));break}else{let v=n.map[h];v===void 0&&(v=new VN(h),Hy(n,v)),n=v}}}class Pu{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const h=t.getActiveUniform(n,u),d=t.getUniformLocation(n,h.name);HN(h,d,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],d=s[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&s.push(u)}return s}}function Gy(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}const GN=37297;let kN=0;function XN(i,t){const n=i.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;s.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return s.join(`
`)}const ky=new de;function WN(i){Te._getMatrix(ky,Te.workingColorSpace,i);const t=`mat3( ${ky.elements.map(n=>n.toFixed(4))} )`;switch(Te.getTransfer(i)){case Hu:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xy(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),c=(i.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+XN(i.getShaderSource(t),h)}else return c}function jN(i,t){const n=WN(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const qN={[OM]:"Linear",[FM]:"Reinhard",[IM]:"Cineon",[BM]:"ACESFilmic",[VM]:"AgX",[HM]:"Neutral",[zM]:"Custom"};function YN(i,t){const n=qN[t];return n===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Eu=new tt;function ZN(){Te.getLuminanceCoefficients(Eu);const i=Eu.x.toFixed(4),t=Eu.y.toFixed(4),n=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KN(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function QN(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function JN(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=i.getActiveAttrib(t,o),u=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:i.getAttribLocation(t,u),locationSize:h}}return n}function Al(i){return i!==""}function Wy(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jy(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $N=/^[ \t]*#include +<([\w\d./]+)>/gm;function _m(i){return i.replace($N,eL)}const tL=new Map;function eL(i,t){let n=pe[t];if(n===void 0){const s=tL.get(t);if(s!==void 0)n=pe[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return _m(n)}const nL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qy(i){return i.replace(nL,iL)}function iL(i,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Yy(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const aL={[Cu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function sL(i){return aL[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rL={[ir]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[qu]:"ENVMAP_TYPE_CUBE_UV"};function oL(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rL[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const lL={[ro]:"ENVMAP_MODE_REFRACTION"};function cL(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lL[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uL={[Jm]:"ENVMAP_BLENDING_MULTIPLY",[JC]:"ENVMAP_BLENDING_MIX",[$C]:"ENVMAP_BLENDING_ADD"};function fL(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":uL[i.combine]||"ENVMAP_BLENDING_NONE"}function hL(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function dL(i,t,n,s){const o=i.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=sL(n),p=oL(n),g=cL(n),v=fL(n),_=hL(n),y=KN(n),b=QN(c),A=o.createProgram();let S,x,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Al).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Al).join(`
`),x.length>0&&(x+=`
`)):(S=[Yy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),x=[Yy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?pe.tonemapping_pars_fragment:"",n.toneMapping!==Ji?YN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,jN("linearToOutputTexel",n.outputColorSpace),ZN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Al).join(`
`)),u=_m(u),u=Wy(u,n),u=jy(u,n),h=_m(h),h=Wy(h,n),h=jy(h,n),u=qy(u),h=qy(h),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===sy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=R+S+u,L=R+x+h,D=Gy(o,o.VERTEX_SHADER,w),O=Gy(o,o.FRAGMENT_SHADER,L);o.attachShader(A,D),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function I(V){if(i.debug.checkShaderErrors){const st=o.getProgramInfoLog(A)||"",at=o.getShaderInfoLog(D)||"",ft=o.getShaderInfoLog(O)||"",lt=st.trim(),k=at.trim(),G=ft.trim();let $=!0,_t=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,A,D,O);else{const P=Xy(o,D,"vertex"),J=Xy(o,O,"fragment");Ue("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+P+`
`+J)}else lt!==""?le("WebGLProgram: Program Info Log:",lt):(k===""||G==="")&&(_t=!1);_t&&(V.diagnostics={runnable:$,programLog:lt,vertexShader:{log:k,prefix:S},fragmentShader:{log:G,prefix:x}})}o.deleteShader(D),o.deleteShader(O),z=new Pu(o,A),T=JN(o,A)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(A,GN)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kN++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=O,this}let pL=0;class mL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new gL(t),n.set(t,s)),s}}class gL{constructor(t){this.id=pL++,this.code=t,this.usedTimes=0}}function vL(i,t,n,s,o,c,u){const h=new tb,d=new mL,p=new Set,g=[],v=new Map,_=o.logarithmicDepthBuffer;let y=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function S(T,C,V,st,at){const ft=st.fog,lt=at.geometry,k=T.isMeshStandardMaterial?st.environment:null,G=(T.isMeshStandardMaterial?n:t).get(T.envMap||k),$=G&&G.mapping===qu?G.image.height:null,_t=b[T.type];T.precision!==null&&(y=o.getMaxPrecision(T.precision),y!==T.precision&&le("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const P=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=P!==void 0?P.length:0;let wt=0;lt.morphAttributes.position!==void 0&&(wt=1),lt.morphAttributes.normal!==void 0&&(wt=2),lt.morphAttributes.color!==void 0&&(wt=3);let Et,Rt,Yt,nt;if(_t){const we=Yi[_t];Et=we.vertexShader,Rt=we.fragmentShader}else Et=T.vertexShader,Rt=T.fragmentShader,d.update(T),Yt=d.getVertexShaderID(T),nt=d.getFragmentShaderID(T);const pt=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),kt=at.isInstancedMesh===!0,Ct=at.isBatchedMesh===!0,ce=!!T.map,We=!!T.matcap,ue=!!G,Se=!!T.aoMap,Re=!!T.lightMap,ae=!!T.bumpMap,je=!!T.normalMap,H=!!T.displacementMap,qe=!!T.emissiveMap,Me=!!T.metalnessMap,Pe=!!T.roughnessMap,qt=T.anisotropy>0,F=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,ht=T.sheen>0,vt=T.transmission>0,ct=qt&&!!T.anisotropyMap,Zt=F&&!!T.clearcoatMap,Ut=F&&!!T.clearcoatNormalMap,Xt=F&&!!T.clearcoatRoughnessMap,ie=q&&!!T.iridescenceMap,St=q&&!!T.iridescenceThicknessMap,Tt=ht&&!!T.sheenColorMap,Ht=ht&&!!T.sheenRoughnessMap,Bt=!!T.specularMap,bt=!!T.specularColorMap,fe=!!T.specularIntensityMap,X=vt&&!!T.transmissionMap,Ot=vt&&!!T.thicknessMap,At=!!T.gradientMap,Ft=!!T.alphaMap,yt=T.alphaTest>0,mt=!!T.alphaHash,Dt=!!T.extensions;let se=Ji;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(se=i.toneMapping);const Fe={shaderID:_t,shaderType:T.type,shaderName:T.name,vertexShader:Et,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Yt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Ct,batchingColor:Ct&&at._colorsTexture!==null,instancing:kt,instancingColor:kt&&at.instanceColor!==null,instancingMorph:kt&&at.morphTexture!==null,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:lo,alphaToCoverage:!!T.alphaToCoverage,map:ce,matcap:We,envMap:ue,envMapMode:ue&&G.mapping,envMapCubeUVHeight:$,aoMap:Se,lightMap:Re,bumpMap:ae,normalMap:je,displacementMap:H,emissiveMap:qe,normalMapObjectSpace:je&&T.normalMapType===n2,normalMapTangentSpace:je&&T.normalMapType===KM,metalnessMap:Me,roughnessMap:Pe,anisotropy:qt,anisotropyMap:ct,clearcoat:F,clearcoatMap:Zt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:q,iridescenceMap:ie,iridescenceThicknessMap:St,sheen:ht,sheenColorMap:Tt,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:bt,specularIntensityMap:fe,transmission:vt,transmissionMap:X,thicknessMap:Ot,gradientMap:At,opaque:T.transparent===!1&&T.blending===eo&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:yt,alphaHash:mt,combine:T.combine,mapUv:ce&&A(T.map.channel),aoMapUv:Se&&A(T.aoMap.channel),lightMapUv:Re&&A(T.lightMap.channel),bumpMapUv:ae&&A(T.bumpMap.channel),normalMapUv:je&&A(T.normalMap.channel),displacementMapUv:H&&A(T.displacementMap.channel),emissiveMapUv:qe&&A(T.emissiveMap.channel),metalnessMapUv:Me&&A(T.metalnessMap.channel),roughnessMapUv:Pe&&A(T.roughnessMap.channel),anisotropyMapUv:ct&&A(T.anisotropyMap.channel),clearcoatMapUv:Zt&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&A(T.sheenRoughnessMap.channel),specularMapUv:Bt&&A(T.specularMap.channel),specularColorMapUv:bt&&A(T.specularColorMap.channel),specularIntensityMapUv:fe&&A(T.specularIntensityMap.channel),transmissionMapUv:X&&A(T.transmissionMap.channel),thicknessMapUv:Ot&&A(T.thicknessMap.channel),alphaMapUv:Ft&&A(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(je||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!lt.attributes.uv&&(ce||Ft),fog:!!ft,useFog:T.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Mt,skinning:at.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:wt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:ce&&T.map.isVideoTexture===!0&&Te.getTransfer(T.map.colorSpace)===Be,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&Te.getTransfer(T.emissiveMap.colorSpace)===Be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wa,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Dt&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&T.extensions.multiDraw===!0||Ct)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function x(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)C.push(V),C.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(R(C,T),w(C,T),C.push(i.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function R(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function w(T,C){h.disableAll(),C.instancing&&h.enable(0),C.instancingColor&&h.enable(1),C.instancingMorph&&h.enable(2),C.matcap&&h.enable(3),C.envMap&&h.enable(4),C.normalMapObjectSpace&&h.enable(5),C.normalMapTangentSpace&&h.enable(6),C.clearcoat&&h.enable(7),C.iridescence&&h.enable(8),C.alphaTest&&h.enable(9),C.vertexColors&&h.enable(10),C.vertexAlphas&&h.enable(11),C.vertexUv1s&&h.enable(12),C.vertexUv2s&&h.enable(13),C.vertexUv3s&&h.enable(14),C.vertexTangents&&h.enable(15),C.anisotropy&&h.enable(16),C.alphaHash&&h.enable(17),C.batching&&h.enable(18),C.dispersion&&h.enable(19),C.batchingColor&&h.enable(20),C.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),T.push(h.mask)}function L(T){const C=b[T.type];let V;if(C){const st=Yi[C];V=D2.clone(st.uniforms)}else V=T.uniforms;return V}function D(T,C){let V=v.get(C);return V!==void 0?++V.usedTimes:(V=new dL(i,C,T,c),g.push(V),v.set(C,V)),V}function O(T){if(--T.usedTimes===0){const C=g.indexOf(T);g[C]=g[g.length-1],g.pop(),v.delete(T.cacheKey),T.destroy()}}function I(T){d.remove(T)}function z(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:L,acquireProgram:D,releaseProgram:O,releaseShaderCache:I,programs:g,dispose:z}}function _L(){let i=new WeakMap;function t(u){return i.has(u)}function n(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function s(u){i.delete(u)}function o(u,h,d){i.get(u)[h]=d}function c(){i=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function xL(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ky(){const i=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function u(v,_,y,b,A,S){let x=i[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:b,renderOrder:v.renderOrder,z:A,group:S},i[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=b,x.renderOrder=v.renderOrder,x.z=A,x.group=S),t++,x}function h(v,_,y,b,A,S){const x=u(v,_,y,b,A,S);y.transmission>0?s.push(x):y.transparent===!0?o.push(x):n.push(x)}function d(v,_,y,b,A,S){const x=u(v,_,y,b,A,S);y.transmission>0?s.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function p(v,_){n.length>1&&n.sort(v||xL),s.length>1&&s.sort(_||Zy),o.length>1&&o.sort(_||Zy)}function g(){for(let v=t,_=i.length;v<_;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:h,unshift:d,finish:g,sort:p}}function yL(){let i=new WeakMap;function t(s,o){const c=i.get(s);let u;return c===void 0?(u=new Ky,i.set(s,[u])):o>=c.length?(u=new Ky,c.push(u)):u=c[o],u}function n(){i=new WeakMap}return{get:t,dispose:n}}function SL(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new tt,color:new Ae};break;case"SpotLight":n={position:new tt,direction:new tt,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new tt,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":n={direction:new tt,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":n={color:new Ae,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return i[t.id]=n,n}}}function ML(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let bL=0;function EL(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function TL(i){const t=new SL,n=ML(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new tt);const o=new tt,c=new $e,u=new $e;function h(p){let g=0,v=0,_=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let y=0,b=0,A=0,S=0,x=0,R=0,w=0,L=0,D=0,O=0,I=0;p.sort(EL);for(let T=0,C=p.length;T<C;T++){const V=p[T],st=V.color,at=V.intensity,ft=V.distance;let lt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===oo?lt=V.shadow.map.texture:lt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=st.r*at,v+=st.g*at,_+=st.b*at;else if(V.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(V.sh.coefficients[k],at);I++}else if(V.isDirectionalLight){const k=t.get(V);if(k.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,$=n.get(V);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,s.directionalShadow[y]=$,s.directionalShadowMap[y]=lt,s.directionalShadowMatrix[y]=V.shadow.matrix,R++}s.directional[y]=k,y++}else if(V.isSpotLight){const k=t.get(V);k.position.setFromMatrixPosition(V.matrixWorld),k.color.copy(st).multiplyScalar(at),k.distance=ft,k.coneCos=Math.cos(V.angle),k.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),k.decay=V.decay,s.spot[A]=k;const G=V.shadow;if(V.map&&(s.spotLightMap[D]=V.map,D++,G.updateMatrices(V),V.castShadow&&O++),s.spotLightMatrix[A]=G.matrix,V.castShadow){const $=n.get(V);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,s.spotShadow[A]=$,s.spotShadowMap[A]=lt,L++}A++}else if(V.isRectAreaLight){const k=t.get(V);k.color.copy(st).multiplyScalar(at),k.halfWidth.set(V.width*.5,0,0),k.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=k,S++}else if(V.isPointLight){const k=t.get(V);if(k.color.copy(V.color).multiplyScalar(V.intensity),k.distance=V.distance,k.decay=V.decay,V.castShadow){const G=V.shadow,$=n.get(V);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,s.pointShadow[b]=$,s.pointShadowMap[b]=lt,s.pointShadowMatrix[b]=V.shadow.matrix,w++}s.point[b]=k,b++}else if(V.isHemisphereLight){const k=t.get(V);k.skyColor.copy(V.color).multiplyScalar(at),k.groundColor.copy(V.groundColor).multiplyScalar(at),s.hemi[x]=k,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const z=s.hash;(z.directionalLength!==y||z.pointLength!==b||z.spotLength!==A||z.rectAreaLength!==S||z.hemiLength!==x||z.numDirectionalShadows!==R||z.numPointShadows!==w||z.numSpotShadows!==L||z.numSpotMaps!==D||z.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=S,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=L+D-O,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=I,z.directionalLength=y,z.pointLength=b,z.spotLength=A,z.rectAreaLength=S,z.hemiLength=x,z.numDirectionalShadows=R,z.numPointShadows=w,z.numSpotShadows=L,z.numSpotMaps=D,z.numLightProbes=I,s.version=bL++)}function d(p,g){let v=0,_=0,y=0,b=0,A=0;const S=g.matrixWorldInverse;for(let x=0,R=p.length;x<R;x++){const w=p[x];if(w.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),v++}else if(w.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(S),y++}else if(w.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),u.identity(),c.copy(w.matrixWorld),c.premultiply(S),u.extractRotation(c),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(w.isPointLight){const L=s.point[_];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(S),_++}else if(w.isHemisphereLight){const L=s.hemi[A];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(S),A++}}}return{setup:h,setupView:d,state:s}}function Qy(i){const t=new TL(i),n=[],s=[];function o(g){p.camera=g,n.length=0,s.length=0}function c(g){n.push(g)}function u(g){s.push(g)}function h(){t.setup(n)}function d(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:u}}function AL(i){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new Qy(i),t.set(o,[h])):c>=u.length?(h=new Qy(i),u.push(h)):h=u[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const RL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CL=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],DL=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],Jy=new $e,Ml=new tt,$d=new tt;function UL(i,t,n){let s=new lg;const o=new Ee,c=new Ee,u=new sn,h=new X2,d=new W2,p={},g=n.maxTextureSize,v={[xs]:ei,[ei]:xs,[wa]:wa},_=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:RL,fragmentShader:wL}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new ni;b.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ia(b,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cu;let x=this.type;this.render=function(O,I,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;O.type===LC&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=Cu);const T=i.getRenderTarget(),C=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),st=i.state;st.setBlending(Ua),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const at=x!==this.type;at&&I.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(lt=>lt.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,lt=O.length;ft<lt;ft++){const k=O[ft],G=k.shadow;if(G===void 0){le("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const $=G.getFrameExtents();if(o.multiply($),c.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/$.x),o.x=c.x*$.x,G.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/$.y),o.y=c.y*$.y,G.mapSize.y=c.y)),G.map===null||at===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Tl){if(k.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new $i(o.x,o.y,{format:oo,type:Pa,minFilter:kn,magFilter:kn,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new zl(o.x,o.y,Zi),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=Oa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On}else{k.isPointLight?(G.map=new lb(o.x),G.map.depthTexture=new H2(o.x,ea)):(G.map=new $i(o.x,o.y),G.map.depthTexture=new zl(o.x,o.y,ea)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=Oa;const P=i.state.buffers.depth.getReversed();this.type===Cu?(G.map.depthTexture.compareFunction=P?rg:sg,G.map.depthTexture.minFilter=kn,G.map.depthTexture.magFilter=kn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=On,G.map.depthTexture.magFilter=On)}G.camera.updateProjectionMatrix()}const _t=G.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<_t;P++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,P),i.clear();else{P===0&&(i.setRenderTarget(G.map),i.clear());const J=G.getViewport(P);u.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),st.viewport(u)}if(k.isPointLight){const J=G.camera,wt=G.matrix,Et=k.distance||J.far;Et!==J.far&&(J.far=Et,J.updateProjectionMatrix()),Ml.setFromMatrixPosition(k.matrixWorld),J.position.copy(Ml),$d.copy(J.position),$d.add(CL[P]),J.up.copy(DL[P]),J.lookAt($d),J.updateMatrixWorld(),wt.makeTranslation(-Ml.x,-Ml.y,-Ml.z),Jy.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Jy,J.coordinateSystem,J.reversedDepth)}else G.updateMatrices(k);s=G.getFrustum(),L(I,z,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===Tl&&R(G,z),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,i.setRenderTarget(T,C,V)};function R(O,I){const z=t.update(A);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new $i(o.x,o.y,{format:oo,type:Pa})),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(I,null,z,_,A,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(I,null,z,y,A,null)}function w(O,I,z,T){let C=null;const V=z.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)C=V;else if(C=z.isPointLight===!0?d:h,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const st=C.uuid,at=I.uuid;let ft=p[st];ft===void 0&&(ft={},p[st]=ft);let lt=ft[at];lt===void 0&&(lt=C.clone(),ft[at]=lt,I.addEventListener("dispose",D)),C=lt}if(C.visible=I.visible,C.wireframe=I.wireframe,T===Tl?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const st=i.properties.get(C);st.light=z}return C}function L(O,I,z,T,C){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Tl)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,O.matrixWorld);const at=t.update(O),ft=O.material;if(Array.isArray(ft)){const lt=at.groups;for(let k=0,G=lt.length;k<G;k++){const $=lt[k],_t=ft[$.materialIndex];if(_t&&_t.visible){const P=w(O,_t,T,C);O.onBeforeShadow(i,O,I,z,at,P,$),i.renderBufferDirect(z,null,at,P,O,$),O.onAfterShadow(i,O,I,z,at,P,$)}}}else if(ft.visible){const lt=w(O,ft,T,C);O.onBeforeShadow(i,O,I,z,at,lt,null),i.renderBufferDirect(z,null,at,lt,O,null),O.onAfterShadow(i,O,I,z,at,lt,null)}}const st=O.children;for(let at=0,ft=st.length;at<ft;at++)L(st[at],I,z,T,C)}function D(O){O.target.removeEventListener("dispose",D);for(const z in p){const T=p[z],C=O.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const NL={[Ap]:Rp,[wp]:Up,[Cp]:Np,[so]:Dp,[Rp]:Ap,[Up]:wp,[Np]:Cp,[Dp]:so};function LL(i,t){function n(){let X=!1;const Ot=new sn;let At=null;const Ft=new sn(0,0,0,0);return{setMask:function(yt){At!==yt&&!X&&(i.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){X=yt},setClear:function(yt,mt,Dt,se,Fe){Fe===!0&&(yt*=se,mt*=se,Dt*=se),Ot.set(yt,mt,Dt,se),Ft.equals(Ot)===!1&&(i.clearColor(yt,mt,Dt,se),Ft.copy(Ot))},reset:function(){X=!1,At=null,Ft.set(-1,0,0,0)}}}function s(){let X=!1,Ot=!1,At=null,Ft=null,yt=null;return{setReversed:function(mt){if(Ot!==mt){const Dt=t.get("EXT_clip_control");mt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),Ot=mt;const se=yt;yt=null,this.setClear(se)}},getReversed:function(){return Ot},setTest:function(mt){mt?pt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(mt){At!==mt&&!X&&(i.depthMask(mt),At=mt)},setFunc:function(mt){if(Ot&&(mt=NL[mt]),Ft!==mt){switch(mt){case Ap:i.depthFunc(i.NEVER);break;case Rp:i.depthFunc(i.ALWAYS);break;case wp:i.depthFunc(i.LESS);break;case so:i.depthFunc(i.LEQUAL);break;case Cp:i.depthFunc(i.EQUAL);break;case Dp:i.depthFunc(i.GEQUAL);break;case Up:i.depthFunc(i.GREATER);break;case Np:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=mt}},setLocked:function(mt){X=mt},setClear:function(mt){yt!==mt&&(Ot&&(mt=1-mt),i.clearDepth(mt),yt=mt)},reset:function(){X=!1,At=null,Ft=null,yt=null,Ot=!1}}}function o(){let X=!1,Ot=null,At=null,Ft=null,yt=null,mt=null,Dt=null,se=null,Fe=null;return{setTest:function(we){X||(we?pt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(we){Ot!==we&&!X&&(i.stencilMask(we),Ot=we)},setFunc:function(we,Qn,Xn){(At!==we||Ft!==Qn||yt!==Xn)&&(i.stencilFunc(we,Qn,Xn),At=we,Ft=Qn,yt=Xn)},setOp:function(we,Qn,Xn){(mt!==we||Dt!==Qn||se!==Xn)&&(i.stencilOp(we,Qn,Xn),mt=we,Dt=Qn,se=Xn)},setLocked:function(we){X=we},setClear:function(we){Fe!==we&&(i.clearStencil(we),Fe=we)},reset:function(){X=!1,Ot=null,At=null,Ft=null,yt=null,mt=null,Dt=null,se=null,Fe=null}}}const c=new n,u=new s,h=new o,d=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,y=[],b=null,A=!1,S=null,x=null,R=null,w=null,L=null,D=null,O=null,I=new Ae(0,0,0),z=0,T=!1,C=null,V=null,st=null,at=null,ft=null;const lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,G=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),k=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=G>=2);let _t=null,P={};const J=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Et=new sn().fromArray(J),Rt=new sn().fromArray(wt);function Yt(X,Ot,At,Ft){const yt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(X,mt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<At;Dt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Ot,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(Ot+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return mt}const nt={};nt[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),pt(i.DEPTH_TEST),u.setFunc(so),ae(!1),je(ty),pt(i.CULL_FACE),Se(Ua);function pt(X){g[X]!==!0&&(i.enable(X),g[X]=!0)}function Mt(X){g[X]!==!1&&(i.disable(X),g[X]=!1)}function kt(X,Ot){return v[X]!==Ot?(i.bindFramebuffer(X,Ot),v[X]=Ot,X===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Ot),X===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Ct(X,Ot){let At=y,Ft=!1;if(X){At=_.get(Ot),At===void 0&&(At=[],_.set(Ot,At));const yt=X.textures;if(At.length!==yt.length||At[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Dt=yt.length;mt<Dt;mt++)At[mt]=i.COLOR_ATTACHMENT0+mt;At.length=yt.length,Ft=!0}}else At[0]!==i.BACK&&(At[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(At)}function ce(X){return b!==X?(i.useProgram(X),b=X,!0):!1}const We={[Ks]:i.FUNC_ADD,[OC]:i.FUNC_SUBTRACT,[FC]:i.FUNC_REVERSE_SUBTRACT};We[IC]=i.MIN,We[BC]=i.MAX;const ue={[zC]:i.ZERO,[VC]:i.ONE,[HC]:i.SRC_COLOR,[Ep]:i.SRC_ALPHA,[qC]:i.SRC_ALPHA_SATURATE,[WC]:i.DST_COLOR,[kC]:i.DST_ALPHA,[GC]:i.ONE_MINUS_SRC_COLOR,[Tp]:i.ONE_MINUS_SRC_ALPHA,[jC]:i.ONE_MINUS_DST_COLOR,[XC]:i.ONE_MINUS_DST_ALPHA,[YC]:i.CONSTANT_COLOR,[ZC]:i.ONE_MINUS_CONSTANT_COLOR,[KC]:i.CONSTANT_ALPHA,[QC]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(X,Ot,At,Ft,yt,mt,Dt,se,Fe,we){if(X===Ua){A===!0&&(Mt(i.BLEND),A=!1);return}if(A===!1&&(pt(i.BLEND),A=!0),X!==PC){if(X!==S||we!==T){if((x!==Ks||L!==Ks)&&(i.blendEquation(i.FUNC_ADD),x=Ks,L=Ks),we)switch(X){case eo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bp:i.blendFunc(i.ONE,i.ONE);break;case ey:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ny:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",X);break}else switch(X){case eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bp:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ey:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ny:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",X);break}R=null,w=null,D=null,O=null,I.set(0,0,0),z=0,S=X,T=we}return}yt=yt||Ot,mt=mt||At,Dt=Dt||Ft,(Ot!==x||yt!==L)&&(i.blendEquationSeparate(We[Ot],We[yt]),x=Ot,L=yt),(At!==R||Ft!==w||mt!==D||Dt!==O)&&(i.blendFuncSeparate(ue[At],ue[Ft],ue[mt],ue[Dt]),R=At,w=Ft,D=mt,O=Dt),(se.equals(I)===!1||Fe!==z)&&(i.blendColor(se.r,se.g,se.b,Fe),I.copy(se),z=Fe),S=X,T=!1}function Re(X,Ot){X.side===wa?Mt(i.CULL_FACE):pt(i.CULL_FACE);let At=X.side===ei;Ot&&(At=!At),ae(At),X.blending===eo&&X.transparent===!1?Se(Ua):Se(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ft=X.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),qe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(X){C!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),C=X)}function je(X){X!==UC?(pt(i.CULL_FACE),X!==V&&(X===ty?i.cullFace(i.BACK):X===NC?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),V=X}function H(X){X!==st&&(k&&i.lineWidth(X),st=X)}function qe(X,Ot,At){X?(pt(i.POLYGON_OFFSET_FILL),(at!==Ot||ft!==At)&&(i.polygonOffset(Ot,At),at=Ot,ft=At)):Mt(i.POLYGON_OFFSET_FILL)}function Me(X){X?pt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Pe(X){X===void 0&&(X=i.TEXTURE0+lt-1),_t!==X&&(i.activeTexture(X),_t=X)}function qt(X,Ot,At){At===void 0&&(_t===null?At=i.TEXTURE0+lt-1:At=_t);let Ft=P[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},P[At]=Ft),(Ft.type!==X||Ft.texture!==Ot)&&(_t!==At&&(i.activeTexture(At),_t=At),i.bindTexture(X,Ot||nt[X]),Ft.type=X,Ft.texture=Ot)}function F(){const X=P[_t];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function ht(){try{i.texSubImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function vt(){try{i.texSubImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Zt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Ut(){try{i.texStorage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Xt(){try{i.texStorage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function ie(){try{i.texImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function St(){try{i.texImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Tt(X){Et.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function Ht(X){Rt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Rt.copy(X))}function Bt(X,Ot){let At=p.get(Ot);At===void 0&&(At=new WeakMap,p.set(Ot,At));let Ft=At.get(X);Ft===void 0&&(Ft=i.getUniformBlockIndex(Ot,X.name),At.set(X,Ft))}function bt(X,Ot){const Ft=p.get(Ot).get(X);d.get(Ot)!==Ft&&(i.uniformBlockBinding(Ot,Ft,X.__bindingPointIndex),d.set(Ot,Ft))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},_t=null,P={},v={},_=new WeakMap,y=[],b=null,A=!1,S=null,x=null,R=null,w=null,L=null,D=null,O=null,I=new Ae(0,0,0),z=0,T=!1,C=null,V=null,st=null,at=null,ft=null,Et.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:pt,disable:Mt,bindFramebuffer:kt,drawBuffers:Ct,useProgram:ce,setBlending:Se,setMaterial:Re,setFlipSided:ae,setCullFace:je,setLineWidth:H,setPolygonOffset:qe,setScissorTest:Me,activeTexture:Pe,bindTexture:qt,unbindTexture:F,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ie,texImage3D:St,updateUBOMapping:Bt,uniformBlockBinding:bt,texStorage2D:Ut,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Zt,scissor:Tt,viewport:Ht,reset:fe}}function PL(i,t,n,s,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ee,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,E){return y?new OffscreenCanvas(F,E):ku("canvas")}function A(F,E,q){let ht=1;const vt=qt(F);if((vt.width>q||vt.height>q)&&(ht=q/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ct=Math.floor(ht*vt.width),Zt=Math.floor(ht*vt.height);v===void 0&&(v=b(ct,Zt));const Ut=E?b(ct,Zt):v;return Ut.width=ct,Ut.height=Zt,Ut.getContext("2d").drawImage(F,0,0,ct,Zt),le("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ct+"x"+Zt+")."),Ut}else return"data"in F&&le("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),F;return F}function S(F){return F.generateMipmaps}function x(F){i.generateMipmap(F)}function R(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(F,E,q,ht,vt=!1){if(F!==null){if(i[F]!==void 0)return i[F];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ct=E;if(E===i.RED&&(q===i.FLOAT&&(ct=i.R32F),q===i.HALF_FLOAT&&(ct=i.R16F),q===i.UNSIGNED_BYTE&&(ct=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.R8UI),q===i.UNSIGNED_SHORT&&(ct=i.R16UI),q===i.UNSIGNED_INT&&(ct=i.R32UI),q===i.BYTE&&(ct=i.R8I),q===i.SHORT&&(ct=i.R16I),q===i.INT&&(ct=i.R32I)),E===i.RG&&(q===i.FLOAT&&(ct=i.RG32F),q===i.HALF_FLOAT&&(ct=i.RG16F),q===i.UNSIGNED_BYTE&&(ct=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RG8UI),q===i.UNSIGNED_SHORT&&(ct=i.RG16UI),q===i.UNSIGNED_INT&&(ct=i.RG32UI),q===i.BYTE&&(ct=i.RG8I),q===i.SHORT&&(ct=i.RG16I),q===i.INT&&(ct=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),q===i.UNSIGNED_INT&&(ct=i.RGB32UI),q===i.BYTE&&(ct=i.RGB8I),q===i.SHORT&&(ct=i.RGB16I),q===i.INT&&(ct=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),q===i.UNSIGNED_INT&&(ct=i.RGBA32UI),q===i.BYTE&&(ct=i.RGBA8I),q===i.SHORT&&(ct=i.RGBA16I),q===i.INT&&(ct=i.RGBA32I)),E===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),E===i.RGBA){const Zt=vt?Hu:Te.getTransfer(ht);q===i.FLOAT&&(ct=i.RGBA32F),q===i.HALF_FLOAT&&(ct=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ct=Zt===Be?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function L(F,E){let q;return F?E===null||E===ea||E===Il?q=i.DEPTH24_STENCIL8:E===Zi?q=i.DEPTH32F_STENCIL8:E===Fl&&(q=i.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ea||E===Il?q=i.DEPTH_COMPONENT24:E===Zi?q=i.DEPTH_COMPONENT32F:E===Fl&&(q=i.DEPTH_COMPONENT16),q}function D(F,E){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==On&&F.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function O(F){const E=F.target;E.removeEventListener("dispose",O),z(E),E.isVideoTexture&&g.delete(E)}function I(F){const E=F.target;E.removeEventListener("dispose",I),C(E)}function z(F){const E=s.get(F);if(E.__webglInit===void 0)return;const q=F.source,ht=_.get(q);if(ht){const vt=ht[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&T(F),Object.keys(ht).length===0&&_.delete(q)}s.remove(F)}function T(F){const E=s.get(F);i.deleteTexture(E.__webglTexture);const q=F.source,ht=_.get(q);delete ht[E.__cacheKey],u.memory.textures--}function C(F){const E=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let vt=0;vt<E.__webglFramebuffer[ht].length;vt++)i.deleteFramebuffer(E.__webglFramebuffer[ht][vt]);else i.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)i.deleteFramebuffer(E.__webglFramebuffer[ht]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=F.textures;for(let ht=0,vt=q.length;ht<vt;ht++){const ct=s.get(q[ht]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),u.memory.textures--),s.remove(q[ht])}s.remove(F)}let V=0;function st(){V=0}function at(){const F=V;return F>=o.maxTextures&&le("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),V+=1,F}function ft(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function lt(F,E){const q=s.get(F);if(F.isVideoTexture&&Me(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&q.__version!==F.version){const ht=F.image;if(ht===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,F,E);return}}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function k(F,E){const q=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){nt(q,F,E);return}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function G(F,E){const q=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){nt(q,F,E);return}n.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function $(F,E){const q=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&q.__version!==F.version){pt(q,F,E);return}n.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const _t={[Op]:i.REPEAT,[Ca]:i.CLAMP_TO_EDGE,[Fp]:i.MIRRORED_REPEAT},P={[On]:i.NEAREST,[t2]:i.NEAREST_MIPMAP_NEAREST,[nu]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[Md]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},J={[i2]:i.NEVER,[l2]:i.ALWAYS,[a2]:i.LESS,[sg]:i.LEQUAL,[s2]:i.EQUAL,[rg]:i.GEQUAL,[r2]:i.GREATER,[o2]:i.NOTEQUAL};function wt(F,E){if(E.type===Zi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===Md||E.magFilter===nu||E.magFilter===tr||E.minFilter===kn||E.minFilter===Md||E.minFilter===nu||E.minFilter===tr)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,_t[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,_t[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,_t[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,P[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,P[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==nu&&E.minFilter!==tr||E.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Et(F,E){let q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",O));const ht=E.source;let vt=_.get(ht);vt===void 0&&(vt={},_.set(ht,vt));const ct=ft(E);if(ct!==F.__cacheKey){vt[ct]===void 0&&(vt[ct]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,q=!0),vt[ct].usedTimes++;const Zt=vt[F.__cacheKey];Zt!==void 0&&(vt[F.__cacheKey].usedTimes--,Zt.usedTimes===0&&T(E)),F.__cacheKey=ct,F.__webglTexture=vt[ct].texture}return q}function Rt(F,E,q){return Math.floor(Math.floor(F/q)/E)}function Yt(F,E,q,ht){const ct=F.updateRanges;if(ct.length===0)n.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,q,ht,E.data);else{ct.sort((St,Tt)=>St.start-Tt.start);let Zt=0;for(let St=1;St<ct.length;St++){const Tt=ct[Zt],Ht=ct[St],Bt=Tt.start+Tt.count,bt=Rt(Ht.start,E.width,4),fe=Rt(Tt.start,E.width,4);Ht.start<=Bt+1&&bt===fe&&Rt(Ht.start+Ht.count-1,E.width,4)===bt?Tt.count=Math.max(Tt.count,Ht.start+Ht.count-Tt.start):(++Zt,ct[Zt]=Ht)}ct.length=Zt+1;const Ut=i.getParameter(i.UNPACK_ROW_LENGTH),Xt=i.getParameter(i.UNPACK_SKIP_PIXELS),ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let St=0,Tt=ct.length;St<Tt;St++){const Ht=ct[St],Bt=Math.floor(Ht.start/4),bt=Math.ceil(Ht.count/4),fe=Bt%E.width,X=Math.floor(Bt/E.width),Ot=bt,At=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),n.texSubImage2D(i.TEXTURE_2D,0,fe,X,Ot,At,q,ht,E.data)}F.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ie)}}function nt(F,E,q){let ht=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=i.TEXTURE_3D);const vt=Et(F,E),ct=E.source;n.bindTexture(ht,F.__webglTexture,i.TEXTURE0+q);const Zt=s.get(ct);if(ct.version!==Zt.__version||vt===!0){n.activeTexture(i.TEXTURE0+q);const Ut=Te.getPrimaries(Te.workingColorSpace),Xt=E.colorSpace===ps?null:Te.getPrimaries(E.colorSpace),ie=E.colorSpace===ps||Ut===Xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let St=A(E.image,!1,o.maxTextureSize);St=Pe(E,St);const Tt=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let Bt=w(E.internalFormat,Tt,Ht,E.colorSpace,E.isVideoTexture);wt(ht,E);let bt;const fe=E.mipmaps,X=E.isVideoTexture!==!0,Ot=Zt.__version===void 0||vt===!0,At=ct.dataReady,Ft=D(E,St);if(E.isDepthTexture)Bt=L(E.format===er,E.type),Ot&&(X?n.texStorage2D(i.TEXTURE_2D,1,Bt,St.width,St.height):n.texImage2D(i.TEXTURE_2D,0,Bt,St.width,St.height,0,Tt,Ht,null));else if(E.isDataTexture)if(fe.length>0){X&&Ot&&n.texStorage2D(i.TEXTURE_2D,Ft,Bt,fe[0].width,fe[0].height);for(let yt=0,mt=fe.length;yt<mt;yt++)bt=fe[yt],X?At&&n.texSubImage2D(i.TEXTURE_2D,yt,0,0,bt.width,bt.height,Tt,Ht,bt.data):n.texImage2D(i.TEXTURE_2D,yt,Bt,bt.width,bt.height,0,Tt,Ht,bt.data);E.generateMipmaps=!1}else X?(Ot&&n.texStorage2D(i.TEXTURE_2D,Ft,Bt,St.width,St.height),At&&Yt(E,St,Tt,Ht)):n.texImage2D(i.TEXTURE_2D,0,Bt,St.width,St.height,0,Tt,Ht,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ot&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Bt,fe[0].width,fe[0].height,St.depth);for(let yt=0,mt=fe.length;yt<mt;yt++)if(bt=fe[yt],E.format!==Vi)if(Tt!==null)if(X){if(At)if(E.layerUpdates.size>0){const Dt=Cy(bt.width,bt.height,E.format,E.type);for(const se of E.layerUpdates){const Fe=bt.data.subarray(se*Dt/bt.data.BYTES_PER_ELEMENT,(se+1)*Dt/bt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,se,bt.width,bt.height,1,Tt,Fe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,bt.width,bt.height,St.depth,Tt,bt.data)}else n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,Bt,bt.width,bt.height,St.depth,0,bt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?At&&n.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,bt.width,bt.height,St.depth,Tt,Ht,bt.data):n.texImage3D(i.TEXTURE_2D_ARRAY,yt,Bt,bt.width,bt.height,St.depth,0,Tt,Ht,bt.data)}else{X&&Ot&&n.texStorage2D(i.TEXTURE_2D,Ft,Bt,fe[0].width,fe[0].height);for(let yt=0,mt=fe.length;yt<mt;yt++)bt=fe[yt],E.format!==Vi?Tt!==null?X?At&&n.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,bt.width,bt.height,Tt,bt.data):n.compressedTexImage2D(i.TEXTURE_2D,yt,Bt,bt.width,bt.height,0,bt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?At&&n.texSubImage2D(i.TEXTURE_2D,yt,0,0,bt.width,bt.height,Tt,Ht,bt.data):n.texImage2D(i.TEXTURE_2D,yt,Bt,bt.width,bt.height,0,Tt,Ht,bt.data)}else if(E.isDataArrayTexture)if(X){if(Ot&&n.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,Bt,St.width,St.height,St.depth),At)if(E.layerUpdates.size>0){const yt=Cy(St.width,St.height,E.format,E.type);for(const mt of E.layerUpdates){const Dt=St.data.subarray(mt*yt/St.data.BYTES_PER_ELEMENT,(mt+1)*yt/St.data.BYTES_PER_ELEMENT);n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,St.width,St.height,1,Tt,Ht,Dt)}E.clearLayerUpdates()}else n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Tt,Ht,St.data)}else n.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,St.width,St.height,St.depth,0,Tt,Ht,St.data);else if(E.isData3DTexture)X?(Ot&&n.texStorage3D(i.TEXTURE_3D,Ft,Bt,St.width,St.height,St.depth),At&&n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Tt,Ht,St.data)):n.texImage3D(i.TEXTURE_3D,0,Bt,St.width,St.height,St.depth,0,Tt,Ht,St.data);else if(E.isFramebufferTexture){if(Ot)if(X)n.texStorage2D(i.TEXTURE_2D,Ft,Bt,St.width,St.height);else{let yt=St.width,mt=St.height;for(let Dt=0;Dt<Ft;Dt++)n.texImage2D(i.TEXTURE_2D,Dt,Bt,yt,mt,0,Tt,Ht,null),yt>>=1,mt>>=1}}else if(fe.length>0){if(X&&Ot){const yt=qt(fe[0]);n.texStorage2D(i.TEXTURE_2D,Ft,Bt,yt.width,yt.height)}for(let yt=0,mt=fe.length;yt<mt;yt++)bt=fe[yt],X?At&&n.texSubImage2D(i.TEXTURE_2D,yt,0,0,Tt,Ht,bt):n.texImage2D(i.TEXTURE_2D,yt,Bt,Tt,Ht,bt);E.generateMipmaps=!1}else if(X){if(Ot){const yt=qt(St);n.texStorage2D(i.TEXTURE_2D,Ft,Bt,yt.width,yt.height)}At&&n.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Ht,St)}else n.texImage2D(i.TEXTURE_2D,0,Bt,Tt,Ht,St);S(E)&&x(ht),Zt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function pt(F,E,q){if(E.image.length!==6)return;const ht=Et(F,E),vt=E.source;n.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+q);const ct=s.get(vt);if(vt.version!==ct.__version||ht===!0){n.activeTexture(i.TEXTURE0+q);const Zt=Te.getPrimaries(Te.workingColorSpace),Ut=E.colorSpace===ps?null:Te.getPrimaries(E.colorSpace),Xt=E.colorSpace===ps||Zt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ie=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let mt=0;mt<6;mt++)!ie&&!St?Tt[mt]=A(E.image[mt],!0,o.maxCubemapSize):Tt[mt]=St?E.image[mt].image:E.image[mt],Tt[mt]=Pe(E,Tt[mt]);const Ht=Tt[0],Bt=c.convert(E.format,E.colorSpace),bt=c.convert(E.type),fe=w(E.internalFormat,Bt,bt,E.colorSpace),X=E.isVideoTexture!==!0,Ot=ct.__version===void 0||ht===!0,At=vt.dataReady;let Ft=D(E,Ht);wt(i.TEXTURE_CUBE_MAP,E);let yt;if(ie){X&&Ot&&n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,fe,Ht.width,Ht.height);for(let mt=0;mt<6;mt++){yt=Tt[mt].mipmaps;for(let Dt=0;Dt<yt.length;Dt++){const se=yt[Dt];E.format!==Vi?Bt!==null?X?At&&n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Dt,0,0,se.width,se.height,Bt,se.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Dt,fe,se.width,se.height,0,se.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Dt,0,0,se.width,se.height,Bt,bt,se.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Dt,fe,se.width,se.height,0,Bt,bt,se.data)}}}else{if(yt=E.mipmaps,X&&Ot){yt.length>0&&Ft++;const mt=qt(Tt[0]);n.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,fe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(St){X?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Tt[mt].width,Tt[mt].height,Bt,bt,Tt[mt].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,fe,Tt[mt].width,Tt[mt].height,0,Bt,bt,Tt[mt].data);for(let Dt=0;Dt<yt.length;Dt++){const Fe=yt[Dt].image[mt].image;X?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Dt+1,0,0,Fe.width,Fe.height,Bt,bt,Fe.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Dt+1,fe,Fe.width,Fe.height,0,Bt,bt,Fe.data)}}else{X?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Bt,bt,Tt[mt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,fe,Bt,bt,Tt[mt]);for(let Dt=0;Dt<yt.length;Dt++){const se=yt[Dt];X?At&&n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Dt+1,0,0,Bt,bt,se.image[mt]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Dt+1,fe,Bt,bt,se.image[mt])}}}S(E)&&x(i.TEXTURE_CUBE_MAP),ct.__version=vt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Mt(F,E,q,ht,vt,ct){const Zt=c.convert(q.format,q.colorSpace),Ut=c.convert(q.type),Xt=w(q.internalFormat,Zt,Ut,q.colorSpace),ie=s.get(E),St=s.get(q);if(St.__renderTarget=E,!ie.__hasExternalTextures){const Tt=Math.max(1,E.width>>ct),Ht=Math.max(1,E.height>>ct);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?n.texImage3D(vt,ct,Xt,Tt,Ht,E.depth,0,Zt,Ut,null):n.texImage2D(vt,ct,Xt,Tt,Ht,0,Zt,Ut,null)}n.bindFramebuffer(i.FRAMEBUFFER,F),qe(E)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,vt,St.__webglTexture,0,H(E)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,vt,St.__webglTexture,ct),n.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(F,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){const ht=E.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,ct=L(E.stencilBuffer,vt),Zt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qe(E)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H(E),ct,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,H(E),ct,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ct,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Zt,i.RENDERBUFFER,F)}else{const ht=E.textures;for(let vt=0;vt<ht.length;vt++){const ct=ht[vt],Zt=c.convert(ct.format,ct.colorSpace),Ut=c.convert(ct.type),Xt=w(ct.internalFormat,Zt,Ut,ct.colorSpace);qe(E)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H(E),Xt,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,H(E),Xt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Xt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(F,E,q){const ht=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),vt.__webglTexture===void 0){vt.__webglTexture=i.createTexture(),n.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),wt(i.TEXTURE_CUBE_MAP,E.depthTexture);const ie=c.convert(E.depthTexture.format),St=c.convert(E.depthTexture.type);let Tt;E.depthTexture.format===Oa?Tt=i.DEPTH_COMPONENT24:E.depthTexture.format===er&&(Tt=i.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Tt,E.width,E.height,0,ie,St,null)}}else lt(E.depthTexture,0);const ct=vt.__webglTexture,Zt=H(E),Ut=ht?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Xt=E.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oa)qe(E)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Xt,Ut,ct,0,Zt):i.framebufferTexture2D(i.FRAMEBUFFER,Xt,Ut,ct,0);else if(E.depthTexture.format===er)qe(E)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Xt,Ut,ct,0,Zt):i.framebufferTexture2D(i.FRAMEBUFFER,Xt,Ut,ct,0);else throw new Error("Unknown depthTexture format")}function ce(F){const E=s.get(F),q=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const ht=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ht}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ht=0;ht<6;ht++)Ct(E.__webglFramebuffer[ht],F,ht);else{const ht=F.texture.mipmaps;ht&&ht.length>0?Ct(E.__webglFramebuffer[0],F,0):Ct(E.__webglFramebuffer,F,0)}else if(q){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=i.createRenderbuffer(),kt(E.__webglDepthbuffer[ht],F,!1);else{const vt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,ct)}}else{const ht=F.texture.mipmaps;if(ht&&ht.length>0?n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),kt(E.__webglDepthbuffer,F,!1);else{const vt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,ct)}}n.bindFramebuffer(i.FRAMEBUFFER,null)}function We(F,E,q){const ht=s.get(F);E!==void 0&&Mt(ht.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ce(F)}function ue(F){const E=F.texture,q=s.get(F),ht=s.get(E);F.addEventListener("dispose",I);const vt=F.textures,ct=F.isWebGLCubeRenderTarget===!0,Zt=vt.length>1;if(Zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=E.version,u.memory.textures++),ct){q.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ut]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)q.__webglFramebuffer[Ut][Xt]=i.createFramebuffer()}else q.__webglFramebuffer[Ut]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)q.__webglFramebuffer[Ut]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Zt)for(let Ut=0,Xt=vt.length;Ut<Xt;Ut++){const ie=s.get(vt[Ut]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),u.memory.textures++)}if(F.samples>0&&qe(F)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Xt=vt[Ut];q.__webglColorRenderbuffer[Ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ut]);const ie=c.convert(Xt.format,Xt.colorSpace),St=c.convert(Xt.type),Tt=w(Xt.internalFormat,ie,St,Xt.colorSpace,F.isXRRenderTarget===!0),Ht=H(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Tt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){n.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),wt(i.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Mt(q.__webglFramebuffer[Ut][Xt],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Xt);else Mt(q.__webglFramebuffer[Ut],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(E)&&x(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Ut=0,Xt=vt.length;Ut<Xt;Ut++){const ie=vt[Ut],St=s.get(ie);let Tt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Tt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Tt,St.__webglTexture),wt(Tt,ie),Mt(q.__webglFramebuffer,F,ie,i.COLOR_ATTACHMENT0+Ut,Tt,0),S(ie)&&x(Tt)}n.unbindTexture()}else{let Ut=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ut=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),n.bindTexture(Ut,ht.__webglTexture),wt(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Mt(q.__webglFramebuffer[Xt],F,E,i.COLOR_ATTACHMENT0,Ut,Xt);else Mt(q.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,Ut,0);S(E)&&x(Ut),n.unbindTexture()}F.depthBuffer&&ce(F)}function Se(F){const E=F.textures;for(let q=0,ht=E.length;q<ht;q++){const vt=E[q];if(S(vt)){const ct=R(F),Zt=s.get(vt).__webglTexture;n.bindTexture(ct,Zt),x(ct),n.unbindTexture()}}}const Re=[],ae=[];function je(F){if(F.samples>0){if(qe(F)===!1){const E=F.textures,q=F.width,ht=F.height;let vt=i.COLOR_BUFFER_BIT;const ct=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Zt=s.get(F),Ut=E.length>1;if(Ut)for(let ie=0;ie<E.length;ie++)n.bindFramebuffer(i.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,Zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=F.texture.mipmaps;Xt&&Xt.length>0?n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),Ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const St=s.get(E[ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,q,ht,0,0,q,ht,vt,i.NEAREST),d===!0&&(Re.length=0,ae.length=0,Re.push(i.COLOR_ATTACHMENT0+ie),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Re.push(ct),ae.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ut)for(let ie=0;ie<E.length;ie++){n.bindFramebuffer(i.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const St=s.get(E[ie]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,Zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,St,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&d){const E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function H(F){return Math.min(o.maxSamples,F.samples)}function qe(F){const E=s.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(F){const E=u.render.frame;g.get(F)!==E&&(g.set(F,E),F.update())}function Pe(F,E){const q=F.colorSpace,ht=F.format,vt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||q!==lo&&q!==ps&&(Te.getTransfer(q)===Be?(ht!==Vi||vt!==ui)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",q)),E}function qt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=st,this.setTexture2D=lt,this.setTexture2DArray=k,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=We,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function OL(i,t){function n(s,o=ps){let c;const u=Te.getTransfer(o);if(s===ui)return i.UNSIGNED_BYTE;if(s===tg)return i.UNSIGNED_SHORT_4_4_4_4;if(s===eg)return i.UNSIGNED_SHORT_5_5_5_1;if(s===WM)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===jM)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===kM)return i.BYTE;if(s===XM)return i.SHORT;if(s===Fl)return i.UNSIGNED_SHORT;if(s===$m)return i.INT;if(s===ea)return i.UNSIGNED_INT;if(s===Zi)return i.FLOAT;if(s===Pa)return i.HALF_FLOAT;if(s===qM)return i.ALPHA;if(s===YM)return i.RGB;if(s===Vi)return i.RGBA;if(s===Oa)return i.DEPTH_COMPONENT;if(s===er)return i.DEPTH_STENCIL;if(s===ZM)return i.RED;if(s===ng)return i.RED_INTEGER;if(s===oo)return i.RG;if(s===ig)return i.RG_INTEGER;if(s===ag)return i.RGBA_INTEGER;if(s===Du||s===Uu||s===Nu||s===Lu)if(u===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Du)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Du)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ip||s===Bp||s===zp||s===Vp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ip)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hp||s===Gp||s===kp||s===Xp||s===Wp||s===jp||s===qp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Hp||s===Gp)return u===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===kp)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Xp)return c.COMPRESSED_R11_EAC;if(s===Wp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===jp)return c.COMPRESSED_RG11_EAC;if(s===qp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Yp||s===Zp||s===Kp||s===Qp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Yp)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zp)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kp)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qp)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jp)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$p)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tm)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===em)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nm)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===im)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===am)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sm)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rm)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===om)return u===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lm||s===cm||s===um)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===lm)return u===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===um)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fm||s===hm||s===dm||s===pm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===fm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===hm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Il?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:n}}const FL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new ub(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new aa({vertexShader:FL,fragmentShader:IL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ia(new Ku(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zL extends po{constructor(t,n){super();const s=this;let o=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,v=null,_=null,y=null,b=null;const A=typeof XRWebGLBinding<"u",S=new BL,x={},R=n.getContextAttributes();let w=null,L=null;const D=[],O=[],I=new Ee;let z=null;const T=new Ti;T.viewport=new sn;const C=new Ti;C.viewport=new sn;const V=[T,C],st=new Z2;let at=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let pt=D[nt];return pt===void 0&&(pt=new Wd,D[nt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let pt=D[nt];return pt===void 0&&(pt=new Wd,D[nt]=pt),pt.getGripSpace()},this.getHand=function(nt){let pt=D[nt];return pt===void 0&&(pt=new Wd,D[nt]=pt),pt.getHandSpace()};function lt(nt){const pt=O.indexOf(nt.inputSource);if(pt===-1)return;const Mt=D[pt];Mt!==void 0&&(Mt.update(nt.inputSource,nt.frame,p||u),Mt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function k(){o.removeEventListener("select",lt),o.removeEventListener("selectstart",lt),o.removeEventListener("selectend",lt),o.removeEventListener("squeeze",lt),o.removeEventListener("squeezestart",lt),o.removeEventListener("squeezeend",lt),o.removeEventListener("end",k),o.removeEventListener("inputsourceschange",G);for(let nt=0;nt<D.length;nt++){const pt=O[nt];pt!==null&&(O[nt]=null,D[nt].disconnect(pt))}at=null,ft=null,S.reset();for(const nt in x)delete x[nt];t.setRenderTarget(w),y=null,_=null,v=null,o=null,L=null,Yt.stop(),s.isPresenting=!1,t.setPixelRatio(z),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(nt){if(o=nt,o!==null){if(w=t.getRenderTarget(),o.addEventListener("select",lt),o.addEventListener("selectstart",lt),o.addEventListener("selectend",lt),o.addEventListener("squeeze",lt),o.addEventListener("squeezestart",lt),o.addEventListener("squeezeend",lt),o.addEventListener("end",k),o.addEventListener("inputsourceschange",G),R.xrCompatible!==!0&&await n.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,kt=null,Ct=null;R.depth&&(Ct=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=R.stencil?er:Oa,kt=R.stencil?Il:ea);const ce={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(ce),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),L=new $i(_.textureWidth,_.textureHeight,{format:Vi,type:ui,depthTexture:new zl(_.textureWidth,_.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Mt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Mt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new $i(y.framebufferWidth,y.framebufferHeight,{format:Vi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(h),Yt.setContext(o),Yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(nt){for(let pt=0;pt<nt.removed.length;pt++){const Mt=nt.removed[pt],kt=O.indexOf(Mt);kt>=0&&(O[kt]=null,D[kt].disconnect(Mt))}for(let pt=0;pt<nt.added.length;pt++){const Mt=nt.added[pt];let kt=O.indexOf(Mt);if(kt===-1){for(let ce=0;ce<D.length;ce++)if(ce>=O.length){O.push(Mt),kt=ce;break}else if(O[ce]===null){O[ce]=Mt,kt=ce;break}if(kt===-1)break}const Ct=D[kt];Ct&&Ct.connect(Mt)}}const $=new tt,_t=new tt;function P(nt,pt,Mt){$.setFromMatrixPosition(pt.matrixWorld),_t.setFromMatrixPosition(Mt.matrixWorld);const kt=$.distanceTo(_t),Ct=pt.projectionMatrix.elements,ce=Mt.projectionMatrix.elements,We=Ct[14]/(Ct[10]-1),ue=Ct[14]/(Ct[10]+1),Se=(Ct[9]+1)/Ct[5],Re=(Ct[9]-1)/Ct[5],ae=(Ct[8]-1)/Ct[0],je=(ce[8]+1)/ce[0],H=We*ae,qe=We*je,Me=kt/(-ae+je),Pe=Me*-ae;if(pt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Pe),nt.translateZ(Me),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ct[10]===-1)nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const qt=We+Me,F=ue+Me,E=H-Pe,q=qe+(kt-Pe),ht=Se*ue/F*qt,vt=Re*ue/F*qt;nt.projectionMatrix.makePerspective(E,q,ht,vt,qt,F),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function J(nt,pt){pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(o===null)return;let pt=nt.near,Mt=nt.far;S.texture!==null&&(S.depthNear>0&&(pt=S.depthNear),S.depthFar>0&&(Mt=S.depthFar)),st.near=C.near=T.near=pt,st.far=C.far=T.far=Mt,(at!==st.near||ft!==st.far)&&(o.updateRenderState({depthNear:st.near,depthFar:st.far}),at=st.near,ft=st.far),st.layers.mask=nt.layers.mask|6,T.layers.mask=st.layers.mask&3,C.layers.mask=st.layers.mask&5;const kt=nt.parent,Ct=st.cameras;J(st,kt);for(let ce=0;ce<Ct.length;ce++)J(Ct[ce],kt);Ct.length===2?P(st,T,C):st.projectionMatrix.copy(T.projectionMatrix),wt(nt,st,kt)};function wt(nt,pt,Mt){Mt===null?nt.matrix.copy(pt.matrixWorld):(nt.matrix.copy(Mt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=mm*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(nt){d=nt,_!==null&&(_.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(st)},this.getCameraTexture=function(nt){return x[nt]};let Et=null;function Rt(nt,pt){if(g=pt.getViewerPose(p||u),b=pt,g!==null){const Mt=g.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let kt=!1;Mt.length!==st.cameras.length&&(st.cameras.length=0,kt=!0);for(let ue=0;ue<Mt.length;ue++){const Se=Mt[ue];let Re=null;if(y!==null)Re=y.getViewport(Se);else{const je=v.getViewSubImage(_,Se);Re=je.viewport,ue===0&&(t.setRenderTargetTextures(L,je.colorTexture,je.depthStencilTexture),t.setRenderTarget(L))}let ae=V[ue];ae===void 0&&(ae=new Ti,ae.layers.enable(ue),ae.viewport=new sn,V[ue]=ae),ae.matrix.fromArray(Se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),ue===0&&(st.matrix.copy(ae.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),kt===!0&&st.cameras.push(ae)}const Ct=o.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=s.getBinding();const ue=v.getDepthInformation(Mt[0]);ue&&ue.isValid&&ue.texture&&S.init(ue,o.renderState)}if(Ct&&Ct.includes("camera-access")&&A){t.state.unbindTexture(),v=s.getBinding();for(let ue=0;ue<Mt.length;ue++){const Se=Mt[ue].camera;if(Se){let Re=x[Se];Re||(Re=new ub,x[Se]=Re);const ae=v.getCameraImage(Se);Re.sourceTexture=ae}}}}for(let Mt=0;Mt<D.length;Mt++){const kt=O[Mt],Ct=D[Mt];kt!==null&&Ct!==void 0&&Ct.update(kt,pt,p||u)}Et&&Et(nt,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),b=null}const Yt=new hb;Yt.setAnimationLoop(Rt),this.setAnimationLoop=function(nt){Et=nt},this.dispose=function(){}}}const qs=new na,VL=new $e;function HL(i,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,sb(i)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,R,w,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),v(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,L)):x.isMeshMatcapMaterial?(c(S,x),b(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),A(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?d(S,x,R,w):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ei&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ei&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=t.get(x),w=R.envMap,L=R.envMapRotation;w&&(S.envMap.value=w,qs.copy(L),qs.x*=-1,qs.y*=-1,qs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),S.envMapRotation.value.setFromMatrix4(VL.makeRotationFromEuler(qs)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,R,w){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=w*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ei&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const R=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function GL(i,t,n,s){let o={},c={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,w){const L=w.program;s.uniformBlockBinding(R,L)}function p(R,w){let L=o[R.id];L===void 0&&(b(R),L=g(R),o[R.id]=L,R.addEventListener("dispose",S));const D=w.program;s.updateUBOMapping(R,D);const O=t.render.frame;c[R.id]!==O&&(_(R),c[R.id]=O)}function g(R){const w=v();R.__bindingPointIndex=w;const L=i.createBuffer(),D=R.__size,O=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,D,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,L),L}function v(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const w=o[R.id],L=R.uniforms,D=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let O=0,I=L.length;O<I;O++){const z=Array.isArray(L[O])?L[O]:[L[O]];for(let T=0,C=z.length;T<C;T++){const V=z[T];if(y(V,O,T,D)===!0){const st=V.__offset,at=Array.isArray(V.value)?V.value:[V.value];let ft=0;for(let lt=0;lt<at.length;lt++){const k=at[lt],G=A(k);typeof k=="number"||typeof k=="boolean"?(V.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,st+ft,V.__data)):k.isMatrix3?(V.__data[0]=k.elements[0],V.__data[1]=k.elements[1],V.__data[2]=k.elements[2],V.__data[3]=0,V.__data[4]=k.elements[3],V.__data[5]=k.elements[4],V.__data[6]=k.elements[5],V.__data[7]=0,V.__data[8]=k.elements[6],V.__data[9]=k.elements[7],V.__data[10]=k.elements[8],V.__data[11]=0):(k.toArray(V.__data,ft),ft+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,st,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(R,w,L,D){const O=R.value,I=w+"_"+L;if(D[I]===void 0)return typeof O=="number"||typeof O=="boolean"?D[I]=O:D[I]=O.clone(),!0;{const z=D[I];if(typeof O=="number"||typeof O=="boolean"){if(z!==O)return D[I]=O,!0}else if(z.equals(O)===!1)return z.copy(O),!0}return!1}function b(R){const w=R.uniforms;let L=0;const D=16;for(let I=0,z=w.length;I<z;I++){const T=Array.isArray(w[I])?w[I]:[w[I]];for(let C=0,V=T.length;C<V;C++){const st=T[C],at=Array.isArray(st.value)?st.value:[st.value];for(let ft=0,lt=at.length;ft<lt;ft++){const k=at[ft],G=A(k),$=L%D,_t=$%G.boundary,P=$+_t;L+=_t,P!==0&&D-P<G.storage&&(L+=D-P),st.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=L,L+=G.storage}}}const O=L%D;return O>0&&(L+=D-O),R.__size=L,R.__cache={},this}function A(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",R),w}function S(R){const w=R.target;w.removeEventListener("dispose",S);const L=u.indexOf(w.__bindingPointIndex);u.splice(L,1),i.deleteBuffer(o[w.id]),delete o[w.id],delete c[w.id]}function x(){for(const R in o)i.deleteBuffer(o[R]);u=[],o={},c={}}return{bind:d,update:p,dispose:x}}const kL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function XL(){return qi===null&&(qi=new F2(kL,16,16,oo,Pa),qi.name="DFG_LUT",qi.minFilter=kn,qi.magFilter=kn,qi.wrapS=Ca,qi.wrapT=Ca,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class WL{constructor(t={}){const{canvas:n=c2(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:y=ui}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=u;const A=y,S=new Set([ag,ig,ng]),x=new Set([ui,ea,Fl,Il,tg,eg]),R=new Uint32Array(4),w=new Int32Array(4);let L=null,D=null;const O=[],I=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=Ei;let V=0,st=0,at=null,ft=-1,lt=null;const k=new sn,G=new sn;let $=null;const _t=new Ae(0);let P=0,J=n.width,wt=n.height,Et=1,Rt=null,Yt=null;const nt=new sn(0,0,J,wt),pt=new sn(0,0,J,wt);let Mt=!1;const kt=new lg;let Ct=!1,ce=!1;const We=new $e,ue=new tt,Se=new sn,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function je(){return at===null?Et:1}let H=s;function qe(N,Y){return n.getContext(N,Y)}try{const N={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qm}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",we,!1),H===null){const Y="webgl2";if(H=qe(Y,N),H===null)throw qe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Ue("WebGLRenderer: "+N.message),N}let Me,Pe,qt,F,E,q,ht,vt,ct,Zt,Ut,Xt,ie,St,Tt,Ht,Bt,bt,fe,X,Ot,At,Ft,yt;function mt(){Me=new XU(H),Me.init(),At=new OL(H,Me),Pe=new OU(H,Me,t,At),qt=new LL(H,Me),Pe.reversedDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),F=new qU(H),E=new _L,q=new PL(H,Me,qt,E,Pe,At,F),ht=new IU(T),vt=new kU(T),ct=new Q2(H),Ft=new LU(H,ct),Zt=new WU(H,ct,F,Ft),Ut=new ZU(H,Zt,ct,F),fe=new YU(H,Pe,q),Ht=new FU(E),Xt=new vL(T,ht,vt,Me,Pe,Ft,Ht),ie=new HL(T,E),St=new yL,Tt=new AL(Me),bt=new NU(T,ht,vt,qt,Ut,b,d),Bt=new UL(T,Ut,Pe),yt=new GL(H,F,Pe,qt),X=new PU(H,Me,F),Ot=new jU(H,Me,F),F.programs=Xt.programs,T.capabilities=Pe,T.extensions=Me,T.properties=E,T.renderLists=St,T.shadowMap=Bt,T.state=qt,T.info=F}mt(),A!==ui&&(z=new QU(A,n.width,n.height,o,c));const Dt=new zL(T,H);this.xr=Dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const N=Me.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Me.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(N){N!==void 0&&(Et=N,this.setSize(J,wt,!1))},this.getSize=function(N){return N.set(J,wt)},this.setSize=function(N,Y,ot=!0){if(Dt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}J=N,wt=Y,n.width=Math.floor(N*Et),n.height=Math.floor(Y*Et),ot===!0&&(n.style.width=N+"px",n.style.height=Y+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(J*Et,wt*Et).floor()},this.setDrawingBufferSize=function(N,Y,ot){J=N,wt=Y,Et=ot,n.width=Math.floor(N*ot),n.height=Math.floor(Y*ot),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(A===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(k)},this.getViewport=function(N){return N.copy(nt)},this.setViewport=function(N,Y,ot,it){N.isVector4?nt.set(N.x,N.y,N.z,N.w):nt.set(N,Y,ot,it),qt.viewport(k.copy(nt).multiplyScalar(Et).round())},this.getScissor=function(N){return N.copy(pt)},this.setScissor=function(N,Y,ot,it){N.isVector4?pt.set(N.x,N.y,N.z,N.w):pt.set(N,Y,ot,it),qt.scissor(G.copy(pt).multiplyScalar(Et).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(N){qt.setScissorTest(Mt=N)},this.setOpaqueSort=function(N){Rt=N},this.setTransparentSort=function(N){Yt=N},this.getClearColor=function(N){return N.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,ot=!0){let it=0;if(N){let Q=!1;if(at!==null){const Nt=at.texture.format;Q=S.has(Nt)}if(Q){const Nt=at.texture.type,It=x.has(Nt),Lt=bt.getClearColor(),Vt=bt.getClearAlpha(),Wt=Lt.r,$t=Lt.g,jt=Lt.b;It?(R[0]=Wt,R[1]=$t,R[2]=jt,R[3]=Vt,H.clearBufferuiv(H.COLOR,0,R)):(w[0]=Wt,w[1]=$t,w[2]=jt,w[3]=Vt,H.clearBufferiv(H.COLOR,0,w))}else it|=H.COLOR_BUFFER_BIT}Y&&(it|=H.DEPTH_BUFFER_BIT),ot&&(it|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",we,!1),bt.dispose(),St.dispose(),Tt.dispose(),E.dispose(),ht.dispose(),vt.dispose(),Ut.dispose(),Ft.dispose(),yt.dispose(),Xt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",xo),Dt.removeEventListener("sessionend",Yl),In.stop()};function se(N){N.preventDefault(),oy("WebGLRenderer: Context Lost."),C=!0}function Fe(){oy("WebGLRenderer: Context Restored."),C=!1;const N=F.autoReset,Y=Bt.enabled,ot=Bt.autoUpdate,it=Bt.needsUpdate,Q=Bt.type;mt(),F.autoReset=N,Bt.enabled=Y,Bt.autoUpdate=ot,Bt.needsUpdate=it,Bt.type=Q}function we(N){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Qn(N){const Y=N.target;Y.removeEventListener("dispose",Qn),Xn(Y)}function Xn(N){$u(N),E.remove(N)}function $u(N){const Y=E.get(N).programs;Y!==void 0&&(Y.forEach(function(ot){Xt.releaseProgram(ot)}),N.isShaderMaterial&&Xt.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,ot,it,Q,Nt){Y===null&&(Y=Re);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,Lt=So(N,Y,ot,it,Q);qt.setMaterial(it,It);let Vt=ot.index,Wt=1;if(it.wireframe===!0){if(Vt=Zt.getWireframeAttribute(ot),Vt===void 0)return;Wt=2}const $t=ot.drawRange,jt=ot.attributes.position;let ee=$t.start*Wt,Ne=($t.start+$t.count)*Wt;Nt!==null&&(ee=Math.max(ee,Nt.start*Wt),Ne=Math.min(Ne,(Nt.start+Nt.count)*Wt)),Vt!==null?(ee=Math.max(ee,0),Ne=Math.min(Ne,Vt.count)):jt!=null&&(ee=Math.max(ee,0),Ne=Math.min(Ne,jt.count));const Ye=Ne-ee;if(Ye<0||Ye===1/0)return;Ft.setup(Q,it,Lt,ot,Vt);let He,Oe=X;if(Vt!==null&&(He=ct.get(Vt),Oe=Ot,Oe.setIndex(He)),Q.isMesh)it.wireframe===!0?(qt.setLineWidth(it.wireframeLinewidth*je()),Oe.setMode(H.LINES)):Oe.setMode(H.TRIANGLES);else if(Q.isLine){let Qt=it.linewidth;Qt===void 0&&(Qt=1),qt.setLineWidth(Qt*je()),Q.isLineSegments?Oe.setMode(H.LINES):Q.isLineLoop?Oe.setMode(H.LINE_LOOP):Oe.setMode(H.LINE_STRIP)}else Q.isPoints?Oe.setMode(H.POINTS):Q.isSprite&&Oe.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Bl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qt=Q._multiDrawStarts,Le=Q._multiDrawCounts,re=Q._multiDrawCount,An=Vt?ct.get(Vt).bytesPerElement:1,oa=E.get(it).currentProgram.getUniforms();for(let Rn=0;Rn<re;Rn++)oa.setValue(H,"_gl_DrawID",Rn),Oe.render(Qt[Rn]/An,Le[Rn])}else if(Q.isInstancedMesh)Oe.renderInstances(ee,Ye,Q.count);else if(ot.isInstancedBufferGeometry){const Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Le=Math.min(ot.instanceCount,Qt);Oe.renderInstances(ee,Ye,Le)}else Oe.render(ee,Ye)};function _o(N,Y,ot){N.transparent===!0&&N.side===wa&&N.forceSinglePass===!1?(N.side=ei,N.needsUpdate=!0,sr(N,Y,ot),N.side=xs,N.needsUpdate=!0,sr(N,Y,ot),N.side=wa):sr(N,Y,ot)}this.compile=function(N,Y,ot=null){ot===null&&(ot=N),D=Tt.get(ot),D.init(Y),I.push(D),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),N!==ot&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights();const it=new Set;return N.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Nt=Q.material;if(Nt)if(Array.isArray(Nt))for(let It=0;It<Nt.length;It++){const Lt=Nt[It];_o(Lt,ot,Q),it.add(Lt)}else _o(Nt,ot,Q),it.add(Nt)}),D=I.pop(),it},this.compileAsync=function(N,Y,ot=null){const it=this.compile(N,Y,ot);return new Promise(Q=>{function Nt(){if(it.forEach(function(It){E.get(It).currentProgram.isReady()&&it.delete(It)}),it.size===0){Q(N);return}setTimeout(Nt,10)}Me.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let ar=null;function ql(N){ar&&ar(N)}function xo(){In.stop()}function Yl(){In.start()}const In=new hb;In.setAnimationLoop(ql),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(N){ar=N,Dt.setAnimationLoop(N),N===null?In.stop():In.start()},Dt.addEventListener("sessionstart",xo),Dt.addEventListener("sessionend",Yl),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const ot=Dt.enabled===!0&&Dt.isPresenting===!0,it=z!==null&&(at===null||ot)&&z.begin(T,at);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(Y),Y=Dt.getCamera()),N.isScene===!0&&N.onBeforeRender(T,N,Y,at),D=Tt.get(N,I.length),D.init(Y),I.push(D),We.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),kt.setFromProjectionMatrix(We,Ki,Y.reversedDepth),ce=this.localClippingEnabled,Ct=Ht.init(this.clippingPlanes,ce),L=St.get(N,O.length),L.init(),O.push(L),Dt.enabled===!0&&Dt.isPresenting===!0){const It=T.xr.getDepthSensingMesh();It!==null&&on(It,Y,-1/0,T.sortObjects)}on(N,Y,0,T.sortObjects),L.finish(),T.sortObjects===!0&&L.sort(Rt,Yt),ae=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,ae&&bt.addToRenderList(L,N),this.info.render.frame++,Ct===!0&&Ht.beginShadows();const Q=D.state.shadowsArray;if(Bt.render(Q,N,Y),Ct===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&z.hasRenderPass())===!1){const It=L.opaque,Lt=L.transmissive;if(D.setupLights(),Y.isArrayCamera){const Vt=Y.cameras;if(Lt.length>0)for(let Wt=0,$t=Vt.length;Wt<$t;Wt++){const jt=Vt[Wt];sa(It,Lt,N,jt)}ae&&bt.render(N);for(let Wt=0,$t=Vt.length;Wt<$t;Wt++){const jt=Vt[Wt];Tn(L,N,jt,jt.viewport)}}else Lt.length>0&&sa(It,Lt,N,Y),ae&&bt.render(N),Tn(L,N,Y)}at!==null&&st===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),it&&z.end(T),N.isScene===!0&&N.onAfterRender(T,N,Y),Ft.resetDefaultState(),ft=-1,lt=null,I.pop(),I.length>0?(D=I[I.length-1],Ct===!0&&Ht.setGlobalState(T.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?L=O[O.length-1]:L=null};function on(N,Y,ot,it){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)ot=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)D.pushLight(N),N.castShadow&&D.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||kt.intersectsSprite(N)){it&&Se.setFromMatrixPosition(N.matrixWorld).applyMatrix4(We);const It=Ut.update(N),Lt=N.material;Lt.visible&&L.push(N,It,Lt,ot,Se.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||kt.intersectsObject(N))){const It=Ut.update(N),Lt=N.material;if(it&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Se.copy(N.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Se.copy(It.boundingSphere.center)),Se.applyMatrix4(N.matrixWorld).applyMatrix4(We)),Array.isArray(Lt)){const Vt=It.groups;for(let Wt=0,$t=Vt.length;Wt<$t;Wt++){const jt=Vt[Wt],ee=Lt[jt.materialIndex];ee&&ee.visible&&L.push(N,It,ee,ot,Se.z,jt)}}else Lt.visible&&L.push(N,It,Lt,ot,Se.z,null)}}const Nt=N.children;for(let It=0,Lt=Nt.length;It<Lt;It++)on(Nt[It],Y,ot,it)}function Tn(N,Y,ot,it){const{opaque:Q,transmissive:Nt,transparent:It}=N;D.setupLightsView(ot),Ct===!0&&Ht.setGlobalState(T.clippingPlanes,ot),it&&qt.viewport(k.copy(it)),Q.length>0&&Fa(Q,Y,ot),Nt.length>0&&Fa(Nt,Y,ot),It.length>0&&Fa(It,Y,ot),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function sa(N,Y,ot,it){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[it.id]===void 0){const ee=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[it.id]=new $i(1,1,{generateMipmaps:!0,type:ee?Pa:ui,minFilter:tr,samples:Pe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Nt=D.state.transmissionRenderTarget[it.id],It=it.viewport||k;Nt.setSize(It.z*T.transmissionResolutionScale,It.w*T.transmissionResolutionScale);const Lt=T.getRenderTarget(),Vt=T.getActiveCubeFace(),Wt=T.getActiveMipmapLevel();T.setRenderTarget(Nt),T.getClearColor(_t),P=T.getClearAlpha(),P<1&&T.setClearColor(16777215,.5),T.clear(),ae&&bt.render(ot);const $t=T.toneMapping;T.toneMapping=Ji;const jt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),D.setupLightsView(it),Ct===!0&&Ht.setGlobalState(T.clippingPlanes,it),Fa(N,ot,it),q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ne=0,Ye=Y.length;Ne<Ye;Ne++){const He=Y[Ne],{object:Oe,geometry:Qt,material:Le,group:re}=He;if(Le.side===wa&&Oe.layers.test(it.layers)){const An=Le.side;Le.side=ei,Le.needsUpdate=!0,Zl(Oe,ot,it,Qt,Le,re),Le.side=An,Le.needsUpdate=!0,ee=!0}}ee===!0&&(q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt))}T.setRenderTarget(Lt,Vt,Wt),T.setClearColor(_t,P),jt!==void 0&&(it.viewport=jt),T.toneMapping=$t}function Fa(N,Y,ot){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Nt=N.length;Q<Nt;Q++){const It=N[Q],{object:Lt,geometry:Vt,group:Wt}=It;let $t=It.material;$t.allowOverride===!0&&it!==null&&($t=it),Lt.layers.test(ot.layers)&&Zl(Lt,Y,ot,Vt,$t,Wt)}}function Zl(N,Y,ot,it,Q,Nt){N.onBeforeRender(T,Y,ot,it,Q,Nt),N.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(T,Y,ot,it,N,Nt),Q.transparent===!0&&Q.side===wa&&Q.forceSinglePass===!1?(Q.side=ei,Q.needsUpdate=!0,T.renderBufferDirect(ot,Y,it,Q,N,Nt),Q.side=xs,Q.needsUpdate=!0,T.renderBufferDirect(ot,Y,it,Q,N,Nt),Q.side=wa):T.renderBufferDirect(ot,Y,it,Q,N,Nt),N.onAfterRender(T,Y,ot,it,Q,Nt)}function sr(N,Y,ot){Y.isScene!==!0&&(Y=Re);const it=E.get(N),Q=D.state.lights,Nt=D.state.shadowsArray,It=Q.state.version,Lt=Xt.getParameters(N,Q.state,Nt,Y,ot),Vt=Xt.getProgramCacheKey(Lt);let Wt=it.programs;it.environment=N.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(N.isMeshStandardMaterial?vt:ht).get(N.envMap||it.environment),it.envMapRotation=it.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,Wt===void 0&&(N.addEventListener("dispose",Qn),Wt=new Map,it.programs=Wt);let $t=Wt.get(Vt);if($t!==void 0){if(it.currentProgram===$t&&it.lightsStateVersion===It)return Ia(N,Lt),$t}else Lt.uniforms=Xt.getUniforms(N),N.onBeforeCompile(Lt,T),$t=Xt.acquireProgram(Lt,Vt),Wt.set(Vt,$t),it.uniforms=Lt.uniforms;const jt=it.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(jt.clippingPlanes=Ht.uniform),Ia(N,Lt),it.needsLights=Ba(N),it.lightsStateVersion=It,it.needsLights&&(jt.ambientLightColor.value=Q.state.ambient,jt.lightProbe.value=Q.state.probe,jt.directionalLights.value=Q.state.directional,jt.directionalLightShadows.value=Q.state.directionalShadow,jt.spotLights.value=Q.state.spot,jt.spotLightShadows.value=Q.state.spotShadow,jt.rectAreaLights.value=Q.state.rectArea,jt.ltc_1.value=Q.state.rectAreaLTC1,jt.ltc_2.value=Q.state.rectAreaLTC2,jt.pointLights.value=Q.state.point,jt.pointLightShadows.value=Q.state.pointShadow,jt.hemisphereLights.value=Q.state.hemi,jt.directionalShadowMap.value=Q.state.directionalShadowMap,jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,jt.spotShadowMap.value=Q.state.spotShadowMap,jt.spotLightMatrix.value=Q.state.spotLightMatrix,jt.spotLightMap.value=Q.state.spotLightMap,jt.pointShadowMap.value=Q.state.pointShadowMap,jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),it.currentProgram=$t,it.uniformsList=null,$t}function yo(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Pu.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Ia(N,Y){const ot=E.get(N);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function So(N,Y,ot,it,Q){Y.isScene!==!0&&(Y=Re),q.resetTextureUnits();const Nt=Y.fog,It=it.isMeshStandardMaterial?Y.environment:null,Lt=at===null?T.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:lo,Vt=(it.isMeshStandardMaterial?vt:ht).get(it.envMap||It),Wt=it.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,$t=!!ot.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),jt=!!ot.morphAttributes.position,ee=!!ot.morphAttributes.normal,Ne=!!ot.morphAttributes.color;let Ye=Ji;it.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ye=T.toneMapping);const He=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Oe=He!==void 0?He.length:0,Qt=E.get(it),Le=D.state.lights;if(Ct===!0&&(ce===!0||N!==lt)){const Cn=N===lt&&it.id===ft;Ht.setState(it,N,Cn)}let re=!1;it.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Le.state.version||Qt.outputColorSpace!==Lt||Q.isBatchedMesh&&Qt.batching===!1||!Q.isBatchedMesh&&Qt.batching===!0||Q.isBatchedMesh&&Qt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qt.instancing===!1||!Q.isInstancedMesh&&Qt.instancing===!0||Q.isSkinnedMesh&&Qt.skinning===!1||!Q.isSkinnedMesh&&Qt.skinning===!0||Q.isInstancedMesh&&Qt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qt.instancingMorph===!1&&Q.morphTexture!==null||Qt.envMap!==Vt||it.fog===!0&&Qt.fog!==Nt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ht.numPlanes||Qt.numIntersection!==Ht.numIntersection)||Qt.vertexAlphas!==Wt||Qt.vertexTangents!==$t||Qt.morphTargets!==jt||Qt.morphNormals!==ee||Qt.morphColors!==Ne||Qt.toneMapping!==Ye||Qt.morphTargetsCount!==Oe)&&(re=!0):(re=!0,Qt.__version=it.version);let An=Qt.currentProgram;re===!0&&(An=sr(it,Y,Q));let oa=!1,Rn=!1,fi=!1;const Ie=An.getUniforms(),wn=Qt.uniforms;if(qt.useProgram(An.program)&&(oa=!0,Rn=!0,fi=!0),it.id!==ft&&(ft=it.id,Rn=!0),oa||lt!==N){qt.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ie.setValue(H,"projectionMatrix",N.projectionMatrix),Ie.setValue(H,"viewMatrix",N.matrixWorldInverse);const Dn=Ie.map.cameraPosition;Dn!==void 0&&Dn.setValue(H,ue.setFromMatrixPosition(N.matrixWorld)),Pe.logarithmicDepthBuffer&&Ie.setValue(H,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ie.setValue(H,"isOrthographic",N.isOrthographicCamera===!0),lt!==N&&(lt=N,Rn=!0,fi=!0)}if(Qt.needsLights&&(Le.state.directionalShadowMap.length>0&&Ie.setValue(H,"directionalShadowMap",Le.state.directionalShadowMap,q),Le.state.spotShadowMap.length>0&&Ie.setValue(H,"spotShadowMap",Le.state.spotShadowMap,q),Le.state.pointShadowMap.length>0&&Ie.setValue(H,"pointShadowMap",Le.state.pointShadowMap,q)),Q.isSkinnedMesh){Ie.setOptional(H,Q,"bindMatrix"),Ie.setOptional(H,Q,"bindMatrixInverse");const Cn=Q.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ie.setValue(H,"boneTexture",Cn.boneTexture,q))}Q.isBatchedMesh&&(Ie.setOptional(H,Q,"batchingTexture"),Ie.setValue(H,"batchingTexture",Q._matricesTexture,q),Ie.setOptional(H,Q,"batchingIdTexture"),Ie.setValue(H,"batchingIdTexture",Q._indirectTexture,q),Ie.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ie.setValue(H,"batchingColorTexture",Q._colorsTexture,q));const pn=ot.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&fe.update(Q,ot,An),(Rn||Qt.receiveShadow!==Q.receiveShadow)&&(Qt.receiveShadow=Q.receiveShadow,Ie.setValue(H,"receiveShadow",Q.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(wn.envMap.value=Vt,wn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Y.environment!==null&&(wn.envMapIntensity.value=Y.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=XL()),Rn&&(Ie.setValue(H,"toneMappingExposure",T.toneMappingExposure),Qt.needsLights&&ra(wn,fi),Nt&&it.fog===!0&&ie.refreshFogUniforms(wn,Nt),ie.refreshMaterialUniforms(wn,it,Et,wt,D.state.transmissionRenderTarget[N.id]),Pu.upload(H,yo(Qt),wn,q)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Pu.upload(H,yo(Qt),wn,q),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ie.setValue(H,"center",Q.center),Ie.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ie.setValue(H,"normalMatrix",Q.normalMatrix),Ie.setValue(H,"modelMatrix",Q.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Cn=it.uniformsGroups;for(let Dn=0,rr=Cn.length;Dn<rr;Dn++){const Ci=Cn[Dn];yt.update(Ci,An),yt.bind(Ci,An)}}return An}function ra(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Ba(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(N,Y,ot){const it=E.get(N);it.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),E.get(N.texture).__webglTexture=Y,E.get(N.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ot,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const ot=E.get(N);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const Ss=H.createFramebuffer();this.setRenderTarget=function(N,Y=0,ot=0){at=N,V=Y,st=ot;let it=null,Q=!1,Nt=!1;if(N){const Lt=E.get(N);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(H.FRAMEBUFFER,Lt.__webglFramebuffer),k.copy(N.viewport),G.copy(N.scissor),$=N.scissorTest,qt.viewport(k),qt.scissor(G),qt.setScissorTest($),ft=-1;return}else if(Lt.__webglFramebuffer===void 0)q.setupRenderTarget(N);else if(Lt.__hasExternalTextures)q.rebindTextures(N,E.get(N.texture).__webglTexture,E.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const $t=N.depthTexture;if(Lt.__boundDepthTexture!==$t){if($t!==null&&E.has($t)&&(N.width!==$t.image.width||N.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(N)}}const Vt=N.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Nt=!0);const Wt=E.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?it=Wt[Y][ot]:it=Wt[Y],Q=!0):N.samples>0&&q.useMultisampledRTT(N)===!1?it=E.get(N).__webglMultisampledFramebuffer:Array.isArray(Wt)?it=Wt[ot]:it=Wt,k.copy(N.viewport),G.copy(N.scissor),$=N.scissorTest}else k.copy(nt).multiplyScalar(Et).floor(),G.copy(pt).multiplyScalar(Et).floor(),$=Mt;if(ot!==0&&(it=Ss),qt.bindFramebuffer(H.FRAMEBUFFER,it)&&qt.drawBuffers(N,it),qt.viewport(k),qt.scissor(G),qt.setScissorTest($),Q){const Lt=E.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,ot)}else if(Nt){const Lt=Y;for(let Vt=0;Vt<N.textures.length;Vt++){const Wt=E.get(N.textures[Vt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,ot,Lt)}}else if(N!==null&&ot!==0){const Lt=E.get(N.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Lt.__webglTexture,ot)}ft=-1},this.readRenderTargetPixels=function(N,Y,ot,it,Q,Nt,It,Lt=0){if(!(N&&N.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(Vt=Vt[It]),Vt){qt.bindFramebuffer(H.FRAMEBUFFER,Vt);try{const Wt=N.textures[Lt],$t=Wt.format,jt=Wt.type;if(!Pe.textureFormatReadable($t)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(jt)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-it&&ot>=0&&ot<=N.height-Q&&(N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Lt),H.readPixels(Y,ot,it,Q,At.convert($t),At.convert(jt),Nt))}finally{const Wt=at!==null?E.get(at).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(N,Y,ot,it,Q,Nt,It,Lt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(Vt=Vt[It]),Vt)if(Y>=0&&Y<=N.width-it&&ot>=0&&ot<=N.height-Q){qt.bindFramebuffer(H.FRAMEBUFFER,Vt);const Wt=N.textures[Lt],$t=Wt.format,jt=Wt.type;if(!Pe.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ee),H.bufferData(H.PIXEL_PACK_BUFFER,Nt.byteLength,H.STREAM_READ),N.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Lt),H.readPixels(Y,ot,it,Q,At.convert($t),At.convert(jt),0);const Ne=at!==null?E.get(at).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,Ne);const Ye=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await u2(H,Ye,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ee),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Nt),H.deleteBuffer(ee),H.deleteSync(Ye),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,ot=0){const it=Math.pow(2,-ot),Q=Math.floor(N.image.width*it),Nt=Math.floor(N.image.height*it),It=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;q.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,ot,0,0,It,Lt,Q,Nt),qt.unbindTexture()};const za=H.createFramebuffer(),ln=H.createFramebuffer();this.copyTextureToTexture=function(N,Y,ot=null,it=null,Q=0,Nt=null){Nt===null&&(Q!==0?(Bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=Q,Q=0):Nt=0);let It,Lt,Vt,Wt,$t,jt,ee,Ne,Ye;const He=N.isCompressedTexture?N.mipmaps[Nt]:N.image;if(ot!==null)It=ot.max.x-ot.min.x,Lt=ot.max.y-ot.min.y,Vt=ot.isBox3?ot.max.z-ot.min.z:1,Wt=ot.min.x,$t=ot.min.y,jt=ot.isBox3?ot.min.z:0;else{const pn=Math.pow(2,-Q);It=Math.floor(He.width*pn),Lt=Math.floor(He.height*pn),N.isDataArrayTexture?Vt=He.depth:N.isData3DTexture?Vt=Math.floor(He.depth*pn):Vt=1,Wt=0,$t=0,jt=0}it!==null?(ee=it.x,Ne=it.y,Ye=it.z):(ee=0,Ne=0,Ye=0);const Oe=At.convert(Y.format),Qt=At.convert(Y.type);let Le;Y.isData3DTexture?(q.setTexture3D(Y,0),Le=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Le=H.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Le=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const re=H.getParameter(H.UNPACK_ROW_LENGTH),An=H.getParameter(H.UNPACK_IMAGE_HEIGHT),oa=H.getParameter(H.UNPACK_SKIP_PIXELS),Rn=H.getParameter(H.UNPACK_SKIP_ROWS),fi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,He.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,He.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Wt),H.pixelStorei(H.UNPACK_SKIP_ROWS,$t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const Ie=N.isDataArrayTexture||N.isData3DTexture,wn=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const pn=E.get(N),Cn=E.get(Y),Dn=E.get(pn.__renderTarget),rr=E.get(Cn.__renderTarget);qt.bindFramebuffer(H.READ_FRAMEBUFFER,Dn.__webglFramebuffer),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let Ci=0;Ci<Vt;Ci++)Ie&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,E.get(N).__webglTexture,Q,jt+Ci),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Nt,Ye+Ci)),H.blitFramebuffer(Wt,$t,It,Lt,ee,Ne,It,Lt,H.DEPTH_BUFFER_BIT,H.NEAREST);qt.bindFramebuffer(H.READ_FRAMEBUFFER,null),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||N.isRenderTargetTexture||E.has(N)){const pn=E.get(N),Cn=E.get(Y);qt.bindFramebuffer(H.READ_FRAMEBUFFER,za),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ln);for(let Dn=0;Dn<Vt;Dn++)Ie?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Q,jt+Dn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Q),wn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Cn.__webglTexture,Nt,Ye+Dn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Cn.__webglTexture,Nt),Q!==0?H.blitFramebuffer(Wt,$t,It,Lt,ee,Ne,It,Lt,H.COLOR_BUFFER_BIT,H.NEAREST):wn?H.copyTexSubImage3D(Le,Nt,ee,Ne,Ye+Dn,Wt,$t,It,Lt):H.copyTexSubImage2D(Le,Nt,ee,Ne,Wt,$t,It,Lt);qt.bindFramebuffer(H.READ_FRAMEBUFFER,null),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else wn?N.isDataTexture||N.isData3DTexture?H.texSubImage3D(Le,Nt,ee,Ne,Ye,It,Lt,Vt,Oe,Qt,He.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Le,Nt,ee,Ne,Ye,It,Lt,Vt,Oe,He.data):H.texSubImage3D(Le,Nt,ee,Ne,Ye,It,Lt,Vt,Oe,Qt,He):N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Nt,ee,Ne,It,Lt,Oe,Qt,He.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Nt,ee,Ne,He.width,He.height,Oe,He.data):H.texSubImage2D(H.TEXTURE_2D,Nt,ee,Ne,It,Lt,Oe,Qt,He);H.pixelStorei(H.UNPACK_ROW_LENGTH,re),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,An),H.pixelStorei(H.UNPACK_SKIP_PIXELS,oa),H.pixelStorei(H.UNPACK_SKIP_ROWS,Rn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,fi),Nt===0&&Y.generateMipmaps&&H.generateMipmap(Le),qt.unbindTexture()},this.initRenderTarget=function(N){E.get(N).__webglFramebuffer===void 0&&q.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?q.setTextureCube(N,0):N.isData3DTexture?q.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?q.setTexture2DArray(N,0):q.setTexture2D(N,0),qt.unbindTexture()},this.resetState=function(){V=0,st=0,at=null,qt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),n.unpackColorSpace=Te._getUnpackColorSpace()}}function jL(){const i=te.useRef(null);return te.useEffect(()=>{if(!i.current)return;const t=new O2,n=new Ti(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=5;const s=new WL({alpha:!0,antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current.appendChild(s.domElement);const o=[new go(.5,.5,.5),new ug(.3,32,32),new hg(.3,.1,16,100),new cg(.3),new fg(.4)],c=new k2({color:3900150,shininess:100,specular:65535,emissive:1982639,emissiveIntensity:.2}),u=[],h=15;for(let D=0;D<h;D++){const O=o[Math.floor(Math.random()*o.length)],I=new ia(O,c);I.position.x=(Math.random()-.5)*10,I.position.y=(Math.random()-.5)*10,I.position.z=(Math.random()-.5)*5,I.rotation.x=Math.random()*Math.PI,I.rotation.y=Math.random()*Math.PI,I.velocity={x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,rotation:(Math.random()-.5)*.02},t.add(I),u.push(I)}const d=new Y2(4210752,1);t.add(d);const p=new wy(3900150,1);p.position.set(5,5,5),t.add(p);const g=new wy(440020,.5);g.position.set(-5,-5,-5),t.add(g);const v=new ni,_=1e3,y=new Float32Array(_*3);for(let D=0;D<_*3;D++)y[D]=(Math.random()-.5)*20;v.setAttribute("position",new Hi(y,3));const b=new cb({size:.02,color:3900150,transparent:!0,opacity:.6,blending:bp}),A=new V2(v,b);t.add(A);let S=0,x=0;const R=D=>{S=D.clientX/window.innerWidth*2-1,x=-(D.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",R);const w=()=>{requestAnimationFrame(w),u.forEach(D=>{const O=D.velocity;D.position.x+=O.x,D.position.y+=O.y,Math.abs(D.position.x)>5&&(O.x*=-1),Math.abs(D.position.y)>5&&(O.y*=-1),D.rotation.x+=O.rotation,D.rotation.y+=O.rotation*.7}),A.rotation.y+=5e-4,A.rotation.x+=2e-4,n.position.x+=(S*2-n.position.x)*.05,n.position.y+=(x*2-n.position.y)*.05,n.lookAt(t.position),s.render(t,n)};w();const L=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",L),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("resize",L),i.current&&i.current.removeChild(s.domElement),o.forEach(D=>D.dispose()),c.dispose(),v.dispose(),b.dispose(),s.dispose()}},[]),Z.jsx("div",{ref:i,className:"fixed inset-0 -z-10",style:{pointerEvents:"auto"}})}const qL="/Mobile-App-Developer-Portfolio/assets/44852c7404437b80f0d96b8c3a4e567561cf2437-Z0CXSaSN.png",YL=["React Native","React.js","Redux","JavaScript","TypeScript","HTML","CSS","API Testing","Azure Repo","Github","OOPS","SQL","Agile"],ZL=["React Native: The Practical Guide","Fundamentals Of Database","HDCA"],KL=[{title:"Sulekha NRI App",description:"Led end-to-end development of a platform for Non-Resident Indians, implementing service listings, user profiles, booking systems, and payment integration. Achieved 30% increase in user engagement within first quarter.",image:"https://play-lh.googleusercontent.com/fPm0rCLBvuakinuiTEaQnq5WpJNi1gy1ZxUEDjxVfWnU1X6HQcpzAgQ6iQXMXa-7wvI",tags:["React Native","Redux","iOS","Android","Payment Integration"],duration:"300 Days"},{title:"Sulekha Buisness App",description:"Led end-to-end development of a platform for Non-Resident Indians, implementing service listings, user profiles, booking systems, and payment integration. Achieved 30% increase in user engagement within first quarter.",image:"https://play-lh.googleusercontent.com/fPm0rCLBvuakinuiTEaQnq5WpJNi1gy1ZxUEDjxVfWnU1X6HQcpzAgQ6iQXMXa-7wvI",tags:["React Native","Redux","iOS","Android"],duration:"3 months"},{title:"React.js Web Applications",description:"Developed multiple web applications using React.js with Redux state management, focusing on performance optimization and responsive design principles.",image:"https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740&q=80",tags:["React.js","Redux","JavaScript","CSS","HTML"]},{title:"Cross-Platform Solutions",description:"Implemented seamless cross-platform mobile applications with analytics integration, code reviews, and performance optimizations for enhanced user experience.",image:"https://media.istockphoto.com/id/1189378904/vector/mobile-apps-creation-of-a-mobile-application-web-page-created-from-separate-blocks-user.jpg?s=612x612&w=0&k=20&c=HIiI8lu3-_-IhUS-Jj20zw0AS-w1FIKXGn_l4qdHAzQ=",tags:["React Native","API Testing","Azure","Github"]}],tp={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6}},$y={animate:{transition:{staggerChildren:.1}}},tS=i=>{const t=document.getElementById(i);t&&t.scrollIntoView({behavior:"smooth",block:"start"})};function QL(){const[i,t]=te.useState(!1);return Z.jsxs("div",{className:"",children:[Z.jsx(jL,{}),Z.jsx(_e.nav,{initial:{y:-100},animate:{y:0},transition:{duration:.5},className:"fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md shadow-lg shadow-blue-500/20 z-50 border-b border-blue-500/20",children:Z.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[Z.jsxs("div",{className:"flex justify-between items-center h-16",children:[Z.jsx(_e.div,{whileHover:{scale:1.05},className:"text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold",children:Z.jsxs("div",{className:"flex items-center space-x-4 h-16",children:[Z.jsx("img",{src:qL,alt:"Portfolio Visual",className:"w-10 h-10 object-contain"}),Z.jsx("span",{className:"text-lg font-semibold text-white",children:"Porfolio"})]})}),Z.jsx("div",{className:"hidden md:flex gap-8",children:["About","Experience","Projects","Skills","Contact"].map(n=>Z.jsx(_e.button,{onClick:()=>tS(n.toLowerCase()),whileHover:{scale:1.1,color:"#60a5fa"},className:"text-gray-300 transition-colors",children:n},n))}),Z.jsx("button",{onClick:()=>t(!i),className:"md:hidden p-2 text-gray-300","aria-label":"Toggle menu",children:i?Z.jsx($T,{className:"w-6 h-6"}):Z.jsx(ZT,{className:"w-6 h-6"})})]}),i&&Z.jsx(_e.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},className:"md:hidden py-4 border-t border-blue-500/20",children:["About","Experience","Projects","Skills","Contact"].map(n=>Z.jsx("button",{onClick:()=>{tS(n.toLowerCase()),t(!1)},className:"block py-2 text-gray-300 hover:text-blue-400 w-full text-left",children:n},n))})]})}),Z.jsx("section",{className:"pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center",children:Z.jsx("div",{className:"max-w-6xl mx-auto w-full",children:Z.jsxs("div",{className:"text-center",children:[Z.jsx(_e.h1,{...tp,className:"text-5xl sm:text-6xl lg:text-7xl mb-4",children:Z.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent",children:"RAMBABU NEHRU PONNAIAH"})}),Z.jsx(_e.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6},className:"text-2xl sm:text-3xl mb-3 text-black-400",children:"Software Developer"}),Z.jsx(_e.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.6},className:"text-xl sm:text-2xl mb-6 text-blue-400",children:"React Native Developer"}),Z.jsx(_e.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.6},className:"text-lg text-black-300 mb-8 max-w-3xl mx-auto leading-relaxed",children:"Mobile App Developer with 3+ years of professional experience delivering production-ready mobile and web applications. Strong in JavaScript ecosystems, Agile development, and end-to-end feature delivery. Known for solving complex problems, learning quickly, and consistently meeting business goals."}),Z.jsxs(_e.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.6},className:"flex gap-4 justify-center flex-wrap mb-8",children:[Z.jsx(_e.a,{whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(59, 130, 246, 0.5)"},whileTap:{scale:.95},href:"#projects",className:"px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl transition-all shadow-lg shadow-blue-500/50",children:"View My Work"}),Z.jsxs(_e.a,{href:"../assets/Rambabu_N_Resume.pdf",download:"Rambabu_N_Resume.pdf",whileHover:{scale:1.05},whileTap:{scale:.95},className:"px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl hover:bg-blue-500/10 transition-all flex items-center gap-2",children:[Z.jsx(IT,{className:"w-5 h-5"}),"Download CV"]})]}),Z.jsxs(_e.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.6},className:"flex gap-6 justify-center text-gray-300 flex-wrap text-sm",children:[Z.jsxs("div",{className:"flex items-center gap-2",children:[Z.jsx(G_,{className:"w-4 h-4 text-blue-400"}),"Chennai, India"]}),Z.jsxs("div",{className:"flex items-center gap-2",children:[Z.jsx(V_,{className:"w-4 h-4 text-blue-400"}),"3+ Years Experience"]})]})]})})}),Z.jsx("section",{id:"about",className:"py-20 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-sm",children:Z.jsxs("div",{className:"max-w-6xl mx-auto",children:[Z.jsx(_e.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:Z.jsx("h2",{className:"text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"About Me"})}),Z.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[Z.jsxs(_e.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"space-y-4",children:[Z.jsx("p",{className:"text-gray-300 leading-relaxed text-lg",children:"I am a Mobile App Developer with a proven track record of creating successful Mobile and Web Javascript applications. I employ Agile practices to ensure business deadlines are met."}),Z.jsx("p",{className:"text-gray-300 leading-relaxed text-lg",children:"As a self-starter and constant learner, I'm passionate about solving complex problems and delivering high-quality solutions. My experience spans React Native, React.js with Redux flow, and various modern development tools."})]}),Z.jsxs(_e.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20",children:[Z.jsx("h3",{className:"text-2xl mb-6 text-gray-100",children:"Languages & Interests"}),Z.jsxs("div",{className:"space-y-4",children:[Z.jsxs("div",{children:[Z.jsx("p",{className:"text-gray-400 mb-2",children:"Languages:"}),Z.jsxs("div",{className:"flex gap-2 flex-wrap",children:[Z.jsx("span",{className:"px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30",children:"Tamil"}),Z.jsx("span",{className:"px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30",children:"English"}),Z.jsx("span",{className:"px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30",children:"Telugu"})]})]}),Z.jsxs("div",{children:[Z.jsx("p",{className:"text-gray-400 mb-2",children:"Hobbies:"}),Z.jsxs("div",{className:"flex gap-2 flex-wrap",children:[Z.jsx("span",{className:"px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30",children:"⚽ Football"}),Z.jsx("span",{className:"px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30",children:"🎵 Music"})]})]})]})]})]})]})}),Z.jsx("section",{id:"experience",className:"py-20 px-4 sm:px-6 lg:px-8",children:Z.jsxs("div",{className:"max-w-6xl mx-auto",children:[Z.jsx(_e.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:Z.jsx("h2",{className:"text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"Work Experience"})}),Z.jsxs(_e.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20 relative overflow-hidden",children:[Z.jsx(_e.div,{animate:{scale:[1,1.2,1],opacity:[.1,.2,.1]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},className:"absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-3xl"}),Z.jsxs("div",{className:"relative",children:[Z.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[Z.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0",children:Z.jsx(V_,{className:"w-6 h-6 text-white"})}),Z.jsxs("div",{className:"flex-1",children:[Z.jsx("h3",{className:"text-2xl mb-1 text-gray-100",children:"Software Developer"}),Z.jsx("p",{className:"text-xl text-blue-400 mb-2",children:"React Native Developer"}),Z.jsx("p",{className:"text-gray-300 mb-2",children:"Sulekha"}),Z.jsx("p",{className:"text-gray-400 text-sm",children:"June 2022 - Present"})]})]}),Z.jsxs("div",{className:"ml-16 space-y-3",children:[Z.jsx("p",{className:"text-gray-300 leading-relaxed",children:"• Working extensively with React Native and React.js with Redux flow"}),Z.jsx("p",{className:"text-gray-300 leading-relaxed",children:"• Spearheaded end-to-end development of mobile applications ensuring seamless performance across iOS and Android platforms"}),Z.jsx("p",{className:"text-gray-300 leading-relaxed",children:"• Collaborated with cross-functional teams including designers, product managers, and backend developers"}),Z.jsx("p",{className:"text-gray-300 leading-relaxed",children:"• Implemented responsive design principles and optimized app performance"}),Z.jsx("p",{className:"text-gray-300 leading-relaxed",children:"• Conducted regular code reviews, performance optimizations, and bug fixes"})]})]})]})]})}),Z.jsx("section",{id:"projects",className:"py-20 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-sm",children:Z.jsxs("div",{className:"max-w-6xl mx-auto",children:[Z.jsx(_e.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:Z.jsx("h2",{className:"text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"Featured Projects"})}),Z.jsx(_e.div,{variants:$y,initial:"initial",whileInView:"animate",viewport:{once:!0},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:KL.map((n,s)=>Z.jsx(_e.div,{variants:tp,whileHover:{y:-10},transition:{duration:.3},children:Z.jsx(DC,{...n})},s))})]})}),Z.jsx("section",{id:"skills",className:"py-20 px-4 sm:px-6 lg:px-8",children:Z.jsxs("div",{className:"max-w-6xl mx-auto",children:[Z.jsx(_e.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:Z.jsx("h2",{className:"text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"Key Skills"})}),Z.jsx(_e.div,{variants:$y,initial:"initial",whileInView:"animate",viewport:{once:!0},className:"flex flex-wrap gap-4 justify-center mb-12",children:YL.map((n,s)=>Z.jsx(_e.div,{variants:tp,whileHover:{scale:1.1,rotate:2},whileTap:{scale:.95},className:"px-6 py-3 bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-blue-500/30 hover:border-blue-400",children:Z.jsx("span",{className:"text-gray-200",children:n})},s))}),Z.jsxs(_e.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20",children:[Z.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[Z.jsx(PT,{className:"w-8 h-8 text-blue-400"}),Z.jsx("h3",{className:"text-2xl text-gray-100",children:"Certifications"})]}),Z.jsx("div",{className:"grid md:grid-cols-1 gap-4",children:ZL.map((n,s)=>Z.jsxs(_e.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:s*.1},whileHover:{x:5},className:"flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20",children:[Z.jsx("div",{className:"w-2 h-2 bg-blue-400 rounded-full"}),Z.jsx("span",{className:"text-gray-300",children:n})]},s))})]})]})}),Z.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-sm",children:Z.jsxs("div",{className:"max-w-6xl mx-auto",children:[Z.jsx(_e.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:Z.jsx("h2",{className:"text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"Education"})}),Z.jsxs("div",{className:"space-y-6",children:[Z.jsx(_e.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-500/20",children:Z.jsxs("div",{className:"flex items-start gap-4",children:[Z.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0",children:Z.jsx(H_,{className:"w-6 h-6 text-white"})}),Z.jsxs("div",{children:[Z.jsx("h3",{className:"text-xl mb-1 text-gray-100",children:"Master of Computer Applications (MCA)"}),Z.jsx("p",{className:"text-blue-400 mb-1",children:"Computer and Applications"}),Z.jsx("p",{className:"text-gray-300 text-sm mb-1",children:"P.S.N.A College of Engineering and Technology, Dindigul"}),Z.jsx("p",{className:"text-gray-400 text-sm",children:"2021"})]})]})}),Z.jsx(_e.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.1},className:"bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-500/20",children:Z.jsxs("div",{className:"flex items-start gap-4",children:[Z.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0",children:Z.jsx(H_,{className:"w-6 h-6 text-white"})}),Z.jsxs("div",{children:[Z.jsx("h3",{className:"text-xl mb-1 text-gray-100",children:"Bachelor of Computer Applications (BCA)"}),Z.jsx("p",{className:"text-blue-400 mb-1",children:"Computers - Grade: 78%"}),Z.jsx("p",{className:"text-gray-300 text-sm mb-1",children:"Theni Kammavar Sangam College Of Arts And Science, Theni"}),Z.jsx("p",{className:"text-gray-400 text-sm",children:"2019"})]})]})})]})]})}),Z.jsx("section",{id:"contact",className:"py-20 px-4 sm:px-6 lg:px-8",children:Z.jsxs("div",{className:"max-w-6xl mx-auto",children:[Z.jsxs(_e.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[Z.jsx("h2",{className:"text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"Let's Connect"}),Z.jsx("p",{className:"text-gray-300 text-lg",children:"I'm always interested in hearing about new projects and opportunities."})]}),Z.jsx(_e.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-blue-500/20",children:Z.jsxs("div",{className:"space-y-6",children:[Z.jsxs(_e.a,{whileHover:{scale:1.02,x:5},href:"mailto:rambabunehru@gmail.com",className:"flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl hover:shadow-lg transition-all border border-blue-500/20",children:[Z.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center",children:Z.jsx(jT,{className:"w-6 h-6 text-white"})}),Z.jsxs("div",{children:[Z.jsx("p",{className:"text-sm text-gray-400",children:"Email"}),Z.jsx("p",{className:"text-gray-200",children:"rambabunehru@gmail.com"})]})]}),Z.jsxs(_e.a,{whileHover:{scale:1.02,x:5},href:"tel:+918248887070",className:"flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl hover:shadow-lg transition-all border border-blue-500/20",children:[Z.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center",children:Z.jsx(QT,{className:"w-6 h-6 text-white"})}),Z.jsxs("div",{children:[Z.jsx("p",{className:"text-sm text-gray-400",children:"Phone"}),Z.jsx("p",{className:"text-gray-200",children:"+91 8248887070"})]})]}),Z.jsxs(_e.a,{whileHover:{scale:1.02,x:5},href:"https://www.linkedin.com/in/rambabu-n-620467302",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl hover:shadow-lg transition-all border border-blue-500/20",children:[Z.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl flex items-center justify-center",children:Z.jsx(XT,{className:"w-6 h-6 text-white"})}),Z.jsxs("div",{children:[Z.jsx("p",{className:"text-sm text-gray-400",children:"LinkedIn"}),Z.jsx("p",{className:"text-gray-200",children:"Connect on LinkedIn"})]})]}),Z.jsxs(_e.div,{whileHover:{scale:1.02,x:5},className:"flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20",children:[Z.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-xl flex items-center justify-center",children:Z.jsx(G_,{className:"w-6 h-6 text-white"})}),Z.jsxs("div",{children:[Z.jsx("p",{className:"text-sm text-gray-400",children:"Location"}),Z.jsx("p",{className:"text-gray-200",children:"Chennai, Tamil Nadu, India"})]})]})]})})]})}),Z.jsx("footer",{className:"bg-gradient-to-r from-black via-gray-900 to-black text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20",children:Z.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[Z.jsx(_e.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"text-gray-300 mb-4",children:"© 2026 Rambabu NEHRU PONNAIAH - React Native Developer"}),Z.jsx(_e.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.1},className:"text-gray-400 text-sm",children:"Built with React, TypeScript & Motion"})]})})]})}wT.createRoot(document.getElementById("root")).render(Z.jsx(QL,{}));
