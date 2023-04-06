(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=window,Bt=Ye.ShadowRoot&&(Ye.ShadyCSS===void 0||Ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ft=Symbol(),ur=new WeakMap;let kr=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Bt&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=ur.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ur.set(r,e))}return e}toString(){return this.cssText}};const vn=t=>new kr(typeof t=="string"?t:t+"",void 0,Ft),U=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new kr(r,t,Ft)},gn=(t,e)=>{Bt?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),i=Ye.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)})},lr=Bt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return vn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gt;const Ze=window,cr=Ze.trustedTypes,yn=cr?cr.emptyScript:"",fr=Ze.reactiveElementPolyfillSupport,Tt={toAttribute(t,e){switch(e){case Boolean:t=t?yn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},zr=(t,e)=>e!==t&&(e==e||t==t),yt={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:zr};let be=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,r=yt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(i){const o=this[e];this[r]=i,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||yt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(lr(i))}else e!==void 0&&r.push(lr(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gn(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=yt){var i;const o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:Tt).toAttribute(r,n.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,r){var n;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const s=i.getPropertyOptions(o),f=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Tt;this._$El=o,this[o]=f.fromAttribute(r,s.type),this._$El=null}}requestUpdate(e,r,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||zr)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};be.finalized=!0,be.elementProperties=new Map,be.elementStyles=[],be.shadowRootOptions={mode:"open"},fr==null||fr({ReactiveElement:be}),((gt=Ze.reactiveElementVersions)!==null&&gt!==void 0?gt:Ze.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt;const Je=window,xe=Je.trustedTypes,dr=xe?xe.createPolicy("lit-html",{createHTML:t=>t}):void 0,re=`lit$${(Math.random()+"").slice(9)}$`,Ur="?"+re,mn=`<${Ur}>`,Ae=document,ke=(t="")=>Ae.createComment(t),ze=t=>t===null||typeof t!="object"&&typeof t!="function",Lr=Array.isArray,bn=t=>Lr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hr=/-->/g,pr=/>/g,pe=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vr=/'/g,gr=/"/g,Hr=/^(?:script|style|textarea|title)$/i,$n=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),C=$n(1),se=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),yr=new WeakMap,$e=Ae.createTreeWalker(Ae,129,null,!1),wn=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":"",s=Ne;for(let c=0;c<r;c++){const u=t[c];let p,h,v=-1,y=0;for(;y<u.length&&(s.lastIndex=y,h=s.exec(u),h!==null);)y=s.lastIndex,s===Ne?h[1]==="!--"?s=hr:h[1]!==void 0?s=pr:h[2]!==void 0?(Hr.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=pe):h[3]!==void 0&&(s=pe):s===pe?h[0]===">"?(s=i??Ne,v=-1):h[1]===void 0?v=-2:(v=s.lastIndex-h[2].length,p=h[1],s=h[3]===void 0?pe:h[3]==='"'?gr:vr):s===gr||s===vr?s=pe:s===hr||s===pr?s=Ne:(s=pe,i=void 0);const b=s===pe&&t[c+1].startsWith("/>")?" ":"";o+=s===Ne?u+mn:v>=0?(n.push(p),u.slice(0,v)+"$lit$"+u.slice(v)+re+b):u+re+(v===-2?(n.push(void 0),c):b)}const f=o+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[dr!==void 0?dr.createHTML(f):f,n]};class Ue{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const f=e.length-1,c=this.parts,[u,p]=wn(e,r);if(this.el=Ue.createElement(u,n),$e.currentNode=this.el.content,r===2){const h=this.el.content,v=h.firstChild;v.remove(),h.append(...v.childNodes)}for(;(i=$e.nextNode())!==null&&c.length<f;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const v of i.getAttributeNames())if(v.endsWith("$lit$")||v.startsWith(re)){const y=p[s++];if(h.push(v),y!==void 0){const b=i.getAttribute(y.toLowerCase()+"$lit$").split(re),m=/([.?@])?(.*)/.exec(y);c.push({type:1,index:o,name:m[2],strings:b,ctor:m[1]==="."?xn:m[1]==="?"?On:m[1]==="@"?Pn:at})}else c.push({type:6,index:o})}for(const v of h)i.removeAttribute(v)}if(Hr.test(i.tagName)){const h=i.textContent.split(re),v=h.length-1;if(v>0){i.textContent=xe?xe.emptyScript:"";for(let y=0;y<v;y++)i.append(h[y],ke()),$e.nextNode(),c.push({type:2,index:++o});i.append(h[v],ke())}}}else if(i.nodeType===8)if(i.data===Ur)c.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(re,h+1))!==-1;)c.push({type:7,index:o}),h+=re.length-1}o++}}static createElement(e,r){const n=Ae.createElement("template");return n.innerHTML=e,n}}function Oe(t,e,r=t,n){var i,o,s,f;if(e===se)return e;let c=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl;const u=ze(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==u&&((o=c==null?void 0:c._$AO)===null||o===void 0||o.call(c,!1),u===void 0?c=void 0:(c=new u(t),c._$AT(t,r,n)),n!==void 0?((s=(f=r)._$Co)!==null&&s!==void 0?s:f._$Co=[])[n]=c:r._$Cl=c),c!==void 0&&(e=Oe(t,c._$AS(t,e.values),c,n)),e}class _n{constructor(e,r){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var r;const{el:{content:n},parts:i}=this._$AD,o=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:Ae).importNode(n,!0);$e.currentNode=o;let s=$e.nextNode(),f=0,c=0,u=i[0];for(;u!==void 0;){if(f===u.index){let p;u.type===2?p=new Wt(s,s.nextSibling,this,e):u.type===1?p=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(p=new En(s,this,e)),this.u.push(p),u=i[++c]}f!==(u==null?void 0:u.index)&&(s=$e.nextNode(),f++)}return o}p(e){let r=0;for(const n of this.u)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}let Wt=class Br{constructor(e,r,n,i){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Oe(this,e,r),ze(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==se&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bn(e)?this.k(e):this.g(e)}O(e,r=this._$AB){return this._$AA.parentNode.insertBefore(e,r)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==N&&ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ae.createTextNode(e)),this._$AH=e}$(e){var r;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ue.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new _n(o,this),f=s.v(this.options);s.p(n),this.T(f),this._$AH=s}}_$AC(e){let r=yr.get(e.strings);return r===void 0&&yr.set(e.strings,r=new Ue(e)),r}k(e){Lr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new Br(this.O(ke()),this.O(ke()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cm=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}},at=class{constructor(e,r,n,i,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Oe(this,e,r,0),s=!ze(e)||e!==this._$AH&&e!==se,s&&(this._$AH=e);else{const f=e;let c,u;for(e=o[0],c=0;c<o.length-1;c++)u=Oe(this,f[n+c],r,c),u===se&&(u=this._$AH[c]),s||(s=!ze(u)||u!==this._$AH[c]),u===N?e=N:e!==N&&(e+=(u??"")+o[c+1]),this._$AH[c]=u}s&&!i&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xn=class extends at{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}};const An=xe?xe.emptyScript:"";let On=class extends at{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,An):this.element.removeAttribute(this.name)}},Pn=class extends at{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){var n;if((e=(n=Oe(this,e,r,0))!==null&&n!==void 0?n:N)===se)return;const i=this._$AH,o=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==N&&(i===N||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},En=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Oe(this,e)}};const mr=Je.litHtmlPolyfillSupport;mr==null||mr(Ue,Wt),((mt=Je.litHtmlVersions)!==null&&mt!==void 0?mt:Je.litHtmlVersions=[]).push("2.6.1");const Sn=(t,e,r)=>{var n,i;const o=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let s=o._$litPart$;if(s===void 0){const f=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new Wt(e.insertBefore(ke(),f),f,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bt,$t;let z=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Sn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return se}};z.finalized=!0,z._$litElement$=!0,(bt=globalThis.litElementHydrateSupport)===null||bt===void 0||bt.call(globalThis,{LitElement:z});const br=globalThis.litElementPolyfillSupport;br==null||br({LitElement:z});(($t=globalThis.litElementVersions)!==null&&$t!==void 0?$t:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=t=>e=>typeof e=="function"?((r,n)=>(customElements.define(r,n),n))(t,e):((r,n)=>{const{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(s){customElements.define(r,s)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function D(t){return(e,r)=>r!==void 0?((n,i,o)=>{i.constructor.createProperty(o,n)})(t,e,r):jn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(t){return D({...t,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wt;((wt=window.HTMLSlotElement)===null||wt===void 0?void 0:wt.prototype.assignedElements)!=null;const Ke=U`
  :host {
    display: block;
    margin: 0px;
    padding: 0px;
    box-shadow: none;
    box-sizing: border-box;
    background: inherit;
    border: none;
    width: auto;
    height: auto;
  }
`;var Cn=Object.defineProperty,Dn=Object.getOwnPropertyDescriptor,Tn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Dn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Cn(e,r,i),i};let It=class extends z{render(){return C`<slot></slot>`}};It.styles=Ke;It=Tn([V("core-base")],It);const In=U`
  :host {
    display: block;
    box-sizing: border-box;
    width: max-content;
    height: 100%;
    border: 2px outset white;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    background: var(--main-gray);
    padding: 0.5rem;
    user-select: none;
  }
  :host(:active),
  :host(.active) {
    border: 2px inset white;
    border-top: 2px solid black;
    border-left: 2px solid black;
  }
`,Nn=U`
  #img-wrapper {
    box-sizing: border-box;
    width: 16px;
    height: 16px;
  }
  #img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;var Rn=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,ut=(t,e,r,n)=>{for(var i=n>1?void 0:n?Mn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Rn(e,r,i),i};let Pe=class extends z{TextTemplate(){return this.text?C`
      <flex-item .flex=${1}>
        <div>${this.text}</div>
      </flex-item>
    `:C``}ImgTemplate(){return this.src?C`
      <flex-item .flex=${1}>
        <flex-box id="img-wrapper">
          <img id="img" src=${this.src} draggable="false" />
        </flex-box>
      </flex-item>
    `:C``}render(){return C`
      <flex-box .gap=${4}>${this.ImgTemplate()}${this.TextTemplate()}</flex-box>
    `}};Pe.styles=[Ke,In,Nn];ut([D()],Pe.prototype,"src",2);ut([D()],Pe.prototype,"text",2);ut([D()],Pe.prototype,"isFocused",2);Pe=ut([V("core-button")],Pe);var kn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,lt=(t,e,r,n)=>{for(var i=n>1?void 0:n?zn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&kn(e,r,i),i};let Ee=class extends z{render(){const t=C`
      <style>
        :host {
          gap: ${this.gap||0}px;
          justify-content: ${this.justifyContent||"center"};
          align-items: ${this.alignItems||"center"};
        }
      </style>
    `;return C`
      ${t}
      <slot></slot>
    `}};Ee.styles=[Ke,U`
      :host {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
      }
    `];lt([D()],Ee.prototype,"gap",2);lt([D()],Ee.prototype,"justifyContent",2);lt([D()],Ee.prototype,"alignItems",2);Ee=lt([V("flex-box")],Ee);var Un=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,ct=(t,e,r,n)=>{for(var i=n>1?void 0:n?Ln(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Un(e,r,i),i};let Se=class extends z{constructor(){super(...arguments),this.flex=0,this.flexShrink=0,this.flexGrow=0}render(){const t=C`
      <style>
        :host {
          flex: ${this.flex};
          flex-grow: ${this.flexGrow||"none"};
          flex-shrink: ${this.flexShrink||"1"};
        }
      </style>
    `;return C`
      ${t}
      <slot></slot>
    `}};Se.styles=U`
    :host {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      align-items: center;
      display: flex;
    }
  `;ct([D()],Se.prototype,"flex",2);ct([D()],Se.prototype,"flexShrink",2);ct([D()],Se.prototype,"flexGrow",2);Se=ct([V("flex-item")],Se);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wr=t=>(...e)=>({_$litDirective$:t,values:e});let qr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=Wr(class extends qr{constructor(t){var e;if(super(t),t.type!==Fr.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(e)}const i=t.element.classList;this.nt.forEach(o=>{o in e||(i.remove(o),this.nt.delete(o))});for(const o in e){const s=!!e[o];s===this.nt.has(o)||!((n=this.st)===null||n===void 0)&&n.has(o)||(s?(i.add(o),this.nt.add(o)):(i.remove(o),this.nt.delete(o)))}return se}});var Hn=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,qt=(t,e,r,n)=>{for(var i=n>1?void 0:n?Bn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Hn(e,r,i),i};let Le=class extends z{constructor(){super(...arguments),this.text="",this.ellipsis=!1}render(){return C`<div class=${Vr({ellipsis:this.ellipsis})}>
      ${this.text}
    </div>`}};Le.styles=[Ke,U`
      :host {
        width: 100%;
        height: 100%;
      }
      .ellipsis {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    `];qt([D()],Le.prototype,"text",2);qt([D()],Le.prototype,"ellipsis",2);Le=qt([V("core-text")],Le);var Fn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,qn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Wn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Fn(e,r,i),i};let Nt=class extends z{render(){return C`<slot></slot> `}};Nt.styles=U`
    :host {
      padding: 0.5rem;
    }
  `;Nt=qn([V("pop-up-body")],Nt);const _t=150,xt=100,Kr=32,Vn=U`
  :host {
    position: absolute;
    background-color: var(--main-gray);
    transition: all 0.2s linear;
  }
  #container {
    box-sizing: border-box;
    padding: 0.25rem;
    border: 1px outset white;
  }
`,Kn=U`
  :host(.minimize) {
    transform: translateY(100vh) scale(0);
    transition: 0.2s linear;
  }
`,Xn=U`
  :host(.maximize) {
    width: 100%;
    height: calc(100% - ${Kr}px);
    transition: all 0.2s linear;
  }
`,Gn=U`
  .outline {
    position: absolute;
  }
  #top {
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    cursor: ns-resize;
  }
  #right {
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: black;
    cursor: ew-resize;
  }
  #bottom {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    cursor: ns-resize;
  }
  #left {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: white;
    cursor: ew-resize;
    z-index: -1;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yn=Wr(class extends qr{constructor(t){var e;if(super(t),t.type!==Fr.ATTRIBUTE||t.name!=="style"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:r}=t.element;if(this.vt===void 0){this.vt=new Set;for(const n in e)this.vt.add(n);return this.render(e)}this.vt.forEach(n=>{e[n]==null&&(this.vt.delete(n),n.includes("-")?r.removeProperty(n):r[n]="")});for(const n in e){const i=e[n];i!=null&&(this.vt.add(n),n.includes("-")?r.setProperty(n,i):r[n]=i)}return se}});function Z(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ae(t){return!!t&&!!t[j]}function te(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===oi}(t)||Array.isArray(t)||!!t[Pr]||!!(!((e=t.constructor)===null||e===void 0)&&e[Pr])||Vt(t)||Kt(t))}function ge(t,e,r){r===void 0&&(r=!1),je(t)===0?(r?Object.keys:_e)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function je(t){var e=t[j];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Vt(t)?2:Kt(t)?3:0}function we(t,e){return je(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Zn(t,e){return je(t)===2?t.get(e):t[e]}function Xr(t,e,r){var n=je(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function Gr(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Vt(t){return ni&&t instanceof Map}function Kt(t){return ii&&t instanceof Set}function ve(t){return t.o||t.t}function Xt(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Zr(t);delete e[j];for(var r=_e(e),n=0;n<r.length;n++){var i=r[n],o=e[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Gt(t,e){return e===void 0&&(e=!1),Yt(t)||ae(t)||!te(t)||(je(t)>1&&(t.set=t.add=t.clear=t.delete=Jn),Object.freeze(t),e&&ge(t,function(r,n){return Gt(n,!0)},!0)),t}function Jn(){Z(2)}function Yt(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Q(t){var e=zt[t];return e||Z(18,t),e}function Qn(t,e){zt[t]||(zt[t]=e)}function Rt(){return He}function At(t,e){e&&(Q("Patches"),t.u=[],t.s=[],t.v=e)}function Qe(t){Mt(t),t.p.forEach(ei),t.p=null}function Mt(t){t===He&&(He=t.l)}function $r(t){return He={p:[],l:He,h:t,m:!0,_:0}}function ei(t){var e=t[j];e.i===0||e.i===1?e.j():e.O=!0}function Ot(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.g||Q("ES5").S(e,t,n),n?(r[j].P&&(Qe(e),Z(4)),te(t)&&(t=et(e,t),e.l||tt(e,t)),e.u&&Q("Patches").M(r[j].t,t,e.u,e.s)):t=et(e,r,[]),Qe(e),e.u&&e.v(e.u,e.s),t!==Yr?t:void 0}function et(t,e,r){if(Yt(e))return e;var n=e[j];if(!n)return ge(e,function(f,c){return wr(t,n,e,f,c,r)},!0),e;if(n.A!==t)return e;if(!n.P)return tt(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=Xt(n.k):n.o,o=i,s=!1;n.i===3&&(o=new Set(i),i.clear(),s=!0),ge(o,function(f,c){return wr(t,n,i,f,c,r,s)}),tt(t,i,!1),r&&t.u&&Q("Patches").N(n,r,t.u,t.s)}return n.o}function wr(t,e,r,n,i,o,s){if(ae(i)){var f=et(t,i,o&&e&&e.i!==3&&!we(e.R,n)?o.concat(n):void 0);if(Xr(r,n,f),!ae(f))return;t.m=!1}else s&&r.add(i);if(te(i)&&!Yt(i)){if(!t.h.D&&t._<1)return;et(t,i),e&&e.A.l||tt(t,i)}}function tt(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&Gt(e,r)}function Pt(t,e){var r=t[j];return(r?ve(r):t)[e]}function _r(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function ne(t){t.P||(t.P=!0,t.l&&ne(t.l))}function Et(t){t.o||(t.o=Xt(t.t))}function kt(t,e,r){var n=Vt(e)?Q("MapSet").F(e,r):Kt(e)?Q("MapSet").T(e,r):t.g?function(i,o){var s=Array.isArray(i),f={i:s?1:0,A:o?o.A:Rt(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},c=f,u=Be;s&&(c=[f],u=Me);var p=Proxy.revocable(c,u),h=p.revoke,v=p.proxy;return f.k=v,f.j=h,v}(e,r):Q("ES5").J(e,r);return(r?r.A:Rt()).p.push(n),n}function ti(t){return ae(t)||Z(22,t),function e(r){if(!te(r))return r;var n,i=r[j],o=je(r);if(i){if(!i.P&&(i.i<4||!Q("ES5").K(i)))return i.t;i.I=!0,n=xr(r,o),i.I=!1}else n=xr(r,o);return ge(n,function(s,f){i&&Zn(i.t,s)===f||Xr(n,s,e(f))}),o===3?new Set(n):n}(t)}function xr(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Xt(t)}function ri(){function t(o,s){var f=i[o];return f?f.enumerable=s:i[o]=f={configurable:!0,enumerable:s,get:function(){var c=this[j];return Be.get(c,o)},set:function(c){var u=this[j];Be.set(u,o,c)}},f}function e(o){for(var s=o.length-1;s>=0;s--){var f=o[s][j];if(!f.P)switch(f.i){case 5:n(f)&&ne(f);break;case 4:r(f)&&ne(f)}}}function r(o){for(var s=o.t,f=o.k,c=_e(f),u=c.length-1;u>=0;u--){var p=c[u];if(p!==j){var h=s[p];if(h===void 0&&!we(s,p))return!0;var v=f[p],y=v&&v[j];if(y?y.t!==h:!Gr(v,h))return!0}}var b=!!s[j];return c.length!==_e(s).length+(b?0:1)}function n(o){var s=o.k;if(s.length!==o.t.length)return!0;var f=Object.getOwnPropertyDescriptor(s,s.length-1);if(f&&!f.get)return!0;for(var c=0;c<s.length;c++)if(!s.hasOwnProperty(c))return!0;return!1}var i={};Qn("ES5",{J:function(o,s){var f=Array.isArray(o),c=function(p,h){if(p){for(var v=Array(h.length),y=0;y<h.length;y++)Object.defineProperty(v,""+y,t(y,!0));return v}var b=Zr(h);delete b[j];for(var m=_e(b),x=0;x<m.length;x++){var A=m[x];b[A]=t(A,p||!!b[A].enumerable)}return Object.create(Object.getPrototypeOf(h),b)}(f,o),u={i:f?5:4,A:s?s.A:Rt(),P:!1,I:!1,R:{},l:s,t:o,k:c,o:null,O:!1,C:!1};return Object.defineProperty(c,j,{value:u,writable:!0}),c},S:function(o,s,f){f?ae(s)&&s[j].A===o&&e(o.p):(o.u&&function c(u){if(u&&typeof u=="object"){var p=u[j];if(p){var h=p.t,v=p.k,y=p.R,b=p.i;if(b===4)ge(v,function(E){E!==j&&(h[E]!==void 0||we(h,E)?y[E]||c(v[E]):(y[E]=!0,ne(p)))}),ge(h,function(E){v[E]!==void 0||we(v,E)||(y[E]=!1,ne(p))});else if(b===5){if(n(p)&&(ne(p),y.length=!0),v.length<h.length)for(var m=v.length;m<h.length;m++)y[m]=!1;else for(var x=h.length;x<v.length;x++)y[x]=!0;for(var A=Math.min(v.length,h.length),P=0;P<A;P++)v.hasOwnProperty(P)||(y[P]=!0),y[P]===void 0&&c(v[P])}}}}(o.p[0]),e(o.p))},K:function(o){return o.i===4?r(o):n(o)}})}var Ar,He,Zt=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",ni=typeof Map<"u",ii=typeof Set<"u",Or=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Yr=Zt?Symbol.for("immer-nothing"):((Ar={})["immer-nothing"]=!0,Ar),Pr=Zt?Symbol.for("immer-draftable"):"__$immer_draftable",j=Zt?Symbol.for("immer-state"):"__$immer_state",oi=""+Object.prototype.constructor,_e=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Zr=Object.getOwnPropertyDescriptors||function(t){var e={};return _e(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},zt={},Be={get:function(t,e){if(e===j)return t;var r=ve(t);if(!we(r,e))return function(i,o,s){var f,c=_r(o,s);return c?"value"in c?c.value:(f=c.get)===null||f===void 0?void 0:f.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!te(n)?n:n===Pt(t.t,e)?(Et(t),t.o[e]=kt(t.A.h,n,t)):n},has:function(t,e){return e in ve(t)},ownKeys:function(t){return Reflect.ownKeys(ve(t))},set:function(t,e,r){var n=_r(ve(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=Pt(ve(t),e),o=i==null?void 0:i[j];if(o&&o.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(Gr(r,i)&&(r!==void 0||we(t.t,e)))return!0;Et(t),ne(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return Pt(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Et(t),ne(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=ve(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){Z(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Z(12)}},Me={};ge(Be,function(t,e){Me[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Me.deleteProperty=function(t,e){return Me.set.call(this,t,e,void 0)},Me.set=function(t,e,r){return Be.set.call(this,t[0],e,r,t[0])};var si=function(){function t(r){var n=this;this.g=Or,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var f=o;o=i;var c=n;return function(m){var x=this;m===void 0&&(m=f);for(var A=arguments.length,P=Array(A>1?A-1:0),E=1;E<A;E++)P[E-1]=arguments[E];return c.produce(m,function(R){var M;return(M=o).call.apply(M,[x,R].concat(P))})}}var u;if(typeof o!="function"&&Z(6),s!==void 0&&typeof s!="function"&&Z(7),te(i)){var p=$r(n),h=kt(n,i,void 0),v=!0;try{u=o(h),v=!1}finally{v?Qe(p):Mt(p)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return At(p,s),Ot(m,p)},function(m){throw Qe(p),m}):(At(p,s),Ot(u,p))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===Yr&&(u=void 0),n.D&&Gt(u,!0),s){var y=[],b=[];Q("Patches").M(i,u,y,b),s(y,b)}return u}Z(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var p=arguments.length,h=Array(p>1?p-1:0),v=1;v<p;v++)h[v-1]=arguments[v];return n.produceWithPatches(u,function(y){return i.apply(void 0,[y].concat(h))})};var s,f,c=n.produce(i,o,function(u,p){s=u,f=p});return typeof Promise<"u"&&c instanceof Promise?c.then(function(u){return[u,s,f]}):[c,s,f]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){te(r)||Z(8),ae(r)&&(r=ti(r));var n=$r(this),i=kt(this,r,void 0);return i[j].C=!0,Mt(n),i},e.finishDraft=function(r,n){var i=r&&r[j],o=i.A;return At(o,n),Ot(void 0,o)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!Or&&Z(20),this.g=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var o=n[i];if(o.path.length===0&&o.op==="replace"){r=o.value;break}}i>-1&&(n=n.slice(i+1));var s=Q("Patches").$;return ae(r)?s(r,n):this.produce(r,function(f){return s(f,n)})},t}(),W=new si,Jr=W.produce;W.produceWithPatches.bind(W);W.setAutoFreeze.bind(W);W.setUseProxies.bind(W);W.applyPatches.bind(W);W.createDraft.bind(W);W.finishDraft.bind(W);function Fe(t){return Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fe(t)}function ai(t,e){if(Fe(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(Fe(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ui(t){var e=ai(t,"string");return Fe(e)==="symbol"?e:String(e)}function li(t,e,r){return e=ui(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Er(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Sr(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Er(Object(r),!0).forEach(function(n){li(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Er(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function k(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var jr=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),St=function(){return Math.random().toString(36).substring(7).split("").join(".")},rt={INIT:"@@redux/INIT"+St(),REPLACE:"@@redux/REPLACE"+St(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+St()}};function ci(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Qr(t,e,r){var n;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(k(0));if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(k(1));return r(Qr)(t,e)}if(typeof t!="function")throw new Error(k(2));var i=t,o=e,s=[],f=s,c=!1;function u(){f===s&&(f=s.slice())}function p(){if(c)throw new Error(k(3));return o}function h(m){if(typeof m!="function")throw new Error(k(4));if(c)throw new Error(k(5));var x=!0;return u(),f.push(m),function(){if(x){if(c)throw new Error(k(6));x=!1,u();var P=f.indexOf(m);f.splice(P,1),s=null}}}function v(m){if(!ci(m))throw new Error(k(7));if(typeof m.type>"u")throw new Error(k(8));if(c)throw new Error(k(9));try{c=!0,o=i(o,m)}finally{c=!1}for(var x=s=f,A=0;A<x.length;A++){var P=x[A];P()}return m}function y(m){if(typeof m!="function")throw new Error(k(10));i=m,v({type:rt.REPLACE})}function b(){var m,x=h;return m={subscribe:function(P){if(typeof P!="object"||P===null)throw new Error(k(11));function E(){P.next&&P.next(p())}E();var R=x(E);return{unsubscribe:R}}},m[jr]=function(){return this},m}return v({type:rt.INIT}),n={dispatch:v,subscribe:h,getState:p,replaceReducer:y},n[jr]=b,n}function fi(t){Object.keys(t).forEach(function(e){var r=t[e],n=r(void 0,{type:rt.INIT});if(typeof n>"u")throw new Error(k(12));if(typeof r(void 0,{type:rt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(k(13))})}function di(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var i=e[n];typeof t[i]=="function"&&(r[i]=t[i])}var o=Object.keys(r),s;try{fi(r)}catch(f){s=f}return function(c,u){if(c===void 0&&(c={}),s)throw s;for(var p=!1,h={},v=0;v<o.length;v++){var y=o[v],b=r[y],m=c[y],x=b(m,u);if(typeof x>"u")throw u&&u.type,new Error(k(14));h[y]=x,p=p||x!==m}return p=p||o.length!==Object.keys(c).length,p?h:c}}function nt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(n){return n}:e.length===1?e[0]:e.reduce(function(n,i){return function(){return n(i.apply(void 0,arguments))}})}function hi(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(n){return function(){var i=n.apply(void 0,arguments),o=function(){throw new Error(k(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},f=e.map(function(c){return c(s)});return o=nt.apply(void 0,f)(i.dispatch),Sr(Sr({},i),{},{dispatch:o})}}}function en(t){var e=function(n){var i=n.dispatch,o=n.getState;return function(s){return function(f){return typeof f=="function"?f(i,o,t):s(f)}}};return e}var tn=en();tn.withExtraArgument=en;const Cr=tn;var pi=globalThis&&globalThis.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),vi=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(u){return function(p){return c([u,p])}}function c(u){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,i=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(u[0]===6&&r.label<o[1]){r.label=o[1],o=u;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(u);break}o[2]&&r.ops.pop(),r.trys.pop();continue}u=e.call(t,r)}catch(p){u=[6,p],i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},it=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},gi=Object.defineProperty,yi=Object.defineProperties,mi=Object.getOwnPropertyDescriptors,Dr=Object.getOwnPropertySymbols,bi=Object.prototype.hasOwnProperty,$i=Object.prototype.propertyIsEnumerable,Tr=function(t,e,r){return e in t?gi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},ie=function(t,e){for(var r in e||(e={}))bi.call(e,r)&&Tr(t,r,e[r]);if(Dr)for(var n=0,i=Dr(e);n<i.length;n++){var r=i[n];$i.call(e,r)&&Tr(t,r,e[r])}return t},jt=function(t,e){return yi(t,mi(e))},wi=function(t,e,r){return new Promise(function(n,i){var o=function(c){try{f(r.next(c))}catch(u){i(u)}},s=function(c){try{f(r.throw(c))}catch(u){i(u)}},f=function(c){return c.done?n(c.value):Promise.resolve(c.value).then(o,s)};f((r=r.apply(t,e)).next())})},_i=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?nt:nt.apply(null,arguments)};function xi(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var r=e;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return e===r}var Ai=function(t){pi(e,t);function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=t.apply(this,r)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.prototype.concat.apply(this,r)},e.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(e.bind.apply(e,it([void 0],r[0].concat(this)))):new(e.bind.apply(e,it([void 0],r.concat(this))))},e}(Array);function Ut(t){return te(t)?Jr(t,function(){}):t}function Oi(t){return typeof t=="boolean"}function Pi(){return function(e){return Ei(e)}}function Ei(t){t===void 0&&(t={});var e=t.thunk,r=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var n=new Ai;return r&&(Oi(r)?n.push(Cr):n.push(Cr.withExtraArgument(r.extraArgument))),n}var Si=!0;function ji(t){var e=Pi(),r=t||{},n=r.reducer,i=n===void 0?void 0:n,o=r.middleware,s=o===void 0?e():o,f=r.devTools,c=f===void 0?!0:f,u=r.preloadedState,p=u===void 0?void 0:u,h=r.enhancers,v=h===void 0?void 0:h,y;if(typeof i=="function")y=i;else if(xi(i))y=di(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var b=s;typeof b=="function"&&(b=b(e));var m=hi.apply(void 0,b),x=nt;c&&(x=_i(ie({trace:!Si},typeof c=="object"&&c)));var A=[m];Array.isArray(v)?A=it([m],v):typeof v=="function"&&(A=v(A));var P=x.apply(void 0,A);return Qr(y,p,P)}function oe(t,e){function r(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(e){var o=e.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return ie(ie({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:n[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(n){return n.type===t},r}function rn(t){var e={},r=[],n,i={addCase:function(o,s){var f=typeof o=="string"?o:o.type;if(f in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[f]=s,i},addMatcher:function(o,s){return r.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return n=o,i}};return t(i),[e,r,n]}function Ci(t){return typeof t=="function"}function Di(t,e,r,n){r===void 0&&(r=[]);var i=typeof e=="function"?rn(e):[e,r,n],o=i[0],s=i[1],f=i[2],c;if(Ci(t))c=function(){return Ut(t())};else{var u=Ut(t);c=function(){return u}}function p(h,v){h===void 0&&(h=c());var y=it([o[v.type]],s.filter(function(b){var m=b.matcher;return m(v)}).map(function(b){var m=b.reducer;return m}));return y.filter(function(b){return!!b}).length===0&&(y=[f]),y.reduce(function(b,m){if(m)if(ae(b)){var x=b,A=m(x,v);return A===void 0?b:A}else{if(te(b))return Jr(b,function(P){return m(P,v)});var A=m(b,v);if(A===void 0){if(b===null)return b;throw Error("A case reducer on a non-draftable value must not return undefined")}return A}return b},h)}return p.getInitialState=c,p}function Ti(t,e){return t+"/"+e}function Ii(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof t.initialState=="function"?t.initialState:Ut(t.initialState),n=t.reducers||{},i=Object.keys(n),o={},s={},f={};i.forEach(function(p){var h=n[p],v=Ti(e,p),y,b;"reducer"in h?(y=h.reducer,b=h.prepare):y=h,o[p]=y,s[v]=y,f[p]=b?oe(v,b):oe(v)});function c(){var p=typeof t.extraReducers=="function"?rn(t.extraReducers):[t.extraReducers],h=p[0],v=h===void 0?{}:h,y=p[1],b=y===void 0?[]:y,m=p[2],x=m===void 0?void 0:m,A=ie(ie({},v),s);return Di(r,function(P){for(var E in A)P.addCase(E,A[E]);for(var R=0,M=b;R<M.length;R++){var le=M[R];P.addMatcher(le.matcher,le.reducer)}x&&P.addDefaultCase(x)})}var u;return{name:e,reducer:function(p,h){return u||(u=c()),u(p,h)},actions:f,caseReducers:o,getInitialState:function(){return u||(u=c()),u.getInitialState()}}}var Ni="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Ri=function(t){t===void 0&&(t=21);for(var e="",r=t;r--;)e+=Ni[Math.random()*64|0];return e},Mi=["name","message","stack","code"],Ct=function(){function t(e,r){this.payload=e,this.meta=r}return t}(),Ir=function(){function t(e,r){this.payload=e,this.meta=r}return t}(),ki=function(t){if(typeof t=="object"&&t!==null){for(var e={},r=0,n=Mi;r<n.length;r++){var i=n[r];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,r,n){var i=oe(e+"/fulfilled",function(u,p,h,v){return{payload:u,meta:jt(ie({},v||{}),{arg:h,requestId:p,requestStatus:"fulfilled"})}}),o=oe(e+"/pending",function(u,p,h){return{payload:void 0,meta:jt(ie({},h||{}),{arg:p,requestId:u,requestStatus:"pending"})}}),s=oe(e+"/rejected",function(u,p,h,v,y){return{payload:v,error:(n&&n.serializeError||ki)(u||"Rejected"),meta:jt(ie({},y||{}),{arg:h,requestId:p,rejectedWithValue:!!v,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),f=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function c(u){return function(p,h,v){var y=n!=null&&n.idGenerator?n.idGenerator(u):Ri(),b=new f,m;function x(P){m=P,b.abort()}var A=function(){return wi(this,null,function(){var P,E,R,M,le,ce,Ce;return vi(this,function(X){switch(X.label){case 0:return X.trys.push([0,4,,5]),M=(P=n==null?void 0:n.condition)==null?void 0:P.call(n,u,{getState:h,extra:v}),Ui(M)?[4,M]:[3,2];case 1:M=X.sent(),X.label=2;case 2:if(M===!1||b.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return le=new Promise(function(I,fe){return b.signal.addEventListener("abort",function(){return fe({name:"AbortError",message:m||"Aborted"})})}),p(o(y,u,(E=n==null?void 0:n.getPendingMeta)==null?void 0:E.call(n,{requestId:y,arg:u},{getState:h,extra:v}))),[4,Promise.race([le,Promise.resolve(r(u,{dispatch:p,getState:h,extra:v,requestId:y,signal:b.signal,abort:x,rejectWithValue:function(I,fe){return new Ct(I,fe)},fulfillWithValue:function(I,fe){return new Ir(I,fe)}})).then(function(I){if(I instanceof Ct)throw I;return I instanceof Ir?i(I.payload,y,u,I.meta):i(I,y,u)})])];case 3:return R=X.sent(),[3,5];case 4:return ce=X.sent(),R=ce instanceof Ct?s(null,y,u,ce.payload,ce.meta):s(ce,y,u),[3,5];case 5:return Ce=n&&!n.dispatchConditionRejection&&s.match(R)&&R.meta.condition,Ce||p(R),[2,R]}})})}();return Object.assign(A,{abort:x,requestId:y,arg:u,unwrap:function(){return A.then(zi)}})}}return Object.assign(c,{pending:o,rejected:s,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function zi(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function Ui(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Jt="listenerMiddleware";oe(Jt+"/add");oe(Jt+"/removeAll");oe(Jt+"/remove");var Nr;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);ri();let Li=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,r)=>(r&=63,r<36?e+=r.toString(36):r<62?e+=(r-26).toString(36).toUpperCase():r>62?e+="-":e+="_",e),"");const Rr=({appName:t,content:e})=>({id:Li(),appName:t,content:e,isOpen:!0,maximize:!1,minimize:!1,isFocused:!1,isDragging:!1}),Hi={introduction:Rr({appName:"introduction",content:C``}),techStack:Rr({appName:"techStack",content:C``})},Mr=Object.values(Hi),nn=Ii({name:"executionContext",initialState:Mr,reducers:{focusById:(t,e)=>t.map(r=>r.id!==e.payload||r.minimize?{...r,isFocused:!1}:{...r,isFocused:!0}),stopFocusing:t=>t.map(e=>({...e,isFocused:!1})),openAppById:(t,e)=>t.map(r=>r.id!==e.payload?r:Mr.filter(n=>n.id===e.payload)[0]),closeAppById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,isOpen:!1}),minimizeAppById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,minimize:!0,maximize:!1}),togglieMaiximizeById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,maximize:!r.maximize,minimize:!1}),startDraggingById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,isDragging:!0}),stopDraggingAll:t=>t.map(e=>({...e,isDragging:!1}))}}),{closeAppById:Bi,focusById:Lt,togglieMaiximizeById:on,minimizeAppById:Fi,openAppById:Wi,startDraggingById:qi,stopDraggingAll:Vi,stopFocusing:Ki}=nn.actions,Xi=nn.reducer;var Re=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gi(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ot={},Yi={get exports(){return ot},set exports(t){ot=t}};(function(t,e){(function(r,n){n(e)})(Re,function(r){function n(a,d){a.super_=d,a.prototype=Object.create(d.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})}function i(a,d){Object.defineProperty(this,"kind",{value:a,enumerable:!0}),d&&d.length&&Object.defineProperty(this,"path",{value:d,enumerable:!0})}function o(a,d,l){o.super_.call(this,"E",a),Object.defineProperty(this,"lhs",{value:d,enumerable:!0}),Object.defineProperty(this,"rhs",{value:l,enumerable:!0})}function s(a,d){s.super_.call(this,"N",a),Object.defineProperty(this,"rhs",{value:d,enumerable:!0})}function f(a,d){f.super_.call(this,"D",a),Object.defineProperty(this,"lhs",{value:d,enumerable:!0})}function c(a,d,l){c.super_.call(this,"A",a),Object.defineProperty(this,"index",{value:d,enumerable:!0}),Object.defineProperty(this,"item",{value:l,enumerable:!0})}function u(a,d,l){var g=a.slice((l||d)+1||a.length);return a.length=d<0?a.length+d:d,a.push.apply(a,g),a}function p(a){var d=typeof a>"u"?"undefined":ye(a);return d!=="object"?d:a===Math?"math":a===null?"null":Array.isArray(a)?"array":Object.prototype.toString.call(a)==="[object Date]"?"date":typeof a.toString=="function"&&/^\/.*\//.test(a.toString())?"regexp":"object"}function h(a,d,l,g,$,w,_){$=$||[],_=_||[];var O=$.slice(0);if(typeof w<"u"){if(g){if(typeof g=="function"&&g(O,w))return;if((typeof g>"u"?"undefined":ye(g))==="object"){if(g.prefilter&&g.prefilter(O,w))return;if(g.normalize){var q=g.normalize(O,w,a,d);q&&(a=q[0],d=q[1])}}}O.push(w)}p(a)==="regexp"&&p(d)==="regexp"&&(a=a.toString(),d=d.toString());var G=typeof a>"u"?"undefined":ye(a),F=typeof d>"u"?"undefined":ye(d),L=G!=="undefined"||_&&_[_.length-1].lhs&&_[_.length-1].lhs.hasOwnProperty(w),Y=F!=="undefined"||_&&_[_.length-1].rhs&&_[_.length-1].rhs.hasOwnProperty(w);if(!L&&Y)l(new s(O,d));else if(!Y&&L)l(new f(O,a));else if(p(a)!==p(d))l(new o(O,a,d));else if(p(a)==="date"&&a-d!==0)l(new o(O,a,d));else if(G==="object"&&a!==null&&d!==null)if(_.filter(function(T){return T.lhs===a}).length)a!==d&&l(new o(O,a,d));else{if(_.push({lhs:a,rhs:d}),Array.isArray(a)){var S;for(a.length,S=0;S<a.length;S++)S>=d.length?l(new c(O,S,new f(void 0,a[S]))):h(a[S],d[S],l,g,O,S,_);for(;S<d.length;)l(new c(O,S,new s(void 0,d[S++])))}else{var de=Object.keys(a),ee=Object.keys(d);de.forEach(function(T,me){var De=ee.indexOf(T);De>=0?(h(a[T],d[T],l,g,O,T,_),ee=u(ee,De)):h(a[T],void 0,l,g,O,T,_)}),ee.forEach(function(T){h(void 0,d[T],l,g,O,T,_)})}_.length=_.length-1}else a!==d&&(G==="number"&&isNaN(a)&&isNaN(d)||l(new o(O,a,d)))}function v(a,d,l,g){return g=g||[],h(a,d,function($){$&&g.push($)},l),g.length?g:void 0}function y(a,d,l){if(l.path&&l.path.length){var g,$=a[d],w=l.path.length-1;for(g=0;g<w;g++)$=$[l.path[g]];switch(l.kind){case"A":y($[l.path[g]],l.index,l.item);break;case"D":delete $[l.path[g]];break;case"E":case"N":$[l.path[g]]=l.rhs}}else switch(l.kind){case"A":y(a[d],l.index,l.item);break;case"D":a=u(a,d);break;case"E":case"N":a[d]=l.rhs}return a}function b(a,d,l){if(a&&d&&l&&l.kind){for(var g=a,$=-1,w=l.path?l.path.length-1:0;++$<w;)typeof g[l.path[$]]>"u"&&(g[l.path[$]]=typeof l.path[$]=="number"?[]:{}),g=g[l.path[$]];switch(l.kind){case"A":y(l.path?g[l.path[$]]:g,l.index,l.item);break;case"D":delete g[l.path[$]];break;case"E":case"N":g[l.path[$]]=l.rhs}}}function m(a,d,l){if(l.path&&l.path.length){var g,$=a[d],w=l.path.length-1;for(g=0;g<w;g++)$=$[l.path[g]];switch(l.kind){case"A":m($[l.path[g]],l.index,l.item);break;case"D":$[l.path[g]]=l.lhs;break;case"E":$[l.path[g]]=l.lhs;break;case"N":delete $[l.path[g]]}}else switch(l.kind){case"A":m(a[d],l.index,l.item);break;case"D":a[d]=l.lhs;break;case"E":a[d]=l.lhs;break;case"N":a=u(a,d)}return a}function x(a,d,l){if(a&&d&&l&&l.kind){var g,$,w=a;for($=l.path.length-1,g=0;g<$;g++)typeof w[l.path[g]]>"u"&&(w[l.path[g]]={}),w=w[l.path[g]];switch(l.kind){case"A":m(w[l.path[g]],l.index,l.item);break;case"D":w[l.path[g]]=l.lhs;break;case"E":w[l.path[g]]=l.lhs;break;case"N":delete w[l.path[g]]}}}function A(a,d,l){if(a&&d){var g=function($){l&&!l(a,d,$)||b(a,d,$)};h(a,d,g)}}function P(a){return"color: "+ir[a].color+"; font-weight: bold"}function E(a){var d=a.kind,l=a.path,g=a.lhs,$=a.rhs,w=a.index,_=a.item;switch(d){case"E":return[l.join("."),g,"→",$];case"N":return[l.join("."),$];case"D":return[l.join(".")];case"A":return[l.join(".")+"["+w+"]",_];default:return[]}}function R(a,d,l,g){var $=v(a,d);try{g?l.groupCollapsed("diff"):l.group("diff")}catch{l.log("diff")}$?$.forEach(function(w){var _=w.kind,O=E(w);l.log.apply(l,["%c "+ir[_].text,P(_)].concat(nr(O)))}):l.log("—— no diff ——");try{l.groupEnd()}catch{l.log("—— diff end —— ")}}function M(a,d,l,g){switch(typeof a>"u"?"undefined":ye(a)){case"object":return typeof a[g]=="function"?a[g].apply(a,nr(l)):a[g];case"function":return a(d);default:return a}}function le(a){var d=a.timestamp,l=a.duration;return function(g,$,w){var _=["action"];return _.push("%c"+String(g.type)),d&&_.push("%c@ "+$),l&&_.push("%c(in "+w.toFixed(2)+" ms)"),_.join(" ")}}function ce(a,d){var l=d.logger,g=d.actionTransformer,$=d.titleFormatter,w=$===void 0?le(d):$,_=d.collapsed,O=d.colors,q=d.level,G=d.diff,F=typeof d.titleFormatter>"u";a.forEach(function(L,Y){var S=L.started,de=L.startedTime,ee=L.action,T=L.prevState,me=L.error,De=L.took,he=L.nextState,ft=a[Y+1];ft&&(he=ft.prevState,De=ft.started-S);var J=g(ee),ar=typeof _=="function"?_(function(){return he},ee,L):_,un=an(de),ln=O.title?"color: "+O.title(J)+";":"",Te=["color: gray; font-weight: lighter;"];Te.push(ln),d.timestamp&&Te.push("color: gray; font-weight: lighter;"),d.duration&&Te.push("color: gray; font-weight: lighter;");var Ie=w(J,un,De);try{ar?O.title&&F?l.groupCollapsed.apply(l,["%c "+Ie].concat(Te)):l.groupCollapsed(Ie):O.title&&F?l.group.apply(l,["%c "+Ie].concat(Te)):l.group(Ie)}catch{l.log(Ie)}var dt=M(q,J,[T],"prevState"),ht=M(q,J,[J],"action"),pt=M(q,J,[me,T],"error"),vt=M(q,J,[he],"nextState");if(dt)if(O.prevState){var cn="color: "+O.prevState(T)+"; font-weight: bold";l[dt]("%c prev state",cn,T)}else l[dt]("prev state",T);if(ht)if(O.action){var fn="color: "+O.action(J)+"; font-weight: bold";l[ht]("%c action    ",fn,J)}else l[ht]("action    ",J);if(me&&pt)if(O.error){var dn="color: "+O.error(me,T)+"; font-weight: bold;";l[pt]("%c error     ",dn,me)}else l[pt]("error     ",me);if(vt)if(O.nextState){var hn="color: "+O.nextState(he)+"; font-weight: bold";l[vt]("%c next state",hn,he)}else l[vt]("next state",he);G&&R(T,he,l,ar);try{l.groupEnd()}catch{l.log("—— log end ——")}})}function Ce(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=Object.assign({},or,a),l=d.logger,g=d.stateTransformer,$=d.errorTransformer,w=d.predicate,_=d.logErrors,O=d.diffPredicate;if(typeof l>"u")return function(){return function(G){return function(F){return G(F)}}};if(a.getState&&a.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(G){return function(F){return G(F)}}};var q=[];return function(G){var F=G.getState;return function(L){return function(Y){if(typeof w=="function"&&!w(F,Y))return L(Y);var S={};q.push(S),S.started=rr.now(),S.startedTime=new Date,S.prevState=g(F()),S.action=Y;var de=void 0;if(_)try{de=L(Y)}catch(T){S.error=$(T)}else de=L(Y);S.took=rr.now()-S.started,S.nextState=g(F());var ee=d.diff&&typeof O=="function"?O(F,Y):d.diff;if(ce(q,Object.assign({},d,{diff:ee})),q.length=0,S.error)throw S.error;return de}}}}var X,I,fe=function(a,d){return new Array(d+1).join(a)},Xe=function(a,d){return fe("0",d-a.toString().length)+a},an=function(a){return Xe(a.getHours(),2)+":"+Xe(a.getMinutes(),2)+":"+Xe(a.getSeconds(),2)+"."+Xe(a.getMilliseconds(),3)},rr=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},nr=function(a){if(Array.isArray(a)){for(var d=0,l=Array(a.length);d<a.length;d++)l[d]=a[d];return l}return Array.from(a)},Ge=[];X=(typeof Re>"u"?"undefined":ye(Re))==="object"&&Re?Re:typeof window<"u"?window:{},I=X.DeepDiff,I&&Ge.push(function(){typeof I<"u"&&X.DeepDiff===v&&(X.DeepDiff=I,I=void 0)}),n(o,i),n(s,i),n(f,i),n(c,i),Object.defineProperties(v,{diff:{value:v,enumerable:!0},observableDiff:{value:h,enumerable:!0},applyDiff:{value:A,enumerable:!0},applyChange:{value:b,enumerable:!0},revertChange:{value:x,enumerable:!0},isConflict:{value:function(){return typeof I<"u"},enumerable:!0},noConflict:{value:function(){return Ge&&(Ge.forEach(function(a){a()}),Ge=null),v},enumerable:!0}});var ir={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},or={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(a){return a},actionTransformer:function(a){return a},errorTransformer:function(a){return a},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},sr=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=a.dispatch,l=a.getState;return typeof d=="function"||typeof l=="function"?Ce()({dispatch:d,getState:l}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};r.defaults=or,r.createLogger=Ce,r.logger=sr,r.default=sr,Object.defineProperty(r,"__esModule",{value:!0})})})(Yi,ot);const Zi=Gi(ot),H=ji({reducer:{executionContext:Xi},middleware:t=>t().concat(Zi)});var Ji=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,K=(t,e,r,n)=>{for(var i=n>1?void 0:n?Qi(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Ji(e,r,i),i};let B=class extends z{constructor(){super(...arguments),this.header="",this.maximize=!1,this.appId=null,this.isFocused=!1,this.isDragging=!1,this.posX=Math.random()*100+100,this.posY=Math.random()*100+100,this.shiftX=0,this.shiftY=0,this.width=Math.random()*300+_t,this.height=Math.random()*300+xt}_mousedownHeader(t){if(!this.appId||this.maximize)return;H.dispatch(qi(this.appId)),H.dispatch(Lt(this.appId));let e=t.clientX-this.getBoundingClientRect().left,r=t.clientY-this.getBoundingClientRect().top;const n=({pageX:o,pageY:s})=>{let f=o-e,c=s-r;f<0&&(f=0),c<0&&(c=0),this.posX=f,this.posY=c},i=o=>{this.isDragging&&n(o)};n(t),document.addEventListener("mousemove",i),this.onmouseup=function(){document.removeEventListener("mousemove",i),this.onmouseup=null}}_mouseDownOutline(t){if(!(t.target instanceof Element)||!t.target.matches(".outline"))return;const e=({pageX:n,pageY:i})=>{let o=n-this.posX,s=i-this.posY;this.width=o<_t?_t:o,this.height=s<xt?xt:s},r=n=>{e(n)};e(t),document.addEventListener("mousemove",r),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",r)})}_focus(){this.appId&&H.dispatch(Lt(this.appId))}_dbClick(){this.appId&&H.dispatch(on(this.appId))}render(){const t=C`
      <style>
        :host {
          z-index: ${this.isFocused?99:0};
          left: ${this.maximize?0:this.posX}px;
          top: ${this.maximize?0:this.posY}px;
        }
      </style>
    `,e={width:this.maximize?"100%":this.width+"px",height:this.maximize?"100%":this.height+"px"};return C`
      ${t}
      <div
        id="container"
        style=${Yn(e)}
        @click=${this._focus}
        @mousedown=${this._mouseDownOutline}
      >
        <pop-up-header
          .header=${this.header}
          .appId=${this.appId}
          @mousedown=${this._mousedownHeader}
          @dblclick=${this._dbClick}
        >
        </pop-up-header>
        <pop-up-body @click=${this._focus}>
          <slot></slot>
        </pop-up-body>

        <div id="top" class="outline"></div>
        <div id="right" class="outline"></div>
        <div id="bottom" class="outline"></div>
        <div id="left" class="outline"></div>
      </div>
    `}};B.styles=[Ke,Vn,Kn,Xn,Gn];K([D()],B.prototype,"header",2);K([D()],B.prototype,"maximize",2);K([D()],B.prototype,"appId",2);K([D()],B.prototype,"isFocused",2);K([D()],B.prototype,"isDragging",2);K([ue()],B.prototype,"posX",2);K([ue()],B.prototype,"posY",2);K([ue()],B.prototype,"shiftX",2);K([ue()],B.prototype,"shiftY",2);K([ue()],B.prototype,"width",2);K([ue()],B.prototype,"height",2);B=K([V("pop-up")],B);const Dt={MINIMIZE:"/icon-minimize.png",MAXIMIZE:"/icon-maximize.png",CANCEL:"/icon-cancel.png"};var eo=Object.defineProperty,to=Object.getOwnPropertyDescriptor,Qt=(t,e,r,n)=>{for(var i=n>1?void 0:n?to(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&eo(e,r,i),i};let We=class extends z{constructor(){super(...arguments),this.header="",this.appId=null}_close(){this.appId&&H.dispatch(Bi(this.appId))}_minimize(){this.appId&&H.dispatch(Fi(this.appId))}_maximize(){this.appId&&H.dispatch(on(this.appId))}render(){return C`
      <flex-box>
        <flex-item id="header" .flex=${1}>
          <core-text .ellipsis=${!0} .text=${this.header}></core-text>
        </flex-item>
        <flex-item .flex=${1}>
          <flex-box .justifyContent=${"flex-end"}>
            <flex-item @click=${this._minimize}>
              <core-button .src=${Dt.MINIMIZE}></core-button>
            </flex-item>
            <flex-item @click=${this._maximize}>
              <core-button .src=${Dt.MAXIMIZE}></core-button>
            </flex-item>
            <flex-item @click=${this._close}>
              <core-button .src=${Dt.CANCEL}></core-button>
            </flex-item>
          </flex-box>
        </flex-item>
      </flex-box>
    `}};We.styles=U`
    :host {
      box-sizing: border-box;
      width: 100%;
      display: block;
      background-color: var(--main-blue);
      font-family: "Press Start 2P", cursive;
      color: white;
      padding: 0.5rem;
      user-select: none;
    }
    :host(:active) {
      cursor: grabbing;
    }
    #header {
      overflow: hidden;
    }
  `;Qt([D()],We.prototype,"header",2);Qt([D()],We.prototype,"appId",2);We=Qt([V("pop-up-header")],We);var ro=Object.defineProperty,no=Object.getOwnPropertyDescriptor,io=(t,e,r,n)=>{for(var i=n>1?void 0:n?no(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&ro(e,r,i),i};const oo="/icon-window.png";let Ht=class extends z{render(){return C`
      <core-button .text=${"Start"} .src=${oo}></core-button>
    `}};Ht.styles=U`
    :host {
      height: 100%;
      font-family: "Press Start 2P", cursive;
      font-size: 0.5rem;
      letter-spacing: -1px;
      user-select: none;
      cursor: pointer;
    }
  `;Ht=io([V("start-button")],Ht);var so=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,er=(t,e,r,n)=>{for(var i=n>1?void 0:n?ao(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&so(e,r,i),i};let qe=class extends z{constructor(){super(...arguments),this.name="Default",this.isFocused=!1}render(){return C`
      <core-button
        class=${this.isFocused?"active":""}
        .text=${this.name}
      ></core-button>
    `}};qe.styles=U`
    :host {
      height: 100%;
      cursor: pointer;
      user-select: none;
    }
  `;er([D()],qe.prototype,"name",2);er([D()],qe.prototype,"isFocused",2);qe=er([V("task-button")],qe);var uo=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,sn=(t,e,r,n)=>{for(var i=n>1?void 0:n?lo(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&uo(e,r,i),i};let st=class extends z{constructor(){super(...arguments),this.apps=[]}createClickHandler({id:t,minimize:e}){return()=>{e&&H.dispatch(Wi(t)),H.dispatch(Lt(t))}}taskButtonsTemplate(){return this.apps.map(t=>C`
        <flex-item @click=${this.createClickHandler(t)}>
          <task-button
            .name=${t.appName}
            .isFocused=${t.isFocused}
          ></task-button>
        </flex-item>
      `)}render(){return C`
      <flex-box .justifyContent=${"flex-start"} .alignItems=${"flex-start"}>
        <flex-item>
          <start-button></start-button>
        </flex-item>
        <flex-item .flex=${1}>
          <flex-box .justifyContent=${"flex-start"}>
            ${this.taskButtonsTemplate()}
          </flex-box>
        </flex-item>
      </flex-box>
    `}};st.styles=U`
    :host {
      box-sizing: border-box;
      position: absolute;
      bottom: 0px;
      width: 100vw;
      height: ${Kr}px;
      background-color: var(--main-gray);
      border-top: 1px solid white;
      outline: 1px solid var(--main-gray);
      overflow: visible;
      flex-wrap: wrap;
      z-index: 99;
    }
  `;sn([D()],st.prototype,"apps",2);st=sn([V("task-bar")],st);class co extends z{connectedCallback(){super.connectedCallback(),this._unsubscribe=H.subscribe(()=>this._setState(H.getState())),this._setState(H.getState())}disconnectedCallback(){this._unsubscribe(),super.disconnectedCallback()}}var fo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,tr=(t,e,r,n)=>{for(var i=n>1?void 0:n?ho(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&fo(e,r,i),i};let Ve=class extends co{constructor(){super(...arguments),this.executionContext=[],this.isDragging=!1}_setState(t){this.executionContext=t.executionContext}popupTemplate(){return this.executionContext.filter(e=>e.isOpen).map(({appName:e,id:r,isFocused:n,minimize:i,maximize:o,isDragging:s})=>C`
          <pop-up
            .header=${e}
            .appId=${r}
            .maximize=${o}
            .isFocused=${n}
            .isDragging=${s}
            class=${Vr({maximize:o,minimize:i})}
          ></pop-up>
        `)}_click(t){t.target instanceof Element&&t.target.matches("#background")&&H.dispatch(Ki()),H.dispatch(Vi())}render(){return C`
      <div id="background" @click=${this._click}>
        <div>${this.popupTemplate()}</div>
        <task-bar .apps=${this.executionContext}></task-bar>
      </div>
    `}};Ve.styles=U`
    #background {
      width: 100vw;
      height: 100vh;
    }
  `;tr([ue()],Ve.prototype,"executionContext",2);tr([ue()],Ve.prototype,"isDragging",2);Ve=tr([V("home-page")],Ve);
