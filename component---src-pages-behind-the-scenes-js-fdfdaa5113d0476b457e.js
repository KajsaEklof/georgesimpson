(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0wm9":function(e,t,n){},"2W6z":function(e,t,n){"use strict";n("pIFo");var a=function(){};e.exports=a},"75zu":function(e,t,n){},GiOn:function(e,t,n){var a,r;n("xfY5"),n("pIFo"),n("KKXr"),void 0===(r="function"==typeof(a=function(e,t,n){return function(e,t,n,a,r,o){function i(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,o,i,u=e<0;if(e=Math.abs(e).toFixed(s.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(r="",o=0,i=n.length;o<i;++o)0!==o&&o%3==0&&(r=s.options.separator+r),r=n[i-o-1]+r;n=r}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return s.options.numerals[+e]}))),(u?"-":"")+s.options.prefix+n+a+s.options.suffix},prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var u in s.options)o.hasOwnProperty(u)&&null!==o[u]&&(s.options[u]=o[u]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var c=0,l=["webkit","moz","ms","o"],d=0;d<l.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[l[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[d]+"CancelAnimationFrame"]||window[l[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-c)),r=window.setTimeout((function(){e(n+a)}),a);return c=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!(!s.initialized&&(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),i(s.startVal)&&i(s.endVal)?(s.decimals=Math.max(0,a||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(r)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(s.error="[CountUp] target is null or undefined",1)))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!i(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},JLE3:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=(n("0wm9"),n("8ylO")),i=n.n(o),s=n("NFDa"),u=(n("75zu"),n("eQiH"),n("mXcz"),n("lfCk"),n("gqBK")),c=n("D+RH"),l=n("dc5O"),d=n("Wbzz");t.a=function(e){var t=Object(a.useState)(!1),n=t[0],o=t[1];return r.a.createElement("div",{className:i.a.container},r.a.createElement(l.a,null),r.a.createElement("div",{class:i.a.mobilenavbar},r.a.createElement(d.a,{to:"/",className:i.a.logo},"George Simpson"),r.a.createElement("div",null,r.a.createElement(c.a,{open:n,setOpen:o}),r.a.createElement(u.a,{open:n,setOpen:o}))),r.a.createElement("main",{className:i.a.content},e.children),r.a.createElement(s.a,null))}},"MQ/A":function(e,t,n){e.exports={counter:"behindthescenes-module--counter--1BTvi"}},PHNs:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("a1Th"),n("h7Nl"),n("rE2o"),n("LK8F"),n("/SS/"),n("hHhE"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("17x9")),o=n("q1tI"),i=a(o),s=a(n("2W6z")),u=a(n("GiOn"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?v(e):t}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,o=t.easingFn,i=t.end,s=t.formattingFn,c=t.prefix,l=t.separator,d=t.start,m=t.suffix,f=t.useEasing;return new u(e,d,i,a,r,{decimal:n,easingFn:o,formattingFn:s,separator:l,prefix:c,suffix:m,useEasing:f,useGrouping:!!l})},y=function(e){function t(){var e,n;c(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return d(v(n=E(this,(e=f(t)).call.apply(e,[this].concat(r)))),"createInstance",(function(){return"function"==typeof n.props.children&&s(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),b(n.containerRef.current,n.props)})),d(v(n),"pauseResume",(function(){var e=v(n),t=e.reset,a=e.restart,r=e.update,o=n.props.onPauseResume;n.instance.pauseResume(),o({reset:t,start:a,update:r})})),d(v(n),"reset",(function(){var e=v(n),t=e.pauseResume,a=e.restart,r=e.update,o=n.props.onReset;n.instance.reset(),o({pauseResume:t,start:a,update:r})})),d(v(n),"restart",(function(){n.reset(),n.start()})),d(v(n),"start",(function(){var e=v(n),t=e.pauseResume,a=e.reset,r=e.restart,o=e.update,i=n.props,s=i.delay,u=i.onEnd,c=i.onStart,l=function(){return n.instance.start((function(){return u({pauseResume:t,reset:a,start:r,update:o})}))};s>0?n.timeoutId=setTimeout(l,1e3*s):l(),c({pauseResume:t,reset:a,update:o})})),d(v(n),"update",(function(e){var t=v(n),a=t.pauseResume,r=t.reset,o=t.restart,i=n.props.onUpdate;n.instance.update(e),i({pauseResume:a,reset:r,start:o})})),d(v(n),"containerRef",i.createRef()),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"==typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,o=t.prefix,i=t.redraw,s=t.duration,u=t.separator,c=t.decimals,l=t.decimal;return s!==e.duration||n!==e.end||a!==e.start||r!==e.suffix||o!==e.prefix||u!==e.separator||c!==e.decimals||l!==e.decimal||i}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,o=t.prefix,i=t.duration,s=t.separator,u=t.decimals,c=t.decimal,l=t.preserveValue;i===e.duration&&a===e.start&&r===e.suffix&&o===e.prefix&&s===e.separator&&u===e.decimals&&c===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(l||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,o=this.pauseResume,s=this.reset,u=this.restart,c=this.update;return"function"==typeof t?t({countUpRef:r,pauseResume:o,reset:s,start:u,update:c}):i.createElement("span",{className:n,ref:r,style:a})}}])&&l(n.prototype,a),r&&l(n,r),t}(o.Component);d(y,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),d(y,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var g={innerHTML:null};t.default=y,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y.defaultProps,{},e),n=t.start,a=t.formattingFn,r=h(o.useState("function"==typeof a?a(n):n),2),i=r[0],s=r[1],u=o.useRef(null),c=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=b(g,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return u.current=n,n},l=function(){var e=t.onReset;c().reset(),e({pauseResume:p,start:f,update:v})},f=function e(){var n=t.onStart,a=t.onEnd;c().reset(),c().start((function(){a({pauseResume:p,reset:l,start:e,update:v})})),n({pauseResume:p,reset:l,update:v})},p=function(){var e=t.onPauseResume;c().pauseResume(),e({reset:l,start:f,update:v})},v=function(e){var n=t.onUpdate;c().update(e),n({pauseResume:p,reset:l,start:f})};return o.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var r=setTimeout((function(){n({pauseResume:p,reset:l,update:v}),c().start((function(){clearTimeout(r),a({pauseResume:p,reset:l,start:f,update:v})}))}),1e3*e);return l}),[]),{countUp:i,start:f,pauseResume:p,reset:l,update:v}}},eQiH:function(e,t,n){},lfCk:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,a=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function i(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function u(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(o(e.activeElement)&&i(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),u())}),!0),u(),e.addEventListener("focus",(function(e){var n,a,s;o(e.target)&&(t||(n=e.target,a=n.type,"INPUT"===(s=n.tagName)&&r[a]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&i(e.target)}),!0),e.addEventListener("blur",(function(e){var t;o(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(a),a=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},mXcz:function(e,t,n){},sV86:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("JLE3"),i=n("Wbzz"),s=n("utb6"),u=n("PHNs"),c=n.n(u),l=n("MQ/A"),d=n.n(l);n("q4sD");t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Behind the Scenes"),r.a.createElement(s.a,{title:"Used in 2020"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 text-center"},r.a.createElement(c.a,{className:d.a.counter,delay:.5,duration:3,separator:" ",useEasing:!0,end:136,onEnd:function(){return console.log("Ended! 👏")},onStart:function(){return console.log("Started! 💨")}}),r.a.createElement("h4",{className:d.a.label},"Cups of coffee")),r.a.createElement("div",{className:"col-md-4 text-center"},r.a.createElement(c.a,{className:d.a.counter,delay:.5,duration:2.8,separator:" ",useEasing:!0,end:243,onEnd:function(){return console.log("Ended! 👏")},onStart:function(){return console.log("Started! 💨")}}),r.a.createElement("h4",null,"Zip ties")),r.a.createElement("div",{className:"col-md-4 text-center"},r.a.createElement(c.a,{className:d.a.counter,delay:.5,duration:2.75,separator:" ",useEasing:!0,end:129,onEnd:function(){return console.log("Ended! 👏")},onStart:function(){return console.log("Started! 💨")}}),r.a.createElement("h4",null,"Meters of tape"))),r.a.createElement(i.a,{to:"/"},"Back to home"))}},utb6:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("vOnD");t.a=function(e){var t=o.a.section.withConfig({displayName:"Section__Container",componentId:"pefjc4-0"})(["margin:0 auto;width:100%;padding-top:2em;"]),n=o.a.h2.withConfig({displayName:"Section__Heading",componentId:"pefjc4-1"})(["letter-spacing:-2px;"]);return r.a.createElement(t,null,r.a.createElement(n,null,e.title),e.children)}}}]);
//# sourceMappingURL=component---src-pages-behind-the-scenes-js-fdfdaa5113d0476b457e.js.map