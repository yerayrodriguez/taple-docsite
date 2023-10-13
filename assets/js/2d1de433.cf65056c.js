"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Transfers",s={unversionedId:"build/assets-traceability/transfers",id:"version-0.2/build/assets-traceability/transfers",title:"Transfers",description:"In this section, we will address the transfer of ownership of a subject of type Wine to a citizen interested in acquiring it.",source:"@site/versioned_docs/version-0.2/build/assets-traceability/transfers.md",sourceDirName:"build/assets-traceability",slug:"/build/assets-traceability/transfers",permalink:"/docs/0.2/build/assets-traceability/transfers",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Approvals",permalink:"/docs/0.2/build/assets-traceability/approvals"},next:{title:"Segmentation",permalink:"/docs/0.2/build/assets-traceability/segmentation"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transfers"},"Transfers"),(0,r.kt)("p",null,"In this section, we will address the transfer of ownership of a subject of type ",(0,r.kt)("em",{parentName:"p"},"Wine")," to a ",(0,r.kt)("strong",{parentName:"p"},"citizen")," interested in acquiring it."),(0,r.kt)("p",null,"Any subject that has not completed its lifecycle in Taple can be transferred to a new owner, regardless of whether the new owner is part of the governance or not."),(0,r.kt)("p",null,"To carry out this transfer, we need to set up a new node that will act as the new external owner outside the governance. We will follow these steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Citizen"',title:'"Node:','Citizen"':!0},"docker run \\\n    -p 3004:3000 \\\n    -p 50004:50000 \\\n    -e TAPLE_HTTP=true \\\n    -e TAPLE_ID_PRIVATE_KEY=2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198 \\\n    -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50004 \\\n    -e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk \\\n    opencanarias/taple-client:0.2\n")),(0,r.kt)("p",null,"Up to this point, when creating the subject, we have not had to declare its public key, although we always had the possibility to do so. However, in this case, it's different because, during the transfer, the new owner must generate a public key with which they want to manage the subject being transferred to them. To do this, they must execute the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Citizen"',title:'"Node:','Citizen"':!0},"curl --request POST 'http://localhost:3004/api/keys' \\\n--form 'algorithm=\"Ed25519\"'\n")),(0,r.kt)("p",null,"This will generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key"),", which must be copied and saved for later use."),(0,r.kt)("p",null,"Next, we will activate the preauthorization of the governance from which we want to transfer the subject. Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"providers"),", we will specify the node that owns it. Since we are not members of the governance, no one will send it to us automatically, so we must authorize it and inform our node of its possible providers. In this case, we will request the governance from the ",(0,r.kt)("strong",{parentName:"p"},"WPO")," node, as it is the owner:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Citizen"',title:'"Node:','Citizen"':!0},"curl --request PUT 'http://localhost:3004/api/allowed-subjects/{{GOVERNANCE-ID}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"providers\": [\"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs\"]\n}'\n")),(0,r.kt)("p",null,"In addition to the above, it will also be necessary to preauthorize the subject that we want to receive since we are not witnesses to either the governance or the subjects of type ",(0,r.kt)("em",{parentName:"p"},"Wine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Citizen"',title:'"Node:','Citizen"':!0},"curl --request PUT 'http://localhost:3004/api/allowed-subjects/{{SUBJECT-ID}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"providers\": []\n}'\n")),(0,r.kt)("p",null,"Now, we need to sign the transfer request with the material from the new node. To do this, we will use our ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2/learn/client-tools#taple-sign"},"TAPLE-Sign tool")," and execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Another terminal"',title:'"Another','terminal"':!0},'taple-sign \'2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198\' \'{"Transfer":{"subject_id":"{{SUBJECT-ID}}","public_key":"{{PUBLIC-KEY}}"}}\'\n')),(0,r.kt)("p",null,"The result of this execution will be included in the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},"curl --request POST 'http://localhost:3001/api/event-requests' \\\n--header 'Content-Type: application/json' \\\n--data-raw {{SIGN-RESULT}}\n")),(0,r.kt)("p",null,"This will generate a result similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},'curl --request POST \'http://localhost:3001/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Transfer": {\n        "subject_id": {{SUBJECT-ID}},\n        "public_key": {{PUBLIC-KEY}}\n        }\n    },\n    "signature": {\n        "signer": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",\n        "timestamp": 1689854029987763078,\n        "value": "SEoXC-I8aNu1P6cS7SwDj9J6SrSDNdCnLdqj5o2Pb4nEqcQR5FHooO5qHwuQUd9FQPLWmHZ_3D2uNEzxRMSGYlCQ"\n    }\n}\'\n')),(0,r.kt)("p",null,"Once the above steps are completed, the new node should be able to view this subject, and the owner's identity should correspond to the ",(0,r.kt)("strong",{parentName:"p"},"Citizen")," node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Citizen"',title:'"Node:','Citizen"':!0},"curl --request GET 'http://localhost:3004/api/subjects/{{SUBJECT-ID}}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{SUBJECT-ID}},\n    "governance_id": {{GOVERNANCE-ID}},\n    "sn": 4,\n    "public_key": {{PUBLIC-KEY}},\n    "namespace": "",\n    "name": "Wine",\n    "schema_id": "Wine",\n    "owner": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",\n    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "properties": {\n        "grape": "CabernetSauvignon",\n        "harvest": 1,\n        "organic_certified": true,\n        "origin": "spain",\n        "temperature_control": {\n            "last_check": 0,\n            "temperature_ok": true\n        }\n    },\n    "active": true\n}\n')))}u.isMDXComponent=!0}}]);