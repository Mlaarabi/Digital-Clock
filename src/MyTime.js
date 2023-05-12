import React , {useEffect, useState} from 'react'

function MyTime() {
  var time = new Date(); 
  var heure = time.getHours(); 
  var minute = time. getMinutes(); 
  var seconde = time. getSeconds(); 

  var formatDeHeur = heure ; 
  var formatDeMinute = minute < 10 ? "0" + minute : minute ; 
  var formatDeSeconde = seconde < 10 ? "0" + seconde : seconde ; 
  var formatDeTemps = formatDeHeur + ":" + formatDeMinute + ":" + formatDeSeconde  ; 
  const [temp, setTime] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeId);
  }, []);
  return (
    <div>
      {formatDeTemps}
    </div>
  )
}

export default MyTime

