export class Node{
    data:number
    next:Node

    constructor(data:number, next:Node = null){
        this.data = data
        this.next = next
    }
}