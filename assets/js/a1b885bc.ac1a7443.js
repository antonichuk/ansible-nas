"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[29],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Sabnzbd"},i=void 0,s={unversionedId:"applications/download-tools/sabnzbd",id:"applications/download-tools/sabnzbd",title:"Sabnzbd",description:"Homepage:",source:"@site/docs/applications/download-tools/sabnzbd.md",sourceDirName:"applications/download-tools",slug:"/applications/download-tools/sabnzbd",permalink:"/docs/applications/download-tools/sabnzbd",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/download-tools/sabnzbd.md",tags:[],version:"current",frontMatter:{title:"Sabnzbd"},sidebar:"tutorialSidebar",previous:{title:"Radarr",permalink:"/docs/applications/download-tools/radarr"},next:{title:"Sonarr",permalink:"/docs/applications/download-tools/sonarr"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Homepage: ",(0,o.kt)("a",{parentName:"p",href:"https://sabnzbd.org/"},"https://sabnzbd.org/")),(0,o.kt)("p",null,"The time tested Usenet downloader provided with FreeNAS. It just works for those migrating from FreeNAS."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"sabnzbd_enabled: true"),"  in your ",(0,o.kt)("inlineCode",{parentName:"p"},"/inventories/[my inventory]/group_vars/nas.yml")," file."),(0,o.kt)("p",null,"The Sabnzbd web interface can be found at ",(0,o.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:18080"},"http://ansible_nas_host_or_ip:18080"),". Use this interface to configure the software upon first connection."))}d.isMDXComponent=!0}}]);