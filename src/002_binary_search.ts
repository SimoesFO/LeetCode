class BinarySearch {
  list: number[]

  constructor(list:  number[]){
    this.list = list
  }

  indexOf(item: number): number {
    let begin = 0
    let end = this.list.length - 1

    while (begin <= end) {
      let half = Math.floor((begin + end) / 2)
      let guess = this.list[half]

      if(guess === item) return half
      
      if(guess > item) end = half - 1

      if(guess <= item) begin = half + 1
    }

    return -1
  }
}

{
const ordered_list = [1,4,5,6,11,15,20,21,32]
const search = new BinarySearch(ordered_list)
const result = search.indexOf (6)
console.log(result)
}
