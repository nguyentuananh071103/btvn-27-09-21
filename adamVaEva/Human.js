class Human {
    name
    gender
    weight

    constructor(name, gender, weight) {
        this.name = name
        this.gender = gender
        this.weight = weight
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getWeight() {
        return this.weight
    }

    setWeight(weight) {
        this.weight = weight
    }

    isMale() {
        if (this.gender === "Male") {
            return true
        } else {
            return false
        }
        // return this.gender === "Male"
    }

    getGender() {
        return this.gender
    }

    setGender(gender) {
        this.gender = gender
    }

    say(string) {
        console.log(string)
    }

    checkApple(Apple) {
        return Apple.isEmpty()
    }

    eat(Apple) {
        if (Apple.isEmpty()) {
            Apple.decrease()
            this.weight += 1
        } else {
            console.log("Đã hết táo")
        }
    }
}