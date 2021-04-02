(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{1280:function(t,v,_){"use strict";_.r(v);var e=_(1),o=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"开发框架优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发框架优点"}},[t._v("#")]),t._v(" 开发框架优点")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("将界面开发的复杂过程转换为编写简单的 yaml 文件。开发门槛低，")])]),t._v(" "),_("li",[_("p",[t._v("拥有详细的开发文档说明，简单易懂，页面文件自述性高，没有开发基础的人也可以经过简单阅读后看懂页面文件大体描述内容。"),_("RouterLink",{attrs:{to:"/code/mini-app/framework/demo.html"}},[t._v("查看例子点这里")])],1)]),t._v(" "),_("li",[_("p",[t._v("开发者无需着眼于界面样式或是功能的实现，只需着眼于在 yaml 文件中添加渲染界面所需参数，即可完成界面编写。开发者只需在开发过程中按照开发说明录入参数，并注意格式即可。")])])]),t._v(" "),_("h2",{attrs:{id:"开发工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发工具"}},[t._v("#")]),t._v(" 开发工具")]),t._v(" "),_("p",[t._v("开发工具使用 VS Code，具体详见"),_("RouterLink",{attrs:{to:"/code/vscode/"}},[t._v("VS Code 说明")]),t._v("或"),_("RouterLink",{attrs:{to:"/code/vscode/simple.html"}},[t._v("VS Code 简单说明")])],1),t._v(" "),_("h2",{attrs:{id:"开发说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发说明"}},[t._v("#")]),t._v(" 开发说明")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("新建一个或多个 yaml 文件，命名为 "),_("code",[t._v("xxx.yaml")]),t._v("。文件命名只能包含英文与数字和 "),_("code",[t._v("-")]),t._v("，文件名中不得包含其他特殊符号、空格或者中文字符。由多个单词组成的文件名建议使用 "),_("code",[t._v("-")]),t._v(" 链接。如 "),_("code",[t._v("厚普公益学校")]),t._v(" 可以表示为 "),_("code",[t._v("hope-good-school")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("整理界面所需的图片和图标，图片和图标请使用"),_("a",{attrs:{href:"https://tinypng.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("压缩网站"),_("OutboundLink")],1),t._v("压缩至 800Kb 以下(带有文字或需要查看及其详细细节的图片可以提升至不多于 1.2Mb)，并按照 "),_("code",[t._v("页面文件名称-图片")]),t._v(" 的形式命名，如 "),_("code",[t._v("hope-good-school-logo.jpg")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("在 yaml 中通过 "),_("code",[t._v("title")]),t._v(" 写入页面的标题，并通过 "),_("code",[t._v("content")]),t._v(" 写入文件内容。\n"),_("code",[t._v("content")]),t._v(" 为一个 yaml 数组，数组的每个元素均为一个 yaml 对象，其内必须包含一个有效的 "),_("code",[t._v("tag")]),t._v(" 值。("),_("RouterLink",{attrs:{to:"/code/mini-app/framework/simple-debug.html"}},[t._v("您在说什么?")]),t._v(")")],1),t._v(" "),_("p",[t._v("每一个 yaml 对象最终作为配置被渲染成为了页面中的一个组件。")]),t._v(" "),_("p",[t._v("按照 "),_("RouterLink",{attrs:{to:"/code/mini-app/framework/tag-list.html"}},[t._v("tag 值参数表")]),t._v(" 对 yaml 对象的剩余参数进行填写。")],1)]),t._v(" "),_("li",[_("p",[t._v("将 yaml 文件与其他图片资源打包成压缩包，发送至 "),_("a",{attrs:{href:"https://wpa.qq.com/msgrd?v=3&uin=1178522294&site=qq",target:"_blank",rel:"noopener noreferrer"}},[t._v("QQ:1178522294"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("blockquote",[_("p",[t._v("不涉及到复杂界面编写的请直接看"),_("a",{attrs:{href:"#%E5%BC%80%E5%8F%91%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"}},[t._v("开发注意事项")])])])])]),t._v(" "),_("h2",{attrs:{id:"开发注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发注意事项"}},[t._v("#")]),t._v(" 开发注意事项")]),t._v(" "),_("p",[t._v("下面是开发中需要注意的一些问题")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("img")]),t._v("组件图片链接填写")]),t._v(" "),_("p",[t._v("请在 "),_("code",[t._v("src")]),t._v(" 中填入 "),_("code",[t._v("https://mp.innenu.com/img/分类名/图片文件名.后缀名")]),t._v("。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("doc")]),t._v("组件文档路径填写")]),t._v(" "),_("p",[t._v("请在 "),_("code",[t._v("url")]),t._v(" 中填入 "),_("code",[t._v("https://mp.innenu.com/file/文件名.文件类型")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("audio")]),t._v("音频路径填写")]),t._v(" "),_("p",[t._v("请将音频上传至微信公众号并编辑图文发送，在 "),_("code",[t._v("src")]),t._v(" 中填写图文链接。(请一直保留微信推送与素材库里的文件)")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("swiper")]),t._v("组件图片链接填写")]),t._v(" "),_("p",[t._v("请在 "),_("code",[t._v("url")]),t._v(" 的每个 element 依次填入 "),_("code",[t._v("https://mp.innenu.com/img/分类名/图片文件名.后缀名")]),t._v("。")])])])])}),[],!1,null,null,null);v.default=o.exports}}]);