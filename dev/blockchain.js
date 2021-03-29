
function Blockchain() {
    this.chain = [];            // the substantive blocks that are created and mined in my blockchain will be stored in this chain array.
    this.newTransactions = [];  // new transactions are held in this newTransactions array.
}


Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {          // these newBlocks will be block(s) inside of the chain array.
        index : this.chain.length + 1,
        timestamp : Date.now(),
        transactions : this.newTransactions,  // when a new block is created, all of the new/pending transactions will be stored in the newTransaction array.
        nonce : nonce,   // arbitrary number that is a generated proof of work.
        hash : hash,   // data from the new/current block yielded by a hash of the transaction property
        previousBlockHash : previousBlockHash  //data from the previous block instance.
    };

    this.newTransactions = [];      // once all of the transactions have been placed into this new/current block and stored in the newTransactions array,
                                    // clear the newTransactions array for another instance
    this.chain.push(newBlock);

    return newBlock;

};

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length -1];
};

module.exports = Blockchain;