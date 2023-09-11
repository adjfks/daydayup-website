(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{709:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ts-compiler-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ts-compiler-api"}},[t._v("#")]),t._v(" ts compiler api")]),t._v(" "),n("h3",{attrs:{id:"ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ast"}},[t._v("#")]),t._v(" ast")]),t._v(" "),n("p",[t._v("借助该api可以遍历ts文件的ast树做一些事情，例如代码检查。")]),t._v(" "),n("p",[t._v("[文档]("),n("a",{attrs:{href:"https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API#traversing-the-ast-with-a-little-linter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using the Compiler API · microsoft/TypeScript Wiki · GitHub"),n("OutboundLink")],1),t._v(")")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" readFileSync "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ts "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typescript"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("delint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sourceFile"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SourceFile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("delintNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sourceFile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("delintNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ForStatement"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ForInStatement"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WhileStatement"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DoStatement"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IterationStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A looping statement\\'s contents should be wrapped in a block body.'")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IfStatement"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ifStatement "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IfStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ifStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thenStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ifStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thenStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'An if statement\\'s contents should be wrapped in a block body.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          ifStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elseStatement "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n          ifStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elseStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Block "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n          ifStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elseStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IfStatement\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            ifStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elseStatement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'An else statement\\'s contents should be wrapped in a block body.'")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BinaryExpression"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" op "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BinaryExpression"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("operatorToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EqualsEqualsToken "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" op "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SyntaxKind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExclamationEqualsToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Use \\'===\\' and \\'!==\\'.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEachChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delintNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" character "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sourceFile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLineAndCharacterOfPosition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("sourceFile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fileName"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(" (")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("line "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("character "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("): ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fileNames "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfileNames"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parse a file")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sourceFile "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSourceFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    fileName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ScriptTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ES2015")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*setParentNodes */")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// delint it")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("delint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sourceFile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);