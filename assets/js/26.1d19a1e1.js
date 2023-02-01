(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{444:function(e,r,t){"use strict";t.r(r);var a=t(2),n=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"从ecmascript规范解读this"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从ecmascript规范解读this"}},[e._v("#")]),e._v(" 从ECMAScript规范解读this")]),e._v(" "),r("p",[r("strong",[e._v("原文链接："),r("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/mqyqingfeng/Blog"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" "),r("strong",[e._v("前言")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("在《JavaScript深入之执行上下文栈》中讲到，当JavaScript代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。")]),e._v(" "),r("p",[e._v("对于每个执行上下文，都有三个重要属性")]),e._v(" "),r("ul",[r("li",[e._v("变量对象(Variable object，VO)")]),e._v(" "),r("li",[e._v("作用域链(Scope chain)")]),e._v(" "),r("li",[e._v("this")])]),e._v(" "),r("p",[e._v("今天重点讲讲 this，然而不好讲。")]),e._v(" "),r("p",[e._v("因为我们要从 ECMASciript5 规范开始讲起。")]),e._v(" "),r("p",[e._v("先奉上 ECMAScript 5.1 规范地址：")]),e._v(" "),r("p",[e._v("英文版："),r("a",{attrs:{href:"http://es5.github.io/#x15.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://es5.github.io/#x15.1"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("中文版："),r("a",{attrs:{href:"http://yanhaijing.com/es5/#115",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://yanhaijing.com/es5/#115"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("让我们开始了解规范吧！")]),e._v(" "),r("h3",{attrs:{id:"types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Types")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("首先是第 8 章 Types：")]),e._v(" "),r("blockquote",[r("p",[e._v("Types are further subclassified into ECMAScript language types and specification types.")])]),e._v(" "),r("blockquote",[r("p",[e._v("An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Number, and Object.")])]),e._v(" "),r("blockquote",[r("p",[e._v("A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types are Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, and Environment Record.")])]),e._v(" "),r("p",[e._v("我们简单的翻译一下：")]),e._v(" "),r("p",[e._v("ECMAScript 的类型分为语言类型和规范类型。")]),e._v(" "),r("p",[e._v("ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的。其实就是我们常说的Undefined, Null, Boolean, String, Number, 和 Object。")]),e._v(" "),r("p",[e._v("而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。")]),e._v(" "),r("p",[e._v("没懂？没关系，我们只要知道在 ECMAScript 规范中还有一种只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。")]),e._v(" "),r("p",[e._v("今天我们要讲的重点是便是其中的 Reference 类型。它与 this 的指向有着密切的关联。")]),e._v(" "),r("h3",{attrs:{id:"reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Reference")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("那什么又是 Reference ？")]),e._v(" "),r("p",[e._v("让我们看 8.7 章 The Reference Specification Type：")]),e._v(" "),r("blockquote",[r("p",[e._v("The Reference type is used to explain the behaviour of such operators as delete, typeof, and the assignment operators.")])]),e._v(" "),r("p",[e._v("所以 Reference 类型就是用来解释诸如 delete、typeof 以及赋值等操作行为的。")]),e._v(" "),r("p",[e._v("抄袭尤雨溪大大的话，就是：")]),e._v(" "),r("blockquote",[r("p",[e._v("这里的 Reference 是一个 Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中。")])]),e._v(" "),r("p",[e._v("再看接下来的这段具体介绍 Reference 的内容：")]),e._v(" "),r("blockquote",[r("p",[e._v("A Reference is a resolved name binding.")])]),e._v(" "),r("blockquote",[r("p",[e._v("A Reference consists of three components, the base value, the referenced name and the Boolean valued strict reference flag.")])]),e._v(" "),r("blockquote",[r("p",[e._v("The base value is either undefined, an Object, a Boolean, a String, a Number, or an environment record (10.2.1).")])]),e._v(" "),r("blockquote",[r("p",[e._v("A base value of undefined indicates that the reference could not be resolved to a binding. The referenced name is a String.")])]),e._v(" "),r("p",[e._v("这段讲述了 Reference 的构成，由三个组成部分，分别是：")]),e._v(" "),r("ul",[r("li",[e._v("base value")]),e._v(" "),r("li",[e._v("referenced name")]),e._v(" "),r("li",[e._v("strict reference")])]),e._v(" "),r("p",[e._v("可是这些到底是什么呢？")]),e._v(" "),r("p",[e._v("我们简单的理解的话：")]),e._v(" "),r("p",[e._v("base value 就是属性所在的对象或者就是 EnvironmentRecord，它的值只可能是 undefined, an Object, a Boolean, a String, a Number, or an environment record 其中的一种。")]),e._v(" "),r("p",[e._v("referenced name 就是属性的名称。")]),e._v(" "),r("p",[e._v("举个例子：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var foo = 1;\n\n// 对应的Reference是：\nvar fooReference = {\n    base: EnvironmentRecord,\n    name: 'foo',\n    strict: false\n};\n")])])]),r("p",[e._v("再举个例子：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var foo = {\n    bar: function () {\n        return this;\n    }\n};\n \nfoo.bar(); // foo\n\n// bar对应的Reference是：\nvar BarReference = {\n    base: foo,\n    propertyName: 'bar',\n    strict: false\n};\n")])])]),r("p",[e._v("而且规范中还提供了获取 Reference 组成部分的方法，比如 GetBase 和 IsPropertyReference。")]),e._v(" "),r("p",[e._v("这两个方法很简单，简单看一看：")]),e._v(" "),r("p",[e._v("1.GetBase")]),e._v(" "),r("blockquote",[r("p",[e._v("GetBase(V). Returns the base value component of the reference V.")])]),e._v(" "),r("p",[e._v("返回 reference 的 base value。")]),e._v(" "),r("p",[e._v("2.IsPropertyReference")]),e._v(" "),r("blockquote",[r("p",[e._v("IsPropertyReference(V). Returns true if either the base value is an object or HasPrimitiveBase(V) is true; otherwise returns false.")])]),e._v(" "),r("p",[e._v("简单的理解：如果 base value 是一个对象，就返回true。")]),e._v(" "),r("h3",{attrs:{id:"getvalue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getvalue"}},[e._v("#")]),e._v(" "),r("strong",[e._v("GetValue")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("除此之外，紧接着在 8.7.1 章规范中就讲了一个用于从 Reference 类型获取对应值的方法： GetValue。")]),e._v(" "),r("p",[e._v("简单模拟 GetValue 的使用：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var foo = 1;\n\nvar fooReference = {\n    base: EnvironmentRecord,\n    name: 'foo',\n    strict: false\n};\n\nGetValue(fooReference) // 1;\n")])])]),r("p",[e._v("GetValue 返回对象属性真正的值，但是要注意：")]),e._v(" "),r("p",[r("strong",[e._v("调用 GetValue，返回的将是具体的值，而不再是一个 Reference")])]),e._v(" "),r("p",[e._v("这个很重要，这个很重要，这个很重要。")]),e._v(" "),r("h3",{attrs:{id:"如何确定this的值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何确定this的值"}},[e._v("#")]),e._v(" "),r("strong",[e._v("如何确定this的值")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("关于 Reference 讲了那么多，为什么要讲 Reference 呢？到底 Reference 跟本文的主题 this 有哪些关联呢？如果你能耐心看完之前的内容，以下开始进入高能阶段：")]),e._v(" "),r("p",[e._v("看规范 11.2.3 Function Calls：")]),e._v(" "),r("p",[e._v("这里讲了当函数调用的时候，如何确定 this 的取值。")]),e._v(" "),r("p",[e._v("只看第一步、第六步、第七步：")]),e._v(" "),r("blockquote",[r("p",[e._v("1.Let ref be the result of evaluating MemberExpression.")])]),e._v(" "),r("blockquote",[r("p",[e._v("6.If Type(ref) is Reference, then")])]),e._v(" "),r("blockquote",[r("blockquote",[r("p",[e._v("a.If IsPropertyReference(ref) is true, then")]),e._v(" "),r("blockquote",[r("p",[e._v("i.Let thisValue be GetBase(ref).")])])])]),e._v(" "),r("blockquote",[r("blockquote",[r("p",[e._v("b.Else, the base of ref is an Environment Record")]),e._v(" "),r("blockquote",[r("p",[e._v("i.Let thisValue be the result of calling the ImplicitThisValue concrete method of GetBase(ref).")])])])]),e._v(" "),r("blockquote",[r("p",[e._v("7.Else, Type(ref) is not Reference.")])]),e._v(" "),r("blockquote",[r("blockquote",[r("p",[e._v("a. Let thisValue be undefined.")])])]),e._v(" "),r("p",[e._v("让我们描述一下：")]),e._v(" "),r("p",[e._v("1.计算 MemberExpression 的结果赋值给 ref")]),e._v(" "),r("p",[e._v("2.判断 ref 是不是一个 Reference 类型")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)\n\n2.2 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)\n\n2.3 如果 ref 不是 Reference，那么 this 的值为 undefined\n")])])]),r("h3",{attrs:{id:"具体分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#具体分析"}},[e._v("#")]),e._v(" "),r("strong",[e._v("具体分析")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("让我们一步一步看：")]),e._v(" "),r("ol",[r("li",[e._v("计算 MemberExpression 的结果赋值给 ref\n什么是 MemberExpression？看规范 11.2 Left-Hand-Side Expressions：")])]),e._v(" "),r("p",[e._v("MemberExpression :")]),e._v(" "),r("ul",[r("li",[e._v("PrimaryExpression // 原始表达式 可以参见《JavaScript权威指南第四章》")]),e._v(" "),r("li",[e._v("FunctionExpression // 函数定义表达式")]),e._v(" "),r("li",[e._v("MemberExpression [ Expression ] // 属性访问表达式")]),e._v(" "),r("li",[e._v("MemberExpression . IdentifierName // 属性访问表达式")]),e._v(" "),r("li",[e._v("new MemberExpression Arguments // 对象创建表达式")])]),e._v(" "),r("p",[e._v("举个例子：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("function foo() {\n    console.log(this)\n}\nfoo(); // MemberExpression 是 foo\nfunction foo() {\n    return function() {\n        console.log(this)\n    }\n}\nfoo()(); // MemberExpression 是 foo()\nvar foo = {\n    bar: function () {\n        return this;\n    }\n}\nfoo.bar(); // MemberExpression 是 foo.bar\n")])])]),r("p",[e._v("所以简单理解 MemberExpression 其实就是()左边的部分。")]),e._v(" "),r("p",[e._v("2.判断 ref 是不是一个 Reference 类型。")]),e._v(" "),r("p",[e._v("关键就在于看规范是如何处理各种 MemberExpression，返回的结果是不是一个Reference类型。")]),e._v(" "),r("p",[e._v("举最后一个例子：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var value = 1;\n\nvar foo = {\n  value: 2,\n  bar: function () {\n    return this.value;\n  }\n}\n\n//示例1\nconsole.log(foo.bar());\n//示例2\nconsole.log((foo.bar)());\n//示例3\nconsole.log((foo.bar = foo.bar)());\n//示例4\nconsole.log((false || foo.bar)());\n//示例5\nconsole.log((foo.bar, foo.bar)());\n")])])]),r("p",[e._v("foo.bar()\n在示例 1 中，MemberExpression 计算的结果是 foo.bar，那么 foo.bar 是不是一个 Reference 呢？")]),e._v(" "),r("p",[e._v("查看规范 11.2.1 Property Accessors，这里展示了一个计算的过程，什么都不管了，就看最后一步：")]),e._v(" "),r("blockquote",[r("p",[e._v("Return a value of type Reference whose base value is baseValue and whose referenced name is propertyNameString, and whose strict mode flag is strict.")])]),e._v(" "),r("p",[e._v("我们得知该表达式返回了一个 Reference 类型！")]),e._v(" "),r("p",[e._v("根据之前的内容，我们知道该值为：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var Reference = {\n  base: foo,\n  name: 'bar',\n  strict: false\n};\n")])])]),r("p",[e._v("接下来按照 2.1 的判断流程走：")]),e._v(" "),r("blockquote",[r("p",[e._v("2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)")])]),e._v(" "),r("p",[e._v("该值是 Reference 类型，那么 IsPropertyReference(ref) 的结果是多少呢？")]),e._v(" "),r("p",[e._v("前面我们已经铺垫了 IsPropertyReference 方法，如果 base value 是一个对象，结果返回 true。")]),e._v(" "),r("p",[e._v("base value 为 foo，是一个对象，所以 IsPropertyReference(ref) 结果为 true。")]),e._v(" "),r("p",[e._v("这个时候我们就可以确定 this 的值了：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("this = GetBase(ref)，\n")])])]),r("p",[e._v("GetBase 也已经铺垫了，获得 base value 值，这个例子中就是foo，所以 this 的值就是 foo ，示例1的结果就是 2！")]),e._v(" "),r("p",[e._v("唉呀妈呀，为了证明 this 指向foo，真是累死我了！但是知道了原理，剩下的就更快了。")]),e._v(" "),r("h3",{attrs:{id:"foo-bar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#foo-bar"}},[e._v("#")]),e._v(" "),r("strong",[e._v("(foo.bar)()")])]),e._v(" "),r("p",[e._v("看示例2：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("console.log((foo.bar)());\n")])])]),r("p",[e._v("foo.bar 被 () 包住，查看规范 11.1.6 The Grouping Operator")]),e._v(" "),r("p",[e._v("直接看结果部分：")]),e._v(" "),r("blockquote",[r("p",[e._v("Return the result of evaluating Expression. This may be of type Reference.")])]),e._v(" "),r("blockquote",[r("p",[e._v("NOTE This algorithm does not apply GetValue to the result of evaluating Expression.")])]),e._v(" "),r("p",[e._v("实际上 () 并没有对 MemberExpression 进行计算，所以其实跟示例 1 的结果是一样的。")]),e._v(" "),r("h3",{attrs:{id:"foo-bar-foo-bar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#foo-bar-foo-bar"}},[e._v("#")]),e._v(" "),r("strong",[e._v("(foo.bar = foo.bar)()")])]),e._v(" "),r("p",[e._v("看示例3，有赋值操作符，查看规范 11.13.1 Simple Assignment ( = ):")]),e._v(" "),r("p",[e._v("计算的第三步：")]),e._v(" "),r("blockquote",[r("p",[e._v("3.Let rval be GetValue(rref).")])]),e._v(" "),r("p",[e._v("因为使用了 GetValue，所以返回的值不是 Reference 类型，")]),e._v(" "),r("p",[e._v("按照之前讲的判断逻辑：")]),e._v(" "),r("blockquote",[r("p",[e._v("2.3 如果 ref 不是Reference，那么 this 的值为 undefined")])]),e._v(" "),r("p",[e._v("this 为 undefined，非严格模式下，this 的值为 undefined 的时候，其值会被隐式转换为全局对象。")]),e._v(" "),r("h3",{attrs:{id:"false-foo-bar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#false-foo-bar"}},[e._v("#")]),e._v(" "),r("strong",[e._v("(false || foo.bar)()")])]),e._v(" "),r("p",[e._v("看示例4，逻辑与算法，查看规范 11.11 Binary Logical Operators：")]),e._v(" "),r("p",[e._v("计算第二步：")]),e._v(" "),r("blockquote",[r("p",[e._v("2.Let lval be GetValue(lref).")])]),e._v(" "),r("p",[e._v("因为使用了 GetValue，所以返回的不是 Reference 类型，this 为 undefined")]),e._v(" "),r("h3",{attrs:{id:"foo-bar-foo-bar-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#foo-bar-foo-bar-2"}},[e._v("#")]),e._v(" "),r("strong",[e._v("(foo.bar, foo.bar)()")])]),e._v(" "),r("p",[e._v("看示例5，逗号操作符，查看规范11.14 Comma Operator ( , )")]),e._v(" "),r("p",[e._v("计算第二步：")]),e._v(" "),r("blockquote",[r("p",[e._v("2.Call GetValue(lref).")])]),e._v(" "),r("p",[e._v("因为使用了 GetValue，所以返回的不是 Reference 类型，this 为 undefined")]),e._v(" "),r("h3",{attrs:{id:"揭晓结果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#揭晓结果"}},[e._v("#")]),e._v(" "),r("strong",[e._v("揭晓结果")])]),e._v(" "),r("p",[e._v("所以最后一个例子的结果是：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var value = 1;\nvar foo = {\n  value: 2,\n  bar: function () {\n    return this.value;\n  }\n}\n//示例1\nconsole.log(foo.bar()); // 2\n//示例2\nconsole.log((foo.bar)()); // 2\n//示例3\nconsole.log((foo.bar = foo.bar)()); // 1\n//示例4\nconsole.log((false || foo.bar)()); // 1\n//示例5\nconsole.log((foo.bar, foo.bar)()); // 1\n")])])]),r("p",[e._v("注意：以上是在非严格模式下的结果，严格模式下因为 this 返回 undefined，所以示例 3 会报错。")]),e._v(" "),r("h3",{attrs:{id:"补充"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[e._v("#")]),e._v(" "),r("strong",[e._v("补充")])]),e._v(" "),r("p",[e._v("最最后，忘记了一个最最普通的情况：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("function foo() {\n    console.log(this)\n}\n\nfoo(); \n")])])]),r("p",[e._v("MemberExpression 是 foo，解析标识符，查看规范 10.3.1 Identifier Resolution，会返回一个 Reference 类型的值：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var fooReference = {\n    base: EnvironmentRecord,\n    name: 'foo',\n    strict: false\n};\n")])])]),r("p",[e._v("接下来进行判断：")]),e._v(" "),r("blockquote",[r("p",[e._v("2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)")])]),e._v(" "),r("p",[e._v("因为 base value 是 EnvironmentRecord，并不是一个 Object 类型，还记得前面讲过的 base value 的取值可能吗？ 只可能是 undefined, an Object, a Boolean, a String, a Number, 和 an environment record 中的一种。")]),e._v(" "),r("p",[e._v("IsPropertyReference(ref) 的结果为 false，进入下个判断：")]),e._v(" "),r("blockquote",[r("p",[e._v("2.2 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)")])]),e._v(" "),r("p",[e._v("base value 正是 Environment Record，所以会调用 ImplicitThisValue(ref)")]),e._v(" "),r("p",[e._v("查看规范 10.2.1.1.6，ImplicitThisValue 方法的介绍：该函数始终返回 undefined。")]),e._v(" "),r("p",[e._v("所以最后 this 的值就是 undefined。")]),e._v(" "),r("h3",{attrs:{id:"多说一句"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多说一句"}},[e._v("#")]),e._v(" "),r("strong",[e._v("多说一句")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("尽管我们可以简单的理解 this 为调用函数的对象，如果是这样的话，如何解释下面这个例子呢？")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var value = 1;\n\nvar foo = {\n  value: 2,\n  bar: function () {\n    return this.value;\n  }\n}\nconsole.log((false || foo.bar)()); // 1\n")])])]),r("p",[e._v("此外，又如何确定调用函数的对象是谁呢？在写文章之初，我就面临着这些问题，最后还是放弃从多个情形下给大家讲解 this 指向的思路，而是追根溯源的从 ECMASciript 规范讲解 this 的指向，尽管从这个角度写起来和读起来都比较吃力，但是一旦多读几遍，明白原理，绝对会给你一个全新的视角看待 this 。而你也就能明白，尽管 foo() 和 (foo.bar = foo.bar)() 最后结果都指向了 undefined，但是两者从规范的角度上却有着本质的区别。")]),e._v(" "),r("p",[e._v("此篇讲解执行上下文的 this，即便不是很理解此篇的内容，依然不影响大家了解执行上下文这个主题下其他的内容。所以，依然可以安心的看下一篇文章。")])])}),[],!1,null,null,null);r.default=n.exports}}]);