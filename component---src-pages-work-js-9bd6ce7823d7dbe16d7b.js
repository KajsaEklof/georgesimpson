(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0wm9":function(A,e,t){},"75zu":function(A,e,t){},GnN6:function(A,e,t){"use strict";var n=t("q1tI"),a=t.n(n),o=t("vOnD");e.a=function(A){var e=o.a.h1.withConfig({displayName:"Heading__PageTitle",componentId:"sc-1rv9xlm-0"})(['margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:#000000;font-family:"Bebas Neue",sans-serif;font-size:3.052em;font-weight:bold;line-height:1.1;']);return a.a.createElement(e,null,A.title)}},JLE3:function(A,e,t){"use strict";var n=t("q1tI"),a=t.n(n),o=(t("0wm9"),t("8ylO")),i=t.n(o),c=t("NFDa"),s=(t("75zu"),t("eQiH"),t("mXcz"),t("lfCk"),t("gqBK")),d=t("D+RH"),r=t("dc5O"),u=t("Wbzz");e.a=function(A){var e=Object(n.useState)(!1),t=e[0],o=e[1];return a.a.createElement("div",{className:i.a.container},a.a.createElement(r.a,null),a.a.createElement("div",{class:i.a.mobilenavbar},a.a.createElement(u.a,{to:"/",className:i.a.logo},"George Simpson"),a.a.createElement("div",null,a.a.createElement(d.a,{open:t,setOpen:o}),a.a.createElement(s.a,{open:t,setOpen:o}))),a.a.createElement("main",{className:i.a.content},A.children),a.a.createElement(c.a,null))}},Ofmp:function(A,e,t){"use strict";t.r(e);var n=t("q1tI"),a=t.n(n),o=t("JLE3"),i=(t("Wbzz"),t("GnN6"));t("dc5O"),t("q4sD"),t("0mN4"),t("pYfC"),t("vOnD"),t("mI/d"),t("n97c"),t("cdBv"),t("utb6"),t("9eSz"),e.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:"Work"}))}},cdBv:function(A,e,t){"use strict";t("tUrg");var n=t("q1tI"),a=t.n(n),o=t("vOnD"),i=t("Wbzz"),c=t("mI/d"),s=t("IP2g"),d=t("8ylO"),r=t.n(d);e.a=function(A){var e=Object(o.a)(i.a).withConfig({displayName:"SecondaryButton__LinkButton",componentId:"sc-1oq259l-0"})(['font-family:"Futura PT",sans-serif;font-size:0.9em;font-weight:bold;color:#ffffff;background-color:var(--olivegreen);margin:0.5em;cursor:pointer;padding:0.5em 1.2em;border-radius:50px;text-decoration:none;width:50%;text-align:center;&:hover{background-color:var(--seablue);transition:0.3s ease-in-out;color:var(--sand);}@media ',"{font-size:1em;padding:0.5em 2em;}"],c.a.desktop);return a.a.createElement(e,{to:A.link,role:"button",className:r.a.sink},A.text," ",a.a.createElement(s.a,{icon:"arrow-right",style:{paddingLeft:"0.3em"},size:"lg"}))}},eQiH:function(A,e,t){},lfCk:function(A,e,t){!function(){"use strict";function A(A){var e=!0,t=!1,n=null,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(A){return!!(A&&A!==document&&"HTML"!==A.nodeName&&"BODY"!==A.nodeName&&"classList"in A&&"contains"in A.classList)}function i(A){A.classList.contains("focus-visible")||(A.classList.add("focus-visible"),A.setAttribute("data-focus-visible-added",""))}function c(A){e=!1}function s(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(A){A.target.nodeName&&"html"===A.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(t){t.metaKey||t.altKey||t.ctrlKey||(o(A.activeElement)&&i(A.activeElement),e=!0)}),!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",(function(A){"hidden"===document.visibilityState&&(t&&(e=!0),s())}),!0),s(),A.addEventListener("focus",(function(A){var t,n,c;o(A.target)&&(e||(t=A.target,n=t.type,"INPUT"===(c=t.tagName)&&a[n]&&!t.readOnly||"TEXTAREA"===c&&!t.readOnly||t.isContentEditable))&&i(A.target)}),!0),A.addEventListener("blur",(function(A){var e;o(A.target)&&(A.target.classList.contains("focus-visible")||A.target.hasAttribute("data-focus-visible-added"))&&(t=!0,window.clearTimeout(n),n=window.setTimeout((function(){t=!1}),100),(e=A.target).hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added")))}),!0),A.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&A.host?A.host.setAttribute("data-js-focus-visible",""):A.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=A;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&A(document)}()},mXcz:function(A,e,t){},n97c:function(A,e,t){A.exports={heading:"about-module--heading--3wSJ5",blurb:"about-module--blurb--2N0Rj",image:"about-module--image--jco3X",bgroup:"about-module--bgroup--2Josb",portrait:"about-module--portrait--22qmi"}},pYfC:function(A){A.exports=JSON.parse('{"data":{"image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMFAgb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGdM3k9IiMSwa4P/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIDBBESExQhI//aAAgBAQABBQLls5Q+SNmkltjEqYlwWWLW9Mbzk9//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAfEAABAwMFAAAAAAAAAAAAAAABAAIRAyFRECIyYcH/2gAIAQEABj8C4gBOqVNxGUHZTi0i+EIt6oB7UAqNP//EABwQAAMAAgMBAAAAAAAAAAAAAAABESFBMVFhgf/aAAgBAQABPyFWZK4WXdFarM8Ey0KyJm3p8GjfrscuU8MCmsNUg6LPY9D/2gAMAwEAAgADAAAAECPAPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB0QAQEAAgMAAwAAAAAAAAAAAAERACExYZFBobH/2gAIAQEAAT8QfpClUWhXvD1K9Wn0Gj7mCIhSWxxgDsgDdH17cP4psPyV/TIqXtOA7mQVjKbLvGJo3NpQ5yYhn//Z","width":400,"height":426,"src":"/static/fce798070717ba930d937c1ec0fcb22e/2244e/GeorgeSimpson_square.jpg","srcSet":"/static/fce798070717ba930d937c1ec0fcb22e/2244e/GeorgeSimpson_square.jpg 1x,\\n/static/fce798070717ba930d937c1ec0fcb22e/4fe8c/GeorgeSimpson_square.jpg 1.5x,\\n/static/fce798070717ba930d937c1ec0fcb22e/14b42/GeorgeSimpson_square.jpg 2x"},"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMFAgb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGdM3k9IiMSwa4P/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIDBBESExQhI//aAAgBAQABBQLls5Q+SNmkltjEqYlwWWLW9Mbzk9//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAfEAABAwMFAAAAAAAAAAAAAAABAAIRAyFRECIyYcH/2gAIAQEABj8C4gBOqVNxGUHZTi0i+EIt6oB7UAqNP//EABwQAAMAAgMBAAAAAAAAAAAAAAABESFBMVFhgf/aAAgBAQABPyFWZK4WXdFarM8Ey0KyJm3p8GjfrscuU8MCmsNUg6LPY9D/2gAMAwEAAgADAAAAECPAPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB0QAQEAAgMAAwAAAAAAAAAAAAERACExYZFBobH/2gAIAQEAAT8QfpClUWhXvD1K9Wn0Gj7mCIhSWxxgDsgDdH17cP4psPyV/TIqXtOA7mQVjKbLvGJo3NpQ5yYhn//Z","aspectRatio":0.9389671361502347,"src":"/static/fce798070717ba930d937c1ec0fcb22e/14b42/GeorgeSimpson_square.jpg","srcSet":"/static/fce798070717ba930d937c1ec0fcb22e/f836f/GeorgeSimpson_square.jpg 200w,\\n/static/fce798070717ba930d937c1ec0fcb22e/2244e/GeorgeSimpson_square.jpg 400w,\\n/static/fce798070717ba930d937c1ec0fcb22e/14b42/GeorgeSimpson_square.jpg 800w,\\n/static/fce798070717ba930d937c1ec0fcb22e/47498/GeorgeSimpson_square.jpg 1200w,\\n/static/fce798070717ba930d937c1ec0fcb22e/0e329/GeorgeSimpson_square.jpg 1600w,\\n/static/fce798070717ba930d937c1ec0fcb22e/fd1df/GeorgeSimpson_square.jpg 3024w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')},utb6:function(A,e,t){"use strict";var n=t("q1tI"),a=t.n(n),o=t("vOnD");e.a=function(A){var e=o.a.section.withConfig({displayName:"Section__Container",componentId:"pefjc4-0"})(["margin:0 auto;width:100%;padding-top:2em;"]),t=o.a.h2.withConfig({displayName:"Section__Heading",componentId:"pefjc4-1"})(["letter-spacing:-2px;"]);return a.a.createElement(e,null,a.a.createElement(t,null,A.title),A.children)}}}]);
//# sourceMappingURL=component---src-pages-work-js-9bd6ce7823d7dbe16d7b.js.map