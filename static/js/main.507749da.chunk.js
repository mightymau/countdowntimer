(this.webpackJsonpcountdowntimer=this.webpackJsonpcountdowntimer||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(2),l=a.n(i),r=(a(12),a(3)),u=a(4),m=a(6),c=a(5);var o=function(e){return s.a.createElement("div",{className:"message"},s.a.createElement("h2",{className:"message"},function(){if(e.timer<=Math.abs(e.initialValue/2)&&null!==e.initialValue)return 0===e.timer?"Time's Up!":"More than halfway there!"}()))};var d=function(e){return s.a.createElement("div",{className:"input-form"},s.a.createElement("form",{onSubmit:e.onSubmit},s.a.createElement("input",{className:"input-box",type:"text",onChange:function(e){var t;t=e.target.value,isNaN(t)||parseInt(t).toString()!==t?isNaN(parseInt(e.target.value))?e.target.value=null:e.target.value=parseInt(e.target.value).toString().slice(0,2):e.target.value=e.target.value.slice(0,2)},name:"startTime",id:"startTime",placeholder:"(Min)"}),s.a.createElement("button",{className:"submit-button"},"Start")))};var g=function(e){return s.a.createElement("div",{className:"pause"},s.a.createElement("button",{className:e.isRunning||e.disableButton?"pause-button":"resume-button",disabled:e.disableButton,onClick:e.togglePauseResume},e.isRunning||e.disableButton?"Pause":"Resume"))};var p=function(e){return s.a.createElement("div",{className:"speed"},s.a.createElement("button",{disabled:e.disableButton,className:1e3===e.selectedSpeed?"selected speed-button":"speed-button",onClick:e.speedChange,value:"1000"},"1x"),s.a.createElement("button",{disabled:e.disableButton,className:666===e.selectedSpeed?"selected speed-button":"speed-button",onClick:e.speedChange,value:"666"},"1.5x"),s.a.createElement("button",{disabled:e.disableButton,className:500===e.selectedSpeed?"selected speed-button":"speed-button",onClick:e.speedChange,value:"500"},"2x"))},b=(a(13),function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).tick=function(){if(n.state.timer>0&&n.state.isRunning){var e=n.state.timer-1;n.setState({timer:e,minutes:Math.floor(e/60),seconds:e%60}),0===n.state.timer&&n.setState({togglePauseResumeDisabled:!0,isRunning:!1},clearInterval(n.timerId))}},n.formatTime=function(e,t){return e<10&&(e="0"+e),t<10&&(t="0"+t),s.a.createElement("span",null,e,":",t)},n.onSubmit=function(e){if(e.preventDefault(),""!==e.target.startTime.value&&"0"!==e.target.startTime.value){n.state.isRunning&&clearInterval(n.timerId);var t=60*parseInt(e.target.startTime.value);n.setState({timer:t,minutes:Math.floor(t/60),seconds:t%60,initialValue:t,isRunning:!0,togglePauseResumeDisabled:!1,speed:1e3}),n.timerId=setInterval((function(){return n.tick()}),1e3)}},n.onTogglePauseResume=function(){var e=n.state.isRunning;e?clearInterval(n.timerId):n.timerId=setInterval((function(){return n.tick()}),n.state.speed),n.setState({isRunning:!e})},n.speedChange=function(e){clearInterval(n.timerId),n.setState({speed:parseInt(e.target.value)}),n.timerId=setInterval((function(){return n.tick()}),e.target.value)},n.getTimerStyle=function(){if(n.state.timer<=20&&null!=n.state.initialValue)return n.state.timer<=10&&null!=n.state.initialValue?"warning blink":"warning"},n.state={timer:0,minutes:0,seconds:0,initialValue:null,isRunning:!1,togglePauseResumeDisabled:!0,speed:1e3},n}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d,{onSubmit:this.onSubmit}),s.a.createElement(o,{initialValue:this.state.initialValue,timer:this.state.timer}),s.a.createElement("div",{className:"timer"},s.a.createElement("h1",{className:this.getTimerStyle()},this.formatTime(this.state.minutes,this.state.seconds))),s.a.createElement(g,{disableButton:this.state.togglePauseResumeDisabled,isRunning:this.state.isRunning,togglePauseResume:this.onTogglePauseResume}),s.a.createElement(p,{disableButton:!this.state.isRunning,selectedSpeed:this.state.speed,speedChange:this.speedChange}))}}]),a}(s.a.Component));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.507749da.chunk.js.map