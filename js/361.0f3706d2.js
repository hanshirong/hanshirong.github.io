"use strict";(self["webpackChunkcloud_music"]=self["webpackChunkcloud_music"]||[]).push([[361],{4361:function(t,e,i){i.r(e),i.d(e,{default:function(){return a}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"recommendMusic"},[e("div",{staticClass:"recommendInfo"},[t._m(0),e("div",{staticClass:"buttons"},[e("div",{staticClass:"buttonItem playAll",on:{click:t.playAll}},[e("i",{staticClass:"iconfont icon-songlist-01"}),e("span",[t._v("播放全部")])])])]),0!=t.recommendMusic.length?e("div",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.recommendMusic,size:"mini","highlight-current-row":"",stripe:"",lazy:""},on:{"row-dblclick":t.clickRow}},[e("el-table-column",{attrs:{label:"",width:"30",type:"index",index:t.handleIndex}}),e("el-table-column",{attrs:{prop:"name",label:"音乐标题","min-width":"350"}}),e("el-table-column",{attrs:{prop:"ar[0].name",label:"歌手","min-width":"120"}}),e("el-table-column",{attrs:{prop:"al.name",label:"专辑","min-width":"170"}}),e("el-table-column",{attrs:{prop:"dt",label:"时长","min-width":"100"}})],1),e("div",{staticClass:"placeholder"})],1):t._e()])},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("div",{staticClass:"cover"},[e("img",{attrs:{src:i(4400),alt:""}})]),e("div",{staticClass:"titleInfo"},[e("div",{staticClass:"infoTop"},[t._v("每日歌曲推荐")]),e("div",{staticClass:"infoBottom"},[t._v("根据你的音乐口味生成，每天6:00更新")])])])}],n=i(3214),r={name:"RecommendMusic",data(){return{recommendMusic:[],recommendMusicListId:"recommendMusic"}},methods:{async getRecommendMusic(){let t=await this.$request("/recommend/songs");this.recommendMusic=t.data.data.dailySongs,this.recommendMusic.forEach(((t,e)=>{this.recommendMusic[e].dt=(0,n.oF)(t.dt)}))},playAll(){console.log(this.recommendMusic),this.$store.commit("updateMusicId",this.recommendMusic[0].id),this.$store.commit("updateMusicList",{musicList:this.recommendMusic,musicListId:this.recommendMusicListId})},handleIndex(t){return t+=1,t<10?"0"+t:t},async clickRow(t){this.$store.commit("updateMusicId",t.id),this.recommendMusicListId!=this.$store.state.musicListId&&this.$store.commit("updateMusicList",{musicList:this.recommendMusic,musicListId:this.recommendMusicListId})},handleDOM(t,e){if(document.querySelector(".recommendMusic")){let i=document.querySelector(".recommendMusic").querySelectorAll(".el-table__row"),s=this.recommendMusic.findIndex((e=>e.id==t));if(-1!=s&&(i[s].children[0].querySelector(".cell").innerHTML='<div><i class="iconfont icon-yinle"></i></div>',i[s].children[0].querySelector(".iconfont").classList.add("currentRow"),i[s].children[1].querySelector(".cell").classList.add("currentRow")),-1!=e){let t=this.recommendMusic.findIndex((t=>t.id==e));-1!=t&&(i[t].children[0].querySelector(".cell").innerHTML=`<div>${t+1<10?"0"+(t+1):t+1}</div>`,i[t].children[1].querySelector(".cell").classList.remove("currentRow"))}}}},created(){this.$store.state.isLogin||(this.$message.error("只有登录后才能进入每日推荐页面哦!"),this.$router.replace("/discover"))},async mounted(){this.$store.state.isLogin&&(await this.getRecommendMusic(),this.recommendMusicListId==this.$store.state.musicListId&&this.handleDOM(this.$store.state.musicId))},watch:{"$store.state.musicId"(t,e){this.handleDOM(t,e)}}},o=r,l=i(1001),d=(0,l.Z)(o,s,c,!1,null,"31c47178",null),a=d.exports},3214:function(t,e,i){function s(t){t=parseInt(t),t=t>1e4?Math.floor(t/1e3):Math.floor(t);let e=Math.floor(t/60),i=Math.floor(t%60);return e=e<10?"0"+e:e,i=i<10?"0"+i:i,e+":"+i}function c(){return Date.now()}function n(t){t=t.split(":");let e=parseInt(t[0]),i=parseInt(t[1]);return 60*e+i}function r(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let s in i)if(new RegExp(`(${s})`).test(e)){let t=i[s]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?t:l(t))}return e}function o(t){return t>1e4?(t=(t/1e4).toFixed(1),t+"万"):t}function l(t){return("00"+t).substr(t.length)}i.d(e,{J4:function(){return n},dg:function(){return c},oF:function(){return s},p6:function(){return r},xw:function(){return o}})},4400:function(t,e,i){t.exports=i.p+"img/recommendMusic.2c326334.png"}}]);
//# sourceMappingURL=361.0f3706d2.js.map