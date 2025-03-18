var ke=(t,a)=>()=>(a||t((a={exports:{}}).exports,a),a.exports);import{r as v,a as je,d as x,m as E,A as Ae,R as Fe}from"./vendor-d11206d1.js";var yr=ke((Mr,D)=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))g(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const R of d.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&g(R)}).observe(document,{childList:!0,subtree:!0});function n(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function g(l){if(l.ep)return;l.ep=!0;const d=n(l);fetch(l.href,d)}})();var se={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=v,Le=Symbol.for("react.element"),Ne=Symbol.for("react.fragment"),_e=Object.prototype.hasOwnProperty,Ge=Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ze={key:!0,ref:!0,__self:!0,__source:!0};function le(t,a,n){var g,l={},d=null,R=null;n!==void 0&&(d=""+n),a.key!==void 0&&(d=""+a.key),a.ref!==void 0&&(R=a.ref);for(g in a)_e.call(a,g)&&!ze.hasOwnProperty(g)&&(l[g]=a[g]);if(t&&t.defaultProps)for(g in a=t.defaultProps,a)l[g]===void 0&&(l[g]=a[g]);return{$$typeof:Le,type:t,key:d,ref:R,props:l,_owner:Ge.current}}W.Fragment=Ne;W.jsx=le;W.jsxs=le;se.exports=W;var c=se.exports,Y={},ie=je;Y.createRoot=ie.createRoot,Y.hydrateRoot=ie.hydrateRoot;const $=30,Ue=100,qe=3,Qe=t=>{const[a,n]=v.useState({score:0,currentQuestionIndex:0,timeRemaining:$,isGameOver:!1});v.useEffect(()=>{n(l=>({...l,timeRemaining:$}))},[a.currentQuestionIndex]),v.useEffect(()=>{if(a.isGameOver)return;const l=setInterval(()=>{n(d=>d.timeRemaining<=0?d.currentQuestionIndex<t.length-1?{...d,currentQuestionIndex:d.currentQuestionIndex+1,timeRemaining:$}:{...d,isGameOver:!0}:{...d,timeRemaining:d.timeRemaining-1})},1e3);return()=>clearInterval(l)},[a.isGameOver,t.length]);const g=v.useCallback(l=>{const d=t[a.currentQuestionIndex],R=l===d.correctAnswer;n(O=>{const T=R?O.score+Ue+O.timeRemaining*qe:O.score;return O.currentQuestionIndex<t.length-1?{...O,score:T,currentQuestionIndex:O.currentQuestionIndex+1,timeRemaining:$}:{...O,score:T,isGameOver:!0}})},[a.currentQuestionIndex,t]);return{gameState:a,answerQuestion:g}},ce=()=>{const t=new(window.AudioContext||window.webkitAudioContext),a=v.useCallback((S,A)=>{const G=t.createOscillator(),z=t.createGain();G.connect(z),z.connect(t.destination),G.type="sine",G.frequency.value=S,z.gain.setValueAtTime(.7,t.currentTime),z.gain.exponentialRampToValueAtTime(.01,t.currentTime+A),G.start(t.currentTime),G.stop(t.currentTime+A)},[t]),n=v.useCallback(S=>{S.forEach(A=>{setTimeout(()=>{a(A.freq,A.duration)},A.delay)})},[a]),g=v.useCallback(()=>{n([{freq:880,duration:.15,delay:0},{freq:1108.73,duration:.2,delay:150}])},[n]),l=v.useCallback(()=>{n([{freq:440,duration:.2,delay:0},{freq:349.23,duration:.3,delay:200}])},[n]),d=v.useCallback(()=>{n([{freq:523.25,duration:.15,delay:0},{freq:659.25,duration:.15,delay:150},{freq:783.99,duration:.3,delay:300}])},[n]),R=v.useCallback(()=>{n([{freq:783.99,duration:.2,delay:0},{freq:659.25,duration:.2,delay:200},{freq:523.25,duration:.4,delay:400}])},[n]),O=v.useCallback(()=>{n([{freq:523.25,duration:.15,delay:0},{freq:659.25,duration:.15,delay:150},{freq:783.99,duration:.15,delay:300},{freq:1046.5,duration:.4,delay:450}])},[n]),T=v.useCallback(()=>{n([{freq:660,duration:.05,delay:0}])},[n]),j=v.useCallback(()=>{n([{freq:1200,duration:.03,delay:0}])},[n]),k=v.useCallback(()=>{n([{freq:987.77,duration:.1,delay:0},{freq:1318.51,duration:.1,delay:100},{freq:1567.98,duration:.3,delay:200}])},[n]);return{playCorrect:g,playWrong:l,playGameStart:d,playGameOver:R,playCongratulations:O,playTick:T,playHover:j,playReward:k}};var D={};(function t(a,n,g,l){var d=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL),R=typeof Path2D=="function"&&typeof DOMMatrix=="function",O=function(){if(!a.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var i=r.transferToImageBitmap();try{e.createPattern(i,"no-repeat")}catch{return!1}return!0}();function T(){}function j(r){var e=n.exports.Promise,i=e!==void 0?e:a.Promise;return typeof i=="function"?new i(r):(r(T,T),null)}var k=function(r,e){return{transform:function(i){if(r)return i;if(e.has(i))return e.get(i);var s=new OffscreenCanvas(i.width,i.height),u=s.getContext("2d");return u.drawImage(i,0,0),e.set(i,s),s},clear:function(){e.clear()}}}(O,new Map),S=function(){var r=Math.floor(16.666666666666668),e,i,s={},u=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(m){var h=Math.random();return s[h]=requestAnimationFrame(function o(f){u===f||u+r-1<f?(u=f,delete s[h],m()):s[h]=requestAnimationFrame(o)}),h},i=function(m){s[m]&&cancelAnimationFrame(s[m])}):(e=function(m){return setTimeout(m,r)},i=function(m){return clearTimeout(m)}),{frame:e,cancel:i}}(),A=function(){var r,e,i={};function s(u){function m(h,o){u.postMessage({options:h||{},callback:o})}u.init=function(o){var f=o.transferControlToOffscreen();u.postMessage({canvas:f},[f])},u.fire=function(o,f,b){if(e)return m(o,null),e;var M=Math.random().toString(36).slice(2);return e=j(function(y){function C(I){I.data.callback===M&&(delete i[M],u.removeEventListener("message",C),e=null,k.clear(),b(),y())}u.addEventListener("message",C),m(o,M),i[M]=C.bind(null,{data:{callback:M}})}),e},u.reset=function(){u.postMessage({reset:!0});for(var o in i)i[o](),delete i[o]}}return function(){if(r)return r;if(!g&&d){var u=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([u])))}catch(m){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",m),null}s(r)}return r}}(),G={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function z(r,e){return e?e(r):r}function F(r){return r!=null}function w(r,e,i){return z(r&&F(r[e])?r[e]:G[e],i)}function q(r){return r<0?0:Math.floor(r)}function N(r,e){return Math.floor(Math.random()*(e-r))+r}function V(r){return parseInt(r,16)}function de(r){return r.map(ue)}function ue(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:V(e.substring(0,2)),g:V(e.substring(2,4)),b:V(e.substring(4,6))}}function me(r){var e=w(r,"origin",Object);return e.x=w(e,"x",Number),e.y=w(e,"y",Number),e}function he(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function fe(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ge(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function pe(r,e,i,s,u,m,h,o,f){r.save(),r.translate(e,i),r.rotate(m),r.scale(s,u),r.arc(0,0,1,h,o,f),r.restore()}function ve(r){var e=r.angle*(Math.PI/180),i=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*i-Math.random()*i),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function be(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var i=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,u=e.y+e.random*e.tiltSin,m=e.wobbleX+e.random*e.tiltCos,h=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-i)+")",r.beginPath(),R&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(xe(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(m-s)*.1,Math.abs(h-u)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var o=Math.PI/10*e.wobble,f=Math.abs(m-s)*.1,b=Math.abs(h-u)*.1,M=e.shape.bitmap.width*e.scalar,y=e.shape.bitmap.height*e.scalar,C=new DOMMatrix([Math.cos(o)*f,Math.sin(o)*f,-Math.sin(o)*b,Math.cos(o)*b,e.x,e.y]);C.multiplySelf(new DOMMatrix(e.shape.matrix));var I=r.createPattern(k.transform(e.shape.bitmap),"no-repeat");I.setTransform(C),r.globalAlpha=1-i,r.fillStyle=I,r.fillRect(e.x-M/2,e.y-y/2,M,y),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(m-s)*e.ovalScalar,Math.abs(h-u)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):pe(r,e.x,e.y,Math.abs(m-s)*e.ovalScalar,Math.abs(h-u)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var p=Math.PI/2*3,P=4*e.scalar,B=8*e.scalar,L=e.x,U=e.y,Q=5,_=Math.PI/Q;Q--;)L=e.x+Math.cos(p)*B,U=e.y+Math.sin(p)*B,r.lineTo(L,U),p+=_,L=e.x+Math.cos(p)*P,U=e.y+Math.sin(p)*P,r.lineTo(L,U),p+=_;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(u)),r.lineTo(Math.floor(m),Math.floor(h)),r.lineTo(Math.floor(s),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function ye(r,e,i,s,u){var m=e.slice(),h=r.getContext("2d"),o,f,b=j(function(M){function y(){o=f=null,h.clearRect(0,0,s.width,s.height),k.clear(),u(),M()}function C(){g&&!(s.width===l.width&&s.height===l.height)&&(s.width=r.width=l.width,s.height=r.height=l.height),!s.width&&!s.height&&(i(r),s.width=r.width,s.height=r.height),h.clearRect(0,0,s.width,s.height),m=m.filter(function(I){return be(h,I)}),m.length?o=S.frame(C):y()}o=S.frame(C),f=y});return{addFettis:function(M){return m=m.concat(M),b},canvas:r,promise:b,reset:function(){o&&S.cancel(o),f&&f()}}}function X(r,e){var i=!r,s=!!w(e||{},"resize"),u=!1,m=w(e,"disableForReducedMotion",Boolean),h=d&&!!w(e||{},"useWorker"),o=h?A():null,f=i?he:fe,b=r&&o?!!r.__confetti_initialized:!1,M=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,y;function C(p,P,B){for(var L=w(p,"particleCount",q),U=w(p,"angle",Number),Q=w(p,"spread",Number),_=w(p,"startVelocity",Number),Ce=w(p,"decay",Number),Re=w(p,"gravity",Number),Oe=w(p,"drift",Number),re=w(p,"colors",de),Te=w(p,"ticks",Number),te=w(p,"shapes"),Ie=w(p,"scalar"),Ee=!!w(p,"flat"),ae=me(p),ne=L,Z=[],Se=r.width*ae.x,Pe=r.height*ae.y;ne--;)Z.push(ve({x:Se,y:Pe,angle:U,spread:Q,startVelocity:_,color:re[ne%re.length],shape:te[N(0,te.length)],ticks:Te,decay:Ce,gravity:Re,drift:Oe,scalar:Ie,flat:Ee}));return y?y.addFettis(Z):(y=ye(r,Z,f,P,B),y.promise)}function I(p){var P=m||w(p,"disableForReducedMotion",Boolean),B=w(p,"zIndex",Number);if(P&&M)return j(function(_){_()});i&&y?r=y.canvas:i&&!r&&(r=ge(B),document.body.appendChild(r)),s&&!b&&f(r);var L={width:r.width,height:r.height};o&&!b&&o.init(r),b=!0,o&&(r.__confetti_initialized=!0);function U(){if(o){var _={getBoundingClientRect:function(){if(!i)return r.getBoundingClientRect()}};f(_),o.postMessage({resize:{width:_.width,height:_.height}});return}L.width=L.height=null}function Q(){y=null,s&&(u=!1,a.removeEventListener("resize",U)),i&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,b=!1)}return s&&!u&&(u=!0,a.addEventListener("resize",U,!1)),o?o.fire(p,L,Q):C(p,L,Q)}return I.reset=function(){o&&o.reset(),y&&y.reset()},I}var H;function ee(){return H||(H=X(null,{useWorker:!0,resize:!0})),H}function xe(r,e,i,s,u,m,h){var o=new Path2D(r),f=new Path2D;f.addPath(o,new DOMMatrix(e));var b=new Path2D;return b.addPath(f,new DOMMatrix([Math.cos(h)*u,Math.sin(h)*u,-Math.sin(h)*m,Math.cos(h)*m,i,s])),b}function we(r){if(!R)throw new Error("path confetti are not supported in this browser");var e,i;typeof r=="string"?e=r:(e=r.path,i=r.matrix);var s=new Path2D(e),u=document.createElement("canvas"),m=u.getContext("2d");if(!i){for(var h=1e3,o=h,f=h,b=0,M=0,y,C,I=0;I<h;I+=2)for(var p=0;p<h;p+=2)m.isPointInPath(s,I,p,"nonzero")&&(o=Math.min(o,I),f=Math.min(f,p),b=Math.max(b,I),M=Math.max(M,p));y=b-o,C=M-f;var P=10,B=Math.min(P/y,P/C);i=[B,0,0,B,-Math.round(y/2+o)*B,-Math.round(C/2+f)*B]}return{type:"path",path:e,matrix:i}}function Me(r){var e,i=1,s="#000000",u='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,i="scalar"in r?r.scalar:i,u="fontFamily"in r?r.fontFamily:u,s="color"in r?r.color:s);var m=10*i,h=""+m+"px "+u,o=new OffscreenCanvas(m,m),f=o.getContext("2d");f.font=h;var b=f.measureText(e),M=Math.ceil(b.actualBoundingBoxRight+b.actualBoundingBoxLeft),y=Math.ceil(b.actualBoundingBoxAscent+b.actualBoundingBoxDescent),C=2,I=b.actualBoundingBoxLeft+C,p=b.actualBoundingBoxAscent+C;M+=C+C,y+=C+C,o=new OffscreenCanvas(M,y),f=o.getContext("2d"),f.font=h,f.fillStyle=s,f.fillText(e,I,p);var P=1/i;return{type:"bitmap",bitmap:o.transferToImageBitmap(),matrix:[P,0,0,P,-M*P/2,-y*P/2]}}n.exports=function(){return ee().apply(this,arguments)},n.exports.reset=function(){ee().reset()},n.exports.create=X,n.exports.shapeFromPath=we,n.exports.shapeFromText=Me})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),D,!1);const Ve=D.exports;D.exports.create;const De=x(E.div)`
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
`,$e=x(E.div)`
  font-size: 3rem;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`,J=({type:t,onComplete:a})=>{v.useEffect(()=>{if(["correct","gameOver","reward","congratulations"].includes(t)){const l=t==="gameOver"?3e3:1e3;Ve({particleCount:t==="gameOver"?200:50,spread:70,origin:{y:.6},colors:t==="reward"||t==="congratulations"?["#FFD700","#FFA500","#FF8C00"]:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!0}),a&&setTimeout(a,l)}},[t,a]);const n={start:{scale:[0,1.2,1],opacity:[0,1,0],transition:{duration:1.5}},correct:{scale:[0,1.2,1],opacity:[0,1,0],transition:{duration:1}},wrong:{scale:[0,1.1,1],opacity:[0,1,0],transition:{duration:1}},gameOver:{scale:[0,1.2,1],opacity:[0,1,0],transition:{duration:2}},reward:{scale:[0,1.3,1],opacity:[0,1,0],transition:{duration:1.5}},congratulations:{scale:[0,1.4,1],opacity:[0,1,0],transition:{duration:2}}},g={start:"Bắt đầu!",correct:"Đúng!",wrong:"Sai!",gameOver:"Kết thúc!",reward:"Phần thưởng!",congratulations:"Chúc mừng!"};return c.jsx(De,{children:c.jsx($e,{initial:{scale:0,opacity:0},animate:n[t],onAnimationComplete:a,children:g[t]})})},We=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,He=x(E.div)`
  margin-bottom: 2rem;
`,Ze=x.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
`,Ke=x(E.button)`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 8px;
  background: ${t=>t.$isCorrect?"#4caf50":t.$isWrong?"#f44336":"rgba(255, 255, 255, 0.1)"};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: ${t=>t.$isCorrect||t.$isWrong?1:.5};
  }
`,Ye=x(E.div)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: right;
`,Je=x.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
`,Xe=x.div`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${t=>t.timeRemaining<=5?"#ff5252":"white"};
`,er=x.div`
  height: 4px;
  background: #ff5252;
  border-radius: 2px;
  width: ${t=>t.timeRemaining/30*100}%;
  transition: width 1s linear;
  margin-bottom: 2rem;
`,rr=({questions:t,onGameComplete:a})=>{const{gameState:n,answerQuestion:g}=Qe(t),{playCorrect:l,playWrong:d}=ce(),[R,O]=v.useState(null),[T,j]=v.useState(!1),[k,S]=v.useState(null),[A,G]=v.useState(!0),z=n.currentQuestionIndex,F=t[z];v.useEffect(()=>{A&&(S("start"),G(!1))},[A]);const w=async q=>{if(T)return;O(q),j(!0);const N=q===F.correctAnswer;S(N?"correct":"wrong"),N?l():d(),await new Promise(V=>setTimeout(V,1e3)),g(q),O(null),j(!1),S(null)};return v.useEffect(()=>{n.isGameOver&&(S("gameOver"),setTimeout(()=>{a(n.score)},1500))},[n.isGameOver,n.score,a]),!F||n.isGameOver?k==="gameOver"?c.jsx(J,{type:"gameOver"}):null:c.jsxs(c.Fragment,{children:[c.jsxs(We,{children:[c.jsxs(Ye,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},children:["Điểm: ",n.score]}),c.jsxs(Je,{children:["Câu hỏi ",z+1,"/",t.length]}),c.jsxs(Xe,{timeRemaining:n.timeRemaining,children:[n.timeRemaining,"s"]}),c.jsx(er,{timeRemaining:n.timeRemaining}),c.jsx(Ae,{mode:"wait",children:c.jsxs(He,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:[c.jsx(Ze,{children:F.text}),F.imageUrl&&c.jsx(E.img,{src:F.imageUrl,alt:"Question context",style:{width:"100%",marginBottom:"1.5rem",borderRadius:"8px",objectFit:"cover",maxHeight:"300px"},initial:{opacity:0},animate:{opacity:1},transition:{delay:.3}}),F.options.map((q,N)=>c.jsx(Ke,{onClick:()=>w(N),disabled:T,$isCorrect:T&&N===F.correctAnswer,$isWrong:T&&R===N&&N!==F.correctAnswer,whileHover:{scale:T?1:1.02},whileTap:{scale:T?1:.98},children:q},N))]},F.id)})]}),k&&c.jsx(J,{type:k,onComplete:()=>S(null)})]})},tr=x(E.div)`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem auto;
  cursor: pointer;
`,ar=x(E.div)`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffd700 0%, #ffa500 100%);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  transform-origin: bottom;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
  ${t=>t.$isOpened&&`
    transform: rotateX(180deg);
  `}
`,nr=x(E.div)`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 30px;
  background: #ffd700;
  border-radius: 10px;
  transform-origin: top;
`,ir=x(E.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border: 6px solid #ff0000;
  border-radius: 50%;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    width: 30px;
    height: 60px;
    background: #ff0000;
    border-radius: 0 0 30px 30px;
  }
  
  &::before {
    left: -15px;
    transform: rotate(-30deg);
  }
  
  &::after {
    right: -15px;
    transform: rotate(30deg);
  }
