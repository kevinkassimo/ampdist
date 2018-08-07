(self.AMP=self.AMP||[]).push({n:"amp-audio",v:"1533591342461",f:(function(AMP,_){
function g(a,b){function d(){}d.prototype=b.prototype;a.prototype=new d;a.prototype.constructor=a;for(var c in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c]};var h=Object.prototype.toString;self.log=self.log||{user:null,dev:null,userForEmbed:null};var k=self.log;function l(){if(!k.user)throw Error("failed to call initLogConstructor");return k.user};function m(a){this.o=a;this.j=this.l=0;this.h=Object.create(null)}m.prototype.has=function(a){return!!this.h[a]};m.prototype.get=function(a){var b=this.h[a];if(b)return b.access=++this.j,b.payload};
m.prototype.put=function(a,b){this.has(a)||this.l++;this.h[a]={payload:b,access:this.j};if(!(this.l<=this.o)){if(k.dev)a=k.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.h;var d=this.j+1,c,e;for(e in a){var f=a[e].access;f<d&&(d=f,c=e)}void 0!==c&&(delete a[c],this.l--)}};var n,p;
function q(a){if("string"==typeof a){n||(n=self.document.createElement("a"),p=self.UrlCache||(self.UrlCache=new m(100)));var b=p,d=n;if(b&&b.has(a))a=b.get(a);else{d.href=a;d.protocol||(d.href=d.href);var c={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==c.pathname[0]&&(c.pathname="/"+c.pathname);if("http:"==c.protocol&&80==c.port||"https:"==c.protocol&&443==c.port)c.port="",c.host=c.hostname;
c.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=c.protocol&&c.host?c.protocol+"//"+c.host:c.href;b&&b.put(a,c);a=c}}(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b}
function r(a,b){var d;d=void 0===d?"source":d;l().assert(null!=a,"%s %s must be available",b,d);var c=a;l().assert(q(c)||/^(\/\/)/.test(c),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,d,c)};function t(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;if(b=b!=(b.__AMP_TOP||b)&&u(b,"url")?x(b,"url"):null)return b}b=y(a);b=y(b);b=b.isSingleDoc()?b.win:b;return x(b,"url")}function y(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=b.__AMP_TOP||b;a=x(b,"ampdoc").getAmpDoc(a)}return a}function x(a,b){u(a,b);var d=a.services;d||(d=a.services={});var c=d;a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function u(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function z(a,b){for(var d,c=a;c&&c!==d;c=c.parentElement)if(b(c))return c;return null}function A(a){var b="AMP-STORY";if(a.closest)return a.closest(b);b=b.toUpperCase();return z(a,function(a){return a.tagName==b})};var B;function C(a,b){var d=void 0,c=a,e=b,f;f=function(a){try{return e(a)}catch(v){throw self.reportError(v),v;}};var H=D(),w=!1;d&&(w=d.capture);c.addEventListener("playing",f,H?d:w)}function D(){if(void 0!==B)return B;B=!1;try{var a={get capture(){B=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return B};function E(a,b){C(a,b)};var F={title:"",artist:"",album:"",artwork:[{src:""}]};function G(a,b,d,c){var e=a.win,f=e.navigator;"mediaSession"in f&&e.MediaMetadata&&(f.mediaSession.metadata=new e.MediaMetadata(F),I(a,b),f.mediaSession.metadata=new e.MediaMetadata(b),f.mediaSession.setActionHandler("play",d),f.mediaSession.setActionHandler("pause",c))}
function J(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var d;a:{try{d=JSON.parse(b.textContent);break a}catch(e){}d=void 0}var c=d;if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function K(a){var b=a.querySelector('meta[property="og:image"]');if(b)return b.getAttribute("content")}function L(a){var b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]');if(b)return b.getAttribute("href")}function I(a,b){var d=t(a);if(b&&b.artwork){var c=b.artwork;c.forEach(function(a){if(a){var b="[object Object]"===h.call(a)?a.src:a;l().assert(d.isProtocolValid(b))}})}};function M(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;a.m=F;a.isPlaying=!1;return a}g(M,AMP.BaseElement);M.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a};M.prototype.buildCallback=function(){this.registerAction("play",this.A.bind(this));this.registerAction("pause",this.w.bind(this))};
M.prototype.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("audio");if(!b.play)return this.toggleFallback(!0),Promise.resolve();b.controls=!0;var d=this.element.getAttribute("src");d&&r(d,this.element);this.propagateAttributes("src preload autoplay muted loop aria-label aria-describedby aria-labelledby controlsList".split(" "),b);this.applyFillContent(b);this.getRealChildNodes().forEach(function(a){a.getAttribute&&a.getAttribute("src")&&r(a.getAttribute("src"),a);
b.appendChild(a)});this.element.appendChild(b);this.c=b;var c=this.getAmpDoc().win.document,e=this.element.getAttribute("artist")||"",d=this.element.getAttribute("title")||this.element.getAttribute("aria-label")||c.title||"",f=this.element.getAttribute("album")||"",c=this.element.getAttribute("artwork")||J(c)||K(c)||L(c)||"";this.m={title:d,artist:e,album:f,artwork:[{src:c}]};E(this.c,function(){return N(a)});return this.loadPromise(b)};M.prototype.pauseCallback=function(){this.c&&this.c.pause()};
function O(a){return a.c?A(a.element)?(l().warn("amp-audio","<amp-story> elements do not support actions on <amp-audio> elements"),!1):!0:!1}M.prototype.w=function(){O(this)&&this.c.pause()};M.prototype.A=function(){O(this)&&this.c.play()};function N(a){G(a.getAmpDoc(),a.m,function(){a.c.play()},function(){a.c.pause()})}(function(a){a.registerElement("amp-audio",M)})(self.AMP);
})});
//# sourceMappingURL=amp-audio-0.1.js.map
