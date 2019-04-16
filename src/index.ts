import * as CryptoJs from 'crypto-js';

// index,hash,previousHash,data,timestamp
class Block{
    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;

    static calculateBlockHash = (previousBlock:Block):string => 
    {
        return CryptoJs.SHA256(
            previousBlock.index+
            previousBlock.previousHash+
            previousBlock.timestamp+
            previousBlock.data).toString();
    
    }

    static validateStructure=(aBlock:Block):boolean=>{
        return (typeof aBlock.index==="number"&&
         typeof aBlock.hash==="string"&&
         typeof aBlock.previousHash==="string"&&
         typeof aBlock.timestamp==="number"&&
         typeof aBlock.data==="string")
    }

    constructor(
        index:number,
        hash:string,
        previousHash:string,
        data:string,
        timestamp:number,
        ){
        this.index=index;
        this.hash=hash;
        this.previousHash=previousHash;
        this.data=data;
        this.timestamp=timestamp;
        }
}
const mjBlock:Block=new Block(0,"202020202020","","Hello",123456);
const chBlock:Block=new Block(1,"202022222202","202020202020","Hi",123457);
let blockchain:Block[]=[mjBlock,chBlock];

const getBlockchain = ():Block[] =>  blockchain;
const getLatestBlock = ():Block => blockchain[blockchain.length-1];
const getNewTimeStamp=():number => Math.round(new Date().getTime()/1000);

const createNewBlock=(data:string):Block=>{
    const previousBlock :Block = getLatestBlock();
    const newIndex :number = previousBlock.index+1;
    const nextTimeStamp :number = getNewTimeStamp();
    const hash :string = Block.calculateBlockHash(previousBlock);
    const newBlock:Block = new Block(newIndex,hash,previousBlock.hash,data,nextTimeStamp);
    addBlock(newBlock);
    return newBlock;
}
const getHashforBlock = (aBlock:Block):string => Block.calculateBlockHash(aBlock);


const isBlockValid = (candidateBlock:Block,previousBlock:Block):boolean =>{
    if(!Block.validateStructure(candidateBlock)){
        console.log("1");
        
        return false;
    }
    else if(previousBlock.index+1!==candidateBlock.index){
        console.log("2");
        return false;}
    else if(previousBlock.hash!==candidateBlock.previousHash){
        console.log("3");
        return false;}
    else if(candidateBlock.hash!==getHashforBlock(previousBlock)){
    console.log("3");
    return false;
    }
    else return true;
};

const addBlock = (candidateBlock:Block):void=>{
    if(isBlockValid(candidateBlock,getLatestBlock())){
        console.log("add!");
        blockchain.push(candidateBlock);}
    else{console.log("fail")}
}
//create block and chaining block
createNewBlock("기모띄");
createNewBlock("감자띄");
createNewBlock("모띄띄");
console.log(blockchain);
export {}