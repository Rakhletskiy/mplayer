(this.webpackJsonpmplayer=this.webpackJsonpmplayer||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"data":[{"id":"1","description":"Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\\n\\nLicensed under the Creative Commons Attribution license\\nhttp://www.bigbuckbunny.org","sources":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","subtitle":"By Blender Foundation","thumb":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg","title":"Big Buck Bunny"},{"id":"2","description":"The first Blender Open Movie from 2006","sources":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4","subtitle":"By Blender Foundation","thumb":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg","title":"Elephant Dream"},{"id":"3","description":"HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.","sources":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4","subtitle":"By Google","thumb":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg","title":"For Bigger Blazes"},{"id":"4","description":"Introducing Chromecast. The easiest way to enjoy online video and music on your TV\u2014for when Batman\'s escapes aren\'t quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.","sources":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4","subtitle":"By Google","thumb":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg","title":"For Bigger Escape"},{"id":"5","description":"Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.","sources":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4","subtitle":"By Google","thumb":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg","title":"For Bigger Fun"},{"id":"6","description":"Introducing Chromecast. The easiest way to enjoy online video and music on your TV\u2014for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.","sources":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4","subtitle":"By Google","thumb":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg","title":"For Bigger Joyrides"}]}')},,,,,,,,function(e,t,n){e.exports=n(42)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(5),c=n.n(r),i=n(1),l=(n(15),n(16),n(17),n(9)),s=n.n(l),u=(n(33),n(34),function(e){var t=e.thumb,n=e.id,o=e.catchVideoId;return a.a.createElement("div",{className:"slider-item",onClick:function(){return o(n)}},a.a.createElement("img",{src:t,alt:"Video preview"}))}),m=function(e){return a.a.createElement("i",{onClick:e.onClick,className:"material-icons slider-arrow arrow-next"},"keyboard_arrow_right")},d=function(e){return a.a.createElement("i",{onClick:e.onClick,className:"material-icons slider-arrow arrow-prev"},"keyboard_arrow_left")},g=function(e){var t={infinite:!0,initialSlide:e.savedVideo-1||2,speed:500,slidesToShow:3,slidesToScroll:1,centerMode:!0,focusOnSelect:!0,nextArrow:a.a.createElement(m,null),prevArrow:a.a.createElement(d,null)},n=e.data,o=e.catchVideoId;return a.a.createElement("div",{className:"menu"},a.a.createElement(s.a,t,n.map((function(e){return a.a.createElement(u,{id:e.id,thumb:e.thumb,key:e.id,catchVideoId:o})}))),a.a.createElement("div",{className:"slider-arrow-bottom"},a.a.createElement("i",{className:"material-icons"},"arrow_drop_up")))},p=(n(35),function(e,t){var n=e,o=t,a=n/60,r=a.toString().substr(0,a.toString().indexOf("."))||0,c=Math.round(n%60).toString()||0;return{s:c=parseInt(c)<10?"0".concat(c):c,m:r=parseInt(r)<10?"0".concat(r):r,timePercentage:n/o*100||null}}),v=function(e){function t(){document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||(e(!1),(document.webkitExitFullscreen||document.mozExitFullscreen||document.msExitFullscreen||document.oExitFullscreen).call(document),window.scrollBy(0,1500))}return document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t),document.addEventListener("mozfullscreenchange",t),document.addEventListener("MSFullscreenChange",t),t},f=(n(36),n(37),function(e){var t=e.titleData,n=e.controlsHidden,o=e.isVolumeChange,r=e.volume;return a.a.createElement("div",{className:"controls-top"},a.a.createElement("div",{className:n?"title-wrapper controls-hide":"title-wrapper"},a.a.createElement("div",{className:"title video-title"},t[0]),a.a.createElement("div",{className:"title video-subtitle"},t[1])),a.a.createElement("div",{className:o?"volume-percentage fade":"volume-percentage"},r,"%"))}),h=(n(38),function(e){var t=e.setIsPlayButtonHover,n=e.playVideo,o=e.isPlayButtonHover;return a.a.createElement("div",{className:"pause-button-big-wrapper"},o?a.a.createElement("i",{className:"material-icons pause-button-big hovered",onClick:function(){n(),t(!1)},onMouseLeave:function(){return t(!1)}},"play_circle_filled"):a.a.createElement("i",{className:"material-icons pause-button-big",onMouseEnter:function(){return t(!0)}},"play_circle_outline"))}),b=(n(39),function(e){var t=e.controlsHidden,n=e.isMuted,o=e.isPlaying,r=e.progressLine,c=e.volume,i=e.mute,l=e.durationTime,s=e.playVideo,u=e.playTime,m=e.recognizeClick,d=e.setControlsHidden,g=e.resize,p=e.hoverProgressLine,v=e.hoveredTime,f=e.positionHoveredTime;return a.a.createElement("div",{className:t?"controls-bottom controls-hide":"controls-bottom",onMouseOut:function(){return d(!0)},onMouseOver:function(){setTimeout((function(){d(!1)}),200)}},a.a.createElement("div",{className:"controls-button play-button"},o?a.a.createElement("i",{className:"material-icons",onClick:function(){return s()}},"pause"):a.a.createElement("i",{className:"material-icons",onClick:function(){return s()}},"play_arrow")),a.a.createElement("span",{className:"time start-time"},u),a.a.createElement("div",{className:"line-wrapper",id:"line-wrapper",onClick:function(e){return m(e,"progressLine")},onMouseMove:function(e){return p(e)}},a.a.createElement("div",{className:o?"line-inner line-inner-ease":"line-inner",style:{width:"".concat(r,"%")}}),a.a.createElement("div",{className:"hovered-time",style:{left:"".concat(f-20,"px")}},v)),a.a.createElement("span",{className:"time end-time"},l),a.a.createElement("div",{className:"controls-button volume"},n||0===c?a.a.createElement("i",{className:"material-icons",onClick:function(){return i()}},"volume_off"):a.a.createElement("i",{className:"material-icons",onClick:function(){return i()}},"volume_up"),a.a.createElement("div",{className:"volume-control-wrapper"},a.a.createElement("div",{className:"volume-control-inner",id:"volume-control-inner",onClick:function(e){return m(e,"volume")}},a.a.createElement("div",{className:"volume-control",style:{height:"".concat(c,"%")},id:"volume-control"})))),a.a.createElement("div",{className:"controls-button resize"},a.a.createElement("i",{className:"material-icons",onClick:function(){return g()}},"fullscreen")))}),y=(n(40),function(){return a.a.createElement("div",{className:"loader-wrapper"},a.a.createElement("div",{className:"lds-ring"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)))}),E=function(e){var t=e.titleData,n=e.canPlay,o=e.controlsHidden,r=e.isMuted,c=e.isPlaying,i=e.isPlayButtonHover,l=e.isVolumeChange,s=e.progressLine,u=e.volume,m=e.mute,d=e.durationTime,g=e.playVideo,p=e.playTime,v=e.recognizeClick,E=e.setControlsHidden,k=e.setIsPlayButtonHover,w=e.resize,B=e.handleClick,C=e.handleDoubleClick,j=e.hoveredTime,O=e.positionHoveredTime,N=e.hoverProgressLine;return a.a.createElement("div",{className:"controls"},!n&&a.a.createElement(y,null),a.a.createElement("div",{className:"controls-clickable",onMouseMove:function(){E(!1),setTimeout((function(){E(!0)}),200)},onClick:B.bind(void 0),onDoubleClick:C.bind(void 0)},a.a.createElement(f,{titleData:t,controlsHidden:o,isVolumeChange:l,volume:u}),!c&&a.a.createElement(h,{playVideo:g,setIsPlayButtonHover:k,isPlayButtonHover:i})),a.a.createElement(b,{controlsHidden:o,isMuted:r,isPlaying:c,progressLine:s,volume:u,mute:m,durationTime:d,playVideo:g,playTime:p,recognizeClick:v,setControlsHidden:E,resize:w,hoverProgressLine:N,hoveredTime:j,positionHoveredTime:O}))},k=function(e){Object(o.useEffect)((function(){re.current.onmousemove=function(){A(!1)},ce.current.focus(),re.current.oncanplaythrough=function(){W(!0)},re.current.onloadedmetadata=function(){var e=p(re.current.duration);S("".concat(e.m,":").concat(e.s))},re.current.onloadeddata=function(){var e=parseInt(localStorage.getItem("savedCurrentTime"));re.current.currentTime=e||0,W(!0)},re.current.ontimeupdate=function(){var e=p(re.current.currentTime,re.current.duration);z(e.timePercentage),P("".concat(e.m,":").concat(e.s)),localStorage.setItem("savedCurrentTime",re.current.currentTime)},re.current.onended=function(){c(!1)},1===re.current.readyState&&r||2===re.current.readyState&&r?W(!1):W(!0)}));var t=Object(o.useState)(!1),n=Object(i.a)(t,2),r=n[0],c=n[1],l=Object(o.useState)(!1),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(o.useState)(75),g=Object(i.a)(d,2),f=g[0],h=g[1],b=Object(o.useState)(!1),y=Object(i.a)(b,2),k=y[0],w=y[1],B=Object(o.useState)(!1),C=Object(i.a)(B,2),j=C[0],O=C[1],N=Object(o.useState)(null),T=Object(i.a)(N,2),F=T[0],S=T[1],I=Object(o.useState)("00:00"),V=Object(i.a)(I,2),H=V[0],P=V[1],L=Object(o.useState)(0),M=Object(i.a)(L,2),x=M[0],z=M[1],D=Object(o.useState)(!1),_=Object(i.a)(D,2),R=_[0],G=_[1],J=Object(o.useState)(!1),q=Object(i.a)(J,2),$=q[0],A=q[1],X=Object(o.useState)(!1),Y=Object(i.a)(X,2),K=Y[0],W=Y[1],Q=Object(o.useState)(null),U=Object(i.a)(Q,2),Z=U[0],ee=U[1],te=Object(o.useState)(null),ne=Object(i.a)(te,2),oe=ne[0],ae=ne[1],re=Object(o.useRef)(null),ce=Object(o.useRef)(null);Object(o.useEffect)((function(){z(0),c(!1)}),[e.currVideo]),Object(o.useEffect)((function(){O(!j),setTimeout((function(){O(!0)}),100)}),[f]);var ie=function(){c(!r),r?(re.current.pause(),A(!1)):(re.current.play(),A(!0))},le=function(){if(u){if(u){(document.webkitExitFullscreen||document.mozExitFullscreen||document.msExitFullscreen||document.oExitFullscreen).call(document)}}else(ce.current.webkitRequestFullscreen||ce.current.mozRequestFullScreen||ce.current.msRequestFullscreen||ce.current.oRequestFullscreen).call(ce.current);m(!u)},se=0,ue=!1;v(m);var me=e.currVideo,de=e.titleData;return a.a.createElement("div",{className:"player-block"},a.a.createElement("div",{ref:ce,onKeyDown:function(e){return function(e){switch(e.keyCode){case 38:e.preventDefault();var t=f<=95?f+5:100;h(t),re.current.volume=t/100;break;case 40:e.preventDefault();var n=f>=5?f-5:0;h(n),re.current.volume=n/100;break;case 32:G(!1),e.preventDefault(),re.current.play&&ie();break;case 39:re.current.currentTime=re.current.currentTime+5;break;case 37:re.current.currentTime=re.current.currentTime-5}}(e)},tabIndex:"0",className:u?"fullscreen":"video-wrapper"},a.a.createElement("video",{ref:re,className:"video",style:{objectFit:"cover"},src:me}),a.a.createElement(E,{titleData:de,canPlay:K,controlsHidden:$,isMuted:k,isPlaying:r,isPlayButtonHover:R,isVolumeChange:j,progressLine:x,volume:f,mute:function(){w(!k),k?(re.current.muted=!1,h(35)):(re.current.muted=!0,h(0))},durationTime:F,playVideo:ie,playTime:H,recognizeClick:function(e,t){if("volume"===t){var n=document.getElementById("volume-control-inner").getBoundingClientRect(),o=e.clientY,a=1-(n.top-o)/85*-1;h(Math.round(100*a)),re.current.volume=a}else if("progressLine"===t){var r=document.getElementById("line-wrapper").getBoundingClientRect().left,c=document.getElementById("line-wrapper").getBoundingClientRect().right-r,i=(e.clientX-r)/c;z(100*i);var l=i*re.current.duration;re.current.currentTime=l}},setControlsHidden:A,setIsPlayButtonHover:G,resize:le,handleClick:function(){se=setTimeout((function(){ue||ie(),ue=!1}),300)},handleDoubleClick:function(){clearTimeout(se),ue=!0,le()},hoverProgressLine:function(e){var t=document.getElementById("line-wrapper").getBoundingClientRect().left,n=document.getElementById("line-wrapper").getBoundingClientRect().right-t,o=e.clientX-t,a=p(re.current.duration*o/n);ae(o),ee("".concat(a.m,":").concat(a.s))},hoveredTime:Z,positionHoveredTime:oe})))},w=(n(41),{"--color-main":"#ff2c2c","--color-secondary":"#0c0c0c","--color-bg":"#0c0c0c","--color-text":"#fff"}),B={"--color-main":"#ec174f","--color-secondary":"#808080","--color-bg":"#1a143a","--color-text":"#fff"},C=function(){Object(o.useEffect)((function(){var e=localStorage.getItem("theme");l(e||n)}));var e=a.a.useState("pink"),t=Object(i.a)(e,2),n=t[0],r=t[1],c=function(e){var t="pink"===e?"pink":"red";localStorage.setItem("theme",t),r(t),l(t)},l=function(e){var t="red"===e?B:w;Object.keys(t).forEach((function(e){var n=t[e];document.documentElement.style.setProperty(e,n)}))};return a.a.createElement("div",{className:"main-title-wrapper"},a.a.createElement("div",{className:"main-title"},"MPlayer"),a.a.createElement("button",{className:"btn-switch-theme theme-1",onClick:function(){return c("red")}}),a.a.createElement("button",{className:"btn-switch-theme theme-2",onClick:function(){return c("pink")}}))},j=n(2);var O=function(){var e=parseInt(localStorage.getItem("savedVideo")),t=Object(o.useState)(j.data[e-1||2].sources),n=Object(i.a)(t,2),r=n[0],c=n[1],l=Object(o.useState)([j.data[e-1||2].title,j.data[e-1||2].subtitle]),s=Object(i.a)(l,2),u=s[0],m=s[1];return a.a.createElement("div",{className:"app"},a.a.createElement(C,null),a.a.createElement(g,{data:j.data,catchVideoId:function(e){j.data.forEach((function(t){t.id===e&&(c(t.sources),m([t.title,t.subtitle]),localStorage.setItem("savedVideo",e))}))},savedVideo:e}),a.a.createElement(k,{currVideo:r,titleData:u}))};c.a.render(a.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.a82a4a41.chunk.js.map