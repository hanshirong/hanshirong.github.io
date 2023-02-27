"use strict";(self["webpackChunkcloud_music"]=self["webpackChunkcloud_music"]||[]).push([[428],{5428:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"SearchSong"},[e("div",{staticClass:"tip"},[t._v("找到 "+t._s(t.songCount)+" 首单曲")]),t.multiMatch.artist&&1==t.currentPage?e("div",{staticClass:"multiMatch"},[e("div",{staticClass:"matchTitle"},[t._v("最佳匹配")]),e("div",{staticClass:"matchResult",on:{click:function(e){return t.goToSingerDetail(t.multiMatch.artist[0].id)}}},[e("div",{staticClass:"matchCover"},[e("img",{attrs:{src:t.multiMatch.artist[0].img1v1Url+"?param==200y200",alt:""}})]),e("div",{staticClass:"matchName"},[t._v("歌手："+t._s(t.multiMatch.artist[0].name))]),e("i",{staticClass:"iconfont icon-arrow-right-bold"})])]):t._e(),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.searchSongList,size:"mini","highlight-current-row":"",stripe:""},on:{"row-dblclick":t.clickRow}},[e("el-table-column",{attrs:{label:"",width:"30",type:"index",index:t.handleIndex}}),e("el-table-column",{attrs:{prop:"name",label:"音乐标题","min-width":"200"}}),e("el-table-column",{attrs:{prop:"ar[0].name",label:"歌手","min-width":"100"}}),e("el-table-column",{attrs:{prop:"al.name",label:"专辑","min-width":"170"}}),e("el-table-column",{attrs:{prop:"dt",label:"时长","min-width":"60"}})],1),0!=t.searchSongList.length?e("div",{staticClass:"page"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.songCount,small:"","page-size":30,"current-page":t.currentPage},on:{"current-change":t.pageChange}})],1):t._e()],1)},a=[],r=(i(7658),i(3214)),n={name:"SearchSong",data(){return{multiMatch:{},searchSongList:[],songCount:0,currentPage:1}},methods:{async getMultMath(){let t=await this.$request("/search/multimatch",{keywords:this.$route.params.id});this.multiMatch=t.data.result},async getSearchSong(){let t=await this.$request("/cloudsearch",{keywords:this.$route.params.id,offset:30*(this.currentPage-1)});this.songCount=t.data.result.songCount,this.searchSongList=t.data.result.songs,this.searchSongList.forEach(((t,e)=>{this.searchSongList[e].dt=(0,r.oF)(t.dt)}))},handleIndex(t){return t=t+1+30*(this.currentPage-1),t<10?"0"+t:t},async clickRow(t){let e=this.$store.state.musicList,i=this.$store.state.currentIndex,s=e.find((e=>e.id==t.id));s?this.$store.commit("updateMusicId",t.id):(this.$store.commit("changePlayState",!1),e.splice(i+1,0,t),this.$store.commit("updateMusicId",t.id),this.$store.commit("updateMusicList",{musicList:e,musicListId:this.$store.state.musicListId}))},pageChange(t){this.currentPage=t,this.searchSongList=[],this.getSearchSong()},goToSingerDetail(t){this.$router.push({name:"singerDetail",params:{id:t}})},handleDOM(t,e){if(document.querySelector(".SearchSong")){let i=document.querySelector(".SearchSong").querySelectorAll(".el-table__row"),s=this.searchSongList.findIndex((e=>e.id==t));if(console.log(s),-1!=s&&(i[s].children[0].querySelector(".cell").innerHTML='<div><i class="iconfont icon-yinle"></i></div>',i[s].children[0].querySelector(".iconfont").classList.add("currentRow"),i[s].children[1].querySelector(".cell").classList.add("currentRow")),-1!=e){let t=this.searchSongList.findIndex((t=>t.id==e));-1!=t&&(i[t].children[0].querySelector(".cell").innerHTML=`<div>${t+1<10?"0"+(t+1):t+1}</div>`,i[t].children[1].querySelector(".cell").classList.remove("currentRow"))}}}},created(){this.getMultMath(),this.getSearchSong()},watch:{"$store.state.musicId"(t,e){this.handleDOM(t,e)}},async mounted(){this.$nextTick((()=>{this.$route.params.id==this.$store.state.musicListId&&this.handleDOM(this.$store.state.musicId)}))}},c=n,l=i(1001),o=(0,l.Z)(c,s,a,!1,null,"4d5f8a31",null),u=o.exports},3214:function(t,e,i){function s(t){t=parseInt(t),t=t>1e4?Math.floor(t/1e3):Math.floor(t);let e=Math.floor(t/60),i=Math.floor(t%60);return e=e<10?"0"+e:e,i=i<10?"0"+i:i,e+":"+i}function a(){return Date.now()}function r(t){t=t.split(":");let e=parseInt(t[0]),i=parseInt(t[1]);return 60*e+i}function n(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));let i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let s in i)if(new RegExp(`(${s})`).test(e)){let t=i[s]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?t:l(t))}return e}function c(t){return t>1e4?(t=(t/1e4).toFixed(1),t+"万"):t}function l(t){return("00"+t).substr(t.length)}i.d(e,{J4:function(){return r},dg:function(){return a},oF:function(){return s},p6:function(){return n},xw:function(){return c}})}}]);
//# sourceMappingURL=428.6069589b.js.map