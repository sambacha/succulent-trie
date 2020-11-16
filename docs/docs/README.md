# Overview

[![Coverage Status](https://coveralls.io/repos/github/chasesmith95/ztrie/badge.svg?branch=master)](https://coveralls.io/github/chasesmith95/ztrie?branch=master)
[![CircleCI](https://circleci.com/gh/chasesmith95/ztrie.svg?style=svg)](https://circleci.com/gh/chasesmith95/ztrie)

**The mission of this project is to provide an authenticated database that can service multiple blockchain needs, and will be included with a way to implement in different data structures.**

Blockchains utilize authenticated data structures, like the Patricia Merkle Trie, extensively to preserve immutability of their individual chains. These data structures can differ from chain to chain, but share a common optimization problems, and are built as bolt-on versions of NoSQL databases like levelDB. By building on top of current databases, these authenticated data structures are unable to take full advantage of the system and suffer from performance issues (slow reads and writes).

This system has previously been implemented with binary Tries in the Urkel database, which resulted in up to 100x performance increases over the current system in terms of reads, writes, and storage footprint.

We intend to expand on the same line as the Urkel database and create a generalized implementation of Sparse Merkle Tree that can be used to implement Tries, Red-black, BSTs, and many other tree-based structures.

Checkout the project!
