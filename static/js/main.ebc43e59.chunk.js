(this["webpackJsonptienda-npallares"]=this["webpackJsonptienda-npallares"]||[]).push([[0],{17:function(t,e,c){},28:function(t,e,c){},33:function(t,e,c){},41:function(t,e,c){},42:function(t,e,c){},56:function(t,e,c){},57:function(t,e,c){},58:function(t,e,c){"use strict";c.r(e);var n=c(2),a=c.n(n),i=c(34),r=c.n(i),s=(c(41),c(42),c(9)),o=c(6),u=(c(28),c(1)),j=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(u.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",rel:"stylesheet"}),Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("div",{className:"contenedorimg",children:"Nom"})})]})},l=c.p+"static/media/chango.f2b130e8.png",d=c(36),b=c(3),O=c(4),f=c(25),p=(c(48),f.a.initializeApp({apiKey:"AIzaSyAanBnr0qIRpLxFb99JiHqRH5Ez0ZBgyew",authDomain:"tienda-npallares-firebase.firebaseapp.com",projectId:"tienda-npallares-firebase",storageBucket:"tienda-npallares-firebase.appspot.com",messagingSenderId:"804904918584",appId:"1:804904918584:web:c9ebf604a3a07bb929d0cd"})),m=function(){return f.a.firestore(p)},h=c(7),x=c.n(h),v=c(10),g=Object(n.createContext)(),k=function(t){var e=t.children,c=Object(n.useState)([]),a=Object(O.a)(c,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(v.a)(x.a.mark((function t(){var e,c,n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m(),c=e.collection("productos"),t.next=4,c.get();case 4:n=t.sent,a=n.docs.map((function(t){return t.data()})),localStorage.setItem("store",JSON.stringify(a)),r(JSON.parse(window.localStorage.getItem("store")));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(u.jsx)(g.Provider,{value:i,children:e})},N=Object(n.createContext)(),y=function(t){var e=t.children,c=Object(n.useState)([]),a=Object(O.a)(c,2),i=a[0],r=a[1],s=Object(n.useState)([]),o=Object(O.a)(s,2),j=o[0],l=o[1],f=Object(n.useState)(0),p=Object(O.a)(f,2),h=p[0],x=p[1],v=Object(n.useState)(0),k=Object(O.a)(v,2),y=k[0],S=k[1],C=Object(n.useContext)(g);return Object(n.useEffect)((function(){!function(){if(i){var t=i.reduce((function(t,e){return t+e.price*e.stock}),0);S(t)}}()}),[i]),Object(u.jsx)(N.Provider,{value:{cart:i,setCart:r,addToCart:function(t){if(i.find((function(e){return e.id===t.id}))){var e=i.map((function(e){if(e.id===t.id&&e.stock>=h.stock)return Object(b.a)(Object(b.a)({},e),{},{stock:e.stock});if(e.id===t.id){if(e.stock>h.stock)return Object(b.a)(Object(b.a)({},e),{},{stock:h.stock});var c=e.stock+t.stock;return c>e.stock&&c>h.stock?Object(b.a)(Object(b.a)({},e),{},{stock:e.stock}):Object(b.a)(Object(b.a)({},e),{},{stock:c})}return e}));r(e)}else r([].concat(Object(d.a)(i),[t]))},corroborateStock:function(t){var e=C.find((function(e){return e.id===t.id}));x(e)},itemsQuantity:function(t){var e=i.find((function(e){return e.id===t.id}));if(e&&e.stock+t.number>t.stock)l(i.reduce((function(t,e){return t+e.stock}),0));else{var c=i.reduce((function(t,e){return t+e.stock}),0)+t.number;l(c)}},cartQuantity:j,setCartQuantity:l,newQuantityShopSuma:function(t,e){var c=t+1,n=C.find((function(t){return t.id===e}));if(c>=n.stock+1);else{var a=i.find((function(t){return t.id===e})),s=i.map((function(t){return t===a?Object(b.a)(Object(b.a)({},t),{},{stock:c}):t}));r(s);var o=i.reduce((function(t,e){return t+e.stock}),1);l(o)}},newQuantityShopResta:function(t,e){var c=t-1;if(c<0);else{var n=i.find((function(t){return t.id===e})),a=i.map((function(t){return t===n?Object(b.a)(Object(b.a)({},t),{},{stock:c}):t}));r(a);var s=i.reduce((function(t,e){return t-e.stock}),1);l(s<0?-1*s:s)}},total:y,createOrder:function(t,e,c){var n={buyer:{name:t,phone:e,email:c},item:i,finalAmount:y};console.log(n),m().collection("orders").add(n).then((function(t){var e=t.id;console.log(e)}))},eliminar:function(t){if(i.length>1){var e=i.filter((function(e){return e.id!=t.id}));r(e);var c=e.reduce((function(t,e){return t+e.stock}),0);l(c)}else r([]),window.localStorage.setItem("lista",JSON.stringify([])),l(0)}},children:e})},S=c(21),C=function(){var t=Object(n.useContext)(N).cartQuantity;return Object(n.useEffect)((function(){!function(){var e=document.getElementById("itemQuantity");t>0?e.classList.remove("none"):e.classList.add("none")}()}),[t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(u.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap",rel:"stylesheet"}),Object(u.jsxs)("ul",{className:"responsive",children:[Object(u.jsx)(s.b,{to:"/nike",children:Object(u.jsx)("li",{children:"Nike"})}),Object(u.jsx)(s.b,{to:"/adidas",children:Object(u.jsx)("li",{children:"Adidas"})}),Object(u.jsx)(s.b,{to:"/topper",children:Object(u.jsx)("li",{children:"Topper"})}),Object(u.jsx)(s.b,{to:"/zapatillas",children:Object(u.jsx)("li",{children:"Zapatillas"})}),Object(u.jsx)(s.b,{to:"/buzos",children:Object(u.jsx)("li",{children:"Buzos"})}),Object(u.jsx)(s.b,{to:"/remeras",children:Object(u.jsx)("li",{children:"Remeras"})}),Object(u.jsx)(s.b,{to:"/cart",children:Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{src:l,className:"chango"}),Object(u.jsx)("span",{className:"itemQuantity none",id:"itemQuantity",children:t})]})})]})]})},_=c.p+"static/media/menu.6ea28911.png",w=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"onlyresponsive",children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:_,className:"menu"})})})})},I=function(){return Object(u.jsx)("span",{children:Object(u.jsxs)("nav",{className:"nav",children:[Object(u.jsx)(j,{}),Object(u.jsx)(w,{}),Object(u.jsx)(C,{})]})})},E=(c(56),c(57),function(t){var e=t.img,c=t.title,a=t.price,i=t.id,r=t.stock,s=Object(n.useState)(0),o=Object(O.a)(s,2),j=o[0],l=o[1],d=Object(n.useContext)(N),b=d.cart,f=d.addToCart,p=d.corroborateStock,m=d.itemsQuantity;return Object(n.useEffect)((function(){!function(){var t=b.find((function(t){return t.id===i}));if(t){var e=t.stock;l(e)}}()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container_product",children:[Object(u.jsx)("div",{className:"container_img",children:Object(u.jsx)("img",{src:e,alt:""})}),Object(u.jsxs)("div",{className:"info_container_product",children:[Object(u.jsx)("h1",{className:"title_product",children:c}),Object(u.jsxs)("p",{className:"description_product",children:["Precio $ ",a]}),Object(u.jsxs)("h3",{className:"stock_product",children:["Productos en Stock: ",r]}),Object(u.jsxs)("div",{className:"btn_container_product",children:[Object(u.jsx)("button",{onClick:function(){j>0?l(j-1):alert("No se admite cantidad negativa - ")},children:" -"}),Object(u.jsx)("div",{children:j}),Object(u.jsx)("button",{onClick:function(){j<r?l(j+1):alert("No se admite cantidad mayor al stock")},children:"+"})]}),Object(u.jsx)("button",{id:"btn",className:"btn_cart_product",onClick:function(){f({id:i,price:a,title:c,img:e,stock:j}),p({id:i,stock:r}),m({number:j,id:i,stock:r}),alert("Agregaste este producto al carrito")},children:"Agregar al carrito"}),Object(u.jsx)("div",{id:"finalizada",className:"compra-finalizada none",children:"COMPRA FINALIZADA"})]})]})})}),z=function(){var t=Object(n.useContext)(g),e=Object(n.useState)(),c=Object(O.a)(e,2),a=c[0],i=c[1],r=Object(n.useState)(!0),s=Object(O.a)(r,2),j=s[0],l=s[1],d=Object(o.f)().productoId;return Object(n.useEffect)((function(){document.title="Tienda Nom";var e,c=t.filter((function(t){return":".concat(t.id)==d}));i(c),l(!1),c.length>0?(e=JSON.stringify(c),window.localStorage.setItem("product",e)):i(JSON.parse(window.localStorage.getItem("product")))}),[d]),j?Object(u.jsx)("h3",{children:"Loading"}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"container_general_product",children:Object(u.jsx)(E,Object(b.a)({},a[0]))})})},Q=(c(17),function(t){var e=t.img,c=t.id,n=t.price;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"imgContainer",children:Object(u.jsx)("img",{src:e,alt:"",className:"imagen"})}),Object(u.jsx)("div",{className:"textContainer",children:Object(u.jsxs)("p",{className:"description",children:["Precio $ ",n]})}),Object(u.jsx)(s.b,{to:"/producto/:".concat(c),children:Object(u.jsx)("button",{className:"button",children:"Comprar ahora"})})]})})}),F=function(){var t=Object(n.useContext)(g);return Object(n.useEffect)((function(){}),[]),Object(u.jsx)("div",{className:"mlContainer",children:t.map((function(t){return Object(u.jsx)(Q,Object(b.a)({},t))}))})},A=(c(33),function(t){var e=t.img,c=t.title,a=t.price,i=t.stock,r=t.id,s=Object(n.useContext)(N),o=s.newQuantityShopSuma,j=s.newQuantityShopResta,l=s.eliminar;return Object(u.jsx)("div",{className:"containerBoxCart",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:e,alt:"",srcset:""})})}),Object(u.jsx)("li",{children:Object(u.jsx)("div",{className:"title_container",children:c})}),Object(u.jsx)("li",{children:Object(u.jsx)("div",{className:"numero_container",onClick:function(){l({img:e,title:c,price:a,stock:i,id:r})},children:"Eliminar"})}),Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"numero_container",children:[Object(u.jsx)("button",{onClick:function(){j(i,r)},children:"-"}),Object(u.jsx)("b",{children:i}),Object(u.jsx)("button",{onClick:function(){o(i,r)},children:"+"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"price_container",children:[Object(u.jsxs)("div",{className:"unitary_price",children:["Precio $",a]}),Object(u.jsxs)("div",{className:"price",children:["$",i*a]})]})})]})})}),B=function(){var t=Object(n.useContext)(N),e=t.cart,c=t.setCart,a=t.createOrder,i=Object(n.useState)([]),r=Object(O.a)(i,2),s=r[0],o=r[1],j=Object(n.useState)(""),l=Object(O.a)(j,2),d=l[0],f=l[1],p=Object(n.useState)(""),m=Object(O.a)(p,2),h=m[0],x=m[1],v=Object(n.useState)(""),g=Object(O.a)(v,2),k=g[0],y=g[1];return Object(n.useEffect)((function(){var t;e?e.length>0?(o(e),t=JSON.stringify(e),window.localStorage.setItem("lista",t)):(c(JSON.parse(window.localStorage.getItem("lista"))),o(e)):e||o([])}),[e]),Object(u.jsxs)("div",{className:"container_general",children:[Object(u.jsx)("div",{className:"container_cart_all",children:s.map((function(t){return Object(u.jsx)("div",{className:"container_cart",children:Object(u.jsx)(A,Object(b.a)({},t))})}))}),Object(u.jsxs)("div",{class:"container_input_all",children:[Object(u.jsx)("div",{className:"desc_container",id:"desc_container",children:"Para finalizar su compra complete los siguientes campos"}),Object(u.jsxs)("div",{className:"container_input",id:"container_input",children:[Object(u.jsx)("input",{className:"desc_input",type:"text",onInput:function(t){y(t.target.value)},placeholder:"Nombre"}),Object(u.jsx)("input",{className:"desc_input",type:"tel",onInput:function(t){x(t.target.value)},placeholder:"Tel\xe9fono"}),Object(u.jsx)("input",{className:"desc_input",type:"email",onInput:function(t){f(t.target.value)},placeholder:"Email"}),Object(u.jsx)("button",{class:"btn_enviar",onClick:function(){a(k,h,d);var t=document.getElementById("finish_container"),e=document.getElementById("desc_container"),c=document.getElementById("container_input");t.classList.remove("disp_none"),e.classList.add("disp_none"),c.classList.add("disp_none")},children:"Enviar"})]}),Object(u.jsx)("div",{className:"finish_container disp_none",id:"finish_container",children:"Su compra est\xe1 siendo procesada, \xa1Muchas gracias!"})]})]})},J=function(){var t=Object(n.useContext)(g),e=Object(n.useState)([]),c=Object(O.a)(e,2),a=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(v.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.filter((function(t){return"nike"===t.marca})),i(c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"mlContainer",children:a.map((function(t){return Object(u.jsx)(Q,Object(b.a)({},t))}))})},L=function(){var t=Object(n.useContext)(g),e=Object(n.useState)([]),c=Object(O.a)(e,2),a=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(v.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.filter((function(t){return"adidas"===t.marca})),i(c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"mlContainer",children:a.map((function(t){return Object(u.jsx)(Q,Object(b.a)({},t))}))})},P=function(){var t=Object(n.useContext)(g),e=Object(n.useState)([]),c=Object(O.a)(e,2),a=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(v.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.filter((function(t){return"topper"===t.marca})),i(c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"mlContainer",children:a.map((function(t){return Object(u.jsx)(Q,Object(b.a)({},t))}))})},T=function(){var t=Object(n.useContext)(g),e=Object(n.useState)([]),c=Object(O.a)(e,2),a=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(v.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.filter((function(t){return"zapatillas"===t.categoria})),i(c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"mlContainer",children:a.map((function(t){return Object(u.jsx)(Q,Object(b.a)({},t))}))})},R=function(){var t=Object(n.useContext)(g),e=Object(n.useState)([]),c=Object(O.a)(e,2),a=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(v.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.filter((function(t){return"buzos"===t.categoria})),i(c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"mlContainer",children:a.map((function(t){return Object(u.jsx)(Q,Object(b.a)({},t))}))})},H=function(){var t=Object(n.useContext)(g),e=Object(n.useState)([]),c=Object(O.a)(e,2),a=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(v.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.filter((function(t){return"remeras"===t.categoria})),i(c);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"mlContainer",children:a.map((function(t){return Object(u.jsx)(Q,Object(b.a)({},t))}))})};var M=function(){return Object(u.jsx)(k,{children:Object(u.jsx)(y,{children:Object(u.jsxs)(s.a,{basename:"/tienda-nom",children:[Object(u.jsx)(I,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:F}),Object(u.jsx)(o.a,{path:"/tienda-nom",component:F}),Object(u.jsx)(o.a,{path:"/remeras",component:H}),Object(u.jsx)(o.a,{path:"/buzos",component:R}),Object(u.jsx)(o.a,{path:"/zapatillas",component:T}),Object(u.jsx)(o.a,{path:"/topper",component:P}),Object(u.jsx)(o.a,{path:"/nike",component:J}),Object(u.jsx)(o.a,{path:"/adidas",component:L}),Object(u.jsx)(o.a,{path:"/cart",component:B}),Object(u.jsx)(o.a,{path:"/producto/:productoId",component:z})]})]})})})},$=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),i(t),r(t)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S.a,{domain:"dev-e3b8-x1c.us.auth0.com",clientId:"rQGNCSlHCCYcfICW2kGTWtUg0eouv1gH",redirectUri:window.location.origin,children:Object(u.jsx)(M,{})})}),document.getElementById("root")),$()}},[[58,1,2]]]);
//# sourceMappingURL=main.ebc43e59.chunk.js.map