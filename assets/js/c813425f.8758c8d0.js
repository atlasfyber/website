"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},84262:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={title:"$takeRole",description:"$takeRole will remove a given role from a given member.",id:"takeRole"},o=void 0,i={unversionedId:"functions/Calling/takeRole",id:"functions/Calling/takeRole",title:"$takeRole",description:"$takeRole will remove a given role from a given member.",source:"@site/docs/functions/Calling/takeRole.md",sourceDirName:"functions/Calling",slug:"/functions/Calling/takeRole",permalink:"/docs/functions/Calling/takeRole",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1679163118,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"$takeRole",description:"$takeRole will remove a given role from a given member.",id:"takeRole"},sidebar:"docs",previous:{title:"$spawnShard",permalink:"/docs/functions/Calling/spawnShard"},next:{title:"$takeRoles",permalink:"/docs/functions/Calling/takeRoles"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$takeRole")," will remove a given role from a given member."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$takeRole[guildID;userID;roleID]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"guildID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"guild ID"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"user ID"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"roleID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"role ID"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will remove a given role from yourself (the role must be below the bot's highest role):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'takeRole',\n    code: `\n   $takeRole[$guildID;$authorID;roleID]`\n});\n")))}m.isMDXComponent=!0}}]);