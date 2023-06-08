let p =document.getElementById("time");
let exm = new Date('2023-08-17T10:00:00').getTime();
let exm_dt = new Date('2023-08-17T10:00:00');


setInterval(tchange , 1000);

function tchange() {


    let now = Date.now();
    let time = exm-now;


    if (time>0) {

        let total_sec = time/1000;

        let days = Math.floor(total_sec/(60*60*24));
        let left1 = total_sec%(60*60*24);
        if (days<10) {
            days = `0${days}`
        }
    
    
        let hours = Math.floor(left1/(60*60));
        let left2 = left1%(60*60);
        if (hours<10) {
            hours = `0${hours}`
        }
    
    
        let minutes = Math.floor(left2/60);
        if (minutes<10) {
            minutes = `0${minutes}`
        }
    
        
        let seconds = Math.floor(left2%60);
        if (seconds<10) {
            seconds = `0${seconds}`
        }
    
        p.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

        
    } else {
        let yr = exm_dt.getFullYear();
        let month = exm_dt.getMonth();
        let day = exm_dt.getDate();
        let hour = exm_dt.getHours();
        let minute = exm_dt.getMinutes();
        p.innerHTML = `Exam has already started from 0${day}/0${month}/${yr} at ${hour}:0${minute}AM`
    }

}