(self.AMP=self.AMP||[]).push({n:"amp-access-scroll",v:"1533591342461",f:(function(AMP,_){
var h;function l(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function m(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var p=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function q(a){var b=Object.create(null);if(!a)return b;for(var c;c=p.exec(a);){var d=m(c[1],c[1]),e=c[2]?m(c[2],c[2]):"";b[d]=e}return b};var r="";self.log=self.log||{user:null,dev:null,userForEmbed:null};var t=self.log;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user};function v(a){return a||{}};function w(a){this.K=a;this.B=this.F=0;this.o=Object.create(null)}w.prototype.has=function(a){return!!this.o[a]};w.prototype.get=function(a){var b=this.o[a];if(b)return b.access=++this.B,b.payload};
w.prototype.put=function(a,b){this.has(a)||this.F++;this.o[a]={payload:b,access:this.B};if(!(this.F<=this.K)){if(t.dev)a=t.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.o;var c=this.B+1,d,e;for(e in a){var f=a[e].access;f<c&&(c=f,d=e)}void 0!==d&&(delete a[d],this.F--)}};v({c:!0,v:!0,a:!0,ad:!0});var x,y;
function z(a){if("string"==typeof a){x||(x=self.document.createElement("a"),y=self.UrlCache||(self.UrlCache=new w(100)));var b=y,c=x;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;
d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}}(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b}
function B(a,b){var c;c=void 0===c?"source":c;u().assert(null!=a,"%s %s must be available",b,c);var d=a;u().assert(z(d)||/^(\/\/)/.test(d),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,d)};function C(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function D(a,b){a=a.__AMP_TOP||a;return E(a,b)}function F(a){var b=G(a),b=H(b);return E(b,"documentInfo")}function I(a){a=G(a);a=H(a);return E(a,"viewport")}function G(a){return a.nodeType?D((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}function E(a,b){var c=J(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function K(a){var b=J(a).access;if(b){if(b.promise)return b.promise;E(a,"access");return b.promise=Promise.resolve(b.obj)}return null}function J(a){var b=a.services;b||(b=a.services={});return b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a,b){for(var c in b)a.setAttribute(c,b[c]);return a};function M(a){return N(a).then(function(a){return u().assert(a,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","access","amp-access","amp-access","amp-access")})}
function N(a){var b=G(a),c=K(H(a));return c?c:b.whenBodyAvailable().then(function(){var a;a=b.win;var c=b.getHeadNode(),f;if(c){f=[];for(var c=c.querySelectorAll("script[custom-element]"),g=0;g<c.length;g++)f.push(c[g].getAttribute("custom-element"))}else f=[];a=f.includes("amp-access")?D(a,"extensions").waitForExtension(a,"amp-access"):Promise.resolve();return a}).then(function(){var c=b.win;if(c.ampExtendedElements&&c.ampExtendedElements["amp-access"]){var c=H(a),e=K(c);if(!e){var f=new C,e=f.promise,
f=f.resolve;J(c).access={obj:null,promise:e,resolve:f,context:null,ctor:null}}c=e}else c=null;return c})};function O(a,b){var c=".amp-access-scroll-bar{height:44px;position:fixed;left:0;width:100%;background:transparent;z-index:2147483647;bottom:0}.amp-access-scroll-placeholder{padding-top:7px;padding-left:8px;background-color:#fff;border-top:1px solid #eee;border-bottom:1px solid #eee;box-sizing:border-box}\n/*# sourceURL=/extensions/amp-access-scroll/0.1/amp-access-scroll.css*/",d=!1,e="amp-access-scroll-elt",f=a.getHeadNode(),g=P(f,Q(f,c),d||!1,e||null);if(b){var n=a.getRootNode();if(R(n,g))b(g);else var k=
setInterval(function(){R(n,g)&&(clearInterval(k),b(g))},4)}}
function P(a,b,c,d){var e=a.__AMP_CSS_SM;if(!e)var f=Object.create(null),e=a.__AMP_CSS_SM=f;var g=!c&&d&&"amp-custom"!=d&&"amp-keyframes"!=d;if(f=c?"amp-runtime":g?"amp-extension="+d:null){var n=S(a,e,f);if(n)return n}var k=(a.ownerDocument||a).createElement("style");k.textContent=b;var A=null;c?k.setAttribute("amp-runtime",""):g?(k.setAttribute("amp-extension",d||""),A=S(a,e,"amp-runtime")):(d&&k.setAttribute(d,""),A=a.lastChild);b=A;a.insertBefore(k,b?b.nextSibling:a.firstChild);f&&(e[f]=k);return k}
function S(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function Q(a,b){return(a=a.__AMP_CSS_TR)?a(b):b}function R(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++){var d=c[a];if(d.ownerNode==b)return!0}return!1};function T(a,b,c){this.ampdoc=a;this.G=c;this.m=u().assert(b.authorization,'"authorization" URL must be specified');B(this.m,'"authorization"');this.D=!b.noPingback;this.w=b.pingback;this.D&&(u().assert(this.w,'"pingback" URL must be specified'),B(this.w,'"pingback"'));c=b;if(c.authorizationTimeout){c=c.authorizationTimeout;u().assert("number"==typeof c,'"authorizationTimeout" must be a number');var d=self;if(d.AMP_MODE)d=d.AMP_MODE;else{var e=q(d.location.originalHash||d.location.hash),f=q(d.location.search);
r||(r=d.AMP_CONFIG&&d.AMP_CONFIG.v?d.AMP_CONFIG.v:"011533591342461");d=d.AMP_MODE={localDev:!1,development:!("1"!=e.development&&!d.AMP_DEV_MODE),examiner:"2"==e.development,filter:e.filter,geoOverride:e["amp-geo"],minified:!0,lite:void 0!=f.amp_lite,test:!1,log:e.log,version:"1533591342461",rtvVersion:r}}d.development||(c=Math.min(c,3E3))}else c=3E3;this.C=c;this.H=D(a.win,"xhr");this.L=D(a.win,"timer")}h=T.prototype;
h.getConfig=function(){return{authorizationUrl:this.m,pingbackEnabled:this.D,pingbackUrl:this.w,authorizationTimeout:this.C}};h.getAuthorizationUrl=function(){return this.m};h.isAuthorizationEnabled=function(){return!0};h.getAuthorizationTimeout=function(){return this.C};h.authorize=function(){var a=this,b=this.G.buildUrl(this.m,!1);return b.then(function(b){return a.L.timeoutPromise(a.C,a.H.fetchJson(b,{credentials:"include"})).then(function(a){return a.json()})})};h.isPingbackEnabled=function(){return this.D};
h.pingback=function(){var a=this;return this.G.buildUrl(this.w,!0).then(function(b){return a.H.sendSignal(b,{method:"POST",credentials:"include",headers:v({"Content-Type":"application/x-www-form-urlencoded"}),body:""})})};h.postAction=function(){};var U={authorization:"https://connect.scroll.com/amp/access?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&x=QUERY_PARAM(scrollx)",pingback:"https://connect.scroll.com/amp/pingback?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll)&v=AUTHDATA(visitId)",namespace:"scroll"},V={requests:{scroll:"https://connect.scroll.com/amp/analytics?rid=ACCESS_READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll.scroll)&v=AUTHDATA(scroll.visitId)&h=SOURCE_HOSTNAME&s=${totalEngagedTime}"},
triggers:{trackInterval:{on:"timer",timerSpec:{interval:15,maxTimerLength:7200},request:"scroll"}}};function W(a,b,c){T.call(this,a,U,{buildUrl:c.buildUrl.bind(c),collectUrlVars:c.collectUrlVars.bind(c)});this.I=b;this.J=c}l(W,T);
W.prototype.authorize=function(){var a=this;return T.prototype.authorize.call(this).then(function(b){var c=a.ampdoc.getRootNode().querySelector("amp-story[standalone]");if(b&&b.scroll&&!c){(new X(a.ampdoc)).show(a.I);var d=a.ampdoc,e=a.J.getAdapterConfig();if(!e.disableAnalytics){var f=d.win.document,g=v({trigger:"immediate"});e.dataConsentId&&(g["data-block-on-consent"]="");e=f.createElement("amp-analytics");g=L(e,g);e=v({type:"application/json"});f=f.createElement("script");f=L(f,e);f.textContent=
JSON.stringify(V);g.appendChild(f);g.CONFIG=V;D(d.win,"extensions").installExtensionForDoc(d,"amp-analytics");d.getBody().appendChild(g)}}return b})};
function X(a){O(a,function(){});this.l=a;this.j=document.createElement("div");this.j.classList.add("amp-access-scroll-bar");this.j.classList.add("amp-access-scroll-placeholder");var b=document.createElement("img");b.setAttribute("src","https://static.scroll.com/assets/icn-scroll-logo.svg");b.setAttribute("layout","fixed");b.setAttribute("width",26);b.setAttribute("height",26);this.j.appendChild(b);a.getBody().appendChild(this.j);this.A=document.createElement("div");this.A.classList.add("amp-access-scroll-bar");
this.h=document.createElement("iframe");this.h.setAttribute("scrolling","no");this.h.setAttribute("frameborder","0");this.h.setAttribute("allowtransparency","true");this.h.setAttribute("title","Scroll");this.h.setAttribute("width","100%");this.h.setAttribute("height","100%");this.h.setAttribute("sandbox","allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox");this.A.appendChild(this.h);a.getBody().appendChild(this.A)}
X.prototype.show=function(a){var b=this;I(this.l).addToFixedLayer(this.A).then(function(){return a.getAccessReaderId()}).then(function(a){b.h.onload=function(){b.l.getBody().removeChild(b.j)};var c=F(b.l).get();b.h.setAttribute("src","https://connect.scroll.com/amp/scrollbar?rid="+encodeURIComponent(a)+"&o="+encodeURIComponent(b.l.getUrl())+"&c="+encodeURIComponent(c.canonicalUrl))})};(function(a){a.registerServiceForDoc("scroll",function(a){return M(a).then(function(b){var c=b.getVendorSource("scroll"),e=new W(a,b,c),f=c.getAdapter();f.registerVendor(e);return e})})})(self.AMP);
})});
//# sourceMappingURL=amp-access-scroll-0.1.js.map

