(function(){var f,h=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a}(this);function k(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return b}};var l=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.log=self.log||{user:null,dev:null,userForEmbed:null};var m=self.log;function n(a){this.K=a;this.A=this.F=0;this.m=Object.create(null)}n.prototype.has=function(a){return!!this.m[a]};n.prototype.get=function(a){var b=this.m[a];if(b)return b.access=++this.A,b.payload};
n.prototype.put=function(a,b){this.has(a)||this.F++;this.m[a]={payload:b,access:this.A};if(!(this.F<=this.K)){if(m.dev)a=m.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.m;var d=this.A+1,c,e;for(e in a){var g=a[e].access;g<d&&(d=g,c=e)}void 0!==c&&(delete a[c],this.F--)}};var p,t;
function u(a){var b;p||(p=self.document.createElement("a"),t=self.UrlCache||(self.UrlCache=new n(100)));var d=b?null:t,c=p;if(d&&d.has(a))a=d.get(a);else{c.href=a;c.protocol||(c.href=c.href);var e={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;d&&d.put(a,e);a=e}return a};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var v=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function w(a,b,d,c,e){return e?e:b?"\ufffd":c?a.slice(0,-1)+"\\"+a.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+a};function x(a){a||(a={debug:!1,windowContext:window});this.l={};this.j={};this.H=a.debug;this.o=this.L=this.M=!1;this.w=this.C=this.D=this.h=this.B=null;this.c=a.windowContext||window}f=x.prototype;
f.listen=function(a){var b=this;return(new Promise(function(d,c){b.o?c(Error("Already connected.")):b.M?c(Error("Already listening for connections.")):Array.isArray(a)?(b.D=b.O.bind(b,a,d,c),b.c.addEventListener("message",b.D)):c(Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",a))})).then(function(){b.send(x.Topics.CONNECT_HANDSHAKE,null);b.o=!0})};
f.O=function(a,b,d,c){var e=c.data,g=c,q=g.ports;a:{for(var g=u(g.origin).origin,r=0;r<a.length;r++)if(u(a[r]).origin===g){a=!0;break a}a=!1}a&&e&&e.topic===x.Topics.CONNECT_HANDSHAKE&&(this.c.removeEventListener("message",this.D),this.h=q[0],this.w=this.I.bind(this),this.h.addEventListener("message",this.w,!1),this.h.start(),b())};
f.connect=function(a,b){var d=this;return new Promise(function(c,e){a||e(Error("Provide a valid Window context to connect to."));b||e(Error("Provide an expected origin for the remote Window or provide the wildcard *."));d.o?e(Error("Already connected.")):d.L?e(Error("Already connecting.")):(d.B=new MessageChannel,d.h=d.B.port1,d.C=d.N.bind(d,d.h,b,c),d.h.addEventListener("message",d.C),d.h.start(),a.postMessage({topic:x.Topics.CONNECT_HANDSHAKE},"*"===b?"*":u(b).origin,[d.B.port2]))})};
f.N=function(a,b,d){this.o=!0;a.removeEventListener("message",this.C);this.w=this.I.bind(this);a.addEventListener("message",this.w,!1);d()};f.I=function(a){a=a.data;if(this.l[a.id]&&a.isReply){var b=this.l[a.id];delete this.l[a.id];var d=b.promiseResolver;b.message=a.data;d([a.data,this.J.bind(this,a.id,b.topic)])}else{var c=this.j[a.topic];if(c)for(var e=0;e<c.length;e++)(0,c[e])(a.data,this.J.bind(this,a.id,a.topic))}};f.on=function(a,b){this.j[a]?this.j[a].push(b):this.j[a]=[b]};
f.off=function(a,b){if(b){var d=this.j[a].indexOf(b);-1!==d&&this.j[a].splice(d,1)}else this.j[a]&&delete this.j[a]};f.J=function(a,b,d){var c=this,e={id:a,topic:b,data:d,isReply:!0};this.h.postMessage(e);return new Promise(function(a){c.l[e.id]={message:d,topic:b,promiseResolver:a}})};f.send=function(a,b){var d=this,c={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:a,data:b};this.h.postMessage(c);return new Promise(function(e){d.l[c.id]={message:b,topic:a,promiseResolver:e}})};
h.Object.defineProperties(x,{Topics:{configurable:!0,enumerable:!0,get:function(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}}});function y(a){this.H=a&&a.debug;this.c=a.windowContext||window;this.G=new x({debug:this.H,windowContext:this.c})}f=y.prototype;f.isCurrentDialogPopup=function(){return!!this.c.opener&&this.c.opener!==this.c};f.requestNotificationPermission=function(){var a=this;return new Promise(function(b,d){try{a.c.Notification.requestPermission(function(a){return b(a)})}catch(c){d(c)}})};
f.run=function(){z(this);A(this);for(var a=this.c.document.querySelectorAll("[permission]"),b=0;b<a.length;b++)B(a[b],!1);(a=this.c.document.querySelector("[permission="+String(this.c.Notification.permission).replace(v,w)+"]"))&&B(a,!0);a=this.c.document.querySelector("#preload");b=this.c.document.querySelector("#postload");a&&b&&(B(a,!1),B(b,!0));"denied"!==this.c.Notification.permission?C(this):D(this)};
function z(a){var b=a.c.document.querySelector("#close");b&&b.addEventListener("click",function(){a.closeDialog()})}f.closeDialog=function(){if(this.isCurrentDialogPopup())this.c.close();else{var a=this.c.fakeLocation||this.c.location;var b=a.search,d=Object.create(null);if(b)for(var c;c=l.exec(b);){var e=k(c[1],c[1]);c=c[2]?k(c[2],c[2]):"";d[e]=c}var g=d;if(!g["return"])throw Error("Missing required parameter.");var q=k(g["return"],void 0);this.redirectToUrl(q)}};
function D(a){navigator.permissions.query({name:"notifications"}).then(function(b){b.onchange=function(){A(a);switch(a.c.Notification.permission){case "default":case "granted":C(a)}}})}function A(a){a.c.localStorage.setItem("amp-web-push-notification-permission",a.c.Notification.permission)}function B(a,b){if(a){var d="invisible";b?a.classList.remove(d):a.classList.add(d)}}
function C(a){a.requestNotificationPermission().then(function(b){A(a);if(a.isCurrentDialogPopup())return a.G.connect(opener,"*"),a.G.send(x.Topics.NOTIFICATION_PERMISSION_STATE,b).then(function(b){(b=b[0])&&b.closeFrame&&a.closeDialog()});a.closeDialog()})}f.redirectToUrl=function(a){var b=u(a);!b||"http:"!==b.protocol&&"https:"!==b.protocol||(this.c.location.href=a)};window._ampWebPushPermissionDialog=new y({debug:!1});window._ampWebPushPermissionDialog.run();})();
//# sourceMappingURL=amp-web-push-permission-dialog.js.map

