"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(m,s(s({ref:t},l),{},{components:n})):a.createElement(m,s({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},s="Schemas",o={unversionedId:"discover/schemas",id:"version-0.1/discover/schemas",title:"Schemas",description:"In TAPLE each subject stores a microledger and a state. The state is the representation of the information stored by a subject at a given instant, usually the current moment. The structure of this state is defined by a schema, which is nothing more than a set of rules that allow to define this structure, and therefore, to validate it.",source:"@site/versioned_docs/version-0.1/discover/schemas.md",sourceDirName:"discover",slug:"/discover/schemas",permalink:"/docs/0.1/discover/schemas",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"discoverSidebar",previous:{title:"Subjects",permalink:"/docs/0.1/discover/subjects"},next:{title:"Events",permalink:"/docs/0.1/discover/events"}},c={},d=[{value:"Definition and distribution",id:"definition-and-distribution",level:2},{value:"Schema structure",id:"schema-structure",level:2},{value:"JSON Schema",id:"json-schema",level:3}],l={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schemas"},"Schemas"),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"TAPLE")," each subject stores a microledger and a ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.1/discover/subjects#subject-state"},"state"),". The state is the representation of the information stored by a subject at a given instant, usually the current moment. The structure of this state is defined by a schema, which is nothing more than a set of rules that allow to define this structure, and therefore, to validate it.  "),(0,r.kt)("h2",{id:"definition-and-distribution"},"Definition and distribution"),(0,r.kt)("p",null,"Schemas are defined within a governance, and are therefore ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.1/discover/governance#governance-distribution"},"distributed")," together with it. Different governance may define equivalent schemas, however, for all intents and purposes, since they belong to different governance, they are considered to be different schemas."),(0,r.kt)("h2",{id:"schema-structure"},"Schema structure"),(0,r.kt)("p",null,"The schemas are composed of 2 elements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A unique identifier. Each schema has an identifier that allows it to be referenced within the governance in which it is defined. Different schemas can be defined within the same governance. In addition, as long as they have different identifiers, you can create schemas with the same content. "),(0,r.kt)("li",{parentName:"ul"},"A content. It is the data structure used to validate the status of the subjects. Within TAPLE ",(0,r.kt)("a",{parentName:"li",href:"https://json-schema.org"},"JSON-Schema")," is used for the definition of schemas.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": {"type":"string"},       // Schema ID within the governance\n    "content": {"type": "object"}  // JSON-Schema object\n}\n')),(0,r.kt)("h3",{id:"json-schema"},"JSON Schema"),(0,r.kt)("p",null,"The JSON Schema ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/specification.html"},"specification")," is in ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/specification-links.html"},"DRAFT status in the IETF"),", however, it is widely used today and is practically considered a de facto standard."),(0,r.kt)("p",null,"JSON-Schema establishes a set of rules that model and validate a data structure. The following example defines a schema that models a simple data structure with 2 fields: id and value. It is also indicated that the id is mandatory and that no additional fields are allowed. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "additionalProperties": false,\n  "required": [\n    "id"\n  ],\n  "properties": {\n    "id": {"type":"string"},\n    "value": {"type":"integer"}\n  }\n}\n')),(0,r.kt)("admonition",{title:"Valid JSON Object",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "id_1",\n    "value": 23\n}\n'))),(0,r.kt)("admonition",{title:"Invalid JSON Objects",type:"danger"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": 3 // id is not defined\n}\n')),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "id_3",\n    "value": 3,\n    "count": 5    // additional properties are not allowed\n}\n'))),(0,r.kt)("admonition",{title:"JSON Schema online validator",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can test this behavior using this ",(0,r.kt)("a",{parentName:"p",href:"https://www.jsonschemavalidator.net/"},"online and interactive JSON Schema validator"),".")),(0,r.kt)("p",null,"If you want to learn how to define a a JSON-Schema visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.1/learn/operational-guides/creating-a-json-schema"},"Creating a JSON-Schema")," page."))}h.isMDXComponent=!0}}]);