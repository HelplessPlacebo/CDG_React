(this.webpackJsonpcdg_reat=this.webpackJsonpcdg_reat||[]).push([[5],{689:function(e,a,t){e.exports={LeftLabel:"TimeSlider_LeftLabel__2qgrf",RightLabel:"TimeSlider_RightLabel__1VbVI",LeftLabelImage:"TimeSlider_LeftLabelImage__3S1BR",LabelValue:"TimeSlider_LabelValue__3KC9y"}},707:function(e,a,t){e.exports={ModalInputError:"ModalWindow_ModalInputError__2Aqa5",Err:"ModalWindow_Err__UprFu"}},743:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(39),r=t(14),i=t(19),s=t(707),u=t.n(s),g=t(708),c=t.n(g),d=t(689),m=t.n(d),T=function(e){return o.a.createElement("div",{className:m.a.LeftLabel,style:{display:"".concat(e.value||e.Position?"block":"none"),left:"".concat(e.Position&&e.offsetLeft&&e.Position-e.offsetLeft+30+"px")}},o.a.createElement("div",{className:m.a.LeftLabelImage}," "),o.a.createElement("div",{className:m.a.LabelValue}," ",e.value&&e.value.start&&e.value.start," "))},f=function(e){return o.a.createElement("div",{className:m.a.RightLabel,style:{display:"".concat(e.value||e.Position?"block":"none"),right:"".concat(e.Position&&e.offsetRight&&e.offsetRight-e.Position+"px")}},o.a.createElement("div",{className:m.a.LeftLabelImage}," "),o.a.createElement("div",{className:m.a.LabelValue}," ",e.value&&e.value.end&&e.value.end," "))},v=function(e){var a=0;if(e.offsetParent)for(;a+=e.offsetLeft,e.offsetParent;)e=e.offsetParent;else e.x&&(a+=e.x);return a},b=function(e){var a,t,n=Object(l.useState)({start:(null===(a=e.value)||void 0===a?void 0:a.start)?e.value.start:"08:00",end:(null===(t=e.value)||void 0===t?void 0:t.end)?e.value.end:"22:00"}),r=Object(i.a)(n,2),s=r[0],u=r[1],g=Object(l.useState)(),d=Object(i.a)(g,2),m=d[0],b=d[1],k=Object(l.useState)(),h=Object(i.a)(k,2),W=h[0],p=h[1],C=Object(l.useState)(),E=Object(i.a)(C,2),I=E[0],S=E[1],y=Object(l.useState)(),O=Object(i.a)(y,2),j=O[0],L=O[1],P=function(){var e=document.querySelectorAll(".input-range"),a=document.querySelectorAll(".input-range__slider"),t=getComputedStyle(e[0],null).width,l=v(e[0]),o=l+Number.parseInt(t.substr(0,t.length-2)),n=v(a[0]),r=v(a[1]);S(l),L(o),b(n),p(r)};Object(l.useEffect)((function(){e.value&&u(e.value),P()}),[e.value&&e.value]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{disabled:e.disabled,format:e.format?e.format:24,maxValue:e.maxValue?e.maxValue:"23:59",minValue:e.minValue?e.minValue:"00:01",name:"time_range",onChangeStart:function(e){},onChangeComplete:function(a){P(),e.SetTimerValue(s),u(a)},onChange:function(e){P(),u(e)},step:e.step,value:s}),o.a.createElement(T,{Position:m,offsetLeft:I,value:s}),o.a.createElement(f,{Position:W,value:s,offsetRight:j}))},k=t(76),h=t(251),W=t(216),p=t(154),C=t(58),E=t(237),I=t.n(E),S=t(239),y=t.n(S),O=t(241),j=t.n(O),L=t(75),P=t.n(L),V=t(726),_=t.n(V),D=o.a.memo((function(e){var a,t,n,s,g,c,d,m=Object(p.a)(e.WorklogToChange&&e.WorklogToChange.TaskField?e.WorklogToChange.TaskField:""),T=Object(p.a)(e.WorklogToChange&&e.WorklogToChange.Issue?e.WorklogToChange.Issue:""),f=Object(l.useState)(),v=Object(i.a)(f,2),E=v[0],S=v[1],O=Object(l.useState)(!1),L=Object(i.a)(O,2),V=L[0],D=L[1],w=Object(l.useState)(!1),M=Object(i.a)(w,2),F=M[0],N=M[1],x=null===(a=e.TimerData)||void 0===a?void 0:a.TimerValue.substr(3,(null===(t=e.TimerData)||void 0===t?void 0:t.TimerValue.length)-6),B=null===(n=e.TimerData)||void 0===n?void 0:n.TimerValue.substr(0,(null===(s=e.TimerData)||void 0===s?void 0:s.TimerValue.length)-6),R=Object(k.b)((new Date).getHours())+":"+Object(k.b)((new Date).getMinutes()),U={start:Object(k.a)(R,B,x),end:R};Object(l.useEffect)((function(){e.TimerData?(e.TimerData.TimerTaskField&&m.forceUpdate(e.TimerData.TimerTaskField),e.TimerData.TimerIssue&&T.forceUpdate(e.TimerData.TimerIssue),e.PlayingWorklog&&e.PlayingWorklog.StartTime&&e.PlayingWorklog.EndTime?S({start:e.PlayingWorklog.StartTime,end:e.PlayingWorklog.EndTime}):S(U)):e.WorklogToChange&&(e.WorklogToChange.TaskField&&m.forceUpdate(e.WorklogToChange.TaskField),e.WorklogToChange.Issue&&T.forceUpdate(e.WorklogToChange.Issue),S({start:e.WorklogToChange.StartTime,end:e.WorklogToChange.EndTime}))}),[null===(g=e.TimerData)||void 0===g?void 0:g.TimerIssue,null===(c=e.TimerData)||void 0===c?void 0:c.TimerTaskField,null===(d=e.TimerData)||void 0===d?void 0:d.TimerValue,e.WorklogToChange]);var q=function(a){a.preventDefault(),e.closeWorklogChangeModal&&e.closeWorklogChangeModal(),e.SetTimerData(void 0),e.SetWorklogToChange(void 0),e.SetIsPlayingWorklogById(!1),m.clear(),T.clear()};return e.WorklogChangeModalIsOpen?o.a.createElement(I.a,{open:e.WorklogChangeModalIsOpen,onClose:e.closeWorklogChangeModal,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(y.a,{id:"alert-dialog-title"},"New worklog"),o.a.createElement(j.a,null,o.a.createElement(P.a,{container:!0,justify:"center",alignItems:"center"},o.a.createElement(P.a,{item:!0,className:"TimeSLider",style:{paddingTop:"10%"}},(null===E||void 0===E?void 0:E.start)&&(null===E||void 0===E?void 0:E.end)&&o.a.createElement(b,{value:E,disabled:!1,step:10,SetTimerValue:S})),o.a.createElement(P.a,{item:!0,style:{paddingTop:"3rem"},className:"Inputs"},o.a.createElement(W.a,Object.assign({},m.bind,{label:"Task Field",placeholder:"Please, enter the task",width:500})),V&&o.a.createElement("div",{id:"new-issue-err",className:u.a.ModalInputError}," Please, enter worklog name"),o.a.createElement("div",{style:{paddingTop:"1rem"}},o.a.createElement(h.a,Object.assign({Issues:e.Issues},T.bind))),F&&o.a.createElement("div",{id:"new-issue-err",className:u.a.ModalInputError}," Please, enter issue name")),o.a.createElement(P.a,{item:!0,style:{paddingTop:"3rem",paddingBottom:"1rem"},className:"ContorlButtons"},o.a.createElement(P.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center"},o.a.createElement(P.a,{item:!0,onClick:function(a){if(m.value.length>0?D(!1):D(!0),T.value.length>0?N(!1):N(!0),m.value.length>0&&T.value.length>0&&E){var t;t=e.TimerData?"PlayingWorklog":"WorklogToChange";var l=Object(r.a)(Object(r.a)({},e[t]),{},{StartTime:E.start,EndTime:E.end,TaskField:m.value,Issue:T.value,status:e[t].status?e[t].status:"warning",TimerValue:e.TimerData&&e.TimerData.TimerValue?e.TimerData.TimerValue:e[t].TimerValue?e[t].TimerValue:"00:00:00"});l.IsFavorites?(e.ChangeFavoritesWorklog(e[t].id,l),e.SetIsPlayingWorklogById(!1,e[t].id)):(e.ChangeWorklog(l),e.SetIsPlayingWorklogById(!1,e[t].id)),m.clear(),T.clear(),D(!1),N(!1),q(a)}}},o.a.createElement(C.a,{fontColor:"blue",bgColor:"white",text:"save",variant:"outlined",fontSize:14,startIcon:o.a.createElement(_.a,null)})),o.a.createElement(P.a,{onClick:e.closeWorklogChangeModal},o.a.createElement(C.a,{fontColor:"red",text:"go back",variant:"outlined",fontSize:14}))))))):null}),(function(e,a){return e.WorklogChangeModalIsOpen===a.WorklogChangeModalIsOpen})),w=t(17);a.default=Object(n.b)((function(e){return{PlayingWorklog:e.WorklogsData.PlayingWorklog,WorklogToChange:e.WorklogsData.WorklogToChange}}),{AddWorklog:w.b,SetIsPlayingWorklogById:w.i,SetWorklogToChange:w.k,ChangeWorklog:w.d,ChangeFavoritesWorklog:w.c})((function(e){return o.a.createElement(D,e)}))}}]);
//# sourceMappingURL=5.9934e460.chunk.js.map