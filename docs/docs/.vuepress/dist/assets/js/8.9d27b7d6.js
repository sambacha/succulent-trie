(window.webpackJsonp = window.webpackJsonp || []).push([
	[8],
	{
		189: function (t, a, s) {
			"use strict";
			s.r(a);
			var n = s(0),
				r = Object(n.a)(
					{},
					function () {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s(
							"ContentSlotsDistributor",
							{ attrs: { "slot-key": t.$parent.slotKey } },
							[
								s("h1", { attrs: { id: "getting-started" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#getting-started", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Getting Started"),
								]),
								t._v(" "),
								s("div", { staticClass: "warning custom-block" }, [
									s("h3", { attrs: { id: "currently-under-development" } }, [
										s(
											"a",
											{
												staticClass: "header-anchor",
												attrs: { href: "#currently-under-development", "aria-hidden": "true" },
											},
											[t._v("#")]
										),
										t._v(" "),
										s("em", [t._v("Currently under development")]),
									]),
								]),
								t._v(" "),
								s("h2", { attrs: { id: "installation" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#installation", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Installation"),
								]),
								t._v(" "),
								s(
									"tabs",
									[
										s("tab", { attrs: { name: "javascript" } }, [
											s("div", { staticClass: "language-javascript extra-class" }, [
												s("pre", { pre: !0, attrs: { class: "language-javascript" } }, [
													s("code", [
														t._v("npm install proxima"),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("-"),
														]),
														t._v("db\n"),
													]),
												]),
											]),
										]),
									],
									1
								),
								t._v(" "),
								s("h2", { attrs: { id: "set-up" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#set-up", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Set-up"),
								]),
								t._v(" "),
								s(
									"tabs",
									[
										s("tab", { attrs: { name: "javascript" } }, [
											s("div", { staticClass: "language-javascript extra-class" }, [
												s("pre", { pre: !0, attrs: { class: "language-javascript" } }, [
													s("code", [
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("const"),
														]),
														t._v(" bcrypto "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("require"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'bcrypto'"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(")"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(";"),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("const"),
														]),
														t._v(" Proxima "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("require"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'proxima-db'"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(")"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(";"),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("var"),
														]),
														t._v(" proxima "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("new"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token class-name" } }, [
															t._v("Proxima"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(")"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(";"),
														]),
														t._v("\n"),
													]),
												]),
											]),
										]),
									],
									1
								),
								t._v(" "),
								s("h2", { attrs: { id: "creating-a-database" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#creating-a-database", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Creating a database"),
								]),
								t._v(" "),
								s("p", [t._v("Creating a table for transactions")]),
								t._v(" "),
								s(
									"tabs",
									[
										s("tab", { attrs: { name: "javascript" } }, [
											s("div", { staticClass: "language-javascript extra-class" }, [
												s("pre", { pre: !0, attrs: { class: "language-javascript" } }, [
													s("code", [
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("let"),
														]),
														t._v(" table "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v('"transactions"'),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("let"),
														]),
														t._v(" schema "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("{"),
														]),
														t._v("\n  id"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'string'"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v("\n  "),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("from"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'string'"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v("\n  to"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'string'"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v("\n  amount"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'uint'"),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("}"),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("var"),
														]),
														t._v(" transactions "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" proxima"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("create"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("table"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" schema"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(")"),
														]),
														t._v("\n"),
													]),
												]),
											]),
										]),
									],
									1
								),
								t._v(" "),
								s("h2", { attrs: { id: "opening-the-database" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#opening-the-database", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Opening the database"),
								]),
								t._v(" "),
								s(
									"tabs",
									[
										s("tab", { attrs: { name: "javascript" } }, [
											s("div", { staticClass: "language-javascript extra-class" }, [
												s("pre", { pre: !0, attrs: { class: "language-javascript" } }, [
													s("code", [
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("await"),
														]),
														t._v(" proxima"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("load"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("table"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(")"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(";"),
														]),
														t._v("\n"),
													]),
												]),
											]),
										]),
									],
									1
								),
								t._v(" "),
								s("h2", { attrs: { id: "adding-values" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#adding-values", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Adding values"),
								]),
								t._v(" "),
								s("p", [t._v("Put key and value into db")]),
								t._v(" "),
								s(
									"tabs",
									[
										s("tab", { attrs: { name: "javascript" } }, [
											s("div", { staticClass: "language-javascript extra-class" }, [
												s("pre", { pre: !0, attrs: { class: "language-javascript" } }, [
													s("code", [
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("let"),
														]),
														t._v(" key "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'id'"),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("let"),
														]),
														t._v(" transaction "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("{"),
														]),
														t._v("\n  id"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" key"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v("\n  "),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("from"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'address1'"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v("\n  to"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'address2'"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v("\n  amount"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token number" } }, [
															t._v("20000"),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("}"),
														]),
														t._v("\nproxima"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("put"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("transactions"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" key"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" value"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(")"),
														]),
														t._v("\n"),
													]),
												]),
											]),
										]),
									],
									1
								),
								t._v(" "),
								s("h2", { attrs: { id: "getting-value" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#getting-value", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Getting value"),
								]),
								t._v(" "),
								s("p", [t._v("Get item from the table")]),
								t._v(" "),
								s(
									"tabs",
									[
										s("tab", { attrs: { name: "javascript" } }, [
											s("div", { staticClass: "language-javascript extra-class" }, [
												s("pre", { pre: !0, attrs: { class: "language-javascript" } }, [
													s("code", [
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("const"),
														]),
														t._v(" proof"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" value "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" proxima"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("get"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("transactions"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" key"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(")"),
														]),
														t._v("\n"),
													]),
												]),
											]),
										]),
									],
									1
								),
								t._v(" "),
								s("h3", { attrs: { id: "verification" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#verification", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Verification"),
								]),
								t._v(" "),
								s(
									"tabs",
									[
										s("tab", { attrs: { name: "javascript" } }, [
											s("div", { staticClass: "language-javascript extra-class" }, [
												s("pre", { pre: !0, attrs: { class: "language-javascript" } }, [
													s("code", [
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("const"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("["),
														]),
														t._v("code"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" value"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("]"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" proxima"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("verify"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("root"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" key"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" BLAKE2b"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token number" } }, [
															t._v("256"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(")"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(";"),
														]),
														t._v("\n"),
													]),
												]),
											]),
										]),
									],
									1
								),
								t._v(" "),
								s("h2", { attrs: { id: "closing-the-database" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#closing-the-database", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Closing the database"),
								]),
								t._v(" "),
								s(
									"tabs",
									[
										s("tab", { attrs: { name: "javascript" } }, [
											s("div", { staticClass: "language-javascript extra-class" }, [
												s("pre", { pre: !0, attrs: { class: "language-javascript" } }, [
													s("code", [
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("await"),
														]),
														t._v(" proxima"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("close"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(")"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(";"),
														]),
														t._v("\n"),
													]),
												]),
											]),
										]),
									],
									1
								),
							],
							1
						);
					},
					[],
					!1,
					null,
					null,
					null
				);
			a.default = r.exports;
		},
	},
]);
