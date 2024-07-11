(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{7983:function(e,r,n){"use strict";n.d(r,{Od:function(){return j},s7:function(){return N},N2:function(){return w}});var a=n(5993),t=n(15031),s=n(67294),i=n(85393);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var o=t.jU?s.useLayoutEffect:s.useEffect;function c(e,r){void 0===r&&(r={});var n=r,a=n.ssr,c=void 0===a||a,d=n.fallback,m=(0,i.O)(),u=Array.isArray(e)?e:[e],x=Array.isArray(d)?d:[d];x=x.filter((function(e){return null!=e}));var p=(0,s.useState)((function(){return u.map((function(e,r){return{media:e,matches:c?!!x[r]:m.window.matchMedia(e).matches}}))})),f=p[0],h=p[1];return o((function(){c&&h(u.map((function(e){return{media:e,matches:m.window.matchMedia(e).matches}})));var e=u.map((function(e){return m.window.matchMedia(e)})),r=function(e){h((function(r){return r.slice().map((function(r){return r.media===e.media?l({},r,{matches:e.matches}):r}))}))};return e.forEach((function(e){(0,t.mf)(e.addListener)?e.addListener(r):e.addEventListener("change",r)})),function(){e.forEach((function(e){(0,t.mf)(e.removeListener)?e.removeListener(r):e.removeEventListener("change",r)}))}}),[]),f.map((function(e){return e.matches}))}t.Ts;t.Ts;function d(e,r){var n,s=function(e){var r,n,s=(0,t.Kn)(e)?e:{fallback:null!=e?e:"base"},i=(0,a.Fg)().__breakpoints.details.map((function(e){var r=e.minMaxQuery;return{breakpoint:e.breakpoint,query:r.replace("@media screen and ","")}})),l=i.map((function(e){return e.breakpoint===s.fallback})),o=c(i.map((function(e){return e.query})),{fallback:l,ssr:s.ssr});return null!=(r=null==(n=i[o.findIndex((function(e){return 1==e}))])?void 0:n.breakpoint)?r:s.fallback}((0,t.Kn)(r)?r:{fallback:null!=r?r:"base"}),i=(0,a.Fg)();if(s){var l=Array.from((null==(n=i.__breakpoints)?void 0:n.keys)||[]);return function(e,r,n){void 0===n&&(n=t.AV);var a=Object.keys(e).indexOf(r);if(-1!==a)return e[r];for(var s=n.indexOf(r);s>=0;){if(null!=e[n[s]]){a=s;break}s-=1}return-1!==a?e[n[a]]:void 0}((0,t.kJ)(e)?(0,t.sq)(Object.entries((0,t.Yq)(e,l)).map((function(e){return[e[0],e[1]]}))):e,s,l)}}var m=n(70917),u=n(97375);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function p(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}var f=["startColor","endColor","isLoaded","fadeDuration","speed","className"],h=["noOfLines","spacing","skeletonHeight","className","startColor","endColor","isLoaded","fadeDuration","speed","children"],b=["size"],v=(0,a.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),g=(0,m.F4)({from:{opacity:0},to:{opacity:1}}),j=(0,a.Gp)((function(e,r){var n=(0,a.mq)("Skeleton",e),i=function(){var e=s.useRef(!0);return s.useEffect((function(){e.current=!1}),[]),e.current}(),l=(0,a.Lr)(e);l.startColor,l.endColor;var o=l.isLoaded,c=l.fadeDuration;l.speed;var d=l.className,m=p(l,f),h=(0,u.D9)(o),b=(0,t.cx)("chakra-skeleton",d);if(o){var j=i||h?"none":g+" "+c+"s";return s.createElement(a.m$.div,x({ref:r,className:b,__css:{animation:j}},m))}return s.createElement(v,x({ref:r,className:b},m,{__css:n}))}));j.defaultProps={fadeDuration:.4,speed:.8},t.Ts&&(j.displayName="Skeleton");var w=function(e){var r=e.noOfLines,n=void 0===r?3:r,i=e.spacing,l=void 0===i?"0.5rem":i,o=e.skeletonHeight,c=void 0===o?"0.5rem":o,m=e.className,u=e.startColor,f=e.endColor,b=e.isLoaded,v=e.fadeDuration,g=e.speed,w=e.children,N=p(e,h),y=d("number"===typeof n?[n]:n)||3,k=Array(y).fill(1).map((function(e,r){return r+1})),E=function(e){return y>1&&e===k.length?"80%":"100%"},F=(0,t.cx)("chakra-skeleton__group",m);return s.createElement(a.m$.div,x({className:F},N),k.map((function(e,r){if(b&&r>0)return null;var n=b?null:{mb:e===k.length?"0":l,width:E(e),height:c};return s.createElement(j,x({key:k.length.toString()+e,startColor:u,endColor:f,isLoaded:b,fadeDuration:v,speed:g},n),0===r?w:void 0)})))};t.Ts&&(w.displayName="SkeletonText");var N=function(e){var r=e.size,n=void 0===r?"2rem":r,a=p(e,b);return s.createElement(j,x({borderRadius:"full",boxSize:n},a))};t.Ts&&(N.displayName="SkeletonCircle")},5608:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wobLeaderboard",function(){return n(82095)}])},82095:function(e,r,n){"use strict";n.r(r);var a=n(85893),t=n(9008),s=n.n(t),i=n(25675),l=n.n(i),o=(n(67294),n(68527)),c=n(7983),d=n(92814),m=n(51417);r.default=function(){var e=[{rank:"99999",avatar:"/WoB/top_leads1.png",name:"Raadha",prs:"99999",score:"99999"},{rank:"99999",avatar:"/WoB/top_leads.png",name:"Raadha",prs:"99999",score:"99999"},{rank:"99999",avatar:"/WoB/top_leads.png",name:"Raadha",prs:"99999",score:"99999"},{rank:"99999",avatar:"/WoB/leaderbord_Avatar.png",name:"mahoganycrib",prs:"99999",score:"99999"},{rank:"99999",avatar:"/WoB/leaderbord_Avatar.png",name:"mahoganycrib",prs:"99999",score:"99999"}];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Leaderboard | GirlScript Winter of Blockchain 2024 | GirlScript Foundation India"}),(0,a.jsx)("meta",{name:"description",content:"GirlScript Winter of Blockchain Leaderboard"}),(0,a.jsx)("title",{children:"GirlScript Winter of Blockchain 2024 | GirlScript Foundation India"}),(0,a.jsx)("link",{rel:"icon",href:"/WoB/Favicon.ico"})]}),(0,a.jsx)(o.LZ,{mt:10}),(0,a.jsx)("div",{className:"self-stretch flex w-screen flex-col items-center justify-start py-0 px-0 box-border max-w-full text-center text-4xl text-skyblue font-semibold",children:(0,a.jsx)("div",{className:"flex flex-col items-center justify-start gap-[66px] w-full",children:(0,a.jsxs)("div",{className:"w-full flex items-center justify-center gap-1",children:[(0,a.jsx)("div",{className:"flex-grow pt-2 flex items-center justify-start",children:(0,a.jsx)("div",{className:"h-[2px] w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]"})}),(0,a.jsxs)("h1",{className:"m-0 text-4xl sm:text-5xl font-semibold text-[#00008B]",children:[(0,a.jsx)("span",{className:"text-[#23A3CD]",children:"WOB 2024 "}),"Top Performers"]}),(0,a.jsx)("div",{className:"flex-grow flex pt-2 items-center justify-end",children:(0,a.jsx)("div",{className:"h-[2px] w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]"})})]})})}),(0,a.jsx)(o.LZ,{mt:16}),(0,a.jsxs)("div",{className:"py-5 px-0 xl:pb-12 xl:px-48 xl:pt-0 text-center",children:[(0,a.jsxs)("div",{className:"flex md:flex-row justify-between gap-y-1 gap-x-1 md:gap-x-2 items-center my-10",children:[(0,a.jsxs)("div",{className:"bg-[#B9EEFF] shadow-2xl rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===e[1]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.s7,{className:"skeleton-circle-md"}),(0,a.jsx)(c.N2,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==e[1]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{className:"w-12 md:w-16 lg:w-24 rounded-full m-auto inline-block object-cover bg-[#B9EEFF]",src:void 0!==e[1]?e[1].avatar:null,alt:""}),(0,a.jsx)(d.G,{className:"invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-[30%] right-[30%] bg-[#CD7F32] inline-block",icon:m.zhw,size:"2x"}),(0,a.jsx)("h3",{className:"text-black font-semibold mt-2 text-xs sm:text-sm md:text-md",children:void 0!==e[1]?e[1].name:null})]})]}),(0,a.jsxs)("div",{className:"bg-[#B9EEFF] shadow-2xl rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===e[0]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.s7,{className:"skeleton-circle-lg"}),(0,a.jsx)(c.N2,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==e[0]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{className:"w-12 md:w-16 lg:w-40 rounded-full m-auto bg-[#B9EEFF]",src:void 0!==e[0]?e[0].avatar:null,alt:""}),(0,a.jsx)(d.G,{className:"invisible lg:visible w-10 h-10 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-[#FFD700] inline-block",icon:m.zhw,size:"3x"}),(0,a.jsx)("h3",{className:"text-black font-semibold mt-4 text-xs sm:text-sm md:text-md",children:void 0!==e[0]?e[0].name:null})]})]}),(0,a.jsxs)("div",{className:"bg-[#B9EEFF] shadow-2xl rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===e[2]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.s7,{className:"skeleton-circle-md"}),(0,a.jsx)(c.N2,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==e[2]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{className:"w-12 md:w-16 lg:w-24 rounded-full m-auto bg-[#B9EEFF]",src:void 0!==e[2]?e[2].avatar:null,alt:""}),(0,a.jsx)(d.G,{className:"invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-[30%] right-[30%] bg-[#C0C0C0] inline-block",icon:m.zhw,size:"2x"}),(0,a.jsx)("h3",{className:"text-black font-semibold mt-2 text-xs sm:text-sm md:text-md",children:void 0!==e[2]?e[2].name:null})]})]})]}),(0,a.jsx)("div",{className:"w-full max-w-[1171px] p-5 m-auto rounded-[35px] mt-5 border-2 bg-[#B9EEFF]",children:(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"min-w-full text-left text-sm whitespace-nowrap",children:[(0,a.jsxs)("thead",{children:[(0,a.jsxs)("tr",{className:"bg-[#00008B] text-[#56AAC5] font-semibold text-lg h-[89px] opacity-70",children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-4 rounded-l-[35px]",children:"Rank"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-4",children:"Avatar"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-4",children:"Github Username"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-4",children:"No. of PR\u2019s"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-4",children:"Score"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-4 rounded-r-[35px]",children:"Badge"})]}),(0,a.jsx)("br",{})]}),(0,a.jsx)("tbody",{children:e.map((function(e,r){return(0,a.jsxs)("tr",{className:"h-[89px] text-lg text-[#56AAC5] ".concat(r%2===0?"bg-white":"bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white opacity-70"," hover:bg-neutral-100 rounded-[35px]"),children:[(0,a.jsx)("td",{scope:"row",className:"px-6 py-4 rounded-l-[35px]",children:e.rank}),(0,a.jsx)("td",{className:"px-6 py-4",children:(0,a.jsx)(l(),{className:"rounded-full",width:"40px",height:"40px",src:e.avatar,alt:""})}),(0,a.jsx)("td",{className:"px-6 py-4",children:(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)(l(),{className:"rounded-full",width:"24px",height:"24px",src:"/WoB/leaderboard_github.png",alt:""}),e.name]})}),(0,a.jsx)("td",{className:"px-6 py-4",children:e.prs}),(0,a.jsx)("td",{className:"px-6 py-4",children:e.score}),(0,a.jsx)("td",{className:"px-6 py-4 rounded-r-[35px]",children:e.badge&&(0,a.jsx)(l(),{src:e.badge,alt:""})})]},r)}))})]})})})]})]})}}},function(e){e.O(0,[112,895,814,675,774,888,179],(function(){return r=5608,e(e.s=r);var r}));var r=e.O();_N_E=r}]);