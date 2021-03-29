const Blockchain = require ('./blockchain');

const bitcoin = new Blockchain();   // instantiate a new Blockchain object and arbitrarily name it bitcoin 

bitcoin.createNewBlock(2389, 'OINA90SDNF90N', '90ANSD9F0N9009N');
bitcoin.createNewBlock(111, 'OINASDF0SDNF9N', '90ANSD9F0N9009N');
bitcoin.createNewBlock(8459, 'OIASGH45NA90ANN', '90RR4LVANSD9N');

console.log(bitcoin);
