class Cat {
    name;
    weight;
    maxSpeed;
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }
    chirpCat(string) {
        return this.name + ' kêu ' + string
    }
    catch(Mouse) {
        if (this.maxSpeed >= Mouse.speed) {
            // console.log(this.name + ' đã bắt ' + Mouse.name)
            return true
        } else {
            // console.log(this.name + ' không bắt được ' + Mouse.name)
            return false
        }
    }
    eat(Mouse) {
        if (this.catch(Mouse) && Mouse.status) {
            this.weight += Mouse.getWeight()
            Mouse.status = false
        } else if(!this.catch(Mouse)){
            console.log('Chạy chậm lấy gì ăn')
        } else {
            console.log('Không thể ăn vì mùi nắm')
        }
    }
}