class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class list{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertHead(node){
        if(this.head != null){
            node.next = this.head
            this.head = node;
        }
        else{
            this.head = node;
            if(this.tail == null) this.tail = node;
        } 
        this.size ++;
    }

    insertTail(node){
        if(this.tail != null){
            (this.tail).next = node;
            this.tail = node;
        }
        else{
            this.tail = node;
            if(this.head == null) this.tail = node;
        } 
        this.size ++;
    }

    deleteHead(){
        let temp = this.head.next;
        this.head.next = null
        this.head = temp;
        this.size --;
    }

    deleteTail(){
        let temp = this.head;
        for(let c = this.size ; c > 2 ;c--){
            temp = (temp).next;
            
        }
        this.tail = temp;
        this.size --;
    }

    size(){
        return this.size;
    }

    Stringer(x){
        if(x.next != null) return (x.data + ", " + this.Stringer(x.next));
        else return x.data
        
    }

    toString(){
        return (this.head.data + ", " + this.Stringer(this.head.next));
    }
}


let node1 = new node("node1");
let node2 = new node("node2");
let node3 = new node("node3");
let node4 = new node("node4");
let node5 = new node("node5");
let node6 = new node("node6");
let list1 = new list;

list1.insertHead(node5)
list1.insertHead(node4)
list1.insertHead(node3)
list1.insertHead(node2)
list1.insertHead(node1)
list1.insertTail(node6)
