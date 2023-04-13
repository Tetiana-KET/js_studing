/*
// Отметка 12 часов - это 0°
// 1 час - 360°:12 = 30° (градусы часовой стрелки)
// 1 минута - 360°:60 = 6° (градусы минутной стрелки)
// Каждую минуту часовая стрелка смещается на 30°:60 = 0.5°
каждый отрезок между часами составляет 360 / 12, или 30 градусов.
Поскольку в часе 60 минут, каждое движение МИНУТНОЙ стрелки составляет 360 / 60, или 6 градусов.
Следовательно, вычисление угла минутной стрелки просто означает, что вы умножаете количество минут на 6
Поскольку в часе 60 минут, а ЧАСОВАЯ стрелка перемещается на 30 градусов каждые 60 минут, это означает, 
что часовая стрелка перемещается 30 / 60 на 0,5 градуса каждую минуту.
Следовательно, угол часовой стрелки можно рассчитать, умножив час на 30, умножив минуты на 0,5 и сложив эти два результата

minAngle = min*6
hourAngle = (hour * 30) + (minutes * 0.5)
Следовательно, мы можем просто вычислить абсолютное значение разницы между часовой и минутной стрелками Math.abs()

*/
function handAngle (date) {
    const now = new Date ();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    
    let minuteAngle = minutes * 6;
    let hourAngle = (hour * 30) + (minutes * 0.5);
    let angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360-angle);
  }

  function handAngle (date) {
    const now = new Date ();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    console.log(hour)
    console.log(hour % 12)
     console.log(minutes)
      hour = hour % 12;
    hour = hour > 0 ? hour : 12;
   
    
      let minuteAngle = minutes * 6;
      let hourAngle = (hour * 30) + (minutes * 0.5);
      let angle = Math.abs(hourAngle - minuteAngle);
          if (angle < 0) {
      angle = 360 + angle;
    }
    
  }