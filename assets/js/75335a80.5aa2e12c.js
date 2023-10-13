"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="Adding events",s={unversionedId:"build/tutorial-from-0/event-operations",id:"version-0.1/build/tutorial-from-0/event-operations",title:"Adding events",description:"Create an event on the first node",source:"@site/versioned_docs/version-0.1/build/tutorial-from-0/event-operations.md",sourceDirName:"build/tutorial-from-0",slug:"/build/tutorial-from-0/event-operations",permalink:"/docs/0.1/build/tutorial-from-0/event-operations",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Creating subjects",permalink:"/docs/0.1/build/tutorial-from-0/subject-operations"},next:{title:"Adding a new node",permalink:"/docs/0.1/build/tutorial-from-0/updating-governance"}},c={},l=[{value:"Create an event on the first node",id:"create-an-event-on-the-first-node",level:2},{value:"Check that the second node receives the creation of the event",id:"check-that-the-second-node-receives-the-creation-of-the-event",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-events"},"Adding events"),(0,r.kt)("h2",{id:"create-an-event-on-the-first-node"},"Create an event on the first node"),(0,r.kt)("p",null,"To create an event in the first node we must execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --silent --location --request POST \'http://localhost:3000/api/requests\' \\\n--header \'X-API-KEY: 1234\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "State": {\n            "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",\n            "payload": {\n                "Json": {\n                    "temperature": 8,\n                    "location": "Brazil",\n                    "batch": {\n                        "weight": 30,\n                        "origin": "England"\n                    }\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that you will need to change the hash identifier of the subject of the first node to yours.")),(0,r.kt)("p",null,"If everything went correctly, you will get an output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "State": {\n      "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",\n      "payload": {\n        "Json": "{\\"batch\\":{\\"origin\\":\\"England\\",\\"weight\\":30},\\"location\\":\\"Brazil\\",\\"temperature\\":8}"\n      }\n    }\n  },\n  "request_id": "JsMLjcmxqk1kHoENQJsX5iXnNzUCgkgfiUu1djaoTRow",\n  "timestamp": 1674044846395,\n  "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",\n  "sn": null\n}\n')),(0,r.kt)("p",null,"We will need to accept the request of the event in order for it to be created and modify the state of the subject. As our governance specifies that all the subjects with that schema need to approve the request of events when the invoker is the owner of the subjects we have to accept the request. One thing that it is interesting is that we specified that the approvers are both nodes and the quorum is 0.5, so you can approve the request sending the approval from the node_1, the node that didn't create the event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --silent --location --request PUT 'http://localhost:3001/api/approvals/JsMLjcmxqk1kHoENQJsX5iXnNzUCgkgfiUu1djaoTRow' \\\n--header 'X-API-KEY: 1234' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"approvalType\": \"Accept\"\n}'\n")),(0,r.kt)("p",null,"And with this the subject state is updated."),(0,r.kt)("h3",{id:"check-that-the-second-node-receives-the-creation-of-the-event"},"Check that the second node receives the creation of the event"),(0,r.kt)("p",null,"To check that the second node has correctly received the creation of the event on the first node, you must execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    curl --location --request GET 'http://localhost:3001/api/subjects/Paste your hash identifier here/events/1/'\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that you will need to change the hash identifier of the subject of the first node to yours.")),(0,r.kt)("p",null,"If everything went correctly, you will get an output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_content": {\n        "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",\n        "event_request": {\n            "request": {\n                "State": {\n                    "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",\n                    "payload": {\n                        "Json": "{\\"batch\\":{\\"origin\\":\\"England\\",\\"weight\\":30},\\"location\\":\\"Brazil\\",\\"temperature\\":8}"\n                    }\n                }\n            },\n            "timestamp": 1674044846395,\n            "signature": {\n                "content": {\n                    "signer": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",\n                    "event_content_hash": "JsMLjcmxqk1kHoENQJsX5iXnNzUCgkgfiUu1djaoTRow",\n                    "timestamp": 1674044846395\n                },\n                "signature": "SETHi4DxkG8xRazhdw5hwXh-_t5hGeXKSB-3JdP6pdEjw_XUHyIuoY5_POouKwc-gVpSnjpIbJWd_kgrcMLuOEBA"\n            },\n            "approvals": [\n                {\n                    "content": {\n                        "signer": "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",\n                        "event_request_hash": "JsMLjcmxqk1kHoENQJsX5iXnNzUCgkgfiUu1djaoTRow",\n                        "approval_type": "Accept",\n                        "expected_sn": 1,\n                        "timestamp": 1674045301377\n                    },\n                    "signature": "SExzruT1ctKVGjAPwK8xuBwJQLDEV1MZz6WmRHFFlyTgajmUncS4BdjOf0Du3WsD8W8qsKELClLahgGWSa16rdBw"\n                }\n            ]\n        },\n        "sn": 1,\n        "previous_hash": "JETtgt66SDcQjjBs0802-zOaZJgR7rJ-X5Dxy86ft8oI",\n        "state_hash": "JjNBMUddVX8OPAau9ZbUDQzcZWkRY9H087BVkWo8dDgk",\n        "metadata": {\n            "namespace": "",\n            "governance_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",\n            "governance_version": 0,\n            "schema_id": "Test",\n            "owner": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"\n        },\n        "approved": true\n    },\n    "signature": {\n        "content": {\n            "signer": "EG496wxlIoNCC2LEtA85Ha1ZCfJ_3EeFe80Mg8OCqHD0",\n            "event_content_hash": "JMOrxftmL3qU9oqwxVaxDzHLnabbYqtU_UzlarWSiC9s",\n            "timestamp": 1674045301378\n        },\n        "signature": "SEsUnJN1ofW7PLTcR2fkQESvEIDvhc5m_ZZ12ZbwVT8f-5TRGkAU6rPiwXo1-u_Pzl1CChSYmEeyLhqyIFwT1KCQ"\n    }\n}\n')))}d.isMDXComponent=!0}}]);