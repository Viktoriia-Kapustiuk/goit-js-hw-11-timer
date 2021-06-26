const $day = document.querySelector('[data-value="days"]'),
      $hour = document.querySelector('[data-value="hours"]'),
      $min = document.querySelector('[data-value="mins"]'),
      $sec = document.querySelector('[data-value="secs"]'),
      $timer = document.querySelector('.timer');

class Timer {
    constructor({ onTick, selector, deadline}) {
        this.onTick = onTick;
        this.selector = selector;
        this.deadline = deadline;
    }

    start() {

    this.timers = setInterval() => {
    const currentTime = Date.now();
    const deltaTime = this.deadline - currentTime;
    const {days, hours, mins, secs} = this.getTime( deltaTime);
    
    }
}