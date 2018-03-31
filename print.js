!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("print-js",[],t):"object"==typeof exports?exports["print-js"]=t():e["print-js"]=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=10)}([function(e,t,n){"use strict";function i(e,t){if(e.focus(),a.a.isEdge()||a.a.isIE())try{e.contentWindow.document.execCommand("print",!1,null)}catch(t){e.contentWindow.print()}a.a.isIE()||a.a.isEdge()||e.contentWindow.print(),a.a.isIE()&&"pdf"===t.type&&setTimeout(function(){e.parentNode.removeChild(e)},2e3),t.showModal&&d.a.close(),t.onLoadingEnd&&t.onLoadingEnd()}function r(e,t){var n=[];return t.printable.forEach(function(t,i){n.push(o(e,i))}),Promise.all(n)}function o(e,t){return new Promise(function(n){var i=e?e.getElementById("printableImage"+t):null;i&&void 0!==i.naturalWidth&&0!==i.naturalWidth?n():setTimeout(function(){o(e,t)},500)})}var a=n(1),d=n(3),l={send:function(e,t){document.getElementsByTagName("body")[0].appendChild(t);var n=document.getElementById(e.frameId);"pdf"===e.type&&(a.a.isIE()||a.a.isEdge())?n.setAttribute("onload",i(n,e)):t.onload=function(){if("pdf"===e.type)i(n,e);else{var t=n.contentWindow||n.contentDocument;t.document&&(t=t.document),t.body.innerHTML=e.htmlData,"image"===e.type?r(t,e).then(function(){i(n,e)}):i(n,e)}}}};t.a=l},function(e,t,n){"use strict";var i={isFirefox:function(){return"undefined"!=typeof InstallTrigger},isIE:function(){return-1!==navigator.userAgent.indexOf("MSIE")||!!document.documentMode},isEdge:function(){return!i.isIE()&&!!window.StyleMedia},isChrome:function(){return!!window.chrome&&!!window.chrome.webstore},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||-1!==navigator.userAgent.toLowerCase().indexOf("safari")}};t.a=i},function(e,t,n){"use strict";function i(e,t){return'<div style="font-family:'+t.font+" !important; font-size: "+t.font_size+' !important; width:100%;">'+e+"</div>"}function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e,t){var n=document.defaultView||window,i=[],r="";if(n.getComputedStyle){i=n.getComputedStyle(e,"");var o=t.targetStyles||["border","box","break","text-decoration"],a=t.targetStyle||["clear","display","width","min-width","height","min-height","max-height"];t.honorMarginPadding&&o.push("margin","padding"),t.honorColor&&o.push("color");for(var d=0;d<i.length;d++)for(var l=0;l<o.length;l++)"*"!==o[l]&&-1===i[d].indexOf(o[l])&&-1===a.indexOf(i[d])||(r+=i[d]+":"+i.getPropertyValue(i[d])+";")}else if(e.currentStyle){i=e.currentStyle;for(var s in i)-1!==i.indexOf("border")&&-1!==i.indexOf("color")&&(r+=s+":"+i[s]+";")}return r+="max-width: "+t.maxWidth+"px !important;"+t.font_size+" !important;"}function a(e,t){for(var n=0;n<e.length;n++){var i=e[n];if(-1===t.ignoreElements.indexOf(i.getAttribute("id"))){var r=i.tagName;if("INPUT"===r||"TEXTAREA"===r||"SELECT"===r){var d=o(i,t),l=i.parentNode,s="SELECT"===r?document.createTextNode(i.options[i.selectedIndex].text):document.createTextNode(i.value),c=document.createElement("div");c.appendChild(s),c.setAttribute("style",d),l.appendChild(c),l.removeChild(i)}else i.setAttribute("style",o(i,t));var u=i.children;u&&u.length&&a(u,t)}else i.parentNode.removeChild(i)}}function d(e,t,n){var i=document.createElement("h1"),r=document.createTextNode(t);i.appendChild(r),i.setAttribute("style",n),e.insertBefore(i,e.childNodes[0])}t.a=i,t.b=r,t.c=o,t.d=a,t.e=d},function(e,t,n){"use strict";var i={show:function(e){var t=document.createElement("div");t.setAttribute("style","font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"),t.setAttribute("id","printJS-Modal");var n=document.createElement("div");n.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),n.appendChild(r);var o=document.createElement("span");o.setAttribute("class","printSpinner"),n.appendChild(o);var a=document.createTextNode(e.modalMessage);n.appendChild(a),t.appendChild(n),document.getElementsByTagName("body")[0].appendChild(t),document.getElementById("printClose").addEventListener("click",function(){i.close()})},close:function(){var e=document.getElementById("printJS-Modal");e.parentNode.removeChild(e)}};t.a=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),r=i.a.init;"undefined"!=typeof window&&(window.printJS=r),t.default=r},function(e,t,n){"use strict";var i=n(2),r=n(0);t.a={print:function(e,t){var o=document.getElementById(e.printable);if(!o)return window.console.error("Invalid HTML element id: "+e.printable),!1;var a=document.createElement("div");a.appendChild(o.cloneNode(!0)),a.setAttribute("style","height:0; overflow:hidden;"),a.setAttribute("id","printJS-html"),o.parentNode.appendChild(a),a=document.getElementById("printJS-html"),a.setAttribute("style",n.i(i.c)(a,e)+"margin:0 !important;");var d=a.children;n.i(i.d)(d,e),e.header&&n.i(i.e)(a,e.header,e.headerStyle),a.parentNode.removeChild(a),e.htmlData=n.i(i.a)(a.innerHTML,e),r.a.send(e,t)}}},function(e,t,n){"use strict";function i(e,t){var n=[];return t.printable.forEach(function(i,o){var a=document.createElement("img");a.src=i,n.push(r(e,t,a,o))}),Promise.all(n)}function r(e,t,n,i){return new Promise(function(r){n.onload=function(){var o=document.createElement("div");o.setAttribute("style",t.imageStyle),n.setAttribute("style","width:100%;"),n.setAttribute("id","printableImage"+i),o.appendChild(n),e.appendChild(o),r()}})}var o=n(2),a=n(0);t.a={print:function(e,t){e.printable.constructor!==Array&&(e.printable=[e.printable]);var r=document.createElement("div");r.setAttribute("style","width:100%"),i(r,e).then(function(){e.header&&n.i(o.e)(r,e.header,e.headerStyle),e.htmlData=r.outerHTML,a.a.send(e,t)})}}},function(e,t,n){"use strict";var i=n(1),r=n(3),o=n(9),a=n(5),d=n(6),l=n(8),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=["pdf","html","image","json"];t.a={init:function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,properties:null,gridHeaderStyle:"font-weight: bold;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onLoadingStart:null,onLoadingEnd:null,modalMessage:"Retrieving Document...",frameId:"printJS",htmlData:"",documentTitle:"Document",targetStyle:null,targetStyles:null,ignoreElements:[],imageStyle:"width:100%;"},t=arguments[0];if(void 0===t)throw new Error("printJS expects at least 1 attribute.");switch(void 0===t?"undefined":s(t)){case"string":e.printable=encodeURI(t),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":e.printable=t.printable,e.fallbackPrintable=void 0!==t.fallbackPrintable?t.fallbackPrintable:e.printable,e.type=void 0!==t.type?t.type:e.type,e.frameId=void 0!==t.frameId?t.frameId:e.frameId,e.header=void 0!==t.header?t.header:e.header,e.headerStyle=void 0!==t.headerStyle?t.headerStyle:e.headerStyle,e.maxWidth=void 0!==t.maxWidth?t.maxWidth:e.maxWidth,e.font=void 0!==t.font?t.font:e.font,e.font_size=void 0!==t.font_size?t.font_size:e.font_size,e.honorMarginPadding=void 0!==t.honorMarginPadding?t.honorMarginPadding:e.honorMarginPadding,e.properties=void 0!==t.properties?t.properties:e.properties,e.gridHeaderStyle=void 0!==t.gridHeaderStyle?t.gridHeaderStyle:e.gridHeaderStyle,e.gridStyle=void 0!==t.gridStyle?t.gridStyle:e.gridStyle,e.showModal=void 0!==t.showModal?t.showModal:e.showModal,e.onLoadingStart=void 0!==t.onLoadingStart?t.onLoadingStart:e.onLoadingStart,e.onLoadingEnd=void 0!==t.onLoadingEnd?t.onLoadingEnd:e.onLoadingEnd,e.modalMessage=void 0!==t.modalMessage?t.modalMessage:e.modalMessage,e.documentTitle=void 0!==t.documentTitle?t.documentTitle:e.documentTitle,e.targetStyle=void 0!==t.targetStyle?t.targetStyle:e.targetStyle,e.targetStyles=void 0!==t.targetStyles?t.targetStyles:e.targetStyles,e.ignoreElements=void 0!==t.ignoreElements?t.ignoreElements:e.ignoreElements,e.imageStyle=void 0!==t.imageStyle?t.imageStyle:e.imageStyle;break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+(void 0===t?"undefined":s(t)))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||"string"!=typeof e.type||-1===c.indexOf(e.type.toLowerCase()))throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&r.a.show(e),e.onLoadingStart&&e.onLoadingStart();var n=document.getElementById(e.frameId);n&&n.parentNode.removeChild(n);var u=void 0;switch(u=document.createElement("iframe"),u.setAttribute("style","visibility: hidden; height: 0; width: 0;"),u.setAttribute("id",e.frameId),"pdf"!==e.type&&(u.srcdoc="<html><head><title>"+e.documentTitle+"</title></head><body></body></html>"),e.type){case"pdf":if(i.a.isFirefox()||i.a.isEdge()||i.a.isIE()){window.open(e.fallbackPrintable,"_blank").focus(),e.showModal&&r.a.close(),e.onLoadingEnd&&e.onLoadingEnd()}else o.a.print(e,u);break;case"image":d.a.print(e,u);break;case"html":a.a.print(e,u);break;case"json":l.a.print(e,u);break;default:throw new Error("Invalid print type. Available types are: pdf, html, image and json.")}}}},function(e,t,n){"use strict";function i(e){var t=e.printable,i=e.properties,o='<div style="display:flex; flex-direction: column;">';o+='<div style="flex:1 1 auto; display:flex;">';for(var a=0;a<i.length;a++)o+='<div style="flex:1; padding:5px;'+e.gridHeaderStyle+'">'+n.i(r.b)(i[a])+"</div>";o+="</div>";for(var d=0;d<t.length;d++){o+='<div style="flex:1 1 auto; display:flex;">';for(var l=0;l<i.length;l++){var s=t[d],c=i[l].split(".");if(c.length>1)for(var u=0;u<c.length;u++)s=s[c[u]];else s=s[i[l]];o+='<div style="flex:1; padding:5px;'+e.gridStyle+'">'+s+"</div>"}o+="</div>"}return o+="</div>"}var r=n(2),o=n(0),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.a={print:function(e,t){if("object"!==a(e.printable))throw new Error("Invalid javascript data object (JSON).");if(!e.properties||"object"!==a(e.properties))throw new Error("Invalid properties array for your JSON data.");var d="";e.header&&(d+='<h1 style="'+e.headerStyle+'">'+e.header+"</h1>"),d+=i(e),e.htmlData=n.i(r.a)(d,e),o.a.send(e,t)}}},function(e,t,n){"use strict";function i(e,t){t.setAttribute("src",e.printable),o.a.send(e,t)}var r=n(1),o=n(0);t.a={print:function(e,t){if(e.showModal||e.onLoadingStart||r.a.isIE()){var n=new window.XMLHttpRequest;n.addEventListener("load",i(e,t)),n.open("GET",-1!==e.printable.indexOf("http")?e.printable:window.location.origin+"/"+e.printable,!0),n.send()}else i(e,t)}}},function(e,t,n){e.exports=n(4)}])});