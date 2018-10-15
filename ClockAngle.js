/**
 * Calculate the angle of clock
 * 
 * There are 360 degress total on the clock and there are 60 minutes.
 * So, 360/60 = 6 degrees per minute. So, angle of minute hand will be 
 * 6 * minutes (at hand location). 
 * 
 * The hour hand moves slightly every time a minute hand is moved. The hour 
 * hand moves around the entire clock after 12 hours / 720 minutes which is 
 * 360 / 720 = 0.5 degree per minute. Therefore, the full equation is 
 * 
 * Hour hand angle = 0.5 * change in minutes 
 *                 = 0.5 * (60 * hour + minutes)
 * 
 */

function clockAngle(hour, min) {
    var h = 0.5 * (60 * hour + min);
    var m = 6 * min;
    var angle = Math.abs(h - m);
    return (angle > 180) ? 360 - angle : angle;
}

console.log(clockAngle(12, 16));