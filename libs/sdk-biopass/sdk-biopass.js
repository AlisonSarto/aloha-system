"use strict";(()=>{var Yh=Object.create;var Wu=Object.defineProperty;var $h=Object.getOwnPropertyDescriptor;var Jh=Object.getOwnPropertyNames;var Qh=Object.getPrototypeOf,Zh=Object.prototype.hasOwnProperty;var _i=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(n,e)=>(typeof require<"u"?require:n)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+r+'" is not supported')});var jo=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var ed=(r,n,e,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of Jh(n))!Zh.call(r,o)&&o!==e&&Wu(r,o,{get:()=>n[o],enumerable:!(t=$h(n,o))||t.enumerable});return r};var td=(r,n,e)=>(e=r!=null?Yh(Qh(r)):{},ed(n||!r||!r.__esModule?Wu(e,"default",{value:r,enumerable:!0}):e,r));var Gu=jo(()=>{});var Hu=jo(()=>{});var qu=jo(()=>{});var Sp=jo((qx,Ya)=>{var up,cp,lp,fp,pp,hp,dp,vp,mp,Xa,iu,gp,yp,Fr,xp,bp,wp,Cp,_p,Ep,kp,Ip,Rp;(function(r){var n=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:{};typeof define=="function"&&define.amd?define("tslib",["exports"],function(t){r(e(n,e(t)))}):typeof Ya=="object"&&typeof Ya.exports=="object"?r(e(n,e(Ya.exports))):r(e(n));function e(t,o){return t!==n&&(typeof Object.create=="function"?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(a,i){return t[a]=o?o(a,i):i}}})(function(r){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};up=function(e,t){n(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)},cp=Object.assign||function(e){for(var t,o=1,a=arguments.length;o<a;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lp=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]]);return o},fp=function(e,t,o,a){var i=arguments.length,s=i<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,o,a);else for(var c=e.length-1;c>=0;c--)(u=e[c])&&(s=(i<3?u(s):i>3?u(t,o,s):u(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},pp=function(e,t){return function(o,a){t(o,a,e)}},hp=function(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)},dp=function(e,t,o,a){function i(s){return s instanceof o?s:new o(function(u){u(s)})}return new(o||(o=Promise))(function(s,u){function c(p){try{f(a.next(p))}catch(h){u(h)}}function l(p){try{f(a.throw(p))}catch(h){u(h)}}function f(p){p.done?s(p.value):i(p.value).then(c,l)}f((a=a.apply(e,t||[])).next())})},vp=function(e,t){var o={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},a,i,s,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(f){return function(p){return l([f,p])}}function l(f){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,i&&(s=f[0]&2?i.return:f[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,f[1])).done)return s;switch(i=0,s&&(f=[f[0]&2,s.value]),f[0]){case 0:case 1:s=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,i=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!(s=s.length>0&&s[s.length-1])&&(f[0]===6||f[0]===2)){o=0;continue}if(f[0]===3&&(!s||f[1]>s[0]&&f[1]<s[3])){o.label=f[1];break}if(f[0]===6&&o.label<s[1]){o.label=s[1],s=f;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(f);break}s[2]&&o.ops.pop(),o.trys.pop();continue}f=t.call(e,o)}catch(p){f=[6,p],i=0}finally{a=s=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},Rp=function(e,t,o,a){a===void 0&&(a=o),e[a]=t[o]},mp=function(e,t){for(var o in e)o!=="default"&&!t.hasOwnProperty(o)&&(t[o]=e[o])},Xa=function(e){var t=typeof Symbol=="function"&&Symbol.iterator,o=t&&e[t],a=0;if(o)return o.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},iu=function(e,t){var o=typeof Symbol=="function"&&e[Symbol.iterator];if(!o)return e;var a=o.call(e),i,s=[],u;try{for(;(t===void 0||t-- >0)&&!(i=a.next()).done;)s.push(i.value)}catch(c){u={error:c}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(u)throw u.error}}return s},gp=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(iu(arguments[t]));return e},yp=function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var a=Array(e),i=0,t=0;t<o;t++)for(var s=arguments[t],u=0,c=s.length;u<c;u++,i++)a[i]=s[u];return a},Fr=function(e){return this instanceof Fr?(this.v=e,this):new Fr(e)},xp=function(e,t,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=o.apply(e,t||[]),i,s=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(d){a[d]&&(i[d]=function(m){return new Promise(function(v,g){s.push([d,m,v,g])>1||c(d,m)})})}function c(d,m){try{l(a[d](m))}catch(v){h(s[0][3],v)}}function l(d){d.value instanceof Fr?Promise.resolve(d.value.v).then(f,p):h(s[0][2],d)}function f(d){c("next",d)}function p(d){c("throw",d)}function h(d,m){d(m),s.shift(),s.length&&c(s[0][0],s[0][1])}},bp=function(e){var t,o;return t={},a("next"),a("throw",function(i){throw i}),a("return"),t[Symbol.iterator]=function(){return this},t;function a(i,s){t[i]=e[i]?function(u){return(o=!o)?{value:Fr(e[i](u)),done:i==="return"}:s?s(u):u}:s}},wp=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],o;return t?t.call(e):(e=typeof Xa=="function"?Xa(e):e[Symbol.iterator](),o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o);function a(s){o[s]=e[s]&&function(u){return new Promise(function(c,l){u=e[s](u),i(c,l,u.done,u.value)})}}function i(s,u,c,l){Promise.resolve(l).then(function(f){s({value:f,done:c})},u)}},Cp=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},_p=function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t},Ep=function(e){return e&&e.__esModule?e:{default:e}},kp=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},Ip=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,o),o},r("__extends",up),r("__assign",cp),r("__rest",lp),r("__decorate",fp),r("__param",pp),r("__metadata",hp),r("__awaiter",dp),r("__generator",vp),r("__exportStar",mp),r("__createBinding",Rp),r("__values",Xa),r("__read",iu),r("__spread",gp),r("__spreadArrays",yp),r("__await",Fr),r("__asyncGenerator",xp),r("__asyncDelegator",bp),r("__asyncValues",wp),r("__makeTemplateObject",Cp),r("__importStar",_p),r("__importDefault",Ep),r("__classPrivateFieldGet",kp),r("__classPrivateFieldSet",Ip)})});var zu="generic/permissions_denied";var Vu="generic/operation_canceled";var Uu="generic/not_permitted";async function Ei(){try{let r={audio:!1,video:!0};return(await navigator.mediaDevices.getUserMedia(r)).getTracks().forEach(e=>{e.stop()}),!0}catch(r){return console.log(r),!1}}var nd=r=>{let{tag:n,attributes:e,children:t,style:o,onClick:a}=r;if(e&&e.style)throw"Use style property to define element styles";let i=document.createElement(n);if(e&&Object.entries(e).forEach(u=>{i.setAttribute(u[0],u[1])}),o&&Object.entries(o).forEach(([u,c])=>{i.style[u]=c}),t&&Array.isArray(t))t.forEach(s=>{i.appendChild(s)});else if(typeof t=="string"&&/(<\w*)((\s\/>)|(.*<\/\w*>))/gm.test(t)){let s=document.createElement("div");s.innerHTML=t,Array.from(s.children).forEach(u=>{i.appendChild(u)})}else typeof t=="string"&&(i.innerHTML=t);return a&&(i.onclick=a),i},pe=nd;typeof window<"u"&&(window.r=pe);function ki(r,n){return pe({tag:"img",attributes:{src:r},style:{width:n}})}function ln(r){let{size:n,backgroundColor:e,onPressed:t,horizontalMargin:o="20px",label:a,icon:i,svgIconCreator:s,padding:u}=r;function c(){let l=[];return i.enabled&&i.source.length==0&&l.push(pe({tag:"div",style:{width:i.size},children:s(i.color)})),i.enabled&&i.source.length>0&&l.push(ki(i.source,i.size)),a.enabled&&i.enabled&&l.push(pe({tag:"div",style:{width:"8px"}})),a.enabled&&l.push(pe({tag:"p",children:a.content,style:{fontSize:a.fontSize,color:a.color,fontWeight:a.fontWeight}})),l}return pe({tag:"button",style:{minWidth:n,height:n,borderRadius:"9999px",cursor:"pointer",background:e,display:"flex",alignItems:"center",justifyContent:"center",padding:u,margin:`0 ${o}`,border:"none"},onClick:l=>{l.preventDefault(),l.stopPropagation(),t&&t()},children:c()})}function Ii(r){return new Promise(n=>{setTimeout(()=>{n()},r)})}function Ko(r){let n=!1,e="",t=pe({tag:"video",style:{width:"100%",height:"100%",objectFit:"cover",background:"#363738",transform:"scaleX(-1)",display:"block"},attributes:{id:"biopass_camera",autoplay:"",playsinline:"",muted:""}});async function o(u){return new Promise((c,l)=>{let{aspectRatio:f,preferredResolution:p}=r,h={audio:!1,video:{facingMode:u!=null?"user":void 0,deviceId:u!=null?{exact:u}:void 0,aspectRatio:f,height:f>1?p:void 0,width:f<1?p:void 0}};navigator.mediaDevices.getUserMedia(h).then(d=>{var v;let m=d.getTracks()[0].getSettings();e=(v=m.deviceId)!=null?v:"",t.style.transform=m.facingMode=="user"?"scaleX(-1)":"scaleX(1)",t.srcObject=d,t.play(),t.onloadedmetadata=()=>{n=!0,c()}}).catch(d=>l(d))})}async function a(){let u=t.srcObject;u&&u.getTracks().forEach(function(l){l.stop()}),t.srcObject=null,n=!1}async function i(){if(n){n=!1,a(),await Ii(300);let u=(await navigator.mediaDevices.enumerateDevices()).filter(f=>f.kind=="videoinput").map(f=>f.deviceId),c=u.indexOf(e);if(u.length==1||c<0){await o();return}if(c==u.length-1){await o(u[0]);return}let l=u[c+1];await o(l)}}return{get element(){return t},initCamera:o,dispose:a,checkIfIsInitialized:()=>n,switchCamera:i}}function Xo(){let r=pe({tag:"canvas",style:{position:"absolute",display:"none"}});function n(t){return r.width=t.videoWidth,r.height=t.videoHeight,r.getContext("2d").drawImage(t,0,0,t.videoWidth,t.videoHeight),{base64:r.toDataURL("image/jpg"),height:r.height,width:r.width}}return{get element(){return r},takePicture:n}}function Yo(r){let{color:n,opacity:e}=r;return`<svg preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 565 350" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M565 0H0V350H565V0ZM346.833 172.288C347.007 170.954 347.18 169.63 347.354 168.334C350.952 143.942 346.742 122.747 335.71 107.633C324.916 92.949 307.602 83.9174 284.37 83.4243H280.59C257.422 83.9174 240.108 92.949 229.378 107.633C218.282 122.747 214.072 143.942 217.616 168.334C218.1 171.648 218.529 175.091 218.949 178.598L219.031 179.182C220.647 191.794 222.364 205.117 226.328 215.701C231.752 230.203 241.45 242.924 251.934 252.019C262.426 261.115 273.64 266.457 282.361 266.575H282.599C291.32 266.521 302.598 261.115 313.027 252.019C323.574 242.924 333.208 230.148 338.633 215.701C342.66 204.953 344.422 191.374 346.011 178.598C346.267 176.461 346.55 174.361 346.833 172.288Z" fill="${n}" fill-opacity="${e}"/>
    </svg>
    `}function pr(r){return`<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 565 350"><path d="M282.83,266.07v-.5h0c-8.56-.11-19.66-5.37-30.11-14.43A91.58,91.58,0,0,1,227.27,215c-3.94-10.52-5.65-23.78-7.27-36.41h0l-.08-.57h0c-.42-3.5-.85-6.95-1.34-10.27-3.53-24.3.67-45.35,11.67-60.33,10.63-14.54,27.78-23.52,50.82-24h3.77c23.09.49,40.25,9.47,50.94,24,10.93,15,15.13,36,11.55,60.33h0c-.17,1.29-.35,2.62-.52,3.95-.28,2.07-.57,4.18-.82,6.32-1.6,12.79-3.35,26.3-7.36,37a91.33,91.33,0,0,1-25.46,36.11h0c-10.39,9.06-21.55,14.38-30.1,14.43h0" fill="none" stroke="${r.color}" stroke-width="${r.thickness}"/></svg>
    `}function Ri(r){var i,s,u,c,l,f;let n={enabled:(i=r==null?void 0:r.enabled)!=null?i:!0,backgroundColor:(s=r==null?void 0:r.backgroundColor)!=null?s:"black",backgroundOpacity:(u=r==null?void 0:r.backgroundOpacity)!=null?u:.6,frameColor:(c=r==null?void 0:r.frameColor)!=null?c:"white",frameThickness:(l=r==null?void 0:r.frameThickness)!=null?l:3,type:(f=r==null?void 0:r.type)!=null?f:"face"};function e(){if(n.type=="face")return{mask:Yo({color:n.backgroundColor,opacity:n.backgroundOpacity}),frame:pr({color:n.frameColor,thickness:n.frameThickness})}}let t=e(),o=pe({tag:"div",style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},children:[pe({tag:"div",style:{width:"100%",height:"100%",position:"absolute"},children:t==null?void 0:t.mask}),pe({tag:"div",style:{width:"100%",height:"100%",position:"absolute"},children:t==null?void 0:t.frame})]});return{get element(){return o}}}function Bt(){throw Uu}function Si(r){var S,R,k,I,A,D,B,M,N,U;let{enabled:n,subtitle:e,title:t,adapter:o,detectionResultCallback:a,autoCaptureEnabled:i,timeToCapture:s,timeToCaptureFeedbackColor:u,i18n:c,scoreThreshold:l,multipleFacesEnabled:f}=r,p={enabled:(S=t==null?void 0:t.enabled)!=null?S:!1,color:(R=t==null?void 0:t.color)!=null?R:"white",content:(k=t==null?void 0:t.content)!=null?k:"Captura Facial",fontSize:(I=t==null?void 0:t.fontSize)!=null?I:"1.5rem",fontWeight:(A=t==null?void 0:t.fontWeight)!=null?A:"600"},h={enabled:(D=e==null?void 0:e.enabled)!=null?D:!0,color:(B=e==null?void 0:e.color)!=null?B:"white",content:(M=e==null?void 0:e.content)!=null?M:"",fontSize:(N=e==null?void 0:e.fontSize)!=null?N:"1rem",fontWeight:(U=e==null?void 0:e.fontWeight)!=null?U:"normal"},d=pe({tag:"p",style:{color:h.color,fontWeight:h.fontWeight,fontSize:h.fontSize,textAlign:"center",margin:"0",padding:"0"},children:h.content}),m=pe({tag:"div",style:{position:"absolute",top:"0",right:"0",left:"0",bottom:"0",display:i?"block":"hidden",transition:`${s*1.8}ms`,clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"},children:pr({color:u,thickness:3})}),v=pe({tag:"div",style:{position:"absolute",top:"0",right:"0",left:"0",bottom:"0"},children:[m,pe({tag:"div",style:{position:"absolute",top:"2%",right:"0",left:"0"},children:[pe({tag:"p",children:p.content,style:{color:p.color,fontWeight:p.fontWeight,fontSize:p.fontSize,textAlign:"center",padding:"0",margin:"0"}}),d]})]}),g=!1;async function y(W,L){var G,X,J,Q,oe,ie,ue,fe,ce;let V=await o(W,L);return V.detections<=0?(d.innerText=(G=c==null?void 0:c.noFacesDetected)!=null?G:"No faces detected",!1):V.detections>1&&!f?(d.innerText=(X=c==null?void 0:c.multipleFacesDetected)!=null?X:"Multiple faces detected",!1):V.position.x==1?(d.innerText=(J=c==null?void 0:c.moveFaceLeft)!=null?J:"Move your face to the left",!1):V.position.x==-1?(d.innerText=(Q=c==null?void 0:c.moveFaceRight)!=null?Q:"Move your face to the right",!1):V.position.y==1?(d.innerText=(oe=c==null?void 0:c.moveFaceDown)!=null?oe:"Move your face down",!1):V.position.y==-1?(d.innerText=(ie=c==null?void 0:c.moveFaceUp)!=null?ie:"Move your face up",!1):V.position.z==1?(d.innerText=(ue=c==null?void 0:c.moveFaceBack)!=null?ue:"Move your face back",!1):V.position.z==-1?(d.innerText=(fe=c==null?void 0:c.moveFaceForward)!=null?fe:"Move your face forward",!1):(d.innerText=(ce=c==null?void 0:c.keepStill)!=null?ce:"Keep your face still",!0)}async function b(){let W=document.querySelector("#biopass_camera"),L=l!=null?l:.5;if(W&&g&&o!=null){let V=await y(W,L);i&&(V?(m.style.transition=`${s*1.6}ms`,setTimeout(()=>{m.style.clipPath="polygon(0 0%, 100% 0%, 100% 100%, 0 100%)"},10)):(m.style.transition="500ms",setTimeout(()=>{m.style.clipPath="polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"},10))),a(V),setTimeout(()=>{requestAnimationFrame(()=>b())},100)}}async function x(){n&&!g&&(g=!0,b())}async function w(){g=!1}return{get element(){return v},startCapture:x,stop:w}}function $o(r){var g,y,b,x,w,C,S,R,k,I,A,D,B,M,N,U,W,L,V,G,X,J;let{onClick:n,active:e,options:t,top:o,left:a,right:i,svgIconCreator:s}=r,u={enabled:(y=(g=t==null?void 0:t.icon)==null?void 0:g.enabled)!=null?y:!0,color:(x=(b=t==null?void 0:t.icon)==null?void 0:b.color)!=null?x:"white",size:(C=(w=t==null?void 0:t.icon)==null?void 0:w.size)!=null?C:"30px",source:(R=(S=t==null?void 0:t.icon)==null?void 0:S.source)!=null?R:""},c={enabled:((k=t==null?void 0:t.label)==null?void 0:k.enabled)||((I=t==null?void 0:t.label)==null?void 0:I.content)!=null&&((A=t==null?void 0:t.label)==null?void 0:A.content.length)>0,color:(B=(D=t==null?void 0:t.label)==null?void 0:D.color)!=null?B:"black",content:(N=(M=t==null?void 0:t.label)==null?void 0:M.content)!=null?N:"",fontSize:(W=(U=t==null?void 0:t.label)==null?void 0:U.fontSize)!=null?W:"1rem",fontWeight:(V=(L=t==null?void 0:t.label)==null?void 0:L.fontWeight)!=null?V:"normal"},l=(G=t==null?void 0:t.backgroundColor)!=null?G:"transparent",f=(X=t==null?void 0:t.size)!=null?X:"50px",p=c.enabled?"0 25px":"0",h=(J=t==null?void 0:t.padding)!=null?J:p,d=pe({tag:"div",style:{position:"absolute",top:o,left:a,right:i,opacity:e?"1":"0",pointerEvents:e?"all":"none"},children:[ln({backgroundColor:l,size:f,onPressed:n,icon:u,label:c,svgIconCreator:s,padding:h})]}),m={get element(){return d},active:e};return new Proxy(m,{get:(Q,oe)=>{if(oe in Q)return Q[oe]},set(Q,oe,ie){return oe==="element"||oe==="active"&&(ie?(d.style.opacity="1",d.style.pointerEvents="all"):(d.style.opacity="0",d.style.pointerEvents="none")),!0}})}function Jo(r){return`
    <svg preserveAspectRatio="xMidYMin meet" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1408 11.3621C12.9871 10.7967 13.982 10.4949 14.9997 10.4949C16.3645 10.4949 17.6734 11.037 18.6384 12.0021C19.6035 12.9671 20.1456 14.276 20.1456 15.6408C20.1456 16.6585 19.8438 17.6534 19.2784 18.4997C18.7129 19.3459 17.9093 20.0055 16.969 20.395C16.0287 20.7844 14.994 20.8863 13.9958 20.6878C12.9976 20.4892 12.0807 19.9991 11.361 19.2795C10.6414 18.5598 10.1513 17.6429 9.95272 16.6447C9.75416 15.6465 9.85607 14.6118 10.2455 13.6715C10.635 12.7312 11.2946 11.9276 12.1408 11.3621ZM16.1279 12.9172C15.5892 12.6941 14.9965 12.6357 14.4246 12.7495C13.8528 12.8632 13.3275 13.144 12.9152 13.5563C12.5029 13.9685 12.2222 14.4938 12.1084 15.0657C11.9947 15.6375 12.0531 16.2302 12.2762 16.7689C12.4993 17.3076 12.8772 17.768 13.3619 18.0919C13.8467 18.4158 14.4167 18.5887 14.9997 18.5887C15.7816 18.5887 16.5314 18.2781 17.0842 17.7253C17.6371 17.1724 17.9477 16.4226 17.9477 15.6408C17.9477 15.0577 17.7748 14.4878 17.4509 14.003C17.1269 13.5182 16.6665 13.1404 16.1279 12.9172Z" fill="${r}"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4541 3.75003C19.2417 3.74699 20.0109 3.989 20.6549 4.44254C21.2979 4.89536 21.7844 5.53665 22.0472 6.27781L22.5334 7.79695H24.4426C24.9466 7.79688 25.4455 7.89714 25.9103 8.0919C26.3752 8.28666 26.7966 8.57201 27.15 8.93132C27.5034 9.29062 27.7818 9.71669 27.9688 10.1847C28.1559 10.6527 28.2478 11.1532 28.2394 11.6571V22.4531C28.2394 23.4601 27.8394 24.4258 27.1274 25.1379C26.4153 25.85 25.4495 26.25 24.4425 26.25H5.55692C4.54992 26.25 3.58416 25.85 2.8721 25.1379C2.16004 24.4258 1.76001 23.4601 1.76001 22.4531V11.6613C1.76001 10.6543 2.16004 9.68854 2.8721 8.97648C3.58416 8.26443 4.54992 7.86439 5.55692 7.86439H7.4661L7.9529 6.34312C8.20491 5.58928 8.68715 4.93351 9.33167 4.46829C9.97653 4.0028 10.7513 3.75157 11.5466 3.75003L18.4541 3.75003ZM10.6796 6.24673C10.9521 6.05169 11.279 5.94719 11.6141 5.94797H18.5203C18.8554 5.94719 19.1822 6.05169 19.4547 6.24673C19.7273 6.44184 19.9317 6.71769 20.0389 7.03528L20.0395 7.03708L20.7677 9.24873C20.8383 9.458 20.9704 9.64115 21.1466 9.77429C21.3215 9.90648 21.532 9.98328 21.7509 9.99489H24.4425C24.8666 9.99489 25.2733 10.1634 25.5732 10.4632C25.873 10.7631 26.0415 11.1698 26.0415 11.5939V22.3856C26.0415 22.8097 25.873 23.2164 25.5732 23.5163C25.2733 23.8161 24.8666 23.9846 24.4425 23.9846H5.55692C5.13285 23.9846 4.72615 23.8161 4.42628 23.5163C4.12642 23.2164 3.95795 22.8097 3.95795 22.3856V11.5939C3.95795 11.1698 4.12642 10.7631 4.42628 10.4632C4.72615 10.1634 5.13285 9.99489 5.55692 9.99489L8.2679 9.99523C8.50755 10.0077 8.7447 9.94146 8.94315 9.80652C9.14139 9.67171 9.29034 9.47511 9.36687 9.24793L10.0948 7.03709L10.0954 7.03528C10.2027 6.71769 10.4071 6.44184 10.6796 6.24673Z" fill="${r}"/>
    </svg>
    `}function Qo(r){return`
    <svg preserveAspectRatio="xMidYMin meet" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.8073 6.52089C26.6436 6.35584 26.4489 6.22483 26.2343 6.13543C26.0197 6.04603 25.7895 6 25.557 6C25.3246 6 25.0944 6.04603 24.8798 6.13543C24.6652 6.22483 24.4705 6.35584 24.3068 6.52089L11.1875 19.6578L5.67561 14.1283C5.50564 13.9641 5.30499 13.835 5.08512 13.7484C4.86525 13.6617 4.63047 13.6192 4.39418 13.6233C4.1579 13.6274 3.92473 13.678 3.70799 13.7722C3.49125 13.8664 3.29519 14.0024 3.131 14.1723C2.96681 14.3423 2.8377 14.543 2.75105 14.7628C2.66441 14.9827 2.62191 15.2175 2.626 15.4538C2.63009 15.6901 2.68068 15.9232 2.77488 16.14C2.86908 16.3567 3.00505 16.5528 3.17502 16.717L9.93718 23.4791C10.1009 23.6442 10.2956 23.7752 10.5102 23.8646C10.7248 23.954 10.955 24 11.1875 24C11.4199 24 11.6501 23.954 11.8647 23.8646C12.0793 23.7752 12.2741 23.6442 12.4378 23.4791L26.8073 9.10953C26.9861 8.94463 27.1287 8.74449 27.2263 8.52173C27.3239 8.29897 27.3743 8.05841 27.3743 7.81521C27.3743 7.57202 27.3239 7.33146 27.2263 7.1087C27.1287 6.88593 26.9861 6.6858 26.8073 6.52089Z" fill="${r}"/>
    </svg>
    `}function hr(r){return`
    <svg preserveAspectRatio="xMidYMin meet" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.1133 14.9987L23.558 8.56902C23.8402 8.2868 23.9988 7.90402 23.9988 7.5049C23.9988 7.10577 23.8402 6.723 23.558 6.44077C23.2758 6.15855 22.893 6 22.4939 6C22.0948 6 21.712 6.15855 21.4298 6.44077L15.0001 12.8855L8.57036 6.44077C8.28813 6.15855 7.90536 6 7.50623 6C7.10711 6 6.72433 6.15855 6.44211 6.44077C6.15989 6.723 6.00134 7.10577 6.00134 7.5049C6.00134 7.90402 6.15989 8.2868 6.44211 8.56902L12.8868 14.9987L6.44211 21.4284C6.30163 21.5678 6.19014 21.7335 6.11405 21.9162C6.03795 22.0988 5.99878 22.2947 5.99878 22.4925C5.99878 22.6904 6.03795 22.8863 6.11405 23.0689C6.19014 23.2516 6.30163 23.4173 6.44211 23.5567C6.58144 23.6971 6.74721 23.8086 6.92984 23.8847C7.11248 23.9608 7.30838 24 7.50623 24C7.70409 24 7.89999 23.9608 8.08262 23.8847C8.26526 23.8086 8.43103 23.6971 8.57036 23.5567L15.0001 17.112L21.4298 23.5567C21.5691 23.6971 21.7349 23.8086 21.9175 23.8847C22.1001 23.9608 22.296 24 22.4939 24C22.6917 24 22.8876 23.9608 23.0703 23.8847C23.2529 23.8086 23.4187 23.6971 23.558 23.5567C23.6985 23.4173 23.81 23.2516 23.8861 23.0689C23.9622 22.8863 24.0013 22.6904 24.0013 22.4925C24.0013 22.2947 23.9622 22.0988 23.8861 21.9162C23.81 21.7335 23.6985 21.5678 23.558 21.4284L17.1133 14.9987Z" fill="${r}"/>
    </svg>
    `}function Ti(r){return`
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet" viewBox="0 0 25 25" fill="none" ><path fill="${r}" d="M12.29,5.21l1.5,1.5a1,1,0,0,0,1.42,0,1,1,0,0,0,.13-1.21H19a1,1,0,0,0,0-2H15.34a1,1,0,0,0-.13-1.21,1,1,0,0,0-1.42,0l-1.5,1.5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76A1,1,0,0,0,12.29,5.21ZM22.92,9.12a1,1,0,0,0-.21-.33l-1.5-1.5a1,1,0,0,0-1.42,0,1,1,0,0,0-.13,1.21H16a1,1,0,0,0,0,2h3.66a1,1,0,0,0,.13,1.21,1,1,0,0,0,1.42,0l1.5-1.5a1,1,0,0,0,.21-.33A1,1,0,0,0,22.92,9.12ZM11,10a4,4,0,1,0,4,4A4,4,0,0,0,11,10Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11,16Zm9-3a1,1,0,0,0-1,1v5a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H6a1,1,0,0,0,1-.69l.54-1.62A1,1,0,0,1,8.44,7H10a1,1,0,0,0,0-2H8.44A3,3,0,0,0,5.59,7.06L5.28,8H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V14A1,1,0,0,0,20,13Z"/></svg>
    `}function Zo(r){var J,Q,oe,ie,ue,fe,ce,me,Ae,he,xe,ye,Se,Ee,ke,ut,ct,qe,Nt,mt,Et,gt,Mt,yt,cn,Ot,lt,Qt,Zt,ur,Ho,cr,lr,fr,Nu,Mu,Ou;let{request:n,onCancel:e,onFinish:t,controller:o,options:a,i18n:i,faceDetectionAdapter:s}=r,u=(Q=(J=a==null?void 0:a.mask)==null?void 0:J.enabled)!=null?Q:!0,c=(ie=(oe=a==null?void 0:a.confirmButton)==null?void 0:oe.enabled)!=null?ie:!0,l=(fe=(ue=a==null?void 0:a.loading)==null?void 0:ue.enabled)!=null?fe:!0,f=(me=(ce=a==null?void 0:a.backButton)==null?void 0:ce.enabled)!=null?me:!0,p=(he=s!=null&&((Ae=a==null?void 0:a.faceDetection)==null?void 0:Ae.enabled))!=null?he:s!=null,h=(ye=(xe=a==null?void 0:a.faceDetection)==null?void 0:xe.autoCapture)!=null?ye:!1,d=(Ee=(Se=a==null?void 0:a.captureButton)==null?void 0:Se.enabled)!=null?Ee:!0,m=(ut=(ke=a==null?void 0:a.switchButton)==null?void 0:ke.enabled)!=null?ut:!0,v=d&&!h||h&&!p,g=null,y=Ko({aspectRatio:(qe=(ct=a==null?void 0:a.cameraPresets)==null?void 0:ct.aspectRatio)!=null?qe:16/9,preferredResolution:(mt=(Nt=a==null?void 0:a.cameraPresets)==null?void 0:Nt.preferredResolution)!=null?mt:480,deviceId:(gt=(Et=a==null?void 0:a.cameraPresets)==null?void 0:Et.deviceId)!=null?gt:""}),b=Xo(),x=ta({active:!1,disabled:p,onClick:N,options:a==null?void 0:a.captureButton}),w=ra({active:!1,onFinish:U,onCancel:W,cancelButtonOptions:a==null?void 0:a.cancelButton,confirmButtonOptions:a==null?void 0:a.confirmButton}),C=ea(""),S=na({active:!1,options:a==null?void 0:a.loading}),R=Si({detectionResultCallback:B,subtitle:(Mt=a==null?void 0:a.legend)==null?void 0:Mt.subtitle,title:(yt=a==null?void 0:a.legend)==null?void 0:yt.title,adapter:s,enabled:p,autoCaptureEnabled:h,timeToCapture:(Ot=(cn=a==null?void 0:a.faceDetection)==null?void 0:cn.timeToCapture)!=null?Ot:2e3,scoreThreshold:(Qt=(lt=a==null?void 0:a.faceDetection)==null?void 0:lt.scoreThreshold)!=null?Qt:.5,timeToCaptureFeedbackColor:(ur=(Zt=a==null?void 0:a.faceDetection)==null?void 0:Zt.timeToCaptureFeedbackColor)!=null?ur:"#C59F64",autoCaptureTimeoutFeedbackThickness:(cr=(Ho=a==null?void 0:a.mask)==null?void 0:Ho.frameThickness)!=null?cr:3,multipleFacesEnabled:(fr=(lr=a==null?void 0:a.faceDetection)==null?void 0:lr.multipleFacesEnabled)!=null?fr:!1,i18n:i}),k=Ri(a==null?void 0:a.mask),I=$o({active:!1,onClick:V,options:a==null?void 0:a.backButton,svgIconCreator:hr,left:"0",top:"10px"}),A=$o({active:!1,onClick:()=>M(),options:a==null?void 0:a.switchButton,svgIconCreator:Ti,right:"0",top:"10px"}),D=null;function B(qo){var Bu,Lu;x.disabled=!qo,qo?qo&&h&&!D&&(D=setTimeout(()=>{N(),U()},(Lu=(Bu=a==null?void 0:a.faceDetection)==null?void 0:Bu.timeToCapture)!=null?Lu:2e3)):(clearTimeout(D),D=null)}async function M(){R.stop(),await y.switchCamera(),R.startCapture()}function N(){y.checkIfIsInitialized()&&(g=b.takePicture(y.element),C.image=g.base64,x.active=!1,w.active=!0,A.active=!1,o&&(o.confirmPicture=U,o.rejectPicture=W,o.takePicture=Bt))}async function U(){w.active=!1,S.active=!0,o&&(o.confirmPicture=Bt,o.rejectPicture=Bt,o.takePicture=Bt,o.cancel=Bt);try{await n(g)}finally{y.dispose(),R.stop(),t(),S.active=!1,C.image=""}}function W(){g=null,C.image="",w.active=!1,x.active=!0,A.active=!0,o&&(o.confirmPicture=Bt,o.rejectPicture=Bt,o.takePicture=N)}async function L(){await y.initCamera(),p?R.startCapture():x.active=!0,I.active=!0,A.active=!0}function V(){o&&(o.confirmPicture=Bt,o.rejectPicture=Bt,o.takePicture=Bt,o.cancel=Bt),g=null,y.dispose(),R.stop(),e()}let G=pe({tag:"div",style:{position:"relative",width:(Nu=a==null?void 0:a.width)!=null?Nu:"100%",height:(Mu=a==null?void 0:a.height)!=null?Mu:"100%",fontFamily:(Ou=a==null?void 0:a.fontFamily)!=null?Ou:"inherit"},children:[y.element,u?k.element:pe({tag:"div"}),R.element,v?x.element:pe({tag:"div"}),C.element,c?w.element:pe({tag:"div"}),l?S.element:pe({tag:"div"}),f?I.element:pe({tag:"div"}),m?A.element:pe({tag:"div"})]});return o&&(o.cancel=V,o.takePicture=N),{get element(){return G},initCamera:L}}function ea(r){let n=pe({tag:"img",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",objectFit:"cover",opacity:r.length>0?"1":"0",transition:".3s",display:r.length>0?"block":"none",transform:"scaleX(-1)"}});r.length>0&&n.setAttribute("src",r);let e={get element(){return n},image:r};return new Proxy(e,{get:(o,a)=>{if(a in o)return o[a]},set(o,a,i){if(a==="element")return!0;if(a==="image"){let s=o.element.getAttribute("src")!=null&&o.element.getAttribute("src").length>0;s&&i.length>0?o.element.setAttribute("src",i):s&&i.length==0?(o.element.style.opacity="0",setTimeout(()=>{o.element.style.display="none",o.element.setAttribute("src","")},300)):!s&&i.length>0&&(o.element.style.opacity="0",o.element.style.display="block",o.element.setAttribute("src",i),setTimeout(()=>{o.element.style.opacity="1"},50)),o.image=i}return!0}})}function ta(r){var d,m,v,g,y,b,x,w,C,S,R,k,I,A,D,B,M,N,U,W,L,V;let{onClick:n,active:e,options:t,disabled:o}=r,a={enabled:(m=(d=t==null?void 0:t.icon)==null?void 0:d.enabled)!=null?m:!0,color:(g=(v=t==null?void 0:t.icon)==null?void 0:v.color)!=null?g:"black",size:(b=(y=t==null?void 0:t.icon)==null?void 0:y.size)!=null?b:"30px",source:(w=(x=t==null?void 0:t.icon)==null?void 0:x.source)!=null?w:""},i={enabled:((C=t==null?void 0:t.label)==null?void 0:C.enabled)||((S=t==null?void 0:t.label)==null?void 0:S.content)!=null&&((R=t==null?void 0:t.label)==null?void 0:R.content.length)>0,color:(I=(k=t==null?void 0:t.label)==null?void 0:k.color)!=null?I:"black",content:(D=(A=t==null?void 0:t.label)==null?void 0:A.content)!=null?D:"",fontSize:(M=(B=t==null?void 0:t.label)==null?void 0:B.fontSize)!=null?M:"1rem",fontWeight:(U=(N=t==null?void 0:t.label)==null?void 0:N.fontWeight)!=null?U:"normal"},s=(W=t==null?void 0:t.backgroundColor)!=null?W:"white",u=(L=t==null?void 0:t.size)!=null?L:"50px",c=i.enabled?"0 25px":"0",l=(V=t==null?void 0:t.padding)!=null?V:c,f=pe({tag:"div",style:{position:"absolute",bottom:"20px",left:"0",right:"0",display:"flex",alignItems:"center",justifyContent:"center",transition:".3s",opacity:o?".3":"1",pointerEvents:e&&!o?"all":"none"},children:[ln({backgroundColor:s,size:u,onPressed:n,icon:a,label:i,svgIconCreator:Jo,padding:l})]}),p={get element(){return f},disabled:o,active:e};return new Proxy(p,{get:(G,X)=>{if(X in G)return G[X]},set(G,X,J){return X==="element"||(X==="active"?J?(f.style.opacity="1",f.style.pointerEvents="all"):(f.style.opacity="0",f.style.pointerEvents="none"):X=="disabled"&&(J?(f.style.opacity=".3",f.style.pointerEvents="none"):(f.style.opacity="1",f.style.pointerEvents="all"))),!0}})}function na(r){var l,f,p,h,d,m;let{active:n,options:e}=r,t={enabled:(l=e==null?void 0:e.enabled)!=null?l:!0,backgroundColor:(f=e==null?void 0:e.backgroundColor)!=null?f:"white",dotsColor:(p=e==null?void 0:e.dotsColor)!=null?p:"black",dotsSize:(h=e==null?void 0:e.dotsSize)!=null?h:"5px",dotsSpacing:(d=e==null?void 0:e.dotsSpacing)!=null?d:"3px",size:(m=e==null?void 0:e.size)!=null?m:"50px"};function o(v){return pe({tag:"div",attributes:{class:"loading_dot"},style:{width:t.dotsSize,height:t.dotsSize,borderRadius:"9999px",background:t.dotsColor,marginRight:v?void 0:t.dotsSpacing,opacity:".5"}})}let a=pe({tag:"div",style:{position:"absolute",bottom:"20px",left:"0",right:"0",display:"flex",alignItems:"center",justifyContent:"center",transition:".3s",opacity:n?"1":"0",pointerEvents:n?"all":"none"},children:[pe({tag:"div",style:{width:t.size,height:t.size,background:t.backgroundColor,borderRadius:"9999px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 25px"},children:Array(3).fill(void 0).map((v,g)=>o(g==2))})]}),i={get element(){return a},active:n};function s(){let v=Array.from(a.querySelectorAll(".loading_dot"));v&&typeof document.body.animate<"u"&&v.forEach(g=>{g.getAnimations().forEach(y=>y.cancel())})}function u(){let v=Array.from(a.querySelectorAll(".loading_dot"));v&&typeof document.body.animate<"u"&&v.forEach((g,y)=>{g.animate([{opacity:".5",transform:"scale(.8)"},{opacity:"1",transform:"scale(1)"},{opacity:"1",transform:"scale(1)"},{opacity:".5",transform:"scale(.8)"}],{duration:1e3,iterations:1/0,delay:y*100})})}return n&&u(),new Proxy(i,{get:(v,g)=>{if(g in v)return v[g]},set(v,g,y){return g==="element"||g==="active"&&(s(),y?(a.style.opacity="1",u()):a.style.opacity="0"),!0}})}function ra(r){var w,C,S,R,k,I,A,D,B,M,N,U,W,L,V,G,X,J,Q,oe,ie,ue,fe,ce,me,Ae,he,xe,ye,Se,Ee,ke,ut,ct,qe,Nt,mt,Et,gt,Mt,yt,cn,Ot,lt;let{onFinish:n,onCancel:e,active:t,cancelButtonOptions:o,confirmButtonOptions:a}=r,i={enabled:(C=(w=o==null?void 0:o.icon)==null?void 0:w.enabled)!=null?C:!0,color:(R=(S=o==null?void 0:o.icon)==null?void 0:S.color)!=null?R:"white",size:(I=(k=o==null?void 0:o.icon)==null?void 0:k.size)!=null?I:"30px",source:(D=(A=o==null?void 0:o.icon)==null?void 0:A.source)!=null?D:""},s={enabled:((B=o==null?void 0:o.label)==null?void 0:B.enabled)||((M=o==null?void 0:o.label)==null?void 0:M.content)!=null&&((N=o==null?void 0:o.label)==null?void 0:N.content.length)>0,color:(W=(U=o==null?void 0:o.label)==null?void 0:U.color)!=null?W:"white",content:(V=(L=o==null?void 0:o.label)==null?void 0:L.content)!=null?V:"",fontSize:(X=(G=o==null?void 0:o.label)==null?void 0:G.fontSize)!=null?X:"1rem",fontWeight:(Q=(J=o==null?void 0:o.label)==null?void 0:J.fontWeight)!=null?Q:"normal"},u=(oe=o==null?void 0:o.backgroundColor)!=null?oe:"red",c=(ie=o==null?void 0:o.size)!=null?ie:"50px",l=s.enabled?"0 25px":"0",f=(ue=o==null?void 0:o.padding)!=null?ue:l,p={enabled:(ce=(fe=a==null?void 0:a.icon)==null?void 0:fe.enabled)!=null?ce:!0,color:(Ae=(me=a==null?void 0:a.icon)==null?void 0:me.color)!=null?Ae:"black",size:(xe=(he=a==null?void 0:a.icon)==null?void 0:he.size)!=null?xe:"30px",source:(Se=(ye=a==null?void 0:a.icon)==null?void 0:ye.source)!=null?Se:""},h={enabled:((Ee=a==null?void 0:a.label)==null?void 0:Ee.enabled)||((ke=a==null?void 0:a.label)==null?void 0:ke.content)!=null&&((ut=a==null?void 0:a.label)==null?void 0:ut.content.length)>0,color:(qe=(ct=a==null?void 0:a.label)==null?void 0:ct.color)!=null?qe:"black",content:(mt=(Nt=a==null?void 0:a.label)==null?void 0:Nt.content)!=null?mt:"",fontSize:(gt=(Et=a==null?void 0:a.label)==null?void 0:Et.fontSize)!=null?gt:"1rem",fontWeight:(yt=(Mt=a==null?void 0:a.label)==null?void 0:Mt.fontWeight)!=null?yt:"normal"},d=(cn=a==null?void 0:a.backgroundColor)!=null?cn:"white",m=(Ot=a==null?void 0:a.size)!=null?Ot:"50px",v=h.enabled?"0 25px":"0",g=(lt=a==null?void 0:a.padding)!=null?lt:v,y=pe({tag:"div",style:{position:"absolute",bottom:"20px",left:"0",right:"0",display:"flex",alignItems:"center",justifyContent:"center",transition:".3s",opacity:t?"1":"0",pointerEvents:t?"all":"none"},children:[ln({backgroundColor:u,size:c,onPressed:e,icon:i,label:s,svgIconCreator:hr,padding:f}),ln({backgroundColor:d,size:m,onPressed:n,icon:p,label:h,svgIconCreator:Qo,padding:g})]}),b={get element(){return y},active:t};return new Proxy(b,{get:(Qt,Zt)=>{if(Zt in Qt)return Qt[Zt]},set(Qt,Zt,ur){return Zt==="element"||Zt==="active"&&(ur?(y.style.opacity="1",y.style.pointerEvents="all"):(y.style.opacity="0",y.style.pointerEvents="none")),!0}})}function Di(r){let{data:n,request:e,onCancel:t,controller:o}=r,a=Zo({onCancel:()=>{n.element.innerHTML="",t()},onFinish:()=>{n.element.innerHTML=""},request:e,controller:o,options:n.options,faceDetectionAdapter:n.faceDetectionAdapter,i18n:n.i18n});n.element.innerHTML="",n.element.appendChild(a.element),a.initCamera()}async function Ai(r,n){return await Ei()?new Promise((t,o)=>{async function a(i){try{let s=await n(i);t(s)}catch(s){throw o(s),s}}Di({data:r,onCancel:()=>o(Vu),request:a,controller:r.controller})}):Promise.reject(zu)}function Fi(){function r(n){return Ai(n,t=>Promise.resolve(t))}return{takePicture:r}}var Tc=function(r,n){return(Tc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(r,n)};function jt(r,n){function e(){this.constructor=r}Tc(r,n),r.prototype=n===null?Object.create(n):(e.prototype=n.prototype,new e)}function ee(r,n,e,t){return new(e||(e=Promise))(function(o,a){function i(c){try{u(t.next(c))}catch(l){a(l)}}function s(c){try{u(t.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((t=t.apply(r,n||[])).next())})}function te(r,n){var e,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(o=2&l[0]?t.return:l[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,l[1])).done)return o;switch(t=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,t=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(r,i)}catch(f){l=[6,f],t=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var rd=function(){function r(n){this.global=n,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(n,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=n,this.platform=e},r.prototype.registerFlag=function(n,e,t){if(this.flagRegistry[n]={evaluationFn:e,setHook:t},this.urlFlags[n]!=null){var o=this.urlFlags[n];console.warn("Setting feature override from URL "+n+": "+o+"."),this.set(n,o)}},r.prototype.get=function(n){return n in this.flags?this.flags[n]:(this.flags[n]=this.evaluateFlag(n),this.flags[n])},r.prototype.getNumber=function(n){return this.get(n)},r.prototype.getBool=function(n){return this.get(n)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(n,e){if(this.flagRegistry[n]==null)throw new Error("Cannot set flag "+n+" as it has not been registered.");this.flags[n]=e,this.flagRegistry[n].setHook!=null&&this.flagRegistry[n].setHook(e)},r.prototype.evaluateFlag=function(n){if(this.flagRegistry[n]==null)throw new Error("Cannot evaluate flag '"+n+"': no evaluation function found.");return this.flagRegistry[n].evaluationFn()},r.prototype.setFlags=function(n){this.flags=Object.assign({},n)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var n=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,t,o=(e=this.global.location.search,t={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return od(t,i[0],i[1]),i.join("=")}),t);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];n.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function od(r,n,e){r[decodeURIComponent(n)]=decodeURIComponent(e||"")}function z(){return Dc}var Dc=null,ba=new Map,es=new Map;function Ac(r,n){var e=Pc(r,n);return ba.get(e)}function ad(r){return es.get(r)}function ju(r){for(var n=ba.entries(),e=[];;){var t=n.next(),o=t.done,a=t.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function Fc(r){var n=r.kernelName,e=r.backendName,t=Pc(n,e);if(ba.has(t))throw new Error("The kernel '"+n+"' for backend '"+e+"' is already registered");ba.set(t,r)}function id(r){var n=r.kernelName;es.has(n)&&console.warn("Overriding the gradient for '"+n+"'"),es.set(n,r)}function Pc(r,n){return n+"_"+r}function Ku(r){for(var n=r.length,e=0,t=0;n>0;)t=Math.random()*n|0,e=r[--n],r[n]=r[t],r[t]=e}function wa(r,n,e){return Math.max(r,Math.min(n,e))}function ws(r){return r%2==0?r:r+1}function Nc(r){for(var n=0,e=0;e<r.length;e++)n+=r[e];return n}function E(r,n){if(!r)throw new Error(typeof n=="string"?n:n())}function we(r,n,e){e===void 0&&(e=""),E(Ue(r,n),function(){return e+" Shapes "+r+" and "+n+" must match"})}function $n(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function vn(r,n,e){if(n===void 0&&(n=[]),e===void 0&&(e=!1),n==null&&(n=[]),Array.isArray(r)||ot(r)&&!e)for(var t=0;t<r.length;++t)vn(r[t],n,e);else n.push(r);return n}function ne(r){if(r.length===0)return 1;for(var n=r[0],e=1;e<r.length;e++)n*=r[e];return n}function Ue(r,n){if(r===n)return!0;if(r==null||n==null||r.length!==n.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==n[e])return!1;return!0}function Le(r){return r%1==0}function Mc(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var n=Math.exp(2*r);return(n-1)/(n+1)}function Ca(r){var n=Math.ceil(Math.sqrt(r));return[n,Math.ceil(r/n)]}function Hn(r,n){return n<=r.length?r:r+" ".repeat(n-r.length)}function ts(r,n,e){return n===void 0&&(n=function(t){return 0}),new Promise(function(t,o){var a=0,i=function(){if(r())t();else{a++;var s=n(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function Oc(r,n){for(var e=1,t=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(t!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+t+" and dim "+o);t=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(t===-1){if(n>0&&n!==e)throw Error("Size("+n+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(n%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+n+" / "+e);var a=r.slice();return a[t]=n/e,a}function He(r,n){var e=n.length;return E((r=r==null?n.map(function(t,o){return o}):[].concat(r)).every(function(t){return t>=-e&&t<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),E(r.every(function(t){return Le(t)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(t){return t<0?e+t:t})}function Rn(r,n){for(var e=[],t=[],o=n!=null&&Array.isArray(n)&&n.length===0,a=n==null||o?null:He(n,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),t.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),t.push(s))}return{newShape:e,keptDims:t}}function kr(r,n){var e=null;if(r==null||r==="float32")e=new Float32Array(n);else if(r==="int32")e=new Int32Array(n);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(n)}return e}function uo(r,n){var e=null;if(r==null||r==="float32")e=new Float32Array(n);else if(r==="int32")e=new Int32Array(n);else if(r==="bool")e=new Uint8Array(n);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(n)}return e}function Bc(r,n){for(var e=0;e<r.length;e++){var t=r[e];if(isNaN(t)||!isFinite(t))throw Error("A tensor of type "+n+" being uploaded contains "+t+".")}}function Lc(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function Wc(r,n){return n!=="complex64"&&(n!=="float32"||r==="complex64")&&(n!=="int32"||r==="float32"||r==="complex64")&&(n!=="bool"||r!=="bool")}function ot(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Cs(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function zc(r){if(r==null)return 0;var n=0;return r.forEach(function(e){return n+=e.length}),n}function Sn(r){return typeof r=="string"||r instanceof String}function Vc(r){return typeof r=="boolean"}function Uc(r){return typeof r=="number"}function Rr(r){return Array.isArray(r)?Rr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":Uc(r)?"float32":Sn(r)?"string":Vc(r)?"bool":"float32"}function _a(r){return!!(r&&r.constructor&&r.call&&r.apply)}function Ea(r,n){for(var e=n;e<r;++e)if(r%e==0)return e;return r}function Ht(r){var n=r.length;if(n<2)return[];var e=new Array(n-1);e[n-2]=r[n-1];for(var t=n-3;t>=0;--t)e[t]=e[t+1]*r[t+1];return e}function _s(r,n,e){if(n==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=vn(r)),e&&Bc(r,n),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,n))return r;if(n==null||n==="float32"||n==="complex64")return new Float32Array(r);if(n==="int32")return new Int32Array(r);if(n==="bool"){for(var t=new Uint8Array(r.length),o=0;o<t.length;++o)Math.round(r[o])!==0&&(t[o]=1);return t}throw new Error("Unknown data type "+n)}function ns(r,n){if(r.length===0)return n[0];var e=r.reduce(function(t,o){return t*o});if(e===0)return[];if(e!==n.length)throw new Error("["+r+"] does not match the input size.");return function t(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),f=l.reduce(function(p,h){return p*h});for(c=0;c<u;c++)s[c]=t(o+c*f,l,i)}return s}(0,r,n)}function Es(r,n){for(var e=Sr(r,n),t=0;t<e.length;t++)e[t]=1;return e}function Sr(r,n){if(n==null||n==="float32"||n==="complex64")return new Float32Array(r);if(n==="int32")return new Int32Array(r);if(n==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+n)}function Gt(){return z().platform.now()}function ks(r){r.forEach(function(n){E(Number.isInteger(n)&&n>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function Gc(r,n){return n===void 0&&(n="utf-8"),n=n||"utf-8",z().platform.encode(r,n)}function co(r,n){return n===void 0&&(n="utf-8"),n=n||"utf-8",z().platform.decode(r,n)}function rs(r,n,e){if(n===0)return 0;if(n===1)return r[0];for(var t=r[r.length-1],o=0;o<r.length-1;++o)t+=e[o]*r[o];return t}function Hc(r,n,e){if(n===0)return[];if(n===1)return[r];for(var t=new Array(n),o=0;o<t.length-1;++o)t[o]=Math.floor(r/e[o]),r-=t[o]*e[o];return t[t.length-1]=r,t}var Px=Object.freeze({shuffle:Ku,clamp:wa,nearestLargerEven:ws,sum:Nc,randUniform:function(r,n){var e=Math.random();return n*e+(1-e)*r},distSquared:function(r,n){for(var e=0,t=0;t<r.length;t++){var o=Number(r[t])-Number(n[t]);e+=o*o}return e},assert:E,assertShapesMatch:we,assertNonNull:$n,flatten:vn,sizeFromShape:ne,isScalarShape:function(r){return r.length===0},arraysEqual:Ue,isInt:Le,tanh:Mc,sizeToSquarishShape:Ca,createShuffledIndices:function(r){for(var n=new Uint32Array(r),e=0;e<r;++e)n[e]=e;return Ku(n),n},rightPad:Hn,repeatedTry:ts,inferFromImplicitShape:Oc,parseAxisParam:He,squeezeShape:Rn,getTypedArrayFromDType:kr,getArrayFromDType:uo,checkConversionForErrors:Bc,isValidDtype:Lc,hasEncodingLoss:Wc,isTypedArray:ot,bytesPerElement:Cs,bytesFromStringArray:zc,isString:Sn,isBoolean:Vc,isNumber:Uc,inferDtype:Rr,isFunction:_a,nearestDivisor:Ea,computeStrides:Ht,toTypedArray:_s,toNestedArray:ns,makeOnesTypedArray:Es,makeZerosTypedArray:Sr,now:Gt,assertNonNegativeIntegerDimensions:ks,fetch:function(r,n){return z().platform.fetch(r,n)},encodeString:Gc,decodeString:co,locToIndex:rs,indexToLoc:Hc}),sd=function(){function r(n,e){this.backendTimer=n,this.logger=e,e==null&&(this.logger=new ud)}return r.prototype.profileKernel=function(n,e,t){var o,a=this,i=this.backendTimer.time(function(){o=t()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var p=0;p<c.length;p++){var h=c[p];if(isNaN(h)||!isFinite(h))return console.warn("Found "+h+" in the result of '"+f+"'"),!0}})(u,s.dtype,n),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(n,s,u,c.kernelMs,e,l)})})}),o},r}(),ud=function(){function r(){}return r.prototype.logKernelProfile=function(n,e,t,o,a,i){var s=typeof o=="number"?Hn(o+"ms",9):o.error,u=Hn(n,25),c=e.rank,l=e.size,f=Hn(e.shape.toString(),14),p="";for(var h in a){var d=a[h].shape||e.shape,m=d.length;p+=h+": "+m+"D "+(m>0?d:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+p+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Xu=20,Zr=3,Pi=7;function cd(r,n,e,t){var o=Ht(n),a=function(c,l,f,p){var h=ne(l),d=p[p.length-1],m=new Array(d).fill(0),v=l.length,g=f==="complex64"?to(c):c;if(v>1)for(var y=0;y<h/d;y++)for(var b=y*d,x=0;x<d;x++)m[x]=Math.max(m[x],eo(g[b+x],0,f).length);return m}(r,n,e,o),i=n.length,s=function c(l,f,p,h,d,m){m===void 0&&(m=!0);var v=p==="complex64"?2:1,g=f[0],y=f.length;if(y===0)return p==="complex64"?[eo(to(l)[0],0,p)]:p==="bool"?[qc(l[0])]:[l[0].toString()];if(y===1){if(g>Xu){var b=Zr*v,x=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-Zr)*v,g*v));return p==="complex64"&&(x=to(x),w=to(w)),["["+x.map(function(N,U){return eo(N,d[U],p)}).join(", ")+", ..., "+w.map(function(N,U){return eo(N,d[g-Zr+U],p)}).join(", ")+"]"]}return["["+(p==="complex64"?to(l):Array.from(l)).map(function(N,U){return eo(N,d[U],p)}).join(", ")+"]"]}var C=f.slice(1),S=h.slice(1),R=h[0]*v,k=[];if(g>Xu){for(var I=0;I<Zr;I++){var A=(D=I*R)+R;k.push.apply(k,c(l.slice(D,A),C,p,S,d,!1))}for(k.push("..."),I=g-Zr;I<g;I++)A=(D=I*R)+R,k.push.apply(k,c(l.slice(D,A),C,p,S,d,I===g-1))}else for(I=0;I<g;I++){var D;A=(D=I*R)+R,k.push.apply(k,c(l.slice(D,A),C,p,S,d,I===g-1))}var B=y===2?",":"";for(k[0]="["+k[0]+B,I=1;I<k.length-1;I++)k[I]=" "+k[I]+B;var M=`,
`;for(I=2;I<y;I++)M+=`
`;return k[k.length-1]=" "+k[k.length-1]+"]"+(m?"":M),k}(r,n,e,o,a),u=["Tensor"];return t&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+n+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function eo(r,n,e){return Hn(Array.isArray(r)?parseFloat(r[0].toFixed(Pi))+" + "+parseFloat(r[1].toFixed(Pi))+"j":Sn(r)?"'"+r+"'":e==="bool"?qc(r):parseFloat(r.toFixed(Pi)).toString(),n)}function qc(r){return r===0?"false":"true"}function to(r){for(var n=[],e=0;e<r.length;e+=2)n.push([r[e],r[e+1]]);return n}var lo=function(){function r(n,e,t){var o=this;if(this.dtype=e,this.shape=n.slice(),this.size=ne(n),t!=null){var a=t.length;E(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=t||uo(e,this.size),this.strides=Ht(n)}return r.prototype.set=function(n){for(var e=this,t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];t.length===0&&(t=[0]),E(t.length===this.rank,function(){return"The number of provided coordinates ("+t.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(t);this.values[a]=n},r.prototype.get=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];n.length===0&&(n=[0]);for(var t=0,o=0,a=n;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[t]){var s="Requested out of range element at "+n+".   Buffer shape="+this.shape;throw new Error(s)}t++}for(var u=n[n.length-1],c=0;c<n.length-1;++c)u+=this.strides[c]*n[c];return this.values[u]},r.prototype.locToIndex=function(n){if(this.rank===0)return 0;if(this.rank===1)return n[0];for(var e=n[n.length-1],t=0;t<n.length-1;++t)e+=this.strides[t]*n[t];return e},r.prototype.indexToLoc=function(n){if(this.rank===0)return[];if(this.rank===1)return[n];for(var e=new Array(this.shape.length),t=0;t<e.length-1;++t)e[t]=Math.floor(n/this.strides[t]),n-=e[t]*this.strides[t];return e[e.length-1]=n,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return en().makeTensor(this.values,this.shape,this.dtype)},r}(),en=null,O=null,jc=null,Te=function(){function r(n,e,t,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=n.slice(),this.dtype=e||"float32",this.size=ne(n),this.strides=Ht(n),this.dataId=t,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(n,e){return this.throwIfDisposed(),this.reshape([n,e])},r.prototype.as3D=function(n,e,t){return this.throwIfDisposed(),this.reshape([n,e,t])},r.prototype.as4D=function(n,e,t,o){return this.throwIfDisposed(),this.reshape([n,e,t,o])},r.prototype.as5D=function(n,e,t,o,a){return this.throwIfDisposed(),this.reshape([n,e,t,o,a])},r.prototype.asType=function(n){return this.throwIfDisposed(),O.cast(this,n)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return ee(this,void 0,void 0,function(){var n;return te(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return n=e.sent(),[2,O.buffer(this.shape,this.dtype,n)]}})})},r.prototype.bufferSync=function(){return O.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return ee(this,void 0,void 0,function(){var n;return te(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return n=e.sent(),[2,ns(this.shape,n)]}})})},r.prototype.arraySync=function(){return ns(this.shape,this.dataSync())},r.prototype.data=function(){return ee(this,void 0,void 0,function(){var n,e;return te(this,function(t){switch(t.label){case 0:return this.throwIfDisposed(),n=en().read(this.dataId),this.dtype!=="string"?[3,2]:[4,n];case 1:e=t.sent();try{return[2,e.map(function(o){return co(o)})]}catch(o){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}t.label=2;case 2:return[2,n]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var n=en().readSync(this.dataId);if(this.dtype==="string")try{return n.map(function(e){return co(e)})}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return n},r.prototype.bytes=function(){return ee(this,void 0,void 0,function(){var n;return te(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,en().read(this.dataId)];case 1:return n=e.sent(),this.dtype==="string"?[2,n]:[2,new Uint8Array(n.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(en().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(n){return n===void 0&&(n=!1),O.print(this,n)},r.prototype.reshape=function(n){return this.throwIfDisposed(),O.reshape(this,n)},r.prototype.reshapeAs=function(n){return this.throwIfDisposed(),this.reshape(n.shape)},r.prototype.expandDims=function(n){return n===void 0&&(n=0),O.expandDims(this,n)},r.prototype.cumsum=function(n,e,t){return n===void 0&&(n=0),e===void 0&&(e=!1),t===void 0&&(t=!1),O.cumsum(this,n,e,t)},r.prototype.squeeze=function(n){return this.throwIfDisposed(),O.squeeze(this,n)},r.prototype.clone=function(){return this.throwIfDisposed(),O.clone(this)},r.prototype.oneHot=function(n,e,t){return this.throwIfDisposed(),O.oneHot(this,n,e,t)},r.prototype.toString=function(n){return n===void 0&&(n=!1),cd(this.dataSync(),this.shape,this.dtype,n)},r.prototype.tile=function(n){return this.throwIfDisposed(),O.tile(this,n)},r.prototype.gather=function(n,e){return e===void 0&&(e=0),this.throwIfDisposed(),O.gather(this,n,e)},r.prototype.matMul=function(n,e,t){return e===void 0&&(e=!1),t===void 0&&(t=!1),this.throwIfDisposed(),O.matMul(this,n,e,t)},r.prototype.dot=function(n){return this.throwIfDisposed(),O.dot(this,n)},r.prototype.norm=function(n,e,t){return n===void 0&&(n="euclidean"),e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),O.norm(this,n,e,t)},r.prototype.slice=function(n,e){return this.throwIfDisposed(),O.slice(this,n,e)},r.prototype.reverse=function(n){return this.throwIfDisposed(),O.reverse(this,n)},r.prototype.concat=function(n,e){return e===void 0&&(e=0),this.throwIfDisposed(),n instanceof r&&(n=[n]),O.concat([this].concat(n),e)},r.prototype.split=function(n,e){return e===void 0&&(e=0),this.throwIfDisposed(),O.split(this,n,e)},r.prototype.stack=function(n,e){return e===void 0&&(e=0),O.stack([this,n],e)},r.prototype.unstack=function(n){return n===void 0&&(n=0),O.unstack(this,n)},r.prototype.pad=function(n,e){return e===void 0&&(e=0),O.pad(this,n,e)},r.prototype.batchNormalization=function(n,e,t,o,a){return t===void 0&&(t=.001),jc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(n,e,a,o,t)},r.prototype.batchNorm=function(n,e,t,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),O.batchNorm(this,n,e,t,o,a)},r.prototype.all=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.all(this,n,e)},r.prototype.any=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.any(this,n,e)},r.prototype.logSumExp=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.logSumExp(this,n,e)},r.prototype.sum=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.sum(this,n,e)},r.prototype.prod=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.prod(this,n,e)},r.prototype.mean=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.mean(this,n,e)},r.prototype.min=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.min(this,n,e)},r.prototype.max=function(n,e){return n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.max(this,n,e)},r.prototype.argMin=function(n){return n===void 0&&(n=null),this.throwIfDisposed(),O.argMin(this,n)},r.prototype.argMax=function(n){return n===void 0&&(n=null),this.throwIfDisposed(),O.argMax(this,n)},r.prototype.cast=function(n){return this.throwIfDisposed(),O.cast(this,n)},r.prototype.add=function(n){return this.throwIfDisposed(),O.add(this,n)},r.prototype.addStrict=function(n){return this.throwIfDisposed(),O.addStrict(this,n)},r.prototype.atan2=function(n){return this.throwIfDisposed(),O.atan2(this,n)},r.prototype.sub=function(n){return this.throwIfDisposed(),O.sub(this,n)},r.prototype.subStrict=function(n){return this.throwIfDisposed(),O.subStrict(this,n)},r.prototype.pow=function(n){return this.throwIfDisposed(),O.pow(this,n)},r.prototype.powStrict=function(n){return this.throwIfDisposed(),O.powStrict(this,n)},r.prototype.mul=function(n){return this.throwIfDisposed(),O.mul(this,n)},r.prototype.mulStrict=function(n){return this.throwIfDisposed(),O.mulStrict(this,n)},r.prototype.div=function(n){return this.throwIfDisposed(),O.div(this,n)},r.prototype.divNoNan=function(n){return this.throwIfDisposed(),O.divNoNan(this,n)},r.prototype.floorDiv=function(n){return this.throwIfDisposed(),O.floorDiv(this,n)},r.prototype.divStrict=function(n){return this.throwIfDisposed(),O.divStrict(this,n)},r.prototype.minimum=function(n){return this.throwIfDisposed(),O.minimum(this,n)},r.prototype.minimumStrict=function(n){return this.throwIfDisposed(),O.minimumStrict(this,n)},r.prototype.maximum=function(n){return this.throwIfDisposed(),O.maximum(this,n)},r.prototype.maximumStrict=function(n){return this.throwIfDisposed(),O.maximumStrict(this,n)},r.prototype.mod=function(n){return this.throwIfDisposed(),O.mod(this,n)},r.prototype.modStrict=function(n){return this.throwIfDisposed(),O.modStrict(this,n)},r.prototype.squaredDifferenceStrict=function(n){return this.throwIfDisposed(),O.squaredDifferenceStrict(this,n)},r.prototype.transpose=function(n){return this.throwIfDisposed(),O.transpose(this,n)},r.prototype.notEqual=function(n){return this.throwIfDisposed(),O.notEqual(this,n)},r.prototype.notEqualStrict=function(n){return this.throwIfDisposed(),O.notEqualStrict(this,n)},r.prototype.less=function(n){return this.throwIfDisposed(),O.less(this,n)},r.prototype.lessStrict=function(n){return this.throwIfDisposed(),O.lessStrict(this,n)},r.prototype.equal=function(n){return this.throwIfDisposed(),O.equal(this,n)},r.prototype.equalStrict=function(n){return this.throwIfDisposed(),O.equalStrict(this,n)},r.prototype.lessEqual=function(n){return this.throwIfDisposed(),O.lessEqual(this,n)},r.prototype.lessEqualStrict=function(n){return this.throwIfDisposed(),O.lessEqualStrict(this,n)},r.prototype.greater=function(n){return this.throwIfDisposed(),O.greater(this,n)},r.prototype.greaterStrict=function(n){return this.throwIfDisposed(),O.greaterStrict(this,n)},r.prototype.greaterEqual=function(n){return this.throwIfDisposed(),O.greaterEqual(this,n)},r.prototype.greaterEqualStrict=function(n){return this.throwIfDisposed(),O.greaterEqualStrict(this,n)},r.prototype.logicalAnd=function(n){return this.throwIfDisposed(),O.logicalAnd(this,n)},r.prototype.logicalOr=function(n){return this.throwIfDisposed(),O.logicalOr(this,n)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),O.logicalNot(this)},r.prototype.logicalXor=function(n){return this.throwIfDisposed(),O.logicalXor(this,n)},r.prototype.where=function(n,e){return this.throwIfDisposed(),O.where(n,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),O.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),O.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),O.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),O.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),O.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),O.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),O.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),O.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),O.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),O.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),O.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),O.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),O.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),O.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),O.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),O.abs(this)},r.prototype.clipByValue=function(n,e){return this.throwIfDisposed(),O.clipByValue(this,n,e)},r.prototype.relu=function(){return this.throwIfDisposed(),O.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),O.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),O.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),O.selu(this)},r.prototype.leakyRelu=function(n){return n===void 0&&(n=.2),this.throwIfDisposed(),O.leakyRelu(this,n)},r.prototype.prelu=function(n){return this.throwIfDisposed(),O.prelu(this,n)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),O.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),O.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),O.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),O.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),O.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),O.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),O.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),O.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),O.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),O.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),O.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),O.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),O.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),O.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),O.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),O.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),O.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),O.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),O.round(this)},r.prototype.step=function(n){return n===void 0&&(n=0),this.throwIfDisposed(),O.step(this,n)},r.prototype.softmax=function(n){return n===void 0&&(n=-1),this.throwIfDisposed(),O.softmax(this,n)},r.prototype.logSoftmax=function(n){return n===void 0&&(n=-1),this.throwIfDisposed(),O.logSoftmax(this,n)},r.prototype.resizeBilinear=function(n,e){return e===void 0&&(e=!1),this.throwIfDisposed(),O.image.resizeBilinear(this,n,e)},r.prototype.resizeNearestNeighbor=function(n,e){return e===void 0&&(e=!1),this.throwIfDisposed(),O.image.resizeNearestNeighbor(this,n,e)},r.prototype.conv1d=function(n,e,t,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),O.conv1d(this,n,e,t,o,a,i)},r.prototype.conv2d=function(n,e,t,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),O.conv2d(this,n,e,t,o,a,i)},r.prototype.conv2dTranspose=function(n,e,t,o,a){return this.throwIfDisposed(),O.conv2dTranspose(this,n,e,t,o,a)},r.prototype.depthwiseConv2D=function(n,e,t,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),O.depthwiseConv2d(this,n,e,t,o,a,i)},r.prototype.separableConv2d=function(n,e,t,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),O.separableConv2d(this,n,e,t,o,a,i)},r.prototype.avgPool=function(n,e,t,o){return this.throwIfDisposed(),O.avgPool(this,n,e,t,o)},r.prototype.maxPool=function(n,e,t,o){return this.throwIfDisposed(),O.maxPool(this,n,e,t,o)},r.prototype.localResponseNormalization=function(n,e,t,o){return n===void 0&&(n=5),e===void 0&&(e=1),t===void 0&&(t=1),o===void 0&&(o=.5),O.localResponseNormalization(this,n,e,t,o)},r.prototype.pool=function(n,e,t,o,a){return this.throwIfDisposed(),O.pool(this,n,e,t,o,a)},r.prototype.variable=function(n,e,t){return n===void 0&&(n=!0),this.throwIfDisposed(),en().makeVariable(this,n,e,t)},r.prototype.unsortedSegmentSum=function(n,e){return this.throwIfDisposed(),O.unsortedSegmentSum(this,n,e)},r.prototype.batchToSpaceND=function(n,e){return this.throwIfDisposed(),O.batchToSpaceND(this,n,e)},r.prototype.spaceToBatchND=function(n,e){return this.throwIfDisposed(),O.spaceToBatchND(this,n,e)},r.prototype.topk=function(n,e){return n===void 0&&(n=1),e===void 0&&(e=!0),this.throwIfDisposed(),O.topk(this,n,e)},r.prototype.stridedSlice=function(n,e,t,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),O.stridedSlice(this,n,e,t,o,a,i,s,u)},r.prototype.depthToSpace=function(n,e){return this.throwIfDisposed(),O.depthToSpace(this,n,e)},r.prototype.fft=function(){return this.throwIfDisposed(),O.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),O.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),O.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),O.spectral.irfft(this)},r}();Object.defineProperty(Te,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Yu,os,as,is,ss,jn=function(r){function n(e,t,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=t,i.name=o,i}return jt(n,r),n.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Ue(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");en().disposeTensor(this),this.dataId=e.dataId,en().incRef(this,null)},n.prototype.dispose=function(){en().disposeVariable(this),this.isDisposedInternal=!0},n}(Te);Object.defineProperty(jn,Symbol.hasInstance,{value:function(r){return r instanceof Te&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Yu||(Yu={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(os||(os={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(as||(as={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(is||(is={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(ss||(ss={}));var ld={float32:is,int32:os,bool:as,complex64:ss};function Xe(r,n){if(r==="string"||n==="string"){if(r==="string"&&n==="string")return"string";throw new Error("Can not upcast "+r+" with "+n)}return ld[r][n]}function Ni(r){return Xe(r,"int32")}function Oe(r,n){if(r.dtype===n.dtype)return[r,n];var e=Xe(r.dtype,n.dtype);return[r.cast(e),n.cast(e)]}function Kc(r,n){E(r.dtype===n.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+n.dtype+") input must match"})}function Is(r){var n=[];return function e(t,o,a){if(t!=null){if(t instanceof Te)return void o.push(t);if(i=t,!(!Array.isArray(i)&&typeof i!="object")){var i,s=t;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,n,new Set),n}var Mi,Nx=Object.freeze({makeTypesMatch:Oe,assertTypesMatch:Kc,isTensorInList:function(r,n){return n.some(function(e){return e.id===r.id})},getTensorsInContainer:Is}),$u=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var n in this.registeredVariables)this.registeredVariables[n].dispose()},r}(),fd=function(){function r(n){this.ENV=n,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new $u}return r.prototype.ready=function(){return ee(this,void 0,void 0,function(){var n,e,t;return te(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];n=this.getSortedBackends(),e=0,o.label=1;case 1:return e<n.length?(t=n[e],[4,this.initializeBackend(t).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(t)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var n=this.initializeBackendsAndReturnBest(),e=n.name;if(n.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(n){return!(n in this.registry)&&(!(n in this.registryFactory)||this.initializeBackend(n).asyncInit)?null:this.registry[n]},r.prototype.findBackendFactory=function(n){return n in this.registryFactory?this.registryFactory[n].factory:null},r.prototype.registerBackend=function(n,e,t){return t===void 0&&(t=1),n in this.registryFactory?(console.warn(n+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[n]={factory:e,priority:t},!0)},r.prototype.setBackend=function(n){return ee(this,void 0,void 0,function(){var e,t,o;return te(this,function(a){switch(a.label){case 0:if(this.registryFactory[n]==null)throw new Error("Backend name '"+n+"' not found in registry");return this.backendName=n,this.registry[n]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(n),t=e.success,e.asyncInit?[4,t]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=t,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[n],this.setupRegisteredKernels(),this.profiler=new sd(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var n=this;ju(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(n.backendInstance)})},r.prototype.disposeRegisteredKernels=function(n){var e=this;ju(n).forEach(function(t){t.disposeFunc!=null&&t.disposeFunc(e.registry[n])})},r.prototype.initializeBackend=function(n){var e=this,t=this.registryFactory[n];if(t==null)throw new Error("Cannot initialize backend "+n+", no registration found.");try{var o=t.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[n]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+n+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[n]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+n+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(n){if(!(n in this.registryFactory))throw new Error(n+" backend not found in registry");this.backendName===n&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,n in this.registry&&(this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n]),delete this.registryFactory[n],this.backendName===n&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var n=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,t){return n.registryFactory[t].priority-n.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var n=this.getSortedBackends(),e=0;e<n.length;e++){var t=n[e],o=this.initializeBackend(t),a=o.success,i=o.asyncInit;if(i||a)return{name:t,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(n,e){var t=this.state.tensorInfo.get(e),o=t.backend,a=this.readSync(e);o.disposeData(e),t.backend=n,n.move(e,a,t.shape,t.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(n,e){var t,o=this,a=null;if(e==null){if(typeof n!="function")throw new Error("Please provide a function to tidy()");e=n}else{if(typeof n!="string"&&!(n instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=n}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(t)},function(){return(t=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),t})},r.prototype.scopedRun=function(n,e,t){n();try{var o=t();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(n){var e=this.makeTensorFromDataId(n.dataId,n.shape,n.dtype),t={x:n};return this.addTapeNode(this.state.activeScope.name,t,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(n,e,t,o,a){return this.runKernelFunc(null,e,null,n,t,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(n,e,t){var o=this.backend.numDataIds(),a=0;t.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+n+"'")},r.prototype.runKernelFunc=function(n,e,t,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var p,h=function(y){f&&(l=y.map(function(b){return c.keep(c.clone(b))}))},d=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=Ac(o,this.backendName);return p=g!=null?function(){var y=c.backend.numDataIds();v=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var b=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,b);var x=b.map(function(C){var S=C.dataId,R=C.shape,k=C.dtype;return c.makeTensorFromDataId(S,R,k)}),w=x.filter(function(C,S){return s[S]});return h((i||[]).slice().concat(w)),x}:function(){var y=c.backend.numDataIds();v=c.tidy(function(){return n(c.backend,h)});var b=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return p()}):p()}),f&&this.addTapeNode(o,e,u,t,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(y){return e[y].shape}),outputShapes:u.map(function(y){return y.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(n,e,t,o){if(n==null)throw new Error("Values passed to engine.makeTensor() are null");t=t||"float32",o=o||this.backend;var a=n;t==="string"&&Sn(n[0])&&(a=n.map(function(l){return Gc(l)}));var i=o.write(a,e,t),s=new Te(e,t,i,this.nextTensorId());if(this.incRef(s,o),t==="string"){var u=this.state.tensorInfo.get(i),c=zc(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(n,e,t,o){var a=new Te(e,t=t||"float32",n,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(n,e,t,o){e===void 0&&(e=!0),t=t||this.nextVariableId().toString(),o!=null&&o!==n.dtype&&(n=n.asType(o));var a=new jn(n,e,t,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(n,e){var t=this.state.tensorInfo.has(n.dataId)?this.state.tensorInfo.get(n.dataId).refCount:0;if(this.state.numTensors++,n.dtype==="string"&&this.state.numStringTensors++,t===0){this.state.numDataBuffers++;var o=0;n.dtype!=="complex64"&&n.dtype!=="string"&&(o=n.size*Cs(n.dtype)),this.state.tensorInfo.set(n.dataId,{backend:e||this.backend,dtype:n.dtype,shape:n.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(n.dataId).refCount++,n instanceof jn||this.track(n)},r.prototype.disposeTensor=function(n){if(this.state.tensorInfo.has(n.dataId)){this.state.numTensors--,n.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(n.dataId);e.refCount<=1?(n.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(n.dataId),this.state.tensorInfo.delete(n.dataId)):this.state.tensorInfo.get(n.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var n in this.state.registeredVariables){var e=this.state.registeredVariables[n];this.disposeVariable(e)}},r.prototype.disposeVariable=function(n){this.disposeTensor(n),this.state.registeredVariables[n.name]!=null&&delete this.state.registeredVariables[n.name]},r.prototype.memory=function(){var n=this.backend.memory();return n.numTensors=this.state.numTensors,n.numDataBuffers=this.state.numDataBuffers,n.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(n.unreliable=!0,n.reasons==null&&(n.reasons=[]),n.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),n},r.prototype.profile=function(n){return ee(this,void 0,void 0,function(){var e,t;return te(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,t=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=n(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-t,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(n,e,t,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:n,inputs:e,outputs:t,saved:a},u=ad(n);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var p=t[f],h=Sr(p.size,p.dtype);return i.makeTensor(h,p.shape,p.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(n){return n.kept=!0,n},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(n){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};n&&(e.name=n),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(n){for(var e=this,t=Is(n),o=new Set(t.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(n,e,t,o){var a=this;if(o===void 0&&(o=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),t!=null&&t.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+t.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",n)});E(i instanceof Te,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},p={},h=0;h<c.length;h++)f[c[h].id]=!0;for(h=0;h<u.length;h++){var d=(C=u[h]).inputs;for(var m in d){for(var v=d[m],g=!1,y=0;y<c.length;y++)if(f[v.id]){C.outputs.forEach(function(I){return f[I.id]=!0}),g=!0,p[C.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var x={};for(h=u.length-1;h>=0;h--)for(d=(C=u[h]).inputs,y=0;y<C.outputs.length;y++)if(b[C.outputs[y].id]){for(var m in d)b[d[m].id]=!0,x[C.id]=!0;break}var w=[];for(h=0;h<u.length;h++){var C;if(p[(C=u[h]).id]&&x[C.id]){var S={};for(var m in C.inputs){var R=C.inputs[m];f[R.id]&&(S[m]=R)}var k=Object.assign({},C);k.inputs=S,k.outputs=C.outputs,w.push(k)}}return w}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=t==null?(u=i.shape,c=Es(ne(u),"float32"),F.makeTensor(c,u,"float32")):t,function(p,h,d){for(var m=function(g){var y=h[g],b=[];if(y.outputs.forEach(function(S){var R=p[S.id];R!=null?b.push(R):b.push(null)}),y.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+y.kernelName+".");var x=y.gradient(b),w=function(S){if(!(S in x))throw new Error("Cannot backprop through input "+S+". Available gradients found: "+Object.keys(x)+".");var R=d(function(){return x[S]()});if(R.dtype!=="float32")throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input "+S+" must have 'float32' dtype, but has '"+R.dtype+"'");var k=y.inputs[S];if(!Ue(R.shape,k.shape))throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input '"+S+"' has shape '"+R.shape+"', which does not match the shape of the input '"+k.shape+"'");if(p[k.id]==null)p[k.id]=R;else{var I=p[k.id];p[k.id]=I.add(R),I.dispose()}};for(var C in y.inputs)w(C)},v=h.length-1;v>=0;v--)m(v)}(l,s,function(p){return a.tidy(p)});var f=e.map(function(p){return l[p.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(p){for(var h=0,d=p.saved;h<d.length;h++)d[h].dispose()}),a.state.activeTape=null),{value:i,grads:f}})},r.prototype.customGrad=function(n){var e=this;return E(_a(n),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var t,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every(function(s){return s instanceof Te}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return E((t=n.apply(void 0,o.concat([u]))).value instanceof Te,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(_a(t.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),t.value},i,function(s,u){var c=t.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(p){return p instanceof Te}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(p,h){f[h]=function(){return p}}),f})}},r.prototype.readSync=function(n){return this.state.tensorInfo.get(n).backend.readSync(n)},r.prototype.read=function(n){return this.state.tensorInfo.get(n).backend.read(n)},r.prototype.time=function(n){return ee(this,void 0,void 0,function(){var e,t;return te(this,function(o){switch(o.label){case 0:return e=Gt(),[4,this.backend.time(n)];case 1:return(t=o.sent()).wallMs=Gt()-e,[2,t]}})})},r.prototype.track=function(n){return this.state.activeScope!=null&&(n.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(n)),n},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var n in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new $u,this.registry)this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),F=function(){var r=function(){if(Mi==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Mi=e}return Mi}();if(r._tfengine==null){var n=new rd(r);r._tfengine=new fd(n)}return function(e){Dc=e}(r._tfengine.ENV),en=function(){return r._tfengine},r._tfengine}();function Xc(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var fn=z();fn.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),fn.registerFlag("IS_BROWSER",function(){return Xc()}),fn.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),fn.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),fn.registerFlag("PROD",function(){return!1}),fn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return fn.getBool("DEBUG")}),fn.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),fn.registerFlag("IS_TEST",function(){return!1});var fo,Dt,Tt,zn={},Oi={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Yc(r,n){zn[r]=n}function on(r){r in zn||(zn[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var t=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return t.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete zn[e]},!1),e===1?t.getContext("webgl",Oi)||t.getContext("experimental-webgl",Oi):t.getContext("webgl2",Oi)}(r));var n=zn[r];return n.isContextLost()?(delete zn[r],on(r)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),zn[r])}function Oa(r,n){return[n,r]}function io(r){var n=ne(r);return Ca(Math.ceil(n/4))}function xo(r,n){return[Math.max(1,Math.ceil(n/2)),Math.max(1,Math.ceil(r/2))]}function Rs(r,n){var e,t,o,a,i,s,u,c,l,f=r;return z().getNumber("WEBGL_VERSION")===2?(e=f.R32F,t=f.R16F,o=f.RGBA16F,a=f.RGBA32F,i=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=r.RGBA,t=r.RGBA,o=r.RGBA,a=f.RGBA,i=r.RGBA,s=4,u=4,c=n!=null?n.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:t,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function Z(r,n,e){var t=e();return n&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+Jc(o,a))}(r),t}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(fo||(fo={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(Dt||(Dt={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(Tt||(Tt={}));var pd=596e-10,hd=65504;function $c(r){return!!(z().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||pd<Math.abs(r)&&Math.abs(r)<hd)}function Jc(r,n){switch(n){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+n}}function ro(r,n,e){return mn(r,n,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Qc(r,n,e){var t=mn(r,n,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(Z(r,n,function(){return r.shaderSource(t,e)}),Z(r,n,function(){return r.compileShader(t)}),r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function Zc(r,n,e){var t=mn(r,n,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(Z(r,n,function(){return r.shaderSource(t,e)}),Z(r,n,function(){return r.compileShader(t)}),r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw function(o,a){var i=dd.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return Hn((g+1).toString(),c)+v}),f=0,p=0;p<l.length;p++)f=Math.max(l[p].length,f);var h=l.slice(0,s-1),d=l.slice(s-1,s),m=l.slice(s);console.log(h.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+Hn(d[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(e,r.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}var ha,da,dd=/ERROR: [0-9]+:([0-9]+):/g;function el(r,n){return mn(r,n,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function tl(r,n,e){if(Z(r,n,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function va(r,n,e){if(Z(r,n,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function nl(r,n,e){var t=mn(r,n,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Z(r,n,function(){return r.bindBuffer(r.ARRAY_BUFFER,t)}),Z(r,n,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),t}function rl(r,n,e){var t=mn(r,n,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Z(r,n,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t)}),Z(r,n,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),t}function ol(r,n){return mn(r,n,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function al(r,n){var e=z().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||n<=0){var t="["+r+"x"+n+"]";throw new Error("Requested texture size "+t+" is invalid.")}if(r>e||n>e)throw t="["+r+"x"+n+"]",new Error("Requested texture size "+t+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function il(r,n){return mn(r,n,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function us(r,n,e,t,o,a,i,s){var u=r.getAttribLocation(e,t);return u!==-1&&(Z(r,n,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),Z(r,n,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),Z(r,n,function(){return r.enableVertexAttribArray(u)}),!0)}function sl(r,n,e,t){pl(r,t),Z(r,n,function(){return r.activeTexture(r.TEXTURE0+t)}),Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function ul(r,n,e,t){return mn(r,n,function(){return r.getUniformLocation(e,t)},'uniform "'+t+'" not present in program.')}function cl(r,n,e){return r.getUniformLocation(n,e)}function ll(r,n,e,t,o,a){Z(r,n,function(){return sl(r,n,t,a)}),Z(r,n,function(){return r.uniform1i(o,a)})}function ma(r,n,e,t){Z(r,n,function(){return r.bindFramebuffer(r.FRAMEBUFFER,t)}),Z(r,n,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function cs(r,n,e){Z(r,n,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),Z(r,n,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function oo(r){var n=r.checkFramebufferStatus(r.FRAMEBUFFER);if(n!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+fl(r,n))}function fl(r,n){switch(n){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+n}}function mn(r,n,e,t){var o=Z(r,n,function(){return e()});if(o==null)throw new Error(t);return o}function pl(r,n){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,t=n+r.TEXTURE0;if(t<r.TEXTURE0||t>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function po(r,n){return n===void 0&&(n=2),ne(r.slice(0,r.length-n))}function ho(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function ga(r){var n=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(n=[po(r)].concat(ho(r))),n}function hl(r,n){var e;n===void 0&&(n=!1);var t=z().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n&&(t*=2,(r=r.map(function(c,l){return l>=r.length-2?ws(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=Rn(r);r=o.newShape}var a=ne(r);if(r.length<=1&&a<=t)return[1,a];if(r.length===2&&r[0]<=t&&r[1]<=t)return r;if(r.length===3&&r[0]*r[1]<=t&&r[2]<=t)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=t&&r[1]*r[2]<=t)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=t&&r[3]<=t)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=t&&r[1]*r[2]*r[3]<=t)return[r[0],r[1]*r[2]*r[3]];if(n){var i=po(r),s=2,u=2;return r.length&&(s=(e=ho(r))[0],u=e[1]),Ca(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return Ca(a)}function oa(r){return r%2==0}function ao(r,n){if(Ue(r=r.slice(-2),n=n.slice(-2))||!r.length||!n.length||r[0]===0||r[1]===0||n[0]===0||n[1]===0)return!0;if(r.length!==n.length){var e=r.slice(-1)[0],t=n.slice(-1)[0];if(e===t||oa(e)&&oa(t)&&(r[0]===1||n[0]===1))return!0}return r[1]===n[1]&&oa(r[0])&&oa(n[0])}function dl(r){if(ha==null){var n=on(r);ha=n.getParameter(n.MAX_TEXTURE_SIZE)}return ha}function vl(r){if(da==null){var n=on(r);da=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,da)}function ml(r){if(r===0)return 0;var n=on(r);return At(n,"EXT_disjoint_timer_query_webgl2")&&r===2?2:At(n,"EXT_disjoint_timer_query")?1:0}function At(r,n){return r.getExtension(n)!=null}function ls(r){try{if(on(r)!=null)return!0}catch(n){return!1}return!1}function gl(r){if(r===0)return!1;var n=on(r);if(r===1){if(!At(n,"OES_texture_float"))return!1}else if(!At(n,"EXT_color_buffer_float"))return!1;return fs(n)}function yl(r){if(r===0)return!1;var n=on(r);if(r!==1){if(At(n,"EXT_color_buffer_float"))return fs(n);if(At(n,"EXT_color_buffer_half_float")){var e=n.getExtension("EXT_color_buffer_half_float");return function(t,o){var a=Rs(t,o),i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0);var u=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(i),t.deleteFramebuffer(s),u}(n,e)}return!1}return!!At(n,"OES_texture_float")&&!!At(n,"WEBGL_color_buffer_float")&&fs(n)}function fs(r){var n=Rs(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,n.internalFormatFloat,1,1,0,n.textureFormatFloat,n.textureTypeFloat,null);var t=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,t),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(t),o}function xl(r){return r===2&&on(r).fenceSync!=null}var vd=Object.freeze({callAndCheck:Z,canBeRepresented:$c,getWebGLErrorMessage:Jc,getExtensionOrThrow:ro,createVertexShader:Qc,createFragmentShader:Zc,createProgram:el,linkProgram:tl,validateProgram:va,createStaticVertexBuffer:nl,createStaticIndexBuffer:rl,getNumChannels:function(){return z().getNumber("WEBGL_VERSION")===2?1:4},createTexture:ol,validateTextureSize:al,createFramebuffer:il,bindVertexBufferToProgramAttribute:us,bindTextureUnit:sl,unbindTextureUnit:function(r,n,e){pl(r,e),Z(r,n,function(){return r.activeTexture(r.TEXTURE0+e)}),Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)})},getProgramUniformLocationOrThrow:ul,getProgramUniformLocation:cl,bindTextureToProgramUniformSampler:ll,bindCanvasToFramebuffer:function(r,n){Z(r,n,function(){return r.bindFramebuffer(r.FRAMEBUFFER,null)}),Z(r,n,function(){return r.viewport(0,0,r.canvas.width,r.canvas.height)}),Z(r,n,function(){return r.scissor(0,0,r.canvas.width,r.canvas.height)})},bindColorTextureToFramebuffer:ma,unbindColorTextureFromFramebuffer:cs,validateFramebuffer:oo,getFramebufferErrorMessage:fl,getBatchDim:po,getRowsCols:ho,getShapeAs3D:ga,getTextureShapeFromLogicalShape:hl,isReshapeFree:ao,getWebGLMaxTextureSize:dl,resetMaxTextureSize:function(){ha=null},resetMaxTexturesInShader:function(){da=null},getMaxTexturesInShader:vl,getWebGLDisjointQueryTimerVersion:ml,hasExtension:At,isWebGLVersionEnabled:ls,isCapableOfRenderingToFloatTexture:gl,isDownloadFloatTextureEnabled:yl,isWebGLFenceEnabled:xl}),se=z();function bl(r){z().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function q(r,n){return F.tidy(r,n)}function Rt(r){Is(r).forEach(function(n){return n.dispose()})}function md(r){return F.keep(r)}function ka(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];z().getBool("IS_TEST")||console.warn.apply(console,r)}function rn(r,n){var e=r;if(ot(r))return n==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var t=[];Array.isArray(e)||ot(e)&&n!=="string";)t.push(e.length),e=e[0];return Array.isArray(r)&&z().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!ot(a))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),E(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,t,[]),t}function Ju(r,n,e,t){if(r!=null&&(r!=="numeric"&&r!==n||r==="numeric"&&n==="string"))throw new Error("Argument '"+e+"' passed to '"+t+"' must be "+r+" tensor, but got "+n+" tensor")}function _(r,n,e,t){if(t===void 0&&(t="numeric"),r instanceof Te)return Ju(t,r.dtype,n,e),r;var o=Rr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(t)>=0&&(o=t),Ju(t,o,n,e),r==null||!ot(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+n+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=rn(r,o);ot(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?_s(r,o,z().getBool("DEBUG")):vn(r,[],!0);return F.makeTensor(s,i,o)}function Ia(r,n,e,t){if(t===void 0&&(t="numeric"),!Array.isArray(r))throw new Error("Argument "+n+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return _(o,n+"["+a+"]",e)},t)}function Ss(r,n){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==n-1-e)return!1;return!0}function wl(r,n,e){for(var t=r.length+n.length,o=[],a=0,i=0,s=0;s<t;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(n[i++]);return o}function rt(r,n){for(var e=[],t=r.length,o=0;o<t;o++)n.indexOf(o)===-1&&e.push(r[o]);return[e,n.map(function(a){return r[a]})]}function xt(r,n){return wl(r,n.map(function(e){return 1}),n)}function kt(r,n,e){E(Ss(n,e),function(){return r+" supports only inner-most axes for now. Got axes "+n+" and rank-"+e+" input."})}function Kt(r,n){if(Ss(r,n))return null;for(var e=[],t=0;t<n;++t)r.indexOf(t)===-1&&e.push(t);return r.forEach(function(o){return e.push(o)}),e}function Ba(r){return r.map(function(n,e){return[e,n]}).sort(function(n,e){return n[1]-e[1]}).map(function(n){return n[0]})}function Xt(r,n){for(var e=[],t=n-r;t<n;++t)e.push(t);return e}function Cl(r,n){var e=r[0].length;r.forEach(function(o,a){E(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),E(n>=0&&n<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var t=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)E(i===n||o[i]===t[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+t+") along the non-concatenated axis "+a+"."})})}function Kn(r,n){for(var e=r[0].slice(),t=1;t<r.length;t++)e[n]+=r[t][n];return e}function T(r){var n=Object.keys(r);if(n.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+n.length+" keys.");var e=n[0],t=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];F.startScope(e);try{var s=t.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),F.endScope(s),s}catch(u){throw F.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}se.registerFlag("HAS_WEBGL",function(){return se.getNumber("WEBGL_VERSION")>0}),se.registerFlag("WEBGL_VERSION",function(){return ls(2)?2:ls(1)?1:0}),se.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return se.get("WEBGL_VERSION")===2}),se.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),se.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),se.registerFlag("WEBGL_PACK",function(){return se.getBool("HAS_WEBGL")}),se.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_CLIP",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),se.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_PACK_REDUCE",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_LAZILY_UNPACK",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_CONV_IM2COL",function(){return se.getBool("WEBGL_PACK")}),se.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return dl(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return vl(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=se.getNumber("WEBGL_VERSION");return r===0?0:ml(r)}),se.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return se.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),se.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return gl(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!se.getBool("WEBGL_FORCE_F16_TEXTURES")&&se.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),se.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return yl(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return xl(se.getNumber("WEBGL_VERSION"))}),se.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return se.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),jc=bl;var nt=T({complex_:function(r,n){var e=_(r,"real","complex"),t=_(n,"imag","complex");return we(e.shape,t.shape,"real and imag shapes, "+e.shape+" and "+t.shape+", must match in call to tf.complex()."),F.runKernelFunc(function(o){return o.complex(e,t)},{$real:e,$imag:t})}}),Lt=T({real_:function(r){var n=_(r,"input","real");return F.runKernelFunc(function(e){return e.real(n)},{$input:n})}}),tn=T({imag_:function(r){var n=_(r,"input","imag");return F.runKernelFunc(function(e){return e.imag(n)},{$input:n})}});function Ye(r,n,e){return An(r,n,rn(r,e),e)}function An(r,n,e,t){if(t==null&&(t=Rr(r)),t==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!ot(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(n!=null){ks(n);var o=ne(n),a=ne(e);E(o===a,function(){return"Based on the provided shape, ["+n+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==ne(n.slice(i));E(e[i]===n[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+n+"). "})}}return ot(r)||Array.isArray(r)||(r=[r]),n=n||e,r=t!=="string"?_s(r,t,z().getBool("DEBUG")):vn(r,[],!0),F.makeTensor(r,n,t)}function Y(r,n){if((ot(r)&&n!=="string"||Array.isArray(r))&&n!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(n==="string"&&ot(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return An(r,[],[],n)}function Fe(r,n){$n(r);var e=rn(r,n);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return An(r,null,e,n)}function nn(r,n,e){if($n(r),n!=null&&n.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var t=rn(r,e);if(t.length!==2&&t.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return An(r,n,t,e)}function La(r,n,e){if($n(r),n!=null&&n.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var t=rn(r,e);if(t.length!==3&&t.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return An(r,n,t,e)}function je(r,n,e){if($n(r),n!=null&&n.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var t=rn(r,e);if(t.length!==4&&t.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return An(r,n,t,e)}function gd(r,n,e){if($n(r),n!=null&&n.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var t=rn(r,e);if(t.length!==5&&t.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return An(r,n,t,e)}function yd(r,n,e){if($n(r),n!=null&&n.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var t=rn(r,e);if(t.length!==6&&t.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(t.length===1&&n==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return An(r,n=n||t,t,e)}function xd(r,n,e,t){return n===void 0&&(n=!0),F.makeVariable(r,n,e,t)}function Tr(r,n){if(n===void 0&&(n="float32"),n==="complex64"){var e=Tr(r,"float32"),t=Pe(r,"float32");return nt(e,t)}var o=Es(ne(r),n);return F.makeTensor(o,r,n)}function Pe(r,n){if(n===void 0&&(n="float32"),n==="complex64"){var e=Pe(r,"float32"),t=Pe(r,"float32");return nt(e,t)}var o=Sr(ne(r),n);return F.makeTensor(o,r,n)}function Pt(r,n,e){return F.runKernelFunc(function(t){return t.fill(r,n,e)},{})}function bd(r,n,e){if(e<=0)throw new Error("The number of values should be positive.");return F.runKernelFunc(function(t){return t.linspace(r,n,e)},{})}function Ra(r,n,e,t){if(e===void 0&&(e=1),t===void 0&&(t="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===n||r<n&&e<0||n<r&&e>1)return Pe([0],t);var o=Sr(Math.abs(Math.ceil((n-r)/e)),t);n<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return Fe(o,t)}var _l=T({onesLike_:function(r){var n=_(r,"x","onesLike");if(n.dtype==="complex64"){var e=_l(Lt(n)),t=be(tn(n));return nt(e,t)}return F.runKernelFunc(function(o){return o.onesLike(n)},{$x:n},function(o,a){return{$x:function(){return be(o)}}})}}),be=T({zerosLike_:function(r){var n=_(r,"x","zerosLike");return F.runKernelFunc(function(e){return e.zerosLike(n)},{$x:n},function(e,t){return{$x:function(){return be(e)}}})}}),Me=T({concat_:function(r,n){n===void 0&&(n=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=Ia(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),n=He(n,e[0].shape)[0];var t=Kn(e.map(function(s){return s.shape}),n);if(ne(t)===0)return Ye([],t);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});Cl(o,n);var a=e,i={axis:n};return F.runKernelFunc(function(s){return s.concat(e,n)},a,function(s){var u=o.map(function(c){return c[n]});return Ts(s,u,n).map(function(c){return function(){return c}})},"Concat",i)}}),wd=T({concat1d_:function(r){return Me(r,0)}}),Cd=T({concat2d_:function(r,n){return Me(r,n)}}),_d=T({concat3d_:function(r,n){return Me(r,n)}}),Ed=T({concat4d_:function(r,n){return Me(r,n)}}),Ts=T({split_:function(r,n,e){e===void 0&&(e=0);var t,o=_(r,"x","split");return e=He(e,o.shape)[0],typeof n=="number"?(E(o.shape[e]%n==0,function(){return"Number of splits must evenly divide the axis."}),t=new Array(n).fill(o.shape[e]/n)):(E(o.shape[e]===n.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),t=n),F.runKernelFunc(function(a){return a.split(o,t,e)},{$x:o},function(a){return{$x:function(){return Me(a,e)}}})}});function Jn(r,n){return r(n={exports:{}},n.exports),n.exports}var kd=Jn(function(r){(function(n,e,t){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var p=0;p<f.length;p++){var h=.02519603282416938*(u+=f.charCodeAt(p));h-=u=h>>>0,u=(h*=u)>>>0,u+=4294967296*(h-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.alea=i})(0,r,!1)}),Id=Jn(function(r){(function(n,e,t){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.xor128=i})(0,r,!1)}),Rd=Jn(function(r){(function(n,e,t){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.xorwow=i})(0,r,!1)}),Sd=Jn(function(r){(function(n,e,t){function o(s){var u=this;u.next=function(){var c,l,f=u.x,p=u.i;return c=f[p],l=(c^=c>>>7)^c<<24,l^=(c=f[p+1&7])^c>>>10,l^=(c=f[p+3&7])^c>>>3,l^=(c=f[p+4&7])^c<<7,c=f[p+7&7],l^=(c^=c<<13)^c<<9,f[p]=l,u.i=p+1&7,l},function(c,l){var f,p=[];if(l===(0|l))p[0]=l;else for(l=""+l,f=0;f<l.length;++f)p[7&f]=p[7&f]<<15^l.charCodeAt(f)+p[f+1&7]<<13;for(;p.length<8;)p.push(0);for(f=0;f<8&&p[f]===0;++f);for(f==8?p[7]=-1:p[f],c.x=p,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(l.x&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.xorshift7=i})(0,r,!1)}),Td=Jn(function(r){(function(n,e,t){function o(s){var u=this;u.next=function(){var c,l,f=u.w,p=u.X,h=u.i;return u.w=f=f+1640531527|0,l=p[h+34&127],c=p[h=h+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=p[h]=l^c,u.i=h,l+(f^f>>>16)|0},function(c,l){var f,p,h,d,m,v=[],g=128;for(l===(0|l)?(p=l,l=null):(l+="\0",p=0,g=Math.max(g,l.length)),h=0,d=-32;d<g;++d)l&&(p^=l.charCodeAt((d+32)%l.length)),d===0&&(m=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,d>=0&&(m=m+1640531527|0,h=(f=v[127&d]^=p+m)==0?h+1:0);for(h>=128&&(v[127&(l&&l.length||0)]=-1),h=127,d=512;d>0;--d)p=v[h+34&127],f=v[h=h+1&127],p^=p<<13,f^=f<<17,p^=p>>>15,f^=f>>>12,v[h]=p^f;c.w=m,c.X=v,c.i=h}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(l.X&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.xor4096=i})(0,r,!1)}),Dd=Jn(function(r){(function(n,e,t){function o(s){var u=this,c="";u.next=function(){var f=u.b,p=u.c,h=u.d,d=u.a;return f=f<<25^f>>>7^p,p=p-h|0,h=h<<24^h>>>8^d,d=d-f|0,u.b=f=f<<20^f>>>12^p,u.c=p=p-h|0,u.d=h<<16^p>>>16^d,u.a=d-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:t&&t.amd?t(function(){return i}):this.tychei=i})(0,r,!1)}),Vn=Jn(function(r){(function(n,e){var t,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,f=a-1;function p(g,y,b){var x=[],w=m(function R(k,I){var A,D=[],B=typeof k;if(I&&B=="object")for(A in k)try{D.push(R(k[A],I-1))}catch(M){}return D.length?D:B=="string"?k:k+"\0"}((y=y==1?{entropy:!0}:y||{}).entropy?[g,v(n)]:g==null?function(){try{var R;return t&&(R=t.randomBytes)?R=R(a):(R=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(R)),v(R)}catch(A){var k=o.navigator,I=k&&k.plugins;return[+new Date,o,I,o.screen,v(n)]}}():g,3),x),C=new h(x),S=function(){for(var R=C.g(i),k=u,I=0;R<c;)R=(R+I)*a,k*=a,I=C.g(1);for(;R>=l;)R/=2,k/=2,I>>>=1;return(R+I)/k};return S.int32=function(){return 0|C.g(4)},S.quick=function(){return C.g(4)/4294967296},S.double=S,m(v(C.S),n),(y.pass||b||function(R,k,I,A){return A&&(A.S&&d(A,C),R.state=function(){return d(C,{})}),I?(e[s]=R,k):R})(S,w,"global"in y?y.global:this==e,y.state)}function h(g){var y,b=g.length,x=this,w=0,C=x.i=x.j=0,S=x.S=[];for(b||(g=[b++]);w<a;)S[w]=w++;for(w=0;w<a;w++)S[w]=S[C=f&C+g[w%b]+(y=S[w])],S[C]=y;(x.g=function(R){for(var k,I=0,A=x.i,D=x.j,B=x.S;R--;)k=B[A=f&A+1],I=I*a+B[f&(B[A]=B[D=f&D+k])+(B[D]=k)];return x.i=A,x.j=D,I})(a)}function d(g,y){return y.i=g.i,y.j=g.j,y.S=g.S.slice(),y}function m(g,y){for(var b,x=g+"",w=0;w<x.length;)y[f&w]=f&(b^=19*y[f&w])+x.charCodeAt(w++);return v(y)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=p,m(e.random(),n),r.exports){r.exports=p;try{t=Gu()}catch(g){}}})([],Math)});Vn.alea=kd,Vn.xor128=Id,Vn.xorwow=Rd,Vn.xorshift7=Sd,Vn.xor4096=Td,Vn.tychei=Dd;var Wa=Vn.alea,Ds=function(){function r(n,e,t,o,a){this.mean=n,this.stdDev=e,this.dtype=t,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=Wa(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var n=this.nextVal;return this.nextVal=NaN,n}for(var e,t,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,t=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(t)||(this.nextVal=this.convertValue(t)),this.convertValue(e)},r.prototype.convertValue=function(n){return this.dtype==null||this.dtype==="float32"?n:Math.round(n)},r.prototype.isValidTruncated=function(n){return n<=this.upper&&n>=this.lower},r}(),Ad=function(){function r(n,e,t,o){this.alpha=n,this.beta=1/e,this.dtype=t;var a=o||Math.random();this.randu=Wa(a.toString()),this.randn=new Ds(0,1,t,!1,this.randu()),this.d=n<1?n+2/3:n-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var n,e,t,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(n=o*o)*n,t=.5*n+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<t)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(n){return this.dtype==="float32"?n:Math.round(n)},r}(),Fd=function(){function r(n,e,t,o){var a=this;if(n===void 0&&(n=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=n,this.range=e-n,this.dtype=t,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+n+" - "+e+" <= 1 and dtype is not float");this.random=Wa(o)}return r.prototype.convertValue=function(n){return this.canReturnFloat()?n:Math.round(n)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function le(r,n,e){return n===void 0&&(n="float32"),n=n||"float32",ks(r),new lo(r,n,e)}function Pd(r,n){n===void 0&&(n=!1),console.log(r.toString(n))}var El=T({batchToSpaceND_:function(r,n,e){var t=_(r,"x","batchToSpaceND"),o=n.reduce(function(a,i){return a*i});return E(t.rank>=1+n.length,function(){return"input rank is "+t.rank+" but should be > than blockShape.length "+n.length}),E(e.length===n.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+n.length}),E(t.shape[0]%o==0,function(){return"input tensor batch is "+t.shape[0]+" but is not divisible by the product of the elements of blockShape "+n.join(" * ")+" === "+o}),F.runKernelFunc(function(a){return a.batchToSpaceND(t,n,e)},{$x:t},function(a){return{$x:function(){return a.spaceToBatchND(n,e)}}})}}),Nd=T({broadcastTo_:function(r,n){var e=_(r,"broadcastTo","x"),t=e.shape;if(n.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+n+"].");if(n.length<e.rank)throw new Error("broadcastTo(): shape.length="+n.length+" < input.rank="+e.rank+".");if(n.length>e.rank){for(var o=e.shape.slice();o.length<n.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(n),i=n.length-1;i>=0;i--)if(e.shape[i]===n[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+t+"] cannot be broadcast to ["+n+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():F.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Md=T({cast_:function(r,n){var e=_(r,"x","cast");if(!Lc(n))throw new Error("Failed to cast to unknown dtype "+n);if(n==="string"&&e.dtype!=="string"||n!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var t={dtype:n};return F.runKernelFunc(function(o){return o.cast(e,n)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",t)}}),Od=T({clone_:function(r){var n=_(r,"x","clone",null);return F.runKernelFunc(function(){return F.makeTensorFromDataId(n.dataId,n.shape,n.dtype)},{$x:n},function(e){return{$x:function(){return e.toFloat()}}})}}),Bd=T({cumsum_:function(r,n,e,t){n===void 0&&(n=0),e===void 0&&(e=!1),t===void 0&&(t=!1);var o=_(r,"x","cumsum"),a=Kt([n|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=Xt(1,o.rank)[0],u=F.runKernelFunc(function(c){return c.cumsum(i,s,e,t)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(n,e,!t)}}});return a!=null&&(u=u.transpose(a)),u}}),Ld=T({depthToSpace_:function(r,n,e){e===void 0&&(e="NHWC");var t=_(r,"x","depthToSpace"),o=e==="NHWC"?t.shape[1]:t.shape[2],a=e==="NHWC"?t.shape[2]:t.shape[3],i=e==="NHWC"?t.shape[3]:t.shape[1];return E(o*n>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+n+`  for depthToSpace with input shape
      `+t.shape}),E(a*n>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+n+` for depthToSpace with input shape
          `+t.shape}),E(i%(n*n)==0,function(){return"Dimension size must be evenly divisible by "+n*n+" but is "+i+" for depthToSpace with input shape "+t.shape}),F.runKernelFunc(function(s){return s.depthToSpace(t,n,e)},{$x:t})}}),ft=T({expandDims_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","expandDims",null);E(n<=e.rank,function(){return"Axis must be <= rank of the tensor"});var t=e.shape.slice();return n<0&&(E(-(e.rank+1)<=n,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),n=e.rank+n+1),t.splice(n,0,1),wt(e,t)}}),kl=T({eye_:function(r,n,e,t){t===void 0&&(t="float32"),n==null&&(n=r);for(var o=le([r,n],t),a=r<=n?r:n,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,n);if(e==null)return s;if(e.length===1)return qn(ft(s,0),[e[0],1,1]);if(e.length===2)return qn(ft(ft(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return qn(ft(ft(ft(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Wd=T({multinomial_:function(r,n,e,t){t===void 0&&(t=!1);var o=_(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=F.runKernelFunc(function(c){return c.multinomial(s,t,n,e)},{logits2D:s});return i===1?u.as1D():u}}),ps=T({oneHot_:function(r,n,e,t){if(e===void 0&&(e=1),t===void 0&&(t=0),n<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+n);var o=_(r,"indices","oneHot","int32"),a=o.shape.concat([n]);return o=o.flatten(),F.runKernelFunc(function(i){return i.oneHot(o,n,e,t)},{$indices:o},function(i){return{$indices:function(){return Pe(o.shape,"float32")}}}).reshape(a)}}),gn=T({pad_:function(r,n,e){e===void 0&&(e=0);var t=_(r,"x","pad");if(t.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:n,constantValue:e};return F.runKernelFunc(function(a){return a.pad(t,n,e)},{x:t},function(a){var i=n.map(function(s){return s[0]});return{x:function(){return a.slice(i,t.shape)}}},"PadV2",o)}}),zd=T({pad1d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),gn(r,[n],e)}}),Vd=T({pad2d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===2&&n[0].length===2&&n[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),gn(r,n,e)}}),Ud=T({pad3d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===3&&n[0].length===2&&n[1].length===2&&n[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),gn(r,n,e)}}),Gd=T({pad4d_:function(r,n,e){return e===void 0&&(e=0),E(n.length===4&&n[0].length===2&&n[1].length===2&&n[2].length===2&&n[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),gn(r,n,e)}}),Hd=T({rand_:function(r,n,e){var t=ne(r),o=null;if(e==null||e==="float32")o=new Float32Array(t);else if(e==="int32")o=new Int32Array(t);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(t)}for(var a=0;a<t;a++)o[a]=n();return F.makeTensor(o,r,e)}}),qd=T({randomNormal_:function(r,n,e,t,o){if(n===void 0&&(n=0),e===void 0&&(e=1),t!=null&&t==="bool")throw new Error("Unsupported data type "+t);for(var a=new Ds(n,e,t,!1,o),i=le(r,t),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),jd=T({randomGamma_:function(r,n,e,t,o){if(e===void 0&&(e=1),t===void 0&&(t="float32"),e==null&&(e=1),t==null&&(t="float32"),t!=="float32"&&t!=="int32")throw new Error("Unsupported data type "+t);for(var a=new Ad(n,e,t,o),i=le(r,t),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Il=T({randomUniform_:function(r,n,e,t,o){n===void 0&&(n=0),e===void 0&&(e=1),t===void 0&&(t="float32");for(var a=le(r,t),i=new Fd(n,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),wt=T({reshape_:function(r,n){var e=_(r,"x","reshape",null);n=Oc(n,e.size),E(e.size===ne(n),function(){return"new shape and old shape must have the same number of elements."});var t={shape:n};return F.runKernelFunc(function(o){return o.reshape(e,n)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",t)}}),Rl=T({spaceToBatchND_:function(r,n,e){var t=_(r,"x","spaceToBatchND");return E(t.rank>=1+n.length,function(){return"input rank "+t.rank+" should be > than [blockShape] "+n.length}),E(e.length===n.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+n.length}),E(t.shape.reduce(function(o,a,i){return i>0&&i<=n.length?o&&(a+e[i-1][0]+e[i-1][1])%n[i-1]==0:o},!0),function(){return"input spatial dimensions "+t.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+n.toString()}),F.runKernelFunc(function(o){return o.spaceToBatchND(t,n,e)},{$x:t},function(o){return{$x:function(){return o.batchToSpaceND(n,e)}}})}}),Sl=T({squeeze_:function(r,n){var e=_(r,"x","squeeze");return wt(e,Rn(e.shape,n).newShape)}}),at=T({stack_:function(r,n){n===void 0&&(n=0);var e=Ia(r,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(n);var t=e[0].rank,o=e[0].shape,a=e[0].dtype;E(n<=t,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){we(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(n)});return Me(i,n)}}),qn=T({tile_:function(r,n){var e=_(r,"x","tile",null);E(e.rank===n.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+n+"."});var t=[e],o={reps:n};return F.runKernelFunc(function(a,i){var s=a.tile(e,n);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=be(s);if(s.rank===1)for(var c=0;c<n[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<n[0];++c)for(var l=0;l<n[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<n[0];++c)for(l=0;l<n[1];++l)for(var f=0;f<n[2];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<n[0];++c)for(l=0;l<n[1];++l)for(f=0;f<n[2];++f)for(var p=0;p<n[3];++p)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],p*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,t)}}),Kd=T({truncatedNormal_:function(r,n,e,t,o){if(n===void 0&&(n=0),e===void 0&&(e=1),t!=null&&t==="bool")throw new Error("Unsupported data type "+t);for(var a=new Ds(n,e,t,!0,o),i=le(r,t),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ie=T({unstack_:function(r,n){n===void 0&&(n=0),n=n||0;var e=_(r,"x","unstack");E(n>=-e.shape.length&&n<e.shape.length,function(){return"Axis = "+n+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),n<0&&(n+=e.shape.length);var t={axis:n};return F.runKernelFunc(function(o){return o.unstack(e,n)},{x:e},function(o){return{x:function(){return at(o,n)}}},"Unpack",t)}}),Xd=function(r,n){return ee(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l,f;return te(this,function(p){switch(p.label){case 0:return e=_(r,"x","setdiff1d"),t=_(n,"y","setdiff1d"),E(e.dtype===t.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+t.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(t.rank===1,function(){return"y should be 1D tensor, but got y ("+t.shape+")."}),[4,e.data()];case 1:return o=p.sent(),[4,t.data()];case 2:for(a=p.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new lo([s],e.dtype),c=new lo([s],"int32"),l=0,f=0;l<o.length;l++)i.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Sa(r,n,e,t){t===void 0&&(t=!0);var o=[];if(t)(o=o.concat(n.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=n.length,i=0;i<a;++i)o=o.concat([r[i+1]/n[i],n[i]]);o=o.concat(r.slice(a+1))}return o}function Ta(r,n,e){e===void 0&&(e=!0);var t=[];if(e){t.push(n);for(var o=n+1;o<r;++o)o<=2*n?(t.push(o),t.push(o-(n+1))):t.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*n+1||o%2==1?i.push(o):a.push(o);t.push.apply(t,a),t.push(0),t.push.apply(t,i)}return t}function Da(r,n,e,t){t===void 0&&(t=!0);var o=[];t?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=n.length?t?o.push(n[a-1]*r[a]):o.push(r[a]/n[a-1]):o.push(r[a]);return o}function Tl(r,n){for(var e=[0],t=0;t<n;++t)e.push(r[t][0]);return e}function Dl(r,n,e){for(var t=r.slice(0,1),o=0;o<e;++o)t.push(r[o+1]-n[o][0]-n[o][1]);return t}function As(r,n){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(n.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+n.rank+".");if(n.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+n.dtype+".");if(n.shape[n.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+n.shape[n.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=n.shape,t=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=t;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Ht(r.shape).map(function(l){return l/u}).concat([1]).slice(0,t);return[s,o,u,c]}var Mx=Object.freeze({prepareAndValidate:As}),Fs=30;function ya(r){return r<=Fs?r:Ea(r,Math.floor(Math.sqrt(r)))}function Al(r,n,e){var t=n.rank>1?n.shape[n.rank-1]:1,o=n.rank>1?n.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+n.shape+", shape: "+r+", sliceDim: "+t+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<t+(e.rank-o))throw new Error(a+" Output shape length < "+(t+(e.rank-o)));if(e.rank!==o+r.length-t)throw new Error(a+" update.rank != "+(o+r.length-t));for(var i=0;i<o;++i)if(e.shape[i]!==n.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+n.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+t])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function Fl(r,n,e){if(n.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+n.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(n.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+n.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(n.size===0)throw new Error("Indices specified for empty output. indices shape: "+n.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Al(e,n,r)}function vo(r,n,e){for(var t=n.shape.length,o=t>1?n.shape[t-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:ne(n.shape)/u,sliceSize:i,strides:Ht(e.slice(0,o)).concat([1]),outputSize:ne(e)}}var Ox=Object.freeze({validateUpdateShape:Al,validateInput:Fl,calculateShapes:vo});function Pl(r,n,e){E(r.rank===n.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+n+" must match the rank of the array ("+r.rank+")."}),E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var t=function(a){E(n[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(n[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)t(o)}function hs(r){for(var n=[],e=0;r>0;)1&r&&n.push(e),r/=2,e++;return n}function za(r,n,e){for(var t=[],o=0;o<r.length;o++)t[o]=Math.ceil((n[o]-r[o])/e[o]);return t}function Nl(r,n,e,t,o){var a=n[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=t[o];return a<0&&(a+=s),a=wa(0,a,s-1)}function Ml(r,n,e,t,o){var a=n[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=t[o];return a<0&&(a+=s),a=i>0?wa(0,a,s):wa(-1,a,s-1)}function Ps(r,n,e){for(var t=e.length,o=0;o<e.length;o++)if(e[o]>1){t=o;break}for(o=t+1;o<e.length;o++)if(n[o]>0||e[o]!==r[o])return!1;return!0}function Ns(r,n){for(var e=r.length>0?r[r.length-1]:1,t=0;t<r.length-1;t++)e+=r[t]*n[t];return e}var Bx=Object.freeze({assertParamsValid:Pl,maskToAxes:hs,computeOutShape:za,startForAxis:Nl,stopForAxis:Ml,isSliceContinous:Ps,computeFlatOffset:Ns});function Yd(r,n){E(_a(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(n==null||Array.isArray(n)&&n.every(function(l){return l instanceof jn}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=n!=null;if(!e)for(var t in n=[],F.registeredVariables)n.push(F.registeredVariables[t]);var o=e?n.filter(function(l){return!l.trainable}):null,a=n.length;E((n=n.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=F.gradients(r,n,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return n.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function Va(r){return F.customGrad(r)}var Ct=T({softmax_:function(r,n){n===void 0&&(n=-1);var e=_(r,"logits","softmax","float32");if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+n);return F.runKernelFunc(function(t,o){var a=t.softmax(e,n);return o([a]),a},{logits:e},function(t,o){var a=o[0],i=t.mul(a);return{logits:function(){return i.sub(i.sum([n],!0).mul(a))}}},"Softmax",{dim:n},[],[!0])}}),$d=T({logSoftmax_:function(r,n){n===void 0&&(n=-1);var e=_(r,"logits","logSoftmax");if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+n);return Va(function(t,o){var a=t.max(n,!0),i=t.sub(a),s=i.toFloat().sub(i.exp().sum(n,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(n,!0).mul(l))}}})(e)}}),Ol=function(){function r(n,e){this.backend=n,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(n){return this.data.has(n)||this.dataMover.moveData(this.backend,n),this.data.get(n)},r.prototype.set=function(n,e){this.dataIdsCount++,this.data.set(n,e)},r.prototype.has=function(n){return this.data.has(n)},r.prototype.delete=function(n){return this.dataIdsCount--,this.data.delete(n)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),Bl=function(){function r(){}return r.prototype.time=function(n){return P("time")},r.prototype.read=function(n){return P("read")},r.prototype.readSync=function(n){return P("readSync")},r.prototype.numDataIds=function(){return P("numDataIds")},r.prototype.disposeData=function(n){return P("disposeData")},r.prototype.write=function(n,e,t){return P("write")},r.prototype.move=function(n,e,t,o){return P("move")},r.prototype.memory=function(){return P("memory")},r.prototype.floatPrecision=function(){return P("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(n,e,t,o){return P("batchMatMul")},r.prototype.fusedBatchMatMul=function(n){return n.a,n.b,n.transposeA,n.transposeB,n.bias,n.activation,n.preluActivationWeights,P("fusedBatchMatMul")},r.prototype.slice=function(n,e,t){return P("slice")},r.prototype.stridedSlice=function(n,e,t,o){return P("stridedSlice")},r.prototype.unstack=function(n,e){return P("unstack")},r.prototype.reverse=function(n,e){return P("reverse")},r.prototype.concat=function(n,e){return P("concat")},r.prototype.neg=function(n){return P("neg")},r.prototype.add=function(n,e){return P("add")},r.prototype.addN=function(n){return P("addN")},r.prototype.subtract=function(n,e){return P("subtract")},r.prototype.multiply=function(n,e){return P("multiply")},r.prototype.realDivide=function(n,e){return P("realDivide")},r.prototype.floorDiv=function(n,e){return P("floorDiv")},r.prototype.sum=function(n,e){return P("sum")},r.prototype.prod=function(n,e){return P("prod")},r.prototype.unsortedSegmentSum=function(n,e,t){return P("unsortedSegmentSum")},r.prototype.argMin=function(n,e){return P("argMin")},r.prototype.argMax=function(n,e){return P("argMax")},r.prototype.equal=function(n,e){return P("equal")},r.prototype.notEqual=function(n,e){return P("notEqual")},r.prototype.less=function(n,e){return P("less")},r.prototype.lessEqual=function(n,e){return P("lessEqual")},r.prototype.greater=function(n,e){return P("greater")},r.prototype.greaterEqual=function(n,e){return P("greaterEqual")},r.prototype.logicalNot=function(n){return P("logicalNot")},r.prototype.logicalAnd=function(n,e){return P("logicalAnd")},r.prototype.logicalOr=function(n,e){return P("logicalOr")},r.prototype.where=function(n){return P("where")},r.prototype.select=function(n,e,t){return P("select")},r.prototype.topk=function(n,e,t){return P("topk")},r.prototype.min=function(n,e){return P("min")},r.prototype.minimum=function(n,e){return P("minimum")},r.prototype.mod=function(n,e){return P("mod")},r.prototype.max=function(n,e){return P("max")},r.prototype.maximum=function(n,e){return P("maximum")},r.prototype.all=function(n,e){return P("all")},r.prototype.any=function(n,e){return P("any")},r.prototype.squaredDifference=function(n,e){return P("squaredDifference")},r.prototype.ceil=function(n){return P("ceil")},r.prototype.floor=function(n){return P("floor")},r.prototype.round=function(n){return P("round")},r.prototype.sign=function(n){return P("sign")},r.prototype.isNaN=function(n){return P("isNaN")},r.prototype.isInf=function(n){return P("isInf")},r.prototype.isFinite=function(n){return P("isFinite")},r.prototype.pow=function(n,e){return P("pow")},r.prototype.exp=function(n){return P("exp")},r.prototype.expm1=function(n){return P("expm1")},r.prototype.softmax=function(n,e){return P("softmax")},r.prototype.log=function(n){return P("log")},r.prototype.log1p=function(n){return P("log1p")},r.prototype.sqrt=function(n){return P("sqrt")},r.prototype.rsqrt=function(n){return P("rsqrt")},r.prototype.square=function(n){return P("square")},r.prototype.reciprocal=function(n){return P("reciprocal")},r.prototype.relu=function(n){return P("relu")},r.prototype.relu6=function(n){return P("relu6")},r.prototype.prelu=function(n,e){return P("prelu")},r.prototype.elu=function(n){return P("elu")},r.prototype.eluDer=function(n,e){return P("eluDer")},r.prototype.selu=function(n){return P("selu")},r.prototype.int=function(n){return P("int")},r.prototype.clip=function(n,e,t){return P("clip")},r.prototype.abs=function(n){return P("abs")},r.prototype.complexAbs=function(n){return P("complexAbs")},r.prototype.sigmoid=function(n){return P("sigmoid")},r.prototype.softplus=function(n){return P("softplus")},r.prototype.sin=function(n){return P("sin")},r.prototype.cos=function(n){return P("cos")},r.prototype.tan=function(n){return P("tan")},r.prototype.asin=function(n){return P("asin")},r.prototype.acos=function(n){return P("acos")},r.prototype.atan=function(n){return P("atan")},r.prototype.atan2=function(n,e){return P("atan2")},r.prototype.sinh=function(n){return P("sinh")},r.prototype.cosh=function(n){return P("cosh")},r.prototype.tanh=function(n){return P("tanh")},r.prototype.asinh=function(n){return P("asinh")},r.prototype.acosh=function(n){return P("acosh")},r.prototype.atanh=function(n){return P("atanh")},r.prototype.erf=function(n){return P("erf")},r.prototype.step=function(n,e){return P("step")},r.prototype.fusedConv2d=function(n){return n.input,n.filter,n.convInfo,n.bias,n.activation,n.preluActivationWeights,P("fusedConv2d")},r.prototype.conv2d=function(n,e,t){return P("conv2d")},r.prototype.conv2dDerInput=function(n,e,t){return P("conv2dDerInput")},r.prototype.conv2dDerFilter=function(n,e,t){return P("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(n){return n.input,n.filter,n.convInfo,n.bias,n.activation,n.preluActivationWeights,P("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(n,e,t){return P("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(n,e,t){return P("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(n,e,t){return P("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(n,e,t){return P("conv3d")},r.prototype.conv3dDerInput=function(n,e,t){return P("conv3dDerInput")},r.prototype.conv3dDerFilter=function(n,e,t){return P("conv3dDerFilter")},r.prototype.maxPool=function(n,e){return P("maxPool")},r.prototype.maxPoolBackprop=function(n,e,t,o){return P("maxPoolBackprop")},r.prototype.avgPool=function(n,e){return P("avgPool")},r.prototype.avgPoolBackprop=function(n,e,t){return P("avgPoolBackprop")},r.prototype.avgPool3d=function(n,e){return P("avgPool3d")},r.prototype.avgPool3dBackprop=function(n,e,t){return P("avgPool3dBackprop")},r.prototype.maxPool3d=function(n,e){return P("maxPool3d")},r.prototype.maxPool3dBackprop=function(n,e,t,o){return P("maxPool3dBackprop")},r.prototype.reshape=function(n,e){return P("reshape")},r.prototype.cast=function(n,e){return P("cast")},r.prototype.tile=function(n,e){return P("tile")},r.prototype.pad=function(n,e,t){return P("pad")},r.prototype.transpose=function(n,e){return P("transpose")},r.prototype.gather=function(n,e,t){return P("gather")},r.prototype.gatherND=function(n,e){return P("gatherND")},r.prototype.scatterND=function(n,e,t){return P("scatterND")},r.prototype.batchToSpaceND=function(n,e,t){return P("batchToSpaceND")},r.prototype.spaceToBatchND=function(n,e,t){return P("spaceToBatchND")},r.prototype.resizeBilinear=function(n,e,t,o){return P("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(n,e,t){return P("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(n,e,t,o){return P("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(n,e,t){return P("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(n,e,t,o,a,i){return P("batchNormalization")},r.prototype.localResponseNormalization4D=function(n,e,t,o,a){return P("localResponseNormalization4D")},r.prototype.LRNGrad=function(n,e,t,o,a,i,s){return P("LRNGrad")},r.prototype.multinomial=function(n,e,t,o){return P("multinomial")},r.prototype.oneHot=function(n,e,t,o){return P("oneHot")},r.prototype.cumsum=function(n,e,t,o){return P("cumsum")},r.prototype.nonMaxSuppression=function(n,e,t,o,a){return P("nonMaxSuppression")},r.prototype.fft=function(n){return P("fft")},r.prototype.ifft=function(n){return P("ifft")},r.prototype.complex=function(n,e){return P("complex")},r.prototype.real=function(n){return P("real")},r.prototype.imag=function(n){return P("imag")},r.prototype.cropAndResize=function(n,e,t,o,a,i){return P("cropAndResize")},r.prototype.depthToSpace=function(n,e,t){return P("depthToSpace")},r.prototype.split=function(n,e,t){return P("split")},r.prototype.sparseToDense=function(n,e,t,o){return P("sparseToDense")},r.prototype.diag=function(n){return P("diag")},r.prototype.fill=function(n,e,t){return P("fill")},r.prototype.onesLike=function(n){return P("onesLike")},r.prototype.zerosLike=function(n){return P("zerosLike")},r.prototype.linspace=function(n,e,t){return P("linspace")},r.prototype.dispose=function(){return P("dispose")},r}();function P(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function dn(r,n){for(var e=r.length,t=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(n[n.length-1-o]||1)>1&&i===1&&t.unshift(a)}return t}function Ge(r,n){for(var e=[],t=0;t<n.length;t++){var o=r[r.length-t-1],a=n.length-t-1,i=n[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function ge(r,n){for(var e=[],t=Math.max(r.length,n.length),o=0;o<t;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=n[n.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+n+".");e.unshift(a)}}return e}function Ir(r,n,e,t,o,a,i){i===void 0&&(i="channelsLast");var s,u=Aa(n),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return Fn(r,s,e,t,o,a,!1,i)}function mo(r,n,e,t,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=ds(n),l=c[0],f=c[1],p=c[2];if(i==="NDHWC")u="channelsLast",s=[l,f,p,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,f,p,r[1],r[1]]}return go(r,s,e,t,o,!1,u,a)}function Fn(r,n,e,t,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],p=u[3];if(s==="channelsLast")c=r[0],l=r[1],f=r[2],p=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],p=r[1],l=r[2],f=r[3]}var h,d=n[0],m=n[1],v=n[3],g=Aa(e),y=g[0],b=g[1],x=Aa(t),w=x[0],C=x[1],S=wr(d,w),R=wr(m,C),k=function(M,N,U,W,L,V,G,X){var J,Q,oe;if(typeof M=="number"){J={top:M,bottom:M,left:M,right:M,type:M===0?"VALID":"NUMBER"};var ie=function(he,xe,ye,Se,Ee){Se==null&&(Se=Ms(he,xe,ye));var ke=he[0],ut=he[1],ct=so((ke-xe+2*Se)/ye+1,Ee);E(Le(ct),function(){return"The output # of rows ("+ct+") must be an integer. Change the stride and/or zero pad parameters"});var qe=so((ut-xe+2*Se)/ye+1,Ee);return E(Le(qe),function(){return"The output # of columns ("+qe+") must be an integer. Change the stride and/or zero pad parameters"}),[ct,qe]}([N,U],V,W,M,X);Q=ie[0],oe=ie[1]}else if(M==="same"){Q=Math.ceil(N/W),oe=Math.ceil(U/L);var ue=Math.max(0,(Q-1)*W+V-N),fe=Math.max(0,(oe-1)*L+G-U),ce=Math.floor(ue/2),me=ue-ce,Ae=Math.floor(fe/2);J={top:ce,bottom:me,left:Ae,right:fe-Ae,type:"SAME"}}else{if(M!=="valid")throw Error("Unknown padding parameter: "+M);J={top:0,bottom:0,left:0,right:0,type:"VALID"},Q=Math.ceil((N-V+1)/W),oe=Math.ceil((U-G+1)/L)}return{padInfo:J,outHeight:Q,outWidth:oe}}(o,l,f,y,b,S,R,a),I=k.padInfo,A=k.outHeight,D=k.outWidth,B=i?v*p:v;return s==="channelsFirst"?h=[c,B,A,D]:s==="channelsLast"&&(h=[c,A,D,B]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:p,outHeight:A,outWidth:D,outChannels:B,padInfo:I,strideHeight:y,strideWidth:b,filterHeight:d,filterWidth:m,effectiveFilterHeight:S,effectiveFilterWidth:R,dilationHeight:w,dilationWidth:C,inShape:r,outShape:h,filterShape:n}}function go(r,n,e,t,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],p=u[3],h=u[4];if(i==="channelsLast")c=r[0],l=r[1],f=r[2],p=r[3],h=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],h=r[1],l=r[2],f=r[3],p=r[4]}var d,m=n[0],v=n[1],g=n[2],y=n[4],b=ds(e),x=b[0],w=b[1],C=b[2],S=ds(t),R=S[0],k=S[1],I=S[2],A=wr(m,R),D=wr(v,k),B=wr(g,I),M=function(G,X,J,Q,oe,ie,ue,fe,ce,me,Ae){var he,xe,ye,Se;if(typeof G=="number"){he={top:G,bottom:G,left:G,right:G,front:G,back:G,type:G===0?"VALID":"NUMBER"};var Ee=function(Mt,yt,cn,Ot,lt,Qt){lt==null&&(lt=Ms(Mt,yt,Ot));var Zt=Mt[0],ur=Mt[1],Ho=Mt[2],cr=so((Zt-yt+2*lt)/Ot+1,Qt);E(Le(cr),function(){return"The output # of depths ("+cr+") must be an integer. Change the stride and/or zero pad parameters"});var lr=so((ur-yt+2*lt)/Ot+1,Qt);E(Le(lr),function(){return"The output # of rows ("+lr+") must be an integer. Change the stride and/or zero pad parameters"});var fr=so((Ho-yt+2*lt)/Ot+1,Qt);return E(Le(fr),function(){return"The output # of columns ("+fr+") must be an integer. Change the stride and/or zero pad parameters"}),[cr,lr,fr,cn]}([X,J,Q,1],fe,1,oe,G,Ae);xe=Ee[0],ye=Ee[1],Se=Ee[2]}else if(G==="same"){xe=Math.ceil(X/oe),ye=Math.ceil(J/ie),Se=Math.ceil(Q/ue);var ke=(xe-1)*oe+fe-X,ut=(ye-1)*ie+ce-J,ct=(Se-1)*ue+me-Q,qe=Math.floor(ke/2),Nt=ke-qe,mt=Math.floor(ut/2),Et=ut-mt,gt=Math.floor(ct/2);he={top:mt,bottom:Et,left:gt,right:ct-gt,front:qe,back:Nt,type:"SAME"}}else{if(G!=="valid")throw Error("Unknown padding parameter: "+G);he={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},xe=Math.ceil((X-fe+1)/oe),ye=Math.ceil((J-ce+1)/ie),Se=Math.ceil((Q-me+1)/ue)}return{padInfo:he,outDepth:xe,outHeight:ye,outWidth:Se}}(o,l,f,p,x,w,C,A,D,B,s),N=M.padInfo,U=M.outDepth,W=M.outHeight,L=M.outWidth,V=a?y*h:y;return i==="channelsFirst"?d=[c,V,U,W,L]:i==="channelsLast"&&(d=[c,U,W,L,V]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:f,inWidth:p,inChannels:h,outDepth:U,outHeight:W,outWidth:L,outChannels:V,padInfo:N,strideDepth:x,strideHeight:w,strideWidth:C,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:A,effectiveFilterHeight:D,effectiveFilterWidth:B,dilationDepth:R,dilationHeight:k,dilationWidth:I,inShape:r,outShape:d,filterShape:n}}function Ms(r,n,e,t){t===void 0&&(t=1);var o=wr(n,t);return Math.floor((r[0]*(e-1)-e+o)/2)}function Aa(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function ds(r){return typeof r=="number"?[r,r,r]:r}function wr(r,n){return n<=1?r:r+(r-1)*(n-1)}function so(r,n){if(!n)return r;switch(n){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+n)}}function Xn(r){var n=Aa(r),e=n[0],t=n[1],o=n[2];return e===1&&t===1&&o===1}function bt(r,n){return Xn(r)||Xn(n)}function Ua(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function Os(r,n,e){if(n==="complex64"){if(r.dtype==="complex64")return r.clone();var t=Pe(r.shape),o=r.toFloat(),a=e.complex(o,t);return t.dispose(),o.dispose(),a}if(!Wc(r.dtype,n))return F.makeTensorFromDataId(r.dataId,r.shape,n);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(n),i.dispose(),a}if(n==="int32")return e.int(r);if(n==="bool"){var s=Y(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+n)}function Fa(r,n){return F.makeTensorFromDataId(r.dataId,n,r.dtype)}function Bs(r,n,e){var t=(n-r)/(e-1),o=Sr(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+t;return Fe(o,"float32")}var Lx=Object.freeze({castTensor:Os,reshapeTensor:Fa,linspaceImpl:Bs,upcastType:Xe,axesAreInnerMostDims:Ss,combineLocations:wl,computeOutAndReduceShapes:rt,expandShapeToKeepDim:xt,assertAxesAreInnerMostDims:kt,getAxesPermutation:Kt,getUndoAxesPermutation:Ba,getInnerMostAxes:Xt,getBroadcastDims:dn,getReductionAxes:Ge,assertAndGetBroadcastShape:ge,assertParamsConsistent:Cl,computeOutShape:Kn,computePool2DInfo:Ir,computePool3DInfo:mo,computeConv2DInfo:Fn,computeConv3DInfo:go,computeDefaultPad:Ms,tupleValuesAreOne:Xn,eitherStridesOrDilationsAreOne:bt,convertConv2DDataFormat:Ua,PARALLELIZE_THRESHOLD:Fs,computeOptimalWindowSize:ya});function vs(r,n){if(r.length!==n.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+n.length+".");for(var e=new Float32Array(2*r.length),t=0;t<e.length;t+=2)e[t]=r[t/2],e[t+1]=n[t/2];return e}function Qu(r,n){return{real:r[2*n],imag:r[2*n+1]}}function Jd(r,n,e,t){r[2*t]=n,r[2*t+1]=e}function Qd(r,n,e){var t=(e?2:-2)*Math.PI*(r/n);return{real:Math.cos(t),imag:Math.sin(t)}}function Zd(r,n,e){var t=function(a,i,s){return function(u,c,l){for(var f=0,p=u.length,h=0,d=!1;f<p;){var m=l(c,u[h=f+(p-f>>>1)]);m>0?f=h+1:(p=h,d=!m)}return d?f:-f-1}(a,i,s||ev)}(r,n,e),o=t<0?-(t+1):t;r.splice(o,0,n)}function ev(r,n){return r>n?1:r<n?-1:0}function Ls(r,n,e,t,o){return Ll(r,n,e,t,o,0).selectedIndices}function Ws(r,n,e,t,o,a){var i=Ll(r,n,e,t,o,a,!0);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Ll(r,n,e,t,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s=!1);for(var u=Array.from(n).map(function(x,w){return{score:x,boxIndex:w,suppressBeginIndex:0}}).filter(function(x){return x.score>o}).sort(Zu),c=a>0?-.5/a:0,l=[],f=[];l.length<e&&u.length>0;){var p=u.pop(),h=p.score,d=p.boxIndex,m=p.suppressBeginIndex;if(h<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var y=tv(r,d,l[g]);if(y>=t){v=!0;break}if(p.score=p.score*nv(t,c,y),p.score<=o)break}p.suppressBeginIndex=l.length,v||(p.score===h?(l.push(d),f.push(p.score)):p.score>o&&Zd(u,p,Zu))}var b=l.length;return s&&(l.fill(0,b),f.fill(0,b)),{selectedIndices:Fe(l,"int32"),selectedScores:Fe(f,"float32"),numValidOutputs:Y(b,"int32")}}function tv(r,n,e){var t=r.subarray(4*n,4*n+4),o=r.subarray(4*e,4*e+4),a=Math.min(t[0],t[2]),i=Math.min(t[1],t[3]),s=Math.max(t[0],t[2]),u=Math.max(t[1],t[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),p=Math.max(o[1],o[3]),h=(s-a)*(u-i),d=(f-c)*(p-l);if(h<=0||d<=0)return 0;var m=Math.max(a,c),v=Math.max(i,l),g=Math.min(s,f),y=Math.min(u,p),b=Math.max(g-m,0)*Math.max(y-v,0);return b/(h+d-b)}function nv(r,n,e){var t=Math.exp(n*e*e);return e<=r?t:0}function Zu(r,n){return r.score-n.score||r.score===n.score&&n.boxIndex-r.boxIndex}function Wl(r,n,e){var t=new Array(r.rank).fill(0),o=r.shape.slice();return n.map(function(a){o[e]=a;var i=r.slice(t,o);return t[e]+=a,i})}function zl(r,n){for(var e=new Array(r.rank),t=0;t<e.length;t++)e[t]=r.shape[t]*n[t];var o=le(e,r.dtype);for(t=0;t<o.values.length;++t){for(var a=o.indexToLoc(t),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[t]=r.values[u]}return o.toTensor()}function Vl(r,n,e,t,o){for(var a=n[n.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=kr(e,s*t),l=kr("int32",s*t),f=0;f<s;f++){for(var p=f*u,h=r.subarray(p,p+u),d=[],m=0;m<h.length;m++)d.push({value:h[m],index:m});d.sort(function(x,w){return w.value-x.value});var v=f*t,g=c.subarray(v,v+t),y=l.subarray(v,v+t);for(m=0;m<t;m++)g[m]=d[m].value,y[m]=d[m].index}var b=n.slice();return b[b.length-1]=t,[Ye(c,b,e),Ye(l,b,"int32")]}function zs(r,n){for(var e=[],t=0;t<n.length;t++)n[t]&&e.push(t);var o=le(r,"int32"),a=le([e.length,r.length],"int32");for(t=0;t<e.length;t++){var i=o.indexToLoc(e[t]),s=t*r.length;a.values.set(i,s)}return a.toTensor()}var rv=function(r,n){this.outputShape=[],this.outputShape=r,this.variableNames=n.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var t=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+t+`;
        setOutput(result);
      }
    `},ov=function(r,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=n.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var t=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+t+`;
        setOutput(result);
      }
    `},av=function(r,n,e){this.variableNames=["A"];var t=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/t);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=n==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+t+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+t+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Ul(r,n){return["x","y","z","w","u","v"].slice(0,n).map(function(e){return r+"."+e})}function It(r,n){return n===1?[r]:Ul(r,n)}function pt(){var r,n,e,t,o,a,i,s,u,c;return z().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",n="in",e="out",t="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",n="attribute",e="varying",t="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:n,varyingVs:e,varyingFs:t,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Un(r,n,e){e===void 0&&(e="index");var t=Ht(n);return t.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===t.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function Vs(r){var n=Ht(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+n[0]+" + coords.y * "+n[1]+` + coords.z;
  }
`}var Gl=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function iv(r,n,e,t){var o=[];r.forEach(function(h){var d=ne(h.shapeInfo.logicalShape);h.shapeInfo.isUniform?o.push("uniform float "+h.name+(d>1?"["+d+"]":"")+";"):(o.push("uniform sampler2D "+h.name+";"),o.push("uniform int offset"+h.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(h){return function(d,m,v){v===void 0&&(v=!1);var g="";g+=v?Hl(d):gr(d);var y=d.shapeInfo.logicalShape,b=m.logicalShape;return y.length<=b.length&&(g+=v?function(x,w){var C,S=x.name,R=S.charAt(0).toUpperCase()+S.slice(1),k="get"+R+"AtOutCoords",I=x.shapeInfo.logicalShape.length,A=w.logicalShape.length,D=dn(x.shapeInfo.logicalShape,w.logicalShape),B=Ne(A),M=A-I,N=["x","y","z","w","u","v"];C=I===0?"":A<2&&D.length>=1?"coords = 0;":D.map(function(J){return"coords."+N[J+M]+" = 0;"}).join(`
`);var U="";U=A<2&&I>0?"coords":x.shapeInfo.logicalShape.map(function(J,Q){return"coords."+N[Q+M]}).join(", ");var W="return outputValue;",L=ne(x.shapeInfo.logicalShape)===1,V=ne(w.logicalShape)===1;if(I!==1||L||V){if(L&&!V)W=A===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(D.length){var G=I-2,X=I-1;D.indexOf(G)>-1&&D.indexOf(X)>-1?W="return vec4(outputValue.x);":D.indexOf(G)>-1?W="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":D.indexOf(X)>-1&&(W="return vec4(outputValue.xx, outputValue.zz);")}}else W=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+k+`() {
      `+B+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+R+"("+U+`);
      `+W+`
    }
  `}(d,m):function(x,w){var C=x.name,S=C.charAt(0).toUpperCase()+C.slice(1),R="get"+S+"AtOutCoords",k=w.texShape,I=x.shapeInfo.texShape,A=x.shapeInfo.logicalShape.length,D=w.logicalShape.length;if(!x.shapeInfo.isUniform&&A===D&&x.shapeInfo.flatOffset==null&&Ue(I,k))return`
      float `+R+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var B,M=Ne(D),N=dn(x.shapeInfo.logicalShape,w.logicalShape),U=D-A,W=["x","y","z","w","u","v"];B=A===0?"":D<2&&N.length>=1?"coords = 0;":N.map(function(V){return"coords."+W[V+U]+" = 0;"}).join(`
`);var L="";return L=D<2&&A>0?"coords":x.shapeInfo.logicalShape.map(function(V,G){return"coords."+W[G+U]}).join(", "),`
    float `+R+`() {
      `+M+` coords = getOutputCoords();
      `+B+`
      return get`+S+"("+L+`);
    }
  `}(d,m)),g}(h,n,t)}).join(`
`),c=n.texShape,l=pt(),f=function(h){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+h.texture2D+`(textureSampler, uv).r;
    }
  `}(l),p=function(h){return h.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+h.varyingFs+` vec2 resultUV;
    `+h.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+h.defineSpecialNaN+`
    `+h.defineSpecialInf+`
    `+h.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+sv+`
    `+uv+`
    `+cv+`
  `}(l);return n.isPacked?(a=function(h,d){switch(h.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(x,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,d);case 2:return function(x,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Ue(x,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var S=Math.ceil(x[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec2(r, c);
    }
  `}(h,d);case 3:return m=h,v=d,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],y=Math.ceil(m[2]/2),b=y*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+y+`);
      int c = imod(index, `+y+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(x,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],S=Math.ceil(x[x.length-1]/2),R=S*Math.ceil(x[x.length-2]/2),k=R,I="",A="b, r, c",D=2;D<x.length-1;D++)k*=x[x.length-D-1],I=`
      int b`+D+" = index / "+k+`;
      index -= b`+D+" * "+k+`;
    `+I,A="b"+D+", "+A;return`
    ivec`+x.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+I+`

      int b = index / `+R+`;
      index -= b * `+R+`;

      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec`+x.length+"("+A+`);
    }
  `}(h,d)}var m,v,g,y,b}(n.logicalShape,c),i=function(h){return`
    void setOutput(vec4 val) {
      `+h.output+` = val;
    }
  `}(l)):(a=function(h,d){switch(h.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,y){return y[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+y[1]+`.0);
      }
    `:y[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+y[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      return resTexRC.x * `+y[1]+` + resTexRC.y;
    }
  `}(0,d);case 2:return function(g,y){return Ue(g,y)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+y[0]+", "+y[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(h,d);case 3:return m=d,v=Un(["r","c","d"],h),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,y){var b=Un(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(h,d);case 5:return function(g,y){var b=Un(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+y[0]+`,
                             `+y[1]+`));

      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(h,d);case 6:return function(g,y){var b=Un(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(h,d);default:throw new Error(h.length+"-D output sampling is not yet supported")}var m,v}(n.logicalShape,c),i=function(h){return`
    void setOutput(float val) {
      `+h.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),t&&(p+=lv),[p,f,i,s,a,u,e].join(`
`)}function gr(r){var n=r.shapeInfo.logicalShape;switch(n.length){case 0:return function(e){var t=e.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+t+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=Ln(t);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(r);case 1:return function(e){var t=e.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+dr(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+t+`, halfCR);
      }
    `;var u=Ln(t);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+t+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+t+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+t+`, uv);
    }
  `}(r);case 2:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Ue(t,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=Rn(t),l=c.newShape,f=c.keptDims,p=l;if(p.length<t.length){var h=yr(e,p);return`
      `+gr(h)+`
      float `+a+`(int row, int col) {
        return `+a+"("+xr(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+t[1]+`, 1)));
        `+dr(e)+`
      }
    `;var d=i[0],m=i[1],v=Ln(o);return m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+t[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:d===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+t[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+t[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+d+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=t[1]*t[2],s=t[2],u=Rn(t),c=u.newShape,l=u.keptDims,f=c;if(f.length<t.length){var p=yr(e,f);return`
        `+gr(p)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+xr(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+dr(e)+`
      }
    `;var h=e.shapeInfo.texShape,d=h[0],m=h[1],v=e.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+d+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+t[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=Ln(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+d+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=t[3],s=t[2]*i,u=t[1]*s,c=Rn(t),l=c.newShape,f=c.keptDims;if(l.length<t.length){var p=yr(e,l);return`
      `+gr(p)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+xr(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+dr(e)+`
      }
    `;var h=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,m=d[0],v=d[1];if(v===u&&h==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&h==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+t[1]*t[2]+", "+t[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=Ln(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=t[4],s=t[3]*i,u=t[2]*s,c=t[1]*u,l=Rn(t),f=l.newShape,p=l.keptDims;if(f.length<t.length){var h=yr(e,f);return`
      `+gr(h)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+xr(["row","col","depth","depth2","depth3"],p)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+dr(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+t[1]*t[2]*t[3]+`,
               `+t[2]*t[3]+", "+t[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var y=Ln(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+y+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var t=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=Rn(t),s=i.newShape,u=i.keptDims;if(s.length<t.length){var c=yr(e,s);return`
      `+gr(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+xr(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=t[5],f=t[4]*l,p=t[3]*f,h=t[2]*p,d=t[1]*h;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+", "+h+", "+p+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+dr(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],y=v[1];if(y===d&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+h+", "+p+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(y===l&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+t[1]*t[2]*t[3]*t[4]+`,
               `+t[2]*t[3]*t[4]+`,
               `+t[3]*t[4]+`,
               `+t[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=Ln(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+" + col * "+h+" + depth * "+p+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+y+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(n.length+"-D input sampling is not yet supported")}}function Hl(r){var n,e,t;switch(r.shapeInfo.logicalShape.length){case 0:return n=r.name,e="get"+n.charAt(0).toUpperCase()+n.slice(1),t=pt(),`
    vec4 `+e+`() {
      return `+t.texture2D+"("+n+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=pt();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=pt();if(u!=null&&Ue(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+i+`, uv);
      }
    `;var p=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],h=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+h+", "+p[0]+", "+p[1]+`, row, col);
      return `+f.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),f=yr(o,l);return`
        `+Hl(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+xr(["b","row","col"],[1,2])+`);
        }
      `}var p=c[0],h=c[1],d=Math.ceil(a[2]/2),m=d*Math.ceil(a[1]/2),v=pt();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+p+", "+h+", "+m+", "+d+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],p=l[1],h=Math.ceil(a[i-1]/2),d=h*Math.ceil(a[i-2]/2),m="int b, int row, int col",v="b * "+d+" + (row / 2) * "+h+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,d*=a[i-g-1],v="b"+g+" * "+d+" + "+v;var y=pt();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+p+`;
      int texC = index - texR * `+p+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+p+", "+f+`);
      return `+y.texture2D+"("+s+`, uv);
    }
  `}(r)}}var sv=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,uv=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,cv=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,lv=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Ln(r){return"offset"+r}function dr(r){var n=r.name,e=ne(r.shapeInfo.logicalShape);return e<2?"return "+n+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+n+`[i];
      }
    }
  `}function Ne(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function yr(r,n){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=n,e}function xr(r,n){return n.map(function(e){return r[e]}).join(", ")}var fv=function(r,n,e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/n);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),t||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=Ne(c),f=It("coords",c);if(a===1){var p=Ne(s=c+1);i=`
        `+p+" sourceLocR = "+p+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+p+" sourceLocG = "+p+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+p+" sourceLocA = "+p+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+p+" sourceLocB = "+p+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var h=["x","y","z","w","u","v"].slice(0,s),d="."+h[s-1],m=h.map(function(R){return"int "+R}),v=It("sourceLocR",s-1).concat("inIdx.r"),g=It("sourceLocG",s-1).concat("inIdx.g"),y=It("sourceLocB",s-1).concat("inIdx.b"),b=It("sourceLocA",s-1).concat("inIdx.a"),x=e==="max"?"greaterThan":"lessThan",w=t?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",C=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+y.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",S=t?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+h.join()+`),
                                          vec2(`+h.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+h.join()+`),
                               vec2(`+h.slice(-2).join()+`));
      }
      `+S+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+d+", sourceLocG"+d+`,
          sourceLocB`+d+", sourceLocA"+d+") * "+n+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+n+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+x+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},pv=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var n=r.filterHeight,e=r.filterWidth,t=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,f=1/(n*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},hv=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var n=r.filterDepth,e=r.filterHeight,t=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,h=l-1-r.padInfo.front,d=f-1-r.padInfo.top,m=p-1-r.padInfo.left,v=1/(n*e*t);this.userCode=`
      const ivec3 pads = ivec3(`+h+", "+d+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+p+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},dv=function(r,n,e,t,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],ge(r,n),ge(r,e);var i="0.0";t!=null&&(ge(r,t),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(ge(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},vv=function(r,n,e,t,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],ge(r,n),ge(r,e);var i="vec4(0.0)";t!=null&&(ge(r,t),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(ge(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},mv="return areal * breal - aimag * bimag;",gv="return areal * bimag + aimag * breal;",ec=function(r,n,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=ge(n,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Bi="return a + b;",Li="return a - b;",tc="return a * b;",ql="return (a < 0.) ? b * a : a;",ze=function(r,n,e){this.variableNames=["A","B"],this.outputShape=ge(n,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},jl=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,pn=function(r,n,e,t){t===void 0&&(t=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=ge(n,e);var o=this.outputShape.length,a="";if(t)if(o===0||ne(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+Ne(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=It("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},yv=function(){function r(n){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(n,e){var t=this;return function(o,a){t.minLoc==null&&(t.minLoc=o.getUniformLocationNoThrow(a,"minVal"),t.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(t.minLoc,n),o.gl.uniform1f(t.maxLoc,e)}},r}(),xv=function(){function r(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(n,e){var t=this;return function(o,a){t.minLoc==null&&(t.minLoc=o.getUniformLocationNoThrow(a,"minVal"),t.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(t.minLoc,n),o.gl.uniform1f(t.maxLoc,e)}},r}(),bv=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},wv=function(r){this.outputShape=[],this.outputShape=Kn(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var n=new Array(r.length-1);n[0]=r[0][1];for(var e=1;e<n.length;e++)n[e]=n[e-1]+r[e][1];var t=["if (yC < "+n[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<n.length;e++){var o=n[e-1];t.push("else if (yC < "+n[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=n.length,i=n[n.length-1];t.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+t.join(`
        `)+`
      }
    `},Cv=function(r,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Kn(r,n);var e=this.outputShape,t=e.length,o=Ne(t),a=It("coords",t),i=["x","y","z","w","u","v"].slice(0,t);this.variableNames=r.map(function(v,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][n];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][n];var c=i[n],l=i.slice(-2),f=i.join(),p="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var h=s[u-1];p+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+aa(i,c,h)+`),
            vec2(`+aa(l,c,h)+`));
        }`}var d=s.length,m=s[s.length-1];p+=`
        return getChannel(
          getT`+d+"("+aa(i,c,m)+`),
          vec2(`+aa(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+p+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[t-1]+" = "+a[t-1]+` + 1;
        if (`+a[t-1]+" < "+e[t-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[t-2]+" = "+a[t-2]+` + 1;
        if (`+a[t-2]+" < "+e[t-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[t-1]+" = "+a[t-1]+` - 1;
        if (`+a[t-2]+" < "+e[t-2]+` &&
            `+a[t-1]+" < "+e[t-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function aa(r,n,e){var t=r.indexOf(n);return r.map(function(o,a){return a===t?o+" - "+e:o}).join()}var _v=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var n=r.strideHeight,e=r.strideWidth,t=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+n+" - "+t+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Ev=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var n=r.filterHeight,e=r.filterWidth,t=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=n-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+n+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+n+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},kv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var n=r.strideDepth,e=r.strideHeight,t=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+n+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+t+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Iv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var n=r.filterDepth,e=r.filterHeight,t=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=n-1-r.padInfo.front,u=e-1-r.padInfo.top,c=t-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+n+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+n+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+t+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+t+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Rv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var n=r.strideHeight,e=r.strideWidth,t=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+n+" - "+t+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},Sv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var n=r.filterHeight,e=r.filterWidth,t=r.strideHeight,o=r.strideWidth,a=n-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+n+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+n+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},nc=function(r,n,e,t){n===void 0&&(n=!1),e===void 0&&(e=null),t===void 0&&(t=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,f=r.filterWidth,p=4*Math.floor(r.inChannels/4),h=r.inChannels%4,d=r.dataFormat==="channelsLast",m=d?1:2,v=d?2:3,g=d?3:1,y="",b="";e&&(y=t?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var x=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),t&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+p+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+d+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(h===1)+`) {

              if (`+d+`) {
                dotProd +=
                    getX(batch, xR, xC, `+p+`) *
                    getW(wR, wC, `+p+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+p+`, xR, xC) *
                    getW(wR, wC, `+p+`, d2);
              }

            } else if (`+(h===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+p+`, d2),
                getW(wR, wC, `+p+` + 1, d2)
              );

              if (`+d+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+p+`),
                  getX(batch, xR, xC, `+p+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+p+`, xR, xC),
                  getX(batch, `+p+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(h===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+p+`, d2),
                getW(wR, wC, `+p+` + 1, d2),
                getW(wR, wC, `+p+` + 2, d2)
              );

              if (`+d+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+p+`),
                  getX(batch, xR, xC, `+p+` + 1),
                  getX(batch, xR, xC, `+p+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+p+`, xR, xC),
                  getX(batch, `+p+` + 1, xR, xC),
                  getX(batch, `+p+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+x+`
        `+b+`
        setOutput(result);
      }
    `},Tv=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var n=r.padInfo.front,e=r.padInfo.top,t=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,f=r.filterHeight,p=r.filterWidth,h=4*Math.floor(r.inChannels/4),d=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+n+", "+e+", "+t+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+p+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+h+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(d===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+h+`) *
                  getW(wF, wR, wC, `+h+`, d2);
              } else if (`+(d===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+h+`),
                  getX(batch, xF, xR, xC, `+h+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+h+`, d2),
                  getW(wF, wR, wC, `+h+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(d===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+h+`),
                  getX(batch, xF, xR, xC, `+h+` + 1),
                  getX(batch, xF, xR, xC, `+h+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+h+`, d2),
                  getW(wF, wR, wC, `+h+` + 1, d2),
                  getW(wF, wR, wC, `+h+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},rc=function(r,n,e,t){n===void 0&&(n=!1),e===void 0&&(e=null),t===void 0&&(t=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,p=r.filterHeight,h=r.filterWidth,d=r.outChannels/r.inChannels,m="",v="";e&&(m=t?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),t&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+d+`;
        int q = d2 - d1 * `+d+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+p+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},oc=function(r,n,e,t){n===void 0&&(n=!1),e===void 0&&(e=null),t===void 0&&(t=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,p=r.filterHeight,h=r.filterWidth,d=h,m="int xR; int xC; int xCOffset;",v=0;v<p;v++)for(var g=0;g<h;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<p;v++)for(var y=0;y<d;y++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*y)*f+`;
        `,c===1){if(g<h&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<h)){var b=s%2==0?ws(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<h&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<h&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<h&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<h&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<h&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<p;v++)for(g=0;g<h;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var x="",w="";e&&(x=t?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),t&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},Dv=function(r,n,e,t,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=n[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var p=t==="bilinear"?1:0,h=[i-1+".0",s-1+".0"],d=h[0],m=h[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],g=v[0],y=v[1],b=v[2],x=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],w=x[0],C=x[1],S=x[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+y+`;
        float width_scale = `+C+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+d+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+S+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+p+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Av=function(r,n,e){this.variableNames=["x"],this.outputShape=r;var t=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Ne(t)+` coords = getOutputCoords();
        int end = `+ac(t,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+n+`) {
            continue;
          }
          `+ac(t,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(t,"coords")+`);
        }
        setOutput(val);
      }
    `};function ac(r,n){if(r===1)return""+n;if(r===2)return n+".y";if(r===3)return n+".z";if(r===4)return n+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var Fv=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=fo.DENSE;var n=io(r),e=pt();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Un(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+n[0]+", "+n[1]+`));
        int index = 4 * (resTexRC.x * `+n[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Pv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=fo.DENSE;var n=io(r),e=pt();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Un(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+n[0]+", "+n[1]+`));
        int index = 4 * (resTexRC.x * `+n[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},Nv=function(){function r(n,e,t){this.variableNames=["x"],this.outputShape=[],this.outputShape=n,this.blockSize=e,this.dataFormat=t,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Mv=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Ov=function(r){this.variableNames=["A"],this.outTexUsage=Dt.DOWNLOAD;var n=pt();this.outputShape=r,this.userCode=`
      `+Gl+`

      void main() {
        float x = getAAtOutCoords();
        `+n.output+` = encode_float(x);
      }
    `},Bv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Dt.DOWNLOAD;var n=pt();this.outputShape=r,this.userCode=`
      `+Gl+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+n.output+` = encode_float(x);
      }
    `},Lv=function(r,n,e){e===void 0&&(e=!1),this.variableNames=["A"];var t=pt(),o=n[0],a=n[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Vs(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+t.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+t.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Wv=function(r,n,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=pt(),o=n[0],a=n[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+t.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Vs(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+t.output+" = "+s+`;
      }
    `},zv="return real * expR - imag * expI;",Vv="return real * expI + imag * expR;",ic=function(r,n,e){this.variableNames=["real","imag"];var t=n[1];this.outputShape=n;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?t+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+t+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+t+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Uv=function(){function r(n,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=n,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;return function(t,o){e.valueLoc==null&&(e.valueLoc=t.getUniformLocationNoThrow(o,"value")),t.gl.uniform1f(e.valueLoc,n)}},r}(),Gv=function(r,n,e){this.variableNames=["A","indices"];var t=r.slice();t[e]=n,this.outputShape=t,this.rank=t.length;var o=Ne(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<i.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Hv=function(r,n,e){this.sliceDim=r,this.strides=n,this.variableNames=["x","indices"],this.outputShape=e;var t=Ne(n.length),o=Ne(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+t+" strides = "+t+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Kl(r,n){var e=pt();return Qc(r,n,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Xl(r,n){return nl(r,n,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Yl(r,n){return rl(r,n,new Uint16Array([0,1,2,2,1,3]))}function bo(r,n,e,t,o,a,i){al(e,t);var s=ol(r,n),u=r.TEXTURE_2D;return Z(r,n,function(){return r.bindTexture(u,s)}),Z(r,n,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),Z(r,n,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),Z(r,n,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),Z(r,n,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),Z(r,n,function(){return r.texImage2D(u,0,o,e,t,0,a,i,null)}),Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function $l(r,n,e,t,o){var a=Oa(e,t);return bo(r,n,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Jl(r,n,e,t,o){var a=Oa(e,t);return bo(r,n,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Ql(r,n,e,t,o){var a=Oa(e,t);return bo(r,n,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Zl(r,n,e,t,o){var a=xo(e,t);return bo(r,n,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function ef(r,n,e,t,o){var a=xo(e,t);return bo(r,n,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function tf(r,n,e,t){return Z(r,n,function(){return r.bindBuffer(r.ARRAY_BUFFER,t)}),us(r,n,e,"clipSpacePos",t,3,20,0)&&us(r,n,e,"uv",t,2,20,12)}function nf(r,n,e,t,o,a,i){var s,u,c;Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(t*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(t*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),Z(r,n,function(){return r.texImage2D(r.TEXTURE_2D,0,c,t,o,0,r.RGBA,u,s)}),Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function rf(r,n,e,t){Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,e)}),t.data instanceof Uint8Array?Z(r,n,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t.width,t.height,0,r.RGBA,r.UNSIGNED_BYTE,t.data)}):Z(r,n,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)}),Z(r,n,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function of(r,n,e,t,o){var a=r.createBuffer();Z(r,n,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*t;return Z(r,n,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),Z(r,n,function(){return r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,0)}),Z(r,n,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function af(r,n,e){var t=r,o=new Float32Array(e);return t.bindBuffer(t.PIXEL_PACK_BUFFER,n),t.getBufferSubData(t.PIXEL_PACK_BUFFER,0,o),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),o}function sf(r,n,e,t,o){var a=Oa(e,t),i=a[0],s=a[1],u=new Uint8Array(e*t*4);return Z(r,n,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function uf(r,n,e,t,o,a,i,s){var u=r,c=new Float32Array(function(l,f){var p=xo(l,f);return p[0]*p[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,n),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function cf(r,n,e,t){var o=new Float32Array(e*t*4);return Z(r,n,function(){return r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,o)}),o}var qv=Object.freeze({createVertexShader:Kl,createVertexBuffer:Xl,createIndexBuffer:Yl,createFloat32MatrixTexture:$l,createFloat16MatrixTexture:Jl,createUnsignedBytesMatrixTexture:Ql,createPackedMatrixTexture:Zl,createFloat16PackedMatrixTexture:ef,bindVertexProgramAttributeStreams:tf,uploadDenseMatrixToTexture:nf,uploadPixelDataToTexture:rf,createBufferFromOutputTexture:of,downloadFloat32MatrixFromBuffer:af,downloadByteEncodedFloatMatrixFromOutputTexture:sf,downloadPackedMatrixFromBuffer:uf,downloadMatrixFromPackedOutputTexture:cf}),lf=function(){function r(n){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=z().getNumber("WEBGL_VERSION");n!=null?(this.gl=n,Yc(e,n)):this.gl=on(e);var t="WEBGL_color_buffer_float";if(z().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=ro(this.gl,this.debug,"OES_texture_float"),At(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=ro(this.gl,this.debug,"OES_texture_half_float");else if(z().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(t),At(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=ro(this.gl,this.debug,"EXT_color_buffer_half_float");else if(z().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(t="EXT_color_buffer_float",At(this.gl,t))this.colorBufferFloatExtension=this.gl.getExtension(t);else{if(!At(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Xl(this.gl,this.debug),this.indexBuffer=Yl(this.gl,this.debug),this.framebuffer=il(this.gl,this.debug),this.textureConfig=Rs(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return z().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var n=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;Z(e,this.debug,function(){return e.finish()}),Z(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),Z(e,this.debug,function(){return e.deleteFramebuffer(n.framebuffer)}),Z(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),Z(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),Z(e,this.debug,function(){return e.deleteBuffer(n.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(n,e){return this.throwIfDisposed(),$l(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(n,e){return this.throwIfDisposed(),Jl(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(n,e){return this.throwIfDisposed(),Ql(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(n,e){this.throwIfDisposed(),rf(this.gl,this.debug,n,e)},r.prototype.uploadDenseMatrixToTexture=function(n,e,t,o){this.throwIfDisposed(),nf(this.gl,this.debug,n,e,t,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(n,e){return this.throwIfDisposed(),ef(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(n,e){return this.throwIfDisposed(),Zl(this.gl,this.debug,n,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(n){var e=this;this.throwIfDisposed(),this.outputTexture===n&&(cs(this.gl,this.debug,this.framebuffer),this.outputTexture=null),Z(this.gl,this.debug,function(){return e.gl.deleteTexture(n)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(n,e,t){var o=this;return this.downloadMatrixDriver(n,function(){return sf(o.gl,o.debug,e,t,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(n,e,t,o,a,i){return uf(this.gl,n,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(n,e){return af(this.gl,n,e)},r.prototype.createBufferFromTexture=function(n,e,t){this.bindTextureToFrameBuffer(n);var o=of(this.gl,this.debug,e,t,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var n=this.createFence(this.gl);return this.pollFence(n)},r.prototype.createFence=function(n){var e,t,o=this;if(z().getBool("WEBGL_FENCE_API_ENABLED")){var a=n,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);n.flush(),t=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),t=function(){return o.isQueryAvailable(e,z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):t=function(){return!0};return{query:e,isFencePassed:t}},r.prototype.downloadMatrixFromPackedTexture=function(n,e,t){var o=this;return this.downloadMatrixDriver(n,function(){return cf(o.gl,o.debug,e,t)})},r.prototype.createProgram=function(n){this.throwIfDisposed();var e=this.gl,t=Zc(e,this.debug,n),o=Kl(e,this.debug),a=el(e,this.debug);return Z(e,this.debug,function(){return e.attachShader(a,o)}),Z(e,this.debug,function(){return e.attachShader(a,t)}),tl(e,this.debug,a),this.debug&&va(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=tf(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(n){var e=this;this.throwIfDisposed(),n===this.program&&(this.program=null),n!=null&&Z(this.gl,this.debug,function(){return e.gl.deleteProgram(n)})},r.prototype.setProgram=function(n){var e=this;this.throwIfDisposed(),this.program=n,this.program!=null&&this.debug&&va(this.gl,this.debug,this.program),Z(this.gl,this.debug,function(){return e.gl.useProgram(n)})},r.prototype.getUniformLocation=function(n,e,t){return t===void 0&&(t=!0),this.throwIfDisposed(),t?ul(this.gl,this.debug,n,e):cl(this.gl,n,e)},r.prototype.getAttributeLocation=function(n,e){var t=this;return this.throwIfDisposed(),Z(this.gl,this.debug,function(){return t.gl.getAttribLocation(n,e)})},r.prototype.getUniformLocationNoThrow=function(n,e){return this.throwIfDisposed(),this.gl.getUniformLocation(n,e)},r.prototype.setInputMatrixTexture=function(n,e,t){this.throwIfDisposed(),this.throwIfNoProgram(),ll(this.gl,this.debug,this.program,n,e,t)},r.prototype.setOutputMatrixTexture=function(n,e,t){this.setOutputMatrixTextureDriver(n,t,e)},r.prototype.setOutputPackedMatrixTexture=function(n,e,t){this.throwIfDisposed();var o=xo(e,t),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(n,a,i)},r.prototype.setOutputMatrixWriteRegion=function(n,e,t,o){this.setOutputMatrixWriteRegionDriver(t,n,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(n,e,t,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&va(this.gl,this.debug,this.program),oo(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var n=this.gl;this.debug&&this.debugValidate(),Z(n,this.debug,function(){return n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var n=this;this.throwIfDisposed(),Z(this.gl,this.debug,function(){return n.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=ro(this.gl,this.debug,z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var n=this.gl,e=this.getQueryTimerExtensionWebGL2(),t=n.createQuery();return n.beginQuery(e.TIME_ELAPSED_EXT,t),t}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var n=this.getQueryTimerExtensionWebGL1();n.endQueryEXT(n.TIME_ELAPSED_EXT)}else{var e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(n){return ee(this,void 0,void 0,function(){var e=this;return te(this,function(t){switch(t.label){case 0:return[4,ts(function(){return e.disposed||e.isQueryAvailable(n,z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return t.sent(),[2,this.getQueryTime(n,z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(n,e){if(e===0)return null;if(e===2){var t=this.gl;return t.getQueryParameter(n,t.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(n,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(n,e){if(e===0)return!0;if(e===2){var t=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=t.getQueryParameter(n,t.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(n,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(n){var e=this;return new Promise(function(t){e.addItemToPoll(function(){return n.isFencePassed()},function(){return t()})})},r.prototype.pollItems=function(){for(var n=function(t){for(var o=0;o<t.length&&t[o]();++o);return o-1}(this.itemsToPoll.map(function(t){return t.isDoneFn})),e=0;e<=n;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(n+1)},r.prototype.addItemToPoll=function(n,e){var t=this;this.itemsToPoll.push({isDoneFn:n,resolveFn:e}),this.itemsToPoll.length>1||ts(function(){return t.pollItems(),t.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(n){this.throwIfDisposed(),ma(this.gl,this.debug,n,this.framebuffer),this.debug&&oo(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(ma(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&oo(this.gl)):cs(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(n,e){this.bindTextureToFrameBuffer(n);var t=e();return this.unbindTextureToFrameBuffer(),t},r.prototype.setOutputMatrixTextureDriver=function(n,e,t){this.throwIfDisposed();var o=this.gl;ma(o,this.debug,n,this.framebuffer),this.debug&&oo(o),this.outputTexture=n,Z(o,this.debug,function(){return o.viewport(0,0,e,t)}),Z(o,this.debug,function(){return o.scissor(0,0,e,t)})},r.prototype.setOutputMatrixWriteRegionDriver=function(n,e,t,o){var a=this;this.throwIfDisposed(),Z(this.gl,this.debug,function(){return a.gl.scissor(n,e,t,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function sc(r,n){if(r.length!==n.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+n.length+" inputs");r.forEach(function(e,t){var o=e.logicalShape,a=n[t],i=a.shape;if(!Ue(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!Ue(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var jv=function(r,n,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var t=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,p=s.left,h=s.top,d=o*t,m=pt(),v=f==="channelsLast",g=v?0:1,y=v?1:2,b="",x=0;x<=1;x++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+x+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+h+`;
            d0 = offsetY + `+l+" * (pos / "+d+`);

            if(d0 < `+n[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+p+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+d+".) / "+o+`.));

              if(d1 < `+n[y]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*x+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*x+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+m.output+` = result;
      }
    `},Kv=function(r,n,e,t,o){this.variableNames=["x"],this.outputShape=[];var a,i=n,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+t+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},Xv=function(r,n,e,t,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=n,this.bias=e,this.alpha=t,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+n+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+n+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+t+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+t+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},Yv=function(r,n,e,t,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=n,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+t+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},$v=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var n=r.strideHeight,e=r.strideWidth,t=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+t+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Jv=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var n=r.strideDepth,e=r.strideHeight,t=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,f=u-1-r.padInfo.top,p=c-1-r.padInfo.left,h=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+p+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+n+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+t+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+h+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Wi=function(r,n,e,t,o,a,i){e===void 0&&(e=!1),t===void 0&&(t=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=t?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],p=t?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],h="",d="";a&&(h=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,d="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+h+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+p[0]+`);
          result += (`+f[1]+" * "+p[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+d+`

        setOutput(result);
      }
    `},Qv=function(){function r(n,e,t){this.variableNames=["probs"],this.outputShape=[n,t],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;return function(t,o){e.seedLoc==null&&(e.seedLoc=t.getUniformLocation(o,"seed")),t.gl.uniform1f(e.seedLoc,n)}},r}(),Zv=function(r,n,e,t){this.variableNames=["indices"],this.outputShape=[r,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+t+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},em=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var n=r.length;if(n===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=It("rc",n),t=Ne(n),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(n,r,e),a=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(n,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(f,p){for(var h=[],d=0;d<=1;d++)for(var m=0;m<=1;m++){for(var v=(d===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<f;g++)v=p[p.length-1-g]+","+v;h.push(v)}return h}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+t+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},tm=function(r,n,e){this.variableNames=["x"],this.outputShape=n.map(function(u,c){return u[0]+r[c]+u[1]});var t=r.length,o=Ne(t),a=n.map(function(u){return u[0]}).join(","),i=n.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,t);this.userCode=t!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},nm=function(r,n,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map(function(v,g){return v[0]+r[g]+v[1]});for(var t=r.length,o=Ne(t),a=n.map(function(v){return v[0]}).join(","),i=n.map(function(v,g){return v[0]+r[g]}).join(","),s=It("rc",t),u=It("source",t),c=s[t-1]+" < "+this.outputShape[t-1],l=t===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[t-1]+` += 1;
       if(`+c+`) {
      `,t===1?"":`}
       rc = outputLoc;
       `+s[t-2]+` += 1;
       if(`+s[t-2]+" < "+this.outputShape[t-2]+") {",t===1?"":"  "+s[t-1]+` += 1;
         if(`+c+") {"],p=t===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",h="",d=0,m=t===1?2:4;d<m;d++)h+=`
        `+f[d]+`
        if (`+p+`) {
          result[`+d+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+d+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;h+=t===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+h+`
        setOutput(result);
      }
    `},zi=function(r,n,e){if(this.variableNames=["x"],n==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var t=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,f=r.padInfo.left;this.outputShape=r.outShape;var p=n==="avg",h="0.0";if(p||(h="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var d=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="avg"&&(d="avgValue / count");var m=4*Math.floor(t/4),v=t%4,g=`
      if (`+p+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+h+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+h+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+d+`);
      }
    `}},Vi=function(r,n,e){if(this.variableNames=["x"],n==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var t=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,h=r.padInfo.front,d=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=n==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+h+", "+d+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+p+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+p+` +
                      wR * `+p+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var y=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="avg"&&(y="avgValue / count");var b=4*Math.floor(t/4),x=t%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+h+", "+d+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(x===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(x===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(x===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+y+`);
        }
      }
    `}},rm=function(r,n){this.variableNames=["x"];var e=r.windowSize,t=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[t,a];var i="0.0",s="";n==="prod"?i="1.0":n==="min"?(i="1.0 / 1e-20",s="min"):n==="max"&&(i="-1.0 / 1e-20",s="max");var u=n+"("+n+"("+n+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";n==="sum"?u="sumValue":n==="prod"?u="prodValue":n==="all"?u="allValue":n==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(n==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(n==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,p="vec4";n==="all"?(i="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):n==="any"&&(i="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,p="bvec4");var h="";o%e>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+h+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},om=function(r,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",t=0;t<4;t++){var o="thisRC = rc;";t%2==1&&(o+="thisRC.z += 1;"),t>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(t>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+t+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(t>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Un(["r","c","d"],n)+`
      return ivec3(r, c, d);
    }
  
      `+Vs(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},am=function(r,n,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n.shape;var t=n.shape,o=t[1],a=t[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],p=c[1]/l[1],h=1/f,d=1/p,m=2*Math.ceil(h)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+p+`);

        const float invHeightScale = float(`+h+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},im=function(r,n,e,t){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,n,e,s];var u=[t&&n>1?a-1:a,t&&e>1?i-1:i],c=[t&&n>1?n-1:n,t&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},sm=function(r,n,e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,n,e,s];var u=[t&&n>1?a-1:a,t&&e>1?i-1:i],c=[t&&n>1?n-1:n,t&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},um=function(r,n,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n.shape;var t=n.shape,o=t[1],a=t[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],p=c[1]/l[1],h=1/f,d=1/p,m=2*Math.ceil(h)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+p+`);

        const float invHeightScale = float(`+h+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},cm=function(r,n,e,t){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,n,e,s];var u=[t&&n>1?a-1:a,t&&e>1?i-1:i],c=[t&&n>1?n-1:n,t&&e>1?e-1:e],l=t?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},lm=function(r,n){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var t=r.map(function(a,i){return function(s){return n.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=Ne(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+t+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},fm=function(r,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var t=It("rc",e),o=t[e-1]+" + 1 < "+this.outputShape[e-1],a=t[e-2]+" + 1 < "+this.outputShape[e-2],i=Ne(e);function s(u){var c=r.map(function(l,f){return function(p,h){return n.indexOf(p)!==-1&&r[p]!==1?r[p]+" - "+h[p]+" - 1":""+h[p]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(t.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(t.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(t.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(t.slice())+`;
            }
          }
          setOutput(result);
        }
    `},uc=function(r,n,e,t,o,a,i){i===void 0&&(i=!0),this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=Ne(o.length),u=Ne(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";t===1?f="i":t===2&&(f="i, coords[1]");var p="getUpdates("+f+")",h=n>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+n+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+h+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+p+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},pm=function(r,n){this.variableNames=["x","segmentIds"];var e=r.windowSize,t=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[t,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},hm=function(r,n,e){var t,o;if(this.variableNames=["c","a","b"],this.outputShape=n,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",t="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<n.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);t=i.join(),o=s.join()}var c=Ne(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+t+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},dm=function(){function r(n){this.variableNames=["source"],this.outputShape=n,this.rank=n.length;var e,t=Ne(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return Ui.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+t+` sourceLoc;
        `+t+` coords = getOutputCoords();
        `+n.map(function(i,s){return"sourceLoc."+Ui[s]+" = start["+s+"] + coords."+Ui[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;if(n.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+n.length+")");return function(t,o){e.startLoc==null&&(e.startLoc=t.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||t.gl.uniform1iv(e.startLoc,n)}},r}(),Ui=["x","y","z","w","u","v"],vm=function(){function r(n){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.rank=n.length;var e=Ne(this.rank),t=It("coords",this.rank),o=It("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+t[this.rank-1]+" < "+n[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+t[this.rank-1]+`;
      if (++`+t[this.rank-2]+" < "+n[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+t[this.rank-1]+" < "+n[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+n.map(function(l,f){return"start["+f+"]"}).join()+");":n.map(function(l,f){return o[f]+" = "+t[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(n){var e=this;if(n.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+n.length+")");return function(t,o){e.startLoc==null&&(e.startLoc=t.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||t.gl.uniform1iv(e.startLoc,n)}},r}(),mm=function(r,n,e){this.variableNames=["x"],this.outputShape=e;var t=e.length,o=Ne(e.length),a=Ne(e.length),i="";if(t===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+n+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},gm=function(){function r(n){this.gpgpu=n,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(n,e,t){var o,a=cc(e,t),i=lc(n,a,t);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===Tt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(n[0],n[1]):a===Tt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(n[0],n[1]):a===Tt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(n[0],n[1]):a===Tt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(n[0],n[1]):a===Tt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(n[0],n[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(n,e,t,o){if(this.freeTextures!=null){var a=lc(e,cc(t,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(n),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(n);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var n=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+n+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var n=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(t){n.gpgpu.deleteMatrixTexture(t)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){n.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function cc(r,n){if(r===Dt.UPLOAD)return Tt.PACKED_2X2_FLOAT32;if(r===Dt.RENDER||r==null)return function(e){return z().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?Tt.PACKED_2X2_FLOAT32:Tt.UNPACKED_FLOAT32:e?Tt.PACKED_2X2_FLOAT16:Tt.UNPACKED_FLOAT16}(n);if(r===Dt.DOWNLOAD||r===Dt.PIXELS)return Tt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function lc(r,n,e){return r[0]+"_"+r[1]+"_"+n+"_"+e}var ym=function(r,n){this.variableNames=["A"];for(var e=new Array(r.length),t=0;t<e.length;t++)e[t]=r[t]*n[t];this.outputShape=e,this.rank=e.length;var o=Ne(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},xm=function(r,n){this.variableNames=["A"];for(var e=new Array(r.length),t=0;t<e.length;t++)e[t]=r[n[t]];this.outputShape=e,this.rank=e.length;var o=Ne(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(n);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},bm=function(r,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),t=0;t<e.length;t++)e[t]=r[n[t]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Ne(this.rank),a=Ul("rc",this.rank),i=new Array(this.rank);for(t=0;t<n.length;t++)i[n[t]]=a[t];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Us=1.7580993408473768,Gs=1.0507009873554805,de=function(r,n){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+n+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Yt="if (isnan(x)) return x;",wm="return x;",fc="return abs(x);",ff=Yt+`
  return (x < 0.0) ? 0.0 : x;
`,pf=Yt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,hf="return (x >= 0.0) ? x : (exp(x) - 1.0);",Cm=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Us+`;
  float scale = `+Gs+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,pc="return -x;",hc="return ceil(x);",dc="return floor(x);",vc="return exp(x);",mc="return exp(x) - 1.0;",_m=Yt+`
  return sin(x);
`,Em=Yt+`
  return cos(x);
`,km=Yt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Im=Yt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Rm=Yt+`
  return atan(x);
`,Sm=Yt+"return log(x + sqrt(x * x + 1.0));",Tm=Yt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Dm=Yt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,ia="return x;",Am="return x;",df=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,vf=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,mf=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,no=function(r,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+n+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Fm=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var n=r.length,e=It("rc",n),t=Ne(n),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(n,e),a=e.slice(-2),i=n<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+t+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},sa={};function ua(r,n){if(n===void 0&&(n=!1),r==="linear")return n?Am:wm;if(r==="relu")return n?df:ff;if(r==="elu")return n?mf:hf;if(r==="relu6")return n?vf:pf;if(r==="prelu")return n?jl:ql;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Pm=600,gf=function(r){function n(e){var t,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!z().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=on(z().getNumber("WEBGL_VERSION"));o.binaryCache=((t=z().getNumber("WEBGL_VERSION"))in sa||(sa[t]={}),sa[t]),o.gpgpu=new lf(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new gm(o.gpgpu),o.numMBBeforeWarning=z().global.screen==null?1024:z().global.screen.height*z().global.screen.width*window.devicePixelRatio*Pm/1024/1024,o.texData=new Ol(o,F),o}return jt(n,r),n.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},n.prototype.write=function(e,t,o){if(z().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:t,dtype:o,values:e,usage:Dt.UPLOAD}),a},n.prototype.move=function(e,t,o,a){if(z().getBool("DEBUG")&&this.checkNumericalProblems(t),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:t,usage:Dt.UPLOAD})},n.prototype.readSync=function(e){var t=this.texData.get(e),o=t.values,a=t.dtype,i=t.complexTensors,s=t.slice,u=t.shape,c=t.isPacked;if(s!=null){var l=void 0;l=c?new no(u,ia):new de(u,ia);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),p=this.readSync(f.dataId);return this.disposeData(f.dataId),p}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var h,d,m=this.activeTimers!=null;return m&&(h=Gt()),a==="complex64"?d=vs(i.real.dataSync(),i.imag.dataSync()):d=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=Gt()-h),this.convertAndCacheOnCPU(e,d)},n.prototype.read=function(e){return ee(this,void 0,void 0,function(){var t,o,a,i,s,u,c,l,f,p,h,d,m,v,g,y,b,x,w,C,S,R;return te(this,function(k){switch(k.label){case 0:if(this.pendingRead.has(e))return t=this.pendingRead.get(e),[2,new Promise(function(I){return t.push(I)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new no(i,ia):new de(i,ia),p=this.runWebGLProgram(f,[{dataId:e,shape:i,dtype:u}],u),h=this.read(p.dataId),this.disposeData(p.dataId),[2,h];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!z().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&z().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,u!=="complex64"&&z().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),d=(R=this.gpgpu).createBufferFromTexture.apply(R,[v.texture].concat(io(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:k.sent(),k.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=k.sent(),b=y[0],x=y[1],g=vs(b,x),[3,5];case 4:d==null?g=this.getValuesFromTexture(e):(w=ne(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(d,w)),k.label=5;case 5:return m!=null&&this.disposeData(m.dataId),C=this.convertAndCacheOnCPU(e,g),S=this.pendingRead.get(e),this.pendingRead.delete(e),S.forEach(function(I){return I(C)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}})})},n.prototype.checkNumericalProblems=function(e){if(e!=null)for(var t=0;t<e.length;t++){var o=e[t];if(!$c(o))throw z().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},n.prototype.getValuesFromTexture=function(e){var t,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=ne(a);if(z().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(t=this.gpgpu).downloadMatrixFromPackedTexture.apply(t,[l.texture].concat(io(a))).subarray(0,u);return this.disposeData(c.dataId),f}var p=z().getBool("WEBGL_PACK")&&s===!0,h=p?ga(a):a,d=p?new Bv(h):new Ov(h),m=this.runWebGLProgram(d,[{shape:h,dtype:i,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},n.prototype.time=function(e){return ee(this,void 0,void 0,function(){var t,o,a,i,s,u,c;return te(this,function(l){switch(l.label){case 0:return t=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=vn(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=vn(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=t,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Nc(c),u.getExtraProfileInfo=function(){return c.map(function(f,p){return{name:s[p],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},n.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},n.prototype.startTimer=function(){return z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Gt(),endMs:null}},n.prototype.endTimer=function(e){return z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Gt(),e)},n.prototype.getQueryTime=function(e){return ee(this,void 0,void 0,function(){var t;return te(this,function(o){return z().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(t=e).endMs-t.startMs]})})},n.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var t=this.texData.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.texData.delete(e)}}},n.prototype.releaseGPUData=function(e){var t=this.texData.get(e),o=t.texture,a=t.dtype,i=t.texShape,s=t.usage,u=t.isPacked,c=t.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var p=this.texData.get(e);p.texture=null,p.texShape=null,p.isPacked=!1,p.slice=null},n.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},n.prototype.getDataInfo=function(e){return this.texData.get(e)},n.prototype.getCPUBackend=function(){return z().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=F.findBackend("cpu")),this.cpuBackend):null},n.prototype.shouldExecuteOnCPU=function(e,t){var o=this;return t===void 0&&(t=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<t})},n.prototype.getGPGPUContext=function(){return this.gpgpu},n.prototype.complex=function(e,t){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:F.keep(e.clone()),imag:F.keep(t.clone())},o},n.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},n.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},n.prototype.slice=function(e,t,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,t,o);if(ne(o)===0)return Ye([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=Ps(e.shape,t,o);if(a||!i){var s=z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new vm(o):new dm(o),u=s.getCustomSetupFunc(t);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,t,o)},n.prototype.shallowSlice=function(e,t,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=Ns(t,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},n.prototype.stridedSlice=function(e,t,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,t,o,a);var i=za(t,o,a);if(i.some(function(u){return u===0}))return Ye([],i);var s=new mm(t,a,i);return this.compileAndRun(s,[e])},n.prototype.reverse=function(e,t){var o=z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fm(e.shape,t):new lm(e.shape,t);return this.compileAndRun(o,[e])},n.prototype.concat=function(e,t){if(e[0].dtype==="complex64"){var o=e.map(function(h){return Lt(h)}),a=e.map(function(h){return tn(h)});return nt(this.concat(o,t),this.concat(a,t))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,t);if(e.length===1)return e[0];if(e.length>z().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),t),u=this.concat(e.slice(i),t);return this.concat([s,u],t)}if(z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new Cv(e.map(function(h){return h.shape}),t);return this.compileAndRun(c,e)}var l=Kn(e.map(function(h){return h.shape}),t),f=e.map(function(h){return h.as2D(-1,ne(h.shape.slice(t)))}),p=new wv(f.map(function(h){return h.shape}));return this.compileAndRun(p,f).reshape(l)},n.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,pc,e.dtype);var t=new de(e.shape,pc);return this.compileAndRun(t,[e])},n.prototype.batchMatMul=function(e,t,o,a){var i=o?e.shape[2]:e.shape[1],s=a?t.shape[1]:t.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(t=t.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,p=s===1?t.as3D(c,1,u):t;return this.multiply(l,p).sum(f,!0)}var h=Xe(e.dtype,t.dtype),d=new Wi(e.shape,[c,i,s],o,a);return this.compileAndRun(d,[e,t],h)},n.prototype.fusedBatchMatMul=function(e){var t=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?t.shape[2]:t.shape[1],f=i?o.shape[1]:o.shape[2],p=t.shape[0],h=Xe(t.dtype,o.dtype),d=s!=null,m=c!=null,v=u?ua(u,!0):null,g=new Wi(t.shape,[p,l,f],a,i,d,v,m),y=[t,o];return s&&y.push(s),c&&y.push(c),this.compileAndRun(g,y,h)},n.prototype.multiply=function(e,t){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(t.dataId),i=new ec(mv,e.shape,t.shape),s=new ec(gv,e.shape,t.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(t,a.complexTensors.real),this.makeComplexComponentTensorInfo(t,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.multiply(e,t);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,tc,e.dtype);var p=new ze(tc,e.shape,t.shape);return this.compileAndRun(p,[e,t],e.dtype)},n.prototype.batchNormalization=function(e,t,o,a,i,s){var u=[e,t,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),z().getBool("WEBGL_PACK_NORMALIZATION")){var f=new vv(e.shape,t.shape,o.shape,c,l,a);return this.compileAndRun(f,u)}var p=new dv(e.shape,t.shape,o.shape,c,l,a);return this.compileAndRun(p,u)},n.prototype.localResponseNormalization4D=function(e,t,o,a,i){var s=z().getBool("WEBGL_PACK_NORMALIZATION")?new Yv(e.shape,t,o,a,i):new Kv(e.shape,t,o,a,i);return this.compileAndRun(s,[e])},n.prototype.LRNGrad=function(e,t,o,a,i,s,u){var c=new Xv(t.shape,a,i,s,u);return this.compileAndRun(c,[t,o,e])},n.prototype.tile=function(e,t){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return co(i)});return zl(le(e.shape,e.dtype,o),t)}var a=new ym(e.shape,t);return this.compileAndRun(a,[e])},n.prototype.pad=function(e,t,o){var a=z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new nm(e.shape,t,o):new tm(e.shape,t,o);return this.compileAndRun(a,[e])},n.prototype.transpose=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,t);var o=z().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new bm(e.shape,t):new xm(e.shape,t);return this.compileAndRun(o,[e])},n.prototype.gather=function(e,t,o){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.gather(e,t,o);var a=new Gv(e.shape,t.size,o);return this.compileAndRun(a,[e,t])},n.prototype.batchToSpaceND=function(e,t,o){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=t.reduce(function(f,p){return f*p}),i=Sa(e.shape,t,a),s=Ta(i.length,t.length),u=Da(e.shape,t,a),c=Tl(o,t.length),l=Dl(u,o,t.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},n.prototype.spaceToBatchND=function(e,t,o){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=t.reduce(function(p,h){return p*h}),i=[[0,0]];i.push.apply(i,o);for(var s=1+t.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Sa(u.shape,t,a,!1),l=Ta(c.length,t.length,!1),f=Da(u.shape,t,a,!1);return u.reshape(c).transpose(l).reshape(f)},n.prototype.reduce=function(e,t,o){var a=e.shape[0],i=e.shape[1],s=ya(i),u=new rm({windowSize:s,inSize:i,batchSize:a},t),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,t,o)},n.prototype.argReduce=function(e,t,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=ya(i),u=new av({windowSize:s,inSize:i,batchSize:a},t,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,t,l)},n.prototype.argReducePacked=function(e,t,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=ya(a[a.length-1]),s=new fv(a,i,t,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,t,c):c},n.prototype.sum=function(e,t){kt("sum",t,e.rank);var o=rt(e.shape,t),a=o[0],i=ne(o[1]),s=e.as2D(-1,i),u=Ni(e.dtype);return this.reduce(s,"sum",u).reshape(a)},n.prototype.prod=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,t);var o=rt(e.shape,t),a=o[0],i=ne(o[1]),s=e.as2D(-1,i),u=Ni(e.dtype);return this.reduce(s,"prod",u).reshape(a)},n.prototype.unsortedSegmentSum=function(e,t,o){var a=0,i=Kt([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=Xt(1,e.rank)[0]);var u=function(h,d,m){for(var v=[],g=h.length,y=0;y<g;y++)y!==d?v.push(h[y]):v.push(m);return v}(s.shape,a,o),c=ne([s.shape[a]]),l=s.as2D(-1,c),f=Ni(e.dtype),p=this.segOpCompute(l,"unsortedSegmentSum",t,f,o).reshape(u);return i!=null&&(p=p.transpose(Ba(i))),p},n.prototype.segOpCompute=function(e,t,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(p,h){var d,m=!1;for(p<=Fs?(d=p,m=!0):d=Ea(p,Math.floor(Math.sqrt(p)));!m;)d>h||d===p?m=!0:d=Ea(p,d+1);return d}(u,i),l=new pm({windowSize:c,inSize:u,batchSize:s,numSegments:i},t),f=this.compileAndRun(l,[e,o],a);return f.shape[1]===i?f:(o=Ra(0,i).tile([u/c]),this.segOpCompute(f,t,o,a,i))},n.prototype.argMinMaxReduce=function(e,t,o){var a=[t];if(kt("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!z().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=rt(e.shape,a),s=i[0],u=ne(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},n.prototype.argMin=function(e,t){return this.argMinMaxReduce(e,t,"min")},n.prototype.argMax=function(e,t){return this.argMinMaxReduce(e,t,"max")},n.prototype.cumsum=function(e,t,o,a){if(t!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+t);var i=new Av(e.shape,o,a);return this.compileAndRun(i,[e])},n.prototype.equal=function(e,t){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(equal(a, b));
`,"bool");var o=new ze("return float(a == b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.notEqual=function(e,t){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(notEqual(a, b));
`,"bool");var o=new ze("return float(a != b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.less=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.less(e,t);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(lessThan(a, b));
`,"bool");var o=new ze("return float(a < b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.lessEqual=function(e,t){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new ze("return float(a <= b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.greater=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.greater(e,t);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new ze("return float(a > b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.greaterEqual=function(e,t){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new ze("return float(a >= b);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.logicalNot=function(e){var t=new de(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(t,[e])},n.prototype.logicalAnd=function(e,t){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new ze("return float(a >= 1.0 && b >= 1.0);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.logicalOr=function(e,t){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new ze("return float(a >= 1.0 || b >= 1.0);",e.shape,t.shape);return this.compileAndRun(o,[e,t],"bool")},n.prototype.select=function(e,t,o){var a=new hm(e.rank,t.shape,t.rank);return this.compileAndRun(a,[e,t,o],Xe(t.dtype,o.dtype))},n.prototype.where=function(e){ka("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var t=e.dataSync();return zs(e.shape,t)},n.prototype.topk=function(e,t,o){return Vl(e.dataSync(),e.shape,e.dtype,t)},n.prototype.min=function(e,t){kt("min",t,e.rank);var o=rt(e.shape,t),a=o[0],i=ne(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},n.prototype.minimum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.minimum(e,t);var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new ze(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.mod=function(e,t){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new ze(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.max=function(e,t){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,t);kt("max",t,e.rank);var o=rt(e.shape,t),a=o[0],i=ne(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},n.prototype.maximum=function(e,t){if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.maximum(e,t);var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new ze(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.all=function(e,t){kt("all",t,e.rank);var o=rt(e.shape,t),a=o[0],i=ne(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},n.prototype.any=function(e,t){kt("any",t,e.rank);var o=rt(e.shape,t),a=o[0],i=ne(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},n.prototype.realDivide=function(e,t){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new ze(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,t.shape);return this.compileAndRun(o,[e,t],"float32")},n.prototype.floorDiv=function(e,t){if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new ze(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,t.shape);return this.compileAndRun(o,[e,t],"int32")},n.prototype.add=function(e,t){if(e.dtype==="complex64"&&t.dtype==="complex64")return this.complexSeparableBinaryOp(e,t,Bi);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.add(e,t);var o=Xe(e.dtype,t.dtype);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,Bi,o);var a=new ze(Bi,e.shape,t.shape);return this.compileAndRun(a,[e,t],o)},n.prototype.packedUnaryOp=function(e,t,o){var a=new no(e.shape,t);return this.compileAndRun(a,[e],o)},n.prototype.packedBinaryOp=function(e,t,o,a,i){i===void 0&&(i=!1);var s=new pn(o,e.shape,t.shape,i);return this.compileAndRun(s,[e,t],a)},n.prototype.complexSeparableBinaryOp=function(e,t,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(t.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(p){var h=p[0],d=p[1],m=a.makeComplexComponentTensorInfo(e,h),v=a.makeComplexComponentTensorInfo(t,d),g=new ze(o,e.shape,t.shape);return a.compileAndRun(g,[m,v],Xe(h.dtype,d.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},n.prototype.makeComplexComponentTensorInfo=function(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}},n.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>z().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var t=Math.floor(e.length/2),o=this.addN(e.slice(0,t)),a=this.addN(e.slice(t));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return Xe(c,l)}),s=e.map(function(c){return c.shape}),u=z().getBool("WEBGL_PACK")?new ov(e[0].shape,s):new rv(e[0].shape,s);return this.compileAndRun(u,e,i)},n.prototype.subtract=function(e,t){if(e.dtype==="complex64"&&t.dtype==="complex64")return this.complexSeparableBinaryOp(e,t,Li);if(this.shouldExecuteOnCPU([e,t]))return this.cpuBackend.subtract(e,t);var o=Xe(e.dtype,t.dtype);if(z().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,t,Li,e.dtype);var a=new ze(Li,e.shape,t.shape);return this.compileAndRun(a,[e,t],o)},n.prototype.pow=function(e,t){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new ze(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,t.shape),a=Xe(e.dtype,t.dtype);return this.compileAndRun(o,[e,t],a)},n.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,hc,e.dtype);var t=new de(e.shape,hc);return this.compileAndRun(t,[e])},n.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,dc,e.dtype);var t=new de(e.shape,dc);return this.compileAndRun(t,[e])},n.prototype.sign=function(e){var t=new de(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(t,[e])},n.prototype.isNaN=function(e){var t=new de(e.shape,"return float(isnan(x));");return this.compileAndRun(t,[e],"bool")},n.prototype.isInf=function(e){var t=new de(e.shape,"return float(isinf(x));");return this.compileAndRun(t,[e],"bool")},n.prototype.isFinite=function(e){var t=new de(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(t,[e],"bool")},n.prototype.round=function(e){var t=new de(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(t,[e])},n.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,vc,e.dtype);var t=new de(e.shape,vc);return this.compileAndRun(t,[e])},n.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,mc,e.dtype);var t=new de(e.shape,mc);return this.compileAndRun(t,[e])},n.prototype.softmax=function(e,t){var o=He([t],e.shape),a=this.max(e,o),i=xt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},n.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var t=new de(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(t,[e])},n.prototype.log1p=function(e){var t=new de(e.shape,"return log(1.0 + x);");return this.compileAndRun(t,[e])},n.prototype.sqrt=function(e){var t=new de(e.shape,"return sqrt(x);");return this.compileAndRun(t,[e])},n.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var t=new de(e.shape,"return inversesqrt(x);");return this.compileAndRun(t,[e])},n.prototype.reciprocal=function(e){var t=new de(e.shape,"return 1.0 / x;");return this.compileAndRun(t,[e])},n.prototype.relu=function(e){var t;return t=z().getBool("WEBGL_PACK")?new no(e.shape,df):new de(e.shape,ff),this.compileAndRun(t,[e])},n.prototype.relu6=function(e){var t;return t=z().getBool("WEBGL_PACK")?new no(e.shape,vf):new de(e.shape,pf),this.compileAndRun(t,[e])},n.prototype.prelu=function(e,t){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pn(jl,e.shape,t.shape):new ze(ql,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.elu=function(e){if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,mf,e.dtype);var t=new de(e.shape,hf);return this.compileAndRun(t,[e])},n.prototype.eluDer=function(e,t){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,t.shape):new ze("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.selu=function(e){var t=new de(e.shape,Cm);return this.compileAndRun(t,[e])},n.prototype.int=function(e){var t=new de(e.shape,"return float(int(x));");return this.compileAndRun(t,[e],"int32")},n.prototype.clip=function(e,t,o){var a,i=(a=z().getBool("WEBGL_PACK_CLIP")?new xv(e.shape):new yv(e.shape)).getCustomSetupFunc(t,o);return this.compileAndRun(a,[e],null,i)},n.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(z().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fc,e.dtype);var t=new de(e.shape,fc);return this.compileAndRun(t,[e])},n.prototype.complexAbs=function(e){var t=this.texData.get(e.dataId),o=new bv(e.shape),a=[this.makeComplexComponentTensorInfo(e,t.complexTensors.real),this.makeComplexComponentTensorInfo(e,t.complexTensors.imag)];return this.compileAndRun(o,a)},n.prototype.sigmoid=function(e){var t=new de(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(t,[e])},n.prototype.softplus=function(e){var t=new de(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(t,[e])},n.prototype.sin=function(e){var t=new de(e.shape,_m);return this.compileAndRun(t,[e])},n.prototype.cos=function(e){var t=new de(e.shape,Em);return this.compileAndRun(t,[e])},n.prototype.tan=function(e){var t=new de(e.shape,"return tan(x);");return this.compileAndRun(t,[e])},n.prototype.asin=function(e){var t=new de(e.shape,km);return this.compileAndRun(t,[e])},n.prototype.acos=function(e){var t=new de(e.shape,Im);return this.compileAndRun(t,[e])},n.prototype.atan=function(e){var t=new de(e.shape,Rm);return this.compileAndRun(t,[e])},n.prototype.atan2=function(e,t){var o=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,t.shape):new ze(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,t.shape);return this.compileAndRun(o,[e,t])},n.prototype.sinh=function(e){var t=new de(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},n.prototype.cosh=function(e){var t=new de(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(t,[e])},n.prototype.tanh=function(e){var t=new de(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(t,[e])},n.prototype.asinh=function(e){var t=new de(e.shape,Sm);return this.compileAndRun(t,[e])},n.prototype.acosh=function(e){var t=new de(e.shape,Tm);return this.compileAndRun(t,[e])},n.prototype.atanh=function(e){var t=new de(e.shape,Dm);return this.compileAndRun(t,[e])},n.prototype.erf=function(e){var t=new de(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(t,[e])},n.prototype.step=function(e,t){var o=new de(e.shape,function(a){return a===void 0&&(a=0),Yt+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(t));return this.compileAndRun(o,[e])},n.prototype.conv2dByMatMul=function(e,t,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],p=o.outChannels,h=o.dataFormat==="channelsLast",d=(f===1||p===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(d||!z().getBool("WEBGL_LAZILY_UNPACK")||!z().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=h?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,o.inChannels]),y=this.reshape(t,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:y,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=h?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),x={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(ao(c.shape,x.shape),function(){return"packed reshape "+c.shape+" to "+x.shape+" isn't free"});var C=this.reshape(t,[1,o.inChannels,o.outChannels]),S=this.fusedBatchMatMul({a:x,b:C,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),R=this.texData.get(S.dataId);return E(R.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,R.shape=o.outShape,F.makeTensorFromDataId(S.dataId,o.outShape,S.dtype)},n.prototype.conv2dWithIm2Row=function(e,t,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,p=o.outHeight,h=o.dataFormat==="channelsLast",d=u*c*l,m=p*f,v=[d,m],g=e.squeeze([0]),y=t.reshape([1,d,-1]),b=new jv(v,g.shape,o),x=this.compileAndRun(b,[g]).reshape([1,v[0],v[1]]),w=a!=null,C=s!=null,S=i?ua(i,!0):null,R=new Wi(x.shape,[1,m,o.outChannels],!0,!1,w,S,C),k=[x,y];a&&k.push(a),C&&k.push(s);var I=this.compileAndRun(R,k);return h?I.reshape([1,p,f,o.outChannels]):I.reshape([1,o.outChannels,p,f])},n.prototype.fusedConv2d=function(e){var t=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(t,o,a,i,s,u);if(z().getBool("WEBGL_CONV_IM2COL")&&t.shape[0]===1)return this.conv2dWithIm2Row(t,o,a,i,s,u);var c=i!=null,l=u!=null,f=s?ua(s,!1):null,p=new nc(a,c,f,l),h=[t,o];return i&&h.push(i),u&&h.push(u),this.compileAndRun(p,h)},n.prototype.conv2d=function(e,t,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,t,o);if(z().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,t,o);var a=new nc(o);return this.compileAndRun(a,[e,t])},n.prototype.conv2dDerInput=function(e,t,o){var a=new Ev(o);return this.compileAndRun(a,[e,t])},n.prototype.conv2dDerFilter=function(e,t,o){var a=new _v(o);return this.compileAndRun(a,[e,t])},n.prototype.fusedDepthwiseConv2D=function(e){var t,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=z().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,f=u?ua(u,l):null,p=[o,a],h=s!=null,d=c!=null;return h&&p.push(s),d&&p.push(c),l?(t=new oc(i,h,f,d),this.compileAndRun(t,p)):(t=new rc(i,h,f,d),this.compileAndRun(t,p))},n.prototype.depthwiseConv2D=function(e,t,o){var a;return z().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new oc(o),this.compileAndRun(a,[e,t])):(a=new rc(o),this.compileAndRun(a,[e,t]))},n.prototype.depthwiseConv2DDerInput=function(e,t,o){var a=new Sv(o);return this.compileAndRun(a,[e,t])},n.prototype.depthwiseConv2DDerFilter=function(e,t,o){var a=new Rv(o);return this.compileAndRun(a,[e,t])},n.prototype.conv3d=function(e,t,o){var a=new Tv(o);return this.compileAndRun(a,[e,t])},n.prototype.conv3dDerInput=function(e,t,o){var a=new Iv(o);return this.compileAndRun(a,[e,t])},n.prototype.conv3dDerFilter=function(e,t,o){var a=new kv(o);return this.compileAndRun(a,[e,t])},n.prototype.maxPool=function(e,t){var o=new zi(t,"max",!1);return this.compileAndRun(o,[e])},n.prototype.avgPool=function(e,t){var o=new zi(t,"avg",!1);return this.compileAndRun(o,[e],"float32")},n.prototype.maxPoolBackprop=function(e,t,o,a){var i=new zi(a,"max",!0),s=this.compileAndRun(i,[t]),u=new $v(a),c=this.compileAndRun(u,[e,s],t.dtype);return s.dispose(),c},n.prototype.avgPoolBackprop=function(e,t,o){var a=new pv(o);return this.compileAndRun(a,[e],t.dtype)},n.prototype.cast=function(e,t){return Os(e,t,this)},n.prototype.unstack=function(e,t){for(var o=e.shape[t],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==t&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[t]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[t]=s,l[s]=this.slice(e,u,c).reshape(a);return l},n.prototype.avgPool3d=function(e,t){var o=new Vi(t,"avg",!1);return this.compileAndRun(o,[e],"float32")},n.prototype.avgPool3dBackprop=function(e,t,o){var a=new hv(o);return this.compileAndRun(a,[e],t.dtype)},n.prototype.maxPool3d=function(e,t){var o=new Vi(t,"max",!1);return this.compileAndRun(o,[e],"float32")},n.prototype.maxPool3dBackprop=function(e,t,o,a){var i=new Vi(a,"max",!0),s=this.compileAndRun(i,[t]),u=new Jv(a),c=this.compileAndRun(u,[e,s],t.dtype);return s.dispose(),c},n.prototype.reshape=function(e,t){var o=this.texData.get(e.dataId);if(o.isPacked&&!ao(e.shape,t)&&(o.texture===null||!ao(o.shape,t))){var a=this.packedReshape(e,t);return F.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return Fa(e,t)},n.prototype.resizeBilinear=function(e,t,o,a){var i=z().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new sm(e.shape,t,o,a):new im(e.shape,t,o,a);return this.compileAndRun(i,[e],"float32")},n.prototype.resizeBilinearBackprop=function(e,t,o){var a=new am(e,t,o);return this.compileAndRun(a,[e])},n.prototype.resizeNearestNeighbor=function(e,t,o,a){var i=new cm(e.shape,t,o,a);return this.compileAndRun(i,[e])},n.prototype.resizeNearestNeighborBackprop=function(e,t,o){var a=new um(e,t,o);return this.compileAndRun(a,[e])},n.prototype.multinomial=function(e,t,o,a){var i=t?e:Ct(e),s=i.shape[0],u=i.shape[1],c=new Qv(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},n.prototype.oneHot=function(e,t,o,a){var i=new Zv(e.size,t,o,a);return this.compileAndRun(i,[e])},n.prototype.diag=function(e){var t=new Mv(e.size);return this.compileAndRun(t,[e])},n.prototype.nonMaxSuppression=function(e,t,o,a,i){return ka("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Ls(e.dataSync(),t.dataSync(),o,a,i)},n.prototype.cropAndResize=function(e,t,o,a,i,s){var u=new Dv(e.shape,t.shape,a,i,s);return this.compileAndRun(u,[e,t,o],"float32")},n.prototype.depthToSpace=function(e,t,o){E(t>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+t});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*t,l=s*t,f=u/(t*t),p=new Nv(o==="NHWC"?[a,c,l,f]:[a,f,c,l],t,o);return this.compileAndRun(p,[e])},n.prototype.split=function(e,t,o){return Wl(e,t,o)},n.prototype.scatterND=function(e,t,o){var a=vo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=[l/u,u],p=e.reshape([s,i]),h=t.reshape([s,u]);if(l===0)return Fa(Ye([]),o);var d=Y(0),m=new uc(s,i,p.rank,h.rank,c,f);return this.compileAndRun(m,[h,p,d]).reshape(o)},n.prototype.sparseToDense=function(e,t,o,a){var i=vo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,f=new uc(u,s,e.rank,t.rank,c,[l,1],!1);return this.compileAndRun(f,[t,e,a]).reshape(o)},n.prototype.fft=function(e){return this.fftImpl(e,!1)},n.prototype.ifft=function(e){return this.fftImpl(e,!0)},n.prototype.fftImpl=function(e,t){var o=this.texData.get(e.dataId),a=new ic(zv,e.shape,t),i=new ic(Vv,e.shape,t),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},n.prototype.gatherND=function(e,t){var o=t.shape,a=o[o.length-1],i=As(e,t),s=i[0],u=i[1],c=i[2],l=i[3],f=t.reshape([u,a]),p=e.reshape([e.size/c,c]),h=new Hv(a,l,[u,c]);return this.compileAndRun(h,[p,f]).reshape(s)},n.prototype.fill=function(e,t,o){if((o=o||Rr(t))==="string"){var a=uo(o,ne(e));return a.fill(t),F.makeTensor(a,e,o,this)}var i=new Uv(e,t),s=i.getCustomSetupFunc(t);return this.compileAndRun(i,[],o,s)},n.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},n.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},n.prototype.linspace=function(e,t,o){return Bs(e,t,o)},n.prototype.makeTensorInfo=function(e,t){var o=this.write(null,e,t);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:t}},n.prototype.makeOutput=function(e,t){var o=this.makeTensorInfo(e,t).dataId;return F.makeTensorFromDataId(o,e,t,this)},n.prototype.unpackTensor=function(e){var t=new Fm(e.shape);return this.runWebGLProgram(t,[e],e.dtype)},n.prototype.packTensor=function(e){var t=new em(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)},n.prototype.packedReshape=function(e,t){var o=[po(e.shape)].concat(ho(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[po(t)].concat(ho(t)),s=new om(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:t,dtype:u.dtype}},n.prototype.decode=function(e){var t,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=ga(i);return t=a?new Pv(u):new Fv(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(t,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},n.prototype.runWebGLProgram=function(e,t,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===fo.DENSE){var l=io(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),ne(u.shape)===0)return c.values=kr(u.dtype,0),u;var f=[],p=t.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var x=s.texData.get(b.dataId);if(x.texture==null){if(!e.packedInputs&&ne(b.shape)<=z().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:x.values};e.packedInputs&&(x.isPacked=!0,x.shape=b.shape)}else if(!!x.isPacked!=!!e.packedInputs)b=x.isPacked?s.unpackTensor(b):s.packTensor(b),f.push(b),x=s.texData.get(b.dataId);else if(x.isPacked&&!ao(x.shape,b.shape)){var w=b,C=b.shape;b.shape=x.shape,b=s.packedReshape(b,C),f.push(b),x=s.texData.get(b.dataId),w.shape=C}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:x,isUniform:!1}});this.uploadToGPU(u.dataId);var h,d={shape:u.shape,texData:c,isUniform:!1},m=function(b,x,w){var C="";x.concat(w).forEach(function(k){var I=k.texData!=null&&k.texData.slice!=null&&k.texData.slice.flatOffset>0,A=k.isUniform?"uniform":k.texData.texShape;C+=k.shape+"_"+A+"_"+I});var S=b.userCode,R=b.constructor.name;return R+="_"+C+"_"+S}(e,p,d),v=this.getAndSaveBinary(m,function(){return function(b,x,w,C){var S=x.userCode,R=w.map(function(L,V){var G={logicalShape:L.shape,texShape:L.isUniform?null:L.texData.texShape,isUniform:L.isUniform,isPacked:!L.isUniform&&L.texData.isPacked,flatOffset:null};return L.texData!=null&&L.texData.slice!=null&&L.texData.slice.flatOffset>0&&(G.flatOffset=L.texData.slice.flatOffset),{name:x.variableNames[V],shapeInfo:G}}),k=R.map(function(L){return L.shapeInfo}),I={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},A=iv(R,I,S,x.packedInputs),D=b.createProgram(A),B=null,M=b.getUniformLocation(D,"NAN",!1);z().getNumber("WEBGL_VERSION")===1&&(B=b.getUniformLocation(D,"INFINITY",!1));for(var N={},U=0;U<x.variableNames.length;U++){var W=x.variableNames[U];N[W]=b.getUniformLocation(D,W,!1),N["offset"+W]=b.getUniformLocation(D,"offset"+W,!1)}return{program:x,source:A,webGLProgram:D,uniformLocations:N,inShapeInfos:k,outShapeInfo:I,infLoc:B,nanLoc:M}}(s.gpgpu,e,p,d)}),g=this.activeTimers!=null;if(g&&(h=this.startTimer()),function(b,x,w,C,S){sc(x.inShapeInfos,w),sc([x.outShapeInfo],[C]);var R=C.texData.texture,k=C.texData.texShape;C.texData.isPacked?b.setOutputPackedMatrixTexture(R,k[0],k[1]):b.setOutputMatrixTexture(R,k[0],k[1]),b.setProgram(x.webGLProgram),z().getNumber("WEBGL_VERSION")===1&&x.infLoc!==null&&b.gl.uniform1f(x.infLoc,1/0),x.nanLoc!==null&&b.gl.uniform1f(x.nanLoc,NaN),w.forEach(function(I,A){var D=x.program.variableNames[A],B=x.uniformLocations[D],M=x.uniformLocations["offset"+D];if(B!=null)if(I.isUniform)if(ne(I.shape)<2)b.gl.uniform1f(B,I.uniformValues[0]);else{var N=I.uniformValues;N instanceof Float32Array||(N=new Float32Array(N)),b.gl.uniform1fv(B,N)}else I.texData.slice!=null&&M!=null&&b.gl.uniform1i(M,I.texData.slice.flatOffset),b.setInputMatrixTexture(I.texData.texture,B,A)}),S!=null&&S(b,x.webGLProgram),b.executeProgram()}(this.gpgpu,v,p,d,a),f.forEach(function(b){return s.disposeData(b.dataId)}),g&&(h=this.endTimer(h),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(h)})),!z().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var y=this.unpackTensor(u);return this.disposeData(u.dataId),y}return u},n.prototype.compileAndRun=function(e,t,o,a,i){i===void 0&&(i=!1),o=o||t[0].dtype;var s=this.runWebGLProgram(e,t,o,a,i);return F.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},n.prototype.getAndSaveBinary=function(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]},n.prototype.getTextureManager=function(){return this.textureManager},n.prototype.dispose=function(){var e=this;this.disposed||(z().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(t){e.gpgpu.deleteProgram(e.binaryCache[t].webGLProgram),delete e.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},n.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=q(function(){if(!z().get("WEBGL_RENDER_FLOAT32_ENABLED")){var t=z().getBool("DEBUG");z().set("DEBUG",!1);var o=e.abs(Y(1e-8)).dataSync()[0];if(z().set("DEBUG",t),o>0)return 32}return 16})),this.floatPrecisionValue},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.uploadToGPU=function(e){var t,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,p=this.activeTimers!=null;p&&(f=Gt());var h=o.texShape;if(h==null&&(h=hl(a,l),o.texShape=h),s!=null){var d=ga(a),m=void 0,v=h[1],g=h[0],y=s instanceof Uint8Array;l?(v=(t=xo(h[0],h[1]))[0],g=t[1],m=new Wv(d,[g,v],y)):m=new Lv(d,[g,v],y);var b=this.makeTensorInfo([g,v],i);this.texData.get(b.dataId).usage=y?Dt.PIXELS:Dt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),v,g,s);var x=this.runWebGLProgram(m,[b],i,null,!0),w=this.texData.get(x.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(x.dataId),o.values=null,p&&(this.uploadWaitMs+=Gt()-f)}else{var C=this.acquireTexture(h,c,i,l);o.texture=C}}},n.prototype.convertAndCacheOnCPU=function(e,t){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),t!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(t,a)),o.values},n.prototype.acquireTexture=function(e,t,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,t,a)},n.prototype.computeBytes=function(e,t){return e[0]*e[1]*Cs(t)},n}(Bl);Xc()&&F.registerBackend("webgl",function(){return new gf},2);var Nm=T({square_:function(r){var n=_(r,"x","square"),e=[n];return F.runKernelFunc(function(t,o){return o([n]),t.square(n)},{x:n},null,"Square",{},e,[])}}),yo="SquaredDifference",yf=T({squaredDifference_:function(r,n){var e,t=_(r,"a","squaredDifference"),o=_(n,"b","squaredDifference");e=Oe(t,o),t=e[0],o=e[1],ge(t.shape,o.shape);var a={a:t,b:o},i=[t,o];return F.runKernelFunc(function(s,u){var c=s.squaredDifference(t,o);return u([t,o]),c},a,function(s,u){var c=u[0],l=u[1],f=Y(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},yo,{},i,[])}}),Mm=T({abs_:function(r){var n=_(r,"x","abs");return n.dtype==="complex64"?F.runKernelFunc(function(e){return e.complexAbs(n)},{$x:n}):F.runKernelFunc(function(e,t){var o=e.abs(n);return t([n]),o},{x:n},function(e,t){var o=t[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),Om=T({acos_:function(r){var n=_(r,"x","acos");return F.runKernelFunc(function(e,t){var o=e.acos(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.divStrict(Y(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Bm=T({acosh_:function(r){var n=_(r,"x","acosh");return F.runKernelFunc(function(e,t){var o=e.acosh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Lm=T({asin_:function(r){var n=_(r,"x","asin");return F.runKernelFunc(function(e,t){var o=e.asin(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.divStrict(Y(1).sub(o.toFloat().square()).sqrt())}}})}}),Wm=T({asinh_:function(r){var n=_(r,"x","asinh");return F.runKernelFunc(function(e,t){var o=e.asinh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.divStrict(Y(1).add(o.toFloat().square()).sqrt())}}})}}),zm=T({atan_:function(r){var n=_(r,"x","atan");return F.runKernelFunc(function(e,t){var o=e.atan(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Vm=T({atanh_:function(r){var n=_(r,"x","atanh");return F.runKernelFunc(function(e,t){var o=e.atanh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(Y(1).sub(o.toFloat().square()))}}})}}),Um=T({ceil_:function(r){var n=_(r,"x","ceil");return F.runKernelFunc(function(e){return e.ceil(n)},{$x:n},function(e){return{$x:function(){return be(e)}}})}}),wo=T({clipByValue_:function(r,n,e){var t=_(r,"x","clipByValue");E(n<=e,function(){return"Error in clip: min ("+n+") must be less than or equal to max ("+e+")."});var o=[t],a={min:n,max:e};return F.runKernelFunc(function(i,s){var u=i.clip(t,n,e);return s([t]),u},{x:t},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(n).logicalAnd(u.lessEqual(e)),be(i))}}},"ClipByValue",a,o)}}),Gm=T({cos_:function(r){var n=_(r,"x","cos"),e=[n];return F.runKernelFunc(function(t,o){var a=t.cos(n);return o([n]),a},{x:n},function(t,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(t)}}},"Cos",{},e)}}),Hm=T({cosh_:function(r){var n=_(r,"x","cosh");return F.runKernelFunc(function(e,t){var o=e.cosh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),qm=T({erf_:function(r){var n=_(r,"x","erf");return E(n.dtype==="int32"||n.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),n.dtype==="int32"&&(n=n.toFloat()),F.runKernelFunc(function(e,t){var o=e.erf(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Ga=T({exp_:function(r){var n=_(r,"x","exp");return F.runKernelFunc(function(e,t){var o=e.exp(n);return t([o]),o},{x:n},function(e,t){return{x:function(){return e.mulStrict(t[0])}}},"Exp",{},[],[!0])}}),jm=T({expm1_:function(r){var n=_(r,"x","expm1");return F.runKernelFunc(function(e,t){var o=e.expm1(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.mul(o.exp())}}})}}),Km=T({floor_:function(r){var n=_(r,"x","floor");return F.runKernelFunc(function(e){return e.floor(n)},{$x:n},function(e){return{$x:function(){return be(e)}}})}}),Xm=T({log_:function(r){var n=_(r,"x","log"),e=[n];return F.runKernelFunc(function(t,o){var a=t.log(n);return o([n]),a},{x:n},function(t,o){var a=o[0];return{x:function(){return t.div(a.toFloat())}}},"Log",{},e)}}),Ym=T({log1p_:function(r){var n=_(r,"x","log1p");return F.runKernelFunc(function(e,t){var o=e.log1p(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.add(1))}}})}}),$m=T({logSigmoid_:function(r){var n=_(r,"x","logSigmoid");return F.runKernelFunc(function(e,t){var o=e.softplus(n.neg()).neg();return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Co=T({neg_:function(r){var n=_(r,"x","neg"),e=[n];return F.runKernelFunc(function(t){return t.neg(n)},{x:n},function(t){return{x:function(){return t.neg()}}},"Neg",{},e)}}),Jm=T({reciprocal_:function(r){var n=_(r,"x","reciprocal");return F.runKernelFunc(function(e,t){var o=e.reciprocal(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.square().neg())}}})}}),Qm=T({round_:function(r){var n=_(r,"x","round");return F.runKernelFunc(function(e){return e.round(n)},{$x:n},function(e){return{$x:function(){return be(e)}}})}}),xf=T({rsqrt_:function(r){var n=_(r,"x","rsqrt"),e=[n];return F.runKernelFunc(function(t,o){var a=t.rsqrt(n);return o([n]),a},{x:n},function(t,o){var a=o[0];return{x:function(){return t.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Hs=T({sigmoid_:function(r){var n=_(r,"x","sigmoid");return F.runKernelFunc(function(e,t){var o=e.sigmoid(n);return t([o]),o},{x:n},function(e,t){var o=t[0];return{x:function(){return e.mul(o.mul(Y(1).sub(o)))}}},"Sigmoid")}}),Zm=T({sign_:function(r){var n=_(r,"x","sign");return F.runKernelFunc(function(e){return e.sign(n)},{$x:n},function(e){return{$x:function(){return be(e)}}})}}),eg=T({isNaN_:function(r){var n=_(r,"x","isNaN");return F.runKernelFunc(function(e){return e.isNaN(n)},{$x:n},function(e){return{$x:function(){return be(e)}}})}}),tg=T({isInf_:function(r){var n=_(r,"x","isInf");return F.runKernelFunc(function(e){return e.isInf(n)},{$x:n},function(e){return{$x:function(){return be(e)}}})}}),ng=T({isFinite_:function(r){var n=_(r,"x","isFinite");return F.runKernelFunc(function(e){return e.isFinite(n)},{$x:n},function(e){return{$x:function(){return be(e)}}})}}),rg=T({sin_:function(r){var n=_(r,"x","sin"),e=[n];return F.runKernelFunc(function(t,o){var a=t.sin(n);return o([n]),a},{x:n},function(t,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(t)}}},"Sin",{},e)}}),og=T({sinh_:function(r){var n=_(r,"x","sinh");return F.runKernelFunc(function(e,t){var o=e.sinh(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),ag=T({softplus_:function(r){var n=_(r,"x","softplus");return F.runKernelFunc(function(e,t){var o=e.softplus(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),ig=T({sqrt_:function(r){var n=_(r,"x","sqrt");return F.runKernelFunc(function(e,t){var o=e.sqrt(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),sg=T({step_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","step");return F.runKernelFunc(function(t){return t.step(e,n)},{$x:e},function(t){return{$x:function(){return be(t)}}})}}),ug=T({tan_:function(r){var n=_(r,"x","tan");return F.runKernelFunc(function(e,t){var o=e.tan(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return e.div(o.cos().square())}}})}}),cg=T({tanh_:function(r){var n=_(r,"x","tanh");return F.runKernelFunc(function(e,t){var o=e.tanh(n);return t([o]),o},{x:n},function(e,t){var o=t[0];return{x:function(){return Y(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function bf(r,n,e,t,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(n,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),_o(u,c,l,s,i,a)}function wf(r,n,e,t,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(n,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),_o(u,c,l,s,i,a)}function Cf(r,n,e,t,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(n,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),_o(u,c,l,s,i,a)}function _o(r,n,e,t,o,a){a==null&&(a=.001);var i,s,u,c=_(r,"x","batchNorm"),l=_(n,"mean","batchNorm"),f=_(e,"variance","batchNorm");o!=null&&(i=_(o,"scale","batchNorm")),t!=null&&(s=_(t,"offset","batchNorm")),E(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var p=[c,l,f,i];return F.runKernelFunc(function(h,d){var m=h.batchNormalization(u,ca(l),ca(f),a,ca(i),ca(s));return d([c,l,f,i]),m},{x:c,mean:l,variance:f,scale:i,offset:s},function(h,d){var m=d,v=m[0],g=m[1],y=m[2],b=m[3],x=b==null?Y(1):b,w=Ge(g.shape,u.shape),C=[];if(g.rank===1){for(var S=0;S<u.shape.length-1;++S)C.push(u.shape[S]);C.push(1)}var R=v.sub(g),k=h.mul(x),I=xf(y.add(Y(a))),A=I.mul(I).mul(I).mul(Y(-.5));return{x:function(){return g.rank===1?h.mul(qn(I.as4D(1,1,1,g.shape[0]),C)).mul(x).reshape(v.shape):h.mul(I).mul(x).reshape(v.shape)},mean:function(){var D=I.mul(Y(-1)).mul(k);return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)},variance:function(){var D=A.mul(R).mul(k);return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)},scale:function(){var D=R.mul(I),B=h.mul(D);return g.rank===1&&(B=B.sum(w)),B.reshape(g.shape)},offset:function(){var D=h;return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},p).reshape(c.shape)}function ca(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function Ha(){bl("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var lg=T({batchNormalization2d_:function(r,n,e,t,o,a){return t===void 0&&(t=.001),Ha(),bf(r,n,e,a,o,t)}}),fg=T({batchNormalization3d_:function(r,n,e,t,o,a){return t===void 0&&(t=.001),Ha(),wf(r,n,e,a,o,t)}}),pg=T({batchNormalization4d_:function(r,n,e,t,o,a){return t===void 0&&(t=.001),Ha(),Cf(r,n,e,a,o,t)}}),hg=T({batchNormalization_:function(r,n,e,t,o,a){return t===void 0&&(t=.001),Ha(),_o(r,n,e,a,o,t)}}),qs=T({batchNorm_:_o}),dg=T({batchNorm2d_:bf}),vg=T({batchNorm3d_:wf}),mg=T({batchNorm4d_:Cf}),qa=T({logicalAnd_:function(r,n){var e=_(r,"a","logicalAnd","bool"),t=_(n,"b","logicalAnd","bool");return ge(e.shape,t.shape),F.runKernelFunc(function(o){return o.logicalAnd(e,t)},{a:e,b:t},null,"LogicalAnd")}}),gg=T({logicalNot_:function(r){var n=_(r,"x","logicalNot","bool");return F.runKernelFunc(function(e){return e.logicalNot(n)},{$x:n})}}),_f=T({logicalOr_:function(r,n){var e=_(r,"a","logicalOr","bool"),t=_(n,"b","logicalOr","bool");return ge(e.shape,t.shape),F.runKernelFunc(function(o){return o.logicalOr(e,t)},{$a:e,$b:t})}}),yg=T({logicalXor_:function(r,n){var e=_(r,"a","logicalXor","bool"),t=_(n,"b","logicalXor","bool");return ge(e.shape,t.shape),_f(r,n).logicalAnd(qa(r,n).logicalNot())}}),Yn=T({where_:function(r,n,e){var t=_(n,"a","where"),o=_(e,"b","where"),a=_(r,"condition","where","bool");return we(t.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===t.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):we(a.shape,o.shape,"Error in where: "),F.runKernelFunc(function(i,s){var u=i.select(a,t,o);return s([a]),u},{$condition:a,$a:t,$b:o},function(i,s){var u=s[0];return{$condition:function(){return be(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Ef=function(r){return ee(this,void 0,void 0,function(){var n,e,t;return te(this,function(o){switch(o.label){case 0:return[4,(n=_(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),t=zs(n.shape,e),r!==n&&n.dispose(),[2,t]}})})},ae=T({add_:function(r,n){var e,t=_(r,"a","add"),o=_(n,"b","add");e=Oe(t,o),t=e[0],o=e[1];var a=ge(t.shape,o.shape);return F.runKernelFunc(function(i){return i.add(t,o)},{a:t,b:o},function(i){return{a:function(){var s=i,u=Ge(t.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(t.shape)},b:function(){var s=i,u=Ge(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),xg=T({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var n=r.map(function(o,a){return _(o,"tensors"+a,"addN")}),e=n[0];n.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),n.forEach(function(o){if(!Ue(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var t=n;return F.runKernelFunc(function(o){return o.addN(n)},t,function(o){var a={};return n.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),bg=T({addStrict_:function(r,n){var e=_(r,"a","addStrict"),t=_(n,"b","addStrict");return we(e.shape,t.shape,"Error in addStrict: "),e.add(t)}}),wg=T({atan2_:function(r,n){var e,t=_(r,"a","atan2"),o=_(n,"b","atan2");e=Oe(t,o),t=e[0],o=e[1];var a=ge(t.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.atan2(t,o);return s([t,o]),u},{$a:t,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ae(u.square(),c.square()),f=i.mul(c.div(l)),p=Ge(u.shape,a);return p.length>0&&(f=f.sum(p)),f.reshape(u.shape)},$b:function(){var l=ae(u.square(),c.square()),f=Co(i.mul(u.div(l))),p=Ge(c.shape,a);return p.length>0&&(f=f.sum(p)),f.reshape(c.shape)}}})}}),Wt=T({div_:function(r,n){var e,t=_(r,"a","div"),o=_(n,"b","div");if(e=Oe(t,o),t=e[0],o=e[1],t.dtype==="int32"&&o.dtype==="int32")return kf(t,o);var a=ge(t.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.realDivide(t,o);return s([t,o]),u},{a:t,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Ge(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Ge(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var p=c.square();return l.div(p.toFloat()).neg()}}},"Div")}}),Cg=T({divNoNan_:function(r,n){var e,t=_(r,"a","div"),o=_(n,"b","div");t=(e=Oe(t,o))[0],o=e[1];var a=Wt(t,o),i=be(a),s=o.equal(i);return Yn(s,i,a)}}),_g=T({divStrict_:function(r,n){var e=_(r,"a","div"),t=_(n,"b","div");return we(e.shape,t.shape,"Error in divideStrict: "),e.div(t)}}),kf=T({floorDiv_:function(r,n){var e,t=_(r,"a","floorDiv"),o=_(n,"b","floorDiv");e=Oe(t,o),t=e[0],o=e[1];var a=ge(t.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.floorDiv(t,o);return s([t,o]),u},{a:t,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Ge(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Ge(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var p=c.square();return l.div(p.toFloat()).neg()}}},"FloorDiv")}}),js=T({maximum_:function(r,n){var e,t=_(r,"a","maximum"),o=_(n,"b","maximum");return e=Oe(t,o),t=e[0],o=e[1],t.dtype==="bool"&&(t=t.toInt(),o=o.toInt()),ge(t.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.maximum(t,o);return i([t,o]),s},{a:t,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Eg=T({maximumStrict_:function(r,n){var e=_(r,"a","maximumStrict"),t=_(n,"b","maximumStrict");return we(e.shape,t.shape,"Error in maximumStrict: "),e.maximum(t)}}),If=T({minimum_:function(r,n){var e,t=_(r,"a","minimum"),o=_(n,"b","minimum");return e=Oe(t,o),t=e[0],o=e[1],t.dtype==="bool"&&(t=t.toInt(),o=o.toInt()),ge(t.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.minimum(t,o);return i([t,o]),s},{a:t,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),kg=T({minimumStrict_:function(r,n){var e=_(r,"a","minimumStrict"),t=_(n,"b","minimumStrict");return we(e.shape,t.shape,"Error in minimumStrict: "),e.minimum(t)}}),Ig=T({mod_:function(r,n){var e,t=_(r,"a","mod"),o=_(n,"b","mod");e=Oe(t,o),t=e[0],o=e[1];var a=ge(t.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.mod(t,o);return s([t,o]),u},{$a:t,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Ge(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),f=Ge(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),Rg=T({modStrict_:function(r,n){var e=_(r,"a","modStrict"),t=_(n,"b","modStrict");return we(e.shape,t.shape,"Error in modStrict: "),e.mod(t)}}),Be=T({mul_:function(r,n){var e,t=_(r,"a","mul"),o=_(n,"b","mul");e=Oe(t,o),t=e[0],o=e[1];var a=ge(t.shape,o.shape);return F.runKernelFunc(function(i,s){var u=i.multiply(t,o);return s([t,o]),u},{a:t,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),f=Ge(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Ge(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),Sg=T({mulStrict_:function(r,n){var e=_(r,"a","mul"),t=_(n,"b","mul");return we(e.shape,t.shape,"Error in multiplyStrict: "),e.mul(t)}}),Pa=T({pow_:function(r,n){var e,t=_(r,"base","pow"),o=_(n,"exp","pow");e=Oe(t,o),t=e[0],o=e[1];var a=ge(t.shape,o.shape),i=[t,o];return F.runKernelFunc(function(s,u){var c=s.pow(t,o);return u([t,o,c]),c},{a:t,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var p=l.toFloat(),h=s.mul(p.mul(c.pow(p.sub(Y(1))))),d=Ge(c.shape,a);return d.length>0&&(h=h.sum(d)),h.reshape(c.shape)},b:function(){var p=c.greater(0),h=c.log().where(p,be(c)),d=s.mul(f.mul(h)),m=Ge(l.shape,a);return m.length>0&&(d=d.sum(m)),d.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Tg=T({powStrict_:function(r,n){return we(r.shape,n.shape,"Error in powStrict: "),r.pow(n)}}),Dg=T({squaredDifferenceStrict_:function(r,n){var e=_(r,"a","squaredDifferenceStrict"),t=_(n,"b","squaredDifferenceStrict");return we(e.shape,t.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(t)}}),De=T({sub_:function(r,n){var e,t=_(r,"a","sub"),o=_(n,"b","sub");e=Oe(t,o),t=e[0],o=e[1];var a=ge(t.shape,o.shape);return F.runKernelFunc(function(i){return i.subtract(t,o)},{a:t,b:o},function(i){return{a:function(){var s=i,u=Ge(t.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(t.shape)},b:function(){var s=i,u=Ge(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Ag=T({subStrict_:function(r,n){var e=_(r,"a","subStrict"),t=_(n,"b","subStrict");return we(e.shape,t.shape,"Error in subStrict: "),e.sub(t)}}),Rf=T({equal_:function(r,n){var e,t=_(r,"a","equal"),o=_(n,"b","equal");return e=Oe(t,o),t=e[0],o=e[1],ge(t.shape,o.shape),F.runKernelFunc(function(a){return a.equal(t,o)},{$a:t,$b:o})}}),Fg=T({equalStrict_:function(r,n){var e=_(r,"a","equalStrict"),t=_(n,"b","equalStrict");return we(e.shape,t.shape,"Error in equalStrict: "),e.equal(t)}}),Pg=T({greater_:function(r,n){var e,t=_(r,"a","greater"),o=_(n,"b","greater");return e=Oe(t,o),t=e[0],o=e[1],ge(t.shape,o.shape),F.runKernelFunc(function(a){return a.greater(t,o)},{a:t,b:o},null,"Greater")}}),Sf=T({greaterEqual_:function(r,n){var e,t=_(r,"a","greaterEqual"),o=_(n,"b","greaterEqual");return e=Oe(t,o),t=e[0],o=e[1],ge(t.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.greaterEqual(t,o);return i([t,o]),s},{a:t,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return be(s)},b:function(){return be(u)}}},"GreaterEqual")}}),Ng=T({greaterEqualStrict_:function(r,n){var e=_(r,"a","greaterEqualStrict"),t=_(n,"b","greaterEqualStrict");return we(e.shape,t.shape,"Error in greaterEqualStrict: "),e.greaterEqual(t)}}),Mg=T({greaterStrict_:function(r,n){var e=_(r,"a","greaterStrict"),t=_(n,"b","greaterStrict");return we(e.shape,t.shape,"Error in greaterStrict: "),e.greater(t)}}),Og=T({less_:function(r,n){var e,t=_(r,"a","less"),o=_(n,"b","less");return e=Oe(t,o),t=e[0],o=e[1],ge(t.shape,o.shape),F.runKernelFunc(function(a){return a.less(t,o)},{a:t,b:o},null,"Less")}}),Bg=T({lessEqual_:function(r,n){var e,t=_(r,"a","lessEqual"),o=_(n,"b","lessEqual");return e=Oe(t,o),t=e[0],o=e[1],ge(t.shape,o.shape),F.runKernelFunc(function(a,i){var s=a.lessEqual(t,o);return i([t,o]),s},{a:t,b:o},null,"LessEqual")}}),Lg=T({lessEqualStrict_:function(r,n){var e=_(r,"a","lessEqualStrict"),t=_(n,"b","lessEqualStrict");return we(e.shape,t.shape,"Error in lessEqualStrict: "),e.lessEqual(t)}}),Wg=T({lessStrict_:function(r,n){var e=_(r,"a","lessStrict"),t=_(n,"b","lessStrict");return we(e.shape,t.shape,"Error in lessStrict: "),e.less(t)}}),zg=T({notEqual_:function(r,n){var e,t=_(r,"a","notEqual"),o=_(n,"b","notEqual");return e=Oe(t,o),t=e[0],o=e[1],ge(t.shape,o.shape),F.runKernelFunc(function(a){return a.notEqual(t,o)},{a:t,b:o},null,"NotEqual")}}),Vg=T({notEqualStrict_:function(r,n){var e=_(r,"a","notEqualStrict"),t=_(n,"b","notEqualStrict");return we(e.shape,t.shape,"Error in notEqualStrict: "),e.notEqual(t)}});function gc(r,n){for(var e=[],t=r;t<n;++t)e.push(t);return e}function yc(r){for(var n=[],e=0;e<r.length;++e)for(var t=0;t<r[e].length;++t)n.push(r[e][t]);return n}var Ks=T({gather_:function(r,n,e){e===void 0&&(e=0);var t=_(r,"x","gather"),o=_(n,"indices","gather","int32");e=He(e,t.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],f=1,p=1,h=0;h<u;h++)l.push(i.shape[h]),f*=i.shape[h];for(h=0;h<s.rank;h++)l.push(s.shape[h]);for(h=u+1;h<i.rank;h++)l.push(i.shape[h]),p*=i.shape[h];return{batchSize:f,sliceSize:p,dimSize:c,outputShape:l}}(t,o,e);return F.runKernelFunc(function(i,s){var u=i.gather(t,o.flatten(),e);return s([o]),u},{x:t,indices:o},function(i,s){var u=s[0];return{x:function(){var c=t.shape,l=u.size,f=c.slice(0,e),p=f.length,h=c.slice(e,c.length).slice(1),d=h.length,m=gc(0,p),v=gc(p+1,p+1+d),g=yc([f,[l],h]),y=i.reshape(g),b=u.reshape([l]),x=yc([[p],m,v]),w=y.transpose(x),C=Tf(w,b,t.shape[e]),S=Ba(x);return C=C.transpose(S)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),Tf=T({unsortedSegmentSum_:function(r,n,e){var t=_(r,"x","unsortedSegmentSum"),o=_(n,"segmentIds","unsortedSegmentSum","int32");return E(Le(e),function(){return"numSegments must be of dtype int"}),F.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(t,o,e);return i([o]),s},{$x:t},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=js(c,be(c)),f=Ks(u,l),p=Sf(c,Y(0,"int32")),h=f.rank-p.rank,d=0;d<h;++d)p=ft(p,d+1);p=qa(p,Tr(f.shape,"bool"));var m=be(f);return Yn(p,f,m)}(a,s)}}})}}),Ug=function(r,n,e){return ee(this,void 0,void 0,function(){var t,o,a,i,s,u,c,l,f,p,h,d,m;return te(this,function(v){switch(v.label){case 0:for(t=_(r,"tensor","boolMask"),o=_(n,"mask","boolMask","bool"),a=e==null?0:e,i=o.rank,s=t.shape,E(i>0,function(){return"mask cannot be scalar"}),we(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),f=t.reshape(l),p=o.reshape([-1]),[4,Ef(p)];case 1:return h=v.sent(),d=h.squeeze([1]),m=Ks(f,d,a),r!==t&&t.dispose(),n!==o&&o.dispose(),d.dispose(),f.dispose(),p.dispose(),h.dispose(),[2,m]}})})};function Df(r,n,e,t,o,a,i){a===void 0&&(a="NHWC"),E(r.length===n.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+n.rank+") must match"});var s=r,u=n,c=!1;n.rank===3&&(c=!0,u=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],f=a==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&E(Le(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var p=Ua(a),h=Fn(s,e.shape,t,1,o,i,!1,p),d=F.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,e,h);return v([e,u]),g},{dy4D:u,filter:e},function(m,v){var g=v[0],y=v[1];return{dy4D:function(){return $e(m,g,t,o,a,1,i)},filter:function(){return Xs(m,y,g.shape,t,o,a,i)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function Gi(r){var n=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=n[0],t=n[1],o=n[2];return e===1&&t===1&&o===1}function Af(r,n,e,t,o){E(r.length===n.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+n.rank+") must match"});var a=r,i=n,s=!1;n.rank===4&&(s=!0,i=n.as5D(1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=go(a,e.shape,t,1,o),f=F.runKernelFunc(function(p){return p.conv3dDerInput(i,e,l)},{dy5D:i});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var Gg=T({conv1d_:function(r,n,e,t,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=_(r,"x","conv1d"),u=_(n,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Le(t),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+t+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(bt(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),p=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),h=$e(p,f,[1,e],t,"NHWC",[1,a],i);return l?h.as2D(h.shape[2],h.shape[3]):h.as3D(h.shape[0],h.shape[2],h.shape[3])}}),$e=T({conv2d_:function(r,n,e,t,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=_(r,"x","conv2d"),u=_(n,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Le(t),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+t+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];E(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),E(bt(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var p=Ua(o),h=Fn(c.shape,u.shape,e,a,t,i,!1,p),d=[u,c],m=F.runKernelFunc(function(v,g){var y=v.conv2d(c,u,h);return g([u,c]),y},{x:c,filter:u},function(v,g){var y=g,b=y[0],x=y[1];return E(Xn(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return Ff(x.shape,v,b,e,t,o)},filter:function(){return Xs(x,v,b.shape,e,t,o)}}},"Conv2D",h,d);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Hg=T({conv3d_:function(r,n,e,t,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=_(r,"x","conv3d"),s=_(n,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(p,h){return Gi(p)||Gi(h)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=go(u.shape,s.shape,e,a,t),f=F.runKernelFunc(function(p,h){var d=p.conv3d(u,s,l);return h([u,s]),d},{x:u,$filter:s},function(p,h){E(Gi(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var d=h[0],m=h[1];return{x:function(){return Af(d.shape,p,m,e,t)},$filter:function(){return function(v,g,y,b,x){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),E(y.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+y+"."}),E(w.shape[4]===y[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+y[3]+"."}),E(C.shape[4]===y[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+y[4]+")."});var S=go(w.shape,y,b,1,x);return F.runKernelFunc(function(R){return R.conv3dDerFilter(w,C,S)},{x5D:w,dy5D:C})}(d,p,m.shape,e,t)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Xs=T({conv2dDerFilter_:function(r,n,e,t,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=n;u.rank===3&&(u=n.as4D(1,n.shape[0],n.shape[1],n.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&E(Le(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=Ua(a),p=Fn(s.shape,e,t,1,o,i,!1,f);return F.runKernelFunc(function(h){return h.conv2dDerFilter(s,u,p)},{x4D:s,dy4D:u})}}),Ff=T({conv2dDerInput_:Df}),Eo=T({depthwiseConv2d_:function(r,n,e,t,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=_(r,"x","depthwiseConv2d"),u=_(n,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),E(bt(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&E(Le(t),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+t+"."});var f=Fn(c.shape,u.shape,e,a,t,i,!0),p=[c,u],h=F.runKernelFunc(function(d,m){var v=d.depthwiseConv2D(c,u,f);return m([c,u]),v},{x:c,filter:u},function(d,m){E(Xn(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=m[0],g=m[1];return{x:function(){return Pf(v.shape,d,g,f)},filter:function(){return Nf(v,d,g.shape,f)}}},"DepthwiseConv2dNative",f,p);return l?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}}),Pf=T({depthwiseConv2dDerInput_:function(r,n,e,t){var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=F.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,t)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Nf=T({depthwiseConv2dDerFilter_:function(r,n,e,t){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=n;return a.rank===3&&(a=n.as4D(1,n.shape[0],n.shape[1],n.shape[2])),F.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,t)},{x4D:o,dy4D:a})}}),ko=T({separableConv2d_:function(r,n,e,t,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=_(r,"x","separableConv2d"),u=_(n,"depthwiseFilter","separableConv2d"),c=_(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var p=u.shape[2],h=u.shape[3];E(c.shape[2]===p*h,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+p*h+", but got "+c.shape[2]+"."});var d=Eo(l,u,t,o,i,a),m=$e(d,c,1,"valid",i);return f?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),qg=T({conv2dTranspose_:function(r,n,e,t,o,a){return Df(e,_(r,"x","conv2dTranspose"),_(n,"filter","conv2dTranspose"),t,o,"NHWC",a)}}),jg=T({conv3dTranspose_:function(r,n,e,t,o){return Af(e,_(r,"x","conv3dTranspose"),_(n,"filter","conv3dTranspose"),t,o)}}),Dr=T({matMul_:function(r,n,e,t){var o;e===void 0&&(e=!1),t===void 0&&(t=!1);var a=_(r,"a","matMul"),i=_(n,"b","matMul");o=Oe(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=t?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=t?i.shape[i.rank-2]:i.shape[i.rank-1],f=a.shape.slice(0,-2),p=i.shape.slice(0,-2),h=ne(f),d=ne(p);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),E(Ue(f,p),function(){return"Error in matMul: outer dimensions ("+f+") and ("+p+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+t+" must match."});var m=a.shape.slice(0,-2).concat([c,l]),v=e?a.as3D(h,s,c):a.as3D(h,c,s),g=t?i.as3D(d,l,u):i.as3D(d,u,l),y={transposeA:e,transposeB:t};return F.runKernelFunc(function(b,x){var w=b.batchMatMul(v,g,e,t);return x([v,g]),w},{a:v,b:g},function(b,x){var w=x,C=w[0],S=w[1];return e||t?!e&&t?{a:function(){return b.matMul(S,!1,!1)},b:function(){return b.matMul(C,!0,!1)}}:e&&!t?{a:function(){return S.matMul(b,!1,!0)},b:function(){return C.matMul(b,!1,!1)}}:{a:function(){return S.matMul(b,!0,!0)},b:function(){return b.matMul(C,!0,!0)}}:{a:function(){return b.matMul(S,!1,!0)},b:function(){return C.matMul(b,!0,!1)}}},"BatchMatMul",y).reshape(m)}}),Kg=T({dot_:function(r,n){var e=_(r,"t1","dot"),t=_(n,"t2","dot");E(!(e.rank!==1&&e.rank!==2||t.rank!==1&&t.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+t.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=t.rank===1?t.size:t.shape[0];return E(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&t.rank===1?e.as2D(1,-1).matMul(t.as2D(-1,1)).asScalar():e.rank===1&&t.rank===2?e.as2D(1,-1).matMul(t.as2D(t.shape[0],t.shape[1])).as1D():e.rank===2&&t.rank===1?e.matMul(t.as2D(-1,1)).as1D():e.matMul(t.as2D(t.shape[0],t.shape[1]))}}),Xg=T({outerProduct_:function(r,n){var e=_(r,"v1","outerProduct"),t=_(n,"v2","outerProduct");return E(e.rank===1&&t.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+t.rank+"."}),e.as2D(-1,1).matMul(t.as2D(1,-1))}}),Io=T({reverse_:function(r,n){var e=_(r,"x","reverse");if(e.rank===0)return e.clone();var t=He(n,e.shape);return F.runKernelFunc(function(o){return o.reverse(e,t)},{$x:e},function(o){return{$x:function(){return o.reverse(t)}}}).reshapeAs(e)}}),Yg=T({reverse1d_:function(r){var n=_(r,"x","reverse");return E(n.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+n.rank+"."}),Io(n,0)}}),$g=T({reverse2d_:function(r,n){var e=_(r,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),Io(e,n)}}),Jg=T({reverse3d_:function(r,n){var e=_(r,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),Io(e,n)}}),Qg=T({reverse4d_:function(r,n){var e=_(r,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),Io(e,n)}});function Mf(r,n,e,t,o,a){var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),t==null&&(t=[1,1]),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(bt(e,t),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+t+"'"}),a!=null&&E(Le(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Ir(s.shape,n,e,t,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ue(c.inShape,c.outShape))return i.clone();var l=[s],f=F.runKernelFunc(function(p,h){var d=p.maxPool(s,c);return h([s,d]),d},{x:s},function(p,h){var d=h[0],m=h[1];return{x:function(){return function(v,g,y,b,x,w,C,S){var R=_(v,"dy","maxPoolBackprop"),k=_(g,"input","maxPoolBackprop"),I=_(y,"output","maxPoolBackprop");E(k.rank===R.rank,function(){return"Rank of input ("+k.rank+") does not match rank of dy ("+R.rank+")"}),w==null&&(w=[1,1]),E(bt(x,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+x+" and dilations '"+w+"'"}),E(R.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+R.rank+"."}),E(k.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+k.rank+"."}),S!=null&&E(Le(C),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+C+"."});var A=Ir(k.shape,b,x,w,C,S);return F.runKernelFunc(function(D){return D.maxPoolBackprop(R,k,I,A)},{$dy:R,$input:k})}(p,d,m,n,e,t,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Of(r,n,e,t,o,a){var i=_(r,"x","avgPool","float32");t==null&&(t=[1,1]),E(bt(e,t),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+t+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&E(Le(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Ir(s.shape,n,e,t,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ue(c.inShape,c.outShape))return i.clone();var l=F.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(p,h,d,m,v,g){var y=_(p,"dy","avgPoolBackprop"),b=_(h,"input","avgPoolBackprop");E(b.rank===y.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+y.rank+")"}),v==null&&(v=[1,1]),E(bt(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var x=b,w=y,C=!1;b.rank===3&&(C=!0,x=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=y.as4D(1,y.shape[0],y.shape[1],y.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(x.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+x.rank+"."});var S=Ir(x.shape,d,m,v,g),R=F.runKernelFunc(function(k){return k.avgPoolBackprop(w,x,S)},{dy4D:w,input4D:x});return C?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}(f,s,n,e,t,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var We=T({maxPool_:function(r,n,e,t,o){return Mf(r,n,e,1,t,o)}}),yn=T({avgPool_:function(r,n,e,t,o){return Of(r,n,e,1,t,o)}}),Zg=T({pool_:function(r,n,e,t,o,a){o==null&&(o=[1,1]),a==null&&(a=1),t===0&&(t="valid");var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(bt(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=Ir(s.shape,n,a,o,t),f=[l.dilationHeight,l.dilationWidth];c=t==="same"?function(x,w){var C=x.map(function(k,I){return k+(k-1)*(w[I]-1)}).map(function(k){return k-1}),S=C.map(function(k){return Math.floor(k/2)}),R=C.map(function(k,I){return k-S[I]});return C.map(function(k,I){return[S[I],R[I]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var p=f[0]===1&&f[1]===1,h=function(x,w,C){var S=C.map(function(M){return M[0]}),R=C.map(function(M){return M[1]}),k=x.concat(S,R),I=w.map(function(M,N){return(M-k[N]%M)%M}),A=R.map(function(M,N){return M+I[N]}),D=w.map(function(M,N){return[S[N],A[N]]}),B=w.map(function(M,N){return[0,I[N]]});return[D,B]}([l.inHeight,l.inWidth],f,c),d=h[0],m=h[1],v=p?t:"valid",g=p?s:Rl(s,f,d),y=(e==="avg"?function(){return Of(g,n,a,1,v)}:function(){return Mf(g,n,a,1,v)})(),b=p?y:El(y,f,m);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),e0=T({maxPool3d_:function(r,n,e,t,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(bt(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Le(t),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+t+"."});var l=mo(u.shape,n,e,i,t,o,a),f=F.runKernelFunc(function(p,h){var d=p.maxPool3d(u,l);return h([u,d]),d},{x:u},function(p,h){var d=h[0],m=h[1];return{x:function(){return function(v,g,y,b,x,w,C,S){var R=_(v,"dy","maxPool3dBackprop"),k=_(g,"input","maxPool3dBackprop"),I=_(y,"output","maxPool3dBackprop"),A=R,D=k,B=I,M=!1;k.rank===4&&(M=!0,A=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),D=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),B=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3])),E(A.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+A.rank+"."}),E(D.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+D.rank+"."}),E(B.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+B.rank+"."}),w==null&&(w=[1,1,1]),E(bt(x,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+x+" and dilations '"+w+"'"}),S!=null&&E(Le(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+C+"."});var N=mo(D.shape,b,x,w,C,S),U=F.runKernelFunc(function(W){return W.maxPool3dBackprop(A,D,B,N)},{dy5D:A,input5D:D});return M?U.as4D(U.shape[1],U.shape[2],U.shape[3],U.shape[4]):U}(p,d,m,n,e,i,t,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),t0=T({avgPool3d_:function(r,n,e,t,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(bt(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Le(t),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+t+"."});var l=mo(u.shape,n,e,i,t,o,a),f=F.runKernelFunc(function(p){return p.avgPool3d(u,l)},{x:u},function(p){return{x:function(){return function(h,d,m,v,g,y,b){var x=_(h,"dy","avgPool3dBackprop"),w=_(d,"input","avgPool3dBackprop"),C=x,S=w,R=!1;w.rank===4&&(R=!0,C=x.as5D(1,x.shape[0],x.shape[1],x.shape[2],x.shape[3]),S=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),E(S.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+S.rank+"."}),g==null&&(g=[1,1,1]),E(bt(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),b!=null&&E(Le(y),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+y+"."});var k=mo(S.shape,m,v,g,y,b),I=F.runKernelFunc(function(A){return A.avgPool3dBackprop(C,S,k)},{dy5D:C,input5D:S});return R?I.as4D(I.shape[1],I.shape[2],I.shape[3],I.shape[4]):I}(p,u,n,e,i,t,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),qt=T({slice_:function(r,n,e){var t,o,a=_(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(t=typeof n=="number"?[n].concat(new Array(a.rank-1).fill(0)):n.length<a.rank?n.concat(new Array(a.rank-n.length).fill(0)):n.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-t[c])}),Pl(a,t,o);var i=a.shape,s={begin:t,size:o};return F.runKernelFunc(function(u){return u.slice(a,t,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([t[l],i[l]-t[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),n0=T({slice1d_:function(r,n,e){var t=_(r,"x","slice1d");return E(t.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+t.rank+" tensor"}),qt(t,[n],[e])}}),r0=T({slice2d_:function(r,n,e){var t=_(r,"x","slice2d");return E(t.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+t.rank+" tensor"}),qt(t,n,e)}}),Ys=T({slice3d_:function(r,n,e){var t=_(r,"x","slice3d");return E(t.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+t.rank+" tensor"}),qt(t,n,e)}}),o0=T({slice4d_:function(r,n,e){var t=_(r,"x","slice4d");return E(t.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+t.rank+" tensor"}),qt(t,n,e)}});function Bf(r,n,e,t,o){return n.rank<e.rank&&(n=n.reshape(xt(n.shape,t))),r.rank<e.rank&&(r=r.reshape(xt(r.shape,t))),{x:function(){var a=r.mul(e.equal(n).cast(r.dtype));return o==null?a:a.transpose(o)}}}var a0=T({all_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","all","bool"),o=He(n,t.shape),a=o,i=Kt(a,t.rank);i!=null&&(t=t.transpose(i),a=Xt(a.length,t.rank));var s=F.runKernelFunc(function(c){return c.all(t,a)},{$x:t});if(e){var u=xt(s.shape,o);return s.reshape(u)}return s}}),i0=T({any_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","any","bool"),o=He(n,t.shape),a=o,i=Kt(a,t.rank);i!=null&&(t=t.transpose(i),a=Xt(a.length,t.rank));var s=F.runKernelFunc(function(c){return c.any(t,a)},{$x:t});if(e){var u=xt(s.shape,o);return s.reshape(u)}return s}}),s0=T({argMax_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","argMax");n==null&&(n=0);var t=He(n,e.shape),o=Kt(t,e.rank);o!=null&&(e=e.transpose(o),t=Xt(t.length,e.rank));var a={axis:t[0]},i=[e];return F.runKernelFunc(function(s,u){var c=s.argMax(e,t[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return be(c)}}},"ArgMax",a,i)}}),u0=T({argMin_:function(r,n){n===void 0&&(n=0);var e=_(r,"x","argMin");n==null&&(n=0);var t=He(n,e.shape),o=Kt(t,e.rank);return o!=null&&(e=e.transpose(o),t=Xt(t.length,e.rank)),F.runKernelFunc(function(a,i){var s=a.argMin(e,t[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return be(s)}}})}}),c0=T({logSumExp_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","logSumExp"),o=He(n,t.shape),a=t.max(o,!0),i=t.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=xt(s.shape,o);return s.reshape(u)}return s}}),Qn=T({max_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","max"),o=t,a=He(n,t.shape),i=a,s=Kt(i,t.rank);s!=null&&(t=t.transpose(s),i=Xt(i.length,t.rank));var u=[t],c=F.runKernelFunc(function(f,p){var h=f.max(t,i);return p([o,h]),h},{x:t},function(f,p){return Bf(f,p[1],p[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=xt(c.shape,a);c=c.reshape(l)}return c}}),l0=T({mean_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","mean"),o=He(n,t.shape),a=ne(rt(t.shape,o)[1]);return Va(function(i){var s=Y(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(n,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Tr(i.shape,"float32")).div(a)}}})(t)}}),f0=T({min_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","min"),o=t,a=He(n,t.shape),i=a,s=Kt(i,t.rank);s!=null&&(t=t.transpose(s),i=Xt(i.length,t.rank));var u=[t],c=F.runKernelFunc(function(f,p){var h=f.min(t,i);return p([o,h]),h},{x:t},function(f,p){return Bf(f,p[1],p[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=xt(c.shape,a);c=c.reshape(l)}return c}}),p0=T({moments_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=He(n,(r=_(r,"x","moments")).shape),o=r.mean(t,e),a=o.shape;e||(a=xt(o.shape,t));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(t,e)}}}),Lf=T({sum_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","sum");t.dtype==="bool"&&(t=t.toInt());var o=He(n,t.shape);return Va(function(a){var i=Kt(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=Xt(s.length,a.rank));var c=function(h){var d=a.shape.slice();return o.forEach(function(m){d[m]=1}),h.reshape(d).mul(Tr(a.shape,"float32"))},l={axes:s},f=F.runKernelFunc(function(h){return h.sum(u,s)},{x:u},function(h){return{x:function(){return c(h)}}},"Sum",l);if(e){var p=xt(f.shape,o);f=f.reshape(p)}return{value:f,gradFunc:c}})(t)}}),h0=T({prod_:function(r,n,e){n===void 0&&(n=null),e===void 0&&(e=!1);var t=_(r,"x","prod");t.dtype==="bool"&&(t=t.toInt());var o=He(n,t.shape),a=Kt(o,t.rank),i=o,s=t;a!=null&&(s=t.transpose(a),i=Xt(i.length,t.rank));var u=F.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=xt(u.shape,o);u=u.reshape(c)}return u}}),Wf=T({elu_:function(r){var n=_(r,"x","elu");return F.runKernelFunc(function(e,t){var o=e.elu(n);return t([o]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){return F.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),d0=T({leakyRelu_:function(r,n){n===void 0&&(n=.2);var e=_(r,"x","leakyRelu");return js(Y(n).mul(e),e)}}),zf=T({prelu_:function(r,n){var e=_(r,"x","prelu"),t=_(n,"alpha","prelu");return F.runKernelFunc(function(o,a){var i=o.prelu(e,t);return a([e,t]),i},{x:e,alpha:t},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return Yn(u,o,o.mul(s))},alpha:function(){var c=Yn(u,be(o),o.mul(i)),l=Ge(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),_e=T({relu_:function(r){var n=_(r,"x","relu");return n.dtype==="bool"?n.toInt():F.runKernelFunc(function(e,t){var o=e.relu(n);return t([n]),o},{x:n},function(e,t){var o=t[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),Vf=T({relu6_:function(r){var n=_(r,"x","relu6");return n.dtype==="bool"?n.toInt():F.runKernelFunc(function(e,t){var o=e.relu6(n);return t([n]),o},{x:n},function(e,t){var o=t[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),v0=T({selu_:function(r){var n=_(r,"x","selu");return F.runKernelFunc(function(e,t){var o=e.selu(n);return t([n]),o},{$x:n},function(e,t){var o=t[0];return{$x:function(){var a=o.greater(Y(0)),i=Y(Us),s=Y(Gs),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return Yn(a,u,c)}}})}}),zt=T({transpose_:function(r,n){var e=_(r,"x","transpose");if(n==null&&(n=e.shape.map(function(o,a){return a}).reverse()),E(e.rank===n.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+n+"."}),n.forEach(function(o){E(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+n})}),e.rank<=1)return e.clone();var t={perm:n};return F.runKernelFunc(function(o){return o.transpose(e,n)},{x:e},function(o){var a=Ba(n);return{x:function(){return o.transpose(a)}}},"Transpose",t)}}),m0=T({localResponseNormalization_:function(r,n,e,t,o){n===void 0&&(n=5),e===void 0&&(e=1),t===void 0&&(t=1),o===void 0&&(o=.5);var a=_(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),E(Le(n),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+n+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=F.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(i,n,e,t,o);return l([i,f]),f},{x4D:i},function(c,l){var f=l[0],p=l[1];return{x4D:function(){return F.runKernelFunc(function(h){return h.LRNGrad(c,f,p,n,e,t,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Uf=T({norm_:function(r,n,e,t){n===void 0&&(n="euclidean"),e===void 0&&(e=null),t===void 0&&(t=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(Y(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=_(r,"x","norm"),n,e),a=o.shape;if(t){var i=He(e,r.shape);a=xt(o.shape,i)}return o.reshape(a)}}),g0=T({basicLSTMCell_:function(r,n,e,t,o,a){var i=_(r,"forgetBias","basicLSTMCell"),s=_(n,"lstmKernel","basicLSTMCell"),u=_(e,"lstmBias","basicLSTMCell"),c=_(t,"data","basicLSTMCell"),l=_(o,"c","basicLSTMCell"),f=_(a,"h","basicLSTMCell"),p=c.concat(f,1).matMul(s).add(u),h=p.shape[0],d=p.shape[1]/4,m=[h,d],v=p.slice([0,0],m),g=p.slice([0,d],m),y=p.slice([0,2*d],m),b=p.slice([0,3*d],m),x=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())),w=x.tanh().mulStrict(b.sigmoid());return[x,w]}}),y0=T({multiRNNCell_:function(r,n,e,t){for(var o=_(n,"data","multiRNNCell"),a=Ia(e,"c","multiRNNCell"),i=Ia(t,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],p=[];for(c=0;c<u.length;c+=2)f.push(u[c]),p.push(u[c+1]);return[f,p]}}),x0=T({movingAverage_:function(r,n,e,t,o){o===void 0&&(o=!0);var a=_(r,"v","movingAverage"),i=_(n,"x","movingAverage"),s=_(e,"decay","movingAverage");Kc(a,i),E(Ue(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=Y(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(t!=null,function(){return"When using zeroDebias: true, step is required."});var f=_(t,"step","movingAverage");l=l.div(u.sub(Pa(s,f)))}return a.add(l)}}),b0=T({stridedSlice_:function(r,n,e,t,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),t==null&&(t=new Array(n.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=_(r,"x","stridedSlice"),l=hs(s),f=c.shape.slice();l.forEach(function(v){n[v]=0,e[v]=1,f.splice(v,0,1)}),c=c.reshape(f);for(var p=0;p<c.rank;p++)n[p]=Nl(o,n,t,c.shape,p),e[p]=Ml(a,e,t,c.shape,p),t[p]=t[p]||1;var h=hs(u);h.forEach(function(v){e[v]=n[v]+1,t[v]=1});var d=za(n,e,t),m=d.filter(function(v,g){return h.indexOf(g)===-1});return t.every(function(v){return v===1})?qt(c,n,d).reshape(m):F.runKernelFunc(function(v){return v.stridedSlice(c,n,e,t)},{$x:c}).reshape(m)}}),w0=T({topk_:function(r,n,e){n===void 0&&(n=1),e===void 0&&(e=!0);var t=_(r,"x","topk");if(t.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=t.shape[t.shape.length-1];if(n>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+n);var a=F.runKernelFunc(function(i){return i.topk(t,n,e)},{$x:t});return{values:a[0],indices:a[1]}}}),C0=T({scatterND_:function(r,n,e){var t=_(r,"indices","scatterND","int32"),o=_(n,"updates","scatterND");return Fl(o,t,e),F.runKernelFunc(function(a){return a.scatterND(t,o,e)},{indices:t,updates:o},null,"ScatterNd",{shape:e})}}),$s=T({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var n=r.shape[r.shape.length-1],e=r.size/n,t=r.as2D(e,n);return F.runKernelFunc(function(o){return o.fft(t)},{input:r}).reshape(r.shape)}}),Na=T({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var n=r.shape[r.shape.length-1],e=r.size/n,t=r.as2D(e,n);return F.runKernelFunc(function(o){return o.ifft(t)},{input:r}).reshape(r.shape)}}),Js=T({rfft_:function(r,n){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,t=r.shape[r.shape.length-1],o=r.size/t;if(n!=null&&n<t){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=n,e=r.slice(a,i),t=n}else if(n!=null&&n>t){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=n-t,e=r.concat(Pe(s),r.shape.length-1),t=n}else e=r;var u=e.zerosLike(),c=nt(e,u).as2D(o,t),l=$s(c),f=Math.floor(t/2)+1,p=Lt(l),h=tn(l),d=p.split([f,t-f],p.shape.length-1),m=h.split([f,t-f],h.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=f,nt(d[0],m[0]).reshape(v)}}),Gf=T({irfft_:function(r){var n=r.shape[r.shape.length-1],e=r.size/n;if(n<=2){var t=r.as2D(e,n),o=Na(t);return Lt(o)}var a=[e,2*(n-1)],i=Lt(r).as2D(e,n),s=tn(r).as2D(e,n),u=i.slice([0,1],[e,n-2]).reverse(1),c=s.slice([0,1],[e,n-2]).reverse(1).mul(Y(-1)),l=i.concat(u,1),f=s.concat(c,1);return t=nt(l,f).as2D(a[0],a[1]),o=Na(t),Lt(o)}}),_0=Object.freeze({fft:$s,ifft:Na,rfft:Js,irfft:Gf}),E0=T({sparseToDense_:function(r,n,e,t){t===void 0&&(t=0);var o=_(r,"sparseIndices","sparseToDense","int32"),a=_(n,"sparseValues","sparseToDense"),i=_(t,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,p=s.rank>1?s.shape[1]:1;if(c.length!==p)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+p+".");var h=u.size;if(u.rank!==0&&(u.rank!==1||h!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),F.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),k0=T({gatherND_:function(r,n){var e=_(n,"indices","gatherND","int32"),t=_(r,"x","gatherND");return F.runKernelFunc(function(o){return o.gatherND(t,e)},{x:t,indices:e},null,"GatherNd")}}),I0=T({diag_:function(r){var n=_(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return F.runKernelFunc(function(t){return t.diag(n)},{$x:n}).reshape(e)}}),R0=T({dropout_:function(r,n,e,t){var o=_(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(n>=0&&n<1,function(){return"rate must be a float in the range [0, 1), but got "+n+"."}),n===0)return r instanceof Te?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Ue(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),i=1-n,s=Il(a,0,1,"float32",t).add(i).floor().div(i);return o.mul(s)}});function Hf(r,n,e){for(var t=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+t-1);o[a]=n-e*Math.cos(i)}return Fe(o,"float32")}var Qs=T({hannWindow_:function(r){return Hf(r,.5,.5)}}),qf=T({hammingWindow_:function(r){return Hf(r,.54,.46)}}),Zs=T({frame_:function(r,n,e,t,o){t===void 0&&(t=!1),o===void 0&&(o=0);for(var a=0,i=[];a+n<=r.size;)i.push(qt(r,a,n)),a+=e;if(t)for(;a<r.size;){var s=a+n-r.size,u=Me([qt(r,a,n-s),Pt([s],o)]);i.push(u),a+=e}return i.length===0?nn([],[0,n]):Me(i).as2D(i.length,n)}}),jf=T({stft_:function(r,n,e,t,o){var a;o===void 0&&(o=Qs),t==null&&(a=n,t=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Zs(r,n,e),s=Be(i,o(n)),u=[],c=0;c<i.shape[0];c++)u.push(Js(s.slice([c,0],[1,n]),t));return Me(u)}}),S0=Object.freeze({hannWindow:Qs,hammingWindow:qf,frame:Zs,stft:jf}),ht,T0=function(r,n,e){return e===void 0&&(e=1),ee(this,void 0,void 0,function(){var t,o,a,i,s,u,c,l,f,p,h,d,m,v;return te(this,function(g){switch(g.label){case 0:return t=_(r,"predictions","inTopK"),o=_(n,"targets","inTopK"),E(t.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+t.rank}),E(t.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+t.rank+" and targets rank "+o.rank}),we(t.shape.slice(0,t.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=t.shape[t.shape.length-1],E(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,t.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],f=kr("bool",c=u[0]),p=0;p<c;p++){for(h=p*l,d=i.subarray(h,h+l),m=[],v=0;v<d.length;v++)m.push({value:d[v],index:v});for(m.sort(function(y,b){return b.value-y.value}),f[p]=0,v=0;v<e;v++)if(m[v].index===s[p]){f[p]=1;break}}return r!==t&&t.dispose(),n!==o&&o.dispose(),[2,Ye(f,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(ht||(ht={}));var D0=T({absoluteDifference_:function(r,n,e,t){t===void 0&&(t=ht.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","absoluteDifference"),a=_(n,"predictions","absoluteDifference"),i=null;e!=null&&(i=_(e,"weights","absoluteDifference")),we(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return xn(s,i,t)}}),xn=T({computeWeightedLoss_:function(r,n,e){e===void 0&&(e=ht.SUM_BY_NONZERO_WEIGHTS);var t=_(r,"losses","computeWeightedLoss"),o=null;n!=null&&(o=_(n,"weights","computeWeightedLoss"));var a=o==null?t:t.mul(o);if(e===ht.NONE)return a;if(e===ht.SUM)return a.sum();if(e===ht.MEAN){if(o==null)return a.mean();var i=t.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(Y(i)):s}if(e===ht.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(Y(t.size));var u=o.mul(Tr(t.shape)).notEqual(Y(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),A0=T({cosineDistance_:function(r,n,e,t,o){o===void 0&&(o=ht.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","cosineDistance"),i=_(n,"predictions","cosineDistance"),s=null;t!=null&&(s=_(t,"weights","cosineDistance")),we(a.shape,i.shape,"Error in cosineDistance: ");var u=Y(1).sub(a.mul(i).sum(e,!0));return xn(u,s,o)}}),F0=T({hingeLoss_:function(r,n,e,t){t===void 0&&(t=ht.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","hingeLoss"),a=_(n,"predictions","hingeLoss"),i=null;e!=null&&(i=_(e,"weights","hingeLoss")),we(o.shape,a.shape,"Error in hingeLoss: ");var s=Y(1);o=Y(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return xn(u,i,t)}}),P0=T({huberLoss_:function(r,n,e,t,o){t===void 0&&(t=1),o===void 0&&(o=ht.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","huberLoss"),i=_(n,"predictions","huberLoss"),s=null;e!=null&&(s=_(e,"weights","huberLoss")),we(a.shape,i.shape,"Error in huberLoss: ");var u=Y(t),c=i.sub(a).abs(),l=If(c,u),f=c.sub(l),p=Y(.5).mul(l.square()).add(u.mul(f));return xn(p,s,o)}}),N0=T({logLoss_:function(r,n,e,t,o){t===void 0&&(t=1e-7),o===void 0&&(o=ht.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","logLoss"),i=_(n,"predictions","logLoss"),s=null;e!=null&&(s=_(e,"weights","logLoss")),we(a.shape,i.shape,"Error in logLoss: ");var u=Y(1),c=Y(t),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return xn(l,s,o)}}),M0=T({meanSquaredError_:function(r,n,e,t){t===void 0&&(t=ht.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","meanSquaredError"),a=_(n,"predictions","meanSquaredError"),i=null;e!=null&&(i=_(e,"weights","meanSquaredError")),we(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return xn(s,i,t)}}),O0=T({sigmoidCrossEntropy_:function(r,n,e,t,o){t===void 0&&(t=0),o===void 0&&(o=ht.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"multiClassLabels","sigmoidCrossEntropy"),i=_(n,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","sigmoidCrossEntropy")),we(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),t>0){var u=Y(t),c=Y(1),l=Y(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var f=function(p,h){var d=_(p,"labels","sigmoidCrossEntropyWithLogits"),m=_(h,"logits","sigmoidCrossEntropyWithLogits");we(d.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(d),y=m.abs().neg().exp().log1p();return v.sub(g).add(y)}(a,i);return xn(f,s,o)}}),B0=T({softmaxCrossEntropy_:function(r,n,e,t,o){t===void 0&&(t=0),o===void 0&&(o=ht.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"onehotLabels","softmaxCrossEntropy"),i=_(n,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","softmaxCrossEntropy")),we(a.shape,i.shape,"Error in softmaxCrossEntropy: "),t>0){var u=Y(t),c=Y(1),l=Y(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var f=function(p,h,d){if(d===void 0&&(d=-1),d===-1&&(d=h.rank-1),d!==h.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+h.rank+" and dim was "+d);return Va(function(m,v,g){var y=v.logSumExp([d],!0),b=v.toFloat().sub(y);return g([m,b]),{value:b.mul(m).neg().sum([d]),gradFunc:function(x,w){var C=w[0],S=w[1],R=xt(x.shape,[d]);return[x.reshape(R).mul(C.toFloat().sub(S.exp())),x.reshape(R).mul(S.exp().sub(C.toFloat()))]}}})(p,h)}(a,i);return xn(f,s,o)}}),L0=Object.freeze({get Reduction(){return ht},absoluteDifference:D0,computeWeightedLoss:xn,cosineDistance:A0,hingeLoss:F0,huberLoss:P0,logLoss:N0,meanSquaredError:M0,sigmoidCrossEntropy:O0,softmaxCrossEntropy:B0});function xc(r,n){return n===void 0&&(n=!1),F.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],t=r.shape[1],o=kl(e),a=r.clone(),i=nn([[1]],[1,1]),s=i.clone(),u=e>=t?t:e,c=function(f){var p,h=a,d=s,m=o;p=F.tidy(function(){var v=a.slice([f,f],[e-f,1]),g=v.norm(),y=a.slice([f,f],[1,1]),b=nn([[-1]]).where(y.greater(0),nn([[1]])),x=y.sub(b.mul(g)),w=v.div(x);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=b.matMul(x).div(g).neg(),S=a.slice([f,0],[e-f,t]),R=C.mul(s);if(f===0)a=S.sub(R.matMul(s.transpose().matMul(S)));else{var k=S.sub(R.matMul(s.transpose().matMul(S)));a=a.slice([0,0],[f,t]).concat(k,0)}var I=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=I.sub(I.matMul(s).matMul(R.transpose()));else{var A=I.sub(I.matMul(s).matMul(R.transpose()));o=o.slice([0,0],[e,f]).concat(A,1)}return[s,a,o]}),s=p[0],a=p[1],o=p[2],Rt([h,d,m])},l=0;l<u;++l)c(l);return!n&&e>t&&(o=o.slice([0,0],[e,t]),a=a.slice([0,0],[t,t])),[o,a]})}var W0=T({bandPart_:function(r,n,e){if(n%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+n+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var t=_(r,"a","bandPart");if(t.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+t.rank+".");var o=t.shape,a=t.shape.slice(-2),i=a[0],s=a[1];if(!(n<=i))throw new Error("bandPart(): numLower ("+n+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");n<0&&(n=i),e<0&&(e=s);var u=Ra(0,i,1,"int32").reshape([-1,1]),c=Ra(0,s,1,"int32"),l=De(u,c),f=qa(l.lessEqual(Y(+n,"int32")),l.greaterEqual(Y(-e,"int32"))),p=Pe([i,s],t.dtype);return at(Ie(t.reshape([-1,i,s])).map(function(h){return Yn(f,h,p)})).reshape(o)}}),z0=T({gramSchmidt_:function(r){var n;if(Array.isArray(r)){n=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],t=function(u){E(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)t(o)}else n=!0,r=Ts(r,r.shape[0],0).map(function(u){return Sl(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(F.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var f=Lf(a[l].mulStrict(c)).mul(a[l]);c=c.sub(f)}return c.div(Uf(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return n?at(a,0):a}}),V0=T({qr_:function(r,n){if(n===void 0&&(n=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return xc(r,n);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),t=Ie(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return t.forEach(function(i){var s=xc(i,n),u=s[0],c=s[1];o.push(u),a.push(c)}),[at(o,0).reshape(r.shape),at(a,0).reshape(r.shape)]}}),U0=Object.freeze({bandPart:W0,gramSchmidt:z0,qr:V0});function ja(r,n,e,t,o,a){t==null&&(t=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),E(0<=t&&t<=1,function(){return"iouThreshold must be in [0, 1], but was '"+t+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(n.rank===1,function(){return"scores must be a 1D tensor"}),E(n.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+n.shape[0]}),E(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:t,scoreThreshold:o,softNmsSigma:a}}var G0=T({resizeBilinear_:function(r,n,e){e===void 0&&(e=!1);var t=_(r,"images","resizeBilinear");E(t.rank===3||t.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+t.rank+"."}),E(n.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+n+"."});var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=n[0],s=n[1],u=F.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return F.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),H0=T({resizeNearestNeighbor_:function(r,n,e){e===void 0&&(e=!1);var t=_(r,"images","resizeNearestNeighbor");E(t.rank===3||t.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+t.rank+"."}),E(n.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+n+"."}),E(t.dtype==="float32"||t.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=n[0],s=n[1],u=F.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return F.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),q0=T({nonMaxSuppression_:function(r,n,e,t,o){t===void 0&&(t=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=_(r,"boxes","nonMaxSuppression"),i=_(n,"scores","nonMaxSuppression"),s=ja(a,i,e,t,o);e=s.maxOutputSize,t=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:t,scoreThreshold:o};return F.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,t,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),j0=function(r,n,e,t,o){return t===void 0&&(t=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),ee(this,void 0,void 0,function(){var a,i,s,u,c,l,f;return te(this,function(p){switch(p.label){case 0:return a=_(r,"boxes","nonMaxSuppressionAsync"),i=_(n,"scores","nonMaxSuppressionAsync"),s=ja(a,i,e,t,o),e=s.maxOutputSize,t=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=p.sent(),c=u[0],l=u[1],f=Ls(c,l,e,t,o),a!==r&&a.dispose(),i!==n&&i.dispose(),[2,f]}})})},K0=T({nonMaxSuppressionWithScore_:function(r,n,e,t,o,a){t===void 0&&(t=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=_(r,"boxes","nonMaxSuppression"),s=_(n,"scores","nonMaxSuppression"),u=ja(i,s,e,t,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:t=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=F.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),X0=function(r,n,e,t,o,a){return t===void 0&&(t=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),ee(this,void 0,void 0,function(){var i,s,u,c,l,f,p;return te(this,function(h){switch(h.label){case 0:return i=_(r,"boxes","nonMaxSuppressionAsync"),s=_(n,"scores","nonMaxSuppressionAsync"),u=ja(i,s,e,t,o,a),e=u.maxOutputSize,t=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=h.sent(),l=c[0],f=c[1],p=Ws(l,f,e,t,o,a),i!==r&&i.dispose(),s!==n&&s.dispose(),[2,p]}})})},Y0=T({cropAndResize_:function(r,n,e,t,o,a){var i=_(r,"image","cropAndResize"),s=_(n,"boxes","cropAndResize","float32"),u=_(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(t.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+t.length+"."}),E(t[0]>=1&&t[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+t}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),F.runKernelFunc(function(l,f){return l.cropAndResize(i,s,u,t,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:t})}}),Ro=Object.freeze({resizeBilinear:G0,resizeNearestNeighbor:H0,nonMaxSuppression:q0,nonMaxSuppressionAsync:j0,nonMaxSuppressionWithScore:K0,nonMaxSuppressionWithScoreAsync:X0,cropAndResize:Y0}),eu=function(r,n){return!(r>0)||n==="linear"},tu=function(r,n,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(n.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},nu=function(r,n){var e=n,t=Ge(r.shape,n.shape);return t.length>0&&(e=e.sum(t)),e.reshape(r.shape)},ru=function(r,n,e){if(n==="linear")return r;if(n==="relu")return _e(r);if(n==="elu")return Wf(r);if(n==="relu6")return Vf(r);if(n==="prelu")return zf(r,e);throw new Error("Unknown fused activation "+n+".")},$0=T({fusedMatMul_:function(r){var n,e=r.a,t=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,f=r.preluActivationWeights;if(eu(F.state.gradientDepth,l)===!1){var p=Dr(e,t,a,s);return u!=null&&(p=ae(p,u)),ru(p,l,f)}var h=_(e,"a","fused matMul"),d=_(t,"b","fused matMul");n=Oe(h,d),h=n[0],d=n[1];var m=a?h.shape[h.rank-2]:h.shape[h.rank-1],v=s?d.shape[d.rank-1]:d.shape[d.rank-2],g=a?h.shape[h.rank-1]:h.shape[h.rank-2],y=s?d.shape[d.rank-2]:d.shape[d.rank-1],b=h.shape.slice(0,-2),x=d.shape.slice(0,-2),w=ne(b),C=ne(x);E(h.rank>=2&&d.rank>=2&&h.rank===d.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+h.rank+" and "+d.rank+"."}),E(Ue(b,x),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+x+") of Tensors with shapes "+h.shape+" and "+d.shape+" must match."}),E(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+h.shape+" and "+d.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var S,R,k=h.shape.slice(0,-2).concat([g,y]),I=a?h.as3D(w,m,g):h.as3D(w,g,m),A=s?d.as3D(C,y,v):d.as3D(C,v,y);u!=null&&ge(k,(S=Oe(S=_(u,"bias","fused matMul"),h)[0]).shape),f!=null&&(R=_(f,"prelu weights","fused matMul"));var D={a:I,b:A};u!=null&&(D.bias=S),f!=null&&(D.preluActivationWeights=R);var B=[I,A];return F.runKernelFunc(function(M,N){var U=M.fusedBatchMatMul({a:I,b:A,transposeA:a,transposeB:s,bias:S,activation:l,preluActivationWeights:R});return N([I,A,U]),U},D,function(M,N){var U=N[0],W=N[1],L=N[2],V=tu(M,L,l),G={};return u!=null&&(G={bias:function(){return nu(S,V)}}),Object.assign(a||s?!a&&s?{a:function(){return V.matMul(W,!1,!1)},b:function(){return V.matMul(U,!0,!1)}}:a&&!s?{a:function(){return W.matMul(V,!1,!0)},b:function(){return U.matMul(V,!1,!1)}}:{a:function(){return W.matMul(V,!0,!0)},b:function(){return V.matMul(U,!0,!0)}}:{a:function(){return V.matMul(W,!1,!0)},b:function(){return U.matMul(V,!0,!1)}},G)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},B,[!0]).reshape(k)}}),J0=T({fusedConv2d_:function(r){var n=r.x,e=r.filter,t=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,p=f===void 0?"linear":f,h=r.preluActivationWeights;if(p=p||"linear",eu(F.state.gradientDepth,p)===!1){var d=$e(n,e,t,o,i,u,c);return l!=null&&(d=ae(d,l)),ru(d,p,h)}var m=_(n,"x","conv2d"),v=_(e,"filter","conv2d"),g=m,y=!1;m.rank===3&&(y=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(Le(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(bt(t,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,x,w=Fn(g.shape,v.shape,t,u,o,c);l!=null&&(b=Oe(b=_(l,"bias","fused conv2d"),m)[0],ge(w.outShape,b.shape)),h!=null&&(x=_(h,"prelu weights","fused conv2d"));var C={x:g,filter:v};l!=null&&(C.bias=b),h!=null&&(C.preluActivationWeights=x);var S=[v,g],R=F.runKernelFunc(function(k,I){var A=k.fusedConv2d({input:g,filter:v,convInfo:w,bias:b,activation:p,preluActivationWeights:x});return I([v,g,A]),A},C,function(k,I){var A=I,D=A[0],B=A[1],M=A[2],N=tu(k,M,p);E(Xn(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var U={};return l!=null&&(U={bias:function(){return nu(b,N)}}),Object.assign({x:function(){return Ff(B.shape,N,D,t,o)},filter:function(){return Xs(B,N,D.shape,t,o)}},U)},"FusedConv2D",{convInfo:w,activation:p},S,[!0]);return y?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),Q0=T({fusedDepthwiseConv2d_:function(r){var n=r.x,e=r.filter,t=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,p=f===void 0?"linear":f,h=r.preluActivationWeights;if(eu(F.state.gradientDepth,p)===!1){var d=Eo(n,e,t,o,i,u,c);return l!=null&&(d=ae(d,l)),ru(d,p,h)}var m=_(n,"x","depthwiseConv2d"),v=_(e,"filter","depthwiseConv2d"),g=m,y=!1;m.rank===3&&(y=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(bt(t,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+u+"'"}),c!=null&&E(Le(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,x,w=Fn(g.shape,v.shape,t,u,o,c,!0);l!=null&&(b=Oe(b=_(l,"bias","fused conv2d"),m)[0],ge(w.outShape,b.shape)),h!=null&&(x=_(h,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:v};l!=null&&(C.bias=b),h!=null&&(C.preluActivationWeights=x);var S=[v,g],R=F.runKernelFunc(function(k,I){var A=k.fusedDepthwiseConv2D({input:g,filter:v,convInfo:w,bias:b,activation:p,preluActivationWeights:x});return I([v,g,A]),A},C,function(k,I){E(Xn(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var A=I[0],D=I[1],B=I[2],M=tu(k,B,p),N={};return l!=null&&(N={bias:function(){return nu(b,M)}}),Object.assign({x:function(){return Pf(D.shape,M,A,w)},filter:function(){return Nf(D,M,A.shape,w)}},N)},"FusedDepthwiseConv2D",{convInfo:w,activation:p},S,[!0]);return y?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),Z0=Object.freeze({matMul:$0,conv2d:J0,depthwiseConv2d:Q0}),e1=Object.freeze({image:Ro,linalg:U0,losses:L0,spectral:_0,fused:Z0,signal:S0,square:Nm,squaredDifference:yf,conv1d:Gg,conv2d:$e,conv3d:Hg,depthwiseConv2d:Eo,separableConv2d:ko,conv2dTranspose:qg,conv3dTranspose:jg,op:T,batchNormalization2d:lg,batchNormalization3d:fg,batchNormalization4d:pg,batchNormalization:hg,batchNorm:qs,batchNorm2d:dg,batchNorm3d:vg,batchNorm4d:mg,booleanMaskAsync:Ug,complex:nt,real:Lt,imag:tn,concat:Me,concat1d:wd,concat2d:Cd,concat3d:_d,concat4d:Ed,split:Ts,matMul:Dr,dot:Kg,outerProduct:Xg,reverse:Io,reverse1d:Yg,reverse2d:$g,reverse3d:Jg,reverse4d:Qg,maxPool:We,avgPool:yn,pool:Zg,maxPool3d:e0,avgPool3d:t0,slice:qt,slice1d:n0,slice2d:r0,slice3d:Ys,slice4d:o0,abs:Mm,acos:Om,acosh:Bm,asin:Lm,asinh:Wm,atan:zm,atanh:Vm,ceil:Um,clipByValue:wo,cos:Gm,cosh:Hm,erf:qm,exp:Ga,expm1:jm,floor:Km,log:Xm,log1p:Ym,logSigmoid:$m,neg:Co,reciprocal:Jm,round:Qm,rsqrt:xf,sigmoid:Hs,sign:Zm,isNaN:eg,isInf:tg,isFinite:ng,sin:rg,sinh:og,softplus:ag,sqrt:ig,step:sg,tan:ug,tanh:cg,all:a0,any:i0,argMax:s0,argMin:u0,logSumExp:c0,max:Qn,mean:l0,min:f0,moments:p0,sum:Lf,prod:h0,equal:Rf,equalStrict:Fg,greater:Pg,greaterEqual:Sf,greaterEqualStrict:Ng,greaterStrict:Mg,less:Og,lessEqual:Bg,lessEqualStrict:Lg,lessStrict:Wg,notEqual:zg,notEqualStrict:Vg,add:ae,addN:xg,addStrict:bg,atan2:wg,div:Wt,divNoNan:Cg,divStrict:_g,floorDiv:kf,maximum:js,maximumStrict:Eg,minimum:If,minimumStrict:kg,mod:Ig,modStrict:Rg,mul:Be,mulStrict:Sg,pow:Pa,powStrict:Tg,squaredDifferenceStrict:Dg,sub:De,subStrict:Ag,elu:Wf,leakyRelu:d0,prelu:zf,relu:_e,relu6:Vf,selu:v0,logicalAnd:qa,logicalNot:gg,logicalOr:_f,logicalXor:yg,where:Yn,whereAsync:Ef,buffer:le,print:Pd,batchToSpaceND:El,broadcastTo:Nd,cast:Md,clone:Od,cumsum:Bd,depthToSpace:Ld,expandDims:ft,eye:kl,multinomial:Wd,oneHot:ps,pad:gn,pad1d:zd,pad2d:Vd,pad3d:Ud,pad4d:Gd,rand:Hd,randomNormal:qd,randomGamma:jd,randomUniform:Il,reshape:wt,spaceToBatchND:Rl,squeeze:Sl,stack:at,tile:qn,truncatedNormal:Kd,unstack:Ie,setdiff1dAsync:Xd,fill:Pt,linspace:bd,ones:Tr,range:Ra,scalar:Y,tensor:Ye,tensor1d:Fe,tensor2d:nn,tensor3d:La,tensor4d:je,tensor5d:gd,tensor6d:yd,variable:xd,zeros:Pe,onesLike:_l,zerosLike:be,transpose:zt,softmax:Ct,logSoftmax:$d,localResponseNormalization:m0,norm:Uf,gather:Ks,unsortedSegmentSum:Tf,basicLSTMCell:g0,multiRNNCell:y0,movingAverage:x0,stridedSlice:b0,topk:w0,scatterND:C0,fft:$s,ifft:Na,rfft:Js,irfft:Gf,sparseToDense:E0,gatherND:k0,diag:I0,dropout:R0,hannWindow:Qs,hammingWindow:qf,frame:Zs,stft:jf,inTopKAsync:T0});function H(r,n){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return n+" does not support complex64 tensors."})})}function Hi(r,n,e,t){if(e==="linear")return r.linear(n);if(e==="relu")return r.relu(n);if(e==="elu")return r.elu(n);if(e==="relu6")return r.relu6(n);if(e==="prelu")return r.prelu(n,t);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var t1=function(r){function n(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new Ol(e,F),e}return jt(n,r),n.prototype.write=function(e,t,o){this.firstUse&&(this.firstUse=!1,z().get("IS_NODE")&&ka(`
============================
Hi there \u{1F44B}. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},n.prototype.move=function(e,t,o,a){this.data.set(e,{values:t,dtype:a})},n.prototype.numDataIds=function(){return this.data.numDataIds()},n.prototype.read=function(e){return ee(this,void 0,void 0,function(){return te(this,function(t){return[2,this.readSync(e)]})})},n.prototype.readSync=function(e){var t=this.data.get(e),o=t.dtype,a=t.complexTensors;return o==="complex64"?vs(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},n.prototype.bufferSync=function(e){var t=this.readSync(e.dataId),o=t;if(e.dtype==="string")try{o=t.map(function(a){return co(a)})}catch(a){throw new Error("Failed to decode encoded string bytes into utf-8")}return le(e.shape,e.dtype,o)},n.prototype.makeOutput=function(e,t,o){var a=this.write(e,t,o);return F.makeTensorFromDataId(a,t,o,this)},n.prototype.disposeData=function(e){if(this.data.has(e)){var t=this.data.get(e).complexTensors;t!=null&&(t.real.dispose(),t.imag.dispose()),this.data.delete(e)}},n.prototype.time=function(e){return ee(this,void 0,void 0,function(){var t;return te(this,function(o){return t=Gt(),e(),[2,{kernelMs:Gt()-t}]})})},n.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},n.prototype.complex=function(e,t){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:F.keep(e.clone()),imag:F.keep(t.clone())},o},n.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},n.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},n.prototype.slice=function(e,t,o){if(H(e,"slice"),Ps(e.shape,t,o)){var a=Ns(t,e.strides),i=ne(o);return Ye(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=le(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,p){return f+t[p]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},n.prototype.stridedSlice=function(e,t,o,a){H(e,"stridedSlice");var i=za(t,o,a);if(i.some(function(h){return h===0}))return Ye([],i);for(var s=le(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),p=0;p<f.length;p++)f[p]=l[p]*a[p]+t[p];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},n.prototype.diag=function(e){for(var t=this.readSync(e.dataId),o=le([e.size,e.size],e.dtype),a=o.values,i=0;i<t.length;i++)a[i*e.size+i]=t[i];return o.toTensor()},n.prototype.unstack=function(e,t){for(var o=e.shape[t],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==t&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[t]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[t]=s,l[s]=this.slice(e,u,c).reshape(a);return l},n.prototype.reverse=function(e,t){H(e,"reverse");for(var o=le(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();t.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},n.prototype.concat=function(e,t){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(h){return Lt(h)}),i=e.map(function(h){return tn(h)});return nt(this.concat(a,t),this.concat(i,t))}var s=e.map(function(h){var d=ne(h.shape.slice(t));return h.as2D(-1,d)}),u=Kn(s.map(function(h){return h.shape}),1),c=le(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(h){c.set(o.readSync(h.dataId),l),l+=h.size})}else{var f=0;s.forEach(function(h){for(var d=o.readSync(h.dataId),m=0,v=0;v<h.shape[0];++v)for(var g=v*u[1]+f,y=0;y<h.shape[1];++y)c[g+y]=d[m++];f+=h.shape[1]})}var p=Kn(e.map(function(h){return h.shape}),t);return Ye(c,p,e[0].dtype)},n.prototype.neg=function(e){return H(e,"neg"),this.multiply(Y(-1),e)},n.prototype.add=function(e,t){return e.dtype==="complex64"||t.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,t,Xe(e.dtype,t.dtype),function(o,a){return o+a})},n.prototype.addN=function(e){var t=this;H(e,"addN");for(var o=e.map(function(l){return t.readSync(l.dataId)}),a=le(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},n.prototype.softmax=function(e,t){var o=He([t],e.shape),a=this.max(e,o),i=xt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},n.prototype.subtract=function(e,t){return e.dtype==="complex64"||t.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,t,Xe(e.dtype,t.dtype),function(o,a){return o-a})},n.prototype.pow=function(e,t){return H([e,t],"pow"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return Math.pow(o,a)})},n.prototype.batchMatMul=function(e,t,o,a){H([e,t],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?t.shape[1]:t.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(t.dataId),p=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],h=p[0],d=p[1],m=p[2],v=a?[1,t.strides[1],t.strides[0]]:[t.strides[1],1,t.strides[0]],g=v[0],y=v[1],b=v[2],x=s*u,w=le([c,s,u],e.dtype),C=w.values,S=this.blockSize,R=0;R<c;R++)for(var k=0;k<s;k+=S)for(var I=0;I<u;I+=S)for(var A=0;A<i;A+=S)for(var D=Math.min(k+S,s),B=Math.min(I+S,u),M=Math.min(A+S,i),N=k;N<D;N++)for(var U=I;U<B;U++){for(var W=0,L=A;L<M;L++)W+=l[R*h+N*d+L*m]*f[L*g+U*y+R*b];C[R*x+(N*u+U)]+=W}return w.toTensor()},n.prototype.fusedBatchMatMul=function(e){var t=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(t,o,a,i);return s&&(l=this.add(l,s)),u&&(l=Hi(this,l,u,c)),l},n.prototype.multiply=function(e,t){return e.dtype==="complex64"||t.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),t.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,t,Xe(e.dtype,t.dtype),function(o,a){return o*a})},n.prototype.realDivide=function(e,t){return H([e,t],"realDivide"),this.broadcastedBinaryOp(e,t,"float32",function(o,a){return o/a})},n.prototype.floorDiv=function(e,t){return H([e,t],"floorDiv"),this.broadcastedBinaryOp(e,t,"int32",function(o,a){return Math.floor(o/a)})},n.prototype.sum=function(e,t){H(e,"sum"),kt("sum",t,e.rank);for(var o=rt(e.shape,t),a=o[0],i=o[1],s=Pe(a,Xe(e.dtype,"int32")),u=ne(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=0,d=0;d<u;++d)h+=l[p+d];c[f]=h}return s},n.prototype.prod=function(e,t){H(e,"sum");for(var o=rt(e.shape,t),a=o[0],i=o[1],s=Pe(a,Xe(e.dtype,"int32")),u=ne(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=1,d=0;d<u;++d)h*=l[p+d];c[f]=h}return s},n.prototype.unsortedSegmentSum=function(e,t,o){H(e,"unsortedSegmentSum");for(var a=[],i=e.rank-t.rank,s=0;s<i;++s)t=t.expandDims(s+1);for(s=0;s<o;++s){var u=Y(s,"int32"),c=Rf(u,t).asType("float32").mul(e).sum(0);a.push(c)}return at(a)},n.prototype.argMin=function(e,t){H(e,"argMin");var o=[t];kt("argMin",o,e.rank);for(var a=rt(e.shape,o),i=a[0],s=a[1],u=Pe(i,"int32"),c=ne(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),p=0;p<l.length;++p){for(var h=p*c,d=f[h],m=0,v=0;v<c;++v){var g=f[h+v];g<d&&(d=g,m=v)}l[p]=m}return u},n.prototype.argMax=function(e,t){H(e,"argMax");var o=[t];kt("argMax",o,e.rank);for(var a=rt(e.shape,o),i=a[0],s=a[1],u=Pe(i,"int32"),c=ne(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),p=0;p<l.length;++p){for(var h=p*c,d=f[h],m=0,v=0;v<c;++v){var g=f[h+v];g>d&&(d=g,m=v)}l[p]=m}return u},n.prototype.cumsum=function(e,t,o,a){if(H(e,"cumsum"),t!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+t);for(var i=Xe(e.dtype,"int32"),s=Pe(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=a?function(v,g){return v+l-g-1}:function(v,g){return v+g},p=0;p<c.length;p+=l)for(var h=0;h<l;h++){var d=f(p,h);if(h===0)u[d]=o?0:c[d];else{var m=f(p,h-1);u[d]=o?c[m]+u[m]:c[d]+u[m]}}return s},n.prototype.equal=function(e,t){return H([e,t],"equal"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o===a?1:0})},n.prototype.notEqual=function(e,t){return H([e,t],"notEqual"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o!==a?1:0})},n.prototype.less=function(e,t){return H([e,t],"less"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o<a?1:0})},n.prototype.lessEqual=function(e,t){return H([e,t],"lessEqual"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o<=a?1:0})},n.prototype.greater=function(e,t){return H([e,t],"greater"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o>a?1:0})},n.prototype.greaterEqual=function(e,t){return H([e,t],"greaterEqual"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o>=a?1:0})},n.prototype.logicalNot=function(e){H(e,"logicalNot");for(var t=this.readSync(e.dataId),o=new Uint8Array(t.length),a=0;a<t.length;++a)o[a]=t[a]?0:1;return this.makeOutput(o,e.shape,"bool")},n.prototype.logicalAnd=function(e,t){return H([e,t],"logicalAnd"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o&&a})},n.prototype.logicalOr=function(e,t){return H([e,t],"logicalOr"),this.broadcastedBinaryOp(e,t,"bool",function(o,a){return o||a})},n.prototype.select=function(e,t,o){H([e,t,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(t.dataId),s=this.readSync(o.dataId),u=Pe(t.shape,Xe(t.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||t.rank===1?1:ne(t.shape.slice(1)),p=0;p<a.length;p++)for(var h=0;h<f;h++)a[p]===1?c[l++]=i[p]:c[l++]=s[p];return u},n.prototype.where=function(e){H([e],"where");var t=this.readSync(e.dataId);return zs(e.shape,t)},n.prototype.topk=function(e,t,o){return H(e,"topk"),Vl(this.readSync(e.dataId),e.shape,e.dtype,t)},n.prototype.min=function(e,t){H(e,"min"),kt("min",t,e.rank);for(var o=rt(e.shape,t),a=o[0],i=o[1],s=Pe(a,e.dtype),u=ne(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=l[p],d=0;d<u;++d){var m=l[p+d];m<h&&(h=m)}c[f]=h}return s},n.prototype.minimum=function(e,t){return H([e,t],"minimum"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return Math.min(o,a)})},n.prototype.mod=function(e,t){return H([e,t],"mod"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},n.prototype.max=function(e,t){H(e,"max"),kt("max",t,e.rank);for(var o=rt(e.shape,t),a=o[0],i=o[1],s=Pe(a,e.dtype),u=ne(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=l[p],d=0;d<u;++d){var m=l[p+d];m>h&&(h=m)}c[f]=h}return s},n.prototype.maximum=function(e,t){return H([e,t],"maximum"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return Math.max(o,a)})},n.prototype.all=function(e,t){H(e,"all"),kt("all",t,e.rank);for(var o=rt(e.shape,t),a=o[0],i=o[1],s=Pe(a,e.dtype),u=ne(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=l[p],d=0;d<u;++d){var m=l[p+d];h=h&&m}c[f]=h}return s},n.prototype.any=function(e,t){H(e,"any"),kt("any",t,e.rank);for(var o=rt(e.shape,t),a=o[0],i=o[1],s=Pe(a,e.dtype),u=ne(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=l[p],d=0;d<u;++d){var m=l[p+d];h=h||m}c[f]=h}return s},n.prototype.squaredDifference=function(e,t){return H([e,t],"squaredDifference"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){var i=o-a;return i*i})},n.prototype.ceil=function(e){H(e,"ceil");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=Math.ceil(t[a]);return this.makeOutput(o,e.shape,"float32")},n.prototype.floor=function(e){H(e,"floor");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=Math.floor(t[a]);return this.makeOutput(o,e.shape,"float32")},n.prototype.sign=function(e){H(e,"x");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)t[a]<0?o[a]=-1:t[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},n.prototype.isNaN=function(e){H(e,"x");for(var t=this.readSync(e.dataId),o=new Uint8Array(t.length),a=0;a<t.length;++a)Number.isNaN(t[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},n.prototype.isInf=function(e){H(e,"x");for(var t=this.readSync(e.dataId),o=new Uint8Array(t.length),a=0;a<t.length;++a)Math.abs(t[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},n.prototype.isFinite=function(e){H(e,"x");for(var t=this.readSync(e.dataId),o=new Uint8Array(t.length),a=0;a<t.length;++a)Number.isFinite(t[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},n.prototype.round=function(e){H(e,"round");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=Math.floor(t[a]);t[a]-i<.5?o[a]=Math.floor(t[a]):t[a]-i>.5?o[a]=Math.ceil(t[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},n.prototype.exp=function(e){H(e,"exp");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=Math.exp(t[a]);return this.makeOutput(o,e.shape,"float32")},n.prototype.expm1=function(e){H(e,"expm1");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=Math.expm1(t[a]);return this.makeOutput(o,e.shape,"float32")},n.prototype.log=function(e){H(e,"log");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=t[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},n.prototype.log1p=function(e){H(e,"log1p");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=t[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},n.prototype.sqrt=function(e){H(e,"sqrt");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=t[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},n.prototype.rsqrt=function(e){H(e,"rsqrt");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a){var i=t[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},n.prototype.reciprocal=function(e){H(e,"reciprocal");for(var t=this.readSync(e.dataId),o=new Float32Array(t.length),a=0;a<t.length;++a)o[a]=1/t[a];return this.makeOutput(o,e.shape,"float32")},n.prototype.linear=function(e){return e},n.prototype.relu=function(e){H(e,"relu");for(var t=Pe(e.shape,e.dtype),o=this.readSync(t.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return t},n.prototype.relu6=function(e){H(e,"relu");for(var t=Pe(e.shape,e.dtype),o=this.readSync(t.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return t},n.prototype.prelu=function(e,t){return H([e,t],"prelu"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return o<0?a*o:o})},n.prototype.elu=function(e){H(e,"elu");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];t[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(t,e.shape,"float32")},n.prototype.eluDer=function(e,t){H([e,t],"eluDer");for(var o=new Float32Array(t.size),a=this.readSync(t.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,t.shape,"float32")},n.prototype.selu=function(e){H(e,"selu");for(var t=Us,o=Gs,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:t*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},n.prototype.clip=function(e,t,o){H(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<t?t:u}return this.makeOutput(a,e.shape,"float32")},n.prototype.abs=function(e){for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.abs(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.complexAbs=function(e){for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];t[a]=Math.hypot(i,s)}return this.makeOutput(t,e.shape,"float32")},n.prototype.int=function(e){H(e,"int");for(var t=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=o[a];return this.makeOutput(t,e.shape,"int32")},n.prototype.sigmoid=function(e){H(e,"sigmoid");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(t,e.shape,"float32")},n.prototype.softplus=function(e){H(e,"softplus");for(var t=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-t,u=a[i]<t,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},n.prototype.sin=function(e){H(e,"sin");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.sin(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.cos=function(e){H(e,"cos");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.cos(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.tan=function(e){H(e,"tan");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.tan(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.asin=function(e){H(e,"asin");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.asin(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.acos=function(e){H(e,"acos");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.acos(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.atan=function(e){H(e,"atan");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.atan(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.atan2=function(e,t){return H([e,t],"atan2"),this.broadcastedBinaryOp(e,t,e.dtype,function(o,a){return Math.atan2(o,a)})},n.prototype.sinh=function(e){H(e,"sinh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.sinh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.cosh=function(e){H(e,"cosh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.cosh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.tanh=function(e){H(e,"tanh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Mc(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.asinh=function(e){H(e,"asinh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.asinh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.acosh=function(e){H(e,"acosh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.acosh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.atanh=function(e){H(e,"atanh");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)t[a]=Math.atanh(o[a]);return this.makeOutput(t,e.shape,"float32")},n.prototype.erf=function(e){H(e,"erf");for(var t=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);t[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(t,e.shape,"float32")},n.prototype.step=function(e,t){t===void 0&&(t=0),H(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:t}return this.makeOutput(o,e.shape,"float32")},n.prototype.fusedConv2d=function(e){var t=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(t,o,a);return i&&(c=this.add(c,i)),s&&(c=Hi(this,c,s,u)),c},n.prototype.conv2d=function(e,t,o){H([e,t],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",p=le(o.outShape,e.dtype),h=e.strides[0],d=f?e.strides[1]:e.strides[2],m=f?e.strides[2]:1,v=f?1:e.strides[1],g=p.strides[0],y=f?p.strides[1]:p.strides[2],b=f?p.strides[2]:1,x=f?1:p.strides[1],w=this.readSync(e.dataId),C=this.readSync(t.dataId),S=p.values,R=0;R<o.batchSize;++R)for(var k=R*h,I=R*g,A=0;A<o.outHeight;++A)for(var D=I+A*y,B=A*o.strideHeight-l,M=0;M<a;M++){var N=B+M*s;if(!(N<0||N>=o.inHeight))for(var U=M*t.strides[0],W=k+N*d,L=0;L<o.outWidth;++L)for(var V=D+L*b,G=L*o.strideWidth-c,X=0;X<i;X++){var J=G+X*u;if(!(J<0||J>=o.inWidth))for(var Q=W+J*m,oe=U+X*t.strides[1],ie=0;ie<o.inChannels;++ie){for(var ue=w[Q+ie*v],fe=0;fe<o.outChannels;++fe)S[V+fe*x]+=ue*C[oe+fe];oe+=o.outChannels}}}return p.toTensor()},n.prototype.conv3d=function(e,t,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,p=o.padInfo.left,h=o.padInfo.top,d=le(o.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(t.dataId),g=d.values,y=0;y<o.batchSize;++y)for(var b=y*e.strides[0],x=y*d.strides[0],w=0;w<o.outDepth;++w)for(var C=x+w*d.strides[1],S=w*o.strideDepth-f,R=0;R<a;R++){var k=S+R*u;if(!(k<0||k>=o.inDepth))for(var I=R*t.strides[0],A=b+k*e.strides[1],D=0;D<o.outHeight;++D)for(var B=C+D*d.strides[2],M=D*o.strideHeight-h,N=0;N<i;N++){var U=M+N*c;if(!(U<0||U>=o.inHeight))for(var W=I+N*t.strides[1],L=A+U*e.strides[2],V=0;V<o.outWidth;++V)for(var G=B+V*o.outChannels,X=V*o.strideWidth-p,J=0;J<s;J++){var Q=X+J*l;if(!(Q<0||Q>=o.inWidth))for(var oe=W+J*t.strides[2],ie=L+Q*o.inChannels,ue=oe,fe=0;fe<o.inChannels;++fe){for(var ce=m[ie+fe],me=0;me<o.outChannels;++me)g[G+me]+=ce*v[ue+me];ue+=o.outChannels}}}}return d.toTensor()},n.prototype.conv2dDerInput=function(e,t,o){H([e,t],"conv2dDerInput");for(var a=le(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(t.dataId),c=t.strides,l=c[0],f=c[1],p=c[2],h=o.batchSize,d=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,y=o.inWidth,b=o.outChannels,x=o.outHeight,w=o.outWidth,C=o.strideHeight,S=o.strideWidth,R=o.dataFormat,k=d-1-o.padInfo.top,I=m-1-o.padInfo.left,A=R==="channelsLast",D=a.strides[0],B=A?a.strides[1]:a.strides[2],M=A?a.strides[2]:1,N=A?1:a.strides[1],U=e.strides[0],W=A?e.strides[1]:e.strides[2],L=A?e.strides[2]:1,V=A?1:e.strides[1],G=0;G<h;++G)for(var X=0;X<v;++X)for(var J=0;J<g;++J)for(var Q=J-k,oe=Math.max(0,Math.ceil(Q/C)),ie=Math.min(x,(d+Q)/C),ue=0;ue<y;++ue){for(var fe=ue-I,ce=Math.max(0,Math.ceil(fe/S)),me=Math.min(w,(m+fe)/S),Ae=0,he=oe;he<ie;++he)for(var xe=he*C-Q,ye=ce;ye<me;++ye)for(var Se=U*G+W*he+L*ye,Ee=l*(d-1-xe)+f*(m-1-(ye*S-fe))+p*X,ke=0;ke<b;++ke)Ae+=s[Se+V*ke]*u[Ee+ke];i[D*G+B*J+M*ue+N*X]=Ae}return a.toTensor()},n.prototype.conv3dDerInput=function(e,t,o){for(var a=le(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=s[3],p=this.readSync(e.dataId),h=e.strides,d=h[0],m=h[1],v=h[2],g=h[3],y=this.readSync(t.dataId),b=t.strides,x=b[0],w=b[1],C=b[2],S=b[3],R=o.batchSize,k=o.filterDepth,I=o.filterHeight,A=o.filterWidth,D=o.inChannels,B=o.inDepth,M=o.inHeight,N=o.inWidth,U=o.outChannels,W=o.outDepth,L=o.outHeight,V=o.outWidth,G=o.strideDepth,X=o.strideHeight,J=o.strideWidth,Q=k-1-o.padInfo.front,oe=I-1-o.padInfo.top,ie=A-1-o.padInfo.left,ue=0;ue<R;++ue)for(var fe=0;fe<D;++fe)for(var ce=0;ce<B;++ce)for(var me=ce-Q,Ae=Math.max(0,Math.ceil(me/G)),he=Math.min(W,(k+me)/G),xe=0;xe<M;++xe)for(var ye=xe-oe,Se=Math.max(0,Math.ceil(ye/X)),Ee=Math.min(L,(I+ye)/X),ke=0;ke<N;++ke){for(var ut=ke-ie,ct=Math.max(0,Math.ceil(ut/J)),qe=Math.min(V,(A+ut)/J),Nt=0,mt=Ae;mt<he;++mt)for(var Et=mt*G-me,gt=Se;gt<Ee;++gt)for(var Mt=gt*X-ye,yt=ct;yt<qe;++yt)for(var cn=d*ue+m*mt+v*gt+g*yt,Ot=x*(k-1-Et)+w*(I-1-Mt)+C*(A-1-(yt*J-ut))+S*fe,lt=0;lt<U;++lt)Nt+=p[cn+lt]*y[Ot+lt];i[u*ue+c*ce+l*xe+f*ke+fe]=Nt}return a.toTensor()},n.prototype.conv2dDerFilter=function(e,t,o){H([e,t],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=le(o.filterShape,"float32"),f=o.padInfo.left,p=o.padInfo.top,h=this.bufferSync(e),d=this.bufferSync(t),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((p-m)/a)),g=Math.min(o.outHeight,(o.inHeight+p-m)/a),y=0;y<u;++y)for(var b=Math.max(0,Math.ceil((f-y)/i)),x=Math.min(o.outWidth,(o.inWidth+f-y)/i),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var S=0,R=0;R<o.batchSize;++R)for(var k=v;k<g;++k)for(var I=m+k*a-p,A=b;A<x;++A){var D=y+A*i-f;S+=c?h.get(R,I,D,w)*d.get(R,k,A,C):h.get(R,w,I,D)*d.get(R,C,k,A)}l.set(S,m,y,w,C)}return l.toTensor()},n.prototype.conv3dDerFilter=function(e,t,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=le(o.filterShape,"float32"),p=f.values,h=f.strides,d=h[0],m=h[1],v=h[2],g=h[3],y=this.readSync(t.dataId),b=t.strides,x=b[0],w=b[1],C=b[2],S=b[3],R=this.readSync(e.dataId),k=e.strides,I=k[0],A=k[1],D=k[2],B=k[3],M=o.padInfo.front,N=o.padInfo.left,U=o.padInfo.top,W=0;W<u;++W)for(var L=Math.max(0,Math.ceil((M-W)/a)),V=Math.min(o.outDepth,(o.inDepth+M-W)/a),G=W*d,X=0;X<c;++X)for(var J=Math.max(0,Math.ceil((U-X)/i)),Q=Math.min(o.outHeight,(o.inHeight+U-X)/i),oe=X*m+G,ie=0;ie<l;++ie)for(var ue=Math.max(0,Math.ceil((N-ie)/s)),fe=Math.min(o.outWidth,(o.inWidth+N-ie)/s),ce=ie*v+oe,me=0;me<o.inChannels;++me)for(var Ae=me*g+ce,he=0;he<o.outChannels;++he){for(var xe=0,ye=0;ye<o.batchSize;++ye)for(var Se=ye*I,Ee=ye*x,ke=L;ke<V;++ke)for(var ut=(W+ke*a-M)*A+Se,ct=ke*w+Ee,qe=J;qe<Q;++qe)for(var Nt=(X+qe*i-U)*D+ut,mt=qe*C+ct,Et=ue;Et<fe;++Et){var gt=Et*S+mt;xe+=R[(ie+Et*s-N)*B+Nt+me]*y[gt+he]}p[Ae+he]=xe}return f.toTensor()},n.prototype.fusedDepthwiseConv2D=function(e){var t=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(t,o,a);return i&&(c=this.add(c,i)),s&&(c=Hi(this,c,s,u)),c},n.prototype.depthwiseConv2D=function(e,t,o){H([e,t],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,p=le(o.outShape,e.dtype),h=this.readSync(e.dataId),d=this.readSync(t.dataId),m=p.values,v=0;v<o.batchSize;++v)for(var g=v*e.strides[0],y=v*p.strides[0],b=0;b<o.outHeight;++b)for(var x=y+b*p.strides[1],w=b*o.strideHeight-c,C=0;C<a;++C){var S=w+C*s;if(!(S<0||S>=o.inHeight))for(var R=C*t.strides[0],k=g+S*e.strides[1],I=0;I<o.outWidth;++I)for(var A=x+I*p.strides[2],D=I*o.strideWidth-l,B=0;B<i;++B){var M=D+B*u;if(!(M<0||M>=o.inWidth))for(var N=R+B*t.strides[1],U=k+M*o.inChannels,W=A,L=N,V=0;V<o.inChannels;++V){for(var G=h[U+V],X=0;X<f;++X)m[W+X]+=G*d[L+X];W+=f,L+=f}}}return p.toTensor()},n.prototype.depthwiseConv2DDerInput=function(e,t,o){H([e,t],"depthwiseConv2DDerInput");for(var a=le(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),p=e.strides,h=p[0],d=p[1],m=p[2],v=this.readSync(t.dataId),g=t.strides,y=g[0],b=g[1],x=g[2],w=o.batchSize,C=o.filterHeight,S=o.filterWidth,R=o.inChannels,k=o.inHeight,I=o.inWidth,A=o.outChannels,D=o.outHeight,B=o.outWidth,M=o.strideHeight,N=o.strideWidth,U=C-1-o.padInfo.top,W=S-1-o.padInfo.left,L=A/R,V=0;V<w;++V)for(var G=0;G<R;++G)for(var X=0;X<k;++X)for(var J=X-U,Q=Math.max(0,Math.ceil(J/M)),oe=Math.min(D,(C+J)/M),ie=0;ie<I;++ie){for(var ue=ie-W,fe=Math.max(0,Math.ceil(ue/N)),ce=Math.min(B,(S+ue)/N),me=0,Ae=Q;Ae<oe;++Ae)for(var he=Ae*M-J,xe=fe;xe<ce;++xe)for(var ye=h*V+d*Ae+m*xe,Se=y*(C-1-he)+b*(S-1-(xe*N-ue))+x*G,Ee=0;Ee<L;++Ee)me+=f[ye+(G*L+Ee)]*v[Se+Ee];i[u*V+c*X+l*ie+G]=me}return a.toTensor()},n.prototype.depthwiseConv2DDerFilter=function(e,t,o){H([e,t],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=le(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,p=o.outChannels/o.inChannels,h=this.bufferSync(e),d=this.bufferSync(t),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((f-m)/a)),g=Math.min(o.outHeight,(o.inHeight+f-m)/a),y=0;y<u;++y)for(var b=Math.max(0,Math.ceil((l-y)/i)),x=Math.min(o.outWidth,(o.inWidth+l-y)/i),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/p),S=w%p,R=0,k=0;k<o.batchSize;++k)for(var I=v;I<g;++I)for(var A=m+I*a-f,D=b;D<x;++D){var B=y+D*i-l;R+=h.get(k,A,B,C)*d.get(k,I,D,w)}c.set(R,m,y,C,S)}return c.toTensor()},n.prototype.tile=function(e,t){return H(e,"tile"),zl(this.bufferSync(e),t)},n.prototype.pad=function(e,t,o){H(e,"pad");var a=t.map(function(p,h){return p[0]+e.shape[h]+p[1]}),i=t.map(function(p){return p[0]}),s=this.bufferSync(e),u=le(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(p,h){return p+i[h]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},n.prototype.transpose=function(e,t){H(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[t[a]];var i=this.readSync(e.dataId),s=le(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[t[f]];var p=s.locToIndex(l);s.values[p]=i[a]}return s.toTensor()},n.prototype.gather=function(e,t,o){H([e,t],"gather");var a=e.shape.slice(),i=this.readSync(t.dataId);a[o]=i.length;for(var s=le(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=i[l[o]];var p=u.locToIndex(f);s.values[c]=u.values[p]}return s.toTensor()},n.prototype.batchToSpaceND=function(e,t,o){H([e],"batchToSpaceND");var a=t.reduce(function(f,p){return f*p}),i=Sa(e.shape,t,a),s=Ta(i.length,t.length),u=Da(e.shape,t,a),c=Tl(o,t.length),l=Dl(u,o,t.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},n.prototype.spaceToBatchND=function(e,t,o){H([e],"spaceToBatchND");var a=t.reduce(function(p,h){return p*h}),i=[[0,0]];i.push.apply(i,o);for(var s=1+t.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Sa(u.shape,t,a,!1),l=Ta(c.length,t.length,!1),f=Da(u.shape,t,a,!1);return u.reshape(c).transpose(l).reshape(f)},n.prototype.pool=function(e,t,o){H(e,"pool");for(var a=t.strideHeight,i=t.strideWidth,s=t.dilationHeight,u=t.dilationWidth,c=t.effectiveFilterHeight,l=t.effectiveFilterWidth,f=t.padInfo.top,p=t.padInfo.left,h=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,d=this.readSync(e.dataId),m=le(t.outShape,e.dtype),v=m.values,g=t.outShape[1]*t.outShape[2]*t.outShape[3],y=t.outShape[2]*t.outShape[3],b=t.outShape[3],x=0;x<t.batchSize;++x)for(var w=x*g,C=x*e.strides[0],S=0;S<t.inChannels;++S)for(var R=0;R<t.outHeight;++R)for(var k=R*a-f,I=Math.max(0,k),A=Math.min(t.inHeight,c+k),D=w+R*y,B=0;B<t.outWidth;++B){for(var M=B*i-p,N=Math.max(0,M),U=Math.min(t.inWidth,l+M),W=h,L=0,V=0,G=I;G<A;G+=s){for(var X=C+G*e.strides[1],J=N;J<U;J+=u){var Q=d[X+J*e.strides[2]+S];o==="max"&&Q>W?W=Q:o==="avg"&&(L+=Q,V++)}if(isNaN(W))break}v[D+B*b+S]=o==="avg"?L/V:W}return m.toTensor()},n.prototype.maxPool=function(e,t){return this.pool(e,t,"max")},n.prototype.maxPoolPositions=function(e,t){for(var o=le(t.outShape,"int32"),a=t.strideHeight,i=t.strideWidth,s=t.dilationHeight,u=t.dilationWidth,c=t.effectiveFilterHeight,l=t.effectiveFilterWidth,f=t.padInfo.top,p=t.padInfo.left,h=this.bufferSync(e),d=0;d<t.batchSize;++d)for(var m=0;m<t.inChannels;++m)for(var v=0;v<t.outHeight;++v){for(var g=v*a-f,y=g;y<0;)y+=s;for(var b=Math.min(t.inHeight,c+g),x=0;x<t.outWidth;++x){for(var w=x*i-p,C=w;C<0;)C+=u;for(var S=Math.min(t.inWidth,l+w),R=Number.NEGATIVE_INFINITY,k=-1,I=y;I<b;I+=s)for(var A=I-g,D=C;D<S;D+=u){var B=D-w,M=h.get(d,I,D,m);M>R&&(R=M,k=A*l+B)}o.set(k,d,v,x,m)}}return o.toTensor()},n.prototype.maxPoolBackprop=function(e,t,o,a){H([t,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(t,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,f=a.effectiveFilterHeight,p=a.effectiveFilterWidth,h=p-1-a.padInfo.left,d=f-1-a.padInfo.top,m=le(t.shape,"float32"),v=this.bufferSync(i),g=this.bufferSync(e),y=0;y<a.batchSize;++y)for(var b=0;b<a.inChannels;++b)for(var x=0;x<a.inHeight;++x)for(var w=0;w<a.inWidth;++w){for(var C=x-d,S=w-h,R=0,k=0;k<f;k+=c){var I=(C+k)/s;if(!(I<0||I>=a.outHeight||Math.floor(I)!==I))for(var A=0;A<p;A+=l){var D=(S+A)/u;if(!(D<0||D>=a.outWidth||Math.floor(D)!==D)){var B=f*p-1-v.get(y,I,D,b)===k*p+A?1:0;B!==0&&(R+=g.get(y,I,D,b)*B)}}}m.set(R,y,x,w,b)}return m.toTensor()},n.prototype.avgPoolBackprop=function(e,t,o){H([e,t],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,p=o.effectiveFilterWidth,h=p-1-o.padInfo.left,d=f-1-o.padInfo.top,m=le(t.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),y=0;y<o.batchSize;++y)for(var b=0;b<o.inChannels;++b)for(var x=0;x<o.inHeight;++x)for(var w=0;w<o.inWidth;++w){for(var C=x-d,S=w-h,R=0,k=0;k<f;k+=c){var I=(C+k)/a;if(!(I<0||I>=o.outHeight||Math.floor(I)!==I))for(var A=0;A<p;A+=l){var D=(S+A)/i;D<0||D>=o.outWidth||Math.floor(D)!==D||(R+=g.get(y,I,D,b))}}m.set(R*v,y,x,w,b)}return m.toTensor()},n.prototype.pool3d=function(e,t,o){H(e,"pool3d");for(var a=t.strideDepth,i=t.strideHeight,s=t.strideWidth,u=t.dilationDepth,c=t.dilationHeight,l=t.dilationWidth,f=t.effectiveFilterDepth,p=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,m=t.padInfo.top,v=t.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=this.readSync(e.dataId),b=le(t.outShape,e.dtype),x=b.values,w=t.outShape[1]*t.outShape[2]*t.outShape[3]*t.outShape[4],C=t.outShape[2]*t.outShape[3]*t.outShape[4],S=t.outShape[3]*t.outShape[4],R=t.outShape[4],k=0;k<t.batchSize;++k)for(var I=k*w,A=k*e.strides[0],D=0;D<t.inChannels;++D)for(var B=0;B<t.outDepth;++B){for(var M=B*a-d,N=M;N<0;)N+=u;for(var U=Math.min(t.inDepth,f+M),W=I+B*C,L=0;L<t.outHeight;++L){for(var V=L*i-m,G=V;G<0;)G+=c;for(var X=Math.min(t.inHeight,p+V),J=W+L*S,Q=0;Q<t.outWidth;++Q){for(var oe=Q*s-v,ie=oe;ie<0;)ie+=l;for(var ue=Math.min(t.inWidth,h+oe),fe=J+Q*R,ce=g,me=0,Ae=0,he=N;he<U;he+=u){for(var xe=A+he*e.strides[1],ye=G;ye<X;ye+=c){for(var Se=xe+ye*e.strides[2],Ee=ie;Ee<ue;Ee+=l){var ke=y[Se+Ee*e.strides[3]+D];if(o==="max"&&ke>ce?ce=ke:o==="avg"&&(me+=ke,Ae++),isNaN(ce))break}if(isNaN(ce))break}if(isNaN(ce))break}x[fe+D]=o==="avg"?me/Ae:ce}}}return b.toTensor()},n.prototype.avgPool3d=function(e,t){return H(e,"avgPool3d"),this.pool3d(e,t,"avg").toFloat()},n.prototype.avgPool3dBackprop=function(e,t,o){H([e,t],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,p=o.dilationHeight,h=o.dilationWidth,d=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=d-1-o.padInfo.front,y=v-1-o.padInfo.left,b=m-1-o.padInfo.top,x=le(t.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),S=0;S<o.batchSize;++S)for(var R=0;R<o.inChannels;++R)for(var k=0;k<o.inDepth;++k)for(var I=0;I<o.inHeight;++I)for(var A=0;A<o.inWidth;++A){for(var D=k-g,B=I-b,M=A-y,N=0,U=0;U<d;U+=f){var W=(D+U)/a;if(!(W<0||W>=o.outDepth||Math.floor(W)!==W))for(var L=0;L<m;L+=p){var V=(B+L)/i;if(!(V<0||V>=o.outHeight||Math.floor(V)!==V))for(var G=0;G<v;G+=h){var X=(M+G)/s;X<0||X>=o.outWidth||Math.floor(X)!==X||(N+=C.get(S,W,V,X,R))}}}x.set(N*w,S,k,I,A,R)}return x.toTensor()},n.prototype.maxPool3d=function(e,t){return H(e,"maxPool3d"),this.pool3d(e,t,"max").toFloat()},n.prototype.maxPool3dPositions=function(e,t){for(var o=le(t.outShape,"int32"),a=t.strideDepth,i=t.strideHeight,s=t.strideWidth,u=t.dilationDepth,c=t.dilationHeight,l=t.dilationWidth,f=t.effectiveFilterDepth,p=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,m=t.padInfo.top,v=t.padInfo.left,g=this.bufferSync(e),y=0;y<t.batchSize;++y)for(var b=0;b<t.inChannels;++b)for(var x=0;x<t.outDepth;++x){for(var w=x*a-d,C=w;C<0;)C+=u;for(var S=Math.min(t.inDepth,f+w),R=0;R<t.outHeight;++R){for(var k=R*i-m,I=k;I<0;)I+=c;for(var A=Math.min(t.inHeight,p+k),D=0;D<t.outWidth;++D){for(var B=D*s-v,M=B;M<0;)M+=l;for(var N=Math.min(t.inWidth,h+B),U=Number.NEGATIVE_INFINITY,W=-1,L=C;L<S;L+=u)for(var V=L-w,G=I;G<A;G+=c)for(var X=G-k,J=M;J<N;J+=l){var Q=J-B,oe=g.get(y,L,G,J,b);oe>=U&&(U=oe,W=V*p*h+X*p+Q)}o.set(W,y,x,R,D,b)}}}return o.toTensor()},n.prototype.maxPool3dBackprop=function(e,t,o,a){H([t,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(t,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,f=a.dilationHeight,p=a.dilationWidth,h=a.effectiveFilterDepth,d=a.effectiveFilterHeight,m=a.effectiveFilterWidth,v=h-1-a.padInfo.front,g=m-1-a.padInfo.left,y=d-1-a.padInfo.top,b=le(t.shape,"float32"),x=this.bufferSync(i),w=this.bufferSync(e),C=0;C<a.batchSize;++C)for(var S=0;S<a.inChannels;++S)for(var R=0;R<a.inDepth;++R)for(var k=0;k<a.inHeight;++k)for(var I=0;I<a.inWidth;++I){for(var A=R-v,D=k-y,B=I-g,M=0,N=0;N<h;N+=l){var U=(A+N)/s;if(!(U<0||U>=a.outDepth||Math.floor(U)!==U))for(var W=0;W<d;W+=f){var L=(D+W)/u;if(!(L<0||L>=a.outHeight||Math.floor(L)!==L))for(var V=0;V<m;V+=p){var G=(B+V)/c;if(!(G<0||G>=a.outWidth||Math.floor(G)!==G)){var X=h*d*m-1-x.get(C,U,L,G,S)===N*d*m+W*m+V?1:0;X!==0&&(M+=w.get(C,U,L,G,S)*X)}}}}b.set(M,C,R,k,I,S)}return b.toTensor()},n.prototype.cast=function(e,t){return Os(e,t,this)},n.prototype.reshape=function(e,t){return Fa(e,t)},n.prototype.avgPool=function(e,t){return H(e,"avgPool"),this.pool(e,t,"avg").toFloat()},n.prototype.resizeBilinear=function(e,t,o,a){H(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),p=new Float32Array(ne([s,t,o,l])),h=[a&&t>1?u-1:u,a&&o>1?c-1:c],d=[a&&t>1?t-1:t,a&&o>1?o-1:o],m=0,v=h[0]/d[0],g=h[1]/d[1],y=0;y<s;y++)for(var b=0;b<t;b++)for(var x=v*b,w=Math.floor(x),C=x-w,S=Math.min(u-1,Math.ceil(x)),R=y*e.strides[0]+w*e.strides[1],k=y*e.strides[0]+S*e.strides[1],I=0;I<o;I++)for(var A=g*I,D=Math.floor(A),B=A-D,M=Math.min(c-1,Math.ceil(A)),N=R+D*e.strides[2],U=k+D*e.strides[2],W=R+M*e.strides[2],L=k+M*e.strides[2],V=0;V<l;V++){var G=f[N+V],X=f[U+V],J=G+(f[W+V]-G)*B,Q=J+(X+(f[L+V]-X)*B-J)*C;p[m++]=Q}return Ye(p,[s,t,o,l])},n.prototype.resizeBilinearBackprop=function(e,t,o){H([e,t],"resizeBilinearBackprop");for(var a=t.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],p=l[2],h=new Float32Array(i*s*u*c),d=[o&&f>1?s-1:s,o&&p>1?u-1:u],m=[o&&f>1?f-1:f,o&&p>1?p-1:p],v=d[0]/m[0],g=d[1]/m[1],y=this.readSync(e.dataId),b=0,x=0;x<i;x++)for(var w=x*t.strides[0],C=0;C<f;C++)for(var S=C*v,R=Math.floor(S),k=Math.min(Math.ceil(S),s-1),I=w+R*t.strides[1],A=w+k*t.strides[1],D=S-R,B=1-D,M=0;M<p;M++)for(var N=M*g,U=Math.floor(N),W=Math.min(Math.ceil(N),u-1),L=N-U,V=1-L,G=I+U*t.strides[2],X=I+W*t.strides[2],J=A+U*t.strides[2],Q=A+W*t.strides[2],oe=B*V,ie=B*L,ue=D*V,fe=D*L,ce=0;ce<c;ce++){var me=y[b++];h[G+ce]+=me*oe,h[X+ce]+=me*ie,h[J+ce]+=me*ue,h[Q+ce]+=me*fe}return je(h,[i,u,s,c],t.dtype)},n.prototype.resizeNearestNeighbor=function(e,t,o,a){H(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),p=new Float32Array(s*t*o*l),h=[a&&t>1?u-1:u,a&&o>1?c-1:c],d=[a&&t>1?t-1:t,a&&o>1?o-1:o],m=h[0]/d[0],v=h[1]/d[1],g=0,y=0;y<s;y++)for(var b=y*e.strides[0],x=0;x<t;x++)for(var w=m*x,C=b+Math.min(u-1,a?Math.round(w):Math.floor(w))*e.strides[1],S=0;S<o;S++)for(var R=v*S,k=C+Math.min(c-1,a?Math.round(R):Math.floor(R))*e.strides[2],I=0;I<l;I++){var A=f[k+I];p[g++]=A}return Ye(p,[s,t,o,l],e.dtype)},n.prototype.resizeNearestNeighborBackprop=function(e,t,o){H([e,t],"resizeNearestNeighborBackprop");for(var a=t.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],p=l[2],h=new Float32Array(i*s*u*c),d=this.readSync(e.dataId),m=[o&&f>1?s-1:s,o&&p>1?u-1:u],v=[o&&f>1?f-1:f,o&&p>1?p-1:p],g=m[0]/v[0],y=m[1]/v[1],b=1/g,x=1/y,w=2*Math.ceil(b)+2,C=2*Math.ceil(x)+2,S=0;S<i;S++)for(var R=S*t.strides[0],k=0;k<s;k++)for(var I=R+k*t.strides[1],A=Math.floor(k*b),D=Math.floor(A-w/2),B=0;B<u;B++)for(var M=I+B*t.strides[2],N=Math.floor(B*x),U=Math.floor(N-C/2),W=0;W<c;W++){for(var L=0,V=0;V<w;V++){var G=V+D;if(!(G<0||G>=f)){var X=R+G*e.strides[1],J=G*g;if(k===Math.min(s-1,o?Math.round(J):Math.floor(J)))for(var Q=0;Q<C;Q++){var oe=Q+U;if(!(oe<0||oe>=p)){var ie=X+oe*e.strides[2],ue=oe*y;B===Math.min(u-1,o?Math.round(ue):Math.floor(ue))&&(L+=d[ie+W])}}}}h[M+W]=L}return je(h,t.shape,t.dtype)},n.prototype.batchNormalization=function(e,t,o,a,i,s){H([e,t,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(t.dataId),l=this.readSync(o.dataId),f=i?this.readSync(i.dataId):new Float32Array([1]),p=s?this.readSync(s.dataId):new Float32Array([0]),h=new Float32Array(u.length),d=p.length,m=f.length,v=l.length,g=c.length,y=0,b=0,x=0,w=0,C=0;C<u.length;++C)h[C]=p[y++]+(u[C]-c[b++])*f[x++]/Math.sqrt(l[w++]+a),y>=d&&(y=0),b>=g&&(b=0),x>=m&&(x=0),w>=v&&(w=0);return je(h,e.shape)},n.prototype.localResponseNormalization4D=function(e,t,o,a,i){H(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function p(v){for(var g=v%s,y=v-g+Math.max(0,g-t),b=v-g+Math.min(g+t,u),x=0;y<=b;y++){var w=c[y];x+=w*w}return x}for(var h=0;h<l;h++){var d=p(h),m=c[h]*Math.pow(o+a*d,-i);f[h]=m}return je(f,e.shape)},n.prototype.LRNGrad=function(e,t,o,a,i,s,u){H(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(t.dataId),p=this.readSync(o.dataId),h=new Float32Array(e.size),d=e.size,m=0;m<d;m++){for(var v=m%c,g=m-v+Math.max(0,v-a),y=m-v+Math.min(c,v+a+1),b=0,x=g;x<y;x++)b+=Math.pow(f[x],2);for(b=s*b+i,x=g;x<y;x++){var w=-2*s*u*f[x]*p[m]/b;m===x&&(w+=Math.pow(b,-u)),w*=l[m],h[x]+=w}}return je(h,e.shape)},n.prototype.multinomial=function(e,t,o,a){H(e,"multinomial");for(var i=t?e:Ct(e),s=i.shape[0],u=i.shape[1],c=Pe([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(i.dataId),p=0;p<s;++p){var h=p*u,d=new Float32Array(u-1);d[0]=f[h];for(var m=1;m<d.length;++m)d[m]=d[m-1]+f[h+m];for(var v=Wa(a.toString()),g=p*o,y=0;y<o;++y){var b=v();l[g+y]=d.length;for(var x=0;x<d.length;x++)if(b<d[x]){l[g+y]=x;break}}}return c},n.prototype.oneHot=function(e,t,o,a){H(e,"oneHot");var i=new Float32Array(e.size*t);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<t&&(i[u*t+s[u]]=o);return nn(i,[e.size,t],"int32")},n.prototype.nonMaxSuppression=function(e,t,o,a,i){return H(e,"nonMaxSuppression"),Ls(this.readSync(e.dataId),this.readSync(t.dataId),o,a,i)},n.prototype.fft=function(e){return this.fftBatch(e,!1)},n.prototype.ifft=function(e){return this.fftBatch(e,!0)},n.prototype.fftBatch=function(e,t){for(var o=e.shape[0],a=e.shape[1],i=le(e.shape,"float32"),s=le(e.shape,"float32"),u=Lt(e).as2D(o,a),c=tn(e).as2D(o,a),l=0;l<o;l++)for(var f=u.slice([l,0],[1,a]),p=c.slice([l,0],[1,a]),h=nt(f,p),d=this.readSync(this.fftImpl(h,t).dataId),m=0;m<a;m++){var v=Qu(d,m);i.values[l*a+m]=v.real,s.values[l*a+m]=v.imag}return nt(i.toTensor(),s.toTensor()).as2D(o,a)},n.prototype.fftImpl=function(e,t){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,t).as2D(e.shape[0],e.shape[1]);return t&&(i=nt(Lt(i).div(Y(a)),tn(i).div(Y(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),p=0;p<c.length;p+=2)l[p/2]=c[p],f[p/2]=c[p+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,a,t));return nt(u.real,u.imag).as2D(e.shape[0],e.shape[1])},n.prototype.isExponentOf2=function(e){return(e&e-1)==0},n.prototype.fftRadix2=function(e,t,o){if(t===1)return e;var a=this.readSync(e.dataId),i=t/2,s=function(g){for(var y=Math.ceil(g.length/4),b=new Float32Array(y),x=new Float32Array(y),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],x[Math.floor(w/4)]=g[w+1];return{real:b,imag:x}}(a),u=nt(s.real,s.imag).as1D(),c=function(g){for(var y=Math.floor(g.length/4),b=new Float32Array(y),x=new Float32Array(y),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],x[Math.floor(w/4)]=g[w+1];return{real:b,imag:x}}(a),l=nt(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var f=function(g,y){for(var b=new Float32Array(g/2),x=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(y?2:-2)*Math.PI*(w/g);b[w]=Math.cos(C),x[w]=Math.sin(C)}return{real:b,imag:x}}(t,o),p=nt(f.real,f.imag).mul(l),h=u.add(p),d=u.sub(p),m=Lt(h).concat(Lt(d)),v=tn(h).concat(tn(d));return nt(m,v).as1D()},n.prototype.fourierTransformByMatmul=function(e,t,o){for(var a=new Float32Array(2*t),i=0;i<t;i++){for(var s=0,u=0,c=0;c<t;c++){var l=Qd(i*c,t,o),f=Qu(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=t,u/=t),Jd(a,s,u,i)}return a},n.prototype.depthToSpace=function(e,t,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(t>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+t});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*t,l=s*t,f=u/(t*t),p=this.readSync(e.dataId),h=new Float32Array(a*c*l*f),d=0,m=0;m<a;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/t),y=v%t,b=0;b<l;++b)for(var x=Math.floor(b/t),w=(y*t+b%t)*f,C=0;C<f;++C){var S=C+w+u*(x+s*(g+i*m));h[d++]=p[S]}return je(h,[a,c,l,f])},n.prototype.broadcastedBinaryOp=function(e,t,o,a){var i=ge(e.shape,t.shape),s=le(i,o),u=this.readSync(e.dataId),c=this.readSync(t.dataId),l=dn(e.shape,i),f=dn(t.shape,i),p=s.values;if(l.length+f.length===0)for(var h=0;h<p.length;++h)p[h]=a(u[h%u.length],c[h%c.length]);else{var d=this.bufferSync(e),m=this.bufferSync(t),v=function(g){var y=s.indexToLoc(g),b=y.slice(-e.rank);l.forEach(function(S){return b[S]=0});var x=d.locToIndex(b),w=y.slice(-t.rank);f.forEach(function(S){return w[S]=0});var C=m.locToIndex(w);p[g]=a(u[x],c[C])};for(h=0;h<p.length;++h)v(h)}return s.toTensor()},n.prototype.broadcastedBinaryComplexOp=function(e,t,o){var a=ge(e.shape,t.shape),i=le(a,"float32"),s=le(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(t.dataId),l=dn(e.shape,a),f=dn(t.shape,a),p=i.values,h=s.values;if(l.length+f.length===0)for(var d=0;d<p.length;d++){var m=d%u.length,v=d%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);p[d]=g.real,h[d]=g.imag}else{var y=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(t.dataId).complexTensors.real),x=function(w){var C=i.indexToLoc(w),S=C.slice(-e.rank);l.forEach(function(D){return S[D]=0});var R=y.locToIndex(S),k=C.slice(-t.rank);f.forEach(function(D){return k[D]=0});var I=b.locToIndex(k),A=o(u[2*R],u[2*R+1],c[2*I],c[2*I+1]);p[w]=A.real,h[w]=A.imag};for(d=0;d<p.length;d++)x(d)}return this.complex(i.toTensor(),s.toTensor())},n.prototype.split=function(e,t,o){return Wl(e,t,o)},n.prototype.dispose=function(){},n.prototype.floatPrecision=function(){return 32},n.prototype.epsilon=function(){return 1e-7},n.prototype.cropAndResize=function(e,t,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],p=u[3],h=t.shape[0],d=a[0],m=a[1],v=le([h,d,m,p],"float32"),g=this.readSync(t.dataId),y=this.readSync(o.dataId),b=this.readSync(e.dataId),x=e.strides,w=v.strides,C=0;C<h;C++){var S=4*C,R=g[S],k=g[S+1],I=g[S+2],A=g[S+3],D=y[C];if(!(D>=c))for(var B=d>1?(I-R)*(l-1)/(d-1):0,M=m>1?(A-k)*(f-1)/(m-1):0,N=0;N<d;N++){var U=d>1?R*(l-1)+N*B:.5*(R+I)*(l-1);if(U<0||U>l-1)for(var W=0;W<m;W++)for(var L=0;L<p;L++){var V=L+W*w[2]+N*w[1]+C*w[0];v.values[V]=s}else if(i==="bilinear"){var G=Math.floor(U),X=Math.ceil(U),J=U-G;for(W=0;W<m;W++)if((he=m>1?k*(f-1)+W*M:.5*(k+A)*(f-1))<0||he>f-1)for(L=0;L<p;L++)V=L+W*w[2]+N*w[1]+C*w[0],v.values[V]=s;else{var Q=Math.floor(he),oe=Math.ceil(he),ie=he-Q;for(L=0;L<p;L++){var ue=b[V=L+Q*x[2]+G*x[1]+D*x[0]],fe=b[V=L+oe*x[2]+G*x[1]+D*x[0]],ce=b[V=L+Q*x[2]+X*x[1]+D*x[0]],me=ue+(fe-ue)*ie,Ae=ce+(b[V=L+oe*x[2]+X*x[1]+D*x[0]]-ce)*ie;V=L+W*w[2]+N*w[1]+C*w[0],v.values[V]=me+(Ae-me)*J}}}else for(W=0;W<m;++W){var he;if((he=m>1?k*(f-1)+W*M:.5*(k+A)*(f-1))<0||he>f-1)for(L=0;L<p;L++)V=L+W*w[2]+N*w[1]+C*w[0],v.values[V]=s;else{var xe=Math.round(he),ye=Math.round(U);for(L=0;L<p;L++){var Se=L+xe*x[2]+ye*x[1]+D*x[0],Ee=L+W*w[2]+N*w[1]+C*w[0];v.values[Ee]=b[Se]}}}}}return v.toTensor()},n.prototype.sparseToDense=function(e,t,o,a){var i=vo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,f=i.outputSize;return this.scatter(e,t,o,f,c,u,s,l,a,!1)},n.prototype.gatherND=function(e,t){var o=t.shape,a=o[o.length-1],i=As(e,t),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Ye([],s,e.dtype);for(var f=new lo([u,c],e.dtype),p=this.readSync(t.dataId),h=this.readSync(e.dataId),d=0;d<u;d++){for(var m=[],v=0,g=0;g<a;g++){var y=p[d*a+g];v+=y*l[g],m.push(y)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var b=0;b<c;b++)f.values[d*c+b]=h[v*c+b]}return f.toTensor().reshape(s)},n.prototype.scatterND=function(e,t,o){var a=vo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=Y(0);return this.scatter(e,t,o,l,u,s,i,c,f,!0)},n.prototype.fill=function(e,t,o){var a=uo(o=o||Rr(t),ne(e));return a.fill(t),F.makeTensor(a,e,o,this)},n.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},n.prototype.zerosLike=function(e){var t=uo(e.dtype,ne(e.shape));return this.makeOutput(t,e.shape,e.dtype)},n.prototype.linspace=function(e,t,o){return Bs(e,t,o)},n.prototype.scatter=function(e,t,o,a,i,s,u,c,l,f){var p=[a/i,i],h=this.readSync(e.dataId),d=this.readSync(t.dataId);if(a===0)return Ye([],o,t.dtype);var m=new lo(p,t.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],y=0,b=0;b<u;b++){var x=h[v*u+b];g.push(x),y+=x*c[b]}if(y<0||y>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)f?m.values[y*i+w]+=d[v*i+w]:m.values[y*i+w]=t.rank===0?d[0]:d[v*i+w]}return m.toTensor().reshape(o)},n}(Bl);F.registerBackend("cpu",function(){return new t1},1);for(la=0,qi=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=r.attrs,o=n,a=o.boxes,i=o.scores,s=t,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,p=e;H(a,"NonMaxSuppressionWithScore");var h=Ws(p.data.get(a.dataId).values,p.data.get(i.dataId).values,u,c,l,f);return[h.selectedIndices,h.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n.x,o=e;H(t,"square");for(var a=o.data.get(t.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}},{kernelName:yo,backendName:"cpu",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n,o=t.a,a=t.b,i=e;H([o,a],yo);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(p,h,d,m,v,g){var y=ge(p,h),b=y.length,x=Ht(y),w=kr(v,ne(y)),C=p.length,S=h.length,R=Ht(p),k=Ht(h),I=dn(p,y),A=dn(h,y);if(I.length+A.length===0)for(var D=0;D<w.length;++D)w[D]=g(d[D%d.length],m[D%m.length]);else{var B=function(M){var N=Hc(M,b,x),U=N.slice(-C);I.forEach(function(G){return U[G]=0});var W=rs(U,C,R),L=N.slice(-S);A.forEach(function(G){return L[G]=0});var V=rs(L,S,k);w[M]=g(d[W],m[V])};for(D=0;D<w.length;++D)B(D)}return[w,y]}(o.shape,a.shape,s,u,o.dtype,function(p,h){var d=p-h;return d*d}),l=c[0],f=c[1];return{dataId:i.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];la<qi.length;la++)Fc(qi[la]);var la,qi,vr,n1=function(r){this.variableNames=["A"];var n=pt(),e=r[0],t=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+t+".0, "+e+`.0);

        vec4 values = `+n.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},r1=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=pt(),e=r[0],t=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+t+".0, "+e+`.0);
            vec4 values = `+n.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+n.output+` = result;
      }
    `};for(fa=0,ji=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=r.attrs,o=n.pixels,a=t.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],p=[l,c,a];(s||i)&&(vr==null&&(vr=document.createElement("canvas").getContext("2d")),vr.canvas.width=c,vr.canvas.height=l,vr.drawImage(o,0,0,c,l),o=vr.canvas);var h=e.makeTensorInfo(f,"int32");e.texData.get(h.dataId).usage=Dt.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(h.dataId),o);var d=z().getBool("WEBGL_PACK")?new r1(p):new n1(p),m=e.runWebGLProgram(d,[h],"int32");return e.disposeData(h.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=r.attrs;ka("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=n,a=o.boxes,i=o.scores,s=t,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,p=e,h=Ws(p.readSync(a.dataId),p.readSync(i.dataId),u,c,l,f);return[h.selectedIndices,h.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n.x,o=e,a=new de(t.shape,"return x * x;");return o.runWebGLProgram(a,[t],t.dtype)}},{kernelName:yo,backendName:"webgl",kernelFunc:function(r){var n=r.inputs,e=r.backend,t=n,o=t.a,a=t.b,i=e,s=z().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pn("return (a - b) * (a - b);",o.shape,a.shape):new ze("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];fa<ji.length;fa++)Fc(ji[fa]);var fa,ji;for(pa=0,Ki=[{kernelName:"Square",gradFunc:function(r,n){var e=n[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:yo,gradFunc:function(r,n){var e=n[0],t=n[1],o=Y(2);return{a:function(){return Be(r,Be(o,De(e,t)))},b:function(){return Be(r,Be(o,De(t,e)))}}}}];pa<Ki.length;pa++)id(Ki[pa]);var pa,Ki,o1=function(){function r(){}return r.prototype.fetch=function(n,e){return fetch(n,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(n,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(n)},r.prototype.decode=function(n,e){return new TextDecoder(e).decode(n)},r}();z().get("IS_BROWSER")&&z().setPlatform("browser",new o1);var Xi,a1=function(){return Hu()},i1=function(){function r(){this.util=qu(),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(n,e){return z().global.fetch!=null?z().global.fetch(n,e):(Xi==null&&(Xi=a1()),Xi(n,e))},r.prototype.now=function(){var n=process.hrtime();return 1e3*n[0]+n[1]/1e6},r.prototype.encode=function(n,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(n)},r.prototype.decode=function(n,e){return n.length===0?"":new this.util.TextDecoder(e).decode(n)},r}();z().get("IS_NODE")&&z().setPlatform("node",new i1);var ms={float32:4,int32:4,uint16:2,uint8:1,bool:1},Ma=4;function Kf(r,n){for(var e={},t=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=ne(l),p=void 0;if("quantization"in s){var h=s.quantization;if(h.dtype!=="uint8"&&h.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+h.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=ms[h.dtype],m=r.slice(t,t+f*d),v=h.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")p=Float32Array.from(v,function(C){return C*h.scale+h.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);p=Int32Array.from(v,function(C){return Math.round(C*h.scale+h.min)})}t+=f*d}else if(c==="string"){var g=ne(s.shape);p=[];for(var y=0;y<g;y++){var b=new Uint32Array(r.slice(t,t+Ma))[0];t+=Ma;var x=new Uint8Array(r.slice(t,t+b));p.push(x),t+=b}}else{var w=ms[c];if(m=r.slice(t,t+f*w),c==="float32")p=new Float32Array(m);else if(c==="int32")p=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);p=new Uint8Array(m)}t+=f*w}e[u]=Ye(p,l,c)},a=0,i=n;a<i.length;a++)o(i[a]);return e}function s1(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var n=0,e=[];r.forEach(function(a){if(n+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var t=new Uint8Array(n),o=0;return e.forEach(function(a){t.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),t.buffer}var gs=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function bc(r){return gs?Buffer.byteLength(r):new Blob([r]).size}function ou(r){var n=0;r.forEach(function(o){n+=o.byteLength});var e=new Uint8Array(n),t=0;return r.forEach(function(o){e.set(new Uint8Array(o),t),t+=o.byteLength}),e.buffer}function wc(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var n=r.split("/");return n[n.length-1]}function So(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:bc(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:bc(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var Ft=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(n){r.getInstance().saveRouters.push(n)},r.registerLoadRouter=function(n){r.getInstance().loadRouters.push(n)},r.getSaveHandlers=function(n){return r.getHandlers(n,"save")},r.getLoadHandlers=function(n,e){return r.getHandlers(n,"load",e)},r.getHandlers=function(n,e,t){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(n,t);i!==null&&o.push(i)}),o},r}(),Cr="://",Dn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(n,e){E(n!=null,function(){return"scheme must not be undefined or null."}),n.endsWith(Cr)&&(n=n.slice(0,n.indexOf(Cr))),E(n.length>0,function(){return"scheme must not be an empty string."});var t=r.getInstance();E(t.managers[n]==null,function(){return"A model store manager is already registered for scheme '"+n+"'."}),t.managers[n]=e},r.getManager=function(n){var e=this.getInstance().managers[n];if(e==null)throw new Error("Cannot find model manager for scheme '"+n+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function xa(r){if(r.indexOf(Cr)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Dn.getSchemes().join(","));return{scheme:r.split(Cr)[0],path:r.split(Cr)[1]}}function Cc(r,n,e){return e===void 0&&(e=!1),ee(this,void 0,void 0,function(){var t,o,a,i,s,u,c,l,f;return te(this,function(p){switch(p.label){case 0:return E(r!==n,function(){return"Old path and new path are the same: '"+r+"'"}),E((t=Ft.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(t.length<2,function(){return"Copying failed because more than one ("+t.length+") load handlers for source URL "+r+"."}),o=t[0],E((a=Ft.getSaveHandlers(n)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+n+"."}),E(a.length<2,function(){return"Copying failed because more than one ("+t.length+") save handlers for destination URL "+n+"."}),i=a[0],s=xa(r).scheme,u=xa(r).path,c=s===xa(r).scheme,[4,o.load()];case 1:return l=p.sent(),e&&c?[4,Dn.getManager(s).removeModel(u)]:[3,3];case 2:p.sent(),p.label=3;case 3:return[4,i.save(l)];case 4:return f=p.sent(),!e||c?[3,6]:[4,Dn.getManager(s).removeModel(u)];case 5:p.sent(),p.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var Gn="models_store",Tn="model_info_store";function Xf(){if(!z().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,n=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(n==null)throw new Error("The current browser does not appear to support IndexedDB.");return n}function ys(r){var n=r.result;n.createObjectStore(Gn,{keyPath:"modelPath"}),n.createObjectStore(Tn,{keyPath:"modelPath"})}var _r=function(){function r(n){if(this.indexedDB=Xf(),n==null||!n)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=n}return r.prototype.save=function(n){return ee(this,void 0,void 0,function(){return te(this,function(e){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,n)]})})},r.prototype.load=function(){return ee(this,void 0,void 0,function(){return te(this,function(n){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(n,e){var t=this;return new Promise(function(o,a){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return ys(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(Gn,"readonly"),c=u.objectStore(Gn).get(t.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+t.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=So(e),p=s.transaction(Tn,"readwrite"),h=p.objectStore(Tn),d=h.put({modelPath:t.modelPath,modelArtifactsInfo:f});d.onsuccess=function(){var m=(l=s.transaction(Gn,"readwrite")).objectStore(Gn).put({modelPath:t.modelPath,modelArtifacts:e,modelArtifactsInfo:f});m.onsuccess=function(){return o({modelArtifactsInfo:f})},m.onerror=function(v){var g=(h=p.objectStore(Tn)).delete(t.modelPath);g.onsuccess=function(){return s.close(),a(m.error)},g.onerror=function(y){return s.close(),a(m.error)}}},d.onerror=function(m){return s.close(),a(d.error)},p.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),_c=function(r){return z().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(_r.URL_SCHEME)?(n=r.slice(_r.URL_SCHEME.length),new _r(n)):null;var n};Ft.registerSaveRouter(_c),Ft.registerLoadRouter(_c);var u1=function(){function r(){this.indexedDB=Xf()}return r.prototype.listModels=function(){return ee(this,void 0,void 0,function(){var n=this;return te(this,function(e){return[2,new Promise(function(t,o){var a=n.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return ys(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(Tn,"readonly"),u=s.objectStore(Tn).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var p=f[l];c[p.modelPath]=p.modelArtifactsInfo}t(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(n){return ee(this,void 0,void 0,function(){var e=this;return te(this,function(t){var o;return n=(o=n).startsWith(_r.URL_SCHEME)?o.slice(_r.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return ys(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Tn,"readwrite"),f=l.objectStore(Tn),p=f.get(n);p.onsuccess=function(){if(p.result==null)return c.close(),i(new Error("Cannot find model with path '"+n+"' in IndexedDB."));var h=f.delete(n),d=function(){var m=(u=c.transaction(Gn,"readwrite")).objectStore(Gn).delete(n);m.onsuccess=function(){return a(p.result.modelArtifactsInfo)},m.onerror=function(v){return i(p.error)}};h.onsuccess=d,h.onerror=function(m){return d(),c.close(),i(p.error)}},p.onerror=function(h){return c.close(),i(p.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(z().getBool("IS_BROWSER"))try{Dn.registerManager(_r.URL_SCHEME,new u1)}catch(r){}var hn="/",br="tensorflowjs_models",Yf="info",c1="model_topology",l1="weight_specs",f1="weight_data",p1="model_metadata";function $f(r){return{info:[br,r,Yf].join(hn),topology:[br,r,c1].join(hn),weightSpecs:[br,r,l1].join(hn),weightData:[br,r,f1].join(hn),modelMetadata:[br,r,p1].join(hn)}}function h1(r){var n=r.split(hn);if(n.length<3)throw new Error("Invalid key format: "+r);return n.slice(1,n.length-1).join(hn)}var Er=function(){function r(n){if(!z().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,n==null||!n)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=n,this.keys=$f(this.modelPath)}return r.prototype.save=function(n){return ee(this,void 0,void 0,function(){var e,t,o;return te(this,function(a){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(n.modelTopology),t=JSON.stringify(n.weightSpecs),o=So(n);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,t),this.LS.setItem(this.keys.weightData,function(i){if(gs)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(n.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,userDefinedMetadata:n.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch(i){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return ee(this,void 0,void 0,function(){var n,e,t,o,a,i,s;return te(this,function(u){if((n=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(n.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(t=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=t,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(gs){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),p=new Uint8Array(f.length),h=0;h<f.length;++h)p.set([f.charCodeAt(h)],h);return p.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),Ec=function(r){return z().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Er.URL_SCHEME)?(n=r.slice(Er.URL_SCHEME.length),new Er(n)):null;var n};Ft.registerSaveRouter(Ec),Ft.registerLoadRouter(Ec);var d1=function(){function r(){E(z().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return ee(this,void 0,void 0,function(){var n,e,t,o,a,i;return te(this,function(s){for(n={},e=br+hn,t=hn+Yf,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(t)&&(i=h1(a),n[i]=JSON.parse(this.LS.getItem(a)));return[2,n]})})},r.prototype.removeModel=function(n){return ee(this,void 0,void 0,function(){var e,t;return te(this,function(o){var a;if(n=(a=n).startsWith(Er.URL_SCHEME)?a.slice(Er.URL_SCHEME.length):a,e=$f(n),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+n+"'");return t=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,t]})})},r}();if(z().getBool("IS_BROWSER"))try{Dn.registerManager(Er.URL_SCHEME,new d1)}catch(r){}var v1="model",m1=".json",g1=".weights.bin";function kc(r){return new Promise(function(n){return setTimeout(n)}).then(r)}var Yi=function(){function r(n){if(!z().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");n.startsWith(r.URL_SCHEME)&&(n=n.slice(r.URL_SCHEME.length)),n!=null&&n.length!==0||(n=v1),this.modelTopologyFileName=n+m1,this.weightDataFileName=n+g1}return r.prototype.save=function(n){return ee(this,void 0,void 0,function(){var e,t,o,a,i,s;return te(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([n.weightData],{type:"application/octet-stream"})),!(n.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return t=[{paths:["./"+this.weightDataFileName],weights:n.weightSpecs}],o={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,kc(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),n.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,kc(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:So(n)}]}})})},r.URL_SCHEME="downloads://",r}(),y1=function(){function r(n){if(n==null||n.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+n);this.files=n}return r.prototype.load=function(){return ee(this,void 0,void 0,function(){var n,e,t=this;return te(this,function(o){return n=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var f=c.weightsManifest;if(f!=null){var p;try{p=t.checkManifestAndWeightFiles(f,e)}catch(v){return void i(v)}var h=[],d=[],m=[];f.forEach(function(v){v.paths.forEach(function(g){d.push(g),m.push(null)}),h.push.apply(h,v.weights)}),f.forEach(function(v){v.paths.forEach(function(g){var y=new FileReader;y.onload=function(b){var x=b.target.result,w=d.indexOf(g);m[w]=x,m.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:h,weightData:ou(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},y.onerror=function(b){return i("Failed to weights data from file of path '"+g+"'.")},y.readAsArrayBuffer(p[g])})})}else i(new Error("weightManifest field is missing from file "+n.name))}else i(new Error("modelTopology field is missing from file "+n.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+n.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(n)})]})})},r.prototype.checkManifestAndWeightFiles=function(n,e){for(var t=[],o=e.map(function(u){return wc(u.name)}),a={},i=0,s=n;i<s.length;i++)s[i].paths.forEach(function(u){var c=wc(u);if(t.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(t.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(t.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+t.length+") and the number of weight files provided ("+e.length+").");return a},r}();function Ic(r,n,e,t){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e==null?0:e,t=t==null?1:t);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(t-e);return n(s),i}),a}))}function Jf(r,n){return ee(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l;return te(this,function(f){switch(f.label){case 0:return n==null&&(n={}),e=n.fetchFunc==null?z().platform.fetch:n.fetchFunc,t=r.map(function(p){return e(p,n.requestInit,{isBinary:!0})}),o=0,a=.5,n.onProgress!=null?[3,2]:[4,Promise.all(t)];case 1:return i=f.sent(),[3,4];case 2:return[4,Ic(t,n.onProgress,o,a)];case 3:i=f.sent(),f.label=4;case 4:return s=i.map(function(p){return p.arrayBuffer()}),u=.5,c=1,n.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,Ic(s,n.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function Rc(r){var n=this;return function(e,t,o){return t===void 0&&(t=""),ee(n,void 0,void 0,function(){var a,i,s,u,c,l,f,p,h,d;return te(this,function(m){switch(m.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(v,g){var y=0;v.weights.forEach(function(b){var x="quantization"in b?b.quantization.dtype:b.dtype,w=ms[x]*ne(b.shape),C=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:b,groupOffset:y,sizeBytes:w})};o!=null?o.forEach(function(S,R){S===b.name&&(C(),s[R]=!0)}):C(),u.push(b.name),y+=w})}),!s.every(function(v){return v}))throw c=o.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,g,y){return g&&v.push(y),v},[]),f=[],l.forEach(function(v){e[v].paths.forEach(function(g){var y=t+(t.endsWith("/")?"":"/")+g;f.push(y)})}),[4,r(f)];case 1:return p=m.sent(),h={},d=0,l.forEach(function(v){for(var g=e[v].paths.length,y=0,b=0;b<g;b++)y+=p[d+b].byteLength;for(var x=new ArrayBuffer(y),w=new Uint8Array(x),C=0,S=0;S<g;S++){var R=new Uint8Array(p[d+S]);w.set(R,C),C+=R.byteLength}i[v].forEach(function(k){var I=Kf(x.slice(k.groupOffset,k.groupOffset+k.sizeBytes),[k.manifestEntry]);for(var A in I)h[A]=I[A]}),d+=g}),[2,h]}})})}}Ft.registerSaveRouter(function(r){return z().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Yi.URL_SCHEME)?function(n){return n===void 0&&(n="model"),new Yi(n)}(r.slice(Yi.URL_SCHEME.length)):null});var Qf=function(){function r(n,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=z().platform.fetch,E(n!=null&&n.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(n)&&E(n.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+n.length+")."}),this.path=n,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(n){return ee(this,void 0,void 0,function(){var e,t,o,a;return te(this,function(i){switch(i.label){case 0:if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,t=[{paths:["./model.weights.bin"],weights:n.weightSpecs}],o={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,userDefinedMetadata:n.userDefinedMetadata,weightsManifest:t},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),n.weightData!=null&&e.body.append("model.weights.bin",new Blob([n.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:So(n),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return ee(this,void 0,void 0,function(){var n,e,t,o,a,i,s,u,c,l,f,p;return te(this,function(h){switch(h.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(n=h.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+n.status+". Please verify this URL points to the model JSON of the model to load.");h.label=2;case 2:return h.trys.push([2,4,,5]),[4,n.json()];case 3:return e=h.sent(),[3,5];case 4:throw h.sent(),t="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:p=h.sent(),l=p[0],f=p[1],h.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(n){return ee(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l,f,p;return te(this,function(h){switch(h.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,t=function(d){var m=d.lastIndexOf("/"),v=d.lastIndexOf("?"),g=d.substring(0,m),y=v>m?d.substring(v):"";return[g+"/",y]}(e),o=t[0],a=t[1],i=this.weightPathPrefix||o,s=[],u=0,c=n;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],n.forEach(function(d){d.paths.forEach(function(m){f.push(i+m+a)})}),[4,Jf(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return p=h.sent(),[2,[s,ou(p)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function xs(r){return r.match(Qf.URL_SCHEME_REGEX)!=null}var Sc=function(r,n){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return xs(e)}):xs(r))?bs(r,{onProgress:n}):null};function bs(r,n){return new Qf(r,n)}Ft.registerSaveRouter(Sc),Ft.registerLoadRouter(Sc);var $i=function(){function r(n){this.modelArtifacts=n}return r.prototype.load=function(){return ee(this,void 0,void 0,function(){return te(this,function(n){return[2,this.modelArtifacts]})})},r}(),x1=function(){function r(n){this.saveHandler=n}return r.prototype.save=function(n){return ee(this,void 0,void 0,function(){return te(this,function(e){return[2,this.saveHandler(n)]})})},r}(),Ka=Object.freeze({browserFiles:function(r){return new y1(r)},browserHTTPRequest:function(r,n){return bs(r,n)},concatenateArrayBuffers:ou,decodeWeights:Kf,encodeWeights:function(r,n){return ee(this,void 0,void 0,function(){var e,t,o,a,i,s=this;return te(this,function(u){switch(u.label){case 0:for(e=[],t=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],f=Array.isArray(r)?r[c].tensor:r[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var p={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var h=new Promise(function(d){return ee(s,void 0,void 0,function(){var m,v,g,y,b,x,w;return te(this,function(C){switch(C.label){case 0:return[4,f.bytes()];case 1:for(m=C.sent(),v=m.reduce(function(S,R){return S+R.length},0)+Ma*m.length,g=new Uint8Array(v),y=0,b=0;b<m.length;b++)x=m[b],w=new Uint8Array(new Uint32Array([x.length]).buffer),g.set(w,y),y+=Ma,g.set(x,y),y+=x.length;return d(g),[2]}})})});t.push(h)}else t.push(f.data());n!=null&&(p.group=n),e.push(p)},i=0;i<o.length;++i)a(i);return[4,Promise.all(t)];case 1:return[2,{data:s1(u.sent()),specs:e}]}})})},fromMemory:function(r,n,e,t){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new $i(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new $i({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new $i({modelTopology:r,weightSpecs:n,weightData:e,trainingConfig:t}))},getLoadHandlers:function(r,n){return Ft.getLoadHandlers(r,n)},getModelArtifactsInfoForJSON:So,getSaveHandlers:function(r){return Ft.getSaveHandlers(r)},http:bs,isHTTPScheme:xs,loadWeights:function(r,n,e,t){return n===void 0&&(n=""),ee(this,void 0,void 0,function(){return te(this,function(o){return[2,Rc(function(a){return Jf(a,{requestInit:t})})(r,n,e)]})})},registerLoadRouter:function(r){return Ft.registerLoadRouter(r)},registerSaveRouter:function(r){return Ft.registerSaveRouter(r)},weightsLoaderFactory:Rc,withSaveHandler:function(r){return new x1(r)},copyModel:function(r,n){return ee(this,void 0,void 0,function(){return te(this,function(e){return[2,Cc(r,n,!1)]})})},listModels:function(){return ee(this,void 0,void 0,function(){var r,n,e,t,o,a,i;return te(this,function(s){switch(s.label){case 0:r=Dn.getSchemes(),n={},e=0,t=r,s.label=1;case 1:return e<t.length?(o=t[e],[4,Dn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())n[o+Cr+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,n]}})})},moveModel:function(r,n){return ee(this,void 0,void 0,function(){return te(this,function(e){return[2,Cc(r,n,!0)]})})},removeModel:function(r){return ee(this,void 0,void 0,function(){var n;return te(this,function(e){return n=xa(r),[2,Dn.getManager(n.scheme).removeModel(n.path)]})})}}),mr,b1=T({confusionMatrix_:function(r,n,e){var t=_(r,"labels","confusionMatrix"),o=_(n,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(t.rank===1,function(){return"Expected the rank of labels to be 1, but got "+t.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(t.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+t.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=ps(t.asType("int32"),e),i=ps(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}}),Wx=Object.freeze({confusionMatrix:b1}),w1=T({fromPixels_:function(r,n){if(n===void 0&&(n=3),n>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,t=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)t=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Ac("FromPixels",F.backendName)!=null)return F.runKernel("FromPixels",{pixels:r},{numChannels:n});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],f=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,f).data:t||e?s=r.data:(a||o)&&(mr==null&&(mr=document.createElement("canvas").getContext("2d")),mr.canvas.width=l,mr.canvas.height=f,mr.drawImage(r,0,0,l,f),s=mr.getImageData(0,0,l,f).data),n===4)u=new Int32Array(s);else{var p=l*f;u=new Int32Array(p*n);for(var h=0;h<p;h++)for(var d=0;d<n;++d)u[h*n+d]=s[4*h+d]}return La(u,[f,l,n],"int32")}}),Ar=Object.freeze({toPixels:function(r,n){return ee(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l,f,p,h,d,m,v,g,y,b,x,w,C,S,R;return te(this,function(k){switch(k.label){case 0:if(e=_(r,"img","toPixels"),r instanceof Te||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(t=e.shape.slice(0,2),o=t[0],a=t[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=k.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=k.sent(),f=l[0],p=l[1],h=f[0],d=p[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(h<0||d>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+h+" - "+d+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(h<0||d>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+h+" - "+d+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)y=void 0,b=void 0,x=void 0,w=void 0,i===1?(y=s[g]*m,b=s[g]*m,x=s[g]*m,w=255):i===3?(y=s[3*g]*m,b=s[3*g+1]*m,x=s[3*g+2]*m,w=255):i===4&&(y=s[4*g]*m,b=s[4*g+1]*m,x=s[4*g+2]*m,w=s[4*g+3]*m),v[(C=4*g)+0]=Math.round(y),v[C+1]=Math.round(b),v[C+2]=Math.round(x),v[C+3]=Math.round(w);return n!=null&&(n.width=a,n.height=o,S=n.getContext("2d"),R=new ImageData(v,a,o),S.putImageData(R,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:w1}),Zf=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(n,e){return new n(e)},r}(),ep=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(n){r.getMap().classNameMap[n.className]=[n,n.fromConfig]},r}();function Pn(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),ep.register(r)}var zx=Object.freeze({Serializable:Zf,SerializationMap:ep,registerClass:Pn}),C1=.001,tp=.1;function Ji(){return F.backend.floatPrecision()===32?C1:tp}function Qi(r,n,e){var t=!0;if((ot(r)||ot(n))&&(t=!1),ot(r)&&ot(n)&&(t=!0),t){var o=r.constructor.name,a=n.constructor.name;if(o!==a)throw new Error("Arrays are of different type. Actual: "+o+". Expected: "+a)}if(Array.isArray(r)&&Array.isArray(n)){var i=rn(r),s=rn(n);if(!Ue(i,s))throw new Error("Arrays have different shapes. Actual: ["+i+"]. Expected: ["+s+"]")}var u=ot(r)?r:vn(r),c=ot(n)?n:vn(n);if(u.length!==c.length)throw new Error("Arrays have different lengths actual: "+u.length+" vs expected: "+c.length+`.
Actual:   `+u+`.
Expected: `+c+".");for(var l=0;l<c.length;++l){var f=u[l],p=c[l];if(!e(f,p))throw new Error("Arrays differ: actual["+l+"] = "+f+", expected["+l+"] = "+p+`.
Actual:   `+u+`.
Expected: `+c+".")}}function Zi(r,n,e){return!isFinite(r)&&!isFinite(n)||!(isNaN(r)||isNaN(n)||Math.abs(r-n)>e)}var Vx=Object.freeze({TEST_EPSILON_FLOAT16:tp,expectArraysClose:function(r,n,e){return e==null&&(e=Ji()),Qi(r,n,function(t,o){return Zi(t,o,e)})},testEpsilon:Ji,expectPromiseToFail:function(r,n){r().then(function(){return n.fail()},function(){return n()})},expectArraysEqual:function(r,n){var e=typeof n=="string"||typeof n=="number"||typeof n=="boolean"?[n]:n;return Sn(r)||Sn(r[0])||Sn(n)||Sn(n[0])?Qi(r,e,function(t,o){return t==o}):Qi(r,n,function(t,o){return Zi(t,o,0)})},expectNumbersClose:function(r,n,e){if(e==null&&(e=Ji()),!Zi(r,n,e))throw new Error("Numbers differ: actual === "+r+", expected === "+n)},expectValuesInRange:function(r,n,e){for(var t=0;t<r.length;t++)if(r[t]<n||r[t]>e)throw new Error("Value out of range:"+r[t]+" low: "+n+", high: "+e)},expectArrayBuffersEqual:function(r,n){expect(new Float32Array(r)).toEqual(new Float32Array(n))}});var Ux=Object.freeze({gpgpu_util:qv,webgl_util:vd,forceHalfFloat:function(){z().set("WEBGL_FORCE_F16_TEXTURES",!0)},MathBackendWebGL:gf,setWebGLContext:Yc,GPGPUContext:lf}),Zn=function(r){function n(){return r!==null&&r.apply(this,arguments)||this}return jt(n,r),n.prototype.minimize=function(e,t,o){t===void 0&&(t=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return Rt(s),t?i:(i.dispose(),null)},Object.defineProperty(n.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),n.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},n.prototype.computeGradients=function(e,t){return Yd(e,t)},n.prototype.dispose=function(){this.iterations_!=null&&Rt(this.iterations_)},n.prototype.saveIterations=function(){return ee(this,void 0,void 0,function(){return te(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:Y(this.iterations_,"int32")}]})})},n.prototype.getWeights=function(){return ee(this,void 0,void 0,function(){return te(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},n.prototype.setWeights=function(e){return ee(this,void 0,void 0,function(){return te(this,function(t){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},n.prototype.extractIterations=function(e){return ee(this,void 0,void 0,function(){var t;return te(this,function(o){switch(o.label){case 0:return t=this,[4,e[0].tensor.data()];case 1:return t.iterations_=o.sent()[0],[2,e.slice(1)]}})})},n}(Zf);Object.defineProperty(Zn,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var np=function(r){function n(e,t,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=t,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=F.backend.epsilon()),a}return jt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];t.accumulatedGrads[a]==null&&(t.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:q(function(){return be(i).variable(!1)})}),t.accumulatedUpdates[a]==null&&(t.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:q(function(){return be(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=t.accumulatedGrads[a].variable,c=t.accumulatedUpdates[a].variable;q(function(){var l=u.mul(t.rho).add(s.square().mul(1-t.rho)),f=c.add(t.epsilon).sqrt().div(u.add(t.epsilon).sqrt()).mul(s),p=c.mul(t.rho).add(f.square().mul(1-t.rho));u.assign(l),c.assign(p);var h=f.mul(-t.learningRate).add(i);i.assign(h)})}}),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Rt(this.accumulatedGrads.map(function(e){return e.variable})),Rt(this.accumulatedUpdates.map(function(e){return e.variable})))},n.prototype.getWeights=function(){return ee(this,void 0,void 0,function(){var e;return te(this,function(t){switch(t.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},n.prototype.setWeights=function(e){return ee(this,void 0,void 0,function(){var t;return te(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),t=e.length/2,this.accumulatedGrads=e.slice(0,t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(t,2*t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},n.fromConfig=function(e,t){return new e(t.learningRate,t.rho,t.epsilon)},n.className="Adadelta",n}(Zn);Pn(np);var rp=function(r){function n(e,t){t===void 0&&(t=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=t,o.accumulatedGrads=[],o}return jt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];t.accumulatedGrads[a]==null&&(t.accumulatedGrads[a]={originalName:o+"/accumulator",variable:q(function(){return Pt(i.shape,t.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=t.accumulatedGrads[a].variable;q(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(F.backend.epsilon()).sqrt()).mul(-t.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedGrads!=null&&Rt(this.accumulatedGrads.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return ee(this,void 0,void 0,function(){return te(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(t){return{name:t.originalName,tensor:t.variable}}))]}})})},n.prototype.setWeights=function(e){return ee(this,void 0,void 0,function(){return te(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},n.fromConfig=function(e,t){return new e(t.learningRate,t.initialAccumulatorValue)},n.className="Adagrad",n}(Zn);Pn(rp);var op=function(r){function n(e,t,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=t,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],q(function(){i.accBeta1=Y(t).variable(),i.accBeta2=Y(o).variable()}),a==null&&(i.epsilon=F.backend.epsilon()),i}return jt(n,r),n.prototype.applyGradients=function(e){var t=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);q(function(){var a=De(1,t.accBeta1),i=De(1,t.accBeta2);o.forEach(function(s,u){var c=F.registeredVariables[s];t.accumulatedFirstMoment[u]==null&&(t.accumulatedFirstMoment[u]={originalName:s+"/m",variable:q(function(){return be(c).variable(!1)})}),t.accumulatedSecondMoment[u]==null&&(t.accumulatedSecondMoment[u]={originalName:s+"/v",variable:q(function(){return be(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=t.accumulatedFirstMoment[u].variable,p=t.accumulatedSecondMoment[u].variable,h=f.mul(t.beta1).add(l.mul(1-t.beta1)),d=p.mul(t.beta2).add(l.square().mul(1-t.beta2)),m=h.div(a),v=d.div(i);f.assign(h),p.assign(d);var g=m.div(v.sqrt().add(t.epsilon)).mul(-t.learningRate).add(c);c.assign(g)}}),t.accBeta1.assign(t.accBeta1.mul(t.beta1)),t.accBeta2.assign(t.accBeta2.mul(t.beta2))}),this.incrementIterations()},n.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Rt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&Rt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return ee(this,void 0,void 0,function(){var e;return te(this,function(t){switch(t.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},n.prototype.setWeights=function(e){return ee(this,void 0,void 0,function(){var t,o=this;return te(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),q(function(){o.accBeta1.assign(Pa(o.beta1,o.iterations_+1)),o.accBeta2.assign(Pa(o.beta2,o.iterations_+1))}),t=e.length/2,this.accumulatedFirstMoment=e.slice(0,t).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(t,2*t).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},n.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)},n.className="Adam",n}(Zn);Pn(op);var ap=function(r){function n(e,t,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=t,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],q(function(){s.iteration=Y(0).variable(),s.accBeta1=Y(t).variable()}),a==null&&(s.epsilon=F.backend.epsilon()),s}return jt(n,r),n.prototype.applyGradients=function(e){var t=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);q(function(){var a=De(1,t.accBeta1),i=Wt(-t.learningRate,t.iteration.mul(t.decay).add(1));o.forEach(function(s,u){var c=F.registeredVariables[s];t.accumulatedFirstMoment[u]==null&&(t.accumulatedFirstMoment[u]={originalName:s+"/m",variable:be(c).variable(!1)}),t.accumulatedWeightedInfNorm[u]==null&&(t.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:be(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=t.accumulatedFirstMoment[u].variable,p=t.accumulatedWeightedInfNorm[u].variable,h=f.mul(t.beta1).add(l.mul(1-t.beta1)),d=p.mul(t.beta2),m=l.abs(),v=d.maximum(m);f.assign(h),p.assign(v);var g=i.div(a).mul(h.div(v.add(t.epsilon))).add(c);c.assign(g)}}),t.iteration.assign(t.iteration.add(1)),t.accBeta1.assign(t.accBeta1.mul(t.beta1))}),this.incrementIterations()},n.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Rt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&Rt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return ee(this,void 0,void 0,function(){return te(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},n.prototype.setWeights=function(e){return ee(this,void 0,void 0,function(){return te(this,function(t){throw new Error("setWeights() is not implemented for Adamax yet.")})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},n.fromConfig=function(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)},n.className="Adamax",n}(Zn);Pn(ap);var au=function(r){function n(e){var t=r.call(this)||this;return t.learningRate=e,t.setLearningRate(e),t}return jt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=F.registeredVariables[o];q(function(){var u=t.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},n.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=md(Y(-e))},n.prototype.dispose=function(){this.c.dispose()},n.prototype.getWeights=function(){return ee(this,void 0,void 0,function(){return te(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},n.prototype.setWeights=function(e){return ee(this,void 0,void 0,function(){return te(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=t.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate}},n.fromConfig=function(e,t){return new e(t.learningRate)},n.className="SGD",n}(Zn);Pn(au);var ip=function(r){function n(e,t,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=t,a.useNesterov=o,a.accumulations=[],a.m=Y(a.momentum),a}return jt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];t.accumulations[a]==null&&(t.accumulations[a]={originalName:o+"/momentum",variable:q(function(){return be(i).variable(!1)})});var s=t.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&q(function(){var c,l=t.m.mul(s).add(u);c=t.useNesterov?t.c.mul(u.add(l.mul(t.m))).add(i):t.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},n.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Rt(this.accumulations.map(function(e){return e.variable}))},n.prototype.setMomentum=function(e){this.momentum=e},n.prototype.getWeights=function(){return ee(this,void 0,void 0,function(){return te(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(t){return{name:t.originalName,tensor:t.variable}}))]}})})},n.prototype.setWeights=function(e){return ee(this,void 0,void 0,function(){return te(this,function(t){switch(t.label){case 0:return[4,this.extractIterations(e)];case 1:return e=t.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},n.fromConfig=function(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)},n.className="Momentum",n}(au);Pn(ip);var sp=function(r){function n(e,t,o,a,i){t===void 0&&(t=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=t,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=F.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return jt(n,r),n.prototype.applyGradients=function(e){var t=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=F.registeredVariables[o];t.accumulatedMeanSquares[a]==null&&(t.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:q(function(){return be(i).variable(!1)})}),t.accumulatedMoments[a]==null&&(t.accumulatedMoments[a]={originalName:o+"/momentum",variable:q(function(){return be(i).variable(!1)})}),t.accumulatedMeanGrads[a]==null&&t.centered&&(t.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:q(function(){return be(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=t.accumulatedMeanSquares[a].variable,c=t.accumulatedMoments[a].variable;q(function(){var l=u.mul(t.decay).add(s.square().mul(1-t.decay));if(t.centered){var f=t.accumulatedMeanGrads[a].variable,p=f.mul(t.decay).add(s.mul(1-t.decay)),h=c.mul(t.momentum).add(s.mul(t.learningRate).div(l.sub(p.square().add(t.epsilon)).sqrt()));u.assign(l),f.assign(p),c.assign(h);var d=i.sub(h);i.assign(d)}else{var m=u.mul(t.decay).add(s.square().mul(1-t.decay));h=c.mul(t.momentum).add(s.mul(t.learningRate).div(m.add(t.epsilon).sqrt())),u.assign(m),c.assign(h),d=i.sub(h),i.assign(d)}})}}),this.incrementIterations()},n.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Rt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&Rt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&Rt(this.accumulatedMoments.map(function(e){return e.variable}))},n.prototype.getWeights=function(){return ee(this,void 0,void 0,function(){var e;return te(this,function(t){switch(t.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},n.prototype.setWeights=function(e){return ee(this,void 0,void 0,function(){var t;return te(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),t=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(t,2*t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},n.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},n.fromConfig=function(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)},n.className="RMSProp",n}(Zn);Pn(sp);var Wn=function(){function r(){}return r.sgd=function(n){return new au(n)},r.momentum=function(n,e,t){return t===void 0&&(t=!1),new ip(n,e,t)},r.rmsprop=function(n,e,t,o,a){return e===void 0&&(e=.9),t===void 0&&(t=0),o===void 0&&(o=null),a===void 0&&(a=!1),new sp(n,e,t,o,a)},r.adam=function(n,e,t,o){return n===void 0&&(n=.001),e===void 0&&(e=.9),t===void 0&&(t=.999),o===void 0&&(o=null),new op(n,e,t,o)},r.adadelta=function(n,e,t){return n===void 0&&(n=.001),e===void 0&&(e=.95),t===void 0&&(t=null),new np(n,e,t)},r.adamax=function(n,e,t,o,a){return n===void 0&&(n=.002),e===void 0&&(e=.9),t===void 0&&(t=.999),o===void 0&&(o=null),a===void 0&&(a=0),new ap(n,e,t,o,a)},r.adagrad=function(n,e){return e===void 0&&(e=.1),new rp(n,e)},r}(),Gx={sgd:Wn.sgd,momentum:Wn.momentum,adadelta:Wn.adadelta,adagrad:Wn.adagrad,rmsprop:Wn.rmsprop,adamax:Wn.adamax,adam:Wn.adam};Te.prototype.squaredDifference=function(r){return yf(this,r)},O=e1;function Nn(r,n,e){if(e===void 0&&(e=!1),r.beginPath(),n.slice(1).forEach(function(a,i){var s=a.x,u=a.y,c=n[i];r.moveTo(c.x,c.y),r.lineTo(s,u)}),e){var t=n[n.length-1],o=n[0];if(!t||!o)return;r.moveTo(t.x,t.y),r.lineTo(o.x,o.y)}r.stroke()}var Tp=td(Sp(),1),{__extends:$,__assign:Je,__rest:jx,__decorate:Kx,__param:Xx,__metadata:Yx,__awaiter:j,__generator:K,__exportStar:$x,__createBinding:Jx,__values:Qx,__read:Zx,__spread:eb,__spreadArrays:er,__await:tb,__asyncGenerator:nb,__asyncDelegator:rb,__asyncValues:ob,__makeTemplateObject:ab,__importStar:ib,__importDefault:sb,__classPrivateFieldGet:ub,__classPrivateFieldSet:cb}=Tp.default;var $t=function(){function r(n,e){if(!an(n)||!an(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:n,height:e}));this._width=n,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function To(r,n){return r instanceof Te&&r.shape.length===n}function Dp(r){return To(r,2)}function Mn(r){return To(r,3)}function Vt(r){return To(r,4)}function Ap(r){return r%1!==0}function su(r){return r%2===0}function $a(r,n){n===void 0&&(n=2);var e=Math.pow(10,n);return Math.floor(r*e)/e}function uu(r){return r&&r.width&&r.height}function Fp(r,n){var e=r.width,t=r.height,o=n/Math.max(t,e);return new $t(Math.round(e*o),Math.round(t*o))}function Pr(r){return r.reduce(function(n,e){return n.add(e)},new ve(0,0)).div(new ve(r.length,r.length))}function bn(r,n,e){return Array(r).fill(0).map(function(t,o){return n+o*e})}function an(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Ja(r){return an(r)&&0<=r&&r<=1}var ve=function(){function r(n,e){this._x=n,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(n){return new r(this.x+n.x,this.y+n.y)},r.prototype.sub=function(n){return new r(this.x-n.x,this.y-n.y)},r.prototype.mul=function(n){return new r(this.x*n.x,this.y*n.y)},r.prototype.div=function(n){return new r(this.x/n.x,this.y/n.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}();var it=function(){function r(n,e){e===void 0&&(e=!0);var t=n||{},o=[t.left,t.top,t.right,t.bottom].every(an),a=[t.x,t.y,t.width,t.height].every(an);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(t));var i=a?[t.x,t.y,t.width,t.height]:[t.left,t.top,t.right-t.left,t.bottom-t.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(n){return!!n&&[n.x,n.y,n.width,n.height].every(an)},r.assertIsValidBox=function(n,e,t){if(t===void 0&&(t=!1),!r.isRect(n))throw new Error(e+" - invalid box: "+JSON.stringify(n)+", expected object with properties x, y, width, height");if(!t&&(n.width<0||n.height<0))throw new Error(e+" - width ("+n.width+") and height ("+n.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new ve(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new ve(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new ve(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new ve(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var n=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=n[0],t=n[1],o=n[2],a=n[3];return new r({x:e,y:t,width:o,height:a})},r.prototype.floor=function(){var n=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=n[0],t=n[1],o=n[2],a=n[3];return new r({x:e,y:t,width:o,height:a})},r.prototype.toSquare=function(){var n=this,e=n.x,t=n.y,o=n.width,a=n.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(t-=i/2,a+=i),new r({x:e,y:t,width:o,height:a})},r.prototype.rescale=function(n){var e=uu(n)?n.width:n,t=uu(n)?n.height:n;return new r({x:this.x*e,y:this.y*t,width:this.width*e,height:this.height*t})},r.prototype.pad=function(n,e){var t=[this.x-n/2,this.y-e/2,this.width+n,this.height+e],o=t[0],a=t[1],i=t[2],s=t[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(n,e){var t=this,o=t.x,a=t.y,i=t.right,s=t.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,f=s-c,p=Math.min(l,n-u),h=Math.min(f,e-c);return new r({x:u,y:c,width:p,height:h}).floor()},r.prototype.shift=function(n,e){var t=this,o=t.width,a=t.height,i=this.x+n,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(n,e){var t=this.width+1,o=this.height+1,a=1,i=1,s=t,u=o,c=this.left,l=this.top,f=this.right,p=this.bottom;return f>e&&(s=-f+e+t,f=e),p>n&&(u=-p+n+o,p=n),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:p,x:c,ex:f,w:t,h:o}},r.prototype.calibrate=function(n){return new r({left:this.left+n.left*this.width,top:this.top+n.top*this.height,right:this.right+n.right*this.width,bottom:this.bottom+n.bottom*this.height}).toSquare().round()},r}();var tr=function(r){$(n,r);function n(e,t,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:t,right:o,bottom:a},i)||this}return n}(it);var Qa=function(){function r(n,e,t,o,a){this._imageDims=new $t(a.width,a.height),this._score=n,this._classScore=e,this._className=t,this._box=new it(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new it(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(n,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:n,height:e})},r}();var Ve=function(r){$(n,r);function n(e,t,o){return r.call(this,e,e,"",t,o)||this}return n.prototype.forSize=function(e,t){var o=r.prototype.forSize.call(this,e,t),a=o.score,i=o.relativeBox,s=o.imageDims;return new n(a,i,s)},n}(Qa);function Pp(r,n,e){e===void 0&&(e=!0);var t=Math.max(0,Math.min(r.right,n.right)-Math.max(r.left,n.left)),o=Math.max(0,Math.min(r.bottom,n.bottom)-Math.max(r.top,n.top)),a=t*o;return e?a/(r.area+n.area-a):a/Math.min(r.area,n.area)}function Np(r){var n=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),t=n.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=n.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new tr(t,o,a,i)}function wn(r,n,e,t){t===void 0&&(t=!0);for(var o=n.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],p=r[s],h=r[f];c.push(Pp(p,h,t))}o=o.filter(function(d,m){return c[m]<=e})};o.length>0;)i();return a}function sn(r,n){return q(function(){var e=n[0],t=n[1],o=n[2],a=Pt(er(r.shape.slice(0,3),[1]),e),i=Pt(er(r.shape.slice(0,3),[1]),t),s=Pt(er(r.shape.slice(0,3),[1]),o),u=Me([a,i,s],3);return De(r,u)})}function Mp(r,n){return n===void 0&&(n=!1),q(function(){var e=r.shape.slice(1),t=e[0],o=e[1];if(t===o)return r;var a=Math.abs(t-o),i=Math.round(a*(n?.5:1)),s=t>o?2:1,u=function(h){var d=r.shape.slice();return d[s]=h,Pt(d,0)},c=u(i),l=a-c.shape[s],f=n&&l?u(l):null,p=[f,r,c].filter(function(h){return!!h}).map(function(h){return h.toFloat()});return Me(p,s)})}function Za(r){return 1/(1+Math.exp(-r))}var Nr=function(r){$(n,r);function n(e,t,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:t,width:o,height:a},i)||this}return n}(it);var E1=.5,k1=.43,I1=.45,Cn=function(){function r(n,e,t){t===void 0&&(t=new ve(0,0));var o=e.width,a=e.height;this._imgDims=new $t(o,a),this._shift=t,this._positions=n.map(function(i){return i.mul(new ve(o,a)).add(t)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new ve(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var n=this;return this._positions.map(function(e){return e.sub(n._shift).div(new ve(n.imageWidth,n.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(n,e){return new this.constructor(this.relativePositions,{width:n,height:e})},r.prototype.shiftBy=function(n,e){return new this.constructor(this.relativePositions,this._imgDims,new ve(n,e))},r.prototype.shiftByPoint=function(n){return this.shiftBy(n.x,n.y)},r.prototype.align=function(n,e){if(e===void 0&&(e={}),n){var t=n instanceof Ve?n.box.floor():new it(n);return this.shiftBy(t.x,t.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var n=this.getRefPointsForAlignment(),e=n[0],t=n[1],o=n[2],a=function(f){return o.sub(f).magnitude()},i=(a(e)+a(t))/2,s=Math.floor(i/I1),u=Pr(n),c=Math.floor(Math.max(0,u.x-E1*s)),l=Math.floor(Math.max(0,u.y-k1*s));return new Nr(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(n){var e=Np(this.positions);return e.pad(e.width*n,e.height*n)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}();var Op=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Pr([e[3],e[4]])]},n}(Cn);var ei=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.getJawOutline=function(){return this.positions.slice(0,17)},n.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},n.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},n.prototype.getNose=function(){return this.positions.slice(27,36)},n.prototype.getLeftEye=function(){return this.positions.slice(36,42)},n.prototype.getRightEye=function(){return this.positions.slice(42,48)},n.prototype.getMouth=function(){return this.positions.slice(48,68)},n.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Pr)},n}(Cn);var cu=function(){function r(n,e){this._label=n,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(n){return n===void 0&&(n=!0),""+this.label+(n?" ("+$a(this.distance)+")":"")},r}();var lu=function(r){$(n,r);function n(e,t){var o=r.call(this,e)||this;return o._label=t,o}return n.assertIsValidLabeledBox=function(e,t){if(it.assertIsValidBox(e,t),!an(e.label))throw new Error(t+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),n}(it);var Do=function(){function r(n,e){if(typeof n!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(t){return!(t instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=n,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(n){return Array.from(n)})}},r.fromJSON=function(n){var e=n.descriptors.map(function(t){return new Float32Array(t)});return new r(n.label,e)},r}();var x2=function(r){$(n,r);function n(e,t,o,a){var i=r.call(this,e,t)||this;return i._score=o,i._classScore=a,i}return n.assertIsValidPredictedBox=function(e,t){if(lu.assertIsValidLabeledBox(e,t),!Ja(e.score)||!Ja(e.classScore))throw new Error(t+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(n.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),n}(lu);function Ao(r){return r.detection instanceof Ve}function Mr(r,n){var e={detection:n};return Object.assign({},r,e)}function fu(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},n=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:n}}function ti(r){var n="";if(!r)try{r=_i("fs")}catch(t){n=t.toString()}var e=r?function(t){return new Promise(function(o,a){r.readFile(t,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+n)};return{readFile:e}}function pu(){var r=global.Canvas||global.HTMLCanvasElement,n=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},t=function(){if(n)return new n;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=ti();return Je({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:n||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:t,fetch:o},a)}function hu(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function du(){return typeof global=="object"&&typeof _i=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Ke;function R1(){if(!Ke)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Ke}function vu(r){Ke=r}function mu(){hu()&&vu(fu()),du()&&vu(pu())}function S1(r){if(Ke||mu(),!Ke)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var n=r.Canvas,e=n===void 0?Ke.Canvas:n,t=r.Image,o=t===void 0?Ke.Image:t;Ke.Canvas=e,Ke.Image=o,Ke.createCanvasElement=r.createCanvasElement||function(){return new e},Ke.createImageElement=r.createImageElement||function(){return new o},Ke.ImageData=r.ImageData||Ke.ImageData,Ke.Video=r.Video||Ke.Video,Ke.fetch=r.fetch||Ke.fetch,Ke.readFile=r.readFile||Ke.readFile}var Ce={getEnv:R1,setEnv:vu,initialize:mu,createBrowserEnv:fu,createFileSystem:ti,createNodejsEnv:pu,monkeyPatch:S1,isBrowser:hu,isNodejs:du};mu();function Or(r){return!Ce.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function st(r){var n=Ce.getEnv(),e=n.Canvas,t=n.CanvasRenderingContext2D;if(r instanceof t)return r;var o=Or(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var _n;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(_n||(_n={}));var gu=function(){function r(n){n===void 0&&(n={});var e=n.anchorPosition,t=n.backgroundColor,o=n.fontColor,a=n.fontSize,i=n.fontStyle,s=n.padding;this.anchorPosition=e||_n.TOP_LEFT,this.backgroundColor=t||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}();var yu=function(){function r(n,e,t){t===void 0&&(t={}),this.text=typeof n=="string"?[n]:n instanceof r?n.text:n,this.anchor=e,this.options=new gu(t)}return r.prototype.measureWidth=function(n){var e=this.options.padding;return this.text.map(function(t){return n.measureText(t).width}).reduce(function(t,o){return t<o?o:t},0)+2*e},r.prototype.measureHeight=function(){var n=this.options,e=n.fontSize,t=n.padding;return this.text.length*e+2*t},r.prototype.getUpperLeft=function(n,e){var t=this.options.anchorPosition,o=t===_n.BOTTOM_RIGHT||t===_n.TOP_RIGHT,a=t===_n.BOTTOM_LEFT||t===_n.BOTTOM_RIGHT,i=this.measureWidth(n),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,f=e.height,p=Math.max(Math.min(u,l-i),0),h=Math.max(Math.min(c,f-s),0);return{x:p,y:h}}return{x:u,y:c}},r.prototype.draw=function(n){var e=Or(n),t=st(e),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;t.font=s+"px "+u;var l=this.measureWidth(t),f=this.measureHeight();t.fillStyle=a;var p=this.getUpperLeft(t,e);t.fillRect(p.x,p.y,l,f),t.fillStyle=i,this.text.forEach(function(h,d){var m=c+p.x,v=c+p.y+(d+1)*s;t.fillText(h,m,v)})},r}();var T1=function(){function r(n){n===void 0&&(n={});var e=n.boxColor,t=n.lineWidth,o=n.label,a=n.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=t||2,this.label=o;var i={anchorPosition:_n.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new gu(Object.assign({},i,a))}return r}();var D1=function(){function r(n,e){e===void 0&&(e={}),this.box=new it(n),this.options=new T1(e)}return r.prototype.draw=function(n){var e=st(n),t=this.options,o=t.boxColor,a=t.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=o,e.lineWidth=a,e.strokeRect(s,u,c,l);var f=this.options.label;f&&new yu([f],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(n)},r}();function ni(r){var n=Ce.getEnv(),e=n.Image,t=n.Video;return r instanceof e&&r.complete||r instanceof t&&r.readyState>=3}function Bp(r){return new Promise(function(n,e){if(r instanceof Ce.getEnv().Canvas||ni(r))return n();function t(a){!a.currentTarget||(a.currentTarget.removeEventListener("load",t),a.currentTarget.removeEventListener("error",o),n(a))}function o(a){!a.currentTarget||(a.currentTarget.removeEventListener("load",t),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",t),r.addEventListener("error",o)})}function Fo(r){var n=Ce.getEnv(),e=n.Image,t=n.Video;return r instanceof e?new $t(r.naturalWidth,r.naturalHeight):r instanceof t?new $t(r.videoWidth,r.videoHeight):new $t(r.width,r.height)}function nr(r){var n=r.width,e=r.height,t=Ce.getEnv().createCanvasElement,o=t();return o.width=n,o.height=e,o}function Br(r,n){var e=Ce.getEnv().ImageData;if(!(r instanceof e)&&!ni(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var t=n||Fo(r),o=t.width,a=t.height,i=nr({width:o,height:a});return r instanceof e?st(i).putImageData(r,0,0):st(i).drawImage(r,0,0,o,a),i}function Lp(r,n){return j(this,void 0,void 0,function(){var e,t,o,a,i,s;return K(this,function(u){switch(u.label){case 0:return e=n||Ce.getEnv().createCanvasElement(),t=r.shape.slice(Vt(r)?1:0),o=t[0],a=t[1],i=t[2],s=q(function(){return r.as3D(o,a,i).toInt()}),[4,Ar.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function xu(r){var n=Ce.getEnv(),e=n.Image,t=n.Canvas,o=n.Video;return r instanceof e||r instanceof t||r instanceof o}function Wp(r,n,e){e===void 0&&(e=!1);var t=Ce.getEnv(),o=t.Image,a=t.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=Fo(r),s=n/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=nr({width:n,height:n}),f=r instanceof a?r:Br(r),p=Math.abs(u-c)/2,h=e&&u<c?p:0,d=e&&c<u?p:0;return st(l).drawImage(f,h,d,u,c),l}var rr=function(){function r(n,e){var t=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(n))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+n);this._treatAsBatchInput=e,this._batchSize=n.length,n.forEach(function(o,a){if(Mn(o)){t._imageTensors[a]=o,t._inputDimensions[a]=o.shape;return}if(Vt(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");t._imageTensors[a]=o,t._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof Ce.getEnv().Canvas?o:Br(o);t._canvases[a]=s,t._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var n=this;return bn(this.batchSize,0,1).map(function(e,t){return n.getReshapedInputDimensions(t)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(n){return this.canvases[n]||this.imageTensors[n]},r.prototype.getInputDimensions=function(n){return this._inputDimensions[n]},r.prototype.getInputHeight=function(n){return this._inputDimensions[n][0]},r.prototype.getInputWidth=function(n){return this._inputDimensions[n][1]},r.prototype.getReshapedInputDimensions=function(n){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(n),t=this.getInputHeight(n);return Fp({width:e,height:t},this.inputSize)},r.prototype.toBatchTensor=function(n,e){var t=this;return e===void 0&&(e=!0),this._inputSize=n,q(function(){var o=bn(t.batchSize,0,1).map(function(i){var s=t.getInput(i);if(s instanceof Te){var u=Vt(s)?s:s.expandDims();return u=Mp(u,e),(u.shape[1]!==n||u.shape[2]!==n)&&(u=Ro.resizeBilinear(u,[n,n])),u.as3D(n,n,3)}if(s instanceof Ce.getEnv().Canvas)return Ar.fromPixels(Wp(s,n,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=at(o.map(function(i){return i.toFloat()})).as4D(t.batchSize,n,n,3);return a})},r}();function Re(r){return j(this,void 0,void 0,function(){var n,e,t;return K(this,function(o){switch(o.label){case 0:if(r instanceof rr)return[2,r];if(n=Array.isArray(r)?r:[r],!n.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},t=n.map(Or),t.forEach(function(a,i){if(!xu(a)&&!Mn(a)&&!Vt(a))throw typeof n[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+n[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(Vt(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(t.map(function(a){return xu(a)&&Bp(a)}))];case 1:return o.sent(),[2,new rr(t,Array.isArray(r))]}})})}function Po(r,n){return j(this,void 0,void 0,function(){var e,t,o,a,i,s,u;return K(this,function(c){switch(c.label){case 0:return e=Ce.getEnv().Canvas,t=r,r instanceof e?[3,5]:[4,Re(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,Lp(a)];case 3:i=c.sent(),c.label=4;case 4:t=i,c.label=5;case 5:return s=st(t),u=n.map(function(l){return l instanceof Ve?l.forSize(t.width,t.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(t.width,t.height)}),[2,u.map(function(l){var f=l.x,p=l.y,h=l.width,d=l.height,m=nr({width:h,height:d});return st(m).putImageData(s.getImageData(f,p,h,d),0,0),m})]}})})}function No(r,n){return j(this,void 0,void 0,function(){return K(this,function(e){if(!Mn(r)&&!Vt(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(Vt(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,q(function(){var t=r.shape.slice(Vt(r)?1:0),o=t[0],a=t[1],i=t[2],s=n.map(function(c){return c instanceof Ve?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,f=c.y,p=c.width,h=c.height;return Ys(r.as3D(o,a,i),[f,l,0],[h,p,i])});return u})]})})}function ri(r,n){return j(this,void 0,void 0,function(){var e,t;return K(this,function(o){switch(o.label){case 0:return e=Ce.getEnv().fetch,[4,e(r,n)];case 1:if(t=o.sent(),!(t.status<400))throw new Error("failed to fetch: ("+t.status+") "+t.statusText+", from url: "+t.url);return[2,t]}})})}function zp(r){return j(this,void 0,void 0,function(){return K(this,function(n){switch(n.label){case 0:return[4,ri(r)];case 1:return[2,n.sent().json()]}})})}function oi(r,n){var e=n+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var t=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(t,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=t+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function Vp(r,n){return j(this,void 0,void 0,function(){var e,t,o,a;return K(this,function(i){switch(i.label){case 0:return e=oi(r,n),t=e.manifestUri,o=e.modelBaseUri,[4,zp(t)];case 1:return a=i.sent(),[2,Ka.loadWeights(a,o)]}})})}var Qe=function(){function r(n){this._name=n,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(n){var e=this.traversePropertyPath(n),t=e.obj,o=e.objProp;return t[o]},r.prototype.reassignParamFromPath=function(n,e){var t=this.traversePropertyPath(n),o=t.obj,a=t.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var n=this;return this._paramMappings.map(function(e){var t=e.paramPath;return{path:t,tensor:n.getParamFromPath(t)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(n){return n.tensor instanceof jn})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(n){return!(n.tensor instanceof jn)})},r.prototype.variable=function(){var n=this;this.getFrozenParams().forEach(function(e){var t=e.path,o=e.tensor;n.reassignParamFromPath(t,o.variable())})},r.prototype.freeze=function(){var n=this;this.getTrainableParams().forEach(function(e){var t=e.path,o=e.tensor,a=Ye(o.dataSync());o.dispose(),n.reassignParamFromPath(t,a)})},r.prototype.dispose=function(n){n===void 0&&(n=!0),this.getParamList().forEach(function(e){if(n&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(n){var e=n.tensor;return Array.from(e.dataSync())}).reduce(function(n,e){return n.concat(e)}))},r.prototype.load=function(n){return j(this,void 0,void 0,function(){return K(this,function(e){switch(e.label){case 0:return n instanceof Float32Array?(this.extractWeights(n),[2]):[4,this.loadFromUri(n)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(n){return j(this,void 0,void 0,function(){var e;return K(this,function(t){switch(t.label){case 0:if(n&&typeof n!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,Vp(n,this.getDefaultModelName())];case 1:return e=t.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(n){return j(this,void 0,void 0,function(){var e,t,o,a,i,s,u,c,l,f;return K(this,function(p){switch(p.label){case 0:if(n&&typeof n!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=Ce.getEnv().readFile,t=oi(n,this.getDefaultModelName()),o=t.manifestUri,a=t.modelBaseUri,i=function(h){return Promise.all(h.map(function(d){return e(d).then(function(m){return m.buffer})}))},s=Ka.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[p.sent().toString()]),[4,s(u,a)];case 2:return f=p.sent(),this.loadFromWeightMap(f),[2]}})})},r.prototype.loadFromWeightMap=function(n){var e=this.extractParamsFromWeigthMap(n),t=e.paramMappings,o=e.params;this._paramMappings=t,this._params=o},r.prototype.extractWeights=function(n){var e=this.extractParams(n),t=e.paramMappings,o=e.params;this._paramMappings=t,this._params=o},r.prototype.traversePropertyPath=function(n){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=n.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+n);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),t=e.obj,o=e.objProp;if(!t||!o||!(t[o]instanceof Te))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+n);return{obj:t,objProp:o}},r}();function _t(r,n,e){return q(function(){var t=ko(r,n.depthwise_filter,n.pointwise_filter,e,"same");return t=ae(t,n.bias),t})}function ai(r,n,e){return e===void 0&&(e=!1),q(function(){var t=_e(e?ae($e(r,n.conv0.filters,[2,2],"same"),n.conv0.bias):_t(r,n.conv0,[2,2])),o=_t(t,n.conv1,[1,1]),a=_e(ae(t,o)),i=_t(a,n.conv2,[1,1]);return _e(ae(t,ae(o,i)))})}function Mo(r,n,e,t){return e===void 0&&(e=!1),t===void 0&&(t=!0),q(function(){var o=_e(e?ae($e(r,n.conv0.filters,t?[2,2]:[1,1],"same"),n.conv0.bias):_t(r,n.conv0,t?[2,2]:[1,1])),a=_t(o,n.conv1,[1,1]),i=_e(ae(o,a)),s=_t(i,n.conv2,[1,1]),u=_e(ae(o,ae(a,s))),c=_t(u,n.conv3,[1,1]);return _e(ae(o,ae(a,ae(s,c))))})}function dt(r,n,e,t){return e===void 0&&(e="same"),t===void 0&&(t=!1),q(function(){var o=ae($e(r,n.filters,[1,1],e),n.bias);return t?_e(o):o})}function Ze(r,n){Object.keys(r).forEach(function(e){n.some(function(t){return t.originalPath===e})||r[e].dispose()})}function On(r,n){return function(e,t,o,a){var i=je(r(e*t*o*o),[o,o,e,t]),s=Fe(r(t));return n.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function Lr(r,n){return function(e,t,o){var a=nn(r(e*t),[e,t]),i=Fe(r(t));return n.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var bu=function(){function r(n,e,t){this.depthwise_filter=n,this.pointwise_filter=e,this.bias=t}return r}();function Wr(r,n){return function(e,t,o){var a=je(r(9*e),[3,3,e,1]),i=je(r(e*t),[1,1,e,t]),s=Fe(r(t));return n.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new bu(a,i,s)}}function zr(r){return function(n){var e=r(n+"/depthwise_filter",4),t=r(n+"/pointwise_filter",4),o=r(n+"/bias",1);return new bu(e,t,o)}}function vt(r,n){return function(e,t,o){var a=r[e];if(!To(a,t))throw new Error("expected weightMap["+e+"] to be a Tensor"+t+"D, instead have "+a);return n.push({originalPath:e,paramPath:o||e}),a}}function et(r){var n=r;function e(o){var a=n.slice(0,o);return n=n.slice(o),a}function t(){return n}return{extractWeights:e,getRemainingWeights:t}}function ii(r,n){var e=On(r,n),t=Wr(r,n);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):t(i,s,u+"/conv0"),f=t(s,s,u+"/conv1"),p=t(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:p}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),f=l.conv0,p=l.conv1,h=l.conv2,d=t(s,s,u+"/conv3");return{conv0:f,conv1:p,conv2:h,conv3:d}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function Up(r){var n=[],e=et(r),t=e.extractWeights,o=e.getRemainingWeights,a=ii(t,n).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:n,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function si(r){return function(n){var e=r(n+"/filters",4),t=r(n+"/bias",1);return{filters:e,bias:t}}}function ui(r,n){var e=vt(r,n),t=si(e),o=zr(e);function a(s,u){u===void 0&&(u=!1);var c=u?t(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function i(s,u){u===void 0&&(u=!1);var c=u?t(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),p=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:p}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function Gp(r){var n=[],e=ui(r,n).extractDenseBlock4Params,t={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Ze(r,n),{params:t,paramMappings:n}}var ci=function(r){$(n,r);function n(){return r.call(this,"FaceFeatureExtractor")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("FaceFeatureExtractor - load model before inference");return q(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=sn(o,a).div(Y(255)),s=Mo(i,t.dense0,!0);return s=Mo(s,t.dense1),s=Mo(s,t.dense2),s=Mo(s,t.dense3),s=yn(s,[7,7],[2,2],"valid"),s})},n.prototype.forward=function(e){return j(this,void 0,void 0,function(){var t;return K(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Re(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},n.prototype.extractParamsFromWeigthMap=function(e){return Gp(e)},n.prototype.extractParams=function(e){return Up(e)},n}(Qe);function St(r,n){return q(function(){return ae(Dr(r,n.weights),n.bias)})}function Hp(r,n,e){var t=[],o=et(r),a=o.extractWeights,i=o.getRemainingWeights,s=Lr(a,t),u=s(n,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:t,params:{fc:u}}}function qp(r){var n=[],e=vt(r,n);function t(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:t("fc")};return Ze(r,n),{params:o,paramMappings:n}}function li(r){var n={},e={};return Object.keys(r).forEach(function(t){var o=t.startsWith("fc")?e:n;o[t]=r[t]}),{featureExtractorMap:n,classifierMap:e}}var fi=function(r){$(n,r);function n(e,t){var o=r.call(this,e)||this;return o._faceFeatureExtractor=t,o}return Object.defineProperty(n.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),n.prototype.runNet=function(e){var t=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return q(function(){var a=e instanceof rr?t.faceFeatureExtractor.forwardInput(e):e;return St(a.as2D(a.shape[0],-1),o.fc)})},n.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},n.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),o=t.params,a=t.paramMappings;this._params=o,this._paramMappings=a},n.prototype.extractClassifierParams=function(e){return Hp(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},n.prototype.extractParamsFromWeigthMap=function(e){var t=li(e),o=t.featureExtractorMap,a=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),qp(a)},n.prototype.extractParams=function(e){var t=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*t+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},n}(Qe);var jp=["neutral","happy","sad","angry","fearful","disgusted","surprised"],pi=function(){function r(n){var e=this;if(n.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+n.length);jp.forEach(function(t,o){e[t]=n[o]})}return r.prototype.asSortedArray=function(){var n=this;return jp.map(function(e){return{expression:e,probability:n[e]}}).sort(function(e,t){return t.probability-e.probability})},r}();var Kp=function(r){$(n,r);function n(e){return e===void 0&&(e=new ci),r.call(this,"FaceExpressionNet",e)||this}return n.prototype.forwardInput=function(e){var t=this;return q(function(){return Ct(t.runNet(e))})},n.prototype.forward=function(e){return j(this,void 0,void 0,function(){var t;return K(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Re(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.predictExpressions=function(e){return j(this,void 0,void 0,function(){var t,o,a,i,s=this;return K(this,function(u){switch(u.label){case 0:return[4,Re(e)];case 1:return t=u.sent(),[4,this.forwardInput(t)];case 2:return o=u.sent(),[4,Promise.all(Ie(o).map(function(c){return j(s,void 0,void 0,function(){var l;return K(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new pi(c)}),[2,t.isBatchInput?i:i[0]]}})})},n.prototype.getDefaultModelName=function(){return"face_expression_model"},n.prototype.getClassifierChannelsIn=function(){return 256},n.prototype.getClassifierChannelsOut=function(){return 7},n}(fi);function wu(r,n){var e={expressions:n};return Object.assign({},r,e)}function hi(r){return Ao(r)&&r.landmarks instanceof Cn&&r.unshiftedLandmarks instanceof Cn&&r.alignedRect instanceof Ve}function Vr(r,n){var e=r.detection.box,t=n.shiftBy(e.x,e.y),o=t.align(),a=r.detection.imageDims,i=new Ve(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:t,unshiftedLandmarks:n,alignedRect:i};return Object.assign({},r,s)}var A1=function(){function r(n){n===void 0&&(n={});var e=n.drawLines,t=e===void 0?!0:e,o=n.drawPoints,a=o===void 0?!0:o,i=n.lineWidth,s=n.lineColor,u=n.pointSize,c=n.pointColor;this.drawLines=t,this.drawPoints=a,this.lineWidth=i||1,this.pointSize=u||2,this.lineColor=s||"rgba(0, 255, 255, 1)",this.pointColor=c||"rgba(255, 0, 255, 1)"}return r}();var WE=function(){function r(n,e){e===void 0&&(e={}),this.faceLandmarks=n,this.options=new A1(e)}return r.prototype.draw=function(n){var e=st(n),t=this.options,o=t.drawLines,a=t.drawPoints,i=t.lineWidth,s=t.lineColor,u=t.pointSize,c=t.pointColor;if(o&&this.faceLandmarks instanceof ei&&(e.strokeStyle=s,e.lineWidth=i,Nn(e,this.faceLandmarks.getJawOutline()),Nn(e,this.faceLandmarks.getLeftEyeBrow()),Nn(e,this.faceLandmarks.getRightEyeBrow()),Nn(e,this.faceLandmarks.getNose()),Nn(e,this.faceLandmarks.getLeftEye(),!0),Nn(e,this.faceLandmarks.getRightEye(),!0),Nn(e,this.faceLandmarks.getMouth(),!0)),a){e.strokeStyle=c,e.fillStyle=c;var l=function(f){e.beginPath(),e.arc(f.x,f.y,u,0,2*Math.PI),e.fill()};this.faceLandmarks.positions.forEach(l)}},r}();function P1(r,n){var e=On(r,n),t=Wr(r,n);function o(i,s,u){var c=t(i,s,u+"/separable_conv0"),l=t(s,s,u+"/separable_conv1"),f=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function a(i,s){var u=t(i,i,s+"/separable_conv0"),c=t(i,i,s+"/separable_conv1"),l=t(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:t,extractReductionBlockParams:o,extractMainBlockParams:a}}function Xp(r,n){var e=[],t=et(r),o=t.extractWeights,a=t.getRemainingWeights,i=P1(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),p=c(32,64,"entry_flow/reduction_block_0"),h=c(64,128,"entry_flow/reduction_block_1"),d={conv_in:f,reduction_block_0:p,reduction_block_1:h},m={};bn(n,0,1).forEach(function(b){m["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var v=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),y={reduction_block:v,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:d,middle_flow:m,exit_flow:y}}}function N1(r,n){var e=vt(r,n),t=si(e),o=zr(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=t(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:t,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function Yp(r,n){var e=[],t=N1(r,e),o=t.extractConvParams,a=t.extractSeparableConvParams,i=t.extractReductionBlockParams,s=t.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},p={};bn(n,0,1).forEach(function(v){p["main_block_"+v]=s("middle_flow/main_block_"+v)});var h=i("exit_flow/reduction_block"),d=a("exit_flow/separable_conv"),m={reduction_block:h,separable_conv:d};return Ze(r,e),{params:{entry_flow:f,middle_flow:p,exit_flow:m},paramMappings:e}}function $p(r,n,e){return ae($e(r,n.filters,e,"same"),n.bias)}function Cu(r,n,e){e===void 0&&(e=!0);var t=e?_e(r):r;return t=_t(t,n.separable_conv0,[1,1]),t=_t(_e(t),n.separable_conv1,[1,1]),t=We(t,[3,3],[2,2],"same"),t=ae(t,$p(r,n.expansion_conv,[2,2])),t}function M1(r,n){var e=_t(_e(r),n.separable_conv0,[1,1]);return e=_t(_e(e),n.separable_conv1,[1,1]),e=_t(_e(e),n.separable_conv2,[1,1]),e=ae(e,r),e}var Jp=function(r){$(n,r);function n(e){var t=r.call(this,"TinyXception")||this;return t._numMainBlocks=e,t}return n.prototype.forwardInput=function(e){var t=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return q(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=sn(a,i).div(Y(256)),u=_e($p(s,o.entry_flow.conv_in,[2,2]));return u=Cu(u,o.entry_flow.reduction_block_0,!1),u=Cu(u,o.entry_flow.reduction_block_1),bn(t._numMainBlocks,0,1).forEach(function(c){u=M1(u,o.middle_flow["main_block_"+c])}),u=Cu(u,o.exit_flow.reduction_block),u=_e(_t(u,o.exit_flow.separable_conv,[1,1])),u})},n.prototype.forward=function(e){return j(this,void 0,void 0,function(){var t;return K(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Re(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"tiny_xception_model"},n.prototype.extractParamsFromWeigthMap=function(e){return Yp(e,this._numMainBlocks)},n.prototype.extractParams=function(e){return Xp(e,this._numMainBlocks)},n}(Qe);function Qp(r){var n=[],e=et(r),t=e.extractWeights,o=e.getRemainingWeights,a=Lr(t,n),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:n,params:{fc:{age:i,gender:s}}}}function Zp(r){var n=[],e=vt(r,n);function t(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:t("fc/age"),gender:t("fc/gender")}};return Ze(r,n),{params:o,paramMappings:n}}var Ur;(function(r){r.FEMALE="female",r.MALE="male"})(Ur||(Ur={}));var eh=function(r){$(n,r);function n(e){e===void 0&&(e=new Jp(2));var t=r.call(this,"AgeGenderNet")||this;return t._faceFeatureExtractor=e,t}return Object.defineProperty(n.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),n.prototype.runNet=function(e){var t=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return q(function(){var a=e instanceof rr?t.faceFeatureExtractor.forwardInput(e):e,i=yn(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=St(i,o.fc.age).as1D(),u=St(i,o.fc.gender);return{age:s,gender:u}})},n.prototype.forwardInput=function(e){var t=this;return q(function(){var o=t.runNet(e),a=o.age,i=o.gender;return{age:a,gender:Ct(i)}})},n.prototype.forward=function(e){return j(this,void 0,void 0,function(){var t;return K(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Re(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.predictAgeAndGender=function(e){return j(this,void 0,void 0,function(){var t,o,a,i,s,u,c=this;return K(this,function(l){switch(l.label){case 0:return[4,Re(e)];case 1:return t=l.sent(),[4,this.forwardInput(t)];case 2:return o=l.sent(),a=Ie(o.age),i=Ie(o.gender),s=a.map(function(f,p){return{ageTensor:f,genderTensor:i[p]}}),[4,Promise.all(s.map(function(f){var p=f.ageTensor,h=f.genderTensor;return j(c,void 0,void 0,function(){var d,m,v,g,y;return K(this,function(b){switch(b.label){case 0:return[4,p.data()];case 1:return d=b.sent()[0],[4,h.data()];case 2:return m=b.sent()[0],v=m>.5,g=v?Ur.MALE:Ur.FEMALE,y=v?m:1-m,p.dispose(),h.dispose(),[2,{age:d,gender:g,genderProbability:y}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,t.isBatchInput?u:u[0]]}})})},n.prototype.getDefaultModelName=function(){return"age_gender_model"},n.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},n.prototype.loadClassifierParams=function(e){var t=this.extractClassifierParams(e),o=t.params,a=t.paramMappings;this._params=o,this._paramMappings=a},n.prototype.extractClassifierParams=function(e){return Qp(e)},n.prototype.extractParamsFromWeigthMap=function(e){var t=li(e),o=t.featureExtractorMap,a=t.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Zp(a)},n.prototype.extractParams=function(e){var t=1539,o=e.slice(0,e.length-t),a=e.slice(e.length-t);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},n}(Qe);var di=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.postProcess=function(e,t,o){var a=o.map(function(s){var u=s.width,c=s.height,l=t/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return q(function(){var s=function(p,h){return at([Pt([68],p),Pt([68],h)],1).as2D(1,136).as1D()},u=function(p,h){var d=a[p],m=d.width,v=d.height;return h(m,v)?Math.abs(m-v)/2:0},c=function(p){return u(p,function(h,d){return h<d})},l=function(p){return u(p,function(h,d){return d<h})},f=e.mul(Pt([i,136],t)).sub(at(Array.from(Array(i),function(p,h){return s(c(h),l(h))}))).div(at(Array.from(Array(i),function(p,h){return s(a[h].width,a[h].height)})));return f})},n.prototype.forwardInput=function(e){var t=this;return q(function(){var o=t.runNet(e);return t.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},n.prototype.forward=function(e){return j(this,void 0,void 0,function(){var t;return K(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Re(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.detectLandmarks=function(e){return j(this,void 0,void 0,function(){var t,o,a,i=this;return K(this,function(s){switch(s.label){case 0:return[4,Re(e)];case 1:return t=s.sent(),o=q(function(){return Ie(i.forwardInput(t))}),[4,Promise.all(o.map(function(u,c){return j(i,void 0,void 0,function(){var l,f,p,h,d;return K(this,function(m){switch(m.label){case 0:return p=(f=Array).from,[4,u.data()];case 1:return l=p.apply(f,[m.sent()]),h=l.filter(function(v,g){return su(g)}),d=l.filter(function(v,g){return!su(g)}),[2,new ei(Array(68).fill(0).map(function(v,g){return new ve(h[g],d[g])}),{height:t.getInputHeight(c),width:t.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,t.isBatchInput?a:a[0]]}})})},n.prototype.getClassifierChannelsOut=function(){return 136},n}(fi);var vi=function(r){$(n,r);function n(e){return e===void 0&&(e=new ci),r.call(this,"FaceLandmark68Net",e)||this}return n.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},n.prototype.getClassifierChannelsIn=function(){return 256},n}(di);function th(r){var n=[],e=ui(r,n).extractDenseBlock3Params,t={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Ze(r,n),{params:t,paramMappings:n}}function nh(r){var n=[],e=et(r),t=e.extractWeights,o=e.getRemainingWeights,a=ii(t,n).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:n,params:{dense0:i,dense1:s,dense2:u}}}var rh=function(r){$(n,r);function n(){return r.call(this,"TinyFaceFeatureExtractor")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("TinyFaceFeatureExtractor - load model before inference");return q(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=sn(o,a).div(Y(255)),s=ai(i,t.dense0,!0);return s=ai(s,t.dense1),s=ai(s,t.dense2),s=yn(s,[14,14],[2,2],"valid"),s})},n.prototype.forward=function(e){return j(this,void 0,void 0,function(){var t;return K(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Re(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},n.prototype.extractParamsFromWeigthMap=function(e){return th(e)},n.prototype.extractParams=function(e){return nh(e)},n}(Qe);var oh=function(r){$(n,r);function n(e){return e===void 0&&(e=new rh),r.call(this,"FaceLandmark68TinyNet",e)||this}return n.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},n.prototype.getClassifierChannelsIn=function(){return 128},n}(di);var o3=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n}(vi);function ah(r,n){return ae(Be(r,n.weights),n.biases)}function _u(r,n,e,t,o){o===void 0&&(o="same");var a=n.conv,i=a.filters,s=a.bias,u=$e(r,i,e,o);return u=ae(u,s),u=ah(u,n.scale),t?_e(u):u}function ih(r,n){return _u(r,n,[1,1],!0)}function Eu(r,n){return _u(r,n,[1,1],!1)}function mi(r,n){return _u(r,n,[2,2],!0,"valid")}function O1(r,n){function e(s,u,c){var l=r(s),f=l.length/(u*c*c);if(Ap(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return q(function(){return zt(je(l,[u,f,c,c]),[2,3,1,0])})}function t(s,u,c,l){var f=e(s,u,c),p=Fe(r(u));return n.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:p}}function o(s,u){var c=Fe(r(s)),l=Fe(r(s));return n.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var f=t(s,u,c,l+"/conv"),p=o(u,l+"/scale");return{conv:f,scale:p}}function i(s,u,c,l,f){f===void 0&&(f=!1);var p=a((f?.5:1)*s,u,c,l+"/conv1"),h=a(s,u,c,l+"/conv2");return{conv1:p,conv2:h}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function sh(r){var n=et(r),e=n.extractWeights,t=n.getRemainingWeights,o=[],a=O1(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),p=s(36864,64,3,"conv64_down",!0),h=s(36864,64,3,"conv64_1"),d=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),y=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),x=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),S=q(function(){return zt(nn(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),t().length!==0)throw new Error("weights remaing after extract: "+t().length);var R={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:p,conv64_1:h,conv64_2:d,conv64_3:m,conv128_down:v,conv128_1:g,conv128_2:y,conv256_down:b,conv256_1:x,conv256_2:w,conv256_down_out:C,fc:S};return{params:R,paramMappings:o}}function B1(r,n){var e=vt(r,n);function t(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=t(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function uh(r){var n=[],e=B1(r,n),t=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=t("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),p=o("conv64_3"),h=o("conv128_down"),d=o("conv128_1"),m=o("conv128_2"),v=o("conv256_down"),g=o("conv256_1"),y=o("conv256_2"),b=o("conv256_down_out"),x=r.fc;if(n.push({originalPath:"fc",paramPath:"fc"}),!Dp(x))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+x);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:p,conv128_down:h,conv128_1:d,conv128_2:m,conv256_down:v,conv256_1:g,conv256_2:y,conv256_down_out:b,fc:x};return Ze(r,n),{params:w,paramMappings:n}}function Jt(r,n){var e=ih(r,n.conv1);return e=Eu(e,n.conv2),e=ae(e,r),e=_e(e),e}function Oo(r,n){var e=mi(r,n.conv1);e=Eu(e,n.conv2);var t=yn(r,2,2,"valid"),o=Pe(t.shape),a=t.shape[3]!==e.shape[3],i=t.shape[1]!==e.shape[1]||t.shape[2]!==e.shape[2];if(i){var s=er(e.shape);s[1]=1;var u=Pe(s);e=Me([e,u],1);var c=er(e.shape);c[2]=1;var l=Pe(c);e=Me([e,l],2)}return t=a?Me([t,o],3):t,e=ae(t,e),e=_e(e),e}var ku=function(r){$(n,r);function n(){return r.call(this,"FaceRecognitionNet")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("FaceRecognitionNet - load model before inference");return q(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=sn(o,a).div(Y(256)),s=mi(i,t.conv32_down);s=We(s,3,2,"valid"),s=Jt(s,t.conv32_1),s=Jt(s,t.conv32_2),s=Jt(s,t.conv32_3),s=Oo(s,t.conv64_down),s=Jt(s,t.conv64_1),s=Jt(s,t.conv64_2),s=Jt(s,t.conv64_3),s=Oo(s,t.conv128_down),s=Jt(s,t.conv128_1),s=Jt(s,t.conv128_2),s=Oo(s,t.conv256_down),s=Jt(s,t.conv256_1),s=Jt(s,t.conv256_2),s=Oo(s,t.conv256_down_out);var u=s.mean([1,2]),c=Dr(u,t.fc);return c})},n.prototype.forward=function(e){return j(this,void 0,void 0,function(){var t;return K(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Re(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.computeFaceDescriptor=function(e){return j(this,void 0,void 0,function(){var t,o,a,i=this;return K(this,function(s){switch(s.label){case 0:return[4,Re(e)];case 1:return t=s.sent(),o=q(function(){return Ie(i.forwardInput(t))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,t.isBatchInput?a:a[0]]}})})},n.prototype.getDefaultModelName=function(){return"face_recognition_model"},n.prototype.extractParamsFromWeigthMap=function(e){return uh(e)},n.prototype.extractParams=function(e){return sh(e)},n}(Qe);function Iu(r,n){var e={descriptor:n};return Object.assign({},r,e)}function Ru(r,n){var e={age:n};return Object.assign({},r,e)}function Su(r,n,e){var t={gender:n,genderProbability:e};return Object.assign({},r,t)}var Bo=function(){function r(n){var e=n===void 0?{}:n,t=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=t||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function L1(r,n){function e(u,c){var l=je(r(9*u),[3,3,u,1]),f=Fe(r(u)),p=Fe(r(u)),h=Fe(r(u)),d=Fe(r(u));return n.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:p,batch_norm_mean:h,batch_norm_variance:d}}function t(u,c,l,f,p){var h=je(r(u*c*l*l),[l,l,u,c]),d=Fe(r(c));return n.push({paramPath:f+"/filters"},{paramPath:f+"/"+(p?"batch_norm_offset":"bias")}),{filters:h,bias:d}}function o(u,c,l,f){var p=t(u,c,l,f,!0),h=p.filters,d=p.bias;return{filters:h,batch_norm_offset:d}}function a(u,c,l){var f=e(u,l+"/depthwise_conv"),p=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:p}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),f=a(128,128,"mobilenetv1/conv_3"),p=a(128,256,"mobilenetv1/conv_4"),h=a(256,256,"mobilenetv1/conv_5"),d=a(256,512,"mobilenetv1/conv_6"),m=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),y=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),x=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:p,conv_5:h,conv_6:d,conv_7:m,conv_8:v,conv_9:g,conv_10:y,conv_11:b,conv_12:x,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),p=o(256,128,1,"prediction_layer/conv_4"),h=o(128,256,3,"prediction_layer/conv_5"),d=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),v=t(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=t(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),y=t(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=t(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),x=t(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=t(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=t(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),S=t(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),R=t(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),k=t(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),I=t(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),A=t(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),D={box_encoding_predictor:v,class_predictor:g},B={box_encoding_predictor:y,class_predictor:b},M={box_encoding_predictor:x,class_predictor:w},N={box_encoding_predictor:C,class_predictor:S},U={box_encoding_predictor:R,class_predictor:k},W={box_encoding_predictor:I,class_predictor:A};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:p,conv_5:h,conv_6:d,conv_7:m,box_predictor_0:D,box_predictor_1:B,box_predictor_2:M,box_predictor_3:N,box_predictor_4:U,box_predictor_5:W}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function ch(r){var n=[],e=et(r),t=e.extractWeights,o=e.getRemainingWeights,a=L1(t,n),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=La(t(5118*4),[1,5118,4]),f={extra_dim:l};if(n.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:n}}function W1(r,n){var e=vt(r,n);function t(c,l,f){var p=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),h=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:p,batch_norm_offset:h}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",p=l+"/depthwise_conv",h=l+"/pointwise_conv",d=e(f+"/depthwise_weights",4,p+"/filters"),m=e(f+"/BatchNorm/gamma",1,p+"/batch_norm_scale"),v=e(f+"/BatchNorm/beta",1,p+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,p+"/batch_norm_mean"),y=e(f+"/BatchNorm/moving_variance",1,p+"/batch_norm_variance");return{depthwise_conv:{filters:d,batch_norm_scale:m,batch_norm_offset:v,batch_norm_mean:g,batch_norm_variance:y},pointwise_conv:t("MobilenetV1",c,h)}}function a(){return{conv_0:t("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var f=e(c+"/weights",4,l+"/filters"),p=e(c+"/biases",1,l+"/bias");return{filters:f,bias:p}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:t("Prediction",0,"prediction_layer/conv_0"),conv_1:t("Prediction",1,"prediction_layer/conv_1"),conv_2:t("Prediction",2,"prediction_layer/conv_2"),conv_3:t("Prediction",3,"prediction_layer/conv_3"),conv_4:t("Prediction",4,"prediction_layer/conv_4"),conv_5:t("Prediction",5,"prediction_layer/conv_5"),conv_6:t("Prediction",6,"prediction_layer/conv_6"),conv_7:t("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function lh(r){var n=[],e=W1(r,n),t=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(n.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!Mn(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:t(),prediction_layer:o(),output_layer:{extra_dim:a}};return Ze(r,n),{params:i,paramMappings:n}}function Ut(r,n,e){return q(function(){var t=$e(r,n.filters,e,"same");return t=ae(t,n.batch_norm_offset),wo(t,0,6)})}var z1=.0010000000474974513;function V1(r,n,e){return q(function(){var t=Eo(r,n.filters,e,"same");return t=qs(t,n.batch_norm_mean,n.batch_norm_variance,n.batch_norm_offset,n.batch_norm_scale,z1),wo(t,0,6)})}function U1(r){return[2,4,6,12].some(function(n){return n===r})?[2,2]:[1,1]}function fh(r,n){return q(function(){var e=null,t=Ut(r,n.conv_0,[2,2]),o=[n.conv_1,n.conv_2,n.conv_3,n.conv_4,n.conv_5,n.conv_6,n.conv_7,n.conv_8,n.conv_9,n.conv_10,n.conv_11,n.conv_12,n.conv_13];if(o.forEach(function(a,i){var s=i+1,u=U1(s);t=V1(t,a.depthwise_conv,u),t=Ut(t,a.pointwise_conv,[1,1]),s===11&&(e=t)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:t,conv11:e}})}function ph(r,n,e,t,o){var a=r.shape[0],i=Math.min(e,a),s=n.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=t?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var f=l.score,p=c.length-1;p>=0;--p){var h=G1(r,l.boxIndex,c[p]);if(h!==0&&(l.score*=u(h),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function G1(r,n,e){var t=r.arraySync(),o=Math.min(t[n][0],t[n][2]),a=Math.min(t[n][1],t[n][3]),i=Math.max(t[n][0],t[n][2]),s=Math.max(t[n][1],t[n][3]),u=Math.min(t[e][0],t[e][2]),c=Math.min(t[e][1],t[e][3]),l=Math.max(t[e][0],t[e][2]),f=Math.max(t[e][1],t[e][3]),p=(i-o)*(s-a),h=(l-u)*(f-c);if(p<=0||h<=0)return 0;var d=Math.max(o,u),m=Math.max(a,c),v=Math.min(i,l),g=Math.min(s,f),y=Math.max(v-d,0)*Math.max(g-m,0);return y/(p+h-y)}function H1(r){var n=Ie(zt(r,[1,0])),e=[De(n[2],n[0]),De(n[3],n[1])],t=[ae(n[0],Wt(e[0],Y(2))),ae(n[1],Wt(e[1],Y(2)))];return{sizes:e,centers:t}}function q1(r,n){var e=H1(r),t=e.sizes,o=e.centers,a=Ie(zt(n,[1,0])),i=Wt(Be(Ga(Wt(a[2],Y(5))),t[0]),Y(2)),s=ae(Be(Wt(a[0],Y(10)),t[0]),o[0]),u=Wt(Be(Ga(Wt(a[3],Y(5))),t[1]),Y(2)),c=ae(Be(Wt(a[1],Y(10)),t[1]),o[1]);return zt(at([De(s,i),De(c,u),ae(s,i),ae(c,u)]),[1,0])}function hh(r,n,e){return q(function(){var t=r.shape[0],o=q1(wt(qn(e.extra_dim,[t,1,1]),[-1,4]),wt(r,[-1,4]));o=wt(o,[t,o.shape[0]/t,4]);var a=Hs(qt(n,[0,0,1],[-1,-1,-1])),i=qt(a,[0,0,0],[-1,-1,1]);i=wt(i,[t,i.shape[1]]);var s=Ie(o),u=Ie(i);return{boxes:s,scores:u}})}function or(r,n){return q(function(){var e=r.shape[0],t=wt(dt(r,n.box_encoding_predictor),[e,-1,1,4]),o=wt(dt(r,n.class_predictor),[e,-1,3]);return{boxPredictionEncoding:t,classPrediction:o}})}function dh(r,n,e){return q(function(){var t=Ut(r,e.conv_0,[1,1]),o=Ut(t,e.conv_1,[2,2]),a=Ut(o,e.conv_2,[1,1]),i=Ut(a,e.conv_3,[2,2]),s=Ut(i,e.conv_4,[1,1]),u=Ut(s,e.conv_5,[2,2]),c=Ut(u,e.conv_6,[1,1]),l=Ut(c,e.conv_7,[2,2]),f=or(n,e.box_predictor_0),p=or(r,e.box_predictor_1),h=or(o,e.box_predictor_2),d=or(i,e.box_predictor_3),m=or(u,e.box_predictor_4),v=or(l,e.box_predictor_5),g=Me([f.boxPredictionEncoding,p.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,m.boxPredictionEncoding,v.boxPredictionEncoding],1),y=Me([f.classPrediction,p.classPrediction,h.classPrediction,d.classPrediction,m.classPrediction,v.classPrediction],1);return{boxPredictions:g,classPredictions:y}})}var Bn=function(){function r(n){var e=n===void 0?{}:n,t=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=t||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}();var gi=function(r){$(n,r);function n(){return r.call(this,"SsdMobilenetv1")||this}return n.prototype.forwardInput=function(e){var t=this.params;if(!t)throw new Error("SsdMobilenetv1 - load model before inference");return q(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=De(Be(o,Y(.007843137718737125)),Y(1)),i=fh(a,t.mobilenetv1),s=dh(i.out,i.conv11,t.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return hh(u,c,t.output_layer)})},n.prototype.forward=function(e){return j(this,void 0,void 0,function(){var t;return K(this,function(o){switch(o.label){case 0:return t=this.forwardInput,[4,Re(e)];case 1:return[2,t.apply(this,[o.sent()])]}})})},n.prototype.locateFaces=function(e,t){return t===void 0&&(t={}),j(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,p,h,d,m,v,g,y,b,x,w,C,S,R;return K(this,function(k){switch(k.label){case 0:return o=new Bn(t),a=o.maxResults,i=o.minConfidence,[4,Re(e)];case 1:for(s=k.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],p=l[0],h=1;h<c.length;h++)c[h].dispose(),l[h].dispose();return v=(m=Array).from,[4,p.data()];case 2:return d=v.apply(m,[k.sent()]),g=.5,y=ph(f,d,a,g,i),b=s.getReshapedInputDimensions(0),x=s.inputSize,w=x/b.width,C=x/b.height,S=f.arraySync(),R=y.map(function(I){var A=[Math.max(0,S[I][0]),Math.min(1,S[I][2])].map(function(W){return W*C}),D=A[0],B=A[1],M=[Math.max(0,S[I][1]),Math.min(1,S[I][3])].map(function(W){return W*w}),N=M[0],U=M[1];return new Ve(d[I],new Nr(N,D,U-N,B-D),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),p.dispose(),[2,R]}})})},n.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},n.prototype.extractParamsFromWeigthMap=function(e){return lh(e)},n.prototype.extractParams=function(e){return ch(e)},n}(Qe);var CI=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n}(gi);var vh=.4,mh=[new ve(.738768,.874946),new ve(2.42204,2.65704),new ve(4.30971,7.04493),new ve(10.246,4.59428),new ve(12.6868,11.8741)],gh=[new ve(1.603231,2.094468),new ve(6.041143,7.080126),new ve(2.882459,3.518061),new ve(4.266906,5.178857),new ve(9.041765,10.66308)],yh=[117.001,114.697,97.404],xh="tiny_yolov2_model",bh="tiny_yolov2_separable_conv_model";var yi=function(r){return typeof r=="number"};function wh(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!yi(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(n){return typeof n=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(n){return n||{}}).every(function(n){return yi(n.x)&&yi(n.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(yi)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function Gr(r){return q(function(){var n=Be(r,Y(.10000000149011612));return ae(_e(De(r,n)),n)})}function En(r,n){return q(function(){var e=gn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=$e(e,n.conv.filters,[1,1],"valid"),e=De(e,n.bn.sub),e=Be(e,n.bn.truediv),e=ae(e,n.conv.bias),Gr(e)})}function kn(r,n){return q(function(){var e=gn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=ko(e,n.depthwise_filter,n.pointwise_filter,[1,1],"valid"),e=ae(e,n.bias),Gr(e)})}function j1(r,n){var e=On(r,n);function t(i,s){var u=Fe(r(i)),c=Fe(r(i));return n.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=t(s,u+"/bn");return{conv:c,bn:l}}var a=Wr(r,n);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function Ch(r,n,e,t){var o=et(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=j1(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,p;if(n.withSeparableConvs){var h=t[0],d=t[1],m=t[2],v=t[3],g=t[4],y=t[5],b=t[6],x=t[7],w=t[8],C=n.isFirstLayerConv2d?c(h,d,3,"conv0"):f(h,d,"conv0"),S=f(d,m,"conv1"),R=f(m,v,"conv2"),k=f(v,g,"conv3"),I=f(g,y,"conv4"),A=f(y,b,"conv5"),D=x?f(b,x,"conv6"):void 0,B=w?f(x,w,"conv7"):void 0,M=c(w||x||b,5*e,1,"conv8");p={conv0:C,conv1:S,conv2:R,conv3:k,conv4:I,conv5:A,conv6:D,conv7:B,conv8:M}}else{var h=t[0],d=t[1],m=t[2],v=t[3],g=t[4],y=t[5],b=t[6],x=t[7],w=t[8],C=l(h,d,"conv0"),S=l(d,m,"conv1"),R=l(m,v,"conv2"),k=l(v,g,"conv3"),I=l(g,y,"conv4"),A=l(y,b,"conv5"),D=l(b,x,"conv6"),B=l(x,w,"conv7"),M=c(w,5*e,1,"conv8");p={conv0:C,conv1:S,conv2:R,conv3:k,conv4:I,conv5:A,conv6:D,conv7:B,conv8:M}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:p,paramMappings:s}}function K1(r,n){var e=vt(r,n);function t(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=t(s+"/bn");return{conv:u,bn:c}}var i=zr(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function _h(r,n){var e=[],t=K1(r,e),o=t.extractConvParams,a=t.extractConvWithBatchNormParams,i=t.extractSeparableConvParams,s;if(n.withSeparableConvs){var u=n.filterSizes&&n.filterSizes.length||9;s={conv0:n.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return Ze(r,e),{params:s,paramMappings:e}}var Eh;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Eh||(Eh={}));var ar=function(){function r(n){var e=n===void 0?{}:n,t=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=t||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}();var xi=function(r){$(n,r);function n(e){var t=r.call(this,"TinyYolov2")||this;return wh(e),t._config=e,t}return Object.defineProperty(n.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),n.prototype.runTinyYolov2=function(e,t){var o=En(e,t.conv0);return o=We(o,[2,2],[2,2],"same"),o=En(o,t.conv1),o=We(o,[2,2],[2,2],"same"),o=En(o,t.conv2),o=We(o,[2,2],[2,2],"same"),o=En(o,t.conv3),o=We(o,[2,2],[2,2],"same"),o=En(o,t.conv4),o=We(o,[2,2],[2,2],"same"),o=En(o,t.conv5),o=We(o,[2,2],[1,1],"same"),o=En(o,t.conv6),o=En(o,t.conv7),dt(o,t.conv8,"valid",!1)},n.prototype.runMobilenet=function(e,t){var o=this.config.isFirstLayerConv2d?Gr(dt(e,t.conv0,"valid",!1)):kn(e,t.conv0);return o=We(o,[2,2],[2,2],"same"),o=kn(o,t.conv1),o=We(o,[2,2],[2,2],"same"),o=kn(o,t.conv2),o=We(o,[2,2],[2,2],"same"),o=kn(o,t.conv3),o=We(o,[2,2],[2,2],"same"),o=kn(o,t.conv4),o=We(o,[2,2],[2,2],"same"),o=kn(o,t.conv5),o=We(o,[2,2],[1,1],"same"),o=t.conv6?kn(o,t.conv6):o,o=t.conv7?kn(o,t.conv7):o,dt(o,t.conv8,"valid",!1)},n.prototype.forwardInput=function(e,t){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return q(function(){var i=e.toBatchTensor(t,!1).toFloat();return i=o.config.meanRgb?sn(i,o.config.meanRgb):i,i=i.div(Y(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},n.prototype.forward=function(e,t){return j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Re(e)];case 1:return[4,o.apply(this,[a.sent(),t])];case 2:return[2,a.sent()]}})})},n.prototype.detect=function(e,t){return t===void 0&&(t={}),j(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,p,h,d,m,v,g,y=this;return K(this,function(b){switch(b.label){case 0:return o=new ar(t),a=o.inputSize,i=o.scoreThreshold,[4,Re(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=q(function(){return Ie(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return f=b.sent(),u.dispose(),c.dispose(),p=f.map(function(x){return x.box}),h=f.map(function(x){return x.score}),d=f.map(function(x){return x.classScore}),m=f.map(function(x){return y.config.classes[x.label]}),v=wn(p.map(function(x){return x.rescale(a)}),h,this.config.iouThreshold,!0),g=v.map(function(x){return new Qa(h[x],d[x],m[x],p[x],l)}),[2,g]}})})},n.prototype.getDefaultModelName=function(){return""},n.prototype.extractParamsFromWeigthMap=function(e){return _h(e,this.config)},n.prototype.extractParams=function(e){var t=this.config.filterSizes||n.DEFAULT_FILTER_SIZES,o=t?t.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return Ch(e,this.config,this.boxEncodingSize,t)},n.prototype.extractBoxes=function(e,t,o){return j(this,void 0,void 0,function(){var a,i,s,u,c,l,f,p,h,d,m,v,g,y,b,x,w,C,S,R,k,I,A,D,B,M,N,U,W,L=this;return K(this,function(V){switch(V.label){case 0:return a=t.width,i=t.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],f=this.config.anchors.length,p=q(function(){var G=e.reshape([l,l,f,L.boxEncodingSize]),X=G.slice([0,0,0,0],[l,l,f,4]),J=G.slice([0,0,0,4],[l,l,f,1]),Q=L.withClassScores?Ct(G.slice([0,0,0,5],[l,l,f,L.config.classes.length]),3):Y(0);return[X,J,Q]}),h=p[0],d=p[1],m=p[2],v=[],[4,d.array()];case 1:return g=V.sent(),[4,h.array()];case 2:y=V.sent(),b=0,V.label=3;case 3:if(!(b<l))return[3,12];x=0,V.label=4;case 4:if(!(x<l))return[3,11];w=0,V.label=5;case 5:return w<f?(C=Za(g[b][x][w][0]),!o||C>o?(S=(x+Za(y[b][x][w][0]))/l*u,R=(b+Za(y[b][x][w][1]))/l*c,k=Math.exp(y[b][x][w][2])*this.config.anchors[w].x/l*u,I=Math.exp(y[b][x][w][3])*this.config.anchors[w].y/l*c,A=S-k/2,D=R-I/2,B={row:b,col:x,anchor:w},this.withClassScores?[4,this.extractPredictedClass(m,B)]:[3,7]):[3,9]):[3,10];case 6:return W=V.sent(),[3,8];case 7:W={classScore:1,label:0},V.label=8;case 8:M=W,N=M.classScore,U=M.label,v.push(Je({box:new tr(A,D,A+k,D+I),score:C,classScore:C*N,label:U},B)),V.label=9;case 9:return w++,[3,5];case 10:return x++,[3,4];case 11:return b++,[3,3];case 12:return h.dispose(),d.dispose(),m.dispose(),[2,v]}})})},n.prototype.extractPredictedClass=function(e,t){return j(this,void 0,void 0,function(){var o,a,i,s;return K(this,function(u){switch(u.label){case 0:return o=t.row,a=t.col,i=t.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},n.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],n}(Qe);var Tu=function(r){$(n,r);function n(e){e===void 0&&(e=!0);var t=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:vh,classes:["face"]},e?{anchors:gh,meanRgb:yh}:{anchors:mh,withClassScores:!0});return t=r.call(this,o)||this,t}return Object.defineProperty(n.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),n.prototype.locateFaces=function(e,t){return j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return[4,this.detect(e,t)];case 1:return o=a.sent(),[2,o.map(function(i){return new Ve(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},n.prototype.getDefaultModelName=function(){return this.withSeparableConvs?bh:xh},n.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},n}(xi);var bi=function(r){$(n,r);function n(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return n}(ar);var un=function(){function r(){}return r.prototype.then=function(n){return j(this,void 0,void 0,function(){var e;return K(this,function(t){switch(t.label){case 0:return e=n,[4,this.run()];case 1:return[2,e.apply(void 0,[t.sent()])]}})})},r.prototype.run=function(){return j(this,void 0,void 0,function(){return K(this,function(n){throw new Error("ComposableTask - run is not implemented")})})},r}();function ir(r,n,e,t,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),j(this,void 0,void 0,function(){var a,i,s,u,c;return K(this,function(l){switch(l.label){case 0:return a=r.map(function(f){return hi(f)?o(f):f.detection}),s=t,s?[3,5]:n instanceof Te?[4,No(n,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Po(n,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(f){return f instanceof Te&&f.dispose()}),[2,c]}})})}function Hr(r,n,e,t,o){return j(this,void 0,void 0,function(){var a=this;return K(this,function(i){return[2,ir([r],n,function(s){return j(a,void 0,void 0,function(){return K(this,function(u){return[2,e(s[0])]})})},t,o)]})})}function kh(r){return q(function(){return at(Ie(r,3).reverse(),3)})}var Lo=2,sr=12;function X1(r,n){var e=On(r,n),t=Lr(r,n);function o(c,l){var f=Fe(r(c));return n.push({paramPath:l}),f}function a(c,l,f){f===void 0&&(f=!1);var p=e(c[0],c[1],3,l+"/conv1"),h=o(c[1],l+"/prelu1_alpha"),d=e(c[1],c[2],3,l+"/conv2"),m=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:p,prelu1_alpha:h,conv2:d,prelu2_alpha:m,conv3:v,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return Je(Je({},c),{conv4_1:l,conv4_2:f})}function s(){var c=a([3,28,48,64],"rnet",!0),l=t(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),p=t(128,2,"rnet/fc2_1"),h=t(128,4,"rnet/fc2_2");return Je(Je({},c),{fc1:l,prelu4_alpha:f,fc2_1:p,fc2_2:h})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),p=t(1152,256,"onet/fc1"),h=o(256,"onet/prelu5_alpha"),d=t(256,2,"onet/fc2_1"),m=t(256,4,"onet/fc2_2"),v=t(256,10,"onet/fc2_3");return Je(Je({},c),{conv4:l,prelu4_alpha:f,fc1:p,prelu5_alpha:h,fc2_1:d,fc2_2:m,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function Ih(r){var n=et(r),e=n.extractWeights,t=n.getRemainingWeights,o=[],a=X1(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),f=u();if(t().length!==0)throw new Error("weights remaing after extract: "+t().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function Y1(r,n){var e=vt(r,n);function t(l){var f=e(l+"/weights",4,l+"/filters"),p=e(l+"/bias",1);return{filters:f,bias:p}}function o(l){var f=e(l+"/weights",2),p=e(l+"/bias",1);return{weights:f,bias:p}}function a(l){return e(l,1)}function i(l){var f=t(l+"/conv1"),p=a(l+"/prelu1_alpha"),h=t(l+"/conv2"),d=a(l+"/prelu2_alpha"),m=t(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:p,conv2:h,prelu2_alpha:d,conv3:m,prelu3_alpha:v}}function s(){var l=i("pnet"),f=t("pnet/conv4_1"),p=t("pnet/conv4_2");return Je(Je({},l),{conv4_1:f,conv4_2:p})}function u(){var l=i("rnet"),f=o("rnet/fc1"),p=a("rnet/prelu4_alpha"),h=o("rnet/fc2_1"),d=o("rnet/fc2_2");return Je(Je({},l),{fc1:f,prelu4_alpha:p,fc2_1:h,fc2_2:d})}function c(){var l=i("onet"),f=t("onet/conv4"),p=a("onet/prelu4_alpha"),h=o("onet/fc1"),d=a("onet/prelu5_alpha"),m=o("onet/fc2_1"),v=o("onet/fc2_2"),g=o("onet/fc2_3");return Je(Je({},l),{conv4:f,prelu4_alpha:p,fc1:h,prelu5_alpha:d,fc2_1:m,fc2_2:v,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function Rh(r){var n=[],e=Y1(r,n),t=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=t(),s=o(),u=a();return Ze(r,n),{params:{pnet:i,rnet:s,onet:u},paramMappings:n}}function Wo(r,n){var e=n[0],t=n[1];return{height:Math.floor(e*r),width:Math.floor(t*r)}}function Sh(r,n,e){for(var t=e[0],o=e[1],a=sr/r,i=[],s=Math.min(t,o)*a,u=0;s>=12;)i.push(a*Math.pow(n,u)),s=s*n,u+=1;return i}var qr=function(r){$(n,r);function n(e,t,o,a){return r.call(this,{left:e,top:t,right:o,bottom:a},!0)||this}return n}(it);function wi(r){return q(function(){return Be(De(r,Y(127.5)),Y(.0078125))})}function In(r,n){return q(function(){return ae(_e(r),Be(n,Co(_e(Co(r)))))})}function jr(r,n,e){return e===void 0&&(e=!1),q(function(){var t=dt(r,n.conv1,"valid");return t=In(t,n.prelu1_alpha),t=We(t,e?[2,2]:[3,3],[2,2],"same"),t=dt(t,n.conv2,"valid"),t=In(t,n.prelu2_alpha),t=e?t:We(t,[3,3],[2,2],"valid"),t=dt(t,n.conv3,"valid"),t=In(t,n.prelu3_alpha),t})}function Th(r,n){return q(function(){var e=jr(r,n,!0),t=dt(e,n.conv4_1,"valid"),o=ft(Qn(t,3),3),a=Ct(De(t,o),3),i=dt(e,n.conv4_2,"valid");return{prob:a,regions:i}})}function $1(r,n){return q(function(){var e=Wo(n,r.shape.slice(1)),t=e.height,o=e.width,a=Ro.resizeBilinear(r,[t,o]),i=wi(a);return zt(i,[0,2,1,3])})}function J1(r,n,e,t){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=t&&o.push(new ve(s,i));var u=o.map(function(c){var l=new tr(Math.round((c.y*Lo+1)/e),Math.round((c.x*Lo+1)/e),Math.round((c.y*Lo+sr)/e),Math.round((c.x*Lo+sr)/e)),f=a[c.y][c.x],p=n.arraySync(),h=new qr(p[c.y][c.x][0],p[c.y][c.x][1],p[c.y][c.x][2],p[c.y][c.x][3]);return{cell:l,score:f,region:h}});return u}function Dh(r,n,e,t,o){o.stage1=[];var a=n.map(function(p){return q(function(){var h={scale:p},d=$1(r,p),m=Date.now(),v=Th(d,t),g=v.prob,y=v.regions;h.pnet=Date.now()-m;var b=Ie(Ie(g,3)[1])[0],x=Ie(y)[0];return{scoresTensor:b,regionsTensor:x,scale:p,statsForScale:h}})}),i=a.map(function(p){var h=p.scoresTensor,d=p.regionsTensor,m=p.scale,v=p.statsForScale,g=J1(h,d,m,e);if(h.dispose(),d.dispose(),!g.length)return o.stage1.push(v),[];var y=Date.now(),b=wn(g.map(function(x){return x.cell}),g.map(function(x){return x.score}),.5);return v.nms=Date.now()-y,v.numBoxes=b.length,o.stage1.push(v),b.map(function(x){return g[x]})}),s=i.reduce(function(p,h){return p.concat(h)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=wn(s.map(function(p){return p.cell}),s.map(function(p){return p.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(p){return s[p].score}),u=f.map(function(p){return s[p]}).map(function(p){var h=p.cell,d=p.region;return new tr(h.left+d.left*h.width,h.top+d.top*h.height,h.right+d.right*h.width,h.bottom+d.bottom*h.height).toSquare().round()})}return{boxes:u,scores:c}}function Ci(r,n,e){var t=e.width,o=e.height;return j(this,void 0,void 0,function(){var a,i,s,u=this;return K(this,function(c){switch(c.label){case 0:return a=st(r),[4,Promise.all(n.map(function(l){return j(u,void 0,void 0,function(){var f,p,h,d,m,v,g,y;return K(this,function(b){return f=l.padAtBorders(r.height,r.width),p=f.y,h=f.ey,d=f.x,m=f.ex,v=d-1,g=p-1,y=a.getImageData(v,g,m-v,h-g),[2,Ce.isNodejs()?Br(y):createImageBitmap(y)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var f=nr({width:t,height:o}),p=st(f);p.drawImage(l,0,0,t,o);for(var h=p.getImageData(0,0,t,o).data,d=[],m=0;m<h.length;m+=4)d.push(h[m+2]),d.push(h[m+1]),d.push(h[m]);s.push(d)}),[2,s.map(function(l){var f=q(function(){var p=zt(je(l,[1,t,o,3]),[0,2,1,3]).toFloat();return wi(p)});return f})]}})})}function Ah(r,n){return q(function(){var e=jr(r,n),t=wt(e,[e.shape[0],n.fc1.weights.shape[0]]),o=St(t,n.fc1),a=In(o,n.prelu4_alpha),i=St(a,n.fc2_1),s=ft(Qn(i,1),1),u=Ct(De(i,s),1),c=St(a,n.fc2_2),l=Ie(u,1)[1];return{scores:l,regions:c}})}function Fh(r,n,e,t,o){return j(this,void 0,void 0,function(){var a,i,s,u,c,l,f,p,h,d,m,v,g,y;return K(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,Ci(r,n,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(x){var w=Ah(x,t);return x.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?Me(s.map(function(x){return x.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[b.sent()]),u.dispose(),p=c.map(function(x,w){return{score:x,idx:w}}).filter(function(x){return x.score>e}).map(function(x){var w=x.idx;return w}),h=p.map(function(x){return n[x]}),d=p.map(function(x){return c[x]}),m=[],v=[],h.length>0&&(a=Date.now(),g=wn(h,d,.7),o.stage2_nms=Date.now()-a,y=g.map(function(x){var w=s[p[x]].regions.arraySync();return new qr(w[0][0],w[0][1],w[0][2],w[0][3])}),v=g.map(function(x){return d[x]}),m=g.map(function(x,w){return h[x].calibrate(y[w])})),s.forEach(function(x){x.regions.dispose(),x.scores.dispose()}),[2,{boxes:m,scores:v}]}})})}function Ph(r,n){return q(function(){var e=jr(r,n);e=We(e,[2,2],[2,2],"same"),e=dt(e,n.conv4,"valid"),e=In(e,n.prelu4_alpha);var t=wt(e,[e.shape[0],n.fc1.weights.shape[0]]),o=St(t,n.fc1),a=In(o,n.prelu5_alpha),i=St(a,n.fc2_1),s=ft(Qn(i,1),1),u=Ct(De(i,s),1),c=St(a,n.fc2_2),l=St(a,n.fc2_3),f=Ie(u,1)[1];return{scores:f,regions:c,points:l}})}function Nh(r,n,e,t,o){return j(this,void 0,void 0,function(){var a,i,s,u,c,l,f,p,h,d,m,v,g,y,b;return K(this,function(x){switch(x.label){case 0:return a=Date.now(),[4,Ci(r,n,{width:48,height:48})];case 1:return i=x.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var C=Ph(w,t);return w.dispose(),C}),o.stage3_onet=Date.now()-a,u=s.length>1?Me(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[x.sent()]),u.dispose(),p=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),h=p.map(function(w){var C=s[w].regions.arraySync();return new qr(C[0][0],C[0][1],C[0][2],C[0][3])}),d=p.map(function(w,C){return n[w].calibrate(h[C])}),m=p.map(function(w){return c[w]}),v=[],g=[],y=[],d.length>0&&(a=Date.now(),b=wn(d,m,.7,!1),o.stage3_nms=Date.now()-a,v=b.map(function(w){return d[w]}),g=b.map(function(w){return m[w]}),y=b.map(function(w,C){return Array(5).fill(0).map(function(S,R){var k=s[w].points.arraySync();return new ve(k[0][R]*(v[C].width+1)+v[C].left,k[0][R+5]*(v[C].height+1)+v[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:v,scores:g,points:y}]}})})}var Du=function(r){$(n,r);function n(){return r.call(this,"Mtcnn")||this}return n.prototype.load=function(e){return j(this,void 0,void 0,function(){return K(this,function(t){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},n.prototype.loadFromDisk=function(e){return j(this,void 0,void 0,function(){return K(this,function(t){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},n.prototype.forwardInput=function(e,t){return t===void 0&&(t={}),j(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,p,h,d,m,v,g,y,b,x,w,C,S,R;return K(this,function(k){switch(k.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=q(function(){return kh(ft(Ar.fromPixels(a)).toFloat())}),c=function(I){return u.dispose(),i.total=Date.now()-s,I},l=u.shape.slice(1),f=l[0],p=l[1],h=new Bo(t),d=h.minFaceSize,m=h.scaleFactor,v=h.maxNumScales,g=h.scoreThresholds,y=h.scaleSteps,b=(y||Sh(d,m,[f,p])).filter(function(I){var A=Wo(I,[f,p]);return Math.min(A.width,A.height)>sr}).slice(0,v),i.scales=b,i.pyramid=b.map(function(I){return Wo(I,[f,p])}),x=Date.now(),[4,Dh(u,b,g[0],o.pnet,i)];case 1:return w=k.sent(),i.total_stage1=Date.now()-x,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,x=Date.now(),[4,Fh(a,w.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=k.sent(),i.total_stage2=Date.now()-x,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,x=Date.now(),[4,Nh(a,C.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return S=k.sent(),i.total_stage3=Date.now()-x,R=S.boxes.map(function(I,A){return Vr(Mr({},new Ve(S.scores[A],new Nr(I.left/p,I.top/f,I.width/p,I.height/f),{height:f,width:p})),new Op(S.points[A].map(function(D){return D.sub(new ve(I.left,I.top)).div(new ve(I.width,I.height))}),{width:I.width,height:I.height}))}),[2,c({results:R,stats:i})]}})})},n.prototype.forward=function(e,t){return t===void 0&&(t={}),j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Re(e)];case 1:return[4,o.apply(this,[a.sent(),t])];case 2:return[2,a.sent().results]}})})},n.prototype.forwardWithStats=function(e,t){return t===void 0&&(t={}),j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Re(e)];case 1:return[2,o.apply(this,[a.sent(),t])]}})})},n.prototype.getDefaultModelName=function(){return"mtcnn_model"},n.prototype.extractParamsFromWeigthMap=function(e){return Rh(e)},n.prototype.extractParams=function(e){return Ih(e)},n}(Qe);var Mh=.4,Oh=[new ve(1.603231,2.094468),new ve(6.041143,7.080126),new ve(2.882459,3.518061),new ve(4.266906,5.178857),new ve(9.041765,10.66308)],Bh=[117.001,114.697,97.404];var Au=function(r){$(n,r);function n(){var e=this,t={withSeparableConvs:!0,iouThreshold:Mh,classes:["face"],anchors:Oh,meanRgb:Bh,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,t)||this,e}return Object.defineProperty(n.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),n.prototype.locateFaces=function(e,t){return j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return[4,this.detect(e,t)];case 1:return o=a.sent(),[2,o.map(function(i){return new Ve(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},n.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},n.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},n}(xi);var tt={ssdMobilenetv1:new gi,tinyFaceDetector:new Au,tinyYolov2:new Tu,mtcnn:new Du,faceLandmark68Net:new vi,faceLandmark68TinyNet:new oh,faceRecognitionNet:new ku,faceExpressionNet:new Kp,ageGenderNet:new eh};var Lh=function(r){return tt.tinyFaceDetector.load(r)};var Wh=function(r){$(n,r);function n(e,t,o){var a=r.call(this)||this;return a.parentTask=e,a.input=t,a.extractedFaces=o,a}return n}(un);var zo=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t,o=this;return K(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,ir(e,this.input,function(i){return j(o,void 0,void 0,function(){return K(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return tt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return t=a.sent(),[2,e.map(function(i,s){return wu(i,t[s])})]}})})},n.prototype.withAgeAndGender=function(){return new Uo(this,this.input)},n}(Wh);var Vo=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t;return K(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Hr(e,this.input,function(a){return tt.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return t=o.sent(),[2,wu(e,t)]}})})},n.prototype.withAgeAndGender=function(){return new Go(this,this.input)},n}(Wh);var Kr=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withAgeAndGender=function(){return new Yr(this,this.input)},n.prototype.withFaceDescriptors=function(){return new Jr(this,this.input)},n}(zo);var Xr=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withAgeAndGender=function(){return new $r(this,this.input)},n.prototype.withFaceDescriptor=function(){return new Qr(this,this.input)},n}(Vo);var zh=function(r){$(n,r);function n(e,t,o){var a=r.call(this)||this;return a.parentTask=e,a.input=t,a.extractedFaces=o,a}return n}(un);var Uo=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t,o=this;return K(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,ir(e,this.input,function(i){return j(o,void 0,void 0,function(){return K(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return tt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return t=a.sent(),[2,e.map(function(i,s){var u=t[s],c=u.age,l=u.gender,f=u.genderProbability;return Ru(Su(i,l,f),c)})]}})})},n.prototype.withFaceExpressions=function(){return new zo(this,this.input)},n}(zh);var Go=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t,o,a,i;return K(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,Hr(e,this.input,function(u){return tt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return t=s.sent(),o=t.age,a=t.gender,i=t.genderProbability,[2,Ru(Su(e,a,i),o)]}})})},n.prototype.withFaceExpressions=function(){return new Vo(this,this.input)},n}(zh);var Yr=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withFaceExpressions=function(){return new Kr(this,this.input)},n.prototype.withFaceDescriptors=function(){return new Jr(this,this.input)},n}(Uo);var $r=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.withFaceExpressions=function(){return new Xr(this,this.input)},n.prototype.withFaceDescriptor=function(){return new Qr(this,this.input)},n}(Go);var Vh=function(r){$(n,r);function n(e,t){var o=r.call(this)||this;return o.parentTask=e,o.input=t,o}return n}(un);var Jr=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t;return K(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,ir(e,this.input,function(a){return Promise.all(a.map(function(i){return tt.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return t=o.sent(),[2,t.map(function(a,i){return Iu(e[i],a)})]}})})},n.prototype.withFaceExpressions=function(){return new Kr(this,this.input)},n.prototype.withAgeAndGender=function(){return new Yr(this,this.input)},n}(Vh);var Qr=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t;return K(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Hr(e,this.input,function(a){return tt.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return t=o.sent(),[2,Iu(e,t)]}})})},n.prototype.withFaceExpressions=function(){return new Xr(this,this.input)},n.prototype.withAgeAndGender=function(){return new $r(this,this.input)},n}(Vh);var Uh=function(r){$(n,r);function n(e,t,o){var a=r.call(this)||this;return a.parentTask=e,a.input=t,a.useTinyLandmarkNet=o,a}return Object.defineProperty(n.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?tt.faceLandmark68TinyNet:tt.faceLandmark68Net},enumerable:!0,configurable:!0}),n}(un);var Gh=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t,o,a,i,s=this;return K(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),t=e.map(function(c){return c.detection}),this.input instanceof Te?[4,No(this.input,t)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,Po(this.input,t)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Te&&c.dispose()}),[2,e.map(function(c,l){return Vr(c,i[l])})]}})})},n.prototype.withFaceExpressions=function(){return new Kr(this,this.input)},n.prototype.withAgeAndGender=function(){return new Yr(this,this.input)},n.prototype.withFaceDescriptors=function(){return new Jr(this,this.input)},n}(Uh);var Hh=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t,o,a,i;return K(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(t=e.detection,this.input instanceof Te?[4,No(this.input,[t])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,Po(this.input,[t])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Te&&u.dispose()}),[2,Vr(e,i)]}})})},n.prototype.withFaceExpressions=function(){return new Xr(this,this.input)},n.prototype.withAgeAndGender=function(){return new $r(this,this.input)},n.prototype.withFaceDescriptor=function(){return new Qr(this,this.input)},n}(Uh);var qh=function(r){$(n,r);function n(e,t){t===void 0&&(t=new Bn);var o=r.call(this)||this;return o.input=e,o.options=t,o}return n}(un);var Fu=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t,o,a;return K(this,function(i){switch(i.label){case 0:return e=this,t=e.input,o=e.options,o instanceof Bo?[4,tt.mtcnn.forward(t,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof bi?function(s){return tt.tinyFaceDetector.locateFaces(s,o)}:o instanceof Bn?function(s){return tt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof ar?function(s){return tt.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(t)]}})})},n.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(t){return j(e,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,t(o.map(function(i){return Mr({},i)}))]}})})})},n.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Gh(this.runAndExtendWithFaceDetections(),this.input,e)},n.prototype.withFaceExpressions=function(){return new zo(this.runAndExtendWithFaceDetections(),this.input)},n.prototype.withAgeAndGender=function(){return new Uo(this.runAndExtendWithFaceDetections(),this.input)},n}(qh);var Q1=function(r){$(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.run=function(){return j(this,void 0,void 0,function(){var e,t;return K(this,function(o){switch(o.label){case 0:return[4,new Fu(this.input,this.options)];case 1:return e=o.sent(),t=e[0],e.forEach(function(a){a.score>t.score&&(t=a)}),[2,t]}})})},n.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(t){return j(e,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,t(o?Mr({},o):void 0)]}})})})},n.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Hh(this.runAndExtendWithFaceDetection(),this.input,e)},n.prototype.withFaceExpressions=function(){return new Vo(this.runAndExtendWithFaceDetection(),this.input)},n.prototype.withAgeAndGender=function(){return new Go(this.runAndExtendWithFaceDetection(),this.input)},n}(qh);function Pu(r,n){return n===void 0&&(n=new Bn),new Fu(r,n)}function jh(r,n){if(r.length!==n.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),t=Array.from(n);return Math.sqrt(e.map(function(o,a){return o-t[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}var hT=function(){function r(n,e){e===void 0&&(e=.6),this._distanceThreshold=e;var t=Array.isArray(n)?n:[n];if(!t.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=t.map(function(i){if(i instanceof Do)return i;if(i instanceof Float32Array)return new Do(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Do(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(n,e){return e.map(function(t){return jh(t,n)}).reduce(function(t,o){return t+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(n){var e=this;return this.labeledDescriptors.map(function(t){var o=t.descriptors,a=t.label;return new cu(a,e.computeMeanDistance(n,o))}).reduce(function(t,o){return t.distance<o.distance?t:o})},r.prototype.findBestMatch=function(n){var e=this.matchDescriptor(n);return e.distance<this.distanceThreshold?e:new cu("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(n){return n.toJSON()})}},r.fromJSON=function(n){var e=n.labeledDescriptors.map(function(t){return Do.fromJSON(t)});return new r(e,n.distanceThreshold)},r}();async function Kh(r="/models"){await Lh(r)}async function Xh(r,n){let e={detections:0,position:{x:0,y:0,z:0}},t=await Pu(r,new bi({scoreThreshold:n}));if(e.detections=t.length,t.length>0){let o=t[0].relativeBox,a={x:o.x+o.width/2,y:o.y+o.height/2},i=t[0].imageWidth<t[0].imageHeight,s=i?.4:.45,u=i?.6:.55,c=.5,l=.6;a.x<s?e.position.x=1:a.x>u?e.position.x=-1:e.position.x=0,a.y<c?e.position.y=1:a.y>l?e.position.y=-1:e.position.y=0}return e}typeof window<"u"&&(window.faceSdk={camera:Fi,faceDetectionAdapter:Xh,loadFaceDetectorModels:Kh});})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */