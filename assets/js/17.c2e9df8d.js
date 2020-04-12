(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{196:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[s._v("#")]),s._v(" 开始")]),s._v(" "),a("h2",{attrs:{id:"服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[s._v("#")]),s._v(" 服务端")]),s._v(" "),a("h3",{attrs:{id:"选择工作路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择工作路径"}},[s._v("#")]),s._v(" 选择工作路径")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" goadmin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./goadmin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./src\n")])])]),a("blockquote",[a("p",[s._v("为什么要设置src目录")])]),s._v(" "),a("p",[s._v("因为 GO 的包搜索是从 GOPATH 和 GOROOT 路径下搜索，源码必须要放在 GOROOT 或 GOPATH 的 src 目录下才能找到。但把源码和包放在一起，对于很多人来说确实不太很习惯，有一种做法，通过在 GOPATH 中设置两个路径，go get 下载的包默认放在 GOPATH 设置的第一个路径下。比如，GOPATH 设置如下：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/Users/zhangwenjian/go/:/Users/zhangwenjian/Work/go\n")])])]),a("p",[s._v("如此就可以把工作区设在 /Users/zhangwenjian/Work/go/src，而安装包放在 /Users/zhangwenjian/go/src。")]),s._v(" "),a("h3",{attrs:{id:"下载源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载源码"}},[s._v("#")]),s._v(" 下载源码")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/wenjianzhang/go-admin.git\n")])])]),a("h3",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./go-admin\ngo build\n")])])]),a("h3",{attrs:{id:"设置数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置数据库"}},[s._v("#")]),s._v(" 设置数据库")]),s._v(" "),a("p",[s._v("首先找到配置文件，"),a("code",[s._v("config/settings.yml")])]),s._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("settings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目启动环境")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当 env:demo 时，GET以外的请求操作提示")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("envmsg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"谢谢您的参与，但为了大家更好的体验，所以本次提交就算了吧！"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主机ip 或者域名，默认0.0.0.0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否需要初始化数据库结构以及基本数据；true：需要；false：不需要")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("isinit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JWT加密字符串")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jwtsecret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 123abc  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# log存放路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logpath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" temp/logs/log.log\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名称")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" go"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admin\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端口")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("readtimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("writertimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库名称")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dbname\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dbtype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库地址")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库密码")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" password  \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库端口")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库用户名")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n")])])]),a("blockquote",[a("p",[s._v("首先，需要修改数据库信息：")])]),s._v(" "),a("div",{staticClass:"language-说明 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("database: 节点下是数据库配置类信息\ndatabase.database: 数据库名称\ndatabase.dbtype: 数据库类型。目前支持：mysql、sqlite3\ndatabase.host: 数据库地址，填写网络ip地址或者域名、sqlite3请填写文件路径。mysql类型，如：127.0.0.1；sqlite3类型，如：sqlite3.db\ndatabase.password: 数据库密码\ndatabase.port: 数据库端口号\ndatabase.username: 数据库用户名\n")])])]),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./go-admin\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/06 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":38:52 root:password@tcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:3306"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/dbname\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/04/06 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":38:52 mysql connect error %v dial tcp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:3306: connect: connection refused\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("输出结果，具体原因是因为我们需要修改配置文件进行数据库初始化。")])]),s._v(" "),a("h2",{attrs:{id:"ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui"}},[s._v("#")]),s._v(" UI")]),s._v(" "),a("h3",{attrs:{id:"选择ui工作路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择ui工作路径"}},[s._v("#")]),s._v(" 选择UI工作路径")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n")])])]),a("h3",{attrs:{id:"下载ui源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载ui源码"}},[s._v("#")]),s._v(" 下载UI源码")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/wenjianzhang/go-admin-ui.git\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/wenjianzhang/go-admin-ui.git\nCloning into "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'go-admin-ui'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nremote: Enumerating objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("584")]),s._v(", done.\nremote: Counting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("584")]),s._v("/584"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Compressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("436")]),s._v("/436"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Total "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("584")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("524")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", pack-reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nReceiving objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("584")]),s._v("/584"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("580.92")]),s._v(" KiB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.00")]),s._v(" KiB/s, done.\nResolving deltas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v("/127"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\n")])])]),a("blockquote",[a("p",[s._v("恭喜！到目前为止说明go-admin-ui代码已经下载完成。")])]),s._v(" "),a("h3",{attrs:{id:"npm-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-install"}},[s._v("#")]),s._v(" npm install")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" go-admin-ui/\n\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 国内请使用 --registry=https://registry.npm.taobao.org")]),s._v("\n\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("这里还原包是需要一些时间的请耐心等待一下...")])]),s._v(" "),a("p",[s._v("看到下边的输入说明已经安装好了")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Binary found at /Users/zhangwenjian/Code/go-test/go-admin-ui/node_modules/node-sass/vendor/darwin-x64-64/binding.node\nTesting binary\nBinary is fine\nadded "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2033")]),s._v(" packages from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1953")]),s._v(" contributors "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(".229s\n")])])]),a("h3",{attrs:{id:"启动-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-2"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])])]),a("p",[s._v("输出内容：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" DONE  Compiled successfully "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 22188ms                                                                                                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":47:40 AM\n\n\n  App running at:\n  - Local:   http://localhost:9530/\n  - Network: http://192.168.3.12:9530/\n\n  Note that the development build is not optimized.\n  To create a production build, run "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build.\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("此时项目已经启动了，但是有一点请注意：检查api是否也启动了。否则页面会提示错误的哦。")])]),s._v(" "),a("h2",{attrs:{id:"搞定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搞定"}},[s._v("#")]),s._v(" 搞定")]),s._v(" "),a("p",[s._v("搞定，现在你可以go-admin 之旅！")])])}],!1,null,null,null);t.default=e.exports}}]);