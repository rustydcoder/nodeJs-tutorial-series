class Add {
   constructor(a, b) {
      this.a = a;
      this.b = b;
   }
   firstAndSecond() {
      return `The sum of ${this.a} and ${this.b} is ${this.a + this.b}`
   }
}

function times(a, b) {
   return b * a
}

const array = ['apple', 5, { name: 'John Doe' }]

module.exports = { Add, times, array }