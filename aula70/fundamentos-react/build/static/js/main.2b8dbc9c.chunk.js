(this["webpackJsonpfundamentos-react"]=this["webpackJsonpfundamentos-react"]||[]).push([[0],[,,,,,,,,function(e,n,c){},function(e,n,c){},,function(e,n,c){},function(e,n,c){},function(e,n,c){"use strict";c.r(n);var r=c(1),t=c.n(r),s=c(3),o=c.n(s),j=(c(8),c(9),c(0));function i(e){var n=e.media>=6?"Aprovado":"Reprovado";return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:e.nome}),Object(j.jsx)("p",{children:e.media}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Situa\xe7\xe3o"})," ",n]})]})}function a(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Compoente com Props"}),Object(j.jsxs)("p",{children:["Mensagem: ",e.mensagem]})]})}function m(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h2",{children:["Fam\xedlia ",e.sobrenome]}),t.a.Children.map(e.children,(function(n){return t.a.cloneElement(n,{sobrenome:e.sobrenome})}))]})}var d=[{id:1,nome:"Pedro",media:9.5},{id:2,nome:"Maria",media:8.5},{id:3,nome:"Josu\xe9",media:4}];function l(){return Object(j.jsx)(j.Fragment,{children:d.map((function(e){return Object(j.jsx)(i,{nome:e.nome,media:e.media},e.id)}))})}function b(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("p",{children:[e.nome," ",e.sobrenome]})})}c(11);function u(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Primeiro Componente"}),Object(j.jsx)("p",{className:"emoji",children:":D"})]})}c(12);function O(e){var n={backgroundColor:e.cor,borderColor:e.cor};return Object(j.jsxs)("div",{className:"card",style:n,children:[Object(j.jsx)("h2",{className:"titulo",children:e.titulo}),Object(j.jsx)("div",{className:"conteudo",children:e.children})]})}function h(e){return Object(j.jsx)(j.Fragment,{children:e.numero%2===0?Object(j.jsxs)("p",{children:["O N\xfamero ",e.numero," \xe9 Par"]}):Object(j.jsxs)("p",{children:["O N\xfamero ",e.numero," \xe9 \xcdmpar"]})})}function x(e){var n=e.menssagens||[];return Object(j.jsx)(j.Fragment,{children:n.length>0&&Object(j.jsxs)("p",{children:["Voc\xea tem ",e.menssagens.length," notifica\xe7\xf5e(s)"]})})}O.defaulProps={cor:"#333"};var p=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Ol\xe1 Mundo!"}),Object(j.jsxs)("div",{className:"cards",children:[Object(j.jsx)(O,{titulo:"Primeiro Componente",cor:"#F24464",children:Object(j.jsx)(u,{})}),Object(j.jsxs)(O,{titulo:"Componente com Props",children:[Object(j.jsx)(a,{mensagem:"Estou sendo enviada pelas props."}),Object(j.jsx)(a,{mensagem:"Outra Mensagem..."})]}),Object(j.jsx)(O,{titulo:"Lista Alunos",cor:"#000000",children:Object(j.jsx)(l,{})}),Object(j.jsx)(O,{titulo:"Children",cor:"#a67ab9",children:Object(j.jsxs)(m,{sobrenome:"da Silva",children:[Object(j.jsx)(b,{nome:"Ana"}),Object(j.jsx)(b,{nome:"Marcos"}),Object(j.jsx)(b,{nome:"Jos\xe9"})]})}),Object(j.jsxs)(O,{titulo:"Par ou Impar",children:[Object(j.jsx)(h,{numero:10}),Object(j.jsx)(h,{numero:5}),Object(j.jsx)("hr",{}),Object(j.jsx)(x,{menssagens:"Aoba"})]})]})]})};o.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.2b8dbc9c.chunk.js.map