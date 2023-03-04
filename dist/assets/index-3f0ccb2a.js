(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Uc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Fc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ue(s)?zg(s):Fc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ue(t))return t;if(Ie(t))return t}}const qg=/;(?![^(]*\))/g,Kg=/:([^]+)/,Hg=/\/\*.*?\*\//gs;function zg(t){const e={};return t.replace(Hg,"").split(qg).forEach(n=>{if(n){const s=n.split(Kg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function $c(t){let e="";if(Ue(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=$c(t[n]);s&&(e+=s+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gg=Uc(Wg);function Ad(t){return!!t||t===""}const Ft=t=>Ue(t)?t:t==null?"":Q(t)||Ie(t)&&(t.toString===Dd||!J(t.toString))?JSON.stringify(t,kd,2):String(t),kd=(t,e)=>e&&e.__v_isRef?kd(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Rd(e)?{[`Set(${e.size})`]:[...e.values()]}:Ie(e)&&!Q(e)&&!Od(e)?String(e):e,_e={},_s=[],Rt=()=>{},Qg=()=>!1,Yg=/^on[^a-z]/,Eo=t=>Yg.test(t),Vc=t=>t.startsWith("onUpdate:"),et=Object.assign,Bc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xg=Object.prototype.hasOwnProperty,ie=(t,e)=>Xg.call(t,e),Q=Array.isArray,ws=t=>Io(t)==="[object Map]",Rd=t=>Io(t)==="[object Set]",J=t=>typeof t=="function",Ue=t=>typeof t=="string",jc=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",Nd=t=>Ie(t)&&J(t.then)&&J(t.catch),Dd=Object.prototype.toString,Io=t=>Dd.call(t),Jg=t=>Io(t).slice(8,-1),Od=t=>Io(t)==="[object Object]",qc=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xi=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zg=/-(\w)/g,Kt=bo(t=>t.replace(Zg,(e,n)=>n?n.toUpperCase():"")),ey=/\B([A-Z])/g,js=bo(t=>t.replace(ey,"-$1").toLowerCase()),To=bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),pa=bo(t=>t?`on${To(t)}`:""),vr=(t,e)=>!Object.is(t,e),Pi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ba=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yu;const ty=()=>yu||(yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let St;class ny{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function sy(t,e=St){e&&e.active&&e.effects.push(t)}function ry(){return St}const Kc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xd=t=>(t.w&Cn)>0,Pd=t=>(t.n&Cn)>0,iy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},oy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];xd(r)&&!Pd(r)?r.delete(t):e[n++]=r,r.w&=~Cn,r.n&=~Cn}e.length=n}},ja=new WeakMap;let nr=0,Cn=1;const qa=30;let At;const Wn=Symbol(""),Ka=Symbol("");class Hc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sy(this,s)}run(){if(!this.active)return this.fn();let e=At,n=_n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=At,At=this,_n=!0,Cn=1<<++nr,nr<=qa?iy(this):vu(this),this.fn()}finally{nr<=qa&&oy(this),Cn=1<<--nr,At=this.parent,_n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(vu(this),this.onStop&&this.onStop(),this.active=!1)}}function vu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _n=!0;const Md=[];function qs(){Md.push(_n),_n=!1}function Ks(){const t=Md.pop();_n=t===void 0?!0:t}function lt(t,e,n){if(_n&&At){let s=ja.get(t);s||ja.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Kc()),Ld(r)}}function Ld(t,e){let n=!1;nr<=qa?Pd(t)||(t.n|=Cn,n=!xd(t)):n=!t.has(At),n&&(t.add(At),At.deps.push(t))}function tn(t,e,n,s,r,i){const o=ja.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?qc(n)&&a.push(o.get("length")):(a.push(o.get(Wn)),ws(t)&&a.push(o.get(Ka)));break;case"delete":Q(t)||(a.push(o.get(Wn)),ws(t)&&a.push(o.get(Ka)));break;case"set":ws(t)&&a.push(o.get(Wn));break}if(a.length===1)a[0]&&Ha(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ha(Kc(c))}}function Ha(t,e){const n=Q(t)?t:[...t];for(const s of n)s.computed&&_u(s);for(const s of n)s.computed||_u(s)}function _u(t,e){(t!==At||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ay=Uc("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jc)),cy=zc(),ly=zc(!1,!0),uy=zc(!0),wu=hy();function hy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)lt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qs();const s=ae(this)[e].apply(this,n);return Ks(),s}}),t}function dy(t){const e=ae(this);return lt(e,"has",t),e.hasOwnProperty(t)}function zc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ky:jd:e?Bd:Vd).get(s))return s;const o=Q(s);if(!t){if(o&&ie(wu,r))return Reflect.get(wu,r,i);if(r==="hasOwnProperty")return dy}const a=Reflect.get(s,r,i);return(jc(r)?Ud.has(r):ay(r))||(t||lt(s,"get",r),e)?a:Xe(a)?o&&qc(r)?a:a.value:Ie(a)?t?qd(a):qr(a):a}}const fy=Fd(),py=Fd(!0);function Fd(t=!1){return function(n,s,r,i){let o=n[s];if(ks(o)&&Xe(o)&&!Xe(r))return!1;if(!t&&(!Gi(r)&&!ks(r)&&(o=ae(o),r=ae(r)),!Q(n)&&Xe(o)&&!Xe(r)))return o.value=r,!0;const a=Q(n)&&qc(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?vr(r,o)&&tn(n,"set",s,r):tn(n,"add",s,r)),c}}function my(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&tn(t,"delete",e,void 0),s}function gy(t,e){const n=Reflect.has(t,e);return(!jc(e)||!Ud.has(e))&&lt(t,"has",e),n}function yy(t){return lt(t,"iterate",Q(t)?"length":Wn),Reflect.ownKeys(t)}const $d={get:cy,set:fy,deleteProperty:my,has:gy,ownKeys:yy},vy={get:uy,set(t,e){return!0},deleteProperty(t,e){return!0}},_y=et({},$d,{get:ly,set:py}),Wc=t=>t,So=t=>Reflect.getPrototypeOf(t);function _i(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&lt(r,"get",e),lt(r,"get",i));const{has:o}=So(r),a=s?Wc:n?Yc:_r;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function wi(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&lt(s,"has",t),lt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ei(t,e=!1){return t=t.__v_raw,!e&&lt(ae(t),"iterate",Wn),Reflect.get(t,"size",t)}function Eu(t){t=ae(t);const e=ae(this);return So(e).has.call(e,t)||(e.add(t),tn(e,"add",t,t)),this}function Iu(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=So(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?vr(e,o)&&tn(n,"set",t,e):tn(n,"add",t,e),this}function bu(t){const e=ae(this),{has:n,get:s}=So(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&tn(e,"delete",t,void 0),i}function Tu(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&tn(t,"clear",void 0,void 0),n}function Ii(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?Wc:t?Yc:_r;return!t&&lt(a,"iterate",Wn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function bi(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=ws(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Wc:e?Yc:_r;return!e&&lt(i,"iterate",c?Ka:Wn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function un(t){return function(...e){return t==="delete"?!1:this}}function wy(){const t={get(i){return _i(this,i)},get size(){return Ei(this)},has:wi,add:Eu,set:Iu,delete:bu,clear:Tu,forEach:Ii(!1,!1)},e={get(i){return _i(this,i,!1,!0)},get size(){return Ei(this)},has:wi,add:Eu,set:Iu,delete:bu,clear:Tu,forEach:Ii(!1,!0)},n={get(i){return _i(this,i,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Ii(!0,!1)},s={get(i){return _i(this,i,!0,!0)},get size(){return Ei(this,!0)},has(i){return wi.call(this,i,!0)},add:un("add"),set:un("set"),delete:un("delete"),clear:un("clear"),forEach:Ii(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bi(i,!1,!1),n[i]=bi(i,!0,!1),e[i]=bi(i,!1,!0),s[i]=bi(i,!0,!0)}),[t,n,e,s]}const[Ey,Iy,by,Ty]=wy();function Gc(t,e){const n=e?t?Ty:by:t?Iy:Ey;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const Sy={get:Gc(!1,!1)},Cy={get:Gc(!1,!0)},Ay={get:Gc(!0,!1)},Vd=new WeakMap,Bd=new WeakMap,jd=new WeakMap,ky=new WeakMap;function Ry(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ny(t){return t.__v_skip||!Object.isExtensible(t)?0:Ry(Jg(t))}function qr(t){return ks(t)?t:Qc(t,!1,$d,Sy,Vd)}function Dy(t){return Qc(t,!1,_y,Cy,Bd)}function qd(t){return Qc(t,!0,vy,Ay,jd)}function Qc(t,e,n,s,r){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ny(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Es(t){return ks(t)?Es(t.__v_raw):!!(t&&t.__v_isReactive)}function ks(t){return!!(t&&t.__v_isReadonly)}function Gi(t){return!!(t&&t.__v_isShallow)}function Kd(t){return Es(t)||ks(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Hd(t){return Wi(t,"__v_skip",!0),t}const _r=t=>Ie(t)?qr(t):t,Yc=t=>Ie(t)?qd(t):t;function zd(t){_n&&At&&(t=ae(t),Ld(t.dep||(t.dep=Kc())))}function Wd(t,e){t=ae(t);const n=t.dep;n&&Ha(n)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function Oy(t){return Gd(t,!1)}function xy(t){return Gd(t,!0)}function Gd(t,e){return Xe(t)?t:new Py(t,e)}class Py{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:_r(e)}get value(){return zd(this),this._value}set value(e){const n=this.__v_isShallow||Gi(e)||ks(e);e=n?e:ae(e),vr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_r(e),Wd(this))}}function Is(t){return Xe(t)?t.value:t}const My={get:(t,e,n)=>Is(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Xe(r)&&!Xe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Qd(t){return Es(t)?t:new Proxy(t,My)}var Yd;class Ly{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yd]=!1,this._dirty=!0,this.effect=new Hc(e,()=>{this._dirty||(this._dirty=!0,Wd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return zd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Yd="__v_isReadonly";function Uy(t,e,n=!1){let s,r;const i=J(t);return i?(s=t,r=Rt):(s=t.get,r=t.set),new Ly(s,r,i||!r,n)}function wn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Co(i,e,n)}return r}function wt(t,e,n,s){if(J(t)){const i=wn(t,e,n,s);return i&&Nd(i)&&i.catch(o=>{Co(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(wt(t[i],e,n,s));return r}function Co(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wn(c,null,10,[t,o,a]);return}}Fy(t,n,r,s)}function Fy(t,e,n,s=!0){console.error(t)}let wr=!1,za=!1;const Qe=[];let $t=0;const bs=[];let Qt=null,Vn=0;const Xd=Promise.resolve();let Xc=null;function Jd(t){const e=Xc||Xd;return t?e.then(this?t.bind(this):t):e}function $y(t){let e=$t+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;Er(Qe[s])<t?e=s+1:n=s}return e}function Jc(t){(!Qe.length||!Qe.includes(t,wr&&t.allowRecurse?$t+1:$t))&&(t.id==null?Qe.push(t):Qe.splice($y(t.id),0,t),Zd())}function Zd(){!wr&&!za&&(za=!0,Xc=Xd.then(tf))}function Vy(t){const e=Qe.indexOf(t);e>$t&&Qe.splice(e,1)}function By(t){Q(t)?bs.push(...t):(!Qt||!Qt.includes(t,t.allowRecurse?Vn+1:Vn))&&bs.push(t),Zd()}function Su(t,e=wr?$t+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function ef(t){if(bs.length){const e=[...new Set(bs)];if(bs.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,s)=>Er(n)-Er(s)),Vn=0;Vn<Qt.length;Vn++)Qt[Vn]();Qt=null,Vn=0}}const Er=t=>t.id==null?1/0:t.id,jy=(t,e)=>{const n=Er(t)-Er(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tf(t){za=!1,wr=!0,Qe.sort(jy);const e=Rt;try{for($t=0;$t<Qe.length;$t++){const n=Qe[$t];n&&n.active!==!1&&wn(n,null,14)}}finally{$t=0,Qe.length=0,ef(),wr=!1,Xc=null,(Qe.length||bs.length)&&tf()}}function qy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||_e;d&&(r=n.map(m=>Ue(m)?m.trim():m)),h&&(r=n.map(Ba))}let a,c=s[a=pa(e)]||s[a=pa(Kt(e))];!c&&i&&(c=s[a=pa(js(e))]),c&&wt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(l,t,6,r)}}function nf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=nf(l,e,!0);u&&(a=!0,et(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&s.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):et(o,i),Ie(t)&&s.set(t,o),o)}function Ao(t,e){return!t||!Eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,js(e))||ie(t,e))}let ht=null,ko=null;function Qi(t){const e=ht;return ht=t,ko=t&&t.type.__scopeId||null,e}function Ky(t){ko=t}function Hy(){ko=null}function at(t,e=ht,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Mu(-1);const i=Qi(e);let o;try{o=t(...r)}finally{Qi(i),s._d&&Mu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ma(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:y,inheritAttrs:_}=t;let R,k;const P=Qi(t);try{if(n.shapeFlag&4){const W=r||s;R=Ut(u.call(W,W,h,i,m,d,y)),k=c}else{const W=e;R=Ut(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),k=e.props?c:zy(c)}}catch(W){lr.length=0,Co(W,t,1),R=fe(Nt)}let M=R;if(k&&_!==!1){const W=Object.keys(k),{shapeFlag:oe}=M;W.length&&oe&7&&(o&&W.some(Vc)&&(k=Wy(k,o)),M=An(M,k))}return n.dirs&&(M=An(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),R=M,Qi(P),R}const zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Eo(n))&&((e||(e={}))[n]=t[n]);return e},Wy=(t,e)=>{const n={};for(const s in t)(!Vc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Gy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Cu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ao(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Cu(s,o,l):!0:!!o;return!1}function Cu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ao(n,i))return!0}return!1}function Qy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yy=t=>t.__isSuspense;function Xy(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):By(t)}function Mi(t,e){if(ke){let n=ke.provides;const s=ke.parent&&ke.parent.provides;s===n&&(n=ke.provides=Object.create(s)),n[t]=e}}function Zt(t,e,n=!1){const s=ke||ht;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&J(e)?e.call(s.proxy):e}}const Ti={};function Li(t,e,n){return sf(t,e,n)}function sf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=_e){const a=ry()===(ke==null?void 0:ke.scope)?ke:null;let c,l=!1,u=!1;if(Xe(t)?(c=()=>t.value,l=Gi(t)):Es(t)?(c=()=>t,s=!0):Q(t)?(u=!0,l=t.some(M=>Es(M)||Gi(M)),c=()=>t.map(M=>{if(Xe(M))return M.value;if(Es(M))return qn(M);if(J(M))return wn(M,a,2)})):J(t)?e?c=()=>wn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),wt(t,a,3,[d])}:c=Rt,e&&s){const M=c;c=()=>qn(M())}let h,d=M=>{h=k.onStop=()=>{wn(M,a,4)}},m;if(br)if(d=Rt,e?n&&wt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const M=Gv();m=M.__watcherHandles||(M.__watcherHandles=[])}else return Rt;let y=u?new Array(t.length).fill(Ti):Ti;const _=()=>{if(k.active)if(e){const M=k.run();(s||l||(u?M.some((W,oe)=>vr(W,y[oe])):vr(M,y)))&&(h&&h(),wt(e,a,3,[M,y===Ti?void 0:u&&y[0]===Ti?[]:y,d]),y=M)}else k.run()};_.allowRecurse=!!e;let R;r==="sync"?R=_:r==="post"?R=()=>ot(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),R=()=>Jc(_));const k=new Hc(c,R);e?n?_():y=k.run():r==="post"?ot(k.run.bind(k),a&&a.suspense):k.run();const P=()=>{k.stop(),a&&a.scope&&Bc(a.scope.effects,k)};return m&&m.push(P),P}function Jy(t,e,n){const s=this.proxy,r=Ue(t)?t.includes(".")?rf(s,t):()=>s[t]:t.bind(s,s);let i;J(e)?i=e:(i=e.handler,n=e);const o=ke;Rs(this);const a=sf(r,i.bind(s),n);return o?Rs(o):Gn(),a}function rf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function qn(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))qn(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)qn(t[n],e);else if(Rd(t)||ws(t))t.forEach(n=>{qn(n,e)});else if(Od(t))for(const n in t)qn(t[n],e);return t}function Zy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return uf(()=>{t.isMounted=!0}),hf(()=>{t.isUnmounting=!0}),t}const mt=[Function,Array],ev={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mt,onEnter:mt,onAfterEnter:mt,onEnterCancelled:mt,onBeforeLeave:mt,onLeave:mt,onAfterLeave:mt,onLeaveCancelled:mt,onBeforeAppear:mt,onAppear:mt,onAfterAppear:mt,onAppearCancelled:mt},setup(t,{slots:e}){const n=Vv(),s=Zy();let r;return()=>{const i=e.default&&af(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const _ of i)if(_.type!==Nt){o=_;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return ga(o);const l=Au(o);if(!l)return ga(o);const u=Wa(l,a,s,n);Ga(l,u);const h=n.subTree,d=h&&Au(h);let m=!1;const{getTransitionKey:y}=l.type;if(y){const _=y();r===void 0?r=_:_!==r&&(r=_,m=!0)}if(d&&d.type!==Nt&&(!Bn(l,d)||m)){const _=Wa(d,a,s,n);if(Ga(d,_),c==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ga(o);c==="in-out"&&l.type!==Nt&&(_.delayLeave=(R,k,P)=>{const M=of(s,d);M[String(d.key)]=d,R._leaveCb=()=>{k(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},tv=ev;function of(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Wa(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:_,onAppear:R,onAfterAppear:k,onAppearCancelled:P}=e,M=String(t.key),W=of(n,t),oe=(Z,ve)=>{Z&&wt(Z,s,9,ve)},Te=(Z,ve)=>{const pe=ve[1];oe(Z,ve),Q(Z)?Z.every(He=>He.length<=1)&&pe():Z.length<=1&&pe()},Re={mode:i,persisted:o,beforeEnter(Z){let ve=a;if(!n.isMounted)if(r)ve=_||a;else return;Z._leaveCb&&Z._leaveCb(!0);const pe=W[M];pe&&Bn(t,pe)&&pe.el._leaveCb&&pe.el._leaveCb(),oe(ve,[Z])},enter(Z){let ve=c,pe=l,He=u;if(!n.isMounted)if(r)ve=R||c,pe=k||l,He=P||u;else return;let ze=!1;const Et=Z._enterCb=zt=>{ze||(ze=!0,zt?oe(He,[Z]):oe(pe,[Z]),Re.delayedLeave&&Re.delayedLeave(),Z._enterCb=void 0)};ve?Te(ve,[Z,Et]):Et()},leave(Z,ve){const pe=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return ve();oe(h,[Z]);let He=!1;const ze=Z._leaveCb=Et=>{He||(He=!0,ve(),Et?oe(y,[Z]):oe(m,[Z]),Z._leaveCb=void 0,W[pe]===t&&delete W[pe])};W[pe]=t,d?Te(d,[Z,ze]):ze()},clone(Z){return Wa(Z,e,n,s)}};return Re}function ga(t){if(Ro(t))return t=An(t),t.children=null,t}function Au(t){return Ro(t)?t.children?t.children[0]:void 0:t}function Ga(t,e){t.shapeFlag&6&&t.component?Ga(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function af(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ct?(o.patchFlag&128&&r++,s=s.concat(af(o.children,e,a))):(e||o.type!==Nt)&&s.push(a!=null?An(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function cf(t){return J(t)?{setup:t,name:t.name}:t}const Ui=t=>!!t.type.__asyncLoader,Ro=t=>t.type.__isKeepAlive;function nv(t,e){lf(t,"a",e)}function sv(t,e){lf(t,"da",e)}function lf(t,e,n=ke){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(No(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ro(r.parent.vnode)&&rv(s,e,n,r),r=r.parent}}function rv(t,e,n,s){const r=No(e,t,s,!0);df(()=>{Bc(s[e],r)},n)}function No(t,e,n=ke,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qs(),Rs(n);const a=wt(e,n,t,o);return Gn(),Ks(),a});return s?r.unshift(i):r.push(i),i}}const cn=t=>(e,n=ke)=>(!br||t==="sp")&&No(t,(...s)=>e(...s),n),iv=cn("bm"),uf=cn("m"),ov=cn("bu"),av=cn("u"),hf=cn("bum"),df=cn("um"),cv=cn("sp"),lv=cn("rtg"),uv=cn("rtc");function hv(t,e=ke){No("ec",t,e)}function vt(t,e){const n=ht;if(n===null)return t;const s=xo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=_e]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&qn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ln(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(qs(),wt(c,n,8,[t.el,a,t,e]),Ks())}}const ff="components";function Jn(t,e){return fv(ff,t,!0,e)||t}const dv=Symbol();function fv(t,e,n=!0,s=!1){const r=ht||ke;if(r){const i=r.type;if(t===ff){const a=Hv(i,!1);if(a&&(a===e||a===Kt(e)||a===To(Kt(e))))return i}const o=ku(r[t]||i[t],e)||ku(r.appContext[t],e);return!o&&s?i:o}}function ku(t,e){return t&&(t[e]||t[Kt(e)]||t[To(Kt(e))])}function pv(t,e,n,s){let r;const i=n&&n[s];if(Q(t)||Ue(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Qa=t=>t?Tf(t)?xo(t)||t.proxy:Qa(t.parent):null,cr=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qa(t.parent),$root:t=>Qa(t.root),$emit:t=>t.emit,$options:t=>Zc(t),$forceUpdate:t=>t.f||(t.f=()=>Jc(t.update)),$nextTick:t=>t.n||(t.n=Jd.bind(t.proxy)),$watch:t=>Jy.bind(t)}),ya=(t,e)=>t!==_e&&!t.__isScriptSetup&&ie(t,e),mv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ya(s,e))return o[e]=1,s[e];if(r!==_e&&ie(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==_e&&ie(n,e))return o[e]=4,n[e];Ya&&(o[e]=0)}}const u=cr[e];let h,d;if(u)return e==="$attrs"&&lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&ie(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ya(r,e)?(r[e]=n,!0):s!==_e&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&ie(t,o)||ya(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(cr,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ya=!0;function gv(t){const e=Zc(t),n=t.proxy,s=t.ctx;Ya=!1,e.beforeCreate&&Ru(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:y,activated:_,deactivated:R,beforeDestroy:k,beforeUnmount:P,destroyed:M,unmounted:W,render:oe,renderTracked:Te,renderTriggered:Re,errorCaptured:Z,serverPrefetch:ve,expose:pe,inheritAttrs:He,components:ze,directives:Et,filters:zt}=e;if(l&&yv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const he=o[me];J(he)&&(s[me]=he.bind(n))}if(r){const me=r.call(n,n);Ie(me)&&(t.data=qr(me))}if(Ya=!0,i)for(const me in i){const he=i[me],It=J(he)?he.bind(n,n):J(he.get)?he.get.bind(n,n):Rt,Mn=!J(he)&&J(he.set)?he.set.bind(n):Rt,bt=yt({get:It,set:Mn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>bt.value,set:it=>bt.value=it})}if(a)for(const me in a)pf(a[me],s,n,me);if(c){const me=J(c)?c.call(n):c;Reflect.ownKeys(me).forEach(he=>{Mi(he,me[he])})}u&&Ru(u,t,"c");function Ne(me,he){Q(he)?he.forEach(It=>me(It.bind(n))):he&&me(he.bind(n))}if(Ne(iv,h),Ne(uf,d),Ne(ov,m),Ne(av,y),Ne(nv,_),Ne(sv,R),Ne(hv,Z),Ne(uv,Te),Ne(lv,Re),Ne(hf,P),Ne(df,W),Ne(cv,ve),Q(pe))if(pe.length){const me=t.exposed||(t.exposed={});pe.forEach(he=>{Object.defineProperty(me,he,{get:()=>n[he],set:It=>n[he]=It})})}else t.exposed||(t.exposed={});oe&&t.render===Rt&&(t.render=oe),He!=null&&(t.inheritAttrs=He),ze&&(t.components=ze),Et&&(t.directives=Et)}function yv(t,e,n=Rt,s=!1){Q(t)&&(t=Xa(t));for(const r in t){const i=t[r];let o;Ie(i)?"default"in i?o=Zt(i.from||r,i.default,!0):o=Zt(i.from||r):o=Zt(i),Xe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ru(t,e,n){wt(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function pf(t,e,n,s){const r=s.includes(".")?rf(n,s):()=>n[s];if(Ue(t)){const i=e[t];J(i)&&Li(r,i)}else if(J(t))Li(r,t.bind(n));else if(Ie(t))if(Q(t))t.forEach(i=>pf(i,e,n,s));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Li(r,i,t)}}function Zc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Yi(c,l,o,!0)),Yi(c,e,o)),Ie(e)&&i.set(e,c),c}function Yi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Yi(t,i,n,!0),r&&r.forEach(o=>Yi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=vv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vv={data:Nu,props:Fn,emits:Fn,methods:Fn,computed:Fn,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Fn,directives:Fn,watch:wv,provide:Nu,inject:_v};function Nu(t,e){return e?t?function(){return et(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function _v(t,e){return Fn(Xa(t),Xa(e))}function Xa(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?et(et(Object.create(null),t),e):e}function wv(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const s in e)n[s]=st(t[s],e[s]);return n}function Ev(t,e,n,s=!1){const r={},i={};Wi(i,Oo,1),t.propsDefaults=Object.create(null),mf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Dy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Iv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ao(t.emitsOptions,d))continue;const m=e[d];if(c)if(ie(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=Kt(d);r[y]=Ja(c,a,y,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{mf(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=js(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ja(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&tn(t,"set","$attrs")}function mf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xi(c))continue;const l=e[c];let u;r&&ie(r,u=Kt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ao(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ae(n),l=a||_e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ja(r,c,h,l[h],t,!ie(l,h))}}return o}function Ja(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Rs(r),s=l[n]=c.call(null,e),Gn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===js(n))&&(s=!0))}return s}function gf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[d,m]=gf(h,e,!0);et(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ie(t)&&s.set(t,_s),_s;if(Q(i))for(let u=0;u<i.length;u++){const h=Kt(i[u]);Du(h)&&(o[h]=_e)}else if(i)for(const u in i){const h=Kt(u);if(Du(h)){const d=i[u],m=o[h]=Q(d)||J(d)?{type:d}:Object.assign({},d);if(m){const y=Pu(Boolean,m.type),_=Pu(String,m.type);m[0]=y>-1,m[1]=_<0||y<_,(y>-1||ie(m,"default"))&&a.push(h)}}}const l=[o,a];return Ie(t)&&s.set(t,l),l}function Du(t){return t[0]!=="$"}function Ou(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function xu(t,e){return Ou(t)===Ou(e)}function Pu(t,e){return Q(e)?e.findIndex(n=>xu(n,t)):J(e)&&xu(e,t)?0:-1}const yf=t=>t[0]==="_"||t==="$stable",el=t=>Q(t)?t.map(Ut):[Ut(t)],bv=(t,e,n)=>{if(e._n)return e;const s=at((...r)=>el(e(...r)),n);return s._c=!1,s},vf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(yf(r))continue;const i=t[r];if(J(i))e[r]=bv(r,i,s);else if(i!=null){const o=el(i);e[r]=()=>o}}},_f=(t,e)=>{const n=el(e);t.slots.default=()=>n},Tv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Wi(e,"_",n)):vf(e,t.slots={})}else t.slots={},e&&_f(t,e);Wi(t.slots,Oo,1)},Sv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(et(r,e),!n&&a===1&&delete r._):(i=!e.$stable,vf(e,r)),o=e}else e&&(_f(t,e),o={default:1});if(i)for(const a in r)!yf(a)&&!(a in o)&&delete r[a]};function wf(){return{app:null,config:{isNativeTag:Qg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function Av(t,e){return function(s,r=null){J(s)||(s=Object.assign({},s)),r!=null&&!Ie(r)&&(r=null);const i=wf(),o=new Set;let a=!1;const c=i.app={_uid:Cv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Qv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=fe(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,xo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Za(t,e,n,s,r=!1){if(Q(t)){t.forEach((d,m)=>Za(d,e&&(Q(e)?e[m]:e),n,s,r));return}if(Ui(s)&&!r)return;const i=s.shapeFlag&4?xo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ue(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):Xe(l)&&(l.value=null)),J(c))wn(c,a,12,[o,u]);else{const d=Ue(c),m=Xe(c);if(d||m){const y=()=>{if(t.f){const _=d?ie(h,c)?h[c]:u[c]:c.value;r?Q(_)&&Bc(_,i):Q(_)?_.includes(i)||_.push(i):d?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ie(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ot(y,n)):y()}}}const ot=Xy;function kv(t){return Rv(t)}function Rv(t,e){const n=ty();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Rt,insertStaticContent:y}=t,_=(f,p,g,v=null,I=null,A=null,O=!1,C=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!Bn(f,p)&&(v=D(f),it(f,I,A,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:T,ref:j,shapeFlag:U}=p;switch(T){case Do:R(f,p,g,v);break;case Nt:k(f,p,g,v);break;case va:f==null&&P(p,g,v,O);break;case Ct:ze(f,p,g,v,I,A,O,C,N);break;default:U&1?oe(f,p,g,v,I,A,O,C,N):U&6?Et(f,p,g,v,I,A,O,C,N):(U&64||U&128)&&T.process(f,p,g,v,I,A,O,C,N,re)}j!=null&&I&&Za(j,f&&f.ref,A,p||f,!p)},R=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const I=p.el=f.el;p.children!==f.children&&l(I,p.children)}},k=(f,p,g,v)=>{f==null?s(p.el=c(p.children||""),g,v):p.el=f.el},P=(f,p,g,v)=>{[f.el,f.anchor]=y(f.children,p,g,v,f.el,f.anchor)},M=({el:f,anchor:p},g,v)=>{let I;for(;f&&f!==p;)I=d(f),s(f,g,v),f=I;s(p,g,v)},W=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),r(f),f=g;r(p)},oe=(f,p,g,v,I,A,O,C,N)=>{O=O||p.type==="svg",f==null?Te(p,g,v,I,A,O,C,N):ve(f,p,I,A,O,C,N)},Te=(f,p,g,v,I,A,O,C)=>{let N,T;const{type:j,props:U,shapeFlag:q,transition:G,dirs:te}=f;if(N=f.el=o(f.type,A,U&&U.is,U),q&8?u(N,f.children):q&16&&Z(f.children,N,null,v,I,A&&j!=="foreignObject",O,C),te&&Ln(f,null,v,"created"),Re(N,f,f.scopeId,O,v),U){for(const de in U)de!=="value"&&!xi(de)&&i(N,de,null,U[de],A,f.children,v,I,x);"value"in U&&i(N,"value",null,U.value),(T=U.onVnodeBeforeMount)&&Lt(T,v,f)}te&&Ln(f,null,v,"beforeMount");const ge=(!I||I&&!I.pendingBranch)&&G&&!G.persisted;ge&&G.beforeEnter(N),s(N,p,g),((T=U&&U.onVnodeMounted)||ge||te)&&ot(()=>{T&&Lt(T,v,f),ge&&G.enter(N),te&&Ln(f,null,v,"mounted")},I)},Re=(f,p,g,v,I)=>{if(g&&m(f,g),v)for(let A=0;A<v.length;A++)m(f,v[A]);if(I){let A=I.subTree;if(p===A){const O=I.vnode;Re(f,O,O.scopeId,O.slotScopeIds,I.parent)}}},Z=(f,p,g,v,I,A,O,C,N=0)=>{for(let T=N;T<f.length;T++){const j=f[T]=C?fn(f[T]):Ut(f[T]);_(null,j,p,g,v,I,A,O,C)}},ve=(f,p,g,v,I,A,O)=>{const C=p.el=f.el;let{patchFlag:N,dynamicChildren:T,dirs:j}=p;N|=f.patchFlag&16;const U=f.props||_e,q=p.props||_e;let G;g&&Un(g,!1),(G=q.onVnodeBeforeUpdate)&&Lt(G,g,p,f),j&&Ln(p,f,g,"beforeUpdate"),g&&Un(g,!0);const te=I&&p.type!=="foreignObject";if(T?pe(f.dynamicChildren,T,C,g,v,te,A):O||he(f,p,C,null,g,v,te,A,!1),N>0){if(N&16)He(C,p,U,q,g,v,I);else if(N&2&&U.class!==q.class&&i(C,"class",null,q.class,I),N&4&&i(C,"style",U.style,q.style,I),N&8){const ge=p.dynamicProps;for(let de=0;de<ge.length;de++){const De=ge[de],Tt=U[De],hs=q[De];(hs!==Tt||De==="value")&&i(C,De,Tt,hs,I,f.children,g,v,x)}}N&1&&f.children!==p.children&&u(C,p.children)}else!O&&T==null&&He(C,p,U,q,g,v,I);((G=q.onVnodeUpdated)||j)&&ot(()=>{G&&Lt(G,g,p,f),j&&Ln(p,f,g,"updated")},v)},pe=(f,p,g,v,I,A,O)=>{for(let C=0;C<p.length;C++){const N=f[C],T=p[C],j=N.el&&(N.type===Ct||!Bn(N,T)||N.shapeFlag&70)?h(N.el):g;_(N,T,j,null,v,I,A,O,!0)}},He=(f,p,g,v,I,A,O)=>{if(g!==v){if(g!==_e)for(const C in g)!xi(C)&&!(C in v)&&i(f,C,g[C],null,O,p.children,I,A,x);for(const C in v){if(xi(C))continue;const N=v[C],T=g[C];N!==T&&C!=="value"&&i(f,C,T,N,O,p.children,I,A,x)}"value"in v&&i(f,"value",g.value,v.value)}},ze=(f,p,g,v,I,A,O,C,N)=>{const T=p.el=f?f.el:a(""),j=p.anchor=f?f.anchor:a("");let{patchFlag:U,dynamicChildren:q,slotScopeIds:G}=p;G&&(C=C?C.concat(G):G),f==null?(s(T,g,v),s(j,g,v),Z(p.children,g,j,I,A,O,C,N)):U>0&&U&64&&q&&f.dynamicChildren?(pe(f.dynamicChildren,q,g,I,A,O,C),(p.key!=null||I&&p===I.subTree)&&Ef(f,p,!0)):he(f,p,g,j,I,A,O,C,N)},Et=(f,p,g,v,I,A,O,C,N)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?I.ctx.activate(p,g,v,O,N):zt(p,g,v,I,A,O,N):Js(f,p,N)},zt=(f,p,g,v,I,A,O)=>{const C=f.component=$v(f,v,I);if(Ro(f)&&(C.ctx.renderer=re),Bv(C),C.asyncDep){if(I&&I.registerDep(C,Ne),!f.el){const N=C.subTree=fe(Nt);k(null,N,p,g)}return}Ne(C,f,p,g,I,A,O)},Js=(f,p,g)=>{const v=p.component=f.component;if(Gy(f,p,g))if(v.asyncDep&&!v.asyncResolved){me(v,p,g);return}else v.next=p,Vy(v.update),v.update();else p.el=f.el,v.vnode=p},Ne=(f,p,g,v,I,A,O)=>{const C=()=>{if(f.isMounted){let{next:j,bu:U,u:q,parent:G,vnode:te}=f,ge=j,de;Un(f,!1),j?(j.el=te.el,me(f,j,O)):j=te,U&&Pi(U),(de=j.props&&j.props.onVnodeBeforeUpdate)&&Lt(de,G,j,te),Un(f,!0);const De=ma(f),Tt=f.subTree;f.subTree=De,_(Tt,De,h(Tt.el),D(Tt),f,I,A),j.el=De.el,ge===null&&Qy(f,De.el),q&&ot(q,I),(de=j.props&&j.props.onVnodeUpdated)&&ot(()=>Lt(de,G,j,te),I)}else{let j;const{el:U,props:q}=p,{bm:G,m:te,parent:ge}=f,de=Ui(p);if(Un(f,!1),G&&Pi(G),!de&&(j=q&&q.onVnodeBeforeMount)&&Lt(j,ge,p),Un(f,!0),U&&ee){const De=()=>{f.subTree=ma(f),ee(U,f.subTree,f,I,null)};de?p.type.__asyncLoader().then(()=>!f.isUnmounted&&De()):De()}else{const De=f.subTree=ma(f);_(null,De,g,v,f,I,A),p.el=De.el}if(te&&ot(te,I),!de&&(j=q&&q.onVnodeMounted)){const De=p;ot(()=>Lt(j,ge,De),I)}(p.shapeFlag&256||ge&&Ui(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&ot(f.a,I),f.isMounted=!0,p=g=v=null}},N=f.effect=new Hc(C,()=>Jc(T),f.scope),T=f.update=()=>N.run();T.id=f.uid,Un(f,!0),T()},me=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Iv(f,p.props,v,g),Sv(f,p.children,g),qs(),Su(),Ks()},he=(f,p,g,v,I,A,O,C,N=!1)=>{const T=f&&f.children,j=f?f.shapeFlag:0,U=p.children,{patchFlag:q,shapeFlag:G}=p;if(q>0){if(q&128){Mn(T,U,g,v,I,A,O,C,N);return}else if(q&256){It(T,U,g,v,I,A,O,C,N);return}}G&8?(j&16&&x(T,I,A),U!==T&&u(g,U)):j&16?G&16?Mn(T,U,g,v,I,A,O,C,N):x(T,I,A,!0):(j&8&&u(g,""),G&16&&Z(U,g,v,I,A,O,C,N))},It=(f,p,g,v,I,A,O,C,N)=>{f=f||_s,p=p||_s;const T=f.length,j=p.length,U=Math.min(T,j);let q;for(q=0;q<U;q++){const G=p[q]=N?fn(p[q]):Ut(p[q]);_(f[q],G,g,null,I,A,O,C,N)}T>j?x(f,I,A,!0,!1,U):Z(p,g,v,I,A,O,C,N,U)},Mn=(f,p,g,v,I,A,O,C,N)=>{let T=0;const j=p.length;let U=f.length-1,q=j-1;for(;T<=U&&T<=q;){const G=f[T],te=p[T]=N?fn(p[T]):Ut(p[T]);if(Bn(G,te))_(G,te,g,null,I,A,O,C,N);else break;T++}for(;T<=U&&T<=q;){const G=f[U],te=p[q]=N?fn(p[q]):Ut(p[q]);if(Bn(G,te))_(G,te,g,null,I,A,O,C,N);else break;U--,q--}if(T>U){if(T<=q){const G=q+1,te=G<j?p[G].el:v;for(;T<=q;)_(null,p[T]=N?fn(p[T]):Ut(p[T]),g,te,I,A,O,C,N),T++}}else if(T>q)for(;T<=U;)it(f[T],I,A,!0),T++;else{const G=T,te=T,ge=new Map;for(T=te;T<=q;T++){const ut=p[T]=N?fn(p[T]):Ut(p[T]);ut.key!=null&&ge.set(ut.key,T)}let de,De=0;const Tt=q-te+1;let hs=!1,pu=0;const Zs=new Array(Tt);for(T=0;T<Tt;T++)Zs[T]=0;for(T=G;T<=U;T++){const ut=f[T];if(De>=Tt){it(ut,I,A,!0);continue}let Mt;if(ut.key!=null)Mt=ge.get(ut.key);else for(de=te;de<=q;de++)if(Zs[de-te]===0&&Bn(ut,p[de])){Mt=de;break}Mt===void 0?it(ut,I,A,!0):(Zs[Mt-te]=T+1,Mt>=pu?pu=Mt:hs=!0,_(ut,p[Mt],g,null,I,A,O,C,N),De++)}const mu=hs?Nv(Zs):_s;for(de=mu.length-1,T=Tt-1;T>=0;T--){const ut=te+T,Mt=p[ut],gu=ut+1<j?p[ut+1].el:v;Zs[T]===0?_(null,Mt,g,gu,I,A,O,C,N):hs&&(de<0||T!==mu[de]?bt(Mt,g,gu,2):de--)}}},bt=(f,p,g,v,I=null)=>{const{el:A,type:O,transition:C,children:N,shapeFlag:T}=f;if(T&6){bt(f.component.subTree,p,g,v);return}if(T&128){f.suspense.move(p,g,v);return}if(T&64){O.move(f,p,g,re);return}if(O===Ct){s(A,p,g);for(let U=0;U<N.length;U++)bt(N[U],p,g,v);s(f.anchor,p,g);return}if(O===va){M(f,p,g);return}if(v!==2&&T&1&&C)if(v===0)C.beforeEnter(A),s(A,p,g),ot(()=>C.enter(A),I);else{const{leave:U,delayLeave:q,afterLeave:G}=C,te=()=>s(A,p,g),ge=()=>{U(A,()=>{te(),G&&G()})};q?q(A,te,ge):ge()}else s(A,p,g)},it=(f,p,g,v=!1,I=!1)=>{const{type:A,props:O,ref:C,children:N,dynamicChildren:T,shapeFlag:j,patchFlag:U,dirs:q}=f;if(C!=null&&Za(C,null,g,f,!0),j&256){p.ctx.deactivate(f);return}const G=j&1&&q,te=!Ui(f);let ge;if(te&&(ge=O&&O.onVnodeBeforeUnmount)&&Lt(ge,p,f),j&6)w(f.component,g,v);else{if(j&128){f.suspense.unmount(g,v);return}G&&Ln(f,null,p,"beforeUnmount"),j&64?f.type.remove(f,p,g,I,re,v):T&&(A!==Ct||U>0&&U&64)?x(T,p,g,!1,!0):(A===Ct&&U&384||!I&&j&16)&&x(N,p,g),v&&us(f)}(te&&(ge=O&&O.onVnodeUnmounted)||G)&&ot(()=>{ge&&Lt(ge,p,f),G&&Ln(f,null,p,"unmounted")},g)},us=f=>{const{type:p,el:g,anchor:v,transition:I}=f;if(p===Ct){vi(g,v);return}if(p===va){W(f);return}const A=()=>{r(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:O,delayLeave:C}=I,N=()=>O(g,A);C?C(f.el,A,N):N()}else A()},vi=(f,p)=>{let g;for(;f!==p;)g=d(f),r(f),f=g;r(p)},w=(f,p,g)=>{const{bum:v,scope:I,update:A,subTree:O,um:C}=f;v&&Pi(v),I.stop(),A&&(A.active=!1,it(O,f,p,g)),C&&ot(C,p),ot(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(f,p,g,v=!1,I=!1,A=0)=>{for(let O=A;O<f.length;O++)it(f[O],p,g,v,I)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,p,g)=>{f==null?p._vnode&&it(p._vnode,null,null,!0):_(p._vnode||null,f,p,null,null,null,g),Su(),ef(),p._vnode=f},re={p:_,um:it,m:bt,r:us,mt:zt,mc:Z,pc:he,pbc:pe,n:D,o:t};let be,ee;return e&&([be,ee]=e(re)),{render:V,hydrate:be,createApp:Av(V,be)}}function Un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ef(t,e,n=!1){const s=t.children,r=e.children;if(Q(s)&&Q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=fn(r[i]),a.el=o.el),n||Ef(o,a)),a.type===Do&&(a.el=o.el)}}function Nv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Dv=t=>t.__isTeleport,Ct=Symbol(void 0),Do=Symbol(void 0),Nt=Symbol(void 0),va=Symbol(void 0),lr=[];let kt=null;function Se(t=!1){lr.push(kt=t?null:[])}function Ov(){lr.pop(),kt=lr[lr.length-1]||null}let Ir=1;function Mu(t){Ir+=t}function If(t){return t.dynamicChildren=Ir>0?kt||_s:null,Ov(),Ir>0&&kt&&kt.push(t),t}function Ae(t,e,n,s,r,i){return If(b(t,e,n,s,r,i,!0))}function xv(t,e,n,s,r){return If(fe(t,e,n,s,r,!0))}function ec(t){return t?t.__v_isVNode===!0:!1}function Bn(t,e){return t.type===e.type&&t.key===e.key}const Oo="__vInternal",bf=({key:t})=>t??null,Fi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ue(t)||Xe(t)||J(t)?{i:ht,r:t,k:e,f:!!n}:t:null;function b(t,e=null,n=null,s=0,r=null,i=t===Ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bf(e),ref:e&&Fi(e),scopeId:ko,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ht};return a?(tl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),Ir>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const fe=Pv;function Pv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===dv)&&(t=Nt),ec(t)){const a=An(t,e,!0);return n&&tl(a,n),Ir>0&&!i&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(zv(t)&&(t=t.__vccOpts),e){e=Mv(e);let{class:a,style:c}=e;a&&!Ue(a)&&(e.class=$c(a)),Ie(c)&&(Kd(c)&&!Q(c)&&(c=et({},c)),e.style=Fc(c))}const o=Ue(t)?1:Yy(t)?128:Dv(t)?64:Ie(t)?4:J(t)?2:0;return b(t,e,n,s,r,o,i,!0)}function Mv(t){return t?Kd(t)||Oo in t?et({},t):t:null}function An(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Lv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&bf(a),ref:e&&e.ref?n&&r?Q(r)?r.concat(Fi(e)):[r,Fi(e)]:Fi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&An(t.ssContent),ssFallback:t.ssFallback&&An(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gt(t=" ",e=0){return fe(Do,null,t,e)}function Wt(t="",e=!1){return e?(Se(),xv(Nt,null,t)):fe(Nt,null,t)}function Ut(t){return t==null||typeof t=="boolean"?fe(Nt):Q(t)?fe(Ct,null,t.slice()):typeof t=="object"?fn(t):fe(Do,null,String(t))}function fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:An(t)}function tl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),tl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Oo in e)?e._ctx=ht:r===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),s&64?(n=16,e=[gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=$c([e.class,s.class]));else if(r==="style")e.style=Fc([e.style,s.style]);else if(Eo(r)){const i=e[r],o=s[r];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Lt(t,e,n,s=null){wt(t,e,7,[n,s])}const Uv=wf();let Fv=0;function $v(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Uv,i={uid:Fv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gf(s,r),emitsOptions:nf(s,r),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qy.bind(null,i),t.ce&&t.ce(i),i}let ke=null;const Vv=()=>ke||ht,Rs=t=>{ke=t,t.scope.on()},Gn=()=>{ke&&ke.scope.off(),ke=null};function Tf(t){return t.vnode.shapeFlag&4}let br=!1;function Bv(t,e=!1){br=e;const{props:n,children:s}=t.vnode,r=Tf(t);Ev(t,n,r,e),Tv(t,s);const i=r?jv(t,e):void 0;return br=!1,i}function jv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hd(new Proxy(t.ctx,mv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Kv(t):null;Rs(t),qs();const i=wn(s,t,0,[t.props,r]);if(Ks(),Gn(),Nd(i)){if(i.then(Gn,Gn),e)return i.then(o=>{Lu(t,o,e)}).catch(o=>{Co(o,t,0)});t.asyncDep=i}else Lu(t,i,e)}else Sf(t,e)}function Lu(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Qd(e)),Sf(t,n)}let Uu;function Sf(t,e,n){const s=t.type;if(!t.render){if(!e&&Uu&&!s.render){const r=s.template||Zc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=et(et({isCustomElement:i,delimiters:a},o),c);s.render=Uu(r,l)}}t.render=s.render||Rt}Rs(t),qs(),gv(t),Ks(),Gn()}function qv(t){return new Proxy(t.attrs,{get(e,n){return lt(t,"get","$attrs"),e[n]}})}function Kv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=qv(t))},slots:t.slots,emit:t.emit,expose:e}}function xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qd(Hd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in cr)return cr[n](t)},has(e,n){return n in e||n in cr}}))}function Hv(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function zv(t){return J(t)&&"__vccOpts"in t}const yt=(t,e)=>Uy(t,e,br);function Cf(t,e,n){const s=arguments.length;return s===2?Ie(e)&&!Q(e)?ec(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ec(n)&&(n=[n]),fe(t,e,n))}const Wv=Symbol(""),Gv=()=>Zt(Wv),Qv="3.2.47",Yv="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,Fu=jn&&jn.createElement("template"),Xv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?jn.createElementNS(Yv,t):jn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Fu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Fu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zv(t,e,n){const s=t.style,r=Ue(n);if(n&&!r){if(e&&!Ue(e))for(const i in e)n[i]==null&&tc(s,i,"");for(const i in n)tc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const $u=/\s*!important$/;function tc(t,e,n){if(Q(n))n.forEach(s=>tc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=e_(t,e);$u.test(n)?t.setProperty(js(s),n.replace($u,""),"important"):t[s]=n}}const Vu=["Webkit","Moz","ms"],_a={};function e_(t,e){const n=_a[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return _a[e]=s;s=To(s);for(let r=0;r<Vu.length;r++){const i=Vu[r]+s;if(i in t)return _a[e]=i}return e}const Bu="http://www.w3.org/1999/xlink";function t_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bu,e.slice(6,e.length)):t.setAttributeNS(Bu,e,n);else{const i=Gg(e);n==null||i&&!Ad(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function n_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ad(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function fs(t,e,n,s){t.addEventListener(e,n,s)}function s_(t,e,n,s){t.removeEventListener(e,n,s)}function r_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=i_(e);if(s){const l=i[e]=c_(s,r);fs(t,a,l,c)}else o&&(s_(t,a,o,c),i[e]=void 0)}}const ju=/(?:Once|Passive|Capture)$/;function i_(t){let e;if(ju.test(t)){e={};let s;for(;s=t.match(ju);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):js(t.slice(2)),e]}let wa=0;const o_=Promise.resolve(),a_=()=>wa||(o_.then(()=>wa=0),wa=Date.now());function c_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;wt(l_(s,n.value),e,5,[s])};return n.value=t,n.attached=a_(),n}function l_(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const qu=/^on[a-z]/,u_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Jv(t,s,r):e==="style"?Zv(t,n,s):Eo(e)?Vc(e)||r_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):h_(t,e,s,r))?n_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),t_(t,e,s,r))};function h_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&qu.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qu.test(e)&&Ue(n)?!1:e in t}const d_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};tv.props;const Ku=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>Pi(e,n):e};function f_(t){t.target.composing=!0}function Hu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _t={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ku(r);const i=s||r.props&&r.props.type==="number";fs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ba(a)),t._assign(a)}),n&&fs(t,"change",()=>{t.value=t.value.trim()}),e||(fs(t,"compositionstart",f_),fs(t,"compositionend",Hu),fs(t,"change",Hu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ku(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ba(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},p_=["ctrl","shift","alt","meta"],m_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>p_.some(n=>t[`${n}Key`]&&!e.includes(n))},Po=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=m_[e[r]];if(i&&i(n,e))return}return t(n,...s)},g_=et({patchProp:u_},Xv);let zu;function y_(){return zu||(zu=kv(g_))}const v_=(...t)=>{const e=y_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=__(s);if(!r)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function __(t){return Ue(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},w_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),s.push(n[u],n[h],n[d],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Af(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):w_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new E_;const d=i<<2|a>>4;if(s.push(d),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class E_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I_=function(t){const e=Af(t);return kf.encodeByteArray(e,!0)},Xi=function(t){return I_(t).replace(/\./g,"")},Rf=function(t){try{return kf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=()=>b_().__FIREBASE_DEFAULTS__,S_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},C_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rf(t[1]);return e&&JSON.parse(e)},nl=()=>{try{return T_()||S_()||C_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nf=t=>{var e,n;return(n=(e=nl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},A_=t=>{const e=Nf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},k_=()=>{var t;return(t=nl())===null||t===void 0?void 0:t.config},Df=t=>{var e;return(e=nl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Xi(JSON.stringify(n)),Xi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function O_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function x_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P_(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function M_(){try{return typeof indexedDB=="object"}catch{return!1}}function L_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="FirebaseError";class ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=U_,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?F_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ln(r,a,s)}}function F_(t,e){return t.replace($_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const $_=/\{\$([^}]+)}/g;function V_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Wu(i)&&Wu(o)){if(!Ji(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Wu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function rr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function B_(t,e){const n=new j_(t,e);return n.subscribe.bind(n)}class j_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");q_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ea),r.error===void 0&&(r.error=Ea),r.complete===void 0&&(r.complete=Ea);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function q_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ea(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new R_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(z_(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:H_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H_(t){return t===$n?void 0:t}function z_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new K_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const G_={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Q_=ce.INFO,Y_={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},X_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Y_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=Q_,this._logHandler=X_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const J_=(t,e)=>e.some(n=>t instanceof n);let Gu,Qu;function Z_(){return Gu||(Gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ew(){return Qu||(Qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Of=new WeakMap,nc=new WeakMap,xf=new WeakMap,Ia=new WeakMap,rl=new WeakMap;function tw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(En(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Of.set(n,t)}).catch(()=>{}),rl.set(e,t),e}function nw(t){if(nc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nc.set(t,e)}let sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sw(t){sc=t(sc)}function rw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ba(this),e,...n);return xf.set(s,e.sort?e.sort():[e]),En(s)}:ew().includes(t)?function(...e){return t.apply(ba(this),e),En(Of.get(this))}:function(...e){return En(t.apply(ba(this),e))}}function iw(t){return typeof t=="function"?rw(t):(t instanceof IDBTransaction&&nw(t),J_(t,Z_())?new Proxy(t,sc):t)}function En(t){if(t instanceof IDBRequest)return tw(t);if(Ia.has(t))return Ia.get(t);const e=iw(t);return e!==t&&(Ia.set(t,e),rl.set(e,t)),e}const ba=t=>rl.get(t);function ow(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=En(o);return s&&o.addEventListener("upgradeneeded",c=>{s(En(o.result),c.oldVersion,c.newVersion,En(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const aw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],Ta=new Map;function Yu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ta.get(e))return Ta.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=cw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||aw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ta.set(e,i),i}sw(t=>({...t,get:(e,n,s)=>Yu(e,n)||t.get(e,n,s),has:(e,n)=>!!Yu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rc="@firebase/app",Xu="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new sl("@firebase/app"),hw="@firebase/app-compat",dw="@firebase/analytics-compat",fw="@firebase/analytics",pw="@firebase/app-check-compat",mw="@firebase/app-check",gw="@firebase/auth",yw="@firebase/auth-compat",vw="@firebase/database",_w="@firebase/database-compat",ww="@firebase/functions",Ew="@firebase/functions-compat",Iw="@firebase/installations",bw="@firebase/installations-compat",Tw="@firebase/messaging",Sw="@firebase/messaging-compat",Cw="@firebase/performance",Aw="@firebase/performance-compat",kw="@firebase/remote-config",Rw="@firebase/remote-config-compat",Nw="@firebase/storage",Dw="@firebase/storage-compat",Ow="@firebase/firestore",xw="@firebase/firestore-compat",Pw="firebase",Mw="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="[DEFAULT]",Lw={[rc]:"fire-core",[hw]:"fire-core-compat",[fw]:"fire-analytics",[dw]:"fire-analytics-compat",[mw]:"fire-app-check",[pw]:"fire-app-check-compat",[gw]:"fire-auth",[yw]:"fire-auth-compat",[vw]:"fire-rtdb",[_w]:"fire-rtdb-compat",[ww]:"fire-fn",[Ew]:"fire-fn-compat",[Iw]:"fire-iid",[bw]:"fire-iid-compat",[Tw]:"fire-fcm",[Sw]:"fire-fcm-compat",[Cw]:"fire-perf",[Aw]:"fire-perf-compat",[kw]:"fire-rc",[Rw]:"fire-rc-compat",[Nw]:"fire-gcs",[Dw]:"fire-gcs-compat",[Ow]:"fire-fst",[xw]:"fire-fst-compat","fire-js":"fire-js",[Pw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map,oc=new Map;function Uw(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ns(t){const e=t.name;if(oc.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,t);for(const n of Zi.values())Uw(n,t);return!0}function il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},In=new Kr("app","Firebase",Fw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=Mw;function Pf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ic,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw In.create("bad-app-name",{appName:String(r)});if(n||(n=k_()),!n)throw In.create("no-options");const i=Zi.get(r);if(i){if(Ji(n,i.options)&&Ji(s,i.config))return i;throw In.create("duplicate-app",{appName:r})}const o=new W_(r);for(const c of oc.values())o.addComponent(c);const a=new $w(n,s,o);return Zi.set(r,a),a}function Mf(t=ic){const e=Zi.get(t);if(!e&&t===ic)return Pf();if(!e)throw In.create("no-app",{appName:t});return e}function bn(t,e,n){var s;let r=(s=Lw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}Ns(new Zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="firebase-heartbeat-database",Bw=1,Tr="firebase-heartbeat-store";let Sa=null;function Lf(){return Sa||(Sa=ow(Vw,Bw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tr)}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),Sa}async function jw(t){try{return(await Lf()).transaction(Tr).objectStore(Tr).get(Uf(t))}catch(e){if(e instanceof ln)es.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function Ju(t,e){try{const s=(await Lf()).transaction(Tr,"readwrite");return await s.objectStore(Tr).put(e,Uf(t)),s.done}catch(n){if(n instanceof ln)es.warn(n.message);else{const s=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(s.message)}}}function Uf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=1024,Kw=30*24*60*60*1e3;class Hw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ww(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Kw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zu(),{heartbeatsToSend:n,unsentEntries:s}=zw(this._heartbeatsCache.heartbeats),r=Xi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Zu(){return new Date().toISOString().substring(0,10)}function zw(t,e=qw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),eh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),eh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ww{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return M_()?L_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await jw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ju(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function eh(t){return Xi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t){Ns(new Zn("platform-logger",e=>new lw(e),"PRIVATE")),Ns(new Zn("heartbeat",e=>new Hw(e),"PRIVATE")),bn(rc,Xu,t),bn(rc,Xu,"esm2017"),bn("fire-js","")}Gw("");function ol(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Ff(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qw=Ff,$f=new Kr("auth","Firebase",Ff());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new sl("@firebase/auth");function $i(t,...e){th.logLevel<=ce.ERROR&&th.error(`Auth (${zr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw al(t,...e)}function Bt(t,...e){return al(t,...e)}function Yw(t,e,n){const s=Object.assign(Object.assign({},Qw()),{[e]:n});return new Kr("auth","Firebase",s).create(e,{appName:t.name})}function al(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return $f.create(t,...e)}function K(t,e,...n){if(!t)throw al(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $i(e),new Error(e)}function nn(t,e){t||Yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Map;function Xt(t){nn(t instanceof Function,"Expected a class definition");let e=nh.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e){const n=il(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ji(i,e??{}))return r;Ot(r,"already-initialized")}return n.initialize({options:e})}function Jw(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zw(){return sh()==="http:"||sh()==="https:"}function sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zw()||O_()||"connection"in navigator)?navigator.onLine:!0}function tE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=D_()||x_()}get(){return eE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=new Wr(3e4,6e4);function Gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qr(t,e,n,s,r={}){return Bf(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Hr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Vf.fetch()(jf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},nE),e);try{const r=new rE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Si(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Si(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Si(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Yw(t,u,l);Ot(t,u)}}catch(r){if(r instanceof ln)throw r;Ot(t,"internal-error",{message:String(r)})}}async function Yr(t,e,n,s,r={}){const i=await Qr(t,e,n,s,r);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function jf(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?cl(t.config,r):`${t.config.apiScheme}://${r}`}class rE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bt(this.auth,"network-request-failed")),sE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Si(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Bt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t,e){return Qr(t,"POST","/v1/accounts:delete",e)}async function oE(t,e){return Qr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aE(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),r=ll(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ur(Ca(r.auth_time)),issuedAtTime:ur(Ca(r.iat)),expirationTime:ur(Ca(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ca(t){return Number(t)*1e3}function ll(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return $i("JWT malformed, contained fewer than 3 sections"),null;try{const r=Rf(n);return r?JSON.parse(r):($i("Failed to decode base64 JWT payload"),null)}catch(r){return $i("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function cE(t){const e=ll(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ln&&lE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function lE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ur(this.lastLoginAt),this.creationTime=ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Sr(t,oE(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fE(i.providerUserInfo):[],a=dE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function hE(t){const e=Ve(t);await eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function fE(t){return t.map(e=>{var{providerId:n}=e,s=ol(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(t,e){const n=await Bf(t,{},async()=>{const s=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=jf(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await pE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Cr;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ol(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aE(this,e)}reload(){return hE(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sr(this,iE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:W,isAnonymous:oe,providerData:Te,stsTokenManager:Re}=n;K(M&&Re,e,"internal-error");const Z=Cr.fromJSON(this.name,Re);K(typeof M=="string",e,"internal-error"),hn(h,e.name),hn(d,e.name),K(typeof W=="boolean",e,"internal-error"),K(typeof oe=="boolean",e,"internal-error"),hn(m,e.name),hn(y,e.name),hn(_,e.name),hn(R,e.name),hn(k,e.name),hn(P,e.name);const ve=new Qn({uid:M,auth:e,email:d,emailVerified:W,displayName:h,isAnonymous:oe,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:Z,createdAt:k,lastLoginAt:P});return Te&&Array.isArray(Te)&&(ve.providerData=Te.map(pe=>Object.assign({},pe))),R&&(ve._redirectEventId=R),ve}static async _fromIdTokenResponse(e,n,s=!1){const r=new Cr;r.updateFromServerResponse(n);const i=new Qn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await eo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kf.type="NONE";const rh=Kf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Vi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Vi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ts(Xt(rh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Xt(rh);const o=Vi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Qn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ts(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ts(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qf(e))return"Blackberry";if(Yf(e))return"Webos";if(ul(e))return"Safari";if((e.includes("chrome/")||zf(e))&&!e.includes("edge/"))return"Chrome";if(Gf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hf(t=tt()){return/firefox\//i.test(t)}function ul(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zf(t=tt()){return/crios\//i.test(t)}function Wf(t=tt()){return/iemobile/i.test(t)}function Gf(t=tt()){return/android/i.test(t)}function Qf(t=tt()){return/blackberry/i.test(t)}function Yf(t=tt()){return/webos/i.test(t)}function Mo(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mE(t=tt()){var e;return Mo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gE(){return P_()&&document.documentMode===10}function Xf(t=tt()){return Mo(t)||Gf(t)||Yf(t)||Qf(t)||/windows phone/i.test(t)||Wf(t)}function yE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e=[]){let n;switch(t){case"Browser":n=ih(tt());break;case"Worker":n=`${ih(tt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oh(this),this.idTokenSubscription=new oh(this),this.beforeStateQueue=new vE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$f,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Xr(t){return Ve(t)}class oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=B_(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wE(t,e,n){const s=Xr(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Zf(e),{host:o,port:a}=EE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||IE()}function Zf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EE(t){const e=Zf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ah(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ah(o)}}}function ah(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function bE(t,e){return Qr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TE(t,e){return Yr(t,"POST","/v1/accounts:signInWithPassword",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}async function CE(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends hl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ar(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ar(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return TE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return SE(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return bE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CE(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return Yr(t,"POST","/v1/accounts:signInWithIdp",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="http://localhost";class ts extends hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ol(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ts(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ss(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:AE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RE(t){const e=sr(rr(t)).link,n=e?sr(rr(e)).deep_link_id:null,s=sr(rr(t)).deep_link_id;return(s?sr(rr(s)).link:null)||s||n||e||t}class dl{constructor(e){var n,s,r,i,o,a;const c=sr(rr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=kE((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RE(e);try{return new dl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return Ar._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=dl.parseLink(n);return K(s,"argument-error"),Ar._fromEmailAndCode(e,s.code,s.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends ep{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Jr{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Jr{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Jr{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vn.credential(n,s)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(t,e){return Yr(t,"POST","/v1/accounts:signUp",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Qn._fromIdTokenResponse(e,s,r),o=ch(s);return new ns({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ch(s);return new ns({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ch(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends ln{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,to.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new to(e,n,s,r)}}function tp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?to._fromErrorAndOperation(t,i,e,s):i})}async function DE(t,e,n=!1){const s=await Sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Sr(t,tp(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=ll(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),ns._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(t,e,n=!1){const s="signIn",r=await tp(t,s,e),i=await ns._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function xE(t,e){return np(Xr(t),e)}async function PE(t,e,n){const s=Xr(t),r=await NE(s,{returnSecureToken:!0,email:e,password:n}),i=await ns._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function ME(t,e,n){return xE(Ve(t),Hs.credential(e,n))}function LE(t,e,n,s){return Ve(t).onIdTokenChanged(e,n,s)}function UE(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function sp(t,e,n,s){return Ve(t).onAuthStateChanged(e,n,s)}function FE(t){return Ve(t).signOut()}const no="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(no,"1"),this.storage.removeItem(no),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(){const t=tt();return ul(t)||Mo(t)}const VE=1e3,BE=10;class ip extends rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$E()&&yE(),this.fallbackToPolling=Xf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);gE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,BE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},VE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ip.type="LOCAL";const jE=ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op extends rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}op.type="SESSION";const ap=op;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Lo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await qE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=fl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function HE(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function zE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GE(){return cp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="firebaseLocalStorageDb",QE=1,so="firebaseLocalStorage",up="fbase_key";class Zr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uo(t,e){return t.transaction([so],e?"readwrite":"readonly").objectStore(so)}function YE(){const t=indexedDB.deleteDatabase(lp);return new Zr(t).toPromise()}function cc(){const t=indexedDB.open(lp,QE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(so,{keyPath:up})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(so)?e(s):(s.close(),await YE(),e(await cc()))})})}async function lh(t,e,n){const s=Uo(t,!0).put({[up]:e,value:n});return new Zr(s).toPromise()}async function XE(t,e){const n=Uo(t,!1).get(e),s=await new Zr(n).toPromise();return s===void 0?null:s.value}function uh(t,e){const n=Uo(t,!0).delete(e);return new Zr(n).toPromise()}const JE=800,ZE=3;class hp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ZE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(GE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zE(),!this.activeServiceWorker)return;this.sender=new KE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cc();return await lh(e,no,"1"),await uh(e,no),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>lh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>XE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Uo(r,!1).getAll();return new Zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hp.type="LOCAL";const e0=hp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function n0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Bt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",t0().appendChild(s)})}function s0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Wr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t,e){return e?Xt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i0(t){return np(t.auth,new pl(t),t.bypassAuthState)}function o0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),OE(n,new pl(t),t.bypassAuthState)}async function a0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),DE(n,new pl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i0;case"linkViaPopup":case"linkViaRedirect":return a0;case"reauthViaPopup":case"reauthViaRedirect":return o0;default:Ot(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=new Wr(2e3,1e4);class ys extends dp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,c0.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="pendingRedirect",Bi=new Map;class u0 extends dp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const s=await h0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h0(t,e){const n=p0(e),s=f0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function d0(t,e){Bi.set(t._key(),e)}function f0(t){return Xt(t._redirectPersistence)}function p0(t){return Vi(l0,t.config.apiKey,t.name)}async function m0(t,e,n=!1){const s=Xr(t),r=r0(s,e),o=await new u0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=10*60*1e3;class y0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!v0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!fp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g0&&this.cachedEventUids.clear(),this.cachedEventUids.has(hh(e))}saveEventToCache(e){this.cachedEventUids.add(hh(e)),this.lastProcessedEventTime=Date.now()}}function hh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function v0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e={}){return Qr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E0=/^https?/;async function I0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _0(t);for(const n of e)try{if(b0(n))return}catch{}Ot(t,"unauthorized-domain")}function b0(t){const e=ac(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!E0.test(n))return!1;if(w0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=new Wr(3e4,6e4);function dh(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function S0(t){return new Promise((e,n)=>{var s,r,i;function o(){dh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dh(),n(Bt(t,"network-request-failed"))},timeout:T0.get()})}if(!((r=(s=jt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)o();else{const a=s0("iframefcb");return jt()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},n0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ji=null,e})}let ji=null;function C0(t){return ji=ji||S0(t),ji}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new Wr(5e3,15e3),k0="__/auth/iframe",R0="emulator/auth/iframe",N0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O0(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cl(e,R0):`https://${t.config.authDomain}/${k0}`,s={apiKey:e.apiKey,appName:t.name,v:zr},r=D0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Hr(s).slice(1)}`}async function x0(t){const e=await C0(t),n=jt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:O0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=jt().setTimeout(()=>{i(o)},A0.get());function c(){jt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M0=500,L0=600,U0="_blank",F0="http://localhost";class fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $0(t,e,n,s=M0,r=L0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},P0),{width:s.toString(),height:r.toString(),top:i,left:o}),l=tt().toLowerCase();n&&(a=zf(l)?U0:n),Hf(l)&&(e=e||F0,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(mE(l)&&a!=="_self")return V0(e||"",a),new fh(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new fh(h)}function V0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="__/auth/handler",j0="emulator/auth/handler";function ph(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:zr,eventId:r};if(e instanceof ep){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",V_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Jr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${q0(t)}?${Hr(a).slice(1)}`}function q0({config:t}){return t.emulator?cl(t,j0):`https://${t.authDomain}/${B0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="webStorageSupport";class K0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ap,this._completeRedirectFn=m0,this._overrideRedirectResult=d0}async _openPopup(e,n,s,r){var i;nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ph(e,n,s,ac(),r);return $0(e,o,fl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),HE(ph(e,n,s,ac(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(nn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await x0(e),s=new y0(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Aa,{type:Aa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Aa];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=I0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xf()||ul()||Mo()}}const H0=K0;var mh="@firebase/auth",gh="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function G0(t){Ns(new Zn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{K(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),K(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jf(t)},u=new _E(a,c,l);return Jw(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ns(new Zn("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(s=>new z0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(mh,gh,W0(t)),bn(mh,gh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=5*60,Y0=Df("authIdTokenMaxAge")||Q0;let yh=null;const X0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Y0)return;const r=n==null?void 0:n.token;yh!==r&&(yh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function kr(t=Mf()){const e=il(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xw(t,{popupRedirectResolver:H0,persistence:[e0,jE,ap]}),s=Df("authTokenSyncURL");if(s){const i=X0(s);UE(n,i,()=>i(n.currentUser)),LE(n,o=>i(o))}const r=Nf("auth");return r&&wE(n,`http://${r}`),n}G0("Browser");const Dn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},J0={name:"navbar",data(){return{isLoggedIn:!1,user:!1}},created(){const t=kr();sp(t,e=>{e&&(this.isLoggedIn=!0,this.user=e.email)})},methods:{logout:function(){const t=kr();FE(t).then(()=>{this.$router.go({path:this.$router.path})})}}},pp=t=>(Ky("data-v-307726af"),t=t(),Hy(),t),Z0={class:"nav-wrapper green"},eI={class:"container"},tI=pp(()=>b("a",{href:"#","data-activates":"mobile-demo",class:"button-collapse"},[b("i",{class:"material-icons"},"menu")],-1)),nI={class:"right hide-on-med-and-down"},sI={key:0},rI={class:"email black-text"},iI={key:1},oI={key:2},aI={key:3},cI={key:4},lI={class:"side-nav",id:"mobile-demo"},uI={key:0},hI={key:1},dI={key:2},fI=pp(()=>b("li",null,[b("a",{href:"#",class:"divider"})],-1)),pI={key:3};function mI(t,e,n,s,r,i){const o=Jn("router-link");return Se(),Ae("nav",null,[b("div",Z0,[b("div",eI,[fe(o,{to:"/",class:"brand-logo"},{default:at(()=>[gt("Employee Manager")]),_:1}),tI,b("ul",nI,[r.isLoggedIn?(Se(),Ae("li",sI,[b("span",rI,Ft(r.user),1)])):Wt("",!0),r.isLoggedIn?(Se(),Ae("li",iI,[fe(o,{to:"/"},{default:at(()=>[gt("Dashboard")]),_:1})])):Wt("",!0),r.isLoggedIn?Wt("",!0):(Se(),Ae("li",oI,[fe(o,{to:"/login"},{default:at(()=>[gt("Login")]),_:1})])),r.isLoggedIn?Wt("",!0):(Se(),Ae("li",aI,[fe(o,{to:"/register"},{default:at(()=>[gt("Register")]),_:1})])),r.isLoggedIn?(Se(),Ae("li",cI,[b("button",{onClick:e[0]||(e[0]=(...a)=>i.logout&&i.logout(...a)),class:"btn black"},"Logout")])):Wt("",!0)]),b("ul",lI,[r.isLoggedIn?(Se(),Ae("li",uI,[fe(o,{to:"/"},{default:at(()=>[gt("Dashboard")]),_:1})])):Wt("",!0),r.isLoggedIn?Wt("",!0):(Se(),Ae("li",hI,[fe(o,{to:"/login"},{default:at(()=>[gt("Login")]),_:1})])),r.isLoggedIn?Wt("",!0):(Se(),Ae("li",dI,[fe(o,{to:"/register"},{default:at(()=>[gt("Register")]),_:1})])),fI,r.isLoggedIn?(Se(),Ae("li",pI,[b("button",{onClick:e[1]||(e[1]=(...a)=>i.logout&&i.logout(...a)),class:"btn"},"Logout")])):Wt("",!0)])])])])}const gI=Dn(J0,[["render",mI],["__scopeId","data-v-307726af"]]),yI={apiKey:"AIzaSyBTUcaOlA844yD33oP-gGOOa2mXCKP_G_Y",authDomain:"vue-firestore-3b010.firebaseapp.com",projectId:"vue-firestore-3b010",storageBucket:"vue-firestore-3b010.appspot.com",messagingSenderId:"976001891152",appId:"1:976001891152:web:c05088bcc9769fd0f90a55"};var vI="firebase",_I="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(vI,_I,"app");var wI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,ml=ml||{},z=wI||self;function ro(){}function Fo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ei(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function EI(t){return Object.prototype.hasOwnProperty.call(t,ka)&&t[ka]||(t[ka]=++II)}var ka="closure_uid_"+(1e9*Math.random()>>>0),II=0;function bI(t,e,n){return t.call.apply(t.bind,arguments)}function TI(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=bI:Je=TI,Je.apply(null,arguments)}function Ci(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function On(){this.s=this.s,this.o=this.o}var SI=0;On.prototype.s=!1;On.prototype.na=function(){!this.s&&(this.s=!0,this.M(),SI!=0)&&EI(this)};On.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function vh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Fo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var CI=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",ro,e),z.removeEventListener("test",ro,e)}catch{}return t}();function io(t){return/^[\s\xa0]*$/.test(t)}var _h=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ra(t,e){return t<e?-1:t>e?1:0}function $o(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Vt(t){return $o().indexOf(t)!=-1}function yl(t){return yl[" "](t),t}yl[" "]=ro;function AI(t){var e=NI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kI=Vt("Opera"),Ds=Vt("Trident")||Vt("MSIE"),gp=Vt("Edge"),lc=gp||Ds,yp=Vt("Gecko")&&!($o().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge"))&&!(Vt("Trident")||Vt("MSIE"))&&!Vt("Edge"),RI=$o().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge");function vp(){var t=z.document;return t?t.documentMode:void 0}var oo;e:{var Na="",Da=function(){var t=$o();if(yp)return/rv:([^\);]+)(\)|;)/.exec(t);if(gp)return/Edge\/([\d\.]+)/.exec(t);if(Ds)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(RI)return/WebKit\/(\S+)/.exec(t);if(kI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Da&&(Na=Da?Da[1]:""),Ds){var Oa=vp();if(Oa!=null&&Oa>parseFloat(Na)){oo=String(Oa);break e}}oo=Na}var NI={};function DI(){return AI(function(){let t=0;const e=_h(String(oo)).split("."),n=_h("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ra(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ra(r[2].length==0,i[2].length==0)||Ra(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var uc;if(z.document&&Ds){var wh=vp();uc=wh||parseInt(oo,10)||void 0}else uc=void 0;var OI=uc;function Rr(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yp){e:{try{yl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rr.X.h.call(this)}}Ke(Rr,Ze);var xI={2:"touch",3:"pen",4:"mouse"};Rr.prototype.h=function(){Rr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ti="closure_listenable_"+(1e6*Math.random()|0),PI=0;function MI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++PI,this.ba=this.ea=!1}function Vo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function vl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function _p(t){const e={};for(const n in t)e[n]=t[n];return e}const Eh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Eh.length;i++)n=Eh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Bo(t){this.src=t,this.g={},this.h=0}Bo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=dc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new MI(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function hc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=mp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Vo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var _l="closure_lm_"+(1e6*Math.random()|0),xa={};function Ep(t,e,n,s,r){if(s&&s.once)return bp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ep(t,e[i],n,s,r);return null}return n=Il(n),t&&t[ti]?t.N(e,n,ei(s)?!!s.capture:!!s,r):Ip(t,e,n,!1,s,r)}function Ip(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ei(r)?!!r.capture:!!r,a=El(t);if(a||(t[_l]=a=new Bo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=LI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)CI||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Sp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function LI(){function t(n){return e.call(t.src,t.listener,n)}const e=UI;return t}function bp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)bp(t,e[i],n,s,r);return null}return n=Il(n),t&&t[ti]?t.O(e,n,ei(s)?!!s.capture:!!s,r):Ip(t,e,n,!0,s,r)}function Tp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tp(t,e[i],n,s,r);else s=ei(s)?!!s.capture:!!s,n=Il(n),t&&t[ti]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=dc(i,n,s,r),-1<n&&(Vo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=El(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dc(e,n,s,r)),(n=-1<t?e[t]:null)&&wl(n))}function wl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ti])hc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Sp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=El(e))?(hc(n,t),n.h==0&&(n.src=null,e[_l]=null)):Vo(t)}}}function Sp(t){return t in xa?xa[t]:xa[t]="on"+t}function UI(t,e){if(t.ba)t=!0;else{e=new Rr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&wl(t),t=n.call(s,e)}return t}function El(t){return t=t[_l],t instanceof Bo?t:null}var Pa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Il(t){return typeof t=="function"?t:(t[Pa]||(t[Pa]=function(e){return t.handleEvent(e)}),t[Pa])}function Be(){On.call(this),this.i=new Bo(this),this.P=this,this.I=null}Ke(Be,On);Be.prototype[ti]=!0;Be.prototype.removeEventListener=function(t,e,n,s){Tp(this,t,e,n,s)};function qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var r=e;e=new Ze(s,t),wp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Ai(o,s,!0,e)&&r}if(o=e.g=t,r=Ai(o,s,!0,e)&&r,r=Ai(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Ai(o,s,!1,e)&&r}Be.prototype.M=function(){if(Be.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Vo(n[s]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ai(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&hc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var bl=z.JSON.stringify;function FI(){var t=kp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $I{constructor(){this.h=this.g=null}add(e,n){const s=Cp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Cp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new VI,t=>t.reset());class VI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BI(t){z.setTimeout(()=>{throw t},0)}function Ap(t,e){fc||jI(),pc||(fc(),pc=!0),kp.add(t,e)}var fc;function jI(){var t=z.Promise.resolve(void 0);fc=function(){t.then(qI)}}var pc=!1,kp=new $I;function qI(){for(var t;t=FI();){try{t.h.call(t.g)}catch(n){BI(n)}var e=Cp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pc=!1}function jo(t,e){Be.call(this),this.h=t||1,this.g=e||z,this.j=Je(this.lb,this),this.l=Date.now()}Ke(jo,Be);F=jo.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),qe(this,"tick"),this.ca&&(Tl(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){jo.X.M.call(this),Tl(this),delete this.g};function Sl(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Rp(t){t.g=Sl(()=>{t.g=null,t.i&&(t.i=!1,Rp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KI extends On{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Rp(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nr(t){On.call(this),this.h=t,this.g={}}Ke(Nr,On);var Ih=[];function Np(t,e,n,s){Array.isArray(n)||(n&&(Ih[0]=n.toString()),n=Ih);for(var r=0;r<n.length;r++){var i=Ep(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Dp(t){vl(t.g,function(e,n){this.g.hasOwnProperty(n)&&wl(e)},t),t.g={}}Nr.prototype.M=function(){Nr.X.M.call(this),Dp(this)};Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qo(){this.g=!0}qo.prototype.Aa=function(){this.g=!1};function HI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function zI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function vs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+GI(t,n)+(s?" "+s:"")})}function WI(t,e){t.info(function(){return"TIMEOUT: "+e})}qo.prototype.info=function(){};function GI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return bl(n)}catch{return e}}var as={},bh=null;function Ko(){return bh=bh||new Be}as.Pa="serverreachability";function Op(t){Ze.call(this,as.Pa,t)}Ke(Op,Ze);function Dr(t){const e=Ko();qe(e,new Op(e))}as.STAT_EVENT="statevent";function xp(t,e){Ze.call(this,as.STAT_EVENT,t),this.stat=e}Ke(xp,Ze);function rt(t){const e=Ko();qe(e,new xp(e,t))}as.Qa="timingevent";function Pp(t,e){Ze.call(this,as.Qa,t),this.size=e}Ke(Pp,Ze);function ni(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Ho={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Mp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Cl(){}Cl.prototype.h=null;function Th(t){return t.h||(t.h=t.i())}function Lp(){}var si={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Al(){Ze.call(this,"d")}Ke(Al,Ze);function kl(){Ze.call(this,"c")}Ke(kl,Ze);var mc;function zo(){}Ke(zo,Cl);zo.prototype.g=function(){return new XMLHttpRequest};zo.prototype.i=function(){return{}};mc=new zo;function ri(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Nr(this),this.O=QI,t=lc?125:void 0,this.T=new jo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Up}function Up(){this.i=null,this.g="",this.h=!1}var QI=45e3,gc={},ao={};F=ri.prototype;F.setTimeout=function(t){this.O=t};function yc(t,e,n){t.K=1,t.v=Go(sn(e)),t.s=n,t.P=!0,Fp(t,null)}function Fp(t,e){t.F=Date.now(),ii(t),t.A=sn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),zp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Up,t.g=fm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new KI(Je(t.La,t,t.g),t.N)),Np(t.S,t.g,"readystatechange",t.ib),e=t.H?_p(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Dr(),HI(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&Jt(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||lc||this.g&&(this.h.h||this.g.fa()||kh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Dr(3):Dr(2)),Wo(this);var n=this.g.aa();this.Y=n;t:if($p(this)){var s=kh(this.g);t="";var r=s.length,i=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kn(this),hr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,zI(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!io(a)){var l=a;break t}}l=null}if(n=l)vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vc(this,n);else{this.i=!1,this.o=3,rt(12),Kn(this),hr(this);break e}}this.P?(Vp(this,u,o),lc&&this.i&&u==3&&(Np(this.S,this.T,"tick",this.hb),this.T.start())):(vs(this.j,this.m,o,null),vc(this,o)),u==4&&Kn(this),this.i&&!this.I&&(u==4?lm(this.l,this):(this.i=!1,ii(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Kn(this),hr(this)}}}catch{}finally{}};function $p(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Vp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=YI(t,n),r==ao){e==4&&(t.o=4,rt(14),s=!1),vs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==gc){t.o=4,rt(15),vs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vs(t.j,t.m,r,null),vc(t,r);$p(t)&&r!=ao&&r!=gc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ml(e),e.K=!0,rt(11))):(vs(t.j,t.m,n,"[Invalid Chunked Response]"),Kn(t),hr(t))}F.hb=function(){if(this.g){var t=Jt(this.g),e=this.g.fa();this.C<e.length&&(Wo(this),Vp(this,t,e),this.i&&t!=4&&ii(this))}};function YI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ao:(n=Number(e.substring(n,s)),isNaN(n)?gc:(s+=1,s+n>e.length?ao:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.I=!0,Kn(this)};function ii(t){t.V=Date.now()+t.O,Bp(t,t.O)}function Bp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ni(Je(t.gb,t),e)}function Wo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(WI(this.j,this.A),this.K!=2&&(Dr(),rt(17)),Kn(this),this.o=2,hr(this)):Bp(this,this.V-t)};function hr(t){t.l.G==0||t.I||lm(t.l,t)}function Kn(t){Wo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tl(t.T),Dp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||_c(n.h,t))){if(!t.J&&_c(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)uo(n),Xo(n);else break e;Pl(n),rt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ni(Je(n.cb,n),6e3));if(1>=Qp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Hn(n,11)}else if((t.J||n.g==t)&&uo(n),!io(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Rl(i,i.h),i.h=null))}if(s.D){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Ee(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=dm(s,s.H?s.ka:null,s.V),o.J){Yp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Wo(a),ii(a)),s.g=o}else am(s);0<n.i.length&&Jo(n)}else l[0]!="stop"&&l[0]!="close"||Hn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Hn(n,7):xl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Dr(4)}catch{}}function XI(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function JI(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function jp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JI(t),s=XI(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var qp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Yn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Yn){this.h=e!==void 0?e:t.h,co(this,t.j),this.s=t.s,this.g=t.g,lo(this,t.m),this.l=t.l,e=t.i;var n=new Or;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sh(this,n),this.o=t.o}else t&&(n=String(t).match(qp))?(this.h=!!e,co(this,n[1]||"",!0),this.s=ir(n[2]||""),this.g=ir(n[3]||"",!0),lo(this,n[4]),this.l=ir(n[5]||"",!0),Sh(this,n[6]||"",!0),this.o=ir(n[7]||"")):(this.h=!!e,this.i=new Or(null,this.h))}Yn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(or(e,Ch,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(or(e,Ch,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(or(n,n.charAt(0)=="/"?nb:tb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",or(n,rb)),t.join("")};function sn(t){return new Yn(t)}function co(t,e,n){t.j=n?ir(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sh(t,e,n){e instanceof Or?(t.i=e,ib(t.i,t.h)):(n||(e=or(e,sb)),t.i=new Or(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Go(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ir(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function or(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ch=/[#\/\?@]/g,tb=/[#\?:]/g,nb=/[#\?]/g,sb=/[#\?@]/g,rb=/#/g;function Or(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new Map,t.h=0,t.i&&ZI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Or.prototype;F.add=function(t,e){xn(this),this.i=null,t=zs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Kp(t,e){xn(t),e=zs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hp(t,e){return xn(t),e=zs(t,e),t.g.has(e)}F.forEach=function(t,e){xn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.oa=function(){xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.W=function(t){xn(this);let e=[];if(typeof t=="string")Hp(this,t)&&(e=e.concat(this.g.get(zs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return xn(this),this.i=null,t=zs(this,t),Hp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function zp(t,e,n){Kp(t,e),0<n.length&&(t.i=null,t.g.set(zs(t,e),gl(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function zs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ib(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Kp(this,s),zp(this,r,n))},t)),t.j=e}var ob=class{constructor(e,n){this.h=e,this.g=n}};function Wp(t){this.l=t||ab,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ab=10;function Gp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Qp(t){return t.h?1:t.g?t.g.size:0}function _c(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rl(t,e){t.g?t.g.add(e):t.h=e}function Yp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Wp.prototype.cancel=function(){if(this.i=Xp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gl(t.i)}function Nl(){}Nl.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Nl.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function cb(){this.g=new Nl}function lb(t,e,n){const s=n||"";try{jp(t,function(r,i){let o=r;ei(r)&&(o=bl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ub(t,e){const n=new qo;if(z.Image){const s=new Image;s.onload=Ci(ki,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ci(ki,n,s,"TestLoadImage: error",!1,e),s.onabort=Ci(ki,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ci(ki,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ki(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function oi(t){this.l=t.ac||null,this.j=t.jb||!1}Ke(oi,Cl);oi.prototype.g=function(){return new Qo(this.l,this.j)};oi.prototype.i=function(t){return function(){return t}}({});function Qo(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Qo,Be);var Dl=0;F=Qo.prototype;F.open=function(t,e){if(this.readyState!=Dl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xr(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=Dl};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xr(this)),this.g&&(this.readyState=3,xr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Jp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ai(this):xr(this),this.readyState==3&&Jp(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,ai(this))};F.Ua=function(t){this.g&&(this.response=t,ai(this))};F.ga=function(){this.g&&ai(this)};function ai(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xr(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hb=z.JSON.parse;function Ce(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Zp,this.K=this.L=!1}Ke(Ce,Be);var Zp="",db=/^https?$/i,fb=["POST","PUT"];F=Ce.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mc.g(),this.C=this.u?Th(this.u):Th(mc),this.g.onreadystatechange=Je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ah(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=mp(fb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{nm(this),0<this.B&&((this.K=pb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.qa,this)):this.A=Sl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ah(this,i)}};function pb(t){return Ds&&DI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof ml<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Ah(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,em(t),Yo(t)}function em(t){t.D||(t.D=!0,qe(t,"complete"),qe(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Yo(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yo(this,!0)),Ce.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?tm(this):this.fb())};F.fb=function(){tm(this)};function tm(t){if(t.h&&typeof ml<"u"&&(!t.C[1]||Jt(t)!=4||t.aa()!=2)){if(t.v&&Jt(t)==4)Sl(t.Ha,0,t);else if(qe(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(qp)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!db.test(r?r.toLowerCase():"")}n=s}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var o=2<Jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",em(t)}}finally{Yo(t)}}}}function Yo(t,e){if(t.g){nm(t);const n=t.g,s=t.C[0]?ro:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function nm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function Jt(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hb(e)}};function kh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Zp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sm(t){let e="";return vl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ol(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=sm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rm(t){this.Ca=0,this.i=[],this.j=new qo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=er("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=er("baseRetryDelayMs",5e3,t),this.bb=er("retryDelaySeedMs",1e4,t),this.$a=er("forwardChannelMaxRetries",2,t),this.ta=er("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Wp(t&&t.concurrentRequestLimit),this.Fa=new cb,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=rm.prototype;F.ma=8;F.G=1;function xl(t){if(im(t),t.G==3){var e=t.U++,n=sn(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),ci(t,n),e=new ri(t,t.j,e,void 0),e.K=2,e.v=Go(sn(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=fm(e.l,null),e.g.da(e.v)),e.F=Date.now(),ii(e)}hm(t)}function Xo(t){t.g&&(Ml(t),t.g.cancel(),t.g=null)}function im(t){Xo(t),t.u&&(z.clearTimeout(t.u),t.u=null),uo(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Jo(t){Gp(t.h)||t.m||(t.m=!0,Ap(t.Ja,t),t.C=0)}function mb(t,e){return Qp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ni(Je(t.Ja,t,e),um(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ri(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=_p(i),wp(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=om(this,r,e),n=sn(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),ci(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(sm(i)))+"&"+e:this.o&&Ol(n,this.o,i)),Rl(this.h,r),this.Ya&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),r.Z=!0,yc(r,n,null)):yc(r,n,e),this.G=2}}else this.G==3&&(t?Rh(this,t):this.i.length==0||Gp(this.h)||Rh(this))};function Rh(t,e){var n;e?n=e.m:n=t.U++;const s=sn(t.F);Ee(s,"SID",t.I),Ee(s,"RID",n),Ee(s,"AID",t.T),ci(t,s),t.o&&t.s&&Ol(s,t.o,t.s),n=new ri(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=om(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Rl(t.h,n),yc(n,s,e)}function ci(t,e){t.ia&&vl(t.ia,function(n,s){Ee(e,s,n)}),t.l&&jp({},function(n,s){Ee(e,s,n)})}function om(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Je(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{lb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function am(t){t.g||t.u||(t.Z=1,Ap(t.Ia,t),t.A=0)}function Pl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ni(Je(t.Ia,t),um(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,cm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ni(Je(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,rt(10),Xo(this),cm(this))};function Ml(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function cm(t){t.g=new ri(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=sn(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),ci(t,e),t.o&&t.s&&Ol(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Go(sn(e)),n.s=null,n.P=!0,Fp(n,t)}F.cb=function(){this.v!=null&&(this.v=null,Xo(this),Pl(this),rt(19))};function uo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function lm(t,e){var n=null;if(t.g==e){uo(t),Ml(t),t.g=null;var s=2}else if(_c(t.h,e))n=e.D,Yp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ko(),qe(s,new Pp(s,n)),Jo(t)}else am(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&mb(t,e)||s==2&&Pl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Hn(t,5);break;case 4:Hn(t,10);break;case 3:Hn(t,6);break;default:Hn(t,2)}}}function um(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Hn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Je(t.kb,t);n||(n=new Yn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||co(n,"https"),Go(n)),ub(n.toString(),s)}else rt(2);t.G=0,t.l&&t.l.va(e),hm(t),im(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function hm(t){if(t.G=0,t.la=[],t.l){const e=Xp(t.h);(e.length!=0||t.i.length!=0)&&(vh(t.la,e),vh(t.la,t.i),t.h.i.length=0,gl(t.i),t.i.length=0),t.l.ua()}}function dm(t,e,n){var s=n instanceof Yn?sn(n):new Yn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),lo(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Yn(null,void 0);s&&co(i,s),e&&(i.g=e),r&&lo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ma),ci(t,s),s}function fm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ce(new oi({jb:!0})):new Ce(t.ra),e.Ka(t.H),e}function pm(){}F=pm.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function ho(){if(Ds&&!(10<=Number(OI)))throw Error("Environmental error: no available transport.")}ho.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Be.call(this),this.g=new rm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!io(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!io(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ws(this)}Ke(pt,Be);pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=dm(t,null,t.V),Jo(t)};pt.prototype.close=function(){xl(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bl(t),t=n);e.i.push(new ob(e.ab++,t)),e.G==3&&Jo(e)};pt.prototype.M=function(){this.g.l=null,delete this.j,xl(this.g),delete this.g,pt.X.M.call(this)};function mm(t){Al.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(mm,Al);function gm(){kl.call(this),this.status=1}Ke(gm,kl);function Ws(t){this.g=t}Ke(Ws,pm);Ws.prototype.xa=function(){qe(this.g,"a")};Ws.prototype.wa=function(t){qe(this.g,new mm(t))};Ws.prototype.va=function(t){qe(this.g,new gm)};Ws.prototype.ua=function(){qe(this.g,"b")};ho.prototype.createWebChannel=ho.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Ho.NO_ERROR=0;Ho.TIMEOUT=8;Ho.HTTP_ERROR=6;Mp.COMPLETE="complete";Lp.EventType=si;si.OPEN="a";si.CLOSE="b";si.ERROR="c";si.MESSAGE="d";Be.prototype.listen=Be.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.Oa;Ce.prototype.getLastErrorCode=Ce.prototype.Ea;Ce.prototype.getStatus=Ce.prototype.aa;Ce.prototype.getResponseJson=Ce.prototype.Sa;Ce.prototype.getResponseText=Ce.prototype.fa;Ce.prototype.send=Ce.prototype.da;Ce.prototype.setWithCredentials=Ce.prototype.Ka;var gb=function(){return new ho},yb=function(){return Ko()},Ma=Ho,vb=Mp,_b=as,Nh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wb=oi,Ri=Lp,Eb=Ce;const Dh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new sl("@firebase/firestore");function Oh(){return ss.logLevel}function $(t,...e){if(ss.logLevel<=ce.DEBUG){const n=e.map(Ll);ss.debug(`Firestore (${Gs}): ${t}`,...n)}}function rn(t,...e){if(ss.logLevel<=ce.ERROR){const n=e.map(Ll);ss.error(`Firestore (${Gs}): ${t}`,...n)}}function wc(t,...e){if(ss.logLevel<=ce.WARN){const n=e.map(Ll);ss.warn(`Firestore (${Gs}): ${t}`,...n)}}function Ll(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${Gs}) INTERNAL ASSERTION FAILED: `+t;throw rn(e),new Error(e)}function ye(t,e){t||H()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ib{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class bb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tb{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ye(typeof s.accessToken=="string"),new ym(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new We(e)}}class Sb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=We.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ye(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Cb{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Sb(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ab{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kb{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.A=n.token,new Ab(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Rb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function le(t,e){return t<e?-1:t>e?1:0}function Os(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Me(0,0))}static max(){return new Y(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s){n===void 0?n=0:n>e.length&&H(),s===void 0?s=e.length-n:s>e.length-n&&H(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Pr{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new we(n)}static emptyPath(){return new we([])}}const Nb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Pr{construct(e,n,s){return new Ye(e,n,s)}static isValidIdentifier(e){return Nb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new L(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(we.fromString(e))}static fromName(e){return new B(we.fromString(e).popFirst(5))}static empty(){return new B(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new we(e.slice()))}}function Db(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(s===1e9?new Me(n+1,0):new Me(n,s));return new kn(r,B.empty(),e)}function Ob(t){return new kn(t.readTime,t.key,-1)}class kn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new kn(Y.min(),B.empty(),-1)}static max(){return new kn(Y.max(),B.empty(),-1)}}function xb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Pb)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new S((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new S((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ui(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ul.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _m(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){return t==null}function fo(t){return t===0&&1/t==-1/0}function Ub(t){return typeof t=="number"&&Number.isInteger(t)&&!fo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new Fb("Invalid base64 string: "+r):r}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const $b=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(ye(!!t),typeof t=="string"){let e=0;const n=$b.exec(t);if(ye(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xs(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Em(t){const e=t.mapValue.fields.__previous_value__;return wm(e)?Em(e):e}function Lr(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wm(t)?4:Vb(t)?9007199254740991:10:H()}function Ht(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lr(t).isEqual(Lr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Rn(s.timestampValue),o=Rn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return xs(s.bytesValue).isEqual(xs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return xe(s.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return xe(s.integerValue)===xe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=xe(s.doubleValue),o=xe(r.doubleValue);return i===o?fo(i)===fo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(xh(i)!==xh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ht(i[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Ur(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=rs(t),s=rs(e);if(n!==s)return le(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=xe(r.integerValue||r.doubleValue),a=xe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ph(t.timestampValue,e.timestampValue);case 4:return Ph(Lr(t),Lr(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(r,i){const o=xs(r),a=xs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=le(xe(r.latitude),xe(i.latitude));return o!==0?o:le(xe(r.longitude),xe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ps(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ni.mapValue&&i===Ni.mapValue)return 0;if(r===Ni.mapValue)return 1;if(i===Ni.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const d=Ps(o[a[u]],c[l[u]]);if(d!==0)return d}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw H()}}function Ph(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Rn(t),s=Rn(e),r=le(n.seconds,s.seconds);return r!==0?r:le(n.nanos,s.nanos)}function Ms(t){return Ec(t)}function Ec(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Rn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?xs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ec(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ec(s.fields[a])}`;return i+"}"}(t.mapValue):H();var e,n}function Mh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ic(t){return!!t&&"integerValue"in t}function Fl(t){return!!t&&"arrayValue"in t}function Lh(t){return!!t&&"nullValue"in t}function Uh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qi(t){return!!t&&"mapValue"in t}function dr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=dr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Vb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.position=e,this.inclusive=n}}function Fh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(o.referenceValue),n.key):s=Ps(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function $h(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{}class Pe extends Im{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new jb(e,n,s):n==="array-contains"?new Hb(e,s):n==="in"?new zb(e,s):n==="not-in"?new Wb(e,s):n==="array-contains-any"?new Gb(e,s):new Pe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new qb(e,s):new Kb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class xt extends Im{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new xt(e,n)}matches(e){return bm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function bm(t){return t.op==="and"}function Tm(t){return Bb(t)&&bm(t)}function Bb(t){for(const e of t.filters)if(e instanceof xt)return!1;return!0}function bc(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(Tm(t))return t.filters.map(e=>bc(e)).join(",");{const e=t.filters.map(n=>bc(n)).join(",");return`${t.op}(${e})`}}function Sm(t,e){return t instanceof Pe?function(n,s){return s instanceof Pe&&n.op===s.op&&n.field.isEqual(s.field)&&Ht(n.value,s.value)}(t,e):t instanceof xt?function(n,s){return s instanceof xt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Sm(i,s.filters[o]),!0):!1}(t,e):void H()}function Cm(t){return t instanceof Pe?function(e){return`${e.field.canonicalString()} ${e.op} ${Ms(e.value)}`}(t):t instanceof xt?function(e){return e.op.toString()+" {"+e.getFilters().map(Cm).join(" ,")+"}"}(t):"Filter"}class jb extends Pe{constructor(e,n,s){super(e,n,s),this.key=B.fromName(s.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class qb extends Pe{constructor(e,n){super(e,"in",n),this.keys=Am("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kb extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=Am("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Am(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>B.fromName(s.referenceValue))}class Hb extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fl(n)&&Ur(n.arrayValue,this.value)}}class zb extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ur(this.value.arrayValue,n)}}class Wb extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ur(this.value.arrayValue,n)}}class Gb extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ur(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Qb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??je.RED,this.left=r??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new je(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,s,r){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vh(this.data.getIterator())}getIteratorFrom(e){return new Vh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Vh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new dt([])}unionWith(e){let n=new Le(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!qi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dr(n)}setAll(e){let n=Ye.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=dr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());qi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];qi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){cs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ct(dr(this.value))}}function km(t){const e=[];return cs(t.fields,(n,s)=>{const r=new Ye([n]);if(qi(s)){const i=km(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,Y.min(),Y.min(),Y.min(),ct.empty(),0)}static newFoundDocument(e,n,s,r){return new Ge(e,1,n,Y.min(),s,r,0)}static newNoDocument(e,n){return new Ge(e,2,n,Y.min(),Y.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,Y.min(),Y.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function Bh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Yb(t,e,n,s,r,i,o)}function $l(t){const e=X(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>bc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Zo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ms(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ms(s)).join(",")),e._t=n}return e._t}function Vl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Qb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$h(t.startAt,e.startAt)&&$h(t.endAt,e.endAt)}function Tc(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Xb(t,e,n,s,r,i,o,a){return new hi(t,e,n,s,r,i,o,a)}function Rm(t){return new hi(t)}function jh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Nm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Dm(t){return t.collectionGroup!==null}function Cs(t){const e=X(t);if(e.wt===null){e.wt=[];const n=Bl(e),s=Nm(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new fr(n)),e.wt.push(new fr(Ye.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new fr(Ye.keyField(),i))}}}return e.wt}function on(t){const e=X(t);if(!e.gt)if(e.limitType==="F")e.gt=Bh(e.path,e.collectionGroup,Cs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Cs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new fr(i.field,o))}const s=e.endAt?new po(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new po(e.startAt.position,e.startAt.inclusive):null;e.gt=Bh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function Sc(t,e){e.getFirstInequalityField(),Bl(t);const n=t.filters.concat([e]);return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Cc(t,e,n){return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ea(t,e){return Vl(on(t),on(e))&&t.limitType===e.limitType}function Om(t){return`${$l(on(t))}|lt:${t.limitType}`}function Ac(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Cm(s)).join(", ")}]`),Zo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ms(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ms(s)).join(",")),`Target(${n})`}(on(t))}; limitType=${t.limitType})`}function ta(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):B.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Cs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Fh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Cs(n),s)||n.endAt&&!function(r,i,o){const a=Fh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Cs(n),s))}(t,e)}function Jb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xm(t){return(e,n)=>{let s=!1;for(const r of Cs(t)){const i=Zb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Zb(t,e,n){const s=t.field.isKeyField()?B.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ps(a,c):H()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fo(e)?"-0":e}}function Mm(t){return{integerValue:""+t}}function eT(t,e){return Ub(e)?Mm(e):Pm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this._=void 0}}function tT(t,e,n){return t instanceof mo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Fr?Um(t,e):t instanceof $r?Fm(t,e):function(s,r){const i=Lm(s,r),o=qh(i)+qh(s.It);return Ic(i)&&Ic(s.It)?Mm(o):Pm(s.Tt,o)}(t,e)}function nT(t,e,n){return t instanceof Fr?Um(t,e):t instanceof $r?Fm(t,e):n}function Lm(t,e){return t instanceof go?Ic(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class mo extends na{}class Fr extends na{constructor(e){super(),this.elements=e}}function Um(t,e){const n=$m(e);for(const s of t.elements)n.some(r=>Ht(r,s))||n.push(s);return{arrayValue:{values:n}}}class $r extends na{constructor(e){super(),this.elements=e}}function Fm(t,e){let n=$m(e);for(const s of t.elements)n=n.filter(r=>!Ht(r,s));return{arrayValue:{values:n}}}class go extends na{constructor(e,n){super(),this.Tt=e,this.It=n}}function qh(t){return xe(t.integerValue||t.doubleValue)}function $m(t){return Fl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Fr&&s instanceof Fr||n instanceof $r&&s instanceof $r?Os(n.elements,s.elements,Ht):n instanceof go&&s instanceof go?Ht(n.It,s.It):n instanceof mo&&s instanceof mo}(t.transform,e.transform)}class rT{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ki(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sa{}function Vm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jl(t.key,Dt.none()):new di(t.key,t.data,Dt.none());{const n=t.data,s=ct.empty();let r=new Le(Ye.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Pn(t.key,s,new dt(r.toArray()),Dt.none())}}function iT(t,e,n){t instanceof di?function(s,r,i){const o=s.value.clone(),a=Hh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Pn?function(s,r,i){if(!Ki(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Hh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Bm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function pr(t,e,n,s){return t instanceof di?function(r,i,o,a){if(!Ki(r.precondition,i))return o;const c=r.value.clone(),l=zh(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Pn?function(r,i,o,a){if(!Ki(r.precondition,i))return o;const c=zh(r.fieldTransforms,a,i),l=i.data;return l.setAll(Bm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ki(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function oT(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Lm(s.transform,r||null);i!=null&&(n===null&&(n=ct.empty()),n.set(s.field,i))}return n||null}function Kh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Os(n,s,(r,i)=>sT(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class di extends sa{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Pn extends sa{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Hh(t,e,n){const s=new Map;ye(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,nT(o,a,n[r]))}return s}function zh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,tT(i,o,e))}return s}class jl extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aT extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,se;function lT(t){switch(t){default:return H();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function jm(t){if(t===void 0)return rn("GRPC error has no .code"),E.UNKNOWN;switch(t){case Oe.OK:return E.OK;case Oe.CANCELLED:return E.CANCELLED;case Oe.UNKNOWN:return E.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return E.INTERNAL;case Oe.UNAVAILABLE:return E.UNAVAILABLE;case Oe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Oe.NOT_FOUND:return E.NOT_FOUND;case Oe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Oe.ABORTED:return E.ABORTED;case Oe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Oe.DATA_LOSS:return E.DATA_LOSS;default:return H()}}(se=Oe||(Oe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return _m(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=new Fe(B.comparator);function an(){return uT}const qm=new Fe(B.comparator);function ar(...t){let e=qm;for(const n of t)e=e.insert(n.key,n);return e}function Km(t){let e=qm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function zn(){return mr()}function Hm(){return mr()}function mr(){return new Qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const hT=new Fe(B.comparator),dT=new Le(B.comparator);function ne(...t){let e=dT;for(const n of t)e=e.add(n);return e}const fT=new Le(le);function zm(){return fT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ra(Y.min(),r,zm(),an(),ne())}}class fi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new fi(s,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class Wm{constructor(e,n){this.targetId=e,this.Rt=n}}class Gm{constructor(e,n,s=nt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Wh{constructor(){this.bt=0,this.vt=Qh(),this.Pt=nt.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=ne(),n=ne(),s=ne();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:H()}}),new fi(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Qh()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class pT{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=an(),this.Kt=Gh(),this.Gt=new Le(le)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(Tc(i))if(s===0){const o=new B(i.path);this.zt(n,o,Ge.newNoDocument(o,Y.min()))}else ye(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&Tc(a.target)){const c=new B(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Ge.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=ne();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new ra(e,n,this.Gt,this.Ut,s);return this.Ut=an(),this.Kt=Gh(),this.Gt=new Le(le),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Wh,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Le(le),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Wh),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Gh(){return new Fe(B.comparator)}function Qh(){return new Fe(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yT=(()=>({and:"AND",or:"OR"}))();class vT{constructor(e,n){this.databaseId=e,this.yt=n}}function yo(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qm(t,e){return t.yt?e.toBase64():e.toUint8Array()}function _T(t,e){return yo(t,e.toTimestamp())}function qt(t){return ye(!!t),Y.fromTimestamp(function(e){const n=Rn(e);return new Me(n.seconds,n.nanos)}(t))}function ql(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ym(t){const e=we.fromString(t);return ye(eg(e)),e}function kc(t,e){return ql(t.databaseId,e.path)}function La(t,e){const n=Ym(e);if(n.get(1)!==t.databaseId.projectId)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Xm(n))}function Rc(t,e){return ql(t.databaseId,e)}function wT(t){const e=Ym(t);return e.length===4?we.emptyPath():Xm(e)}function Nc(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xm(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yh(t,e,n){return{name:kc(t,e),fields:n.value.mapValue.fields}}function ET(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.yt?(ye(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(ye(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:jm(c.code);return new L(l,c.message||"")}(o);n=new Gm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=La(t,s.document.name),i=qt(s.document.updateTime),o=s.document.createTime?qt(s.document.createTime):Y.min(),a=new ct({mapValue:{fields:s.document.fields}}),c=Ge.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Hi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=La(t,s.document),i=s.readTime?qt(s.readTime):Y.min(),o=Ge.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=La(t,s.document),i=s.removedTargetIds||[];n=new Hi([],i,r,null)}else{if(!("filter"in e))return H();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new cT(r),o=s.targetId;n=new Wm(o,i)}}return n}function IT(t,e){let n;if(e instanceof di)n={update:Yh(t,e.key,e.value)};else if(e instanceof jl)n={delete:kc(t,e.key)};else if(e instanceof Pn)n={update:Yh(t,e.key,e.data),updateMask:DT(e.fieldMask)};else{if(!(e instanceof aT))return H();n={verify:kc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof mo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $r)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof go)return{fieldPath:i.field.canonicalString(),increment:o.It};throw H()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:_T(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:H()}(t,e.precondition)),n}function bT(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?qt(s.updateTime):qt(r);return i.isEqual(Y.min())&&(i=qt(r)),new rT(i,s.transformResults||[])}(n,e))):[]}function TT(t,e){return{documents:[Rc(t,e.path)]}}function ST(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Rc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Zm(xt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ps(u.field),direction:kT(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.yt||Zo(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function CT(t){let e=wT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ye(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Jm(u);return h instanceof xt&&Tm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new fr(ms(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Zo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new po(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new po(d,h)}(n.endAt)),Xb(e,r,o,i,a,"F",c,l)}function AT(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return H()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ms(e.unaryFilter.field);return Pe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ms(e.unaryFilter.field);return Pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ms(e.unaryFilter.field);return Pe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ms(e.unaryFilter.field);return Pe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return Pe.create(ms(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return xt.create(e.compositeFilter.filters.map(n=>Jm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function kT(t){return mT[t]}function RT(t){return gT[t]}function NT(t){return yT[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return Ye.fromServerFormat(t.fieldPath)}function Zm(t){return t instanceof Pe?function(e){if(e.op==="=="){if(Uh(e.value))return{unaryFilter:{field:ps(e.field),op:"IS_NAN"}};if(Lh(e.value))return{unaryFilter:{field:ps(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Uh(e.value))return{unaryFilter:{field:ps(e.field),op:"IS_NOT_NAN"}};if(Lh(e.value))return{unaryFilter:{field:ps(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(e.field),op:RT(e.op),value:e.value}}}(t):t instanceof xt?function(e){const n=e.getFilters().map(s=>Zm(s));return n.length===1?n[0]:{compositeFilter:{op:NT(e.op),filters:n}}}(t):H()}function DT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&iT(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=pr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=pr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Hm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Vm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,s)=>Kh(n,s))&&Os(this.baseMutations,e.baseMutations,(n,s)=>Kh(n,s))}}class Kl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ye(e.mutations.length===s.length);let r=hT;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Kl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,s,r,i=Y.min(),o=Y.min(),a=nt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.oe=e}}function MT(t){const e=CT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(){this.Ze=new UT}addToCollectionParentIndex(e,n){return this.Ze.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(kn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(kn.min())}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class UT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Le(we.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Le(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Ls(0)}static Sn(){return new Ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.changes=new Qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&pr(s.mutation,r,dt.empty(),Me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ar();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=zn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=an();const o=mr(),a=mr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Pn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),pr(u.mutation,l,u.mutation.getFieldMask(),Me.now())):o.set(l.key,dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new $T(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=mr();let r=new Fe((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||dt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Hm();u.forEach(d=>{if(!i.has(d)){const m=Vm(n.get(d),s.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):S.resolve(zn());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ne())).next(u=>({batchId:a,changes:Km(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(s=>{let r=ar();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ar();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(l,u){return new hi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ge.newInvalidDocument(l)))});let o=ar();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&pr(l.mutation,c,dt.empty(),Me.now()),ta(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return S.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:qt(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:MT(s.bundledQuery),readTime:qt(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.overlays=new Fe(B.comparator),this.ss=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const s=zn();return S.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=zn(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Fe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=zn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=zn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xT(n,s));let i=this.ss.get(n);i===void 0&&(i=ne(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.rs=new Le($e.os),this.us=new Le($e.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new $e(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new $e(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new B(new we([])),s=new $e(n,e),r=new $e(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new B(new we([])),s=new $e(n,e),r=new $e(n,e+1);let i=ne();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $e{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return B.comparator(e.key,n.key)||le(e.gs,n.gs)}static cs(e,n){return le(e.gs,n.gs)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Le($e.os)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OT(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $e(n,0),r=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Le(le);return n.forEach(r=>{const i=new $e(r,0),o=new $e(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),S.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const o=new $e(new B(i),0);let a=new Le(le);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.gs)),!0)},o),S.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ye(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return S.forEach(n.mutations,r=>{const i=new $e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new $e(n,0),r=this.ps.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.Rs=e,this.docs=new Fe(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let s=an();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ge.newInvalidDocument(r))}),S.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=an();const o=n.path,a=new B(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||xb(Ob(u),s)<=0||(r.has(u.key)||ta(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,s,r){H()}bs(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new HT(this)}getSize(e){return S.resolve(this.size)}}class HT extends FT{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.persistence=e,this.vs=new Qs(n=>$l(n),Vl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Hl,this.targetCount=0,this.Ss=Ls.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),S.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.xn(n),S.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Ul(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new zT(this),this.indexManager=new LT,this.remoteDocumentCache=function(s){return new KT(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new PT(n),this.Os=new BT(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new qT(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new GT(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return S.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class GT extends Mb{constructor(e){super(),this.currentSequenceNumber=e}}class zl{constructor(e){this.persistence=e,this.Bs=new Hl,this.Ls=null}static qs(e){return new zl(e)}get Us(){if(this.Ls)return this.Ls;throw H()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),S.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Us,s=>{const r=B.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,Y.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return S.or([()=>S.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(jh(n))return S.resolve(null);let s=on(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Cc(n,null,"F"),s=on(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ne(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,Cc(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,r){return jh(n)||r.isEqual(Y.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(Oh()<=ce.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ac(n)),this.qi(e,o,n,Db(r,-1)))})}Bi(e,n){let s=new Le(xm(e));return n.forEach((r,i)=>{ta(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return Oh()<=ce.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ac(n)),this.Oi.getDocumentsMatchingQuery(e,n,kn.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Fe(le),this.Gi=new Qs(i=>$l(i),Vl),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VT(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function XT(t,e,n,s){return new YT(t,e,n,s)}async function tg(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function JT(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=S.resolve();return h.forEach(m=>{d=d.next(()=>l.getEntry(a,m)).next(y=>{const _=c.docVersions.get(m);ye(_!==null),y.version.compareTo(_)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function ng(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function ZT(t,e){const n=X(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(nt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(h,m),function(y,_,R){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,m,u)&&a.push(n.Ns.updateTargetData(i,m))});let c=an(),l=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(eS(i,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(Y.min())){const u=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ki=r,i))}function eS(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=an();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function tS(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function nS(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new Xn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Dc(t,e,n){const s=X(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ui(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Xh(t,e,n){const s=X(t);let r=Y.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=X(a),h=u.Gi.get(l);return h!==void 0?S.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,on(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:Y.min(),n?i:ne())).next(a=>(sS(s,Jb(e),a),{documents:a,Yi:i})))}function sS(t,e,n){let s=t.Qi.get(e)||Y.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Jh{constructor(){this.activeTargetIds=zm()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rS{constructor(){this.Ur=new Jh,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Jh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);$("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>($("RestConnection","Received: ",c),c),c=>{throw wc("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=oS[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new Eb;a.setWithCredentials(!0),a.listenOnce(vb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ma.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ma.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new L(E.DEADLINE_EXCEEDED,"Request time out"));break;case Ma.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const m=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(_)>=0?_:E.UNKNOWN}(d.status);o(new L(m,d.message))}else o(new L(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(E.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=gb(),o=yb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new wb({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");$("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new aS({Yr:y=>{h?$("Connection","Not sending because WebChannel is closed:",y):(u||($("Connection","Opening WebChannel transport."),l.open(),u=!0),$("Connection","WebChannel sending:",y),l.send(y))},Zr:()=>l.close()}),m=(y,_,R)=>{y.listen(_,k=>{try{R(k)}catch(P){setTimeout(()=>{throw P},0)}})};return m(l,Ri.EventType.OPEN,()=>{h||$("Connection","WebChannel transport opened.")}),m(l,Ri.EventType.CLOSE,()=>{h||(h=!0,$("Connection","WebChannel transport closed"),d.oo())}),m(l,Ri.EventType.ERROR,y=>{h||(h=!0,wc("Connection","WebChannel transport errored:",y),d.oo(new L(E.UNAVAILABLE,"The operation could not be completed")))}),m(l,Ri.EventType.MESSAGE,y=>{var _;if(!h){const R=y.data[0];ye(!!R);const k=R,P=k.error||((_=k[0])===null||_===void 0?void 0:_.error);if(P){$("Connection","WebChannel received error:",P);const M=P.status;let W=function(Te){const Re=Oe[Te];if(Re!==void 0)return jm(Re)}(M),oe=P.message;W===void 0&&(W=E.INTERNAL,oe="Unknown error status: "+M+" with message "+P.message),h=!0,d.oo(new L(W,oe)),l.close()}else $("Connection","WebChannel received:",R),d.uo(R)}}),m(o,_b.STAT_EVENT,y=>{y.stat===Nh.PROXY?$("Connection","Detected buffering proxy"):y.stat===Nh.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Ua(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){return new vT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new sg(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(rn(n.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new L(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lS extends rg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=ET(this.Tt,e),s=function(r){if(!("targetChange"in r))return Y.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Y.min():i.readTime?qt(i.readTime):Y.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Nc(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=Tc(a)?{documents:TT(r,a)}:{query:ST(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Qm(r,i.resumeToken):i.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=yo(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=AT(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Nc(this.Tt),n.removeTarget=e,this.qo(n)}}class uS extends rg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=bT(e.writeResults,e.commitTime),s=qt(e.commitTime);return this.listener.eu(s,n)}return ye(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Nc(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>IT(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(E.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(E.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class dS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(rn(n),this.cu=!1):$("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{ls(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=X(a);c.mu.add(4),await pi(c),c.pu.set("Unknown"),c.mu.delete(4),await oa(c)}(this))})}),this.pu=new dS(s,r)}}async function oa(t){if(ls(t))for(const e of t.gu)await e(!0)}async function pi(t){for(const e of t.gu)await e(!1)}function ig(t,e){const n=X(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Yl(n)?Ql(n):Ys(n).Mo()&&Gl(n,e))}function og(t,e){const n=X(t),s=Ys(n);n.wu.delete(e),s.Mo()&&ag(n,e),n.wu.size===0&&(s.Mo()?s.Bo():ls(n)&&n.pu.set("Unknown"))}function Gl(t,e){t.Iu.Ft(e.targetId),Ys(t).Jo(e)}function ag(t,e){t.Iu.Ft(e),Ys(t).Yo(e)}function Ql(t){t.Iu=new pT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Ys(t).start(),t.pu.au()}function Yl(t){return ls(t)&&!Ys(t).Oo()&&t.wu.size>0}function ls(t){return X(t).mu.size===0}function cg(t){t.Iu=void 0}async function pS(t){t.wu.forEach((e,n)=>{Gl(t,e)})}async function mS(t,e){cg(t),Yl(t)?(t.pu.fu(e),Ql(t)):t.pu.set("Unknown")}async function gS(t,e,n){if(t.pu.set("Online"),e instanceof Gm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await vo(t,s)}else if(e instanceof Hi?t.Iu.Qt(e):e instanceof Wm?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(Y.min()))try{const s=await ng(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.wu.get(c);l&&r.wu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(nt.EMPTY_BYTE_STRING,c.snapshotVersion)),ag(r,a);const l=new Xn(c.target,a,1,c.sequenceNumber);Gl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await vo(t,s)}}async function vo(t,e,n){if(!ui(e))throw e;t.mu.add(1),await pi(t),t.pu.set("Offline"),n||(n=()=>ng(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await oa(t)})}function lg(t,e){return e().catch(n=>vo(t,n,e))}async function aa(t){const e=X(t),n=Nn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;yS(e);)try{const r=await tS(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,vS(e,r)}catch(r){await vo(e,r)}ug(e)&&hg(e)}function yS(t){return ls(t)&&t._u.length<10}function vS(t,e){t._u.push(e);const n=Nn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function ug(t){return ls(t)&&!Nn(t).Oo()&&t._u.length>0}function hg(t){Nn(t).start()}async function _S(t){Nn(t).su()}async function wS(t){const e=Nn(t);for(const n of t._u)e.tu(n.mutations)}async function ES(t,e,n){const s=t._u.shift(),r=Kl.from(s,e,n);await lg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await aa(t)}async function IS(t,e){e&&Nn(t).Xo&&await async function(n,s){if(r=s.code,lT(r)&&r!==E.ABORTED){const i=n._u.shift();Nn(n).$o(),await lg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await aa(n)}var r}(t,e),ug(t)&&hg(t)}async function ed(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=ls(n);n.mu.add(3),await pi(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await oa(n)}async function bS(t,e){const n=X(t);e?(n.mu.delete(2),await oa(n)):e||(n.mu.add(2),await pi(n),n.pu.set("Unknown"))}function Ys(t){return t.Tu||(t.Tu=function(e,n,s){const r=X(e);return r.ru(),new lS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:pS.bind(null,t),no:mS.bind(null,t),Ho:gS.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Yl(t)?Ql(t):t.pu.set("Unknown")):(await t.Tu.stop(),cg(t))})),t.Tu}function Nn(t){return t.Eu||(t.Eu=function(e,n,s){const r=X(e);return r.ru(),new uS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:_S.bind(null,t),no:IS.bind(null,t),nu:wS.bind(null,t),eu:ES.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await aa(t)):(await t.Eu.stop(),t._u.length>0&&($("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Xl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jl(t,e){if(rn("AsyncQueue",`${e}: ${t}`),ui(t))return new L(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.comparator=e?(n,s)=>e(n,s)||B.comparator(n.key,s.key):(n,s)=>B.comparator(n.key,s.key),this.keyedMap=ar(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new As(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof As)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new As;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.Au=new Fe(B.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):H():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Us{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Us(e,n,As.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.bu=void 0,this.listeners=[]}}class SS{constructor(){this.queries=new Qs(e=>Om(e),ea),this.onlineState="Unknown",this.vu=new Set}}async function CS(t,e){const n=X(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new TS),r)try{i.bu=await n.onListen(s)}catch(o){const a=Jl(o,`Initialization of query '${Ac(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&Zl(n)}async function AS(t,e){const n=X(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function kS(t,e){const n=X(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&Zl(n)}function RS(t,e,n){const s=X(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Zl(t){t.vu.forEach(e=>{e.next()})}class NS{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Us(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.key=e}}class fg{constructor(e){this.key=e}}class DS{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=ne(),this.mutatedKeys=ne(),this.ju=xm(e),this.zu=new As(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new td,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),m=ta(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let R=!1;d&&m?d.data.isEqual(m.data)?y!==_&&(s.track({type:3,doc:m}),R=!0):this.Yu(d,m)||(s.track({type:2,doc:m}),R=!0,(c&&this.ju(m,c)>0||l&&this.ju(m,l)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),R=!0):d&&!m&&(s.track({type:1,doc:d}),R=!0,(c||l)&&(a=!0)),R&&(m?(o=o.add(m),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((l,u)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return m(h)-m(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Us(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new td,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=ne(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new fg(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new dg(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=ne();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Us.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class OS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class xS{constructor(e){this.key=e,this.ic=!1}}class PS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Qs(a=>Om(a),ea),this.uc=new Map,this.cc=new Set,this.ac=new Fe(B.comparator),this.hc=new Map,this.lc=new Hl,this.fc={},this.dc=new Map,this._c=Ls.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function MS(t,e){const n=HS(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await nS(n.localStore,on(e));n.isPrimaryClient&&ig(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await LS(n,e,s,a==="current",o.resumeToken)}return r}async function LS(t,e,n,s,r){t.mc=(h,d,m)=>async function(y,_,R,k){let P=_.view.Hu(R);P.Li&&(P=await Xh(y.localStore,_.query,!1).then(({documents:oe})=>_.view.Hu(oe,P)));const M=k&&k.targetChanges.get(_.targetId),W=_.view.applyChanges(P,y.isPrimaryClient,M);return sd(y,_.targetId,W.tc),W.snapshot}(t,h,d,m);const i=await Xh(t.localStore,e,!0),o=new DS(e,i.Yi),a=o.Hu(i.documents),c=fi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);sd(t,n,l.tc);const u=new OS(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function US(t,e){const n=X(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!ea(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Dc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),og(n.remoteStore,s.targetId),Oc(n,s.targetId)}).catch(li)):(Oc(n,s.targetId),await Dc(n.localStore,s.targetId,!0))}async function FS(t,e,n){const s=zS(t);try{const r=await function(i,o){const a=X(i),c=Me.now(),l=o.reduce((d,m)=>d.add(m.key),ne());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=an(),y=ne();return a.ji.getEntries(d,l).next(_=>{m=_,m.forEach((R,k)=>{k.isValidDocument()||(y=y.add(R))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(_=>{u=_;const R=[];for(const k of o){const P=oT(k,u.get(k.key).overlayedDocument);P!=null&&R.push(new Pn(k.key,P,km(P.value.mapValue),Dt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,R,o)}).next(_=>{h=_;const R=_.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,_.batchId,R)})}).then(()=>({batchId:h.batchId,changes:Km(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Fe(le)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await mi(s,r.changes),await aa(s.remoteStore)}catch(r){const i=Jl(r,"Failed to persist write");n.reject(i)}}async function pg(t,e){const n=X(t);try{const s=await ZT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(ye(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?ye(o.ic):r.removedDocuments.size>0&&(ye(o.ic),o.ic=!1))}),await mi(n,s,e)}catch(s){await li(s)}}function nd(t,e,n){const s=X(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=X(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&Zl(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function $S(t,e,n){const s=X(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Fe(B.comparator);o=o.insert(i,Ge.newNoDocument(i,Y.min()));const a=ne().add(i),c=new ra(Y.min(),new Map,new Le(le),o,a);await pg(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),eu(s)}else await Dc(s.localStore,e,!1).then(()=>Oc(s,e,n)).catch(li)}async function VS(t,e){const n=X(t),s=e.batch.batchId;try{const r=await JT(n.localStore,e);gg(n,s,null),mg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await mi(n,r)}catch(r){await li(r)}}async function BS(t,e,n){const s=X(t);try{const r=await function(i,o){const a=X(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(ye(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);gg(s,e,n),mg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await mi(s,r)}catch(r){await li(r)}}function mg(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function gg(t,e,n){const s=X(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Oc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||yg(t,s)})}function yg(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(og(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),eu(t))}function sd(t,e,n){for(const s of n)s instanceof dg?(t.lc.addReference(s.key,e),jS(t,s)):s instanceof fg?($("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||yg(t,s.key)):H()}function jS(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||($("SyncEngine","New document in limbo: "+n),t.cc.add(s),eu(t))}function eu(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new B(we.fromString(e)),s=t._c.next();t.hc.set(s,new xS(n)),t.ac=t.ac.insert(n,s),ig(t.remoteStore,new Xn(on(Rm(n.path)),s,2,Ul.at))}}async function mi(t,e,n){const s=X(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Wl.Ni(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const l=X(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ui(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);l.Ki=l.Ki.insert(h,y)}}}(s.localStore,i))}async function qS(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await tg(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new L(E.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await mi(n,s.Wi)}}function KS(t,e){const n=X(t),s=n.hc.get(e);if(s&&s.ic)return ne().add(s.key);{let r=ne();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function HS(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$S.bind(null,e),e.rc.Ho=kS.bind(null,e.eventManager),e.rc.gc=RS.bind(null,e.eventManager),e}function zS(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BS.bind(null,e),e}class WS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=ia(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return XT(this.persistence,new QT,e.initialUser,this.Tt)}Tc(e){return new WT(zl.qs,this.Tt)}Ic(e){return new rS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>nd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qS.bind(null,this.syncEngine),await bS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new SS}createDatastore(e){const n=ia(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new cS(r));var r;return function(i,o,a,c){return new hS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>nd(this.syncEngine,a,0),o=Zh.C()?new Zh:new iS,new fS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new PS(s,r,i,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);$("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await pi(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=We.UNAUTHENTICATED,this.clientId=vm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Jl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function XS(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await tg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function JS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZS(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ed(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ed(e.remoteStore,i)),t.onlineComponents=e}async function ZS(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await XS(t,new WS)),t.offlineComponents}async function vg(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await JS(t,new GS)),t.onlineComponents}function eC(t){return vg(t).then(e=>e.syncEngine)}async function tC(t){const e=await vg(t),n=e.eventManager;return n.onListen=MS.bind(null,e.syncEngine),n.onUnlisten=US.bind(null,e.syncEngine),n}function nC(t,e,n={}){const s=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new QS({next:h=>{i.enqueueAndForget(()=>AS(r,u)),h.fromCache&&a.source==="server"?c.reject(new L(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new NS(o,l,{includeMetadataChanges:!0,Ou:!0});return CS(r,u)}(await tC(t),t.asyncQueue,e,n,s)),s.promise}const rd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e,n){if(!n)throw new L(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sC(t,e,n,s){if(e===!0&&s===!0)throw new L(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function id(t){if(!B.isDocumentKey(t))throw new L(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function od(t){if(B.isDocumentKey(t))throw new L(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ca(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function is(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ca(t);throw new L(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ad({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ad(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ib;switch(n.type){case"gapi":const s=n.client;return new Cb(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rd.get(e);n&&($("ComponentProvider","Removing Datastore"),rd.delete(e),n.terminate())}(this),Promise.resolve()}}function rC(t,e,n,s={}){var r;const i=(t=is(t,la))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&wc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=We.MOCK_USER;else{o=N_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new L(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new We(c)}t._authCredentials=new bb(new ym(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class Xs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xs(this.firestore,e,this._query)}}class Sn extends Xs{constructor(e,n,s){super(e,n,Rm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new B(e))}withConverter(e){return new Sn(this.firestore,e,this._path)}}function os(t,e,...n){if(t=Ve(t),_g("collection","path",e),t instanceof la){const s=we.fromString(e,...n);return od(s),new Sn(t,null,s)}{if(!(t instanceof ft||t instanceof Sn))throw new L(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return od(s),new Sn(t.firestore,null,s)}}function tu(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=vm.R()),_g("doc","path",e),t instanceof la){const s=we.fromString(e,...n);return id(s),new ft(t,null,new B(s))}{if(!(t instanceof ft||t instanceof Sn))throw new L(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return id(s),new ft(t.firestore,t instanceof Sn?t.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new sg(this,"async_queue_retry"),this.Hc=()=>{const n=Ua();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Ua();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Ua();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Tn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!ui(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw rn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Xl.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&H()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class gi extends la{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new iC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Eg(this),this._firestoreClient.terminate()}}function oC(t,e){const n=typeof t=="object"?t:Mf(),s=typeof t=="string"?t:e||"(default)",r=il(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=A_("firestore");i&&rC(r,...i)}return r}function wg(t){return t._firestoreClient||Eg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Eg(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Lb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new YS(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fs(nt.fromBase64String(e))}catch(n){throw new L(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fs(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=/^__.*__$/;class cC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Pn(e,this.data,this.fieldMask,n,this.fieldTransforms):new di(e,this.data,n,this.fieldTransforms)}}class Ig{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Pn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class ru{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return _o(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(bg(this.ra)&&aC.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class lC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||ia(e)}wa(e,n,s,r=!1){return new ru({ra:e,methodName:n,_a:s,path:Ye.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function iu(t){const e=t._freezeSettings(),n=ia(t._databaseId);return new lC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uC(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);ou("Data must be an object, but it was:",o,s);const a=Tg(s,o);let c,l;if(i.merge)c=new dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=xc(e,h,n);if(!o.contains(d))throw new L(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Cg(u,d)||u.push(d)}c=new dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new cC(new ct(a),c,l)}class ha extends nu{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ha}}function hC(t,e,n,s){const r=t.wa(1,e,n);ou("Data must be an object, but it was:",r,s);const i=[],o=ct.empty();cs(s,(c,l)=>{const u=au(e,c,n);l=Ve(l);const h=r.ha(u);if(l instanceof ha)i.push(u);else{const d=yi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new dt(i);return new Ig(o,a,r.fieldTransforms)}function dC(t,e,n,s,r,i){const o=t.wa(1,e,n),a=[xc(e,s,n)],c=[r];if(i.length%2!=0)throw new L(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(xc(e,i[d])),c.push(i[d+1]);const l=[],u=ct.empty();for(let d=a.length-1;d>=0;--d)if(!Cg(l,a[d])){const m=a[d];let y=c[d];y=Ve(y);const _=o.ha(m);if(y instanceof ha)l.push(m);else{const R=yi(y,_);R!=null&&(l.push(m),u.set(m,R))}}const h=new dt(l);return new Ig(u,h,o.fieldTransforms)}function fC(t,e,n,s=!1){return yi(n,t.wa(s?4:3,e))}function yi(t,e){if(Sg(t=Ve(t)))return ou("Unsupported field value:",e,t),Tg(t,e);if(t instanceof nu)return function(n,s){if(!bg(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=yi(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eT(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Me.fromDate(n);return{timestampValue:yo(s.Tt,r)}}if(n instanceof Me){const r=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yo(s.Tt,r)}}if(n instanceof su)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Fs)return{bytesValue:Qm(s.Tt,n._byteString)};if(n instanceof ft){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ql(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ca(n)}`)}(t,e)}function Tg(t,e){const n={};return _m(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(s,r)=>{const i=yi(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Sg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof su||t instanceof Fs||t instanceof ft||t instanceof nu)}function ou(t,e,n){if(!Sg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ca(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function xc(t,e,n){if((e=Ve(e))instanceof ua)return e._internalPath;if(typeof e=="string")return au(t,e);throw _o("Field path arguments must be of type string or ",t,!1,void 0,n)}const pC=new RegExp("[~\\*/\\[\\]]");function au(t,e,n){if(e.search(pC)>=0)throw _o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ua(...e.split("."))._internalPath}catch{throw _o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _o(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new L(E.INVALID_ARGUMENT,a+t+c)}function Cg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mC extends Ag{data(){return super.data()}}function cu(t,e){return typeof e=="string"?au(t,e):e instanceof ua?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lu{}class yC extends lu{}function Vr(t,e,...n){let s=[];e instanceof lu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof uu).length,o=r.filter(a=>a instanceof da).length;if(i>1||i>0&&o>0)throw new L(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class da extends yC{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new da(e,n,s)}_apply(e){const n=this._parse(e);return kg(e._query,n),new Xs(e.firestore,e.converter,Sc(e._query,n))}_parse(e){const n=iu(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new L(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){ld(u,l);const d=[];for(const m of u)d.push(cd(a,r,m));h={arrayValue:{values:d}}}else h=cd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||ld(u,l),h=fC(o,i,u,l==="in"||l==="not-in");return Pe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Br(t,e,n){const s=e,r=cu("where",t);return da._create(r,s,n)}class uu extends lu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new uu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)kg(i,a),i=Sc(i,a)}(e._query,n),new Xs(e.firestore,e.converter,Sc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function cd(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new L(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dm(e)&&n.indexOf("/")!==-1)throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(we.fromString(n));if(!B.isDocumentKey(s))throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Mh(t,new B(s))}if(n instanceof ft)return Mh(t,n._key);throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ca(n)}.`)}function ld(t,e){if(!Array.isArray(t)||t.length===0)throw new L(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kg(t,e){if(e.isInequality()){const s=Bl(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new L(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Nm(t);i!==null&&vC(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function vC(t,e,n){if(!n.isEqual(e))throw new L(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class _C{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){const s={};return cs(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new su(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Em(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const n=Rn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);ye(eg(s));const r=new Mr(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(n)||rn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EC extends Ag{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class zi extends EC{data(e={}){return super.data(e)}}class IC{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Oi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new zi(this._firestore,this._userDataWriter,s.key,s,new Oi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new zi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Oi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new zi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Oi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:bC(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function bC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class TC extends _C{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function $s(t){t=is(t,Xs);const e=is(t.firestore,gi),n=wg(e),s=new TC(e);return gC(t._query),nC(n,t._query).then(r=>new IC(e,s,t,r))}function SC(t,e,n,...s){t=is(t,ft);const r=is(t.firestore,gi),i=iu(r);let o;return o=typeof(e=Ve(e))=="string"||e instanceof ua?dC(i,"updateDoc",t._key,e,n,s):hC(i,"updateDoc",t._key,e),hu(r,[o.toMutation(t._key,Dt.exists(!0))])}function CC(t){return hu(is(t.firestore,gi),[new jl(t._key,Dt.none())])}function AC(t,e){const n=is(t.firestore,gi),s=tu(t),r=wC(t.converter,e);return hu(n,[uC(iu(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Dt.exists(!1))]).then(()=>s)}function hu(t,e){return function(n,s){const r=new Tn;return n.asyncQueue.enqueueAndForget(async()=>FS(await eC(n),s,r)),r.promise}(wg(t),e)}(function(t,e=!0){(function(n){Gs=n})(zr),Ns(new Zn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new gi(new Tb(n.getProvider("auth-internal")),new kb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),bn(Dh,"3.8.4",t),bn(Dh,"3.8.4","esm2017")})();const kC=Pf(yI),en=oC(kC),RC={name:"new-employee",data(){return{employee_id_error:"error",errorFlag:!1,employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee(){AC(os(en,"employees"),{employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(t=>{console.log("Client added: ",t.id),this.$router.push("/")}).catch(t=>{console.error("Error adding employee: ",t)})},idExists(){const t=Vr(os(en,"employees"),Br("employee_id","==",this.employee_id));$s(t).then(e=>{e.forEach(n=>{if(this.employee_id==n.data().employee_id){this.employee_id_error="Employee Id Exists",this.errorFlag=!0;return}})}),this.errorFlag=!1}}},NC={id:"new-employee"},DC=b("h3",null,"New Employee",-1),OC={class:"row"},xC={class:"row"},PC={class:"input-field col s12"},MC={key:0},LC={key:1,class:"secondary-content",style:{color:"red"}},UC={class:"row"},FC={class:"input-field col s12"},$C=b("label",null,"Name",-1),VC={class:"row"},BC={class:"input-field col s12"},jC=b("label",null,"Department",-1),qC={class:"row"},KC={class:"input-field col s12"},HC=b("label",null,"Position",-1),zC=["disabled"];function WC(t,e,n,s,r,i){const o=Jn("router-link");return Se(),Ae("div",NC,[DC,b("div",OC,[b("form",{onSubmit:e[5]||(e[5]=Po((...a)=>i.saveEmployee&&i.saveEmployee(...a),["prevent"])),class:"col s12"},[b("div",xC,[b("div",PC,[vt(b("input",{type:"text",onBlur:e[0]||(e[0]=(...a)=>i.idExists&&i.idExists(...a)),"onUpdate:modelValue":e[1]||(e[1]=a=>r.employee_id=a),required:""},null,544),[[_t,r.employee_id]]),r.errorFlag?(Se(),Ae("p",LC,Ft(r.employee_id_error),1)):(Se(),Ae("label",MC,"Employee ID#"))])]),b("div",UC,[b("div",FC,[vt(b("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>r.name=a),required:""},null,512),[[_t,r.name]]),$C])]),b("div",VC,[b("div",BC,[vt(b("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>r.dept=a),required:""},null,512),[[_t,r.dept]]),jC])]),b("div",qC,[b("div",KC,[vt(b("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=a=>r.position=a),required:""},null,512),[[_t,r.position]]),HC])]),b("button",{type:"submit",class:"btn",disabled:r.errorFlag},"Submit",8,zC),fe(o,{to:"/",class:"btn grey"},{default:at(()=>[gt("Cancel")]),_:1})],32)])])}const Rg=Dn(RC,[["render",WC]]);const GC={components:{Navbar:gI,NewEmployee:Rg}},QC={id:"app"},YC={class:"container"};function XC(t,e,n,s,r,i){const o=Jn("Navbar"),a=Jn("router-view");return Se(),Ae("div",QC,[fe(o),b("div",YC,[fe(a)])])}const JC=Dn(GC,[["render",XC]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const gs=typeof window<"u";function ZC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ue=Object.assign;function Fa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Pt(r)?r.map(t):t(r)}return n}const gr=()=>{},Pt=Array.isArray,eA=/\/$/,tA=t=>t.replace(eA,"");function $a(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=iA(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function nA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ud(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sA(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Vs(e.matched[s],n.matched[r])&&Ng(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ng(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rA(t[n],e[n]))return!1;return!0}function rA(t,e){return Pt(t)?hd(t,e):Pt(e)?hd(e,t):t===e}function hd(t,e){return Pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function iA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var jr;(function(t){t.pop="pop",t.push="push"})(jr||(jr={}));var yr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yr||(yr={}));function oA(t){if(!t)if(gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tA(t)}const aA=/^[^#]+#/;function cA(t,e){return t.replace(aA,"#")+e}function lA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function uA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=lA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function dd(t,e){return(history.state?history.state.position-e:-1)+t}const Pc=new Map;function hA(t,e){Pc.set(t,e)}function dA(t){const e=Pc.get(t);return Pc.delete(t),e}let fA=()=>location.protocol+"//"+location.host;function Dg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ud(c,"")}return ud(n,t)+s+r}function pA(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const m=Dg(t,location),y=n.value,_=e.value;let R=0;if(d){if(n.value=m,e.value=d,o&&o===y){o=null;return}R=_?d.position-_.position:0}else s(m);r.forEach(k=>{k(n.value,y,{delta:R,type:jr.pop,direction:R?R>0?yr.forward:yr.back:yr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const m=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(ue({},d.state,{scroll:fa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function fd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?fa():null}}function mA(t){const{history:e,location:n}=window,s={value:Dg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:fA()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=ue({},e.state,fd(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ue({},r.value,e.state,{forward:c,scroll:fa()});i(u.current,u,!0);const h=ue({},fd(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function gA(t){t=oA(t);const e=mA(t),n=pA(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ue({location:"",base:t,go:s,createHref:cA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function yA(t){return typeof t=="string"||t&&typeof t=="object"}function Og(t){return typeof t=="string"||typeof t=="symbol"}const dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xg=Symbol("");var pd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pd||(pd={}));function Bs(t,e){return ue(new Error,{type:t,[xg]:!0},e)}function Gt(t,e){return t instanceof Error&&xg in t&&(e==null||!!(t.type&e))}const md="[^/]+?",vA={sensitive:!1,strict:!1,start:!0,end:!0},_A=/[.+*?^${}()[\]/\\]/g;function wA(t,e){const n=ue({},vA,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(_A,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:_,optional:R,regexp:k}=d;i.push({name:y,repeatable:_,optional:R});const P=k||md;if(P!==md){m+=10;try{new RegExp(`(${P})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+W.message)}}let M=_?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(M=R&&l.length<2?`(?:/${M})`:"/"+M),R&&(M+="?"),r+=M,m+=20,R&&(m+=-8),_&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:_,optional:R}=m,k=y in l?l[y]:"";if(Pt(k)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Pt(k)?k.join("/"):k;if(!P)if(R)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function EA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function IA(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=EA(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(gd(s))return 1;if(gd(r))return-1}return r.length-s.length}function gd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bA={type:0,value:""},TA=/[a-zA-Z0-9_]/;function SA(t){if(!t)return[[]];if(t==="/")return[[bA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:TA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function CA(t,e,n){const s=wA(SA(t.path),n),r=ue(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function AA(t,e){const n=[],s=new Map;e=_d({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const m=!d,y=kA(u);y.aliasOf=d&&d.record;const _=_d(e,u),R=[y];if("alias"in u){const M=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of M)R.push(ue({},y,{components:d?d.record.components:y.components,path:W,aliasOf:d?d.record:y}))}let k,P;for(const M of R){const{path:W}=M;if(h&&W[0]!=="/"){const oe=h.record.path,Te=oe[oe.length-1]==="/"?"":"/";M.path=h.record.path+(W&&Te+W)}if(k=CA(M,h,_),d?d.alias.push(k):(P=P||k,P!==k&&P.alias.push(k),m&&u.name&&!vd(k)&&o(u.name)),y.children){const oe=y.children;for(let Te=0;Te<oe.length;Te++)i(oe[Te],k,d&&d.children[Te])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return P?()=>{o(P)}:gr}function o(u){if(Og(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&IA(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Pg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!vd(u)&&s.set(u.record.name,u)}function l(u,h){let d,m={},y,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Bs(1,{location:u});_=d.record.name,m=ue(yd(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&yd(u.params,d.keys.map(P=>P.name))),y=d.stringify(m)}else if("path"in u)y=u.path,d=n.find(P=>P.re.test(y)),d&&(m=d.parse(y),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw Bs(1,{location:u,currentLocation:h});_=d.record.name,m=ue({},h.params,u.params),y=d.stringify(m)}const R=[];let k=d;for(;k;)R.unshift(k.record),k=k.parent;return{name:_,path:y,params:m,matched:R,meta:NA(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function yd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function kA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:RA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function RA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function vd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function NA(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function _d(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Pg(t,e){return e.children.some(n=>n===t||Pg(t,n))}const Mg=/#/g,DA=/&/g,OA=/\//g,xA=/=/g,PA=/\?/g,Lg=/\+/g,MA=/%5B/g,LA=/%5D/g,Ug=/%5E/g,UA=/%60/g,Fg=/%7B/g,FA=/%7C/g,$g=/%7D/g,$A=/%20/g;function du(t){return encodeURI(""+t).replace(FA,"|").replace(MA,"[").replace(LA,"]")}function VA(t){return du(t).replace(Fg,"{").replace($g,"}").replace(Ug,"^")}function Mc(t){return du(t).replace(Lg,"%2B").replace($A,"+").replace(Mg,"%23").replace(DA,"%26").replace(UA,"`").replace(Fg,"{").replace($g,"}").replace(Ug,"^")}function BA(t){return Mc(t).replace(xA,"%3D")}function jA(t){return du(t).replace(Mg,"%23").replace(PA,"%3F")}function qA(t){return t==null?"":jA(t).replace(OA,"%2F")}function wo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function KA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Lg," "),o=i.indexOf("="),a=wo(o<0?i:i.slice(0,o)),c=o<0?null:wo(i.slice(o+1));if(a in e){let l=e[a];Pt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function wd(t){let e="";for(let n in t){const s=t[n];if(n=BA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(s)?s.map(i=>i&&Mc(i)):[s&&Mc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function HA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const zA=Symbol(""),Ed=Symbol(""),fu=Symbol(""),Vg=Symbol(""),Lc=Symbol("");function tr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Bs(4,{from:n,to:e})):h instanceof Error?a(h):yA(h)?a(Bs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Va(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(WA(a)){const l=(a.__vccOpts||a)[e];l&&r.push(pn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ZC(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&pn(d,n,s,i,o)()}))}}return r}function WA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Id(t){const e=Zt(fu),n=Zt(Vg),s=yt(()=>e.resolve(Is(t.to))),r=yt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Vs.bind(null,u));if(d>-1)return d;const m=bd(c[l-2]);return l>1&&bd(u)===m&&h[h.length-1].path!==m?h.findIndex(Vs.bind(null,c[l-2])):d}),i=yt(()=>r.value>-1&&XA(n.params,s.value.params)),o=yt(()=>r.value>-1&&r.value===n.matched.length-1&&Ng(n.params,s.value.params));function a(c={}){return YA(c)?e[Is(t.replace)?"replace":"push"](Is(t.to)).catch(gr):Promise.resolve()}return{route:s,href:yt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const GA=cf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Id,setup(t,{slots:e}){const n=qr(Id(t)),{options:s}=Zt(fu),r=yt(()=>({[Td(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Td(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),QA=GA;function YA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Pt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function bd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Td=(t,e,n)=>t??e??n,JA=cf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Zt(Lc),r=yt(()=>t.route||s.value),i=Zt(Ed,0),o=yt(()=>{let l=Is(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=yt(()=>r.value.matched[o.value]);Mi(Ed,yt(()=>o.value+1)),Mi(zA,a),Mi(Lc,r);const c=Oy();return Li(()=>[c.value,a.value,t.name],([l,u,h],[d,m,y])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Vs(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Sd(n.default,{Component:d,route:l});const m=h.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,R=Cf(d,ue({},y,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Sd(n.default,{Component:R,route:l})||R}}});function Sd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ZA=JA;function ek(t){const e=AA(t.routes,t),n=t.parseQuery||KA,s=t.stringifyQuery||wd,r=t.history,i=tr(),o=tr(),a=tr(),c=xy(dn);let l=dn;gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fa.bind(null,w=>""+w),h=Fa.bind(null,qA),d=Fa.bind(null,wo);function m(w,x){let D,V;return Og(w)?(D=e.getRecordMatcher(w),V=x):V=w,e.addRoute(V,D)}function y(w){const x=e.getRecordMatcher(w);x&&e.removeRoute(x)}function _(){return e.getRoutes().map(w=>w.record)}function R(w){return!!e.getRecordMatcher(w)}function k(w,x){if(x=ue({},x||c.value),typeof w=="string"){const f=$a(n,w,x.path),p=e.resolve({path:f.path},x),g=r.createHref(f.fullPath);return ue(f,p,{params:d(p.params),hash:wo(f.hash),redirectedFrom:void 0,href:g})}let D;if("path"in w)D=ue({},w,{path:$a(n,w.path,x.path).path});else{const f=ue({},w.params);for(const p in f)f[p]==null&&delete f[p];D=ue({},w,{params:h(w.params)}),x.params=h(x.params)}const V=e.resolve(D,x),re=w.hash||"";V.params=u(d(V.params));const be=nA(s,ue({},w,{hash:VA(re),path:V.path})),ee=r.createHref(be);return ue({fullPath:be,hash:re,query:s===wd?HA(w.query):w.query||{}},V,{redirectedFrom:void 0,href:ee})}function P(w){return typeof w=="string"?$a(n,w,c.value.path):ue({},w)}function M(w,x){if(l!==w)return Bs(8,{from:x,to:w})}function W(w){return Re(w)}function oe(w){return W(ue(P(w),{replace:!0}))}function Te(w){const x=w.matched[w.matched.length-1];if(x&&x.redirect){const{redirect:D}=x;let V=typeof D=="function"?D(w):D;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=P(V):{path:V},V.params={}),ue({query:w.query,hash:w.hash,params:"path"in V?{}:w.params},V)}}function Re(w,x){const D=l=k(w),V=c.value,re=w.state,be=w.force,ee=w.replace===!0,f=Te(D);if(f)return Re(ue(P(f),{state:typeof f=="object"?ue({},re,f.state):re,force:be,replace:ee}),x||D);const p=D;p.redirectedFrom=x;let g;return!be&&sA(s,V,D)&&(g=Bs(16,{to:p,from:V}),Mn(V,V,!0,!1)),(g?Promise.resolve(g):ve(p,V)).catch(v=>Gt(v)?Gt(v,2)?v:It(v):me(v,p,V)).then(v=>{if(v){if(Gt(v,2))return Re(ue({replace:ee},P(v.to),{state:typeof v.to=="object"?ue({},re,v.to.state):re,force:be}),x||p)}else v=He(p,V,!0,ee,re);return pe(p,V,v),v})}function Z(w,x){const D=M(w,x);return D?Promise.reject(D):Promise.resolve()}function ve(w,x){let D;const[V,re,be]=tk(w,x);D=Va(V.reverse(),"beforeRouteLeave",w,x);for(const f of V)f.leaveGuards.forEach(p=>{D.push(pn(p,w,x))});const ee=Z.bind(null,w,x);return D.push(ee),ds(D).then(()=>{D=[];for(const f of i.list())D.push(pn(f,w,x));return D.push(ee),ds(D)}).then(()=>{D=Va(re,"beforeRouteUpdate",w,x);for(const f of re)f.updateGuards.forEach(p=>{D.push(pn(p,w,x))});return D.push(ee),ds(D)}).then(()=>{D=[];for(const f of w.matched)if(f.beforeEnter&&!x.matched.includes(f))if(Pt(f.beforeEnter))for(const p of f.beforeEnter)D.push(pn(p,w,x));else D.push(pn(f.beforeEnter,w,x));return D.push(ee),ds(D)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),D=Va(be,"beforeRouteEnter",w,x),D.push(ee),ds(D))).then(()=>{D=[];for(const f of o.list())D.push(pn(f,w,x));return D.push(ee),ds(D)}).catch(f=>Gt(f,8)?f:Promise.reject(f))}function pe(w,x,D){for(const V of a.list())V(w,x,D)}function He(w,x,D,V,re){const be=M(w,x);if(be)return be;const ee=x===dn,f=gs?history.state:{};D&&(V||ee?r.replace(w.fullPath,ue({scroll:ee&&f&&f.scroll},re)):r.push(w.fullPath,re)),c.value=w,Mn(w,x,D,ee),It()}let ze;function Et(){ze||(ze=r.listen((w,x,D)=>{if(!vi.listening)return;const V=k(w),re=Te(V);if(re){Re(ue(re,{replace:!0}),V).catch(gr);return}l=V;const be=c.value;gs&&hA(dd(be.fullPath,D.delta),fa()),ve(V,be).catch(ee=>Gt(ee,12)?ee:Gt(ee,2)?(Re(ee.to,V).then(f=>{Gt(f,20)&&!D.delta&&D.type===jr.pop&&r.go(-1,!1)}).catch(gr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),me(ee,V,be))).then(ee=>{ee=ee||He(V,be,!1),ee&&(D.delta&&!Gt(ee,8)?r.go(-D.delta,!1):D.type===jr.pop&&Gt(ee,20)&&r.go(-1,!1)),pe(V,be,ee)}).catch(gr)}))}let zt=tr(),Js=tr(),Ne;function me(w,x,D){It(w);const V=Js.list();return V.length?V.forEach(re=>re(w,x,D)):console.error(w),Promise.reject(w)}function he(){return Ne&&c.value!==dn?Promise.resolve():new Promise((w,x)=>{zt.add([w,x])})}function It(w){return Ne||(Ne=!w,Et(),zt.list().forEach(([x,D])=>w?D(w):x()),zt.reset()),w}function Mn(w,x,D,V){const{scrollBehavior:re}=t;if(!gs||!re)return Promise.resolve();const be=!D&&dA(dd(w.fullPath,0))||(V||!D)&&history.state&&history.state.scroll||null;return Jd().then(()=>re(w,x,be)).then(ee=>ee&&uA(ee)).catch(ee=>me(ee,w,x))}const bt=w=>r.go(w);let it;const us=new Set,vi={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:R,getRoutes:_,resolve:k,options:t,push:W,replace:oe,go:bt,back:()=>bt(-1),forward:()=>bt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Js.add,isReady:he,install(w){const x=this;w.component("RouterLink",QA),w.component("RouterView",ZA),w.config.globalProperties.$router=x,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Is(c)}),gs&&!it&&c.value===dn&&(it=!0,W(r.location).catch(re=>{}));const D={};for(const re in dn)D[re]=yt(()=>c.value[re]);w.provide(fu,x),w.provide(Vg,qr(D)),w.provide(Lc,c);const V=w.unmount;us.add(w),w.unmount=function(){us.delete(w),us.size<1&&(l=dn,ze&&ze(),ze=null,c.value=dn,it=!1,Ne=!1),V()}}};return vi}function ds(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function tk(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Vs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Vs(l,c))||r.push(c))}return[n,s,r]}const nk={name:"home",data(){return{employees:[],loading:!0}},async created(){(await $s(os(en,"employees"))).forEach(e=>{const n={id:e.id,employee_id:e.data().employee_id,name:e.data().name,dept:e.data().dept,position:e.data().position};this.employees.push(n)})}},sk={id:"home"},rk={class:"collection with-header"},ik=b("li",{class:"collection-header"},[b("h4",null,"Employees")],-1),ok={class:"chip"},ak=b("i",{class:"fa fa-eye"},null,-1),ck={class:"fixed-action-btn"},lk=b("i",{class:"fa fa-plus"},null,-1);function uk(t,e,n,s,r,i){const o=Jn("router-link");return Se(),Ae("div",sk,[b("ul",rk,[ik,(Se(!0),Ae(Ct,null,pv(r.employees,a=>(Se(),Ae("li",{key:a.id,class:"collection-item"},[b("div",ok,Ft(a.dept),1),gt(" "+Ft(a.employee_id)+": "+Ft(a.name)+" ",1),fe(o,{class:"secondary-content",to:{name:"view-employee",params:{employee_id:a.employee_id}}},{default:at(()=>[ak]),_:2},1032,["to"])]))),128))]),b("div",ck,[fe(o,{to:"/new-employee",class:"btn-floating btn-large red"},{default:at(()=>[lk]),_:1})])])}const hk=Dn(nk,[["render",uk]]),dk={name:"new-employee",data(){return{employee_id:null,name:null,dept:null,position:null}},async beforeRouteEnter(t,e,n){const s=Vr(os(en,"employees"),Br("employee_id","==",t.params.employee_id));(await $s(s)).forEach(i=>{n(o=>{o.doc_id=i.id,o.employee_id=i.data().employee_id,o.name=i.data().name,o.dept=i.data().dept,o.position=i.data().position})})},watch:{$route(){this.employee_id=this.$route.params.employee_id,this.fetchData()}},methods:{async fetchData(){const t=Vr(os(en,"employees"),Br("employee_id","==",this.$route.params.employee_id));(await $s(t)).forEach(n=>{this.doc_id=n.id,this.employee_id=n.data().employee_id,this.name=n.data().name,this.dept=n.data().dept,this.position=n.data().position})},updateEmployee(){SC(tu(en,"employees",this.doc_id),{employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(()=>{this.$router.push({name:"view-employee",params:{employee_id:this.employee_id}})})}}},fk={id:"new-employee"},pk=b("h3",null,"New Employee",-1),mk={class:"row"},gk={class:"row"},yk={class:"input-field col s12"},vk=b("label",{class:"active"},"Employee ID#",-1),_k={class:"row"},wk={class:"input-field col s12"},Ek=b("label",null,"Name",-1),Ik={class:"row"},bk={class:"input-field col s12"},Tk=b("label",null,"Department",-1),Sk={class:"row"},Ck={class:"input-field col s12"},Ak=b("label",null,"Position",-1),kk=b("button",{type:"submit",class:"btn"},"Update",-1);function Rk(t,e,n,s,r,i){const o=Jn("router-link");return Se(),Ae("div",fk,[pk,b("div",mk,[b("form",{onSubmit:e[4]||(e[4]=Po((...a)=>i.updateEmployee&&i.updateEmployee(...a),["prevent"])),class:"col s12"},[b("div",gk,[b("div",yk,[vt(b("input",{type:"text",disabled:"","onUpdate:modelValue":e[0]||(e[0]=a=>r.employee_id=a),required:""},null,512),[[_t,r.employee_id]]),vk])]),b("div",_k,[b("div",wk,[vt(b("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>r.name=a),required:""},null,512),[[_t,r.name]]),Ek])]),b("div",Ik,[b("div",bk,[vt(b("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>r.dept=a),required:""},null,512),[[_t,r.dept]]),Tk])]),b("div",Sk,[b("div",Ck,[vt(b("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=a=>r.position=a),required:""},null,512),[[_t,r.position]]),Ak])]),kk,fe(o,{to:"/",class:"btn grey"},{default:at(()=>[gt("Cancel")]),_:1})],32)])])}const Nk=Dn(dk,[["render",Rk]]),Dk={name:"view-employee",data(){return{doc_id:null,employee_id:this.$route.params.employee_id,name:null,dept:null,position:null}},async beforeRouteEnter(t,e,n){const s=Vr(os(en,"employees"),Br("employee_id","==",t.params.employee_id));(await $s(s)).forEach(i=>{n(o=>{o.doc_id=i.id,o.employee_id=i.data().employee_id,o.name=i.data().name,o.dept=i.data().dept,o.position=i.data().position})})},watch:{$route(){this.employee_id=this.$route.params.employee_id,this.fetchData()}},methods:{async fetchData(){const t=Vr(os(en,"employees"),Br("employee_id","==",this.$route.params.employee_id));(await $s(t)).forEach(n=>{this.doc_id=n.id,this.employee_id=n.data().employee_id,this.name=n.data().name,this.dept=n.data().dept,this.position=n.data().position})},async deleteEmployee(){confirm("Are you sure?")&&(await CC(tu(en,"employees",this.doc_id)),this.$router.push("/"))}}},Ok={id:"view-employee"},xk={class:"collection with-header"},Pk={class:"collection-header"},Mk={class:"collection-item"},Lk={class:"collection-item"},Uk={class:"collection-item"},Fk={class:"fixed-action-btn"},$k=b("i",{class:"fa fa-pencil"},null,-1);function Vk(t,e,n,s,r,i){const o=Jn("router-link");return Se(),Ae("div",Ok,[b("ul",xk,[b("li",Pk,[b("h4",null,Ft(r.name),1),b("p",null,"id : "+Ft(t.$route.params.employee_id),1)]),b("li",Mk,"Employee ID#: "+Ft(r.employee_id),1),b("li",Lk,"Department: "+Ft(r.dept),1),b("li",Uk,"Position: "+Ft(r.position),1)]),fe(o,{to:"/",class:"btn grey"},{default:at(()=>[gt("Back")]),_:1}),b("button",{onClick:e[0]||(e[0]=(...a)=>i.deleteEmployee&&i.deleteEmployee(...a)),class:"btn red"},"Delete"),b("div",Fk,[fe(o,{to:{name:"edit-employee",params:{employee_id:r.employee_id}},class:"btn-floating btn-large red"},{default:at(()=>[$k]),_:1},8,["to"])])])}const Bk=Dn(Dk,[["render",Vk]]),jk={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){const t=kr();ME(t,this.email,this.password).then(e=>{e.user,alert("Welcome "+t.currentUser.email),this.$router.push("/")}).catch(e=>{e.code;const n=e.message;alert(n)})}}},qk={class:"container"},Kk={class:"row"},Hk={class:"col s12 m8 offset-m2"},zk={class:"login card-panel green white-text center"},Wk=b("h3",null,"Login",-1),Gk={class:"input-field"},Qk=b("i",{class:"material-icons prefix"},"email",-1),Yk=b("label",{class:"white-text",for:"email"},"Email Address",-1),Xk={class:"input-field"},Jk=b("i",{class:"material-icons prefix"},"lock",-1),Zk=b("label",{class:"white-text",for:"password"},"Password",-1);function e1(t,e,n,s,r,i){return Se(),Ae("div",null,[b("div",qk,[b("div",Kk,[b("div",Hk,[b("div",zk,[Wk,b("form",null,[b("div",Gk,[Qk,vt(b("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>t.email=o)},null,512),[[_t,t.email]]),Yk]),b("div",Xk,[Jk,vt(b("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o)},null,512),[[_t,t.password]]),Zk]),b("button",{onClick:e[2]||(e[2]=Po((...o)=>i.login&&i.login(...o),["prevent"])),class:"btn btn-large btn-extended grey lighten-4 black-text"},"Login")])])])])])])}const t1=Dn(jk,[["render",e1]]),n1={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(){console.log(this.email),PE(kr(),this.email,this.password).then(t=>{t.user,this.$router.push("/")}).catch(t=>{t.code;const e=t.message;console.log(e)})}}},s1={class:"container"},r1={class:"row"},i1={class:"col s12 m8 offset-m2"},o1={class:"login card-panel grey lighten-4 black-text center"},a1=b("h3",null,"Register",-1),c1={class:"input-field"},l1=b("i",{class:"material-icons prefix"},"email",-1),u1=b("label",{for:"email"},"Email Address",-1),h1={class:"input-field"},d1=b("i",{class:"material-icons prefix"},"lock",-1),f1=b("label",{for:"password"},"Password",-1);function p1(t,e,n,s,r,i){return Se(),Ae("div",null,[b("div",s1,[b("div",r1,[b("div",i1,[b("div",o1,[a1,b("form",null,[b("div",c1,[l1,vt(b("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>t.email=o)},null,512),[[_t,t.email]]),u1]),b("div",h1,[d1,vt(b("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o)},null,512),[[_t,t.password]]),f1]),b("button",{onClick:e[2]||(e[2]=Po((...o)=>i.register&&i.register(...o),["prevent"])),class:"btn btn-large btn-extended grey lighten-4 black-text"},"Register")])])])])])])}const m1=Dn(n1,[["render",p1]]),Bg=ek({history:gA("/"),routes:[{path:"/",name:"home",component:hk,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:t1,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:m1,meta:{requiresGuest:!0}},{path:"/new-employee",name:"new-employee",component:Rg,meta:{requiresAuth:!0}},{path:"/edit-employee/:employee_id",name:"edit-employee",component:Nk,meta:{requiresAuth:!0}},{path:"/:employee_id",name:"view-employee",component:Bk,meta:{requiresAuth:!0}}]}),Cd=()=>new Promise((t,e)=>{const n=sp(kr(),s=>{n(),t(s)},e)});Bg.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await Cd()?n():n({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(s=>s.meta.requiresGuest)&&await Cd()?n({path:"/",query:{redirect:t.fullPath}}):n()});const jg=v_(JC);jg.use(Bg);jg.mount("#app");
