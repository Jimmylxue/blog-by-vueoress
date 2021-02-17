(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{500:function(t,_,e){"use strict";e.r(_);var s=e(4),a=Object(s.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"mysql-高频实用操作-持续更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-高频实用操作-持续更新"}},[t._v("#")]),t._v(" MySql 高频实用操作 -- 持续更新")]),t._v(" "),e("h3",{attrs:{id:"获取一个表中某个字段去掉重复之后的个数，并得出每种字段的个数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取一个表中某个字段去掉重复之后的个数，并得出每种字段的个数"}},[t._v("#")]),t._v(" 获取一个表中某个字段去掉重复之后的个数，并得出每种字段的个数")]),t._v(" "),e("blockquote",[e("p",[t._v("这一题乍一看我想到的是使用"),e("code",[t._v("distinct")]),t._v("关键字，"),e("code",[t._v("distinct")]),t._v("关键字是可以实现去重的功能，但是实际上"),e("code",[t._v("distinct")]),t._v("关键字是十分消耗资源的效率是十分的低下的，所以一些想法比较好的数据库是已经禁止掉使用这种低效率的关键字了。比较有效率的就是使用"),e("code",[t._v("group by")]),t._v("分组来进行操作")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用"),e("code",[t._v("distinct")]),t._v("处理")]),t._v(" "),e("p",[e("code",[t._v("select distinct type from quizzes;")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201001104406873.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI0MDE2Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用"),e("code",[t._v("group by")]),t._v("分组")]),t._v(" "),e("p",[e("code",[t._v("select type from quizzes GROUP BY type;")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201001104508289.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI0MDE2Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})])]),t._v(" "),e("li",[e("p",[t._v("查询分组之后每组内部的个数 (常见的逻辑 -- 掌握)")]),t._v(" "),e("p",[e("code",[t._v("SELECT type, COUNT(*) from quizzes GROUP BY type")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020100110472767.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI0MDE2Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})])])]),t._v(" "),e("h3",{attrs:{id:"模糊搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模糊搜索"}},[t._v("#")]),t._v(" 模糊搜索")]),t._v(" "),e("blockquote",[e("p",[t._v("模糊搜索常用到的地方是搜索栏的处理已经常用推荐的功能上")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201010002252174.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI0MDE2Mg==,size_16,color_FFFFFF,t_70#pic_center",alt:"模糊搜索"}})]),t._v(" "),e("p",[t._v("原理上其实是数据库的"),e("code",[t._v("LIKE")]),t._v("关键字模糊搜索的结果,如:"),e("code",[t._v("SELECT * FROM good WHERE goodname LIKE '$手机$'")]),t._v(",结果可能是小米手机、oppo 手机等等。")]),t._v(" "),e("p",[e("code",[t._v("%")]),t._v("任何字符出现任何位置区分大小写\n注意点：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("'%a'")]),t._v(" // 检索以 a 结尾的内容")]),t._v(" "),e("li",[e("code",[t._v("'%a%'")]),t._v(" // 检索包含 a 的内容")]),t._v(" "),e("li",[e("code",[t._v("'a%'")]),t._v(" // 检索以 a 开头的内容")]),t._v(" "),e("li",[e("code",[t._v("'a%b'")]),t._v(" // 检索以 a 开头以 b 结尾的内容")])])])}),[],!1,null,null,null);_.default=a.exports}}]);