import{a,g as _e,$ as P}from"./index.Iqf5X9Hs.js";var re={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=a,Me=Symbol.for("react.element"),je=Symbol.for("react.fragment"),Ve=Object.prototype.hasOwnProperty,Ae=De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ie={key:!0,ref:!0,__self:!0,__source:!0};function se(e,t,n){var o,r={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)Ve.call(t,o)&&!Ie.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:Me,type:e,key:s,ref:i,props:r,_owner:Ae.current}}z.Fragment=je;z.jsx=se;z.jsxs=se;re.exports=z;var f=re.exports;const ee=e=>{let t;const n=new Set,o=(v,l)=>{const d=typeof v=="function"?v(t):v;if(!Object.is(d,t)){const h=t;t=l??(typeof d!="object"||d===null)?d:Object.assign({},t,d),n.forEach(m=>m(t,h))}},r=()=>t,u={setState:o,getState:r,getInitialState:()=>p,subscribe:v=>(n.add(v),()=>n.delete(v)),destroy:()=>{n.clear()}},p=t=e(o,r,u);return u},Ne=e=>e?ee(e):ee;var ae={exports:{}},ie={},ce={exports:{}},le={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=a;function Te(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Te,ke=A.useState,ze=A.useEffect,Be=A.useLayoutEffect,Ke=A.useDebugValue;function Le(e,t){var n=t(),o=ke({inst:{value:n,getSnapshot:t}}),r=o[0].inst,s=o[1];return Be(function(){r.value=n,r.getSnapshot=t,U(r)&&s({inst:r})},[e,n,t]),ze(function(){return U(r)&&s({inst:r}),e(function(){U(r)&&s({inst:r})})},[e]),Ke(n),n}function U(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function Fe(e,t){return t()}var Ue=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Fe:Le;le.useSyncExternalStore=A.useSyncExternalStore!==void 0?A.useSyncExternalStore:Ue;ce.exports=le;var He=ce.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=a,We=He;function qe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:qe,Xe=We.useSyncExternalStore,Ge=B.useRef,Je=B.useEffect,Ze=B.useMemo,Qe=B.useDebugValue;ie.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var s=Ge(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=Ze(function(){function u(h){if(!p){if(p=!0,v=h,h=o(h),r!==void 0&&i.hasValue){var m=i.value;if(r(m,h))return l=m}return l=h}if(m=l,Ye(v,h))return m;var $=o(h);return r!==void 0&&r(m,$)?m:(v=h,l=$)}var p=!1,v,l,d=n===void 0?null:n;return[function(){return u(t())},d===null?void 0:function(){return u(d())}]},[t,n,o,r]);var c=Xe(e,s[0],s[1]);return Je(function(){i.hasValue=!0,i.value=c},[c]),Qe(c),c};ae.exports=ie;var et=ae.exports;const tt=_e(et),{useDebugValue:nt}=P,{useSyncExternalStoreWithSelector:ot}=tt;const rt=e=>e;function st(e,t=rt,n){const o=ot(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return nt(o),o}const te=e=>{const t=typeof e=="function"?Ne(e):e,n=(o,r)=>st(t,o,r);return Object.assign(n,t),n},at=e=>e?te(e):te,H=at(e=>({isPlaying:!1,currentMusic:{playlist:null,song:null,songs:[]},volume:1,setVolume:t=>e({volume:t}),setIsPlaying:t=>e({isPlaying:t}),setCurrentMusic:t=>e({currentMusic:t})}));function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function ue(e,[t,n]){return Math.min(n,Math.max(t,e))}function V(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),n===!1||!r.defaultPrevented)return t?.(r)}}function it(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function de(...e){return t=>e.forEach(n=>it(n,t))}function _(...e){return a.useCallback(de(...e),e)}function fe(e,t=[]){let n=[];function o(s,i){const c=a.createContext(i),u=n.length;n=[...n,i];function p(l){const{scope:d,children:h,...m}=l,$=d?.[e][u]||c,S=a.useMemo(()=>m,Object.values(m));return a.createElement($.Provider,{value:S},h)}function v(l,d){const h=d?.[e][u]||c,m=a.useContext(h);if(m)return m;if(i!==void 0)return i;throw new Error(`\`${l}\` must be used within \`${s}\``)}return p.displayName=s+"Provider",[p,v]}const r=()=>{const s=n.map(i=>a.createContext(i));return function(c){const u=c?.[e]||s;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])}};return r.scopeName=e,[o,ct(r,...t)]}function ct(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const i=o.reduce((c,{useScope:u,scopeName:p})=>{const l=u(s)[`__scope${p}`];return{...c,...l}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function me(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function lt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,r]=ut({defaultProp:t,onChange:n}),s=e!==void 0,i=s?e:o,c=me(n),u=a.useCallback(p=>{if(s){const l=typeof p=="function"?p(e):p;l!==e&&c(l)}else r(p)},[s,e,r,c]);return[i,u]}function ut({defaultProp:e,onChange:t}){const n=a.useState(e),[o]=n,r=a.useRef(o),s=me(t);return a.useEffect(()=>{r.current!==o&&(s(o),r.current=o)},[o,r,s]),n}const dt=a.createContext(void 0);function ft(e){const t=a.useContext(dt);return e||t||"ltr"}function mt(e){const t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const pt=globalThis?.document?a.useLayoutEffect:()=>{};function ht(e){const[t,n]=a.useState(void 0);return pt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let i,c;if("borderBoxSize"in s){const u=s.borderBoxSize,p=Array.isArray(u)?u[0]:u;i=p.inlineSize,c=p.blockSize}else i=e.offsetWidth,c=e.offsetHeight;n({width:i,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}const k=a.forwardRef((e,t)=>{const{children:n,...o}=e,r=a.Children.toArray(n),s=r.find($t);if(s){const i=s.props.children,c=r.map(u=>u===s?a.Children.count(i)>1?a.Children.only(null):a.isValidElement(i)?i.props.children:null:u);return a.createElement(W,w({},o,{ref:t}),a.isValidElement(i)?a.cloneElement(i,void 0,c):null)}return a.createElement(W,w({},o,{ref:t}),n)});k.displayName="Slot";const W=a.forwardRef((e,t)=>{const{children:n,...o}=e;return a.isValidElement(n)?a.cloneElement(n,{...St(o,n.props),ref:t?de(t,n.ref):n.ref}):a.Children.count(n)>1?a.Children.only(null):null});W.displayName="SlotClone";const vt=({children:e})=>a.createElement(a.Fragment,null,e);function $t(e){return a.isValidElement(e)&&e.type===vt}function St(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...c)=>{s(...c),r(...c)}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}const xt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],K=xt.reduce((e,t)=>{const n=a.forwardRef((o,r)=>{const{asChild:s,...i}=o,c=s?k:t;return a.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),a.createElement(c,w({},i,{ref:r}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function gt(e){const t=e+"CollectionProvider",[n,o]=fe(t),[r,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=h=>{const{scope:m,children:$}=h,S=P.useRef(null),g=P.useRef(new Map).current;return P.createElement(r,{scope:m,itemMap:g,collectionRef:S},$)},c=e+"CollectionSlot",u=P.forwardRef((h,m)=>{const{scope:$,children:S}=h,g=s(c,$),y=_(m,g.collectionRef);return P.createElement(k,{ref:y},S)}),p=e+"CollectionItemSlot",v="data-radix-collection-item",l=P.forwardRef((h,m)=>{const{scope:$,children:S,...g}=h,y=P.useRef(null),x=_(m,y),E=s(p,$);return P.useEffect(()=>(E.itemMap.set(y,{ref:y,...g}),()=>void E.itemMap.delete(y))),P.createElement(k,{[v]:"",ref:x},S)});function d(h){const m=s(e+"CollectionConsumer",h);return P.useCallback(()=>{const S=m.collectionRef.current;if(!S)return[];const g=Array.from(S.querySelectorAll(`[${v}]`));return Array.from(m.itemMap.values()).sort((E,D)=>g.indexOf(E.ref.current)-g.indexOf(D.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:i,Slot:u,ItemSlot:l},d,o]}const pe=["PageUp","PageDown"],he=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ve={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},T="Slider",[q,bt,Et]=gt(T),[$e,Qt]=fe(T,[Et]),[yt,L]=$e(T),wt=a.forwardRef((e,t)=>{const{name:n,min:o=0,max:r=100,step:s=1,orientation:i="horizontal",disabled:c=!1,minStepsBetweenThumbs:u=0,defaultValue:p=[o],value:v,onValueChange:l=()=>{},onValueCommit:d=()=>{},inverted:h=!1,...m}=e,[$,S]=a.useState(null),g=_(t,b=>S(b)),y=a.useRef(new Set),x=a.useRef(0),E=i==="horizontal",D=$?!!$.closest("form"):!0,G=E?Ct:Rt,[C=[],we]=lt({prop:v,defaultProp:p,onChange:b=>{var R;(R=[...y.current][x.current])===null||R===void 0||R.focus(),l(b)}}),J=a.useRef(C);function Ce(b){const R=Nt(C,b);I(b,R)}function Re(b){I(b,x.current)}function Pe(){const b=J.current[x.current];C[x.current]!==b&&d(C)}function I(b,R,{commit:O}={commit:!1}){const Z=zt(s),F=Bt(Math.round((b-o)/s)*s+o,Z),N=ue(F,[o,r]);we((j=[])=>{const M=At(j,N,R);if(kt(M,u*s)){x.current=M.indexOf(N);const Q=String(M)!==String(j);return Q&&O&&d(M),Q?M:j}else return j})}return a.createElement(yt,{scope:e.__scopeSlider,disabled:c,min:o,max:r,valueIndexToChangeRef:x,thumbs:y.current,values:C,orientation:i},a.createElement(q.Provider,{scope:e.__scopeSlider},a.createElement(q.Slot,{scope:e.__scopeSlider},a.createElement(G,w({"aria-disabled":c,"data-disabled":c?"":void 0},m,{ref:g,onPointerDown:V(m.onPointerDown,()=>{c||(J.current=C)}),min:o,max:r,inverted:h,onSlideStart:c?void 0:Ce,onSlideMove:c?void 0:Re,onSlideEnd:c?void 0:Pe,onHomeKeyDown:()=>!c&&I(o,0,{commit:!0}),onEndKeyDown:()=>!c&&I(r,C.length-1,{commit:!0}),onStepKeyDown:({event:b,direction:R})=>{if(!c){const F=pe.includes(b.key)||b.shiftKey&&he.includes(b.key)?10:1,N=x.current,j=C[N],M=s*F*R;I(j+M,N,{commit:!0})}}})))),D&&C.map((b,R)=>a.createElement(Vt,{key:R,name:n?n+(C.length>1?"[]":""):void 0,value:b})))}),[Se,xe]=$e(T,{startEdge:"left",endEdge:"right",size:"width",direction:1}),Ct=a.forwardRef((e,t)=>{const{min:n,max:o,dir:r,inverted:s,onSlideStart:i,onSlideMove:c,onSlideEnd:u,onStepKeyDown:p,...v}=e,[l,d]=a.useState(null),h=_(t,x=>d(x)),m=a.useRef(),$=ft(r),S=$==="ltr",g=S&&!s||!S&&s;function y(x){const E=m.current||l.getBoundingClientRect(),D=[0,E.width],C=Y(D,g?[n,o]:[o,n]);return m.current=E,C(x-E.left)}return a.createElement(Se,{scope:e.__scopeSlider,startEdge:g?"left":"right",endEdge:g?"right":"left",direction:g?1:-1,size:"width"},a.createElement(ge,w({dir:$,"data-orientation":"horizontal"},v,{ref:h,style:{...v.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:x=>{const E=y(x.clientX);i?.(E)},onSlideMove:x=>{const E=y(x.clientX);c?.(E)},onSlideEnd:()=>{m.current=void 0,u?.()},onStepKeyDown:x=>{const D=ve[g?"from-left":"from-right"].includes(x.key);p?.({event:x,direction:D?-1:1})}})))}),Rt=a.forwardRef((e,t)=>{const{min:n,max:o,inverted:r,onSlideStart:s,onSlideMove:i,onSlideEnd:c,onStepKeyDown:u,...p}=e,v=a.useRef(null),l=_(t,v),d=a.useRef(),h=!r;function m($){const S=d.current||v.current.getBoundingClientRect(),g=[0,S.height],x=Y(g,h?[o,n]:[n,o]);return d.current=S,x($-S.top)}return a.createElement(Se,{scope:e.__scopeSlider,startEdge:h?"bottom":"top",endEdge:h?"top":"bottom",size:"height",direction:h?1:-1},a.createElement(ge,w({"data-orientation":"vertical"},p,{ref:l,style:{...p.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:$=>{const S=m($.clientY);s?.(S)},onSlideMove:$=>{const S=m($.clientY);i?.(S)},onSlideEnd:()=>{d.current=void 0,c?.()},onStepKeyDown:$=>{const g=ve[h?"from-bottom":"from-top"].includes($.key);u?.({event:$,direction:g?-1:1})}})))}),ge=a.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:o,onSlideMove:r,onSlideEnd:s,onHomeKeyDown:i,onEndKeyDown:c,onStepKeyDown:u,...p}=e,v=L(T,n);return a.createElement(K.span,w({},p,{ref:t,onKeyDown:V(e.onKeyDown,l=>{l.key==="Home"?(i(l),l.preventDefault()):l.key==="End"?(c(l),l.preventDefault()):pe.concat(he).includes(l.key)&&(u(l),l.preventDefault())}),onPointerDown:V(e.onPointerDown,l=>{const d=l.target;d.setPointerCapture(l.pointerId),l.preventDefault(),v.thumbs.has(d)?d.focus():o(l)}),onPointerMove:V(e.onPointerMove,l=>{l.target.hasPointerCapture(l.pointerId)&&r(l)}),onPointerUp:V(e.onPointerUp,l=>{const d=l.target;d.hasPointerCapture(l.pointerId)&&(d.releasePointerCapture(l.pointerId),s(l))})}))}),Pt="SliderTrack",_t=a.forwardRef((e,t)=>{const{__scopeSlider:n,...o}=e,r=L(Pt,n);return a.createElement(K.span,w({"data-disabled":r.disabled?"":void 0,"data-orientation":r.orientation},o,{ref:t}))}),ne="SliderRange",Dt=a.forwardRef((e,t)=>{const{__scopeSlider:n,...o}=e,r=L(ne,n),s=xe(ne,n),i=a.useRef(null),c=_(t,i),u=r.values.length,p=r.values.map(d=>be(d,r.min,r.max)),v=u>1?Math.min(...p):0,l=100-Math.max(...p);return a.createElement(K.span,w({"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0},o,{ref:c,style:{...e.style,[s.startEdge]:v+"%",[s.endEdge]:l+"%"}}))}),oe="SliderThumb",Mt=a.forwardRef((e,t)=>{const n=bt(e.__scopeSlider),[o,r]=a.useState(null),s=_(t,c=>r(c)),i=a.useMemo(()=>o?n().findIndex(c=>c.ref.current===o):-1,[n,o]);return a.createElement(jt,w({},e,{ref:s,index:i}))}),jt=a.forwardRef((e,t)=>{const{__scopeSlider:n,index:o,...r}=e,s=L(oe,n),i=xe(oe,n),[c,u]=a.useState(null),p=_(t,S=>u(S)),v=ht(c),l=s.values[o],d=l===void 0?0:be(l,s.min,s.max),h=It(o,s.values.length),m=v?.[i.size],$=m?Tt(m,d,i.direction):0;return a.useEffect(()=>{if(c)return s.thumbs.add(c),()=>{s.thumbs.delete(c)}},[c,s.thumbs]),a.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[i.startEdge]:`calc(${d}% + ${$}px)`}},a.createElement(q.ItemSlot,{scope:e.__scopeSlider},a.createElement(K.span,w({role:"slider","aria-label":e["aria-label"]||h,"aria-valuemin":s.min,"aria-valuenow":l,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0},r,{ref:p,style:l===void 0?{display:"none"}:e.style,onFocus:V(e.onFocus,()=>{s.valueIndexToChangeRef.current=o})}))))}),Vt=e=>{const{value:t,...n}=e,o=a.useRef(null),r=mt(t);return a.useEffect(()=>{const s=o.current,i=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(i,"value").set;if(r!==t&&u){const p=new Event("input",{bubbles:!0});u.call(s,t),s.dispatchEvent(p)}},[r,t]),a.createElement("input",w({style:{display:"none"}},n,{ref:o,defaultValue:t}))};function At(e=[],t,n){const o=[...e];return o[n]=t,o.sort((r,s)=>r-s)}function be(e,t,n){const s=100/(n-t)*(e-t);return ue(s,[0,100])}function It(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Nt(e,t){if(e.length===1)return 0;const n=e.map(r=>Math.abs(r-t)),o=Math.min(...n);return n.indexOf(o)}function Tt(e,t,n){const o=e/2,s=Y([0,50],[0,o]);return(o-s(t)*n)*n}function Ot(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function kt(e,t){if(t>0){const n=Ot(e);return Math.min(...n)>=t}return!0}function Y(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const o=(t[1]-t[0])/(e[1]-e[0]);return t[0]+o*(n-e[0])}}function zt(e){return(String(e).split(".")[1]||"").length}function Bt(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}const Ee=wt,Kt=_t,Lt=Dt,Ft=Mt;function ye(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=ye(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function Ut(){for(var e,t,n=0,o="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=ye(e))&&(o&&(o+=" "),o+=t);return o}const X=a.forwardRef(({className:e,...t},n)=>f.jsxs(Ee,{ref:n,className:Ut("relative flex touch-none select-none items-center group",e),...t,children:[f.jsx(Kt,{className:"relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800",children:f.jsx(Lt,{className:"absolute h-full bg-white group-hover:bg-green-400"})}),f.jsx(Ft,{className:"hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));X.displayName=Ee.displayName;const Ht=({className:e})=>f.jsx("svg",{className:e,role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",children:f.jsx("path",{d:"M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"})}),Wt=({className:e})=>f.jsx("svg",{className:e,role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",children:f.jsx("path",{d:"M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"})}),qt=()=>f.jsxs("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-hidden":"true","aria-label":"Volumen apagado",viewBox:"0 0 16 16",children:[f.jsx("path",{d:"M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"}),f.jsx("path",{d:"M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"})]}),Yt=()=>f.jsxs("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-hidden":"true","aria-label":"Volumen alto",id:"volume-icon",viewBox:"0 0 16 16",children:[f.jsx("path",{d:"M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"}),f.jsx("path",{d:"M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"})]}),Xt=({image:e,title:t,artists:n})=>f.jsxs("div",{className:"flex items-center gap-2 relative overflow-hidden flex-row w-[190px]",children:[f.jsx("picture",{className:"w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden",children:f.jsx("img",{src:e,alt:t})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-sm font-bold block",children:t}),f.jsx("p",{className:"text-xs text-white/80",children:n?.join(", ")})]})]}),Gt=({audio:e})=>{const[t,n]=a.useState(0);a.useEffect(()=>(e.current.addEventListener("timeupdate",o),()=>{e.current.removeEventListener("timeupdate",o)}));const o=()=>{n(e.current.currentTime)},r=i=>{if(isNaN(i))return"0:00";const c=Math.floor(i/60),u=Math.floor(i%60);return`${c}:${u<10?`0${u}`:u}`},s=e?.current?.duration??0;return f.jsxs("div",{className:"flex text-xs gap-x-2 items-center ",children:[f.jsx("span",{className:"text-white/80 w-10 text-right",children:r(t)}),f.jsx(X,{defaultValue:[0],value:[t],max:e?.current?.duration??0,min:0,className:"w-[500px]",onValueChange:i=>{e.current.currentTime=i}}),f.jsx("span",{className:"text-white/80 w-10 text-left",children:s?r(s):null})]})},Jt=()=>{const e=H(r=>r.volume),t=H(r=>r.setVolume),n=a.useRef(e),o=()=>{e<.1?t(n.current):(n.current=e,t(0))};return f.jsxs("div",{className:"flex justify-center gap-x-2 text-white",children:[f.jsx("button",{className:"opacity-70 hover:opacity-100 transition",onClick:o,children:e<.1?f.jsx(qt,{}):f.jsx(Yt,{})}),f.jsx(X,{defaultValue:[50],value:[e*100],max:100,min:0,className:"w-24",onValueChange:r=>{const[s]=r,i=s/100;t(i)}})]})},en=()=>{const{isPlaying:e,setIsPlaying:t,currentMusic:n,volume:o}=H(i=>i),r=a.useRef();a.useEffect(()=>{e?r.current.play():r.current.pause()},[e]),a.useEffect(()=>{r.current.volume=o},[o]),a.useEffect(()=>{const{song:i,playlist:c}=n;if(i){const u=`/music/${c.id}/${c.id}.mp3`;r.current.src=u,r.current.volume=o,r.current.play()}},[n]);const s=()=>{t(!e)};return f.jsxs("div",{className:"flex justify-between flex-row w-full px-2 py-1 z-50",children:[f.jsx(Xt,{...n.song}),f.jsxs("div",{className:"flex flex-col justify-center gap-2 items-center",children:[f.jsx("button",{className:"bg-white rounded-full p-2",onClick:s,children:e?f.jsx(Ht,{className:"text-black"}):f.jsx(Wt,{className:"text-black"})}),f.jsx(Gt,{audio:r})]}),f.jsx("div",{className:"grid place-content-center",children:f.jsx(Jt,{})}),f.jsx("audio",{ref:r})]})};export{Ht as P,Wt as a,en as b,f as j,H as u};