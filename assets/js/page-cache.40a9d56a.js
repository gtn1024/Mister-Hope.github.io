(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1050:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("这个 Action 允许您缓存依赖项和构建输出内容以缩短 Workflow 执行时间。")]),t._v(" "),a("p",[t._v("日常最多使用的就是缓存依赖项，在每个工作流程中，将安装后的依赖通过安装后生成的依赖版本文件的哈希值进行缓存。")]),t._v(" "),a("p",[t._v("当前工作流程的版本文件哈希值与历史缓存中的某一项完全相同时，直接载入这些依赖项缓存，这样就可以免去安装步骤。")]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("缓存依赖")]),t._v(" "),a("p",[t._v("关于缓存依赖的文档，详见 "),a("a",{attrs:{href:"https://docs.github.com/cn/actions/guides/caching-dependencies-to-speed-up-workflows",target:"_blank",rel:"noopener noreferrer"}},[t._v("缓存依赖项以加快工作流程\n"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),a("h3",{attrs:{id:"path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" path")]),t._v(" "),a("p",[t._v("要缓存和还原的文件，目录和通配符模式的列表。")]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("相关信息")]),t._v(" "),a("p",[t._v("支持的 glob 模式，请参见 "),a("a",{attrs:{href:"https://github.com/actions/toolkit/tree/main/packages/glob",target:"_blank",rel:"noopener noreferrer"}},[t._v("@actions/glob"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" key")]),t._v(" "),a("p",[t._v("用于保存缓存与还原缓存的的密钥")]),t._v(" "),a("h3",{attrs:{id:"restore-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore-keys"}},[t._v("#")]),t._v(" restore-keys")]),t._v(" "),a("p",[t._v("当 key 没有命中缓存是用于恢复缓存键值的有序列表")]),t._v(" "),a("h2",{attrs:{id:"输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[t._v("#")]),t._v(" 输出")]),t._v(" "),a("p",[a("code",[t._v("cache-hit")]),t._v(": 一个布尔值，表明是否找到与该键完全匹配的值")]),t._v(" "),a("h2",{attrs:{id:"缓存范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存范围"}},[t._v("#")]),t._v(" 缓存范围")]),t._v(" "),a("p",[t._v("缓存的作用域为特定的键和分支。默认分支缓存可用于其他分支。")]),t._v(" "),a("h2",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("p",[t._v("Yarn:")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v2\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用此 id 获得 `cache-hit`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (`steps.yarn-cache.outputs.cache-hit != 'true'`)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_modules/\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/yarn.lock')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n      ${{ runner.os }}-yarn-")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install Dependencies\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" steps.yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache.outputs.cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hit "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!=")]),t._v(" 'true'\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn install\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h2",{attrs:{id:"创建一个缓存键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个缓存键"}},[t._v("#")]),t._v(" 创建一个缓存键")]),t._v(" "),a("p",[t._v("缓存键可以包括 GitHub Actions 支持的任何上下文，函数，文字和运算符。")]),t._v(" "),a("p",[t._v("例如，使用 "),a("code",[t._v("hashFiles")]),t._v(" 功能可让您在依存关系更改时创建新的缓存。")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v2\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n      node_modules/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/yarn.lock')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("利用 cache-hit 输出，当对应键命中特定缓存后，可以跳过后续步骤 (例如，安装或构建) 。")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install Dependencies\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" steps.yarn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache.outputs.cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hit "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!=")]),t._v(" 'true'\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn install\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"缓存限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存限制"}},[t._v("#")]),t._v(" 缓存限制")]),t._v(" "),a("p",[t._v("一个存储库最多可以有 5GB 的缓存。达到 5GB 限制后，将根据上次访问缓存的时间驱逐较早的缓存。过去未访问的缓存也将被自动删除。")]),t._v(" "),a("h2",{attrs:{id:"地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地址"}},[t._v("#")]),t._v(" 地址")]),t._v(" "),a("p",[t._v("地址: "),a("a",{attrs:{href:"https://github.com/actions/cache",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/actions/cache"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);