(self.AMP=self.AMP||[]).push({n:"amp-viewer-integration",p:"high",v:"1533591342461",f:(function(AMP,_){
function p(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function r(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var d=p(c[1],c[1]),e=c[2]?p(c[2],c[2]):"";b[d]=e}return b};self.log=self.log||{user:null,dev:null,userForEmbed:null};var t=self.log;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user};function v(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function w(a){return a||{}};var y=self.AMP_CONFIG||{},ba={thirdParty:y.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:y.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof y.thirdPartyFrameRegex?new RegExp(y.thirdPartyFrameRegex):y.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:y.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof y.cdnProxyRegex?new RegExp(y.cdnProxyRegex):y.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:y.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:y.localDev||!1};function z(a){this.U=a;this.C=this.L=0;this.w=Object.create(null)}z.prototype.has=function(a){return!!this.w[a]};z.prototype.get=function(a){var b=this.w[a];if(b)return b.access=++this.C,b.payload};
z.prototype.put=function(a,b){this.has(a)||this.L++;this.w[a]={payload:b,access:this.C};if(!(this.L<=this.U)){if(t.dev)a=t.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.w;var c=this.C+1,d,e;for(e in a){var g=a[e].access;g<c&&(c=g,d=e)}void 0!==d&&(delete a[d],this.L--)}};var ca=w({c:!0,v:!0,a:!0,ad:!0}),A,B,da=/[?&]amp_js[^&]*/,ea=/[?&]amp_gsa[^&]*/,fa=/[?&]amp_r[^&]*/,ga=/[?&]usqp[^&]*/;
function C(a){var b;A||(A=self.document.createElement("a"),B=self.UrlCache||(self.UrlCache=new z(100)));var c=b?null:B,d=A;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a}
function ha(a){"string"==typeof a&&(a=C(a));var b=a;"string"==typeof b&&(b=C(b));if(!ba.cdnProxyRegex.test(b.origin))return a.href;var b=a.pathname.split("/"),c=b[1];u().assert(ca[c],"Unknown path prefix in url %s",a.href);var d=b[2],e="s"==d?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(d);u().assert(0<e.indexOf("."),"Expected a . in origin %s",e);b.splice(1,"s"==d?3:2);b=e+b.join("/");c=(c=a.search)&&"?"!=c?(c=c.replace(da,"").replace(ea,"").replace(fa,"").replace(ga,"").replace(/^[?&]/,
""))?"?"+c:"":"";return b+c+(a.hash||"")};function ia(a,b){var c,d=a=a.__AMP_TOP||a,e=a,g=D(d),f=g["viewer-integration-variable"];f||(f=g["viewer-integration-variable"]={obj:null,promise:null,resolve:null,context:null,ctor:null});f.ctor||f.obj||(f.ctor=b,f.context=e,f.resolve&&E(d,"viewer-integration-variable"));c&&E(a,"viewer-integration-variable")}function F(a,b){a=G(a);a=G(a);a=a.isSingleDoc()?a.win:a;return E(a,b)}
function G(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView,b=b.__AMP_TOP||b;a=E(b,"ampdoc").getAmpDoc(a)}return a}function E(a,b){var c=D(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function D(a){var b=a.services;b||(b=a.services={});return b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ja(a){return a.parent&&a.parent!=a};var H;function I(a,b,c,d){var e=a,g=c,f;f=function(a){try{return g(a)}catch(m){throw self.reportError(m),m;}};var k=ka(),h=!1;d&&(h=d.capture);e.addEventListener(b,f,k?d:h);return function(){e&&e.removeEventListener(b,f,k?d:h);f=e=g=null}}function ka(){if(void 0!==H)return H;H=!1;try{var a={get capture(){H=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return H};function la(a,b){return I(a,"message",b,void 0)}function J(a,b,c){var d=c,e=I(a,b,function(a){try{d(a)}finally{d=null,e()}},void 0)};var K,L="Webkit webkit Moz moz ms O o".split(" ");function M(a,b){for(var c in b){var d=a,e=b[c],g;g=d.style;var f=c;if(2>f.length?0:0==f.lastIndexOf("--",0))g=f;else{K||(K=v());var k=K[f];if(!k){k=f;if(void 0===g[f]){var h=f.charAt(0).toUpperCase()+f.slice(1);b:{for(var l=0;l<L.length;l++){var m=L[l]+h;if(void 0!==g[m]){h=m;break b}}h=""}void 0!==g[h]&&(k=h)}K[f]=k}g=k}g&&(d.style[g]=e)}}function ma(a){var b=["backgroundColor","color"],c={};b.forEach(function(a){c[a]=null});M(a,c)};function N(a){var b=this;this.h=a;this.ca={ancestorOrigin:function(){var a=b.h.win.location.ancestorOrigins;return a?a[0]:""},fragmentParam:function(a,d){var c=d;u().assert(a,"The first argument to FRAGMENT_PARAM, the fragment string param is required");u().assert("string"==typeof a,"param should be a string");var g=r(b.h.win.location.originalHash);return void 0===g[a]?c:g[a]}}}N.prototype.get=function(){return this.ca};function O(a){this.G=a;this.D=[];this.A=0}O.prototype.add=function(a){this.D[this.A]=a;this.A=(this.A+1)%this.G};O.prototype.get=function(a){this.D.length>=this.G&&(a=(this.A+a)%this.G);return this.D[a]};var P=/[,.\s\u2022()]/;function Q(a){return"\u2019"==a||"\u2018"==a?"'":"\u201c"==a||"\u201d"==a?'"':a.toLowerCase()}
function R(a,b,c,d,e){if(c>=d)return null;a=a.document;var g=b.parentNode,f=b.wholeText;0<c&&g.insertBefore(a.createTextNode(f.substring(0,c)),b);var k=a.createElement("span");k.appendChild(a.createTextNode(f.substring(c,d)));g.insertBefore(k,b);e.push(k);var h=null;d<f.length&&(h=a.createTextNode(f.substring(d)),g.insertBefore(h,b));g.removeChild(b);return h}
function S(a,b){this.da=a;this.I=b;this.o=-1;this.m=null;if(b instanceof a.Text)this.o=0;else if(b instanceof a.Element){var c=(a.getComputedStyle(b)||v()).display;"none"!=c&&(b=b.firstChild,null!=b&&(this.m=new S(a,b)))}}S.prototype.next=function(){if(0<=this.o){var a;a:{for(a=this.I.wholeText;this.o<a.length;){a=this.o;this.o++;a={node:this.I,offset:a};break a}a=null}return a}for(;null!=this.m;){a=this.m.next();if(null!=a)return a;var b=this.m.I.nextSibling;this.m=null!=b?new S(this.da,b):null}return null};function na(a){a=r(a.win.location.hash).highlight;if(!a||102400<a.length)return null;var b=JSON.parse(a),c=b.s;if(!(c instanceof Array)||15<c.length)return null;var d=0;for(a=0;a<c.length;a++){var e=c[a];if("string"!=typeof e||!e)return null;d+=e.length;if(1500<d)return null}var g=!1;b.n&&(g=!0);return{sentences:c,skipRendering:g}}function T(a,b){this.h=a;this.B=F(a,"viewer");this.j=null;oa(this,b)}function U(a,b,c){var d=w({state:b}),e;for(e in c)d[e]=c[e];a.B.sendMessage("highlightState",d)}
function pa(a,b){var c=a.h.win;a:{var d=a.h.getBody();b=b.sentences;for(var d=new S(c,d),e=[],g=0;g<b.length;g++){for(var f=b[g],k=[],h=0;h<f.length;h++){var l=f[h];P.test(l)||k.push(Q(l))}if(f=k.join("")){k={};for(h=0;h<f.length;h++)k[f[h]]=f.length-1-h;for(var h=new O(f.length),l=-1,m=f.length-1;;){var q=d.next();if(null==q){b=null;break a}if(!(P.test(q.node.wholeText[q.offset])||(h.add(q),l++,l<m))){for(var q=!0,x=0;x<f.length;x++){var n=h.get(f.length-x-1),n=Q(n.node.wholeText[n.offset]);if(f[f.length-
1-x]!=n){q=!1;n=k[n];null==n&&(n=f.length);n-=x;1>n&&(n=1);m+=n;break}}if(q){f=h.get(f.length-1);e.push({start:h.get(0),end:{node:f.node,offset:f.offset+1}});break}}}}}b=0<e.length?e:null}if(b){d=[];e=null;for(g=0;g<b.length;g++)f=b[g],e&&e.end.node==f.start.node&&e.end.offset==f.start.offset?e.end=f.end:(e=f,d.push(f));b=d;d=[];for(e=0;e<b.length;e++)for(g=b[e],k=g.start,h=g.end,f=b,g=e;;){if(k.node==h.node){if(k=R(c,k.node,k.offset,h.offset,d))for(g+=1;g<f.length;g++){l=f[g];if(h.node!=l.start.node)break;
l.start.node=k;l.start.offset-=h.offset;if(h.node!=l.end.node)break;l.end.node=k;l.end.offset-=h.offset}break}a:for(l=!0,m=k.node;;){if(null==m){l=null;break a}if(l)(q=m.nextSibling)?(m=q,l=!1):m=m.parentNode;else{if(m instanceof c.Text){l=m;break a}m.firstChild?m=m.firstChild:l=!0}}R(c,k.node,k.offset,k.node.wholeText.length,d);if(!l)break;k={node:l,offset:0}}d&&0!=d.length&&(a.j=d)}}
function oa(a,b){if(a.h.win.document.querySelector('script[id="amp-access"]'))U(a,"has_amp_access");else if(pa(a,b),a.j){var c=qa(a);U(a,"found",w({scroll:c}));if(!b.skipRendering){for(b=0;b<a.j.length;b++){var d=a.j[b];d.style.backgroundColor="#ff0";d.style.color="#333"}var e=a.B.getVisibilityState();if("visible"==e)ra(a,c);else{1E3<c&&F(a.h,"viewport").setScrollTop(c-1E3);var g=!1;a.B.onVisibilityChanged(function(){g||"visible"!=a.B.getVisibilityState()||(ra(a,qa(a)),g=!0)})}J(a.h.getBody(),"click",
a.P.bind(a))}}else U(a,"not_found")}function qa(a){var b=a.j;if(!b)return 0;var c=F(a.h,"viewport"),d=Number.MAX_VALUE,e=0,g=c.getPaddingTop();for(a=0;a<b.length;a++){var f=c.getLayoutRect(b[a]),k=-g,h;if(0==k||0==f.width&&0==f.height)h=f;else{h=f.left+0;var k=f.top+k,l=f.width,f=f.height;h={left:h,top:k,width:l,height:f,bottom:k+f,right:h+l,x:h,y:k}}f=h.bottom;d=Math.min(d,h.top);e=Math.max(e,f)}if(d>=e)return 0;b=c.getHeight()-g;if(e-d>b)return d;b=(e+d-b)/2;return 0<b?b:0}
function ra(a,b){var c=a.h.win.document.createElement("div");M(c,{position:"absolute",top:Math.floor(b)+"px",bottom:"0",left:"0",right:"0","pointer-events":"none"});var d=a.h.getBody();d.appendChild(c);U(a,"auto_scroll");F(a.h,"viewport").animateScrollIntoView(c).then(function(){U(a,"shown");d.removeChild(c)})}T.prototype.setupMessaging=function(a){a.registerHandler("highlightDismiss",this.P.bind(this))};T.prototype.P=function(){if(this.j)for(var a=0;a<this.j.length;a++)ma(this.j[a])};var sa="altKey charCode ctrlKey detail eventPhase keyCode layerX layerY metaKey pageX pageY returnValue shiftKey timeStamp type which".split(" "),ta="clientX clientY force identifier pageX pageY radiusX radiusY screenX screenY".split(" ");function V(a,b){this.win=a;this.Z=b;this.K=!1;this.M=[];b.registerHandler("scrollLock",this.aa.bind(this));ua(this)}
function ua(a){var b=a.V.bind(a),c=a.win.document,d={capture:!1,passive:!a.K};a.M.push(I(c,"touchstart",b,d),I(c,"touchend",b,d),I(c,"touchmove",b,d))}function va(a){a.M.forEach(function(a){return a()});a.M.length=0}V.prototype.V=function(a){switch(a.type){case "touchstart":case "touchend":case "touchmove":if(a&&a.type){var b=wa(a,sa);a.touches&&(b.touches=xa(a.touches));a.changedTouches&&(b.changedTouches=xa(a.changedTouches));this.Z.sendRequest(a.type,b,!1)}this.K&&a.preventDefault()}};
function xa(a){for(var b=[],c=0;c<a.length;c++)b.push(wa(a[c],ta));return b}function wa(a,b){for(var c={},d=0;d<b.length;d++){var e=b[d];void 0!==a[e]&&(c[e]=a[e])}return c}V.prototype.aa=function(a,b,c){this.K=!!b;va(this);ua(this);return c?Promise.resolve({}):void 0};function ya(a){if("string"!=typeof a)return a;if("{"!=a.charAt(0))return null;try{return JSON.parse(a)}catch(b){return null}}function W(a,b,c){this.win=a;this.S=b;this.T=c}W.prototype.addEventListener=function(a,b){var c=this;this.win.addEventListener("message",function(a){a.origin==c.S&&a.source==c.T&&"__AMPHTML__"==a.data.app&&b(a)})};W.prototype.postMessage=function(a){this.T.postMessage(a,this.S)};W.prototype.start=function(){};
function X(a,b,c){this.win=a;this.J=b;this.Y=!!c;this.$=0;this.N={};this.H={};this.O=null;this.J.addEventListener("message",this.W.bind(this));this.J.start()}X.prototype.registerHandler=function(a,b){this.H[a]=b};X.prototype.unregisterHandler=function(a){delete this.H[a]};X.prototype.setDefaultHandler=function(a){this.O=a};
X.prototype.W=function(a){if(a=ya(a.data))if("q"==a.type)za(this,a);else if("s"==a.type){var b=a.requestid,c=this.N[b];c&&(delete this.N[b],a.error?(Aa(this,"amp-viewer-messaging: handleResponse_ error: ",a.error),c.reject(Error("Request "+a.name+" failed: "+a.error))):c.resolve(a.data))}};X.prototype.sendRequest=function(a,b,c){var d=this,e=++this.$,g=void 0;c&&(g=new Promise(function(a,b){d.N[e]={resolve:a,reject:b}}));Y(this,{app:"__AMPHTML__",requestid:e,type:"q",name:a,data:b,rsvp:c});return g};
function Ba(a,b,c,d){var e=Ca(d);Aa(a,"amp-viewer-messaging: sendResponseError_, Message name: "+c,e);Y(a,{app:"__AMPHTML__",requestid:b,type:"s",name:c,data:null,error:e})}function Y(a,b){a.J.postMessage(a.Y?JSON.stringify(b):b)}
function za(a,b){var c=a.H[b.name];c||(c=a.O);if(!c)throw c=Error("Cannot handle request because handshake is not yet confirmed!"),c.args=b.name,c;c=c(b.name,b.data,!!b.rsvp);if(b.rsvp){var d=b.requestid;if(!c)throw Ba(a,d,b.name,Error("no response")),Error("expected response but none given: "+b.name);c.then(function(c){Y(a,{app:"__AMPHTML__",requestid:d,type:"s",name:b.name,data:c})},function(c){Ba(a,d,b.name,c)})}}
function Aa(a,b,c){var d="amp-messaging-error-logger: "+b,e=" data: "+Ca(c),d=d+e;a.win.viewerState=d}function Ca(a){return a?a.message?a.message:String(a):"unknown error"};function Z(a){var b=this;this.win=a;this.R=this.l=!1;this.F=null;this.ba=new N(G(this.win.document));ia(this.win,function(){return b.ba.get()})}
Z.prototype.init=function(){var a=this,b=G(this.win.document),c=F(b,"viewer");this.l="1"==c.getParam("webview");this.R=c.hasCapability("handshakepoll");var d=c.getParam("origin")||"";if(!this.l&&!d)return Promise.resolve();if(this.l||this.R){var e=ja(this.win)?this.win.parent:null;return Da(this,e,d).then(function(e){return Ea(a,c,b,d,new X(a.win,e,a.l))})}if(e=na(b))this.F=new T(b,e);e=new W(this.win,d,this.win.parent);return Ea(this,c,b,d,new X(this.win,e,this.l))};
function Da(a,b,c){return new Promise(function(d){var e=la(a.win,function(g){var f=ya(g.data);if(f&&g.origin===c&&g.source===b&&"__AMPHTML__"==f.app&&"handshake-poll"==f.name){if(a.l&&(!g.ports||!g.ports.length))throw Error("Did not receive communication port from the Viewer!");g=g.ports&&0<g.ports.length?g.ports[0]:new W(a.win,c,a.win.parent);d(g);e()}})})}function Ea(a,b,c,d,e){var g=c.getUrl(),f=ha(g);return e.sendRequest("channelOpen",w({url:g,sourceUrl:f}),!0).then(function(){Fa(a,e,b,d)})}
function Fa(a,b,c,d){b.setDefaultHandler(function(a,b,d){return c.receiveMessage(a,b,d)});c.setMessageDeliverer(b.sendRequest.bind(b),d);J(a.win,"unload",a.X.bind(a,b));c.hasCapability("swipe")&&new V(a.win,b);null!=a.F&&a.F.setupMessaging(b)}Z.prototype.X=function(a){return a.sendRequest("unloaded",{},!0)};(function(a){(new Z(a.win)).init()})(self.AMP);
})});
//# sourceMappingURL=amp-viewer-integration-0.1.js.map

