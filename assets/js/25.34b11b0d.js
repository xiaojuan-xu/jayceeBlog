(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{442:function(t,e,a){"use strict";a.r(e);var s=a(2),c=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"作用域链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),e("p",[e("strong",[t._v("原文链接："),e("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mqyqingfeng/Blog"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" "),e("strong",[t._v("前言")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("在"),e("RouterLink",{attrs:{to:"/JavaScript/javascript3.html"}},[t._v("《JavaScript深入之执行上下文栈》")]),t._v("中讲到，当JavaScript代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。")],1),t._v(" "),e("p",[t._v("对于每个执行上下文，都有三个重要属性：")]),t._v(" "),e("ul",[e("li",[t._v("变量对象(Variable object，VO)")]),t._v(" "),e("li",[t._v("作用域链(Scope chain)")]),t._v(" "),e("li",[t._v("this")])]),t._v(" "),e("p",[t._v("今天重点讲讲作用域链。")]),t._v(" "),e("h3",{attrs:{id:"作用域链-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用域链-2"}},[t._v("#")]),t._v(" "),e("strong",[t._v("作用域链")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("在"),e("RouterLink",{attrs:{to:"/JavaScript/javascript4.html"}},[t._v("《JavaScript深入之变量对象》")]),t._v("中讲到，当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。"),e("strong",[t._v("这样由多个执行上下文的变量对象构成的链表就叫做作用域链。")])],1),t._v(" "),e("p",[t._v("下面，让我们以一个函数的创建和激活两个时期来讲解作用域链是如何创建和变化的。")]),t._v(" "),e("h3",{attrs:{id:"函数创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数创建"}},[t._v("#")]),t._v(" "),e("strong",[t._v("函数创建")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("在"),e("RouterLink",{attrs:{to:"/JavaScript/javascript2.html"}},[t._v("《JavaScript深入之词法作用域和动态作用域》")]),t._v("中讲到，函数的作用域在函数定义的时候就决定了。")],1),t._v(" "),e("p",[t._v("这是因为函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解 [[scope]] 就是所有父变量对象的层级链，但是注意：[[scope]] 并不代表完整的作用域链！")]),t._v(" "),e("p",[t._v("举个例子：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function foo() {\n    function bar() {\n        ...\n    }\n}\n")])])]),e("p",[t._v("函数创建时，各自的[[scope]]为：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("foo.[[scope]] = [\n  globalContext.VO\n];\n\nbar.[[scope]] = [\n    fooContext.AO,\n    globalContext.VO\n];\n")])])]),e("h3",{attrs:{id:"函数激活"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数激活"}},[t._v("#")]),t._v(" "),e("strong",[t._v("函数激活")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。")]),t._v(" "),e("p",[t._v("这时候执行上下文的作用域链，我们命名为 Scope：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Scope = [AO].concat([[Scope]]);\n")])])]),e("p",[t._v("至此，作用域链创建完毕。")]),t._v(" "),e("h3",{attrs:{id:"捋一捋"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#捋一捋"}},[t._v("#")]),t._v(" "),e("strong",[t._v("捋一捋")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("以下面的例子为例，结合着之前讲的变量对象和执行上下文栈，我们来总结一下函数执行上下文中作用域链和变量对象的创建过程：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var scope = \"global scope\";\nfunction checkscope(){\n    var scope2 = 'local scope';\n    return scope2;\n}\ncheckscope();\n")])])]),e("p",[t._v("执行过程如下：")]),t._v(" "),e("p",[t._v("1.checkscope 函数被创建，保存作用域链到 内部属性[[scope]]")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("checkscope.[[scope]] = [\n    globalContext.VO\n];\n")])])]),e("p",[t._v("2.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ECStack = [\n    checkscopeContext,\n    globalContext\n];\n")])])]),e("p",[t._v("3.checkscope 函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("checkscopeContext = {\n    Scope: checkscope.[[scope]],\n}\n")])])]),e("p",[t._v("4.第二步：用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("checkscopeContext = {\n    AO: {\n        arguments: {\n            length: 0\n        },\n        scope2: undefined\n    }，\n    Scope: checkscope.[[scope]],\n}\n")])])]),e("p",[t._v("5.第三步：将活动对象压入 checkscope 作用域链顶端")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("checkscopeContext = {\n    AO: {\n        arguments: {\n            length: 0\n        },\n        scope2: undefined\n    },\n    Scope: [AO, [[Scope]]]\n}\n")])])]),e("p",[t._v("6.准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("checkscopeContext = {\n    AO: {\n        arguments: {\n            length: 0\n        },\n        scope2: 'local scope'\n    },\n    Scope: [AO, [[Scope]]]\n}\n")])])]),e("p",[t._v("7.查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ECStack = [\n    globalContext\n];\n")])])])])}),[],!1,null,null,null);e.default=c.exports}}]);