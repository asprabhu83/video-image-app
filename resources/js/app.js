(function(e){function t(t){for(var n,c,l=t[0],s=t[1],i=t[2],d=0,f=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a=(r("a2f0"),{class:"h-screen w-screen overflow-hidden bg-white flex flex-col"}),o={class:"relative flex flex-1 flex-row overflow-hidden"},c={class:"w-full h-full relative z-10 scrollbar text-center text-none overflow-auto"};function l(e,t,r,l,s,i){var u=Object(n["t"])("NavBar"),d=Object(n["t"])("Layers"),f=Object(n["t"])("router-view"),b=Object(n["t"])("Design");return Object(n["o"])(),Object(n["d"])("main",a,[Object(n["f"])(u),Object(n["f"])("section",o,[Object(n["f"])(d),Object(n["f"])("section",c,[Object(n["f"])(f)]),Object(n["f"])(b)])])}r("d3b7"),r("ddb0");var s={id:"right-panel",class:"relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"},i=Object(n["f"])("header",{class:"text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 "},[Object(n["f"])("div",{class:"flex items-center leading-5 py-px"},"Design")],-1),u={class:"w-full h-full relative z-10 scrollbar text-none overflow-auto"},d={class:"items-center bg-white mb-2 text-center"},f=Object(n["f"])("option",{value:""},"--- Select ---",-1),b={key:2,id:"presetColors"};function p(e,t,r,a,o,c){return Object(n["o"])(),Object(n["d"])("aside",s,[i,Object(n["f"])("section",u,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["s"])(c.designs,(function(e,r){return Object(n["o"])(),Object(n["d"])("div",{key:r,class:"mt-2"},[Object(n["f"])("h5",d,Object(n["v"])(e.designLabel),1),"select"===e.designType?Object(n["A"])((Object(n["o"])(),Object(n["d"])("select",{key:0,"onUpdate:modelValue":function(t){return e.designValue=t},class:"ml-2",onChange:t[1]||(t[1]=function(e){return c.setValueToLayer()})},[f,(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["s"])(e.values,(function(e,t){return Object(n["o"])(),Object(n["d"])("option",{key:t,value:e.classValue},Object(n["v"])(e.displayText),9,["value"])})),128))],40,["onUpdate:modelValue"])),[[n["x"],e.designValue]]):Object(n["e"])("",!0),"color"===e.designType?Object(n["A"])((Object(n["o"])(),Object(n["d"])("input",{key:1,type:"color",id:"favcolor",name:"favcolor",class:"ml-2","onUpdate:modelValue":function(t){return e.designValue=t},list:"presetColors",onChange:t[2]||(t[2]=function(e){return c.setValueToLayer()})},null,40,["onUpdate:modelValue"])),[[n["y"],e.designValue]]):Object(n["e"])("",!0),"color"===e.designType?(Object(n["o"])(),Object(n["d"])("datalist",b,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["s"])(e.values,(function(e,t){return Object(n["o"])(),Object(n["d"])("option",{key:t},Object(n["v"])(e.displayText),1)})),128))])):Object(n["e"])("",!0)])})),128))])])}r("159b");var j={computed:{designs:function(){return this.$store.state.Designs},Layers:function(){return this.$store.state.Layers}},methods:{setValueToLayer:function(){var e=this;this.Layers.forEach((function(t){t.focusable&&(t.className="",e.designs.forEach((function(e){"color"===e.designType?e.values.forEach((function(r){r.displayText===e.designValue&&(t.className=t.className+r.classValue+" ")})):t.className=t.className+e.designValue+" "})))}))}}};j.render=p;var O=j,m={id:"right-panel",class:"relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"},y=Object(n["f"])("header",{class:"text-white text-xs font-medium flex justify-between items-center p-3 pb-0 "},[Object(n["f"])("div",{class:"flex items-center leading-5 py-px"},"Layers")],-1);function h(e,t,r,a,o,c){return Object(n["o"])(),Object(n["d"])("aside",m,[y,(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["s"])(c.Layers,(function(e,t){return Object(n["o"])(),Object(n["d"])("div",{key:t,class:["block items-center text-xs font-medium p-2 mt-2",e.focusable?"bg-white text-black":"text-white"]},Object(n["v"])(e.layerName),3)})),128))])}var v={computed:{Layers:function(){return this.$store.state.Layers}}};v.render=h;var g=v,x={class:"flex justify-between bg-gray-900 border-b border-gray-600 text-white relative",id:"nav-bar"},w=Object(n["f"])("div",{class:"flex-1 flex items-center"},[Object(n["f"])("a",{href:"/",class:"p-3 h-full flex items-center group border-r border-gray-600"}," K ")],-1);function L(e,t){return Object(n["o"])(),Object(n["d"])("nav",x,[w])}const k={};k.render=L;var T=k,V={name:"App",components:{Design:O,NavBar:T,Layers:g},computed:{Layers:function(){return this.$store.state.Layers}}};V.render=l;var E=V,N=r("6c02"),S={class:"py-8 px-4"},$={method:"post",action:"",enctype:"multipart/form-data",ref:"videoForm",class:"w-full max-w-lg"},A={class:"flex flex-wrap -mx-3 mb-6"},D={class:"w-full  px-3 mb-6 md:mb-0"},P={class:"w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-600 hover:text-white text-purple-600 ease-linear transition-all duration-150"},U=Object(n["f"])("span",{class:"mt-2 text-base leading-normal"},"Select a file",-1),_={key:0,class:"flex flex-wrap -mx-4 -mb-8"};function F(e,t,r,a,o,c){var l=Object(n["t"])("font-awesome-icon");return Object(n["o"])(),Object(n["d"])("section",S,[Object(n["f"])("form",$,[Object(n["f"])("div",A,[Object(n["f"])("div",D,[Object(n["A"])(Object(n["f"])("input",{type:"text",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.formData.title=e}),placeholder:"Enter video title"},null,512),[[n["y"],o.formData.title]])]),Object(n["f"])("label",P,[Object(n["f"])(l,{icon:"cloud-upload-alt",size:"3x"}),U,Object(n["f"])("input",{type:"file",class:"hidden",name:"video",onChange:t[2]||(t[2]=function(){return c.onFileUpload&&c.onFileUpload.apply(c,arguments)})},null,32)])])],512),c.galleries?(Object(n["o"])(),Object(n["d"])("div",_,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["s"])(c.galleries,(function(e,t){return Object(n["o"])(),Object(n["d"])("div",{class:"md:w-1/4 px-4 mb-8",key:t},[Object(n["f"])("img",{class:"rounded shadow-md",src:e,alt:""},null,8,["src"])])})),128))])):Object(n["e"])("",!0)])}var C=r("1da1"),R=(r("96cf"),{name:"App",data:function(){return{formData:{title:"",files:Object}}},methods:{createLayer:function(){var e=this.$store.state.Layers.length+1;this.$store.commit("addLayers",{layerName:"Layer"+e,textLayer:"Text Layer"+e,imgSrc:"./ResumePart6.jpg",editable:!1,focusable:!1,className:""})},onFileUpload:function(e){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$refs.videoForm,n=new FormData(r),a=[],e.next=5,t.axios.post("/api/upload",n).then((function(e){e.data.files.forEach((function(e){a.push("./uploads/"+e)}))}));case 5:t.$store.commit("GET_GALLERIES",{galArray:a});case 6:case"end":return e.stop()}}),e)})))()}},computed:{Layers:function(){return this.$store.state.Layers},galleries:function(){return this.$store.state.galleries}}});R.render=F;var G=R,M=[{path:"/",name:"Home",component:G}],z=Object(N["a"])({history:Object(N["b"])("/"),routes:M}),B=z,I=r("5502"),J=Object(I["a"])({state:{galleries:[]},mutations:{GET_GALLERIES:function(e,t){e.galleries=t.galArray}},actions:{},modules:{}}),H=r("ecee"),K=r("c074"),q=r("ad3d"),Q=r("bc3a"),W=r.n(Q),X=r("2106"),Y=r.n(X);H["c"].add(K["b"],K["a"]);var Z=Object(n["c"])(E);Z.component("font-awesome-icon",q["a"]),Z.config.productionTip=!1,Z.use(J).use(B).use(Y.a,W.a).mount("#app")},a2f0:function(e,t,r){}});
//# sourceMappingURL=app.1c2c020e.js.map