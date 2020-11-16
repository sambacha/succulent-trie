(window.webpackJsonp = window.webpackJsonp || []).push([
	[10],
	{
		193: function (e, t, a) {
			"use strict";
			a.r(t);
			var r = a(0),
				s = Object(r.a)(
					{},
					function () {
						var e = this,
							t = e.$createElement,
							a = e._self._c || t;
						return a("ContentSlotsDistributor", { attrs: { "slot-key": e.$parent.slotKey } }, [
							a("h1", { attrs: { id: "overview" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#overview", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Overview"),
							]),
							e._v(" "),
							a("p", [
								a(
									"a",
									{
										attrs: {
											href: "https://coveralls.io/github/chasesmith95/ztrie?branch=master",
											target: "_blank",
											rel: "noopener noreferrer",
										},
									},
									[
										a("img", {
											attrs: {
												src:
													"https://coveralls.io/repos/github/chasesmith95/ztrie/badge.svg?branch=master",
												alt: "Coverage Status",
											},
										}),
										a("OutboundLink"),
									],
									1
								),
								e._v(" "),
								a(
									"a",
									{
										attrs: {
											href: "https://circleci.com/gh/chasesmith95/ztrie",
											target: "_blank",
											rel: "noopener noreferrer",
										},
									},
									[
										a("img", {
											attrs: {
												src: "https://circleci.com/gh/chasesmith95/ztrie.svg?style=svg",
												alt: "CircleCI",
											},
										}),
										a("OutboundLink"),
									],
									1
								),
							]),
							e._v(" "),
							a("p", [
								a("strong", [
									e._v(
										"The mission of this project is to provide an authenticated database that can service multiple blockchain needs, and will be included with a way to implement in different data structures."
									),
								]),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Blockchains utilize authenticated data structures, like the Patricia Merkle Trie, extensively to preserve immutability of their individual chains. These data structures can differ from chain to chain, but share a common optimization problems, and are built as bolt-on versions of NoSQL databases like levelDB. By building on top of current databases, these authenticated data structures are unable to take full advantage of the system and suffer from performance issues (slow reads and writes)."
								),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"This system has previously been implemented with binary Tries in the Urkel database, which resulted in up to 100x performance increases over the current system in terms of reads, writes, and storage footprint."
								),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"We intend to expand on the same line as the Urkel database and create a generalized implementation of Sparse Merkle Tree that can be used to implement Tries, Red-black, BSTs, and many other tree-based structures."
								),
							]),
							e._v(" "),
							a("p", [e._v("Checkout the project!")]),
						]);
					},
					[],
					!1,
					null,
					null,
					null
				);
			t.default = s.exports;
		},
	},
]);
