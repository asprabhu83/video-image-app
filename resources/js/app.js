(function(e){function t(t){for(var o,c,a=t[0],i=t[1],s=t[2],u=0,f=[];u<a.length;u++)c=a[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(f.length)f.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},l=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var d=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=(n("a2f0"),{class:"h-screen w-screen overflow-hidden bg-white flex flex-col"}),l={class:"relative flex flex-1 flex-row overflow-hidden"},c={class:"w-full h-full relative z-10 scrollbar text-center text-none overflow-auto"};function a(e,t,n,a,i,s){var d=Object(o["t"])("NavBar"),u=Object(o["t"])("Layers"),f=Object(o["t"])("router-view"),b=Object(o["t"])("Design");return Object(o["o"])(),Object(o["d"])("main",r,[Object(o["f"])(d),Object(o["f"])("section",l,[Object(o["f"])(u),Object(o["f"])("section",c,[Object(o["f"])(f)]),Object(o["f"])(b)])])}n("d3b7"),n("ddb0");var i={id:"right-panel",class:"relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"},s=Object(o["f"])("header",{class:"text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 "},[Object(o["f"])("div",{class:"flex items-center leading-5 py-px"},"Design")],-1),d={class:"w-full h-full relative z-10 scrollbar text-none overflow-auto"},u={class:"items-center bg-white mb-2 text-center"},f=Object(o["f"])("option",{value:""},"--- Select ---",-1),b={key:2,id:"presetColors"};function p(e,t,n,r,l,c){return Object(o["o"])(),Object(o["d"])("aside",i,[s,Object(o["f"])("section",d,[(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["s"])(c.designs,(function(e,n){return Object(o["o"])(),Object(o["d"])("div",{key:n,class:"mt-2"},[Object(o["f"])("h5",u,Object(o["v"])(e.designLabel),1),"select"===e.designType?Object(o["A"])((Object(o["o"])(),Object(o["d"])("select",{key:0,"onUpdate:modelValue":function(t){return e.designValue=t},class:"ml-2",onChange:t[1]||(t[1]=function(e){return c.setValueToLayer()})},[f,(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["s"])(e.values,(function(e,t){return Object(o["o"])(),Object(o["d"])("option",{key:t,value:e.classValue},Object(o["v"])(e.displayText),9,["value"])})),128))],40,["onUpdate:modelValue"])),[[o["x"],e.designValue]]):Object(o["e"])("",!0),"color"===e.designType?Object(o["A"])((Object(o["o"])(),Object(o["d"])("input",{key:1,type:"color",id:"favcolor",name:"favcolor",class:"ml-2","onUpdate:modelValue":function(t){return e.designValue=t},list:"presetColors",onChange:t[2]||(t[2]=function(e){return c.setValueToLayer()})},null,40,["onUpdate:modelValue"])),[[o["y"],e.designValue]]):Object(o["e"])("",!0),"color"===e.designType?(Object(o["o"])(),Object(o["d"])("datalist",b,[(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["s"])(e.values,(function(e,t){return Object(o["o"])(),Object(o["d"])("option",{key:t},Object(o["v"])(e.displayText),1)})),128))])):Object(o["e"])("",!0)])})),128))])])}n("159b");var h={computed:{designs:function(){return this.$store.state.Designs},Layers:function(){return this.$store.state.Layers}},methods:{setValueToLayer:function(){var e=this;this.Layers.forEach((function(t){t.focusable&&(t.className="",e.designs.forEach((function(e){"color"===e.designType?e.values.forEach((function(n){n.displayText===e.designValue&&(t.className=t.className+n.classValue+" ")})):t.className=t.className+e.designValue+" "})))}))}}};h.render=p;var j=h,O={id:"right-panel",class:"relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"},g=Object(o["f"])("header",{class:"text-white text-xs font-medium flex justify-between items-center p-3 pb-0 "},[Object(o["f"])("div",{class:"flex items-center leading-5 py-px"},"Layers")],-1);function m(e,t,n,r,l,c){return Object(o["o"])(),Object(o["d"])("aside",O,[g,(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["s"])(c.Layers,(function(e,t){return Object(o["o"])(),Object(o["d"])("div",{key:t,class:["block items-center text-xs font-medium p-2 mt-2",e.focusable?"bg-white text-black":"text-white"]},Object(o["v"])(e.layerName),3)})),128))])}var L={computed:{Layers:function(){return this.$store.state.Layers}}};L.render=m;var w=L,v={class:"flex justify-between bg-gray-900 border-b border-gray-600 text-white relative",id:"nav-bar"},y={class:"flex-1 flex items-center"},x={href:"/",class:"p-3 h-full flex items-center group border-r border-gray-600"};function k(e,t,n,r,l,c){var a=Object(o["t"])("icon");return Object(o["o"])(),Object(o["d"])("nav",v,[Object(o["f"])("div",y,[Object(o["f"])("a",x,[Object(o["f"])(a,{name:"ycode-stroke",color:"PureWhite"})])])])}n("b0c0");var M={id:"Icons/16/ycode",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},C={id:"Symbols",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},z={id:"Sidebar",transform:"translate(-30.000000, -30.000000)"},T={id:"Ycode"},V={transform:"translate(30.000000, 30.000000)"},F=Object(o["f"])("rect",{id:"Rectangle",x:"0",y:"0",width:"24",height:"24"},null,-1),N=Object(o["f"])("path",{d:"M 16.9375 1.0625 L 3.875 14.125 L 1.0742188 22.925781 L 9.875 20.125 L 22.9375 7.0625 C 22.9375 7.0625 22.8375 4.9615 20.9375 3.0625 C 19.0375 1.1625 16.9375 1.0625 16.9375 1.0625 z M 17.3125 2.6875 C 18.3845 2.8915 19.237984 3.3456094 19.896484 4.0214844 C 20.554984 4.6973594 21.0185 5.595 21.3125 6.6875 L 19.5 8.5 L 15.5 4.5 L 16.9375 3.0625 L 17.3125 2.6875 z M 4.9785156 15.126953 C 4.990338 15.129931 6.1809555 15.430955 7.375 16.625 C 8.675 17.825 8.875 18.925781 8.875 18.925781 L 8.9179688 18.976562 L 5.3691406 20.119141 L 3.8730469 18.623047 L 4.9785156 15.126953 z"},null,-1),S=Object(o["f"])("path",{d:"M 10.3125 -0.03125 C 8.589844 -0.03125 7.164063 1.316406 7 3 L 2 3 L 2 5 L 6.96875 5 L 6.96875 5.03125 L 17.03125 5.03125 L 17.03125 5 L 22 5 L 22 3 L 17 3 C 16.84375 1.316406 15.484375 -0.03125 13.8125 -0.03125 Z M 10.3125 2.03125 L 13.8125 2.03125 C 14.320313 2.03125 14.695313 2.429688 14.84375 2.96875 L 9.15625 2.96875 C 9.296875 2.429688 9.6875 2.03125 10.3125 2.03125 Z M 4 6 L 4 22.5 C 4 23.300781 4.699219 24 5.5 24 L 18.59375 24 C 19.394531 24 20.09375 23.300781 20.09375 22.5 L 20.09375 6 Z M 7 9 L 8 9 L 8 22 L 7 22 Z M 10 9 L 11 9 L 11 22 L 10 22 Z M 13 9 L 14 9 L 14 22 L 13 22 Z M 16 9 L 17 9 L 17 22 L 16 22 Z"},null,-1);function E(e,t,n,r,l,c){return Object(o["o"])(),Object(o["d"])("span",{class:"icons d-inline-flex",style:{width:"".concat(n.size)}},["ycode-stroke"===n.name?(Object(o["o"])(),Object(o["d"])("svg",{key:0,width:n.size,height:n.size,viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[Object(o["f"])("g",M,[Object(o["f"])("path",{id:n.color,d:"M7.97610223,0 L7.97610223,3.90585301 L4.376,5.985 L8.769,8.524 L15.7243601,4.50067566 L15.7243601,8.41018114 L2.62344064,15.9904444 L2.60691507,16 L2.58878753,15.9884771 L1,14.980891 L1,11.1744339 L2.60278367,12.0928828 L5.344,10.505 L1,7.93933993 L1,4.03583677 L7.97610223,0 Z M14.656381,6.35247998 L2.60536175,13.3252576 L2.06797909,13.0173193 L2.06797909,14.3935494 L2.63231476,14.751443 L14.656381,7.79425283 L14.656381,6.35247998 Z M2.068,5.887 L2.06828104,7.32978355 L2.06797909,7.32990627 L6.404,9.892 L7.677,9.156 L7.67824927,9.12682989 L2.068,5.887 Z M6.90812314,1.85167347 L2.06797909,4.65180895 L2.446,4.87 L3.31,5.369 L6.90812314,3.28970119 L6.90812314,1.85167347 Z",fill:"#FFFFFF","fill-rule":"nonzero"},null,8,["id"])])],8,["width","height"])):Object(o["e"])("",!0),"ycode-filled"===n.name?(Object(o["o"])(),Object(o["d"])("svg",{key:1,width:n.size,height:n.size,viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[Object(o["f"])("g",C,[Object(o["f"])("g",z,[Object(o["f"])("g",T,[Object(o["f"])("g",V,[F,Object(o["f"])("path",{d:"M11.4241533,0 L11.4241533,5.85877951 L6.024,8.978 L12.6155735,12.7868008 L10.951,13.749 L23.0465401,6.75101349 L23.0465401,12.6152717 L3.39516096,23.9856666 L3.3703726,24 L3.34318129,23.9827156 L0.96,22.4713365 L0.96,16.7616508 L3.36417551,18.1393242 L7.476,15.76 L0.96,11.9090099 L0.96,6.05375516 L11.4241533,0 Z",id:n.color,fill:"#000000"},null,8,["id"])])])])])],8,["width","height"])):Object(o["e"])("",!0),"ycode-edit"===n.name?(Object(o["o"])(),Object(o["d"])("svg",{key:2,width:n.size,height:n.size,fill:n.colorIcon,viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[N],8,["width","height","fill"])):Object(o["e"])("",!0),"ycode-trash"===n.name?(Object(o["o"])(),Object(o["d"])("svg",{key:3,width:n.size,height:n.size,fill:n.colorIcon,viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[S],8,["width","height","fill"])):Object(o["e"])("",!0)],4)}var Z={props:{size:{default:16},name:{},color:{},color2:{},colorIcon:{default:"#000"}},data:function(){return{}}};Z.render=E;var A=Z,$={components:{Icon:A}};$.render=k;var P=$,D={name:"App",components:{Design:j,NavBar:P,Layers:w},computed:{Layers:function(){return this.$store.state.Layers}}};D.render=a;var U=D,_=n("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var B=n("6c02"),I={class:"py-8 px-4"},G={method:"post",action:"",enctype:"multipart/form-data",ref:"videoForm",class:"w-full max-w-lg"},R={class:"flex flex-wrap -mx-3 mb-6"},J={class:"w-full  px-3 mb-6 md:mb-0"},q={class:"w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-600 hover:text-white text-purple-600 ease-linear transition-all duration-150"},H=Object(o["f"])("span",{class:"mt-2 text-base leading-normal"},"Select a file",-1),W={key:0,class:"flex flex-wrap -mx-4 -mb-8"};function Y(e,t,n,r,l,c){var a=Object(o["t"])("font-awesome-icon");return Object(o["o"])(),Object(o["d"])("section",I,[Object(o["f"])("form",G,[Object(o["f"])("div",R,[Object(o["f"])("div",J,[Object(o["A"])(Object(o["f"])("input",{type:"text",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.formData.title=e}),placeholder:"Enter video title"},null,512),[[o["y"],l.formData.title]])]),Object(o["f"])("label",q,[Object(o["f"])(a,{icon:"cloud-upload-alt",size:"3x"}),H,Object(o["f"])("input",{type:"file",class:"hidden",name:"video",onChange:t[2]||(t[2]=function(){return c.onFileUpload&&c.onFileUpload.apply(c,arguments)})},null,32)])])],512),c.galleries&&c.galleries.length>0?(Object(o["o"])(),Object(o["d"])("div",W,[(Object(o["o"])(!0),Object(o["d"])(o["a"],null,Object(o["s"])(c.galleries,(function(e,t){return Object(o["o"])(),Object(o["d"])("div",{class:"md:w-1/4 px-4 mb-8",key:t},[Object(o["f"])("img",{class:"rounded shadow-md",src:e,alt:""},null,8,["src"])])})),128))])):Object(o["e"])("",!0)])}var K={name:"App",data:function(){return{formData:{title:"",files:Object}}},methods:{createLayer:function(){var e=this.$store.state.Layers.length+1;this.$store.commit("addLayers",{layerName:"Layer"+e,textLayer:"Text Layer"+e,imgSrc:"./ResumePart6.jpg",editable:!1,focusable:!1,className:""})},onFileUpload:function(e){var t=this,n=this.$refs.videoForm,o=new FormData(n);this.axios.post("/api/upload",o).then((function(e){t.$store.state.commit("GET_GALLERIES",e.data)}))}},computed:{Layers:function(){return this.$store.state.Layers},galleries:function(){return this.$store.state.galleries}}};K.render=Y;var Q=K,X=[{path:"/",name:"Home",component:Q}],ee=Object(B["a"])({history:Object(B["b"])("/"),routes:X}),te=ee,ne=n("5502"),oe=Object(ne["a"])({state:{galleries:[]},mutations:{GET_GALLERIES:function(e,t){e&&e.files&&e.files.forEach((function(e){t.galleries.push("../storage/app/public"+e)}))}},actions:{},modules:{}}),re=n("ecee"),le=n("c074"),ce=n("ad3d"),ae=n("bc3a"),ie=n.n(ae),se=n("2106"),de=n.n(se);re["c"].add(le["b"],le["a"]);var ue=Object(o["c"])(U);ue.component("font-awesome-icon",ce["a"]),ue.config.productionTip=!1,ue.use(oe).use(te).use(de.a,ie.a).mount("#app")},a2f0:function(e,t,n){}});
//# sourceMappingURL=app.91f9b87f.js.map