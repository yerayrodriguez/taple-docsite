"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7918],{12657:(e,n,t)=>{t.r(n),t.d(n,{default:()=>H});var r=t(67294),c=t(10833),l=t(65130),o=t(21602),a=t(86010),i=t(87524),u=t(42768),s=t(23120),d=t(44364),m=t(47211),f=t(6781),v=t(55938),h=t(91419),E=t(31986);const p="docItemContainer_Djhp",g="docItemCol_VOVn";function L(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=(0,l.k)(),t=(0,i.i)(),c=e.hide_table_of_contents,o=!c&&n.length>0;return{hidden:c,mobile:o?r.createElement(f.Z,null):void 0,desktop:!o||"desktop"!==t&&"ssr"!==t?void 0:r.createElement(v.Z,null)}}();return r.createElement("div",{className:"row"},r.createElement("div",{className:(0,a.Z)("col",!t.hidden&&g)},r.createElement(s.Z,null),r.createElement("div",{className:p},r.createElement("article",null,r.createElement(E.Z,null),r.createElement(d.Z,null),t.mobile,r.createElement(h.Z,null,n),r.createElement(m.Z,null)),r.createElement(u.Z,null))),t.desktop&&r.createElement("div",{className:"col col--3"},t.desktop))}function H(e){const n=`docs-doc-id-${e.content.metadata.unversionedId}`,t=e.content;return r.createElement(l.b,{content:e.content},r.createElement(c.FG,{className:n},r.createElement(o.Z,null),r.createElement(L,null,r.createElement(t,null))))}},65130:(e,n,t)=>{t.d(n,{b:()=>o,k:()=>a});var r=t(67294),c=t(902);const l=r.createContext(null);function o(e){let{children:n,content:t}=e;const c=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return r.createElement(l.Provider,{value:c},n)}function a(){const e=(0,r.useContext)(l);if(null===e)throw new c.i6("DocProvider");return e}},96841:(e,n,t)=>{t.d(n,{S:()=>i});var r=t(67294),c=t(86668);function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>l(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function a(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,c.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function i(e){const n=(0,r.useRef)(void 0),t=a();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:c,minHeadingLevel:l,maxHeadingLevel:a}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let c=n;c<=t;c+=1)r.push(`h${c}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),u=o(i,{anchorTopOffset:t.current}),s=e.find((e=>u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(c),e.classList.add(c),n.current=e):e.classList.remove(c)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}},39665:(e,n,t)=>{t.d(n,{a:()=>l,b:()=>a});var r=t(67294);function c(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...c}=e;t>=0?n[t].children.push(c):r.push(c)})),r}function l(e){return(0,r.useMemo)((()=>c(e)),[e])}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,r.useMemo)((()=>o({toc:c(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}}}]);