"use strict";(self["webpackChunks017"]=self["webpackChunks017"]||[]).push([[4146],{4146:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"message-con",on:{click:e.showMessage}},[s("Tooltip",{attrs:{always:e.value>0,content:e.value>0?"有"+e.value+"条未读消息":"无未读消息",placement:"bottom"}},[s("Badge",{attrs:{count:e.value,dot:""}},[s("Icon",{attrs:{type:"md-notifications",size:22}})],1)],1)],1)},n=[],o=t(7792);const l={name:"messageTip",props:{value:{type:Number,default:0}},methods:{showMessage(){o.ZP.openNewPage(this,"message_index"),this.$router.push({name:"message_index"})}}},u=l;var c=t(1001),i=(0,c.Z)(u,a,n,!1,null,null,null);const r=i.exports}}]);