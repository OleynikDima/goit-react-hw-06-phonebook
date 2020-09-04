(this["webpackJsonpredux-book"]=this["webpackJsonpredux-book"]||[]).push([[0],{17:function(e,t,n){e.exports={container:"Alert_container__1rc7v",text:"Alert_text__22xAS"}},23:function(e,t,n){e.exports={enter:"alert_enter__10tOI",enterActive:"alert_enterActive__23mND",exit:"alert_exit__WQGvv",exitActive:"alert_exitActive__2U44I"}},24:function(e,t,n){e.exports={enter:"pop_enter__2bpL5",enterActive:"pop_enterActive__1TgHP",exit:"pop_exit__20DOa",exitActive:"pop_exitActive__3ql9l"}},25:function(e,t,n){e.exports={enter:"filter_enter__3AX-_",enterActive:"filter_enterActive__WgEPX",exit:"filter_exit__2y5F1",exitActive:"filter_exitActive__n1mOP"}},30:function(e,t,n){e.exports=n(51)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(7),i=n.n(o),l=n(8),u=n(13),s=n(26),m=n(3),_=n(5),b=n(40),p=Object(_.b)("contacts/changeFilter"),f=Object(_.b)("contacts/remove"),d={changeFilter:p,newObj:Object(_.b)("contacts/addContact",(function(e){var t=e.text,n=e.number;return{payload:{contacts:{id:b(),text:t,number:n}}}})),onRemoveItem:f},x=Object(_.c)([],(a={},Object(u.a)(a,d.newObj,(function(e,t){return[].concat(Object(s.a)(e),[t.payload.contacts])})),Object(u.a)(a,d.onRemoveItem,(function(e,t){return e.filter((function(e){return-1===e.id.indexOf(t.payload.itemId)}))})),a)),v=Object(_.c)("",Object(u.a)({},d.changeFilter,(function(e,t){return t.payload}))),h=Object(m.c)({items:x,filter:v}),E=Object(_.a)({reducer:{contacts:h}}),O=(n(49),n(21)),N=n(22),g=n(28),A=n(27),j=n(52),C=n(9),y=n.n(C),F=(n(50),n(23)),w=n.n(F),S=n(17),I=n.n(S),k=function(e){var t=e.text;return c.a.createElement("div",{className:I.a.container},c.a.createElement("span",{className:I.a.text}," ",t," "))},T=function(e){Object(g.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={text:"",number:"",showAlert:!1},e.handleChangeText=function(t){e.setState({text:t.target.value})},e.handleChangeNumber=function(t){e.setState({number:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.text,r=n.number;e.props.state.map((function(e){return e.text})).includes(a)?(setTimeout((function(){return e.setState({showAlert:!1})}),2e3),e.setState({showAlert:!0})):e.props.onAddText({text:a,number:r}),e.setState({text:"",number:""})},e}return Object(N.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:y.a.container},c.a.createElement("div",{className:y.a.header},c.a.createElement(j.a,{in:!0,timeout:500,appear:!0,classNames:"titleIn",unmountOnExit:!0},c.a.createElement("h2",{className:y.a.title}," Phonebook ")),c.a.createElement(j.a,{in:this.state.showAlert,timeout:250,classNames:w.a,unmountOnExit:!0},c.a.createElement(k,{text:"Contact is already"}))),c.a.createElement("form",{className:y.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name",c.a.createElement("input",{className:y.a.input,type:"input",value:this.state.text,onChange:this.handleChangeText,placeholder:"please write name"})),c.a.createElement("label",null," Number",c.a.createElement("input",{className:y.a.input_number,type:"input",country:"US",value:this.state.number,onChange:this.handleChangeNumber,placeholder:"number phone"})),c.a.createElement("button",{className:y.a.button,type:"submit",disabled:!this.state.text},"Add contact")))}}]),n}(r.Component),P=Object(l.b)((function(e){return{state:e.contacts.items}}),(function(e){return{onAddText:function(t,n){return e(d.newObj(t,n))}}}))(T),D=n(4),R=n.n(D),q=n(6),B=n.n(q),H=n(53),X=n(24),G=n.n(X),K=function(e){var t=e.contacts,n=e.onDelete;return c.a.createElement("div",{className:B.a.box_contact},c.a.createElement(H.a,{component:"ul",className:B.a.list},t.length>0?t.map((function(e){return c.a.createElement(j.a,{in:!0,key:e.id,classNames:G.a,timeout:250,unmountOnExit:!0},c.a.createElement("li",{className:B.a.item},e.text," : ",e.number,c.a.createElement("button",{className:B.a.button,onClick:function(){return n(e.id)}},"x")))})):""))};K.PropsTypes={contacts:R.a.node={id:R.a.string,name:R.a.string.isRequired,number:R.a.string.isRequired},onDelete:R.a.func.isRequired};var L={onDelete:d.onRemoveItem},J=Object(l.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:n.filter((function(e){return e.text.toLowerCase().includes(a.toLowerCase())}))}}),L)(K),Q=n(25),U=n.n(Q);var W={onChangeFilter:d.changeFilter},M=Object(l.b)((function(e){return{value:e.contacts.filter}}),W)((function(e){var t=e.value,n=e.onChangeFilter;return c.a.createElement(j.a,{in:!0,classNames:U.a,timeout:250,unmountOnExit:!0},c.a.createElement("div",{className:B.a.filter},c.a.createElement("label",{className:B.a.label},"Find contacts by name",c.a.createElement("input",{className:B.a.input_cont,type:"text",value:t,onChange:function(e){return n(e.target.value)}}))))}));var Y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(P,null),c.a.createElement(M,null),c.a.createElement(J,null))};i.a.render(c.a.createElement(l.a,{store:E},c.a.createElement(Y,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={filter:"Contact_filter__2cn7S",input_cont:"Contact_input_cont__1GHcq",label:"Contact_label__22BKO",item:"Contact_item__3P6HO",button:"Contact_button__3-gGv",list:"Contact_list__3KXQg",box_contact:"Contact_box_contact__33PdI"}},9:function(e,t,n){e.exports={header:"Form_header__B1HhE",title:"Form_title__lNS_Y",container:"Form_container___cwBN",form:"Form_form__2TM1N",input:"Form_input__2ESfd",input_number:"Form_input_number__2ZXKo",button:"Form_button__243jh"}}},[[30,1,2]]]);
//# sourceMappingURL=main.d7a2d178.chunk.js.map