(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wobEvents",function(){return n(6427)}])},6427:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var i=n(85893),r=n(59876),l=n(9008),o=n.n(l),c=n(67294);function s(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}var a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(i&&(i+=" "),i+=t);return i};function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function u(e){var t,n=e.current,i=e.next,r=e.className,l=e.style,o=c.useState({current:n,next:i}),s=o[0],u=o[1],m=c.useState(!1),x=m[0],f=m[1];return c.useEffect((function(){s.current!==n?(s.current===s.next&&u(d({},s,{next:i})),f(!0)):f(!1)}),[n,i]),c.createElement("div",{className:a("fcc__digit_block","_2EBbg",r),style:l},c.createElement("div",{className:"_SKh-V"},s.next),c.createElement("div",{className:"_106d2"},s.current),c.createElement("div",{className:a("_3luxx",(t={},t._2kgZC=x,t)),onTransitionEnd:function(){u({current:n,next:i}),f(!1)}},c.createElement("div",{className:a("_2v-d4","_1GZQ7")},s.current),c.createElement("div",{className:a("_2v-d4","_3AVXa")},s.next)))}function m(e){var t=new Date(e);if(isNaN(t.getTime()))throw Error("Invalid date");var n=Date.now(),i=Math.round((t.getTime()-n)/1e3);return i<0&&(i=0),{total:i,days:Math.floor(i/86400),hours:Math.floor(i/3600%24),minutes:Math.floor(i/60%60),seconds:Math.floor(i%60)}}function x(e){return("0".repeat(Math.max(0,2-String(e).length))+String(e)).split("")}function f(e){if(void 0!==e)return"string"==typeof e?e:e+"px"}var v=["to","className","style","children","onComplete","onTick","showLabels","showSeparators","labels","labelStyle","digitBlockStyle","separatorStyle","dividerStyle","duration","renderMap","hideOnComplete","stopOnHiddenVisibility","renderOnServer","spacing"],h=[!0,!0,!0,!0],g=["Days","Hours","Minutes","Seconds"];function p(e){var t,n=e.to,i=e.className,r=e.style,l=e.children,o=e.onComplete,s=void 0===o?function(){}:o,p=e.onTick,b=void 0===p?function(){}:p,w=e.showLabels,y=void 0===w||w,N=e.showSeparators,_=void 0===N||N,j=e.labels,E=void 0===j?g:j,k=e.labelStyle,S=e.digitBlockStyle,C=e.separatorStyle,F=e.dividerStyle,B=e.duration,O=void 0===B?.7:B,D=e.renderMap,M=void 0===D?h:D,W=e.hideOnComplete,T=void 0===W||W,I=e.stopOnHiddenVisibility,L=void 0!==I&&I,z=e.renderOnServer,A=void 0!==z&&z,P=e.spacing,R=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t.indexOf(n=l[i])>=0||(r[n]=e[n]);return r}(e,v),X=c.useState(q),G=X[0],H=X[1],V=c.useRef(0);function Z(){window.clearInterval(V.current)}function q(){var e=m(n);return{timeDelta:e,completed:0===e.total}}function K(){var e=q();H(e),b(e),e.completed&&(Z(),s())}(0,c.useEffect)((function(){if(L){var e=function(){"visible"===document.visibilityState?(K(),V.current=window.setInterval(K,1e3)):Z()};return e(),document.addEventListener("visibilitychange",e),function(){Z(),document.removeEventListener("visibilitychange",e)}}return Z(),K(),V.current=window.setInterval(K,1e3),function(){Z()}}),[n,L]);var Q=(0,c.useMemo)((function(){return d({"--fcc-flip-duration":O+"s","--fcc-spacing":f(null==P?void 0:P.clock),"--fcc-digit-block-width":f(null==S?void 0:S.width),"--fcc-digit-block-height":f(null==S?void 0:S.height),"--fcc-digit-block-radius":f(null==S?void 0:S.borderRadius),"--fcc-digit-block-spacing":f(null==P?void 0:P.digitBlock),"--fcc-shadow":null==S?void 0:S.boxShadow,"--fcc-digit-font-size":f(null==S?void 0:S.fontSize),"--fcc-digit-color":null==S?void 0:S.color,"--fcc-label-font-size":f(null==k?void 0:k.fontSize),"--fcc-label-color":null==k?void 0:k.color,"--fcc-divider-color":null==F?void 0:F.color,"--fcc-divider-height":f(null==F?void 0:F.height),"--fcc-background":(null==S?void 0:S.background)||(null==S?void 0:S.backgroundColor),"--fcc-separator-size":f(null==C?void 0:C.size),"--fcc-separator-color":_?null==C?void 0:C.color:"transparent"},r)}),[r,S,k,O,F,C,_,P]),J=c.useMemo((function(){if(S)return d({},S,{background:void 0,backgroundColor:void 0,width:void 0,height:void 0,boxShadow:void 0,fontSize:void 0,color:void 0,borderRadius:void 0})}),[S]),U=c.useMemo((function(){var e,t,n=(e=G.timeDelta,t=m((new Date).getTime()+1e3*(e.total-1)),{days:{current:x(e.days),next:x(t.days)},hours:{current:x(e.hours),next:x(t.hours)},minutes:{current:x(e.minutes),next:x(t.minutes)},seconds:{current:x(e.seconds),next:x(t.seconds)}}),i=M.length>=4?M.slice(0,4):h,r=E.length>=4?E.slice(0,4):g,l=Object.values(n),o=["day","hour","minute","second"];return i.map((function(e,t){return[e,o[t],l[t],r[t]]}))}),[M,G]);return null!=G&&G.completed&&T?c.createElement(c.Fragment,null,l):A||"undefined"!=typeof window?c.createElement("div",Object.assign({},R,{className:a("fcc","_qWTcH",(t={},t._1tbqx=y,t),i),style:Q,"data-testid":"fcc-container"}),U.map((function(e,t){var n=e[1],i=e[2];return e[0]?c.createElement(c.Fragment,{key:n},c.createElement("div",{className:"fcc__unit_time fcc__unit_time--"+n+" _3cpN7"},y&&c.createElement("div",{className:"fcc__label fcc__label--"+n+" _2aOn7",style:k},e[3]),i.current.map((function(e,t){return c.createElement(u,{key:t,current:e,next:i.next[t],style:J,className:"fcc__digit_block--"+n})}))),t<U.length-1&&c.createElement("div",{className:"fcc__separator _2hRXr"})):null}))):c.createElement(c.Fragment,null)}n(26837);var b=n(68527),w=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"WOB 2024 Events | GirlScript Winter of Blockchain"}),(0,i.jsx)("meta",{name:"description",content:"Browse the latest events at WOB 2024, hosted by GirlScript Foundation."}),(0,i.jsx)("link",{rel:"icon",href:"/WoB/Favicon.ico"})]}),(0,i.jsxs)("div",{className:"relative bg-cover bg-center max-w-[1232px] h-[800px] md:h-[600px] lg:h-[700px] xl:h-[800px] mt-8 mx-auto rounded-[28px]",style:{backgroundImage:"url('/WoB/events_bg.png')"},children:[(0,i.jsx)(b.LZ,{m:"20"}),(0,i.jsxs)("div",{className:"absolute inset-0 bg-[#739aa7] bg-opacity-5 rounded-[28px] flex flex-col justify-center items-center text-center",children:[(0,i.jsx)("h1",{className:"text-[#56AAC5] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4",children:"WOB 2024"}),(0,i.jsx)("h2",{className:"text-[#85C6DC] text-4xl md:text-5xl lg:text-6xl font-semibold mb-8",children:"Latest Event Name"}),(0,i.jsx)("p",{className:"text-white max-w-[917px] px-6 md:px-20 lg:px-24 text-lg md:text-xl mb-8",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nunc non ex facilisis, vel eleifend justo tempor."}),(0,i.jsx)("h2",{className:"text-[#B9EEFF] text-lg md:text-xl lg:text-3xl font-normal mb-8",children:"TIME REMAINING"}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(p,{to:(new Date).getTime()+864e5+5e3,className:"flip-clock"})})]})]}),(0,i.jsx)("div",{className:"flex justify-end px-4 md:px-24 py-6 md:py-10",children:(0,i.jsxs)("div",{className:"flex items-center h-[61px] rounded-[16px] bg-[#DBF6FF] text-[#85C6DC] w-[260px] md:w-[360px] p-2",children:[(0,i.jsx)(r.W1,{className:"text-[#85C6DC] bg-[#DBF6FF] w-6 h-6 mr-2"}),(0,i.jsx)("input",{type:"text",placeholder:"Search Events",className:"w-full p-2 text-white bg-[#DBF6FF] placeholder-[#85C6DC] outline-none"}),(0,i.jsx)(r.XC,{className:"text-[#85C6DC] bg-[#DBF6FF] w-6 h-6 ml-2"})]})}),(0,i.jsxs)("div",{className:"container mx-auto px-4 md:px-0 py-8",children:[(0,i.jsx)("h2",{className:"text-4xl md:text-6xl font-medium text-[#00008B] mb-6 md:mb-10 text-center md:text-left",children:"Past Events"}),(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6",children:[{name:"Blockchain and Crypto Conferences 2024",description:"Forbes",image:"/WoB/events_img.png",logo:"/WoB/f_logo.png",views:"2M views",time:"\u2022 5 months ago"},{name:"Blockchain and Crypto Conferences 2024",description:"Forbes",image:"/WoB/events_img.png",logo:"/WoB/f_logo.png",views:"2M views",time:"\u2022 5 months ago"}].map((function(e,t){return(0,i.jsxs)("div",{className:"bg-[#E6F6FF] rounded-lg max-w-[325px] m-auto overflow-hidden shadow-lg",children:[(0,i.jsx)("img",{src:e.image,alt:"Event ".concat(t+1),className:"w-full h-48 object-cover"}),(0,i.jsx)("div",{className:"p-4",children:(0,i.jsxs)("div",{className:"flex mb-2",children:[(0,i.jsx)("img",{src:e.logo,alt:"Logo",className:"w-10 h-10 mr-4 rounded-full"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-lg md:text-xl font-bold",children:e.name}),(0,i.jsx)("p",{className:"text-[#606060] mt-2",children:e.description}),(0,i.jsxs)("div",{className:"flex items-center text-[#606060] mt-2",children:[(0,i.jsx)("p",{className:"mr-4",children:e.views}),(0,i.jsx)("p",{children:e.time})]})]})]})})]},t)}))})]})]})}},26837:function(){}},function(e){e.O(0,[895,774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);