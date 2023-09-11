(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{596:function(t,s,a){t.exports=a.p+"assets/img/4.569ca9c1.png"},632:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"javascript时间循环机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript时间循环机制"}},[t._v("#")]),t._v(" JavaScript时间循环机制")]),t._v(" "),n("h2",{attrs:{id:"什么是事件循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是事件循环"}},[t._v("#")]),t._v(" 什么是事件循环？")]),t._v(" "),n("p",[t._v("JS引擎是"),n("strong",[t._v("单线程")]),t._v("的，直白来说就是一个时间点下JS引擎只能去做一件事情，而Java这种多线程语言，可以同时做几件事情。")]),t._v(" "),n("p",[t._v("JS做的任务分为"),n("strong",[t._v("同步")]),t._v("和"),n("strong",[t._v("异步")]),t._v('两种，所谓 "异步"，简单说就是一个任务不是连续完成的，先执行第一段，等做好了准备，再回过头执行第二段，第二段也被叫做回调；同步则是连贯完成的。')]),t._v(" "),n("ul",[n("li",[t._v("举例：像"),n("strong",[t._v("读取文件")]),t._v("、"),n("strong",[t._v("网络请求")]),t._v("这种任务属于异步任务：花费时间很长，但中间的操作不需要JS引擎自己完成，它只用等别人准备好了，把数据给他，他再继续执行回调部分。如果没有特殊处理，JS引擎在执行异步任务时，应该是存在等待的，不去做任何其他事情。")])]),t._v(" "),n("p",[t._v("js采取了"),n("strong",[t._v("异步任务回调通知")]),t._v("的模式")]),t._v(" "),n("ul",[n("li",[t._v("在等待异步任务准备的同时，JS引擎去执行其他同步任务，等到异步任务准备好了，再去执行回调。这种模式的优势显而易见，完成相同的任务，花费的时间大大减少，这种方式也被叫做"),n("strong",[t._v("非阻塞式")]),t._v("。")]),t._v(" "),n("li",[t._v("而实现这个“通知”的，正是"),n("strong",[t._v("事件循环")]),t._v("，把异步任务的回调部分交给事件循环，等时机合适交还给JS线程执行。事件循环并不是JavaScript首创的，它是计算机的一种运行机制。")]),t._v(" "),n("li",[t._v("事件循环是由一个队列组成的，异步任务的回调遵循先进先出，在JS引擎空闲时会一轮一轮地被取出，所以被叫做循环。")]),t._v(" "),n("li",[t._v("根据队列中任务的不同，分为宏任务和微任务。")])]),t._v(" "),n("h2",{attrs:{id:"宏任务和微任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#宏任务和微任务"}},[t._v("#")]),t._v(" 宏任务和微任务")]),t._v(" "),n("p",[t._v("当同步代码执行完毕，查看微任务队列是否有任务，有的话就先把微任务队列中的任务执行完，没有的话就取一个宏任务来执行，执行完毕后又去看微任务队列有没有任务，如此构成了一个循环。")]),t._v(" "),n("p",[t._v("宏任务：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("script（整体代码）")])]),t._v(" "),n("li",[n("p",[t._v("setTimout / setInterval")])]),t._v(" "),n("li",[n("p",[t._v("setImmediate(node 独有)")])]),t._v(" "),n("li",[n("p",[t._v("requestAnimationFrame(浏览器独有)")])]),t._v(" "),n("li",[n("p",[t._v("IO")])]),t._v(" "),n("li",[n("p",[t._v("UI render（浏览器独有）")])])]),t._v(" "),n("p",[t._v("微任务")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("process.nextTick(node 独有)")])]),t._v(" "),n("li",[n("p",[t._v("Promise.then()")])]),t._v(" "),n("li",[n("p",[t._v("Object.observe")])]),t._v(" "),n("li",[n("p",[t._v("MutationObserver")])])]),t._v(" "),n("h2",{attrs:{id:"浏览器的事件循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的事件循环"}},[t._v("#")]),t._v(" 浏览器的事件循环")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("浏览器的事件循环由"),n("strong",[t._v("一个宏任务队列")]),t._v("+"),n("strong",[t._v("多个微任务队列")]),t._v("组成。")]),t._v(" "),n("ul",[n("li",[t._v("宏任务队列只有一个，而每一个宏任务都有一个自己的微任务队列，每轮循环都是由一个宏任务+多个微任务组成。")])])]),t._v(" "),n("li",[n("p",[t._v("首先，执行第一个宏任务：全局Script脚本。产生的的宏任务和微任务进入各自的队列中。执行完Script后，把当前的微任务队列清空。完成一次事件循环。")])]),t._v(" "),n("li",[n("p",[t._v("接着再取出一个宏任务，同样把在此期间产生的回调入队。再把当前的微任务队列清空。以此往复。")])]),t._v(" "),n("li",[n("p",[t._v("下面的Demo展示了微任务的插队过程：")])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'第一个回调函数：微任务1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'第三个回调函数：宏任务2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'第二个回调函数：宏任务1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'第四个回调函数：微任务2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个回调函数：微任务1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二个回调函数：宏任务1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第四个回调函数：微任务2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三个回调函数：宏任务2")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先执行整体代码，然后检查微任务队列，然后取一个宏任务并执行，然后检查并执行完微任务队列所有任务，然后取一个宏任务并执行，循环往复")]),t._v("\n")])])]),n("h2",{attrs:{id:"node事件循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node事件循环"}},[t._v("#")]),t._v(" node事件循环")]),t._v(" "),n("p",[t._v("在node中，事件循环表现出的状态与浏览器中大致相同。不同的是node中有一套自己的模型。node中事件循环的实现是依靠的"),n("strong",[t._v("libuv引擎。")])]),t._v(" "),n("p",[t._v("node选择"),n("strong",[t._v("chrome v8引擎作为js解释器")]),t._v("，v8引擎将js代码分析后去调用对应的node api，而这些api最后则由libuv引擎驱动，执行对应的任务，并把不同的事件放在不同的队列中等待主线程执行。 因此实际上node中的事件循环存在于libuv引擎中。")]),t._v(" "),n("p",[t._v("libuv引擎的事件循环模型：")]),t._v(" "),n("img",{attrs:{src:a(596)}}),t._v(" "),n("ol",[n("li",[t._v("poll轮询阶段")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("先查看poll queue中是否有事件，有任务就按先进先出的顺序依次执行回调。")])]),t._v(" "),n("li",[n("p",[t._v("当queue为空时，会检查是否有"),n("strong",[t._v("setImmediate()的callback")]),t._v("，如果有就进入check阶段执行这些callback。执行数会受到node的限制，不会无限执行下去。")])]),t._v(" "),n("li",[n("p",[t._v("同时也会检查是否有到期的timer，如果有，就把这些到期的timer的callback按照调用顺序放到timer queue中，之后循环会进入timer阶段执行queue中的 callback。")])]),t._v(" "),n("li",[n("p",[t._v("这两者的顺序是不固定的，受到到代码运行的环境的影响。如果两者的queue都是空的，那么loop会在poll阶段停留，直到有一个i/o事件返回，循环会进入i/o callback阶段并立即执行这个事件的callback。")])])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("check阶段")])]),t._v(" "),n("p",[t._v("专门用来执行"),n("code",[t._v("setImmediate()")]),t._v("方法的回调。")]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("close阶段")])]),t._v(" "),n("p",[t._v("当一个socket连接或者一个handle被突然关闭时（例如调用了"),n("code",[t._v("socket.destroy()")]),t._v("方法），close事件会被发送到这个阶段执行回调。否则事件会用"),n("code",[t._v("process.nextTick（）")]),t._v("方法发送出去。")]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("timer阶段")])]),t._v(" "),n("p",[t._v("执行setTimeout或者setInterval函数设置的回调函数。")]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("I/O Callback")])]),t._v(" "),n("p",[t._v("执行I/O事件的回调。")]),t._v(" "),n("h2",{attrs:{id:"process-nexttick"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick"}},[t._v("#")]),t._v(" process.nextTick()")]),t._v(" "),n("p",[t._v("实际上node中存在着一个特殊的队列，即nextTick queue。")]),t._v(" "),n("p",[t._v("这个队列中的回调会在每次进入新阶段前优先执行，直到该队列清空，因此错误使用process.nextTick()可能导致死循环直到内存溢出。")]),t._v(" "),n("h2",{attrs:{id:"setimmediate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setimmediate"}},[t._v("#")]),t._v(" setImmediate()")]),t._v(" "),n("p",[t._v("字面意思表示立即执行，实际却是在特点阶段即poll阶段执行。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immediate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("上面的代码执行顺序无法确定，但是在I/O事件的回调中顺序是固定的。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immediate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// immediate")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// timeout")]),t._v("\n")])])]),n("p",[n("strong",[t._v("记住：在I/O事件的回调中，setImmediate方法的回调永远在timer的回调前执行。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);