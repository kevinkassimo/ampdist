(function(){self.log=self.log||{user:null,dev:null,userForEmbed:null};function g(a){new Promise(function(b){b(a())})};var h;function k(a,b,c){var d=void 0,e=a,w=c,f;f=function(a){try{return w(a)}catch(n){throw self.reportError(n),n;}};var y=l(),p=!1;d&&(p=d.capture);e.addEventListener(b,f,y?d:p)}function l(){if(void 0!==h)return h;h=!1;try{var a={get capture(){h=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return h};function m(a,b,c){k(a,b,c)};function q(a){var b;try{return JSON.parse(a)}catch(c){b&&b(c)}};function r(a){var b=!1,c=null,d=a;return function(a){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];b||(c=d.apply(self,e),b=!0,d=null);return c}};function t(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!a)throw Error(c.join(" "));return a}var u="pause play mute unmute fullscreenenter fullscreenexit showcontrols hidecontrols".split(" "),v="canplay load playing pause ended muted unmuted".split(" ");
function x(a){var b=this;this.B=!0;this.o=0;this.h={};this.c=a;this.j={};this.m=r(function(){z(b.c,function(a){var c=a.id;"number"===typeof c&&isFinite(c)&&b.h[c]?((0,b.h[c])(a.args),delete b.h[c]):"method"==a.event&&(a=a.method,a in b.j&&b.j[a].call())})});this.l=!1;this.w=r(function(){var a=q(b.c.name),d=a.canonicalUrl,e=a.sourceUrl;return{canonicalUrl:d,sourceUrl:e}})}x.prototype.getMetadata=function(){return this.w()};
x.prototype.method=function(a,b){t(-1<u.indexOf(a),"Invalid method "+a+".");var c="play"==a||"pause"==a?A(b):b;this.j[a]=c;this.m()};x.prototype.listenTo=function(a,b){switch(a.toLowerCase()){case "jwplayer":this.A(b);break;case "videojs":B(this,b);break;default:t(!1,"Invalid listener type "+a+".")}};
x.prototype.A=function(a){var b=this,c=arguments;["error","setupError"].forEach(function(d){a.on(d,function(){t.apply(null,[!1].concat(c));b.postEvent("error")})});["adSkipped","adComplete","adError"].forEach(function(c){a.on(c,function(){return b.postEvent("ad_end")})});a.on("adStarted",function(){return b.postEvent("ad_start")});var d={play:"playing",ready:"canplay",pause:"pause"};Object.keys(d).forEach(function(c){a.on(c,function(){return b.postEvent(d[c])})});a.on("volume",function(a){return C(b,
a.volume)});this.method("play",function(){return a.play()});this.method("pause",function(){return a.pause()});this.method("mute",function(){return a.setMute(!0)});this.method("unmute",function(){return a.setMute(!1)});this.method("showcontrols",function(){return a.setControls(!0)});this.method("hidecontrols",function(){return a.setControls(!1)});this.method("fullscreenenter",function(){return a.setFullscreen(!0)});this.method("fullscreenexit",function(){return a.setFullscreen(!1)})};
function B(a,b){t(a.c.videojs,"Video.JS not imported.");var c=r(function(){return a.c.videojs.getPlayer(b)});["canplay","playing","pause","ended"].forEach(function(c){m(b,c,function(){return a.postEvent(c)})});m(b,"volumechange",function(){return C(a,c().volume())});a.method("play",function(){return c().play()});a.method("pause",function(){return c().pause()});a.method("mute",function(){return c().muted(!0)});a.method("unmute",function(){return c().muted(!1)});a.method("showcontrols",function(){return c().controls(!0)});
a.method("hidecontrols",function(){return c().controls(!1)});a.method("fullscreenenter",function(){return c().requestFullscreen()});a.method("fullscreenexit",function(){return c().exitFullscreen()})}function C(a,b){.01>b?(a.l=!0,a.postEvent("muted")):a.l&&(a.l=!1,a.postEvent("unmuted"))}function A(a){return function(){try{g(function(){return a()})}catch(b){}}}x.prototype.postEvent=function(a){t(-1<v.indexOf(a),"Invalid event "+a);D(this,{event:a})};
function D(a,b,c){var d=a.o++,e=Object.assign({id:d},b);a.c.parent&&a.c.parent.postMessage(e,"*");c&&(a.h[d]=c)}x.prototype.getIntersection=function(a){this.m();D(this,{method:"getIntersection"},a)};function z(a,b){m(a,"message",function(a){return b(q(a.data))})}(function(a){a.reportError=console.error.bind(console);var b=new x(a),c=a.AmpVideoIframe=a.AmpVideoIframe||[];c.push=function(a){return a(b)};c.forEach(c.push)})(self);})();
//# sourceMappingURL=video-iframe-integration-v0.js.map
