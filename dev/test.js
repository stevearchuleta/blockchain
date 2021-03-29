const Blockchain = require ('./blockchain');

//==============
// NEW INSTANCE OF BLOCKCHAIN (arbitrarily named bitcoin)
//==============
const bitcoin = new Blockchain();   // instantiate a new Blockchain object and arbitrarily name it bitcoin 


//==============
// TEST the createNewBlock method
//==============

bitcoin.createNewBlock(2389, 'OINA90SDNF90N', '90ANSD9F0N9009N');
bitcoin.createNewBlock(111, 'OINASDF0SDNF9N', '90ANSD9F0N9009N');
bitcoin.createNewBlock(8459, 'OIASGH45NA90ANN', '90RR4LVANSD9N');


//==============
// TEST the createNewTransaction method
//==============
bitcoin.createNewTransaction(100, 'STEVE53NB65MIFDO', 'RANDY034KIMD73LOP'); // FIRST: this will be located in the pendingTransactions array
bitcoin.createNewBlock(8888, 'FFFNLIND999DNFU77OIA', '849OPI9333MMN');   // SECOND: mine/create a new block AFTER creating a TRANSACTION which will then place the newTransaction into this new block in the chain array

//==============
// FURTHER EXAMPLES to reinforce my understanding of the sequence of events
//==============
bitcoin.createNewTransaction(250, 'STEVE53NB65MIFDO', 'RANDY034KIMD73LOP'); // FIRST: this will be located in the pendingTransactions array
bitcoin.createNewTransaction(500, 'STEVE53NB65MIFDO', 'RANDY034KIMD73LOP'); // FIRST: this will be located in the pendingTransactions array
bitcoin.createNewTransaction(750, 'STEVE53NB65MIFDO', 'RANDY034KIMD73LOP'); // FIRST: this will be located in the pendingTransactions array

bitcoin.createNewBlock(9876, 'GGGGNLIND999DNFU77OIA', '1111849OPI9333MMN');   // SECOND: mine/create a new block AFTER creating a TRANSACTION which will then place the newTransaction into this new block in the chain array

console.log(bitcoin.chain[4]);