(self.AMP=self.AMP||[]).push({n:"amp-auto-ads",v:"1533591342461",f:(function(AMP,_){
function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function h(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var ca=Object.prototype.toString;self.log=self.log||{user:null,dev:null,userForEmbed:null};var m=self.log;function p(){if(!m.user)throw Error("failed to call initLogConstructor");return m.user};var q=Object.prototype.hasOwnProperty;function t(a){return a||{}};function u(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function v(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function w(a){this.L=a;this.w=this.B=0;this.o=Object.create(null)}w.prototype.has=function(a){return!!this.o[a]};w.prototype.get=function(a){var b=this.o[a];if(b)return b.access=++this.w,b.payload};
w.prototype.put=function(a,b){this.has(a)||this.B++;this.o[a]={payload:b,access:this.w};if(!(this.B<=this.L)){if(m.dev)a=m.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.o;var c=this.w+1,d,e;for(e in a){var f=a[e].access;f<c&&(c=f,d=e)}void 0!==d&&(delete a[d],this.B--)}};t({c:!0,v:!0,a:!0,ad:!0});var x,y;
function z(a){var b;x||(x=self.document.createElement("a"),y=self.UrlCache||(self.UrlCache=new w(100)));var c=b?null:y,d=x;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a};function A(a,b){var c;if(a.__AMP__EXPERIMENT_TOGGLES)c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(var e=
e.getAttribute("content").split(","),f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0);Object.assign(c,da(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var g;g=ba.exec(e);)f=h(g[1],g[1]),g=g[2]?h(g[2],g[2]):"",a[f]=g;for(e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}}var k=c;return!!k[b]}
function da(a){a:{var b;try{b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==h(c.substring(0,d).trim(),void 0)){a=c.substring(d+1).trim();a=h(a,a);break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b}function fa(a){return new Promise(function(b){b(a())})};function B(a,b){a=a.__AMP_TOP||a;return C(a,b)}function D(a){var b=E(a),b=F(b);return C(b,"documentInfo")}function G(a,b){a=E(a);a=F(a);return C(a,b)}function E(a){return a.nodeType?B((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function F(a){a=E(a);return a.isSingleDoc()?a.win:a}function C(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function I(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a}function ga(a,b){for(var c,d=a;d&&d!==c;d=d.parentElement)if(b(d))return d;return null}function ha(a,b){if(a.closest)return a.closest(b);b=b.toUpperCase();return ga(a,function(a){return a.tagName==b})}var J;
function ia(a,b){if(null==J){var c=a.ownerDocument;try{var d=c.createElement("div"),e=c.createElement("div");d.appendChild(e);J=d.querySelector(":scope div")===e}catch(f){J=!1}}if(J)return a.querySelectorAll(":scope "+b);a.classList.add("i-amphtml-scoped");b=a.querySelectorAll(".i-amphtml-scoped "+b);a.classList.remove("i-amphtml-scoped");return b}
function ja(a){v(a.tagName,"AMP-");if(a.createdCallback)return Promise.resolve(a);if(!a.__AMP_UPG_PRM){var b=new ea;a.__AMP_UPG_PRM=b.promise;a.__AMP_UPG_RES=b.resolve}return a.__AMP_UPG_PRM};function K(a){return G(a,"viewport")};function L(a){var b,c=4096,d=[],e=b&&null!=b.value&&""!==b.value?encodeURIComponent(b.name)+"="+encodeURIComponent(String(b.value)):null,f=c-45;e&&(f-=e.length+1);for(var g=Object.keys(a),k=0;k<g.length;k++){var r=g[k],H=a[r];if(null!=H&&""!==H){var n=encodeURIComponent(r)+"=",l=encodeURIComponent(String(H)),R=n.length+l.length+1;if(R>f){var S=l.substr(0,f-n.length-1).replace(/%\w?$/,"");S&&d.push(n+S);e&&d.push(e);break}d.push(n+l);f-=R}}return d.length?"//pagead2.googlesyndication.com/getconfig/ama?"+
d.join("&"):"//pagead2.googlesyndication.com/getconfig/ama"};var ka={isTrafficEligible:function(a){return!!a.document.querySelector("AMP-AUTO-ADS")},branches:["3782001","3782002"]};function la(a,b){return"adsense"==a?new M(b):"doubleclick"==a?new N(b):null}function M(a){this.h=a}
M.prototype.isEnabled=function(a){var b={"amp-auto-ads-adsense-holdout":ka};a.experimentBranches=a.experimentBranches||{};for(var c in b)if(q.call(b,c)&&!q.call(a.experimentBranches,c))if(!b[c].isTrafficEligible||!b[c].isTrafficEligible(a))a.experimentBranches[c]=null;else if(!a.experimentBranches[c]&&A(a,c)){var d=b[c].branches;a.experimentBranches[c]=d[Math.floor(Math.random()*d.length)]||null}var e=(a.experimentBranches?a.experimentBranches["amp-auto-ads-adsense-holdout"]:null)||null;return"3782001"!=
e};M.prototype.getConfigUrl=function(){var a=D(this.h).get(),b=z(a.canonicalUrl).hostname;return L({client:this.h.getAttribute("data-ad-client"),plah:b,ama_t:"amp",url:a.canonicalUrl})};M.prototype.getAttributes=function(){return t({type:"adsense","data-ad-client":this.h.getAttribute("data-ad-client")})};M.prototype.getDefaultAdConstraints=function(){var a=K(this.h).getSize().height;return{initialMinSpacing:a,subsequentMinSpacing:[{adCount:3,spacing:2*a},{adCount:6,spacing:3*a}],maxAdCount:8}};
M.prototype.getSizing=function(){return{}};function N(a){this.h=a}N.prototype.isEnabled=function(){return!0};N.prototype.getConfigUrl=function(){var a=D(this.h).get(),b=z(a.canonicalUrl).hostname;return L({client:this.h.getAttribute("data-ad-legacy-client"),plah:b,ama_t:"amp",url:a.canonicalUrl})};N.prototype.getAttributes=function(){return t({type:"doubleclick","data-slot":this.h.getAttribute("data-slot"),json:this.h.getAttribute("data-json")})};
N.prototype.getDefaultAdConstraints=function(){var a=K(this.h).getSize().height;return{initialMinSpacing:a,subsequentMinSpacing:[{adCount:3,spacing:2*a},{adCount:6,spacing:3*a}],maxAdCount:8}};N.prototype.getSizing=function(){var a;a:{var b=this.h.getAttribute("data-experiment");try{a=JSON.parse(b);break a}catch(d){}a=void 0}var c=a;return c?{height:c.height?Number(c.height):250,width:c.width?Number(c.width):void 0}:{}};var ma={type:!0};function O(a){if(!a.attributes)return{};if("[object Object]"!==ca.call(a.attributes)||Array.isArray(a.attributes))return p().warn("amp-auto-ads","attributes property not an object"),{};var b=a.attributes,c={},d;for(d in b)if(ma[d]||v(d,"data-")){var e=typeof b[d];"number"!=e&&"string"!=e&&"boolean"!=e?p().warn("amp-auto-ads","Attribute type not supported: "+e):c[d]=String(b[d])}else p().warn("amp-auto-ads","Attribute not whitlisted: "+d);return c};var na=["AMP-SIDEBAR","AMP-APP-BANNER"],oa={1:function(a,b){a.parentNode.insertBefore(b,a)},4:function(a,b){a.parentNode.insertBefore(b,a.nextSibling)},2:function(a,b){a.insertBefore(b,a.firstChild)},3:function(a,b){a.appendChild(b)}};function P(a,b,c,d,e,f,g){this.ampdoc=a;this.H=b;this.F=c;this.S=d;this.O=e;this.J=f;this.P=g;this.C=null;this.j=0}P.prototype.getAdElement=function(){return this.C};
P.prototype.getEstimatedPosition=function(){var a=this;return this.H.getElementLayoutBox(this.F).then(function(b){var c;a:switch(c=b,a.S){case 1:case 2:c=c.top;break a;case 3:case 4:c=c.bottom;break a;default:throw Error("Unknown position");}return c})};
P.prototype.placeAd=function(a,b,c){var d=this;return this.getEstimatedPosition().then(function(e){return c.isTooNearAnAd(e).then(function(c){if(c)return d.j=3,d.j;d.C=pa(d,a,b.width);d.O(d.F,d.getAdElement());return ja(d.getAdElement()).then(function(){return d.getAdElement().whenBuilt()}).then(function(){return d.H.attemptChangeSize(d.getAdElement(),b.height||250,void 0,d.P)}).then(function(){d.j=2;return d.j},function(){d.j=1;return d.j})})})};
function pa(a,b,c){b=Object.assign(t({layout:c?"fixed":"fixed-height",height:"0",width:c?c:"auto","class":"i-amphtml-layout-awaiting-size"}),b,a.J);return I(a.ampdoc.win.document,"amp-ad",b)}function qa(a,b){var c=b.placements;if(!c)return p().info("amp-auto-ads","No placements in config"),[];var d=[];c.forEach(function(b){ra(a,b,d)});return d}
function ra(a,b,c){var d=oa[b.pos];if(d){var e=b.anchor;if(e){var f=Q(a.getBody(),e);if(f.length){var g=void 0;if(b.style){var k=parseInt(b.style.top_m,10),r=parseInt(b.style.bot_m,10);if(k||r)g={top:k||void 0,bottom:r||void 0}}f.forEach(function(e){if(sa(e,b.pos)){var f=O(b);c.push(new P(a,G(e,"resources"),e,b.pos,d,f,g))}})}else p().warn("amp-auto-ads","No anchor element found")}else p().warn("amp-auto-ads","No anchor in placement")}else p().warn("amp-auto-ads","No injector for position")}
function Q(a,b){var c=b.selector;if(!c)return p().warn("amp-auto-ads","No selector in anchor"),[];var c=[].slice.call(ia(a,c)),d=b.min_c||0;0<d&&(c=c.filter(function(a){return a.textContent.length>=d}));"number"!=typeof b.index&&b.all||(c=(c=c[b.index||0])?[c]:[]);if(0==c.length)return[];if(b.sub){var e=[];c.forEach(function(a){e=e.concat(Q(a,b.sub))});return e}return c}
function sa(a,b){var c=1==b||4==b?a.parentElement:a;if(!c)return p().warn("amp-auto-ads","Parentless anchor with BEFORE/AFTER position."),!1;var d=c;return!na.some(function(a){return ha(d,a)?(p().warn("amp-auto-ads","Placement inside blacklisted ancestor: "+a),!0):!1})};function T(a,b,c,d){this.K=a.slice(0);this.A=b;this.T=c;this.l=d;this.D=0}T.prototype.run=function(){var a=this;return this.l.isMaxAdCountReached()?fa(function(){return U(a)}):V(this).then(function(b){return b?a.run():U(a)})};function U(a){return{adsPlaced:a.D,totalAdsOnPage:a.l.getAdCount()}}
function V(a){var b=a.K.shift();return b?b.placeAd(a.A,a.T,a.l).then(function(c){return 2==c?(a.l.addAd(b.getAdElement()),a.D++,!0):V(a)}):(p().info("amp-auto-ads","unable to fulfill ad strategy"),Promise.resolve(!1))};function W(a,b){this.m=a;this.N=b.initialMinSpacing;this.I=b.subsequentMinSpacing.slice(0).sort(function(a,b){return a.adCount-b.adCount});this.R=b.maxAdCount;this.G=X(this)}W.prototype.addAd=function(a){this.m.push(a);this.G=X(this)};W.prototype.getAdCount=function(){return this.m.length};W.prototype.isMaxAdCountReached=function(){return this.getAdCount()>=this.R};W.prototype.isTooNearAnAd=function(a){return Y(this,a,0)};
function Y(a,b,c){return c>=a.m.length?Promise.resolve(!1):ta(b,a.m[c]).then(function(d){return d<a.G?!0:Y(a,b,c+1)})}function ta(a,b){return G(b,"resources").getElementLayoutBox(b).then(function(b){return a>=b.top&&a<=b.bottom?0:Math.min(Math.abs(a-b.top),Math.abs(a-b.bottom))})}function X(a){for(var b=a.getAdCount(),c=a.N,d=0;d<a.I.length;d++){var e=a.I[d];e.adCount<=b&&(c=e.spacing)}return c}
function ua(a){return[].slice.call(a.getRootNode().getElementsByTagName("AMP-AD")).filter(function(a){return a.parentElement&&"AMP-STICKY-AD"==a.parentElement.tagName?!1:!0})}
function va(a,b){b=b.adConstraints;if(!b)return null;var c=K(a).getHeight(),d=wa(b.initialMinSpacing,c);if(null==d)return p().warn("amp-auto-ads","Invalid initial min spacing"),null;var e=(b.subsequentMinSpacing||[]).map(function(a){var b=a.adCount;if(null==b)return p().warn("amp-auto-ads","No subsequentMinSpacing adCount specified"),null;a=wa(a.spacing,c);return null==a?(p().warn("amp-auto-ads","Invalid subsequent min spacing"),null):{adCount:b,spacing:a}});return-1!=e.indexOf(null)?null:null==b.maxAdCount?
(p().warn("amp-auto-ads","No maxAdCount specified"),null):{initialMinSpacing:d,subsequentMinSpacing:e,maxAdCount:b.maxAdCount}}function wa(a,b){if(!a)return null;var c=parseFloat(a);return isNaN(c)||0>c?null:u(a,"px")?c:u(a,"vp")?c*b:null};function xa(a,b,c){this.ampdoc=a;this.A=b;this.M=c}
xa.prototype.run=function(){var a;a:{if(a=this.M.optInStatus)for(var b=0;b<a.length;b++)if(2==a[b]){a=!0;break a}a=!1}if(!a)return Promise.resolve(!1);if(0<this.ampdoc.getRootNode().getElementsByTagName("AMP-STICKY-AD").length)return p().warn("amp-auto-ads","exists <amp-sticky-ad>"),Promise.resolve(!1);B(this.ampdoc.win,"extensions").installExtensionForDoc(this.ampdoc,"amp-sticky-ad");a=K(this.ampdoc).getWidth();b=Object.assign({},this.A,t({width:String(a),height:"100"}));a=this.ampdoc.win.document;
b=I(a,"amp-ad",b);a=I(a,"amp-sticky-ad",t({layout:"nodisplay"}));a.appendChild(b);b=this.ampdoc.getBody();b.insertBefore(a,b.firstChild);return Promise.resolve(!0)};function Z(a){return AMP.BaseElement.apply(this,arguments)||this}aa(Z,AMP.BaseElement);
Z.prototype.buildCallback=function(){var a=this;p().assert(A(this.win,"amp-auto-ads"),"Experiment is off");var b=this.element.getAttribute("type");p().assert(b,"Missing type attribute");var c=la(b,this.element);p().assert(c,"No AdNetworkConfig for type: "+b);if(c.isEnabled(this.win)){var d=this.getAmpDoc();B(this.win,"extensions").installExtensionForDoc(d,"amp-ad");var e=G(this.getAmpDoc(),"viewer"),f=e.whenFirstVisible();f.then(function(){return ya(a,c.getConfigUrl())}).then(function(b){if(b){var e=
b.noConfigReason;if(e)a.user().warn("amp-auto-ads",e);else{var f=qa(d,b),g=Object.assign(c.getAttributes(),O(b)),n=c.getSizing(),l=va(d,b)||c.getDefaultAdConstraints(),l=new W(ua(d),l);(new T(f,g,n,l)).run();(new xa(d,g,b)).run()}}})}};Z.prototype.isLayoutSupported=function(){return!0};
function ya(a,b){var c={mode:"cors",method:"GET",credentials:"omit",requireAmpResponseSourceOrigin:!1};return B(a.win,"xhr").fetchJson(b,c).then(function(a){return a.json()}).catch(function(b){a.user().error("amp-auto-ads","amp-auto-ads config xhr failed: "+b);return null})}(function(a){a.registerElement("amp-auto-ads",Z)})(self.AMP);
})});
//# sourceMappingURL=amp-auto-ads-0.1.js.map
