(self.AMP=self.AMP||[]).push({n:"amp-web-push",v:"1533591342461",f:(function(AMP,_){
var f;function m(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}var n=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a}(this);function p(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function q(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var d=p(c[1],c[1]),e=c[2]?p(c[2],c[2]):"";b[d]=e}return b};var t="";function u(){var a,b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var d=q(c.location.originalHash||c.location.hash),e=q(c.location.search);t||(t=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011533591342461");c=b.AMP_MODE={localDev:!1,development:!("1"!=d.development&&!c.AMP_DEV_MODE),examiner:"2"==d.development,filter:d.filter,geoOverride:d["amp-geo"],minified:!0,lite:void 0!=e.amp_lite,test:!1,log:d.log,version:"1533591342461",rtvVersion:t}}return c};self.log=self.log||{user:null,dev:null,userForEmbed:null};var v=self.log;function x(){if(!v.user)throw Error("failed to call initLogConstructor");return v.user}function y(){if(v.dev)return v.dev;throw Error("failed to call initLogConstructor");};function z(){var a,b=Object.create(null);a&&Object.assign(b,a);return b};function A(a){this.U=a;this.F=this.M=0;this.A=Object.create(null)}A.prototype.has=function(a){return!!this.A[a]};A.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.F,b.payload};A.prototype.put=function(a,b){this.has(a)||this.M++;this.A[a]={payload:b,access:this.F};if(!(this.M<=this.U)){y().warn("lru-cache","Trimming LRU cache");a=this.A;var c=this.F+1,d,e;for(e in a){var g=a[e].access;g<c&&(c=g,d=e)}void 0!==d&&(delete a[d],this.M--)}};var B,C;
function D(a){var b;B||(B=self.document.createElement("a"),C=self.UrlCache||(self.UrlCache=new A(100)));var c=b?null:C,d=B;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a};function E(a,b){a=a.__AMP_TOP||a;return F(a,b)}function G(a){var b=H(a),b=H(b),b=b.isSingleDoc()?b.win:b;return F(b,"amp-web-push-service")}function H(a){return a.nodeType?E((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function F(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var ba=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function ca(a,b,c,d,e){return e?e:b?"\ufffd":d?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a}function I(a){return String(a).replace(ba,ca)};var J;function da(a,b,c){var d=void 0,e=a,g=c,h;h=function(a){try{return g(a)}catch(r){throw self.reportError(r),r;}};var k=ea(),l=!1;d&&(l=d.capture);e.addEventListener(b,h,k?d:l);return function(){e&&e.removeEventListener(b,h,k?d:l);h=e=g=null}}function ea(){if(void 0!==J)return J;J=!1;try{var a={get capture(){J=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return J};function K(a,b,c){var d=c,e=da(a,b,function(a){try{d(a)}finally{d=null,e()}});return e}function fa(a){var b,c;if(a.complete||"complete"==a.readyState||a.document&&"complete"==a.document.readyState)return Promise.resolve(a);var d=new Promise(function(d,g){var e=a.tagName;b="AUDIO"===e||"VIDEO"===e?K(a,"loadstart",d):K(a,"load",d);e&&(c=K(a,"error",g))});return d.then(function(){c&&c();return a},function(){b&&b();var c=a;c&&c.src&&(c=c.src);throw x().createError("Failed to load:",c);})};var L,M="Webkit webkit Moz moz ms O o".split(" ");function ga(a,b){var c="amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/",d=!1,e="amp-web-push",g=a.getHeadNode(),h=ha(g,ia(g,c),d||!1,e||null);if(b){var k=a.getRootNode();if(N(k,h))b(h);else var l=setInterval(function(){N(k,h)&&(clearInterval(l),b(h))},4)}}
function ha(a,b,c,d){var e=a.__AMP_CSS_SM;e||(e=a.__AMP_CSS_SM=z());var g=!c&&d&&"amp-custom"!=d&&"amp-keyframes"!=d,h=c?"amp-runtime":g?"amp-extension="+d:null;if(h){var k=O(a,e,h);if(k)return k}var l=(a.ownerDocument||a).createElement("style");l.textContent=b;var w=null;c?l.setAttribute("amp-runtime",""):g?(l.setAttribute("amp-extension",d||""),w=O(a,e,"amp-runtime")):(d&&l.setAttribute(d,""),w=a.lastChild);b=w;a.insertBefore(l,b?b.nextSibling:a.firstChild);h&&(e[h]=l);return l}
function O(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function ia(a,b){return(a=a.__AMP_CSS_TR)?a(b):b}function N(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++){var d=c[a];if(d.ownerNode==b)return!0}return!1};var P={HELPER_FRAME_URL:"helper-iframe-url",PERMISSION_DIALOG_URL:"permission-dialog-url",SERVICE_WORKER_URL:"service-worker-url"};function Q(a){return AMP.BaseElement.call(this,a)||this}m(Q,AMP.BaseElement);f=Q.prototype;
f.validate=function(){if("amp-web-push"!==this.element.getAttribute("id"))throw x().createError("<amp-web-push> must have an id attribute with value 'amp-web-push'.");if(1<this.getAmpDoc().getRootNode().querySelectorAll("#"+I("amp-web-push")).length)throw x().createError("Only one <amp-web-push> element may exist on a page.");var a={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null},b;for(b in P){var c=P[b];x().assert(this.element.getAttribute(c),"The "+c+" attribute is required for <amp-web-push>");
a[c]=this.element.getAttribute(c)}if(!R(a["helper-iframe-url"]))throw x().createError("<amp-web-push> must have a valid helper-iframe-url attribute. It should begin with the https:// protocol and point to the provided lightweight template page provided for AMP messaging.");if(!R(a["permission-dialog-url"]))throw x().createError("<amp-web-push> must have a valid permission-dialog-url attribute. It should begin with the https:// protocol and point to the provided template page for showing the permission prompt.");
if("https:"!==D(a["service-worker-url"]).protocol)throw x().createError("<amp-web-push> must have a valid service-worker-url attribute. It should begin with the https:// protocol and point to the service worker JavaScript file to be installed.");if(D(a["service-worker-url"]).origin!==D(a["permission-dialog-url"]).origin||D(a["permission-dialog-url"]).origin!==D(a["helper-iframe-url"]).origin)throw x().createError("<amp-web-push> URL attributes service-worker-url, permission-dialog-url, and helper-iframe-url must all share the same origin.");
};f.parseConfig=function(){var a={},b;for(b in P){var c=P[b];a[c]=this.element.getAttribute(c)}return a};f.buildCallback=function(){this.validate();var a=this.parseConfig(),b=G(this.getAmpDoc());b.start(a).catch(function(){});this.registerAction("subscribe",this.Z.bind(this));this.registerAction("unsubscribe",this.$.bind(this))};f.Z=function(a){var b=a.event.target;b.disabled=!0;G(this.getAmpDoc()).subscribe(function(){b.disabled=!1}).then(function(){b.disabled=!1})};
f.$=function(a){var b=a.event.target;b.disabled=!0;G(this.getAmpDoc()).unsubscribe().then(function(){b.disabled=!1})};function R(a){try{var b=D(a),c=1<b.pathname.length,d="https:"===b.protocol;return d&&c}catch(e){return!1}};function S(a){a||(a={debug:!1,windowContext:window});this.o={};this.l={};this.I=a.debug;this.B=this.V=this.W=!1;this.D=this.J=this.K=this.j=this.H=null;this.T=a.windowContext||window}f=S.prototype;
f.listen=function(a){var b=this;return(new Promise(function(c,d){b.B?d(Error("Already connected.")):b.W?d(Error("Already listening for connections.")):Array.isArray(a)?(b.K=b.Y.bind(b,a,c,d),b.T.addEventListener("message",b.K)):d(Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",a))})).then(function(){b.send(S.Topics.CONNECT_HANDSHAKE,null);b.B=!0})};
f.Y=function(a,b,c,d){var e=d.data,g=d,h=g.ports;a:{for(var g=D(g.origin).origin,k=0;k<a.length;k++)if(D(a[k]).origin===g){a=!0;break a}a=!1}a&&e&&e.topic===S.Topics.CONNECT_HANDSHAKE&&(this.T.removeEventListener("message",this.K),this.j=h[0],this.D=this.R.bind(this),this.j.addEventListener("message",this.D,!1),this.j.start(),b())};
f.connect=function(a,b){var c=this;return new Promise(function(d,e){a||e(Error("Provide a valid Window context to connect to."));b||e(Error("Provide an expected origin for the remote Window or provide the wildcard *."));c.B?e(Error("Already connected.")):c.V?e(Error("Already connecting.")):(c.H=new MessageChannel,c.j=c.H.port1,c.J=c.X.bind(c,c.j,b,d),c.j.addEventListener("message",c.J),c.j.start(),a.postMessage({topic:S.Topics.CONNECT_HANDSHAKE},"*"===b?"*":D(b).origin,[c.H.port2]))})};
f.X=function(a,b,c){this.B=!0;a.removeEventListener("message",this.J);this.D=this.R.bind(this);a.addEventListener("message",this.D,!1);c()};f.R=function(a){a=a.data;if(this.o[a.id]&&a.isReply){var b=this.o[a.id];delete this.o[a.id];var c=b.promiseResolver;b.message=a.data;c([a.data,this.S.bind(this,a.id,b.topic)])}else{var d=this.l[a.topic];if(d)for(var e=0;e<d.length;e++)(0,d[e])(a.data,this.S.bind(this,a.id,a.topic))}};f.on=function(a,b){this.l[a]?this.l[a].push(b):this.l[a]=[b]};
f.off=function(a,b){if(b){var c=this.l[a].indexOf(b);-1!==c&&this.l[a].splice(c,1)}else this.l[a]&&delete this.l[a]};f.S=function(a,b,c){var d=this,e={id:a,topic:b,data:c,isReply:!0};this.j.postMessage(e);return new Promise(function(a){d.o[e.id]={message:c,topic:b,promiseResolver:a}})};f.send=function(a,b){var c=this,d={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:a,data:b};this.j.postMessage(d);return new Promise(function(e){c.o[d.id]={message:b,topic:a,promiseResolver:e}})};
n.Object.defineProperties(S,{Topics:{configurable:!0,enumerable:!0,get:function(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}}});function T(a){return AMP.BaseElement.call(this,a)||this}m(T,AMP.BaseElement);T.prototype.isLayoutSupported=function(a){return"fixed"==a};T.prototype.buildCallback=function(){this.element.classList.add("amp-invisible")};function U(a,b){this.G=a;this.aa=b;this.m=null;this.P=new Promise(function(){})}
U.prototype.load=function(){var a=this;return this.G.whenReady().then(function(){a.m=a.G.win.document.createElement("iframe");var b=a.m,c;c=b.style;L||(L=z());var d=L.display;if(!d){d="display";if(void 0===c.display){var e;b:{for(e=0;e<M.length;e++){var g=M[e]+"Display";if(void 0!==c[g]){e=g;break b}}e=""}void 0!==c[e]&&(d=e)}L.display=d}c=d;c&&(b.style[c]="none");a.m.sandbox="allow-same-origin allow-scripts";a.m.src=a.aa;a.G.getBody().appendChild(a.m);a.P=fa(a.m);return a.whenReady()})};
U.prototype.getDomElement=function(){return this.m};U.prototype.whenReady=function(){return this.P};function V(a){this.ampdoc=a;ga(a,function(){});this.c={"helper-iframe-url":null,"permission-dialog-url":null,"service-worker-url":null,debug:null};this.I=u().development;this.O=this.C=null;this.N=new S({debug:this.I});this.L=null}f=V.prototype;
f.start=function(a){var b=this;if(!this.environmentSupportsWebPush())return x().warn("amp-web-push","Web push is not supported."),Promise.reject("Web push is not supported");this.initializeConfig(a);var c=this.installHelperFrame();c.then(function(){return b.N.connect(b.C.getDomElement().contentWindow,D(b.c["helper-iframe-url"]).origin)}).then(function(){if(b.isContinuingSubscriptionFromRedirect())ja(b);else return b.updateWidgetVisibilities()});return c};f.initializeConfig=function(a){this.c=a};
f.installHelperFrame=function(){var a=-1!==this.c["helper-iframe-url"].indexOf("?"),b=a?"&":"?",c=""+this.c["helper-iframe-url"]+b+("parentOrigin="+this.ampdoc.win.location.origin);this.C=new U(this.ampdoc,c);return this.C.load()};f.isContinuingSubscriptionFromRedirect=function(){return-1!==(this.ampdoc.win.testLocation||this.ampdoc.win.location).search.indexOf(V.PERMISSION_POPUP_URL_FRAGMENT)};
f.removePermissionPopupUrlFragmentFromUrl=function(a){var b=a.replace("?"+V.PERMISSION_POPUP_URL_FRAGMENT,"");return b=b.replace("&"+V.PERMISSION_POPUP_URL_FRAGMENT,"")};function W(a,b,c){return a.C.whenReady().then(function(){return a.N.send(b,c)}).then(function(a){var d=a[0];if(d.success)return d.result;throw Error("AMP page helper iframe query topic "+b+" "+("and message "+c+" failed with: "+d.error));})}function X(a,b){return W(a,S.Topics.SERVICE_WORKER_QUERY,{topic:b,payload:null})}
f.queryNotificationPermission=function(){return W(this,S.Topics.NOTIFICATION_PERMISSION_STATE,null)};f.registerServiceWorker=function(){return W(this,S.Topics.SERVICE_WORKER_REGISTRATION,{workerUrl:this.c["service-worker-url"],registrationOptions:this.c.serviceWorkerRegistrationOptions||{scope:"/"}})};f.querySubscriptionStateRemotely=function(){return X(this,"amp-web-push-subscription-state")};f.subscribeForPushRemotely=function(){return X(this,"amp-web-push-subscribe")};
f.unsubscribeFromPushRemotely=function(){return X(this,"amp-web-push-unsubscribe")};f.isServiceWorkerActivated=function(){var a=this,b=this;return W(this,S.Topics.SERVICE_WORKER_STATE,null).then(function(c){var d=!0===c.isControllingFrame,e=a.isUrlSimilarForQueryParams(c.url,b.c["service-worker-url"]),g="activated"===c.state;return d&&e&&g})};
f.isUrlSimilarForQueryParams=function(a,b){var c=D(a),d=q(c.search),e=D(b),g=q(e.search),h;for(h in d)if(g[h]!==d[h])return!1;return c.origin===e.origin&&c.pathname===e.pathname};f.setWidgetVisibilities=function(a,b){for(var c=this.ampdoc.getRootNode().querySelectorAll(I("amp-web-push-widget")+"[visibility="+I(a)+"]"),d="amp-invisible",e=0;e<c.length;e++){var g=c[e];b?g.classList.remove(d):g.classList.add(d)}};function ka(a){return a.queryNotificationPermission().then(function(b){a.O=b})}
f.updateWidgetVisibilities=function(){var a=this;return ka(this).then(function(){return W(a,S.Topics.NOTIFICATION_PERMISSION_STATE,{isQueryTopicSupported:S.Topics.STORAGE_GET})}).then(function(b){var c=!0===b;return c?W(a,S.Topics.STORAGE_GET,{key:"amp-web-push-notification-permission"}):Promise.resolve("default")}).then(function(b){if("denied"===b)0<a.ampdoc.getRootNode().querySelectorAll(I("amp-web-push-widget")+"[visibility="+I("blocked")+"]").length?(a.setWidgetVisibilities("unsubscribed",!1),
a.setWidgetVisibilities("subscribed",!1),a.setWidgetVisibilities("blocked",!0)):Y(a);else return a.isServiceWorkerActivated().then(function(b){b?la(a):Y(a)})})};
function la(a){E(a.ampdoc.win,"timer").timeoutPromise(5E3,a.querySubscriptionStateRemotely().then(function(b){switch("boolean"===typeof b?1:void 0){case V.AMP_VERSION_INITIAL:var c=b;c?(a.setWidgetVisibilities("unsubscribed",!1),a.setWidgetVisibilities("subscribed",!0),a.setWidgetVisibilities("blocked",!1)):Y(a);break;default:throw x().createError("The controlling service worker replied to amp-web-push with an unexpected value.");}}),"The controlling service worker does not support amp-web-push.")}
function Y(a){a.setWidgetVisibilities("unsubscribed",!0);a.setWidgetVisibilities("subscribed",!1);a.setWidgetVisibilities("blocked",!1)}
f.subscribe=function(a){var b=this,c=[];c.push(this.registerServiceWorker());c.push(new Promise(function(c){switch(b.O){case "granted":return Z(b).then(function(){c()});default:var d=b.openPopupOrRedirect();ma(b,d,a);b.L=new S({debug:b.I});b.L.listen([b.c["permission-dialog-url"]]);b.onPermissionDialogInteracted().then(function(a){return b.handlePermissionDialogInteraction(a)}).then(function(){c()})}}));return Promise.all(c)};
function ma(a,b,c){if(b&&!b.closed)var d=a.ampdoc.win.setInterval(function(){b.closed&&(c(),a.ampdoc.win.clearInterval(d))},500)}f.handlePermissionDialogInteraction=function(a){var b=a[0];a=a[1];switch(b){case "denied":case "default":return a({closeFrame:!0}),this.updateWidgetVisibilities();case "granted":a({closeFrame:!0});Z(this);break;default:throw Error("Unexpected permission value:",b);}};
function Z(a){return a.subscribeForPushRemotely().then(function(){return a.updateWidgetVisibilities()})}f.unsubscribe=function(){var a=this;return this.unsubscribeFromPushRemotely().then(function(){return a.updateWidgetVisibilities()})};f.onPermissionDialogInteracted=function(){var a=this;return new Promise(function(b){a.L.on(S.Topics.NOTIFICATION_PERMISSION_STATE,function(a,d){b([a,d])})})};
f.openPopupOrRedirect=function(){var a=-1!==this.ampdoc.win.location.href.indexOf("?"),b=a?"&":"?",c=this.ampdoc.win.location.href+b+V.PERMISSION_POPUP_URL_FRAGMENT,d=-1!==this.c["permission-dialog-url"].indexOf("?"),e=d?"&":"?",g=this.c["permission-dialog-url"]+e+("return="+encodeURIComponent(c)),h=Math.floor(Math.min(700,.9*screen.width)),k=Math.floor(Math.min(450,.9*screen.height)),l={w:h,h:k,x:Math.floor((screen.width-h)/2),y:Math.floor((screen.height-k)/2)},w="height="+l.h+",width="+l.w+",left="+
l.x+",top="+l.y,h=this.ampdoc.win,k=g,r;try{r=h.open(k,"_blank",w+",resizable=yes,scrollbars=yes")}catch(na){y().error("DOM","Failed to open url on target: ","_blank",na)}r||(r=h.open(k,"_top"));return r};
function ja(a){a.ampdoc.win.history.replaceState(null,"",a.removePermissionPopupUrlFragmentFromUrl(a.ampdoc.win.location.href));a.queryNotificationPermission().then(function(b){switch(b){case "denied":case "default":return a.updateWidgetVisibilities();case "granted":Z(a);break;default:throw Error("Unexpected permission value",b);}})}
f.environmentSupportsWebPush=function(){return void 0!==this.ampdoc.win.Notification&&void 0!==this.ampdoc.win.navigator.serviceWorker&&void 0!==this.ampdoc.win.PushManager&&("https:"===this.ampdoc.win.location.protocol||"localhost"===this.ampdoc.win.location.hostname||"127.0.0.1"===this.ampdoc.win.location.hostname||u().development||!1)};
n.Object.defineProperties(V,{PERMISSION_POPUP_URL_FRAGMENT:{configurable:!0,enumerable:!0,get:function(){return"amp-web-push-subscribing=yes"}},AMP_VERSION_INITIAL:{configurable:!0,enumerable:!0,get:function(){return 1}}});(function(a){a.registerServiceForDoc("amp-web-push-service",V);a.registerElement("amp-web-push",Q);a.registerElement("amp-web-push-widget",T,"amp-web-push-widget.amp-invisible{visibility:hidden}\n/*# sourceURL=/extensions/amp-web-push/0.1/amp-web-push.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-web-push-0.1.js.map

