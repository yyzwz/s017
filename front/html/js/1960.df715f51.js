"use strict";(self["webpackChunks017"]=self["webpackChunks017"]||[]).push([[1960],{1960:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var i=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"container"}})])}],n=a(1821);const o={name:"test-page",components:{},props:{},data(){return{depCountData:[{title:"零食类",value:6},{title:"冷冻类",value:4},{title:"烟酒类",value:8},{title:"生鲜类",value:4},{title:"散装类",value:7},{title:"水果类",value:5},{title:"其他",value:16}],stackedColumnPlot:{}}},methods:{init(){this.initAntvFx()},initAntvFx(){var t=this.depCountData;this.stackedColumnPlot=new n.Column("container",{data:t,legend:{layout:"horizontal",position:"top",maxRow:2},autoFit:!0,padding:"auto",xField:"title",yField:"value",color:"#19be6b",marginRatio:.1,columnStyle:{radius:[20,20,0,0],fillOpacity:.6,stroke:"#ff9900",lineDash:[5,5]},label:{position:"top",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:{title:{alias:"成交地区"},value:{alias:"成交量"}}}),this.stackedColumnPlot.render()}},mounted(){this.init()}},s=o;var u=a(1001),r=(0,u.Z)(s,i,l,!1,null,"50b19ac7",null);const d=r.exports}}]);