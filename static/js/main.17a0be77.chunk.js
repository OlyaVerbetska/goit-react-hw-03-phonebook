(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1T44i",contactForm__label:"ContactForm_contactForm__label__2AoVE",contactForm__input:"ContactForm_contactForm__input__1LueP",contactForm__title:"ContactForm_contactForm__title__28vtR",contactForm__button:"ContactForm_contactForm__button__38E0C"}},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(11),r=n.n(o),i=n(13),s=n(4),l=n(5),u=n(7),m=n(6),_=n(12),b=n(22),d=n(1),h=n.n(d),j=n(0),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).nameInputId=Object(b.a)(),t.telInputId=Object(b.a)(),t.state={name:"",number:""},t.changeInput=function(e){var n=e.currentTarget.name;t.setState(Object(_.a)({},n,e.currentTarget.value))},t.handleFormSubmit=function(e){e.preventDefault(),Boolean(t.props.existContacts.find((function(e){return e.name===t.state.name})))?alert("".concat(t.state.name," is already in contacts")):t.props.onFormSubmit(t.state),t.resetInput()},t.resetInput=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.handleFormSubmit,className:h.a.contactForm,children:[Object(j.jsxs)("label",{htmlFor:this.nameInputId,className:h.a.contactForm__label,children:[Object(j.jsx)("span",{className:h.a.contactForm__title,children:"Name:"}),Object(j.jsx)("input",{id:this.nameInputId,type:"text",name:"name",className:h.a.contactForm__input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,required:!0,onChange:this.changeInput})]}),Object(j.jsxs)("label",{htmlFor:this.telInputId,className:h.a.contactForm__label,children:[Object(j.jsx)("span",{className:h.a.contactForm__title,children:" Phone:"}),Object(j.jsx)("input",{id:this.telInputId,type:"tel",name:"number",className:h.a.contactForm__input,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:n,required:!0,onChange:this.changeInput})]}),Object(j.jsx)("button",{type:"submit",className:h.a.contactForm__button,children:"Add contact"})]})}}]),n}(a.Component),f=n(3),O=n.n(f),F=function(t){var e=t.contactsForList,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:O.a.contactList,children:e.map((function(t){return Object(j.jsxs)("li",{className:O.a.contactList__item,children:[Object(j.jsxs)("span",{className:O.a.contactList__elem,children:[" ",t.name,":"]}),Object(j.jsxs)("span",{children:[t.number," "]}),Object(j.jsx)("button",{type:"button",className:O.a.contactList__button,onClick:function(){return n(t.id)},children:"Delete"})]},Object(b.a)())}))})},C=n(9),x=n.n(C),v=function(t){var e=t.onFilterValue,n=t.value;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:x.a.filter__title,children:"Find contacts by name:"}),Object(j.jsx)("label",{htmlFor:Object(b.a)()}),Object(j.jsx)("input",{className:x.a.filter__input,id:Object(b.a)(),type:"text",name:"filter",onChange:e,value:n})]})},g=(n(19),[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),L=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:g,filter:""},t.addContact=function(e){var n={name:e.name,number:e.number};t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("did mount");var t=localStorage.getItem("My Contacts"),e=JSON.parse(t);e?this.setState({contacts:e}):this.setState({contacts:g})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("My Contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=this.getVisibleContacts();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Phonebook"}),Object(j.jsx)(p,{onFormSubmit:this.addContact,existContacts:n}),Object(j.jsx)(v,{value:e,onFilterValue:this.changeFilter}),n.length>0&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"subtitle",children:"Contacts"}),Object(j.jsx)(F,{contactsForList:a,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);n(20);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={contactList:"ContactList_contactList__3c3Va",contactList__item:"ContactList_contactList__item__-mBaY",contactList__elem:"ContactList_contactList__elem__2iGgG",contactList__button:"ContactList_contactList__button__2nhbl"}},9:function(t,e,n){t.exports={filter__title:"Filter_filter__title__MANeP",filter__input:"Filter_filter__input__1WyLX"}}},[[21,1,2]]]);
//# sourceMappingURL=main.17a0be77.chunk.js.map