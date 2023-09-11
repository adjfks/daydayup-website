(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{624:function(t,e,r){"use strict";r.r(e);var s=r(17),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"前端场景题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端场景题"}},[t._v("#")]),t._v(" 前端场景题")]),t._v(" "),r("h3",{attrs:{id:"_1-10000条数据如何渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-10000条数据如何渲染"}},[t._v("#")]),t._v(" 1. 10000条数据如何渲染？")]),t._v(" "),r("p",[t._v("方案：\n看场景选择：")]),t._v(" "),r("ol",[r("li",[t._v("虚拟列表（按需渲染）：只渲染可视区部分，上下可留余量")]),t._v(" "),r("li",[t._v("虚拟滚动（延迟加载）：滚动时往已渲染列表中追加")]),t._v(" "),r("li",[t._v("分页")])]),t._v(" "),r("p",[t._v("全部渲染时可以进行分片：")]),t._v(" "),r("ol",[r("li",[t._v("setTimeout：延时受任务队列影响不准确")]),t._v(" "),r("li",[t._v("requestAnimationFrame：下一次重绘前执行回调 一般一秒60帧")])]),t._v(" "),r("p",[t._v("优化细节：每一轮插入DOM时可以先插入到创建的fragment中，使用createDocumentFragment")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/dwqs/blog/issues/70",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅说虚拟列表的实现原理"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/dwqs/blog/issues/63",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表数据的展示优化"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_2-图片懒加载的实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-图片懒加载的实现"}},[t._v("#")]),t._v(" 2.图片懒加载的实现")]),t._v(" "),r("p",[t._v("intersectionObserver")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/dwqs/blog/issues/74",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片和视频的懒加载"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_3-无感刷新token"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-无感刷新token"}},[t._v("#")]),t._v(" 3. 无感刷新token")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("每次请求判断token是否过期，然后刷新")])]),t._v(" "),r("li",[r("p",[t._v("响应拦截器中判断是否过期，调用接口刷新")])])]),t._v(" "),r("p",[t._v("注意：刷新过程中还有请求时会导致重复刷新，要利用一个变量标记处于刷新状态。刷新中将其余请求缓冲到一个队列，待刷新完成后再发起。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1927445",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端如何实现token的无感刷新"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_4-让你来实现一个扫码支付的功能你会怎么实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-让你来实现一个扫码支付的功能你会怎么实现"}},[t._v("#")]),t._v(" 4. 让你来实现一个扫码支付的功能你会怎么实现？")]),t._v(" "),r("ol",[r("li",[t._v("pc请求二维码ID，根据二维码ID生成二维码展示在页面上，服务器端保存二维码ID且设置过期时间")]),t._v(" "),r("li",[t._v("手机扫描二维码，识别二维码ID，点击确认登录，将设备信息，token，二维码ID等发送到服务器进行验证。验证通过后服务器会设置二维码状态为已登录。")]),t._v(" "),r("li",[t._v("pc轮询获取登录状态")])]),t._v(" "),r("p",[t._v("注意：获取登录状态的方式除了轮询外，还有：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("长轮询：服务器端阻塞请求，直到超时或二维码状态改变")])]),t._v(" "),r("li",[r("p",[t._v("扫码后pc和服务器建立websocket连接，当二维码状态改变后服务器主动通知客户端。")])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1893465",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：如何实现扫码登录功能?"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_5-如何实现上拉加载-下拉刷新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何实现上拉加载-下拉刷新"}},[t._v("#")]),t._v(" 5. 如何实现上拉加载，下拉刷新？")]),t._v(" "),r("p",[t._v("开源社区也有很多优秀的解决方案，如"),r("code",[t._v("iscroll")]),t._v("、"),r("code",[t._v("better-scroll")]),t._v("、"),r("code",[t._v("pulltorefresh.js")]),t._v("库等等")]),t._v(" "),r("p",[t._v("上拉加载：移动端分页, 判断"),r("code",[t._v("scrollTop + clientHeight >= scrollHeight - distance")])]),t._v(" "),r("p",[t._v("下拉刷新：")]),t._v(" "),r("ol",[r("li",[t._v("监听"),r("code",[t._v("touchstart")]),t._v("记录属实y坐标")]),t._v(" "),r("li",[t._v("监听"),r("code",[t._v("touchmove")]),t._v("通过下拉距离判断下拉状态")]),t._v(" "),r("li",[t._v("监听"),r("code",[t._v("touchend")]),t._v(",页面滚回顶部且刷新")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vue3js.cn/interview/JavaScript/pull_up_loading_pull_down_refresh.html#%E4%B8%80%E3%80%81%E5%89%8D%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：如何实现上拉加载，下拉刷新？"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_6-如何在移动端实现-1-px-的线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-如何在移动端实现-1-px-的线"}},[t._v("#")]),t._v(" 6. 如何在移动端实现 1 px 的线?")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("伪元素 + "),r("code",[t._v("transform: scale")])]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".b-1px-l:before")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #C7C7C7"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #C7C7C7"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform-origin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleX")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/yucccc/border-1px",target:"_blank",rel:"noopener noreferrer"}},[t._v("border-1px"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/suoyuesmile/suo-blog/issues/41",target:"_blank",rel:"noopener noreferrer"}},[t._v("吃透移动端1px"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/dsky1990/frontend-interview/wiki/1px%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("1px问题"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_7-一个网页从请求到呈现花了很长时间-如何排查"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-一个网页从请求到呈现花了很长时间-如何排查"}},[t._v("#")]),t._v(" 7. 一个网页从请求到呈现花了很长时间，如何排查?")]),t._v(" "),r("p",[t._v("主要从浏览器内存占用, DNS解析, 资源请求, js执行, 服务端分析。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/266102548",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试题|排查网页打开慢的方法有多少种? 我总结了15个"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000017715100",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器请求响应慢，该从哪些方面分析"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_8-图片加载优化-优先级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-图片加载优化-优先级"}},[t._v("#")]),t._v(" 8. 图片加载优化，优先级")]),t._v(" "),r("ol",[r("li",[t._v("从架构的角度，将应用服务器和图片服务器分离，防止大量图片请求导致应用服务器崩溃。")]),t._v(" "),r("li",[t._v("HTTP1.0和HTTP1.1在同一时间对"),r("strong",[t._v("同一域名")]),t._v("下的资源请求并发数量有限制，可以使用HTTP2绕开这个限制，但是会有被进行DOS攻击的隐患。")]),t._v(" "),r("li",[t._v("可以为同一IP申请多个域名，请求图片时对域名进行替换，向多个域名发起请求。问题是域名改变了，浏览器缓存失效")]),t._v(" "),r("li",[t._v("图片压缩，小图片使用base64，对于图片格式可以进行多级处理，支持webp的浏览器可以使用webp，可以使用"),r("code",[t._v("<picture>")]),t._v("标签，在该标签内放置多个"),r("code",[t._v("<source>")]),t._v("标签引用不同格式的图片，以及放一张兜底的img标签，这样浏览器会依次检测支持的图片格式。")]),t._v(" "),r("li",[t._v("CDN")]),t._v(" "),r("li",[t._v("HTTP缓存")]),t._v(" "),r("li",[t._v("图片懒加载。**怎么做的？**封装了一个vue自定义指令，将该指令绑定到img标签上，并传入图片地址等参数。在懒加载指令的实现上，利用一个web api IntersectionObserver对象,在new对象的回调函数里遍历entries判断intersectionRatio是否大于0，大于0说明进入根元素可视区域，从而给target赋值src属性。**如果浏览器不支持该api怎么做？**直接监听页面scroll事件，通过"),r("code",[t._v("getBoundingClientRect")]),t._v("获取img元素，如果top值小于可是区域高度则赋值src，然后取消观察该元素。记得给scroll用节流函数包一下。")]),t._v(" "),r("li",[t._v("渐进式并行图片加载，结合HTTP2和JPEG图片（不是按像素存储）的特点先加载模糊的预览图，再逐渐提高清晰度。")]),t._v(" "),r("li",[t._v('可以给img标签添加importance="high"，让浏览器优先加载')])]),t._v(" "),r("h3",{attrs:{id:"_9-单点登录原理-sso"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-单点登录原理-sso"}},[t._v("#")]),t._v(" 9. 单点登录原理(SSO)")]),t._v(" "),r("p",[t._v("使用场景：系统增多以后每个系统都要使用单独的账号密码进行登录，十分繁琐。")]),t._v(" "),r("p",[t._v("实现效果：只需登录多个系统中的一个，就可以访问其它相互信任的系统。")]),t._v(" "),r("p",[t._v("登录流程：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("访问app系统发现没有登录，服务端返回302告诉客户端重定向到SSO进行登录。")])]),t._v(" "),r("li",[r("p",[t._v("客户端向SSO系统发起请求，SSO系统也没有登录，于是返回登录表单页面")])]),t._v(" "),r("li",[r("p",[t._v("用户填写登录账号和密码后发送到SSO，SSO服务端接收到以后生成cookie并存储，将cookie携带在set-cookie响应头，同时携带一个service ticker返回一个302响应")])]),t._v(" "),r("li",[r("p",[t._v("客户端接收到该响应后cookie被设置到SSO的域，然后重定向访问app系统，将service ticker发送给app")])]),t._v(" "),r("li",[r("p",[t._v("app服务端从后台携带ST发送给SSO服务端，SSO验证ST的有效性后，将cookie保存到自己的session然后返回响应登录成功。")])])]),t._v(" "),r("p",[t._v("当用户再去访问另一个系统b时：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("发送请求到b，b服务器返回302重定向到SSO")])]),t._v(" "),r("li",[r("p",[t._v("b向SSO发起请求，此时SSO已经登录，返回生成的ST以及302重定向到b")])]),t._v(" "),r("li",[r("p",[t._v("客户端携带ST请求b服务端，b从后台携带ST访问SSO验证是否有效。")])]),t._v(" "),r("li",[r("p",[t._v("验证成功后在b保存cookie，在b的域写入cookie")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);