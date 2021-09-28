class Remote {
    code;

    constructor(code) {
        this.code = code
    }

    channelControl(tv, num) {
        tv.channelControl(num)
    }

    soundControlUp(tv, num) {
        return tv.soundControlUp(num)

    }

    soundControlDown(tv, num) {
        return tv.soundControlDown(num)
    }

    controlTv(tv) {
        if (tv.getStatus()) {
            tv.setStatus(false)
        } else {
            tv.setStatus(true)
        }
    }
}