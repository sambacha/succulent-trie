(window.webpackJsonp = window.webpackJsonp || []).push([
	[11],
	{
		194: function (t, a, s) {
			"use strict";
			s.r(a);
			var n = s(0),
				e = Object(n.a)(
					{},
					function () {
						var t = this,
							a = t.$createElement,
							s = t._self._c || a;
						return s(
							"ContentSlotsDistributor",
							{ attrs: { "slot-key": t.$parent.slotKey } },
							[
								s("h1", { attrs: { id: "tutorial" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#tutorial", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Tutorial"),
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
								s("h2", { attrs: { id: "step-0-set-up" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-0-set-up", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 0 Set-up"),
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
														t._v(" proxima "),
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
															t._v("const"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("{"),
														]),
														t._v("BLAKE2b"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" randomBytes"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("}"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" bcrypto"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(";"),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("const"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("{"),
														]),
														t._v("Tree"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" Proof"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("}"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" proxima"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(";"),
														]),
														t._v("\n\n"),
													]),
												]),
											]),
										]),
									],
									1
								),
								t._v(" "),
								s("h2", { attrs: { id: "step-1-creating-a-database" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-1-creating-a-database", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 1: Creating a database"),
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
														t._v(" tree "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("new"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token class-name" } }, [
															t._v("Tree"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("BLAKE2b"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token number" } }, [
															t._v("256"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'/path/to/my/db'"),
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
								s("h2", { attrs: { id: "step-2-opening-the-database" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-2-opening-the-database", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 2: Opening the database"),
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
														t._v(" tree"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("open"),
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
								s("h2", { attrs: { id: "step-3-checking-out" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-3-checking-out", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 3: Checking out"),
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
														t._v(" txn "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" tree"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("transaction"),
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
								s("h2", { attrs: { id: "step-4-adding-values" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-4-adding-values", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 4: Adding values"),
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
														t._v(" txn"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("insert"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("k"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" v"),
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
								s("h2", { attrs: { id: "step-5-committing" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-5-committing", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 5: Committing"),
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
														t._v(" root "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("await"),
														]),
														t._v(" txn"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("commit"),
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
								s("h2", { attrs: { id: "step-6-getting-snapshot" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-6-getting-snapshot", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 6: Getting snapshot"),
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
														t._v(" root "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("await"),
														]),
														t._v(" txn"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("commit"),
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
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("const"),
														]),
														t._v(" snapshot "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" tree"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("snapshot"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("root"),
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
								s("h2", { attrs: { id: "step-7-getting-values" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-7-getting-values", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 7: Getting values"),
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
														t._v(" value "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("await"),
														]),
														t._v(" snapshot"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("get"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("key"),
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
								s("h3", { attrs: { id: "step-8-proof-of-value" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-8-proof-of-value", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 8: Proof of value"),
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
														t._v(" proof "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("await"),
														]),
														t._v(" snapshot"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("prove"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("key"),
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
								s("h3", { attrs: { id: "step-9-verification" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-9-verification", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 9: Verification"),
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
														t._v(" proof"),
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
								s("h2", { attrs: { id: "step-10-closing-the-database" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#step-10-closing-the-database", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Step 10: Closing the database"),
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
														t._v(" tree"),
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
			a.default = e.exports;
		},
	},
]);
