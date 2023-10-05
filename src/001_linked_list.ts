class LinkNode<T> {
  value: T
  next: LinkNode<T> | undefined
  prev: LinkNode<T> | undefined
  
  constructor(value: T) {
    this.value = value
    this.next = undefined
    this.prev = undefined
  }
}



class LinkedList<T> {
  head: LinkNode<T> | undefined
  tail: LinkNode<T> | undefined
  length: number

  constructor() {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  

  addFirstNode(value: T)  {
    if(this.length !== 0) return false

    const newNode = new LinkNode(value);
    this.head = newNode
    this.tail = newNode
    this.length++
    return true
  }

  addHead(value: T) {
    if( this.addFirstNode(value) ) return;

    const newNode = new LinkNode(value)
    this.head!.prev = newNode
    newNode.next = this.head
    this.head = newNode;
    this.length++
  }

  addTail(value: T) {
    if( this.addFirstNode(value) ) return;

    const newNode = new LinkNode(value)
    this.tail!.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.length++
  }

  addAt(value: T, position: number) {
    if(position == 0)  return this.addHead(value)

    if(position === this.length) return this.addTail(value)

    if(position < 0 || position > this.length) return

    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current?.next;
    }

    const newNode = new LinkNode(value)
    newNode.prev = current!.prev
    newNode.next = current
    current!.prev!.next = newNode
    current!.prev = newNode
    this.length++
  }

  removeHead() {
    if(!this.head) return 

    const current = this.head
    this.head = current.next
    this.head!.prev = undefined
    current.next = undefined
    this.length--
  }

  removeTail() {
    if(!this.tail) return 

    const current = this.tail
    this.tail = current.prev
    this.tail!.next = undefined
    current.prev = undefined
    this.length--
  }

  removeAt(position: number) {
    if(position === 0) return this.removeHead()

    if(position === (this.length - 1)) return this.removeTail()

    if(position < 0 || position >= this.length) return

    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current?.next;
    }

    current!.prev!.next = current?.next
    current!.next!.prev = current?.prev
    current!.prev = undefined
    current!.next = undefined
    this.length--
  }

  removeList() {
    this.head = undefined
    this.tail = undefined
    this.length = 0
  }

  indexOf(value: T) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if(current?.value == value) return i;

      current = current?.next;
    }

    return -1
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current?.value)
      current = current?.next;
    }
  }
}

const list = new LinkedList()
list.addHead(5)
list.addHead(6)
list.addTail(9)
list.addAt(1, 1)
list.print()
console.log()
// list.removeHead()
// list.removeHead()
// list.removeTail()
// list.removeAt(2)
// list.print()
// list.removeList()
// list.print()
// console.log(list)

console.log(list.indexOf(10))