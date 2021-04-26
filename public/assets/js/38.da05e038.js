(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{514:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"定位问题的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位问题的处理"}},[t._v("#")]),t._v(" 定位问题的处理")]),t._v(" "),a("p",[t._v("定位问题过去一直都很困扰我，不知道应该怎么解决，但是今天在写毕设的时候我终于是研究出来了，可能说的不够准确的，但是在我的理解和操作下是可以成功的获取定位的。")]),t._v(" "),a("h4",{attrs:{id:"定位的本质：ip-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位的本质：ip-地址"}},[t._v("#")]),t._v(" 定位的本质：IP 地址")]),t._v(" "),a("blockquote",[a("p",[t._v("在我的理解中，定位的本质就是根据 ip 地址来进行定位的，要定位就需要联网，联网就一定是有一个 ip 地址，我们就可以根据这个 ip 地址来获取这个 ip 所在的地区。")])]),t._v(" "),a("h4",{attrs:{id:"需要获取的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要获取的数据"}},[t._v("#")]),t._v(" 需要获取的数据")]),t._v(" "),a("ul",[a("li",[t._v("ip 地址（通过 JS 获取本机的 ip 地址）")]),t._v(" "),a("li",[t._v("根据 ip 地址来获取 ip 地址的地理位置（聚合数据又提供免费的接口）")])]),t._v(" "),a("h4",{attrs:{id:"js-获取-ip-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-获取-ip-地址"}},[t._v("#")]),t._v(" JS 获取 ip 地址")]),t._v(" "),a("p",[t._v("我在网上查了很多的方法，大部分的接口都和谐了，亲测搜狐的接口任然是可以使用的")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://pv.sohu.com/cityjson?ie=utf-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" returnCitySN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returnCitySN['cip'] ip地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// returnCitySN["cname"] ip地址的城市')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("细节：")]),t._v(" "),a("ul",[a("li",[t._v("这里我是在 vue 中使用的，vue 的 public 文件夹下又 index.html，我们就在 index.html 中操作即可，将获取的 ip 存到浏览器中。")]),t._v(" "),a("li",[t._v("亲测"),a("code",[t._v('returnCitySN["cname"]')]),t._v("获取的城市不准确，我在福州，他给我的值是在广州，所以还是老老实实的在聚合数据中获取把")])]),t._v(" "),a("h4",{attrs:{id:"根据-ip-获取城市"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据-ip-获取城市"}},[t._v("#")]),t._v(" 根据 ip 获取城市")]),t._v(" "),a("p",[t._v("到这一步就很简单了，直接访问聚合数据接口就行了")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定位  本质上是根据ip定制进行定位")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$jsonp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://apis.juhe.cn/ip/ipNew?ip=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前面存的IP地址")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ip'")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("&key=你申请的key")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "http://pv.sohu.com/cityjson?ie=utf-8"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resultcode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res中就含有数据")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),a("p",[t._v("其实 ip 地址和城市我们是可以做很多很多的事情，如：")]),t._v(" "),a("ul",[a("li",[t._v("基本的定位")]),t._v(" "),a("li",[t._v("打卡系统，指定的 ip 才可以打卡成功， （这个是我公司打卡系统）")])])])}),[],!1,null,null,null);s.default=r.exports}}]);