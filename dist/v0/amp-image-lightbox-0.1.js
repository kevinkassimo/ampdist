(self.AMP=self.AMP||[]).push({n:"amp-image-lightbox",v:"1533591342461",f:(function(AMP,_){
var g;function l(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var n=self.log;function p(){if(!n.user)throw Error("failed to call initLogConstructor");return n.user}function q(){if(n.dev)return n.dev;throw Error("failed to call initLogConstructor");};function aa(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function ba(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function r(a,b){a=a.__AMP_TOP||a;return ca(a,b)}function da(a){var b=ea(a),b=ea(b),b=b.isSingleDoc()?b.win:b;return ca(b,"history")}function ea(a){return a.nodeType?r((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function ca(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function fa(a,b){for(var c,d=a;d&&d!==c;d=d.parentElement)if(b(d))return d;return null}function ga(a){var b="figure";if(a.closest)return a.closest(b);b=b.toUpperCase();return fa(a,function(a){return a.tagName==b})}function ha(a,b){var c;return(c="function"===typeof a.getElementsByTagName?a.getElementsByTagName(b):a.querySelectorAll(b))&&c[0]||null};function t(a){return!!(a.complete||"complete"==a.readyState||a.document&&"complete"==a.document.readyState)};var v,ia="Webkit webkit Moz moz ms O o".split(" ");function ja(a,b,c){var d;var e=a.style;if(!aa(b,"--")){v||(v=Object.create(null));var f=v[b];if(!f){f=b;if(void 0===e[b]){var h=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var k=0;k<ia.length;k++){var m=ia[k]+h;if(void 0!==e[m]){h=m;break b}}h=""}void 0!==e[h]&&(f=h)}v[b]=f}b=f}b&&(a.style[b]=d?c+d:c)}function w(a,b){for(var c in b)ja(a,c,b[c])};function x(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function y(a){return x(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};function z(){this.L=null}g=z.prototype;g.add=function(a){var b=this;this.L||(this.L=[]);this.L.push(a);return function(){b.remove(a)}};g.remove=function(a){this.L&&(a=this.L.indexOf(a),-1<a&&this.L.splice(a,1))};g.removeAll=function(){this.L&&(this.L.length=0)};g.fire=function(a){if(this.L)for(var b=this.L,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.L?this.L.length:0};function ka(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1};function A(a,b,c){var d=this;this.$a=r(a,"timer");this.gb=b;this.eb=c||0;this.ka=-1;this.Ka=0;this.Y=!1;this.bb=function(){return d.sa()}}A.prototype.isPending=function(){return-1!=this.ka};A.prototype.schedule=function(a){var b=a||this.eb;this.Y&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.Ka?(this.cancel(),this.Ka=c,this.ka=this.$a.delay(this.bb,b),!0):!1};A.prototype.sa=function(){this.ka=-1;this.Ka=0;this.Y=!0;this.gb();this.Y=!1};
A.prototype.cancel=function(){this.isPending()&&(this.$a.cancel(this.ka),this.ka=-1)};var la=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function ma(a){var b=a.getAttribute("srcset");if(b){a=[];for(var c;c=la.exec(b);){var d=c[1],e=void 0,f;if(c[2]){var h=c[3].toLowerCase();if("w"==h)e=parseInt(c[2],10);else if("x"==h)f=parseFloat(c[2]);else continue}else f=1;a.push({url:d,width:e,dpr:f})}return new B(a)}var k=p().assert(a.getAttribute("src"),'Either non-empty "srcset" or "src" attribute must be specified: %s',a);return new B([{url:k,width:void 0,dpr:1}])}
function B(a){p().assert(0<a.length,"Srcset must have at least one source");this.ma=a;for(var b=!1,c=!1,d=0;d<a.length;d++)var e=a[d],b=b||!!e.width,c=c||!!e.dpr;p().assert(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?na:oa);this.ab=b}
B.prototype.select=function(a,b){if(this.ab){b*=a;a=this.ma;for(var c=0,d=Infinity,e=Infinity,f=0;f<a.length;f++){var h=a[f].width,k=Math.abs(h-b);if(k<=1.1*d||1.2<b/e)c=f,d=k,e=h;else break}}else for(a=this.ma,c=0,d=Infinity,e=0;e<a.length;e++)if(f=Math.abs(a[e].dpr-b),f<=d)c=e,d=f;else break;b=c;return this.ma[b].url};B.prototype.getUrls=function(){return this.ma.map(function(a){return a.url})};
B.prototype.stringify=function(a){for(var b=[],c=this.ma,d=0;d<c.length;d++){var e=c[d],f=e.url;a&&(f=a(f));f=this.ab?f+(" "+e.width+"w"):f+(" "+e.dpr+"x");b.push(f)}return b.join(", ")};function na(a,b){p().assert(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function oa(a,b){p().assert(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};function pa(a,b,c){var d=Date.now();this.type=a;this.data=b;this.time=d;this.event=c}
function qa(a,b){this.T=a;this.w=[];this.da=[];this.O=[];this.A=[];this.o=null;this.mb=b;this.ya=!1;this.sa=new A(a.ownerDocument.defaultView,this.Ua.bind(this));this.Wa=new z;this.ia=Object.create(null);this.Sa=this.lb.bind(this);this.Qa=this.jb.bind(this);this.Ra=this.kb.bind(this);this.Pa=this.ib.bind(this);this.T.addEventListener("touchstart",this.Sa);this.T.addEventListener("touchend",this.Qa);this.T.addEventListener("touchmove",this.Ra);this.T.addEventListener("touchcancel",this.Pa);this.La=
!1}function ra(a){var b;b=void 0===b?!1:b;var c=a.__AMP_Gestures;c||(c=new qa(a,b),a.__AMP_Gestures=c);return c}g=qa.prototype;g.cleanup=function(){this.T.removeEventListener("touchstart",this.Sa);this.T.removeEventListener("touchend",this.Qa);this.T.removeEventListener("touchmove",this.Ra);this.T.removeEventListener("touchcancel",this.Pa);delete this.T.__AMP_Gestures;this.sa.cancel()};
g.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.ia[d];e||(this.w.push(c),e=new z,this.ia[d]=e);return e.add(b)};g.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.ia[b]){a.removeAll();a=ka(this.w,function(a){return a.getType()==b});if(0>a)return!1;this.w.splice(a,1);this.O.splice(a,1);this.A.splice(a,1);this.da.splice(a,1);delete this.ia[b];return!0}return!1};g.onPointerDown=function(a){return this.Wa.add(a)};
g.lb=function(a){var b=Date.now();this.ya=!1;this.Wa.fire(a);for(var c=0;c<this.w.length;c++)if(!this.O[c]&&(this.A[c]&&this.A[c]<b&&C(this,c),this.w[c].onTouchStart(a))){var d=c;this.da[d]=!0;this.A[d]=0}D(this,a)};g.kb=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)this.da[c]&&(this.A[c]&&this.A[c]<b?C(this,c):this.w[c].onTouchMove(a)||C(this,c));D(this,a)};
g.jb=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)this.da[c]&&(this.A[c]&&this.A[c]<b?C(this,c):(this.w[c].onTouchEnd(a),(!this.A[c]||this.A[c]<b)&&C(this,c)));D(this,a)};g.ib=function(a){for(var b=0;b<this.w.length;b++){var c=b;this.O[c]=0;C(this,c)}D(this,a)};function D(a,b){var c=!!a.o||a.ya;a.ya=!1;if(!c)for(var d=Date.now(),e=0;e<a.w.length;e++)if(a.O[e]||a.A[e]&&a.A[e]>=d){c=!0;break}c&&(b.stopPropagation(),a.mb||b.preventDefault());a.La&&(a.La=!1,a.Ua())}
g.Ua=function(){for(var a=Date.now(),b=-1,c=0;c<this.w.length;c++)if(!this.O[c])this.A[c]&&this.A[c]<a&&C(this,c);else if(-1==b||this.O[c]>this.O[b])b=c;if(-1!=b){for(var d=0,c=0;c<this.w.length;c++)!this.O[c]&&this.da[c]&&(d=Math.max(d,this.A[c]-a));if(2>d){for(var a=b,c=this.w[a],e=0;e<this.w.length;e++)if(e!=a){var f=e;this.O[f]=0;C(this,f)}this.O[a]=0;this.A[a]=0;this.o=c;c.acceptStart()}else this.sa.schedule(d)}};function C(a,b){a.da[b]=!1;a.A[b]=0;a.O[b]||a.w[b].acceptCancel()}
function E(a,b){this.pb=a;this.qa=b}g=E.prototype;g.getType=function(){return this.pb};g.signalReady=function(a){var b=this.qa;if(b.o)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.O[d]=c+a,b.A[d]=0);b.La=!0}};g.signalPending=function(a){var b=this.qa;if(b.o)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.A[d]=c+a)};g.signalEnd=function(){var a=this.qa;a.o==this&&(a.o=null,a.ya=!0)};
g.signalEmit=function(a,b){var c=this.qa.ia[this.getType()];c&&c.fire(new pa(this.getType(),a,b))};g.acceptStart=function(){};g.acceptCancel=function(){};g.onTouchStart=function(){return!1};g.onTouchMove=function(){return!1};g.onTouchEnd=function(){};function sa(){}var ta=Math.round(-16.67/Math.log(.95));function F(a,b,c){1>b&&(b=1);var d=a/b,e=.5+Math.min(b/33.34,.5);return d*e+c*(1-e)}function ua(a,b,c,d,e,f){var h;return(new va(a,b,c,d,e,f,h)).start()}function va(a,b,c,d,e,f,h){this.Z=h||r(self,"vsync");this.W=a;this.za=f;this.c=b;this.h=c;this.Da=d;this.Ea=e;this.F=this.D=0;a=new ba;this.ja=a.promise;this.Na=a.resolve;this.Ma=a.reject;this.fa=!1}g=va.prototype;
g.start=function(){this.fa=!0;if(.02>=Math.abs(this.Da)&&.02>=Math.abs(this.Ea))this.za(this.c,this.h),this.Aa(!0);else{this.D=this.Da;this.F=this.Ea;var a=this.nb.bind(this),b=this.Aa.bind(this,!0);this.Z.runAnimMutateSeries(this.W,a,5E3).then(b,b)}return this};g.halt=function(){this.fa&&this.Aa(!1)};g.then=function(a,b){return a||b?this.ja.then(a,b):this.ja};g.thenAlways=function(a){a=a||sa;return this.then(a,a)};
g.nb=function(a,b){if(!this.fa)return!1;this.c+=b*this.D;this.h+=b*this.F;if(!this.za(this.c,this.h))return!1;var c=Math.exp(-a/ta);this.D=this.Da*c;this.F=this.Ea*c;return.02<Math.abs(this.D)||.02<Math.abs(this.F)};g.Aa=function(a){this.fa&&(this.fa=!1,this.za(this.c,this.h),a?this.Na():this.Ma())};function G(a){E.call(this,"tap",a);this.h=this.c=this.j=this.m=0;this.Ya=null}l(G,E);G.prototype.onTouchStart=function(a){var b=a.touches;this.Ya=a.target;return b&&1==b.length?(this.m=b[0].clientX,this.j=b[0].clientY,!0):!1};G.prototype.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.c=a[0].clientX,this.h=a[0].clientY,a=8<=Math.abs(this.h-this.j),8<=Math.abs(this.c-this.m)||a)?!1:!0};G.prototype.onTouchEnd=function(){this.signalReady(0)};
G.prototype.acceptStart=function(){this.signalEmit({clientX:this.c,clientY:this.h,target:this.Ya},null);this.signalEnd()};function H(a){E.call(this,"doubletap",a);this.P=this.h=this.c=this.j=this.m=0;this.Va=null}l(H,E);g=H.prototype;g.onTouchStart=function(a){return 1<this.P?!1:(a=a.touches)&&1==a.length?(this.m=a[0].clientX,this.j=a[0].clientY,this.c=a[0].clientX,this.h=a[0].clientY,!0):!1};
g.onTouchMove=function(a){return(a=a.touches)&&1==a.length?(this.c=a[0].clientX,this.h=a[0].clientY,a=8<=Math.abs(this.h-this.j),8<=Math.abs(this.c-this.m)||a?(this.acceptCancel(),!1):!0):!1};g.onTouchEnd=function(a){this.P++;2>this.P?this.signalPending(300):(this.Va=a,this.signalReady(0))};g.acceptStart=function(){this.P=0;this.signalEmit({clientX:this.c,clientY:this.h},this.Va);this.signalEnd()};g.acceptCancel=function(){this.P=0};
function I(a,b,c,d){E.call(this,a,b);this.oa=c;this.wa=d;this.o=!1;this.F=this.D=this.V=this.R=this.ua=this.aa=this.$=this.h=this.c=this.j=this.m=0}l(I,E);g=I.prototype;g.onTouchStart=function(a){return(a=a.touches)&&1==a.length?(this.ua=Date.now(),this.m=a[0].clientX,this.j=a[0].clientY,!0):!1};
g.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length){var c=b[0],b=c.clientX,c=c.clientY;this.c=b;this.h=c;if(this.o)this.X(!1,!1,a);else if(a=Math.abs(b-this.m),b=Math.abs(c-this.j),this.oa&&this.wa)(8<=a||8<=b)&&this.signalReady(-10);else if(this.oa)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.wa)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};g.onTouchEnd=function(a){this.Ba(a)};
g.acceptStart=function(){this.o=!0;this.$=this.m;this.aa=this.j;this.V=this.ua;this.m=this.c;this.j=this.h;this.X(!0,!1,null)};g.acceptCancel=function(){this.o=!1};
g.X=function(a,b,c){this.R=Date.now();var d=this.R-this.V;if(!b&&4<d||b&&16<d)this.D=F(this.c-this.$,d,this.D),this.F=F(this.h-this.aa,d,this.F),this.D=1E-4<Math.abs(this.D)?this.D:0,this.F=1E-4<Math.abs(this.F)?this.F:0,this.$=this.c,this.aa=this.h,this.V=this.R;this.signalEmit({first:a,last:b,time:this.R,deltaX:this.oa?this.c-this.m:0,deltaY:this.wa?this.h-this.j:0,startX:this.m,startY:this.j,lastX:this.c,lastY:this.h,velocityX:this.oa?this.D:0,velocityY:this.wa?this.F:0},c)};
g.Ba=function(a){this.o&&(this.o=!1,this.X(!1,!0,a),this.signalEnd())};function J(a){I.call(this,"swipe-xy",a,!0,!0)}l(J,I);function K(a){E.call(this,"tapzoom",a);this.o=!1;this.F=this.D=this.V=this.R=this.aa=this.$=this.P=this.h=this.c=this.j=this.m=0}l(K,E);g=K.prototype;g.onTouchStart=function(a){return this.o?!1:(a=a.touches)&&1==a.length?(this.m=a[0].clientX,this.j=a[0].clientY,!0):!1};
g.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length){this.c=b[0].clientX;this.h=b[0].clientY;if(this.o)this.X(!1,!1,a);else if(a=8<=Math.abs(this.h-this.j),8<=Math.abs(this.c-this.m)||a){if(0==this.P)return this.acceptCancel(),!1;this.signalReady(0)}return!0}return!1};g.onTouchEnd=function(a){this.o?this.Ba(a):(this.P++,1==this.P?this.signalPending(400):this.acceptCancel())};g.acceptStart=function(){this.P=0;this.o=!0;this.X(!0,!1,null)};g.acceptCancel=function(){this.P=0;this.o=!1};
g.X=function(a,b,c){this.R=Date.now();a?this.D=this.F=0:2<this.R-this.V&&(this.D=F(this.c-this.$,this.R-this.V,this.D),this.F=F(this.h-this.aa,this.R-this.V,this.F));this.$=this.c;this.aa=this.h;this.V=this.R;this.signalEmit({first:a,last:b,centerClientX:this.m,centerClientY:this.j,deltaX:this.c-this.m,deltaY:this.h-this.j,velocityX:this.D,velocityY:this.F},c)};g.Ba=function(a){this.o&&(this.o=!1,this.X(!1,!0,a),this.signalEnd())};function L(a,b,c,d){var e=new wa(0,0,a,b,c,d,1,1);return e.solveYValueFromXValue.bind(e)}function wa(a,b,c,d,e,f,h,k){this.x0=a;this.y0=b;this.x1=c;this.y1=d;this.x2=e;this.y2=f;this.x3=h;this.y3=k}g=wa.prototype;g.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
g.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){var f=this.getPointX(c),k=(this.getPointX(c+b)-f)/b;if(Math.abs(f-a)<b)return c;if(Math.abs(k)<b)break;else f<a?d=c:e=c,c-=(f-a)/k}for(h=0;Math.abs(f-a)>b&&8>h;h++)f<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=this.getPointX(c);return c};
g.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};g.lerp=function(a,b,c){return a+c*(b-a)};
var xa=L(.25,.1,.25,1),ya=L(.42,0,1,1),za=L(0,0,.58,1),Aa=L(.42,0,.58,1),Ba={linear:function(a){return a},ease:xa,"ease-in":ya,"ease-out":za,"ease-in-out":Aa};function Ca(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return L(b[0],b[1],b[2],b[3])}return null}return Ba[a]}return a};function Da(){}function M(a,b){this.W=a;this.Z=b||r(self,"vsync");this.Ta=null;this.I=[]}function Ea(a,b,c){var d=Fa;return(new M(a)).setCurve(d).add(0,b,1).start(c)}M.prototype.setCurve=function(a){a&&(this.Ta=Ca(a));return this};M.prototype.add=function(a,b,c,d){this.I.push({delay:a,func:b,duration:c,curve:Ca(d)});return this};M.prototype.start=function(a){var b=new N(this.Z,this.W,this.I,this.Ta,a);return b};
function N(a,b,c,d,e){this.Z=a;this.W=b;this.I=[];for(b=0;b<c.length;b++){var f=c[b];this.I.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.fb=e;this.ua=Date.now();this.Y=!0;this.Xa={};e=new ba;this.ja=e.promise;this.Na=e.resolve;this.Ma=e.reject;this.Za=this.Z.createAnimTask(this.W,{mutate:this.ob.bind(this)});this.Z.canAnimate(this.W)?this.Za(this.Xa):(q().warn("Animation","cannot animate"),O(this,!1,0))}
N.prototype.then=function(a,b){return a||b?this.ja.then(a,b):this.ja};N.prototype.thenAlways=function(a){a=a||Da;return this.then(a,a)};N.prototype.halt=function(a){O(this,!1,a||0)};function O(a,b,c){if(a.Y){a.Y=!1;if(0!=c){1<a.I.length&&a.I.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.I.length;c++)a.I[c].func(1,!0);else for(var d=a.I.length-1;0<=d;d--)a.I[d].func(0,!1)}catch(e){q().error("Animation","completion failed: "+e,e),b=!1}}b?a.Na():a.Ma()}}
N.prototype.ob=function(){if(this.Y){for(var a=Date.now(),b=Math.min((a-this.ua)/this.fb,1),c=0;c<this.I.length;c++){var d=this.I[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.I.length;c++)if(d=this.I[c],d.started&&!d.completed)a:{var e,f;if(0<d.duration){if(e=f=Math.min((b-d.delay)/d.duration,1),d.curve&&1!=e)try{e=d.curve(f)}catch(h){q().error("Animation","step curve failed: "+h,h);O(this,!1,0);break a}}else e=f=1;1==f&&(d.completed=!0);try{d.func(e,d.completed)}catch(h){q().error("Animation",
"step mutate failed: "+h,h),O(this,!1,0)}}1==b?O(this,!0,0):this.Z.canAnimate(this.W)?this.Za(this.Xa):(q().warn("Animation","cancel animation"),O(this,!1,0))}};function Ga(a){var b;b=void 0===b?" ":b;return function(c,d){for(var e=[],f=0;f<a.length;f++){var h=(0,a[f])(c,d);"string"==typeof h&&e.push(h)}return e.join(b)}}function P(a,b){return function(c,d){for(var e in b)ja(a,e,b[e](c,d))}}function Q(a,b){return function(c){return a+(b-a)*c}}function Ha(a,b){return function(c){var d=a(c);"number"==typeof d&&(d+="px");if(!b)return"translate("+d+")";c=b(c);"number"==typeof c&&(c+="px");return"translate("+d+","+c+")"}}
function Ia(a){return function(b){return"scale("+a(b)+")"}};var Ja={"amp-img":!0,"amp-anim":!0},Ka=["aria-label","aria-describedby","aria-labelledby"],R=L(.4,0,.2,1),S=L(.4,0,.2,1),Fa=L(.4,0,.2,1.4);
function La(a,b,c){this.pa=a;this.win=b;this.hb=c;this.xa=a.element.ownerDocument.createElement("div");this.xa.classList.add("i-amphtml-image-lightbox-viewer");this.C=a.element.ownerDocument.createElement("img");this.C.classList.add("i-amphtml-image-lightbox-viewer-image");this.xa.appendChild(this.C);this.ta=null;this.ba=this.ca=0;this.B=x(0,0,0,0);this.M=x(0,0,0,0);this.Ha=this.ra=this.na=this.l=1;this.ha=2;this.Ga=this.Fa=this.Ja=this.Ia=this.G=this.H=this.j=this.m=0;this.U=null;Ma(this)}g=La.prototype;
g.getElement=function(){return this.xa};g.getImage=function(){return this.C};g.getViewerBox=function(){return this.B};g.getImageBox=function(){return this.M};g.getImageBoxWithOffset=function(){var a;if(0==this.H&&0==this.G)a=this.M;else{a=this.M;var b=this.H,c=this.G;a=0==b&&0==c||0==a.width&&0==a.height?a:x(a.left+b,a.top+c,a.width,a.height)}return a};
g.reset=function(){var a=this;this.C.setAttribute("src","");Ka.forEach(function(b){a.C.removeAttribute(b)});this.C.removeAttribute("aria-describedby");this.ta=null;this.M=x(0,0,0,0);this.ba=this.ca=0;this.na=this.l=this.ra=1;this.ha=2;this.Ga=this.Fa=this.Ja=this.Ia=this.G=this.H=this.j=this.m=0;this.U&&this.U.halt();this.U=null};function Na(a,b,c){c?(a.ca=c.naturalWidth||b.offsetWidth,a.ba=c.naturalHeight||b.offsetHeight):(a.ca=b.offsetWidth,a.ba=b.offsetHeight)}
g.init=function(a,b){var c=this;Na(this,a,b);this.ta=ma(a);a.getImpl().then(function(a){a.propagateAttributes(Ka,c.C)});b&&t(b)&&b.src&&this.C.setAttribute("src",b.src)};
g.measure=function(){this.B=y(this.xa.getBoundingClientRect());var a=this.ca/this.ba,b=Math.min(this.B.width/a,this.B.height),c=Math.min(this.B.height*a,this.B.width);16>=Math.abs(c-this.ca)&&16>=Math.abs(b-this.ba)&&(c=this.ca,b=this.ba);this.M=x(Math.round((this.B.width-c)/2),Math.round((this.B.height-b)/2),Math.round(c),Math.round(b));w(this.C,{top:this.M.top+"px",left:this.M.left+"px",width:this.M.width+"px",height:this.M.height+"px"});var d=this.B.width/this.B.height,e=Math.max(d/a,a/d);this.ha=
Math.max(2,e);this.na=this.l=1;this.j=this.G=this.m=this.H=0;T(this,this.l);U(this);return Oa(this)};function Oa(a){if(!a.ta)return Promise.resolve();a.ra=Math.max(a.ra,a.l);var b=a.ta.select(a.M.width*a.ra,a.pa.getDpr());return b==a.C.getAttribute("src")?Promise.resolve():r(a.win,"timer").promise(1).then(function(){a.C.setAttribute("src",b);return a.hb(a.C)})}
function Ma(a){var b=ra(a.C);b.onGesture(G,function(){a.pa.toggleViewMode()});b.onGesture(J,function(b){var c=b.data.deltaY,e=V(a,a.m+b.data.deltaX,!0),c=W(a,a.j+c,!0);X(a,a.l,e,c,!1);b.data.last&&Pa(a,b.data.velocityX,b.data.velocityY)});b.onPointerDown(function(){a.U&&a.U.halt()});b.onGesture(H,function(b){var c;c=1==a.l?a.ha:a.Ha;Qa(a,c,a.B.width/2-b.data.clientX,a.B.height/2-b.data.clientY,!0).then(function(){return Ra(a,0,0,0,0,0,0)})});b.onGesture(K,function(b){Sa(a,b.data.centerClientX,b.data.centerClientY,
b.data.deltaX,b.data.deltaY);b.data.last&&Ra(a,b.data.centerClientX,b.data.centerClientY,b.data.deltaX,b.data.deltaY,b.data.velocityY,b.data.velocityY)})}function Y(a,b,c,d){return Math.max(b-d,Math.min(c+d,a))}function V(a,b,c){return Y(b,a.Ia,a.Fa,c&&1<a.l?.25*a.B.width:0)}function W(a,b,c){return Y(b,a.Ja,a.Ga,c?.25*a.B.height:0)}
function T(a,b){var c=0,d=0,e=a.B.height-a.M.height*b;0<=e?d=c=0:(d=e/2,c=-d);var f=0,h=0;b=a.B.width-a.M.width*b;0<=b?h=f=0:(h=b/2,f=-h);a.Ia=h;a.Ja=d;a.Fa=f;a.Ga=c}function U(a){var b=a.C,c;c=a.H;var d=a.G;"number"==typeof c&&(c+="px");void 0===d?c="translate("+c+")":("number"==typeof d&&(d+="px"),c="translate("+c+", "+d+")");w(b,{transform:c+" "+("scale("+a.l+")")});1!=a.l&&a.pa.toggleViewMode(!0)}
function Pa(a,b,c){var d=a.G-a.j;1==a.l&&10<Math.abs(d)?a.pa.close():(a.U=ua(a.C,a.H,a.G,b,c,function(b,c){b=V(a,b,!0);c=W(a,c,!0);if(1>Math.abs(b-a.H)&&1>Math.abs(c-a.G))return!1;X(a,a.l,b,c,!1);return!0}),a.U.thenAlways(function(){a.U=null;return Ta(a)}))}function Sa(a,b,c,d,e){var f=Math.sqrt(d*d+e*e),h=Math.abs(e)>Math.abs(d)?Math.sign(e):Math.sign(-d);if(0!=h){var k=a.na*(1+h*f/100),m=a.B.width/2-b,u=a.B.height/2-c;d=Math.min(m,f/100*m);e=Math.min(u,f/100*u);Qa(a,k,d,e,!1)}}
function Qa(a,b,c,d,e){b=Y(b,a.Ha,a.ha,.25);if(b!=a.l)return T(a,b),c=V(a,a.m+c*b,!1),d=W(a,a.j+d*b,!1),X(a,b,c,d,e)}function Ra(a,b,c,d,e,f,h){d=0==f&&0==h?Promise.resolve():ua(a.C,d,e,f,h,function(d,e){Sa(a,b,c,d,e);return!0}).thenAlways();var k=a.l>a.na;return d.then(function(){return Ta(a)}).then(function(){k&&Oa(a)})}
function X(a,b,c,d,e){var f=b-a.l,h=c-a.H,k=d-a.G,h=Math.sqrt(h*h+k*k),m=0;if(e)var u=250,m=Math.min(u,Math.max(u*h*.01,u*Math.abs(f)));if(16<m&&e){var Va=Q(a.l,b),Wa=Q(a.H,c),Xa=Q(a.G,d);e=Ea(a.C,function(b){a.l=Va(b);a.H=Wa(b);a.G=Xa(b);U(a)},m).thenAlways(function(){a.l=b;a.H=c;a.G=d;U(a)})}else a.l=b,a.H=c,a.G=d,U(a),e=e?Promise.resolve():void 0;return e}
function Ta(a){var b=Y(a.l,a.Ha,a.ha,0);b!=a.l&&T(a,b);var c=V(a,a.H/a.l*b,!1),d=W(a,a.G/a.l*b,!1);return X(a,b,c,d,!0).then(function(){a.na=a.l;a.m=a.H;a.j=a.G})}function Z(a){a=AMP.BaseElement.call(this,a)||this;a.Ca=-1;a.ea=!1;a.ga=!1;a.la=null;a.J=null;a.va=null;a.K=null;a.N=null;a.S=null;a.Oa=a.cb.bind(a);return a}l(Z,AMP.BaseElement);
function Ua(a){if(!a.K){a.K=a.element.ownerDocument.createElement("div");a.K.classList.add("i-amphtml-image-lightbox-container");a.element.appendChild(a.K);a.N=new La(a,a.win,a.loadPromise.bind(a));a.K.appendChild(a.N.getElement());a.S=a.element.ownerDocument.createElement("div");a.S.setAttribute("id",a.element.getAttribute("id")+"-caption");a.S.classList.add("amp-image-lightbox-caption");a.S.classList.add("i-amphtml-image-lightbox-caption");a.K.appendChild(a.S);var b=a.element.ownerDocument.createElement("button"),
c=a.element.getAttribute("data-close-button-aria-label")||"Close the lightbox";b.textContent=c;b.classList.add("i-amphtml-screen-reader");b.tabIndex=-1;b.addEventListener("click",function(){a.close()});a.element.appendChild(b);var d=ra(a.element);a.element.addEventListener("click",function(b){a.ga||a.N.getImage().contains(b.target)||a.close()});d.onGesture(G,function(){a.ga||a.close()});d.onGesture(J,function(){})}}
Z.prototype.activate=function(a){var b=this;if(!this.ea){Ua(this);var c=a.caller;p().assert(c&&Ja[c.tagName.toLowerCase()],"Unsupported element: %s",c.tagName);this.ea=!0;Ya(this);Za(this,c);this.win.document.documentElement.addEventListener("keydown",this.Oa);this.getViewport().enterLightboxMode();$a(this);this.va=this.getViewport().onChanged(function(){b.ea&&(aa(r(b.win,"platform").getIosVersionString(),"10.3")?r(b.win,"timer").delay(function(){b.N.measure()},500):b.N.measure())});da(this.getAmpDoc()).push(this.close.bind(this)).then(function(a){b.Ca=
a})}};Z.prototype.cb=function(a){27==a.keyCode&&this.close()};Z.prototype.close=function(){if(this.ea&&(this.ga=this.ea=!1,ab(this),this.va&&(this.va(),this.va=null),this.getViewport().leaveLightboxMode(),-1!=this.Ca&&da(this.getAmpDoc()).pop(this.Ca),this.win.document.documentElement.removeEventListener("keydown",this.Oa),this.la))try{this.la.focus()}catch(a){}};Z.prototype.toggleViewMode=function(a){void 0!==a?this.K.classList.toggle("i-amphtml-image-lightbox-view-mode",a):this.K.classList.toggle("i-amphtml-image-lightbox-view-mode")};
function Za(a,b){a.la=b;a.J=ha(b,"img");a.N.init(a.la,a.J);var c=null,d=ga(b);d&&(c=ha(d,"figcaption"));if(!c)var e=b.getAttribute("aria-describedby"),c=a.element.ownerDocument.getElementById(e);if(c){b=a.S;for(var f=b.ownerDocument.createDocumentFragment(),h=c.firstChild;h;h=h.nextSibling)f.appendChild(h.cloneNode(!0));b.appendChild(f);a.N.getImage().setAttribute("aria-describedby",a.S.getAttribute("id"))}a.S.classList.toggle("i-amphtml-empty",!c)}
function Ya(a){a.N.reset();for(var b=a.S;b.firstChild;)b.removeChild(b.firstChild);a.la=null;a.J=null;a.toggleViewMode(!1)}
function $a(a){a.ga=!0;w(a.element,{opacity:0,display:""});a.N.measure();var b=new M(a.element);b.add(0,P(a.element,{opacity:Q(0,1)}),.6,R);var c=null;if(a.J&&t(a.J)&&a.J.src){c=a.element.ownerDocument.createElement("div");c.classList.add("i-amphtml-image-lightbox-trans");a.element.ownerDocument.body.appendChild(c);var d=y(a.J.getBoundingClientRect()),e=a.N.getImageBox(),f=a.J.cloneNode(!0);f.className="";w(f,{position:"absolute",top:d.top+"px",left:d.left+"px",width:d.width+"px",height:d.height+
"px",transformOrigin:"top left",willChange:"transform"});c.appendChild(f);a.J.classList.add("i-amphtml-ghost");var h=e.top-d.top,k=0!=d.width?e.width/d.width:1,m=Math.max(.2,Math.min(.8,Math.abs(h)/250*.8));b.add(0,P(f,{transform:Ga([Ha(Q(0,e.left-d.left),Q(0,h)),Ia(Q(1,k))])}),m,R);w(a.K,{opacity:0});b.add(.8,P(a.K,{opacity:Q(0,1)}),.1,R);b.add(.9,P(c,{opacity:Q(1,.01)}),.1,S)}b.start(500).thenAlways(function(){a.ga=!1;w(a.element,{opacity:""});w(a.K,{opacity:""});c&&a.element.ownerDocument.body.removeChild(c)})}
function ab(a){var b=a.N.getImage(),c=a.N.getImageBoxWithOffset(),d=new M(a.element),e=500;d.add(0,P(a.element,{opacity:Q(1,0)}),.9,S);var f=null;if(t(b)&&b.src&&a.J){f=a.element.ownerDocument.createElement("div");f.classList.add("i-amphtml-image-lightbox-trans");a.element.ownerDocument.body.appendChild(f);var h=y(a.J.getBoundingClientRect()),k=b.cloneNode(!0);w(k,{position:"absolute",top:c.top+"px",left:c.left+"px",width:c.width+"px",height:c.height+"px",transform:"",transformOrigin:"top left",willChange:"transform"});
f.appendChild(k);d.add(0,P(a.K,{opacity:Q(1,0)}),.1,S);var b=h.top-c.top,m=0!=c.width?h.width/c.width:1,u=P(k,{transform:Ga([Ha(Q(0,h.left-c.left),Q(0,b)),Ia(Q(1,m))])}),c=Math.max(.2,Math.min(.8,Math.abs(b)/250*.8));d.add(Math.min(.8-c,.2),function(b,c){u(b);c&&a.J.classList.remove("i-amphtml-ghost")},c,S);d.add(.8,P(f,{opacity:Q(1,.01)}),.2,S);e=Math.max(Math.min(Math.abs(b)/250*e,e),300)}d.start(e).thenAlways(function(){a.J&&a.J.classList.remove("i-amphtml-ghost");a.collapse();w(a.element,{opacity:""});
w(a.K,{opacity:""});f&&a.element.ownerDocument.body.removeChild(f);Ya(a)})}(function(a){a.registerElement("amp-image-lightbox",Z,"amp-image-lightbox{position:fixed!important;top:0!important;left:0!important;bottom:0!important;right:0!important;margin:0!important;padding:0!important;overflow:hidden!important;-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important;-ms-touch-action:none!important;touch-action:none!important;z-index:1000;background:rgba(0,0,0,0.95);color:#f2f2f2}.i-amphtml-image-lightbox-container{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.i-amphtml-image-lightbox-trans{pointer-events:none!important;position:fixed;z-index:1001;top:0;left:0;bottom:0;right:0}.i-amphtml-image-lightbox-caption{position:absolute!important;z-index:2;bottom:0!important;left:0!important;right:0!important}.i-amphtml-image-lightbox-caption.i-amphtml-empty,.i-amphtml-image-lightbox-view-mode .i-amphtml-image-lightbox-caption{visibility:hidden}.amp-image-lightbox-caption{background:rgba(0,0,0,0.5);max-height:25%;padding:8px}.i-amphtml-image-lightbox-viewer{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.i-amphtml-image-lightbox-viewer-image{position:absolute;z-index:1;display:block;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}\n/*# sourceURL=/extensions/amp-image-lightbox/0.1/amp-image-lightbox.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-image-lightbox-0.1.js.map

