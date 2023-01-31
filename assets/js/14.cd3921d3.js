(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{416:function(a,e,n){a.exports=n.p+"assets/img/javascript6.a5830b72.png"},433:function(a,e,n){"use strict";n.r(e);var t=n(2),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"类数组对象与arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类数组对象与arguments"}},[a._v("#")]),a._v(" 类数组对象与arguments")]),a._v(" "),e("p",[e("strong",[a._v("原文链接："),e("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/mqyqingfeng/Blog"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"类数组对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类数组对象"}},[a._v("#")]),a._v(" "),e("strong",[a._v("类数组对象")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("所谓的类数组对象:")]),a._v(" "),e("blockquote",[e("p",[a._v("拥有一个 length 属性和若干索引属性的对象")])]),a._v(" "),e("p",[a._v("举个例子：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var array = ['name', 'age', 'sex'];\n\nvar arrayLike = {\n    0: 'name',\n    1: 'age',\n    2: 'sex',\n    length: 3\n}\n")])])]),e("p",[a._v("即便如此，为什么叫做类数组对象呢？")]),a._v(" "),e("p",[a._v("那让我们从读写、获取长度、遍历三个方面看看这两个对象。")]),a._v(" "),e("h3",{attrs:{id:"读写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读写"}},[a._v("#")]),a._v(" "),e("strong",[a._v("读写")])]),a._v(" "),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("console.log(array[0]); // name\nconsole.log(arrayLike[0]); // name\n\narray[0] = 'new name';\narrayLike[0] = 'new name';\n")])])]),e("h3",{attrs:{id:"长度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#长度"}},[a._v("#")]),a._v(" "),e("strong",[a._v("长度")])]),a._v(" "),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("console.log(array.length); // 3\nconsole.log(arrayLike.length); // 3\n")])])]),e("h3",{attrs:{id:"遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遍历"}},[a._v("#")]),a._v(" "),e("strong",[a._v("遍历")])]),a._v(" "),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("for(var i = 0, len = array.length; i < len; i++) {\n   ……\n}\nfor(var i = 0, len = arrayLike.length; i < len; i++) {\n    ……\n}\n")])])]),e("p",[a._v("是不是很像？")]),a._v(" "),e("p",[a._v("那类数组对象可以使用数组的方法吗？比如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("arrayLike.push('4');\n")])])]),e("p",[a._v("然而上述代码会报错: arrayLike.push is not a function")]),a._v(" "),e("p",[a._v("所以终归还是类数组呐……")]),a._v(" "),e("h3",{attrs:{id:"调用数组方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用数组方法"}},[a._v("#")]),a._v(" "),e("strong",[a._v("调用数组方法")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("如果类数组就是任性的想用数组的方法怎么办呢？")]),a._v(" "),e("p",[a._v("既然无法直接调用，我们可以用 Function.call 间接调用：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('var arrayLike = {0: \'name\', 1: \'age\', 2: \'sex\', length: 3 }\n\nArray.prototype.join.call(arrayLike, \'&\'); // name&age&sex\n\nArray.prototype.slice.call(arrayLike, 0); // ["name", "age", "sex"] \n// slice可以做到类数组转数组\n\nArray.prototype.map.call(arrayLike, function(item){\n    return item.toUpperCase();\n}); \n// ["NAME", "AGE", "SEX"]\n')])])]),e("h3",{attrs:{id:"类数组转数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类数组转数组"}},[a._v("#")]),a._v(" "),e("strong",[a._v("类数组转数组")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("在上面的例子中已经提到了一种类数组转数组的方法，再补充三个：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('var arrayLike = {0: \'name\', 1: \'age\', 2: \'sex\', length: 3 }\n// 1. slice\nArray.prototype.slice.call(arrayLike); // ["name", "age", "sex"] \n// 2. splice\nArray.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"] \n// 3. ES6 Array.from\nArray.from(arrayLike); // ["name", "age", "sex"] \n// 4. apply\nArray.prototype.concat.apply([], arrayLike)\n')])])]),e("p",[a._v("那么为什么会讲到类数组对象呢？以及类数组有什么应用吗？")]),a._v(" "),e("p",[a._v("要说到类数组对象，Arguments 对象就是一个类数组对象。在客户端 JavaScript 中，一些 DOM 方法(document.getElementsByTagName()等)也返回类数组对象。")]),a._v(" "),e("h3",{attrs:{id:"arguments对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments对象"}},[a._v("#")]),a._v(" "),e("strong",[a._v("Arguments对象")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("接下来重点讲讲 Arguments 对象。")]),a._v(" "),e("p",[a._v("Arguments 对象只定义在函数体中，包括了函数的参数和其他属性。在函数体中，arguments 指代该函数的 Arguments 对象。")]),a._v(" "),e("p",[a._v("举个例子：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function foo(name, age, sex) {\n    console.log(arguments);\n}\n\nfoo('name', 'age', 'sex')\n")])])]),e("p",[a._v("打印结果如下：")]),a._v(" "),e("p",[e("img",{attrs:{src:n(416),alt:"javascript6"}})]),a._v(" "),e("p",[a._v("我们可以看到除了类数组的索引属性和length属性之外，还有一个callee属性，接下来我们一个一个介绍。")]),a._v(" "),e("h3",{attrs:{id:"length属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#length属性"}},[a._v("#")]),a._v(" "),e("strong",[a._v("length属性")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Arguments对象的length属性，表示实参的长度，举个例子：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('function foo(b, c, d){\n    console.log("实参的长度为：" + arguments.length)\n}\n\nconsole.log("形参的长度为：" + foo.length)\n\nfoo(1)\n\n// 形参的长度为：3\n// 实参的长度为：1\n')])])]),e("h3",{attrs:{id:"callee属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#callee属性"}},[a._v("#")]),a._v(" "),e("strong",[a._v("callee属性")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Arguments 对象的 callee 属性，通过它可以调用函数自身。")]),a._v(" "),e("p",[a._v("讲个闭包经典面试题使用 callee 的解决方法：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var data = [];\n\nfor (var i = 0; i < 3; i++) {\n    (data[i] = function () {\n       console.log(arguments.callee.i) \n    }).i = i;\n}\n\ndata[0]();\ndata[1]();\ndata[2]();\n\n// 0\n// 1\n// 2\n")])])]),e("p",[a._v("接下来讲讲 arguments 对象的几个注意要点：")]),a._v(" "),e("h3",{attrs:{id:"arguments-和对应参数的绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-和对应参数的绑定"}},[a._v("#")]),a._v(" "),e("strong",[a._v("arguments 和对应参数的绑定")])]),a._v(" "),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function foo(name, age, sex, hobbit) {\n\n    console.log(name, arguments[0]); // name name\n\n    // 改变形参\n    name = 'new name';\n\n    console.log(name, arguments[0]); // new name new name\n\n    // 改变arguments\n    arguments[1] = 'new age';\n\n    console.log(age, arguments[1]); // new age new age\n\n    // 测试未传入的是否会绑定\n    console.log(sex); // undefined\n\n    sex = 'new sex';\n\n    console.log(sex, arguments[2]); // new sex undefined\n\n    arguments[3] = 'new hobbit';\n\n    console.log(hobbit, arguments[3]); // undefined new hobbit\n\n}\n\nfoo('name', 'age')\n")])])]),e("p",[a._v("传入的参数，实参和 arguments 的值会共享，当没有传入时，实参与 arguments 值不会共享")]),a._v(" "),e("p",[a._v("除此之外，以上是在非严格模式下，如果是在严格模式下，实参和 arguments 是不会共享的。")]),a._v(" "),e("h3",{attrs:{id:"传递参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传递参数"}},[a._v("#")]),a._v(" "),e("strong",[a._v("传递参数")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("将参数从一个函数传递到另一个函数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 使用 apply 将 foo 的参数传递给 bar\nfunction foo() {\n    bar.apply(this, arguments);\n}\nfunction bar(a, b, c) {\n   console.log(a, b, c);\n}\n\nfoo(1, 2, 3)\n")])])]),e("h3",{attrs:{id:"强大的es6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强大的es6"}},[a._v("#")]),a._v(" "),e("strong",[a._v("强大的ES6")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("使用ES6的 ... 运算符，我们可以轻松转成数组。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function func(...arguments) {\n    console.log(arguments); // [1, 2, 3]\n}\n\nfunc(1, 2, 3);\n")])])]),e("h3",{attrs:{id:"应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[a._v("#")]),a._v(" "),e("strong",[a._v("应用")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("arguments的应用其实很多，在下个系列，也就是 JavaScript 专题系列中，我们会在 jQuery 的 extend 实现、函数柯里化、递归等场景看见 arguments 的身影。这篇文章就不具体展开了。")]),a._v(" "),e("p",[a._v("如果要总结这些场景的话，暂时能想到的包括：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("参数不定长")])]),a._v(" "),e("li",[e("p",[a._v("函数柯里化")])]),a._v(" "),e("li",[e("p",[a._v("递归调用")])]),a._v(" "),e("li",[e("p",[a._v("函数重载")]),a._v(" "),e("p",[a._v("...")])])]),a._v(" "),e("p",[a._v("欢迎留言回复。")])])}),[],!1,null,null,null);e.default=r.exports}}]);