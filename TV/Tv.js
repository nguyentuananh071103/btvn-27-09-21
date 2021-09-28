class Tv {
    channel
    sound
    status

    constructor(channel, sound) {
        this.channel = channel
        this.sound = sound
        this.status = false
    }

    getSound() {
        if (this.status === true) {
            console.log("TV is at  " + this.sound + " volume")
        }else {
            console.log("Bật Tv đã bạn êy")
        }
    }

    getChannel() {
        if (this.status === true) {
            console.log("TV is on channel " + this.channel)
        } else {
            console.log("Bật Tv đã bạn êy")
        }
    }

    channelControl(channel) {
        if (this.status === true) {
            this.channel = channel
            console.log(" Go to Channel " + channel)
        }
    }

    soundControlUp(num) {
        if (this.status === true) {
            this.sound += num
            console.log("Sound up " + num)
        } else {
            console.log("Tivi is off")
        }

    }

    soundControlDown(num) {
        if (this.status === true) {
            this.sound -= num
            console.log("Sound down " + num)
        } else {
            console.log("Tivi is off")
        }
    }

    getStatus() {
        return this.status
    }

    setStatus(status) {
        this.status = status
    }
}