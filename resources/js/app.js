(function(e){function t(t){for(var n,o,s=t[0],l=t[1],i=t[2],d=0,b=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==c[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),c=(r("a2f0"),{class:"h-screen w-screen overflow-hidden bg-white flex flex-col"}),a={class:"relative flex flex-1 flex-row overflow-hidden"},o={class:"w-full h-full relative z-10 scrollbar text-left text-none overflow-auto"};function s(e,t,r,s,l,i){var u=Object(n["u"])("NavBar"),d=Object(n["u"])("Layers"),b=Object(n["u"])("router-view"),p=Object(n["u"])("Design"),f=Object(n["u"])("Loading");return Object(n["p"])(),Object(n["d"])("main",c,[Object(n["g"])(u),Object(n["g"])("section",a,[Object(n["g"])(d),Object(n["g"])("section",o,[Object(n["g"])(b)]),Object(n["g"])(p)]),i.loading?(Object(n["p"])(),Object(n["d"])(f,{key:0})):Object(n["e"])("",!0)])}r("d3b7"),r("ddb0");var l={id:"right-panel",class:"relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"},i=Object(n["g"])("header",{class:"text-white text-xs font-medium tracking-wide flex justify-between items-center p-3 pb-0 "},[Object(n["g"])("div",{class:"flex items-center leading-5 py-px"},"Design")],-1),u={class:"w-full h-full relative z-10 scrollbar text-none overflow-auto"},d={class:"items-center bg-white mb-2 text-center"},b=Object(n["g"])("option",{value:""},"--- Select ---",-1),p={key:2,id:"presetColors"};function f(e,t,r,c,a,o){return Object(n["p"])(),Object(n["d"])("aside",l,[i,Object(n["g"])("section",u,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(o.designs,(function(e,r){return Object(n["p"])(),Object(n["d"])("div",{key:r,class:"mt-2"},[Object(n["g"])("h5",d,Object(n["w"])(e.designLabel),1),"select"===e.designType?Object(n["C"])((Object(n["p"])(),Object(n["d"])("select",{key:0,"onUpdate:modelValue":function(t){return e.designValue=t},class:"ml-2",onChange:t[1]||(t[1]=function(e){return o.setValueToLayer()})},[b,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(e.values,(function(e,t){return Object(n["p"])(),Object(n["d"])("option",{key:t,value:e.classValue},Object(n["w"])(e.displayText),9,["value"])})),128))],40,["onUpdate:modelValue"])),[[n["y"],e.designValue]]):Object(n["e"])("",!0),"color"===e.designType?Object(n["C"])((Object(n["p"])(),Object(n["d"])("input",{key:1,type:"color",id:"favcolor",name:"favcolor",class:"ml-2","onUpdate:modelValue":function(t){return e.designValue=t},list:"presetColors",onChange:t[2]||(t[2]=function(e){return o.setValueToLayer()})},null,40,["onUpdate:modelValue"])),[[n["z"],e.designValue]]):Object(n["e"])("",!0),"color"===e.designType?(Object(n["p"])(),Object(n["d"])("datalist",p,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(e.values,(function(e,t){return Object(n["p"])(),Object(n["d"])("option",{key:t},Object(n["w"])(e.displayText),1)})),128))])):Object(n["e"])("",!0)])})),128))])])}r("159b");var j={computed:{designs:function(){return this.$store.state.Designs},Layers:function(){return this.$store.state.Layers}},methods:{setValueToLayer:function(){var e=this;this.Layers.forEach((function(t){t.focusable&&(t.className="",e.designs.forEach((function(e){"color"===e.designType?e.values.forEach((function(r){r.displayText===e.designValue&&(t.className=t.className+r.classValue+" ")})):t.className=t.className+e.designValue+" "})))}))}}};j.render=f;var g=j,O={id:"right-panel",class:"relative bg-gray-800 border-l border-gray-600 h-full w-64 flex flex-col overflow-hidden flex-shrink-0"},m={key:0,class:"rounded px-6"},h=Object(n["g"])("div",{class:"sticky top-0 z-50 border-l-4 border-red-400 -ml-6 pl-6 flex items-center justify-between py-4"},[Object(n["g"])("div",{class:"font-semibold text-white"},"Projects")],-1),v=Object(n["g"])("hr",{class:"-mx-6"},null,-1),y={class:"w-16"},x={class:"flex-1 pl-2"},w={class:"text-white font-semibold"},k=Object(n["g"])("div",{class:"text-gray-600 font-thin"},null,-1),L=Object(n["g"])("hr",{class:"boder-b-0 my-4"},null,-1);function C(e,t,r,c,a,o){return Object(n["p"])(),Object(n["d"])("aside",O,[a.projects&&a.projects.length>0?(Object(n["p"])(),Object(n["d"])("div",m,[h,v,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(a.projects,(function(e,t){return Object(n["p"])(),Object(n["d"])(n["a"],{key:t},[Object(n["g"])("div",{class:"flex items-center justify-between my-4",onClick:function(t){return o.getAllFrames(e)}},[Object(n["g"])("div",y,[Object(n["g"])("img",{class:"w-12 h-12 rounded-full",src:"https://videoprocess.kavisoftek.in/uploads/"+e.image_Location+"/thumb_0.jpg"},null,8,["src"])]),Object(n["g"])("div",x,[Object(n["g"])("div",w,Object(n["w"])(e.project_name),1),k])],8,["onClick"]),L],64)})),128))])):Object(n["e"])("",!0)])}var T={data:function(){return{projects:[],tableHeader:[]}},created:function(){var e=this;this.axios.get("https://videoprocess.kavisoftek.in/api/getProjects").then((function(t){e.projects=t.data}))},methods:{getAllFrames:function(e){this.$store.state.selectedProject=e,this.$router.push("/project")}}};T.render=C;var V=T,P={class:"flex justify-between bg-gray-900 border-b border-gray-600 text-white relative",id:"nav-bar"},$=Object(n["g"])("div",{class:"flex-1 flex items-center"},[Object(n["g"])("a",{href:"/",class:"p-3 h-full flex items-center group border-r border-gray-600"}," Image ")],-1);function _(e,t){return Object(n["p"])(),Object(n["d"])("nav",P,[$])}const E={};E.render=_;var A=E,N={class:"flex w-full h-full fixed block h-screen text-center bg-white opacity-75 z-50"},z=Object(n["g"])("div",{class:"flex justify-around m-auto"},[Object(n["g"])("span",{class:"inline-flex rounded-md shadow-sm"},[Object(n["g"])("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent text-base text-xl leading-6 font-medium rounded-md text-gray-700 transition ease-in-out duration-150 cursor-not-allowed",disabled:""},[Object(n["g"])("svg",{class:"animate-spin -ml-1 mr-3 h-8 w-8 text-gray-700",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[Object(n["g"])("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),Object(n["g"])("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]),Object(n["f"])(" Processing ")])])],-1);function F(e,t){return Object(n["p"])(),Object(n["d"])("div",N,[z])}const S={};S.render=F;var D=S,U={name:"App",components:{Design:g,NavBar:A,Layers:V,Loading:D},computed:{Layers:function(){return this.$store.state.Layers},loading:function(){return this.$store.state.loading}}};U.render=s;var G=U,I=r("6c02"),M={class:"py-8 px-4"},R=Object(n["g"])("h2",{class:"text-lg font-medium text-gray-900 truncate pb-8 px-1"},"Create Project",-1),H={method:"post",action:"",enctype:"multipart/form-data",ref:"videoForm",class:"w-full max-w-lg"},B={class:"w-full flex flex-wrap -mx-3 mb-6"},J={class:"w-1/2  px-3 mb-6 "},q={class:"w-1/3  px-3 mb-6 md:mb-0"},K={class:"w-60 flex inline-flex items-center items-center px-4 py-1.5 bg-white hover:bg-gray-600 rounded-md shadow-md tracking-wide font-medium uppercase border border-blue cursor-pointer hover:bg-white-600 hover:text-white text-gray-600 ease-linear transition-all duration-150"},Q=Object(n["g"])("span",{class:"text-base leading-normal px-2"},"Choose Video",-1),W={key:0,class:"flex flex-wrap -mx-4 -mb-8"};function X(e,t,r,c,a,o){var s=Object(n["u"])("font-awesome-icon");return Object(n["p"])(),Object(n["d"])("section",M,[R,Object(n["g"])("form",H,[Object(n["g"])("div",B,[Object(n["g"])("div",J,[Object(n["C"])(Object(n["g"])("input",{type:"text",class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",name:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.formData.title=e}),placeholder:"Enter Project Name"},null,512),[[n["z"],a.formData.title]])]),Object(n["g"])("div",q,[Object(n["g"])("label",K,[Object(n["g"])(s,{icon:"cloud-upload-alt",size:"1x"}),Q,Object(n["g"])("input",{type:"file",class:"hidden",name:"video",onChange:t[2]||(t[2]=function(){return o.onFileUpload&&o.onFileUpload.apply(o,arguments)})},null,32)])])])],512),o.galleries?(Object(n["p"])(),Object(n["d"])("div",W,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(o.galleries,(function(e,t){return Object(n["p"])(),Object(n["d"])("div",{class:"md:w-1/4 px-4 mb-8",key:t},[Object(n["g"])("img",{class:"rounded shadow-md",src:e,alt:""},null,8,["src"])])})),128))])):Object(n["e"])("",!0)])}var Y=r("1da1"),Z=(r("96cf"),{name:"App",data:function(){return{formData:{title:"",files:Object},projects:[]}},methods:{createLayer:function(){var e=this.$store.state.Layers.length+1;this.$store.commit("addLayers",{layerName:"Layer"+e,textLayer:"Text Layer"+e,imgSrc:"./ResumePart6.jpg",editable:!1,focusable:!1,className:""})},onFileUpload:function(e){var t=this;return Object(Y["a"])(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$refs.videoForm,n=new FormData(r),c=[],t.$store.state.loading=!0,e.next=6,t.axios.post("/api/upload",n).then((function(e){e.data.files.forEach((function(e){c.push("./uploads/"+e)}))}));case 6:t.$store.commit("GET_GALLERIES",{galArray:c});case 7:case"end":return e.stop()}}),e)})))()}},computed:{Layers:function(){return this.$store.state.Layers},galleries:function(){return this.$store.state.galleries}}});Z.render=X;var ee=Z,te={key:0,class:"bg-gray-100 w-full rounded py-8 px-4"},re={class:"flex justify-left items-center my-4"},ne={class:"bg-white p-16 text-left mx-auto border"},ce={class:"text-lg font-medium text-gray-900 truncate pb-8 px-1"},ae={class:"flex flex-wrap -mx-4 -mb-8"};function oe(e,t,r,c,a,o){return o.project?(Object(n["p"])(),Object(n["d"])("div",te,[Object(n["g"])("ul",re,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(a.tabs,(function(e,t){return Object(n["p"])(),Object(n["d"])("li",{key:t,class:["cursor-pointer py-2 px-4 text-gray-500 border-b-8",a.activeTab===t?"text-gray-700 border-gray-700":""],onClick:function(e){return a.activeTab=t},textContent:Object(n["w"])(e)},null,10,["onClick","textContent"])})),128))]),Object(n["g"])("div",ne,[Object(n["C"])(Object(n["g"])("div",null,[Object(n["g"])("h2",ce,Object(n["w"])(o.project.project_name),1),Object(n["g"])("div",ae,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(o.project.video_duration,(function(e,t){return Object(n["p"])(),Object(n["d"])("div",{class:"md:w-1/4 px-4 mb-8",key:t},[Object(n["g"])("img",{class:"rounded shadow-md",src:"https://videoprocess.kavisoftek.in/uploads/"+o.project.image_Location+"/thumb_"+e+".jpg",alt:"",onClick:function(t){return o.editImage(e,o.project)}},null,8,["src","onClick"])])})),128))])],512),[[n["A"],0===a.activeTab]]),Object(n["C"])(Object(n["g"])("div",null,"Content 2",512),[[n["A"],1===a.activeTab]])])])):Object(n["e"])("",!0)}var se={name:"Grid",data:function(){return{activeTab:0,tabs:["Video Frames","Attributes"],tableHeader:[]}},computed:{project:function(){return this.$store.state.selectedProject}},methods:{editImage:function(e,t){console.log(e,t),this.$router.push("/editor")}}};se.render=oe;var le=se;function ie(e,t){return Object(n["p"])(),Object(n["d"])("div",null,"Editor")}const ue={};ue.render=ie;var de=ue,be=[{path:"/",name:"Home",component:ee},{path:"/project",name:"Grid",component:le},{path:"/editor",name:"Editor",component:de}],pe=Object(I["a"])({history:Object(I["b"])("/"),routes:be}),fe=pe,je=r("5502"),ge=Object(je["a"])({state:{galleries:[],loading:!1,projects:[],selectedProject:{}},mutations:{GET_GALLERIES:function(e,t){e.galleries=t.galArray,e.loading=!1}},actions:{},modules:{}}),Oe=r("ecee"),me=r("c074"),he=r("ad3d"),ve=r("bc3a"),ye=r.n(ve),xe=r("2106"),we=r.n(xe);Oe["c"].add(me["b"],me["a"]);var ke=Object(n["c"])(G);ke.component("font-awesome-icon",he["a"]),ke.config.productionTip=!1,ke.use(ge).use(fe).use(we.a,ye.a).mount("#app")},a2f0:function(e,t,r){}});
//# sourceMappingURL=app.7a522f28.js.map