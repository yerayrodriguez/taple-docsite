"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=d(n),h=a,p=f["".concat(c,".").concat(h)]||f[h]||l[h]||i;return n?r.createElement(p,o(o({ref:t},u),{},{components:n})):r.createElement(p,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={description:"Definition of the data structures that model the state of subjects"},o="Schemas",s={unversionedId:"discover/schemas",id:"version-0.2/discover/schemas",title:"Schemas",description:"Definition of the data structures that model the state of subjects",source:"@site/versioned_docs/version-0.2/discover/schemas.md",sourceDirName:"discover",slug:"/discover/schemas",permalink:"/docs/0.2/discover/schemas",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{description:"Definition of the data structures that model the state of subjects"},sidebar:"discoverSidebar",previous:{title:"Subjects",permalink:"/docs/0.2/discover/subjects"},next:{title:"Events",permalink:"/docs/0.2/discover/events"}},c={},d=[{value:"Definition and distribution",id:"definition-and-distribution",level:2},{value:"Schema structure",id:"schema-structure",level:2}],u={toc:d};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"schemas"},"Schemas"),(0,a.kt)("p",null,"In ",(0,a.kt)("strong",{parentName:"p"},"TAPLE")," each subject stores a microledger and a ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.2/discover/subjects#subject-state"},"state"),". The state is the representation of the information stored by a subject at a given instant, usually the current moment. The structure of this state is defined by a schema, which is nothing more than a set of rules that allow to define this structure, and therefore, to validate it.  "),(0,a.kt)("h2",{id:"definition-and-distribution"},"Definition and distribution"),(0,a.kt)("p",null,"Schemas are defined within a governance, and are therefore ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.2/discover/governance#governance-distribution"},"distributed")," together with it. Different governance may define equivalent schemas, however, for all intents and purposes, since they belong to different governance, they are considered to be different schemas."),(0,a.kt)("h2",{id:"schema-structure"},"Schema structure"),(0,a.kt)("p",null,"The schemas are composed of 2 elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A unique identifier. Each schema has an identifier that allows it to be referenced within the governance in which it is defined. Different schemas can be defined within the same governance. In addition, as long as they have different identifiers, you can create schemas with the same content. "),(0,a.kt)("li",{parentName:"ul"},"A content. It is the data structure used to validate the status of the subjects. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": {"type":"string"},       \n    "content": {"type": "object"}  \n}\n')),(0,a.kt)("p",null,"Within TAPLE ",(0,a.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSON-Schema")," is used for the definition of schemas."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you want to learn how to define a a JSON-Schema visit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.2/learn/json-schema"},"Learn JSON-Schema")," page.")))}l.isMDXComponent=!0}}]);