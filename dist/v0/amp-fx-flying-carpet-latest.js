(self.AMP=self.AMP||[]).push({n:"amp-fx-flying-carpet",v:"1533591342461",f:(function(AMP,_){
var g;function h(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var l=self.log;function m(){if(!l.user)throw Error("failed to call initLogConstructor");return l.user};var n;function p(a,b){var c=void 0,d=a,e=b,f;f=function(a){try{return e(a)}catch(r){throw self.reportError(r),r;}};var k=q(),t=!1;c&&(t=c.capture);d.addEventListener("amp:built",f,k?c:t)}function q(){if(void 0!==n)return n;n=!1;try{var a={get capture(){n=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return n};function u(a,b){p(a,b)};var v,w="Webkit webkit Moz moz ms O o".split(" ");function x(a){a=AMP.BaseElement.call(this,a)||this;a.c=[];a.h=0;a.j=null;a.l=!1;return a}h(x,AMP.BaseElement);g=x.prototype;g.isLayoutSupported=function(a){return"fixed-height"==a};
g.buildCallback=function(){var a=this,b=this.element.ownerDocument,c=b.createElement("div");this.c=this.getRealChildren();this.j=c;var d=this.getRealChildNodes();this.h=y(d).length;this.c.forEach(function(b){return a.setAsOwner(b)});var e=b.createElement("div");e.setAttribute("class","i-amphtml-fx-flying-carpet-clip");c.setAttribute("class","i-amphtml-fx-flying-carpet-container");d.forEach(function(a){return c.appendChild(a)});e.appendChild(c);this.element.appendChild(e);this.getViewport().addToFixedLayer(c)};
g.onMeasureChanged=function(){var a=this,b=this.getLayoutWidth();this.mutateElement(function(){var c=a.j,d;d=c.style;v||(v=Object.create(null));var e=v.width;if(!e){e="width";if(void 0===d.width){var f;b:{for(f=0;f<w.length;f++){var k=w[f]+"Width";if(void 0!==d[k]){f=k;break b}}f=""}void 0!==d[f]&&(e=f)}v.width=e}d=e;d&&(c.style[d]=b+"px")});this.l&&(this.scheduleLayout(this.c),u(this.element,this.m.bind(this)))};g.viewportCallback=function(a){this.updateInViewport(this.c,a)};
g.layoutCallback=function(){try{var a=this.element.getLayoutBox(),b=this.getViewport(),c=b.getHeight(),d=b.getScrollHeight(),b=.75*c,c=d-.95*c;m().assert(a.top>=b,"<amp-fx-flying-carpet> elements must be positioned after the 75% of first viewport: %s Current position: %s. Min: %s",this.element,a.top,b);m().assert(a.top<=c,"<amp-fx-flying-carpet> elements must be positioned before the last viewport: %s Current position: %s. Max: %s",this.element,a.top,c)}catch(e){throw this.collapse(),e;}this.scheduleLayout(this.c);
a=this.m.bind(this);p(this.element,a);this.l=!0;return Promise.resolve()};g.m=function(a){a=a.target;a.getOwner()===this.element&&this.scheduleLayout(a)};g.collapsedCallback=function(a){a=this.c.indexOf(a);if(-1<a&&(this.c.splice(a,1),this.h--,0==this.h))return this.attemptCollapse().catch(function(){})};function y(a){return a.filter(function(a){return 1===a.nodeType?!0:3===a.nodeType?/\S/.test(a.textContent):!1})}(function(a){a.registerElement("amp-fx-flying-carpet",x,"amp-fx-flying-carpet{position:relative!important;box-sizing:border-box!important}amp-fx-flying-carpet>.i-amphtml-fx-flying-carpet-clip{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:0!important;margin:0!important;padding:0!important;clip:rect(0,auto,auto,0)!important;-webkit-clip-path:polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important;clip-path:polygon(0px 0px,100% 0px,100% 100%,0px 100%)!important}amp-fx-flying-carpet>.i-amphtml-fx-flying-carpet-clip>.i-amphtml-fx-flying-carpet-container{position:fixed!important;top:0!important;width:100%;height:100%;-webkit-transform:translateZ(0)!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.i-amphtml-fx-flying-carpet-container>.i-amphtml-layout-fixed-height,.i-amphtml-fx-flying-carpet-container>.i-amphtml-layout-responsive{-ms-flex-item-align:stretch;align-self:stretch}\n/*# sourceURL=/extensions/amp-fx-flying-carpet/0.1/amp-fx-flying-carpet.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-fx-flying-carpet-0.1.js.map
