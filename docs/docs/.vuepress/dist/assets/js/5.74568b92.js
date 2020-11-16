(window.webpackJsonp = window.webpackJsonp || []).push([
	[5],
	{
		188: function (t, a, s) {
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
								s("h1", { attrs: { id: "documentation" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#documentation", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Documentation"),
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
								s("h2", { attrs: { id: "basic-operations" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#basic-operations", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Basic Operations"),
								]),
								t._v(" "),
								s("h4", { attrs: { id: "create" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#create", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Create"),
								]),
								t._v(" "),
								s("table", [
									s("thead", [
										s("tr", [
											s("th", [t._v("name")]),
											t._v(" "),
											s("th", [t._v("type")]),
											t._v(" "),
											s("th", [t._v("description")]),
										]),
									]),
									t._v(" "),
									s("tbody", [
										s("tr", [
											s("td", [t._v("table")]),
											t._v(" "),
											s("td", [t._v("string")]),
											t._v(" "),
											s("td", [t._v("name of the table")]),
										]),
										t._v(" "),
										s("tr", [
											s("td", [t._v("schema")]),
											t._v(" "),
											s("td", [t._v("JSON")]),
											t._v(" "),
											s("td", [t._v("schema for the table")]),
										]),
									]),
								]),
								t._v(" "),
								s("p", [
									t._v(
										"This creates a table with name, tableName, and returns a confirmation boolean if correct."
									),
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
														t._v("\n  balance"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'uint'"),
														]),
														t._v("\n  account"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v("'string'"),
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
								s("table", [
									s("thead", [
										s("tr", [
											s("th", [t._v("name")]),
											t._v(" "),
											s("th", [t._v("type")]),
											t._v(" "),
											s("th", [t._v("description")]),
										]),
									]),
									t._v(" "),
									s("tbody", [
										s("tr", [
											s("td", [t._v("table")]),
											t._v(" "),
											s("td", [t._v("string")]),
											t._v(" "),
											s("td", [t._v("name of the table")]),
										]),
									]),
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
								s("h4", { attrs: { id: "put" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#put", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Put"),
								]),
								t._v(" "),
								s("table", [
									s("thead", [
										s("tr", [
											s("th", [t._v("name")]),
											t._v(" "),
											s("th", [t._v("type")]),
											t._v(" "),
											s("th", [t._v("description")]),
										]),
									]),
									t._v(" "),
									s("tbody", [
										s("tr", [
											s("td", [t._v("tableName")]),
											t._v(" "),
											s("td", [t._v("string")]),
											t._v(" "),
											s("td", [t._v("name of the table")]),
										]),
										t._v(" "),
										s("tr", [
											s("td", [t._v("key")]),
											t._v(" "),
											s("td", [t._v("byte array")]),
											t._v(" "),
											s("td", [t._v("key for the value")]),
										]),
										t._v(" "),
										s("tr", [
											s("td", [t._v("value")]),
											t._v(" "),
											s("td", [t._v("bytes array")]),
											t._v(" "),
											s("td", [t._v("value being placed in the table")]),
										]),
									]),
								]),
								t._v(" "),
								s("p", [t._v("This operation does a put, and returns a proof.")]),
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
															t._v("'.....'"),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token keyword" } }, [
															t._v("let"),
														]),
														t._v(" value "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("{"),
														]),
														t._v("\n  account"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" key"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v("\n  value"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token number" } }, [
															t._v("1000"),
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
								s("h4", { attrs: { id: "get" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#get", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Get"),
								]),
								t._v(" "),
								s("table", [
									s("thead", [
										s("tr", [
											s("th", [t._v("name")]),
											t._v(" "),
											s("th", [t._v("type")]),
											t._v(" "),
											s("th", [t._v("description")]),
										]),
									]),
									t._v(" "),
									s("tbody", [
										s("tr", [
											s("td", [t._v("table")]),
											t._v(" "),
											s("td", [t._v("string")]),
											t._v(" "),
											s("td", [t._v("name of the table")]),
										]),
										t._v(" "),
										s("tr", [
											s("td", [t._v("key")]),
											t._v(" "),
											s("td", [t._v("byte array")]),
											t._v(" "),
											s("td", [t._v("key for the value")]),
										]),
									]),
								]),
								t._v(" "),
								s("p", [t._v("Gets a value corresponding to the key, within the tableName.")]),
								t._v(" "),
								s(
									"tabs",
									[
										s("tab", { attrs: { name: "javascript" } }, [
											s("div", { staticClass: "language-javascript extra-class" }, [
												s("pre", { pre: !0, attrs: { class: "language-javascript" } }, [
													s("code", [
														t._v("proxima"),
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
								s("h4", { attrs: { id: "remove" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#remove", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Remove"),
								]),
								t._v(" "),
								s("table", [
									s("thead", [
										s("tr", [
											s("th", [t._v("name")]),
											t._v(" "),
											s("th", [t._v("type")]),
											t._v(" "),
											s("th", [t._v("description")]),
										]),
									]),
									t._v(" "),
									s("tbody", [
										s("tr", [
											s("td", [t._v("tableName")]),
											t._v(" "),
											s("td", [t._v("string")]),
											t._v(" "),
											s("td", [t._v("name of the table")]),
										]),
										t._v(" "),
										s("tr", [
											s("td", [t._v("key")]),
											t._v(" "),
											s("td", [t._v("byte array")]),
											t._v(" "),
											s("td", [t._v("key for the value")]),
										]),
									]),
								]),
								t._v(" "),
								s("p", [t._v("Deletes the value associated with the key at the designated table.")]),
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
								s("h3", { attrs: { id: "verification-2" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#verification-2", "aria-hidden": "true" },
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
								s("h2", { attrs: { id: "filters-aggregates-maps-and-groups" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: {
												href: "#filters-aggregates-maps-and-groups",
												"aria-hidden": "true",
											},
										},
										[t._v("#")]
									),
									t._v(" Filters, Aggregates, Maps, and Groups"),
								]),
								t._v(" "),
								s("h3", { attrs: { id: "filter" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#filter", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Filter"),
								]),
								t._v(" "),
								s("p", [t._v("Each filter can be shown as a combination of three variables.")]),
								t._v(" "),
								s("table", [
									s("thead", [
										s("tr", [
											s("th", [t._v("name")]),
											t._v(" "),
											s("th", [t._v("type")]),
											t._v(" "),
											s("th", [t._v("description")]),
										]),
									]),
									t._v(" "),
									s("tbody", [
										s("tr", [
											s("td", [t._v("name")]),
											t._v(" "),
											s("td", [t._v("string")]),
											t._v(" "),
											s("td", [t._v("name of the table")]),
										]),
										t._v(" "),
										s("tr", [
											s("td", [t._v("expression")]),
											t._v(" "),
											s("td", [t._v("string")]),
											t._v(" "),
											s("td", [t._v("key for the predicate type")]),
										]),
										t._v(" "),
										s("tr", [
											s("td", [t._v("value")]),
											t._v(" "),
											s("td", [t._v("integer, string, value type")]),
											t._v(" "),
											s("td", [t._v("key for the value")]),
										]),
									]),
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
															t._v("let"),
														]),
														t._v(" filter "),
														s("span", { pre: !0, attrs: { class: "token operator" } }, [
															t._v("="),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("["),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("{"),
														]),
														t._v("\n name"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v('"name"'),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" expression"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v('"="'),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" value"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(":"),
														]),
														t._v(" "),
														s("span", { pre: !0, attrs: { class: "token string" } }, [
															t._v('"hello"'),
														]),
														t._v("\n"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("}"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("]"),
														]),
														t._v("\nproxima"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("."),
														]),
														s("span", { pre: !0, attrs: { class: "token function" } }, [
															t._v("filter"),
														]),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v("("),
														]),
														t._v("transactions"),
														s("span", { pre: !0, attrs: { class: "token punctuation" } }, [
															t._v(","),
														]),
														t._v(" filter"),
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
								s("h2", { attrs: { id: "batching-operations" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#batching-operations", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Batching Operations"),
								]),
								t._v(" "),
								s("h3", { attrs: { id: "checking-out" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#checking-out", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Checking out"),
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
								s("h3", { attrs: { id: "adding-values" } }, [
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
								s("h2", { attrs: { id: "adding-values-2" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#adding-values-2", "aria-hidden": "true" },
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
								s("h3", { attrs: { id: "committing" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#committing", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Committing"),
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
								s("h3", { attrs: { id: "getting-snapshot" } }, [
									s(
										"a",
										{
											staticClass: "header-anchor",
											attrs: { href: "#getting-snapshot", "aria-hidden": "true" },
										},
										[t._v("#")]
									),
									t._v(" Getting snapshot"),
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
