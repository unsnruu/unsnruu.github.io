(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=window,Ft=Ze.ShadowRoot&&(Ze.ShadyCSS===void 0||Ze.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wt=Symbol(),ur=new WeakMap;let kr=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ft&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=ur.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ur.set(r,e))}return e}toString(){return this.cssText}};const vn=t=>new kr(typeof t=="string"?t:t+"",void 0,Wt),U=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new kr(r,t,Wt)},gn=(t,e)=>{Ft?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),i=Ze.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)})},cr=Ft?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return vn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt;const Je=window,fr=Je.trustedTypes,mn=fr?fr.emptyScript:"",dr=Je.reactiveElementPolyfillSupport,It={toAttribute(t,e){switch(e){case Boolean:t=t?mn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},zr=(t,e)=>e!==t&&(e==e||t==t),yt={attribute:!0,type:String,converter:It,reflect:!1,hasChanged:zr};let $e=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,r=yt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(i){const o=this[e];this[r]=i,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||yt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(cr(i))}else e!==void 0&&r.push(cr(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gn(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=yt){var i;const o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:It).toAttribute(r,n.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,r){var n;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const s=i.getPropertyOptions(o),f=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:It;this._$El=o,this[o]=f.fromAttribute(r,s.type),this._$El=null}}requestUpdate(e,r,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||zr)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};$e.finalized=!0,$e.elementProperties=new Map,$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},dr==null||dr({ReactiveElement:$e}),((mt=Je.reactiveElementVersions)!==null&&mt!==void 0?mt:Je.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bt;const Qe=window,Ae=Qe.trustedTypes,hr=Ae?Ae.createPolicy("lit-html",{createHTML:t=>t}):void 0,ne=`lit$${(Math.random()+"").slice(9)}$`,Ur="?"+ne,yn=`<${Ur}>`,Oe=document,ze=(t="")=>Oe.createComment(t),Ue=t=>t===null||typeof t!="object"&&typeof t!="function",Lr=Array.isArray,bn=t=>Lr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pr=/-->/g,vr=/>/g,ve=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gr=/'/g,mr=/"/g,Hr=/^(?:script|style|textarea|title)$/i,$n=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),j=$n(1),ae=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),yr=new WeakMap,we=Oe.createTreeWalker(Oe,129,null,!1),wn=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":"",s=Re;for(let c=0;c<r;c++){const l=t[c];let p,h,v=-1,m=0;for(;m<l.length&&(s.lastIndex=m,h=s.exec(l),h!==null);)m=s.lastIndex,s===Re?h[1]==="!--"?s=pr:h[1]!==void 0?s=vr:h[2]!==void 0?(Hr.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=ve):h[3]!==void 0&&(s=ve):s===ve?h[0]===">"?(s=i??Re,v=-1):h[1]===void 0?v=-2:(v=s.lastIndex-h[2].length,p=h[1],s=h[3]===void 0?ve:h[3]==='"'?mr:gr):s===mr||s===gr?s=ve:s===pr||s===vr?s=Re:(s=ve,i=void 0);const b=s===ve&&t[c+1].startsWith("/>")?" ":"";o+=s===Re?l+yn:v>=0?(n.push(p),l.slice(0,v)+"$lit$"+l.slice(v)+ne+b):l+ne+(v===-2?(n.push(void 0),c):b)}const f=o+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[hr!==void 0?hr.createHTML(f):f,n]};class Le{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const f=e.length-1,c=this.parts,[l,p]=wn(e,r);if(this.el=Le.createElement(l,n),we.currentNode=this.el.content,r===2){const h=this.el.content,v=h.firstChild;v.remove(),h.append(...v.childNodes)}for(;(i=we.nextNode())!==null&&c.length<f;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const v of i.getAttributeNames())if(v.endsWith("$lit$")||v.startsWith(ne)){const m=p[s++];if(h.push(v),m!==void 0){const b=i.getAttribute(m.toLowerCase()+"$lit$").split(ne),y=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:y[2],strings:b,ctor:y[1]==="."?xn:y[1]==="?"?On:y[1]==="@"?En:lt})}else c.push({type:6,index:o})}for(const v of h)i.removeAttribute(v)}if(Hr.test(i.tagName)){const h=i.textContent.split(ne),v=h.length-1;if(v>0){i.textContent=Ae?Ae.emptyScript:"";for(let m=0;m<v;m++)i.append(h[m],ze()),we.nextNode(),c.push({type:2,index:++o});i.append(h[v],ze())}}}else if(i.nodeType===8)if(i.data===Ur)c.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(ne,h+1))!==-1;)c.push({type:7,index:o}),h+=ne.length-1}o++}}static createElement(e,r){const n=Oe.createElement("template");return n.innerHTML=e,n}}function Ee(t,e,r=t,n){var i,o,s,f;if(e===ae)return e;let c=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl;const l=Ue(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((o=c==null?void 0:c._$AO)===null||o===void 0||o.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,r,n)),n!==void 0?((s=(f=r)._$Co)!==null&&s!==void 0?s:f._$Co=[])[n]=c:r._$Cl=c),c!==void 0&&(e=Ee(t,c._$AS(t,e.values),c,n)),e}class _n{constructor(e,r){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var r;const{el:{content:n},parts:i}=this._$AD,o=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:Oe).importNode(n,!0);we.currentNode=o;let s=we.nextNode(),f=0,c=0,l=i[0];for(;l!==void 0;){if(f===l.index){let p;l.type===2?p=new Vt(s,s.nextSibling,this,e):l.type===1?p=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(p=new Pn(s,this,e)),this.u.push(p),l=i[++c]}f!==(l==null?void 0:l.index)&&(s=we.nextNode(),f++)}return o}p(e){let r=0;for(const n of this.u)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}let Vt=class Br{constructor(e,r,n,i){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ee(this,e,r),Ue(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==ae&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bn(e)?this.k(e):this.g(e)}O(e,r=this._$AB){return this._$AA.parentNode.insertBefore(e,r)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==N&&Ue(this._$AH)?this._$AA.nextSibling.data=e:this.T(Oe.createTextNode(e)),this._$AH=e}$(e){var r;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Le.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new _n(o,this),f=s.v(this.options);s.p(n),this.T(f),this._$AH=s}}_$AC(e){let r=yr.get(e.strings);return r===void 0&&yr.set(e.strings,r=new Le(e)),r}k(e){Lr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new Br(this.O(ze()),this.O(ze()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cm=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}},lt=class{constructor(e,r,n,i,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Ee(this,e,r,0),s=!Ue(e)||e!==this._$AH&&e!==ae,s&&(this._$AH=e);else{const f=e;let c,l;for(e=o[0],c=0;c<o.length-1;c++)l=Ee(this,f[n+c],r,c),l===ae&&(l=this._$AH[c]),s||(s=!Ue(l)||l!==this._$AH[c]),l===N?e=N:e!==N&&(e+=(l??"")+o[c+1]),this._$AH[c]=l}s&&!i&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xn=class extends lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}};const An=Ae?Ae.emptyScript:"";let On=class extends lt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,An):this.element.removeAttribute(this.name)}},En=class extends lt{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){var n;if((e=(n=Ee(this,e,r,0))!==null&&n!==void 0?n:N)===ae)return;const i=this._$AH,o=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==N&&(i===N||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},Pn=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}};const br=Qe.litHtmlPolyfillSupport;br==null||br(Le,Vt),((bt=Qe.litHtmlVersions)!==null&&bt!==void 0?bt:Qe.litHtmlVersions=[]).push("2.6.1");const Sn=(t,e,r)=>{var n,i;const o=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let s=o._$litPart$;if(s===void 0){const f=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new Vt(e.insertBefore(ze(),f),f,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t,wt;let z=class extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Sn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ae}};z.finalized=!0,z._$litElement$=!0,($t=globalThis.litElementHydrateSupport)===null||$t===void 0||$t.call(globalThis,{LitElement:z});const $r=globalThis.litElementPolyfillSupport;$r==null||$r({LitElement:z});((wt=globalThis.litElementVersions)!==null&&wt!==void 0?wt:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=t=>e=>typeof e=="function"?((r,n)=>(customElements.define(r,n),n))(t,e):((r,n)=>{const{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(s){customElements.define(r,s)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function T(t){return(e,r)=>r!==void 0?((n,i,o)=>{i.constructor.createProperty(o,n)})(t,e,r):Cn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(t){return T({...t,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t;((_t=window.HTMLSlotElement)===null||_t===void 0?void 0:_t.prototype.assignedElements)!=null;const Ye=U`
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
`;var jn=Object.defineProperty,Tn=Object.getOwnPropertyDescriptor,Dn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Tn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&jn(e,r,i),i};let Nt=class extends z{render(){return j`<slot></slot>`}};Nt.styles=Ye;Nt=Dn([q("core-base")],Nt);const In=U`
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
`;var Rn=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,ut=(t,e,r,n)=>{for(var i=n>1?void 0:n?Mn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Rn(e,r,i),i};let Pe=class extends z{TextTemplate(){return this.text?j`
      <flex-item .flex=${1}>
        <div>${this.text}</div>
      </flex-item>
    `:j``}ImgTemplate(){return this.src?j`
      <flex-item .flex=${1}>
        <flex-box id="img-wrapper">
          <img id="img" src=${this.src} draggable="false" />
        </flex-box>
      </flex-item>
    `:j``}render(){return j`
      <flex-box .gap=${4}>${this.ImgTemplate()}${this.TextTemplate()}</flex-box>
    `}};Pe.styles=[Ye,In,Nn];ut([T()],Pe.prototype,"src",2);ut([T()],Pe.prototype,"text",2);ut([T()],Pe.prototype,"isFocused",2);Pe=ut([q("core-button")],Pe);var kn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,ct=(t,e,r,n)=>{for(var i=n>1?void 0:n?zn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&kn(e,r,i),i};let Se=class extends z{render(){const t=j`
      <style>
        :host {
          gap: ${this.gap||0}px;
          justify-content: ${this.justifyContent||"center"};
          align-items: ${this.alignItems||"center"};
        }
      </style>
    `;return j`
      ${t}
      <slot></slot>
    `}};Se.styles=[Ye,U`
      :host {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
      }
    `];ct([T()],Se.prototype,"gap",2);ct([T()],Se.prototype,"justifyContent",2);ct([T()],Se.prototype,"alignItems",2);Se=ct([q("flex-box")],Se);var Un=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,ft=(t,e,r,n)=>{for(var i=n>1?void 0:n?Ln(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Un(e,r,i),i};let Ce=class extends z{constructor(){super(...arguments),this.flex=0,this.flexShrink=0,this.flexGrow=0}render(){const t=j`
      <style>
        :host {
          flex: ${this.flex};
          flex-grow: ${this.flexGrow||"none"};
          flex-shrink: ${this.flexShrink||"1"};
        }
      </style>
    `;return j`
      ${t}
      <slot></slot>
    `}};Ce.styles=U`
    :host {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      align-items: center;
      display: flex;
    }
  `;ft([T()],Ce.prototype,"flex",2);ft([T()],Ce.prototype,"flexShrink",2);ft([T()],Ce.prototype,"flexGrow",2);Ce=ft([q("flex-item")],Ce);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wr=t=>(...e)=>({_$litDirective$:t,values:e});let Vr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr=Wr(class extends Vr{constructor(t){var e;if(super(t),t.type!==Fr.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(e)}const i=t.element.classList;this.nt.forEach(o=>{o in e||(i.remove(o),this.nt.delete(o))});for(const o in e){const s=!!e[o];s===this.nt.has(o)||!((n=this.st)===null||n===void 0)&&n.has(o)||(s?(i.add(o),this.nt.add(o)):(i.remove(o),this.nt.delete(o)))}return ae}});var Hn=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,Xt=(t,e,r,n)=>{for(var i=n>1?void 0:n?Bn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Hn(e,r,i),i};let He=class extends z{constructor(){super(...arguments),this.text="",this.ellipsis=!1}render(){return j`<div class=${Xr({ellipsis:this.ellipsis})}>
      ${this.text}
    </div>`}};He.styles=[Ye,U`
      :host {
        width: 100%;
        height: 100%;
      }
      .ellipsis {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    `];Xt([T()],He.prototype,"text",2);Xt([T()],He.prototype,"ellipsis",2);He=Xt([q("core-text")],He);var Fn=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Vn=(t,e,r,n)=>{for(var i=n>1?void 0:n?Wn(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&Fn(e,r,i),i};let Rt=class extends z{render(){return j`<div id="container"><slot></slot></div> `}};Rt.styles=U`
    :host {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    #container {
      padding: 1rem;
    }
  `;Rt=Vn([q("pop-up-body")],Rt);const xt=150,At=100,qr=32,Xn=U`
  :host {
    position: absolute;
    background-color: var(--main-gray);
    transition: all 0.2s linear;
    overflow: hidden;
  }
  #container {
    box-sizing: border-box;
    padding: 0.25rem;
    border: 1px outset white;
  }
`,qn=U`
  :host(.minimize) {
    transform: translateY(100vh) scale(0);
    transition: 0.2s linear;
  }
`,Yn=U`
  :host(.maximize) {
    width: 100%;
    height: calc(100% - ${qr}px);
    transition: all 0.2s linear;
  }
`,Kn=U`
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
 */const Gn=Wr(class extends Vr{constructor(t){var e;if(super(t),t.type!==Fr.ATTRIBUTE||t.name!=="style"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:r}=t.element;if(this.vt===void 0){this.vt=new Set;for(const n in e)this.vt.add(n);return this.render(e)}this.vt.forEach(n=>{e[n]==null&&(this.vt.delete(n),n.includes("-")?r.removeProperty(n):r[n]="")});for(const n in e){const i=e[n];i!=null&&(this.vt.add(n),n.includes("-")?r.setProperty(n,i):r[n]=i)}return ae}});function J(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function le(t){return!!t&&!!t[C]}function re(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var i=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===oi}(t)||Array.isArray(t)||!!t[Pr]||!!(!((e=t.constructor)===null||e===void 0)&&e[Pr])||qt(t)||Yt(t))}function me(t,e,r){r===void 0&&(r=!1),je(t)===0?(r?Object.keys:xe)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,i){return e(i,n,t)})}function je(t){var e=t[C];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:qt(t)?2:Yt(t)?3:0}function _e(t,e){return je(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Zn(t,e){return je(t)===2?t.get(e):t[e]}function Yr(t,e,r){var n=je(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function Kr(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function qt(t){return ni&&t instanceof Map}function Yt(t){return ii&&t instanceof Set}function ge(t){return t.o||t.t}function Kt(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Zr(t);delete e[C];for(var r=xe(e),n=0;n<r.length;n++){var i=r[n],o=e[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Gt(t,e){return e===void 0&&(e=!1),Zt(t)||le(t)||!re(t)||(je(t)>1&&(t.set=t.add=t.clear=t.delete=Jn),Object.freeze(t),e&&me(t,function(r,n){return Gt(n,!0)},!0)),t}function Jn(){J(2)}function Zt(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function ee(t){var e=Ut[t];return e||J(18,t),e}function Qn(t,e){Ut[t]||(Ut[t]=e)}function Mt(){return Be}function Ot(t,e){e&&(ee("Patches"),t.u=[],t.s=[],t.v=e)}function et(t){kt(t),t.p.forEach(ei),t.p=null}function kt(t){t===Be&&(Be=t.l)}function wr(t){return Be={p:[],l:Be,h:t,m:!0,_:0}}function ei(t){var e=t[C];e.i===0||e.i===1?e.j():e.O=!0}function Et(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.g||ee("ES5").S(e,t,n),n?(r[C].P&&(et(e),J(4)),re(t)&&(t=tt(e,t),e.l||rt(e,t)),e.u&&ee("Patches").M(r[C].t,t,e.u,e.s)):t=tt(e,r,[]),et(e),e.u&&e.v(e.u,e.s),t!==Gr?t:void 0}function tt(t,e,r){if(Zt(e))return e;var n=e[C];if(!n)return me(e,function(f,c){return _r(t,n,e,f,c,r)},!0),e;if(n.A!==t)return e;if(!n.P)return rt(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=n.i===4||n.i===5?n.o=Kt(n.k):n.o,o=i,s=!1;n.i===3&&(o=new Set(i),i.clear(),s=!0),me(o,function(f,c){return _r(t,n,i,f,c,r,s)}),rt(t,i,!1),r&&t.u&&ee("Patches").N(n,r,t.u,t.s)}return n.o}function _r(t,e,r,n,i,o,s){if(le(i)){var f=tt(t,i,o&&e&&e.i!==3&&!_e(e.R,n)?o.concat(n):void 0);if(Yr(r,n,f),!le(f))return;t.m=!1}else s&&r.add(i);if(re(i)&&!Zt(i)){if(!t.h.D&&t._<1)return;tt(t,i),e&&e.A.l||rt(t,i)}}function rt(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&Gt(e,r)}function Pt(t,e){var r=t[C];return(r?ge(r):t)[e]}function xr(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function ie(t){t.P||(t.P=!0,t.l&&ie(t.l))}function St(t){t.o||(t.o=Kt(t.t))}function zt(t,e,r){var n=qt(e)?ee("MapSet").F(e,r):Yt(e)?ee("MapSet").T(e,r):t.g?function(i,o){var s=Array.isArray(i),f={i:s?1:0,A:o?o.A:Mt(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},c=f,l=Fe;s&&(c=[f],l=ke);var p=Proxy.revocable(c,l),h=p.revoke,v=p.proxy;return f.k=v,f.j=h,v}(e,r):ee("ES5").J(e,r);return(r?r.A:Mt()).p.push(n),n}function ti(t){return le(t)||J(22,t),function e(r){if(!re(r))return r;var n,i=r[C],o=je(r);if(i){if(!i.P&&(i.i<4||!ee("ES5").K(i)))return i.t;i.I=!0,n=Ar(r,o),i.I=!1}else n=Ar(r,o);return me(n,function(s,f){i&&Zn(i.t,s)===f||Yr(n,s,e(f))}),o===3?new Set(n):n}(t)}function Ar(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Kt(t)}function ri(){function t(o,s){var f=i[o];return f?f.enumerable=s:i[o]=f={configurable:!0,enumerable:s,get:function(){var c=this[C];return Fe.get(c,o)},set:function(c){var l=this[C];Fe.set(l,o,c)}},f}function e(o){for(var s=o.length-1;s>=0;s--){var f=o[s][C];if(!f.P)switch(f.i){case 5:n(f)&&ie(f);break;case 4:r(f)&&ie(f)}}}function r(o){for(var s=o.t,f=o.k,c=xe(f),l=c.length-1;l>=0;l--){var p=c[l];if(p!==C){var h=s[p];if(h===void 0&&!_e(s,p))return!0;var v=f[p],m=v&&v[C];if(m?m.t!==h:!Kr(v,h))return!0}}var b=!!s[C];return c.length!==xe(s).length+(b?0:1)}function n(o){var s=o.k;if(s.length!==o.t.length)return!0;var f=Object.getOwnPropertyDescriptor(s,s.length-1);if(f&&!f.get)return!0;for(var c=0;c<s.length;c++)if(!s.hasOwnProperty(c))return!0;return!1}var i={};Qn("ES5",{J:function(o,s){var f=Array.isArray(o),c=function(p,h){if(p){for(var v=Array(h.length),m=0;m<h.length;m++)Object.defineProperty(v,""+m,t(m,!0));return v}var b=Zr(h);delete b[C];for(var y=xe(b),x=0;x<y.length;x++){var A=y[x];b[A]=t(A,p||!!b[A].enumerable)}return Object.create(Object.getPrototypeOf(h),b)}(f,o),l={i:f?5:4,A:s?s.A:Mt(),P:!1,I:!1,R:{},l:s,t:o,k:c,o:null,O:!1,C:!1};return Object.defineProperty(c,C,{value:l,writable:!0}),c},S:function(o,s,f){f?le(s)&&s[C].A===o&&e(o.p):(o.u&&function c(l){if(l&&typeof l=="object"){var p=l[C];if(p){var h=p.t,v=p.k,m=p.R,b=p.i;if(b===4)me(v,function(P){P!==C&&(h[P]!==void 0||_e(h,P)?m[P]||c(v[P]):(m[P]=!0,ie(p)))}),me(h,function(P){v[P]!==void 0||_e(v,P)||(m[P]=!1,ie(p))});else if(b===5){if(n(p)&&(ie(p),m.length=!0),v.length<h.length)for(var y=v.length;y<h.length;y++)m[y]=!1;else for(var x=h.length;x<v.length;x++)m[x]=!0;for(var A=Math.min(v.length,h.length),E=0;E<A;E++)v.hasOwnProperty(E)||(m[E]=!0),m[E]===void 0&&c(v[E])}}}}(o.p[0]),e(o.p))},K:function(o){return o.i===4?r(o):n(o)}})}var Or,Be,Jt=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",ni=typeof Map<"u",ii=typeof Set<"u",Er=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Gr=Jt?Symbol.for("immer-nothing"):((Or={})["immer-nothing"]=!0,Or),Pr=Jt?Symbol.for("immer-draftable"):"__$immer_draftable",C=Jt?Symbol.for("immer-state"):"__$immer_state",oi=""+Object.prototype.constructor,xe=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Zr=Object.getOwnPropertyDescriptors||function(t){var e={};return xe(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},Ut={},Fe={get:function(t,e){if(e===C)return t;var r=ge(t);if(!_e(r,e))return function(i,o,s){var f,c=xr(o,s);return c?"value"in c?c.value:(f=c.get)===null||f===void 0?void 0:f.call(i.k):void 0}(t,r,e);var n=r[e];return t.I||!re(n)?n:n===Pt(t.t,e)?(St(t),t.o[e]=zt(t.A.h,n,t)):n},has:function(t,e){return e in ge(t)},ownKeys:function(t){return Reflect.ownKeys(ge(t))},set:function(t,e,r){var n=xr(ge(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var i=Pt(ge(t),e),o=i==null?void 0:i[C];if(o&&o.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(Kr(r,i)&&(r!==void 0||_e(t.t,e)))return!0;St(t),ie(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return Pt(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,St(t),ie(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=ge(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){J(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){J(12)}},ke={};me(Fe,function(t,e){ke[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),ke.deleteProperty=function(t,e){return ke.set.call(this,t,e,void 0)},ke.set=function(t,e,r){return Fe.set.call(this,t[0],e,r,t[0])};var si=function(){function t(r){var n=this;this.g=Er,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var f=o;o=i;var c=n;return function(y){var x=this;y===void 0&&(y=f);for(var A=arguments.length,E=Array(A>1?A-1:0),P=1;P<A;P++)E[P-1]=arguments[P];return c.produce(y,function(R){var M;return(M=o).call.apply(M,[x,R].concat(E))})}}var l;if(typeof o!="function"&&J(6),s!==void 0&&typeof s!="function"&&J(7),re(i)){var p=wr(n),h=zt(n,i,void 0),v=!0;try{l=o(h),v=!1}finally{v?et(p):kt(p)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(y){return Ot(p,s),Et(y,p)},function(y){throw et(p),y}):(Ot(p,s),Et(l,p))}if(!i||typeof i!="object"){if((l=o(i))===void 0&&(l=i),l===Gr&&(l=void 0),n.D&&Gt(l,!0),s){var m=[],b=[];ee("Patches").M(i,l,m,b),s(m,b)}return l}J(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(l){for(var p=arguments.length,h=Array(p>1?p-1:0),v=1;v<p;v++)h[v-1]=arguments[v];return n.produceWithPatches(l,function(m){return i.apply(void 0,[m].concat(h))})};var s,f,c=n.produce(i,o,function(l,p){s=l,f=p});return typeof Promise<"u"&&c instanceof Promise?c.then(function(l){return[l,s,f]}):[c,s,f]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){re(r)||J(8),le(r)&&(r=ti(r));var n=wr(this),i=zt(this,r,void 0);return i[C].C=!0,kt(n),i},e.finishDraft=function(r,n){var i=r&&r[C],o=i.A;return Ot(o,n),Et(void 0,o)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!Er&&J(20),this.g=r},e.applyPatches=function(r,n){var i;for(i=n.length-1;i>=0;i--){var o=n[i];if(o.path.length===0&&o.op==="replace"){r=o.value;break}}i>-1&&(n=n.slice(i+1));var s=ee("Patches").$;return le(r)?s(r,n):this.produce(r,function(f){return s(f,n)})},t}(),W=new si,Jr=W.produce;W.produceWithPatches.bind(W);W.setAutoFreeze.bind(W);W.setUseProxies.bind(W);W.applyPatches.bind(W);W.createDraft.bind(W);W.finishDraft.bind(W);function We(t){return We=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},We(t)}function ai(t,e){if(We(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(We(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function li(t){var e=ai(t,"string");return We(e)==="symbol"?e:String(e)}function ui(t,e,r){return e=li(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Sr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Cr(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Sr(Object(r),!0).forEach(function(n){ui(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Sr(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function k(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var jr=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ct=function(){return Math.random().toString(36).substring(7).split("").join(".")},nt={INIT:"@@redux/INIT"+Ct(),REPLACE:"@@redux/REPLACE"+Ct(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ct()}};function ci(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Qr(t,e,r){var n;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(k(0));if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(k(1));return r(Qr)(t,e)}if(typeof t!="function")throw new Error(k(2));var i=t,o=e,s=[],f=s,c=!1;function l(){f===s&&(f=s.slice())}function p(){if(c)throw new Error(k(3));return o}function h(y){if(typeof y!="function")throw new Error(k(4));if(c)throw new Error(k(5));var x=!0;return l(),f.push(y),function(){if(x){if(c)throw new Error(k(6));x=!1,l();var E=f.indexOf(y);f.splice(E,1),s=null}}}function v(y){if(!ci(y))throw new Error(k(7));if(typeof y.type>"u")throw new Error(k(8));if(c)throw new Error(k(9));try{c=!0,o=i(o,y)}finally{c=!1}for(var x=s=f,A=0;A<x.length;A++){var E=x[A];E()}return y}function m(y){if(typeof y!="function")throw new Error(k(10));i=y,v({type:nt.REPLACE})}function b(){var y,x=h;return y={subscribe:function(E){if(typeof E!="object"||E===null)throw new Error(k(11));function P(){E.next&&E.next(p())}P();var R=x(P);return{unsubscribe:R}}},y[jr]=function(){return this},y}return v({type:nt.INIT}),n={dispatch:v,subscribe:h,getState:p,replaceReducer:m},n[jr]=b,n}function fi(t){Object.keys(t).forEach(function(e){var r=t[e],n=r(void 0,{type:nt.INIT});if(typeof n>"u")throw new Error(k(12));if(typeof r(void 0,{type:nt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(k(13))})}function di(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var i=e[n];typeof t[i]=="function"&&(r[i]=t[i])}var o=Object.keys(r),s;try{fi(r)}catch(f){s=f}return function(c,l){if(c===void 0&&(c={}),s)throw s;for(var p=!1,h={},v=0;v<o.length;v++){var m=o[v],b=r[m],y=c[m],x=b(y,l);if(typeof x>"u")throw l&&l.type,new Error(k(14));h[m]=x,p=p||x!==y}return p=p||o.length!==Object.keys(c).length,p?h:c}}function it(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(n){return n}:e.length===1?e[0]:e.reduce(function(n,i){return function(){return n(i.apply(void 0,arguments))}})}function hi(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(n){return function(){var i=n.apply(void 0,arguments),o=function(){throw new Error(k(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},f=e.map(function(c){return c(s)});return o=it.apply(void 0,f)(i.dispatch),Cr(Cr({},i),{},{dispatch:o})}}}function en(t){var e=function(n){var i=n.dispatch,o=n.getState;return function(s){return function(f){return typeof f=="function"?f(i,o,t):s(f)}}};return e}var tn=en();tn.withExtraArgument=en;const Tr=tn;var pi=globalThis&&globalThis.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),vi=globalThis&&globalThis.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(l){return function(p){return c([l,p])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(p){l=[6,p],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},ot=globalThis&&globalThis.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t},gi=Object.defineProperty,mi=Object.defineProperties,yi=Object.getOwnPropertyDescriptors,Dr=Object.getOwnPropertySymbols,bi=Object.prototype.hasOwnProperty,$i=Object.prototype.propertyIsEnumerable,Ir=function(t,e,r){return e in t?gi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},oe=function(t,e){for(var r in e||(e={}))bi.call(e,r)&&Ir(t,r,e[r]);if(Dr)for(var n=0,i=Dr(e);n<i.length;n++){var r=i[n];$i.call(e,r)&&Ir(t,r,e[r])}return t},jt=function(t,e){return mi(t,yi(e))},wi=function(t,e,r){return new Promise(function(n,i){var o=function(c){try{f(r.next(c))}catch(l){i(l)}},s=function(c){try{f(r.throw(c))}catch(l){i(l)}},f=function(c){return c.done?n(c.value):Promise.resolve(c.value).then(o,s)};f((r=r.apply(t,e)).next())})},_i=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?it:it.apply(null,arguments)};function xi(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var r=e;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return e===r}var Ai=function(t){pi(e,t);function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=t.apply(this,r)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.prototype.concat.apply(this,r)},e.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(e.bind.apply(e,ot([void 0],r[0].concat(this)))):new(e.bind.apply(e,ot([void 0],r.concat(this))))},e}(Array);function Lt(t){return re(t)?Jr(t,function(){}):t}function Oi(t){return typeof t=="boolean"}function Ei(){return function(e){return Pi(e)}}function Pi(t){t===void 0&&(t={});var e=t.thunk,r=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var n=new Ai;return r&&(Oi(r)?n.push(Tr):n.push(Tr.withExtraArgument(r.extraArgument))),n}var Si=!0;function Ci(t){var e=Ei(),r=t||{},n=r.reducer,i=n===void 0?void 0:n,o=r.middleware,s=o===void 0?e():o,f=r.devTools,c=f===void 0?!0:f,l=r.preloadedState,p=l===void 0?void 0:l,h=r.enhancers,v=h===void 0?void 0:h,m;if(typeof i=="function")m=i;else if(xi(i))m=di(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var b=s;typeof b=="function"&&(b=b(e));var y=hi.apply(void 0,b),x=it;c&&(x=_i(oe({trace:!Si},typeof c=="object"&&c)));var A=[y];Array.isArray(v)?A=ot([y],v):typeof v=="function"&&(A=v(A));var E=x.apply(void 0,A);return Qr(m,p,E)}function se(t,e){function r(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];if(e){var o=e.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return oe(oe({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:n[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(n){return n.type===t},r}function rn(t){var e={},r=[],n,i={addCase:function(o,s){var f=typeof o=="string"?o:o.type;if(f in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[f]=s,i},addMatcher:function(o,s){return r.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return n=o,i}};return t(i),[e,r,n]}function ji(t){return typeof t=="function"}function Ti(t,e,r,n){r===void 0&&(r=[]);var i=typeof e=="function"?rn(e):[e,r,n],o=i[0],s=i[1],f=i[2],c;if(ji(t))c=function(){return Lt(t())};else{var l=Lt(t);c=function(){return l}}function p(h,v){h===void 0&&(h=c());var m=ot([o[v.type]],s.filter(function(b){var y=b.matcher;return y(v)}).map(function(b){var y=b.reducer;return y}));return m.filter(function(b){return!!b}).length===0&&(m=[f]),m.reduce(function(b,y){if(y)if(le(b)){var x=b,A=y(x,v);return A===void 0?b:A}else{if(re(b))return Jr(b,function(E){return y(E,v)});var A=y(b,v);if(A===void 0){if(b===null)return b;throw Error("A case reducer on a non-draftable value must not return undefined")}return A}return b},h)}return p.getInitialState=c,p}function Di(t,e){return t+"/"+e}function Ii(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof t.initialState=="function"?t.initialState:Lt(t.initialState),n=t.reducers||{},i=Object.keys(n),o={},s={},f={};i.forEach(function(p){var h=n[p],v=Di(e,p),m,b;"reducer"in h?(m=h.reducer,b=h.prepare):m=h,o[p]=m,s[v]=m,f[p]=b?se(v,b):se(v)});function c(){var p=typeof t.extraReducers=="function"?rn(t.extraReducers):[t.extraReducers],h=p[0],v=h===void 0?{}:h,m=p[1],b=m===void 0?[]:m,y=p[2],x=y===void 0?void 0:y,A=oe(oe({},v),s);return Ti(r,function(E){for(var P in A)E.addCase(P,A[P]);for(var R=0,M=b;R<M.length;R++){var ce=M[R];E.addMatcher(ce.matcher,ce.reducer)}x&&E.addDefaultCase(x)})}var l;return{name:e,reducer:function(p,h){return l||(l=c()),l(p,h)},actions:f,caseReducers:o,getInitialState:function(){return l||(l=c()),l.getInitialState()}}}var Ni="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Ri=function(t){t===void 0&&(t=21);for(var e="",r=t;r--;)e+=Ni[Math.random()*64|0];return e},Mi=["name","message","stack","code"],Tt=function(){function t(e,r){this.payload=e,this.meta=r}return t}(),Nr=function(){function t(e,r){this.payload=e,this.meta=r}return t}(),ki=function(t){if(typeof t=="object"&&t!==null){for(var e={},r=0,n=Mi;r<n.length;r++){var i=n[r];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,r,n){var i=se(e+"/fulfilled",function(l,p,h,v){return{payload:l,meta:jt(oe({},v||{}),{arg:h,requestId:p,requestStatus:"fulfilled"})}}),o=se(e+"/pending",function(l,p,h){return{payload:void 0,meta:jt(oe({},h||{}),{arg:p,requestId:l,requestStatus:"pending"})}}),s=se(e+"/rejected",function(l,p,h,v,m){return{payload:v,error:(n&&n.serializeError||ki)(l||"Rejected"),meta:jt(oe({},m||{}),{arg:h,requestId:p,rejectedWithValue:!!v,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"})}}),f=typeof AbortController<"u"?AbortController:function(){function l(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return l.prototype.abort=function(){},l}();function c(l){return function(p,h,v){var m=n!=null&&n.idGenerator?n.idGenerator(l):Ri(),b=new f,y;function x(E){y=E,b.abort()}var A=function(){return wi(this,null,function(){var E,P,R,M,ce,fe,Te;return vi(this,function(K){switch(K.label){case 0:return K.trys.push([0,4,,5]),M=(E=n==null?void 0:n.condition)==null?void 0:E.call(n,l,{getState:h,extra:v}),Ui(M)?[4,M]:[3,2];case 1:M=K.sent(),K.label=2;case 2:if(M===!1||b.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return ce=new Promise(function(I,de){return b.signal.addEventListener("abort",function(){return de({name:"AbortError",message:y||"Aborted"})})}),p(o(m,l,(P=n==null?void 0:n.getPendingMeta)==null?void 0:P.call(n,{requestId:m,arg:l},{getState:h,extra:v}))),[4,Promise.race([ce,Promise.resolve(r(l,{dispatch:p,getState:h,extra:v,requestId:m,signal:b.signal,abort:x,rejectWithValue:function(I,de){return new Tt(I,de)},fulfillWithValue:function(I,de){return new Nr(I,de)}})).then(function(I){if(I instanceof Tt)throw I;return I instanceof Nr?i(I.payload,m,l,I.meta):i(I,m,l)})])];case 3:return R=K.sent(),[3,5];case 4:return fe=K.sent(),R=fe instanceof Tt?s(null,m,l,fe.payload,fe.meta):s(fe,m,l),[3,5];case 5:return Te=n&&!n.dispatchConditionRejection&&s.match(R)&&R.meta.condition,Te||p(R),[2,R]}})})}();return Object.assign(A,{abort:x,requestId:m,arg:l,unwrap:function(){return A.then(zi)}})}}return Object.assign(c,{pending:o,rejected:s,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function zi(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function Ui(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Qt="listenerMiddleware";se(Qt+"/add");se(Qt+"/removeAll");se(Qt+"/remove");var Rr;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);ri();let Li=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,r)=>(r&=63,r<36?e+=r.toString(36):r<62?e+=(r-26).toString(36).toUpperCase():r>62?e+="-":e+="_",e),"");const Dt=({appName:t,content:e})=>({id:Li(),appName:t,content:e,isOpen:!0,maximize:!1,minimize:!1,isFocused:!1,isDragging:!1}),X={MINIMIZE:"/icon-minimize.png",MAXIMIZE:"/icon-maximize.png",CANCEL:"/icon-cancel.png",HTML5:"https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white",CSS3:"https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white",TYPESCRIPT:"https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",JAVASCRIPT:"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",LIT:"https://img.shields.io/badge/lit-324FFF?style=for-the-badge&logo=lit&logoColor=white",REACT:"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",REDUX:"https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",NODE_JS:"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",STYLED_COMPONENT:"https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"},Hi=j` <div>
  <h2>안녕하세요</h2>
  <h3>류웅선입니다</h3>
  <p>프론트 엔드 개발자를 지망하고 있습니다</p>
</div>`,Bi=j` <div>
  <img src=${X.HTML5} />
  <img src=${X.CSS3} />
  <img src=${X.JAVASCRIPT} />
  <img src=${X.TYPESCRIPT} />
  <img src=${X.REACT} />
  <img src=${X.REDUX} />
  <img src=${X.STYLED_COMPONENT} />
  <img src=${X.LIT} />
  <img src=${X.NODE_JS} />
</div>`,Fi=j` <div>
  <h2>문의가 있는 경우 아래에 이슈를 남겨주세요</h2>
  <a href="https://github.com/unsnruu/unsnruu.github.io/issues"
    >깃허브 이슈로 바로가기</a
  >
</div>`,Wi={introduction:Dt({appName:"introduction",content:Hi}),techStack:Dt({appName:"techStack",content:Bi}),report:Dt({appName:"report",content:Fi})},Mr=Object.values(Wi),nn=Ii({name:"executionContext",initialState:Mr,reducers:{focusById:(t,e)=>t.map(r=>r.id!==e.payload||r.minimize?{...r,isFocused:!1}:{...r,isFocused:!0}),stopFocusing:t=>t.map(e=>({...e,isFocused:!1})),openAppById:(t,e)=>t.map(r=>r.id!==e.payload?r:Mr.filter(n=>n.id===e.payload)[0]),closeAppById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,isOpen:!1}),minimizeAppById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,minimize:!0,maximize:!1}),togglieMaiximizeById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,maximize:!r.maximize,minimize:!1}),startDraggingById:(t,e)=>t.map(r=>r.id!==e.payload?r:{...r,isDragging:!0}),stopDraggingAll:t=>t.map(e=>({...e,isDragging:!1}))}}),{closeAppById:Vi,focusById:Ht,togglieMaiximizeById:on,minimizeAppById:Xi,openAppById:qi,startDraggingById:Yi,stopDraggingAll:Ki,stopFocusing:Gi}=nn.actions,Zi=nn.reducer;var Me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ji(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var st={},Qi={get exports(){return st},set exports(t){st=t}};(function(t,e){(function(r,n){n(e)})(Me,function(r){function n(a,d){a.super_=d,a.prototype=Object.create(d.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})}function i(a,d){Object.defineProperty(this,"kind",{value:a,enumerable:!0}),d&&d.length&&Object.defineProperty(this,"path",{value:d,enumerable:!0})}function o(a,d,u){o.super_.call(this,"E",a),Object.defineProperty(this,"lhs",{value:d,enumerable:!0}),Object.defineProperty(this,"rhs",{value:u,enumerable:!0})}function s(a,d){s.super_.call(this,"N",a),Object.defineProperty(this,"rhs",{value:d,enumerable:!0})}function f(a,d){f.super_.call(this,"D",a),Object.defineProperty(this,"lhs",{value:d,enumerable:!0})}function c(a,d,u){c.super_.call(this,"A",a),Object.defineProperty(this,"index",{value:d,enumerable:!0}),Object.defineProperty(this,"item",{value:u,enumerable:!0})}function l(a,d,u){var g=a.slice((u||d)+1||a.length);return a.length=d<0?a.length+d:d,a.push.apply(a,g),a}function p(a){var d=typeof a>"u"?"undefined":ye(a);return d!=="object"?d:a===Math?"math":a===null?"null":Array.isArray(a)?"array":Object.prototype.toString.call(a)==="[object Date]"?"date":typeof a.toString=="function"&&/^\/.*\//.test(a.toString())?"regexp":"object"}function h(a,d,u,g,$,w,_){$=$||[],_=_||[];var O=$.slice(0);if(typeof w<"u"){if(g){if(typeof g=="function"&&g(O,w))return;if((typeof g>"u"?"undefined":ye(g))==="object"){if(g.prefilter&&g.prefilter(O,w))return;if(g.normalize){var V=g.normalize(O,w,a,d);V&&(a=V[0],d=V[1])}}}O.push(w)}p(a)==="regexp"&&p(d)==="regexp"&&(a=a.toString(),d=d.toString());var G=typeof a>"u"?"undefined":ye(a),F=typeof d>"u"?"undefined":ye(d),L=G!=="undefined"||_&&_[_.length-1].lhs&&_[_.length-1].lhs.hasOwnProperty(w),Z=F!=="undefined"||_&&_[_.length-1].rhs&&_[_.length-1].rhs.hasOwnProperty(w);if(!L&&Z)u(new s(O,d));else if(!Z&&L)u(new f(O,a));else if(p(a)!==p(d))u(new o(O,a,d));else if(p(a)==="date"&&a-d!==0)u(new o(O,a,d));else if(G==="object"&&a!==null&&d!==null)if(_.filter(function(D){return D.lhs===a}).length)a!==d&&u(new o(O,a,d));else{if(_.push({lhs:a,rhs:d}),Array.isArray(a)){var S;for(a.length,S=0;S<a.length;S++)S>=d.length?u(new c(O,S,new f(void 0,a[S]))):h(a[S],d[S],u,g,O,S,_);for(;S<d.length;)u(new c(O,S,new s(void 0,d[S++])))}else{var he=Object.keys(a),te=Object.keys(d);he.forEach(function(D,be){var De=te.indexOf(D);De>=0?(h(a[D],d[D],u,g,O,D,_),te=l(te,De)):h(a[D],void 0,u,g,O,D,_)}),te.forEach(function(D){h(void 0,d[D],u,g,O,D,_)})}_.length=_.length-1}else a!==d&&(G==="number"&&isNaN(a)&&isNaN(d)||u(new o(O,a,d)))}function v(a,d,u,g){return g=g||[],h(a,d,function($){$&&g.push($)},u),g.length?g:void 0}function m(a,d,u){if(u.path&&u.path.length){var g,$=a[d],w=u.path.length-1;for(g=0;g<w;g++)$=$[u.path[g]];switch(u.kind){case"A":m($[u.path[g]],u.index,u.item);break;case"D":delete $[u.path[g]];break;case"E":case"N":$[u.path[g]]=u.rhs}}else switch(u.kind){case"A":m(a[d],u.index,u.item);break;case"D":a=l(a,d);break;case"E":case"N":a[d]=u.rhs}return a}function b(a,d,u){if(a&&d&&u&&u.kind){for(var g=a,$=-1,w=u.path?u.path.length-1:0;++$<w;)typeof g[u.path[$]]>"u"&&(g[u.path[$]]=typeof u.path[$]=="number"?[]:{}),g=g[u.path[$]];switch(u.kind){case"A":m(u.path?g[u.path[$]]:g,u.index,u.item);break;case"D":delete g[u.path[$]];break;case"E":case"N":g[u.path[$]]=u.rhs}}}function y(a,d,u){if(u.path&&u.path.length){var g,$=a[d],w=u.path.length-1;for(g=0;g<w;g++)$=$[u.path[g]];switch(u.kind){case"A":y($[u.path[g]],u.index,u.item);break;case"D":$[u.path[g]]=u.lhs;break;case"E":$[u.path[g]]=u.lhs;break;case"N":delete $[u.path[g]]}}else switch(u.kind){case"A":y(a[d],u.index,u.item);break;case"D":a[d]=u.lhs;break;case"E":a[d]=u.lhs;break;case"N":a=l(a,d)}return a}function x(a,d,u){if(a&&d&&u&&u.kind){var g,$,w=a;for($=u.path.length-1,g=0;g<$;g++)typeof w[u.path[g]]>"u"&&(w[u.path[g]]={}),w=w[u.path[g]];switch(u.kind){case"A":y(w[u.path[g]],u.index,u.item);break;case"D":w[u.path[g]]=u.lhs;break;case"E":w[u.path[g]]=u.lhs;break;case"N":delete w[u.path[g]]}}}function A(a,d,u){if(a&&d){var g=function($){u&&!u(a,d,$)||b(a,d,$)};h(a,d,g)}}function E(a){return"color: "+or[a].color+"; font-weight: bold"}function P(a){var d=a.kind,u=a.path,g=a.lhs,$=a.rhs,w=a.index,_=a.item;switch(d){case"E":return[u.join("."),g,"→",$];case"N":return[u.join("."),$];case"D":return[u.join(".")];case"A":return[u.join(".")+"["+w+"]",_];default:return[]}}function R(a,d,u,g){var $=v(a,d);try{g?u.groupCollapsed("diff"):u.group("diff")}catch{u.log("diff")}$?$.forEach(function(w){var _=w.kind,O=P(w);u.log.apply(u,["%c "+or[_].text,E(_)].concat(ir(O)))}):u.log("—— no diff ——");try{u.groupEnd()}catch{u.log("—— diff end —— ")}}function M(a,d,u,g){switch(typeof a>"u"?"undefined":ye(a)){case"object":return typeof a[g]=="function"?a[g].apply(a,ir(u)):a[g];case"function":return a(d);default:return a}}function ce(a){var d=a.timestamp,u=a.duration;return function(g,$,w){var _=["action"];return _.push("%c"+String(g.type)),d&&_.push("%c@ "+$),u&&_.push("%c(in "+w.toFixed(2)+" ms)"),_.join(" ")}}function fe(a,d){var u=d.logger,g=d.actionTransformer,$=d.titleFormatter,w=$===void 0?ce(d):$,_=d.collapsed,O=d.colors,V=d.level,G=d.diff,F=typeof d.titleFormatter>"u";a.forEach(function(L,Z){var S=L.started,he=L.startedTime,te=L.action,D=L.prevState,be=L.error,De=L.took,pe=L.nextState,dt=a[Z+1];dt&&(pe=dt.prevState,De=dt.started-S);var Q=g(te),lr=typeof _=="function"?_(function(){return pe},te,L):_,ln=an(he),un=O.title?"color: "+O.title(Q)+";":"",Ie=["color: gray; font-weight: lighter;"];Ie.push(un),d.timestamp&&Ie.push("color: gray; font-weight: lighter;"),d.duration&&Ie.push("color: gray; font-weight: lighter;");var Ne=w(Q,ln,De);try{lr?O.title&&F?u.groupCollapsed.apply(u,["%c "+Ne].concat(Ie)):u.groupCollapsed(Ne):O.title&&F?u.group.apply(u,["%c "+Ne].concat(Ie)):u.group(Ne)}catch{u.log(Ne)}var ht=M(V,Q,[D],"prevState"),pt=M(V,Q,[Q],"action"),vt=M(V,Q,[be,D],"error"),gt=M(V,Q,[pe],"nextState");if(ht)if(O.prevState){var cn="color: "+O.prevState(D)+"; font-weight: bold";u[ht]("%c prev state",cn,D)}else u[ht]("prev state",D);if(pt)if(O.action){var fn="color: "+O.action(Q)+"; font-weight: bold";u[pt]("%c action    ",fn,Q)}else u[pt]("action    ",Q);if(be&&vt)if(O.error){var dn="color: "+O.error(be,D)+"; font-weight: bold;";u[vt]("%c error     ",dn,be)}else u[vt]("error     ",be);if(gt)if(O.nextState){var hn="color: "+O.nextState(pe)+"; font-weight: bold";u[gt]("%c next state",hn,pe)}else u[gt]("next state",pe);G&&R(D,pe,u,lr);try{u.groupEnd()}catch{u.log("—— log end ——")}})}function Te(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=Object.assign({},sr,a),u=d.logger,g=d.stateTransformer,$=d.errorTransformer,w=d.predicate,_=d.logErrors,O=d.diffPredicate;if(typeof u>"u")return function(){return function(G){return function(F){return G(F)}}};if(a.getState&&a.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(G){return function(F){return G(F)}}};var V=[];return function(G){var F=G.getState;return function(L){return function(Z){if(typeof w=="function"&&!w(F,Z))return L(Z);var S={};V.push(S),S.started=nr.now(),S.startedTime=new Date,S.prevState=g(F()),S.action=Z;var he=void 0;if(_)try{he=L(Z)}catch(D){S.error=$(D)}else he=L(Z);S.took=nr.now()-S.started,S.nextState=g(F());var te=d.diff&&typeof O=="function"?O(F,Z):d.diff;if(fe(V,Object.assign({},d,{diff:te})),V.length=0,S.error)throw S.error;return he}}}}var K,I,de=function(a,d){return new Array(d+1).join(a)},Ke=function(a,d){return de("0",d-a.toString().length)+a},an=function(a){return Ke(a.getHours(),2)+":"+Ke(a.getMinutes(),2)+":"+Ke(a.getSeconds(),2)+"."+Ke(a.getMilliseconds(),3)},nr=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ir=function(a){if(Array.isArray(a)){for(var d=0,u=Array(a.length);d<a.length;d++)u[d]=a[d];return u}return Array.from(a)},Ge=[];K=(typeof Me>"u"?"undefined":ye(Me))==="object"&&Me?Me:typeof window<"u"?window:{},I=K.DeepDiff,I&&Ge.push(function(){typeof I<"u"&&K.DeepDiff===v&&(K.DeepDiff=I,I=void 0)}),n(o,i),n(s,i),n(f,i),n(c,i),Object.defineProperties(v,{diff:{value:v,enumerable:!0},observableDiff:{value:h,enumerable:!0},applyDiff:{value:A,enumerable:!0},applyChange:{value:b,enumerable:!0},revertChange:{value:x,enumerable:!0},isConflict:{value:function(){return typeof I<"u"},enumerable:!0},noConflict:{value:function(){return Ge&&(Ge.forEach(function(a){a()}),Ge=null),v},enumerable:!0}});var or={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},sr={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(a){return a},actionTransformer:function(a){return a},errorTransformer:function(a){return a},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},ar=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=a.dispatch,u=a.getState;return typeof d=="function"||typeof u=="function"?Te()({dispatch:d,getState:u}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};r.defaults=sr,r.createLogger=Te,r.logger=ar,r.default=ar,Object.defineProperty(r,"__esModule",{value:!0})})})(Qi,st);const eo=Ji(st),H=Ci({reducer:{executionContext:Zi},middleware:t=>t().concat(eo)});var to=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,Y=(t,e,r,n)=>{for(var i=n>1?void 0:n?ro(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&to(e,r,i),i};let B=class extends z{constructor(){super(...arguments),this.header="",this.maximize=!1,this.appId=null,this.isFocused=!1,this.isDragging=!1,this.posX=Math.random()*100+100,this.posY=Math.random()*100+100,this.shiftX=0,this.shiftY=0,this.width=Math.random()*300+xt,this.height=Math.random()*300+At}_mousedownHeader(t){if(!this.appId||this.maximize)return;H.dispatch(Yi(this.appId)),H.dispatch(Ht(this.appId));let e=t.clientX-this.getBoundingClientRect().left,r=t.clientY-this.getBoundingClientRect().top;const n=({pageX:o,pageY:s})=>{let f=o-e,c=s-r;f<0&&(f=0),c<0&&(c=0),this.posX=f,this.posY=c},i=o=>{this.isDragging&&n(o)};n(t),document.addEventListener("mousemove",i),this.onmouseup=function(){document.removeEventListener("mousemove",i),this.onmouseup=null}}_mouseDownOutline(t){if(!(t.target instanceof Element)||!t.target.matches(".outline"))return;const e=({pageX:n,pageY:i})=>{let o=n-this.posX,s=i-this.posY;this.width=o<xt?xt:o,this.height=s<At?At:s},r=n=>{e(n)};e(t),document.addEventListener("mousemove",r),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",r)})}_focus(){this.appId&&H.dispatch(Ht(this.appId))}_dbClick(){this.appId&&H.dispatch(on(this.appId))}render(){const t=j`
      <style>
        :host {
          z-index: ${this.isFocused?99:0};
          left: ${this.maximize?0:this.posX}px;
          top: ${this.maximize?0:this.posY}px;
        }
      </style>
    `,e={width:this.maximize?"100%":this.width+"px",height:this.maximize?"100%":this.height+"px"};return j`
      ${t}
      <div
        id="container"
        style=${Gn(e)}
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
    `}};B.styles=[Ye,Xn,qn,Yn,Kn];Y([T()],B.prototype,"header",2);Y([T()],B.prototype,"maximize",2);Y([T()],B.prototype,"appId",2);Y([T()],B.prototype,"isFocused",2);Y([T()],B.prototype,"isDragging",2);Y([ue()],B.prototype,"posX",2);Y([ue()],B.prototype,"posY",2);Y([ue()],B.prototype,"shiftX",2);Y([ue()],B.prototype,"shiftY",2);Y([ue()],B.prototype,"width",2);Y([ue()],B.prototype,"height",2);B=Y([q("pop-up")],B);var no=Object.defineProperty,io=Object.getOwnPropertyDescriptor,er=(t,e,r,n)=>{for(var i=n>1?void 0:n?io(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&no(e,r,i),i};let Ve=class extends z{constructor(){super(...arguments),this.header="",this.appId=null}_close(){this.appId&&H.dispatch(Vi(this.appId))}_minimize(){this.appId&&H.dispatch(Xi(this.appId))}_maximize(){this.appId&&H.dispatch(on(this.appId))}render(){return j`
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
    `}};Ve.styles=U`
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
  `;er([T()],Ve.prototype,"header",2);er([T()],Ve.prototype,"appId",2);Ve=er([q("pop-up-header")],Ve);var oo=Object.defineProperty,so=Object.getOwnPropertyDescriptor,ao=(t,e,r,n)=>{for(var i=n>1?void 0:n?so(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&oo(e,r,i),i};const lo="/icon-window.png";let Bt=class extends z{render(){return j`
      <core-button .text=${"Start"} .src=${lo}></core-button>
    `}};Bt.styles=U`
    :host {
      height: 100%;
      font-family: "Press Start 2P", cursive;
      font-size: 0.5rem;
      letter-spacing: -1px;
      user-select: none;
      cursor: pointer;
    }
  `;Bt=ao([q("start-button")],Bt);var uo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,tr=(t,e,r,n)=>{for(var i=n>1?void 0:n?co(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&uo(e,r,i),i};let Xe=class extends z{constructor(){super(...arguments),this.name="Default",this.isFocused=!1}render(){return j`
      <core-button
        class=${this.isFocused?"active":""}
        .text=${this.name}
      ></core-button>
    `}};Xe.styles=U`
    :host {
      height: 100%;
      cursor: pointer;
      user-select: none;
    }
  `;tr([T()],Xe.prototype,"name",2);tr([T()],Xe.prototype,"isFocused",2);Xe=tr([q("task-button")],Xe);var fo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,sn=(t,e,r,n)=>{for(var i=n>1?void 0:n?ho(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&fo(e,r,i),i};let at=class extends z{constructor(){super(...arguments),this.apps=[]}createClickHandler({id:t,minimize:e}){return()=>{e&&H.dispatch(qi(t)),H.dispatch(Ht(t))}}taskButtonsTemplate(){return this.apps.map(t=>j`
        <flex-item @click=${this.createClickHandler(t)}>
          <task-button
            .name=${t.appName}
            .isFocused=${t.isFocused}
          ></task-button>
        </flex-item>
      `)}render(){return j`
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
    `}};at.styles=U`
    :host {
      box-sizing: border-box;
      position: absolute;
      bottom: 0px;
      width: 100vw;
      height: ${qr}px;
      background-color: var(--main-gray);
      border-top: 1px solid white;
      outline: 1px solid var(--main-gray);
      overflow: visible;
      flex-wrap: wrap;
      z-index: 99;
    }
  `;sn([T()],at.prototype,"apps",2);at=sn([q("task-bar")],at);class po extends z{connectedCallback(){super.connectedCallback(),this._unsubscribe=H.subscribe(()=>this._setState(H.getState())),this._setState(H.getState())}disconnectedCallback(){this._unsubscribe(),super.disconnectedCallback()}}var vo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,rr=(t,e,r,n)=>{for(var i=n>1?void 0:n?go(e,r):e,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&vo(e,r,i),i};let qe=class extends po{constructor(){super(...arguments),this.executionContext=[],this.isDragging=!1}_setState(t){this.executionContext=t.executionContext}popupTemplate(){return this.executionContext.filter(e=>e.isOpen).map(({appName:e,id:r,isFocused:n,minimize:i,maximize:o,isDragging:s,content:f})=>j`
          <pop-up
            .header=${e}
            .appId=${r}
            .maximize=${o}
            .isFocused=${n}
            .isDragging=${s}
            class=${Xr({maximize:o,minimize:i})}
          >
            ${f}
          </pop-up>
        `)}_click(t){t.target instanceof Element&&t.target.matches("#background")&&H.dispatch(Gi()),H.dispatch(Ki())}render(){return j`
      <div id="background" @click=${this._click}>
        <div>${this.popupTemplate()}</div>
        <task-bar .apps=${this.executionContext}></task-bar>
      </div>
    `}};qe.styles=U`
    #background {
      width: 100vw;
      height: 100vh;
    }
  `;rr([ue()],qe.prototype,"executionContext",2);rr([ue()],qe.prototype,"isDragging",2);qe=rr([q("home-page")],qe);
