(self.AMP=self.AMP||[]).push({n:"amp-playbuzz",v:"1533591342461",f:(function(AMP,_){
var h;function m(a,b){function e(){}e.prototype=b.prototype;a.prototype=new e;a.prototype.constructor=a;for(var c in b)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}function n(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(e){return b}};var p=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function q(a){for(var b=null,e="",c=0;c<arguments.length;c++){var d=arguments[c];if(d instanceof Error&&!b){var b=void 0,f=d.message,g=String(Math.random());d.message=g;if(d.message===g)d.message=f,b=d;else{f=Error(d.message);for(b in d)f[b]=d[b];f.stack=d.stack;b=f}}else e&&(e+=" "),e+=d}b?e&&(b.message=e+": "+b.message):b=Error(e);return b}function r(a){var b=q.apply(null,arguments);setTimeout(function(){self.reportError(b);throw b;})}self.log=self.log||{user:null,dev:null,userForEmbed:null};
var t=self.log;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user};function v(a){return a||{}};function w(a){this.H=a;this.w=this.A=0;this.l=Object.create(null)}w.prototype.has=function(a){return!!this.l[a]};w.prototype.get=function(a){var b=this.l[a];if(b)return b.access=++this.w,b.payload};
w.prototype.put=function(a,b){this.has(a)||this.A++;this.l[a]={payload:b,access:this.w};if(!(this.A<=this.H)){if(t.dev)a=t.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.l;var e=this.w+1,c,d;for(d in a){var f=a[d].access;f<e&&(e=f,c=d)}void 0!==c&&(delete a[c],this.A--)}};v({c:!0,v:!0,a:!0,ad:!0});var x,y;
function z(a){var b;x||(x=self.document.createElement("a"),y=self.UrlCache||(self.UrlCache=new w(100)));var e=b?null:y,c=x;if(e&&e.has(a))a=e.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;e&&e.put(a,d);a=d}return a}function A(a){var b=a.indexOf("#");return-1==b?a:a.substring(0,b)};function B(a){var b="amp-playbuzz",e;if(a.__AMP__EXPERIMENT_TOGGLES)e=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);e=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(e[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(c=a.AMP_CONFIG["allow-doc-opt-in"],d=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(var d=
d.getAttribute("content").split(","),f=0;f<d.length;f++)-1!=c.indexOf(d[f])&&(e[d[f]]=!0);Object.assign(e,C(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];d=a.location.originalHash||a.location.hash;a=Object.create(null);if(d)for(var g;g=p.exec(d);)f=n(g[1],g[1]),g=g[2]?n(g[2],g[2]):"",a[f]=g;for(d=0;d<c.length;d++)f=a["e-"+c[d]],"1"==f&&(e[c[d]]=!0),"0"==f&&(e[c[d]]=!1)}}var k=e;return!!k[b]}
function C(a){a:{var b;try{b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var e=a[b].trim(),c=e.indexOf("=");if(-1!=c&&"AMP_EXP"==n(e.substring(0,c).trim(),void 0)){a=e.substring(c+1).trim();a=n(a,a);break a}}a=null}var d=a,f=d?d.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};function D(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=b.__AMP_TOP||b;a=E(b,"ampdoc").getAmpDoc(a)}return a}function E(a,b){var e=a.services;e||(e=a.services={});var c=e;a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function F(a){a.parentElement&&a.parentElement.removeChild(a)};var G;function H(a,b){var e=void 0,c=a,d=b,f;f=function(a){try{return d(a)}catch(l){throw self.reportError(l),l;}};var g=I(),k=!1;e&&(k=e.capture);c.addEventListener("message",f,g?e:k);return function(){c&&c.removeEventListener("message",f,g?e:k);f=c=d=null}}function I(){if(void 0!==G)return G;G=!1;try{var a={get capture(){G=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return G};function J(a,b){return H(a,b)};function L(a){var b,e=100,c;return function(){var d=this,f=arguments;clearTimeout(c);c=setTimeout(function(){c=null;b||a.apply(d,f)},e);b&&!c&&a.apply(d,f)}}function M(a){return function e(c,d,f){c=a.createElement(c);c.className=d;N(c,f);return c}}function N(a,b){b=b?Array.isArray(b)?b:[b]:[];b.forEach(function(b){return a.appendChild(b)})}
function O(a){if("object"===typeof a)return a;var b="error parsing json message from playbuzz item: "+a;try{if("string"===typeof a)return JSON.parse(a)}catch(e){return r("amp-playbuzz",b,e),v({})}r("amp-playbuzz",b,a);return v({})};function P(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.G=null;a.j=300;a.C=!1;a.D=!1;a.B=!1;a.F=!1;a.o=[];a.m="";return a}m(P,AMP.BaseElement);h=P.prototype;h.preconnectCallback=function(){this.preconnect.url(this.m)};h.renderOutsideViewport=function(){return!1};
h.buildCallback=function(){u().assert(B(this.win),"Enable amp-playbuzz experiment");var a=this.element,b=a.getAttribute("src"),e=a.getAttribute("data-item");u().assert(b||e,"Either src or data-item attribute is required for <amp-playbuzz> %s",this.element);b&&(u().assert(/^https?\:/i.test(b),'URL must start with "http://" or "https://". Invalid value: %s',b),z(b));var c=parseInt(a.getAttribute("height"),10);e?b="//www.playbuzz.com/item/"+e:(b=z(b),b=A(b.href).replace(b.protocol,""));this.m=b;this.j=
isNaN(c)?this.j:c;this.C="true"===a.getAttribute("data-item-info");this.D="true"===a.getAttribute("data-share-buttons");this.B="true"===a.getAttribute("data-comments")};h.isLayoutSupported=function(a){return"responsive"===a||"fixed-height"===a};
h.createPlaceholderCallback=function(){var a=this.win.document.createElement("div");this.element.hasAttribute("aria-label")?a.setAttribute("aria-label","Loading - "+this.element.getAttribute("aria-label")):a.setAttribute("aria-label","Loading interactive element");a.setAttribute("placeholder","");a.appendChild(Q(this));return a};
function R(a){a=M(a.element.ownerDocument);var b=a("div","pb-overflow");b.setAttribute("overflow","");var e=a("button");e.textContent="Show More";var c=a("img","pb-arrow-down");c.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAAm0lEQVR4AZ3ORxXCABBF0VGBAfYooaOEXp2kxwOKwg4D9E/vLS9zzt/eN3Y7V/3DEvNUtqznqXXYzALV7elcTQ7TZatMEV+9B2N9MBqPn+tpnpbXCMWfIoFKx0BymH5GOH7d1E6Iq9XfCMfnFqlgh+MRhJvxCMZJhOMosuH4l8hhy3eE4zzCcR7hOI9wHEYoDiIA5xcqb7FyBm4P6hrNHZK+MqYAAAAASUVORK5CYII=";e.appendChild(c);
b.appendChild(e);return b}
h.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe");this.h=a;a.setAttribute("scrolling","no");a.setAttribute("frameborder","0");a.setAttribute("allowtransparency","true");a.setAttribute("allowfullscreen","true");a.src=S(this);T(this,L(this.I.bind(this)));this.element.appendChild(R(this));this.applyFillContent(a);this.element.appendChild(a);return this.G=this.loadPromise(a).then(function(){this.F=!0;this.attemptChangeHeight(this.j).catch(function(){});var a=this.getViewport().onChanged(this.J.bind(this));
this.o.push(a)}.bind(this))};
function Q(a){a=M(a.element.ownerDocument);var b=a("img","pb_feed_anim_mask");b.src="data:image/png;base64,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";var e=
a("div","pb_feed_placeholder_container",a("div","pb_feed_placeholder_inner",a("div","pb_feed_placeholder_content",a("div","pb_feed_placeholder_preloader",b))));return e}h.I=function(a){isNaN(a)||a===this.j||(this.j=a,this.F&&this.attemptChangeHeight(this.j).catch(function(){}))};function T(a,b){var e=J(a.win,function(c){a.h.contentWindow===c.source&&(c=O(c.data),c.resize_height&&b(c.resize_height))});a.o.push(e)}
function S(a){var b=D(a.element),b=D(b),b=b.isSingleDoc()?b.win:b,e=E(b,"documentInfo").get().canonicalUrl,c=z(e),b=a.m,d=z(a.m).pathname,f=a.C,g=a.D,k=a.B,K=A(c.href);a=b+"?";var b=v({feed:!0,implementation:"amp",src:b,embedBy:"00000000-0000-0000-0000-000000000000",game:d,comments:void 0,useComments:k,gameInfo:f,useShares:g,socialReferrer:!1,height:"auto",parentUrl:K,parentHost:c.host}),d=[],l;for(l in b)if(f=b[l],null!=f)if(Array.isArray(f))for(g=0;g<f.length;g++)d.push(encodeURIComponent(l)+"="+
encodeURIComponent(f[g]));else d.push(encodeURIComponent(l)+"="+encodeURIComponent(f));return a+d.join("&")}h.J=function(a){if(this.isInViewport()){var b=v({event:"scroll",windowHeight:a.height,scroll:a.top,offsetTop:this.getLayoutBox().top}),e=JSON.stringify(b);this.h.contentWindow.postMessage(e,"*")}};h.unlayoutOnPause=function(){return!0};h.unlayoutCallback=function(){this.o.forEach(function(a){return a()});this.o.length=0;this.h&&(F(this.h),this.G=this.h=null);return!0};
(function(a){a.registerElement("amp-playbuzz",P,".pb-overflow[overflow]{width:100%;height:150px;position:absolute;bottom:0;text-align:center;background:-webkit-linear-gradient(top,hsla(0,0%,100%,0),#fff 75%);background:linear-gradient(180deg,hsla(0,0%,100%,0) 0%,#fff 75%)}.pb-overflow button{width:140px;height:37px;position:absolute;bottom:0;left:50%;margin-left:-70px;border-radius:4px;background-color:#fff;border:1px solid #009cff;color:#009cff;font-weight:700;font-family:Helvetica,Roboto,Arial,sans-serif;cursor:pointer}.pb-arrow-down{height:8px;margin-left:10px}.pb_feed_placeholder_container{width:100%;height:100%}.pb_feed_placeholder_container{direction:ltr}.pb_feed_placeholder_inner{position:relative;width:100%;height:100%;margin:auto}.pb_feed_placeholder_content{width:100%;height:100%;background-color:#f2f2f2;border-radius:5px}.pb_feed_placeholder_preloader{position:absolute;top:47%;left:50%;width:29px;height:38px;margin-top:-36px;margin-left:-15px;overflow:hidden;box-sizing:border-box}@media screen and (max-width:568px){.pb_feed_placeholder_preloader{top:46%}}@media screen and (min-width:569px) and (max-width:992px){.pb_feed_placeholder_preloader{top:48%}}.pb_feed_anim_mask{position:absolute;width:30px;top:0;left:0}.pb_feed_loading_text{position:absolute;font-family:arial;font-size:11px;color:#aaa;text-align:center;width:100%;top:51%;direction:ltr}\n/*# sourceURL=/extensions/amp-playbuzz/0.1/amp-playbuzz.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-playbuzz-0.1.js.map

