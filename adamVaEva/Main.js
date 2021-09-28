let apple = new Apple(10);
let human = new Human("Như Anh", "Male", 50);
// console.log(human.getName())
// console.log(human.getGender())
// console.log(human.getWeight())
// console.log(human.isMale())
// human.setGender("Other")
// console.log(human.isMale())
// console.log(human.isMale())
// console.log(human.getGender())
// console.log(human.checkApple(apple))
// console.log(apple.getWeight())
// console.log(human.getWeight())
// human.eat(apple)
// console.log(apple.getWeight())
// console.log(human.getWeight())
// human.say("Ông người này là con lươn chúa!")

function test() {
    console.log(apple.getWeight())
    console.log(human.getWeight())
    human.eat(apple)
    console.log(apple.getWeight())
    console.log(human.getWeight())
}

test()