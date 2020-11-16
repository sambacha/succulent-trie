(window.webpackJsonp = window.webpackJsonp || []).push([
	[6],
	{
		190: function (e, t, a) {
			"use strict";
			a.r(t);
			var r = a(0),
				i = Object(r.a)(
					{},
					function () {
						var e = this,
							t = e.$createElement,
							a = e._self._c || t;
						return a("ContentSlotsDistributor", { attrs: { "slot-key": e.$parent.slotKey } }, [
							a("h1", { attrs: { id: "how-it-works" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#how-it-works", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" How it works"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"A generalized Sparse Merkle tree as the indexing structure for an append-only sorted string table"
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "overview" } }, [
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
								e._v(
									"The mission of this project is to provide an authenticated database that can service multiple blockchain needs, and will be included with a way to implement in different data structures."
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "requirements" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#requirements", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Requirements"),
							]),
							e._v(" "),
							a("ul", [
								a("li", [e._v("Arbitrary length keys/values")]),
								e._v(" "),
								a("li", [e._v("Range queries")]),
								e._v(" "),
								a("li", [e._v("Merkle Proofs")]),
								e._v(" "),
								a("li", [e._v("Go bindings")]),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "motivation" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#motivation", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Motivation"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Blockchains utilize authenticated data structures, like the Patricia Merkle Trie, extensively to preserve immutability of their individual chains. These data structures can differ from chain to chain, but share a common optimization problems, and are built as bolt-on versions of NoSQL databases like levelDB."
								),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"By building on top of current databases, these authenticated data structures are unable to take full advantage of the system and suffer from performance issues (slow reads and writes)."
								),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"This system has previously been implemented with binary Tries in the Urkel database, which resulted in up to 100x performance increases over the current system in terms of reads, writes, and storage footprint. Unfortunately,  it is not generalized and easily applicable to other blockchains."
								),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"We intend to expand on the same line as the Urkel database and create a generalized implementation of Sparse Merkle Tree that can be used to implement Tries, Red-black, BSTs, and many other tree-based structures."
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "our-approach" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#our-approach", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Our Approach"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The entire process will incorporate two components, the technology research, and the product. These can occur simultaneously as they are non-blocking. The motivation for the research will be to provide the backing for the optimizations used in the product itself -- e.g. compaction, data structure, partitioning, and more efficient commits. The development will be centered around implementing a generalized Merkle tree that can be used by multiple blockchains.\nGeneralized Sparse Merkle Tree\nThe Generalized Merkle Tree is used in many different blockchains and authenticated databases, as a form of history and storage of immutable state."
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "nodes" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#nodes", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Nodes"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The nodes of the Merkle Tree will contain several values, they will be treated similarly to the traditional nodes with the ability for multiple children, and the recognition of heights."
								),
							]),
							e._v(" "),
							a("div", { staticClass: "language- extra-class" }, [
								a("pre", { pre: !0, attrs: { class: "language-text" } }, [
									a("code", [e._v("Nodes {\n  Merkle Hash\n  Height\n  Children\n  Extra\n}\n")]),
								]),
							]),
							a("h3", { attrs: { id: "children" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#children", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Children"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Enables a reduction in the total number of hops that must be made. And spreads a tree out. Furthermore, this is necessary for implementations like the Ethereum trie which require 16 branches."
								),
							]),
							e._v(" "),
							a("h3", { attrs: { id: "height" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#height", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Height"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Allows for arbitrary heights, which is crucial to expand the trie, and improves the efficiency of the lookup from cache (allows for Sparse Merkle Trees)."
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "extra" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#extra", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Extra"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The extra variable enables trees with rebalancing aspects, such as Red-black or AVL trees. The benefit of this is that the trees can have “colors” or numbers that can be used with invariants when rebalancing."
								),
							]),
							e._v(" "),
							a("h3", { attrs: { id: "proofs" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#proofs", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Proofs"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Without loss of generality, the proofs for the Sparse Merkle Tree can be utilized for arbitrary numbers of children. The proofs will flow in the same manner, where the children of the root are used to verify that the hash is correct. Further information on the proofs can be found in the Sparse Merkle Tree paper."
								),
							]),
							e._v(" "),
							a("h3", { attrs: { id: "verification" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#verification", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Verification"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Without loss of generality, the proofs for the Sparse Merkle Tree can be utilized for arbitrary numbers of children. Verification can be done using the same technique."
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "store" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#store", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Store"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The store is based on the traditional data store, seen in LevelDB, and implemented in the authenticated data structure, like Urkel. For this implementation, the only thing that will change will be the way in which records are indexed. A second offset will be added to accommodate arbitrary size keys and values. The image below shows a basic view of what current index/offset systems look like."
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "index" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#index", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Index"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The index for each data block will change to reflect arbitrary length keys this will include the addition of a header that keeps track of the positions of the key, the value, and the position."
								),
							]),
							e._v(" "),
							a("p", [a("code", [e._v("file_index || offset_key || offset || position")])]),
							e._v(" "),
							a("p", [
								e._v(
									"It should be noted that the record does not change with the header, on the manner in which the index is read."
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "roadmap" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#roadmap", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Roadmap"),
							]),
							e._v(" "),
							a("h3", { attrs: { id: "part-1" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#part-1", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Part 1"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The theme of part one is to have the product. The first part of this plan will be to create the unit tests and the integration tests for needed features. This will also incorporate the necessary go bindings to utilize the database."
								),
							]),
							e._v(" "),
							a("ul", [
								a("li", [e._v("Arbitrary Length keys")]),
								e._v(" "),
								a("li", [e._v("Arbitrary Length values")]),
								e._v(" "),
								a("li", [e._v("Range queries")]),
								e._v(" "),
								a("li", [e._v("Merkle Proof Semantics")]),
								e._v(" "),
								a("li", [e._v("Go Bindings")]),
								e._v(" "),
								a("li", [e._v("Unit tests")]),
							]),
							e._v(" "),
							a("h3", { attrs: { id: "part-2" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#part-2", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Part 2"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The second part of the plan will be to get developer feedback and determine the feature roadmap."
								),
							]),
							e._v(" "),
							a("ul", [
								a("li", [e._v("Schema validation")]),
								e._v(" "),
								a("li", [e._v("Arbitrary length values")]),
								e._v(" "),
								a("li", [e._v("Implementation of IAVL, Trie")]),
								e._v(" "),
								a("li", [e._v("Client/Developer input features ( Developer input will occur )")]),
							]),
							e._v(" "),
							a("h3", { attrs: { id: "part-3" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#part-3", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Part 3"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The third part of the product will take the optimizations found in the research, and schema created from the clients and integrate them in order to benefit."
								),
							]),
							e._v(" "),
							a("ul", [
								a("li", [e._v("Bitmapping")]),
								e._v(" "),
								a("li", [e._v("Write back cache automatic flushing")]),
								e._v(" "),
								a("li", [e._v("Compaction efficient")]),
								e._v(" "),
								a("li", [e._v("Research")]),
							]),
							e._v(" "),
							a("h3", { attrs: { id: "part-4" } }, [
								a(
									"a",
									{ staticClass: "header-anchor", attrs: { href: "#part-4", "aria-hidden": "true" } },
									[e._v("#")]
								),
								e._v(" Part 4"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The fourth part will be centered around taking the optimized version of this database and pushing it to optimized languages."
								),
							]),
							e._v(" "),
							a("ul", [
								a("li", [e._v("Rust (WASM)")]),
								e._v(" "),
								a("li", [e._v("Packaging for other systems/languages (clean-up)")]),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "further-research" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#further-research", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Further research"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"The motivation for further research is to provide faster queries, fast updates, simple partitioning, and simpler storage proofs for the data structure as a whole. With this in mind, the initial topics of research will be pushed towards these areas:"
								),
							]),
							e._v(" "),
							a("ul", [
								a("li", [e._v("Fast sync of data")]),
								e._v(" "),
								a("li", [e._v("Efficient compaction and storage")]),
								e._v(" "),
								a("li", [
									e._v(
										"Rebalancing\nParallelization\nPruning\nPartitioning and sharding of data\nEfficient range, filtering proofs"
									),
								]),
							]),
						]);
					},
					[],
					!1,
					null,
					null,
					null
				);
			t.default = i.exports;
		},
	},
]);
