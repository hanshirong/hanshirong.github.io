"use strict";(self["webpackChunkcloud_music"]=self["webpackChunkcloud_music"]||[]).push([[376],{7820:function(t,i,s){s.d(i,{Z:function(){return d}});var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"GoTop",class:t.isGoTopShow?"showBtn":t.isFirstLoad?"":"hideBtn",on:{click:t.goTop}},[i("i",{staticClass:"iconfont icon-huidaodingbu"})])},a=[];let o;var l={name:"GoTop",props:{scrollObj:{type:String,default(){return""}}},data(){return{isGoTopShow:!1,isFirstLoad:!0}},methods:{goTop(){this.el.scrollTo({behavior:"smooth",top:0})}},mounted(){""==this.scrollObj?(o=document,this.el=document.documentElement):(o=document.querySelector(this.scrollObj),this.el=o),o.onscroll=t=>{this.el.scrollTop>=500&&0==this.isGoTopShow?(this.isGoTopShow=!0,this.isFirstLoad&&(this.isFirstLoad=!1)):this.el.scrollTop<500&&this.isGoTopShow&&(this.isGoTopShow=!1)}}},n=l,r=s(1001),c=(0,r.Z)(n,e,a,!1,null,"07f39774",null),d=c.exports},2153:function(t,i,s){s.d(i,{Z:function(){return c}});var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"listTableContainer"},[i("div",{staticClass:"left"},[i("div",{staticClass:"listCover"},[i("img",{attrs:{src:t.officialListDetailItem.coverImgUrl||t.cover,alt:""},on:{click:function(i){t.officialListDetailItem.coverImgUrl&&t.clickPlayList(t.officialListDetailItem.id)}}})])]),i("div",{staticClass:"right"},[i("table",t._l(t.officialListDetailItem.tracks&&t.officialListDetailItem.tracks.slice(0,5)||t.officialListDetailItem.topSongs&&(t.officialListDetailItem.isOpen?t.officialListDetailItem.topSongs:t.officialListDetailItem.topSongs.slice(0,10))||t.officialListDetailItem.songs.slice(0,10),(function(s,e){return i("tr",{key:e,staticClass:"listRows",on:{click:function(i){return t.handleRowClick(i)},dblclick:function(i){return t.handleRowDbClick(i,t.officialListDetailItem.id||s.id,e)}}},[i("td",{staticClass:"index",class:e<3?"topthree":""},[t._v(t._s(e+1))]),i("td",{staticClass:"musicName"},[t._v(t._s(s.name))]),i("td",{staticClass:"singer"},[t._v(t._s(s.ar[0].name))])])})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCheckAllShow,expression:"isCheckAllShow"}],staticClass:"checkAll",on:{click:function(i){return t.clickCheckAll(t.officialListDetailItem.id)}}},[t._v(" 查看全部 "),i("i",{staticClass:"iconfont icon-arrow-right-bold"})])])])},a=[],o={name:"ListTable",data(){return{}},props:{officialListDetailItem:{type:Object,default(){return{}}},cover:{type:String,default(){return""}},listId:{type:String,default(){return""}},isCheckAllShow:{type:Boolean,default(){return!0}}},methods:{handleRowClick(t){var i=t.composedPath?t.composedPath():t.path;this.$emit("handleRowClick",i[0])},handleRowDbClick(t,i,s){let e=this.listId;this.$emit("handleRowDbClick",{id:i,index:s,listId:e})},clickCheckAll(t){let i=this.listId;this.$emit("clickCheckAll",{id:t,listId:i})},clickPlayList(t){let i=this.listId;this.$emit("clickPlayList",{id:t,listId:i})}}},l=o,n=s(1001),r=(0,n.Z)(l,e,a,!1,null,"073fa8cf",null),c=r.exports},7376:function(t,i,s){s.r(i),s.d(i,{default:function(){return g}});var e=function(){var t=this,i=t._self._c;return t.singerInfo.cover?i("div",{staticClass:"singerDetail"},[i("div",{staticClass:"listInfo"},[i("div",{staticClass:"listAvatar"},[i("img",{attrs:{src:t.singerInfo.cover+"?param=300y300",alt:""}})]),i("div",{staticClass:"right"},[i("div",{staticClass:"title"},[i("div",{staticClass:"titleContent"},[t._v(t._s(t.singerInfo.name))])]),i("div",{staticClass:"buttons"},[i("div",{staticClass:"buttonItem",on:{click:t.subSinger}},[i("i",{staticClass:"iconfont icon-xihuan",class:t.isSub?"red":""}),i("span",[t._v(t._s(t.isSub?"已收藏":"收藏"))])])]),i("div",{staticClass:"otherInfo"},[i("div",{staticClass:"musicNum"},[t._v("单曲数 : "+t._s(t.singerInfo.musicSize))]),i("div",{staticClass:"musicNum"},[t._v("专辑数 : "+t._s(t.singerInfo.albumSize))]),i("div",{staticClass:"musicNum"},[t._v("MV数 : "+t._s(t.singerInfo.mvSize))])])])]),i("div",{staticClass:"musicList"},[i("el-tabs",{attrs:{value:"first"},on:{"tab-click":t.clickTab}},[i("el-tab-pane",{attrs:{label:"专辑",name:"first"}},[t.topSongs.topSongs?i("div",{staticClass:"topSongs"},[i("list-table",{attrs:{officialListDetailItem:t.topSongs,isCheckAllShow:t.isCheckAllShow,cover:s(2177),listId:this.$route.params.id.toString()},on:{handleRowClick:t.handleRowClick,handleRowDbClick:t.handleRowDbClick,clickCheckAll:t.allTopSongs}},[i("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"title"},[t._v("热门50首")])])])],1):t._e(),0!=t.singerAlbum.length?i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"albumItemContainer",attrs:{"infinite-scroll-disabled":t.disabled,"infinite-scroll-distance":300,"infinite-scroll-immediate":!1}},t._l(t.singerAlbum,(function(s,e){return i("div",{key:e,staticClass:"albumItem"},[i("list-table",{attrs:{officialListDetailItem:s.songsObj,cover:s.album.blurPicUrl+"?param=300y300",listId:s.album.id.toString()},on:{handleRowClick:t.handleRowClick,handleRowDbClick:t.handleRowDbClick,clickCheckAll:t.clickListCardItem}},[i("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"title"},[t._v(t._s(s.album.name))])])])],1)})),0):t._e()]),i("el-tab-pane",{attrs:{label:"歌手详情",name:"third"}},[i("div",{staticClass:"singerDesc"},[t._v(t._s(t.singerInfo.briefDesc))])])],1)],1),i("go-top",{attrs:{scrollObj:".singerDetail"}})],1):t._e()},a=[],o=(s(7658),s(3214)),l=s(2153),n=s(7820);let r,c={};var d={components:{ListTable:l.Z,GoTop:n.Z},name:"SingerDetail",data(){return{singerInfo:{},topSongs:{},singerAlbum:[],albumPage:1,disabled:!0,isAlbumMore:!1,isCheckAllShow:!0,singerMvInfo:{mvs:[],hasMore:!1},videoPage:1,isDbc:!1,isSub:!1}},methods:{async getSingerInfo(){let t=await this.$request("/artist/detail",{id:this.$route.params.id});this.singerInfo=t.data.data.artist},async getSingerTopSongs(){let t=await this.$request("/artist/top/song",{id:this.$route.params.id}),i=t.data.songs;i.forEach(((t,s)=>{i[s].dt=(0,o.oF)(t.dt)})),this.topSongs={topSongs:i,isOpen:!1}},async getAlbumInfo(){let t=await this.$request("/artist/album",{id:this.$route.params.id,limit:20,offset:20*(this.albumPage-1)});this.isAlbumMore=t.data.more,t=t.data.hotAlbums,await t.forEach((t=>{this.getAlbumDetail(t.id)}))},async getAlbumDetail(t){let i=await this.$request("/album",{id:t});i=i.data;let s=i.songs;s.forEach(((t,i)=>{s[i].dt=(0,o.oF)(t.dt)})),i.songsObj={songs:s},this.singerAlbum.push(i)},async getSingerMv(){let t=await this.$request("/artist/mv",{id:this.$route.params.id,limit:20*this.videoPage});console.log(t),this.singerMvInfo=t.data},async getSubSingerList(){let t=Date.parse(new Date),i=await this.$request("/artist/sublist",{limit:1e3,timestamp:t});console.log(i.data.data),this.$store.commit("updateSubSingerList",i.data.data)},handleRowClick(t){document.querySelector(".selectRow")&&document.querySelector(".selectRow").classList.remove("selectRow"),t.classList.add("selectRow")},handleRowDbClick({id:t,index:i,listId:s}){if(this.isDbc=!0,this.handleViewDOM(t,s,i),s!=this.$route.params.id){let i=this.singerAlbum.findIndex((t=>t.album.id==s));this.$store.commit("updateMusicId",t),s!=this.$store.state.musicListId&&this.$store.commit("updateMusicList",{musicList:this.singerAlbum[i].songs,musicListId:s})}else this.$store.commit("updateMusicId",t),this.$route.params.id!=this.$store.state.musicListId&&this.$store.commit("updateMusicList",{musicList:this.topSongs.topSongs,musicListId:this.$route.params.id})},handleViewDOM(t,i,s){c.listId&&this.cleanStyle(c.i,c.listId);let e=document.querySelectorAll("table"),a=-1,o=-1;if(i==this.$route.params.id)o=0;else{if(o=this.singerAlbum.findIndex((t=>t.album.id==i)),console.log(o,"listIndex"),-1==o)return void console.log("can not find listIndex");o+=1}if(a=void 0==s?0==o?this.topSongs.topSongs.findIndex((i=>i.id==t)):this.singerAlbum[o-1].songs.findIndex((i=>i.id==t)):s,console.log(a,"i"),console.log(s,"index"),e[o]&&e[o].children[a]){let t=e[o].children[a];t.querySelector(".index").innerHTML="<i class='iconfont icon-yinle' style='color:#ff4e4e'></i>",c.i=a,c.listId=i,c.singerId=this.$route.params.id,this.$store.commit("updateCurrentRowInfo",c)}},cleanStyle(t,i){let s=document.querySelectorAll("table"),e=-1;if(i==this.$route.params.id)e=0;else{if(e=this.singerAlbum.findIndex((t=>t.album.id==i)),-1==e)return void console.log("can not find listIndex");e+=1}if(s[e]&&s[e].children[t]){let i=s[e].children[t];i.querySelector(".index").innerHTML=t+1}},clickListCardItem({listId:t}){console.log(t),this.$router.push({name:"album",params:{id:t}})},allTopSongs(){this.topSongs.isOpen=!0,this.isCheckAllShow=!1,setTimeout((()=>{this.$store.state.currentRowInfo.singerId==this.$route.params.id&&this.handleViewDOM(this.$store.state.musicId,this.$store.state.musicListId)}),500)},load(){this.disabled=!0,this.albumPage+=1,this.getAlbumInfo()},bottomLoad(){1==this.singerMvInfo.hasMore&&(this.videoPage+=1,this.getSingerMv())},goToVideoDetail({id:t}){this.$store.state.isLogin?this.$router.push({name:"videoDetail",params:{id:t,type:"mv"}}):this.$message.error("登录后才能观看MV哦!")},clickTab(t){console.log(t.index),1==t.index&&0==this.singerMvInfo.mvs.length&&this.getSingerMv()},getIsSub(){this.isSub=this.$store.state.subSingerList.find((t=>t.id==this.$route.params.id))},async subSinger(){this.$store.state.isLogin?(this.isSub=!this.isSub,await this.$request("/artist/sub",{id:this.$route.params.id,t:this.isSub?1:0}),this.getSubSingerList()):this.$message.error("请先登录!")}},created(){this.getSingerInfo()},watch:{singerAlbum(){0!=this.singerAlbum.length&&this.isAlbumMore?this.disabled=!1:this.disabled=!0},"$store.state.isMusicLoad"(t){t||(this.isDbc=!1)},"$store.state.musicId"(t,i){this.isDbc||this.handleViewDOM(this.$store.state.musicId,this.$store.state.musicListId)},singerAlbum(){clearTimeout(r),r=setTimeout((()=>{this.$store.state.currentRowInfo.singerId==this.$route.params.id&&this.handleViewDOM(this.$store.state.musicId,this.$store.state.musicListId)}),500)}},async mounted(){await this.getSingerTopSongs(),await this.getAlbumInfo(),this.$nextTick((()=>{this.$store.state.currentRowInfo.singerId==this.$route.params.id&&this.handleViewDOM(this.$store.state.musicId,this.$store.state.musicListId)})),this.$store.state.isLogin&&(null==this.$store.state.subSingerList&&await this.getSubSingerList(),this.getIsSub())}},u=d,h=s(1001),m=(0,h.Z)(u,e,a,!1,null,"af67d196",null),g=m.exports},3214:function(t,i,s){function e(t){t=parseInt(t),t=t>1e4?Math.floor(t/1e3):Math.floor(t);let i=Math.floor(t/60),s=Math.floor(t%60);return i=i<10?"0"+i:i,s=s<10?"0"+s:s,i+":"+s}function a(){return Date.now()}function o(t){t=t.split(":");let i=parseInt(t[0]),s=parseInt(t[1]);return 60*i+s}function l(t,i){/(y+)/.test(i)&&(i=i.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let e in s)if(new RegExp(`(${e})`).test(i)){let t=s[e]+"";i=i.replace(RegExp.$1,1===RegExp.$1.length?t:r(t))}return i}function n(t){return t>1e4?(t=(t/1e4).toFixed(1),t+"万"):t}function r(t){return("00"+t).substr(t.length)}s.d(i,{J4:function(){return o},dg:function(){return a},oF:function(){return e},p6:function(){return l},xw:function(){return n}})},2177:function(t,i,s){t.exports=s.p+"img/topSongsLogo.57a12bfc.png"}}]);
//# sourceMappingURL=376.d5ee872c.js.map