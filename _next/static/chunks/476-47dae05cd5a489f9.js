(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{2711:function(e){e.exports=function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="dist/",t(0)}([function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=(n(i(1)),i(6)),a=n(r),s=n(i(7)),l=n(i(8)),c=n(i(9)),u=n(i(10)),p=n(i(11)),d=n(i(14)),h=[],f=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},m=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(f=!0),f)return h=(0,p.default)(h,g),(0,u.default)(h,g.once),h},v=function(){h=(0,d.default)(),m()},w=function(){h.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},b=function(e){return!0===e||"mobile"===e&&c.default.mobile()||"phone"===e&&c.default.phone()||"tablet"===e&&c.default.tablet()||"function"==typeof e&&!0===e()},y=function(e){g=o(g,e),h=(0,d.default)();var t=document.all&&!window.atob;return b(g.disable)||t?w():(g.disableMutationObserver||l.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),"DOMContentLoaded"===g.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?m(!0):"load"===g.startEvent?window.addEventListener(g.startEvent,(function(){m(!0)})):document.addEventListener(g.startEvent,(function(){m(!0)})),window.addEventListener("resize",(0,s.default)(m,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(m,g.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,u.default)(h,g.once)}),g.throttleDelay)),g.disableMutationObserver||l.default.ready("[data-aos]",v),h)};e.exports={init:y,refresh:m,refreshHard:v}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function i(e,t,i){function n(t){var i=g,n=m;return g=m=void 0,k=t,w=e.apply(n,i)}function r(e){return k=e,b=setTimeout(u,t),M?n(e):w}function a(e){var i=t-(e-y);return P?A(i,v-(e-k)):i}function l(e){var i=e-y;return void 0===y||i>=t||i<0||P&&e-k>=v}function u(){var e=x();return l(e)?p(e):void(b=setTimeout(u,a(e)))}function p(e){return b=void 0,O&&g?n(e):(g=m=void 0,w)}function d(){void 0!==b&&clearTimeout(b),k=0,g=y=m=b=void 0}function h(){return void 0===b?w:p(x())}function f(){var e=x(),i=l(e);if(g=arguments,m=this,y=e,i){if(void 0===b)return r(y);if(P)return b=setTimeout(u,t),n(y)}return void 0===b&&(b=setTimeout(u,t)),w}var g,m,v,w,b,y,k=0,M=!1,P=!1,O=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,o(i)&&(M=!!i.leading,v=(P="maxWait"in i)?E(s(i.maxWait)||0,t):v,O="trailing"in i?!!i.trailing:O),f.cancel=d,f.flush=h,f}function n(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return o(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),i(e,t,{leading:r,maxWait:t,trailing:a})}function o(e){var t="undefined"==typeof e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":l(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":l(e))||r(e)&&y.call(e)==p}function s(e){if("number"==typeof e)return e;if(a(e))return u;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var i=f.test(e);return i||g.test(e)?m(e.slice(2),i?2:8):h.test(e)?u:+e}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",u=NaN,p="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,g=/^0o[0-7]+$/i,m=parseInt,v="object"==("undefined"==typeof t?"undefined":l(t))&&t&&t.Object===Object&&t,w="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,b=v||w||Function("return this")(),y=Object.prototype.toString,E=Math.max,A=Math.min,x=function(){return b.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function i(e,t,i){function o(t){var i=g,n=m;return g=m=void 0,k=t,w=e.apply(n,i)}function r(e){return k=e,b=setTimeout(u,t),M?o(e):w}function s(e){var i=t-(e-x);return P?E(i,v-(e-k)):i}function c(e){var i=e-x;return void 0===x||i>=t||i<0||P&&e-k>=v}function u(){var e=A();return c(e)?p(e):void(b=setTimeout(u,s(e)))}function p(e){return b=void 0,O&&g?o(e):(g=m=void 0,w)}function d(){void 0!==b&&clearTimeout(b),k=0,g=x=m=b=void 0}function h(){return void 0===b?w:p(A())}function f(){var e=A(),i=c(e);if(g=arguments,m=this,x=e,i){if(void 0===b)return r(x);if(P)return b=setTimeout(u,t),o(x)}return void 0===b&&(b=setTimeout(u,t)),w}var g,m,v,w,b,x,k=0,M=!1,P=!1,O=!0;if("function"!=typeof e)throw new TypeError(l);return t=a(t)||0,n(i)&&(M=!!i.leading,v=(P="maxWait"in i)?y(a(i.maxWait)||0,t):v,O="trailing"in i?!!i.trailing:O),f.cancel=d,f.flush=h,f}function n(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||o(e)&&b.call(e)==u}function a(e){if("number"==typeof e)return e;if(r(e))return c;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var i=h.test(e);return i||f.test(e)?g(e.slice(2),i?2:8):d.test(e)?c:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",c=NaN,u="[object Symbol]",p=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,f=/^0o[0-7]+$/i,g=parseInt,m="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,w=m||v||Function("return this")(),b=Object.prototype.toString,y=Math.max,E=Math.min,A=function(){return w.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){"use strict";function i(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&i(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!n()}function r(e,t){var i=window.document,o=new(n())(a);s=t,o.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(i(t.concat(n)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:o,ready:r}},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){i(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!s.test(e)&&!l.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t,i){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!i&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,r){i(e,o+n,t)}))};t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(i(12)),r=function(e,t){return e.forEach((function(e,i){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e};t.default=r},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(i(13)),r=function(e,t){var i=0,n=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(n=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),i=(0,o.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=e.offsetHeight/2;break;case"bottom-bottom":i+=e.offsetHeight;break;case"top-center":i+=r/2;break;case"bottom-center":i+=r/2+e.offsetHeight;break;case"center-center":i+=r/2+e.offsetHeight/2;break;case"top-top":i+=r;break;case"bottom-top":i+=e.offsetHeight+r;break;case"center-top":i+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(n=t),i+n};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){for(var t=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),i+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:i,left:t}};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=i}])},8279:function(){},9008:function(e,t,i){e.exports=i(5443)},7521:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(7294);const o=(e,t,i,n)=>{e.style.transition=`${t} ${i}ms ${n}`},r=(e,t,i)=>Math.min(Math.max(e,t),i);class a{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{const{width:t,height:i}=e,n=Math.sqrt(Math.pow(t,2)+Math.pow(i,2));return{width:n,height:n}},this.setSize=e=>{const t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,i,n)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,i,n)},this.updateAngle=(e,t)=>{const{xPercentage:i,yPercentage:n}=e,o=180/Math.PI,r=i?Math.atan2(n,-i)*o:0;this.glareAngle=r-(t?180:0)},this.updateOpacity=(e,t,i,n)=>{const{xPercentage:o,yPercentage:a}=e,{glarePosition:s,glareReverse:l,glareMaxOpacity:c}=t,u=i?-1:1,p=n?-1:1,d=l?-1:1;let h=0;switch(s){case"top":h=-o*u*d;break;case"right":h=a*p*d;break;case"bottom":case void 0:h=o*u*d;break;case"left":h=-a*p*d;break;case"all":h=Math.hypot(o,a)}const f=r(h,0,100);this.glareOpacity=f*c/100},this.render=e=>{const{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const i={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},n=this.calculateGlareSize(e),o={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${n.width}px`,height:`${n.height}px`};Object.assign(this.glareWrapperEl.style,i),Object.assign(this.glareEl.style,o)}}class s{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:i,yPercentage:n}=e,{tiltMaxAngleX:o,tiltMaxAngleY:r}=t;this.tiltAngleX=i*o/100,this.tiltAngleY=n*r/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:i,tiltAngleYManual:n,tiltMaxAngleX:o,tiltMaxAngleY:r}=t;(null!==i||null!==n)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==n?n:0,e.xPercentage=100*this.tiltAngleX/o,e.yPercentage=100*this.tiltAngleY/r)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=r(this.tiltAngleX,-90,90),this.tiltAngleY=r(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const l=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class c extends n.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function a(e){try{l(n.next(e))}catch(e){r(e)}}function s(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(window.DeviceOrientationEvent,"function"==typeof DeviceOrientationEvent.requestPermission)try{return void("granted"===(yield DeviceOrientationEvent.requestPermission())&&window.addEventListener("deviceorientation",this.onMove))}catch(e){return void console.error(e)}window.addEventListener("deviceorientation",this.onMove)})),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){const e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":const{tiltAngleXInitial:i,tiltAngleYInitial:n,tiltMaxAngleX:o,tiltMaxAngleY:a}=this.props,s=n/a*100;this.wrapperEl.clientPosition.xPercentage=r(i/o*100,-100,100),this.wrapperEl.clientPosition.yPercentage=r(s,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,n=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=n/i*100,this.wrapperEl.clientPosition.xPercentage=r(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=r(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:i,flipHorizontally:n}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,n)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,i;if(e){const{x:e,y:n}=this.wrapperEl.clientPosition;t=n/window.innerHeight*200-100,i=e/window.innerWidth*200-100}else{const{size:{width:e,height:n,left:o,top:r},clientPosition:{x:a,y:s}}=this.wrapperEl;t=(s-r)/n*200-100,i=(a-o)/e*200-100}this.wrapperEl.clientPosition.xPercentage=r(t,-100,100),this.wrapperEl.clientPosition.yPercentage=r(i,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){this.tilt=new s,this.initGlare(),this.addEventListeners();const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new a(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:n,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;o(this.wrapperEl.node,"all",e,t),this.glare&&o(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:i}=this.props;return n.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}c.defaultProps=l}}]);