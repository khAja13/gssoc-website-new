(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{88429:function(e,n,t){"use strict";t.d(n,{UQ:function(){return U},KF:function(){return Y},XE:function(){return B},Qd:function(){return X},Hk:function(){return L}});var i=t(10894),r=t(5993),a=t(37496),o=t(15031),s=t(26450),l=t(67294);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},u.apply(this,arguments)}function c(e){return e.sort((function(e,n){var t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function d(e,n,t){var i=e+1;return t&&i>=n&&(i=0),i}function f(e,n,t){var i=e-1;return t&&i<0&&(i=n),i}var v="undefined"!==typeof window?l.useLayoutEffect:l.useEffect,m=function(){var e=this;this.descendants=new Map,this.register=function(n){var t;if(null!=n)return"object"==typeof(t=n)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?e.registerNode(n):function(t){e.registerNode(t,n)}},this.unregister=function(n){e.descendants.delete(n);var t=c(Array.from(e.descendants.keys()));e.assignIndex(t)},this.destroy=function(){e.descendants.clear()},this.assignIndex=function(n){e.descendants.forEach((function(e){var t=n.indexOf(e.node);e.index=t,e.node.dataset.index=e.index.toString()}))},this.count=function(){return e.descendants.size},this.enabledCount=function(){return e.enabledValues().length},this.values=function(){return Array.from(e.descendants.values()).sort((function(e,n){return e.index-n.index}))},this.enabledValues=function(){return e.values().filter((function(e){return!e.disabled}))},this.item=function(n){if(0!==e.count())return e.values()[n]},this.enabledItem=function(n){if(0!==e.enabledCount())return e.enabledValues()[n]},this.first=function(){return e.item(0)},this.firstEnabled=function(){return e.enabledItem(0)},this.last=function(){return e.item(e.descendants.size-1)},this.lastEnabled=function(){var n=e.enabledValues().length-1;return e.enabledItem(n)},this.indexOf=function(n){var t,i;return n&&null!=(t=null==(i=e.descendants.get(n))?void 0:i.index)?t:-1},this.enabledIndexOf=function(n){return null==n?-1:e.enabledValues().findIndex((function(e){return e.node.isSameNode(n)}))},this.next=function(n,t){void 0===t&&(t=!0);var i=d(n,e.count(),t);return e.item(i)},this.nextEnabled=function(n,t){void 0===t&&(t=!0);var i=e.item(n);if(i){var r=d(e.enabledIndexOf(i.node),e.enabledCount(),t);return e.enabledItem(r)}},this.prev=function(n,t){void 0===t&&(t=!0);var i=f(n,e.count()-1,t);return e.item(i)},this.prevEnabled=function(n,t){void 0===t&&(t=!0);var i=e.item(n);if(i){var r=f(e.enabledIndexOf(i.node),e.enabledCount()-1,t);return e.enabledItem(r)}},this.registerNode=function(n,t){if(n&&!e.descendants.has(n)){var i=c(Array.from(e.descendants.keys()).concat(n));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var r=u({node:n,index:-1},t);e.descendants.set(n,r),e.assignIndex(i)}}};var p=(0,s.kr)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),x=p[0],y=p[1];var h=t(97375);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},b.apply(this,arguments)}function g(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}var E=["onChange","defaultIndex","index","allowMultiple","allowToggle"],O=["isDisabled","isFocusable","id"],N=[x,function(){return y()},function(){return function(){var e=(0,l.useRef)(new m);return v((function(){return function(){return e.current.destroy()}})),e.current}()},function(e){return function(e){var n=y(),t=(0,l.useState)(-1),i=t[0],r=t[1],a=(0,l.useRef)(null);v((function(){return function(){a.current&&n.unregister(a.current)}}),[]),v((function(){if(a.current){var e=Number(a.current.dataset.index);i==e||Number.isNaN(e)||r(e)}}));var o=e?n.register(e):n.register;return{descendants:n,index:i,enabledIndex:n.enabledIndexOf(a.current),register:(0,s.lq)(o,a)}}(e)}],w=N[0],I=N[2],C=N[3];function P(e){var n=e.onChange,t=e.defaultIndex,i=e.index,r=e.allowMultiple,a=e.allowToggle,s=g(e,E);!function(e){var n=e.index||e.defaultIndex,t=!(0,o.o8)(n)&&!(0,o.kJ)(n)&&e.allowMultiple;(0,o.ZK)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: "+typeof n+","})}(e),function(e){(0,o.ZK)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);var u=I(),c=(0,l.useState)(-1),d=c[0],f=c[1];(0,h.zq)((function(){f(-1)}));var v=(0,h.Tx)({value:i,defaultValue:function(){return r?null!=t?t:[]:null!=t?t:-1},onChange:n}),m=v[0],p=v[1];return{index:m,setIndex:p,htmlProps:s,getAccordionItemProps:function(e){var n=!1;null!==e&&(n=(0,o.kJ)(m)?m.includes(e):m===e);return{isOpen:n,onChange:function(n){if(null!==e)if(r&&(0,o.kJ)(m)){var t=n?(0,o.jX)(m,e):(0,o.cl)(m,e);p(t)}else n?p(e):a&&p(-1)}}},focusedIndex:d,setFocusedIndex:f,descendants:u}}var T=(0,s.kr)({name:"AccordionContext",errorMessage:"useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"}),_=T[0],j=T[1];function k(e){var n=e.isDisabled,t=e.isFocusable,i=e.id,r=g(e,O),a=j(),u=a.getAccordionItemProps,c=a.setFocusedIndex,d=(0,l.useRef)(null),f=(0,h.ZS)(i,"accordion-button","accordion-panel"),v=f[0],m=f[1];!function(e){(0,o.ZK)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);var p=C({disabled:n&&!t}),x=p.register,y=p.index,E=p.descendants,N=u(-1===y?null:y),w=N.isOpen,I=N.onChange;!function(e){(0,o.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:w,isDisabled:n});var P=(0,l.useCallback)((function(){null==I||I(!w),c(y)}),[y,c,w,I]),T=(0,l.useCallback)((function(e){var n={ArrowDown:function(){var e=E.nextEnabled(y);e&&(0,o.T_)(e.node)},ArrowUp:function(){var e=E.prevEnabled(y);e&&(0,o.T_)(e.node)},Home:function(){var e=E.firstEnabled();e&&(0,o.T_)(e.node)},End:function(){var e=E.lastEnabled();e&&(0,o.T_)(e.node)}}[(0,o.uh)(e)];n&&(e.preventDefault(),n(e))}),[E,y]),_=(0,l.useCallback)((function(){c(y)}),[c,y]),k=(0,l.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),b({},e,{type:"button",ref:(0,s.lq)(x,d,t),id:v,disabled:!!n,"aria-expanded":!!w,"aria-controls":m,onClick:(0,o.v0)(e.onClick,P),onFocus:(0,o.v0)(e.onFocus,_),onKeyDown:(0,o.v0)(e.onKeyDown,T)})}),[v,n,w,P,_,T,m,x]),D=(0,l.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),b({},e,{ref:n,role:"region",id:m,"aria-labelledby":v,hidden:!w})}),[v,w,m]);return{isOpen:w,isDisabled:n,isFocusable:t,onOpen:function(){null==I||I(!0)},onClose:function(){null==I||I(!1)},getButtonProps:k,getPanelProps:D,htmlProps:r}}var D=["children","reduceMotion"],M=["htmlProps","descendants"],S=["htmlProps"],A=(0,r.eC)("Accordion"),F=A[0],H=A[1],U=(0,r.Gp)((function(e,n){var t=e.children,i=e.reduceMotion,a=g(e,D),s=(0,r.jC)("Accordion",a),u=P((0,r.Lr)(a)),c=u.htmlProps,d=u.descendants,f=g(u,M),v=l.useMemo((function(){return b({},f,{reduceMotion:!!i})}),[f,i]);return l.createElement(w,{value:d},l.createElement(_,{value:v},l.createElement(F,{value:s},l.createElement(r.m$.div,b({ref:n},c,{className:(0,o.cx)("chakra-accordion",a.className),__css:s.root}),t))))}));o.Ts&&(U.displayName="Accordion");var R=(0,s.kr)({name:"AccordionItemContext",errorMessage:"useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "}),z=R[0],K=R[1],X=(0,r.Gp)((function(e,n){var t=e.children,i=e.className,a=k(e),s=a.htmlProps,u=g(a,S),c=b({},H().container,{overflowAnchor:"none"}),d=l.useMemo((function(){return u}),[u]);return l.createElement(z,{value:d},l.createElement(r.m$.div,b({ref:n},s,{className:(0,o.cx)("chakra-accordion__item",i),__css:c}),(0,o.Pu)(t,{isExpanded:!!u.isOpen,isDisabled:!!u.isDisabled})))}));o.Ts&&(X.displayName="AccordionItem");var Y=(0,r.Gp)((function(e,n){var t=(0,K().getButtonProps)(e,n),i=b({display:"flex",alignItems:"center",width:"100%",outline:0},H().button);return l.createElement(r.m$.button,b({},t,{className:(0,o.cx)("chakra-accordion__button",e.className),__css:i}))}));o.Ts&&(Y.displayName="AccordionButton");var L=(0,r.Gp)((function(e,n){var t=j().reduceMotion,i=K(),s=i.getPanelProps,u=i.isOpen,c=s(e,n),d=(0,o.cx)("chakra-accordion__panel",e.className),f=H();t||delete c.hidden;var v=l.createElement(r.m$.div,b({},c,{__css:f.panel,className:d}));return t?v:l.createElement(a.UO,{in:u},v)}));o.Ts&&(L.displayName="AccordionPanel");var B=function(e){var n=K(),t=n.isOpen,r=n.isDisabled,a=j().reduceMotion,s=(0,o.cx)("chakra-accordion__icon",e.className),u=b({opacity:r?.4:1,transform:t?"rotate(-180deg)":void 0,transition:a?void 0:"transform 0.2s",transformOrigin:"center"},H().icon);return l.createElement(i.JO,b({viewBox:"0 0 24 24","aria-hidden":!0,className:s,__css:u},e),l.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))};o.Ts&&(B.displayName="AccordionIcon")},37496:function(e,n,t){"use strict";t.d(n,{Mi:function(){return M},Qh:function(){return T},UO:function(){return N},Xc:function(){return A},uf:function(){return I}});var i=t(15031),r=t(38554),a=t.n(r),o=t(21190),s=t(88970),l=t(67294);function u(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},c.apply(this,arguments)}var d={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},f={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},v={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},m={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},p={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function x(e){var n;switch(null!=(n=null==e?void 0:e.direction)?n:"right"){case"right":default:return v;case"left":return f;case"bottom":return p;case"top":return m}}var y={enter:{duration:.2,ease:d.easeOut},exit:{duration:.1,ease:d.easeIn}},h=function(e,n){return c({},e,{delay:(0,i.hj)(n)?n:null==n?void 0:n.enter})},b=function(e,n){return c({},e,{delay:(0,i.hj)(n)?n:null==n?void 0:n.exit})},g=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],E={exit:{height:{duration:.2,ease:d.ease},opacity:{duration:.3,ease:d.ease}},enter:{height:{duration:.3,ease:d.ease},opacity:{duration:.4,ease:d.ease}}},O={exit:function(e){var n,t,i=e.animateOpacity,r=e.startingHeight,a=e.transition,o=e.transitionEnd,s=e.delay;return c({},i&&{opacity:(t=r,null!=t&&parseInt(t.toString(),10)>0?1:0)},{height:r,transitionEnd:null==o?void 0:o.exit,transition:null!=(n=null==a?void 0:a.exit)?n:b(E.exit,s)})},enter:function(e){var n,t=e.animateOpacity,i=e.endingHeight,r=e.transition,a=e.transitionEnd,o=e.delay;return c({},t&&{opacity:1},{height:i,transitionEnd:null==a?void 0:a.enter,transition:null!=(n=null==r?void 0:r.enter)?n:h(E.enter,o)})}},N=l.forwardRef((function(e,n){var t=e.in,r=e.unmountOnExit,d=e.animateOpacity,f=void 0===d||d,v=e.startingHeight,m=void 0===v?0:v,p=e.endingHeight,x=void 0===p?"auto":p,y=e.style,h=e.className,b=e.transition,E=e.transitionEnd,N=u(e,g),w=l.useState(!1),I=w[0],C=w[1];l.useEffect((function(){var e=setTimeout((function(){C(!0)}));return function(){return clearTimeout(e)}}),[]),(0,i.ZK)({condition:Boolean(m>0&&r),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var P=parseFloat(m.toString())>0,T={startingHeight:m,endingHeight:x,animateOpacity:f,transition:I?b:{enter:{duration:0}},transitionEnd:a()(E,{exit:r?void 0:{display:P?"block":"none"}})},_=!r||t,j=t||r?"enter":"exit";return l.createElement(o.M,{initial:!1,custom:T},_&&l.createElement(s.E.div,c({ref:n},N,{className:(0,i.cx)("chakra-collapse",h),style:c({overflow:"hidden",display:"block"},y),custom:T,variants:O,initial:!!r&&"exit",animate:j,exit:"exit"})))}));i.Ts&&(N.displayName="Collapse");var w=["unmountOnExit","in","className","transition","transitionEnd","delay"],I={initial:"exit",animate:"enter",exit:"exit",variants:{enter:function(e){var n,t=void 0===e?{}:e,i=t.transition,r=t.transitionEnd,a=t.delay;return{opacity:1,transition:null!=(n=null==i?void 0:i.enter)?n:h(y.enter,a),transitionEnd:null==r?void 0:r.enter}},exit:function(e){var n,t=void 0===e?{}:e,i=t.transition,r=t.transitionEnd,a=t.delay;return{opacity:0,transition:null!=(n=null==i?void 0:i.exit)?n:b(y.exit,a),transitionEnd:null==r?void 0:r.exit}}}},C=l.forwardRef((function(e,n){var t=e.unmountOnExit,r=e.in,a=e.className,d=e.transition,f=e.transitionEnd,v=e.delay,m=u(e,w),p=r||t?"enter":"exit",x=!t||r&&t,y={transition:d,transitionEnd:f,delay:v};return l.createElement(o.M,{custom:y},x&&l.createElement(s.E.div,c({ref:n,className:(0,i.cx)("chakra-fade",a),custom:y},I,{animate:p},m)))}));i.Ts&&(C.displayName="Fade");var P=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],T={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(e){var n,t=e.reverse,i=e.initialScale,r=e.transition,a=e.transitionEnd,o=e.delay;return c({opacity:0},t?{scale:i,transitionEnd:null==a?void 0:a.exit}:{transitionEnd:c({scale:i},null==a?void 0:a.exit)},{transition:null!=(n=null==r?void 0:r.exit)?n:b(y.exit,o)})},enter:function(e){var n,t=e.transitionEnd,i=e.transition,r=e.delay;return{opacity:1,scale:1,transition:null!=(n=null==i?void 0:i.enter)?n:h(y.enter,r),transitionEnd:null==t?void 0:t.enter}}}},_=l.forwardRef((function(e,n){var t=e.unmountOnExit,r=e.in,a=e.reverse,d=void 0===a||a,f=e.initialScale,v=void 0===f?.95:f,m=e.className,p=e.transition,x=e.transitionEnd,y=e.delay,h=u(e,P),b=!t||r&&t,g=r||t?"enter":"exit",E={initialScale:v,reverse:d,transition:p,transitionEnd:x,delay:y};return l.createElement(o.M,{custom:E},b&&l.createElement(s.E.div,c({ref:n,className:(0,i.cx)("chakra-offset-slide",m)},T,{animate:g,custom:E},h)))}));i.Ts&&(_.displayName="ScaleFade");var j=["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay"],k={exit:{duration:.15,ease:d.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},D={exit:function(e){var n,t=e.direction,i=e.transition,r=e.transitionEnd,a=e.delay;return c({},x({direction:t}).exit,{transition:null!=(n=null==i?void 0:i.exit)?n:b(k.exit,a),transitionEnd:null==r?void 0:r.exit})},enter:function(e){var n,t=e.direction,i=e.transitionEnd,r=e.transition,a=e.delay;return c({},x({direction:t}).enter,{transition:null!=(n=null==r?void 0:r.enter)?n:h(k.enter,a),transitionEnd:null==i?void 0:i.enter})}},M=l.forwardRef((function(e,n){var t=e.direction,r=void 0===t?"right":t,a=e.style,d=e.unmountOnExit,f=e.in,v=e.className,m=e.transition,p=e.transitionEnd,y=e.delay,h=u(e,j),b=x({direction:r}),g=Object.assign({position:"fixed"},b.position,a),E=!d||f&&d,O=f||d?"enter":"exit",N={transitionEnd:p,transition:m,direction:r,delay:y};return l.createElement(o.M,{custom:N},E&&l.createElement(s.E.div,c({},h,{ref:n,initial:"exit",className:(0,i.cx)("chakra-slide",v),animate:O,exit:"exit",custom:N,variants:D,style:g})))}));i.Ts&&(M.displayName="Slide");var S=["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"],A={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(e){var n,t=e.offsetX,i=e.offsetY,r=e.transition,a=e.transitionEnd,o=e.delay;return{opacity:0,x:t,y:i,transition:null!=(n=null==r?void 0:r.exit)?n:b(y.exit,o),transitionEnd:null==a?void 0:a.exit}},enter:function(e){var n,t=e.transition,i=e.transitionEnd,r=e.delay;return{opacity:1,x:0,y:0,transition:null!=(n=null==t?void 0:t.enter)?n:h(y.enter,r),transitionEnd:null==i?void 0:i.enter}},exit:function(e){var n,t=e.offsetY,i=e.offsetX,r=e.transition,a=e.transitionEnd,o=e.reverse,s=e.delay,l={x:i,y:t};return c({opacity:0,transition:null!=(n=null==r?void 0:r.exit)?n:b(y.exit,s)},o?c({},l,{transitionEnd:null==a?void 0:a.exit}):{transitionEnd:c({},l,null==a?void 0:a.exit)})}}},F=l.forwardRef((function(e,n){var t=e.unmountOnExit,r=e.in,a=e.reverse,d=void 0===a||a,f=e.className,v=e.offsetX,m=void 0===v?0:v,p=e.offsetY,x=void 0===p?8:p,y=e.transition,h=e.transitionEnd,b=e.delay,g=u(e,S),E=!t||r&&t,O=r||t?"enter":"exit",N={offsetX:m,offsetY:x,reverse:d,transition:y,transitionEnd:h,delay:b};return l.createElement(o.M,{custom:N},E&&l.createElement(s.E.div,c({ref:n,className:(0,i.cx)("chakra-offset-slide",f),custom:N},A,{animate:O},g)))}));i.Ts&&(F.displayName="SlideFade")},9008:function(e,n,t){e.exports=t(5443)},25054:function(e,n,t){"use strict";t.d(n,{w_:function(){return v}});var i=t(67294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.createContext&&i.createContext(r),o=["attr","size","title"];function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(n.indexOf(i)>=0)continue;t[i]=e[i]}return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,n||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:n+""}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return e&&e.map(((e,n)=>i.createElement(e.tag,c({key:n},e.attr),f(e.child))))}function v(e){return n=>i.createElement(m,l({attr:c({},e.attr)},n),f(e.child))}function m(e){var n=n=>{var t,{attr:r,size:a,title:u}=e,d=s(e,o),f=a||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,d,{className:t,style:c(c({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&i.createElement("title",null,u),e.children)};return void 0!==a?i.createElement(a.Consumer,null,(e=>n(e))):n(r)}}}]);