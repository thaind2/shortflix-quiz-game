var Ie=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);import{r as b,a as je,d as S,m as B,A as oe,R as ke}from"./vendor-d11206d1.js";var lr=Ie((hr,Q)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))p(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const C of u.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&p(C)}).observe(document,{childList:!0,subtree:!0});function o(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function p(c){if(c.ep)return;c.ep=!0;const u=o(c);fetch(c.href,u)}})();var ie={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=b,Ae=Symbol.for("react.element"),Be=Symbol.for("react.fragment"),Ne=Object.prototype.hasOwnProperty,Le=Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_e={key:!0,ref:!0,__self:!0,__source:!0};function se(n,t,o){var p,c={},u=null,C=null;o!==void 0&&(u=""+o),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(C=t.ref);for(p in t)Ne.call(t,p)&&!_e.hasOwnProperty(p)&&(c[p]=t[p]);if(n&&n.defaultProps)for(p in t=n.defaultProps,t)c[p]===void 0&&(c[p]=t[p]);return{$$typeof:Ae,type:n,key:u,ref:C,props:c,_owner:Le.current}}W.Fragment=Be;W.jsx=se;W.jsxs=se;ie.exports=W;var g=ie.exports,K={},ne=je;K.createRoot=ne.createRoot,K.hydrateRoot=ne.hydrateRoot;const G=30,Ue=100,ze=3,qe=n=>{const[t,o]=b.useState({score:0,currentQuestion:0,timeRemaining:G,isGameOver:!1});b.useEffect(()=>{o(c=>({...c,timeRemaining:G}))},[t.currentQuestion]),b.useEffect(()=>{if(t.isGameOver)return;const c=setInterval(()=>{o(u=>u.timeRemaining<=0?u.currentQuestion<n.length-1?{...u,currentQuestion:u.currentQuestion+1,timeRemaining:G}:{...u,isGameOver:!0}:{...u,timeRemaining:u.timeRemaining-1})},1e3);return()=>clearInterval(c)},[t.isGameOver,n.length]);const p=b.useCallback(c=>{const u=n[t.currentQuestion],C=c===u.correctAnswer;o(R=>{const T=C?R.score+Ue+R.timeRemaining*ze:R.score;return R.currentQuestion<n.length-1?{...R,score:T,currentQuestion:R.currentQuestion+1,timeRemaining:G}:{...R,score:T,isGameOver:!0}})},[t.currentQuestion,n]);return{gameState:t,answerQuestion:p}},ce=()=>{const n=new(window.AudioContext||window.webkitAudioContext),t=b.useCallback((I,k)=>{const U=n.createOscillator(),E=n.createGain();U.connect(E),E.connect(n.destination),U.type="sine",U.frequency.value=I,E.gain.setValueAtTime(.7,n.currentTime),E.gain.exponentialRampToValueAtTime(.01,n.currentTime+k),U.start(n.currentTime),U.stop(n.currentTime+k)},[n]),o=b.useCallback(I=>{I.forEach(k=>{setTimeout(()=>{t(k.freq,k.duration)},k.delay)})},[t]),p=b.useCallback(()=>{o([{freq:880,duration:.15,delay:0},{freq:1108.73,duration:.2,delay:150}])},[o]),c=b.useCallback(()=>{o([{freq:440,duration:.2,delay:0},{freq:349.23,duration:.3,delay:200}])},[o]),u=b.useCallback(()=>{o([{freq:523.25,duration:.15,delay:0},{freq:659.25,duration:.15,delay:150},{freq:783.99,duration:.3,delay:300}])},[o]),C=b.useCallback(()=>{o([{freq:783.99,duration:.2,delay:0},{freq:659.25,duration:.2,delay:200},{freq:523.25,duration:.4,delay:400}])},[o]),R=b.useCallback(()=>{o([{freq:523.25,duration:.15,delay:0},{freq:659.25,duration:.15,delay:150},{freq:783.99,duration:.15,delay:300},{freq:1046.5,duration:.4,delay:450}])},[o]),T=b.useCallback(()=>{o([{freq:660,duration:.05,delay:0}])},[o]),j=b.useCallback(()=>{o([{freq:1200,duration:.03,delay:0}])},[o]),_=b.useCallback(()=>{o([{freq:987.77,duration:.1,delay:0},{freq:1318.51,duration:.1,delay:100},{freq:1567.98,duration:.3,delay:200}])},[o]);return{playCorrect:p,playWrong:c,playGameStart:u,playGameOver:C,playCongratulations:R,playTick:T,playHover:j,playReward:_}};var Q={};(function n(t,o,p,c){var u=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),C=typeof Path2D=="function"&&typeof DOMMatrix=="function",R=function(){if(!t.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var a=r.transferToImageBitmap();try{e.createPattern(a,"no-repeat")}catch{return!1}return!0}();function T(){}function j(r){var e=o.exports.Promise,a=e!==void 0?e:t.Promise;return typeof a=="function"?new a(r):(r(T,T),null)}var _=function(r,e){return{transform:function(a){if(r)return a;if(e.has(a))return e.get(a);var s=new OffscreenCanvas(a.width,a.height),l=s.getContext("2d");return l.drawImage(a,0,0),e.set(a,s),s},clear:function(){e.clear()}}}(R,new Map),I=function(){var r=Math.floor(16.666666666666668),e,a,s={},l=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(d){var h=Math.random();return s[h]=requestAnimationFrame(function i(m){l===m||l+r-1<m?(l=m,delete s[h],d()):s[h]=requestAnimationFrame(i)}),h},a=function(d){s[d]&&cancelAnimationFrame(s[d])}):(e=function(d){return setTimeout(d,r)},a=function(d){return clearTimeout(d)}),{frame:e,cancel:a}}(),k=function(){var r,e,a={};function s(l){function d(h,i){l.postMessage({options:h||{},callback:i})}l.init=function(i){var m=i.transferControlToOffscreen();l.postMessage({canvas:m},[m])},l.fire=function(i,m,v){if(e)return d(i,null),e;var x=Math.random().toString(36).slice(2);return e=j(function(w){function M(O){O.data.callback===x&&(delete a[x],l.removeEventListener("message",M),e=null,_.clear(),v(),w())}l.addEventListener("message",M),d(i,x),a[x]=M.bind(null,{data:{callback:x}})}),e},l.reset=function(){l.postMessage({reset:!0});for(var i in a)a[i](),delete a[i]}}return function(){if(r)return r;if(!p&&u){var l=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([l])))}catch(d){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",d),null}s(r)}return r}}(),U={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(r,e){return e?e(r):r}function D(r){return r!=null}function y(r,e,a){return E(r&&D(r[e])?r[e]:U[e],a)}function N(r){return r<0?0:Math.floor(r)}function H(r,e){return Math.floor(Math.random()*(e-r))+r}function $(r){return parseInt(r,16)}function le(r){return r.map(ue)}function ue(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:$(e.substring(0,2)),g:$(e.substring(2,4)),b:$(e.substring(4,6))}}function de(r){var e=y(r,"origin",Object);return e.x=y(e,"x",Number),e.y=y(e,"y",Number),e}function he(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function me(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function fe(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function ge(r,e,a,s,l,d,h,i,m){r.save(),r.translate(e,a),r.rotate(d),r.scale(s,l),r.arc(0,0,1,h,i,m),r.restore()}function pe(r){var e=r.angle*(Math.PI/180),a=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function ye(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,l=e.y+e.random*e.tiltSin,d=e.wobbleX+e.random*e.tiltCos,h=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",r.beginPath(),C&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(be(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(d-s)*.1,Math.abs(h-l)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var i=Math.PI/10*e.wobble,m=Math.abs(d-s)*.1,v=Math.abs(h-l)*.1,x=e.shape.bitmap.width*e.scalar,w=e.shape.bitmap.height*e.scalar,M=new DOMMatrix([Math.cos(i)*m,Math.sin(i)*m,-Math.sin(i)*v,Math.cos(i)*v,e.x,e.y]);M.multiplySelf(new DOMMatrix(e.shape.matrix));var O=r.createPattern(_.transform(e.shape.bitmap),"no-repeat");O.setTransform(M),r.globalAlpha=1-a,r.fillStyle=O,r.fillRect(e.x-x/2,e.y-w/2,x,w),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(d-s)*e.ovalScalar,Math.abs(h-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):ge(r,e.x,e.y,Math.abs(d-s)*e.ovalScalar,Math.abs(h-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var f=Math.PI/2*3,P=4*e.scalar,F=8*e.scalar,A=e.x,z=e.y,q=5,L=Math.PI/q;q--;)A=e.x+Math.cos(f)*F,z=e.y+Math.sin(f)*F,r.lineTo(A,z),f+=L,A=e.x+Math.cos(f)*P,z=e.y+Math.sin(f)*P,r.lineTo(A,z),f+=L;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(l)),r.lineTo(Math.floor(d),Math.floor(h)),r.lineTo(Math.floor(s),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function ve(r,e,a,s,l){var d=e.slice(),h=r.getContext("2d"),i,m,v=j(function(x){function w(){i=m=null,h.clearRect(0,0,s.width,s.height),_.clear(),l(),x()}function M(){p&&!(s.width===c.width&&s.height===c.height)&&(s.width=r.width=c.width,s.height=r.height=c.height),!s.width&&!s.height&&(a(r),s.width=r.width,s.height=r.height),h.clearRect(0,0,s.width,s.height),d=d.filter(function(O){return ye(h,O)}),d.length?i=I.frame(M):w()}i=I.frame(M),m=w});return{addFettis:function(x){return d=d.concat(x),v},canvas:r,promise:v,reset:function(){i&&I.cancel(i),m&&m()}}}function X(r,e){var a=!r,s=!!y(e||{},"resize"),l=!1,d=y(e,"disableForReducedMotion",Boolean),h=u&&!!y(e||{},"useWorker"),i=h?k():null,m=a?he:me,v=r&&i?!!r.__confetti_initialized:!1,x=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,w;function M(f,P,F){for(var A=y(f,"particleCount",N),z=y(f,"angle",Number),q=y(f,"spread",Number),L=y(f,"startVelocity",Number),Me=y(f,"decay",Number),Ce=y(f,"gravity",Number),Re=y(f,"drift",Number),ee=y(f,"colors",le),Te=y(f,"ticks",Number),re=y(f,"shapes"),Oe=y(f,"scalar"),Ee=!!y(f,"flat"),te=de(f),ae=A,Z=[],Se=r.width*te.x,Pe=r.height*te.y;ae--;)Z.push(pe({x:Se,y:Pe,angle:z,spread:q,startVelocity:L,color:ee[ae%ee.length],shape:re[H(0,re.length)],ticks:Te,decay:Me,gravity:Ce,drift:Re,scalar:Oe,flat:Ee}));return w?w.addFettis(Z):(w=ve(r,Z,m,P,F),w.promise)}function O(f){var P=d||y(f,"disableForReducedMotion",Boolean),F=y(f,"zIndex",Number);if(P&&x)return j(function(L){L()});a&&w?r=w.canvas:a&&!r&&(r=fe(F),document.body.appendChild(r)),s&&!v&&m(r);var A={width:r.width,height:r.height};i&&!v&&i.init(r),v=!0,i&&(r.__confetti_initialized=!0);function z(){if(i){var L={getBoundingClientRect:function(){if(!a)return r.getBoundingClientRect()}};m(L),i.postMessage({resize:{width:L.width,height:L.height}});return}A.width=A.height=null}function q(){w=null,s&&(l=!1,t.removeEventListener("resize",z)),a&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,v=!1)}return s&&!l&&(l=!0,t.addEventListener("resize",z,!1)),i?i.fire(f,A,q):M(f,A,q)}return O.reset=function(){i&&i.reset(),w&&w.reset()},O}var V;function Y(){return V||(V=X(null,{useWorker:!0,resize:!0})),V}function be(r,e,a,s,l,d,h){var i=new Path2D(r),m=new Path2D;m.addPath(i,new DOMMatrix(e));var v=new Path2D;return v.addPath(m,new DOMMatrix([Math.cos(h)*l,Math.sin(h)*l,-Math.sin(h)*d,Math.cos(h)*d,a,s])),v}function we(r){if(!C)throw new Error("path confetti are not supported in this browser");var e,a;typeof r=="string"?e=r:(e=r.path,a=r.matrix);var s=new Path2D(e),l=document.createElement("canvas"),d=l.getContext("2d");if(!a){for(var h=1e3,i=h,m=h,v=0,x=0,w,M,O=0;O<h;O+=2)for(var f=0;f<h;f+=2)d.isPointInPath(s,O,f,"nonzero")&&(i=Math.min(i,O),m=Math.min(m,f),v=Math.max(v,O),x=Math.max(x,f));w=v-i,M=x-m;var P=10,F=Math.min(P/w,P/M);a=[F,0,0,F,-Math.round(w/2+i)*F,-Math.round(M/2+m)*F]}return{type:"path",path:e,matrix:a}}function xe(r){var e,a=1,s="#000000",l='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,a="scalar"in r?r.scalar:a,l="fontFamily"in r?r.fontFamily:l,s="color"in r?r.color:s);var d=10*a,h=""+d+"px "+l,i=new OffscreenCanvas(d,d),m=i.getContext("2d");m.font=h;var v=m.measureText(e),x=Math.ceil(v.actualBoundingBoxRight+v.actualBoundingBoxLeft),w=Math.ceil(v.actualBoundingBoxAscent+v.actualBoundingBoxDescent),M=2,O=v.actualBoundingBoxLeft+M,f=v.actualBoundingBoxAscent+M;x+=M+M,w+=M+M,i=new OffscreenCanvas(x,w),m=i.getContext("2d"),m.font=h,m.fillStyle=s,m.fillText(e,O,f);var P=1/a;return{type:"bitmap",bitmap:i.transferToImageBitmap(),matrix:[P,0,0,P,-x*P/2,-w*P/2]}}o.exports=function(){return Y().apply(this,arguments)},o.exports.reset=function(){Y().reset()},o.exports.create=X,o.exports.shapeFromPath=we,o.exports.shapeFromText=xe})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Q,!1);const Qe=Q.exports;Q.exports.create;const Ge=S(B.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1000;
`,We=S(B.div)`
  font-size: 3rem;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`,J=({type:n,onComplete:t})=>{b.useEffect(()=>{if(["correct","gameOver","reward","congratulations"].includes(n)){const c=n==="gameOver"?3e3:1e3;Qe({particleCount:n==="gameOver"?200:50,spread:70,origin:{y:.6},colors:n==="reward"||n==="congratulations"?["#FFD700","#FFA500","#FF8C00"]:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!0}),t&&setTimeout(t,c)}},[n,t]);const o={start:{scale:[0,1.2,1],opacity:[0,1,0],transition:{duration:1.5}},correct:{scale:[0,1.2,1],opacity:[0,1,0],transition:{duration:1}},wrong:{scale:[0,1.1,1],opacity:[0,1,0],transition:{duration:1}},gameOver:{scale:[0,1.2,1],opacity:[0,1,0],transition:{duration:2}},reward:{scale:[0,1.3,1],opacity:[0,1,0],transition:{duration:1.5}},congratulations:{scale:[0,1.4,1],opacity:[0,1,0],transition:{duration:2}}},p={start:"Bắt đầu!",correct:"Đúng!",wrong:"Sai!",gameOver:"Kết thúc!",reward:"Phần thưởng!",congratulations:"Chúc mừng!"};return g.jsx(Ge,{children:g.jsx(We,{initial:{scale:0,opacity:0},animate:o[n],onAnimationComplete:t,children:p[n]})})},De=S.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,He=S(B.div)`
  margin-bottom: 2rem;
`,$e=S.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
`,Ve=S(B.button)`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 8px;
  background: ${n=>n.$isCorrect?"#4caf50":n.$isWrong?"#f44336":"rgba(255, 255, 255, 0.1)"};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: ${n=>n.$isCorrect||n.$isWrong?1:.5};
  }
`,Ze=S(B.div)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: right;
`,Ke=S.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
`,Je=S.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${n=>n.timeRemaining<=5?"#ff5252":"white"};
`,Xe=S.div`
  height: 4px;
  background: #ff5252;
  border-radius: 2px;
  width: ${n=>n.timeRemaining/30*100}%;
  transition: width 1s linear;
  margin-bottom: 2rem;
`,Ye=({questions:n,onGameComplete:t})=>{const{gameState:o,answerQuestion:p}=qe(n),{playCorrect:c,playWrong:u}=ce(),[C,R]=b.useState(null),[T,j]=b.useState(!1),[_,I]=b.useState(null),[k,U]=b.useState(!0),E=n[o.currentQuestion];b.useEffect(()=>{k&&(I("start"),U(!1))},[k]);const D=async y=>{if(T)return;R(y),j(!0);const N=y===E.correctAnswer;I(N?"correct":"wrong"),N?c():u(),await new Promise(H=>setTimeout(H,1e3)),p(y),R(null),j(!1),I(null)};return b.useEffect(()=>{o.isGameOver&&(I("gameOver"),setTimeout(()=>{t(o.score)},1500))},[o.isGameOver,o.score,t]),!E||o.isGameOver?_==="gameOver"?g.jsx(J,{type:"gameOver"}):null:g.jsxs(g.Fragment,{children:[g.jsxs(De,{children:[g.jsxs(Ze,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},children:["Điểm: ",o.score]}),g.jsxs(Ke,{children:["Câu hỏi ",o.currentQuestion+1,"/",n.length]}),g.jsxs(Je,{timeRemaining:o.timeRemaining,children:[o.timeRemaining,"s"]}),g.jsx(Xe,{timeRemaining:o.timeRemaining}),g.jsx(oe,{mode:"wait",children:g.jsxs(He,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:[g.jsx($e,{children:E.text}),E.imageUrl&&g.jsx(B.img,{src:E.imageUrl,alt:"Question context",style:{width:"100%",marginBottom:"1.5rem",borderRadius:"8px",objectFit:"cover",maxHeight:"300px"},initial:{opacity:0},animate:{opacity:1},transition:{delay:.3}}),E.options.map((y,N)=>g.jsx(Ve,{onClick:()=>D(N),disabled:T,$isCorrect:T&&N===E.correctAnswer,$isWrong:T&&C===N&&N!==E.correctAnswer,whileHover:{scale:T?1:1.02},whileTap:{scale:T?1:.98},children:y},N))]},E.id)})]}),_&&g.jsx(J,{type:_,onComplete:()=>I(null)})]})},er=S(B.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`,rr=S(B.div)`
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
  color: #4caf50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`,tr=S(B.div)`
  background: rgba(255, 215, 0, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  margin: 2rem 0;
  border: 2px solid rgba(255, 215, 0, 0.3);
`,ar=S.h3`
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,nr=S(B.button)`
  background: #2196f3;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background: #1976d2;
  }
`,or=({score:n,reward:t,onPlayAgain:o})=>{const[p,c]=b.useState(null),{playCongratulations:u,playReward:C}=ce();return b.useEffect(()=>{if(c("congratulations"),u(),t){const R=setTimeout(()=>{c("reward"),C()},2e3);return()=>clearTimeout(R)}},[t,u,C]),g.jsxs(g.Fragment,{children:[g.jsxs(er,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[g.jsx("h2",{children:"Chúc mừng bạn đã hoàn thành!"}),g.jsxs(rr,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:200,damping:10},children:[n," điểm"]}),g.jsx(oe,{children:t&&g.jsxs(tr,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},children:[g.jsx(ar,{children:"🎉 Chúc mừng! Bạn đã nhận được phần thưởng!"}),g.jsx("p",{children:t.description}),t.imageUrl&&g.jsx(B.img,{src:t.imageUrl,alt:"Reward",style:{width:"100%",maxWidth:"300px",borderRadius:"8px",marginTop:"1rem"},initial:{opacity:0},animate:{opacity:1},transition:{delay:.3}})]})}),g.jsx(nr,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:o,children:"Chơi lại"})]}),p&&g.jsx(J,{type:p,onComplete:()=>c(null)})]})},ir=[{id:"1",text:"Đâu là thủ đô của Việt Nam?",options:["Hà Nội","Hồ Chí Minh","Đà Nẵng","Huế"],correctAnswer:0,imageUrl:"https://picsum.photos/800/400"},{id:"2",text:"Việt Nam có bao nhiêu tỉnh thành?",options:["61","62","63","64"],correctAnswer:2,imageUrl:"https://picsum.photos/800/400"},{id:"3",text:"Đâu là món ăn truyền thống của Việt Nam?",options:["Sushi","Pizza","Phở","Hamburger"],correctAnswer:2,imageUrl:"https://picsum.photos/800/400"}],sr=[{title:"Huy chương Đồng",description:"Chúc mừng! Bạn đã đạt được huy chương đồng!",threshold:100,imageUrl:"https://picsum.photos/200/200"},{title:"Huy chương Bạc",description:"Tuyệt vời! Bạn đã đạt được huy chương bạc!",threshold:200,imageUrl:"https://picsum.photos/200/200"},{title:"Huy chương Vàng",description:"Xuất sắc! Bạn đã đạt được huy chương vàng!",threshold:300,imageUrl:"https://picsum.photos/200/200"}],cr=()=>{const[n,t]=b.useState("playing"),[o,p]=b.useState(0),c=R=>{p(R),t("completed")},u=()=>{p(0),t("playing")},C=R=>sr.reduce((T,j)=>R>=j.threshold&&(!T||j.threshold>T.threshold)?j:T,null);return g.jsx("div",{children:n==="playing"?g.jsx(Ye,{questions:ir,onGameComplete:c}):g.jsx(or,{score:o,reward:C(o),onPlayAgain:u})})};K.createRoot(document.getElementById("root")).render(g.jsx(ke.StrictMode,{children:g.jsx(cr,{})}))});export default lr();
//# sourceMappingURL=index-4e357ac0.js.map
