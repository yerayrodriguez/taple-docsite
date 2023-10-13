"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8529],{64586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>j,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),o=a(94891),n=a(74933),l=a(47507),p=a(24310),d=a(63303),c=(a(75035),a(85162));const u={id:"put-allowed-subject-data",title:"Set subject as preauthorized",description:"Set subject as preauthorized",sidebar_label:"Set subject as preauthorized",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Others"],description:"Set subject as preauthorized\n\nAllows a subject to be established as pre-qualified. It can also be used to specify from which nodes in the network the resource should be obtained.",operationId:"Put Allowed Subject Data",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}}],requestBody:{description:"Vote of the user for an existing request",content:{"application/json":{schema:{type:"object",required:["providers"],properties:{providers:{type:"array",items:{type:"string"},description:"Providers acting on a specific subject"}}},example:{providers:[]}}},required:!0},responses:{200:{description:"Subject Data successfully created",content:{"application/json":{schema:{type:"object",required:["providers"],properties:{providers:{type:"array",items:{type:"string"},description:"Providers acting on a specific subject"}}},example:{providers:[]}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"put",path:"/api/allowed-subjects/{id}",security:[],jsonRequestBodyExample:{providers:["string"]},info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Set subject as preauthorized",description:{content:"Set subject as preauthorized\n\nAllows a subject to be established as pre-qualified. It can also be used to specify from which nodes in the network the resource should be obtained.",type:"text/plain"},url:{path:["api","allowed-subjects",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/api-rest/taple-client"},m=void 0,b={unversionedId:"api-rest/put-allowed-subject-data",id:"version-0.2/api-rest/put-allowed-subject-data",title:"Set subject as preauthorized",description:"Set subject as preauthorized",source:"@site/versioned_docs/version-0.2/api-rest/put-allowed-subject-data.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/put-allowed-subject-data",permalink:"/docs/0.2/api-rest/put-allowed-subject-data",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"put-allowed-subject-data",title:"Set subject as preauthorized",description:"Set subject as preauthorized",sidebar_label:"Set subject as preauthorized",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Others"],description:"Set subject as preauthorized\n\nAllows a subject to be established as pre-qualified. It can also be used to specify from which nodes in the network the resource should be obtained.",operationId:"Put Allowed Subject Data",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}}],requestBody:{description:"Vote of the user for an existing request",content:{"application/json":{schema:{type:"object",required:["providers"],properties:{providers:{type:"array",items:{type:"string"},description:"Providers acting on a specific subject"}}},example:{providers:[]}}},required:!0},responses:{200:{description:"Subject Data successfully created",content:{"application/json":{schema:{type:"object",required:["providers"],properties:{providers:{type:"array",items:{type:"string"},description:"Providers acting on a specific subject"}}},example:{providers:[]}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"put",path:"/api/allowed-subjects/{id}",security:[],jsonRequestBodyExample:{providers:["string"]},info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Set subject as preauthorized",description:{content:"Set subject as preauthorized\n\nAllows a subject to be established as pre-qualified. It can also be used to specify from which nodes in the network the resource should be obtained.",type:"text/plain"},url:{path:["api","allowed-subjects",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Get authorized subjects",permalink:"/docs/0.2/api-rest/get-allowed-subject-data"},next:{title:"Register KeyPair",permalink:"/docs/0.2/api-rest/create-keys"}},h={},y=[{value:"Set subject as preauthorized",id:"set-subject-as-preauthorized",level:2}],v={toc:y};function j(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"set-subject-as-preauthorized"},"Set subject as preauthorized"),(0,i.kt)("p",null,"Set subject as preauthorized"),(0,i.kt)("p",null,"Allows a subject to be established as pre-qualified. It can also be used to specify from which nodes in the network the resource should be obtained."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Vote of the user for an existing request"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"providers",required:!0,schemaDescription:"Providers acting on a specific subject",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Subject Data successfully created")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"providers",required:!1,schemaDescription:"Providers acting on a specific subject",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "providers": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "providers": []\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Not Found")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}j.isMDXComponent=!0}}]);