(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1069:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"semantic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semantic"}},[e._v("#")]),e._v(" Semantic")]),e._v(" "),a("p",[e._v("对于一个大型项目，几千个 commit 是很常见的，这些 commit 部分是项目维护者提交的 commit，部分是一些热心的开发者通过 PR 贡献的。")]),e._v(" "),a("p",[e._v("无论是对于项目维护者，还是想要贡献代码的热心开发者来说，一个简洁明了的 commit 描述都是必不可少的。也就是说我们需要用尽可能简短的备注信息，备注每一个 commit 的作用，以便大家查看。所以我们需要一种规范的，语义化的备注格式，很快由知名项目牵头，全球接收并统一了一种语义化的备注格式，这就是 semantic 规范的来源。")]),e._v(" "),a("h2",{attrs:{id:"优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[e._v("#")]),e._v(" 优势")]),e._v(" "),a("p",[e._v("当一个仓库所有的 commit 信息都是用标准的 semantic 格式时，用户可以很方便的理解每一个 commit 的作用。")]),e._v(" "),a("p",[e._v("同时，senmantic 支持直接将某个提交或 PR 与特定 issue 链接，并自动关闭或引用这些 issue。")]),e._v(" "),a("p",[e._v("通过一些第三方工具，大家可以基于这些备注信息进行过滤查找，更新日志生成等操作。")]),e._v(" "),a("h2",{attrs:{id:"格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[e._v("#")]),e._v(" 格式")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("&lt;type>(&lt;scope>): &lt;subject>\n&lt;body>\n\n&lt;footer>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[e._v("#")]),e._v(" header")]),e._v(" "),a("p",[e._v("第一行被称为 "),a("code",[e._v("header")]),e._v("，它必须只有一行，包括三个字段: "),a("code",[e._v("<type>")]),e._v("(必需)、"),a("code",[e._v("<scope>")]),e._v("(可选)和 "),a("code",[e._v("<subject>")]),e._v("(必需)")]),e._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" type")]),e._v(" "),a("p",[e._v("commit 的类型。")]),e._v(" "),a("p",[e._v("规范中规定了如下类型:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("feat")]),e._v(": feature, 新增功能")]),e._v(" "),a("li",[a("code",[e._v("fix")]),e._v(" : bug fix, 修复 bug")]),e._v(" "),a("li",[a("code",[e._v("docs")]),e._v(": documentation, 仅仅修改了文档，如 "),a("code",[e._v("readme.md")])]),e._v(" "),a("li",[a("code",[e._v("style")]),e._v(": style, 仅仅是对格式进行修改，如逗号、缩进、空格等，不改变代码逻辑")]),e._v(" "),a("li",[a("code",[e._v("refactor")]),e._v(": refactor, 代码重构，一般更改了源文件或测试文件，但没有新增功能或修复 bug")]),e._v(" "),a("li",[a("code",[e._v("perf")]),e._v(": preformance, 优化相关，如提升性能、用户体验等")]),e._v(" "),a("li",[a("code",[e._v("test")]),e._v(": test, 测试用例，包括单元测试，集成测试")]),e._v(" "),a("li",[a("code",[e._v("chore")]),e._v(": chore, 对于库的其他内容的改变，一般不涉及到源文件或测试文件，比如更改 CI 设置，提升仓库以来等")]),e._v(" "),a("li",[a("code",[e._v("revert")]),e._v(": 版本回滚")])]),e._v(" "),a("h3",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[e._v("#")]),e._v(" scope")]),e._v(" "),a("p",[e._v("用于说明 commit 影响的范围，比如: "),a("code",[e._v("views")]),e._v(" , "),a("code",[e._v("component")]),e._v(", "),a("code",[e._v("utils")]),e._v(", "),a("code",[e._v("test")]),e._v("。这个是由项目的内容与结构决定的。")]),e._v(" "),a("h3",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[e._v("#")]),e._v(" subject")]),e._v(" "),a("p",[e._v("commit 目的的简短描述，最好小于 50 字符，一般不超过 65 个字符，最长不超过 80 字符。")]),e._v(" "),a("p",[e._v("当 subject 限制的字符数无法详细说明此 commit 的变动时，将 commit 的具体变动放置在 body 中")]),e._v(" "),a("h3",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[e._v("#")]),e._v(" body")]),e._v(" "),a("p",[e._v("对本次 commit 修改内容的具体描述，可以分为多行。"),a("code",[e._v("body")]),e._v(" 是可选的，而且 "),a("code",[e._v("body")]),e._v(" 可以有多行。")]),e._v(" "),a("h3",{attrs:{id:"footer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[e._v("#")]),e._v(" footer")]),e._v(" "),a("p",[e._v("可选的，前面有一空行。可以添加一些备注，一般放置 "),a("code",[e._v("BREAKING CHANGE")]),e._v("(一些破坏性的变动) 或修复的 bug(涉及的 issue)的链接。")]),e._v(" "),a("h2",{attrs:{id:"semantic-commit-与-changelog-生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semantic-commit-与-changelog-生成"}},[e._v("#")]),e._v(" Semantic commit 与 Changelog 生成")]),e._v(" "),a("p",[e._v("不同语言环境都有很多种工具来帮助您创建一个 semantic commit 或者自动生成 changelog。")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("案例")]),e._v(" "),a("p",[e._v("Node.js 环境下可以使用:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/commitizen/cz-conventional-changelog",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("cz-conventional-changelog")]),a("OutboundLink")],1),e._v(" 提供 "),a("code",[e._v("git cz")]),e._v(" 命令辅助创建 semantic commit。")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/conventional-changelog/conventional-changelog",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("conventional-changelog-cli")]),a("OutboundLink")],1),e._v(" 来快速生成更新日志，如 "),a("a",{attrs:{href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-hope 的更改日志"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);