class Apple {
    weight
    constructor(weight) {
        this.weight = weight
    }
    getWeight() {
        return this.weight
    }
    setWeight(weight) {
        this.weight = weight
    }
    decrease() {
        this.weight -= 1
    }
    isEmpty() {
        if (this.weight === 0) {
            return false
        } else {
            return true
        }
    }
}