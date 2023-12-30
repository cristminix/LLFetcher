/*class Queue {
    static clone(instance){
        const keys = Object.keys(instance.items)
        const copyObj = new Queue()
        keys.map((k,i)=>{
            const item = instance.items[k]
            copyObj.enqueue(item)
        })
        return copyObj
    }
	constructor() {
		this.items = {}
		this.frontIndex = 0
		this.backIndex = 0
	}
	enqueue(item) {
		this.items[this.backIndex] = item
		this.backIndex++
		return item + ' inserted'
	}
	dequeue() {
		const item = this.items[this.frontIndex]
		delete this.items[this.frontIndex]
		this.frontIndex++
		return item
	}
	peek() {
		return this.items[this.frontIndex]
	}
	get printQueue() {
		return this.items
	}
}
*/
class QueueResult{
    static INIT = 0
    static FAILED = 1
    static FAILED_MEDIA = 2
    static FAILED_TRANS = 3
    static SUCCESS_MEDIA = 4
    static SUCCESS_TRANS = 5
    static SUCCESS = 6

    static toStr(result){
        const strs =  [
            "INIT",
            "FAILED",
            "FAILED_MEDIA",
            "FAILED_TRANS",
            "SUCCESS_MEDIA",
            "SUCCESS_TRANS",
            "SUCCESS"
        ]
        if(typeof strs[result] != "undefined"){
            return strs[result]
        }
        return `${result} : Unknown`
    }
}
class QueueState{
    static INIT = 0
    static FETCH_META = 1
    
    static FETCH_META_FAIL = 2
    static FETCH_META_RETRY = 3
    static FETCH_META_OK = 4
    
    static FETCH_MEDIA = 5
    static FETCH_MEDIA_FAIL = 6
    static FETCH_MEDIA_RETRY = 7
    static FETCH_MEDIA_OK = 8

    static FETCH_TRANS = 9
    
    static FETCH_TRANS_FAIL = 10
    static FETCH_TRANS_RETRY = 11
    
    static FETCH_TRANS_OK = 12


    static FINISHED = 13
    static INTERUPTED = 14

    static toStr(state){
        const strs =  [
            "INIT",

            "FETCH_META",
            
            "FETCH_META_FAIL",
            "FETCH_META_RETRY",
            "FETCH_META_OK",

            "FETCH_MEDIA",
            "FETCH_MEDIA_FAIL",
            "FETCH_MEDIA_RETRY",
            "FETCH_MEDIA_OK",

            "FETCH_TRANS",
            "FETCH_TRANS_FAIL",
            "FETCH_TRANS_RETRY",
            "FETCH_TRANS_OK",

            "FINISHED",
            "INTERUPTED"

        ]
        if(typeof strs[state] != "undefined"){
            return strs[state]
        }
        return `${state} : Unknown`
    }
}
class QueueItem{
    state=QueueState.INIT
    loaded=null
    size=null
    idx=null
    percentage=null
    constructor(idx, state){
        this.state = state
        this.idx=idx
    }
    setState(state){
        this.state = state
    }

    setSize(size){
        this.size = size
    }

    setLoaded(loaded){
        this.loaded = loaded
        this.percentage = Math.floor(this.loaded / this.size * 100)

    }

    setPercentage(percentage){
        this.percentage = percentage
    }

}
class Queue{
    static clone(instance){
        const keys = Object.keys(instance.items)
        const copyObj = new Queue()
        keys.map((k,i)=>{
            const item = instance.items[k]
            copyObj.enqueue(item)
        })
        return copyObj
    }
    constructor() {
        this.items = []
    }
    // enqueue function
    enqueue(element){    
        // adding element to the queue
        this.items.push(element)
    }

    // dequeue function
    dequeue(){
        // removing element from the queue
        // returns underflow when called
        // on empty queue
        if(this.isEmpty())
            return "underflow"
        return this.items.shift()
    }

    // peek function
    peek(){
        // returns the Front element of
        // the queue without removing it.
        if(this.isEmpty())
            return "no_elements_in_queue"
        return this.items[0]
    }
    // isEmpty function
    isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0
    }
    // printQueue function
    printQueue()    {
        let str = ""
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" "
        return str
    }

}
class QueueData {
    course=null
    tocs=null
    tocArr=[]
    sections=null
    vidx={}
    pkIdxMaps={}
    defaultQueue = null
    constructor(sections, tocs, course){
        this.sections = sections
        this.tocs = tocs
        this.course = course
        this.defaultQueue = new Queue()
        this.buildQueue()
    }

    buildQueue(){
        let sidx = 0
        let midx = 0
        if(this.sections){
            for(const section of this.sections){
                let tidx = 0    
                for(const toc of this.tocs[section.slug]){
                    const pk=toc.id
                    this.tocArr.push(toc)
                    const pkIdx = `pk-${pk}`
                    const vidxKey = `v-${sidx}-${tidx}`
                    this.pkIdxMaps[pkIdx]=midx
                    this.vidx[vidxKey]=midx
                    this.defaultQueue.enqueue(new QueueItem(midx,QueueState.INIT))
                    tidx += 1
                    midx += 1

                }
                sidx += 1
            }
        }
    }

    getByVidx(sidx, tidx){
        const vidxKey = `v-${sidx}-${tidx}`
        const midx = this.vidx[vidxKey]
        return this.tocArr[midx]

    }
    getByPkIdx(pk){
        const pkIdx = `pk-${pk}`
        const midx = this.pkIdxMaps[pkIdx]
        return this.tocArr[midx]
    }
    getByIdx(idx){
        return this.tocArr[idx]
    }
    cloneQueue(){
        return Queue.clone(this.defaultQueue)
    }

    getTocArr(){
        return this.tocArr
    }
    pk2Idx(pk){
        const pkIdx = `pk-${pk}`
        const midx = this.pkIdxMaps[pkIdx]
        return midx        
    }
    getQueueItem(idx){
        return this.defaultQueue.items[idx]
    }
    
}
export default Queue
export{QueueItem,QueueState,QueueData,QueueResult}