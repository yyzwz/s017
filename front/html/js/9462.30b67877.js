"use strict";(self["webpackChunks017"]=self["webpackChunks017"]||[]).push([[9462],{9462:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("Row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"middle"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitLogin.apply(null,arguments)}}},[e("div",{staticClass:"loginUp"},[e("div",{staticClass:"loginLeft"},[e("img",{attrs:{src:s(9722),alt:"",srcset:""}}),e("span",{staticClass:"line"}),e("span",{staticClass:"title"},[t._v("计算机机房作业管理系统")])])]),e("div",{staticClass:"loginMiddle"},[e("div",{staticClass:"login-background"},[e("div",{staticClass:"loginBg"}),e("div",{staticClass:"loginRight"},[e("Row",{staticClass:"loginRow"},[e("Tabs",{staticClass:"loginTab",on:{"on-click":t.changeTabName},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[e("TabPane",{attrs:{label:"账号密码登录",name:"userAndPassword"}},[e("Form",{ref:"usernameLoginForm",staticClass:"form",attrs:{model:t.form,rules:t.usernameLoginFormRules}},[e("FormItem",{staticClass:"loginInput",attrs:{prop:"username"}},[e("Row",[e("Input",{attrs:{size:"large",clearable:"",placeholder:"登录账号",autocomplete:"off"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}},[e("Icon",{staticClass:"iconfont icon-yonghu",staticStyle:{"line-height":"50px"},attrs:{slot:"prefix"},slot:"prefix"})],1)],1)],1),e("FormItem",{attrs:{prop:"password"}},[e("Input",{staticStyle:{height:"50px","line-height":"50px"},attrs:{type:"password",size:"large",placeholder:"请输入登录密码",password:"",autocomplete:"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[e("Icon",{staticClass:"iconfont icon-mima1",staticStyle:{"line-height":"50px"},attrs:{slot:"prefix"},slot:"prefix"})],1)],1),e("FormItem",{attrs:{prop:"imgCode"}},[e("Row",{staticStyle:{"align-items":"center",overflow:"hidden"},attrs:{type:"flex",justify:"space-between"}},[e("Input",{staticClass:"input-verify",attrs:{size:"large",clearable:"",placeholder:"请输入验证码",maxlength:10},model:{value:t.form.imgCode,callback:function(e){t.$set(t.form,"imgCode",e)},expression:"form.imgCode"}}),e("div",{staticClass:"code-image",staticStyle:{position:"relative","font-size":"12px"}},[t.loadingCaptcha?e("Spin",{attrs:{fix:""}}):t._e(),e("img",{staticStyle:{width:"110px",cursor:"pointer",display:"block"},attrs:{src:t.captchaImg,alt:"验证码加载失败"},on:{click:t.getCaptchaImg}})],1)],1)],1)],1),e("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[e("Checkbox",{attrs:{size:"large"},model:{value:t.saveLogin,callback:function(e){t.saveLogin=e},expression:"saveLogin"}},[t._v("是否自动登录")]),e("router-link",{attrs:{to:"/regist"}},[e("a",{staticClass:"forget-pass"},[t._v("没有账号？点我注册")])])],1),e("Row",[e("Button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",loading:t.loading,long:""},on:{click:t.submitLogin}},[t.loading?e("span",[t._v("正在登录...请稍后}")]):e("span",{staticStyle:{"letter-spacing":"20px","font-weight":"bold"}},[t._v("登录")])])],1)],1),e("TabPane",{attrs:{label:"企业微信扫码",name:"mobile"}},[e("div",{attrs:{id:"qywxsmqywxsm"}})])],1)],1),e("p",{staticClass:"loginBottom"},[t._v(" ART YOUR DREAM ")])],1)])]),e("div",{staticClass:"loginDown"},[e("p",{staticStyle:{"margin-top":"10px"}},[t._v("帮助 | 隐私 | 条款")]),e("p",[e("span",[t._v("Copyright © 2020 - 至今 XXX 版权所有")]),e("span",{staticStyle:{display:"inline-block",width:"4px",height:"6px"}}),e("a",{staticStyle:{color:"#848585"},attrs:{target:"_blank",href:"https://beian.miit.gov.cn"}},[t._v("ICP备案 浙ICP备XXXXXXXX号")]),e("a",{attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=XXXXXXXXXXXXXX号"}},[e("img",{staticStyle:{"margin-left":"6px"},attrs:{src:s(7581)}}),e("p",{staticStyle:{display:"inline-block",color:"#848585"}},[t._v("浙公网安备 XXXXXXXXXXXXXX号")])])])])])],1)},i=[],o=s(7877),r=s(1955),n=s(7792);const l={components:{},data(){return{saoMaFx:!1,captchaId:"",captchaImg:"",loadingCaptcha:!1,error:!1,tabName:"userAndPassword",saveLogin:!0,loading:!1,form:{username:"admin",password:"123456",mobile:"",code:""},usernameLoginFormRules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],imgCode:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},methods:{getCaptchaImg(){this.loadingCaptcha=!0,(0,o.Ul)().then((t=>{this.loadingCaptcha=!1,t.success&&(this.captchaId=t.result,this.captchaImg=o._g+this.captchaId)}))},changeTabName(t){"userAndPassword"!=t&&window.WwLogin({id:"qywxsmqywxsm",appid:"wwf94bb44e76e308f8",agentid:"1000002",redirect_uri:"https://artskyhome.com:8080/%23/login",state:"ZWZ1314520",href:""})},afterLogin(t){let e=t.result;this.setStore("accessToken",e),(0,o.eY)().then((t=>{if(t.success){delete t.result.permissions;let e=[];t.result.roles.forEach((t=>{e.push(t.name)})),delete t.result.roles,this.setStore("roles",e),this.setStore("saveLogin",this.saveLogin),this.saveLogin?r.Z.set("userInfo",JSON.stringify(t.result),{expires:7}):r.Z.set("userInfo",JSON.stringify(t.result)),this.setStore("userInfo",t.result),this.$store.commit("setAvatarPath",t.result.avatar),n.ZP.initRouter(this),this.$router.push({name:"home_index"})}else this.loading=!1}))},submitLogin(){this.$refs.usernameLoginForm.validate((t=>{t&&(this.loading=!0,(0,o.x4)({username:this.form.username,password:this.form.password,code:this.form.imgCode,captchaId:this.captchaId,saveLogin:this.saveLogin}).then((t=>{t.success?this.afterLogin(t):(this.loading=!1,this.getCaptchaImg())})))}))}},mounted(){this.getCaptchaImg()}},c=l;var g=s(1001),p=(0,g.Z)(c,a,i,!1,null,null,null);const m=p.exports},7581:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAADU0lEQVQ4T02SW0xbdQCHf/9z6Tk9PW2ht1EKHReXEbqYLGPOaHRBcTEYXXQIOmP0wUXReddoxh5U4qXoFt6Ul+ncFnAXdTGSEJx4W1iGDGHjEmRDoLbrvaXt6ek5p+eYLVni7+l7+H1vH8H/FoudFOXZVJNssK2XJq48qYEw27Y3D/Kq/HNdS8M8cbav37qTW2AYYeHS2a/f//XshU4ndd3HKxLNed3QfRvLK/Nq5J62wJlte57tIaSqcMO5KRqGwUenjuw7FBzu28DG+V3JFQiyAZPLDK3GjTFPAEtzueLrbz30svv26qOEtGrEMP5kI1MTH3zc+0c3Z1Htb9pnkf0hBllgwVpZyEtxVL+9EwO5LZDW4snXXmnqD1PXgsSID3hHxpaHXnxHv/fDjjm0/jKOxAoFysKgrOpQSgoq/QwWX+jCS0EafQdMY491bt9Lcuf290yuqj37gi7z4UcvYuvINJLXNdBtXvAOAaXRNbCGgvSBPdjba0f/e0Rq3xX4jISGnvgpqXD3dwWb8WrHFezWp7E4moJjZxUs/gqoCzm4m0X8mK/HR0c8GPo0jQYHf54sDjwetTvh6TxxF0ozMzjaPgmkDOQTJfAuARwBzPU2PHWqAeXGTfj+jXnkwsUImf2iI+2zZSu+jN2HQwdD+IY9httaLAhxHESfDTWyhqXhGHYX2vF87ybs3zyBWE4MkeXB5+ZFc7wp7wig86AVpt/OoYWLwG8pwyKyiAkOTK1asNocwOBhFS4tgZJhmyT/fNu9LkfCVqeHwhwVwKnhAv5apnF3XRZ2poBj424Iooh3n5HQVruITLoMwV+bIYmZvpPrC+cfUSJ5TmQUVLTU40ZXXKmIcl5Fzl4FhjZAX/4bRY0Gv9FatDZuPU6K6fG6/MrI53J0+sH8QhpWvx02nx2lVBGUmQVXwUMKZSGlNDDVHlCC+ztbw5Zusr58uknNzH1V1tZ2aDkVKMmgTABoDrSuQIpkQXgevM8FXdMArvKi4N38NJH+HfAbeqanEL3WpacyVpYDpeVlEJqGLivQKQaUQBngBIPdUBPlKmtPUETsvxl56uon9uiFq3cqyfgDnK20g+c4L8PCSplMOhhzgnFWhaU89bthYkbrGu+4TKoflv4DDAFn2kNBLNMAAAAASUVORK5CYII="},9722:(t,e,s)=>{t.exports=s.p+"img/logo.c132e3cd.png"}}]);