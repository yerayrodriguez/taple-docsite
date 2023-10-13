"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8505],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=r,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={},i="Adding a new node",l={unversionedId:"build/tutorial-from-0/updating-governance",id:"version-0.1/build/tutorial-from-0/updating-governance",title:"Adding a new node",description:"Running the third node",source:"@site/versioned_docs/version-0.1/build/tutorial-from-0/updating-governance.md",sourceDirName:"build/tutorial-from-0",slug:"/build/tutorial-from-0/updating-governance",permalink:"/docs/0.1/build/tutorial-from-0/updating-governance",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Adding events",permalink:"/docs/0.1/build/tutorial-from-0/event-operations"},next:{title:"Access Control",permalink:"/docs/0.1/build/uc-hotel-access-control"}},d={},s=[{value:"Running the third node",id:"running-the-third-node",level:2},{value:"Adding the third node to governance",id:"adding-the-third-node-to-governance",level:2},{value:"Check that the third node receives all",id:"check-that-the-third-node-receives-all",level:2}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-a-new-node"},"Adding a new node"),(0,r.kt)("h2",{id:"running-the-third-node"},"Running the third node"),(0,r.kt)("p",null,"To set up a new node, we will follow the steps of this ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/0.1/build/tutorial-from-0/governance-operations"},"section"))," changing again the ports and generating a new private key with the ",(0,r.kt)("strong",{parentName:"p"},"keygen")," tool, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    docker run -d --rm -e TAPLE_HTTPPORT=3002 \\\n        -e TAPLE_NETWORK_ADDR=/ip4/0.0.0.0/tcp \\\n        -e TAPLE_NETWORK_P2PPORT=40002 \\\n        -e TAPLE_NODE_SECRETKEY=f4a03d8632a71a82a0215d77faf7af868fa04f027a0ddb9f5d64c044a49a9fae \\\n        -e RUST_LOG=info \\\n        -e TAPLE_NETWORK_KNOWNNODES=/ip4/172.17.0.2/tcp/40000/p2p/12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo \\\n        -p 3002:3002 \\\n        -p 40002:40002 \\\n        --name="node_2" \\\n        opencanarias/taple-client:0.1\n')),(0,r.kt)("h2",{id:"adding-the-third-node-to-governance"},"Adding the third node to governance"),(0,r.kt)("p",null,"To add the third node to the governance it will be done in the same way as in this ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/0.1/build/tutorial-from-0/governance-operations#adding-the-second-node-to-governance"},"paragraph"))," but in this case, unlike the first time, there are 2 nodes within the same governance, so it will be necessary the signature of acceptance of any of them to introduce the new node to the governance. Otherwise, the new node will not be introduced into the governance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    curl --location --request POST \'http://localhost:3000/api/requests\' \\\n        --header \'Content-Type: application/json\' \\\n        --data-raw \'{\n            "request": {\n                "State": {\n                    "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",\n                    "payload": {\n                        "Json": {\n                            "members": [\n                                {\n                                    "id": "Company1",\n                                    "tags": {},\n                                    "description": "Headquarters in Spain",\n                                    "key": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"\n                                },\n                                {\n                                    "id": "Company2",\n                                    "tags": {},\n                                    "description": "Headquarters in England",\n                                    "key": "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"\n                                },\n                                {\n                                    "id": "Company3",\n                                    "tags": {},\n                                    "description": "Headquarters in France",\n                                    "key": "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"\n                                }\n                            ],\n                            "schemas": [\n                                {\n                                    "id": "Test",\n                                    "tags": {},\n                                    "content": {\n                                        "type": "object",\n                                        "additionalProperties": false,\n                                        "required": [\n                                            "temperature",\n                                            "location",\n                                            "batch"\n                                        ],\n                                        "properties": {\n                                            "temperature": {"type": "integer"},\n                                            "location": {"type": "string" },\n                                            "batch": {\n                                                "type": "object",\n                                                "additionalProperties": false,\n                                                "required": [ "weight", "origin" ],\n                                                "properties": {\n                                                    "weight": {"type": "number", "minimum": 0},\n                                                    "origin": {"type": "string"}\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            ],\n                            "policies": [\n                                {\n                                    "id": "Test",\n                                    "validation": {\n                                        "quorum": 0.5,\n                                        "validators": [\n                                            "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",\n                                            "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",\n                                            "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"\n                                        ]\n                                    },\n                                    "approval": {\n                                        "quorum": 0.5,\n                                        "approvers": [\n                                            "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",\n                                            "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",\n                                            "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"\n                                        ]\n                                    },\n                                    "invokation": {\n                                        "owner": {\n                                            "allowance": true,\n                                            "approvalRequired": true\n                                        },\n                                        "set": {\n                                            "allowance": false,\n                                            "approvalRequired": false,\n                                            "invokers": []\n                                        },\n                                        "all": {\n                                            "allowance": false,\n                                            "approvalRequired": false\n                                        },\n                                        "external": {\n                                            "allowance": false,\n                                            "approvalRequired": false\n                                        }\n                                    }\n                                },\n                                {\n                                    "id": "governance",\n                                    "validation": {\n                                        "quorum": 0.5,\n                                        "validators": [\n                                            "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",\n                                            "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",\n                                            "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"\n                                        ]\n                                    },\n                                    "approval": {\n                                        "quorum": 0.5,\n                                        "approvers": [\n                                            "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",\n                                            "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",\n                                            "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"\n                                        ]\n                                    },\n                                    "invokation": {\n                                        "owner": {\n                                            "allowance": true,\n                                            "approvalRequired": true\n                                        },\n                                        "set": {\n                                            "allowance": false,\n                                            "approvalRequired": false,\n                                            "invokers": []\n                                        },\n                                        "all": {\n                                            "allowance": false,\n                                            "approvalRequired": false\n                                        },\n                                        "external": {\n                                            "allowance": false,\n                                            "approvalRequired": false\n                                        }\n                                    }\n                                }\n                            ]\n                        }\n                    }\n                }\n            }\n        }\'\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'Note that in the above command you must change the "',(0,r.kt)("strong",{parentName:"p"},"subject_id"),'" field with the hash identifier of your governance.'),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4"\n'))),(0,r.kt)("h2",{id:"check-that-the-third-node-receives-all"},"Check that the third node receives all"),(0,r.kt)("p",null,"To check that the third node has received everything correctly you must execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    curl --location --request GET 'http://localhost:3002/api/subjects'\n")),(0,r.kt)("p",null,"If everything went correctly you will get the three subjects that we already created."),(0,r.kt)("p",null,"Also, if we execute the command seen above ",(0,r.kt)("inlineCode",{parentName:"p"},"docker logs node_2"),", we can check that the node has received the information correctly."))}p.isMDXComponent=!0}}]);