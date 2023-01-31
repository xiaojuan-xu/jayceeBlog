(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{431:function(n,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"bind的模拟实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind的模拟实现"}},[n._v("#")]),n._v(" bind的模拟实现")]),n._v(" "),t("p",[t("strong",[n._v("原文链接："),t("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/mqyqingfeng/Blog"),t("OutboundLink")],1)])]),n._v(" "),t("h3",{attrs:{id:"bind"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bind"}},[n._v("#")]),n._v(" "),t("strong",[n._v("bind")])]),n._v(" "),t("hr"),n._v(" "),t("p",[n._v("一句话介绍 bind:")]),n._v(" "),t("blockquote",[t("p",[n._v("bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )")])]),n._v(" "),t("p",[n._v("由此我们可以首先得出 bind 函数的两个特点：")]),n._v(" "),t("ol",[t("li",[n._v("返回一个函数")]),n._v(" "),t("li",[n._v("可以传入参数")])]),n._v(" "),t("h3",{attrs:{id:"返回函数的模拟实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回函数的模拟实现"}},[n._v("#")]),n._v(" "),t("strong",[n._v("返回函数的模拟实现")])]),n._v(" "),t("hr"),n._v(" "),t("p",[n._v("从第一个特点开始，我们举个例子：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var foo = {\n    value: 1\n};\n\nfunction bar() {\n    console.log(this.value);\n}\n\n// 返回了一个函数\nvar bindFoo = bar.bind(foo); \n\nbindFoo(); // 1\n")])])]),t("p",[n._v("关于指定 this 的指向，我们可以使用 call 或者 apply 实现，关于 call 和 apply 的模拟实现，可以查看"),t("RouterLink",{attrs:{to:"/JavaScript/javascript10.html"}},[n._v("《JavaScript深入之call和apply的模拟实现》")]),n._v("。我们来写第一版的代码：")],1),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 第一版\nFunction.prototype.bind2 = function (context) {\n    var self = this;\n    return function () {\n        return self.apply(context);\n    }\n\n}\n")])])]),t("p",[n._v("此外，之所以 return self.apply(context)，是考虑到绑定函数可能是有返回值的，依然是这个例子：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var foo = {\n    value: 1\n};\n\nfunction bar() {\n\treturn this.value;\n}\n\nvar bindFoo = bar.bind(foo);\n\nconsole.log(bindFoo()); // 1\n")])])]),t("h3",{attrs:{id:"传参的模拟实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传参的模拟实现"}},[n._v("#")]),n._v(" "),t("strong",[n._v("传参的模拟实现")])]),n._v(" "),t("hr"),n._v(" "),t("p",[n._v("接下来看第二点，可以传入参数。这个就有点让人费解了，我在 bind 的时候，是否可以传参呢？我在执行 bind 返回的函数的时候，可不可以传参呢？让我们看个例子：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var foo = {\n    value: 1\n};\n\nfunction bar(name, age) {\n    console.log(this.value);\n    console.log(name);\n    console.log(age);\n\n}\n\nvar bindFoo = bar.bind(foo, 'daisy');\nbindFoo('18');\n// 1\n// daisy\n// 18\n")])])]),t("p",[n._v("函数需要传 name 和 age 两个参数，竟然还可以在 bind 的时候，只传一个 name，在执行返回的函数的时候，再传另一个参数 age!")]),n._v(" "),t("p",[n._v("这可咋办？不急，我们用 arguments 进行处理：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 第二版\nFunction.prototype.bind2 = function (context) {\n\n    var self = this;\n    // 获取bind2函数从第二个参数到最后一个参数\n    var args = Array.prototype.slice.call(arguments, 1);\n\n    return function () {\n        // 这个时候的arguments是指bind返回的函数传入的参数\n        var bindArgs = Array.prototype.slice.call(arguments);\n        return self.apply(context, args.concat(bindArgs));\n    }\n\n}\n")])])]),t("h3",{attrs:{id:"构造函数效果的模拟实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造函数效果的模拟实现"}},[n._v("#")]),n._v(" "),t("strong",[n._v("构造函数效果的模拟实现")])]),n._v(" "),t("hr"),n._v(" "),t("p",[n._v("完成了这两点，最难的部分到啦！因为 bind 还有一个特点，就是")]),n._v(" "),t("blockquote",[t("p",[n._v("一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。")])]),n._v(" "),t("p",[n._v("也就是说当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。举个例子：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var value = 2;\n\nvar foo = {\n    value: 1\n};\n\nfunction bar(name, age) {\n    this.habit = 'shopping';\n    console.log(this.value);\n    console.log(name);\n    console.log(age);\n}\n\nbar.prototype.friend = 'kevin';\n\nvar bindFoo = bar.bind(foo, 'daisy');\n\nvar obj = new bindFoo('18');\n// undefined\n// daisy\n// 18\nconsole.log(obj.habit);\nconsole.log(obj.friend);\n// shopping\n// kevin\n")])])]),t("p",[n._v("注意：尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj。")]),n._v(" "),t("p",[n._v("(哈哈，我这是为我的下一篇文章"),t("RouterLink",{attrs:{to:"/JavaScript/javascript12.html"}},[n._v("《JavaScript深入系列之new的模拟实现》")]),n._v("打广告)。")],1),n._v(" "),t("p",[n._v("所以我们可以通过修改返回的函数的原型来实现，让我们写一下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 第三版\nFunction.prototype.bind2 = function (context) {\n    var self = this;\n    var args = Array.prototype.slice.call(arguments, 1);\n\n    var fBound = function () {\n        var bindArgs = Array.prototype.slice.call(arguments);\n        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值\n        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性\n        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context\n        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));\n    }\n    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值\n    fBound.prototype = this.prototype;\n    return fBound;\n}\n")])])]),t("p",[n._v("如果对原型链稍有困惑，可以查看"),t("RouterLink",{attrs:{to:"/JavaScript/javascript1.html"}},[n._v("《JavaScript深入之从原型到原型链》")]),n._v("。")],1),n._v(" "),t("h3",{attrs:{id:"构造函数效果的优化实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造函数效果的优化实现"}},[n._v("#")]),n._v(" "),t("strong",[n._v("构造函数效果的优化实现")])]),n._v(" "),t("hr"),n._v(" "),t("p",[n._v("但是在这个写法中，我们直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 第四版\nFunction.prototype.bind2 = function (context) {\n\n    var self = this;\n    var args = Array.prototype.slice.call(arguments, 1);\n\n    var fNOP = function () {};\n\n    var fBound = function () {\n        var bindArgs = Array.prototype.slice.call(arguments);\n        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));\n    }\n\n    fNOP.prototype = this.prototype;\n    fBound.prototype = new fNOP();\n    return fBound;\n}\n")])])]),t("p",[n._v("到此为止，大的问题都已经解决，给自己一个赞！o(￣▽￣)ｄ")]),n._v(" "),t("h3",{attrs:{id:"三个小问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三个小问题"}},[n._v("#")]),n._v(" "),t("strong",[n._v("三个小问题")])]),n._v(" "),t("hr"),n._v(" "),t("p",[n._v("接下来处理些小问题:")]),n._v(" "),t("p",[t("strong",[n._v("1.apply 这段代码跟 MDN 上的稍有不同")])]),n._v(" "),t("p",[n._v("在 MDN 中文版讲 bind 的模拟实现时，apply 这里的代码是：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("self.apply(this instanceof self ? this : context || this, args.concat(bindArgs))\n")])])]),t("p",[n._v("多了一个关于 context 是否存在的判断，然而这个是错误的！")]),n._v(" "),t("p",[n._v("举个例子：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var value = 2;\nvar foo = {\n    value: 1,\n    bar: bar.bind(null)\n};\n\nfunction bar() {\n    console.log(this.value);\n}\n\nfoo.bar() // 2\n")])])]),t("p",[n._v("以上代码正常情况下会打印 2，如果换成了 context || this，这段代码就会打印 1！")]),n._v(" "),t("p",[n._v("所以这里不应该进行 context 的判断，大家查看 MDN 同样内容的英文版，就不存在这个判断！")]),n._v(" "),t("p",[n._v("(2018年3月27日更新，中文版已经改了😀)")]),n._v(" "),t("p",[t("strong",[n._v("2.调用 bind 的不是函数咋办？")]),n._v("\n不行，我们要报错！")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('if (typeof this !== "function") {\n  throw new Error("Function.prototype.bind - what is trying to be bound is not callable");\n}\n')])])]),t("p",[t("strong",[n._v("3.我要在线上用")]),n._v("\n那别忘了做个兼容：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Function.prototype.bind = Function.prototype.bind || function () {\n    ……\n};\n")])])]),t("p",[n._v("当然最好是用 "),t("a",{attrs:{href:"https://github.com/es-shims/es5-shim",target:"_blank",rel:"noopener noreferrer"}},[n._v("es5-shim"),t("OutboundLink")],1),n._v(" 啦。")]),n._v(" "),t("h3",{attrs:{id:"最终代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最终代码"}},[n._v("#")]),n._v(" "),t("strong",[n._v("最终代码")])]),n._v(" "),t("hr"),n._v(" "),t("p",[n._v("所以最最后的代码就是：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('Function.prototype.bind2 = function (context) {\n    if (typeof this !== "function") {\n      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");\n    }\n\n    var self = this;\n    var args = Array.prototype.slice.call(arguments, 1);\n\n    var fNOP = function () {};\n\n    var fBound = function () {\n        var bindArgs = Array.prototype.slice.call(arguments);\n        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));\n    }\n\n    fNOP.prototype = this.prototype;\n    fBound.prototype = new fNOP();\n    return fBound;\n}\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);