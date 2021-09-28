let tom = new Cat('Tom', 10, 10);
let jerry = new Mouse('Jerry', 10, 100, true);
tom.catch(jerry)
tom.eat(jerry);
console.log(jerry.status)
console.log(tom.weight)