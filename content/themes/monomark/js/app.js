(function(){var i,t,e,s,r,n,o,a,d,l,_,h;$("html").length>0&&(n=$("header"),a=$(".header-info"),e=$(".royalSlider"),o=n.height(),s=$(".rsImg").height(),a.css("margin-top",-o),e.css("height",s),$(window).on("resize",function(){return o=n.height(),s=$(".rsImg").height(),a.css("margin-top",-o),e.css("height",s)})),function(){var i,t;i=this.jQuery,t=i(window),i.fn.stick_in_parent=function(e){var s,r,n,o,a,d,l;for(null==e&&(e={}),o=e.sticky_class,s=e.inner_scrolling,n=e.parent,r=e.offset_top,null==r&&(r=0),null==n&&(n=void 0),null==s&&(s=!0),null==o&&(o="is_stuck"),a=function(e,a,d,l,_,h,c){var u,f,g,m,p,v,S,y,w,b;if(!e.data("sticky_kit")){if(e.data("sticky_kit",!0),v=e.parent(),null!=n&&(v=v.closest(n)),!v.length)throw"failed to find stick parent";if(u=g=!1,w=i("<div />"),w.css("position",e.css("position")),S=function(){var i,t;return i=parseInt(v.css("border-top-width"),10),t=parseInt(v.css("padding-top"),10),a=parseInt(v.css("padding-bottom"),10),d=v.offset().top+i+t,l=v.height(),i=g?(g=!1,u=!1,e.insertAfter(w).css({position:"",top:"",width:"",bottom:""}),w.detach(),!0):void 0,_=e.offset().top-parseInt(e.css("margin-top"),10)-r,h=e.outerHeight(!0),c=e.css("float"),w.css({width:e.outerWidth(!0),height:h,display:e.css("display"),"vertical-align":e.css("vertical-align"),"float":c}),i?b():void 0},S(),h!==l)return m=void 0,p=r,b=function(){var i,n,f,S;return f=t.scrollTop(),null!=m&&(n=f-m),m=f,g?(S=f+h+p>l+d,u&&!S&&(u=!1,e.css({position:"fixed",bottom:"",top:p}).trigger("sticky_kit:unbottom")),_>f&&(g=!1,p=r,"left"!==c&&"right"!==c||e.insertAfter(w),w.detach(),i={position:"",width:"",top:""},e.css(i).removeClass(o).trigger("sticky_kit:unstick")),s&&(i=t.height(),h>i&&!u&&(p-=n,p=Math.max(i-h,p),p=Math.min(r,p),g&&e.css({top:p+"px"})))):f>_&&(g=!0,i={position:"fixed",top:p},i.width="border-box"===e.css("box-sizing")?e.outerWidth()+"px":e.width()+"px",e.css(i).addClass(o).after(w),"left"!==c&&"right"!==c||w.append(e),e.trigger("sticky_kit:stick")),g&&(null==S&&(S=f+h+p>l+d),!u&&S)?(u=!0,"static"===v.css("position")&&v.css({position:"relative"}),e.css({position:"absolute",bottom:a,top:"auto"}).trigger("sticky_kit:bottom")):void 0},y=function(){return S(),b()},f=function(){return t.off("scroll",b),i(document.body).off("sticky_kit:recalc",y),e.off("sticky_kit:detach",f),e.removeData("sticky_kit"),e.css({position:"",bottom:"",top:""}),v.position("position",""),g?(e.insertAfter(w).removeClass(o),w.remove()):void 0},t.on("touchmove",b),t.on("scroll",b),t.on("resize",y),i(document.body).on("sticky_kit:recalc",y),e.on("sticky_kit:detach",f),setTimeout(b,0)}},d=0,l=this.length;l>d;d++)e=this[d],a(i(e));return this}}.call(this),$("html").length>0&&(n=$("header"),n.stick_in_parent()),$("nav").length>0&&(r=$(".hamburger"),i=$(".closer"),_=$("nav"),n=$("header"),t=$("#container"),r.click(function(){return t.prepend("<div class='overlay'></div>"),n.addClass("menu-active"),_.addClass("menu-active")}),i.click(function(){var i;return i=$(".overlay"),i.remove(),n.removeClass("menu-active"),_.removeClass("menu-active")}),t.click(function(){var i;return i=$(".overlay"),i.remove(),n.removeClass("menu-active"),_.removeClass("menu-active")})),$(".hamburger").length>0&&(d=$(".header-info"),r=$(".hamburger"),l=d.height(),$(document).scroll(function(){return $(document).scrollTop()>=l+30?r.addClass("show"):r.removeClass("show")})),function(i){function t(t,e){var s,r=this,n=window.navigator,o=n.userAgent.toLowerCase();r.uid=i.rsModules.uid++,r.ns=".rs"+r.uid;var a=document.createElement("div").style,d=["webkit","Moz","ms","O"],l="",_=0,h;for(s=0;s<d.length;s++)h=d[s],!l&&h+"Transform"in a&&(l=h),h=h.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[h+"RequestAnimationFrame"],window.cancelAnimationFrame=window[h+"CancelAnimationFrame"]||window[h+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||(window.requestAnimationFrame=function(i,t){var e=(new Date).getTime(),s=Math.max(0,16-(e-_)),r=window.setTimeout(function(){i(e+s)},s);return _=e+s,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(i){clearTimeout(i)}),r.isIPAD=o.match(/(ipad)/),r.isIOS=r.isIPAD||o.match(/(iphone|ipod)/),s=function(i){return i=/(chrome)[ \/]([\w.]+)/.exec(i)||/(webkit)[ \/]([\w.]+)/.exec(i)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(i)||/(msie) ([\w.]+)/.exec(i)||0>i.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(i)||[],{browser:i[1]||"",version:i[2]||"0"}}(o),d={},s.browser&&(d[s.browser]=!0,d.version=s.version),d.chrome&&(d.webkit=!0),r._a=d,r.isAndroid=-1<o.indexOf("android"),r.slider=i(t),r.ev=i(r),r._b=i(document),r.st=i.extend({},i.fn.royalSlider.defaults,e),r._c=r.st.transitionSpeed,r._d=0,!r.st.allowCSS3||d.webkit&&!r.st.allowCSS3OnWebkit||(s=l+(l?"T":"t"),r._e=s+"ransform"in a&&s+"ransition"in a,r._e&&(r._f=l+(l?"P":"p")+"erspective"in a)),l=l.toLowerCase(),r._g="-"+l+"-",r._h="vertical"===r.st.slidesOrientation?!1:!0,r._i=r._h?"left":"top",r._j=r._h?"width":"height",r._k=-1,r._l="fade"===r.st.transitionType?!1:!0,r._l||(r.st.sliderDrag=!1,r._m=10),r._n="z-index:0; display:none; opacity:0;",r._o=0,r._p=0,r._q=0,i.each(i.rsModules,function(i,t){"uid"!==i&&t.call(r)}),r.slides=[],r._r=0,(r.st.slides?i(r.st.slides):r.slider.children().detach()).each(function(){r._s(this,!0)}),r.st.randomizeSlides&&r.slides.sort(function(){return.5-Math.random()}),r.numSlides=r.slides.length,r._t(),r.st.startSlideId?r.st.startSlideId>r.numSlides-1&&(r.st.startSlideId=r.numSlides-1):r.st.startSlideId=0,r._o=r.staticSlideId=r.currSlideId=r._u=r.st.startSlideId,r.currSlide=r.slides[r.currSlideId],r._v=0,r.pointerMultitouch=!1,r.slider.addClass((r._h?"rsHor":"rsVer")+(r._l?"":" rsFade")),a='<div class="rsOverflow"><div class="rsContainer">',r.slidesSpacing=r.st.slidesSpacing,r._w=(r._h?r.slider.width():r.slider.height())+r.st.slidesSpacing,r._x=Boolean(0<r._y),1>=r.numSlides&&(r._z=!1),r._a1=r._z&&r._l?2===r.numSlides?1:2:0,r._b1=6>r.numSlides?r.numSlides:6,r._c1=0,r._d1=0,r.slidesJQ=[];for(s=0;s<r.numSlides;s++)r.slidesJQ.push(i('<div style="'+(r._l?"":s!==r.currSlideId?r._n:"z-index:0;")+'" class="rsSlide "></div>'));r._e1=a=i(a+"</div></div>");var c=r.ns,l=function(i,t,e,s,n){r._j1=i+t+c,r._k1=i+e+c,r._l1=i+s+c,n&&(r._m1=i+n+c)};s=n.pointerEnabled,r.pointerEnabled=s||n.msPointerEnabled,r.pointerEnabled?(r.hasTouch=!1,r._n1=.2,r.pointerMultitouch=Boolean(1<n[(s?"m":"msM")+"axTouchPoints"]),s?l("pointer","down","move","up","cancel"):l("MSPointer","Down","Move","Up","Cancel")):(r.isIOS?r._j1=r._k1=r._l1=r._m1="":l("mouse","down","move","up"),"ontouchstart"in window||"createTouch"in document?(r.hasTouch=!0,r._j1+=" touchstart"+c,r._k1+=" touchmove"+c,r._l1+=" touchend"+c,r._m1+=" touchcancel"+c,r._n1=.5,r.st.sliderTouch&&(r._f1=!0)):(r.hasTouch=!1,r._n1=.2)),r.st.sliderDrag&&(r._f1=!0,d.msie||d.opera?r._g1=r._h1="move":d.mozilla?(r._g1="-moz-grab",r._h1="-moz-grabbing"):d.webkit&&-1!=n.platform.indexOf("Mac")&&(r._g1="-webkit-grab",r._h1="-webkit-grabbing"),r._i1()),r.slider.html(a),r._o1=r.st.controlsInside?r._e1:r.slider,r._p1=r._e1.children(".rsContainer"),r.pointerEnabled&&r._p1.css((s?"":"-ms-")+"touch-action",r._h?"pan-y":"pan-x"),r._q1=i('<div class="rsPreloader"></div>'),n=r._p1.children(".rsSlide"),r._r1=r.slidesJQ[r.currSlideId],r._s1=0,r._e?(r._t1="transition-property",r._u1="transition-duration",r._v1="transition-timing-function",r._w1=r._x1=r._g+"transform",r._f?(d.webkit&&!d.chrome&&r.slider.addClass("rsWebkit3d"),r._y1="translate3d(",r._z1="px, ",r._a2="px, 0px)"):(r._y1="translate(",r._z1="px, ",r._a2="px)"),r._l?r._p1[r._g+r._t1]=r._g+"transform":(d={},d[r._g+r._t1]="opacity",d[r._g+r._u1]=r.st.transitionSpeed+"ms",d[r._g+r._v1]=r.st.css3easeInOut,n.css(d))):(r._x1="left",r._w1="top");var u;i(window).on("resize"+r.ns,function(){u&&clearTimeout(u),u=setTimeout(function(){r.updateSliderSize()},50)}),r.ev.trigger("rsAfterPropsSetup"),r.updateSliderSize(),r.st.keyboardNavEnabled&&r._b2(),r.st.arrowsNavHideOnTouch&&(r.hasTouch||r.pointerMultitouch)&&(r.st.arrowsNav=!1),r.st.arrowsNav&&(n=r._o1,i('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(n),r._c2=n.children(".rsArrowLeft").click(function(i){i.preventDefault(),r.prev()}),r._d2=n.children(".rsArrowRight").click(function(i){i.preventDefault(),r.next()}),r.st.arrowsNavAutoHide&&!r.hasTouch&&(r._c2.addClass("rsHidden"),r._d2.addClass("rsHidden"),n.one("mousemove.arrowshover",function(){r._c2.removeClass("rsHidden"),r._d2.removeClass("rsHidden")}),n.hover(function(){r._e2||(r._c2.removeClass("rsHidden"),r._d2.removeClass("rsHidden"))},function(){r._e2||(r._c2.addClass("rsHidden"),r._d2.addClass("rsHidden"))})),r.ev.on("rsOnUpdateNav",function(){r._f2()}),r._f2()),r.hasTouch&&r.st.sliderTouch||!r.hasTouch&&r.st.sliderDrag?r._p1.on(r._j1,function(i){r._g2(i)}):r.dragSuccess=!1;var f=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];r._p1.click(function(t){if(!r.dragSuccess){var e=i(t.target).attr("class");if(-1!==i.inArray(e,f)&&r.toggleVideo())return!1;if(r.st.navigateByClick&&!r._h2){if(i(t.target).closest(".rsNoDrag",r._r1).length)return!0;r._i2(t)}r.ev.trigger("rsSlideClick",t)}}).on("click.rs","a",function(i){return r.dragSuccess?!1:(r._h2=!0,void setTimeout(function(){r._h2=!1},3))}),r.ev.trigger("rsAfterInit")}i.rsModules||(i.rsModules={uid:0}),t.prototype={constructor:t,_i2:function(i){i=i[this._h?"pageX":"pageY"]-this._j2,i>=this._q?this.next():0>i&&this.prev()},_t:function(){var i;i=this.st.numImagesToPreload,(this._z=this.st.loop)&&(2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1)),this._z&&i>0&&(4>=this.numSlides?i=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(i=Math.floor((this.numSlides-1)/2))),this._y=i},_s:function(t,e){function s(i,t){if(o.images.push(t?i.attr(t):i.text()),d){d=!1,o.caption="src"===t?i.attr("alt"):i.contents(),o.image=o.images[0],o.videoURL=i.attr("data-rsVideo");var e=i.attr("data-rsw"),s=i.attr("data-rsh");"undefined"!=typeof e&&!1!==e&&"undefined"!=typeof s&&!1!==s?(o.iW=parseInt(e,10),o.iH=parseInt(s,10)):r.st.imgWidth&&r.st.imgHeight&&(o.iW=r.st.imgWidth,o.iH=r.st.imgHeight)}}var r=this,n,o={},a,d=!0;return t=i(t),r._k2=t,r.ev.trigger("rsBeforeParseNode",[t,o]),o.stopParsing?void 0:(t=r._k2,o.id=r._r,o.contentAdded=!1,r._r++,o.images=[],o.isBig=!1,o.hasCover||(t.hasClass("rsImg")?(a=t,n=!0):(a=t.find(".rsImg"),a.length&&(n=!0)),n?(o.bigImage=a.eq(0).attr("data-rsBigImg"),a.each(function(){var t=i(this);t.is("a")?s(t,"href"):t.is("img")?s(t,"src"):s(t)})):t.is("img")&&(t.addClass("rsImg rsMainSlideImage"),s(t,"src"))),a=t.find(".rsCaption"),a.length&&(o.caption=a.remove()),o.content=t,r.ev.trigger("rsAfterParseNode",[t,o]),e&&r.slides.push(o),0===o.images.length&&(o.isLoaded=!0,o.isRendered=!1,o.isLoading=!1,o.images=null),o)},_b2:function(){var i=this,t,e,s=function(t){37===t?i.prev():39===t&&i.next()};i._b.on("keydown"+i.ns,function(r){i._l2||(e=r.keyCode,37!==e&&39!==e||t||(r.preventDefault(),s(e),t=setInterval(function(){s(e)},700)))}).on("keyup"+i.ns,function(i){t&&(clearInterval(t),t=null)})},goTo:function(i,t){i!==this.currSlideId&&this._m2(i,this.st.transitionSpeed,!0,!t)},destroy:function(t){this.ev.trigger("rsBeforeDestroy"),this._b.off("keydown"+this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1),this._p1.off(this._j1+" click"),this.slider.data("royalSlider",null),i.removeData(this.slider,"royalSlider"),i(window).off("resize"+this.ns),this.loadingTimeout&&clearTimeout(this.loadingTimeout),t&&this.slider.remove(),this.ev=this.slider=this.slides=null},_n2:function(t,e){function s(e,s,o){e.isAdded?(r(s,e),n(s,e)):(o||(o=a.slidesJQ[s]),e.holder?o=e.holder:(o=a.slidesJQ[s]=i(o),e.holder=o),e.appendOnLoaded=!1,n(s,e,o),r(s,e),a._p2(e,o,t),e.isAdded=!0)}function r(i,e){e.contentAdded||(a.setItemHtml(e,t),t||(e.contentAdded=!0))}function n(i,t,e){a._l&&(e||(e=a.slidesJQ[i]),e.css(a._i,(i+a._d1+u)*a._w))}function o(i){if(_){if(i>h-1)return o(i-h);if(0>i)return o(h+i)}return i}var a=this,d,l,_=a._z,h=a.numSlides;if(!isNaN(e))return o(e);var c=a.currSlideId,u,f=t?Math.abs(a._o2-a.currSlideId)>=a.numSlides-1?0:1:a._y,g=Math.min(2,f),m=!1,p=!1,v;for(l=c;c+1+g>l;l++)if(v=o(l),(d=a.slides[v])&&(!d.isAdded||!d.positionSet)){m=!0;break}for(l=c-1;l>c-1-g;l--)if(v=o(l),(d=a.slides[v])&&(!d.isAdded||!d.positionSet)){p=!0;break}if(m)for(l=c;c+f+1>l;l++)v=o(l),u=Math.floor((a._u-(c-l))/a.numSlides)*a.numSlides,(d=a.slides[v])&&s(d,v);if(p)for(l=c-1;l>c-1-f;l--)v=o(l),u=Math.floor((a._u-(c-l))/h)*h,(d=a.slides[v])&&s(d,v);if(!t)for(g=o(c-f),c=o(c+f),f=g>c?0:g,l=0;h>l;l++)g>c&&l>g-1||!(f>l||l>c)||(d=a.slides[l])&&d.holder&&(d.holder.detach(),d.isAdded=!1)},setItemHtml:function(t,e){var s=this,r=function(){if(t.images){if(!t.isLoading){var e,r;if(t.content.hasClass("rsImg")?(e=t.content,r=!0):e=t.content.find(".rsImg:not(img)"),e&&!e.is("img")&&e.each(function(){var e=i(this),s='<img class="rsImg" src="'+(e.is("a")?e.attr("href"):e.text())+'" />';r?t.content=i(s):e.replaceWith(s)}),e=r?t.content:t.content.find("img.rsImg"),l(),e.eq(0).addClass("rsMainSlideImage"),t.iW&&t.iH&&(t.isLoaded||s._q2(t),a()),t.isLoading=!0,t.isBig)i("<img />").on("load.rs error.rs",function(t){i(this).off("load.rs error.rs"),n([this],!0)}).attr("src",t.image);else{t.loaded=[],t.numStartedLoad=0,e=function(e){i(this).off("load.rs error.rs"),t.loaded.push(this),t.loaded.length===t.numStartedLoad&&n(t.loaded,!1)};for(var o=0;o<t.images.length;o++){var d=i("<img />");t.numStartedLoad++,d.on("load.rs error.rs",e).attr("src",t.images[o])}}}}else t.isRendered=!0,t.isLoaded=!0,t.isLoading=!1,a(!0)},n=function(i,e){if(i.length){var s=i[0];if(e!==t.isBig)(s=t.holder.children())&&1<s.length&&_();else if(t.iW&&t.iH)o();else if(t.iW=s.width,t.iH=s.height,t.iW&&t.iH)o();else{var r=new Image;r.onload=function(){r.width?(t.iW=r.width,t.iH=r.height,o()):setTimeout(function(){r.width&&(t.iW=r.width,t.iH=r.height),o()},1e3)},r.src=s.src}}else o()},o=function(){t.isLoaded=!0,t.isLoading=!1,a(),_(),d()},a=function(){if(!t.isAppended&&s.ev){var i=s.st.visibleNearby,r=t.id-s._o;e||t.appendOnLoaded||!s.st.fadeinLoadedSlide||0!==r&&(!(i||s._r2||s._l2)||-1!==r&&1!==r)||(i={visibility:"visible",opacity:0},i[s._g+"transition"]="opacity 400ms ease-in-out",t.content.css(i),setTimeout(function(){t.content.css("opacity",1)},16)),t.holder.find(".rsPreloader").length?t.holder.append(t.content):t.holder.html(t.content),t.isAppended=!0,t.isLoaded&&(s._q2(t),d()),t.sizeReady||(t.sizeReady=!0,setTimeout(function(){s.ev.trigger("rsMaybeSizeReady",t)},100))}},d=function(){!t.loadedTriggered&&s.ev&&(t.isLoaded=t.loadedTriggered=!0,t.holder.trigger("rsAfterContentSet"),s.ev.trigger("rsAfterContentSet",t))},l=function(){s.st.usePreloader&&t.holder.html(s._q1.clone())},_=function(i){s.st.usePreloader&&(i=t.holder.find(".rsPreloader"),i.length&&i.remove())};t.isLoaded?a():e?!s._l&&t.images&&t.iW&&t.iH?r():(t.holder.isWaiting=!0,l(),t.holder.slideId=-99):r()},_p2:function(i,t,e){this._p1.append(i.holder),i.appendOnLoaded=!1},_g2:function(t,e){var s=this,r,n="touchstart"===t.type;if(s._s2=n,s.ev.trigger("rsDragStart"),i(t.target).closest(".rsNoDrag",s._r1).length)return s.dragSuccess=!1,!0;if(!e&&s._r2&&(s._t2=!0,s._u2()),s.dragSuccess=!1,s._l2)n&&(s._v2=!0);else{if(n&&(s._v2=!1),s._w2(),n){var o=t.originalEvent.touches;if(!(o&&0<o.length))return;r=o[0],1<o.length&&(s._v2=!0)}else t.preventDefault(),r=t,s.pointerEnabled&&(r=r.originalEvent);s._l2=!0,s._b.on(s._k1,function(i){s._x2(i,e)}).on(s._l1,function(i){s._y2(i,e)}),s._z2="",s._a3=!1,s._b3=r.pageX,s._c3=r.pageY,s._d3=s._v=(e?s._e3:s._h)?r.pageX:r.pageY,s._f3=0,s._g3=0,s._h3=e?s._i3:s._p,s._j3=(new Date).getTime(),n&&s._e1.on(s._m1,function(i){s._y2(i,e)})}},_k3:function(i,t){if(this._l3){var e=this._m3,s=i.pageX-this._b3,r=i.pageY-this._c3,n=this._h3+s,o=this._h3+r,a=t?this._e3:this._h,n=a?n:o,o=this._z2;this._a3=!0,this._b3=i.pageX,this._c3=i.pageY,"x"===o&&0!==s?this._f3=s>0?1:-1:"y"===o&&0!==r&&(this._g3=r>0?1:-1),o=a?this._b3:this._c3,s=a?s:r,t?n>this._n3?n=this._h3+s*this._n1:n<this._o3&&(n=this._h3+s*this._n1):this._z||(0>=this.currSlideId&&0<o-this._d3&&(n=this._h3+s*this._n1),this.currSlideId>=this.numSlides-1&&0>o-this._d3&&(n=this._h3+s*this._n1)),this._h3=n,200<e-this._j3&&(this._j3=e,this._v=o),t?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(i,t){var e=this,s,r="touchmove"===i.type;if(!e._s2||r){if(r){if(e._r3)return;var n=i.originalEvent.touches;if(!n)return;if(1<n.length)return;s=n[0]}else s=i,e.pointerEnabled&&(s=s.originalEvent);if(e._a3||(e._e&&(t?e._s3:e._p1).css(e._g+e._u1,"0s"),function o(){e._l2&&(e._t3=requestAnimationFrame(o),e._u3&&e._k3(e._u3,t))}()),e._l3)i.preventDefault(),e._m3=(new Date).getTime(),e._u3=s;else if(n=t?e._e3:e._h,s=Math.abs(s.pageX-e._b3)-Math.abs(s.pageY-e._c3)-(n?-7:7),s>7){if(n)i.preventDefault(),e._z2="x";else if(r)return void e._v3(i);e._l3=!0}else if(-7>s){if(n){if(r)return void e._v3(i)}else i.preventDefault(),e._z2="y";e._l3=!0}}},_v3:function(i,t){this._r3=!0,this._a3=this._l2=!1,this._y2(i)},_y2:function(t,e){function s(i){return 100>i?100:i>500?500:i}function r(i,t){(n._l||e)&&(d=(-n._u-n._d1)*n._w,l=Math.abs(n._p-d),n._c=l/t,i&&(n._c+=250),n._c=s(n._c),n._x3(d,!1))}var n=this,o,a,d,l;if(o=-1<t.type.indexOf("touch"),!n._s2||o)if(n._s2=!1,n.ev.trigger("rsDragRelease"),n._u3=null,n._l2=!1,n._r3=!1,n._l3=!1,n._m3=0,cancelAnimationFrame(n._t3),n._a3&&(e?n._q3(n._h3):n._l&&n._p3(n._h3)),n._b.off(n._k1).off(n._l1),o&&n._e1.off(n._m1),n._i1(),!n._a3&&!n._v2&&e&&n._w3){var _=i(t.target).closest(".rsNavItem");_.length&&n.goTo(_.index())}else{if(a=e?n._e3:n._h,!n._a3||"y"===n._z2&&a||"x"===n._z2&&!a){if(e||!n._t2)return n._t2=!1,void(n.dragSuccess=!1);if(n._t2=!1,n.st.navigateByClick)return n._i2(n.pointerEnabled?t.originalEvent:t),void(n.dragSuccess=!0);n.dragSuccess=!0}else n.dragSuccess=!0;n._t2=!1,n._z2="";var h=n.st.minSlideOffset;o=o?t.originalEvent.changedTouches[0]:n.pointerEnabled?t.originalEvent:t;var c=a?o.pageX:o.pageY,u=n._d3;o=n._v;var f=n.currSlideId,g=n.numSlides,m=a?n._f3:n._g3,p=n._z;if(Math.abs(c-u),o=c-o,a=(new Date).getTime()-n._j3,a=Math.abs(o)/a,0===m||1>=g)r(!0,a);else{if(!p&&!e)if(0>=f){if(m>0)return void r(!0,a)}else if(f>=g-1&&0>m)return void r(!0,a);if(e){if(d=n._i3,d>n._n3)d=n._n3;else if(d<n._o3)d=n._o3;else{if(c=a*a/.006,_=-n._i3,u=n._y3-n._z3+n._i3,o>0&&c>_?(_+=n._z3/(15/(c/a*.003)),a=a*_/c,c=_):0>o&&c>u&&(u+=n._z3/(15/(c/a*.003)),a=a*u/c,c=u),_=Math.max(Math.round(a/.003),50),d+=c*(0>o?-1:1),d>n._n3)return void n._a4(d,_,!0,n._n3,200);if(d<n._o3)return void n._a4(d,_,!0,n._o3,200)}n._a4(d,_,!0)}else _=function(i){var t=Math.floor(i/n._w);return i-t*n._w>h&&t++,t},c>u+h?0>m?r(!1,a):(_=_(c-u),n._m2(n.currSlideId-_,s(Math.abs(n._p-(-n._u-n._d1+_)*n._w)/a),!1,!0,!0)):u-h>c?m>0?r(!1,a):(_=_(u-c),n._m2(n.currSlideId+_,s(Math.abs(n._p-(-n._u-n._d1-_)*n._w)/a),!1,!0,!0)):r(!1,a)}}},_p3:function(i){i=this._p=i,this._e?this._p1.css(this._x1,this._y1+(this._h?i+this._z1+0:0+this._z1+i)+this._a2):this._p1.css(this._h?this._x1:this._w1,i)},updateSliderSize:function(i){var t,e;if(this.slider){if(this.st.autoScaleSlider){var s=this.st.autoScaleSliderWidth,r=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(t=this.slider.width(),t!=this.width&&(this.slider.css("height",r/s*t),t=this.slider.width()),e=this.slider.height()):(e=this.slider.height(),e!=this.height&&(this.slider.css("width",s/r*e),e=this.slider.height()),t=this.slider.width())}else t=this.slider.width(),e=this.slider.height();if(i||t!=this.width||e!=this.height){for(this.width=t,this.height=e,this._b4=t,this._c4=e,this.ev.trigger("rsBeforeSizeSet"),this.ev.trigger("rsAfterSizePropSet"),this._e1.css({width:this._b4,height:this._c4}),this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing,this._d4=this.st.imageScalePadding,t=0;t<this.slides.length;t++)i=this.slides[t],i.positionSet=!1,i&&i.images&&i.isLoaded&&(i.isRendered=!1,this._q2(i));if(this._e4)for(t=0;t<this._e4.length;t++)i=this._e4[t],i.holder.css(this._i,(i.id+this._d1)*this._w);this._n2(),this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-this._d1)*this._w)),this.ev.trigger("rsOnUpdateNav")}this._j2=this._e1.offset(),this._j2=this._j2[this._i]}},appendSlide:function(t,e){var s=this._s(t);(isNaN(e)||e>this.numSlides)&&(e=this.numSlides),this.slides.splice(e,0,s),this.slidesJQ.splice(e,0,i('<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>')),e<=this.currSlideId&&this.currSlideId++,this.ev.trigger("rsOnAppendSlide",[s,e]),this._f4(e),e===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(i){var t=this.slides[i];t&&(t.holder&&t.holder.remove(),i<this.currSlideId&&this.currSlideId--,this.slides.splice(i,1),this.slidesJQ.splice(i,1),this.ev.trigger("rsOnRemoveSlide",[i]),this._f4(i),i===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(i){var t=this;for(i=t.numSlides,i=0>=t._u?0:Math.floor(t._u/i),t.numSlides=t.slides.length,0===t.numSlides?(t.currSlideId=t._d1=t._u=0,t.currSlide=t._g4=null):t._u=i*t.numSlides+t.currSlideId,i=0;i<t.numSlides;i++)t.slides[i].id=i;t.currSlide=t.slides[t.currSlideId],t._r1=t.slidesJQ[t.currSlideId],t.currSlideId>=t.numSlides?t.goTo(t.numSlides-1):0>t.currSlideId&&t.goTo(0),t._t(),t._l&&t._p1.css(t._g+t._u1,"0ms"),t._h4&&clearTimeout(t._h4),t._h4=setTimeout(function(){t._l&&t._p3((-t._u-t._d1)*t._w),t._n2(),t._l||t._r1.css({display:"block",opacity:1})},14),t.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(i){this._m2("next",this.st.transitionSpeed,!0,!i)},prev:function(i){this._m2("prev",this.st.transitionSpeed,!0,!i)},_m2:function(i,t,e,s,r){var n=this,o,a,d;if(n.ev.trigger("rsBeforeMove",[i,s]),d="next"===i?n.currSlideId+1:"prev"===i?n.currSlideId-1:i=parseInt(i,10),!n._z){if(0>d)return void n._i4("left",!s);if(d>=n.numSlides)return void n._i4("right",!s)}n._r2&&(n._u2(!0),e=!1),a=d-n.currSlideId,d=n._o2=n.currSlideId;var l=n.currSlideId+a;s=n._u;var _;n._z?(l=n._n2(!1,l),s+=a):s=l,n._o=l,n._g4=n.slidesJQ[n.currSlideId],n._u=s,n.currSlideId=n._o,n.currSlide=n.slides[n.currSlideId],n._r1=n.slidesJQ[n.currSlideId];var l=n.st.slidesDiff,h=Boolean(a>0);a=Math.abs(a);var c=Math.floor(d/n._y),u=Math.floor((d+(h?l:-l))/n._y),c=(h?Math.max(c,u):Math.min(c,u))*n._y+(h?n._y-1:0);if(c>n.numSlides-1?c=n.numSlides-1:0>c&&(c=0),d=h?c-d:d-c,d>n._y&&(d=n._y),a>d+l)for(n._d1+=(a-(d+l))*(h?-1:1),t*=1.4,d=0;d<n.numSlides;d++)n.slides[d].positionSet=!1;n._c=t,n._n2(!0),r||(_=!0),o=(-s-n._d1)*n._w,_?setTimeout(function(){n._j4=!1,n._x3(o,i,!1,e),n.ev.trigger("rsOnUpdateNav")},0):(n._x3(o,i,!1,e),n.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display","block"),this._d2.css("display","block"),this._z||this.st.loopRewind||(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(t,e,s,r,n){function o(){var i;d&&(i=d.data("rsTimeout"))&&(d!==l&&d.css({opacity:0,display:"none",zIndex:0}),clearTimeout(i),d.data("rsTimeout","")),(i=l.data("rsTimeout"))&&(clearTimeout(i),l.data("rsTimeout",""))}var a=this,d,l,_={};isNaN(a._c)&&(a._c=400),a._p=a._h3=t,a.ev.trigger("rsBeforeAnimStart"),a._e?a._l?(a._c=parseInt(a._c,10),s=a._g+a._v1,_[a._g+a._u1]=a._c+"ms",_[s]=r?i.rsCSS3Easing[a.st.easeInOut]:i.rsCSS3Easing[a.st.easeOut],a._p1.css(_),r||!a.hasTouch?setTimeout(function(){a._p3(t)},5):a._p3(t)):(a._c=a.st.transitionSpeed,d=a._g4,l=a._r1,l.data("rsTimeout")&&l.css("opacity",0),o(),d&&d.data("rsTimeout",setTimeout(function(){_[a._g+a._u1]="0ms",_.zIndex=0,_.display="none",d.data("rsTimeout",""),d.css(_),setTimeout(function(){d.css("opacity",0)},16)},a._c+60)),_.display="block",_.zIndex=a._m,_.opacity=0,_[a._g+a._u1]="0ms",_[a._g+a._v1]=i.rsCSS3Easing[a.st.easeInOut],l.css(_),l.data("rsTimeout",setTimeout(function(){l.css(a._g+a._u1,a._c+"ms"),l.data("rsTimeout",setTimeout(function(){l.css("opacity",1),l.data("rsTimeout","")},20))},20))):a._l?(_[a._h?a._x1:a._w1]=t+"px",a._p1.animate(_,a._c,r?a.st.easeInOut:a.st.easeOut)):(d=a._g4,l=a._r1,l.stop(!0,!0).css({opacity:0,display:"block",zIndex:a._m}),a._c=a.st.transitionSpeed,l.animate({opacity:1},a._c,a.st.easeInOut),o(),d&&d.data("rsTimeout",setTimeout(function(){d.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},a._c+60))),a._r2=!0,a.loadingTimeout&&clearTimeout(a.loadingTimeout),a.loadingTimeout=n?setTimeout(function(){a.loadingTimeout=null,n.call()},a._c+60):setTimeout(function(){a.loadingTimeout=null,a._k4(e)},a._c+60)},_u2:function(i){if(this._r2=!1,clearTimeout(this.loadingTimeout),this._l)if(this._e){if(!i){i=this._p;var t=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms"),i!==t&&this._p3(t)}}else this._p1.stop(!0),this._p=parseInt(this._p1.css(this._h?this._x1:this._w1),10);else 20<this._m?this._m=10:this._m++},_l4:function(){var i=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),t=0===i[0].indexOf("matrix3d");return parseInt(i[this._h?t?12:4:t?13:5],10)},_m4:function(i,t){return this._e?this._y1+(t?i+this._z1+0:0+this._z1+i)+this._a2:i},_k4:function(i){this._l||(this._r1.css("z-index",0),this._m=10),this._r2=!1,this.staticSlideId=this.currSlideId,this._n2(),this._n4=!1,this.ev.trigger("rsAfterSlideChange")},_i4:function(i,t){var e=this,s=(-e._u-e._d1)*e._w;if(0!==e.numSlides&&!e._r2)if(e.st.loopRewind)e.goTo("left"===i?e.numSlides-1:0,t);else if(e._l){e._c=200;var r=function(){e._r2=!1};e._x3(s+("left"===i?30:-30),"",!1,!0,function(){e._r2=!1,e._x3(s,"",!1,!0,r)})}},_q2:function(i,t){if(!i.isRendered){var e=i.content,s="rsMainSlideImage",r,n=this.st.imageAlignCenter,o=this.st.imageScaleMode,a;if(i.videoURL&&(s="rsVideoContainer","fill"!==o?r=!0:(a=e,a.hasClass(s)||(a=a.find("."+s)),a.css({width:"100%",height:"100%"}),s="rsMainSlideImage")),e.hasClass(s)||(e=e.find("."+s)),e){var d=i.iW,l=i.iH;if(i.isRendered=!0,"none"!==o||n){s="fill"!==o?this._d4:0,a=this._b4-2*s;var _=this._c4-2*s,h,c,u={};"fit-if-smaller"===o&&(d>a||l>_)&&(o="fit"),("fill"===o||"fit"===o)&&(h=a/d,c=_/l,h="fill"==o?h>c?h:c:"fit"==o?c>h?h:c:1,d=Math.ceil(d*h,10),l=Math.ceil(l*h,10)),"none"!==o&&(u.width=d,u.height=l,r&&e.find(".rsImg").css({width:"100%",height:"100%"})),n&&(u.marginLeft=Math.floor((a-d)/2)+s,u.marginTop=Math.floor((_-l)/2)+s),e.css(u)}}}}},i.rsProto=t.prototype,i.fn.royalSlider=function(e){var s=arguments;return this.each(function(){var r=i(this);if("object"!=typeof e&&e){if((r=r.data("royalSlider"))&&r[e])return r[e].apply(r,Array.prototype.slice.call(s,1))}else r.data("royalSlider")||r.data("royalSlider",new t(r,e))})},i.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2},i.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"},i.extend(jQuery.easing,{easeInOutSine:function(i,t,e,s,r){return-s/2*(Math.cos(Math.PI*t/r)-1)+e},easeOutSine:function(i,t,e,s,r){return s*Math.sin(t/r*(Math.PI/2))+e},easeOutCubic:function(i,t,e,s,r){return s*((t=t/r-1)*t*t+1)+e}})}(jQuery,window),function(i){i.extend(i.rsProto,{_x4:function(){var t=this,e;t._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2e3},!t.st.autoPlay&&t.st.autoplay&&(t.st.autoPlay=t.st.autoplay),t.st.autoPlay=i.extend({},t._y4,t.st.autoPlay),t.st.autoPlay.enabled&&(t.ev.on("rsBeforeParseNode",function(t,s,r){s=i(s),(e=s.attr("data-rsDelay"))&&(r.customDelay=parseInt(e,10))}),t.ev.one("rsAfterInit",function(){t._z4()}),t.ev.on("rsBeforeDestroy",function(){t.stopAutoPlay(),t.slider.off("mouseenter mouseleave"),i(window).off("blur"+t.ns+" focus"+t.ns)}))},_z4:function(){var t=this;t.startAutoPlay(),t.ev.on("rsAfterContentSet",function(i,e){t._l2||t._r2||!t._a5||e!==t.currSlide||t._b5()}),t.ev.on("rsDragRelease",function(){t._a5&&t._c5&&(t._c5=!1,t._b5())}),t.ev.on("rsAfterSlideChange",function(){t._a5&&t._c5&&(t._c5=!1,t.currSlide.isLoaded&&t._b5())}),t.ev.on("rsDragStart",function(){t._a5&&(t.st.autoPlay.stopAtAction?t.stopAutoPlay():(t._c5=!0,t._d5()))}),t.ev.on("rsBeforeMove",function(i,e,s){t._a5&&(s&&t.st.autoPlay.stopAtAction?t.stopAutoPlay():(t._c5=!0,t._d5()))}),t._e5=!1,t.ev.on("rsVideoStop",function(){t._a5&&(t._e5=!1,t._b5())}),t.ev.on("rsVideoPlay",function(){t._a5&&(t._c5=!1,t._d5(),t._e5=!0)}),i(window).on("blur"+t.ns,function(){t._a5&&(t._c5=!0,t._d5())}).on("focus"+t.ns,function(){t._a5&&t._c5&&(t._c5=!1,t._b5())}),t.st.autoPlay.pauseOnHover&&(t._f5=!1,t.slider.hover(function(){t._a5&&(t._c5=!1,t._d5(),t._f5=!0)},function(){t._a5&&(t._f5=!1,t._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():this.startAutoPlay()},startAutoPlay:function(){this._a5=!0,this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1,this._d5()},_b5:function(){var i=this;i._f5||i._e5||(i._g5=!0,i._h5&&clearTimeout(i._h5),i._h5=setTimeout(function(){var t;i._z||i.st.loopRewind||(t=!0,i.st.loopRewind=!0),i.next(!0),t&&(i.st.loopRewind=!1)},i.currSlide.customDelay?i.currSlide.customDelay:i.st.autoPlay.delay))},_d5:function(){this._f5||this._e5||(this._g5=!1,this._h5&&(clearTimeout(this._h5),this._h5=null))}}),i.rsModules.autoplay=i.rsProto._x4}(jQuery),function(i){i.extend(i.rsProto,{_w4:function(){var i=this;if(i.st.autoHeight){var t,e,s,r=!0,n=function(n){s=i.slides[i.currSlideId],(t=s.holder)&&(e=t.height())&&void 0!==e&&e>(i.st.minAutoHeight||30)&&(i._c4=e,i._e||!n?i._e1.css("height",e):i._e1.stop(!0,!0).animate({height:e},i.st.transitionSpeed),i.ev.trigger("rsAutoHeightChange",e),r&&(i._e&&setTimeout(function(){i._e1.css(i._g+"transition","height "+i.st.transitionSpeed+"ms ease-in-out")},16),r=!1))};i.ev.on("rsMaybeSizeReady.rsAutoHeight",function(i,t){s===t&&n()}),i.ev.on("rsAfterContentSet.rsAutoHeight",function(i,t){s===t&&n()}),i.slider.addClass("rsAutoHeight"),i.ev.one("rsAfterInit",function(){setTimeout(function(){n(!1),setTimeout(function(){i.slider.append('<div style="clear:both; float: none;"></div>')},16)},16)}),i.ev.on("rsBeforeAnimStart",function(){n(!0)}),i.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){n(!1)},16)})}}}),i.rsModules.autoHeight=i.rsProto._w4}(jQuery),function(i){i.rsProto._o4=function(){var i,t=this;t.st.addActiveClass&&t.ev.on("rsOnUpdateNav",function(){i&&clearTimeout(i),i=setTimeout(function(){t._g4&&t._g4.removeClass("rsActiveSlide"),t._r1&&t._r1.addClass("rsActiveSlide"),i=null},50)})},i.rsModules.activeClass=i.rsProto._o4}(jQuery),$(".royalSlider").length>0&&(h=$(".royalSlider"),h.royalSlider({keyboardNavEnabled:!0,imageScaleMode:"fill",imageAlignCenter:!0,autoScaleSlider:!1,slidesSpacing:0,loop:!0,transitionSpeed:200,controlNavigation:"bullets",arrowsNavHideOnTouch:!0,transitionType:"fade"},{autoHeight:!0}))}).call(this);