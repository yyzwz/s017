"use strict";(self["webpackChunks017"]=self["webpackChunks017"]||[]).push([[6988,8188],{6988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"姓名",prop:"name"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("FormItem",{attrs:{label:"性别",prop:"sex"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"sex",transfer:"",clearable:"",placeholder:"请选择性别..."},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}})],1),t("FormItem",{attrs:{label:"年龄",prop:"age"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("FormItem",{attrs:{label:"学号",prop:"number"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),t("FormItem",{attrs:{label:"学校",prop:"school"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},s=[],n=a(2368),r=a(8188);const i={name:"edit",components:{dict:r["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{name:"",sex:"",age:0,number:"",school:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,n.Zt)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=i;var c=a(1001),u=(0,c.Z)(o,l,s,!1,null,null,null);const d=u.exports},8188:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=function(){var e=this,t=e._self._c;return t("div",[t("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(a,l){return t("Option",{key:l,attrs:{value:a.value}},[e._v(e._s(a.title))])})),1)],1)},s=[],n=a(7877);const r={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(e){this.loading=!0,(0,n.i3)(e).then((e=>{this.loading=!1,e.success&&(this.dictData=e.result)}))},handleChange(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange(e){this.$emit("on-query-change",e)},handleClear(){this.$emit("on-clear","")},handleOpenChange(e){this.$emit("on-open-change",e)},handleSelect(e){this.$emit("on-select",e)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)},dict(e){this.getData(e)}},mounted(){this.getData(this.dict)}},i=r;var o=a(1001),c=(0,o.Z)(i,l,s,!1,null,null,null);const u=c.exports},2368:(e,t,a)=>{a.d(t,{MA:()=>i,TF:()=>s,Zt:()=>r,tS:()=>n});var l=a(7184);const s=e=>(0,l.A_)("/student/getByPage",e),n=e=>(0,l.j0)("/student/insert",e),r=e=>(0,l.j0)("/student/update",e),i=e=>(0,l.j0)("/student/delByIds",e)}}]);