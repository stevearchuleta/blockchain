const sha256 = require('sha256');

function Blockchain() {
    this.chain = [];            // the substantive blocks that are created and mined in my blockchain will be stored in this chain array.
    this.pendingTransactions = [];  // purgatory: new transactions are held in this pendingTransactions array, not yet recorded onto the blockchain.
}


Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {          // these newBlocks will be block(s) inside of the chain array.
        index : this.chain.length + 1,
        timestamp : Date.now(),
        transactions : this.pendingTransactions,  // when a new block is created (via mining), all of the new/pending transactions will be stored in the chain array.
        nonce : nonce,   // specific number (specific value) that is a generated during the while loop in the proof of work method.
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

// hash the currentBlockData: 1) concatenate parameters into one long string; 2) hash this long string; 
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + JSON.stringify(currentBlockData) + nonce.toString() ;
    const hash = sha256(dataAsString);
    return hash;
};

// PROOF OF WORK METHOD (secures my blockchain)
// bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce); => constantly increment this nonce value in order to generate different hashes
// REPEATEDLY HASH BLOCK UNTIL IT FINDS THE CORRECT HASH => '0000KIMNJHYD8765' => which will be any hash that BEGINS with FOUR ZEROS!
// USES CURRENT BLOCK DATA FOR THE HASH, BUT ALSO THE USES THE PREVIOUS BLOCK HASH
// CONTINUOUSLY CHANGES NONCE VALUE UNTIL IT FINDS THE CORRECT HASH
// RETURNS THE NONCE VALUE THAT CREATES THE CORRECT HASH
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    
    //THIS WHILE LOOP (which could iterate 100,000 plus times) IS THE REASON THAT PROOF OF WORK IS SO ENERGY INTENSIVE
    while (hash.substring(0, 4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);  //generate a new hash and reassign to hash variable
        //console.log(hash);
        
    }

   return nonce;
};


module.exports = Blockchain;