(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f069fcb4"],{"0ccb":function(t,e,a){var r=a("50c4"),n=a("1148"),s=a("1d80"),i=Math.ceil,o=function(t){return function(e,a,o){var c,l,u=String(s(e)),p=u.length,h=void 0===o?" ":String(o),d=r(a);return d<=p||""==h?u:(c=d-p,l=n.call(h,i(c/h.length)),l.length>c&&(l=l.slice(0,c)),t?u+l:l+u)}};t.exports={start:o(!1),end:o(!0)}},"125a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"ma-0",staticStyle:{height:"100%"}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"5"}},[a("v-row",{staticClass:"ma-0 mb-3",attrs:{align:"center"}},[a("v-btn",{staticClass:"mt-2",attrs:{icon:"",plain:"",depressed:"",loading:t.refreshLoading},on:{click:t.refreshPosts}},[a("v-icon",[t._v("mdi-refresh")])],1),a("v-text-field",{staticClass:"pt-0 mx-3 mb-0",attrs:{loading:t.searchLoading,color:"indigo",clearable:"","hide-details":"",placeholder:t.$t("dashboard.blog.search-post"),"append-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),!1===t.loaded?a("div",t._l(t.skeletonCount,(function(t,e){return a("v-card",{key:"skeleton-"+t+e,class:e>0?"mt-6":"",attrs:{elevation:0,tile:""}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("v-avatar",{staticClass:"ma-3",staticStyle:{"border-radius":"0.5rem"},attrs:{size:"125"}},[a("v-skeleton-loader",{attrs:{"min-height":"250","max-height":"250","max-width":"250","min-width":"250",type:"image"}})],1),a("div",{staticStyle:{width:"100%"}},[a("v-skeleton-loader",{attrs:{type:"article"}})],1)],1)])})),1):t.posts.length>0?a("div",[t._l(t.posts,(function(e,r){return a("post-item",{key:e.href,attrs:{post:e,config:t.config,"meta-data":t.metaData},on:{remove:function(a){return t.remove(e)}}})})),a("infinite-loading",{on:{infinite:t.nextPostLoading},scopedSlots:t._u([{key:"no-results",fn:function(){return[a("span")]},proxy:!0},{key:"no-more",fn:function(){return[a("span")]},proxy:!0}])})],2):a("v-row",{staticClass:"ma-0",staticStyle:{height:"100%"},attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",align:"center"}},[a("v-img",{attrs:{"max-width":"200px","max-height":"200px",src:t.imgs.empty}}),a("v-divider",{staticClass:"my-4",staticStyle:{width:"200px"}}),a("p",[t._v(t._s(t.$t("dashboard.blog.empty")))])],1)],1)],1),a("v-col",{staticClass:"pa-0",attrs:{cols:"7"}},[a("v-row",{staticClass:"ma-0",staticStyle:{position:"fixed",width:"42%",height:"86%"},attrs:{height:"100%;",align:"center"}},[a("v-col",{staticClass:"py-0",attrs:{cols:"12",align:"center"}},[a("h1",{staticClass:"display-4"},[t._v(". . .")]),a("p",{staticClass:"mt-4"},[t._v(t._s(t.$t("dashboard.blog.soon")))])])],1)],1)],1)},n=[],s=a("1da1"),i=a("d4ec"),o=a("bee2"),c=a("257e"),l=a("262e"),u=a("2caf"),p=a("ade3"),h=(a("96cf"),a("99af"),a("ac1f"),a("841c"),a("4de4"),a("466d"),a("d3b7"),a("b0c0"),a("c740"),a("a434"),a("9ab4")),d=a("1b40"),g=a("8305"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-hover",{staticStyle:{cursor:"pointer"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{class:r?"grey lighten-4":"white",style:r?{zIndex:4}:{},attrs:{shaped:"",elevation:r?4:0},on:{click:t.openPost}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("v-avatar",{staticClass:"ma-3",staticStyle:{"border-radius":"0.5rem"},attrs:{size:"125"}},[a("v-img",{attrs:{height:"250","lazy-src":"https://cdn.pixabay.com/photo/2015/02/22/17/56/loading-645268_640.jpg",src:t.post.cover||t.defaultImage}})],1),a("div",{staticStyle:{width:"100%"}},[a("v-card-title",[a("span",{staticClass:"font-weight-bold",attrs:{title:t.post.title}},[t._v(" "+t._s(t.title(t.post.title))+" ")]),a("v-spacer"),a("v-menu",{attrs:{"open-on-hover":"",left:"","content-class":"elevation-0",tile:"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",small:"",color:r?"grey":"grey lighten-2",plain:""}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[a("v-list",{staticClass:"pa-0",attrs:{elevation:0}},[a("v-list-item",{staticClass:"pa-0",staticStyle:{"min-height":"10px"}},[a("v-btn",{attrs:{text:"",tile:"",color:"green",dark:"",depressed:"",plain:""},on:{click:function(e){return e.stopPropagation(),t.modify.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("modify"))+" ")]),a("v-btn",{attrs:{text:"",tile:"",color:"red",dark:"",depressed:"",plain:""},on:{click:function(e){return e.stopPropagation(),t.remove.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("remove"))+" ")])],1)],1)],1)],1),a("v-card-text",{staticClass:"pt-0",staticStyle:{"min-height":"80px"}},[a("v-row",{staticClass:"ma-0",attrs:{align:"center"}},[a("div",[t._v(t._s(t.post.content))])])],1)],1)],1)])]}}])})},f=[],v=(a("4d90"),a("25f0"),a("a15b"),a("df7c")),b=a.n(v);function x(t){var e=t.getUTCFullYear(),a=(t.getUTCMonth()+1).toString().padStart(2,"0"),r=t.getUTCDate().toString().padStart(2,"0"),n=t.getUTCHours().toString().padStart(2,"0"),s=t.getUTCMinutes().toString().padStart(2,"0"),i=t.getUTCSeconds().toString().padStart(2,"0");return"".concat(e).concat(a).concat(r).concat(n).concat(s).concat(i)}var y=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;Object(i["a"])(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t=e.call.apply(e,[this].concat(n)),Object(p["a"])(Object(c["a"])(t),"post",void 0),Object(p["a"])(Object(c["a"])(t),"config",void 0),Object(p["a"])(Object(c["a"])(t),"metaData",void 0),Object(p["a"])(Object(c["a"])(t),"defaultImage","https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"),Object(p["a"])(Object(c["a"])(t),"MAX_RETRY_CNT",11),t}return Object(o["a"])(a,[{key:"openPost",value:function(){window.open("https://".concat(this.$git.repo.name,"/").concat(this.post.href))}},{key:"remove",value:function(){var t=this;this.$confirm({type:"warning",title:this.$t("dashboard.blog.remove"),content:this.$t("dashboard.blog.remove-desc"),textOk:this.$t("yes"),textCancel:this.$t("cancel")}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){var r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a(),t.$store.commit("loadmsg",""),t.$store.commit("loading",!0),r=b.a.join(t.config.source_dir,"images",x(new Date(t.post.date))),n=0,s=t.metaData.findIndex((function(e){return t.post.title===e.title})),s>-1&&t.metaData.splice(s,1);case 7:if(!(n++<t.MAX_RETRY_CNT)){e.next=34;break}return e.prev=8,e.next=11,t.$git.update("meta-data.json",JSON.stringify(t.metaData,null,"\t"));case 11:return e.next=13,t.$git.remove(t.post.src);case 13:return e.next=15,t.$git.remove(r);case 15:return e.next=17,t.$git.commit("REMOVE: ".concat(t.post.title));case 17:return n=0,e.abrupt("break",34);case 21:return e.prev=21,e.t0=e["catch"](8),t.$logger.warn("github",e.t0),e.next=26,t.$sleep(1500);case 26:return e.next=28,t.$git.workflowClear();case 28:return e.next=30,t.$git.clear();case 30:return e.next=32,t.$sleep(1500);case 32:e.next=7;break;case 34:if(!(n>=t.MAX_RETRY_CNT)){e.next=36;break}throw Error("File remove max try fail.");case 36:return t.$emit("remove"),e.next=39,t.$git.clear();case 39:case"end":return e.stop()}}),e,null,[[8,21]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){if("function"!==typeof t)throw t;t()})).finally((function(){t.$store.commit("loading",!1)}))}},{key:"modify",value:function(){this.$assign("/posting/".concat(this.post.src))}},{key:"title",value:function(t){return t.length>8&&(t=t.substr(0,8)+"..."),t}}]),a}(Object(d["b"])(g["a"]));Object(h["__decorate"])([Object(d["c"])(Object)],y.prototype,"post",void 0),Object(h["__decorate"])([Object(d["c"])(Object)],y.prototype,"config",void 0),Object(h["__decorate"])([Object(d["c"])(Array)],y.prototype,"metaData",void 0),y=Object(h["__decorate"])([Object(d["a"])({})],y);var w=y,j=w,O=a("2877"),$=a("6544"),k=a.n($),_=a("8212"),C=a("8336"),R=a("b0af"),S=a("99d9"),V=a("ce87"),I=a("132d"),L=a("adda"),D=a("8860"),T=a("da13"),P=a("e449"),N=a("0fd9"),A=a("2fa4"),M=Object(O["a"])(j,m,f,!1,null,null,null),E=M.exports;k()(M,{VAvatar:_["a"],VBtn:C["a"],VCard:R["a"],VCardText:S["a"],VCardTitle:S["b"],VHover:V["a"],VIcon:I["a"],VImg:L["a"],VList:D["a"],VListItem:T["a"],VMenu:P["a"],VRow:N["a"],VSpacer:A["a"]});var U=a("2591"),z=a("e2c1"),B=a("e166"),Y=a.n(B),F=function(t){Object(l["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;Object(i["a"])(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return t=e.call.apply(e,[this].concat(s)),Object(p["a"])(Object(c["a"])(t),"postList",[]),Object(p["a"])(Object(c["a"])(t),"metaData",[]),Object(p["a"])(Object(c["a"])(t),"metaIdx",0),Object(p["a"])(Object(c["a"])(t),"loadNumPerOneTime",5),Object(p["a"])(Object(c["a"])(t),"skeletonCount",Array(t.loadNumPerOneTime)),Object(p["a"])(Object(c["a"])(t),"config",{}),Object(p["a"])(Object(c["a"])(t),"search",""),Object(p["a"])(Object(c["a"])(t),"searchLoading",!1),Object(p["a"])(Object(c["a"])(t),"loaded",!1),Object(p["a"])(Object(c["a"])(t),"refreshLoading",!1),Object(p["a"])(Object(c["a"])(t),"imgs",{empty:a("184d")}),t}return Object(o["a"])(r,[{key:"posts",get:function(){var t=this;if(this.search){this.searchLoading=!0;var e=this.metaData.filter((function(e){return e.title.match(t.search)}));return this.searchLoading=!1,e}return this.postList}},{key:"mounted",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$logger.debug("app","DashboardPosts mounted"),e="".concat(this.$store.getters.user.userName,".github.io"),t.next=4,this.getBlogRepo(e);case 4:if(a=t.sent,r={},a){t.next=11;break}return t.next=9,this.$modal({title:this.$t("dashboard.blog.not-found-repo.title"),content:this.$t("dashboard.blog.not-found-repo.content",e)}).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a(),n.$store.commit("loadmsg",""),n.$store.commit("loading",!0),t.next=5,n.initialize(e);case 5:r=t.sent,n.$store.commit("loading",!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 9:t.next=14;break;case 11:return t.next=13,this.$git.getContent("meta-data.json","json");case 13:r=t.sent;case 14:if(r){t.next=17;break}return t.next=17,this.$confirm({title:this.$t("notice"),content:this.$t("dashboard.blog.not-found-meta-data"),type:"warning",textOk:this.$t("create-new"),textCancel:this.$t("logout")}).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a(),n.$store.commit("loadmsg",""),n.$store.commit("loading",!0),t.next=5,n.$git.rest.repos.delete({owner:n.$store.getters.user.userName,repo:e});case 5:return t.next=7,n.initialize(e);case 7:r=t.sent;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!U["a"].auth().currentUser){t.next=3;break}return t.next=3,U["a"].auth().signOut();case 3:n.$session.write("userInfo",""),n.$assign("/"),"function"===typeof e&&e();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){n.$store.commit("loading",!0)}));case 17:return t.next=19,this.$git.initRepo(e);case 19:return t.next=21,this.$git.getContent("_config.yml","yaml");case 21:this.config=t.sent,this.metaData=r,this.nextPostLoading(),this.loaded=!0;case 25:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"initialize",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,r,n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.createBlogRepo(e);case 2:return t.prev=2,t.next=5,this.$axios.get("https://raw.githubusercontent.com/".concat(this.$store.getters.user.userName,"/").concat(e,"/master/meta-data.json"));case 5:r=t.sent,n=r.data,a=n,t.next=14;break;case 10:return t.prev=10,t.t0=t["catch"](2),t.next=14,this.$sleep(3e3);case 14:if(!a){t.next=2;break}case 15:return t.next=17,this.$git.initRepo(e);case 17:return t.next=19,this.$git.getContent("_config.yml","yaml");case 19:return s=t.sent,s.root="/",s.url="https://".concat(this.$store.getters.user.userName,".github.io/"),s.title=s.author=this.$store.getters.user.userName,t.next=25,this.$git.rest.repos.updateInformationAboutPagesSite({owner:this.$store.getters.user.userName,repo:e,source:{branch:"master",path:"/docs"}});case 25:return t.next=27,this.$sleep(1e3);case 27:return t.next=29,this.$git.workflowClear();case 29:i=!0;case 30:if(!i){t.next=46;break}return t.prev=31,this.$git.add("_config.yml",z["a"].dump(s)),t.next=35,this.$git.commit("Setting _config.yml");case 35:i=!1,t.next=42;break;case 38:return t.prev=38,t.t1=t["catch"](31),t.next=42,this.$sleep(5e3);case 42:return t.next=44,this.$git.clear();case 44:t.next=30;break;case 46:return t.abrupt("return",a);case 47:case"end":return t.stop()}}),t,this,[[2,10],[31,38]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getBlogRepo",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$git.initRepo(e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t["catch"](0),this.$logger.error("github",t.t0);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"createBlogRepo",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$git.rest.repos.createUsingTemplate({template_owner:this.$store.getters.service.name,template_repo:this.$store.getters.service.template,name:e,owner:this.$store.getters.user.userName,private:!1,description:this.$t("github.description")});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"nextPostLoading",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a=0;a<this.loadNumPerOneTime;a++)this.metaIdx<this.metaData.length&&this.postList.push(this.metaData[this.metaIdx++]);e&&(this.metaIdx<this.metaData.length?e.loaded():e.complete());case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"remove",value:function(t){var e=this.postList.findIndex((function(e){return t.title===e.title}));e>-1&&this.postList.splice(e,1);var a=this.metaData.findIndex((function(e){return t.title===e.title}));a>-1&&this.metaData.splice(a,1)}},{key:"refreshPosts",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loaded=!1,t.next=3,this.$git.getContent("meta-data.json","json");case 3:this.metaData=t.sent,this.postList=[],this.metaIdx=0,this.nextPostLoading(),this.loaded=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),r}(Object(d["b"])(g["a"]));F=Object(h["__decorate"])([Object(d["a"])({components:{PostItem:E,InfiniteLoading:Y.a}})],F);var J=F,X=J,H=a("62ad"),q=a("ce7e"),G=a("3129"),K=a("8654"),Q=Object(O["a"])(X,r,n,!1,null,null,null);e["default"]=Q.exports;k()(Q,{VAvatar:_["a"],VBtn:C["a"],VCard:R["a"],VCol:H["a"],VDivider:q["a"],VIcon:I["a"],VImg:L["a"],VRow:N["a"],VSkeletonLoader:G["a"],VTextField:K["a"]})},"184d":function(t,e,a){t.exports=a.p+"img/empty.5d1296f2.png"},"4d90":function(t,e,a){"use strict";var r=a("23e7"),n=a("0ccb").start,s=a("9a0c");r({target:"String",proto:!0,forced:s},{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"9a0c":function(t,e,a){var r=a("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)}}]);
//# sourceMappingURL=chunk-f069fcb4.js.map