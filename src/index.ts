// index,hash,previousHash,data,timestamp
class Block{
    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;
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
let chain:[Block]=[mjBlock];
chain.push(chBlock);
console.log(chain);
export {}