(this.webpackJsonpcra_skeleton=this.webpackJsonpcra_skeleton||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/heart.d56ecf48.png"},20:function(e,t,n){e.exports=n.p+"static/media/bobrov_alone.7e624139.jpg"},21:function(e,t,n){e.exports=n.p+"static/media/bobrov_happy.7b0df710.jpg"},29:function(e,t,n){e.exports=n(42)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(34);var o=n(7),l=n(27),s=n(12),m=n.n(s),u=function(){this.x=0,this.y=0,this.vy=0,this.vx=0,this.size=0,this.reset()},d=function(e){var t=e.setActive,n=(e.triggerCoords,e.fiesta,Object(a.useRef)(null)),c=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e,a=n.current,r=c.current,i=a.getContext("2d"),o=r.clientWidth,l=r.clientHeight,s=0,d=!1,f=[];function v(){if(i.clearRect(0,0,o,l),f.every((function(e){return e.y>l})))t(!1);else{for(s=0;s<f.length;s++){(e=f[s]).y+=e.vy,e.x+=e.vx,i.globalAlpha=e.o,i.beginPath();var n=new Image;n.src=m.a,i.drawImage(n,e.x,e.y,e.size,e.size),i.closePath(),i.fill()}window.requestAnimFrame(v)}}function h(){o=r.clientWidth,l=r.clientHeight,a.width=o,a.height=l;var e=d;d=!0,!e&&d&&window.requestAnimFrame(v)}return a.style.position="absolute",a.style.left=a.style.top="0",u.prototype.reset=function(){this.x=Math.random()*o,this.y=Math.random()*-l,this.vy=1+3*Math.random(),this.vx=.5-Math.random(),this.size=20*Math.random()+15},function(){for(f=[],s=0;s<100;s++)(e=new u).reset(),f.push(e)}(),window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},h(),window.addEventListener("resize",h,!1),function(){i.clearRect(0,0,o,l),window.removeEventListener("resize",h,!1)}}),[t]),r.a.createElement("section",{className:"sky",onClick:function(e){return console.log(e.clientX+" ",e.clientY)},ref:c},r.a.createElement("canvas",{ref:n}))},f=(n(35),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"give-me-love p3-3"},r.a.createElement("div",{className:"d-flex justify-content-center align-content-center"},r.a.createElement("div",{className:"",onClick:function(){return c(!0)}},r.a.createElement("div",{className:"blob"},r.a.createElement("img",{src:m.a,className:"love-button_gtm",alt:"*"}))))),n?r.a.createElement(d,{setActive:c}):null)}),v=(n(36),n(20)),h=n.n(v),E=n(21),g=n.n(E),p=function(e){var t=e.image;return r.a.createElement("div",{className:"photo-wrapper"},r.a.createElement("div",{className:"photo"},r.a.createElement("img",{src:t,alt:"Albert Einstein",className:"big"})))},w=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},r.a.createElement("div",{className:"p-3"},r.a.createElement("div",{className:""},r.a.createElement("h3",{className:"album__text"},"\u0414\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0441 \u0442\u043e\u0431\u043e\u0439 \u043c\u043e\u044f \u0436\u0438\u0437\u043d\u044c \u0431\u044b\u043b\u0430 \u0441\u0435\u0440\u043e\u0439 \u0438 \u043f\u0430\u0441\u043c\u0443\u0440\u043d\u043e\u0439"))),r.a.createElement("div",{className:"p-3"},r.a.createElement(p,{image:h.a}))),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between flex-row-reverse"},r.a.createElement("div",{className:""},r.a.createElement("h3",{className:"album__text"},"\u041d\u043e \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0432 \u0442\u0435\u0431\u044f \u044f \u0441\u0442\u0430\u043b \u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u043c !!!")),r.a.createElement("div",{className:"p-3"},r.a.createElement(p,{image:g.a})))))},b=function(){return r.a.createElement("div",{className:"home-view"},r.a.createElement(w,null),r.a.createElement(f,null))},y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found 404"))},N=function(e){return r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:b}),r.a.createElement(o.a,{component:y}))};var x=function(){return r.a.createElement("div",{className:"page"},r.a.createElement(N,null))},j=n(26),O=n(6),k=n(24),A=n(25),S=n(28),_=Object(O.combineReducers)({}),z=function(e,t){return _(e,t)},F=function(){try{var e=localStorage.getItem("reduxState");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),M=Object(O.createStore)(z,F,Object(A.composeWithDevTools)(Object(O.applyMiddleware)(k.a)));M.subscribe((function(){!function(e){try{var t=JSON.stringify(Object(S.a)({},e));localStorage.setItem("reduxState",t)}catch(n){new Error(n)}}(M.getState())}));var R=M,q=n(14);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j.a,{store:R},r.a.createElement(q.a,{basename:"/bobrovy"},r.a.createElement(x,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1256850a.chunk.js.map