"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6832],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,u=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(u,s(s({ref:n},g),{},{components:t})):a.createElement(u,s({ref:n},g))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,s=new Array(o);s[0]=d;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:l,s[1]=r;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(87462),l=(t(67294),t(3905));const o={},s="Build the use case",r={unversionedId:"build/access-control/build-case",id:"build/access-control/build-case",title:"Build the use case",description:"In this page, we are going to consider the configuration of TAPLE to support the defined use case. To do so, we will define the corresponding schemas as well as the members, roles and policies. In addition, we will define the smart contract.",source:"@site/docs/build/access-control/build-case.md",sourceDirName:"build/access-control",slug:"/build/access-control/build-case",permalink:"/docs/next/build/access-control/build-case",draft:!1,tags:[],version:"current",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Use case description",permalink:"/docs/next/build/access-control/use-case"},next:{title:"Setting up the network",permalink:"/docs/next/build/access-control/setting-network"}},i={},c=[{value:"Nodes",id:"nodes",level:2},{value:"Participants",id:"participants",level:3},{value:"Subjects",id:"subjects",level:2},{value:"Governance",id:"governance",level:2},{value:"Members",id:"members",level:3},{value:"Schema",id:"schema",level:3},{value:"Smart Contract",id:"smart-contract",level:3},{value:"Policies",id:"policies",level:3},{value:"Roles of participants",id:"roles-of-participants",level:3},{value:"External roles",id:"external-roles",level:3}],g={toc:c};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build-the-use-case"},"Build the use case"),(0,l.kt)("p",null,"In this page, we are going to consider the configuration of TAPLE to support the defined use case. To do so, we will define the corresponding schemas as well as the members, roles and policies. In addition, we will define the smart contract."),(0,l.kt)("h2",{id:"nodes"},"Nodes"),(0,l.kt)("p",null,"Starting from the participants mentioned in the previous section, we will discuss which of them need a TAPLE node and why."),(0,l.kt)("h3",{id:"participants"},"Participants"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rental company: A TAPLE node is needed as it is a known participant and will be part of the governance."),(0,l.kt)("li",{parentName:"ul"},"Cleaning company: A TAPLE node is needed as it is a known participant and will be part of the governance."),(0,l.kt)("li",{parentName:"ul"},"Security company: A TAPLE node is needed as it is a known participant and will form part of the governance."),(0,l.kt)("li",{parentName:"ul"},"Smart locks: Each vehicle will have a TAPLE node to which the ownership of the subject representing the vehicle itself will be transferred. It should be noted that this node will not be part of the governance as it will not have any role within it but will simply be holders of the subjects and will be responsible for managing the events that arrive from clients or cleaning staff."),(0,l.kt)("li",{parentName:"ul"},"Clients: As the use case is based on tracing the accesses to the vehicles, the clients do not need to have historical information of these accesses, so it is not necessary for them to have a TAPLE node. They only need a system to open the smart locks and for that the only thing required is a valid identity in TAPLE with which to sign the requests to open the smart locks."),(0,l.kt)("li",{parentName:"ul"},"Cleaning workers: As the use case is based on tracing vehicle accesses, the cleaning staff does not need to have historical information of these accesses, so it is not necessary for them to have a TAPLE node. They only need a system to open the smart locks and for that all that is required is a valid identity in TAPLE with which to sign the requests to open the smart locks.")),(0,l.kt)("h2",{id:"subjects"},"Subjects"),(0,l.kt)("p",null,"Each of the locks would manage a subject whose status would be reflected in the vehicle locks. To reflect the state of the subject it will be necessary to define a schema which will contain the state of the vehicle as well as the geolocation of the vehicle."),(0,l.kt)("h2",{id:"governance"},"Governance"),(0,l.kt)("p",null,"To set up the governance, we start with the default governance and then apply the necessary changes for our use case."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Governance JSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "members": [],\n    "policies": [\n        {\n        "approve": {\n            "quorum": "MAJORITY"\n        },\n        "evaluate": {\n            "quorum": "MAJORITY"\n        },\n        "id": "governance",\n        "validate": {\n            "quorum": "MAJORITY"\n        }\n        }\n    ],\n    "roles": [\n        {\n        "namespace": "",\n        "role": "WITNESS",\n        "schema": {\n            "ID": "governance"\n        },\n        "who": "MEMBERS"\n        }\n    ],\n    "schemas": []\n}\n'))),(0,l.kt)("h3",{id:"members"},"Members"),(0,l.kt)("p",null,"As previously mentioned, the governance will be composed of the following members:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rental Company"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Member rental company JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n    "name": "RentalCompany"\n}\n')))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Cleaning Company"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Member cleaning company JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "name": "CleaningCompany"\n}\n')))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Security Company"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Member security company JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",\n    "name": "SecurityCompany"\n}\n'))))),(0,l.kt)("p",null,"It should be noted that the rental company will own it."),(0,l.kt)("h3",{id:"schema"},"Schema"),(0,l.kt)("p",null,"In the schema we will define the state in which the car is, which can be free or rented, and we will also define the geolocation of the vehicle."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Schema JSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"schema": {\n    "description": "State_of_car",\n    "type": "object",\n    "properties": {\n        "status": {\n            "description": "Defines_whether_the_car_is_free_or_rented",\n            "type": "string",\n            "enum": ["FREE", "RENTED"]\n        },\n        "last_position": {\n            "description": "Contains_the_record_of_the_last_position_of_the_car",\n            "type": "object",\n            "properties": {\n                "latitude": {\n                    "description": "Define_the_latitude_of_the_car_geolocation",\n                    "type": "number"\n                },\n                "longitude": {\n                    "description": "Define_the_length_of_the_car_geolocation",\n                    "type": "number"\n                }\n            }\n        }\n    },\n    "required": [\n        "status",\n        "last_position"\n    ],\n    "additionalProperties": false\n}\n'))),(0,l.kt)("h3",{id:"smart-contract"},"Smart Contract"),(0,l.kt)("p",null,"Within the smart contract, we will define the business logic. When a user wants to perform a smart lock opening on a vehicle, it will be necessary for him to send a signed event request. Then, the rental company and the cleaning/maintenance company would receive an approval request about the invocation made so that each of them will have to check in their internal systems if the identity of the sender is valid. If it is an authorized user at the rental company, the rental company will vote yes and the lock will be unlocked. In the same way, if it is the cleaning personnel, the cleaning company will vote in the affirmative and therefore will be able to access the vehicle. On the contrary, if it is an invalid summoner, both will reject the request, denying access to the vehicle. It should be noted that in this example, the approval process will be manual, but in a real case, the TAPLE API could be integrated into an external system that automates this task."),(0,l.kt)("p",null,"The smart contract is made up of four methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Unrental: This method takes care of changing the status of the car from RENTED to FREE."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Unrental method"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"CarEvent::Unrental {} => match car.status {\n    StatesCar::FREE => {}\n    StatesCar::RENTED => {\n        car.status = StatesCar::FREE;\n        contract_result.success = true;\n    }\n}\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rent: This method takes care of changing the status of the car from FREE to RENTED."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Rent method"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"CarEvent::Rent {} => match car.status {\n    StatesCar::FREE => {\n        car.status = StatesCar::RENTED;\n        contract_result.success = true;\n    }\n    StatesCar::RENTED => {}\n}\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Open: This method checks whether the person trying to open the car is an authorized person. For this purpose, approval is requested."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Open method"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"CarEvent::Open {} => {\n    contract_result.approval_required = true;\n    contract_result.success = true;\n}\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"UpdatePosition: This method updates the geolocation of the car every 10 minutes."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"UpdatePosition method"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"CarEvent::UpdatePosition {\n    latitude,\n    longitude,\n} => {\n    car.last_position.latitude = latitude.round();\n    car.last_position.longitude = longitude.round();\n    contract_result.success = true;\n}\n"))))),(0,l.kt)("p",null,"To add the smart contract, we must first convert it to base64. To do this, you can use the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://manpages.ubuntu.com/manpages/xenial/en/man1/base64.1.html"},"base64"))," utility available on Linux. Below, you can see an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="In terminal"',title:'"In','terminal"':!0},"base64 main.rs\n")),(0,l.kt)("p",null,"The result returned will be the base64 encoded contract. In this case, it is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="In terminal"',title:'"In','terminal"':!0},"dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07CnVzZSB0YXBsZV9zY19ydXN0IGFzIHNkazsKCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0KZW51bSBTdGF0ZXNDYXIgewogICAgRlJFRSwKICAgIFJFTlRFRCwKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgUG9zaXRpb24gewogICAgbGF0aXR1ZGU6IGYzMiwKICAgIGxvbmdpdHVkZTogZjMyLAp9CgojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldCnN0cnVjdCBDYXIgewogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAgICAgICAvLyBGUkVFIFJFTlRFRAogICAgcHViIGxhc3RfcG9zaXRpb246IFBvc2l0aW9uLCAvLyBsYXRpdHVkZSBsb25naXR1ZGUKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gQ2FyRXZlbnQgewogICAgVW5yZW50YWwge30sCiAgICBSZW50IHt9LAogICAgT3BlbiB7fSwKICAgIFVwZGF0ZVBvc2l0aW9uIHsgbGF0aXR1ZGU6IGYzMiwgbG9uZ2l0dWRlOiBmMzIgfSwKfQoKI1tub19tYW5nbGVdCnB1YiB1bnNhZmUgZm4gbWFpbl9mdW5jdGlvbihzdGF0ZV9wdHI6IGkzMiwgZXZlbnRfcHRyOiBpMzIsIGlzX293bmVyOiBpMzIpIC0+IHUzMiB7CiAgICBzZGs6OmV4ZWN1dGVfY29udHJhY3Qoc3RhdGVfcHRyLCBldmVudF9wdHIsIGlzX293bmVyLCBjb250cmFjdF9sb2dpYykKfQoKZm4gY29udHJhY3RfbG9naWMoCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LAogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8Q2FyPiwKKSB7CiAgICBsZXQgY2FyID0gJm11dCBjb250cmFjdF9yZXN1bHQuZmluYWxfc3RhdGU7CiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7CiAgICAgICAgQ2FyRXZlbnQ6OlVucmVudGFsIHt9ID0+IG1hdGNoIGNhci5zdGF0dXMgewogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gewogICAgICAgICAgICAgICAgY2FyLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsKICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgQ2FyRXZlbnQ6OlJlbnQge30gPT4gbWF0Y2ggY2FyLnN0YXR1cyB7CiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7CiAgICAgICAgICAgICAgICBjYXIuc3RhdHVzID0gU3RhdGVzQ2FyOjpSRU5URUQ7CiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30KICAgICAgICB9LAogICAgICAgIENhckV2ZW50OjpPcGVuIHt9ID0+IHsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOwogICAgICAgIH0KICAgICAgICBDYXJFdmVudDo6VXBkYXRlUG9zaXRpb24gewogICAgICAgICAgICBsYXRpdHVkZSwKICAgICAgICAgICAgbG9uZ2l0dWRlLAogICAgICAgIH0gPT4gewogICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlLnJvdW5kKCk7CiAgICAgICAgICAgIGNhci5sYXN0X3Bvc2l0aW9uLmxvbmdpdHVkZSA9IGxvbmdpdHVkZS5yb3VuZCgpOwogICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgfQogICAgfQp9Cg==\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Smart Contract in base64"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"contract": {\n    "raw":"dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07CnVzZSB0YXBsZV9zY19ydXN0IGFzIHNkazsKCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0KZW51bSBTdGF0ZXNDYXIgewogICAgRlJFRSwKICAgIFJFTlRFRCwKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgUG9zaXRpb24gewogICAgbGF0aXR1ZGU6IGYzMiwKICAgIGxvbmdpdHVkZTogZjMyLAp9CgojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldCnN0cnVjdCBDYXIgewogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAgICAgICAvLyBGUkVFIFJFTlRFRAogICAgcHViIGxhc3RfcG9zaXRpb246IFBvc2l0aW9uLCAvLyBsYXRpdHVkZSBsb25naXR1ZGUKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gQ2FyRXZlbnQgewogICAgVW5yZW50YWwge30sCiAgICBSZW50IHt9LAogICAgT3BlbiB7fSwKICAgIFVwZGF0ZVBvc2l0aW9uIHsgbGF0aXR1ZGU6IGYzMiwgbG9uZ2l0dWRlOiBmMzIgfSwKfQoKI1tub19tYW5nbGVdCnB1YiB1bnNhZmUgZm4gbWFpbl9mdW5jdGlvbihzdGF0ZV9wdHI6IGkzMiwgZXZlbnRfcHRyOiBpMzIsIGlzX293bmVyOiBpMzIpIC0+IHUzMiB7CiAgICBzZGs6OmV4ZWN1dGVfY29udHJhY3Qoc3RhdGVfcHRyLCBldmVudF9wdHIsIGlzX293bmVyLCBjb250cmFjdF9sb2dpYykKfQoKZm4gY29udHJhY3RfbG9naWMoCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LAogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8Q2FyPiwKKSB7CiAgICBsZXQgY2FyID0gJm11dCBjb250cmFjdF9yZXN1bHQuZmluYWxfc3RhdGU7CiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7CiAgICAgICAgQ2FyRXZlbnQ6OlVucmVudGFsIHt9ID0+IG1hdGNoIGNhci5zdGF0dXMgewogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gewogICAgICAgICAgICAgICAgY2FyLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsKICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgQ2FyRXZlbnQ6OlJlbnQge30gPT4gbWF0Y2ggY2FyLnN0YXR1cyB7CiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7CiAgICAgICAgICAgICAgICBjYXIuc3RhdHVzID0gU3RhdGVzQ2FyOjpSRU5URUQ7CiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30KICAgICAgICB9LAogICAgICAgIENhckV2ZW50OjpPcGVuIHt9ID0+IHsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOwogICAgICAgIH0KICAgICAgICBDYXJFdmVudDo6VXBkYXRlUG9zaXRpb24gewogICAgICAgICAgICBsYXRpdHVkZSwKICAgICAgICAgICAgbG9uZ2l0dWRlLAogICAgICAgIH0gPT4gewogICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlLnJvdW5kKCk7CiAgICAgICAgICAgIGNhci5sYXN0X3Bvc2l0aW9uLmxvbmdpdHVkZSA9IGxvbmdpdHVkZS5yb3VuZCgpOwogICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgfQogICAgfQp9Cg=="\n}\n'))),(0,l.kt)("h3",{id:"policies"},"Policies"),(0,l.kt)("p",null,"To ensure better control and greater security over the network, we will define policies on the subject."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Policies JSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "approve": {\n        "quorum": {\n            "FIXED": 1\n        }\n    },\n    "evaluate": {\n        "quorum": "MAJORITY"\n    },\n    "id": "car",\n    "validate": {\n        "quorum": "MAJORITY"\n    }\n}\n'))),(0,l.kt)("p",null,"An approval quorum of the form ",(0,l.kt)("strong",{parentName:"p"},'"FIXED": 1')," is defined, as we only need either the rental company or the cleaning company to vote in the affirmative for the vehicle to be opened."),(0,l.kt)("h3",{id:"roles-of-participants"},"Roles of participants"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rental company: Owner of governance and evaluator of smart contracts. As it is the owner of the governance, it is not necessary to specify roles on it, since by default it acquires all of them. However, it is necessary to define the roles of the subject. In this case, it is necessary that it has the following roles:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"CREATOR: Since it will be in charge of creating the subject.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"APPROVER: Because it will be involved in the approval phase when a vehicle opening is required.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WITNESS: To have a record of what happens in the subject.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ISSUER: Since it is necessary to perform events on the subject."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Roles rental company"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "namespace": "",\n        "role": "CREATOR",\n        "schema": {\n            "ID": "car"\n        },\n        "who": {\n            "NAME": "RentalCompany"\n        }\n    },\n    {\n        "namespace": "",\n        "role": "APPROVER",\n        "schema": {\n            "ID": "car"\n        },\n        "who": {\n            "NAME": "RentalCompany"\n        }\n    },\n    {\n        "namespace": "",\n        "role": "WITNESS",\n        "schema": {\n            "ID": "car"\n        },\n        "who": {\n            "NAME": "RentalCompany"\n        }\n    },\n    {\n        "namespace": "",\n        "role": "ISSUER",\n        "schema": {\n            "ID": "car"\n        },\n        "who": {\n            "NAME": "RentalCompany"\n        }\n    }\n]\n')))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Cleaning company: Approver of the cleaning personnel and witness to have a record of the cleanings performed. In this case, the following roles will be defined:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WITNESS (governance): Should be a witness to governance so that you have a record of what happens.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WITNESS (car): Will need to witness the subject, as you need to have a record of the subject.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"APPROVER: Because it will be involved in the approval phase when a vehicle opening is required.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ISSUER: Since it is necessary to perform events on the subject."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Roles cleaning company"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "namespace": "",\n        "role": "WITNESS",\n        "schema": {\n            "ID": "governance"\n        },\n        "who": {\n            "NAME": "CleaningCompany"\n        }\n    },\n    {\n        "namespace": "",\n        "role": "WITNESS",\n        "schema": {\n            "ID": "car"\n        },\n        "who": {\n            "NAME": "CleaningCompany"\n        }\n    },\n    {\n        "namespace": "",\n        "role": "APPROVER",\n        "schema": {\n            "ID": "car"\n        },\n        "who": {\n            "NAME": "CleaningCompany"\n        }\n    },\n    {\n        "namespace": "",\n        "role": "ISSUER",\n        "schema": {\n            "ID": "car"\n        },\n        "who": {\n            "NAME": "CleaningCompany"\n        }\n    }\n]\n')))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Security company: Witness to have a control of the use of the car and evaluator to guarantee the security of the network. In this case, the following roles will be defined:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"EVALUATOR: In this way, we ensure that the network is more secure.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WITNESS (governance): Should be a witness to governance so that you have a record of what happens.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WITNESS (car): Will need to witness the subject, as you need to monitor the subject."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Roles security company"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "namespace": "",\n        "role": "WITNESS",\n        "schema": {\n            "ID": "governance"\n        },\n        "who": {\n            "NAME": "SecurityCompany"\n        }\n    },\n    {\n        "namespace": "",\n        "role": "EVALUATOR",\n        "schema": {\n            "ID": "governance"\n        },\n        "who": {\n            "NAME": "SecurityCompany"\n        }\n    },       \n    {\n        "namespace": "",\n        "role": "WITNESS",\n        "schema": {\n            "ID": "car"\n        },\n        "who": {\n            "NAME": "SecurityCompany"\n        }\n    }\n]\n'))))))),(0,l.kt)("h3",{id:"external-roles"},"External roles"),(0,l.kt)("p",null,"Finally, we must add permissions to issue external events on the subject, as clients and cleaning staff will act on the vehicle in this way."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"External roles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "namespace": "",\n        "role": "ISSUER",\n        "schema": {\n            "ID": "car"\n        },\n        "who": "NOT_MEMBERS"\n    }\n]\n'))))}p.isMDXComponent=!0}}]);