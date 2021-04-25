const TICK = Symbol('tick')
const TICK_HANDLER = Symbol('tick-handler')

export class Timeline {
  constructor() {
    this[TICK] = () => {
      console.log('tick')
      requestAnimationFrame(this[TICK])
    }
  }

  start() {
    this[TICK]()

  }

  pause() {

  }

  resume() {

  }

  reset() {

  }
}

export class Animation {
  constructor(object, property, startValue, endValue, duration, timingFunction) {
    this.object = object
    this.property = property
    this.startValue = startValue
    this.endValue = endValue
    this.duration = duration
    this.timingFunction = timingFunction
  }

  receiveTime (time) {
    let range = (this.endValue - this.startValue)
    this.object[this.property] = this.startValue + range * time / duration
  }
}