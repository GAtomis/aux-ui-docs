import"./global.6eb459f4.js";import{i as l,f as m,d as i}from"../app.a1e83f42.js";function c(n,o,e){let t=n;return o&&(t+=`__${o}`),e&&(t+=`--${e}`),t}function a(n,o=!1){const e=n?o?`.aux-${n}`:`aux-${n}`:o?".aux":"aux";return{b:()=>c(e),e:s=>s?c(e,s):"",m:s=>s?c(e,"",s):"",em:(s,r)=>s&&r?c(e,s,r):""}}const x={round:Boolean,underline:Boolean,circle:Boolean,color:{type:String,default:""}};function b(n,o){const e=a(),t=a("noble-button");return{classes:l(()=>({[e.m("underline")]:n.underline,[t.b()]:!0,[t.m("transparent")]:!0,[t.m("center")]:!0,[t.m("round")]:n.round,[t.m("circle")]:n.circle})),gs:e,ns:t}}const $=m({name:"AuxNobleButton",props:x,emits:[],setup(n,o){const{classes:e}=b(n);return()=>{var t,u;return i("button",{style:n.color&&`--aux-text-color:${n.color}`,class:e.value},[((u=(t=o.slots).default)==null?void 0:u.call(t))??"noble-button"])}}});export{$ as A,a as u};