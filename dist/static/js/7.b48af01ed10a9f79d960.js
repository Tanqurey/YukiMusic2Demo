webpackJsonp([7],{"aMW/":function(t,s){},vUck:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("4YfN"),n=a.n(e),i=a("2bvH"),o=a("xKLp"),r=(a("T452"),a("Q5aM"),a("Gdqy")),c=a("PvFA"),l=a("QDHU"),u=a.n(l),d=a("shW3"),g=a("9Wym"),p={created:function(){void 0==this.currentSongList.id?(this.$router.replace({path:"/hotsonglist"}),this.$router.go(0)):this._getListSong(this.currentSongList.id)},data:function(){return{singerDesc:"",isLoading:!0,songList:[],ops:{bar:{background:"#D32F2F"}}}},computed:n()({},Object(i.c)(["currentSongList","sequenceList","playList"])),methods:n()({_getListSong:function(t){var s=this;Object(o.a)(t).then(function(t){if(s.songList=[],200===t.data.code)for(var a=t.data.data.tracks,e=0;e<a.length;e++){var n={};n.id=a[e].id,n.name=a[e].name,n.duration=a[e].duration,n.albumPic=a[e].album.picUrl,n.albumId=a[e].album.id,n.album=a[e].album.name,n.singer=Object(r.f)(a[e].artists),s.songList.push(new c.a(n)),s.isLoading=!1}})},playAll:function(){this.replacePlayList({list:this.songList})}},Object(i.d)({setIndex:"SET_CURRENT_INDEX",setState:"SET_PLAYING_STATE"}),Object(i.b)(["replacePlayList"])),components:{List:g.a,PlayButton:d.a,vuescroll:u.a}},L={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("el-row",{staticClass:"detail-container"},[t.isLoading?a("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"loading-box"}):t._e(),t._v(" "),t.isLoading?t._e():a("el-col",{staticClass:"info"},[a("el-row",[a("el-col",{staticClass:"img",attrs:{push:3,span:4}},[a("img",{attrs:{src:t.currentSongList.picUrl}})]),t._v(" "),a("el-col",{staticClass:"introduction",attrs:{push:3,span:14}},[a("div",{staticClass:"text-container"},[a("vuescroll",{attrs:{ops:t.ops}},[a("div",{staticClass:"text",domProps:{innerHTML:t._s(""===t.currentSongList.desc?"暂无歌手介绍":t.currentSongList.desc.replace(/\n/g,"<br/>"))}})]),t._v(" "),a("div",{staticClass:"tag"},[t._v(t._s(t.currentSongList.name)+"  ")])],1)])],1)],1),t._v(" "),t.isLoading?t._e():a("el-col",{staticClass:"song-container"},[a("el-row",[a("el-col",{attrs:{push:3,span:18}},[a("play-button",{nativeOn:{click:function(s){return t.playAll(s)}}}),t._v(" "),a("list",{attrs:{dataList:t.songList}})],1)],1)],1)],1)},staticRenderFns:[]};var v=a("C7Lr")(p,L,!1,function(t){a("aMW/")},"data-v-551a79b8",null);s.default=v.exports},xKLp:function(t,s,a){"use strict";s.a=function(t){var s=e.b+"netease/songList",a={id:t};return i.a.get(Object(o.b)(s,a))},s.b=function(t,s){var a=e.b+"netease/songList/hot",n={orderType:"hot",pageSize:t,page:s};return i.a.get(Object(o.b)(a,n))};var e=a("T452"),n=a("84iU"),i=a.n(n),o=a("Gdqy")}});
//# sourceMappingURL=7.b48af01ed10a9f79d960.js.map