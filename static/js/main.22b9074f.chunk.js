(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),s=a.n(l),c=a(2),r=a(3),u=a(5),o=a(4),h=a(1),m=a(6),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.className,onClick:this.props.onClick},i.a.createElement("p",null,this.props.value))}}]),t}(i.a.Component);function p(e){return e.hasItems?i.a.createElement("input",{onClick:e.onClick,type:"button",value:"Clear Completed Items"}):i.a.createElement("input",{type:"button",value:"Clear Completed Items",disabled:!0})}var b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={items:[],textField:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleComplete=a.handleComplete.bind(Object(h.a)(a)),a.handleClear=a.handleClear.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({textField:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),""!==this.state.textField.trim()){var t=this.state.items.slice();t.push({text:this.state.textField,status:"incomplete"}),this.setState({items:t,textField:""})}}},{key:"handleComplete",value:function(e){var t=this.state.items.slice();"incomplete"===t[e].status?t[e].status="complete":t[e].status="incomplete",this.setState({items:t})}},{key:"handleClear",value:function(){var e=this.state.items.slice();e=e.filter(function(e){return"incomplete"===e.status}),this.setState({items:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"todo-list"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",value:this.state.textField,onChange:this.handleChange,placeholder:"Add new item..."}),i.a.createElement("input",{type:"submit",value:"Add Item"})),i.a.createElement("div",null,this.state.items.map(function(t,a){return i.a.createElement(d,{threshold:.5,onClick:function(){return e.handleComplete(a)},className:t.status,key:a,value:t.text})})),i.a.createElement(p,{onClick:this.handleClear,hasItems:this.state.items.length>0}))}}]),t}(n.Component);a(15);s.a.render(i.a.createElement(b,null),document.querySelector("#root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.22b9074f.chunk.js.map