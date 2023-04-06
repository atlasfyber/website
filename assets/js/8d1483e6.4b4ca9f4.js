"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"$readyTimestamp",description:"$readyTimestamp will return the timestamp of when the bot was ready.",id:"readyTimestamp"},i=void 0,p={unversionedId:"functions/Info/readyTimestamp",id:"functions/Info/readyTimestamp",title:"$readyTimestamp",description:"$readyTimestamp will return the timestamp of when the bot was ready.",source:"@site/docs/functions/Info/readyTimestamp.md",sourceDirName:"functions/Info",slug:"/functions/Info/readyTimestamp",permalink:"/docs/functions/Info/readyTimestamp",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1674787388,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{title:"$readyTimestamp",description:"$readyTimestamp will return the timestamp of when the bot was ready.",id:"readyTimestamp"},sidebar:"docs",previous:{title:"$reactionCount",permalink:"/docs/functions/Info/reactionCount"},next:{title:"$referenceChannelId",permalink:"/docs/functions/Info/referenceChannelId"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$argsSlice")," will return the timestamp of when the bot was ready."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$readyTimestamp\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This will return the last time your bot when online:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'readyTimestamp',\n  code: `\n  $readyTimestamp\n  `\n});\n")))}m.isMDXComponent=!0}}]);