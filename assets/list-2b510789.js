import{al as c,am as u,p as I,m as b,q as k,x as S,c as C,an as L,ao as A}from"./index-3b979105.js";const N=(()=>c.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),j=(()=>c.reduce((t,e)=>{const s="offset"+u(e);return t[s]={type:[String,Number],default:null},t},{}))(),V=(()=>c.reduce((t,e)=>{const s="order"+u(e);return t[s]={type:[String,Number],default:null},t},{}))(),h={col:Object.keys(N),offset:Object.keys(j),order:Object.keys(V)};function p(t,e,s){let i=t;if(!(s==null||s===!1)){if(e){const n=e.replace(t,"");i+=`-${n}`}return t==="col"&&(i="v-"+i),t==="col"&&(s===""||s===!0)||(i+=`-${s}`),i.toLowerCase()}}const O=["auto","start","end","center","baseline","stretch"],G=I({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...V,alignSelf:{type:String,default:null,validator:t=>O.includes(t)},...b(),...k()},"VCol"),z=S()({name:"VCol",props:G(),setup(t,e){let{slots:s}=e;const i=C(()=>{const n=[];let a;for(a in h)h[a].forEach(l=>{const o=t[l],m=p(a,l,o);m&&n.push(m)});const r=n.some(l=>l.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return L(t.tag,{class:[i.value,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}}),d=["start","end","center"],w=["space-between","space-around","space-evenly"];function f(t,e){return c.reduce((s,i)=>{const n=t+u(i);return s[n]=e(),s},{})}const _=[...d,"baseline","stretch"],E=t=>_.includes(t),v=f("align",()=>({type:String,default:null,validator:E})),F=[...d,...w],$=t=>F.includes(t),P=f("justify",()=>({type:String,default:null,validator:$})),R=[...d,...w,"stretch"],x=t=>R.includes(t),B=f("alignContent",()=>({type:String,default:null,validator:x})),g={align:Object.keys(v),justify:Object.keys(P),alignContent:Object.keys(B)},T={align:"align",justify:"justify",alignContent:"align-content"};function U(t,e,s){let i=T[t];if(s!=null){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${s}`,i.toLowerCase()}}const M=I({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:E},...v,justify:{type:String,default:null,validator:$},...P,alignContent:{type:String,default:null,validator:x},...B,...b(),...k()},"VRow"),D=S()({name:"VRow",props:M(),setup(t,e){let{slots:s}=e;const i=C(()=>{const n=[];let a;for(a in g)g[a].forEach(r=>{const l=t[r],o=U(a,r,l);o&&n.push(o)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return L(t.tag,{class:["v-row",i.value,t.class],style:t.style},(n=s.default)==null?void 0:n.call(s))}}}),y=parseInt("1500"),K=parseInt("300"),J=A("list",{state:()=>({items:[],id:1,timeLeft:y,break:!1,finishedItems:[],currentItem:"",newItem:"",newItemInput:null,editItemInput:[]}),actions:{addItem(t){this.items.push({id:this.id++,list:t,edit:!1,listEdit:t})},findIndexById(t){return this.items.findIndex(e=>e.id===t)},confirmEditItem(t){const e=this.findIndexById(t);e<0||(this.items[e].list=this.items[e].listEdit,this.items[e].edit=!1)},cancelEditItem(t){const e=this.findIndexById(t);e<0||(this.items[e].listEdit=this.items[e].list,this.items[e].edit=!1)},editItem(t){const e=this.findIndexById(t);e<0||(this.items[e].edit=!0)},delItem(t){const e=this.findIndexById(t);e<0||this.items.splice(e,1)},setCurrentItem(){this.currentItem=this.break?"休息溜~":this.items.shift().list},countDown(){this.timeLeft--},setFinishedItem(){this.break||this.finishedItems.push({list:this.currentItem,id:this.id++}),this.currentItem="",this.items.length>0&&(this.break=!this.break),this.timeLeft=this.break?K:y},delFinishedItem(t){const e=this.finishedItems.findIndex(s=>s.id===t);e<0||this.finishedItems.splice(e,1)}},getters:{},persist:{key:"pomodoro-list"}});export{z as V,D as a,J as u};
