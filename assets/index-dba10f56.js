(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=window,Yt=Qe.ShadowRoot&&(Qe.ShadyCSS===void 0||Qe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kt=Symbol(),pr=new WeakMap;let Br=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Yt&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=pr.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&pr.set(r,e))}return e}toString(){return this.cssText}};const Pn=t=>new Br(typeof t=="string"?t:t+"",void 0,Kt),N=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new Br(r,t,Kt)},En=(t,e)=>{Yt?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),i=Qe.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)})},vr=Yt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return Pn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t;const et=window,gr=et.trustedTypes,Sn=gr?gr.emptyScript:"",mr=et.reactiveElementPolyfillSupport,kt={toAttribute(t,e){switch(e){case Boolean:t=t?Sn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Fr=(t,e)=>e!==t&&(e==e||t==t),xt={attribute:!0,type:String,converter:kt,reflect:!1,hasChanged:Fr};let we=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,r=xt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(i){const o=this[e];this[r]=i,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||xt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(vr(i))}else e!==void 0&&r.push(vr(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return En(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=xt){var i;const o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:kt).toAttribute(r,n.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,r){var n;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const s=i.getPropertyOptions(o),f=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:kt;this._$El=o,this[o]=f.fromAttribute(r,s.type),this._$El=null}}requestUpdate(e,r,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Fr)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};we.finalized=!0,we.elementProperties=new Map,we.elementStyles=[],we.shadowRootOptions={mode:"open"},mr==null||mr({ReactiveElement:we}),((_t=et.reactiveElementVersions)!==null&&_t!==void 0?_t:et.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ot;const tt=window,Ae=tt.trustedTypes,yr=Ae?Ae.createPolicy("lit-html",{createHTML:t=>t}):void 0,ne=`lit$${(Math.random()+"").slice(9)}$`,Wr="?"+ne,Cn=`<${Wr}>`,Pe=document,Le=(t="")=>Pe.createComment(t),He=t=>t===null||typeof t!="object"&&typeof t!="function",Vr=Array.isArray,jn=t=>Vr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,br=/-->/g,$r=/>/g,ve=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wr=/'/g,_r=/"/g,Xr=/^(?:script|style|textarea|title)$/i,Dn=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),E=Dn(1),ae=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),xr=new WeakMap,_e=Pe.createTreeWalker(Pe,129,null,!1),Tn=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":"",s=ze;for(let c=0;c<r;c++){const l=t[c];let p,h,v=-1,m=0;for(;m<l.length&&(s.lastIndex=m,h=s.exec(l),h!==null);)m=s.lastIndex,s===ze?h[1]==="!--"?s=br:h[1]!==void 0?s=$r:h[2]!==void 0?(Xr.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=ve):h[3]!==void 0&&(s=ve):s===ve?h[0]===">"?(s=i??ze,v=-1):h[1]===void 0?v=-2:(v=s.lastIndex-h[2].length,p=h[1],s=h[3]===void 0?ve:h[3]==='"'?_r:wr):s===_r||s===wr?s=ve:s===br||s===$r?s=ze:(s=ve,i=void 0);const b=s===ve&&t[c+1].startsWith("/>")?" ":"";o+=s===ze?l+Cn:v>=0?(n.push(p),l.slice(0,v)+"$lit$"+l.slice(v)+ne+b):l+ne+(v===-2?(n.push(void 0),c):b)}const f=o+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[yr!==void 0?yr.createHTML(f):f,n]};class Be{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const f=e.length-1,c=this.parts,[l,p]=Tn(e,r);if(this.el=Be.createElement(l,n),_e.currentNode=this.el.content,r===2){const h=this.el.content,v=h.firstChild;v.remove(),h.append(...v.childNodes)}for(;(i=_e.nextNode())!==null&&c.length<f;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const v of i.getAttributeNames())if(v.endsWith("$lit$")||v.startsWith(ne)){const m=p[s++];if(h.push(v),m!==void 0){const b=i.getAttribute(m.toLowerCase()+"$lit$").split(ne),y=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:y[2],strings:b,ctor:y[1]==="."?Nn:y[1]==="?"?Rn:y[1]==="@"?zn:dt})}else c.push({type:6,index:o})}for(const v of h)i.removeAttribute(v)}if(Xr.test(i.tagName)){const h=i.textContent.split(ne),v=h.length-1;if(v>0){i.textContent=Ae?Ae.emptyScript:"";for(let m=0;m<v;m++)i.append(h[m],Le()),_e.nextNode(),c.push({type:2,index:++o});i.append(h[v],Le())}}}else if(i.nodeType===8)if(i.data===Wr)c.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(ne,h+1))!==-1;)c.push({type:7,index:o}),h+=ne.length-1}o++}}static createElement(e,r){const n=Pe.createElement("template");return n.innerHTML=e,n}}function Ee(t,e,r=t,n){var i,o,s,f;if(e===ae)return e;let c=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl;const l=He(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((o=c==null?void 0:c._$AO)===null||o===void 0||o.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,r,n)),n!==void 0?((s=(f=r)._$Co)!==null&&s!==void 0?s:f._$Co=[])[n]=c:r._$Cl=c),c!==void 0&&(e=Ee(t,c._$AS(t,e.values),c,n)),e}class Mn{constructor(e,r){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var r;const{el:{content:n},parts:i}=this._$AD,o=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:Pe).importNode(n,!0);_e.currentNode=o;let s=_e.nextNode(),f=0,c=0,l=i[0];for(;l!==void 0;){if(f===l.index){let p;l.type===2?p=new Gt(s,s.nextSibling,this,e):l.type===1?p=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(p=new kn(s,this,e)),this.u.push(p),l=i[++c]}f!==(l==null?void 0:l.index)&&(s=_e.nextNode(),f++)}return o}p(e){let r=0;for(const n of this.u)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}let Gt=class qr{constructor(e,r,n,i){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ee(this,e,r),He(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==ae&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jn(e)?this.k(e):this.g(e)}O(e,r=this._$AB){return this._$AA.parentNode.insertBefore(e,r)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==R&&He(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pe.createTextNode(e)),this._$AH=e}$(e){var r;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Be.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new Mn(o,this),f=s.v(this.options);s.p(n),this.T(f),this._$AH=s}}_$AC(e){let r=xr.get(e.strings);return r===void 0&&xr.set(e.strings,r=new Be(e)),r}k(e){Vr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new qr(this.O(Le()),this.O(Le()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cm=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}},dt=class{constructor(e,r,n,i,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Ee(this,e,r,0),s=!He(e)||e!==this._$AH&&e!==ae,s&&(this._$AH=e);else{const f=e;let c,l;for(e=o[0],c=0;c<o.length-1;c++)l=Ee(this,f[n+c],r,c),l===ae&&(l=this._$AH[c]),s||(s=!He(l)||l!==this._$AH[c]),l===R?e=R:e!==R&&(e+=(l??"")+o[c+1]),this._$AH[c]=l}s&&!i&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Nn=class extends dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}};const In=Ae?Ae.emptyScript:"";let Rn=class extends dt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==R?this.element.setAttribute(this.name,In):this.element.removeAttribute(this.name)}},zn=class extends dt{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){var n;if((e=(n=Ee(this,e,r,0))!==null&&n!==void 0?n:R)===ae)return;const i=this._$AH,o=e===R&&i!==R||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==R&&(i===R||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},kn=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}};const Or=tt.litHtmlPolyfillSupport;Or==null||Or(Be,Gt),((Ot=tt.litHtmlVersions)!==null&&Ot!==void 0?Ot:tt.litHtmlVersions=[]).push("2.6.1");const Un=(t,e,r)=>{var n,i;const o=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let s=o._$litPart$;if(s===void 0){const f=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new Gt(e.insertBefore(Le(),f),f,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var At,Pt;let z=class extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Un(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ae}};z.finalized=!0,z._$litElement$=!0,(At=globalThis.litElementHydrateSupport)===null||At===void 0||At.call(globalThis,{LitElement:z});const Ar=globalThis.litElementPolyfillSupport;Ar==null||Ar({LitElement:z});((Pt=globalThis.litElementVersions)!==null&&Pt!==void 0?Pt:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=t=>e=>typeof e=="function"?((r,n)=>(customElements.define(r,n),n))(t,e):((r,n)=>{const{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(s){customElements.define(r,s)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ln=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function D(t){return(e,r)=>r!==void 0?((n,i,o)=>{i.constructor.createProperty(o,n)})(t,e,r):Ln(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(t){return D({...t,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Et;((Et=window.HTMLSlotElement)===null||Et===void 0?void 0:Et.prototype.assignedElements)!=null;const Ke=N`
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
`;var Hn=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,Fn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Bn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Hn(e,r,i),i};let Ut=class extends z{render(){return E`<slot></slot>`}};Ut.styles=Ke;Ut=Fn([B("core-base")],Ut);const Wn=N`
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
`,Vn=N`
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
`;var Xn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,ht=(t,e,r,n)=>{for(var i=n>1?void 0:n?qn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Xn(e,r,i),i};let Se=class extends z{TextTemplate(){return this.text?E`
      <flex-item .flex=${1}>
        <div>${this.text}</div>
      </flex-item>
    `:E``}ImgTemplate(){return this.src?E`
      <flex-item .flex=${1}>
        <flex-box id="img-wrapper">
          <img id="img" src=${this.src} draggable="false" />
        </flex-box>
      </flex-item>
    `:E``}render(){return E`
      <flex-box .gap=${4}>${this.ImgTemplate()}${this.TextTemplate()}</flex-box>
    `}};Se.styles=[Ke,Wn,Vn];ht([D()],Se.prototype,"src",2);ht([D()],Se.prototype,"text",2);ht([D()],Se.prototype,"isFocused",2);Se=ht([B("core-button")],Se);var Yn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,pt=(t,e,r,n)=>{for(var i=n>1?void 0:n?Kn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Yn(e,r,i),i};let Ce=class extends z{render(){const t=E`
      <style>
        :host {
          gap: ${this.gap||0}px;
          justify-content: ${this.justifyContent||"center"};
          align-items: ${this.alignItems||"center"};
        }
      </style>
    `;return E`
      ${t}
      <slot></slot>
    `}};Ce.styles=[Ke,N`
      :host {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
      }
    `];pt([D()],Ce.prototype,"gap",2);pt([D()],Ce.prototype,"justifyContent",2);pt([D()],Ce.prototype,"alignItems",2);Ce=pt([B("flex-box")],Ce);var Gn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,vt=(t,e,r,n)=>{for(var i=n>1?void 0:n?Zn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Gn(e,r,i),i};let je=class extends z{constructor(){super(...arguments),this.flex=0,this.flexShrink=0,this.flexGrow=0}render(){const t=E`
      <style>
        :host {
          flex: ${this.flex};
          flex-grow: ${this.flexGrow||"none"};
          flex-shrink: ${this.flexShrink||"1"};
        }
      </style>
    `;return E`
      ${t}
      <slot></slot>
    `}};je.styles=N`
    :host {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      align-items: center;
      display: flex;
    }
  `;vt([D()],je.prototype,"flex",2);vt([D()],je.prototype,"flexShrink",2);vt([D()],je.prototype,"flexGrow",2);je=vt([B("flex-item")],je);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Kr=t=>(...e)=>({_$litDirective$:t,values:e});let Gr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zr=Kr(class extends Gr{constructor(t){var e;if(super(t),t.type!==Yr.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(e)}const i=t.element.classList;this.nt.forEach(o=>{o in e||(i.remove(o),this.nt.delete(o))});for(const o in e){const s=!!e[o];s===this.nt.has(o)||!((n=this.st)===null||n===void 0)&&n.has(o)||(s?(i.add(o),this.nt.add(o)):(i.remove(o),this.nt.delete(o)))}return ae}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=Kr(class extends Gr{constructor(t){var e;if(super(t),t.type!==Yr.ATTRIBUTE||t.name!=="style"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:r}=t.element;if(this.vt===void 0){this.vt=new Set;for(const n in e)this.vt.add(n);return this.render(e)}this.vt.forEach(n=>{e[n]==null&&(this.vt.delete(n),n.includes("-")?r.removeProperty(n):r[n]="")});for(const n in e){const i=e[n];i!=null&&(this.vt.add(n),n.includes("-")?r.setProperty(n,i):r[n]=i)}return ae}});var Jn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,Ge=(t,e,r,n)=>{for(var i=n>1?void 0:n?Qn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Jn(e,r,i),i};let me=class extends z{constructor(){super(...arguments),this.text="",this.ellipsis=!1}render(){const t={fontSize:`${this.fontSize}px`,fontWeight:`${this.fontWeight}`};return E`<div
      class=${Zr({ellipsis:this.ellipsis})}
      style=${Jr(t)}
    >
      ${this.text}
    </div>`}};me.styles=[Ke,N`
      :host {
        width: 100%;
        height: 100%;
      }
      .ellipsis {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    `];Ge([D()],me.prototype,"text",2);Ge([D()],me.prototype,"ellipsis",2);Ge([D()],me.prototype,"fontSize",2);Ge([D()],me.prototype,"fontWeight",2);me=Ge([B("core-text")],me);var ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,ri=(t,e,r,n)=>{for(var i=n>1?void 0:n?ti(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&ei(e,r,i),i};let Lt=class extends z{render(){return E`<div id="container"><slot></slot></div> `}};Lt.styles=N`
    :host {
      width: 100%;
      height: 100%;
      overflow: hidden;
      font-family: "리디바탕", "ridi-batang";
    }
    #container {
      padding: 1rem;
    }
  `;Lt=ri([B("pop-up-body")],Lt);const St=150,Ct=100,Zt=32,ni=N`
  :host {
    position: absolute;
    background-color: var(--main-gray);
    transition: all 0.2s linear;
    overflow: hidden;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
  }
  #container {
    box-sizing: border-box;
    padding: 0.25rem;
    border: 1px outset white;
  }
`,ii=N`
  :host(.minimize) {
    transform: translateY(100vh) scale(0);
    transition: 0.2s linear;
  }
`,oi=N`
  :host(.maximize) {
    width: 100%;
    height: calc(100% - ${Zt}px);
    transition: all 0.2s linear;
  }
`,si=N`
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
    z-index: 1;
  }
  #left {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: white;
    cursor: ew-resize;
  }
`;function G(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function le(t){return!!t&&!!t[j]}function re(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===vi}(t)||Array.isArray(t)||!!t[Tr]||!!(!((e=t.constructor)===null||e===void 0)&&e[Tr])||Jt(t)||Qt(t))}function ye(t,e,r){r===void 0&&(r=!1),Te(t)===0?(r?Object.keys:Oe)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function Te(t){var e=t[j];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Jt(t)?2:Qt(t)?3:0}function xe(t,e){return Te(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function ai(t,e){return Te(t)===2?t.get(e):t[e]}function Qr(t,e,r){var n=Te(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function en(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Jt(t){return hi&&t instanceof Map}function Qt(t){return pi&&t instanceof Set}function ge(t){return t.o||t.t}function er(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=rn(t);delete e[j];for(var r=Oe(e),n=0;n<r.length;n++){var i=r[n],o=e[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function tr(t,e){return e===void 0&&(e=!1),rr(t)||le(t)||!re(t)||(Te(t)>1&&(t.set=t.add=t.clear=t.delete=li),Object.freeze(t),e&&ye(t,function(r,n){return tr(n,!0)},!0)),t}function li(){G(2)}function rr(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function J(t){var e=Wt[t];return e||G(18,t),e}function ui(t,e){Wt[t]||(Wt[t]=e)}function Ht(){return Fe}function jt(t,e){e&&(J("Patches"),t.u=[],t.s=[],t.v=e)}function rt(t){Bt(t),t.p.forEach(ci),t.p=null}function Bt(t){t===Fe&&(Fe=t.l)}function Pr(t){return Fe={p:[],l:Fe,h:t,m:!0,_:0}}function ci(t){var e=t[j];e.i===0||e.i===1?e.j():e.O=!0}function Dt(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.g||J("ES5").S(e,t,n),n?(r[j].P&&(rt(e),G(4)),re(t)&&(t=nt(e,t),e.l||it(e,t)),e.u&&J("Patches").M(r[j].t,t,e.u,e.s)):t=nt(e,r,[]),rt(e),e.u&&e.v(e.u,e.s),t!==tn?t:void 0}function nt(t,e,r){if(rr(e))return e;var n=e[j];if(!n)return ye(e,function(f,c){return Er(t,n,e,f,c,r)},!0),e;if(n.A!==t)return e;if(!n.P)return it(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=er(n.k):n.o,o=i,s=!1;n.i===3&&(o=new Set(i),i.clear(),s=!0),ye(o,function(f,c){return Er(t,n,i,f,c,r,s)}),it(t,i,!1),r&&t.u&&J("Patches").N(n,r,t.u,t.s)}return n.o}function Er(t,e,r,n,i,o,s){if(le(i)){var f=nt(t,i,o&&e&&e.i!==3&&!xe(e.R,n)?o.concat(n):void 0);if(Qr(r,n,f),!le(f))return;t.m=!1}else s&&r.add(i);if(re(i)&&!rr(i)){if(!t.h.D&&t._<1)return;nt(t,i),e&&e.A.l||it(t,i)}}function it(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&tr(e,r)}function Tt(t,e){var r=t[j];return(r?ge(r):t)[e]}function Sr(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function ie(t){t.P||(t.P=!0,t.l&&ie(t.l))}function Mt(t){t.o||(t.o=er(t.t))}function Ft(t,e,r){var n=Jt(e)?J("MapSet").F(e,r):Qt(e)?J("MapSet").T(e,r):t.g?function(i,o){var s=Array.isArray(i),f={i:s?1:0,A:o?o.A:Ht(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},c=f,l=We;s&&(c=[f],l=Ue);var p=Proxy.revocable(c,l),h=p.revoke,v=p.proxy;return f.k=v,f.j=h,v}(e,r):J("ES5").J(e,r);return(r?r.A:Ht()).p.push(n),n}function fi(t){return le(t)||G(22,t),function e(r){if(!re(r))return r;var n,i=r[j],o=Te(r);if(i){if(!i.P&&(i.i<4||!J("ES5").K(i)))return i.t;i.I=!0,n=Cr(r,o),i.I=!1}else n=Cr(r,o);return ye(n,function(s,f){i&&ai(i.t,s)===f||Qr(n,s,e(f))}),o===3?new Set(n):n}(t)}function Cr(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return er(t)}function di(){function t(o,s){var f=i[o];return f?f.enumerable=s:i[o]=f={configurable:!0,enumerable:s,get:function(){var c=this[j];return We.get(c,o)},set:function(c){var l=this[j];We.set(l,o,c)}},f}function e(o){for(var s=o.length-1;s>=0;s--){var f=o[s][j];if(!f.P)switch(f.i){case 5:n(f)&&ie(f);break;case 4:r(f)&&ie(f)}}}function r(o){for(var s=o.t,f=o.k,c=Oe(f),l=c.length-1;l>=0;l--){var p=c[l];if(p!==j){var h=s[p];if(h===void 0&&!xe(s,p))return!0;var v=f[p],m=v&&v[j];if(m?m.t!==h:!en(v,h))return!0}}var b=!!s[j];return c.length!==Oe(s).length+(b?0:1)}function n(o){var s=o.k;if(s.length!==o.t.length)return!0;var f=Object.getOwnPropertyDescriptor(s,s.length-1);if(f&&!f.get)return!0;for(var c=0;c<s.length;c++)if(!s.hasOwnProperty(c))return!0;return!1}var i={};ui("ES5",{J:function(o,s){var f=Array.isArray(o),c=function(p,h){if(p){for(var v=Array(h.length),m=0;m<h.length;m++)Object.defineProperty(v,""+m,t(m,!0));return v}var b=rn(h);delete b[j];for(var y=Oe(b),x=0;x<y.length;x++){var O=y[x];b[O]=t(O,p||!!b[O].enumerable)}return Object.create(Object.getPrototypeOf(h),b)}(f,o),l={i:f?5:4,A:s?s.A:Ht(),P:!1,I:!1,R:{},l:s,t:o,k:c,o:null,O:!1,C:!1};return Object.defineProperty(c,j,{value:l,writable:!0}),c},S:function(o,s,f){f?le(s)&&s[j].A===o&&e(o.p):(o.u&&function c(l){if(l&&typeof l=="object"){var p=l[j];if(p){var h=p.t,v=p.k,m=p.R,b=p.i;if(b===4)ye(v,function(S){S!==j&&(h[S]!==void 0||xe(h,S)?m[S]||c(v[S]):(m[S]=!0,ie(p)))}),ye(h,function(S){v[S]!==void 0||xe(v,S)||(m[S]=!1,ie(p))});else if(b===5){if(n(p)&&(ie(p),m.length=!0),v.length<h.length)for(var y=v.length;y<h.length;y++)m[y]=!1;else for(var x=h.length;x<v.length;x++)m[x]=!0;for(var O=Math.min(v.length,h.length),P=0;P<O;P++)v.hasOwnProperty(P)||(m[P]=!0),m[P]===void 0&&c(v[P])}}}}(o.p[0]),e(o.p))},K:function(o){return o.i===4?r(o):n(o)}})}var jr,Fe,nr=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",hi=typeof Map<"u",pi=typeof Set<"u",Dr=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",tn=nr?Symbol.for("immer-nothing"):((jr={})["immer-nothing"]=!0,jr),Tr=nr?Symbol.for("immer-draftable"):"__$immer_draftable",j=nr?Symbol.for("immer-state"):"__$immer_state",vi=""+Object.prototype.constructor,Oe=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(t){var e={};return Oe(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},Wt={},We={get:function(t,e){if(e===j)return t;var r=ge(t);if(!xe(r,e))return function(i,o,s){var f,c=Sr(o,s);return c?"value"in c?c.value:(f=c.get)===null||f===void 0?void 0:f.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!re(n)?n:n===Tt(t.t,e)?(Mt(t),t.o[e]=Ft(t.A.h,n,t)):n},has:function(t,e){return e in ge(t)},ownKeys:function(t){return Reflect.ownKeys(ge(t))},set:function(t,e,r){var n=Sr(ge(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=Tt(ge(t),e),o=i==null?void 0:i[j];if(o&&o.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(en(r,i)&&(r!==void 0||xe(t.t,e)))return!0;Mt(t),ie(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return Tt(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Mt(t),ie(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=ge(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){G(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){G(12)}},Ue={};ye(We,function(t,e){Ue[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ue.deleteProperty=function(t,e){return Ue.set.call(this,t,e,void 0)},Ue.set=function(t,e,r){return We.set.call(this,t[0],e,r,t[0])};var gi=function(){function t(r){var n=this;this.g=Dr,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var f=o;o=i;var c=n;return function(y){var x=this;y===void 0&&(y=f);for(var O=arguments.length,P=Array(O>1?O-1:0),S=1;S<O;S++)P[S-1]=arguments[S];return c.produce(y,function(k){var U;return(U=o).call.apply(U,[x,k].concat(P))})}}var l;if(typeof o!="function"&&G(6),s!==void 0&&typeof s!="function"&&G(7),re(i)){var p=Pr(n),h=Ft(n,i,void 0),v=!0;try{l=o(h),v=!1}finally{v?rt(p):Bt(p)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(y){return jt(p,s),Dt(y,p)},function(y){throw rt(p),y}):(jt(p,s),Dt(l,p))}if(!i||typeof i!="object"){if((l=o(i))===void 0&&(l=i),l===tn&&(l=void 0),n.D&&tr(l,!0),s){var m=[],b=[];J("Patches").M(i,l,m,b),s(m,b)}return l}G(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(l){for(var p=arguments.length,h=Array(p>1?p-1:0),v=1;v<p;v++)h[v-1]=arguments[v];return n.produceWithPatches(l,function(m){return i.apply(void 0,[m].concat(h))})};var s,f,c=n.produce(i,o,function(l,p){s=l,f=p});return typeof Promise<"u"&&c instanceof Promise?c.then(function(l){return[l,s,f]}):[c,s,f]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){re(r)||G(8),le(r)&&(r=fi(r));var n=Pr(this),i=Ft(this,r,void 0);return i[j].C=!0,Bt(n),i},e.finishDraft=function(r,n){var i=r&&r[j],o=i.A;return jt(o,n),Dt(void 0,o)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!Dr&&G(20),this.g=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var o=n[i];if(o.path.length===0&&o.op==="replace"){r=o.value;break}}i>-1&&(n=n.slice(i+1));var s=J("Patches").$;return le(r)?s(r,n):this.produce(r,function(f){return s(f,n)})},t}(),W=new gi,nn=W.produce;W.produceWithPatches.bind(W);W.setAutoFreeze.bind(W);W.setUseProxies.bind(W);W.applyPatches.bind(W);W.createDraft.bind(W);W.finishDraft.bind(W);function Ve(t){return Ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ve(t)}function mi(t,e){if(Ve(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(Ve(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yi(t){var e=mi(t,"string");return Ve(e)==="symbol"?e:String(e)}function bi(t,e,r){return e=yi(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Mr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Nr(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Mr(Object(r),!0).forEach(function(n){bi(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Mr(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function L(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Ir=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Nt=function(){return Math.random().toString(36).substring(7).split("").join(".")},ot={INIT:"@@redux/INIT"+Nt(),REPLACE:"@@redux/REPLACE"+Nt(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Nt()}};function $i(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function on(t,e,r){var n;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(L(0));if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(L(1));return r(on)(t,e)}if(typeof t!="function")throw new Error(L(2));var i=t,o=e,s=[],f=s,c=!1;function l(){f===s&&(f=s.slice())}function p(){if(c)throw new Error(L(3));return o}function h(y){if(typeof y!="function")throw new Error(L(4));if(c)throw new Error(L(5));var x=!0;return l(),f.push(y),function(){if(x){if(c)throw new Error(L(6));x=!1,l();var P=f.indexOf(y);f.splice(P,1),s=null}}}function v(y){if(!$i(y))throw new Error(L(7));if(typeof y.type>"u")throw new Error(L(8));if(c)throw new Error(L(9));try{c=!0,o=i(o,y)}finally{c=!1}for(var x=s=f,O=0;O<x.length;O++){var P=x[O];P()}return y}function m(y){if(typeof y!="function")throw new Error(L(10));i=y,v({type:ot.REPLACE})}function b(){var y,x=h;return y={subscribe:function(P){if(typeof P!="object"||P===null)throw new Error(L(11));function S(){P.next&&P.next(p())}S();var k=x(S);return{unsubscribe:k}}},y[Ir]=function(){return this},y}return v({type:ot.INIT}),n={dispatch:v,subscribe:h,getState:p,replaceReducer:m},n[Ir]=b,n}function wi(t){Object.keys(t).forEach(function(e){var r=t[e],n=r(void 0,{type:ot.INIT});if(typeof n>"u")throw new Error(L(12));if(typeof r(void 0,{type:ot.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(L(13))})}function _i(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var i=e[n];typeof t[i]=="function"&&(r[i]=t[i])}var o=Object.keys(r),s;try{wi(r)}catch(f){s=f}return function(c,l){if(c===void 0&&(c={}),s)throw s;for(var p=!1,h={},v=0;v<o.length;v++){var m=o[v],b=r[m],y=c[m],x=b(y,l);if(typeof x>"u")throw l&&l.type,new Error(L(14));h[m]=x,p=p||x!==y}return p=p||o.length!==Object.keys(c).length,p?h:c}}function st(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(n){return n}:e.length===1?e[0]:e.reduce(function(n,i){return function(){return n(i.apply(void 0,arguments))}})}function xi(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(n){return function(){var i=n.apply(void 0,arguments),o=function(){throw new Error(L(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},f=e.map(function(c){return c(s)});return o=st.apply(void 0,f)(i.dispatch),Nr(Nr({},i),{},{dispatch:o})}}}function sn(t){var e=function(n){var i=n.dispatch,o=n.getState;return function(s){return function(f){return typeof f=="function"?f(i,o,t):s(f)}}};return e}var an=sn();an.withExtraArgument=sn;const Rr=an;var Oi=globalThis&&globalThis.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Ai=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(l){return function(p){return c([l,p])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(p){l=[6,p],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},at=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},Pi=Object.defineProperty,Ei=Object.defineProperties,Si=Object.getOwnPropertyDescriptors,zr=Object.getOwnPropertySymbols,Ci=Object.prototype.hasOwnProperty,ji=Object.prototype.propertyIsEnumerable,kr=function(t,e,r){return e in t?Pi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},oe=function(t,e){for(var r in e||(e={}))Ci.call(e,r)&&kr(t,r,e[r]);if(zr)for(var n=0,i=zr(e);n<i.length;n++){var r=i[n];ji.call(e,r)&&kr(t,r,e[r])}return t},It=function(t,e){return Ei(t,Si(e))},Di=function(t,e,r){return new Promise(function(n,i){var o=function(c){try{f(r.next(c))}catch(l){i(l)}},s=function(c){try{f(r.throw(c))}catch(l){i(l)}},f=function(c){return c.done?n(c.value):Promise.resolve(c.value).then(o,s)};f((r=r.apply(t,e)).next())})},Ti=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?st:st.apply(null,arguments)};function Mi(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var r=e;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return e===r}var Ni=function(t){Oi(e,t);function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=t.apply(this,r)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.prototype.concat.apply(this,r)},e.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(e.bind.apply(e,at([void 0],r[0].concat(this)))):new(e.bind.apply(e,at([void 0],r.concat(this))))},e}(Array);function Vt(t){return re(t)?nn(t,function(){}):t}function Ii(t){return typeof t=="boolean"}function Ri(){return function(e){return zi(e)}}function zi(t){t===void 0&&(t={});var e=t.thunk,r=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var n=new Ni;return r&&(Ii(r)?n.push(Rr):n.push(Rr.withExtraArgument(r.extraArgument))),n}var ki=!0;function Ui(t){var e=Ri(),r=t||{},n=r.reducer,i=n===void 0?void 0:n,o=r.middleware,s=o===void 0?e():o,f=r.devTools,c=f===void 0?!0:f,l=r.preloadedState,p=l===void 0?void 0:l,h=r.enhancers,v=h===void 0?void 0:h,m;if(typeof i=="function")m=i;else if(Mi(i))m=_i(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var b=s;typeof b=="function"&&(b=b(e));var y=xi.apply(void 0,b),x=st;c&&(x=Ti(oe({trace:!ki},typeof c=="object"&&c)));var O=[y];Array.isArray(v)?O=at([y],v):typeof v=="function"&&(O=v(O));var P=x.apply(void 0,O);return on(m,p,P)}function se(t,e){function r(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(e){var o=e.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return oe(oe({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:n[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(n){return n.type===t},r}function ln(t){var e={},r=[],n,i={addCase:function(o,s){var f=typeof o=="string"?o:o.type;if(f in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[f]=s,i},addMatcher:function(o,s){return r.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return n=o,i}};return t(i),[e,r,n]}function Li(t){return typeof t=="function"}function Hi(t,e,r,n){r===void 0&&(r=[]);var i=typeof e=="function"?ln(e):[e,r,n],o=i[0],s=i[1],f=i[2],c;if(Li(t))c=function(){return Vt(t())};else{var l=Vt(t);c=function(){return l}}function p(h,v){h===void 0&&(h=c());var m=at([o[v.type]],s.filter(function(b){var y=b.matcher;return y(v)}).map(function(b){var y=b.reducer;return y}));return m.filter(function(b){return!!b}).length===0&&(m=[f]),m.reduce(function(b,y){if(y)if(le(b)){var x=b,O=y(x,v);return O===void 0?b:O}else{if(re(b))return nn(b,function(P){return y(P,v)});var O=y(b,v);if(O===void 0){if(b===null)return b;throw Error("A case reducer on a non-draftable value must not return undefined")}return O}return b},h)}return p.getInitialState=c,p}function Bi(t,e){return t+"/"+e}function un(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof t.initialState=="function"?t.initialState:Vt(t.initialState),n=t.reducers||{},i=Object.keys(n),o={},s={},f={};i.forEach(function(p){var h=n[p],v=Bi(e,p),m,b;"reducer"in h?(m=h.reducer,b=h.prepare):m=h,o[p]=m,s[v]=m,f[p]=b?se(v,b):se(v)});function c(){var p=typeof t.extraReducers=="function"?ln(t.extraReducers):[t.extraReducers],h=p[0],v=h===void 0?{}:h,m=p[1],b=m===void 0?[]:m,y=p[2],x=y===void 0?void 0:y,O=oe(oe({},v),s);return Hi(r,function(P){for(var S in O)P.addCase(S,O[S]);for(var k=0,U=b;k<U.length;k++){var ce=U[k];P.addMatcher(ce.matcher,ce.reducer)}x&&P.addDefaultCase(x)})}var l;return{name:e,reducer:function(p,h){return l||(l=c()),l(p,h)},actions:f,caseReducers:o,getInitialState:function(){return l||(l=c()),l.getInitialState()}}}var Fi="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Wi=function(t){t===void 0&&(t=21);for(var e="",r=t;r--;)e+=Fi[Math.random()*64|0];return e},Vi=["name","message","stack","code"],Rt=function(){function t(e,r){this.payload=e,this.meta=r}return t}(),Ur=function(){function t(e,r){this.payload=e,this.meta=r}return t}(),Xi=function(t){if(typeof t=="object"&&t!==null){for(var e={},r=0,n=Vi;r<n.length;r++){var i=n[r];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,r,n){var i=se(e+"/fulfilled",function(l,p,h,v){return{payload:l,meta:It(oe({},v||{}),{arg:h,requestId:p,requestStatus:"fulfilled"})}}),o=se(e+"/pending",function(l,p,h){return{payload:void 0,meta:It(oe({},h||{}),{arg:p,requestId:l,requestStatus:"pending"})}}),s=se(e+"/rejected",function(l,p,h,v,m){return{payload:v,error:(n&&n.serializeError||Xi)(l||"Rejected"),meta:It(oe({},m||{}),{arg:h,requestId:p,rejectedWithValue:!!v,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),f=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function c(l){return function(p,h,v){var m=n!=null&&n.idGenerator?n.idGenerator(l):Wi(),b=new f,y;function x(P){y=P,b.abort()}var O=function(){return Di(this,null,function(){var P,S,k,U,ce,fe,Me;return Ai(this,function(q){switch(q.label){case 0:return q.trys.push([0,4,,5]),U=(P=n==null?void 0:n.condition)==null?void 0:P.call(n,l,{getState:h,extra:v}),Yi(U)?[4,U]:[3,2];case 1:U=q.sent(),q.label=2;case 2:if(U===!1||b.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return ce=new Promise(function(I,de){return b.signal.addEventListener("abort",function(){return de({name:"AbortError",message:y||"Aborted"})})}),p(o(m,l,(S=n==null?void 0:n.getPendingMeta)==null?void 0:S.call(n,{requestId:m,arg:l},{getState:h,extra:v}))),[4,Promise.race([ce,Promise.resolve(r(l,{dispatch:p,getState:h,extra:v,requestId:m,signal:b.signal,abort:x,rejectWithValue:function(I,de){return new Rt(I,de)},fulfillWithValue:function(I,de){return new Ur(I,de)}})).then(function(I){if(I instanceof Rt)throw I;return I instanceof Ur?i(I.payload,m,l,I.meta):i(I,m,l)})])];case 3:return k=q.sent(),[3,5];case 4:return fe=q.sent(),k=fe instanceof Rt?s(null,m,l,fe.payload,fe.meta):s(fe,m,l),[3,5];case 5:return Me=n&&!n.dispatchConditionRejection&&s.match(k)&&k.meta.condition,Me||p(k),[2,k]}})})}();return Object.assign(O,{abort:x,requestId:m,arg:l,unwrap:function(){return O.then(qi)}})}}return Object.assign(c,{pending:o,rejected:s,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function qi(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function Yi(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var ir="listenerMiddleware";se(ir+"/add");se(ir+"/removeAll");se(ir+"/remove");var Lr;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);di();let Ki=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,r)=>(r&=63,r<36?e+=r.toString(36):r<62?e+=(r-26).toString(36).toUpperCase():r>62?e+="-":e+="_",e),"");const zt=({appName:t,content:e})=>({id:Ki(),appName:t,content:e,isOpen:!0,maximize:!1,minimize:!1,isFocused:!1,isDragging:!1}),X={MINIMIZE:"/icon-minimize.png",MAXIMIZE:"/icon-maximize.png",CANCEL:"/icon-cancel.png",HTML5:"https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white",CSS3:"https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",TYPESCRIPT:"https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",JAVASCRIPT:"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",LIT:"https://img.shields.io/badge/lit-324FFF?style=for-the-badge&logo=lit&logoColor=white",REACT:"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",REDUX:"https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",NODE_JS:"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",STYLED_COMPONENT:"https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"},Gi=E` <div>
  <h2>안녕하세요</h2>
  <h3>류웅선입니다</h3>
  <p>프론트 엔드 개발자를 지망하고 있습니다</p>
</div>`,Zi=E` <div>
  <img src=${X.HTML5} />
  <img src=${X.CSS3} />
  <img src=${X.JAVASCRIPT} />
  <img src=${X.TYPESCRIPT} />
  <img src=${X.REACT} />
  <img src=${X.REDUX} />
  <img src=${X.STYLED_COMPONENT} />
  <img src=${X.LIT} />
  <img src=${X.NODE_JS} />
</div>`,Ji=E` <div>
  <h2>문의가 있는 경우 아래에 이슈를 남겨주세요</h2>
  <a href="https://github.com/unsnruu/unsnruu.github.io/issues"
    >깃허브 이슈로 바로가기</a
  >
</div>`,Qi={introduction:zt({appName:"introduction",content:Gi}),techStack:zt({appName:"techStack",content:Zi}),report:zt({appName:"report",content:Ji})},Hr=Object.values(Qi),cn=un({name:"executionContext",initialState:Hr,reducers:{focusById:(t,e)=>t.map(r=>r.id!==e.payload||r.minimize?{...r,isFocused:!1}:{...r,isFocused:!0}),stopFocusing:t=>t.map(e=>({...e,isFocused:!1})),openAppById:(t,e)=>t.map(r=>r.id!==e.payload?r:Hr.filter(n=>n.id===e.payload)[0]),closeAppById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,isOpen:!1}),minimizeAppById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,minimize:!0,maximize:!1}),togglieMaiximizeById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,maximize:!r.maximize,minimize:!1}),startDraggingById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,isDragging:!0}),stopDraggingAll:t=>t.map(e=>({...e,isDragging:!1}))}}),{closeAppById:eo,focusById:lt,togglieMaiximizeById:fn,minimizeAppById:to,openAppById:dn,startDraggingById:ro,stopDraggingAll:no,stopFocusing:io}=cn.actions,oo=cn.reducer,so={isOpen:!1},hn=un({name:"appMenu",initialState:so,reducers:{openMenu:t=>({...t,isOpen:!0}),closeMenu:t=>({...t,isOpen:!1})}}),{openMenu:ao,closeMenu:pn}=hn.actions,lo=hn.reducer;var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ut={},co={get exports(){return ut},set exports(t){ut=t}};(function(t,e){(function(r,n){n(e)})(ke,function(r){function n(a,d){a.super_=d,a.prototype=Object.create(d.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})}function i(a,d){Object.defineProperty(this,"kind",{value:a,enumerable:!0}),d&&d.length&&Object.defineProperty(this,"path",{value:d,enumerable:!0})}function o(a,d,u){o.super_.call(this,"E",a),Object.defineProperty(this,"lhs",{value:d,enumerable:!0}),Object.defineProperty(this,"rhs",{value:u,enumerable:!0})}function s(a,d){s.super_.call(this,"N",a),Object.defineProperty(this,"rhs",{value:d,enumerable:!0})}function f(a,d){f.super_.call(this,"D",a),Object.defineProperty(this,"lhs",{value:d,enumerable:!0})}function c(a,d,u){c.super_.call(this,"A",a),Object.defineProperty(this,"index",{value:d,enumerable:!0}),Object.defineProperty(this,"item",{value:u,enumerable:!0})}function l(a,d,u){var g=a.slice((u||d)+1||a.length);return a.length=d<0?a.length+d:d,a.push.apply(a,g),a}function p(a){var d=typeof a>"u"?"undefined":be(a);return d!=="object"?d:a===Math?"math":a===null?"null":Array.isArray(a)?"array":Object.prototype.toString.call(a)==="[object Date]"?"date":typeof a.toString=="function"&&/^\/.*\//.test(a.toString())?"regexp":"object"}function h(a,d,u,g,$,w,_){$=$||[],_=_||[];var A=$.slice(0);if(typeof w<"u"){if(g){if(typeof g=="function"&&g(A,w))return;if((typeof g>"u"?"undefined":be(g))==="object"){if(g.prefilter&&g.prefilter(A,w))return;if(g.normalize){var V=g.normalize(A,w,a,d);V&&(a=V[0],d=V[1])}}}A.push(w)}p(a)==="regexp"&&p(d)==="regexp"&&(a=a.toString(),d=d.toString());var Y=typeof a>"u"?"undefined":be(a),F=typeof d>"u"?"undefined":be(d),H=Y!=="undefined"||_&&_[_.length-1].lhs&&_[_.length-1].lhs.hasOwnProperty(w),K=F!=="undefined"||_&&_[_.length-1].rhs&&_[_.length-1].rhs.hasOwnProperty(w);if(!H&&K)u(new s(A,d));else if(!K&&H)u(new f(A,a));else if(p(a)!==p(d))u(new o(A,a,d));else if(p(a)==="date"&&a-d!==0)u(new o(A,a,d));else if(Y==="object"&&a!==null&&d!==null)if(_.filter(function(T){return T.lhs===a}).length)a!==d&&u(new o(A,a,d));else{if(_.push({lhs:a,rhs:d}),Array.isArray(a)){var C;for(a.length,C=0;C<a.length;C++)C>=d.length?u(new c(A,C,new f(void 0,a[C]))):h(a[C],d[C],u,g,A,C,_);for(;C<d.length;)u(new c(A,C,new s(void 0,d[C++])))}else{var he=Object.keys(a),te=Object.keys(d);he.forEach(function(T,$e){var Ne=te.indexOf(T);Ne>=0?(h(a[T],d[T],u,g,A,T,_),te=l(te,Ne)):h(a[T],void 0,u,g,A,T,_)}),te.forEach(function(T){h(void 0,d[T],u,g,A,T,_)})}_.length=_.length-1}else a!==d&&(Y==="number"&&isNaN(a)&&isNaN(d)||u(new o(A,a,d)))}function v(a,d,u,g){return g=g||[],h(a,d,function($){$&&g.push($)},u),g.length?g:void 0}function m(a,d,u){if(u.path&&u.path.length){var g,$=a[d],w=u.path.length-1;for(g=0;g<w;g++)$=$[u.path[g]];switch(u.kind){case"A":m($[u.path[g]],u.index,u.item);break;case"D":delete $[u.path[g]];break;case"E":case"N":$[u.path[g]]=u.rhs}}else switch(u.kind){case"A":m(a[d],u.index,u.item);break;case"D":a=l(a,d);break;case"E":case"N":a[d]=u.rhs}return a}function b(a,d,u){if(a&&d&&u&&u.kind){for(var g=a,$=-1,w=u.path?u.path.length-1:0;++$<w;)typeof g[u.path[$]]>"u"&&(g[u.path[$]]=typeof u.path[$]=="number"?[]:{}),g=g[u.path[$]];switch(u.kind){case"A":m(u.path?g[u.path[$]]:g,u.index,u.item);break;case"D":delete g[u.path[$]];break;case"E":case"N":g[u.path[$]]=u.rhs}}}function y(a,d,u){if(u.path&&u.path.length){var g,$=a[d],w=u.path.length-1;for(g=0;g<w;g++)$=$[u.path[g]];switch(u.kind){case"A":y($[u.path[g]],u.index,u.item);break;case"D":$[u.path[g]]=u.lhs;break;case"E":$[u.path[g]]=u.lhs;break;case"N":delete $[u.path[g]]}}else switch(u.kind){case"A":y(a[d],u.index,u.item);break;case"D":a[d]=u.lhs;break;case"E":a[d]=u.lhs;break;case"N":a=l(a,d)}return a}function x(a,d,u){if(a&&d&&u&&u.kind){var g,$,w=a;for($=u.path.length-1,g=0;g<$;g++)typeof w[u.path[g]]>"u"&&(w[u.path[g]]={}),w=w[u.path[g]];switch(u.kind){case"A":y(w[u.path[g]],u.index,u.item);break;case"D":w[u.path[g]]=u.lhs;break;case"E":w[u.path[g]]=u.lhs;break;case"N":delete w[u.path[g]]}}}function O(a,d,u){if(a&&d){var g=function($){u&&!u(a,d,$)||b(a,d,$)};h(a,d,g)}}function P(a){return"color: "+cr[a].color+"; font-weight: bold"}function S(a){var d=a.kind,u=a.path,g=a.lhs,$=a.rhs,w=a.index,_=a.item;switch(d){case"E":return[u.join("."),g,"→",$];case"N":return[u.join("."),$];case"D":return[u.join(".")];case"A":return[u.join(".")+"["+w+"]",_];default:return[]}}function k(a,d,u,g){var $=v(a,d);try{g?u.groupCollapsed("diff"):u.group("diff")}catch{u.log("diff")}$?$.forEach(function(w){var _=w.kind,A=S(w);u.log.apply(u,["%c "+cr[_].text,P(_)].concat(ur(A)))}):u.log("—— no diff ——");try{u.groupEnd()}catch{u.log("—— diff end —— ")}}function U(a,d,u,g){switch(typeof a>"u"?"undefined":be(a)){case"object":return typeof a[g]=="function"?a[g].apply(a,ur(u)):a[g];case"function":return a(d);default:return a}}function ce(a){var d=a.timestamp,u=a.duration;return function(g,$,w){var _=["action"];return _.push("%c"+String(g.type)),d&&_.push("%c@ "+$),u&&_.push("%c(in "+w.toFixed(2)+" ms)"),_.join(" ")}}function fe(a,d){var u=d.logger,g=d.actionTransformer,$=d.titleFormatter,w=$===void 0?ce(d):$,_=d.collapsed,A=d.colors,V=d.level,Y=d.diff,F=typeof d.titleFormatter>"u";a.forEach(function(H,K){var C=H.started,he=H.startedTime,te=H.action,T=H.prevState,$e=H.error,Ne=H.took,pe=H.nextState,mt=a[K+1];mt&&(pe=mt.prevState,Ne=mt.started-C);var Z=g(te),hr=typeof _=="function"?_(function(){return pe},te,H):_,bn=yn(he),$n=A.title?"color: "+A.title(Z)+";":"",Ie=["color: gray; font-weight: lighter;"];Ie.push($n),d.timestamp&&Ie.push("color: gray; font-weight: lighter;"),d.duration&&Ie.push("color: gray; font-weight: lighter;");var Re=w(Z,bn,Ne);try{hr?A.title&&F?u.groupCollapsed.apply(u,["%c "+Re].concat(Ie)):u.groupCollapsed(Re):A.title&&F?u.group.apply(u,["%c "+Re].concat(Ie)):u.group(Re)}catch{u.log(Re)}var yt=U(V,Z,[T],"prevState"),bt=U(V,Z,[Z],"action"),$t=U(V,Z,[$e,T],"error"),wt=U(V,Z,[pe],"nextState");if(yt)if(A.prevState){var wn="color: "+A.prevState(T)+"; font-weight: bold";u[yt]("%c prev state",wn,T)}else u[yt]("prev state",T);if(bt)if(A.action){var _n="color: "+A.action(Z)+"; font-weight: bold";u[bt]("%c action    ",_n,Z)}else u[bt]("action    ",Z);if($e&&$t)if(A.error){var xn="color: "+A.error($e,T)+"; font-weight: bold;";u[$t]("%c error     ",xn,$e)}else u[$t]("error     ",$e);if(wt)if(A.nextState){var On="color: "+A.nextState(pe)+"; font-weight: bold";u[wt]("%c next state",On,pe)}else u[wt]("next state",pe);Y&&k(T,pe,u,hr);try{u.groupEnd()}catch{u.log("—— log end ——")}})}function Me(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=Object.assign({},fr,a),u=d.logger,g=d.stateTransformer,$=d.errorTransformer,w=d.predicate,_=d.logErrors,A=d.diffPredicate;if(typeof u>"u")return function(){return function(Y){return function(F){return Y(F)}}};if(a.getState&&a.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(Y){return function(F){return Y(F)}}};var V=[];return function(Y){var F=Y.getState;return function(H){return function(K){if(typeof w=="function"&&!w(F,K))return H(K);var C={};V.push(C),C.started=lr.now(),C.startedTime=new Date,C.prevState=g(F()),C.action=K;var he=void 0;if(_)try{he=H(K)}catch(T){C.error=$(T)}else he=H(K);C.took=lr.now()-C.started,C.nextState=g(F());var te=d.diff&&typeof A=="function"?A(F,K):d.diff;if(fe(V,Object.assign({},d,{diff:te})),V.length=0,C.error)throw C.error;return he}}}}var q,I,de=function(a,d){return new Array(d+1).join(a)},Ze=function(a,d){return de("0",d-a.toString().length)+a},yn=function(a){return Ze(a.getHours(),2)+":"+Ze(a.getMinutes(),2)+":"+Ze(a.getSeconds(),2)+"."+Ze(a.getMilliseconds(),3)},lr=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ur=function(a){if(Array.isArray(a)){for(var d=0,u=Array(a.length);d<a.length;d++)u[d]=a[d];return u}return Array.from(a)},Je=[];q=(typeof ke>"u"?"undefined":be(ke))==="object"&&ke?ke:typeof window<"u"?window:{},I=q.DeepDiff,I&&Je.push(function(){typeof I<"u"&&q.DeepDiff===v&&(q.DeepDiff=I,I=void 0)}),n(o,i),n(s,i),n(f,i),n(c,i),Object.defineProperties(v,{diff:{value:v,enumerable:!0},observableDiff:{value:h,enumerable:!0},applyDiff:{value:O,enumerable:!0},applyChange:{value:b,enumerable:!0},revertChange:{value:x,enumerable:!0},isConflict:{value:function(){return typeof I<"u"},enumerable:!0},noConflict:{value:function(){return Je&&(Je.forEach(function(a){a()}),Je=null),v},enumerable:!0}});var cr={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},fr={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(a){return a},actionTransformer:function(a){return a},errorTransformer:function(a){return a},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},dr=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=a.dispatch,u=a.getState;return typeof d=="function"||typeof u=="function"?Me()({dispatch:d,getState:u}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};r.defaults=fr,r.createLogger=Me,r.logger=dr,r.default=dr,Object.defineProperty(r,"__esModule",{value:!0})})})(co,ut);const fo=uo(ut),M=Ui({reducer:{executionContext:oo,appMenu:lo},middleware:t=>t().concat(fo)});var ho=Object.defineProperty,po=Object.getOwnPropertyDescriptor,ue=(t,e,r,n)=>{for(var i=n>1?void 0:n?po(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&ho(e,r,i),i};let Q=class extends z{constructor(){super(...arguments),this.state={},this.posX=Math.random()*50,this.posY=Math.random()*250,this.shiftX=0,this.shiftY=0,this.width=Math.random()*200+St,this.height=Math.random()*200+Ct}_pointerDownHeader(t){if(!this.state)return;M.dispatch(ro(this.state.id)),M.dispatch(lt(this.state.id));const e=t.clientX-this.getBoundingClientRect().left,r=t.clientY-this.getBoundingClientRect().top,n=({pageX:o,pageY:s})=>{let f=o-e,c=s-r;f<0&&(f=0),c<0&&(c=0),this.posX=f,this.posY=c},i=o=>{this.state.isDragging&&n(o)};n(t),document.addEventListener("pointermove",i),this.onpointerup=function(){document.removeEventListener("pointermove",i),this.onpointerup=null}}_pointerDownOutlines(t){if(!(t.target instanceof Element)||!t.target.matches(".outline"))return;const e=({pageX:n,pageY:i})=>{const o=n-this.posX,s=i-this.posY;this.width=o<St?St:o,this.height=s<Ct?Ct:s},r=n=>{e(n)};e(t),document.addEventListener("pointermove",r),document.addEventListener("mouseup",()=>{document.removeEventListener("pointermove",r)})}_focus(){M.dispatch(lt(this.state.id))}_dbClick(){M.dispatch(fn(this.state.id))}render(){const t=E`
      <style>
        :host {
          z-index: ${this.state.isFocused?99:0};
          left: ${this.state.maximize?0:this.posX}px;
          top: ${this.state.maximize?0:this.posY}px;
        }
      </style>
    `,e={width:this.state.maximize?"100%":this.width+"px",height:this.state.maximize?"100%":this.height+"px"};return E`
      ${t}
      <div
        id="container"
        style=${Jr(e)}
        @click=${this._focus}
        @pointerdown=${this._pointerDownOutlines}
      >
        <pop-up-header
          .header=${this.state.appName}
          .appId=${this.state.id}
          @pointerdown=${this._pointerDownHeader}
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
    `}};Q.styles=[Ke,ni,ii,oi,si];ue([D()],Q.prototype,"state",2);ue([ee()],Q.prototype,"posX",2);ue([ee()],Q.prototype,"posY",2);ue([ee()],Q.prototype,"shiftX",2);ue([ee()],Q.prototype,"shiftY",2);ue([ee()],Q.prototype,"width",2);ue([ee()],Q.prototype,"height",2);Q=ue([B("pop-up")],Q);var vo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,or=(t,e,r,n)=>{for(var i=n>1?void 0:n?go(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&vo(e,r,i),i};let Xe=class extends z{constructor(){super(...arguments),this.header="",this.appId=null}_close(){this.appId&&M.dispatch(eo(this.appId))}_minimize(){this.appId&&M.dispatch(to(this.appId))}_maximize(){this.appId&&M.dispatch(fn(this.appId))}render(){return E`
      <flex-box>
        <flex-item id="header" .flex=${1}>
          <core-text .ellipsis=${!0} .text=${this.header}></core-text>
        </flex-item>
        <flex-item .flex=${1}>
          <flex-box .justifyContent=${"flex-end"}>
            <flex-item @click=${this._minimize}>
              <core-button .src=${X.MINIMIZE}></core-button>
            </flex-item>
            <flex-item @click=${this._maximize}>
              <core-button .src=${X.MAXIMIZE}></core-button>
            </flex-item>
            <flex-item @click=${this._close}>
              <core-button .src=${X.CANCEL}></core-button>
            </flex-item>
          </flex-box>
        </flex-item>
      </flex-box>
    `}};Xe.styles=N`
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
  `;or([D()],Xe.prototype,"header",2);or([D()],Xe.prototype,"appId",2);Xe=or([B("pop-up-header")],Xe);var mo=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,bo=(t,e,r,n)=>{for(var i=n>1?void 0:n?yo(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&mo(e,r,i),i};const $o="/icon-window.png";let Xt=class extends z{render(){return E`
      <core-button .text=${"Start"} .src=${$o}></core-button>
    `}};Xt.styles=N`
    :host {
      height: 100%;
      font-family: "Press Start 2P", cursive;
      font-size: 0.5rem;
      letter-spacing: -1px;
      user-select: none;
      cursor: pointer;
    }
  `;Xt=bo([B("start-button")],Xt);var wo=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,sr=(t,e,r,n)=>{for(var i=n>1?void 0:n?_o(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&wo(e,r,i),i};let qe=class extends z{constructor(){super(...arguments),this.name="Default",this.isFocused=!1}render(){return E`
      <core-button
        class=${this.isFocused?"active":""}
        .text=${this.name}
      ></core-button>
    `}};qe.styles=N`
    :host {
      height: 100%;
      cursor: pointer;
      user-select: none;
    }
  `;sr([D()],qe.prototype,"name",2);sr([D()],qe.prototype,"isFocused",2);qe=sr([B("task-button")],qe);var xo=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,vn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Oo(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&xo(e,r,i),i};let ct=class extends z{constructor(){super(...arguments),this.apps=[]}createClickHandler({id:t,minimize:e}){return()=>{e&&M.dispatch(dn(t)),M.dispatch(lt(t))}}taskButtonsTemplate(){return this.apps.map(t=>{if(t.isOpen)return E`
        <flex-item @click=${this.createClickHandler(t)}>
          <task-button
            .name=${t.appName}
            .isFocused=${t.isFocused}
          ></task-button>
        </flex-item>
      `})}_clickStartButton(){M.dispatch(ao())}render(){return E`
      <flex-box .justifyContent=${"flex-start"} .alignItems=${"flex-start"}>
        <flex-item>
          <start-button @click=${this._clickStartButton}></start-button>
        </flex-item>
        <flex-item .flex=${1}>
          <flex-box .justifyContent=${"flex-start"}>
            ${this.taskButtonsTemplate()}
          </flex-box>
        </flex-item>
      </flex-box>
    `}};ct.styles=N`
    :host {
      box-sizing: border-box;
      position: absolute;
      bottom: 0px;
      width: 100vw;
      height: ${Zt}px;
      background-color: var(--main-gray);
      border-top: 1px solid white;
      outline: 1px solid var(--main-gray);
      overflow: visible;
      flex-wrap: wrap;
      z-index: 99;
    }
  `;vn([D()],ct.prototype,"apps",2);ct=vn([B("task-bar")],ct);var Ao=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Eo=(t,e,r,n)=>{for(var i=n>1?void 0:n?Po(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Ao(e,r,i),i};let qt=class extends z{render(){return E`<slot></slot>`}};qt.styles=N`
    :host {
      width: 100%;
      height: 100%;
      background-color: var(--main-gray);
    }
  `;qt=Eo([B("app-menu-body")],qt);class gn extends z{connectedCallback(){super.connectedCallback(),this._unsubscribe=M.subscribe(()=>this._setState(M.getState())),this._setState(M.getState())}disconnectedCallback(){this._unsubscribe(),super.disconnectedCallback()}}var So=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,ar=(t,e,r,n)=>{for(var i=n>1?void 0:n?Co(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&So(e,r,i),i};let Ye=class extends gn{constructor(){super(...arguments),this.isOpen=!1,this.apps=[]}_setState(t){this.apps=t.executionContext}createClickHandler(t){return()=>{M.dispatch(dn(t)),M.dispatch(lt(t)),M.dispatch(pn())}}render(){return E` <div id="container">
      <app-menu-body>
        ${this.apps.map(t=>E`<app-menu-item
              .name=${t.appName}
              @click=${this.createClickHandler(t.id)}
            ></app-menu-item>`)}
      </app-menu-body>
    </div>`}};Ye.styles=N`
    #container {
      position: absolute;
      left: 0;
      bottom: ${Zt}px;
      border-top: 2px white solid;
      border-left: 2px white solid;
      border-right: 2px black solid;
      border-bottom: 2px black solid;
      z-index: 100;
    }
  `;ar([D()],Ye.prototype,"isOpen",2);ar([ee()],Ye.prototype,"apps",2);Ye=ar([B("app-menu")],Ye);var jo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,mn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Do(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&jo(e,r,i),i};let ft=class extends z{constructor(){super(...arguments),this.name=""}render(){return E` <flex-box id="container" .justifyContent=${"flex-start"}>
      ${this.name}
    </flex-box>`}};ft.styles=N`
    #container {
      width: 100%;
      height: 40px;
      background-color: var(--main-gray);
      padding: 0.5rem;
    }
    #container:hover {
      background-color: navy;
      color: white;
      cursor: pointer;
    }
  `;mn([D()],ft.prototype,"name",2);ft=mn([B("app-menu-item")],ft);var To=Object.defineProperty,Mo=Object.getOwnPropertyDescriptor,gt=(t,e,r,n)=>{for(var i=n>1?void 0:n?Mo(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&To(e,r,i),i};let De=class extends gn{constructor(){super(...arguments),this.executionContext=[],this.isDragging=!1,this.isOpenMenu=!1}_setState(t){this.executionContext=t.executionContext,this.isOpenMenu=t.appMenu.isOpen}popupTemplate(){return this.executionContext.map(t=>{const{isOpen:e,maximize:r,minimize:n,content:i}=t;if(e)return E`
        <pop-up .state=${t} class=${Zr({maximize:r,minimize:n})}>
          ${i}
        </pop-up>
      `})}_click(t){t.target instanceof Element&&t.target.matches("#background")&&(M.dispatch(io()),M.dispatch(pn())),M.dispatch(no())}appMenuTemplate(){if(this.isOpenMenu)return E` <app-menu></app-menu>`}render(){return E`
      <div id="background" @click=${this._click}>
        <div>${this.popupTemplate()}</div>
        ${this.appMenuTemplate()}
        <task-bar .apps=${this.executionContext}></task-bar>
      </div>
    `}};De.styles=N`
    :host {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    #background {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `;gt([ee()],De.prototype,"executionContext",2);gt([ee()],De.prototype,"isDragging",2);gt([ee()],De.prototype,"isOpenMenu",2);De=gt([B("home-page")],De);
