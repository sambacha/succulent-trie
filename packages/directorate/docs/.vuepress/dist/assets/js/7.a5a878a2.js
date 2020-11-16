(window.webpackJsonp = window.webpackJsonp || []).push([
	[7],
	{
		188: function (e, t, a) {
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
							a("h1", { attrs: { id: "frequently-asked-questions" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#frequently-asked-questions", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Frequently Asked Questions"),
							]),
							e._v(" "),
							a(
								"h2",
								{
									attrs: {
										id:
											"what-is-the-genesis-of-proxima-how-did-it-occur-to-you-to-use-ztrie-tree-to-create-an-efficient-data-layer-for-the-blockchain",
									},
								},
								[
									a(
										"a",
										{
											staticClass: "header-anchor",
											attrs: {
												href:
													"#what-is-the-genesis-of-proxima-how-did-it-occur-to-you-to-use-ztrie-tree-to-create-an-efficient-data-layer-for-the-blockchain",
												"aria-hidden": "true",
											},
										},
										[e._v("#")]
									),
									e._v(
										" What is the genesis of Proxima?  How did it occur to you to use Urkel tree to create an efficient data layer for the blockchain?"
									),
								]
							),
							e._v(" "),
							a("p", [
								e._v(
									"Proxima was conceived because of issues with data availability, security, and developer integration for blockchains. None of the toolsets at present, are able to provide a traditional development experience without compromising on security or performance."
								),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Urkel was chosen over other data structures/libraries (like Patricia Merkle Trie)  because it was built as a database, not on top of another database. This makes it more performant than other blockchain systems."
								),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"We are currently in the process of moving the Urkel DB to a more generalized scope so that it can be implemented with arbitrary key lengths, greater flexibility with data structures, and standardized error codes."
								),
							]),
							e._v(" "),
							a(
								"h2",
								{ attrs: { id: "can-you-tell-us-what-ztrie-tree-is-and-how-it-is-used-in-handshake" } },
								[
									a(
										"a",
										{
											staticClass: "header-anchor",
											attrs: {
												href:
													"#can-you-tell-us-what-ztrie-tree-is-and-how-it-is-used-in-handshake",
												"aria-hidden": "true",
											},
										},
										[e._v("#")]
									),
									e._v(" Can you tell us what Urkel tree is and how it is used in Handshake?"),
								]
							),
							e._v(" "),
							a("p", [
								e._v(
									"The Urkel tree is a flat-file Merkle Tree, it looks similar in nature to Sorted String Tables, except instead of having the classic B+ tree as an indexing mechanism, it has a Merkle Trie. It was developed to provide shorter proofs and higher throughput for reads/writes than the traditional implementations."
								),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Handshake protocol uses the Urkel database as an authenticated structure to store their certificates and domain data for their naming service. This functionality is similar to the Google Certificate Transparency database Trillian (https://github.com/google/trillian)."
								),
							]),
							e._v(" "),
							a(
								"h2",
								{
									attrs: {
										id: "how-does-proxima-deal-with-different-types-of-data-in-the-smart-contract",
									},
								},
								[
									a(
										"a",
										{
											staticClass: "header-anchor",
											attrs: {
												href:
													"#how-does-proxima-deal-with-different-types-of-data-in-the-smart-contract",
												"aria-hidden": "true",
											},
										},
										[e._v("#")]
									),
									e._v(" How does Proxima deal with different types of data in the smart contract?"),
								]
							),
							e._v(" "),
							a("p", [
								e._v(
									"Proxima handles different data types by including its own set of schema and data type support. Values placed into the ProximaDB are cast to bytes but retrieved as JSON. This can be further augmented with blockchain-specific deserialization/serialization of data."
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "would-proxima-work-with-dags" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#would-proxima-work-with-dags", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Would Proxima work with DAGs?"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Since Proxima relies on auditing the blockchains themselves, the risk factors for this type of integration would be the consensus of the DAG itself. If transactions can be cryptographically tied to the DAG, then Proxima can use this relation when it audits the data.  For standard blockchains, this is easy because each transaction is a part of the Merkle Hash of a single block that is mined through signatures or PoW."
								),
							]),
							e._v(" "),
							a("h2", { attrs: { id: "why-use-a-trie" } }, [
								a(
									"a",
									{
										staticClass: "header-anchor",
										attrs: { href: "#why-use-a-trie", "aria-hidden": "true" },
									},
									[e._v("#")]
								),
								e._v(" Why use a trie?"),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"Tries are used because they represent a data structure that is sorted and deterministic. This means that synchorinzations can occur in a distirbuted fashion (order of updates will not matter), and range queries can be done."
								),
							]),
							e._v(" "),
							a(
								"h2",
								{
									attrs: {
										id:
											"how-are-range-queries-filters-and-other-database-operations-proven-through-the-proximadb",
									},
								},
								[
									a(
										"a",
										{
											staticClass: "header-anchor",
											attrs: {
												href:
													"#how-are-range-queries-filters-and-other-database-operations-proven-through-the-proximadb",
												"aria-hidden": "true",
											},
										},
										[e._v("#")]
									),
									e._v(
										" How are range queries, filters, and other database operations proven through the ProximaDB?"
									),
								]
							),
							e._v(" "),
							a("p", [
								e._v(
									"At this point, the ProximaDB supplies a Proof-of-soundness for all queries (Range queries, filters, etc). This proof ensures that all data given is in the database. Further additions to the protocol involve including Proofs-of-Completeness, where it can be proven that the data given in a query is all of the data that matches a filter or range."
								),
							]),
							e._v(" "),
							a("p", [e._v("This problem incorporates two subsets:")]),
							e._v(" "),
							a("ul", [
								a("li", [
									a("p", [
										a("strong", [e._v("Range Queries")]),
										e._v(
											"\nRanges can be proven to be complete by looking at the ends of a sorted Merkle Trie, and building a partial Merkle Trie from it. This shows that there is no element outside of the desired range, and allows the querier to prove that every element within the query can build the partial tree. This topic has been breached in the Google "
										),
										a(
											"a",
											{
												attrs: {
													href: "https://github.com/google/trillian",
													target: "_blank",
													rel: "noopener noreferrer",
												},
											},
											[e._v("Sparse Merkle Trie"), a("OutboundLink")],
											1
										),
										e._v(", and "),
										a(
											"a",
											{
												attrs: {
													href:
														"https://gist.github.com/chris-belcher/eb9abe417d74a7b5f20aabe6bff10de0",
													target: "_blank",
													rel: "noopener noreferrer",
												},
											},
											[e._v("github discussions"), a("OutboundLink")],
											1
										),
										e._v(
											". In this case, we use a Merkle trie (a deterministically sorted tree) to ensure sorting, and we submit range queries to the keys."
										),
									]),
								]),
								e._v(" "),
								a("li", [
									a("p", [
										a("strong", [e._v("Filter Queries")]),
										e._v(
											"\nFilters where multiple requirements can be met, can be done by indexing an entity according to multiple constraints, submitting range queries to these different indexes and then doing a union or intersection based on the results of these queries."
										),
									]),
								]),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"One difficulty of this approach is the difficulty of combining multiple range queries at the same time. There have been several approaches that utilize accumulators and aggregate functions to provide "
								),
								a(
									"a",
									{
										attrs: {
											href:
												"https://www.cs.purdue.edu/homes/ninghui/papers/accumulator_acns07.pdf",
											target: "_blank",
											rel: "noopener noreferrer",
										},
									},
									[e._v("efficient nonmembership proofs"), a("OutboundLink")],
									1
								),
								e._v(
									". The naive approach would be to include every element in the ranges with their proofs for membership/nonmembership. The proof would include the subset of all the entities that matched the requirements, and a set of those that do not. Proofs could be derived by checking membership/nonmembership for all filters."
								),
							]),
							e._v(" "),
							a("p", [
								e._v(
									"A potential alternative would be to encrypt the data via a homomorphic encryption of the "
								),
								a(
									"a",
									{
										attrs: {
											href: "https://www.math.u-bordeaux.fr/~gcastagn/publi/isit_homo.pdf",
											target: "_blank",
											rel: "noopener noreferrer",
										},
									},
									[e._v("entire entity schema"), a("OutboundLink")],
									1
								),
								e._v(
									", and to perform the boolean operations on the encrypted schema and filter. In cases where privacy is necessary, this is a powerful alternative."
								),
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
