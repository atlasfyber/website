"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"$usersBanned",description:"$usersBanned will return the banned users of a guild.",id:"usersBanned"},o=void 0,i={unversionedId:"functions/Info/usersBanned",id:"functions/Info/usersBanned",title:"$usersBanned",description:"$usersBanned will return the banned users of a guild.",source:"@site/docs/functions/Info/usersBanned.md",sourceDirName:"functions/Info",slug:"/functions/Info/usersBanned",permalink:"/docs/functions/Info/usersBanned",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1674709277,formattedLastUpdatedAt:"Jan 26, 2023",frontMatter:{title:"$usersBanned",description:"$usersBanned will return the banned users of a guild.",id:"usersBanned"},sidebar:"docs",previous:{title:"$username",permalink:"/docs/functions/Info/username"},next:{title:"$usersInChannel",permalink:"/docs/functions/Info/usersInChannel"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$usersBanned")," will return the banned users of a guild."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$usersBanned[guildID?;force?;option?;sep?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"guild ID"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"force?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"1. ",(0,a.kt)("strong",{parentName:"td"},"yes")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"no")," (default)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"option?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"how to return the banned users ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"id")," (default) ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"username")," ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"mention")),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sep?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"seperator to seperate multiple arguments"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This will return the banned users of your guild as mention in an embed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'usersBanned',\n  code: `\n$description[$usersBanned[$guildID;no;mention;, ]]\n  `\n});\n")))}d.isMDXComponent=!0}}]);