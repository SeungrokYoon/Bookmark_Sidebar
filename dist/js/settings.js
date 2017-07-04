/*! (c) Philipp König under GPL-3.0 */
!function(e,t){function a(e){return void 0!==e}function s(e){return"string"==typeof e}function n(e){return"object"==typeof e}function o(e){return Object.keys(e).length}function r(e,t,a){return e<t?t:e>a?a:e}function l(e,t){return parseInt(e,t||10)}function i(e){return Math.round(e)}function c(e){var t,a,s,n,o,r,l,c,p=+e[0],d=+e[1],h=+e[2];switch(n=Math.floor(6*p),o=6*p-n,r=h*(1-d),l=h*(1-o*d),c=h*(1-(1-o)*d),n=n||0,l=l||0,c=c||0,n%6){case 0:t=h,a=c,s=r;break;case 1:t=l,a=h,s=r;break;case 2:t=r,a=h,s=c;break;case 3:t=r,a=l,s=h;break;case 4:t=c,a=r,s=h;break;case 5:t=h,a=r,s=l}return[i(255*t),i(255*a),i(255*s)]}function p(e){return h(c(e))}function d(e){var t,a=+e[0],s=+e[1],n=+e[2],o=Math.max(a,s,n),r=Math.min(a,s,n),l=o-r,i=0===o?0:l/o,c=o/255;switch(o){case r:t=0;break;case a:t=s-n+l*(s<n?6:0),t/=6*l;break;case s:t=n-a+2*l,t/=6*l;break;case n:t=a-s+4*l,t/=6*l}return[t,i,c]}function h(e){var t=+e[2]|+e[1]<<8|+e[0]<<16;return(t="000000"+t.toString(16)).slice(-6)}function m(e){return d(u(e))}function u(e){return 3===e.length&&(e=e.replace(/./g,"$&$&")),[l(e[0]+e[1],16),l(e[2]+e[3],16),l(e[4]+e[5],16)]}function g(e){return[+e[0]/360,+e[1]/100,+e[2]/100]}function f(e){return[i(360*+e[0]),i(100*+e[1]),i(100*+e[2])]}function b(e){return[+e[0]/255,+e[1]/255,+e[2]/255]}function v(e){if(n(e))return e;var t=/\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(e),a=/\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(e);return"#"===e[0]&&e.match(/^#([\da-f]{3}|[\da-f]{6})$/i)?m(e.slice(1)):a?g([+a[1],+a[2],+a[3]]):t?d([+t[1],+t[2],+t[3]]):[0,1,1]}var k="firstChild",y="scrollLeft",w="scrollTop",x="offsetLeft",C="offsetTop",T=setTimeout;!function(e){e.version="1.3.4",e.__instance__={},e.each=function(t,a){return T(function(){var a,s=e.__instance__;for(a in s)t(s[a],a,s)},0===a?0:a||1),e},e.parse=v,e._HSV2RGB=c,e._HSV2HEX=p,e._RGB2HSV=d,e._HEX2HSV=m,e._HEX2RGB=function(e){return b(u(e))},e.HSV2RGB=function(e){return c(g(e))},e.HSV2HEX=function(e){return p(g(e))},e.RGB2HSV=function(e){return f(d(e))},e.RGB2HEX=h,e.HEX2HSV=function(e){return f(m(e))},e.HEX2RGB=u}(e.CP=function(l,i){function d(e,t,a){for(var s=0,n=(e=e.split(/\s+/)).length;s<n;++s)t.addEventListener(e[s],a,!1)}function h(e,t,a){for(var s=0,n=(e=e.split(/\s+/)).length;s<n;++s)t.removeEventListener(e[s],a)}function m(e,t){var a=t.touches?t.touches[0].pageX:t.pageX,s=t.touches?t.touches[0].pageY:t.pageY,n=u(e);return{x:a-n.l,y:s-n.t}}function u(t){if(t===e)var a=e.pageXOffset||A[y],s=e.pageYOffset||A[w];else for(var a=t[x]-t.scrollLeft,s=t[C]-t.scrollTop;t=t.offsetParent;)a+=t[x]-t.scrollLeft,s+=t[C]-t.scrollTop;return{l:a,t:s}}function g(e,t){for(;(e=e.parentElement)&&e!==t;);return e}function f(e){e&&e.preventDefault()}function b(t){return t===e?{w:e.innerWidth,h:e.innerHeight}:{w:t.offsetWidth,h:t.offsetHeight}}function v(e){return L||!!a(e)&&e}function E(e){L=e}function _(e,t,s){if(!a(I[e]))return O;if(a(s))a(I[e][s])&&I[e][s].apply(O,t);else for(var n in I[e])I[e][n].apply(O,t);return O}function S(e,t){e&&"h"!==e||_("change:h",t),e&&"sv"!==e||_("change:sv",t),_("change",t)}function D(){return j.parentNode}function H(a,s){function n(e){c(V);var t=c([V[0],1,1]);G.style.backgroundColor="rgb("+t.join(",")+")",E(V),f(e)}function o(e){var t=r(m(z,e).y,0,A);V[0]=(A-t)/A,N.style.top=t-U/2+"px",n(e)}function u(e){var t=m(G,e),a=r(t.x,0,L),s=r(t.y,0,I);V[1]=1-(L-a)/L,V[2]=(I-s)/I,W.style.right=L-a-Q/2+"px",W.style.top=s-Z/2+"px",n(e)}function k(e){Y&&(o(e),ae=p(V),$||(_("drag:h",[ae,O]),_("drag",[ae,O]),S("h",[ae,O]))),K&&(u(e),ae=p(V),J||(_("drag:sv",[ae,O]),_("drag",[ae,O]),S("sv",[ae,O]))),$=0,J=0}function y(e){var t=e.target,a=Y?"h":"sv",s=[p(V),O],n=t===l||g(t,l)===l,o=t===j||g(t,j)===j;n||o?o&&(_("stop:"+a,s),_("stop",s),S(a,s)):D()&&!1!==i&&(O.exit(),_("exit",[O]),S(0,s)),Y=0,K=0}function w(e){$=1,Y=1,k(e),f(e),_("start:h",[ae,O]),_("start",[ae,O]),S("h",[ae,O])}function x(e){J=1,K=1,k(e),f(e),_("start:sv",[ae,O]),_("start",[ae,O]),S("sv",[ae,O])}a||((s||M).appendChild(j),O.visible=!0),ee=b(j).w,te=b(j).h;var C=b(G),T=b(W),A=b(z).h,L=C.w,I=C.h,U=b(N).h,Q=T.w,Z=T.h;if(a){j.style.left=j.style.top="-9999px";function se(e){var t=e.target,a=t===l||g(t,l)===l;a?H():O.exit(),_(a?"enter":"exit",[O])}!1!==i&&d(i,l,se),O.create=function(){return H(1),_("create",[O]),O},O.destroy=function(){return!1!==i&&h(i,l,se),O.exit(),E(!1),_("destroy",[O]),O}}else P();q=function(){V=v(V),n(),N.style.top=A-U/2-A*+V[0]+"px",W.style.right=L-Q/2-L*+V[1]+"px",W.style.top=I-Z/2-I*+V[2]+"px"},O.exit=function(a){return D()&&(D().removeChild(j),O.visible=!1),h(R,z,w),h(R,G,x),h(F,t,k),h(B,t,y),h(X,e,P),O},q(),a||(d(R,z,w),d(R,G,x),d(F,t,k),d(B,t,y),d(X,e,P))}function P(){return O.fit()}var M=t.body,A=t.documentElement,O=this,L=!1,I={},j=t.createElement("div"),R="touchstart mousedown",F="touchmove mousemove",B="touchend mouseup",X="orientationchange resize";if(!(O instanceof CP))return new CP(l,i);CP.__instance__[l.id||l.name||o(CP.__instance__)]=O,a(i)||(i=R),E(CP.parse(l.getAttribute("data-color")||l.value||[0,1,1])),j.className="color-picker",j.innerHTML='<div class="color-picker-control"><span class="color-picker-h"><i></i></span><span class="color-picker-sv"><i></i></span></div>';var q,U=j[k].children,V=v([0,1,1]),z=U[0],G=U[1],N=z[k],W=G[k],$=0,J=0,Y=0,K=0,Q=0,Z=0,ee=0,te=0,ae=p(V);return H(1),T(function(){var e=[p(V),O];_("create",e),S(0,e)},0),O.fit=function(t){var s=b(e),o=b(A),r=o.h>s.h,i=u(e),c=(u(A),r?o.w:s.w+i.l),p=r?s.h+i.t:Math.max(o.h,s.h),d=u(l);return Q=d.l,Z=d.t+b(l).h,n(t)?(a(t[0])&&(Q=t[0]),a(t[1])&&(Z=t[1])):(Q+ee>c&&(Q=c-ee),Z+te>p&&(Z=p-te)),j.style.left=Q+"px",j.style.top=Z+"px",_("fit",[O]),O},O.set=function(e){return a(e)?(s(e)&&(e=CP.parse(e)),E(e),q(),O):v()},O.get=function(e){return v(e)},O.target=l,O.picker=j,O.visible=!1,O.on=function(e,t,s){return a(e)?a(t)?(a(I[e])||(I[e]={}),a(s)||(s=o(I[e])),I[e][s]=t,O):I[e]:I},O.off=function(e,t){return a(e)?a(t)?(delete I[e][t],O):(I[e]={},O):(I={},O)},O.trigger=_,O.hooks=I,O.enter=function(e){return H(0,e)},O})}(window,document),(e=>{"use strict";window.CheckboxHelper=function(t){let a={};this.get=((a,s,n="checkbox")=>{let r=e("<div />").html("<input type='checkbox' />").data("uid",Math.random().toString(36).substr(2,12)).attr(t.opts.attr.type,n).addClass(t.opts.classes.checkbox.box);return void 0!==s&&(r.children("input[type='checkbox']").attr(s),s[t.opts.attr.name]&&r.attr(t.opts.attr.name,s[t.opts.attr.name])),this.isChecked(r)&&r.addClass(t.opts.classes.checkbox.active),o(r,a),r}),this.isChecked=(e=>e.find("input[type='checkbox']")[0].checked);let s=(e,a)=>{let s=e.children("input[type='checkbox']");s.trigger("change"),t.opts.events&&t.opts.events.checkboxChanged&&t.helper.utility.triggerEvent("checkboxChanged",{container:e,checkbox:s,checked:e.hasClass(t.opts.classes.checkbox.active)},a.document()[0])},n=(o,r)=>{o.addClass(t.opts.classes.checkbox.clicked),o.removeClass(t.opts.classes.checkbox.focus),o.toggleClass(t.opts.classes.checkbox.active);let l=o.hasClass(t.opts.classes.checkbox.active),i=o.children("input[type='checkbox']");if("radio"===o.attr(t.opts.attr.type)&&o.attr(t.opts.attr.name))if(r){let a=o.attr(t.opts.attr.name);o.addClass(t.opts.classes.checkbox.active),l&&(i.attr("checked",!0),s(o,r)),r.find("div."+t.opts.classes.checkbox.box+"["+t.opts.attr.type+"='radio']["+t.opts.attr.name+"='"+a+"']").forEach(t=>{let a=e(t);t!==o[0]&&this.isChecked(a)&&n(a)})}else i.attr("checked",!1);else i.attr("checked",l),s(o,r);let c=o.data("uid");a[c]&&clearTimeout(a[c]),a[c]=setTimeout(()=>{o.removeClass(t.opts.classes.checkbox.clicked)},300)},o=(a,s)=>{a.on("mousedown",a=>{a.preventDefault(),a.stopPropagation(),e(a.currentTarget).addClass(t.opts.classes.checkbox.focus)}).on("click",t=>{t.preventDefault(),t.stopPropagation(),n(e(t.currentTarget),s)}),s.on("click",()=>{a.removeClass(t.opts.classes.checkbox.focus)})}},window.AppearanceHelper=function(t){let a={sidebar:{template:"sidebar",styles:["sidebar"]},general:{template:"sidebar",styles:["sidebar"]},overlay:{template:"overlay",styles:["overlay"]},indicator:{template:"indicator",styles:["contentBase","content"]}};this.init=(async()=>{["sidebarPosition","language"].forEach(e=>{let a=t.helper.model.getData("a/"+e);t.opts.elm.select[e][0].value=a,t.opts.elm.select[e].data("initial",a)}),["darkMode"].forEach(e=>{let a=!1;!0===t.helper.model.getData("a/"+e)&&(t.opts.elm.checkbox[e].trigger("click"),a=!0),t.opts.elm.checkbox[e].children("input").data("initial",a)}),l().then(()=>{let e=t.helper.model.getData("a/styles");Object.keys(e).forEach(a=>{let n=e[a];t.opts.elm.range[a]?(t.opts.elm.range[a][0].value=n.replace("px",""),t.opts.elm.range[a].data("initial",n.replace("px","")),t.opts.elm.range[a].trigger("change")):t.opts.elm.color[a]?(t.opts.elm.color[a].data("initial",n),s(t.opts.elm.color[a],n)):t.opts.elm.select[a]&&("fontFamily"===a&&0===t.opts.elm.select[a].children("option[value='"+n+"']").length()&&(n="default"),t.opts.elm.select[a][0].value=n,t.opts.elm.select[a].data("initial",n))}),i()})}),this.save=(()=>{let a=r();a.isEE&&(delete a.isEE,a.styles.colorScheme="__color_ee"),chrome.storage.sync.set({appearance:a},()=>{t.helper.model.call("refreshAllTabs",{type:"Settings"}),t.showSuccessMessage("saved_message"),t.opts.elm.select.language.data("initial")!==a.language&&e.delay(1500).then(()=>{location.reload(!0)})})});let s=(e,t)=>{let a=e.data("picker");if(t.search(/rgba\(/)>-1){let e=t.replace(/(rgba|\(|\))/gi,"").split(",");t="rgb("+e[0]+","+e[1]+","+e[2]+")",a.alpha&&(a.alpha[0].value=e[3])}a.set(t),a.trigger("change")},n=e=>new Promise(t=>{let a=new XMLHttpRequest;a.open("GET",chrome.extension.getURL(e),!0),a.onload=(()=>{a.response&&t(a.response)}),a.send()}),o=s=>{if(t.opts.elm.preview[s]){t.opts.elm.preview[s].find("head > style").remove();let n=r();if("default"===n.styles.fontFamily){let e=t.helper.font.getDefaultFontInfo();n.styles.fontFamily=e.name}Object.assign(n.styles,t.helper.font.getFontWeights(n.styles.fontFamily));let o=a[s].css;Object.keys(n.styles).forEach(e=>{o=o.replace(new RegExp('"?%'+e+'"?',"g"),n.styles[e])}),t.opts.elm.preview[s].find("["+t.opts.attr.style+"]").forEach(a=>{let s=e(a).attr(t.opts.attr.style);Object.keys(n.styles).forEach(e=>{s=s.replace(new RegExp('"?%'+e+'"?',"g"),n.styles[e])}),a.style.cssText=s}),t.opts.elm.preview[s].find("["+t.opts.attr.hideOnFalse+"]").forEach(a=>{let s=e(a).attr(t.opts.attr.hideOnFalse);void 0===n[s]||!1===n[s]?e(a).css("display","none"):e(a).css("display","block")}),t.opts.elm.preview[s].find("["+t.opts.attr.classOnTrue+"]").forEach(a=>{let s=e(a).attr(t.opts.attr.classOnTrue).split("?"),o=s[0],r=s[1];void 0!==n[o]&&!0===n[o]?e(a).addClass(r):e(a).removeClass(r)}),t.opts.elm.body.attr(t.opts.attr.pos,n.sidebarPosition),t.opts.elm.preview[s].find("["+t.opts.attr.pos+"]").attr(t.opts.attr.pos,n.sidebarPosition),t.opts.elm.preview[s].find("head").append("<style>"+o+"</style>"),!0===n.isEE&&t.opts.elm.preview[s].find("body").addClass(t.opts.classes.page.ee),n.darkMode?t.opts.elm.preview[s].find("body").addClass(t.opts.classes.page.darkMode):t.opts.elm.preview[s].find("body").removeClass(t.opts.classes.page.darkMode);let l=t.opts.elm.preview[s].find("section#sidebar");if(l.length()>0){let e=l.find("> header");e.find("> h1 > span").removeClass(t.opts.classes.hidden);let a=window.getComputedStyle(e[0]),s=parseInt(a.getPropertyValue("padding-top"));e.children("a").forEach(a=>{if(a.offsetTop>s)return e.find("> h1 > span").addClass(t.opts.classes.hidden),!0})}}},r=()=>{let e={sidebarPosition:t.opts.elm.select.sidebarPosition[0].value,language:t.opts.elm.select.language[0].value,darkMode:t.helper.checkbox.isChecked(t.opts.elm.checkbox.darkMode),showIndicator:!0,showIndicatorIcon:!0,showBookmarkIcons:!0,showDirectoryIcons:!0,styles:{}},a=t.helper.model.getData("a/styles");return Object.keys(a).forEach(a=>{t.opts.elm.range[a]?e.styles[a]=t.opts.elm.range[a][0].value+"px":t.opts.elm.color[a]?e.styles[a]=t.opts.elm.color[a][0].value:t.opts.elm.select[a]&&(e.styles[a]=t.opts.elm.select[a][0].value)}),Object.entries({indicatorWidth:"showIndicator",indicatorIconSize:"showIndicatorIcon",bookmarksIconSize:"showBookmarkIcons",directoriesIconSize:"showDirectoryIcons"}).forEach(([t,a])=>{0===parseInt(e.styles[t])&&(e[a]=!1)}),!0===a.isEE&&(e.isEE=!0),e},l=()=>new Promise(s=>{let r=0,l=Object.keys(a).length;Object.keys(a).forEach(i=>{a[i].css="",t.opts.elm.preview[i]=e("<iframe />").attr(t.opts.attr.appearance,i).addClass(t.opts.classes.hidden).appendTo(t.opts.elm.body),n("html/template/"+a[i].template+".html").then(e=>{e=(e=e.replace(/__MSG_\@\@extension_id__/g,chrome.runtime.id)).replace(/__DATE__CREATED__/g,t.helper.i18n.getLocaleDate(new Date("2016-11-25"))),t.opts.elm.preview[i].find("body").html(e),t.helper.i18n.parseHtml(t.opts.elm.preview[i]),t.helper.font.addStylesheet(t.opts.elm.preview[i]),++r===l&&s()}),a[i].styles.forEach(e=>{n("css/"+e+".css").then(e=>{a[i].css+=e,o(i)})})})}),i=()=>{let a="blockbyte".split(""),n=0;e(document).on("keydown",e=>{e.key!==a[n]||t.opts.elm.appearance.content.hasClass(t.opts.classes.hidden)?n=0:++n>=a.length&&(t.opts.elm.color.colorScheme[0].value="__color_ee",this.save())}),t.opts.elm.appearance.content.find("input, select").on("change input",a=>{let n=e(a.currentTarget),r=a.currentTarget.value,l=n.data("initial");if("checkbox"===n.attr("type")&&(r=a.currentTarget.checked,e(n).parent()[0]===t.opts.elm.checkbox.darkMode[0])){let e=t.helper.model.getDefaultColor("textColor",r?"dark":"light");s(t.opts.elm.color.textColor,e),s(t.opts.elm.color.bookmarksDirColor,e),["sidebarMaskColor","colorScheme"].forEach(e=>{let a=t.helper.model.getDefaultColor(e,r?"dark":"light");s(t.opts.elm.color[e],a)})}let i=n;n.next("span").length()>0&&(i=n.next("span")),r!==l?0===i.next("a."+t.opts.classes.revert).length()&&e("<a href='#' />").addClass(t.opts.classes.revert).data("elm",n).insertAfter(i):i.next("a."+t.opts.classes.revert).remove();let c=n.parents("["+t.opts.attr.name+"]").eq(0).attr(t.opts.attr.name);o(c)}),t.opts.elm.appearance.content.on("click","a."+t.opts.classes.revert,t=>{t.preventDefault();let a=e(t.currentTarget).data("elm"),n=a.data("initial");a.data("picker")?s(a,n):(a[0].value=n,a.trigger("change"))}),t.opts.elm.appearance.backgroundChanger.on("click",a=>{a.preventDefault();let s=e(a.currentTarget).attr(t.opts.attr.bg);t.opts.elm.appearance.backgroundChanger.removeClass(t.opts.classes.tabs.active),e(a.currentTarget).addClass(t.opts.classes.tabs.active),t.opts.elm.body.attr(t.opts.attr.bg,s)}),t.opts.elm.appearance.backgroundChanger.eq(0).trigger("click"),e(document).on(t.opts.events.contentTabChanged,e=>{"appearance"===e.detail.headerTab&&Object.keys(t.opts.elm.preview).forEach(a=>{let s=t.opts.elm.preview[a];a===e.detail.contentTab?(s.removeClass(t.opts.classes.hidden),o(a)):s.addClass(t.opts.classes.hidden)})})}},window.BehaviourHelper=function(e){this.init=(async()=>{t(),["rememberSearch","dirAccordion","animations","preventPageScroll","initialOpenOnNewTab"].forEach(t=>{!0===e.helper.model.getData("b/"+t)&&e.opts.elm.checkbox[t].trigger("click")});let a=e.helper.model.getData("b/pxTolerance");e.opts.elm.range.pxToleranceMaximized[0].value=a.maximized,e.opts.elm.range.pxToleranceWindowed[0].value=a.windowed,["openAction","linkAction","rememberState","newTab","newTabPosition","tooltipContent"].forEach(t=>{e.opts.elm.select[t][0].value=e.helper.model.getData("b/"+t),e.opts.elm.select[t].trigger("change")}),["openDelay","dirOpenDuration","openChildrenWarnLimit","closeTimeout","tooltipDelay"].forEach(t=>{let a=e.helper.model.getData("b/"+t);if(-1===a){let a=e.opts.elm.range[t].data("infinityCheckbox");a&&a.length()>0&&a.trigger("click")}e.opts.elm.range[t][0].value=a,e.opts.elm.range[t].trigger("change")}),e.opts.elm.range.pxToleranceMaximized.trigger("change"),e.opts.elm.range.pxToleranceWindowed.trigger("change")}),this.save=(()=>{let t={pxTolerance:{maximized:e.opts.elm.range.pxToleranceMaximized[0].value,windowed:e.opts.elm.range.pxToleranceWindowed[0].value}};["openAction","linkAction","rememberState","newTab","newTabPosition","tooltipContent"].forEach(a=>{t[a]=e.opts.elm.select[a][0].value}),["openDelay","dirOpenDuration","openChildrenWarnLimit","closeTimeout","tooltipDelay"].forEach(a=>{let s=-1;!1===e.opts.elm.range[a].hasClass(e.opts.classes.range.inactive)&&(s=e.opts.elm.range[a][0].value),t[a]=s}),["rememberSearch","dirAccordion","animations","preventPageScroll","initialOpenOnNewTab"].forEach(a=>{t[a]=e.helper.checkbox.isChecked(e.opts.elm.checkbox[a])}),chrome.storage.sync.set({behaviour:t},()=>{e.helper.model.call("refreshAllTabs",{type:"Settings"}),e.showSuccessMessage("saved_message")})});let t=()=>{e.opts.elm.keyboardShortcutInfo.children("a").on("click",e=>{e.preventDefault(),chrome.tabs.create({url:"chrome://extensions/configureCommands",active:!0})})}},window.ContributeHelper=function(t){this.init=(async()=>{a(),s()});let a=async()=>{let a=t.helper.i18n.getLanguage();if(a!==t.helper.i18n.getDefaultLanguage()){let s=new XMLHttpRequest;s.open("POST",t.opts.ajax.translationInfo,!0),s.onload=(()=>{let n=JSON.parse(s.responseText);n&&n.languages&&n.languages.some(s=>{if(s.name===a)return Object.keys(s.categories).some(a=>{if(("Settings"!==a||s.categories[a]/n.categories[a]*100>75)&&n.categories[a]>s.categories[a])return t.opts.elm.header.find("> ul."+t.opts.classes.tabs.list+" > li["+t.opts.attr.name+"='contribute']").attr("title",t.helper.i18n.get("translation_incomplete_info")).addClass(t.opts.classes.incomplete),e("<br />").appendTo(t.opts.elm.contribute.translationTabContent),e("<p />").addClass(t.opts.classes.incomplete).text(t.helper.i18n.get("translation_incomplete_info")).appendTo(t.opts.elm.contribute.translationTabContent),t.opts.elm.contribute.translationTabLink.trigger("click"),!0}),!0})}),s.send()}},s=async()=>{chrome.storage.sync.get(["shareUserdata"],e=>{e.shareUserdata&&!0===e.shareUserdata&&t.opts.elm.checkbox.shareUserdata.trigger("click"),t.opts.elm.checkbox.shareUserdata.children("input[type='checkbox']").on("change",()=>{chrome.storage.sync.set({shareUserdata:t.helper.checkbox.isChecked(t.opts.elm.checkbox.shareUserdata)},()=>{t.showSuccessMessage("saved_share_userdata")})})}),t.opts.elm.contribute.action.on("click",a=>{switch(a.preventDefault(),e(a.currentTarget).parents("["+t.opts.attr.name+"]").eq(0).attr(t.opts.attr.name)){case"donation":window.open(t.opts.donateLink,"_blank");break;case"translation":window.open(chrome.extension.getURL("html/translate.html"),"_blank")}})}},window.FeedbackHelper=function(t){this.init=(async()=>{t.opts.elm.feedback.faq.children("strong").on("click",a=>{a.preventDefault(),e(a.currentTarget).next("p").toggleClass(t.opts.classes.visible)}),t.opts.elm.feedback.faq.children("p > a").on("click",a=>{a.preventDefault(),"usage"===e(a.currentTarget).parent("p").attr(t.opts.attr.type)&&window.open(chrome.extension.getURL("html/intro.html")+"?skip=1","_blank")});let a=t.helper.template.loading().appendTo(t.opts.elm.feedback.form);t.opts.elm.feedback.send.addClass(t.opts.classes.hidden),t.opts.elm.feedback.form.addClass(t.opts.classes.loading),t.helper.model.call("websiteStatus").then(s=>{a.remove(),t.opts.elm.feedback.form.removeClass(t.opts.classes.loading),"available"===s.status?t.opts.elm.feedback.send.removeClass(t.opts.classes.hidden):(t.opts.elm.feedback.form.addClass(t.opts.classes.hidden),e("<p />").addClass(t.opts.classes.error).html(t.helper.i18n.get("status_feedback_unavailable_desc")+"<br />").append("<a href='mailto:feedback@blockbyte.de'>feedback@blockbyte.de</a>").insertAfter(t.opts.elm.feedback.form))})}),this.send=(()=>{let a=t.opts.elm.textarea.feedbackMsg[0].value,s=t.opts.elm.field.feedbackEmail[0].value,n=s.length>0&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s),o=a.length>0;if(n&&o){let n=+new Date,o=t.helper.template.loading().appendTo(t.opts.elm.body);t.opts.elm.body.addClass(t.opts.classes.loading);let r=new XMLHttpRequest;r.open("POST",t.opts.ajax.feedback,!0),r.onload=(()=>{e.delay(Math.max(0,1e3-(+new Date-n))).then(()=>{t.opts.elm.textarea.feedbackMsg[0].value="",t.opts.elm.field.feedbackEmail[0].value="",t.opts.elm.body.removeClass(t.opts.classes.loading),o.remove(),t.showSuccessMessage("feedback_sent_message")})});let l=new FormData;l.append("email",s),l.append("msg",a),l.append("extension",JSON.stringify({name:t.opts.manifest.name,version:t.opts.manifest.version})),r.send(l)}else n?o||t.opts.elm.textarea.feedbackMsg.addClass(t.opts.classes.error):t.opts.elm.field.feedbackEmail.addClass(t.opts.classes.error);e.delay(700).then(()=>{e("."+t.opts.classes.error).removeClass(t.opts.classes.error)})})},window.FormHelper=function(t){let a={};this.init=(()=>new Promise(e=>{s(),n().then(e)}));let s=()=>{t.opts.elm.tab.children("div").on("scroll",()=>{Object.values(t.opts.elm.color).forEach(e=>{e.data("picker").fit()})})},n=()=>new Promise(s=>{let n=t.opts.elm.formElement.length(),o=()=>{0===--n&&s()};t.opts.elm.formElement.forEach(s=>{let n={elm:s,type:e(s).attr(t.opts.attr.type),name:e(s).attr(t.opts.attr.name),i18n:e(s).attr(t.opts.attr.i18n)||""};e("<br />").insertAfter(s),n.label=e("<label />").attr(t.opts.attr.i18n,n.i18n).insertAfter(s),e("<p />").attr(t.opts.attr.i18n,n.i18n+"_desc").insertAfter(n.label),a[n.type]&&a[n.type](n).then(o),s.remove()})});a.color=(a=>new Promise(s=>{t.opts.elm.color[a.name]=e("<input type='text' />").addClass(t.opts.classes.color.field).insertAfter(a.label);let n=e("<span />").insertAfter(t.opts.elm.color[a.name]),o=new CP(t.opts.elm.color[a.name][0]);e(a.elm).attr(t.opts.attr.color.alpha)&&(o.alpha=e("<input type='range' />").attr({min:0,max:1,step:.01,value:1}).appendTo(o.picker),o.alpha.on("change input",()=>o.trigger("change"))),o.on("change",e=>{let s=CP._HSV2RGB(o.set());e&&(s=CP.HEX2RGB(e)),o.alpha&&o.alpha.css("background-image","linear-gradient(to right, transparent 0%, rgb("+s.join(",")+") 100%),url("+chrome.extension.getURL("img/settings/alpha.webp")+")"),s=o.alpha&&+o.alpha[0].value<1?"rgba("+s.join(",")+","+o.alpha[0].value+")":"rgb("+s.join(",")+")",t.opts.elm.color[a.name][0].value=s,t.opts.elm.color[a.name].trigger("change"),n.css("background-color",s)}),t.opts.elm.color[a.name].data("picker",o),s()})),a.font=(a=>new Promise(s=>{t.opts.elm.select[a.name]=e("<select />").insertAfter(a.label),chrome.fontSettings.getFontList(s=>{s.unshift({fontId:"default",displayName:t.helper.i18n.get("settings_font_family_default")}),s.forEach(s=>{0===t.opts.elm.select[a.name].children("option[value='"+s.fontId+"']").length()&&e("<option />").attr("value",s.fontId).text(s.displayName).appendTo(t.opts.elm.select[a.name])})}),s()})),a.language=(a=>new Promise(s=>{t.opts.elm.select[a.name]=e("<select />").insertAfter(a.label),e("<option />").attr("value","default").text(t.helper.i18n.get("settings_language_default")).appendTo(t.opts.elm.select[a.name]),t.helper.model.call("languageInfos").then(n=>{if(n&&n.infos){let s=Object.values(n.infos);s.sort((e,t)=>e.label>t.label?1:-1),s.forEach(s=>{s.available&&e("<option />").attr("value",s.name).text(s.label).appendTo(t.opts.elm.select[a.name])})}s()})})),a.textarea=(a=>new Promise(s=>{t.opts.elm.textarea[a.name]=e("<textarea />").insertAfter(a.label),s()})),a.text=a.email=(a=>new Promise(s=>{t.opts.elm.field[a.name]=e("<input type='"+a.type+"' />").insertAfter(a.label),["placeholder"].forEach(s=>{let n=e(a.elm).attr(t.opts.attr.field[s]);n&&t.opts.elm.field[a.name].attr(s,n)}),s()})),a.range=(a=>new Promise(s=>{t.opts.elm.range[a.name]=e("<input type='range' />").insertAfter(a.label),["min","max","step"].forEach(s=>{let n=e(a.elm).attr(t.opts.attr.range[s]);n&&t.opts.elm.range[a.name].attr(s,n)}),t.opts.elm.range[a.name].attr("value",e(a.elm).attr(t.opts.attr.value)||"");let n=e(a.elm).attr(t.opts.attr.range.unit)||"",o=e("<span />").insertAfter(t.opts.elm.range[a.name]);if(t.opts.elm.range[a.name].on("input change",s=>{let r=s.currentTarget,l=r.max||100,i=r.min||0,c=Math.round(100*(r.value-i)/(l-i)),p=t.opts.elm.range[a.name].css("background-image");if(0===p.search("linear-gradient")){let s=e(r).data("backgroundTemplate");void 0===s&&(s=p.replace(/\-1px/g,"{percent}"),e(r).data("backgroundTemplate",s)),t.opts.elm.range[a.name].css("background-image",s.replace(/\{percent\}/g,c+"%"))}o.text(r.value+n)}),t.opts.elm.range[a.name].trigger("input"),!0==!!e(a.elm).attr(t.opts.attr.range.infinity)){let s=t.helper.checkbox.get(t.opts.elm.body).insertAfter(o);e("<label />").attr(t.opts.attr.i18n,a.i18n+"_infinity").insertAfter(s),s.children("input[type='checkbox'").on("change",e=>{e.currentTarget.checked?t.opts.elm.range[a.name].addClass(t.opts.classes.range.inactive):t.opts.elm.range[a.name].removeClass(t.opts.classes.range.inactive)}),t.opts.elm.range[a.name].data("infinityCheckbox",s)}s()})),a.select=(a=>new Promise(s=>{t.opts.elm.select[a.name]=e("<select />").insertAfter(a.label),e(a.elm).children("span").forEach(s=>{e("<option />").attr({value:e(s).attr(t.opts.attr.value),[t.opts.attr.i18n]:e(s).attr(t.opts.attr.i18n)}).appendTo(t.opts.elm.select[a.name])}),s()})),a.checkbox=(e=>new Promise(a=>{t.opts.elm.checkbox[e.name]=t.helper.checkbox.get(t.opts.elm.body).insertAfter(e.label),a()}))},window.ImportExportHelper=function(t){this.init=(async()=>{n(),s()});let a=()=>{t.helper.model.call("trackEvent",{category:"settings",action:"import",label:"failed"}),alert(t.helper.i18n.get("settings_import_failed"))},s=async()=>{t.opts.elm.menuContainer.find("> ul > li > a["+t.opts.attr.name+"='import'] > input[type='file']").on("change",s=>{s.preventDefault();let n=s.currentTarget;if(n.files&&n.files[0]&&n.files[0].name.search(/\.config$/)>-1){let s=new FileReader;s.onload=(s=>{try{let n=JSON.parse(s.target.result);n.behaviour&&n.appearance?chrome.storage.sync.set({behaviour:n.behaviour,appearance:n.appearance},()=>{t.helper.model.call("trackEvent",{category:"settings",action:"import",label:"import"}),t.helper.model.call("refreshAllTabs",{type:"Settings"}),t.showSuccessMessage("import_saved"),e.delay(1500).then(()=>{location.reload(!0)})}):a()}catch(s){a()}}),s.readAsText(n.files[0])}else a()})},n=async()=>{let e=Object.assign({},t.helper.model.getAllData());delete e.utility,t.opts.elm.menuContainer.find("> ul > li > a["+t.opts.attr.name+"='export']").attr({href:"data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),download:"bookmark-sidebar.config"}).on("click",()=>{t.helper.model.call("trackEvent",{category:"settings",action:"export",label:"export"})})}},window.settings=function(){this.opts={classes:{page:{darkMode:"dark",ee:"ee"},tabs:{content:"tab",list:"tabBar",active:"active"},color:{field:"color"},range:{inactive:"inactive"},checkbox:{box:"checkbox",active:"active",clicked:"clicked",focus:"focus"},hidden:"hidden",configEntry:"configEntry",success:"success",error:"error",initLoading:"initLoading",loading:"loading",revert:"revert",visible:"visible",gotoFeedback:"gotoFeedback",action:"action",incomplete:"incomplete"},attr:{type:"data-type",appearance:"data-appearance",name:"data-name",i18n:"data-i18n",value:"data-value",tab:"data-tab",success:"data-successtext",style:"data-style",hideOnFalse:"data-hideOnFalse",classOnTrue:"data-classOnTrue",pos:"data-pos",bg:"data-bg",range:{min:"data-min",max:"data-max",step:"data-step",unit:"data-unit",infinity:"data-infinity"},color:{alpha:"data-alpha"},field:{placeholder:"data-placeholder"}},elm:{body:e("body"),title:e("head > title"),header:e("body > header"),content:e("section#content"),tab:e("section#content > div.tab"),contentTabs:e("ul.labels > li"),contentTabSections:e("ul.labels ~ div[data-name]"),keyboardShortcutInfo:e("p.shortcutInfo"),formElement:e("div.formElement"),menuLink:e("body > header > a"),menuContainer:e("section#menu"),appearance:{content:e("div.tab[data-name='appearance']"),backgroundChanger:e("menu.backgroundChanger > a")},contribute:{translationTabLink:e("div.tab[data-name='contribute'] ul.labels > li[data-type='translation'] > a"),translationTabContent:e("div.tab[data-name='contribute'] div[data-name='translation']"),action:e("div.tab[data-name='contribute'] a.action")},feedback:{form:e("section.form"),textarea:e("textarea#feedback"),email:e("input#feedbackEmail"),send:e("div.tab[data-name='feedback'] > header > button.save"),faq:e("div.faq")},button:{save:e("div.tab > header > button.save"),restore:e("div.tab > header > button.restore")},preview:{},checkbox:{},range:{},select:{},color:{},textarea:{},field:{}},events:{contentTabChanged:"blockbyte-bs-contentTabChanged"},ajax:{feedback:"https://blockbyte.de/ajax/extensions/feedback",translationInfo:"https://blockbyte.de/ajax/extensions/bs/i18n/info"},donateLink:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2VW2UADL99YEL",manifest:chrome.runtime.getManifest()},this.run=(()=>{t(),a(),this.helper.model.init().then(()=>this.helper.i18n.init()).then(()=>(this.helper.font.init(),this.helper.stylesheet.init(),this.helper.stylesheet.addStylesheets(["settings"],e(document)),n(),this.helper.form.init())).then(()=>(this.helper.template.footer().insertAfter(this.opts.elm.content),this.helper.i18n.parseHtml(document),this.opts.elm.title.text(this.opts.elm.title.text()+" - "+this.helper.i18n.get("extension_name")),this.opts.elm.button.restore.attr("title",this.helper.i18n.get("settings_restore")),Promise.all([this.helper.behaviour.init(),this.helper.appearance.init(),this.helper.feedback.init(),this.helper.contribute.init(),this.helper.importExport.init()]))).then(()=>{o(),s(),this.helper.model.call("trackPageView",{page:"/settings"}),this.opts.elm.body.removeClass(this.opts.classes.initLoading)})}),this.showSuccessMessage=(t=>{this.opts.elm.body.attr(this.opts.attr.success,this.helper.i18n.get("settings_"+t)),this.opts.elm.body.addClass(this.opts.classes.success),e.delay(1500).then(()=>{this.opts.elm.body.removeClass(this.opts.classes.success)})});let t=()=>{this.helper={model:new window.ModelHelper(this),checkbox:new window.CheckboxHelper(this),template:new window.TemplateHelper(this),i18n:new window.I18nHelper(this),font:new window.FontHelper(this),stylesheet:new window.StylesheetHelper(this),form:new window.FormHelper(this),behaviour:new window.BehaviourHelper(this),appearance:new window.AppearanceHelper(this),feedback:new window.FeedbackHelper(this),importExport:new window.ImportExportHelper(this),contribute:new window.ContributeHelper(this)}},a=()=>{this.opts.elm.header.prepend('<svg height="48" width="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>')},s=async()=>{this.opts.elm.contentTabs.children("a").on("click",t=>{t.preventDefault();let a=e(t.currentTarget).parent("li"),s=a.parents("div."+this.opts.classes.tabs.content).eq(0).attr(this.opts.attr.name),n=a.attr(this.opts.attr.type);a.siblings("li").removeClass(this.opts.classes.tabs.active),a.addClass(this.opts.classes.tabs.active),e(t.currentTarget).parents("ul").eq(0).siblings("div["+this.opts.attr.name+"]").forEach(t=>{e(t).attr(this.opts.attr.name)===n?e(t).removeClass(this.opts.classes.hidden):e(t).addClass(this.opts.classes.hidden)}),document.dispatchEvent(new CustomEvent(this.opts.events.contentTabChanged,{detail:{headerTab:s,contentTab:n},bubbles:!0,cancelable:!1}))}),this.opts.elm.contentTabSections.addClass(this.opts.classes.hidden),e.delay().then(()=>{this.opts.elm.contentTabs.forEach(t=>{e(t).hasClass(this.opts.classes.tabs.active)&&e(t).children("a").trigger("click")})})},n=()=>{let t=e("<ul />").addClass(this.opts.classes.tabs.list).prependTo(this.opts.elm.header);this.opts.elm.tab.forEach(a=>{let s=e(a).attr(this.opts.attr.name);e("<li />").attr(this.opts.attr.name,s).html("<a href='#'>"+this.helper.i18n.get("settings_tab_"+s)+"</a>").appendTo(t)}),t.find("> li > a").on("click",a=>{a.preventDefault(),t.children("li").removeClass(this.opts.classes.tabs.active);let s=e(a.currentTarget).parent("li"),n=s.attr(this.opts.attr.name);s.addClass(this.opts.classes.tabs.active),this.opts.elm.tab.forEach(t=>{e(t).attr(this.opts.attr.name)===n?e(t).removeClass(this.opts.classes.hidden):e(t).addClass(this.opts.classes.hidden)}),location.hash=n,this.opts.elm.body.attr(this.opts.attr.tab,n),this.helper.model.call("trackEvent",{category:"settings",action:"tab",label:n})});let a=location.hash?location.hash.substr(1):null;a?t.find("> li["+this.opts.attr.name+"='"+a+"'] > a").trigger("click"):t.find("> li > a").eq(0).trigger("click")},o=async()=>{e(document).on("click",()=>{this.opts.elm.menuContainer.removeClass(this.opts.classes.visible)}),this.opts.elm.menuLink.on("click",e=>{e.preventDefault(),e.stopPropagation(),this.opts.elm.menuContainer.addClass(this.opts.classes.visible)}),this.opts.elm.menuContainer.find("> ul > li > a["+this.opts.attr.name+"='close']").on("click",e=>{e.preventDefault(),window.close()}),this.opts.elm.button.save.on("click",e=>{switch(e.preventDefault(),this.opts.elm.body.attr(this.opts.attr.tab)){case"behaviour":this.helper.behaviour.save();break;case"appearance":this.helper.appearance.save();break;case"feedback":this.helper.feedback.send()}}),this.opts.elm.button.restore.on("click",t=>{t.preventDefault();let a=this.opts.elm.body.attr(this.opts.attr.tab);switch(a){case"behaviour":case"appearance":chrome.storage.sync.remove([a],()=>{this.helper.model.call("refreshAllTabs",{type:"Settings"}),this.showSuccessMessage("restored_message"),e.delay(1500).then(()=>{location.reload(!0)})})}})}},(new window.settings).run()})(jsu);