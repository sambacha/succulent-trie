# succinct trie data 

> succinct trie

 Given the dependency tree:
 
 ```
 A - B - C - D -\
  \   \   \      \
   \   \   \      \
    \   \ - E ---- F
     \- G
 ```
 
 Nodes which have multiple references are duplicated:
 
 ```
 A - B - C - D - F
  \   \   \
   \   \   \- E - F
    \   \
     \   \- E - F
      \
       \- G
 ```
 
 Each leaf node is now replaced by a counter defaulted to 1:
 
 ```
 A - B - C - D - (F:1)
  \   \   \
   \   \   \- E - (F:1)
    \   \
     \   \- E - (F:1)
      \
       \- (G:1)
 ```
 
 Then each leaf counter is merged with its parent node, replacing the
 parent node with a counter of 1, and each existing counter being
 incremented by 1. That is to say `- D - (F:1)` becomes `- (D:1, F:2)`:
 
 ```
 A - B - C - (D:1, F:2)
  \   \   \
   \   \   \- (E:1, F:2)
    \   \
     \   \- (E:1, F:2)
      \
       \- (G:1)
 ```
 
 Then each leaf counter is merged with its parent node again, merging
 any counters, then incrementing each:
 
 ```
 A - B - (C:1, D:2, E:2, F:5)
  \   \
   \   \- (E:1, F:2)
    \
     \- (G:1)
 ```
 
 And again:
 
 ```
 A - (B:1, C:2, D:3, E:4, F:8)
  \
   \- (G:1)
 ```
 
 And again:
 
 ```
 (A:1, B:2, C:3, D:4, E:5, F:9, G:2)
 ```
 
 and then paths have the following "popularity":
 
 ```
 A     1
 B     2
 C     3
 D     4
 E     5
 F     9
 G     2
 ```
 
 and the popularity contest would result in the paths being printed as:
 
 ```
 F
 E
 D
 C
 B
 G
 A
 ```

## Bonsai Trie

Bonsai Tries consist of 4 major parts

    Leaf Piles
    Trie Logs
    One Manicured Trie
    Compost Bins

Leaf Piles

Leaf piles and Trie Logs represent the major departure from the forest model. 
Instead of storing trie branches and leaves in a content addressable means
(the hash of the node) the leaf pile stores a single point in time key
addressable.  This removes the need for "trie climbing" for loading values. 
To load a value for SLOAD or for account information under the forest model
you start loading the trie root hash for the particular point in time and then
travers the branch and extension nodes until you find the leaf node. 

Leaf piles skips the trie climbing and indexes the leaves by address.  Leaf
piles alone presents two complications: chain reorganizations and trie hash
generation from writing to storage.  To address this the two other tables are
added.
Trie Logs

Trie logs is a per block representation of the diffs needed to go from the
parent block to the state represented by the new block. This includes both the
old and new values, if present.  From this diff we can roll forwards or
backwards to the block as recoded.  These logs are closely related to block
witnesses but have some notable differences

    Trie Logs do not contain merkle proofs.  Only the leaf data is stored in
the log, as it is presumed we have a complete set of non-leaf trie data for
the diff. (this may change as performance is evaluated).
    Trie Logs contain output values.  Block witnesses (as envisioned at the
time of the writing of this post) include only the input data and do not
include the "output" witness.  Some manifestations include the needed trie
branches to create new output data. 
    Trie Logs only contain changes.  Block witnesses also include any values
read from the trie state that are not also written.  For roll forwards and
roll backwards only the changes are required, which is a subset of the data
needed to execute some blocks. (this may be configurable as an option in
future revisions).

Manicured Trie

As the leaf data of trie is kept as a single point in time, so too are the
relevant branch and extension nodes needed to generate a merkle proof for a
particular node.

When data is written to the manicured trie all of the branches and extension
nodes directly in the path of the written leaf are removed and replaced with
the new values.
Compost Bins 

Compost bins is the final piece of the Bonsai Trie methodology.  Some RPC
calls rely on having state accessible at states not directly at the chain
head.  Most clients keep some limited amount of data and prune the rest.  To
accommodate these RPCs as a trie node is deleted in the Manicured Trie the
cuttings are placed in one of two compost bins.  One bin is the current bin
and the other is the expired bin. 

When a data value is read via the trie climbing technique and the content
addressed lookup is a "miss" then the query turns to the two compost bins.  If
the trie node existed during the lifecycle of that bin it should exist as
these are write only bins.  The trie climbing will continue as needed first
looking on the manicured trie and then in the compost bins.

The reason for the two bins is for efficient pruning of data.  The bins have a
"block horizon" during which the expired bin is emptied and the current and
expired bins are swapped.  This value will be user configurable, and the
initial default is envisioned to be 90k.  This results in a back-state of
90k-180k through which older "recent head" data is maintained, providing 2 to
4 weeks of backing data.  End users can adjust this value, but they need to be
careful that the horizon does not "trap" them in the event of a large reorg
(such as a 51% attack).  Ropsten and Ethereum Classic has observed reorgs up
to 20K blocks.

More advanced strategies may emerge for Eth 2 integrations, where the are more
compost bins correspond to epochs and they are disposed of once consensus
finalizes.

If a user wishes to keep a complete history they can set the compost bin
horizon to an absurdly large number (such as 2 billion) to ensure the bins
never empty.
