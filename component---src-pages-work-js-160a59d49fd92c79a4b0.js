(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0wm9":function(e,t,n){},"75zu":function(e,t,n){},JLE3:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),a=(n("0wm9"),n("8ylO")),d=n.n(a),c=n("NFDa"),s=(n("75zu"),n("eQiH"),n("mXcz"),n("lfCk"),n("gqBK")),u=n("D+RH"),r=n("dc5O"),m=n("Wbzz");t.a=function(e){var t=Object(o.useState)(!1),n=t[0],a=t[1];return i.a.createElement("div",{className:d.a.container},i.a.createElement(r.a,null),i.a.createElement("div",{class:d.a.mobilenavbar},i.a.createElement(m.a,{to:"/",className:d.a.logo},"George Simpson"),i.a.createElement("div",null,i.a.createElement(u.a,{open:n,setOpen:a}),i.a.createElement(s.a,{open:n,setOpen:a}))),i.a.createElement("main",{className:d.a.content},e.children),i.a.createElement(c.a,null))}},Ofmp:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),i=n.n(o),a=n("JLE3"),d=n("utb6");n("q4sD");t.default=function(){return i.a.createElement(a.a,null,i.a.createElement(d.a,{title:"Work"}))}},eQiH:function(e,t,n){},lfCk:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){t=!1}function s(){document.addEventListener("mousemove",u),document.addEventListener("mousedown",u),document.addEventListener("mouseup",u),document.addEventListener("pointermove",u),document.addEventListener("pointerdown",u),document.addEventListener("pointerup",u),document.addEventListener("touchmove",u),document.addEventListener("touchstart",u),document.addEventListener("touchend",u)}function u(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",u),document.removeEventListener("mousedown",u),document.removeEventListener("mouseup",u),document.removeEventListener("pointermove",u),document.removeEventListener("pointerdown",u),document.removeEventListener("pointerup",u),document.removeEventListener("touchmove",u),document.removeEventListener("touchstart",u),document.removeEventListener("touchend",u))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(a(e.activeElement)&&d(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),s())}),!0),s(),e.addEventListener("focus",(function(e){var n,o,c;a(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(c=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===c&&!n.readOnly||n.isContentEditable))&&d(e.target)}),!0),e.addEventListener("blur",(function(e){var t;a(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},mXcz:function(e,t,n){},utb6:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),a=n("vOnD");t.a=function(e){var t=a.a.section.withConfig({displayName:"Section__Container",componentId:"pefjc4-0"})(["margin:0 auto;width:100%;padding-top:2em;"]),n=a.a.h2.withConfig({displayName:"Section__Heading",componentId:"pefjc4-1"})(["letter-spacing:-2px;"]);return i.a.createElement(t,null,i.a.createElement(n,null,e.title),e.children)}}}]);
//# sourceMappingURL=component---src-pages-work-js-160a59d49fd92c79a4b0.js.map