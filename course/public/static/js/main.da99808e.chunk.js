(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},20:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(12),l=a.n(i),c=a(27),r=a(28),o=(a(20),a(3)),d=a(4),u=a(7),h=a(5),p=a(6),m=(a(21),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},this.props.children)}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(2),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).clicked=a.clicked.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"clicked",value:function(){this.props.moduleClicked(this.props.id)}},{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("button",{className:"modules-button",onClick:this.clicked},n.a.createElement("h2",{className:"heading"},this.props.children)))}}]),t}(n.a.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={data:void 0===a.props.children?"":a.props.children,edit:!1},a.click=a.click.bind(Object(f.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(f.a)(a)),a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleBlur=a.handleBlur.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"click",value:function(){this.setState({edit:!0,data:this.props.children})}},{key:"handleKeyPress",value:function(e){if("Enter"===e.key){switch(this.props.data){case"name":this.props.update(this.props.type,this.props.target.id,{name:this.state.data});break;case"description":this.props.update(this.props.type,this.props.target.id,{description:this.state.data});break;case"title":this.props.update(this.props.type,this.props.target.id,{title:this.state.data});break;case"content":this.props.update(this.props.type,this.props.target.id,{content:this.state.data});break;default:console.error("something went wrong with switch statement")}this.setState({edit:!1})}}},{key:"handleBlur",value:function(){switch(this.props.data){case"name":this.props.update(this.props.type,this.props.target.id,{name:this.state.data});break;case"description":this.props.update(this.props.type,this.props.target.id,{description:this.state.data});break;case"title":this.props.update(this.props.type,this.props.target.id,{title:this.state.data});break;case"content":this.props.update(this.props.type,this.props.target.id,{content:this.state.data});break;default:console.error("something went wrong with switch statement")}this.setState({edit:!1})}},{key:"handleChange",value:function(e){this.setState({data:e.target.value})}},{key:"render",value:function(){var e=this.props.style,t=["editableText"];return this.state.edit?n.a.createElement("div",{className:t.join(" "),style:e},n.a.createElement("input",{onKeyPress:this.handleKeyPress,autoFocus:!0,onBlur:this.handleBlur,onChange:this.handleChange,value:this.state.data})):n.a.createElement("div",{className:t.join(" "),style:e},n.a.createElement("p",null,""===this.props.children?"<empty> ":this.props.children+" ",n.a.createElement("span",{onClick:this.click},n.a.createElement("i",{className:"fas fa-pencil-alt"}))))}}]),t}(s.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={method:a.props.method},a.deleteSlide=a.deleteSlide.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"deleteSlide",value:function(){this.props.delete("slides",this.props.slide.id)}},{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-6 slide"},n.a.createElement("span",{onClick:this.deleteSlide,className:"slides--element__delete"},n.a.createElement("i",{class:"fas fa-trash-alt"})),n.a.createElement("div",{className:"slides--element"},n.a.createElement("div",{className:"slides--text"},n.a.createElement(v,{style:{fontSize:"2rem",fontWeight:"bold"},update:this.props.update,type:"slides",target:this.props.slide,data:"title"},this.props.slide.title)),n.a.createElement("div",{className:"slides--img"},n.a.createElement("img",{className:"slides--element__img",src:"https://s-media-cache-ak0.pinimg.com/736x/c4/d4/82/c4d482a830bc0580f42d3b6fd26a034a--colour-palettes-scenery.jpg",alt:this.props.slide.title}))))}}]),t}(n.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"courseDetail-section"},n.a.createElement("h4",null,"Course ID: ",this.props.course?this.props.course.id:"")),n.a.createElement("div",{className:"courseDetail-section"},n.a.createElement("h4",null,"Course name:"),this.props.course?n.a.createElement(v,{style:{fontSize:"20px"},update:this.props.update,type:"courses",target:this.props.course,data:"name"},this.props.course.name):"")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"courseDetail-section"},n.a.createElement("h4",null,"Course description"),this.props.course?n.a.createElement(v,{style:{fontSize:"20px"},update:this.props.update,type:"courses",target:this.props.course,data:"description"},this.props.course.description):"")))}}]),t}(s.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).deleteModule=a.deleteModule.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"deleteModule",value:function(){this.props.delete("modules",this.props.module.id)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"moduleDetail-section"},n.a.createElement("h4",null,"Module ID: ",this.props.module?this.props.module.id:"")),n.a.createElement("div",{className:"moduleDetail-section"},n.a.createElement("h4",null,"Module name:"),this.props.module?n.a.createElement(v,{update:this.props.update,type:"modules",target:this.props.module,data:"name"},this.props.module.name):"")),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"moduleDetail-section"},n.a.createElement("h4",null,"Module description"),this.props.module?n.a.createElement(v,{update:this.props.update,type:"modules",target:this.props.module,data:"description"},this.props.module.description):""),n.a.createElement("div",{className:"moduleDetail-section"},n.a.createElement("span",{onClick:this.deleteModule,className:"module-element-delete"},"Delete Module ",n.a.createElement("i",{className:"fas fa-trash-alt"})))))}}]),t}(s.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("div",{className:"add-module",onClick:this.props.method},n.a.createElement("i",{className:"fas fa-plus"})))}}]),t}(n.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-6"},n.a.createElement("div",{className:"add-slide",onClick:this.props.method},n.a.createElement("i",{className:"fas fa-plus"})))}}]),t}(n.a.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={courses:[],modules:[],slides:[],activeModules:[],activeSlides:[],selectedCourse:1,selectedModule:0},a.getData=a.getData.bind(Object(f.a)(a)),a.addData=a.addData.bind(Object(f.a)(a)),a.test=a.test.bind(Object(f.a)(a)),a.addModule=a.addModule.bind(Object(f.a)(a)),a.addSlide=a.addSlide.bind(Object(f.a)(a)),a.manageAPI=a.manageAPI.bind(Object(f.a)(a)),a.update=a.update.bind(Object(f.a)(a)),a.moduleClicked=a.moduleClicked.bind(Object(f.a)(a)),a.updateData=a.updateData.bind(Object(f.a)(a)),a.dataChange=a.dataChange.bind(Object(f.a)(a)),a.deleteData=a.deleteData.bind(Object(f.a)(a)),a.dataDelete=a.dataDelete.bind(Object(f.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.update("courses").then(function(){return e.update("modules")}).then(function(){return e.update("slides")})}},{key:"getData",value:function(e){return fetch("/"+e).then(function(e){return e.json()})}},{key:"update",value:function(e){var t=this;return this.getData(e).then(function(a){return t.manageAPI(e,a)})}},{key:"manageAPI",value:function(e,t){var a=this;switch(e){case"courses":this.setState({courses:t});break;case"modules":this.setState({modules:t});var s=t.filter(function(e){return e.courseID===a.state.selectedCourse});this.setState({activeModules:s});break;case"slides":this.setState({slides:t});var n=t.filter(function(e){return e.courseID===a.state.selectedCourse&&e.moduleID===a.state.selectedModule});this.setState({activeSlides:n});break;default:console.log("Something went wrong in fetch switch statement")}}},{key:"addData",value:function(e){var t;switch(e){case"courses":t=JSON.stringify({name:"",description:""});break;case"modules":t=JSON.stringify({courseID:this.state.selectedCourse,name:"",description:""});break;case"slides":t=JSON.stringify({courseID:this.state.selectedCourse,moduleID:this.state.selectedModule,title:"",content:""});break;default:console.log("Error in POST function")}return fetch("/"+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:t})}},{key:"updateData",value:function(e,t,a){return console.log(e,t,a),fetch("/"+e+"/"+t,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)})}},{key:"deleteData",value:function(e,t){return fetch("/"+e+"/"+t,{method:"delete"}).then(function(e){return console.log(e)})}},{key:"moduleClicked",value:function(e){var t=this;this.setState({selectedModule:e}),this.update("modules").then(function(){document.getElementById("module").scrollIntoView({behavior:"smooth",block:"start"})}),this.update("slides"),this.setState({mDetail:this.state.activeModules.filter(function(e){return e.id===t.state.selectedModule})[0]})}},{key:"dataChange",value:function(e,t,a){var s=this;this.updateData(e,t,a).then(function(){return s.update(e)})}},{key:"addSlide",value:function(){var e=this;this.addData("slides").then(function(){return e.update("slides")})}},{key:"addModule",value:function(){var e=this;this.addData("modules").then(function(){return e.update("modules")})}},{key:"dataDelete",value:function(e,t){var a=this;"modules"===e&&this.setState({selectedModule:0}),this.deleteData(e,t).then(function(){return a.update(e)})}},{key:"test",value:function(){console.log("function check")}},{key:"render",value:function(){var e=this,t=this.state.courses.filter(function(t){return t.id===e.state.selectedCourse})[0],a=this.state.activeModules.filter(function(t){return t.id===e.state.selectedModule})[0];return n.a.createElement("div",null,n.a.createElement("div",{className:"header row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("h1",null,"MY COURSES"))),n.a.createElement("div",{className:"courseDetail row",style:{marginLeft:"0",marginRight:"0"}},n.a.createElement("h3",{style:{textAlign:"center"}},"Course Information"),n.a.createElement(E,{course:t,update:this.dataChange})),n.a.createElement("div",{className:"row modules"},n.a.createElement("h3",null,"Modules in this course"),0!==this.state.activeModules.length?this.state.activeModules.map(function(t){return n.a.createElement(b,{moduleClicked:e.moduleClicked,id:t.id,key:t.id},t.name)}):"",n.a.createElement(k,{method:this.addModule})),0!==this.state.selectedModule?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"module",className:"row moduleDetail",style:{marginLeft:"0",marginRight:"0"}},n.a.createElement("h3",{style:{textAlign:"center"}},"Module Information"),n.a.createElement(g,{module:a,update:this.dataChange,delete:this.dataDelete})),n.a.createElement("div",{className:"slides row"},n.a.createElement("h3",{style:{textAlign:"center"}},"Slides"),0!==this.state.activeSlides.length?this.state.activeSlides.map(function(t){return n.a.createElement(y,{method:e.test,key:t.id,slide:t,update:e.dataChange,delete:e.dataDelete})}):"",n.a.createElement(j,{method:this.addSlide}))):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:"footer row"}))}}]),t}(s.Component);l.a.render(n.a.createElement(c.a,null,n.a.createElement(m,null,n.a.createElement(r.a,{path:"/",exact:!0,component:O}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.da99808e.chunk.js.map