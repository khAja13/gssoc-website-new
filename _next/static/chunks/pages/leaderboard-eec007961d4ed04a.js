(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[268],{9123:function(e,l,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leaderboard",function(){return r(5800)}])},5800:function(e,l,r){"use strict";r.r(l);var a=r(6042),i=r(9396),t=r(603),s=r(5893),n=r(7375),d=r(9609),o=r(7983),c=r(8527),x=r(9699),u=r(1417),m=r(1436),h=r(2814),g=r(2010),p=r(9008),f=r.n(p),b=r(7294),v=r(725),j=r.n(v),w=r(8447),k=[{id:"position",label:"Rank",minWidth:50},{id:"avatar",label:"Avatar",minWidth:50},{id:"username",label:"GitHub Username",minWidth:170},{id:"prnums",label:"No. Of PRs",minWidth:100,align:"center"},{id:"score",label:"Score",minWidth:100,align:"right"},{id:"viewBtn",label:"",minWidth:100,align:"right"}];l.default=function(){var e=function(e,l,r,a,i,t,s,n,d,o,c,x){return{username:e,avatar:l,prnums:r,score:a,profile_url:i,prlinks:t,level0:s,level1:n,level2:d,level3:o,level4:c,rank:x}},l=(0,g.F)().theme,r=(0,b.useState)([]),p=r[0],v=r[1],N=(0,b.useState)([]),y=N[0],S=N[1],_=(0,b.useState)([]),C=_[0],z=_[1],O=(0,b.useState)([]),F=O[0],W=O[1],G=(0,b.useState)(""),L=G[0],T=G[1],E=(0,b.useState)(""),P=E[0],R=E[1],A=(0,b.useState)(""),B=A[0],Z=A[1],I=(0,b.useState)(""),q=I[0],D=I[1],H=(0,b.useState)(""),K=H[0],M=H[1],U=(0,b.useState)(!1),X=U[0],Y=U[1],$=(0,b.useState)(!1),J=$[0],Q=$[1],V=(0,b.useState)("Sent request to the server"),ee=V[0],le=V[1],re=(0,b.useState)(!1),ae=re[0],ie=re[1],te=(0,t.Z)(b.useState(!0),2),se=(te[0],te[1]),ne=(0,b.useState)(1),de=ne[0],oe=ne[1],ce=function(){var e=!0,l=(0,b.useCallback)((function(){return{width:window.innerWidth,height:window.innerHeight}}),[e]),r=(0,b.useState)(l()),a=r[0],i=r[1];return(0,b.useEffect)((function(){var e=function(){i(l())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[l,e]),a}(),xe=(ce.height,ce.width),ue=[];for(var me in(0,b.useEffect)((function(){Y(!0),Q(!0),setTimeout((function(){le("Waiting for response from server")}),600),fetch("https://gssoc23-leaderboard.onrender.com/OSLeaderboard").then((function(e){return le("Data received. Starting to populate."),setTimeout((function(){Y(!1)})),e.json()})).then((function(e){if(0===e.leaderboard.length&&!0===e.success)Y(!1),Q(!1),D(null);else{e.leaderboard.sort((function(e,l){return l.score-e.score||l.level4-e.level4||l.level3-e.level3||l.level2-e.level2||l.level1-e.level1||l.level0-e.level0||e.login<l.login}));var l=["raj03kumar","chinmoy12c"];console.log("Disqualified : ",l);var r=e.leaderboard.filter((function(e){return!1===l.includes(e.login)})).map((function(e,l){return(0,i.Z)((0,a.Z)({},e),{rank:l+1})}));S(r.slice(0,50)),Q(!1),Y(!1),v(r),z(r),se(!1),D(e.updatedTimestring),ie(!0),setTimeout((function(){ie(!1)}),5e3)}}))}),[]),y)ue.push(e([y[me].login,y[me].url],y[me].avatar_url,y[me].pr_urls.filter((function(e,l,r){return r.indexOf(e)===l})).length,y[me].score,y[me].profile_url,y[me].pr_urls,y[me].level0,y[me].level1,y[me].level2,y[me].level3,y[me].level4,y[me].rank));var he=(0,n.qY)(),ge=he.isOpen,pe=he.onOpen,fe=he.onClose,be=[],ve=function(e){for(var l in pe(!0),y[e].pr_urls)be.push(y[e].pr_urls[l]+"\n\n\n\n");var r=be.filter((function(e,l,r){return r.indexOf(e)===l}));W(r),T(y[e].login),Z(y[e].avatar_url),R(y[e].score)},je=function(){if(Q(!0),""===K&&y.length!==p.length)z(p),oe(1),Q(!1);else{var e=p.filter((function(e){return e.login.toLowerCase().includes(K.toLowerCase())}));z(e),oe(1),Q(!1)}},we=function(){be=[],pe(!1),fe()};return(0,b.useEffect)((function(){50*(de-1)+50<C.length?S(C.slice(50*(de-1),50*(de-1)+50)):S(C.slice(50*(de-1)))}),[de,C]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(f(),{children:[(0,s.jsx)("title",{children:"Leaderboard | GirlScript Summer of Code 2023 | GirlScript Foundation India"}),(0,s.jsx)("meta",{name:"description",content:"GirlScript Summer of Code Certificates"})]}),X&&(0,s.jsxs)("div",{className:"loader-div",children:[(0,s.jsx)("div",{className:"overlay dark:bg-darkmode_gray-0"}),(0,s.jsx)("div",{className:"loader-group-container",children:(0,s.jsxs)("div",{className:"loader-group dark:bg-black",children:[(0,s.jsx)(d.$,{className:"loader",thickness:"6px",speed:"0.65s",emptyColor:"gray.200",color:"orange.500",size:"xl"}),(0,s.jsx)("span",{className:"loading-msg dark:text-white",children:ee})]})})]}),ae&&(0,s.jsx)(j(),{className:"fullscreen"}),(0,s.jsxs)("div",{className:"container transition-colors mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-10 lg:px-20 2xl:px-32 dark:bg-darkmode_gray-0 dark:transition-colors ",style:{margin:"auto"},children:[(0,s.jsx)("div",{className:"items-center justify-center",children:(0,s.jsx)("div",{className:"font-sans text-center text-2xl font-extrabold",children:(0,s.jsxs)("div",{className:"text-black dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0",children:[(0,s.jsx)("span",{className:"text-primary_orange-0",children:" GSSoC 2023 "}),"Top Performers"]})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"py-5 px-0 xl:pb-12 xl:px-24 xl:pt-0 text-center",children:[(0,s.jsxs)("div",{className:"flex md:flex-row justify-between gap-y-1 gap-x-1 md:gap-x-2 items-center my-10",children:[(0,s.jsxs)("div",{className:"bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===p[1]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.s7,{className:"skeleton-circle-md"}),(0,s.jsx)(o.N2,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==p[1]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{className:"w-12 md:w-16 lg:w-24 rounded-full m-auto inline-block object-cover bg-white",src:void 0!==p[1]?p[1].avatar_url:null}),(0,s.jsx)(h.G,{className:"invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-amber-300 inline-block",icon:u.zhw,size:"2x"}),(0,s.jsxs)("h3",{className:"text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md",children:["2."," ",void 0!==p[1]?p[1].login:null]})]})]}),(0,s.jsxs)("div",{className:"bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===p[0]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.s7,{className:"skeleton-circle-lg"}),(0,s.jsx)(o.N2,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==p[0]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{className:"w-12 md:w-16 lg:w-40 rounded-full m-auto bg-white",src:void 0!==p[0]?p[0].avatar_url:null}),(0,s.jsx)(h.G,{className:"invisible lg:visible w-10 h-10 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-cyan-200 inline-block",icon:u.zhw,size:"3x"}),(0,s.jsxs)("h3",{className:"text-black dark:text-primary_orange-0 font-semibold mt-4 text-xs sm:text-sm md:text-md",children:["1."," ",void 0!==p[0]?p[0].login:null]})]})]}),(0,s.jsxs)("div",{className:"bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===p[2]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.s7,{className:"skeleton-circle-md"}),(0,s.jsx)(o.N2,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==p[2]&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{className:"w-12 md:w-16 lg:w-24 rounded-full m-auto bg-white",src:void 0!==p[2]?p[2].avatar_url:null}),(0,s.jsx)(h.G,{className:"invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-zinc-100 inline-block",icon:u.zhw,size:"2x"}),(0,s.jsxs)("h3",{className:"text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md",children:["3."," ",void 0!==p[2]?p[2].login:null]})]})]})]}),(0,s.jsx)("div",{className:"mt-20",children:(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("div",{className:"mb-3 xl:w-96",children:(0,s.jsxs)("div",{className:"input-group relative flex flex-wrap items-stretch w-full mb-4 justify-end",children:[(0,s.jsxs)("div",{className:"relative flex search-container",children:[(0,s.jsx)("input",{onChange:function(e){M(e.target.value)},type:"search",className:"form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none dark:placeholder-neutral-300",placeholder:"Search","aria-label":"Search","aria-describedby":"button-addon2",onKeyUp:function(e){"Enter"===e.key&&je()}}),(0,s.jsx)("span",{className:"search-count dark:text-neutral-300",children:C.length})]}),(0,s.jsx)("button",{onClick:function(){je()},className:"btn inline-block px-6 py-2.5 bg-gray-300 dark:bg-neutral-600 text-gray-600 font-medium text-xs leading-tight uppercase hover:text-gray-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center",type:"button",id:"button-addon2",style:{padding:"10px 18px",maxWidth:"50px",width:"20%"},children:(0,s.jsx)("svg",{className:"w-4 fill-neutral-600 hover:fill-neutral-800 dark:fill-neutral-300 dark:hover:fill-neutral-100","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,s.jsx)("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})})})]})})})}),(0,s.jsx)("div",{className:"bg-sky-100 dark:bg-orange-200 px-1.5 py-1.5 rounded-md mb-3",children:(0,s.jsxs)("p",{className:"text-sky-700 dark:text-orange-900 text-sm",children:[!1===X&&""!==q&&(0,s.jsxs)(s.Fragment,{children:["The leaderboard was last updated on: ",(0,s.jsx)("b",{children:q})]}),!1===X&&null===q&&(0,s.jsx)(s.Fragment,{children:"The server is updating. Please comeback after 5-10 mins"})]})}),(0,s.jsxs)("div",{className:"w-full overflow-x-auto",children:[(0,s.jsxs)("div",{className:"table w-full",children:[(0,s.jsx)("div",{className:"table-header-group ",children:(0,s.jsx)("div",{className:"table-row",children:k.map((function(e){return(0,s.jsx)("div",{className:"table-cell font-serif px-4 py-4 bg-black text-white dark:bg-primary_orange-0 dark:text-black",align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),!J&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"table-row-group",children:ue.map((function(e,l){return(0,s.jsx)(s.Fragment,{children:l%2?(0,s.jsx)("div",{className:"table-row",role:"checkbox",tabIndex:-1,children:k.map((function(l){var r=e[l.id];return(0,s.jsx)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",align:l.align,style:{verticalAlign:"middle"},children:"avatar"===l.id?(0,s.jsx)("img",{className:"w-9 rounded-full m-auto bg-white",src:r}):"position"===l.id?e.rank:"username"===l.id?(0,s.jsxs)("div",{className:"flex relative left-6 md:left-12 lg:left-24",children:[(0,s.jsx)(h.G,{className:"mr-5",icon:u.zhw,size:"2x"}),(0,s.jsx)("a",{href:r[1],target:"_blank",className:"no-underline username",style:{alignSelf:"center",cursor:"pointer"},rel:"noreferrer",children:r[0]})]}):"viewBtn"===l.id?(0,s.jsx)("button",{onClick:function(){ve(ue.indexOf(e))},color:"primary",className:"view-btn",style:{background:"#FA6329",border:"none",padding:"5px 12px",color:"white",borderRadius:5,cursor:"pointer",fontSize:"17px"},children:(0,s.jsx)(h.G,{icon:m.Zrf})}):r},l.id)}))},e.username):(0,s.jsx)("div",{className:"table-row",role:"checkbox",tabIndex:-1,children:k.map((function(l){var r=e[l.id];return(0,s.jsx)("div",{className:"table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium",align:l.align,children:"avatar"===l.id?(0,s.jsx)("img",{className:"w-9 rounded-full m-auto bg-white",src:r}):"position"===l.id?e.rank:"username"===l.id?(0,s.jsxs)("div",{className:"flex relative left-6 md:left-12 lg:left-24",children:[(0,s.jsx)(h.G,{className:"mr-5",icon:u.zhw,size:"2x"}),(0,s.jsx)("a",{href:r[1],className:"no-underline username",style:{alignSelf:"center"},children:r[0]})]}):"viewBtn"===l.id?(0,s.jsx)("button",{onClick:function(){ve(ue.indexOf(e))},color:"primary",className:"view-btn",style:{background:"#FA6329",border:"none",padding:"5px 12px",color:"white",borderRadius:5,cursor:"pointer",fontSize:"17px"},children:(0,s.jsx)(h.G,{icon:m.Zrf})}):r},l.id)}))},e.username)})}))})})]}),J&&(0,s.jsxs)(c.Kq,{style:{marginTop:"10px"},children:[(0,s.jsx)(o.Od,{height:"40px"}),(0,s.jsx)(o.Od,{height:"40px"}),(0,s.jsx)(o.Od,{height:"40px"}),(0,s.jsx)(o.Od,{height:"40px"})]})]}),(0,s.jsx)("div",{className:"pagination-holder",children:(0,s.jsx)(w.Z,{innerClass:"dark"===l?"dark-theme pagination":"pagination",itemClass:"page-item",linkClass:"page-link",activePage:de,activeClass:"active-page",itemsCountPerPage:50,totalItemsCount:C.length,pageRangeDisplayed:xe<600?3:5,onChange:function(e){var l;console.log(e),l=e,console.log("active page is ".concat(l)),oe(l)}})}),"dark"===l?(0,s.jsxs)(x.u_,{isOpen:ge,onClose:we,size:"xl","aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",backgroundColor:"#000",children:[(0,s.jsx)(x.ZA,{}),(0,s.jsxs)(x.hz,{backgroundColor:"#000000",children:[(0,s.jsx)(x.xB,{className:"dark:text-white flex m-0 py-4 px-6 font-medium text-lg leading-relaxed",id:"alert-dialog-slide-title",children:L+"'s Stats"}),(0,s.jsxs)(x.fe,{children:[(0,s.jsx)("div",{className:"flex-auto py-2 px-6 overflow-y-auto",children:(0,s.jsxs)("div",{id:"alert-dialog-slide-description",children:[(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("img",{alt:"Suvraneel Bhuin",src:B,className:"w-12 rounded-full xl:w-24"}),(0,s.jsxs)("p",{className:"dark:bg-neutral-900 dark:text-white w-24 rounded-full xl:w-36 p-3 text-center modal-score",children:["\ud83c\udfc6 ",P]})]}),(0,s.jsxs)("div",{style:{marginTop:30,fontWeight:"bolder",color:"white"},children:["List Of PRs:"," "]}),0!==F.length&&F.map((function(e){return(0,s.jsx)("a",{className:"pr-links text-white",href:e,children:e},e)}))]})}),(0,s.jsx)("div",{className:"flex px-2 py-2 items-center justify-end",children:(0,s.jsx)("button",{onClick:we,color:"primary",className:"close-btn",style:{background:"#FA6329",border:"none",padding:"10px 20px",color:"white",borderRadius:5,cursor:"pointer",fontSize:"18px"},children:"Close"})})]})]})]}):(0,s.jsxs)(x.u_,{isOpen:ge,onClose:we,size:"xl","aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[(0,s.jsx)(x.ZA,{}),(0,s.jsxs)(x.hz,{children:[(0,s.jsx)(x.xB,{className:"dark:text-white flex m-0 py-4 px-6 font-medium text-lg leading-relaxed",id:"alert-dialog-slide-title",children:L+"'s Stats"}),(0,s.jsxs)(x.fe,{children:[(0,s.jsx)("div",{className:"flex-auto py-2 px-6 overflow-y-auto",children:(0,s.jsxs)("div",{id:"alert-dialog-slide-description",children:[(0,s.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)("img",{alt:"Suvraneel Bhuin",src:B,className:"w-12 rounded-full xl:w-24"}),(0,s.jsxs)("p",{className:"bg-orange-100 dark:bg-neutral-900 dark:text-white w-24 rounded-full xl:w-36 p-3 text-center modal-score",children:["\ud83c\udfc6 ",P]})]}),(0,s.jsxs)("div",{style:{marginTop:30,fontWeight:"bolder"},children:["List Of PRs:"," "]}),0!==F.length&&F.map((function(e){return(0,s.jsx)("a",{className:"pr-links text-black",href:e,children:e},e)}))]})}),(0,s.jsx)("div",{className:"flex px-2 py-2 items-center justify-end",children:(0,s.jsx)("button",{onClick:we,color:"primary",className:"close-btn",style:{background:"#FA6329",border:"none",padding:"10px 20px",color:"white",borderRadius:5,cursor:"pointer",fontSize:"18px"},children:"Close"})})]})]})]})]})})]})]})}}},function(e){e.O(0,[112,523,895,814,699,622,774,888,179],(function(){return l=9123,e(e.s=l);var l}));var l=e.O();_N_E=l}]);