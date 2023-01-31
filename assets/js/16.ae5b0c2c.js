(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{432:function(n,a,t){"use strict";t.r(a);var e=t(2),l=Object(e.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"call和apply的模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call和apply的模拟实现"}},[n._v("#")]),n._v(" call和apply的模拟实现")]),n._v(" "),a("p",[a("strong",[n._v("原文链接："),a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/mqyqingfeng/Blog"),a("OutboundLink")],1)])]),n._v(" "),a("h3",{attrs:{id:"call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[n._v("#")]),n._v(" "),a("strong",[n._v("call")])]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("一句话介绍 call：")]),n._v(" "),a("blockquote",[a("p",[n._v("call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。\n举个例子：")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var foo = {\n    value: 1\n};\n\nfunction bar() {\n    console.log(this.value);\n}\n\nbar.call(foo); // 1\n")])])]),a("p",[n._v("注意两点：")]),n._v(" "),a("ol",[a("li",[n._v("call 改变了 this 的指向，指向到 foo")]),n._v(" "),a("li",[n._v("bar 函数执行了")])]),n._v(" "),a("h3",{attrs:{id:"模拟实现第一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟实现第一步"}},[n._v("#")]),n._v(" "),a("strong",[n._v("模拟实现第一步")])]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("那么我们该怎么模拟实现这两个效果呢？")]),n._v(" "),a("p",[n._v("试想当调用 call 的时候，把 foo 对象改造成如下：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var foo = {\n    value: 1,\n    bar: function() {\n        console.log(this.value)\n    }\n};\n\nfoo.bar(); // 1\n")])])]),a("p",[n._v("这个时候 this 就指向了 foo，是不是很简单呢？")]),n._v(" "),a("p",[n._v("但是这样却给 foo 对象本身添加了一个属性，这可不行呐！")]),n._v(" "),a("p",[n._v("不过也不用担心，我们用 delete 再删除它不就好了~")]),n._v(" "),a("p",[n._v("所以我们模拟的步骤可以分为：")]),n._v(" "),a("ol",[a("li",[n._v("将函数设为对象的属性")]),n._v(" "),a("li",[n._v("执行该函数")]),n._v(" "),a("li",[n._v("删除该函数")])]),n._v(" "),a("p",[n._v("以上个例子为例，就是：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 第一步\nfoo.fn = bar\n// 第二步\nfoo.fn()\n// 第三步\ndelete foo.fn\n")])])]),a("p",[n._v("fn 是对象的属性名，反正最后也要删除它，所以起成什么都无所谓。")]),n._v(" "),a("p",[n._v("根据这个思路，我们可以尝试着去写第一版的 call2 函数：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 第一版\nFunction.prototype.call2 = function(context) {\n    // 首先要获取调用call的函数，用this可以获取\n    context.fn = this;\n    context.fn();\n    delete context.fn;\n}\n\n// 测试一下\nvar foo = {\n    value: 1\n};\n\nfunction bar() {\n    console.log(this.value);\n}\n\nbar.call2(foo); // 1\n")])])]),a("p",[n._v("正好可以打印 1 哎！是不是很开心！(～￣▽￣)～")]),n._v(" "),a("h3",{attrs:{id:"模拟实现第二步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟实现第二步"}},[n._v("#")]),n._v(" "),a("strong",[n._v("模拟实现第二步")])]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("最一开始也讲了，call 函数还能给定参数执行函数。举个例子：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var foo = {\n    value: 1\n};\n\nfunction bar(name, age) {\n    console.log(name)\n    console.log(age)\n    console.log(this.value);\n}\n\nbar.call(foo, 'kevin', 18);\n// kevin\n// 18\n// 1\n")])])]),a("p",[n._v("注意：传入的参数并不确定，这可咋办？")]),n._v(" "),a("p",[n._v("不急，我们可以从 Arguments 对象中取值，取出第二个到最后一个参数，然后放到一个数组里。")]),n._v(" "),a("p",[n._v("比如这样：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 以上个例子为例，此时的arguments为：\n// arguments = {\n//      0: foo,\n//      1: 'kevin',\n//      2: 18,\n//      length: 3\n// }\n// 因为arguments是类数组对象，所以可以用for循环\nvar args = [];\nfor(var i = 1, len = arguments.length; i < len; i++) {\n    args.push('arguments[' + i + ']');\n}\n\n// 执行后 args为 [\"arguments[1]\", \"arguments[2]\", \"arguments[3]\"]\n")])])]),a("p",[n._v("不定长的参数问题解决了，我们接着要把这个参数数组放到要执行的函数的参数里面去。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 将数组里的元素作为多个参数放进函数的形参里\ncontext.fn(args.join(','))\n// (O_o)??\n// 这个方法肯定是不行的啦！！！\n")])])]),a("p",[n._v("也许有人想到用 ES6 的方法，不过 call 是 ES3 的方法，我们为了模拟实现一个 ES3 的方法，要用到ES6的方法，好像……，嗯，也可以啦。但是我们这次用 eval 方法拼成一个函数，类似于这样：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("eval('context.fn(' + args +')')\n")])])]),a("p",[n._v("这里 args 会自动调用 Array.toString() 这个方法。")]),n._v(" "),a("p",[n._v("所以我们的第二版克服了两个大问题，代码如下：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 第二版\nFunction.prototype.call2 = function(context) {\n    context.fn = this;\n    var args = [];\n    for(var i = 1, len = arguments.length; i < len; i++) {\n        args.push('arguments[' + i + ']');\n    }\n    eval('context.fn(' + args +')');\n    delete context.fn;\n}\n\n// 测试一下\nvar foo = {\n    value: 1\n};\n\nfunction bar(name, age) {\n    console.log(name)\n    console.log(age)\n    console.log(this.value);\n}\n\nbar.call2(foo, 'kevin', 18); \n// kevin\n// 18\n// 1\n")])])]),a("p",[n._v("(๑•̀ㅂ•́)و✧")]),n._v(" "),a("h3",{attrs:{id:"模拟实现第三步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟实现第三步"}},[n._v("#")]),n._v(" "),a("strong",[n._v("模拟实现第三步")])]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("模拟代码已经完成 80%，还有两个小点要注意：")]),n._v(" "),a("h4",{attrs:{id:"_1-this-参数可以传-null-当为-null-的时候-视为指向-window"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-this-参数可以传-null-当为-null-的时候-视为指向-window"}},[n._v("#")]),n._v(" "),a("strong",[n._v("1.this 参数可以传 null，当为 null 的时候，视为指向 window")])]),n._v(" "),a("p",[n._v("举个例子：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var value = 1;\n\nfunction bar() {\n    console.log(this.value);\n}\n\nbar.call(null); // 1\n")])])]),a("p",[n._v("虽然这个例子本身不使用 call，结果依然一样。")]),n._v(" "),a("h4",{attrs:{id:"_2-函数是可以有返回值的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-函数是可以有返回值的"}},[n._v("#")]),n._v(" "),a("strong",[n._v("2.函数是可以有返回值的！")])]),n._v(" "),a("p",[n._v("举个例子：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var obj = {\n    value: 1\n}\n\nfunction bar(name, age) {\n    return {\n        value: this.value,\n        name: name,\n        age: age\n    }\n}\n\nconsole.log(bar.call(obj, 'kevin', 18));\n// Object {\n//    value: 1,\n//    name: 'kevin',\n//    age: 18\n// }\n")])])]),a("p",[n._v("不过都很好解决，让我们直接看第三版也就是最后一版的代码：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 第三版\nFunction.prototype.call2 = function (context) {\n    var context = context || window;\n    context.fn = this;\n\n    var args = [];\n    for(var i = 1, len = arguments.length; i < len; i++) {\n        args.push('arguments[' + i + ']');\n    }\n\n    var result = eval('context.fn(' + args +')');\n\n    delete context.fn\n    return result;\n}\n\n// 测试一下\nvar value = 2;\n\nvar obj = {\n    value: 1\n}\n\nfunction bar(name, age) {\n    console.log(this.value);\n    return {\n        value: this.value,\n        name: name,\n        age: age\n    }\n}\n\nbar.call2(null); // 2\n\nconsole.log(bar.call2(obj, 'kevin', 18));\n// 1\n// Object {\n//    value: 1,\n//    name: 'kevin',\n//    age: 18\n// }\n")])])]),a("p",[n._v("到此，我们完成了 call 的模拟实现，给自己一个赞 ｂ（￣▽￣）ｄ")]),n._v(" "),a("h3",{attrs:{id:"apply的模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply的模拟实现"}},[n._v("#")]),n._v(" "),a("strong",[n._v("apply的模拟实现")])]),n._v(" "),a("hr"),n._v(" "),a("p",[n._v("apply 的实现跟 call 类似，在这里直接给代码，代码来自于知乎 @郑航的实现：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Function.prototype.apply = function (context, arr) {\n    var context = Object(context) || window;\n    context.fn = this;\n\n    var result;\n    if (!arr) {\n        result = context.fn();\n    }\n    else {\n        var args = [];\n        for (var i = 0, len = arr.length; i < len; i++) {\n            args.push('arr[' + i + ']');\n        }\n        result = eval('context.fn(' + args + ')')\n    }\n\n    delete context.fn\n    return result;\n}\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);