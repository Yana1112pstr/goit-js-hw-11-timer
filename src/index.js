import './sass/main.scss';

class CountdownTimer {
   constructor ({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
        fieldDays : document.querySelector(`${this.selector} span [data-value="days"]`),
        fieldHours : document.querySelector(`${this.selector} span [data-value="hours"]`),
        fieldMins : document.querySelector(`${this.selector} span [data-value="mins"]`),
        fieldSecs : document.querySelector(`${this.selector} span [data-value="secs"]`)
    };
    }

    start = () => {

    setInterval(() => {
        const currentDate = Date.now();
        const deltaTime = this.targetDate.getTime() - currentDate;

        const time = getTimeComponents(deltaTime);
        const {days, hours, mins, secs} = time;

        this.refs.fieldDays.textContent = days;
        this.refs.fieldHours.textContent = hours;
        this.refs.fieldMins.textContent = mins;
        this.refs.fieldSecs.textContent = secs;
    }, 1000)
}

}

function getTimeComponents(time) {
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = String(hours).padStart(2, "0")
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    mins = String(mins).padStart(2, "0")
    let secs = Math.floor((time % (1000 * 60)) / 1000);
    secs = String(secs).padStart(2, "0")

    return {days, hours, mins, secs};
};


const timer1 = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2021'),
  });

  //timer1.start();