`,or=x(E.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  padding: 1rem;
  transform: rotateX(180deg);
  backface-visibility: hidden;
`,sr=x(E.img)`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
`,lr=x.h3`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;
  text-align: center;
`,cr=x.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  text-align: center;
`,dr=({mysteryBox:t,onOpen:a})=>{const n={shake:{rotate:[0,-5,5,-5,5,0],transition:{duration:.5,repeat:1/0,repeatType:"reverse"}},idle:{rotate:0}},g=()=>{t.isOpened||a()};return c.jsx(tr,{onClick:g,children:c.jsxs(ar,{$isOpened:t.isOpened,variants:n,animate:t.animation==="shake"?"shake":"idle",children:[!t.isOpened&&c.jsxs(c.Fragment,{children:[c.jsx(nr,{}),c.jsx(ir,{})]}),t.isOpened&&t.reward&&c.jsxs(or,{children:[c.jsx(sr,{src:t.reward.imageUrl,alt:t.reward.title,initial:{scale:0},animate:{scale:1},transition:{delay:.3}}),c.jsx(lr,{children:t.reward.title}),c.jsx(cr,{children:typeof t.reward.value=="number"?t.reward.value.toLocaleString():t.reward.value})]})]})})},ur=x(E.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`,mr=x(E.div)`
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
  color: #4caf50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`,hr=x(E.div)`
  background: rgba(255, 215, 0, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  margin: 2rem 0;
  border: 2px solid rgba(255, 215, 0, 0.3);
`,fr=x.h3`
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`,gr=x(E.button)`
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
`,pr=({score:t,reward:a,onPlayAgain:n})=>{const[g,l]=v.useState(null),[d,R]=v.useState({isOpened:!1,reward:null,animation:"none"}),{playCongratulations:O,playReward:T}=ce();v.useEffect(()=>{if(l("congratulations"),O(),a){const k=setTimeout(()=>{R(S=>({...S,animation:"shake"}))},2e3);return()=>clearTimeout(k)}},[a,O]);const j=()=>{R(k=>({...k,isOpened:!0,animation:"open",reward:a})),T(),l("reward")};return c.jsxs(c.Fragment,{children:[c.jsxs(ur,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[c.jsx("h2",{children:"Chúc mừng bạn đã hoàn thành!"}),c.jsxs(mr,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:200,damping:10},children:[t," điểm"]}),a&&!d.isOpened&&c.jsxs(hr,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},children:[c.jsx(fr,{children:"🎉 Chúc mừng! Bạn có một phần quà bí ẩn!"}),c.jsx("p",{children:"Hãy mở hộp quà để xem bạn đã trúng gì nhé!"})]}),a&&c.jsx(dr,{mysteryBox:d,onOpen:j}),c.jsx(gr,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:n,children:"Chơi lại"})]}),g&&c.jsx(J,{type:g,onComplete:()=>l(null)})]})},oe=[{id:"1",text:"Đâu là thủ đô của Việt Nam?",options:["Hà Nội","Hồ Chí Minh","Đà Nẵng","Huế"],correctAnswer:0,imageUrl:"https://picsum.photos/800/400"},{id:"2",text:"Việt Nam có bao nhiêu tỉnh thành?",options:["61","62","63","64"],correctAnswer:2,imageUrl:"https://picsum.photos/800/400"},{id:"3",text:"Đâu là món ăn truyền thống của Việt Nam?",options:["Sushi","Pizza","Phở","Hamburger"],correctAnswer:2,imageUrl:"https://picsum.photos/800/400"}],K=[{id:"loyalty-1000",type:"LOYALTY_POINTS",title:"1,000 Điểm thưởng",description:"Bạn đã nhận được 1,000 điểm thưởng!",value:1e3,imageUrl:"/images/loyalty-points.png",probability:30},{id:"loyalty-5000",type:"LOYALTY_POINTS",title:"5,000 Điểm thưởng",description:"Bạn đã nhận được 5,000 điểm thưởng!",value:5e3,imageUrl:"/images/loyalty-points.png",probability:20},{id:"data-1gb",type:"DATA_PACKAGE",title:"Gói data 1GB",description:"Bạn đã nhận được gói data 1GB!",value:"1GB",imageUrl:"/images/data-package.png",probability:20},{id:"data-5gb",type:"DATA_PACKAGE",title:"Gói data 5GB",description:"Bạn đã nhận được gói data 5GB!",value:"5GB",imageUrl:"/images/data-package.png",probability:15},{id:"iphone-15",type:"DEVICE",title:"iPhone 15",description:"Chúc mừng! Bạn đã trúng iPhone 15!",value:"iPhone 15 128GB",imageUrl:"/images/iphone.png",probability:10},{id:"car-vinfast",type:"VEHICLE",title:"VinFast VF8",description:"Chúc mừng! Bạn đã trúng xe VinFast VF8!",value:"VinFast VF8 Eco",imageUrl:"/images/vinfast.png",probability:5}],vr=()=>{const t=K.reduce((n,g)=>n+g.probability,0);let a=Math.random()*t;for(const n of K)if(a-=n.probability,a<=0)return n;return K[0]},br=()=>{const[t,a]=v.useState("playing"),[n,g]=v.useState(0),[l,d]=v.useState(null),R=T=>{g(T);const j=oe.length*100;T>=j&&d(vr()),a("completed")},O=()=>{g(0),d(null),a("playing")};return c.jsx("div",{children:t==="playing"?c.jsx(rr,{questions:oe,onGameComplete:R}):c.jsx(pr,{score:n,reward:l,onPlayAgain:O})})};Y.createRoot(document.getElementById("root")).render(c.jsx(Fe.StrictMode,{children:c.jsx(br,{})}))});export default yr();
//# sourceMappingURL=index-9972a1da.js.map
