!function(t){function e(){return o[Math.floor(Math.random()*o.length)]}function n(n,o){var s=this,a={startPosition:e(),image:"roy-head.png",link:"https://twitter.com/intent/tweet?text=Hi+@royboy789.+http%3A%2F%2Fhiroy.club%2F&hashtags=hiroy",onMove:!0};s.options=t.extend({},a,o),i=s.options.startPosition,delete s.options.startPosition,s.element=t('<div id="hi-roy"></div>').addClass(i).hide();var r=t('<a href="'+s.options.link+'"></a>'),h=t('<img src="'+s.options.image+'" />');r.append(h),s.element.append(r),h.on("load",function(){var o=h.clone().css({position:"absolute",left:"200%",top:"200%"}).appendTo(t("body"));s.height=o.height(),o.remove(),s.element.css(i,0-s.height),t.inArray(i,["top","bottom"])>=0?s.element.css("height",s.height):t.inArray(i,["left","right"])>=0&&s.element.css("width",s.height),n.append(s.element);var a={};a[i]=0,s.element.show().animate(a,800,function(){s.nextPosition=e();var n=new CustomEvent("hiRoyAfterMoveIn",{detail:{currentPosition:i,nextPosition:s.nextPosition}});document.body.dispatchEvent(n),s.options.onMove&&t(window).on("touchstart mousemove",function(t){s.move()})})})}var o=["top","right","bottom","left"],i="",s=!1,a=!1;t.extend(n.prototype,{get_position:function(){return i},disable:function(){s=!0},enable:function(){s=!1},disableMove:function(){a=!0},enableMove:function(){a=!1},destroy:function(){this.element.remove(),this.disable()},move:function(n){var r=this;if(s||a)return!1;a=!0,(void 0===n||-1==t.inArray(n,o))&&(void 0===r.nextPosition||-1==t.inArray(r.nextPosition,o))&&(r.nextPosition=e());var h={};h[i]=0-r.height,r.element.animate(h,800,function(){var t=new CustomEvent("hiRoyAfterMoveOut",{detail:{currentPosition:i,nextPosition:r.nextPosition}});document.body.dispatchEvent(t),r.element.removeAttr("style"),r.element.find("img").removeAttr("style"),r.element.css(r.nextPosition,0-r.height),r.element.removeClass(i).addClass(r.nextPosition);var n=Math.floor(81*Math.random()+10);switch(r.nextPosition){case"left":case"right":r.element.css("width",r.height),r.element.find("img").css({top:n+"%"});break;case"top":case"bottom":r.element.css("height",r.height),r.element.find("img").css({left:n+"%"})}var o={};o[r.nextPosition]=0,r.element.animate(o,800,function(){a=!1,i=r.nextPosition,r.nextPosition=e();var t=new CustomEvent("hiRoyAfterMoveIn",{detail:{currentPosition:i,nextPosition:r.nextPosition}});document.body.dispatchEvent(t)})})}}),t.fn.hiRoy=function(e){if(!t.data(this,"hi-roy")){var o=new n(this,e);return t.data(this,"hi-roy",o),o}}}(jQuery);