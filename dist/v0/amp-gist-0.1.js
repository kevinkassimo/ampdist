(self.AMP=self.AMP||[]).push({n:"amp-gist",v:"1533591342461",f:(function(AMP,_){
function p(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var e in b)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,e);d&&Object.defineProperty(a,e,d)}else a[e]=b[e]}function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var e=t(c[1],c[1]),d=c[2]?t(c[2],c[2]):"";b[e]=d}return b};var w="";function z(){var a=void 0,b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var e=v(c.location.originalHash||c.location.hash),d=v(c.location.search);w||(w=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011533591342461");c=b.AMP_MODE={localDev:!1,development:!("1"!=e.development&&!c.AMP_DEV_MODE),examiner:"2"==e.development,filter:e.filter,geoOverride:e["amp-geo"],minified:!0,lite:void 0!=d.amp_lite,test:!1,log:e.log,version:"1533591342461",rtvVersion:w}}return c};self.log=self.log||{user:null,dev:null,userForEmbed:null};var A=self.log;function B(){if(!A.user)throw Error("failed to call initLogConstructor");return A.user}function C(){if(A.dev)return A.dev;throw Error("failed to call initLogConstructor");};function D(a){return a||{}};function E(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var F=self.AMP_CONFIG||{},I={thirdParty:F.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:F.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof F.thirdPartyFrameRegex?new RegExp(F.thirdPartyFrameRegex):F.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:F.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof F.cdnProxyRegex?new RegExp(F.cdnProxyRegex):F.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:F.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:F.localDev||!1};function J(a){this.o=a;this.l=this.m=0;this.h=Object.create(null)}J.prototype.has=function(a){return!!this.h[a]};J.prototype.get=function(a){var b=this.h[a];if(b)return b.access=++this.l,b.payload};J.prototype.put=function(a,b){this.has(a)||this.m++;this.h[a]={payload:b,access:this.l};if(!(this.m<=this.o)){C().warn("lru-cache","Trimming LRU cache");a=this.h;var c=this.l+1,e,d;for(d in a){var f=a[d].access;f<c&&(c=f,e=d)}void 0!==e&&(delete a[e],this.m--)}};D({c:!0,v:!0,a:!0,ad:!0});var K,L;
function M(a){var b;K||(K=self.document.createElement("a"),L=self.UrlCache||(self.UrlCache=new J(100)));var c=b?null:L,e=K;if(c&&c.has(a))a=c.get(a);else{e.href=a;e.protocol||(e.href=e.href);var d={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
e.origin&&"null"!=e.origin?e.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function ba(a){"string"==typeof a&&(a=M(a));var b;(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b};function ca(a){var b="no-sync-xhr-in-ads",c=N(a);return!!c[b]}
function N(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var e=a.AMP_CONFIG[c];"number"===typeof e&&0<=e&&1>=e&&(b[c]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var d=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(f){var g=
f.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=d.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,da(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=v(a.location.originalHash||a.location.hash);for(var h=0;h<c.length;h++){var k=a["e-"+c[h]];"1"==k&&(b[c[h]]=!0);"0"==k&&(b[c[h]]=!1)}}return b}
function da(a){a:{var b;try{b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),e=c.indexOf("=");if(-1!=e&&"AMP_EXP"==t(c.substring(0,e).trim(),void 0)){a=c.substring(e+1).trim();a=t(a,a);break a}}a=null}var d=a,f=d?d.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};function O(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=b.__AMP_TOP||b;a=P(b,"ampdoc").getAmpDoc(a)}return a}function Q(a){a=O(a);return a.isSingleDoc()?a.win:a}function P(a,b){var c=a.services;c||(c=a.services={});var e=c;a=e[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ea(a){for(var b=a.nodeName,c=0,e=0,d=a.previousElementSibling;d&&25>e&&100>c;)d.nodeName==b&&e++,c++,d=d.previousElementSibling;return 25>e&&100>c?"."+e:""};function R(a,b){try{return JSON.parse(a)}catch(c){b&&b(c)}};var S,T="Webkit webkit Moz moz ms O o".split(" ");function fa(a){var b,c;c=a.style;if(E("border","--"))c="border";else{S||(S=Object.create(null));var e=S.border;if(!e){e="border";if(void 0===c.border){var d;b:{for(d=0;d<T.length;d++){var f=T[d]+"Border";if(void 0!==c[f]){d=f;break b}}d=""}void 0!==c[d]&&(e=d)}S.border=e}c=e}c&&(a.style[c]=b?"none"+b:"none")};function ga(a){if(!U(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return C().error("MESSAGING","Failed to parse message: "+a,c),null}}function U(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function V(a,b,c){var e=a.listeningFors;!e&&c&&(e=a.listeningFors=Object.create(null));a=e||null;if(!a)return a;var d=a[b];!d&&c&&(d=a[b]=[]);return d||null}function ha(a,b){var c=!0,e=M(b.src).origin,d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=V(a,d,!0);for(var f,d=0;d<a.length;d++){var g=a[d];if(g.frame===b){f=g;break}}f||(f={frame:b,origin:e,events:Object.create(null)},a.push(f));return f.events}
function ia(a){for(var b=D({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var e=a[c];if(!e.frame.contentWindow){a.splice(c,1);var d=e.events,f;for(f in d)d[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function ja(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=ka(b.data);if(c&&c.sentinel){var d;d=c.sentinel;var f=b.origin,g=b.source,h=V(a,d);if(h){for(var k,q=0;q<h.length;q++){var r=h[q],m=r.frame.contentWindow;if(m)if("amp"===d){if(r.origin===f&&m==g){k=r;break}}else{var l;if(!(l=g==m))b:{for(l=g;l&&l!=l.parent;l=l.parent)if(l==m){l=!0;break b}l=!1}if(l){k=r;break}}else setTimeout(ia,0,h)}d=k?k.events:null}else d=h;var G=d;if(G){var u=G[c.type];if(u)for(u=u.slice(),d=0;d<u.length;d++)(0,u[d])(c,
b.source,b.origin)}}}};a.addEventListener("message",b)}}function la(a,b){function c(c,d,f){if(e||d==a.contentWindow)"unlisten"==c.sentinel?h():b(c,d,f)}var e,d="embed-size",f=a.ownerDocument.defaultView;ja(f);var f=ha(f,a),g=f[d]||(f[d]=[]),h;g.push(c);h=function(){if(c){var a=g.indexOf(c);-1<a&&g.splice(a,1);b=g=c=null}}}
function ka(a){"string"==typeof a&&(a="{"==a.charAt(0)?R(a,function(a){C().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:U(a)?ga(a):null);return a};function W(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};var X={};
function ma(a,b){B().assert("github","Attribute type required for <amp-ad>: %s",b);for(var c=0,e=a;e&&e!=e.parent;e=e.parent)c++;var c=String(c)+"-"+Y(a),d=e={},f=b.dataset,g;for(g in f)E(g,"vars")||(d[g]=f[g]);if(g=b.getAttribute("json")){g=R(g);if(void 0===g)throw B().createError("Error parsing JSON in json attribute in element %s",b);for(var h in g)d[h]=g[h]}h=e;e=Date.now();d=b.getAttribute("width");g=b.getAttribute("height");h=h?h:{};h.width=W(d);h.height=W(g);b.getAttribute("title")&&(h.title=
b.getAttribute("title"));var k=a.location.href;"about:srcdoc"==k&&(k=a.parent.location.href);var d=O(b),d=Q(d),q=P(d,"documentInfo").get(),d=O(b),d=Q(d),r=P(d,"viewer"),d=r.getUnconfirmedReferrerUrl(),m=b.getPageLayoutBox();g=h;var f=I.thirdParty+"/1533591342461/ampcontext-v0.js",l=q.sourceUrl,G=q.canonicalUrl,q=q.pageViewId,k={href:k},u=b.tagName,na={localDev:!1,development:z().development,filter:z().filter,minified:!0,lite:z().lite,test:!1,log:z().log,version:z().version,rtvVersion:z().rtvVersion},
oa=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary),r=!r.isVisible(),m=m?{left:m.left,top:m.top,width:m.width,height:m.height}:null,pa=b.getIntersectionChangeEntry(),n;n=b;for(var H=[],x=0;n&&1==n.nodeType&&25>x;){var y="";n.id&&(y="/"+n.id);H.push(""+n.nodeName.toLowerCase()+y+ea(n));x++;n=n.parentElement}n=H.join();H=n.length;x=5381;for(y=0;y<H;y++)x=33*x^n.charCodeAt(y);g._context=D({ampcontextVersion:"1533591342461",ampcontextFilepath:f,sourceUrl:l,referrer:d,canonicalUrl:G,pageViewId:q,location:k,
startTime:e,tagName:u,mode:na,canary:oa,hidden:r,initialLayoutRect:m,initialIntersection:pa,domFingerprint:String(x>>>0),experimentToggles:N(a),sentinel:c});(a=b.getAttribute("src"))&&(h.src=a);e=h;e.type="github";Object.assign(e._context,void 0);return e}
function qa(a,b){var c={},e=c.disallowCustom,d=c.allowFullscreen,c=ma(a,b),f=a.document.createElement("iframe");X[c.type]||(X[c.type]=0);X[c.type]+=1;var g=ra(a,e),h=M(g).hostname,k=JSON.stringify(D({host:h,type:c.type,count:X[c.type],attributes:c}));f.src=g;f.ampLocation=M(g);f.name=k;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);d&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");fa(f);f.onload=function(){this.readyState="complete"};
ca(a)&&f.setAttribute("allow","sync-xhr 'none';");f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function ra(a,b){var c=void 0,e=a.bootstrapBaseUrl;if(e)a=e;else{var d;d=c;var f=a.document.querySelector('meta[name="amp-3p-iframe-src"]');if(f)if(b)B().error("3p-frame","3p iframe url disabled for github"),d=null;else{b=f.getAttribute("content");var g;g=void 0===g?"source":g;B().assert(null!=b,"%s %s must be available",f,g);B().assert(ba(b)||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',f,g,b);B().assert(-1==
b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,f);g=M(b);B().assert("localhost"==g.hostname&&!d||g.origin!=M(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,g.origin,f);d=b+"?1533591342461"}else d=null;d||(a.defaultBootstrapSubDomain=a.defaultBootstrapSubDomain||"d-"+Y(a),d="https://"+
a.defaultBootstrapSubDomain+("."+I.thirdPartyFrameHost+"/1533591342461/")+"frame.html");a=a.bootstrapBaseUrl=d}return a}function Y(a){var b;if(a.crypto&&a.crypto.getRandomValues){var c=new Uint32Array(2);a.crypto.getRandomValues(c);b=String(c[0])+c[1]}else b=String(a.Math.random()).substr(2)+"0";return b};function Z(a){a=AMP.BaseElement.call(this,a)||this;a.j=null;return a}p(Z,AMP.BaseElement);Z.prototype.preconnectCallback=function(a){this.preconnect.url("https://gist.github.com/",a)};Z.prototype.isLayoutSupported=function(a){return"fixed-height"==a};Z.prototype.layoutCallback=function(){var a=this,b=qa(this.win,this.element);this.applyFillContent(b);la(b,function(b){a.changeHeight(b.height)});this.element.appendChild(b);this.j=b;return this.loadPromise(b)};
Z.prototype.unlayoutCallback=function(){if(this.j){var a=this.j;a.parentElement&&a.parentElement.removeChild(a);this.j=null}return!0};(function(a){a.registerElement("amp-gist",Z)})(self.AMP);
})});
//# sourceMappingURL=amp-gist-0.1.js.map

