class Chronometer {
    currentTime = 0;
    intervalId = null;
  constructor() {

  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => 
    {
      this.currentTime ++
      if (printTimeCallback){ 
         printTimeCallback()
        }
  },1000)
}


  getMinutes() {
     return Math.floor(this.currentTime / 60)
}

  getSeconds() {
    return Math.floor(this.currentTime % 60) 
  }

  computeTwoDigitNumber(value) {
    return (value + "00").slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
  setInterval(this.currentTime = 0)
  }

  split() {

  }
}
