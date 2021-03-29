
function Blockchain() {
    this.chain = [];            // the substantive blocks that are created and mined in my blockchain will be stored in this chain array.
    this.pendingTransactions = [];  // purgatory: new transactions are held in this pendingTransactions array, not yet recorded onto the blockchain.
}


Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {          // these newBlocks will be block(s) inside of the chain array.
        index : this.chain.length + 1,
        timestamp : Date.now(),
        transactions : this.pendingTransactions,  // when a new block is created (via mining), all of the new/pending transactions will be stored in the chain array.
        nonce : nonce,   // arbitrary number that is a generated proof of work.
        hash : hash,   // data from the new/current block yielded by a hash of the transaction property
        previousBlockHash : previousBlockHash  //data from the previous block instance.
    };

    this.pendingTransactions = [];      // once all of the transactions have been placed into this new/current block and stored in the pendingTransactions array,
                                    // clear the pendingTransactions array for another instance
    this.chain.push(newBlock);

    return newBlock;

};

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length -1];
};

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const newTransaction = {
        amount : amount,
        sender : sender,
        recipient : recipient
    }
    this.pendingTransactions.push(newTransaction);

    // return the exact identifier of the block where this newTransaction will be located (the latest block in the chain array) by invoking this.GetLastBlock() (which returns the soon-to-be previous block object in the chain array)
    // retrieve the index property (the identifier) of this particular block in the chain array; the plus one means that I am one-block-to-the-right of the previous-getLastBlock()-block in the chain array.
    return this.getLastBlock()['index'] + 1;
};

module.exports = Blockchain;