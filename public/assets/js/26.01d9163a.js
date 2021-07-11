<<<<<<< HEAD:public/assets/js/26.01d9163a.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{515:function(s,t,n){"use strict";n.r(t);var e=n(4),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"driver-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#driver-js"}},[s._v("#")]),s._v(" Driver.js")]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://kamranahmed.info/driver.js/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"driver-js是一个页面引导插件，可以快速的帮我们实现页面引导的这个功能，并且有以下好处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#driver-js是一个页面引导插件，可以快速的帮我们实现页面引导的这个功能，并且有以下好处"}},[s._v("#")]),s._v(" Driver.js是一个页面引导插件，可以快速的帮我们实现页面引导的这个功能，并且有以下好处")]),s._v(" "),n("ul",[n("li",[s._v("封装完美，只需要引入实例化，绑定类名既可以实现")]),s._v(" "),n("li",[s._v("多步骤，可以自定下一步上一步文字，弹窗位置等等")]),s._v(" "),n("li",[s._v("方法封装完善，可以注册点击下一步上一步之后的事件。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201219210223451.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI0MDE2Mg==,size_16,color_FFFFFF,t_70",alt:"图例"}})]),s._v(" "),n("h2",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),n("h3",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),n("p",[s._v("基本使用会实现的就是一个有个overlay 就这个元素是高亮的")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  const driver = new Driver()\n  document.querySelector('.btn1').addEventListener('click',()=>{\n    setTimeout(()=>{  // 这里setTimeout() 是必须设置的 为了方式闪烁\n      driver.highlight({\n        element: '#text1',  // 要高亮的元素\n        //  popover 设置 点击反馈\n        popover: {\n          title: 'Title for the Popover!!', // 这个是支持html显示的 如<em>this is title</em>\n          description: 'Description for it!!',\n          // position can be left, left-center, left-bottom, top,\n          // top-center, top-right, right, right-center, right-bottom,\n          // bottom, bottom-center, bottom-right, mid-center\n          position: 'bottom',\n          showButtons:true,  // 是否显示按钮\n          closeBtnText: 'Close it',      // Text on the close button for this step\n          nextBtnText: 'Next one',        // Next button text for this step  // 下一步和上一步的按钮文案  注意这个只有在多步骤的时候才会显示 因为多步骤的时候才会有下一步和上一步\n          prevBtnText: 'Previous one', \n        },\n        onNext:()=>{ // 点击下一步执行的方法\n          console.log('进入下一步啦')\n        },\n        onPrevious:()=>{\n          console.log('进入上一步啦')\n        }\n      })\n    },50)\n  })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("ul",[n("li",[s._v("具体的方法的和属性有很多，具体如下图\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201219211316690.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI0MDE2Mg==,size_16,color_FFFFFF,t_70",alt:"方法图"}})])]),s._v(" "),n("h3",{attrs:{id:"步骤点击"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤点击"}},[s._v("#")]),s._v(" 步骤点击")]),s._v(" "),n("p",[s._v("使用步骤是可以讲一个个点击的对象配置成一个效果数组，之后使用"),n("code",[s._v("driver.defineSteps(定义的数组)")]),s._v("定义之后，执行"),n("code",[s._v("driver.start()")]),s._v("即可")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  const stepArr = [\n    {\n      element:'#text3',\n      popover:{\n        title:'hello Jimmy',\n        description:'this is first step',\n        closeBtnText: 'Close it',      // Text on the close button for this step\n        nextBtnText: 'Next one',        // Next button text for this step  // 下一步和上一步的按钮文案  注意这个只有在多步骤的时候才会显示 因为多步骤的时候才会有下一步和上一步\n        prevBtnText: 'Previous one'\n      },\n      onNext:()=>{\n        console.log('进入下一步啦')\n      },\n      onPrevious:()=>{\n        console.log('进入上一步啦')\n      }\n    },\n    {\n      element:'#text4',\n      popover:{\n        title:'hello Jimmy',\n        description:'this is second step',\n        closeBtnText: 'Close it',      // Text on the close button for this step\n        nextBtnText: 'Next one',        // Next button text for this step  // 下一步和上一步的按钮文案  注意这个只有在多步骤的时候才会显示 因为多步骤的时候才会有下一步和上一步\n        prevBtnText: 'Previous one'\n      }\n    },\n    {\n      element:'#text5',\n      popover:{\n        title:'hello Jimmy',\n        description:'this is last step',\n        closeBtnText: 'Close it',      // Text on the close button for this step\n        nextBtnText: 'Next one',        // Next button text for this step  // 下一步和上一步的按钮文案  注意这个只有在多步骤的时候才会显示 因为多步骤的时候才会有下一步和上一步\n        prevBtnText: 'Previous one'\n      }\n    },\n  ]\n  document.querySelector('.btn3').addEventListener('click',()=>{\n    setTimeout(() => {\n      driver.defineSteps(stepArr)  // 一定要使用这个方法定义才可以使用\n      driver.start()\n    }, 50);\n  })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("h3",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("这个库可以非常好的让我们实现页面引导的功能！")])])}),[],!1,null,null,null);t.default=a.exports}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{532:function(s,t,n){"use strict";n.r(t);var e=n(4),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"driver-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#driver-js"}},[s._v("#")]),s._v(" Driver.js")]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://kamranahmed.info/driver.js/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"driver-js是一个页面引导插件，可以快速的帮我们实现页面引导的这个功能，并且有以下好处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#driver-js是一个页面引导插件，可以快速的帮我们实现页面引导的这个功能，并且有以下好处"}},[s._v("#")]),s._v(" Driver.js是一个页面引导插件，可以快速的帮我们实现页面引导的这个功能，并且有以下好处")]),s._v(" "),n("ul",[n("li",[s._v("封装完美，只需要引入实例化，绑定类名既可以实现")]),s._v(" "),n("li",[s._v("多步骤，可以自定下一步上一步文字，弹窗位置等等")]),s._v(" "),n("li",[s._v("方法封装完善，可以注册点击下一步上一步之后的事件。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201219210223451.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI0MDE2Mg==,size_16,color_FFFFFF,t_70",alt:"图例"}})]),s._v(" "),n("h2",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),n("h3",{attrs:{id:"基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),n("p",[s._v("基本使用会实现的就是一个有个overlay 就这个元素是高亮的")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  const driver = new Driver()\n  document.querySelector('.btn1').addEventListener('click',()=>{\n    setTimeout(()=>{  // 这里setTimeout() 是必须设置的 为了方式闪烁\n      driver.highlight({\n        element: '#text1',  // 要高亮的元素\n        //  popover 设置 点击反馈\n        popover: {\n          title: 'Title for the Popover!!', // 这个是支持html显示的 如<em>this is title</em>\n          description: 'Description for it!!',\n          // position can be left, left-center, left-bottom, top,\n          // top-center, top-right, right, right-center, right-bottom,\n          // bottom, bottom-center, bottom-right, mid-center\n          position: 'bottom',\n          showButtons:true,  // 是否显示按钮\n          closeBtnText: 'Close it',      // Text on the close button for this step\n          nextBtnText: 'Next one',        // Next button text for this step  // 下一步和上一步的按钮文案  注意这个只有在多步骤的时候才会显示 因为多步骤的时候才会有下一步和上一步\n          prevBtnText: 'Previous one', \n        },\n        onNext:()=>{ // 点击下一步执行的方法\n          console.log('进入下一步啦')\n        },\n        onPrevious:()=>{\n          console.log('进入上一步啦')\n        }\n      })\n    },50)\n  })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("ul",[n("li",[s._v("具体的方法的和属性有很多，具体如下图\n"),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201219211316690.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NjI0MDE2Mg==,size_16,color_FFFFFF,t_70",alt:"方法图"}})])]),s._v(" "),n("h3",{attrs:{id:"步骤点击"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤点击"}},[s._v("#")]),s._v(" 步骤点击")]),s._v(" "),n("p",[s._v("使用步骤是可以讲一个个点击的对象配置成一个效果数组，之后使用"),n("code",[s._v("driver.defineSteps(定义的数组)")]),s._v("定义之后，执行"),n("code",[s._v("driver.start()")]),s._v("即可")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("  const stepArr = [\n    {\n      element:'#text3',\n      popover:{\n        title:'hello Jimmy',\n        description:'this is first step',\n        closeBtnText: 'Close it',      // Text on the close button for this step\n        nextBtnText: 'Next one',        // Next button text for this step  // 下一步和上一步的按钮文案  注意这个只有在多步骤的时候才会显示 因为多步骤的时候才会有下一步和上一步\n        prevBtnText: 'Previous one'\n      },\n      onNext:()=>{\n        console.log('进入下一步啦')\n      },\n      onPrevious:()=>{\n        console.log('进入上一步啦')\n      }\n    },\n    {\n      element:'#text4',\n      popover:{\n        title:'hello Jimmy',\n        description:'this is second step',\n        closeBtnText: 'Close it',      // Text on the close button for this step\n        nextBtnText: 'Next one',        // Next button text for this step  // 下一步和上一步的按钮文案  注意这个只有在多步骤的时候才会显示 因为多步骤的时候才会有下一步和上一步\n        prevBtnText: 'Previous one'\n      }\n    },\n    {\n      element:'#text5',\n      popover:{\n        title:'hello Jimmy',\n        description:'this is last step',\n        closeBtnText: 'Close it',      // Text on the close button for this step\n        nextBtnText: 'Next one',        // Next button text for this step  // 下一步和上一步的按钮文案  注意这个只有在多步骤的时候才会显示 因为多步骤的时候才会有下一步和上一步\n        prevBtnText: 'Previous one'\n      }\n    },\n  ]\n  document.querySelector('.btn3').addEventListener('click',()=>{\n    setTimeout(() => {\n      driver.defineSteps(stepArr)  // 一定要使用这个方法定义才可以使用\n      driver.start()\n    }, 50);\n  })\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br")])]),n("h3",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("这个库可以非常好的让我们实现页面引导的功能！")])])}),[],!1,null,null,null);t.default=a.exports}}]);
>>>>>>> 751377f661e761ce26c9655dcc0f1284fc539e96:public/assets/js/26.ecb8293d.js
