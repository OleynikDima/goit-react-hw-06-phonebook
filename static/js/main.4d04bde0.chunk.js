(this["webpackJsonpredux-book"]=this["webpackJsonpredux-book"]||[]).push([[0],{17:function(e,t,n){e.exports={container:"Alert_container__1rc7v",text:"Alert_text__22xAS"}},23:function(e,t,n){e.exports={enter:"alert_enter__10tOI",enterActive:"alert_enterActive__23mND",exit:"alert_exit__WQGvv",exitActive:"alert_exitActive__2U44I"}},24:function(e,t,n){e.exports={enter:"pop_enter__2bpL5",enterActive:"pop_enterActive__1TgHP",exit:"pop_exit__20DOa",exitActive:"pop_exitActive__3ql9l"}},25:function(e,t,n){e.exports={enter:"filter_enter__3AX-_",enterActive:"filter_enterActive__WgEPX",exit:"filter_exit__2y5F1",exitActive:"filter_exitActive__n1mOP"}},30:function(e,t,n){e.exports=n(51)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(8),i=n.n(o),l=n(5),u=n(13),s=n(26),m=n(3),_=n(6),b=n(40),p=Object(_.b)("contacts/changeFilter"),d=Object(_.b)("contacts/remove"),f={changeFilter:p,newObj:Object(_.b)("contacts/addContact",(function(e){var t=e.text,n=e.number;return{payload:{contacts:{id:b(),text:t,number:n}}}})),onRemoveItem:d},x=[{id:"id-1",text:"Rosie Simpson",number:"459-12-56"},{id:"id-2",text:"Hermione Kline",number:"443-89-12"},{id:"id-3",text:"Eden Clements",number:"645-17-79"},{id:"id-4",text:"Annie Copeland",number:"227-91-26"}],v=Object(_.c)(x,(a={},Object(u.a)(a,f.newObj,(function(e,t){return[].concat(Object(s.a)(e),[t.payload.contacts])})),Object(u.a)(a,f.onRemoveItem,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),h=Object(_.c)("",Object(u.a)({},f.changeFilter,(function(e,t){return t.payload}))),E=Object(m.c)({items:v,filter:h}),O=Object(_.a)({reducer:{contacts:E}}),g=(n(49),n(21)),N=n(22),A=n(28),C=n(27),j=n(52),y=n(9),F=n.n(y),w=(n(50),n(23)),S=n.n(w),k=n(17),I=n.n(k),T=function(e){var t=e.text;return c.a.createElement("div",{className:I.a.container},c.a.createElement("span",{className:I.a.text}," ",t," "))},P=function(e){Object(A.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={text:"",number:"",showAlert:!1},e.handleChangeText=function(t){e.setState({text:t.target.value})},e.handleChangeNumber=function(t){e.setState({number:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.text,r=n.number;e.props.state.map((function(e){return e.text})).includes(a)?(setTimeout((function(){return e.setState({showAlert:!1})}),2e3),e.setState({showAlert:!0})):e.props.onAddText({text:a,number:r}),e.setState({text:"",number:""})},e}return Object(N.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:F.a.container},c.a.createElement("div",{className:F.a.header},c.a.createElement(j.a,{in:!0,timeout:500,appear:!0,classNames:"titleIn",unmountOnExit:!0},c.a.createElement("h2",{className:F.a.title}," Phonebook ")),c.a.createElement(j.a,{in:this.state.showAlert,timeout:250,classNames:S.a,unmountOnExit:!0},c.a.createElement(T,{text:"Contact is already"}))),c.a.createElement("form",{className:F.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name",c.a.createElement("input",{className:F.a.input,type:"input",value:this.state.text,onChange:this.handleChangeText,placeholder:"please write name"})),c.a.createElement("label",null," Number",c.a.createElement("input",{className:F.a.input_number,type:"input",country:"US",value:this.state.number,onChange:this.handleChangeNumber,placeholder:"number phone"})),c.a.createElement("button",{className:F.a.button,type:"submit",disabled:!this.state.text},"Add contact")))}}]),n}(r.Component),R=Object(l.b)((function(e){return{state:e.contacts.items}}),(function(e){return{onAddText:function(t,n){return e(f.newObj(t,n))}}}))(P),D=n(4),q=n.n(D),H=n(7),B=n.n(H),K=n(53),X=n(24),G=n.n(X),L=function(e){var t=e.contacts,n=e.onDelete;return c.a.createElement("div",{className:B.a.box_contact},c.a.createElement(K.a,{component:"ul",className:B.a.list},t.length>0?t.map((function(e){return c.a.createElement(j.a,{in:!0,key:e.id,classNames:G.a,timeout:250,unmountOnExit:!0},c.a.createElement("li",{className:B.a.item},e.text," : ",e.number,c.a.createElement("button",{className:B.a.button,onClick:function(){return n(e.id)}},"x")))})):""))};L.PropsTypes={contacts:q.a.node={id:q.a.string,name:q.a.string.isRequired,number:q.a.string.isRequired},onDelete:q.a.func.isRequired};var J={onDelete:f.onRemoveItem},Q=Object(l.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:n.filter((function(e){return e.text.toLowerCase().includes(a.toLowerCase())}))}}),J)(L),U=n(25),W=n.n(U);var M={onChangeFilter:f.changeFilter},Y=Object(l.b)((function(e){return{value:e.contacts.filter}}),M)((function(e){var t=e.value,n=e.onChangeFilter;return c.a.createElement(j.a,{in:!0,classNames:W.a,timeout:250,unmountOnExit:!0},c.a.createElement("div",{className:B.a.filter},c.a.createElement("label",{className:B.a.label},"Find contacts by name",c.a.createElement("input",{className:B.a.input_cont,type:"text",value:t,onChange:function(e){return n(e.target.value)}}))))}));var Z=Object(l.b)((function(e){return{contacts:e.contacts.items}}),null)((function(e){var t=e.contacts;return console.log(t),c.a.createElement(c.a.Fragment,null,c.a.createElement(R,null),t.length>1&&c.a.createElement(Y,null),c.a.createElement(Q,null))}));i.a.render(c.a.createElement(l.a,{store:O},c.a.createElement(Z,null)),document.getElementById("root"))},7:function(e,t,n){e.exports={filter:"Contact_filter__2cn7S",input_cont:"Contact_input_cont__1GHcq",label:"Contact_label__22BKO",item:"Contact_item__3P6HO",button:"Contact_button__3-gGv",list:"Contact_list__3KXQg",box_contact:"Contact_box_contact__33PdI"}},9:function(e,t,n){e.exports={header:"Form_header__B1HhE",title:"Form_title__lNS_Y",container:"Form_container___cwBN",form:"Form_form__2TM1N",input:"Form_input__2ESfd",input_number:"Form_input_number__2ZXKo",button:"Form_button__243jh"}}},[[30,1,2]]]);
//# sourceMappingURL=main.4d04bde0.chunk.js.map